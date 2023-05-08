"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[2107],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7132:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={sidebar_position:6},c="Architecture",l={unversionedId:"overview/Architecture",id:"overview/Architecture",title:"Architecture",description:"Locale Dropdown",source:"@site/docs/overview/Architecture.md",sourceDirName:"overview",slug:"/overview/Architecture",permalink:"/overview/Architecture",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/overview/Architecture.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"torqueSidebar",previous:{title:"Main Concepts",permalink:"/overview/The Torque Terminology"},next:{title:"Torque Features and Capabilities",permalink:"/overview/features"}},u={},p=[],m={toc:p};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"architecture"},"Architecture"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"Locale Dropdown",src:r(9801).Z,width:"4378",height:"3443"}))),(0,a.kt)("p",null,"Torque is purpose built with multiple types of components in mind: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"IaC & automation asset repositories")," are links from Torque's backend or agent to your existing source control repositories that contain the various IaC and Automation files that Torque will orchestrate including ",(0,a.kt)("a",{parentName:"p",href:"/blueprint-designer-guide/blueprints/terraform-grain"},"Terraform")," Modules, AWS CloudFormation](/blueprint-designer-guide/blueprints/cloudformation-grain) Stack templates, ",(0,a.kt)("a",{parentName:"p",href:"/blueprint-designer-guide/blueprints/helm-grain"},"Helm")," charts, ",(0,a.kt)("a",{parentName:"p",href:"/blueprint-designer-guide/blueprints/kubernetes-grain"},"Kubernetes")," Manifest files, ",(0,a.kt)("a",{parentName:"p",href:"/blueprint-designer-guide/blueprints/shell-grain"},"Shell")," scripts, and ",(0,a.kt)("a",{parentName:"p",href:"/blueprint-designer-guide/blueprints/ansible-grain"},"Ansible")," playbooks. "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Target cloud providers")," - By utilizing the above IaC & Automation technologies, Torque environments can be deployed on the following Cloud Providers: ",(0,a.kt)("a",{parentName:"li",href:"https://aws.amazon.com/"},"Amazon Web Services (AWS)"),", ",(0,a.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/"},"Microsoft Azure"),", ",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/"},"Google Cloud Platform (GCP)"),", ",(0,a.kt)("a",{parentName:"li",href:"https://www.oracle.com/cloud/"},"Oracle Cloud Infrastructure (OCI)"),", VMware virtual center (vCenter/vSphere), Kubernetes, and any unmentioned provider supported by these technologies (for Terraform, see ",(0,a.kt)("a",{parentName:"li",href:"https://registry.terraform.io/browse/providers"},"Terraform Providers"),"). "))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Torque execution agents (agents)")," are lightweight, container-based, instances of Torque's execution application. Agents communicate with the Torque backend servers to carry out tasks such as deploying environments, retrieving asset information, and cleaning up the environment's cloud infrastructure when the environment ends, and querying cost. Torque Agents can only be deployed on top of Kubernetes clusters (managed or unmanaged), while on-prem agents are deployed on Docker. Supported cluster providers include Amazon ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/eks/"},"Elastic Kubernetes Service"),", Microsoft ",(0,a.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/products/kubernetes-service"},"Azure Kubernetes Service"),", Google ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine"},"GCP Kubernetes Engine"),", Oracle ",(0,a.kt)("a",{parentName:"p",href:"https://www.oracle.com/cloud/cloud-native/container-engine-kubernetes/"},"OCI Kubernetes Engine"),", self-managed Kubernetes cluster, and Docker host (on-prem only)."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},'Torque built in "Quali" agent'),' - Torque features a built-in, pre-configured and account specific execution agent marked as "Quali" that allows Torque environments that only contain ',(0,a.kt)("a",{parentName:"li",href:"/blueprint-designer-guide/blueprints/terraform-grain"},"Terraform")," or ",(0,a.kt)("a",{parentName:"li",href:"/blueprint-designer-guide/blueprints/cloudformation-grain"},"AWS CloudFormation")," type grains to be deployed without needing to deploy your own Torque agent as a pre-requisite."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Notification engines")," are webhooks or connections from Torque to the email or collaboration platform of your choice, allowing you to automatically notify users of environment lifecycle events (Environment Started/Ended/Finished Provisioning) and changes to their environment (Drift/Updates detected, collaborator changes). Supported notification channels include Email, ",(0,a.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/microsoft-teams/group-chat-software"},"Microsoft Teams"),", ",(0,a.kt)("a",{parentName:"p",href:"https://slack.com"},"Slack"),", or a ",(0,a.kt)("a",{parentName:"p",href:"/admin-guide/notifications"},"custom webhook"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Developer eco-system intergrations")," are Developer or DevOps tools that can connect to Torque to automate the process of launching Torque environments and running tests or validations on top of them, as well as tools that help developers and blueprint designers interface with Torque during the development of environment blueprints."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"CI/CD Tooling")," - Supported solutions include ",(0,a.kt)("a",{parentName:"p",href:"/eco-system/ci-cd-tooling/azure-devops"},"Azure DevOps"),", ",(0,a.kt)("a",{parentName:"p",href:"/eco-system/ci-cd-tooling/circle-ci"},"CircleCI"),", ",(0,a.kt)("a",{parentName:"p",href:"/eco-system/ci-cd-tooling/jenkins"},"Jenkins"),", ",(0,a.kt)("a",{parentName:"p",href:"/eco-system/ci-cd-tooling/github-actions"},"GitHub Actions"),", ",(0,a.kt)("a",{parentName:"p",href:"/eco-system/ci-cd-tooling/spinnaker"},"Spinnaker"),", Atlassian Bamboo CI, ",(0,a.kt)("a",{parentName:"p",href:"/eco-system/ci-cd-tooling/teamcity"},"TeamCity"),", ",(0,a.kt)("a",{parentName:"p",href:"/eco-system/ci-cd-tooling/jenkins"},"Jenkins"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Developer tools")," Torque's ",(0,a.kt)("a",{parentName:"p",href:"/eco-system/dev-tools/vs-plugin"},"VSCode Extension")," and Torque's ",(0,a.kt)("a",{parentName:"p",href:"/eco-system/dev-tools/torque-cli"},"CLI")," interface. (Note: Torque also features a robust Torque ",(0,a.kt)("a",{parentName:"p",href:"/rest-api/"},"REST API")," with a Live Reference accessible via Torque's Portal).")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"IT eco-system integrations (ITSM)")," are integrations between Torque and IT Service Management platforms that allow Torque to offload approval policies and flows. These include ServiceNow and BCM Remedy (coming soon)."))))}d.isMDXComponent=!0},9801:function(e,t,r){t.Z=r.p+"assets/images/torque-architecture-d8929a03c18295c46d0d346b2eae0400.png"}}]);