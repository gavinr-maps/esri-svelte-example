import{U as v}from"./assets-C2mb-ea2.js";import{f as c,i as d,s as y}from"./utils-D61i9O7E.js";import"./subclass-BR3PhgZG.js";import"./index-CeCSsEgo.js";import"./Evented-CXIxDjmW.js";import"./Accessor-D6mNnsWy.js";async function j(r,i,n){const o=c(r),s=i.toJSON(),t=d(o.query,{query:y({...s,f:"json"}),...n}),e=`${o.path}/versionInfos`,{data:a}=await v(e,t);return a.versions.map(m=>{const{versionName:p,versionGuid:f,...u}=m;return{...u,versionIdentifier:{name:p,guid:f}}})}export{j as getVersionInfos};
