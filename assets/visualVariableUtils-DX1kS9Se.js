import{l as C}from"./Color-BCS62Hs5.js";import{d as k}from"./Graphic-DsxsIjhH.js";import{n as T}from"./compilerUtils-Dw3R0f-Z.js";import{n as U}from"./subclass-BZA_h8Db.js";import{m as q}from"./lengthUtils-DL1-FDQQ.js";import{e as I,l as g,i as x,n as F}from"./sizeVariableUtils-Cmcuvw-4.js";import"./colorUtils-0bJDPow9.js";import"./mathUtils-C4_ghTv4.js";import"./tslib.es6-B3Jf3DVX.js";import"./geometry-D964gYQX.js";import"./Extent-Bf3YTe7m.js";import"./Point-Cg0-ChZE.js";import"./Accessor-BLX9ikPh.js";import"./cast-Bjksrh93.js";import"./writer-DNAwXnhG.js";import"./assets-C43MgM-v.js";import"./index-Bh2oEzTI.js";import"./jsonMap-0cxwUWs2.js";import"./Polyline-D9YkgmM_.js";import"./PopupTemplate-BHMhS05j.js";import"./Clonable-D3rtuBWg.js";import"./Collection-CEdjem1-.js";import"./Evented-BHRw9x22.js";import"./shared-B3wH2qpO.js";import"./SimpleObservable-KocWTzVy.js";import"./fieldUtils-tmQlKvWo.js";import"./intl-CChhNOV8.js";import"./date-DlqISzcw.js";import"./locale-C9TlLpzi.js";import"./messages-OmQvZhAg.js";import"./enumeration-Ba5njXdz.js";import"./ActionToggle-iT4slXc7.js";import"./Identifiable-B1UbsKNt.js";import"./symbols-CNimns--.js";import"./TextSymbol-D8QO_KUV.js";import"./screenUtils-_ZIvrt5o.js";import"./materialUtils-DarhapKC.js";import"./opacityUtils-C68Tlu6_.js";import"./vec3f64-BLpZdpfb.js";import"./aaBoundingBox-BE7cC1jD.js";import"./persistableUrlUtils-fa1mAujs.js";import"./collectionUtils-D_lHIu88.js";import"./Portal-C10FKnaA.js";import"./Loadable-BabW5Xcc.js";import"./Promise-B2Hu02L7.js";import"./reactiveUtils-C5zUhJQJ.js";import"./asyncUtils-CWX51uTe.js";import"./jsonUtils-CEfjT-BK.js";const M=()=>U.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),z=r=>M().warn(`The visualVariable should be an instance of esri.renderers.visualVariables.${r}`),S=()=>M().error("Use of arcade expressions requires an arcade context"),D=new k,y=Math.PI,We=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;function A(r,a,t){const e="visualVariables"in r&&r.visualVariables?r.visualVariables.find(c=>c.type==="color"):r;if(!e)return;if(e.declaredClass!=="esri.renderers.visualVariables.ColorVariable")return void z("ColorVariable");const n=typeof a=="number",i=n?null:a,s=i==null?void 0:i.attributes;let l=n?a:null;const o=e.field,{ipData:p,hasExpression:f}=e.cache;let u=e.cache.compiledFunc;if(!o&&!f){const c=e.stops;return c&&c[0]&&c[0].color}if(typeof l!="number")if(f){if((t==null?void 0:t.arcade)==null)return void S();const c={viewingMode:t.viewingMode,scale:t.scale,spatialReference:t.spatialReference},m=t.arcade.arcadeUtils,h=m.getViewInfo(c),V=m.createExecContext(i,h,t.timeZone);if(!u){const w=m.createSyntaxTree(e.valueExpression);u=m.createFunction(w),e.cache.compiledFunc=u}l=m.executeFunction(u,V)}else s&&(l=s[o]);const d=e.normalizationField,v=s!=null&&d!=null?parseFloat(s[d]):void 0;if(l!=null&&(!d||n||!isNaN(v)&&v!==0)){isNaN(v)||n||(l/=v);const c=R(l,p);if(c){const m=c[0],h=c[1],V=m===h?e.stops[m].color:C.blendColors(e.stops[m].color,e.stops[h].color,c[2],t!=null?t.color:void 0);return new C(V)}}}function O(r,a,t){const e="visualVariables"in r&&r.visualVariables?r.visualVariables.find(c=>c.type==="opacity"):r;if(!e)return;if(e.declaredClass!=="esri.renderers.visualVariables.OpacityVariable")return void z("OpacityVariable");const n=typeof a=="number",i=n?null:a,s=i==null?void 0:i.attributes;let l=n?a:null;const o=e.field,{ipData:p,hasExpression:f}=e.cache;let u=e.cache.compiledFunc;if(!o&&!f){const c=e.stops;return c&&c[0]&&c[0].opacity}if(typeof l!="number")if(f){if((t==null?void 0:t.arcade)==null)return void S();const c={viewingMode:t.viewingMode,scale:t.scale,spatialReference:t.spatialReference},m=t.arcade.arcadeUtils,h=m.getViewInfo(c),V=m.createExecContext(i,h,t.timeZone);if(!u){const w=m.createSyntaxTree(e.valueExpression);u=m.createFunction(w),e.cache.compiledFunc=u}l=m.executeFunction(u,V)}else s&&(l=s[o]);const d=e.normalizationField,v=s!=null&&d!=null?parseFloat(s[d]):void 0;if(l!=null&&(!d||n||!isNaN(v)&&v!==0)){isNaN(v)||n||(l/=v);const c=R(l,p);if(c){const m=c[0],h=c[1];if(m===h)return e.stops[m].opacity;{const V=e.stops[m].opacity;return V+(e.stops[h].opacity-V)*c[2]}}}}function Z(r,a,t){const e="visualVariables"in r&&r.visualVariables?r.visualVariables.find(v=>v.type==="rotation"):r;if(!e)return;if(e.declaredClass!=="esri.renderers.visualVariables.RotationVariable")return void z("RotationVariable");const n=e.axis||"heading",i=n==="heading"&&e.rotationType==="arithmetic"?90:0,s=n==="heading"&&e.rotationType==="arithmetic"?-1:1,l=typeof a=="number"?null:a,o=l==null?void 0:l.attributes,p=e.field,{hasExpression:f}=e.cache;let u=e.cache.compiledFunc,d=0;if(!p&&!f)return d;if(f){if((t==null?void 0:t.arcade)==null)return void S();const v={viewingMode:t.viewingMode,scale:t.scale,spatialReference:t.spatialReference},c=t.arcade.arcadeUtils,m=c.getViewInfo(v),h=c.createExecContext(l,m,t.timeZone);if(!u){const V=c.createSyntaxTree(e.valueExpression);u=c.createFunction(V),e.cache.compiledFunc=u}d=c.executeFunction(u,h)}else o&&(d=o[p]||0);return d=typeof d!="number"||isNaN(d)?null:i+s*d,d}function L(r,a,t){const e=typeof a=="number",n=e?null:a,i=n==null?void 0:n.attributes;let s=e?a:null;const{isScaleDriven:l}=r.cache;let o=r.cache.compiledFunc;if(l){const f=t!=null?t.scale:void 0,u=t!=null?t.view:void 0;s=f==null||u==="3d"?P(r):f}else if(!e)switch(r.inputValueType){case F.Expression:{if((t==null?void 0:t.arcade)==null)return void S();const f={viewingMode:t.viewingMode,scale:t.scale,spatialReference:t.spatialReference},u=t.arcade.arcadeUtils,d=u.getViewInfo(f),v=u.createExecContext(n,d,t.timeZone);if(!o){const c=u.createSyntaxTree(r.valueExpression);o=u.createFunction(c),r.cache.compiledFunc=o}s=u.executeFunction(o,v);break}case F.Field:i&&(s=i[r.field]);break;case F.Unknown:s=null}if(!g(s))return null;if(e||!r.normalizationField)return s;const p=i?parseFloat(i[r.normalizationField]):null;return g(p)&&p!==0?s/p:null}function P(r){let a=null,t=null;const e=r.stops;return e?(a=e[0].value,t=e[e.length-1].value):(a=r.minDataValue||0,t=r.maxDataValue||0),(a+t)/2}function E(r,a,t){const e="visualVariables"in r&&r.visualVariables?r.visualVariables.find(i=>i.type==="size"):r;if(!e)return;if(e.declaredClass!=="esri.renderers.visualVariables.SizeVariable")return void z("SizeVariable");const n=J(L(e,a,t),e,a,t,e.cache.ipData);return n==null||isNaN(n)?0:n}function b(r,a,t){return r==null?null:I(r)?E(r,a,t):g(r)?r:null}function N(r,a,t){return g(t)&&r>t?t:g(a)&&r<a?a:r}function B(r,a,t,e){return r+((b(a.minSize,t,e)||a.minDataValue)??0)}function W(r,a,t){const e=r.stops;let n=(e==null?void 0:e.length)&&e[0].size;return n==null&&(n=r.minSize),b(n,a,t)}function $(r,a,t,e){const n=(r-a.minDataValue)/(a.maxDataValue-a.minDataValue),i=b(a.minSize,t,e),s=b(a.maxSize,t,e),l=e!=null?e.shape:void 0;if(r<=a.minDataValue)return i;if(r>=a.maxDataValue)return s;if(i==null||s==null)return null;if(a.scaleBy==="area"&&l){const o=l==="circle",p=o?y*(i/2)**2:i*i,f=p+n*((o?y*(s/2)**2:s*s)-p);return o?2*Math.sqrt(f/y):Math.sqrt(f)}return i+n*(s-i)}function j(r,a,t,e){const n=e!=null?e.shape:void 0,i=r/a.minDataValue,s=b(a.minSize,t,e),l=b(a.maxSize,t,e);let o=null;return o=n==="circle"?2*Math.sqrt(i*(s/2)**2):n==="square"||n==="diamond"||n==="image"?Math.sqrt(i*s**2):i*s,N(o,s,l)}function G(r,a,t,e,n){var o,p,f;const[i,s,l]=R(r,n);if(i===s)return b((o=a.stops)==null?void 0:o[i].size,t,e);{const u=b((p=a.stops)==null?void 0:p[i].size,t,e);return u+(b((f=a.stops)==null?void 0:f[s].size,t,e)-u)*l}}function H(r,a,t,e){const n=((e==null?void 0:e.resolution)??1)*q[a.valueUnit],i=b(a.minSize,t,e),s=b(a.maxSize,t,e),{valueRepresentation:l}=a;let o=null;return o=l==="area"?2*Math.sqrt(r/y)/n:l==="radius"||l==="distance"?2*r/n:r/n,N(o,i,s)}function J(r,a,t,e,n){switch(a.transformationType){case x.Additive:return B(r,a,t,e);case x.Constant:return W(a,t,e);case x.ClampedLinear:return $(r,a,t,e);case x.Proportional:return j(r,a,t,e);case x.Stops:return G(r,a,t,e,n);case x.RealWorldSize:return H(r,a,t,e);case x.Identity:return r;case x.Unknown:return null}}function $e(r,a,t){const{isScaleDriven:e}=r.cache;if(!(e&&t==="3d"||a))return null;const n={scale:a,view:t};let i=b(r.minSize,D,n),s=b(r.maxSize,D,n);if(i!=null||s!=null){if(i>s){const l=s;s=i,i=l}return{minSize:i,maxSize:s}}}function je(r,a,t){if(!r.visualVariables)return;const e=[],n=[],i=[],s=[],l=[];for(const o of r.visualVariables)switch(o.type){case"color":n.push(o);break;case"opacity":i.push(o);break;case"rotation":l.push(o);break;case"size":s.push(o)}return n.forEach(o=>{const p=A(o,a,t);e.push({variable:o,value:p})}),i.forEach(o=>{const p=O(o,a,t);e.push({variable:o,value:p})}),l.forEach(o=>{const p=Z(o,a,t);e.push({variable:o,value:p})}),s.forEach(o=>{const p=E(o,a,t);e.push({variable:o,value:p})}),e.filter(o=>o.value!=null)}function R(r,a){if(!a)return;let t=0,e=a.length-1;return a.some((n,i)=>r<n?(e=i,!0):(t=i,!1)),[t,e,(r-a[t])/(a[e]-a[t])]}function Ge(r,a,t){const e=["proportional","proportional","proportional"];for(const n of r){const i=n.useSymbolValue?"symbol-value":E(n,a,t);switch(n.axis){case"width":e[0]=i;break;case"depth":e[1]=i;break;case"height":e[2]=i;break;case"width-and-depth":e[0]=i,e[1]=i;break;case"all":case void 0:case null:e[0]=i,e[1]=i,e[2]=i;break;default:T(n.axis)}}return e}export{Ge as getAllSizes,A as getColor,O as getOpacity,Z as getRotationAngle,E as getSize,J as getSizeForValue,b as getSizeFromNumberOrVariable,$e as getSizeRangeAtScale,je as getVisualVariableValues,We as viewScaleRE};