# In-App Purchase

> Source: [https://developer.apple.com/design/human-interface-guidelines/in-app-purchase](https://developer.apple.com/design/human-interface-guidelines/in-app-purchase)

---

People can use in-app purchase to pay for virtual goods — like premium content, digital goods, and subscriptions — securely within your app.

You can also promote and offer in-app purchases directly through distribution platforms.

In-app purchase and payment systems are different technologies that support different use cases. Use in-app purchase to sell virtual goods in your app, such as premium content for your app and subscriptions for digital content. Use payment systems in your app to sell physical goods like groceries, clothing, and appliances; for services such as club memberships, hotel reservations, and event tickets; and for donations.

Using in-app purchase, there are four types of content you can offer:

- Consumable content like lives or gems in a game. After purchase, consumable content depletes as people use it, and people can purchase it again.
- Non-consumable content like premium features in an app. Purchased non-consumable content doesn't expire.
- Auto-renewable subscriptions to virtual content, services, and premium features in your app on an ongoing basis. An auto-renewable subscription continues to automatically renew at the end of each subscription period until people choose to cancel it.
- Non-renewing subscriptions to a service or content that lasts for a limited time, like access to an in-game battle pass. People purchase a non-renewing subscription each time they want to extend their access to the service or content.

## Best practices

Let people experience your app before making a purchase. People may be more inclined to invest in paid items or features after they've enjoyed your app and discovered its value. If you offer auto-renewable subscriptions, consider supporting limited free access to your content.

Design an integrated shopping experience. You don't want people to think they've entered a different app when they browse and purchase your digital products. Present products and handle transactions in ways that mirror the style of your app.

Use simple, succinct product names and descriptions. Titles that don't truncate or wrap and plain, direct language can help people find products quickly.

Display the total billing price for each in-app purchase you offer, regardless of type. People need to know the total billing amount for every purchase they consider.

Display your store only when people can make payments. If someone can't make payments — for example, because of parental restrictions — consider hiding your store or displaying UI that explains why the store isn't available.

Use the default confirmation sheet. When someone initiates an in-app purchase, the system displays a confirmation sheet to help prevent accidental purchases. Don't modify or replicate this sheet.

### Supporting Family Sharing

People can use Family Sharing to share access to their purchased content — such as auto-renewable subscriptions and non-consumable in-app purchases — with up to five additional family members, across all their devices. To encourage people to take advantage of the Family Sharing support you offer, consider the following guidelines.

Prominently mention Family Sharing in places where people learn about the content you offer. For example, including "Family" or "Shareable" in a subscription or item name and referring to Family Sharing in your sign-up screen can highlight the feature and help people make an informed choice.

Help people understand the benefits of Family Sharing and how to participate. When you turn on Family Sharing, people can receive notifications about the change, depending on their current settings. For example, an existing subscriber whose sharing setting is turned off (the default) receives a notice that invites them to share their subscription with family members. Similarly, a family member can get a notification about content that's being shared with them.

Aim to customize your in-app messaging so that it makes sense to both purchasers and family members. For example, when a family member views shared content for the first time, you might welcome them with wording like "Your family subscription includes…".

### Providing help with in-app purchases

Sometimes, people need help with a purchase or want to request a refund. To help make this experience convenient, you can present custom UI within your app that provides assistance, offers alternative solutions, and helps people initiate the system-provided refund flow.

Provide help that customers can view before they request a refund. In addition to including a link to the system-provided refund flow, your custom purchase-help screen can provide assistance you tailor to your app. For example, your custom screen might help people resolve problems with missing purchases, answer frequently asked questions about the in-app purchases you offer, and give people ways to submit feedback or contact you directly for support.

Use a simple title for the refund action, like "Refund" or "Request a Refund". The system-provided refund flow makes it clear that people request a refund, so there's no need to reiterate this information.

Help people find the problematic purchase. For each recent purchase you display, include contextual information that helps people identify the one they want. For example, you might display an image of the product — along with its name and description — and list the original purchase date.

Consider offering alternative solutions. For example, if the customer didn't receive the item they purchased, you might offer immediate fulfillment or a conciliatory item. Regardless of the alternatives you offer, make it clear that people can still request a refund.

Make it easy for people to request a refund. Although your purchase-help screen can offer useful information and alternative solutions, make sure this content doesn't create a barrier to requesting a refund. For example, avoid making people scroll or open another screen to reveal your refund-request button. When people choose your refund-request item, they automatically enter the system-provided refund flow.

Avoid characterizing or providing guidance on refund policies. To help people understand the refund-request process, you can provide a link to information about requesting refunds.

### Auto-renewable subscriptions

Call attention to subscription benefits during onboarding. By showing the value of your subscription when people first launch your app, you can educate them on how the app works and help them understand what they'll gain by subscribing. Include a strong call to action and a clear summary of subscription terms.

Offer a range of content choices, service levels, and durations. People appreciate the flexibility to choose the subscription that best meets their needs.

Consider letting people try your content for free before signing up. Limited free access gives people the opportunity to sample your content and encourages people who already engaged with your content to sign up. For example, you might offer a freemium app, a metered paywall, or a free trial.

Prompt people to subscribe at relevant times, like when they near their monthly limit of free content. Additionally, consider making it easy for people to subscribe at any time by including prompts at relevant points throughout your app.

Encourage a new subscription only when someone isn't already a subscriber. Otherwise, people may believe their existing subscription has lapsed when that's not actually the case. If you offer the same subscription options in multiple apps or through your website, provide a sign-in option so people don't think they have to pay multiple times for the same service.

### Making signup effortless

A simple and informative sign-up experience makes it easy for people to act on their interest in your content, whether they're in your app or viewing your product page.

Provide clear, distinguishable subscription options. Use short, self-explanatory names that differentiate subscription options from one another, and specify the price and duration for each option. If you offer an introductory price, be sure to list the introductory price, the duration of the offer, and the standard price the customer pays after the offer ends.

Simplify initial signup by asking only for necessary information. A lengthy sign-up process may lower your subscription conversion rate. Defer asking for additional information until after people have signed up.

In your TV app, help people sign up or authenticate using another device. Instead of asking people to input information in your TV app, send a code to another device where they can enter the information you need.

Give people more information in your app's sign-up screen. In addition to including links to your Terms of Service and Privacy Policy in your app and distribution platform metadata, the in-app sign-up screen needs to include:

- The subscription name, duration, and the content or services provided during each subscription period
- The billing amount, correctly localized for the territories and currencies where the subscription is available for purchase
- A way for existing subscribers to sign in or restore purchases

Clearly describe how a free trial works. It's particularly important to make sure people know that when the free trial is over, a payment will be automatically initiated for the next subscription period.

Include a sign-up opportunity in your app's settings. App and account settings are common places for people to look for a way to subscribe.

### Supporting offer codes

In mobile, subscription offer codes let you use both online and offline channels to give new, existing, and lapsed subscribers free or discounted access to your subscription content. For example, you might provide offer codes through email, give them out at a store or event, or print one on a physical product.

There are two types of offer codes you can support:

- A one-time use code is a unique code you generate in your distribution platform. People can redeem a one-time use code through a redemption URL (a shareable link), within your app (when you support redemption), or by entering it in your distribution platform, where they're prompted to install your app if they haven't already. Consider using one-time use codes when your distribution is small or when you need to restrict access to a code.

- A custom code is a code you create, such as NEWYEAR or SPRINGSALE. People can redeem a custom code through a redemption URL or within your app (when you support redemption). Consider using a custom code when you want to support a large campaign that requires a mass distribution of codes.

Clearly explain offer details. To help people make an informed decision, provide a straightforward and succinct description of your offer in your marketing materials.

Follow guidelines for creating a custom code. A custom code can contain only alphanumeric ASCII characters. Don't use special characters.

Tell people how to redeem a custom code. Because people can't redeem a custom code by entering it in their account settings, it's important to let them know that they can redeem it through a redemption URL or within your app.

Consider supporting offer redemption within your app. The system automatically provides screens that present the offer-redemption flow, whether people redeem the offer in your app or in your distribution platform. When you use platform APIs to let people redeem offer codes within your app, the only custom UI you need to create is one that initiates the system-provided flow. There are several natural places to provide this custom UI. For example, you could add a "Redeem Code" button to your paywall, onboarding screens, or your app's settings screen.

Supply an engaging and informative promotional image. Creating this optional image can help people understand the value of your content. If you don't supply a promotional image, the code redemption screens use your app icon by default.

Help people benefit from unlocked content as soon as they complete the redemption flow. Think about ways to align the post-redemption experience in your app with the subscriber's new status. For example, you might provide a welcome experience for new subscribers or a brief tour of new features for an existing subscriber who's unlocked additional functionality. In particular, be prepared to welcome people who subscribe before they open your app for the first time. For example, if you require people to create an account or sign in before they can use your app, make this process as smooth as possible for new subscribers who haven't experienced it before.

### Helping people manage their subscriptions

Supporting subscription management means people can upgrade, downgrade, or cancel a subscription without leaving your app. Offering subscription management within your app also gives you a natural place to provide help for common subscriber issues and present alternative offers for people to consider.

Provide summaries of the customer's subscriptions. In particular, people appreciate viewing the upcoming renewal date without having to search for it. Consider displaying this information in a settings or account screen, near the subscription-management option.

Consider using the system-provided subscription-management UI. Using platform APIs lets you present a consistent experience that helps people manage or cancel their subscriptions without leaving your app.

Consider ways to encourage a subscriber to keep their subscription or resubscribe later. When you use platform APIs, your app is notified when someone chooses to cancel their subscription. In this scenario, you might want to extend a personalized offer as an alternative to cancellation or invite people to describe their reasons for canceling in an exit survey. In addition to giving you insights into various customer problems, survey feedback can also help inform messaging for retention and win-back strategies.

Always make it easy for customers to cancel an auto-renewable subscription. If the manage subscription action is deep within an app — or hard to recognize — subscribers can feel they're being discouraged or prevented from canceling.

Consider creating a branded, contextual experience to complement the system-provided management UI. Within your custom UI, you might offer a popular premium tier or provide personalized suggestions for alternative plans based on what you know about the customer's preferences or how they use your app. For example, you can create a promotional offer that provides a discounted price for a specific period of time. You might also consider subscription offer codes to help you win back lapsed subscribers and encourage existing subscribers to upgrade.

## Platform considerations

No additional considerations for mobile and desktop platforms.
