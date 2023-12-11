import{eG as _,d9 as $,v as c,k as y,eb as p,fl as v,aP as d,a$ as O,V as b,f as r,g as l,fm as j,b1 as h,j as g,fc as F,w as M,aJ as S,bV as P,aG as C,a_ as I,bP as K}from"./index-27db053b.js";import{m as N}from"./MultiOriginJSONSupport-9d9b01a6.js";import{a as R}from"./BlendLayer-1f9f5e5d.js";import{u as T}from"./OperationalLayer-b2407116.js";import{j as J}from"./PortalLayer-7ef97389.js";import{f as V}from"./RefreshableLayer-77852dcb.js";import{t as z}from"./ScaleRangeLayer-66e2fd9a.js";import{d as A}from"./commonProperties-665c2ea3.js";import{j as G,S as w,g as x,d as k}from"./kmlUtils-3969259e.js";import"./jsonUtils-94e6a40e.js";import"./parser-e532dcbf.js";import"./portalItemUtils-1a05c6c0.js";import"./ElevationInfo-aaff1467.js";import"./lengthUtils-535759c3.js";import"./jsonUtils-f1e152aa.js";import"./UniqueValueRenderer-049bb9e4.js";import"./LegendOptions-28b8c5c0.js";import"./diffUtils-135dddd3.js";import"./SizeVariable-10764cb7.js";import"./colorRamps-9cc2c549.js";import"./ColorStop-6362a997.js";import"./jsonUtils-29e80207.js";import"./styleUtils-5b1b6fcb.js";import"./DictionaryLoader-9d5448cd.js";import"./LRUCache-016147c2.js";import"./Version-3276c9a1.js";import"./FieldsIndex-f11b6b69.js";import"./UnknownTimeZone-08907062.js";import"./heatmapUtils-37a4ad14.js";import"./vec4f64-3c9d0901.js";import"./FeatureSet-b143a95b.js";import"./Field-a20a79af.js";import"./fieldType-c94915e3.js";var u;let a=u=class extends _.EventedMixin($(F)){constructor(...t){super(...t),this.description=null,this.fullExtent=null,this.id=null,this.networkLink=null,this.parent=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.layer=null,this.addHandles([c(()=>this.sublayers,"after-add",({item:e})=>{e.parent=this,e.layer=this.layer},p),c(()=>this.sublayers,"after-remove",({item:e})=>{e.layer=e.parent=null},p),y(()=>this.sublayers,(e,s)=>{if(s)for(const i of s)i.layer=i.parent=null;if(e)for(const i of e)i.parent=this,i.layer=this.layer},p),y(()=>this.layer,e=>{if(this.sublayers)for(const s of this.sublayers)s.layer=e},p)])}initialize(){v(()=>this.networkLink).then(()=>v(()=>this.visible===!0)).then(()=>this.load())}load(t){var i;if(!this.networkLink||this.networkLink.viewFormat)return;const e=t!=null?t.signal:null,s=this._fetchService(((i=this._get("networkLink"))==null?void 0:i.href)??"",e).then(n=>{var f;const L=G(n.sublayers);this.fullExtent=d.fromJSON(L),this.sourceJSON=n;const m=O(b.ofType(u),w(u,n));this.sublayers?this.sublayers.addMany(m):this.sublayers=m,(f=this.layer)==null||f.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(s),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(t){this._get("visible")!==t&&(this._set("visible",t),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(t,e){return!!e.visibility}_fetchService(t,e){return x(t,this.layer.outSpatialReference,this.layer.refreshInterval,e).then(s=>k(s.data))}};r([l()],a.prototype,"description",void 0),r([l({type:d})],a.prototype,"fullExtent",void 0),r([l()],a.prototype,"id",void 0),r([l({readOnly:!0,value:null})],a.prototype,"networkLink",void 0),r([l({json:{write:{allowNull:!0}}})],a.prototype,"parent",void 0),r([l({type:b.ofType(a),json:{write:{allowNull:!0}}})],a.prototype,"sublayers",void 0),r([l({value:null,json:{read:{source:"name",reader:t=>j(t)}}})],a.prototype,"title",void 0),r([l({value:!0})],a.prototype,"visible",null),r([h("visible",["visibility"])],a.prototype,"readVisible",null),r([l()],a.prototype,"sourceJSON",void 0),r([l()],a.prototype,"layer",void 0),a=u=r([g("esri.layers.support.KMLSublayer")],a);const E=a,W=["kml","xml"];let o=class extends R(V(z(T(J(N(K)))))){constructor(...t){super(...t),this._visibleFolders=[],this.allSublayers=new M({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=S.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([y(()=>this.sublayers,(t,e)=>{e&&e.forEach(s=>{s.parent=null,s.layer=null}),t&&t.forEach(s=>{s.parent=this,s.layer=this})},p),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))])}normalizeCtorArgs(t,e){return typeof t=="string"?{url:t,...e}:t}readSublayersFromItemOrWebMap(t,e){this._visibleFolders=e.visibleFolders}readSublayers(t,e,s){return w(E,e,s,this._visibleFolders)}writeSublayers(t,e){const s=[],i=t.toArray();for(;i.length;){const n=i[0];n.networkLink||(n.visible&&s.push(n.id),n.sublayers&&i.push(...n.sublayers.toArray())),i.shift()}e.visibleFolders=s}get title(){const t=this._get("title");return t&&this.originOf("title")!=="defaults"?t:this.url?P(this.url,W)||"KML":t||""}set title(t){this._set("title",t)}get visibleSublayers(){const t=this.sublayers,e=[],s=i=>{i.visible&&(e.push(i),i.sublayers&&i.sublayers.forEach(s))};return t&&t.forEach(s),e}get fullExtent(){return this._recomputeFullExtent()}load(t){const e=t!=null?t.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},t).catch(C).then(()=>this._fetchService(e))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(t){const e=await Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:x(this.url??"",this.outSpatialReference,this.refreshInterval,t)),s=k(e.data);s&&this.read(s,{origin:"service"})}_recomputeFullExtent(){let t=null;this.extent!=null&&(t=this.extent.clone());const e=s=>{if(s.sublayers)for(const i of s.sublayers.items)e(i),i.visible&&i.fullExtent&&(t!=null?t.union(i.fullExtent):t=i.fullExtent.clone())};return e(this),t}};r([l({readOnly:!0})],o.prototype,"allSublayers",void 0),r([l({type:S})],o.prototype,"outSpatialReference",void 0),r([l({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),r([l({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"legendEnabled",void 0),r([l({type:["show","hide","hide-children"]})],o.prototype,"listMode",void 0),r([l({type:["KML"]})],o.prototype,"operationalLayerType",void 0),r([l({})],o.prototype,"resourceInfo",void 0),r([l({type:b.ofType(E),json:{write:{ignoreOrigin:!0}}})],o.prototype,"sublayers",void 0),r([h(["web-map","portal-item"],"sublayers",["visibleFolders"])],o.prototype,"readSublayersFromItemOrWebMap",null),r([h("service","sublayers",["sublayers"])],o.prototype,"readSublayers",null),r([I("sublayers")],o.prototype,"writeSublayers",null),r([l({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),r([l({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],o.prototype,"title",null),r([l(A)],o.prototype,"url",void 0),r([l({readOnly:!0})],o.prototype,"visibleSublayers",null),r([l({type:d})],o.prototype,"extent",void 0),r([l()],o.prototype,"fullExtent",null),o=r([g("esri.layers.KMLLayer")],o);const Et=o;export{Et as default};
