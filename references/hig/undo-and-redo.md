# Undo And Redo

> Source: [https://developer.apple.com/design/human-interface-guidelines/undo-and-redo](https://developer.apple.com/design/human-interface-guidelines/undo-and-redo)

---

## Overview

Undo and redo gives people easy ways to reverse many types of actions, which can also help people explore and experiment safely as they learn a new interface or task.

People expect undo and redo to let them reverse their recent actions, so they're likely to try undoing — often multiple times — until something changes. In a situation like this, people might not remember which of their previous actions an undo is targeting, which can lead to unintended changes and frustration. To help people remain in control, it's essential to help people predict the outcome of undoing and redoing and to highlight the results.

## Best practices

Help people predict the results of undo and redo as much as possible. On mobile, for example, you can describe the result in the alert that displays when people trigger an undo, giving them the option of performing the undo or canceling it. If you provide undo and redo menu items, you can modify the menu item labels to identify the result. For example, a document-based app might use menu item labels like Undo Typing or Redo Bold.

Show the results of an undo or redo. Sometimes, the most recent action that people want to undo affects content or an area that's no longer visible. In cases like this, it's crucial to highlight the result of each undo and redo to keep people from thinking that the action had no effect, which can lead them to perform it repeatedly. For example, if people undo after deleting a paragraph in a document area that's no longer onscreen, you might scroll the document to show the restored paragraph.

Let people undo multiple times. Avoid placing unnecessary limits on the number of times people can undo or redo. People generally expect to undo every action they've performed since taking a logical step like opening a document or saving their work.

Consider giving people the option to revert multiple changes at once. In some scenarios, people might appreciate the ability to undo a batch of discrete but related actions — like incremental adjustments to a single property or attribute — so they don't have to undo each individual adjustment. In other cases, it can make sense to give people a convenient way to undo all the changes they made since opening a document or saving their work.

Provide undo and redo buttons only when necessary. People generally expect to initiate undo and redo in system-supported ways, such as choosing the items in a desktop app's Edit menu, using keyboard shortcuts on a desktop, or shaking their mobile device. If it's important to provide dedicated undo and redo buttons in your app, use the standard system-provided symbols and put the buttons in a toolbar.

## Platform considerations

### Mobile

Avoid redefining standard gestures for undo and redo. For example, people can use a three-finger swipe to initiate an undo or redo, or shake their mobile device. As with all standard gestures, redefining them in your interface runs the risk of confusing people and making your experience unpredictable.

Briefly and precisely describe the operation to be undone or redone. The undo and redo alert title automatically includes a prefix of "Undo " or "Redo " (including the trailing space). You need to provide an additional word or two that describes what's being undone or redone, to appear after this prefix. For example, you might create alert titles such as "Undo Name" or "Redo Address Change."

### Desktop

Place undo and redo commands in the Edit menu and support the standard keyboard shortcuts. Desktop users expect to find undo and redo at the top of the Edit menu; they also expect to use Command–Z and Shift–Command–Z to perform undo and redo, respectively.
