import{is as R,it as _,d8 as D,$ as r,a0 as n,iy as z,jU as A,a1 as I,d_ as P,f_ as G,i$ as B,iY as k,i_ as $,jV as W,dU as U,dV as V,dW as Y,aN as O,cj as J,iq as q,aY as x,cv as T,cE as K,t as b,f as H,r as C,il as Q,bp as X,dc as Z,da as ee,db as te,cl as re,dB as ie,iC as E,dz as f,bL as ae}from"./index.ebaf2ed0.js";import{n as oe}from"./objectIdUtils.773397d7.js";let c=class extends R(_(P)){constructor(e){super(e),this.elevationInfo=null,this.graphics=new D,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};r([n({type:z})],c.prototype,"elevationInfo",void 0),r([n(A(D,"graphics"))],c.prototype,"graphics",void 0),r([n({type:["show","hide"]})],c.prototype,"listMode",void 0),r([n()],c.prototype,"screenSizePerspectiveEnabled",void 0),r([n({readOnly:!0})],c.prototype,"type",void 0),r([n({constructOnly:!0})],c.prototype,"internal",void 0),c=r([I("esri.layers.GraphicsLayer")],c);const ne=c;function L(e){return e.layers.some(t=>t.layerDefinition.visibilityField!=null)}const j=new G({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),le=new G({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let g=class extends ne{constructor(e){super(e),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",e=>{e.item.sourceLayer=this.layer}),this.graphics.on("after-remove",e=>{e.item.sourceLayer=null})}get sublayers(){return this.graphics}};r([n({readOnly:!0})],g.prototype,"sublayers",null),r([n()],g.prototype,"layer",void 0),r([n()],g.prototype,"layerId",void 0),r([n({readOnly:!0})],g.prototype,"visibilityMode",void 0),g=r([I("esri.layers.MapNotesLayer.MapNotesSublayer")],g);const M=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:new B().toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:new k().toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:new $().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:new $().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:new W().toJSON()}];let o=class extends R(_(U(V(Y(P))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.minScale=0,this.maxScale=0,this.spatialReference=O.WGS84,this.sublayers=new J(M.map(t=>new g({id:t.id,layerId:t.layerId,title:t.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,i){return{operations:{supportsMapNotesEditing:!L(t)&&(i==null?void 0:i.origin)!=="portal-item"}}}readFeatureCollections(e,t,i){if(!L(t))return null;const a=t.layers.map(l=>{const s=new q;return s.read(l,i),s});return new J({items:a})}readLegacyfeatureCollectionJSON(e,t){return L(t)?x(t.featureCollection):null}readFullExtent(e,t){if(!t.layers.length||t.layers.every(a=>!a.layerDefinition.extent))return new T({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:O.WGS84});const i=O.fromJSON(t.layers[0].layerDefinition.spatialReference);return t.layers.reduce((a,l)=>{const s=l.layerDefinition.extent;return s?T.fromJSON(s).union(a):a},new T({spatialReference:i}))}readMinScale(e,t){for(const i of t.layers)if(i.layerDefinition.minScale!=null)return i.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const i of t.layers)if(i.layerDefinition.maxScale!=null)return i.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?O.fromJSON(t.layers[0].layerDefinition.spatialReference):O.WGS84}readSublayers(e,t,i){var s,p;if(L(t))return null;const a=[];let l=t.layers.reduce((y,d)=>{var u;return Math.max(y,(u=d.layerDefinition.id)!=null?u:-1)},-1)+1;for(const{layerDefinition:y,featureSet:d}of t.layers){const u=(s=y.geometryType)!=null?s:d.geometryType,m=(p=y.id)!=null?p:l++,h=M.find(S=>{var w,v,N;return u===S.geometryTypeJSON&&((N=(v=(w=y.drawingInfo)==null?void 0:w.renderer)==null?void 0:v.symbol)==null?void 0:N.type)===S.identifyingSymbol.type});if(h){const S=new g({id:h.id,title:y.name,layerId:m,layer:this,graphics:d.features.map(({geometry:w,symbol:v,attributes:N,popupInfo:F})=>K.fromJSON({attributes:N,geometry:w,symbol:v,popupTemplate:F}))});a.push(S)}}return new J(a)}writeSublayers(e,t,i,a){var u;const{minScale:l,maxScale:s}=this;if(b(e))return;const p=e.some(m=>m.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing)return void(p&&((u=a==null?void 0:a.messages)==null?void 0:u.push(new H("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const y=[];let d=this.spatialReference.toJSON();e:for(const m of e)for(const h of m.graphics)if(C(h.geometry)){d=h.geometry.spatialReference.toJSON();break e}for(const m of M){const h=e.find(S=>m.id===S.id);this._writeMapNoteSublayer(y,h,m,l,s,d,a)}Q("featureCollection.layers",y,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=x(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if(b(this.sublayers))return;let e=null;const t=[];for(const a of this.sublayers)for(const l of a.graphics)if(C(l.geometry)){const s=l.geometry;e?X(s.spatialReference,e)||(Z(s.spatialReference,e)||ee()||await te(),l.geometry=re(s,e)):e=s.spatialReference,t.push(l)}const i=await ie(t.map(a=>a.geometry));t.forEach((a,l)=>a.geometry=i[l])}_findSublayer(e){var t,i;return b(this.sublayers)?null:(i=(t=this.sublayers)==null?void 0:t.find(a=>a.id===e))!=null?i:null}_writeMapNoteSublayer(e,t,i,a,l,s,p){const y=[];if(!b(t)){for(const d of t.graphics)this._writeMapNote(y,d,i.geometryType,p);this._normalizeObjectIds(y,j),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:x(i.identifyingSymbol)}},id:t.layerId,geometryType:i.geometryTypeJSON,minScale:a,maxScale:l,objectIdField:"OBJECTID",fields:[j.toJSON(),le.toJSON()],spatialReference:s},featureSet:{features:y,geometryType:i.geometryTypeJSON}})}}_writeMapNote(e,t,i,a){var d,u;if(b(t))return;const{geometry:l,symbol:s,popupTemplate:p}=t;if(b(l))return;if(l.type!==i)return void((d=a==null?void 0:a.messages)==null?void 0:d.push(new E("map-notes-layer:invalid-geometry-type",`Geometry "${l.type}" cannot be saved in "${i}" layer`,{graphic:t})));if(b(s))return void((u=a==null?void 0:a.messages)==null?void 0:u.push(new E("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const y={attributes:{...t.attributes},geometry:l.toJSON(),symbol:s.toJSON()};C(p)&&(y.popupInfo=p.toJSON()),e.push(y)}_normalizeObjectIds(e,t){const i=t.name;let a=oe(i,e)+1;const l=new Set;for(const s of e){s.attributes||(s.attributes={});const{attributes:p}=s;(p[i]==null||l.has(p[i]))&&(p[i]=a++),l.add(p[i])}}};r([n({readOnly:!0})],o.prototype,"capabilities",void 0),r([f(["portal-item","web-map"],"capabilities",["layers"])],o.prototype,"readCapabilities",null),r([n({readOnly:!0})],o.prototype,"featureCollections",void 0),r([f(["web-map","portal-item"],"featureCollections",["layers"])],o.prototype,"readFeatureCollections",null),r([n({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],o.prototype,"featureCollectionJSON",void 0),r([f(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],o.prototype,"readLegacyfeatureCollectionJSON",null),r([n({readOnly:!0,json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],o.prototype,"featureCollectionType",void 0),r([n({json:{write:!1}})],o.prototype,"fullExtent",void 0),r([f(["web-map","portal-item"],"fullExtent",["layers"])],o.prototype,"readFullExtent",null),r([n({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:this.featureCollectionJSON!=null}}}}}}})],o.prototype,"legendEnabled",void 0),r([n({type:["show","hide"]})],o.prototype,"listMode",void 0),r([n({type:Number,nonNullable:!0,json:{write:!1}})],o.prototype,"minScale",void 0),r([f(["web-map","portal-item"],"minScale",["layers"])],o.prototype,"readMinScale",null),r([n({type:Number,nonNullable:!0,json:{write:!1}})],o.prototype,"maxScale",void 0),r([f(["web-map","portal-item"],"maxScale",["layers"])],o.prototype,"readMaxScale",null),r([n({readOnly:!0})],o.prototype,"multipointLayer",null),r([n({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],o.prototype,"operationalLayerType",void 0),r([n({readOnly:!0})],o.prototype,"pointLayer",null),r([n({readOnly:!0})],o.prototype,"polygonLayer",null),r([n({readOnly:!0})],o.prototype,"polylineLayer",null),r([n({type:O})],o.prototype,"spatialReference",void 0),r([f(["web-map","portal-item"],"spatialReference",["layers"])],o.prototype,"readSpatialReference",null),r([n({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],o.prototype,"sublayers",void 0),r([f("web-map","sublayers",["layers"])],o.prototype,"readSublayers",null),r([ae("web-map","sublayers")],o.prototype,"writeSublayers",null),r([n({readOnly:!0})],o.prototype,"textLayer",null),r([n()],o.prototype,"title",void 0),r([n({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),o=r([I("esri.layers.MapNotesLayer")],o);const pe=o;export{pe as default};
