import{P as m}from"./cast-BA_-jlhc.js";import{s as d}from"./Accessor-BHnuXKD2.js";import{f,i as c,s as g}from"./utils-Cy8wFNQo.js";import"./index-tefRSezt.js";import"./JSONSupport-CGdeqxpk.js";async function y(t,s,o,r,e){if(!s)throw new d("stop-editing:missing-guid","guid for version is missing");const i=f(t),n=c(i.query,{query:g({sessionId:o,saveEdits:r,f:"json"}),...e,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const p=`${i.path}/versions/${s}/stopEditing`,{data:a}=await m(p,n);return a||{success:!1}}export{y as stopEditing};
