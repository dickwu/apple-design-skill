# Apple Design Skill

An AI design reviewer grounded in Apple's Human Interface Guidelines, packaged as an agent skill.
It audits and improves mobile and desktop UI against 122 HIG pages pulled straight from
developer.apple.com, translates Apple's vocabulary for **Flutter**, **React Native**, **Tauri**,
**Electron**, **SwiftUI**, **UIKit**, and **AppKit**, and adds a design-craft lens so the result
feels at home on the platform without looking like a template.

## Install

### With the skills CLI

```bash
npx skills add dickwu/apple-design-skill
```

This works for Claude Code, Codex, Cursor, OpenCode, Windsurf, and every other agent the
[skills CLI](https://skills.sh) supports. Useful variations:

```bash
npx skills add dickwu/apple-design-skill -a claude-code   # install for one agent only
npx skills add dickwu/apple-design-skill -g               # user-wide instead of this project
npx skills add dickwu/apple-design-skill --list           # show what would be installed
npx skills update apple-design                            # pull the latest version later
```

### Claude Code, by hand

Claude Code reads skills from `.claude/skills/` in a project or `~/.claude/skills/` for the user:

```bash
git clone https://github.com/dickwu/apple-design-skill.git ~/.claude/skills/apple-design
```

The skill triggers on design-review requests and is also available as `/apple-design`.

### Cursor

Install with `npx skills add dickwu/apple-design-skill -a cursor`, or clone the repository into
your project and keep its `.cursorrules` next to your own rules. Then ask Cursor:
*"Review this screen against Apple's HIG"*.

### Codex

Install with `npx skills add dickwu/apple-design-skill -a codex`, or add the repository as a
submodule and point `AGENTS.md` at it:

```bash
git submodule add https://github.com/dickwu/apple-design-skill.git .design-rules
```

```markdown
## Design reviews

Follow `.design-rules/SKILL.md`. Route topics with `.design-rules/references/hig-lookup.md` and
load the relevant `.design-rules/references/hig/*.md` files before giving design feedback.
```

### Other agents

Add the same three lines to your rules file (`.windsurfrules`, `.ai-rules`, or similar):
follow `SKILL.md`, route with `references/hig-lookup.md`, load the relevant `references/hig/*.md`
files before giving feedback.

## Use it

Ask your agent things like:

- *"Review my Flutter app's home screen against Apple's guidelines"*
- *"Audit this Tauri app for accessibility"*
- *"Does this settings screen follow macOS conventions?"*
- *"This looks generic. Give it a point of view without breaking iOS patterns"*
- *"How do I do Liquid Glass in React Native?"*
- *"Check this app icon"*
- *"Is this onboarding flow asking for permissions the right way?"*

## What a review covers

The reviewer reads the relevant guideline files before it writes a word, then works through:

1. **Apple's eight design principles** (reintroduced June 2026): purpose, agency, responsibility,
   familiarity, flexibility, simplicity, craft, delight.
2. **Accessibility**, blocking: text scaling, contrast ratios, control sizes, screen readers,
   keyboard access, motion and transparency settings, with the actual numbers.
3. **Platform conventions**: tab bars, toolbars, sheets, search, and safe areas on mobile; the
   menu bar, windows, sidebars, shortcuts, and settings on desktop; light and dark everywhere.
4. **Visual design and craft**: color, type, layout, icons, materials, motion, and then whether
   the design has a point of view or is one of the three looks that dominate generated UI.
5. **Interaction**: loading, feedback, alerts, modality, destructive actions, undo, data entry.
6. **Content and writing**: labels that say what happens, platform-correct capitalization,
   errors and empty states that direct people.

Every finding has a What, a Why that cites the guideline file and heading, and a Fix written in
your framework. Specialized modes cover app icons, accessibility audits, dark mode, Liquid Glass,
navigation structure, onboarding and permissions, forms, generative AI, and single components.

**Improvement mode** goes further: it grounds the design in the product, plans a token system
(palette, type roles, layout wireframe, one signature element, motion), critiques that plan
against generic defaults before proposing it, and sequences the fixes from accessibility to
polish.

## What's inside

```text
apple-design-skill/
├── SKILL.md                     # The skill: stance, principles, lenses, report format, improvement mode
├── AGENTS.md                    # Operating manual for agents and contributors
├── .cursorrules                 # Cursor entry point
├── scripts/
│   └── pull-hig.mjs             # Re-pulls the guidelines from developer.apple.com
└── references/
    ├── hig-lookup.md            # Generated routing table with Apple's summaries and change dates
    └── hig/                     # 122 generated pages + 1 curated guide
        ├── design-principles.md
        ├── accessibility.md
        ├── buttons.md
        ├── tab-bars.md
        ├── liquid-glass.md      # Curated: rules, review checklist, cross-platform translation
        └── ...
```

| Section | Files | Includes |
| --- | --- | --- |
| Getting started | 5 | Design principles; designing for iOS, iPadOS, macOS, and games |
| Foundations | 16 | Accessibility, color, typography, layout, materials, dark mode, icons, SF Symbols, images, motion, branding, privacy, inclusion, right to left, writing, app icons |
| Patterns | 24 | Onboarding, launching, loading, feedback, modality, searching, settings, notifications, accounts, data entry, undo, sharing, files, charts, audio, video, haptics, printing, multitasking, full screen, help, drag and drop, ratings, live viewing |
| Components | 57 | Buttons, menus, the menu bar, toolbars, tab bars, sidebars, split views, sheets, alerts, action sheets, popovers, panels, windows, lists and tables, collections, text fields, pickers, toggles, sliders, steppers, segmented controls, search fields, progress indicators, gauges, labels, charts, widgets, notifications, Live Activities, controls, status bars, and more |
| Inputs | 7 | Gestures, keyboards, pointing devices, focus and selection, game controls, Apple Pencil, gyroscope and accelerometer |
| Technologies | 13 | Apple Pay, in-app purchase, Sign in with Apple, Siri, Maps, augmented reality, machine learning, generative AI, iCloud, AirPlay, NFC, App Clips, VoiceOver |
| Curated | 1 | Liquid Glass |

Each generated page keeps Apple's wording, headings, tables, notes, and change log, links to its
source, relabels platform headings by device class (phone, tablet, mobile, desktop), and omits
the sections that apply only to tvOS, visionOS, or watchOS. The 35 pages Apple publishes for other platforms or Apple-only
services are listed, with the reason, at the end of `references/hig-lookup.md`.

## Keeping the references current

Apple revises the HIG several times a year. To pull the latest version:

```bash
node scripts/pull-hig.mjs
```

Node 18 or newer, no dependencies, about 150 requests. The script crawls Apple's section index,
renders each page from the same JSON Apple's site uses, writes `references/hig/*.md` and
`references/hig-lookup.md`, and removes pages Apple has retired. Pass `--cache <dir>` to keep the
raw JSON for instant re-runs, and `--no-prune` to keep files the crawl no longer finds. Running the
script twice produces identical output, so a clean `git status` after a second run is the test.

`AGENTS.md` lists the checks to run before committing a refresh.

## Origin and license

The guideline text belongs to Apple Inc. and is reproduced from the public
[Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
for AI-assisted design review, with a source link at the top of every file. This project is not
affiliated with or endorsed by Apple. The skill, the curated guide, and the script are provided
as they are; use them at your own discretion.
