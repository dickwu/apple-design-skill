# Liquid Glass

> Source: [https://developer.apple.com/design/human-interface-guidelines/materials](https://developer.apple.com/design/human-interface-guidelines/materials)
> Source: [https://developer.apple.com/design/human-interface-guidelines/color](https://developer.apple.com/design/human-interface-guidelines/color)

---

Liquid Glass is Apple's design language introduced in 2025 that unifies the visual system across Apple platforms. It is a dynamic translucent material that creates a distinct functional layer for controls and navigation elements — like tab bars, toolbars, and sidebars — that floats above the content layer.

This file documents the Liquid Glass design rules so you can replicate or adapt the visual pattern in any framework (Flutter, Tauri, Electron, React Native, etc.) using blur, translucency, and layered composition.

---

## Core Concept

Liquid Glass establishes a clear visual hierarchy between two layers:

1. **Content layer** — the main app content (text, images, lists, media)
2. **Functional layer** — controls and navigation that float above the content layer

The material allows content to scroll and show through from beneath, giving the interface a sense of dynamism and depth while maintaining legibility for controls and navigation.

## Visual Properties

- **Translucency**: Liquid Glass has no inherent color; it takes on colors from the content directly behind it
- **Adaptivity**: For smaller elements (toolbars, tab bars), the system adapts between light and dark appearance in response to underlying content
- **Opacity scaling**: Larger elements (sidebars) appear more opaque to preserve legibility over complex backgrounds
- **Scroll edge effects**: Background content is blurred and reduced in opacity at scroll edges to enhance legibility

## Two Variants

### Regular
- Blurs and adjusts the luminosity of background content to maintain legibility
- Use when background content might create legibility issues
- Use for components with significant text (alerts, sidebars, popovers)
- Most system components use this variant

### Clear
- Highly translucent; prioritizes visibility of underlying content
- Ideal for components floating above media (photos, videos)
- Creates a more immersive content experience
- Requires attention to contrast:
  - If underlying content is bright → add a dark dimming layer (~35% opacity)
  - If underlying content is sufficiently dark → no dimming layer needed

## Best Practices

### When to Use Liquid Glass

**Do use Liquid Glass for:**
- Tab bars and bottom navigation
- Toolbars and top app bars
- Sidebars and navigation panels
- Floating action buttons / primary CTAs
- System-level overlays and controls

**Do NOT use Liquid Glass for:**
- Content layer elements (cards, list items, backgrounds)
- Decorative purposes within the content area
- Multiple custom controls simultaneously (overuse dilutes emphasis)

### General Rules

Use Liquid Glass effects sparingly. Standard framework components should pick up the appearance automatically. If applying to custom controls, limit to the most important functional elements.

Don't use Liquid Glass in the content layer. It works best when providing a clear distinction between interactive elements and content. Including it in the content layer creates unnecessary complexity and confusing visual hierarchy.

**Exception**: Transient interactive elements in the content layer (sliders, toggles) can take on a Liquid Glass appearance when activated to emphasize interactivity.

## Color on Liquid Glass

### Default Behavior

By default, Liquid Glass has no inherent color and reflects the content behind it. Symbols and text on Liquid Glass elements follow a monochromatic color scheme:
- Darker when the underlying content is light
- Lighter when the underlying content is dark

### Applying Color

You can apply color to Liquid Glass elements, giving them the appearance of colored or stained glass. Two approaches:

1. **Background color** — Apply your accent/brand color to the Liquid Glass background. Best for primary action buttons (e.g., "Done" button). This draws attention and elevates visual prominence.
2. **Foreground color** — Apply color to symbols or text labels on the Liquid Glass surface. Best for selected states (e.g., active tab bar item).

### Color Rules

**Apply color sparingly.** Reserve it for elements that truly benefit from emphasis, such as:
- Status indicators
- Primary actions / CTAs
- Selected navigation items

**To emphasize primary actions, prefer coloring the background over foreground.** For example, the accent color on a "Done" button background is more effective than coloring the text.

**Refrain from adding color to the background of multiple controls.** Only one primary action per context should get background color emphasis.

**Avoid similar colors in control labels over colorful backgrounds.** Too much color on labels makes them harder to read. For colorful apps, prefer a monochromatic appearance for toolbars and tab bars.

**For monochromatic apps**, using your brand color as the accent color is effective for tailoring the experience and expressing identity.

**Be aware of color overlap between content and controls.** Avoid similar colors in the content layer and the Liquid Glass layer. Ensure the default/resting state (e.g., top of scrollable content) maintains clear legibility.

## Standard Materials (Non-Liquid Glass)

Use standard materials and effects (blur, vibrancy, blending modes) in the content layer to convey structure beneath the Liquid Glass layer.

### Material Thickness Levels

| Material | Translucency | Use for |
|----------|-------------|---------|
| Ultra-thin | Most translucent | Full-screen views needing light color scheme |
| Thin | High translucency | Overlay views needing light color scheme; interactive element emphasis |
| Regular (default) | Moderate | Overlay views; section separators |
| Thick | Most opaque | Overlay views needing dark color scheme; distinct dark elements |

### Vibrancy

Vibrancy pulls light and color from the background to enhance foreground legibility and create a sense of depth. Use vibrant colors on top of materials for good contrast.

**Vibrancy levels for labels:**
- Primary (default) — highest contrast, standard text
- Secondary — descriptive text (footnotes, subtitles)
- Tertiary — inactive elements, low-legibility contexts
- Quaternary — lowest contrast; avoid on thin/ultra-thin materials

**Vibrancy levels for fills:**
- Primary (default)
- Secondary
- Tertiary

Choose materials based on semantic meaning and recommended usage, not apparent color. System settings can change a material's appearance.

## Implementation Guidance for Cross-Platform

When implementing Liquid Glass effects in non-Apple frameworks:

### Flutter
- Use `BackdropFilter` with `ImageFilter.blur()` for the blur effect
- Layer with `Container` using semi-transparent background colors
- Use `ClipRRect` for rounded corners on glass elements
- Adapt opacity/blur radius based on underlying content brightness

### Tauri / Electron (Desktop)
- Use CSS `backdrop-filter: blur()` with `background: rgba()` for translucency
- Apply `-webkit-backdrop-filter` for cross-browser support
- Use `mix-blend-mode` for vibrancy effects
- Consider `prefers-color-scheme` media query for light/dark adaptation

### React Native
- Use `@react-native-community/blur` or similar blur libraries
- Layer `BlurView` components with semi-transparent overlays
- Adjust blur amount and tint based on context

### General Pattern
```
┌─────────────────────────────┐
│  Functional Layer           │  ← Liquid Glass (blur + translucency)
│  (nav bars, toolbars, CTAs) │
├─────────────────────────────┤
│                             │
│  Content Layer              │  ← Standard materials for structure
│  (text, images, lists)      │
│                             │
└─────────────────────────────┘
```

Key properties to replicate:
1. **Blur radius**: 20-40px for regular variant, 10-20px for clear variant
2. **Background opacity**: 0.6-0.8 for regular, 0.3-0.5 for clear
3. **Saturation boost**: 1.2-1.5x to enhance vibrancy effect
4. **Adaptive tint**: Detect underlying content brightness, shift tint accordingly
5. **Scroll edge**: Increase blur/reduce opacity of content approaching the glass edge
