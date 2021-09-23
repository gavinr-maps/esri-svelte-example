var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,n,i)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,o=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))r.call(t,n)&&s(e,n,t[n]);return e},l=(e,i)=>t(e,n(i));import{m as c,q as d,w as u,L as f,fa as p,cd as m,b8 as g,cO as y,fF as w,bN as b,r as h,c6 as F,bH as I,cD as j,dB as T,fG as k}from"./vendor.d0a39f0f.js";import{I as O,T as v,k as x}from"./geojson.aa9ea6ad.js";import{u as S}from"./clientSideDefaults.67fdee82.js";const N=c.getLogger("esri.layers.graphics.sources.ogcfeature");async function P(e,t,n={},i=5){const{links:a}=e,r=J(a,"items","application/geo+json")||J(a,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(d(r))throw new u("ogc-feature-layer:missing-items-page","Missing items url");const{data:s}=await f(r.href,{signal:n.signal,query:l(o({limit:i},n.customParameters),{token:n.apiKey}),headers:{accept:"application/geo+json"}});await O(s);const c=v(s,{geometryType:t.geometryType}),g=t.fields||c.fields||[],y=null!=t.hasZ?t.hasZ:c.hasZ,w=c.geometryType,b=t.objectIdField||c.objectIdFieldName||"OBJECTID";let h=t.timeInfo;const F=g.find((e=>e.name===b));if(F)F.type="esriFieldTypeOID",F.editable=!1,F.nullable=!1;else{if(!c.objectIdFieldType)throw new u("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");g.unshift({name:b,alias:b,type:"esriFieldTypeOID",editable:!1,nullable:!1})}if(b!==c.objectIdFieldName){const e=g.find((e=>e.name===c.objectIdFieldName));e&&(e.type="esriFieldTypeInteger")}g===c.fields&&c.unknownFields.length>0&&N.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:c.unknownFields}});for(const o of g){if(null==o.name&&(o.name=o.alias),null==o.alias&&(o.alias=o.name),"esriFieldTypeOID"!==o.type&&"esriFieldTypeGlobalID"!==o.type&&(o.editable=null==o.editable||!!o.editable,o.nullable=null==o.nullable||!!o.nullable),!o.name)throw new u("ogc-feature-layer:invalid-field-name","field name is missing",{field:o});if(-1===p.jsonValues.indexOf(o.type))throw new u("ogc-feature-layer:invalid-field-type",`invalid type for field "${o.name}"`,{field:o})}if(h){const e=new m(g);if(h.startTimeField){const t=e.get(h.startTimeField);t?(h.startTimeField=t.name,t.type="esriFieldTypeDate"):h.startTimeField=null}if(h.endTimeField){const t=e.get(h.endTimeField);t?(h.endTimeField=t.name,t.type="esriFieldTypeDate"):h.endTimeField=null}if(h.trackIdField){const t=e.get(h.trackIdField);t?h.trackIdField=t.name:(h.trackIdField=null,N.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:h}}))}h.startTimeField||h.endTimeField||(N.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:h}}),h=null)}return{drawingInfo:w?S(w):null,geometryType:w,fields:g,hasZ:!!y,objectIdField:b,timeInfo:h}}async function q(e,t={}){const{links:n}=e,i=J(n,"data","application/json")||J(n,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if(d(i))throw new u("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:a,customParameters:r,signal:s}=t,{data:c}=await f(i.href,{signal:s,headers:{accept:"application/json"},query:l(o({},r),{token:a})});return c}async function D(e,t={}){const{links:n}=e,i=J(n,"conformance","application/json")||J(n,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if(d(i))throw new u("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:a,customParameters:r,signal:s}=t,{data:c}=await f(i.href,{signal:s,headers:{accept:"application/json"},query:l(o({},r),{token:a})});return c}async function M(e,t={}){const{apiKey:n,customParameters:i,signal:a}=t,{data:r}=await f(e,{signal:a,headers:{accept:"application/json"},query:l(o({},i),{token:n})});return r}async function G(e,t={}){const n="application/vnd.oai.openapi+json;version=3.0",i=J(e.links,"service-desc",n);if(d(i))return N.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:a,customParameters:r,signal:s}=t,{data:c}=await f(i.href,{signal:s,headers:{accept:n},query:l(o({},r),{token:a})});return c}function W(e){const t=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e),n=null==t?void 0:t.groups;if(!n)return null;const{authority:i,code:a}=n;switch(i.toLowerCase()){case"ogc":switch(a.toLowerCase()){case"crs27":return g.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return g.WGS84.wkid;default:return null}case"esri":case"epsg":{const e=Number.parseInt(a,10);return Number.isNaN(e)?null:e}default:return null}}async function C(e,t,n){const i=await R(e,t,n);return y.fromJSON(i)}async function R(e,t,n){const i=await $(e,t,n);return w(i)}async function $(e,t,n){const{capabilities:{query:{maxRecordCount:i}},collection:a,layerDefinition:r,queryParameters:{apiKey:s,customParameters:c},spatialReference:p,supportedCrs:m}=e,{links:y}=a,w=J(y,"items","application/geo+json")||J(y,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(d(w))throw new u("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:O,num:v,start:S,timeExtent:N,where:P}=t;if(t.objectIds)throw new u("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");const q=g.fromJSON(p),D=b(t.outSpatialReference,q),M=D.isWGS84?null:Z(D,m),G=function(e,t){if(!function(e){return h(e)&&"extent"===e.type}(e))return null;const{spatialReference:n}=e;if(!n||n.isWGS84)return{bbox:K(e)};const i=Z(n,t);return i?{bbox:K(e),"bbox-crs":i}:n.isWebMercator?{bbox:K(j(e,g.WGS84))}:null}(O,m),W=function(e){if(d(e))return null;const{start:t,end:n}=e;return`${h(t)?t.toISOString():".."}/${h(n)?n.toISOString():".."}`}(N),C=d(L=P)||!L||"1=1"===L?null:L,R=null!=v?v:null!=S&&void 0!==S?10:i,{data:$}=await f(w.href,l(o({},n),{query:l(o(o({},c),G),{crs:M,datetime:W,query:C,limit:R,startindex:S,token:s}),headers:{accept:"application/geo+json"}}));var L;let A=!1;if($.links){A=!!$.links.find((e=>"next"===e.rel))}!A&&Number.isInteger($.numberMatched)&&Number.isInteger($.numberReturned)&&(A=$.numberReturned<$.numberMatched);const{fields:E,globalIdField:B,hasM:_,hasZ:H,objectIdField:Q}=r,V=r.geometryType,z=x($,{geometryType:V,hasZ:H,objectIdField:Q});if(!M&&D.isWebMercator)for(const o of z)if(h(o.geometry)){const e=F(o.geometry,V,H,!1);e.spatialReference=g.WGS84,o.geometry=I(j(e,D))}for(const o of z)o.objectId=o.attributes[Q];const U=M||!M&&D.isWebMercator?D.toJSON():T,X=new k;return X.exceededTransferLimit=A,X.features=z,X.fields=E,X.geometryType=V,X.globalIdFieldName=B,X.hasM=_,X.hasZ=H,X.objectIdFieldName=Q,X.spatialReference=U,X}function Z(e,t){var n;const{isWebMercator:i,wkid:a}=e;return a?i?null!=(r=null!=(s=null!=(o=null!=(l=t[3857])?l:t[102100])?o:t[102113])?s:t[900913])?r:null:null!=(n=t[e.wkid])?n:null:null;var r,s,o,l}function K(e){if(d(e))return"";const{xmin:t,ymin:n,xmax:i,ymax:a}=e;return`${t},${n},${i},${a}`}function J(e,t,n){return e.find((e=>e.rel===t&&e.type===n))||e.find((e=>e.rel===t&&!e.type))}export{P as F,q as I,R as N,G as S,D as T,M as k,$ as q,C as v,W as x};
