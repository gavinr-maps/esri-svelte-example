import{bv as _,a6 as S,N as v,a9 as T,a1 as m,cP as b,cM as w,T as u,aK as O,aY as $,av as R,cQ as W,a as s,b as a,aH as P,aF as U,cR as j,c as L,au as M}from"./index-e8c6bcc0.js";import{O as N}from"./MultiOriginJSONSupport-476ea916.js";import{i as A}from"./APIKeyMixin-9f78a4f2.js";import{p as B}from"./ArcGISCachedService-c19d7467.js";import{E as k,f as C,Y as I}from"./SublayersOwner-fd353c8f.js";import{l as D}from"./ArcGISService-a51cd6d5.js";import{a as J}from"./BlendLayer-63dc08ea.js";import{o as q}from"./CustomParametersMixin-518863ba.js";import{c as G}from"./OperationalLayer-6d8023bf.js";import{j as E}from"./PortalLayer-9295b91f.js";import{p as V}from"./RefreshableLayer-4a8676fc.js";import{t as K}from"./ScaleRangeLayer-4cc0b1db.js";import{f as x}from"./commonProperties-a06e23a3.js";import{o as y}from"./imageBitmapUtils-2a65f898.js";import"./TileInfoTilemapCache-bd5c3d9c.js";import"./TilemapCache-712c1100.js";import"./ByteSizeUnit-d4757d40.js";import"./LRUCache-3922d825.js";import"./Version-651090e3.js";import"./portalItemUtils-9c4b4c29.js";import"./UniqueValueRenderer-6847f026.js";import"./LegendOptions-0ffe455e.js";import"./diffUtils-f8f9fc73.js";import"./SizeVariable-dc6fe734.js";import"./colorRamps-7c0167a8.js";import"./lengthUtils-b9fae671.js";import"./ColorStop-3149a864.js";import"./featureFlags-bf3d5654.js";import"./styleUtils-d6218d7e.js";import"./jsonUtils-f94670aa.js";import"./DictionaryLoader-67262ed1.js";import"./FieldsIndex-888b8bd2.js";import"./heatmapUtils-ee8bc01a.js";import"./vec4f64-aa64c7e9.js";import"./LabelClass-669bcee9.js";import"./labelUtils-98630c63.js";import"./defaultsJSON-b087dd4d.js";import"./QueryTask-6db8e904.js";import"./Query-ce383482.js";import"./Field-fadcb771.js";import"./fieldType-a79b2e2e.js";import"./utils-c9a76eea.js";import"./executeForIds-19c4dd3c.js";import"./query-0796d492.js";import"./normalizeUtils-f64efc29.js";import"./normalizeUtilsCommon-123fc71f.js";import"./pbfQueryUtils-a8ac8764.js";import"./pbf-2b43d9bb.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-c236a6ea.js";import"./executeQueryJSON-5cf36760.js";import"./FeatureSet-72ed3e08.js";import"./executeQueryPBF-e7d41349.js";import"./featureConversionUtils-096a49d9.js";import"./FeatureType-f32ea6a9.js";import"./FeatureTemplate-1e31fa32.js";import"./labelingInfo-98c89153.js";import"./serviceCapabilitiesUtils-722af797.js";import"./AttachmentQuery-35d4fb4f.js";import"./popupUtils-b796c605.js";import"./sublayerUtils-94b2b75d.js";import"./jsonUtils-45b2dffb.js";import"./parser-c8281db0.js";import"./ElevationInfo-9f2bd050.js";var d;const f=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let i=d=class extends J(K(k(B(C(G(E(D(N(_(V(A(q(M))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(S).then(()=>this._fetchService(r))),Promise.resolve(this)}get attributionDataUrl(){var r;const e=(r=this.parsedUrl)==null?void 0:r.path.toLowerCase();return e?this._getDefaultAttribution(this._getMapName(e)):null}readSpatialReference(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&v.fromJSON(e)}writeSublayers(e,r,t,o){if(!this.loaded||!e)return;const p=e.slice().reverse().flatten(({sublayers:l})=>l&&l.toArray().reverse()).toArray(),n=[],c={writeSublayerStructure:!1,...o};p.forEach(l=>{const h=l.write({},c);n.push(h)}),n.some(l=>Object.keys(l).length>1)&&(r.layers=n)}get tileServers(){var e;return this._getDefaultTileServers((e=this.parsedUrl)==null?void 0:e.path)}castTileServers(e){return Array.isArray(e)?e.map(r=>T(r).path):null}fetchTile(e,r,t,o={}){const{signal:p}=o,n=this.getTileUrl(e,r,t),c={responseType:"image",signal:p,query:{...this.refreshParameters}};return m(n,c).then(l=>l.data)}async fetchImageBitmapTile(e,r,t,o={}){const{signal:p}=o;if(this.fetchTile!==d.prototype.fetchTile){const h=await this.fetchTile(e,r,t,o);return y(h,e,r,t,p)}const n=this.getTileUrl(e,r,t),c={responseType:"blob",signal:p,query:{...this.refreshParameters}},{data:l}=await m(n,c);return y(l,e,r,t,p)}getTileUrl(e,r,t){var c,l;const o=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,p=b({...(c=this.parsedUrl)==null?void 0:c.query,blankTile:!o&&null,...this.customParameters,token:this.apiKey}),n=this.tileServers;return`${n&&n.length?n[r%n.length]:(l=this.parsedUrl)==null?void 0:l.path}/tile/${e}/${r}/${t}${p?"?"+p:""}`}loadAll(){return w(this,e=>{e(this.allSublayers)})}_fetchService(e){return new Promise((r,t)=>{if(this.sourceJSON){if(this.sourceJSON.bandCount!=null&&this.sourceJSON.pixelSizeX!=null)throw new u("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void r({data:this.sourceJSON})}if(!this.parsedUrl)throw new u("tile-layer:undefined-url","layer's url is not defined");const o=O(this.parsedUrl.path);if(o!=null&&o.serverType==="ImageServer")throw new u("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");m(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(r,t)}).then(r=>{let t=this.url;if(r.ssl&&(t=this.url=t.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),this.version===10.1&&!$(t))return this._fetchServerVersion(t,e).then(o=>{this.read({currentVersion:o})}).catch(()=>{})})}_fetchServerVersion(e,r){if(!R(e))return Promise.reject();const t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return m(t,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then(o=>{if(o.data&&o.data.currentVersion)return o.data.currentVersion;throw new u("tile-layer:version-not-available")})}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r?r[2]:void 0}_getDefaultAttribution(e){if(e==null)return null;let r;e=e.toLowerCase();for(let t=0,o=f.length;t<o;t++)if(r=f[t],r.toLowerCase().includes(e))return W("//static.arcgis.com/attribution/"+r);return null}_getDefaultTileServers(e){if(e==null)return[];const r=e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i)!==-1,t=e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i)!==-1;return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile[g]}};s([a({readOnly:!0})],i.prototype,"attributionDataUrl",null),s([a({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),s([a({json:{read:!0,write:!0}})],i.prototype,"blendMode",void 0),s([a({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],i.prototype,"isReference",void 0),s([a({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],i.prototype,"operationalLayerType",void 0),s([a({type:Boolean})],i.prototype,"resampling",void 0),s([a()],i.prototype,"sourceJSON",void 0),s([a({type:v})],i.prototype,"spatialReference",void 0),s([P("spatialReference",["spatialReference","tileInfo"])],i.prototype,"readSpatialReference",null),s([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),s([a({readOnly:!0})],i.prototype,"sublayers",void 0),s([U("sublayers",{layers:{type:[I]}})],i.prototype,"writeSublayers",null),s([a({json:{read:!1,write:!1}})],i.prototype,"popupEnabled",void 0),s([a()],i.prototype,"tileServers",null),s([j("tileServers")],i.prototype,"castTileServers",null),s([a({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),s([a(x)],i.prototype,"url",void 0),i=d=s([L("esri.layers.TileLayer")],i);const g=Symbol("default-fetch-tile");i.prototype.fetchTile[g]=!0;const or=i;export{or as default};
