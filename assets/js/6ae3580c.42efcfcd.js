"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6330],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),h=i,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={},l="Replication",o={unversionedId:"replication",id:"replication",title:"Replication",description:"An instance is turned into a replica role when SLAVEOF cmd is received.",source:"@site/docs/replication.md",sourceDirName:".",slug:"/replication",permalink:"/docs/replication",draft:!1,editUrl:"https://github.com/apache/incubator-kvrocks-website/tree/main/docs/replication.md",tags:[],version:"current",lastUpdatedBy:"hulk",lastUpdatedAt:1687442289,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Cluster",permalink:"/docs/cluster"},next:{title:"Operation",permalink:"/docs/category/operation"}},c={},s=[{value:"Replication state machine",id:"replication-state-machine",level:2},{value:"Partial Synchronization (PSYNC)",id:"partial-synchronization-psync",level:2},{value:"Full Synchronization",id:"full-synchronization",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"replication"},"Replication"),(0,i.kt)("p",null,"An instance is turned into a replica role when ",(0,i.kt)("inlineCode",{parentName:"p"},"SLAVEOF")," cmd is received."),(0,i.kt)("p",null,"The replica will try to do a partial synchronization (a.k.a. incremental replication) if it is viable. Otherwise, the replica will do a full-sync by copying all the RocksDB's latest backup files."),(0,i.kt)("p",null,"After the full-sync is finished, the replica's DB will be erased and restored using the backup files downloaded from the master, then partial-sync is triggered again."),(0,i.kt)("p",null,"If everything goes OK, the partial-sync is an ever-running procedure that keep receiving every batch the master gets."),(0,i.kt)("h2",{id:"replication-state-machine"},"Replication state machine"),(0,i.kt)("p",null,"A state machine is used in the replica's replication thread to accommodate the complexity."),(0,i.kt)("p",null,"On the replica side, replication is composed of the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Send auth"),(0,i.kt)("li",{parentName:"ol"},"Send db_name to check if the master has the right DB"),(0,i.kt)("li",{parentName:"ol"},"Try ",(0,i.kt)("inlineCode",{parentName:"li"},"PSYNC"),": if succeeds, the replica is in the loop of receiving batches; if not, go to (4)"),(0,i.kt)("li",{parentName:"ol"},"Do ",(0,i.kt)("inlineCode",{parentName:"li"},"FULLSYNC"),":",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"send _fetch_meta to get the latest backup metadata"),(0,i.kt)("li",{parentName:"ol"},"send _fetch_file to get all the backup files listed in the meta"),(0,i.kt)("li",{parentName:"ol"},"restore the replica 's DB using the backup"))),(0,i.kt)("li",{parentName:"ol"},"Go to (1)")),(0,i.kt)("h2",{id:"partial-synchronization-psync"},"Partial Synchronization (PSYNC)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PSYNC")," takes advantage of the rocksdb's WAL iterator. If the requesting sequence number of ",(0,i.kt)("inlineCode",{parentName:"p"},"PSYNC")," is in the range of the WAL files, ",(0,i.kt)("inlineCode",{parentName:"p"},"PSYNC")," is considered viable."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PSYNC")," is a command implemented on master role instance. Unlike other commands (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"GET"),"), ",(0,i.kt)("inlineCode",{parentName:"p"},"PSYNC")," cmd is not a REQ-RESP command, but a REQ-RESP-RESP style. That's the response never ends once the req is accepted."),(0,i.kt)("p",null,"So, ",(0,i.kt)("inlineCode",{parentName:"p"},"PSYNC")," has two main parts in the code:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"libevent callback: This is for sending the batches when the WAL iterator has new data."),(0,i.kt)("li",{parentName:"ul"},"timer callback: When the libevent callback quited because of the exhaustion of the WAL data, the timer callback will check if WAL has new data available from time to time, so to awake the libevent callback again.")),(0,i.kt)("h2",{id:"full-synchronization"},"Full Synchronization"),(0,i.kt)("p",null,"On the master side, to support full synchronization, master must create a RocksDB backup every time receiving a ",(0,i.kt)("inlineCode",{parentName:"p"},"_fetch_meta")," request."),(0,i.kt)("p",null,"On the replica side, after retrieving the metadata, the replica fetch every file listed in the metadata (skip if already existed), and restore the backup. To accelerate a bit, file fetching is executed in parallel."))}u.isMDXComponent=!0}}]);