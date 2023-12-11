import{s as Z,D as I,e$ as H,iu as ee,bV as w,dE as te,G as x,aA as V,a as Q,u as re,b as ie,bG as S,ae as se,fZ as oe,f$ as le,a5 as g,dl as F,bR as P,bP as U,aO as R,fq as K,iv as W,b7 as z,c$ as ae,iw as G,ix as E,cA as L,iy as j,aK as ne,dD as ue,aF as $,iz as pe,iA as ce,en as M,cC as he,c,f as y,aI as ye,aZ as de,b0 as N,g as me,bO as fe}from"./index-XUlETPJZ.js";import{m as ge}from"./MultiOriginJSONSupport-7Qbe2KAC.js";import{i as Ae}from"./APIKeyMixin-yDqtxogw.js";import{p as Se}from"./ArcGISCachedService-Or9qpN-K.js";import{l as xe}from"./ArcGISService-js_eTuu8.js";import{a as we}from"./BlendLayer-zma1Sosw.js";import{o as ve}from"./CustomParametersMixin-IV-ZCkcb.js";import{u as _e}from"./OperationalLayer-JqRxI3_b.js";import{j as be}from"./PortalLayer-TJUoDBMJ.js";import{t as Ie}from"./ScaleRangeLayer-yPctuALK.js";import{T as J}from"./TilemapCache-OgbOUc0i.js";import{e as Re}from"./jsonContext-9pkO3yoq.js";import{l as Ue}from"./StyleRepository-Hq1hjvX7.js";import"./TileInfoTilemapCache-M1ux9qYv.js";import"./jsonUtils-SBL1xwKC.js";import"./parser-5WRmuohq.js";import"./commonProperties-vCf9FiI6.js";import"./ElevationInfo-W4L0wkkh.js";import"./lengthUtils-uQbLh4h5.js";import"./portalItemUtils-iR0JCk79.js";import"./ByteSizeUnit-UjtePjs8.js";import"./LRUCache-P08N0BvZ.js";import"./StyleDefinition-ohiNeWtS.js";import"./enums--FbEXJ87.js";import"./enums-W_WZ2jKy.js";import"./enums-8pc8f5Ge.js";import"./VertexElementDescriptor-0hGjloLE.js";import"./colorUtils-N3magirU.js";import"./vec4f64-_4WP0ZGf.js";import"./GeometryUtils-CEMOhUyj.js";import"./definitions-pFhxwyTZ.js";let _=null;function $e(e){if(_)return _;const t={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return _=new Promise(r=>{const i=new Image;i.onload=()=>{i.onload=i.onerror=null,r(i.width>0&&i.height>0)},i.onerror=()=>{i.onload=i.onerror=null,r(!1)},i.src="data:image/webp;base64,"+t[e]}),_}const C=1.15;class B{constructor(t,r){this._spriteSource=t,this._maxTextureSize=r,this.devicePixelRatio=1,this._spriteImageFormat="png",this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded",t.type==="url"&&t.spriteFormat&&(this._spriteImageFormat=t.spriteFormat),t.pixelRatio&&(this.devicePixelRatio=t.pixelRatio),this.baseURL=t.spriteUrl}get spriteNames(){const t=[];for(const r in this._spritesData)t.push(r);return t.sort(),t}getSpriteInfo(t){return this._spritesData?this._spritesData[t]:null}async load(t){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(t),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}async _loadSprites(t){this._isRetina=this.devicePixelRatio>C;const{width:r,height:i,data:s,json:l}=await this._getSpriteData(this._spriteSource,t),o=Object.keys(l);if(!o||o.length===0||!s)return this._spritesData=this.image=null,void(this.width=this.height=0);this._spritesData=l,this.width=r,this.height=i;const n=Math.max(this._maxTextureSize,4096);if(r>n||i>n){const u=`Sprite resource for style ${this.baseURL} is bigger than the maximum allowed of ${n} pixels}`;throw Z.getLogger("esri.layers.support.SpriteSource").error(u),new I("SpriteSource",u)}let a;for(let u=0;u<s.length;u+=4)a=s[u+3]/255,s[u]=s[u]*a,s[u+1]=s[u+1]*a,s[u+2]=s[u+2]*a;this.image=s}async _getSpriteData(t,r){if(t.type==="image"){let h,d;if(this.devicePixelRatio<C){if(!t.spriteSource1x)throw new I("SpriteSource","no image data provided for low resolution sprites!");h=t.spriteSource1x.image,d=t.spriteSource1x.json}else{if(!t.spriteSource2x)throw new I("SpriteSource","no image data provided for high resolution sprites!");h=t.spriteSource2x.image,d=t.spriteSource2x.json}return"width"in h&&"height"in h&&"data"in h&&(H(h.data)||ee(h.data))?{width:h.width,height:h.height,data:new Uint8Array(h.data),json:d}:{...k(h),json:d}}const i=w(this.baseURL),s=i.query?"?"+te(i.query):"",l=this._isRetina?"@2x":"",o=`${i.path}${l}.${this._spriteImageFormat}${s}`,n=`${i.path}${l}.json${s}`,[a,u]=await Promise.all([x(n,r),x(o,{responseType:"image",...r})]);return{...k(u.data),json:a.data}}}function k(e){const t=document.createElement("canvas"),r=t.getContext("2d");t.width=e.width,t.height=e.height,r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height);return{width:e.width,height:e.height,data:new Uint8Array(i.data)}}let Te=class{constructor(t){this.url=t}destroy(){this._tileIndexPromise=null}async fetchTileIndex(){return this._tileIndexPromise||(this._tileIndexPromise=x(this.url).then(t=>t.data.index)),this._tileIndexPromise}async dataKey(t,r){const i=await this.fetchTileIndex();return V(r),this._getIndexedDataKey(i,t)}_getIndexedDataKey(t,r){const i=[r];if(r.level<0||r.row<0||r.col<0||r.row>>r.level>0||r.col>>r.level>0)return null;let s=r;for(;s.level!==0;)s=new Q(s.level-1,s.row>>1,s.col>>1,s.world),i.push(s);let l,o,n=t,a=i.pop();if(n===1)return a;for(;i.length;)if(l=i.pop(),o=(1&l.col)+((1&l.row)<<1),n){if(n[o]===0){a=null;break}if(n[o]===1){a=l;break}a=l,n=n[o]}return a}},Pe=class{constructor(t,r){this._tilemap=t,this._tileIndexUrl=r}destroy(){this._tilemap=re(this._tilemap),this._tileIndexPromise=null}async fetchTileIndex(t){return this._tileIndexPromise||(this._tileIndexPromise=x(this._tileIndexUrl,{query:{...t==null?void 0:t.query}}).then(r=>r.data.index)),this._tileIndexPromise}dataKey(t,r){const{level:i,row:s,col:l}=t,o=new Q(t);return this._tilemap.fetchAvailabilityUpsample(i,s,l,o,r).then(()=>(o.world=t.world,o)).catch(n=>{if(ie(n))throw n;return null})}};class Oe{constructor(t){this._tileUrl=t,this._promise=null,this._abortController=null,this._abortOptions=[]}getData(t){this._promise===null&&(this._abortController=new AbortController,this._promise=this._makeRequest(this._tileUrl,this._abortController.signal));const r=this._abortOptions;return r.push(t),oe(t,()=>{r.every(i=>le(i))&&this._abortController.abort()}),this._promise.then(i=>g(i))}async _makeRequest(t,r){const{data:i}=await x(t,{responseType:"array-buffer",signal:r});return i}}const T=new Map;function De(e,t,r,i,s){const l=w(e),o=l.query;if(o)for(const[a,u]of Object.entries(o))switch(u){case"{x}":o[a]=i.toString();break;case"{y}":o[a]=r.toString();break;case"{z}":o[a]=t.toString()}const n=l.path;return Ee(S(n.replaceAll(/\{z\}/gi,t.toString()).replaceAll(/\{y\}/gi,r.toString()).replaceAll(/\{x\}/gi,i.toString()),{...l.query}),s)}function Ee(e,t){return se(T,e,()=>new Oe(e)).getData(t).then(r=>(T.delete(e),r)).catch(r=>{throw T.delete(e),r})}class Le{constructor(t,r,i){this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.initialExtent=null,this.name=t,this.sourceUrl=r;const s=w(this.sourceUrl),l=g(i),o=l.tiles;if(s)for(let m=0;m<o.length;m++){const f=w(o[m]);f&&(F(f.path)||(f.path=P(s.path,f.path)),o[m]=S(f.path,{...s.query,...f.query}))}this.tileServers=o;const n=i.capabilities&&i.capabilities.split(",").map(m=>m.toLowerCase().trim()),a=(i==null?void 0:i.exportTilesAllowed)===!0,u=(n==null?void 0:n.includes("tilemap"))===!0,h=a&&i.hasOwnProperty("maxExportTilesCount")?i.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:a,supportsTileMap:u},exportTiles:a?{maxExportTilesCount:+h}:null},this.tileInfo=U.fromJSON(l.tileInfo);const d=i.tileMap?S(P(s.path,i.tileMap),s.query??{}):null;u?(this.type="vector-tile",this.tilemap=new Pe(new J({layer:{parsedUrl:s,tileInfo:this.tileInfo},minLOD:l.minLOD??this.tileInfo.lods[0].level,maxLOD:l.maxLOD??this.tileInfo.lods[this.tileInfo.lods.length-1].level}),d)):d&&(this.tilemap=new Te(d)),this.fullExtent=R.fromJSON(i.fullExtent),this.initialExtent=R.fromJSON(i.initialExtent)}destroy(){var t;(t=this.tilemap)==null||t.destroy()}async getRefKey(t,r){var i;return await((i=this.tilemap)==null?void 0:i.dataKey(t,r))??t}requestTile(t,r,i,s){const l=this.tileServers[r%this.tileServers.length];return De(l,t,r,i,s)}isCompatibleWith(t){const r=this.tileInfo,i=t.tileInfo;if(!r.spatialReference.equals(i.spatialReference)||!r.origin.equals(i.origin)||Math.round(r.dpi)!==Math.round(i.dpi))return!1;const s=r.lods,l=i.lods,o=Math.min(s.length,l.length);for(let n=0;n<o;n++){const a=s[n],u=l[n];if(a.level!==u.level||Math.round(a.scale)!==Math.round(u.scale))return!1}return!0}}async function je(e,t){const r={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[i,s]=typeof e=="string"?[e,null]:[null,e.jsonUrl];return await A(r,"esri",e,s,t),{layerDefinition:r.validatedSource,url:i,serviceUrl:r.sourceUrl,style:r.style,styleUrl:r.styleUrl,spriteUrl:r.style.sprite&&v(r.styleBase,r.style.sprite),spriteFormat:r.spriteFormat,glyphsUrl:r.style.glyphs&&v(r.styleBase,r.style.glyphs),sourceNameToSource:r.sourceNameToSource,primarySourceName:r.primarySourceName}}function v(...e){let t;for(const r of e)r!=null&&(K(r)?t&&(t=t.split("://")[0]+":"+r.trim()):t=F(r)?r:P(t,r));return t?W(t):void 0}async function A(e,t,r,i,s){let l,o,n;if(V(s),typeof r=="string"){const u=z(r);n=await x(u,{...s,responseType:"json",query:{f:"json",...s==null?void 0:s.query}}),n.ssl&&(l&&(l=l.replace(/^http:/i,"https:")),o&&(o=o.replace(/^http:/i,"https:"))),l=u,o=u}else r!=null&&(n={data:r},l=r.jsonUrl||null,o=i);const a=n==null?void 0:n.data;if(X(a))return e.styleUrl=l||null,Ne(e,a,o,s);if(Me(a))return e.sourceUrl?q(e,a,o,!1,t,s):(e.sourceUrl=l||null,q(e,a,o,!0,t,s));throw new Error("You must specify the URL or the JSON for a service or for a style.")}function Y(e){return typeof e=="object"&&!!e&&"tilejson"in e&&e.tilejson!=null}function X(e){return!!e&&"sources"in e&&!!e.sources}function Me(e){return!X(e)}async function Ne(e,t,r,i){const s=r?ae(r):G();e.styleBase=s,e.style=t,t["sprite-format"]&&t["sprite-format"].toLowerCase()==="webp"&&(e.spriteFormat="webp");const l=[];if(t.sources&&t.sources.esri){const o=t.sources.esri;o.url?await A(e,"esri",v(s,o.url),void 0,i):l.push(A(e,"esri",o,s,i))}for(const o of Object.keys(t.sources))o!=="esri"&&t.sources[o].type==="vector"&&(t.sources[o].url?l.push(A(e,o,v(s,t.sources[o].url),void 0,i)):t.sources[o].tiles&&l.push(A(e,o,t.sources[o],s,i)));await Promise.all(l)}async function q(e,t,r,i,s,l){const o=r?W(r)+"/":G(),n=Ce(t),a=new Le(s,S(o,(l==null?void 0:l.query)??{}),n);if(!i&&e.primarySourceName in e.sourceNameToSource){const u=e.sourceNameToSource[e.primarySourceName];if(!u.isCompatibleWith(a))return;a.fullExtent!=null&&(u.fullExtent!=null?u.fullExtent.union(a.fullExtent):u.fullExtent=a.fullExtent.clone()),u.tileInfo&&a.tileInfo&&u.tileInfo.lods.length<a.tileInfo.lods.length&&(u.tileInfo=a.tileInfo)}if(i&&(e.sourceBase=o,e.source=t,e.validatedSource=n,e.primarySourceName=s),e.sourceNameToSource[s]=a,!Y(e)&&"defaultStyles"in t&&!e.style){if(t.defaultStyles==null)throw new Error;return typeof t.defaultStyles=="string"?A(e,"",v(o,t.defaultStyles,"root.json"),void 0,l):A(e,"",t.defaultStyles,v(o,"root.json"),l)}}function Ce(e){if(e.hasOwnProperty("tileInfo"))return e;const t={xmin:-20037507067161843e-9,ymin:-20037507067161843e-9,xmax:20037507067161843e-9,ymax:20037507067161843e-9,spatialReference:{wkid:102100,latestWkid:3857}};let r=null;if(Y(e)){const{bounds:h}=e;if(h){const d=E({x:h[0],y:h[1],spatialReference:g(L)}),m=E({x:h[2],y:h[3],spatialReference:g(L)});r={xmin:d.x,ymin:d.y,xmax:m.x,ymax:m.y,spatialReference:g(j)}}}r===null&&(r=t);const i=512;let s=78271.51696400007,l=2958287637957775e-7;const o=[],n=e.hasOwnProperty("maxzoom")&&e.maxzoom!=null?+e.maxzoom:22,a=0,u=0;for(let h=0;h<=n;h++)o.push({level:h,scale:l,resolution:s}),s/=2,l/=2;return{capabilities:"TilesOnly",initialExtent:r,fullExtent:t,minScale:a,maxScale:u,tiles:e.tiles,tileInfo:{rows:i,cols:i,dpi:96,format:"pbf",origin:{x:-20037508342787e-6,y:20037508342787e-6},lods:o,spatialReference:g(j)}}}const b=1e-6;function Be(e,t){if(e===t)return!0;if(e==null&&t!=null||e!=null&&t==null||e==null||t==null||!e.spatialReference.equals(t.spatialReference)||e.dpi!==t.dpi)return!1;const r=e.origin,i=t.origin;if(Math.abs(r.x-i.x)>=b||Math.abs(r.y-i.y)>=b)return!1;let s,l;e.lods[0].scale>t.lods[0].scale?(s=e,l=t):(l=e,s=t);for(let o=s.lods[0].scale;o>=l.lods[l.lods.length-1].scale-b;o/=2)if(Math.abs(o-l.lods[0].scale)<b)return!0;return!1}function ke(e,t){if(e===t)return e;if(e==null&&t!=null)return t;if(e!=null&&t==null)return e;if(e==null||t==null)return null;const r=e.size[0],i=e.format,s=e.dpi,l=new ne({x:e.origin.x,y:e.origin.y}),o=e.spatialReference,n=e.lods[0].scale>t.lods[0].scale?e.lods[0]:t.lods[0],a=e.lods[e.lods.length-1].scale<=t.lods[t.lods.length-1].scale?e.lods[e.lods.length-1]:t.lods[t.lods.length-1],u=n.scale,h=n.resolution,d=a.scale,m=[];let f=u,O=h,D=0;for(;f>d;)m.push(new ue({level:D,resolution:O,scale:f})),D++,f/=2,O/=2;return new U({size:[r,r],dpi:s,format:i||"pbf",origin:l,lods:m,spatialReference:o})}let p=class extends we(Ie(Se(xe(_e(be(ve(Ae(ge(fe))))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.style=null,this.tilemapCache=null,this.type="vector-tile",this.url=null,this.path=null}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){var e;if(this.sourceNameToSource)for(const t of Object.values(this.sourceNameToSource))t==null||t.destroy();(e=this.primarySource)==null||e.destroy(),this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(globalThis.devicePixelRatio||1,e)}load(e){const t=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch($).then(async()=>{var i;if(!((i=this.portalItem)!=null&&i.id))return;const r=`${this.portalItem.itemCdnUrl}/resources/styles/root.json`;(await x(r,{...e,query:{f:"json",...this.customParameters,token:this.apiKey}})).data&&this.read({url:r},Re(this.portalItem))}).catch($).then(()=>this._loadStyle(e));return this.addResolvingPromise(t),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=(e==null?void 0:e.serviceUrl)&&w(e.serviceUrl);if(!t)return null;const r=this._getDefaultAttribution(t.path);return r?S(r,{...this.customParameters,token:this.apiKey}):null}get capabilities(){const e=this.primarySource;return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){var e;return((e=this.primarySource)==null?void 0:e.fullExtent)||null}get initialExtent(){var e;return((e=this.primarySource)==null?void 0:e.initialExtent)||null}get parsedUrl(){return this.serviceUrl?w(this.serviceUrl):null}get serviceUrl(){var e;return((e=this.currentStyleInfo)==null?void 0:e.serviceUrl)||null}get spatialReference(){var e;return((e=this.tileInfo)==null?void 0:e.spatialReference)??null}get styleUrl(){var e;return((e=this.currentStyleInfo)==null?void 0:e.styleUrl)||null}writeStyleUrl(e,t){e&&K(e)&&(e=`https:${e}`);const r=pe(e);t.styleUrl=ce(e,r)}get tileInfo(){var r;const e=[];for(const i in this.sourceNameToSource)e.push(this.sourceNameToSource[i]);let t=((r=this.primarySource)==null?void 0:r.tileInfo)||new U;if(e.length>1)for(let i=0;i<e.length;i++)Be(t,e[i].tileInfo)&&(t=ke(t,e[i].tileInfo));return t}readTilemapCache(e,t){var i;return((i=t.capabilities)==null?void 0:i.includes("Tilemap"))?new J({layer:this}):null}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}async loadSpriteSource(e=1,t){var r,i;if(!this._spriteSourceMap.has(e)){const s=M("2d").maxTextureSize,l=(r=this.currentStyleInfo)!=null&&r.spriteUrl?S(this.currentStyleInfo.spriteUrl,{...this.customParameters,token:this.apiKey}):null,o=new B({type:"url",spriteUrl:l,pixelRatio:e,spriteFormat:(i=this.currentStyleInfo)==null?void 0:i.spriteFormat},s);await o.load(t),this._spriteSourceMap.set(e,o)}return this._spriteSourceMap.get(e)}async setSpriteSource(e,t){if(!e)return null;const r=M("2d").maxTextureSize,i=e.spriteUrl,s=i?S(i,{...this.customParameters,token:this.apiKey}):null;if(!s&&e.type==="url")return null;const l=new B(e,r);try{await l.load(t);const o=e.pixelRatio||1;return this._spriteSourceMap.clear(),this._spriteSourceMap.set(o,l),s&&this.currentStyleInfo&&(this.currentStyleInfo.spriteUrl=s),this.emit("spriteSource-change",{spriteSource:l}),l}catch(o){$(o)}return null}async loadStyle(e,t){var i;const r=e||this.style||this.url;return this._loadingTask&&typeof r=="string"&&this.url===r||((i=this._loadingTask)==null||i.abort(),this._loadingTask=he(s=>(this._spriteSourceMap.clear(),this._getSourceAndStyle(r,{signal:s})),t)),this._loadingTask.promise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){var t;return g((t=this.styleRepository)==null?void 0:t.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const i=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||i})}getStyleLayer(e){return g(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e})}getLayoutProperties(e){return g(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}write(e,t){return t!=null&&t.origin&&!this.styleUrl?(t.messages&&t.messages.push(new I("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}getTileUrl(e,t,r){return null}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const r=await je(e,{...t,query:{...this.customParameters,token:this.apiKey}});r.spriteFormat==="webp"&&(await $e("lossy")||(r.spriteFormat="png")),this._set("currentStyleInfo",{...r}),typeof e=="string"?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySource",r.sourceNameToSource[r.primarySourceName]),this._set("styleRepository",new Ue(r.style)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style")}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),r=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!t)return;const i=t[2]&&t[2].toLowerCase();if(!i)return;const s=t[1]||"";for(const l of r)if(l.toLowerCase().includes(i))return z(`//static.arcgis.com/attribution/Vector${s}/${l}`)}async _loadStyle(e){var t;return((t=this._loadingTask)==null?void 0:t.promise)??this.loadStyle(null,e)}};c([y({readOnly:!0})],p.prototype,"attributionDataUrl",null),c([y({type:["show","hide"]})],p.prototype,"listMode",void 0),c([y({json:{read:!0,write:!0}})],p.prototype,"blendMode",void 0),c([y({readOnly:!0,json:{read:!1}})],p.prototype,"capabilities",null),c([y({readOnly:!0})],p.prototype,"currentStyleInfo",void 0),c([y({json:{read:!1},readOnly:!0,type:R})],p.prototype,"fullExtent",null),c([y({json:{read:!1},readOnly:!0,type:R})],p.prototype,"initialExtent",null),c([y({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],p.prototype,"isReference",void 0),c([y({type:["VectorTileLayer"]})],p.prototype,"operationalLayerType",void 0),c([y({readOnly:!0})],p.prototype,"parsedUrl",null),c([y()],p.prototype,"style",void 0),c([y({readOnly:!0})],p.prototype,"serviceUrl",null),c([y({type:ye,readOnly:!0})],p.prototype,"spatialReference",null),c([y({readOnly:!0})],p.prototype,"styleRepository",void 0),c([y({readOnly:!0})],p.prototype,"sourceNameToSource",void 0),c([y({readOnly:!0})],p.prototype,"primarySource",void 0),c([y({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],p.prototype,"styleUrl",null),c([de(["portal-item","web-document"],"styleUrl")],p.prototype,"writeStyleUrl",null),c([y({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:U})],p.prototype,"tileInfo",null),c([y()],p.prototype,"tilemapCache",void 0),c([N("service","tilemapCache",["capabilities","tileInfo"])],p.prototype,"readTilemapCache",null),c([y({json:{read:!1},readOnly:!0,value:"vector-tile"})],p.prototype,"type",void 0),c([y({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],p.prototype,"url",void 0),c([y({readOnly:!0})],p.prototype,"version",void 0),c([N("version",["version","currentVersion"])],p.prototype,"readVersion",null),c([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],p.prototype,"path",void 0),p=c([me("esri.layers.VectorTileLayer")],p);const xt=p;export{xt as default};
