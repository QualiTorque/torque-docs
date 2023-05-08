"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[8443],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2412:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:36,title:"Issue Trackers"},c=void 0,u={unversionedId:"eco-system/issue-trackers",id:"eco-system/issue-trackers",title:"Issue Trackers",description:"With Issue Trackers integrations, you can configure Torque to send environment lifecycle events to your bug tracking solution.",source:"@site/docs/eco-system/issue-trackers.md",sourceDirName:"eco-system",slug:"/eco-system/issue-trackers",permalink:"/eco-system/issue-trackers",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/eco-system/issue-trackers.md",tags:[],version:"current",sidebarPosition:36,frontMatter:{sidebar_position:36,title:"Issue Trackers"},sidebar:"torqueSidebar",previous:{title:"CircleCI Plugin",permalink:"/eco-system/ci-cd-tooling/circle-ci"},next:{title:"Privacy",permalink:"/privacy/"}},l={},p=[{value:"Jira",id:"jira",level:2}],m={toc:p};function f(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"With ",(0,i.kt)("strong",{parentName:"p"},"Issue Trackers")," integrations, you can configure Torque to send environment lifecycle events to your bug tracking solution."),(0,i.kt)("h2",{id:"jira"},"Jira"),(0,i.kt)("p",null,"This integration enables sending the environment events to specific issues in Jira. As part of the integration with Jira, you specify the Jira projects that can receive the events, and Torque will only send the events to a matching issue within those projects. "),(0,i.kt)("p",null,"The events are displayed in the ",(0,i.kt)("strong",{parentName:"p"},"Comments")," section of the issues and look something like this:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(9461).Z,width:"512",height:"252"}))),(0,i.kt)("p",null,"In the above example, ",(0,i.kt)("strong",{parentName:"p"},"DEV & Test Environment")," is the name of the environment and ",(0,i.kt)("strong",{parentName:"p"},"started")," is the environment's state."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),(0,i.kt)("strong",{parentName:"h5"},"Note"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'The environment name must start with the name of the Jira issue followed by a space. For example: "PJC-7 my environment" where PJC is the project key and 7 is the issue number.'))))}f.isMDXComponent=!0},9461:function(e,t,n){t.Z=n.p+"assets/images/jira-notification-e35d56da6a890a38b3feaf549f48fcf2.png"}}]);