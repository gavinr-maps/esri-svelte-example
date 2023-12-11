import{f as s,j as v,gQ as $e,dz as F,s as G,g as l,aL as m,d9 as me,aJ as fe,eT as T,E as q,fC as H,il as _e,b1 as Y,a_ as ne,im as A,io as le,aM as oe,fy as R,a5 as be,ip as k,aP as re,gO as Ie,iq as ae,ir as Me,is as Se,fc as ye,c$ as Le,dj as ce,aq as ge,dp as Ee,dn as Oe,dk as je,dm as He,it as Te,H as Ce,d6 as We,bS as Ve,iu as Ne,V as D,gy as ze,eG as Ae,k as Ge,aB as Ue,q as Be,$ as Fe,d as qe,aK as ke,eP as Je,fF as Ke,dH as De,bP as Qe}from"./index-27db053b.js";import{m as Ye}from"./MultiOriginJSONSupport-9d9b01a6.js";import{a as Ze}from"./BlendLayer-1f9f5e5d.js";import{u as Xe}from"./OperationalLayer-b2407116.js";import{t as et}from"./ScaleRangeLayer-66e2fd9a.js";import{p as tt}from"./imageUtils-4ded4979.js";import{h as $,j as xe,i as nt}from"./perspectiveUtils-3610c6ce.js";import{t as ot,e as Q}from"./mat3f64-221ce671.js";import{p as rt}from"./resourceExtension-c56f9c27.js";import{o as st}from"./BoundsStore-2dd95b5d.js";import"./jsonUtils-94e6a40e.js";import"./parser-e532dcbf.js";import"./commonProperties-665c2ea3.js";import"./ElevationInfo-aaff1467.js";import"./lengthUtils-535759c3.js";import"./normalizeUtilsSync-5f3d850d.js";import"./PooledRBush-aa8de44c.js";let te=class extends $e{projectOrWarn(e,t){if(e==null)return e;const{geometry:o,pending:n}=F(e,t);return n?null:n||o?o:(G.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:e,sourceSpatialReference:e.spatialReference,targetSpatialReference:t}),null)}};te=s([v("esri.layers.support.GeoreferenceBase")],te);const Z=te,X=Q(),p=R();let B=class extends be{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};s([l()],B.prototype,"sourcePoint",void 0),s([l({type:m})],B.prototype,"mapPoint",void 0),B=s([v("esri.layers.support.ControlPoint")],B);let x=class extends me(Z){constructor(e){super(e),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(e,t){const o=fe.fromJSON(t.spatialReference),n=ot(...t.coefficients,1);return e.map(r=>(T(p,r.x,r.y),$(p,p,n),{sourcePoint:r,mapPoint:new m({x:p[0],y:p[1],spatialReference:o})}))}writeControlPoints(e,t,o,n){if(this.transform!=null)e!=null&&f(e[0])&&(t.controlPoints=e.map(r=>{const i=r.sourcePoint;return{x:i.x,y:i.y}}),t.spatialReference=e[0].mapPoint.spatialReference.toJSON(),t.coefficients=this.transform.slice(0,8));else{const r=new q("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration.",{layer:n==null?void 0:n.layer,georeference:this});n!=null&&n.messages?n.messages.push(r):G.getLogger(this).error(r.name,r.message)}}get coords(){if(this.controlPoints==null)return null;const e=this._updateTransform(X);if(e==null||!f(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return ut(e,this.width,this.height,t)}set coords(e){if(this.controlPoints==null||!f(this.controlPoints[0]))return;const t=this.controlPoints[0].mapPoint.spatialReference;if((e=this.projectOrWarn(e,t))==null)return;const{width:o,height:n}=this,{rings:[[r,i,a,c]]}=e,u={sourcePoint:H(0,n),mapPoint:new m({x:r[0],y:r[1],spatialReference:t})},h={sourcePoint:H(0,0),mapPoint:new m({x:i[0],y:i[1],spatialReference:t})},d={sourcePoint:H(o,0),mapPoint:new m({x:a[0],y:a[1],spatialReference:t})},g={sourcePoint:H(o,n),mapPoint:new m({x:c[0],y:c[1],spatialReference:t})};f(u)&&f(h)&&f(d)&&f(g)&&(ue(X,u,h,d,g),this.controlPoints=this.controlPoints.map(({sourcePoint:w})=>(T(p,w.x,w.y),$(p,p,X),{sourcePoint:w,mapPoint:new m({x:p[0],y:p[1],spatialReference:t})})))}get inverseTransform(){return this.transform==null?null:_e(Q(),this.transform)}get transform(){return this._updateTransform()}toMap(e){if(e==null||this.transform==null||this.controlPoints==null||!f(this.controlPoints[0]))return null;T(p,e.x,e.y);const t=this.controlPoints[0].mapPoint.spatialReference;return $(p,p,this.transform),new m({x:p[0],y:p[1],spatialReference:t})}toSource(e){if(e==null||this.inverseTransform==null||this.controlPoints==null||!f(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return e=e.normalize(),(e=F(e,t).geometry)==null?null:(T(p,e.x,e.y),$(p,p,this.inverseTransform),H(p[0],p[1]))}toSourceNormalized(e){const t=this.toSource(e);return t!=null&&(t.x/=this.width,t.y/=this.height),t}_updateTransform(e){const{controlPoints:t,width:o,height:n}=this;if(!(t!=null&&o>0&&n>0))return null;const[r,i,a,c]=t;if(!f(r))return null;const u=r.mapPoint.spatialReference,h=this._projectControlPoint(i,u),d=this._projectControlPoint(a,u),g=this._projectControlPoint(c,u);if(!h.valid||!d.valid||!g.valid||!f(h.controlPoint))return null;e==null&&(e=Q());let w=null;return w=f(d.controlPoint)&&f(g.controlPoint)?ue(e,r,h.controlPoint,d.controlPoint,g.controlPoint):f(d.controlPoint)?lt(e,r,h.controlPoint,d.controlPoint):it(e,r,h.controlPoint),w.every(we=>we===0)?null:w}_projectControlPoint(e,t){if(!f(e))return{valid:!0,controlPoint:e};const{sourcePoint:o,mapPoint:n}=e,{geometry:r,pending:i}=F(n,t);return i?{valid:!1,controlPoint:null}:i||r?{valid:!0,controlPoint:{sourcePoint:o,mapPoint:r}}:(G.getLogger(this).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:e,sourceSpatialReference:n.spatialReference,targetSpatialReference:t}),{valid:!1,controlPoint:null})}};function f(e){return(e==null?void 0:e.sourcePoint)!=null&&e.mapPoint!=null}s([l({type:[B],json:{write:{allowNull:!1,isRequired:!0}}})],x.prototype,"controlPoints",void 0),s([Y("controlPoints")],x.prototype,"readControlPoints",null),s([ne("controlPoints")],x.prototype,"writeControlPoints",null),s([l()],x.prototype,"coords",null),s([l({json:{write:!0}})],x.prototype,"height",void 0),s([l({readOnly:!0})],x.prototype,"inverseTransform",null),s([l({readOnly:!0})],x.prototype,"transform",null),s([l({json:{write:!0}})],x.prototype,"width",void 0),x=s([v("esri.layers.support.ControlPointsGeoreference")],x);const _=R(),b=R(),C=R(),O=R(),I=R(),M=R(),W=R(),j=R(),J=Math.PI/2;function S(e,t,o){T(e,o.sourcePoint.x,o.sourcePoint.y),T(t,o.mapPoint.x,o.mapPoint.y)}function it(e,t,o){return S(_,I,t),S(b,M,o),A(C,b,_,J),A(O,_,b,J),A(W,M,I,-J),A(j,I,M,-J),se(e,_,b,C,O,I,M,W,j)}function lt(e,t,o,n){return S(_,I,t),S(b,M,o),S(C,W,n),le(O,_,b,.5),A(O,C,O,Math.PI),le(j,I,M,.5),A(j,W,j,Math.PI),se(e,_,b,C,O,I,M,W,j)}function ue(e,t,o,n,r){return S(_,I,t),S(b,M,o),S(C,W,n),S(O,j,r),se(e,_,b,C,O,I,M,W,j)}const at=new Array(8).fill(0),ct=new Array(8).fill(0);function pe(e,t,o,n,r){return e[0]=t[0],e[1]=t[1],e[2]=o[0],e[3]=o[1],e[4]=n[0],e[5]=n[1],e[6]=r[0],e[7]=r[1],e}function se(e,t,o,n,r,i,a,c,u){return xe(e,pe(at,t,o,n,r),pe(ct,i,a,c,u))}function ut(e,t,o,n){const r=k(0,o),i=k(0,0),a=k(t,0),c=k(t,o);return $(r,r,e),$(i,i,e),$(a,a,e),$(c,c,e),new oe({rings:[[r,i,a,c,r]],spatialReference:n})}const Pe=x,U=R();let L=class extends Z{constructor(e){super(e),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:e,topRight:t,bottomLeft:o,bottomRight:n}=this;if(e==null||t==null||o==null||n==null)return null;const r=e.spatialReference;return t=this.projectOrWarn(t,r),o=this.projectOrWarn(o,r),n=this.projectOrWarn(n,r),t==null||o==null||n==null?null:new oe({rings:[[[o.x,o.y],[e.x,e.y],[t.x,t.y],[n.x,n.y],[o.x,o.y]]],spatialReference:r})}set coords(e){const{topLeft:t}=this;if(t==null)return;const o=t.spatialReference;if((e=this.projectOrWarn(e,o))==null)return;const{rings:[[n,r,i,a]]}=e;this.bottomLeft=new m({x:n[0],y:n[1],spatialReference:o}),this.topLeft=new m({x:r[0],y:r[1],spatialReference:o}),this.topRight=new m({x:i[0],y:i[1],spatialReference:o}),this.bottomRight=new m({x:a[0],y:a[1],spatialReference:o})}toSourceNormalized(e){const{topLeft:t,topRight:o,bottomRight:n,bottomLeft:r}=this;if(e==null||t==null||o==null||n==null||r==null)return null;const i=t.spatialReference;e=e.normalize();const a=F(e,i).geometry;if(a==null)return null;T(U,a.x,a.y);const c=xe(Q(),[t.x,t.y,r.x,r.y,o.x,o.y,n.x,n.y],[0,0,0,1,1,0,1,1]);return $(U,U,c),H(U[0],U[1])}};s([l()],L.prototype,"coords",null),s([l({type:m})],L.prototype,"bottomLeft",void 0),s([l({type:m})],L.prototype,"bottomRight",void 0),s([l({type:m})],L.prototype,"topLeft",void 0),s([l({type:m})],L.prototype,"topRight",void 0),L=s([v("esri.layers.support.CornersGeoreference")],L);const pt=L;let V=class extends Z{constructor(e){super(e),this.extent=null,this.rotation=0,this.type="extent-and-rotation"}get coords(){if(this.extent==null)return null;const{xmin:e,ymin:t,xmax:o,ymax:n,spatialReference:r}=this.extent;let i;if(this.rotation){const{x:a,y:c}=this.extent.center,u=ee(a,c,this.rotation);i=[u(e,t),u(e,n),u(o,n),u(o,t)],i.push(i[0])}else i=[[e,t],[e,n],[o,n],[o,t],[e,t]];return new oe({rings:[i],spatialReference:r})}set coords(e){if(e==null||this.extent==null)return;const t=this.extent.spatialReference;if(e=this.projectOrWarn(e,t),(e==null?void 0:e.extent)==null)return;const{rings:[[o,n,r]],extent:{center:{x:i,y:a}}}=e,c=Ie(Math.PI/2-Math.atan2(n[1]-o[1],n[0]-o[0])),u=ee(i,a,-c),[h,d]=u(o[0],o[1]),[g,w]=u(r[0],r[1]);this.extent=new re({xmin:h,ymin:d,xmax:g,ymax:w,spatialReference:t}),this.rotation=c}toSourceNormalized(e){const{extent:t,rotation:o}=this;if(e==null||t==null)return null;const{xmin:n,ymin:r,xmax:i,ymax:a,center:c,spatialReference:u}=t;e=e.normalize();const h=F(e,u).geometry;if(h==null)return null;let d=h.x,g=h.y;return o&&([d,g]=ee(c.x,c.y,-o)(d,g)),H(ae(d,n,i,0,1),ae(g,a,r,0,1))}};function ee(e,t,o){const n=Me(o),r=Math.cos(n),i=Math.sin(n);return(a,c)=>[r*(a-e)+i*(c-t)+e,r*(c-t)-i*(a-e)+t]}s([l()],V.prototype,"coords",null),s([l({type:re})],V.prototype,"extent",void 0),s([l({type:Number})],V.prototype,"rotation",void 0),V=s([v("esri.layers.support.ExtentAndRotationGeoreference")],V);const ht=V,dt={key:"type",base:Z,typeMap:{"control-points":Pe,corners:pt,"extent-and-rotation":ht}};let N=class extends Se(me(ye)){constructor(e){super(e),this.georeference=null,this.opacity=1}readGeoreference(e){return Pe.fromJSON(e)}get contentWidth(){return 0}get contentHeight(){return 0}toSource(e){const{georeference:t,contentWidth:o,contentHeight:n}=this;if(e==null||t==null||o===0||n===0)return null;const r=t.toSourceNormalized(e);return r==null?null:(r.x*=o,r.y*=n,r)}};s([l({types:dt,json:{write:!0}})],N.prototype,"georeference",void 0),s([Y("georeference")],N.prototype,"readGeoreference",null),s([l()],N.prototype,"opacity",void 0),N=s([v("esri.layers.support.MediaElementBase")],N);const ie=N;let P=class extends ie{constructor(t){super(t),this.animationOptions=null,this.content=null,this.image=null,this.type="image",this.image=null}load(){const t=this.image;if(typeof t=="string"){const o=tt(t).then(n=>{this._set("content",n)});this.addResolvingPromise(o)}else if(t instanceof HTMLImageElement){const o=t.decode().then(()=>{this._set("content",t)});this.addResolvingPromise(o)}else t?this._set("content",t):this.addResolvingPromise(Promise.reject(new q("image-element:invalid-image-type","Invalid image type",{image:t})));return Promise.resolve(this)}get contentWidth(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalWidth:this.content.width}get contentHeight(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalHeight:this.content.height}readImage(t,o,n){return Le(o.url,n)}writeImage(t,o,n,r){if(t==null)return;const i=r==null?void 0:r.portalItem,a=r==null?void 0:r.resources;if(!i||!a)return void(typeof t=="string"&&(o[n]=ce(t,r)));const c=typeof t!="string"||ge(t)||Ee(t)?null:t;if(c){if(Oe(c)==null)return void(o[n]=c);const u=ce(c,{...r,verifyItemRelativeUrls:r!=null&&r.verifyItemRelativeUrls?{writtenUrls:r.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},je.NO);if(i&&u&&!He(u))return a.toKeep.push({resource:i.resourceFromPath(u),compress:!1}),void(o[n]=u)}o[n]="<pending>",a.pendingOperations.push(mt(t).then(u=>{const h=yt(u,i);o[n]=h.itemRelativeUrl,a.toAdd.push({resource:h,content:{type:"blob",blob:u},compress:!1,finish:d=>{this.image=d.url}})}))}};s([l()],P.prototype,"animationOptions",void 0),s([l({readOnly:!0})],P.prototype,"content",void 0),s([l({readOnly:!0})],P.prototype,"contentWidth",null),s([l({readOnly:!0})],P.prototype,"contentHeight",null),s([l({json:{name:"url",type:String}})],P.prototype,"image",void 0),s([Y("image",["url"])],P.prototype,"readImage",null),s([ne("image")],P.prototype,"writeImage",null),s([l({readOnly:!0,json:{name:"mediaType"}})],P.prototype,"type",void 0),P=s([v("esri.layers.support.ImageElement")],P);const ve=P;async function mt(e){return typeof e=="string"?ge(e)?Te(e):(await Ce(e,{responseType:"blob"})).data:new Promise(t=>ft(e).toBlob(t))}function ft(e){if(e instanceof HTMLCanvasElement)return e;const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,o=e instanceof HTMLImageElement?e.naturalHeight:e.height,n=document.createElement("canvas"),r=n.getContext("2d");return n.width=t,n.height=o,e instanceof HTMLImageElement?r.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&r.putImageData(e,0,0),n}function yt(e,t){const o=We(),n=`${Ve("media",o)}.${rt({type:"blob",blob:e})}`;return t.resourceFromPath(n)}let E=class extends ie{constructor(e){super(e),this.autoplay=!0,this.content=null,this.type="video"}load(){const e=this.video;if(typeof e=="string"){const t=document.createElement("video");t.src=e,t.crossOrigin="anonymous",t.autoplay=!0,t.muted=!0,t.loop=!0,this.addResolvingPromise(this._loadVideo(t).then(()=>{this._set("content",t)}))}else e instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(e).then(()=>{this._set("content",e)})):this.addResolvingPromise(Promise.reject(new q("video-element:invalid-video-type","Invalid video type",{video:e})));return Promise.resolve(this)}get contentWidth(){var e;return((e=this.content)==null?void 0:e.videoWidth)??0}get contentHeight(){var e;return((e=this.content)==null?void 0:e.videoHeight)??0}set video(e){this.loadStatus==="not-loaded"?this._set("video",e):G.getLogger(this).error("#video","video cannot be changed after the element is loaded.")}_loadVideo(e){return new Promise((t,o)=>{var r;const n=Ne(e,"canplay",()=>{this.removeHandles("canplay"),this.autoplay?e.play().then(t,o):t()});this.addHandles(n,"canplay"),e.crossOrigin!=="anonymous"&&(e.crossOrigin="anonymous",(r=e.src)!=null&&r.includes("blob:")||(e.src=e.src))})}};s([l()],E.prototype,"autoplay",void 0),s([l({readOnly:!0})],E.prototype,"content",void 0),s([l({readOnly:!0})],E.prototype,"contentWidth",null),s([l({readOnly:!0})],E.prototype,"contentHeight",null),s([l()],E.prototype,"video",null),E=s([v("esri.layers.support.VideoElement")],E);const Re=E,gt={key:"type",defaultKeyValue:"image",base:ie,typeMap:{image:ve,video:Re}},he=D.ofType(gt);let z=class extends ye.LoadableMixin(ze(Ae.EventedAccessor)){constructor(e){super(e),this._index=new st,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=t=>{for(const n of t.removed){const r=this._elementViewsMap.get(n);this._elementViewsMap.delete(n),this._index.delete(r),this.removeHandles(r),r.destroy(),this.notifyChange("fullExtent")}const{spatialReference:o}=this;for(const n of t.added){if(this._elementViewsMap.get(n))continue;const r=new nt({spatialReference:o,element:n});this._elementViewsMap.set(n,r);const i=Ge(()=>r.coords,()=>this._updateIndexForElement(r,!1));this._updateIndexForElement(r,!0),this.addHandles(i,r)}this._elementsIndexes.clear(),this.elements.forEach((n,r)=>this._elementsIndexes.set(n,r)),this.emit("refresh")},this.elements=new he}async load(e){if(Ue(e),!this.spatialReference){const t=this.elements.find(o=>{var n;return((n=o.georeference)==null?void 0:n.coords)!=null});this._set("spatialReference",t?t.georeference.coords.spatialReference:fe.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.addHandles(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",Be(e,this._get("elements"),he))}get fullExtent(){if(this.loadStatus==="not-loaded")return null;const e=this._index.fullBounds;return e==null?null:new re({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){this.loadStatus==="not-loaded"?this._set("spatialReference",e):G.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(e,t){await this.load(),await Fe(e.spatialReference,this.spatialReference,null,t);const o=qe(e.spatialReference,this.spatialReference)?e:ke(e,this.spatialReference);if(!o)return[];const n=o.normalize(),r=[];for(const i of n)this._index.forEachInBounds(Je(i),({normalizedCoords:a,element:c})=>{a!=null&&Ke(i,a)&&r.push(c)});return r.sort((i,a)=>this._elementsIndexes.get(i)-this._elementsIndexes.get(a)),r}_updateIndexForElement(e,t){const o=e.normalizedBounds,n=this._index.has(e),r=o!=null;this._index.delete(e),r&&this._index.set(e,o),this.notifyChange("fullExtent"),t||(n!==r?this.emit("refresh"):this.emit("change",{element:e.element}))}};s([l()],z.prototype,"elements",null),s([l({readOnly:!0})],z.prototype,"fullExtent",null),s([l()],z.prototype,"spatialReference",null),z=s([v("esri.layers.support.LocalMediaElementSource")],z);const K=z;function de(e){return typeof e=="object"&&e!=null&&"type"in e}let y=class extends Ze(et(Xe(Ye(Qe)))){constructor(e){super(e),this.effectiveSource=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this.source=new K}load(e){const t=this.source;if(!t)return this.addResolvingPromise(Promise.reject(new q("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer."))),Promise.resolve(this);const o=de(t)?new K({elements:new D([t])}):t;this._set("effectiveSource",o),this.spatialReference&&(o.spatialReference=this.spatialReference);const n=o.load(e).then(()=>{this.spatialReference=o.spatialReference});return this.addResolvingPromise(n),Promise.resolve(this)}destroy(){var e,t;(e=this.effectiveSource)==null||e.destroy(),(t=this.source)==null||t.destroy()}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){this.loadStatus==="not-loaded"?this._set("source",e):G.getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)?new K({elements:new D(e)}):e instanceof D?new K({elements:e}):e:null}readSource(e,t,o){const n=t.mediaType==="image"?new ve:t.mediaType==="video"?new Re:null;return n==null||n.read(t,o),n}writeSource(e,t,o,n){var r;e&&de(e)&&e.type==="image"?e.write(t,n):n!=null&&n.messages&&((r=n==null?void 0:n.messages)==null||r.push(new q("media-layer:unsupported-source","source must be an 'ImageElement'")))}};s([l({readOnly:!0})],y.prototype,"effectiveSource",void 0),s([l({type:String})],y.prototype,"copyright",void 0),s([l({readOnly:!0})],y.prototype,"fullExtent",null),s([l({type:["MediaLayer"]})],y.prototype,"operationalLayerType",void 0),s([l({type:["show","hide"]})],y.prototype,"listMode",void 0),s([l({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1}}})],y.prototype,"source",null),s([De("source")],y.prototype,"castSource",null),s([Y("source",["url"])],y.prototype,"readSource",null),s([ne("source")],y.prototype,"writeSource",null),s([l()],y.prototype,"spatialReference",void 0),s([l({readOnly:!0})],y.prototype,"type",void 0),y=s([v("esri.layers.MediaLayer")],y);const Wt=y;export{Wt as default};
