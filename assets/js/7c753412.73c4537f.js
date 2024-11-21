"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[2318],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var A=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);t&&(A=A.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,A)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,A,r=function(e,t){if(null==e)return{};var o,A,r={},n=Object.keys(e);for(A=0;A<n.length;A++)o=n[A],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(A=0;A<n.length;A++)o=n[A],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=A.createContext({}),u=function(e){var t=A.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=u(e.components);return A.createElement(s.Provider,{value:t},e.children)},c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return A.createElement(A.Fragment,{},t)}},g=A.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(o),g=r,d=c["".concat(s,".").concat(g)]||c[g]||l[g]||n;return o?A.createElement(d,a(a({ref:t},p),{},{components:o})):A.createElement(d,a({ref:t},p))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,a=new Array(n);a[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,a[1]=i;for(var u=2;u<n;u++)a[u]=o[u];return A.createElement.apply(null,a)}return A.createElement.apply(null,o)}g.displayName="MDXCreateElement"},6489:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var A=o(7462),r=(o(7294),o(3905));const n={sidebar_position:3,title:"Azure Repos Source Control"},a=void 0,i={unversionedId:"admin-guide/source-control/source-control-azure-repos",id:"admin-guide/source-control/source-control-azure-repos",title:"Azure Repos Source Control",description:"Torque supports connecting asset/blueprint repositories on Azure Repos out of the box. However, to connect a repository, you must have access to the repository and grant Torque permission to the repository's organization, as explained below. For details about connecting a repository, see Discover Your Assets. You should be able to sign in with an account on any one of these online services and immediately get going with connecting asset repositories and launching environments.",source:"@site/docs/admin-guide/source-control/source-control-azure-repos.md",sourceDirName:"admin-guide/source-control",slug:"/admin-guide/source-control/source-control-azure-repos",permalink:"/admin-guide/source-control/source-control-azure-repos",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/admin-guide/source-control/source-control-azure-repos.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Azure Repos Source Control"},sidebar:"torqueSidebar",previous:{title:"GitLab Source Control",permalink:"/admin-guide/source-control/source-control-gitlab"},next:{title:"BitBucket Source Control",permalink:"/admin-guide/source-control/source-control-bitbucket"}},s={},u=[{value:"Troubleshooting",id:"troubleshooting",level:4}],p={toc:u},c="wrapper";function l(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,A.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Torque supports connecting asset/blueprint repositories on Azure Repos out of the box. However, to connect a repository, you must have access to the repository and grant Torque permission to the repository's organization, as explained below. For details about connecting a repository, see ",(0,r.kt)("a",{parentName:"p",href:"/getting-started/Discover%20Your%20Assets"},"Discover Your Assets"),". You should be able to sign in with an account on any one of these online services and immediately get going with connecting asset repositories and launching environments."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This article refers to the SAAS version of Azure Repos. If you're using Azure Repos behind your firewall, check ",(0,r.kt)("a",{parentName:"strong",href:"/admin-guide/source-control/Self%20Hosted%20Repositories/overview"},"here")),"."),(0,r.kt)("p",null,"When connecting a repository, Torque\u2019s OAuth app (",(0,r.kt)("strong",{parentName:"p"},"QTorque Portal"),") asks for permissions to access repositories on your organization.\nIf Torque doesn't have access, you will be prompted to grant the proper authorizations when connecting the asset repository. The approved applications are listed in the Azure Applications page (",(0,r.kt)("a",{parentName:"p",href:"https://dev.azure.com/%7Byou_org%7D/_usersSettings/authorizations"},"https://dev.azure.com/{you_org}/_usersSettings/authorizations"),")."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In Torque, go to the space's Settings > Repositories area and connect the repository. Note that the repository URL should be in the correct format: ",(0,r.kt)("a",{parentName:"p",href:"https://dev.azure.com/%7Borg_name%7D/%7Bproject_name%7D/_git/%7Brepo_name%7D"},"https://dev.azure.com/{org_name}/{project_name}/_git/{repo_name}"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Authorize the organization."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{alt:"Locale Dropdown",src:o(6597).Z,width:"564",height:"461"}))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Go to Azure Applications (see above) and make sure the Torque application has been authorized.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{alt:"Locale Dropdown",src:o(4992).Z,width:"611",height:"81"}))),(0,r.kt)("p",null,"At this point, the Torque app was given the necessary permissions to the organization.\n4.\tReturn to Torque and continue setting up the connection."),(0,r.kt)("h4",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"In some cases, repository access might be restricted or limited due to several seasons. Following the below steps and retry to onboard your repository once you apply the changes."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure your Azure DevOps instance is open for accepting external communication - make sure no security/networking rule is applied between Torque and Azure DevOps.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'In the Azure DevOps security organization settings - make sure that "Third-party application access via OAuth" is enabled'),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{alt:"Troubleshooting",src:o(3797).Z,width:"554",height:"210"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'In the Azure DevOps security organization settings - make sure that "IP conditional access" is turned off.'),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{alt:"Troubleshooting",src:o(8516).Z,width:"542",height:"115"}))))))}l.isMDXComponent=!0},3797:(e,t,o)=>{o.d(t,{Z:()=>A});const A="data:image/png;base64,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"},8516:(e,t,o)=>{o.d(t,{Z:()=>A});const A=o.p+"assets/images/ado_access2-13fb1e9a5a3b7132e1be71dc1a97dd3e.png"},4992:(e,t,o)=>{o.d(t,{Z:()=>A});const A=o.p+"assets/images/azure-grant-2-81dbc283ad5562ebb2a2673e5b47699c.png"},6597:(e,t,o)=>{o.d(t,{Z:()=>A});const A=o.p+"assets/images/azure-repo-grant-9aef1917142f0e884c5e5a49f76e519e.png"}}]);