# Motion

> Source: [https://developer.apple.com/design/human-interface-guidelines/motion](https://developer.apple.com/design/human-interface-guidelines/motion)

---

Beautiful, fluid motions bring the interface to life, conveying status, providing feedback and instruction, and enriching the visual experience of your app or game.

Many system components automatically include motion, letting you offer familiar and consistent experiences throughout your app or game. System components might also adjust their motion in response to factors like accessibility settings or different input methods.

If you design custom motion, follow the guidelines below.

## Best practices

Add motion purposefully, supporting the experience without overshadowing it. Don't add motion for the sake of adding motion. Gratuitous or excessive animation can distract people and may make them feel disconnected or physically uncomfortable.

Make motion optional. Not everyone can or wants to experience the motion in your app or game, so it's essential to avoid using it as the only way to communicate important information. To help everyone enjoy your app or game, supplement visual feedback by also using alternatives like haptics and audio to communicate.

## Providing feedback

Strive for realistic feedback motion that follows people's gestures and expectations. In nongame apps, accurate, realistic motion can help people understand how something works, but feedback motion that doesn't make sense can make them feel disoriented. For example, if someone reveals a view by sliding it down from the top, they don't expect to dismiss the view by sliding it to the side.

Aim for brevity and precision in feedback animations. When animated feedback is brief and precise, it tends to feel lightweight and unobtrusive, and it can often convey information more effectively than prominent animation. For example, when a game displays a succinct animation that's precisely tied to a successful action, players can instantly get the message without being distracted from their gameplay.

In apps, generally avoid adding motion to UI interactions that occur frequently. The system already provides subtle animations for interactions with standard interface elements. For a custom element, you generally want to avoid making people spend extra time paying attention to unnecessary motion every time they interact with it.

Let people cancel motion. As much as possible, don't make people wait for an animation to complete before they can do anything, especially if they have to experience the animation more than once.

Consider using animated symbols where it makes sense. When you use system icon sets, you can apply animations to symbols.

## Leveraging platform capabilities

Make sure your game's motion looks great by default on each platform you support. In most games, maintaining a consistent frame rate of 30 to 60 fps typically results in a smooth, visually appealing experience. For each platform you support, use the device's graphics capabilities to enable default settings that let people enjoy your game without first having to change those settings.

Let people customize the visual experience of your game to optimize performance or battery life. For example, consider letting people switch between power modes when the system detects the presence of an external power source.

## Platform considerations

No additional considerations for mobile and desktop platforms.

## Related

Symbols Animation
