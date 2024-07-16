"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[7200],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return t?a.createElement(k,o(o({ref:n},u),{},{components:t})):a.createElement(k,o({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7521:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_position:1,title:"Torque Workflows"},o=void 0,s={unversionedId:"workflows/workflows-overview",id:"workflows/workflows-overview",title:"Torque Workflows",description:"Workflow",source:"@site/docs/workflows/workflows-overview.md",sourceDirName:"workflows",slug:"/workflows/workflows-overview",permalink:"/workflows/workflows-overview",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/workflows/workflows-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Torque Workflows"},sidebar:"torqueSidebar",previous:{title:"The Environment YAML",permalink:"/environment-as-code/environment-as-code-yaml"},next:{title:"Examples & Use-cases",permalink:"/workflows/workflows-use-cases"}},l={},p=[{value:"Workflow",id:"workflow",level:2},{value:"Bindings",id:"bindings",level:3},{value:"Environment <code>contract</code> Object",id:"environment-contract-object",level:3},{value:"Triggers",id:"triggers",level:3},{value:"YAML",id:"yaml",level:3},{value:"Torque <code>built-in</code> Workflows",id:"torque-built-in-workflows",level:2},{value:"<code>built-in</code> workflows",id:"built-in-workflows",level:3},{value:"Explore Use-cases",id:"explore-use-cases",level:2}],u={toc:p},d="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"workflow"},"Workflow"),(0,r.kt)("p",null,"Workflows are a powerful way to automate and orchestrate complex processes. They allow you to define a series of actions and steps that are executed in a specific order. Workflows can be triggered by events or scheduled to run at specific times."),(0,r.kt)("p",null,"Workflow discovery is done in the same way of Blueprints. The yaml needs to be under the ",(0,r.kt)("inlineCode",{parentName:"p"},"blueprints/")," directory in the repository."),(0,r.kt)("p",null,"The Workflow YAML standard is similar to the Blueprint standard. The only addition to the Workflow specification is the the ",(0,r.kt)("inlineCode",{parentName:"p"},"workflow")," block."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec_version: 2\ndescription: This Workflow will ...\n\n// highlight-start\nworkflow:\n  scope: env\n// highlight-end\n\ngrains: ...\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"scope")," field in a Torque workflow determines where the workflow is available. There are two possible values for the ",(0,r.kt)("inlineCode",{parentName:"p"},"scope")," field:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"env"),": Workflows with this scope are available at the environment level. This means that they can be triggered and executed for the entire environment. These workflows can be used to automate and orchestrate processes that involve multiple resources within the environment.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"env_resource"),": Workflows with this scope are available at the resource level. The availability of these workflows is based on the resource type defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"label-selector")," field. Only resources that match the specified resource type will have access to these workflows. This allows for more granular control and customization of workflows based on specific resource types.\nFor example:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"showLineNumbers",showLineNumbers:!0},"spec_version: 2\ndescription: This Resource Workflow will ...\n\n// highlight-start\nworkflow:\n  scope: env_resource\n  label-selector: aws_instance\n// highlight-end\n\n\ngrains: ...\n")),(0,r.kt)("p",null,"By specifying the appropriate scope for your workflows, you can ensure that they are available and applicable to the desired level of your infrastructure. Whether you need to automate processes at the environment level or target specific resources, Torque workflows provide the flexibility to meet your automation needs."),(0,r.kt)("h3",{id:"bindings"},"Bindings"),(0,r.kt)("p",null,"In a workflow, you can define bindings to access environment and resource information. Bindings are automatic variables that provide context to the workflow. The available bindings depend on the scope of the workflow."),(0,r.kt)("p",null,"For workflows with scope ",(0,r.kt)("inlineCode",{parentName:"p"},"env"),", the following automatic variables are available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bindings.environment_id"))),(0,r.kt)("p",null,"For workflows with scope ",(0,r.kt)("inlineCode",{parentName:"p"},"env_resource"),", the following automatic variables are available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bindings.environment_id")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bindings.grain_path")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bindings.resource_id"))),(0,r.kt)("p",null,"The binding variables will provide the relevant context to access the relevant resource introspection data in the ",(0,r.kt)("inlineCode",{parentName:"p"},"contract")," object available in the workflow."),(0,r.kt)("h3",{id:"environment-contract-object"},"Environment ",(0,r.kt)("inlineCode",{parentName:"h3"},"contract")," Object"),(0,r.kt)("p",null,"When a workflow is executed with a specific scope, the environment ",(0,r.kt)("strong",{parentName:"p"},"context")," JSON object is provided in a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"contract.json"),". This file is accessible from the Runner and contains information about the environment, such as its ID, name, owner email, inputs and all grains introspection data."),(0,r.kt)("p",null,"Here is an example of a ",(0,r.kt)("inlineCode",{parentName:"p"},"contract.json")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "kuzxqUlGSM4C",\n  "name": "EC2",\n  "owner_email": "dev@quali.com",\n  "last_used": "2023-10-07T11:57:18.6865654Z",\n  "inputs": [\n    {\n      "name": "instance_name",\n      "type": "string",\n      "value": "EC2",\n      "sensitive": false,\n      "description": "Name for the EC2 instance"\n    },\n    {\n      "name": "aws_region",\n      "type": "string",\n      "value": "eu-west-1",\n      "sensitive": false,\n      "description": "AWS region to create resources in"\n    },\n    {\n      "name": "instance_ami",\n      "type": "string",\n      "value": "ami-016587dea5af03adb",\n      "sensitive": false,\n      "description": "AMI ID for the EC2 instance"\n    },\n    {\n      "name": "instance_type",\n      "type": "string",\n      "value": "t2.micro",\n      "sensitive": false,\n      "description": "Instance type for the EC2 instance"\n    },\n    {\n      "name": "key_pair_name",\n      "type": "string",\n      "value": "key-pair",\n      "sensitive": false,\n      "description": "Name of the key pair"\n    },\n    {\n      "name": "agent",\n      "type": "agent",\n      "value": "cloud-agent",\n      "sensitive": false,\n      "description": null\n    }\n  ],\n  "grains": {\n    "ec2": {\n      "kind": "terraform",\n      "path": "ec2",\n      "outputs": {\n        "instance_availability_zone": "eu-west-1c",\n        "instance_id": "i-044264d8ee1c50f3d",\n        "instance_private_ip": "172.31.28.188",\n        "instance_public_ip": "18.203.238.11",\n        "instance_subnet_id": "subnet-0c1abbaed3cdbdb66"\n      }\n    },\n    "root_blueprint": {\n      "kind": "blueprint",\n      "path": "root_blueprint",\n      "outputs": {\n        "ec2_instance_availability_zone": "eu-west-1c",\n        "ec2_instance_id": "i-044264d8ee1c50f3d",\n        "ec2_instance_private_ip": "172.31.28.188",\n        "ec2_instance_public_ip": "18.203.238.11",\n        "ec2_instance_subnet_id": "subnet-0c1abbaed3cdbdb66",\n        "ec2_instance_vpc_id": ""\n      }\n    }\n  },\n  "resources": [\n    {\n      "grain_path": "ec2",\n      "resource_name": "my_ec2_instance",\n      "resource_type": "aws_instance",\n      "identifier": "aws_instance.my_ec2_instance",\n      "attributes": {\n        "id": "i-044264d8ee1c50f3d",\n        "ami": "ami-016587dea5af03adb",\n        "arn": "arn:aws:ec2:eu-west-1:<accout-id>:instance/i-044264d8ee1c50f3d",\n        "tags": "..",\n        "host_id": "",\n        "tenancy": "default",\n        "key_name": "key-pair",\n        "tags_all": "..",\n        "timeouts": "",\n        "public_ip": "18.203.238.11",\n        "subnet_id": "subnet-0c1abbaed3cdbdb66",\n        "user_data": "",\n        "monitoring": "False",\n        "private_ip": "172.31.28.188",\n        "public_dns": "ec2-18-203-238-11.eu-west-1.compute.amazonaws.com",\n        "cpu_options": "[\\n  {\\n    \\"amd_sev_snp\\": \\"\\",\\n    \\"core_count\\": 1,\\n    \\"threads_per_core\\": 1\\n  }\\n]",\n        "hibernation": "False",\n        "outpost_arn": "",\n        "private_dns": "ip-172-31-28-188.eu-west-1.compute.internal",\n        "volume_tags": "",\n        "ebs_optimized": "False",\n        "instance_type": "t2.micro",\n        "******_data": "",\n        "cpu_core_count": "1",\n        "instance_state": "running",\n        "ipv6_addresses": "[]",\n        "enclave_options": "[\\n  {\\n    \\"enabled\\": false\\n  }\\n]",\n        "launch_template": "[]",\n        "placement_group": "",\n        "security_groups": "[\\n  \\"default\\"\\n]",\n        "disable_api_stop": "False",\n        "ebs_block_device": "[]",\n        "metadata_options": "[\\n  {\\n    \\"http_endpoint\\": \\"enabled\\",\\n    \\"http_protocol_ipv6\\": \\"disabled\\",\\n    \\"http_put_response_hop_limit\\": 1,\\n    \\"http_tokens\\": \\"optional\\",\\n    \\"instance_metadata_tags\\": \\"disabled\\"\\n  }\\n]",\n        "user_data_base64": "",\n        "availability_zone": "eu-west-1c",\n        "get_******_data": "False",\n        "network_interface": "[]",\n        "root_block_device": "[\\n  {\\n    \\"delete_on_termination\\": true,\\n    \\"device_name\\": \\"/dev/sda1\\",\\n    \\"encrypted\\": false,\\n    \\"iops\\": 100,\\n    \\"kms_key_id\\": \\"\\",\\n    \\"tags\\": {},\\n    \\"tags_all\\": {},\\n    \\"throughput\\": 0,\\n    \\"volume_id\\": \\"vol-00160f2bba38f64ea\\",\\n    \\"volume_size\\": 8,\\n    \\"volume_type\\": \\"gp2\\"\\n  }\\n]",\n        "source_dest_check": "True",\n        "instance_lifecycle": "",\n        "ipv6_address_count": "0",\n        "maintenance_options": "[\\n  {\\n    \\"auto_recovery\\": \\"default\\"\\n  }\\n]",\n        "cpu_threads_per_core": "1",\n        "credit_specification": "[\\n  {\\n    \\"cpu_credits\\": \\"standard\\"\\n  }\\n]",\n        "iam_instance_profile": "",\n        "secondary_private_ips": "[]",\n        "ephemeral_block_device": "[]",\n        "vpc_security_group_ids": "[\\n  \\"sg-085399a72b47e21e3\\"\\n]",\n        "disable_api_termination": "False",\n        "host_resource_group_arn": "",\n        "instance_market_options": "[]",\n        "private_dns_name_options": "[\\n  {\\n    \\"enable_resource_name_dns_a_record\\": false,\\n    \\"enable_resource_name_dns_aaaa_record\\": false,\\n    \\"hostname_type\\": \\"ip-name\\"\\n  }\\n]",\n        "spot_instance_request_id": "",\n        "placement_partition_number": "0",\n        "associate_public_ip_address": "True",\n        "user_data_replace_on_change": "False",\n        "primary_network_interface_id": "eni-03e8445441f4ddb2e",\n        "capacity_reservation_specification": "[\\n  {\\n    \\"capacity_reservation_preference\\": \\"open\\",\\n    \\"capacity_reservation_target\\": []\\n  }\\n]",\n        "instance_initiated_shutdown_behavior": "stop"\n      }\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"triggers"},"Triggers"),(0,r.kt)("p",null,"Workflows can be triggered by various types of events or schedules:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"cron"),": Schedules based on cron expressions.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"overridable"),": Optional field to allow end-users to override the cron"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"manual"),": Manually triggered workflows, optionally restricted to specific user groups.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"groups"),": Optional field to allow only users in the specified groups to run the workflow"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"env-event"),": Environment events can be events such as drift detected, updates detected, approval requests, and more. The events include:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Drift Detected")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Updates Detected")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Approval Request Approved")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Approval Request Denied")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Approval Request Cancelled")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Environment Ended")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Environment Launched")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Environment Active With Error")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Environment Ending Failed")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Environment Force Ended")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Environment Extended")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Collaborator Added")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Environment Idle"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec_version: 2\ndescription: ...\n\nworkflow:\n  scope: env\n\n// highlight-start\n  triggers:\n    - type: env-event\n      events:\n        - 'Approval Request Approved'\n        - 'Approval Request Cancelled'\n\n    - type: cron \n      cron: '0 22 * * *' # every day at 22:00\n      overridable: true # Allow end-users to override the cron\n\n    - type: manual \n      groups: # Optional, allow only users in the \"Admin\" group to run the workflow\n        - 'Admins' \n// highlight-end\n   \ninputs: ...\noutputs: ...\ngrains: ...\n")),(0,r.kt)("h3",{id:"yaml"},"YAML"),(0,r.kt)("p",null,"Simple example running shell script in a Workflow"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec_version: 2\ndescription: Workflow with shell grains\n\nworkflow:\n  scope: env_resource\n  label-selector: azurerm_linux_virtual_machine\n  \ninputs:\n  input1:\n    type: string\n    default: 'in1'\n  input2:\n    type: string\n  agent:\n    type: agent\n\noutputs:\n  resource_state:\n    value: '{{ .grains.helper.activities.deploy.commands.print.outputs.state_tr }}'  \n  input1:\n    value: '{{ .inputs.input1 }}'  \n  \ngrains:\n  helper:\n    kind: shell\n    spec:\n      agent:\n          name: '{{ .inputs.agent }}'\n      files:\n        - source: scripts\n          path: scripts/print-resource-2.sh\n      activities:\n        deploy:\n          commands:\n            - name: print\n              command:  'source print-resource-2.sh {{ .bindings.resource_id }} {{ .bindings.grain_path }}'\n              outputs:\n                - state_tr\n\n  job2:\n    kind: shell\n    depends-on: helper\n    spec:\n      agent:\n        name: '{{ .inputs.agent }}'\n      activities:\n        deploy:\n          commands:\n            - name: print                  \n              command:  'echo \"{{ .grains.helper.activities.deploy.commands.print.outputs.state_tr }}\"'\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Shell script:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'resource_id=$1\ngrain_path=$2\ncontract_path=$CONTRACT_FILE_PATH\n\n# will print the attribute "power_state" of the resource\nstate=$(jq --arg ResourceId "$resource_id" --arg GrainPath "$grain_path" \'.resources[] | select(.identifier == $ResourceId and .grain_path == $GrainPath) | .attributes | .power_state\' $contract_path)\n\nexport state_tr=`echo -n $state | tr -d \'"\'`\n\necho ""\necho "extracted values:"\necho "------------------"\necho "state_tr: $state_tr"\necho "------------------"\necho ""\n\ncat $CONTRACT_FILE_PATH\necho $state_tr\nexport $state_tr\n')),(0,r.kt)("h2",{id:"torque-built-in-workflows"},"Torque ",(0,r.kt)("inlineCode",{parentName:"h2"},"built-in")," Workflows"),(0,r.kt)("h3",{id:"built-in-workflows"},(0,r.kt)("inlineCode",{parentName:"h3"},"built-in")," workflows"),(0,r.kt)("p",null,"Torque provides some out-of-the-box workflows for you to use."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"All the built-in workflows are ",(0,r.kt)("inlineCode",{parentName:"p"},"Ansible")," based and available here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/QualiTorque/torque-actions"},"https://github.com/QualiTorque/torque-actions")))),(0,r.kt)("p",null,"In order to use the built-in workflows, a ",(0,r.kt)("inlineCode",{parentName:"p"},"built-in")," field is required and under source.path you need to point to the relevant action. E.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"      built-in: true\n      source:\n        path: https://github.com/QualiTorque/torque-actions.git//resource/<action>.yaml\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The list of the available actions:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aws-power-on-ec2-tf"),": This workflow is used to power on an EC2 instance in AWS that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aws-power-off-ec2-tf"),": This workflow is used to power off an EC2 instance in AWS that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aws-restart-ec2-tf"),": This workflow is used to restart an EC2 instance in AWS that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"azure-power-on-vm-tf"),": This workflow is used to power on a virtual machine in Azure that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"azure-power-off-vm-tf"),": This workflow is used to power off a virtual machine in Azure that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"azure-restart-vm-tf"),": This workflow is used to restart a virtual machine in Azure that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"netapp-cvo-azure-power-on-vm-tf"),": This workflow is used to power on a NetApp Cloud Volumes ONTAP virtual machine in Azure that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"netapp-cvo-azure-deallocate-vm-tf"),": This workflow is used to deallocate a NetApp Cloud Volumes ONTAP virtual machine in Azure that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"netapp-cvo-azure-restart-vm-tf"),": This workflow is used to restart a NetApp Cloud Volumes ONTAP virtual machine in Azure that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aws-temp-stop-rds-tf"),": This workflow is used to temporarily stop an RDS instance in AWS that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aws-delete-rds-tf"),": This workflow is used to delete an RDS instance in AWS that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"azure-delete-mariadb-tf"),": This workflow is used to delete a MariaDB server in Azure that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"azure-delete-mysql-tf"),": This workflow is used to delete a MySQL server in Azure that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"azure-delete-postgresql-tf"),": This workflow is used to delete a PostgreSQL server in Azure that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"azure-delete-flexible-mysql-tf"),": This workflow is used to delete a flexible MySQL server in Azure that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"azure-delete-flexible-postgresql-tf"),": This workflow is used to delete a flexible PostgreSQL server in Azure that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"azure-delete-mssql-tf"),": This workflow is used to delete an MSSQL server in Azure that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"azure-stop-mysql-server-tf"),": This workflow is used to stop a MySQL server in Azure that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"azure-start-mysql-server-tf"),": This workflow is used to start a MySQL server in Azure that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"azure-stop-mariadb-server-tf"),": This workflow is used to stop a MariaDB server in Azure that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"azure-start-mariadb-server-tf"),": This workflow is used to start a MariaDB server in Azure that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"azure-stop-flexible-postgresql-server-tf"),": This workflow is used to stop a flexible PostgreSQL server in Azure that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"azure-start-flexible-postgresql-server-tf"),": This workflow is used to start a flexible PostgreSQL server in Azure that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"azure-stop-flexible-mysql-server-tf"),": This workflow is used to stop a flexible MySQL server in Azure that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"azure-start-flexible-mysql-server-tf"),": This workflow is used to start a flexible MySQL server in Azure that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"azure-restart-mariadb-server-tf"),": This workflow is used to restart a MariaDB server in Azure that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"azure-restart-mysql-server-tf"),": This workflow is used to restart a MySQL server in Azure that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"azure-restart-flexible-mysql-server-tf"),": This workflow is used to restart a flexible MySQL server in Azure that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"azure-restart-flexible-postgresql-server-tf"),": This workflow is used to restart a flexible PostgreSQL server in Azure that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"azure-restart-postgresql-server-tf"),": This workflow is used to restart a PostgreSQL server in Azure that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aws-start-rds-tf"),": This workflow is used to start an RDS instance in AWS that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aws-power-on-ec2-cfn"),": This workflow is used to power on an EC2 instance in AWS that was provisioned using CloudFormation.."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aws-power-off-ec2-cfn"),": This workflow is used to power off an EC2 instance in AWS that was provisioned using CloudFormation.."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aws-restart-ec2-cfn"),": This workflow is used to restart an EC2 instance in AWS that was provisioned using CloudFormation.."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aws-temp-stop-rds-cfn"),": This workflow is used to temporarily stop an RDS instance in AWS that was provisioned using CloudFormation.."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aws-start-rds-cfn"),": This workflow is used to start an RDS instance in AWS that was provisioned using CloudFormation.."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"azure-pause-aks-tf"),": This workflow is used to pause an AKS cluster in Azure that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"azure-resume-aks-tf"),": This workflow is used to resume an AKS cluster in Azure that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aws-pause-eks-tf"),": This workflow is used to pause an EKS cluster in AWS that was provisioned using Terraform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aws-resume-eks-tf"),": This workflow is used to resume an EKS cluster in AWS that was provisioned using Terraform.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example of ",(0,r.kt)("inlineCode",{parentName:"strong"},"built-in")," workflow:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec_version: 2\ndescription: This workflow pauses an EKS cluster on-demand\n\nworkflow:\n  scope: env\n  label-selector: eks_cluster\n  triggers:\n    - type: manual\n\ninputs:\n  agent:\n    type: agent\n    default: cloud-agent\n\ngrains:\n  pause_eks:\n    kind: ansible\n    spec:\n// highlight-start\n      built-in: true\n      source:\n        path: https://github.com/QualiTorque/torque-actions.git//resource/aws-pause-eks-tf.yaml\n// highlight-end\n      agent:\n        name: '{{ .inputs.agent }}'\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Only one grain with ",(0,r.kt)("em",{parentName:"li"},"built-in")," action may be present in workflow blueprint"),(0,r.kt)("li",{parentName:"ul"},"One action will be ran per one introspection resource. ")))),(0,r.kt)("h2",{id:"explore-use-cases"},"Explore Use-cases"),(0,r.kt)("p",null,"To explore the different use-cases ",(0,r.kt)("a",{parentName:"p",href:"workflows-use-cases"},"click here")))}c.isMDXComponent=!0}}]);