# Apple Design Skill

Cross-platform UI/UX design reviewer grounded in Apple's Human Interface Guidelines (HIG), adapted as universal design rules for **mobile** and **desktop** apps.

Works with any framework: **Flutter**, **Tauri**, **Electron**, **React Native**, **SwiftUI**, **UIKit**.

## What It Does

- **Design Review** — Systematic audit against 53 design guideline documents covering color, typography, layout, accessibility, motion, gestures, and more
- **Design Improvement** — Prioritized, actionable fixes with framework-specific implementation guidance
- **Specialized Modes** — App icon review, accessibility audit, dark mode review, Liquid Glass / glassmorphism review, generative AI UX review
- **Cross-Platform** — All guidelines generalized from iOS → mobile, macOS → desktop; references Apple-specific APIs only in a translation table

## Quick Start

### Claude Code

```bash
claude install-skill /path/to/apple-design-skill
```

Or clone and install:

```bash
git clone https://github.com/dickwu/apple-design-skill.git
claude install-skill ./apple-design-skill
```

### Cursor

Add this repo as a context source. Two options:

**Option A — `.cursor/rules`**

Create `.cursor/rules/apple-design.mdc` in your project:

```markdown
---
description: Apple HIG design review and improvement
globs: ["**/*.dart", "**/*.tsx", "**/*.jsx", "**/*.vue", "**/*.svelte", "**/*.swift"]
---

@import https://raw.githubusercontent.com/dickwu/apple-design-skill/main/SKILL.md
```

**Option B — Project Rules**

1. Open Cursor Settings → Rules
2. Add a new rule, paste the content of `SKILL.md`
3. Under "Reference Files", add the `references/` directory

Then ask Cursor: *"Review my UI design against Apple HIG guidelines"*

### Codex (OpenAI)

Add as a custom instruction or system prompt source:

1. Clone this repo into your project or reference it as a submodule:

```bash
git submodule add https://github.com/dickwu/apple-design-skill.git .design-rules
```

2. In your Codex instructions or `AGENTS.md`, reference it:

```markdown
## Design Review Rules

When reviewing UI/UX designs, follow the design review process defined in:
- `.design-rules/SKILL.md` — Main review methodology
- `.design-rules/references/hig-lookup.md` — Topic-to-file mapping
- `.design-rules/references/hig/` — 53 design guideline documents

Always load the relevant guideline files before providing design feedback.
```

### Windsurf / Other AI Editors

Add to your project's AI rules file (`.windsurfrules`, `.ai-rules`, etc.):

```markdown
For design reviews, follow the methodology in:
- SKILL.md (review process)
- references/hig-lookup.md (topic routing)
- references/hig/*.md (guideline documents)
```

## File Structure

```
apple-design-skill/
├── SKILL.md                          # Main skill: review process, audit framework, severity system
├── references/
│   ├── hig-lookup.md                 # Topic → file routing table
│   └── hig/                          # 53 design guideline documents
│       ├── accessibility.md
│       ├── color.md
│       ├── dark-mode.md
│       ├── gestures.md
│       ├── layout.md
│       ├── liquid-glass.md           # Liquid Glass / glassmorphism rules + cross-platform impl
│       ├── typography.md
│       └── ... (46 more)
```

## Coverage

| Category | Topics | Files |
|----------|--------|-------|
| **Visual Design** | Color, typography, icons, images, materials, Liquid Glass, motion, branding, layout | 10 |
| **Interaction** | Gestures, keyboards, pointer, stylus, focus, game controls, drag-and-drop | 7 |
| **UX Patterns** | Onboarding, loading, modals, settings, notifications, auth, search, undo, etc. | 18 |
| **Accessibility** | Screen readers, contrast, inclusion, RTL, privacy | 4 |
| **Media** | Audio, video, haptics | 3 |
| **Technologies** | Payments, maps, ML/AI, AR, live-viewing | 5 |

## Example Usage

Ask your AI assistant:

- *"Review my Flutter app's home screen design against HIG guidelines"*
- *"Audit my Tauri desktop app for accessibility issues"*
- *"How should I implement Liquid Glass / glassmorphism in my React Native app?"*
- *"Improve the navigation pattern in my Electron app"*
- *"Check if my app icon follows design best practices"*

## Origin

Design rules extracted and generalized from [Apple's Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/). Platform-specific terms (iOS → mobile, macOS → desktop) and Apple APIs have been replaced with framework-agnostic equivalents while preserving all design principles.

## License

The design guidelines are derived from Apple's publicly available HIG documentation. This repository packages them for AI-assisted design review. Use at your own discretion.
