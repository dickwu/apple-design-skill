# Generative AI

> Source: <https://developer.apple.com/design/human-interface-guidelines/generative-ai>
> Section: Technologies
> Platforms covered: iOS, iPadOS, macOS (guidance specific to tvOS, visionOS, watchOS omitted)
> Last change on Apple's site: 2026-06-08 (Added guidance for letting people refine results and providing feedback during content generation, and updated guidance for choosing a model type.)

Generative AI empowers you to enhance your app or game with dynamic content and offer intelligent features that unlock new levels of creativity, connection, and productivity.

---

Generative artificial intelligence uses [machine learning](machine-learning.md) models to create and transform text, images, and other content. Use it to offer novel, delightful features that help people express themselves creatively, communicate effectively, and complete tasks more easily. For instance, generative AI can enable people to edit text, create imaginative stories and images, or interact with a character in a game that uses AI-generated dialog.

## Best practices

**Design your experience responsibly.** Responsible AI is the intentional design and development of AI features that considers their direct and indirect impacts on people, systems, and society. With generative AI, it’s often easy to quickly prototype an exciting new feature for your app, yet challenging to create a robust experience that works in all real-world situations. Unlike classic programming, small changes to inputs (or even the same input, when given multiple times) often produce very different outcomes with generative AI. You also can’t always anticipate what requests people will make and how the AI will respond. Orient your design process around crafting AI experiences that are inclusive, designed with care, and protect privacy.

**Keep people in control.** While AI can manipulate and create content, respect people’s agency and ensure they remain in charge of decision making and the overall experience. Honor their requests when in scope and the expected output is clear, and handle sensitive content carefully. Give them the ability to dismiss new content they don’t want, and revert or retry content transformations or other actions they don’t agree with. Clearly identify when and where you use AI.

**Ensure an inclusive experience for all.** AI models learn from data and tend to favor the most common information. This may lead to harmful, unintended biases and stereotypes. Take extra care when designing your AI feature to consider how assumptions and personal attributes might impact the feature you have in mind. For example, if you generate images or descriptions of people, ask people to provide the information needed for the feature to work well rather than solely inferring personal or cultural characteristics. Seek clarity before making assumptions that may lead to common stereotypes, such as about gender identities or relationship types. Test your feature across a diverse set of people to identify and correct stereotypes, and ensure inclusive results. For guidance, see [Inclusion](inclusion.md) and [Accessibility](accessibility.md).

**Design engaging and useful generative features.** Generative AI is a powerful tool, but it’s not the right solution for every situation. Offer generative features when and where they provide clear and specific value, like time savings, improved communication, or enhanced creativity.

**Ensure a great experience even when generative features aren’t available or people opt not to use them.** In some cases, generative AI may be essential to an experience, and there’s no reasonable non-AI substitute. In other cases, AI may play a complementary role that enhances your app’s core functionality, but isn’t critical for people achieving their goals. For example, Genmoji offers a fun way to create new, original emoji, but people can still use regular emoji too. The Apple Intelligence summarization feature makes catching up with notifications faster, but people can still read notifications without it. When possible, consider offering a non-AI fallback.

## Transparency

**Communicate where your app uses AI.** Letting people know when and where your app uses AI sets expectations and gives people the opportunity to knowingly choose to use an AI-powered feature. Never trick someone into thinking they’re interacting with or viewing content authored by a human if they’re actually interacting with AI. Ensure your approach to disclosure aligns with any regulations in the regions where you offer your app.

