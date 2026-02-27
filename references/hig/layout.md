# Layout

> Source: [https://developer.apple.com/design/human-interface-guidelines/layout](https://developer.apple.com/design/human-interface-guidelines/layout)

---

A consistent layout that adapts to various contexts makes your experience more approachable and helps people enjoy their favorite apps and games on all their devices.

Your app's layout helps ground people in your content from the moment they open it. People expect familiar relationships between controls and content to help them use and discover your app's features, and designing the layout to take advantage of this makes your app feel at home on the platform.

## Best practices

Group related items to help people find the information they want. For example, you might use negative space, background shapes, colors, materials, or separator lines to show when elements are related and to separate information into distinct areas. When you do so, ensure that content and controls remain clearly distinct.

Make essential information easy to find by giving it sufficient space. People want to view the most important information right away, so don't obscure it by crowding it with nonessential details. You can make secondary information available in other parts of the window, or include it in an additional view.

Extend content to fill the screen or window. Make sure backgrounds and full-screen artwork extend to the edges of the display. Also ensure that scrollable layouts continue all the way to the bottom and the sides of the device screen. Controls and navigation components like sidebars and tab bars appear on top of content rather than on the same plane, so it's important for your layout to take this into account.

When your content doesn't span the full window, use a background extension view to provide the appearance of content behind the control layer on either side of the screen, such as beneath the sidebar or inspector.

### Visual hierarchy

Differentiate controls from content. Instead of a background, use a scroll edge effect to provide a transition between content and the control area.

Place items to convey their relative importance. People often start by viewing items in reading order — that is, from top to bottom and from the leading to trailing side — so it generally works well to place the most important items near the top and leading side of the window, display, or field of view. Be aware that reading order varies by language, and take right to left languages into account as you design.

Align components with one another to make them easier to scan and to communicate organization and hierarchy. Alignment makes an app look neat and organized and can help people track content while scrolling or moving their eyes, making it easier to find information. Along with indentation, alignment can also help people understand an information hierarchy.

Take advantage of progressive disclosure to help people discover content that's currently hidden. For example, if you can't display all the items in a large collection at once, you need to indicate that there are additional items that aren't currently visible. Depending on the platform, you might use a disclosure control, or display parts of items to hint that people can reveal additional content by interacting with the view, such as by scrolling.

Make controls easier to use by providing enough space around them and grouping them in logical sections. If unrelated controls are too close together — or if other content crowds them — they can be difficult for people to tell apart or understand what they do, which can make your app or game hard to use.

### Adaptability

Every app and game needs to adapt when the device or system context changes. The system defines a collection of traits that characterize variations in the device environment that can affect the way your app or game looks. Using a UI framework or Auto Layout can help you ensure that your interface adapts dynamically to these traits and other context changes; if you don't use these tools, you need to use alternative methods to do the work.

Here are some of the most common device and system variations you need to handle:

- Different device screen sizes, resolutions, and color spaces
- Different device orientations (portrait/landscape)
- System features like Dynamic Island and camera controls
- External display support, Display Zoom, and resizable windows on tablets
- Dynamic/scalable text text-size changes
- Locale-based internationalization features like left-to-right/right-to-left layout direction, date/time/number formatting, font variation, and text length

Design a layout that adapts gracefully to context changes while remaining recognizably consistent. People expect your experience to work well and remain familiar when they rotate their device, resize a window, add another display, or switch to a different device. You can help ensure an adaptable interface by respecting system-defined safe areas, margins, and guides (where available) and specifying layout modifiers to fine-tune the placement of views in your interface.

Be prepared for text-size changes. People appreciate apps and games that respond when they choose a different text size. When you support dynamic/scalable text — a feature that lets people choose the size of visible text in mobile and TV platforms — your app or game can respond appropriately when people adjust text size. For guidance on displaying text in your app, see Typography.

Preview your app on multiple devices, using different orientations, localizations, and text sizes. You can streamline the testing process by first testing versions of your experience that use the largest and the smallest layouts.

When necessary, scale artwork in response to display changes. For example, viewing your app or game in a different context — such as on a screen with a different aspect ratio — might make your artwork appear cropped, letterboxed, or pillarboxed. If this happens, don't change the aspect ratio of the artwork; instead, scale it so that important visual content remains visible.

## Guides and safe areas

A layout guide defines a rectangular region that helps you position, align, and space your content on the screen. The system includes predefined layout guides that make it easy to apply standard margins around content and restrict the width of text for optimal readability. You can also define custom layout guides.

A safe area defines the area within a view that isn't covered by a toolbar, tab bar, or other views a window might provide. Safe areas are essential for avoiding a device's interactive and display features, like Dynamic Island on mobile devices or the camera housing on some desktop models.

Respect key display and system features in each platform. When an app or game doesn't accommodate such features, it doesn't feel at home in the platform and may be harder for people to use. In addition to helping you avoid display and system features, safe areas can also help you account for interactive components like bars, dynamically repositioning content when sizes change.

## Platform considerations

### Mobile

Aim to support both portrait and landscape orientations. People appreciate apps and games that work well in different device orientations, but sometimes your experience needs to run in only portrait or only landscape. When this is the case, you can rely on people trying both orientations before settling on the one you support — there's no need to tell people to rotate their device. If your app or game is landscape-only, make sure it runs equally well whether people rotate their device to the left or the right.

Prefer a full-bleed interface for your game. Give players a beautiful interface that fills the screen while accommodating the corner radius, sensor housing, and features like Dynamic Island. If necessary, consider giving players the option to view your game using a letterboxed or pillarboxed appearance.

Avoid full-width buttons. Buttons feel at home on mobile when they respect system-defined margins and are inset from the edges of the screen. If you need to include a full-width button, make sure it harmonizes with the curvature of the hardware and aligns with adjacent safe areas.

Hide the status bar only when it adds value or enhances your experience. The status bar displays information people find useful and it occupies an area of the screen most apps don't fully use, so it's generally a good idea to keep it visible. The exception is if you offer an in-depth experience like playing a game or viewing media, where it might make sense to hide the status bar.

### Tablet/Mobile

People can freely resize windows down to a minimum width and height, similar to window behavior in desktop. It's important to account for this resizing behavior and the full range of possible window sizes when designing your layout.

As someone resizes a window, defer switching to a compact view for as long as possible. Design for a full-screen view first, and only switch to a compact view when a version of the full layout no longer fits. This helps the UI feel more stable and familiar in as many situations as possible. For more complex layouts such as split views, prefer hiding tertiary columns such as inspectors as the view narrows.

Test your layout at common system-provided sizes, and provide smooth transitions. Window controls provide the option to arrange windows to fill halves, thirds, and quadrants of the screen, so it's important to check your layout at each of these sizes on a variety of devices. Be sure to minimize unexpected UI changes as people adjust down to the minimum and up to the maximum window size.

Consider a convertible tab bar for adaptive navigation. For many apps, you don't need to choose between a tab bar or sidebar for navigation; instead, you can adopt a style of tab bar that provides both. The app first launches with your choice of a sidebar or a tab bar, and then people can tap to switch between them. As the view resizes, the presentation style changes to fit the width of the view.

### Desktop

Avoid placing controls or critical information at the bottom of a window. People often move windows so that the bottom edge is below the bottom of the screen.

Avoid displaying content within the camera housing at the top edge of the window.

## Specifications

### Mobile device screen dimensions

| Model | Dimensions (portrait) |
|-------|-----------|
| iPhone 17 Pro Max | 440x956 pt (1320x2868 px @3x) |
| iPhone 17 Pro | 402x874 pt (1206x2622 px @3x) |
| iPhone Air | 420x912 pt (1260x2736 px @3x) |
| iPhone 17 | 402x874 pt (1206x2622 px @3x) |
| iPhone 16 Pro Max | 440x956 pt (1320x2868 px @3x) |
| iPhone 16 Pro | 402x874 pt (1206x2622 px @3x) |
| iPhone 16 Plus | 430x932 pt (1290x2796 px @3x) |
| iPhone 16 | 393x852 pt (1179x2556 px @3x) |
| iPhone 16e | 390x844 pt (1170x2532 px @3x) |
| iPhone 15 Pro Max | 430x932 pt (1290x2796 px @3x) |
| iPhone 15 Pro | 393x852 pt (1179x2556 px @3x) |
| iPhone 15 Plus | 430x932 pt (1290x2796 px @3x) |
| iPhone 15 | 393x852 pt (1179x2556 pt @3x) |
| iPhone 14 Pro Max | 430x932 pt (1290x2796 px @3x) |
| iPhone 14 Pro | 393x852 pt (1179x2556 px @3x) |
| iPhone 14 Plus | 428x926 pt (1284x2778 px @3x) |
| iPhone 14 | 390x844 pt (1170x2532 px @3x) |
| iPhone 13 Pro Max | 428x926 pt (1284x2778 px @3x) |
| iPhone 13 Pro | 390x844 pt (1170x2532 px @3x) |
| iPhone 13 | 390x844 pt (1170x2532 px @3x) |
| iPhone 13 mini | 375x812 pt (1125x2436 px @3x) |
| iPhone 12 Pro Max | 428x926 pt (1284x2778 px @3x) |
| iPhone 12 Pro | 390x844 pt (1170x2532 px @3x) |
| iPhone 12 | 390x844 pt (1170x2532 px @3x) |
| iPhone 12 mini | 375x812 pt (1125x2436 px @3x) |
| iPhone 11 Pro Max | 414x896 pt (1242x2688 px @3x) |
| iPhone 11 Pro | 375x812 pt (1125x2436 px @3x) |
| iPhone 11 | 414x896 pt (828x1792 px @2x) |
| iPhone XS Max | 414x896 pt (1242x2688 px @3x) |
| iPhone XS | 375x812 pt (1125x2436 px @3x) |
| iPhone XR | 414x896 pt (828x1792 px @2x) |
| iPhone X | 375x812 pt (1125x2436 px @3x) |
| iPhone 8 Plus | 414x736 pt (1080x1920 px @3x) |
| iPhone 8 | 375x667 pt (750x1334 px @2x) |
| iPhone 7 Plus | 414x736 pt (1080x1920 px @3x) |
| iPhone 7 | 375x667 pt (750x1334 px @2x) |
| iPhone 6s Plus | 414x736 pt (1080x1920 px @3x) |
| iPhone 6s | 375x667 pt (750x1334 px @2x) |
| iPhone 6 Plus | 414x736 pt (1080x1920 px @3x) |
| iPhone 6 | 375x667 pt (750x1334 px @2x) |
| iPhone SE 4.7-inch | 375x667 pt (750x1334 px @2x) |
| iPhone SE 4-inch | 320x568 pt (640x1136 px @2x) |
| Tablet/Mobile 12.9-inch | 1024x1366 pt (2048x2732 px @2x) |
| Tablet/Mobile 11-inch | 834x1194 pt (1668x2388 px @2x) |
| Tablet/Mobile 10.5-inch | 834x1194 pt (1668x2388 px @2x) |
| Tablet/Mobile 9.7-inch | 768x1024 pt (1536x2048 px @2x) |

### Mobile device size classes

A size class is a value that's either regular or compact, where regular refers to a larger screen or a screen in landscape orientation and compact refers to a smaller screen or a screen in portrait orientation.

| Model | Portrait orientation | Landscape orientation |
|-------|-----------|-----------|
| Tablet/Mobile 12.9-inch | Regular width, regular height | Regular width, regular height |
| Tablet/Mobile 11-inch | Regular width, regular height | Regular width, regular height |
| iPhone 17 Pro Max | Compact width, regular height | Regular width, compact height |
| iPhone 17 Pro | Compact width, regular height | Compact width, compact height |
| iPhone Air | Compact width, regular height | Regular width, compact height |
| iPhone 17 | Compact width, regular height | Compact width, compact height |
| iPhone 16 Pro Max | Compact width, regular height | Regular width, compact height |
| iPhone 16 Pro | Compact width, regular height | Compact width, compact height |
| iPhone 16 Plus | Compact width, regular height | Regular width, compact height |
| iPhone 16 | Compact width, regular height | Compact width, compact height |
| iPhone 16e | Compact width, regular height | Compact width, compact height |
| iPhone 15 Pro Max | Compact width, regular height | Regular width, compact height |
| iPhone 15 Pro | Compact width, regular height | Compact width, compact height |
| iPhone 15 Plus | Compact width, regular height | Regular width, compact height |
| iPhone 15 | Compact width, regular height | Compact width, compact height |
| iPhone 14 Pro Max | Compact width, regular height | Regular width, compact height |
| iPhone 14 Pro | Compact width, regular height | Compact width, compact height |
| iPhone 14 Plus | Compact width, regular height | Regular width, compact height |
| iPhone 14 | Compact width, regular height | Compact width, compact height |
| iPhone 13 Pro Max | Compact width, regular height | Regular width, compact height |
| iPhone 13 Pro | Compact width, regular height | Compact width, compact height |
| iPhone 13 | Compact width, regular height | Compact width, compact height |
| iPhone 13 mini | Compact width, regular height | Compact width, compact height |
| iPhone 12 Pro Max | Compact width, regular height | Regular width, compact height |
| iPhone 12 Pro | Compact width, regular height | Compact width, compact height |
| iPhone 12 | Compact width, regular height | Compact width, compact height |
| iPhone 12 mini | Compact width, regular height | Compact width, compact height |
| iPhone 11 Pro Max | Compact width, regular height | Regular width, compact height |
| iPhone 11 Pro | Compact width, regular height | Compact width, compact height |
| iPhone 11 | Compact width, regular height | Regular width, compact height |

## Related

Right to left, Spatial layout, Layout and organization
