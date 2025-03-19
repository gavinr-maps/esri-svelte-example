import{B as U,d as g,M as D}from"./Accessor-BmwT4B0c.js";import{j as O,E as T}from"./Promise-DfET-uns.js";import{l as h,i as y}from"./intl-Duiy0OzY.js";import{k as S,P as w,o as z,x as G}from"./opacityUtils-Dim20wpZ.js";import{O as P}from"./layerUtils-B__v9OBu.js";import{N as Z,$ as Q}from"./utils-v4CMtYiY.js";import{h as H}from"./timeZoneUtils-DxzjpEBb.js";import"./cast-CsZslgGN.js";import"./index-4eY77cms.js";import"./JSONSupport-DcrLLGjL.js";import"./Point-Cz2JYYmX.js";import"./writer-DKgfqj4X.js";import"./reactiveUtils-XM7cS2OP.js";import"./Evented-Dw4_VOGn.js";import"./SimpleObservable-CvOkykwM.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-Fi6iAz29.js";import"./vec3f64-BLpZdpfb.js";import"./common-DQOJ18NT.js";const _="esri.widgets.Feature.support.featureUtils",I=()=>U.getLogger(_),B=/href=(""|'')/gi,K=/(\{([^{\r\n]+)\})/g,V=/'/g,$=/^\s*expression\//i,J=/(\n)/gi,W=/[\u00A0-\u9999<>&]/gim,X=/href\s*=\s*(?:"([^"]+)"|'([^']+)')/gi,Y=/^(?:mailto:|tel:)/,A="relationships/",N=O("short-date-short-time");function ze(e){if(e!=null)return(e.sourceLayer||e.layer)??void 0}async function Ge({type:e,value:t,event:r}){try{return typeof t=="function"?t(r):await t}catch(n){return void I().error("error",`An error occurred when calling the "${e}" function`,{error:n,graphic:r.graphic,value:t})}}function Pe(e=""){if(e)return!Y.test(e.trim().toLowerCase())}function ee(e){return!!e&&$.test(e)}function te(e,t){if(!t||!ee(t)||!e)return;const r=t.replace($,"").toLowerCase();return e.find(({name:n})=>n.toLowerCase()===r)}function Qe(e,t){const r=te(t,e==null?void 0:e.fieldName);return r?r.title||null:e?e.label||e.fieldName:null}function re(e,t){const r=t.get(e.toLowerCase());return`{${(r==null?void 0:r.fieldName)||e}}`}function ne(e){return e.replaceAll(B,"")}function q(e,t){const r=F(t,e);return r?r.name:e}function He(e,t){return e&&e.map(r=>q(r,t))}function F(e,t){return e&&typeof e.getField=="function"&&t?e.getField(t)??null:null}function j(e){return`${e}`.trim()}function _e({attributes:e,globalAttributes:t,layer:r,text:n,expressionAttributes:i,fieldInfoMap:a}){return n?ie({formattedAttributes:t,template:ue(n,{...t,...i,...e},r),fieldInfoMap:a}):""}function ie({formattedAttributes:e,template:t,fieldInfoMap:r}){return j(ne(g(g(t,n=>re(n,r)),e)))}function ae(e,t,r=!1){const n=t[e];if(typeof n=="string"){const i="%27",a=(r?encodeURIComponent(n):n).replaceAll(V,i);t[e]=a}}function oe(e,t=!1){const r={...e};return Object.keys(r).forEach(n=>ae(n,r,t)),r}function le(e,t,r){const n=(t=j(t))&&t[0]!=="{";return g(e,oe(r,n||!1))}function se(e,t){return e.replaceAll(K,(r,n,i)=>{const a=F(t,i);return a?`{${a.name}}`:n})}function ue(e,t,r){const n=se(e,r);return n&&n.replaceAll(X,(i,a,o)=>le(i,a||o,t))}function fe(e,t){if(typeof e=="string"&&t&&t.dateFormat==null&&(t.places!=null||t.digitSeparator!=null)){const r=Number(e);if(!isNaN(r))return r}return e}function de(e){return e!=null&&typeof e=="object"&&"fieldsIndex"in e&&"geometryType"in e&&"getField"in e&&"load"in e&&"loaded"in e&&"objectIdField"in e&&"spatialReference"in e&&"type"in e&&(e.type==="feature"||e.type==="scene"||e.type==="subtype-group"||e.type==="subtype-sublayer"||e.type==="sublayer")&&"when"in e}function ce(e){return e!=null&&typeof e=="object"&&"createQuery"in e&&"queryFeatureCount"in e&&"queryObjectIds"in e&&"queryRelatedFeatures"in e&&"queryRelatedFeaturesCount"in e&&"relationships"in e}function C(e){return de(e)&&ce(e)}function Be(e){return!(!(e&&typeof e=="object"&&"createQuery"in e&&"getField"in e&&"queryFeatureCount"in e&&"queryFeatures"in e&&"queryObjectIds"in e&&"capabilities"in e&&"fields"in e&&"fieldsIndex"in e&&"type"in e)||e.type!=="feature"&&e.type!=="subtype-group"&&e.type!=="subtype-sublayer"&&e.type!=="sublayer"||!("when"in e))&&(e.type==="subtype-sublayer"&&"parent"in e&&e.parent&&typeof e.parent=="object"?"globalIdField"in e.parent:"globalIdField"in e)}function Ke(e){return!!e&&typeof e=="object"&&"sourceLayer"in e&&C(e.sourceLayer)}function pe(e,t){var c;const{fieldInfos:r,fieldName:n,preventPlacesFormatting:i,layer:a,timeZone:o}=t,s=me(r,n),l=F(a,n);if(s&&!w(n)){const f=l==null?void 0:l.type,d=(c=s.format)==null?void 0:c.dateFormat;if(f==="date"||f==="date-only"||f==="time-only"||f==="timestamp-offset"||d)return Z(e,{format:d,fieldType:f,timeZoneOptions:{layerTimeZone:a&&"preferredTimeZone"in a?a.preferredTimeZone:null,viewTimeZone:o,datesInUnknownTimezone:!(!a||!("datesInUnknownTimezone"in a))&&!!a.datesInUnknownTimezone}})}const u=s==null?void 0:s.format;return typeof e=="string"&&w(n)&&u?ye(e,u):typeof(e=fe(e,u))=="string"||e==null||u==null?k(e):h(e,i?{...y(u),minimumFractionDigits:0,maximumFractionDigits:20}:y(u))}function ye(e,t){return e=e.trim(),/\d{2}-\d{2}/.test(e)?e:e.includes(",")?b(e,",",", ",t):e.includes(";")?b(e,";","; ",t):e.includes(" ")?b(e," "," ",t):h(Number(e),y(t))}function b(e,t,r,n){return e.trim().split(t).map(i=>h(Number(i),y(n))).join(r)}function me(e,t){if(e!=null&&e.length&&t)return e.find(r=>{var n;return((n=r.fieldName)==null?void 0:n.toLowerCase())===t.toLowerCase()})}function be({fieldName:e,graphic:t,layer:r}){if(M(e)||!r||typeof r.getFeatureType!="function")return null;const{typeIdField:n}=r;if(!n||e!==n)return null;const i=r.getFeatureType(t);return i?i.name:null}function ge({fieldName:e,value:t,graphic:r,layer:n}){if(M(e)||!n||typeof n.getFieldDomain!="function")return null;const i=r&&n.getFieldDomain(e,{feature:r,excludeImpliedDomains:D("esri-widget-legacy-field-domain-calculation")});return i&&i.type==="coded-value"?i.getName(t):null}function Ve(e,t,r,n){const{creatorField:i,creationDateField:a,editorField:o,editDateField:s}=e;if(!t)return;const l=H(n&&"preferredTimeZone"in n?n.preferredTimeZone:null,!(!n||!("datesInUnknownTimezone"in n))&&!!n.datesInUnknownTimezone,r,N,"date"),u={...N,...l},c=t[s];if(typeof c=="number"){const d=t[o];return{type:"edit",date:T(c,u),user:d}}const f=t[a];if(typeof f=="number"){const d=t[i];return{type:"create",date:T(f,u),user:d}}return null}function Je(e,t){const r=new Map;if(!e)return r;for(const n of e){if(!n.fieldName)continue;const i=q(n.fieldName,t);n.fieldName=i,r.set(i.toLowerCase(),n)}return r}function We(e){const t=[];if(!e)return t;const{fieldInfos:r,content:n}=e;return r&&t.push(...r),n&&Array.isArray(n)&&n.forEach(i=>{if(i.type==="fields"){const a=i==null?void 0:i.fieldInfos;a&&t.push(...a)}}),t}function Xe(e){return e.replaceAll(W,t=>`&#${t.charCodeAt(0)};`)}function k(e){return typeof e=="string"?e.replaceAll(J,'<br class="esri-text-new-line" />'):e}function R(e){var f;const{value:t,fieldName:r,fieldInfos:n,fieldInfoMap:i,layer:a,graphic:o,timeZone:s}=e;if(t==null)return"";const l=ge({fieldName:r,value:t,graphic:o,layer:a});if(l)return l;const u=be({fieldName:r,graphic:o,layer:a});if(u)return u;if(i.get(r.toLowerCase()))return pe(t,{fieldInfos:n||Array.from(i.values()),fieldName:r,layer:a,timeZone:s});const c=(f=a==null?void 0:a.fieldsIndex)==null?void 0:f.get(r);return c&&(Q(c)||G(c))?Z(t,{fieldType:c.type,timeZoneOptions:{layerTimeZone:a&&"preferredTimeZone"in a?a.preferredTimeZone:null,viewTimeZone:s,datesInUnknownTimezone:!(!a||!("datesInUnknownTimezone"in a))&&!!a.datesInUnknownTimezone}}):k(t)}function Ye({fieldInfos:e,attributes:t,layer:r,graphic:n,fieldInfoMap:i,relatedInfos:a,timeZone:o}){const s={};return a==null||a.forEach(l=>Te({attributes:s,relatedInfo:l,fieldInfoMap:i,fieldInfos:e,layer:r,timeZone:o})),t&&Object.keys(t).forEach(l=>{const u=t[l];s[l]=R({fieldName:l,fieldInfos:e,fieldInfoMap:i,layer:r,value:u,graphic:n,timeZone:o})}),s}async function Ie(e,t){var c,f;const{layer:r,graphic:n,outFields:i,objectIds:a,returnGeometry:o,spatialReference:s}=e,l=a[0];if(typeof l!="number"&&typeof l!="string"){const d="Could not query required fields for the specified feature. The feature's ID is invalid.",m={layer:r,graphic:n,objectId:l,requiredFields:i};return I().warn(d,m),null}if(!((f=(c=P(r))==null?void 0:c.operations)!=null&&f.supportsQuery)){const d="The specified layer cannot be queried. The following fields will not be available.",m={layer:r,graphic:n,requiredFields:i,returnGeometry:o};return I().warn(d,m),null}const u=r.createQuery();return u.objectIds=a,u.outFields=i!=null&&i.length?i:[r.objectIdField],u.returnGeometry=!!o,u.returnZ=!!o,u.returnM=!!o,u.outSpatialReference=s,(await r.queryFeatures(u,t)).features[0]}async function he(e){var n;if(!((n=e.expressionInfos)!=null&&n.length))return!1;const t=await z(),{arcadeUtils:{hasGeometryFunctions:r}}=t;return r(e)}async function et({graphic:e,popupTemplate:t,layer:r,spatialReference:n},i){if(!r||!t||(typeof r.load=="function"&&await r.load(i),!e.attributes))return;const a=r.objectIdField,o=e.attributes[a];if(o==null)return;const s=[o],l=await t.getRequiredFields(r.fieldsIndex),u=S(l,e),c=u?[]:l.includes(a)?l:[...l,a],f=t.returnGeometry||await he(t);if(u&&!f)return;const d=await Ie({layer:r,graphic:e,outFields:c,objectIds:s,returnGeometry:f,spatialReference:n},i);d&&(d.geometry&&(e.geometry=d.geometry),d.attributes&&(e.attributes={...e.attributes,...d.attributes}))}function M(e=""){return!!e&&e.includes(A)}function Fe(e){return`${A}${e.layerId}/${e.fieldName}`}function L({attributes:e,graphic:t,relatedInfo:r,fieldInfos:n,fieldInfoMap:i,layer:a,timeZone:o}){e&&t&&r&&Object.keys(t.attributes).forEach(s=>{const l=Fe({layerId:r.relation.id.toString(),fieldName:s}),u=t.attributes[s];e[l]=R({fieldName:l,fieldInfos:n,fieldInfoMap:i,layer:a,value:u,graphic:t,timeZone:o})})}function Te({attributes:e,relatedInfo:t,fieldInfoMap:r,fieldInfos:n,layer:i,timeZone:a}){var o,s;e&&t&&((o=t.relatedFeatures)==null||o.forEach(l=>L({attributes:e,graphic:l,relatedInfo:t,fieldInfoMap:r,fieldInfos:n,layer:i,timeZone:a})),(s=t.relatedStatsFeatures)==null||s.forEach(l=>L({attributes:e,graphic:l,relatedInfo:t,fieldInfoMap:r,fieldInfos:n,layer:i,timeZone:a})))}const x=e=>{if(!e)return!1;const t=e.toUpperCase();return t.includes("CURRENT_TIMESTAMP")||t.includes("CURRENT_DATE")||t.includes("CURRENT_TIME")},v=({layer:e,method:t,query:r,definitionExpression:n})=>{var o,s;if(!((s=(o=e.capabilities)==null?void 0:o.query)!=null&&s.supportsCacheHint)||t==="attachments")return;const i=r.where!=null?r.where:null,a=r.geometry!=null?r.geometry:null;x(n)||x(i)||(a==null?void 0:a.type)==="extent"||r.resultType==="tile"||(r.cacheHint=!0)},tt=({query:e,layer:t,method:r})=>{v({layer:t,method:r,query:e,definitionExpression:`${t.definitionExpression} ${t.serviceDefinitionExpression??""}`})},rt=({queryPayload:e,layer:t,method:r})=>{v({layer:t,method:r,query:e,definitionExpression:`${t.definitionExpression} ${t.serviceDefinitionExpression??""}`})};function nt(e,t,r){var n,i;return e&&t&&r?t.type==="sublayer"?p({layers:(n=t.layer)==null?void 0:n.sublayers,map:e,relatedLayer:t,relationship:r})||p({layers:(i=t.layer)==null?void 0:i.subtables,map:e,relatedLayer:t,relationship:r}):p({layers:e.allLayers,map:e,relatedLayer:t,relationship:r})||p({layers:e.allTables,map:e,relatedLayer:t,relationship:r}):null}function it(e,t){var r;return e&&"utilityNetworks"in e&&t?(r=e.utilityNetworks)==null?void 0:r.find(n=>n.isUtilityLayer(t)):null}function E(e,t){return e==null?void 0:e.allTables.find(r=>{var n;return r.type==="feature"&&r.layerId===t.id&&r.url===((n=t.layer)==null?void 0:n.url)})}function p({map:e,relationship:t,relationship:{relatedTableId:r},relatedLayer:n,layers:i}){var a;if(!i)return null;for(const o of i){if(o.type==="map-image"){const l=p({layers:o.sublayers,map:e,relatedLayer:n,relationship:t})||p({layers:o.subtables,map:e,relatedLayer:n,relationship:t});if(l)return l;continue}if(!C(o))continue;if(n.type==="sublayer"){if(o!==n&&o.id===r)return o.isTable?E(e,o):o;continue}const s=n.type==="scene"&&n.associatedLayer?n.associatedLayer.url:n.url;if(!s)return null;if(o.type!=="sublayer"){if(o!==n&&o.url===s&&o.layerId===r)return o}else if(o!==n&&((a=o.layer)==null?void 0:a.url)===s&&o.id===r)return o.isTable?E(e,o):o}return null}function at(e){const t=e.getObjectId();return t!=null?`oid:${t}`:`uid:${e.uid}`}export{k as applyTextFormattingHTML,Je as createFieldInfoMap,nt as findRelatedLayer,it as findUtilityNetwork,se as fixTokens,Ye as formatAttributes,Ve as formatEditInfo,pe as formatValueToFieldInfo,We as getAllFieldInfos,me as getFieldInfo,Qe as getFieldInfoLabel,q as getFixedFieldName,He as getFixedFieldNames,at as getHighlightKeyForFeature,ze as getSourceLayer,Ge as graphicCallback,Xe as htmlEntities,Be as isAssociatedFeatureSupportedLayer,ee as isExpressionField,de as isFeatureSupportedLayer,Ke as isGraphicForRelatableFeatureSupportedLayer,C as isRelatableFeatureSupportedLayer,ce as isRelatableLayer,M as isRelatedField,tt as preLayerQueryCallback,rt as preRequestCallback,Ie as querySourceLayer,et as queryUpdatedFeature,Pe as shouldOpenInNewTab,ie as substituteAttributes,_e as substituteFieldsInLinksAndAttributes};
