import{y as Q}from"./mat3-CR8GKnhD.js";import{e as W}from"./mat3f64-BBpwCtoL.js";import{h as X,s as C,n as D,c as Y}from"./mat4-Fi6iAz29.js";import{e as b}from"./mat4f64-Dk4dwAN8.js";import{r as p,o as O,q as u,u as Z,E as F}from"./vec32-Dvg_eL9J.js";import{n as c}from"./vec3f64-BLpZdpfb.js";import{E as N,U as _}from"./sphere-DQxj5tsv.js";import{l as tt}from"./ViewingMode-Dodu7ZZk.js";import{I as st,L as rt}from"./orientedBoundingBox-9z4w3ZAL.js";let vt=class{constructor(){this._transform=b(),this._transformInverse=new T({value:this._transform},X,b),this._transformInverseTranspose=new T(this._transformInverse,C,b),this._transformTranspose=new T({value:this._transform},C,b),this._transformInverseRotation=new T({value:this._transform},Q,W)}_invalidateLazyTransforms(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate()}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(t){D(this._transform,t)}multiplyTransform(t){Y(this._transform,this._transform,t)}set(t){D(this._transform,t),this._invalidateLazyTransforms()}setAndInvalidateLazyTransforms(t,r){this.setTransformMatrix(t),this.multiplyTransform(r),this._invalidateLazyTransforms()}};class T{constructor(t,r,e){this._original=t,this._update=r,this._dirty=!0,this._transform=e()}invalidate(){this._dirty=!0}get value(){return this._dirty&&(this._update(this._transform,this._original.value),this._dirty=!1),this._transform}}class et{constructor(t=0){this.offset=t,this.tmpVertex=c()}applyToVertex(t,r,e){const i=O(I,t,r,e),a=Z(P,i,this.localOrigin),o=this.offset/p(a);return u(this.tmpVertex,i,a,o),this.tmpVertex}applyToAabb(t){const r=ot,e=at,i=ht;for(let s=0;s<3;++s)r[s]=t[0+s]+this.localOrigin[s],e[s]=t[3+s]+this.localOrigin[s],i[s]=r[s];const a=this.applyToVertex(r[0],r[1],r[2]);for(let s=0;s<3;++s)t[s]=a[s],t[s+3]=a[s];const o=s=>{const n=this.applyToVertex(s[0],s[1],s[2]);for(let l=0;l<3;++l)t[l]=Math.min(t[l],n[l]),t[l+3]=Math.max(t[l+3],n[l])};for(let s=1;s<8;++s){for(let n=0;n<3;++n)i[n]=s&1<<n?e[n]:r[n];o(i)}let f=0;for(let s=0;s<3;++s)r[s]*e[s]<0&&(f|=1<<s);if(f!==0&&f!==7){for(let s=0;s<8;++s)if(!(f&s)){for(let n=0;n<3;++n)i[n]=f&1<<n?0:s&1<<n?r[n]:e[n];o(i)}}for(let s=0;s<3;++s)t[s]-=this.localOrigin[s],t[s+3]-=this.localOrigin[s];return t}}class nt{constructor(t=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=c(),this._tmpMbs=N(),this._tmpObb=new st,this._resetOffset(t)}_resetOffset(t){this._offset=t,this._totalOffset=t}set offset(t){this._resetOffset(t)}get offset(){return this._offset}set componentOffset(t){this._totalOffset=this._offset+t}set localOrigin(t){this.componentLocalOriginLength=p(t)}applyToVertex(t,r,e){const i=O(I,t,r,e),a=O(P,t,r,e+this.componentLocalOriginLength),o=this._totalOffset/p(a);return u(this._tmpVertex,i,a,o),this._tmpVertex}applyToAabb(t){const r=this.componentLocalOriginLength,e=t[0],i=t[1],a=t[2]+r,o=t[3],f=t[4],s=t[5]+r,n=Math.abs(e),l=Math.abs(i),y=Math.abs(a),x=Math.abs(o),d=Math.abs(f),L=Math.abs(s),$=.5*(1+Math.sign(e*o))*Math.min(n,x),w=.5*(1+Math.sign(i*f))*Math.min(l,d),q=.5*(1+Math.sign(a*s))*Math.min(y,L),z=Math.max(n,x),A=Math.max(l,d),R=Math.max(y,L),j=Math.sqrt($*$+w*w+q*q),E=Math.sign(n+e),B=Math.sign(l+i),G=Math.sign(y+a),S=Math.sign(x+o),U=Math.sign(d+f),k=Math.sign(L+s),m=this._totalOffset;if(j<m)return t[0]-=(1-E)*m,t[1]-=(1-B)*m,t[2]-=(1-G)*m,t[3]+=S*m,t[4]+=U*m,t[5]+=k*m,t;const M=m/Math.sqrt(z*z+A*A+R*R),g=m/j,v=g-M,V=-v;return t[0]+=e*(E*V+g),t[1]+=i*(B*V+g),t[2]+=a*(G*V+g),t[3]+=o*(S*v+M),t[4]+=f*(U*v+M),t[5]+=s*(k*v+M),t}applyToMbs(t){const r=p(_(t)),e=this._totalOffset/r;return u(_(this._tmpMbs),_(t),_(t),e),this._tmpMbs[3]=t[3]+t[3]*this._totalOffset/r,this._tmpMbs}applyToObb(t){return rt(t,this._totalOffset,this._totalOffset,tt.Global,this._tmpObb),this._tmpObb}}class it{constructor(t=0){this.offset=t,this.sphere=N(),this.tmpVertex=c()}applyToVertex(t,r,e){const i=this.objectTransform.transform,a=O(I,t,r,e),o=F(a,a,i),f=this.offset/p(o);u(o,o,o,f);const s=this.objectTransform.inverse;return F(this.tmpVertex,o,s),this.tmpVertex}applyToMinMax(t,r){const e=this.offset/p(t);u(t,t,t,e);const i=this.offset/p(r);u(r,r,r,i)}applyToAabb(t){const r=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*r,t[1]+=t[1]*r,t[2]+=t[2]*r;const e=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*e,t[4]+=t[4]*e,t[5]+=t[5]*e,t}applyToBoundingSphere(t){const r=p(_(t)),e=this.offset/r;return u(_(this.sphere),_(t),_(t),e),this.sphere[3]=t[3]+t[3]*this.offset/r,this.sphere}}const H=new it;function Tt(h){return h!=null?(H.offset=h,H):null}const J=new nt;function Ot(h){return h!=null?(J.offset=h,J):null}const K=new et;function yt(h){return h!=null?(K.offset=h,K):null}const xt="terrain",I=c(),P=c(),ot=c(),at=c(),ht=c();export{yt as I,Ot as L,vt as b,Tt as d,xt as w};
