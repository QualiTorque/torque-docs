"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[331],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:3,title:"Getting Started with Kubernetes"},i=void 0,s={unversionedId:"getting-started/Getting starting with kubernetes",id:"getting-started/Getting starting with kubernetes",title:"Getting Started with Kubernetes",description:"Torque Control plane offers centralized orchestration and management for Kubernetes orchestration tools such as Kubernetes manifest, Helm and Crossplane. In this guide, we will go over some of Torque basic features allowing quick onboarding of Kubernetes automation assets into the platform, standardization of Kubernetes orchestration using blueprints and securing deployment process using tagging, policies and RBAC.",source:"@site/docs/getting-started/Getting starting with kubernetes.md",sourceDirName:"getting-started",slug:"/getting-started/Getting starting with kubernetes",permalink:"/getting-started/Getting starting with kubernetes",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/getting-started/Getting starting with kubernetes.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Getting Started with Kubernetes"},sidebar:"torqueSidebar",previous:{title:"Getting Started with Terraform",permalink:"/getting-started/Getting starting with terraform"},next:{title:"Asset Discovery",permalink:"/getting-started/Discover Your Assets"}},l={},p=[{value:"Step #1: Create a new Torque Space",id:"step-1-create-a-new-torque-space",level:2},{value:"Step #2: Onboard a Git Repository &amp; Auto-Discover automation assets",id:"step-2-onboard-a-git-repository--auto-discover-automation-assets",level:2},{value:"Step #3: Onboard a cloud Agent",id:"step-3-onboard-a-cloud-agent",level:2},{value:"Step #4: Launch your blueprint",id:"step-4-launch-your-blueprint",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Torque Control plane")," offers centralized orchestration and management for Kubernetes orchestration tools such as Kubernetes manifest, Helm and Crossplane. In this guide, we will go over some of Torque basic features allowing quick onboarding of Kubernetes automation assets into the platform, standardization of Kubernetes orchestration using blueprints and securing deployment process using tagging, policies and RBAC."),(0,o.kt)("p",null,"In this quick-start guide, we will cover the following topics:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new Torque Space"),(0,o.kt)("li",{parentName:"ol"},"Onboard a GitHub repository and discover the automation assets in it"),(0,o.kt)("li",{parentName:"ol"},"Generate your first blueprint and modify it to include deployment credentials"),(0,o.kt)("li",{parentName:"ol"},"Launch a blueprint and get access to the deployed resource in the newly created environment")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: This guide will focus on Kubernetes manifest and Helm orchestration, ",(0,o.kt)("a",{parentName:"p",href:"/overview/supported-platforms"},"click here")," for more information about Torque supported platform.")),(0,o.kt)("h2",{id:"step-1-create-a-new-torque-space"},"Step #1: Create a new Torque Space"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Spaces")," are logically separate area that contains an association to one or more agents, asset and blueprint repositories and set of permitted users. Spaces can be used to logically separate between teams, projects, or even development lifecycle stages and allow the relevant end-users, administrators and blueprint designers to access only the relevant blueprints and environments."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To create a new space, use one of the following methods: "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Navigate to the "Administration" section and open the "Spaces" tab. This is the account space management section where you will be able to create, edit and delete spaces. '),(0,o.kt)("li",{parentName:"ul"},'In the spaces dropdown, located in the left side-menu, click on "Create new space"'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Set the space name, image and color.\nSpace name, image and color can always be changes in the "Administration" are under the "Spaces" tab'),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{alt:"Create Space",src:n(9457).Z,width:"1254",height:"939"}))))),(0,o.kt)("h2",{id:"step-2-onboard-a-git-repository--auto-discover-automation-assets"},"Step #2: Onboard a Git Repository & Auto-Discover automation assets"),(0,o.kt)("p",null,"Now, that you have a new space configured, we will associate a repository to the space and generate blueprints using the automation-assets that will be discovered by Torque in that repository. We recommend using your-own repository hosted in one of the supported Git Providers. For using on-prem/hosted versions of one of the supported (Version Control System) providers, see ",(0,o.kt)("a",{parentName:"p",href:"/admin-guide/source-control/source-control-github"},"Repository Setup"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"repository onboarding"),' wizard, choose your VCS provider, provide the repository URL and click "Connect". Torque will open a new windows where you will be requested to authenticate to the VSC provider. VCS providers work differently, but usually, a token will be generated for your user and Torque will use that for any communication with that VCS. ')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click "Discover Assets" to initiate the ',(0,o.kt)("strong",{parentName:"p"},"Torque asset discovery process")," that will go over the repository and highlight the automation assets Torque discovered.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To ",(0,o.kt)("strong",{parentName:"p"},"generate a blueprint"),' from one of the discovered assets, check the blueprint in the list and click on "Generate Blueprints"')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click on "Connect an Agent"'))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{alt:"Onboard Repository",src:n(7081).Z,width:"1252",height:"936"}))),(0,o.kt)("h2",{id:"step-3-onboard-a-cloud-agent"},"Step #3: Onboard a cloud Agent"),(0,o.kt)("p",null,"In this step, we will configure a Torque agent that will execute, manage and monitor the Kubernetes workload we discovered and plan to deploy."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For Kubernetes workloads, Torque requires a self-hosted agent to be installed in the target cluster where the workload will be deployed or use Torque capability to orchestrate on ",(0,o.kt)("strong",{parentName:"p"},"remote clusters"),". The ",(0,o.kt)("strong",{parentName:"p"},"Quali Hosted Agent")," presented in the ","[Getting started with Terraform]","(/getting-started/Getting starting with terraform.md) article, is suitable only for Terraform workloads."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'In the "Connect an agent" dialog, select the ',(0,o.kt)("strong",{parentName:"p"},'"Install new self hosted agent"'),' and click "Next". Now, you are required to choose one of the supported cloud providers managed Kubernetes service or a self-managed Kubernetes cluster. Choose one of the options, In this example, we will use AWS EKS.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Provide a new for the agent, and click "Next"')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click on "Generate", this will generate a CLI command based on ',(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," that you can now execute on the Kubernetes cluster. Here is an example output of the command. "))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that the command creates a new namespaces, and deploys the Torque agent in it. It might take up to 2 minuts for the Agent to get up and running, so want for the Torque self-service indication to make sure the agent is connected.\n",(0,o.kt)("img",{alt:"Agent Connected",src:n(2090).Z,width:"1277",height:"641"}))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In case the agent is not connected to Torque after 2 minutes, we recommend checking the pod statuses using the following command looking for the Torque agent pods and further debug ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get pod --all-namespaces"),". In some cases, Kubernetes clusters are pre-configured with proxies, private registries and limited outbound connectivity - in those cases, contact Quali Support and we will make sure to assist you with the installation."))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},'Now, lt\'s associate our newly connected agent with our space. Click the "Associate to space".'),(0,o.kt)("li",{parentName:"ol"},'The space is already selected for you, but, you still need to set the default namespace and service-account that will be used by Torque to deploy workloads into the cluster. It\'s always possible to change the default values in the "Administration" section under the "Agents" section.')),(0,o.kt)("h2",{id:"step-4-launch-your-blueprint"},"Step #4: Launch your blueprint"),(0,o.kt)("p",null," \ud83d\ude80\ud83d\ude80 Congrats! you are finally now ready to launch your first environment!  \ud83d\ude80\ud83d\ude80"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To expose the new blueprint into the ",(0,o.kt)("strong",{parentName:"li"},"Space catalog"),", naviate into the ",(0,o.kt)("strong",{parentName:"li"},"Blueprints")," page and toggle the  ",(0,o.kt)("strong",{parentName:"li"},"Publish")," option."),(0,o.kt)("li",{parentName:"ol"},"Navigate to the ",(0,o.kt)("strong",{parentName:"li"},"Catalog")," and click the ",(0,o.kt)("strong",{parentName:"li"},"Launch")," button on the blueprint card."),(0,o.kt)("li",{parentName:"ol"},"Specify the environment's name, duration, tags and inputs - note that some of the inputs may be the authentication information required for AWS or Azure as describes in step #3."),(0,o.kt)("li",{parentName:"ol"},'Optionally assign collaborators to the environment. While everyone in the space has "read" permission to its environments, only the environment\'s owner and collaborators can perform actions that change the environment: extend end the environment, reconcile or update resource changes, etc. When launching the environment, the new owner/collaborators will receive a notification email if you have ',(0,o.kt)("a",{parentName:"li",href:"/admin-guide/notifications"},"Notifications")," configured in the space."),(0,o.kt)("li",{parentName:"ol"},"Finally ,click ",(0,o.kt)("strong",{parentName:"li"},"Launch"),"."),(0,o.kt)("li",{parentName:"ol"},"Wait until the environment is active and use as needed. URLs to the environment's applications are typically provided as outputs - these can be found in the environment's ",(0,o.kt)("strong",{parentName:"li"},"Quicklinks")," on the right, or in the ",(0,o.kt)("strong",{parentName:"li"},"Parameters")," pane.",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{alt:"Locale Dropdown",src:n(230).Z,width:"1500",height:"843"})))),(0,o.kt)("li",{parentName:"ol"},"Check out the ",(0,o.kt)("strong",{parentName:"li"},"Resources")," pane to get details about your environment's resources. Use this tab to understand what assets each grain spun up, get connection details to specific resources, and more.",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{alt:"Locale Dropdown",src:n(6926).Z,width:"1280",height:"720"}))))))}u.isMDXComponent=!0},7081:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/getting-repository-ongoarding-e0b2f7a09d4957deac3f93bed302491d.gif"},9457:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/getting-space-fc021ef58dcb3547f77353707f86685c.png"},2090:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/k8s-agent-connected-5d44b069d9c1c1705515cc328ca36179.png"},230:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/outputs-8b77e0372acd04603333f7e552b86352.gif"},6926:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/resource-details-976e108facfb7803b45f5c6afbd5f680.gif"}}]);