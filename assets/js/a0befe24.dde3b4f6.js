"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[1316],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),g=i,v=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(v,a(a({ref:t},l),{},{components:n})):r.createElement(v,a({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7006:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={sidebar_position:2,title:"Audit Log Overview"},s=void 0,u={unversionedId:"governance/audit-log/audit-log-overview",id:"governance/audit-log/audit-log-overview",title:"Audit Log Overview",description:"Torque provides integration with Elastic Stack, allowing you to easily monitor and audit your system users' behavior, investigate and remove security risks and vulnerabilities, and more. Once integrated, Torque begins capturing events and streams them to Elastic Stack for analytics, allowing you to gain visibility into key platform events within your account, identify the most active policies, significant changes in resource operations, or filter actions by user and space.",source:"@site/docs/governance/audit-log/audit-log-overview.md",sourceDirName:"governance/audit-log",slug:"/governance/audit-log/audit-log-overview",permalink:"/governance/audit-log/audit-log-overview",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/governance/audit-log/audit-log-overview.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Audit Log Overview"},sidebar:"torqueSidebar",previous:{title:"Approval Channels",permalink:"/governance/approval-channels"},next:{title:"Audit Log Configuration",permalink:"/governance/audit-log/audit-log-configuration"}},l={},p=[{value:"Licensing",id:"licensing",level:2}],d={toc:p};function g(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Torque provides integration with Elastic Stack, allowing you to easily monitor and audit your system users' behavior, investigate and remove security risks and vulnerabilities, and more. Once integrated, Torque begins capturing events and streams them to Elastic Stack for analytics, allowing you to gain visibility into key platform events within your account, identify the most active policies, significant changes in resource operations, or filter actions by user and space."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},'inputs:\n    {\n  "_index": "quali",\n  "_type": "_doc",\n  "_id": "E_TV54QBoWVq8-70aD22",\n  "_score": 1,\n  "_source": {\n    "name": "EnvironmentTerminationStarted",\n    "event_type": "environment",\n    "event_status": "success",\n    "scope": {\n      "environment": "u9FQhalUq6yh",\n      "space": "shai",\n      "account": "trial-e1a4eb56d"\n    },\n    "actor": {\n      "actor_type": "user",\n      "details": {\n        "user_email": shai.p@quali.com\n      }\n    },\n    "timestamp": "2022-12-06T14:27:08.6804874Z",\n    "traceId": "bc208caa38fd248f89dfcd87a7b5f8f1",\n    "data": {\n      "isForced": "False"\n    },\n    "errors": []\n  }\n')),(0,o.kt)("h2",{id:"licensing"},"Licensing"),(0,o.kt)("p",null,"Audit log integration is available for Enterprise plan only and requires a specific pricing feature."))}g.isMDXComponent=!0}}]);