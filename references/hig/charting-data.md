# Charting Data

> Source: [https://developer.apple.com/design/human-interface-guidelines/charting-data](https://developer.apple.com/design/human-interface-guidelines/charting-data)

---

Presenting data in a chart can help you communicate information with clarity and appeal.

Charts provide efficient ways to communicate complex information without requiring people to read and interpret a lot of text. The graphical nature of charts also gives you additional opportunities to express the personality of your experience and add visual interest to your interface.

A chart can range from a simple graphic that provides glanceable information to a rich, interactive experience that can form the centerpiece of your app and encourage people to explore the data from various perspectives. Whether simple or complex, you can use charts to help people perform data-driven tasks that are important to them, such as:

Analyzing trends based on historical or predicted values
Visualizing the current state of a process, system, or quantity that changes over time
Evaluating different items — or the same item at different times — by comparing data across multiple categories

Not every collection of data needs to be displayed in a chart. If you simply need to provide data — and you don't need to convey information about it or help people analyze it — consider offering the data in other ways, such as in a list or table that people can scroll, search, and sort.

## Best practices

Use a chart when you want to highlight important information about a dataset. Charts are visually prominent, so they tend to draw people's attention. Take advantage of this prominence by clearly communicating what people can learn from the data they care about.

Keep a chart simple, letting people choose when they want additional details. Resist the temptation to pack as much data as possible into a chart. Too much data can make a chart visually overwhelming and difficult to use, obscuring the relationships and other information you want to convey. If you have a lot of data to present — or a lot of functionality to provide — consider giving people a way to reveal it gradually. For example, you might let people choose to view different levels of detail or subsets of data to match their interest.

Make every chart in your app accessible. A chart communicates visually through graphical representations of data and visual descriptions. In addition to the visual descriptions you display, it's crucial to provide both accessibility labels that describe chart values and components, and accessibility elements that help people interact with the chart.

## Designing effective charts

In general, prefer using common chart types. People tend to be familiar with common chart types — such as bar charts and line charts — so using one of these types in your app can make it more likely that people will already know how to read your chart.

If you need to create a chart that presents data in a novel way, help people learn how to interpret the chart. For example, when pairing devices, an activity tracker introduces the activity rings by animating them individually, showing people how each ring maps to different metrics.

Examine the data from multiple levels or perspectives to find details you can display to enhance the chart. For example, viewing the data from a macro level can help you determine high-level summaries that people might be interested in, like totals or averages. From a mid-level perspective, you might find ways to help people identify useful subsets of the data, whereas examining individual data points might help you find ways to draw people's attention to specific values or items. Displaying information that helps people view the chart from various perspectives can encourage them to engage with it.

Aid comprehension by adding descriptive text to the chart. Descriptive text titles, subtitles, and annotations help emphasize the most important information in a chart and can highlight actionable takeaways. You can also display brief descriptive text that serves as a headline or summary for a chart, helping people grasp essential information at a glance. Although a descriptive headline or summary can make a chart more accessible, it doesn't take the place of accessibility labels.

Match the size of a chart to its functionality, topic, and level of detail. In general, a chart needs to be large enough to comfortably display the details you need to include and expansive enough for the interactivity you want to support. For example, you always want to make it easy for people to read a chart's details and descriptive text — like labels and annotations — but you might also want to give people enough room to change the scope of a chart or investigate the data from different perspectives. On the other hand, you might want to use a small chart to offer glanceable information about an individual item or to provide a snapshot or preview of a larger version of the chart that people can reveal in a different view.

Prefer consistency across multiple charts, deviating only when you need to highlight differences. If multiple charts in your app serve a similar purpose, you generally don't want to imply that the charts are unrelated by using a different type or style for each one. Using a consistent visual approach for the charts in your app lets people use what they learn about one chart to help them understand another. Consider using different chart types and styles when you need to highlight meaningful differences between charts.

Maintain continuity among multiple charts that use the same data. When you use multiple charts to help people explore one dataset from different perspectives, it's important to use one chart type and consistent colors, annotations, layouts, and descriptive text to signal that the dataset remains the same.

## Platform considerations

No additional considerations for mobile and desktop platforms.

## Related

Charts
Developer documentation
