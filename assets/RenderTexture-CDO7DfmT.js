import{s as E}from"./mathUtils-C4_ghTv4.js";import{n as _}from"./vec3f64-BLpZdpfb.js";import{C as m,a as x,f as A,N as i,L as f,h as C}from"./projectBuffer-Bs7GwaPY.js";import{t as R}from"./Point-Cg0-ChZE.js";import{S as I,F as h}from"./Accessor-BLX9ikPh.js";function b(e,o,t,s){if(o==null||s==null)return!1;const r=x(o,s,P);if(r.projector===A)return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],!0;if(r.projector==null)return!1;const{source:n,dest:a}=r;if(a.spatialReferenceId===i.WEB_MERCATOR){const u=f[n.spatialReferenceId][i.WGS84];return u!=null&&(u(e,0,c,0),C(c,0,t,0),t[3]=d(c[1],e[2],e[3],R.radius),!0)}if(n.spatialReferenceId!==i.WGS84&&n.spatialReferenceId!==i.CGCS2000||a.spatialReferenceId!==i.PLATE_CARREE){r.projector(e,0,t,0);const u=n.metersPerUnit??1,l=a.metersPerUnit??1;t[3]=e[3]*u/l}else{const u=f[n.spatialReferenceId][i.SPHERICAL_ECEF],l=f[i.SPHERICAL_ECEF][i.PLATE_CARREE];let p=e[3];u!=null&&l!=null&&(p=d(e[1],e[2],e[3],R.radius)),r.projector(e,0,t,0),t[3]=p}return!0}function d(e,o,t,s){const r=s+o;if(r<s/2||t>r)return Number.MAX_VALUE;const n=Math.abs(L*e)+Math.asin(t/r);return n>=Math.PI/2?Number.MAX_VALUE:t/Math.cos(n)}const c=_(),P=m(),L=E(1);class g{constructor(o,t){this._textures=o,this.loadPromise=null,this._disposed=!1;const s=this._textures.acquire(t);I(s)?(s.then(r=>{this._disposed?h(r):this._textureRef=r}),this.loadPromise=s):this._textureRef=s}dispose(){this._textureRef=h(this._textureRef),this._disposed=!0}get glTexture(){return this._textureRef!=null?this._textureRef.glTexture:null}}export{b as a,g as s};