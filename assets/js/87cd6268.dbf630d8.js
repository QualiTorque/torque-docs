"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[5378],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7859:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:36,title:"Self-managed Source Control"},i=void 0,s={unversionedId:"admin-guide/source-control/source-managed-self-service",id:"admin-guide/source-control/source-managed-self-service",title:"Self-managed Source Control",description:"Torque supports connecting asset/blueprint repositories residing in a self-managed GitLab repository.",source:"@site/docs/admin-guide/source-control/source-managed-self-service.md",sourceDirName:"admin-guide/source-control",slug:"/admin-guide/source-control/source-managed-self-service",permalink:"/admin-guide/source-control/source-managed-self-service",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/admin-guide/source-control/source-managed-self-service.md",tags:[],version:"current",sidebarPosition:36,frontMatter:{sidebar_position:36,title:"Self-managed Source Control"},sidebar:"torqueSidebar",previous:{title:"GitLab Source Control",permalink:"/admin-guide/source-control/source-control-gitlab"},next:{title:"SSO Configuration",permalink:"/admin-guide/sso"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Torque supports connecting asset/blueprint repositories residing in a self-managed GitLab repository. "),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GitLab access token with no expiration date and ",(0,o.kt)("strong",{parentName:"li"},"read.api")," and ",(0,o.kt)("strong",{parentName:"li"},"read.repository")," permission scopes.",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{alt:"Locale Dropdown",src:r(3113).Z,width:"1235",height:"746"}))))),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create Provider via Torque REST API."),(0,o.kt)("p",{parentName:"li"}," Post: ",(0,o.kt)("a",{parentName:"p",href:"http://portal.qtorque.io/api/settings/repository_providers"},"http://portal.qtorque.io/api/settings/repository_providers")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'{\n  "name":"gitlab-1",\n  "type":"gitLabEnterprise",\n  "details": {\n    "token":"NzcmESA2NjQ4MjUzOiCO87F2eTXL9TbHeWpeZO3p3GS9",\n    "base_url": "http://private.mygitlab.org/"\n  },\n  "repos": []\n}\n')),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name"),": Display name of repository"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"type"),": Value representing the type of repository provider (",(0,o.kt)("strong",{parentName:"li"},"gitlabEnterprise")," in this case)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"token"),": Private access token (see ",(0,o.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"base_url"),": __Schema://Host:Port/ of the GitLab server (include port if required)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"username"),": Owner of the token username. (Not required for GitLab)"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Connect the repository as an asset repository to the space and discover the suitable assets. For details, see ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/Discover%20Your%20Assets"},"Discover Your Assets"),"."))))}m.isMDXComponent=!0},3113:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/gitlab-reqs-255706ef30d1f1857947e118b28f0c1f.png"}}]);