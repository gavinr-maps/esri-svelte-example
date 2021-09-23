var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(t,s,i)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i,o=(e,t)=>{for(var s in t||(t={}))r.call(t,s)&&n(e,s,t[s]);if(i)for(var s of i(t))a.call(t,s)&&n(e,s,t[s]);return e};import{dH as u,w as l,q as c,aX as h,bs as d,r as f,bH as p,dI as m,dy as y,H as g,F as x,dJ as _,dK as w,dL as I,dM as b,cd as S,bf as F,dN as Q,dO as A,dP as R,cp as T,cQ as v,cs as C,dQ as P,aF as V,b0 as z,aG as E,aI as j,aA as O}from"./vendor.d0a39f0f.js";import{WhereClause as D}from"./WhereClause.1eaac7f4.js";import{g as M,M as N,s as k,f as G}from"./quantizationUtils.2d4b616a.js";import{t as q}from"./QueryEngineCapabilities.47963c2d.js";import{s as B,o as Z,i as L,r as U,u as H}from"./utils.f10afb6d.js";import{z as $,n as J,J as Y,O as W,t as X,P as K,U as ee,v as te,I as se,a as ie}from"./spatialQuerySupport.2755696c.js";const re=new class{constructor(e,t){this._cache=new u(e),this._invalidCache=new u(t)}get(e,t){const s=`${t.uid}:${e}`,i=this._cache.get(s);if(i)return i;if(void 0!==this._invalidCache.get(s))return null;try{const i=D.create(e,t);return this._cache.put(s,i),i}catch{return this._invalidCache.put(s,null),null}}}(50,500),ae="feature-store:unsupported-query",ne=" as ",oe=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function ue(e,t){return e?re.get(e,t):null}function le(e,t,s,i=!0){const r=[];for(const n of t)if("*"!==n&&!e.has(n))if(i){const t=ce(n);try{const s=ue(t,e);if(!s)throw new l(ae,"invalid SQL expression",{where:t});if(!s.isStandardized)throw new l(ae,"expression is not standard",{clause:s});le(e,s.fieldNames,"expression contains missing fields")}catch(a){const e=a&&a.details;if(e&&(e.clause||e.where))throw a;e&&e.missingFields?r.push(...e.missingFields):r.push(n)}}else r.push(n);if(r.length)throw new l(ae,s,{missingFields:r})}function ce(e){return e.split(ne)[0]}function he(e,t){const s=t.get(e);return!!s&&!oe.has(s.type)}class de{constructor(e,t,s){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=e.returnDistinctValues,this.fieldsIndex=s,this.featureAdapter=t;const i=e.outFields;if(i&&-1===i.indexOf("*")){this.outFields=i;let e=0;for(const t of i){const i=ce(t),r=this.fieldsIndex.get(i),a=r?null:ue(i,s),n=r?r.name:t.split(ne)[1]||"FIELD_EXP_"+e++;this._fieldDataCache.set(t,{alias:n,clause:a})}}}countDistinctValues(e){return this.returnDistinctValues?(e.forEach((e=>this.getAttributes(e))),this._returnDistinctMap.size):e.length}getAttributes(e){const t=this._processAttributesForOutFields(e);return this._processAttributesForDistinctValues(t)}getFieldValue(e,t,s){const i=s?s.name:t;let r=null;return this._fieldDataCache.has(i)?r=this._fieldDataCache.get(i).clause:s||(r=ue(t,this.fieldsIndex),this._fieldDataCache.set(i,{alias:i,clause:r})),s?this.featureAdapter.getAttribute(e,i):r.calculateValue(e,this.featureAdapter)}getNormalizedValue(e,t){const s=t.normalizationType,i=t.normalizationTotal;let r=this.getFieldValue(e,t.field,t.fieldInfo);if(s&&Number.isFinite(r)){const a=this.getFieldValue(e,t.normalizationField,t.normalizationFieldInfo);r=B(r,s,a,i)}return r}getExpressionValue(e,t,s){const i={attributes:this.featureAdapter.getAttributes(e)},r=s.createExecContext(i,t.viewInfo);return s.executeFunction(t.compiledFunc,r)}validateItem(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:ue(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testFeature(e,this.featureAdapter)}validateItems(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:ue(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testSet(e,this.featureAdapter)}_processAttributesForOutFields(e){const t=this.outFields;if(!t||!t.length)return this.featureAdapter.getAttributes(e);const s={};for(const i of t){const{alias:t,clause:r}=this._fieldDataCache.get(i);s[t]=r?r.calculateValue(e,this.featureAdapter):this.featureAdapter.getAttribute(e,t)}return s}_processAttributesForDistinctValues(e){if(c(e)||!this.returnDistinctValues)return e;const t=this.outFields,s=[];if(t)for(const a of t){const{alias:t}=this._fieldDataCache.get(a);s.push(e[t])}else for(const a in e)s.push(e[a]);const i=`${(t||["*"]).join(",")}=${s.join(",")}`;let r=this._returnDistinctMap.get(i)||0;return this._returnDistinctMap.set(i,++r),r>1?null:e}}function fe(e){return e.substr(24,12)+e.substr(19,4)+e.substr(16,2)+e.substr(14,2)+e.substr(11,2)+e.substr(9,2)+e.substr(6,2)+e.substr(4,2)+e.substr(2,2)+e.substr(0,2)}function pe(e,t,s){return(s?e>t:e<t)?-1:(s?e<t:e>t)?1:0}function me(e,t,s){return s?t-e:e-t}function ye(e,t,s,i){if(s&&"esriFieldTypeDate"===s.type){const s=new Date(e).getTime(),r=new Date(t).getTime();if(!isNaN(s)&&!isNaN(r))return me(s,r,i)}if("number"==typeof e&&"number"==typeof t)return me(e,t,i);if("string"==typeof e&&"string"==typeof t){const r=e.toUpperCase(),a=t.toUpperCase();return!s||"esriFieldTypeGUID"!==s.type&&"esriFieldTypeGlobalID"!==s.type?pe(r,a,i):pe(fe(r),fe(a),i)}return i?1:-1}class ge{constructor(e,t,s){this.items=e,this.queryGeometry=t,this.definitionExpression=s.definitionExpression,this.geometryType=s.geometryType,this.hasM=s.hasM,this.hasZ=s.hasZ,this.objectIdField=s.objectIdField,this.spatialReference=s.spatialReference,this.fieldsIndex=s.fieldsIndex,this.timeInfo=s.timeInfo,this.featureAdapter=s.featureAdapter,this.aggregateAdapter=s.aggregateAdapter}get size(){return this.items.length}createQueryResponseForCount(e){const t=new de(e,this.featureAdapter,this.fieldsIndex);if(!e.outStatistics)return t.countDistinctValues(this.items);const{groupByFieldsForStatistics:s,having:i}=e;if(!(null==s?void 0:s.length))return 1;const r=new Map,a=new Map,n=new Set,o=e.outStatistics;for(const u of o){const{statisticType:e}=u,o="exceedslimit"!==e?u.onStatisticField:void 0;if(!a.has(o)){const e=[];for(const i of s){const s=this._getAttributeValues(t,i,r);e.push(s)}a.set(o,this._calculateUniqueValues(e,t.returnDistinctValues))}const l=a.get(o);for(const s in l){const{data:e,items:r}=l[s],a=e.join(",");i&&!t.validateItems(r,i)||n.add(a)}}return n.size}createQueryResponse(e){let t;return t=e.outStatistics?e.outStatistics.some((e=>"exceedslimit"===e.statisticType))?this._createExceedsLimitQueryResponse(e):this._createStatisticsQueryResponse(e):this._createFeatureQueryResponse(e),e.returnQueryGeometry&&(h(e.outSR)&&!d(this.queryGeometry.spatialReference,e.outSR)?t.queryGeometry=$(o({spatialReference:e.outSR},M(this.queryGeometry,this.queryGeometry.spatialReference,e.outSR))):t.queryGeometry=$(o({spatialReference:e.outSR},this.queryGeometry))),t}createSnappingResponse(e,t){const s=this.featureAdapter,i=function(e,t){return e?t?4:3:t?3:2}(this.hasZ,this.hasM),{x:r,y:a}=e.point,n="number"==typeof e.distance?e.distance:e.distance.x,o="number"==typeof e.distance?e.distance:e.distance.y,u={candidates:[]},l="esriGeometryPolygon"===this.geometryType,h=this.getPointCreator(e.point,this.spatialReference,t);for(const d of this.items){const t=s.getGeometry(d);if(c(t))continue;const{coords:f,lengths:p}=t;if(1&e.types){let e=0;for(let t=0;t<p.length;t++){const l=p[t];for(let t=0;t<l;t++,e+=i){const c=f[e],p=f[e+1];if(t!==l-1){const t=f[e+i],l=f[e+i+1],{x:m,y:y}=xe(r,a,c,p,t,l),g=(r-m)/n,x=(a-y)/o,_=g*g+x*x;_<=1&&u.candidates.push({type:"edge",objectId:s.getObjectId(d),distance:Math.sqrt(_),target:h(m,y),start:h(c,p),end:h(t,l)})}}}}if(2&e.types){const e=l?f.length-i:f.length;for(let t=0;t<e;t+=i){const e=f[t],i=f[t+1],l=(r-e)/n,c=(a-i)/o,p=l*l+c*c;p<=1&&u.candidates.push({type:"vertex",objectId:s.getObjectId(d),distance:Math.sqrt(p),target:h(e,i)})}}}return u.candidates.sort(((e,t)=>e.distance-t.distance)),u}getPointCreator(e,t,s){const i=f(s)&&!d(t,s)?e=>M(e,t,s):e=>e;return null!=e.z&&null!=e.m?(t,s)=>i({x:t,y:s,z:e.z,m:e.m}):null!=e.z?(t,s)=>i({x:t,y:s,z:e.z}):null!=e.m?(t,s)=>i({x:t,y:s,m:e.m}):(e,t)=>i({x:e,y:t})}executeAttributesQuery(e){const t=ue(e.where,this.fieldsIndex);if(!t)return Promise.resolve(this);if(t.isStandardized){let s=0;const i=[];for(const e of this.items)t.testFeature(e,this.featureAdapter)&&(i[s++]=e);const r=new ge(i,this.queryGeometry,this);return r.definitionExpression=e.where,Promise.resolve(r)}return Promise.reject(new TypeError("Where clause is not standardized"))}executeAggregateIdsQuery(e){if(!e.aggregateIds||!e.aggregateIds.length||c(this.aggregateAdapter))return Promise.resolve(this);const t=new Set;for(const i of e.aggregateIds)this.aggregateAdapter.getFeatureObjectIds(i).forEach((e=>t.add(e)));const s=this.featureAdapter.getObjectId;return Promise.resolve(new ge(this.items.filter((e=>t.has(s(e)))),this.queryGeometry,this))}executeObjectIdsQuery(e){if(!e.objectIds||!e.objectIds.length)return Promise.resolve(this);const t=new Set(e.objectIds),s=this.featureAdapter.getObjectId;return Promise.resolve(new ge(this.items.filter((e=>t.has(s(e)))),this.queryGeometry,this))}executeTimeQuery(e){const t=J(this.timeInfo,e.timeExtent,this.featureAdapter);if(!f(t))return Promise.resolve(this);const s=this.items.filter(t);return Promise.resolve(new ge(s,this.queryGeometry,this))}filterLatest(){const{trackIdField:e,startTimeField:t,endTimeField:s}=this.timeInfo,i=s||t,r=new Map,a=this.featureAdapter.getAttribute;for(const o of this.items){const t=a(o,e),s=a(o,i),n=r.get(t);(!n||s>a(n,i))&&r.set(t,o)}const n=Array.from(r.values());return Promise.resolve(new ge(n,this.queryGeometry,this))}async project(e){if(!e||d(this.spatialReference,e))return this;const t=this.featureAdapter,s=(await N(this.items.map((e=>Y(this.geometryType,this.hasZ,this.hasM,t.getGeometry(e)))),this.spatialReference,e)).map(((e,s)=>t.cloneWithGeometry(this.items[s],p(e,this.hasZ,this.hasM))));return new ge(s,this.queryGeometry,{definitionExpression:this.definitionExpression,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,objectIdField:this.objectIdField,spatialReference:e,fieldsIndex:this.fieldsIndex,timeInfo:this.timeInfo,featureAdapter:this.featureAdapter})}async createSummaryStatisticsResponse(e,t){const{field:s,normalizationField:i,normalizationType:r,normalizationTotal:a,minValue:n,maxValue:o}=t,u=new de(e,this.featureAdapter,this.fieldsIndex),l=this.fieldsIndex.isDateField(s),c=t.valueExpression?await this._getAttributeExpressionValues(u,t.valueExpression,t.viewInfoParams):this._getAttributeNormalizedValues(u,{field:s,normalizationField:i,normalizationType:r,normalizationTotal:a}),h=Z({normalizationType:r,normalizationField:i,minValue:n,maxValue:o}),d=m(this.fieldsIndex.get(s))?L({values:c,supportsNullCount:h}):U({values:c,minValue:n,maxValue:o,useSampleStdDev:!r,supportsNullCount:h});return H(d,l)}_sortFeatures(e,t,s){if(e.length>1&&t&&t.length)for(const i of t.reverse()){const t=i.split(" "),r=t[0],a=this.fieldsIndex.get(r),n=t[1]&&"desc"===t[1].toLowerCase();e.sort(((e,t)=>ye(s(e,r,a),s(t,r,a),a,n)))}}_createFeatureQueryResponse(e){const t=this.items,{geometryType:s,hasM:i,hasZ:r,objectIdField:a,spatialReference:n}=this,{outFields:o,outSR:u,quantizationParameters:l,resultRecordCount:c,resultOffset:h,returnZ:d,returnM:f}=e,p=null!=c&&t.length>(h||0)+c,m=o&&(o.indexOf("*")>-1?[...this.fieldsIndex.fields]:o.map((e=>this.fieldsIndex.get(e))));return{exceededTransferLimit:p,features:this._createFeatures(e,t),fields:m,geometryType:s,hasM:i&&f,hasZ:r&&d,objectIdFieldName:a,spatialReference:$(u||n),transform:l&&k(l)||null}}_createFeatures(e,t){const s=new de(e,this.featureAdapter,this.fieldsIndex),{hasM:i,hasZ:r}=this,{orderByFields:a,quantizationParameters:n,returnGeometry:o,returnCentroid:u,maxAllowableOffset:l,resultOffset:c,resultRecordCount:h,returnZ:d=!1,returnM:f=!1}=e,p=r&&d,m=i&&f;let y=[],g=0;const x=[...t];if(this._sortFeatures(x,a,((e,t,i)=>s.getFieldValue(e,t,i))),o||u){const e=k(n);if(o&&!u)for(const t of x)y[g++]={attributes:s.getAttributes(t),geometry:Y(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(t),l,e,p,m)};else if(!o&&u)for(const t of x)y[g++]={attributes:s.getAttributes(t),centroid:W(this,this.featureAdapter.getCentroid(t,this),e)};else for(const t of x)y[g++]={attributes:s.getAttributes(t),centroid:W(this,this.featureAdapter.getCentroid(t,this),e),geometry:Y(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(t),l,e,p,m)}}else for(const w of x){const e=s.getAttributes(w);e&&(y[g++]={attributes:e})}const _=c||0;if(null!=h){const e=_+h;y=y.slice(_,Math.min(y.length,e))}return y}_createExceedsLimitQueryResponse(e){let t=!1,s=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,r=Number.POSITIVE_INFINITY;for(const a of e.outStatistics)if("exceedslimit"===a.statisticType){s=null!=a.maxPointCount?a.maxPointCount:Number.POSITIVE_INFINITY,i=null!=a.maxRecordCount?a.maxRecordCount:Number.POSITIVE_INFINITY,r=null!=a.maxVertexCount?a.maxVertexCount:Number.POSITIVE_INFINITY;break}if("esriGeometryPoint"===this.geometryType)t=this.items.length>s;else if(this.items.length>i)t=!0;else{const e=this.hasZ?this.hasM?4:3:this.hasM?3:2,s=this.featureAdapter;t=this.items.reduce(((e,t)=>{const i=s.getGeometry(t);return e+(f(i)&&i.coords.length||0)}),0)/e>r}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(t)}}]}}_createStatisticsQueryResponse(e){const t={attributes:{}},s=[],i=new Map,r=new Map,a=new Map,n=new Map,o=new de(e,this.featureAdapter,this.fieldsIndex),u=e.outStatistics,{groupByFieldsForStatistics:l,having:c,orderByFields:h}=e,d=l&&l.length,f=!!d,p=f&&l[0],m=f&&!this.fieldsIndex.get(p);for(const g of u){const{outStatisticFieldName:e,statisticType:u}=g,h=g,y="exceedslimit"!==u?g.onStatisticField:void 0,x="percentile_disc"===u||"percentile_cont"===u,_=f&&1===d&&(y===p||m)&&"count"===u;if(f){if(!a.has(y)){const e=[];for(const t of l){const s=this._getAttributeValues(o,t,i);e.push(s)}a.set(y,this._calculateUniqueValues(e,o.returnDistinctValues))}const t=a.get(y);for(const s in t){const{count:r,data:a,items:u,itemPositions:d}=t[s],f=a.join(",");if(!c||o.validateItems(u,c)){const t=n.get(f)||{attributes:{}};let s=null;if(_)s=r;else{const e=this._getAttributeValues(o,y,i),t=d.map((t=>e[t]));s=x&&"statisticParameters"in h?this._getPercentileValue(h,t):this._getStatisticValue(h,t,null,o.returnDistinctValues)}t.attributes[e]=s,l.forEach(((e,s)=>t.attributes[this.fieldsIndex.get(e)?e:`EXPR_${s+1}`]=a[s])),n.set(f,t)}}}else{const s=this._getAttributeValues(o,y,i);t.attributes[e]=x&&"statisticParameters"in h?this._getPercentileValue(h,s):this._getStatisticValue(h,s,r,o.returnDistinctValues)}s.push({name:e,alias:e,type:"esriFieldTypeDouble"})}const y=f?Array.from(n.values()):[t];return this._sortFeatures(y,h,((e,t)=>e.attributes[t])),{fields:s,features:y}}_getStatisticValue(e,t,s,i){const{onStatisticField:r,statisticType:a}=e;let n=null;return n=null!=s&&s.has(r)?s.get(r):m(this.fieldsIndex.get(r))?L({values:t,returnDistinct:i}):U({values:t,minValue:null,maxValue:null,useSampleStdDev:!0}),s&&s.set(r,n),n["var"===a?"variance":a]}_getPercentileValue(e,t){const{onStatisticField:s,statisticParameters:i,statisticType:r}=e,{value:a,orderBy:n}=i,o="desc"===n,u=this.fieldsIndex.get(s),l=[...t].filter((e=>null!=e)).sort(((e,t)=>ye(e,t,u,o)));return this._calculatePercentile(l,a,"percentile_disc"===r)}_getAttributeValues(e,t,s){if(s.has(t))return s.get(t);const i=this.fieldsIndex.get(t),r=this.items.map((s=>e.getFieldValue(s,t,i)));return s.set(t,r),r}_getAttributeNormalizedValues(e,t){return this.items.map((s=>e.getNormalizedValue(s,{field:t.field,fieldInfo:this.fieldsIndex.get(t.field),normalizationField:t.normalizationField,normalizationFieldInfo:this.fieldsIndex.get(t.normalizationField),normalizationType:t.normalizationType,normalizationTotal:t.normalizationTotal})))}async _getAttributeExpressionValues(e,t,s){const{arcadeUtils:i}=await y(),r=i.createFunction(t),a=s&&i.getViewInfo(s);return this.items.map((t=>e.getExpressionValue(t,{compiledFunc:r,viewInfo:a},i)))}_calculateUniqueValues(e,t){const s={},i=this.items,r=i.length;for(let a=0;a<r;a++){const r=i[a],n=[];for(const t of e)n.push(t[a]);const o=n.join(",");t?null==s[o]&&(s[o]={count:1,data:n,items:[r],itemPositions:[a]}):null==s[o]?s[o]={count:1,data:n,items:[r],itemPositions:[a]}:(s[o].count++,s[o].items.push(r),s[o].itemPositions.push(a))}return s}_calculatePercentile(e,t,s){if(0===e.length)return null;if(t<=0)return e[0];if(t>=1)return e[e.length-1];const i=(e.length-1)*t,r=Math.floor(i),a=r+1,n=i%1,o=e[r],u=e[a];return a>=e.length||s||"string"==typeof o||"string"==typeof u?o:o*(1-n)+u*n}}function xe(e,t,s,i,r,a){const n=r-s,o=a-i,u=n*n+o*o,l=(e-s)*n+(t-i)*o,c=Math.min(1,Math.max(0,l/u));return{x:s+n*c,y:i+o*c}}class _e{constructor(){this._tasks=new Array}get length(){return this._tasks.length}push(e,t,s){return new Promise(((i,r)=>this._tasks.push(new we(i,r,e,t,s))))}unshift(e,t,s){return new Promise(((i,r)=>this._tasks.unshift(new we(i,r,e,t,s))))}process(){if(0===this._tasks.length)return!1;const e=this._tasks.shift();try{const t=g(e.signal);if(t&&!e.abortCallback)e.reject(x());else{const s=t?e.abortCallback(x()):e.callback();_(s)?s.then(e.resolve,e.reject):e.resolve(s)}}catch(t){e.reject(t)}return!0}cancelAll(){const e=x();for(const t of this._tasks)if(t.abortCallback){const s=t.abortCallback(e);t.resolve(s)}else t.reject(e);this._tasks.length=0}}class we{constructor(e,t,s,i,r){this.resolve=e,this.reject=t,this.callback=s,this.signal=i,this.abortCallback=r}}let Ie=null;const be="feature-store:unsupported-query",Se=new Set,Fe=new w(2e6);let Qe=0;class Ae{constructor(e){this.capabilities={query:q},this.geometryType=e.geometryType,this.hasM=e.hasM,this.hasZ=e.hasZ,this.objectIdField=e.objectIdField,this.spatialReference=e.spatialReference,this.definitionExpression=e.definitionExpression,this.featureStore=e.featureStore,this.aggregateAdapter=e.aggregateAdapter,this._changeHandle=this.featureStore.events.on("changed",(()=>this.clearCache())),this.timeInfo=e.timeInfo,e.cacheSpatialQueries&&(this._geometryQueryCache=new b(Qe+++"$$",Fe)),this.fieldsIndex=new S(e.fields),e.scheduler&&e.priority&&(this._frameQueue=new _e,this._frameTask=e.scheduler.registerTask(e.priority,this))}destroy(){this._frameTask&&(this._frameTask.remove(),this._frameTask=null,this._frameQueue.cancelAll(),this._frameQueue=null),this.clearCache(),this._geometryQueryCache&&this._geometryQueryCache.destroy(),this._changeHandle&&(this._changeHandle.remove(),this._changeHandle=null),this.fieldsIndex.destroy()}get featureAdapter(){return this.featureStore.featureAdapter}get fullExtent(){const e=this.featureStore.fullBounds;return e?{xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:$(this.spatialReference)}:null}get timeExtent(){return this.timeInfo?(this._timeExtent||(this._timeExtent=X(this.timeInfo,this.featureStore)),this._timeExtent):null}clearCache(){this._geometryQueryCache&&this._geometryQueryCache.clear(),this._allItems=null,this._timeExtent=null}async executeQuery(e={},t){let s,i=F(e);try{i=await this._schedule((()=>K(i,this.definitionExpression,this.spatialReference)),t),i=await this._reschedule((()=>this._checkQuerySupport(i)),t),s=await this._reschedule((()=>this._executeGeometryQuery(i,t)),t),s=await this._reschedule((()=>s.executeAggregateIdsQuery(i)),t),s=await this._reschedule((()=>s.executeObjectIdsQuery(i)),t),s=await this._reschedule((()=>s.executeTimeQuery(i)),t),s=await this._reschedule((()=>s.executeAttributesQuery(i)),t)}catch(r){if(r!==ee)throw r;s=new ge([],null,this)}return s.createQueryResponse(i)}async executeQueryForCount(e={},t){let s,i=F(e);i.returnGeometry=!1,i.returnCentroid=!1,i.outSR=null;try{i=await this._schedule((()=>K(i,this.definitionExpression,this.spatialReference)),t),i=await this._reschedule((()=>this._checkQuerySupport(i)),t),s=await this._reschedule((()=>this._executeGeometryQuery(i,t)),t),s=await this._reschedule((()=>s.executeAggregateIdsQuery(i)),t),s=await this._reschedule((()=>s.executeObjectIdsQuery(i)),t),s=await this._reschedule((()=>s.executeTimeQuery(i)),t),s=await this._reschedule((()=>s.executeAttributesQuery(i)),t)}catch(r){if(r!==ee)throw r;return 0}return s.createQueryResponseForCount(i)}async executeQueryForExtent(e={},t){let s,i=F(e);const r=i.outSR;try{i=await this._schedule((()=>K(i,this.definitionExpression,this.spatialReference)),t),i=await this._reschedule((()=>this._checkQuerySupport(i)),t),i.returnGeometry=!0,i.returnCentroid=!1,i.outSR=null,s=await this._reschedule((()=>this._executeGeometryQuery(i,t)),t),s=await this._reschedule((()=>s.executeAggregateIdsQuery(i)),t),s=await this._reschedule((()=>s.executeObjectIdsQuery(i)),t),s=await this._reschedule((()=>s.executeTimeQuery(i)),t),s=await this._reschedule((()=>s.executeAttributesQuery(i)),t);const e=s.size;if(!e)return{count:e,extent:null};Q(Te,A),this.featureStore.forEachBounds(s.items,(e=>R(Te,e)),Re);const a={xmin:Te[0],ymin:Te[1],xmax:Te[3],ymax:Te[4],spatialReference:$(this.spatialReference)};this.hasZ&&isFinite(Te[2])&&isFinite(Te[5])&&(a.zmin=Te[2],a.zmax=Te[5]);const n=M(a,s.spatialReference,r);if(n.spatialReference=$(r||this.spatialReference),n.xmax-n.xmin==0){const e=T(n.spatialReference);n.xmin-=e,n.xmax+=e}if(n.ymax-n.ymin==0){const e=T(n.spatialReference);n.ymin-=e,n.ymax+=e}if(this.hasZ&&null!=n.zmin&&null!=n.zmax&&n.zmax-n.zmin==0){const e=T(n.spatialReference);n.zmin-=e,n.zmax+=e}return{count:e,extent:n}}catch(a){if(a===ee)return{count:0,extent:null};throw a}}async executeQueryForIds(e={},t){return this.executeQueryForIdSet(e,t).then((e=>Array.from(e)))}async executeQueryForIdSet(e={},t){let s,i=F(e);i.returnGeometry=!1,i.returnCentroid=!1,i.outSR=null;try{i=await this._schedule((()=>K(i,this.definitionExpression,this.spatialReference)),t),i=await this._reschedule((()=>this._checkQuerySupport(i)),t),s=await this._reschedule((()=>this._executeGeometryQuery(i,t)),t),s=await this._reschedule((()=>s.executeAggregateIdsQuery(i)),t),s=await this._reschedule((()=>s.executeObjectIdsQuery(i)),t),s=await this._reschedule((()=>s.executeTimeQuery(i)),t),s=await this._reschedule((()=>s.executeAttributesQuery(i)),t);const e=s.items,r=new Set;return await this._reschedule((()=>{for(const t of e)r.add(s.featureAdapter.getObjectId(t))}),t),r}catch(r){if(r===ee)return new Set;throw r}}async executeQueryForSnapping(e,i){const{point:r,distance:a,types:n}=e;if(0===n)return{candidates:[]};const u=await this._reschedule((()=>this._checkQuerySupport(e.query)),i),l=!d(r.spatialReference,this.spatialReference);l&&await G(r.spatialReference,this.spatialReference);const h="number"==typeof a?a:a.x,f="number"==typeof a?a:a.y,p={xmin:r.x-h,xmax:r.x+h,ymin:r.y-f,ymax:r.y+f,spatialReference:r.spatialReference},m=l?M(p,this.spatialReference):p;if(!m)return{candidates:[]};const y=(await v(C(r),null,{signal:i}))[0],g=(await v(C(m),null,{signal:i}))[0];if(c(y)||c(g))return{candidates:[]};let x=new ge(this._searchFeatures(this._getQueryBBoxes(g.toJSON())),null,this);x=await this._reschedule((()=>x.executeObjectIdsQuery(u)),i),x=await this._reschedule((()=>x.executeTimeQuery(u)),i),x=await this._reschedule((()=>x.executeAttributesQuery(u)),i);const _=y.toJSON(),w=l?M(_,this.spatialReference):_,I=l?Math.max(m.xmax-m.xmin,m.ymax-m.ymin)/2:a;return x.createSnappingResponse(((e,i)=>t(e,s(i)))(o({},e),{point:w,distance:I}),r.spatialReference)}async executeQueryForLatestObservations(e={},t){if(!this.timeInfo||!this.timeInfo.trackIdField)throw new l(be,"Missing timeInfo or timeInfo.trackIdField",{query:e,timeInfo:this.timeInfo});let s,i=F(e);try{i=await this._schedule((()=>K(i,this.definitionExpression,this.spatialReference)),t),i=await this._reschedule((()=>this._checkQuerySupport(i)),t),s=await this._reschedule((()=>this._executeGeometryQuery(i,t)),t),s=await this._reschedule((()=>s.executeAggregateIdsQuery(i)),t),s=await this._reschedule((()=>s.executeObjectIdsQuery(i)),t),s=await this._reschedule((()=>s.executeTimeQuery(i)),t),s=await this._reschedule((()=>s.executeAttributesQuery(i)),t),s=await this._reschedule((()=>s.filterLatest()),t)}catch(r){if(r!==ee)throw r;s=new ge([],null,this)}return s.createQueryResponse(i)}async executeQueryForSummaryStatistics(e={},t,s){let i;e=F(e);try{e=await this._schedule((()=>K(e,this.definitionExpression,this.spatialReference)),s),e=await this._reschedule((()=>this._checkSummaryStatisticsSupport(e,t)),s),i=await this._reschedule((()=>this._executeGeometryQuery(e,s)),s),i=await this._reschedule((()=>i.executeAggregateIdsQuery(e)),s),i=await this._reschedule((()=>i.executeObjectIdsQuery(e)),s),i=await this._reschedule((()=>i.executeTimeQuery(e)),s),i=await this._reschedule((()=>i.executeAttributesQuery(e)),s)}catch(r){if(r!==ee)throw r;i=new ge([],null,this)}return i.createSummaryStatisticsResponse(e,t)}async _schedule(e,t){return this._frameQueue?this._frameQueue.push(e,t):e()}async _reschedule(e,t){return this._frameQueue?this._frameQueue.unshift(e,t):e()}get running(){return this._frameQueue.length>0}runTask(e){for(this._budget=e;!e.done&&this._frameQueue&&this._frameQueue.process();)e.madeProgress();this._budget=null}_getAll(){if(!this._allItems){const e=[];this.featureStore.forEach((t=>e.push(t))),this._allItems=new ge(e,null,this)}return this._allItems}async _executeGeometryQuery(e,t){const{geometry:s,outSR:i,spatialRel:r,returnGeometry:a,returnCentroid:n}=e,o=a||n,u=h(i)&&!d(this.spatialReference,i),l=this._geometryQueryCache?u&&o?JSON.stringify({geometry:s,spatialRelationship:r,outSpatialReference:i}):JSON.stringify({geometry:s,spatialRelationship:r}):null;if(l){const e=this._geometryQueryCache.get(l);if(!P(e))return e}const c=async e=>{if(u&&o){const t=await e.project(i);return l&&this._geometryQueryCache.put(l,t,t.size||1),t}return l&&this._geometryQueryCache.put(l,e,e.size||1),e};if(!s)return c(this._getAll());const f=this.featureAdapter;if("esriSpatialRelDisjoint"===r){const e=this._searchFeatures(this._getQueryBBoxes(s));if(!e.length)return c(this._getAll());let i,a;const n=new Set;for(const t of e)n.add(f.getObjectId(t));await this._reschedule((()=>{let e=0;i=new Array(n.size),this.featureStore.forEach((t=>i[e++]=t)),a=n}),t);return c(await this._reschedule((async()=>{const e=await te(r,s,this.geometryType,this.hasZ,this.hasM);return new ge(await this._runSpatialFilter(i,(t=>!a.has(f.getObjectId(t))||e(f.getGeometry(t))),t),s,this)}),t))}const p=this._searchFeatures(this._getQueryBBoxes(s));if(!p.length){const e=new ge([],s,this);return l&&this._geometryQueryCache.put(l,e,e.size||1),e}if(this._canExecuteSoloPass(s,e))return c(new ge(p,s,this));const m=await te(r,s,this.geometryType,this.hasZ,this.hasM),y=await this._runSpatialFilter(p,(e=>m(f.getGeometry(e))),t);return c(new ge(y,s,this))}async _runSpatialFilter(e,t,s){if(!t)return e;if(!this._budget)return e.filter((e=>t(e)));let i=0;const r=new Array,a=async()=>{for(;i<e.length;){const n=e[i];t(n)&&r.push(n),this._budget.done&&await this._reschedule((()=>a()),s),++i}};return this._reschedule((()=>a()),s).then((()=>r))}_canExecuteSoloPass(e,t){const{geometryType:s}=this,{spatialRel:i}=t;return se(e)&&("esriSpatialRelEnvelopeIntersects"===i||"esriGeometryPoint"===s&&("esriSpatialRelIntersects"===i||"esriSpatialRelContains"===i||"esriSpatialRelWithin"===i))}_getQueryBBoxes(e){if(se(e)){if(V(e))return[z(e.xmin,e.ymin,e.xmax,e.ymax)];if(E(e))return e.rings.map((e=>z(Math.min(e[0][0],e[2][0]),Math.min(e[0][1],e[2][1]),Math.max(e[0][0],e[2][0]),Math.max(e[0][1],e[2][1]))))}return[j(O(),e)]}_searchFeatures(e){for(const i of e)this.featureStore.forEachInBounds(i,(e=>{Se.add(e)}));const t=new Array(Se.size);let s=0;return Se.forEach((e=>t[s++]=e)),Se.clear(),t}async _checkSummaryStatisticsSupport(e,t){if(e.distance<0||null!=e.geometryPrecision||e.multipatchOption||e.pixelSize||e.relationParam||e.text||e.outStatistics||e.groupByFieldsForStatistics||e.having||e.orderByFields)throw new l(be,"Unsupported query options",{query:e});return Promise.all([this._checkAttributesQuerySupport(e),this._checkSummaryStatisticsParamsSupport(t),ie(e,this.geometryType,this.spatialReference),G(this.spatialReference,e.outSR)]).then((()=>e))}async _checkSummaryStatisticsParamsSupport(e){const t=await async function(e){const t=e.field,s=e.normalizationField,i=e.valueExpression;let r=[];if(i){if(!Ie){const{arcadeUtils:e}=await y();Ie=e}r=Ie.extractFieldNames(i)}return t&&r.push(t),s&&r.push(s),r}({field:e.field,normalizationField:e.normalizationField,valueExpression:e.valueExpression});if(!t.length)throw new l(be,"params should have atleast a field or valueExpression",{params:e});le(this.fieldsIndex,t,"params contains missing fields")}async _checkQuerySupport(e){if(e.distance<0||null!=e.geometryPrecision||e.multipatchOption||e.pixelSize||e.relationParam||e.text)throw new l(be,"Unsupported query options",{query:e});return Promise.all([this._checkAttributesQuerySupport(e),this._checkStatisticsQuerySupport(e),ie(e,this.geometryType,this.spatialReference),G(this.spatialReference,e.outSR)]).then((()=>e))}_checkAttributesQuerySupport(e){const{outFields:t,orderByFields:s,returnDistinctValues:i,outStatistics:r}=e,a=r?r.map((e=>e.outStatisticFieldName&&e.outStatisticFieldName.toLowerCase())):[];if(s&&s.length>0){const e=" asc",t=" desc",i=s.map((s=>{const i=s.toLowerCase();return i.indexOf(e)>-1?i.split(e)[0]:i.indexOf(t)>-1?i.split(t)[0]:s})).filter((e=>-1===a.indexOf(e)));le(this.fieldsIndex,i,"orderByFields contains missing fields")}if(t&&t.length>0)le(this.fieldsIndex,t,"outFields contains missing fields");else if(i)throw new l(be,"outFields should be specified for returnDistinctValues",{query:e});!function(e,t){if(!t)return!0;const s=re.get(t,e);if(!s)throw new l(ae,"invalid SQL expression",{where:t});if(!s.isStandardized)throw new l(ae,"where clause is not standard",{where:t});le(e,s.fieldNames,"where clause contains missing fields")}(this.fieldsIndex,e.where)}async _checkStatisticsQuerySupport(e){const{outStatistics:t,groupByFieldsForStatistics:s,having:i}=e,r=s&&s.length,a=t&&t.length;if(i){if(!r||!a)throw new l(be,"outStatistics and groupByFieldsForStatistics should be specified with having",{query:e});!function(e,t,s){if(!t)return!0;const i=re.get(t,e);if(!i)throw new l(ae,"invalid SQL expression",{having:t});if(!i.isAggregate)throw new l(ae,"having does not contain a valid aggregate function",{having:t});const r=i.fieldNames;if(le(e,r,"having contains missing fields"),!i.getExpressions().every((t=>{const{aggregateType:i,field:r}=t,a=e.has(r)&&e.get(r).name;return s.some((t=>{const{onStatisticField:s,statisticType:r}=t;return(e.has(s)&&e.get(s).name)===a&&r.toLowerCase().trim()===i}))})))throw new l(ae,"expressions in having should also exist in outStatistics",{having:t})}(this.fieldsIndex,i,t)}if(a){if(!t.every((e=>"exceedslimit"!==e.statisticType)))return;const i=t.map((e=>e.onStatisticField));le(this.fieldsIndex,i,"onStatisticFields contains missing fields"),r&&le(this.fieldsIndex,s,"groupByFieldsForStatistics contains missing fields");for(const s of t){const{onStatisticField:t,statisticType:i}=s;if("percentile_disc"!==i&&"percentile_cont"!==i||!("statisticParameters"in s)){if("count"!==i&&t&&he(t,this.fieldsIndex))throw new l(be,"outStatistics contains non-numeric fields",{definition:s,query:e})}else{const{statisticParameters:t}=s;if(!t)throw new l(be,"statisticParamters should be set for percentile type",{definition:s,query:e})}}}}}const Re=I(),Te=I();export{Ae as H};
