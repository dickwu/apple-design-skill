# Collaboration And Sharing

> Source: [https://developer.apple.com/design/human-interface-guidelines/collaboration-and-sharing](https://developer.apple.com/design/human-interface-guidelines/collaboration-and-sharing)

---

Great collaboration and sharing experiences are simple and responsive, letting people engage with the content while communicating effectively with others.

System interfaces and messaging apps can help you provide consistent and convenient ways for people to collaborate and share. For example, people can share content or begin a collaboration by dropping a document into a messaging conversation or selecting a destination in the familiar share sheet.

After a collaboration begins, people can use the Collaboration button in your app to communicate with others, perform custom actions, and manage details. In addition, people can receive messaging notifications when collaborators mention them, make changes, join, or leave.

You can take advantage of messaging integration and the system-provided sharing interfaces whether you implement collaboration and sharing through cloud storage, cloud synchronization services, or a custom solution. To offer these features when you use a custom collaboration infrastructure, make sure your app also supports universal links.

## Best practices

Place the Share button in a convenient location, like a toolbar, to make it easy for people to start sharing or collaborating. On mobile, the system-provided share sheet includes ways to choose a file-sharing method and set permissions for a new collaboration; on desktop, there are similar appearance and functionality in the sharing popover.

If necessary, customize the share sheet or sharing popover to offer the types of file sharing your app supports. If you use cloud storage, you can add support for sending a copy of a file by passing both the file and your collaboration object to the share sheet. Because the share sheet has built-in support for multiple items, it automatically detects the file and makes the "send copy" functionality available. For custom collaboration, you can support "send copy" functionality in the share sheet by including a file — or a plain text representation of it — in your collaboration object.

Write succinct phrases that summarize the sharing permissions you support. For example, you might write phrases like "Only invited people can edit" or "Everyone can make changes." The system uses your permission summary in a button that reveals a set of sharing options that people use to define the collaboration.

Provide a set of simple sharing options that streamline collaboration setup. You can customize the view that appears when people choose the permission summary button to provide choices that reflect your collaboration functionality. For example, you might offer options that let people specify who can access the content and whether they can edit it or just read it, and whether collaborators can add new participants. Keep the number of custom choices to a minimum and group them in ways that help people understand them at a glance.

Prominently display the Collaboration button as soon as collaboration starts. The system-provided Collaboration button reminds people that the content is shared and identifies who's sharing it. Because the Collaboration button typically appears after people interact with the share sheet or sharing popover, it works well to place it next to the Share button.

Provide custom actions in the collaboration popover only if needed. Choosing the Collaboration button in your app reveals a popover that consists of three sections. The top section lists collaborators and provides communication buttons, the middle section contains your custom items, and the bottom section displays a button people use to manage the shared file. You don't want to overwhelm people with too much information, so it's crucial to offer only the most essential items that people need while they use your app to collaborate. For example, note-taking apps summarize the most recent updates and provide buttons that let people get more information about the updates or view more activities.

If it makes sense in your app, customize the title of the modal view's collaboration-management button. People choose this button — titled "Manage Shared File" by default — to reveal the collaboration-management view where they can change settings and add or remove collaborators.

Consider posting collaboration event notifications in messaging apps. Choose the type of event that occurred — such as a change in the content or the collaboration membership, or the mention of a participant — and include a universal link people can use to open the relevant view in your app.

## Platform considerations

Available on mobile and desktop platforms. Not available for other platforms.

## Related

Activity views
Developer documentation
Shared with You
