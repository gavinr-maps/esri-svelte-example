const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./geometryEngine-DGiYLHJy.js","./geometry-D964gYQX.js","./subclass-BZA_h8Db.js","./Extent-Bf3YTe7m.js","./tslib.es6-B3Jf3DVX.js","./Point-Cg0-ChZE.js","./Accessor-BLX9ikPh.js","./cast-Bjksrh93.js","./writer-DNAwXnhG.js","./assets-C43MgM-v.js","./index-Bh2oEzTI.js","./index-2kwcjS9-.css","./jsonMap-0cxwUWs2.js","./Polyline-D9YkgmM_.js","./mathUtils-C4_ghTv4.js","./geometryEngineBase-yFIvKOkM.js","./_commonjsHelpers-DCkdB7M8.js","./hydrated-C9rxSL4a.js"])))=>i.map(i=>d[i]);
import{_ as ye}from"./index-Bh2oEzTI.js";import{r as c}from"./tslib.es6-B3Jf3DVX.js";import"./geometry-D964gYQX.js";import{b as Z,q as he}from"./Accessor-BLX9ikPh.js";import{m as d,a as q,Y as fe,n as ge,Z as me,b as U}from"./subclass-BZA_h8Db.js";import{r as Ee}from"./mathUtils-C4_ghTv4.js";import{a as Q,n as z,b as H}from"./TemporalSceneLayerView-D_Uh4zcF.js";import{whenOnce as we}from"./reactiveUtils-C5zUhJQJ.js";import{ai as Se,a2 as Y,g as X,i as _e,Z as Ie,O as be,t as ve}from"./Point-Cg0-ChZE.js";import{N,u as T,o as K}from"./vec32-Dvg_eL9J.js";import{r as D}from"./vec3f64-BLpZdpfb.js";import{Z as Re}from"./WhereClause-BNiy948d.js";import{W as Fe,K as ee}from"./projection-B971H0Re.js";import{a as A}from"./RenderTexture-CDO7DfmT.js";import{n as G}from"./projectVectorToVector-G2uWGoIb.js";import{u as V,e as xe,w as Oe}from"./aaBoundingBox-BE7cC1jD.js";import{a as $e,h as Qe,j as je,b as Me,E as Ce}from"./Polyline-D9YkgmM_.js";import{V as se}from"./sphere-C77djCO6.js";import{d as Ne}from"./FeatureFilter-BMHRQSxq.js";import{W as Te,D as De,Q as te}from"./I3SUtil-BALmNw_P.js";import{w as Ge}from"./Extent-Bf3YTe7m.js";import{o as ke}from"./LayerConstants-B33OP6sh.js";import{V as Ae}from"./QueryEngine-DrzbS-Dm.js";import{Z as Ve}from"./FieldsIndex-DpwHKAMX.js";import{d as Je}from"./FeatureSet-BHEkYP03.js";import{b as Pe}from"./Query-5Xpquc1r.js";import{n as We}from"./centroid-DdLmOD72.js";import{s as L}from"./OptimizedGeometry-BF8iz5FO.js";import{o as Ke}from"./Evented-BHRw9x22.js";import{o as C}from"./I3SMeshView3D-BgdxgRIr.js";const oe="esri.views.3d.layers.i3s.I3SMeshViewFilter",j=()=>ge.getLogger(oe);let f=class extends Z{constructor(t){super(t),this._projectionEngineLoaded=!1}initialize(){we(()=>{var t;return((t=this.viewFilter)==null?void 0:t.geometry)||this.layerFilter!=null}).then(()=>this.loadAsyncModule(ye(()=>import("./geometryEngine-DGiYLHJy.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]),import.meta.url).then(t=>{this.destroyed||(this._geometryEngine=t)})))}get sortedObjectIds(){var e;if(((e=this.viewFilter)==null?void 0:e.objectIds)==null)return null;const t=xe(this.viewFilter.objectIds);return t.sort(),t}get parsedWhereClause(){var e;const t=(e=this.viewFilter)==null?void 0:e.where;if(t==null||!t)return null;try{return Re.create(t,{fieldsIndex:this.layerFieldsIndex})}catch(r){j().error(`Failed to parse filter where clause: ${r}`)}return null}addFilters(t,e,r,i){var l;const n=this.sortedObjectIds;n!=null&&t.push(u=>Te(n,!0,u)),this.addSqlFilter(t,this.parsedWhereClause),this.addTimeFilter(t,(l=this.viewFilter)==null?void 0:l.timeExtent);const s=Q(this._layerMaskGeometries),o=this._geometryEngine;if(s!=null&&this.layerFilter!=null&&o!=null){const u=this.layerFilter.spatialRelationship;t.push((h,p)=>ne(o,h,p,i,e,r,s,u))}const a=Q(this._viewMaskGeometries);if(a!=null&&this.viewFilter!=null&&o!=null){const u=this.viewFilter.spatialRelationship;t.push((h,p)=>ne(o,h,p,i,e,r,a,u))}}isMBSGeometryVisible(t,e,r){const i=Q(this._layerMaskGeometries),n=this._geometryEngine;if(i!=null&&this.layerFilter!=null&&n!=null){const o=this.layerFilter.spatialRelationship,a=i[0].spatialReference||e;return A(t,r,M,a)?re(n,M,i,a,o):(j().warnOnce("SceneLayer.mask geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}const s=Q(this._viewMaskGeometries);if(s!=null&&this.viewFilter!=null&&n!=null){const o=this.viewFilter.spatialRelationship,a=s[0].spatialReference||e;return A(t,r,M,a)?re(n,M,s,a,o):(j().warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}return!0}get parsedGeometry(){const t=Q(this._viewMaskGeometries),e=Q(this._layerMaskGeometries);return t==null||e==null?t||e:e.concat(t)}get _layerMaskGeometries(){const t=this.layerFilter;return t==null?null:this._geometryEngine==null?z:t.spatialRelationship==="disjoint"?t.geometries.map(e=>({type:"polygon",rings:e.rings,spatialReference:e.spatialReference,cache:{}})):[t.geometries.reduce((e,r)=>(e.rings=[...e.rings,...r.rings],e),{type:"polygon",rings:[],spatialReference:t.geometries[0].spatialReference,cache:{}})]}get _viewMaskGeometries(){if(this.viewFilter==null)return null;const{geometry:t}=this.viewFilter;if(t==null)return null;if(this.viewFilter==null||this._geometryEngine==null)return z;const{distance:e,units:r}=this.viewFilter,i=this.viewFilter.spatialRelationship,n=t.type==="mesh"?t.extent:t;if(e==null||e===0)return k(this._geometryEngine,n,i);const s=r||Se(n.spatialReference);if(n.spatialReference.isWGS84){const l=this._geometryEngine.geodesicBuffer(n,e,s);return k(this._geometryEngine,l,i)}const o=Y(n,X.WGS84);if(o!=null){const l=Y(this._geometryEngine.geodesicBuffer(o,e,s),n.spatialReference);return k(this._geometryEngine,l,i)}if(!this._projectionEngineLoaded&&(this.loadAsyncModule(Fe().then(()=>this._projectionEngineLoaded=!0)),!this._projectionEngineLoaded))return null;let a=null;try{a=ee(n,X.WGS84)}catch{}if(a)try{a=ee(this._geometryEngine.geodesicBuffer(a,e,s),n.spatialReference)}catch{a=null}return a||j().error(`Filter by geodesic buffer (distance) unsupported, failed to project input geometry (${n.spatialReference.wkid}) to WGS84.`),k(this._geometryEngine,a,i)}get updating(){return H(this._layerMaskGeometries)||H(this._viewMaskGeometries)}static checkSupport(t){return t!=null&&(!!Le(t.spatialRelationship)||(j().warn(`Filters with spatialRelationship other than ${ae.join(", ")} are not supported for mesh scene layers`),!1))}};c([d()],f.prototype,"layerFilter",void 0),c([d({type:Ne})],f.prototype,"viewFilter",void 0),c([d()],f.prototype,"layerFieldsIndex",void 0),c([d()],f.prototype,"loadAsyncModule",void 0),c([d()],f.prototype,"addSqlFilter",void 0),c([d()],f.prototype,"addTimeFilter",void 0),c([d({readOnly:!0})],f.prototype,"sortedObjectIds",null),c([d({readOnly:!0})],f.prototype,"parsedWhereClause",null),c([d({readOnly:!0})],f.prototype,"parsedGeometry",null),c([d({readOnly:!0})],f.prototype,"_layerMaskGeometries",null),c([d({readOnly:!0})],f.prototype,"_viewMaskGeometries",null),c([d()],f.prototype,"updating",null),c([d()],f.prototype,"_projectionEngineLoaded",void 0),c([d()],f.prototype,"_geometryEngine",void 0),f=c([q(oe)],f);const ae=(t=>t)(["contains","intersects","disjoint"]);function Le(t){return t!=null&&ae.includes(t)}var y;function k(t,e,r){if(e==null)return null;if(r==="disjoint"&&e.type==="polygon"){const i=e.rings.length,n=e.spatialReference,s=new Array(i);for(let l=0;l<i;++l){const u=$e(1/0,1/0,-1/0,-1/0);Qe(u,e.rings[l]),s[l]={type:"polygon",rings:[e.rings[l]],spatialReference:n,cache:{},aabr:u}}s.sort((l,u)=>l.aabr[0]-u.aabr[0]);const o=new Set,a=new me;for(let l=0;l<s.length;++l){const u=s[l],h=u.aabr[0];o.forEach(p=>{if(h>=p.aabr[2])return void o.delete(p);if(u.aabr[1]>p.aabr[3]||u.aabr[3]<p.aabr[1]||!t.intersects(u,p))return;u.rings=u.rings.concat(p.rings),je(u.aabr,p.aabr,u.aabr),u.cache={},o.delete(p);const m=fe(s,p,s.length,a);s.splice(m,1)}),o.add(u)}for(const l of s)l.aabr=void 0;return s}return[e]}function re(t,e,r,i,n){if(e[3]>=.5*(e[2]+_e(i).radius))return!0;const s=le(t,e,i);return r.every(o=>ue(t,o,s,n)!==y.DISCARD)}function ne(t,e,r,i,n,s,o,a){const l=o[0].spatialReference||n.spatialReference;if(!A(r.node.serviceMbsInIndexSR,s,M,l))return void j().warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter");const u=le(t,M,l),h=Be(a,n,l,i,r.objectHandle);for(const p of o){if(e.length===0)return;switch(ue(t,p,u,a)){case y.DISCARD:return void(e.length=0);case y.KEEP:continue}De(e,r.featureIds,m=>Ze(t,p,m,h))}}(function(t){t[t.KEEP=0]="KEEP",t[t.DISCARD=1]="DISCARD",t[t.TEST=2]="TEST"})(y||(y={}));const M=se(0,0,0,0);function Be(t,e,r,i,n){const s=e.renderSpatialReference,o=new Map,a={type:"polygon",rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],spatialReference:r};a.rings[0][3]=a.rings[0][0];const l={indices:null,data:null,stride:0,startIndex:0,endIndex:0};let u,h;switch(t){case"intersects":u=(p,m,I)=>p.intersects(m,I)?y.KEEP:y.TEST,h=B;break;case"contains":u=(p,m,I)=>p.contains(m,I)?y.TEST:y.DISCARD,h=B;break;default:u=(p,m,I)=>p.disjoint(m,I)?y.TEST:y.DISCARD,h=ce}return{collection:i,object:n,type:t,maskSR:r,renderSR:s,aabbCache:o,triangle:a,positions:l,triangleTest:u,geometryTest:h}}function le(t,e,r){const i={type:"point",x:e[0],y:e[1],hasZ:!1,hasM:!1,spatialReference:r},n=!Ie(r)&&!be(r),s=Number.isNaN(e[3])?0:Ee(e[3],0,2*ve.radius),o=n?t.buffer(i,s,1):t.geodesicBuffer(i,s,1);return o.type="polygon",o}function ue(t,e,r,i){switch(i){case"intersects":case"contains":return B(t,e,r);case"disjoint":return ce(t,e,r)}}function B(t,e,r){return t.intersects(e,r)?t.contains(e,r)?y.KEEP:y.TEST:y.DISCARD}function ce(t,e,r){return t.intersects(e,r)?t.contains(e,r)?y.DISCARD:y.TEST:y.KEEP}function Ze(t,e,r,i){const{collection:n,object:s,renderSR:o,maskSR:a,geometryTest:l,aabbCache:u}=i;let h=u.get(r);if(!h){const b=n.getObjectTransform(s);n.getComponentAabb(s,r,_);const E=[D(_[0],_[1],0),D(_[0],_[4],0),D(_[3],_[4],0),D(_[3],_[1],0)];for(let g=0;g<4;++g)N(E[g],E[g],b.rotationScale),T(E[g],E[g],b.position),G(E[g],o,E[g],a);h={type:"polygon",rings:[E],spatialReference:a,cache:{}},h.rings[0][4]=h.rings[0][0],u.set(r,h)}switch(l(t,e,h)){case y.DISCARD:return!1;case y.KEEP:return!0}const{triangle:p,triangleTest:m,positions:I}=i,R=p.rings[0][0],F=p.rings[0][1],x=p.rings[0][2],$=n.getObjectTransform(s);n.getComponentPositions(s,r,I);const{indices:J,data:S,stride:P,startIndex:pe,endIndex:de}=I;for(let b=pe;b<de;b+=3){const E=P*J[b],g=P*J[b+1],W=P*J[b+2];switch(K(R,S[E],S[E+1],S[E+2]),K(F,S[g],S[g+1],S[g+2]),K(x,S[W],S[W+1],S[W+2]),N(R,R,$.rotationScale),N(F,F,$.rotationScale),N(x,x,$.rotationScale),T(R,R,$.position),T(F,F,$.position),T(x,x,$.position),G(R,o,R,a),G(F,o,F,a),G(x,o,x,a),m(t,e,p)){case y.DISCARD:return!1;case y.KEEP:return!0}}return i.type!=="intersects"}const _=V(),qe=Ae;let v=class extends Z{get spatialReference(){return this.layerView.view.spatialReference}get layer(){return this.layerView.i3slayer}get defaultQueryJSON(){return new Pe({outSpatialReference:this.spatialReference}).toJSON()}get _dataQueryEngine(){return this._ensureDataQueryEngine()}constructor(e){super(e)}initialize(){this.addHandles(this.layerView.on("visible-geometry-changed",()=>this.spatialIndex.events.emit("changed")))}destroy(){this._dataQueryEngineInstance=he(this._dataQueryEngineInstance),this._set("layerView",null)}async executeQueryForCount(e,r){return this._dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(e),r)}async executeQueryForExtent(e,r){const{count:i,extent:n}=await this._dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(e),r);return{count:i,extent:Ge.fromJSON(n)}}async executeQueryForIds(e,r){return this._dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(e),r)}async executeQuery(e,r){const i=this._ensureQueryJSON(e);if(i.returnGeometry)throw new U("unsupported-query","returnGeometry is not supported when querying a mesh scene layer view, it is only supported when directly querying a scene layer");if(i.returnCentroid)throw new U("unsupported-query","returnCentroid is not yet supported for mesh scene layer queries");const n=await this._dataQueryEngine.executeQuery(i,r),s=Je.fromJSON(n);return s.features.forEach(o=>o.geometry=null),s}_ensureQueryJSON(e){return e==null?this.defaultQueryJSON:e.toJSON()}_ensureDataQueryEngine(){var l;if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const e=this.layer.objectIdField||ke,r="esriGeometryPolygon",i=((l=this.layer.fieldsIndex)==null?void 0:l.toJSON())||new Ve([]),n=this.layerView.view.resourceController.scheduler,s=this.spatialReference.toJSON(),o=this.priority,a=this.spatialIndex;return this._dataQueryEngineInstance=new qe({hasZ:!0,hasM:!1,geometryType:r,fieldsIndex:i,timeInfo:null,spatialReference:s,objectIdField:e,featureStore:a,scheduler:n,priority:o}),this._dataQueryEngineInstance}};c([d({constructOnly:!0})],v.prototype,"layerView",void 0),c([d({constructOnly:!0})],v.prototype,"priority",void 0),c([d({constructOnly:!0})],v.prototype,"spatialIndex",void 0),c([d()],v.prototype,"spatialReference",null),c([d()],v.prototype,"layer",null),c([d()],v.prototype,"defaultQueryJSON",null),v=c([q("esri.views.3d.layers.i3s.I3SQueryEngine")],v);class $t{constructor(e){this._objectIdField=e.objectIdField,this._getFeatureExtent=e.getFeatureExtent}getObjectId(e){return e.id}getAttributes(e){var o;const{meta:r,index:i}=e,n={};this._objectIdField&&(n[this._objectIdField]=e.id);const s=(o=r.attributeInfo)==null?void 0:o.attributeData;if(s!=null)for(const a of Object.keys(s))n[a]=te(s[a],i);return n}getAttribute(e,r){var o;if(r===this._objectIdField)return e.id;const{meta:i,index:n}=e,s=(o=i.attributeInfo)==null?void 0:o.attributeData;return s!=null?te(s[r],n):null}getGeometry(e){if(e.geometry)return e.geometry;const[r,i,n,s,o]=this._getFeatureExtent(e,ie);return new L([5],[r,i,n,s,i,n,s,o,n,r,o,n,r,i,n])}getCentroid(e,r){if(e.geometry)return We(new L,e.geometry,r.hasZ,r.hasM);const[i,n,s,o,a,l]=this._getFeatureExtent(e,ie);return new L([0],[(i+o)/2,(n+a)/2,(s+l)/2])}cloneWithGeometry(e,r){const{id:i,index:n,meta:s}=e;return{id:i,index:n,meta:s,geometry:r}}}const ie=V(),Ue=V();let O=class extends Z{constructor(t){super(t),this.events=new Ke}forEach(t){this.forAllFeatures(e=>(t(e),C.CONTINUE))}forEachBounds(t,e){const r=this.getFeatureExtent;for(const i of t)e(r(i,Ue))}forEachInBounds(t,e){this.forAllFeatures(r=>{const i=this.getFeatureExtent(r,ze);return Ce(t,Oe(i,He))&&e(r),C.CONTINUE},r=>{if(A(r.node.serviceMbsInIndexSR,this.sourceSpatialReference,w,this.viewSpatialReference),w[0]>=t[0]&&w[2]<=t[2]&&w[1]>=t[1]&&w[3]<=t[3])return C.CONTINUE;const i=Math.max(t[0],Math.min(w[0],t[2])),n=Math.max(t[1],Math.min(w[1],t[3])),s=w[0]-i,o=w[1]-n;return s*s+o*o<=w[3]*w[3]?C.CONTINUE:C.SKIP})}};c([d({constructOnly:!0})],O.prototype,"featureAdapter",void 0),c([d({constructOnly:!0})],O.prototype,"forAllFeatures",void 0),c([d({constructOnly:!0})],O.prototype,"getFeatureExtent",void 0),c([d({constructOnly:!0})],O.prototype,"sourceSpatialReference",void 0),c([d({constructOnly:!0})],O.prototype,"viewSpatialReference",void 0),O=c([q("esri.views.3d.layers.i3s.I3SQueryFeatureStore")],O);const w=se(0,0,0,0),ze=V(),He=Me();export{f as P,v as d,O as h,$t as o};
