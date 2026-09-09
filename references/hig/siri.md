# Siri

> Source: <https://developer.apple.com/design/human-interface-guidelines/siri>
> Section: Technologies
> Platforms covered: iOS, iPadOS, macOS (guidance specific to tvOS, visionOS, watchOS omitted)
> Last change on Apple's site: 2026-06-08 (Revised for Siri AI.)

People use Siri to help them with the things they need to find, know, or do every day.

---

Siri is a personal assistant that helps people get information and perform quick actions throughout the system and the apps they use. People interact with Siri in a variety of ways, like using their voice, swiping down from the Dynamic Island, or in the Siri app.

On supported devices, Siri AI introduces a version of Siri powered by Apple Intelligence. When an app integrates its content and features with Apple Intelligence, people can use the natural language awareness and contextual understanding of Siri to initiate the app’s actions from anywhere in the system, interact with content on screen, and quickly reach features that would otherwise require navigating deep into the app.

For example, someone can say “Send a message to Marisa in *AppName*” from anywhere in the system, and Siri can help them complete that task in a contextually appropriate way. With a photo visible on screen, someone can say “Add this photo to my Landscapes album,” then follow up with “And email it to Josh,” which opens an email compose view and adds Josh as the recipient. Saying “Make this black and white” to convert an image to grayscale can also be faster than navigating through menus to find the same command.

## Getting your app to work with Siri

