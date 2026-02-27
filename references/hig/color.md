# Color

> Source: [https://developer.apple.com/design/human-interface-guidelines/color](https://developer.apple.com/design/human-interface-guidelines/color)

---

Judicious use of color can enhance communication, evoke your brand, provide visual continuity, communicate status and feedback, and help people understand information.

The system defines colors that look good on various backgrounds and appearance modes, and can automatically adapt to vibrancy and accessibility settings. Using system colors is a convenient way to make your experience feel at home on the device.

You may also want to use custom colors to enhance the visual experience of your app or game and express its unique personality. The following guidelines can help you use color in ways that people appreciate, regardless of whether you use system-defined or custom colors.

## Best practices

Avoid using the same color to mean different things. Use color consistently throughout your interface, especially when you use it to help communicate information like status or interactivity. For example, if you use your brand color to indicate that a borderless button is interactive, using the same or similar color to stylize noninteractive text is confusing.

Make sure all your app's colors work well in light, dark, and increased contrast contexts. Mobile and desktop platforms offer both light and dark appearance settings. System colors vary subtly depending on the system appearance, adjusting to ensure proper color differentiation and contrast for text, symbols, and other elements. With the Increase Contrast setting turned on, the color differences become far more apparent. When possible, use system colors, which already define variants for all these contexts. If you define a custom color, make sure to supply light and dark variants, and an increased contrast option for each variant that provides a significantly higher amount of visual differentiation.

Test your app's color scheme under a variety of lighting conditions. Colors can look different when you view your app outside on a sunny day or in dim light. In bright surroundings, colors look darker and more muted. In dark environments, colors appear bright and saturated. Adjust app colors to provide an optimal viewing experience in the majority of use cases.

Test your app on different devices. Different displays render colors differently. You can also test the appearance of your app using different color profiles on a desktop — such as P3 and Standard RGB (sRGB).

Consider how artwork and translucency affect nearby colors. Variations in artwork sometimes warrant changes to nearby colors to maintain visual continuity and prevent interface elements from becoming overpowering or underwhelming. Colors can also appear different when placed behind or applied to a translucent element like a toolbar.

If your app lets people choose colors, prefer system-provided color controls where available. Using built-in color pickers provides a consistent user experience, in addition to letting people save a set of colors they can access from any app.

## Inclusive color

Avoid relying solely on color to differentiate between objects, indicate interactivity, or communicate essential information. When you use color to convey information, be sure to provide the same information in alternative ways so people with color blindness or other visual disabilities can understand it. For example, you can use text labels or glyph shapes to identify objects or states.

Avoid using colors that make it hard to perceive content in your app. For example, insufficient contrast can cause icons and text to blend with the background and make content hard to read, and people who are color blind might not be able to distinguish some color combinations.

Consider how the colors you use might be perceived in other countries and cultures. For example, red communicates danger in some cultures, but has positive connotations in other cultures. Make sure the colors in your app send the message you intend.

## System colors

Avoid hard-coding system color values in your app. Documented color values are for your reference during the app design process. The actual color values may fluctuate from release to release, based on a variety of environmental variables. Use APIs like color to apply system colors.

Mobile and desktop platforms define sets of dynamic system colors that match the color schemes of standard UI components and automatically adapt to both light and dark contexts. Each dynamic color is semantically defined by its purpose, rather than its appearance or color values. For example, some colors represent view backgrounds at different levels of hierarchy and other colors represent foreground content, such as labels, links, and separators.

Avoid redefining the semantic meanings of dynamic system colors. To ensure a consistent experience and ensure your interface looks great when the appearance of the platform changes, use dynamic system colors as intended. For example, don't use the separator color as a text color, or secondary text label color as a background color.

## Color management

A color space represents the colors in a color model like RGB or CMYK. Common color spaces — sometimes called gamuts — are sRGB and Display P3.

A color profile describes the colors in a color space using, for example, mathematical formulas or tables of data that map colors to numerical representations. An image embeds its color profile so that a device can interpret the image's colors correctly and reproduce them on a display.

Apply color profiles to your images. Color profiles help ensure that your app's colors appear as intended on different displays. The sRGB color space produces accurate colors on most displays.

Use wide color to enhance the visual experience on compatible displays. Wide color displays support a P3 color space, which can produce richer, more saturated colors than sRGB. As a result, photos and videos that use wide color are more lifelike, and visual data and status indicators that use wide color can be more meaningful. When appropriate, use the Display P3 color profile at 16 bits per pixel (per channel) and export images in PNG format.

Provide color space–specific image and color variations if necessary. In general, P3 colors and images appear fine on sRGB displays. Occasionally, it may be hard to distinguish two very similar P3 colors when viewing them on an sRGB display. To avoid these issues and to ensure visual fidelity on both wide color and sRGB displays, you can provide different versions of images and colors for each color space.

## Platform considerations

### Mobile platforms

Mobile platforms define two sets of dynamic background colors — system and grouped — each of which contains primary, secondary, and tertiary variants that help you convey a hierarchy of information. In general, use the grouped background colors when you have a grouped table view; otherwise, use the system set of background colors.

With both sets of background colors, you generally use the variants to indicate hierarchy in the following ways:

Primary for the overall view
Secondary for grouping content or elements within the overall view
Tertiary for grouping content or elements within secondary elements

For foreground content, mobile platforms define the following dynamic colors:

ColorUse for…
Label A text label that contains primary content.
Secondary label A text label that contains secondary content.
Tertiary label A text label that contains tertiary content.
Quaternary label A text label that contains quaternary content.
Placeholder text Placeholder text in controls or text views.
Separator A separator that allows some underlying content to be visible.
Opaque separator A separator that doesn't allow any underlying content to be visible.
Link Text that functions as a link.

### Desktop platforms

Desktop platforms define the following dynamic system colors:

ColorUse for…
Alternate selected control text color The text on a selected surface in a list or table.
Alternating content background colors The backgrounds of alternating rows or columns in a list, table, or collection view.
Control accent The accent color people select in System Settings.
Control background color The background of a large interface element, such as a browser or table.
Control color The surface of a control.
Control text color The text of a control that is available.
Current control tint The system-defined control tint.
Unavailable control text color The text of a control that's unavailable.
Find highlight color The color of a find indicator.
Grid color The gridlines of an interface element, such as a table.
Header text color The text of a header cell in a table.
Highlight color The virtual light source onscreen.
Keyboard focus indicator color The ring that appears around the currently focused control when using the keyboard for interface navigation.
Label color The text of a label containing primary content.
Link color A link to other content.
Placeholder text color A placeholder string in a control or text view.
Quaternary label color The text of a label of lesser importance than a tertiary label, such as watermark text.
Secondary label color The text of a label of lesser importance than a primary label, such as a label used to represent a subheading or additional information.
Selected content background color The background for selected content in a key window or view.
Selected control color The surface of a selected control.
Selected control text color The text of a selected control.
Selected menu item text color The text of a selected menu.
Selected text background color The background of selected text.
Selected text color The color for selected text.
Separator color A separator between different sections of content.
Shadow color The virtual shadow cast by a raised object onscreen.
Tertiary label color The text of a label of lesser importance than a secondary label.
Text background color The background color behind text.
Text color The text in a document.
Under page background color The background behind a document's content.
Unemphasized selected content background color The selected content in a non-key window or view.
Unemphasized selected text background color A background for selected text in a non-key window or view.
Unemphasized selected text color Selected text in a non-key window or view.
Window background color The background of a window.
Window frame text color The text in the window's title bar area.

### App accent colors

Beginning in desktop, you can specify an accent color to customize the appearance of your app's buttons, selection highlighting, and sidebar icons. The system applies your accent color when the current value in General > Accent color settings is multicolor.

If people set their accent color setting to a value other than multicolor, the system applies their chosen color to the relevant items throughout your app, replacing your accent color. The exception is a sidebar icon that uses a fixed color you specify. Because a fixed-color sidebar icon uses a specific color to provide meaning, the system doesn't override its color when people change the value of accent color settings.

## System colors

NameUI framework APIDefault (light)Default (dark)Increased contrast (light)Increased contrast (dark)
Red red
Orange orange
Yellow yellow
Green green
Mint mint
Teal teal
Cyan cyan
Blue blue
Indigo indigo
Purple purple
Pink pink
Brown brown

Mobile platforms system gray colors:

NameUI framework APIDefault (light)Default (dark)Increased contrast (light)Increased contrast (dark)
Gray systemGray
Gray (2) systemGray2
Gray (3) systemGray3
Gray (4) systemGray4
Gray (5) systemGray5
Gray (6) systemGray6

In UI frameworks, the equivalent of systemGray is gray.
