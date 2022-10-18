"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[12],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2788:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],u={sidebar_position:16,title:"Blueprint Policies"},l=void 0,c={unversionedId:"blueprint-designer-guide/Policies",id:"blueprint-designer-guide/Policies",title:"Blueprint Policies",description:"As the blueprint designer, you can define the blueprint's max duration or allow it to run indefinitely, to support scenarios that deploy an environment that must be always online, or delivers a static cloud resource.",source:"@site/docs/blueprint-designer-guide/Policies.md",sourceDirName:"blueprint-designer-guide",slug:"/blueprint-designer-guide/Policies",permalink:"/blueprint-designer-guide/Policies",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/blueprint-designer-guide/Policies.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16,title:"Blueprint Policies"},sidebar:"torqueSidebar",previous:{title:"Terraform Authentication on AKS",permalink:"/blueprint-designer-guide/service-accounts-for-azure"},next:{title:"REST API",permalink:"/rest-api/"}},s={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As the blueprint designer, you can define the blueprint's max duration or allow it to run indefinitely, to support scenarios that deploy an environment that must be always online, or delivers a static cloud resource."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To set the blueprint's policy:")," "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},'"Blueprints')," page, clic the blueprint's more actions menu and select ",(0,o.kt)("strong",{parentName:"li"},"Policies"),". "),(0,o.kt)("li",{parentName:"ol"},"Set the max duration or select ",(0,o.kt)("strong",{parentName:"li"},"Unlimited")," to allow the environment end user to run the environment indefinitely.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": You can end or extend the environment at any time, regardless of its runtime policy."))}f.isMDXComponent=!0}}]);