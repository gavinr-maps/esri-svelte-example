import{r as o}from"./tslib.es6-B3Jf3DVX.js";import{h as n,m as i,a}from"./subclass-BZA_h8Db.js";import{q as y,U as u}from"./assets-C43MgM-v.js";import{n as d}from"./symbols-CNimns--.js";import{S as h}from"./MultiOriginJSONSupport-B5nfqtQh.js";import{p as c}from"./Accessor-BLX9ikPh.js";import{o as f}from"./writer-DNAwXnhG.js";import{w as S}from"./Extent-Bf3YTe7m.js";import{Z as g}from"./Point-Cg0-ChZE.js";import v from"./Layer-CVt7Hb5J.js";import{l as b}from"./BlendLayer-CXM4n_Ge.js";import{b as C}from"./OperationalLayer-CVyVfSPu.js";import{j as G}from"./PortalLayer-CKja4bdW.js";import{f as w}from"./RefreshableLayer-D7lXUJRS.js";import{t as P}from"./ScaleRangeLayer-Bb8Ig1Hz.js";import{u as _,d as x,y as R}from"./commonProperties-CPyIG_-u.js";import{n as m,d as $,y as k,S as j}from"./TextSymbol-D8QO_KUV.js";import"./index-Bh2oEzTI.js";import"./enumeration-Ba5njXdz.js";import"./jsonMap-0cxwUWs2.js";import"./fieldUtils-tmQlKvWo.js";import"./intl-CChhNOV8.js";import"./date-DlqISzcw.js";import"./locale-C9TlLpzi.js";import"./messages-OmQvZhAg.js";import"./mathUtils-C4_ghTv4.js";import"./geometry-D964gYQX.js";import"./Polyline-D9YkgmM_.js";import"./Color-BCS62Hs5.js";import"./colorUtils-0bJDPow9.js";import"./screenUtils-_ZIvrt5o.js";import"./materialUtils-DarhapKC.js";import"./opacityUtils-C68Tlu6_.js";import"./vec3f64-BLpZdpfb.js";import"./aaBoundingBox-BE7cC1jD.js";import"./persistableUrlUtils-fa1mAujs.js";import"./Collection-CEdjem1-.js";import"./Evented-BHRw9x22.js";import"./shared-B3wH2qpO.js";import"./SimpleObservable-KocWTzVy.js";import"./collectionUtils-D_lHIu88.js";import"./cast-Bjksrh93.js";import"./Portal-C10FKnaA.js";import"./Loadable-BabW5Xcc.js";import"./Promise-B2Hu02L7.js";import"./Clonable-D3rtuBWg.js";import"./reactiveUtils-C5zUhJQJ.js";import"./asyncUtils-CWX51uTe.js";import"./Identifiable-B1UbsKNt.js";import"./TimeExtent-DocT5yPf.js";import"./timeUtils-8fb_2oAt.js";import"./jsonUtils-CSnQD004.js";import"./parser-CTsgEym6.js";import"./utils-93yNk4Xc.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-GpOFENPA.js";import"./common-DQOJ18NT.js";import"./layerContainerType-C5CzMsLd.js";import"./layerUtils-BrNoooE9.js";import"./PortalItem-DzgXrpyc.js";import"./portalItemUtils-BzVoFAku.js";import"./projection-B971H0Re.js";import"./projectBuffer-Bs7GwaPY.js";import"./geodesicConstants-DWQLYX7F.js";import"./ElevationInfo-CA5m_tHv.js";import"./unitConversionUtils-BMfW9yAe.js";import"./lengthUtils-DL1-FDQQ.js";import"./AttributeTableTemplate-BZeVyq-j.js";const F=["atom","xml"],E={base:m,key:"type",typeMap:{"simple-line":$},errorContext:"symbol"},M={base:m,key:"type",typeMap:{"picture-marker":d,"simple-marker":k},errorContext:"symbol"},L={base:m,key:"type",typeMap:{"simple-fill":j},errorContext:"symbol"};let e=class extends b(w(C(G(P(h(v)))))){constructor(...t){super(...t),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(t,r){return typeof t=="string"?{url:t,...r}:t}readFeatureCollections(t,r){return r.featureCollection.layers.forEach(p=>{var l;const s=p.layerDefinition.drawingInfo.renderer.symbol;s&&s.type==="esriSFS"&&((l=s.outline)!=null&&l.style.includes("esriSFS"))&&(s.outline.style="esriSLSSolid")}),r.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const t=this._get("title");return t&&this.originOf("title")!=="defaults"?t:this.url?y(this.url,F)||"GeoRSS":t}set title(t){this._set("title",t)}load(t){const r=t!=null?t.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},t).catch(c).then(()=>this._fetchService(r)).then(p=>{this.read(p,{origin:"service"})})),Promise.resolve(this)}async hasDataChanged(){const t=await this._fetchService();return this.read(t,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(t){const r=this.spatialReference,{data:p}=await u(n.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:g(r)?void 0:r.wkid??JSON.stringify(r)},signal:t});return p}_hasGeometry(t){var r;return((r=this.featureCollections)==null?void 0:r.some(p=>{var s,l;return((s=p.featureSet)==null?void 0:s.geometryType)===t&&((l=p.featureSet.features)==null?void 0:l.length)>0}))??!1}};o([i()],e.prototype,"description",void 0),o([i()],e.prototype,"featureCollections",void 0),o([f("service","featureCollections",["featureCollection.layers"])],e.prototype,"readFeatureCollections",null),o([i({type:S,json:{name:"lookAtExtent"}})],e.prototype,"fullExtent",void 0),o([i(_)],e.prototype,"id",void 0),o([i(x)],e.prototype,"legendEnabled",void 0),o([i({types:E,json:{write:!0}})],e.prototype,"lineSymbol",void 0),o([i({type:["show","hide"]})],e.prototype,"listMode",void 0),o([i({types:M,json:{write:!0}})],e.prototype,"pointSymbol",void 0),o([i({types:L,json:{write:!0}})],e.prototype,"polygonSymbol",void 0),o([i({type:["GeoRSS"]})],e.prototype,"operationalLayerType",void 0),o([i(R)],e.prototype,"url",void 0),o([i({json:{origins:{service:{read:{source:"name",reader:t=>t||void 0}}}}})],e.prototype,"title",null),o([i({readOnly:!0,json:{read:!1},value:"geo-rss"})],e.prototype,"type",void 0),e=o([a("esri.layers.GeoRSSLayer")],e);const Qt=e;export{Qt as default};