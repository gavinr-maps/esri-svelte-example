const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./geometryEngineJSON-BwrklJA_.js","./geometryEngineBase-yFIvKOkM.js","./_commonjsHelpers-DCkdB7M8.js","./json-Wa8cmqdu.js"])))=>i.map(i=>d[i]);
import{_ as V}from"./index-Bh2oEzTI.js";import{d as B,s as _}from"./enums-CmIX1y88.js";const $={color:[128,128,128,1],outlinecolor:[0,0,0,1],backgroundcolor:[128,128,128,1],borderlinecolor:[0,0,0,1],tintcolor:[255,255,255,1]},x={CIMVectorMarker:{scalesymbolsproportionally:!1,respectframe:!0,anchorpointunits:"Relative",offsetx:0,offsety:0,rotateclockwise:!1,rotation:0,size:10,enable:!0,colorlocked:!1},CIMPictureMarker:{scalex:1,texturefilter:"Draft",anchorpointunits:"Relative",offsetx:0,offsety:0,rotateclockwise:!1,rotation:0,size:10,enable:!0,colorlocked:!1},CIMTextSymbol:{angle:0,anglex:0,angley:0,halosize:1,height:10,horizontalalignment:"Left",kerning:!0,letterspacing:0,letterwidth:100,ligatures:!0,linegap:0,offsetx:0,offsety:0,strikethrough:!1,textcase:"Normal",textstring:"",underline:!1,verticalalignment:"Bottom",enable:!0,colorlocked:!1},CIMSolidStroke:{capstyle:"Round",joinstyle:"Round",miterlimit:4,width:4,enable:!0,colorlocked:!1},CIMPictureStroke:{texturefilter:"Draft",capstyle:"Round",joinstyle:"Round",miterlimit:4,width:4,enable:!0,colorlocked:!1},CIMGradientStroke:{capstyle:"Round",joinstyle:"Round",miterlimit:4,width:4,enable:!0,colorlocked:!1},CIMSolidFill:{enable:!0,colorlocked:!1},CIMPictureFill:{offsetx:0,offsety:0,rotation:0,scalex:1,height:10,texturefilter:"Draft",enable:!0,colorlocked:!1},CIMHatchFill:{offsetx:0,offsety:0,rotation:0,separation:4,enable:!0,colorlocked:!1},CIMGeometricEffectAddControlPoints:{angletolerance:120},CIMGeometricEffectArrow:{arrowtype:"OpenEnded",width:5},CIMGeometricEffectBuffer:{size:1},CIMGeometricEffectCut:{begincut:1,endcut:1,middlecut:0,invert:!1},CIMGeometricEffectDashes:{customendingoffset:0,linedashending:"NoConstraint",offsetalongline:0},CIMGeometricEffectDonut:{method:"Mitered",option:"Accurate",width:2},CIMGeometricEffectJog:{angle:225,length:20,position:50},CIMGeometricEffectControlMeasureLine:{rule:"FullGeometry"},CIMGeometricEffectMove:{offsetx:1,offsety:-1},CIMGeometricEffectOffset:{method:"Square",offset:1,option:"Fast"},CIMGeometricEffectRotate:{angle:15},CIMGeometricEffectScale:{xscalefactor:1.15,yscalefactor:1.15},CIMGeometricEffectWave:{amplitude:2,period:3,seed:1,waveform:"Sinus"},CIMMarkerPlacementAlongLine:{customendingoffset:0,endings:"WithHalfGap",offsetalongline:0,placeperpart:!0,angletoline:!0,offset:0},CIMMarkerPlacementAtExtremities:{extremityplacement:"Both",offsetalongline:0,angletoline:!0,offset:0},CIMMarkerPlacementAtRatioPositions:{beginposition:0,endposition:0,flipfirst:!0,angletoline:!0,offset:0},CIMMarkerPlacementInsidePolygon:{gridangle:0,gridtype:"Fixed",offsetx:0,offsety:0,randomness:100,seed:0,shiftoddrows:!1,stepx:16,stepy:16,clipping:"ClipAtBoundary"},CIMMarkerPlacementOnLine:{relativeto:"LineMiddle",startpointoffset:0,angletoline:!0,offset:0},CIMMarkerPlacementOnVertices:{placeperpart:!0,placeoncontrolpoints:!0,placeonendpoints:!0,placeonregularvertices:!0,angletoline:!0,offset:0},CIMMarkerPlacementPolygonCenter:{method:"OnPolygon",offsetx:0,offsety:0,clipatboundary:!1},CIMAnimatedSymbolProperties:{playanimation:!1,reverseanimation:!1,randomizestarttime:!1,randomizestartseed:0,starttimeoffset:0,duration:3,endingduration:3,useendingduration:!1,repeattype:B.Loop,repeatdelay:0,easing:_.Linear},CIMSymbolAnimationSize:{tosize:10},CIMSymbolAnimationScale:{scalefactor:1},CIMSymbolAnimationColor:{tocolor:[255,255,255,1]},CIMSymbolAnimationTransparency:{totransparency:0},CIMSymbolAnimationRotation:{torotation:0},CIMSymbolAnimationOffset:{offsetx:0,offsety:0}};function j(e){return typeof e=="function"}function te(e,t,r,n){return j(e)?e(t,r,n):e}function re(e){return[e.r,e.g,e.b,e.a]}const q=` /-,
`;function G(e){let t=e.length;for(;t--;)if(!q.includes(e.charAt(t)))return!1;return!0}function oe(e,t){const r=[];let n=0,i=-1;do if(i=e.indexOf("[",n),i>=n){if(i>n){const o=e.slice(n,i);r.push([o,null,G(o)])}if(n=i+1,i=e.indexOf("]",n),i>=n){if(i>n){const o=t[e.slice(n,i)];o&&r.push([null,o,!1])}n=i+1}}while(i!==-1);if(n<e.length){const o=e.slice(n);r.push([o,null,G(o)])}return r}function ne(e,t,r,n){let i="",o=null;for(const m of t){const[l,f,u]=m;if(l)u?o=l:(o&&(i+=o,o=null),i+=l);else{let y=f;r!=null&&(y=Q(f,r));const a=e.attributes[y];a&&(o&&(i+=o,o=null),i+=a)}}return H(i,n)}function H(e,t){switch(typeof e!="string"&&(e=String(e)),t){case"LowerCase":return e.toLowerCase();case"Allcaps":return e.toUpperCase();default:return e}}function ie(e,t,r,n,i,o,m=!0){const l=t/i,f=r/o,u=Math.ceil(l/2),y=Math.ceil(f/2);for(let a=0;a<o;a++)for(let c=0;c<i;c++){const d=4*(c+(m?o-a-1:a)*i);let s=0,p=0,h=0,b=0,k=0,S=0,g=0;const w=(a+.5)*f;for(let I=Math.floor(a*f);I<(a+1)*f;I++){const A=Math.abs(w-(I+.5))/y,O=(c+.5)*l,D=A*A;for(let P=Math.floor(c*l);P<(c+1)*l;P++){let M=Math.abs(O-(P+.5))/u;const C=Math.sqrt(D+M*M);C>=-1&&C<=1&&(s=2*C*C*C-3*C*C+1,s>0&&(M=4*(P+I*t),g+=s*e[M+3],h+=s,e[M+3]<255&&(s=s*e[M+3]/250),b+=s*e[M],k+=s*e[M+1],S+=s*e[M+2],p+=s))}}n[d]=b/p,n[d+1]=k/p,n[d+2]=S/p,n[d+3]=g/h}}function W(e){return e?[e[0],e[1],e[2],e[3]/255]:[0,0,0,0]}function le(e){var t;return((t=e.data)==null?void 0:t.symbol)??null}function ae(e){return e.type==="CIMVectorMarker"||e.type==="CIMPictureMarker"||e.type==="CIMBarChartMarker"||e.type==="CIMCharacterMarker"||e.type==="CIMPieChartMarker"||e.type==="CIMStackedBarChartMarker"}function ce(e){return e.type==="CIMGradientStroke"||e.type==="CIMPictureStroke"||e.type==="CIMSolidStroke"}function se(e){return e!=null&&(e.type==="CIMGradientFill"||e.type==="CIMHatchFill"||e.type==="CIMPictureFill"||e.type==="CIMSolidFill"||e.type==="CIMWaterFill")}function J(e){return e!=null&&(e.type==="CIMMarkerPlacementAlongLineRandomSize"||e.type==="CIMMarkerPlacementAlongLineSameSize"||e.type==="CIMMarkerPlacementAlongLineVariableSize"||e.type==="CIMMarkerPlacementAtExtremities"||e.type==="CIMMarkerPlacementAtMeasuredUnits"||e.type==="CIMMarkerPlacementAtRatioPositions"||e.type==="CIMMarkerPlacementOnLine"||e.type==="CIMMarkerPlacementOnVertices")}const fe=(e,t=0)=>e==null||isNaN(e)?t:e,ue=(e,t)=>e??t,me=(e,t)=>e??t,Me=e=>e.tintColor?W(e.tintColor):[255,255,255,1],ye=e=>{if(!e)return!1;for(const t of e)switch(t.type){case"CIMGeometricEffectBuffer":case"CIMGeometricEffectOffset":case"CIMGeometricEffectDonut":return!0}return!1};function Ce(){return V(()=>import("./geometryEngineJSON-BwrklJA_.js").then(e=>e.g),__vite__mapDeps([0,1,2,3]),import.meta.url)}function de(e){if(!e)return"normal";switch(e.toLowerCase()){case"italic":return"italic";case"oblique":return"oblique";default:return"normal"}}function pe(e){if(!e)return"normal";switch(e.toLowerCase()){case"bold":return"bold";case"bolder":return"bolder";case"lighter":return"lighter";default:return"normal"}}function Ie(e){let t="normal",r="normal";if(e){const n=e.toLowerCase();n.includes("italic")?t="italic":n.includes("oblique")&&(t="oblique"),n.includes("bold")?r="bold":n.includes("light")&&(r="lighter")}return{style:t,weight:r}}function he(e){return e.underline?"underline":e.strikethrough?"line-through":"none"}function E(e){if(!e)return null;switch(e.type){case"CIMPolygonSymbol":if(e.symbolLayers)for(const t of e.symbolLayers){const r=E(t);if(r!=null)return r}break;case"CIMTextSymbol":return E(e.symbol);case"CIMSolidFill":return e.color}return null}function v(e){if(e)switch(e.type){case"CIMPolygonSymbol":case"CIMLineSymbol":{const t=e.symbolLayers;if(t)for(const r of t){const n=v(r);if(n!=null)return n}break}case"CIMTextSymbol":return v(e.symbol);case"CIMSolidStroke":return e.color}}function T(e){if(e)switch(e.type){case"CIMPolygonSymbol":case"CIMLineSymbol":if(e.symbolLayers)for(const t of e.symbolLayers){const r=T(t);if(r!==void 0)return r}break;case"CIMTextSymbol":return T(e.symbol);case"CIMSolidStroke":case"CIMGradientStroke":case"CIMPictureStroke":return e.width}}function be(e){switch(e){case"Left":default:return"left";case"Right":return"right";case"Center":case"Justify":return"center"}}function ge(e){switch(e){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function ke(e){return(e?Object.keys(e):[]).map(t=>({name:t,alias:t,type:typeof e[t]=="string"?"esriFieldTypeString":"esriFieldTypeDouble"}))}const Se=e=>e.includes("data:image/svg+xml");function Pe(e){if(!e)return null;switch(e.type){case"CIMPointSymbol":case"CIMTextSymbol":return"esriGeometryPoint";case"CIMLineSymbol":return"esriGeometryPolyline";case"CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}}function L(e){return e&&e.charAt(0).toLowerCase()+e.slice(1)}function we(e,t,r,n,i,o,m=!0){const{infos:l}=o;let f=1,u=0,y=0,a=0,c=1;for(const{absoluteAnchorPoint:p,offsetX:h,offsetY:b,rotation:k,size:S,frameHeight:g,rotateClockWise:w,scaleSymbolsProportionally:I}of l)c=p?1:f,y=R(h,b,u,c,y),a=F(h,b,u,c,a),g&&(I||m)&&(f*=S/g),u=N(k,w,u);const d=R(n,i,u,c,y),s=F(n,i,u,c,a);return{size:e*f,rotation:N(t,r,u),offsetX:d,offsetY:s}}function U(e){if(e==null)return!1;if(Array.isArray(e))return e.every(t=>U(t));switch(typeof e){case"string":return!!e;case"number":return!isNaN(e)}}function X(e,t){if(t==="color"||t==="outlinecolor"||t==="backgroundcolor"||t==="borderlinecolor"||t==="tintcolor")return[...$[t]];const r=x[e];if(!r)throw new Error(`InternalError: default value for type ${e}.`);return r[t]}function Y(e){return e.split(" ").map(t=>Number(t))}function K(e){return typeof e=="string"?Y(e):e}function xe(e){return e!=null&&e.dashTemplate&&(e.dashTemplate=K(e.dashTemplate)),e}function z(e){if(e==null)return"Normal";switch(e.type){case"CIMTextSymbol":return e.textCase??"Normal";case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":{const t=e.symbolLayers;if(!t)return"Normal";for(const r of t)if(r.type==="CIMVectorMarker")return z(r)}break;case"CIMVectorMarker":{const t=e.markerGraphics;if(!t)return"Normal";for(const r of t)if(r.symbol)return z(r.symbol)}}return"Normal"}function Le(e){if(e)switch(e.type){case"CIMTextSymbol":return e.height;case"CIMPointSymbol":{let t=0;if(e.symbolLayers){for(const r of e.symbolLayers)if(r)switch(r.type){case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":case"CIMObjectMarker3D":case"CIMglTFMarker3D":{const n=r.size??x.CIMVectorMarker.size;n>t&&(t=n);break}}}return t}case"CIMLineSymbol":case"CIMPolygonSymbol":{let t=0;if(e.symbolLayers){for(const r of e.symbolLayers)if(r)switch(r.type){case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":{const n=r.width;n!=null&&n>t&&(t=n);break}case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":case"CIMObjectMarker3D":case"CIMglTFMarker3D":if(r.markerPlacement&&J(r.markerPlacement)){const n=r.size??x.CIMVectorMarker.size;n>t&&(t=n)}break;case"CIMPictureFill":{const n=r.height;n!=null&&n>t&&(t=n)}}}return t}}}function Q(e,t){if(t!==null){const r=t.get(e);return r?r.name:e}return e}function Ae(e){return e.map(t=>({...t,propertyName:L(t.propertyName)}))}function Ge(e){const t={};for(const r in e){const n=e[r];t[L(r)]=n}return t}function F(e,t,r,n,i){const o=r*Math.PI/180;if(o){const m=Math.cos(o);return(Math.sin(o)*e+m*t)*n+i}return t*n+i}function R(e,t,r,n,i){const o=r*Math.PI/180;return o?(Math.cos(o)*e-Math.sin(o)*t)*n+i:e*n+i}function N(e,t,r){return t?r-e:r+e}function Ee(e,t,r){const n=r==="Color"||r==="TintColor"||r==="ToColor",i=r==="Rotation"||r==="Angle"||r==="ToRotation";let o=t[L(r)];if(o!=null&&(n?o=[o[0]/255,o[1]/255,o[2]/255,o[3]/255]:i&&(o*=Math.PI/180)),o==null&&(o=X(t.type,r.toLowerCase()),o!=null&&(n?o=[o[0]/255,o[1]/255,o[2]/255,o[3]]:i&&(o*=Math.PI/180))),t.primitiveName!=null){const m=e[t.primitiveName];if(m!=null){const l=m[r];l==null||(typeof l=="string"||typeof l=="number"||Array.isArray(l)?(o=l,o!=null&&(n?o=[o[0]/255,o[1]/255,o[2]/255,o[3]/255]:i&&(o*=Math.PI/180))):(o={valueExpressionInfo:l,defaultValue:o},o!=null&&(n?o={type:"Process",op:"ArcadeColor",value:o}:i&&(o={type:"Process",op:"Divide",left:o,right:180/Math.PI}))))}}if(o==null)throw new Error(`Failed to derive a value or an expression for "${r}".`);return o}export{v as A,xe as B,se as C,X as D,we as E,ge as F,Se as G,Le as H,J as I,Q as J,Ee as K,he as L,ae as M,T as N,U as O,pe as P,z as R,Ce as S,E as T,Ae as U,Pe as V,Ge as W,oe as a,me as b,ne as c,Me as d,W as f,de as g,ue as h,x as i,ye as k,ce as m,te as n,re as o,fe as p,K as q,ie as u,ke as v,Ie as w,be as x,le as y,L as z};
