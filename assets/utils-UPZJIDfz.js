const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./geometryEngineJSON-Bvf5zUh7.js","./geometryEngineBase-B0ZyeKAX.js","./_commonjsHelpers-DCkdB7M8.js","./json-Wa8cmqdu.js"])))=>i.map(i=>d[i]);
import{_}from"./index-4eY77cms.js";import{n as L,i as R}from"./defaultCIMValues-Bb-CUowV.js";function q(t){return typeof t=="function"}function Z(t,r,e,o){return q(t)?t(r,e,o):t}function tt(t){return[t.r,t.g,t.b,t.a]}const B=` /-,
`;function x(t){let r=t.length;for(;r--;)if(!B.includes(t.charAt(r)))return!1;return!0}function rt(t,r){const e=[];let o=0,i=-1;do if(i=t.indexOf("[",o),i>=o){if(i>o){const n=t.slice(o,i);e.push([n,null,x(n)])}if(o=i+1,i=t.indexOf("]",o),i>=o){if(i>o){const n=r[t.slice(o,i)];n&&e.push([null,n,!1])}o=i+1}}while(i!==-1);if(o<t.length){const n=t.slice(o);e.push([n,null,x(n)])}return e}function et(t,r,e,o){let i="",n=null;for(const M of r){const[l,u,f]=M;if(l)f?n=l:(n&&(i+=n,n=null),i+=l);else{let m=u;e!=null&&(m=J(u,e));const a=t.attributes[m];a&&(n&&(i+=n,n=null),i+=a)}}return $(i,o)}function $(t,r){switch(typeof t!="string"&&(t=String(t)),r){case"LowerCase":return t.toLowerCase();case"Allcaps":return t.toUpperCase();default:return t}}function nt(t,r,e,o,i,n,M=!0){const l=r/i,u=e/n,f=Math.ceil(l/2),m=Math.ceil(u/2);for(let a=0;a<n;a++)for(let s=0;s<i;s++){const p=4*(s+(M?n-a-1:a)*i);let c=0,I=0,b=0,d=0,S=0,P=0,k=0;const w=(a+.5)*u;for(let h=Math.floor(a*u);h<(a+1)*u;h++){const A=Math.abs(w-(h+.5))/m,O=(s+.5)*l,D=A*A;for(let g=Math.floor(s*l);g<(s+1)*l;g++){let y=Math.abs(O-(g+.5))/f;const C=Math.sqrt(D+y*y);C>=-1&&C<=1&&(c=2*C*C*C-3*C*C+1,c>0&&(y=4*(g+h*r),k+=c*t[y+3],b+=c,t[y+3]<255&&(c=c*t[y+3]/250),d+=c*t[y],S+=c*t[y+1],P+=c*t[y+2],I+=c))}}o[p]=d/I,o[p+1]=S/I,o[p+2]=P/I,o[p+3]=k/b}}function j(t){return t?[t[0],t[1],t[2],t[3]/255]:[0,0,0,0]}function ot(t){var r;return((r=t.data)==null?void 0:r.symbol)??null}function it(t){return t.type==="CIMVectorMarker"||t.type==="CIMPictureMarker"||t.type==="CIMBarChartMarker"||t.type==="CIMCharacterMarker"||t.type==="CIMPieChartMarker"||t.type==="CIMStackedBarChartMarker"}function lt(t){return t.type==="CIMGradientStroke"||t.type==="CIMPictureStroke"||t.type==="CIMSolidStroke"}function at(t){return t!=null&&(t.type==="CIMGradientFill"||t.type==="CIMHatchFill"||t.type==="CIMPictureFill"||t.type==="CIMSolidFill"||t.type==="CIMWaterFill")}function H(t){return t!=null&&(t.type==="CIMMarkerPlacementAlongLineRandomSize"||t.type==="CIMMarkerPlacementAlongLineSameSize"||t.type==="CIMMarkerPlacementAlongLineVariableSize"||t.type==="CIMMarkerPlacementAtExtremities"||t.type==="CIMMarkerPlacementAtMeasuredUnits"||t.type==="CIMMarkerPlacementAtRatioPositions"||t.type==="CIMMarkerPlacementOnLine"||t.type==="CIMMarkerPlacementOnVertices")}const st=(t,r=0)=>t==null||isNaN(t)?r:t,ct=(t,r)=>t??r,ut=(t,r)=>t??r,ft=t=>t.tintColor?j(t.tintColor):[255,255,255,1],Mt=t=>{if(!t)return!1;for(const r of t)switch(r.type){case"CIMGeometricEffectBuffer":case"CIMGeometricEffectOffset":case"CIMGeometricEffectDonut":return!0}return!1};function yt(){return _(()=>import("./geometryEngineJSON-Bvf5zUh7.js").then(t=>t.g),__vite__mapDeps([0,1,2,3]),import.meta.url)}function mt(t){if(!t)return"normal";switch(t.toLowerCase()){case"italic":return"italic";case"oblique":return"oblique";default:return"normal"}}function Ct(t){if(!t)return"normal";switch(t.toLowerCase()){case"bold":return"bold";case"bolder":return"bolder";case"lighter":return"lighter";default:return"normal"}}function pt(t){let r="normal",e="normal";if(t){const o=t.toLowerCase();o.includes("italic")?r="italic":o.includes("oblique")&&(r="oblique"),o.includes("bold")?e="bold":o.includes("light")&&(e="lighter")}return{style:r,weight:e}}function It(t){return t.underline?"underline":t.strikethrough?"line-through":"none"}function N(t){if(!t)return null;switch(t.type){case"CIMPolygonSymbol":if(t.symbolLayers)for(const r of t.symbolLayers){const e=N(r);if(e!=null)return e}break;case"CIMTextSymbol":return N(t.symbol);case"CIMSolidFill":return t.color}return null}function v(t){if(t)switch(t.type){case"CIMPolygonSymbol":case"CIMLineSymbol":{const r=t.symbolLayers;if(r)for(const e of r){const o=v(e);if(o!=null)return o}break}case"CIMTextSymbol":return v(t.symbol);case"CIMSolidStroke":return t.color}}function F(t){if(t)switch(t.type){case"CIMPolygonSymbol":case"CIMLineSymbol":if(t.symbolLayers)for(const r of t.symbolLayers){const e=F(r);if(e!==void 0)return e}break;case"CIMTextSymbol":return F(t.symbol);case"CIMSolidStroke":case"CIMGradientStroke":case"CIMPictureStroke":return t.width}}function ht(t){switch(t){case"Left":default:return"left";case"Right":return"right";case"Center":case"Justify":return"center"}}function bt(t){switch(t){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function dt(t){return(t?Object.keys(t):[]).map(r=>({name:r,alias:r,type:typeof t[r]=="string"?"esriFieldTypeString":"esriFieldTypeDouble"}))}const kt=t=>t.includes("data:image/svg+xml");function St(t){if(!t)return null;switch(t.type){case"CIMPointSymbol":case"CIMTextSymbol":return"esriGeometryPoint";case"CIMLineSymbol":return"esriGeometryPolyline";case"CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}}function T(t){return t&&t.charAt(0).toLowerCase()+t.slice(1)}function Pt(t,r,e,o,i,n,M=!0){const{infos:l}=n;let u=1,f=0,m=0,a=0,s=1;for(const{absoluteAnchorPoint:I,offsetX:b,offsetY:d,rotation:S,size:P,frameHeight:k,rotateClockWise:w,scaleSymbolsProportionally:h}of l)s=I?1:u,m=E(b,d,f,s,m),a=V(b,d,f,s,a),k&&(h||M)&&(u*=P/k),f=z(S,w,f);const p=E(o,i,f,s,m),c=V(o,i,f,s,a);return{size:t*u,rotation:z(r,e,f),offsetX:p,offsetY:c}}function U(t){if(t==null)return!1;if(Array.isArray(t))return t.every(r=>U(r));switch(typeof t){case"string":return!!t;case"number":return!isNaN(t)}}function W(t,r){if(r==="color"||r==="outlinecolor"||r==="backgroundcolor"||r==="borderlinecolor"||r==="tintcolor")return[...R[r]];const e=L[t];if(!e)throw new Error(`InternalError: default value for type ${t}.`);return e[r]}function X(t){return t.split(" ").map(r=>Number(r))}function Y(t){return typeof t=="string"?X(t):t}function gt(t){return t!=null&&t.dashTemplate&&(t.dashTemplate=Y(t.dashTemplate)),t}function G(t){if(t==null)return"Normal";switch(t.type){case"CIMTextSymbol":return t.textCase??"Normal";case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":{const r=t.symbolLayers;if(!r)return"Normal";for(const e of r)if(e.type==="CIMVectorMarker")return G(e)}break;case"CIMVectorMarker":{const r=t.markerGraphics;if(!r)return"Normal";for(const e of r)if(e.symbol)return G(e.symbol)}}return"Normal"}function wt(t){if(t)switch(t.type){case"CIMTextSymbol":return t.height;case"CIMPointSymbol":{let r=0;if(t.symbolLayers){for(const e of t.symbolLayers)if(e)switch(e.type){case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":case"CIMObjectMarker3D":case"CIMglTFMarker3D":{const o=e.size??L.CIMVectorMarker.size;o>r&&(r=o);break}}}return r}case"CIMLineSymbol":case"CIMPolygonSymbol":{let r=0;if(t.symbolLayers){for(const e of t.symbolLayers)if(e)switch(e.type){case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":{const o=e.width;o!=null&&o>r&&(r=o);break}case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":case"CIMObjectMarker3D":case"CIMglTFMarker3D":if(e.markerPlacement&&H(e.markerPlacement)){const o=e.size??L.CIMVectorMarker.size;o>r&&(r=o)}break;case"CIMPictureFill":{const o=e.height;o!=null&&o>r&&(r=o)}}}return r}}}function J(t,r){if(r!==null){const e=r.get(t);return e?e.name:t}return t}function Lt(t){return t.map(r=>({...r,propertyName:T(r.propertyName)}))}function Tt(t){const r={};for(const e in t){const o=t[e];r[T(e)]=o}return r}function V(t,r,e,o,i){const n=e*Math.PI/180;if(n){const M=Math.cos(n);return(Math.sin(n)*t+M*r)*o+i}return r*o+i}function E(t,r,e,o,i){const n=e*Math.PI/180;return n?(Math.cos(n)*t-Math.sin(n)*r)*o+i:t*o+i}function z(t,r,e){return r?e-t:e+t}function At(t,r,e){const o=e==="Color"||e==="TintColor"||e==="ToColor",i=e==="Rotation"||e==="Angle"||e==="ToRotation";let n=r[T(e)];if(n!=null&&(o?n=[n[0]/255,n[1]/255,n[2]/255,n[3]/255]:i&&(n*=Math.PI/180)),n==null&&(n=W(r.type,e.toLowerCase()),n!=null&&(o?n=[n[0]/255,n[1]/255,n[2]/255,n[3]]:i&&(n*=Math.PI/180))),r.primitiveName!=null){const M=t[r.primitiveName];if(M!=null){const l=M[e];l==null||(typeof l=="string"||typeof l=="number"||Array.isArray(l)?(n=l,n!=null&&(o?n=[n[0]/255,n[1]/255,n[2]/255,n[3]/255]:i&&(n*=Math.PI/180))):(n={valueExpressionInfo:l,defaultValue:n},n!=null&&(o?n={type:"Process",op:"ArcadeColor",value:n}:i&&(n={type:"Process",op:"Divide",left:n,right:180/Math.PI}))))}}if(n==null)throw new Error(`Failed to derive a value or an expression for "${e}".`);return n}function xt(t,r){return Math.max(Math.min((t??r)/100,1),0)}export{v as A,gt as B,at as C,W as D,Pt as E,bt as F,kt as G,wt as H,H as I,J,At as K,It as L,it as M,ht as N,U as O,Ct as P,xt as Q,G as R,yt as S,N as T,Lt as U,St as V,Tt as W,rt as a,ut as b,et as c,ft as d,j as f,mt as g,ct as h,Mt as k,lt as m,Z as n,tt as o,st as p,Y as q,nt as u,dt as v,pt as w,F as x,ot as y,T as z};
