import{F as j,cA as q,bG as X,U as $,co as ee,M as ne,ay as x,cB as L,cn as te,bY as K,s as ie}from"./index-B1qcMJFy.js";import{l as ae,r as re,o as se}from"./featureConversionUtils-D_5zMG16.js";import{e as oe}from"./OptimizedFeatureSet-Blu9Ckm7.js";import{E as le,I as ce,N as ue}from"./geojson-CEEPRz87.js";import{o as de}from"./clientSideDefaults-DGdAzQWt.js";import{p as fe}from"./sourceUtils-CDQKwAIK.js";import{Z as E}from"./FieldsIndex-DA0UbGLz.js";const G=()=>ie.getLogger("esri.layers.ogc.ogcFeatureUtils"),J="startindex",me=new Set([J,"offset"]),U="http://www.opengis.net/def/crs/",Ne=`${U}OGC/1.3/CRS84`;var l;async function ve(e,n,t={},i=5){const{links:a}=e,o=p(a,"items",l.geojson)||p(a,"http://www.opengis.net/def/rel/ogc/1.0/items",l.geojson);if(o==null)throw new j("ogc-feature-layer:missing-items-page","Missing items url");const{apiKey:d,customParameters:c,signal:g}=t,f=q(o.href,e.landingPage.url),y={limit:i,...c,token:d},T=X(f,y),W={accept:l.geojson},{data:S}=await $(T,{signal:g,headers:W}),N=Fe(T,i,S.links)??J;le(S);const m=ce(S,{geometryType:n.geometryType}),F=n.fields||m.fields||[],Z=n.hasZ!=null?n.hasZ:m.hasZ,w=m.geometryType,b=n.objectIdField||m.objectIdFieldName||"OBJECTID";let s=n.timeInfo;const v=F.find(({name:r})=>r===b);if(v)v.editable=!1,v.nullable=!1;else{if(!m.objectIdFieldType)throw new j("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");F.unshift({name:b,alias:b,type:m.objectIdFieldType==="number"?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1})}if(b!==m.objectIdFieldName){const r=F.find(({name:u})=>u===m.objectIdFieldName);r&&(r.type="esriFieldTypeInteger")}F===m.fields&&m.unknownFields.length>0&&G().warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:m.unknownFields}});for(const r of F){if(r.name==null&&(r.name=r.alias),r.alias==null&&(r.alias=r.name),r.type!=="esriFieldTypeOID"&&r.type!=="esriFieldTypeGlobalID"&&(r.editable=r.editable==null||!!r.editable,r.nullable=r.nullable==null||!!r.nullable),!r.name)throw new j("ogc-feature-layer:invalid-field-name","field name is missing",{field:r});if(!ee.jsonValues.includes(r.type))throw new j("ogc-feature-layer:invalid-field-type",`invalid type for field "${r.name}"`,{field:r})}if(s){const r=new E(F);if(s.startTimeField){const u=r.get(s.startTimeField);u?(s.startTimeField=u.name,u.type="esriFieldTypeDate"):s.startTimeField=null}if(s.endTimeField){const u=r.get(s.endTimeField);u?(s.endTimeField=u.name,u.type="esriFieldTypeDate"):s.endTimeField=null}if(s.trackIdField){const u=r.get(s.trackIdField);u?s.trackIdField=u.name:(s.trackIdField=null,G().warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:s}}))}s.timeReference||(s.timeReference={timeZoneIANA:ne}),s.startTimeField||s.endTimeField||(G().warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:s}}),s=null)}return{drawingInfo:w?de(w):null,extent:he(e),geometryType:w,fields:F,hasZ:!!Z,objectIdField:b,paginationParameter:N,timeInfo:s}}async function Pe(e,n={}){const{links:t,url:i}=e,a=p(t,"data",l.json)||p(t,"http://www.opengis.net/def/rel/ogc/1.0/data",l.json);if(a==null)throw new j("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:o,customParameters:d,signal:c}=n,g=q(a.href,i),{data:f}=await $(g,{signal:c,headers:{accept:l.json},query:{...d,token:o}});for(const y of f.collections)y.landingPage=e;return f}async function Oe(e,n={}){const{links:t,url:i}=e,a=p(t,"conformance",l.json)||p(t,"http://www.opengis.net/def/rel/ogc/1.0/conformance",l.json);if(a==null)throw new j("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:o,customParameters:d,signal:c}=n,g=q(a.href,i),{data:f}=await $(g,{signal:c,headers:{accept:l.json},query:{...d,token:o}});return f}async function qe(e,n={}){const{apiKey:t,customParameters:i,signal:a}=n,{data:o}=await $(e,{signal:a,headers:{accept:l.json},query:{...i,token:t}});return o.url=e,o}async function Ce(e,n={}){const{links:t,url:i}=e,a=p(t,"service-desc",l.openapi);if(a==null)return G().warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:o,customParameters:d,signal:c}=n,g=q(a.href,i),{data:f}=await $(g,{signal:c,headers:{accept:l.openapi},query:{...d,token:o}});return f}function Ge(e){const n=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e),t=n==null?void 0:n.groups;if(!t)return null;const{authority:i,code:a}=t;switch(i.toLowerCase()){case"ogc":switch(a.toLowerCase()){case"crs27":return x.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return x.WGS84.wkid;default:return null}case"esri":case"epsg":{const o=Number.parseInt(a,10);return Number.isNaN(o)?null:o}default:return null}}async function We(e,n,t){const i=await pe(e,n,t);return ae(i)}async function pe(e,n,t){const{collection:{links:i,landingPage:{url:a}},layerDefinition:o,maxRecordCount:d,queryParameters:{apiKey:c,customParameters:g},spatialReference:f,supportedCrs:y}=e,T=p(i,"items",l.geojson)||p(i,"http://www.opengis.net/def/rel/ogc/1.0/items",l.geojson);if(T==null)throw new j("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:W,num:S,start:N,timeExtent:m,where:F}=n;if(n.objectIds)throw new j("ogc-feature-layer:query-by-objectids-not-supported","Queries with object ids are not supported");const Z=x.fromJSON(f),w=n.outSpatialReference??Z,b=w.isWGS84?null:_(w,y),s=be(W,y),v=ye(m),r=we(F),u=S??(N==null?d:10),z=N===0?void 0:N,{fields:R,geometryType:C,hasZ:D,objectIdField:P,paginationParameter:B}=o,Q=q(T.href,a),{data:A}=await $(Q,{...t,query:{...g,...s,crs:b,datetime:v,query:r,limit:u,[B]:z,token:c},headers:{accept:l.geojson}}),O=ue(A,{geometryType:C,hasZ:D,objectIdField:P}),V=O.length===u&&!!p(A.links??[],"next",l.geojson),Y=new E(R);for(const h of O){const k={};fe(Y,k,h.attributes),k[P]=h.attributes[P],h.attributes=k}if(!b&&w.isWebMercator){for(const h of O)if(h.geometry!=null&&C!=null){const k=re(h.geometry,C,D,!1);k.spatialReference=x.WGS84,h.geometry=se(L(k,w))}}for(const h of O)h.objectId=h.attributes[P];const H=b||!b&&w.isWebMercator?w.toJSON():te,I=new oe;return I.exceededTransferLimit=V,I.features=O,I.fields=R,I.geometryType=C,I.hasZ=D,I.objectIdFieldName=P,I.spatialReference=H,I}function ge(e){return e!=null&&e.type==="extent"}function _(e,n){const{isWebMercator:t,wkid:i}=e;if(!i)return null;const a=t?n[3857]??n[102100]??n[102113]??n[900913]:n[e.wkid];return a?`${U}${a}`:null}function M(e){if(e==null)return"";const{xmin:n,ymin:t,xmax:i,ymax:a}=e;return`${n},${t},${i},${a}`}function ye(e){if(e==null)return null;const{start:n,end:t}=e;return`${n!=null?n.toISOString():".."}/${t!=null?t.toISOString():".."}`}function we(e){return e!=null&&e&&e!=="1=1"?e:null}function be(e,n){if(!ge(e))return null;const{spatialReference:t}=e;if(!t||t.isWGS84)return{bbox:M(e)};const i=_(t,n);return i!=null?{bbox:M(e),"bbox-crs":i}:t.isWebMercator?{bbox:M(L(e,x.WGS84))}:null}function he(e){var c;const n=(c=e.extent)==null?void 0:c.spatial;if(!n)return null;const t=n.bbox[0],i=t.length===4,[a,o]=t,d=i?void 0:t[2];return{xmin:a,ymin:o,xmax:i?t[2]:t[3],ymax:i?t[3]:t[4],zmin:d,zmax:i?void 0:t[5],spatialReference:x.WGS84.toJSON()}}function p(e,n,t){return e.find(({rel:i,type:a})=>i===n&&a===t)??e.find(({rel:i,type:a})=>i===n&&!a)}function Fe(e,n,t){var f;if(!t)return;const i=p(t,"next",l.geojson),a=(f=K(i==null?void 0:i.href))==null?void 0:f.query;if(!a)return;const o=K(e).query,d=Object.keys(o??{}),c=Object.entries(a).filter(([y])=>!d.includes(y)).find(([y,T])=>me.has(y.toLowerCase())&&Number.parseInt(T,10)===n);return c==null?void 0:c[0]}(function(e){e.json="application/json",e.geojson="application/geo+json",e.openapi="application/vnd.oai.openapi+json;version=3.0"})(l||(l={}));export{pe as $,Ge as C,Pe as N,Oe as O,qe as P,We as R,U as k,Ce as q,ve as v,Ne as x};
