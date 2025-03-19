import{L,r as e,m as s,av as O,a as S,V as _}from"./Accessor-BmwT4B0c.js";import{v,d as m,C as n,w as c,V as h}from"./reactiveUtils-XM7cS2OP.js";import{n as F}from"./CollectionFlattener-U8hHQmGf.js";import{S as j}from"./MultiOriginJSONSupport-DbmrbwMa.js";import{D as M}from"./cast-CsZslgGN.js";import{o as y,r as C}from"./writer-DKgfqj4X.js";import{w as d}from"./Extent-g5W9hy0j.js";import{g}from"./Point-Cz2JYYmX.js";import{f as I}from"./Layer-DH4_Pn8a.js";import{p as N,t as K}from"./ScaleRangeLayer-Cnzwr9PT.js";import{b as P}from"./OperationalLayer-B__lrMRq.js";import{j as R}from"./PortalLayer-Cqwv_mmr.js";import{f as T}from"./RefreshableLayer-C90FXoHt.js";import{y as J}from"./commonProperties-B0GHoNP5.js";import{i as V}from"./Evented-Dw4_VOGn.js";import{S as z}from"./JSONSupport-DcrLLGjL.js";import{m as A}from"./Portal-CmmHxpLg.js";import{j as W,S as w,g as x,d as E}from"./kmlUtils-DBXhlpD5.js";import"./SimpleObservable-CvOkykwM.js";import"./index-4eY77cms.js";import"./Identifiable-BHVfzH03.js";import"./TimeExtent-BO6BsF_x.js";import"./timeUtils-C1c_L2Fd.js";import"./Promise-DfET-uns.js";import"./layerContainerType-C5CzMsLd.js";import"./jsonUtils-DZz5FrgB.js";import"./colorUtils-Rxh2V3ai.js";import"./utils-DYurMneM.js";import"./screenUtils-_ZIvrt5o.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-Fi6iAz29.js";import"./vec3f64-BLpZdpfb.js";import"./common-DQOJ18NT.js";import"./layerUtils-B__v9OBu.js";import"./PortalItem-CTx1kJsR.js";import"./portalItemUtils-ByOtbGao.js";import"./projection-CyCZAIaD.js";import"./Polyline-s-JzsQqo.js";import"./mathUtils-Cfq9PL9W.js";import"./projectBuffer-CQnuEMuP.js";import"./geodesicConstants-RQL9oKdk.js";import"./ElevationInfo-BPOqhCue.js";import"./opacityUtils-Dim20wpZ.js";import"./unitConversionUtils-rg07EgOm.js";import"./lengthUtils-_77UiyVF.js";import"./AttributeTableTemplate-cR37sM72.js";import"./Graphic-Dt0LgVGU.js";import"./Clonable-Z-AWS-16.js";import"./enumeration-DpvDkLNI.js";import"./Color-VJEMvW-n.js";import"./ActionToggle-D7439N1A.js";import"./jsonUtils-CwFG8yN4.js";import"./typeUtils-B6WBEKDM.js";import"./TextSymbol-BLIQ6RKX.js";import"./collectionUtils-CTT-51g7.js";import"./aaBoundingBox-Dw3yBk2f.js";import"./jsonUtils-BZp85R7u.js";import"./typeUtils-B3iPBwJ2.js";import"./ClassBreaksRenderer-C7fhua2J.js";import"./commonProperties-ZfGquLPI.js";import"./colorRamps-CRjjPL3r.js";import"./SizeVariable-B-ghFm6e.js";import"./visualVariableUtils-Xcorldoo.js";import"./ColorStop-BYiAUa8d.js";import"./jsonUtils-B-voMz-i.js";import"./defaults-FkBa0ybj.js";import"./defaultsJSON-GKolV7NZ.js";import"./RendererLegendOptions-CYAPr8D6.js";import"./LRUCache-CXiGQWMN.js";import"./MemCache-CmojB_Z1.js";import"./Version-Cd3TlGH0.js";import"./FieldsIndex-FW1AMU67.js";import"./timeZoneUtils-DxzjpEBb.js";import"./utils-UPZJIDfz.js";import"./defaultCIMValues-Bb-CUowV.js";import"./enums-BTM-fOHQ.js";import"./HeatmapColorStop-CHbSyb1s.js";import"./heatmapUtils-Cyq-bAyG.js";import"./vec42-YcqnINSP.js";import"./vec4f64-o2zAXfmz.js";import"./SimpleRenderer-CEw_geZx.js";import"./UniqueValueRenderer-yoWHKJ_P.js";import"./diffUtils-BanfihCO.js";import"./styleUtils-ColFrJ-Z.js";import"./FeatureSet-B5-Veyin.js";import"./Field-BDG0QV_T.js";import"./fieldType-CBeoJWlv.js";var u;let a=u=class extends V.EventedMixin(z.JSONSupportMixin(A)){constructor(...t){super(...t),this.description=null,this.fullExtent=null,this.id=null,this.networkLink=null,this.parent=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.layer=null,this.addHandles([v(()=>this.sublayers,"after-add",({item:r})=>{r.parent=this,r.layer=this.layer},n),v(()=>this.sublayers,"after-remove",({item:r})=>{r.layer=r.parent=null},n),m(()=>this.sublayers,(r,i)=>{if(i)for(const o of i)o.layer=o.parent=null;if(r)for(const o of r)o.parent=this,o.layer=this.layer},n),m(()=>this.layer,r=>{if(this.sublayers)for(const i of this.sublayers)i.layer=r},n)])}initialize(){c(()=>this.networkLink).then(()=>c(()=>this.visible===!0)).then(()=>this.load())}load(t){var o;if(!this.networkLink||this.networkLink.viewFormat)return;const r=t!=null?t.signal:null,i=this._fetchService(((o=this._get("networkLink"))==null?void 0:o.href)??"",r).then(p=>{var b;const k=W(p.sublayers);this.fullExtent=d.fromJSON(k),this.sourceJSON=p;const f=L(h.ofType(u),w(u,p));this.sublayers?this.sublayers.addMany(f):this.sublayers=f,(b=this.layer)==null||b.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(i),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(t){this._get("visible")!==t&&(this._set("visible",t),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(t,r){return!!r.visibility}_fetchService(t,r){return x(t,this.layer.outSpatialReference,this.layer.refreshInterval,r).then(i=>E(i.data))}};e([s()],a.prototype,"description",void 0),e([s({type:d})],a.prototype,"fullExtent",void 0),e([s()],a.prototype,"id",void 0),e([s({readOnly:!0,value:null})],a.prototype,"networkLink",void 0),e([s({json:{write:{allowNull:!0}}})],a.prototype,"parent",void 0),e([s({type:h.ofType(a),json:{write:{allowNull:!0}}})],a.prototype,"sublayers",void 0),e([s({value:null,json:{read:{source:"name",reader:t=>O(t)}}})],a.prototype,"title",void 0),e([s({value:!0})],a.prototype,"visible",null),e([y("visible",["visibility"])],a.prototype,"readVisible",null),e([s()],a.prototype,"sourceJSON",void 0),e([s()],a.prototype,"layer",void 0),a=u=e([S("esri.layers.support.KMLSublayer")],a);const $=a,D=["kml","xml"];let l=class extends N(T(K(P(R(j(I)))))){constructor(...t){super(...t),this._visibleFolders=[],this.allSublayers=new F({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.sublayers}),this.outSpatialReference=g.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([m(()=>this.sublayers,(t,r)=>{r&&r.forEach(i=>{i.parent=null,i.layer=null}),t&&t.forEach(i=>{i.parent=this,i.layer=this})},n),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))])}normalizeCtorArgs(t,r){return typeof t=="string"?{url:t,...r}:t}readSublayersFromItemOrWebMap(t,r){this._visibleFolders=r.visibleFolders}readSublayers(t,r,i){return w($,r,i,this._visibleFolders)}writeSublayers(t,r){const i=[],o=t.toArray();for(;o.length;){const p=o[0];p.networkLink||(p.visible&&i.push(p.id),p.sublayers&&o.push(...p.sublayers.toArray())),o.shift()}r.visibleFolders=i}get title(){const t=this._get("title");return t&&this.originOf("title")!=="defaults"?t:this.url?M(this.url,D)||"KML":t}set title(t){this._set("title",t)}get visibleSublayers(){const t=this.sublayers,r=[],i=o=>{o.visible&&(r.push(o),o.sublayers&&o.sublayers.forEach(i))};return t&&t.forEach(i),r}get fullExtent(){return this._recomputeFullExtent()}load(t){const r=t!=null?t.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},t).catch(_).then(()=>this._fetchService(r))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(t){const r=await Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:x(this.url??"",this.outSpatialReference,this.refreshInterval,t)),i=E(r.data);this.read(i,{origin:"service"})}_recomputeFullExtent(){let t=null;this.extent!=null&&(t=this.extent.clone());const r=i=>{if(i.sublayers)for(const o of i.sublayers.items)r(o),o.visible&&o.fullExtent&&(t!=null?t.union(o.fullExtent):t=o.fullExtent.clone())};return r(this),t}};e([s({readOnly:!0})],l.prototype,"allSublayers",void 0),e([s({type:g})],l.prototype,"outSpatialReference",void 0),e([s({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],l.prototype,"path",void 0),e([s({readOnly:!0,json:{read:!1,write:!1}})],l.prototype,"legendEnabled",void 0),e([s({type:["show","hide","hide-children"]})],l.prototype,"listMode",void 0),e([s({type:["KML"]})],l.prototype,"operationalLayerType",void 0),e([s({})],l.prototype,"resourceInfo",void 0),e([s({type:h.ofType($),json:{write:{ignoreOrigin:!0}}})],l.prototype,"sublayers",void 0),e([y(["web-map","portal-item"],"sublayers",["visibleFolders"])],l.prototype,"readSublayersFromItemOrWebMap",null),e([y("service","sublayers",["sublayers"])],l.prototype,"readSublayers",null),e([C("sublayers")],l.prototype,"writeSublayers",null),e([s({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),e([s({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],l.prototype,"title",null),e([s(J)],l.prototype,"url",void 0),e([s({readOnly:!0})],l.prototype,"visibleSublayers",null),e([s({type:d})],l.prototype,"extent",void 0),e([s()],l.prototype,"fullExtent",null),l=e([S("esri.layers.KMLLayer")],l);const $r=l;export{$r as default};
