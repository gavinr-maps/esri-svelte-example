import{P as m}from"./cast-CsZslgGN.js";import{s as f}from"./Accessor-BmwT4B0c.js";import{f as d,i as c,s as p}from"./utils-YowqfOgk.js";import"./index-4eY77cms.js";import"./JSONSupport-DcrLLGjL.js";async function y(i,s,r,o){if(!s)throw new f("start-editing:missing-guid","guid for version is missing");const t=d(i),a=c(t.query,{query:p({sessionId:r,f:"json"}),...o,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const e=`${t.path}/versions/${s}/startEditing`,{data:n}=await m(e,a);return n||{success:!1}}export{y as startEditing};
