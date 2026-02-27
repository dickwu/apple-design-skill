# Playing Video

> Source: [https://developer.apple.com/design/human-interface-guidelines/playing-video](https://developer.apple.com/design/human-interface-guidelines/playing-video)

---

Playing videoPeople expect to enjoy rich video experiences on their devices, regardless of the app or game they're using.

The system provides video players designed for you to use to embed playback experiences within your app or game in mobile and desktop platforms. You can also offer your content through integrated video services in these platforms, which gives people a convenient and consistent viewing experience.

The system-provided video players support different aspect-ratio playback modes and in most platforms, Picture in Picture (PiP) viewing mode. Although people can switch modes during playback, by default, the system selects one of the following playback modes based on a video's aspect ratio:In full-screen — or aspect-fill — mode, the video scales to fill the display, and some edge cropping may occur. This mode is the default for wide video (2:1 through 2.40:1).

In fit-to-screen — or aspect — mode, the entire video is visible onscreen, and letterboxing or pillarboxing occurs as needed. This mode is the default for standard video (4:3, 16:9, and anything up to 2:1) and ultrawide video (anything above 2.40:1).

Below the transport controls, the video player displays content tabs, like Info, Episodes, or Chapters, that can provide supporting information and help streamline navigation.

## Best practices

Use the system video player to give people a familiar and convenient experience. The built-in video player provides an exceptional video playback experience that offers consistent interactions and behaviors that let people concentrate on enjoying immersive content. If your app truly requires a custom video player, reference the behavior and interface of the system video player to help you provide an experience that people can instantly understand. A custom experience that diverges slightly from the system-provided experience can cause frustration because people don't know which of their habitual interactions they can continue to use.

Always display video content at its original aspect ratio. When video content uses embedded letterbox or pillarbox padding to conform to a specific aspect ratio, the system may be unable to correctly scale the video based on the current playback mode. Padding embedded within the video frame can cause videos to appear smaller in both full-screen and fit-to-screen modes. It also prevents videos from displaying correctly in edge-to-edge, non-full-screen contexts, like Picture in Picture mode on tablets.

Here are some examples that show how padding can affect video display on mobile devices. Result of padding a 4:3 video  Result of padding a 21:9 video 4:3 video in full-screen viewing mode4:3 video with embedded padding, in full-screen viewing mode21:9 video in fit-to-screen viewing mode21:9 video with embedded padding, in fit-to-screen viewing modeProvide additional information when it adds value. In mobile platforms, you can customize a video's additional information by providing an image, title, description, and other useful information. In general, restrict this content so that it doesn't obscure media playback.

Support the interactions people expect, regardless of the input device they're using to control playback. For example, people expect to press Space on a connected keyboard to play or pause media playback on mobile, desktop, and other platforms. Similarly, people expect to move through their media using familiar, intuitive interactions. For guidance, see Keyboards and Remotes.

If people need to access playback options or content-specific information in your app, consider adding a transport control or a custom content tab. People typically open a transport control or content tab while they're watching a video, so it's essential to provide only the most useful actions and information. Help people return quickly to the viewing experience by making sure your actions don't take more than a step or two and your content is succinct. Use a transport control to support a playback-related action like favoriting a video; use custom content tabs to display supplementary information or recommendations.

Avoid allowing audio from different sources to mix as viewers switch between modes. Mixed audio is an unpleasant and frustrating user experience. In general, audio mixes when at least one of the audio sources fails to handle secondary audio correctly. Here is a typical scenario: While watching a full-screen video, the viewer moves it into the PiP window, where the system automatically mutes the video. In the full-screen window, the viewer starts a game that plays background music, then switches to the PiP window and unmutes the video. If the game doesn't handle secondary audio appropriately, its audio mixes with the audio from the unmuted video.

Integrating with the video appIntegrated video services provide global access to favorite, recently played, and recommended video content from across the system. When people initiate content playback within your app, the video service automatically opens your app and transitions to it. Follow these guidelines to help the video service experience feel like an integrated part of your app.

Ensure a smooth transition to your app. The video service fades to black when transitioning to your app and doesn't show your app's launch screen. Maintain visual continuity with this transition by immediately presenting your own black screen before starting to play or resume content.

Show the expected content immediately. People expect the content they choose to begin playing as soon as the transition to your app completes, especially when resuming playback. Jump right from your app's black screen into content, and avoid displaying splash screens, detail screens, intro animations, or any other barriers that make it take longer to reach content. In rare situations where you must display an interstitial element before the selected media plays, people can choose Select to step through the element, or choose Play if they want to skip the interstitial content and start playback.

Avoid asking people if they want to resume playback. If playback can be resumed, do so automatically without prompting for confirmation.

Play or pause playback when people press Space on a connected Bluetooth keyboard. Pressing Space to control media playback is an interaction people expect, regardless of the keyboard they're using.

Make sure content plays for the correct viewer. If your app supports multiple user profiles, the video service can specify a profile when issuing a playback request. Make your app automatically switch to this profile before starting playback. If a playback request doesn't specify a profile, ask the viewer to choose one before playback begins so this information is available in the future.

Use the previous end time when resuming playback of a long video clip. Resuming playback at the previous stopping point lets people quickly continue where they left off.

Loading contentAvoid displaying loading screens when possible. A loading screen is unnecessary if your content loads quickly, but if loading takes more than two seconds, consider showing a black loading screen with a centered activity spinner and no surrounding content.

Start playback immediately. If you must display a loading screen, display it only until enough content loads for playback to begin. Continue loading remaining content in the background.

Minimize loading screen content. If you include branding or images on your loading screen, do so minimally while maintaining the black background that helps provide a seamless transition to playback.

Exiting playbackAfter exiting playback, people remain in your app rather than returning to the video service, so it's a good idea to help them avoid becoming disoriented.

Show a contextually relevant screen. When exiting playback, display a detail view for the content the viewer was just watching and include an option to resume playback. If a detail view isn't available, show either a menu that lists this content or your app's main menu.

Be prepared for an immediate exit. Prepare an exit view as soon as possible after receiving a playback notification so you're ready to display the view if people exit immediately after playback begins.

## Platform considerations

No additional considerations for mobile platforms or desktop.

## Related

Playing audioFeedback
