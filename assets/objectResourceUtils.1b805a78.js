var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(t,r,i)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,s=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&n(e,r,t[r]);if(i)for(var r of i(t))a.call(t,r)&&n(e,r,t[r]);return e},l=(e,i)=>t(e,r(i));import{da as c,ag as d,ao as u,ex as m,je as f,jf as p,fk as h,q as v,cr as g,m as x,x as b,P as T,ia as y,jg as _,fH as w,jh as S,r as C,bb as M,ji as A,E as P,F,bO as O,fj as E,w as I,jj as R,dL as D,a6 as L,ah as z,jk as B,jl as N,ed as V,e7 as H,e6 as U,aj as G,ec as k,eg as $,ee as W,ai as q,eL as j,eb as X,h8 as K,el as Y,eo as Q,eh as Z,jm as J,jn as ee,jo as te,h7 as re,v as ie,jp as oe,em as ae,u as ne,bK as se,ab as le,eE as ce,jq as de,cI as ue,L as me,bI as fe,cH as pe,jr as he,js as ve,jt as ge,dt as xe,eG as be,en as Te,ju as ye}from"./vendor.d0a39f0f.js";import{a as _e}from"./quat.8d7fb927.js";import{e as we,a as Se,f as Ce,r as Me,c as Ae}from"./vec33.7050de41.js";import{c as Pe,x as Fe,u as Oe,i as Ee,L as Ie,O as Re,E as De}from"./BufferView.0e91c841.js";import{l as Le,u as ze,h as Be,i as Ne,n as Ve,r as He,c as Ue,f as Ge,a as ke,b as $e,o as We,d as qe,e as je,g as Xe,j as Ke,k as Ye,t as Qe,m as Ze,p as Je,q as et}from"./DefaultMaterial_COLOR_GAMMA.0688382b.js";import{r as tt}from"./Version.3475413a.js";import{t as rt,n as it}from"./requestImageUtils.f3a6a7ef.js";import{o as ot,n as at,u as nt,c as st}from"./Texture.6f578e52.js";import{a as lt,f as ct,h as dt,c as ut,r as mt,b as ft,t as pt,n as ht,g as vt,s as gt,l as xt,d as bt}from"./VertexArrayObject.3a9852d6.js";import{A as Tt}from"./InterleavedLayout.4d734fc2.js";import{t as yt}from"./vec3f32.43d4c631.js";class _t{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function wt(e,t){if(!e){t=t||"assert";const e=new Error(t);throw e.stack&&console.log(e.stack),new _t(t)}}function St(e,t=0){let r=0;for(let i=0;i<4;i++)r+=e[t+i]*Ct[i];return r}const Ct=[1/256,1/65536,1/16777216,1/4294967296];St(new Uint8ClampedArray([255,255,255,255]));class Mt{constructor(e,t,r,i){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=r,this.position=i,this.center=d(),wt(e.length>=1),wt(r.length%this._numIndexPerPrimitive==0),wt(r.length>=e.length*this._numIndexPerPrimitive),wt(3===i.size||4===i.size);const{data:o,size:a}=i,n=e.length;let s=a*r[this._numIndexPerPrimitive*e[0]];At.clear(),At.push(s),this.bbMin=u(o[s],o[s+1],o[s+2]),this.bbMax=m(this.bbMin);for(let c=0;c<n;++c){const t=this._numIndexPerPrimitive*e[c];for(let e=0;e<this._numIndexPerPrimitive;++e){s=a*r[t+e],At.push(s);let i=o[s];this.bbMin[0]=Math.min(i,this.bbMin[0]),this.bbMax[0]=Math.max(i,this.bbMax[0]),i=o[s+1],this.bbMin[1]=Math.min(i,this.bbMin[1]),this.bbMax[1]=Math.max(i,this.bbMax[1]),i=o[s+2],this.bbMin[2]=Math.min(i,this.bbMin[2]),this.bbMax[2]=Math.max(i,this.bbMax[2])}}f(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let l=this.radius*this.radius;for(let c=0;c<At.length;++c){s=At.getItemAt(c);const e=o[s]-this.center[0],t=o[s+1]-this.center[1],r=o[s+2]-this.center[2],i=e*e+t*t+r*r;if(i<=l)continue;const a=Math.sqrt(i),n=.5*(a-this.radius);this.radius=this.radius+n,l=this.radius*this.radius;const d=n/a;this.center[0]+=e*d,this.center[1]+=t*d,this.center[2]+=r*d}At.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(p(this.bbMin,this.bbMax)>1){const e=f(d(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let l=0;l<8;++l)i[l]=0;const{data:o,size:a}=this.position;for(let l=0;l<t;++l){let t=0;const n=this._numIndexPerPrimitive*this.primitiveIndices[l];let s=a*this.indices[n],c=o[s],d=o[s+1],u=o[s+2];for(let e=1;e<this._numIndexPerPrimitive;++e){s=a*this.indices[n+e];const t=o[s],r=o[s+1],i=o[s+2];t<c&&(c=t),r<d&&(d=r),i<u&&(u=i)}c<e[0]&&(t|=1),d<e[1]&&(t|=2),u<e[2]&&(t|=4),r[l]=t,++i[t]}let n=0;for(let l=0;l<8;++l)i[l]>0&&++n;if(n<2)return;const s=new Array(8);for(let l=0;l<8;++l)s[l]=i[l]>0?new Uint32Array(i[l]):void 0;for(let l=0;l<8;++l)i[l]=0;for(let l=0;l<t;++l){const e=r[l];s[e][i[e]++]=this.primitiveIndices[l]}this._children=new Array(8);for(let l=0;l<8;++l)void 0!==s[l]&&(this._children[l]=new Mt(s[l],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){At.prune()}}const At=new c({deallocator:null});class Pt{constructor(){this.id=h()}unload(){}}class Ft extends Pt{constructor(e,t=[],r=0,i=-1){super(),this._primitiveType=r,this.edgeIndicesLength=i,this.type=2,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[o,a]of e)a&&this._vertexAttributes.set(o,s({},a));if(null==t||0===t.length){const e=function(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}(this._vertexAttributes),t=Le(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const r of this._vertexAttributes.keys())this._indices.set(r,t)}else for(const[o,a]of t)a&&(this._indices.set(o,Ot(a)),"position"===o&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(o).length:this.edgeIndicesLength))}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t.data=Array.from(t.data),t.exclusive=!0),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return v(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return 0===this.primitiveType?this.computeAttachmentOriginTriangles(e):this.computeAttachmentOriginPoints(e)}computeAttachmentOriginTriangles(e){const t=this.indices.get("position"),r=this.vertexAttributes.get("position");return ze(r,t,e)}computeAttachmentOriginPoints(e){const t=this.indices.get("position"),r=this.vertexAttributes.get("position");return Be(r,t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get("position");if(0===e.length)return null;const t=0===this.primitiveType?3:1;wt(e.length%t==0,"Indexing error: "+e.length+" not divisible by "+t);const r=Le(e.length/t),i=this.vertexAttributes.get("position");return new Mt(r,t,e,i)}}function Ot(e){if(e.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return e;for(const t of e)if(t>=65536)return e;return new Uint16Array(e)}let Et,It=null,Rt=null;async function Dt(){return v(Rt)&&(Rt=function(){if(v(Et)){const e=e=>g(`esri/libs/basisu/${e}`);Et=import("./basis_transcoder.2da50954.js").then((function(e){return e.b})).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return Et}(),It=await Rt),Rt}function Lt(e,t,r,i,o){const a=lt(t?37496:37492),n=o&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*a*n)}function zt(e){return e.getNumImages()>=1&&!e.isUASTC()}function Bt(e){return e.getFaces()>=1&&e.isETC1S()}function Nt(e,t,r,i,o,a,n,c){const{compressedTextureETC:d,compressedTextureS3TC:u}=e.capabilities,[m,f]=d?i?[1,37496]:[0,37492]:u?i?[3,33779]:[2,33776]:[13,6408],p=t.hasMipmap?r:Math.min(1,r),h=[];for(let s=0;s<p;s++)h.push(new Uint8Array(n(s,m))),c(s,m,h[s]);const v=h.length>1,g=v?9987:9729,x=l(s({},t),{samplingMode:g,hasMipmap:v,internalFormat:f,width:o,height:a});return new ot(e,x,{type:"compressed",levels:h})}const Vt=x.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function Ht(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const Ut=Ht("DXT1"),Gt=Ht("DXT3"),kt=Ht("DXT5");function $t(e,t,r){const{textureData:i,internalFormat:o,width:a,height:n}=function(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return Vt.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return Vt.error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let o,a;switch(i){case Ut:o=8,a=33776;break;case Gt:o=16,a=33778;break;case kt:o=16,a=33779;break;default:return Vt.error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(i)),null}let n=1,s=r[4],l=r[3];0==(3&s)&&0==(3&l)||(Vt.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,l=l+3&-4);const c=s,d=l;let u,m;131072&r[2]&&!1!==t&&(n=Math.max(1,r[7])),1===n||b(s)&&b(l)||(Vt.warn("Ignoring mipmaps of non power of two sized compressed texture."),n=1);let f=r[1]+4;const p=[];for(let h=0;h<n;++h)m=(s+3>>2)*(l+3>>2)*o,u=new Uint8Array(e,f,m),p.push(u),f+=m,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:p},internalFormat:a,width:c,height:d}}(r,t.hasMipmap);return t.samplingMode=i.levels.length>1?9987:9729,t.hasMipmap=i.levels.length>1,t.internalFormat=o,t.width=a,t.height=n,new ot(e,t,i)}const Wt=new Map([["position",0],["normal",1],["uv0",2],["color",3],["size",4],["tangent",4],["auxpos1",5],["symbolColor",5],["auxpos2",6],["featureAttribute",6],["instanceFeatureAttribute",6],["instanceColor",7],["model",8],["modelNormal",12],["modelOriginHi",11],["modelOriginLo",15]]),qt=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],jt=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];class Xt extends Pt{constructor(e,t){super(),this.data=e,this.type=4,this.glTexture=null,this.powerOfTwoStretchInfo=null,this.loadingPromise=null,this.loadingController=null,this.events=new T,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=Xt.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const e=this.data;v(e)||(e instanceof HTMLVideoElement?this.startPreloadVideoElement(e):e instanceof HTMLImageElement&&this.startPreloadImageElement(e))}startPreloadVideoElement(e){y(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}startPreloadImageElement(e){_(e.src)||y(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static estimateTexMemRequired(e,t){if(v(e))return 0;if(w(e)||S(e))return t.encoding===Xt.KTX2_ENCODING?function(e,t){if(v(It))return e.byteLength;const r=new It.KTX2File(new Uint8Array(e)),i=Bt(r)?Lt(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}(e,t.mipmap):t.encoding===Xt.BASIS_ENCODING?function(e,t){if(v(It))return e.byteLength;const r=new It.BasisFile(new Uint8Array(e)),i=zt(r)?Lt(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}(e,t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Xt.getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(e){var t;return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(t=this.params.maxAnisotropy)?t:this.params.mipmap?e.parameters.maxMaxAnisotropy:1}}load(e,t){if(C(this.glTexture))return this.glTexture;if(C(this.loadingPromise))return this.loadingPromise;const r=this.data;return v(r)?(this.glTexture=new ot(e,this.createDescriptor(e),null),this.glTexture):"string"==typeof r?this.loadFromURL(e,t,r):r instanceof Image?this.loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this.loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this.loadFromImage(e,r,t):(w(r)||S(r))&&this.params.encoding===Xt.DDS_ENCODING?this.loadFromDDSData(e,r):(w(r)||S(r))&&this.params.encoding===Xt.KTX2_ENCODING?this.loadFromKTX2(e,r):(w(r)||S(r))&&this.params.encoding===Xt.BASIS_ENCODING?this.loadFromBasis(e,r):S(r)?this.loadFromPixelData(e,r):w(r)?this.loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this.data instanceof HTMLVideoElement)||v(this.glTexture))return r;if(this.data.readyState<2||r===this.data.currentTime)return r;if(C(this.powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:o}=this.powerOfTwoStretchInfo;o.setData(this.data),this.drawStretchedTexture(e,t,r,i,o,this.glTexture)}else{const{width:e,height:t}=this.data,{width:r,height:i}=this.glTexture.descriptor;e!==r||t!==i?this.glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,i),this.data):this.glTexture.setData(this.data)}return this.glTexture.descriptor.hasMipmap&&this.glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(e,t){return this.glTexture=$t(e,this.createDescriptor(e),t),this.glTexture}loadFromKTX2(e,t){return this.loadAsync((()=>async function(e,t,r){v(It)&&(It=await Dt());const i=new It.KTX2File(new Uint8Array(r));if(!Bt(i))return null;i.startTranscoding();const o=Nt(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),o}(e,this.createDescriptor(e),t).then((e=>(this.glTexture=e,e)))))}loadFromBasis(e,t){return this.loadAsync((()=>async function(e,t,r){v(It)&&(It=await Dt());const i=new It.BasisFile(new Uint8Array(r));if(!zt(i))return null;i.startTranscoding();const o=Nt(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),o}(e,this.createDescriptor(e),t).then((e=>(this.glTexture=e,e)))))}loadFromPixelData(e,t){wt(this.params.width>0&&this.params.height>0);const r=this.createDescriptor(e);return r.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,r.width=this.params.width,r.height=this.params.height,this.glTexture=new ot(e,r,t),this.glTexture}loadAsync(e){const t=M();this.loadingController=t;const r=e(t.signal);this.loadingPromise=r;const i=()=>{this.loadingController===t&&(this.loadingController=null),this.loadingPromise===r&&(this.loadingPromise=null)};return r.then(i,i),r}loadFromURL(e,t,r){return this.loadAsync((async i=>{const o=await rt(r,{signal:i});return this.loadFromImage(e,o,t)}))}loadFromImageElement(e,t,r){return r.complete?this.loadFromImage(e,r,t):this.loadAsync((async i=>{const o=await A(r,r.src,!1,i);return this.loadFromImage(e,o,t)}))}loadFromVideoElement(e,t,r){return r.readyState>=2?this.loadFromImage(e,r,t):this.loadFromVideoElementAsync(e,t,r)}loadFromVideoElementAsync(e,t,r){return this.loadAsync((i=>new Promise(((o,a)=>{const n=()=>{r.removeEventListener("loadeddata",s),r.removeEventListener("error",l),C(c)&&c.remove()},s=()=>{r.readyState>=2&&(n(),o(this.loadFromImage(e,r,t)))},l=e=>{n(),a(e||new I("Failed to load video"))};r.addEventListener("loadeddata",s),r.addEventListener("error",l);const c=P(i,(()=>l(F())))}))))}loadFromImage(e,t,r){const i=Xt.getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const o=this.createDescriptor(e);return o.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(e,o)||b(i.width)&&b(i.height)?(o.width=i.width,o.height=i.height,this.glTexture=new ot(e,o,t),this.glTexture):(this.glTexture=this.makePowerOfTwoTexture(e,t,i,o,r),this.glTexture)}requiresPowerOfTwo(e,t){const r=33071,i="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return!at(e.gl)&&(t.hasMipmap||!i)}makePowerOfTwoTexture(e,t,r,i,o){const{width:a,height:n}=r,s=O(a),l=O(n);let c;switch(i.width=s,i.height=l,this.params.powerOfTwoResizeMode){case 2:i.textureCoordinateScaleFactor=[a/s,n/l],c=new ot(e,i),c.updateData(0,0,0,a,n,t);break;case 1:case null:case void 0:c=this.stretchToPowerOfTwo(e,t,i,o);break;default:E(this.params.powerOfTwoResizeMode)}return i.hasMipmap&&c.generateMipmap(),c}stretchToPowerOfTwo(e,t,r,i){const o=new ot(e,r),a=new ut(e,{colorTarget:0,depthStencilTarget:0},o),n=new ot(e,{target:3553,pixelFormat:r.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=function(e,t=qt,r=Wt,i=-1,o=1){let a=null;return a=t===jt?new Float32Array([i,i,0,0,o,i,1,0,i,o,0,1,o,o,1,1]):new Float32Array([i,i,o,i,i,o,o,o]),new ct(e,r,{geometry:t},{geometry:dt.createVertex(e,35044,a)})}(e);return this.drawStretchedTexture(e,i,a,s,n,o),this.requiresFrameUpdates?this.powerOfTwoStretchInfo={vao:s,sourceTexture:n,framebuffer:a}:(s.dispose(!0),n.dispose(),a.detachColorTexture(),e.bindFramebuffer(null),a.dispose()),o}drawStretchedTexture(e,t,r,i,o,a){e.bindFramebuffer(r);const n=e.getViewport();e.setViewport(0,0,a.descriptor.width,a.descriptor.height);const s=t.program;e.useProgram(s),s.setUniform4f("color",1,1,1,1),s.bindTexture(o,"tex"),e.bindVAO(i),e.setPipelineState(t.pipeline),e.drawArrays(5,0,mt(i,"geometry")),e.bindFramebuffer(null),e.setViewport(n.x,n.y,n.width,n.height)}unload(){if(C(this.powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this.powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this.glTexture=null,this.powerOfTwoStretchInfo=null}if(C(this.glTexture)&&(this.glTexture.dispose(),this.glTexture=null),C(this.loadingController)){const e=this.loadingController;this.loadingController=null,this.loadingPromise=null,e.abort()}this.events.emit("unloaded")}}function Kt(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}var Yt;Xt.DDS_ENCODING="image/vnd-ms.dds",Xt.KTX2_ENCODING="image/ktx2",Xt.BASIS_ENCODING="image/x.basis",(Yt=Kt||(Kt={})).int=function(e){return Math.round(e).toString()},Yt.float=function(e){return e.toPrecision(8)};function Qt(e,t){const r=e.fragment;switch(t.alphaDiscardMode){case 0:r.code.add(Kt`
        #define discardOrAdjustAlpha(color) { if (color.a < ${Kt.float(.001)}) { discard; } }
      `);break;case 1:r.code.add(Kt`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case 2:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(Kt`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case 3:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(Kt`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}const Zt=e=>class extends e{constructor(){super(...arguments),this._isDisposed=!1}dispose(){for(const t of null!=(e=this._managedDisposables)?e:[]){var e;const r=this[t];this[t]=null,r&&"function"==typeof r.dispose&&r.dispose()}this._isDisposed=!0}get isDisposed(){return this._isDisposed}};class Jt extends(Zt(class{})){}class er extends Jt{constructor(e){super(),this._material=e.material,this._techniqueRep=e.techniqueRep,this._output=e.output}get technique(){return this._technique}getPipelineState(e,t){return this.technique.pipeline}ensureResources(e){return 2}ensureParameters(e){}}class tr extends er{constructor(e){super(e),this._textureIDs=new Set,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._initTransparent=!!e.initTextureTransparent,this._texture=this._acquire(this._textureId),this._textureNormal=this._acquire(e.normalTextureId),this._textureEmissive=this._acquire(e.emissiveTextureId),this._textureOcclusion=this._acquire(e.occlusionTextureId),this._textureMetallicRoughness=this._acquire(e.metallicRoughnessTextureId)}dispose(){this._textureIDs.forEach((e=>this._textureRepository.release(e))),this._textureIDs.clear()}updateTexture(e){e!==this._textureId&&(this._release(this._textureId),this._textureId=e,this._texture=this._acquire(this._textureId))}bindTextures(e){C(this._texture)&&e.bindTexture(this._texture.glTexture,"tex"),C(this._textureNormal)&&e.bindTexture(this._textureNormal.glTexture,"normalTexture"),C(this._textureEmissive)&&e.bindTexture(this._textureEmissive.glTexture,"texEmission"),C(this._textureOcclusion)&&e.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),C(this._textureMetallicRoughness)&&e.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(e){const t=C(this._texture)&&this._texture.glTexture;t&&t.descriptor.textureCoordinateScaleFactor?e.setUniform2fv("textureCoordinateScaleFactor",t.descriptor.textureCoordinateScaleFactor):e.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(e){if(!v(e))return this._textureIDs.add(e),this._textureRepository.acquire(e,this._initTransparent)}_release(e){v(e)||(this._textureIDs.delete(e),this._textureRepository.release(e))}}function rr(e,t,r){const i=r.parameters,o=r.paddingPixelsOverride;return or.scale=Math.min(i.divisor/(t-i.offset),1),or.factor=function(e){return Math.abs(e*e*e)}(e),or.minPixelSize=i.minPixelSize,or.paddingPixels=o,or}function ir(e,t,r,i){return function(e,t){return Math.max(R(e*t.scale,e,t.factor),function(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}(e,t))}(e,rr(t,r,i))}const or={scale:0,factor:0,minPixelSize:0,paddingPixels:0};function ar(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}const nr=new Float64Array(1),sr=new Float32Array(2);const lr=D();function cr(e,t,r,i,o,a,n){if(!function(e){return!!C(e)&&!e.visible}(t))if(e.boundingInfo){wt(0===e.primitiveType);const t=r.tolerance;ur(e.boundingInfo,i,o,t,a,n)}else{const t=e.indices.get("position"),r=e.vertexAttributes.get("position");fr(i,o,0,t.length/3,t,r,void 0,a,n)}}const dr=d();function ur(e,t,r,i,o,a){if(v(e))return;const n=function(e,t,r){return z(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,r,dr);if(B(lr,e.getBBMin()),N(lr,e.getBBMax()),C(o)&&o.applyToAabb(lr),function(e,t,r,i){return function(e,t,r,i,o){const a=(e[0]-i-t[0])*r[0],n=(e[3]+i-t[0])*r[0];let s=Math.min(a,n),l=Math.max(a,n);const c=(e[1]-i-t[1])*r[1],d=(e[4]+i-t[1])*r[1];if(l=Math.min(l,Math.max(c,d)),l<0)return!1;if(s=Math.max(s,Math.min(c,d)),s>l)return!1;const u=(e[2]-i-t[2])*r[2],m=(e[5]+i-t[2])*r[2];return l=Math.min(l,Math.max(u,m)),!(l<0)&&(s=Math.max(s,Math.min(u,m)),!(s>l)&&s<o)}(e,t,r,i,1/0)}(lr,t,n,i)){const{primitiveIndices:n,indices:s,position:l}=e,c=n?n.length:s.length/3;if(c>Tr){const n=e.getChildren();if(void 0!==n){for(let e=0;e<8;++e)void 0!==n[e]&&ur(n[e],t,r,i,o,a);return}}fr(t,r,0,c,s,l,n,o,a)}}const mr=d();function fr(e,t,r,i,o,a,n,s,l){if(n)return function(e,t,r,i,o,a,n,s,l){const c=a.data,d=a.stride||a.size,u=e[0],m=e[1],f=e[2],p=t[0]-u,h=t[1]-m,v=t[2]-f;for(let g=r;g<i;++g){const e=n[g];let t=3*e,r=d*o[t++],i=c[r++],a=c[r++],x=c[r];r=d*o[t++];let b=c[r++],T=c[r++],y=c[r];r=d*o[t];let _=c[r++],w=c[r++],S=c[r];C(s)&&([i,a,x]=s.applyToVertex(i,a,x,g),[b,T,y]=s.applyToVertex(b,T,y,g),[_,w,S]=s.applyToVertex(_,w,S,g));const M=b-i,A=T-a,P=y-x,F=_-i,O=w-a,E=S-x,I=h*E-O*v,R=v*F-E*p,D=p*O-F*h,L=M*I+A*R+P*D;if(Math.abs(L)<=Number.EPSILON)continue;const z=u-i,B=m-a,N=f-x,V=z*I+B*R+N*D;if(L>0){if(V<0||V>L)continue}else if(V>0||V<L)continue;const H=B*P-A*N,U=N*M-P*z,G=z*A-M*B,k=p*H+h*U+v*G;if(L>0){if(k<0||V+k>L)continue}else if(k>0||V+k<L)continue;const $=(F*H+O*U+E*G)/L;$>=0&&l($,vr(M,A,P,F,O,E,mr),e)}}(e,t,r,i,o,a,n,s,l);const c=a.data,d=a.stride||a.size,u=e[0],m=e[1],f=e[2],p=t[0]-u,h=t[1]-m,v=t[2]-f;for(let g=r,x=3*r;g<i;++g){let e=d*o[x++],t=c[e++],r=c[e++],i=c[e];e=d*o[x++];let a=c[e++],n=c[e++],b=c[e];e=d*o[x++];let T=c[e++],y=c[e++],_=c[e];C(s)&&([t,r,i]=s.applyToVertex(t,r,i,g),[a,n,b]=s.applyToVertex(a,n,b,g),[T,y,_]=s.applyToVertex(T,y,_,g));const w=a-t,S=n-r,M=b-i,A=T-t,P=y-r,F=_-i,O=h*F-P*v,E=v*A-F*p,I=p*P-A*h,R=w*O+S*E+M*I;if(Math.abs(R)<=Number.EPSILON)continue;const D=u-t,L=m-r,z=f-i,B=D*O+L*E+z*I;if(R>0){if(B<0||B>R)continue}else if(B>0||B<R)continue;const N=L*M-S*z,V=z*w-M*D,H=D*S-w*L,U=p*N+h*V+v*H;if(R>0){if(U<0||B+U>R)continue}else if(U>0||B+U<R)continue;const G=(A*N+P*V+F*H)/R;G>=0&&l(G,vr(w,S,M,A,P,F,mr),g)}}const pr=d(),hr=d();function vr(e,t,r,i,o,a,n){return z(pr,e,t,r),z(hr,i,o,a),V(n,pr,hr),H(n,n),n}function gr(e,t){const r=t?gr(t):{};for(const i in e){let t=e[i];t&&t.forEach&&(t=xr(t)),null==t&&i in r||(r[i]=t)}return r}function xr(e){const t=[];return e.forEach((e=>t.push(e))),t}const br={multiply:1,ignore:2,replace:3,tint:4},Tr=1e3;class yr extends Pt{constructor(e,t){super(),this.type=3,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=Wt,this._params=gr(e,t),this.validateParameterValues(this._params)}dispose(){}get params(){return this._params}update(e){return!1}setParameterValues(e){(function(e,t){let r=!1;for(const i in t){const o=t[i];void 0!==o&&(r=!0,Array.isArray(o)?e[i]=o.slice():e[i]=o)}return r})(this._params,e)&&(this.validateParameterValues(this._params),this.parametersChanged())}validateParameterValues(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}isVisibleInPass(e){return!0}get renderOccluded(){return this.params.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){C(this.materialRepository)&&this.materialRepository.materialChanged(this)}}const _r=ft(770,1,771,771),wr=pt(1,1),Sr=pt(0,771);const Cr={factor:-1,units:-2};function Mr(e){return e?Cr:null}function Ar(e){return 3===e||2===e?513:515}new Ne((function(){return{origin:null,direction:null}}));const Pr=x.getLogger("esri.geometry.support.sphere");function Fr(){return Ve()}function Or(e,t=Fr()){return j(t,e)}function Er(e){return Array.isArray(e)?e[3]:e}function Ir(e){return Array.isArray(e)?e:Hr}function Rr(e,t,r){if(v(t))return!1;const i=$(Ue.get(),t.origin,Ir(e)),o=k(t.direction,t.direction),a=2*k(t.direction,i),n=a*a-4*o*(k(i,i)-e[3]*e[3]);if(n<0)return!1;const s=Math.sqrt(n);let l=(-a-s)/(2*o);const c=(-a+s)/(2*o);return(l<0||c<l&&c>0)&&(l=c),!(l<0||(r&&U(r,t.origin,G(Ue.get(),t.direction,l)),0))}function Dr(e,t,r){const i=Ue.get(),o=Ge.get();V(i,t.origin,t.direction);const a=Er(e);V(r,i,t.origin),G(r,r,1/q(r)*a);const n=zr(e,t.origin),s=function(e,t){const r=k(e,t)/(q(e)*q(t));return-W(r)}(t.origin,r);return K(o),Y(o,o,s+n,i),Q(r,r,o),r}function Lr(e,t,r){const i=$(Ue.get(),t,Ir(e)),o=G(Ue.get(),i,e[3]/q(i));return U(r,o,Ir(e))}function zr(e,t){const r=$(Ue.get(),t,Ir(e)),i=q(r),o=Er(e),a=o+Math.abs(o-i);return W(o/a)}const Br=d();function Nr(e,t,r,i){const o=$(Br,t,Ir(e));switch(r){case 0:{const e=ee(o,Br)[2];return z(i,-Math.sin(e),Math.cos(e),0)}case 1:{const e=ee(o,Br),t=e[1],r=e[2],a=Math.sin(t);return z(i,-a*Math.cos(r),-a*Math.sin(r),Math.cos(t))}case 2:return H(i,o);default:return}}function Vr(e,t){const r=$(Ur,t,Ir(e));return q(r)-e[3]}const Hr=d(),Ur=d();Object.freeze({__proto__:null,create:Fr,copy:Or,fromCenterAndRadius:function(e,t){return He(e[0],e[1],e[2],t)},wrap:function(e){return e},clear:function(e){e[0]=e[1]=e[2]=e[3]=0},fromRadius:function(e){return e},getRadius:Er,getCenter:Ir,fromValues:function(e,t,r,i){return He(e,t,r,i)},elevate:function(e,t,r){return e!==r&&X(r,e),r[3]=e[3]+t,r},setExtent:function(e,t,r){return Pr.error("sphere.setExtent is not yet supported"),e===r?r:Or(e,r)},intersectRay:Rr,intersectsRay:function(e,t){return Rr(e,t,null)},intersectRayClosestSilhouette:function(e,t,r){if(Rr(e,t,r))return r;const i=Dr(e,t,Ue.get());return U(r,t.origin,G(Ue.get(),t.direction,Z(t.origin,i)/q(t.direction))),r},closestPointOnSilhouette:Dr,closestPoint:function(e,t,r){return Rr(e,t,r)?r:(function(e,t,r){const i=k(e.direction,$(r,t,e.origin));U(r,e.origin,G(r,e.direction,i))}(t,Ir(e),r),Lr(e,r,r))},projectPoint:Lr,distanceToSilhouette:function(e,t){const r=$(Ue.get(),t,Ir(e)),i=J(r),o=e[3]*e[3];return Math.sqrt(Math.abs(i-o))},angleToSilhouette:zr,axisAt:Nr,altitudeAt:Vr,setAltitudeAt:function(e,t,r,i){const o=Vr(e,t),a=Nr(e,t,2,Ur),n=G(Ur,a,r-o);return U(i,t,n)}});const Gr=new class{constructor(e=0){this.offset=e,this.sphere=Fr(),this.tmpVertex=d()}applyToVertex(e,t,r){const i=this.objectTransform.transform;let o=i[0]*e+i[4]*t+i[8]*r+i[12],a=i[1]*e+i[5]*t+i[9]*r+i[13],n=i[2]*e+i[6]*t+i[10]*r+i[14];const s=this.offset/Math.sqrt(o*o+a*a+n*n);o+=o*s,a+=a*s,n+=n*s;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*o+l[4]*a+l[8]*n+l[12],this.tmpVertex[1]=l[1]*o+l[5]*a+l[9]*n+l[13],this.tmpVertex[2]=l[2]*o+l[6]*a+l[10]*n+l[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};function kr(e,t,r,i){const o=r.typedBuffer,a=r.typedBufferStride,n=e.length;i*=a;for(let s=0;s<n;++s){const r=2*e[s];o[i]=t[r],o[i+1]=t[r+1],i+=a}}function $r(e,t,r,i,o){const a=r.typedBuffer,n=r.typedBufferStride,s=e.length;if(i*=n,null==o||1===o)for(let l=0;l<s;++l){const r=3*e[l];a[i]=t[r],a[i+1]=t[r+1],a[i+2]=t[r+2],i+=n}else for(let l=0;l<s;++l){const r=3*e[l];for(let e=0;e<o;++e)a[i]=t[r],a[i+1]=t[r+1],a[i+2]=t[r+2],i+=n}}function Wr(e,t,r,i,o,a=1){if(!r)return void $r(e,t,i,o,a);const n=i.typedBuffer,s=i.typedBufferStride,l=e.length,c=r[0],d=r[1],u=r[2],m=r[4],f=r[5],p=r[6],h=r[8],v=r[9],g=r[10],x=r[12],b=r[13],T=r[14];if(o*=s,1===a)for(let y=0;y<l;++y){const r=3*e[y],i=t[r],a=t[r+1],l=t[r+2];n[o]=c*i+m*a+h*l+x,n[o+1]=d*i+f*a+v*l+b,n[o+2]=u*i+p*a+g*l+T,o+=s}else for(let y=0;y<l;++y){const r=3*e[y],i=t[r],l=t[r+1],_=t[r+2],w=c*i+m*l+h*_+x,S=d*i+f*l+v*_+b,C=u*i+p*l+g*_+T;for(let e=0;e<a;++e)n[o]=w,n[o+1]=S,n[o+2]=C,o+=s}}function qr(e,t,r,i,o,a=1){if(!r)return void $r(e,t,i,o,a);const n=r,s=i.typedBuffer,l=i.typedBufferStride,c=e.length,d=n[0],u=n[1],m=n[2],f=n[4],p=n[5],h=n[6],v=n[8],g=n[9],x=n[10],b=!te(n),T=1e-6,y=1-T;if(o*=l,1===a)for(let _=0;_<c;++_){const r=3*e[_],i=t[r],a=t[r+1],n=t[r+2];let c=d*i+f*a+v*n,w=u*i+p*a+g*n,S=m*i+h*a+x*n;if(b){const e=c*c+w*w+S*S;if(e<y&&e>T){const t=1/Math.sqrt(e);c*=t,w*=t,S*=t}}s[o+0]=c,s[o+1]=w,s[o+2]=S,o+=l}else for(let _=0;_<c;++_){const r=3*e[_],i=t[r],n=t[r+1],c=t[r+2];let w=d*i+f*n+v*c,S=u*i+p*n+g*c,C=m*i+h*n+x*c;if(b){const e=w*w+S*S+C*C;if(e<y&&e>T){const t=1/Math.sqrt(e);w*=t,S*=t,C*=t}}for(let e=0;e<a;++e)s[o+0]=w,s[o+1]=S,s[o+2]=C,o+=l}}function jr(e,t,r,i,o,a=1){if(!r)return void function(e,t,r,i,o=1){const a=r.typedBuffer,n=r.typedBufferStride,s=e.length;if(i*=n,1===o)for(let l=0;l<s;++l){const r=4*e[l];a[i]=t[r],a[i+1]=t[r+1],a[i+2]=t[r+2],a[i+3]=t[r+3],i+=n}else for(let l=0;l<s;++l){const r=4*e[l];for(let e=0;e<o;++e)a[i]=t[r],a[i+1]=t[r+1],a[i+2]=t[r+2],a[i+3]=t[r+3],i+=n}}(e,t,i,o,a);const n=r,s=i.typedBuffer,l=i.typedBufferStride,c=e.length,d=n[0],u=n[1],m=n[2],f=n[4],p=n[5],h=n[6],v=n[8],g=n[9],x=n[10],b=!te(n),T=1e-6,y=1-T;if(o*=l,1===a)for(let _=0;_<c;++_){const r=4*e[_],i=t[r],a=t[r+1],n=t[r+2],c=t[r+3];let w=d*i+f*a+v*n,S=u*i+p*a+g*n,C=m*i+h*a+x*n;if(b){const e=w*w+S*S+C*C;if(e<y&&e>T){const t=1/Math.sqrt(e);w*=t,S*=t,C*=t}}s[o+0]=w,s[o+1]=S,s[o+2]=C,s[o+3]=c,o+=l}else for(let _=0;_<c;++_){const r=4*e[_],i=t[r],n=t[r+1],c=t[r+2],w=t[r+3];let S=d*i+f*n+v*c,C=u*i+p*n+g*c,M=m*i+h*n+x*c;if(b){const e=S*S+C*C+M*M;if(e<y&&e>T){const t=1/Math.sqrt(e);S*=t,C*=t,M*=t}}for(let e=0;e<a;++e)s[o+0]=S,s[o+1]=C,s[o+2]=M,s[o+3]=w,o+=l}}function Xr(e,t,r,i,o,a=1){const n=i.typedBuffer,s=i.typedBufferStride,l=e.length;if(o*=s,1===a){if(4===r)for(let c=0;c<l;++c){const r=4*e[c];n[o]=t[r],n[o+1]=t[r+1],n[o+2]=t[r+2],n[o+3]=t[r+3],o+=s}else if(3===r)for(let c=0;c<l;++c){const r=3*e[c];n[o]=t[r],n[o+1]=t[r+1],n[o+2]=t[r+2],n[o+3]=255,o+=s}}else if(4===r)for(let c=0;c<l;++c){const r=4*e[c];for(let e=0;e<a;++e)n[o]=t[r],n[o+1]=t[r+1],n[o+2]=t[r+2],n[o+3]=t[r+3],o+=s}else if(3===r)for(let c=0;c<l;++c){const r=3*e[c];for(let e=0;e<a;++e)n[o]=t[r],n[o+1]=t[r+1],n[o+2]=t[r+2],n[o+3]=255,o+=s}}function Kr(e,t){if(t.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),t.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const r=Kt`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=Kt`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
if (sliceByFactors(factors)) {
return color;
}
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,o=t.sliceHighlightDisabled?Kt`#define highlightSlice(_color_, _pos_) (_color_)`:Kt`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r),e.fragment.code.add(o)}else{const r=Kt`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r)}}const Yr=d();var Qr,Zr,Jr={exports:{}};Qr=Jr,void 0!==(Zr=function(){var e=function(e){var t;window.console&&window.console.error?window.console.error(e):(t=e,window.console&&window.console.log&&window.console.log(t))},t={enable:{1:{0:!0}},disable:{1:{0:!0}},getParameter:{1:{0:!0}},drawArrays:{3:{0:!0}},drawElements:{4:{0:!0,2:!0}},createShader:{1:{0:!0}},getShaderParameter:{2:{1:!0}},getProgramParameter:{2:{1:!0}},getShaderPrecisionFormat:{2:{0:!0,1:!0}},getVertexAttrib:{2:{1:!0}},vertexAttribPointer:{6:{2:!0}},bindTexture:{2:{0:!0}},activeTexture:{1:{0:!0}},getTexParameter:{2:{0:!0,1:!0}},texParameterf:{3:{0:!0,1:!0}},texParameteri:{3:{0:!0,1:!0,2:!0}},texImage2D:{9:{0:!0,2:!0,6:!0,7:!0},6:{0:!0,2:!0,3:!0,4:!0}},texSubImage2D:{9:{0:!0,6:!0,7:!0},7:{0:!0,4:!0,5:!0}},copyTexImage2D:{8:{0:!0,2:!0}},copyTexSubImage2D:{8:{0:!0}},generateMipmap:{1:{0:!0}},compressedTexImage2D:{7:{0:!0,2:!0}},compressedTexSubImage2D:{8:{0:!0,6:!0}},bindBuffer:{2:{0:!0}},bufferData:{3:{0:!0,2:!0}},bufferSubData:{3:{0:!0}},getBufferParameter:{2:{0:!0,1:!0}},pixelStorei:{2:{0:!0,1:!0}},readPixels:{7:{4:!0,5:!0}},bindRenderbuffer:{2:{0:!0}},bindFramebuffer:{2:{0:!0}},checkFramebufferStatus:{1:{0:!0}},framebufferRenderbuffer:{4:{0:!0,1:!0,2:!0}},framebufferTexture2D:{5:{0:!0,1:!0,2:!0}},getFramebufferAttachmentParameter:{3:{0:!0,1:!0,2:!0}},getRenderbufferParameter:{2:{0:!0,1:!0}},renderbufferStorage:{4:{0:!0,1:!0}},clear:{1:{0:{enumBitwiseOr:["COLOR_BUFFER_BIT","DEPTH_BUFFER_BIT","STENCIL_BUFFER_BIT"]}}},depthFunc:{1:{0:!0}},blendFunc:{2:{0:!0,1:!0}},blendFuncSeparate:{4:{0:!0,1:!0,2:!0,3:!0}},blendEquation:{1:{0:!0}},blendEquationSeparate:{2:{0:!0,1:!0}},stencilFunc:{3:{0:!0}},stencilFuncSeparate:{4:{0:!0,1:!0}},stencilMaskSeparate:{2:{0:!0}},stencilOp:{3:{0:!0,1:!0,2:!0}},stencilOpSeparate:{4:{0:!0,1:!0,2:!0,3:!0}},cullFace:{1:{0:!0}},frontFace:{1:{0:!0}},drawArraysInstancedANGLE:{4:{0:!0}},drawElementsInstancedANGLE:{5:{0:!0,2:!0}},blendEquationEXT:{1:{0:!0}}},r=null,i=null;function o(e){if(null==r)for(var t in r={},i={},e)"number"==typeof e[t]&&(r[e[t]]=t,i[t]=e[t])}function a(){if(null==r)throw"WebGLDebugUtils.init(ctx) not called"}function n(e){a();var t=r[e];return void 0!==t?"gl."+t:"/*UNKNOWN WebGL ENUM*/ 0x"+e.toString(16)}function s(e,r,o,a){var s;if(void 0!==(s=t[e])&&void 0!==(s=s[r])&&s[o]){if("object"==typeof s[o]&&void 0!==s[o].enumBitwiseOr){for(var l=s[o].enumBitwiseOr,c=0,d=[],u=0;u<l.length;++u){var m=i[l[u]];0!=(a&m)&&(c|=m,d.push(n(m)))}return c===a?d.join(" | "):n(a)}return n(a)}return null===a?"null":void 0===a?"undefined":a.toString()}function l(e,t,r){e.__defineGetter__(r,(function(){return t[r]})),e.__defineSetter__(r,(function(e){t[r]=e}))}function c(e){var t=e.getParameter(e.MAX_VERTEX_ATTRIBS),r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r);for(var i=0;i<t;++i)e.disableVertexAttribArray(i),e.vertexAttribPointer(i,4,e.FLOAT,!1,0,0),e.vertexAttrib1f(i,0);e.deleteBuffer(r);var o=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);for(i=0;i<o;++i)e.activeTexture(e.TEXTURE0+i),e.bindTexture(e.TEXTURE_CUBE_MAP,null),e.bindTexture(e.TEXTURE_2D,null);for(e.activeTexture(e.TEXTURE0),e.useProgram(null),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.DITHER),e.disable(e.SCISSOR_TEST),e.blendColor(0,0,0,0),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.clearColor(0,0,0,0),e.clearDepth(1),e.clearStencil(-1),e.colorMask(!0,!0,!0,!0),e.cullFace(e.BACK),e.depthFunc(e.LESS),e.depthMask(!0),e.depthRange(0,1),e.frontFace(e.CCW),e.hint(e.GENERATE_MIPMAP_HINT,e.DONT_CARE),e.lineWidth(1),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.UNPACK_COLORSPACE_CONVERSION_WEBGL&&e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.polygonOffset(0,0),e.sampleCoverage(1,!1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilMask(4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT|e.STENCIL_BUFFER_BIT);e.getError(););}return{init:o,mightBeEnum:function(e){return a(),void 0!==r[e]},glEnumToString:n,glFunctionArgToString:s,glFunctionArgsToString:function(e,t){for(var r="",i=t.length,o=0;o<i;++o)r+=(0==o?"":", ")+s(e,i,o,t[o]);return r},makeDebugContext:function t(r,i,a,c){c=c||r,o(r),i=i||function(t,r,i){for(var o="",a=i.length,l=0;l<a;++l)o+=(0==l?"":", ")+s(r,a,l,i[l]);e("WebGL error "+n(t)+" in "+r+"("+o+")")};var d={};function u(e,t){return function(){a&&a(t,arguments);var r=e[t].apply(e,arguments),o=c.getError();return 0!=o&&(d[o]=!0,i(o,t,arguments)),r}}var m={};for(var f in r)if("function"==typeof r[f])if("getExtension"!=f)m[f]=u(r,f);else{var p=u(r,f);m[f]=function(){return t(p.apply(r,arguments),i,a,c)}}else l(m,r,f);return m.getError=function(){for(var e in d)if(d.hasOwnProperty(e)&&d[e])return d[e]=!1,e;return r.NO_ERROR},m},makeLostContextSimulatingCanvas:function(e){var t,r,i=[],o=[],a={},n=1,s=!1,d=[],u=0,m=0,f=!1,p=0,h={};function v(e){return"function"==typeof e?e:function(t){e.handleEvent(t)}}e.getContext=(r=e.getContext,function(){var i=r.apply(e,arguments);if(i instanceof WebGLRenderingContext){if(i!=t){if(t)throw"got different context";a=S(t=i)}return a}return i});var g,x,b=function(e){i.push(v(e))},T=function(e){o.push(v(e))};function y(){++m,s||u==m&&e.loseContext()}function _(e,t){var r=e[t];return function(){if(y(),!s)return r.apply(e,arguments)}}function w(e){return{statusMessage:e,preventDefault:function(){f=!0}}}return x=(g=e).addEventListener,g.addEventListener=function(e,t,r){switch(e){case"webglcontextlost":b(t);break;case"webglcontextrestored":T(t);break;default:x.apply(g,arguments)}},e.loseContext=function(){if(!s){for(s=!0,u=0,++n;t.getError(););(function(){for(var e=Object.keys(h),t=0;t<e.length;++t)delete h[e]})(),h[t.CONTEXT_LOST_WEBGL]=!0;var r=w("context lost"),o=i.slice();setTimeout((function(){for(var t=0;t<o.length;++t)o[t](r);p>=0&&setTimeout((function(){e.restoreContext()}),p)}),0)}},e.restoreContext=function(){s&&o.length&&setTimeout((function(){if(!f)throw"can not restore. webglcontestlost listener did not call event.preventDefault";(function(){for(var e=0;e<d.length;++e){var r=d[e];r instanceof WebGLBuffer?t.deleteBuffer(r):r instanceof WebGLFramebuffer?t.deleteFramebuffer(r):r instanceof WebGLProgram?t.deleteProgram(r):r instanceof WebGLRenderbuffer?t.deleteRenderbuffer(r):r instanceof WebGLShader?t.deleteShader(r):r instanceof WebGLTexture&&t.deleteTexture(r)}})(),c(t),s=!1,m=0,f=!1;for(var e=o.slice(),r=w("context restored"),i=0;i<e.length;++i)e[i](r)}),0)},e.loseContextInNCalls=function(e){if(s)throw"You can not ask a lost contet to be lost";u=m+e},e.getNumCalls=function(){return m},e.setRestoreTimeout=function(e){p=e},e;function S(e){for(var r in e)"function"==typeof e[r]?a[r]=_(e,r):l(a,e,r);a.getError=function(){if(y(),!s)for(;e=t.getError();)h[e]=!0;for(var e in h)if(h[e])return delete h[e],e;return a.NO_ERROR};for(var i=["createBuffer","createFramebuffer","createProgram","createRenderbuffer","createShader","createTexture"],o=0;o<i.length;++o){var c=i[o];a[c]=function(t){return function(){if(y(),s)return null;var r=t.apply(e,arguments);return r.__webglDebugContextLostId__=n,d.push(r),r}}(e[c])}var u=["getActiveAttrib","getActiveUniform","getBufferParameter","getContextAttributes","getAttachedShaders","getFramebufferAttachmentParameter","getParameter","getProgramParameter","getProgramInfoLog","getRenderbufferParameter","getShaderParameter","getShaderInfoLog","getShaderSource","getTexParameter","getUniform","getUniformLocation","getVertexAttrib"];for(o=0;o<u.length;++o)a[c=u[o]]=function(t){return function(){return y(),s?null:t.apply(e,arguments)}}(a[c]);var m=["isBuffer","isEnabled","isFramebuffer","isProgram","isRenderbuffer","isShader","isTexture"];for(o=0;o<m.length;++o)a[c=m[o]]=function(t){return function(){return y(),!s&&t.apply(e,arguments)}}(a[c]);return a.checkFramebufferStatus=function(t){return function(){return y(),s?a.FRAMEBUFFER_UNSUPPORTED:t.apply(e,arguments)}}(a.checkFramebufferStatus),a.getAttribLocation=function(t){return function(){return y(),s?-1:t.apply(e,arguments)}}(a.getAttribLocation),a.getVertexAttribOffset=function(t){return function(){return y(),s?0:t.apply(e,arguments)}}(a.getVertexAttribOffset),a.isContextLost=function(){return s},a}},resetToInitialState:c}}())&&(Qr.exports=Zr);class ei{constructor(e){this.context=e,this.svgAlwaysPremultipliesAlpha=!1,this.floatBufferBlendWorking=!1,this._doublePrecisionRequiresObfuscation=null,this.floatBufferBlendWorking=function(e){var t,r,i,o,a;if(!e.gl)return!1;if("webgl"===e.webglVersion)return(null==(o=e.capabilities.textureFloat)?void 0:o.textureFloat)&&(null==(a=e.capabilities.colorBufferFloat)?void 0:a.textureFloat);if(!((null==(t=e.capabilities.textureFloat)?void 0:t.textureFloat)&&(null==(r=e.capabilities.colorBufferFloat)?void 0:r.textureFloat)&&(null==(i=e.capabilities.colorBufferFloat)?void 0:i.floatBlend)))return!1;const n=new ut(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5126,internalFormat:34836,samplingMode:9728,width:1,height:1}),s=dt.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),l=new ct(e,new Map([["a_pos",0]]),{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:s}),c=new ht(e,"\n  precision highp float;\n  attribute vec2 a_pos;\n\n  void main() {\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ","\n   precision highp float;\n\n   void main() {\n    gl_FragColor = vec4(0.5, 0.5, 0.5, 0.5);\n   }\n  ",new Map([["a_pos",0]]));e.useProgram(c);const d=e.getBoundFramebufferObject(),{x:u,y:m,width:f,height:p}=e.getViewport();e.bindFramebuffer(n),e.setViewport(0,0,1,1),e.bindVAO(l),e.drawArrays(5,0,4);const h=vt({blending:Sr});e.setPipelineState(h),e.drawArrays(5,0,4),Jr.exports.init(e);const v=e.gl.getError();return e.setViewport(u,m,f,p),e.bindFramebuffer(d),c.dispose(),l.dispose(!1),s.dispose(),n.dispose(),1282!==v||(console.warn("Device claims support for WebGL extension EXT_float_blend but does not support it. Using fall back."),!1)}(e),it(e).then((e=>this.svgAlwaysPremultipliesAlpha=!e))}get doublePrecisionRequiresObfuscation(){if(v(this._doublePrecisionRequiresObfuscation)){const e=ri(this.context,!1),t=ri(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===t||e/t>5)}return this._doublePrecisionRequiresObfuscation}}let ti=null;function ri(e,t){const r=new ut(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1});const i=dt.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),o=new ct(e,new Map([["position",0]]),{geometry:[{name:"position",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:i}),a=u(5633261.287538229,2626832.878767164,1434988.0495278358),n=u(5633271.46742708,2626873.6381334523,1434963.231608387),s=function(r,i){const o=new ht(e,`\n\n  precision highp float;\n\n  attribute vec2 position;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${t?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",new Map([["position",0]])),a=new Float32Array(6);ar(r,a,3);const n=new Float32Array(6);return ar(i,n,3),e.useProgram(o),o.setUniform3f("u_highA",a[0],a[2],a[4]),o.setUniform3f("u_lowA",a[1],a[3],a[5]),o.setUniform3f("u_highB",n[0],n[2],n[4]),o.setUniform3f("u_lowB",n[1],n[3],n[5]),o}(a,n),l=e.getBoundFramebufferObject(),{x:c,y:d,width:m,height:f}=e.getViewport();e.bindFramebuffer(r),e.setViewport(0,0,1,1),e.bindVAO(o),e.drawArrays(5,0,4);const p=new Uint8Array(4);r.readPixels(0,0,1,1,6408,5121,p),s.dispose(),o.dispose(!1),i.dispose(),r.dispose(),e.setViewport(c,d,m,f),e.bindFramebuffer(l);const h=(a[2]-n[2])/25,v=St(p);return Math.abs(h-v)}function ii({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(Kt`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(Kt`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function oi(e){return!!ie("force-double-precision-obfuscation")||(t=e,(v(ti)||ti.context!==t)&&(ti=new ei(t)),ti).doublePrecisionRequiresObfuscation;var t}function ai(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(ii,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const r=[Kt`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,Kt`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?Kt`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,Kt`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,Kt`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangents?Kt`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:Kt``];e.vertex.code.add(r[0]),e.vertex.code.add(r[1]),e.vertex.code.add(r[2]),2===t.output&&e.vertex.code.add(r[3]),e.vertex.code.add(r[4])}var ni;(ni=ai||(ai={})).Uniforms=class{},ni.bindCustomOrigin=function(e,t){(function(e,t,r,i){for(let o=0;o<i;++o)nr[0]=e[o],ar(nr,sr,1),t[o]=sr[0],r[o]=sr[1]})(t,si,li,3),e.setUniform3fv("viewOriginHi",si),e.setUniform3fv("viewOriginLo",li)};const si=d(),li=d();function ci(e){e.vertex.code.add(Kt`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(Kt`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(Kt`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(Kt`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(Kt`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(Kt`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
}`),e.vertex.code.add(Kt`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function di(e,t){const r=e.vertex.code;t.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&(e.include(ci),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),r.add(Kt`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===t.viewingMode?Kt`vec3 worldNormal = normalize(worldPos + localOrigin);`:Kt`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${t.screenSizePerspectiveEnabled?Kt`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:Kt`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):r.add(Kt`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function ui(e,t,r){if(!t.verticalOffset)return;const i=function(e,t,r,i=mi){return i.screenLength=e.screenLength,i.perDistance=Math.tan(.5*t)/(.5*r),i.minWorldLength=e.minWorldLength,i.maxWorldLength=e.maxWorldLength,i}(t.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]),o=r.camera.pixelRatio||1;e.setUniform4f("verticalOffset",i.screenLength*o,i.perDistance,i.minWorldLength,i.maxWorldLength)}const mi={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0},fi=He(1,1,0,1),pi=He(1,0,1,1);function hi(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",fi).add("unoccludedHighlightFlag","vec4",pi),e.fragment.code.add(Kt`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function vi(e,t){e.fragment.uniforms.add("terrainDepthTexture","sampler2D"),e.fragment.uniforms.add("cameraNearFar","vec2"),e.fragment.uniforms.add("inverseViewport","vec2"),e.fragment.code.add(Kt`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function gi(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(Kt`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(Kt`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),0===t.attributeTextureCoordinates&&e.vertex.code.add(Kt`void forwardTextureCoordinates() {}`)}function xi(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(Kt`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function bi(e,t){e.include(gi,t),e.fragment.code.add(Kt`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(Kt`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),2===t.attributeTextureCoordinates&&(e.include(xi),e.fragment.code.add(Kt`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}function Ti(e,t){const r=e.fragment,i=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&i&&e.include(bi,t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(Kt`float getBakedOcclusion() { return 1.0; }`),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(Kt`vec3 mrr;
vec3 emission;
float occlusion;`),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(Kt`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(Kt`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(Kt`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(Kt`float getBakedOcclusion() { return 1.0; }`),r.code.add(Kt`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(Kt`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function yi(e){e.code.add(Kt`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function _i(e){e.fragment.include(yi),e.fragment.uniforms.add("uShadowMapTex","sampler2D"),e.fragment.uniforms.add("uShadowMapNum","int"),e.fragment.uniforms.add("uShadowMapDistance","vec4"),e.fragment.uniforms.add("uShadowMapMatrix","mat4",4),e.fragment.uniforms.add("uDepthHalfPixelSz","float"),e.fragment.code.add(Kt`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = uShadowMapDistance;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= uShadowMapNum) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
}`)}function wi(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(Kt`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),e.vertex.code.add(Kt`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.vvInstancingEnabled?Kt`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(Kt`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(Kt`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${t.vvInstancingEnabled?Kt`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(Kt`vec4 vvColor() { return vec4(1.0); }`)}yt(0,.6,.2);const Si=oe();class Ci{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}function Mi(e={}){return(t,r)=>{var i,o;t._parameterNames=null!=(i=t._parameterNames)?i:[],t._parameterNames.push(r);const a=t._parameterNames.length-1,n=e.count||2,s=Math.ceil(se(n)),l=null!=(o=t._parameterBits)?o:[0];let c=0;for(;l[c]+s>16;)c++,c>=l.length&&l.push(0);t._parameterBits=l;const d=l[c],u=(1<<s)-1<<d;l[c]+=s,Object.defineProperty(t,r,{get(){return this[a]},set(e){if(this[a]!==e&&(this[a]=e,this._keyDirty=!0,this._parameterBits[c]=this._parameterBits[c]&~u|+e<<d&u,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration value for "+r+" must be boolean or number, got "+typeof e}})}}class Ai extends ht{constructor(e,t,r){super(e,t.generateSource("vertex"),t.generateSource("fragment"),r),this._textures=new Map,this._freeTextureUnits=new c({deallocator:null}),this._fragmentUniforms=nt()?t.fragmentUniforms.entries:null}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(v(e)||null==e.glName){const e=this._textures.get(t);return e&&(this._context.bindTexture(null,e.unit),this._freeTextureUnit(e),this._textures.delete(t)),null}let r=this._textures.get(t);return null==r?(r=this._allocTextureUnit(e),this._textures.set(t,r)):r.texture=e,this._context.useProgram(this),this.setUniform1i(t,r.unit),this._context.bindTexture(e,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),C(this._fragmentUniforms)&&this._fragmentUniforms.forEach((e=>{if(("sampler2D"===e.type||"samplerCube"===e.type)&&!this._textures.has(e.name))throw new Error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}const Pi={mask:255},Fi={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},Oi={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}};function Ei(e,t){0===t.output&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(Kt`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):1===t.output||3===t.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("cameraNearFar","vec2"),e.vertex.code.add(Kt`void forwardLinearDepth() {
linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
}`)):e.vertex.code.add(Kt`void forwardLinearDepth() {}`)}function Ii(e){e.vertex.code.add(Kt`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function Ri(e,t){t.linearDepth?e.vertex.code.add(Kt`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):e.vertex.code.add(Kt`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}function Di(e){const t=Kt`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}function Li(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(Kt`vec3 normalModel() {
return normal;
}`)),1===t.normalType&&(e.include(Di),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(Kt`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(Kt`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}function zi(e){e.attributes.add("position","vec3"),e.vertex.code.add(Kt`vec3 positionModel() { return position; }`)}function Bi(e){e.vertex.code.add(Kt`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${Kt.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${Kt.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${Kt.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${Kt.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function Ni(e,t){t.symbolColor?(e.include(Bi),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(Kt`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):e.vertex.code.add(Kt`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}function Vi(e,t){t.attributeColor?(e.attributes.add("color","vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(Kt`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(Kt`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(Kt`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function Hi(e,t){e.include(zi),e.vertex.include(ii,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(Kt`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
uTransform_WorldFromModel_TL,
uTransform_WorldFromModel_TH,
-uTransform_WorldFromView_TL,
-uTransform_WorldFromView_TH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`),e.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.fragment.code.add(Kt`vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`)}function Ui(e,t){0===t.normalType||1===t.normalType?(e.include(Li,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(Kt`void forwardNormal() {
vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
}`)):2===t.normalType?(e.include(Hi,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(Kt`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?Kt`normalize(vPositionWorldCameraRelative);`:Kt`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(Kt`void forwardNormal() {}`)}function Gi(e,t){e.fragment.include(yi),3===t.output?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(Kt`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):1===t.output&&e.fragment.code.add(Kt`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}function ki(e,t){const r=e.vertex.code,i=e.fragment.code;1!==t.output&&3!==t.output||(e.include(Ri,{linearDepth:!0}),e.include(gi,t),e.include(wi,t),e.include(Gi,t),e.include(Kr,t),e.vertex.uniforms.add("cameraNearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(Kt`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),e.include(Qt,t),i.add(Kt`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?Kt`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(Ri,{linearDepth:!1}),e.include(Li,t),e.include(Ui,t),e.include(gi,t),e.include(wi,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),r.add(Kt`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?Kt`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(Kr,t),e.include(Qt,t),i.add(Kt`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?Kt`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===t.normalType?Kt`
            vec3 normal = screenDerivativeNormal(vPositionView);`:Kt`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===t.output&&(e.include(Ri,{linearDepth:!1}),e.include(gi,t),e.include(wi,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(Kt`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(Kr,t),e.include(Qt,t),e.include(hi),i.add(Kt`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?Kt`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}function $i(e){e.include(yi),e.code.add(Kt`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}function Wi(e,t){const r=e.fragment;t.vertexTangents?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===t.doubleSidedMode?r.code.add(Kt`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(Kt`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(Kt`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),0!==t.attributeTextureCoordinates&&(e.include(bi,t),r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),r.code.add(Kt`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}function qi(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(Kt`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):r.code.add(Kt`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}function ji(e,t){const r=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(Kt`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(Kt`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===i&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(Kt`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),1!==t.pbrMode&&2!==t.pbrMode||r.code.add(Kt`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}function Xi(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(Kt`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}function Ki(e){const t=e.fragment.code;t.add(Kt`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(Kt`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(Kt`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Yi(e){e.vertex.code.add(Kt`const float PI = 3.141592653589793;`),e.fragment.code.add(Kt`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function Qi(e,t){const r=e.fragment.code;e.include(Yi),3===t.pbrMode||4===t.pbrMode?(r.add(Kt`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(Kt`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(Kt`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(Kt`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(Kt`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):1!==t.pbrMode&&2!==t.pbrMode||(e.include(Ki),r.add(Kt`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(Kt`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(Kt`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),r.add(Kt`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(Kt`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(Kt`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function Zi(e,t){const r=e.fragment;e.include(Xi),e.include(qi,t),0!==t.pbrMode&&e.include(Qi,t),e.include(ji,t),t.receiveShadows&&e.include(_i,t),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),e.include(Yi),r.code.add(Kt`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),r.code.add(Kt`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${1===t.viewingMode?Kt`normalize(vPosWorld)`:Kt`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),r.code.add(Kt`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),0===t.pbrMode||4===t.pbrMode?r.code.add(Kt`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):1!==t.pbrMode&&2!==t.pbrMode||(r.code.add(Kt`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(Kt`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),r.code.add(Kt`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = abs(dot(normal, ambientDir));
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.code.add(Kt`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(Kt`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?Kt`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:Kt`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}function Ji(e,t){const r=e.fragment;r.code.add(Kt`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),1===t.doubleSidedMode?r.code.add(Kt`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`):2===t.doubleSidedMode?r.code.add(Kt`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`):r.code.add(Kt`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`)}function eo(e,t){const r=Kt`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `;st()&&(e.fragment.code.add(r),e.vertex.code.add(r))}function to(e){e.code.add(Kt`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function ro(e){e.include(to),e.code.add(Kt`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${Kt.int(1)}) {
        return allMixed;
      }
      else if (mode == ${Kt.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${Kt.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${Kt.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${Kt.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}!function(e){e.ModelTransform=class{constructor(){this.worldFromModel_RS=_e(),this.worldFromModel_TH=d(),this.worldFromModel_TL=d()}};e.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=d(),this.worldFromView_TL=d(),this.viewFromCameraRelative_RS=_e(),this.projFromView=we()}},e.bindModelTransform=function(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)},e.bindViewProjTransform=function(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)}}(Hi||(Hi={})),(Ui||(Ui={})).bindUniforms=function(e,t){e.setUniformMatrix4fv("viewNormal",t)};const io=x.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class oo{constructor(){this.includedModules=new Map}include(e,t){this.includedModules.has(e)?this.includedModules.get(e)!==t&&io.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,t),e(this.builder,t))}}class ao extends oo{constructor(){super(...arguments),this.vertex=new lo,this.fragment=new lo,this.attributes=new co,this.varyings=new uo,this.extensions=new mo,this.constants=new fo}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(),o="vertex"===e?this.vertex:this.fragment,a=o.uniforms.generateSource(),n=o.code.generateSource(),s="vertex"===e?ho:po,l=this.constants.generateSource().concat(o.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${l.join("\n")}\n\n${a.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${n.join("\n")}`}}class no{constructor(){this._entries=new Map}add(e,t,r){const i=`${e}_${t}_${r}`;return this._entries.set(i,{name:e,type:t,arraySize:r}),this}generateSource(){return Array.from(this._entries.values()).map((e=>{return`uniform ${e.type} ${e.name}${t=e.arraySize,t?`[${t}]`:""};`;var t}))}get entries(){return Array.from(this._entries.values())}}class so{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class lo extends oo{constructor(){super(...arguments),this.uniforms=new no,this.code=new so,this.constants=new fo}get builder(){return this}}class co{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class uo{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class mo{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?mo.ALLOWLIST_VERTEX:mo.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}mo.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],mo.ALLOWLIST_VERTEX=[];class fo{constructor(){this._entries=[]}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=fo.numberToFloatStr(r);break;case"int":i=fo.numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${fo.numberToFloatStr(r[0])},                            ${fo.numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${fo.numberToFloatStr(r[0])},                            ${fo.numberToFloatStr(r[1])},                            ${fo.numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${fo.numberToFloatStr(r[0])},                            ${fo.numberToFloatStr(r[1])},                            ${fo.numberToFloatStr(r[2])},                            ${fo.numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${fo.numberToIntStr(r[0])},                             ${fo.numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${fo.numberToIntStr(r[0])},                             ${fo.numberToIntStr(r[1])},                             ${fo.numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${fo.numberToIntStr(r[0])},                             ${fo.numberToIntStr(r[1])},                             ${fo.numberToIntStr(r[2])},                             ${fo.numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,(e=>fo.numberToFloatStr(e))).join(", ")})`}return this._entries.push(`const ${t} ${e} = ${i};`),this}static numberToIntStr(e){return e.toFixed(0)}static numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const po="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",ho="precision highp float;\nprecision highp sampler2D;";function vo(e){const t=new ao,r=t.vertex.code,i=t.fragment.code;return t.include(eo,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(zi),t.varyings.add("vpos","vec3"),t.include(wi,e),t.include(ai,e),t.include(di,e),0!==e.output&&7!==e.output||(t.include(Li,e),t.include(Ri,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(Ii),t.include(Wi,e),t.include(Ui,e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(gi,e),t.include(Ei,e),t.include(Ni,e),t.include(Vi,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),r.add(Kt`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${Kt.float(.001)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?Kt`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===e.normalType&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(t.include(Kr,e),t.include(Qt,e),e.multipassTerrainEnabled&&(t.fragment.include($i),t.include(vi,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(ro),i.add(Kt`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?Kt`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Kt`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?Kt`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Kt`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(Kr,e),t.include(Zi,e),t.include(qi,e),t.include(Qt,e),e.receiveShadows&&t.include(_i,e),e.multipassTerrainEnabled&&(t.fragment.include($i),t.include(vi,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(Ti,e),t.include(Qi,e),t.fragment.include(ro),t.include(Ji,e),i.add(Kt`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?Kt`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Kt`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?Kt`
        vec3 normal = screenDerivativeNormal(localvpos);`:Kt`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?Kt`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Kt`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?Kt`
              mat3 tangentSpace = ${e.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?Kt`vec3 normalGround = normalize(vpos + localOrigin);`:Kt`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:Kt``}
        ${1===e.pbrMode||2===e.pbrMode?Kt`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(ki,e),t}var go=Object.freeze({__proto__:null,build:vo});class xo extends class{constructor(e,t,r=(()=>this.dispose())){this.release=r,t&&(this._config=t.snapshot()),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}dispose(){this._program=ne(this._program),this._pipeline=this._config=null}reload(e){ne(this._program),this._program=this.initializeProgram(e)}get program(){return this._program}get pipeline(){return this._pipeline}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,t){}bindMaterial(e,t){}bindDraw(e,t,r){}bindPipelineState(e){e.setPipelineState(this.pipeline)}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return 4}}{initializeProgram(e){const t=xo.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?r.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?3:0,doubleSidedMode:r.doubleSidedMode,vertexTangents:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:oi(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new Ai(e.rctx,i,Wt)}bindPass(e,t){var r,i;!function(e,t){e.setUniformMatrix4fv("proj",t)}(this.program,t.camera.projectionMatrix);const o=this.configuration.output;(1===this.configuration.output||t.multipassTerrainEnabled||3===o)&&this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),function(e,t){t.multipassTerrainEnabled&&t.terrainLinearDepthTexture&&e.bindTexture(t.terrainLinearDepthTexture,"terrainDepthTexture")}(this.program,t)),7===o&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",br[e.colorMixMode])),0===o?(t.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",br[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&function(e,t,r=!1){r||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}(this.program,e,this.configuration.isSchematic)):4===o&&function(e,t){e.bindTexture(t.highlightDepthTexture,"depthTex"),e.setUniform4f("highlightViewportPixelSz",0,0,t.inverseViewport[0],t.inverseViewport[1])}(this.program,t),function(e,t){(function(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))})(e,t),t.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",t.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",t.vvSymbolRotationMatrix))}(this.program,e),ui(this.program,e,t),function(e,t,r){if(!e)return;const i=e.parameters,o=e.paddingPixelsOverride;t.setUniform4f(r,i.divisor,i.offset,i.minPixelSize,o)}(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==e.textureAlphaMode&&3!==e.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(r=t.shadowMap)||r.bind(this.program),null==(i=t.ssaoHelper)||i.bind(this.program,t.camera)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?u(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;(function(e,t,r){ae(Si,r,t),e.setUniform3fv("localOrigin",t),e.setUniformMatrix4fv("view",Si)})(this.program,t,e.camera.viewMatrix),this.program.rebindTextures(),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&function(e,t,r){e.setUniform3f("camPos",r[3]-t[0],r[7]-t[1],r[11]-t[2])}(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&ai.bindCustomOrigin(this.program,t),function(e,t,r,i){t.slicePlaneEnabled&&(C(r)?(i?($(Yr,r.origin,i),e.setUniform3fv("slicePlaneOrigin",Yr)):e.setUniform3fv("slicePlaneOrigin",r.origin),e.setUniform3fv("slicePlaneBasis1",r.basis1),e.setUniform3fv("slicePlaneBasis2",r.basis2)):(e.setUniform3fv("slicePlaneBasis1",re),e.setUniform3fv("slicePlaneBasis2",re),e.setUniform3fv("slicePlaneOrigin",re)))}(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&function(e,t,r){t.shadowMappingEnabled&&t.shadowMap.bindView(e,r)}(this.program,e,t)}setPipeline(e,t){const r=this.configuration,i=3===e,o=2===e;return vt({blending:0!==r.output&&7!==r.output||!r.transparent?null:i?_r:(a=e,2===a?null:1===a?Sr:wr),culling:bo(r)&&gt(r.cullFace),depthTest:{func:Ar(e)},depthWrite:i||o?r.writeDepth&&xt:null,colorWrite:bt,stencilWrite:r.sceneHasOcludees?Pi:null,stencilTest:r.sceneHasOcludees?t?Oi:Fi:null,polygonOffset:i||o?null:Mr(r.enableOffset)});var a}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}function bo(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}xo.shader=new Ci(go,(()=>import("./DefaultMaterial.glsl.00548496.js")));class To extends class{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits.map((()=>0))}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}function yo(e){const t=new ao,r=t.vertex.code,i=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(zi),t.varyings.add("vpos","vec3"),t.include(wi,e),t.include(ai,e),t.include(di,e),0!==e.output&&7!==e.output||(t.include(Li,e),t.include(Ri,{linearDepth:!1}),e.offsetBackfaces&&t.include(Ii),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(gi,e),t.include(Ei,e),t.include(Ni,e),t.include(Vi,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(Kt`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${Kt.float(.001)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${e.multipassTerrainEnabled?Kt`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(t.include(Kr,e),t.include(Qt,e),e.multipassTerrainEnabled&&(t.fragment.include($i),t.include(vi,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(ro),i.add(Kt`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?Kt`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?Kt`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Kt`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?Kt`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Kt`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(Kr,e),t.include(Zi,e),t.include(qi,e),t.include(Qt,e),e.receiveShadows&&t.include(_i,e),e.multipassTerrainEnabled&&(t.fragment.include($i),t.include(vi,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(Ti,e),t.include(Qi,e),t.fragment.include(ro),i.add(Kt`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?Kt`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?Kt`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Kt`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?Kt`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Kt`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${Kt`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?Kt`vec3 normalGround = normalize(vpos + localOrigin);`:Kt`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:Kt``}
        ${1===e.pbrMode||2===e.pbrMode?Kt`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(ki,e),t}le([Mi({count:8})],To.prototype,"output",void 0),le([Mi({count:4})],To.prototype,"alphaDiscardMode",void 0),le([Mi({count:3})],To.prototype,"doubleSidedMode",void 0),le([Mi()],To.prototype,"isSchematic",void 0),le([Mi()],To.prototype,"vertexColors",void 0),le([Mi()],To.prototype,"offsetBackfaces",void 0),le([Mi()],To.prototype,"symbolColors",void 0),le([Mi()],To.prototype,"vvSize",void 0),le([Mi()],To.prototype,"vvColor",void 0),le([Mi()],To.prototype,"verticalOffset",void 0),le([Mi()],To.prototype,"receiveShadows",void 0),le([Mi()],To.prototype,"slicePlaneEnabled",void 0),le([Mi()],To.prototype,"sliceHighlightDisabled",void 0),le([Mi()],To.prototype,"receiveAmbientOcclusion",void 0),le([Mi()],To.prototype,"screenSizePerspective",void 0),le([Mi()],To.prototype,"textureAlphaPremultiplied",void 0),le([Mi()],To.prototype,"hasColorTexture",void 0),le([Mi()],To.prototype,"usePBR",void 0),le([Mi()],To.prototype,"hasMetalnessAndRoughnessTexture",void 0),le([Mi()],To.prototype,"hasEmissionTexture",void 0),le([Mi()],To.prototype,"hasOcclusionTexture",void 0),le([Mi()],To.prototype,"hasNormalTexture",void 0),le([Mi()],To.prototype,"instanced",void 0),le([Mi()],To.prototype,"instancedColor",void 0),le([Mi()],To.prototype,"instancedDoublePrecision",void 0),le([Mi()],To.prototype,"vertexTangents",void 0),le([Mi()],To.prototype,"normalsTypeDerivate",void 0),le([Mi()],To.prototype,"writeDepth",void 0),le([Mi()],To.prototype,"sceneHasOcludees",void 0),le([Mi()],To.prototype,"transparent",void 0),le([Mi()],To.prototype,"enableOffset",void 0),le([Mi({count:3})],To.prototype,"cullFace",void 0),le([Mi({count:4})],To.prototype,"transparencyPassType",void 0),le([Mi()],To.prototype,"multipassTerrainEnabled",void 0),le([Mi()],To.prototype,"cullAboveGround",void 0);var _o=Object.freeze({__proto__:null,build:yo});class wo extends xo{initializeProgram(e){const t=wo.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangents:!1,attributeTextureCoordinates:r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:oi(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new Ai(e.rctx,i,Wt)}}wo.shader=new Ci(_o,(()=>import("./RealisticTree.glsl.ec12aca9.js")));class So extends yr{constructor(e){super(e,Mo),this.supportsEdges=!0,this.techniqueConfig=new To,this.vertexBufferLayout=So.getVertexBufferLayout(this.params),this.instanceBufferLayout=e.instanced?So.getInstanceBufferLayout(this.params):null}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.params.castShadows}isVisible(){const e=this.params;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,r=e.vertexColors,i=e.symbolColors,o=!!t&&t.indexOf("color")>-1,a=e.vvColorEnabled,n="replace"===e.colorMixMode,s=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return r&&(o||a||i)?!!n||s:r?n?l:s:o||a||i?!!n||s:n?l:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.params.textureId,this.techniqueConfig.vertexTangents=this.params.vertexTangents,this.techniqueConfig.instanced=!!this.params.instanced,this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.cullFace=this.params.slicePlaneEnabled?0:this.params.cullFace,this.techniqueConfig.multipassTerrainEnabled=!!t&&t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=!!t&&t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.params.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.params.instanced&&this.params.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!(!t||!t.ssaoEnabled)&&this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<5e5),this.techniqueConfig}intersect(e,t,r,i,o,a,n){if(null!==this.params.verticalOffset){const e=i.camera;z(Ro,r[12],r[13],r[14]);let t=null;switch(i.viewingMode){case 1:t=H(Eo,Ro);break;case 2:t=X(Eo,Oo)}let n=0;if(null!==this.params.verticalOffset){const r=$(Do,Ro,e.eye),i=q(r),o=G(r,r,1/i);let a=null;this.params.screenSizePerspective&&(a=k(t,o)),n+=function(e,t,r,i,o){let a=(r.screenLength||0)*e.pixelRatio;o&&(a=ir(a,i,t,o));const n=a*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return L(n*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}(e,i,this.params.verticalOffset,a,this.params.screenSizePerspective)}G(t,t,n),ce(Io,t,i.transform.inverseRotation),o=$(Po,o,Io),a=$(Fo,a,Io)}var s;cr(e,t,i,o,a,(s=i.verticalOffset,C(s)?(Gr.offset=s,Gr):null),n)}getGLMaterial(e){if(0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output)return new Co(e)}createBufferWriter(){return new Ao(this.vertexBufferLayout,this.instanceBufferLayout)}static getVertexBufferLayout(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=Tt().vec3f("position").vec3f("normal");return e.vertexTangents&&r.vec4f("tangent"),t&&r.vec2f("uv0"),e.vertexColors&&r.vec4u8("color"),e.symbolColors&&r.vec4u8("symbolColor"),r}static getInstanceBufferLayout(e){let t=Tt();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}}class Co extends tr{constructor(e){const t=e.material;super(s(s({},e),t.params)),this.updateParameters()}updateParameters(e){const t=this._material.params;this.updateTexture(t.textureId),this._technique=this._techniqueRep.releaseAndAcquire(t.treeRendering?wo:xo,this._material.getTechniqueConfig(this._output,e),this._technique)}selectPipelines(){}_updateShadowState(e){e.shadowMappingEnabled!==this._material.params.shadowMappingEnabled&&this._material.setParameterValues({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.params.sceneHasOcludees&&this._material.setParameterValues({sceneHasOcludees:e.hasOccludees})}ensureParameters(e){0!==this._output&&7!==this._output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e){this._technique.bindPass(this._material.params,e),this.bindTextures(this._technique.program)}beginSlot(e){return e===(this._material.params.transparent?this._material.params.writeDepth?5:8:3)||23===e}getPipelineState(e,t){return this._technique.getPipelineState(t)}}const Mo=s({textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:2,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:_e(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:.1,textureAlphaPremultiplied:!1,sceneHasOcludees:!1},{renderOccluded:1});class Ao{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,r,i){!function(e,t,r,i,o,a){for(const n of t.fieldNames){const t=e.vertexAttributes.get(n),s=e.indices.get(n);if(t&&s)switch(n){case"position":{wt(3===t.size);const e=o.getField(n,Ee);e&&Wr(s,t.data,r,e,a);break}case"normal":{wt(3===t.size);const e=o.getField(n,Ee);e&&qr(s,t.data,i,e,a);break}case"uv0":{wt(2===t.size);const e=o.getField(n,Oe);e&&kr(s,t.data,e,a);break}case"color":{wt(3===t.size||4===t.size);const e=o.getField(n,Fe);e&&Xr(s,t.data,t.size,e,a);break}case"symbolColor":{wt(3===t.size||4===t.size);const e=o.getField(n,Fe);e&&Xr(s,t.data,t.size,e,a);break}case"tangent":{wt(4===t.size);const e=o.getField(n,Pe);e&&jr(s,t.data,i,e,a);break}}}}(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,i)}}const Po=d(),Fo=d(),Oo=u(0,0,1),Eo=d(),Io=d(),Ro=d(),Do=d(),Lo=x.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function zo(e,t){const r=await async function(e,t){const r=C(t)&&t.streamDataRequester;if(r)return async function(e,t,r){const i=await ue(t.request(e,"json",r));if(!0===i.ok)return i.value;pe(i.error),Bo(i.error.details.url)}(e,r,t);const i=await ue(me(e,fe(t)));if(!0===i.ok)return i.value.data;pe(i.error),Bo(i.error)}(e,t);return{resource:r,textures:await Ho(r.textureDefinitions,t)}}function Bo(e){throw new I("",`Request for object resource failed: ${e}`)}function No(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(Lo.warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Lo.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Lo.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(Lo.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else Lo.warn("Indexed geometries must specify faces"),i=!1;break}default:Lo.warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(Lo.warn("Geometry requires material"),i=!1);const o=e.params.vertexAttributes;for(const a in o)o[a].values||(Lo.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function Vo(e){const t=ve();return e.forEach((e=>{const r=e.boundingInfo;C(r)&&(de(t,r.getBBMin()),de(t,r.getBBMax()))})),t}async function Ho(e,t){const r=[];for(const a in e){const i=e[a],o=i.images[0].data;if(!o){Lo.warn("Externally referenced texture data is not yet supported");continue}const n=i.encoding+";base64,"+o,s="/textureDefinitions/"+a,l="rgba"===i.channels?i.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:1!==Uo(l)},d=C(t)&&t.disableTextures?Promise.resolve(null):rt(n,t);r.push(d.then((e=>({refId:s,image:e,params:c,alphaChannelUsage:l}))))}const i=await Promise.all(r),o={};for(const a of i)o[a.refId]=a;return o}function Uo(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;default:return 0}}function Go(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const ko=new tt(1,2,"wosr");function $o(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Wo(e,t,r,i){const o=e.model,a=_e(),n=new Array,c=new Map,d=new Map;return o.lods.forEach(((e,u)=>{if(void 0!==i&&u!==i)return;const m={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:C(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:ve()};n.push(m),e.parts.forEach((e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),n=o.materials.get(e.material),u=C(e.attributes.texCoord0),f=C(e.attributes.normal),p=function(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":case null:case void 0:return 1}}(n.alphaMode);if(!c.has(i)){if(u){if(C(n.textureColor)&&!d.has(n.textureColor)){const e=o.textures.get(n.textureColor),t=l(s({},e.parameters),{preMultiplyAlpha:1!==p});d.set(n.textureColor,new Xt(e.data,t))}if(C(n.textureNormal)&&!d.has(n.textureNormal)){const e=o.textures.get(n.textureNormal);d.set(n.textureNormal,new Xt(e.data,e.parameters))}if(C(n.textureOcclusion)&&!d.has(n.textureOcclusion)){const e=o.textures.get(n.textureOcclusion);d.set(n.textureOcclusion,new Xt(e.data,e.parameters))}if(C(n.textureEmissive)&&!d.has(n.textureEmissive)){const e=o.textures.get(n.textureEmissive);d.set(n.textureEmissive,new Xt(e.data,e.parameters))}if(C(n.textureMetallicRoughness)&&!d.has(n.textureMetallicRoughness)){const e=o.textures.get(n.textureMetallicRoughness);d.set(n.textureMetallicRoughness,new Xt(e.data,e.parameters))}}const a=n.color[0]**(1/We),m=n.color[1]**(1/We),h=n.color[2]**(1/We),v=n.emissiveFactor[0]**(1/We),g=n.emissiveFactor[1]**(1/We),x=n.emissiveFactor[2]**(1/We),b=C(n.textureColor)&&u?d.get(n.textureColor):null;c.set(i,new So(s(l(s({},t),{transparent:0===p,textureAlphaMode:p,textureAlphaCutoff:n.alphaCutoff,diffuse:[a,m,h],ambient:[a,m,h],opacity:n.opacity,doubleSided:n.doubleSided,doubleSidedType:"winding-order",cullFace:n.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:f?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:C(b)?b.id:void 0,colorMixMode:n.colorMixMode,normalTextureId:C(n.textureNormal)&&u?d.get(n.textureNormal).id:void 0,textureAlphaPremultiplied:C(b)&&!!b.params.preMultiplyAlpha,occlusionTextureId:C(n.textureOcclusion)&&u?d.get(n.textureOcclusion).id:void 0,emissiveTextureId:C(n.textureEmissive)&&u?d.get(n.textureEmissive).id:void 0,metallicRoughnessTextureId:C(n.textureMetallicRoughness)&&u?d.get(n.textureMetallicRoughness).id:void 0,emissiveFactor:[v,g,x],mrrFactors:[n.metallicFactor,n.roughnessFactor,t.mrrFactors[2]],isSchematic:!1}),r)))}const h=function(e,t){switch(t){case 4:return et(e);case 5:return Je(e);case 6:return Ze(e)}}(e.indices||e.attributes.position.count,e.primitiveType),v=e.attributes.position.count,g=qe(Ee,v);Se(g,e.attributes.position,e.transform);const x=[["position",{data:g.typedBuffer,size:g.elementCount,exclusive:!0}]],b=[["position",h]];if(C(e.attributes.normal)){const t=qe(Ee,v);be(a,e.transform),Ce(t,e.attributes.normal,a),x.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),b.push(["normal",h])}if(C(e.attributes.tangent)){const t=qe(Pe,v);be(a,e.transform),je(t,e.attributes.tangent,a),x.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),b.push(["tangent",h])}if(C(e.attributes.texCoord0)){const t=qe(Oe,v);Xe(t,e.attributes.texCoord0),x.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),b.push(["uv0",h])}if(C(e.attributes.color)){const t=qe(Fe,v);if(4===e.attributes.color.elementCount)e.attributes.color instanceof Pe?Ke(t,e.attributes.color,255):e.attributes.color instanceof Fe?Ye(t,e.attributes.color):e.attributes.color instanceof Ie&&Ke(t,e.attributes.color,1/256);else{Qe(t,255,255,255,255);const r=new Re(t.buffer,0,4);e.attributes.color instanceof Ee?Me(r,e.attributes.color,255):e.attributes.color instanceof Re?Ae(r,e.attributes.color):e.attributes.color instanceof De&&Me(r,e.attributes.color,1/256)}x.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),b.push(["color",h])}const T=new Ft(x,b);m.stageResources.geometries.push(T),m.stageResources.materials.push(c.get(i)),u&&(C(n.textureColor)&&m.stageResources.textures.push(d.get(n.textureColor)),C(n.textureNormal)&&m.stageResources.textures.push(d.get(n.textureNormal)),C(n.textureOcclusion)&&m.stageResources.textures.push(d.get(n.textureOcclusion)),C(n.textureEmissive)&&m.stageResources.textures.push(d.get(n.textureEmissive)),C(n.textureMetallicRoughness)&&m.stageResources.textures.push(d.get(n.textureMetallicRoughness))),m.numberOfVertices+=v;const y=T.boundingInfo;C(y)&&(de(m.boundingBox,y.getBBMin()),de(m.boundingBox,y.getBBMax()))}))})),n}var qo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",fetch:async function(e,t){const r=$o(ge(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):zo(r.url,t)),i=function(e,t){const r=[],i=[],o=[],a=[],n=e.resource,s=tt.parse(n.version||"1.0","wosr");ko.validate(s);const l=n.model.name,c=n.model.geometries,d=n.materialDefinitions,u=e.textures;let m=0;const f=new Map;for(let p=0;p<c.length;p++){const e=c[p];if(!No(e))continue;const n=Go(e),s=e.params.vertexAttributes,l=[];for(const t in s){const e=s[t],r=e.values;l.push([t,{data:r,size:e.valuesPerElement,exclusive:!0}])}const h=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)h.push([e,new Uint32Array(t[e].values)])}const v=u&&u[n.texture];if(v&&!f.has(n.texture)){const{image:e,params:t}=v,r=new Xt(e,t);a.push(r),f.set(n.texture,r)}const g=f.get(n.texture),x=g?g.id:void 0;let b=o[n.material]?o[n.material][n.texture]:null;if(!b){const e=d[n.material.substring(n.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=v&&v.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,a=v?Uo(v.alphaChannelUsage):void 0,s={ambient:he(e.diffuse),diffuse:he(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:a,textureAlphaCutoff:.33,textureId:x,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!v&&!!v.params.preMultiplyAlpha};C(t)&&t.materialParamsMixin&&Object.assign(s,t.materialParamsMixin),b=new So(s),o[n.material]||(o[n.material]={}),o[n.material][n.texture]=b}i.push(b);const T=new Ft(l,h);m+=h.position?h.position.length:0,r.push(T)}return{name:l,stageResources:{textures:a,materials:i,geometries:r},pivotOffset:n.model.pivotOffset,boundingBox:Vo(r),numberOfVertices:m,lodThreshold:null}}(e,t);return{lods:[i],referenceBoundingBox:i.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const i=await(t.cache?t.cache.loadGLTF(r.url,t,t.usePBR):ke(new $e(t.streamDataRequester),r.url,t,t.usePBR)),o=xe(i.model.meta,"ESRI_proxyEllipsoid");i.meta.isEsriSymbolResource&&C(o)&&-1!==i.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let r=0;r<e.model.lods.length;++r){const i=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const o of i.parts){const i=o.attributes.normal;if(v(i))return;const a=o.attributes.position,n=a.count,s=d(),l=d(),c=d(),u=qe(Fe,n),m=qe(Ee,n),p=Te(we(),o.transform);for(let d=0;d<n;d++){a.getVec(d,l),i.getVec(d,s),Q(l,l,o.transform),$(c,l,t.center),ye(c,c,t.radius);const n=c[2],h=q(c),v=Math.min(.45+.55*h*h,1);ye(c,c,t.radius),Q(c,c,p),H(c,c),r+1!==e.model.lods.length&&e.model.lods.length>1&&f(c,c,s,n>-1?.2:Math.min(-4*n-3.8,1)),m.setVec(d,c),u.set(d,0,255*v),u.set(d,1,255*v),u.set(d,2,255*v),u.set(d,3,255)}o.attributes.normal=m,o.attributes.color=u}}}(i,o);const a=i.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:i.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},n=l(s({},t.materialParamsMixin),{treeRendering:i.customMeta.esriTreeRendering});if(null!=r.specifiedLodIndex){const e=Wo(i,a,n,r.specifiedLodIndex);let t=e[0].boundingBox;return 0!==r.specifiedLodIndex&&(t=Wo(i,a,n,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1,remove:i.remove}}const c=Wo(i,a,n);return{lods:c,referenceBoundingBox:c[0].boundingBox,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1,remove:i.remove}},gltfToEngineResources:Wo,parseUrl:$o});export{vo as P,yo as j,qo as o};
