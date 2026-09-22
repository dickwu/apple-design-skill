# Cross-platform translation

> Hand-written companion to `SKILL.md`. Load it when the app is not built with SwiftUI, UIKit,
> or AppKit.

The references use Apple's names. Speak the user's framework.

## Vocabulary

| Reference says | Flutter / React Native | Tauri / Electron | Design meaning |
| --- | --- | --- | --- |
| iOS, iPadOS | Mobile, tablet | | Touch first, one-handed reach, compact width |
| macOS | | Desktop | Pointer and keyboard, multi-window, menu bar |
| SwiftUI, UIKit, AppKit | Widget tree, components | Web components | The framework layer |
| System colors, semantic colors | ThemeData, design tokens | CSS custom properties | Colors named by role that adapt to light and dark |
| SF Pro, SF Compact, New York | Platform font, Roboto, custom | System UI font stack | A legible system typeface with optical sizes |
| Dynamic Type | textScaler, font scaling | Zoom and font-size settings | Text scales with the person's setting |
| SF Symbols | Material Icons, Lucide, custom set | Icon set | One consistent, weight-matched icon system |
| Tab bar | BottomNavigationBar, NavigationBar, tab navigator | | Top-level sections, always visible |
| Sidebar, split view | NavigationRail plus detail | Sidebar plus content pane | Two- or three-column hierarchy |
| Toolbar, navigation bar | AppBar, header | Toolbar | Actions on the current view |
| Sheet, popover | Bottom sheet, modal, dialog | Dialog, panel | A temporary, focused task |
| Liquid Glass | BackdropFilter blur | backdrop-filter, system vibrancy | Translucent functional layer over content |
| VoiceOver | TalkBack, Semantics, accessibilityLabel | ARIA, screen reader | Screen reader support |
| Safe area | SafeArea, insets | Title bar and window chrome | Content never hides under system UI |
| Size classes (compact, regular) | Width and height breakpoints: LayoutBuilder, MediaQuery.sizeOf, useWindowDimensions | CSS media and container queries | Layout keyed to the space available, not to the device |
| Menu bar, Dock menu | | Native app menu, tray menu | Every command reachable from a menu |

## Conventions to check

Mobile (Flutter, React Native):

- Bottom tab navigation, 44 pt targets (48 dp on Material), size-class layouts, safe areas,
  system text scaling, keyboard avoidance, and swipe gestures where the platform expects them.
- When one codebase targets iOS and Android, decide per component whether to follow each
  platform's convention or one shared design, and say which. Tab bars, sheets, and back
  navigation are where people notice.

Desktop (Tauri, Electron):

- A native menu bar with every command, standard shortcuts, standard window controls, resizable
  and multi-window layouts, right-click context menus, hover and pointer feedback, and settings
  under the app menu.
- Prefer the platform's real materials and window chrome over a web imitation.
