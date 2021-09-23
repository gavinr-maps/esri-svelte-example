var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(t,i,s)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s,l=(e,t)=>{for(var i in t||(t={}))r.call(t,i)&&a(e,i,t[i]);if(s)for(var i of s(t))n.call(t,i)&&a(e,i,t[i]);return e},o=(e,s)=>t(e,i(s));import{w as d,fa as u,fb as p,cd as f,q as c,aM as y,aD as m,r as h,c3 as g,c5 as b,fc as I,dB as F}from"./vendor.d0a39f0f.js";import{t as j,n as _}from"./objectIdUtils.d3b74925.js";import{m as E}from"./FeatureStore.2b302d70.js";import{f as q,g as x}from"./quantizationUtils.2d4b616a.js";import{H as T}from"./QueryEngine.c9f49fa3.js";import{n as O,u as R,i as w}from"./clientSideDefaults.67fdee82.js";import{y as D,u as v,d as S,c as Q,h as M}from"./sourceUtils.f4154c33.js";import"./PooledRBush.4b631a20.js";import"./centroid.1404a86d.js";import"./json.62026198.js";import"./WhereClause.1eaac7f4.js";import"./QueryEngineCapabilities.47963c2d.js";import"./utils.f10afb6d.js";import"./spatialQuerySupport.2755696c.js";const P=F,Z={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:F},C={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function A(e){return m(e)?null!=e.z:!!e.hasZ}function k(e){return m(e)?null!=e.m:!!e.hasM}class G{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[],{features:i}=e,s=this._inferLayerProperties(i,e.fields),r=e.fields||[],n=null!=e.hasM?e.hasM:s.hasM,a=null!=e.hasZ?e.hasZ:s.hasZ,c=!e.spatialReference&&!s.spatialReference,y=c?P:e.spatialReference||s.spatialReference,m=c?Z:null,h=e.geometryType||s.geometryType,g=!h;let b=e.objectIdField||s.objectIdField,I=e.timeInfo;if(!g&&(c&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!h))throw new d("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!b)throw new d("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(s.objectIdField&&b!==s.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${b}" doesn't match the field name "${s.objectIdField}", found in the provided fields`}),b=s.objectIdField),b&&!s.objectIdField){let e=null;r.some((t=>t.name===b&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):r.unshift({alias:b,name:b,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const l of r){if(null==l.name&&(l.name=l.alias),null==l.alias&&(l.alias=l.name),!l.name)throw new d("feature-layer:invalid-field-name","field name is missing",{field:l});if(l.name===b&&(l.type="esriFieldTypeOID"),-1===u.jsonValues.indexOf(l.type))throw new d("feature-layer:invalid-field-type",`invalid type for field "${l.name}"`,{field:l})}const F={};this._requiredFields=[];for(const l of r)if("esriFieldTypeOID"!==l.type&&"esriFieldTypeGlobalID"!==l.type){l.editable=null==l.editable||!!l.editable,l.nullable=null==l.nullable||!!l.nullable;const e=p(l);l.nullable||void 0!==e?F[l.name]=e:this._requiredFields.push(l)}if(this._fieldsIndex=new f(r),this._createDefaultAttributes=O(F,b),I){if(I.startTimeField){const e=this._fieldsIndex.get(I.startTimeField);e?(I.startTimeField=e.name,e.type="esriFieldTypeDate"):I.startTimeField=null}if(I.endTimeField){const e=this._fieldsIndex.get(I.endTimeField);e?(I.endTimeField=e.name,e.type="esriFieldTypeDate"):I.endTimeField=null}if(I.trackIdField){const e=this._fieldsIndex.get(I.trackIdField);e?I.trackIdField=e.name:(I.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:I}}))}I.startTimeField||I.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:I}}),I=null)}const x={warnings:t,featureErrors:[],layerDefinition:o(l({},C),{drawingInfo:R(h),templates:w(F),extent:m,geometryType:h,objectIdField:b,fields:r,hasZ:!!a,hasM:!!n,timeInfo:I}),assignedObjectIds:{}};if(this._queryEngine=new T({fields:r,geometryType:h,hasM:n,hasZ:a,objectIdField:b,spatialReference:y,featureStore:new E({geometryType:h,hasM:n,hasZ:a}),timeInfo:I,cacheSpatialQueries:!0}),!i||!i.length)return this._nextObjectId=j,x;const D=_(b,i);return this._nextObjectId=D+1,await q(i,y),this._loadInitialFeatures(x,i)}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([D(t,i),q(e.adds,t),q(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let i,s,r=null,n=null,a=null;for(const l of e){const e=l.geometry;if(!c(e)&&(r||(r=y(e)),n||(n=e.spatialReference),null==i&&(i=A(e)),null==s&&(s=k(e)),r&&n&&null!=i&&null!=s))break}if(t&&t.length){let e=null;t.some((t=>{const i="esriFieldTypeOID"===t.type,s=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||s}))&&(a=e.name)}return{geometryType:r,spatialReference:n,objectIdField:a,hasM:s,hasZ:i}}_loadInitialFeatures(e,t){const{geometryType:i,hasM:s,hasZ:r,objectIdField:n,spatialReference:a,featureStore:l}=this._queryEngine,o=[];for(const d of t){if(null!=d.uid&&(e.assignedObjectIds[d.uid]=-1),d.geometry&&i!==y(d.geometry)){e.featureErrors.push(v("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),s=S(this._fieldsIndex,t,d.attributes,this._requiredFields,!0,e.warnings);s?e.featureErrors.push(s):(this._assignObjectId(t,d.attributes,!0),d.attributes=t,null!=d.uid&&(e.assignedObjectIds[d.uid]=d.attributes[n]),h(d.geometry)&&(d.geometry=x(d.geometry,d.geometry.spatialReference,a)),o.push(d))}if(l.addMany(g([],o,i,r,s,n)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i]}return e}_applyEdits(e){const{adds:t,updates:i,deletes:s}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),i&&i.length&&this._applyUpdateEdits(r,i),s&&s.length){for(const e of s)r.deleteResults.push(Q(e));this._queryEngine.featureStore.removeManyById(s)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:i}=e,{geometryType:s,hasM:r,hasZ:n,objectIdField:a,spatialReference:l,featureStore:o}=this._queryEngine,d=[];for(const u of t){if(u.geometry&&s!==y(u.geometry)){i.push(v("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),r=S(this._fieldsIndex,t,u.attributes,this._requiredFields);if(r)i.push(r);else{if(this._assignObjectId(t,u.attributes),u.attributes=t,null!=u.uid){const t=u.attributes[a];e.uidToObjectId[u.uid]=t}h(u.geometry)&&(u.geometry=x(M(u.geometry,l),u.geometry.spatialReference,l)),d.push(u),i.push(Q(u.attributes[a]))}}o.addMany(g([],d,s,n,r,a))}_applyUpdateEdits({updateResults:e},t){const{geometryType:i,hasM:s,hasZ:r,objectIdField:n,spatialReference:a,featureStore:l}=this._queryEngine;for(const o of t){const{attributes:t,geometry:d}=o,u=t&&t[n];if(null==u){e.push(v(`Identifier field ${n} missing`));continue}if(!l.has(u)){e.push(v(`Feature with object id ${u} missing`));continue}const p=b(l.getFeature(u),i,r,s);if(h(d)){if(i!==y(d)){e.push(v("Incorrect geometry type."));continue}p.geometry=x(M(d,a),d.spatialReference,a)}if(t){const i=S(this._fieldsIndex,p.attributes,t,this._requiredFields);if(i){e.push(i);continue}}l.add(I(p,i,r,s,n)),e.push(Q(u))}}_assignObjectId(e,t,i=!1){const s=this._queryEngine.objectIdField;i&&t&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++}}export{G as default};
