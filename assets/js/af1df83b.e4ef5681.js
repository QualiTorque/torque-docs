"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[8764],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const o={sidebar_position:12,title:"Policies"},r=void 0,l={unversionedId:"governance/policies",id:"governance/policies",title:"Policies",description:"Torque role: Account admin",source:"@site/docs/governance/policies.md",sourceDirName:"governance",slug:"/governance/policies",permalink:"/governance/policies",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/governance/policies.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,title:"Policies"},sidebar:"torqueSidebar",previous:{title:"Audit Log Event Examples",permalink:"/governance/audit-log/audit-log-json-example"},next:{title:"Configurations",permalink:"/admin-guide/configurations"}},s={},p=[{value:"Why use policies?",id:"why-use-policies",level:2},{value:"Example Use Cases",id:"example-use-cases",level:2},{value:"How policies work",id:"how-policies-work",level:2},{value:"Policy labels",id:"policy-labels",level:2},{value:"Torque built-in policies",id:"torque-built-in-policies",level:2},{value:"Custom policies",id:"custom-policies",level:2},{value:"Developing your own policies",id:"developing-your-own-policies",level:3},{value:"<strong>Developing Torque policies</strong>",id:"developing-torque-policies",level:4},{value:"<strong>Inputs</strong>",id:"inputs",level:4},{value:"<strong>data</strong>",id:"data",level:4},{value:"<strong>Rego restricted functions</strong>",id:"rego-restricted-functions",level:4},{value:"Approval policies",id:"approval-policies",level:2},{value:"How to set up a policy",id:"how-to-set-up-a-policy",level:2},{value:"Duplicate a policy",id:"duplicate-a-policy",level:2},{value:"Updating policies",id:"updating-policies",level:2},{value:"Video: Torque policies (end-to-end tutorial)",id:"video-torque-policies-end-to-end-tutorial",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Torque role: Account admin"),(0,a.kt)("h2",{id:"why-use-policies"},"Why use policies?"),(0,a.kt)("p",null,"Using policies for the consumption of environments offers a multitude of benefits that empower organizations to optimize their cloud usage. Firstly, policies allow for effective cost control by setting limits on resource consumption, ensuring that cloud spending remains within budgetary constraints. Moreover, these policies enable the efficient management of resources by capping the number of concurrent resources per user, preventing resource sprawl, and ensuring fair allocation. Additionally, policies can restrict the duration of an environments uptime, enhancing security and minimizing the risk of unused resources running indefinitely. In sum, the implementation of policies for environment consumption not only fosters financial prudence but also enhances resource governance and security, making it an invaluable asset in the realm of cloud management."),(0,a.kt)("p",null,"Torque policies are triggered as part of the environment deployment pipeline for specific environment lifecycle events (launch, extend environment for example) or during the deployment of environments (e.g. when evaluating a Terraform module included in the environment). Torque policies are powered by OPA (Open Policy Agent). For a step-by-step tutorial, see ",(0,a.kt)("a",{parentName:"p",href:"#video-torque-policies-end-to-end-tutorial"},"Video: Torque policies (end-to-end)"),"."),(0,a.kt)("h2",{id:"example-use-cases"},"Example Use Cases"),(0,a.kt)("p",null,"You can use Torque policies for cost and consumption control. Examples include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Limiting the maximal duration of environments"),(0,a.kt)("li",{parentName:"ul"},"Limiting the concurrent number of environments per user"),(0,a.kt)("li",{parentName:"ul"},"Limiting the total cost of environments"),(0,a.kt)("li",{parentName:"ul"},"And more.")),(0,a.kt)("p",null,"In this article:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#why-use-policies"},"Why use policies?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#example-use-cases"},"Example Use Cases")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#how-policies-work"},"How policies work")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#policy-labels"},"Policy labels")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#torque-built-in-policies"},"Torque built-in policies")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#custom-policies"},"Custom policies"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#developing-your-own-policies"},"Developing your own policies"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#developing-torque-policies"},(0,a.kt)("strong",{parentName:"a"},"Developing Torque policies"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#inputs"},(0,a.kt)("strong",{parentName:"a"},"Inputs"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#data"},(0,a.kt)("strong",{parentName:"a"},"data"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rego-restricted-functions"},(0,a.kt)("strong",{parentName:"a"},"Rego restricted functions"))))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#approval-policies"},"Approval policies")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#how-to-set-up-a-policy"},"How to set up a policy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#duplicate-a-policy"},"Duplicate a policy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#updating-policies"},"Updating policies")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#video-torque-policies-end-to-end-tutorial"},"Video: Torque policies (end-to-end tutorial)"))),(0,a.kt)("h2",{id:"how-policies-work"},"How policies work"),(0,a.kt)("p",null,'Policies are based on two basic elements: trigger and context. Trigger determines when the policy is activated, and context is the data the policy needs to get ("input" in OPA terms). The context is provided automatically by Torque. Users can also define user data ("data" in OPA terms) in the Torque policy. The context (or input) is the actual environment data the end user is trying to deploy, and the user data sets values to the limitations imposed by the admin who set up the policy.'),(0,a.kt)("p",null,"Torque supports 3 types of triggers, which are defined by the package being used in the policy's .rego file:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Consumption policies (triggered on catalog launch). To define a consumption policy, the ".rego" file must use the package name ',(0,a.kt)("strong",{parentName:"li"},"torque.consumption")),(0,a.kt)("li",{parentName:"ul"},'Environment lifecycle policies (triggered on launch after completing the launch dialog, or extend). To define an environment lifecycle policy, the ".rego" file must use the package name ',(0,a.kt)("strong",{parentName:"li"},"torque.environment")),(0,a.kt)("li",{parentName:"ul"},'Terraform evaluation policies (triggered on terraform plan for terraform grains). To define a terraform plan evaluation policy, the ".rego" file must use the package name ',(0,a.kt)("strong",{parentName:"li"},"torque.terraform_plan"))),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Policies are applied on the space or account level, as explained in ",(0,a.kt)("a",{parentName:"p",href:"#how-to-set-up-a-policy"},"How to set up a policy"),"."))),(0,a.kt)("h2",{id:"policy-labels"},"Policy labels"),(0,a.kt)("p",null,"There are 5 labels that will be automatically applied to policies in Torque, in the ",(0,a.kt)("strong",{parentName:"p"},"Policies")," administration page:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Built-in")," label is assigned to policies that come out of the box with Torque. For details about the policies, see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/QualiTorque/opa"},"https://github.com/QualiTorque/opa")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Terraform")," label is assigned to policies that evaluate the Terraform plan on the environment's Terraform grain. These policies are triggered when Torque deploys the Terraform grain's plan during the environment's initialization"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Environment")," label is assigned to policies that are triggered when the environment is launched (upon completing the launch wizard) or extended "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Consumption")," label is assigned to policies that are triggered when the catalog item is clicked "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Approval")," label is assigned to policies that could require approval to launch the environment"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Annotations")," label is assigned to files that are used to evaluate dynamic environment annotations. See ",(0,a.kt)("a",{parentName:"li",href:"/environment-services/environment-annotations"},"Environment Annotations"),".")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"Locale Dropdown",src:n(1738).Z,width:"1152",height:"570"}))),(0,a.kt)("h2",{id:"torque-built-in-policies"},"Torque built-in policies"),(0,a.kt)("p",null,"Torque provides many built-in policies, both for environment lifecycle and Terraform plan evaluation, which represent some of the more common use cases when deploying environments. Some examples include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Allow only specific AWS instance types to be used"),(0,a.kt)("li",{parentName:"ul"},"Allow deploying only to specific Azure locations"),(0,a.kt)("li",{parentName:"ul"},"Allow only environments with an expected cost of < 10$")),(0,a.kt)("h2",{id:"custom-policies"},"Custom policies"),(0,a.kt)("p",null,"There may come a time when you will need to go beyond the common use case and write your own policies and rules. This is possible using custom policies. Custom policies are .rego files that reside in your git repository. When you add the policy repository to Torque, Torque automatically discovers the repository and identifies its .rego files as policies, allowing you to choose which policies to import into Torque. Same as with built-in policies, you select where to apply the policy (on the entire account or specific teams) and configure the relevant data. "),(0,a.kt)("h3",{id:"developing-your-own-policies"},"Developing your own policies"),(0,a.kt)("h4",{id:"developing-torque-policies"},(0,a.kt)("strong",{parentName:"h4"},"Developing Torque policies")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Package"),": For Torque to recognize and be able to execute your policy, you need to use the torque packages. The packages that are currently available are torque.consumption, torque.environment and torque.terraform_plan. So your first line of the rego file which is the package name should be one of these packages."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"terraform_plan")," policies need at least one ",(0,a.kt)("strong",{parentName:"li"},"deny")," rule to be valid.\nFor example, a ",(0,a.kt)("strong",{parentName:"li"},"terraform_plan")," policy can look like this:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'\npackage torque.terraform_plan\n\ndeny[reason] {\n    all := resources["aws_iam"]\n    count(all) > 0\n    reason:= "Deployment contains IAM changes"\n}\n\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"environment"),"  and ",(0,a.kt)("strong",{parentName:"li"},"consumption")," policies need to return at least one ",(0,a.kt)("strong",{parentName:"li"},"result")," object with a ",(0,a.kt)("strong",{parentName:"li"},"decision"),' element in it. The decision value can be one of "Denied", "Manual" or "Approved". In addition to the ',(0,a.kt)("strong",{parentName:"li"},"decision")," element, you can optionally add a ",(0,a.kt)("strong",{parentName:"li"},"reason")," element that explains the reason for the decision.\nFor example, an ",(0,a.kt)("strong",{parentName:"li"},"environment")," policy can look like this:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'\npackage torque.environment\n\nresult = { "decision": "Denied", "reason": "Environment duration exceeds 5 hours" } if {\n   input.duration_minutes > 300\n\n} \n')),(0,a.kt)("h4",{id:"inputs"},(0,a.kt)("strong",{parentName:"h4"},"Inputs")),(0,a.kt)("p",null,"Based on the policy type (",(0,a.kt)("strong",{parentName:"p"},"environment")," , ",(0,a.kt)("strong",{parentName:"p"},"consumption")," or ",(0,a.kt)("strong",{parentName:"p"},"terraform_plan"),") Torque will provide ",(0,a.kt)("em",{parentName:"p"},"input")," to OPA once the policy is injected.\nFor terraform_plan policies, the input is the terraform plan output.\nFor ",(0,a.kt)("strong",{parentName:"p"},"environment")," policies, the input is the following json object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'{\n "blueprint": {\n     "name": "my-bp-name",\n     "repository": "my-repo",\n     "labels": [],\n     "url": "https://github.com/...",\n     "last_modified": "0001-01-01T00:00:00",\n     "grains": [\n         {\n             "kind": "terraform",\n             "name": "helloTF"\n         }\n     ]\n },\n "inputs": [\n     {\n         "name": "input_name",\n         "type": "string",\n         "value": "input_value",\n         "sensitive": false, // true|false\n         "description": null\n     }\n ],\n "workflows": [\n     {\n         "name": "<workflow_name>",\n         "schedules": [\n             "* * * * *",\n             "0 * * * *" //null in schedules means the schedule was disabled\n         ],\n         "inputs": {\n             "<input_name_1>": "<input_value_1>",\n             "<input_name_2>": "<input_value_2>"\n         }\n     }\n ],\n "timezone": "Asia/Jerusalem",\n "duration_minutes": 100, // in launch, the requested duration. In extend, the total duration before the extension\n "extend_duration_minutes": 100, // null if the action is "launch"\n "blueprint_avg_hourly_cost": null,\n "space_name": "my_space",\n "user_email": "me.l@mycorp.com",\n "entity_name": "my-env", //environment name\n "action_identifier": {\n     "entity_type": "Environment",\n     "entity_id": null,\n     "action_type": "Launch" // options: "Launch", "Extend"\n }\n "owner_active_environments_in_space": 1// # of the current owner\'s active environments in space \n "owner_active_environments_in_account": 1  //  # of the current owner\'s active environments in the account \n "active_environments_in_space": 1 // total # of active environments in the space \n "active_environments_in_account": 2 // total # of active environments in the account \n}\n')),(0,a.kt)("p",null,"Usage example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",3:!0,className:"language-jsx",metastring:'title="A policy that denies environments with a requested duration over 3 hours:"',title:'"A',policy:!0,that:!0,denies:!0,environments:!0,with:!0,a:!0,requested:!0,duration:!0,over:!0,'hours:"':!0},'result = { "decision": "Denied", "reason": "Requested environment duration exceeds 180 minutes" } if {\n   input.duration_minutes > 180\n} \n')),(0,a.kt)("p",null,"For ",(0,a.kt)("strong",{parentName:"p"},"consumption")," policies, the input is similar to the object in ",(0,a.kt)("strong",{parentName:"p"},"environment")," policies, except the ",(0,a.kt)("strong",{parentName:"p"},"consumption")," policies are triggered before the user completes the launch dialog, which means the blueprint input values and workflow details are not available yet. Therefore, the relevant sections are omitted from the input json object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'{\n "blueprint": {\n     "name": "my-bp-name",\n     "repository": "my-repo",\n     "labels": [],\n     "url": "https://github.com/...",\n     "last_modified": "0001-01-01T00:00:00",\n     "grains": [\n         {\n             "kind": "terraform",\n             "name": "helloTF"\n         }\n     ]\n },\n\n "timezone": "Asia/Jerusalem",\n "duration_minutes": 100, // in launch, the requested duration. In extend, the total duration before the extension\n "extend_duration_minutes": 100, // null if the action is "launch"\n "blueprint_avg_hourly_cost": null,\n "space_name": "my_space",\n "user_email": "me.l@mycorp.com",\n "entity_name": "my-env", //environment name\n "action_identifier": {\n     "entity_type": "Environment",\n     "entity_id": null,\n     "action_type": "Launch" // options: "Launch", "Extend"\n }\n "owner_active_environments_in_space": 1// # of the current owner\'s active environments in space \n "owner_active_environments_in_account": 1  //  # of the current owner\'s active environments in the account \n "active_environments_in_space": 1 // total # of active environments in the space \n "active_environments_in_account": 2 // total # of active environments in the account \n}\n')),(0,a.kt)("h4",{id:"data"},(0,a.kt)("strong",{parentName:"h4"},"data")),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"data")," object is the user-defined inputs that will also be passed to OPA for evaluation. The data object structure is defined by the policy writer, and the values are provided through the Torque UI."),(0,a.kt)("p",null,"For example, the policy can look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="A policy that denies environments with a requested duration that is longer than defined in the *data* object:"',title:'"A',policy:!0,that:!0,denies:!0,environments:!0,with:!0,a:!0,requested:!0,duration:!0,is:!0,longer:!0,than:!0,defined:!0,in:!0,the:!0,"*data*":!0,'object:"':!0},'result = { "decision": "Denied", "reason": "Environment duration exceeds the configured max duration" } if {\n   input.duration_minutes > data.max_duration_minutes\n} \n')),(0,a.kt)("p",null,"In this case, the policy expects a data object with one key: ",(0,a.kt)("inlineCode",{parentName:"p"},"max_duration_minutes"),"."),(0,a.kt)("p",null,"In Torque, it would look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:n(9076).Z,width:"908",height:"501"})),(0,a.kt)("p",null,"So you can enter whichever value you want as the maximum duration to be enforced on environments."),(0,a.kt)("h4",{id:"rego-restricted-functions"},(0,a.kt)("strong",{parentName:"h4"},"Rego restricted functions")),(0,a.kt)("p",null,"Torque supports all rego built-in functions, except the following list:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'"http.send";'),(0,a.kt)("li",{parentName:"ul"},'"opa.runtime";'),(0,a.kt)("li",{parentName:"ul"},'"rego.parse_module"; '),(0,a.kt)("li",{parentName:"ul"},'"time.now_ns";'),(0,a.kt)("li",{parentName:"ul"},'"trace";')),(0,a.kt)("p",null,"For more details on how to develop policies, see ",(0,a.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org/docs/latest/"},"OPA documentation")," and ",(0,a.kt)("a",{parentName:"p",href:"https://play.openpolicyagent.org/"},"OPA playground"),"."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Notes")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"For example, custom policies, see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/QualiTorque/opa"},"Quali Torque built-in OPA policy templates"),"."),(0,a.kt)("li",{parentName:"ul"},'Note that Torque points to a specific commit. Therefore, to introduce a new version of a custom policy, develop, test and pass the policy through your regular git flow. Once you are done, update the commit version in Torque by clicking "Update Rego".')))),(0,a.kt)("h2",{id:"approval-policies"},"Approval policies"),(0,a.kt)("p",null,"Torque allows you to configure your policy with conditions that will trigger manual approval of an environment request by a set of designated approvers via multiple optional channels: email, Microsoft Teams or Slack channels, ServiceNow and more. "),(0,a.kt)("p",null,"For example, you could have an approval policy that sets the max_duration for environments at 3 hours, so attempting to launch an environment with a duration that is longer than 3 hours will require approval."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Notes")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Approvers are defined in the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/governance/approval-channels"},"Approval Channels"))," administration page."))),(0,a.kt)("h2",{id:"how-to-set-up-a-policy"},"How to set up a policy"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"Administration > Policy Repositories")," and click ",(0,a.kt)("strong",{parentName:"p"},"Add a Repository"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the git repository, specify the repository's URL, and give it a name."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"Locale Dropdown",src:n(2517).Z,width:"839",height:"563"})))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Connect"),". Provide authorization credentials if the repository is private."),(0,a.kt)("p",{parentName:"li"},"A green checkmark next to the repository's URL indicates that the repository has been added successfully."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"Locale Dropdown",src:n(986).Z,width:"843",height:"569"})))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Discover Policies"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the policies you want to import into Torque and click ",(0,a.kt)("strong",{parentName:"p"},"Generate Policies"),"."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"Locale Dropdown",src:n(4069).Z,width:"870",height:"687"}))),(0,a.kt)("p",{parentName:"li"}," The policies are displayed in the ",(0,a.kt)("strong",{parentName:"p"},"Policies")," page."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"Locale Dropdown",src:n(489).Z,width:"1228",height:"527"}),"    "))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click a generated policy and edit the details."),(0,a.kt)("p",{parentName:"li"},"a. Optionally change the ",(0,a.kt)("strong",{parentName:"p"},"Name"),", and provide a ",(0,a.kt)("strong",{parentName:"p"},"Description"),"."),(0,a.kt)("p",{parentName:"li"},"b. In ",(0,a.kt)("strong",{parentName:"p"},"Spaces"),", set the scope of the policy - ",(0,a.kt)("strong",{parentName:"p"},"All spaces")," or specific ones."),(0,a.kt)("p",{parentName:"li"},"c. In ",(0,a.kt)("strong",{parentName:"p"},"Data"),", set the policy's limitations.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Save"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Enable")," the policy."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"Locale Dropdown",src:n(7534).Z,width:"653",height:"530"}),"    ")))),(0,a.kt)("h2",{id:"duplicate-a-policy"},"Duplicate a policy"),(0,a.kt)("p",null,'You can also duplicate any built-in or custom policy to create a similar version with different user data. For example, You could have a policy that allows the use of cloud region "us-east-1" for the US team, and another one for the EU team that allows region "eu-west-1".'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"Locale Dropdown",src:n(2306).Z,width:"447",height:"259"}))),(0,a.kt)("h2",{id:"updating-policies"},"Updating policies"),(0,a.kt)("p",null,"Torque's custom policies are version controlled in git. Next to each policy, you can see the specific commit which is currently being used for that policy across the account:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"Locale Dropdown",src:n(5580).Z,width:"1663",height:"416"}))),(0,a.kt)("p",null,"From time to time, there will be a need to modify the policy's code (rego file). However, we must update the policy without any disruption to the users. This means that the data object format and the rego file must match. "),(0,a.kt)("p",null,"Clicking on the policy there is an option to update the rego:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"Locale Dropdown",src:n(3706).Z,width:"540",height:"873"}))),(0,a.kt)("p",null,'If there is no change in the data object format, the update is completed and applied across the account. However, if there is a change in the data object, we cannot complete the update until the user will complete the change of the data object, otherwise the policy will start failing and will cause a disruption for the account users. Therefore, when Torque detects a change in the format of the data object, it will load the new data object structure and wait for the user to modify it.\nOnce done, the user needs to invoke the "update-rego" again and at this point it will complete successfully as the rego code and the data format match.'),(0,a.kt)("h2",{id:"video-torque-policies-end-to-end-tutorial"},"Video: Torque policies (end-to-end tutorial)"),(0,a.kt)("video",{controls:!0,width:"75%"},(0,a.kt)("source",{src:"/img/policies-full.mp4"})))}m.isMDXComponent=!0},2306:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/duplicate-policy-f481f9bd1ba58a6abd0c778eda00e4ea.png"},7534:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/enable-custom-policy-bd8f5f27af9c7e3ed0ff6f938ab68c54.png"},489:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/new-custom-policies-ee1862d853e954b3ca643024e4053ac4.png"},4069:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/policy-import-1e534f31272a694d47469d21a25fa9f8.png"},1738:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/policy-labels-2fbcf9e766e3ef9dbea1da876dd1f679.png"},5580:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/policy_commit-97c0550e42612b590c22612009dc4ba5.png"},9076:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/policy_data-74a838065b78bcc67e7ca249db684e06.png"},986:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/repository-connection-350b4cf7d2439d64b07f6e7e57da6e1a.png"},2517:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/repository-information-9d0853511f5bfb488af46cef399abf96.png"},3706:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/update-rego-dcb7116847620395f9d3b893e65eda63.png"}}]);