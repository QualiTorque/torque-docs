"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[3853],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(t),f=a,v=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return t?r.createElement(v,l(l({ref:n},s),{},{components:t})):r.createElement(v,l({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1012:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],i={sidebar_position:10,title:"Approval Channels"},c=void 0,p={unversionedId:"governance/approval-channels",id:"governance/approval-channels",title:"Approval Channels",description:"Torque role: Account admin",source:"@site/docs/governance/approval-channels.md",sourceDirName:"governance",slug:"/governance/approval-channels",permalink:"/governance/approval-channels",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/governance/approval-channels.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Approval Channels"},sidebar:"torqueSidebar",previous:{title:"Configuring Cost for Kubernetes",permalink:"/governance/cost-tracking/configuring-cost-k8s"},next:{title:"Audit Log Overview",permalink:"/governance/audit-log/audit-log-overview"}},s={},u=[],m={toc:u};function f(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Torque role: Account admin"),(0,o.kt)("p",null,"Approval channels define the users who can approve environment launch requests. An approval channel is basically a list of email addresses of users. Currently, Torque supports two approval channels - Teams and Email."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To create an approval channel:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("strong",{parentName:"li"},"Administration > Approval Channels"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add Channel"),"."),(0,o.kt)("li",{parentName:"ol"},"Give the approval channel a ",(0,o.kt)("strong",{parentName:"li"},"Name")," and optionally a ",(0,o.kt)("strong",{parentName:"li"},"Description"),"."),(0,o.kt)("li",{parentName:"ol"},"Select the channel - Teams or Email."),(0,o.kt)("li",{parentName:"ol"},"For Teams, enter the ",(0,o.kt)("strong",{parentName:"li"},"Webhook address"),"."),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Approvers"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save"),".")))}f.isMDXComponent=!0}}]);