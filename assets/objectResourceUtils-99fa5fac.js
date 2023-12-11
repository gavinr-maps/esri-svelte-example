import{a as Wa}from"./devEnvironmentUtils-4eab2a99.js";import{e$ as Ao,e_ as ka,gm as qa,g4 as Mo,eQ as U,cS as xe,cR as Te,ky as Ya,ci as P,hq as Re,kz as Xa,kA as Ja,kB as nr,eg as tt,D as Kr,_ as Et,eu as Za,s as Rr,E as Yt,eG as Ka,dp as Qr,aq as Qa,f0 as ct,j3 as dt,aB as eo,kC as ei,f_ as ti,g1 as ri,eh as Gt,iK as oi,g3 as rt,gF as Fe,e7 as ai,js as ii,bI as ni,kD as si,kE as li,cx as ci,cz as Or,ap as di,hu as ui,cj as Ye,f8 as he,f9 as ke,fa as to,f5 as ro,f6 as hi,kF as mi,f4 as zt,kG as Ro,kH as Oo,c7 as pi,cT as fi,hY as Xt,cP as Xe,j0 as vr,f as m,gM as gr,cn as se,g as k,j as Io,a5 as Lo,gP as vi,fy as Ir,eT as Qe,k as gi,fk as xi,d4 as Ti,hQ as xr,cO as _i,cw as bi,eR as Ei,x as Si,kI as yi,aA as $o,H as Ci,aG as Po,kJ as No,gV as Vt,hS as wi,jt as oo,gi as Ai}from"./index-27db053b.js";import{e as Jt}from"./mat3f64-221ce671.js";import{o as Ut,r as Mi,e as Zt}from"./mat4f64-1413b4a7.js";import{x as Kt,c as Tr,y as Ri,u as Oi,q as Ii,i as Ht,L as Li,O as $i,E as Pi}from"./BufferView-3e8730e9.js";import{r as Ni,n as Di,u as ao}from"./vec32-c805d126.js";import{l as Fi,n as Bi,i as je,o as Gi,j as zi,k as Vi,u as io,t as Ui,m as Hi}from"./DefaultMaterial_COLOR_GAMMA-89f60b70.js";import{r as sr}from"./resourceUtils-84f6af6b.js";import{t as ji}from"./NestedMap-1b5db22e.js";import{r as Do}from"./Version-3276c9a1.js";import{t as Wi,s as Y,l as Fo}from"./Indices-28981df2.js";import{t as Bo}from"./requestImageUtils-6a56b5fe.js";import{t as ki,u as ft,a as _r,i as qi,N as Oe,s as J,e as Ie,n as St}from"./basicInterfaces-11f56cb3.js";import{w as Yi,e as Ge,o as Xi}from"./triangle-e4da7c55.js";import{e as p}from"./VertexAttribute-0e674613.js";import{c as Ae,G as me,L as _e,D as ie,E as Ji,O as Le,I as de,P as yt,U as Qt,B as lr,_ as Zi}from"./enums-bdecffa2.js";import{T as Je,E as Ki,e as be,b as Qi}from"./Texture-4e3bcd4f.js";import{H as en}from"./InterleavedLayout-b972f7ee.js";import{o as s,n as Ct,S as Lr,_ as $r,a as et,c as tn,A as rn,h as on,l as an,b as nn,d as sn,e as ln}from"./OrderIndependentTransparency-6ae10952.js";import{E as Go}from"./sphere-ea5142e2.js";import{H as cn,e as dn,n as Ce}from"./orientedBoundingBox-d4a2eb61.js";import{n as Pr,r as Nr}from"./vec4f64-3c9d0901.js";import{o as un,r as hn}from"./doublePrecisionUtils-e3c3d0d8.js";import"./lengthUtils-535759c3.js";import"./LRUCache-016147c2.js";import{a as cr}from"./FramebufferObject-799c8348.js";import"./RenderState-1d6218ee.js";let mn=class{constructor(e,r,o=r){this.data=e,this.size=r,this.stride=o}},We=class extends mn{constructor(e,r,o,i=!1,a=o){super(e,o,a),this.indices=r,this.exclusive=i}};function pn(t){if(t.length<Ao)return Array.from(t);if(ka(t))return Float64Array.from(t);if(!("BYTES_PER_ELEMENT"in t))return Array.from(t);switch(t.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(t);case 2:return qa(t)?Uint16Array.from(t):Int16Array.from(t);case 4:return Float32Array.from(t);default:return Float64Array.from(t)}}let Dr=class{constructor(){this.id=Mo()}};function fn(t,e){if(!t)return!1;const{size:r,data:o,indices:i}=t;U(e,0,0,0),U(le,0,0,0);let a=0,n=0;for(let l=0;l<i.length-2;l+=3){const c=i[l]*r,u=i[l+1]*r,d=i[l+2]*r;U(X,o[c],o[c+1],o[c+2]),U(we,o[u],o[u+1],o[u+2]),U(wt,o[d],o[d+1],o[d+2]);const h=Yi(X,we,wt);h?(xe(X,X,we),xe(X,X,wt),Te(X,X,1/3*h),xe(e,e,X),a+=h):(xe(le,le,X),xe(le,le,we),xe(le,le,wt),n+=3)}return(n!==0||a!==0)&&(a!==0?(Te(e,e,1/a),!0):n!==0&&(Te(e,le,1/n),!0))}function vn(t,e){if(!t)return!1;const{size:r,data:o,indices:i}=t;U(e,0,0,0);let a=-1,n=0;for(let l=0;l<i.length;l++){const c=i[l]*r;a!==c&&(e[0]+=o[c],e[1]+=o[c+1],e[2]+=o[c+2],n++),a=c}return n>1&&Te(e,e,1/n),n>0}function gn(t,e,r){if(!t)return!1;U(r,0,0,0),U(le,0,0,0);let o=0,i=0;const{size:a,data:n,indices:l}=t,c=l.length-1,u=c+(e?2:0);for(let d=0;d<u;d+=2){const h=d<c?d+1:0,f=l[d<c?d:c]*a,v=l[h]*a;X[0]=n[f],X[1]=n[f+1],X[2]=n[f+2],we[0]=n[v],we[1]=n[v+1],we[2]=n[v+2],Te(X,xe(X,X,we),.5);const T=Ya(X,we);T>0?(xe(r,r,Te(X,X,T)),o+=T):o===0&&(xe(le,le,X),i++)}return o!==0?(Te(r,r,1/o),!0):i!==0&&(Te(r,le,1/i),!0)}const X=P(),we=P(),wt=P(),le=P();let xn=class{constructor(e){this.channel=e,this.id=Mo()}};function Tn(t,e){return t==null&&(t=[]),t.push(e),t}function _n(t,e){if(t==null)return null;const r=t.filter(o=>o!==e);return r.length===0?null:r}let zo=class Vo extends Dr{constructor(e,r,o=null,i=Ge.Mesh,a=null,n=-1){super(),this.material=e,this.mapPositions=o,this.type=i,this.objectAndLayerIdColor=a,this.edgeIndicesLength=n,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[l,c]of r)this._attributes.set(l,{...c,indices:Wi(c.indices)}),l===p.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(l).indices.length:this.edgeIndicesLength)}instantiate(e={}){const r=new Vo(e.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach((o,i)=>{o.exclusive=!1,r._attributes.set(i,o)}),r._boundingInfo=this._boundingInfo,r.transformation=e.transformation||this.transformation,r}get attributes(){return this._attributes}getMutableAttribute(e){let r=this._attributes.get(e);return r&&!r.exclusive&&(r={...r,exclusive:!0,data:pn(r.data)},this._attributes.set(e,r)),r}setAttributeData(e,r){const o=this._attributes.get(e);o&&this._attributes.set(e,{...o,exclusive:!0,data:r})}get indexCount(){const e=this._attributes.values().next().value.indices;return(e==null?void 0:e.length)??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return this._boundingInfo==null&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===Ge.Mesh?this._computeAttachmentOriginTriangles(e):this.type===Ge.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(this._transformation!=null&&Re(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){const r=this.attributes.get(p.POSITION);return fn(r,e)}_computeAttachmentOriginLines(e){const r=this.attributes.get(p.POSITION);return gn(r,bn(this.material.parameters,r),e)}_computeAttachmentOriginPoints(e){const r=this.attributes.get(p.POSITION);return vn(r,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.attributes.get(p.POSITION);if(!e||e.indices.length===0)return null;const r=this.type===Ge.Mesh?3:1;Y(e.indices.length%r==0,"Indexing error: "+e.indices.length+" not divisible by "+r);const o=Fo(e.indices.length/r);return new Xi(o,r,e)}get transformation(){return this._transformation??Ut}set transformation(e){this._transformation=e&&e!==Ut?Mi(e):null}addHighlight(){const e=new xn(ki.Highlight);return this.highlights=Tn(this.highlights,e),e}removeHighlight(e){this.highlights=_n(this.highlights,e)}};function bn(t,e){return!(!("isClosed"in t)||!t.isClosed)&&e.indices.length>2}function At(t,e=!1){return t<=Ao?e?new Array(t).fill(0):new Array(t):new Float32Array(t)}function st(t){if(t==null)return null;const e=t.offset!=null?t.offset:Xa,r=t.rotation!=null?t.rotation:0,o=t.scale!=null?t.scale:Ja,i=nr(1,0,0,0,1,0,e[0],e[1],1),a=nr(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),n=nr(o[0],0,0,0,o[1],0,0,0,1),l=tt();return Kr(l,a,n),Kr(l,i,l),l}let En=class{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}},Sn=class{constructor(e,r,o){this.name=e,this.lodThreshold=r,this.pivotOffset=o,this.stageResources=new En,this.numberOfVertices=0}};function yn(){if(dr==null){const t=e=>Za(`esri/libs/basisu/${e}`);dr=Et(()=>import("./basis_transcoder-c3709e02.js"),["./basis_transcoder-c3709e02.js","./index-27db053b.js","./index-5ad293c9.css"],import.meta.url).then(e=>e.b).then(({default:e})=>e({locateFile:t}).then(r=>(r.initializeBasis(),delete r.then,r)))}return dr}let dr;var Be;(function(t){t[t.ETC1_RGB=0]="ETC1_RGB",t[t.ETC2_RGBA=1]="ETC2_RGBA",t[t.BC1_RGB=2]="BC1_RGB",t[t.BC3_RGBA=3]="BC3_RGBA",t[t.BC4_R=4]="BC4_R",t[t.BC5_RG=5]="BC5_RG",t[t.BC7_M6_RGB=6]="BC7_M6_RGB",t[t.BC7_M5_RGBA=7]="BC7_M5_RGBA",t[t.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",t[t.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",t[t.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",t[t.ATC_RGB=11]="ATC_RGB",t[t.ATC_RGBA=12]="ATC_RGBA",t[t.FXT1_RGB=17]="FXT1_RGB",t[t.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",t[t.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",t[t.ETC2_EAC_R11=20]="ETC2_EAC_R11",t[t.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",t[t.RGBA32=13]="RGBA32",t[t.RGB565=14]="RGB565",t[t.BGR565=15]="BGR565",t[t.RGBA4444=16]="RGBA4444"})(Be||(Be={}));let pe=null,Mt=null;async function Uo(){return Mt==null&&(Mt=yn(),pe=await Mt),Mt}function Cn(t,e){if(pe==null)return t.byteLength;const r=new pe.BasisFile(new Uint8Array(t)),o=jo(r)?Ho(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),e):0;return r.close(),r.delete(),o}function wn(t,e){if(pe==null)return t.byteLength;const r=new pe.KTX2File(new Uint8Array(t)),o=Wo(r)?Ho(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),e):0;return r.close(),r.delete(),o}function Ho(t,e,r,o,i){const a=Ki(e?Ae.COMPRESSED_RGBA8_ETC2_EAC:Ae.COMPRESSED_RGB8_ETC2),n=i&&t>1?(4**t-1)/(3*4**(t-1)):1;return Math.ceil(r*o*a*n)}function jo(t){return t.getNumImages()>=1&&!t.isUASTC()}function Wo(t){return t.getFaces()>=1&&t.isETC1S()}async function An(t,e,r){pe==null&&(pe=await Uo());const o=new pe.BasisFile(new Uint8Array(r));if(!jo(o))return null;o.startTranscoding();const i=ko(t,e,o.getNumLevels(0),o.getHasAlpha(),o.getImageWidth(0,0),o.getImageHeight(0,0),(a,n)=>o.getImageTranscodedSizeInBytes(0,a,n),(a,n,l)=>o.transcodeImage(l,0,a,n,0,0));return o.close(),o.delete(),i}async function Mn(t,e,r){pe==null&&(pe=await Uo());const o=new pe.KTX2File(new Uint8Array(r));if(!Wo(o))return null;o.startTranscoding();const i=ko(t,e,o.getLevels(),o.getHasAlpha(),o.getWidth(),o.getHeight(),(a,n)=>o.getImageTranscodedSizeInBytes(a,0,0,n),(a,n,l)=>o.transcodeImage(l,a,0,0,n,0,-1,-1));return o.close(),o.delete(),i}function ko(t,e,r,o,i,a,n,l){const{compressedTextureETC:c,compressedTextureS3TC:u}=t.capabilities,[d,h]=c?o?[Be.ETC2_RGBA,Ae.COMPRESSED_RGBA8_ETC2_EAC]:[Be.ETC1_RGB,Ae.COMPRESSED_RGB8_ETC2]:u?o?[Be.BC3_RGBA,Ae.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[Be.BC1_RGB,Ae.COMPRESSED_RGB_S3TC_DXT1_EXT]:[Be.RGBA32,me.RGBA],f=e.hasMipmap?r:Math.min(1,r),v=[];for(let T=0;T<f;T++)v.push(new Uint8Array(n(T,d))),l(T,d,v[T]);return e.internalFormat=h,e.hasMipmap=v.length>1,e.samplingMode=e.hasMipmap?_e.LINEAR_MIPMAP_LINEAR:_e.LINEAR,e.width=i,e.height=a,new Je(t,e,{type:"compressed",levels:v})}const Rt=Rr.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),Rn=542327876,On=131072,In=4;function Fr(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function Ln(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const $n=Fr("DXT1"),Pn=Fr("DXT3"),Nn=Fr("DXT5"),Dn=31,Fn=0,Bn=1,Gn=2,zn=3,Vn=4,Un=7,Hn=20,jn=21;function Wn(t,e,r){const o=kn(r,e.hasMipmap??!1);if(o==null)throw new Error("DDS texture data is null");const{textureData:i,internalFormat:a,width:n,height:l}=o;return e.samplingMode=i.levels.length>1?_e.LINEAR_MIPMAP_LINEAR:_e.LINEAR,e.hasMipmap=i.levels.length>1,e.internalFormat=a,e.width=n,e.height=l,new Je(t,e,i)}function kn(t,e){const r=new Int32Array(t,0,Dn);if(r[Fn]!==Rn)return Rt.error("Invalid magic number in DDS header"),null;if(!(r[Hn]&In))return Rt.error("Unsupported format, must contain a FourCC code"),null;const o=r[jn];let i,a;switch(o){case $n:i=8,a=Ae.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Pn:i=16,a=Ae.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Nn:i=16,a=Ae.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Rt.error("Unsupported FourCC code:",Ln(o)),null}let n=1,l=r[Vn],c=r[zn];!(3&l)&&!(3&c)||(Rt.warn("Rounding up compressed texture size to nearest multiple of 4."),l=l+3&-4,c=c+3&-4);const u=l,d=c;let h,f;r[Gn]&On&&e!==!1&&(n=Math.max(1,r[Un]));let v=r[Bn]+4;const T=[];for(let R=0;R<n;++R)f=(l+3>>2)*(c+3>>2)*i,h=new Uint8Array(t,v,f),T.push(h),v+=f,l=Math.max(1,l>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:T},internalFormat:a,width:u,height:d}}function qn(t,e){let a=t.width*t.height;if(a<4096)return t instanceof ImageData?qo(t):t;let n=t.width,l=t.height;do n=Math.ceil(n/2),l=Math.ceil(l/2),a=n*l;while(a>1048576||e!=null&&(n>e||l>e));return Br(t,n,l)}function Yn(t,e){const r=Math.max(t.width,t.height);if(r<=e)return t;const o=e/r;return Br(t,Math.round(t.width*o),Math.round(t.height*o))}function Br(t,e,r){if(t instanceof ImageData)return Br(qo(t),e,r);const o=document.createElement("canvas");return o.width=e,o.height=r,o.getContext("2d").drawImage(t,0,0,o.width,o.height),o}function qo(t){const e=document.createElement("canvas");e.width=t.width,e.height=t.height;const r=e.getContext("2d");if(r==null)throw new Yt("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(t,0,0),e}let Yo=class extends Dr{get parameters(){return this._parameters}constructor(e,r){super(),this._data=e,this.type=Ge.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new Ka,this._parameters={...Jn,...r},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){e!=null&&(e instanceof HTMLVideoElement?(this.frameUpdate=r=>this._frameUpdate(e,r),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!(Qr(e.src)||e.preload==="auto"&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const r=!e.paused;if(e.src=e.src,r&&e.autoplay){const o=()=>{e.removeEventListener("canplay",o),e.play()};e.addEventListener("canplay",o)}}}_startPreloadImageElement(e){Qa(e.src)||Qr(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const r=new be;return r.wrapMode=this._parameters.wrap??ie.REPEAT,r.flipped=!this._parameters.noUnpackFlip,r.samplingMode=this._parameters.mipmap?_e.LINEAR_MIPMAP_LINEAR:_e.LINEAR,r.hasMipmap=!!this._parameters.mipmap,r.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,r.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),r}get glTexture(){return this._glTexture}get memoryEstimate(){var e;return((e=this._glTexture)==null?void 0:e.gpuMemoryUsage)||Xn(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const r=this._data;return r==null?(this._glTexture=new Je(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),typeof r=="string"?this._loadFromURL(e,r):r instanceof Image?this._loadFromImageElement(e,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(e,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(e,r):(ct(r)||dt(r))&&this._parameters.encoding===ft.DDS_ENCODING?this._loadFromDDSData(e,r):(ct(r)||dt(r))&&this._parameters.encoding===ft.KTX2_ENCODING?this._loadFromKTX2(e,r):(ct(r)||dt(r))&&this._parameters.encoding===ft.BASIS_ENCODING?this._loadFromBasis(e,r):dt(r)?this._loadFromPixelData(e,r):ct(r)?this._loadFromPixelData(e,new Uint8Array(r)):null)}_frameUpdate(e,r){return this._glTexture==null||e.readyState<vt.HAVE_CURRENT_DATA||r===e.currentTime?r:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,r){return this._glTexture=Wn(e,this._createDescriptor(e),r),this._glTexture}_loadFromKTX2(e,r){return this._loadAsync(()=>Mn(e,this._createDescriptor(e),r).then(o=>(this._glTexture=o,o)))}_loadFromBasis(e,r){return this._loadAsync(()=>An(e,this._createDescriptor(e),r).then(o=>(this._glTexture=o,o)))}_loadFromPixelData(e,r){Y(this._parameters.width>0&&this._parameters.height>0);const o=this._createDescriptor(e);return o.pixelFormat=this._parameters.components===1?me.LUMINANCE:this._parameters.components===3?me.RGB:me.RGBA,o.width=this._parameters.width??0,o.height=this._parameters.height??0,this._glTexture=new Je(e,o,r),this._glTexture}_loadFromURL(e,r){return this._loadAsync(async o=>{const i=await Bo(r,{signal:o});return eo(o),this._loadFromImage(e,i)})}_loadFromImageElement(e,r){return r.complete?this._loadFromImage(e,r):this._loadAsync(async o=>{const i=await ei(r,r.src,!1,o);return eo(o),this._loadFromImage(e,i)})}_loadFromVideoElement(e,r){return r.readyState>=vt.HAVE_CURRENT_DATA?this._loadFromImage(e,r):this._loadFromVideoElementAsync(e,r)}_loadFromVideoElementAsync(e,r){return this._loadAsync(o=>new Promise((i,a)=>{const n=()=>{r.removeEventListener("loadeddata",l),r.removeEventListener("error",c),oi(u)},l=()=>{r.readyState>=vt.HAVE_CURRENT_DATA&&(n(),i(this._loadFromImage(e,r)))},c=d=>{n(),a(d||new Yt("Failed to load video"))};r.addEventListener("loadeddata",l),r.addEventListener("error",c);const u=ti(o,()=>c(ri()))}))}_loadFromImage(e,r){let o=r;if(!(o instanceof HTMLVideoElement)){const{maxTextureSize:n}=e.parameters;o=this._parameters.downsampleUncompressed?qn(o,n):Yn(o,n)}const i=Xo(o);this._parameters.width=i.width,this._parameters.height=i.height;const a=this._createDescriptor(e);return a.pixelFormat=this._parameters.components===3?me.RGB:me.RGBA,a.width=i.width,a.height=i.height,this._glTexture=new Je(e,a,o),this._glTexture}_loadAsync(e){const r=new AbortController;this._loadingController=r;const o=e(r.signal);this._loadingPromise=o;const i=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===o&&(this._loadingPromise=null)};return o.then(i,i),o}unload(){if(this._glTexture=Gt(this._glTexture),this._loadingController!=null){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}};function Xn(t,e){if(t==null)return 0;if(ct(t)||dt(t))return e.encoding===ft.KTX2_ENCODING?wn(t,!!e.mipmap):e.encoding===ft.BASIS_ENCODING?Cn(t,!!e.mipmap):t.byteLength;const{width:r,height:o}=t instanceof Image||t instanceof ImageData||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?Xo(t):e;return(e.mipmap?4/3:1)*r*o*(e.components||4)||0}function Xo(t){return t instanceof HTMLVideoElement?{width:t.videoWidth,height:t.videoHeight}:t}var vt;(function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"})(vt||(vt={}));const Jn={wrap:{s:ie.REPEAT,t:ie.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};var x;(function(t){t[t.Color=0]="Color",t[t.Depth=1]="Depth",t[t.Normal=2]="Normal",t[t.Shadow=3]="Shadow",t[t.ShadowHighlight=4]="ShadowHighlight",t[t.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",t[t.Highlight=6]="Highlight",t[t.Alpha=7]="Alpha",t[t.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",t[t.CompositeColor=9]="CompositeColor",t[t.COUNT=10]="COUNT"})(x||(x={}));function er(t,e){switch(e.normalType){case H.Compressed:t.attributes.add(p.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(s`vec3 normalModel() {
float z = 1.0 - abs(normalCompressed.x) - abs(normalCompressed.y);
return vec3(normalCompressed + sign(normalCompressed) * min(z, 0.0), z);
}`);break;case H.Attribute:t.attributes.add(p.NORMAL,"vec3"),t.vertex.code.add(s`vec3 normalModel() {
return normal;
}`);break;case H.ScreenDerivative:t.fragment.code.add(s`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:rt(e.normalType);case H.COUNT:case H.Ground:}}var H;(function(t){t[t.Attribute=0]="Attribute",t[t.Compressed=1]="Compressed",t[t.Ground=2]="Ground",t[t.ScreenDerivative=3]="ScreenDerivative",t[t.COUNT=4]="COUNT"})(H||(H={}));function Zn(t,e){const r=t.fragment;switch(r.code.add(s`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case oe.None:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case oe.View:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case oe.WindingOrder:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:rt(e.doubleSidedMode);case oe.COUNT:}}var oe;(function(t){t[t.None=0]="None",t[t.View=1]="View",t[t.WindingOrder=2]="WindingOrder",t[t.COUNT=3]="COUNT"})(oe||(oe={}));var ee;function Ze(t,e){switch(e.textureCoordinateType){case ee.Default:return t.attributes.add(p.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case ee.Compressed:return t.attributes.add(p.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(s`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case ee.Atlas:return t.attributes.add(p.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add(p.UVREGION,"vec4"),t.varyings.add("vuvRegion","vec4"),void t.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:rt(e.textureCoordinateType);case ee.None:return void t.vertex.code.add(s`void forwardTextureCoordinates() {}`);case ee.COUNT:return}}(function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Atlas=2]="Atlas",t[t.Compressed=3]="Compressed",t[t.COUNT=4]="COUNT"})(ee||(ee={}));function Kn(t){t.fragment.code.add(s`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function Jo(t,e){switch(t.include(Ze,e),e.textureCoordinateType){case ee.Default:case ee.Compressed:return void t.fragment.code.add(s`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case ee.Atlas:return t.include(Kn),void t.fragment.code.add(s`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:rt(e.textureCoordinateType);case ee.None:case ee.COUNT:return}}var $;(function(t){t[t.Pass=0]="Pass",t[t.Draw=1]="Draw"})($||($={}));let Q=class{constructor(e,r,o,i,a=null){if(this.name=e,this.type=r,this.arraySize=a,this.bind={[$.Pass]:null,[$.Draw]:null},i)switch(o){case $.Pass:this.bind[$.Pass]=i;break;case $.Draw:this.bind[$.Draw]=i}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}},fe=class extends Q{constructor(e,r){super(e,"vec3",$.Draw,(o,i,a,n)=>o.setUniform3fv(e,r(i,a,n)))}},Z=class extends Q{constructor(e,r){super(e,"vec3",$.Pass,(o,i,a)=>o.setUniform3fv(e,r(i,a)))}},gt=class extends Q{constructor(e,r){super(e,"sampler2D",$.Draw,(o,i,a)=>o.bindTexture(e,r(i,a)))}},K=class extends Q{constructor(e,r){super(e,"sampler2D",$.Pass,(o,i,a)=>o.bindTexture(e,r(i,a)))}},Qn=class{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}get _markerTextureRepository(){return this._techniqueRepository.constructionContext.markerTextureRepository}ensureTechnique(e,r){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,r),this._technique),this._technique}ensureResources(e){return _r.LOADED}},es=class extends Qn{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRepository,this._textureId=e.textureId,this._acquire(e.textureId,r=>this._texture=r),this._acquire(e.normalTextureId,r=>this._textureNormal=r),this._acquire(e.emissiveTextureId,r=>this._textureEmissive=r),this._acquire(e.occlusionTextureId,r=>this._textureOcclusion=r),this._acquire(e.metallicRoughnessTextureId,r=>this._textureMetallicRoughness=r)}dispose(){this._texture=Fe(this._texture),this._textureNormal=Fe(this._textureNormal),this._textureEmissive=Fe(this._textureEmissive),this._textureOcclusion=Fe(this._textureOcclusion),this._textureMetallicRoughness=Fe(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?_r.LOADED:_r.LOADING}get textureBindParameters(){return new ts(this._texture!=null?this._texture.glTexture:null,this._textureNormal!=null?this._textureNormal.glTexture:null,this._textureEmissive!=null?this._textureEmissive.glTexture:null,this._textureOcclusion!=null?this._textureOcclusion.glTexture:null,this._textureMetallicRoughness!=null?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){this._texture!=null&&e===this._texture.id||(this._texture=Fe(this._texture),this._textureId=e,this._acquire(this._textureId,r=>this._texture=r))}_acquire(e,r){if(e==null)return void r(null);const o=this._textureRepository.acquire(e);if(ai(o))return++this._numLoading,void o.then(i=>{if(this._disposed)return Fe(i),void r(null);r(i)}).finally(()=>--this._numLoading);r(o)}},ts=class extends Ct{constructor(e=null,r=null,o=null,i=null,a=null){super(),this.texture=e,this.textureNormal=r,this.textureEmissive=o,this.textureOcclusion=i,this.textureMetallicRoughness=a}};var M;(function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.Terrain=5]="Terrain",t[t.TerrainWithWater=6]="TerrainWithWater",t[t.COUNT=7]="COUNT"})(M||(M={}));function Zo(t,e){const r=t.fragment,o=e.hasMetallicRoughnessTexture||e.hasEmissionTexture||e.hasOcclusionTexture;if(e.pbrMode===M.Normal&&o&&t.include(Jo,e),e.pbrMode!==M.Schematic)if(e.pbrMode!==M.Disabled){if(e.pbrMode===M.Normal){r.code.add(s`vec3 mrr;
vec3 emission;
float occlusion;`);const i=e.pbrTextureBindType;e.hasMetallicRoughnessTexture&&(r.uniforms.add(i===$.Pass?new K("texMetallicRoughness",a=>a.textureMetallicRoughness):new gt("texMetallicRoughness",a=>a.textureMetallicRoughness)),r.code.add(s`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),e.hasEmissionTexture&&(r.uniforms.add(i===$.Pass?new K("texEmission",a=>a.textureEmissive):new gt("texEmission",a=>a.textureEmissive)),r.code.add(s`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),e.hasOcclusionTexture?(r.uniforms.add(i===$.Pass?new K("texOcclusion",a=>a.textureOcclusion):new gt("texOcclusion",a=>a.textureOcclusion)),r.code.add(s`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(s`float getBakedOcclusion() { return 1.0; }`),i===$.Pass?r.uniforms.add(new Z("emissionFactor",a=>a.emissiveFactor),new Z("mrrFactors",a=>a.mrrFactors)):r.uniforms.add(new fe("emissionFactor",a=>a.emissiveFactor),new fe("mrrFactors",a=>a.mrrFactors)),r.code.add(s`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${e.hasMetallicRoughnessTexture?s`applyMetallnessAndRoughness(${e.hasMetallicRoughnessTextureTransform?s`metallicRoughnessUV`:"vuv0"});`:""}

      ${e.hasEmissionTexture?s`applyEmission(${e.hasEmissiveTextureTransform?s`emissiveUV`:"vuv0"});`:""}

      ${e.hasOcclusionTexture?s`applyOcclusion(${e.hasOcclusionTextureTransform?s`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(s`float getBakedOcclusion() { return 1.0; }`);else r.code.add(s`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}const tr=new Map([[p.POSITION,0],[p.NORMAL,1],[p.NORMALCOMPRESSED,1],[p.UV0,2],[p.COLOR,3],[p.COLORFEATUREATTRIBUTE,3],[p.SIZE,4],[p.TANGENT,4],[p.AUXPOS1,5],[p.SYMBOLCOLOR,5],[p.AUXPOS2,6],[p.FEATUREATTRIBUTE,6],[p.INSTANCEFEATUREATTRIBUTE,6],[p.INSTANCECOLOR,7],[p.OBJECTANDLAYERIDCOLOR,7],[p.INSTANCEOBJECTANDLAYERIDCOLOR,7],[p.INSTANCEMODEL,8],[p.INSTANCEMODELNORMAL,12],[p.INSTANCEMODELORIGINHI,11],[p.INSTANCEMODELORIGINLO,15]]);function rs(t){return Math.abs(t*t*t)}function os(t,e,r){const o=r.parameters;return ur.scale=Math.min(o.divisor/(e-o.offset),1),ur.factor=rs(t),ur}function as(t,e){return ii(t*Math.max(e.scale,e.minScaleFactor),t,e.factor)}function is(t,e,r,o){return as(t,os(e,r,o))}const ur={scale:0,factor:0,minScaleFactor:0},Ot=ni();function ns(t,e,r,o,i,a){if(t.visible)if(t.boundingInfo){Y(t.type===Ge.Mesh);const n=e.tolerance;Ko(t.boundingInfo,r,o,n,i,a)}else{const n=t.attributes.get(p.POSITION),l=n.indices;ea(r,o,0,l.length/3,l,n,void 0,i,a)}}const ss=P();function Ko(t,e,r,o,i,a){if(t==null)return;const n=cs(e,r,ss);if(si(Ot,t.bbMin),li(Ot,t.bbMax),i!=null&&i.applyToAabb(Ot),ds(Ot,e,n,o)){const{primitiveIndices:l,position:c}=t,u=l?l.length:c.indices.length/3;if(u>vs){const d=t.getChildren();if(d!==void 0){for(const h of d)Ko(h,e,r,o,i,a);return}}ea(e,r,0,u,c.indices,c,l,i,a)}}const Qo=P();function ea(t,e,r,o,i,a,n,l,c){if(n)return ls(t,e,r,o,i,a,n,l,c);const{data:u,stride:d}=a,h=t[0],f=t[1],v=t[2],T=e[0]-h,R=e[1]-f,D=e[2]-v;for(let O=r,z=3*r;O<o;++O){let C=d*i[z++],L=u[C++],B=u[C++],G=u[C];C=d*i[z++];let w=u[C++],E=u[C++],b=u[C];C=d*i[z++];let A=u[C++],S=u[C++],N=u[C];l!=null&&([L,B,G]=l.applyToVertex(L,B,G,O),[w,E,b]=l.applyToVertex(w,E,b,O),[A,S,N]=l.applyToVertex(A,S,N,O));const y=w-L,j=E-B,I=b-G,F=A-L,V=S-B,ae=N-G,ve=R*ae-V*D,ot=D*F-ae*T,at=T*V-F*R,ue=y*ve+j*ot+I*at;if(Math.abs(ue)<=Number.EPSILON)continue;const ne=h-L,$e=f-B,Pe=v-G,ge=ne*ve+$e*ot+Pe*at;if(ue>0){if(ge<0||ge>ue)continue}else if(ge>0||ge<ue)continue;const Ee=$e*I-j*Pe,it=Pe*y-I*ne,nt=ne*j-y*$e,Ne=T*Ee+R*it+D*nt;if(ue>0){if(Ne<0||ge+Ne>ue)continue}else if(Ne>0||ge+Ne<ue)continue;const De=(F*Ee+V*it+ae*nt)/ue;De>=0&&c(De,ta(y,j,I,F,V,ae,Qo),O,!1)}}function ls(t,e,r,o,i,a,n,l,c){const{data:u,stride:d}=a,h=t[0],f=t[1],v=t[2],T=e[0]-h,R=e[1]-f,D=e[2]-v;for(let O=r;O<o;++O){const z=n[O];let C=3*z,L=d*i[C++],B=u[L++],G=u[L++],w=u[L];L=d*i[C++];let E=u[L++],b=u[L++],A=u[L];L=d*i[C];let S=u[L++],N=u[L++],y=u[L];l!=null&&([B,G,w]=l.applyToVertex(B,G,w,O),[E,b,A]=l.applyToVertex(E,b,A,O),[S,N,y]=l.applyToVertex(S,N,y,O));const j=E-B,I=b-G,F=A-w,V=S-B,ae=N-G,ve=y-w,ot=R*ve-ae*D,at=D*V-ve*T,ue=T*ae-V*R,ne=j*ot+I*at+F*ue;if(Math.abs(ne)<=Number.EPSILON)continue;const $e=h-B,Pe=f-G,ge=v-w,Ee=$e*ot+Pe*at+ge*ue;if(ne>0){if(Ee<0||Ee>ne)continue}else if(Ee>0||Ee<ne)continue;const it=Pe*F-I*ge,nt=ge*j-F*$e,Ne=$e*I-j*Pe,De=T*it+R*nt+D*Ne;if(ne>0){if(De<0||Ee+De>ne)continue}else if(De>0||Ee+De<ne)continue;const Zr=(V*it+ae*nt+ve*Ne)/ne;Zr>=0&&c(Zr,ta(j,I,F,V,ae,ve,Qo),z,!1)}}const no=P(),so=P();function ta(t,e,r,o,i,a,n){return U(no,t,e,r),U(so,o,i,a),ci(n,no,so),Or(n,n),n}function cs(t,e,r){return U(r,1/(e[0]-t[0]),1/(e[1]-t[1]),1/(e[2]-t[2]))}function ds(t,e,r,o){return us(t,e,r,o,1/0)}function us(t,e,r,o,i){const a=(t[0]-o-e[0])*r[0],n=(t[3]+o-e[0])*r[0];let l=Math.min(a,n),c=Math.max(a,n);const u=(t[1]-o-e[1])*r[1],d=(t[4]+o-e[1])*r[1];if(c=Math.min(c,Math.max(u,d)),c<0||(l=Math.max(l,Math.min(u,d)),l>c))return!1;const h=(t[2]-o-e[2])*r[2],f=(t[5]+o-e[2])*r[2];return c=Math.min(c,Math.max(h,f)),!(c<0)&&(l=Math.max(l,Math.min(h,f)),!(l>c)&&l<i)}function hs(t,e,r,o,i){let a=(r.screenLength||0)*t.pixelRatio;i!=null&&(a=is(a,o,e,i));const n=a*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return di(n*e,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function ra(t,e){const r=e?ra(e):{};for(const o in t){let i=t[o];i!=null&&i.forEach&&(i=ps(i)),i==null&&o in r||(r[o]=i)}return r}function ms(t,e){let r=!1;for(const o in e){const i=e[o];i!==void 0&&(Array.isArray(i)?t[o]===null?(t[o]=i.slice(),r=!0):ui(t[o],i)&&(r=!0):t[o]!==i&&(r=!0,t[o]=i))}return r}function ps(t){const e=[];return t.forEach(r=>e.push(r)),e}const fs={multiply:1,ignore:2,replace:3,tint:4},vs=1e3;let gs=class extends Dr{constructor(e,r){super(),this.type=Ge.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._vertexAttributeLocations=tr,this._pp0=Ye(0,0,1),this._pp1=Ye(0,0,0),this._parameters=ra(e,r),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,r=!0){ms(this._parameters,e)&&(this.validateParameters(this._parameters),r&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bindParameters.decorations===qi.ON)&&(this.parameters.renderOccluded&e.renderOccludedMask)!=0}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){var e;(e=this.repository)==null||e.materialChanged(this)}intersectDraped(e,r,o,i,a,n){return this._pp0[0]=this._pp1[0]=i[0],this._pp0[1]=this._pp1[1]=i[1],this.intersect(e,r,o,this._pp0,this._pp1,a)}};var br;(function(t){t[t.None=0]="None",t[t.Occlude=1]="Occlude",t[t.Transparent=2]="Transparent",t[t.OccludeAndTransparent=4]="OccludeAndTransparent",t[t.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",t[t.Opaque=16]="Opaque"})(br||(br={}));var ze;(function(t){t[t.INTEGRATED_MESH=0]="INTEGRATED_MESH",t[t.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",t[t.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",t[t.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",t[t.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",t[t.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",t[t.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",t[t.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",t[t.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",t[t.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",t[t.ANTIALIASING=10]="ANTIALIASING",t[t.COMPOSITE=11]="COMPOSITE",t[t.BLIT=12]="BLIT",t[t.SSAO=13]="SSAO",t[t.HIGHLIGHT=14]="HIGHLIGHT",t[t.SHADOW_HIGHLIGHT=15]="SHADOW_HIGHLIGHT",t[t.ENVIRONMENT_OPAQUE=16]="ENVIRONMENT_OPAQUE",t[t.ENVIRONMENT_TRANSPARENT=17]="ENVIRONMENT_TRANSPARENT",t[t.LASERLINES=18]="LASERLINES",t[t.LASERLINES_CONTRAST_CONTROL=19]="LASERLINES_CONTRAST_CONTROL",t[t.HUD_MATERIAL=20]="HUD_MATERIAL",t[t.LABEL_MATERIAL=21]="LABEL_MATERIAL",t[t.LINE_CALLOUTS=22]="LINE_CALLOUTS",t[t.LINE_CALLOUTS_HUD_DEPTH=23]="LINE_CALLOUTS_HUD_DEPTH",t[t.DRAPED_MATERIAL=24]="DRAPED_MATERIAL",t[t.DRAPED_WATER=25]="DRAPED_WATER",t[t.VOXEL=26]="VOXEL",t[t.MAX_SLOTS=27]="MAX_SLOTS"})(ze||(ze={}));let xs=class{constructor(e=0){this.componentLocalOriginLength=0,this._tmpVertex=P(),this._mbs=Go(),this._obb=cn(),this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=he(e)}applyToVertex(e,r,o){const i=U(Er,e,r,o),a=U(co,e,r,o+this.componentLocalOriginLength),n=this._totalOffset/he(a);return ke(this._tmpVertex,i,a,n),this._tmpVertex}applyToAabb(e){const r=U(Er,e[0],e[1],e[2]+this.componentLocalOriginLength),o=U(co,e[3],e[4],e[5]+this.componentLocalOriginLength),i=to(bs,r),a=to(Es,o),n=ro(Ss,r),l=ro(ys,o),c=hi(uo,n,l);c[0]=i[0]*a[0]<0?0:c[0],c[1]=i[1]*a[1]<0?0:c[1],c[2]=i[2]*a[2]<0?0:c[2];const u=he(c);if(u<this._totalOffset)return e[0]-=r[0]<0?this._totalOffset:0,e[1]-=r[1]<0?this._totalOffset:0,e[2]-=r[2]<0?this._totalOffset:0,e[3]+=o[0]>0?this._totalOffset:0,e[4]+=o[1]>0?this._totalOffset:0,e[5]+=o[2]>0?this._totalOffset:0,e;const d=mi(uo,n,l),h=he(d),f=this._totalOffset/h,v=this._totalOffset/u;return e[0]+=r[0]*(r[0]>0?f:v),e[1]+=r[1]*(r[1]>0?f:v),e[2]+=r[2]*(r[2]>0?f:v),e[3]+=o[0]*(o[0]<0?f:v),e[4]+=o[1]*(o[1]<0?f:v),e[5]+=o[2]*(o[2]<0?f:v),e}applyToMbs(e){const r=he(e),o=this._totalOffset/r;return ke(this._mbs,e,e,o),this._mbs[3]=e[3]+e[3]*this._totalOffset/r,this._mbs}applyToObb(e){return dn(e,this._totalOffset,this._totalOffset,zt.Global,this._obb),this._obb}},Ts=class{constructor(e=0){this.offset=e,this.sphere=Go(),this.tmpVertex=P()}applyToVertex(e,r,o){const i=this.objectTransform.transform,a=U(Er,e,r,o),n=Re(a,a,i),l=this.offset/he(n);ke(n,n,n,l);const c=this.objectTransform.inverse;return Re(this.tmpVertex,n,c),this.tmpVertex}applyToMinMax(e,r){const o=this.offset/he(e);ke(e,e,e,o);const i=this.offset/he(r);ke(r,r,r,i)}applyToAabb(e){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const o=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*o,e[4]+=e[4]*o,e[5]+=e[5]*o,e}applyToBoundingSphere(e){const r=he(e),o=this.offset/r;return ke(this.sphere,e,e,o),this.sphere[3]=e[3]+e[3]*this.offset/r,this.sphere}};const lo=new Ts;function _s(t){return t!=null?(lo.offset=t,lo):null}new xs;const Er=P(),co=P(),bs=P(),Es=P(),Ss=P(),ys=P(),uo=P();function ho(t,e,r){const{data:o,indices:i}=t,a=e.typedBuffer,n=e.typedBufferStride,l=i.length;r*=n;for(let c=0;c<l;++c){const u=2*i[c];a[r]=o[u],a[r+1]=o[u+1],r+=n}}function oa(t,e,r,o){const{data:i,indices:a}=t,n=e.typedBuffer,l=e.typedBufferStride,c=a.length;if(r*=l,o==null||o===1)for(let u=0;u<c;++u){const d=3*a[u];n[r]=i[d],n[r+1]=i[d+1],n[r+2]=i[d+2],r+=l}else for(let u=0;u<c;++u){const d=3*a[u];for(let h=0;h<o;++h)n[r]=i[d],n[r+1]=i[d+1],n[r+2]=i[d+2],r+=l}}function aa(t,e,r,o=1){const{data:i,indices:a}=t,n=e.typedBuffer,l=e.typedBufferStride,c=a.length;if(r*=l,o===1)for(let u=0;u<c;++u){const d=4*a[u];n[r]=i[d],n[r+1]=i[d+1],n[r+2]=i[d+2],n[r+3]=i[d+3],r+=l}else for(let u=0;u<c;++u){const d=4*a[u];for(let h=0;h<o;++h)n[r]=i[d],n[r+1]=i[d+1],n[r+2]=i[d+2],n[r+3]=i[d+3],r+=l}}function Cs(t,e,r,o,i=1){if(!e)return void oa(t,r,o,i);const{data:a,indices:n}=t,l=r.typedBuffer,c=r.typedBufferStride,u=n.length,d=e[0],h=e[1],f=e[2],v=e[4],T=e[5],R=e[6],D=e[8],O=e[9],z=e[10],C=e[12],L=e[13],B=e[14];o*=c;let G=0,w=0,E=0;const b=Ro(e)?A=>{G=a[A]+C,w=a[A+1]+L,E=a[A+2]+B}:A=>{const S=a[A],N=a[A+1],y=a[A+2];G=d*S+v*N+D*y+C,w=h*S+T*N+O*y+L,E=f*S+R*N+z*y+B};if(i===1)for(let A=0;A<u;++A)b(3*n[A]),l[o]=G,l[o+1]=w,l[o+2]=E,o+=c;else for(let A=0;A<u;++A){b(3*n[A]);for(let S=0;S<i;++S)l[o]=G,l[o+1]=w,l[o+2]=E,o+=c}}function ws(t,e,r,o,i=1){if(!e)return void oa(t,r,o,i);const{data:a,indices:n}=t,l=e,c=r.typedBuffer,u=r.typedBufferStride,d=n.length,h=l[0],f=l[1],v=l[2],T=l[4],R=l[5],D=l[6],O=l[8],z=l[9],C=l[10],L=!Oo(l),B=1e-6,G=1-B;o*=u;let w=0,E=0,b=0;const A=Ro(l)?S=>{w=a[S],E=a[S+1],b=a[S+2]}:S=>{const N=a[S],y=a[S+1],j=a[S+2];w=h*N+T*y+O*j,E=f*N+R*y+z*j,b=v*N+D*y+C*j};if(i===1)if(L)for(let S=0;S<d;++S){A(3*n[S]);const N=w*w+E*E+b*b;if(N<G&&N>B){const y=1/Math.sqrt(N);c[o]=w*y,c[o+1]=E*y,c[o+2]=b*y}else c[o]=w,c[o+1]=E,c[o+2]=b;o+=u}else for(let S=0;S<d;++S)A(3*n[S]),c[o]=w,c[o+1]=E,c[o+2]=b,o+=u;else for(let S=0;S<d;++S){if(A(3*n[S]),L){const N=w*w+E*E+b*b;if(N<G&&N>B){const y=1/Math.sqrt(N);w*=y,E*=y,b*=y}}for(let N=0;N<i;++N)c[o]=w,c[o+1]=E,c[o+2]=b,o+=u}}function As(t,e,r,o,i=1){if(!e)return void aa(t,r,o,i);const{data:a,indices:n}=t,l=e,c=r.typedBuffer,u=r.typedBufferStride,d=n.length,h=l[0],f=l[1],v=l[2],T=l[4],R=l[5],D=l[6],O=l[8],z=l[9],C=l[10],L=!Oo(l),B=1e-6,G=1-B;if(o*=u,i===1)for(let w=0;w<d;++w){const E=4*n[w],b=a[E],A=a[E+1],S=a[E+2],N=a[E+3];let y=h*b+T*A+O*S,j=f*b+R*A+z*S,I=v*b+D*A+C*S;if(L){const F=y*y+j*j+I*I;if(F<G&&F>B){const V=1/Math.sqrt(F);y*=V,j*=V,I*=V}}c[o]=y,c[o+1]=j,c[o+2]=I,c[o+3]=N,o+=u}else for(let w=0;w<d;++w){const E=4*n[w],b=a[E],A=a[E+1],S=a[E+2],N=a[E+3];let y=h*b+T*A+O*S,j=f*b+R*A+z*S,I=v*b+D*A+C*S;if(L){const F=y*y+j*j+I*I;if(F<G&&F>B){const V=1/Math.sqrt(F);y*=V,j*=V,I*=V}}for(let F=0;F<i;++F)c[o]=y,c[o+1]=j,c[o+2]=I,c[o+3]=N,o+=u}}function Ms(t,e,r,o,i=1){const{data:a,indices:n}=t,l=r.typedBuffer,c=r.typedBufferStride,u=n.length;if(o*=c,e!==a.length||e!==4)if(i!==1)if(e!==4)for(let d=0;d<u;++d){const h=3*n[d];for(let f=0;f<i;++f)l[o]=a[h],l[o+1]=a[h+1],l[o+2]=a[h+2],l[o+3]=255,o+=c}else for(let d=0;d<u;++d){const h=4*n[d];for(let f=0;f<i;++f)l[o]=a[h],l[o+1]=a[h+1],l[o+2]=a[h+2],l[o+3]=a[h+3],o+=c}else{if(e===4){for(let d=0;d<u;++d){const h=4*n[d];l[o]=a[h],l[o+1]=a[h+1],l[o+2]=a[h+2],l[o+3]=a[h+3],o+=c}return}for(let d=0;d<u;++d){const h=3*n[d];l[o]=a[h],l[o+1]=a[h+1],l[o+2]=a[h+2],l[o+3]=255,o+=c}}else{l[o]=a[0],l[o+1]=a[1],l[o+2]=a[2],l[o+3]=a[3];const d=new Uint32Array(r.typedBuffer.buffer,r.start),h=c/4,f=d[o/=4];o+=h;const v=u*i;for(let T=1;T<v;++T)d[o]=f,o+=h}}function Rs(t,e,r){const{data:o,indices:i}=t,a=e.typedBuffer,n=e.typedBufferStride,l=i.length,c=o[0];r*=n;for(let u=0;u<l;++u)a[r]=c,r+=n}function Os(t,e,r,o,i=1){const a=e.typedBuffer,n=e.typedBufferStride;if(o*=n,i===1)for(let l=0;l<r;++l)a[o]=t[0],a[o+1]=t[1],a[o+2]=t[2],a[o+3]=t[3],o+=n;else for(let l=0;l<r;++l)for(let c=0;c<i;++c)a[o]=t[0],a[o+1]=t[1],a[o+2]=t[2],a[o+3]=t[3],o+=n}function Is(t,e,r,o,i,a){var n;for(const l of e.fields.keys()){const c=t.attributes.get(l),u=c==null?void 0:c.indices;if(c&&u)Ls(l,c,r,o,i,a);else if(l===p.OBJECTANDLAYERIDCOLOR&&t.objectAndLayerIdColor!=null){const d=(n=t.attributes.get(p.POSITION))==null?void 0:n.indices;if(d){const h=d.length,f=i.getField(l,Kt);Os(t.objectAndLayerIdColor,f,h,a)}}}}function Ls(t,e,r,o,i,a){switch(t){case p.POSITION:{Y(e.size===3);const n=i.getField(t,Ht);Y(!!n,`No buffer view for ${t}`),n&&Cs(e,r,n,a);break}case p.NORMAL:{Y(e.size===3);const n=i.getField(t,Ht);Y(!!n,`No buffer view for ${t}`),n&&ws(e,o,n,a);break}case p.NORMALCOMPRESSED:{Y(e.size===2);const n=i.getField(t,Ii);Y(!!n,`No buffer view for ${t}`),n&&ho(e,n,a);break}case p.UV0:{Y(e.size===2);const n=i.getField(t,Oi);Y(!!n,`No buffer view for ${t}`),n&&ho(e,n,a);break}case p.COLOR:case p.SYMBOLCOLOR:{const n=i.getField(t,Kt);Y(!!n,`No buffer view for ${t}`),Y(e.size===3||e.size===4),!n||e.size!==3&&e.size!==4||Ms(e,e.size,n,a);break}case p.COLORFEATUREATTRIBUTE:{const n=i.getField(t,Ri);Y(!!n,`No buffer view for ${t}`),Y(e.size===1),n&&e.size===1&&Rs(e,n,a);break}case p.TANGENT:{Y(e.size===4);const n=i.getField(t,Tr);Y(!!n,`No buffer view for ${t}`),n&&As(e,o,n,a);break}case p.PROFILERIGHT:case p.PROFILEUP:case p.PROFILEVERTEXANDNORMAL:case p.FEATUREVALUE:{Y(e.size===4);const n=i.getField(t,Tr);Y(!!n,`No buffer view for ${t}`),n&&aa(e,n,a)}}}let $s=class{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.attributes.get(p.POSITION).indices.length}write(e,r,o,i,a){Is(o,this.vertexBufferLayout,e,r,i,a)}};function Gr(t){t.attributes.add(p.POSITION,"vec3"),t.vertex.code.add(s`vec3 positionModel() { return position; }`)}function ia({code:t},e){e.doublePrecisionRequiresObfuscation?t.add(s`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`):t.add(s`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}let na=class extends Q{constructor(e,r){super(e,"mat3",$.Draw,(o,i,a)=>o.setUniformMatrix3fv(e,r(i,a)))}},Me=class extends Q{constructor(e,r){super(e,"mat3",$.Pass,(o,i,a)=>o.setUniformMatrix3fv(e,r(i,a)))}},Ke=class extends Q{constructor(e,r){super(e,"mat4",$.Pass,(o,i,a)=>o.setUniformMatrix4fv(e,r(i,a)))}};function sa(t,e){t.include(Gr);const r=t.vertex;r.include(ia,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),r.uniforms.add(new Z("transformWorldFromViewTH",o=>o.transformWorldFromViewTH),new Z("transformWorldFromViewTL",o=>o.transformWorldFromViewTL),new Me("transformViewFromCameraRelativeRS",o=>o.transformViewFromCameraRelativeRS),new Ke("transformProjFromView",o=>o.transformProjFromView),new na("transformWorldFromModelRS",o=>o.transformWorldFromModelRS),new fe("transformWorldFromModelTH",o=>o.transformWorldFromModelTH),new fe("transformWorldFromModelTL",o=>o.transformWorldFromModelTL)),r.code.add(s`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(s`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${e.spherical?s`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:s`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),t.fragment.uniforms.add(new Z("transformWorldFromViewTL",o=>o.transformWorldFromViewTL)),r.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),t.fragment.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}let Ps=class extends Ct{constructor(){super(...arguments),this.transformWorldFromViewTH=P(),this.transformWorldFromViewTL=P(),this.transformViewFromCameraRelativeRS=Jt(),this.transformProjFromView=Zt()}};function la(t,e){switch(e.normalType){case H.Attribute:case H.Compressed:t.include(er,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add(new na("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new Me("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)),t.vertex.code.add(s`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case H.Ground:t.include(sa,e),t.varyings.add("vNormalWorld","vec3"),t.vertex.code.add(s`
        void forwardNormal() {
          vNormalWorld = ${e.spherical?s`normalize(vPositionWorldCameraRelative);`:s`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case H.ScreenDerivative:t.vertex.code.add(s`void forwardNormal() {}`);break;default:rt(e.normalType);case H.COUNT:}}let Ns=class extends Ps{constructor(){super(...arguments),this.transformNormalViewFromGlobal=Jt()}};const Ds=.1,zr=.001;let rr=class{constructor(e,r){this._module=e,this._loadModule=r}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}},Vr=class{constructor(e,r,o){this.release=o,this.initializeConfiguration(e,r),this._configuration=r.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=Gt(this._program),this._pipeline=this._configuration=null}reload(e){Gt(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return Ji.TRIANGLES}getPipeline(e,r,o){return this._pipeline}initializeConfiguration(e,r){}},Ur=class{constructor(e,r,o){this._context=e,this._locations=o,this._textures=new Map,this._freeTextureUnits=new pi({deallocator:null}),this._glProgram=e.programCache.acquire(r.generate("vertex"),r.generate("fragment"),o),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=r.generateBindPass(this),this.bindDraw=r.generateBindDraw(this),this._fragmentUniforms=Qi()?r.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get compiled(){return this._glProgram.compiled}setUniform1b(e,r){this._glProgram.setUniform1i(e,r?1:0)}setUniform1i(e,r){this._glProgram.setUniform1i(e,r)}setUniform1f(e,r){this._glProgram.setUniform1f(e,r)}setUniform2fv(e,r){this._glProgram.setUniform2fv(e,r)}setUniform3fv(e,r){this._glProgram.setUniform3fv(e,r)}setUniform4fv(e,r){this._glProgram.setUniform4fv(e,r)}setUniformMatrix3fv(e,r){this._glProgram.setUniformMatrix3fv(e,r)}setUniformMatrix4fv(e,r){this._glProgram.setUniformMatrix4fv(e,r)}setUniform1fv(e,r){this._glProgram.setUniform1fv(e,r)}setUniform1iv(e,r){this._glProgram.setUniform1iv(e,r)}setUniform2iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform3iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform4iv(e,r){this._glProgram.setUniform4iv(e,r)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,r){if((r==null?void 0:r.glName)==null){const i=this._textures.get(e);return i&&(this._context.bindTexture(null,i.unit),this._freeTextureUnit(i),this._textures.delete(e)),null}let o=this._textures.get(e);return o==null?(o=this._allocTextureUnit(r),this._textures.set(e,o)):o.texture=r,this._context.useProgram(this),this.setUniform1i(e,o.unit),this._context.bindTexture(r,o.unit),o.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,r)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(r,e.unit)}),this._fragmentUniforms!=null&&this._fragmentUniforms.forEach(e=>{e.type!=="sampler2D"&&e.type!=="samplerCube"||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}};Le.LESS;Le.ALWAYS;const Fs={mask:255},Bs={function:{func:Le.ALWAYS,ref:Oe.OutlineVisualElementMask,mask:Oe.OutlineVisualElementMask},operation:{fail:de.KEEP,zFail:de.KEEP,zPass:de.ZERO}},Gs={function:{func:Le.ALWAYS,ref:Oe.OutlineVisualElementMask,mask:Oe.OutlineVisualElementMask},operation:{fail:de.KEEP,zFail:de.KEEP,zPass:de.REPLACE}};Le.EQUAL,Oe.OutlineVisualElementMask,Oe.OutlineVisualElementMask,de.KEEP,de.KEEP,de.KEEP;Le.NOTEQUAL,Oe.OutlineVisualElementMask,Oe.OutlineVisualElementMask,de.KEEP,de.KEEP,de.KEEP;function zs({normalTexture:t,metallicRoughnessTexture:e,metallicFactor:r,roughnessFactor:o,emissiveTexture:i,emissiveFactor:a,occlusionTexture:n}){return t==null&&e==null&&i==null&&(a==null||fi(a,Xt))&&n==null&&(o==null||o===1)&&(r==null||r===1||r===0)}const ca=[1,1,.5],Vs=[0,.6,.2],Us=[0,1,.2];let Ve=class extends Q{constructor(e,r){super(e,"vec2",$.Pass,(o,i,a)=>o.setUniform2fv(e,r(i,a)))}};function mo(t){t.varyings.add("linearDepth","float")}function da(t){t.vertex.uniforms.add(new Ve("nearFar",(e,r)=>r.camera.nearFar))}function ua(t){t.vertex.code.add(s`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function ha(t,e){const{vertex:r}=t;switch(e.output){case x.Color:if(e.receiveShadows)return mo(t),void r.code.add(s`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case x.Depth:case x.Shadow:case x.ShadowHighlight:case x.ShadowExcludeHighlight:return t.include(sa,e),mo(t),da(t),ua(t),void r.code.add(s`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(s`void forwardLinearDepth() {}`)}function ma(t){t.vertex.code.add(s`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function Ue(t,e){Hs(t,e,new fe("slicePlaneOrigin",(r,o)=>js(e,r,o)),new fe("slicePlaneBasis1",(r,o)=>{var i;return po(e,r,o,(i=o.slicePlane)==null?void 0:i.basis1)}),new fe("slicePlaneBasis2",(r,o)=>{var i;return po(e,r,o,(i=o.slicePlane)==null?void 0:i.basis2)}))}function Hs(t,e,...r){if(!e.hasSlicePlane){const n=s`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return e.hasSliceInVertexProgram&&t.vertex.code.add(n),void t.fragment.code.add(n)}e.hasSliceInVertexProgram&&t.vertex.uniforms.add(...r),t.fragment.uniforms.add(...r);const o=s`struct SliceFactors {
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
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=s`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,a=e.hasSliceHighlight?s`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:s`#define highlightSlice(_color_, _pos_) (_color_)`;e.hasSliceInVertexProgram&&t.vertex.code.add(o),t.fragment.code.add(o),t.fragment.code.add(a)}function pa(t,e,r){return t.instancedDoublePrecision?U(Ws,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):e.slicePlaneLocalOrigin}function fa(t,e){return t!=null?Xe(jt,e.origin,t):e.origin}function va(t,e,r){return t.hasSliceTranslatedView?e!=null?vr(ks,r.camera.viewMatrix,e):r.camera.viewMatrix:null}function js(t,e,r){if(r.slicePlane==null)return Xt;const o=pa(t,e,r),i=fa(o,r.slicePlane),a=va(t,o,r);return a!=null?Re(jt,i,a):i}function po(t,e,r,o){if(o==null||r.slicePlane==null)return Xt;const i=pa(t,e,r),a=fa(i,r.slicePlane),n=va(t,i,r);return n!=null?(xe(lt,o,a),Re(jt,a,n),Re(lt,lt,n),Xe(lt,lt,jt)):o}const Ws=P(),jt=P(),lt=P(),ks=Zt();function xt(t){ua(t),t.vertex.code.add(s`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),t.vertex.code.add(s`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}let te=class extends Q{constructor(e,r){super(e,"float",$.Pass,(o,i,a)=>o.setUniform1f(e,r(i,a)))}},qs=class extends Q{constructor(e,r){super(e,"mat4",$.Draw,(o,i,a)=>o.setUniformMatrix4fv(e,r(i,a)))}};function bt(t,e){e.instancedDoublePrecision?t.constants.add("cameraPosition","vec3",Xt):t.uniforms.add(new fe("cameraPosition",(r,o)=>U(ga,o.camera.viewInverseTransposeMatrix[3]-r.origin[0],o.camera.viewInverseTransposeMatrix[7]-r.origin[1],o.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function Tt(t,e){if(!e.instancedDoublePrecision)return void t.uniforms.add(new Ke("proj",(o,i)=>i.camera.projectionMatrix),new qs("view",(o,i)=>vr(fo,i.camera.viewMatrix,o.origin)),new fe("localOrigin",o=>o.origin));const r=o=>U(ga,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]);t.uniforms.add(new Ke("proj",(o,i)=>i.camera.projectionMatrix),new Ke("view",(o,i)=>vr(fo,i.camera.viewMatrix,r(i))),new Z("localOrigin",(o,i)=>r(i)))}const fo=Zt(),ga=P();function Ys(t){t.uniforms.add(new Ke("viewNormal",(e,r)=>r.camera.viewInverseTransposeMatrix))}let Xs=class extends Ct{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,r={key:this.key};for(const o of e)r[o]=this[o];return r}};function g(t={}){return(e,r)=>{if(e._parameterNames=e._parameterNames??[],e._parameterNames.push(r),t.constValue!=null)Object.defineProperty(e,r,{get:()=>t.constValue});else{const o=e._parameterNames.length-1,i=t.count||2,a=Math.ceil(Math.log2(i)),n=e._parameterBits??[0];let l=0;for(;n[l]+a>16;)l++,l>=n.length&&n.push(0);e._parameterBits=n;const c=n[l],u=(1<<a)-1<<c;n[l]+=a,Object.defineProperty(e,r,{get(){return this[o]},set(d){if(this[o]!==d&&(this[o]=d,this._keyDirty=!0,this._parameterBits[l]=this._parameterBits[l]&~u|+d<<c&u,typeof d!="number"&&typeof d!="boolean"))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof d)}})}}}let Sr=class extends Xs{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}};m([g()],Sr.prototype,"instancedDoublePrecision",void 0),m([g()],Sr.prototype,"hasModelTransformation",void 0);const vo=Jt();function xa(t,e){const r=e.hasModelTransformation,o=e.instancedDoublePrecision;r&&(t.vertex.uniforms.add(new Ke("model",a=>a.modelTransformation??Ut)),t.vertex.uniforms.add(new Me("normalLocalOriginFromModel",a=>(gr(vo,a.modelTransformation??Ut),vo)))),e.instanced&&o&&(t.attributes.add(p.INSTANCEMODELORIGINHI,"vec3"),t.attributes.add(p.INSTANCEMODELORIGINLO,"vec3"),t.attributes.add(p.INSTANCEMODEL,"mat3"),t.attributes.add(p.INSTANCEMODELNORMAL,"mat3"));const i=t.vertex;o&&(i.include(ia,e),i.uniforms.add(new fe("viewOriginHi",(a,n)=>un(U(It,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),It)),new fe("viewOriginLo",(a,n)=>hn(U(It,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),It)))),i.code.add(s`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?o?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":o?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${o?s`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),i.code.add(s`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?o?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":o?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),e.output===x.Normal&&(Ys(i),i.code.add(s`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?o?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":o?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),e.hasVertexTangents&&i.code.add(s`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?o?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":o?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const It=P();function Js(t){t.vertex.code.add(s`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${s.int(Ce.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${s.int(Ce.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${s.int(Ce.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${s.int(Ce.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}let Ta=class extends Q{constructor(e,r){super(e,"int",$.Pass,(o,i,a)=>o.setUniform1i(e,r(i,a)))}};function _a(t,e){e.hasSymbolColors?(t.include(Js),t.attributes.add(p.SYMBOLCOLOR,"vec4"),t.varyings.add("colorMixMode","mediump float"),t.vertex.code.add(s`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(t.fragment.uniforms.add(new Ta("colorMixMode",r=>fs[r.colorMixMode])),t.vertex.code.add(s`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function ba(t,e){e.hasVertexColors?(t.attributes.add(p.COLOR,"vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(s`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(s`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(s`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function Zs(t){t.vertex.code.add(s`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(s`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),t.vertex.code.add(s`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),t.vertex.code.add(s`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(s`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),t.vertex.code.add(s`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function Ks(t){t.uniforms.add(new Z("screenSizePerspectiveAlignment",e=>Qs(e.screenSizePerspectiveAlignment||e.screenSizePerspective)))}function Qs(t){return U(el,t.parameters.divisor,t.parameters.offset,t.minScaleFactor)}const el=P();let re=class extends Q{constructor(e,r){super(e,"vec4",$.Pass,(o,i,a)=>o.setUniform4fv(e,r(i,a)))}};function Ea(t,e){const r=t.vertex;e.hasVerticalOffset?(rl(r),e.hasScreenSizePerspective&&(t.include(Zs),Ks(r),bt(t.vertex,e)),r.code.add(s`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${e.spherical?s`vec3 worldNormal = normalize(worldPos + localOrigin);`:s`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${e.hasScreenSizePerspective?s`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:s`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(s`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const tl=Pr();function rl(t){t.uniforms.add(new re("verticalOffset",(e,r)=>{const{minWorldLength:o,maxWorldLength:i,screenLength:a}=e.verticalOffset,n=Math.tan(.5*r.camera.fovY)/(.5*r.camera.fullViewport[3]),l=r.camera.pixelRatio||1;return se(tl,a*l,n,o,i)}))}function ol(t,e){const r=e.output===x.ObjectAndLayerIdColor,o=e.objectAndLayerIdColorInstanced;r&&(t.varyings.add("objectAndLayerIdColorVarying","vec4"),o?t.attributes.add(p.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):t.attributes.add(p.OBJECTANDLAYERIDCOLOR,"vec4")),t.vertex.code.add(s`
     void forwardObjectAndLayerIdColor() {
      ${r?o?s`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:s`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:s``} }`),t.fragment.code.add(s`
      void outputObjectAndLayerIdColor() {
        ${r?s`fragColor = objectAndLayerIdColorVarying;`:s``} }`)}function Sa(t){t.code.add(s`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}function ya(t){t.code.add(s`const float MAX_RGBA_FLOAT =
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
}`)}function al(t,e){switch(e.output){case x.Shadow:case x.ShadowHighlight:case x.ShadowExcludeHighlight:t.fragment.include(Sa),t.fragment.code.add(s`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`);break;case x.Depth:t.fragment.include(ya),t.fragment.code.add(s`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}}const il=Nr(1,1,0,1),nl=Nr(1,0,1,1);function sl(t){t.fragment.uniforms.add(new K("depthTexture",(e,r)=>r.mainDepth)),t.fragment.constants.add("occludedHighlightFlag","vec4",il).add("unoccludedHighlightFlag","vec4",nl),t.fragment.code.add(s`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}let ll=class extends Q{constructor(e,r,o){super(e,"vec4",$.Pass,(i,a,n)=>i.setUniform4fv(e,r(a,n)),o)}},cl=class extends Q{constructor(e,r,o){super(e,"float",$.Pass,(i,a,n)=>i.setUniform1fv(e,r(a,n)),o)}},W=class extends Lo{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};m([k()],W.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),m([k()],W.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),m([k()],W.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),m([k()],W.prototype,"DECONFLICTOR_SHOW_GRID",void 0),m([k()],W.prototype,"LABELS_SHOW_BORDER",void 0),m([k()],W.prototype,"TEXT_SHOW_BASELINE",void 0),m([k()],W.prototype,"TEXT_SHOW_BORDER",void 0),m([k()],W.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),m([k()],W.prototype,"OVERLAY_SHOW_CENTER",void 0),m([k()],W.prototype,"SHOW_POI",void 0),m([k()],W.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),m([k()],W.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),m([k()],W.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),m([k()],W.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),m([k()],W.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),m([k()],W.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),m([k()],W.prototype,"I3S_TREE_SHOW_TILES",void 0),m([k()],W.prototype,"I3S_SHOW_MODIFICATIONS",void 0),m([k()],W.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),m([k()],W.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),m([k()],W.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),m([k()],W.prototype,"LINE_WIREFRAMES",void 0),W=m([Io("esri.views.3d.support.DebugFlags")],W);new W;var go,xo;(function(t){t[t.Undefined=0]="Undefined",t[t.DefinedSize=1]="DefinedSize",t[t.DefinedScale=2]="DefinedScale"})(go||(go={})),function(t){t[t.Undefined=0]="Undefined",t[t.DefinedAngle=1]="DefinedAngle"}(xo||(xo={}));const hr=8;function _t(t,e){const{vertex:r,attributes:o}=t;e.hasVvInstancing&&(e.vvSize||e.vvColor)&&o.add(p.INSTANCEFEATUREATTRIBUTE,"vec4"),e.vvSize?(r.uniforms.add(new Z("vvSizeMinSize",i=>i.vvSize.minSize)),r.uniforms.add(new Z("vvSizeMaxSize",i=>i.vvSize.maxSize)),r.uniforms.add(new Z("vvSizeOffset",i=>i.vvSize.offset)),r.uniforms.add(new Z("vvSizeFactor",i=>i.vvSize.factor)),r.uniforms.add(new Me("vvSymbolRotationMatrix",i=>i.vvSymbolRotationMatrix)),r.uniforms.add(new Z("vvSymbolAnchor",i=>i.vvSymbolAnchor)),r.code.add(s`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(s`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.hasVvInstancing?s`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(s`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(r.constants.add("vvColorNumber","int",hr),r.uniforms.add(new cl("vvColorValues",i=>i.vvColor.values,hr),new ll("vvColorColors",i=>i.vvColor.colors,hr)),r.code.add(s`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${e.hasVvInstancing?s`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(s`vec4 vvColor() { return vec4(1.0); }`)}function dl(t){t.fragment.code.add(s`
    #define discardOrAdjustAlpha(color) { if (color.a < ${s.float(zr)}) { discard; } }
  `)}function He(t,e){ul(t,e,new te("textureAlphaCutoff",r=>r.textureAlphaCutoff))}function ul(t,e,r){const o=t.fragment;switch(e.alphaDiscardMode!==J.Mask&&e.alphaDiscardMode!==J.MaskBlend||o.uniforms.add(r),e.alphaDiscardMode){case J.Blend:return t.include(dl);case J.Opaque:o.code.add(s`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case J.Mask:o.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case J.MaskBlend:t.fragment.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function Ca(t,e){const{vertex:r,fragment:o}=t,i=e.hasColorTexture&&e.alphaDiscardMode!==J.Opaque;switch(e.output){case x.Depth:case x.Shadow:case x.ShadowHighlight:case x.ShadowExcludeHighlight:case x.ObjectAndLayerIdColor:Tt(r,e),t.include(xt,e),t.include(Ze,e),t.include(_t,e),t.include(al,e),t.include(Ue,e),t.include(ol,e),da(t),t.varyings.add("depth","float"),i&&o.uniforms.add(new K("tex",a=>a.texture)),r.code.add(s`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),t.include(He,e),o.code.add(s`
          void main(void) {
            discardBySlice(vpos);
            ${i?s`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${e.output===x.ObjectAndLayerIdColor?s`outputObjectAndLayerIdColor();`:s`outputDepth(depth);`}
          }
        `);break;case x.Normal:{Tt(r,e),t.include(xt,e),t.include(er,e),t.include(la,e),t.include(Ze,e),t.include(_t,e),i&&o.uniforms.add(new K("tex",n=>n.texture)),e.normalType===H.ScreenDerivative&&t.varyings.add("vPositionView","vec3");const a=e.normalType===H.Attribute||e.normalType===H.Compressed;r.code.add(s`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${a?s`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:s`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),t.include(Ue,e),t.include(He,e),o.code.add(s`
          void main() {
            discardBySlice(vpos);
            ${i?s`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${e.normalType===H.ScreenDerivative?s`vec3 normal = screenDerivativeNormal(vPositionView);`:s`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case x.Highlight:Tt(r,e),t.include(xt,e),t.include(Ze,e),t.include(_t,e),i&&o.uniforms.add(new K("tex",a=>a.texture)),r.code.add(s`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),t.include(Ue,e),t.include(He,e),t.include(sl,e),o.code.add(s`
          void main() {
            discardBySlice(vpos);
            ${i?s`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function hl(t,e){const r=t.fragment;e.hasVertexTangents?(t.attributes.add(p.TANGENT,"vec4"),t.varyings.add("vTangent","vec4"),e.doubleSidedMode===oe.WindingOrder?r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(s`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),e.textureCoordinateType!==ee.None&&(t.include(Jo,e),r.uniforms.add(e.pbrTextureBindType===$.Pass?new K("normalTexture",o=>o.textureNormal):new gt("normalTexture",o=>o.textureNormal)),r.code.add(s`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;
return tangentSpace * rawNormal;
}`))}var ce;(function(t){t[t.RED=0]="RED",t[t.RG=1]="RG",t[t.RGBA4=2]="RGBA4",t[t.RGBA=3]="RGBA",t[t.RGBA_MIPMAP=4]="RGBA_MIPMAP",t[t.R16F=5]="R16F",t[t.RGBA16F=6]="RGBA16F"})(ce||(ce={}));const Pt=new be;Pt.pixelFormat=me.RED,Pt.internalFormat=yt.R8,Pt.wrapMode=ie.CLAMP_TO_EDGE;const Nt=new be;Nt.pixelFormat=me.RG,Nt.internalFormat=yt.RG8,Nt.wrapMode=ie.CLAMP_TO_EDGE;const Dt=new be;Dt.internalFormat=yt.RGBA4,Dt.dataType=Qt.UNSIGNED_SHORT_4_4_4_4,Dt.wrapMode=ie.CLAMP_TO_EDGE;const wa=new be;wa.wrapMode=ie.CLAMP_TO_EDGE;const ut=new be;ut.wrapMode=ie.CLAMP_TO_EDGE,ut.samplingMode=_e.LINEAR_MIPMAP_LINEAR,ut.hasMipmap=!0,ut.maxAnisotropy=8;const ht=new be;ht.pixelFormat=me.RED,ht.dataType=Qt.HALF_FLOAT,ht.internalFormat=yt.R16F,ht.samplingMode=_e.NEAREST;const Ft=new be;Ft.dataType=Qt.HALF_FLOAT,Ft.internalFormat=yt.RGBA16F,Ft.samplingMode=_e.NEAREST;ce.RED+"",ce.RG+"",ce.RGBA4+"",ce.RGBA+"",ce.RGBA_MIPMAP+"",ce.R16F+"",ce.RGBA16F+"";var qe;(function(t){t[t.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",t[t.DEPTH_STENCIL_BUFFER=1]="DEPTH_STENCIL_BUFFER",t[t.DEPTH24_BUFFER=2]="DEPTH24_BUFFER",t[t.DEPTH16_BUFFER=3]="DEPTH16_BUFFER"})(qe||(qe={}));const mt=new be;mt.pixelFormat=me.DEPTH_STENCIL,mt.dataType=Qt.UNSIGNED_INT_24_8,mt.samplingMode=_e.NEAREST,mt.wrapMode=ie.CLAMP_TO_EDGE;qe.DEPTH_STENCIL_TEXTURE+"",qe.DEPTH_STENCIL_BUFFER+"",new cr(lr.DEPTH24_STENCIL8,4),qe.DEPTH24_BUFFER+"",new cr(lr.DEPTH_COMPONENT24,4),qe.DEPTH16_BUFFER+"",new cr(lr.DEPTH_COMPONENT16,4);const Aa={required:[]};x.Depth;x.CompositeColor;x.Highlight;const ml={required:[x.Depth,x.Normal]};let pl=class extends Lo{consumes(){return Aa}get usedMemory(){return 0}get isDecoration(){return!1}get running(){return!1}},fl=class extends pl{};function Ma(t,e=!0){t.attributes.add(p.POSITION,"vec2"),e&&t.varyings.add("uv","vec2"),t.vertex.code.add(s`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${e?s`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}function Hr(t){t.include(ya),t.code.add(s`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromRGBA(vec4 depth, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(depth), nearFar);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTex, 0)));
return linearDepthFromRGBA(texelFetch(depthTex, iuv, 0), nearFar);
}`)}let vl=class extends Q{constructor(e,r){super(e,"vec2",$.Draw,(o,i,a,n)=>o.setUniform2fv(e,r(i,a,n)))}};const Ra=Rr.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let Oa=class{constructor(){this._includedModules=new Map}include(e,r){if(this._includedModules.has(e)){const o=this._includedModules.get(e);if(o!==r){Ra.error("Trying to include shader module multiple times with different sets of options.");const i=new Set;for(const a of Object.keys(o))o[a]!==e[a]&&i.add(a);for(const a of Object.keys(e))o[a]!==e[a]&&i.add(a);i.forEach(a=>console.error(`  ${a}: current ${o[a]} new ${e[a]}`))}}else this._includedModules.set(e,r),e(this.builder,r)}},or=class extends Oa{constructor(){super(...arguments),this.vertex=new To,this.fragment=new To,this.attributes=new Tl,this.varyings=new _l,this.extensions=new yr,this.constants=new q,this.outputs=new wr}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const r=this.extensions.generateSource(e),o=this.attributes.generateSource(e),i=this.varyings.generateSource(e),a=e==="vertex"?this.vertex:this.fragment,n=a.uniforms.generateSource(),l=a.code.generateSource(),c=e==="vertex"?El:bl,u=this.constants.generateSource().concat(a.constants.generateSource()),d=this.outputs.generateSource(e);return`#version 300 es
${r.join(`
`)}

${c}

${u.join(`
`)}

${n.join(`
`)}

${o.join(`
`)}

${i.join(`
`)}

${d.join(`
`)}

${l.join(`
`)}`}generateBindPass(e){const r=new Map;this.vertex.uniforms.entries.forEach(a=>{const n=a.bind[$.Pass];n&&r.set(a.name,n)}),this.fragment.uniforms.entries.forEach(a=>{const n=a.bind[$.Pass];n&&r.set(a.name,n)});const o=Array.from(r.values()),i=o.length;return(a,n)=>{for(let l=0;l<i;++l)o[l](e,a,n)}}generateBindDraw(e){const r=new Map;this.vertex.uniforms.entries.forEach(a=>{const n=a.bind[$.Draw];n&&r.set(a.name,n)}),this.fragment.uniforms.entries.forEach(a=>{const n=a.bind[$.Draw];n&&r.set(a.name,n)});const o=Array.from(r.values()),i=o.length;return(a,n,l)=>{for(let c=0;c<i;++c)o[c](e,a,n,l)}}},gl=class{constructor(){this._entries=new Map}add(...e){for(const r of e)this._add(r)}get(e){return this._entries.get(e)}_add(e){if(e!=null){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new Yt(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else Ra.error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(e=>e.arraySize!=null?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}},xl=class{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}},To=class extends Oa{constructor(){super(...arguments),this.uniforms=new gl,this.code=new xl,this.constants=new q}get builder(){return this}},Tl=class{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map(r=>`in ${r[1]} ${r[0]};`)}},_l=class{constructor(){this._entries=new Map}add(e,r){this._entries.has(e)&&Y(this._entries.get(e)===r),this._entries.set(e,r)}generateSource(e){const r=new Array;return this._entries.forEach((o,i)=>r.push(e==="vertex"?`out ${o} ${i};`:`in ${o} ${i};`)),r}},yr=class Cr{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const r=e==="vertex"?Cr.ALLOWLIST_VERTEX:Cr.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(o=>r.includes(o)).map(o=>`#extension ${o} : enable`)}};yr.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],yr.ALLOWLIST_VERTEX=[];let wr=class Ar{constructor(){this._entries=new Map}add(e,r,o=0){const i=this._entries.get(o);i?Y(i.name===e&&i.type===r,`Fragment shader output location ${o} occupied`):this._entries.set(o,{name:e,type:r})}generateSource(e){if(e==="vertex")return[];this._entries.size===0&&this._entries.set(0,{name:Ar.DEFAULT_NAME,type:Ar.DEFAULT_TYPE});const r=new Array;return this._entries.forEach((o,i)=>r.push(`layout(location = ${i}) out ${o.type} ${o.name};`)),r}};wr.DEFAULT_TYPE="vec4",wr.DEFAULT_NAME="fragColor";class q{constructor(){this._entries=new Set}add(e,r,o){let i="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":i=q._numberToFloatStr(o);break;case"int":i=q._numberToIntStr(o);break;case"bool":i=o.toString();break;case"vec2":i=`vec2(${q._numberToFloatStr(o[0])},                            ${q._numberToFloatStr(o[1])})`;break;case"vec3":i=`vec3(${q._numberToFloatStr(o[0])},                            ${q._numberToFloatStr(o[1])},                            ${q._numberToFloatStr(o[2])})`;break;case"vec4":i=`vec4(${q._numberToFloatStr(o[0])},                            ${q._numberToFloatStr(o[1])},                            ${q._numberToFloatStr(o[2])},                            ${q._numberToFloatStr(o[3])})`;break;case"ivec2":i=`ivec2(${q._numberToIntStr(o[0])},                             ${q._numberToIntStr(o[1])})`;break;case"ivec3":i=`ivec3(${q._numberToIntStr(o[0])},                             ${q._numberToIntStr(o[1])},                             ${q._numberToIntStr(o[2])})`;break;case"ivec4":i=`ivec4(${q._numberToIntStr(o[0])},                             ${q._numberToIntStr(o[1])},                             ${q._numberToIntStr(o[2])},                             ${q._numberToIntStr(o[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${r}(${Array.prototype.map.call(o,a=>q._numberToFloatStr(a)).join(", ")})`}return this._entries.add(`const ${r} ${e} = ${i};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const bl=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,El=`precision highp float;
precision highp sampler2D;`,mr=4;function Sl(){const t=new or,e=t.fragment;t.include(Ma);const r=(mr+1)/2,o=1/(2*r*r);return e.include(Hr),e.uniforms.add(new K("depthMap",i=>i.depthTexture),new gt("tex",i=>i.colorTexture),new vl("blurSize",i=>i.blurSize),new te("projScale",(i,a)=>{const n=vi(a.camera.eye,a.camera.center);return n>5e4?Math.max(0,i.projScale-(n-5e4)):i.projScale}),new Ve("nearFar",(i,a)=>a.camera.nearFar)),e.code.add(s`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${s.float(o)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),t.outputs.add("fragBlur","float"),e.code.add(s`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${s.int(mr)}; r <= ${s.int(mr)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),t}const yl=Object.freeze(Object.defineProperty({__proto__:null,build:Sl},Symbol.toStringTag,{value:"Module"}));let Ia=class La extends Vr{initializeProgram(e){return new Ur(e.rctx,La.shader.get().build(),tr)}initializePipeline(){return Lr({colorWrite:$r})}};Ia.shader=new rr(yl,()=>Et(()=>import("./SSAOBlur.glsl-37b215d8.js"),["./SSAOBlur.glsl-37b215d8.js","./index-27db053b.js","./index-5ad293c9.css","./OrderIndependentTransparency-6ae10952.js","./enums-bdecffa2.js","./basicInterfaces-11f56cb3.js","./VertexAttribute-0e674613.js","./devEnvironmentUtils-4eab2a99.js","./mat3f64-221ce671.js","./mat4f64-1413b4a7.js","./BufferView-3e8730e9.js","./vec32-c805d126.js","./DefaultMaterial_COLOR_GAMMA-89f60b70.js","./Version-3276c9a1.js","./quat-1c54f1d6.js","./quatf64-3363c48e.js","./resourceUtils-84f6af6b.js","./Indices-28981df2.js","./vec4f64-3c9d0901.js","./NestedMap-1b5db22e.js","./requestImageUtils-6a56b5fe.js","./triangle-e4da7c55.js","./sphere-ea5142e2.js","./ByteSizeUnit-d4757d40.js","./lineSegment-7bd41e99.js","./Texture-4e3bcd4f.js","./InterleavedLayout-b972f7ee.js","./types-1305598a.js","./orientedBoundingBox-d4a2eb61.js","./plane-953798ba.js","./doublePrecisionUtils-e3c3d0d8.js","./lengthUtils-535759c3.js","./LRUCache-016147c2.js","./FramebufferObject-799c8348.js","./RenderState-1d6218ee.js"],import.meta.url));const Cl="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let wl=class extends Ct{constructor(){super(...arguments),this.projScale=1}},Al=class extends wl{constructor(){super(...arguments),this.intensity=1}},Ml=class extends Ct{},Rl=class extends Ml{constructor(){super(...arguments),this.blurSize=Ir()}};function Ol(t){t.fragment.uniforms.add(new re("projInfo",(e,r)=>Il(r))),t.fragment.uniforms.add(new Ve("zScale",(e,r)=>Ll(r))),t.fragment.code.add(s`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function Il(t){const e=t.camera.projectionMatrix;return e[11]===0?se(_o,2/(t.camera.fullWidth*e[0]),2/(t.camera.fullHeight*e[5]),(1+e[12])/e[0],(1+e[13])/e[5]):se(_o,-2/(t.camera.fullWidth*e[0]),-2/(t.camera.fullHeight*e[5]),(1-e[8])/e[0],(1-e[9])/e[5])}const _o=Pr();function Ll(t){return t.camera.projectionMatrix[11]===0?Qe(bo,0,1):Qe(bo,1,0)}const bo=Ir(),Eo=16;function $l(){const t=new or,e=t.fragment;return t.include(Ma),e.include(Hr),t.include(Ol),e.uniforms.add(new te("radius",(r,o)=>jr(o.camera))),e.code.add(s`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),e.code.add(s`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.uniforms.add(new Ve("nearFar",(r,o)=>o.camera.nearFar),new K("normalMap",r=>r.normalTexture),new K("depthMap",r=>r.depthTexture),new te("projScale",r=>r.projScale),new K("rnm",r=>r.noiseTexture),new Ve("rnmScale",(r,o)=>Qe(So,o.camera.fullWidth/r.noiseTexture.descriptor.width,o.camera.fullHeight/r.noiseTexture.descriptor.height)),new te("intensity",r=>r.intensity),new Ve("screenSize",(r,o)=>Qe(So,o.camera.fullWidth,o.camera.fullHeight))),t.outputs.add("fragOcclusion","float"),e.code.add(s`
    void main(void) {
      fillSphere();
      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
        fragOcclusion = 0.0;
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w < 0.5;

      float sum = 0.0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${s.int(Eo)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          if (texture(normalMap, tcTap).w < 0.5) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${s.int(Eo)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),t}function jr(t){return Math.max(10,20*t.computeScreenPixelSizeAtDist(Math.abs(4*t.relativeElevation)))}const So=Ir(),Pl=Object.freeze(Object.defineProperty({__proto__:null,build:$l,getRadius:jr},Symbol.toStringTag,{value:"Module"}));let $a=class Pa extends Vr{initializeProgram(e){return new Ur(e.rctx,Pa.shader.get().build(),tr)}initializePipeline(){return Lr({colorWrite:$r})}};$a.shader=new rr(Pl,()=>Et(()=>import("./SSAO.glsl-3dbc81bb.js"),["./SSAO.glsl-3dbc81bb.js","./index-27db053b.js","./index-5ad293c9.css","./OrderIndependentTransparency-6ae10952.js","./enums-bdecffa2.js","./basicInterfaces-11f56cb3.js","./VertexAttribute-0e674613.js","./vec4f64-3c9d0901.js","./devEnvironmentUtils-4eab2a99.js","./mat3f64-221ce671.js","./mat4f64-1413b4a7.js","./BufferView-3e8730e9.js","./vec32-c805d126.js","./DefaultMaterial_COLOR_GAMMA-89f60b70.js","./Version-3276c9a1.js","./quat-1c54f1d6.js","./quatf64-3363c48e.js","./resourceUtils-84f6af6b.js","./Indices-28981df2.js","./NestedMap-1b5db22e.js","./requestImageUtils-6a56b5fe.js","./triangle-e4da7c55.js","./sphere-ea5142e2.js","./ByteSizeUnit-d4757d40.js","./lineSegment-7bd41e99.js","./Texture-4e3bcd4f.js","./InterleavedLayout-b972f7ee.js","./types-1305598a.js","./orientedBoundingBox-d4a2eb61.js","./plane-953798ba.js","./doublePrecisionUtils-e3c3d0d8.js","./lengthUtils-535759c3.js","./LRUCache-016147c2.js","./FramebufferObject-799c8348.js","./RenderState-1d6218ee.js"],import.meta.url));var Mr;(function(t){t[t.Antialiasing=0]="Antialiasing",t[t.HighQualityTransparency=1]="HighQualityTransparency",t[t.HighResolutionVoxel=2]="HighResolutionVoxel",t[t.HighResolutionAtmosphere=3]="HighResolutionAtmosphere",t[t.SSAO=4]="SSAO",t[t.WaterReflection=5]="WaterReflection",t[t.HighResolutionShadows=6]="HighResolutionShadows",t[t.PhysicalPixelRendering=7]="PhysicalPixelRendering"})(Mr||(Mr={}));const pt=2;let Lt=class extends fl{constructor(t){super(t),this._context=null,this._passParameters=new Al,this._drawParameters=new Rl,this.produces=new Map([[ze.SSAO,()=>this._produces()]])}_produces(){return this._enableTime!=null&&this._context!=null}consumes(){return this._produces()?ml:Aa}initializeRenderContext(t){this._context=t,this.addHandles([gi(()=>{var e;return this.view.qualitySettings.ambientOcclusion||((e=this._context)==null?void 0:e.isFeatureEnabled(Mr.SSAO))},e=>e?this._enable():this._disable(),xi)])}uninitializeRenderContext(){this._disable(),this._context=null}_disable(){this._passParameters.noiseTexture=Gt(this._passParameters.noiseTexture),this._enableTime=null}destroy(){this._disable()}_enable(){var r;if(this._enableTime!=null||!this._context)return;const t=Uint8Array.from(atob(Cl),o=>o.charCodeAt(0)),e=new be;e.wrapMode=ie.CLAMP_TO_EDGE,e.pixelFormat=me.RGB,e.wrapMode=ie.REPEAT,e.hasMipmap=!0,e.width=32,e.height=32,this._passParameters.noiseTexture=new Je(this._context.renderContext.rctx,e,t),this._ssaoTechnique==null&&(this._ssaoTechnique=this._context.techniqueRepository.acquire($a)),this._blurTechnique==null&&(this._blurTechnique=this._context.techniqueRepository.acquire(Ia)),this._enableTime=Ti(0),(r=this._context)==null||r.requestRender()}renderNode(t,e,r){var C,L;const o=t.bindParameters,i=(C=o.linearDepth)==null?void 0:C.colorTexture,a=(L=r==null?void 0:r.normal)==null?void 0:L.colorTexture;if(this._enableTime==null||this._context==null||i==null||!a)return;if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=t.time,void this._context.requestRender();this._enableTime===0&&(this._enableTime=t.time);const n=t.rctx,l=o.camera,c=this.view.qualitySettings.fadeDuration,u=c>0?Math.min(c,t.time-this._enableTime)/c:1;this._passParameters.normalTexture=a,this._passParameters.depthTexture=i,this._passParameters.projScale=1/l.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Nl/jr(l)**6*u;const d=l.fullViewport[2],h=l.fullViewport[3],f=Math.round(d/pt),v=Math.round(h/pt),T=this._context.fbos,R=T.acquire(ce.RED,d,h);n.bindFramebuffer(R.fbo),n.setViewport(0,0,d,h),n.bindTechnique(this._ssaoTechnique,this._passParameters,o).bindDraw(this._drawParameters,o,this._passParameters),n.screen.draw();const D=n.bindTechnique(this._blurTechnique,this._passParameters,o);n.setViewport(0,0,f,v);const O=T.acquire(ce.RED,f,v);n.bindFramebuffer(O.fbo),this._drawParameters.colorTexture=R.colorTexture,Qe(this._drawParameters.blurSize,0,pt/h),D.bindDraw(this._drawParameters,o,this._passParameters),n.setViewport(0,0,f,v),n.screen.draw(),R.release();const z=T.acquire(ce.RED,f,v);return n.bindFramebuffer(z.fbo),n.setViewport(0,0,d,h),n.setClearColor(1,1,1,0),n.clear(Zi.COLOR_BUFFER_BIT),n.setViewport(0,0,f,v),this._drawParameters.colorTexture=O.colorTexture,Qe(this._drawParameters.blurSize,pt/d,0),D.bindDraw(this._drawParameters,o,this._passParameters),n.screen.draw(),n.setViewport4fv(l.fullViewport),O.release(),u<1&&this._context.requestRender(),z}};m([k({constructOnly:!0})],Lt.prototype,"view",void 0),m([k()],Lt.prototype,"_context",void 0),Lt=m([Io("esri.views.3d.webgl-engine.effects.ssao.SSAO")],Lt);const Nl=.5;function Wr(t,e){const r=t.fragment;e.receiveAmbientOcclusion?(r.uniforms.add(new K("ssaoTex",(o,i)=>{var a;return(a=i.ssao)==null?void 0:a.colorTexture})),r.constants.add("blurSizePixelsInverse","float",1/pt),r.code.add(s`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(s`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function Dl(t,e){const r=t.fragment,o=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;o===0?(r.uniforms.add(new Z("lightingAmbientSH0",(i,a)=>U(yo,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):o===1?(r.uniforms.add(new re("lightingAmbientSH_R",(i,a)=>se(Se,a.lighting.sh.r[0],a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3])),new re("lightingAmbientSH_G",(i,a)=>se(Se,a.lighting.sh.g[0],a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3])),new re("lightingAmbientSH_B",(i,a)=>se(Se,a.lighting.sh.b[0],a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):o===2&&(r.uniforms.add(new Z("lightingAmbientSH0",(i,a)=>U(yo,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0])),new re("lightingAmbientSH_R1",(i,a)=>se(Se,a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3],a.lighting.sh.r[4])),new re("lightingAmbientSH_G1",(i,a)=>se(Se,a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3],a.lighting.sh.g[4])),new re("lightingAmbientSH_B1",(i,a)=>se(Se,a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3],a.lighting.sh.b[4])),new re("lightingAmbientSH_R2",(i,a)=>se(Se,a.lighting.sh.r[5],a.lighting.sh.r[6],a.lighting.sh.r[7],a.lighting.sh.r[8])),new re("lightingAmbientSH_G2",(i,a)=>se(Se,a.lighting.sh.g[5],a.lighting.sh.g[6],a.lighting.sh.g[7],a.lighting.sh.g[8])),new re("lightingAmbientSH_B2",(i,a)=>se(Se,a.lighting.sh.b[5],a.lighting.sh.b[6],a.lighting.sh.b[7],a.lighting.sh.b[8]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),e.pbrMode!==M.Normal&&e.pbrMode!==M.Schematic||r.code.add(s`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const yo=P(),Se=Pr();function kr(t){t.uniforms.add(new Z("mainLightDirection",(e,r)=>r.lighting.mainLight.direction))}function ar(t){t.uniforms.add(new Z("mainLightIntensity",(e,r)=>r.lighting.mainLight.intensity))}function Co(t){kr(t.fragment),ar(t.fragment),t.fragment.code.add(s`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function Fl(t){const e=t.fragment.code;e.add(s`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(s`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(s`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Na(t){t.vertex.code.add(s`const float PI = 3.141592653589793;`),t.fragment.code.add(s`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function qr(t,e){const r=t.fragment.code;t.include(Na),e.pbrMode!==M.Normal&&e.pbrMode!==M.Schematic&&e.pbrMode!==M.Terrain&&e.pbrMode!==M.TerrainWithWater||(r.add(s`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(s`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),e.pbrMode!==M.Normal&&e.pbrMode!==M.Schematic||(t.include(Fl),r.add(s`struct PBRShadingInfo
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
};`),r.add(s`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(s`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(s`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}let Bl=class extends Q{constructor(e,r){super(e,"bool",$.Pass,(o,i,a)=>o.setUniform1b(e,r(i,a)))}};const Gl=.4;function Yr(t){t.constants.add("ambientBoostFactor","float",Gl)}function Xr(t){t.uniforms.add(new te("lightingGlobalFactor",(e,r)=>r.lighting.globalFactor))}function Da(t,e){const r=t.fragment;switch(t.include(Wr,e),e.pbrMode!==M.Disabled&&t.include(qr,e),t.include(Dl,e),t.include(Na),r.code.add(s`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode===M.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),Yr(r),Xr(r),kr(r),r.code.add(s`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.spherical?s`normalize(vPosWorld)`:s`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),ar(r),r.code.add(s`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),e.pbrMode){case M.Disabled:case M.WaterOnIntegratedMesh:case M.Water:t.include(Co),r.code.add(s`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case M.Normal:case M.Schematic:r.code.add(s`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(s`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),e.useFillLights?r.uniforms.add(new Bl("hasFillLights",(o,i)=>i.enableFillLights)):r.constants.add("hasFillLights","bool",!1),r.code.add(s`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new te("lightingSpecularStrength",(o,i)=>i.lighting.mainLight.specularStrength),new te("lightingEnvironmentStrength",(o,i)=>i.lighting.mainLight.environmentStrength)),r.code.add(s`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(s`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode!==M.Schematic||e.hasColorTexture?s`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:s`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case M.Terrain:case M.TerrainWithWater:t.include(Co),r.code.add(s`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluateTerrainLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:rt(e.pbrMode);case M.COUNT:}}function Wt(t,e){if(!e.multipassEnabled)return;t.fragment.include(Hr),t.fragment.uniforms.add(new K("terrainDepthTexture",(o,i)=>{var a;return(a=i.multipassTerrain.linearDepth)==null?void 0:a.colorTexture})),t.fragment.uniforms.add(new Ve("nearFar",(o,i)=>i.camera.nearFar));const r=e.occlusionPass;t.fragment.code.add(s`
   ${r?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      vec4 data = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0);
      float linearDepth = linearDepthFromRGBA(data, nearFar);
      ${r?s`return fragmentDepth < linearDepth && data != vec4(0.0, 0.0, 0.0, 1.0);`:s`
          if(fragmentDepth ${e.cullAboveGround?">":"<="} linearDepth){
            discard;
          }`}
    }`)}class zl extends Q{constructor(e,r,o){super(e,"mat4",$.Draw,(i,a,n,l)=>i.setUniformMatrix4fv(e,r(a,n,l)),o)}}let Vl=class extends Q{constructor(e,r,o){super(e,"mat4",$.Pass,(i,a,n)=>i.setUniformMatrix4fv(e,r(a,n)),o)}};function Fa(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new Vl("shadowMapMatrix",(r,o)=>o.shadowMap.getShadowMapMatrices(r.origin),4)),Ga(t))}function Ba(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new zl("shadowMapMatrix",(r,o)=>o.shadowMap.getShadowMapMatrices(r.origin),4)),Ga(t))}function Ga(t){const e=t.fragment;e.include(Sa),e.uniforms.add(new K("shadowMapTex",(r,o)=>o.shadowMap.depthTexture),new Ta("numCascades",(r,o)=>o.shadowMap.numCascades),new re("cascadeDistances",(r,o)=>o.shadowMap.cascadeDistances)),e.code.add(s`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMapTex, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMapTex);
}`)}function Ul(t){t.vertex.uniforms.add(new Me("colorTextureTransformMatrix",e=>e.colorTextureTransformMatrix!=null?e.colorTextureTransformMatrix:tt())),t.varyings.add("colorUV","vec2"),t.vertex.code.add(s`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Hl(t){t.vertex.uniforms.add(new Me("normalTextureTransformMatrix",e=>e.normalTextureTransformMatrix!=null?e.normalTextureTransformMatrix:tt())),t.varyings.add("normalUV","vec2"),t.vertex.code.add(s`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function jl(t){t.vertex.uniforms.add(new Me("emissiveTextureTransformMatrix",e=>e.emissiveTextureTransformMatrix!=null?e.emissiveTextureTransformMatrix:tt())),t.varyings.add("emissiveUV","vec2"),t.vertex.code.add(s`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Wl(t){t.vertex.uniforms.add(new Me("occlusionTextureTransformMatrix",e=>e.occlusionTextureTransformMatrix!=null?e.occlusionTextureTransformMatrix:tt())),t.varyings.add("occlusionUV","vec2"),t.vertex.code.add(s`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function kl(t){t.vertex.uniforms.add(new Me("metallicRoughnessTextureTransformMatrix",e=>e.metallicRoughnessTextureTransformMatrix!=null?e.metallicRoughnessTextureTransformMatrix:tt())),t.varyings.add("metallicRoughnessUV","vec2"),t.vertex.code.add(s`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function ql(t){t.code.add(s`vec4 premultiplyAlpha(vec4 v) {
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
}`)}function kt(t){t.include(ql),t.code.add(s`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${s.int(Ce.Multiply)}) {
        return allMixed;
      }
      if (mode == ${s.int(Ce.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(Ce.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${s.int(Ce.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(Ce.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function Yl(t){const e=new or,{vertex:r,fragment:o,varyings:i}=e;if(Tt(r,t),e.include(Gr),i.add("vpos","vec3"),e.include(_t,t),e.include(xa,t),e.include(Ea,t),t.hasColorTextureTransform&&e.include(Ul),t.output===x.Color||t.output===x.Alpha){t.hasNormalTextureTransform&&e.include(Hl),t.hasEmissionTextureTransform&&e.include(jl),t.hasOcclusionTextureTransform&&e.include(Wl),t.hasMetallicRoughnessTextureTransform&&e.include(kl),bt(r,t),e.include(er,t),e.include(xt,t);const a=t.normalType===H.Attribute||t.normalType===H.Compressed;a&&t.offsetBackfaces&&e.include(ma),e.include(hl,t),e.include(la,t),t.instancedColor&&e.attributes.add(p.INSTANCECOLOR,"vec4"),i.add("vPositionLocal","vec3"),e.include(Ze,t),e.include(ha,t),e.include(_a,t),e.include(ba,t),r.uniforms.add(new re("externalColor",n=>n.externalColor)),i.add("vcolorExt","vec4"),t.multipassEnabled&&i.add("depth","float"),r.code.add(s`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${t.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${s.float(zr)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${a?s`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${t.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${a&&t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${t.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${t.hasColorTextureTransform?s`forwardColorUV();`:""}
        ${t.hasNormalTextureTransform?s`forwardNormalUV();`:""}
        ${t.hasEmissionTextureTransform?s`forwardEmissiveUV();`:""}
        ${t.hasOcclusionTextureTransform?s`forwardOcclusionUV();`:""}
        ${t.hasMetallicRoughnessTextureTransform?s`forwardMetallicRoughnessUV();`:""}
      }
    `)}switch(t.output){case x.Alpha:e.include(Ue,t),e.include(He,t),e.include(Wt,t),o.uniforms.add(new te("opacity",a=>a.opacity),new te("layerOpacity",a=>a.layerOpacity)),t.hasColorTexture&&o.uniforms.add(new K("tex",a=>a.texture)),o.include(kt),o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.multipassEnabled?"terrainDepthTest(depth);":""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        ${t.hasVertexColors?s`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case x.Color:e.include(Ue,t),e.include(Da,t),e.include(Wr,t),e.include(He,t),e.include(t.instancedDoublePrecision?Fa:Ba,t),e.include(Wt,t),bt(o,t),o.uniforms.add(r.uniforms.get("localOrigin"),new Z("ambient",a=>a.ambient),new Z("diffuse",a=>a.diffuse),new te("opacity",a=>a.opacity),new te("layerOpacity",a=>a.layerOpacity)),t.hasColorTexture&&o.uniforms.add(new K("tex",a=>a.texture)),e.include(Zo,t),e.include(qr,t),o.include(kt),e.include(Zn,t),Yr(o),Xr(o),ar(o),o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.multipassEnabled?"terrainDepthTest(depth);":""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${t.normalType===H.ScreenDerivative?s`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:s`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${t.pbrMode===M.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${t.receiveShadows?"readShadowMap(vpos, linearDepth)":t.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?s`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.hasNormalTexture?s`
                mat3 tangentSpace = ${t.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${t.hasNormalTextureTransform?s`normalUV`:"vuv0"});`:s`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${t.spherical?s`normalize(posWorld);`:s`vec3(0.0, 0.0, 1.0);`}

        ${t.snowCover?s`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${t.pbrMode===M.Normal||t.pbrMode===M.Schematic?s`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover?s`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===et.Color?s`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return e.include(Ca,t),e}const Xl=Object.freeze(Object.defineProperty({__proto__:null,build:Yl},Symbol.toStringTag,{value:"Module"}));let Jl=class extends Ns{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=xr(ca),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=Ie.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=Ye(0,0,0),this.instancedDoublePrecision=!1,this.normalType=H.Attribute,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=Ye(.2,.2,.2),this.diffuse=Ye(.8,.8,.8),this.externalColor=Nr(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=P(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=St.Less,this.textureAlphaMode=J.Blend,this.textureAlphaCutoff=Ds,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=br.Occlude,this.isDecoration=!1}},Jr=class za extends Vr{initializeConfiguration(e,r){r.spherical=e.viewingMode===zt.Global,r.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,r.textureCoordinateType=r.hasColorTexture||r.hasMetallicRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture?ee.Default:ee.None,r.objectAndLayerIdColorInstanced=r.instanced}initializeProgram(e){return this._initializeProgram(e,za.shader)}_initializeProgram(e,r){return new Ur(e.rctx,r.get().build(this.configuration),tr)}_convertDepthTestFunction(e){return e===St.Lequal?Le.LEQUAL:Le.LESS}_makePipeline(e,r){const o=this.configuration,i=e===et.NONE,a=e===et.FrontFace;return Lr({blending:o.output!==x.Color&&o.output!==x.Alpha||!o.transparent?null:i?tn:rn(e),culling:Zl(o)?on(o.cullFace):null,depthTest:{func:an(e,this._convertDepthTestFunction(o.customDepthTest))},depthWrite:(i||a)&&o.writeDepth?nn:null,colorWrite:$r,stencilWrite:o.hasOccludees?Fs:null,stencilTest:o.hasOccludees?r?Gs:Bs:null,polygonOffset:i||a?null:sn(o.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}};function Zl(t){return t.cullFace!==Ie.None||!t.hasSlicePlane&&!t.transparent&&!t.doubleSidedMode}Jr.shader=new rr(Xl,()=>Et(()=>import("./DefaultMaterial.glsl-94eee851.js"),["./DefaultMaterial.glsl-94eee851.js","./mat3f64-221ce671.js","./mat4f64-1413b4a7.js","./index-27db053b.js","./index-5ad293c9.css","./OrderIndependentTransparency-6ae10952.js","./enums-bdecffa2.js","./basicInterfaces-11f56cb3.js","./VertexAttribute-0e674613.js","./orientedBoundingBox-d4a2eb61.js","./quat-1c54f1d6.js","./quatf64-3363c48e.js","./vec4f64-3c9d0901.js","./plane-953798ba.js","./sphere-ea5142e2.js","./ByteSizeUnit-d4757d40.js","./devEnvironmentUtils-4eab2a99.js","./BufferView-3e8730e9.js","./vec32-c805d126.js","./DefaultMaterial_COLOR_GAMMA-89f60b70.js","./Version-3276c9a1.js","./resourceUtils-84f6af6b.js","./Indices-28981df2.js","./NestedMap-1b5db22e.js","./requestImageUtils-6a56b5fe.js","./triangle-e4da7c55.js","./lineSegment-7bd41e99.js","./Texture-4e3bcd4f.js","./InterleavedLayout-b972f7ee.js","./types-1305598a.js","./doublePrecisionUtils-e3c3d0d8.js","./lengthUtils-535759c3.js","./LRUCache-016147c2.js","./FramebufferObject-799c8348.js","./RenderState-1d6218ee.js"],import.meta.url));let Bt=class extends Sr{};m([g({constValue:!0})],Bt.prototype,"hasSliceHighlight",void 0),m([g({constValue:!1})],Bt.prototype,"hasSliceInVertexProgram",void 0),m([g({constValue:$.Pass})],Bt.prototype,"pbrTextureBindType",void 0);class _ extends Bt{constructor(){super(...arguments),this.output=x.Color,this.alphaDiscardMode=J.Opaque,this.doubleSidedMode=oe.None,this.pbrMode=M.Disabled,this.cullFace=Ie.None,this.transparencyPassType=et.NONE,this.normalType=H.Attribute,this.textureCoordinateType=ee.None,this.customDepthTest=St.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}m([g({count:x.COUNT})],_.prototype,"output",void 0),m([g({count:J.COUNT})],_.prototype,"alphaDiscardMode",void 0),m([g({count:oe.COUNT})],_.prototype,"doubleSidedMode",void 0),m([g({count:M.COUNT})],_.prototype,"pbrMode",void 0),m([g({count:Ie.COUNT})],_.prototype,"cullFace",void 0),m([g({count:et.COUNT})],_.prototype,"transparencyPassType",void 0),m([g({count:H.COUNT})],_.prototype,"normalType",void 0),m([g({count:ee.COUNT})],_.prototype,"textureCoordinateType",void 0),m([g({count:St.COUNT})],_.prototype,"customDepthTest",void 0),m([g()],_.prototype,"spherical",void 0),m([g()],_.prototype,"hasVertexColors",void 0),m([g()],_.prototype,"hasSymbolColors",void 0),m([g()],_.prototype,"hasVerticalOffset",void 0),m([g()],_.prototype,"hasSlicePlane",void 0),m([g()],_.prototype,"hasSliceHighlight",void 0),m([g()],_.prototype,"hasColorTexture",void 0),m([g()],_.prototype,"hasMetallicRoughnessTexture",void 0),m([g()],_.prototype,"hasEmissionTexture",void 0),m([g()],_.prototype,"hasOcclusionTexture",void 0),m([g()],_.prototype,"hasNormalTexture",void 0),m([g()],_.prototype,"hasScreenSizePerspective",void 0),m([g()],_.prototype,"hasVertexTangents",void 0),m([g()],_.prototype,"hasOccludees",void 0),m([g()],_.prototype,"multipassEnabled",void 0),m([g()],_.prototype,"hasModelTransformation",void 0),m([g()],_.prototype,"offsetBackfaces",void 0),m([g()],_.prototype,"vvSize",void 0),m([g()],_.prototype,"vvColor",void 0),m([g()],_.prototype,"receiveShadows",void 0),m([g()],_.prototype,"receiveAmbientOcclusion",void 0),m([g()],_.prototype,"textureAlphaPremultiplied",void 0),m([g()],_.prototype,"instanced",void 0),m([g()],_.prototype,"instancedColor",void 0),m([g()],_.prototype,"objectAndLayerIdColorInstanced",void 0),m([g()],_.prototype,"instancedDoublePrecision",void 0),m([g()],_.prototype,"doublePrecisionRequiresObfuscation",void 0),m([g()],_.prototype,"writeDepth",void 0),m([g()],_.prototype,"transparent",void 0),m([g()],_.prototype,"enableOffset",void 0),m([g()],_.prototype,"cullAboveGround",void 0),m([g()],_.prototype,"snowCover",void 0),m([g()],_.prototype,"hasColorTextureTransform",void 0),m([g()],_.prototype,"hasEmissionTextureTransform",void 0),m([g()],_.prototype,"hasNormalTextureTransform",void 0),m([g()],_.prototype,"hasOcclusionTextureTransform",void 0),m([g()],_.prototype,"hasMetallicRoughnessTextureTransform",void 0),m([g({constValue:!1})],_.prototype,"occlusionPass",void 0),m([g({constValue:!0})],_.prototype,"hasVvInstancing",void 0),m([g({constValue:!1})],_.prototype,"useCustomDTRExponentForWater",void 0),m([g({constValue:!1})],_.prototype,"supportsTextureAtlas",void 0),m([g({constValue:!0})],_.prototype,"useFillLights",void 0);function Kl(t){const e=new or,{vertex:r,fragment:o,varyings:i}=e;return Tt(r,t),e.include(Gr),i.add("vpos","vec3"),e.include(_t,t),e.include(xa,t),e.include(Ea,t),t.output!==x.Color&&t.output!==x.Alpha||(bt(e.vertex,t),e.include(er,t),e.include(xt,t),t.offsetBackfaces&&e.include(ma),t.instancedColor&&e.attributes.add(p.INSTANCECOLOR,"vec4"),i.add("vNormalWorld","vec3"),i.add("localvpos","vec3"),t.multipassEnabled&&i.add("depth","float"),e.include(Ze,t),e.include(ha,t),e.include(_a,t),e.include(ba,t),r.uniforms.add(new re("externalColor",a=>a.externalColor)),i.add("vcolorExt","vec4"),r.code.add(s`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${t.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${s.float(zr)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${t.multipassEnabled?s`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),t.output===x.Alpha&&(e.include(Ue,t),e.include(He,t),e.include(Wt,t),o.uniforms.add(new te("opacity",a=>a.opacity),new te("layerOpacity",a=>a.layerOpacity)),t.hasColorTexture&&o.uniforms.add(new K("tex",a=>a.texture)),o.include(kt),o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.multipassEnabled?s`terrainDepthTest(depth);`:""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        ${t.hasVertexColors?s`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),t.output===x.Color&&(e.include(Ue,t),e.include(Da,t),e.include(Wr,t),e.include(He,t),e.include(t.instancedDoublePrecision?Fa:Ba,t),e.include(Wt,t),bt(e.fragment,t),kr(o),Yr(o),Xr(o),o.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new Z("ambient",a=>a.ambient),new Z("diffuse",a=>a.diffuse),new te("opacity",a=>a.opacity),new te("layerOpacity",a=>a.layerOpacity)),t.hasColorTexture&&o.uniforms.add(new K("tex",a=>a.texture)),e.include(Zo,t),e.include(qr,t),o.include(kt),ar(o),o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.multipassEnabled?s`terrainDepthTest(depth);`:""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${t.pbrMode===M.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":t.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?s`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.snowCover?s`albedo = mix(albedo, vec3(1), 0.9);`:s``}
        ${s`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${t.pbrMode===M.Normal||t.pbrMode===M.Schematic?t.spherical?s`vec3 normalGround = normalize(vpos + localOrigin);`:s`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:s``}
        ${t.pbrMode===M.Normal||t.pbrMode===M.Schematic?s`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover?s`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===et.Color?s`fragColor = premultiplyAlpha(fragColor);`:s``}
      }
    `)),e.include(Ca,t),e}const Ql=Object.freeze(Object.defineProperty({__proto__:null,build:Kl},Symbol.toStringTag,{value:"Module"}));class ir extends Jr{initializeConfiguration(e,r){super.initializeConfiguration(e,r),r.hasMetallicRoughnessTexture=!1,r.hasEmissionTexture=!1,r.hasOcclusionTexture=!1,r.hasNormalTexture=!1,r.hasModelTransformation=!1,r.normalType=H.Attribute,r.doubleSidedMode=oe.WindingOrder,r.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,ir.shader)}}ir.shader=new rr(Ql,()=>Et(()=>import("./RealisticTree.glsl-cdc225ba.js"),["./RealisticTree.glsl-cdc225ba.js","./mat3f64-221ce671.js","./mat4f64-1413b4a7.js","./index-27db053b.js","./index-5ad293c9.css","./OrderIndependentTransparency-6ae10952.js","./enums-bdecffa2.js","./basicInterfaces-11f56cb3.js","./VertexAttribute-0e674613.js","./orientedBoundingBox-d4a2eb61.js","./quat-1c54f1d6.js","./quatf64-3363c48e.js","./vec4f64-3c9d0901.js","./plane-953798ba.js","./sphere-ea5142e2.js","./ByteSizeUnit-d4757d40.js","./devEnvironmentUtils-4eab2a99.js","./BufferView-3e8730e9.js","./vec32-c805d126.js","./DefaultMaterial_COLOR_GAMMA-89f60b70.js","./Version-3276c9a1.js","./resourceUtils-84f6af6b.js","./Indices-28981df2.js","./NestedMap-1b5db22e.js","./requestImageUtils-6a56b5fe.js","./triangle-e4da7c55.js","./lineSegment-7bd41e99.js","./Texture-4e3bcd4f.js","./InterleavedLayout-b972f7ee.js","./types-1305598a.js","./doublePrecisionUtils-e3c3d0d8.js","./lengthUtils-535759c3.js","./LRUCache-016147c2.js","./FramebufferObject-799c8348.js","./RenderState-1d6218ee.js"],import.meta.url));let qt=class extends gs{constructor(e){super(e,rc),this.supportsEdges=!0,this._configuration=new _,this._vertexBufferLayout=oc(this.parameters)}isVisibleForOutput(e){return e!==x.Shadow&&e!==x.ShadowExcludeHighlight&&e!==x.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||e.layerOpacity===0)return!1;const{hasInstancedColor:r,hasVertexColors:o,hasSymbolColors:i,vvColor:a}=e,n=e.colorMixMode==="replace",l=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0,u=r||a||i;return o&&u?n||l:o?n?c:l:u?n||l:n?c:l}getConfiguration(e,r){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=this.parameters.verticalOffset!=null,this._configuration.hasScreenSizePerspective=this.parameters.screenSizePerspective!=null,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this.parameters.customDepthTest!=null&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?Ie.None:this.parameters.cullFace,this._configuration.multipassEnabled=r.multipassEnabled,this._configuration.cullAboveGround=r.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=this.parameters.modelTransformation!=null,e!==x.Color&&e!==x.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=oe.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?oe.View:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?oe.WindingOrder:oe.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=r.ssao!=null,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?M.Schematic:M.Normal:M.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=r.transparencyPassType,this._configuration.enableOffset=r.camera.relativeElevation<ln,this._configuration.snowCover=this.hasSnowCover(r),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return e.weather!=null&&e.weatherVisible&&e.weather.type==="snowy"&&e.weather.snowCover==="enabled"}intersect(e,r,o,i,a,n){if(this.parameters.verticalOffset!=null){const l=o.camera;U(fr,r[12],r[13],r[14]);let c=null;switch(o.viewingMode){case zt.Global:c=Or(wo,fr);break;case zt.Local:c=_i(wo,nc)}let u=0;const d=Xe(sc,fr,l.eye),h=he(d),f=Te(d,d,1/h);let v=null;this.parameters.screenSizePerspective&&(v=bi(c,f)),u+=hs(l,h,this.parameters.verticalOffset,v??0,this.parameters.screenSizePerspective),Te(c,c,u),Ei(pr,c,o.transform.inverseRotation),i=Xe(ac,i,pr),a=Xe(ic,a,pr)}ns(e,o,i,a,_s(o.verticalOffset),n)}produces(e,r){return r===x.Color||r===x.Alpha||r===x.Depth||r===x.Normal||r===x.Shadow||r===x.ShadowHighlight||r===x.ShadowExcludeHighlight||r===x.Highlight||r===x.ObjectAndLayerIdColor?e===(this.parameters.transparent?this.parameters.writeDepth?ze.TRANSPARENT_MATERIAL:ze.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:ze.OPAQUE_MATERIAL)||e===ze.DRAPED_MATERIAL:!1}createGLMaterial(e){return new ec(e)}createBufferWriter(){return new $s(this._vertexBufferLayout)}},ec=class extends es{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==x.Color&&this._output!==x.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const r=this._material.parameters;this.updateTexture(r.textureId);const o=e.camera.viewInverseTransposeMatrix;return U(r.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(r.treeRendering?ir:Jr,e)}},tc=class extends Jl{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}};const rc=new tc;function oc(t){const e=en().vec3f(p.POSITION);return t.normalType===H.Compressed?e.vec2i16(p.NORMALCOMPRESSED,{glNormalized:!0}):e.vec3f(p.NORMAL),t.hasVertexTangents&&e.vec4f(p.TANGENT),(t.textureId||t.normalTextureId||t.metallicRoughnessTextureId||t.emissiveTextureId||t.occlusionTextureId)&&e.vec2f(p.UV0),t.hasVertexColors&&e.vec4u8(p.COLOR),t.hasSymbolColors&&e.vec4u8(p.SYMBOLCOLOR),Si("enable-feature:objectAndLayerId-rendering")&&e.vec4u8(p.OBJECTANDLAYERIDCOLOR),e}const ac=P(),ic=P(),nc=Ye(0,0,1),wo=P(),pr=P(),fr=P(),sc=P(),ye=Rr.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function lc(t,e){const r=await cc(t,e),o=await pc(r.textureDefinitions??{},e);let i=0;for(const a in o)if(o.hasOwnProperty(a)){const n=o[a];i+=n!=null&&n.image?n.image.width*n.image.height*4:0}return{resource:r,textures:o,size:i+yi(r)}}async function cc(t,e){const r=e==null?void 0:e.streamDataRequester;if(r)return dc(t,r,e);const o=await $o(Ci(t,e));if(o.ok===!0)return o.value.data;Po(o.error),Va(o.error)}async function dc(t,e,r){const o=await $o(e.request(t,"json",r));if(o.ok===!0)return o.value;Po(o.error),Va(o.error.details.url)}function Va(t){throw new Yt("",`Request for object resource failed: ${t}`)}function uc(t){const e=t.params,r=e.topology;let o=!0;switch(e.vertexAttributes||(ye.warn("Geometry must specify vertex attributes"),o=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const a=e.faces;if(a){if(e.vertexAttributes)for(const n in e.vertexAttributes){const l=a[n];l!=null&&l.values?(l.valueType!=null&&l.valueType!=="UInt32"&&(ye.warn(`Unsupported indexed geometry indices type '${l.valueType}', only UInt32 is currently supported`),o=!1),l.valuesPerElement!=null&&l.valuesPerElement!==1&&(ye.warn(`Unsupported indexed geometry values per element '${l.valuesPerElement}', only 1 is currently supported`),o=!1)):(ye.warn(`Indexed geometry does not specify face indices for '${n}' attribute`),o=!1)}}else ye.warn("Indexed geometries must specify faces"),o=!1;break}default:ye.warn(`Unsupported topology '${r}'`),o=!1}t.params.material||(ye.warn("Geometry requires material"),o=!1);const i=t.params.vertexAttributes;for(const a in i)i[a].values||(ye.warn("Geometries with externally defined attributes are not yet supported"),o=!1);return o}function hc(t,e){var T,R;const r=new Array,o=new Array,i=new Array,a=new ji,n=t.resource,l=Do.parse(n.version||"1.0","wosr");vc.validate(l);const c=n.model.name,u=n.model.geometries,d=n.materialDefinitions??{},h=t.textures;let f=0;const v=new Map;for(let D=0;D<u.length;D++){const O=u[D];if(!uc(O))continue;const z=fc(O),C=O.params.vertexAttributes,L=[],B=I=>{if(O.params.topology==="PerAttributeArray")return null;const F=O.params.faces;for(const V in F)if(V===I)return F[V].values;return null},G=C[p.POSITION],w=G.values.length/G.valuesPerElement;for(const I in C){const F=C[I],V=F.values,ae=B(I)??Fo(w);L.push([I,new We(V,ae,F.valuesPerElement,!0)])}const E=z.texture,b=h&&h[E];if(b&&!v.has(E)){const{image:I,parameters:F}=b,V=new Yo(I,F);o.push(V),v.set(E,V)}const A=v.get(E),S=A?A.id:void 0,N=z.material;let y=a.get(N,E);if(y==null){const I=d[N.substring(N.lastIndexOf("/")+1)].params;I.transparency===1&&(I.transparency=0);const F=b&&b.alphaChannelUsage,V=I.transparency>0||F==="transparency"||F==="maskAndTransparency",ae=b?Ua(b.alphaChannelUsage):void 0,ve={ambient:xr(I.diffuse),diffuse:xr(I.diffuse),opacity:1-(I.transparency||0),transparent:V,textureAlphaMode:ae,textureAlphaCutoff:.33,textureId:S,initTextureTransparent:!0,doubleSided:!0,cullFace:Ie.None,colorMixMode:I.externalColorMixMode||"tint",textureAlphaPremultiplied:(b==null?void 0:b.parameters.preMultiplyAlpha)??!1};e!=null&&e.materialParameters&&Object.assign(ve,e.materialParameters),y=new qt(ve),a.set(N,E,y)}i.push(y);const j=new zo(y,L);f+=((R=(T=L.find(I=>I[0]===p.POSITION))==null?void 0:T[1])==null?void 0:R.indices.length)??0,r.push(j)}return{engineResources:[{name:c,stageResources:{textures:o,materials:i,geometries:r},pivotOffset:n.model.pivotOffset,numberOfVertices:f,lodThreshold:null}],referenceBoundingBox:mc(r)}}function mc(t){const e=No();return t.forEach(r=>{const o=r.boundingInfo;o!=null&&(Vt(e,o.bbMin),Vt(e,o.bbMax))}),e}async function pc(t,e){const r=new Array;for(const a in t){const n=t[a],l=n.images[0].data;if(!l){ye.warn("Externally referenced texture data is not yet supported");continue}const c=n.encoding+";base64,"+l,u="/textureDefinitions/"+a,d=n.channels==="rgba"?n.alphaChannelUsage||"transparency":"none",h={noUnpackFlip:!0,wrap:{s:ie.REPEAT,t:ie.REPEAT},preMultiplyAlpha:Ua(d)!==J.Opaque},f=e!=null&&e.disableTextures?Promise.resolve(null):Bo(c,e);r.push(f.then(v=>({refId:u,image:v,parameters:h,alphaChannelUsage:d})))}const o=await Promise.all(r),i={};for(const a of o)i[a.refId]=a;return i}function Ua(t){switch(t){case"mask":return J.Mask;case"maskAndTransparency":return J.MaskBlend;case"none":return J.Opaque;default:return J.Blend}}function fc(t){const e=t.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const vc=new Do(1,2,"wosr");async function gc(t,e){var h;const r=Ha(Wa(t));if(r.fileType==="wosr"){const f=await(e.cache?e.cache.loadWOSR(r.url,e):lc(r.url,e)),{engineResources:v,referenceBoundingBox:T}=hc(f,e);return{lods:v,referenceBoundingBox:T,isEsriSymbolResource:!1,isWosr:!0}}const o=await(e.cache?e.cache.loadGLTF(r.url,e,!!e.usePBR):Fi(new Bi(e.streamDataRequester),r.url,e,e.usePBR)),i=(h=o.model.meta)==null?void 0:h.ESRI_proxyEllipsoid,a=o.meta.isEsriSymbolResource&&i!=null&&o.meta.uri.includes("/RealisticTrees/");a&&!o.customMeta.esriTreeRendering&&(o.customMeta.esriTreeRendering=!0,bc(o,i));const n=!!e.usePBR,l=o.meta.isEsriSymbolResource?{usePBR:n,isSchematic:!1,treeRendering:a,mrrFactors:[...Us]}:{usePBR:n,isSchematic:!1,treeRendering:!1,mrrFactors:[...ca]},c={...e.materialParameters,treeRendering:a},{engineResources:u,referenceBoundingBox:d}=ja(o,l,c,e.skipHighLods&&r.specifiedLodIndex==null?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:u,referenceBoundingBox:d,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1}}function Ha(t){const e=t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:t.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:t,specifiedLodIndex:null}:{fileType:"unknown",url:t,specifiedLodIndex:null}}function ja(t,e,r,o){const i=t.model,a=new Array,n=new Map,l=new Map,c=i.lods.length,u=No();return i.lods.forEach((d,h)=>{const f=o.skipHighLods===!0&&(c>1&&h===0||c>3&&h===1)||o.skipHighLods===!1&&o.singleLodIndex!=null&&h!==o.singleLodIndex;if(f&&h!==0)return;const v=new Sn(d.name,d.lodThreshold,[0,0,0]);d.parts.forEach(T=>{const R=f?new qt({}):xc(i,T,v,e,r,n,l),{geometry:D,vertexCount:O}=Tc(T,R??new qt({})),z=D.boundingInfo;z!=null&&h===0&&(Vt(u,z.bbMin),Vt(u,z.bbMax)),R!=null&&(v.stageResources.geometries.push(D),v.numberOfVertices+=O)}),f||a.push(v)}),{engineResources:a,referenceBoundingBox:u}}function xc(t,e,r,o,i,a,n){const l=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),c=t.materials.get(e.material),u=e.attributes.texCoord0!=null,d=e.attributes.normal!=null;if(c==null)return null;const h=_c(c.alphaMode);if(!a.has(l)){if(u){const B=(G,w=!1)=>{if(G!=null&&!n.has(G)){const E=t.textures.get(G);if(E!=null){const b=E.data;n.set(G,new Yo(sr(b)?b.data:b,{...E.parameters,preMultiplyAlpha:!sr(b)&&w,encoding:sr(b)&&b.encoding!=null?b.encoding:void 0}))}}};B(c.textureColor,h!==J.Opaque),B(c.textureNormal),B(c.textureOcclusion),B(c.textureEmissive),B(c.textureMetallicRoughness)}const v=c.color[0]**(1/je),T=c.color[1]**(1/je),R=c.color[2]**(1/je),D=c.emissiveFactor[0]**(1/je),O=c.emissiveFactor[1]**(1/je),z=c.emissiveFactor[2]**(1/je),C=c.textureColor!=null&&u?n.get(c.textureColor):null,L=zs({normalTexture:c.textureNormal,metallicRoughnessTexture:c.textureMetallicRoughness,metallicFactor:c.metallicFactor,roughnessFactor:c.roughnessFactor,emissiveTexture:c.textureEmissive,emissiveFactor:c.emissiveFactor,occlusionTexture:c.textureOcclusion});a.set(l,new qt({...o,transparent:h===J.Blend,customDepthTest:St.Lequal,textureAlphaMode:h,textureAlphaCutoff:c.alphaCutoff,diffuse:[v,T,R],ambient:[v,T,R],opacity:c.opacity,doubleSided:c.doubleSided,doubleSidedType:"winding-order",cullFace:c.doubleSided?Ie.None:Ie.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normalType:d?H.Attribute:H.ScreenDerivative,castShadows:!0,textureId:C!=null?C.id:void 0,colorMixMode:c.colorMixMode,normalTextureId:c.textureNormal!=null&&u?n.get(c.textureNormal).id:void 0,textureAlphaPremultiplied:C!=null&&!!C.parameters.preMultiplyAlpha,occlusionTextureId:c.textureOcclusion!=null&&u?n.get(c.textureOcclusion).id:void 0,emissiveTextureId:c.textureEmissive!=null&&u?n.get(c.textureEmissive).id:void 0,metallicRoughnessTextureId:c.textureMetallicRoughness!=null&&u?n.get(c.textureMetallicRoughness).id:void 0,emissiveFactor:[D,O,z],mrrFactors:L?[...Vs]:[c.metallicFactor,c.roughnessFactor,o.mrrFactors[2]],isSchematic:L,colorTextureTransformMatrix:st(c.colorTextureTransform),normalTextureTransformMatrix:st(c.normalTextureTransform),occlusionTextureTransformMatrix:st(c.occlusionTextureTransform),emissiveTextureTransformMatrix:st(c.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:st(c.metallicRoughnessTextureTransform),...i}))}const f=a.get(l);if(r.stageResources.materials.push(f),u){const v=T=>{T!=null&&r.stageResources.textures.push(n.get(T))};v(c.textureColor),v(c.textureNormal),v(c.textureOcclusion),v(c.textureEmissive),v(c.textureMetallicRoughness)}return f}function Tc(t,e){const r=t.attributes.position.count,o=Gi(t.indices||r,t.primitiveType),i=At(3*r),{typedBuffer:a,typedBufferStride:n}=t.attributes.position;Ni(i,a,t.transform,3,n);const l=[[p.POSITION,new We(i,o,3,!0)]];if(t.attributes.normal!=null){const c=At(3*r),{typedBuffer:u,typedBufferStride:d}=t.attributes.normal;gr($t,t.transform),Di(c,u,$t,3,d),l.push([p.NORMAL,new We(c,o,3,!0)])}if(t.attributes.tangent!=null){const c=At(4*r),{typedBuffer:u,typedBufferStride:d}=t.attributes.tangent;gr($t,t.transform),zi(c,u,$t,4,d),l.push([p.TANGENT,new We(c,o,4,!0)])}if(t.attributes.texCoord0!=null){const c=At(2*r),{typedBuffer:u,typedBufferStride:d}=t.attributes.texCoord0;Vi(c,u,2,d),l.push([p.UV0,new We(c,o,2,!0)])}if(t.attributes.color!=null){const c=new Uint8Array(4*r);t.attributes.color.elementCount===4?t.attributes.color instanceof Tr?io(c,t.attributes.color,255):t.attributes.color instanceof Kt?Ui(c,t.attributes.color):t.attributes.color instanceof Li&&io(c,t.attributes.color,1/256):(c.fill(255),t.attributes.color instanceof Ht?ao(c,t.attributes.color,255,4):t.attributes.color instanceof $i?Hi(c,t.attributes.color.typedBuffer,4,t.attributes.color.typedBufferStride):t.attributes.color instanceof Pi&&ao(c,t.attributes.color,1/256,4)),l.push([p.COLOR,new We(c,o,4,!0)])}return{geometry:new zo(e,l),vertexCount:r}}const $t=Jt();function _c(t){switch(t){case"BLEND":return J.Blend;case"MASK":return J.Mask;case"OPAQUE":case null:case void 0:return J.Opaque}}function bc(t,e){for(let r=0;r<t.model.lods.length;++r){const o=t.model.lods[r];for(const i of o.parts){const a=i.attributes.normal;if(a==null)return;const n=i.attributes.position,l=n.count,c=P(),u=P(),d=P(),h=new Uint8Array(4*l),f=new Float64Array(3*l),v=wi(Zt(),i.transform);let T=0,R=0;for(let D=0;D<l;D++){n.getVec(D,u),a.getVec(D,c),Re(u,u,i.transform),Xe(d,u,e.center),oo(d,d,e.radius);const O=d[2],z=he(d),C=Math.min(.45+.55*z*z,1);oo(d,d,e.radius),v!==null&&Re(d,d,v),Or(d,d),r+1!==t.model.lods.length&&t.model.lods.length>1&&Ai(d,d,c,O>-1?.2:Math.min(-4*O-3.8,1)),f[T]=d[0],f[T+1]=d[1],f[T+2]=d[2],T+=3,h[R]=255*C,h[R+1]=255*C,h[R+2]=255*C,h[R+3]=255,R+=4}i.attributes.normal=new Ht(f),i.attributes.color=new Kt(h)}}}const Qd=Object.freeze(Object.defineProperty({__proto__:null,fetch:gc,gltfToEngineResources:ja,parseUrl:Ha},Symbol.toStringTag,{value:"Module"}));export{Yl as H,Kl as I,jr as d,$l as f,Qd as o,Sl as u};
