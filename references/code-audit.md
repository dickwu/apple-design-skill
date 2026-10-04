# Code audit

> Hand-written companion to `SKILL.md`. Load it when the artifact is source code or a repository
> rather than screenshots, and for any app that takes Apple Pay.

Screenshots show what a reviewer saw. Code shows what every build will show, including screens
nobody captured. This file lists what to search for, why each match matters, and what replaces
it. Every rule cites the guideline page it comes from; open that page before you flag anything.

## How to run it

1. **Find the surfaces App Review will see.** That includes web pages the app opens. A checkout,
   sign-in, or account page shown in `SFSafariViewController`, `ASWebAuthenticationSession`,
   `WKWebView`, Flutter's `url_launcher` or `webview_flutter`, or React Native's
   `react-native-webview` or `expo-web-browser` is part of the app under review, even when it
   lives in another repository. Ask for that repository if you don't have it.
2. **Search, then read.** The patterns below are starting points for `grep` or `rg`. A match is
   a lead, not a finding: open the file and confirm what it renders.
3. **Report in the `SKILL.md` format**, citing the guideline as usual and adding `path:line` for
   each finding. Mark anything you inferred without running the app as unverified.

## Apple Pay and payment marks

App Store Review Guideline 4.9 requires apps that use Apple Pay to use its branding and interface
elements as described in the Apple Pay Marketing Guidelines and the Human Interface Guidelines. A
hand-drawn button or mark is a common rejection, and a convincing recreation is still a
recreation. Load `hig/apple-pay.md` for every check below. Findings here are **Critical**,
because they block release.

### What to search for

| Pattern | Why it matters |
| --- | --- |
| The Apple logo glyph `U+F8FF` (`\uF8FF`, `&#xF8FF;`, or the raw character), an SVG path traced from the Apple logo, or an Apple logo image from any symbol set, next to the word "Pay" | `apple-pay.md › Referring to Apple Pay`: "Never use the Apple logo to represent the name Apple in text." Apple's own table marks "Purchase with  Pay" as wrong. Beside "Pay" inside a black pill, it is a rebuilt Apple Pay button |
| Icon-library glyphs: `fa-apple-pay`, `fa-cc-apple-pay`, `faApplePay`, `faCcApplePay`, `siApplepay`, `apple-pay` in icon-name props | `apple-pay.md › Apple Pay mark`: "Use only the artwork provided by Apple." Third-party redraws are not Apple's artwork |
| An image asset named like `apple_pay`, `applepay`, or `apple-pay` (`.png`, `.svg`, `.pdf`, `.webp`) | Compare it with the files in Apple's download from the Apple Pay Marketing Guidelines page. Anything recolored, cropped, re-exported, or redrawn fails `apple-pay.md › Apple Pay mark` |
| CSS or style props applied to that mark: `width` without `height` only, `border-radius`, `aspect-ratio`, `object-fit: cover`, `filter`, `box-shadow`, `transform`, animations, a removed border | `apple-pay.md › Apple Pay mark`: "no alterations other than height"; no shadows, glows, flips, rotation, or animation |
| A styled button or tappable view whose label is "Apple Pay", "Pay", or the Apple glyph, built from `<button>`, `<div>`, `TouchableOpacity`, `Pressable`, `ElevatedButton`, `GestureDetector`, `InkWell`, `Button` with a custom label, or `UIButton` | `apple-pay.md › Using Apple Pay buttons`: "Don't create custom Apple Pay button designs or try to replicate the Apple-provided ones." A custom button may start Apple Pay only if it doesn't show "Apple Pay" or the logo (`apple-pay.md › Offering Apple Pay`) |
| A text-only "Apple Pay" option in a list where cards or other wallets show logos | `apple-pay.md › Referring to Apple Pay`: text-only is allowed "only when all payment options have text-only descriptions." Otherwise use Apple's mark |
| "ApplePay", "Apple pay", "APPLE PAY", or a translated or transliterated name, such as "أبل باي" or "آبل باي" in Arabic copy | `apple-pay.md › Referring to Apple Pay`: two words, capital A and P, and "Don't translate Apple Pay or any other Apple trademark" |
| Code that hides the Apple Pay button or greys it out because an option such as size or color hasn't been chosen yet | `apple-pay.md › Offering Apple Pay`: "Don't hide an Apple Pay button or make it appear unavailable." Explain the problem after the tap instead. Hiding it on devices that can't pay is correct (`Offer Apple Pay on all devices and browsers that support it`) |
| An Apple Pay button smaller than other payment buttons or below the fold, or below 100 by 30 pt (140 by 30 pt for typed buttons such as Buy) | `apple-pay.md › Button size and position` |

