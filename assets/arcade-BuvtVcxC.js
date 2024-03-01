import{F as $,aV as G,c6 as L,au as P,j as I}from"./index-B1qcMJFy.js";import{n as T,a as F,m as w}from"./TimeOnly-CBRxWEF1.js";import{t as J}from"./ImmutableArray-BlMso3qf.js";import M from"./FeatureLayer-CUmHa_MP.js";import{d as z}from"./FeatureSet-B0ca9TdS.js";import"./UnknownTimeZone-B5Qf1DoL.js";import"./UniqueValueRenderer-0DBTeu6a.js";import"./ColorStop-CWeLc-IV.js";import"./diffUtils-ArzxlFJn.js";import"./colorRamps-DdzVD7Op.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-BGai42lJ.js";import"./lengthUtils-DbqEO4K7.js";import"./jsonUtils-D4lwJas0.js";import"./styleUtils-CCLgKLZt.js";import"./jsonUtils-T1v-OExy.js";import"./LRUCache-BtWa1HuP.js";import"./Version-D0C4RPiX.js";import"./FieldsIndex-DA0UbGLz.js";import"./OverrideHelper-DlLhMkRM.js";import"./colorUtils-46-ov8wK.js";import"./vec42-B-sS29RP.js";import"./vec4f64-CCf6w8sj.js";import"./utils-y0bK7WMB.js";import"./quantizationUtils-D0A0ACzz.js";import"./heatmapUtils-BYQ7d-zD.js";import"./MultiOriginJSONSupport-DKJLfnej.js";import"./commonProperties-DknRhH4V.js";import"./ElevationInfo-C7Yz1Jr6.js";import"./FormTemplate-Bvd_lVo8.js";import"./editsZScale-Dr1yqipn.js";import"./queryZScale-CxjL_CF1.js";import"./APIKeyMixin-CAZdibRi.js";import"./ArcGISService-DarjENGO.js";import"./BlendLayer-YVwXaff0.js";import"./jsonUtils-PeZxWKr8.js";import"./parser-BMJzm2a2.js";import"./CustomParametersMixin-BVpMPZE8.js";import"./EditBusLayer-BstQh227.js";import"./FeatureEffectLayer-PAv40tQG.js";import"./FeatureEffect-BLi5ervx.js";import"./FeatureLayerBase-4wJRD6Q2.js";import"./featureLayerUtils-CSLwh38G.js";import"./AttachmentQuery-B2yhFws1.js";import"./RelationshipQuery-DLL_bDIJ.js";import"./LayerFloorInfo-B7VXM-7y.js";import"./serviceCapabilitiesUtils-BdZiBH1m.js";import"./FeatureReductionLayer-CcnR_gQV.js";import"./FeatureReductionSelection-D0qp3RiB.js";import"./LabelClass-BsrtqKpM.js";import"./labelUtils-BAW6mwzs.js";import"./defaultsJSON-CHAaurhX.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-BFTzYm0d.js";import"./OrderedLayer-aPip0CVa.js";import"./OrderByInfo-Bjqd1YIi.js";import"./PortalLayer-DivwsagB.js";import"./portalItemUtils-CpptSpr9.js";import"./RefreshableLayer-FPVobzY-.js";import"./ScaleRangeLayer-BFzm67-h.js";import"./TemporalLayer-pN8x1jgO.js";import"./TimeInfo-DweofXok.js";import"./FeatureTemplate-BUweoQMK.js";import"./FeatureType-TpDkns20.js";import"./fieldProperties-BBlnK2BG.js";import"./labelingInfo-Bvinz6du.js";import"./versionUtils-IkP9oF5g.js";import"./styleUtils-CGOq57h7.js";import"./TopFeaturesQuery-DCHj7H1E.js";import"./popupUtils-Be21TX_a.js";import"./interfaces-CL2NbQte.js";let b=null;function E(e,n,a,o={}){const t=n.elementType,i="value",c=t.type==="array"?[{name:i,type:t.type,elementType:t.elementType}]:t.type==="dictionary"?[{name:i,type:t.type,properties:t.properties}]:[{name:i,type:t.type}];return new J(e.map(p=>{const r={};return g(r,c,{[i]:p},a,o),r[i]}))}function N(e,n,a={}){const o=e instanceof z?new M({source:e.features,geometryType:e.geometryType,fields:e.fields,spatialReference:e.spatialReference}):e;return n.constructFeatureSet(o,a.spatialReference,null,!0,a.lruCache,a.interceptor)}function Q(e,n,a={}){const{spatialReference:o,interceptor:t,lruCache:i}=a;return typeof e=="string"?n.createFeatureSetCollectionFromService(e,o,i,t):n.createFeatureSetCollectionFromMap(e,o,i,t)}function V(e,n,a,o={}){const t={};return g(t,n.properties,e,a,o),new b.Dictionary(t)}function g(e,n,a,o,t={}){const i={};for(const c of Object.keys(a))i[c.toLowerCase()]=a[c];for(const c of n){const p=c.name.toLowerCase();if(t.variablesPreProcessed)e[p]=i[p];else switch(c.type){case"array":{const r=i[p];e[p]=r==null?null:E(r,c,o,t);break}case"feature":{const r=i[p];e[p]=r==null?null:b.Feature.createFromGraphic(r,t==null?void 0:t.timeZone);break}case"featureSet":{const r=i[p];e[p]=r==null?null:o?N(r,o,t):null;break}case"featureSetCollection":{const r=i[p];e[p]=r==null?null:o?Q(r,o,t):null;break}case"dictionary":{const r=i[p];e[p]=r==null?null:V(r,c,o,t);break}case"date":{const r=i[p];e[p]=r?r instanceof w?r:t!=null&&t.timeZone?w.dateJSAndZoneToArcadeDate(r,t==null?void 0:t.timeZone):w.dateJSToArcadeDate(r):null;break}case"dateOnly":{const r=i[p];e[p]=r?r instanceof F?r:F.fromReader(r):null;break}case"time":{const r=i[p];e[p]=r?r instanceof T?r:T.fromReader(r):null;break}case"knowledgeGraph":case"geometry":case"boolean":case"text":case"number":e[p]=i[p]}}}function Z(e,n){for(const a of e)n.push(a),a.type==="dictionary"&&Z(a.properties,n);return n}function R(e,n,a,o,t){const{spatialReference:i,interceptor:c,lruCache:p,console:r,abortSignal:u,timeZone:m,services:S={portal:P.getDefault()}}=a,f={vars:{},spatialReference:i,interceptor:c,timeZone:m,lrucache:p,useAsync:t,services:S,console:r,abortSignal:u};return n&&g(f.vars,e.variables,n,o,a),f}function v(e,n){switch(n.getArcadeType(e)){case"number":case"text":case"boolean":case"point":case"polygon":case"polyline":case"multipoint":case"extent":return e;case"date":return e.toJSDate();case"time":case"dateOnly":return e.toString();case"feature":{const a=(e.type,e),o="geometry"in a?a.geometry():null,t="readAttributes"in a?a.readAttributes():a.attributes;return new I({geometry:o,attributes:t})}case"dictionary":{const a=e,o=a.attributes,t={};for(const i of Object.keys(o))t[i]=v(a.field(i),n);return t}case"array":return("toArray"in e?e.toArray():e).map(a=>v(a,n))}return e}const D={variables:[{name:"$feature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$userInput",type:"geometry"},{name:"$graph",type:"knowledgeGraph"}]},O={variables:[{name:"$feature",type:"feature"},{name:"$aggregatedFeatures",type:"featureSet"}]},U=new Map([["form-constraint",{variables:[{name:"$feature",type:"feature"}]}],["feature-z",{variables:[{name:"$feature",type:"feature"}]}],["field-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$datastore",type:"featureSetCollection"}]}],["form-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$originalFeature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$featureSet",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$editContext",type:"dictionary",properties:[{name:"editType",type:"text"}]}]}],["labeling",{variables:[{name:"$feature",type:"feature"}]}],["popup",D],["popup-element",D],["feature-reduction-popup",O],["feature-reduction-popup-element",O],["visualization",{variables:[{name:"$feature",type:"feature"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"}]}]}]]);function ct(e){const n=U.get(e);if(!n){const a=Array.from(U.keys()).map(o=>`'${o}'`).join(", ");throw new $("createArcadeProfile:invalid-profile-name",`Invalid profile name '${e}'. You must specify one of the following values: ${a}`)}return G(n)}async function mt(e,n,a={}){b||(b=await L());const{arcade:o,arcadeUtils:t}=b,{loadScriptDependencies:i,referencesMember:c,scriptIsAsync:p}=o,r=Z(n.variables,[]),u=r.filter(s=>s.type==="featureSet"||s.type==="featureSetCollection").map(s=>s.name.toLowerCase()),m=o.parseScript(e,u);if(!m)throw new $("arcade:invalid-script","Unable to create SyntaxTree");const S=t.extractFieldNames(m),f=o.scriptTouchesGeometry(m),h=r.map(s=>s.name.toLowerCase()).filter(s=>c(m,s)),l=p(m,u);await i(m,l,u);const C={vars:{},spatialReference:null,useAsync:l};for(const s of h)C.vars[s]="any";const{lruCache:A}=a,x=o.compileScript(m,C),k=o.featureSetUtils(),{services:j}=a;return{execute:(s,y={})=>{if(l)throw new $("arcade:invalid-execution-mode","Cannot execute the script in synchronous mode");const d=x(R(n,s,{lruCache:A,...y},k,l));return y.rawOutput?d:v(d,t)},executeAsync:async(s,y={})=>{const d=await x(R(n,s,{lruCache:A,services:j,...y},k,l));return y.rawOutput?d:v(d,t)},isAsync:l,variablesUsed:h,fieldsUsed:S,geometryUsed:f,syntaxTree:m}}export{mt as createArcadeExecutor,ct as createArcadeProfile};
