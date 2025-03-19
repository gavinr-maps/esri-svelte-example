import{c as N,r as M,m as P,a as L,ad as ae}from"./Accessor-BmwT4B0c.js";import{r as T}from"./writer-DKgfqj4X.js";import{w as q,p as ze,f as Ae}from"./Extent-g5W9hy0j.js";import{b as W,j as d,L as be,a3 as Se,g as oe}from"./Point-Cz2JYYmX.js";import{r as F}from"./mathUtils-Cfq9PL9W.js";function S(e,t,s=!1){let{hasM:r,hasZ:n}=e;Array.isArray(t)?t.length!==4||r||n?t.length===3&&s&&!r?(n=!0,r=!1):t.length===3&&r&&n&&(r=!1,n=!1):(r=!0,n=!0):(n=!n&&t.hasZ&&(!r||t.hasM),r=!r&&t.hasM&&(!n||t.hasZ)),e.hasZ=n,e.hasM=r}var G;function re(e){return(t,s)=>t==null?s:s==null?t:e(t,s)}function _e(e){return e&&(e.declaredClass==="esri.geometry.SpatialReference"||e.wkid!=null)}let Z=G=class extends W{constructor(...e){super(...e),this.points=[],this.type="multipoint"}normalizeCtorArgs(e,t){var n;if(!e&&!t)return{};const s={};Array.isArray(e)?(s.points=e,s.spatialReference=t):_e(e)?s.spatialReference=e:(e.points&&(s.points=e.points),e.spatialReference&&(s.spatialReference=e.spatialReference),e.hasZ&&(s.hasZ=e.hasZ),e.hasM&&(s.hasM=e.hasM));const r=(n=s.points)==null?void 0:n[0];return r&&(s.hasZ===void 0&&s.hasM===void 0?(s.hasZ=r.length>2,s.hasM=!1):s.hasZ===void 0?s.hasZ=r.length>3:s.hasM===void 0&&(s.hasM=r.length>3)),s}get cache(){return this.commitProperty("points"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get extent(){const e=this.points;if(!e.length)return null;const t=new q,s=this.hasZ,r=this.hasM,n=s?3:2,a=e[0],i=re(Math.min),o=re(Math.max);let u,l,h,f,[c,p]=a,[m,y]=a;for(let g=0,$=e.length;g<$;g++){const x=e[g],[v,b]=x;if(c=i(c,v),p=i(p,b),m=o(m,v),y=o(y,b),s&&x.length>2){const I=x[2];u=i(u,I),h=o(h,I)}if(r&&x.length>n){const I=x[n];l=i(l,I),f=o(f,I)}}return t.xmin=c,t.ymin=p,t.xmax=m,t.ymax=y,t.spatialReference=this.spatialReference,s?(t.zmin=u,t.zmax=h):(t.zmin=void 0,t.zmax=void 0),r?(t.mmin=l,t.mmax=f):(t.mmin=void 0,t.mmax=void 0),t}writePoints(e,t){t.points=N(this.points)}addPoint(e){return S(this,e),Array.isArray(e)?this.points.push(e):this.points.push(e.toArray()),this.notifyChange("points"),this}clone(){const e={points:N(this.points),spatialReference:this.spatialReference};return this.hasZ&&(e.hasZ=!0),this.hasM&&(e.hasM=!0),new G(e)}getPoint(e){if(!this._validateInputs(e))return null;const t=this.points[e],s={x:t[0],y:t[1],spatialReference:this.spatialReference};let r=2;return this.hasZ&&(s.z=t[2],r=3),this.hasM&&(s.m=t[r]),new d(s)}removePoint(e){if(!this._validateInputs(e))return null;const t=new d(this.points.splice(e,1)[0],this.spatialReference);return this.notifyChange("points"),t}setPoint(e,t){return this._validateInputs(e)?(S(this,t),Array.isArray(t)||(t=t.toArray()),this.points[e]=t,this.notifyChange("points"),this):this}toJSON(e){return this.write({},e)}_validateInputs(e){return e!=null&&e>=0&&e<this.points.length}};M([P({readOnly:!0})],Z.prototype,"cache",null),M([P()],Z.prototype,"extent",null),M([P({type:[[Number]],json:{write:{isRequired:!0}}})],Z.prototype,"points",void 0),M([T("points")],Z.prototype,"writePoints",null),Z=G=M([L("esri.geometry.Multipoint")],Z),Z.prototype.toJSON.isDefaultToJSON=!0;const ct=Z;function pt(e){const t=[];for(e.reset();e.nextPath();){const s=[];for(;e.nextPoint();)s.push([e.x,e.y]);t.push(s)}return e.reset(),t}function Te(e){const t=[];for(;e.nextPoint();)t.push([e.x,e.y]);return e.seekPathStart(),t}var k;(function(e){e[e.X=0]="X",e[e.Y=1]="Y",e[e.Z=2]="Z"})(k||(k={}));function mt(e){if(!e)return null;if(Array.isArray(e))return e;const t=e.hasZ,s=e.hasM;if(e.type==="point")return s&&t?[e.x,e.y,e.z,e.m]:t?[e.x,e.y,e.z]:s?[e.x,e.y,e.m]:[e.x,e.y];if(e.type==="polygon")return e.rings.slice();if(e.type==="polyline")return e.paths.slice();if(e.type==="multipoint")return e.points.slice();if(e.type==="extent"){const r=e.clone().normalize();if(!r)return null;let n=!1,a=!1;return r.forEach(i=>{i.hasZ&&(n=!0),i.hasM&&(a=!0)}),r.map(i=>{const o=[[i.xmin,i.ymin],[i.xmin,i.ymax],[i.xmax,i.ymax],[i.xmax,i.ymin],[i.xmin,i.ymin]];if(n&&i.hasZ){const u=.5*(i.zmax-i.zmin);for(let l=0;l<o.length;l++)o[l].push(u)}if(a&&i.hasM){const u=.5*(i.mmax-i.mmin);for(let l=0;l<o.length;l++)o[l].push(u)}return o})}return null}function J(e,t){const s=t[0]-e[0],r=t[1]-e[1];if(e.length>2&&t.length>2){const n=e[2]-t[2];return Math.sqrt(s*s+r*r+n*n)}return Math.sqrt(s*s+r*r)}function le(e,t,s){const r=e[0]+s*(t[0]-e[0]),n=e[1]+s*(t[1]-e[1]);return e.length>2&&t.length>2?[r,n,e[2]+s*(t[2]-e[2])]:[r,n]}function yt(e,t,s,r){return Ce(e,t,s[r],s[r+1])}function Ce(e,t,s,r){const[n,a]=t,[i,o]=s,[u,l]=r,h=u-i,f=l-o,c=h*h+f*f,p=(n-i)*h+(a-o)*f,m=Math.min(1,Math.max(0,p/c));return e[0]=i+h*m,e[1]=o+f*m,e}function gt(e,t,s,r,n,a){let i=s,o=r,u=n-i,l=a-o;if(u!==0||l!==0){const h=((e-i)*u+(t-o)*l)/(u*u+l*l);h>1?(i=n,o=a):h>0&&(i+=u*h,o+=l*h)}return u=e-i,l=t-o,u*u+l*l}function ue(e,t){return le(e,t,.5)}function xt(e){const t=e.length;let s=0;for(let r=0;r<t-1;++r)s+=J(e[r],e[r+1]);return s}function Mt(e,t){if(t<=0)return e[0];const s=e.length;let r=0;for(let n=0;n<s-1;++n){const a=J(e[n],e[n+1]);if(t-r<a){const i=(t-r)/a;return le(e[n],e[n+1],i)}r+=a}return e[s-1]}function he(e,t=k.X,s=k.Y){let r=0;const n=e.length;let a=e[0];for(let i=1;i<n;i++){const o=e[i];r+=(o[t]-a[t])*(o[s]+a[s]),a=o}if(!fe(e)){const i=e[0];r+=(i[t]-a[t])*(i[s]+a[s])}return r>=0}function fe(e){const t=e.length;return t<3||ae(e[0],e[t-1])}function $t(e){"rings"in e&&(Oe(e),Ee(e))}function Oe(e){if(!("rings"in e))return!1;let t=!1;for(const s of e.rings)fe(s)||(s.push(s[0].slice()),t=!0);return t}function Ee(e){if(!("rings"in e)||e.rings.length===0||he(e.rings[0]))return!1;for(const t of e.rings)t.reverse();return!0}function dt(e){return e.type!=="polygon"&&e.type!=="polyline"||Fe(e.type==="polygon"?e.rings:e.paths,e.spatialReference),e}function Fe(e,t){const s=be(t);if(!s)return;const r=s.valid[0],n=s.valid[1],a=n-r;for(const i of e){let o=1/0,u=-1/0;for(const h of i){const f=Ye(h[0],r,n);o=Math.min(o,f),u=Math.max(u,f),h[0]=f}const l=u-o;a-l<l&&i.forEach(h=>{h[0]<0&&(h[0]+=a)})}}function Ye(e,t,s){const r=s-t;return e<t?s-(t-e)%r:e>s?t+(e-t)%r:e}function vt(e,t){if(e===t)return!0;if(e.type!==t.type)return!1;if(e.type==="point"||e.type==="mesh"||e.type==="extent")return!0;if(e.type==="multipoint")return e.points.length===t.points.length;const[s,r]=e.type==="polyline"?[e.paths,t.paths]:[e.rings,t.rings];return s.length===r.length&&s.every((n,a)=>n.length===r[a].length)}function It(e){return e?e.hasZ?[e.xmax-e.xmin/2,e.ymax-e.ymin/2,e.zmax-e.zmin/2]:[e.xmax-e.xmin/2,e.ymax-e.ymin/2]:null}function ke(e){return e?qe(e.rings,e.hasZ??!1):null}function qe(e,t){if(!(e!=null&&e.length))return null;const s=[],r=[],n=t?[1/0,-1/0,1/0,-1/0,1/0,-1/0]:[1/0,-1/0,1/0,-1/0];for(let a=0,i=e.length;a<i;a++){const o=ce(e[a],t,n);o&&r.push(o)}if(r.sort((a,i)=>{let o=a[2]-i[2];return o===0&&t&&(o=a[4]-i[4]),o}),r.length&&(s[0]=r[0][0],s[1]=r[0][1],t&&(s[2]=r[0][3]),(s[0]<n[0]||s[0]>n[1]||s[1]<n[2]||s[1]>n[3]||t&&(s[2]<n[4]||s[2]>n[5]))&&(s.length=0)),!s.length){const a=e[0]&&e[0].length?Je(e[0],t):null;if(!a)return null;s[0]=a[0],s[1]=a[1],t&&a.length>2&&(s[2]=a[2])}return s}function ce(e,t,s){let r=0,n=0,a=0,i=0,o=0;const u=e.length?e[0][0]:0,l=e.length?e[0][1]:0,h=e.length&&t?e[0][2]:0;for(let c=0;c<e.length;c++){const p=e[c],m=e[(c+1)%e.length],[y,g,$]=p,x=y-u,v=g-l,[b,I,Ze]=m,V=b-u,Q=I-l,j=x*Q-V*v;if(i+=j,r+=(x+V)*j,n+=(v+Q)*j,t&&p.length>2&&m.length>2){const ee=$-h,te=Ze-h,se=x*te-V*ee;a+=(ee+te)*se,o+=se}y<s[0]&&(s[0]=y),y>s[1]&&(s[1]=y),g<s[2]&&(s[2]=g),g>s[3]&&(s[3]=g),t&&($<s[4]&&(s[4]=$),$>s[5]&&(s[5]=$))}if(i>0&&(i*=-1),o>0&&(o*=-1),!i)return null;i*=.5,o*=.5;const f=[r/(6*i)+u,n/(6*i)+l,i];return t&&(s[4]===s[5]||o===0?(f[3]=(s[4]+s[5])/2,f[4]=0):(f[3]=a/(6*o)+h,f[4]=o)),f}function Pt(e,t){let s=0,r=0,n=0;e.nextPoint();const a=e.pathSize?e.x:0,i=e.pathSize?e.y:0;for(let o=0;o<e.pathSize;o++){e.seekInPath(o);const u=[e.x,e.y];e.seekInPath((o+1)%e.pathSize);const l=[e.x,e.y],[h,f]=u,c=h-a,p=f-i,[m,y]=l,g=m-a,$=y-i,x=c*$-g*p;n+=x,s+=(c+g)*x,r+=(p+$)*x,h<t[0]&&(t[0]=h),h>t[1]&&(t[1]=h),f<t[2]&&(t[2]=f),f>t[3]&&(t[3]=f)}return n>0&&(n*=-1),n?(n*=.5,[s/(6*n)+a,r/(6*n)+i,n]):null}function Je(e,t){const s=t?[0,0,0]:[0,0],r=t?[0,0,0]:[0,0];let n=0,a=0,i=0,o=0;for(let u=0,l=e.length;u<l-1;u++){const h=e[u],f=e[u+1];if(h&&f){s[0]=h[0],s[1]=h[1],r[0]=f[0],r[1]=f[1],t&&h.length>2&&f.length>2&&(s[2]=h[2],r[2]=f[2]);const c=J(s,r);if(c){n+=c;const p=ue(h,f);a+=c*p[0],i+=c*p[1],t&&p.length>2&&(o+=c*p[2])}}}return n>0?t?[a/n,i/n,o/n]:[a/n,i/n]:e.length?e[0]:null}function Ve(e){const{hasZ:t,totalSize:s}=e;if(s===0)return null;const r=[],n=[],a=t?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY];for(e.reset();e.nextPath();){const i=ce(Te(e),e.hasZ,a);i&&n.push(i)}if(n.sort((i,o)=>{let u=i[2]-o[2];return u===0&&t&&(u=i[4]-o[4]),u}),n.length&&(r[0]=n[0][0],r[1]=n[0][1],t&&(r[2]=n[0][3]),(r[0]<a[0]||r[0]>a[1]||r[1]<a[2]||r[1]>a[3]||t&&(r[2]<a[4]||r[2]>a[5]))&&(r.length=0)),!r.length){e.reset(),e.nextPath();const i=e.pathSize?je(e):null;if(!i)return null;r[0]=i[0],r[1]=i[1],t&&i.length>2&&(r[2]=i[2])}return r}function je(e){const{hasZ:t}=e,s=t?[0,0,0]:[0,0],r=t?[0,0,0]:[0,0];let n=0,a=0,i=0,o=0;if(e.nextPoint()){let u=e.x,l=e.y,h=e.z;for(;e.nextPoint();){const f=e.x,c=e.y,p=e.z;s[0]=u,s[1]=l,r[0]=f,r[1]=c,t&&(s[2]=h,r[2]=p);const m=J(s,r);if(m){n+=m;const y=ue(s,r);a+=m*y[0],i+=m*y[1],t&&y.length>2&&(o+=m*y[2])}u=f,l=c,h=p}}return n>0?t?[a/n,i/n,o/n]:[a/n,i/n]:e.pathSize?(e.seekPathStart(),e.nextPoint(),[e.x,e.y]):null}const Ge=1e-6;function Rt(e){let t=0;for(e.reset();e.nextPath();)t+=e.getCurrentRingArea();if(t<Ge){const n=Ve(e);return n?[n[0],n[1]]:null}const s=[0,0];if(e.reset(),!e.nextPath()||!e.nextPoint())return null;const r=[e.x,e.y];for(e.reset();e.nextPath();)Xe(s,r,e);return s[0]*=1/t,s[1]*=1/t,s[0]+=r[0],s[1]+=r[1],s}const De=1/3;function Xe(e,t,s){if(!s||s.pathSize<3)return null;s.nextPoint();const r=s.x,n=s.y;s.nextPoint();let a,i=s.x-r,o=s.y-n,u=0,l=0;for(;s.nextPoint();)u=s.x-r,l=s.y-n,a=.5*De*(u*o-l*i),e[0]+=a*(i+u),e[1]+=a*(o+l),i=u,o=l;const h=s.getCurrentRingArea(),f=[r,n];return f[0]-=t[0],f[1]-=t[1],f[0]*=h,f[1]*=h,e[0]+=f[0],e[1]+=f[1],e}function C(e=Le){return[e[0],e[1],e[2],e[3]]}function wt(e){return[e[0],e[1],e[2],e[3]]}function B(e,t){return e!==t&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3]),e}function Nt(e,t,s,r,n=C()){return n[0]=e,n[1]=t,n[2]=s,n[3]=r,n}function Zt(e,t=C()){return t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax,t}function zt(e,t,s=new q){return s.xmin=e[0],s.ymin=e[1],s.xmax=e[2],s.ymax=e[3],s.spatialReference=t,s}function At(e,t){t[0]<e[0]&&(e[0]=t[0]),t[0]>e[2]&&(e[2]=t[0]),t[1]<e[1]&&(e[1]=t[1]),t[1]>e[3]&&(e[3]=t[1])}function bt(e,t,s){if(t!=null)if("length"in t)D(t)?(s[0]=Math.min(e[0],t[0]),s[1]=Math.min(e[1],t[1]),s[2]=Math.max(e[2],t[2]),s[3]=Math.max(e[3],t[3])):t.length!==2&&t.length!==3||(s[0]=Math.min(e[0],t[0]),s[1]=Math.min(e[1],t[1]),s[2]=Math.max(e[2],t[0]),s[3]=Math.max(e[3],t[1]));else switch(t.type){case"extent":s[0]=Math.min(e[0],t.xmin),s[1]=Math.min(e[1],t.ymin),s[2]=Math.max(e[2],t.xmax),s[3]=Math.max(e[3],t.ymax);break;case"point":s[0]=Math.min(e[0],t.x),s[1]=Math.min(e[1],t.y),s[2]=Math.max(e[2],t.x),s[3]=Math.max(e[3],t.y)}else B(s,e)}function St(e,t,s=e){const r=t.length;let n=e[0],a=e[1],i=e[2],o=e[3];for(let u=0;u<r;u++){const l=t[u];n=Math.min(n,l[0]),a=Math.min(a,l[1]),i=Math.max(i,l[0]),o=Math.max(o,l[1])}return s[0]=n,s[1]=a,s[2]=i,s[3]=o,s}function _t(e){for(let t=0;t<4;t++)if(!isFinite(e[t]))return!1;return!0}function O(e){return e==null||e[0]>=e[2]?0:e[2]-e[0]}function E(e){return e==null||e[1]>=e[3]?0:e[3]-e[1]}function Tt(e){return O(e)*E(e)}function Ct(e){return O(e)>0&&E(e)>0}function Ot(e,t=[0,0]){return t[0]=(e[0]+e[2])/2,t[1]=(e[1]+e[3])/2,t}function Et(e){const t=O(e),s=E(e);return Math.sqrt(t*t+s*s)}function Ft(e,t){return pe(e,t[0],t[1])}function Yt(e,t){const s=t[3],r=.5*(e[0]+e[2]),n=Math.abs(t[0]-r),a=.5*(e[2]-e[0]);if(n>s+a)return!1;const i=.5*(e[1]+e[3]),o=.5*(e[3]-e[1]),u=Math.abs(t[1]-i);if(u>s+o)return!1;if(n<a||u<o)return!0;const l=n-a,h=u-o;return l*l+h*h<=s*s}function kt(e,t,s){const r=e[0],n=e[1],a=e[2],i=e[3],{x:o,y:u}=t,{x:l,y:h}=s,f=(g,$)=>(h-u)*g+(o-l)*$+(l*u-o*h)<0,c=f(r,i),p=f(a,i),m=f(a,n),y=f(r,n);return!(c===p&&p===m&&m===y&&y===c||o<r&&l<r||o>a&&l>a||u>i&&h>i||u<n&&h<n)}function qt(e,t){return pe(e,t.x,t.y)}function pe(e,t,s){return t>=e[0]&&s>=e[1]&&t<=e[2]&&s<=e[3]}function Jt(e,t){return Math.max(t[0],e[0])<=Math.min(t[2],e[2])&&Math.max(t[1],e[1])<=Math.min(t[3],e[3])}function Vt(e,t,s){return Math.max(t[0],e[0])-s<=Math.min(t[2],e[2])&&Math.max(t[1],e[1])-s<=Math.min(t[3],e[3])}function jt(e,t){return t[0]>=e[0]&&t[2]<=e[2]&&t[1]>=e[1]&&t[3]<=e[3]}function Gt(e,t,s){if(t==null)return B(s,e);const r=t[0],n=t[1],a=t[2],i=t[3];return s[0]=F(e[0],r,a),s[1]=F(e[1],n,i),s[2]=F(e[2],r,a),s[3]=F(e[3],n,i),s}function Dt(e,t){const s=(e[0]+e[2])/2,r=(e[1]+e[3])/2,n=Math.max(Math.abs(t[0]-s)-O(e)/2,0),a=Math.max(Math.abs(t[1]-r)-E(e)/2,0);return Math.sqrt(n*n+a*a)}function Xt(e,t,s,r=e){return r[0]=e[0]+t,r[1]=e[1]+s,r[2]=e[2]+t,r[3]=e[3]+s,r}function Lt(e,t,s=e){return s[0]=e[0]-t,s[1]=e[1]-t,s[2]=e[2]+t,s[3]=e[3]+t,s}function Wt(e){return e?B(e,ne):C(ne)}function D(e){return e!=null&&e.length===4}function Bt(e){return!(O(e)!==0&&isFinite(e[0])||E(e)!==0&&isFinite(e[1]))}function Ut(e,t){return D(e)&&D(t)?e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]:e===t}const Ht=[-1/0,-1/0,1/0,1/0],ne=[1/0,1/0,-1/0,-1/0],Le=[0,0,0,0];function me(e){return e.xmin!==void 0&&e.ymin!==void 0&&e.xmax!==void 0&&e.ymax!==void 0}function ye(e){return e.points!==void 0}function ge(e){return e.x!==void 0&&e.y!==void 0}function xe(e){return e.paths!==void 0}function Me(e){return e.rings!==void 0}function $e(e){function t(s,r){return s==null?r:r==null?s:e(s,r)}return t}const z=$e(Math.min),A=$e(Math.max);function Kt(e,t){return xe(t)?_(e,t.paths,!1,!1):Me(t)?_(e,t.rings,!1,!1):ye(t)?U(e,t.points,!1,!1,!1,!1):me(t)?de(e,t):(ge(t)&&(e[0]=t.x,e[1]=t.y,e[2]=t.x,e[3]=t.y),e)}function Qt(e){let t,s,r,n;for(e.reset(),t=r=1/0,s=n=-1/0;e.nextPath();){const a=We(e);t=Math.min(a[0],t),r=Math.min(a[1],r),s=Math.max(a[2],s),n=Math.max(a[3],n)}return C([t,r,s,n])}function We(e){let t,s,r,n;for(t=r=1/0,s=n=-1/0;e.nextPoint();)t=Math.min(e.x,t),r=Math.min(e.y,r),s=Math.max(e.x,s),n=Math.max(e.y,n);return C([t,r,s,n])}function es(e,t){return xe(t)?_(e,t.paths,!0,!1):Me(t)?_(e,t.rings,!0,!1):ye(t)?U(e,t.points,!0,!1,!0,!1):me(t)?de(e,t,!0,!1,!0,!1):(ge(t)&&(e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.x,e[4]=t.y,e[5]=t.z),e)}function _(e,t,s,r){const n=s?3:2;if(!t.length||!t[0].length)return null;let a,i,o,u,[l,h]=t[0][0],[f,c]=t[0][0];for(let p=0;p<t.length;p++){const m=t[p];for(let y=0;y<m.length;y++){const g=m[y],[$,x]=g;if(l=z(l,$),h=z(h,x),f=A(f,$),c=A(c,x),s&&g.length>2){const v=g[2];a=z(a,v),i=A(i,v)}if(r&&g.length>n){const v=g[n];o=z(a,v),u=A(i,v)}}}return s?r?(e[0]=l,e[1]=h,e[2]=a,e[3]=o,e[4]=f,e[5]=c,e[6]=i,e[7]=u,e.length=8,e):(e[0]=l,e[1]=h,e[2]=a,e[3]=f,e[4]=c,e[5]=i,e.length=6,e):r?(e[0]=l,e[1]=h,e[2]=o,e[3]=f,e[4]=c,e[5]=u,e.length=6,e):(e[0]=l,e[1]=h,e[2]=f,e[3]=c,e.length=4,e)}function de(e,t,s,r,n,a){const i=t.xmin,o=t.xmax,u=t.ymin,l=t.ymax;let h=t.zmin,f=t.zmax,c=t.mmin,p=t.mmax;return n?(h=h||0,f=f||0,a?(c=c||0,p=p||0,e[0]=i,e[1]=u,e[2]=h,e[3]=c,e[4]=o,e[5]=l,e[6]=f,e[7]=p,e):(e[0]=i,e[1]=u,e[2]=h,e[3]=o,e[4]=l,e[5]=f,e)):a?(c=c||0,p=p||0,e[0]=i,e[1]=u,e[2]=c,e[3]=o,e[4]=l,e[5]=p,e):(e[0]=i,e[1]=u,e[2]=o,e[3]=l,e)}function U(e,t,s,r,n,a){const i=s?3:2,o=r&&a,u=s&&n;if(!t.length||!t[0].length)return null;let l,h,f,c,[p,m]=t[0],[y,g]=t[0];for(let $=0;$<t.length;$++){const x=t[$],[v,b]=x;if(p=z(p,v),m=z(m,b),y=A(y,v),g=A(g,b),u&&x.length>2){const I=x[2];l=z(l,I),h=A(h,I)}if(o&&x.length>i){const I=x[i];f=z(l,I),c=A(h,I)}}return n?(l=l||0,h=h||0,a?(f=f||0,c=c||0,e[0]=p,e[1]=m,e[2]=l,e[3]=f,e[4]=y,e[5]=g,e[6]=h,e[7]=c,e):(e[0]=p,e[1]=m,e[2]=l,e[3]=y,e[4]=g,e[5]=h,e)):a?(f=f||0,c=c||0,e[0]=p,e[1]=m,e[2]=f,e[3]=y,e[4]=g,e[5]=c,e):(e[0]=p,e[1]=m,e[2]=y,e[3]=g,e)}function Be(e){return e.xmin!==void 0&&e.ymin!==void 0&&e.xmax!==void 0&&e.ymax!==void 0}function Ue(e){return e.points!==void 0}function He(e){return e.x!==void 0&&e.y!==void 0}function Ke(e){return e.paths!==void 0}function Qe(e){return e.rings!==void 0}const H=[];function ve(e,t,s,r){return{xmin:e,ymin:t,xmax:s,ymax:r}}function Ie(e,t,s,r,n,a){return{xmin:e,ymin:t,zmin:s,xmax:r,ymax:n,zmax:a}}function Pe(e,t,s,r,n,a){return{xmin:e,ymin:t,mmin:s,xmax:r,ymax:n,mmax:a}}function Re(e,t,s,r,n,a,i,o){return{xmin:e,ymin:t,zmin:s,mmin:r,xmax:n,ymax:a,zmax:i,mmax:o}}function K(e,t=!1,s=!1){return t?s?Re(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]):Ie(e[0],e[1],e[2],e[3],e[4],e[5]):s?Pe(e[0],e[1],e[2],e[3],e[4],e[5]):ve(e[0],e[1],e[2],e[3])}function ts(e){return e?Be(e)?e:He(e)?tt(e):Qe(e)?we(e):Ke(e)?Ne(e):Ue(e)?et(e):null:null}function et(e){const{hasZ:t,hasM:s,points:r}=e;return K(U(H,r,t??!1,s??!1),t,s)}function tt(e){const{x:t,y:s,z:r,m:n}=e,a=n!=null;return r!=null?a?Re(t,s,r,n,t,s,r,n):Ie(t,s,r,t,s,r):a?Pe(t,s,n,t,s,n):ve(t,s,t,s)}function we(e){const{hasZ:t,hasM:s,rings:r}=e,n=_(H,r,t??!1,s??!1);return n?K(n,t,s):null}function Ne(e){const{hasZ:t,hasM:s,paths:r}=e,n=_(H,r,t??!1,s??!1);return n?K(n,t,s):null}var Y;function ie(e){return!Array.isArray(e[0])}function st(e){var t;return typeof((t=e[0])==null?void 0:t[0])=="number"}function rt(e){var a,i;if(!e)return;let{rings:t,hasM:s,hasZ:r,spatialReference:n}=e;switch(t??(t=[]),st(t)&&(t=[t]),(i=(a=t[0])==null?void 0:a[0])==null?void 0:i.length){case 4:r??(r=!0),s??(s=!0);break;case 3:r??(r=s!==!0),s??(s=!r);break;default:r??(r=!1),s??(s=!1)}return n??(n=oe.WGS84),{...e,hasM:s,hasZ:r,rings:t,spatialReference:n}}let R=Y=class extends W{static fromExtent(e){const t=e.clone().normalize(),{spatialReference:s}=e;let r=!1,n=!1;for(const i of t)i.hasZ&&(r=!0),i.hasM&&(n=!0);const a={rings:t.map(i=>{const o=[[i.xmin,i.ymin],[i.xmin,i.ymax],[i.xmax,i.ymax],[i.xmax,i.ymin],[i.xmin,i.ymin]];if(r&&i.hasZ){const u=i.zmin+.5*(i.zmax-i.zmin);for(let l=0;l<o.length;l++)o[l].push(u)}if(n&&i.hasM){const u=i.mmin+.5*(i.mmax-i.mmin);for(let l=0;l<o.length;l++)o[l].push(u)}return o}),spatialReference:s};return r&&(a.hasZ=!0),n&&(a.hasM=!0),new Y(a)}constructor(e){super(rt(e)),this.curveRings=void 0,this.rings=[],this.type="polygon"}get cache(){return this.commitProperty("curveRings"),this.commitProperty("hasM"),this.commitProperty("hasZ"),this.commitProperty("rings"),this.commitProperty("spatialReference"),{}}get centroid(){const e=ke(this);if(!e||isNaN(e[0])||isNaN(e[1])||this.hasZ&&isNaN(e[2]))return null;const t=new d;return t.x=e[0],t.y=e[1],t.spatialReference=this.spatialReference,this.hasZ&&(t.z=e[2]),t}writeCurveRings(e,t){t.curveRings=N(e)}get extent(){const e=we(this),{spatialReference:t}=this;return e?new q({...e,spatialReference:t}):null}get isSelfIntersecting(){return ze(this.rings)}writeRings(e,t){t.rings=N(this.rings)}addRing(e){if(!e)return;const t=this.rings,s=t.length;if(ie(e)){const r=[];for(let n=0,a=e.length;n<a;n++)r[n]=e[n].toArray();t[s]=r}else t[s]=e.slice();return this.notifyChange("rings"),this}clone(){const e=new Y;return e.spatialReference=this.spatialReference,e.rings=N(this.rings),e.curveRings=N(this.curveRings),e.hasZ=this.hasZ,e.hasM=this.hasM,e}equals(e){if(this===e)return!0;if(e==null)return!1;const t=this.spatialReference,s=e.spatialReference;if(t!=null!=(s!=null)||t!=null&&s!=null&&!t.equals(s)||this.rings.length!==e.rings.length)return!1;const r=([n,a,i,o],[u,l,h,f])=>n===u&&a===l&&(i==null&&h==null||i===h)&&(o==null&&f==null||o===f);for(let n=0;n<this.rings.length;n++){const a=this.rings[n],i=e.rings[n];if(!ae(a,i,r))return!1}return!0}contains(e){if(!e)return!1;const t=Se(e,this.spatialReference);return Ae(this,t??e)}isClockwise(e){const t=ie(e)?e.map(s=>this.hasZ?this.hasM?[s.x,s.y,s.z,s.m]:[s.x,s.y,s.z]:[s.x,s.y]):e;return he(t)}getPoint(e,t){if(!this._validateInputs(e,t))return null;const s=this.rings[e][t],r=this.hasZ,n=this.hasM;return r&&!n?new d(s[0],s[1],s[2],void 0,this.spatialReference):n&&!r?new d(s[0],s[1],void 0,s[2],this.spatialReference):r&&n?new d(s[0],s[1],s[2],s[3],this.spatialReference):new d(s[0],s[1],this.spatialReference)}insertPoint(e,t,s){return this._validateInputs(e,t,!0)?(S(this,s),Array.isArray(s)||(s=s.toArray()),this.rings[e].splice(t,0,s),this.notifyChange("rings"),this):this}removePoint(e,t){if(!this._validateInputs(e,t))return null;const s=new d(this.rings[e].splice(t,1)[0],this.spatialReference);return this.notifyChange("rings"),s}removeRing(e){if(!this._validateInputs(e,null))return null;const t=this.rings.splice(e,1)[0],s=this.spatialReference,r=t.map(n=>new d(n,s));return this.notifyChange("rings"),r}setPoint(e,t,s){return this._validateInputs(e,t)?(S(this,s),Array.isArray(s)||(s=s.toArray()),this.rings[e][t]=s,this.notifyChange("rings"),this):this}_validateInputs(e,t,s=!1){if(e==null||e<0||e>=this.rings.length)return!1;if(t!=null){const r=this.rings[e];if(s&&(t<0||t>r.length)||!s&&(t<0||t>=r.length))return!1}return!0}toJSON(e){return this.write({},e)}};M([P({readOnly:!0})],R.prototype,"cache",null),M([P({readOnly:!0})],R.prototype,"centroid",null),M([P({json:{write:!0,origins:{"portal-item":{write:!1},"web-map":{write:!1},"web-scene":{write:!1}}}})],R.prototype,"curveRings",void 0),M([T("curveRings")],R.prototype,"writeCurveRings",null),M([P({readOnly:!0})],R.prototype,"extent",null),M([P({readOnly:!0})],R.prototype,"isSelfIntersecting",null),M([P({type:[[[Number]]],json:{write:{isRequired:!0}}})],R.prototype,"rings",void 0),M([T("rings")],R.prototype,"writeRings",null),R=Y=M([L("esri.geometry.Polygon")],R);const ss=R;R.prototype.toJSON.isDefaultToJSON=!0;var X;function nt(e){return!Array.isArray(e[0])}function it(e){var t;return typeof((t=e[0])==null?void 0:t[0])=="number"}function at(e){var a,i;if(!e)return;let{paths:t,hasM:s,hasZ:r,spatialReference:n}=e;switch(t??(t=[]),it(t)&&(t=[t]),(i=(a=t[0])==null?void 0:a[0])==null?void 0:i.length){case 4:r??(r=!0),s??(s=!0);break;case 3:r??(r=s!==!0),s??(s=!r);break;default:r??(r=!1),s??(s=!1)}return n??(n=oe.WGS84),{...e,hasM:s,hasZ:r,paths:t,spatialReference:n}}let w=X=class extends W{constructor(e){super(at(e)),this.curvePaths=void 0,this.paths=[],this.type="polyline"}get cache(){return this.commitProperty("curvePaths"),this.commitProperty("hasM"),this.commitProperty("hasZ"),this.commitProperty("paths"),this.commitProperty("spatialReference"),{}}writeCurvePaths(e,t){t.curvePaths=N(e)}get extent(){const e=Ne(this),{spatialReference:t}=this;return e?new q({...e,spatialReference:t}):null}writePaths(e,t){t.paths=N(this.paths)}addPath(e){if(!e)return;const t=this.paths,s=t.length;if(nt(e)){const r=[];for(let n=0,a=e.length;n<a;n++)r[n]=e[n].toArray();t[s]=r}else t[s]=e.slice();return this.notifyChange("paths"),this}clone(){const e=new X;return e.spatialReference=this.spatialReference,e.paths=N(this.paths),e.curvePaths=N(this.curvePaths),e.hasZ=this.hasZ,e.hasM=this.hasM,e}getPoint(e,t){if(!this._validateInputs(e,t))return null;const s=this.paths[e][t],r=this.hasZ,n=this.hasM;return r&&!n?new d(s[0],s[1],s[2],void 0,this.spatialReference):n&&!r?new d(s[0],s[1],void 0,s[2],this.spatialReference):r&&n?new d(s[0],s[1],s[2],s[3],this.spatialReference):new d(s[0],s[1],this.spatialReference)}insertPoint(e,t,s){return this._validateInputs(e,t,!0)?(S(this,s),Array.isArray(s)||(s=s.toArray()),this.paths[e].splice(t,0,s),this.notifyChange("paths"),this):this}removePath(e){if(!this._validateInputs(e,null))return null;const t=this.paths.splice(e,1)[0],s=this.spatialReference,r=t.map(n=>new d(n,s));return this.notifyChange("paths"),r}removePoint(e,t){if(!this._validateInputs(e,t))return null;const s=new d(this.paths[e].splice(t,1)[0],this.spatialReference);return this.notifyChange("paths"),s}setPoint(e,t,s){return this._validateInputs(e,t)?(S(this,s),Array.isArray(s)||(s=s.toArray()),this.paths[e][t]=s,this.notifyChange("paths"),this):this}_validateInputs(e,t,s=!1){if(e==null||e<0||e>=this.paths.length)return!1;if(t!=null){const r=this.paths[e];if(s&&(t<0||t>r.length)||!s&&(t<0||t>=r.length))return!1}return!0}toJSON(e){return this.write({},e)}};M([P({readOnly:!0})],w.prototype,"cache",null),M([P({json:{write:!0,origins:{"portal-item":{write:!1},"web-map":{write:!1},"web-scene":{write:!1}}}})],w.prototype,"curvePaths",void 0),M([T("curvePaths")],w.prototype,"writeCurvePaths",null),M([P({readOnly:!0})],w.prototype,"extent",null),M([P({type:[[[Number]]],json:{write:{isRequired:!0}}})],w.prototype,"paths",void 0),M([T("paths")],w.prototype,"writePaths",null),w=X=M([L("esri.geometry.Polyline")],w);const rs=w;w.prototype.toJSON.isDefaultToJSON=!0;export{Rt as $,E as A,Gt as B,$t as C,ue as D,Tt as E,we as F,ke as G,Wt as H,It as I,Ot as J,Ut as K,Ft as L,dt as M,ne as N,qt as O,rs as P,kt as Q,Jt as R,Lt as S,vt as T,Ye as U,pt as V,Te as W,Qt as X,We as Y,Pt as Z,Ce as _,C as a,Et as a0,yt as a1,Vt as a2,_t as a3,Ht as a4,wt as a5,Xt as a6,Ct as a7,Bt as a8,Dt as a9,Yt as aa,Nt as b,Zt as c,jt as d,mt as e,B as f,he as g,xt as h,bt as i,ss as j,zt as k,Kt as l,es as m,k as n,qe as o,Mt as p,Oe as q,At as r,St as s,gt as t,ct as u,ts as v,pe as w,_ as x,O as y,Fe as z};
