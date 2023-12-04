"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[3208],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:15,title:"The CloudFormation Grain"},i=void 0,l={unversionedId:"blueprint-designer-guide/blueprints/cloudformation-grain",id:"blueprint-designer-guide/blueprints/cloudformation-grain",title:"The CloudFormation Grain",description:"The CloudFormation grain represents Torque's native support for AWS CloudFormation templates. Torque enables designers to utilize CloudFormation features for orchestrating both self-developed and community-driven CloudFormation modules in a consistent manner, making them accessible as reusable building blocks. For a complete YAML blueprint example, refer to Example 2: Webgame on S3 (using CloudFormation and Terraform).",source:"@site/docs/blueprint-designer-guide/blueprints/cloudformation-grain.md",sourceDirName:"blueprint-designer-guide/blueprints",slug:"/blueprint-designer-guide/blueprints/cloudformation-grain",permalink:"/blueprint-designer-guide/blueprints/cloudformation-grain",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/blueprint-designer-guide/blueprints/cloudformation-grain.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15,title:"The CloudFormation Grain"},sidebar:"torqueSidebar",previous:{title:"The Helm Grain",permalink:"/blueprint-designer-guide/blueprints/helm-grain"},next:{title:"The Kubernetes Grain\u200b",permalink:"/blueprint-designer-guide/blueprints/kubernetes-grain"}},u={},s=[{value:"source",id:"source",level:3},{value:"agent",id:"agent",level:3},{value:"authentication",id:"authentication",level:3},{value:"Template-Storage Configuration",id:"template-storage-configuration",level:3},{value:"inputs\u200b",id:"inputs",level:3},{value:"tags\u200b",id:"tags",level:3},{value:"outputs\u200b",id:"outputs",level:3},{value:"Example",id:"example",level:3},{value:"Note about reconciling an drifted Cloudformation grain (Beta)",id:"note-about-reconciling-an-drifted-cloudformation-grain-beta",level:3}],c={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The CloudFormation grain represents Torque's native support for AWS CloudFormation templates. Torque enables designers to utilize CloudFormation features for orchestrating both self-developed and community-driven CloudFormation modules in a consistent manner, making them accessible as reusable building blocks. For a complete YAML blueprint example, refer to ",(0,o.kt)("a",{parentName:"p",href:"/blueprint-designer-guide/blueprint-quickstart-guide#example-multi-grain-blueprint-2-web-game-on-s3-using-cloudformation-and-terraform"},"Example 2: Webgame on S3 (using CloudFormation and Terraform)"),"."),(0,o.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before utilizing CloudFormation with Torque, ensure that you have the following prerequisites in place:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"An S3 bucket designated for the temporary storage of large templates.")),(0,o.kt)("p",null,'For templates exceeding 50K bytes in size, Torque requires a "template-storage" location to upload templates from a Git repository, enabling the creation of CloudFormation stacks. To fulfill this requirement, you must either create a new S3 bucket or provide an existing one, which will serve as the landing area. Templates are fetched from Git and stored in this bucket, from where they can be launched.'),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"An AWS policy for use of cloudformation.")),(0,o.kt)("p",null,"To grant Torque the necessary permissions to successfully provision resources, your credentials must include at least the following policy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "BasicBucketOperations",  // Sid for the template-storage bucket. If all your temaplates are smaller than 50K, this can be ommitted. \n            "Effect": "Allow",\n            "Action": [\n                "s3:PutObject",\n                "s3:GetObject",\n                "s3:DeleteObject"\n            ],\n            "Resource": [\n                "arn:aws:s3:::<your-bucket>/*" // the template-storage bucket name. \n            ]\n        },\n        {\n            "Sid": "BasicCfnOperations",\n            "Effect": "Allow",\n            "Action": [\n                "cloudformation:CreateStack",\n                "cloudformation:DeleteStack",\n                "cloudformation:UpdateStack",\n                "cloudformation:DescribeStacks",\n                "cloudformation:DescribeStackEvents"\n            ],\n            "Resource": "*"\n        },\n    {\n    // Any other permissions that are required to launch the resources inside the template. For example, if your template is using EC2 you can use:\n    //"Statement": [\n    //  {\n    //    "Action": "ec2:*",\n    //    "Effect": "Allow",\n    //    "Resource": "*"\n    //  }\n    // ]\n    }\n    ]\n}\n')),(0,o.kt)("h3",{id:"source"},"source"),(0,o.kt)("p",null,"Please see ",(0,o.kt)("a",{parentName:"p",href:"/blueprint-designer-guide/blueprints/blueprints-yaml-structure#source"},"the grain source")," for more details."),(0,o.kt)("h3",{id:"agent"},"agent"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"agent")," is now ",(0,o.kt)("strong",{parentName:"p"},"required")," for CloudFormation Grain. Please see ",(0,o.kt)("a",{parentName:"p",href:"/blueprint-designer-guide/blueprints/blueprints-yaml-structure#Agent"},"the agent")," for more details."),(0,o.kt)("h3",{id:"authentication"},"authentication"),(0,o.kt)("p",null,"To enable Torque to connect to the AWS account and deploy the CloudFormation template, you have two options:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Authenticate with Torque credentials (AWS access key and secret key OR AWS role ARN to be assumed by Torque)"),(0,o.kt)("li",{parentName:"ol"},"Authenticate with a service account that will be attached to the runner which provisions the infrastructure. The service account needs to be annotated by an AWS role ARN to be assumed by Torque. ")),(0,o.kt)("p",null,"Option 1:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"grains:\n  database:\n    kind: cloudformation\n    spec:\n      source:\n        path: github.com/org/repo.git//cloudformation/rds\n        ...\n      agent: \n        name: my-agent  \n      authentication:\n        - credential_name or {{.inputs.credentials_input_name}}\n")),(0,o.kt)("p",null,"Option 2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"grains:\n  database:\n    kind: cloudformation\n    spec:\n      source:\n        path: github.com/org/repo.git//cloudformation/rds\n        ...\n      agent:\n        name: my-agent \n        service-account: agent-service-account # Optional. If not provided, Torque will try to use the default service account of the agent.\n\n")),(0,o.kt)("h3",{id:"template-storage-configuration"},"Template-Storage Configuration"),(0,o.kt)("p",null,"In the CloudFormation grain, you will need to specify the details of the S3 bucket serving as the template-storage for larger templates."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"grains:\n  database:\n    kind: cloudformation\n    spec:\n        ...\n      template-storage:\n         bucket-name: <name> # required, can be templated \n         region: <region> # required, can be templated\n         key-prefix: <prefix> # optional, can be templated . This is the file path where the template will be located inside the bucket.\n")),(0,o.kt)("p",null,"The template-storage is an optional element in the grain, however if you will not provide it only templates which are smaller than 50K bytes will be supported. It is also required when using nested stacks.\nIf you provide a bucket for template-storage, ensure that your service-account or credentials which you provided for Torque to provision your stack contain the permissions to read from the bucket as above."),(0,o.kt)("h3",{id:"inputs"},"inputs\u200b"),(0,o.kt)("p",null,"Similar to blueprint inputs, CloudFormation grain inputs allow you to reuse the same CloudFormation module in different ways. Inputs provided to the CloudFormation grain are used when launching the CloudFormation module."),(0,o.kt)("h3",{id:"tags"},"tags\u200b"),(0,o.kt)("p",null,"Whenever a CloudFormation grain is launched, all resources created during the deployment process are automatically tagged with Torque's system tags, built-in tags and custom tags."),(0,o.kt)("h3",{id:"outputs"},"outputs\u200b"),(0,o.kt)("p",null,"Outputs are strings generated by CloudFormation during the deployment process."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"grains:\n  database:\n    kind: cloudformation\n    spec:\n      source:\n        path: github.com/org/repo.git//cloudformation/rds\n        ...\n      authentication:\n        ...\n      outputs:\n        - agent_name\n        - connection_string\n")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"grains:\n  CFN-S3-Bucket:\n    kind: cloudformation\n    spec: \n      source:\n        path: https://.../AWSS3Bucket.yaml\n      inputs:\n        - AccessControl: '{{ .inputs.[\"Access Control\"] }}'\n        - BucketName: '{{ .inputs.[\"Bucket Name\"] }}-{{ sandboxid | downcase }}'\n      outputs:\n         - Arn\n         - DomainName\n")),(0,o.kt)("h3",{id:"note-about-reconciling-an-drifted-cloudformation-grain-beta"},"Note about reconciling an drifted Cloudformation grain (Beta)"),(0,o.kt)("p",null,"Resolving drift in AWS CloudFormation involves acknowledging the updated configuration as the intended state and adjusting the stack template accordingly. Conversely, in Torque, the process of drift resolution or reconciliation entails undoing changes made to cloud resources and restoring them to the original template. It is important to understand this distinction before reconciling CloudFormation grains."),(0,o.kt)("p",null,"Due to AWS limitations, if the drift includes deleted resources Torque will not be able to restore these via reconciliation. It is advise to reconcile the stack manually via the AWS console or CLI."))}p.isMDXComponent=!0}}]);