(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{P9qV:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return i})),r.d(t,"default",(function(){return d}));var a=r("wx14"),n=r("zLVn"),o=(r("q1tI"),r("7ljp")),s=r("ndZU"),i=(r("qKvR"),{}),c={_frontmatter:i},l=s.a;function d(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.mdx)(l,Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"file-io"},"File I/O"),Object(o.mdx)("h2",{id:"overview"},"Overview"),Object(o.mdx)("p",null,"File and folder access is an important part of many plugins. Files and folders can exist in these locations:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Inside the plugin folder itself."),Object(o.mdx)("li",{parentName:"ul"},"In temporary plugin-specific storage."),Object(o.mdx)("li",{parentName:"ul"},"External to the plugin, anywhere in the filesystem. Because of sandboxing requirements of recent OS releases, UXP does not allow arbitrary access to any file on the host system. Therefore, these files are accessed by making a request of the user (by showing a file-picker dialog) and obtaining a ",Object(o.mdx)("em",{parentName:"li"},"token"),"."),Object(o.mdx)("li",{parentName:"ul"},"In a UXP-specific secure store; this is for for secure files that contain sensitive information. See ",Object(o.mdx)("em",{parentName:"li"},"Secure Storage"),", below."),Object(o.mdx)("li",{parentName:"ul"},"On the network (not covered here; see the ",Object(o.mdx)("a",Object(a.a)({parentName:"li"},{href:"/uxp-xd/guides/uxp_guide/uxp-misc/network-io/"}),"Networking")," section.)")),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},"In the near future, UXP will provide a permissions system for persistent tokens so developers won’t need user interaction for the same path every session. For now, if you need constant access to a location to write and read files, please use the UXP sanctioned locations for your plugin, accessed by the methods listed in the FileSystemProvider object of UXP.")),Object(o.mdx)("h2",{id:"secure-storage"},"Secure Storage"),Object(o.mdx)("p",null,"Sometimes a plugin needs to store sensitive information such as external site tokens or passwords. For these cases, UXP offers Secure Storage, protected storage which can be used to store sensitive data\nper plugin."),Object(o.mdx)("p",null,"SecureStorage takes a key-value pair and encrypts the value before being\nstored. After encryption, it stores the key and the encrypted value pair. When the value\nis requested with an associated key, it's retrieved after being decrypted. Please note\nthat ",Object(o.mdx)("em",{parentName:"p"},"the key is not encrypted"),", thus it's not protected by the cryptographic operation."),Object(o.mdx)("p",null,"There are some caveats for using SecureStorage:"),Object(o.mdx)("ol",null,Object(o.mdx)("li",{parentName:"ol"},Object(o.mdx)("p",{parentName:"li"},"SecureStorage is not appropriate for sensitive data which should be kept secret from the current user. SecureStorage is protected under the current user's account credentials. This means the encrypted data can be at risk of being decrypted with the current user's privilege.")),Object(o.mdx)("li",{parentName:"ol"},Object(o.mdx)("p",{parentName:"li"},"Data in SecureStorage can be lost for various reasons. For an example, the user could uninstall the host application and delete the secure storage. Or, the cryptographic information used by the secure storage could be damaged by the user accidentally. This will result in loss of data without the secure storage being removed.")),Object(o.mdx)("li",{parentName:"ol"},Object(o.mdx)("p",{parentName:"li"},"SecureStorage should be regarded as a cache rather than a persistent storage. Data in SecureStorage should be able to be regenerated from plugins after the time of loss."))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-guides-uxp-misc-file-access-index-md-ebb33cdb28df7a0a7369.js.map