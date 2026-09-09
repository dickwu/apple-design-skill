#!/usr/bin/env node
/**
 * pull-hig.mjs
 *
 * Re-pulls Apple's Human Interface Guidelines from developer.apple.com and writes
 * one Markdown file per guideline page into references/hig/, plus the generated
 * routing table references/hig-lookup.md.
 *
 * Apple serves the render data behind every HIG page as JSON at
 *   https://developer.apple.com/tutorials/data/design/human-interface-guidelines/<slug>.json
 * The script crawls the six top-level sections, keeps every page that applies to
 * iOS, iPadOS, or macOS (the platforms this skill maps to "mobile" and "desktop"),
 * drops guidance that applies only to tvOS, visionOS, or watchOS, and leaves the
 * remaining text as Apple wrote it so the references stay authoritative.
 *
 * Usage:
 *   node scripts/pull-hig.mjs [--out <dir>] [--lookup <file>] [--cache <dir>]
 *                             [--concurrency <n>] [--no-prune]
 *
 * Requires Node 18 or newer (global fetch). No dependencies.
 */

import { mkdir, readFile, readdir, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const DATA_BASE = 'https://developer.apple.com/tutorials/data/design/human-interface-guidelines';
const WEB_BASE = 'https://developer.apple.com/design/human-interface-guidelines';
const DEVELOPER_BASE = 'https://developer.apple.com';
const HIG_URL_RE = /^\/design\/human-interface-guidelines\/([a-z0-9-]+)$/;
const HIG_ABSOLUTE_RE = /^https:\/\/developer\.apple\.com\/design\/human-interface-guidelines\/([a-z0-9-]+)(#.*)?$/;

/**
 * Small status glyphs Apple uses inside comparison tables. Other images are dropped, except
 * that an image which is a table cell's only content is named, because an empty cell would
 * strip the row of its meaning (for example the button artwork in the Apple Pay button table).
 */
const IMAGE_GLYPHS = [
  { pattern: /checkmark/i, glyph: '✓' },
  { pattern: /crossout|xmark/i, glyph: '✗' },
];

/** Top-level HIG sections, in the order Apple lists them. */
const SECTIONS = ['getting-started', 'foundations', 'patterns', 'components', 'inputs', 'technologies'];

/** Platforms this skill covers. Everything else is filtered out of the references. */
const KEPT_PLATFORMS = new Set(['ios', 'ipados', 'macos']);
const DROPPED_PLATFORMS = ['tvOS', 'visionOS', 'watchOS'];
const ALL_PLATFORMS = ['iOS', 'iPadOS', 'macOS', 'tvOS', 'visionOS', 'watchOS'];
const PLATFORM_NAMES = { ios: 'iOS', ipados: 'iPadOS', macos: 'macOS', tvos: 'tvOS', visionos: 'visionOS', watchos: 'watchOS' };
const PLATFORM_LIST_RE = new RegExp(`^(${ALL_PLATFORMS.join('|')})(, (${ALL_PLATFORMS.join('|')}))*$`);

/**
 * Pages that do apply to iOS, iPadOS, or macOS but describe Apple-only hardware or
 * services with no cross-platform equivalent. The reason is printed in hig-lookup.md.
 */
const OMITTED_PAGES = {
  'action-button': 'Hardware button specific to iPhone and Apple Watch',
  'activity-rings': 'Apple Fitness feature',
  'always-on': 'Apple Watch display mode',
  'camera-control': 'Hardware control specific to iPhone',
  'carekit': 'Apple health framework',
  'carplay': 'Apple car platform',
  'designing-for-tvos': 'tvOS only',
  'designing-for-visionos': 'visionOS only',
  'designing-for-watchos': 'watchOS only',
  'game-center': 'Apple gaming service',
  'healthkit': 'Apple health framework',
  'homekit': 'Apple home-automation framework',
  'id-verifier': 'Apple identity service',
  'imessage-apps-and-stickers': 'iMessage extension format',
  'live-photos': 'Apple photo format',
  'mac-catalyst': 'Apple porting technology',
  'nearby-interactions': 'Ultra Wideband hardware feature',
  'photo-editing': 'Apple Photos extension format',
  'researchkit': 'Apple research framework',
  'shareplay': 'FaceTime feature',
  'shazamkit': 'Apple audio-recognition service',
  'tap-to-pay-on-iphone': 'iPhone-specific payment acceptance',
  'wallet': 'Apple Wallet passes',
  'workouts': 'Apple Watch fitness pattern',
};

/** Hand-written guides that live next to the pulled files and are never pruned. */
const CURATED_FILES = [
  { file: 'liquid-glass.md', title: 'Liquid Glass', covers: 'Liquid Glass rules distilled from the materials and color pages, with implementation notes for Flutter, Tauri, Electron, and React Native' },
];

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

function parseArgs(argv) {
  const defaults = {
    out: path.join(REPO_ROOT, 'references', 'hig'),
    lookup: path.join(REPO_ROOT, 'references', 'hig-lookup.md'),
    cache: null,
    concurrency: 6,
    prune: true,
    forcePrune: false,
  };
  return argv.reduce((opts, arg, index, all) => {
    if (arg === '--no-prune') return { ...opts, prune: false };
    if (arg === '--force-prune') return { ...opts, forcePrune: true };
    if (!arg.startsWith('--')) return opts;
    const key = arg.slice(2);
    const value = all[index + 1];
    if (value === undefined) throw new Error(`Missing value for --${key}`);
    if (key === 'concurrency') {
      const concurrency = Number(value);
      if (!Number.isInteger(concurrency) || concurrency < 1) throw new Error('--concurrency must be a positive integer');
      return { ...opts, concurrency };
    }
    if (key === 'out' || key === 'lookup' || key === 'cache') return { ...opts, [key]: path.resolve(value) };
    throw new Error(`Unknown option --${key}`);
  }, defaults);
}

// ---------------------------------------------------------------------------
// Fetching and crawling
// ---------------------------------------------------------------------------

async function fetchPageJson(slug, opts) {
  const cacheFile = opts.cache ? path.join(opts.cache, `${slug}.json`) : null;
  if (cacheFile) {
    try {
      return JSON.parse(await readFile(cacheFile, 'utf8'));
    } catch {
      // Cache miss: fall through to the network.
    }
  }
  const url = `${DATA_BASE}/${slug}.json`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status} for ${url}`);
  const text = await response.text();
  if (cacheFile) {
    await mkdir(opts.cache, { recursive: true });
    await writeFile(cacheFile, text);
  }
  return JSON.parse(text);
}

/** Pages listed by a collection page, in Apple's display order. */
function listedPages(collection) {
  const identifiers = (collection.topicSections ?? []).flatMap((section) => section.identifiers ?? []);
  return identifiers
    .map((identifier) => collection.references?.[identifier])
    .filter(Boolean)
    .map((ref) => ({ slug: ref.url?.match(HIG_URL_RE)?.[1], role: ref.role, title: ref.title }))
    .filter((entry) => entry.slug);
}

async function crawlSection(sectionSlug, opts) {
  const section = await fetchPageJson(sectionSlug, opts);
  const entries = listedPages(section);
  const direct = entries
    .filter((entry) => entry.role !== 'collectionGroup')
    .map((entry) => ({ ...entry, sectionPath: [section.metadata.title] }));
  const groups = await Promise.all(
    entries
      .filter((entry) => entry.role === 'collectionGroup')
      .map(async (group) => {
        const sub = await fetchPageJson(group.slug, opts);
        return listedPages(sub).map((entry) => ({ ...entry, sectionPath: [section.metadata.title, sub.metadata.title] }));
      }),
  );
  return [...direct, ...groups.flat()];
}

async function mapWithConcurrency(items, limit, task) {
  const results = new Array(items.length);
  let next = 0;
  async function worker() {
    while (next < items.length) {
      const index = next;
      next += 1;
      results[index] = await task(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.max(1, Math.min(limit, items.length)) }, worker));
  return results;
}

// ---------------------------------------------------------------------------
// Platform filtering
// ---------------------------------------------------------------------------

function platformsOf(json) {
  const raw = json.metadata?.customMetadata?.['supported-platforms'];
  return raw ? raw.split(/,\s*/).map((p) => p.trim().toLowerCase()).filter(Boolean) : null;
}

function prettyPlatforms(platforms) {
  return platforms.map((p) => PLATFORM_NAMES[p] ?? p).join(', ');
}

function omissionReason(slug, platforms) {
  if (OMITTED_PAGES[slug]) return OMITTED_PAGES[slug];
  if (platforms && !platforms.some((p) => KEPT_PLATFORMS.has(p))) {
    return `Only applies to ${prettyPlatforms(platforms)}`;
  }
  return null;
}

function platformsMentioned(text) {
  return ALL_PLATFORMS.filter((token) => new RegExp(`(^|[^A-Za-z])${token}([^A-Za-z]|$)`).test(text));
}

/** True when a heading, tab title, or table label refers only to platforms this skill drops. */
function isDroppedPlatformText(text) {
  const mentioned = platformsMentioned(text ?? '');
  return mentioned.length > 0 && mentioned.every((token) => DROPPED_PLATFORMS.includes(token));
}

function isDroppedPlatformLabel(text) {
  return PLATFORM_LIST_RE.test((text ?? '').trim()) && isDroppedPlatformText(text);
}

function platformGroupLabel(kept) {
  const mobile = kept.includes('iOS') && kept.includes('iPadOS') ? 'mobile' : kept.includes('iOS') ? 'phone' : kept.includes('iPadOS') ? 'tablet' : null;
  const desktop = kept.includes('macOS') ? 'desktop' : null;
  const parts = [mobile, desktop].filter(Boolean);
  if (parts.length === 0) return null;
  const label = parts.join(' and ');
  return label.charAt(0).toUpperCase() + label.slice(1);
}

/** "iOS, iPadOS" becomes "Mobile (iOS, iPadOS)" so cross-platform readers can skim. */
function relabelHeading(text) {
  const trimmed = (text ?? '').trim();
  if (!PLATFORM_LIST_RE.test(trimmed)) return trimmed;
  const kept = platformsMentioned(trimmed).filter((token) => !DROPPED_PLATFORMS.includes(token));
  const label = platformGroupLabel(kept);
  return label ? `${label} (${trimmed})` : trimmed;
}

function isDroppedBoilerplate(paragraph) {
  const match = paragraph.replace(/^\*+|\*+$/g, '').match(/^No additional considerations for ([^.]+)\./);
  return Boolean(match) && isDroppedPlatformText(match[1]);
}

// ---------------------------------------------------------------------------
// Inline rendering
// ---------------------------------------------------------------------------

function wrapInline(mark, text) {
  const trimmed = text.trim();
  if (!trimmed) return '';
  const lead = text.startsWith(' ') ? ' ' : '';
  const trail = text.endsWith(' ') ? ' ' : '';
  return `${lead}${mark}${trimmed}${mark}${trail}`;
}

function renderReference(node, ctx) {
  const ref = ctx.refs[node.identifier];
  const title = node.overridingTitle ?? ref?.title ?? node.identifier.split('/').pop();
  const url = ref?.url;
  if (!url) return title;
  const [pathPart, anchor] = url.split('#');
  if (pathPart === '' && anchor) return renderHigLink(ctx.slug, anchor, title, ctx);
  const slug = pathPart.match(HIG_URL_RE)?.[1] ?? url.match(HIG_ABSOLUTE_RE)?.[1];
  if (slug) return renderHigLink(slug, anchor, title, ctx);
  return url.startsWith('/') ? `[${title}](${DEVELOPER_BASE}${url})` : `[${title}](${url})`;
}

/** GitHub's heading-to-anchor rule: lowercase, strip punctuation, spaces become hyphens. */
function githubSlug(text) {
  return text.toLowerCase().replace(/[^\p{L}\p{N}\s_-]/gu, '').trim().replace(/\s+/g, '-');
}

/**
 * Maps Apple's heading anchors (lowercased) to the anchors the rendered Markdown actually has.
 * Relabelled platform headings get their new slug; headings inside dropped platform sections
 * map to an empty string so links to them fall back to the file itself.
 */
function anchorEntries(blocks, droppedContext = false) {
  const walk = blocks.reduce(
    (state, block) => {
      if (block.type === 'heading') {
        const insideSkipped = state.skipUntil !== null && block.level > state.skipUntil;
        const dropped = droppedContext || insideSkipped || isDroppedPlatformText(block.text);
        const entry = block.anchor ? [[block.anchor.toLowerCase(), dropped ? '' : githubSlug(relabelHeading(block.text))]] : [];
        const skipUntil = insideSkipped ? state.skipUntil : isDroppedPlatformText(block.text) ? block.level : null;
        return { skipUntil, entries: [...state.entries, ...entry] };
      }
      if (block.type === 'tabNavigator') {
        const skipped = droppedContext || state.skipUntil !== null;
        const nested = (block.tabs ?? []).flatMap((tab) => anchorEntries(tab.content ?? [], skipped || isDroppedPlatformText(tab.title)));
        return { ...state, entries: [...state.entries, ...nested] };
      }
      return state;
    },
    { skipUntil: null, entries: [] },
  );
  return walk.entries;
}

function anchorMapFor(json) {
  const content = json.primaryContentSections?.find((section) => section.kind === 'content')?.content ?? [];
  return new Map(anchorEntries(content));
}

/**
 * Anchors Apple no longer publishes (stale links on Apple's side) resolve to the file itself
 * and are collected so the run can report them.
 */
function resolveAnchor(slug, anchor, ctx) {
  const lowered = anchor.replace(/^#/, '').toLowerCase();
  const mapped = ctx.anchors.get(slug)?.get(lowered);
  if (mapped === undefined) ctx.staleAnchors.add(`${ctx.slug}.md -> ${slug}.md#${lowered}`);
  return mapped ?? '';
}

/** Links a page to another HIG page: local when that page is pulled, plain text otherwise. */
function renderHigLink(slug, anchor, title, ctx) {
  if (!ctx.included.has(slug)) return title;
  const target = slug === ctx.slug ? '' : `${slug}.md`;
  const resolved = anchor ? resolveAnchor(slug, anchor, ctx) : '';
  const hash = resolved ? `#${resolved}` : '';
  return target || hash ? `[${title}](${target}${hash})` : title;
}

function renderLink(node, ctx) {
  const destination = node.destination ?? node.url ?? '';
  const label = renderInline(node.titleInlineContent, ctx) || node.title || destination;
  const hig = destination.match(HIG_ABSOLUTE_RE);
  if (hig) return renderHigLink(hig[1], hig[2], label, ctx);
  return `[${label}](${destination.startsWith('/') ? `${DEVELOPER_BASE}${destination}` : destination})`;
}

function imageLabel(identifier) {
  const stem = identifier.replace(/\.[a-z0-9]+$/i, '').replace(/[-_]+/g, ' ').trim();
  return stem ? `*image: ${stem}*` : '';
}

function renderImage(node, ctx) {
  if (!ctx.inTable) return '';
  const glyph = IMAGE_GLYPHS.find((entry) => entry.pattern.test(node.identifier ?? ''));
  if (glyph) return glyph.glyph;
  const alt = (node.metadata?.abstract ?? []).map((part) => part.text ?? '').join('').trim();
  return alt ? `*${alt}*` : imageLabel(node.identifier ?? '');
}

function renderInlineNode(node, ctx) {
  switch (node.type) {
    case 'text':
      return node.text ?? '';
    case 'emphasis':
    case 'newTerm':
      return wrapInline('*', renderInline(node.inlineContent, ctx));
    case 'strong':
      return wrapInline('**', renderInline(node.inlineContent, ctx));
    case 'codeVoice':
      return `\`${node.code ?? ''}\``;
    case 'reference':
      return renderReference(node, ctx);
    case 'link':
      return renderLink(node, ctx);
    case 'image':
      return renderImage(node, ctx);
    case 'video':
      return '';
    default:
      return node.inlineContent ? renderInline(node.inlineContent, ctx) : node.text ?? '';
  }
}

function renderInline(nodes, ctx) {
  return (nodes ?? []).map((node) => renderInlineNode(node, ctx)).join('');
}

function collectReferences(block, ctx) {
  const nodes = block.inlineContent ?? [];
  return nodes
    .filter((node) => node.type === 'reference')
    .map((node) => {
      const ref = ctx.refs[node.identifier];
      const slug = ref?.url?.match(HIG_URL_RE)?.[1];
      return slug && ctx.included.has(slug) && slug !== ctx.slug ? { slug, title: ref.title } : null;
    })
    .filter(Boolean);
}

// ---------------------------------------------------------------------------
// Block rendering
// ---------------------------------------------------------------------------

function headingLine(level, text) {
  return `${'#'.repeat(Math.min(level, 6))} ${relabelHeading(text)}`;
}

function renderParagraph(block, ctx) {
  const text = renderInline(block.inlineContent, ctx).trim();
  if (!text || isDroppedBoilerplate(text)) return [];
  return [text, ''];
}

function renderAside(block, ctx, level) {
  const label = block.name ?? (block.style ? block.style.charAt(0).toUpperCase() + block.style.slice(1) : 'Note');
  const inner = trimBlankEdges(renderBlocks(block.content ?? [], ctx, level));
  if (inner.length === 0) return [];
  const [first, ...rest] = inner;
  return [`> **${label}:** ${first}`, ...rest.map((line) => (line ? `> ${line}` : '>')), ''];
}

function cellText(cell, outerCtx) {
  const ctx = { ...outerCtx, inTable: true };
  return (cell ?? [])
    .map((block) => (block.type === 'paragraph' ? renderInline(block.inlineContent, ctx) : renderBlocks([block], ctx, 6).join(' ')))
    .join('<br>')
    .replace(/\n+/g, ' ')
    .replace(/\|/g, '\\|')
    .trim();
}

/**
 * Apple marks merged cells in `extendedData` ("row_col": { rowspan, colspan }); a span of 0
 * means the cell is covered by the origin above or to the left. Markdown has no merged cells,
 * so covered cells repeat the origin's text.
 */
function resolveSpans(rows, extendedData = {}) {
  const spanOf = (r, c) => extendedData[`${r}_${c}`] ?? { rowspan: 1, colspan: 1 };
  const originText = (r, c) => {
    if (r < 0 || c < 0) return '';
    const span = spanOf(r, c);
    if (span.rowspan === 0) return originText(r - 1, c);
    if (span.colspan === 0) return originText(r, c - 1);
    return rows[r]?.[c] ?? '';
  };
  return rows.map((row, r) => row.map((_, c) => originText(r, c)));
}

function renderTable(block, ctx) {
  const cells = resolveSpans((block.rows ?? []).map((row) => row.map((cell) => cellText(cell, ctx))), block.extendedData);
  if (cells.length === 0) return [];
  const rows = block.header === 'row' ? cells : [cells[0].map(() => ''), ...cells];
  const [header, ...body] = rows;
  const kept = body.filter((row) => !isDroppedPlatformLabel(row[0]));
  const line = (cells) => `| ${cells.join(' | ')} |`;
  return [line(header), `| ${header.map(() => '---').join(' | ')} |`, ...kept.map(line), ''];
}

function renderList(block, ctx, level, ordered) {
  const items = (block.items ?? []).flatMap((item, index) => {
    const marker = ordered ? `${index + 1}.` : '-';
    const indent = ' '.repeat(marker.length + 1);
    const lines = trimBlankEdges(renderBlocks(item.content ?? [], ctx, level));
    if (lines.length === 0) return [];
    const [first, ...rest] = lines;
    return [`${marker} ${first}`, ...rest.map((line) => (line ? `${indent}${line}` : ''))];
  });
  return items.length ? [...items, ''] : [];
}

/**
 * Tabs become sub-headings. A tab whose only content was an image still carries meaning in
 * its title (keyboard types, example names), so those titles are kept as a caption line.
 */
function renderTabs(block, ctx, level) {
  const tabLevel = Math.min(level + 1, 6);
  const tabs = (block.tabs ?? []).filter((tab) => !isDroppedPlatformText(tab.title));
  const rendered = tabs.map((tab) => {
    const content = tab.content ?? [];
    const repeatsTitle = content[0]?.type === 'heading' && content[0].text === tab.title;
    const body = trimBlankEdges(renderBlocks(repeatsTitle ? content.slice(1) : content, ctx, tabLevel));
    return { title: tab.title, body };
  });
  const sections = rendered.filter((tab) => tab.body.length > 0).flatMap((tab) => [headingLine(tabLevel, tab.title), '', ...tab.body, '']);
  const imageOnly = rendered.filter((tab) => tab.body.length === 0).map((tab) => tab.title);
  const caption = imageOnly.length > 0 && tabs.length > 1 ? [`*Illustrated: ${imageOnly.join(', ')}.*`, ''] : [];
  return [...sections, ...caption];
}

/** Columns of a row are side-by-side cards. Card headings become bold lines so they don't fragment the outline. */
function renderRow(block, ctx, level) {
  return (block.columns ?? []).flatMap((column) =>
    (column.content ?? []).flatMap((child) =>
      child.type === 'heading' ? [`**${relabelHeading(child.text)}**`, ''] : renderBlock(child, ctx, level),
    ),
  );
}

function renderTermList(block, ctx, level) {
  return (block.items ?? []).flatMap((item) => {
    const term = renderInline(item.term?.inlineContent, ctx);
    const definition = trimBlankEdges(renderBlocks(item.definition?.content ?? [], ctx, level));
    return [`**${term}**`, ...definition.map((line) => (line ? `  ${line}` : '')), ''];
  });
}

function renderBlock(block, ctx, level) {
  switch (block.type) {
    case 'heading':
      return [headingLine(Math.max(block.level, level), block.text), ''];
    case 'paragraph':
      return renderParagraph(block, ctx);
    case 'aside':
      return renderAside(block, ctx, level);
    case 'table':
      return renderTable(block, ctx);
    case 'row':
      return renderRow(block, ctx, level);
    case 'small': {
      const text = renderInline(block.inlineContent, ctx).trim();
      return text ? [`*${text}*`, ''] : [];
    }
    case 'tabNavigator':
      return renderTabs(block, ctx, level);
    case 'unorderedList':
      return renderList(block, ctx, level, false);
    case 'orderedList':
      return renderList(block, ctx, level, true);
    case 'codeListing':
      return ['```' + (block.syntax ?? ''), ...(block.code ?? []), '```', ''];
    case 'termList':
      return renderTermList(block, ctx, level);
    case 'links':
    case 'video':
    case 'image':
      return [];
    default:
      if (block.inlineContent) return renderParagraph(block, ctx);
      return block.content ? renderBlocks(block.content, ctx, level) : [];
  }
}

/** Renders nested blocks (inside tabs, list items, asides). No platform-section skipping here. */
function renderBlocks(blocks, ctx, level) {
  return blocks.flatMap((block) => renderBlock(block, ctx, level));
}

/**
 * Renders the top-level content of a page. Sections headed by a dropped platform are
 * skipped until the next heading of the same or higher level. The Resources section
 * is reduced to its "Related" links, which become the "Related guidelines" list.
 */
function renderBody(blocks, ctx) {
  const initial = { skipUntil: null, level: 1, inResources: false, resourcesSub: null, related: [], lines: [] };
  const final = blocks.reduce((state, block) => {
    if (block.type === 'heading') return reduceHeading(state, block);
    if (state.skipUntil !== null) return state;
    if (state.inResources) {
      return state.resourcesSub === 'Related' ? { ...state, related: [...state.related, ...collectReferences(block, ctx)] } : state;
    }
    return { ...state, lines: [...state.lines, ...renderBlock(block, ctx, state.level)] };
  }, initial);
  return { lines: final.lines, related: final.related };
}

function reduceHeading(state, block) {
  const unskipped = state.skipUntil !== null && block.level <= state.skipUntil ? { ...state, skipUntil: null } : state;
  if (unskipped.skipUntil !== null) return unskipped;
  if (block.level === 2 && block.text === 'Resources') return { ...unskipped, inResources: true, resourcesSub: null };
  if (unskipped.inResources && block.level > 2) return { ...unskipped, resourcesSub: block.text };
  const outside = unskipped.inResources ? { ...unskipped, inResources: false, resourcesSub: null } : unskipped;
  if (isDroppedPlatformText(block.text)) return { ...outside, skipUntil: block.level };
  return { ...outside, level: block.level, lines: [...outside.lines, headingLine(block.level, block.text), ''] };
}

function trimBlankEdges(lines) {
  const start = lines.findIndex((line) => line !== '');
  if (start === -1) return [];
  const end = lines.length - [...lines].reverse().findIndex((line) => line !== '');
  return lines.slice(start, end);
}

function collapseBlankLines(text) {
  return text.replace(/\n{3,}/g, '\n\n').trim() + '\n';
}

// ---------------------------------------------------------------------------
// Page assembly
// ---------------------------------------------------------------------------

function coveredPlatformsLine(page) {
  if (page.platforms) {
    const kept = page.platforms.filter((p) => KEPT_PLATFORMS.has(p));
    const dropped = page.platforms.filter((p) => !KEPT_PLATFORMS.has(p));
    const note = dropped.length ? ` (guidance specific to ${prettyPlatforms(dropped)} omitted)` : '';
    return `${prettyPlatforms(kept)}${note}`;
  }
  const suffix = page.slug.match(/^designing-for-(.+)$/)?.[1];
  return suffix ? PLATFORM_NAMES[suffix] ?? suffix : 'All Apple platforms';
}

function lastChangeLine(json) {
  const meta = json.metadata?.customMetadata ?? {};
  if (!meta['alert-date']) return null;
  const note = meta['alert-text'] ? ` (${meta['alert-text'].trim()})` : '';
  return `> Last change on Apple's site: ${meta['alert-date']}${note}`;
}

function uniqueBySlug(entries) {
  const seen = new Set();
  return entries.filter((entry) => (seen.has(entry.slug) ? false : seen.add(entry.slug)));
}

function renderPage(page, included, anchors, staleAnchors) {
  const { json, slug } = page;
  const ctx = { refs: json.references ?? {}, included, slug, anchors, staleAnchors };
  const content = json.primaryContentSections?.find((section) => section.kind === 'content')?.content ?? [];
  if (content.length === 0) throw new Error(`No content blocks for ${slug}; Apple's page format may have changed. Nothing was pruned.`);
  const { lines, related } = renderBody(content, ctx);
  const relatedLines = related.length
    ? ['## Related guidelines', '', ...uniqueBySlug(related).map((item) => `- [${item.title}](${item.slug}.md)`), '']
    : [];
  const header = [
    `# ${json.metadata.title}`,
    '',
    `> Source: <${WEB_BASE}/${slug}>`,
    `> Section: ${page.sectionPath.join(' › ')}`,
    `> Platforms covered: ${coveredPlatformsLine(page)}`,
    lastChangeLine(json),
    '',
    renderInline(json.abstract, ctx).trim(),
    '',
    '---',
    '',
  ].filter((line) => line !== null);
  return collapseBlankLines([...header, ...lines, ...relatedLines].join('\n'));
}

// ---------------------------------------------------------------------------
// Lookup table
// ---------------------------------------------------------------------------

function plainText(nodes, refs) {
  return (nodes ?? [])
    .map((node) => {
      if (node.type === 'text') return node.text ?? '';
      if (node.type === 'reference') return node.overridingTitle ?? refs[node.identifier]?.title ?? '';
      if (node.type === 'codeVoice') return node.code ?? '';
      return plainText(node.inlineContent, refs);
    })
    .join('');
}

function abstractOf(json) {
  return plainText(json.abstract, json.references ?? {}).replace(/\s+/g, ' ').trim();
}

function groupBySection(pages) {
  return pages.reduce((groups, page) => {
    const key = page.sectionPath.join(' › ');
    const existing = groups.find((group) => group.key === key);
    if (existing) return groups.map((group) => (group.key === key ? { ...group, pages: [...group.pages, page] } : group));
    return [...groups, { key, pages: [page] }];
  }, []);
}

function renderLookup(included, omitted, pulledOn) {
  const escape = (text) => text.replace(/\|/g, '\\|');
  const sectionTables = groupBySection(included).flatMap((group) => [
    `## ${group.key}`,
    '',
    '| Guideline | File | Covers | Apple last changed |',
    '| --- | --- | --- | --- |',
    ...group.pages.map((page) => {
      const date = page.json.metadata?.customMetadata?.['alert-date'] ?? '-';
      return `| [${escape(page.title)}](hig/${page.slug}.md) | \`${page.slug}.md\` | ${escape(abstractOf(page.json))} | ${date} |`;
    }),
    '',
  ]);
  const curated = [
    '## Curated guides',
    '',
    'Hand-written files that sit next to the pulled pages. The pull script never overwrites or prunes them.',
    '',
    '| Guide | File | Covers |',
    '| --- | --- | --- |',
    ...CURATED_FILES.map((item) => `| [${item.title}](hig/${item.file}) | \`${item.file}\` | ${escape(item.covers)} |`),
    '',
  ];
  const omittedTable = [
    '## Pages Apple publishes that are not included',
    '',
    'These pages exist on developer.apple.com but describe platforms, hardware, or Apple-only services outside the scope of a cross-platform mobile and desktop review.',
    '',
    '| Page | Why it is left out |',
    '| --- | --- |',
    ...omitted.map((page) => `| [${escape(page.title)}](${WEB_BASE}/${page.slug}) | ${escape(page.reason)} |`),
    '',
  ];
  const intro = [
    '# HIG reference lookup',
    '',
    `Generated by \`scripts/pull-hig.mjs\` on ${pulledOn} from developer.apple.com. Do not edit by hand; re-run the script instead.`,
    '',
    `${included.length} guideline files live in \`references/hig/\`, one per page of Apple's Human Interface Guidelines that applies to iOS, iPadOS, or macOS. Each file keeps Apple's text and headings, relabels platform headings by device class (phone, tablet, mobile, desktop), and omits guidance that only applies to tvOS, visionOS, or watchOS. Load only the files a review needs; the "Covers" column is Apple's own summary of the page.`,
    '',
  ];
  return collapseBlankLines([...intro, ...sectionTables, ...curated, ...omittedTable].join('\n'));
}

// ---------------------------------------------------------------------------
// Pruning
// ---------------------------------------------------------------------------

/** Refuse to prune more than this share of the existing generated files unless --force-prune is passed. */
const PRUNE_SHARE_LIMIT = 0.1;
const PRUNE_COUNT_FLOOR = 3;

async function generatedFiles(outDir) {
  const entries = await readdir(outDir);
  const flags = await Promise.all(
    entries
      .filter((name) => name.endsWith('.md'))
      .map(async (name) => {
        const head = (await readFile(path.join(outDir, name), 'utf8')).slice(0, 400);
        return head.includes(`> Source: <${WEB_BASE}/`) && head.includes('\n> Section: ') ? name : null;
      }),
  );
  return flags.filter(Boolean);
}

/**
 * Deletes generated files for pages the crawl no longer returned. Curated files are never
 * touched. A crawl that would remove many files at once is far more likely to be a broken
 * crawl than a real mass removal by Apple, so that case is refused without --force-prune.
 */
async function pruneStaleFiles(outDir, keep, forcePrune) {
  const protectedFiles = new Set([...keep, ...CURATED_FILES.map((item) => item.file)]);
  const existing = await generatedFiles(outDir);
  const removable = existing.filter((name) => !protectedFiles.has(name));
  const limit = Math.max(PRUNE_COUNT_FLOOR, Math.floor(existing.length * PRUNE_SHARE_LIMIT));
  if (removable.length > limit && !forcePrune) return { removed: [], refused: removable };
  await Promise.all(removable.map((name) => unlink(path.join(outDir, name))));
  return { removed: removable, refused: [] };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const pulledOn = new Date().toISOString().slice(0, 10);

  const crawled = (await Promise.all(SECTIONS.map((section) => crawlSection(section, opts)))).flat();
  const entries = uniqueBySlug(crawled);
  if (entries.length === 0) throw new Error('The crawl found no pages. Apple may have changed the HIG data format; nothing was written.');
  console.log(`Crawled ${entries.length} pages across ${SECTIONS.length} sections`);

  const pages = await mapWithConcurrency(entries, opts.concurrency, async (entry) => {
    const json = await fetchPageJson(entry.slug, opts);
    const platforms = platformsOf(json);
    return { ...entry, json, platforms, reason: omissionReason(entry.slug, platforms) };
  });

  const included = pages.filter((page) => !page.reason);
  const omitted = pages.filter((page) => page.reason);
  if (included.length === 0) throw new Error('Every crawled page was omitted. Check the platform metadata; nothing was written.');
  const includedSet = new Set(included.map((page) => page.slug));
  const anchors = new Map(included.map((page) => [page.slug, anchorMapFor(page.json)]));
  const staleAnchors = new Set();

  await mkdir(opts.out, { recursive: true });
  await Promise.all(included.map((page) => writeFile(path.join(opts.out, `${page.slug}.md`), renderPage(page, includedSet, anchors, staleAnchors))));
  await mkdir(path.dirname(opts.lookup), { recursive: true });
  await writeFile(opts.lookup, renderLookup(included, omitted, pulledOn));

  const keep = new Set(included.map((page) => `${page.slug}.md`));
  const pruned = opts.prune ? await pruneStaleFiles(opts.out, keep, opts.forcePrune) : { removed: [], refused: [] };

  console.log(`Wrote ${included.length} guideline files to ${path.relative(REPO_ROOT, opts.out) || opts.out}`);
  console.log(`Omitted ${omitted.length} pages (listed in ${path.relative(REPO_ROOT, opts.lookup) || opts.lookup})`);
  if (staleAnchors.size) console.log(`Dropped ${staleAnchors.size} anchor(s) Apple no longer publishes: ${[...staleAnchors].join(', ')}`);
  if (pruned.removed.length) console.log(`Pruned stale files: ${pruned.removed.join(', ')}`);
  if (pruned.refused.length) {
    console.warn(`Refused to prune ${pruned.refused.length} files in one run (${pruned.refused.join(', ')}). Re-run with --force-prune if Apple really removed them.`);
  }
}

main().catch((error) => {
  console.error(`pull-hig failed: ${error.message}`);
  process.exit(1);
});
