import{r as e,m as r,a as c,g as w,s as v}from"./Accessor-BHnuXKD2.js";import{d as $,P as g}from"./cast-BA_-jlhc.js";import{r as x}from"./mathUtils-DV9iOXpW.js";import{S as N}from"./MultiOriginJSONSupport-nGLpCFeg.js";import{d as P,P as U}from"./reactiveUtils-BR0C1Kq4.js";import{o as m,r as j}from"./writer-B2bQV2uU.js";import{w as O}from"./Extent-CBBGeHb-.js";import{P as E}from"./Polyline-BmuD2-ZN.js";import{j as S,g as F}from"./Point-XGrwlf63.js";import{f as J}from"./Layer-C9uQlTBT.js";import{p as L,t as R}from"./ScaleRangeLayer-C59zG_yk.js";import{e as k}from"./CustomParametersMixin-uo3x70vd.js";import{y as M}from"./commonProperties-C0eC30J9.js";import{a as C}from"./Clonable-DvJsj5LF.js";import{S as b}from"./JSONSupport-CGdeqxpk.js";import{A as _}from"./serviceCapabilitiesUtils-BuKg0yWx.js";import{C as H,L as q,f as V,g as z,P as D,d as G,n as W,l as A}from"./VideoController-DdsqmMRW.js";import{l as T}from"./TelemetryDisplay-DI9UZ4dL.js";import"./index-tefRSezt.js";import"./Evented-DCWccWGU.js";import"./SimpleObservable-7oieNGD8.js";import"./Identifiable-BrT7zvUW.js";import"./Portal-CTRRujjZ.js";import"./Promise-CmQqe-ke.js";import"./TimeExtent-J5qnUFx_.js";import"./timeUtils-D2X862bk.js";import"./layerContainerType-C5CzMsLd.js";import"./jsonUtils-TjZmCq6l.js";import"./colorUtils-Rxh2V3ai.js";import"./utils-DYurMneM.js";import"./screenUtils-_ZIvrt5o.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-Fi6iAz29.js";import"./vec3f64-BLpZdpfb.js";import"./common-DQOJ18NT.js";import"./ElevationInfo-Di4W6v5U.js";import"./opacityUtils-CSd4XoR2.js";import"./unitConversionUtils-C4AR5obr.js";import"./lengthUtils-DjJgJFRg.js";import"./AttributeTableTemplate-B7rH2qLr.js";import"./infoFor3D-CsJzgCF0.js";import"./mat3f64-BBpwCtoL.js";import"./mat3-CR8GKnhD.js";import"./vec32-Dvg_eL9J.js";import"./spatialReferenceEllipsoidUtils-DM073JUd.js";import"./projectBuffer-DOU0xvVi.js";import"./geodesicConstants-yASAK_zX.js";import"./_commonjsHelpers-DCkdB7M8.js";let a=class extends C.ClonableMixin(b){constructor(t){super(t),this.framerate=null,this.containerFormat=null,this.gop=null,this.aspectRatio=null,this.klv=null}};e([r({type:String})],a.prototype,"framerate",void 0),e([r({type:String})],a.prototype,"containerFormat",void 0),e([r({type:Number})],a.prototype,"gop",void 0),e([r({type:String})],a.prototype,"aspectRatio",void 0),e([r({type:Object})],a.prototype,"klv",void 0),a=e([c("esri.layers.support.PlaybackInfo")],a);const B=a;let y=class extends w{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};function Q(t){return(t==null?void 0:t.sourcePoint)!=null&&t.mapPoint!=null}e([r()],y.prototype,"sourcePoint",void 0),e([r({type:S})],y.prototype,"mapPoint",void 0),y=e([c("esri.layers.support.VideoFrame.ControlPoint")],y);let p=class extends C.ClonableMixin(b){constructor(t){super(t),this.frame=null,this.controlPoints=null}readControlPoints(t){return t.map(i=>({sourcePoint:{x:i.frameX,y:i.frameY},mapPoint:new S(i.point)}))}writeControlPoints(t,i){t!=null&&Q(t[0])&&(i.controlPoints=t.map(n=>{const l=n.sourcePoint,u=n.mapPoint;return{frameX:l.x,frameY:l.y,point:u.toJSON()}}))}};e([r({type:String})],p.prototype,"frame",void 0),e([r({type:[y],json:{write:{allowNull:!1,isRequired:!0}}})],p.prototype,"controlPoints",void 0),e([m("controlPoints")],p.prototype,"readControlPoints",null),e([j("controlPoints")],p.prototype,"writeControlPoints",null),p=e([c("esri.layers.support.VideoFrame")],p);const X=p;let o=class extends L(R(N(k(J)))){constructor(t){super(t),this._trailPoints=[],this.capabilities=null,this.connectionInfo=null,this.controller=new H,this.copyright=null,this.created=null,this.description=null,this.elevationSource=null,this.frame=null,this.frameCount=null,this.fullExtent=null,this.initialExtent=null,this.layerId=null,this.playbackInfo=null,this.posterUrl=null,this.qualities=null,this.serviceItemId=null,this.sourceJSON=null,this.sourceQuality=null,this.sourceType=null,this.spatialReference=F.WGS84,this.telemetryDisplay=null,this.title=null,this.type="video",this.url=null,this.videoLayersInfo=null,this.videoTimeExtent=null}initialize(){this.telemetryDisplay=new T({frame:!1,frameCenter:!1,frameOutline:!0,lineOfSight:!0,sensorLocation:!0,sensorTrail:!0}),this.addHandles([P(()=>this.metadata,()=>{this.notifyChange("telemetry"),this.notifyChange("groundControlPoints"),this.notifyChange("frameHorizonPoints")}),P(()=>{var t;return(t=this.telemetry)==null?void 0:t.sensorLocation},t=>this._setSensorTrail(t),U)])}load(t){const i=t!=null?t.signal:null;return this.addResolvingPromise(this._fetchService(i)),Promise.resolve(this)}get buffered(){return this.controller.buffered}readCapabilitiesFromService(t,i){return _(i)}readConnectionInfo(t,i){const n=Object.values(i.connectionUrl);return n!=null&&n.length&&(this.controller.playerUrl=n[0]),i.connectionUrl}get currentTime(){return this.controller.currentTime}get duration(){return this.controller.duration}get ended(){return this.controller.ended}get frameHorizonPoints(){return q(this.metadata)}get groundControlPoints(){return V(this.metadata)}get loop(){return this.controller.loop}set loop(t){this.controller.loop=t}get metadata(){var t;return(t=this.controller)==null?void 0:t.currentMetadata}get mimeType(){var t;return(t=this.controller)==null?void 0:t.mimeType}get muted(){return this.controller.muted}set muted(t){this.controller.muted=t}get playbackRate(){return this.controller.rate}set playbackRate(t){this.controller.rate=t}get playerUrl(){return this.controller.playerUrl}get playing(){return this.controller.playing}get state(){return this.controller.state}get telemetry(){return z(this.metadata)}get videoElement(){var t;return(t=this.controller)==null?void 0:t.element}get videoHeight(){var t;return(t=this.controller)==null?void 0:t.videoHeight}readLayerInfosFromService(t,i){return D(i)}get videoWidth(){var t;return(t=this.controller)==null?void 0:t.videoWidth}get waiting(){return this.controller.waiting}play(){this.controller.play()}pause(){this.controller.pause()}reset(){this.controller.reset()}setCurrentTime(t){if(!this.duration)return;const i=x(t,0,this.duration);this.controller.setCurrentTime(i)}toGround(t,i){var n,l;return(l=(n=this.controller)==null?void 0:n.sensorModel)!=null&&l.metadataSupportsTransforms?this.controller.sensorModel.transformImageToGeo(t,i):null}toVideo(t){var n,l;if(!((l=(n=this.controller)==null?void 0:n.sensorModel)!=null&&l.metadataSupportsTransforms))return null;const i=this.controller.sensorModel.transformGeoToImage(t.x,t.y,t.z);return{x:i[0],y:i[1]}}async _fetchService(t){var h,f;if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const i=$((h=this.parsedUrl)==null?void 0:h.path);if(i==null)throw new v("arcgis-layers:url-mismatch","The url is not a valid arcgis resource");let n=null;const{data:l,ssl:u}=await g(i.url.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters},signal:t}),s=l;if(this.url=i.url.path,u&&(this.url=this.url.replace(/^http:/i,"https:")),!(s!=null&&s.currentVersion))return s.currentVersion="11.2",this.sourceJSON=s,void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});let d=i==null?void 0:i.sublayer;if(d==null&&((f=s.layers)!=null&&f.length)&&(d=s.layers[0].id),d==null)throw new v("arcgis-layers:url-mismatch","The url is not a valid arcgis resource");this.url=`${i.url.path}/${d}`,n=await g(this.url,{query:{f:"json",...this.customParameters},signal:t});const I={...s,...n.data};this.sourceJSON=I,this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl})}_setSensorTrail(t){if(!t)return;const i=G(t,this._trailPoints);this._trailPoints=[...i];const n=this._trailPoints.map(u=>u.toArray()),l=new E({hasZ:t.hasZ,paths:[n]});this.telemetry.sensorTrail=l.clone()}};e([r({readOnly:!0})],o.prototype,"buffered",null),e([r({readOnly:!0,json:{read:!1}})],o.prototype,"capabilities",void 0),e([m("service","capabilities",["supportsAppend","supportsCoverageQuery","supportsExportClip","supportsExportFrameset","supportsMensuration","supportsUpdate"])],o.prototype,"readCapabilitiesFromService",null),e([r({readOnly:!0})],o.prototype,"connectionInfo",void 0),e([m("connectionInfo",["connectionUrl"])],o.prototype,"readConnectionInfo",null),e([r()],o.prototype,"controller",void 0),e([r({type:String})],o.prototype,"copyright",void 0),e([r({readOnly:!0,type:Date})],o.prototype,"created",void 0),e([r({type:Number})],o.prototype,"currentTime",null),e([r({type:String})],o.prototype,"description",void 0),e([r({type:Number})],o.prototype,"duration",null),e([r({readOnly:!0})],o.prototype,"elevationSource",void 0),e([r({type:Boolean})],o.prototype,"ended",null),e([r({type:X})],o.prototype,"frame",void 0),e([r({readOnly:!0,type:Number})],o.prototype,"frameCount",void 0),e([r({type:O})],o.prototype,"fullExtent",void 0),e([r({readOnly:!0})],o.prototype,"frameHorizonPoints",null),e([r({readOnly:!0})],o.prototype,"groundControlPoints",null),e([r({type:O})],o.prototype,"initialExtent",void 0),e([r({readOnly:!0,json:{read:{source:"id"}}})],o.prototype,"layerId",void 0),e([r({type:Boolean})],o.prototype,"loop",null),e([r({readOnly:!0})],o.prototype,"metadata",null),e([r({readOnly:!0})],o.prototype,"mimeType",null),e([r({type:Boolean})],o.prototype,"muted",null),e([r({type:B})],o.prototype,"playbackInfo",void 0),e([r({type:Number})],o.prototype,"playbackRate",null),e([r({type:String})],o.prototype,"playerUrl",null),e([r({readOnly:!0})],o.prototype,"playing",null),e([r({readOnly:!0,json:{read:{source:"poster"}}})],o.prototype,"posterUrl",void 0),e([r({readOnly:!0})],o.prototype,"qualities",void 0),e([r({readOnly:!0})],o.prototype,"serviceItemId",void 0),e([r()],o.prototype,"sourceJSON",void 0),e([r({readOnly:!0})],o.prototype,"sourceQuality",void 0),e([r({readOnly:!0,json:{name:"serviceType"}})],o.prototype,"sourceType",void 0),e([r()],o.prototype,"spatialReference",void 0),e([r({readOnly:!0,type:String})],o.prototype,"state",null),e([r({readOnly:!0,type:W})],o.prototype,"telemetry",null),e([r({type:T})],o.prototype,"telemetryDisplay",void 0),e([r({readOnly:!1,json:{read:{source:"name"}}})],o.prototype,"title",void 0),e([r({readOnly:!0})],o.prototype,"type",void 0),e([r(M)],o.prototype,"url",void 0),e([r({readOnly:!0})],o.prototype,"videoElement",null),e([r({readOnly:!0})],o.prototype,"videoHeight",null),e([r({readOnly:!0,json:{read:!1}})],o.prototype,"videoLayersInfo",void 0),e([m("service","videoLayersInfo",["id","name","poster","serviceType","type"])],o.prototype,"readLayerInfosFromService",null),e([r({readOnly:!0,nonNullable:!1,json:{read:{reader:A,source:"time"}}})],o.prototype,"videoTimeExtent",void 0),e([r({readOnly:!0})],o.prototype,"videoWidth",null),e([r({readOnly:!0})],o.prototype,"waiting",null),o=e([c("esri.layers.VideoLayer")],o);const Gt=o;export{Gt as default};
