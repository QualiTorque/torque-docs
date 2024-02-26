"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[5074],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,y=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(y,l(l({ref:t},p),{},{components:r})):n.createElement(y,l({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9329:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:1,title:"The layout yaml"},l=void 0,o={unversionedId:"blueprint-designer-guide/layouts/layouts",id:"blueprint-designer-guide/layouts/layouts",title:"The layout yaml",description:"With the layout yaml file, you can customize the way end users see resources and their properties, both on the table view as well as the resource cards (catalog).",source:"@site/docs/blueprint-designer-guide/layouts/layouts.md",sourceDirName:"blueprint-designer-guide/layouts",slug:"/blueprint-designer-guide/layouts/",permalink:"/blueprint-designer-guide/layouts/",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/blueprint-designer-guide/layouts/layouts.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"The layout yaml"},sidebar:"torqueSidebar",previous:{title:"The Blueprint Grain",permalink:"/blueprint-designer-guide/blueprints/blueprint-grain"},next:{title:"Auto-generated Blueprints",permalink:"/blueprint-designer-guide/Autogenerated Blueprints"}},u={},s=[{value:"Referencing layout for a blueprint",id:"referencing-layout-for-a-blueprint",level:2},{value:"Layout structure",id:"layout-structure",level:2}],p={toc:s},c="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"With the layout yaml file, you can customize the way end users see resources and their properties, both on the table view as well as the resource cards (catalog)."),(0,a.kt)("p",null,"Example use-cases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hide specific resources from the end users view due to security considerations or simplicity"),(0,a.kt)("li",{parentName:"ul"},"Only show specific resources"),(0,a.kt)("li",{parentName:"ul"},"Customize the card view of a resource - the icon and attributes which will be shown")),(0,a.kt)("h2",{id:"referencing-layout-for-a-blueprint"},"Referencing layout for a blueprint"),(0,a.kt)("p",null,"Layout is a separate yaml that will be referenced from the blueprint yaml like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec_version: 2\ndescription: ...\nlayout:\n  source:\n    store:\n    path:\n  exclude-from-layout:  # optional\n    - grain_name_1\n    - grain_name_2\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("strong",{parentName:"p"},"layout")," element is where the blueprint references the layout that will be applied to environments created from it."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"source")," is similar to the source element in the blueprint yaml. See ",(0,a.kt)("a",{parentName:"li",href:"/blueprint-designer-guide/blueprints/blueprints-yaml-structure#source"},"source")," for more details."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("strong",{parentName:"p"},"exclude-from-layout")," element is optional, use it in case you need to apply the layout only to part of the grains but not all of them."))),(0,a.kt)("h2",{id:"layout-structure"},"Layout structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"my_layout.yaml","my_layout.yaml":!0},'\nkind: layout\ndescription: "layout for ..."\n\ntable:\n  hide:\n    resource-types:\n      - "aws_e2_instance"\n      - "aws_bucket"\n      - "AWS::BUCKET"\n      - "*"\n')),(0,a.kt)("p",null,'The main entries in the file are the "table" and "catalog" - each affecting the relevant view. Currently, only "table" is supported, but resources hidden will also be hidden from the resource cards.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hide"),": resource types listed under hide will be invisible in the relevant view."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"resource-types"),' is a list of strings which must be equivalent to the resource type of the resource in the grain. Note that this depends on the IaC technology which provisioned the resource. For example, an EC2 instance provisioned by terraform will have the type "aws_ec2_instance" while the same EC2 if provisioned by cloudformation will have the type "AWS::EC2::Instance".'),(0,a.kt)("li",{parentName:"ul"},'"*" is a legitimate value, means to hide all resources from the table view.')),(0,a.kt)("p",null,"Users with VIEW_ENVIRONMENT_INFRASTRUCTURE permission set to true (by default, all users) can turn off the layout from the different views by using the toggle:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"Locale Dropdown",src:r(9420).Z,width:"1132",height:"375"}))))}d.isMDXComponent=!0},9420:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/layouts_toggle-18199a13b567417f42e3a43578df8891.png"}}]);