import{dK as a,b7 as e,ew as i}from"./vendor.5b1a85aa.js";import{o as t,i as n,r as o,u as l,s}from"./utils.ce8655ff.js";let r=null;async function u(a){const{attribute:e,featuresJSON:i}=a,{normalizationType:s,normalizationField:r,minValue:u,maxValue:c,fieldType:f}=e,p=await m({field:e.field,valueExpression:e.valueExpression,normalizationType:s,normalizationField:r,normalizationTotal:e.normalizationTotal,viewInfoParams:e.viewInfoParams},i),d=t({normalizationType:s,normalizationField:r,minValue:u,maxValue:c}),v="string"===f?n({values:p,supportsNullCount:d}):o({values:p,minValue:u,maxValue:c,useSampleStdDev:!s,supportsNullCount:d});return l(v,"date"===f)}async function m(t,n){if(!n)return[];const o=t.field,l=t.valueExpression,u=t.normalizationType,m=t.normalizationField,c=t.normalizationTotal,f=[],p=t.viewInfoParams;let d=null,v=null;if(l){if(!r){const{arcadeUtils:e}=await a();r=e}d=r.createFunction(l),v=p&&r.getViewInfo({viewingMode:p.viewingMode,scale:p.scale,spatialReference:new e(p.spatialReference)})}return n.forEach((a=>{const e=a.attributes;let t;if(l){const e=r.createExecContext(a,v);t=r.executeFunction(d,e)}else e&&(t=e[o]);if(u&&i(t)){const a=e&&parseFloat(e[m]);t=s(t,u,a,c)}f.push(t)})),f}export{m as getDataValues,u as summaryStatistics};
