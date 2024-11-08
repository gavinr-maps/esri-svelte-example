import{l as p}from"./subclass-BZA_h8Db.js";const m=[{pattern:/^\s*(https?:\/\/([^\s]+))\s*$/i,target:"_blank",label:"{messages.view}"},{pattern:/^\s*(tel:([^\s]+))\s*$/i,label:"{hierPart}"},{pattern:/^\s*(mailto:([^\s]+))\s*$/i,label:"{hierPart}"},{pattern:/^\s*(arcgis-appstudio-player:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"App Studio Player"},{pattern:/^\s*(arcgis-collector:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Collector"},{pattern:/^\s*(arcgis-explorer:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Explorer"},{pattern:/^\s*(arcgis-navigator:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Navigator"},{pattern:/^\s*(arcgis-survey123:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Survey123"},{pattern:/^\s*(arcgis-trek2there:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Trek2There"},{pattern:/^\s*(arcgis-workforce:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Workforce"},{pattern:/^\s*(iform:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"iForm"},{pattern:/^\s*(flow:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"FlowFinity"},{pattern:/^\s*(lfmobile:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Laserfische"},{pattern:/^\s*(mspbi:\/\/([^\s]+))\s*$/i,label:"{messages.openInApp}",appName:"Microsoft Power Bi"}];function c(r,a){if(typeof a!="string"||!a)return a;const e=m.find(o=>o.pattern.test(a));if(!e)return a;const s=a.match(e.pattern),t=s==null?void 0:s[2],n=p(p(e.label,{messages:r,hierPart:t}),{appName:e.appName}),l=e.target?` target="${e.target}"`:"",i=e.target==="_blank"?' rel="noreferrer"':"";return a.replace(e.pattern,`<a${l} href="$1"${i}>${n}</a>`)}export{c as a};
