"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[791],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),h=a,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},210:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:24,title:"The Ansible Grain"},i=void 0,l={unversionedId:"blueprint-designer-guide/blueprints/ansible-grain",id:"blueprint-designer-guide/blueprints/ansible-grain",title:"The Ansible Grain",description:"The Ansible grain is Torque\u2019s native support for orchestrating the execution of Ansible playbooks as part of a Torque blueprint. The referenced playbook can rely on vars or inventory-hosts that are dynamically provided by Torque, and then utilize them to perform configuration management, updates, a health check or any other flow that is executable from Ansible.",source:"@site/docs/blueprint-designer-guide/blueprints/ansible-grain.md",sourceDirName:"blueprint-designer-guide/blueprints",slug:"/blueprint-designer-guide/blueprints/ansible-grain",permalink:"/blueprint-designer-guide/blueprints/ansible-grain",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/blueprint-designer-guide/blueprints/ansible-grain.md",tags:[],version:"current",sidebarPosition:24,frontMatter:{sidebar_position:24,title:"The Ansible Grain"},sidebar:"torqueSidebar",previous:{title:"The Shell Grain",permalink:"/blueprint-designer-guide/blueprints/shell-grain"},next:{title:"The CloudShell Grain",permalink:"/blueprint-designer-guide/blueprints/cloudshell-grain"}},s={},u=[{value:"Tools and technologies",id:"tools-and-technologies",level:3},{value:"source",id:"source",level:3},{value:"agent",id:"agent",level:3},{value:"Inventory-file",id:"inventory-file",level:3}],p={toc:u},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Ansible grain is Torque\u2019s native support for orchestrating the execution of Ansible playbooks as part of a Torque blueprint. The referenced playbook can rely on vars or inventory-hosts that are dynamically provided by Torque, and then utilize them to perform configuration management, updates, a health check or any other flow that is executable from Ansible. "),(0,a.kt)("p",null,"Note: an Ansible grain does not provide grain outputs. "),(0,a.kt)("h3",{id:"tools-and-technologies"},"Tools and technologies"),(0,a.kt)("p",null,"The following tools and technologies are installed out of the box on our agents in the Kubernetes pods and can be used when writing grain scripts (pre/post, etc.):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"dotnet"),(0,a.kt)("li",{parentName:"ul"},"git"),(0,a.kt)("li",{parentName:"ul"},"python3"),(0,a.kt)("li",{parentName:"ul"},"pip3"),(0,a.kt)("li",{parentName:"ul"},"ansible"),(0,a.kt)("li",{parentName:"ul"},"openssh-client")),(0,a.kt)("h3",{id:"source"},"source"),(0,a.kt)("p",null,"The source section of an Ansible grain provides Torque with the information on where the Ansible playbook is stored and should be retrieved from. This could be either a direct source URL to an Ansible playbook YAML file, or it can be a reference from a Torque-connected git repository. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example - direct:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"My_Ansible_Grain:\n  depends-on: Ubuntu_VM\n  kind: ansible\n  spec:\n    source:\n      path: https://github.com/MyOrg/my-repo//ansible/install_httpd_rhel.yaml\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example - repository:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"My_Ansible_Grain:\n  kind: ansible\n  spec:\n    source:\n      store: assets\n      path: assets/ansible/install_apache2_webgame_ubuntu.yaml\n")),(0,a.kt)("h3",{id:"agent"},"agent"),(0,a.kt)("p",null,"Please see ",(0,a.kt)("a",{parentName:"p",href:"/blueprint-designer-guide/blueprints/blueprints-yaml-structure#host"},"the grain agent")," for more details."),(0,a.kt)("h3",{id:"inventory-file"},"Inventory-file"),(0,a.kt)("p",null,"Inventory file is a special grain section unique to the ansible grain, that allows you to provide in a YAML structured format, the content of the Ansible inventory file that will be generated for the Ansible playbook to use. For a deep understanding of the format of this file, please see Ansible\u2019s official documentation at ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ansible.com/ansible/latest/inventory_guide/intro_inventory.html#inventory-basics-formats-hosts-and-groups"},"https://docs.ansible.com/ansible/latest/inventory_guide/intro_inventory.html#inventory-basics-formats-hosts-and-groups"),".\nThe general standard structure for such a file is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"host_group:\n  hosts:\n    host1:\n      host1_var: host1_var_value\n    host2:\n      host2_var: host1_var_value\n  vars:\n    group_var: group_var_value\n")),(0,a.kt)("p",null,"Depending on the Ansible packages used in the playbook, these host and group variables may be used automatically by the package step (in which case, they must be provided in a specific name, for example an \u201cansible_become: yes/no\u201d group var will determine if the actions in the playbook need to be run as a different user from the host connection info.).\nVariables not defined on a host will automatically default to the values set in the vars section of the host_group. For example, the below playbook:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'---\n- gather_facts: no\n  hosts: all\n  tasks:\n  - name: Print Hello World\n    debug: \n      msg: "Hello World, my name is {{ person_name}}"\n')),(0,a.kt)("p",null,"with the below inventory file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"      inventory-file:\n        all:\n          hosts:\n            host1:\n              person_name: John\n            host2:          \n          vars:\n            person_name: Doe\n")),(0,a.kt)("p",null,"will result in this output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'TASK [Print Hello World] *******************************************************\nok: [host1] => {\n    "msg": "Hello World, my name is John"\n}\nok: [host2] => {\n    "msg": "Hello World, my name is Doe"\n}\n')),(0,a.kt)("p",null,"Any section of the \u201cinventory-file:\u201d can contain dynamic values from dependent grains, from the blueprint\u2019s inputs or from Torque\u2019s parameter storage. For more information, see  ",(0,a.kt)("a",{parentName:"p",href:"/blueprint-designer-guide/blueprints/blueprints-yaml-structure#torque-templating-engine"},"Torque Templating engine"),".\n",(0,a.kt)("strong",{parentName:"p"},"Example:")," Below is an example of a grains section of a blueprint, containing an Ansible grain:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"}," grains:\n  hello_world_ansible:\n    kind: ansible\n    spec:\n      source:\n        store: assets\n        path: ansible/hello_world.yaml\n      agent:\n        name: my-torque-agent\n      inventory-file:\n        all:\n          hosts:\n            host1:\n              person_name: John\n            host2:          \n          vars:\n            person_name: Doe\n")))}d.isMDXComponent=!0}}]);