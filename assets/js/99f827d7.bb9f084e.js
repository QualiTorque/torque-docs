"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[1934],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),o=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=o(a),d=n,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return a?r.createElement(k,s(s({ref:t},m),{},{components:a})):r.createElement(k,s({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,s[1]=l;for(var o=2;o<i;o++)s[o]=a[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7125:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:2,title:"Parameters"},s=void 0,l={unversionedId:"admin-guide/params",id:"admin-guide/params",title:"Parameters",description:"The Torque parameter store is a repository of key-value pairs, which can be used and reused in blueprint YAMLs across all spaces in Torque. Two types of parameters are supported:",source:"@site/docs/admin-guide/params.md",sourceDirName:"admin-guide",slug:"/admin-guide/params",permalink:"/admin-guide/params",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/admin-guide/params.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Parameters"},sidebar:"torqueSidebar",previous:{title:"Appearance, Rebranding and Announcements",permalink:"/admin-guide/appearance"},next:{title:"Input Sources",permalink:"/admin-guide/input-sources"}},p={},o=[{value:"Creating Account-level parameters",id:"creating-account-level-parameters",level:2},{value:"Creating space-level parameters",id:"creating-space-level-parameters",level:2}],m={toc:o},c="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Torque parameter store is a repository of key-value pairs, which can be used and reused in blueprint YAMLs across all spaces in Torque. Two types of parameters are supported: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Account-level parameters are defined by the Torque account admin and can be used across all spaces. As such, these parameters are typically used to store data that applies to multiple spaces."),(0,n.kt)("li",{parentName:"ul"},"Space-level parameters are defined by space admins and apply to specific spaces. ")),(0,n.kt)("h2",{id:"creating-account-level-parameters"},"Creating Account-level parameters"),(0,n.kt)("p",null,"Torque role: Account admin"),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),(0,n.kt)("strong",{parentName:"h5"},"Important"))),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Modifying or deleting a parameter may cause blueprints that use the parameter to fail."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"To add an account-level parameter:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open the ",(0,n.kt)("strong",{parentName:"li"},"Administration")," and click ",(0,n.kt)("strong",{parentName:"li"},"Parameters"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add Parameter")," in the top right corner of the page."),(0,n.kt)("li",{parentName:"ol"},"Fill in the details:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Parameter Name"),": Display name for the parameter.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Parameter Name is case-insensitive."),(0,n.kt)("li",{parentName:"ul"},"Parameter Name may only contain URL-supported characters including letters, digits, underscores, dashes, etc."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Is Sensitive?"),": Determines whether this parameter value is sensitive and should be hidden from users"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Value"),": Parameter\u2019s value"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": Informative description of the parameter or value it contains"))),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Apply"),".\nThe parameter is stored in the parameter store and can be used in your blueprint YAMLs in the format: ",(0,n.kt)("inlineCode",{parentName:"li"},"{{.params.param-name}}"),". For details, see ",(0,n.kt)("a",{parentName:"li",href:"/blueprint-designer-guide/blueprints/blueprints-yaml-structure#parameterss"},"Parameters"),".")),(0,n.kt)("h2",{id:"creating-space-level-parameters"},"Creating space-level parameters"),(0,n.kt)("p",null,"Torque role: Space admin"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"To add a space-level parameter:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open your space, and click ",(0,n.kt)("strong",{parentName:"li"},"Parameters")," in the left pane. On this page, you can view all the account-level parameters that were defined by the account admin, and add space-specific parameters. "),(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("strong",{parentName:"li"},"Add Parameter")," button to add a new space-level parameter."),(0,n.kt)("li",{parentName:"ol"},"Fill in the details:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Parameter Name"),": Display name for the parameter.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Parameter Name is case-insensitive."),(0,n.kt)("li",{parentName:"ul"},"Parameter Name may only contain URL-supported characters including letters, digits, underscores, dashes, etc."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Is Sensitive?"),": Determines whether this parameter value is sensitive and should be hidden from users"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Value"),": Parameter\u2019s value"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": Informative description of the parameter or value it contains"))),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Apply"),".\nThe parameter is stored in the parameter store and can be used in your blueprint YAMLs in the format: ",(0,n.kt)("inlineCode",{parentName:"li"},"{{.params.param-name}}"),". For details, see ",(0,n.kt)("a",{parentName:"li",href:"/blueprint-designer-guide/blueprints/blueprints-yaml-structure#parameters"},"Parameters"),".")),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"A space-level parameter will take precedence over an account-level parameter with the same name"))))}u.isMDXComponent=!0}}]);