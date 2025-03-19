import{h as C}from"./Color-VJEMvW-n.js";import{b as q}from"./Graphic-Dt0LgVGU.js";import{aO as O,B as A}from"./Accessor-BmwT4B0c.js";import{m as P}from"./lengthUtils-_77UiyVF.js";var S,m;function L(e){return e&&e.declaredClass==="esri.renderers.visualVariables.SizeVariable"}function y(e){return e!=null&&!isNaN(e)&&isFinite(e)}function Z(e){return e.valueExpression?S.Expression:e.field&&typeof e.field=="string"?S.Field:S.Unknown}function re(e,n){const a=n||Z(e),t=e.valueUnit||"unknown";return a===S.Unknown?m.Constant:e.stops?m.Stops:e.minSize!=null&&e.maxSize!=null&&e.minDataValue!=null&&e.maxDataValue!=null?m.ClampedLinear:t==="unknown"?e.minSize!=null&&e.minDataValue!=null?e.minSize&&e.minDataValue?m.Proportional:m.Additive:m.Identity:m.RealWorldSize}(function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"})(S||(S={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(m||(m={}));const R=()=>A.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),g=e=>R().warn(`The visualVariable should be an instance of esri.renderers.visualVariables.${e}`),w=()=>R().error("Use of arcade expressions requires an arcade context"),D=new q,z=Math.PI,_=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;function M(e,n,a){const t="visualVariables"in e&&e.visualVariables?e.visualVariables.find(c=>c.type==="color"):e;if(!t)return;if(t.declaredClass!=="esri.renderers.visualVariables.ColorVariable")return void g("ColorVariable");const i=typeof n=="number",r=i?null:n,s=r==null?void 0:r.attributes;let o=i?n:null;const l=t.field,{ipData:d,hasExpression:f}=t.cache;let u=t.cache.compiledFunc;if(!l&&!f){const c=t.stops;return c&&c[0]&&c[0].color}if(typeof o!="number")if(f){if((a==null?void 0:a.arcade)==null)return void w();const c={viewingMode:a.viewingMode,scale:a.scale,spatialReference:a.spatialReference},p=a.arcade.arcadeUtils,V=p.getViewInfo(c),x=p.createExecContext(r,V,a.timeZone);if(!u){const k=p.createSyntaxTree(t.valueExpression);u=p.createFunction(k),t.cache.compiledFunc=u}o=p.executeFunction(u,x)}else s&&(o=s[l]);const v=t.normalizationField,b=s!=null&&v!=null?parseFloat(s[v]):void 0;if(o!=null&&(!v||i||!isNaN(b)&&b!==0)){isNaN(b)||i||(o/=b);const c=E(o,d);if(c){const p=c[0],V=c[1],x=p===V?t.stops[p].color:C.blendColors(t.stops[p].color,t.stops[V].color,c[2],a!=null?a.color:void 0);return new C(x)}}}function N(e,n,a){const t="visualVariables"in e&&e.visualVariables?e.visualVariables.find(c=>c.type==="opacity"):e;if(!t)return;if(t.declaredClass!=="esri.renderers.visualVariables.OpacityVariable")return void g("OpacityVariable");const i=typeof n=="number",r=i?null:n,s=r==null?void 0:r.attributes;let o=i?n:null;const l=t.field,{ipData:d,hasExpression:f}=t.cache;let u=t.cache.compiledFunc;if(!l&&!f){const c=t.stops;return c&&c[0]&&c[0].opacity}if(typeof o!="number")if(f){if((a==null?void 0:a.arcade)==null)return void w();const c={viewingMode:a.viewingMode,scale:a.scale,spatialReference:a.spatialReference},p=a.arcade.arcadeUtils,V=p.getViewInfo(c),x=p.createExecContext(r,V,a.timeZone);if(!u){const k=p.createSyntaxTree(t.valueExpression);u=p.createFunction(k),t.cache.compiledFunc=u}o=p.executeFunction(u,x)}else s&&(o=s[l]);const v=t.normalizationField,b=s!=null&&v!=null?parseFloat(s[v]):void 0;if(o!=null&&(!v||i||!isNaN(b)&&b!==0)){isNaN(b)||i||(o/=b);const c=E(o,d);if(c){const p=c[0],V=c[1];if(p===V)return t.stops[p].opacity;{const x=t.stops[p].opacity;return x+(t.stops[V].opacity-x)*c[2]}}}}function U(e,n,a){const t="visualVariables"in e&&e.visualVariables?e.visualVariables.find(b=>b.type==="rotation"):e;if(!t)return;if(t.declaredClass!=="esri.renderers.visualVariables.RotationVariable")return void g("RotationVariable");const i=t.axis||"heading",r=i==="heading"&&t.rotationType==="arithmetic"?90:0,s=i==="heading"&&t.rotationType==="arithmetic"?-1:1,o=typeof n=="number"?null:n,l=o==null?void 0:o.attributes,d=t.field,{hasExpression:f}=t.cache;let u=t.cache.compiledFunc,v=0;if(!d&&!f)return v;if(f){if((a==null?void 0:a.arcade)==null)return void w();const b={viewingMode:a.viewingMode,scale:a.scale,spatialReference:a.spatialReference},c=a.arcade.arcadeUtils,p=c.getViewInfo(b),V=c.createExecContext(o,p,a.timeZone);if(!u){const x=c.createSyntaxTree(t.valueExpression);u=c.createFunction(x),t.cache.compiledFunc=u}v=c.executeFunction(u,V)}else l&&(v=l[d]||0);return v=typeof v!="number"||isNaN(v)?null:r+s*v,v}function W(e,n,a){const t=typeof n=="number",i=t?null:n,r=i==null?void 0:i.attributes;let s=t?n:null;const{isScaleDriven:o}=e.cache;let l=e.cache.compiledFunc;if(o){const f=a!=null?a.scale:void 0,u=a!=null?a.view:void 0;s=f==null||u==="3d"?j(e):f}else if(!t)switch(e.inputValueType){case S.Expression:{if((a==null?void 0:a.arcade)==null)return void w();const f={viewingMode:a.viewingMode,scale:a.scale,spatialReference:a.spatialReference},u=a.arcade.arcadeUtils,v=u.getViewInfo(f),b=u.createExecContext(i,v,a.timeZone);if(!l){const c=u.createSyntaxTree(e.valueExpression);l=u.createFunction(c),e.cache.compiledFunc=l}s=u.executeFunction(l,b);break}case S.Field:r&&(s=r[e.field]);break;case S.Unknown:s=null}if(!y(s))return null;if(t||!e.normalizationField)return s;const d=r?parseFloat(r[e.normalizationField]):null;return y(d)&&d!==0?s/d:null}function j(e){let n=null,a=null;const t=e.stops;return t?(n=t[0].value,a=t[t.length-1].value):(n=e.minDataValue||0,a=e.maxDataValue||0),(n+a)/2}function F(e,n,a){const t="visualVariables"in e&&e.visualVariables?e.visualVariables.find(r=>r.type==="size"):e;if(!t)return;if(t.declaredClass!=="esri.renderers.visualVariables.SizeVariable")return void g("SizeVariable");const i=I(W(t,n,a),t,n,a,t.cache.ipData);return i==null||isNaN(i)?0:i}function h(e,n,a){return e==null?null:L(e)?F(e,n,a):y(e)?e:null}function T(e,n,a){return y(a)&&e>a?a:y(n)&&e<n?n:e}function B(e,n,a,t){return e+((h(n.minSize,a,t)||n.minDataValue)??0)}function $(e,n,a){const t=e.stops;let i=(t==null?void 0:t.length)&&t[0].size;return i==null&&(i=e.minSize),h(i,n,a)}function G(e,n,a,t){const i=(e-n.minDataValue)/(n.maxDataValue-n.minDataValue),r=h(n.minSize,a,t),s=h(n.maxSize,a,t),o=t!=null?t.shape:void 0;if(e<=n.minDataValue)return r;if(e>=n.maxDataValue)return s;if(r==null||s==null)return null;if(n.scaleBy==="area"&&o){const l=o==="circle",d=l?z*(r/2)**2:r*r,f=d+i*((l?z*(s/2)**2:s*s)-d);return l?2*Math.sqrt(f/z):Math.sqrt(f)}return r+i*(s-r)}function H(e,n,a,t){const i=t!=null?t.shape:void 0,r=e/n.minDataValue,s=h(n.minSize,a,t),o=h(n.maxSize,a,t);let l=null;return l=i==="circle"?2*Math.sqrt(r*(s/2)**2):i==="square"||i==="diamond"||i==="image"?Math.sqrt(r*s**2):r*s,T(l,s,o)}function J(e,n,a,t,i){var l,d,f;const[r,s,o]=E(e,i);if(r===s)return h((l=n.stops)==null?void 0:l[r].size,a,t);{const u=h((d=n.stops)==null?void 0:d[r].size,a,t);return u+(h((f=n.stops)==null?void 0:f[s].size,a,t)-u)*o}}function K(e,n,a,t){const i=((t==null?void 0:t.resolution)??1)*P[n.valueUnit],r=h(n.minSize,a,t),s=h(n.maxSize,a,t),{valueRepresentation:o}=n;let l=null;return l=o==="area"?2*Math.sqrt(e/z)/i:o==="radius"||o==="distance"?2*e/i:e/i,T(l,r,s)}function I(e,n,a,t,i){switch(n.transformationType){case m.Additive:return B(e,n,a,t);case m.Constant:return $(n,a,t);case m.ClampedLinear:return G(e,n,a,t);case m.Proportional:return H(e,n,a,t);case m.Stops:return J(e,n,a,t,i);case m.RealWorldSize:return K(e,n,a,t);case m.Identity:return e;case m.Unknown:return null}}function Q(e,n,a){const{isScaleDriven:t}=e.cache;if(!(t&&a==="3d"||n))return null;const i={scale:n,view:a};let r=h(e.minSize,D,i),s=h(e.maxSize,D,i);if(r!=null||s!=null){if(r>s){const o=s;s=r,r=o}return{minSize:r,maxSize:s}}}function X(e,n,a){if(!e.visualVariables)return;const t=[],i=[],r=[],s=[],o=[];for(const l of e.visualVariables)switch(l.type){case"color":i.push(l);break;case"opacity":r.push(l);break;case"rotation":o.push(l);break;case"size":s.push(l)}return i.forEach(l=>{const d=M(l,n,a);t.push({variable:l,value:d})}),r.forEach(l=>{const d=N(l,n,a);t.push({variable:l,value:d})}),o.forEach(l=>{const d=U(l,n,a);t.push({variable:l,value:d})}),s.forEach(l=>{const d=F(l,n,a);t.push({variable:l,value:d})}),t.filter(l=>l.value!=null)}function E(e,n){if(!n)return;let a=0,t=n.length-1;return n.some((i,r)=>e<i?(t=r,!0):(a=r,!1)),[a,t,(e-n[a])/(n[t]-n[a])]}function Y(e,n,a){const t=["proportional","proportional","proportional"];for(const i of e){const r=i.useSymbolValue?"symbol-value":F(i,n,a);switch(i.axis){case"width":t[0]=r;break;case"depth":t[1]=r;break;case"height":t[2]=r;break;case"width-and-depth":t[0]=r,t[1]=r;break;case"all":case void 0:case null:t[0]=r,t[1]=r,t[2]=r;break;default:O(i.axis)}}return t}const ie=Object.freeze(Object.defineProperty({__proto__:null,getAllSizes:Y,getColor:M,getOpacity:N,getRotationAngle:U,getSize:F,getSizeForValue:I,getSizeFromNumberOrVariable:h,getSizeRangeAtScale:Q,getVisualVariableValues:X,viewScaleRE:_},Symbol.toStringTag,{value:"Module"}));export{Q as N,X as R,Y as T,re as a,N as b,ie as c,L as e,U as h,m as i,M as m,Z as t,_ as v,F as y};
