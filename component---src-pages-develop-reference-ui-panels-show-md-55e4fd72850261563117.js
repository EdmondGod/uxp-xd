(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{cdHU:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return p})),t.d(n,"default",(function(){return i}));var a=t("wx14"),o=t("zLVn"),l=(t("q1tI"),t("7ljp")),c=t("ndZU"),p=(t("qKvR"),{}),d={_frontmatter:p},r=c.a;function i(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(l.mdx)(r,Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"panel-show-callback"},"Panel show() callback"),Object(l.mdx)("p",null,"The ",Object(l.mdx)("inlineCode",{parentName:"p"},"show()")," function is the one lifecycle method in ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/develop/plugin-development/plugin-structure/handlers/#panel"}),"panel objects")," that is ",Object(l.mdx)("strong",{parentName:"p"},"required"),". XD calls ",Object(l.mdx)("inlineCode",{parentName:"p"},"show()")," each time the user opens your panel."),Object(l.mdx)("p",null,"To populate the panel with UI elements, add DOM nodes to the ",Object(l.mdx)("inlineCode",{parentName:"p"},"event.node")," root node that is provided. There are two ways you can use ",Object(l.mdx)("inlineCode",{parentName:"p"},"show()")," to create your panel UI:"),Object(l.mdx)("h3",{id:"recreate-panel-on-each-show"},"Recreate panel on each show()"),Object(l.mdx)("p",null,"For simple panels, you can create the panel UI each time it's shown and throw it away each time it's hidden:"),Object(l.mdx)("p",null,"Here is a simple example:"),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function show(event) {\n  const content = "<p>Hello, World</p>";\n  const panel = document.createElement("div");\n  panel.innerHTML = content;\n\n  event.node.appendChild(panel);\n}\n\nfunction hide(event) {\n  event.node.firstChild.remove();\n}\n')),Object(l.mdx)("h3",{id:"create-panel-on-first-show-then-reuse"},"Create panel on first show(), then reuse"),Object(l.mdx)("p",null,"For panels with more complex state, it may be simpler to continue reusing the same panel DOM nodes:"),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let panel;\n\nfunction show(event) {\n  if (panel) { return; }\n\n  const content = "<p>Hello, World</p>";\n  panel = document.createElement("div");\n  panel.innerHTML = content;\n\n  event.node.appendChild(panel);\n}\n\nfunction hide(event) {\n  // nothing to do here\n}\n')),Object(l.mdx)("p",null,"Note: once the panel has been created you don't need to touch the DOM at all for hide & show to work correctly -- XD takes care of closing and reopening the panel UI's container automatically."),Object(l.mdx)("h3",{id:"panel-content-updating"},"Panel content updating"),Object(l.mdx)("p",null,"Whichever method you use, you'll typically also need to implement the ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/reference/ui/panels/update/"}),"update() callback")," in order to update your panel UI if the selection or XD document content changes while the panel is already open."))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-ui-panels-show-md-55e4fd72850261563117.js.map