(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{noGX:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),s=a("ndZU"),i=(a("qKvR"),{}),l={_frontmatter:i},c=s.a;function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.mdx)(c,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"storage"},"Storage"),Object(o.mdx)("h1",{id:"using-the-file-api"},"Using the File API"),Object(o.mdx)("p",null,"XD provides a simple, cross-platform API surface that makes it easy to read and write text and binary files. Three key things to note:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Instead of working with string paths, you work with File and Folder objects."),Object(o.mdx)("li",{parentName:"ul"},"Access to the user's files requires showing a file picker UI, but you can access temporary files and any files packaged inside your plugin without needing any user interaction. If you have a File/Folder object, then you have access to the corresponding item on disk."),Object(o.mdx)("li",{parentName:"ul"},"File APIs are asynchronous, returning Promises which you can use with ",Object(o.mdx)("inlineCode",{parentName:"li"},"then()")," or the ",Object(o.mdx)("inlineCode",{parentName:"li"},"async"),"/",Object(o.mdx)("inlineCode",{parentName:"li"},"await")," keywords.")),Object(o.mdx)("h2",{id:"getting-access-to-the-local-file-system"},"Getting access to the local file system"),Object(o.mdx)("p",null,"Start using the file system APIs by obtaining a ",Object(o.mdx)("a",Object(n.a)({parentName:"p"},{href:"/uxp-xd/reference/uxp/module/storage/#filesystemprovider"}),"FileSystemProvider")," object (shortened to ",Object(o.mdx)("inlineCode",{parentName:"p"},"fs")," in the code here):"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const fs = require("uxp").storage.localFileSystem;\n')),Object(o.mdx)("p",null,"You can use the ",Object(o.mdx)("inlineCode",{parentName:"p"},"fs")," object to access a temporary folder or your plugin's own folder immediately, or request access to user folders by showing a file picker:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'// These require no user interaction:\nconst tempFolder = await fs.getTemporaryFolder();\nconst pluginFolder = await fs.getPluginFolder();  // read-only access to the plugin\'s install folder\nconst pluginDataFolder = await fs.getDataFolder();  // folder to store settings\n\n// Display file/folder picker UI to access user files:\nconst userFolder = await fs.getFolder();  // folder picker\nconst aFile = await fs.getFileForOpening();  // "Open" file picker, suitable for reading contents\nconst anotherFile = await fs.getFileForSaving("hello.txt");  // "Save" file picker, suitable for writing contents\n')),Object(o.mdx)("p",null,"If you have a ",Object(o.mdx)("a",Object(n.a)({parentName:"p"},{href:"/uxp-xd/reference/uxp/module/storage/#folder"}),"Folder"),", you can use ",Object(o.mdx)("a",Object(n.a)({parentName:"p"},{href:"/uxp-xd/reference/uxp/module/storage/#folder-getentries"}),Object(o.mdx)("inlineCode",{parentName:"a"},"getEntries()"))," to enumerate the folder's contents:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const entries = await folder.getEntries();\nentries.forEach(entry => console.log(entry.name));\n")),Object(o.mdx)("p",null,"If you have a ",Object(o.mdx)("a",Object(n.a)({parentName:"p"},{href:"/uxp-xd/reference/uxp/module/storage/#file"}),"File"),", you can read and write its contents like so:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const contents = await aFile.read();\nawait anotherFile.write(contents);\n")),Object(o.mdx)("p",null,"You can create new files inside a folder you have access to:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const newFile = await folder.createFile("examples.txt", {overwrite: true});\nnewFile.write("Hello, world!");\n')),Object(o.mdx)("p",null,"See the ",Object(o.mdx)("a",Object(n.a)({parentName:"p"},{href:"/uxp-xd/reference/uxp/module/storage/"}),"full reference"),"."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-uxp-storage-index-md-475dc914852e842fb4bb.js.map