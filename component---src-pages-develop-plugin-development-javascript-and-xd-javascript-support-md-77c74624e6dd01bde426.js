(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"3N6o":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return c}));var a=t("wx14"),o=t("zLVn"),i=(t("q1tI"),t("7ljp")),r=t("ndZU"),s=(t("qKvR"),{}),l={_frontmatter:s},u=r.a;function c(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.mdx)(u,Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"javascript-version-and-feature-support"},"JavaScript version and feature support"),Object(i.mdx)("p",null,'XD plugin APIs support "modern JavaScript"... but what does that mean exactly? '),Object(i.mdx)("p",null,"This is the place to find out!"),Object(i.mdx)("h2",{id:"can-i-use-es5-features"},"Can I use ES5 features?"),Object(i.mdx)("p",null,"Yes! This means you can use ",Object(i.mdx)("inlineCode",{parentName:"p"},"Array#map"),", ",Object(i.mdx)("inlineCode",{parentName:"p"},"Array#reduce"),", and numerous other language features introduced with ES5."),Object(i.mdx)("p",null,"In fact, you can write your whole plugin in ES5 if you so choose."),Object(i.mdx)("h2",{id:"what-es2015-es6-features-can-i-use"},"What ES2015+ (ES6) features can I use?"),Object(i.mdx)("p",null,"XD plugin APIs support most of ES2015 and beyond. You can use features such as:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Template literals"),Object(i.mdx)("li",{parentName:"ul"},"Classes"),Object(i.mdx)("li",{parentName:"ul"},"Block-scoped variables ( ",Object(i.mdx)("inlineCode",{parentName:"li"},"let")," , ",Object(i.mdx)("inlineCode",{parentName:"li"},"const")," )"),Object(i.mdx)("li",{parentName:"ul"},"Object destructuring"),Object(i.mdx)("li",{parentName:"ul"},"Default parameters"),Object(i.mdx)("li",{parentName:"ul"},"Spread and Rest ( ",Object(i.mdx)("inlineCode",{parentName:"li"},"...")," )"),Object(i.mdx)("li",{parentName:"ul"},"Arrow functions"),Object(i.mdx)("li",{parentName:"ul"},"Asynchronous functions ( ",Object(i.mdx)("inlineCode",{parentName:"li"},"async")," / ",Object(i.mdx)("inlineCode",{parentName:"li"},"await")," )"),Object(i.mdx)("li",{parentName:"ul"},"Promises")),Object(i.mdx)("h2",{id:"can-i-use-require"},"Can I use require?"),Object(i.mdx)("p",null,"Yes, you can use ",Object(i.mdx)("inlineCode",{parentName:"p"},"require")," to import additional files."),Object(i.mdx)("p",null,"Note that ",Object(i.mdx)("inlineCode",{parentName:"p"},"require")," in XD does not follow Node.js-style resolution. You can only require files in your plugin directory relative to your file location, but not outside of your plugin directory. There is no lookup in a ",Object(i.mdx)("inlineCode",{parentName:"p"},"package.json")," or a ",Object(i.mdx)("inlineCode",{parentName:"p"},"node_modules")," directory."),Object(i.mdx)("p",null,"For example, the following works:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const aFile = require("./aFile");\nconst someJSON = require("./someJSON.json");\nconst anotherFile = require("./path/to/file/file");\nconst someLib = require("./node_modules/somelib");\n')),Object(i.mdx)("p",null,"However, the following will not:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const someLib = require("somelib");  // no package.json lookup\n')),Object(i.mdx)("h2",{id:"can-i-use-npm-packages-or-nodejs-apis"},"Can I use npm packages or Node.js APIs?"),Object(i.mdx)("p",null,"XD's plugin sandbox does not include most Node.js APIs, such as unrestricted filesystem access or the ability to spawn external processes. Npm packages that only depend on the core JavaScript language APIs can work in XD, but because XD's ",Object(i.mdx)("inlineCode",{parentName:"p"},"require()")," differs (see above), you will likely have to use webpack or rollup in order to generate a single-file bundle first."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-plugin-development-javascript-and-xd-javascript-support-md-77c74624e6dd01bde426.js.map