By default, the system doesn’t have specific awareness of what an app can do or the information it contains. In order for an app to work with Siri, the app has to make its features and content available to Apple Intelligence using the [App Intents](https://developer.apple.com/documentation/appintents) framework.

When an app implements intents, the system can expose the things the app can do (the app’s actions, or *intents*) and its content (the app’s *entities*) in system experiences where it makes sense. This makes the app’s actions and content available to features that build on Apple Intelligence, such as Siri, Spotlight, and the Shortcuts app. For developer guidance, see [Getting started with the App Intents framework](https://developer.apple.com/documentation/appintents/getting-started-with-the-app-intents-framework).

To get the most out of Siri, an app can additionally associate its features and content with app *[schemas](https://developer.apple.com/documentation/appintents/app-schema-domains)*: preset templates for functionality that the system already understands. Apps in common domain areas like email, music, or photos can use the system’s existing knowledge to access built-in logic for handling requests through a wider range of options with natural conversation and deeper contextual understanding. For developer guidance, see [Apple Intelligence and Siri AI](https://developer.apple.com/documentation/appintents/apple-intelligence-and-siri-ai) and [Making actions and content discoverable by Apple Intelligence](https://developer.apple.com/documentation/appintents/making-actions-and-content-discoverable-by-apple-intelligence).

### Sharing contextual information

In addition to exposing actions and content with schemas, an app can offer a more personalized experience by giving the system contextual information about its content and features.

An app can tell the system what’s onscreen by annotating its views and other content with app entities. This gives the system information Siri needs to improve contextual interaction based on what someone is interacting with. For example, when someone refers to parts of your app’s content (like buttons or onscreen graphics) during a Siri conversation, Siri can use the annotations your app provides to understand what the person means. For developer guidance, see [Providing contextual cues to Apple Intelligence and Siri](https://developer.apple.com/documentation/appintents/providing-contextual-cues-to-apple-intelligence-and-siri).

To provide content information to the system, an app can donate entities to the on-device Spotlight index, which makes the app’s information available to someone searching in Spotlight or with Siri. For developer guidance, see [Defining app entities for your custom data types](https://developer.apple.com/documentation/appintents/defining-app-entities-for-your-custom-data-types) and [Making app entities available in Spotlight](https://developer.apple.com/documentation/appintents/making-app-entities-available-in-spotlight).

An app can also tell the system about actions a person takes while using it by donating the actions as intents. This helps Siri anticipate future actions a person might want to take, and surface them through various system experiences at appropriate times. Examples of actions an app can donate include things like a person’s recent activity or items that a person has indicated an interest in. For developer guidance, see [Donating your app’s data and actions to the system](https://developer.apple.com/documentation/appintents/donating-your-apps-data-and-actions-to-the-system).

## Best practices

**Identify your app’s most popular actions, and when and where they occur.** Understanding the contexts where those actions are relevant, such as in a hands-free environment or on a particular device, can help you prioritize which actions and content to expose as app intents and entities, and inform how you design a great Siri experience.

**Use familiar terms for your content and actions.** When you create an app intent or entity, you choose the terminology that represents it. For example, you could refer to an audio file as a track, a song, or a podcast. Using language for your features and content that people are most likely to recognize makes interacting with your app through Siri more natural and intuitive.

**Offer relevant content.** Instead of telling Spotlight about all of your app’s content, consider things that are particularly relevant to someone’s personal context — things they’ve recently searched for, their favorite items or bookmarks, or the content of a wishlist. Some app categories, like email or messaging, might have a good reason to consider their entire catalog as relevant information; it can be appropriate to provide expanded access in those cases.

**Don’t advertise.** Don’t include advertisements, marketing, or in-app purchase sales pitches in content that Siri delivers.

**Only provide a custom response if built-in responses don’t meet your app’s needs.** Siri is designed to anticipate a wide variety of natural language requests and respond helpfully without additional configuration.

## Customizing your app’s experience with Siri

For apps with many common feature sets, existing [app schema domains](https://developer.apple.com/documentation/appintents/app-schema-domains) provide the built-in functionality that they need to expose their actions and content to Apple Intelligence and Siri without any additional work. If your app’s functionality falls outside of these areas, *App Shortcuts* offer a way to expose custom actions to the system for Siri to access. For design guidance, see [App Shortcuts](app-shortcuts.md). For developer guidance, see [App Shortcuts](https://developer.apple.com/documentation/appintents/app-shortcuts).

To customize the experience of an action or a piece of content associated with an existing schema, an app can define additional optional properties as part of an intent or entity that can contextually enhance the response that Siri provides. An app could present a playback control [snippet](snippets.md) that Siri can display as an audio file plays, for example. For developer guidance, see [Displaying static and interactive snippets](https://developer.apple.com/documentation/appintents/displaying-static-and-interactive-snippets).

> **Note:** Siri is powered by Apple Intelligence to provide contextually relevant responses. Because responses can appear in a wide variety of contexts, some of which aren’t visual, optional intent or entity properties that an app defines may not always appear as part of a response.

When you provide additional custom properties as part of your schema responses, consider the following guidelines.

**Write response dialogue that’s clear and descriptive.** An effective response clearly conveys what happens when Siri performs the action. If you ask follow-up questions, be sure to customize the default dialogue for clarity. For example, “Which soup?” is clearer than “Which one?”

**Keep responses as succinct as possible.** People might interact with Siri frequently, so they may hear the same response multiple times when answering follow-up questions or dealing with errors. Use the context of the current conversation to remove as many details as possible. Avoid including unnecessary words or attempts at humor, because both can become irritating over time.

**Provide responses that Siri can deliver audibly and visually.** This lets Siri decide which communication method works best for the current situation. For example, if someone using iPhone asks for the weather, the forecast appears onscreen; if they’re using AirPods, Siri speaks the forecast instead. Make sure the voice response can stand alone and that it doesn’t depend on visual elements to fill in essential information.

**Design inclusive interactions.** Create welcoming interactions for everyone by avoiding specific pronouns when they’re not necessary. For example, in response to “Send a message to my best friend,” instead of saying “What’s his or her name?” say “Who should I send it to?” or “To who?” For guidance, see [Writing](writing.md) and [Inclusion](inclusion.md).

**Ask an open-ended question when the full list of options is too long.** If the full list of options is too long for Siri to read in a timely way, follow up with an open-ended question to narrow the scope or get additional detail. For example, “What kind of shoes are you interested in?” in response to a request for the available shoes in a shopping app.

**Keep responses device-independent whenever possible.** People can initiate a Siri request on one device and have it take effect on another, so device-specific wording can easily become confusing or misleading. If you must reference a specific device in a response, make sure it’s accurate and makes sense in context.

**Omit your app name from responses.** The system already provides verbal and visual attribution for your app when responding to people.

**Use appropriate language and respect parental controls.** Don’t include offensive language in dialogue text that you provide. Many families use parental controls to restrict explicit content and other material that’s based on specific rating levels. Be aware that Siri may also respond aloud, and others nearby might hear the response.

**Help people understand errors and failures.** The system provides some default error descriptions, but it’s best to enhance error responses so that they’re specific to the current situation. For example, if the chicken noodle soup is sold out, an error like “Sorry, we’re out of chicken noodle soup” is much clearer than “Sorry, we can’t complete your order.”

## Editorial guidelines

**Refer to Siri by name.** Don’t reference Siri using pronouns like *she*, *him*, or *her*. Ideally, just use the word *Siri*. For example, “After you add a shortcut to Siri, you can run the shortcut anytime by asking Siri.” For additional guidance, see [Guidelines for Using Apple Trademarks](https://www.apple.com/legal/intellectual-property/guidelinesfor3rdparties.html).

**Be aware that the system reserves important actions and phrases for Siri.** Never impersonate Siri, attempt to reproduce the functionality that Siri provides, or provide a response that appears to come from Apple. Don’t use reserved phrases like “Call 911” or “Hey Siri.”

**In a localized context, translate only the word *Hey* in the phrase “Hey Siri.”** As an Apple trademark, *Siri* is never translated. Here is a list of acceptable translations for the phrase “Hey Siri”:

| Locale code | “Hey Siri” translation | Locale code | “Hey Siri” translation |
| --- | --- | --- | --- |
| ar_AE | يا Siri | fr_CA | Dis Siri |
| ar_SA | يا Siri | fr_CH | Dis Siri |
| da_DK | Hej Siri | fr_FR | Dis Siri |
| de_AT | Hey Siri | it_CH | Ehi Siri |
| de_CH | Hey Siri | it_IT | Ehi Siri |
| de_DE | Hey Siri | ja_JP | Hey Siri |
| en_AU | Hey Siri | ko_KR | Siri야 |
| en_CA | Hey Siri | ms_MY | Hai Siri |
| en_GB | Hey Siri | nb_NO | Hei Siri |
| en_IE | Hey Siri | nl_BE | Hé, Siri |
| en_IN | Hey Siri | nl_NL | Hé Siri |
| en_NZ | Hey Siri | no_NO | Hei Siri |
| en_SG | Hey Siri | pt_BR | E aí Siri |
| en_US | Hey Siri | ru_RU | привет Siri |
| en_ZA | Hey Siri | sv_SE | Hej Siri |
| es_CL | Oye Siri | th_TH | หวัดดี Siri |
| es_ES | Oye Siri | tr_TR | Hey Siri |
| es_MX | Oye Siri | zh_CN | 嘿Siri |
| es_US | Oye Siri | zh_HK | 喂 Siri |
| fi_FI | Hei Siri | zh_TW | 嘿 Siri |
| fr_BE | Dis Siri |  |  |

## Change log

| Date | Changes |
| --- | --- |
| June 8, 2026 | Revised for Siri AI. |
| June 5, 2023 | Removed Add to Siri guidance. Added references to the new [App Shortcuts](app-shortcuts.md) page. |
| May 2, 2023 | Consolidated guidance into one page. |

## Related guidelines

- [App Shortcuts](app-shortcuts.md)
- [Snippets](snippets.md)
