(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{Y92r:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return m}));var a=n("wx14"),o=n("zLVn"),l=(n("q1tI"),n("7ljp")),i=n("ndZU"),r=(n("qKvR"),{}),d={_frontmatter:r},c=i.a;function m(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(l.mdx)(c,Object(a.a)({},d,i,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"how-to-style-text"},"How to style text"),Object(l.mdx)("p",null,"Creating styled text in Adobe XD is easy! In this tutorial, we'll show you how to create a text element with a specific color and font size, and also a text element with multiple inline colors."),Object(l.mdx)("h2",{id:"prerequisites"},"Prerequisites"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Basic knowledge of HTML, CSS, and JavaScript"),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",Object(a.a)({parentName:"li"},{href:"/uxp-xd/tutorials/quick-start/"}),"Quick Start Tutorial")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",Object(a.a)({parentName:"li"},{href:"/uxp-xd/tutorials/debugging/"}),"Debugging Tutorial"))),Object(l.mdx)("h2",{id:"development-steps"},"Development Steps"),Object(l.mdx)("blockquote",null,Object(l.mdx)("p",{parentName:"blockquote"},Object(l.mdx)("strong",{parentName:"p"},"Info"),"\nComplete code for this plugin can be found ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/AdobeXD/Plugin-Samples/tree/master/how-to-style-text"}),"on GitHub"),".")),Object(l.mdx)("h3",{id:"1-prepare-your-plugin-scaffold"},"1. Prepare your plugin scaffold"),Object(l.mdx)("p",null,"First, edit the manifest file for the plugin you created in our ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/tutorials/quick-start/"}),"Quick Start Tutorial"),"."),Object(l.mdx)("p",null,"Replace the ",Object(l.mdx)("inlineCode",{parentName:"p"},"uiEntryPoints")," field of the manifest with the following:"),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"uiEntryPoints": [\n    {\n        "type": "menu",\n        "label": "Create Styled Text",\n        "commandId": "createStyledTextCommand"\n    }\n]\n')),Object(l.mdx)("p",null,"If you're curious about what each entry means, ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/reference/structure/manifest/"}),"see the manifest documentation"),", where you can also learn about all manifest requirements for a plugin to be published in the XD Plugin Manager."),Object(l.mdx)("p",null,"Then, update your ",Object(l.mdx)("inlineCode",{parentName:"p"},"main.js")," file, mapping the manifest's ",Object(l.mdx)("inlineCode",{parentName:"p"},"commandId")," to a handler function."),Object(l.mdx)("p",null,"Replace the content of your ",Object(l.mdx)("inlineCode",{parentName:"p"},"main.js")," file with the following code:"),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function createStyledTextHandlerFunction(selection) {\n    // The body of this function is added later\n}\n\nmodule.exports = {\n    commands: {\n        "createStyledTextCommand": createStyledTextHandlerFunction\n    }\n};\n')),Object(l.mdx)("p",null,"The remaining steps in this tutorial describe additional edits to the ",Object(l.mdx)("inlineCode",{parentName:"p"},"main.js")," file."),Object(l.mdx)("h3",{id:"2-require-in-xd-api-dependencies"},"2. Require in XD API dependencies"),Object(l.mdx)("p",null,"For this tutorial, we just need access to two XD scenegraph classes."),Object(l.mdx)("p",null,"Add the following lines to the top of your ",Object(l.mdx)("inlineCode",{parentName:"p"},"main.js")," file:"),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// Add this to the top of your main.js file\nconst { Text, Color } = require("scenegraph");\n')),Object(l.mdx)("p",null,"Now the ",Object(l.mdx)("inlineCode",{parentName:"p"},"Text")," and ",Object(l.mdx)("inlineCode",{parentName:"p"},"Color")," classes are required in and ready to be used."),Object(l.mdx)("h3",{id:"3-create-the-main-function"},"3. Create the main function"),Object(l.mdx)("p",null,"In this step, we'll build out the main function, ",Object(l.mdx)("inlineCode",{parentName:"p"},"createStyledTextHandlerFunction"),", that we added in the first step. This function will add red text to the user's doucment."),Object(l.mdx)("p",null,"Each of the numbered comments are explained below the code:"),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function createStyledTextHandlerFunction(selection) {\n    const node = new Text();                    // [1]\n    node.text = "This is some red text";        // [2]\n    node.fill = new Color("#FF0000");           // [3]\n    node.fontSize = 24;\n\n    selection.insertionParent.addChild(node);   // [4]\n    node.moveInParentCoordinates(20, 50);       // [5]\n}\n')),Object(l.mdx)("ol",null,Object(l.mdx)("li",{parentName:"ol"},"Create the ",Object(l.mdx)("inlineCode",{parentName:"li"},"Text")," object."),Object(l.mdx)("li",{parentName:"ol"},"Populate ",Object(l.mdx)("inlineCode",{parentName:"li"},"text")," with a string."),Object(l.mdx)("li",{parentName:"ol"},"Set the color to red and the font size to 24 for the entire string."),Object(l.mdx)("li",{parentName:"ol"},"Add ",Object(l.mdx)("inlineCode",{parentName:"li"},"text")," to the scenegraph as a child of the currrently-selected artboard."),Object(l.mdx)("li",{parentName:"ol"},"Move ",Object(l.mdx)("inlineCode",{parentName:"li"},"text")," to a different position relative to the artboard's coordinate system.")),Object(l.mdx)("p",null,"Character styles such as color and font size can also vary within the text. Read more below for details."),Object(l.mdx)("h3",{id:"4-test-the-plugin"},"4. Test the plugin"),Object(l.mdx)("p",null,"If you reload the plugin and run it, you should see the following result:"),Object(l.mdx)("p",null,Object(l.mdx)("img",{alt:"Red text",src:n("oQ3E")})),Object(l.mdx)("p",null,"Not bad for a few lines of code! Let's push it a little further."),Object(l.mdx)("h3",{id:"5-update-the-main-function"},"5. Update the main function"),Object(l.mdx)("p",null,"All red is ok, but we can make our text more colorful than that. Let's change the code to apply different styles to different parts of the text, resulting in rainbow-colored text."),Object(l.mdx)("p",null,"The ",Object(l.mdx)("inlineCode",{parentName:"p"},"styleRanges")," property lets us apply different styles to different ranges of the node's text:"),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function createStyledTextHandlerFunction(selection) {\n    const node = new Text();\n\n    const textData = [                                     // [1]\n        {text: "This ", color: "red"},\n        {text: "is ",   color: "orange"},\n        {text: "some ", color: "yellow"},\n        {text: "ra",    color: "green"},\n        {text: "in",    color: "blue"},\n        {text: "bow ",  color: "indigo"},\n        {text: "text",  color: "violet"}\n    ];\n\n    node.text = textData.map(item => item.text).join("");   // [2]\n\n    node.styleRanges = textData.map(item => ({              // [3]\n        length: item.text.length,\n        fill: new Color(item.color)\n    }));\n\n    node.fontSize = 24;                                     // [4]\n\n    selection.insertionParent.addChild(node);\n    node.moveInParentCoordinates(20, 50);\n}\n')),Object(l.mdx)("p",null,"Here's what's changed:"),Object(l.mdx)("ol",null,Object(l.mdx)("li",{parentName:"ol"},"This data structure stores the text to be displayed, as well as the color to use for each fragment of text."),Object(l.mdx)("li",{parentName:"ol"},"Just as before, we set ",Object(l.mdx)("inlineCode",{parentName:"li"},"node.text")," equal to the text to be displayed. This time, the text string is created by concatenating together all the ",Object(l.mdx)("inlineCode",{parentName:"li"},".text")," property values contained in the ",Object(l.mdx)("inlineCode",{parentName:"li"},"textData")," array. The ",Object(l.mdx)("inlineCode",{parentName:"li"},"Array#map")," gets us an array of strings, which we combine into a single string with ",Object(l.mdx)("inlineCode",{parentName:"li"},"Array#join"),"."),Object(l.mdx)("li",{parentName:"ol"},"In this step, we build an array of style objects, applying each style to a few characters of the text string. We use ",Object(l.mdx)("inlineCode",{parentName:"li"},"Array#map")," again, this time converting each item in the ",Object(l.mdx)("inlineCode",{parentName:"li"},"textData")," array into a style object. The ",Object(l.mdx)("inlineCode",{parentName:"li"},"length")," of each style is equal to the length of the text string contained in one element of the ",Object(l.mdx)("inlineCode",{parentName:"li"},"textData")," array. The ",Object(l.mdx)("inlineCode",{parentName:"li"},"fill")," of each style uses the color value contained in one element of the ",Object(l.mdx)("inlineCode",{parentName:"li"},"textData")," array."),Object(l.mdx)("li",{parentName:"ol"},"We can still apply styles to the entire text node at once, as in the earlier example. Here, the font size will be set to the same value across ",Object(l.mdx)("em",{parentName:"li"},"all")," the style ranges we just created.")),Object(l.mdx)("blockquote",null,Object(l.mdx)("p",{parentName:"blockquote"},Object(l.mdx)("strong",{parentName:"p"},"tip"),"\nThe ",Object(l.mdx)("inlineCode",{parentName:"p"},"Color")," constructor understands some color names, but you have plenty of other options for defining colors precisely, including hex, rgba, and more. ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/reference/Color/"}),"See the ",Object(l.mdx)("inlineCode",{parentName:"a"},"Color")," reference for more information"),".")),Object(l.mdx)("p",null,"Here are a few things to notice about the ",Object(l.mdx)("inlineCode",{parentName:"p"},"styleRanges")," property of ",Object(l.mdx)("inlineCode",{parentName:"p"},"Text")," objects:"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"styleRanges")," is an array of objects; you can have more than one style for a text node."),Object(l.mdx)("li",{parentName:"ul"},"Each range is given a ",Object(l.mdx)("inlineCode",{parentName:"li"},"length")," which determines the number of characters to which the style is applied, starting from the end of the previous style range."),Object(l.mdx)("li",{parentName:"ul"},"Character styles such as ",Object(l.mdx)("inlineCode",{parentName:"li"},"fill")," or ",Object(l.mdx)("inlineCode",{parentName:"li"},"fontSize")," can be set to different values in each style range, or they can be set on the ",Object(l.mdx)("inlineCode",{parentName:"li"},"Text")," node overall to apply the setting to ",Object(l.mdx)("em",{parentName:"li"},"all")," existing style ranges.")),Object(l.mdx)("h3",{id:"6-run-the-plugin"},"6. Run the plugin"),Object(l.mdx)("p",null,"After saving all of your changes, reload the plugin in XD and run it. You'll now have rainbow-colored text:"),Object(l.mdx)("p",null,Object(l.mdx)("img",{alt:"Rainbow text",src:n("oFrv")})),Object(l.mdx)("h2",{id:"next-steps"},"Next Steps"),Object(l.mdx)("p",null,"Want to expand on what you learned here? Have a look at these references to see options for customizing this sample plugin:"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",Object(a.a)({parentName:"li"},{href:"/uxp-xd/reference/scenegraph/"}),"Text")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",Object(a.a)({parentName:"li"},{href:"/uxp-xd/reference/Color/"}),"Color"))),Object(l.mdx)("p",null,"Ready to explore further? Take a look at our other resources:"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",Object(a.a)({parentName:"li"},{href:"/uxp-xd/tutorials/"}),"Tutorials")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/AdobeXD/plugin-samples"}),"Sample code repos"))))}m.isMDXComponent=!0},oFrv:function(e,t,n){e.exports=n.p+"static/rainbow-f49267837a395b1223259785f530271f.png"},oQ3E:function(e,t,n){e.exports=n.p+"static/red-5b110c9bcb20738eeed10d1b1b17e204.png"}}]);
//# sourceMappingURL=component---src-pages-develop-tutorials-how-to-style-text-index-md-f1268429bfb9d09c9198.js.map