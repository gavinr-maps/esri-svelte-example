import{B as cn}from"./Accessor-BHnuXKD2.js";import{T as J,s as fn,P as mn}from"./mathUtils-DV9iOXpW.js";import{ae as pn,af as An,ac as gn,ad as Tn,t as yn,X as Rn,x as En,ag as Fn}from"./Point-XGrwlf63.js";import{j as U,n as K}from"./mat3-CR8GKnhD.js";import{e as Q}from"./mat3f64-BBpwCtoL.js";import{h as C,B as Nn,n as dn,c as L,f as Z}from"./mat4-Fi6iAz29.js";import{e as S,o as nn}from"./mat4f64-Dk4dwAN8.js";import{N as W,A as On,y as rn,c as $n,E as hn}from"./vec32-Dvg_eL9J.js";import{n as B}from"./vec3f64-BLpZdpfb.js";import{a as tn,w as Pn}from"./spatialReferenceEllipsoidUtils-DM073JUd.js";import{m as $}from"./computeTranslationToOriginAndRotation-BT43Xu5d.js";import{c as X}from"./projectPointToVector-BS0u8fq6.js";import{t as _n,p as wn}from"./meshVertexSpaceUtils-SW0WEjNN.js";import{n as V,d as en,a as _,r as b}from"./vec3-Bn81gjoR.js";import{o as on}from"./projectBuffer-DOU0xvVi.js";import{i as d,T as O}from"./BufferView-_QDXRCew.js";import{o as Mn}from"./vec4-DcW4fpPA.js";const mr="Projection may be possible after calling projection.load().";function E(n,r,t,o){n.error(`Failed to project from (wkid:${r.wkid}) to (wkid:${t.wkid}).${o?" ":""}${o}`)}function xn(n,r,t,o,e,i){return v(N.TO_PCPF,d.fromTypedArray(n),A.NORMAL,O.fromTypedArray(r),t,O.fromTypedArray(o),e,d.fromTypedArray(i))?i:null}function Cn(n,r,t,o,e,i){return v(N.FROM_PCPF,d.fromTypedArray(n),A.NORMAL,O.fromTypedArray(r),t,O.fromTypedArray(o),e,d.fromTypedArray(i))?i:null}function Sn(n,r,t,o){return on(n,r,0,t,o,0)?t:null}function vn(n,r,t,o){return on(n,r,0,t,o,0)?t:null}function an(n,r,t){return U(m,t),V(r,n,m),J(m)&&en(r,r),r}function ln(n,r,t){return K(m,t),Mn(r,n,m),J(m)&&en(r,r,4),r}function pr(n,r,t,o){const e=r===A.NORMAL;return sn(n,r,t,(i,a)=>{const l=Math.cos(fn(i));a[0]=e?l:1/l,a[1]=1},o)}function Ar(n,r,t,o){const e=r===A.NORMAL;return sn(n,r,t,(i,a)=>{const l=Math.cosh(-i/yn.radius);a[0]=1,a[1]=e?l:1/l},o)}function sn(n,r,t,o,e){const i=r===A.NORMAL?3:4,a=[0,0];for(let l=0,c=1;l<n.length;l+=i,c+=3){o(t[c],a);const s=n[l]*a[0],f=n[l+1]*a[1],u=n[l+2],T=1/Math.sqrt(s*s+f*f+u*u);e[l]=s*T,e[l+1]=f*T,e[l+2]=u*T,i===4&&(e[l+3]=n[l+3])}return e}function Gn(n,r,t,o,e,i){if(!v(N.TO_PCPF,d.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT),A.TANGENT,O.fromTypedArray(r),t,O.fromTypedArray(o),e,d.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(let a=3;a<n.length;a+=4)i[a]=n[a];return i}function Ln(n,r,t,o,e,i){if(!v(N.FROM_PCPF,d.fromTypedArray(n,16),A.TANGENT,O.fromTypedArray(r),t,O.fromTypedArray(o),e,d.fromTypedArray(i,16)))return null;for(let a=3;a<n.length;a+=4)i[a]=n[a];return i}var A,N;function z(n,r,t,o,e){switch($(o,t,h,o),n===N.FROM_PCPF&&C(h,h),r){case A.NORMAL:return U(e,h);case A.TANGENT:return K(e,h)}}function v(n,r,t,o,e,i,a,l){if(!r)return;const c=o.count;if(Un(e))for(let s=0;s<c;s++)i.getVec(s,x),r.getVec(s,R),W(R,R,z(n,t,x,a,m)),l.setVec(s,R);else for(let s=0;s<c;s++){i.getVec(s,x),r.getVec(s,R);const f=pn(o.get(s,1));let u=Math.cos(f);t===A.TANGENT!=(n===N.TO_PCPF)&&(u=1/u),z(n,t,x,a,m),n===N.TO_PCPF?(m[0]*=u,m[1]*=u,m[2]*=u,m[3]*=u,m[4]*=u,m[5]*=u):(m[0]*=u,m[3]*=u,m[6]*=u,m[1]*=u,m[4]*=u,m[7]*=u),W(R,R,m),On(R,R),l.setVec(s,R)}return l}function Un(n){return n.isWGS84||An(n)||gn(n)||Tn(n)}(function(n){n[n.NORMAL=0]="NORMAL",n[n.TANGENT=1]="TANGENT"})(A||(A={})),function(n){n[n.TO_PCPF=0]="TO_PCPF",n[n.FROM_PCPF=1]="FROM_PCPF"}(N||(N={}));const x=B(),R=B(),h=S(),m=Q(),g=()=>cn.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function gr(n,r,{vertexSpace:t,spatialReference:o}){if(t.type==="georeferenced"){const s=n;if(!X(r,s,o))return!1;const{origin:f}=t;return $n(n,s,f),!0}const e=tn(o),i=n;if(!X(r,i,e))return!1;const{origin:a}=t,l=I;if(!$(o,a,l,e))return!1;const c=C(I,l);return c!=null&&(hn(n,i,c),!0)}function Tr(n,r,t){const{vertexSpace:o,transform:e,vertexAttributes:i}=n,a=_n(o)?e:null,l=G(n.spatialReference,t,F.SOURCE_AND_TARGET);if(wn(o,r)&&(!a||Nn(a.localMatrix,nn))&&w(l)){const{position:c,normal:s,tangent:f}=i,u=t==null?void 0:t.allowBufferReuse;return{position:u?c:c.slice(),normal:u?s:s==null?void 0:s.slice(),tangent:u?f:f==null?void 0:f.slice()}}switch(n.vertexSpace.type){case"local":return r.type==="local"?kn(n,n.vertexSpace,r.origin,t):Vn(n,n.vertexSpace,r.origin,t);case"georeferenced":return r.type==="local"?bn(n,n.vertexSpace,r.origin,t):Bn(n,n.vertexSpace,r.origin,t)}}function Bn({vertexAttributes:n,transform:r,spatialReference:t},{origin:o},e,i){const a=G(t,i,F.SOURCE_AND_TARGET),l=o||!w(a)?dn(p,(r==null?void 0:r.localMatrix)??nn):null;l&&j(l,t,i,F.SOURCE_AND_TARGET);const{position:c,normal:s,tangent:f}=l?k(n,l):n,u=i==null?void 0:i.allowBufferReuse,T=u?c:new Float64Array(c.length);let y=c;if(o&&(y=_(T,y,o)),e){const M=rn(un,e);y=_(T,y,M)}return{position:y!==n.position||u?y:y.slice(),normal:s!==n.normal||u?s:s==null?void 0:s.slice(),tangent:f!==n.tangent||u?f:f==null?void 0:f.slice()}}function D(n,r){return r!=null&&r.useEllipsoid&&Fn(n)?Pn:tn(n)}function Vn({spatialReference:n,vertexAttributes:r,transform:t},{origin:o},e,i){const a=D(n,i);if(!$(n,o,p,a))return E(g(),n,a),null;t&&L(p,p,t.localMatrix),j(p,n,i,F.SOURCE);const l=new Float64Array(r.position.length),c=jn(r.position,p,n,l,a);if(!c)return null;const s=Yn(c,n,l,a,r.normal,p);if(r.normal&&!s)return null;const f=qn(c,n,l,a,r.tangent,p);if(r.tangent&&!f)return null;if(e){const u=rn(un,e);_(c,c,u)}return{position:c,normal:s,tangent:f}}function bn({vertexAttributes:n,spatialReference:r,transform:t},{origin:o},e,i){const a=D(r,i);if(!$(r,e,p,a))return E(g(),r,a),null;const l=1/G(r,i,F.TARGET);Z(p,p,[l,l,l]);const c=C(P,p),{position:s,normal:f,tangent:u}=Dn(n,o,t),T=new Float64Array(s.length),y=Wn(s,r,c,T,a);if(!y)return null;const M=U(Hn,c),Y=Xn(f,s,r,T,a,M,f!==n.normal?f:void 0);if(!Y&&f)return null;const q=zn(u,s,r,T,a,M,u!==n.tangent?u:void 0);return!q&&u?null:{position:y,normal:Y,tangent:q}}function Dn(n,r,t){if(!r)return n;if(!t){const{position:e,normal:i,tangent:a}=n;return{position:_(new Float64Array(e.length),e,r),tangent:a,normal:i}}const o=k(n,t.localMatrix);return _(o.position,o.position,r),o}function kn({vertexAttributes:n,spatialReference:r,transform:t},{origin:o},e,i){const a=D(r,i);if(!$(r,o,p,a))return E(g(),r,a),null;if(t&&L(p,p,t.localMatrix),!$(r,e,P,a))return E(g(),a,r),null;C(P,P);const l=L(p,P,p);return j(l,r,i,F.SOURCE_AND_TARGET),k(n,l)}function k(n,r){const t=new Float64Array(n.position.length);b(t,n.position,r);const o=n.normal?new Float32Array(n.normal.length):null,e=n.tangent?new Float32Array(n.tangent.length):null;return o&&n.normal&&an(n.normal,o,r),e&&n.tangent&&ln(n.tangent,e,r),{position:t,normal:o,tangent:e}}function jn(n,r,t,o,e){b(o,n,r);const i=new Float64Array(n.length);return vn(o,e,i,t)?i:(E(g(),e,t),null)}function Yn(n,r,t,o,e,i){if(e==null)return null;const a=new Float32Array(e.length);return an(e,a,i),Cn(a,n,r,t,o,a)?a:(E(g(),o,r),null)}function qn(n,r,t,o,e,i){if(e==null)return null;const a=new Float32Array(e.length);return ln(e,a,i),Ln(a,n,r,t,o,a)?a:(E(g(),o,r),null)}function j(n,r,t,o){const e=G(r,t,o);w(e)||Z(n,n,[e,e,e])}function G(n,r,t){const o=!!(t&F.SOURCE),e=!!(t&F.TARGET),i=r==null?void 0:r.sourceUnit,a=r==null?void 0:r.targetUnit;if(!i&&!a)return 1;let l=H(i,n);o||!i||w(l)||(g().warn("source unit conversion not supported"),l=1);let c=1/H(a,n);return e||!a||w(c)||(g().warn("target unit conversion not supported"),c=1),l*c}function w(n){return mn(n,1)}function Wn(n,r,t,o,e){const i=Sn(n,r,o,e);if(!i)return E(g(),r,e),null;const a=new Float64Array(i.length);return b(a,i,t),a}function Xn(n,r,t,o,e,i,a){if(n==null)return null;const l=a??new Float32Array(n.length);return xn(n,r,t,o,e,l)?(V(l,l,i),l):(E(g(),t,e),null)}function zn(n,r,t,o,e,i,a){if(n==null)return null;const l=a??new Float32Array(n.length);return Gn(n,r,t,o,e,l)?(V(l,l,i,4),l):(E(g(),t,e),null)}function H(n,r){if(n==null)return 1;const t=Rn(r);return 1/En(t,"meters",n)}const p=S(),P=S(),Hn=Q(),un=B(),I=S();var F;(function(n){n[n.NONE=0]="NONE",n[n.SOURCE=1]="SOURCE",n[n.TARGET=2]="TARGET",n[n.SOURCE_AND_TARGET=3]="SOURCE_AND_TARGET"})(F||(F={}));export{Tr as B,ln as C,xn as E,E as F,Ln as G,Ar as L,mr as O,Cn as R,A as V,an as _,pr as b,Sn as g,vn as h,gr as k,H as n,Gn as w};
