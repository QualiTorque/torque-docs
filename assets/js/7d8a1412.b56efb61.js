"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[3169],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4761:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:3,title:"Terraform GKE Authentication"},c=void 0,i={unversionedId:"torque-agent/service-accounts-for-gcp",id:"torque-agent/service-accounts-for-gcp",title:"Terraform GKE Authentication",description:"If you're using an GKE cluster as your agent, and you want to run Terraform that deploys resources on GCP, you can use Workload Identity to do the authentication and permissions between the pod and the GCP account where the resources will be created.",source:"@site/docs/torque-agent/service-accounts-for-gcp.md",sourceDirName:"torque-agent",slug:"/torque-agent/service-accounts-for-gcp",permalink:"/torque-agent/service-accounts-for-gcp",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/torque-agent/service-accounts-for-gcp.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Terraform GKE Authentication"},sidebar:"torqueSidebar",previous:{title:"Terraform AKS Authentication",permalink:"/torque-agent/service-accounts-for-azure"},next:{title:"Kubernetes Authentication",permalink:"/torque-agent/Install-and-connect-self-hosted-agent"}},u={},s=[],l={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you're using an GKE cluster as your agent, and you want to run Terraform that deploys resources on GCP, you can use ",(0,o.kt)("em",{parentName:"p"},"Workload Identity")," to do the authentication and permissions between the pod and the GCP account where the resources will be created."),(0,o.kt)("p",null,"The process is described in details ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity#gcloud_3"},"here"),"."))}d.isMDXComponent=!0}}]);