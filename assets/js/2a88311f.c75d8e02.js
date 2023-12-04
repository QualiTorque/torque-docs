"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[9491],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),k=o,d=u["".concat(l,".").concat(k)]||u[k]||m[k]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3,title:"Actions and workflows"},i=void 0,s={unversionedId:"environment-services/Actions and workflows",id:"environment-services/Actions and workflows",title:"Actions and workflows",description:"Resource  and Workflows",source:"@site/docs/environment-services/Actions and workflows.md",sourceDirName:"environment-services",slug:"/environment-services/Actions and workflows",permalink:"/environment-services/Actions and workflows",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/environment-services/Actions and workflows.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Actions and workflows"},sidebar:"torqueSidebar",previous:{title:"Drift & Update",permalink:"/environment-services/drift-and-update"},next:{title:"Cost tracking",permalink:"/environment-services/Cost"}},l={},c=[{value:"Resource  and Workflows",id:"resource--and-workflows",level:2},{value:"Overview",id:"overview",level:3},{value:"<strong>Actions</strong>",id:"actions",level:4},{value:"<strong>Workflows</strong>",id:"workflows",level:4},{value:"<strong>Invoke actions and workflows in the environment</strong>",id:"invoke-actions-and-workflows-in-the-environment",level:4}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"resource--and-workflows"},"Resource  and Workflows"),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("h4",{id:"actions"},(0,o.kt)("strong",{parentName:"h4"},"Actions")),(0,o.kt)("p",null,"Stopping cloud resources when they are not in use is a prudent practice that offers several benefits. First and foremost, it helps to optimize costs by preventing unnecessary expenditure on computing resources. Cloud services are typically billed on a pay-as-you-go model, so keeping instances running when they are idle contributes to higher expenses. Additionally, stopping unused resources promotes environmental sustainability by reducing overall energy consumption and the carbon footprint associated with data centers. From a security standpoint, inactive resources can be potential targets for unauthorized access or attacks, and shutting them down mitigates these risks. Moreover, resource termination enhances overall system performance by freeing up valuable computing resources for other critical tasks. In essence, the proactive management of cloud resources aligns with efficiency, cost-effectiveness, and environmental responsibility in the dynamic landscape of cloud computing."),(0,o.kt)("p",null,"Torque provides a built-in set of ",(0,o.kt)("strong",{parentName:"p"},"actions")," you can run on specific cloud resources in the environment to stop them and gain the aforementioned benefits. The built-in actions currently available out of the box by Torque are:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Virtual Machines")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Power on")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Power off")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Restart")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Connect")," - a special kind of action which creates an RDP or SSH connection to the VM directly from Torque, allowing environment users to access env vms directly.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Database Servers")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Stop")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Start"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kubernetes Clusters")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Pause")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Resume"))),(0,o.kt)("h4",{id:"workflows"},(0,o.kt)("strong",{parentName:"h4"},"Workflows")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Workflows")," take actions another step forward. They are scheduled automations that run on all resources from the same type in the environment.\nExamples of workflows include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Power-off all VMs in the environment every day at 6PM"),(0,o.kt)("li",{parentName:"ul"},"Pause (scale to minimum) the dev K8s cluster every weekend")),(0,o.kt)("p",null,"To learn how to create workflows in your Torque account, click ",(0,o.kt)("a",{parentName:"p",href:"/governance/workflows"},"here"),"."),(0,o.kt)("h4",{id:"invoke-actions-and-workflows-in-the-environment"},(0,o.kt)("strong",{parentName:"h4"},"Invoke actions and workflows in the environment")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Switch to ",(0,o.kt)("strong",{parentName:"p"},"Resources")," view."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{alt:"Locale Dropdown",src:n(9090).Z,width:"1002",height:"500"})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click a resource tile."),(0,o.kt)("p",{parentName:"li"},"The resource's ",(0,o.kt)("strong",{parentName:"p"},"actions")," as well as attributes and tags are displayed in the left pane.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Hover over the relevant action and click ",(0,o.kt)("strong",{parentName:"p"},"Run"),"."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{alt:"Locale Dropdown",src:n(4854).Z,width:"1693",height:"372"})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the action's name to see its progress.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Workflows")," to see which workflows apply to your environment. Note that you can also manually run the workflows ahead of their scheduled run time."))))}m.isMDXComponent=!0},4854:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/resource-actions-233366e8471855c6fccf941f75fdb898.png"},9090:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/resources-view-a6e2ce615f9300df70bf9afa25888f11.png"}}]);