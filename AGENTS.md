# AGENTS.md

Operating manual for AI agents working in this repository, or using it from another project.

## What this repository is

Apple Design Skill: a design-review skill (`SKILL.md`) backed by 122 pages of Apple's Human
Interface Guidelines pulled from developer.apple.com into `references/hig/`, one curated guide,
a generated lookup table, and the script that regenerates all of it.

## Running a design review

1. Read `SKILL.md` in full. It defines the reviewer's stance, Apple's eight design principles,
   the five audit lenses, the report format, and the improvement process.
2. Open `references/hig-lookup.md` to route a topic to a file. It is grouped by Apple's sections
   and carries Apple's one-line summary of every page.
3. Load the always-load set (`accessibility.md`, `layout.md`, `typography.md`, `color.md`, plus
   `designing-for-ios.md` or `designing-for-macos.md`) and 3 to 6 more files for what is on
   screen. Never load the whole directory.
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
| `references/hig-lookup.md` | Generated routing table with an omitted-pages list | No, re-run the script |
| `references/hig/*.md` | 122 generated pages in Apple's wording | No, re-run the script |
| `references/hig/liquid-glass.md` | Curated Liquid Glass guide; the script never touches it | Yes |
| `scripts/pull-hig.mjs` | Pull script, Node 18 or newer, no dependencies | Yes |

## Refreshing the references

```bash
node scripts/pull-hig.mjs                 # pull from developer.apple.com into references/
node scripts/pull-hig.mjs --cache .cache  # also keep the raw JSON for fast re-runs
```

Options: `--out <dir>`, `--lookup <file>`, `--cache <dir>`, `--concurrency <n>`, `--no-prune`,
`--force-prune`.

What the script does:

- Crawls Apple's six HIG sections and their sub-collections (157 pages as of September 2026).
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
refresh `liquid-glass.md` if `materials.md` or `color.md` changed, and update the counts in
`README.md` if the file count changed.

## Checks before finishing any change

```bash
node --check scripts/pull-hig.mjs
node scripts/pull-hig.mjs --cache .cache && git status --short   # second run must change nothing
grep -rl 'doc://' references/hig                                  # must print nothing
npx skills add . --list                                           # must find the apple-design skill
```

Also confirm that every guideline file named in `SKILL.md` exists in `references/hig/`. Ignore
the `file.md` placeholder in the report template and `hig-lookup.md`, which lives one level up.

## Conventions

- Keep `SKILL.md` under about 400 lines. It loads in full every time the skill triggers.
- Apple's text in `references/hig/` is quoted, not paraphrased. Cross-platform translation lives
  in `SKILL.md` and `liquid-glass.md`, not in the pulled files.
- Don't add pages to `references/hig/` by hand. Change `OMITTED_PAGES` or the platform rule in
  the script instead.
- A hand-written file in `references/hig/` must be registered in `CURATED_FILES` and must not
  start with the generated header (a `> Source: <...>` line followed by `> Section:`). Open it
  with `> Curated guide` as `liquid-glass.md` does, so prune can never mistake it for output.
- Commit generated changes separately from hand-written changes.
- Do not commit `.cache/`, `.omc/`, or other local state.