### What replaces it

| Stack | Apple Pay button | Notes |
| --- | --- | --- |
| SwiftUI | `PayWithApplePayButton` | Set the label and style through its initializer and `payWithApplePayButtonStyle` |
| UIKit, AppKit | `PKPaymentButton(paymentButtonType:paymentButtonStyle:)` | Only `cornerRadius` and size are yours to change |
| Web | `<apple-pay-button>` from Apple's `https://applepay.cdn-apple.com/jsapi/1.latest/apple-pay-sdk.js`, or `-webkit-appearance: -apple-pay-button` with `-apple-pay-button-type` and `-apple-pay-button-style` | Size the element only through `--apple-pay-button-width`, `--apple-pay-button-height`, `--apple-pay-button-border-radius`, `--apple-pay-button-padding`, and `--apple-pay-button-box-sizing`. Put nothing inside it and add no background |
| Flutter | `ApplePayButton` from the `pay` package, or your payment SDK's native Apple Pay button | It renders the native PassKit button through a `UiKitView` platform view |
| React Native | Your payment SDK's native button, for example `PlatformPayButton` from `@stripe/stripe-react-native` | Stripe documents it as "the platform-specific native wallet pay button". Avoid wrappers that draw the button in JavaScript |

For the mark, ship Apple's file unchanged, set only its height, keep that height at least that of
the other payment marks, and leave clear space of a tenth of its height (`apple-pay.md › Apple Pay
mark`). In a repository that normalizes line endings, mark the SVG as binary
(`*.svg binary` in `.gitattributes`) so the file stays byte-for-byte identical to Apple's.

**Guard it with a test.** A test that fails on the Apple glyph, on icon-library Apple Pay glyphs,
on styling applied to the mark, and when the official button element disappears keeps a redrawn
button from returning. Suggest one when the project has a test suite.

## Liquid Glass in code

Load `hig/liquid-glass.md` and apply its review checklist to what the code renders. In code, look
for:

| Pattern | Finding |
| --- | --- |
| SwiftUI `glassEffect(...)`, UIKit `UIGlassEffect` in a `UIVisualEffectView`, or AppKit `NSGlassEffectView` on list rows, cells, cards, or backgrounds | Glass in the content layer. `liquid-glass.md › Where the material belongs` |
| More than a few custom glass surfaces on one screen, or glass views nested inside each other without a `GlassEffectContainer` (SwiftUI) or `UIGlassContainerEffect` (UIKit) | Restraint and stacking. `liquid-glass.md › Review checklist`, items 1 and 2 |
| `.clear` glass over text, lists, or plain backgrounds | Variant misuse. `liquid-glass.md › Which variant` |
| Tinted glass, `.buttonStyle(.glassProminent)`, or `UIButton.Configuration.prominentGlass()` on more than one or two actions per view | Color budget. `liquid-glass.md › Color on glass` |
| A solid or semi-opaque background painted under a toolbar or tab bar, such as `toolbarBackground(_:for:)` with an opaque color, an opaque `UIBarAppearance` background, or a full-width colored view behind the bar | Replaces the material and the scroll edge effect. `liquid-glass.md › Review checklist`, item 6 |
| A hand-built tab bar or toolbar (an `HStack` pinned to the bottom, a custom `UIView` bar) where `TabView`, `UITabBarController`, `.toolbar`, or `UIToolbar` would do | Misses the system material, its adaptations, and the iPhone Duo side placement below |
| `UIDesignRequiresCompatibility` set to `YES` in `Info.plist` | The app runs in a compatibility mode that shows the previous design. Apple's documentation says to use the key temporarily and that the system ignores it when you build for iOS, iPadOS, Mac Catalyst, or macOS 27 or later. Flag it as High when the project builds with those SDKs, because the redesign it was postponing is already live |
| No branch on `accessibilityReduceTransparency` (SwiftUI) or `UIAccessibility.isReduceTransparencyEnabled` (UIKit) around custom glass or blur | Accessibility states. `liquid-glass.md › Review checklist`, item 5 |
| Flutter `BackdropFilter`, React Native `BlurView`, or CSS `backdrop-filter` imitating glass | Apply the same rules, then the stack's section in `liquid-glass.md › Cross-platform translation` |

