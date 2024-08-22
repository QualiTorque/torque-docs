"use strict";(self.webpackChunktorque=self.webpackChunktorque||[]).push([[2251],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,g=d["".concat(l,".").concat(h)]||d[h]||c[h]||a;return n?o.createElement(g,r(r({ref:t},p),{},{components:n})):o.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(7462),i=(n(7294),n(3905));const a={sidebar_position:39,title:"SSO Configuration"},r=void 0,s={unversionedId:"admin-guide/sso",id:"admin-guide/sso",title:"SSO Configuration",description:"With just a few simple steps, your organization\u2019s employees can log into Torque with their corporate accounts using SSO.",source:"@site/docs/admin-guide/sso.md",sourceDirName:"admin-guide",slug:"/admin-guide/sso",permalink:"/admin-guide/sso",editUrl:"https://github.com/QualiTorque/torque-docs/tree/master/docs/admin-guide/sso.md",tags:[],version:"current",sidebarPosition:39,frontMatter:{sidebar_position:39,title:"SSO Configuration"},sidebar:"torqueSidebar",previous:{title:"Self-Managed BitBucket",permalink:"/admin-guide/source-control/self-hosted-repositories/self-managed-bitbucket"},next:{title:"input-sources",permalink:"/admin-guide/input-sources"}},l={},u=[{value:"How this works",id:"how-this-works",level:2},{value:"Integrating your IdP with Torque",id:"integrating-your-idp-with-torque",level:2},{value:"Associating a user to multiple spaces",id:"associating-a-user-to-multiple-spaces",level:2},{value:"Mapping Torque user groups to IdP groups",id:"mapping-torque-user-groups-to-idp-groups",level:2},{value:"Configuring Azure active directory (Entra) to include group information.",id:"configuring-azure-active-directory-entra-to-include-group-information",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Configuring Okta to include group information.",id:"configuring-okta-to-include-group-information",level:3},{value:"Troubleshooting",id:"troubleshooting-1",level:3},{value:"User provisioning with SCIM",id:"user-provisioning-with-scim",level:2},{value:"Relation to SSO",id:"relation-to-sso",level:3},{value:"Configuring user provisioning",id:"configuring-user-provisioning",level:3},{value:"Okta",id:"okta",level:3},{value:"Azure active directory (Entra)",id:"azure-active-directory-entra",level:3},{value:"Configuring Azure AD SSO (OIDC) on Private SaaS",id:"configuring-azure-ad-sso-oidc-on-private-saas",level:2},{value:"Overview",id:"overview",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Azure AD App Registration",id:"azure-ad-app-registration",level:3},{value:"Configurations needed",id:"configurations-needed",level:3},{value:"Group Synchronization",id:"group-synchronization",level:3}],p={toc:u},d="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"With just a few simple steps, your organization\u2019s employees can log into Torque with their corporate accounts using SSO. "),(0,i.kt)("p",null,"SSO integration provides enhanced security and significant cost-savings as you no longer need to manage your user accounts in Torque and your employees don\u2019t need to remember another set of credentials. Quick, easy and hassle-free."),(0,i.kt)("p",null,"This is done by integrating your organization's identity provider with Torque's identity management system. Torque uses Okta for identity management and supports integration with all identity providers (IdPs).\nIn this article:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/admin-guide/sso#how-this-works"},"How this works")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/admin-guide/sso#integrating-your-idp-with-torque"},"Integrating your IdP with Torque")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/admin-guide/sso#associating-a-user-to-multiple-spaces"},"Associating a user to multiple spaces")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/admin-guide/sso#mapping-torque-user-groups-to-idp-groups"},"Mapping Torque user groups to IdP groups")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/admin-guide/sso#user-provisioning-with-scim"},"User provisioning with SCIM"))),(0,i.kt)("h2",{id:"how-this-works"},"How this works"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Your Idp admin creates an application on your IdP that defines the relevant users, as explained in the section below."),(0,i.kt)("li",{parentName:"ol"},"We map your IdP's client application to Torque's identity management and provide you with an SSO-enabled account."),(0,i.kt)("li",{parentName:"ol"},"A member of your organization uses this account to log in."),(0,i.kt)("li",{parentName:"ol"},"The user is redirected to Torque's Corporate Account SSO (Single Sign On) login page."),(0,i.kt)("li",{parentName:"ol"},"The user enters their corporate email address and password."),(0,i.kt)("li",{parentName:"ol"},"We authenticate the user against your IdP and grant access to Torque.")),(0,i.kt)("h2",{id:"integrating-your-idp-with-torque"},"Integrating your IdP with Torque"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On your IdP, create a new client application.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the application, do the following:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Include the users that will access Torque."),(0,i.kt)("li",{parentName:"ol"},"For each user, specify the following:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"space_name"),": Torque Space in which the user will operate."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"space_role"),": User's role in that space, as defined in ",(0,i.kt)("strong",{parentName:"li"},"Administration > Roles > Space Roles"),". To add a user to multiple spaces, see Associating a user to multiple spaces section below."),(0,i.kt)("li",{parentName:"ul"},"(Optional) ",(0,i.kt)("strong",{parentName:"li"},"timezone")," : The user's timezone in IANA format (",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"},"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"),")"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Save the application.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy the relevant details from the application. These may change depending on your IdP - see this Okta help article for details. For example, these are the details for SAML 2.0:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"IdP Issuer URI"),(0,i.kt)("li",{parentName:"ul"},"IdP Single Sign-On URL"),(0,i.kt)("li",{parentName:"ul"},"IdP Signature Certificate"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the Quali Support Center and add a new ticket, requesting SSO integration:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"+ Add")," in the top left corner."),(0,i.kt)("li",{parentName:"ol"},"From the ",(0,i.kt)("strong",{parentName:"li"},"Requester")," drop-down list, select ",(0,i.kt)("strong",{parentName:"li"},"Torque"),"."),(0,i.kt)("li",{parentName:"ol"},"From the ",(0,i.kt)("strong",{parentName:"li"},"Form")," drop-down list, select ",(0,i.kt)("strong",{parentName:"li"},"Torque Support Request"),"."),(0,i.kt)("li",{parentName:"ol"},"Enter a ",(0,i.kt)("strong",{parentName:"li"},"Subject"),'. For example: "SSO integration for Quali", and in the description, request SSO integration, and provide the names of the custom user attributes and the application details.'),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Submit"),".")),(0,i.kt)("p",{parentName:"li"},"Once SSO integration is set up, the application\u2019s users will be able to use your SSO-enabled account to log in to Torque, as explained in Login to Torque."))),(0,i.kt)("p",null,"NOTE: When the user first logs in via SSO, Torque sets up the user's profile, including contact details, space associations and space/account role settings. However, it is possible to update the user's profile on subsequent SSO logins as well. For details, contact Torque Support."),(0,i.kt)("h2",{id:"associating-a-user-to-multiple-spaces"},"Associating a user to multiple spaces"),(0,i.kt)("p",null,"You can also add a user to multiple spaces, each with a different role. To do so, provide comma-separated values of the space names and corresponding space roles. For example, you could add a user as Space Member to the Trial space and Space Developer to the DevOps space."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Points to consider:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If there are multiple spaces and only one role, reuse that role in all specified spaces."),(0,i.kt)("li",{parentName:"ul"},"If there are multiple roles for the same space, use the first valid one. "),(0,i.kt)("li",{parentName:"ul"},"If the role name is invalid (unknown value in Torque), assign the Space Member role."),(0,i.kt)("li",{parentName:"ul"},"If there are more spaces than roles, assign Space Member to the extra spaces."),(0,i.kt)("li",{parentName:"ul"},"If there are more roles than spaces, ignore those extra roles."),(0,i.kt)("li",{parentName:"ul"},"If the space name is invalid (unknown value in Torque), ignore that space and its corresponding role.")),(0,i.kt)("h2",{id:"mapping-torque-user-groups-to-idp-groups"},"Mapping Torque user groups to IdP groups"),(0,i.kt)("p",null,"Each group in Torque as an \u2018IdP identifier\u2019 field. For SSO users to be assigned to the group automatically, the field must contain the same identifier (usually a GUID) as the group in the IdP (the groups don\u2019t have to have the exact same name)"),(0,i.kt)("p",null,"In Torque, this is can be set by editing a group in the \u2018Groups\u2019 page under account settings."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(1195).Z,width:"1317",height:"741"}))),(0,i.kt)("p",null,"Finding the group identifier in the IdP is specific for each IdP, in the case of Azure active directory, this is the \u2018Object Id\u2019 field of a group:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(3475).Z,width:"1139",height:"690"}))),(0,i.kt)("p",null,"For groups that have this field set, users are assigned and unassigned automatically with each login based on the groups they belong to in the IdP."),(0,i.kt)("p",null,"Users that do not come from an IdP (have a password) or come from an unsupported IdP (all but Okta and Azure AD) can still be added and removed manually from mapped groups."),(0,i.kt)("h3",{id:"configuring-azure-active-directory-entra-to-include-group-information"},"Configuring Azure active directory (Entra) to include group information."),(0,i.kt)("p",null,"Assuming a working AAD SSO setup, the app in Azure needs to be configured to include the groups additional claim.\nIn \u2018App registration\u2019 find the relevant app and go to Token configuration.\nAdd the groups claim (using the default settings)"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(285).Z,width:"1043",height:"749"}))),(0,i.kt)("p",null,"On the next login, users should be assigned automatically to groups they belong to in Azure and are mapped in Torque (note it sometimes takes a short time before the claims start being sent by AAD after this change)"),(0,i.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"If this doesn't work, it is possible to debug the SSO flow from the browser of an authenticated user.\nopen the network tab in the development tools of the browser, check the \u2018Preserve log\u2019 option or equivalent and perform an SSO login.\none of the calls will be to \u2018idp-callback\u2019, inspect the payload of this call."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(2879).Z,width:"1581",height:"946"}))),(0,i.kt)("p",null,"The call should contain an id_token field, the contents is a JWT token containing all the claims (user information) sent from the IdP to Torque (through the browser).\nCopy the entire contents of this field (without the field name) and paste it into a JWT token decoder (e.d., on ",(0,i.kt)("a",{parentName:"p",href:"https://jwt.io"},"https://jwt.io"),") to view the contents."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(4544).Z,width:"934",height:"876"}))),(0,i.kt)("p",null,"Verify that group information is being included in a format similar to the above or update the app settings in AAD if it\u2019s missing."),(0,i.kt)("p",null,"You can also look for log entries 'Valid login through AzureAD Idp detected' that should include information about group Ids received from the IdP."),(0,i.kt)("h3",{id:"configuring-okta-to-include-group-information"},"Configuring Okta to include group information."),(0,i.kt)("p",null,"Assuming a working Okta configuration, to get group sync working we need to have group information passed to Okta from the IdP and forwarded from it to Torque with each user login."),(0,i.kt)("p",null,"This document will show how this is done when the IdP behind Okta happens to be Azure AD (in a SAML 2 configuration and not the OIDC/JWT flow as above), but it is probably similar for other IdPs."),(0,i.kt)("p",null,"When configuring Azure AD to Okta, you usually set custom attribute in the profile editor to match claim coming from the IDP:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(1383).Z,width:"1511",height:"784"}))),(0,i.kt)("p",null,"Each custom attribute has an \u2018external name\u2019:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(4887).Z,width:"1581",height:"844"}))),(0,i.kt)("p",null,"Then click \u2018edit on \u2018attributes & Claims\u2019\nThe long URLs (claim names) are what you need to set as \u2018external name\u2019 in the attribute in Okta."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(863).Z,width:"1130",height:"853"}))),(0,i.kt)("p",null,"On this screen you are also able to have Azure AD send group related information\nClick the \u201c+Add a group clam\u201d button and use the default setting."),(0,i.kt)("p",null,"In Okta, create a new attribute in the profile editor for groups (note the type is string array), the external name might be different from the example below."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(2719).Z,width:"1130",height:"953"}))),(0,i.kt)("p",null,"Next, we need to map the groups attribute we just created (that will be filled with group data on login) to a \u2018Groups\u2019 field in the user profile that is sent to Torque. Open the \u2018mappings\u2019 screen:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(4998).Z,width:"1342",height:"698"}))),(0,i.kt)("p",null,"The mapping should include a \u2018groups\u2019 field, map to it the attribute we just added (appuser.groups)"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(4416).Z,width:"1519",height:"456"}))),(0,i.kt)("h3",{id:"troubleshooting-1"},"Troubleshooting"),(0,i.kt)("p",null,"If groups still don\u2019t get sync automatically after this is done, it is possible to inspect the information sent from a browser of an authenticated user using a SAML inspection addon."),(0,i.kt)("p",null,"This shows what to expect when using SAML-tracer:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(132).Z,width:"1581",height:"1095"}))),(0,i.kt)("h2",{id:"user-provisioning-with-scim"},"User provisioning with SCIM"),(0,i.kt)("p",null,"Torque supports the SCIM protocol for user provisioning and deprovisioning (group provisioning is currently not supported).\nUser provisioning is the ability to create and delete users in your Torque account in real-time as they are created and deleted in the IdP (identity provider). When SCIM is configured, an http call will be issued from the IdP to Torque with each new user that is added or removed from the app on the IdP that is used to manage Torque users in the basic SSO process."),(0,i.kt)("p",null,'User provisioning with SCIM is optional when configuring SSO. When it is not configured, users can still SSO login normally and their Torque user will be created "just in time" at the moment of login. details about the user are updated with each subsequent login. There are advantage to configuring User provisioning though.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Users are created in Torque when added in the IdP, potentially before their first log in. - This allows an admin to get a better picture of who are the users in the Torque account and to perform actions on them before the first time they logged in such as already associating them to spaces, setting them as collaborators on some environments and so on."),(0,i.kt)("li",{parentName:"ul"},"Users are deprovisioned - Normally, when a user is removed from the IdP, he can no longer login to the Torque account, but the Torque user still appears in the account. Deprovisioning means that one a user cannot SSO into a Torque account, he is removed from it.")),(0,i.kt)("p",null,"The process of user provisioning/deprovisioning is one directional. changes to users in Torque do not affect the IdP."),(0,i.kt)("h3",{id:"relation-to-sso"},"Relation to SSO"),(0,i.kt)("p",null,"User provisioning (SCIM) is an optional component of SSO and can be omitted, as mentioned above, but when active, it would create a new user in Torque to match a user created or associated in the IdP.\nThe new user created is considered 'pending', meaning that this user has never actually logged in before and also that the only way for that user to login is via SSO (pending users do not have a password).\nWhen that same user later logins with SSO for the first time, Torque identifies that this is the same user as the one created via provisioning and performs a normal login.\nWhen a user is removed from the IdP, they can no longer login to Torque, if user provisioning was enabled at the time of deletion, then he is deleted from Torque. Regardless, that user can no longer login to the account.\nThe same app in the IdP is used for both SSO (e.g., using SAML) and for user provisioning.\nNote that while SSO is usually "),(0,i.kt)("h3",{id:"configuring-user-provisioning"},"Configuring user provisioning"),(0,i.kt)("p",null,"In order to set up user provisioning with SCIM, the following is needed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SSO is configured and working in the account."),(0,i.kt)("li",{parentName:"ul"},"Access to the IdP and app that is used for SSO."),(0,i.kt)("li",{parentName:"ul"},'A long token from Torque with the account level permission of "Manage Users" (e.g., a token generated by an account admin)')),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/rest-api/torque_api_tokens"},(0,i.kt)("strong",{parentName:"a"},"Torque API Tokens"))," for generating a token."),(0,i.kt)("p",null,"The process itself is slightly different for different identity providers, two example are provided below on how to configure SCIM in Okta and in Azure."),(0,i.kt)("h3",{id:"okta"},"Okta"),(0,i.kt)("p",null,'Login to Okta\'s admin console and locate the application that is used for SSO with Torque under "Applications" and then "Applications" again under it.\nUnder the \'General\' tab, set the checkbox on "Enable SCIM provisioning"'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(749).Z,width:"1007",height:"713"}))),(0,i.kt)("p",null,"This should cause a new tab to appear on the application named \"Provisioning\". navigate to that tab.\nUnder the provisioning tab ('Integration' settings) click edit and set the following:\nSCIM connector base URL: ",(0,i.kt)("a",{parentName:"p",href:"https://portal.qtorque.io/api/scim"},"https://portal.qtorque.io/api/scim"),'\nUnique identifier field for users: userName\nSupported provisioning actions: set "Push New Users" and "Push Profile Updates" (the other checkboxes should remain unchecked)\nAuthentication Mode: HTTP header\nAuthorization: This field should contain the long token generated above. Do not include word "Bearer" if it appears at the start of the token.'),(0,i.kt)("p",null,'Click "Test connector configuration"\nA screen similar to the below should appear.\nIf the connection is unsuccessful an error message appears with additional details.'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(4225).Z,width:"1031",height:"817"}))),(0,i.kt)("p",null,'Click close on the dialog and "Save" at the button right.'),(0,i.kt)("p",null,"The configured Provisioning screen should appear."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(9514).Z,width:"1024",height:"837"}))),(0,i.kt)("p",null,"Other related settings should remain at their default settings."),(0,i.kt)("p",null,'On the left hand side of the screen, under settings, there is a new tab called "To App", navigate to it.\nClick \'Edit\' under "Provisioning to App" and Enable the checkboxes on "Create Users", "Update user attributes" and "Deactivate users". leave "Sync Password" unchecked. Click Save.'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(298).Z,width:"1030",height:"860"}))),(0,i.kt)("p",null,'At this point, user provisioning should be working. Associate a user to the app normally (under the "Assignments" tab) and observe that it gets created in the Torque account. in case of an error, a red mark will appear next to the user, this links to the "Dashboard" / "Tasks" page where additional information can be found and the operation can be retried.'),(0,i.kt)("h3",{id:"azure-active-directory-entra"},"Azure active directory (Entra)"),(0,i.kt)("p",null,'Login to Azure and navigate to "Enterprise applications", then locate the application used for SSO with your Torque account.\nOn the left hand side menu pick "Provisioning" and click "Get started"\nSet "Provisioning Mode" to Automatic.\nUnder Admin Credential set the following.\nTenant URL: ',(0,i.kt)("a",{parentName:"p",href:"https://portal.qtorque.io/api/scim"},"https://portal.qtorque.io/api/scim"),'\nSecrete Token: This field should contain the long token generated above. Do not include word "Bearer" if it appears at the start of the token.\nClick "Test connection" a message should appear on the top right, confirming a successful connection.\nIf the connection is unsuccessful an error message appears with additional details.'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(2159).Z,width:"981",height:"734"}))),(0,i.kt)("p",null,'Click Save and return to the enterprise application.\nSelect "Provisioning" again "Provisioning" again under it (or the Edit provisioning button on the overview screen), a similar screen to the one where we enabled provisioning appears.\nExpand the "Mappings" section'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(4425).Z,width:"1019",height:"832"}))),(0,i.kt)("p",null,'Click "Provision Microsoft Entra ID Groups". in the screen that appears set "Enabled" to false and click Save.\nClick the X at the top right to return to the screen in the screenshot above and observe that \'Enabled\' is set to No under "Provision Microsoft Entra ID Groups" (May require a refresh)'),(0,i.kt)("p",null,'Return to the Overview tab and click "Start provisioning"\nAt this point, user provisioning should be working.\nAssociate a user to the app normally (under the "Users and groups" tab) and observe that it gets created in the Torque account.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Important note"),": User provisioning is an offline process in Azure. Changes to user association may take up to 40 minutes to be provisioned. Provisioning logs may also take minutes to show changes.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(4158).Z,width:"1134",height:"578"}))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"configuring-azure-ad-sso-oidc-on-private-saas"},"Configuring Azure AD SSO (OIDC) on Private SaaS"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"When users navigate to an instance of the private SaaS application with Azure AD single sign-on (SSO) enabled, they will see a 'Sign in with Azure' button."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"Locale Dropdown",src:n(1058).Z,width:"2378",height:"848"}))),(0,i.kt)("p",null,"Clicking this button will redirect them to the configured Azure AD tenant/app where they will be verified. Upon successful verification, users will be redirected back to the application."),(0,i.kt)("p",null,"On first login, a new user will be created in the application and assigned to a default space with a pre-configured role. The user can then be assigned additional roles in other spaces for subsequent logins."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A pre-existing account created with at least one admin user with email login"),(0,i.kt)("li",{parentName:"ul"},"The application instance is configured for single tenant or private SaaS usage")),(0,i.kt)("h3",{id:"azure-ad-app-registration"},"Azure AD App Registration"),(0,i.kt)("p",null,"In the Azure portal, go to Azure Active Directory > App registrations\nSelect your app registration and note the Application (client) ID shown under 'Essentials'."),(0,i.kt)("p",null,"In the app's 'Authentication' section, add a redirect URL matching your application instance URL in the format:\n",(0,i.kt)("inlineCode",{parentName:"p"},"https://your_app_instance.qtorque.io/api/accounts/idp-callback")),(0,i.kt)("h3",{id:"configurations-needed"},"Configurations needed"),(0,i.kt)("p",null,"To complete the configuration, once successfully registered an AzureAD application, you'll need to provider the following to your Torque Account Manager/Tech support:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Tenant ID"),": Your Azure AD tenant ID"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Client ID"),": The client ID of your Azure AD app registration")),(0,i.kt)("h3",{id:"group-synchronization"},"Group Synchronization"),(0,i.kt)("p",null,"The Azure AD SSO integration supports synchronizing user groups from Azure AD to the application. "),(0,i.kt)("p",null,"See the See ",(0,i.kt)("a",{parentName:"p",href:"/admin-guide/sso#mapping-torque-user-groups-to-idp-groups"},(0,i.kt)("strong",{parentName:"a"},"Configuring IdP for Synchronizing User Groups"))," documentation for setup details."),(0,i.kt)("p",null,"With this configuration, users will be able to seamlessly sign in to your private SaaS application using their Azure AD credentials, with new users automatically provisioned with pre-defined roles and spaces. "),(0,i.kt)("p",null,"The group synchronization feature allows mirroring the group assignment from Azure AD."))}c.isMDXComponent=!0},1058:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/aad-sso-8e39d4c4c8b6cf381bbc7fcd8b8e0496.png"},1195:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/groups-1-0ca237dbfe931b1d72926d64745c557f.png"},4998:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/groups-10-722047899e26e83f56d46cc2191766b3.png"},4416:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/groups-11-24a368ee71bea925967e5b9456dd99bf.png"},132:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/groups-12-80fed889d0d17df654fc7c8f80bf5d70.png"},3475:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/groups-2-24c333004e75597b155ff48b18c1c16a.png"},285:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/groups-3-a5d534be1255f9822e9c24a51e30f39c.png"},2879:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/groups-4-144e149032b94d6af53afdbadebfb054.png"},4544:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/groups-5-8222a72aac35d1a5f1912c15f3f128f1.png"},1383:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/groups-6-9855c6abaa94cca773e7f70ccdfe0b37.png"},4887:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/groups-7-57f63152b14aa70341649db95a2509a1.png"},863:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/groups-8-3bbe481a63cf9f8119cb648548b521c9.png"},2719:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/groups-9-b29746cdfce9d555f01f6ac1f6bb4d61.png"},749:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/scim-1-4973033ae90ff16119aad1d38ed6da7e.png"},4225:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/scim-2-fde259929b303c610398722dac6ef74e.png"},9514:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/scim-3-160ca96e50fa1f47854e7f49d138524c.png"},298:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/scim-4-2cd93084218cddf531cf7d8f3c4197e8.png"},2159:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/scim-5-c081d7b705b14ee7d0aad24bdc92b39d.png"},4425:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/scim-6-bca2dec0702408a3f153119fc77e95f0.png"},4158:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/scim-7-fb044a6a7bf54e0d68d436ce97ad78f5.png"}}]);