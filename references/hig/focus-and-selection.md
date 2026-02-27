# Focus And Selection

> Source: [https://developer.apple.com/design/human-interface-guidelines/focus-and-selection](https://developer.apple.com/design/human-interface-guidelines/focus-and-selection)

---

Focus helps people visually confirm the object that their interaction targets.

Focus supports simplified, component-based navigation. Using inputs like a keyboard, game controller, or remote, people bring focus to the components they want to interact with.

In many cases, focusing an item also selects it. The exception is when automatic selection might cause a distracting context shift, like opening a new view.

Different platforms communicate focus in different ways. For example, mobile and desktop show focus by drawing a ring around an item or highlighting it. The combination of focus effects and interactions is sometimes called a focus system or focus model.

## Best practices

Rely on system-provided focus effects. System-defined focus effects are precisely tuned to complement interactions with devices, providing experiences that feel responsive, fluid, and lifelike. Incorporating system-provided focus behaviors gives your app consistency and predictability, helping people understand it quickly. Consider creating custom focus effects only if it's absolutely necessary.

Avoid changing focus without people's interaction. People rely on the focus system to help them know where they are in your app. If you change focus without their interaction, people have to spend time finding the newly focused item, delaying their current task. The exception is when people are moving focus using an input device that lets them make discrete, directional movements — like a keyboard, remote, or game controller — and a previously focused item disappears. In this scenario, there are only a small number of items within one discrete step of the previously focused item, so moving focus to one of these remaining items ensures that the focus indicator is in a location people can easily find. When people aren't moving focus by using such an input device, you can't predict the item they'll target next, so it's generally best to simply hide the focus indicator when the focused object disappears.

Be consistent with the platform as you help people bring focus to items in your app. For example, in mobile and desktop, a full keyboard access mode helps people use the keyboard to reach every control, so you only need to support focus for content elements like list items, text fields, and search fields, and not for controls like buttons, sliders, and toggles.

Indicate focus using visual appearances that are consistent with the platform. For example, consider a window that contains a list of items. In mobile and desktop, the system draws focused list items using white text and a background highlight that matches the app's accent color, drawing unfocused items using the standard text color and a gray background highlight.

In general, use a focus ring for a text or search field, but use a highlight in a list or collection. Although you can use a focus ring to draw attention to an item that fills a cell, like a photo, it's usually easier for people to view lists and collections when an entire row is highlighted.

## Mobile platforms

Mobile platforms define focus systems that support keyboard interactions for navigating text fields, text views, and sidebars, in addition to various types of collection views and other custom views in your app.

The mobile focus system supports two different keyboard interactions:

- Pressing the Tab key moves focus among focus groups, letting people navigate to sidebars, grids, and other app areas.
- Pressing an arrow key supports a directional focus interaction that's similar to directional input from remote controls, but limited to navigation among items in the same focus group. For example, people can use an arrow key to move through the items in a list or a sidebar.

Onscreen components can indicate focus by using the focus ring or the highlighted appearance.

The focus ring displays a customizable outline around the component. You can apply the focus ring to custom views and to fully opaque content within a collection or list cell, such as an image.

Customize the focus ring when necessary. By default, the system uses an item's shape to infer the shape of its focus ring. If the system-provided focus ring doesn't give you the appearance you want, you can refine it to match contours like rounded corners or shapes defined by paths. You can also adjust a focus ring's position if another component occludes or clips it. For example, you might need to ensure that a badge appears above the focus ring or that a parent view doesn't clip it.

The highlighted appearance — in which the component's text uses the app's accent color — also indicates focus. The highlight appearance occurs automatically when people select a collection view cell.

Ensure that focus moves through your custom views in ways that make sense. As people continue pressing the Tab key, focus moves through focus groups in reading order: leading to trailing, and top to bottom. Although focus moves through system-provided views in ways that people expect, you might need to adjust the order in which the focus system visits your custom views. For example, if you want focus to move down through a vertical stack of custom views before it moves in the trailing direction to the next view, you need to identify the stack container as a single focus group.

Adjust the priority of an item to reflect its importance within a focus group. When a group receives focus, its primary item automatically receives focus too, making it easy for people to select the item they're most likely to want. You can make an item primary by increasing its priority.

## Desktop

Desktop platforms support directional focus for keyboard and input device navigation. People perform actions by moving a focus indicator to an item and then selecting it. Directional focus means people can use the same interaction — arrow keys on a keyboard or directional input from a control device — to navigate to components throughout your app.

Every onscreen component should be reachable via focus navigation, and focus should move intuitively through your interface.

## Related

Eyes
Keyboards
