import{x as U,T as b,b6 as Te,ch as X,S as E,cf as re,_ as $e,gM as De,g4 as ne,gN as Me,gO as Pe,gP as oe,g as le,aJ as ue,as as Ne,gQ as Ge,bq as je,bt as Oe,bc as Y,gR as ce,Q as he,bH as Be,H as ke,$ as de,I as Ze,K as Le,C as He,br as Ue,bJ as Ye}from"./index-e8c6bcc0.js";import{e as fe,r as Je,s as We}from"./LRUCache-3922d825.js";import{b as me}from"./normalizeUtils-f64efc29.js";import{r as Xe}from"./featureConversionUtils-096a49d9.js";import{f as Ke}from"./WhereClause-0a306758.js";import{g as C,f as J,M as et}from"./projectionSupport-380694fd.js";import{t as tt}from"./QueryEngineCapabilities-42e44ded.js";import{m as pe}from"./quantizationUtils-4ff178e4.js";import{P as G,Z as j,G as ye,M,t as st,a as ge,v as k,n as it,I as xe,b as _e}from"./timeSupport-d59847c8.js";import{c as W,z as at,m as rt,f as Fe,d as we,g as nt,x as ot,F as lt,D as ut,S as ct,M as ht,v as dt,p as ft}from"./utils-68382e8f.js";import{r as mt}from"./FieldsIndex-888b8bd2.js";let pt=class{constructor(e,t){this._cache=new fe(e),this._invalidCache=new fe(t)}get(e,t){const s=`${t.uid}:${e}`,i=this._cache.get(s);if(i)return i;if(this._invalidCache.get(s)!==void 0)return null;try{const a=Ke.create(e,t);return this._cache.put(s,a),a}catch{return this._invalidCache.put(s,null),null}}};const be=new pt(50,500),O="feature-store:unsupported-query",ve=" as ",Ae=new U({esriFieldTypeString:"string"}),L=new U({esriFieldTypeOID:"oid",esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long"}),H=new U({esriFieldTypeDate:"date"}),Ve=new U({esriFieldTypeGUID:"guid",esriFieldTypeGlobalId:"global-id"}),yt=new Set([...L.jsonValues,...H.jsonValues,...Ae.jsonValues,...Ve.jsonValues]),Se=new Intl.ListFormat("en-US",{type:"conjunction"}).format([...L.apiValues,...H.apiValues,...Ae.apiValues,...Ve.apiValues]);function K(d,e,t={}){const s=P(d,e);if(!s)throw new b(O,"invalid SQL expression",{expression:d});const i=t.expressionName||"expression";if(t.validateStandardized&&!s.isStandardized)throw new b(O,`${i} is not standard`,{expression:d});if(t.validateAggregate&&!s.isAggregate)throw new b(O,`${i} does not contain a valid aggregate function`,{expression:d});return s.fieldNames}function gt(d,e,t){if(!e)return!0;const s="where clause",i=K(e,d,{validateStandardized:!0,expressionName:s});return q(d,i,{expressionName:s,query:t}),ee(d,i,{expressionName:s,query:t}),!0}function xt(d,e,t,s){if(!e)return!0;const i="having",a=K(e,d,{validateAggregate:!0,expressionName:i});q(d,a,{expressionName:i,query:s}),ee(d,a,{expressionName:i,query:s});const r=be.get(e,d);if(!(r==null?void 0:r.getExpressions().every(o=>{var c;const{aggregateType:u,field:l}=o,h=(c=d.get(l))==null?void 0:c.name;return t.some(m=>{var x;const{onStatisticField:p,statisticType:f}=m;return((x=d.get(p))==null?void 0:x.name)===h&&f.toLowerCase().trim()===u})})))throw new b(O,"expressions in having should also exist in outStatistics",{having:e});return!0}function P(d,e){return d?be.get(d,e):null}function q(d,e,t={}){t.errorMessage||(t.errorMessage=t.expressionName?`${t.expressionName} contains invalid fields`:"Fields are invalid"),te(d,e,(s,i)=>i.has(s),t)}function ee(d,e,t={}){t.errorMessage||(t.errorMessage=t.expressionName?`${t.expressionName} only supports ${Se} field types`:`Only ${Se} field types are supported`),te(d,e,(s,i)=>!Ee(s,i),t)}function te(d,e,t,s={}){const i=s.verifyExpression??!0,a=[];for(const r of e){const n=t(r,d);if(r!=="*"&&!n)if(i){const o=Qe(r);try{te(d,K(o,d,{validateStandardized:!0}),t,s)}catch(u){const l=u==null?void 0:u.details;if(l!=null&&l.expression)throw u;l!=null&&l.invalidFields?a.push(...l.invalidFields):a.push(r)}}else a.push(r)}if(a.length)throw new b(O,s.errorMessage,{invalidFields:a,query:s.query})}function Qe(d){return d.split(ve)[0]}function _t(d){return d.split(ve)[1]}function Ee(d,e,t=yt){const s=e.get(d);return!!s&&!t.has(s.type)}class Z{constructor(e,t,s){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=e.returnDistinctValues??!1,this.fieldsIndex=s,this.featureAdapter=t;const i=e.outFields;if(i&&!i.includes("*")){this.outFields=i;let a=0;for(const r of i){const n=Qe(r),o=this.fieldsIndex.get(n),u=o?null:P(n,s),l=o?o.name:_t(r)||"FIELD_EXP_"+a++;this._fieldDataCache.set(r,{alias:l,clause:u})}}}countDistinctValues(e){return this.returnDistinctValues?(e.forEach(t=>this.getAttributes(t)),this._returnDistinctMap.size):e.length}getAttributes(e){const t=this._processAttributesForOutFields(e);return this._processAttributesForDistinctValues(t)}getFieldValue(e,t,s){var r;const i=s?s.name:t;let a=null;return this._fieldDataCache.has(i)?a=(r=this._fieldDataCache.get(i))==null?void 0:r.clause:s||(a=P(t,this.fieldsIndex),this._fieldDataCache.set(i,{alias:i,clause:a})),s?this.featureAdapter.getAttribute(e,i):a==null?void 0:a.calculateValue(e,this.featureAdapter)}getDataValues(e,t){const s=t.normalizationType,i=t.normalizationTotal;return e.map(a=>{let r=t.field&&this.getFieldValue(a,t.field,this.fieldsIndex.get(t.field));if(t.field2&&(r=`${W(r)}${t.fieldDelimiter}${W(this.getFieldValue(a,t.field2,this.fieldsIndex.get(t.field2)))}`,t.field3&&(r=`${r}${t.fieldDelimiter}${W(this.getFieldValue(a,t.field3,this.fieldsIndex.get(t.field3)))}`)),s&&Number.isFinite(r)){const n=s==="field"&&t.normalizationField?this.getFieldValue(a,t.normalizationField,this.fieldsIndex.get(t.normalizationField)):null;r=at(r,s,n,i)}return r})}async getExpressionValues(e,t,s,i){const{arcadeUtils:a}=await Te(),r=a.hasGeometryOperations(t);r&&await a.enableGeometryOperations();const n=a.createFunction(t),o=s&&a.getViewInfo(s),u={fields:this.fieldsIndex.fields};return e.map(l=>{const h={attributes:this.featureAdapter.getAttributes(l),layer:u,geometry:r?{...G(i.geometryType,i.hasZ,i.hasM,this.featureAdapter.getGeometry(l)),spatialReference:s==null?void 0:s.spatialReference}:null},c=a.createExecContext(h,o);return a.executeFunction(n,c)})}validateItem(e,t){var s,i;return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:P(t,this.fieldsIndex)}),((i=(s=this._fieldDataCache.get(t))==null?void 0:s.clause)==null?void 0:i.testFeature(e,this.featureAdapter))??!1}validateItems(e,t){var s,i;return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:P(t,this.fieldsIndex)}),((i=(s=this._fieldDataCache.get(t))==null?void 0:s.clause)==null?void 0:i.testSet(e,this.featureAdapter))??!1}_processAttributesForOutFields(e){const t=this.outFields;if(!t||!t.length)return this.featureAdapter.getAttributes(e);const s={};for(const i of t){const{alias:a,clause:r}=this._fieldDataCache.get(i);s[a]=r?r.calculateValue(e,this.featureAdapter):this.featureAdapter.getAttribute(e,a)}return s}_processAttributesForDistinctValues(e){if(e==null||!this.returnDistinctValues)return e;const t=this.outFields,s=[];if(t)for(const r of t){const{alias:n}=this._fieldDataCache.get(r);s.push(e[n])}else for(const r in e)s.push(e[r]);const i=`${(t||["*"]).join(",")}=${s.join(",")}`;let a=this._returnDistinctMap.get(i)||0;return this._returnDistinctMap.set(i,++a),a>1?null:e}}function Ft(d,e,t){return{objectId:d,target:e,distance:t,type:"vertex"}}function wt(d,e,t,s,i,a=!1){return{objectId:d,target:e,distance:t,type:"edge",start:s,end:i,draped:a}}class R{constructor(e,t,s){this.items=e,this.query=t,this.geometryType=s.geometryType,this.hasM=s.hasM,this.hasZ=s.hasZ,this.fieldsIndex=s.fieldsIndex,this.objectIdField=s.objectIdField,this.spatialReference=s.spatialReference,this.featureAdapter=s.featureAdapter}get size(){return this.items.length}createQueryResponseForCount(){const e=new Z(this.query,this.featureAdapter,this.fieldsIndex);if(!this.query.outStatistics)return e.countDistinctValues(this.items);const{groupByFieldsForStatistics:t,having:s,outStatistics:i}=this.query;if(!(t==null?void 0:t.length))return 1;const r=new Map,n=new Map,o=new Set;for(const u of i){const{statisticType:l}=u,h=l!=="exceedslimit"?u.onStatisticField:void 0;if(!n.has(h)){const m=[];for(const p of t){const f=this._getAttributeValues(e,p,r);m.push(f)}n.set(h,this._calculateUniqueValues(m,e.returnDistinctValues))}const c=n.get(h);for(const m in c){const{data:p,items:f}=c[m],F=p.join(",");s&&!e.validateItems(f,s)||o.add(F)}}return o.size}async createQueryResponse(){let e;if(this.query.outStatistics?e=this.query.outStatistics.some(t=>t.statisticType==="exceedslimit")?this._createExceedsLimitQueryResponse(this.query):await this._createStatisticsQueryResponse(this.query):e=this._createFeatureQueryResponse(this.query),this.query.returnQueryGeometry){const t=this.query.geometry;X(this.query.outSR)&&!E(t.spatialReference,this.query.outSR)?e.queryGeometry=j({spatialReference:this.query.outSR,...C(t,t.spatialReference,this.query.outSR)}):e.queryGeometry=j({spatialReference:this.query.outSR,...t})}return e}createSnappingResponse(e,t){const s=this.featureAdapter,i=Ie(this.hasZ,this.hasM),{point:a,mode:r}=e,n=typeof e.distance=="number"?e.distance:e.distance.x,o=typeof e.distance=="number"?e.distance:e.distance.y,u={candidates:[]},l=this.geometryType==="esriGeometryPolygon",h=this._getPointCreator(r,this.spatialReference,t),c=new Re(null,0),m=new Re(null,0),p={x:0,y:0,z:0};for(const f of this.items){const F=s.getGeometry(f);if(F==null)continue;const{coords:x,lengths:S}=F;if(c.coords=x,m.coords=x,e.returnEdge){let w=0;for(let y=0;y<S.length;y++){const g=S[y];for(let _=0;_<g;_++,w+=i){const I=c;if(I.coordsIndex=w,_!==g-1){const v=m;v.coordsIndex=w+i;const z=p;St(p,a,I,v);const T=(a.x-z.x)/n,A=(a.y-z.y)/o,$=T*T+A*A;$<=1&&u.candidates.push(wt(s.getObjectId(f),h(z),Math.sqrt($),h(I),h(v)))}}}}if(e.returnVertex){const w=l?x.length-i:x.length;for(let y=0;y<w;y+=i){const g=c;g.coordsIndex=y;const _=(a.x-g.x)/n,I=(a.y-g.y)/o,v=_*_+I*I;v<=1&&u.candidates.push(Ft(s.getObjectId(f),h(g),Math.sqrt(v)))}}}return u.candidates.sort((f,F)=>f.distance-F.distance),u}_getPointCreator(e,t,s){const i=s==null||E(t,s)?n=>n:n=>C(n,t,s),{hasZ:a}=this,r=0;return e==="3d"?a?({x:n,y:o,z:u})=>i({x:n,y:o,z:u}):({x:n,y:o})=>i({x:n,y:o,z:r}):({x:n,y:o})=>i({x:n,y:o})}async createSummaryStatisticsResponse(e){const{field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,minValue:n,maxValue:o,scale:u}=e,l=this.fieldsIndex.isDateField(t),h=await this._getDataValues({field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,scale:u}),c=rt({normalizationType:a,normalizationField:i,minValue:n,maxValue:o}),m=this.fieldsIndex.get(t),p={value:.5,fieldType:m==null?void 0:m.type},f=re(m)?Fe({values:h,supportsNullCount:c,percentileParams:p}):we({values:h,minValue:n,maxValue:o,useSampleStdDev:!a,supportsNullCount:c,percentileParams:p});return nt(f,l)}async createUniqueValuesResponse(e){const{field:t,valueExpression:s,domains:i,returnAllCodedValues:a,scale:r}=e,n=await this._getDataValues({field:t,field2:e.field2,field3:e.field3,fieldDelimiter:e.fieldDelimiter,valueExpression:s,scale:r}),o=ot(n);return lt(o,i,a,e.fieldDelimiter)}async createClassBreaksResponse(e){const{field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:o,minValue:u,maxValue:l,numClasses:h,scale:c}=e,m=await this._getDataValues({field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,scale:c}),p=ut(m,{field:t,normalizationField:i,normalizationType:a,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:o,minValue:u,maxValue:l,numClasses:h});return ct(p,n)}async createHistogramResponse(e){const{field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:o,minValue:u,maxValue:l,numBins:h,scale:c}=e,m=await this._getDataValues({field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,scale:c});return ht(m,{field:t,normalizationField:i,normalizationType:a,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:o,minValue:u,maxValue:l,numBins:h})}_sortFeatures(e,t,s){if(e.length>1&&t&&t.length)for(const i of t.reverse()){const a=i.split(" "),r=a[0],n=this.fieldsIndex.get(r),o=!!a[1]&&a[1].toLowerCase()==="desc",u=dt(n==null?void 0:n.type,o);e.sort((l,h)=>{const c=s(l,r,n),m=s(h,r,n);return u(c,m)})}}_createFeatureQueryResponse(e){const t=this.items,{geometryType:s,hasM:i,hasZ:a,objectIdField:r,spatialReference:n}=this,{outFields:o,outSR:u,quantizationParameters:l,resultRecordCount:h,resultOffset:c,returnZ:m,returnM:p}=e,f=h!=null&&t.length>(c||0)+h,F=o&&(o.includes("*")?[...this.fieldsIndex.fields]:o.map(x=>this.fieldsIndex.get(x)));return{exceededTransferLimit:f,features:this._createFeatures(e,t),fields:F,geometryType:s,hasM:i&&p,hasZ:a&&m,objectIdFieldName:r,spatialReference:j(u||n),transform:l&&pe(l)||null}}_createFeatures(e,t){const s=new Z(e,this.featureAdapter,this.fieldsIndex),{hasM:i,hasZ:a}=this,{orderByFields:r,quantizationParameters:n,returnGeometry:o,returnCentroid:u,maxAllowableOffset:l,resultOffset:h,resultRecordCount:c,returnZ:m=!1,returnM:p=!1}=e,f=a&&m,F=i&&p;let x=[],S=0;const w=[...t];if(this._sortFeatures(w,r,(g,_,I)=>s.getFieldValue(g,_,I)),o||u){const g=pe(n)??void 0;if(o&&!u)for(const _ of w)x[S++]={attributes:s.getAttributes(_),geometry:G(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(_),l,g,f,F)};else if(!o&&u)for(const _ of w)x[S++]={attributes:s.getAttributes(_),centroid:ye(this,this.featureAdapter.getCentroid(_,this),g)};else for(const _ of w)x[S++]={attributes:s.getAttributes(_),centroid:ye(this,this.featureAdapter.getCentroid(_,this),g),geometry:G(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(_),l,g,f,F)}}else for(const g of w){const _=s.getAttributes(g);_&&(x[S++]={attributes:_})}const y=h||0;if(c!=null){const g=y+c;x=x.slice(y,Math.min(x.length,g))}return x}_createExceedsLimitQueryResponse(e){let t=!1,s=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY;for(const r of e.outStatistics??[])if(r.statisticType==="exceedslimit"){s=r.maxPointCount!=null?r.maxPointCount:Number.POSITIVE_INFINITY,i=r.maxRecordCount!=null?r.maxRecordCount:Number.POSITIVE_INFINITY,a=r.maxVertexCount!=null?r.maxVertexCount:Number.POSITIVE_INFINITY;break}if(this.geometryType==="esriGeometryPoint")t=this.items.length>s;else if(this.items.length>i)t=!0;else{const r=Ie(this.hasZ,this.hasM),n=this.featureAdapter;t=this.items.reduce((o,u)=>{const l=n.getGeometry(u);return o+(l!=null&&l.coords.length||0)},0)/r>a}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(t)}}]}}async _createStatisticsQueryResponse(e){const t={attributes:{}},s=[],i=new Map,a=new Map,r=new Map,n=new Map,o=new Z(e,this.featureAdapter,this.fieldsIndex),u=e.outStatistics,{groupByFieldsForStatistics:l,having:h,orderByFields:c}=e,m=l&&l.length,p=!!m,f=p?l[0]:null,F=p&&!this.fieldsIndex.get(f);for(const S of u??[]){const{outStatisticFieldName:w,statisticType:y}=S,g=S,_=y!=="exceedslimit"?S.onStatisticField:void 0,I=y==="percentile_disc"||y==="percentile_cont",v=y==="EnvelopeAggregate"||y==="CentroidAggregate"||y==="ConvexHullAggregate",z=p&&m===1&&(_===f||F)&&y==="count";if(p){if(!r.has(_)){const A=[];for(const $ of l){const B=this._getAttributeValues(o,$,i);A.push(B)}r.set(_,this._calculateUniqueValues(A,!v&&o.returnDistinctValues))}const T=r.get(_);for(const A in T){const{count:$,data:B,items:se,itemPositions:ze}=T[A],ie=B.join(",");if(!h||o.validateItems(se,h)){const D=n.get(ie)||{attributes:{}};if(v){D.aggregateGeometries||(D.aggregateGeometries={});const{aggregateGeometries:V,outStatisticFieldName:N}=await this._getAggregateGeometry(g,se);D.aggregateGeometries[N]=V}else{let V=null;if(z)V=$;else{const N=this._getAttributeValues(o,_,i),ae=ze.map(qe=>N[qe]);V=I&&"statisticParameters"in g?this._getPercentileValue(g,ae):this._getStatisticValue(g,ae,null,o.returnDistinctValues)}D.attributes[w]=V}let Ce=0;l.forEach((V,N)=>D.attributes[this.fieldsIndex.get(V)?V:"EXPR_"+ ++Ce]=B[N]),n.set(ie,D)}}}else if(v){t.aggregateGeometries||(t.aggregateGeometries={});const{aggregateGeometries:T,outStatisticFieldName:A}=await this._getAggregateGeometry(g,this.items);t.aggregateGeometries[A]=T}else{const T=this._getAttributeValues(o,_,i);t.attributes[w]=I&&"statisticParameters"in g?this._getPercentileValue(g,T):this._getStatisticValue(g,T,a,o.returnDistinctValues)}s.push({name:w,alias:w,type:"esriFieldTypeDouble"})}const x=p?Array.from(n.values()):[t];return this._sortFeatures(x,c,(S,w)=>S.attributes[w]),{fields:s,features:x}}async _getAggregateGeometry(e,t){const{convexHull:s,union:i}=await $e(()=>import("./geometryEngineJSON-47a30ca0.js"),["./geometryEngineJSON-47a30ca0.js","./geometryEngineBase-52d0d44e.js","./index-e8c6bcc0.js","./index-0da2eac5.css","./geometryEngineJSON-4fdef8db.js","./json-48e3ea08.js"],import.meta.url),{statisticType:a,outStatisticFieldName:r}=e,{featureAdapter:n,spatialReference:o,geometryType:u,hasZ:l,hasM:h}=this,c=t.map(f=>G(u,l,h,n.getGeometry(f))),m=s(o,c,!0)[0],p={aggregateGeometries:null,outStatisticFieldName:null};if(a==="EnvelopeAggregate"){const f=m?De(m):ne(i(o,c));p.aggregateGeometries={...f,spatialReference:o},p.outStatisticFieldName=r||"extent"}else if(a==="CentroidAggregate"){const f=m?Me(m):Pe(ne(i(o,c)));p.aggregateGeometries={x:f[0],y:f[1],spatialReference:o},p.outStatisticFieldName=r||"centroid"}else a==="ConvexHullAggregate"&&(p.aggregateGeometries=m,p.outStatisticFieldName=r||"convexHull");return p}_getStatisticValue(e,t,s,i){const{onStatisticField:a,statisticType:r}=e;let n=null;return n=s!=null&&s.has(a)?s.get(a):re(this.fieldsIndex.get(a))?Fe({values:t,returnDistinct:i}):we({values:i?[...new Set(t)]:t,minValue:null,maxValue:null,useSampleStdDev:!0}),s&&s.set(a,n),n[r==="var"?"variance":r]}_getPercentileValue(e,t){const{onStatisticField:s,statisticParameters:i,statisticType:a}=e,{value:r,orderBy:n}=i,o=this.fieldsIndex.get(s);return ft(t,{value:r,orderBy:n,fieldType:o==null?void 0:o.type,isDiscrete:a==="percentile_disc"})}_getAttributeValues(e,t,s){if(s.has(t))return s.get(t);const i=this.fieldsIndex.get(t),a=this.items.map(r=>e.getFieldValue(r,t,i));return s.set(t,a),a}_calculateUniqueValues(e,t){const s={},i=this.items,a=i.length;for(let r=0;r<a;r++){const n=i[r],o=[];for(const l of e)o.push(l[r]);const u=o.join(",");s[u]==null?s[u]={count:1,data:o,items:[n],itemPositions:[r]}:(t||s[u].count++,s[u].items.push(n),s[u].itemPositions.push(r))}return s}async _getDataValues(e){const t=new Z(this.query,this.featureAdapter,this.fieldsIndex),{valueExpression:s,scale:i}=e,a=s?{viewingMode:"map",scale:i,spatialReference:this.query.outSR||this.spatialReference}:null;return s?t.getExpressionValues(this.items,s,a,{geometryType:this.geometryType,hasZ:this.hasZ,hasM:this.hasM}):t.getDataValues(this.items,{field:e.field,field2:e.field2,field3:e.field3,fieldDelimiter:e.fieldDelimiter,normalizationField:e.normalizationField,normalizationType:e.normalizationType,normalizationTotal:e.normalizationTotal})}}function St(d,e,t,s){const i=s.x-t.x,a=s.y-t.y,r=i*i+a*a,n=(e.x-t.x)*i+(e.y-t.y)*a,o=Math.min(1,Math.max(0,n/r));d.x=t.x+i*o,d.y=t.y+a*o}function Ie(d,e){return d?e?4:3:e?3:2}class Re{constructor(e,t){this.coords=e,this.coordsIndex=t}get x(){return this.coords[this.coordsIndex]}get y(){return this.coords[this.coordsIndex+1]}get z(){return this.coords[this.coordsIndex+2]}}function It(d){return d!=null&&d.every(e=>e.statisticType!=="exceedslimit")}const Q="feature-store:unsupported-query",Rt=new Je(2e6);let Tt=0;class Pt{constructor(e){this._geometryQueryCache=null,this._changeHandle=null,this.capabilities={query:tt},this.geometryType=e.geometryType,this.hasM=!!e.hasM,this.hasZ=!!e.hasZ,this.objectIdField=e.objectIdField,this.spatialReference=e.spatialReference,this.definitionExpression=e.definitionExpression,this.featureStore=e.featureStore,this.aggregateAdapter=e.aggregateAdapter,this._changeHandle=this.featureStore.events.on("changed",()=>this.clearCache()),this.timeInfo=e.timeInfo,e.cacheSpatialQueries&&(this._geometryQueryCache=new We(Tt+++"$$",Rt)),this.fieldsIndex=new mt(e.fields),e.scheduler&&e.priority&&(this._frameTask=e.scheduler.registerTask(e.priority))}destroy(){this._frameTask=oe(this._frameTask),this.clearCache(),le(this._geometryQueryCache),this._changeHandle=oe(this._changeHandle),le(this.fieldsIndex)}get featureAdapter(){return this.featureStore.featureAdapter}clearCache(){var e;(e=this._geometryQueryCache)==null||e.clear(),this._allFeaturesPromise=null,this._timeExtentPromise=null}async executeQuery(e,t){try{return(await this._executeQuery(e,{},t)).createQueryResponse()}catch(s){if(s!==M)throw s;return new R([],e,this).createQueryResponse()}}async executeQueryForCount(e={},t){try{return(await this._executeQuery(e,{returnGeometry:!1,returnCentroid:!1,outSR:null},t)).createQueryResponseForCount()}catch(s){if(s!==M)throw s;return 0}}async executeQueryForExtent(e,t){const s=e.outSR;try{const i=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},t),a=i.size;return a?{count:a,extent:await this._getBounds(i.items,i.spatialReference,s||this.spatialReference)}:{count:0,extent:null}}catch(i){if(i===M)return{count:0,extent:null};throw i}}async executeQueryForIds(e,t){return this.executeQueryForIdSet(e,t).then(s=>Array.from(s))}async executeQueryForIdSet(e,t){try{const s=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},t),i=s.items,a=new Set;return await this._reschedule(()=>{for(const r of i)a.add(s.featureAdapter.getObjectId(r))},t),a}catch(s){if(s===M)return new Set;throw s}}async executeQueryForSnapping(e,t){const{point:s,distance:i,returnEdge:a,returnVertex:r}=e;if(!a&&!r)return{candidates:[]};const n=await this._reschedule(()=>this._checkQuerySupport(e.query),t),o=!E(s.spatialReference,this.spatialReference);o&&await J(s.spatialReference,this.spatialReference);const u=typeof i=="number"?i:i.x,l=typeof i=="number"?i:i.y,h={xmin:s.x-u,xmax:s.x+u,ymin:s.y-l,ymax:s.y+l,spatialReference:s.spatialReference},c=o?C(h,this.spatialReference):h;if(!c)return{candidates:[]};const m=(await me(ue(s),null,{signal:t}))[0],p=(await me(ue(c),null,{signal:t}))[0];if(m==null||p==null)return{candidates:[]};const f=new R(await this._reschedule(()=>this._searchFeatures(this._getQueryBBoxes(p.toJSON())),t),n,this);await this._reschedule(()=>this._executeObjectIdsQuery(f),t),await this._reschedule(()=>this._executeTimeQuery(f),t),await this._reschedule(()=>this._executeAttributesQuery(f),t);const F=m.toJSON(),x=o?C(F,this.spatialReference):F,S=o?Math.max(c.xmax-c.xmin,c.ymax-c.ymin)/2:i;return f.createSnappingResponse({...e,point:x,distance:S},s.spatialReference)}async executeQueryForLatestObservations(e,t){if(!this.timeInfo||!this.timeInfo.trackIdField)throw new b(Q,"Missing timeInfo or timeInfo.trackIdField",{query:e,timeInfo:this.timeInfo});try{const s=await this._executeQuery(e,{},t);return await this._reschedule(()=>this._filterLatest(s),t),s.createQueryResponse()}catch(s){if(s!==M)throw s;return new R([],e,this).createQueryResponse()}}async executeQueryForSummaryStatistics(e={},t,s){const{field:i,normalizationField:a,valueExpression:r}=t;return(await this._getQueryEngineResultForStats(e,{field:i,normalizationField:a,valueExpression:r},s)).createSummaryStatisticsResponse(t)}async executeQueryForUniqueValues(e={},t,s){const{field:i,field2:a,field3:r,valueExpression:n}=t;return(await this._getQueryEngineResultForStats(e,{field:i,field2:a,field3:r,valueExpression:n},s)).createUniqueValuesResponse(t)}async executeQueryForClassBreaks(e={},t,s){const{field:i,normalizationField:a,valueExpression:r}=t;return(await this._getQueryEngineResultForStats(e,{field:i,normalizationField:a,valueExpression:r},s)).createClassBreaksResponse(t)}async executeQueryForHistogram(e={},t,s){const{field:i,normalizationField:a,valueExpression:r}=t;return(await this._getQueryEngineResultForStats(e,{field:i,normalizationField:a,valueExpression:r},s)).createHistogramResponse(t)}async fetchRecomputedExtents(e){const[t,s]=await Promise.all(["getFullExtent"in this.featureStore&&this.featureStore.getFullExtent?Promise.resolve(this.featureStore.getFullExtent(this.spatialReference)):this._getBounds(await this._getAllFeatures(),this.spatialReference,this.spatialReference),this._timeExtentPromise!=null?this._timeExtentPromise:this._timeExtentPromise=st(this.timeInfo,this.featureStore)]);return Ne(e),{fullExtent:t,timeExtent:s}}async _getBounds(e,t,s){const i=Ge(je(),Ue);await this.featureStore.forEachBounds(e,n=>Oe(i,n));const a={xmin:i[0],ymin:i[1],xmax:i[3],ymax:i[4],spatialReference:j(this.spatialReference)};this.hasZ&&isFinite(i[2])&&isFinite(i[5])&&(a.zmin=i[2],a.zmax=i[5]);const r=C(a,t,s);if(r.spatialReference=j(s),r.xmax-r.xmin==0){const n=Y(r.spatialReference);r.xmin-=n,r.xmax+=n}if(r.ymax-r.ymin==0){const n=Y(r.spatialReference);r.ymin-=n,r.ymax+=n}if(this.hasZ&&r.zmin!=null&&r.zmax!=null&&r.zmax-r.zmin==0){const n=Y(r.spatialReference);r.zmin-=n,r.zmax+=n}return r}async _schedule(e,t){return this._frameTask!=null?this._frameTask.schedule(e,t):e(ce)}async _reschedule(e,t){return this._frameTask!=null?this._frameTask.reschedule(e,t):e(ce)}async _getAllFeaturesQueryEngineResult(e){return new R(await this._getAllFeatures(),e,this)}async _getAllFeatures(){if(this._allFeaturesPromise==null){const s=[];this._allFeaturesPromise=(async()=>{await this.featureStore.forEach(i=>s.push(i))})().then(()=>s)}const e=this._allFeaturesPromise,t=await e;return e===this._allFeaturesPromise?t.slice():this._getAllFeatures()}async _executeQuery(e,t,s){e=he(e),e=await this._schedule(()=>ge(e,this.definitionExpression,this.spatialReference),s),e=await this._reschedule(()=>this._checkQuerySupport(e),s),e={...e,...t};const i=await this._reschedule(()=>this._executeSceneFilterQuery(e,s),s),a=await this._reschedule(()=>this._executeGeometryQuery(e,i,s),s);return await this._reschedule(()=>this._executeAggregateIdsQuery(a),s),await this._reschedule(()=>this._executeObjectIdsQuery(a),s),await this._reschedule(()=>this._executeTimeQuery(a),s),await this._reschedule(()=>this._executeAttributesQuery(a),s),a}async _executeSceneFilterQuery(e,t){if(e.sceneFilter==null)return null;const{outSR:s,returnGeometry:i,returnCentroid:a}=e,r=this.featureStore.featureSpatialReference,n=e.sceneFilter.geometry,o=r==null||E(r,n.spatialReference)?n:C(n,r);if(!o)return null;const u=i||a,l=X(s)&&!E(this.spatialReference,s)&&u?async f=>this._project(f,s):f=>f,h=this.featureAdapter,c=await this._reschedule(()=>this._searchFeatures(this._getQueryBBoxes(o)),t);if(e.sceneFilter.spatialRelationship==="disjoint"){if(!c.length)return null;const f=new Set;for(const S of c)f.add(h.getObjectId(S));const F=await this._reschedule(()=>this._getAllFeatures(),t),x=await this._reschedule(async()=>{const S=await k("esriSpatialRelDisjoint",o,this.geometryType,this.hasZ,this.hasM),w=g=>!f.has(h.getObjectId(g))||S(h.getGeometry(g)),y=await this._runSpatialFilter(F,w,t);return new R(y,e,this)},t);return l(x)}if(!c.length)return new R([],e,this);if(this._canExecuteSinglePass(o,e))return l(new R(c,e,this));const m=await k("esriSpatialRelContains",o,this.geometryType,this.hasZ,this.hasM),p=await this._runSpatialFilter(c,f=>m(h.getGeometry(f)),t);return l(new R(p,e,this))}async _executeGeometryQuery(e,t,s){if(t!=null&&t.items.length===0)return t;e=t!=null?t.query:e;const{geometry:i,outSR:a,spatialRel:r,returnGeometry:n,returnCentroid:o}=e,u=this.featureStore.featureSpatialReference,l=!i||u==null||E(u,i.spatialReference)?i:C(i,u),h=n||o,c=X(a)&&!E(this.spatialReference,a),m=this._geometryQueryCache&&t==null?JSON.stringify(c&&h?{originalFilterGeometry:i,spatialRelationship:r,outSpatialReference:a}:{originalFilterGeometry:i,spatialRelationship:r}):null,p=m?this._geometryQueryCache.get(m):null;if(p!=null)return new R(p,e,this);const f=async y=>(c&&h&&await this._project(y,a),m&&this._geometryQueryCache.put(m,y.items,y.items.length+1),y);if(!l)return f(t??await this._getAllFeaturesQueryEngineResult(e));const F=this.featureAdapter;let x=await this._reschedule(()=>this._searchFeatures(this._getQueryBBoxes(i)),s);if(r==="esriSpatialRelDisjoint"){if(!x.length)return f(t??await this._getAllFeaturesQueryEngineResult(e));const y=new Set;for(const I of x)y.add(F.getObjectId(I));const g=t!=null?t.items:await this._reschedule(()=>this._getAllFeatures(),s),_=await this._reschedule(async()=>{const I=await k(r,l,this.geometryType,this.hasZ,this.hasM),v=T=>!y.has(F.getObjectId(T))||I(F.getGeometry(T)),z=await this._runSpatialFilter(g,v,s);return new R(z,e,this)},s);return f(_)}if(t!=null){const y=new Ye;x=x.filter(g=>Be(t.items,g,t.items.length,y)>=0)}if(!x.length){const y=new R([],e,this);return m&&this._geometryQueryCache.put(m,y.items,1),y}if(this._canExecuteSinglePass(l,e))return f(new R(x,e,this));const S=await k(r,l,this.geometryType,this.hasZ,this.hasM),w=await this._runSpatialFilter(x,y=>S(F.getGeometry(y)),s);return f(new R(w,e,this))}_executeAggregateIdsQuery(e){if(e.items.length===0||!e.query.aggregateIds||!e.query.aggregateIds.length||this.aggregateAdapter==null)return;const t=new Set;for(const i of e.query.aggregateIds)this.aggregateAdapter.getFeatureObjectIds(i).forEach(a=>t.add(a));const s=this.featureAdapter.getObjectId;e.items=e.items.filter(i=>t.has(s(i)))}_executeObjectIdsQuery(e){if(e.items.length===0||!e.query.objectIds||!e.query.objectIds.length)return;const t=new Set(e.query.objectIds),s=this.featureAdapter.getObjectId;e.items=e.items.filter(i=>t.has(s(i)))}_executeTimeQuery(e){if(e.items.length===0)return;const t=it(this.timeInfo,e.query.timeExtent,this.featureAdapter);t!=null&&(e.items=e.items.filter(t))}_executeAttributesQuery(e){if(e.items.length===0)return;const t=P(e.query.where,this.fieldsIndex);if(t){if(!t.isStandardized)throw new TypeError("Where clause is not standardized");e.items=e.items.filter(s=>t.testFeature(s,this.featureAdapter))}}async _runSpatialFilter(e,t,s){if(!t)return e;if(this._frameTask==null)return e.filter(n=>t(n));let i=0;const a=new Array,r=async n=>{for(;i<e.length;){const o=e[i++];t(o)&&(a.push(o),n.madeProgress()),n.done&&await this._reschedule(u=>r(u),s)}};return this._reschedule(n=>r(n),s).then(()=>a)}_filterLatest(e){const{trackIdField:t,startTimeField:s,endTimeField:i}=this.timeInfo,a=i||s,r=new Map,n=this.featureAdapter.getAttribute;for(const o of e.items){const u=n(o,t),l=n(o,a),h=r.get(u);(!h||l>n(h,a))&&r.set(u,o)}e.items=Array.from(r.values())}_canExecuteSinglePass(e,t){const{spatialRel:s}=t;return xe(e)&&(s==="esriSpatialRelEnvelopeIntersects"||this.geometryType==="esriGeometryPoint"&&(s==="esriSpatialRelIntersects"||s==="esriSpatialRelContains"||s==="esriSpatialRelWithin"))}async _project(e,t){if(!t||E(this.spatialReference,t))return e;const s=this.featureAdapter,i=await et(e.items.map(a=>G(this.geometryType,this.hasZ,this.hasM,s.getGeometry(a))),this.spatialReference,t);return e.items=i.map((a,r)=>s.cloneWithGeometry(e.items[r],Xe(a,this.hasZ,this.hasM))),e}_getQueryBBoxes(e){if(xe(e)){if(ke(e))return[de(e.xmin,e.ymin,e.xmax,e.ymax)];if(Ze(e))return e.rings.map(t=>de(Math.min(t[0][0],t[2][0]),Math.min(t[0][1],t[2][1]),Math.max(t[0][0],t[2][0]),Math.max(t[0][1],t[2][1])))}return[Le(He(),e)]}async _searchFeatures(e){const t=new Set;await Promise.all(e.map(i=>this.featureStore.forEachInBounds(i,a=>t.add(a))));const s=Array.from(t.values());return t.clear(),s}async _checkStatisticsSupport(e,t){if((e.distance??0)<0||e.geometryPrecision!=null||e.multipatchOption||e.pixelSize||e.relationParam||e.text||e.outStatistics||e.groupByFieldsForStatistics||e.having||e.orderByFields)throw new b(Q,"Unsupported query options",{query:e});return this._checkAttributesQuerySupport(e),Promise.all([this._checkStatisticsParamsSupport(t,e),_e(e,this.geometryType,this.spatialReference),J(this.spatialReference,e.outSR)]).then(()=>e)}async _checkStatisticsParamsSupport(e,t){let s=[];if(e.valueExpression){const{arcadeUtils:i}=await Te();s=i.extractFieldNames(e.valueExpression)}if(e.field&&s.push(e.field),e.field2&&s.push(e.field2),e.field3&&s.push(e.field3),e.normalizationField&&s.push(e.normalizationField),!s.length&&!e.valueExpression)throw new b(Q,"field or valueExpression is required",{params:e});q(this.fieldsIndex,s,{errorMessage:"Cannot calculate statistics for missing fields",query:t}),ee(this.fieldsIndex,s,{expressionName:"statistics",query:t})}async _checkQuerySupport(e){if((e.distance??0)<0||e.geometryPrecision!=null||e.multipatchOption||e.pixelSize||e.relationParam||e.text)throw new b(Q,"Unsupported query options",{query:e});return this._checkAttributesQuerySupport(e),this._checkStatisticsQuerySupport(e),Promise.all([_e(e,this.geometryType,this.spatialReference),J(this.spatialReference,e.outSR)]).then(()=>e)}_checkAttributesQuerySupport(e){const{outFields:t,orderByFields:s,returnDistinctValues:i,outStatistics:a}=e,r=a?a.map(n=>n.outStatisticFieldName&&n.outStatisticFieldName.toLowerCase()).filter(Boolean):[];if(s&&s.length>0){const n=" asc",o=" desc",u=s.map(l=>{const h=l.toLowerCase();return h.includes(n)?h.split(n)[0]:h.includes(o)?h.split(o)[0]:l}).filter(l=>!r.includes(l));q(this.fieldsIndex,u,{expressionName:"orderByFields",query:e})}if(t&&t.length>0)q(this.fieldsIndex,t,{expressionName:"outFields",query:e});else if(i)throw new b(Q,"outFields should be specified for returnDistinctValues",{query:e});gt(this.fieldsIndex,e.where,e)}_checkStatisticsQuerySupport(e){const{outStatistics:t,groupByFieldsForStatistics:s,having:i}=e,a=s&&s.length,r=t&&t.length;if(i){if(!a||!r)throw new b(Q,"outStatistics and groupByFieldsForStatistics should be specified with having",{query:e});xt(this.fieldsIndex,i,t,e)}if(r){if(!It(t))return;const n=t.map(l=>l.onStatisticField).filter(Boolean);q(this.fieldsIndex,n,{expressionName:"onStatisticFields",query:e}),a&&q(this.fieldsIndex,s,{expressionName:"groupByFieldsForStatistics",query:e});const o=new Set([...L.jsonValues,...H.jsonValues]),u=new Intl.ListFormat("en-US",{type:"conjunction"}).format([...L.apiValues,...H.apiValues]);for(const l of t){const{onStatisticField:h,statisticType:c}=l;if((c==="percentile_disc"||c==="percentile_cont")&&"statisticParameters"in l){const{statisticParameters:m}=l;if(!m)throw new b(Q,"statisticParameters should be set for percentile type",{definition:l,query:e})}else if(c!=="count"&&c!=="min"&&c!=="max"&&h&&Ee(h,this.fieldsIndex,o))throw new b(Q,`outStatistics with '${c}' statistic type, only supports ${u} field types`,{definition:l,query:e})}}}async _getQueryEngineResultForStats(e,t,s){e=he(e);try{e=await this._schedule(()=>ge(e,this.definitionExpression,this.spatialReference),s),e=await this._reschedule(()=>this._checkStatisticsSupport(e,t),s);const i=await this._reschedule(()=>this._executeSceneFilterQuery(e,s),s),a=await this._reschedule(()=>this._executeGeometryQuery(e,i,s),s);return await this._reschedule(()=>this._executeAggregateIdsQuery(a),s),await this._reschedule(()=>this._executeObjectIdsQuery(a),s),await this._reschedule(()=>this._executeTimeQuery(a),s),await this._reschedule(()=>this._executeAttributesQuery(a),s),a}catch(i){if(i!==M)throw i;return new R([],e,this)}}}export{Pt as e};
