(()=>{"use strict";var e,t,n,r={26436:(e,t,n)=>{var r,s=n(32981),o=n(53334),a=n(31346),i=n(63814),l=n(85168),u=n(65043),c=n(85471);!function(e){e[e.SUCCESS=0]="SUCCESS",e[e.ERROR=1]="ERROR",e[e.INDETERMINATE=2]="INDETERMINATE",e[e.INCOMPLETE_CONF=3]="INCOMPLETE_CONF",e[e.UNAUTHORIZED=4]="UNAUTHORIZED",e[e.TIMEOUT=5]="TIMEOUT",e[e.NETWORK_ERROR=6]="NETWORK_ERROR"}(r||(r={}));const d=function(e){return!(!e.status||e.status===r.SUCCESS)&&(e.userProvided||"password::global::user"===e.authMechanism)},p=function(e){if(e.type===a.pt.File)return!1;const t=e.attributes;return!(!t.scope||!t.backend||"personal"!==t.scope&&"system"!==t.scope)},A=new a.hY({id:"credentials-external-storage",displayName:()=>(0,o.Tl)("files","Enter missing credentials"),iconSvgInline:()=>'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-login" viewBox="0 0 24 24"><path d="M11 7L9.6 8.4L12.2 11H2V13H12.2L9.6 15.6L11 17L16 12L11 7M20 19H12V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H12V5H20V19Z" /></svg>',enabled:e=>{var t;if(1!==e.length)return!1;const n=e[0];if(!p(n))return!1;const r=(null===(t=n.attributes)||void 0===t?void 0:t.config)||{};return!!d(r)},async exec(e){const t=await fetch((0,i.KT)("/apps/files_external/api/v1/auth"),{headers:new Headers({Accept:"application/json"}),credentials:"include"}),n=await(null==t?void 0:t.json())||{};if(n.ocs.data.user&&n.ocs.data.password){const t=(await u.Ay.put((0,i.Jv)("apps/files_external/userglobalstorages/{id}",e.attributes),{backendOptions:n.ocs.data})).data;if(t.status!==r.SUCCESS)return(0,l.Qg)((0,o.Tl)("files_external","Unable to update this external storage config. {statusMessage}",{statusMessage:(null==t?void 0:t.statusMessage)||""})),null;(0,l.Te)((0,o.Tl)("files_external","New configuration successfully saved")),c.Ay.set(e.attributes,"config",t)}return null},order:-1e3,default:a.m9.DEFAULT,inline:()=>!0});var f=n(85072),g=n.n(f),v=n(97825),h=n.n(v),m=n(77659),w=n.n(m),C=n(55056),b=n.n(C),x=n(10540),y=n.n(x),E=n(41113),T=n.n(E),_=n(64755),S={};S.styleTagTransform=T(),S.setAttributes=b(),S.insert=w().bind(null,"head"),S.domAPI=h(),S.insertStyleElement=y(),g()(_.A,S),_.A&&_.A.locals&&_.A.locals;var O,N=n(21777);const H="/files/".concat(null===(O=(0,N.HW)())||void 0===O?void 0:O.uid),k=e=>{var t;const n=(e.path+"/"+e.name).replace(/^\//gm,"");return new a.vd({id:e.id,source:(0,i.dC)("dav"+H+"/"+n),root:H,owner:(null===(t=(0,N.HW)())||void 0===t?void 0:t.uid)||null,permissions:e.config.status!==r.SUCCESS?a.aX.NONE:(null==e?void 0:e.permissions)||a.aX.READ,attributes:{displayName:n,...e}})},R=new a.hY({id:"check-external-storage",displayName:()=>"",iconSvgInline:()=>"",enabled:e=>e.every((e=>!0===p(e))),exec:async()=>null,async renderInline(e){let t=null;try{const s=await function(e){const t=arguments.length>1&&void 0!==arguments[1]&&!arguments[1]?"userstorages":"userglobalstorages";return u.Ay.get((0,i.Jv)("apps/files_external/".concat(t,"/").concat(e,"?testOnly=false")))}(e.attributes.id,"system"===e.attributes.scope);var n;if(t=s.data,c.Ay.set(e.attributes,"config",t),t.status!==r.SUCCESS)throw new Error((null===(n=t)||void 0===n?void 0:n.statusMessage)||(0,o.Tl)("files_external","There was an error with this external storage."));return null}catch(n){if(n.response&&!t)return(0,l.I9)((0,o.Tl)("files_external","We were unable to check the external storage {basename}",{basename:e.basename})),null;const r=d(t),s=document.createElement("span");s.classList.add("files-list__row-status--".concat(r?"warning":"error"));const a=document.createElement("span");return a.className="files-list__row-status",r||(a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" id="mdi-alert-circle" viewBox="0 0 24 24"><path d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>',a.title=n.message),a.prepend(s),a}},order:10}),I=new a.hY({id:"open-in-files-external-storage",displayName:e=>{var t;return((null==e||null===(t=e[0])||void 0===t||null===(t=t.attributes)||void 0===t?void 0:t.config)||{status:r.INDETERMINATE}).status!==r.SUCCESS?(0,o.Tl)("files_external","Examine this faulty external storage configuration"):(0,o.Tl)("files","Open in Files")},iconSvgInline:()=>"",enabled:(e,t)=>"extstoragemounts"===t.id,async exec(e){const t=e.attributes.config;return(null==t?void 0:t.status)!==r.SUCCESS?(window.OC.dialogs.confirm((0,o.Tl)("files_external","There was an error with this external storage. Do you want to review this mount point config in the settings page?"),(0,o.Tl)("files_external","External mount error"),(t=>{if(!0===t){const t="personal"===e.attributes.scope?"user":"admin";window.location.href=(0,i.Jv)("/settings/".concat(t,"/externalstorages"))}})),null):(window.OCP.Files.Router.goToRoute(null,{view:"files"},{dir:e.path}),null)},order:-1e3,default:a.m9.HIDDEN}),M=(0,s.C)("files_external","allowUserMounting",!1);(0,a.bh)().register(new a.Ss({id:"extstoragemounts",name:(0,o.Tl)("files_external","External storage"),caption:(0,o.Tl)("files_external","List of external storage."),emptyCaption:M?(0,o.Tl)("files_external","There is no external storage configured. You can configure them in your Personal settings."):(0,o.Tl)("files_external","There is no external storage configured and you don't have the permission to configure them."),emptyTitle:(0,o.Tl)("files_external","No external storage"),icon:'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-folder-network" viewBox="0 0 24 24"><path d="M3,15V5A2,2 0 0,1 5,3H11L13,5H19A2,2 0 0,1 21,7V15A2,2 0 0,1 19,17H13V19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H5A2,2 0 0,1 3,15Z" /></svg>',order:30,columns:[new a.VP({id:"storage-type",title:(0,o.Tl)("files_external","Storage type"),render(e){var t;const n=(null===(t=e.attributes)||void 0===t?void 0:t.backend)||(0,o.Tl)("files_external","Unknown"),r=document.createElement("span");return r.textContent=n,r}}),new a.VP({id:"scope",title:(0,o.Tl)("files_external","Scope"),render(e){var t;const n=document.createElement("span");let r=(0,o.Tl)("files_external","Personal");return"system"===(null===(t=e.attributes)||void 0===t?void 0:t.scope)&&(r=(0,o.Tl)("files_external","System")),n.textContent=r,n}})],getContents:async()=>{var e;const t=(await u.Ay.get((0,i.KT)("apps/files_external/api/v1/mounts"))).data.ocs.data.map(k);return{folder:new a.vd({id:0,source:(0,i.dC)("dav"+H),root:H,owner:(null===(e=(0,N.HW)())||void 0===e?void 0:e.uid)||null,permissions:a.aX.READ}),contents:t}}})),(0,a.Gg)(A),(0,a.Gg)(R),(0,a.Gg)(I)},64755:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(71354),s=n.n(r),o=n(76314),a=n.n(o)()(s());a.push([e.id,"/*!\n * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */.files-list__row-status{display:flex;width:44px;justify-content:center;align-items:center;height:100%}.files-list__row-status svg{width:24px;height:24px}.files-list__row-status svg path{fill:currentColor}.files-list__row-status--error,.files-list__row-status--warning{position:absolute;display:block;top:0;left:0;right:0;bottom:0;opacity:.1;z-index:-1}.files-list__row-status--error{background:var(--color-error)}.files-list__row-status--warning{background:var(--color-warning)}","",{version:3,sources:["webpack://./apps/files_external/src/css/fileEntryStatus.scss"],names:[],mappings:"AAAA;;;EAAA,CAIA,wBACC,YAAA,CACA,UAAA,CACA,sBAAA,CACA,kBAAA,CACA,WAAA,CAEA,4BACC,UAAA,CACA,WAAA,CAEA,iCACC,iBAAA,CAIF,gEAEC,iBAAA,CACA,aAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,UAAA,CACA,UAAA,CAGD,+BACC,6BAAA,CAGD,iCACC,+BAAA",sourcesContent:["/*!\n * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors\n * SPDX-License-Identifier: AGPL-3.0-or-later\n */\n.files-list__row-status {\n\tdisplay: flex;\n\twidth: 44px;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 100%;\n\n\tsvg {\n\t\twidth: 24px;\n\t\theight: 24px;\n\n\t\tpath {\n\t\t\tfill: currentColor;\n\t\t}\n\t}\n\n\t&--error,\n\t&--warning {\n\t\tposition: absolute;\n\t\tdisplay: block;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\topacity: .1;\n\t\tz-index: -1;\n\t}\n\n\t&--error {\n\t\tbackground: var(--color-error);\n\t}\n\n\t&--warning {\n\t\tbackground: var(--color-warning);\n\t}\n}\n"],sourceRoot:""}]);const i=a}},s={};function o(e){var t=s[e];if(void 0!==t)return t.exports;var n=s[e]={id:e,loaded:!1,exports:{}};return r[e].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}o.m=r,e=[],o.O=(t,n,r,s)=>{if(!n){var a=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],s=e[c][2];for(var i=!0,l=0;l<n.length;l++)(!1&s||a>=s)&&Object.keys(o.O).every((e=>o.O[e](n[l])))?n.splice(l--,1):(i=!1,s<a&&(a=s));if(i){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[n,r,s]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>e+"-"+e+".js?v="+{4254:"5c2324570f66dff0c8a1",9480:"26f38e1d6dabdd83315b"}[e],o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},n="nextcloud:",o.l=(e,r,s,a)=>{if(t[e])t[e].push(r);else{var i,l;if(void 0!==s)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+s){i=d;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",n+s),i.src=e),t[e]=[r];var p=(n,r)=>{i.onerror=i.onload=null,clearTimeout(A);var s=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((e=>e(r))),n)return n(r)},A=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.j=1873,(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{o.b=document.baseURI||self.location.href;var e={1873:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var s=new Promise(((n,s)=>r=e[t]=[n,s]));n.push(r[2]=s);var a=o.p+o.u(t),i=new Error;o.l(a,(n=>{if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var s=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",i.name="ChunkLoadError",i.type=s,i.request=a,r[1](i)}}),"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,n)=>{var r,s,a=n[0],i=n[1],l=n[2],u=0;if(a.some((t=>0!==e[t]))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(l)var c=l(o)}for(t&&t(n);u<a.length;u++)s=a[u],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(c)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),o.nc=void 0;var a=o.O(void 0,[4208],(()=>o(26436)));a=o.O(a)})();
//# sourceMappingURL=files_external-init.js.map?v=7ad7445c54d34405c00f