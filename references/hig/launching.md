# Launching

> Source: [https://developer.apple.com/design/human-interface-guidelines/launching](https://developer.apple.com/design/human-interface-guidelines/launching)

---

A streamlined launch experience helps people start using your app or game immediately.

Launching begins when someone opens your app or game, includes an initial download, and ends when the first screen is ready. After launching completes, you might offer an onboarding experience, which can give people a high-level view of your app or game.

## Best practices

Launch instantly. People want to start interacting with your app or game right away, and sometimes they don't want to wait more than a couple of seconds.

If the platform requires it, provide a launch screen. In mobile and TV platforms, the system displays your launch screen the moment your app or game starts and quickly replaces it with your first screen, giving people the impression that your experience is fast and responsive.

If you need a splash screen, consider displaying it at the beginning of your onboarding flow. A splash screen is a beautiful graphic that succinctly communicates branding and other information you need to provide. If you don't provide an onboarding experience, you might display your splash screen as soon as launching completes.

Restore the previous state when your app restarts so people can continue where they left off. Avoid making people retrace steps to reach their previous location in your app or game. Restore granular details of the previous state as much as possible. For example, scroll the view to people's most recent position, and display windows in the same state and location in which people left them.

## Launch screens

Not applicable for desktop.

Downplay the launch experience. A launch screen isn't part of an onboarding experience or a splash screen, and it isn't an opportunity for artistic expression. A launch screen's sole function is to enhance the perception of your experience as quick to launch and immediately ready to use.

Design a launch screen that's nearly identical to the first screen of your app or game. If you include elements that look different when launching completes, people may experience an unpleasant flash between the launch screen and your first screen. If your app or game displays a solid color before transitioning to the first screen, create a launch screen that displays only that solid color. Also make sure that your launch screen matches the device's current orientation and appearance mode.

Avoid including text on your launch screen, even if your first screen displays text. Because the content in a launch screen doesn't change, any text you display won't be localized.

Don't advertise. The launch screen isn't a branding opportunity. Avoid creating a screen that looks like a splash screen or an "About" window, and don't include logos or other branding elements unless they're a fixed part of your app's first screen.

## Platform considerations

### Mobile

Launch in the appropriate orientation. If your app or game supports both portrait and landscape modes, launch using the device's current orientation. If your interface only runs in one orientation, launch in that orientation and let people rotate the device if necessary. Ensure a landscape-only interface responds correctly, regardless of whether people enter landscape orientation by rotating the device left or right.

## Related

Onboarding, Loading
