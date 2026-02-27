# Managing Accounts

> Source: [https://developer.apple.com/design/human-interface-guidelines/managing-accounts](https://developer.apple.com/design/human-interface-guidelines/managing-accounts)

---

When it doesn't create an unnecessary barrier to your experience, an account can be a convenient way for people to access their content and track personal details.

Ask people to create an account only if your core functionality requires it; otherwise, let people enjoy your app or game without one. If you require an account, consider using sign-in methods that give people a consistent, trustworthy experience and the convenience of not having to remember multiple accounts and authentication methods.

## Best practices

Explain the benefits of creating an account and how to sign up. If your app or game requires an account, write a brief, friendly description of the reasons for the requirement and its benefits. Display this message in your sign-in view.

Delay sign-in for as long as possible. People often abandon apps when they're forced to sign in before they can do anything useful. To help avoid this situation, give people a chance to get a sense of what your app or game does before asking them to make a commitment to it. For example, a shopping app might let people browse as much as they want, requiring sign-in only when they're ready to make a purchase.

Prefer using a passkey for authentication. Passkeys simplify account creation and authentication, eliminating the need for people to create or enter passwords. When an app supports passkeys, people simply provide their user name when creating a new account or signing in to an existing one. If you need to continue using passwords for authentication, augment security by requiring two-factor authentication.

Always identify the authentication method you offer. For example, if you display a button for signing in to your app with biometric authentication, title it using a clear description like "Sign In with Biometric" instead of a generic phrase like "Sign In."

Refer only to authentication methods that are available in the current context. Check the device's capabilities and use the appropriate terminology.

In general, avoid offering an app-specific setting for opting in to biometric authentication. People turn on biometric authentication at the system level, so presenting an in-app setting is redundant and could be confusing.

Avoid using the term "passcode" to refer to account authentication. People create a passcode to unlock their device or authenticate for services. If you use the term in your interface, people might think you're asking them to reuse their device passcode in your app or game.

## Deleting accounts

If you help people create an account within your app or game, you must also help them delete it, not just deactivate it. In addition to following the guidelines below, be sure to understand and comply with your region's legal requirements related to account deletion and the right to be forgotten.

Important: If legal requirements compel your app to maintain accounts or information — such as digital health records — or to follow a specific account-deletion process, clearly describe the situation so people can understand the information or accounts you must maintain and the process you must follow.

Provide a clear way to initiate account deletion within your app or game. If people can't perform account deletion within your app, you must provide a direct link to the webpage on which people can do so. Make the link easy to discover — for example, don't bury it in your Privacy Policy or Terms of Service pages.

Provide a consistent account-deletion experience whether people perform it within your app or game or on the website. For example, avoid making one version of the deletion flow longer or more complicated than the other.

Consider letting people schedule account deletion to occur in the future. People can appreciate the opportunity to use their remaining services or wait until their subscription auto-renews before deleting their account. If you offer a way to schedule account deletion, offer an option for immediate deletion as well.

Tell people when account deletion will complete, and notify them when it's finished. Because it can sometimes take a while to fully delete an account, it's essential to keep people informed about the status of the deletion process so they know what to expect.

If you support in-app purchases, help people understand how billing and cancellation work when they delete their account. For example, you might need to help people understand the following scenarios:

- Billing for an auto-renewable subscription continues through the app's payment system until people cancel the subscription, regardless of whether they delete their account.
- After they delete their account, people need to cancel their subscription or request a refund.

In addition to helping people understand these scenarios, provide information that describes how to cancel subscriptions and manage purchases.

Note: Even if people didn't use your app to purchase the subscription, you still need to support account deletion.

## Platform considerations

No additional considerations for mobile and desktop platforms.

## Related

Onboarding
