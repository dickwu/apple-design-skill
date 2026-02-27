# Searching

> Source: [https://developer.apple.com/design/human-interface-guidelines/searching](https://developer.apple.com/design/human-interface-guidelines/searching)

---

## Overview

People use various search techniques to find content on their device, within an app, and within a document or file.

To search for content within an app, people generally expect to use a search field. When it makes sense, you can personalize the search experience by using what you know about how people interact with your app. For example, you might display recent searches, search suggestions, completions, or corrections based on terms people searched earlier in your app.

In some cases, people appreciate the ability to scope a search or filter the results. For example, people might want to search for items by specifying attributes like creation date, file size, or file type. You can also help people find content within an open document or file by implementing ways to find content in a window or page in your mobile platforms, or desktop app.

## Best practices

If search is important, consider making it a primary action. For example, in photo, messaging, and contact management apps on mobile, search occupies a distinct tab in the tab bar. In note-taking apps, a search field is in the toolbar, making search clearly visible and easily accessible.

Aim to make your app's content searchable through a single location. People appreciate having one clearly identified location they can use to find anything in your app that they are looking for. For apps with clearly distinct sections, it may still be useful to offer a local search. For example, search acts as a filter on the current view when searching contacts.

Use placeholder text to indicate what content is searchable. For example, search fields might include placeholder text like "Shows, Movies, and More."

Clearly display the current scope of a search. Use a descriptive placeholder text, a scope control, or a title to help reinforce what someone is currently searching. For example, in email applications there is always a clear reference to the mailbox someone is searching.

Provide suggestions to make searching easier. When you display a person's recent searches or offer search suggestions both before and while they're typing, you can help people search faster and type less.

Take privacy into consideration before displaying search history. People might not appreciate having their search history appear where others might see it. Depending on the context, consider providing other ways to narrow the search instead. If you do show search history, provide a way for people to clear it if they want.

## Systemwide search

Make your app's content searchable in platform search. You can share content with platform search by making it indexable and specifying descriptive attributes known as metadata. Platform search extracts, stores, and organizes this information to allow for fast, comprehensive searches.

Define metadata for custom file types you handle. Supply a file importer plug-in that describes the types of metadata your file format contains.

Use platform search to offer advanced file-search capabilities within the context of your app. For example, you might include a button that instantly initiates a search based on the current selection. You might then display a custom view that presents the search results or a filtered subset of them.

Prefer using the system-provided open and save views. The system-provided open and save views generally include a built-in search field that people can use to search and filter the entire system. For related guidance, see File management.

Implement a preview generator if your app produces custom file types. A preview generator helps platform search and other apps show previews of your documents.

## Platform considerations

No additional considerations for mobile and desktop platforms.
