"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1552],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,c[1]=s;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8092:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},c="Kvrocks Exporter",s={unversionedId:"kvrocks-exporter",id:"kvrocks-exporter",title:"Kvrocks Exporter",description:"Like the Redis metrics monitor, Kvrocks also exports the internal metrics to INFO commands.",source:"@site/docs/kvrocks-exporter.md",sourceDirName:".",slug:"/kvrocks-exporter",permalink:"/docs/kvrocks-exporter",draft:!1,editUrl:"https://github.com/apache/kvrocks-website/tree/main/docs/kvrocks-exporter.md",tags:[],version:"current",lastUpdatedBy:"Twice",lastUpdatedAt:1689214026,formattedLastUpdatedAt:"Jul 13, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Backup",permalink:"/docs/backup"},next:{title:"References",permalink:"/docs/category/references"}},i={},p=[],l={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kvrocks-exporter"},"Kvrocks Exporter"),(0,o.kt)("p",null,"Like the Redis metrics monitor, Kvrocks also exports the internal metrics to INFO commands."),(0,o.kt)("p",null,"Users can collect and store those metrics, we also provide ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KvrocksLabs/kvrocks_exporter"},"the Kvrocks exporter")," for Prometheus metrics since it's widely used now."),(0,o.kt)("p",null,"Kvrocks Grafana dashboard template is available on Grafana.com. You can import the Dashboard with ID 15286 or downloads the JSON file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://grafana.com/api/dashboards/15286 -O kvrocks-dashboard.json\n")),(0,o.kt)("p",null,"Example Grafana screenshots:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Grafana Example",src:r(6313).Z,width:"1547",height:"1698"})))}m.isMDXComponent=!0},6313:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/grafana-exporter-9b24b9a87885854f23b04af3c5cc08f4.jpeg"}}]);