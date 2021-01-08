(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{ZJBy:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("ndZU"),c=(a("qKvR"),{}),m={_frontmatter:c},l=i.a;function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.mdx)(l,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"automatic-cleanups"},"Automatic cleanups"),Object(r.mdx)("p",null,"To make writing your plugin simpler, XD performs a number of automated cleanups after each plugin command finishes:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("strong",{parentName:"p"},"Artboard reparenting")," - If a node is changed to overlap an Artboard, it will automatically become a child of the artboard when the command finishes,\nand vice versa if a node no longer overlaps an Artboard.")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("strong",{parentName:"p"},"Selection")," - Deleted nodes are removed from the selection when the command finishes.")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("strong",{parentName:"p"},"Empty containers")," - If deleting node(s) has caused the parent container to become empty, it is automatically deleted as well after the command finishes.")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("strong",{parentName:"p"},"Component master->instance syncing")," - Most changes you make inside a Component master are automatically mirrored to all other copies of that Symbol, unless\noverridden by local changes in a particular instance. See ",Object(r.mdx)("a",Object(n.a)({parentName:"p"},{href:"../scenegraph/#SymbolInstance"}),"Component / SymbolInstance docs")," for more details.")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("strong",{parentName:"p"},"Repeat Grid cell syncing")," - Most changes you make inside a Repeat Grid cell are automatically mirrored to all its other cells, except for certain properties\nsuch as text and images which XD permits to vary between grid cells.")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},Object(r.mdx)("strong",{parentName:"p"},"Content-Aware Group & Stack layout updates")," -- The background layer (if any) of a Content-Aware Group will update automatically after a plugin changes the\nsize or position of its contents. Similarly, changing a node inside a Group with Stack layout will automatically slide its adjacent siblings to preserve a\nconstant margin around the node. These changes do not occur until after the plugin command finishes."))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-core-automatic-cleanups-md-18641cf891e7bdd5848e.js.map