import{g as h,l as f,U as i}from"./assets-C43MgM-v.js";import{t as d}from"./query-Dw-gv3BA.js";import{a as l}from"./AttachmentInfo-DMzNK0rO.js";import"./subclass-BZA_h8Db.js";import"./index-Bh2oEzTI.js";import"./tslib.es6-B3Jf3DVX.js";import"./Accessor-BLX9ikPh.js";import"./jsonUtils-CEfjT-BK.js";import"./Extent-Bf3YTe7m.js";import"./Point-Cg0-ChZE.js";import"./cast-Bjksrh93.js";import"./writer-DNAwXnhG.js";import"./jsonMap-0cxwUWs2.js";import"./Polyline-D9YkgmM_.js";import"./mathUtils-C4_ghTv4.js";import"./normalizeUtils-EVmAQ-ak.js";import"./normalizeUtilsCommon-dT81xWiM.js";import"./geometry-D964gYQX.js";import"./utils-6jMaHUrH.js";import"./utils-Bema0iXE.js";import"./pbfQueryUtils-B0fU-MiS.js";import"./pbf-BtDZ1BpD.js";import"./OptimizedGeometry-BF8iz5FO.js";import"./OptimizedFeature-6cJ-QFG5.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-w66xFVGx.js";import"./projection-B971H0Re.js";import"./SimpleObservable-KocWTzVy.js";import"./vec3f64-BLpZdpfb.js";import"./projectBuffer-Bs7GwaPY.js";import"./geodesicConstants-DWQLYX7F.js";function y(a){const t=a.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function V(a,t){const o={};for(const e of t){const{parentObjectId:r,parentGlobalId:m,attachmentInfos:s}=e;for(const n of s){const{id:c}=n,u=h(f(`${a.path}/${r}/attachments/${c}`)),p=l.fromJSON(n);p.set({url:u,parentObjectId:r,parentGlobalId:m}),o[r]?o[r].push(p):o[r]=[p]}}return o}function W(a,t,o){let e={query:d({...a.query,f:"json",...y(t)})};return o&&(e={...o,...e,query:{...o.query,...e.query}}),i(a.path+"/queryAttachments",e).then(r=>r.data.attachmentGroups)}async function X(a,t,o){const{objectIds:e}=t,r=[];for(const m of e)r.push(i(a.path+"/"+m+"/attachments",o));return Promise.all(r).then(m=>e.map((s,n)=>({parentObjectId:s,attachmentInfos:m[n].data.attachmentInfos})))}export{W as executeAttachmentQuery,X as fetchAttachments,V as processAttachmentQueryResult};