(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"P7/s":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return m}));var n=a("wx14"),r=a("zLVn"),d=(a("q1tI"),a("7ljp")),c=a("ndZU"),i=(a("qKvR"),{}),l={_frontmatter:i},o=c.a;function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(d.mdx)(o,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)("h1",{id:"interactions"},"interactions"),Object(d.mdx)("p",null,"The ",Object(d.mdx)("inlineCode",{parentName:"p"},"interactions")," module and related APIs provide ",Object(d.mdx)("em",{parentName:"p"},"read only")," information about the document's interactive prototype mode, including:"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("p",{parentName:"li"},'The blue "wires" seen in XD\'s prototyping UI, known as "interactions," which specify gestures/events which trigger actions to\noccur in the prototype. Accessible as a single consolidated global listing via this module\'s ',Object(d.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_interactions-allInteractions"}),Object(d.mdx)("inlineCode",{parentName:"a"},"allInteractions"))," API,\nor you can access information from specific nodes in the scenegraph via ",Object(d.mdx)("a",Object(n.a)({parentName:"p"},{href:"/uxp-xd/reference/scenegraph/#SceneNode-triggeredInteractions"}),Object(d.mdx)("inlineCode",{parentName:"a"},"SceneNode.triggeredInteractions")),"\nand ",Object(d.mdx)("a",Object(n.a)({parentName:"p"},{href:"/uxp-xd/reference/scenegraph/#Artboard-incomingInteractions"}),Object(d.mdx)("inlineCode",{parentName:"a"},"Artboard.incomingInteractions")),".")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("p",{parentName:"li"},"Designers can author multiple prototype or interaction flows in a single document and publish unique shareable links for each flow. Developers can access all document flows using the ",Object(d.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_interactions-flows"}),Object(d.mdx)("inlineCode",{parentName:"a"},"flows"))," API. With multiple flow support the ",Object(d.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_interactions-homeArtboard"}),Object(d.mdx)("inlineCode",{parentName:"a"},"homeArtboard"))," API is being deprecated as XD no longer has a single home artboard restriction.")),Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("p",{parentName:"li"},"Properties that affect Artboard scrolling behavior: Artboard ",Object(d.mdx)("a",Object(n.a)({parentName:"p"},{href:"/uxp-xd/reference/scenegraph/#Artboard-viewportHeight"}),Object(d.mdx)("inlineCode",{parentName:"a"},"viewportHeight"))," and\nnode ",Object(d.mdx)("a",Object(n.a)({parentName:"p"},{href:"/uxp-xd/reference/scenegraph/#SceneNode-fixedWhenScrolling"}),Object(d.mdx)("inlineCode",{parentName:"a"},"fixedWhenScrolling")),"."))),Object(d.mdx)("blockquote",null,Object(d.mdx)("p",{parentName:"blockquote"},Object(d.mdx)("strong",{parentName:"p"},"Tip"),"\nInteractions are a ",Object(d.mdx)("strong",{parentName:"p"},"fast-changing area")," in XD. APIs here have a higher likelihood of becoming deprecated, or lagging behind new XD features, than other parts of XD's plugin APIs.")),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Since"),": XD 19+ (some APIs added later)"),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Example")),Object(d.mdx)("pre",null,Object(d.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'// Get all interactions in the entire document (grouped by triggering node)\nvar allInteractions = require("interactions").allInteractions;\n\n// Get interactions triggered by the selected node\nvar nodeInteractions = selection.items[0].triggeredInteractions;\n\n// Get all interactions leading to a particular artboard\nvar artboard = ...\nvar interactionsToArtboard = artboard.incomingInteractions;\n\n// Print out details of one particular interaction\nvar interaction = ...\nconsole.log("Trigger: " + interaction.trigger.type + " -> Action: " + interaction.action.type);\n')),Object(d.mdx)("h2",{id:"typedefs"},"Typedefs"),Object(d.mdx)("h3",{id:"typedef-interaction"},"Typedef Interaction"),Object(d.mdx)("p",null,"An interaction consists of a Trigger + Action pair and is attached to a single, specific scenenode."),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(d.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(d.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"trigger"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"!",Object(d.mdx)("a",Object(n.a)({parentName:"td"},{href:"#Trigger"}),"Trigger")),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"User gesture or other event which will trigger the action.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"action"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"!",Object(d.mdx)("a",Object(n.a)({parentName:"td"},{href:"#Action"}),"Action")),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Action that occurs.")))),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Example:")),Object(d.mdx)("pre",null,Object(d.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'{\n    trigger: {\n        type: "tap"\n    },\n    action: {\n        type: "goToArtboard",\n        destination: /* Artboard node */,\n        preserveScrollPosition: false,\n        transition: {\n            type: "dissolve",\n            duration: 0.4,\n            easing: "ease-out"\n        }\n    }\n}\n')),Object(d.mdx)("blockquote",null,Object(d.mdx)("p",{parentName:"blockquote"},Object(d.mdx)("strong",{parentName:"p"},"Tip"),"\nNote: Interaction objects are ",Object(d.mdx)("em",{parentName:"p"},"not")," plain JSON -- they may reference scenenodes (as seen above) and other strongly-typed objects.")),Object(d.mdx)("h3",{id:"typedef-trigger"},"Typedef Trigger"),Object(d.mdx)("p",null,"Event which triggers an interaction."),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(d.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(d.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"One of the trigger types listed below.")))),Object(d.mdx)("blockquote",null,Object(d.mdx)("p",{parentName:"blockquote"},Object(d.mdx)("strong",{parentName:"p"},"Tip"),"\nNote: Additional trigger types may be added in the future. Always be sure to have a default case for unknown triggers when\nworking with Interaction objects.")),Object(d.mdx)("h5",{id:"tap"},'"tap"'),Object(d.mdx)("p",null,"When the user clicks or taps on a scenenode."),Object(d.mdx)("h5",{id:"drag"},'"drag"'),Object(d.mdx)("p",null,"When the user drags or swipes a scenenode. Can only trigger a ",Object(d.mdx)("inlineCode",{parentName:"p"},"goToArtboard")," action with the ",Object(d.mdx)("inlineCode",{parentName:"p"},"autoAnimate")," transition style."),Object(d.mdx)("h5",{id:"time"},'"time"'),Object(d.mdx)("p",null,"Once a set amount of time elapses (this trigger type only exists on Artboard nodes). Additional Trigger properties:"),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(d.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(d.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"delay"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Delay time in ms.")))),Object(d.mdx)("h5",{id:"voice"},'"voice"'),Object(d.mdx)("p",null,"When the user speaks a specific voice command. Additional Trigger properties:"),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(d.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(d.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"speechCommand"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Phrase the user speaks to trigger this command.")))),Object(d.mdx)("h3",{id:"typedef-action"},"Typedef Action"),Object(d.mdx)("p",null,"Action performed when the trigger occurs."),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(d.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(d.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"One of the action types listed below.")))),Object(d.mdx)("blockquote",null,Object(d.mdx)("p",{parentName:"blockquote"},Object(d.mdx)("strong",{parentName:"p"},"Tip"),"\nNote: Additional action types may be added in the future. Always be sure to have a default case for unknown actions when\nworking with Interaction objects.")),Object(d.mdx)("h5",{id:"gotoartboard"},'"goToArtboard"'),Object(d.mdx)("p",null,"Navigate the entire screen to view a different artboard. Additional Action properties:"),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(d.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(d.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"destination"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"!Artboard"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Artboard to navigate to.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"transition"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"!",Object(d.mdx)("a",Object(n.a)({parentName:"td"},{href:"#Transition"}),"Transition")),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Animation style with which the view transitions from the old Artboard to the new one.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"preserveScrollPosition"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"If both Artboards are ",Object(d.mdx)("a",Object(n.a)({parentName:"td"},{href:"/uxp-xd/reference/scenegraph/#Artboard-viewportHeight"}),"taller than the viewport"),", attempts to keep the user's current scroll position the same as in the outgoing artboard.")))),Object(d.mdx)("h5",{id:"overlay"},'"overlay"'),Object(d.mdx)("p",null,"Displays a second artboard overlaid on top of the current one. Additional Action properties:"),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(d.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(d.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"overlay"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"!Artboard"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Artboard to show on top.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"transition"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"!",Object(d.mdx)("a",Object(n.a)({parentName:"td"},{href:"#Transition"}),"Transition")),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Animation style in which the second Artboard transitions into view. Only certain transition types are allowed for overlays.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"overlayTopLeft"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(d.mdx)("inlineCode",{parentName:"td"},"!{x:number, y:number}")),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Position of the overlay Artboard, in the current/base Artboard's coordinate space.")))),Object(d.mdx)("h5",{id:"goback"},'"goBack"'),Object(d.mdx)("p",null,"Reverse the last ",Object(d.mdx)("inlineCode",{parentName:"p"},'"goToArtboard"')," or ",Object(d.mdx)("inlineCode",{parentName:"p"},'"overlay"')," action, replaying in reverse whatever transition it used."),Object(d.mdx)("h5",{id:"speak"},'"speak"'),Object(d.mdx)("p",null,"Speak with audio output to the user. Additional Action properties:"),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(d.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(d.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"speechOutput"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Phrase to speak to the user.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"locale"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Locale determines the pronounciation and accent of the digital voice. Includes both language ",Object(d.mdx)("em",{parentName:"td"},"and"),' region (e.g. "en-us").')),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"voice"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),'"Persona" of the digital voice to use. Available personas vary by locale.')))),Object(d.mdx)("h3",{id:"typedef-transition"},"Typedef Transition"),Object(d.mdx)("p",null,"Animation style with which ",Object(d.mdx)("inlineCode",{parentName:"p"},'"goToArtboard"')," and ",Object(d.mdx)("inlineCode",{parentName:"p"},'"overlay"')," actions transition from/to Artboards."),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(d.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(d.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"One of: ",Object(d.mdx)("inlineCode",{parentName:"td"},'"autoAnimate"'),", ",Object(d.mdx)("inlineCode",{parentName:"td"},'"dissolve"'),", ",Object(d.mdx)("inlineCode",{parentName:"td"},'"push"'),", ",Object(d.mdx)("inlineCode",{parentName:"td"},'"slide"'),", ",Object(d.mdx)("inlineCode",{parentName:"td"},'"none"'))),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"fromSide"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(d.mdx)("em",{parentName:"td"},'(If type = "push" or "slide").')," One of: ",Object(d.mdx)("inlineCode",{parentName:"td"},'"L"'),", ",Object(d.mdx)("inlineCode",{parentName:"td"},'"R"'),", ",Object(d.mdx)("inlineCode",{parentName:"td"},'"T"'),", ",Object(d.mdx)("inlineCode",{parentName:"td"},'"B"'))),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"duration"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Length of animation in seconds.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"easing"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"One of: ",Object(d.mdx)("inlineCode",{parentName:"td"},'"linear"'),", ",Object(d.mdx)("inlineCode",{parentName:"td"},'"ease-in"'),", ",Object(d.mdx)("inlineCode",{parentName:"td"},'"ease-out"'),", ",Object(d.mdx)("inlineCode",{parentName:"td"},'"ease-in-out"'),", ",Object(d.mdx)("inlineCode",{parentName:"td"},'"wind-up"'),", ",Object(d.mdx)("inlineCode",{parentName:"td"},'"bounce"'),", ",Object(d.mdx)("inlineCode",{parentName:"td"},'"snap"'))))),Object(d.mdx)("h3",{id:"typedef-flowinfo"},"Typedef FlowInfo"),Object(d.mdx)("p",null,"Information related to a particular flow"),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(d.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(d.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Auto-generated or user-defined label for a particular flow.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"homeArtboard"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"!",Object(d.mdx)("a",Object(n.a)({parentName:"td"},{href:"/uxp-xd/reference/scenegraph/#Artboard"}),"Artboard")),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Artboard from which a particular flow or a prototype experience begins.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"url"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(d.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"URL is the latest published link associated with a particular flow and can be ",Object(d.mdx)("inlineCode",{parentName:"td"},"null")," in case no link is published for that flow.")))),Object(d.mdx)("p",null,"NOTE: All ",Object(d.mdx)("inlineCode",{parentName:"p"},"url")," returned via ",Object(d.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_interactions-flows"}),"flows")," are related to published flows and are usually a subset of the URLs returned via ",Object(d.mdx)("a",Object(n.a)({parentName:"p"},{href:"/uxp-xd/reference/cloud/#module_cloud-getSharedArtifacts"}),"getSharedArtifacts"),". However, the reverse may or may not always hold true."),Object(d.mdx)("h3",{id:"interactionshomeartboard--artboard"},Object(d.mdx)("em",{parentName:"h3"},"interactions.homeArtboard : ",Object(d.mdx)("inlineCode",{parentName:"em"},"?Artboard"))),Object(d.mdx)("p",null,"The starting Artboard seen when the interactive prototype is launched."),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Deprecated"),": XD 33 - Please use ",Object(d.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_interactions-flows"}),Object(d.mdx)("inlineCode",{parentName:"a"},"flows"))," which supports multple flows."),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Since"),": XD 32"),Object(d.mdx)("p",null,"In case there are multiple interactive prototype experiences (flows), implying multiple home artboards, this API only returns the top-left artboard among all of those home artboards."),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Kind"),": static property of ",Object(d.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_interactions"}),Object(d.mdx)("inlineCode",{parentName:"a"},"interactions")),"\n",Object(d.mdx)("strong",{parentName:"p"},"Read only"),": true"),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"See"),": ",Object(d.mdx)("a",Object(n.a)({parentName:"p"},{href:"/uxp-xd/reference/scenegraph/#Artboard-isHomeArtboard"}),Object(d.mdx)("inlineCode",{parentName:"a"},"Artboard.isHomeArtboard"))),Object(d.mdx)("h3",{id:"interactionsflows--arrayltflowinfoflowinfogt"},Object(d.mdx)("em",{parentName:"h3"},"interactions.flows : ",Object(d.mdx)("inlineCode",{parentName:"em"},"!Array&lt;\\![FlowInfo](#FlowInfo)&gt;"))),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Since"),": XD 33"),Object(d.mdx)("p",null,"Returns a collection of information on ",Object(d.mdx)("em",{parentName:"p"},"all")," flows across the entire document."),Object(d.mdx)("p",null,"A ",Object(d.mdx)("inlineCode",{parentName:"p"},"flow")," is a series or set of artboards starting from one artboard (called a home artboard), which are connected to other artboards or screens via wires or interactions. A document can have zero or multiple (one or more than one) flows and can therefore have zero or multiple home artboards. Each entry in the return array represents a ",Object(d.mdx)("inlineCode",{parentName:"p"},"FlowInfo")," object."),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Kind"),": static property of ",Object(d.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_interactions"}),Object(d.mdx)("inlineCode",{parentName:"a"},"interactions")),"\n",Object(d.mdx)("strong",{parentName:"p"},"Read only"),": true"),Object(d.mdx)("h3",{id:"interactionsallinteractions--arraylttriggernode-scenenode-interactions-arrayltinteractioninteractiongtgt"},Object(d.mdx)("em",{parentName:"h3"},"interactions.allInteractions : ",Object(d.mdx)("inlineCode",{parentName:"em"},"!Array&lt;!{triggerNode: !SceneNode, interactions: !Array&lt;\\![Interaction](#Interaction)&gt;}&gt;"))),Object(d.mdx)("p",null,"Returns a collection of ",Object(d.mdx)("em",{parentName:"p"},"all")," interactions across the entire document, grouped by triggering scenenode. Each entry in this array\nspecifies a ",Object(d.mdx)("inlineCode",{parentName:"p"},"triggerNode")," and the result of getting ",Object(d.mdx)("a",Object(n.a)({parentName:"p"},{href:"/uxp-xd/reference/scenegraph/#SceneNode-triggeredInteractions"}),Object(d.mdx)("inlineCode",{parentName:"a"},"triggerNode.triggeredInteractions")),"."),Object(d.mdx)("p",null,"May include interactions that are impossible to trigger because the trigger node (or one of its ancestors) has ",Object(d.mdx)("inlineCode",{parentName:"p"},"visible")," = false."),Object(d.mdx)("blockquote",null,Object(d.mdx)("p",{parentName:"blockquote"},Object(d.mdx)("strong",{parentName:"p"},"Tip"),"\nCurrently, this API excludes some types of interactions: keypress/gamepad, scrolling, hover, component state transitions, or non-speech audio playback.")),Object(d.mdx)("p",null,Object(d.mdx)("strong",{parentName:"p"},"Kind"),": static property of ",Object(d.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_interactions"}),Object(d.mdx)("inlineCode",{parentName:"a"},"interactions")),"\n",Object(d.mdx)("strong",{parentName:"p"},"Read only"),": true"))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-interactions-md-459d830e7cc46ec5733b.js.map