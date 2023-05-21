"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},c="FAQs",s={unversionedId:"faq",id:"faq",title:"FAQs",description:"Question: How do I get keys num in Kvrocks?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,editUrl:"https://github.com/apache/incubator-kvrocks-website/tree/main/docs/faq.md",tags:[],version:"current",lastUpdatedBy:"tison",lastUpdatedAt:1684635261,formattedLastUpdatedAt:"May 21, 2023",frontMatter:{},sidebar:"docs",previous:{title:"INFO sections",permalink:"/docs/info-sections"}},i={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"faqs"},"FAQs"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Question: How do I get keys num in Kvrocks?")),(0,a.kt)("p",null,"Kvrocks doesn't store the key number directly. It needs to scan the DB and then retrieve the key number by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"dbsize scan")," command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"127.0.0.1:6666> dbsize scan\nOK\n\n127.0.0.1:6666> info keyspace\n# Keyspace\n# Last scan db time: Thu Mar 24 06:38:39 2022\ndb0:keys=1,expires=0,avg_ttl=0,expired=0\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Question: Why didn't the Kvrocks disk size change after the FLUSHALL/FLUSHDB command was executed?")),(0,a.kt)("p",null,"To prevent the FLUSHALL/FLUSHDB command blocking the request, Kvrocks uses the RocksDB DeleteRange API to implement the flush command,\nwhich only marks the key range as deleted without reclaiming the disk space at once. Those deleted keys are recycled when the\nbackground compaction is triggered. You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"compact")," command to free up the disk space after flushing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"127.0.0.1:6666> flushall\nOK\n\n# Send the compact command to release the disk space\n127.0.0.1:6666> compact\nOK\n")))}d.isMDXComponent=!0}}]);