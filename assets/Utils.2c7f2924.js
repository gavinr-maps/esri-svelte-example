import{t as H,b6 as $,s as Y,f as O}from"./index.ebaf2ed0.js";import{x as _,D as N}from"./enums.6e42a319.js";import{F as b,G as S,C as T}from"./enums.de935fa5.js";import"./Texture.a7d7dc83.js";import{t as z}from"./VertexElementDescriptor.d386088d.js";const x=new Float32Array(1);new Uint32Array(x.buffer);function yt(t){return[255&t,(65280&t)>>>8,(16711680&t)>>>16,(4278190080&t)>>>24]}function pt(t,e){return 65535&t|e<<16}function w(t,e,n,r){return 255&t|(255&e)<<8|(255&n)<<16|r<<24}function Et(t,e=0,n=!1){const r=t[e+3];return t[e+0]*=r,t[e+1]*=r,t[e+2]*=r,n||(t[e+3]*=255),t}function Mt(t){if(!t)return 0;const{r:e,g:n,b:r,a:s}=t;return w(e*s,n*s,r*s,255*s)}function Dt(t){if(!t)return 0;const[e,n,r,s]=t;return w(e*(s/255),n*(s/255),r*(s/255),s)}function Rt(t,e,n=0){if(H(e))return t[n+0]=0,t[n+1]=0,t[n+2]=0,void(t[n+3]=0);const{r,g:s,b:a,a:c}=e;t[n+0]=r*c/255,t[n+1]=s*c/255,t[n+2]=a*c/255,t[n+3]=c}var i,y,p,L,E,M,D,f;(function(t){t[t.FILL=0]="FILL",t[t.LINE=1]="LINE",t[t.MARKER=2]="MARKER",t[t.TEXT=3]="TEXT",t[t.LABEL=4]="LABEL"})(i||(i={})),function(t){t[t.SUCCEEDED=0]="SUCCEEDED",t[t.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY"}(y||(y={})),function(t){t[t.NONE=0]="NONE",t[t.MAP=1]="MAP",t[t.LABEL=2]="LABEL",t[t.LABEL_ALPHA=4]="LABEL_ALPHA",t[t.HITTEST=8]="HITTEST",t[t.HIGHLIGHT=16]="HIGHLIGHT",t[t.CLIP=32]="CLIP",t[t.DEBUG=64]="DEBUG",t[t.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(p||(p={})),function(t){t[t.SIZE=0]="SIZE",t[t.COLOR=1]="COLOR",t[t.OPACITY=2]="OPACITY",t[t.ROTATION=3]="ROTATION"}(L||(L={})),function(t){t[t.NONE=0]="NONE",t[t.OPACITY=1]="OPACITY",t[t.COLOR=2]="COLOR",t[t.ROTATION=4]="ROTATION",t[t.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",t[t.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",t[t.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",t[t.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE"}(E||(E={})),function(t){t[t.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",t[t.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",t[t.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",t[t.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(M||(M={})),function(t){t[t.SPRITE=0]="SPRITE",t[t.GLYPH=1]="GLYPH"}(D||(D={})),function(t){t[t.DEFAULT=0]="DEFAULT",t[t.SIMPLE=1]="SIMPLE",t[t.DOT_DENSITY=2]="DOT_DENSITY",t[t.OUTLINE_FILL=3]="OUTLINE_FILL",t[t.OUTLINE_FILL_SIMPLE=4]="OUTLINE_FILL_SIMPLE",t[t.HEATMAP=5]="HEATMAP",t[t.PIE_CHART=6]="PIE_CHART"}(f||(f={}));class R{constructor(){this.color=[0,0,0,0],this.haloColor=[0,0,0,0],this.haloSize=0,this.size=12,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}acquire(e,n,r,s,a,c,d,u,I){this.color=e,this.haloColor=n,this.haloSize=r,this.size=s,this.angle=a,this.offsetX=c,this.offsetY=d,this.hAnchor=u,this.vAnchor=I}release(){this.color[0]=this.color[1]=this.color[2]=this.color[3]=0,this.haloColor[0]=this.haloColor[1]=this.haloColor[2]=this.haloColor[3]=0,this.haloSize=0,this.size=0,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}}R.pool=new $(R);const A=Y.getLogger("esri.views.2d.engine.webgl.Utils"),o="geometry",X=[{name:o,strideInBytes:36}],V=[{name:o,strideInBytes:12}],Z=[{name:o,strideInBytes:36}],k=[{name:o,strideInBytes:24}],q=[{name:o,strideInBytes:12}],K=[{name:o,strideInBytes:40}],W=[{name:o,strideInBytes:36}],j=[{name:o,strideInBytes:36}];function l(t){const e={};for(const n of t)e[n.name]=n.strideInBytes;return e}const J=l(X),Q=l(V),tt=l(Z),et=l(k),nt=l(q),rt=l(K),st=l(W),at=l(j);function Ct(t,e){switch(t){case i.MARKER:return e===f.HEATMAP?Q:J;case i.FILL:switch(e){case f.DOT_DENSITY:return nt;case f.SIMPLE:case f.OUTLINE_FILL_SIMPLE:return et;default:return tt}case i.LINE:return rt;case i.TEXT:return st;case i.LABEL:return at}}const it=[o],ot=[o],ct=[o],ut=[o],lt=[o];function Tt(t){switch(t){case i.MARKER:return it;case i.FILL:return ot;case i.LINE:return ct;case i.TEXT:return ut;case i.LABEL:return lt}}function It(t){switch(t%4){case 0:case 2:return 4;case 1:case 3:return 1}}function gt(t,e){switch(e%4){case 0:case 2:return new Uint32Array(Math.floor(t*e/4));case 1:case 3:return new Uint8Array(t*e)}}function wt(t,e){switch(e%4){case 0:case 2:return new Uint32Array(t);case 1:case 3:return new Uint8Array(t)}}function Pt(t){return t!=null}function Ft(t){return typeof t=="number"}function Bt(t){switch(t){case"butt":return _.BUTT;case"round":return _.ROUND;case"square":return _.SQUARE;default:return A.error(new O("mapview-invalid-type",`Cap type ${t} is not a valid option. Defaulting to round`)),_.ROUND}}function vt(t){switch(t){case"miter":return N.MITER;case"bevel":return N.BEVEL;case"round":return N.ROUND;default:return A.error(new O("mapview-invalid-type",`Join type ${t} is not a valid option. Defaulting to round`)),N.ROUND}}function Gt(t){switch(t){case"opacity":return L.OPACITY;case"color":return L.COLOR;case"rotation":return L.ROTATION;case"size":return L.SIZE;default:return A.error(`Cannot interpret unknown vv: ${t}`),null}}function Ht(t,e,n,r,s,a,c){for(const u in a){const I=a[u].stride,m=It(I),P=a[u].data,F=n[u].data,B=I*s.vertexCount/m,v=I*t/m,G=I*s.vertexFrom/m;for(let h=0;h<B;++h)F[h+v]=P[h+G]}const d=s.indexCount;for(let u=0;u<d;++u)r[u+e]=c[u+s.indexFrom]-s.vertexFrom+t}const $t={[o]:b.STATIC_DRAW};function Yt(t,e){const n=[];for(let r=0;r<5;++r){const s=Tt(r),a={};for(const c of s)a[c]={data:e(r,c)};n.push({data:t(r),buffers:a})}return n}function Lt(t){switch(t){case T.BYTE:case T.UNSIGNED_BYTE:return 1;case T.SHORT:case T.UNSIGNED_SHORT:return 2;case T.FLOAT:case T.INT:case T.UNSIGNED_INT:return 4}}function bt(t){switch(t){case S.UNSIGNED_BYTE:return 1;case S.UNSIGNED_SHORT_4_4_4_4:return 2;case S.FLOAT:return 4;default:return void A.error(new O("webgl-utils",`Unable to handle type ${t}`))}}function zt(t){switch(t){case S.UNSIGNED_BYTE:return Uint8Array;case S.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case S.FLOAT:return Float32Array;default:return void A.error(new O("webgl-utils",`Unable to handle type ${t}`))}}function ft(t){const e={};for(const n in t){const r=t[n];let s=0;e[n]=r.map(a=>{const c=new z(a.name,a.count,a.type,s,0,a.normalized||!1);return s+=a.count*Lt(a.type),c}),e[n].forEach(a=>a.stride=s)}return e}const St=t=>{const e=new Map;for(const n in t)for(const r of t[n])e.set(r.name,r.location);return e},At=t=>{const e={};for(const n in t){const r=t[n];e[n]=r.length?r[0].stride:0}return e},U=new Map,xt=(t,e)=>{if(!U.has(t)){const n=ft(e),r={strides:At(n),bufferLayouts:n,attributes:St(e)};U.set(t,r)}return U.get(t)};function Xt(t){t(i.FILL),t(i.LINE),t(i.MARKER),t(i.TEXT),t(i.LABEL)}const Vt=t=>"path"in t&&ht(t.path),Zt=t=>"url"in t&&t.url||"imageData"in t&&t.imageData,kt=t=>"imageData"in t&&t.imageData&&"contentType"in t&&t.contentType?`data:${t.contentType};base64,${t.imageData}`:"url"in t?t.url:null,C=t=>t.startsWith("data:image/gif"),qt=t=>"url"in t&&t.url&&(t.url.includes(".gif")||C(t.url))||"contentType"in t&&t.contentType==="image/gif"||"imageData"in t&&C(t.imageData),g=t=>t.startsWith("data:image/png"),Kt=t=>"url"in t&&t.url&&(t.url.includes(".png")||g(t.url))||"contentType"in t&&t.contentType==="image/png"||"imageData"in t&&g(t.imageData),Wt=t=>t.type&&t.type.toLowerCase().includes("3d");function jt(t){switch(t.type){case"line":{const e=t;return e.cim.type==="CIMSolidStroke"&&!e.dashTemplate}case"fill":return t.cim.type==="CIMSolidFill";case"esriSFS":return t.style==="esriSFSSolid"||t.style==="esriSFSNull";case"esriSLS":return t.style==="esriSLSSolid"||t.style==="esriSLSNull";default:return!1}}const Jt=t=>t.includes("data:image/svg+xml");function Qt(t){switch("cim"in t?t.cim.type:t.type){case"esriSMS":case"esriPMS":case"CIMPointSymbol":return!1;case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":return _t(t);default:return!0}}function te(t){const e="maxVVSize"in t&&t.maxVVSize,n="width"in t&&t.width||"size"in t&&t.size||0;return e||n}function ee(t){const e=[];for(let n=0;n<t.length;n++)e.push(t.charCodeAt(n));return e}const ht=t=>!!t&&(t=t.trim(),!!(/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4)),_t=t=>{var e,n;return t.type==="fill"&&((n=(e=t==null?void 0:t.cim)==null?void 0:e.markerPlacement)==null?void 0:n.type)==="CIMMarkerPlacementInsidePolygon"};export{Kt as A,_t as B,Jt as D,kt as E,Ct as G,p as I,Pt as J,gt as K,jt as M,Wt as N,D as O,Ft as Q,f as S,Zt as T,te as U,wt as W,It as X,Qt as _,Vt as a,i as b,Ht as c,pt as d,Rt as e,Dt as f,xt as g,Xt as h,Yt as i,Mt as j,Bt as k,E as l,zt as m,yt as n,bt as o,Et as p,M as q,Gt as r,$t as s,vt as t,ee as v,qt as w,w as x};
