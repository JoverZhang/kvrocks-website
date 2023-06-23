"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7835],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,k=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(k,s(s({ref:t},p),{},{components:a})):n.createElement(k,s({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2815:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={id:"create-a-release",title:"Create a Kvrocks release"},s=void 0,i={unversionedId:"create-a-release",id:"create-a-release",title:"Create a Kvrocks release",description:"This document mainly introduces how the Release Manager releases a new version in accordance with the Apache requirements.",source:"@site/community/create-a-release.md",sourceDirName:".",slug:"/create-a-release",permalink:"/community/create-a-release",draft:!1,editUrl:"https://github.com/apache/kvrocks-website/tree/main/community/create-a-release.md",tags:[],version:"current",frontMatter:{id:"create-a-release",title:"Create a Kvrocks release"},sidebar:"community",previous:{title:"Releases",permalink:"/community/category/releases"},next:{title:"Verify a release candidate",permalink:"/community/verify-a-release-candidate"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Adding GPG KEY",id:"adding-gpg-key",level:2},{value:"Install gpg",id:"install-gpg",level:3},{value:"Generate gpg Key",id:"generate-gpg-key",level:3},{value:"Upload your key to public gpg keyserver",id:"upload-your-key-to-public-gpg-keyserver",level:3},{value:"Check whether the key is created successfully",id:"check-whether-the-key-is-created-successfully",level:3},{value:"Add your gpg public key to the KEYS document",id:"add-your-gpg-public-key-to-the-keys-document",level:3},{value:"Upload the GPG public key to your GitHub account",id:"upload-the-gpg-public-key-to-your-github-account",level:3},{value:"Create source releases and stage",id:"create-source-releases-and-stage",level:2},{value:"Upload artifacts to SVN dist repo",id:"upload-artifacts-to-svn-dist-repo",level:2},{value:"Build and push Docker images",id:"build-and-push-docker-images",level:2},{value:"Voting",id:"voting",level:2},{value:"Kvrocks community vote",id:"kvrocks-community-vote",level:3},{value:"Officially released",id:"officially-released",level:2},{value:"Publish artifacts to SVN RELEASE branch",id:"publish-artifacts-to-svn-release-branch",level:3},{value:"Publish Docker images",id:"publish-docker-images",level:3},{value:"Update website links",id:"update-website-links",level:3},{value:"Send the announcement",id:"send-the-announcement",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document mainly introduces how the Release Manager releases a new version in accordance with the Apache requirements."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Source Release is the key point which Apache values, also, is necessary for a release;"),(0,r.kt)("li",{parentName:"ul"},"Binary Release is optional. Kvrocks can choose whether to release the binary package to the Apache repository or not.")),(0,r.kt)("p",null,"Note that for binary distribution packages, it is necessary to check that the new version does not contain third-party dependencies."),(0,r.kt)("p",null,"Please remember that publishing software has legal consequences. This guide complements the foundation-wide policies and guides:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.apache.org/legal/release-policy.html"},"Release Policy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://infra.apache.org/release-distribution"},"Release Distribution Policy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://infra.apache.org/release-publishing.html"},"Release Creation Process"))),(0,r.kt)("h2",{id:"adding-gpg-key"},"Adding GPG KEY"),(0,r.kt)("p",null,"This section is a brief from the ",(0,r.kt)("a",{parentName:"p",href:"https://infra.apache.org/openpgp.html"},"Cryptography with OpenPGP")," guideline."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This section is the requirements for release manager who is the first time to be a release manager")),(0,r.kt)("h3",{id:"install-gpg"},"Install gpg"),(0,r.kt)("p",null,"For more details, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://www.gnupg.org/download/index.html"},"GPG official website"),". Here shows one approach to install GPG with ",(0,r.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"brew install gnupg\ngpg --version #check the version, should be 2.x\n")),(0,r.kt)("h3",{id:"generate-gpg-key"},"Generate gpg Key"),(0,r.kt)("p",null,"Attentions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name is best to keep consistent with your full name of Apache ID;"),(0,r.kt)("li",{parentName:"ul"},"Email should be the Apache email;"),(0,r.kt)("li",{parentName:"ul"},"Name is best to only use English to avoid garbled.")),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"gpg --full-gen-key")," and complete the generation interactively:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"gpg (GnuPG) 2.2.20; Copyright (C) 2020 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n   (1) RSA and RSA (default)\n   (2) DSA and Elgamal\n   (3) DSA (sign only)\n   (4) RSA (sign only)\n  (14) Existing key from card\nYour selection? 1 # input 1\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (2048) 4096 # input 4096\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n         0 = key does not expire\n      <n>  = key expires in n days\n      <n>w = key expires in n weeks\n      <n>m = key expires in n months\n      <n>y = key expires in n years\nKey is valid for? (0) 0 # input 0\nKey does not expire at all\nIs this correct? (y/N) y # input y\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: Hulk Lin               # input your name\nEmail address: hulk@apache.org    # input your email\nComment:                          # input some annotations, optional\nYou selected this USER-ID:\n    \"Hulk <hulk@apache.org>\"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O # input O\nWe need to generate a lot of random bytes. It is a good idea to perform\nsome other action (type on the keyboard, move the mouse, utilize the\ndisks) during the prime generation; this gives the random number\ngenerator a better chance to gain enough entropy.\nWe need to generate a lot of random bytes. It is a good idea to perform\nsome other action (type on the keyboard, move the mouse, utilize the\ndisks) during the prime generation; this gives the random number\ngenerator a better chance to gain enough entropy.\n\n# Input the security key\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Please enter this passphrase                         \u2502\n\u2502                                                      \u2502\n\u2502 Passphrase: _______________________________          \u2502\n\u2502                                                      \u2502\n\u2502       <OK>                              <Cancel>     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n# key generatio[n will be done after your inputting the key with the following output\ngpg: key E49B00F626B marked as ultimately trusted\ngpg: revocation certificate stored as '/Users/hulk/.gnupg/openpgp-revocs.d/F77B887A4F25A9468C513E9AA3008E49B00F626B.rev'\npublic and secret key created and signed.\n\npub   rsa4096 2022-07-12 [SC]\n      F77B887A4F25A9468C513E9AA3008E49B00F626B\nuid           [ultimate] hulk <hulk@apache.org>\nsub   rsa4096 2022-07-12 [E]\n")),(0,r.kt)("h3",{id:"upload-your-key-to-public-gpg-keyserver"},"Upload your key to public gpg keyserver"),(0,r.kt)("p",null,"Firstly, list your key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --list-keys\n")),(0,r.kt)("p",null,"The output is like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"-------------------------------\npub   rsa4096 2022-07-12 [SC]\n      F77B887A4F25A9468C513E9AA3008E49B00F626B\nuid           [ultimate] hulk <hulk@apache.org>\nsub   rsa4096 2022-07-12 [E]\n")),(0,r.kt)("p",null,"Then, send your key id to key server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --keyserver keys.openpgp.org --send-key <key-id> # e.g., F77B887A4F25A9468C513E9AA3008E49B00F626B\n")),(0,r.kt)("p",null,"Among them, ",(0,r.kt)("inlineCode",{parentName:"p"},"keys.openpgp.org")," is a randomly selected keyserver, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"keyserver.ubuntu.com")," or any other full-featured keyserver."),(0,r.kt)("h3",{id:"check-whether-the-key-is-created-successfully"},"Check whether the key is created successfully"),(0,r.kt)("p",null,"Uploading takes about one minute, after that, you can check by your email at the corresponding keyserver."),(0,r.kt)("p",null,"Uploading keys to the keyserver is mainly for joining a ",(0,r.kt)("a",{parentName:"p",href:"https://infra.apache.org/release-signing.html#web-of-trust"},"Web of Trust"),"."),(0,r.kt)("h3",{id:"add-your-gpg-public-key-to-the-keys-document"},"Add your gpg public key to the KEYS document"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"SVN is required for this step.")),(0,r.kt)("p",null,"The svn repository of the release branch is: ",(0,r.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/release/kvrocks"},"https://dist.apache.org/repos/dist/release/kvrocks")),(0,r.kt)("p",null,"Please always add the public key to KEYS in the release branch:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'svn co https://dist.apache.org/repos/dist/release/kvrocks kvrocks-dist\n# As this step will copy all the versions, it will take some time. If the network is broken, please use svn cleanup to delete the lock before re-execute it.\ncd kvrocks-dist\n(gpg --list-sigs YOUR_NAME@apache.org && gpg --export --armor YOUR_NAME@apache.org) >> KEYS # Append your key to the KEYS file\nsvn add .   # It is not needed if the KEYS document exists before.\nsvn ci -m "add gpg key for YOUR_NAME" # Later on, if you are asked to enter a username and password, just use your apache username and password.\n')),(0,r.kt)("h3",{id:"upload-the-gpg-public-key-to-your-github-account"},"Upload the GPG public key to your GitHub account"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/settings/keys"},"https://github.com/settings/keys")," to add GPG KEYS."),(0,r.kt)("li",{parentName:"ol"},"Please remember to bind the email address used in the GPG key to your GitHub account (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/settings/emails"},"https://github.com/settings/emails"),') if you find "unverified" after adding it.')),(0,r.kt)("h2",{id:"create-source-releases-and-stage"},"Create source releases and stage"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Checkout to the RELEASE BRANCH and cherry-pick commits to release"),(0,r.kt)("li",{parentName:"ol"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"./x.py package source -v ${release_version} -rc ${candidate_number}")," to create release tarball"),(0,r.kt)("li",{parentName:"ol"},"Make sure it compiles good and push tag to GitHub")),(0,r.kt)("h2",{id:"upload-artifacts-to-svn-dist-repo"},"Upload artifacts to SVN dist repo"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"SVN is required for this step.")),(0,r.kt)("p",null,"The svn repository of the dev branch is: ",(0,r.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/dev/kvrocks"},"https://dist.apache.org/repos/dist/dev/kvrocks")),(0,r.kt)("p",null,"First, checkout Kvrocks to local directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# As this step will copy all the versions, it will take some time. If the network is broken, please use svn cleanup to delete the lock before re-execute it.\nsvn co https://dist.apache.org/repos/dist/dev/kvrocks kvrocks-dist-dev\n")),(0,r.kt)("p",null,"Then, upload the artifacts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cd kvrocks-dist-dev\nmkdir ${release_version} # create a directory named by version\ncp ${repo_dir}/apache-kvrocks-${release_version}-src.tar.gz* ${release_version}/ # copy source code and signature package to the versioned directory\nsvn status # check svn status\nsvn add ${release_version} # add to svn\nsvn status # check svn status\nsvn commit -m "Prepare for ${release_version}"     # commit to SVN remote server\n')),(0,r.kt)("h2",{id:"build-and-push-docker-images"},"Build and push Docker images"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Docker and Docker Buildx is required for this step. Docker Buildx should be bundled with Docker Desktop. If you don't use Docker Desktop, please follow the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/build/install-buildx/"},"installation guide")," to install it.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"docker login")," to your own DockerHub account."),(0,r.kt)("li",{parentName:"ol"},"Build and push docker images to your personal repository on DockerHub:"),(0,r.kt)("li",{parentName:"ol"},"MORE BUILD ARGS can be adjusted according to the performance of your computer")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'docker buildx build --platform linux/amd64,linux/arm64 --tag ${your_dockerhub_username}/kvrocks:${release_version} --tag ${your_dockerhub_username}/kvrocks:latest . --output "type=registry" --build-arg MORE_BUILD_ARGS=-j12\n')),(0,r.kt)("h2",{id:"voting"},"Voting"),(0,r.kt)("h3",{id:"kvrocks-community-vote"},"Kvrocks community vote"),(0,r.kt)("p",null,"Kvrocks community vote\uff0csend email to: ",(0,r.kt)("inlineCode",{parentName:"p"},"dev@kvrocks.apache.org"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"[VOTE] Release Apache Kvrocks ${release_version}\n\nHello Apache Kvrocks PMC and Community,\n\n    This is a call for a vote to release Apache Kvrocks version ${release_version}.\n\n    The tag to be voted on is ${release_version}-rc${candidate_number}.\n\n    The release candidate:\n\n    https://dist.apache.org/repos/dist/dev/kvrocks/${release_version}/\n\n\n    Keys to verify the release candidate:\n\n    https://downloads.apache.org/kvrocks/KEYS\n\n\n    Git tag for the release:\n\n    https://github.com/apache/kvrocks/releases/tag/${release_version}-rc${candidate_number}\n\n    Docker image:\n\n    https://hub.docker.com/layers/${your_dockerhub_username}/kvrocks/${release_version}/images/sha256-${sha256_value}\n\n    Please download, verify, and test.\n\n    The VOTE will remain open for at least 72 hours.\n\n    [ ] +1 approve\n    [ ] +0 no opinion\n    [ ] -1 disapprove with the reason\n\n    To learn more about apache kvrocks, please see\n    https://kvrocks.apache.org/\n\n    Checklist for reference:\n\n      [ ] Download links are valid.\n      [ ] Checksums and signatures.\n      [ ] LICENSE/NOTICE files exist\n      [ ] No unexpected binary files\n      [ ] All source files have ASF headers\n      [ ] Can compile from source\n      [ ] All Tests Passed\n      [ ] Docker image with right version\n      [ ] Docker image contains license files\n      [ ] Docker image can work well\n\n      More detailed checklist  please refer to:\n      https://kvrocks.apache.org/community/verify-a-release-candidate\n\nThanks\n")),(0,r.kt)("p",null,"After at least 72 hours with at least 3 +1 binding vote (from Kvrocks PMC member) and no veto, claim the vote result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"[RESULT][VOTE] Release Apache Kvrocks ${release_version}\n\nThe vote to release Apache Kvrocks ${release_version} has passed.\n\nThe vote PASSED with xxx binding +1 and 0 -1 votes:\n\nBinding votes:\n- Yuan Wang\n- tison\n- hulk\n- Liang Chen\n- Jean-Baptiste Onofr\xe9\n- Xiaoqiao He\n- donghui liu\n\nVote thread:\n\n${vote_thread_url}\n\nThank you to all the above members to help us to verify and vote for the\n${release_version} release.\n\nThanks\n")),(0,r.kt)("h2",{id:"officially-released"},"Officially released"),(0,r.kt)("h3",{id:"publish-artifacts-to-svn-release-branch"},"Publish artifacts to SVN RELEASE branch"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'svn mv https://dist.apache.org/repos/dist/dev/kvrocks/${release_version} https://dist.apache.org/repos/dist/release/kvrocks/${release_version} -m "Release ${release_version}"\n')),(0,r.kt)("h3",{id:"publish-docker-images"},"Publish Docker images"),(0,r.kt)("p",null,"Copy the approved candidate docker images from your personal account to apache org:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker buildx imagetools create -t apache/kvrocks:${release_version} ${your_dockerhub_username}/kvrocks:${release_version}\ndocker buildx imagetools create -t apache/kvrocks:latest ${your_dockerhub_username}/kvrocks:latest\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you don't have the permission, you can ask someone with access to apache org to do that.")),(0,r.kt)("h3",{id:"update-website-links"},"Update website links"),(0,r.kt)("p",null,"Update ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/kvrocks-website/blob/main/src/components/Releases/index.tsx"},"releases data file"),"."),(0,r.kt)("h3",{id:"send-the-announcement"},"Send the announcement"),(0,r.kt)("p",null,"Send the release announcement to ",(0,r.kt)("inlineCode",{parentName:"p"},"dev@kvrocks.apache.org")," and CC ",(0,r.kt)("inlineCode",{parentName:"p"},"announce@apache.org"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You have to use ",(0,r.kt)("inlineCode",{parentName:"p"},"${name}@apache.org")," post email to ",(0,r.kt)("inlineCode",{parentName:"p"},"announce@apache.org"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"[ANNOUNCE] Release Apache Kvrocks ${release_version}\n\nHi all,\n\nThe Apache Kvrocks community is pleased to announce\nthat Apache Kvrocks ${release_version} has been released!\n\nKvrocks is a distributed key value NoSQL database that uses RocksDB\nas storage engine and is compatible with Redis protocol.\n\nThis release contains a number of new features, bug fixes and\nimprovements compared to the last version released before.\nThe notable changes since ${release_version} include:\n1. xxxxx\n2. yyyyyy\n3. zzzzzz\n\nPlease refer to the change log for the complete list of changes:\nhttps://github.com/apache/kvrocks/releases/tag/v${release_version}\n\nApache Kvrocks website: https://kvrocks.apache.org/\n\nDownload Links: https://kvrocks.apache.org/download\n\nKvrocks Resources:\n- Issue: https://github.com/apache/kvrocks/issues\n- Mailing list: dev@kvrocks.apache.org\n\nThanks\nOn behalf of Apache Kvrocks community\n")))}d.isMDXComponent=!0}}]);