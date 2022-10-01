"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"torqueSidebar":[{"type":"html","value":"<div class=\\"torque-brand\\"></div>"},{"type":"html","value":"<h2>Documentation</h2>"},{"type":"link","label":"Welcome to Torque!","href":"/","docId":"intro"},{"type":"category","label":"Getting Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Main Concepts","href":"/getting-started/The Torque Terminology","docId":"getting-started/The Torque Terminology"},{"type":"link","label":"Create an Account","href":"/getting-started/Create an account","docId":"getting-started/Create an account"},{"type":"link","label":"The Sample Space","href":"/getting-started/The Sample Space","docId":"getting-started/The Sample Space"},{"type":"link","label":"Your First Workload","href":"/getting-started/Running your first workload","docId":"getting-started/Running your first workload"},{"type":"link","label":"Create Your Space","href":"/getting-started/Create your space","docId":"getting-started/Create your space"},{"type":"link","label":"Discover Your Assets","href":"/getting-started/Discover Your Assets","docId":"getting-started/Discover Your Assets"},{"type":"link","label":"Connect an Execution Host","href":"/getting-started/Connect an Execution Host","docId":"getting-started/Connect an Execution Host"},{"type":"link","label":"Connect a Kubernetes Cluster","href":"/getting-started/Connect a Kubernetes Cluster","docId":"getting-started/Connect a Kubernetes Cluster"},{"type":"link","label":"Launch Your Blueprint","href":"/getting-started/Launch-environment","docId":"getting-started/Launch-environment"},{"type":"link","label":"What\'s next?","href":"/getting-started/Whats next","docId":"getting-started/Whats next"}]},{"type":"category","label":"Blueprint Designer Guide","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Blueprint Quickstart Guide","href":"/blueprint-designer-guide/blueprint-quickstart-guide","docId":"blueprint-designer-guide/blueprint-quickstart-guide"},{"type":"link","label":"Autogenerated Blueprints","href":"/blueprint-designer-guide/Autogenerated Blueprints","docId":"blueprint-designer-guide/Autogenerated Blueprints"},{"type":"link","label":"Customizing Autogenerated Blueprints","href":"/blueprint-designer-guide/customize-blueprints","docId":"blueprint-designer-guide/customize-blueprints"},{"type":"link","label":"Blueprint YAML","href":"/blueprint-designer-guide/blueprints","docId":"blueprint-designer-guide/blueprints"},{"type":"link","label":"Terraform Authentication on EKS","href":"/blueprint-designer-guide/service-accounts-for-aws","docId":"blueprint-designer-guide/service-accounts-for-aws"},{"type":"link","label":"Terraform Authentication on AKS","href":"/blueprint-designer-guide/service-accounts-for-azure","docId":"blueprint-designer-guide/service-accounts-for-azure"},{"type":"link","label":"Blueprint Policies","href":"/blueprint-designer-guide/Policies","docId":"blueprint-designer-guide/Policies"}]},{"type":"category","label":"Administration","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Roles and Permissions","href":"/admin-guide/roles-and-permissions","docId":"admin-guide/roles-and-permissions"},{"type":"link","label":"Cost Monitoring","href":"/admin-guide/cost","docId":"admin-guide/cost"},{"type":"link","label":"Notifications","href":"/admin-guide/notifications","docId":"admin-guide/notifications"},{"type":"link","label":"Parameters","href":"/admin-guide/params","docId":"admin-guide/params"},{"type":"link","label":"Security Policies","href":"/admin-guide/security-policies","docId":"admin-guide/security-policies"},{"type":"link","label":"Tags","href":"/admin-guide/tags","docId":"admin-guide/tags"},{"type":"link","label":"GitHub Source Control","href":"/admin-guide/source-control-github","docId":"admin-guide/source-control-github"},{"type":"link","label":"GitLab Source Control","href":"/admin-guide/source-control-gitlab","docId":"admin-guide/source-control-gitlab"}]},{"type":"category","label":"Deployment Architecture","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Architecture","href":"/deployment-architecture/Architecture","docId":"deployment-architecture/Architecture"}]},{"type":"category","label":"Integrations","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Integrations Overview","href":"/eco-system/integrations-overview","docId":"eco-system/integrations-overview"},{"type":"link","label":"CI/CD","href":"/eco-system/ci-cd","docId":"eco-system/ci-cd"},{"type":"link","label":"Development Tools","href":"/eco-system/dev-tools","docId":"eco-system/dev-tools"},{"type":"link","label":"Issue Trackers","href":"/eco-system/issue-trackers","docId":"eco-system/issue-trackers"}]}]},"docs":{"admin-guide/cost":{"id":"admin-guide/cost","title":"Cost Monitoring","description":"Torque\'s Cost dashboard provides you with actionable insights into the costs of your organization\'s environment deployments. Cost data is collected using a toque_environment_id tag that is assigned (with a unique value) to every new environment\'s resources.","sidebar":"torqueSidebar"},"admin-guide/notifications":{"id":"admin-guide/notifications","title":"Notifications","description":"Torque Notifications enable space admins to define notifications for environment lifecycle events. The notifications will be sent to Teams or Slack chats, or the automation tool of your choice. You can define multiple notifications for different communication tools, and for different channels in the same communication tool.","sidebar":"torqueSidebar"},"admin-guide/params":{"id":"admin-guide/params","title":"Parameters","description":"The Torque parameter store is a repository of key-value pairs, which can be used and reused in blueprint YAMLs across all spaces in Torque. Two types of parameters are supported:","sidebar":"torqueSidebar"},"admin-guide/roles-and-permissions":{"id":"admin-guide/roles-and-permissions","title":"Roles and Permissions","description":"Now that you understand how Torque works, it\'s time to understand how roles and permissions work, and invite other members of your team to your Torque account and spaces.","sidebar":"torqueSidebar"},"admin-guide/security-policies":{"id":"admin-guide/security-policies","title":"Security Policies","description":"Torque role: Account admin","sidebar":"torqueSidebar"},"admin-guide/source-control-github":{"id":"admin-guide/source-control-github","title":"GitHub Source Control","description":"Torque supports connecting asset/blueprint repositories on GitHub, GitLab and BitBucket out of the box. However, to connect a repository, you must have access to the repository and grant Torque permission to the repository\'s organization, as explained below. For details about connecting a repository, see Discover Your Assets. You should be able to sign in with an account on any one of these online services and immediately get going with connecting asset repositories and launching environments.","sidebar":"torqueSidebar"},"admin-guide/source-control-gitlab":{"id":"admin-guide/source-control-gitlab","title":"GitLab Source Control","description":"Torque supports connecting asset/blueprint repositories on GitLab out of the box. To connect a repository, you must have access to the repository and grant Torque permission to the repository\'s organization, as explained below. For details about connecting a repository, see Discover Your Assets. You should be able to sign in with an account on any one of these online services and immediately get going with connecting asset repositories and launching environments.","sidebar":"torqueSidebar"},"admin-guide/tags":{"id":"admin-guide/tags","title":"Tags","description":"The cloud providers cost management pillars provide tools that cover many aspect of your cloud spending, like billing isolation, specific service limits and cost alerts. There are also 3rd party tools out there that provide enhanced functionality, such as inventory visibility, rightsizing recommendations, idle resources detection etc.","sidebar":"torqueSidebar"},"blueprint-designer-guide/Autogenerated Blueprints":{"id":"blueprint-designer-guide/Autogenerated Blueprints","title":"Autogenerated Blueprints","description":"Torque autogenerated blueprints","sidebar":"torqueSidebar"},"blueprint-designer-guide/blueprint-quickstart-guide":{"id":"blueprint-designer-guide/blueprint-quickstart-guide","title":"Blueprint Quickstart Guide","description":"Now that you have seen how Torque works, it\u2019s time to link your assets to Torque and see what you can do with them.","sidebar":"torqueSidebar"},"blueprint-designer-guide/blueprints":{"id":"blueprint-designer-guide/blueprints","title":"Blueprint YAML","description":"Torque blueprints are reusable components designed to model a required environment from the infrastructure to the application. Blueprint designers utilize Torque\'s VSCode plugin or the Torque\'s self-service UI to build a YAML based imperative blueprints that aimed to fulfill business requirements in a self-service manner for their end-users.","sidebar":"torqueSidebar"},"blueprint-designer-guide/customize-blueprints":{"id":"blueprint-designer-guide/customize-blueprints","title":"Customizing Autogenerated Blueprints","description":"In this article, we\'ll learn how to edit our autogenerated blueprints in Torque. While Torque conveniently autogenerates blueprints out of your assets, these blueprints may be missing some minor details, like the cluster namespace and execution host to use, Terraform version, Helm commands to run, etc.","sidebar":"torqueSidebar"},"blueprint-designer-guide/Policies":{"id":"blueprint-designer-guide/Policies","title":"Blueprint Policies","description":"As the blueprint designer, you can define the blueprint\'s max duration or allow it to run indefinitely, to support scenarios that deploy an environment that must be always online, or delivers a static cloud resource.","sidebar":"torqueSidebar"},"blueprint-designer-guide/service-accounts-for-aws":{"id":"blueprint-designer-guide/service-accounts-for-aws","title":"Terraform Authentication on EKS","description":"If you\'re using an EKS cluster as your execution host, and you want to run Terraform that deploys resources on AWS, you can use a service account to do the authentication and permissions between the pod and the AWS account where the resources will be created. This is done by connecting a service account, which contains these permissions, to the container. The permissions are defined in an IAM role that needs to be associated to the service account.","sidebar":"torqueSidebar"},"blueprint-designer-guide/service-accounts-for-azure":{"id":"blueprint-designer-guide/service-accounts-for-azure","title":"Terraform Authentication on AKS","description":"If you\'re using an AKS cluster as your execution host, and you want to run Terraform that deploys resources on Azure, you can use a  pod managed identity to do the authentication and permissions between the pod and the Azure account where the resources will be created.","sidebar":"torqueSidebar"},"deployment-architecture/Architecture":{"id":"deployment-architecture/Architecture","title":"Architecture","description":"Torque is a SaaS platform that interfaces with different cloud services to enable the deployment and modelling of applications.","sidebar":"torqueSidebar"},"eco-system/ci-cd":{"id":"eco-system/ci-cd","title":"CI/CD","description":"Torque enables you to integrate with various leading CI/CD tools such as Bamboo, Jenkins and TeamCity, to facilitate your application development activities.","sidebar":"torqueSidebar"},"eco-system/dev-tools":{"id":"eco-system/dev-tools","title":"Development Tools","description":"To assist you with your blueprint development activities, we\'ve created the following development tools.","sidebar":"torqueSidebar"},"eco-system/integrations-overview":{"id":"eco-system/integrations-overview","title":"Integrations Overview","description":"Torque supports two types of integrations: CI/CD tools for consuming environments as part of your DevOps pipeline, and development tools that assist you to develop Torque blueprints. Integrations are configured on the space level, allowing each space admin to set up the integrations and capabilties to their team and project.","sidebar":"torqueSidebar"},"eco-system/issue-trackers":{"id":"eco-system/issue-trackers","title":"Issue Trackers","description":"With Issue Trackers integrations, you can configure Torque to send environment lifecycle events to your bug tracking solution.","sidebar":"torqueSidebar"},"getting-started/Connect a Kubernetes Cluster":{"id":"getting-started/Connect a Kubernetes Cluster","title":"Connect a Kubernetes Cluster","description":"Prerequisites","sidebar":"torqueSidebar"},"getting-started/Connect an Execution Host":{"id":"getting-started/Connect an Execution Host","title":"Connect an Execution Host","description":"Next, let\'s connect an execution host to Torque. The execution host is the platform on which the asset will be launched. For example, a Kubernetes cluster can be used as an execution host, and the commands such as terraform apply or helm install would be run from the cluster.","sidebar":"torqueSidebar"},"getting-started/Create an account":{"id":"getting-started/Create an account","title":"Create an Account","description":"Your Torque journey starts with creating a Torque account. This account will serve your organization with your application development needs. As the creator of the account, you are the Account Owner, which basically means you\'re a super admin that can also create other account admins.","sidebar":"torqueSidebar"},"getting-started/Create your space":{"id":"getting-started/Create your space","title":"Create Your Space","description":"As we discussed in The Sample Space, the space is your work area and here you work with your team on a project. It will contain the team members, repositories, assets, and execution hosts.","sidebar":"torqueSidebar"},"getting-started/Discover Your Assets":{"id":"getting-started/Discover Your Assets","title":"Discover Your Assets","description":"Torque needs access to your relevant git repositories to read your Terraform modules or Helm charts.","sidebar":"torqueSidebar"},"getting-started/Launch-environment":{"id":"getting-started/Launch-environment","title":"Launch Your Blueprint","description":"At this point, you have done the following:","sidebar":"torqueSidebar"},"getting-started/Running your first workload":{"id":"getting-started/Running your first workload","title":"Your First Workload","description":"First time?","sidebar":"torqueSidebar"},"getting-started/The Sample Space":{"id":"getting-started/The Sample Space","title":"The Sample Space","description":"Torque comes out of the box with a single space - the Sample space. This space contains several example blueprints for you to play with and get familiarized with the product.","sidebar":"torqueSidebar"},"getting-started/The Torque Terminology":{"id":"getting-started/The Torque Terminology","title":"Main Concepts","description":"Before you start on your Torque journey, please take a moment to familiarize yourself with the following key concepts:","sidebar":"torqueSidebar"},"getting-started/Whats next":{"id":"getting-started/Whats next","title":"What\'s next?","description":"By now, you have succeeded to run your first workload with Torque. To take it to the next level, download your autogenerated blueprints, and store them in your VCS of choice. It may reside in the same repository with your assets, or in a different one.","sidebar":"torqueSidebar"},"intro":{"id":"intro","title":"Welcome to Torque!","description":"APPLICATION ENVIRONMENTS - Anytime. Anywhere.","sidebar":"torqueSidebar"}}}')}}]);