const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ElevationQuery-C0bbwpsV.js","./asyncUtils-CWX51uTe.js","./tslib.es6-B3Jf3DVX.js","./Accessor-BLX9ikPh.js","./subclass-BZA_h8Db.js","./Point-Cg0-ChZE.js","./cast-Bjksrh93.js","./writer-DNAwXnhG.js","./assets-C43MgM-v.js","./index-Bh2oEzTI.js","./index-2kwcjS9-.css","./jsonMap-0cxwUWs2.js","./Polyline-D9YkgmM_.js","./Extent-Bf3YTe7m.js","./mathUtils-C4_ghTv4.js","./projection-B971H0Re.js","./SimpleObservable-KocWTzVy.js","./vec3f64-BLpZdpfb.js","./projectBuffer-Bs7GwaPY.js","./geodesicConstants-DWQLYX7F.js","./ElevationSamplerData-DF8Bl6I9.js","./geometry-D964gYQX.js","./ElevationTile-F2xXmLtF.js","./TileKey-DZd6gJy7.js"])))=>i.map(i=>d[i]);
import{_ as n}from"./index-Bh2oEzTI.js";import{r as p}from"./tslib.es6-B3Jf3DVX.js";import{U as m,v}from"./assets-C43MgM-v.js";import{b as f,m as a,a as w}from"./subclass-BZA_h8Db.js";import{F as g,p as T,s as d}from"./Accessor-BLX9ikPh.js";import{S}from"./MultiOriginJSONSupport-B5nfqtQh.js";import{o as c}from"./writer-DNAwXnhG.js";import{v as b}from"./HeightModelInfo-9nOoV6LU.js";import _ from"./Layer-CVt7Hb5J.js";import{p as $}from"./ArcGISCachedService-gctVQNPc.js";import{l as I}from"./ArcGISService-B5qxetOY.js";import{b as O}from"./OperationalLayer-CVyVfSPu.js";import{j as E}from"./PortalLayer-CKja4bdW.js";import{y as D}from"./commonProperties-CPyIG_-u.js";import{s as L,a as j}from"./LercDecoder-fMWPataJ.js";import"./jsonMap-0cxwUWs2.js";import"./Point-Cg0-ChZE.js";import"./cast-Bjksrh93.js";import"./geometry-D964gYQX.js";import"./Extent-Bf3YTe7m.js";import"./Polyline-D9YkgmM_.js";import"./mathUtils-C4_ghTv4.js";import"./Evented-BHRw9x22.js";import"./Identifiable-B1UbsKNt.js";import"./Loadable-BabW5Xcc.js";import"./Promise-B2Hu02L7.js";import"./TimeExtent-DocT5yPf.js";import"./timeUtils-8fb_2oAt.js";import"./date-DlqISzcw.js";import"./locale-C9TlLpzi.js";import"./TileInfo-Dphjf6xH.js";import"./TileKey-DZd6gJy7.js";import"./TileInfoTilemapCache-BBp-yLg6.js";import"./TilemapCache-BatDkYWf.js";import"./ByteSizeUnit-BsxeN7wM.js";import"./LRUCache-B_PHMSGm.js";import"./MemCache-Dx1v3xLC.js";import"./reactiveUtils-C5zUhJQJ.js";import"./asyncUtils-CWX51uTe.js";import"./Collection-CEdjem1-.js";import"./shared-B3wH2qpO.js";import"./SimpleObservable-KocWTzVy.js";import"./arcgisLayerUrl-BX1FE5Hm.js";import"./persistableUrlUtils-fa1mAujs.js";import"./layerContainerType-C5CzMsLd.js";import"./layerUtils-BrNoooE9.js";import"./Portal-C10FKnaA.js";import"./PortalItem-DzgXrpyc.js";import"./portalItemUtils-BzVoFAku.js";import"./projection-B971H0Re.js";import"./vec3f64-BLpZdpfb.js";import"./projectBuffer-Bs7GwaPY.js";import"./geodesicConstants-DWQLYX7F.js";import"./ElevationInfo-CA5m_tHv.js";import"./fieldUtils-tmQlKvWo.js";import"./intl-CChhNOV8.js";import"./messages-OmQvZhAg.js";import"./unitConversionUtils-BMfW9yAe.js";import"./lengthUtils-DL1-FDQQ.js";import"./AttributeTableTemplate-BZeVyq-j.js";import"./opacityUtils-C68Tlu6_.js";import"./WorkerHandle-T1sH-Myb.js";import"./workers-D4HfeYKj.js";import"./Queue-yu3bZ02p.js";let o=class extends $(I(O(E(S(_))))){constructor(...e){super(...e),this.capabilities={operations:{supportsTileMap:!1}},this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=L()}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}destroy(){this._lercDecoder=g(this._lercDecoder)}readCapabilities(e,r){const t=r.capabilities&&r.capabilities.split(",").map(i=>i.toLowerCase().trim());return t?{operations:{supportsTileMap:t.includes("tilemap")}}:{operations:{supportsTileMap:!1}}}readVersion(e,r){let t=r.currentVersion;return t||(t=9.3),t}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:t=>{if(t.typeKeywords){for(let i=0;i<t.typeKeywords.length;i++)if(t.typeKeywords[i].toLowerCase()==="elevation 3d layer")return!0}throw new f("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(T).then(()=>this._fetchImageService(r))),Promise.resolve(this)}fetchTile(e,r,t,i){const s=(i=i||{signal:null}).signal!=null?i.signal:i.signal=new AbortController().signal,y={responseType:"array-buffer",signal:s},u={noDataValue:i.noDataValue,returnFileInfo:!0};return this.load().then(()=>this._fetchTileAvailability(e,r,t,i)).then(()=>m(this.getTileUrl(e,r,t),y)).then(l=>this._lercDecoder.decode(l.data,u,s)).then(l=>new j(l))}getTileUrl(e,r,t){const i=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,s=v({...this.parsedUrl.query,blankTile:!i&&null});return`${this.parsedUrl.path}/tile/${e}/${r}/${t}${s?"?"+s:""}`}async queryElevation(e,r){const{ElevationQuery:t}=await n(()=>import("./ElevationQuery-C0bbwpsV.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]),import.meta.url);return d(r),new t().query(this,e,r)}async createElevationSampler(e,r){const{ElevationQuery:t}=await n(()=>import("./ElevationQuery-C0bbwpsV.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]),import.meta.url);return d(r),new t().createSampler(this,e,r)}_fetchTileAvailability(e,r,t,i){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t,i):Promise.resolve("unknown")}async _fetchImageService(e){var i;if(this.sourceJSON)return this.sourceJSON;const r={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},t=await m(this.parsedUrl.path,r);t.ssl&&(this.url=(i=this.url)==null?void 0:i.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile[h]}};p([a({readOnly:!0})],o.prototype,"capabilities",void 0),p([c("service","capabilities",["capabilities"])],o.prototype,"readCapabilities",null),p([a({json:{read:{source:"copyrightText"}}})],o.prototype,"copyright",void 0),p([a({readOnly:!0,type:b})],o.prototype,"heightModelInfo",void 0),p([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),p([a({type:["show","hide"]})],o.prototype,"listMode",void 0),p([a({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],o.prototype,"minScale",void 0),p([a({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],o.prototype,"maxScale",void 0),p([a({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],o.prototype,"opacity",void 0),p([a({type:["ArcGISTiledElevationServiceLayer"]})],o.prototype,"operationalLayerType",void 0),p([a()],o.prototype,"sourceJSON",void 0),p([a({json:{read:!1},value:"elevation",readOnly:!0})],o.prototype,"type",void 0),p([a(D)],o.prototype,"url",void 0),p([a()],o.prototype,"version",void 0),p([c("version",["currentVersion"])],o.prototype,"readVersion",null),o=p([w("esri.layers.ElevationLayer")],o);const h=Symbol("default-fetch-tile");o.prototype.fetchTile[h]=!0;const Ft=o;export{Ft as default};