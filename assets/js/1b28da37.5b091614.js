"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[9178],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>g});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function A(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=A(e,["components","mdxType","originalType","parentName"]),p=c(o),d=r,g=p["".concat(s,".").concat(d)]||p[d]||l[d]||a;return o?n.createElement(g,i(i({ref:t},u),{},{components:o})):n.createElement(g,i({ref:t},u))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var A={};for(var s in t)hasOwnProperty.call(t,s)&&(A[s]=t[s]);A.originalType=e,A[p]="string"==typeof e?e:r,i[1]=A;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},8687:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>A,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:30,title:"GitHub Source Control"},i=void 0,A={unversionedId:"admin-guide/source-control/source-control-github",id:"admin-guide/source-control/source-control-github",title:"GitHub Source Control",description:"Torque supports connecting asset/blueprint repositories on GitHub out of the box. However, to connect a repository, you must have access to the repository and grant Torque permission to the repository's organization, as explained below. For details about connecting a repository, see Discover Your Assets. You should be able to sign in with an account on any one of these online services and immediately get going with connecting asset repositories and launching environments.",source:"@site/docs/admin-guide/source-control/source-control-github.md",sourceDirName:"admin-guide/source-control",slug:"/admin-guide/source-control/source-control-github",permalink:"/admin-guide/source-control/source-control-github",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/admin-guide/source-control/source-control-github.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"GitHub Source Control"},sidebar:"torqueSidebar",previous:{title:"BitBucket Source Control",permalink:"/admin-guide/source-control/source-control-bitbucket"},next:{title:"GitLab Source Control",permalink:"/admin-guide/source-control/source-control-gitlab"}},s={},c=[{value:"Ensure your account is added to the GitHub organization you&#39;re connecting",id:"ensure-your-account-is-added-to-the-github-organization-youre-connecting",level:2},{value:"Ensure your organization has granted access to Torque",id:"ensure-your-organization-has-granted-access-to-torque",level:2},{value:"Token expiration and revocation",id:"token-expiration-and-revocation",level:2}],u={toc:c},p="wrapper";function l(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Torque supports connecting asset/blueprint repositories on GitHub out of the box. However, to connect a repository, you must have access to the repository and grant Torque permission to the repository's organization, as explained below. For details about connecting a repository, see ",(0,r.kt)("a",{parentName:"p",href:"/getting-started/Discover%20Your%20Assets"},"Discover Your Assets"),". You should be able to sign in with an account on any one of these online services and immediately get going with connecting asset repositories and launching environments."),(0,r.kt)("p",null,"In this article:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#ensure-your-account-is-added-to-the-github-organization-youre-connecting"},"Ensure your account is added to the GitHub organization you're connecting")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#ensure-your-organization-has-granted-access-to-torque"},"Ensure your organization has granted access to Torque")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#token-expiration-and-revocation"},"Token expiration and revocation"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This article refers to the SAAS version of GitHub (github.com). If you're using self hosted GitHub Enterprise, check ",(0,r.kt)("a",{parentName:"strong",href:"/admin-guide/source-control/self-hosted-repositories/Overview"},"here")),"."),(0,r.kt)("h2",{id:"ensure-your-account-is-added-to-the-github-organization-youre-connecting"},"Ensure your account is added to the GitHub organization you're connecting"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/orgs/%7BYOUR_ORG%7D/people"},"https://github.com/orgs/{YOUR_ORG}/people"),"."),(0,r.kt)("li",{parentName:"ol"},"Make sure your user is listed in the organization. If not, make sure the user is added as a member with global read access.")),(0,r.kt)("h2",{id:"ensure-your-organization-has-granted-access-to-torque"},"Ensure your organization has granted access to Torque"),(0,r.kt)("p",null,"When connecting a repository, Torque installs an OAuth app called ",(0,r.kt)("strong",{parentName:"p"},"Torque Control Plane")," on the organization. This app provides Torque with the necessary permissions to the organization's repositories. If Torque doesn't have access, you will be prompted to grant the proper authorizations when connecting the asset repository. The approved applications are listed in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/settings/applications"},"GitHub Applications")," page. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/settings/applications"},"GitHub Applications"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Revoke any existing access to the ",(0,r.kt)("strong",{parentName:"p"},"Quali Torque")," app."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{alt:"Locale Dropdown",src:o(3679).Z,width:"702",height:"109"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In Torque, go to the space's ",(0,r.kt)("strong",{parentName:"p"},"Settings > Repositories")," area and connect the repository.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Authorize the organization. "),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{alt:"Locale Dropdown",src:o(3841).Z,width:"526",height:"726"}))),(0,r.kt)("p",{parentName:"li"},"At this point, the Torque app is installed in the organization without permissions. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter your account's password and confirm the action. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you're not an administrator in the organization, ask the administrator to grant access to the app in the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/settings/applications"},"GitHub Applications")," page. "),(0,r.kt)("li",{parentName:"ul"},"If you already authorized the ",(0,r.kt)("strong",{parentName:"li"},"Torque Control Plane")," app without also granting access to an organization with repositories you want to connect, click the app's name in the GitHub Applications page, and in the ",(0,r.kt)("strong",{parentName:"li"},"Organization access")," section, click the organization's ",(0,r.kt)("strong",{parentName:"li"},"Request")," button.",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{alt:"Locale Dropdown",src:o(5941).Z,width:"918",height:"803"}))))),(0,r.kt)("p",{parentName:"li"},"The Torque app is granted the necessary permissions and the repository is connected.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Return to Torque and continue setting up the connection."))),(0,r.kt)("h2",{id:"token-expiration-and-revocation"},"Token expiration and revocation"),(0,r.kt)("p",null,"GitHub imposes a limit on the number of tokens an application can create for the same user, and will revoke the oldest one once this limit is passed. For details, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/token-expiration-and-revocation#token-revoked-due-to-excess-of-tokens-for-an-oauth-app-with-the-same-scope"},"GitHub token expiration and revocation policy"),"."))}l.isMDXComponent=!0},5941:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/request-org-access-27249109337f4b1a038113a9eed954bd.png"},3679:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/png;base64,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"},3841:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/torque-access-22dd230d5785c716b83ce987d305c371.png"}}]);