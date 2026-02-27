# Gestures

> Source: [https://developer.apple.com/design/human-interface-guidelines/gestures](https://developer.apple.com/design/human-interface-guidelines/gestures)

---

A gesture is a physical motion that a person uses to directly affect an object in an app or game on their device.

Depending on the device they're using, people can make gestures on a touchscreen, or on a range of input devices such as a trackpad, mouse, remote, or game controller that includes a touch surface.

Every platform supports basic gestures like tap, swipe, and drag. Although the precise movements that make up basic gestures can vary per platform and input device, people are familiar with the underlying functionality of these gestures and expect to use them everywhere.

## Best practices

Give people more than one way to interact with your app. People commonly prefer or need to use other inputs — such as their voice, keyboard, or accessibility features — to interact with their devices. Don't assume that people can use a specific gesture to perform a given task.

In general, respond to gestures in ways that are consistent with people's expectations. People expect most gestures to work the same regardless of their current context. For example, people expect tap to activate or select an object. Avoid using a familiar gesture like tap or swipe to perform an action that's unique to your app; similarly, avoid creating a unique gesture to perform a standard action like activating a button or scrolling a long view.

Handle gestures as responsively as possible. Useful gestures enhance the experience of direct manipulation and provide immediate feedback. As people perform a gesture in your app, provide feedback that helps them predict its results and, if necessary, communicates the extent and type of movement required to complete the action.

Indicate when a gesture isn't available. If you don't clearly communicate why a gesture doesn't work, people might think your app has frozen or they aren't performing the gesture correctly, leading to frustration. For example, if someone tries to drag a locked object, the UI may not indicate that the object's position has been locked; or if they try to activate an unavailable button, the button's unavailable state may not be clearly distinct from its available state.

## Custom gestures

Add custom gestures only when necessary. Custom gestures work best when you design them for specialized tasks that people perform frequently and that aren't covered by existing gestures, like in a game or drawing app. If you decide to implement a custom gesture, make sure it's:

- Discoverable
- Straightforward to perform
- Distinct from other gestures
- Not the only way to perform an important action in your app or game

Make custom gestures easy to learn. Offer moments in your app to help people quickly learn and perform custom gestures, and make sure to test your interactions in real use scenarios. If you're finding it difficult to use simple language and graphics to describe a gesture, it may mean people will find the gesture difficult to learn and perform.

Use shortcut gestures to supplement standard gestures, not replace them. While you may supply a custom gesture to quickly access parts of your app, people also need simple, familiar ways to navigate and perform actions, even if it means an extra tap or two. For example, in an app that supports navigation through a hierarchy of views, people expect to find a Back button in a top toolbar that lets them return to the previous view with a single tap. To help accelerate this action, many apps also offer a shortcut gesture — such as swiping from the side of a window or touchscreen — while continuing to provide the Back button.

Avoid conflicting with gestures that access system UI. Several platforms offer gestures for accessing system behaviors. It's important to avoid defining custom gestures that might conflict with these interactions, as people expect these controls to work consistently. In specific circumstances within games or immersive experiences, developers can work around this by deferring the system gesture.

## Mobile platforms

In addition to the standard gestures supported in all platforms, mobile supports a few other gestures that people expect:

| Gesture | Common action |
|---------|---------------|
| Three-finger swipe | Initiate undo (left swipe); initiate redo (right swipe) |
| Three-finger pinch | Copy selected text (pinch in); paste copied text (pinch out) |
| Four-finger swipe | Switch between apps |
| Shake | Initiate undo; initiate redo |

Consider allowing simultaneous recognition of multiple gestures if it enhances the experience. Although simultaneous gestures are unlikely to be useful in nongame apps, a game might include multiple onscreen controls — such as a joystick and firing buttons — that people can operate at the same time.

## Desktop

People primarily interact with desktop using a keyboard and mouse. In addition, they can make standard gestures on a trackpad, magic mouse, or a game controller that includes a touch surface.

## Standard gestures

The system provides APIs that support the familiar gestures people use with their devices, whether they use a touchscreen or an input device like a trackpad, mouse, remote, or game controller.

| Gesture | Supported in | Common action |
|---------|-------------|---------------|
| Tap | Mobile and desktop platforms | Activate a control; select an item |
| Swipe | Mobile and desktop platforms | Reveal actions and controls; dismiss views; scroll |
| Drag | Mobile and desktop platforms | Move a UI element |
| Touch (or pinch) and hold | Mobile and desktop platforms | Reveal additional controls or functionality |
| Double tap | Mobile and desktop platforms | Zoom in; zoom out if already zoomed in |
| Zoom | Mobile and desktop platforms | Zoom a view; magnify content |
| Rotate | Mobile and desktop platforms | Rotate a selected item |

For guidance on supporting additional gestures and button presses on specific input devices, see Pointing devices, Remotes, and Game controls.

## Related

Feedback
Eyes
Playing haptics
