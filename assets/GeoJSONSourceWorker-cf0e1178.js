import{cB as _,E as I,ab as C,cC as Q,ac as v,cD as Z,b as A,s as P,d as G,H as N,cE as R}from"./index-27db053b.js";import{r as M,s as z,e as B,n as H,t as J}from"./featureConversionUtils-94d8cb55.js";import{m as L}from"./FeatureStore-24ea9b7a.js";import{x as F,j as b}from"./projectionSupport-7748729a.js";import{W}from"./QueryEngine-21ab1267.js";import{I as U,N as V,E as K}from"./geojson-fa856ee9.js";import{o as Y,a as X,i as ee}from"./clientSideDefaults-b5747dee.js";import{I as te,p as T,d as w,f as E,w as O}from"./sourceUtils-e3efff26.js";import{Z as k}from"./FieldsIndex-f11b6b69.js";import{i as ie}from"./fieldType-c94915e3.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./BoundsStore-2dd95b5d.js";import"./PooledRBush-aa8de44c.js";import"./timeSupport-3166af75.js";import"./json-48e3ea08.js";import"./LRUCache-016147c2.js";import"./WhereClause-2c0f1d82.js";import"./TimeOnly-b2446565.js";import"./UnknownTimeZone-08907062.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./quantizationUtils-afe461ea.js";import"./utils-d11ec5aa.js";import"./heatmapUtils-37a4ad14.js";import"./vec4f64-3c9d0901.js";import"./utils-faae66a1.js";import"./generateRendererUtils-1bbd9efe.js";import"./RenderState-1d6218ee.js";import"./date-294ce3fb.js";import"./defaultsJSON-b087dd4d.js";const se={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class Qe{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e,t={}){this._loadOptions={url:e.url,customParameters:e.customParameters};const r=[],[i]=await Promise.all([e.url?this._fetch(t==null?void 0:t.signal):null,this._checkProjection(e.spatialReference)]),s=U(i,{geometryType:e.geometryType}),o=e.fields||s.fields||[],d=e.hasZ!=null?e.hasZ:s.hasZ,p=s.geometryType;let m=e.objectIdField||s.objectIdFieldName||"__OBJECTID";const h=e.spatialReference||_;let n=e.timeInfo;o===s.fields&&s.unknownFields.length>0&&r.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:s.unknownFields}});const l=new k(o);let u=l.get(m);u?(u.type!=="esriFieldTypeString"&&(u.type="esriFieldTypeOID"),u.editable=!1,u.nullable=!1,m=u.name):(u={alias:m,name:m,type:s.objectIdFieldType==="string"?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o.unshift(u));const y={};for(const a of o){if(a.name==null&&(a.name=a.alias),a.alias==null&&(a.alias=a.name),!a.name)throw new I("geojson-layer:invalid-field-name","field name is missing",{field:a});if(!ie.jsonValues.includes(a.type))throw new I("geojson-layer:invalid-field-type",`invalid type for field "${a.name}"`,{field:a});if(a.name!==u.name){const g=C(a);g!==void 0&&(y[a.name]=g)}a.length==null&&(a.length=Q(a))}if(n){if(n.startTimeField){const a=l.get(n.startTimeField);a?(n.startTimeField=a.name,a.type="esriFieldTypeDate"):n.startTimeField=null}if(n.endTimeField){const a=l.get(n.endTimeField);a?(n.endTimeField=a.name,a.type="esriFieldTypeDate"):n.endTimeField=null}if(n.trackIdField){const a=l.get(n.trackIdField);a?n.trackIdField=a.name:(n.trackIdField=null,r.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:n}}))}n.startTimeField||n.endTimeField||(r.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:n}}),n=null)}const c=p?Y(p):void 0,j=l.dateFields.length?{timeZoneIANA:v}:null,f={warnings:r,featureErrors:[],layerDefinition:{...se,drawingInfo:c??void 0,templates:X(y),extent:void 0,geometryType:p,objectIdField:m,fields:o,hasZ:!!d,timeInfo:n,dateFieldsTimeReference:j}};this._queryEngine=new W({fieldsIndex:k.fromLayerJSON({fields:o,timeInfo:n,dateFieldsTimeReference:j}),geometryType:p,hasM:!1,hasZ:d,objectIdField:m,spatialReference:h,timeInfo:n,featureStore:new L({geometryType:p,hasM:!1,hasZ:d}),cacheSpatialQueries:!0});const q=this._queryEngine.fieldsIndex.requiredFields.indexOf(u);q>-1&&this._queryEngine.fieldsIndex.requiredFields.splice(q,1),this._createDefaultAttributes=ee(y,m);const x=await this._createFeatures(i);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,x);const D=this._normalizeFeatures(x,f.featureErrors);this._queryEngine.featureStore.addMany(D);const{fullExtent:$,timeExtent:S}=await this._queryEngine.fetchRecomputedExtents();if(f.layerDefinition.extent=$,S){const{start:a,end:g}=S;f.layerDefinition.timeInfo.timeExtent=[a,g]}return f}async applyEdits(e){const{spatialReference:t,geometryType:r}=this._queryEngine;return await Promise.all([te(t,r),F(e.adds,t),F(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var i;this._loadOptions.customParameters=e,(i=this._snapshotTask)==null||i.abort(),this._snapshotTask=Z(this._snapshotFeatures),this._snapshotTask.promise.then(s=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,s);const o=this._normalizeFeatures(s);o&&this._queryEngine.featureStore.addMany(o)},s=>{this._queryEngine.featureStore.clear(),A(s)||P.getLogger("esri.layers.GeoJSONLayer").error(new I("geojson-layer:refresh","An error occurred during refresh",{error:s}))}),await this._waitSnapshotComplete();const{fullExtent:t,timeExtent:r}=await this._queryEngine.fetchRecomputedExtents();return{extent:t,timeExtent:r}}async _createFeatures(e){if(e==null)return[];const{geometryType:t,hasZ:r,objectIdField:i}=this._queryEngine,s=V(e,{geometryType:t,hasZ:r,objectIdField:i});if(!G(this._queryEngine.spatialReference,_))for(const o of s)o.geometry!=null&&(o.geometry=M(b(z(o.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),_,this._queryEngine.spatialReference)));return s}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:r}=this._loadOptions,i=(await N(t,{responseType:"json",query:{...r},signal:e})).data;return K(i),i}_normalizeFeatures(e,t){const{objectIdField:r,fieldsIndex:i}=this._queryEngine,s=[];for(const o of e){const d=this._createDefaultAttributes(),p=T(i,d,o.attributes,!0);p?t==null||t.push(p):(this._assignObjectId(d,o.attributes,!0),o.attributes=d,o.objectId=d[r],s.push(o))}return s}async _applyEdits(e){const{adds:t,updates:r,deletes:i}=e,s={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t!=null&&t.length&&this._applyAddEdits(s,t),r!=null&&r.length&&this._applyUpdateEdits(s,r),i==null?void 0:i.length){for(const p of i)s.deleteResults.push(w(p));this._queryEngine.featureStore.removeManyById(i)}const{fullExtent:o,timeExtent:d}=await this._queryEngine.fetchRecomputedExtents();return{extent:o,timeExtent:d,featureEditResults:s}}_applyAddEdits(e,t){const{addResults:r}=e,{geometryType:i,hasM:s,hasZ:o,objectIdField:d,spatialReference:p,featureStore:m,fieldsIndex:h}=this._queryEngine,n=[];for(const l of t){if(l.geometry&&i!==R(l.geometry)){r.push(E("Incorrect geometry type."));continue}const u=this._createDefaultAttributes(),y=T(h,u,l.attributes);if(y)r.push(y);else{if(this._assignObjectId(u,l.attributes),l.attributes=u,l.uid!=null){const c=l.attributes[d];e.uidToObjectId[l.uid]=c}if(l.geometry!=null){const c=l.geometry.spatialReference??p;l.geometry=b(O(l.geometry,c),c,p)}n.push(l),r.push(w(l.attributes[d]))}}m.addMany(B([],n,i,o,s,d))}_applyUpdateEdits({updateResults:e},t){const{geometryType:r,hasM:i,hasZ:s,objectIdField:o,spatialReference:d,featureStore:p,fieldsIndex:m}=this._queryEngine;for(const h of t){const{attributes:n,geometry:l}=h,u=n==null?void 0:n[o];if(u==null){e.push(E(`Identifier field ${o} missing`));continue}if(!p.has(u)){e.push(E(`Feature with object id ${u} missing`));continue}const y=H(p.getFeature(u),r,s,i);if(l!=null){if(r!==R(l)){e.push(E("Incorrect geometry type."));continue}const c=l.spatialReference??d;y.geometry=b(O(l,c),c,d)}if(n){const c=T(m,y.attributes,n);if(c){e.push(c);continue}}p.add(J(y,r,s,i,o)),e.push(w(u))}}_createObjectIdGenerator(e,t){const r=e.fieldsIndex.get(e.objectIdField);if(r.type==="esriFieldTypeString")return()=>r.name+"-"+Date.now().toString(16);let i=Number.NEGATIVE_INFINITY;for(const s of t)s.objectId&&(i=Math.max(i,s.objectId));return i=Math.max(0,i)+1,()=>i++}_assignObjectId(e,t,r=!1){const i=this._queryEngine.objectIdField;e[i]=r&&i in t?t[i]:this._objectIdGenerator()}async _checkProjection(e){try{await F(_,e)}catch{throw new I("geojson-layer","Projection not supported")}}}export{Qe as default};
