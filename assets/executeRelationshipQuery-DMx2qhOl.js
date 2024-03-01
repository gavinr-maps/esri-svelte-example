import{U as m,dq as p,aW as l}from"./index-B1qcMJFy.js";import{t as j}from"./query-B_4vDsHl.js";import{d as R}from"./FeatureSet-B0ca9TdS.js";import f from"./RelationshipQuery-DLL_bDIJ.js";import"./pbfQueryUtils-BIUzzBOM.js";import"./pbf-DdHtTFeL.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-CxjL_CF1.js";function F(r,t){const e=r.toJSON();return e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.orderByFields&&(e.orderByFields=e.orderByFields.join(",")),e.outFields&&!(t!=null&&t.returnCountOnly)?e.outFields.includes("*")?e.outFields="*":e.outFields=e.outFields.join(","):delete e.outFields,e.outSR&&(e.outSR=p(e.outSR)),e.dynamicDataSource&&(e.layer=JSON.stringify({source:e.dynamicDataSource}),delete e.dynamicDataSource),e}async function b(r,t,e){const n=await y(r,t,e),o=n.data,s=o.geometryType,a=o.spatialReference,d={};for(const c of o.relatedRecordGroups){const u={fields:void 0,objectIdFieldName:void 0,geometryType:s,spatialReference:a,hasZ:!!o.hasZ,hasM:!!o.hasM,features:c.relatedRecords};if(c.objectId!=null)d[c.objectId]=u;else for(const i of Object.keys(c))i!=="relatedRecords"&&(d[c[i]]=u)}return{...n,data:d}}async function h(r,t,e){const n=await y(r,t,e,{returnCountOnly:!0}),o=n.data,s={};for(const a of o.relatedRecordGroups)a.objectId!=null&&(s[a.objectId]=a.count);return{...n,data:s}}async function y(r,t,e={},n){const o=j({...r.query,f:"json",...n,...F(t,n)});return m(r.path+"/queryRelatedRecords",{...e,query:{...e.query,...o}})}async function D(r,t,e){t=f.from(t);const n=l(r);return b(n,t,e).then(o=>{const s=o.data,a={};return Object.keys(s).forEach(d=>a[d]=R.fromJSON(s[d])),a})}async function J(r,t,e){t=f.from(t);const n=l(r);return h(n,t,{...e}).then(o=>o.data)}export{D as executeRelationshipQuery,J as executeRelationshipQueryForCount};