Standard system bars, sheets, and controls adopt the material on their own. Prefer removing a
custom imitation over tuning it.

## iPhone Duo readiness in code

Load `hig/designing-for-iphone-duo.md`. Apple's premise: "If your app uses standard system
components and you've designed it to support resizing, it automatically adapts to the device's
poses with little adjustment required." The audit looks for code that breaks either half.

| Pattern | Finding |
| --- | --- |
| Fixed widths or sizes: `.frame(width: 390)`, constants like `screenWidth = 393`, `UIScreen.main.bounds` (the screen, not the window; Apple's documentation discourages `UIScreen.main`), `MediaQuery.of(context).size` used to pick a device type, `Dimensions.get('screen')` | `designing-for-iphone-duo.md › Best practices`: "Avoid fixed widths and display-specific dependencies." Use size classes (`horizontalSizeClass`, `traitCollection`), layout margins, and safe area insets, or the window size (`LayoutBuilder`, `MediaQuery.sizeOf`, `useWindowDimensions`) |
| Layout chosen by device model or idiom, such as `userInterfaceIdiom == .phone` deciding single versus split layout | The outer and inner displays are the same iPhone at different sizes. Branch on size class instead (`designing-for-iphone-duo.md › Device poses`) |
| Custom bars drawn by Flutter, React Native, or a webview: `BottomNavigationBar`, `CupertinoTabBar`, a bottom-tab navigator, a fixed-position footer | System bars move to the side on iPhone Duo; custom ones stay where the code puts them. Flag as High and check whether the framework version adapts them (`designing-for-iphone-duo.md › Vertical controls`) |
| Code that moves bars off the system placement, such as manual side placement or re-pinning to the bottom | `designing-for-iphone-duo.md › Vertical controls`: "In general, don't override the default bar placement." |
| Manual spacers between toolbar items (`Spacer()`, `.fixedSpace`, fixed `SizedBox` widths) | Use `ToolbarItemGroup` or `UIBarButtonItemGroup` (`designing-for-iphone-duo.md › Vertical controls`) |
| Toolbar items with a symbol and no title: `Image(systemName:)` alone, or `UIBarButtonItem(image:)` without a title | Give both, for example with `Label` (`designing-for-iphone-duo.md › Vertical controls`) |
| An app-owned overflow menu behind an ellipsis | Move the actions into `ToolbarOverflowMenu` or `additionalOverflowItems`, and keep the ellipsis for overflow (`designing-for-iphone-duo.md › Vertical controls`) |
| Several toolbar items and no `ToolbarItemVisibilityPriority` or `UIBarButtonItemVisibilityPriority` | Frequent actions may overflow first. Low unless the screen is task-oriented |
| Custom overlays, floating buttons, or grids with an odd column count on the inner display, and no `ReservedRegion` or `UIView.ReservedRegion` handling | Content can sit under the fold or the camera. `designing-for-iphone-duo.md › Reserved regions` |
| Two panes in an `HStack`, `VStack`, or `ZStack` that a size change should rearrange | Consider `ArrangementView` or `UIArrangementViewController`, with navigation outside it (`designing-for-iphone-duo.md › Arrangement views`) |
| A game that locks orientation and letterboxes | `designing-for-iphone-duo.md › Best practices`, "Make your game playable in every device pose" |

Recommend checking the result in Xcode's Device Hub across the outer display, the inner display,
a partial fold, and Split View. Code review can't confirm those states on its own.
