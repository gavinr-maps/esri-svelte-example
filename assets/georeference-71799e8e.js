import{gb as xt,gc as vt,gd as dt,cm as bt,fT as wt,ge as Mt,a as h,b as P,c as Rt,ao as _t,bT as k,gf as Ct,bU as it,cl as R,gg as Ot,gh as st,gi as J,gj as Et,s as lt,ea as j,gk as B,gl as K,e4 as Q,e3 as X,gm as Nt,c8 as St,gn as jt,bR as Bt,bS as zt,fR as z,go as ct,gp as Z,gq as Lt,gr as Vt,bi as Gt,gs as It,gt as Wt,eE as qt,ak as Ut}from"./index-e8c6bcc0.js";import{e as ut}from"./mat3f64-221ce671.js";import{e as b,o as N}from"./mat4f64-1413b4a7.js";import{c as M}from"./spatialReferenceEllipsoidUtils-d64e600f.js";import{m as kt,p as Yt,t as tt,o as Dt}from"./MeshLocalVertexSpace-c2537e93.js";import{m as Ht}from"./MeshGeoreferencedRelativeVertexSpace-c1b8c848.js";import{v as I,y as Jt,x as Kt}from"./quat-27293769.js";import{e as Y}from"./quatf64-3363c48e.js";import{n as x,s as ft,r as w}from"./vec32-7a655b74.js";import{i as $,T as A}from"./BufferView-936b5578.js";function T(t=pt){return[t[0],t[1],t[2],t[3]]}function S(t,r,e=T()){return bt(e,t),e[3]=r,e}function rt(t,r,e=T()){return I(_,t,W(t)),I(et,r,W(r)),Jt(_,et,_),Xt(e,wt(Kt(e,_)))}function Er(t,r,e,n=T()){return S(xt,t,C),S(vt,r,nt),S(dt,e,ot),rt(C,nt,C),rt(C,ot,n),n}function Nr(t){return t}function Qt(t){return t[3]}function W(t){return Mt(t[3])}function Xt(t,r){return t[3]=r,t}const pt=[0,0,1,0],_=Y(),et=Y();T();const C=T(),nt=T(),ot=T();var q;let m=q=class extends _t{constructor(t){super(t),this.translation=k(),this.rotationAxis=Ct(pt),this.rotationAngle=0,this.scale=it(1,1,1)}get rotation(){return S(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=R(t),this.rotationAngle=Qt(t)}get localMatrix(){const t=b();return I(at,this.rotation,W(this.rotation)),Ot(t,at,this.translation,this.scale),t}get localMatrixInverse(){return st(b(),this.localMatrix)}applyLocal(t,r){return J(r,t,this.localMatrix)}applyLocalInverse(t,r){return J(r,t,this.localMatrixInverse)}equals(t){return this===t||t!=null&&Et(this.localMatrix,t.localMatrix)}clone(){const t={translation:R(this.translation),rotationAxis:R(this.rotationAxis),rotationAngle:this.rotationAngle,scale:R(this.scale)};return new q(t)}};h([P({type:[Number],nonNullable:!0,json:{write:!0}})],m.prototype,"translation",void 0),h([P({type:[Number],nonNullable:!0,json:{write:!0}})],m.prototype,"rotationAxis",void 0),h([P({type:Number,nonNullable:!0,json:{write:!0}})],m.prototype,"rotationAngle",void 0),h([P({type:[Number],nonNullable:!0,json:{write:!0}})],m.prototype,"scale",void 0),h([P()],m.prototype,"rotation",null),h([P()],m.prototype,"localMatrix",null),h([P()],m.prototype,"localMatrixInverse",null),m=q=h([Rt("esri.geometry.support.MeshTransform")],m);const at=Y(),Zt=m;function gt(t,r){return t.isGeographic||t.isWebMercator&&((r==null?void 0:r.geographic)??!0)}function Sr(t,r,e){const n=!t.isGeoreferenced;(e==null?void 0:e.geographic)!=null&&e.geographic!==n&&lt.getLogger(r).warnOnce(`Specifying the 'geographic' parameter (${e.geographic}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`)}const L=lt.getLogger("esri.geometry.support.meshUtils.normalProjection");function tr(t,r,e,n,o){return G(n)?(V(y.TO_PCPF,$.fromTypedArray(t),A.fromTypedArray(r),A.fromTypedArray(e),n,$.fromTypedArray(o)),o):(L.error("Cannot convert spatial reference to PCPF"),o)}function rr(t,r,e,n,o){return G(n)?(V(y.FROM_PCPF,$.fromTypedArray(t),A.fromTypedArray(r),A.fromTypedArray(e),n,$.fromTypedArray(o)),o):(L.error("Cannot convert to spatial reference from PCPF"),o)}function er(t,r,e){return j(t,r,0,e,M(r),0,t.length/3),e}function nr(t,r,e){return j(t,M(e),0,r,e,0,t.length/3),r}function or(t,r,e){return z(u,e),x(r,t,u),ct(u)||ft(r,r),r}function ar(t,r,e){if(z(u,e),x(r,t,u,4),ct(u)||ft(r,r,4),t!==r)for(let n=3;n<t.length;n+=4)r[n]=t[n];return r}function ir(t,r,e,n,o){if(!G(n))return L.error("Cannot convert spatial reference to PCPF"),o;V(y.TO_PCPF,$.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),A.fromTypedArray(r),A.fromTypedArray(e),n,$.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT));for(let a=3;a<t.length;a+=4)o[a]=t[a];return o}function sr(t,r,e,n,o){if(!G(n))return L.error("Cannot convert to spatial reference from PCPF"),o;V(y.FROM_PCPF,$.fromTypedArray(t,16),A.fromTypedArray(r),A.fromTypedArray(e),n,$.fromTypedArray(o,16));for(let a=3;a<t.length;a+=4)o[a]=t[a];return o}function V(t,r,e,n,o,a){if(!r)return;const i=e.count,c=M(o);if(mt(o))for(let s=0;s<i;s++)n.getVec(s,O),r.getVec(s,g),B(c,O,E,c),K(u,E),t===y.FROM_PCPF&&Q(u,u),X(g,g,u),a.setVec(s,g);else for(let s=0;s<i;s++){n.getVec(s,O),r.getVec(s,g),B(c,O,E,c),K(u,E);const l=Nt(e.get(s,1));let f=Math.cos(l);t===y.TO_PCPF&&(f=1/f),u[0]*=f,u[1]*=f,u[2]*=f,u[3]*=f,u[4]*=f,u[5]*=f,t===y.FROM_PCPF&&Q(u,u),X(g,g,u),St(g,g),a.setVec(s,g)}return a}function G(t){return mt(t)||lr(t)}function mt(t){return t.isWGS84||jt(t)||Bt(t)||zt(t)}function lr(t){return t.isWebMercator}var y;(function(t){t[t.TO_PCPF=0]="TO_PCPF",t[t.FROM_PCPF=1]="FROM_PCPF"})(y||(y={}));const O=k(),g=k(),E=b(),u=ut();function D(t,r,e){return gt(r.spatialReference,e)?gr(t,r,e):pr(t,r,e)}function yt(t,r,e,n){const{position:o,normal:a,tangent:i}=t;if(!r.isRelative)return{position:o,normal:a,tangent:i};const c=(e==null?void 0:e.localMatrix)??N;return D({position:w(new Float64Array(o.length),o,c),normal:a!=null?or(a,new Float32Array(a.length),c):null,tangent:i!=null?ar(i,new Float32Array(i.length),c):null},r.getOriginPoint(n),{geographic:!r.isGeoreferenced})}function cr(t,r,e){if(e!=null&&e.useTransform){const{position:n,normal:o,tangent:a}=t,{x:i,y:c,z:s}=r,l=it(i,c,s??0);return{vertexAttributes:{position:n,normal:o,tangent:a},vertexSpace:e.geographic??1?new kt({origin:l}):new Ht({origin:l}),transform:new Zt}}return{vertexAttributes:D(t,r,e),vertexSpace:new Yt,transform:null}}function U(t,r,e){return gt(r.spatialReference,e)?$r(t,r,e):ht(t,r,e)}function ur(t,r,e,n,o){if(!r.isRelative)return U(t,n,o);const{spatialReference:a}=n,i=yt(t,r,e,a);return n.equals(r.getOriginPoint(a))?ht(i,n,o):U(i,n,o)}function fr({positions:t,transform:r,vertexSpace:e,inSpatialReference:n,outSpatialReference:o,outPositions:a,local:i}){const c=e.isRelative?e.origin:Z,s=e.isRelative?(r==null?void 0:r.localMatrix)??N:N;if(e.isGeoreferenced){const p=a??tt(t.length);if(Lt(s,N)?Dt(p,t):w(p,t,s),!Vt(c,Z)){const[Pt,Ft,Tt]=c;for(let d=0;d<p.length;d+=3)p[d]+=Pt,p[d+1]+=Ft,p[d+2]+=Tt}return j(p,n,0,p,o,0,p.length/3),p}const l=M(n),f=!i&&Gt(n,l)?l:n;B(n,c,F,f),It(F,F,s);const v=a??tt(t.length);return w(v,t,F),j(v,f,0,v,o,0,v.length/3),v}function pr(t,r,e){const n=new Float64Array(t.position.length),o=t.position,a=r.x,i=r.y,c=r.z??0,s=H(e?e.unit:null,r.spatialReference);for(let l=0;l<o.length;l+=3)n[l]=o[l]*s+a,n[l+1]=o[l+1]*s+i,n[l+2]=o[l+2]*s+c;return{position:n,normal:t.normal,tangent:t.tangent}}function gr(t,r,e){const n=r.spatialReference,o=$t(r,e,F),a=new Float64Array(t.position.length),i=mr(t.position,o,n,a),c=z(At,o);return{position:i,normal:yr(i,a,t.normal,c,n),tangent:hr(i,a,t.tangent,c,n)}}function mr(t,r,e,n){w(n,t,r);const o=new Float64Array(t.length);return nr(n,o,e)}function yr(t,r,e,n,o){if(e==null)return null;const a=new Float32Array(e.length);return x(a,e,n),rr(a,t,r,o,a),a}function hr(t,r,e,n,o){if(e==null)return null;const a=new Float32Array(e.length);x(a,e,n,4);for(let i=3;i<a.length;i+=4)a[i]=e[i];return sr(a,t,r,o,a),a}function ht(t,r,e){const n=new Float64Array(t.position.length),o=t.position,a=r.x,i=r.y,c=r.z??0,s=H(e?e.unit:null,r.spatialReference);for(let l=0;l<o.length;l+=3)n[l]=(o[l]-a)/s,n[l+1]=(o[l+1]-i)/s,n[l+2]=(o[l+2]-c)/s;return{position:n,normal:t.normal,tangent:t.tangent}}function $r(t,r,e){const n=r.spatialReference;$t(r,e,F);const o=st(Tr,F),a=new Float64Array(t.position.length),i=Ar(t.position,n,o,a),c=z(At,o);return{position:i,normal:Pr(t.normal,t.position,a,n,c),tangent:Fr(t.tangent,t.position,a,n,c)}}function $t(t,r,e){B(t.spatialReference,[t.x,t.y,t.z??0],e,M(t.spatialReference));const n=H(r?r.unit:null,t.spatialReference);return Wt(e,e,[n,n,n]),e}function Ar(t,r,e,n){const o=er(t,r,n),a=new Float64Array(o.length);return w(a,o,e),a}function Pr(t,r,e,n,o){if(t==null)return null;const a=tr(t,r,e,n,new Float32Array(t.length));return x(a,a,o),a}function Fr(t,r,e,n,o){if(t==null)return null;const a=ir(t,r,e,n,new Float32Array(t.length));return x(a,a,o,4),a}function H(t,r){if(t==null)return 1;const e=qt(r);return 1/Ut(e,"meters",t)}const F=b(),Tr=b(),At=ut(),jr=Object.freeze(Object.defineProperty({__proto__:null,georeference:D,georeferenceApplyTransform:yt,georeferenceByTransform:cr,project:fr,ungeoreference:U,ungeoreferenceByTransform:ur},Symbol.toStringTag,{value:"Module"}));export{U as D,ur as E,fr as I,Zt as N,D as O,ir as R,yt as T,tr as _,nr as a,T as b,jr as c,rt as g,er as h,rr as j,Er as l,Sr as o,cr as q,gt as r,sr as v,W as w,Nr as x};
