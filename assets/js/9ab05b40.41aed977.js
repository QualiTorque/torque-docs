"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[7875],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return g}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(t),g=i,v=p["".concat(u,".").concat(g)]||p[g]||d[g]||o;return t?r.createElement(v,a(a({ref:n},l),{},{components:t})):r.createElement(v,a({ref:n},l))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4038:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],c={sidebar_position:2,title:"Audit Log Overview"},u=void 0,s={unversionedId:"admin-guide/governance/audit-log/audit-log-overview",id:"admin-guide/governance/audit-log/audit-log-overview",title:"Audit Log Overview",description:"Torque provides integration with Elastic Stack, allowing you to easily monitor and audit your system users' behavior, investigate and remove security risks and vulnerabilities, and more. Once integrated, Torque begins capturing events and streams them to Elastic Stack for analytics, allowing you to gain visibility into key platform events within your account, identify the most active policies, significant changes in resource operations, or filter actions by user and space.",source:"@site/docs/admin-guide/governance/audit-log/audit-log-overview.md",sourceDirName:"admin-guide/governance/audit-log",slug:"/admin-guide/governance/audit-log/audit-log-overview",permalink:"/admin-guide/governance/audit-log/audit-log-overview",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/admin-guide/governance/audit-log/audit-log-overview.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Audit Log Overview"},sidebar:"torqueSidebar",previous:{title:"Approval Channels",permalink:"/admin-guide/governance/approval-channels"},next:{title:"Audit Log Configuration",permalink:"/admin-guide/governance/audit-log/audit-log-configuration"}},l={},d=[{value:"Licensing",id:"licensing",level:2}],p={toc:d};function g(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Torque provides integration with Elastic Stack, allowing you to easily monitor and audit your system users' behavior, investigate and remove security risks and vulnerabilities, and more. Once integrated, Torque begins capturing events and streams them to Elastic Stack for analytics, allowing you to gain visibility into key platform events within your account, identify the most active policies, significant changes in resource operations, or filter actions by user and space."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},'inputs:\n    {\n  "_index": "quali",\n  "_type": "_doc",\n  "_id": "E_TV54QBoWVq8-70aD22",\n  "_score": 1,\n  "_source": {\n    "name": "EnvironmentTerminationStarted",\n    "event_type": "environment",\n    "event_status": "success",\n    "scope": {\n      "environment": "u9FQhalUq6yh",\n      "space": "shai",\n      "account": "trial-e1a4eb56d"\n    },\n    "actor": {\n      "actor_type": "user",\n      "details": {\n        "user_email": shai.p@quali.com\n      }\n    },\n    "timestamp": "2022-12-06T14:27:08.6804874Z",\n    "traceId": "bc208caa38fd248f89dfcd87a7b5f8f1",\n    "data": {\n      "isForced": "False"\n    },\n    "errors": []\n  }\n')),(0,o.kt)("h2",{id:"licensing"},"Licensing"),(0,o.kt)("p",null,"Audit log integration is available for Enterprise plan only and requires a specific pricing feature."))}g.isMDXComponent=!0}}]);