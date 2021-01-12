(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"432Q":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return m}));var a=n("wx14"),i=n("zLVn"),o=(n("q1tI"),n("7ljp")),l=n("ndZU"),r=(n("qKvR"),{}),s={_frontmatter:r},d=l.a;function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.mdx)(d,Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"50-user-interface"},"5.0 User Interface"),Object(o.mdx)("p",null,"Not all plugins will require any user interface, but many will need to at least render error messages and such. Be sure to review the guidelines in this section to ensure that you’re providing a good user experience in your user interfaces."),Object(o.mdx)("h2",{id:"51-insertion-points"},"5.1 Insertion Points"),Object(o.mdx)("p",null,"Use the correct insertion point for your user interface. Right now, this means that your plugin’s UI must be rendered within a Modal Dialog."),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"(5.1.1) Render error messages using modal dialogs."),Object(o.mdx)("li",{parentName:"ul"},"(5.1.2) Render configuration options using modal dialogs."),Object(o.mdx)("li",{parentName:"ul"},"(5.1.3) Avoid displaying “success” messages at all, unless your plugin’s success is not visible to the user."),Object(o.mdx)("li",{parentName:"ul"},"(5.1.4) Render validation messages inline — don’t display another dialog.")),Object(o.mdx)("h2",{id:"52-modal-dialog-etiquette"},"5.2 Modal Dialog Etiquette"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"(5.2.1) ",Object(o.mdx)("strong",{parentName:"li"},Object(o.mdx)("em",{parentName:"strong"},"Always"))," provide at least one button that can close the dialog without performing an action. Your user can always press ",Object(o.mdx)("strong",{parentName:"li"},"ESC"),", but not all users are familiar with keyboard shortcuts."),Object(o.mdx)("li",{parentName:"ul"},"(5.2.2) Buttons that close the dialog (whether the intent is to cancel or start an operation, called ",Object(o.mdx)("strong",{parentName:"li"},"dismissive buttons"),") should always be visible in the dialog without scrolling."),Object(o.mdx)("li",{parentName:"ul"},"(5.2.3) Dismissive buttons should be in the lower right corner of the dialog."),Object(o.mdx)("li",{parentName:"ul"},"(5.2.4) Dismissive buttons should respect platform-specific button order. For “Cancel/Submit”-style button arrangements, this is handled automatically. (TODO)",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},"On Windows, the order of buttons is “Submit”, then “Cancel”"),Object(o.mdx)("li",{parentName:"ul"},"On macOS, the order of buttons is “Cancel”, then “Submit”"))),Object(o.mdx)("li",{parentName:"ul"},"(5.2.5) Don’t show more than one dialog at once. The only exception to this rule is if your dialog needs to trigger a file or folder picker."),Object(o.mdx)("li",{parentName:"ul"},"(5.2.6) Don’t show multiple dialogs in sequence for wizard-like flows. Use one dialog and dynamically update the content."),Object(o.mdx)("li",{parentName:"ul"},"(5.2.7) ",Object(o.mdx)("strong",{parentName:"li"},"ENTER")," will submit your dialog — ensure that the response to this is ",Object(o.mdx)("strong",{parentName:"li"},Object(o.mdx)("em",{parentName:"strong"},"never"))," ",Object(o.mdx)("em",{parentName:"li"},"destructive"),"."),Object(o.mdx)("li",{parentName:"ul"},"(5.2.8) Reuse dialogs instead of recreating them.",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},"There are some exceptions here, such as error/success messages."))),Object(o.mdx)("li",{parentName:"ul"},"(5.2.9) Validate user input before dismissal. Don’t display a second dialog indicating validation failures.")),Object(o.mdx)("h2",{id:"53-alerts"},"5.3 Alerts"),Object(o.mdx)("p",null,"Alerts are currently handled using modal dialogs, and as such, are extremely invasive to the user’s workflow. Use them sparingly and only when necessary."),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"(5.3.1) Error conditions from which the plugin can’t recover should always be presented to the user in human-readable language. ",Object(o.mdx)("em",{parentName:"li"},"Plugins should")," ",Object(o.mdx)("strong",{parentName:"li"},Object(o.mdx)("em",{parentName:"strong"},"never"))," ",Object(o.mdx)("em",{parentName:"li"},"fail silently!")),Object(o.mdx)("li",{parentName:"ul"},"(5.3.2) Success conditions ",Object(o.mdx)("em",{parentName:"li"},"should not be displayed")," unless there is no other obvious indication of success."),Object(o.mdx)("li",{parentName:"ul"},"(5.3.3) Alerts should ",Object(o.mdx)("strong",{parentName:"li"},Object(o.mdx)("em",{parentName:"strong"},"never"))," trigger destructive actions if ",Object(o.mdx)("strong",{parentName:"li"},"ENTER")," or ",Object(o.mdx)("strong",{parentName:"li"},"ESC")," is pressed, since the user may have reacted out of instinct instead of fully processing the intent of the alert."),Object(o.mdx)("li",{parentName:"ul"},"(5.3.4) Keep alerts short and sweet, but don’t delve into “programmer-speak”."),Object(o.mdx)("li",{parentName:"ul"},"(5.3.5) Provide options and steps the user can take in the event of an error condition.")),Object(o.mdx)("h2",{id:"54-pill-buttons"},"5.4 Pill Buttons"),Object(o.mdx)("p",null,"Pill buttons are interactive, clickable buttons within your plugin’s user interface. These can have a variety of styles, including:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"cta")," — call to action (there should only ever be one present; see 5.4.1)"),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"primary")," — primary (default)"),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"secondary")," — secondary buttons"),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"warning")," — used to indicate destructive actions")),Object(o.mdx)("p",null,"Buttons can also have a border (default) or be quiet (less visually intrusive)."),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"(5.4.1) There should ",Object(o.mdx)("strong",{parentName:"li"},Object(o.mdx)("em",{parentName:"strong"},"never"))," be more than one ",Object(o.mdx)("inlineCode",{parentName:"li"},"cta")," button in a dialog at once time."),Object(o.mdx)("li",{parentName:"ul"},"(5.4.2) The ",Object(o.mdx)("inlineCode",{parentName:"li"},"cta")," button should ",Object(o.mdx)("em",{parentName:"li"},"usually")," be the default action (if ",Object(o.mdx)("strong",{parentName:"li"},"ENTER")," is pressed)."),Object(o.mdx)("li",{parentName:"ul"},"(5.4.3) A ",Object(o.mdx)("inlineCode",{parentName:"li"},"warning")," button must ",Object(o.mdx)("strong",{parentName:"li"},Object(o.mdx)("em",{parentName:"strong"},"never"))," *",Object(o.mdx)("strong",{parentName:"li"},"*be triggered if "),"ENTER** is pressed."),Object(o.mdx)("li",{parentName:"ul"},"(5.4.4) Use quiet buttons sparingly. The lack of border makes it more difficult for the user to recognize the button as a button."),Object(o.mdx)("li",{parentName:"ul"},"(5.4.5) Don’t overuse buttons. The number of buttons on your dialog should be kept to a minimum."),Object(o.mdx)("li",{parentName:"ul"},"(5.4.6) Use meaningful button labels. Avoid labels like “Yes”, “No”, “OK”, especially when it isn’t obvious to what those labels refer to. Instead use labels like “Don’t save”, “Export selection”, etc."),Object(o.mdx)("li",{parentName:"ul"},"(5.4.7) Buttons in the footer should respect the platform’s button order. “Cancel/Submit” button order is handled automatically. (See 5.2.4)")),Object(o.mdx)("h2",{id:"55-action-buttons"},"5.5 Action Buttons"),Object(o.mdx)("p",null,"Action buttons are icon or text buttons that are used to trigger actions within the plugin’s UI. They are ",Object(o.mdx)("strong",{parentName:"p"},Object(o.mdx)("em",{parentName:"strong"},"never"))," used to dismiss a dialog. Use cases include a button that triggers a search for stock photos, a button that adds an item to a list, adding or removing tags, and more."),Object(o.mdx)("p",null,"Action buttons come in two flavors: standard (default, with a border) and quiet (no border)."),Object(o.mdx)("p",null,"Action buttons can also be used to indicate a selected view or option — for example, two action buttons could be used to indicate if the user is viewing data in grid mode or list mode."),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"(5.5.1) ",Object(o.mdx)("strong",{parentName:"li"},Object(o.mdx)("em",{parentName:"strong"},"Never"))," use action buttons to dismiss a dialog. Use pill buttons instead."),Object(o.mdx)("li",{parentName:"ul"},"(5.5.2) Action button images should be 14x14 points. Any other size may not be aligned correctly.")),Object(o.mdx)("h2",{id:"56-text-fields"},"5.6 Text Fields"),Object(o.mdx)("p",null,"Text fields are a great way to get user input and change the behavior of your plugin based on user feedback. There are two types of text fields: ",Object(o.mdx)("em",{parentName:"p"},"single-line")," and ",Object(o.mdx)("em",{parentName:"p"},"multi-line.")),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"(5.6.1) Don’t use single-line text fields for paragraph-type data entry."),Object(o.mdx)("li",{parentName:"ul"},"(5.6.2) Don’t use multi-line text fields for short text entry."),Object(o.mdx)("li",{parentName:"ul"},"(5.6.3) Text fields should be large enough to view the typical amount of data without scrolling."),Object(o.mdx)("li",{parentName:"ul"},"(5.6.4) ",Object(o.mdx)("strong",{parentName:"li"},Object(o.mdx)("em",{parentName:"strong"},"Never"))," listen for ",Object(o.mdx)("strong",{parentName:"li"},"ENTER")," and use it to advance the user’s focus. Allow the user to ",Object(o.mdx)("strong",{parentName:"li"},"TAB")," instead."),Object(o.mdx)("li",{parentName:"ul"},"(5.6.5) Text field labels should be to the left or top of the text field itself.")),Object(o.mdx)("h2",{id:"57-checkboxes"},"5.7 Checkboxes"),Object(o.mdx)("p",null,"Checkboxes are a great way to provide on/off options to the user."),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"(5.7.1) ",Object(o.mdx)("strong",{parentName:"li"},Object(o.mdx)("em",{parentName:"strong"},"Never"))," use checkboxes to trigger actions or dismiss dialogs."),Object(o.mdx)("li",{parentName:"ul"},"(5.7.2) Checkbox labels should be rendered to the right of the checkbox itself."),Object(o.mdx)("li",{parentName:"ul"},"(5.7.3) Checkbox groups should be clearly indicated with layout"),Object(o.mdx)("li",{parentName:"ul"},"(5.7.4) Checkboxes must ",Object(o.mdx)("strong",{parentName:"li"},Object(o.mdx)("em",{parentName:"strong"},"always"))," be changeable using their associated label")),Object(o.mdx)("h2",{id:"58-dropdowns"},"5.8 Dropdowns"),Object(o.mdx)("p",null,"Dropdowns provide a way for the user to select one item form a list of many using a compact form."),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"(5.8.1) ",Object(o.mdx)("strong",{parentName:"li"},Object(o.mdx)("em",{parentName:"strong"},"Never"))," use dropdowns to trigger additional actions or dismiss dialogs."),Object(o.mdx)("li",{parentName:"ul"},"(5.8.2) Keep lists short; don't use dropdowns when other controls (like sliders or text fields) would be more appropriate.")),Object(o.mdx)("h2",{id:"59-sliders"},"5.9 Sliders"),Object(o.mdx)("p",null,"Sliders provide a way for the user to specify a numeric value by indicating the value on a ranged control."),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"(5.9.1) Use sliders where appropriate. If there are only a few options, you might consider using a dropdown instead. If the range is very wide, it might be easier for the user if the control was a text field instead."),Object(o.mdx)("li",{parentName:"ul"},"(5.9.2) Don't use sliders to indicate progress."),Object(o.mdx)("li",{parentName:"ul"},"(5.9.3) When using sliders, you should provide some other mechanism for input."),Object(o.mdx)("li",{parentName:"ul"},"(5.9.4) ",Object(o.mdx)("strong",{parentName:"li"},Object(o.mdx)("em",{parentName:"strong"},"Always"))," display the slider value in some way, so that the user doesn't have to guess at the value of the slider.")),Object(o.mdx)("h2",{id:"510-images"},"5.10 Images"),Object(o.mdx)("p",null,"Images should be as crisp as possible for the user’s display. The runtime environment will typically try to select the best option if there are “@1x”, “@2x”, “@3x” options available locally, however this does not necessarily apply to remote images."),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"(5.10.1) Ensure icons are provided in 1x and 2x resolutions (at least)"),Object(o.mdx)("li",{parentName:"ul"},"(5.10.2) Icons for use in action buttons should be 14x14 points."),Object(o.mdx)("li",{parentName:"ul"},"(5.10.3) Avoid rescaling large images (this can cause poor performance)"),Object(o.mdx)("li",{parentName:"ul"},"(5.10.4) Avoid using images in lieu of other more suitable elements")),Object(o.mdx)("h2",{id:"511-links"},"5.11 Links"),Object(o.mdx)("p",null,"Links can be used to launch web pages in the user's system browser."),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"(5.11.1) Don't link to malicious content."),Object(o.mdx)("li",{parentName:"ul"},"(5.11.2) Prefer secure websites.")),Object(o.mdx)("h2",{id:"512-layout"},"5.12 Layout"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"(5.12.1) Don’t rely on the size of the default elements when creating your layout. Instead, your layout should be responsive."),Object(o.mdx)("li",{parentName:"ul"},"(5.12.2) Don’t assume that a modal dialog will be as wide or high as you expect. Design your layout responsively."),Object(o.mdx)("li",{parentName:"ul"},"(5.12.3) If your layout is complex and takes more than a few milliseconds to build, consider deferring some of the layout until after you show your UI."),Object(o.mdx)("li",{parentName:"ul"},"(5.12.4) Respect the layout conventions of the platform. On Windows, layout is on a 16px grid. On macOS, it is on a 12px grid. However, you should refrain from hard-coding these units, as the grid sizes may change in the future.")),Object(o.mdx)("h2",{id:"513-menus"},"5.13 Menus"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"(5.13.1) Menu items should be short and succinct. If menu items are too long, they will be truncated."),Object(o.mdx)("li",{parentName:"ul"},"(5.13.2) Menu items should use “…” whenever the operation will require additional information from the user.",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},"Good: “Insert stock photo…” (if a dialog of stock photos will appear, requiring further interaction)"),Object(o.mdx)("li",{parentName:"ul"},"Good: “Mirror selection” (no further options required)"),Object(o.mdx)("li",{parentName:"ul"},"Bad: “Mirror selection…” (if no further options required)"))),Object(o.mdx)("li",{parentName:"ul"},"(5.13.3) Menu items should clearly identify the action."),Object(o.mdx)("li",{parentName:"ul"},"(5.13.4) When plugins provide multiple actions, consider using submenus."),Object(o.mdx)("li",{parentName:"ul"},"(5.13.5) Menu items that trigger an action should generally be action-oriented. For example:",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},'Good: "Insert stock photo..."'),Object(o.mdx)("li",{parentName:"ul"},'Good: "Export selected artboards..."'))),Object(o.mdx)("li",{parentName:"ul"},"(5.13.6) When using submenus, the parent menu should be easily identified with the plugin itself. Unless there is a compelling reason otherwise, your parent menu and plugin name in the Plugin Manager should match."),Object(o.mdx)("li",{parentName:"ul"},"(5.13.7) When using submenus, never use ellipses in the parent menu title.")),Object(o.mdx)("h2",{id:"514-onboarding"},"5.14 Onboarding"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"(5.14.1) Plugins should provide sufficient onboarding guidance for users who may be unfamiliar with the expected use."),Object(o.mdx)("li",{parentName:"ul"},"(5.14.2) Consider linking to a help or support page in your plugin's error messages."),Object(o.mdx)("li",{parentName:"ul"},"(5.14.3) Consider using animated GIFs to explain how to use the plugin."),Object(o.mdx)("li",{parentName:"ul"},'(5.14.4) Consider having an "About" menu item (if your plugin uses submenus or has UI).')))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-plugin-development-devbestpractices-5-ui-md-38db43fd7983685c5942.js.map