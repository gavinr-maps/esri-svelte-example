import{eT as ar,f0 as ir,d9 as sr,$ as T,a0 as A,a1 as lr,cf as fr,A as v,J as cr,f1 as ur,f2 as pr,f3 as yr,f4 as H,f5 as G,f6 as M,f7 as w,f8 as gr,f9 as k,fa as mr,a8 as hr,r as B,fb as Tr,fc as Ar,fd as z,s as $r,fe as I,ff as U,fg as W,fh as dr,eQ as Fr,fi as Pr,fj as Er,fk as Mr,t as m,fl as C,fm as Q,fn as Rr,c6 as xr,fo as _r,fp as vr}from"./index.ebaf2ed0.js";import{e as K,a as X}from"./quatf64.ddec7ef6.js";import{e as $,o as wr}from"./mat4f64.a79dd289.js";import{v as J,y as Cr,x as Nr}from"./quat.0aa667d4.js";import{T as p,i as u}from"./BufferView.caf2e5e0.js";import{t as P,e as Or,r as d,o as Z}from"./vec33.ef314262.js";function E(r=Lr){return[r[0],r[1],r[2],r[3]]}function ct(r,t,e=E()){return ar(e,r),e[3]=t,e}function ut(r,t,e=E()){return J(R,r,j(r)),J(D,t,j(t)),Cr(R,D,R),br(e,ir(Nr(e,R)))}function pt(r){return r}function j(r){return sr(r[3])}function br(r,t){return r[3]=t,r}const Lr=[0,0,1,0],R=K(),D=K();E();var S;let g=S=class extends fr{constructor(r){super(r),this.origin=v(),this.translation=v(),this.rotation=E(),this.scale=cr(1,1,1),this.geographic=!0}get localMatrix(){const r=$();return ur(r,this.scale),pr(r,r,j(this.rotation),this.rotation),yr(r,r,this.translation),r}get localMatrixInverse(){return H($(),this.localMatrix)}applyLocal(r,t){return G(t,r,this.localMatrix)}applyLocalInverse(r,t){return G(t,r,this.localMatrixInverse)}project(r,t){const e=new Float64Array(r.length),o=p.fromTypedArray(e),n=p.fromTypedArray(r);if(this.geographic){const l=M(t),f=$();return w(t,this.origin,f,l),gr(f,f,this.localMatrix),P(o,n,f),k(e,l,0,e,t,0,e.length/3),e}const{localMatrix:a,origin:i}=this;mr(a,wr)?Or(o,n):P(o,n,a);for(let l=0;l<e.length;l+=3)e[l+0]+=i[0],e[l+1]+=i[1],e[l+2]+=i[2];return e}getOriginPoint(r){const[t,e,o]=this.origin;return new hr({x:t,y:e,z:o,spatialReference:r})}equals(r){return B(r)&&this.geographic===r.geographic&&Tr(this.origin,r.origin)&&Ar(this.localMatrix,r.localMatrix)}clone(){const r={origin:z(this.origin),translation:z(this.translation),rotation:E(this.rotation),scale:z(this.scale),geographic:this.geographic};return new S(r)}};T([A({type:[Number],nonNullable:!0,json:{write:!0}})],g.prototype,"origin",void 0),T([A({type:[Number],nonNullable:!0,json:{write:!0}})],g.prototype,"translation",void 0),T([A({type:[Number],nonNullable:!0,json:{write:!0}})],g.prototype,"rotation",void 0),T([A({type:[Number],nonNullable:!0,json:{write:!0}})],g.prototype,"scale",void 0),T([A({type:Boolean,nonNullable:!0,json:{write:!0}})],g.prototype,"geographic",void 0),T([A()],g.prototype,"localMatrix",null),T([A()],g.prototype,"localMatrixInverse",null),g=S=T([lr("esri.geometry.support.MeshTransform")],g);const zr=g;function N(r,t){var e;return r.isGeographic||r.isWebMercator&&((e=t==null?void 0:t.geographic)!=null?e:!0)}const O=$r.getLogger("esri.geometry.support.meshUtils.normalProjection");function Br(r,t,e,o,n){return L(o)?(b(h.TO_PCPF,u.fromTypedArray(r),p.fromTypedArray(t),p.fromTypedArray(e),o,u.fromTypedArray(n)),n):(O.error("Cannot convert spatial reference to PCPF"),n)}function jr(r,t,e,o,n){return L(o)?(b(h.FROM_PCPF,u.fromTypedArray(r),p.fromTypedArray(t),p.fromTypedArray(e),o,u.fromTypedArray(n)),n):(O.error("Cannot convert to spatial reference from PCPF"),n)}function Sr(r,t,e){return k(r,t,0,e,M(t),0,r.length/3),e}function Yr(r,t,e){return k(r,M(e),0,t,e,0,r.length/3),t}function Vr(r,t,e){if(m(r))return t;const o=p.fromTypedArray(r),n=p.fromTypedArray(t);return P(n,o,e),t}function kr(r,t,e){if(m(r))return t;C(c,e);const o=u.fromTypedArray(r),n=u.fromTypedArray(t);return d(n,o,c),Q(c)||Z(n,n),t}function qr(r,t,e){if(m(r))return t;C(c,e);const o=u.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),n=u.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT);if(d(n,o,c),Q(c)||Z(n,n),r!==t)for(let a=3;a<r.length;a+=4)t[a]=r[a];return t}function Gr(r,t,e,o,n){if(!L(o))return O.error("Cannot convert spatial reference to PCPF"),n;b(h.TO_PCPF,u.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),p.fromTypedArray(t),p.fromTypedArray(e),o,u.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT));for(let a=3;a<r.length;a+=4)n[a]=r[a];return n}function Ir(r,t,e,o,n){if(!L(o))return O.error("Cannot convert to spatial reference from PCPF"),n;b(h.FROM_PCPF,u.fromTypedArray(r,16),p.fromTypedArray(t),p.fromTypedArray(e),o,u.fromTypedArray(n,16));for(let a=3;a<r.length;a+=4)n[a]=r[a];return n}function b(r,t,e,o,n,a){if(!t)return;const i=e.count,l=M(n);if(rr(n))for(let f=0;f<i;f++)o.getVec(f,x),t.getVec(f,y),w(l,x,_,l),I(c,_),r===h.FROM_PCPF&&U(c,c),W(y,y,c),a.setVec(f,y);else for(let f=0;f<i;f++){o.getVec(f,x),t.getVec(f,y),w(l,x,_,l),I(c,_);const F=dr(e.get(f,1));let s=Math.cos(F);r===h.TO_PCPF&&(s=1/s),c[0]*=s,c[1]*=s,c[2]*=s,c[3]*=s,c[4]*=s,c[5]*=s,r===h.FROM_PCPF&&U(c,c),W(y,y,c),Fr(y,y),a.setVec(f,y)}return a}function L(r){return rr(r)||Ur(r)}function rr(r){return r.isWGS84||Pr(r)||Er(r)||Mr(r)}function Ur(r){return r.isWebMercator}var h;(function(r){r[r.TO_PCPF=0]="TO_PCPF",r[r.FROM_PCPF=1]="FROM_PCPF"})(h||(h={}));const x=v(),y=v(),_=$(),c=X();function tr(r,t,e){return N(t.spatialReference,e)?Hr(r,t,e):Dr(r,t,e)}function Wr(r,t,e){const{position:o,normal:n,tangent:a}=r;if(m(t))return{position:o,normal:n,tangent:a};const i=t.localMatrix;return tr({position:Vr(o,new Float64Array(o.length),i),normal:B(n)?kr(n,new Float32Array(n.length),i):null,tangent:B(a)?qr(a,new Float32Array(a.length),i):null},t.getOriginPoint(e),{geographic:t.geographic})}function yt(r,t,e){var o;if(e!=null&&e.useTransform){const{position:n,normal:a,tangent:i}=r;return{vertexAttributes:{position:n,normal:a,tangent:i},transform:new zr({origin:[t.x,t.y,(o=t.z)!=null?o:0],geographic:N(t.spatialReference,e)})}}return{vertexAttributes:tr(r,t,e),transform:null}}function Jr(r,t,e){return N(t.spatialReference,e)?er(r,t,e):Y(r,t,e)}function gt(r,t,e,o){if(m(t))return Jr(r,e,o);const n=Wr(r,t,e.spatialReference);return e.equals(t.getOriginPoint(e.spatialReference))?Y(n,e,o):N(e.spatialReference,o)?er(n,e,o):Y(n,e,o)}function Dr(r,t,e){const o=new Float64Array(r.position.length),n=r.position,a=t.x,i=t.y,l=t.z||0,{horizontal:f,vertical:F}=q(e?e.unit:null,t.spatialReference);for(let s=0;s<n.length;s+=3)o[s+0]=n[s+0]*f+a,o[s+1]=n[s+1]*f+i,o[s+2]=n[s+2]*F+l;return{position:o,normal:r.normal,tangent:r.tangent}}function Hr(r,t,e){const o=t.spatialReference,n=nr(t,e,V),a=new Float64Array(r.position.length),i=Qr(r.position,n,o,a),l=C(or,n);return{position:i,normal:Kr(i,a,r.normal,l,o),tangent:Xr(i,a,r.tangent,l,o)}}function Qr(r,t,e,o){P(p.fromTypedArray(o),p.fromTypedArray(r),t);const n=new Float64Array(r.length);return Yr(o,n,e)}function Kr(r,t,e,o,n){if(m(e))return null;const a=new Float32Array(e.length);return d(u.fromTypedArray(a),u.fromTypedArray(e),o),jr(a,r,t,n,a),a}function Xr(r,t,e,o,n){if(m(e))return null;const a=new Float32Array(e.length);d(u.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT),u.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT),o);for(let i=3;i<a.length;i+=4)a[i]=e[i];return Ir(a,r,t,n,a),a}function Y(r,t,e){const o=new Float64Array(r.position.length),n=r.position,a=t.x,i=t.y,l=t.z||0,{horizontal:f,vertical:F}=q(e?e.unit:null,t.spatialReference);for(let s=0;s<n.length;s+=3)o[s+0]=(n[s+0]-a)/f,o[s+1]=(n[s+1]-i)/f,o[s+2]=(n[s+2]-l)/F;return{position:o,normal:r.normal,tangent:r.tangent}}function er(r,t,e){const o=t.spatialReference;nr(t,e,V);const n=H(et,V),a=new Float64Array(r.position.length),i=Zr(r.position,o,n,a),l=C(or,n);return{position:i,normal:rt(r.normal,r.position,a,o,l),tangent:tt(r.tangent,r.position,a,o,l)}}function nr(r,t,e){w(r.spatialReference,[r.x,r.y,r.z||0],e,M(r.spatialReference));const{horizontal:o,vertical:n}=q(t?t.unit:null,r.spatialReference);return Rr(e,e,[o,o,n]),e}function Zr(r,t,e,o){const n=Sr(r,t,o),a=p.fromTypedArray(n),i=new Float64Array(n.length),l=p.fromTypedArray(i);return P(l,a,e),i}function rt(r,t,e,o,n){if(m(r))return null;const a=Br(r,t,e,o,new Float32Array(r.length)),i=u.fromTypedArray(a);return d(i,i,n),a}function tt(r,t,e,o,n){if(m(r))return null;const a=Gr(r,t,e,o,new Float32Array(r.length)),i=u.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT);return d(i,i,n),a}function q(r,t){if(m(r))return nt;const e=t.isGeographic?1:xr(t),o=t.isGeographic?1:_r(t),n=vr(1,r,"meters");return{horizontal:n*e,vertical:n*o}}const V=$(),et=$(),or=X(),nt={horizontal:1,vertical:1};export{Ir as L,Jr as M,Yr as O,gt as P,Wr as _,Sr as a,yt as b,E as c,j as d,ct as e,zr as f,ut as g,jr as h,Br as j,Gr as k,pt as l,N as r,tr as x};
