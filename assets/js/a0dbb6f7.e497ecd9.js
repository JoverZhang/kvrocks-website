"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6783],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=s,h=m["".concat(i,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(h,o(o({ref:t},l),{},{components:n})):a.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:s,o[1]=p;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var a=n(7462),s=(n(7294),n(3905));const r={},o="Namespace",p={unversionedId:"namespace",id:"namespace",title:"Namespace",description:"Like the Redis database, Kvrocks uses the namespace to isolate the data between users. But unlike Redis, each namespace has its own password. The data would be stored in the default namespace when using requirepass. The namespace would have no effect when the cluster mode was enabled like the Redis DB.",source:"@site/docs/namespace.md",sourceDirName:".",slug:"/namespace",permalink:"/docs/namespace",draft:!1,editUrl:"https://github.com/apache/kvrocks-website/tree/main/docs/namespace.md",tags:[],version:"current",lastUpdatedBy:"Twice",lastUpdatedAt:1689214026,formattedLastUpdatedAt:"Jul 13, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/getting-started"},next:{title:"Cluster",permalink:"/docs/cluster"}},i={},c=[{value:"Manage Namespace",id:"manage-namespace",level:2},{value:"Switch Namespace",id:"switch-namespace",level:2},{value:"How Kvrocks implements namespace",id:"how-kvrocks-implements-namespace",level:2}],l={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(m,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"namespace"},"Namespace"),(0,s.kt)("p",null,"Like the Redis database, Kvrocks uses the namespace to isolate the data between users. But unlike Redis, each namespace has its own password. The data would be stored in the default namespace when using ",(0,s.kt)("inlineCode",{parentName:"p"},"requirepass"),". The namespace would have no effect when the cluster mode was enabled like the Redis DB."),(0,s.kt)("h2",{id:"manage-namespace"},"Manage Namespace"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"requirepass")," must be set if you want to add namespaces since we treat the ",(0,s.kt)("inlineCode",{parentName:"p"},"requirepass")," user as administrator."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"# Auth with the requirepass\nredis-cli -p 6666 -a ${REQUIREPASS}\n\n# Add a new namespace with the token, the namespace name must be unique.\n127.0.0.1:6666> namespace add ${NEW NAMESPACE} ${NEW TOKEN}\n\n# Update the namespace's token\n127.0.0.1:6666> namespace set ${NAMESPACE} ${NEW TOKEN}\n\n# Delete the namespace, the namespace's data WOULD NOT be deleted,\n# unless you use the `flushdb` command to flush the DB data.\n127.0.0.1:6666> namespace del ${NAMESPACE}\n\n# Get the namespace's token\n127.0.0.1:6666> namespace get ${NAMESPACE}\n\n# List namespaces\n127.0.0.1:6666> namespace get *\n")),(0,s.kt)("p",null,"Be careful that you must use the ",(0,s.kt)("inlineCode",{parentName:"p"},"config rewrite")," command to persist the new namespaces into the config file."),(0,s.kt)("h2",{id:"switch-namespace"},"Switch Namespace"),(0,s.kt)("p",null,"Firstly, we use the ",(0,s.kt)("inlineCode",{parentName:"p"},"namespace add")," command to create namespace ",(0,s.kt)("inlineCode",{parentName:"p"},"ns1")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"ns2")," with the corresponding tokens ",(0,s.kt)("inlineCode",{parentName:"p"},"token1")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"token2"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"127.0.0.1:6666> namespace add ns1 token1\n127.0.0.1:6666> namespace add ns2 token2\n")),(0,s.kt)("p",null,"Then we can use ",(0,s.kt)("inlineCode",{parentName:"p"},"token1")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"token2"),", operate data between namespaces would NOT affect each other like below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'\n# Use token1 to switch to ns1\n127.0.0.1:6666> auth token1\nOK\n127.0.0.1:6666> set key 100\nOK\n127.0.0.1:6666> get key\n"100"\n\n# Use token2 to switch to ns2\n127.0.0.1:6666> auth token2\nOK\n127.0.0.1:6666> set key 200\nOK\n127.0.0.1:6666> get key\n"200"\n\n# Use token1 to switch to ns1 again, the value is still 100\n127.0.0.1:6666> auth token1\nOK\n127.0.0.1:6666> get key\n"100"\n')),(0,s.kt)("h2",{id:"how-kvrocks-implements-namespace"},"How Kvrocks implements namespace"),(0,s.kt)("p",null,"Kvrocks simply prepend the namespace prefix to the user key and remove it before retrieving."),(0,s.kt)("p",null,"For example, we create a new namespace ",(0,s.kt)("inlineCode",{parentName:"p"},"foo")," with token ",(0,s.kt)("inlineCode",{parentName:"p"},"bar"),", then the ",(0,s.kt)("inlineCode",{parentName:"p"},"foo")," would prepend to the user key. Another way was to split the namespace into different rocksdb column families, but we didn't do that for the sake of simplicity."))}d.isMDXComponent=!0}}]);