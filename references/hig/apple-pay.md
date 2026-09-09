# Apple Pay

> Source: <https://developer.apple.com/design/human-interface-guidelines/apple-pay>
> Section: Technologies
> Platforms covered: iOS, iPadOS, macOS (guidance specific to visionOS, watchOS omitted)
> Last change on Apple's site: 2026-06-08 (Refined guidance to reflect the latest Apple Pay appearance and capabilities.)

Apple Pay is a secure, easy way to make payments for physical goods and services, donations, and subscriptions in apps and in any browser.

---

Use Apple Pay to sell physical goods like groceries, clothing, and appliances; for services such as club memberships, hotel reservations, and event tickets; and for donations. Apps and websites that accept Apple Pay display it as an available payment option and include an Apple Pay button in the purchasing flow that people use to bring up a payment sheet.

During checkout, the payment sheet can show the credit or debit card linked to Apple Pay, purchase amount (including tax and fees), shipping options, contact information, and other relevant details. People make any necessary adjustments and then authorize payment and complete the purchase using credentials stored securely on the device.

People pay using Face ID, Touch ID, or Optic ID on supported devices, or by double-clicking on Apple Watch. In browsers, they can also pay using a nearby iPhone or Apple Watch, or by scanning a code with an iPhone or iPad.

For developer guidance, see [Apple Pay](https://developer.apple.com/documentation/passkit/apple-pay) and [Apple Pay on the Web](https://developer.apple.com/documentation/applepayontheweb). For a hands-on demo of Apple Pay on the web, see [Apple Pay on the web interactive demo](https://applepaydemo.apple.com).

> **Note:** Use [In-app purchase](in-app-purchase.md) to sell virtual goods in your app, such as premium content, and subscriptions for digital content.

## Offering Apple Pay

**Offer Apple Pay on all devices and browsers that support it.** If the device doesn’t support Apple Pay, don’t present Apple Pay as a payment option. For developer guidance, see [PKPaymentAuthorizationController](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationcontroller) (iOS, watchOS) and [applePayCapabilities](https://developer.apple.com/documentation/applepayontheweb/applepaysession/applepaycapabilities) (web).

**Make Apple Pay the primary payment option when credentials are available.** If you use Apple Pay APIs to find out whether someone has an active card in Wallet, you must make Apple Pay the primary — but not necessarily sole — payment option everywhere you use the APIs. Don’t separate Apple Pay into a different step or flow. For example, you might pre-select Apple Pay when displaying it alongside other options. For developer guidance, see [Offering Apple Pay in Your App](https://developer.apple.com/documentation/passkit/offering-apple-pay-in-your-app) (iOS, watchOS) and [Checking for Apple Pay availability](https://developer.apple.com/documentation/applepayontheweb/checking-for-apple-pay-availability) (web).

**Use Apple Pay buttons only to initiate payment or, when appropriate, the Apple Pay setup process.** When people choose an Apple Pay button to make a purchase, but their device doesn’t have Apple Pay set up, they’re given the opportunity to set up Apple Pay. Don’t use Apple Pay buttons in any other way.

**If you use a custom button to start the Apple Pay payment process, make sure your custom button doesn’t display “Apple Pay” or the Apple Pay logo.** In this scenario, you must let people know that you accept Apple Pay by displaying the [Apple Pay mark](#apple-pay-mark) graphic or referencing Apple Pay in text on the same page that displays your payment button.

**Use the Apple Pay mark graphic only to communicate that you accept Apple Pay.** The Apple Pay mark doesn’t facilitate payment. Never use it as a payment button or position it as a button. When using the Apple Pay mark to indicate Apple Pay as the selected payment method, you can create a separate custom button that matches your app or website design to initiate the Apple Pay payment.

**Don’t hide an Apple Pay button or make it appear unavailable.** If an Apple Pay button can’t be used yet, such as when a product size or color hasn’t been selected, gracefully point out the problem after someone taps or clicks the button.

**Inform search engines that Apple Pay is accepted on your website.** If your website uses semantic markup to provide product details to search engines, list Apple Pay as a payment option.

> **Important:** All websites that offer Apple Pay must include a privacy statement and adhere to the [Acceptable use guidelines for Apple Pay on the web](https://developer.apple.com/apple-pay/acceptable-use-guidelines-for-websites/).

## Streamlining checkout

**Provide a cohesive checkout experience.** It’s best when the entire checkout flow feels tightly integrated with your app or website. Use your branding throughout the checkout experience and avoid opening different pages or windows. For website checkout flows in particular, opening new windows during the process can cause confusion and may even lead people to think they’ve been handed off to a different website.

**If Apple Pay is available, assume people want to use it.** Consider presenting the Apple Pay button as the first payment option, displaying it larger than other options, or using a line to visually separate it from other choices.

**Accelerate single-item purchases with Apple Pay buttons on product detail pages.** In addition to a shopping cart, consider offering Apple Pay buttons on product detail pages so people can purchase an individual item quickly. Purchases initiated in this way need to be for an individual item only, excluding any items already in the cart. If the cart contains the purchased item, remove the item from the cart once the purchase is complete.

**Accelerate multi-item purchases with express checkout.** An express checkout feature immediately shows the payment sheet and lets someone purchase everything in their cart quickly using a single shipping method and destination.

**Support coupons and promotional codes in the payment sheet.** If you offer a coupon or promotional code, let people enter it directly on the payment sheet rather than requiring a separate step. This is especially important for express checkout flows, where people bypass the standard checkout experience.

**Collect necessary information, like color and size options, before people reach the Apple Pay button.** When information is missing at checkout time — perhaps because someone forgot to choose an option — gracefully point out the problem and help them correct it. Use highlighting or warning text to identify missing information, and automatically navigate to the problematic field so people can correct it quickly and complete their purchase.

**Collect optional information before checkout begins.** There’s no way to input optional data — like gift messages or delivery instructions — on the payment sheet, so collect this information ahead of time or even after the purchase is complete.

**Gather multiple shipping methods and destinations before showing the payment sheet.** The payment sheet lets people select a single shipping method and destination for an entire order. If people can choose different shipping methods and destinations for individual items in an order, collect those details before Apple Pay checkout.

**For in-store pickup, help people choose a pickup location before displaying the payment sheet.** After someone chooses a pickup location, show the location’s address on the payment sheet. For developer guidance, see [Displaying a Read-Only Pickup Address](https://developer.apple.com/documentation/passkit/displaying-a-read-only-pickup-address).

**Prefer checkout information from Apple Pay.** Assume that Apple Pay information is complete and up to date. Even if your app or website has existing contact, shipping, and payment information, consider fetching the latest from Apple Pay during checkout to reduce potential corrections.

**Avoid requiring account creation before purchase.** If you want people to register for an account, ask them to do so on the order confirmation page. Prepopulate as many registration fields as possible using information provided during checkout.

**Report transaction results in the payment sheet.** In failure cases, such as a bad address, provide error messages so people can take steps to fix the problem.

**Display an order confirmation or thank-you page.** After the payment sheet shows the result of the transaction, display an order confirmation page to thank people for their purchase, provide details about when the order will ship, and indicate how to check its status. Listing Apple Pay on the confirmation page isn’t necessary, but if you do, show it after the last four digits of the account used to process the transaction or as a separate note. For example, ”1234 (Apple Pay)” or ”Paid with Apple Pay.”

### Customizing the payment sheet

**Only present and request essential information.** People may get confused or have privacy concerns if the payment sheet includes extraneous information. For example, it makes sense to see a contact email address but not a shipping address if the purchase is a gift card that’s delivered electronically. Showing or asking for a shipping address in this scenario may give the false impression that something is physically delivered.

**Display the active coupon or promotional code, or let people enter one.** If people can enter a code before the payment sheet appears, show it on the sheet to reassure them that you applied the code. Consider allowing code entry on the payment sheet as well, particularly in an express checkout flow.

**Let people choose the shipping method in the payment sheet.** To the extent space permits, show a clear description, a cost, and, optionally, an estimated delivery or pickup date — or range of dates — for each available option. Leverage the shipping method’s calendar and time-zone support to provide accurate delivery or pickup information, regardless of the person’s current location. For developer guidance, see [PKDateComponentsRange](https://developer.apple.com/documentation/passkit/pkdatecomponentsrange).

**For in-store pickup, consider letting people choose a pickup window that works for them.** You can use the shipping method to supply a range of dates and times from which people can choose.

**Use line items to explain additional charges, discounts, pending costs, add-on donations, recurring payments, and future payments.** A line item includes a label and cost; a line item for a recurring payment can also include a frequency. Don’t use line items to show an itemized list of products that make up the purchase. For developer guidance, see [paymentSummaryItems](https://developer.apple.com/documentation/passkit/pkpaymentrequest/paymentsummaryitems); for guidance on donations, see [Supporting donations](#supporting-donations).

*Illustrated: iOS, Web.*

**Keep line items short.** Make line items specific and easily understandable at a glance. Whenever possible, fit line items on a single line.

**Provide a business name after the word *Pay* on the same line as the total.** Use the same business name people will see when they look for the charge on their bank or credit card statement. This provides reassurance that payment is going to the right place. For example, Pay [*Business_Name*].

**If you’re not the end merchant, identify both businesses in the payment sheet.** When your app, App Clip, or website acts as an intermediary, such as a marketplace where people buy from third-party sellers, people may not realize two businesses are involved. Clearly describe the relationship in the Pay line using something like *Pay [End_Merchant_Business_Name (via Your_Business_Name)]*.

**Clearly disclose when people may incur additional costs after payment authorization.** In some cases, you may not know the total cost at checkout time. For example, the price of a car ride based on distance or time might change after checkout. Or, someone might want to add a tip after they receive their delivery. In situations like these, and when local regulations allow, you can provide a clear explanation in the payment sheet and a subtotal marked as Amount Pending. If you’re preauthorizing a specific amount, be sure the payment sheet accurately reflects this information.

**Handle data entry and payment errors gracefully.** If an error occurs during checkout, help people resolve it quickly so they can complete their transaction. For related guidance, see [Data validation errors](#data-validation-errors).

**Defer to the payment sheet for progress information during payment.** The payment sheet already presents loading states and progress clearly. Additional spinners or progress indicators can create confusion about the state of the transaction.

## Displaying a website icon

Many websites provide an icon that appears with bookmarks, in URL fields, and on a device’s Home Screen. Websites that support Apple Pay can also use this icon during payment authorization — most notably during Handoff, when a person authorizes payment on a connected device — to provide visual reassurance that payment is going to the right place. For subscription payment flows, the icon can also appear in Wallet.

If your website supports Apple Pay, provide an icon in the following sizes:

| @2x | @3x |
| --- | --- |
| 60x60 pt (120x120 px @2x) | 60x60 pt (180x180 px @3x) |

## Handling problems

Provide clear, actionable guidance when problems occur during checkout or payment processing, so people can resolve them quickly and complete their transaction.

### Data validation errors

Your app or website can respond to user input when the payment sheet appears, when people change certain field values on the payment sheet, and after they authenticate the transaction. Use these opportunities to check for data entry problems and to provide clear and consistent messaging.

*Illustrated: iOS, Web.*

When data is invalid, system-provided error messages highlight relevant fields on the payment sheet. People can choose a field to view additional details and resolve the problem. Provide customized error messages for the detail view that appears when people choose a problematic field.

For developer guidance, see [PKPaymentAuthorizationViewControllerDelegate](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationviewcontrollerdelegate) (iOS, watchOS) and  [Apple Pay on the Web](https://developer.apple.com/documentation/applepayontheweb) (web).

> **Note:** For privacy reasons, your app or website has limited access to data until people attempt to authorize a transaction. Before authorization, only the card type and a redacted shipping address are accessible. It’s critical to display errors when authorization fails, but to the extent possible, you also need to attempt to validate available information and report problems before authorization.

**Avoid forcing compliance with your business logic.** Design a data validation process that’s intelligent enough to ignore irrelevant data and infer missing data whenever possible. For example, if your app requires a five-digit zip code but someone enters a Zip+4 code, ignore the additional digits rather than asking for a correction. Let people enter phone numbers in multiple formats — such as with and without dashes, and with and without a country code — without producing an error.

**Accurately report problems to the system.** When a problem occurs, provide a custom error message and the correct status code so the system can show the most relevant error on the payment sheet. For developer guidance, see [PKPaymentError](https://developer.apple.com/documentation/passkit/pkpaymenterror) (iOS, watchOS) and [Apple Pay Status Codes](https://developer.apple.com/documentation/applepayontheweb/apple-pay-status-codes) (web).

**Explain the problem clearly and succinctly when data is invalid or incorrectly formatted.** Reference the relevant field and indicate exactly what’s expected. For example, if people enter an invalid zip code, instead of showing “Address is invalid,” show a specific message like “Zip code doesn’t match city.” If the shipping address is unserviceable, indicate why with a message like “Shipping not available for this state.” Use noun phrases with sentence-style capitalization and no ending punctuation. Aim to keep messages at 128 characters or fewer to avoid truncation.

### Payment processing problems

**Handle interruptions correctly.** An event like a cancellation or timeout might interrupt the payment flow, causing the payment sheet to dismiss. When such an event occurs, you must cancel any in-progress payment. After the payment sheet dismisses, people can restart the process by choosing the Apple Pay button again. For developer guidance, see [PKPaymentAuthorizationViewControllerDelegate](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationviewcontrollerdelegate) (iOS, watchOS) and [oncancel](https://developer.apple.com/documentation/applepayontheweb/applepaysession/oncancel) (web).

## Supporting subscriptions

Your app or website can use Apple Pay to request authorization for recurring payments. A recurring payment can be a fixed amount, such as a monthly movie ticket subscription, or — when local regulations allow — a variable amount like a weekly grocery order. The initial authorization can also include discounts and additional fees.

*Illustrated: iOS, Web.*

**Clarify subscription details before showing the payment sheet.** Before asking people to authorize a recurring payment, make sure they fully understand the billing frequency and any other terms of service. You can show the billing frequency on the payment sheet.

**Include line items that reiterate billing frequency, discounts, and additional upfront fees.** Use these line items to remind people what they’re authorizing. If no payment is required at authorization time, clearly disclose when billing will occur.

*Illustrated: iOS, Web.*

**Clearly communicate trial period terms.** For subscriptions with a trial period, use line items to display the trial amount (including $0 if free), the regular amount after the trial, and the date regular billing begins.

**Clarify the current payment amount in the total line.** Make sure people know the amount they’re being billed at the time of authorization.

**Only show the payment sheet when a subscription change results in additional fees.** When someone changes a subscription, authorization isn’t necessary if the cost decreases or remains the same.

> **Important:** Treat the billing agreement field as a plain-language summary, not a substitute for formal terms. If you use this field, be concise and avoid duplicating information shown elsewhere in your app, website, or line items. When in doubt, leave this field blank to maintain a clean, simple payment sheet.

## Supporting donations

[Approved nonprofits](https://developer.apple.com/support/apple-pay-nonprofits/) can use Apple Pay to accept donations.

**Use a line item to identify a donation.** Display a line item on the payment sheet that reminds people they’re authorizing a donation; for example, display *Donation $50.00*.

**Streamline checkout by offering predefined donation amounts.** You can reduce steps in the donation process by offering recommended donations, like $25, $50, $100. Include an Other Amount option too, so people can customize the donation if they prefer.

## Using Apple Pay buttons

Apple Pay buttons come in several types and styles to fit different contexts and purchase flows. Use the Apple-provided APIs to create them. Doing so gives you:

- Buttons with Apple-approved captions, fonts, colors, and styles
- Content that scales proportionally at any size
- Automatic localization into the device’s language
- Corner radius customization to match your interface
- Built-in VoiceOver support with automatic alternative text

**Always use the Apple-provided API to display Apple Pay buttons.** Unlike button graphics, API-generated buttons always have the correct appearance and are localized automatically. Don’t create custom Apple Pay button designs or try to replicate the Apple-provided ones. For developer guidance, see [PKPaymentButtonType](https://developer.apple.com/documentation/passkit/pkpaymentbuttontype) and [PKPaymentButtonStyle](https://developer.apple.com/documentation/passkit/pkpaymentbuttonstyle) (iOS and macOS), [WKInterfacePaymentButton](https://developer.apple.com/documentation/watchkit/wkinterfacepaymentbutton) (watchOS), and [Apple Pay on the Web](https://developer.apple.com/documentation/applepayontheweb) (web).

> **Tip:** Use the [Apple Pay mark](#apple-pay-mark) graphic to communicate the availability of Apple Pay wherever you highlight payment options.

### Button types

Choose a button type that best fits the terminology and flow of your purchase or payment experience.

#### Apple Pay button

Use the buttons below to initiate payment. In some contexts, the system automatically displays an image of the default card on payment buttons, letting people know Apple Pay is set up and ready to use.

| Payment button type | Example usage |
| --- | --- |
| *image: button buy with* | An area in an app or website where people can make a purchase, such as a product detail page or shopping cart page. |
| *image: button pay with* | An app or website that lets people pay bills or invoices, such as those for a utility — like cable or electricity — or a service like plumbing or car repair. |
| *image: button check out with* | An app or website offering a shopping cart or purchase experience that includes other payment buttons that start with the text *Check Out*. |
| *image: button continue with* | An app or website offering a shopping cart or purchase experience that includes other payment buttons that start with the text *Continue*. |
| *image: button book with* | An app or website that helps people book flights, trips, or other experiences. |
| *image: button donate with* | An app or website for an [approved nonprofit](https://developer.apple.com/support/apple-pay-nonprofits/) that lets people make donations. |
| *image: button subscribe with* | An app or website that lets people purchase a subscription, such as a gym membership or a meal-kit delivery service. |
| *image: button reload with* | An app or website that uses the term *Reload* to help people add money to a card, account, or payment system associated with a service, such as transit or a prepaid phone plan. |
| *image: button add money with* | An app or website that uses the term *Add Money* to help people add money to a card, account, or payment system associated with a service, such as transit or a prepaid phone plan. |
| *image: button top up with* | An app or website that uses the term *Top Up* to help people add money to a card, account, or payment system associated with a service, such as transit or a prepaid phone plan. |
| *image: button order with* | An app or website that lets people place orders for items like meals or flowers. |
| *image: button rent with* | An app or website that lets people rent items like cars or scooters. |
| *image: button support with* | An app or website that uses the term *Support* to help people give money to projects, causes, organizations, and other entities. |
| *image: button contribute with* | An app or website that uses the term *Contribute* to help people give money to projects, causes, organizations, and other entities. |
| *image: button tip with* | An app or website that lets people tip for goods or services. |
| *image: ap button* | An app or website that has stylistic reasons to use a button that can have a smaller minimum width or that doesn’t specify a call to action. If you choose a payment button type that isn’t supported on the version of the operating system your app or website is running in, the system may replace it with this button. |

#### Set Up Apple Pay button

When a device supports Apple Pay but the person hasn’t set it up yet, you can use the Set Up Apple Pay button to show that you accept Apple Pay, and to give the person an explicit opportunity to set it up. Display the Set Up Apple Pay button in Settings, a user profile, or an interstitial page.

### Button styles

Use the *automatic* style to let the current system appearance determine the appearance of Apple Pay buttons. For developer guidance, see [PKPaymentButtonStyle.automatic](https://developer.apple.com/documentation/passkit/pkpaymentbuttonstyle/automatic) (apps) and [ApplePayButtonStyle](https://developer.apple.com/documentation/applepayontheweb/applepaybuttonstyle) (web). To control button appearance yourself, choose from the following options.

#### Black

Use on white or light-color backgrounds that provide sufficient contrast. Don’t use on black or dark backgrounds.

#### White with outline

Use on white or light-color backgrounds that don’t provide sufficient contrast. Don’t place on dark or saturated backgrounds.

#### White

Use on dark-color backgrounds that provide sufficient contrast.

### Button size and position

**Prominently display the Apple Pay button.** Make the Apple Pay button no smaller than other payment buttons, and avoid making people scroll to see it.

**Position the Apple Pay button correctly in relation to an Add to Cart button.** In a side-by-side layout, place the Apple Pay button to the right of an Add to Cart button.

In a stacked layout, place the Apple Pay button above an Add to Cart button.

**Adjust the corner radius to match the appearance of other buttons.** By default, an Apple Pay button has rounded corners. You can change the corner radius to produce a button with square corners or a capsule-shape button. For developer guidance, see [cornerRadius](https://developer.apple.com/documentation/passkit/pkpaymentbutton/cornerradius).

**Maintain the minimum button size and margins around the button.** Be mindful that the button title may vary in length depending on the locale.

> **Note:** If the size you specify doesn’t accommodate the translated title for the type of payment button you’re using, the system automatically replaces it with the plain Apple Pay button shown below on the left. There is no automatic replacement for the Set Up Apple Pay button.

Use the following values for guidance.

| Button | Minimum width | Minimum height | Minimum margins |
| --- | --- | --- | --- |
| Apple Pay | 100pt (100px @1x, 200px @2x) | 30pt (30px @1x, 60px @2x) | 1/10 of the button’s height |
| Book with Apple Pay | 140pt (140px @1x, 280px @2x) | 30pt (30px @1x, 60px @2x) | 1/10 of the button’s height |
| Buy with Apple Pay | 140pt (140px @1x, 280px @2x) | 30pt (30px @1x, 60px @2x) | 1/10 of the button’s height |
| Check Out with Apple Pay | 140pt (140px @1x, 280px @2x) | 30pt (30px @1x, 60px @2x) | 1/10 of the button’s height |
| Donate with Apple Pay | 140pt (140px @1x, 280px @2x) | 30pt (30px @1x, 60px @2x) | 1/10 of the button’s height |
| Set Up Apple Pay | 140pt (140px @1x, 280px @2x) | 30pt (30px @1x, 60px @2x) | 1/10 of the button’s height |
| Subscribe with Apple Pay | 140pt (140px @1x, 280px @2x) | 30pt (30px @1x, 60px @2x) | 1/10 of the button’s height |

### Apple Pay mark

Use the Apple Pay mark graphic to show that Apple Pay is an available payment option when showing other available payment options. The Apple Pay mark isn’t a button; if you need an Apple Pay button, choose one of the buttons described in [Button types](#button-types). For design guidance related to showing Apple Pay as a payment option, see [Offering Apple Pay](#offering-apple-pay).

**Use only the artwork provided by Apple, with no alterations other than height.** You can specify a height for the Apple Pay mark, but make sure that the height you use is equal to or larger than other payment brand marks in your payment flow. Don’t adjust the width, corner radius, or aspect ratio of the artwork; don’t add a trademark symbol or any other content; don’t remove the border; don’t add visual effects to the mark, such as shadows, glows, or reflections; and don’t flip, rotate, or animate the Apple Pay mark.

**Maintain a minimum clear space around the mark of 1/10 of its height.** Don’t let the Apple Pay mark share its surrounding border with another graphic or button.

Download the Apple Pay mark graphic and full usage guidelines from the [Apple Pay Marketing Guidelines page](https://developer.apple.com/apple-pay/marketing/).

## Referring to Apple Pay

You can use plain text to promote Apple Pay and indicate that Apple Pay is a payment option. As with all Apple product names, use Apple Pay exactly as shown in [Apple Trademark List](https://www.apple.com/legal/intellectual-property/trademark/appletmlist.html) — never make it plural or possessive — and adhere to [Guidelines for Using Apple Trademarks](https://www.apple.com/legal/intellectual-property/guidelinesfor3rdparties.html).

**Capitalize Apple Pay in text as it appears in the Apple Trademark List.** Use two words with an uppercase *A*, an uppercase *P*, and lowercase for all other letters. Display Apple Pay entirely in uppercase only when doing so is necessary for conforming to an established typographic style that capitalizes all letters.

**Never use the Apple logo to represent the name *Apple* in text.** In the United States, use the registered trademark symbol (®) the first time Apple Pay appears in body text. Don’t include a registered trademark symbol when Apple Pay appears as a selection option during checkout.

|  | Example text |
| --- | --- |
| ✓ | Purchase with Apple Pay |
| ✓ | Purchase with Apple Pay® |
| ✗ | Purchase with ApplePay |
| ✗ | Purchase with  Pay |
| ✗ | Purchase with APPLE PAY (when not conforming to an interface style that uses only capital letters) |

**Coordinate the font face and size with your app or website.** Don’t mimic Apple typography. Instead, use text attributes that are consistent with the rest of your app or website.

**Don’t translate *Apple Pay* or any other Apple trademark.** Always use Apple trademarks in English, even when they appear within non-English text.

**In a payment selection context, you can display a text-only description of Apple Pay only when all payment options have text-only descriptions.** If any other payment option description includes an icon or logo, you must use the Apple Pay mark graphic as described in [Offering Apple Pay](#offering-apple-pay).

**When promoting Apple Pay in an app, follow App Store guidelines.** For specific guidance, see the [App Store marketing guidelines](https://developer.apple.com/app-store/marketing/guidelines/).

## Platform considerations

*No additional considerations for iOS, iPadOS, macOS, visionOS, or watchOS. Not supported in tvOS.*

## Change log

| Date | Changes |
| --- | --- |
| June 8, 2026 | Refined guidance to reflect the latest Apple Pay appearance and capabilities. |
| December 16, 2025 | Clarified supported platforms, including web browsers and Apple Vision Pro. |
| June 10, 2024 | Updated links to developer guidance for offering Apple Pay on the web. |
| September 12, 2023 | Updated artwork. |
| May 2, 2023 | Consolidated guidance into one page. |
