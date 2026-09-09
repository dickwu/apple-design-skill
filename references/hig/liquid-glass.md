# Liquid Glass

> Curated guide, maintained by hand. Distilled from Apple's [Materials](materials.md) page (Apple's last change 2025-09-09), the Liquid Glass section of [Color](color.md) (2025-12-16), and the component pages that adopt the material. The pull script never overwrites this file; refresh it when those pages change.
> Sources: <https://developer.apple.com/design/human-interface-guidelines/materials> and <https://developer.apple.com/design/human-interface-guidelines/color>
> Platforms covered: iOS, iPadOS, macOS, with a translation section for Flutter, Tauri, Electron, and React Native

Liquid Glass is the dynamic, translucent material Apple introduced in 2025 for the layer of controls and navigation that floats above an app's content. Use this guide whenever a design uses glass, blur, or frosted surfaces, whether it ships on Apple platforms or imitates the look elsewhere.

---

## The two layers

Apple's model has exactly two layers:

1. **Content layer.** Text, images, lists, media, and app backgrounds. When this layer needs depth it uses [standard materials](materials.md#standard-materials), never Liquid Glass.
2. **Functional layer.** Tab bars, toolbars, sidebars, navigation bars, sheets, popovers, alerts, and other controls that float above the content. This is the only place Liquid Glass belongs.

Content scrolls and peeks through the functional layer. The material blurs and adjusts the luminosity of whatever sits beneath it so controls stay legible while the content stays visible and in charge.

## Apple's rules

Each bold sentence is Apple's own guideline, condensed. Follow the link for the full paragraph.

### Where the material belongs

- **Don't use Liquid Glass in the content layer.** Putting it there creates unnecessary complexity and a confusing hierarchy. The one exception is a control in the content layer with a transient interactive element, such as a slider or toggle, which takes on a glass appearance only while a person is manipulating it. ([Materials](materials.md#liquid-glass))
- **Use Liquid Glass effects sparingly.** Standard system components pick up the material automatically. If you apply it to a custom control, limit it to the most important functional elements; glass on many custom controls distracts from the content it is meant to frame. ([Materials](materials.md#liquid-glass))
- **Extend visually rich content beneath the sidebar** so the material has something to reflect. ([Sidebars](sidebars.md))
- **Reduce the use of toolbar backgrounds and tinted controls.** ([Toolbars](toolbars.md))

### Which variant

| Variant | What it does | Use it for |
| --- | --- | --- |
| Regular | Blurs and adjusts the luminosity of background content. Scroll edge effects further blur and fade content where it meets the glass | Most components. Anything with a lot of text: alerts, sidebars, popovers. Any background that could hurt legibility |
| Clear | Highly translucent, keeps the underlying content prominent | Controls that float over photos, video, and other visually rich media |

- **Only use clear Liquid Glass for components that appear over visually rich backgrounds.** ([Materials](materials.md#liquid-glass))
- **Decide whether clear glass needs a dimming layer.** Bright underlying content: consider a dark dimming layer at 35% opacity. Dark content, or standard media playback controls that bring their own dimming: no extra layer.
- Both variants change appearance when people choose a preferred look for Liquid Glass in system settings, or turn on Reduce Transparency or Increase Contrast. Design so those states still read well instead of fighting them.

### Color on glass

- Liquid Glass has **no inherent color**. It takes on the colors of the content behind it. Symbols and text on it default to monochrome: darker over light content, lighter over dark. ([Color](color.md#liquid-glass-color))
- Smaller elements such as toolbars and tab bars adapt between a light and a dark appearance in response to the content beneath them. Larger elements such as sidebars are more opaque so richer content on their surface stays legible.
- **Apply color sparingly to the Liquid Glass material, and to symbols or text on the material.** Reserve it for elements that truly benefit from emphasis, such as status indicators or primary actions.
- **To emphasize a primary action, color the background rather than the symbol or label.** That is how the system styles prominent buttons such as Done. **Refrain from adding color to the background of multiple controls.**
- **Avoid using similar colors in control labels if your app has a colorful background.** Prefer a monochromatic toolbar or tab bar, or an accent color with sufficient differentiation. An app whose content is mostly monochrome can use its brand color as the accent.
- **Be aware of the placement of color in the content layer.** The resting state, such as the top of a scrollable screen, must keep controls legible even if colorful content scrolls beneath them later.
- The component pages repeat the same rule from their side: keep prominent buttons to one or two per view ([Buttons](buttons.md)), and avoid applying a similar color to tab or toolbar labels and content-layer backgrounds ([Tab bars](tab-bars.md), [Toolbars](toolbars.md)).

### Standard materials beneath the glass

- **Choose materials and effects based on semantic meaning and recommended usage**, not on the color they happen to impart, because system settings can change their appearance. ([Materials](materials.md#standard-materials))
- **Help ensure legibility by using vibrant colors on top of materials.** System vibrant colors stay readable on every material.
- Thicker materials give better contrast for text and fine detail. Thinner materials keep more of the surrounding context visible.
- iOS and iPadOS provide four standard materials (ultra-thin, thin, regular, thick) plus vibrancy levels for labels (default, secondary, tertiary, quaternary), fills (default, secondary, tertiary), and a single separator level. Avoid quaternary labels on thin and ultra-thin materials.
- macOS provides purpose-named materials and two background blending modes: behind window and within window.

## Review checklist

Derived from the rules above. Cite the linked page when you flag an issue.

1. **Layer discipline.** Glass appears only on floating controls and navigation. Glass on app backgrounds, cards, list rows, or content containers is a defect.
2. **Restraint.** Count the custom glass surfaces. More than the few most important functional elements is a defect. Glass stacked on glass blurs the hierarchy the material exists to create.
3. **Variant fit.** Text-heavy surfaces and busy backgrounds need the regular variant. Clear glass appears only over media, with a dark dimming layer of about 35% considered when that media is bright.
4. **Color budget.** One, at most two, tinted primary actions per view ([Buttons](buttons.md)), never a row of them. Labels stay monochrome over colorful content. Check legibility at the resting scroll position.
5. **Accessibility states.** Reduce Transparency gets an opaque fallback, Increase Contrast gets stronger fills and borders, Reduce Motion drops morphing and refraction animation.
6. **Scroll edge effect.** Content fades and blurs where it meets a bar instead of colliding with it.
7. **Targets.** Glass never shrinks hit regions below the platform minimum: 44 by 44 pt default and 28 by 28 pt minimum on mobile, 28 by 28 pt default and 20 by 20 pt minimum on desktop ([Accessibility](accessibility.md)).

## Cross-platform translation

Apple ships the material inside its system frameworks. Other stacks can only approximate it. Apple publishes one number, the 35% dimming layer; every other value below is a practical starting point, not a specification.

```text
┌──────────────────────────────────────────┐
│ Functional layer                          │  glass: backdrop blur, mild saturation boost,
│ tab bar · toolbar · sidebar · sheet       │  translucent fill, hairline highlight, edge fade
├──────────────────────────────────────────┤
│ Content layer                             │  opaque surfaces or standard materials,
│ text · images · lists · media             │  vibrant text colors, no glass
└──────────────────────────────────────────┘
```

Properties to replicate:

- **Backdrop blur.** Regular about 20 to 40 px, clear about 8 to 16 px.
- **Fill.** Regular about 60 to 80% opacity of white or black depending on appearance, clear about 20 to 40%.
- **Saturation boost** of roughly 1.2 to 1.5 times so colors behind the glass stay lively.
- **Adaptive appearance.** Sample the luminance beneath the surface and switch label colors between dark and light.
- **Scroll edge effect.** An extra blur and fade band where scrolling content meets a bar.
- **Dimming layer.** About 35% black behind clear glass over bright media, when the content needs it.

### Flutter

- Build the blur with `BackdropFilter(filter: ImageFilter.blur(...))` inside a `ClipRRect`, then layer a translucent `DecoratedBox` with a one-pixel light border on top.
- Derive label color from the luminance of the content beneath, and switch between light and dark treatments as it scrolls.
- Honor `MediaQuery.of(context).highContrast` and `disableAnimations`. Flutter exposes no reduce-transparency signal, so treat high contrast as the cue to fall back to opaque surfaces, or offer an in-app setting.
- Check whether the Cupertino widgets in your Flutter version already render the current system appearance before hand-rolling a glass tab bar or navigation bar.

### Tauri and Electron

- Prefer real system materials over CSS imitation. Electron exposes the `vibrancy` window option on macOS and `backgroundMaterial` on Windows. Tauri apps use the `window-vibrancy` crate, which applies NSVisualEffectView materials on macOS and Mica or Acrylic on Windows. The native window material responds to Reduce Transparency on its own; glass drawn with CSS inside the webview does not, so it needs the manual path below.
- Inside the webview, approximate glass with `backdrop-filter: blur(24px) saturate(1.4)` plus the `-webkit-` prefix, a translucent `background`, and a one-pixel translucent border.
- Respond to `prefers-color-scheme`, `prefers-contrast: more`, and `prefers-reduced-motion` by switching to opaque fills and dropping morph animations. `prefers-reduced-transparency` is Chromium-only: it works in Electron everywhere and in Tauri on Windows, but not in Tauri's WebKit webview on macOS or Linux. There, read the setting natively (on macOS, `NSWorkspace`'s `accessibilityDisplayShouldReduceTransparency`) and pass it to the page, or use the native window material, which already responds to it.
- `backdrop-filter` over animating content is expensive. Keep glass regions few and small, which is also Apple's rule.

### React Native

- Use `BlurView` from `expo-blur` (with `intensity` and `tint`) or from `@react-native-community/blur` (with `blurType` and `blurAmount`) for the functional layer, and layer a translucent view on top for the fill and border.
- Read `AccessibilityInfo.isReduceTransparencyEnabled()` and `isReduceMotionEnabled()` on iOS and switch to opaque, static bars when either is on.
- On Android, blur is costly and inconsistent across versions, and the platform's own design language does not use glass. Prefer an opaque or lightly translucent bar there rather than imitating iOS.

## Related guidelines

- [Materials](materials.md)
- [Color](color.md)
- [Buttons](buttons.md)
- [Tab bars](tab-bars.md)
- [Toolbars](toolbars.md)
- [Sidebars](sidebars.md)
- [Sheets](sheets.md)
- [Accessibility](accessibility.md)
- [Dark Mode](dark-mode.md)
