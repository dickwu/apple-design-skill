# Playing Haptics

> Source: [https://developer.apple.com/design/human-interface-guidelines/playing-haptics](https://developer.apple.com/design/human-interface-guidelines/playing-haptics)

---

Playing hapticsPlaying haptics can engage people's sense of touch and bring their familiarity with the physical world into your app or game.

Depending on the platform and the device people are using, the system can play haptics in addition to visual and auditory feedback. For example, components like switches, sliders, and pickers automatically play haptic feedback on supported mobile devices. On devices equipped with haptic-capable input systems, an app can play haptics while people interact with content.

In addition to built-in haptic capabilities, some external input devices can also play haptics. For example, game controllers can provide haptic feedback.

Best practicesUse system-provided haptic patterns according to their documented meanings. People recognize standard haptics because the system plays them consistently on interactions with standard controls. If the documented use case for a pattern doesn't make sense in your app or game, avoid using the pattern to mean something else. Instead, use a generic pattern or create your own, where supported.

Use haptics consistently throughout your app or game. It's important to build a clear, causal relationship between each haptic and the action that causes it so people learn to associate certain haptic patterns with certain experiences. If a haptic doesn't reinforce a cause-and-effect relationship, it can be confusing and seem gratuitous. For example, if your game plays a specific haptic pattern when a character fails to finish a mission, people associate that pattern with a negative outcome. If you use the same haptic pattern for a positive outcome like a level completion, people will be confused.

Prefer using haptics to complement other feedback in your app or game. When visual, auditory, and tactile feedback are in harmony — as they generally are in the physical world — the user experience is more coherent and can seem more natural. For example, you generally want to match the intensity and sharpness of a haptic with the intensity and sharpness of the animation it accompanies. You can also synchronize sound with haptics.

Avoid overusing haptics. Sometimes a haptic can feel just right when it happens occasionally, but become tiresome when it plays frequently. Doing user testing can help you discover a balance that most people appreciate. Often, the best haptic experience is one that people may not be conscious of, but miss when it's turned off.

In most apps, prefer playing short haptics that complement discrete events. Although long-running haptics that accompany a gameplay flow can enhance the experience, long-running haptics in an app can dilute the meaning of the feedback and distract people from their task. For example, continuous or long-lasting haptics don't tend to clarify an experience and can even distract people.

Make haptics optional. Let people turn off or mute haptics, and make sure people can still enjoy your app or game without them.

Be aware that playing haptics might impact other user experiences. By design, haptics produce enough physical force for people to feel the vibration. Ensure that haptic vibrations don't disrupt experiences involving device features like the camera, gyroscope, or microphone.

Custom hapticsGames often use custom haptics to enhance gameplay. Although it's less common, nongame apps might also use custom haptics to provide a richer, more delightful experience.

You can design custom haptic patterns that vary dynamically, based on user input or context. For example, the impact players feel when a game character jumps from a tree can be stronger than when the character jumps in place, and substantial experiences — like a collision or a hit — can feel very different from subtle experiences like the approach of footsteps or a looming danger.

There are two basic building blocks you can use to generate custom haptic patterns.

Transient events are brief and compact, often feeling like taps or impulses. The experience of tapping a button is an example of a transient event.

Continuous events feel like sustained vibrations, such as the experience of a prolonged feedback.

Regardless of the type of haptic event you use to generate a custom haptic, you can also control its sharpness and intensity. You can think of sharpness as a way to abstract a haptic experience into the waveform that produces the corresponding physical sensations. Specifying sharpness lets you relay to the system your intent for the experience. For example, you might use sharpness values to convey an experience that's soft, rounded, or organic, or one that's crisp, precise, or mechanical. As the term implies, intensity means the strength of the haptic.

By combining transient and continuous events, varying sharpness and intensity, and including optional audio content, you can create a wide range of different haptic experiences.

Platform considerationsMobileOn supported mobile devices, you can add haptics to your experience in the following ways:Use standard UI components — like toggles, sliders, and pickers — that play system-designed haptics by default.

When it makes sense, use a feedback generator to play one of several predefined haptic patterns in the categories of notification, impact, and selection.

NotificationNotification haptics provide feedback about the outcome of a task or action, such as depositing a check or unlocking a vehicle. Video with custom controls.  Content description: An animation that represents a series of two haptic pulses of various durations and strengths by showing bars of different sizes and playing audio tones of different pitches. This particular pattern represents a success.  Play Success. Indicates that a task or action has completed. Video with custom controls.  Content description: An animation that represents a series of two haptic pulses of various durations and strengths by showing bars of different sizes and playing audio tones of different pitches. This particular pattern represents a warning.  Play Warning. Indicates that a task or action has produced a warning of some kind. Video with custom controls.  Content description: An animation that represents a series of four haptic pulses of various durations and strengths by showing bars of different sizes and playing audio tones of different pitches. This particular pattern represents an error.  Play Error. Indicates that an error has occurred.

ImpactImpact haptics provide a physical metaphor you can use to complement a visual experience. For example, people might feel a tap when a view snaps into place or a thud when two heavy objects collide. Video with custom controls.  Content description: An animation that represents a single haptic pulse of a specific duration and strength by showing a bar of a specific size and playing an audio tone of a specific pitch. This particular pattern represents a light impact.  Play Light. Indicates a collision between small or lightweight UI objects. Video with custom controls.  Content description: An animation that represents a single haptic pulse of a specific duration and strength by showing a bar of a specific size and playing an audio tone of a specific pitch. This particular pattern represents a medium impact.  Play Medium. Indicates a collision between medium-sized or medium-weight UI objects. Video with custom controls.  Content description: An animation that represents a single haptic pulse of a specific duration and strength by showing a bar of a specific size and playing an audio tone of a specific pitch. This particular pattern represents a heavy impact.  Play Heavy. Indicates a collision between large or heavyweight UI objects. Video with custom controls.  Content description: An animation that represents a single haptic pulse of a specific duration and strength by showing a bar of a specific size and playing an audio tone of a specific pitch. This particular pattern represents a rigid impact.  Play Rigid. Indicates a collision between hard or inflexible UI objects. Video with custom controls.  Content description: An animation that represents a single haptic pulse of a specific duration and strength by showing a bar of a specific size and playing an audio tone of a specific pitch. This particular pattern represents a soft impact.  Play Soft. Indicates a collision between soft or flexible UI objects.

SelectionSelection haptics provide feedback while the values of a UI element are changing. Video with custom controls.  Content description: An animation that represents a single haptic pulse of a specific duration and strength by showing a bar of a specific size and playing an audio tone of a specific pitch. This particular pattern represents a selection.  Play Selection. Indicates that a UI element's values are changing.

## Desktop

When a haptic-capable input device is available, your app can provide one of the three following haptic patterns in response to a drag operation or force interaction.

Haptic feedback patternDescriptionAlignmentIndicates the alignment of a dragged item. For example, this pattern could be used in a drawing app when the people drag a shape into alignment with another shape. Other scenarios where this type of feedback could be used might include scaling an object to fit within specific dimensions, positioning an object at a preferred location, or reaching the beginning/end or minimum/maximum of something like a scrubber in a video app.

Level changeIndicates movement between discrete levels of pressure. For example, as people press a fast-forward button on a video player, playback could increase or decrease and haptic feedback could be provided as different levels of pressure are reached.

GenericIntended for providing general feedback when the other patterns don't apply.

## Related

FeedbackGestures
