# Design heritage

> Hand-written companion to `SKILL.md`, summarized in our own words from Apple's archived Human
> Interface Guidelines, 1980 to 2014 (the Lisa standards through the iOS 7 and OS X Yosemite
> editions). Load it to explain *why* a current guideline exists, to settle a conflict between
> two current guidelines, or for a retro or heritage-inspired design. The current pages in
> `references/hig/` always win.

Apple's design principles have been rewritten many times, but the same dozen ideas run through
every edition. When a design feels wrong and no single current guideline names the problem, the
cause is usually one of these.

## How to cite it

- Cite the current page first. Use this guide for the reasoning behind it, cited as
  `heritage.md › <Heading>`, and name the edition it comes from, for example "a rule since the
  1992 Macintosh HIG".
- Never present a historical rule as current guidance. If it contradicts a page in
  `references/hig/`, the page wins; see [Superseded advice](#superseded-advice).
- Nothing here is quoted at length. For Apple's exact wording, the archived editions are
  collected in the community archive `apple-human-interface-guidelines` on GitHub (PDF and EPUB);
  the edition names below match its file names.

## The editions

| Era | Edition | What it added to the canon |
| --- | --- | --- |
| 1980 to 1986 | Lisa UI Standards and Guidelines; Apple II and IIe guidelines; HIG drafts | Menus, windows, and dialogs as a shared vocabulary across applications |
| 1987 | Apple Human Interface Guidelines: The Apple Desktop Interface | The first published philosophy: metaphors from the real world, consistency, WYSIWYG, forgiveness, simplicity, clarity, modelessness |
| 1992, 1995 | Macintosh Human Interface Guidelines | The canonical eleven principles (see below), plus knowledge of your audience and accessibility |
| 1993 | NeXTSTEP User Interface Guidelines, Release 3 | Four principles: consistency, user control of the workspace, naturalness, mouse-first input; when an app may act for the user |
| 1996 | Newton 2.0 User Interface Guidelines | The first handheld edition: keep applications simple, use the built-in apps' patterns, enter data once |
| 1996, 1997 | Mac OS 8 Human Interface Guidelines | The Platinum appearance and the Appearance Manager |
| 2000 to 2002 | Adopting the Aqua Interface; Aqua Human Interface Guidelines | The eleven principles carried into Mac OS X; Aqua controls, sheets, the Dock |
| 2004 to 2009 | Apple Human Interface Guidelines | Characteristics of great software (performance, ease of use, appearance, reliability, adaptability, interoperability, mobility); mental models; explicit and implied actions; the 80 percent solution |
| 2008 to 2011 | iPhone, iPad, and iOS Human Interface Guidelines; iPhone guidelines for web applications | The first touch rules: focus on the primary task, start instantly, always be prepared to stop, minimize input |
| 2012 to 2014 | OS X Human Interface Guidelines; iOS Human Interface Guidelines (iOS 7) | Deference, clarity, and depth; the principles restated for touch and for Yosemite |

## The classic principles

Each principle below lists the editions that stated it, what it asks of a design, the 2026
principle it lives on in (`design-principles.md`), and the question to ask in a review.

### Metaphors and mental models

**Since 1987; mental models from 2004.** Borrow what people already know about the world or
other software so the interface explains itself. A metaphor *suggests* a use without
*limiting* it: a folder on screen holds more than a paper one, and the Trash is not as small as a
wastebasket. The 2009 and 2014 editions add the mental model: learn how people already think
about the task, build on it, and extend it, without treating it as a blueprint.

- **Lives on in:** Familiarity › Use concepts that people know.
- **Ask:** What does a person expect this object to do from what it looks like or is called, and
  does it do that? Does the metaphor impose a real-world limit the software doesn't need?

### Direct manipulation

**Since 1992.** The object stays visible while people act on it, and the result of the action
shows immediately. On touch (2014 iOS) this becomes gestures on the content itself rather than
separate controls beside it.

- **Lives on in:** Agency › Stay out of the way; `gestures.md`, `drag-and-drop.md`.
- **Ask:** Can people act on the thing itself, or only through a form about the thing? Does the
  result appear on the object, at once?

### See-and-point; explicit and implied actions

**1992 to 2002 as see-and-point; 2004 to 2014 as explicit and implied actions.** People choose
from what they can see instead of recalling commands. Two paradigms: select an object and pick
an action from a visible list (explicit), or drag an object onto something that implies the
action (implied). Implied actions only work when people recognize both objects and can predict
the result before letting go.

- **Lives on in:** Familiarity; `menus.md`, `context-menus.md`, `the-menu-bar.md`.
- **Ask:** Does every gesture or drag have an explicit, visible equivalent? Is the outcome of an
  implied action previewed before it is committed?

### Consistency

**In every edition.** Consistency lets people carry skills from one app, or one screen, to the
next. The 1992 and 2014 editions ask the same four questions, which still make the best
consistency checklist:

1. Is it consistent with the platform's standards?
2. Is it consistent within itself: terms, icons, placement, behavior?
3. Is it consistent with its own earlier versions?
4. Is it consistent with people's expectations, the hardest of the four?

The 2014 OS X edition adds the counterweight: consistency doesn't mean copying other apps, only
not forcing people to relearn something for no reason except being different.

- **Lives on in:** Familiarity › Keep visuals and interactions consistent; `branding.md`.
- **Ask:** All four questions. A failure on question 2 is usually a finding; on question 4 it is
  usually the biggest one.

### WYSIWYG and discoverability

**1987 to 2009 as WYSIWYG; 2009 and 2014 as discoverability.** Don't hide features behind
abstract commands. People should find every feature; when something must be hidden at first,
leave a visible cue to where it is (progressive disclosure, a "stepped" interface in 1992). What
is on screen should match what people get, whether printed, exported, or shared. Anything
clickable has to look clickable.

- **Lives on in:** Simplicity › Establish hierarchy; Familiarity › Provide clear feedback.
- **Ask:** Is any feature reachable only through a gesture, a long press, or a hover that nothing
  on screen hints at? Does the preview match the output?

### User control

**In every edition.** People, not the software, start and steer actions. The software may
suggest and warn but shouldn't take the decision away. NeXTSTEP (1993) adds the rule for
acting on someone's behalf: only to save them a step, only with the same result they would have
produced, and when in doubt, don't. The 2014 editions add that people expect to cancel before an
operation starts, confirm a destructive one, and stop one that is running.

- **Lives on in:** Agency › Let people do things their own way; Responsibility.
- **Ask:** Does anything happen that the person didn't start: autoplay, auto-advance, automatic
  posting, an AI action? Can every long operation be stopped?

### Feedback and dialog

**In every edition; "feedback and communication" from 2004.** Acknowledge every action at once,
say how long waits will take, say why something can't be done and what to do instead, and write
messages people understand. The 1992 edition's example of a useless error, a crash ID with no
cause, remains the best test for error copy. The 2014 OS X edition frames feedback as a
continuous conversation, and uses animation to show where things go (a window minimizing into
the Dock).

- **Lives on in:** Familiarity › Provide clear feedback; `feedback.md`, `loading.md`,
  `writing.md`.
- **Ask:** After each tap or click, what changes within a tenth of a second? Does every error
  name the cause and the fix?

### Forgiveness

**In every edition.** Most actions can be undone, so people explore without fear. Warn before
the few that can't be. The 1992 edition adds a diagnostic that still holds: frequent alerts are a
sign the design is wrong, because clear options and timely feedback make errors rare. The 2014
OS X edition adds deferring the commit: let people edit freely and write the change only when
they choose.

- **Lives on in:** Agency › Help people recover from mistakes; `undo-and-redo.md`, `alerts.md`.
- **Ask:** Count the confirmation dialogs. Each one that guards an undoable action is a finding;
  undo is the better answer.

### Perceived stability

**1992 to 2009.** People need fixed reference points: a finite set of objects and actions, and
elements that stay where they were put. Commands that are unavailable are dimmed, not removed,
so the layout doesn't shift and people learn what exists. Arrangements people make persist until
they change them.

- **Lives on in:** Flexibility › Preserve a person's context; `menus.md`, `layout.md`.
- **Ask:** Do menus, toolbars, or tabs change shape depending on state? Does the app remember
  window positions, scroll positions, and sort orders?

### Aesthetic integrity

**Since 1992.** The 1992 edition meant well-organized, uncluttered graphics, no arbitrary
symbols, and standard elements that keep their meaning (a checkbox is never a radio button). The
2014 editions redefine it: not beauty or a particular style, but whether appearance and behavior
send one coherent message about the app's purpose. A serious tool stays quiet; a game is allowed
to be spectacular.

- **Lives on in:** Craft; Delight › Don't mistake delight for decoration.
- **Ask:** Does the visual tone match the job? Is any standard control restyled until its meaning
  changes?

### Modelessness

**1987 to 2009.** Avoid modes that lock people into one operation. The 1992 edition lists the
acceptable ones, and the list is still a good test:

- Long-term modes, such as an app being in editing versus viewing.
- Spring-loaded modes that last only while a key or button is held.
- Alerts that must be resolved, kept to a minimum.
- Modes that mirror a real-world modal situation, such as picking a drawing tool.
- Modes that change attributes, not behavior, such as bold while typing.

Any mode needs a clear indicator near the affected object and an easy way out. NeXTSTEP (1993)
puts it as: freely chosen, easy to leave, visually apparent, user in control.

- **Lives on in:** Agency › Give people the freedom to explore; `modality.md`.
- **Ask:** Which states change what the same tap or key does? Is each visibly marked, and is the
  exit one step away?

### Knowledge of your audience, accessibility, and reliability

**Since 1992; reliability from 2004.** Design for observed people, not imagined ones: write
scenarios, watch real work, test with people who match the audience. Plan for people who differ
from the "average" user in age, ability, language, and culture from the start, not at the end.
And earn trust by protecting data: predictable behavior, no silent data loss on import or
export, graceful handling of failures such as a dropped network.

- **Lives on in:** Purpose, Flexibility › Design for everyone, Responsibility › Keep people's
  information safe, Craft › Experiment and iterate.
- **Ask:** Who was this tested with? What happens to unsaved work when the network drops or the
  app is killed?

### Deference, clarity, and depth

**2013 and 2014 (iOS 7).** The interface helps people understand and use the content but never
competes with it; text is legible at every size and ornament is subtle; layers and realistic
motion explain the hierarchy. The redesign method that came with it is still useful: strip the
interface to its core function, then restore details and embellishments with care, never
gratuitously.

- **Lives on in:** Simplicity, Craft; `materials.md`, `liquid-glass.md` (the same idea,
  rebuilt as a functional glass layer over content).
- **Ask:** Remove every embellishment in your head. Which ones earn their way back?

## Rules of thumb the editions repeat

Each of these appears in more than one edition, and each still produces real findings:

- **Frequent alerts mean a design problem** (1992, 1995). Fix the flow, not the copy.
- **Dim, don't hide** unavailable commands (1992 to 2009). Hidden commands make people doubt
  the feature exists.
- **If in doubt, don't act for the user** (1993). Automation must match what the person would
  have done.
- **Design for the 80 percent** (2009 Mac, 2011 iOS). Ship the defaults most people want, and
  leave out features only a handful need or most need only once; avoid the feature cascade.
- **Start instantly and restore state** (2008 to 2014 iOS). No splash, no About screen, no
  setup questions the system can answer, and the last place people were when they come back.
- **Always be prepared to stop** (2008 to 2014 iOS). Save early and often; never quit the app
  programmatically, which looks like a crash.
- **Balance input against payoff** (2011 iOS). Every field people fill in should visibly buy
  them something; prefer choosing to typing and reading from the system to asking.
- **Give people a logical path** (2011 iOS). Show where they are and how to get back.
- **A metaphor suggests, it doesn't limit** (1992 to 2014). Keep the familiarity, drop the
  physical constraint.
- **Keyboard alternatives are optional, visible controls are not** (1993). Every shortcut needs
  an on-screen equivalent; the reverse doesn't hold.

## Superseded advice

Don't cite these as current; each was replaced for a reason. If a design follows one, it may
look dated, and the current page explains what replaced it.

| Then | Now | Current page |
| --- | --- | --- |
| Realistic textures, bevels, and gradients to make controls look physical (Aqua 2001 to iOS 6) | Content first; controls recede, depth comes from layers and motion | `materials.md`, `liquid-glass.md` |
| Put the most important information and controls at the top (2011 iOS) | Important controls mid-screen or lower for reach; bars may move with the device | `layout.md`, `designing-for-iphone-duo.md` |
| The mouse is the primary input; the keyboard is for text (1993) | Every input counts: touch, pointer, keyboard, voice, Pencil | `design-principles.md` › Flexibility, `keyboards.md` |
| An alert box is the standard warning (1992) | Feedback lives in the interface; alerts are rare and undo replaces most confirmations | `alerts.md`, `feedback.md` |
| Hide the file system on iOS (2011 iOS) | A Files app and document browsers exist; follow file management guidance | `file-management.md` |
| A launch image that mimics the first screen, fixed screen sizes, fixed orientations | Launch screens, size classes, and layouts keyed to available space | `launching.md`, `layout.md` |
| One look per era (Platinum, Aqua, brushed metal, iOS 7 flat) | Light and dark appearances, increased contrast, system materials | `dark-mode.md`, `color.md` |

## Retro and heritage-inspired designs

When someone asks for a retro Mac or classic iOS look, treat the era as the brand layer and keep
the current platform underneath it.

1. **Name the era and its defining traits.** The 1-bit black-and-white desktop of the 1980s
   (1987 edition); Mac OS 8's grayscale Platinum appearance (1997); NeXTSTEP's gray beveled
   panels (1993); Aqua's glossy controls (2000 to 2002); the brushed-metal windows the 2004 to
   2009 Mac editions reserved for certain apps; the textured realism of early iOS (2008 to 2012).
2. **Borrow identity, not behavior.** Era colors, type, iconography, and one signature element
   can carry the look (`branding.md`). Navigation, controls, and gestures stay current, with
   familiar sizing, placement, and behavior.
3. **Keep the modern floor.** Dynamic Type or text scaling, 4.5:1 contrast, 44 pt touch targets
   on mobile, dark mode, reduced motion, and screen reader labels all still apply. A 1-bit
   palette passes contrast; tiny bitmap type at fixed size does not pass text scaling.
4. **Check the edition you imitate.** The archived edition for that era shows what its own
   designers considered correct: a faithful retro design follows that edition's rules for spacing
   and hierarchy, not a caricature of its surface.
