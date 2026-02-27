# Playing Audio

> Source: [https://developer.apple.com/design/human-interface-guidelines/playing-audio](https://developer.apple.com/design/human-interface-guidelines/playing-audio)

---

Playing audioPeople expect rich audio experiences that automatically adjust when the context changes on the device.

Devices can play audio in a variety of ways, such as through internal or external speakers, headphones, and wirelessly through devices that use Bluetooth or similar wireless protocols. To manipulate sound on their devices people use several types of controls, including volume buttons, the silence switch on mobile, headphone controls, the volume slider, and sound controls in third-party accessories. Whether sound is a primary part of your experience or an embellishment, you need to make sure it behaves as people expect as they make changes to volume and output.

Silence. People switch a device to silent when they want to avoid being interrupted by unexpected sounds like ringtones and incoming message tones. In this scenario, they also want to silence nonessential sounds, such as keyboard clicks, sound effects, game soundtracks, and other audible feedback. When a device is in silent mode, it plays only the audio that people explicitly initiate, like media playback, alarms, and audio/video messaging.

Volume. People expect their volume settings to affect all sound in the system — including music and in-app sound effects — regardless of the method they use to adjust the volume. An exception is the ringer volume on mobile devices, which people can adjust separately in Settings.

Headphones. People use headphones to keep their listening private and in some cases to free their hands. When connecting headphones, people expect sound to reroute automatically without interruption; when disconnecting headphones, they expect playback to pause immediately.

## Best practices

Adjust levels automatically when necessary — don't adjust the overall volume. Your app can adjust relative, independent volume levels to achieve a great mix of audio, but the system volume always governs the final output.

Permit rerouting of audio when possible. People often want to select a different audio output device. Support this capability unless there's a compelling reason not to.

Use the system-provided volume view to let people make audio adjustments. The volume view includes a volume-level slider and a control for rerouting audio output. You can customize the appearance of the slider.

Choose an audio category that fits the way your app or game uses sound. Depending on the audio category you choose, your app's sounds can mix with other audio, play while your app is in the background, or stop when people set the silence switch to silent. As much as possible, pick a category that helps your app meet people's expectations. For example, don't make people stop listening to music from another app if you don't need to.

Category.

CategoryMeaningBehaviorSolo ambientSound isn't essential, but it silences other audio. For example, a game with a soundtrack.

Responds to the silence switch. Doesn't mix with other sounds. Doesn't play in the background.

AmbientSound isn't essential, and it doesn't silence other audio. For example, a game that lets people play music from another app during gameplay in place of the game's soundtrack.

Responds to the silence switch. Mixes with other sounds. Doesn't play in the background.

PlaybackSound is essential and might mix with other audio. For example, an audiobook or educational app that teaches a foreign language, which people might want to listen to after leaving the app.

Doesn't respond to the silence switch. May or may not mix with other sounds. Can play in the background.

RecordSound is recorded. For example, a note-taking app that offers an audio recording mode. An app of this nature might switch its category to playback if it lets people play the recorded notes.

Doesn't respond to the silence switch. Doesn't mix with other sounds. Can record in the background.

Play and recordSound is recorded and played, potentially simultaneously. For example, an audio messaging or video calling app.

Doesn't respond to the silence switch. May or may not mix with other sounds. Can record and play in the background.

Respond to audio controls only when it makes sense. People can control audio playback from outside your app's interface — such as in Control Center or with controls on their headphones — regardless of whether your app is in the foreground or background. If your app is actively playing audio, in a clear audio-related context, or connected to a device that uses Bluetooth or wireless protocols, it's fine to respond to audio controls. Otherwise, when people activate a control, avoid halting audio currently playing from another app.

Avoid repurposing audio controls. People expect audio controls to behave consistently in all apps, so it's essential to avoid redefining the meaning of an audio control in your app. If your app doesn't support certain controls, don't respond to them.

Consider creating custom audio player controls only if you need to offer commands that the system doesn't support. For example, you might want to define custom increments for skipping forward or backward, or present content that's related to the playing audio, such as a sports score.

Let other apps know when your app finishes playing temporary audio. If your app can temporarily interrupt the audio of other apps, be sure to flag your audio session in a way that lets other apps know when they can resume.

Handling interruptionsAlthough most apps and games rely on the system's default interruption behavior, you can customize this behavior to better accommodate your needs.

Determine how to respond to audio-session interruptions. For example, if your app supports recording or other audio-related tasks that people don't want interrupted, you can tell the system to avoid interrupting the currently playing audio for an incoming call unless people choose to accept it. Another example is a communication app, which must handle audio session state appropriately when connection states change.

When an interruption ends, determine whether to resume audio playback automatically. Sometimes, audio from a different app can interrupt the audio your app is playing. An interruption can be resumable, like an incoming phone call, or nonresumable, like when people start a new music playlist. Use the interruption type and your app's type to decide whether to resume playback automatically. For example, a media playback app that's actively playing audio when an interruption occurs can check to be sure the type is resumable before continuing playback when the interruption ends. On the other hand, a game doesn't need to check the interruption type before automatically resuming playback, because a game plays audio without an explicit user choice.

Platform considerationsmobile platformsUse the system's sound services to play short sounds and vibrations.

## Desktop

In desktop, notification sounds mix with other audio by default.

## Related

Playing videoFeedback
