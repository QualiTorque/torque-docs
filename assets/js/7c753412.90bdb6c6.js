"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[2318],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),u=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(o),g=n,m=l["".concat(c,".").concat(g)]||l[g]||d[g]||i;return o?r.createElement(m,a(a({ref:t},p),{},{components:o})):r.createElement(m,a({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:n,a[1]=s;for(var u=2;u<i;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}g.displayName="MDXCreateElement"},6489:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=o(7462),n=(o(7294),o(3905));const i={sidebar_position:3,title:"Azure Repos Source Control"},a=void 0,s={unversionedId:"admin-guide/source-control/source-control-azure-repos",id:"admin-guide/source-control/source-control-azure-repos",title:"Azure Repos Source Control",description:"Torque supports connecting asset/blueprint repositories on Azure Repos out of the box. However, to connect a repository, you must have access to the repository and grant Torque permission to the repository's organization, as explained below. For details about connecting a repository, see Discover Your Assets. You should be able to sign in with an account on any one of these online services and immediately get going with connecting asset repositories and launching environments.",source:"@site/docs/admin-guide/source-control/source-control-azure-repos.md",sourceDirName:"admin-guide/source-control",slug:"/admin-guide/source-control/source-control-azure-repos",permalink:"/admin-guide/source-control/source-control-azure-repos",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/admin-guide/source-control/source-control-azure-repos.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Azure Repos Source Control"},sidebar:"torqueSidebar",previous:{title:"Notifications",permalink:"/admin-guide/notifications"},next:{title:"BitBucket Source Control",permalink:"/admin-guide/source-control/source-control-bitbucket"}},c={},u=[],p={toc:u},l="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(l,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Torque supports connecting asset/blueprint repositories on Azure Repos out of the box. However, to connect a repository, you must have access to the repository and grant Torque permission to the repository's organization, as explained below. For details about connecting a repository, see ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/Discover%20Your%20Assets"},"Discover Your Assets"),". You should be able to sign in with an account on any one of these online services and immediately get going with connecting asset repositories and launching environments."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"This article refers to the SAAS version of Azure Repos. If you're using Azure Repos behind your firewall, check ",(0,n.kt)("a",{parentName:"strong",href:"/admin-guide/source-control/self-hosted-repositories/Overview"},"here")),"."),(0,n.kt)("p",null,"When connecting a repository, Torque\u2019s OAuth app (",(0,n.kt)("strong",{parentName:"p"},"QTorque Portal"),") asks for permissions to access repositories on your organization.\nIf Torque doesn't have access, you will be prompted to grant the proper authorizations when connecting the asset repository. The approved applications are listed in the Azure Applications page (",(0,n.kt)("a",{parentName:"p",href:"https://dev.azure.com/%7Byou_org%7D/_usersSettings/authorizations"},"https://dev.azure.com/{you_org}/_usersSettings/authorizations"),")."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In Torque, go to the space's Settings > Repositories area and connect the repository.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Authorize the organization."))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("img",{alt:"Locale Dropdown",src:o(6597).Z,width:"564",height:"461"}))),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Go to Azure Applications (see above) and make sure the Torque application has been authorized.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("img",{alt:"Locale Dropdown",src:o(4992).Z,width:"611",height:"81"}))),(0,n.kt)("p",null,"At this point, the Torque app was given the necessary permissions to the organization.\n4.\tReturn to Torque and continue setting up the connection."))}d.isMDXComponent=!0},4992:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/azure-grant-2-81dbc283ad5562ebb2a2673e5b47699c.png"},6597:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/azure-repo-grant-9aef1917142f0e884c5e5a49f76e519e.png"}}]);