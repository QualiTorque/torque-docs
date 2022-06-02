"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[9945],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),u=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return i.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return t?i.createElement(h,o(o({ref:n},p),{},{components:t})):i.createElement(h,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<r;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3746:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var i=t(7462),a=t(3366),r=(t(7294),t(3905)),o=["components"],s={sidebar_position:1,title:"Blueprint YAML"},l="Blueprints Design",u={unversionedId:"blueprint-designer-guide/blueprints",id:"blueprint-designer-guide/blueprints",title:"Blueprint YAML",description:"Torque's blueprints are reusable components designed to model a required environment from the infrastructure to the application. Blueprint designers utilize Torque's VSCode plugin or the Torque's self-service UI to build a YAML based imperative blueprints that aimed to fulfill business requirements in a self-service manner for their end-users.",source:"@site/docs/blueprint-designer-guide/blueprints.md",sourceDirName:"blueprint-designer-guide",slug:"/blueprint-designer-guide/blueprints",permalink:"/torque-docs/blueprint-designer-guide/blueprints",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/blueprint-designer-guide/blueprints.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Blueprint YAML"},sidebar:"torqueSidebar",previous:{title:"Service Accounts",permalink:"/torque-docs/getting-started/Service Accounts"},next:{title:"Users, Roles and Permissions",permalink:"/torque-docs/roles-and-permissions/"}},p={},d=[{value:"Torque&#39;s Blueprint YAML",id:"torques-blueprint-yaml",level:2},{value:"spec_version",id:"spec_version",level:3},{value:"description",id:"description",level:3},{value:"inputs",id:"inputs",level:3},{value:"outputs",id:"outputs",level:3},{value:"Grains",id:"grains",level:3},{value:"Source",id:"source",level:3},{value:"Host",id:"host",level:3},{value:"Grain inputs &amp; outputs",id:"grain-inputs--outputs",level:3},{value:"Grain dependencies",id:"grain-dependencies",level:3},{value:"Torque Templating engine",id:"torque-templating-engine",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"The Terraform Grain",id:"the-terraform-grain",level:3},{value:"The HELM Grain",id:"the-helm-grain",level:3}],c={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"blueprints-design"},"Blueprints Design"),(0,r.kt)("p",null,"Torque's blueprints are reusable components designed to model a required environment from the infrastructure to the application. ",(0,r.kt)("strong",{parentName:"p"},"Blueprint designers")," utilize Torque's VSCode plugin or the Torque's self-service UI to build a YAML based imperative blueprints that aimed to fulfill business requirements in a self-service manner for their end-users."),(0,r.kt)("p",null,"Common example will be a platform team or a DevOps team building Dev, Test and staging environments for their development, QA and product teams. With Torque, the DevOps team can focus on design, best practices, and security for environment, while their end users are being self-served from the torque UI, API or eco-system integrations based on governance and policies without having the 'keys-to-the-cloud'."),(0,r.kt)("h2",{id:"torques-blueprint-yaml"},"Torque's Blueprint YAML"),(0,r.kt)("p",null,"The Torque's YAML is a the main specification for blueprint designers to build blueprints out of grains and expose environments to end-users in the Torque's catalog. "),(0,r.kt)("h3",{id:"spec_version"},"spec_version"),(0,r.kt)("p",null,"The spec_version determines the blueprint YAML type. Currently, Torque supports spec_version:2 as the default and recommended version. With time, new preview releases and official feature releases will bring more and more features and users will be able to use other spec versions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:'language-yaml"'},"spec_version: 2\n")),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("p",null,"The blueprint\u2019s description is an optional but recommended field. Blueprint description will be presented in the Torque's UI and API so users consuming environment will have more information about the blueprints to batter match their business need to the available set of blueprints published in the account catalog."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:'language-yaml"'},"spec_version: 2\ndescription: Performance testing deployment based on RDS, EKS and Lambda\n\n")),(0,r.kt)("h3",{id:"inputs"},"inputs"),(0,r.kt)("p",null,"Blueprint designers can expose blueprint inputs to their end-users to add flexibility while launching a new sandbox from the blueprints - without altering the blueprint code itself. Inputs data can be later used in the blueprint to control orchestration, pass information to automation process and more."),(0,r.kt)("p",null,"Input definition is composed out of the following fields: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The input name"),(0,r.kt)("li",{parentName:"ul"},"The input description - that will be presented to all users in the Torque UI and API's"),(0,r.kt)("li",{parentName:"ul"},"The input type. Supported types: string."),(0,r.kt)("li",{parentName:"ul"},"Input default value - the vale that will be used in the Torque UI and will be used in case no other value provided for the input.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:'language-yaml"'},'inputs:\n  app_version:\n    type: string\n    default: "0.9.9"\n    description: "The version of the application to be deployed on the EKS cluster"\n')),(0,r.kt)("h3",{id:"outputs"},"outputs"),(0,r.kt)("p",null,"Outputs exposes information about your newly deployed sandbox and make it available for the sandbox consumer or automation processes. Outputs will usually be available at the end of the sandbox initialization and accessible throughout the sandbox lifecycle."),(0,r.kt)("p",null,"Outputs are a dictionary composed by the output name and the output value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:'language-yaml"'},"outputs:\n  WebsiteUrl:\n    value: 'application-name-{{ sandboxid | downcase }}.testquali.click:8080'\n    kind: link\n  DB_Hostname:\n    value: '{{ .grains.mySqlDB.outputs.hostname }}'\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The example above includes some of the Torque's YAML templating engine capabilities allowing the blueprint designer more flexibility and leads to less code that will require maintenance. More examples for templating will be described HERE LINK"))),(0,r.kt)("h3",{id:"grains"},"Grains"),(0,r.kt)("p",null,"Grains are the basic building blocks of a blueprint utilizing infrastructure as code (IaC) assets or automation processes to orchestrate the desired environment. In many organization, the blueprint designers will have a predefined set of grains they can use in blueprints provided by the IT/Ops/DevOps or platform team. "),(0,r.kt)("p",null,"basic grain template is composed out of the grain name, kind, inputs and output. specific grains might support other features that are technology specific."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:'language-yaml"'},"grain_name:\n    kind: terraform\n    spec:\n      source: \n        path: <path to repository>\n      host:\n        name: '{{ .inputs.host_name }}'\n      inputs:\n        - input1: '{{ .inputs.value1 }}'\n        - input1: '{{ .inputs.value2}}'\n      outputs:\n        - output1\n        - output2\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note that in auto-generated blueprints, the grain_name.spec.host.name is automatically exposed as a blueprint input for the blueprint designer ease of use. As best practice, it's recommended to remove the host.name from being an input once the blueprint is exposed to the catalog."))),(0,r.kt)("h3",{id:"source"},"Source"),(0,r.kt)("p",null,"Sources are repositories storing IaC, CM or other configuration technology that will be utilized by Torque to launch and operate an environment. Torque supports multiple ways to define grain sources. "),(0,r.kt)("h3",{id:"host"},"Host"),(0,r.kt)("p",null,"Hosts, or ",(0,r.kt)("strong",{parentName:"p"},"Execution Hosts")," are the locations where grains will be deployed from. While different grains behave differently, it's important to choose the right execution host for a grain to make sure authentication, networking and  configuration is all set for sandbox consumers use. Execution Host can be different between grains in the same blueprints to allow maximum flexibility during the orchestration processes."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Hosts gives the flexibility of deploying the same blueprints over different cloud accounts and cloud vendors. For example - the same blueprint can be utilized for Azure or GCP simply by exposing the host as blueprint input allowing the user to choose his favorite cloud provider."))),(0,r.kt)("h3",{id:"grain-inputs--outputs"},"Grain inputs & outputs"),(0,r.kt)("p",null,"Inputs and outputs are used both in the blueprint level and in the grains level. Grains can use inputs and outputs to pass data between IaC components, validate information and eventually lead to reducing the amount of IaC components that needs to be maintained by the organization."),(0,r.kt)("p",null,"In the below example, a Terraform deployment generates a connection string to a managed database that can then be utilized by the application itself using the ability to pass output from one grain as a input to the other."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:'language-yaml"'},"grains:\n  # launch an RDS instance using Terraform\n  rds:\n    kind: terraform\n    spec:\n      ...\n      ...\n      outputs:\n        - connection_string\n\n  my_app_demo:\n    # Launcing k8s based microservices application using HELM\n    kind: helm\n    depends-on: rds\n    ...\n    ...\n      inputs:\n        - connectionString: '{{ .grains.rds.outputs.connection_string }}'\n")),(0,r.kt)("h3",{id:"grain-dependencies"},"Grain dependencies"),(0,r.kt)("p",null,"The need to deploy one IaC component before the other is common and usually required when 3rd party components, managed services and other teams need to provide the infrastructure. Using dependencies in the blueprint YAML Torque will evaluate and optimize the deployment process to make sure dependencies are respected and components with no dependencies will be deployed in parallel to maximize efficiency and reduce overall uptime."),(0,r.kt)("p",null,"In the example below, 3 grain in the bluerpint will be deployed in the following order: rds and redis will be deployed in parallel - and my_app will be deployed next, only in case of a successful deployment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:'language-yaml"'},"grains:\n  # launch an RDS instance using Terraform\n  rds:\n    kind: terraform\n\ngrains:\n  # launch an ElastiCache \n  redis:\n    kind: terraform\n\n  my_app_demo:\n    # Launcing k8s based microservices application using HELM\n    kind: helm\n    depends-on: rds, redis\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ability to use outputs from specific grain usually requires the grain deployment to finish successfully. designing a blueprint with output usually requires dependencies between the grains."))),(0,r.kt)("h3",{id:"torque-templating-engine"},"Torque Templating engine"),(0,r.kt)("p",null,"Templating engines are a great way to enrich the YAML format to allow extensibility points and text manipulations. Torque utilized Shopify's ",(0,r.kt)("a",{parentName:"p",href:"https://shopify.github.io/liquid/"},"liquid")," engine to allow multiple text manipulations in runtime."),(0,r.kt)("p",null,"In the below example the ",(0,r.kt)("a",{parentName:"p",href:"https://shopify.github.io/liquid/filters/downcase/"},"downcase")," and (strip)","[https://shopify.github.io/liquid/filters/strip/]"," keywords are used with concatenation of the sandbox id to create a new S3 bucket (AWS) using Terraform while making sure the bucket name will be valid and unique."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:'language-yaml"'},"  s3_bucket:\n    kind: terraform\n    spec:\n      source:\n        path: s3\n      host:\n        name: '{{ .inputs.host_name }}'\n      inputs:\n        - bucket_name: ''{{ .inputs.bucket_name | strip }}'-bucket-{{ sandboxid | downcase }}'\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Blueprint designers might need extra details about the account, space or sandbox during the sandbox orchestration. Torque provides dynamic attributes such as a sandboxid, accountid and spaceid that can be used through the orchestration and automation process.   "))),(0,r.kt)("h3",{id:"environment-variables"},"Environment Variables"),(0,r.kt)("p",null,"In many cases, passing information through environment variables is required for IaC modules to properly execute with the right data in mind. The environment variables provided under a specific grain will be accessible only during the grain lifecycle of the specific grain and can be used as a specific string or to be derived from a blueprint input or other grain output. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:'language-yaml"'},"  s3_bucket:\n    kind: \n    spec:\n    ...\n    ...\n      env-vars:\n      - name: VAR_NAME1\n        value: value1\n      - name: VAR_NAME2\n        value: '{{ .inputs.input_name }}'\n      - name: VAR_NAME3\n        value: '{{ .grains.vm.outputs.host_name }}'\n")),(0,r.kt)("h3",{id:"the-terraform-grain"},"The Terraform Grain"),(0,r.kt)("h3",{id:"the-helm-grain"},"The HELM Grain"))}m.isMDXComponent=!0}}]);