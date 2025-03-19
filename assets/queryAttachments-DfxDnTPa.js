import{P as p,M as u,N as h}from"./cast-CsZslgGN.js";import{t as f}from"./query-Bjn_Ozo1.js";import{a as l}from"./AttachmentInfo-b6cNZMAJ.js";import"./Accessor-BmwT4B0c.js";import"./index-4eY77cms.js";import"./JSONSupport-DcrLLGjL.js";import"./jsonUtils-CwFG8yN4.js";import"./Extent-g5W9hy0j.js";import"./Point-Cz2JYYmX.js";import"./writer-DKgfqj4X.js";import"./Polyline-s-JzsQqo.js";import"./mathUtils-Cfq9PL9W.js";import"./normalizeUtils-BTGdXlpz.js";import"./normalizeUtilsCommon-lGDszWRI.js";import"./utils-YowqfOgk.js";import"./utils-B-dlKIhi.js";import"./pbfQueryUtils-mqiWagfZ.js";import"./pbf-BsmI3A9L.js";import"./memoryEstimations-Bcyf-mHz.js";import"./OptimizedGeometry-BJqUA4Pi.js";import"./OptimizedFeature-P2towpqD.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-BdW_vUm_.js";import"./projection-CyCZAIaD.js";import"./SimpleObservable-CvOkykwM.js";import"./vec3f64-BLpZdpfb.js";import"./projectBuffer-CQnuEMuP.js";import"./geodesicConstants-RQL9oKdk.js";function y(a){const t=a.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t.orderByFields&&(t.orderByFields=t.orderByFields.join(",")),t}function K(a,t){const o={};for(const e of t){const{parentObjectId:r,parentGlobalId:s,attachmentInfos:i}=e;for(const n of i){const{id:c}=n,d=u(h(`${a.path}/${r}/attachments/${c}`)),m=l.fromJSON(n);m.set({url:d,parentObjectId:r,parentGlobalId:s}),o[r]?o[r].push(m):o[r]=[m]}}return o}function L(a,t,o){let e={query:f({...a.query,f:"json",...y(t)})};return o&&(e={...o,...e,query:{...o.query,...e.query}}),p(a.path+"/queryAttachments",e).then(r=>r.data.attachmentGroups)}async function U(a,t,o){const{objectIds:e}=t,r=[];for(const s of e)r.push(p(a.path+"/"+s+"/attachments",o));return Promise.all(r).then(s=>e.map((i,n)=>({parentObjectId:i,attachmentInfos:s[n].data.attachmentInfos})))}export{L as executeAttachmentQuery,U as fetchAttachments,K as processAttachmentQueryResult};
