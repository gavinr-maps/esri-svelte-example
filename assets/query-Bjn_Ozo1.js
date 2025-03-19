import{I as S,P as x,V as E}from"./cast-CsZslgGN.js";import{v as O}from"./jsonUtils-CwFG8yN4.js";import{R as g}from"./normalizeUtils-BTGdXlpz.js";import{a2 as m}from"./Point-Cz2JYYmX.js";import{t as R}from"./pbfQueryUtils-mqiWagfZ.js";import{t as F}from"./queryZScale-BdW_vUm_.js";function p(r){const e={};for(const i in r){if(i==="declaredClass")continue;const t=r[i];if(t!=null&&typeof t!="function")if(Array.isArray(t)){e[i]=[];for(let n=0;n<t.length;n++)e[i][n]=p(t[n])}else typeof t=="object"?t.toJSON&&(e[i]=JSON.stringify(t)):e[i]=t}return e}const d="Layer does not support extent calculation.";function j(r,e){if(e&&r.type==="extent")return`${r.xmin},${r.ymin},${r.xmax},${r.ymax}`;if(e&&r.type==="point")return`${r.x},${r.y}`;const i=r.toJSON();return delete i.spatialReference,JSON.stringify(i)}function $(r,e){var l;const i=r.geometry,t=r.toJSON();delete t.compactGeometryEnabled,delete t.defaultSpatialReferenceEnabled;const n=t;let a,o,u;if(i!=null&&(o=i.spatialReference,u=m(o),n.geometryType=O(i),n.geometry=j(i,r.compactGeometryEnabled),n.inSR=u),t.groupByFieldsForStatistics&&(n.groupByFieldsForStatistics=t.groupByFieldsForStatistics.join(",")),t.objectIds&&(n.objectIds=t.objectIds.join(",")),t.orderByFields&&(n.orderByFields=t.orderByFields.join(",")),!t.outFields||!t.returnDistinctValues&&(e!=null&&e.returnCountOnly||e!=null&&e.returnExtentOnly||e!=null&&e.returnIdsOnly)?delete n.outFields:t.outFields.includes("*")?n.outFields="*":n.outFields=t.outFields.join(","),t.outSR?(n.outSR=m(t.outSR),a=r.outSpatialReference):i&&(t.returnGeometry||t.returnCentroid)&&(n.outSR=n.inSR,a=o),t.returnGeometry&&delete t.returnGeometry,t.outStatistics&&(n.outStatistics=JSON.stringify(t.outStatistics)),t.fullText&&(n.fullText=JSON.stringify(t.fullText)),t.pixelSize&&(n.pixelSize=JSON.stringify(t.pixelSize)),t.quantizationParameters&&(r.defaultSpatialReferenceEnabled&&o!=null&&((l=r.quantizationParameters)==null?void 0:l.extent)!=null&&o.equals(r.quantizationParameters.extent.spatialReference)&&delete t.quantizationParameters.extent.spatialReference,n.quantizationParameters=JSON.stringify(t.quantizationParameters)),t.parameterValues&&(n.parameterValues=JSON.stringify(t.parameterValues)),t.rangeValues&&(n.rangeValues=JSON.stringify(t.rangeValues)),t.dynamicDataSource&&(n.layer=JSON.stringify({source:t.dynamicDataSource}),delete t.dynamicDataSource),t.timeExtent){const y=t.timeExtent,{start:c,end:f}=y;c==null&&f==null||(n.time=c===f?c:`${c??"null"},${f??"null"}`),delete t.timeExtent}return r.defaultSpatialReferenceEnabled&&o!=null&&a!=null&&o.equals(a)&&(n.defaultSR=n.inSR,delete n.inSR,delete n.outSR),n}async function V(r,e,i,t){const n=e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{features:[]}}:await s(r,e,"json",t);return F(e,i,n.data),n}async function h(r,e,i,t){if(e.timeExtent!=null&&e.timeExtent.isEmpty)return{data:i.createFeatureResult()};const n=await b(r,e,t),a=n;return a.data=R(n.data,i),a}function b(r,e,i){return s(r,e,"pbf",i)}function B(r,e,i){return e.timeExtent!=null&&e.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):s(r,e,"json",i,{returnIdsOnly:!0})}function C(r,e,i){return e.timeExtent!=null&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):s(r,e,"json",i,{returnIdsOnly:!0,returnCountOnly:!0})}async function D(r,e,i){if(e.timeExtent!=null&&e.timeExtent.isEmpty)return{data:{count:0,extent:null}};const t=await s(r,e,"json",i,{returnExtentOnly:!0,returnCountOnly:!0}),n=t.data;if(n.hasOwnProperty("extent"))return t;if(n.features)throw new Error(d);if(n.hasOwnProperty("count"))throw new Error(d);return t}async function s(r,e,i,t={},n={}){const a=typeof r=="string"?S(r):r,o=e.geometry?[e.geometry]:[],u=await g(o,null,{signal:t.signal}),l=u==null?void 0:u[0];l!=null&&((e=e.clone()).geometry=l);const y=p({...a.query,f:i,...n,...$(e,n)});return x(E(a.path,q(e,n)?"query3d":"query"),{...t,responseType:i==="pbf"?"array-buffer":"json",query:{...y,...t.query}})}function q(r,e){return r.formatOf3DObjects!=null&&!(e.returnCountOnly||e.returnExtentOnly||e.returnIdsOnly)}export{s as E,C as S,V as c,b as d,h as f,B as p,p as t,D as x};
