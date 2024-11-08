import{n as l}from"./compilerUtils-Dw3R0f-Z.js";import{a as m}from"./Accessor-BLX9ikPh.js";import{g as d}from"./Point-Cg0-ChZE.js";import{o as c}from"./projection-B971H0Re.js";import{g as f,z as _,f as y}from"./dehydratedFeatures-BiOblf0d.js";import{p as g,r as P}from"./featureConversionUtils-D14h8iad.js";import{y as C}from"./Field-ybkHhtnK.js";import{t as b}from"./pbfQueryUtils-B0fU-MiS.js";import"./subclass-BZA_h8Db.js";import"./tslib.es6-B3Jf3DVX.js";import"./cast-Bjksrh93.js";import"./writer-DNAwXnhG.js";import"./assets-C43MgM-v.js";import"./index-Bh2oEzTI.js";import"./jsonMap-0cxwUWs2.js";import"./SimpleObservable-KocWTzVy.js";import"./vec3f64-BLpZdpfb.js";import"./Extent-Bf3YTe7m.js";import"./Polyline-D9YkgmM_.js";import"./mathUtils-C4_ghTv4.js";import"./projectBuffer-Bs7GwaPY.js";import"./geodesicConstants-DWQLYX7F.js";import"./aaBoundingBox-BE7cC1jD.js";import"./quantizationUtils-uj_P09aO.js";import"./geometry-D964gYQX.js";import"./jsonUtils-CEfjT-BK.js";import"./OptimizedFeature-6cJ-QFG5.js";import"./OptimizedGeometry-BF8iz5FO.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./enumeration-Ba5njXdz.js";import"./fieldType-BuzM0UHS.js";import"./pbf-BtDZ1BpD.js";function G(s,t){return t}function p(s,t,e,r){switch(e){case 0:return h(s,t+r,0);case 1:return s.originPosition==="lowerLeft"?h(s,t+r,1):M(s,t+r,1)}}function u(s,t,e,r){return e===2?h(s,t,2):p(s,t,e,r)}function A(s,t,e,r){return e===2?h(s,t,3):p(s,t,e,r)}function v(s,t,e,r){return e===3?h(s,t,3):u(s,t,e,r)}function h({translate:s,scale:t},e,r){return s[r]+e*t[r]}function M({translate:s,scale:t},e,r){return s[r]-e*t[r]}class R{constructor(t){this._options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=G,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{},this._missingAttributes=[]}get missingAttributes(){return this._missingAttributes}createFeatureResult(){return new f}finishFeatureResult(t){if(this._options.applyTransform&&(t.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!t.hasZ)return;const e=c(t.geometryType,this._options.sourceSpatialReference,t.spatialReference);if(e!=null)for(const r of t.features)e(r.geometry)}createSpatialReference(){return new d}addField(t,e){t.fields.push(C.fromJSON(e));const r=t.fields.map(i=>i.name);this._attributesConstructor=function(){for(const i of r)this[i]=null}}addFeature(t,e){const r=this._options.maxStringAttributeLength,i=this._options.maxStringAttributeFields;_(e.attributes,i,r,n=>{const o=e.attributes[t.objectIdFieldName];o!=null&&this._missingAttributes.push({objectId:o,attribute:n})}),t.features.push(e)}addQueryGeometry(t,e){const{queryGeometry:r,queryGeometryType:i}=e,n=g(r.clone(),r,!1,!1,this._transform),o=P(n,i,!1,!1);let a=null;switch(i){case"esriGeometryPoint":a="point";break;case"esriGeometryPolygon":a="polygon";break;case"esriGeometryPolyline":a="polyline";break;case"esriGeometryMultipoint":a="multipoint"}o.type=a,t.queryGeometryType=i,t.queryGeometry=o}prepareFeatures(t){switch(this._transform=t.transform??null,this._options.applyTransform&&t.transform&&(this._applyTransform=this._deriveApplyTransform(t)),this._vertexDimension=2,t.hasZ&&this._vertexDimension++,t.hasM&&this._vertexDimension++,t.geometryType){case"point":this.addCoordinate=(e,r,i)=>this.addCoordinatePoint(e,r,i),this.createGeometry=e=>this.createPointGeometry(e);break;case"polygon":this.addCoordinate=(e,r,i)=>this._addCoordinatePolygon(e,r,i),this.createGeometry=e=>this._createPolygonGeometry(e);break;case"polyline":this.addCoordinate=(e,r,i)=>this._addCoordinatePolyline(e,r,i),this.createGeometry=e=>this._createPolylineGeometry(e);break;case"multipoint":this.addCoordinate=(e,r,i)=>this._addCoordinateMultipoint(e,r,i),this.createGeometry=e=>this._createMultipointGeometry(e);break;case"mesh":case"extent":break;default:l(t.geometryType)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,new y(m(),null,new this._attributesConstructor)}allocateCoordinates(){const t=this._lengths.reduce((e,r)=>e+r,0);this._coordinateBuffer=new Float64Array(t*this._vertexDimension),this._coordinateBufferPtr=0}addLength(t,e){this._lengths.length===0&&(this._toAddInCurrentPath=e),this._lengths.push(e)}createPointGeometry(t){const e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e}addCoordinatePoint(t,e,r){const i=this._transform?this._applyTransform(this._transform,e,r,0):e;if(i!=null)switch(r){case 0:t.x=i;break;case 1:t.y=i;break;case 2:t.hasZ?t.z=i:t.m=i;break;case 3:t.m=i}}_transformPathLikeValue(t,e){let r=0;return e<=1&&(r=this._previousCoordinate[e],this._previousCoordinate[e]+=t),this._transform?this._applyTransform(this._transform,t,e,r):t}_addCoordinatePolyline(t,e,r){this._dehydratedAddPointsCoordinate(t.paths,e,r)}_addCoordinatePolygon(t,e,r){this._dehydratedAddPointsCoordinate(t.rings,e,r)}_addCoordinateMultipoint(t,e,r){r===0&&t.points.push([]);const i=this._transformPathLikeValue(e,r);t.points[t.points.length-1].push(i)}_createPolygonGeometry(t){return{type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createPolylineGeometry(t){return{type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createMultipointGeometry(t){return{type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_dehydratedAddPointsCoordinate(t,e,r){r===0&&this._toAddInCurrentPath--==0&&(t.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const i=this._transformPathLikeValue(e,r),n=t[t.length-1],o=this._coordinateBuffer;if(o){if(r===0){const a=this._coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT;n.push(new Float64Array(o.buffer,a,this._vertexDimension))}o[this._coordinateBufferPtr++]=i}}_deriveApplyTransform(t){const{hasZ:e,hasM:r}=t;return e&&r?v:e?u:r?A:p}}class T{_parseFeatureQuery(t){var n;const e=new R(t.options),r=b(t.buffer,e),i={...r,spatialReference:(n=r.spatialReference)==null?void 0:n.toJSON(),fields:r.fields?r.fields.map(o=>o.toJSON()):void 0,missingAttributes:e.missingAttributes};return Promise.resolve(i)}}function nt(){return new T}export{nt as default};