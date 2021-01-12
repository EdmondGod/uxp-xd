(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{KoRN:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return c}));var n=a("wx14"),i=a("zLVn"),m=(a("q1tI"),a("7ljp")),l=a("ndZU"),r=(a("qKvR"),{}),d={_frontmatter:r},p=l.a;function c(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(m.mdx)(p,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)("h1",{id:"imagefill"},"ImageFill"),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Kind"),": class"),Object(m.mdx)("p",null,"ImageFill represents a bitmap (raster) image that can be used as the ",Object(m.mdx)("inlineCode",{parentName:"p"},"fill")," property of any shape node (but not Artboards).\nThe supported image encodings are: PNG, JPEG, and GIF."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Example")),Object(m.mdx)("pre",null,Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'// User picks an image file\nconst storage = require("uxp").storage;\nconst fs = storage.localFileSystem;\nlet imageFile = await fs.getFileForOpening({ types: storage.fileTypes.images });\n\n// Create ImageFill for this image\nconst ImageFill = require("scenegraph").ImageFill;\nlet fill = new ImageFill(imageFile);\n\n// Set fill of first selected item\nselection.items[0].fill = fill;\n')),Object(m.mdx)("h2",{id:"imagefill-1"},"ImageFill()"),Object(m.mdx)("table",null,Object(m.mdx)("thead",{parentName:"table"},Object(m.mdx)("tr",{parentName:"thead"},Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(m.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(m.mdx)("tbody",{parentName:"table"},Object(m.mdx)("tr",{parentName:"tbody"},Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"fileOrDataURI"),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(m.mdx)("inlineCode",{parentName:"td"},"!uxp.storage.File")," or ",Object(m.mdx)("inlineCode",{parentName:"td"},"string")),Object(m.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"File object pointing to an image file; or a string containing a ",Object(m.mdx)("inlineCode",{parentName:"td"},"data:")," URI with a base-64 encoded image.")))),Object(m.mdx)("h3",{id:"imagefillclone-⇒-imagefill"},"imageFill.clone() ⇒ ",Object(m.mdx)("inlineCode",{parentName:"h3"},"!ImageFill")),Object(m.mdx)("p",null,"Returns a new copy of this ImageFill."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(m.mdx)("a",Object(n.a)({parentName:"p"},{href:"#ImageFill"}),Object(m.mdx)("inlineCode",{parentName:"a"},"ImageFill")),"\n",Object(m.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(m.mdx)("inlineCode",{parentName:"p"},"!ImageFill")),Object(m.mdx)("h3",{id:"imagefillassetid--string"},Object(m.mdx)("em",{parentName:"h3"},"imageFill.assetId : ",Object(m.mdx)("inlineCode",{parentName:"em"},"string"))),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Since"),": XD 29"),Object(m.mdx)("p",null,"A unique identifier for the image asset used by this ImageFill. May be shared by other ImageFills, including those with different cropping, size,\nrotation, or mirroring. If identical images are imported into XD from separate sources, they may have different ",Object(m.mdx)("inlineCode",{parentName:"p"},"assetId"),"s however."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",Object(m.mdx)("a",Object(n.a)({parentName:"p"},{href:"#ImageFill"}),Object(m.mdx)("inlineCode",{parentName:"a"},"ImageFill"))),Object(m.mdx)("h3",{id:"imagefillscalebehavior--string"},Object(m.mdx)("em",{parentName:"h3"},"imageFill.scaleBehavior : ",Object(m.mdx)("inlineCode",{parentName:"em"},"string"))),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Default"),": ",Object(m.mdx)("inlineCode",{parentName:"p"},"SCALE_COVER")),Object(m.mdx)("p",null,"How the image is scaled when the aspect ratio of the shape does not match the aspect ratio of the image:"),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"ImageFill.SCALE_COVER - The image's aspect ratio is preserved and it is scaled to completely cover the area of the shape. This means on one axis the\nimage's edges line up exactly with the edges of the shape, and on the other axis the image extends beyond the shape's bounds and is cropped. (Similar\nto ",Object(m.mdx)("inlineCode",{parentName:"li"},"object-fit: cover")," in CSS)."),Object(m.mdx)("li",{parentName:"ul"},"ImageFill.SCALE_STRETCH - The image is stretched (distorting its aspect ratio) so its edges line up exactly with the edges of the shape. (Similar to\n",Object(m.mdx)("inlineCode",{parentName:"li"},"object-fit: fill")," in CSS).")),Object(m.mdx)("p",null,"Image size and scaling are also affected by ",Object(m.mdx)("em",{parentName:"p"},"cropping settings"),", but these are not yet exposed to plugins."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",Object(m.mdx)("a",Object(n.a)({parentName:"p"},{href:"#ImageFill"}),Object(m.mdx)("inlineCode",{parentName:"a"},"ImageFill"))),Object(m.mdx)("h3",{id:"imagefillnaturalwidth--number"},Object(m.mdx)("em",{parentName:"h3"},"imageFill.naturalWidth : ",Object(m.mdx)("inlineCode",{parentName:"em"},"number"))),Object(m.mdx)("p",null,"Pixel dimensions of the underlying bitmap image data."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",Object(m.mdx)("a",Object(n.a)({parentName:"p"},{href:"#ImageFill"}),Object(m.mdx)("inlineCode",{parentName:"a"},"ImageFill")),"\n",Object(m.mdx)("strong",{parentName:"p"},"Read only"),": true"),Object(m.mdx)("h3",{id:"imagefillnaturalheight--number"},Object(m.mdx)("em",{parentName:"h3"},"imageFill.naturalHeight : ",Object(m.mdx)("inlineCode",{parentName:"em"},"number"))),Object(m.mdx)("p",null,"Pixel dimensions of the underlying bitmap image data."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",Object(m.mdx)("a",Object(n.a)({parentName:"p"},{href:"#ImageFill"}),Object(m.mdx)("inlineCode",{parentName:"a"},"ImageFill")),"\n",Object(m.mdx)("strong",{parentName:"p"},"Read only"),": true"),Object(m.mdx)("h3",{id:"imagefillmimetype--string"},Object(m.mdx)("em",{parentName:"h3"},"imageFill.mimeType : ",Object(m.mdx)("inlineCode",{parentName:"em"},"string"))),Object(m.mdx)("p",null,"Format the image data was originally encoded in, such as ",Object(m.mdx)("inlineCode",{parentName:"p"},"image/gif")," or ",Object(m.mdx)("inlineCode",{parentName:"p"},"image/jpeg"),"."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",Object(m.mdx)("a",Object(n.a)({parentName:"p"},{href:"#ImageFill"}),Object(m.mdx)("inlineCode",{parentName:"a"},"ImageFill")),"\n",Object(m.mdx)("strong",{parentName:"p"},"Read only"),": true"),Object(m.mdx)("h3",{id:"imagefillislinkedcontent--boolean"},Object(m.mdx)("em",{parentName:"h3"},"imageFill.isLinkedContent : ",Object(m.mdx)("inlineCode",{parentName:"em"},"boolean"))),Object(m.mdx)("p",null,"True if the image comes from a link to an external resource, such as Creative Cloud Libraries."),Object(m.mdx)("p",null,Object(m.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",Object(m.mdx)("a",Object(n.a)({parentName:"p"},{href:"#ImageFill"}),Object(m.mdx)("inlineCode",{parentName:"a"},"ImageFill")),"\n",Object(m.mdx)("strong",{parentName:"p"},"Read only"),": true"))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-image-fill-md-c3f0b77e75e981116a30.js.map