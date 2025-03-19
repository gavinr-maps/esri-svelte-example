const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./layersCreator-CoWD_P2i.js","./reactiveUtils-BR0C1Kq4.js","./Accessor-BHnuXKD2.js","./Evented-DCWccWGU.js","./SimpleObservable-7oieNGD8.js","./loadUtils-BiECFALG.js","./requestPresets-v9_cUP4i.js","./cast-BA_-jlhc.js","./index-tefRSezt.js","./index-Cx51aysm.css","./JSONSupport-CGdeqxpk.js","./associatedFeatureServiceUtils-Bfw5GA1N.js","./Portal-CTRRujjZ.js","./Promise-CmQqe-ke.js","./writer-B2bQV2uU.js","./Extent-CBBGeHb-.js","./Point-XGrwlf63.js","./PortalItem-CXk7DqVv.js","./fetchService-zLGBmq3X.js","./lazyLayerLoader-cbt8Aa3v.js","./portalLayers-B1IFhyYP.js","./layerUtils-dJgsXxkC.js","./portalItemUtils-rm7sAgcm.js","./projection-B2I9Bzj_.js","./vec3f64-BLpZdpfb.js","./Polyline-BmuD2-ZN.js","./mathUtils-DV9iOXpW.js","./projectBuffer-DOU0xvVi.js","./geodesicConstants-yASAK_zX.js","./styleUtils-BQ_uVsZf.js","./geometryServiceUtils-CxRopEHH.js","./project-BoEABhcm.js","./jsonUtils-Cu7OBRmN.js","./utils-Cy8wFNQo.js","./utils-CkSELPnj.js","./webdocSaveUtils-DtKNuvKv.js","./MultiOriginJSONSupport-nGLpCFeg.js","./originUtils-D69mHv66.js","./multiOriginJSONSupportUtils-C0wm8_Yw.js","./jsonContext-CdRtpU_S.js","./basemapUtils-DQr5T1wn.js","./utils-DYurMneM.js","./colorUtils-Rxh2V3ai.js","./screenUtils-_ZIvrt5o.js","./mat4f32-DcsiF_Rp.js","./mat4-Fi6iAz29.js","./common-DQOJ18NT.js","./basemapDefinitions-BmB40s1J.js","./intl-Do3GEEJ7.js","./resourceUtils-sguC8912.js","./uuid-Cl5lrJ4c.js","./resourceUtils-t6ydfQSV.js","./saveUtils-DLMLWtvP.js"])))=>i.map(i=>d[i]);
import{_ as I}from"./index-tefRSezt.js";import{r as n,m as s,c as L,a as b,s as v,B as A,g as T,k as j,N,G as k}from"./Accessor-BHnuXKD2.js";import{a2 as B,a5 as J,r as G,e as Z}from"./cast-BA_-jlhc.js";import{L as D}from"./DefaultUI-DqLHkAzt.js";import{m as y}from"./Viewpoint-Cv8Otrne.js";import{V as M,w as C}from"./reactiveUtils-BR0C1Kq4.js";import{C as W,m as z}from"./Portal-CTRRujjZ.js";import{t as q}from"./loadAll-Do8S8AWH.js";import{S as H}from"./MultiOriginJSONSupport-nGLpCFeg.js";import{e as K,p as Q}from"./Promise-CmQqe-ke.js";import{r as c,o as E}from"./writer-B2bQV2uU.js";import{S as O,d as X}from"./JSONSupport-CGdeqxpk.js";import{E as Y,g as x}from"./Point-XGrwlf63.js";import ee from"./PortalItem-CXk7DqVv.js";import{E as te}from"./portalItemUtils-rm7sAgcm.js";import{i as ie,a as re,l as oe}from"./Viewing-BEd2CNs6.js";import{p as P}from"./TimeExtent-J5qnUFx_.js";import{A as f}from"./interfaces-CL2NbQte.js";import{a as ne}from"./Widgets-Bgpt11Wu.js";import{e as ae}from"./jsonContext-CdRtpU_S.js";import{m as se,n as le}from"./project-BoEABhcm.js";import{g as pe}from"./writeUtils-C3ZSK02Z.js";import{y as ue}from"./Bookmark-DQLl8nc5.js";import{a as me}from"./Clonable-DvJsj5LF.js";import{m as R}from"./View2D-CIpCSKxG.js";import{s as w}from"./utils-D02V2_jH.js";var _;let g=_=class extends O{constructor(e){super(e),this.activeRange=null,this.currentRangeExtent=null,this.fullRangeExtent=null}clone(){return new _(L({activeRange:this.activeRange,currentRangeExtent:this.currentRangeExtent,fullRangeExtent:this.fullRangeExtent}))}};n([s({type:String,nonNullable:!0,json:{read:{source:"activeRangeName"},write:{target:"activeRangeName",isRequired:!0}}})],g.prototype,"activeRange",void 0),n([s({type:[Number],json:{write:!0}})],g.prototype,"currentRangeExtent",void 0),n([s({type:[Number],json:{write:!0}})],g.prototype,"fullRangeExtent",void 0),g=_=n([b("esri.webdoc.RangeInfo")],g);const $=g;function he(e,t){var i;return t.resourceInfo?U(t,t.resourceInfo,{origin:e.origin}):(i=t.portalItem)!=null&&i.id?ce(e,t,t.portalItem):Promise.resolve()}function U(e,t,i){const r={context:{...i,layerContainerType:"operational-layers"}};return e.portalItem&&(r.context.portal=e.portalItem.portal||W.getDefault()),I(()=>import("./layersCreator-CoWD_P2i.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]),import.meta.url).then(({populateOperationalLayers:o})=>{const l=[],u=t.operationalLayers;u!=null&&u.length&&l.push(o(e.layers,u,r));const a={...r,context:{...r.context,layerContainerType:"tables"},defaultLayerType:"ArcGISFeatureLayer"},m=t.tables;return m!=null&&m.length&&l.push(o(e.tables,m,a)),Promise.allSettled(l).then(()=>{})})}async function ce(e,t,i){var u;if(await i.load().catch(a=>{throw new v(`${e.name}:load-portal-item`,"Failed to load portal item",{error:a})}),i.type!==e.itemType)throw new v(`${e.name}:invalid-portal-item`,`Invalid portal item type '${i.type}', expected '${e.itemType}'`,{type:i.type});const r=await i.fetchData();t.resourceInfo=r;const o=ae(i,e.origin);await ge(e,t,r,o),t.resourceReferences={portalItem:i,paths:o.readResourcePaths};const l=await ye(t.initialViewProperties,i,A.getLogger(t));if(l){const a=((u=t.initialViewProperties)==null?void 0:u.clone())??e.createInitialViewProperties();a.viewpoint=l,t.initialViewProperties=a}}function ge(e,t,i,r){const o=de(e,i);return t.read(o,r),U(t,o,r)}function de(e,t){const i=e.parseVersion(t.version||"",e.name);return e.currentVersion.validate(i),t.version=`${i.major}.${i.minor}`,t}async function ye(e,t,i){var l;if((l=e==null?void 0:e.viewpoint)==null?void 0:l.targetGeometry)return null;const o=await fe(e,t,i);return o?new y({targetGeometry:o}):null}async function fe(e,t,i){const r=e==null?void 0:e.spatialReference,o=t==null?void 0:t.extent;if(!r||!o)return null;if(r.isWGS84)return o.clone();if(r.isWebMercator)return Y(o);const{getGeometryServiceURL:l}=await I(()=>import("./geometryServiceUtils-CxRopEHH.js"),__vite__mapDeps([30,2,12,8,9,7,10,13,14,15,16,31,32,25,26,33,34]),import.meta.url);try{const u=await l(t),a=new se({geometries:[o],outSpatialReference:r});return(await le(u,a))[0]}catch(u){i.error("Error projecting item's extent:",u)}return null}var S;let d=S=class extends O{constructor(e){super(e),this.editing=null,this.offline=null,this.viewing=null}clone(){return new S(L({editing:this.editing,offline:this.offline,viewing:this.viewing}))}};n([s({json:{write:!0}})],d.prototype,"editing",void 0),n([s({json:{write:!0}})],d.prototype,"offline",void 0),n([s({type:ie,json:{write:!0}})],d.prototype,"viewing",void 0),d=S=n([b("esri.webmap.ApplicationProperties")],d);const we=d;let h=class extends me.ClonableMixin(T){constructor(e){super(e),this.background=null,this.rangeInfo=null,this.spatialReference=null,this.timeExtent=null,this.timeZone=K,this.viewpoint=null}};n([s({type:R})],h.prototype,"background",void 0),n([s({type:$})],h.prototype,"rangeInfo",void 0),n([s({type:x})],h.prototype,"spatialReference",void 0),n([s({type:P})],h.prototype,"timeExtent",void 0),n([s({nonNullable:!0})],h.prototype,"timeZone",void 0),n([s({type:y})],h.prototype,"viewpoint",void 0),h=n([b("esri.webmap.InitialViewProperties")],h);const V=h,F=M.ofType(ue),be=new Map([["image/jpeg","jpeg"],["image/jpg","jpg"],["image/png","png"],["image/gif","gif"]]),ve="ArcGIS Pro",Ae=te.JSAPI;let p=class extends H(z.LoadableMixin(Q.EsriPromiseMixin(D))){constructor(e){super(e),this._isAuthoringAppSetByUser=!1,this._isAuthoringAppVersionSetByUser=!1,this._thumbnailFilename=null,this._updateFromPromise=null,this.resourceReferences={portalItem:null,paths:[]},this.applicationProperties=null,this.bookmarks=new F,this.floorInfo=null,this.initialViewProperties=new V,this.portalItem=null,this.sourceVersion=null,this.widgets=null,this._debouncedSaveOperations=j(async(t,i,r)=>{const{save:o,saveAs:l}=await I(()=>import("./webdocSaveUtils-DtKNuvKv.js"),__vite__mapDeps([35,8,9,2,36,10,1,3,4,7,37,38,16,14,21,12,13,15,17,39,22,23,24,25,26,27,28,31,32,33,34,40,41,42,43,44,45,46,47,48,49,50,51,52]),import.meta.url);switch(t){case f.SAVE:return o(this.context,this,i);case f.SAVE_AS:return l(this.context,this,r,i)}}),this.authoringApp=this.authoringAppVersion=null,this._isAuthoringAppSetByUser=this._isAuthoringAppVersionSetByUser=!1}destroy(){this.portalItem=N(this.portalItem)}initialize(){if(this.when().catch(e=>{A.getLogger(this).error("#load()","Failed to load web map",e)}),this.resourceInfo){let e;try{e=this._validateJSON(this.resourceInfo)}catch(t){return void this.addResolvingPromise(Promise.reject(t))}this.read(e)}}set authoringApp(e){this._isAuthoringAppSetByUser=!0,this._set("authoringApp",e)}writeAuthoringApp(e,t){e&&this._isAuthoringAppSetByUser?t.authoringApp=e:t.authoringApp=Ae}set authoringAppVersion(e){this._isAuthoringAppVersionSetByUser=!0,this._set("authoringAppVersion",e)}writeAuthoringAppVersion(e,t){e&&this._isAuthoringAppVersionSetByUser?t.authoringAppVersion=e:t.authoringAppVersion=B}readInitialViewProperties(e,t){var l,u;const i=new V;t.background&&(i.background=R.fromJSON(t.background));const r=(l=t.initialState)==null?void 0:l.timeExtent;r&&(i.timeExtent=P.fromArray(r));const o=(u=t.initialState)==null?void 0:u.viewpoint;return o&&(o.rotation&&w.parse(t.version||"","webmap").lessThan(2,20)&&t.authoringApp===ve&&(o.rotation*=-1),i.viewpoint=y.fromJSON(o)),t.mapRangeInfo&&(i.rangeInfo=$.fromJSON(t.mapRangeInfo)),t.spatialReference&&(i.spatialReference=x.fromJSON(t.spatialReference)),t.timeZone&&(i.timeZone=t.timeZone),i}writeInitialViewProperties(e,t,i,r){var u;if(!e)return;(u=e.background)!=null&&u.color&&(t.background=e.background.write({},r));const{timeExtent:o,viewpoint:l}=e;if(l||o){const a={};l&&(a.viewpoint=l.write({},r)),o&&(a.timeExtent=o.toArray()),t.initialState=a}e.rangeInfo&&(t.mapRangeInfo=e.rangeInfo.toJSON(r)),e.spatialReference&&(t.spatialReference=e.spatialReference.write({},r)),t.timeZone=e.timeZone}writeLayers(e,t,i,r){t[i]=this._writeLayers(e,r,"operational-layers")}readSourceVersion(e,t){const[i,r]=t.version.split(".");return new w(parseInt(i,10),parseInt(r,10))}writeSourceVersion(e,t,i){t[i]=`${this.context.currentVersion.major}.${this.context.currentVersion.minor}`}writeTables(e,t,i,r){const o=this._writeLayers(e,r,"tables");o.length&&(t[i]=o)}get thumbnailUrl(){var e;return((e=this.portalItem)==null?void 0:e.thumbnailUrl)||null}set thumbnailUrl(e){e?(this._override("thumbnailUrl",e),this._thumbnailFilename=this._generateCustomThumbnailFilename(e)):this._clearThumbnailOverride()}get updatingFromView(){return!!this._updateFromPromise}load(e){return this.addResolvingPromise(he(this.context,this)),Promise.resolve(this)}loadAll(){return q(this,e=>{e(this.ground,this.basemap,this.layers,this.tables)})}read(e,t){t={...t,origin:this.context.origin};const i=this._getAuthoringPropsState();X(this,e,r=>super.read(e,r),t),this._restoreAuthoringPropsFromState(i)}write(e,t){if(this.loadStatus!=="loaded"){const i=new v("webmap:not-loaded","Web map must be loaded before it can be serialized");throw A.getLogger(this).error("#toJSON()","Web map must be loaded before it can be serialized",this.loadError||this.loadStatus),i}return this._removeDanglingLayerRefs(),t={...t,origin:this.context.origin,restrictedWebMapWriting:!0,webmap:this},super.write(e,t)}async save(e){return this._debouncedSaveOperations(f.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(f.SAVE_AS,t,e)}async updateFrom(e,t){const i=this._updateFromInternal(e,t);this._updateFromPromise=i,await i,i===this._updateFromPromise&&(this._updateFromPromise=null)}getLayerJSONFromResourceInfo(e){var i,r,o,l;const t=this.resourceInfo;return this._collectAllLayersJSON([...((i=t==null?void 0:t.baseMap)==null?void 0:i.baseMapLayers)||[],...(t==null?void 0:t.operationalLayers)||[],...((l=(o=(r=this.basemap)==null?void 0:r.resourceInfo)==null?void 0:o.data)==null?void 0:l.baseMapLayers)||[]]).find(u=>u.id===e.id)}async updateItemThumbnail(){var e;this.thumbnailUrl&&this._isOverridden("thumbnailUrl")&&(await((e=this.portalItem)==null?void 0:e.updateThumbnail({thumbnail:this.thumbnailUrl,filename:this._thumbnailFilename})),this._clearThumbnailOverride())}getThumbnailState(){let e=this.thumbnailUrl;return e&&(e=this._isOverridden("thumbnailUrl")?e:J(e,"w","8192")),{thumbnailUrl:e,filename:this._thumbnailFilename}}restoreThumbnailFromState(e){this.thumbnailUrl=e.thumbnailUrl,this._thumbnailFilename=e.filename}_collectAllLayersJSON(e){return e.reduce((t,i)=>(t.push(i),i.layerType==="GroupLayer"&&(t=t.concat(this._collectAllLayersJSON(i.layers||[]))),t),[])}_writeLayers(e,t,i){return t={...t,layerContainerType:i},e.map(r=>pe(r,i==="tables"?null:this.getLayerJSONFromResourceInfo(r),t)).filter(k).toArray()}_validateJSON(e){const t=w.parse(e.version||"","webmap");return this.context.currentVersion.validate(t),e.version=`${t.major}.${t.minor}`,e}_removeDanglingLayerRefs(){var l,u;const e=this.applicationProperties,t=(l=e==null?void 0:e.viewing)==null?void 0:l.search,i=a=>this.allLayers.some(m=>m.id===a);if(t!=null&&t.layers&&(t.layers=t.layers.filter(a=>i(a.id))),t!=null&&t.tables&&(t.tables=t.tables.filter(a=>this.tables.some(m=>m.id===a.id))),e){const a=(u=e.editing)==null?void 0:u.locationTracking;a!=null&&a.info&&!i(a.info.layerId)&&(e.editing=null)}const r="presentation"in this?this.presentation:null,o=r==null?void 0:r.slides;o&&o.forEach(a=>{a.visibleLayers&&(a.visibleLayers=a.visibleLayers.filter(m=>i(m.id)))})}async _updateFromInternal(e,t){if(t??(t={}),await C(()=>e.ready),this._updateInitialViewProperties(e,t),e.map===this)for(const i of e.allLayerViews)"visible"in i&&"visible"in i.layer&&i._isOverridden("visible")&&(i.layer.visible=i.visible),"featureEffect"in i&&"featureEffect"in i.layer&&i._isOverridden("featureEffect")&&(i.layer.featureEffect=i.featureEffect);await this._updateThumbnailUrl(e,t)}_updateInitialViewProperties(e,t){var i,r;if(t.backgroundExcluded||(this.initialViewProperties.background=(i=e.background)==null?void 0:i.clone()),this.initialViewProperties.spatialReference=(r=e.spatialReference)==null?void 0:r.clone(),this.initialViewProperties.timeZone=e.timeZone,t.viewpointExcluded||(this.initialViewProperties.viewpoint=new y({rotation:e.rotation,scale:t.scalePreserved?e.scale:null,targetGeometry:this._getViewExtent(e)})),!t.widgetsExcluded)for(const o of e.persistableViewModels)o.updateWebDocument(this)}_getViewExtent(e){const t=e.center.clone().normalize(),i=e.extent.clone(),r=i.width/2;return i.xmin=t.x-r,i.xmax=t.x+r,i}async _updateThumbnailUrl(e,t){if(t.thumbnailExcluded)return;const i=re(e,t.thumbnailSize),r=await e.takeScreenshot({format:"png",width:i.width,height:i.height});this._setAutoGeneratedThumbnail(r.dataUrl)}_setAutoGeneratedThumbnail(e){this.thumbnailUrl=e,this._thumbnailFilename=null}_clearThumbnailOverride(){this._clearOverride("thumbnailUrl"),this.clear("thumbnailUrl","user"),this._thumbnailFilename=null}_generateCustomThumbnailFilename(e){if(G(e)){const t=Z(e),i=t==null?void 0:t.mediaType,r=i&&be.get(i.toLowerCase())||null,o=`thumbnail${Date.now()}`;return r?`${o}.${r}`:o}return null}_getAuthoringPropsState(){return{authoringApp:this.authoringApp,authoringAppVersion:this.authoringAppVersion,isAuthoringAppSetByUser:this._isAuthoringAppSetByUser,isAuthoringAppVersionSetByUser:this._isAuthoringAppVersionSetByUser}}_restoreAuthoringPropsFromState(e){e.isAuthoringAppSetByUser?this.authoringApp=e.authoringApp:this._isAuthoringAppSetByUser=!1,e.isAuthoringAppVersionSetByUser?this.authoringAppVersion=e.authoringAppVersion:this._isAuthoringAppVersionSetByUser=!1}};n([s()],p.prototype,"_updateFromPromise",void 0),n([s({type:we,json:{write:!0}})],p.prototype,"applicationProperties",void 0),n([s({type:String,json:{write:{allowNull:!0,ignoreOrigin:!0}}})],p.prototype,"authoringApp",null),n([c("authoringApp")],p.prototype,"writeAuthoringApp",null),n([s({type:String,json:{write:{allowNull:!0,ignoreOrigin:!0}}})],p.prototype,"authoringAppVersion",null),n([c("authoringAppVersion")],p.prototype,"writeAuthoringAppVersion",null),n([s({type:F,json:{write:{overridePolicy:e=>({enabled:!!(e&&e.length>0),ignoreOrigin:!0})}}})],p.prototype,"bookmarks",void 0),n([s({type:oe,json:{name:"mapFloorInfo",write:!0}})],p.prototype,"floorInfo",void 0),n([s({type:V,nonNullable:!0,json:{read:{source:["background","initialState.timeExtent","initialState.viewpoint","mapRangeInfo","spatialReference","timeZone"]},write:{ignoreOrigin:!0,target:{background:{type:R},"initialState.timeExtent":{type:P},"initialState.viewpoint":{type:y},mapRangeInfo:{type:$},spatialReference:{type:x},"timeZone:":{type:String}}}}})],p.prototype,"initialViewProperties",void 0),n([E("initialViewProperties")],p.prototype,"readInitialViewProperties",null),n([c("initialViewProperties")],p.prototype,"writeInitialViewProperties",null),n([s({json:{read:!1,write:{target:"operationalLayers",ignoreOrigin:!0}}})],p.prototype,"layers",void 0),n([c("layers")],p.prototype,"writeLayers",null),n([s({type:ee})],p.prototype,"portalItem",void 0),n([s()],p.prototype,"resourceInfo",void 0),n([s({readOnly:!0,type:w,json:{read:{source:"version"},write:{allowNull:!0,ignoreOrigin:!0,target:"version",isRequired:!0}}})],p.prototype,"sourceVersion",void 0),n([E("sourceVersion")],p.prototype,"readSourceVersion",null),n([c("sourceVersion")],p.prototype,"writeSourceVersion",null),n([s({json:{read:!1,write:{ignoreOrigin:!0}}})],p.prototype,"tables",void 0),n([c("tables")],p.prototype,"writeTables",null),n([s()],p.prototype,"thumbnailUrl",null),n([s()],p.prototype,"updatingFromView",null),n([s({type:ne,json:{write:!0}})],p.prototype,"widgets",void 0),p=n([b("esri.WebDocument2D")],p);const qe=p;export{qe as C,V as f};