**Set clear expectations about what your AI-powered feature can and can’t do.** Clarifying your experience’s capabilities and limitations helps people establish a mental model of your feature. For example, when you introduce a feature, you might offer a brief tutorial. For open-ended features like a search bar or generation prompt, consider offering curated suggestions that make it easy to get started. If your feature has known limitations, let people know up front, show them how to get good results, and explain why inferior results occur. For guidance, see [Limitations](machine-learning.md#limitations).

## Privacy

**Choose a model type that fits your feature’s needs and protects people’s privacy.** On-device models keep people’s information on their device, respond quickly, and work offline. When a feature needs more processing power or a larger context size, server-based models are worth considering. Always weigh privacy alongside capability and performance. For any server-based processing, take steps to protect people’s privacy. For example, process as much information locally as possible, and minimize what’s shared. Be transparent by making sure people know their information may be sent to a server, showing them what’s shared, and helping them understand what data may be stored off-device or used for training.

**Ask permission before using personal information and usage data.** Some interactions with an AI model may involve sensitive information, like personal details, messages, photos, and feature usage information. After obtaining permission, use the minimum data you need and always offer a clear way to opt out of its use. If you need sensitive data for model improvement or storage, get explicit permission and handle it with care. If you share data with third parties, understand their approach to privacy. Be aware that model outputs can inadvertently contain sensitive information. Note that [apps for kids](https://developer.apple.com/app-store/kids-apps/) have stricter rules and laws around what data you can use. For guidance, see [Requesting permission](privacy.md#requesting-permission).

**Clearly disclose how your app and its model use and store personal information.** People are more likely to be comfortable sharing data when they understand how it’s used. Empower people to make an informed decision about what data they share with your AI model. When asking for permission to use someone’s information, explain the benefits in a way that’s concise, specific, and easy to understand. Articulate whether your model uses personal information for training and improvement.

## Models and datasets

**Thoughtfully evaluate model capabilities.** There are different types of generative models, some of which possess general knowledge, while others are trained for specific tasks. It’s important to understand the capabilities of any model you consider. As early as you can, get a hands-on look at the models and data available to help orient your design. Keep in mind that some model types may be unavailable to people in certain situations due to factors like device compatibility, network access, and battery level. For example, the [Foundation Models](https://developer.apple.com/documentation/foundationmodels) framework requires a compatible device with Apple Intelligence turned on.

**Be intentional when choosing or creating a dataset.** Whether you’re training a model from scratch or customizing an existing model, the data you choose greatly impacts the model’s behavior. When you teach and evaluate your AI model, choose datasets that include a diverse range of subject matter representations. Learn where your data comes from and how it was gathered. Ensure you have relevant licenses for all data you don’t personally own, and offer appropriate choices when using people’s data. Most datasets gathered from the real world are imperfect, so allow time for testing and evaluation to proactively mitigate bias and misinformation that a model might learn and replicate.

## Inputs

**Guide people on how to use your generative feature.** Consider how to steer and educate people toward producing great results. One technique is to offer diverse, predefined example inputs that hint at what’s possible for a feature.

**Raise awareness about and minimize the chance of hallucinations.** When a generative model is unsure how to respond to a request, it may produce content that seems plausible but is made up. These hallucinations can misinform people because the model may convincingly present the information as factual, even when it’s not. Generative models sometimes get details wrong, like dates of important events or information about people, so it’s important to clearly communicate that AI-generated content may contain errors. You can minimize the chance of hallucinations and limit their impact by carefully scoping what you ask a model to generate. Avoid requesting factual information unless you’re confident the model has access to verified and up-to-date information for the task. Avoid using AI-generated content in situations where a possible hallucination could misinform and harm someone.

**Consider consequences and get permission before performing irreversible or potentially problematic tasks.** Before performing a task, consider whether a mistake or the inability to reverse the action might cause more work or stress for people. Avoid automating destructive actions, like deleting photos, and actions that are hard to undo, like making a purchase on a person’s behalf. Generally, ask for confirmation before performing a significant action on someone’s behalf. Keep in mind that certain situations may be prohibited or have extra rules. Review and adhere to model-specific usage policies, as well as government and regulatory AI policy as it applies to each locale in which the generative features will be available.

## Outputs

**Make it easy for people to refine or revert generated results, and acknowledge when their corrections take effect.** For example, surfacing controls like Edit, Undo, Retry, or Adjust near generated content preserves people’s agency while still letting them benefit from automation. When people adjust or personalize output, provide a clear signal that their action had an effect. This kind of feedback helps people build an accurate mental model of your feature and fosters trust over time.

**Help people improve requests when blocked or undesirable results occur.** Minimize scoped or blocked output by coaching people how to be more successful next time. For example, if prompted to generate harmful content, Image Playground says that it’s “Unable to use that description.” When possible, consider offering example requests that might lead to better results.

**Reduce unexpected and harmful outcomes with thoughtful design and thorough testing.** People generally use apps with good intentions, but harmful outcomes can still arise from both accidental and purposeful misuse, and when responding to potentially sensitive topics. It may not be possible to mitigate every harmful scenario, but taking a proactive approach to identify risks, devising policies to address them, and evaluating features can help minimize the chance of misuse and harm. Consider ways people might interact with your feature and test those scenarios. Challenge your policies and expected use cases. See what happens when requests are out-of-scope, unrelated to the app experience you designed, and not well-represented by the model’s training data. Try requests that are poorly phrased, vague, or ambiguous; include personal, sensitive, or controversial topics; and encourage harmful or incorrect results. Use what you learn to improve your model, inform prevention, and respond thoughtfully.

**Strive to avoid replicating copyrighted content.** Large AI models are trained using vast datasets from the internet and other sources. This means most generative models are familiar with and can unintentionally produce content similar to published work, including copyrighted content. You can reduce the likelihood of copyright infringement by building upon existing models that already protect against this, and by carefully curating inputs. For example, you might let people choose from a set of pre-approved prompts. You could also explicitly tell the model to avoid mimicking certain content or styles.

**Factor processing time into your design.** *Latency* is how much time it takes for a model to produce an output. Non-generative models, such as [body position tracking in ARKit](https://developer.apple.com/documentation/arkit/capturing-body-motion-in-3d) and the [Vision](https://developer.apple.com/documentation/vision) machine learning framework, typically have low latency and are suitable to run in real-time. Generative models typically take longer to produce a result, so design a loading experience or generate in the background while a person uses another part of the app. For guidance, see [Loading](loading.md).

**Consider giving specific, reassuring feedback during generation.** Messages that describe what’s actually happening can be more helpful than a vague status message. For example, instead of “Processing…”, say “Finding substitutions for ingredients” or “Summarizing key themes from your notes.” Specific feedback reduces uncertainty and makes waiting feel purposeful. If something goes wrong, describe what happened in plain language and offer a clear next step.

**Consider offering alternate versions of results.** Depending on the design of your feature, it might work best to present a single result or multiple meaningfully different results from which people can choose. Offering people a choice can give them a greater sense of control and help bridge the gap between the model’s interpretation and what someone actually wants. For example, Image Playground can generate multiple images that represent a person, allowing someone to pick the one they prefer. For guidance, see [Multiple options](machine-learning.md#multiple-options).

## Continuous improvement

**Consider ways to improve your model over time.** You may want to update your model to adapt to people’s behavior, respond to feedback, include new data, and leverage enhanced capabilities. You can make some improvements, such as updating a list of blocked words, frequently and independent of the app development cycle, and you can plan significant improvements and new features around regular app updates. Plan for fine-tuning, retesting, and prompt engineering when updating to a newer, more capable base model. If you train your own model, retrain with additional data and fine-tune to improve performance. Thoroughly test and refine all model updates to identify and correct unexpected behavior.

**Let people share feedback on outputs.** Feedback can help you identify and respond to unexpected outcomes and new potential issues that arise despite thorough testing. Feedback also gives people a way to celebrate what they like best about your AI experience and report concerns when outputs don’t match their expectations. Establish trust by taking feedback seriously and resolving issues quickly. Always make providing feedback voluntary. Respect people’s time by placing a feedback affordance in a clear location that doesn’t interrupt the experience. Consider offering a quick and easy way to give positive and negative feedback, like simple thumbs-up and thumbs-down buttons. You might also offer a way to share detailed feedback for complicated issues. For guidance, see [Explicit feedback](machine-learning.md#explicit-feedback) and [Implicit feedback](machine-learning.md#implicit-feedback).

**Design flexible, adaptable features.** Generative AI is a rapidly advancing technology, and models and their resource needs are constantly evolving. Consider ways your app or game can adapt as capabilities and models improve. For example, you may want to separate your model from your user experience so you can swap out the model for other models over time. Lay a foundation that allows for future adjustments like this, while still offering the same great user experience.

## Platform considerations

*No additional considerations for iOS, iPadOS, macOS, tvOS, visionOS, or watchOS.*

## Change log

| Date | Changes |
| --- | --- |
| June 8, 2026 | Added guidance for letting people refine results and providing feedback during content generation, and updated guidance for choosing a model type. |
| June 9, 2025 | New page. |

## Related guidelines

- [Machine learning](machine-learning.md)
- [Inclusion](inclusion.md)
- [Accessibility](accessibility.md)
- [Privacy](privacy.md)
- [Loading](loading.md)
