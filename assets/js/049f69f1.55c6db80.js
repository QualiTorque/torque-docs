"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[114],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return g}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(o),g=r,h=d["".concat(p,".").concat(g)]||d[g]||l[g]||a;return o?n.createElement(h,i(i({ref:t},u),{},{components:o})):n.createElement(h,i({ref:t},u))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6289:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),i=["components"],s={sidebar_position:5,title:"GitLab Source Control"},p=void 0,c={unversionedId:"admin-guide/source-control-gitlab",id:"admin-guide/source-control-gitlab",title:"GitLab Source Control",description:"Torque supports connecting asset/blueprint repositories on GitLab out of the box. To connect a repository, you must have access to the repository and grant Torque permission to the repository's organization, as explained below. For details about connecting a repository, see Connect Your Asset Repository. You should be able to sign in with an account on any one of these online services and immediately get going with connecting asset repositories and launching environments.",source:"@site/docs/admin-guide/source-control-gitlab.md",sourceDirName:"admin-guide",slug:"/admin-guide/source-control-gitlab",permalink:"/admin-guide/source-control-gitlab",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/admin-guide/source-control-gitlab.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"GitLab Source Control"},sidebar:"torqueSidebar",previous:{title:"GitHub Source Control",permalink:"/admin-guide/source-control-github"},next:{title:"Architecture",permalink:"/deployment-architecture/Architecture"}},u={},l=[{value:"Ensure the Torque application was added to the GitLab organization you&#39;re connecting",id:"ensure-the-torque-application-was-added-to-the-gitlab-organization-youre-connecting",level:2},{value:"Ensure your organization has granted access to Torque",id:"ensure-your-organization-has-granted-access-to-torque",level:2}],d={toc:l};function g(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Torque supports connecting asset/blueprint repositories on GitLab out of the box. To connect a repository, you must have access to the repository and grant Torque permission to the repository's organization, as explained below. For details about connecting a repository, see ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/Connect%20your%20asset%20repository"},"Connect Your Asset Repository"),". You should be able to sign in with an account on any one of these online services and immediately get going with connecting asset repositories and launching environments."),(0,a.kt)("h2",{id:"ensure-the-torque-application-was-added-to-the-gitlab-organization-youre-connecting"},"Ensure the Torque application was added to the GitLab organization you're connecting"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("a",{parentName:"li",href:"https://gitlab.com/-/profile/applications"},"https://gitlab.com/-/profile/applications"),"."),(0,a.kt)("li",{parentName:"ol"},"Scroll down to the ",(0,a.kt)("strong",{parentName:"li"},"Authorized application")," section and make sure ",(0,a.kt)("strong",{parentName:"li"},"Qtorque.io-Social")," has the ",(0,a.kt)("strong",{parentName:"li"},"openid profile email read_user")," scope.")),(0,a.kt)("h2",{id:"ensure-your-organization-has-granted-access-to-torque"},"Ensure your organization has granted access to Torque"),(0,a.kt)("p",null,"When connecting a repository, Torque installs an OAuth app called ",(0,a.kt)("strong",{parentName:"p"},"Qtorque")," on the organization. This app provides Torque with the necessary permissions to the organization's repositories. If Torque doesn't have access, you will be prompted to grant the proper authorizations when connecting the asset repository. The approved applications are listed in the ",(0,a.kt)("a",{parentName:"p",href:"https://gitlab.com/-/profile/applications"},"GitLab Applications")," page. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In Torque, go to the space's ",(0,a.kt)("strong",{parentName:"p"},"Settings > Repositories")," area and connect the repository.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Authorize the organization. "),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"Locale Dropdown",src:o(3966).Z,width:"502",height:"694"})))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("a",{parentName:"p",href:"https://gitlab.com/-/profile/applications"},"GitLab Applications")," and make sure the Torque application has been authorized."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"Locale Dropdown",src:o(6453).Z,width:"637",height:"265"})," ")),(0,a.kt)("p",{parentName:"li"},"  At this point, the Torque app is installed in the organization with the necessary permissions. "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you're not an administrator in the organization, ask the administrator to grant access to the app in the ",(0,a.kt)("a",{parentName:"li",href:"https://gitlab.com/-/profile/applications"},"GitLab Applications")," page. "),(0,a.kt)("li",{parentName:"ul"},"If you already authorized the ",(0,a.kt)("strong",{parentName:"li"},"Qtorque")," app without also granting access to a group with repositories you want to connect, make sure your GitLab user is added to that group (",(0,a.kt)("strong",{parentName:"li"},"Guest")," role is enough)."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Return to Torque and continue setting up the connection."))))}g.isMDXComponent=!0},3966:function(e,t,o){t.Z=o.p+"assets/images/gitlab-1-776558d7595d71dfdc80ce9564977a9a.png"},6453:function(e,t,o){t.Z=o.p+"assets/images/gitlab-2-9b071a90ee7f4f43248321a42d03c4ee.png"}}]);