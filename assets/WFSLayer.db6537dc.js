var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(t,i,r)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[i]=r,n=(e,t)=>{for(var i in t||(t={}))s.call(t,i)&&a(e,i,t[i]);if(r)for(var i of r(t))o.call(t,i)&&a(e,i,t[i]);return e},l=(e,r)=>t(e,i(r));import{a8 as p,gX as u,gb as d,r as y,cO as c,cU as f,w as h,bI as m,fQ as g,cw as w,cY as v,v as b,X as F,ab as O,ac as S,ad as j,hS as I,h9 as R,hR as x,hb as P,ha as q,d0 as T,d1 as U,d2 as E,d7 as C,b8 as _,iB as N,iC as J,iR as D,iA as W,df as X,g$ as Y,cA as k,hf as Q,e$ as L,hs as G,iD as V,cM as z,bY as B,iE as A,iG as M,ir as $,iF as H,hD as K,fJ as Z,j0 as ee,hi as te,ge as ie,is as re,hh as se,iH as oe,d6 as ae,hj as ne}from"./vendor.d0a39f0f.js";import{a as le,u as pe}from"./clientSideDefaults.67fdee82.js";import{U as ue,W as de,q as ye,V as ce,x as fe}from"./wfsUtils.2043d06c.js";import"./QueryEngineCapabilities.47963c2d.js";import"./geojson.aa9ea6ad.js";import"./xmlUtils.ae0e30b2.js";let he=class extends(p(u)){constructor(){super(...arguments),this.capabilities=le(!1,!1),this.type="wfs",this.refresh=d((async()=>{await this.load();const{extent:e}=await this._connection.invoke("refresh");return this.sourceJSON.extent=e,{hasUpdates:!0,updates:{extent:this.sourceJSON.extent}}})),this._updateCustomParameters=d((()=>{var e;const t=this.layer.customParameters;return null==(e=this._connection)?void 0:e.invoke("setCustomParameters",t)}))}load(e){var t;const i=null!=(t=y(e)&&e.signal)?t:null;return this.addResolvingPromise(this._startWorker({signal:i})),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const i=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return c.fromJSON(i)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const i=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:i.count,extent:f.fromJSON(i.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async _createLoadOptions(e){const{url:t,customParameters:i,name:r,namespaceUri:s,spatialReference:o,fields:a,geometryType:p,swapXY:u}=this.layer;if(!t)throw new h("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities=this.wfsCapabilities||await ue(t,n({customParameters:i},e));const d=["fields","geometryType","name","namespaceUri","spatialReference","swapXY"].some((e=>null==this.layer[e]))?await de(this.wfsCapabilities,r,s,{spatialReference:o,customParameters:i,signal:null==e?void 0:e.signal}):l(n({},ye(a)),{geometryType:p,name:r,namespaceUri:s,spatialReference:o,swapXY:u}),y=m(ce(this.wfsCapabilities.readFeatureTypes(),d.name,d.namespaceUri)),c=g.toJSON(d.geometryType);return{customParameters:i,featureType:y,fields:d.fields.map((e=>e.toJSON())),geometryField:d.geometryField,geometryType:c,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:d.objectIdField,spatialReference:d.spatialReference.toJSON(),swapXY:d.swapXY}}async _startWorker(e){const[t,i]=await w([this._createLoadOptions(e),v("WFSSourceWorker",l(n({},e),{strategy:b("feature-layers-workers")?"dedicated":"local"}))]),r=t.error||i.error||null,s=i.value||null;if(r)throw s&&s.close(),r;const o=t.value;this._connection=i.value;const{extent:a}=await this._connection.invoke("load",o,e);this.sourceJSON={extent:a,fields:o.fields,geometryType:o.geometryType,objectIdField:o.objectIdField,geometryField:o.geometryField,drawingInfo:pe(o.geometryType),name:o.featureType.title,wfsInfo:{name:o.featureType.name,featureUrl:o.getFeatureUrl,maxFeatures:3e3,swapXY:o.swapXY,supportedSpatialReferences:o.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:o.featureType.namespaceUri}},this.handles.add(F(this.layer,"customParameters",(()=>this._updateCustomParameters().catch((()=>{})))))}};O([S()],he.prototype,"capabilities",void 0),O([S({constructOnly:!0})],he.prototype,"layer",void 0),O([S()],he.prototype,"sourceJSON",void 0),O([S()],he.prototype,"type",void 0),O([S()],he.prototype,"wfsCapabilities",void 0),he=O([j("esri.layers.graphics.sources.WFSSource")],he);var me,ge=he;const we=ne();let ve=me=class extends(I(R(x(P(q(T(U(E(C))))))))){constructor(e){super(e),this.capabilities=null,this.copyright=null,this.customParameters=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxFeatures=3e3,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new ge({layer:this}),this.spatialReference=_.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}static fromWFSLayerInfo(e){const{customParameters:t,fields:i,geometryField:r,geometryType:s,name:o,namespaceUri:a,objectIdField:n,spatialReference:l,swapXY:p,url:u,wfsCapabilities:d}=e;return new me({customParameters:t,fields:i,geometryField:r,geometryType:s,name:o,namespaceUri:a,objectIdField:n,spatialReference:l,swapXY:p,url:u,wfsCapabilities:d})}destroy(){var e;null==(e=this.source)||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then((()=>this.source.load(e))).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),N(this.renderer,this.fieldsIndex),J(this.timeInfo,this.fieldsIndex)}))),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}readFeatureReduction(e,t){return D(e,t)}writeWebSceneFeatureReduction(e,t,i,r){W(e,t,"layerDefinition.featureReduction",r)}writeFields(e,t,i){const r=e.filter((e=>e.name!==fe));this.geometryField&&r.unshift(new X({name:this.geometryField,alias:this.geometryField,type:"geometry"})),Y(i,r.map((e=>e.toJSON())),t)}get parsedUrl(){return this.url?k(this.url):null}set renderer(e){N(e,this.fieldsIndex),this._set("renderer",e)}createPopupTemplate(e){return Q(this,e)}createQuery(){const e=new L;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:t,timeExtent:i}=this;return e.timeExtent=null!=t&&null!=i?i.offset(-t.value,t.unit):i||null,e}getFieldDomain(e,t){var i;return null==(i=this.getField(e))?void 0:i.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(L.from(e)||this.createQuery(),t))).then((e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(L.from(e)||this.createQuery(),t)))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(L.from(e)||this.createQuery(),t)))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(L.from(e)||this.createQuery(),t)))}async hasDataChanged(){try{const{hasUpdates:e,updates:t}=await this.source.refresh();return e&&this.read(t,{origin:"service",url:this.parsedUrl}),e}catch{}return!1}};O([S({readOnly:!0,aliasOf:"source.capabilities"})],ve.prototype,"capabilities",void 0),O([S({type:String})],ve.prototype,"copyright",void 0),O([S({readOnly:!0})],ve.prototype,"createQueryVersion",null),O([S({json:{name:"wfsInfo.customParameters",write:{ignoreOrigin:!0}}})],ve.prototype,"customParameters",void 0),O([S({readOnly:!0})],ve.prototype,"defaultPopupTemplate",null),O([S({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],ve.prototype,"definitionExpression",void 0),O([S({type:String})],ve.prototype,"displayField",void 0),O([S(G)],ve.prototype,"elevationInfo",void 0),O([S(V)],ve.prototype,"featureReduction",void 0),O([z("featureReduction",["layerDefinition.featureReduction"])],ve.prototype,"readFeatureReduction",null),O([B("web-scene","featureReduction",{"layerDefinition.featureReduction":{types:A}})],ve.prototype,"writeWebSceneFeatureReduction",null),O([S({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],ve.prototype,"featureUrl",void 0),O([S({type:[X],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{read:{source:"fields"}}}}})],ve.prototype,"fields",void 0),O([B("fields")],ve.prototype,"writeFields",null),O([S(we.fieldsIndex)],ve.prototype,"fieldsIndex",void 0),O([S({type:f,json:{origins:{service:{read:{source:"extent"}}}}})],ve.prototype,"fullExtent",void 0),O([S()],ve.prototype,"geometryField",void 0),O([S({type:String,json:{read:{source:"layerDefinition.geometryType",reader:g.read},write:{target:"layerDefinition.geometryType",writer:g.write,ignoreOrigin:!0},origins:{service:{read:g.read}}}})],ve.prototype,"geometryType",void 0),O([S({type:String})],ve.prototype,"id",void 0),O([S(M)],ve.prototype,"labelsVisible",void 0),O([S({type:[$],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:H},write:!0}})],ve.prototype,"labelingInfo",void 0),O([S(K)],ve.prototype,"legendEnabled",void 0),O([S({type:["show","hide"]})],ve.prototype,"listMode",void 0),O([S({type:String})],ve.prototype,"objectIdField",void 0),O([S({type:["WFS"]})],ve.prototype,"operationalLayerType",void 0),O([S({type:Z,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],ve.prototype,"maxFeatures",void 0),O([S({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],ve.prototype,"mode",void 0),O([S({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],ve.prototype,"name",void 0),O([S({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],ve.prototype,"namespaceUri",void 0),O([S(ee)],ve.prototype,"opacity",void 0),O([S(we.outFields)],ve.prototype,"outFields",void 0),O([S({readOnly:!0})],ve.prototype,"parsedUrl",null),O([S(te)],ve.prototype,"popupEnabled",void 0),O([S({type:ie,json:{name:"popupInfo",write:!0}})],ve.prototype,"popupTemplate",void 0),O([S({types:re,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:se,name:"layerDefinition.drawingInfo.renderer",write:{writer:oe}}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],ve.prototype,"renderer",null),O([S({type:Boolean,json:{write:!0,name:"screenSizePerspective"}})],ve.prototype,"screenSizePerspectiveEnabled",void 0),O([S({readOnly:!0})],ve.prototype,"source",void 0),O([S({type:_,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],ve.prototype,"spatialReference",void 0),O([S({readOnly:!0,type:[Z],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],ve.prototype,"spatialReferences",void 0),O([S({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],ve.prototype,"swapXY",void 0),O([S({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],ve.prototype,"title",void 0),O([S({json:{read:!1},readOnly:!0})],ve.prototype,"type",void 0),O([S(ae)],ve.prototype,"url",void 0),O([S({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],ve.prototype,"version",void 0),O([S({aliasOf:"source.wfsCapabilities"})],ve.prototype,"wfsCapabilities",void 0),ve=me=O([j("esri.layers.WFSLayer")],ve);var be=ve;export{be as default};
