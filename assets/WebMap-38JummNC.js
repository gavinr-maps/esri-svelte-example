const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./layersCreator-qSEwd4GK.js","./Collection-CEdjem1-.js","./tslib.es6-B3Jf3DVX.js","./Accessor-BLX9ikPh.js","./subclass-BZA_h8Db.js","./Evented-BHRw9x22.js","./shared-B3wH2qpO.js","./SimpleObservable-KocWTzVy.js","./portalLayers-BzFmbxxn.js","./associatedFeatureServiceUtils-CXx2I5Ic.js","./assets-C43MgM-v.js","./index-Bh2oEzTI.js","./index-2kwcjS9-.css","./arcgisLayerUrl-BX1FE5Hm.js","./persistableUrlUtils-fa1mAujs.js","./Portal-C10FKnaA.js","./Loadable-BabW5Xcc.js","./Promise-B2Hu02L7.js","./writer-DNAwXnhG.js","./Extent-Bf3YTe7m.js","./Point-Cg0-ChZE.js","./cast-Bjksrh93.js","./jsonMap-0cxwUWs2.js","./locale-C9TlLpzi.js","./PortalItem-DzgXrpyc.js","./lazyLayerLoader-Buplpp4b.js","./requestPresets-B-6DU6iY.js","./layerUtils-BrNoooE9.js","./portalItemUtils-BzVoFAku.js","./projection-B971H0Re.js","./vec3f64-BLpZdpfb.js","./Polyline-D9YkgmM_.js","./mathUtils-C4_ghTv4.js","./projectBuffer-Bs7GwaPY.js","./geodesicConstants-DWQLYX7F.js","./styleUtils-KMFBtb6u.js","./asyncUtils-CWX51uTe.js","./geometryServiceUtils-C6Kg3Uew.js","./project-DlMfXva8.js","./jsonUtils-CEfjT-BK.js","./utils-6jMaHUrH.js","./utils-Bema0iXE.js","./webdocSaveUtils-05fKEmYz.js","./MultiOriginJSONSupport-B5nfqtQh.js","./reactiveUtils-C5zUhJQJ.js","./originUtils-D69mHv66.js","./multiOriginJSONSupportUtils-C0wm8_Yw.js","./jsonContext-DueMnVx9.js","./basemapUtils-B9TjOm47.js","./Basemap-DVYOaWHz.js","./collectionUtils-D_lHIu88.js","./loadAll-B6mYSptb.js","./messages-OmQvZhAg.js","./writeUtils-Dz7BsE1e.js","./utils-93yNk4Xc.js","./colorUtils-0bJDPow9.js","./screenUtils-_ZIvrt5o.js","./mat4f32-DcsiF_Rp.js","./mat4-GpOFENPA.js","./common-DQOJ18NT.js","./resourceUtils-BZzv7-k7.js","./uuid-fwrPAdZb.js","./resourceUtils-VfNT3fc0.js","./saveUtils-gB1pYTqT.js"])))=>i.map(i=>d[i]);
import{r as i}from"./tslib.es6-B3Jf3DVX.js";import{_ as M}from"./index-Bh2oEzTI.js";import{f as c,m as oe,k as ne,a5 as se,t as ae,o as pe}from"./assets-C43MgM-v.js";import{L as le}from"./Map-iWpb5DpI.js";import{m as j}from"./Viewpoint-C4FqWA2d.js";import{m as n,a as u,g as K,b as T,n as J,O as me}from"./subclass-BZA_h8Db.js";import{V as Q}from"./Collection-CEdjem1-.js";import{m as ue}from"./Loadable-BabW5Xcc.js";import{t as X}from"./loadAll-B6mYSptb.js";import{b as ce,C as he,q as de}from"./Accessor-BLX9ikPh.js";import{S as ye}from"./MultiOriginJSONSupport-B5nfqtQh.js";import{n as ge}from"./Promise-B2Hu02L7.js";import{whenOnce as fe}from"./reactiveUtils-C5zUhJQJ.js";import{r as w,o as B}from"./writer-DNAwXnhG.js";import{R as we,g as W}from"./Point-Cg0-ChZE.js";import Z from"./PortalItem-DzgXrpyc.js";import{f as ve}from"./portalItemUtils-BzVoFAku.js";import{i as be,a as Ae,l as Ie}from"./Viewing-sdZ4A8fX.js";import{p as C}from"./TimeExtent-DocT5yPf.js";import{A as E}from"./interfaces-CL2NbQte.js";import{a as Se}from"./Widgets-upjPhxDC.js";import{b as _e}from"./Portal-C10FKnaA.js";import{e as xe}from"./jsonContext-DueMnVx9.js";import{p as $e,n as Ve}from"./project-DlMfXva8.js";import{f as Re}from"./writeUtils-Dz7BsE1e.js";import{f as Pe}from"./Bookmark-BoJ0Z38Y.js";import{i as d}from"./Clonable-D3rtuBWg.js";import{o as je}from"./date-DlqISzcw.js";import{m as z}from"./ColorBackground-CfloAtNa.js";import{s as P,n as Y}from"./utils-BpB3MnW1.js";import{T as Ee}from"./UtilityNetwork-BcQB-qCr.js";import{r as x}from"./enumeration-Ba5njXdz.js";import{n as D}from"./jsonMap-0cxwUWs2.js";import{n as Oe}from"./geometry-D964gYQX.js";import{f as Le}from"./jsonUtils-CEfjT-BK.js";import"./Basemap-DVYOaWHz.js";import"./collectionUtils-D_lHIu88.js";import"./messages-OmQvZhAg.js";import"./locale-C9TlLpzi.js";import"./Ground-CAIVlzbd.js";import"./Color-BCS62Hs5.js";import"./colorUtils-0bJDPow9.js";import"./mathUtils-C4_ghTv4.js";import"./compilerUtils-Dw3R0f-Z.js";import"./opacityUtils-C68Tlu6_.js";import"./CollectionFlattener-CQN6i8ZK.js";import"./Evented-BHRw9x22.js";import"./cast-Bjksrh93.js";import"./editableLayers-Cn9dHzhB.js";import"./catalogUtils-DyGHPM81.js";import"./layerUtils-BrNoooE9.js";import"./basemapUtils-B9TjOm47.js";import"./utils-93yNk4Xc.js";import"./screenUtils-_ZIvrt5o.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-GpOFENPA.js";import"./vec3f64-BLpZdpfb.js";import"./common-DQOJ18NT.js";import"./TablesMixin-5umgS75f.js";import"./Layer-CVt7Hb5J.js";import"./Identifiable-B1UbsKNt.js";import"./Extent-Bf3YTe7m.js";import"./Polyline-D9YkgmM_.js";import"./timeUtils-8fb_2oAt.js";import"./Cyclical-oTUX3aX7.js";import"./shared-B3wH2qpO.js";import"./SimpleObservable-KocWTzVy.js";import"./asyncUtils-CWX51uTe.js";import"./persistableUrlUtils-fa1mAujs.js";import"./projection-B971H0Re.js";import"./projectBuffer-Bs7GwaPY.js";import"./geodesicConstants-DWQLYX7F.js";import"./fieldType-BuzM0UHS.js";import"./TimeInterval-CNlkea1s.js";import"./utils-6jMaHUrH.js";import"./utils-Bema0iXE.js";import"./timeProperties-BBnV2Dje.js";import"./Version-BSlAgupz.js";import"./Graphic-DsxsIjhH.js";import"./PopupTemplate-BHMhS05j.js";import"./fieldUtils-tmQlKvWo.js";import"./intl-CChhNOV8.js";import"./ActionToggle-iT4slXc7.js";import"./symbols-CNimns--.js";import"./TextSymbol-D8QO_KUV.js";import"./materialUtils-DarhapKC.js";import"./aaBoundingBox-BE7cC1jD.js";import"./FeatureLayer-wa_7EIxE.js";import"./ClassBreaksRenderer-BuHwSyVK.js";import"./UniqueValueRenderer-BQtAHUSo.js";import"./diffUtils-BP7jmOAy.js";import"./colorRamps-pKd7I5WZ.js";import"./SizeVariable-936USOrb.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-DX1kS9Se.js";import"./lengthUtils-DL1-FDQQ.js";import"./ColorStop-Dk3U5tCk.js";import"./jsonUtils-Ds2Sqto-.js";import"./defaults-DZ1kfMRx.js";import"./defaultsJSON-GKolV7NZ.js";import"./RendererLegendOptions-B-4se3aU.js";import"./styleUtils-BYTm14n3.js";import"./jsonUtils-DxpLMo6d.js";import"./LRUCache-B_PHMSGm.js";import"./MemCache-Dx1v3xLC.js";import"./FieldsIndex-DpwHKAMX.js";import"./UnknownTimeZone-BkowvBs8.js";import"./OverrideHelper-ti072FkP.js";import"./colorUtils-aL8wj-8G.js";import"./vec42-YcqnINSP.js";import"./vec4f64-o2zAXfmz.js";import"./utils-D2PLyMFF.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-uj_P09aO.js";import"./HeatmapColorStop-BJc5nbwr.js";import"./heatmapUtils-Dwiv9IEa.js";import"./SimpleRenderer-BV2L9G_n.js";import"./layerContainerType-C5CzMsLd.js";import"./FeatureLayerBase-Ck7-w8TE.js";import"./formUtils-ylzKAM7E.js";import"./Field-ybkHhtnK.js";import"./HeightModelInfo-9nOoV6LU.js";import"./arcgisLayerUrl-BX1FE5Hm.js";import"./commonProperties-CPyIG_-u.js";import"./ElevationInfo-CA5m_tHv.js";import"./unitConversionUtils-BMfW9yAe.js";import"./AttributeTableTemplate-BZeVyq-j.js";import"./featureLayerUtils-DBsQMhTm.js";import"./featureQueryAll-DnVoEjkM.js";import"./Query-5Xpquc1r.js";import"./DataLayerSource-BKkswDvG.js";import"./FullTextSearch-Csd1Hktu.js";import"./AttachmentQuery-BUlkjzkx.js";import"./RelationshipQuery-DPPNeuLK.js";import"./LayerFloorInfo-CIQjg5Vk.js";import"./Relationship-COPq3qM4.js";import"./serviceCapabilitiesUtils-DAE5z8FP.js";import"./workers-D4HfeYKj.js";import"./Queue-yu3bZ02p.js";import"./editsZScale-Bs7_pSzI.js";import"./queryZScale-w66xFVGx.js";import"./FeatureSet-BHEkYP03.js";import"./APIKeyMixin-Di9kcRBS.js";import"./ArcGISService-B5qxetOY.js";import"./BlendLayer-CXM4n_Ge.js";import"./jsonUtils-CSnQD004.js";import"./parser-CTsgEym6.js";import"./CustomParametersMixin-B4u7wiBT.js";import"./EditBusLayer-DoTks2sU.js";import"./uuid-fwrPAdZb.js";import"./FeatureEffectLayer-CpM66wLd.js";import"./FeatureEffect-BEzQmzeC.js";import"./FeatureFilter-BMHRQSxq.js";import"./FeatureReductionLayer-Ddbk727V.js";import"./FeatureReductionSelection-7vaL4DYT.js";import"./labelingInfo-DYPSPZCH.js";import"./labelUtils-B8petyBk.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-CVyVfSPu.js";import"./OrderedLayer-C5VLMHgA.js";import"./OrderByInfo-IYmS1EXF.js";import"./PortalLayer-CKja4bdW.js";import"./RefreshableLayer-D7lXUJRS.js";import"./ScaleRangeLayer-Bb8Ig1Hz.js";import"./TemporalLayer-Dpq2hKKV.js";import"./TimeInfo-LUiaSFyX.js";import"./FeatureTemplate-CssMa1yk.js";import"./FeatureType-C0q_coeM.js";import"./fieldProperties-Cgxj08ZE.js";import"./versionUtils-CQ_WhYSP.js";import"./styleUtils-KMFBtb6u.js";import"./popupUtils-BBuPGAHd.js";import"./AlphaCutoff-UcccL64p.js";import"./NetworkElement-CyYx535m.js";var G;let b=G=class extends c{constructor(e){super(e),this.activeRange=null,this.currentRangeExtent=null,this.fullRangeExtent=null}clone(){return new G(K({activeRange:this.activeRange,currentRangeExtent:this.currentRangeExtent,fullRangeExtent:this.fullRangeExtent}))}};i([n({type:String,nonNullable:!0,json:{read:{source:"activeRangeName"},write:{target:"activeRangeName",isRequired:!0}}})],b.prototype,"activeRange",void 0),i([n({type:[Number],json:{write:!0}})],b.prototype,"currentRangeExtent",void 0),i([n({type:[Number],json:{write:!0}})],b.prototype,"fullRangeExtent",void 0),b=G=i([u("esri.webdoc.RangeInfo")],b);const H=b;function Ue(e,t){var r;return t.resourceInfo?ee(t,t.resourceInfo,{origin:e.origin}):(r=t.portalItem)!=null&&r.id?Ne(e,t,t.portalItem):Promise.resolve()}function ee(e,t,r){const o={context:{...r,layerContainerType:"operational-layers"}};return e.portalItem&&(o.context.portal=e.portalItem.portal||_e.getDefault()),M(()=>import("./layersCreator-qSEwd4GK.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]),import.meta.url).then(({populateOperationalLayers:s})=>{const p=[],m=t.operationalLayers;m!=null&&m.length&&p.push(s(e.layers,m,o));const a={...o,context:{...o.context,layerContainerType:"tables"},defaultLayerType:"ArcGISFeatureLayer"},y=t.tables;return y!=null&&y.length&&p.push(s(e.tables,y,a)),Promise.allSettled(p).then(()=>{})})}async function Ne(e,t,r){var m;if(await r.load().catch(a=>{throw new T(`${e.name}:load-portal-item`,"Failed to load portal item",{error:a})}),r.type!==e.itemType)throw new T(`${e.name}:invalid-portal-item`,`Invalid portal item type '${r.type}', expected '${e.itemType}'`,{type:r.type});const o=await r.fetchData();t.resourceInfo=o;const s=xe(r,e.origin);await Fe(e,t,o,s),t.resourceReferences={portalItem:r,paths:s.readResourcePaths};const p=await ke(t.initialViewProperties,r,J.getLogger(t));if(p){const a=((m=t.initialViewProperties)==null?void 0:m.clone())??e.createInitialViewProperties();a.viewpoint=p,t.initialViewProperties=a}}function Fe(e,t,r,o){const s=Te(e,r);return t.read(s,o),ee(t,s,o)}function Te(e,t){const r=e.parseVersion(t.version||"",e.name);return e.currentVersion.validate(r),t.version=`${r.major}.${r.minor}`,t}async function ke(e,t,r){var p;if((p=e==null?void 0:e.viewpoint)==null?void 0:p.targetGeometry)return null;const s=await De(e,t,r);return s?new j({targetGeometry:s}):null}async function De(e,t,r){const o=e==null?void 0:e.spatialReference,s=t==null?void 0:t.extent;if(!o||!s)return null;if(o.isWGS84)return s.clone();if(o.isWebMercator)return we(s);const{getGeometryServiceURL:p}=await M(()=>import("./geometryServiceUtils-C6Kg3Uew.js"),__vite__mapDeps([37,4,15,11,12,2,10,3,16,17,18,19,20,21,22,23,38,39,31,32,40,41]),import.meta.url);try{const m=await p(t),a=new $e({geometries:[s],outSpatialReference:o});return(await Ve(m,a))[0]}catch(m){r.error("Error projecting item's extent:",m)}return null}var q;let A=q=class extends c{constructor(e){super(e),this.editing=null,this.offline=null,this.viewing=null}clone(){return new q(K({editing:this.editing,offline:this.offline,viewing:this.viewing}))}};i([n({json:{write:!0}})],A.prototype,"editing",void 0),i([n({json:{write:!0}})],A.prototype,"offline",void 0),i([n({type:be,json:{write:!0}})],A.prototype,"viewing",void 0),A=q=i([u("esri.webmap.ApplicationProperties")],A);const Je=A;let g=class extends d(ce){constructor(e){super(e),this.background=null,this.rangeInfo=null,this.spatialReference=null,this.timeExtent=null,this.timeZone=je,this.viewpoint=null}};i([n({type:z})],g.prototype,"background",void 0),i([n({type:H})],g.prototype,"rangeInfo",void 0),i([n({type:W})],g.prototype,"spatialReference",void 0),i([n({type:C})],g.prototype,"timeExtent",void 0),i([n({nonNullable:!0})],g.prototype,"timeZone",void 0),i([n({type:j})],g.prototype,"viewpoint",void 0),g=i([u("esri.webmap.InitialViewProperties")],g);const k=g,te=Q.ofType(Pe),Be=new Map([["image/jpeg","jpeg"],["image/jpg","jpg"],["image/png","png"],["image/gif","gif"]]),Ge="ArcGIS Pro",qe=ve.JSAPI;let l=class extends ye(ue.LoadableMixin(ge(le))){constructor(e){super(e),this._isAuthoringAppSetByUser=!1,this._isAuthoringAppVersionSetByUser=!1,this._thumbnailFilename=null,this._updateFromPromise=null,this.resourceReferences={portalItem:null,paths:[]},this.applicationProperties=null,this.bookmarks=new te,this.floorInfo=null,this.initialViewProperties=new k,this.portalItem=null,this.sourceVersion=null,this.widgets=null,this._debouncedSaveOperations=he(async(t,r,o)=>{const{save:s,saveAs:p}=await M(()=>import("./webdocSaveUtils-05fKEmYz.js"),__vite__mapDeps([42,11,12,4,43,2,3,10,44,36,1,5,6,7,45,46,20,21,18,22,13,14,27,15,16,17,19,23,24,47,28,29,30,31,32,33,34,38,39,40,41,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63]),import.meta.url);switch(t){case E.SAVE:return s(this.context,this,r);case E.SAVE_AS:return p(this.context,this,o,r)}}),this.authoringApp=this.authoringAppVersion=null,this._isAuthoringAppSetByUser=this._isAuthoringAppVersionSetByUser=!1}destroy(){this.portalItem=de(this.portalItem)}initialize(){if(this.when().catch(e=>{J.getLogger(this).error("#load()","Failed to load web map",e)}),this.resourceInfo){let e;try{e=this._validateJSON(this.resourceInfo)}catch(t){return void this.addResolvingPromise(Promise.reject(t))}this.read(e)}}set authoringApp(e){this._isAuthoringAppSetByUser=!0,this._set("authoringApp",e)}writeAuthoringApp(e,t){e&&this._isAuthoringAppSetByUser?t.authoringApp=e:t.authoringApp=qe}set authoringAppVersion(e){this._isAuthoringAppVersionSetByUser=!0,this._set("authoringAppVersion",e)}writeAuthoringAppVersion(e,t){e&&this._isAuthoringAppVersionSetByUser?t.authoringAppVersion=e:t.authoringAppVersion=oe}readInitialViewProperties(e,t){var p,m;const r=new k;t.background&&(r.background=z.fromJSON(t.background));const o=(p=t.initialState)==null?void 0:p.timeExtent;o&&(r.timeExtent=C.fromArray(o));const s=(m=t.initialState)==null?void 0:m.viewpoint;return s&&(s.rotation&&P.parse(t.version||"","webmap").lessThan(2,20)&&t.authoringApp===Ge&&(s.rotation*=-1),r.viewpoint=j.fromJSON(s)),t.mapRangeInfo&&(r.rangeInfo=H.fromJSON(t.mapRangeInfo)),t.spatialReference&&(r.spatialReference=W.fromJSON(t.spatialReference)),t.timeZone&&(r.timeZone=t.timeZone),r}writeInitialViewProperties(e,t,r,o){var m;if(!e)return;(m=e.background)!=null&&m.color&&(t.background=e.background.write({},o));const{timeExtent:s,viewpoint:p}=e;if(p||s){const a={};p&&(a.viewpoint=p.write({},o)),s&&(a.timeExtent=s.toArray()),t.initialState=a}e.rangeInfo&&(t.mapRangeInfo=e.rangeInfo.toJSON(o)),e.spatialReference&&(t.spatialReference=e.spatialReference.write({},o)),t.timeZone=e.timeZone}writeLayers(e,t,r,o){t[r]=this._writeLayers(e,o,"operational-layers")}readSourceVersion(e,t){const[r,o]=t.version.split(".");return new P(parseInt(r,10),parseInt(o,10))}writeSourceVersion(e,t,r){t[r]=`${this.context.currentVersion.major}.${this.context.currentVersion.minor}`}writeTables(e,t,r,o){const s=this._writeLayers(e,o,"tables");s.length&&(t[r]=s)}get thumbnailUrl(){var e;return((e=this.portalItem)==null?void 0:e.thumbnailUrl)||null}set thumbnailUrl(e){e?(this._override("thumbnailUrl",e),this._thumbnailFilename=this._generateCustomThumbnailFilename(e)):this._clearThumbnailOverride()}get updatingFromView(){return!!this._updateFromPromise}load(e){return this.addResolvingPromise(Ue(this.context,this)),Promise.resolve(this)}loadAll(){return X(this,e=>{e(this.ground,this.basemap,this.layers,this.tables)})}read(e,t){t={...t,origin:this.context.origin};const r=this._getAuthoringPropsState();ne(this,e,o=>super.read(e,o),t),this._restoreAuthoringPropsFromState(r)}write(e,t){if(this.loadStatus!=="loaded"){const r=new T("webmap:not-loaded","Web map must be loaded before it can be serialized");throw J.getLogger(this).error("#toJSON()","Web map must be loaded before it can be serialized",this.loadError||this.loadStatus),r}return this._removeDanglingLayerRefs(),t={...t,origin:this.context.origin,restrictedWebMapWriting:!0,webmap:this},super.write(e,t)}async save(e){return this._debouncedSaveOperations(E.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(E.SAVE_AS,t,e)}async updateFrom(e,t){const r=this._updateFromInternal(e,t);this._updateFromPromise=r,await r,r===this._updateFromPromise&&(this._updateFromPromise=null)}getLayerJSONFromResourceInfo(e){var r,o,s,p;const t=this.resourceInfo;return this._collectAllLayersJSON([...((r=t==null?void 0:t.baseMap)==null?void 0:r.baseMapLayers)||[],...(t==null?void 0:t.operationalLayers)||[],...((p=(s=(o=this.basemap)==null?void 0:o.resourceInfo)==null?void 0:s.data)==null?void 0:p.baseMapLayers)||[]]).find(m=>m.id===e.id)}async updateItemThumbnail(){var e;this.thumbnailUrl&&this._isOverridden("thumbnailUrl")&&(await((e=this.portalItem)==null?void 0:e.updateThumbnail({thumbnail:this.thumbnailUrl,filename:this._thumbnailFilename})),this._clearThumbnailOverride())}getThumbnailState(){let e=this.thumbnailUrl;return e&&(e=this._isOverridden("thumbnailUrl")?e:se(e,"w","8192")),{thumbnailUrl:e,filename:this._thumbnailFilename}}restoreThumbnailFromState(e){this.thumbnailUrl=e.thumbnailUrl,this._thumbnailFilename=e.filename}_collectAllLayersJSON(e){return e.reduce((t,r)=>(t.push(r),r.layerType==="GroupLayer"&&(t=t.concat(this._collectAllLayersJSON(r.layers||[]))),t),[])}_writeLayers(e,t,r){return t={...t,layerContainerType:r},e.map(o=>Re(o,r==="tables"?null:this.getLayerJSONFromResourceInfo(o),t)).filter(me).toArray()}_validateJSON(e){const t=P.parse(e.version||"","webmap");return this.context.currentVersion.validate(t),e.version=`${t.major}.${t.minor}`,e}_removeDanglingLayerRefs(){var p,m;const e=this.applicationProperties,t=(p=e==null?void 0:e.viewing)==null?void 0:p.search,r=a=>this.allLayers.some(y=>y.id===a);if(t!=null&&t.layers&&(t.layers=t.layers.filter(a=>r(a.id))),t!=null&&t.tables&&(t.tables=t.tables.filter(a=>this.tables.some(y=>y.id===a.id))),e){const a=(m=e.editing)==null?void 0:m.locationTracking;a!=null&&a.info&&!r(a.info.layerId)&&(e.editing=null)}const o="presentation"in this?this.presentation:null,s=o==null?void 0:o.slides;s&&s.forEach(a=>{a.visibleLayers&&(a.visibleLayers=a.visibleLayers.filter(y=>r(y.id)))})}async _updateFromInternal(e,t){if(t??(t={}),await fe(()=>e.ready),this._updateInitialViewProperties(e,t),e.map===this)for(const r of e.allLayerViews)"visible"in r&&"visible"in r.layer&&r._isOverridden("visible")&&(r.layer.visible=r.visible),"featureEffect"in r&&"featureEffect"in r.layer&&r._isOverridden("featureEffect")&&(r.layer.featureEffect=r.featureEffect);await this._updateThumbnailUrl(e,t)}_updateInitialViewProperties(e,t){var r,o;if(t.backgroundExcluded||(this.initialViewProperties.background=(r=e.background)==null?void 0:r.clone()),this.initialViewProperties.spatialReference=(o=e.spatialReference)==null?void 0:o.clone(),this.initialViewProperties.timeZone=e.timeZone,t.viewpointExcluded||(this.initialViewProperties.viewpoint=new j({rotation:e.rotation,scale:t.scalePreserved?e.scale:null,targetGeometry:this._getViewExtent(e)})),!t.widgetsExcluded)for(const s of e.persistableViewModels)s.updateWebDocument(this)}_getViewExtent(e){const t=e.center.clone().normalize(),r=e.extent.clone(),o=r.width/2;return r.xmin=t.x-o,r.xmax=t.x+o,r}async _updateThumbnailUrl(e,t){if(t.thumbnailExcluded)return;const r=Ae(e,t.thumbnailSize),o=await e.takeScreenshot({format:"png",width:r.width,height:r.height});this._setAutoGeneratedThumbnail(o.dataUrl)}_setAutoGeneratedThumbnail(e){this.thumbnailUrl=e,this._thumbnailFilename=null}_clearThumbnailOverride(){this._clearOverride("thumbnailUrl"),this.clear("thumbnailUrl","user"),this._thumbnailFilename=null}_generateCustomThumbnailFilename(e){if(ae(e)){const t=pe(e),r=t==null?void 0:t.mediaType,o=r&&Be.get(r.toLowerCase())||null,s=`thumbnail${Date.now()}`;return o?`${s}.${o}`:s}return null}_getAuthoringPropsState(){return{authoringApp:this.authoringApp,authoringAppVersion:this.authoringAppVersion,isAuthoringAppSetByUser:this._isAuthoringAppSetByUser,isAuthoringAppVersionSetByUser:this._isAuthoringAppVersionSetByUser}}_restoreAuthoringPropsFromState(e){e.isAuthoringAppSetByUser?this.authoringApp=e.authoringApp:this._isAuthoringAppSetByUser=!1,e.isAuthoringAppVersionSetByUser?this.authoringAppVersion=e.authoringAppVersion:this._isAuthoringAppVersionSetByUser=!1}};i([n()],l.prototype,"_updateFromPromise",void 0),i([n({type:Je,json:{write:!0}})],l.prototype,"applicationProperties",void 0),i([n({type:String,json:{write:{allowNull:!0,ignoreOrigin:!0}}})],l.prototype,"authoringApp",null),i([w("authoringApp")],l.prototype,"writeAuthoringApp",null),i([n({type:String,json:{write:{allowNull:!0,ignoreOrigin:!0}}})],l.prototype,"authoringAppVersion",null),i([w("authoringAppVersion")],l.prototype,"writeAuthoringAppVersion",null),i([n({type:te,json:{write:{overridePolicy:e=>({enabled:!!(e&&e.length>0),ignoreOrigin:!0})}}})],l.prototype,"bookmarks",void 0),i([n({type:Ie,json:{name:"mapFloorInfo",write:!0}})],l.prototype,"floorInfo",void 0),i([n({type:k,nonNullable:!0,json:{read:{source:["background","initialState.timeExtent","initialState.viewpoint","mapRangeInfo","spatialReference","timeZone"]},write:{ignoreOrigin:!0,target:{background:{type:z},"initialState.timeExtent":{type:C},"initialState.viewpoint":{type:j},mapRangeInfo:{type:H},spatialReference:{type:W},"timeZone:":{type:String}}}}})],l.prototype,"initialViewProperties",void 0),i([B("initialViewProperties")],l.prototype,"readInitialViewProperties",null),i([w("initialViewProperties")],l.prototype,"writeInitialViewProperties",null),i([n({json:{read:!1,write:{target:"operationalLayers",ignoreOrigin:!0}}})],l.prototype,"layers",void 0),i([w("layers")],l.prototype,"writeLayers",null),i([n({type:Z})],l.prototype,"portalItem",void 0),i([n()],l.prototype,"resourceInfo",void 0),i([n({readOnly:!0,type:P,json:{read:{source:"version"},write:{allowNull:!0,ignoreOrigin:!0,target:"version",isRequired:!0}}})],l.prototype,"sourceVersion",void 0),i([B("sourceVersion")],l.prototype,"readSourceVersion",null),i([w("sourceVersion")],l.prototype,"writeSourceVersion",null),i([n({json:{read:!1,write:{ignoreOrigin:!0}}})],l.prototype,"tables",void 0),i([w("tables")],l.prototype,"writeTables",null),i([n()],l.prototype,"thumbnailUrl",null),i([n()],l.prototype,"updatingFromView",null),i([n({type:Se,json:{write:!0}})],l.prototype,"widgets",void 0),l=i([u("esri.WebDocument2D")],l);const Me=l;let I=class extends d(c){constructor(t){super(t),this.expression=null,this.returnType="string",this.title=null}};i([n({type:String,json:{write:{isRequired:!0}}})],I.prototype,"expression",void 0),i([n({type:["number","string"],json:{write:!0}})],I.prototype,"returnType",void 0),i([n({type:String,json:{write:!0}})],I.prototype,"title",void 0),I=i([u("esri.webdoc.geotriggersInfo.ExpressionInfo")],I);const re=I,O=new D({deviceLocation:"device-location"});let $=class extends d(c){constructor(t){super(t),this.filterExpression=null,this.type="device-location"}};i([n({type:re,json:{write:!0}})],$.prototype,"filterExpression",void 0),i([n({type:O.apiValues,readOnly:!0,json:{type:O.jsonValues,read:O.read,write:O.write}})],$.prototype,"type",void 0),$=i([u("esri.webdoc.geotriggersInfo.DeviceLocationFeed")],$);const We=$;let V=class extends d(c){constructor(t){super(t),this.geometry=null,this.where=null}};i([n({types:Oe,json:{read:Le,write:!0}})],V.prototype,"geometry",void 0),i([n({type:String,json:{write:!0}})],V.prototype,"where",void 0),V=i([u("esri.webdoc.geotriggersInfo.FeatureFilter")],V);const Ze=V;let S=class extends d(c){constructor(t){super(t),this.layerId=null,this.layerUrl=null,this.type="feature-layer"}};i([n({type:String,json:{write:{overridePolicy(){return{isRequired:this.layerUrl===null}}}}})],S.prototype,"layerId",void 0),i([n({type:String,json:{write:{overridePolicy(){return{isRequired:this.layerId===null}}}}})],S.prototype,"layerUrl",void 0),i([x({featureLayer:"feature-layer"},{readOnly:!0})],S.prototype,"type",void 0),S=i([u("esri.webdoc.geotriggersInfo.FeatureLayerSource")],S);const Ce=S;let v=class extends d(c){constructor(t){super(t),this.fenceSource=null,this.filter=null,this.bufferDistance=null,this.type="features"}};i([n({type:Ce,json:{write:{isRequired:!0}}})],v.prototype,"fenceSource",void 0),i([n({type:Ze,json:{write:!0}})],v.prototype,"filter",void 0),i([n({type:Number,json:{write:!0}})],v.prototype,"bufferDistance",void 0),i([x({features:"features"},{readOnly:!0})],v.prototype,"type",void 0),v=i([u("esri.webdoc.geotriggersInfo.FeatureFenceParameters")],v);const ze=v;let U=class extends d(c){constructor(t){super(t),this.type="fence"}};i([x({fence:"fence"},{readOnly:!0})],U.prototype,"type",void 0),U=i([u("esri.webdoc.geotriggersInfo.Geotrigger")],U);const ie=U;let R=class extends d(c){constructor(t){super(t),this.expressionInfo=null,this.requestedActions=null}};i([n({type:re,json:{write:!0}})],R.prototype,"expressionInfo",void 0),i([n({type:[String],json:{write:!0}})],R.prototype,"requestedActions",void 0),R=i([u("esri.webdoc.geotriggersInfo.GeotriggerNotificationOptions")],R);const He=R,Ke=new D({enterContainsAndExitDoesNotContain:"enter-contains-and-exit-does-not-contain",enterContainsAndExitDoesNotIntersect:"enter-contains-and-exit-does-not-intersect",enterIntersectsAndExitDoesNotIntersect:"enter-intersects-and-exit-does-not-intersect"}),Qe=new D({useGeometry:"use-geometry",useGeometryWithAccuracy:"use-geometry-with-accuracy"}),L=new D({enter:"enter",enterOrExit:"enter-or-exit",exit:"exit"});let h=class extends ie{constructor(e){super(e),this.enterExitRule="enter-contains-and-exit-does-not-intersect",this.feed=null,this.feedAccuracyMode="use-geometry",this.fenceNotificationRule=null,this.fenceParameters=null,this.name=null,this.notificationOptions=null,this.type="fence"}};i([x(Ke)],h.prototype,"enterExitRule",void 0),i([n({type:We,json:{write:{isRequired:!0}}})],h.prototype,"feed",void 0),i([x(Qe)],h.prototype,"feedAccuracyMode",void 0),i([n({type:L.apiValues,json:{type:L.jsonValues,read:L.read,write:{writer:L.write,isRequired:!0}}})],h.prototype,"fenceNotificationRule",void 0),i([n({type:ze,json:{write:{isRequired:!0}}})],h.prototype,"fenceParameters",void 0),i([n({type:String,json:{write:!0}})],h.prototype,"name",void 0),i([n({type:He,json:{write:!0}})],h.prototype,"notificationOptions",void 0),i([x({fence:"fence"},{readOnly:!0})],h.prototype,"type",void 0),h=i([u("esri.webdoc.geotriggersInfo.FenceGeotrigger")],h);const Xe=h,Ye={base:ie,key:"type",typeMap:{fence:Xe}};let N=class extends d(c){constructor(e){super(e),this.geotriggers=null}};i([n({types:[Ye],json:{write:{isRequired:!0}}})],N.prototype,"geotriggers",void 0),N=i([u("esri.webdoc.GeotriggersInfo")],N);const et=N;let _=class extends d(c){constructor(e){super(e),this.portalItem=null}readPortalItem(e,t,r){const{itemId:o}=t;if(o)return new Z({id:o,portal:r==null?void 0:r.portal})}writePortalItem(e,t){e!=null&&e.id&&(t.itemId=e.id)}};i([n({type:Z,json:{write:{isRequired:!0}}})],_.prototype,"portalItem",void 0),i([B("portalItem",["itemId"])],_.prototype,"readPortalItem",null),i([w("portalItem",{itemId:{type:String}})],_.prototype,"writePortalItem",null),_=i([u("esri.webdoc.ips.PositioningService")],_);const tt=_;let F=class extends d(c){constructor(e){super(e),this.positioningService=null}};i([n({type:tt,json:{write:{isRequired:!0}}})],F.prototype,"positioningService",void 0),F=i([u("esri.webdoc.IPSInfo")],F);const rt=F,it={currentVersion:Y,createInitialViewProperties:()=>new k,parseVersion:P.parse,itemType:"Web Map",name:"webmap",origin:"web-map"},ot=Q.ofType(Ee);let f=class extends Me{constructor(e){super(e),this.geotriggersInfo=null,this.ipsInfo=null,this.presentation=null,this.utilityNetworks=null}destroy(){if(this.utilityNetworks){const e=this.utilityNetworks.removeAll();for(const t of e)t.destroy();this.utilityNetworks.destroy()}}get context(){return it}loadAll(){return X(this,e=>{var t,r;e(this.ground,this.basemap,this.layers,this.tables,(r=(t=this.ipsInfo)==null?void 0:t.positioningService)==null?void 0:r.portalItem)})}static fromJSON(e){if(e)return new this({resourceInfo:e});throw new T("webmap:empty-resource","Expected a JSON resource but got nothing")}};f.VERSION=Y,i([n({type:et,json:{write:!0}})],f.prototype,"geotriggersInfo",void 0),i([n({type:rt,json:{write:!0,name:"mapIPSInfo"}})],f.prototype,"ipsInfo",void 0),i([n({json:{write:!0}})],f.prototype,"presentation",void 0),i([n({type:ot,json:{read:!0,write:!0}})],f.prototype,"utilityNetworks",void 0),f=i([u("esri.WebMap")],f);const xo=f;export{xo as default};