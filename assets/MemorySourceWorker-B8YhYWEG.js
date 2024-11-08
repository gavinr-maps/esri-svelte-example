import{b as I}from"./subclass-BZA_h8Db.js";import{p as b,u as S}from"./jsonUtils-CEfjT-BK.js";import{a1 as v}from"./Point-Cg0-ChZE.js";import{e as O,n as Q,t as Z}from"./featureConversionUtils-D14h8iad.js";import{t as A,n as C}from"./objectIdUtils-4dd1rf9p.js";import{m as $}from"./FeatureStore-Dr0GQdbp.js";import{x as E,j as _}from"./queryUtils-O-WFKoZd.js";import{V as k}from"./QueryEngine-DrzbS-Dm.js";import{a as P,u as G,l as L}from"./clientSideDefaults-BCN5Jkqv.js";import{j as W,f as g,p as T,d as j,y as w}from"./sourceUtils--DUSj3Of.js";import{Z as D}from"./FieldsIndex-DpwHKAMX.js";import{i as z}from"./fieldType-BuzM0UHS.js";import{K as H,H as U}from"./fieldUtils-tmQlKvWo.js";import{i as B}from"./date-DlqISzcw.js";import"./Extent-Bf3YTe7m.js";import"./tslib.es6-B3Jf3DVX.js";import"./Polyline-D9YkgmM_.js";import"./writer-DNAwXnhG.js";import"./mathUtils-C4_ghTv4.js";import"./Accessor-BLX9ikPh.js";import"./cast-Bjksrh93.js";import"./assets-C43MgM-v.js";import"./index-Bh2oEzTI.js";import"./jsonMap-0cxwUWs2.js";import"./aaBoundingBox-BE7cC1jD.js";import"./OptimizedFeature-6cJ-QFG5.js";import"./OptimizedGeometry-BF8iz5FO.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./Evented-BHRw9x22.js";import"./BoundsStore-BhV7QrYA.js";import"./PooledRBush-D7s4d_Fs.js";import"./quickselect-QQC62dOK.js";import"./timeSupport-T1g9-JyG.js";import"./optimizedFeatureQueryEngineAdapter-BOPMFOve.js";import"./centroid-DdLmOD72.js";import"./projection-B971H0Re.js";import"./SimpleObservable-KocWTzVy.js";import"./vec3f64-BLpZdpfb.js";import"./projectBuffer-Bs7GwaPY.js";import"./geodesicConstants-DWQLYX7F.js";import"./normalizeUtils-EVmAQ-ak.js";import"./normalizeUtilsCommon-dT81xWiM.js";import"./geometry-D964gYQX.js";import"./utils-6jMaHUrH.js";import"./utils-Bema0iXE.js";import"./json-Wa8cmqdu.js";import"./LRUCache-B_PHMSGm.js";import"./MemCache-Dx1v3xLC.js";import"./WhereClause-BNiy948d.js";import"./TimeOnly-DOn_Hy89.js";import"./UnknownTimeZone-BkowvBs8.js";import"./locale-C9TlLpzi.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./quantizationUtils-uj_P09aO.js";import"./utils-Bh2cHa3t.js";import"./screenUtils-_ZIvrt5o.js";import"./timeUtils-8fb_2oAt.js";import"./heatmapUtils-Dwiv9IEa.js";import"./vec42-YcqnINSP.js";import"./common-DQOJ18NT.js";import"./vec4f64-o2zAXfmz.js";import"./utils-BwQ00KBJ.js";import"./Basemap-DVYOaWHz.js";import"./Collection-CEdjem1-.js";import"./shared-B3wH2qpO.js";import"./collectionUtils-D_lHIu88.js";import"./Loadable-BabW5Xcc.js";import"./Promise-B2Hu02L7.js";import"./loadAll-B6mYSptb.js";import"./asyncUtils-CWX51uTe.js";import"./Portal-C10FKnaA.js";import"./PortalItem-DzgXrpyc.js";import"./persistableUrlUtils-fa1mAujs.js";import"./messages-OmQvZhAg.js";import"./writeUtils-Dz7BsE1e.js";import"./layerUtils-BrNoooE9.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-GpOFENPA.js";import"./utils-rwwdQ1Ui.js";import"./ClassBreaksDefinition-CS8Z_VNX.js";import"./enumeration-Ba5njXdz.js";import"./SnappingCandidate-O5eRSE6e.js";import"./Scheduler-CJu5awNf.js";import"./reactiveUtils-C5zUhJQJ.js";import"./signal-D4lghLjV.js";import"./debugFlags-BF6Z0j0F.js";import"./capabilities-Y9lFlGVh.js";import"./defaultsJSON-GKolV7NZ.js";import"./date-DLgTylpo.js";import"./intl-CChhNOV8.js";const N=v,V={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:v},J={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!0,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0,supportsQueryWithCacheHint:!0}};function K(h){return S(h)?h.z!=null:!!h.hasZ}function X(h){return S(h)?h.m!=null:!!h.hasM}class Zt{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e){const i=[],{features:o}=e,s=this._inferLayerProperties(o,e.fields),l=e.fields||[],u=e.hasM!=null?e.hasM:!!s.hasM,c=e.hasZ!=null?e.hasZ:!!s.hasZ,d=!e.spatialReference&&!s.spatialReference,p=d?N:e.spatialReference||s.spatialReference,y=d?V:null,m=e.geometryType||s.geometryType,a=!m;let t=e.objectIdField||s.objectIdField,n=e.timeInfo;const f=new D(l);if(!a&&(d&&i.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!m))throw new I("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!t)throw new I("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(s.objectIdField&&t!==s.objectIdField&&(i.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${t}" doesn't match the field name "${s.objectIdField}", found in the provided fields`}),t=s.objectIdField),t&&!s.objectIdField){const r=f.get(t);r?(t=r.name,r.type="esriFieldTypeOID",r.editable=!1,r.nullable=!1):l.unshift({alias:t,name:t,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const r of l){if(r.name==null&&(r.name=r.alias),r.alias==null&&(r.alias=r.name),!r.name)throw new I("feature-layer:invalid-field-name","field name is missing",{field:r});if(r.name===t&&(r.type="esriFieldTypeOID"),!z.jsonValues.includes(r.type))throw new I("feature-layer:invalid-field-type",`invalid type for field "${r.name}"`,{field:r});r.length==null&&(r.length=H(r))}const F={};for(const r of l)if(r.type!=="esriFieldTypeOID"&&r.type!=="esriFieldTypeGlobalID"){const q=U(r);q!==void 0&&(F[r.name]=q)}if(n){if(n.startTimeField){const r=f.get(n.startTimeField);r?(n.startTimeField=r.name,r.type="esriFieldTypeDate"):n.startTimeField=null}if(n.endTimeField){const r=f.get(n.endTimeField);r?(n.endTimeField=r.name,r.type="esriFieldTypeDate"):n.endTimeField=null}if(n.trackIdField){const r=f.get(n.trackIdField);r?n.trackIdField=r.name:(n.trackIdField=null,i.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:n}}))}n.startTimeField||n.endTimeField||(i.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:n}}),n=null)}const x=f.dateFields.length?{timeZoneIANA:e.dateFieldsTimeZone??B}:null;this._createDefaultAttributes=P(F,t);const R={warnings:i,featureErrors:[],layerDefinition:{...J,drawingInfo:G(m),templates:L(F),extent:y,geometryType:m,objectIdField:t,fields:l,hasZ:c,hasM:u,timeInfo:n,dateFieldsTimeReference:x},assignedObjectIds:{}};if(this._queryEngine=new k({fieldsIndex:D.fromLayerJSON({fields:l,timeInfo:n,dateFieldsTimeReference:x}),geometryType:m,hasM:u,hasZ:c,objectIdField:t,spatialReference:p,featureStore:new $({geometryType:m,hasM:u,hasZ:c}),timeInfo:n}),!(o!=null&&o.length))return this._nextObjectId=A,R;const M=C(t,o);return this._nextObjectId=M+1,await E(o,p),this._loadInitialFeatures(R,o)}async applyEdits(e){const{spatialReference:i,geometryType:o}=this._queryEngine;return await Promise.all([W(i,o),E(e.adds,i),E(e.updates,i)]),this._applyEdits(e)}queryFeatures(e,i={}){return this._queryEngine.executeQuery(e,i.signal)}queryFeatureCount(e,i={}){return this._queryEngine.executeQueryForCount(e,i.signal)}queryObjectIds(e,i={}){return this._queryEngine.executeQueryForIds(e,i.signal)}queryExtent(e,i={}){return this._queryEngine.executeQueryForExtent(e,i.signal)}querySnapping(e,i={}){return this._queryEngine.executeQueryForSnapping(e,i.signal)}_inferLayerProperties(e,i){let o,s,l=null,u=null,c=null;for(const d of e){const p=d.geometry;if(p!=null&&(l||(l=b(p)),u||(u=p.spatialReference),o==null&&(o=K(p)),s==null&&(s=X(p)),l&&u&&o!=null&&s!=null))break}if(i&&i.length){let d=null;i.some(p=>{const y=p.type==="esriFieldTypeOID",m=!p.type&&p.name&&p.name.toLowerCase()==="objectid";return d=p,y||m})&&(c=d.name)}return{geometryType:l,spatialReference:u,objectIdField:c,hasM:s,hasZ:o}}async _loadInitialFeatures(e,i){const{geometryType:o,hasM:s,hasZ:l,objectIdField:u,spatialReference:c,featureStore:d,fieldsIndex:p}=this._queryEngine,y=[];for(const t of i){if(t.uid!=null&&(e.assignedObjectIds[t.uid]=-1),t.geometry&&o!==b(t.geometry)){e.featureErrors.push(g("Incorrect geometry type."));continue}const n=this._createDefaultAttributes(),f=T(p,n,t.attributes,!0);f?e.featureErrors.push(f):(this._assignObjectId(n,t.attributes,!0),t.attributes=n,t.uid!=null&&(e.assignedObjectIds[t.uid]=t.attributes[u]),t.geometry!=null&&(t.geometry=_(t.geometry,t.geometry.spatialReference,c)),y.push(t))}d.addMany(O([],y,o,l,s,u));const{fullExtent:m,timeExtent:a}=await this._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=m,a){const{start:t,end:n}=a;e.layerDefinition.timeInfo.timeExtent=[t,n]}return e}async _applyEdits(e){const{adds:i,updates:o,deletes:s}=e,l={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(i!=null&&i.length&&this._applyAddEdits(l,i),o!=null&&o.length&&this._applyUpdateEdits(l,o),s==null?void 0:s.length){for(const d of s)l.deleteResults.push(j(d));this._queryEngine.featureStore.removeManyById(s)}const{fullExtent:u,timeExtent:c}=await this._queryEngine.fetchRecomputedExtents();return{extent:u,timeExtent:c,featureEditResults:l}}_applyAddEdits(e,i){const{addResults:o}=e,{geometryType:s,hasM:l,hasZ:u,objectIdField:c,spatialReference:d,featureStore:p,fieldsIndex:y}=this._queryEngine,m=[];for(const a of i){if(a.geometry&&s!==b(a.geometry)){o.push(g("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=T(y,t,a.attributes);if(n)o.push(n);else{if(this._assignObjectId(t,a.attributes),a.attributes=t,a.uid!=null){const f=a.attributes[c];e.uidToObjectId[a.uid]=f}if(a.geometry!=null){const f=a.geometry.spatialReference??d;a.geometry=_(w(a.geometry,f),f,d)}m.push(a),o.push(j(a.attributes[c]))}}p.addMany(O([],m,s,u,l,c))}_applyUpdateEdits({updateResults:e},i){const{geometryType:o,hasM:s,hasZ:l,objectIdField:u,spatialReference:c,featureStore:d,fieldsIndex:p}=this._queryEngine;for(const y of i){const{attributes:m,geometry:a}=y,t=m==null?void 0:m[u];if(t==null){e.push(g(`Identifier field ${u} missing`));continue}if(!d.has(t)){e.push(g(`Feature with object id ${t} missing`));continue}const n=Q(d.getFeature(t),o,l,s);if(a!=null){if(o!==b(a)){e.push(g("Incorrect geometry type."));continue}const f=a.spatialReference??c;n.geometry=_(w(a,f),f,c)}if(m){const f=T(p,n.attributes,m);if(f){e.push(f);continue}}d.add(Z(n,o,l,s,u)),e.push(j(t))}}_assignObjectId(e,i,o=!1){const s=this._queryEngine.objectIdField;o&&i&&isFinite(i[s])?e[s]=i[s]:e[s]=this._nextObjectId++}}export{Zt as default};
