import{c as i,f as s,g as T,de as B,db as G,dd as x,dw as F,aI as h,V as w,a5 as N,c3 as I,dx as J,dy as S,dz as M,dA as $,l as z,D as k,br as A,d as W,bz as U,bx as Z,by as q,aJ as H,dB as K,aB as L,b0 as f,aZ as V,aO as Q,dC as D,bO as X}from"./index-XUlETPJZ.js";import{m as Y}from"./MultiOriginJSONSupport-7Qbe2KAC.js";import ee from"./FeatureLayer-6J9yuCK0.js";import{h as te}from"./GraphicsLayer-T4JM27yc.js";import{n as re}from"./objectIdUtils-GktMsX8e.js";import{a as oe}from"./BlendLayer-zma1Sosw.js";import{u as ie}from"./OperationalLayer-JqRxI3_b.js";import{j as le}from"./PortalLayer-TJUoDBMJ.js";import{t as ae}from"./ScaleRangeLayer-yPctuALK.js";import{y as E}from"./Field-BZWZB6E0.js";import"./UniqueValueRenderer-rNHfFDwn.js";import"./LegendOptions-KuTIRvg3.js";import"./diffUtils-FaRWg0DV.js";import"./SizeVariable-eDAmtsU9.js";import"./colorRamps-ucREs6wJ.js";import"./lengthUtils-uQbLh4h5.js";import"./ColorStop-FEjpkiot.js";import"./jsonUtils-FMkyl16O.js";import"./styleUtils-dULYu5Y-.js";import"./jsonUtils-RoKG_qA6.js";import"./DictionaryLoader-uS0Mi-We.js";import"./LRUCache-P08N0BvZ.js";import"./Version-Wg9g_vDJ.js";import"./FieldsIndex-zLaqSf7A.js";import"./UnknownTimeZone-6z8cnIoM.js";import"./heatmapUtils-mFECwRl0.js";import"./vec4f64-_4WP0ZGf.js";import"./commonProperties-vCf9FiI6.js";import"./ElevationInfo-W4L0wkkh.js";import"./FeatureLayerBase-MGotHTud.js";import"./featureLayerUtils-RgaKrux8.js";import"./Query-XYhmJAcm.js";import"./AttachmentQuery-5LMwiYDr.js";import"./RelationshipQuery-EoJCKai_.js";import"./fieldType-h3FAXGdT.js";import"./LayerFloorInfo-DUJA49Sf.js";import"./serviceCapabilitiesUtils-sM67UNKK.js";import"./editsZScale-XUS33gCl.js";import"./queryZScale-JMBNq6Za.js";import"./FeatureSet-41fq-equ.js";import"./APIKeyMixin-yDqtxogw.js";import"./ArcGISService-js_eTuu8.js";import"./CustomParametersMixin-IV-ZCkcb.js";import"./EditBusLayer-79wVMXIL.js";import"./FeatureEffectLayer-McOb82vy.js";import"./FeatureEffect-reT_3K_v.js";import"./jsonUtils-SBL1xwKC.js";import"./parser-5WRmuohq.js";import"./FeatureReductionLayer-Vf7Hw8YX.js";import"./clusterUtils-oFjX4ysJ.js";import"./MD5-uECS9GB-.js";import"./FeatureReductionSelection-Ku16GTtG.js";import"./LabelClass-lFhwM9-Q.js";import"./labelUtils-bgvBkKE5.js";import"./defaultsJSON-HVtDPFXZ.js";import"./OrderedLayer-xcmt9F3A.js";import"./RefreshableLayer-jUlr6EOh.js";import"./TemporalLayer-8uI_9CjI.js";import"./FeatureTemplate-KrlpBNrV.js";import"./FeatureType-7uQm1xKd.js";import"./fieldProperties-I7fcXUlE.js";import"./labelingInfo-yCRiW8FB.js";import"./versionUtils-lvgsyMS9.js";import"./styleUtils-skP8lVaM.js";import"./TopFeaturesQuery-MpP2S3lQ.js";import"./popupUtils-jwtllF6O.js";import"./interfaces-JKqm7GXy.js";import"./portalItemUtils-iR0JCk79.js";function b(t){return t.featureCollectionType==="markup"||t.layers.some(e=>e.layerDefinition.visibilityField!=null||!R(e))}function R({layerDefinition:t,featureSet:e}){const r=t.geometryType??e.geometryType;return v.find(o=>{var l,n,p;return r===o.geometryTypeJSON&&((p=(n=(l=t.drawingInfo)==null?void 0:l.renderer)==null?void 0:n.symbol)==null?void 0:p.type)===o.identifyingSymbol.type})}function _(){return new Q({xmin:-180,ymin:-90,xmax:180,ymax:90})}const C=new E({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),ne=new E({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0,length:255});let m=class extends te{constructor(t){super(t),this.visibilityMode="inherited"}initialize(){for(const t of this.graphics)t.sourceLayer=this.layer;this.graphics.on("after-add",t=>{t.item.sourceLayer=this.layer}),this.graphics.on("after-remove",t=>{t.item.sourceLayer=null})}get fullExtent(){var r;const t=(r=this.layer)==null?void 0:r.spatialReference,e=this.fullBounds;return t?e==null?S(_(),t).geometry:$(e,t):null}get fullBounds(){var r;const t=(r=this.layer)==null?void 0:r.spatialReference;if(!t)return null;const e=I();return this.graphics.forEach(o=>{const l=o.geometry!=null?S(o.geometry,t).geometry:null;l!=null&&J(e,l.type==="point"?l:l.extent,e)}),M(e,D)?null:e}get sublayers(){return this.graphics}};i([s({readOnly:!0})],m.prototype,"fullExtent",null),i([s({readOnly:!0})],m.prototype,"fullBounds",null),i([s({readOnly:!0})],m.prototype,"sublayers",null),i([s()],m.prototype,"layer",void 0),i([s()],m.prototype,"layerId",void 0),i([s({readOnly:!0})],m.prototype,"visibilityMode",void 0),m=i([T("esri.layers.MapNotesLayer.MapNotesSublayer")],m);const v=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:new B().toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:new G().toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:new x().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:new x().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:new F().toJSON()}];let a=class extends oe(ae(ie(le(Y(X))))){constructor(t){super(t),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=h.WGS84,this.sublayers=new w(v.map(e=>new m({id:e.id,layerId:e.layerId,title:e.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(t,e,r){return{operations:{supportsMapNotesEditing:!b(e)&&(r==null?void 0:r.origin)!=="portal-item"}}}readFeatureCollections(t,e,r){if(!b(e))return null;const o=e.layers.map(l=>{const n=new ee;return n.read(l,r),n});return new w({items:o})}readLegacyfeatureCollectionJSON(t,e){return b(e)?N(e.featureCollection):null}get fullExtent(){var r;const t=this.spatialReference,e=I();return this.sublayers!=null?this.sublayers.forEach(({fullBounds:o})=>o!=null?J(e,o,e):e,e):(r=this.featureCollectionJSON)!=null&&r.layers.some(o=>o.layerDefinition.extent)&&this.featureCollectionJSON.layers.forEach(o=>{const l=S(o.layerDefinition.extent,t).geometry;l!=null&&J(e,l,e)}),M(e,D)?S(_(),t).geometry:$(e,t)}readMinScale(t,e){for(const r of e.layers)if(r.layerDefinition.minScale!=null)return r.layerDefinition.minScale;return 0}readMaxScale(t,e){for(const r of e.layers)if(r.layerDefinition.maxScale!=null)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(t,e){return e.layers.length?h.fromJSON(e.layers[0].layerDefinition.spatialReference):h.WGS84}readSublayers(t,e,r){if(b(e))return null;const o=[];let l=e.layers.reduce((n,p)=>Math.max(n,p.layerDefinition.id??-1),-1)+1;for(const n of e.layers){const{layerDefinition:p,featureSet:y}=n,u=p.id??l++,d=R(n);if(d!=null){const c=new m({id:d.id,title:p.name,layerId:u,layer:this,graphics:y.features.map(({geometry:g,symbol:O,attributes:j,popupInfo:P})=>z.fromJSON({attributes:j,geometry:g,symbol:O,popupTemplate:P}))});o.push(c)}}return new w(o)}writeSublayers(t,e,r,o){var d;const{minScale:l,maxScale:n}=this;if(t==null)return;const p=t.some(c=>c.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing)return void(p&&((d=o==null?void 0:o.messages)==null?void 0:d.push(new k("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const y=[];let u=this.spatialReference.toJSON();e:for(const c of t)for(const g of c.graphics)if(g.geometry!=null){u=g.geometry.spatialReference.toJSON();break e}for(const c of v){const g=t.find(O=>c.id===O.id);this._writeMapNoteSublayer(y,g,c,l,n,u,o)}A("featureCollection.layers",y,e)}get textLayer(){return this._findSublayer("textLayer")}load(t){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},t)),Promise.resolve(this)}read(t,e){"featureCollection"in t&&(t=N(t),Object.assign(t,t.featureCollection)),super.read(t,e)}async beforeSave(){if(this.sublayers==null)return;let t=null;const e=[];for(const o of this.sublayers)for(const l of o.graphics)if(l.geometry!=null){const n=l.geometry;t?W(n.spatialReference,t)||(U(n.spatialReference,t)||Z()||await q(),l.geometry=H(n,t)):t=n.spatialReference,e.push(l)}const r=await K(e.map(o=>o.geometry));e.forEach((o,l)=>o.geometry=r[l])}_findSublayer(t){var e;return this.sublayers==null?null:((e=this.sublayers)==null?void 0:e.find(r=>r.id===t))??null}_writeMapNoteSublayer(t,e,r,o,l,n,p){const y=[];if(e!=null){for(const u of e.graphics)this._writeMapNote(y,u,r.geometryType,p);this._normalizeObjectIds(y,C),t.push({layerDefinition:{name:e.title,drawingInfo:{renderer:{type:"simple",symbol:N(r.identifyingSymbol)}},id:e.layerId,geometryType:r.geometryTypeJSON,minScale:o,maxScale:l,objectIdField:"OBJECTID",fields:[C.toJSON(),ne.toJSON()],spatialReference:n},featureSet:{features:y,geometryType:r.geometryTypeJSON}})}}_writeMapNote(t,e,r,o){var u,d;if(e==null)return;const{geometry:l,symbol:n,popupTemplate:p}=e;if(l==null)return;if(l.type!==r)return void((u=o==null?void 0:o.messages)==null?void 0:u.push(new L("map-notes-layer:invalid-geometry-type",`Geometry "${l.type}" cannot be saved in "${r}" layer`,{graphic:e})));if(n==null)return void((d=o==null?void 0:o.messages)==null?void 0:d.push(new L("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:e})));const y={attributes:{...e.attributes},geometry:l.toJSON(),symbol:n.toJSON()};p!=null&&(y.popupInfo=p.toJSON()),t.push(y)}_normalizeObjectIds(t,e){const r=e.name;let o=re(r,t)+1;const l=new Set;for(const n of t){n.attributes||(n.attributes={});const{attributes:p}=n;(p[r]==null||l.has(p[r]))&&(p[r]=o++),l.add(p[r])}}};i([s({readOnly:!0})],a.prototype,"capabilities",void 0),i([f(["portal-item","web-map"],"capabilities",["layers"])],a.prototype,"readCapabilities",null),i([s({readOnly:!0})],a.prototype,"featureCollections",void 0),i([f(["web-map","portal-item"],"featureCollections",["layers"])],a.prototype,"readFeatureCollections",null),i([s({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],a.prototype,"featureCollectionJSON",void 0),i([f(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],a.prototype,"readLegacyfeatureCollectionJSON",null),i([s({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],a.prototype,"featureCollectionType",void 0),i([s({readOnly:!0})],a.prototype,"fullExtent",null),i([s({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:this.featureCollectionJSON!=null}}}}}}})],a.prototype,"legendEnabled",void 0),i([s({type:["show","hide","hide-children"]})],a.prototype,"listMode",void 0),i([s({type:Number,nonNullable:!0,json:{write:!1}})],a.prototype,"minScale",void 0),i([f(["web-map","portal-item"],"minScale",["layers"])],a.prototype,"readMinScale",null),i([s({type:Number,nonNullable:!0,json:{write:!1}})],a.prototype,"maxScale",void 0),i([f(["web-map","portal-item"],"maxScale",["layers"])],a.prototype,"readMaxScale",null),i([s({readOnly:!0})],a.prototype,"multipointLayer",null),i([s({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],a.prototype,"operationalLayerType",void 0),i([s({readOnly:!0})],a.prototype,"pointLayer",null),i([s({readOnly:!0})],a.prototype,"polygonLayer",null),i([s({readOnly:!0})],a.prototype,"polylineLayer",null),i([s({type:h})],a.prototype,"spatialReference",void 0),i([f(["web-map","portal-item"],"spatialReference",["layers"])],a.prototype,"readSpatialReference",null),i([s({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],a.prototype,"sublayers",void 0),i([f("web-map","sublayers",["layers"])],a.prototype,"readSublayers",null),i([V("web-map","sublayers")],a.prototype,"writeSublayers",null),i([s({readOnly:!0})],a.prototype,"textLayer",null),i([s()],a.prototype,"title",void 0),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),a=i([T("esri.layers.MapNotesLayer")],a);const Nt=a;export{Nt as default};