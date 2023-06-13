import{a as i,c as P,gy as $e,e1 as Y,s as W,b as a,az as h,cr as de,N as me,e5 as A,T as z,eN as G,hv as _e,aH as q,aF as te,hw as N,hx as ie,aA as ne,eJ as I,P as Ie,hy as U,aC as oe,fT as Me,hz as Se,hA as je,ej as fe,a1 as Z,aa as be,cC as ae,a2 as ye,cH as ge,cG as Le,cD as Ee,cF as Oe,hB as Te,cJ as Ce,by as Ve,V as k,fy as He,bv as Ae,aM as Ne,l as We,as as Ge,p as Be,ax as Fe,S as ze,ay as Ue,e0 as Je,eR as De,cR as ke,au as qe}from"./index-e8c6bcc0.js";import{O as Ke}from"./MultiOriginJSONSupport-476ea916.js";import{a as Qe}from"./BlendLayer-63dc08ea.js";import{c as Ye}from"./OperationalLayer-6d8023bf.js";import{t as Ze}from"./ScaleRangeLayer-4cc0b1db.js";import{h as b,j as Xe,i as et}from"./perspectiveUtils-bf1f33c3.js";import{t as tt,e as X}from"./mat3f64-221ce671.js";import{t as nt}from"./resourceExtension-95ca45df.js";import{o as ot}from"./BoundsStore-dc194457.js";import"./jsonUtils-45b2dffb.js";import"./parser-c8281db0.js";import"./commonProperties-a06e23a3.js";import"./ElevationInfo-9f2bd050.js";import"./lengthUtils-b9fae671.js";import"./normalizeUtilsSync-18609246.js";import"./normalizeUtilsCommon-123fc71f.js";import"./PooledRBush-4ae7c2cc.js";let ee=class extends $e{projectOrWarn(t,o){if(t==null)return t;const{geometry:n,pending:s}=Y(t,o);return s?null:s||n?n:(W.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:t,sourceSpatialReference:t.spatialReference,targetSpatialReference:o}),null)}};ee=i([P("esri.layers.support.GeoreferenceBase")],ee);const K=ee,Q=X(),u=I();let B=class extends Ie{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};i([a()],B.prototype,"sourcePoint",void 0),i([a({type:h})],B.prototype,"mapPoint",void 0),B=i([P("esri.layers.support.ControlPoint")],B);let g=class extends de(K){constructor(e){super(e),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(e,t){const o=me.fromJSON(t.spatialReference),n=tt(...t.coefficients,1);return e.map(s=>(A(u,s.x,s.y),b(u,u,n),{sourcePoint:s,mapPoint:new h({x:u[0],y:u[1],spatialReference:o})}))}writeControlPoints(e,t,o,n){if(this.transform!=null)e!=null&&d(e[0])&&(t.controlPoints=e.map(s=>{const r=s.sourcePoint;return{x:r.x,y:r.y}}),t.spatialReference=e[0].mapPoint.spatialReference.toJSON(),t.coefficients=this.transform.slice(0,8));else{const s=new z("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration.",{layer:n==null?void 0:n.layer,georeference:this});n!=null&&n.messages?n.messages.push(s):W.getLogger(this).error(s.name,s.message)}}get coords(){if(this.controlPoints==null)return null;const e=this._updateTransform(Q);if(e==null||!d(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return lt(e,this.width,this.height,t)}set coords(e){if(this.controlPoints==null||!d(this.controlPoints[0]))return;const t=this.controlPoints[0].mapPoint.spatialReference;if((e=this.projectOrWarn(e,t))==null)return;const{width:o,height:n}=this,{rings:[[s,r,l,c]]}=e,p={sourcePoint:G(0,n),mapPoint:new h({x:s[0],y:s[1],spatialReference:t})},f={sourcePoint:G(0,0),mapPoint:new h({x:r[0],y:r[1],spatialReference:t})},y={sourcePoint:G(o,0),mapPoint:new h({x:l[0],y:l[1],spatialReference:t})},M={sourcePoint:G(o,n),mapPoint:new h({x:c[0],y:c[1],spatialReference:t})};d(p)&&d(f)&&d(y)&&d(M)&&(le(Q,p,f,y,M),this.controlPoints=this.controlPoints.map(({sourcePoint:v})=>(A(u,v.x,v.y),b(u,u,Q),{sourcePoint:v,mapPoint:new h({x:u[0],y:u[1],spatialReference:t})})))}get inverseTransform(){return this.transform==null?null:_e(X(),this.transform)}get transform(){return this._updateTransform()}toMap(e){if(e==null||this.transform==null||this.controlPoints==null||!d(this.controlPoints[0]))return null;A(u,e.x,e.y);const t=this.controlPoints[0].mapPoint.spatialReference;return b(u,u,this.transform),new h({x:u[0],y:u[1],spatialReference:t})}toSource(e){if(e==null||this.inverseTransform==null||this.controlPoints==null||!d(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return e=e.normalize(),(e=Y(e,t).geometry)==null?null:(A(u,e.x,e.y),b(u,u,this.inverseTransform),G(u[0],u[1]))}_updateTransform(e){const{controlPoints:t,width:o,height:n}=this;if(!(t!=null&&o>0&&n>0))return null;const[s,r,l,c]=t;if(!d(s))return null;const p=s.mapPoint.spatialReference,f=this._projectControlPoint(r,p),y=this._projectControlPoint(l,p),M=this._projectControlPoint(c,p);if(!f.valid||!y.valid||!M.valid||!d(f.controlPoint))return null;e==null&&(e=X());let v=null;return v=d(y.controlPoint)&&d(M.controlPoint)?le(e,s,f.controlPoint,y.controlPoint,M.controlPoint):d(y.controlPoint)?rt(e,s,f.controlPoint,y.controlPoint):st(e,s,f.controlPoint),v.every(we=>we===0)?null:v}_projectControlPoint(e,t){if(!d(e))return{valid:!0,controlPoint:e};const{sourcePoint:o,mapPoint:n}=e,{geometry:s,pending:r}=Y(n,t);return r?{valid:!1,controlPoint:null}:r||s?{valid:!0,controlPoint:{sourcePoint:o,mapPoint:s}}:(W.getLogger(this).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:e,sourceSpatialReference:n.spatialReference,targetSpatialReference:t}),{valid:!1,controlPoint:null})}};function d(e){return e!=null&&e.sourcePoint!=null&&e.mapPoint!=null}i([a({type:[B],json:{write:{allowNull:!1,isRequired:!0}}})],g.prototype,"controlPoints",void 0),i([q("controlPoints")],g.prototype,"readControlPoints",null),i([te("controlPoints")],g.prototype,"writeControlPoints",null),i([a()],g.prototype,"coords",null),i([a({json:{write:!0}})],g.prototype,"height",void 0),i([a({readOnly:!0})],g.prototype,"inverseTransform",null),i([a({readOnly:!0})],g.prototype,"transform",null),i([a({json:{write:!0}})],g.prototype,"width",void 0),g=i([P("esri.layers.support.ControlPointsGeoreference")],g);const x=I(),R=I(),O=I(),L=I(),w=I(),$=I(),T=I(),E=I(),J=Math.PI/2;function _(e,t,o){A(e,o.sourcePoint.x,o.sourcePoint.y),A(t,o.mapPoint.x,o.mapPoint.y)}function st(e,t,o){return _(x,w,t),_(R,$,o),N(O,R,x,J),N(L,x,R,J),N(T,$,w,-J),N(E,w,$,-J),se(e,x,R,O,L,w,$,T,E)}function rt(e,t,o,n){return _(x,w,t),_(R,$,o),_(O,T,n),ie(L,x,R,.5),N(L,O,L,Math.PI),ie(E,w,$,.5),N(E,T,E,Math.PI),se(e,x,R,O,L,w,$,T,E)}function le(e,t,o,n,s){return _(x,w,t),_(R,$,o),_(O,T,n),_(L,E,s),se(e,x,R,O,L,w,$,T,E)}const it=new Array(8).fill(0),at=new Array(8).fill(0);function ce(e,t,o,n,s){return e[0]=t[0],e[1]=t[1],e[2]=o[0],e[3]=o[1],e[4]=n[0],e[5]=n[1],e[6]=s[0],e[7]=s[1],e}function se(e,t,o,n,s,r,l,c,p){return Xe(e,ce(it,t,o,n,s),ce(at,r,l,c,p))}function lt(e,t,o,n){const s=U(0,o),r=U(0,0),l=U(t,0),c=U(t,o);return b(s,s,e),b(r,r,e),b(l,l,e),b(c,c,e),new ne({rings:[[s,r,l,c,s]],spatialReference:n})}const Pe=g;let S=class extends K{constructor(t){super(t),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:t,topRight:o,bottomLeft:n,bottomRight:s}=this;if(t==null||o==null||n==null||s==null)return null;const r=t.spatialReference;return o=this.projectOrWarn(o,r),n=this.projectOrWarn(n,r),s=this.projectOrWarn(s,r),o==null||n==null||s==null?null:new ne({rings:[[[n.x,n.y],[t.x,t.y],[o.x,o.y],[s.x,s.y],[n.x,n.y]]],spatialReference:r})}set coords(t){const{topLeft:o}=this;if(o==null)return;const n=o.spatialReference;if((t=this.projectOrWarn(t,n))==null)return;const{rings:[[s,r,l,c]]}=t;this.bottomLeft=new h({x:s[0],y:s[1],spatialReference:n}),this.topLeft=new h({x:r[0],y:r[1],spatialReference:n}),this.topRight=new h({x:l[0],y:l[1],spatialReference:n}),this.bottomRight=new h({x:c[0],y:c[1],spatialReference:n})}};i([a()],S.prototype,"coords",null),i([a({type:h})],S.prototype,"bottomLeft",void 0),i([a({type:h})],S.prototype,"bottomRight",void 0),i([a({type:h})],S.prototype,"topLeft",void 0),i([a({type:h})],S.prototype,"topRight",void 0),S=i([P("esri.layers.support.CornersGeoreference")],S);const ct=S;let C=class extends K{constructor(e){super(e),this.extent=null,this.rotation=0,this.type="extent-and-rotation"}get coords(){if(this.extent==null)return null;const{xmin:e,ymin:t,xmax:o,ymax:n,spatialReference:s}=this.extent;let r;if(this.rotation){const{x:l,y:c}=this.extent.center,p=pe(l,c,this.rotation);r=[p(e,t),p(e,n),p(o,n),p(o,t)],r.push(r[0])}else r=[[e,t],[e,n],[o,n],[o,t],[e,t]];return new ne({rings:[r],spatialReference:s})}set coords(e){if(e==null||this.extent==null)return;const t=this.extent.spatialReference;if((e=this.projectOrWarn(e,t))==null||e.extent==null)return;const{rings:[[o,n,s]],extent:{center:{x:r,y:l}}}=e,c=Me(Math.PI/2-Math.atan2(n[1]-o[1],n[0]-o[0])),p=pe(r,l,-c),[f,y]=p(o[0],o[1]),[M,v]=p(s[0],s[1]);this.extent=new oe({xmin:f,ymin:y,xmax:M,ymax:v,spatialReference:t}),this.rotation=c}};function pe(e,t,o){const n=Se(o),s=Math.cos(n),r=Math.sin(n);return(l,c)=>[s*(l-e)+r*(c-t)+e,s*(c-t)-r*(l-e)+t]}i([a()],C.prototype,"coords",null),i([a({type:oe})],C.prototype,"extent",void 0),i([a({type:Number})],C.prototype,"rotation",void 0),C=i([P("esri.layers.support.ExtentAndRotationGeoreference")],C);const pt=C,ut={key:"type",base:K,typeMap:{"control-points":Pe,corners:ct,"extent-and-rotation":pt}};let V=class extends je(de(fe)){constructor(e){super(e),this.georeference=null,this.opacity=1}readGeoreference(e){return Pe.fromJSON(e)}};i([a({types:ut,json:{write:!0}})],V.prototype,"georeference",void 0),i([q("georeference")],V.prototype,"readGeoreference",null),i([a()],V.prototype,"opacity",void 0),V=i([P("esri.layers.support.MediaElementBase")],V);const re=V;let j=class extends re{constructor(t){super(t),this.content=null,this.image=null,this.type="image",this.image=null}load(){const t=this.image;if(typeof t=="string"){const o=Z(t,{responseType:"image"}).then(({data:n})=>{this._set("content",n)});this.addResolvingPromise(o)}else if(t instanceof HTMLImageElement){const o=t.decode().then(()=>{this._set("content",t)});this.addResolvingPromise(o)}else t?this._set("content",t):this.addResolvingPromise(Promise.reject(new z("image-element:invalid-image-type","Invalid image type",{image:t})));return Promise.resolve(this)}readImage(t,o,n){return be(o.url,n)}writeImage(t,o,n,s){if(t==null)return;const r=s==null?void 0:s.portalItem,l=s==null?void 0:s.resources;if(!r||!l)return void(typeof t=="string"&&(o[n]=ae(t,s)));const c=typeof t!="string"||ye(t)||ge(t)?null:t;if(c){if(Le(c)==null)return void(o[n]=c);const p=ae(c,{...s,verifyItemRelativeUrls:s&&s.verifyItemRelativeUrls?{writtenUrls:s.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},Ee.NO);if(r&&p&&!Oe(p))return l.toKeep.push({resource:r.resourceFromPath(p),compress:!1}),void(o[n]=p)}o[n]="<pending>",l.pendingOperations.push(xe(t).then(p=>{const f=dt(p,r);o[n]=f.itemRelativeUrl,l.toAdd.push({resource:f,content:p,compress:!1,finish:y=>{this.image=y.url}})}))}};i([a({readOnly:!0})],j.prototype,"content",void 0),i([a({json:{name:"url",type:String}})],j.prototype,"image",void 0),i([q("image",["url"])],j.prototype,"readImage",null),i([te("image")],j.prototype,"writeImage",null),i([a({readOnly:!0,json:{name:"mediaType"}})],j.prototype,"type",void 0),j=i([P("esri.layers.support.ImageElement")],j);const ve=j;async function xe(e){if(typeof e=="string"){if(ge(e)){const{data:t}=await Z(e,{responseType:"blob"});return t}return ye(e)?Te(e):xe((await Z(e,{responseType:"image"})).data)}return new Promise(t=>ht(e).toBlob(t))}function ht(e){if(e instanceof HTMLCanvasElement)return e;const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,o=e instanceof HTMLImageElement?e.naturalHeight:e.height,n=document.createElement("canvas"),s=n.getContext("2d");return n.width=t,n.height=o,e instanceof HTMLImageElement?s.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&s.putImageData(e,0,0),n}function dt(e,t){const o=Ce(),n=`${Ve("media",o)}.${nt(e)}`;return t.resourceFromPath(n)}let F=class extends re{constructor(e){super(e),this.content=null,this.type="video"}load(){const e=this.video;if(typeof e=="string"){const t=document.createElement("video");t.src=e,t.crossOrigin="anonymous",t.autoplay=!0,t.muted=!0,t.loop=!0,this.addResolvingPromise(this._loadVideo(t).then(()=>{this._set("content",t)}))}else e instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(e).then(()=>{this._set("content",e)})):this.addResolvingPromise(Promise.reject(new z("video-element:invalid-video-type","Invalid video type",{video:e})));return Promise.resolve(this)}set video(e){this.loadStatus==="not-loaded"?this._set("video",e):W.getLogger(this).error("#video","video cannot be changed after the element is loaded.")}_loadVideo(e){return new Promise((t,o)=>{e.oncanplay=()=>{e.oncanplay=null,e.play().then(t,o)},e.crossOrigin!=="anonymous"&&(e.crossOrigin="anonymous",e.src=e.src)})}};i([a({readOnly:!0})],F.prototype,"content",void 0),i([a()],F.prototype,"video",null),F=i([P("esri.layers.support.VideoElement")],F);const Re=F,mt={key:"type",defaultKeyValue:"image",base:re,typeMap:{image:ve,video:Re}},ue=k.ofType(mt);let H=class extends fe.LoadableMixin(He(Ae(Ne.EventedAccessor))){constructor(t){super(t),this._index=new ot,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=o=>{for(const s of o.removed){const r=this._elementViewsMap.get(s);this._elementViewsMap.delete(s),this._index.delete(r),this.handles.remove(r),r.destroy(),this.notifyChange("fullExtent")}const{spatialReference:n}=this;for(const s of o.added){if(this._elementViewsMap.get(s))continue;const r=new et({spatialReference:n,element:s});this._elementViewsMap.set(s,r);const l=We(()=>r.coords,()=>this._updateIndexForElement(r,!1));this._updateIndexForElement(r,!0),this.handles.add(l,r)}this._elementsIndexes.clear(),this.elements.forEach((s,r)=>this._elementsIndexes.set(s,r)),this.emit("refresh")},this.elements=new ue}async load(t){if(Ge(t),!this.spatialReference){const o=this.elements.find(n=>n.georeference!=null&&n.georeference.coords!=null);this._set("spatialReference",o?o.georeference.coords.spatialReference:me.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.handles.add(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(t){this._set("elements",Be(t,this._get("elements"),ue))}get fullExtent(){if(this.loadStatus==="not-loaded")return null;const t=this._index.fullBounds;return t==null?null:new oe({xmin:t[0],ymin:t[1],xmax:t[2],ymax:t[3],spatialReference:this.spatialReference})}set spatialReference(t){this.loadStatus==="not-loaded"?this._set("spatialReference",t):W.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(t,o){await this.load(),await Fe(t.spatialReference,this.spatialReference,null,o);const n=ze(t.spatialReference,this.spatialReference)?t:Ue(t,this.spatialReference);if(!n)return[];const s=n.normalize(),r=[];for(const l of s)this._index.forEachInBounds(Je(l),({normalizedCoords:c,element:p})=>{c!=null&&De(l,c)&&r.push(p)});return r.sort((l,c)=>this._elementsIndexes.get(l)-this._elementsIndexes.get(c)),r}_updateIndexForElement(t,o){const n=t.normalizedBounds,s=this._index.has(t),r=n!=null;this._index.delete(t),r&&this._index.set(t,n),this.notifyChange("fullExtent"),o||(s!==r?this.emit("refresh"):this.emit("change",{element:t.element}))}};i([a()],H.prototype,"elements",null),i([a({readOnly:!0})],H.prototype,"fullExtent",null),i([a()],H.prototype,"spatialReference",null),H=i([P("esri.layers.support.LocalMediaElementSource")],H);const D=H;function he(e){return typeof e=="object"&&e!=null&&"type"in e}let m=class extends Qe(Ze(Ye(Ke(qe)))){constructor(e){super(e),this.effectiveSource=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this.source=new D}load(e){const t=this.source;if(!t)return this.addResolvingPromise(Promise.reject(new z("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer."))),Promise.resolve(this);const o=he(t)?new D({elements:new k([t])}):t;this._set("effectiveSource",o),this.spatialReference&&(o.spatialReference=this.spatialReference);const n=o.load(e).then(()=>{this.spatialReference=o.spatialReference});return this.addResolvingPromise(n),Promise.resolve(this)}destroy(){var e,t;(e=this.effectiveSource)==null||e.destroy(),(t=this.source)==null||t.destroy()}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){this.loadStatus==="not-loaded"?this._set("source",e):W.getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)?new D({elements:new k(e)}):e instanceof k?new D({elements:e}):e:null}readSource(e,t,o){const n=t.mediaType==="image"?new ve:t.mediaType==="video"?new Re:null;return n==null||n.read(t,o),n}writeSource(e,t,o,n){var s;e&&he(e)&&e.type==="image"?e.write(t,n):n!=null&&n.messages&&((s=n==null?void 0:n.messages)==null||s.push(new z("media-layer:unsupported-source","source must be an 'ImageElement'")))}};i([a({readOnly:!0})],m.prototype,"effectiveSource",void 0),i([a({type:String})],m.prototype,"copyright",void 0),i([a({readOnly:!0})],m.prototype,"fullExtent",null),i([a({type:["MediaLayer"]})],m.prototype,"operationalLayerType",void 0),i([a({type:["show","hide"]})],m.prototype,"listMode",void 0),i([a({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1}}})],m.prototype,"source",null),i([ke("source")],m.prototype,"castSource",null),i([q("source",["url"])],m.prototype,"readSource",null),i([te("source")],m.prototype,"writeSource",null),i([a()],m.prototype,"spatialReference",void 0),i([a({readOnly:!0})],m.prototype,"type",void 0),m=i([P("esri.layers.MediaLayer")],m);const Ht=m;export{Ht as default};
