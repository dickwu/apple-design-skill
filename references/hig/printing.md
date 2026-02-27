# Printing

> Source: [https://developer.apple.com/design/human-interface-guidelines/printing](https://developer.apple.com/design/human-interface-guidelines/printing)

---

An mobile and desktop platform app can integrate system-provided print functionality when it makes sense, presenting custom printer- and document-specific options if necessary.

## Best practices

Make printing discoverable. Help people find your print action by placing it in standard system locations. For example, include a Print item in your desktop app's File menu; in your mobile app, add a toolbar button that opens an action sheet. If your desktop app has a toolbar, you might want to put a Print button there, too, but consider making it an optional button that people can add when they customize the toolbar.

Present a printing option only when it's possible. If there's nothing onscreen to print, or no printers are available, dim the Print item in a desktop app's File menu and remove the Print action from the action sheet in a mobile app. If you implement a custom print button, dim or hide it when printing isn't possible.

Present relevant printing options. If it makes sense to offer options like selecting a page range, requesting multiple copies, or printing on both sides — and the printer supports the options — use the system-provided view to present them.

## Platform considerations

No additional considerations for mobile platforms.

## Desktop

If your desktop app offers app-specific print options that the system doesn't offer, consider creating a custom category for the print panel. By default, the print panel offers several categories of settings, such as Layout, Paper Handling, and Media & Quality. Give your custom category a unique name, such as your app name, and include options that help people have a great print experience in your app. For example, document editors might offer options like the ability to print annotations and custom formatting.

If your app supports document-specific page settings, consider presenting a page setup dialog. A page setup dialog includes rarely changed settings for page size, orientation, and scaling that apply to printing a particular document. If this makes sense in your app, avoid implementing features the system already provides. For example, you don't need to include options like changing the page orientation or printing in reverse order because the system implements these options.

Make sure interdependencies between options are clear. For example, if double-sided printing is available, an option to print on transparencies becomes unavailable.

Separate advanced features from frequently used features. Consider using a disclosure control to hide advanced options until they're needed. Label advanced options as Advanced Options.

Consider letting people preview the effect of a setting. For example, you could update a thumbnail image to show the effect of changing a tone control.

Consider storing modified settings with the document. At minimum, it makes sense to store print settings until the document is closed in case people want to print it again.

## Related

File managementFile menu
