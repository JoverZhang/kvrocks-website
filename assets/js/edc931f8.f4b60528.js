"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6160],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),h=n,d=p["".concat(s,".").concat(h)]||p[h]||m[h]||i;return a?r.createElement(d,l(l({ref:t},u),{},{components:a})):r.createElement(d,l({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2246:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>p,toc:()=>h});var r=a(7462),n=a(7294),i=a(3905);const l={contributorAvatar:"contributorAvatar_VEGy"},o=[{name:"Donghui Liu",apacheId:"alfejik",githubId:"Alfejik"},{name:"Brad Lee",apacheId:"bradlee",githubId:"smartlee"},{name:"Pengbo Cai",apacheId:"caipengbo",githubId:"caipengbo"},{name:"Liang Chen",apacheId:"chenliang613",githubId:"chenliang613"},{name:"Chris Zou",apacheId:"chriszou",githubId:"ChrisZMF"},{name:"Colin Chamber",apacheId:"colinchamber",githubId:"ColinChamber"},{name:"Xiaoqiao He",apacheId:"hexiaoqiao",githubId:"Hexiaoqiao"},{name:"Hulk Lin",apacheId:"hulk",githubId:"git-hulk"},{name:"Jean-Baptiste Onofr\xe9",apacheId:"jbonofre",githubId:"jbonofre"},{name:"Jean Lai",apacheId:"jeanbone",githubId:"jeanbone"},{name:"Miuyong Liu",apacheId:"karelrooted",githubId:"karelrooted"},{name:"Shang Xiong",apacheId:"shang",githubId:"shangxiaoxiong"},{name:"Ruixiang Tan",apacheId:"tanruixiang",githubId:"tanruixiang"},{name:"Zili Chen",apacheId:"tison",githubId:"tisonkun"},{name:"Yaroslav Stepanchuk",apacheId:"torwig",githubId:"torwig"},{name:"Mingyang Liu",apacheId:"twice",githubId:"PragmaTwice"},{name:"Von Gosling",apacheId:"vongosling",githubId:"vongosling"},{name:"Yuan Wang",apacheId:"wangyuan",githubId:"ShooterIT"},{name:"Xiaobiao Zhao",apacheId:"xiaobiao",githubId:"xiaobiaozhao"}];function s(){return n.createElement(n.Fragment,null,n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,n.createElement("b",null,"Avatar")),n.createElement("th",null,n.createElement("b",null,"Name")),n.createElement("th",null,n.createElement("b",null,"Apache ID")),n.createElement("th",null,n.createElement("b",null,"GitHub ID")))),n.createElement("tbody",null,o.sort(((e,t)=>e.apacheId.localeCompare(t.apacheId))).map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,n.createElement("img",{width:64,className:l.contributorAvatar,src:`https://github.com/${e.githubId}.png`,alt:e.name})),n.createElement("td",null,e.name),n.createElement("td",null,e.apacheId),n.createElement("td",null,n.createElement("a",{target:"_blank",href:`https://github.com/${e.githubId}`},e.githubId))))))))}const c={id:"community",title:"Community"},u=void 0,p={unversionedId:"community",id:"community",title:"Community",description:"Every volunteer project obtains its strength from the people involved in it. We invite you to participate as much or as little as you choose.",source:"@site/community/index.md",sourceDirName:".",slug:"/",permalink:"/community/",draft:!1,editUrl:"https://github.com/apache/kvrocks-website/tree/main/community/index.md",tags:[],version:"current",frontMatter:{id:"community",title:"Community"},sidebar:"community",next:{title:"How to Contribute",permalink:"/community/contributing"}},m={},h=[{value:"Mailing list",id:"mailing-list",level:2},{value:"How to subscribe to a mailing list",id:"how-to-subscribe-to-a-mailing-list",level:3},{value:"Slack",id:"slack",level:2},{value:"Issue tracker",id:"issue-tracker",level:2},{value:"Bug reports",id:"bug-reports",level:3},{value:"Enhancement",id:"enhancement",level:3},{value:"Source code",id:"source-code",level:2},{value:"People",id:"people",level:2}],d={toc:h},k="wrapper";function g(e){let{components:t,...a}=e;return(0,i.kt)(k,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Every volunteer project obtains its strength from the people involved in it. We invite you to participate as much or as little as you choose."),(0,i.kt)("p",null,"You can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use our project and provide a feedback."),(0,i.kt)("li",{parentName:"ul"},"Provide us with the use-cases."),(0,i.kt)("li",{parentName:"ul"},"Report bugs and submit patches."),(0,i.kt)("li",{parentName:"ul"},"Contribute code, documentation.")),(0,i.kt)("h2",{id:"mailing-list"},"Mailing list"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Desc"),(0,i.kt)("th",{parentName:"tr",align:null},"Subscribe"),(0,i.kt)("th",{parentName:"tr",align:null},"Unsubscribe"),(0,i.kt)("th",{parentName:"tr",align:null},"Post"),(0,i.kt)("th",{parentName:"tr",align:null},"Archive"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"mailto:dev@kvrocks.apache.org"},"dev@kvrocks.apache.org")),(0,i.kt)("td",{parentName:"tr",align:null},"Development related discussions"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"mailto:dev-subscribe@kvrocks.apache.org"},"Subscribe")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"mailto:dev-unsubscribe@kvrocks.apache.org"},"Unsubscribe")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"mailto:dev@kvrocks.apache.org"},"Post")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://lists.apache.org/list.html?dev@kvrocks.apache.org"},"Archive"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"mailto:commits@kvrocks.apache.org"},"commits@kvrocks.apache.org")),(0,i.kt)("td",{parentName:"tr",align:null},"All commits to our repositories"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"mailto:commits-subscribe@kvrocks.apache.org"},"Subscribe")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"mailto:commits-unsubscribe@kvrocks.apache.org"},"Unsubscribe")),(0,i.kt)("td",{parentName:"tr",align:null},"Read only list"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://lists.apache.org/list.html?commits@kvrocks.apache.org"},"Archive"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"mailto:issues@kvrocks.apache.org"},"issues@kvrocks.apache.org")),(0,i.kt)("td",{parentName:"tr",align:null},"Mirror of all GitHub activity"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"mailto:issues-subscribe@kvrocks.apache.org"},"Subscribe")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"mailto:issues-unsubscribe@kvrocks.apache.org"},"Unsubscribe")),(0,i.kt)("td",{parentName:"tr",align:null},"Read only list"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://lists.apache.org/list.html?issues@kvrocks.apache.org"},"Archive"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"mailto:builds@kvrocks.apache.org"},"builds@kvrocks.apache.org")),(0,i.kt)("td",{parentName:"tr",align:null},"Build notifications of Kvrocks main repository"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"mailto:builds-subscribe@kvrocks.apache.org"},"Subscribe")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"mailto:builds-unsubscribe@kvrocks.apache.org"},"Unsubscribe")),(0,i.kt)("td",{parentName:"tr",align:null},"Read only list"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://lists.apache.org/list.html?builds@kvrocks.apache.org"},"Archive"))))),(0,i.kt)("p",null,"Please make sure you are subscribed to the mailing list you are posting to!"),(0,i.kt)("p",null,"If you are not subscribed to the mailing list, your message will either be rejected or you won't receive the response."),(0,i.kt)("h3",{id:"how-to-subscribe-to-a-mailing-list"},"How to subscribe to a mailing list"),(0,i.kt)("p",null,"Before you can post a message to a mailing list, you need to subscribe to the list first."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Send an email without any contents or subject to ",(0,i.kt)("a",{parentName:"li",href:"mailto:listname-subscribe@kvrocks.apache.org."},"listname-subscribe@kvrocks.apache.org.")," (replace listname with dev, issues, ..)"),(0,i.kt)("li",{parentName:"ol"},'Wait till you receive an email with the subject "confirm subscribe to ',(0,i.kt)("a",{parentName:"li",href:"mailto:listname@kvrocks.apache.org"},"listname@kvrocks.apache.org"),'". Reply to that email, without editing the subject or including any contents.'),(0,i.kt)("li",{parentName:"ol"},'Wait till you receive an email with the subject "WELCOME to ',(0,i.kt)("a",{parentName:"li",href:"mailto:listname@kvrocks.apache.org"},"listname@kvrocks.apache.org"),'".')),(0,i.kt)("p",null,"If you email us with a code snippet, make sure that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"you do not link to files in external services as such files can change, get deleted or the link might break and thus make an archived email thread useless"),(0,i.kt)("li",{parentName:"ul"},"you paste text instead of screenshots of text"),(0,i.kt)("li",{parentName:"ul"},"you keep formatting when pasting code in order to keep the code readable"),(0,i.kt)("li",{parentName:"ul"},"there are enough import statements to avoid ambiguities")),(0,i.kt)("h2",{id:"slack"},"Slack"),(0,i.kt)("p",null,"You can join the ",(0,i.kt)("a",{parentName:"p",href:"https://join.slack.com/t/kvrockscommunity/shared_invite/zt-p5928e3r-OUAK8SUgC8GOceGM6dAz6w"},"Apache Kvrocks community on Slack"),"."),(0,i.kt)("p",null,"There are a couple of community rules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Be respectful - This is the most important rule!"),(0,i.kt)("li",{parentName:"ul"},"All important decisions and conclusions must be reflected back to the mailing lists. \"If it didn't happen on a mailing list, it didn't happen.\" - The ",(0,i.kt)("a",{parentName:"li",href:"https://theapacheway.com/on-list/"},"Apache Mottos")),(0,i.kt)("li",{parentName:"ul"},"Use Slack threads to keep parallel conversations from overwhelming a channel."),(0,i.kt)("li",{parentName:"ul"},"Please do not direct message people for troubleshooting, issue assigning and PR review. These should be picked-up voluntarily.")),(0,i.kt)("h2",{id:"issue-tracker"},"Issue tracker"),(0,i.kt)("p",null,"We use GitHub Issues to track all code related issues: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/kvrocks/issues"},"https://github.com/apache/kvrocks/issues")),(0,i.kt)("p",null,"You must have a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/signup"},"GitHub account")," in order to log cases and issues."),(0,i.kt)("h3",{id:"bug-reports"},"Bug reports"),(0,i.kt)("p",null,"Found bug? Enter an issue in the issue tracker."),(0,i.kt)("p",null,"Before submitting an issue, please:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Verify that the bug does in fact exist."),(0,i.kt)("li",{parentName:"ul"},"Search the issue tracker to verify there is no existing issue reporting the bug you've found."),(0,i.kt)("li",{parentName:"ul"},"Consider tracking down the bug yourself in the source code of Kvrocks and submitting a patch along with your bug report. This is a great time saver for the Kvrocks developers and helps ensure the bug will be fixed quickly.")),(0,i.kt)("h3",{id:"enhancement"},"Enhancement"),(0,i.kt)("p",null,"Enhancements or new feature proposals are also welcome. The more concrete and rationale the proposal is, the greater the chance it will be incorporated into future releases."),(0,i.kt)("h2",{id:"source-code"},"Source code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Kvrocks core repository: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/kvrocks"},"https://github.com/apache/kvrocks")),(0,i.kt)("li",{parentName:"ul"},"Kvrocks website repository: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/kvrocks-website"},"https://github.com/apache/kvrocks-website"))),(0,i.kt)("h2",{id:"people"},"People"),(0,i.kt)("p",null,"The list below could be outdated. Please find the most up-to-date list ",(0,i.kt)("a",{parentName:"p",href:"https://people.apache.org/phonebook.html?project=kvrocks"},"here"),"."),(0,i.kt)(s,{mdxType:"Committers"}))}g.isMDXComponent=!0}}]);