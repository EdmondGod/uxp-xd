(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[10948],{67711:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return s}});var a=t(22122),i=t(19756),l=(t(15007),t(64983)),r=t(99536),d=["components"],m={},o={_frontmatter:m},p=r.Z;function s(e){var n=e.components,t=(0,i.Z)(e,d);return(0,l.mdx)(p,(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"application"},"application"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"application")," module exposes APIs for exporting content, initiating edits from panel UI, and getting version / locale info."),(0,l.mdx)("h3",{id:"applicationeditdocumentoptions-editfunction--editfunction"},(0,l.mdx)("em",{parentName:"h3"},"application.editDocument(options, editFunction) | (editFunction)")),(0,l.mdx)("p",null,"Call ",(0,l.mdx)("inlineCode",{parentName:"p"},"editDocument()")," from a ",(0,l.mdx)("strong",{parentName:"p"},"plugin panel UI")," event listener to initiate an ",(0,l.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/plugin-development/xd-concepts/lifecycle/#edit-operations"},"edit operation")," batch in order to modify the XD document. This API is irrelevant for plugin menu item commands, which are wrapped in an edit batch automatically."),(0,l.mdx)("p",null,"XD calls the ",(0,l.mdx)("inlineCode",{parentName:"p"},"editFunction()")," synchronously (before ",(0,l.mdx)("inlineCode",{parentName:"p"},"editDocument()")," returns). This function is treated the same as a ",(0,l.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/plugin-development/plugin-structure/handlers/#command"},"menu command handler"),":"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"It is passed two arguments, the selection and the root node of the scenegraph"),(0,l.mdx)("li",{parentName:"ul"},"It can return a Promise to extend the duration of the edit asynchronously")),(0,l.mdx)("p",null,"You can ",(0,l.mdx)("em",{parentName:"p"},"only")," call ",(0,l.mdx)("inlineCode",{parentName:"p"},"editDocument()")," in response to a user action, such as a button ",(0,l.mdx)("inlineCode",{parentName:"p"},'"click"')," event or a text input's ",(0,l.mdx)("inlineCode",{parentName:"p"},'"input"')," event. This generally means you must call it while a UI event handler is on the call stack."),(0,l.mdx)("p",null,"For UI events that often occur in rapid-fire clusters, such as dragging a slider or pressing keys in a text field, XD tries to smartly merge consecutive edits into a single atomic Undo step. See the ",(0,l.mdx)("inlineCode",{parentName:"p"},"mergeId")," option below to customize this behavior."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.mdx)("a",{parentName:"p",href:"#module_application"},(0,l.mdx)("inlineCode",{parentName:"a"},"application"))),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Param"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"options"),(0,l.mdx)("td",{parentName:"tr",align:null},"EditSettings="),(0,l.mdx)("td",{parentName:"tr",align:null},"Optional settings object (see below). This argument can be omitted.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"editFunction"),(0,l.mdx)("td",{parentName:"tr",align:null},"!function(!Selection, !RootNode):?Promise"),(0,l.mdx)("td",{parentName:"tr",align:null},"Function which will perform your plugin's edits to the scenegraph.")))),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Typedef EditSettings")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Property"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"editLabel"),(0,l.mdx)("td",{parentName:"tr",align:null},"?string"),(0,l.mdx)("td",{parentName:"tr",align:null},"Used as the Undo label in the ",(0,l.mdx)("strong",{parentName:"td"},"Edit")," menu. If unspecified, XD uses the ",(0,l.mdx)("inlineCode",{parentName:"td"},"uxp-edit-label")," attribute on the DOM node which the user interacted with, and if that does not exist then the plugin's name will be used.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"mergeId"),(0,l.mdx)("td",{parentName:"tr",align:null},"?string"),(0,l.mdx)("td",{parentName:"tr",align:null},"If two consecutive edits to the same selection have the same ",(0,l.mdx)("inlineCode",{parentName:"td"},"mergeId"),', they are flattened together into one Undo step. If unspecified, for "high frequency" UI events (see above), XD treats the originating DOM node as a unique identifier for merging; for other UI events, merging is disabled.')))),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Example")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'let Color = require("scenegraph").Color;\nlet application = require("application");\n\nlet panelButton = document.querySelector("panel #myButton");\n\n// When button is clicked, set selected item\'s fill to solid red\npanelButton.addEventListener("click", (event) => {\n  application.editDocument((selection) => {\n    selection.items[0].fill = new Color("red");\n  });\n});\n')),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},(0,l.mdx)("strong",{parentName:"p"},"Info"),"\nFor comparison, plugin ",(0,l.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/plugin-development/plugin-structure/handlers/#command"},"menu command handlers")," are effectively run as if they were passed to ",(0,l.mdx)("inlineCode",{parentName:"p"},"editDocument()")," with ",(0,l.mdx)("inlineCode",{parentName:"p"},"editLabel")," set to the menu item's label and ",(0,l.mdx)("inlineCode",{parentName:"p"},"mergeId")," set to null.")),(0,l.mdx)("hr",null),(0,l.mdx)("h3",{id:"applicationcreaterenditionsrenditions"},(0,l.mdx)("em",{parentName:"h3"},"application.createRenditions(renditions)")),(0,l.mdx)("p",null,"Generate renditions of nodes in the document in a batch. Overwrites any existing files without warning."),(0,l.mdx)("p",null,"A single ",(0,l.mdx)("inlineCode",{parentName:"p"},"createRenditions()")," call can generate any number of renditions, including multiple renditions of the same node (with\ndifferent output settings) or renditions of multiple different nodes. Only one ",(0,l.mdx)("inlineCode",{parentName:"p"},"createRenditions()")," call can be executing at any\ngiven time, so wait for the Promise it returns before calling it again."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.mdx)("a",{parentName:"p",href:"#module_application"},(0,l.mdx)("inlineCode",{parentName:"a"},"application")),(0,l.mdx)("br",{parentName:"p"}),"\n",(0,l.mdx)("strong",{parentName:"p"},"Returns"),": ",(0,l.mdx)("inlineCode",{parentName:"p"},"Promise<Array<RenditionResult>, string>")," - Promise which is fulfilled with an array of RenditionResults (pointing to\nthe same ",(0,l.mdx)("inlineCode",{parentName:"p"},"outputFile"),"s that were originally passed in, or rejected with an error string if one or more renditions failed for\nany reason."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Param"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"renditions"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"Array<RenditionSettings>")),(0,l.mdx)("td",{parentName:"tr",align:null},"List of renditions to generate")))),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Typedef RenditionSettings")),(0,l.mdx)("p",null,(0,l.mdx)("em",{parentName:"p"},"All rendition settings fields are required")," (for a given rendition type) unless otherwise specified."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Property"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"node"),(0,l.mdx)("td",{parentName:"tr",align:null},"!SceneNode"),(0,l.mdx)("td",{parentName:"tr",align:null},"Root of scenegraph subtree to render. This may be ",(0,l.mdx)("em",{parentName:"td"},"any")," node in the scenegraph, regardless of the current edit context.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"outputFile"),(0,l.mdx)("td",{parentName:"tr",align:null},"!uxp.storage.File"),(0,l.mdx)("td",{parentName:"tr",align:null},"File to save the rendition to (overwritten without warning if it already exists)")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"type"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"File type: RenditionType.PNG, JPG, PDF, or SVG")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"scale"),(0,l.mdx)("td",{parentName:"tr",align:null},"number"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"(PNG & JPG renditions)")," DPI multipler in the range ","[0.1, 100]",", e.g. 2.0 for @2x DPI.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"quality"),(0,l.mdx)("td",{parentName:"tr",align:null},"number"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"(JPG renditions)")," Compression quality in the range ","[1, 100]",".")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"background"),(0,l.mdx)("td",{parentName:"tr",align:null},"?Color"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"(PNG & JPEG renditions)")," Alpha component ignored for JPG. Optional: defaults to transparent for PNG, solid white for JPG.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"minify"),(0,l.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"(SVG renditions)")," If true, SVG code is minified.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"embedImages"),(0,l.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"(SVG renditions)")," If true, bitmap images are stored as base64 data inside the SVG file. If false, bitmap images are saved as separate files linked from the SVG code.")))),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Typedef RenditionResult")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Property"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"outputFile"),(0,l.mdx)("td",{parentName:"tr",align:null},"!uxp.storage.File"),(0,l.mdx)("td",{parentName:"tr",align:null},"File the rendition was written to (equal to ",(0,l.mdx)("inlineCode",{parentName:"td"},"outputFile")," in RenditionSettings)")))),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Example")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'// Generate PNG rendition of the selected node\nlet application = require("application");\nlet fs = require("uxp").storage.localFileSystem;\n\nlet file = await fs.getFileForSaving();\nlet shape = selection.items[0];\nlet renditions = [\n  {\n    node: shape,\n    outputFile: file,\n    type: application.RenditionType.PNG,\n    scale: 2,\n  },\n];\napplication.createRenditions(renditions).then(function (results) {\n  // ...do something with outputFiles on disk...\n});\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h3",{id:"applicationversion--string"},(0,l.mdx)("em",{parentName:"h3"},"application.version : ",(0,l.mdx)("inlineCode",{parentName:"em"},"string"))),(0,l.mdx)("p",null,'Adobe XD version number in the form "major.minor.patch.build"'),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Kind"),": static property of ",(0,l.mdx)("a",{parentName:"p",href:"#module_application"},(0,l.mdx)("inlineCode",{parentName:"a"},"application")),(0,l.mdx)("br",{parentName:"p"}),"\n",(0,l.mdx)("strong",{parentName:"p"},"Read only"),": true"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Example")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'console.log("Version:", application.version); // e.g. "13.0.21.3"\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h3",{id:"applicationapplanguage--string"},(0,l.mdx)("em",{parentName:"h3"},"application.appLanguage : ",(0,l.mdx)("inlineCode",{parentName:"em"},"string"))),(0,l.mdx)("p",null,"Current language the application UI is using. This may not equal the user's OS locale setting: it is the closest\nlocale ",(0,l.mdx)("em",{parentName:"p"},"supported by XD"),' - use this when you want your plugin\'s UI to be consistent with XD\'s UI. Specifies\nlanguage only, with no region info (e.g. "fr", not "fr_FR").'),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Kind"),": static property of ",(0,l.mdx)("a",{parentName:"p",href:"#module_application"},(0,l.mdx)("inlineCode",{parentName:"a"},"application")),(0,l.mdx)("br",{parentName:"p"}),"\n",(0,l.mdx)("strong",{parentName:"p"},"Read only"),": true"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Example")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'console.log("XD locale:", application.appLanguage); // e.g. "en"\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h3",{id:"applicationsystemlocale--string"},(0,l.mdx)("em",{parentName:"h3"},"application.systemLocale : ",(0,l.mdx)("inlineCode",{parentName:"em"},"string"))),(0,l.mdx)("p",null,"User's OS-wide locale setting. May not match the XD UI, since XD does not support all world languages. Includes both\nlanguage ",(0,l.mdx)("em",{parentName:"p"},"and"),' region (e.g. "fr_CA" or "en_US").'),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Kind"),": static property of ",(0,l.mdx)("a",{parentName:"p",href:"#module_application"},(0,l.mdx)("inlineCode",{parentName:"a"},"application")),(0,l.mdx)("br",{parentName:"p"}),"\n",(0,l.mdx)("strong",{parentName:"p"},"Read only"),": true"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Example")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'console.log("OS locale:", application.systemLocale); // e.g. "en_US"\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h3",{id:"applicationactivedocument--documentinfo"},(0,l.mdx)("em",{parentName:"h3"},"application.activeDocument : ",(0,l.mdx)("inlineCode",{parentName:"em"},"!DocumentInfo"))),(0,l.mdx)("p",null,"Information about the document which this instance of the plugin is attached to."),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},(0,l.mdx)("strong",{parentName:"p"},"Tip")," > ",(0,l.mdx)("em",{parentName:"p"},"This does ",(0,l.mdx)("strong",{parentName:"em"},"not"),' indicate the frontmost "active" document window in the XD application.'),"\nIn XD, each document window ",(0,l.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/plugin-development/xd-concepts/lifecycle/#plugin-loading"},"loads a separate copy of your plugin"),". When a given instance of your plugin calls this API, you will always receive information about the document that this instance of the plugin is attached to, even if it's not the active window.")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Kind"),": static property of ",(0,l.mdx)("a",{parentName:"p",href:"#module_application"},(0,l.mdx)("inlineCode",{parentName:"a"},"application")),(0,l.mdx)("br",{parentName:"p"}),"\n",(0,l.mdx)("strong",{parentName:"p"},"Read only"),": true"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Typedef DocumentInfo")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Property"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"name"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},'Document name as displayed in the titlebar. For untitled documents, this will be a localized string such as "Untitled-1."')),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"guid"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"Semi"),'-unique document identifier. Duplicating an .xd file on disk will result in two files with the same GUID. Duplicating a document via "Save As" will change its GUID; thus two ',(0,l.mdx)("em",{parentName:"td"},"cloud")," documents will never have the same GUID. The GUID of an Untitled document doesn't change when it is saved for the first time. ",(0,l.mdx)("br",null),(0,l.mdx)("br",null),"This returns the same value as ",(0,l.mdx)("inlineCode",{parentName:"td"},"scenegraph.root.guid"),".")))),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Example")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'let application = require("application");\nlet documentInfo = application.activeDocument;\nconsole.log("Document title: " + documentInfo.name);\nconsole.log("Document ID: " + documentInfo.guid);\n')))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-application-md-335309f9f706199c5bb7.js.map