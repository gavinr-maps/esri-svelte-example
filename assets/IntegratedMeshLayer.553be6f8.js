var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(t,r,i)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,a=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&n(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&n(e,r,t[r]);return e},p=(e,i)=>t(e,r(i));import{dm as c,hy as l,r as y,h1 as d,gw as u,m as f,hz as h,hA as m,hB as g,hC as v,hD as w,gS as S,dk as b,dl as O,hE as T,ab as j,ac as x,b8 as I,bT as R,ad as _,cG as N,hF as P,gP as U,hG as L,bk as M,hH as J,cq as D,cs as z,L as A,cT as F,cU as K,cV as V,gF as $,cW as E,gT as G,c$ as k,ax as q,dH as B,hI as C,cz as H,q as X,cE as W,gX as Q}from"./vendor.5b1a85aa.js";import{i as Y,R as Z}from"./SceneService.42cbcec9.js";import{s as ee,l as te,u as re,m as ie}from"./I3SLayerDefinitions.5ac5f90b.js";import"./resourceUtils.eca8454b.js";function oe(e){return se[function(e){return e instanceof Blob?e.type:function(e){const t=c(e);return pe[t]||ne}(e.url)}(e)]||ae}const se={},ne="text/plain",ae=se[ne],pe={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const be in pe)se[pe[be]]=be;function ce(e){const t=y(e)&&e.origins?e.origins:[void 0];return(r,i)=>{const o=function(e,t,r){if(y(e)&&"resource"===e.type)return function(e,t,r){const i=w(t,r);return{type:String,read:(e,t,r)=>{const o=d(e,t,r);return i.type===String?o:"function"==typeof i.type?new i.type({url:o}):void 0},write:{writer(t,o,s,n){if(!n||!n.resources)return"string"==typeof t?void(o[s]=u(t,n)):void(o[s]=t.write({},n));const l=function(e){return f(e)?null:"string"==typeof e?e:e.url}(t),d=l?u(l,p(a({},n),{verifyItemRelativeUrls:n&&n.verifyItemRelativeUrls?{writtenUrls:n.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null}),1):null,w=i.type!==String&&(!Y(this)||n&&n.origin&&this.originIdOf(r)>h(n.origin));n&&n.portalItem&&y(d)&&!m(d)?w?function(e,t,r,i,o,s,n,a){const p=n.portalItem.resourceFromPath(i),l=de(r,i,n);oe(l)===c(p.path)?(ye(e,t,p,l,n.resources.toUpdate),o[s]=i):le(e,t,r,i,o,s,n,a)}(this,r,t,d,o,s,n,e):function(e,t,r,i){i.resources.toKeep.push({resource:i.portalItem.resourceFromPath(e)}),t[r]=e}(d,o,s,n):n&&n.portalItem&&(f(d)||y(g(d))||v(d)||w)?le(this,r,t,d,o,s,n,e):o[s]=d}}}}(e,t,r);switch(y(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=T;return{read:e,write:t}}}}(e,r,i);for(const e of t){const t=l(r,e,i);for(const e in o)t[e]=o[e]}}}function le(e,t,r,i,o,s,n,a){const p=S(),c=de(r,i,n),l=b(O(a,"prefix"),p),y=`${l}.${oe(c)}`,d=n.portalItem.resourceFromPath(y);v(i)&&n.resources.pendingOperations.push(async function(e){const t=(await import("./vendor.5b1a85aa.js").then((function(e){return e.iX}))).default,{data:r}=await t(e,{responseType:"blob"});return r}(i).then((e=>{d.path=`${l}.${oe(e)}`,o[s]=d.itemRelativeUrl})).catch((()=>{}))),ye(e,t,d,c,n.resources.toAdd),o[s]=d.itemRelativeUrl}function ye(e,t,r,i,o){o.push({resource:r,content:i,finish:r=>{!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(e,t,r)}})}function de(e,t,r){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(r))],{type:"application/json"})}var ue;let fe=ue=class extends N{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,r,i){if(i.layer&&i.layer.spatialReference&&!i.layer.spatialReference.equals(this.geometry.spatialReference)){if(!P(e.spatialReference,i.layer.spatialReference))return void(i&&i.messages&&i.messages.push(new U("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:i.layer.spatialReference,context:i})));const o=new I;L(e,o,i.layer.spatialReference),t[r]=o.toJSON(i)}else t[r]=e.toJSON(i);delete t[r].spatialReference}clone(){return new ue({geometry:M(this.geometry),type:this.type})}};j([x({type:I}),ce()],fe.prototype,"geometry",void 0),j([R(["web-scene","portal-item"],"geometry")],fe.prototype,"writeGeometry",null),j([x({type:["clip","mask","replace"],nonNullable:!0}),ce()],fe.prototype,"type",void 0),fe=ue=j([_("esri.layers.support.SceneModification")],fe);var he,me=fe;let ge=he=class extends(J(D.ofType(me))){constructor(e){super(e),this.url=null}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}clone(){return new he({url:this.url,items:this.items.map((e=>e.clone()))})}_readModifications(e,t){for(const r of e)this.add(me.fromJSON(r,t))}static fromJSON(e,t){const r=new he;return r._readModifications(e,t),r}static async fromUrl(e,t,r){const i={url:z(e),origin:"service"},o=await A(e,{responseType:"json",signal:O(r,"signal")}),s=t.toJSON(),n=[];for(const c of o.data)n.push(me.fromJSON(p(a({},c),{geometry:p(a({},c.geometry),{spatialReference:s})}),i));return new he({url:e,items:n})}};j([x({type:String})],ge.prototype,"url",void 0),ge=he=j([_("esri.layers.support.SceneModifications")],ge);var ve=ge;let we=class extends(Z(F(K(V($(E(G(k)))))))){constructor(...e){super(...e),this.handles=new q,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this.handles.destroy()}initialize(){this.handles.add(B(this,"modifications","after-changes",(()=>this.modifications=this.modifications),null,null,!0))}normalizeCtorArgs(e,t){return"string"==typeof e?a({url:e},t):e}readModifications(e,t,r){this._modificationsSource={url:C(e,r),context:r}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=O(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(r){H(r)}if(await this._fetchService(t),y(this._modificationsSource)){const t=await ve.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(!f(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(1,p(a({},t),{getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"}),e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new X("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new X("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new X("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};j([x({type:String,readOnly:!0})],we.prototype,"geometryType",void 0),j([x({type:["show","hide"]})],we.prototype,"listMode",void 0),j([x({type:["IntegratedMeshLayer"]})],we.prototype,"operationalLayerType",void 0),j([x({json:{read:!1},readOnly:!0})],we.prototype,"type",void 0),j([x({type:ee,readOnly:!0})],we.prototype,"nodePages",void 0),j([x({type:[te],readOnly:!0})],we.prototype,"materialDefinitions",void 0),j([x({type:[re],readOnly:!0})],we.prototype,"textureSetDefinitions",void 0),j([x({type:[ie],readOnly:!0})],we.prototype,"geometryDefinitions",void 0),j([x({readOnly:!0})],we.prototype,"serviceUpdateTimeStamp",void 0),j([x({type:ve}),ce({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],we.prototype,"modifications",void 0),j([W(["web-scene","portal-item"],"modifications")],we.prototype,"readModifications",null),j([x(Q)],we.prototype,"elevationInfo",void 0),j([x({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],we.prototype,"path",void 0),we=j([_("esri.layers.IntegratedMeshLayer")],we);var Se=we;export{Se as default};
