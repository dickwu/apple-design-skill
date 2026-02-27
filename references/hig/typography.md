# Typography

> Source: [https://developer.apple.com/design/human-interface-guidelines/typography](https://developer.apple.com/design/human-interface-guidelines/typography)

---

## Overview

Your typographic choices can help you display legible text, convey an information hierarchy, communicate important content, and express your brand or style.

## Ensuring legibility

Use font sizes that most people can read easily. People need to be able to read your content at various viewing distances and under a variety of conditions. Follow the recommended default and minimum text sizes for each platform — for both custom and system fonts — to ensure your text is legible on all devices. Keep in mind that font weight can also impact how easy text is to read. If you use a custom font with a thin weight, aim for larger than the recommended sizes to increase legibility.

Platform | Default size | Minimum size
---------|--------------|-------------
Mobile   | 17 pt        | 11 pt
Desktop  | 13 pt        | 10 pt

Test legibility in different contexts. For example, you need to test game text for legibility on each platform on which your game runs. If testing shows that some of your text is difficult to read, consider using a larger type size, increasing contrast by modifying the text or background colors, or using typefaces designed for optimized legibility, like the system fonts.

In general, avoid light font weights. For example, if you're using system-provided fonts, prefer Regular, Medium, Semibold, or Bold font weights, and avoid Ultralight, Thin, and Light font weights, which can be difficult to see, especially when text is small.

## Conveying hierarchy

Adjust font weight, size, and color as needed to emphasize important information and help people visualize hierarchy. Be sure to maintain the relative hierarchy and visual distinction of text elements when people adjust text sizes.

Minimize the number of typefaces you use, even in a highly customized interface. Mixing too many different typefaces can obscure your information hierarchy and hinder readability, in addition to making an interface feel internally inconsistent or poorly designed.

Prioritize important content when responding to text-size changes. Not all content is equally important. When someone chooses a larger text size, they typically want to make the content they care about easier to read; they don't always want to increase the size of every word on the screen. For example, when people increase text size in a tabbed interface, they don't expect the tab titles to increase in size. Similarly, in a game, people are often more interested in a character's dialog than in transient hit-damage values.

## Using system fonts

San Francisco (SF) is a sans serif typeface family that includes the system font, SF Compact, SF Arabic, SF Armenian, SF Georgian, SF Hebrew, and monospace system font variants.

The system also offers system font, SF Compact, SF Arabic, SF Armenian, SF Georgian, and SF Hebrew in rounded variants you can use to coordinate text with the appearance of soft or rounded UI elements, or to provide an alternative typographic voice.

New York (NY) is a serif typeface family designed to work well by itself and alongside the SF fonts.

The system provides the SF and NY fonts in the variable font format, which combines different font styles together in one file, and supports interpolation between styles to create intermediate ones.

Variable fonts support optical sizing, which refers to the adjustment of different typographic designs to fit different sizes. On all platforms, the system fonts support dynamic optical sizes, which merge discrete optical sizes and weights into a single, continuous design, letting the system interpolate each glyph or letterform to produce a structure that's precisely adapted to the point size.

To help you define visual hierarchies and create clear and legible designs in many different sizes and contexts, the system fonts are available in a variety of weights, ranging from Ultralight to Black, and — in the case of SF — several widths, including Condensed and Expanded. Because the system icon set uses equivalent weights, you can achieve precise weight matching between symbols and adjacent text, regardless of the size or style you choose.

The system defines a set of typographic attributes — called text styles — that work with both typeface families. A text style specifies a combination of font weight, point size, and leading values for each text size. For example, the body text style uses values that support a comfortable reading experience over multiple lines of text, while the headline style assigns a font size and weight that help distinguish a heading from surrounding content. Taken together, the text styles form a typographic hierarchy you can use to express the different levels of importance in your content. Text styles also allow text to scale proportionately when people change the system's text size or make accessibility adjustments.

Consider using the built-in text styles. The system-defined text styles give you a convenient and consistent way to convey your information hierarchy through font size and weight. Using text styles with the system fonts also ensures support for scalable text and larger accessibility type sizes (where available), which let people choose the text size that works for them.

Modify the built-in text styles if necessary. System APIs define font adjustments — called symbolic traits — that let you modify some aspects of a text style. For example, the bold trait adds weight to text, letting you create another level of hierarchy. You can also use symbolic traits to adjust leading if you need to improve readability or conserve space. For example, when you display text in wide columns or long passages, more space between lines (loose leading) can make it easier for people to keep their place while moving from one line to the next. Conversely, if you need to display multiple lines of text in an area where height is constrained — for example, in a list row — decreasing the space between lines (tight leading) can help the text fit well. If you need to display three or more lines of text, avoid tight leading even in areas where height is limited.

Access all system fonts — don't embed system fonts in your app or game.

If necessary, adjust tracking in interface mockups. In a running app, the system font dynamically adjusts tracking at every point size. To produce an accurate interface mockup of an interface that uses the variable system fonts, you don't have to choose a discrete optical size at certain point sizes, but you might need to adjust the tracking.

## Using custom fonts

Make sure custom fonts are legible. People need to be able to read your custom font easily at various viewing distances and under a variety of conditions. While using a custom font, be guided by the recommended minimum font sizes for various styles and weights.

Implement accessibility features for custom fonts. System fonts automatically support scalable text (where available) and respond when people turn on accessibility features, such as Bold Text. If you use a custom font, make sure it implements the same behaviors.

## Supporting scalable text

Scalable text is a system-level feature that lets people adjust the size of visible text on their device to ensure readability and comfort.

Make sure your app's layout adapts to all font sizes. Verify that your design scales, and that text and glyphs are legible at all font sizes.

Increase the size of meaningful interface icons as font size increases. If you use interface icons to communicate important information, make sure they're easy to view at larger font sizes too. When you use the system icon set, you get icons that scale automatically with scalable text size changes.

Keep text truncation to a minimum as font size increases. In general, aim to display as much useful text at the largest accessibility font size as you do at the largest standard font size. Avoid truncating text in scrollable regions unless people can open a separate view to read the rest of the content.

Consider adjusting your layout at large font sizes. When font size increases in a horizontally constrained context, inline items (like glyphs and timestamps) and container boundaries can crowd text and cause truncation or overlapping. To improve readability, consider using a stacked layout where text appears above secondary items.

Maintain a consistent information hierarchy regardless of the current font size. For example, keep primary elements toward the top of a view even when the font size is very large, so that people don't lose track of these elements.

## Platform considerations

### Mobile

The system font is the system font on mobile. Mobile apps can also use NY (New York).

Mobile platforms support scalable text, allowing users to adjust text sizes for better readability and comfort.

### Desktop

The system font is the system font on desktop. NY is available for desktop apps. Desktop does not support scalable text.

When necessary, use dynamic system font variants to match the text in standard controls.
