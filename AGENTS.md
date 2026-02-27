# Design Review Agent

This repository contains a structured design review system based on Apple's Human Interface Guidelines, adapted for cross-platform use (Flutter, Tauri, Electron, React Native).

## How to Use

When asked to review or improve a UI/UX design:

1. **Read** `SKILL.md` — contains the full 5-step review process and audit framework
2. **Consult** `references/hig-lookup.md` — maps design topics to the correct reference files
3. **Load** relevant files from `references/hig/` — only load files pertinent to the review (typically 3-8)
4. **Apply** the severity classification system: Critical → High → Medium → Low
5. **Cite** specific guidelines when making recommendations

## Key References

- `references/hig/accessibility.md` — Always load for any review
- `references/hig/color.md` — Always load for any review
- `references/hig/layout.md` — Always load for any review
- `references/hig/typography.md` — Always load for any review
- `references/hig/liquid-glass.md` — Load when user mentions glassmorphism or translucent UI

## Output Format

Structure reviews as: Summary → Critical Issues → Improvements → Positive Notes → Platform-Specific Notes.
Each issue should include: What (problem), Why (guideline citation), Fix (actionable recommendation).
