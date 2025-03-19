import{r as u,m as y,d as U,a as V}from"./Accessor-BHnuXKD2.js";import{b as X,g as E,j as Y,aj as k,E as q,k as A,c as ii,L as J}from"./Point-XGrwlf63.js";const T=[0,0];function F(i,e){return e!=null&&p(i,e.x,e.y,e.z)}function pi(i,e){var t;if(!((t=e.points)!=null&&t.length))return!1;for(const s of e.points)if(!I(i,s))return!1;return!0}function ei(i,e){const{xmin:t,ymin:s,zmin:n,xmax:r,ymax:m,zmax:h}=e;return i.hasZ&&e.hasZ?p(i,t,s,n)&&p(i,t,m,n)&&p(i,r,m,n)&&p(i,r,s,n)&&p(i,t,s,h)&&p(i,t,m,h)&&p(i,r,m,h)&&p(i,r,s,h):p(i,t,s)&&p(i,t,m)&&p(i,r,m)&&p(i,r,s)}function I(i,e){return p(i,e[0],e[1])}function ti(i,e){return p(i,e[0],e[1],e[2])}function p(i,e,t,s){return e>=i.xmin&&e<=i.xmax&&t>=i.ymin&&t<=i.ymax&&(s==null||!i.hasZ||s>=i.zmin&&s<=i.zmax)}function zi(i,e){return T[1]=e.y,T[0]=e.x,ni(i,T)}function ni(i,e){return H(i.rings,e)}function H(i,e){if(!i)return!1;if(si(i))return B(!1,i,e);let t=!1;for(let s=0,n=i.length;s<n;s++)t=B(t,i[s],e);return t}function si(i){return!Array.isArray(i[0][0])}function B(i,e,t){const[s,n]=t;let r=i,m=0;for(let h=0,a=e.length;h<a;h++){m++,m===a&&(m=0);const[x,o]=e[h],[f,d]=e[m];(o<n&&d>=n||d<n&&o>=n)&&x+(n-o)/(d-o)*(f-x)<s&&(r=!r)}return r}function ri(i,e){return F(i,e)}function mi(i,e){const t=i.hasZ&&e.hasZ;let s,n,r;if(i.xmin<=e.xmin){if(s=e.xmin,i.xmax<s)return!1}else if(s=i.xmin,e.xmax<s)return!1;if(i.ymin<=e.ymin){if(n=e.ymin,i.ymax<n)return!1}else if(n=i.ymin,e.ymax<n)return!1;if(t&&e.hasZ){if(i.zmin<=e.zmin){if(r=e.zmin,i.zmax<r)return!1}else if(r=i.zmin,e.zmax<r)return!1}return!0}function ai(i,e){const{points:t,hasZ:s}=e,n=s?ti:I;for(const r of t)if(n(i,r))return!0;return!1}const Z=[0,0],j=[0,0],$=[0,0],N=[0,0],hi=[Z,j,$,N],K=[[$,Z],[Z,j],[j,N],[N,$]];function oi(i,e){return xi(i,e.rings)}function xi(i,e){Z[0]=i.xmin,Z[1]=i.ymax,j[0]=i.xmax,j[1]=i.ymax,$[0]=i.xmin,$[1]=i.ymin,N[0]=i.xmax,N[1]=i.ymin;for(const t of hi)if(H(e,t))return!0;for(const t of e){if(!t.length)continue;let s=t[0];if(I(i,s))return!0;for(let n=1;n<t.length;n++){const r=t[n];if(I(i,r)||Q(s,r,K))return!0;s=r}}return!1}function li(i,e){Z[0]=i.xmin,Z[1]=i.ymax,j[0]=i.xmax,j[1]=i.ymax,$[0]=i.xmin,$[1]=i.ymin,N[0]=i.xmax,N[1]=i.ymin;const t=e.paths;for(const s of t){if(!t.length)continue;let n=s[0];if(I(i,n))return!0;for(let r=1;r<s.length;r++){const m=s[r];if(I(i,m)||Q(n,m,K))return!0;n=m}}return!1}const c=[0,0];function di(i){for(let e=0;e<i.length;e++){const t=i[e];for(let n=0;n<t.length-1;n++){const r=t[n],m=t[n+1];for(let h=e+1;h<i.length;h++)for(let a=0;a<i[h].length-1;a++){const x=i[h][a],o=i[h][a+1];if(L(r,m,x,o,c)&&!(c[0]===r[0]&&c[1]===r[1]||c[0]===x[0]&&c[1]===x[1]||c[0]===m[0]&&c[1]===m[1]||c[0]===o[0]&&c[1]===o[1]))return!0}}const s=t.length;if(!(s<=4))for(let n=0;n<s-3;n++){let r=s-1;n===0&&(r=s-2);const m=t[n],h=t[n+1];for(let a=n+2;a<r;a++){const x=t[a],o=t[a+1];if(L(m,h,x,o,c)&&!(c[0]===m[0]&&c[1]===m[1]||c[0]===x[0]&&c[1]===x[1]||c[0]===h[0]&&c[1]===h[1]||c[0]===o[0]&&c[1]===o[1]))return!0}}}return!1}function Q(i,e,t){for(let s=0;s<t.length;s++)if(L(i,e,t[s][0],t[s][1]))return!0;return!1}function L(i,e,t,s,n){const[r,m]=i,[h,a]=e,[x,o]=t,[f,d]=s,M=f-x,g=r-x,w=h-r,b=d-o,O=m-o,_=a-m,P=b*w-M*_;if(P===0)return!1;const R=(M*O-b*g)/P,G=(w*O-_*g)/P;return R>=0&&R<=1&&G>=0&&G<=1&&(n&&(n[0]=r+R*(h-r),n[1]=m+R*(a-m)),!0)}function ci(i){switch(i){case"esriGeometryEnvelope":case"extent":return mi;case"esriGeometryMultipoint":case"multipoint":return ai;case"esriGeometryPoint":case"point":return ri;case"esriGeometryMultiPatch":case"multipatch":case"esriGeometryPolygon":case"polygon":return oi;case"esriGeometryPolyline":case"polyline":return li}}var z;function ui(i){return i&&(i.declaredClass==="esri.geometry.SpatialReference"||i.wkid!=null)}function v(i,e,t){return e==null?t:t==null?e:i(e,t)}let l=z=class extends X{constructor(...i){super(...i),this.type="extent",this.xmin=0,this.ymin=0,this.mmin=void 0,this.zmin=void 0,this.xmax=0,this.ymax=0,this.mmax=void 0,this.zmax=void 0}normalizeCtorArgs(i,e,t,s,n){return ui(i)?{spatialReference:i,xmin:0,ymin:0,xmax:0,ymax:0}:typeof i=="object"?(i.spatialReference=i.spatialReference==null?E.WGS84:i.spatialReference,i):{xmin:i,ymin:e,xmax:t,ymax:s,spatialReference:n??E.WGS84}}static fromPoint(i){return new z({xmin:i.x,ymin:i.y,zmin:i.z,xmax:i.x,ymax:i.y,zmax:i.z,spatialReference:i.spatialReference})}get cache(){return this.commitProperty("xmin"),this.commitProperty("ymin"),this.commitProperty("zmin"),this.commitProperty("mmin"),this.commitProperty("xmax"),this.commitProperty("ymax"),this.commitProperty("zmax"),this.commitProperty("mmax"),this.commitProperty("spatialReference"),{}}get center(){const i=new Y({x:.5*(this.xmin+this.xmax),y:.5*(this.ymin+this.ymax),spatialReference:this.spatialReference});return this.hasZ&&(i.z=.5*(this.zmin+this.zmax)),this.hasM&&(i.m=.5*(this.mmin+this.mmax)),i}get extent(){return this.clone()}get hasM(){return this.mmin!=null&&this.mmax!=null}get hasZ(){return this.zmin!=null&&this.zmax!=null}get height(){return Math.abs(this.ymax-this.ymin)}get width(){return Math.abs(this.xmax-this.xmin)}centerAt(i){const e=this.center;return i.z!=null&&this.hasZ?this.offset(i.x-e.x,i.y-e.y,i.z-e.z):this.offset(i.x-e.x,i.y-e.y)}clone(){const i=new z;return i.xmin=this.xmin,i.ymin=this.ymin,i.xmax=this.xmax,i.ymax=this.ymax,i.spatialReference=this.spatialReference,this.zmin!=null&&(i.zmin=this.zmin,i.zmax=this.zmax),this.mmin!=null&&(i.mmin=this.mmin,i.mmax=this.mmax),i}contains(i){if(!i)return!1;const e=this.spatialReference,t=i.spatialReference;return e&&t&&!e.equals(t)&&k(e,t)&&(i=e.isWebMercator?q(i):A(i,!0)),i.type==="point"?F(this,i):i.type==="extent"&&ei(this,i)}equals(i){if(this===i)return!0;if(i==null)return!1;const e=this.spatialReference,t=i.spatialReference;return e&&t&&!e.equals(t)&&k(e,t)&&(i=e.isWebMercator?q(i):A(i,!0)),this.xmin===i.xmin&&this.ymin===i.ymin&&this.zmin===i.zmin&&this.mmin===i.mmin&&this.xmax===i.xmax&&this.ymax===i.ymax&&this.zmax===i.zmax&&this.mmax===i.mmax}expand(i){const e=.5*(1-i),t=this.width*e,s=this.height*e;if(this.xmin+=t,this.ymin+=s,this.xmax-=t,this.ymax-=s,this.hasZ){const n=(this.zmax-this.zmin)*e;this.zmin+=n,this.zmax-=n}if(this.hasM){const n=(this.mmax-this.mmin)*e;this.mmin+=n,this.mmax-=n}return this}intersects(i){if(i==null)return!1;i.type==="mesh"&&(i=i.extent);const e=this.spatialReference,t=i.spatialReference;return e&&t&&!ii(e,t)&&k(e,t)&&(i=e.isWebMercator?q(i):A(i,!0)),ci(i.type)(this,i)}normalize(){const i=this._normalize(!1,!0);return Array.isArray(i)?i:[i]}offset(i,e,t){return this.xmin+=i,this.ymin+=e,this.xmax+=i,this.ymax+=e,t!=null&&(this.zmin+=t,this.zmax+=t),this}shiftCentralMeridian(){return this._normalize(!0)}union(i){return this===i||(this.xmin=Math.min(this.xmin,i.xmin),this.ymin=Math.min(this.ymin,i.ymin),this.xmax=Math.max(this.xmax,i.xmax),this.ymax=Math.max(this.ymax,i.ymax),(this.hasZ||i.hasZ)&&(this.zmin=v(Math.min,this.zmin,i.zmin),this.zmax=v(Math.max,this.zmax,i.zmax)),(this.hasM||i.hasM)&&(this.mmin=v(Math.min,this.mmin,i.mmin),this.mmax=v(Math.max,this.mmax,i.mmax))),this}intersection(i){return this===i?this:i!=null&&this.intersects(i)?(this.xmin=Math.max(this.xmin,i.xmin),this.ymin=Math.max(this.ymin,i.ymin),this.xmax=Math.min(this.xmax,i.xmax),this.ymax=Math.min(this.ymax,i.ymax),(this.hasZ||i.hasZ)&&(this.zmin=v(Math.max,this.zmin,i.zmin),this.zmax=v(Math.min,this.zmax,i.zmax)),(this.hasM||i.hasM)&&(this.mmin=v(Math.max,this.mmin,i.mmin),this.mmax=v(Math.min,this.mmax,i.mmax)),this):null}toJSON(i){return this.write({},i)}_shiftCM(i=J(this.spatialReference)){if(!i||!this.spatialReference)return this;const e=this.spatialReference,t=this._getCM(i);if(t){const s=e.isWebMercator?A(t):t;this.xmin-=t.x,this.xmax-=t.x,e.isWebMercator||(s.x=D(s.x,i).x),this.spatialReference=new E(U((e.isWGS84?i.altTemplate:null)??i.wkTemplate,{Central_Meridian:s.x}))}return this}_getCM(i){let e=null;const[t,s]=i.valid,n=this.xmin,r=this.xmax;return n>=t&&n<=s&&r>=t&&r<=s||(e=this.center),e}_normalize(i,e,t){const s=this.spatialReference;if(!s)return this;const n=t??J(s);if(n==null)return this;const r=this._getParts(n).map(a=>a.extent);if(r.length<2)return r[0]||this;if(r.length>2)return i?this._shiftCM(n):this.set({xmin:n.valid[0],xmax:n.valid[1]});if(i)return this._shiftCM(n);if(e)return r;let m=!0,h=!0;return r.forEach(a=>{a.hasZ||(m=!1),a.hasM||(h=!1)}),{rings:r.map(a=>{const x=[[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]];if(m){const o=(a.zmax-a.zmin)/2;for(let f=0;f<x.length;f++)x[f].push(o)}if(h){const o=(a.mmax-a.mmin)/2;for(let f=0;f<x.length;f++)x[f].push(o)}return x}),hasZ:m,hasM:h,spatialReference:s}}_getParts(i){let e=this.cache._parts;if(!e){e=[];const{ymin:n,ymax:r,spatialReference:m}=this,h=this.width,a=this.xmin,x=this.xmax;let o;i=i||J(m);const[f,d]=i.valid;o=D(this.xmin,i);const M=o.x,g=o.frameId;o=D(this.xmax,i);const w=o.x,b=o.frameId,O=M===w&&h>0;if(h>2*d){const _=new z(a<x?M:w,n,d,r,m),P=new z(f,n,a<x?w:M,r,m),R=new z(0,n,d,r,m),G=new z(f,n,0,r,m),C=[],S=[];_.contains(R)&&C.push(g),_.contains(G)&&S.push(g),P.contains(R)&&C.push(b),P.contains(G)&&S.push(b);for(let W=g+1;W<b;W++)C.push(W),S.push(W);e.push({extent:_,frameIds:[g]},{extent:P,frameIds:[b]},{extent:R,frameIds:C},{extent:G,frameIds:S})}else M>w||O?e.push({extent:new z(M,n,d,r,m),frameIds:[g]},{extent:new z(f,n,w,r,m),frameIds:[b]}):e.push({extent:new z(M,n,w,r,m),frameIds:[g]});this.cache._parts=e}const t=this.hasZ,s=this.hasM;if(t||s){const n={};t&&(n.zmin=this.zmin,n.zmax=this.zmax),s&&(n.mmin=this.mmin,n.mmax=this.mmax);for(let r=0;r<e.length;r++)e[r].extent.set(n)}return e}};function D(i,e){const[t,s]=e.valid,n=2*s;let r,m=0;return i>s?(r=Math.ceil(Math.abs(i-s)/n),i-=r*n,m=r):i<t&&(r=Math.ceil(Math.abs(i-t)/n),i+=r*n,m=-r),{x:i,frameId:m}}u([y({readOnly:!0})],l.prototype,"cache",null),u([y({readOnly:!0})],l.prototype,"center",null),u([y({readOnly:!0})],l.prototype,"extent",null),u([y({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],l.prototype,"hasM",null),u([y({readOnly:!0,json:{write:{enabled:!1,overridePolicy:null}}})],l.prototype,"hasZ",null),u([y({readOnly:!0})],l.prototype,"height",null),u([y({readOnly:!0})],l.prototype,"width",null),u([y({type:Number,json:{type:[Number,String],write:{enabled:!0,allowNull:!0}}})],l.prototype,"xmin",void 0),u([y({type:Number,json:{write:!0}})],l.prototype,"ymin",void 0),u([y({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasM}}}}})],l.prototype,"mmin",void 0),u([y({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasZ}}}}})],l.prototype,"zmin",void 0),u([y({type:Number,json:{write:!0}})],l.prototype,"xmax",void 0),u([y({type:Number,json:{write:!0}})],l.prototype,"ymax",void 0),u([y({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasM}}}}})],l.prototype,"mmax",void 0),u([y({type:Number,json:{origins:{"web-scene":{write:!1}},write:{overridePolicy(){return{enabled:this.hasZ}}}}})],l.prototype,"zmax",void 0),l=z=u([V("esri.geometry.Extent")],l),l.prototype.toJSON.isDefaultToJSON=!0;const Mi=l;export{L as G,ci as P,H as a,p as b,ti as e,zi as f,I as i,mi as o,di as p,pi as r,F as t,Mi as w,oi as x};
