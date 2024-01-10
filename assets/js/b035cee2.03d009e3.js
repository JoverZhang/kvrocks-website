"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8565],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(a),d=n,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||r;return a?o.createElement(h,i(i({ref:t},u),{},{components:a})):o.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9910:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=a(7462),n=(a(7294),a(3905));const r={slug:"kvrocks-graduated-as-tlp",title:"Kvrocks graduated as an Apache Top-Level-Project"},i=void 0,s={permalink:"/blog/kvrocks-graduated-as-tlp",editUrl:"https://github.com/apache/kvrocks-website/tree/main/blog/2023-07-01-kvrocks-graduated-as-tlp/index.md",source:"@site/blog/2023-07-01-kvrocks-graduated-as-tlp/index.md",title:"Kvrocks graduated as an Apache Top-Level-Project",description:"Wilmington, DE \u2013 June 28, 2023 \u2013 The Apache Software Foundation(ASF) announced Kvrocks has graduated from the incubator as a Top-Level-Project. Means that the Kvrocks community has met the Apache Foundation's requirements for The Apache Way practices, diversity, and open communication. Graduation marks a new starting point, while much work is still necessary for the community's long-term health.",date:"2023-07-01T00:00:00.000Z",formattedDate:"July 1, 2023",tags:[],readingTime:5.775,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"kvrocks-graduated-as-tlp",title:"Kvrocks graduated as an Apache Top-Level-Project"},prevItem:{title:"Apache Kvrocks 2023 In Review",permalink:"/blog/kvrocks-2023-in-review"},nextItem:{title:"Getting started with Kvrocks and go-redis",permalink:"/blog/go-redis-kvrocks-opentelemetry"}},c={authorsImageUrls:[]},l=[{value:"Kvrocks Overview &amp; Advantages",id:"kvrocks-overview--advantages",level:3},{value:"Kvrocks Feature Highlights",id:"kvrocks-feature-highlights",level:3},{value:"ADDITIONAL RESOURCES",id:"additional-resources",level:3},{value:"Incubation processes",id:"incubation-processes",level:3},{value:"Our Users",id:"our-users",level:3},{value:"Mentor &amp; PMC Words",id:"mentor--pmc-words",level:3},{value:"Thanks",id:"thanks",level:3},{value:"The End",id:"the-end",level:3}],u={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://news.apache.org/foundation/entry/the-apache-software-foundation-announces-new-top-level-project-apache-kvrocks"},"Wilmington, DE \u2013 June 28, 2023 \u2013 The Apache Software Foundation(ASF) announced Kvrocks has graduated from the incubator as a Top-Level-Project.")," Means that the Kvrocks community has met the Apache Foundation's requirements for The Apache Way practices, diversity, and open communication. Graduation marks a new starting point, while much work is still necessary for the community's long-term health."),(0,n.kt)("h3",{id:"kvrocks-overview--advantages"},"Kvrocks Overview & Advantages"),(0,n.kt)("p",null,"Kvrocks is a distributed key-value NoSQL database that uses RocksDB as its storage engine and supports the Redis protocol. Compared to Redis, Kvrocks allows users to decrease memory costs and increase capacity."),(0,n.kt)("h3",{id:"kvrocks-feature-highlights"},"Kvrocks Feature Highlights"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Redis Compatible: Support common Redis data types and commands;"),(0,n.kt)("li",{parentName:"ul"},"Namespace: Similar to Redis DB but equipped with a token per namespace;"),(0,n.kt)("li",{parentName:"ul"},"Replication: Async replication using WAL of RocksDB;"),(0,n.kt)("li",{parentName:"ul"},"High Availability: Support Redis sentinel to failover when master failed; and"),(0,n.kt)("li",{parentName:"ul"},"Cluster: Centralized management but accessible via any Redis cluster client.")),(0,n.kt)("h3",{id:"additional-resources"},"ADDITIONAL RESOURCES"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GitHub: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/kvrocks"},"https://github.com/apache/kvrocks")),(0,n.kt)("li",{parentName:"ul"},"Download: ",(0,n.kt)("a",{parentName:"li",href:"https://kvrocks.apache.org/download"},"https://kvrocks.apache.org/download")),(0,n.kt)("li",{parentName:"ul"},"Docs: ",(0,n.kt)("a",{parentName:"li",href:"https://kvrocks.apache.org/"},"https://kvrocks.apache.org/")),(0,n.kt)("li",{parentName:"ul"},"Contribute: ",(0,n.kt)("a",{parentName:"li",href:"https://kvrocks.apache.org/community/contributing"},"https://kvrocks.apache.org/community/contributing"))),(0,n.kt)("p",null,"Since being open-sourced in 2019, Kvrocks has been serving as an alternative for Redis in massive data scenarios. Many companies are deploying and using Kvrocks in the production environment, such as Baidu, Circl.lu, Ctrip, Meitu, Opera, U-Next and Xueqiu, among others."),(0,n.kt)("p",null,"To serve users better, Kvrocks plans to add Kubernetes deployment support, the controller to make the cluster easier to maintain and operate, and add more data structures for fulfilling the user requirements."),(0,n.kt)("h3",{id:"incubation-processes"},"Incubation processes"),(0,n.kt)("p",null,"Kvrocks joined the Apache Incubator at the end of April 2022 and officially became an Apache top-level project in June 2023. There has been a significant increase in community activity"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The number of contributors has increased from ",(0,n.kt)("strong",{parentName:"li"},"27")," to ",(0,n.kt)("strong",{parentName:"li"},"82")),(0,n.kt)("li",{parentName:"ol"},"Released ",(0,n.kt)("strong",{parentName:"li"},"4")," minor versions during incubation: 2.1.0 / 2.2.0 / 2.3.0 / 2.4.0"),(0,n.kt)("li",{parentName:"ol"},"Created ",(0,n.kt)("strong",{parentName:"li"},"900+")," Pull Requests"),(0,n.kt)("li",{parentName:"ol"},"Created ",(0,n.kt)("strong",{parentName:"li"},"300+")," Issues"),(0,n.kt)("li",{parentName:"ol"},"Nominated ",(0,n.kt)("strong",{parentName:"li"},"4")," Committers: PragmaTwice / Torwig / Ruixiang Tan / Xiaobiao Zhao, and PragmaTwice and Torwig are also PMC members now.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(8825).Z,width:"1780",height:"494"})),(0,n.kt)("h3",{id:"our-users"},"Our Users"),(0,n.kt)("p",null,"It's worth noting that the majority of Kvrocks community contributors and committers are from the community users. In addition to using, they also help make the community better in their own way. Huge thanks to every user, contributor and committer."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(5970).Z,width:"1834",height:"1126"})),(0,n.kt)("h3",{id:"mentor--pmc-words"},"Mentor & PMC Words"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"@Liang Chen (Champion, Apache Member, Apache Incubator Mentor):")," Congratulations to Kvrocks for becoming an ASF Top Project. Kvrocks community has become an outstanding NoSQL DB open source project in the Big Data ecosystem after more than 1 year of hard work and incubation in accordance with The Apache Way."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"@Xiaoqiao He (Mentor, Apache Member, Apache Incubator Mentor):")," Congratulations to Kvrocks on its successful graduation from the Apache Incubator. It was a pleasure to participate and witness Kvrocks successfully apply The Apache Way to community operations and project evolution after more than a year of incubation run and graduation. Graduation means a new beginning, I wish Kvrocks continues to build and prosper the data ecosystem, and look forward to Kvrocks creating more value."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"@tison (Mentor, Apache Member, Apache Incubator Mentor):")," Congratulations to Kvrocks, my first mentor-incubated project, for graduating from the incubator. I'm excited to help the Kvrocks community grow under the guidance of The Apache Way, and to see how quickly the diversity of Kvrocks users and developers has grown over the past year. Graduating from the incubator is a small step for Kvrocks, but also a big step for all community members. Thank you and congratulations to everyone who has contributed to the development of Kvrocks!"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"@Yaroslav Stepanchuk (Kvrocks PMC Member): "),"It has been approximately a year since I first joined the Kvrocks community. From the very beginning, I was welcomed into a supportive environment, which made it incredibly easy for me, a complete newcomer to open-source, to make my initial contributions. Witnessing the project's journey and observing its current state fills me with pride. The fact that Kvrocks has successfully graduated from the Apache Incubator is a remarkable accomplishment that can be credited to all the contributors and users involved in the project. Reflecting on this milestone, I am truly amazed by the power of open-source collaboration. I firmly believe that the project's graduation will provide an additional boost, serving as a source of inspiration and leading to the expansion of our already exceptional community."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"@Hulk Lin (Kvrocks PMC Member):")," As one of the community maintainers, I am very happy that Kvrocks has become a top project in Apache after more than a year of incubation, and I am honored to work with many excellent contributors from home and abroad to maintain the project and the community. Graduation is just a new starting point, and I'm looking forward to having more great people join us."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"@Yuan Wang (Kvrocks PMC Member):")," We're excited to graduate from the incubator and are happy to be working on Kvrocks with great contributors in the community, and we'll continue to pay attention to the feedback from the community to polish and optimize the product to make Kvrocks more stable and easy to use."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"@PragmaTwice (Kvrocks PMC Member):")," The ASF community's volunteer model and the community over code credo have helped me understand more about open source and make me feel very comfortable in the community. Coincidentally, Kvrocks graduated almost at the same time as me, so congratulations to me and the community!"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"@DongHui Liu (Kvrocks PMC Member):")," We are happy to witness the whole journey of Kvrocks from the initial open source to the incubation in Apache to the successful graduation, and we are honored to maintain the Kvrocks project with the excellent contributors in the community. Graduation is an important milestone and the beginning of a new journey, we will continue to focus on our product capabilities and make Kvrocks better for the community. Good luck with Kvrocks!"),(0,n.kt)("h3",{id:"thanks"},"Thanks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Thanks to the great efforts of every contributor, to make it possible for Kvrocks becoming a top-level project;"),(0,n.kt)("li",{parentName:"ul"},"Thank you to every Release Manager and to those who have helped Kvrocks release process. It is a great opportunity for community members to learn and practice the Apache Way from the release process;"),(0,n.kt)("li",{parentName:"ul"},"Thanks to the incubator mentors for their guidance and help in helping community members understand Apache's philosophy and code of conduct. In addition to being heavily involved in code development and community building;"),(0,n.kt)("li",{parentName:"ul"},"Finally, thank you to all users, your feedback and suggestions have had a significant impact on the development of Kvrocks, and this is what keeps the community going!")),(0,n.kt)("h3",{id:"the-end"},"The End"),(0,n.kt)("p",null,"Apache Kvrocks has significant potential for further development in terms of community influence and feature iteration. We work on maintaining an open and friendly atmosphere based on The Apache Way and attracting more excellent contributors. In the future, we plan to support more data types and optimize the experience of using Kvrocks in container environments. Additionally, we plan to simplify the operation and management of clusters."))}m.isMDXComponent=!0},8825:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/contributions-2d8cea294fa9f11ce498290c46715733.png"},5970:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/users-a425130ebbe91fe07ee9b0dfbd6adae2.jpg"}}]);