import{U as D}from"./assets-C43MgM-v.js";import{d as Q}from"./asyncUtils-CWX51uTe.js";import{b as _,n as v}from"./subclass-BZA_h8Db.js";import{c as Z}from"./Accessor-BLX9ikPh.js";import{p as R}from"./jsonUtils-CEfjT-BK.js";import{a1 as I,s as A}from"./Point-Cg0-ChZE.js";import{o as P,r as G,e as M,n as N,t as z}from"./featureConversionUtils-D14h8iad.js";import{m as U}from"./FeatureStore-Dr0GQdbp.js";import{x as E,j as b}from"./queryUtils-O-WFKoZd.js";import{V as B}from"./QueryEngine-DrzbS-Dm.js";import{I as H,N as J,E as L}from"./geojson-DMG1YeVa.js";import{l as V,a as W,u as K}from"./clientSideDefaults-BCN5Jkqv.js";import{j as Y,p as T,d as w,f as F,y as $}from"./sourceUtils--DUSj3Of.js";import{Z as O}from"./FieldsIndex-DpwHKAMX.js";import{i as X}from"./fieldType-BuzM0UHS.js";import{H as ee,K as te}from"./fieldUtils-tmQlKvWo.js";import{i as ie}from"./date-DlqISzcw.js";import"./index-Bh2oEzTI.js";import"./tslib.es6-B3Jf3DVX.js";import"./Extent-Bf3YTe7m.js";import"./Polyline-D9YkgmM_.js";import"./writer-DNAwXnhG.js";import"./mathUtils-C4_ghTv4.js";import"./cast-Bjksrh93.js";import"./jsonMap-0cxwUWs2.js";import"./aaBoundingBox-BE7cC1jD.js";import"./OptimizedFeature-6cJ-QFG5.js";import"./OptimizedGeometry-BF8iz5FO.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./Evented-BHRw9x22.js";import"./BoundsStore-BhV7QrYA.js";import"./PooledRBush-D7s4d_Fs.js";import"./quickselect-QQC62dOK.js";import"./timeSupport-T1g9-JyG.js";import"./optimizedFeatureQueryEngineAdapter-BOPMFOve.js";import"./centroid-DdLmOD72.js";import"./projection-B971H0Re.js";import"./SimpleObservable-KocWTzVy.js";import"./vec3f64-BLpZdpfb.js";import"./projectBuffer-Bs7GwaPY.js";import"./geodesicConstants-DWQLYX7F.js";import"./normalizeUtils-EVmAQ-ak.js";import"./normalizeUtilsCommon-dT81xWiM.js";import"./geometry-D964gYQX.js";import"./utils-6jMaHUrH.js";import"./utils-Bema0iXE.js";import"./json-Wa8cmqdu.js";import"./LRUCache-B_PHMSGm.js";import"./MemCache-Dx1v3xLC.js";import"./WhereClause-BNiy948d.js";import"./TimeOnly-DOn_Hy89.js";import"./UnknownTimeZone-BkowvBs8.js";import"./locale-C9TlLpzi.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./quantizationUtils-uj_P09aO.js";import"./utils-Bh2cHa3t.js";import"./screenUtils-_ZIvrt5o.js";import"./timeUtils-8fb_2oAt.js";import"./heatmapUtils-Dwiv9IEa.js";import"./vec42-YcqnINSP.js";import"./common-DQOJ18NT.js";import"./vec4f64-o2zAXfmz.js";import"./utils-BwQ00KBJ.js";import"./Basemap-DVYOaWHz.js";import"./Collection-CEdjem1-.js";import"./shared-B3wH2qpO.js";import"./collectionUtils-D_lHIu88.js";import"./Loadable-BabW5Xcc.js";import"./Promise-B2Hu02L7.js";import"./loadAll-B6mYSptb.js";import"./Portal-C10FKnaA.js";import"./PortalItem-DzgXrpyc.js";import"./persistableUrlUtils-fa1mAujs.js";import"./messages-OmQvZhAg.js";import"./writeUtils-Dz7BsE1e.js";import"./layerUtils-BrNoooE9.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-GpOFENPA.js";import"./utils-rwwdQ1Ui.js";import"./ClassBreaksDefinition-CS8Z_VNX.js";import"./enumeration-Ba5njXdz.js";import"./SnappingCandidate-O5eRSE6e.js";import"./Scheduler-CJu5awNf.js";import"./reactiveUtils-C5zUhJQJ.js";import"./signal-D4lghLjV.js";import"./debugFlags-BF6Z0j0F.js";import"./date-DLgTylpo.js";import"./capabilities-Y9lFlGVh.js";import"./defaultsJSON-GKolV7NZ.js";import"./intl-CChhNOV8.js";const re={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsQueryWithCacheHint:!0,supportsQueryWithDistance:!0,supportsQueryWithResultType:!0,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class Mt{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e,t={}){this._loadOptions={url:e.url,customParameters:e.customParameters};const s=[],[i]=await Promise.all([e.url?this._fetch(t==null?void 0:t.signal):null,this._checkProjection(e.spatialReference)]),r=H(i,{geometryType:e.geometryType}),a=e.fields||r.fields||[],m=e.hasZ!=null?e.hasZ:r.hasZ,u=r.geometryType;let c=e.objectIdField||r.objectIdFieldName||"__OBJECTID";const h=e.spatialReference||I;let n=e.timeInfo;a===r.fields&&r.unknownFields.length>0&&s.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:r.unknownFields}});const p=new O(a);let l=p.get(c);l?(l.type!=="esriFieldTypeString"&&(l.type="esriFieldTypeOID"),l.editable=!1,l.nullable=!1,c=l.name):(l={alias:c,name:c,type:r.objectIdFieldType==="string"?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},a.unshift(l));const y={};for(const o of a){if(o.name==null&&(o.name=o.alias),o.alias==null&&(o.alias=o.name),!o.name)throw new _("geojson-layer:invalid-field-name","field name is missing",{field:o});if(!X.jsonValues.includes(o.type))throw new _("geojson-layer:invalid-field-type",`invalid type for field "${o.name}"`,{field:o});if(o.name!==l.name){const g=ee(o);g!==void 0&&(y[o.name]=g)}o.length==null&&(o.length=te(o))}if(n){if(n.startTimeField){const o=p.get(n.startTimeField);o?(n.startTimeField=o.name,o.type="esriFieldTypeDate"):n.startTimeField=null}if(n.endTimeField){const o=p.get(n.endTimeField);o?(n.endTimeField=o.name,o.type="esriFieldTypeDate"):n.endTimeField=null}if(n.trackIdField){const o=p.get(n.trackIdField);o?n.trackIdField=o.name:(n.trackIdField=null,s.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:n}}))}n.startTimeField||n.endTimeField||(s.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:n}}),n=null)}const d=u?K(u):void 0,j=p.dateFields.length?{timeZoneIANA:ie}:null,f={warnings:s,featureErrors:[],layerDefinition:{...re,drawingInfo:d??void 0,templates:V(y),extent:void 0,geometryType:u,objectIdField:c,fields:a,hasZ:!!m,timeInfo:n,dateFieldsTimeReference:j}};this._queryEngine=new B({fieldsIndex:O.fromLayerJSON({fields:a,timeInfo:n,dateFieldsTimeReference:j}),geometryType:u,hasM:!1,hasZ:m,objectIdField:c,spatialReference:h,timeInfo:n,featureStore:new U({geometryType:u,hasM:!1,hasZ:m})});const q=this._queryEngine.fieldsIndex.requiredFields.indexOf(l);q>-1&&this._queryEngine.fieldsIndex.requiredFields.splice(q,1),this._createDefaultAttributes=W(y,c);const x=await this._createFeatures(i);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,x);const k=this._normalizeFeatures(x,f.featureErrors);this._queryEngine.featureStore.addMany(k);const{fullExtent:C,timeExtent:S}=await this._queryEngine.fetchRecomputedExtents();if(f.layerDefinition.extent=C,S){const{start:o,end:g}=S;f.layerDefinition.timeInfo.timeExtent=[o,g]}return f}async applyEdits(e){const{spatialReference:t,geometryType:s}=this._queryEngine;return await Promise.all([Y(t,s),E(e.adds,t),E(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var i;this._loadOptions.customParameters=e,(i=this._snapshotTask)==null||i.abort(),this._snapshotTask=Q(this._snapshotFeatures),this._snapshotTask.promise.then(r=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,r);const a=this._normalizeFeatures(r);a&&this._queryEngine.featureStore.addMany(a)},r=>{this._queryEngine.featureStore.clear(),Z(r)||v.getLogger("esri.layers.GeoJSONLayer").error(new _("geojson-layer:refresh","An error occurred during refresh",{error:r}))}),await this._waitSnapshotComplete();const{fullExtent:t,timeExtent:s}=await this._queryEngine.fetchRecomputedExtents();return{extent:t,timeExtent:s}}async _createFeatures(e){if(e==null)return[];const{geometryType:t,hasZ:s,objectIdField:i}=this._queryEngine,r=J(e,{geometryType:t,hasZ:s,objectIdField:i});if(!A(this._queryEngine.spatialReference,I))for(const a of r)a.geometry!=null&&(a.geometry=P(b(G(a.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),I,this._queryEngine.spatialReference)));return r}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:s}=this._loadOptions,i=(await D(t??"",{responseType:"json",query:{...s},signal:e})).data;return L(i),i}_normalizeFeatures(e,t){const{objectIdField:s,fieldsIndex:i}=this._queryEngine,r=[];for(const a of e){const m=this._createDefaultAttributes(),u=T(i,m,a.attributes,!0);u?t==null||t.push(u):(this._assignObjectId(m,a.attributes,!0),a.attributes=m,a.objectId=m[s],r.push(a))}return r}async _applyEdits(e){const{adds:t,updates:s,deletes:i}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t!=null&&t.length&&this._applyAddEdits(r,t),s!=null&&s.length&&this._applyUpdateEdits(r,s),i==null?void 0:i.length){for(const u of i)r.deleteResults.push(w(u));this._queryEngine.featureStore.removeManyById(i)}const{fullExtent:a,timeExtent:m}=await this._queryEngine.fetchRecomputedExtents();return{extent:a,timeExtent:m,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:i,hasM:r,hasZ:a,objectIdField:m,spatialReference:u,featureStore:c,fieldsIndex:h}=this._queryEngine,n=[];for(const p of t){if(p.geometry&&i!==R(p.geometry)){s.push(F("Incorrect geometry type."));continue}const l=this._createDefaultAttributes(),y=T(h,l,p.attributes);if(y)s.push(y);else{if(this._assignObjectId(l,p.attributes),p.attributes=l,p.uid!=null){const d=p.attributes[m];e.uidToObjectId[p.uid]=d}if(p.geometry!=null){const d=p.geometry.spatialReference??u;p.geometry=b($(p.geometry,d),d,u)}n.push(p),s.push(w(p.attributes[m]))}}c.addMany(M([],n,i,a,r,m))}_applyUpdateEdits({updateResults:e},t){const{geometryType:s,hasM:i,hasZ:r,objectIdField:a,spatialReference:m,featureStore:u,fieldsIndex:c}=this._queryEngine;for(const h of t){const{attributes:n,geometry:p}=h,l=n==null?void 0:n[a];if(l==null){e.push(F(`Identifier field ${a} missing`));continue}if(!u.has(l)){e.push(F(`Feature with object id ${l} missing`));continue}const y=N(u.getFeature(l),s,r,i);if(p!=null){if(s!==R(p)){e.push(F("Incorrect geometry type."));continue}const d=p.spatialReference??m;y.geometry=b($(p,d),d,m)}if(n){const d=T(c,y.attributes,n);if(d){e.push(d);continue}}u.add(z(y,s,r,i,a)),e.push(w(l))}}_createObjectIdGenerator(e,t){const s=e.fieldsIndex.get(e.objectIdField);if(s.type==="esriFieldTypeString")return()=>s.name+"-"+Date.now().toString(16);let i=Number.NEGATIVE_INFINITY;for(const r of t)r.objectId&&(i=Math.max(i,r.objectId));return i=Math.max(0,i)+1,()=>i++}_assignObjectId(e,t,s=!1){const i=this._queryEngine.objectIdField;e[i]=s&&i in t?t[i]:this._objectIdGenerator()}async _checkProjection(e){try{await E(I,e)}catch{throw new _("geojson-layer","Projection not supported")}}}export{Mt as default};