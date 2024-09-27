import{e as t}from"./Evented-CXIxDjmW.js";import{d as f}from"./Graphic-Dc7F67nR.js";import{k as g}from"./PopupTemplate-ByHks6sq.js";import"./ClassBreaksRenderer-DMO3d0Rn.js";import{u as v}from"./jsonUtils-CuoSmH2q.js";import"./UniqueValueRenderer-dci9bLM8.js";import"./SimpleRenderer-DvJZ7cyq.js";import{U as b}from"./assets-C2mb-ea2.js";import{y as r,N as L,b as m,n as w,c as p}from"./subclass-BR3PhgZG.js";import{n as F}from"./jsonMap-DCC6W5ex.js";import{m as I}from"./Portal-liet8xHC.js";import{n as O}from"./Promise-CZrWwByK.js";import{o as S}from"./enumeration--HlxOQ_N.js";import{o as y}from"./writer-3zufXUNV.js";import{w as x}from"./Extent-DHjqVB-p.js";import{f as j}from"./Point-DB4Hp4hH.js";import h from"./FeatureLayer-BCmfw45U.js";import{s as T}from"./Identifiable-BLvpQbOc.js";import{m as $}from"./MultiOriginJSONSupport-DjAXzJun.js";import{c as u,s as P}from"./commonProperties-C-F8Nu9F.js";import{s as q}from"./capabilities-CAweHQni.js";import{s as E}from"./fieldProperties-DJEV41A1.js";import{Z as Q}from"./FieldsIndex-IOXc-mnc.js";import{t as A}from"./fieldUtils-CNduWQU9.js";import{r as D}from"./I3SIndexInfo-ByH-ZBj-.js";import{p as N,a as U,y as R,m as _}from"./I3SLayerDefinitions-DS-Kg5zK.js";import{b as B}from"./Query-Cx4awVKu.js";import{p as C}from"./popupUtils-fsHWupnf.js";import{h as K}from"./ElevationInfo-BxYXLfrw.js";import{$ as M}from"./I3SUtil-vacVP6Bd.js";import{n as Z,p as k}from"./popupUtils-sb3Ob2mW.js";let a=class extends T($){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(e,o){return typeof o.alias=="string"?o.alias:typeof o.name=="string"?o.name:""}readIdOnlyOnce(e){return this.id!==-1?this.id:typeof e=="number"?e:-1}};t([r({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],a.prototype,"title",void 0),t([y("service","title",["alias","name"])],a.prototype,"readTitle",null),t([r()],a.prototype,"layer",void 0),t([r({type:L,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],a.prototype,"id",void 0),t([y("service","id")],a.prototype,"readIdOnlyOnce",null),t([r(u(String))],a.prototype,"modelName",void 0),t([r(u(Boolean))],a.prototype,"isEmpty",void 0),t([r({type:Boolean,nonNullable:!0})],a.prototype,"legendEnabled",void 0),t([r({type:Boolean,json:{name:"visibility",write:!0}})],a.prototype,"visible",void 0),t([r({type:Number,json:{write:!0}})],a.prototype,"opacity",void 0),a=t([m("esri.layers.buildingSublayers.BuildingSublayer")],a);const V=a,c=E();let i=class extends I.LoadableMixin(O(V)){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){var e,o;return this.layer?{path:`${(e=this.layer.parsedUrl)==null?void 0:e.path}/sublayers/${this.id}`,query:(o=this.layer.parsedUrl)==null?void 0:o.query}:{path:""}}get fieldsIndex(){return new Q(this.fields)}readAssociatedLayer(e,o){const s=this.layer.associatedFeatureServiceItem,n=o.associatedLayerID;return s!=null&&typeof n=="number"?new h({portalItem:s,customParameters:this.customParameters,layerId:n}):null}get objectIdField(){if(this.fields!=null){for(const e of this.fields)if(e.type==="oid")return e.name}return null}get displayField(){return this.associatedLayer!=null?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get customParameters(){return this.layer.customParameters}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const o=e!=null?e.signal:null,s=this._fetchService(o).then(()=>{this.indexInfo=D(this.parsedUrl.path,this.rootNode,this.nodePages,this.customParameters,this.apiKey,w.getLogger(this),o)});return this.addResolvingPromise(s),Promise.resolve(this)}createPopupTemplate(e){return C(this,e)}async _fetchService(e){const o=(await b(this.parsedUrl.path,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(o,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,o){var n,l,d;const s=(l=(n=this.getFeatureType(o==null?void 0:o.feature))==null?void 0:n.domains)==null?void 0:l[e];return s&&s.type!=="inherited"?s:((d=this.getField(e))==null?void 0:d.domain)??null}getFeatureType(e){return e&&this.associatedLayer!=null?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer!=null?this.associatedLayer.types??[]:[]}get typeIdField(){return this.associatedLayer!=null?this.associatedLayer.typeIdField:null}get geometryType(){return this.layerType==="3d-object"?"mesh":"point"}get profile(){return this.layerType==="3d-object"?"mesh-pyramids":"points"}get capabilities(){const e=this.associatedLayer!=null&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:q,{query:o,data:{supportsZ:s,supportsM:n,isVersioned:l}}=e;return{query:o,data:{supportsZ:s,supportsM:n,isVersioned:l}}}createQuery(){const e=new B;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,o){return this._getAssociatedLayerForQuery().then(s=>s.queryExtent(e||this.createQuery(),o))}queryFeatureCount(e,o){return this._getAssociatedLayerForQuery().then(s=>s.queryFeatureCount(e||this.createQuery(),o))}queryFeatures(e,o){return this._getAssociatedLayerForQuery().then(s=>s.queryFeatures(e||this.createQuery(),o)).then(s=>{if(s!=null&&s.features)for(const n of s.features)n.layer=this.layer,n.sourceLayer=this;return s})}queryObjectIds(e,o){return this._getAssociatedLayerForQuery().then(s=>s.queryObjectIds(e||this.createQuery(),o))}async queryCachedAttributes(e,o){const s=A(this.fieldsIndex,await Z(this,k(this)));return M(this.parsedUrl.path,this.attributeStorageInfo,e,o,s,this.apiKey,this.customParameters)}async queryCachedFeature(e,o){const s=await this.queryCachedAttributes(e,[o]);if(!s||s.length===0)throw new p("scenelayer:feature-not-in-cached-data","Feature not found in cached data");return new f({attributes:s[0],layer:this,sourceLayer:this})}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:this.associatedLayer!=null}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e!=null&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),this.associatedLayer==null)throw new p("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new p("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};t([r({readOnly:!0})],i.prototype,"parsedUrl",null),t([r({type:N,readOnly:!0})],i.prototype,"nodePages",void 0),t([r({type:[U],readOnly:!0})],i.prototype,"materialDefinitions",void 0),t([r({type:[R],readOnly:!0})],i.prototype,"textureSetDefinitions",void 0),t([r({type:[_],readOnly:!0})],i.prototype,"geometryDefinitions",void 0),t([r({readOnly:!0})],i.prototype,"serviceUpdateTimeStamp",void 0),t([r({readOnly:!0})],i.prototype,"store",void 0),t([r({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],i.prototype,"rootNode",void 0),t([r({readOnly:!0})],i.prototype,"attributeStorageInfo",void 0),t([r(c.fields)],i.prototype,"fields",void 0),t([r({readOnly:!0})],i.prototype,"fieldsIndex",null),t([r({readOnly:!0,type:h})],i.prototype,"associatedLayer",void 0),t([y("service","associatedLayer",["associatedLayerID"])],i.prototype,"readAssociatedLayer",null),t([r(c.outFields)],i.prototype,"outFields",void 0),t([r({type:String,readOnly:!0})],i.prototype,"objectIdField",null),t([r({readOnly:!0,type:String,json:{read:!1}})],i.prototype,"displayField",null),t([r({readOnly:!0,type:String})],i.prototype,"apiKey",null),t([r({readOnly:!0,type:String})],i.prototype,"customParameters",null),t([r({readOnly:!0,type:x})],i.prototype,"fullExtent",null),t([r({readOnly:!0,type:j})],i.prototype,"spatialReference",null),t([r({readOnly:!0})],i.prototype,"version",null),t([r({readOnly:!0,type:K})],i.prototype,"elevationInfo",null),t([r({readOnly:!0,type:Number})],i.prototype,"minScale",null),t([r({readOnly:!0,type:Number})],i.prototype,"maxScale",null),t([r({readOnly:!0,type:Number})],i.prototype,"effectiveScaleRange",null),t([r({type:["hide","show"],json:{write:!0}})],i.prototype,"listMode",void 0),t([r({types:v,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],i.prototype,"renderer",void 0),t([r({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),t([r(P)],i.prototype,"popupEnabled",void 0),t([r({type:g,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],i.prototype,"popupTemplate",void 0),t([r({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],i.prototype,"normalReferenceFrame",void 0),t([r({readOnly:!0,json:{read:!1}})],i.prototype,"defaultPopupTemplate",null),t([r()],i.prototype,"types",null),t([r()],i.prototype,"typeIdField",null),t([r({json:{write:!1}}),S(new F({"3DObject":"3d-object",Point:"point"}))],i.prototype,"layerType",void 0),t([r()],i.prototype,"geometryType",null),t([r()],i.prototype,"profile",null),t([r({readOnly:!0,json:{read:!1}})],i.prototype,"capabilities",null),t([r({readOnly:!0})],i.prototype,"statisticsInfo",void 0),i=t([m("esri.layers.buildingSublayers.BuildingComponentSublayer")],i);const Oe=i;export{Oe as A,V as a};
