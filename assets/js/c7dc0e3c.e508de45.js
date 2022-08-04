"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[487],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,b=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8146:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:3,title:"Blueprint Quickstart Guide"},u=void 0,l={unversionedId:"blueprint-designer-guide/blueprint-quickstart-guide",id:"blueprint-designer-guide/blueprint-quickstart-guide",title:"Blueprint Quickstart Guide",description:"Now that you have seen how Torque works, it\u2019s time to link your assets to Torque and see what you can do with them.",source:"@site/docs/blueprint-designer-guide/blueprint-quickstart-guide.md",sourceDirName:"blueprint-designer-guide",slug:"/blueprint-designer-guide/blueprint-quickstart-guide",permalink:"/blueprint-designer-guide/blueprint-quickstart-guide",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/blueprint-designer-guide/blueprint-quickstart-guide.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Blueprint Quickstart Guide"},sidebar:"torqueSidebar",previous:{title:"What's next?",permalink:"/getting-started/Whats next"},next:{title:"Autogenerated Blueprints",permalink:"/blueprint-designer-guide/Autogenerated Blueprints"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Let Torque autogenerate blueprints from your assets",id:"let-torque-autogenerate-blueprints-from-your-assets",level:2},{value:"Create a multi-asset blueprint",id:"create-a-multi-asset-blueprint",level:2}],d={toc:c};function m(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Now that you have seen how Torque works, it\u2019s time to link your assets to Torque and see what you can do with them."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You have created your own space"),(0,a.kt)("li",{parentName:"ul"},"Asset repository associated to the space"),(0,a.kt)("li",{parentName:"ul"},"Execution host associated to the space")),(0,a.kt)("h2",{id:"let-torque-autogenerate-blueprints-from-your-assets"},"Let Torque autogenerate blueprints from your assets"),(0,a.kt)("p",null,"Torque launches environments out of blueprints, which are YAML files that represent the environments. So the first step is to create blueprints out of your existing assets."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In your space, go to ",(0,a.kt)("strong",{parentName:"li"},"Settings > Repositories")," and discover your assets.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"Locale Dropdown",src:n(8818).Z,width:"589",height:"384"}))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the assets you want Torque to discover and click ",(0,a.kt)("strong",{parentName:"p"},"Generate Blueprints"),"."),(0,a.kt)("p",{parentName:"li"},"Torque creates a blueprint YAML for each asset, and lists the blueprints in your space\u2019s ",(0,a.kt)("strong",{parentName:"p"},"Blueprints")," page. You can click the blueprint to see the YAML file."))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"Locale Dropdown",src:n(8767).Z,width:"1055",height:"458"}))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Publish")," the blueprints and you\u2019re good to go.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"Locale Dropdown",src:n(9741).Z,width:"307",height:"259"}))),(0,a.kt)("p",null,"  You and your space\u2019s users can now launch these environments from the space."),(0,a.kt)("p",null,"  In some cases, you may need to adjust your autogenerated blueprints. For details on what you can do, see ",(0,a.kt)("a",{parentName:"p",href:"/blueprint-designer-guide/autogenerated%20blueprints"},"Autogenerated Blueprints"),"."),(0,a.kt)("h2",{id:"create-a-multi-asset-blueprint"},"Create a multi-asset blueprint"),(0,a.kt)("p",null,"So far, we\u2019ve learned how to create single-asset blueprints. But what if you want to create an application-stack environment? This is easily done by nesting single-asset blueprints within a master blueprint as grains. Each grain represents a single-asset blueprint, which can be an application or cloud service deployed via an asset, like a Terraform module, Helm chart, or CloudFormation template, to name a few. "),(0,a.kt)("p",null,"For example, the ",(0,a.kt)("strong",{parentName:"p"},"Helm Application with MySQL and S3 Deployed by Terraform")," sample blueprint (available in the Sample space ",(0,a.kt)("a",{parentName:"p",href:"https://portal.qtorque.io/Sample/blueprints/%5BSample%5DHelm%20Application%20with%20MySql%20and%20S3%20Deployed%20by%20Terraform"},"here"),", which deploys 2 Terraform modules and a Helm chart:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=",title:""},"spec_version: 2\ndescription: Robotshot microservices application deployed on K8S with Helm and RDS deployed with TF\n\noutputs:\n  WebsiteUrl:\n    kind: link\n    value: 'https://portal.qtorque.io/static/demo-quick-links/stans-robot-shop.html'\n\n\ngrains:\n  mySqlDB:\n    kind: terraform\n    spec:\n      source:\n        path: github.com/QualiTorque/samples.git//terraform/rds\n      host:\n        name: eks-demo\n      inputs:\n        - sandbox_id: '{{ sandboxid | downcase }}'\n        - size: small \n        - allocated_storage: 20\n        - db_name: demo_db\n        - engine_version: 8.0.26\n        - engine: MySQL\n        - username: adminuser\n        - vpc_id: vpc-02e3bca90b081cd0f\n        - region: us-east-1\n      outputs:\n        - hostname\n        - connection_string\n\n  s3Bucket:\n    kind: terraform\n    spec: \n      source:\n        path: github.com/QualiTorque/samples.git//terraform/s3\n      host:\n        name: eks-demo\n      inputs:\n        - region: eu-west-1\n        - acl: public-read\n        - name: 'robotshop-s3-{{ sandboxid | downcase }}'\n      outputs:\n        - s3_bucket_arn\n\n  robotShopMicroservices:\n    kind: helm\n    depends-on: mySqlDB, s3Bucket\n    spec:\n      source:\n        path: https://github.com/QualiTorque/samples.git//helm/robotshop\n      host:\n        name: eks-demo\n      inputs:\n        - hostname: 'robotshop-{{ sandboxid | downcase }}'\n        - version: 0.4.3\n        - connectionString: '{{ .grains.mySqlDB.outputs.connection_string }}'\n        - objectStore.s3BucketArn: '{{ .grains.s3Bucket.outputs.s3_bucket_arn }}'\n        - redis.storageClassName: gp2\n")),(0,a.kt)("p",null,"To learn more, see ",(0,a.kt)("a",{parentName:"p",href:"/blueprint-designer-guide/blueprints"},"Blueprint YAML"),"."))}m.isMDXComponent=!0},8818:function(e,t,n){t.Z=n.p+"assets/images/discover-assets-a8fecdae33fe53afc240ea9e81c634c2.png"},8767:function(e,t,n){t.Z=n.p+"assets/images/new-assets-df183b6ed6b4af89513d68cc09d29c78.png"},9741:function(e,t,n){t.Z=n.p+"assets/images/publish-blueprint-be345b9e5375d4dd00771bb0ec8cd9fa.png"}}]);