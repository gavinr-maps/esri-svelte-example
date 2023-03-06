import{bm as _,iO as F,b1 as f,ao as y,G as m,cr as g,r as h,as as d,hU as M,P as b,af as s,ag as l,jM as $,aX as p,ah as S,i4 as j,io as I,iq as N,ip as P,cL as R,cM as C,cN as K,bF as T,aI as w,eG as J,a3 as z,aY as A,cQ as G,cR as W}from"./index-3399a756.js";import{j as q,S as x,g as E,d as k}from"./kmlUtils-7da4bc0c.js";var u;let o=u=class extends _.EventedMixin(F(j)){constructor(...e){super(...e),this.description=null,this.id=null,this.networkLink=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.fullExtent=null,this.addHandles([f(()=>this.sublayers,"after-add",({item:t})=>{t.parent=this,t.layer=this.layer},y),f(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},y),m(()=>this.sublayers,(t,r)=>{if(r)for(const i of r)i.layer=i.parent=null;if(t)for(const i of t)i.parent=this,i.layer=this.layer},y)])}initialize(){g(()=>this.networkLink).then(()=>g(()=>this.visible===!0)).then(()=>this.load())}load(e){var i;if(!this.networkLink||this.networkLink.viewFormat)return;const t=h(e)?e.signal:null,r=this._fetchService(((i=this._get("networkLink"))==null?void 0:i.href)??"",t).then(n=>{var v;const O=q(n.sublayers);this.fullExtent=d.fromJSON(O),this.sourceJSON=n;const c=M(b.ofType(u),x(u,n));this.sublayers?this.sublayers.addMany(c):this.sublayers=c,(v=this.layer)==null||v.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(r),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(t=>t.layer=e)}_fetchService(e,t){return E(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then(r=>k(r.data))}};s([l()],o.prototype,"description",void 0),s([l()],o.prototype,"id",void 0),s([l({readOnly:!0,value:null})],o.prototype,"networkLink",void 0),s([l({json:{write:{allowNull:!0}}})],o.prototype,"parent",void 0),s([l({type:b.ofType(u),json:{write:{allowNull:!0}}})],o.prototype,"sublayers",void 0),s([l({value:null,json:{read:{source:"name",reader:e=>$(e)}}})],o.prototype,"title",void 0),s([l({value:!0})],o.prototype,"visible",null),s([p("visible",["visibility"])],o.prototype,"readVisible",null),s([l()],o.prototype,"sourceJSON",void 0),s([l({value:null})],o.prototype,"layer",null),s([l({type:d})],o.prototype,"fullExtent",void 0),o=u=s([S("esri.layers.support.KMLSublayer")],o);const L=o,H=["kml","xml"];let a=class extends I(N(P(R(C(K(W)))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new T({getCollections:()=>[this.sublayers],getChildrenFunction:t=>t.sublayers}),this.outSpatialReference=w.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([m(()=>this.sublayers,(e,t)=>{t&&t.forEach(r=>{r.parent=null,r.layer=null}),e&&e.forEach(r=>{r.parent=this,r.layer=this})},y),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,r){return x(L,t,r,this._visibleFolders)}writeSublayers(e,t){const r=[],i=e.toArray();for(;i.length;){const n=i[0];n.networkLink||(n.visible&&r.push(n.id),n.sublayers&&i.push(...n.sublayers.toArray())),i.shift()}t.visibleFolders=r}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?J(this.url,H)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],r=i=>{i.visible&&(t.push(i),i.sublayers&&i.sublayers.forEach(r))};return e&&e.forEach(r),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=h(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},e).catch(z).then(()=>this._fetchService(t))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=await Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:E(this.url??"",this.outSpatialReference,this.refreshInterval,e)),r=k(t.data);r&&this.read(r,{origin:"service"})}_recomputeFullExtent(){let e=null;h(this.extent)&&(e=this.extent.clone());const t=r=>{if(r.sublayers)for(const i of r.sublayers.items)t(i),i.visible&&i.fullExtent&&(h(e)?e.union(i.fullExtent):e=i.fullExtent.clone())};return t(this),e}};s([l({readOnly:!0})],a.prototype,"allSublayers",void 0),s([l({type:w})],a.prototype,"outSpatialReference",void 0),s([l({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),s([l({readOnly:!0,json:{read:!1,write:!1}})],a.prototype,"legendEnabled",void 0),s([l({type:["show","hide","hide-children"]})],a.prototype,"listMode",void 0),s([l({type:["KML"]})],a.prototype,"operationalLayerType",void 0),s([l({})],a.prototype,"resourceInfo",void 0),s([l({type:b.ofType(L),json:{write:{ignoreOrigin:!0}}})],a.prototype,"sublayers",void 0),s([p(["web-map","portal-item"],"sublayers",["visibleFolders"])],a.prototype,"readSublayersFromItemOrWebMap",null),s([p("service","sublayers",["sublayers"])],a.prototype,"readSublayers",null),s([A("sublayers")],a.prototype,"writeSublayers",null),s([l({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),s([l({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],a.prototype,"title",null),s([l(G)],a.prototype,"url",void 0),s([l({readOnly:!0})],a.prototype,"visibleSublayers",null),s([l({type:d})],a.prototype,"extent",void 0),s([l()],a.prototype,"fullExtent",null),a=s([S("esri.layers.KMLLayer")],a);const D=a;export{D as default};
