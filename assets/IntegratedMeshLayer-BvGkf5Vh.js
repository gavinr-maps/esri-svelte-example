import{r as i}from"./tslib.es6-B3Jf3DVX.js";import{m as s,a as u,b as m,n as c}from"./subclass-BZA_h8Db.js";import{S as w}from"./MultiOriginJSONSupport-B5nfqtQh.js";import{p as T}from"./Accessor-BLX9ikPh.js";import{on as _,sync as $}from"./reactiveUtils-C5zUhJQJ.js";import{o as I}from"./writer-DNAwXnhG.js";import{j as O}from"./persistable-DjaiFmiM.js";import L from"./Layer-CVt7Hb5J.js";import{i as x}from"./APIKeyMixin-Di9kcRBS.js";import{l as M}from"./ArcGISService-B5qxetOY.js";import{e as N}from"./CustomParametersMixin-B4u7wiBT.js";import{b as V}from"./OperationalLayer-CVyVfSPu.js";import{j as b}from"./PortalLayer-CKja4bdW.js";import{t as A}from"./ScaleRangeLayer-Bb8Ig1Hz.js";import{R as j,V as f}from"./SceneService-DR5HS-bd.js";import{c as U}from"./commonProperties-CPyIG_-u.js";import{p as D,a as E,y as J,m as P}from"./I3SLayerDefinitions-BZ_CeKMl.js";import{u as K,I as R,U as z}from"./assets-C43MgM-v.js";import{V as C}from"./Collection-CEdjem1-.js";import{f as d}from"./SceneModification-CtZuw6Xr.js";import{$ as h,Z as F,w as H}from"./elevationInfoUtils-BC_66_Fg.js";import{p as Z}from"./persistableUrlUtils-fa1mAujs.js";import"./asyncUtils-CWX51uTe.js";import"./Evented-BHRw9x22.js";import"./shared-B3wH2qpO.js";import"./SimpleObservable-KocWTzVy.js";import"./MD5-C9MwAd2G.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./uuid-fwrPAdZb.js";import"./resourceExtension-D8MnQ6oV.js";import"./index-Bh2oEzTI.js";import"./geometry-D964gYQX.js";import"./Extent-Bf3YTe7m.js";import"./Point-Cg0-ChZE.js";import"./cast-Bjksrh93.js";import"./jsonMap-0cxwUWs2.js";import"./Polyline-D9YkgmM_.js";import"./mathUtils-C4_ghTv4.js";import"./Identifiable-B1UbsKNt.js";import"./Loadable-BabW5Xcc.js";import"./Promise-B2Hu02L7.js";import"./TimeExtent-DocT5yPf.js";import"./timeUtils-8fb_2oAt.js";import"./date-DlqISzcw.js";import"./locale-C9TlLpzi.js";import"./arcgisLayerUrl-BX1FE5Hm.js";import"./layerContainerType-C5CzMsLd.js";import"./layerUtils-BrNoooE9.js";import"./Portal-C10FKnaA.js";import"./PortalItem-DzgXrpyc.js";import"./portalItemUtils-BzVoFAku.js";import"./projection-B971H0Re.js";import"./vec3f64-BLpZdpfb.js";import"./projectBuffer-Bs7GwaPY.js";import"./geodesicConstants-DWQLYX7F.js";import"./originUtils-D69mHv66.js";import"./HeightModelInfo-9nOoV6LU.js";import"./I3SIndexInfo-CzWbq05q.js";import"./jsonContext-DueMnVx9.js";import"./resourceUtils-BZzv7-k7.js";import"./resourceUtils-VfNT3fc0.js";import"./saveUtils-gB1pYTqT.js";import"./ElevationInfo-CA5m_tHv.js";import"./fieldUtils-tmQlKvWo.js";import"./intl-CChhNOV8.js";import"./messages-OmQvZhAg.js";import"./unitConversionUtils-BMfW9yAe.js";import"./lengthUtils-DL1-FDQQ.js";import"./AttributeTableTemplate-BZeVyq-j.js";import"./opacityUtils-C68Tlu6_.js";import"./enumeration-Ba5njXdz.js";var n;let a=n=class extends K(C.ofType(d)){constructor(t){super(t),this.url=null}clone(){return new n({url:this.url,items:this.items.map(t=>t.clone())})}toJSON(t){return this.toArray().map(e=>e.toJSON(t)).filter(e=>!!e.geometry)}static fromJSON(t,e){const r=new n;for(const p of t)r.add(d.fromJSON(p,e));return r}static async fromUrl(t,e,r){const p={url:R(t),origin:"service"},g=await z(t,{responseType:"json",signal:r==null?void 0:r.signal}),S=e.toJSON(),l=[];for(const y of g.data)l.push(d.fromJSON({...y,geometry:{...y.geometry,spatialReference:S}},p));return new n({url:t,items:l})}};i([s({type:String})],a.prototype,"url",void 0),a=n=i([u("esri.layers.support.SceneModifications")],a);const v=a;let o=class extends j(M(V(b(A(w(N(x(L)))))))){constructor(...t){super(...t),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null,this.definitionExpression=null}initialize(){this.addHandles(_(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,$))}normalizeCtorArgs(t,e){return typeof t=="string"?{url:t,...e}:t}readModifications(t,e,r){this._modificationsSource={url:Z(t,r),context:r}}set elevationInfo(t){this._set("elevationInfo",t),this._validateElevationInfo()}async load(t){return this.addResolvingPromise(this._doLoad(t)),this}async _doLoad(t){const e=t==null?void 0:t.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},t)}catch(r){T(r)}if(await this._fetchService(e),this._modificationsSource!=null){const r=await v.fromUrl(this._modificationsSource.url,this.spatialReference,t);this.setAtOrigin("modifications",r,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,e)}beforeSave(){if(this._modificationsSource!=null)return this.load().then(()=>{},()=>{})}async saveAs(t,e){return this._debouncedSaveOperations(f.SAVE_AS,{...e,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},t)}async save(){const t={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(f.SAVE,t)}validateLayer(t){if(t.layerType&&t.layerType!=="IntegratedMesh")throw new m("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:t.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new m("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new m("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(){const t=this.elevationInfo,e="Integrated mesh layers";h(c.getLogger(this),F(e,"absolute-height",t)),h(c.getLogger(this),H(e,t))}};i([s({type:String,readOnly:!0})],o.prototype,"geometryType",void 0),i([s({type:["show","hide"]})],o.prototype,"listMode",void 0),i([s({type:["IntegratedMeshLayer"]})],o.prototype,"operationalLayerType",void 0),i([s({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),i([s({type:D,readOnly:!0})],o.prototype,"nodePages",void 0),i([s({type:[E],readOnly:!0})],o.prototype,"materialDefinitions",void 0),i([s({type:[J],readOnly:!0})],o.prototype,"textureSetDefinitions",void 0),i([s({type:[P],readOnly:!0})],o.prototype,"geometryDefinitions",void 0),i([s({readOnly:!0})],o.prototype,"serviceUpdateTimeStamp",void 0),i([s({type:v}),O({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],o.prototype,"modifications",void 0),i([I(["web-scene","portal-item"],"modifications")],o.prototype,"readModifications",null),i([s(U)],o.prototype,"elevationInfo",null),i([s({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),o=i([u("esri.layers.IntegratedMeshLayer")],o);const me=o;export{me as default};
