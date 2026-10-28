# AGENTS.md

Operating manual for AI agents working in this repository, or using it from another project.

## What this repository is

Apple Design Skill: a design-review skill (`SKILL.md`) backed by 123 pages of Apple's Human
Interface Guidelines pulled from developer.apple.com into `references/hig/`, one curated guide,
a generated lookup table, and the script that regenerates all of it.

## Running a design review

1. Read `SKILL.md` in full. It defines the reviewer's stance, Apple's eight design principles,
   the five audit lenses, the report format, and the improvement process.
2. Pick files from `SKILL.md`: the always-load set, the "Load by what is on screen" table, and
   the index of every page by Apple's section. `references/hig-lookup.md` adds Apple's
   one-line summary of each page and the list of pages left out; open it to check what a page
   covers when its name is ambiguous.
3. Load the always-load set (`accessibility.md`, `layout.md`, `typography.md`, `color.md`, plus
   `designing-for-ios.md` or `designing-for-macos.md`, plus `references/cross-platform.md` unless
   the app is SwiftUI, UIKit, or AppKit) and 3 to 6 more files for what is on screen. Never load
   the whole directory.
4. Quote the guideline and cite it as `file.md › Heading`. Use the user's framework vocabulary
   (Flutter, React Native, Tauri, Electron, SwiftUI, UIKit, AppKit).
5. Write the report in the `SKILL.md` format: Summary, Critical, Improvements, Craft notes,
   What works, Platform notes. Each finding has a What, a Why with a citation, and a Fix.

## File map

| Path | Role | Edit by hand? |
| --- | --- | --- |
| `SKILL.md` | The skill: stance, principles, lenses, report format, improvement mode | Yes |
| `AGENTS.md` | This file | Yes |
| `README.md` | Installation and overview for people | Yes |
| `.cursorrules` | Entry point for Cursor | Yes |
| `GEMINI.md` | Entry point for Antigravity | Yes |
| `.github/FUNDING.yml` | GitHub Sponsors button configuration | Yes |
| `references/hig-lookup.md` | Generated table of every page with Apple's summary and change date, plus an omitted-pages list | No, re-run the script |
| `references/hig/*.md` | 123 generated pages in Apple's wording | No, re-run the script |
| `references/hig/liquid-glass.md` | Curated Liquid Glass guide; the script never touches it | Yes |
| `references/cross-platform.md` | Apple's vocabulary and conventions for Flutter, React Native, Tauri, and Electron | Yes |
| `references/code-audit.md` | Code patterns to search for (Apple Pay, Liquid Glass, iPhone Duo), with citations and replacements | Yes |
| `scripts/pull-hig.mjs` | Pull script, Node 18 or newer, no dependencies | Yes |

## Refreshing the references

```bash
node scripts/pull-hig.mjs                 # pull from developer.apple.com into references/
node scripts/pull-hig.mjs --cache .cache  # also keep the raw JSON for fast re-runs
```

Options: `--out <dir>`, `--lookup <file>`, `--cache <dir>`, `--concurrency <n>`, `--no-prune`,
`--force-prune`.

What the script does:

- Crawls Apple's six HIG sections and their sub-collections (158 pages as of October 2026).
- Keeps every page that applies to iOS, iPadOS, or macOS, omits Apple-only hardware and services
  listed in `OMITTED_PAGES`, and records every omission with a reason in `hig-lookup.md`.
- Renders Apple's JSON to Markdown faithfully: headings, paragraphs, lists, tables, notes, and
  tabbed content as sub-headings. Images and videos are dropped except for check-mark glyphs in
  comparison tables.
- Relabels platform headings by device class (`Phone (iOS)`, `Tablet (iPadOS)`,
  `Mobile (iOS, iPadOS)`, `Desktop (macOS)`, and combinations), drops sections that apply only
  to tvOS, visionOS, or watchOS (sentences that mention them stay), and rewrites cross-references
  as local links whose anchors match the relabeled headings. Links to headings that were dropped
  or that Apple no longer publishes point at the file instead.
- Keeps each page's change log and turns Apple's "Related" links into a "Related guidelines"
  list.
- Prunes generated files for pages Apple removed. Curated files are never pruned, and a run
  that would prune more than a tenth of the files stops and asks for `--force-prune`.

After running it: review `git diff --stat`, spot-check a changed file, run the checks below,
refresh `liquid-glass.md` if a page it links to changed, and, if pages were added or removed,
update the page counts in `README.md`, `SKILL.md`, and this file, and add or remove the page in
the "Every page, by Apple's section" table in `SKILL.md`. A new "Designing for" page has
no platform metadata: if its `Platforms covered` line doesn't name a platform, add its slug to
`DESIGNING_FOR_COVERAGE` in the script.

## Checks before finishing any change

```bash
node --check scripts/pull-hig.mjs
node scripts/pull-hig.mjs --cache .cache && git status --short   # second run must change nothing
grep -rl 'doc://' references/hig                                  # must print nothing
npx skills add . --list                                           # must find the apple-design skill
ls references/hig | while read -r f; do sed -n '/^### Every page/,/^## /p' SKILL.md | grep -q "\`$f\`" || echo "not in the page table: $f"; done   # must print nothing
grep -o '`[a-z0-9-]*\.md`' SKILL.md | tr -d '`' | sort -u | while read -r f; do [ -f "references/hig/$f" ] || echo "no such page: $f"; done   # must print nothing
```

The last two keep `SKILL.md` and `references/hig/` in step in both directions: every page is
in the skill's "Every page, by Apple's section" table, and every page the skill names exists.

## Conventions

- Keep `SKILL.md` under about 450 lines; Anthropic's skill guidance caps the body at 500. It loads
  in full every time the skill triggers, and it names every guideline page so that no reference
  sits more than one level away from it.
- Apple's text in `references/hig/` is quoted, not paraphrased. Cross-platform translation lives
  in `references/cross-platform.md`, `SKILL.md`, and `liquid-glass.md`, and code patterns in
  `references/code-audit.md`, not in the pulled files.
- Don't add pages to `references/hig/` by hand. Change `OMITTED_PAGES` or the platform rule in
  the script instead.
- A hand-written file in `references/hig/` must be registered in `CURATED_FILES` and must not
  start with the generated header (a `> Source: <...>` line followed by `> Section:`). Open it
  with `> Curated guide` as `liquid-glass.md` does, so prune can never mistake it for output.
- Commit generated changes separately from hand-written changes.
- Do not commit `.cache/`, `.omc/`, or other local state.
