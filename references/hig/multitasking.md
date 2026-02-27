# Multitasking

> Source: [https://developer.apple.com/design/human-interface-guidelines/multitasking](https://developer.apple.com/design/human-interface-guidelines/multitasking)

---

Multitasking lets people switch quickly from one app to another, performing tasks in each.

People expect to use multitasking on their devices, and they may think something is wrong if your app doesn't allow it. With rare exceptions — such as some games — every app needs to work well with multitasking.

In addition to app switching, multitasking can present different experiences on different devices; see Platform considerations.

## Best practices

A great multitasking experience helps people accomplish tasks in multiple apps by managing content in a variety of simultaneous contexts. Because you don't know when people will initiate multitasking, your app or game always needs to be prepared to save and restore their context.

Pause activities that require people's attention or active participation when they switch away. If your app is a game or a media-viewing app, for example, make sure people don't miss anything when they switch to another app. When they switch back, let them continue as if they never left.

Respond smoothly to audio interruptions. Occasionally, audio from another app or the system itself may interrupt your app's audio. For example, an incoming phone call or a music playlist initiated by voice assistant might interrupt your app's audio. When situations like these occur, people expect your app to respond in the following ways:

- Pause audio indefinitely for primary audio interruptions, such as playing music, podcasts, or audiobooks.
- Temporarily lower the volume or pause the audio for shorter interruptions, such as GPS directional notifications, and resume the original volume or playback when the interruption ends.

Finish user-initiated tasks in the background. When someone starts a task like downloading assets or processing a video file, they expect it to finish even if they switch away from your app. If your app is in the middle of performing a task that doesn't need additional input, complete it in the background before suspending.

Use notifications sparingly. Your app can send notifications when it's suspended or running in the background. If people start an important or time-sensitive task in your app, and then switch away from it, they might appreciate receiving a notification when the task completes so they can switch back to your app and take the next step. In contrast, people don't generally need to know the moment a routine or secondary task completes. In this scenario, avoid sending an unnecessary notification; instead, let people check on the task when they return to your app.

## Platform considerations

### Mobile

On mobile devices, multitasking lets people use video calls or watch a video in Picture in Picture while they also use a different app.

The app switcher displays all currently open apps.

A current video call can continue while people use another app.

### Tablet

On tablet devices, people can view and interact with the windows of several different apps at the same time. An individual app can also support multiple open windows, which lets people view and interact with more than one window in the same app at one time.

People can use tablets with either full-screen or windowed apps. When full screen, apps occupy the full screen, and people can switch between individual app windows using the app switcher.

When using windowed apps, app windows are resizable, and people can arrange them to suit their needs with behavior similar to desktop. The system provides window controls for common tiling configurations, entering full screen, minimizing, and closing windows. The system identifies the frontmost window by coloring its window controls and casting a drop shadow on windows behind it.

Additionally, videos and video calls can also play in a Picture in Picture overlay above other content regardless of whether apps are full screen or windowed.

Note: Apps don't control multitasking configurations or receive any indication of the ones that people choose.

To help your app respond correctly when people open it while windowed, make sure it adapts gracefully to different screen sizes.

### Desktop

On desktop, multitasking is the default experience because people typically run more than one app at a time, switching between windows and tasks as they work. When multiple app windows are open, the system applies drop shadows that make the windows appear layered on the desktop, and applies other visual effects to help people distinguish different window states.

## Related

Layout Windows Playing video
