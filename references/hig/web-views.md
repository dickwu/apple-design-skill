# Web views

> Source: <https://developer.apple.com/design/human-interface-guidelines/web-views>
> Section: Components › Content
> Platforms covered: iOS, iPadOS, macOS (guidance specific to visionOS omitted)

A web view loads and displays rich web content, such as embedded HTML and websites, directly within your app.

---

For example, Mail uses a web view to show HTML content in messages.

## Best practices

**Support forward and back navigation when appropriate.** Web views support forward and back navigation, but this behavior isn’t available by default. If people are likely to use your web view to visit multiple pages, allow forward and back navigation, and provide corresponding controls to initiate these features.

**Avoid using a web view to build a web browser.** Using a web view to let people briefly access a website without leaving the context of your app is fine, but Safari is the primary way people browse the web. Attempting to replicate the functionality of Safari in your app is unnecessary and discouraged.

## Platform considerations

*No additional considerations for iOS, iPadOS, macOS, or visionOS. Not supported in tvOS or watchOS.*
