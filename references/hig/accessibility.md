# Accessibility

> Source: [https://developer.apple.com/design/human-interface-guidelines/accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility)

---

Accessible user interfaces empower everyone to have a great experience with your app or game.

When you design for accessibility, you reach a larger audience and create a more inclusive experience. An accessible interface allows people to experience your app or game regardless of their capabilities or how they use their devices. Accessibility makes information and interactions available to everyone. An accessible interface is:

Intuitive. Your interface uses familiar and consistent interactions that make tasks straightforward to perform.

Perceivable. Your interface doesn't rely on any single method to convey information. People can access and interact with your content, whether they use sight, hearing, speech, or touch.

Adaptable. Your interface adapts to how people want to use their device, whether by supporting system accessibility features or letting people personalize settings.

## Vision

The people who use your interface may be blind, color blind, or have low vision or light sensitivity. They may also be in situations where lighting conditions and screen brightness affect their ability to interact with your interface.

Support larger text sizes. Make sure people can adjust the size of your text or icons to make them more legible, visible, and comfortable to read. Ideally, give people the option to enlarge text by at least 200 percent. Your interface can support font size enlargement either through custom UI, or by adopting scalable text. Scalable text is a systemwide setting that lets people adjust the size of text for comfort and legibility.

Use recommended defaults for custom type sizes. Each platform has different default and minimum sizes for system-defined type styles to promote readability. If you're using custom type styles, follow the recommended defaults.

PlatformDefault sizeMinimum size
mobile17 pt11 pt
desktop13 pt10 pt

Bear in mind that font weight can also impact how easy text is to read. If you're using a custom font with a thin weight, aim for larger than the recommended sizes to increase legibility.

Thicker weights are easier to read for smaller font sizes.

Consider increasing the font size when using a thin weight.

Strive to meet color contrast minimum standards. To ensure all information in your app is legible, it's important that there's enough contrast between foreground text and icons and background colors. Two popular standards of measure for color contrast are the Web Content Accessibility Guidelines (WCAG) and the Accessible Perceptual Contrast Algorithm (APCA). Use standard contrast calculators to ensure your UI meets acceptable levels.

Text sizeText weightMinimum contrast ratio
Up to 17 ptsAll4.5:1
18 ptsAll3:1
AllBold3:1

If your app doesn't provide this minimum contrast by default, ensure it at least provides a higher contrast color scheme when the system setting Increase Contrast is turned on. If your app supports Dark Mode, make sure to check the minimum contrast in both light and dark appearances.

A button with insufficient color contrast

A button with sufficient color contrast

Prefer system-defined colors. These colors have their own accessible variants that automatically adapt when people adjust their color preferences, such as enabling Increase Contrast or toggling between the light and dark appearances.

Convey information with more than color alone. Some people have trouble differentiating between certain colors and shades. For example, people who are color blind may have particular difficulty with pairings such as red-green and blue-orange. Offer visual indicators, like distinct shapes or icons, in addition to color to help people perceive differences in function and changes in state. Consider allowing people to customize color schemes such as chart colors or game characters so they can personalize your interface in a way that's comfortable for them.

For someone with red-green color blindness, these indicators might appear the same.

Both visual indicators and color help differentiate between indicators.

Describe your app's interface and content for screen readers. Screen readers let people experience your app's interface without needing to see the screen.

## Hearing

The people who use your interface may be deaf or hard of hearing. They may also be in noisy or public environments.

Support text-based ways to enjoy audio and video. It's important that dialogue and crucial information about your app or game isn't communicated through audio alone. Depending on the context, give people different text-based ways to experience their media, and allow people to customize the visual presentation of that text:

Captions give people the textual equivalent of audible information in video or audio-only content. Captions are great for scenarios like game cutscenes and video clips where text synchronizes live with the media.

Subtitles allow people to read live onscreen dialogue in their preferred language. Subtitles are great for TV shows and movies.

Audio descriptions are interspersed between natural pauses in the main audio of a video and supply spoken narration of important information that's presented only visually.

Transcripts provide a complete textual description of a video, covering both audible and visual information. Transcripts are great for longer-form media like podcasts and audiobooks where people may want to review content as a whole or highlight the transcript as media is playing.

Use haptics in addition to audio cues. If your interface conveys information through audio cues — such as a success chime, error sound, or game feedback — consider pairing that sound with matching haptics for people who can't perceive the audio or have their audio turned off. In mobile, you can also use haptics to let people experience music and infographics through vibration and texture.

Augment audio cues with visual cues. This is especially important for games and spatial apps where important content might be taking place off screen. When using audio to guide people towards a specific action, also add in visual indicators that point to where you want people to interact.

## Mobility

Ensure your interface offers a comfortable experience for people with limited dexterity or mobility.

Offer sufficiently sized controls. Controls that are too small are hard for many people to interact with and select. Strive to meet the recommended minimum control size for each platform to ensure controls and menus are comfortable for all when tapping and clicking.

PlatformDefault control sizeMinimum control size
mobile44x44 pt28x28 pt
desktop28x28 pt20x20 pt

Consider spacing between controls as important as size. Include enough padding between elements to reduce the chance that someone taps the wrong control. In general, it works well to add about 12 points of padding around elements that include a bezel. For elements without a bezel, about 24 points of padding works well around the element's visible edges.

Elements with insufficient padding

Elements with sufficient padding

Support simple gestures for common interactions. For many people, with or without disabilities, complex gestures can be challenging. For interactions people do frequently in your app or game, use the simplest gesture possible — avoid custom multifinger and multihand gestures — so repetitive actions are both comfortable and easy to remember.

Offer alternatives to gestures. Make sure your UI's core functionality is accessible through more than one type of physical interaction. Gestures can be less comfortable for people who have limited dexterity, so offer onscreen ways to achieve the same outcome. For example, if you use a swipe gesture to dismiss a view, also make a button available so people can tap or use an assistive device.

Edit and tap to delete

Swipe to delete

Let people use Voice Control to give guidance and enter information verbally. With Voice Control, people can interact with their devices entirely by speaking commands. They can perform gestures, interact with screen elements, dictate and edit text, and more. To ensure a smooth experience, label interface elements appropriately.

Integrate with voice assistants and shortcuts to let people perform tasks using voice alone. When your app supports voice control and shortcuts, people can automate the important and repetitive tasks they perform regularly.

Support mobility-related assistive technologies. Features like screen readers, switch control, full keyboard access, pointer control, and other assistive tools offer alternative ways for people with low mobility to interact with their devices. Conduct testing and verify that your app or game supports these technologies, and that your interface elements are appropriately labeled to ensure a great experience.

## Speech

Support text-based interactions for people who prefer them. Your app should let people communicate effectively using text-based input methods.

Let people use the keyboard alone to navigate and interact with your app. People can turn on Full Keyboard Access to navigate apps using their physical keyboard. The system also defines accessibility keyboard shortcuts and a wide range of other keyboard shortcuts that many people use all the time. Avoid overriding system-defined keyboard shortcuts and evaluate your app to ensure it works well with Full Keyboard Access.

Support switch control. Switch Control is an assistive technology that lets people control their devices through separate hardware, game controllers, or sounds such as a click or a pop. People can perform actions like selecting, tapping, typing, and drawing when your app or game supports the ability to navigate using Switch Control.

## Cognitive

When you minimize complexity in your app or game, all people benefit.

Keep actions simple and intuitive. Ensure that people can navigate your interface using easy-to-remember and consistent interactions. Prefer system gestures and behaviors people are already familiar with over creating custom gestures people must learn and retain.

Minimize use of time-boxed interface elements. Views and controls that auto-dismiss on a timer can be problematic for people who need longer to process information, and for people who use assistive technologies that require more time to traverse the interface. Prefer dismissing views with an explicit action.

Consider offering difficulty accommodations in games. Everyone has their own way of playing and enjoying games. To support a variety of cognitive abilities, consider adding the ability to customize the difficulty level of your game, such as offering options for people to reduce the criteria for successfully completing a level, adjust reaction time, or enable control assistance.

Let people control audio and video playback. Avoid autoplaying audio and video content without also providing controls to start and stop it. Make sure these controls are discoverable and easy to act upon, and consider global settings that let people opt out of auto-playing all audio and video.

Allow people to opt out of flashing lights in video playback. People might want to avoid bright, frequent flashes of light in the media they consume. A Dim Flashing Lights setting allows the system to calculate, mitigate, and inform people about flashing lights in a piece of media. If your app supports video playback, ensure that it responds appropriately to the Dim Flashing Lights setting.

Be cautious with fast-moving and blinking animations. When you use these effects in excess, it can be distracting, cause dizziness, and in some cases even result in seizures. People who are prone to these effects can turn on the Reduce Motion accessibility setting. When this setting is active, ensure your app or game responds by reducing automatic and repetitive animations, including zooming, scaling, and peripheral motion. Other best practices for reducing motion include:

Tightening animation springs to reduce bounce effects

Tracking animations directly with people's gestures

Avoiding animating depth changes in z-axis layers

Replacing transitions in x-, y-, and z-axes with fades to avoid motion

Avoiding animating into and out of blurs

Optimize your app's UI for simplified access modes. Some platforms offer streamlined interface modes that allow people with cognitive disabilities to use a simplified version of your app. To optimize your app for these modes, use the following guidelines:

Identify the core functionality of your app and consider removing noncritical workflows and UI elements.

Break up multistep workflows so people can focus on a single interaction per screen.

Always ask for confirmation twice whenever people perform an action that's difficult to recover from, such a deleting a file.

## Platform considerations

No additional considerations for mobile and desktop platforms.

## Related

Inclusion
Typography
Screen Reader
Developer documentation
Building accessible apps
Accessibility framework
