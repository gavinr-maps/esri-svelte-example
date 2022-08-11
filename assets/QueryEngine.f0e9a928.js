import{em as ee,dr as W,en as te,b$ as se,eo as P,ep as G,t as g,eq as ie,ds as re,du as ae,c6 as v,bp as I,dB as M,bR as Z,f as F,r as w,er as N,aY as L,bo as U,es as ne,et as ue,bu as oe,aP as ce,b5 as D,au as he,aI as le,aq as fe,cQ as de}from"./index.ebaf2ed0.js";import{v as d,E as ye,l as me,c as A,o as pe,a as ge,f as xe}from"./QueryEngineResult.28294d31.js";import{g as $,f as j,M as _e}from"./projectionSupport.76b9f568.js";import{t as we}from"./QueryEngineCapabilities.c2e9875c.js";import{t as Se,v as T,n as Fe,I as H,P as J}from"./timeSupport.9cee4b8d.js";import{x as B,U as E,P as V,J as Re}from"./utils.ce5206be.js";function Qe(z){return z.every(e=>e.statisticType!=="exceedslimit")}const R="feature-store:unsupported-query",Ie=new ee(2e6);let Ee=0;class je{constructor(e){this.capabilities={query:we},this.geometryType=e.geometryType,this.hasM=e.hasM,this.hasZ=e.hasZ,this.objectIdField=e.objectIdField,this.spatialReference=e.spatialReference,this.definitionExpression=e.definitionExpression,this.featureStore=e.featureStore,this.aggregateAdapter=e.aggregateAdapter,this._changeHandle=this.featureStore.events.on("changed",()=>this.clearCache()),this.timeInfo=e.timeInfo,e.cacheSpatialQueries&&(this._geometryQueryCache=new te(Ee+++"$$",Ie)),this.fieldsIndex=new se(e.fields),e.scheduler&&e.priority&&(this._frameTask=e.scheduler.registerTask(e.priority))}destroy(){this._frameTask=P(this._frameTask),this.clearCache(),G(this._geometryQueryCache),this._changeHandle=P(this._changeHandle),G(this.fieldsIndex)}get featureAdapter(){return this.featureStore.featureAdapter}get fullExtent(){const e=this.featureStore.fullBounds;return g(e)?null:{xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:B(this.spatialReference)}}get timeExtent(){return this.timeInfo?(this._timeExtent||(this._timeExtent=Se(this.timeInfo,this.featureStore)),this._timeExtent):null}clearCache(){var e;(e=this._geometryQueryCache)==null||e.clear(),this._allItems=null,this._timeExtent=null}async executeQuery(e,t){try{return(await this._executeQuery(e,{},t)).createQueryResponse()}catch(s){if(s!==E)throw s;return new d([],e,this).createQueryResponse()}}async executeQueryForCount(e={},t){try{return(await this._executeQuery(e,{returnGeometry:!1,returnCentroid:!1,outSR:null},t)).createQueryResponseForCount()}catch(s){if(s!==E)throw s;return 0}}async executeQueryForExtent(e,t){const s=e.outSR;try{const i=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},t),r=i.size;if(!r)return{count:0,extent:null};ie(x,re),this.featureStore.forEachBounds(i.items,n=>ae(x,n),be);const u={xmin:x[0],ymin:x[1],xmax:x[3],ymax:x[4],spatialReference:B(this.spatialReference)};this.hasZ&&isFinite(x[2])&&isFinite(x[5])&&(u.zmin=x[2],u.zmax=x[5]);const a=$(u,i.spatialReference,s);if(a.spatialReference=B(s||this.spatialReference),a.xmax-a.xmin==0){const n=v(a.spatialReference);a.xmin-=n,a.xmax+=n}if(a.ymax-a.ymin==0){const n=v(a.spatialReference);a.ymin-=n,a.ymax+=n}if(this.hasZ&&a.zmin!=null&&a.zmax!=null&&a.zmax-a.zmin==0){const n=v(a.spatialReference);a.zmin-=n,a.zmax+=n}return{count:r,extent:a}}catch(i){if(i===E)return{count:0,extent:null};throw i}}async executeQueryForIds(e,t){return this.executeQueryForIdSet(e,t).then(s=>Array.from(s))}async executeQueryForIdSet(e,t){try{const s=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},t),i=s.items,r=new Set;return await this._reschedule(()=>{for(const u of i)r.add(s.featureAdapter.getObjectId(u))},t),r}catch(s){if(s===E)return new Set;throw s}}async executeQueryForSnapping(e,t){const{point:s,distance:i,types:r}=e;if(r===ye.NONE)return{candidates:[]};const u=await this._reschedule(()=>this._checkQuerySupport(e.query),t),a=!I(s.spatialReference,this.spatialReference);a&&await j(s.spatialReference,this.spatialReference);const n=typeof i=="number"?i:i.x,h=typeof i=="number"?i:i.y,c={xmin:s.x-n,xmax:s.x+n,ymin:s.y-h,ymax:s.y+h,spatialReference:s.spatialReference},o=a?$(c,this.spatialReference):c;if(!o)return{candidates:[]};const y=(await M(Z(s),null,{signal:t}))[0],m=(await M(Z(o),null,{signal:t}))[0];if(g(y)||g(m))return{candidates:[]};const _=new d(this._searchFeatures(this._getQueryBBoxes(m.toJSON())),u,this);await this._reschedule(()=>this._executeObjectIdsQuery(_),t),await this._reschedule(()=>this._executeTimeQuery(_),t),await this._reschedule(()=>this._executeAttributesQuery(_),t);const l=y.toJSON(),S=a?$(l,this.spatialReference):l,p=a?Math.max(o.xmax-o.xmin,o.ymax-o.ymin)/2:i;return _.createSnappingResponse({...e,point:S,distance:p},s.spatialReference)}async executeQueryForLatestObservations(e,t){if(!this.timeInfo||!this.timeInfo.trackIdField)throw new F(R,"Missing timeInfo or timeInfo.trackIdField",{query:e,timeInfo:this.timeInfo});try{const s=await this._executeQuery(e,{},t);return await this._reschedule(()=>this._filterLatest(s),t),s.createQueryResponse()}catch(s){if(s!==E)throw s;return new d([],e,this).createQueryResponse()}}async executeQueryForSummaryStatistics(e={},t,s){const{field:i,normalizationField:r,valueExpression:u}=t;return(await this._getQueryEngineResultForStats(e,{field:i,normalizationField:r,valueExpression:u},s)).createSummaryStatisticsResponse(t)}async executeQueryForUniqueValues(e={},t,s){const{field:i,valueExpression:r}=t;return(await this._getQueryEngineResultForStats(e,{field:i,valueExpression:r},s)).createUniqueValuesResponse(t)}async executeQueryForClassBreaks(e={},t,s){const{field:i,normalizationField:r,valueExpression:u}=t;return(await this._getQueryEngineResultForStats(e,{field:i,normalizationField:r,valueExpression:u},s)).createClassBreaksResponse(t)}async executeQueryForHistogram(e={},t,s){const{field:i,normalizationField:r,valueExpression:u}=t;return(await this._getQueryEngineResultForStats(e,{field:i,normalizationField:r,valueExpression:u},s)).createHistogramResponse(t)}async _schedule(e,t){return w(this._frameTask)?this._frameTask.schedule(e,t):e(N)}async _reschedule(e,t){return w(this._frameTask)?this._frameTask.reschedule(e,t):e(N)}_getAll(e){return g(this._allItems)&&(this._allItems=this.featureStore.toArray()),new d(this._allItems,e,this)}async _executeQuery(e,t,s){e=L(e),e=await this._schedule(()=>V(e,this.definitionExpression,this.spatialReference),s),e=await this._reschedule(()=>this._checkQuerySupport(e),s),e={...e,...t};const i=await this._reschedule(()=>this._executeSceneFilterQuery(e,s),s),r=await this._reschedule(()=>this._executeGeometryQuery(e,i,s),s);return await this._reschedule(()=>this._executeAggregateIdsQuery(r),s),await this._reschedule(()=>this._executeObjectIdsQuery(r),s),await this._reschedule(()=>this._executeTimeQuery(r),s),await this._reschedule(()=>this._executeAttributesQuery(r),s),r}async _executeSceneFilterQuery(e,t){if(g(e.sceneFilter))return null;const{outSR:s,returnGeometry:i,returnCentroid:r}=e,u=this.featureStore.featureSpatialReference,a=e.sceneFilter.geometry,n=g(u)||I(u,a.spatialReference)?a:$(a,u);if(!n)return null;const h=i||r,c=U(s)&&!I(this.spatialReference,s)&&h?async l=>this._project(l,s):l=>l,o=this.featureAdapter,y=this._searchFeatures(this._getQueryBBoxes(n));if(e.sceneFilter.spatialRelationship==="disjoint"){if(!y.length)return null;const l=new Set;for(const b of y)l.add(o.getObjectId(b));const S=await this._reschedule(()=>this.featureStore.toArray(),t),p=await this._reschedule(async()=>{const b=await T("esriSpatialRelDisjoint",n,this.geometryType,this.hasZ,this.hasM),k=Q=>!l.has(o.getObjectId(Q))||b(o.getGeometry(Q)),f=await this._runSpatialFilter(S,k,t);return new d(f,e,this)},t);return c(p)}if(!y.length)return new d([],e,this);if(this._canExecuteSinglePass(n,e))return c(new d(y,e,this));const m=await T("esriSpatialRelContains",n,this.geometryType,this.hasZ,this.hasM),_=await this._runSpatialFilter(y,l=>m(o.getGeometry(l)),t);return c(new d(_,e,this))}async _executeGeometryQuery(e,t,s){if(w(t)&&t.items.length===0)return t;e=w(t)?t.query:e;const{geometry:i,outSR:r,spatialRel:u,returnGeometry:a,returnCentroid:n}=e,h=this.featureStore.featureSpatialReference,c=!i||g(h)||I(h,i.spatialReference)?i:$(i,h),o=a||n,y=U(r)&&!I(this.spatialReference,r),m=this._geometryQueryCache&&g(t)?y&&o?JSON.stringify({originalFilterGeometry:i,spatialRelationship:u,outSpatialReference:r}):JSON.stringify({originalFilterGeometry:i,spatialRelationship:u}):null,_=m?this._geometryQueryCache.get(m):null;if(w(_))return new d(_,e,this);const l=async f=>(y&&o&&await this._project(f,r),m&&this._geometryQueryCache.put(m,f.items,f.items.length+1),f);if(!c)return l(w(t)?t:this._getAll(e));const S=this.featureAdapter;let p=this._searchFeatures(this._getQueryBBoxes(i));if(u==="esriSpatialRelDisjoint"){if(!p.length)return l(w(t)?t:this._getAll(e));const f=new Set;for(const q of p)f.add(S.getObjectId(q));const Q=w(t)?t.items:await this._reschedule(()=>this.featureStore.toArray(),s),Y=await this._reschedule(async()=>{const q=await T(u,c,this.geometryType,this.hasZ,this.hasM),K=O=>!f.has(S.getObjectId(O))||q(S.getGeometry(O)),X=await this._runSpatialFilter(Q,K,s);return new d(X,e,this)},s);return l(Y)}if(w(t)){const f=new ne;p=p.filter(Q=>ue(t.items,Q,t.items.length,f)>=0)}if(!p.length){const f=new d([],e,this);return m&&this._geometryQueryCache.put(m,f.items,1),f}if(this._canExecuteSinglePass(c,e))return l(new d(p,e,this));const b=await T(u,c,this.geometryType,this.hasZ,this.hasM),k=await this._runSpatialFilter(p,f=>b(S.getGeometry(f)),s);return l(new d(k,e,this))}_executeAggregateIdsQuery(e){if(e.items.length===0||!e.query.aggregateIds||!e.query.aggregateIds.length||g(this.aggregateAdapter))return;const t=new Set;for(const i of e.query.aggregateIds)this.aggregateAdapter.getFeatureObjectIds(i).forEach(r=>t.add(r));const s=this.featureAdapter.getObjectId;e.items=e.items.filter(i=>t.has(s(i)))}_executeObjectIdsQuery(e){if(e.items.length===0||!e.query.objectIds||!e.query.objectIds.length)return;const t=new Set(e.query.objectIds),s=this.featureAdapter.getObjectId;e.items=e.items.filter(i=>t.has(s(i)))}_executeTimeQuery(e){if(e.items.length===0)return;const t=Fe(this.timeInfo,e.query.timeExtent,this.featureAdapter);g(t)||(e.items=e.items.filter(t))}_executeAttributesQuery(e){if(e.items.length===0)return;const t=me(e.query.where,this.fieldsIndex);if(t){if(!t.isStandardized)throw new TypeError("Where clause is not standardized");e.items=e.items.filter(s=>t.testFeature(s,this.featureAdapter))}}async _runSpatialFilter(e,t,s){if(!t)return e;if(g(this._frameTask))return e.filter(a=>t(a));let i=0;const r=new Array,u=async a=>{for(;i<e.length;){const n=e[i++];t(n)&&(r.push(n),a.madeProgress()),a.done&&await this._reschedule(h=>u(h),s)}};return this._reschedule(a=>u(a),s).then(()=>r)}_filterLatest(e){const{trackIdField:t,startTimeField:s,endTimeField:i}=this.timeInfo,r=i||s,u=new Map,a=this.featureAdapter.getAttribute;for(const n of e.items){const h=a(n,t),c=a(n,r),o=u.get(h);(!o||c>a(o,r))&&u.set(h,n)}e.items=Array.from(u.values())}_canExecuteSinglePass(e,t){const{spatialRel:s}=t;return H(e)&&(s==="esriSpatialRelEnvelopeIntersects"||this.geometryType==="esriGeometryPoint"&&(s==="esriSpatialRelIntersects"||s==="esriSpatialRelContains"||s==="esriSpatialRelWithin"))}async _project(e,t){if(!t||I(this.spatialReference,t))return e;const s=this.featureAdapter,i=await _e(e.items.map(r=>Re(this.geometryType,this.hasZ,this.hasM,s.getGeometry(r))),this.spatialReference,t);return e.items=i.map((r,u)=>s.cloneWithGeometry(e.items[u],oe(r,this.hasZ,this.hasM))),e}_getQueryBBoxes(e){if(H(e)){if(ce(e))return[D(e.xmin,e.ymin,e.xmax,e.ymax)];if(he(e))return e.rings.map(t=>D(Math.min(t[0][0],t[2][0]),Math.min(t[0][1],t[2][1]),Math.max(t[0][0],t[2][0]),Math.max(t[0][1],t[2][1])))}return[le(fe(),e)]}_searchFeatures(e){for(const s of e)this.featureStore.forEachInBounds(s,i=>C.add(i));const t=Array.from(C.values());return C.clear(),t}async _checkStatisticsSupport(e,t){if(e.distance<0||e.geometryPrecision!=null||e.multipatchOption||e.pixelSize||e.relationParam||e.text||e.outStatistics||e.groupByFieldsForStatistics||e.having||e.orderByFields)throw new F(R,"Unsupported query options",{query:e});return this._checkAttributesQuerySupport(e),Promise.all([this._checkStatisticsParamsSupport(t),J(e,this.geometryType,this.spatialReference),j(this.spatialReference,e.outSR)]).then(()=>e)}async _checkStatisticsParamsSupport(e){let t=[];if(e.valueExpression){const{arcadeUtils:s}=await de();t=s.extractFieldNames(e.valueExpression)}if(e.field&&t.push(e.field),e.normalizationField&&t.push(e.normalizationField),!t.length)throw new F(R,"params should have at least a field or valueExpression",{params:e});A(this.fieldsIndex,t,"params contains missing fields")}async _checkQuerySupport(e){if(e.distance<0||e.geometryPrecision!=null||e.multipatchOption||e.pixelSize||e.relationParam||e.text)throw new F(R,"Unsupported query options",{query:e});return this._checkAttributesQuerySupport(e),this._checkStatisticsQuerySupport(e),Promise.all([J(e,this.geometryType,this.spatialReference),j(this.spatialReference,e.outSR)]).then(()=>e)}_checkAttributesQuerySupport(e){const{outFields:t,orderByFields:s,returnDistinctValues:i,outStatistics:r}=e,u=r?r.map(a=>a.outStatisticFieldName&&a.outStatisticFieldName.toLowerCase()).filter(Boolean):[];if(s&&s.length>0){const a=" asc",n=" desc",h=s.map(c=>{const o=c.toLowerCase();return o.includes(a)?o.split(a)[0]:o.includes(n)?o.split(n)[0]:c}).filter(c=>!u.includes(c));A(this.fieldsIndex,h,"orderByFields contains missing fields")}if(t&&t.length>0)A(this.fieldsIndex,t,"outFields contains missing fields");else if(i)throw new F(R,"outFields should be specified for returnDistinctValues",{query:e});pe(this.fieldsIndex,e.where)}_checkStatisticsQuerySupport(e){const{outStatistics:t,groupByFieldsForStatistics:s,having:i}=e,r=s&&s.length,u=t&&t.length;if(i){if(!r||!u)throw new F(R,"outStatistics and groupByFieldsForStatistics should be specified with having",{query:e});ge(this.fieldsIndex,i,t)}if(u){if(!Qe(t))return;const a=t.map(n=>n.onStatisticField).filter(Boolean);A(this.fieldsIndex,a,"onStatisticFields contains missing fields"),r&&A(this.fieldsIndex,s,"groupByFieldsForStatistics contains missing fields");for(const n of t){const{onStatisticField:h,statisticType:c}=n;if((c==="percentile_disc"||c==="percentile_cont")&&"statisticParameters"in n){const{statisticParameters:o}=n;if(!o)throw new F(R,"statisticParamters should be set for percentile type",{definition:n,query:e})}else if(c!=="count"&&h&&xe(h,this.fieldsIndex))throw new F(R,"outStatistics contains non-numeric fields",{definition:n,query:e})}}}async _getQueryEngineResultForStats(e,t,s){e=L(e);try{e=await this._schedule(()=>V(e,this.definitionExpression,this.spatialReference),s),e=await this._reschedule(()=>this._checkStatisticsSupport(e,t),s);const i=await this._reschedule(()=>this._executeSceneFilterQuery(e,s),s),r=await this._reschedule(()=>this._executeGeometryQuery(e,i,s),s);return await this._reschedule(()=>this._executeAggregateIdsQuery(r),s),await this._reschedule(()=>this._executeObjectIdsQuery(r),s),await this._reschedule(()=>this._executeTimeQuery(r),s),await this._reschedule(()=>this._executeAttributesQuery(r),s),r}catch(i){if(i!==E)throw i;return new d([],e,this)}}}const be=W(),x=W(),C=new Set;export{je as Y};
