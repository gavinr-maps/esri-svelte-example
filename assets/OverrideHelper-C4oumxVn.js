import{u as C}from"./Color-DDUWtbqR.js";import{o as I}from"./colorUtils-D5nOabzP.js";import{n as M,c as x,a as y}from"./subclass-BR3PhgZG.js";import{D as O}from"./fieldUtils-CNduWQU9.js";import{D as h,H as b,R as k,F as S,l as g,s as N,v as P}from"./utils-CO7DMJWl.js";import{B as $,H as w,D as G,C as T}from"./quantizationUtils-CIQDbQFJ.js";function D(c,e,r,t,i){if(c==null)return null;const s=c.referencesGeometry()&&i?E(e,t,i):e,a=c.repurposeFeature(s);try{return c.evaluate({...r,$feature:a},c.services)}catch(o){return M.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",o),null}}const u=new Map;function E(c,e,r){const{transform:t,hasZ:i,hasM:s}=r;u.has(e)||u.set(e,R(e));const a=u.get(e)(c.geometry,t,i,s);return{...c,geometry:a}}function R(c){const e={};switch(c){case"esriGeometryPoint":return(r,t,i,s)=>T(t,e,r,i,s);case"esriGeometryPolygon":return(r,t,i,s)=>G(t,e,r,i,s);case"esriGeometryPolyline":return(r,t,i,s)=>w(t,e,r,i,s);case"esriGeometryMultipoint":return(r,t,i,s)=>$(t,e,r,i,s);default:return M.getLogger("esri.views.2d.support.arcadeOnDemand").error(new x("mapview-arcade",`Unable to handle geometryType: ${c}`)),r=>r}}const A=c=>{if(!c)return[0,0,0,0];const{r:e,g:r,b:t,a:i}=c;return[e,r,t,255*i]};class n{static findApplicableOverrides(e,r,t){if(e&&r){if(e.primitiveName){let i=!1;for(const s of t)if(s.primitiveName===e.primitiveName){i=!0;break}if(!i)for(const s of r)s.primitiveName===e.primitiveName&&t.push(s)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const i of e.effects)n.findApplicableOverrides(i,r,t);if(e.symbolLayers)for(const i of e.symbolLayers)n.findApplicableOverrides(i,r,t);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":if(e.effects)for(const i of e.effects)n.findApplicableOverrides(i,r,t);if(e.markerPlacement&&n.findApplicableOverrides(e.markerPlacement,r,t),e.type==="CIMVectorMarker"){if(e.markerGraphics)for(const i of e.markerGraphics)n.findApplicableOverrides(i,r,t),n.findApplicableOverrides(i.symbol,r,t)}else e.type==="CIMCharacterMarker"?n.findApplicableOverrides(e.symbol,r,t):e.type==="CIMHatchFill"?n.findApplicableOverrides(e.lineSymbol,r,t):e.type==="CIMPictureMarker"&&n.findApplicableOverrides(e.animatedSymbolProperties,r,t)}}}static findEffectOverrides(e,r){if(!e)return null;if(e.type==="CIMGeometricEffectDashes"&&h(e),!r||!e.primitiveName)return{type:"cim-effect-param",effect:e,overrides:[]};const t=b(e),i=e.primitiveName,s=[];for(const a of r)a.primitiveName===i&&s.push(b(a));return{type:"cim-effect-param",effect:t,overrides:k(s)}}static async resolveSymbolOverrides(e,r,t,i,s,a,o){if(!(e!=null&&e.symbol))return null;let{symbol:p,primitiveOverrides:l}=e;const v=!!l;if(!v&&!i)return p;p=y(p),l=y(l);let d=!0;if(r||(r={attributes:{}},d=!1),v){if(d||(l=l.filter(f=>{var m;return!((m=f.valueExpressionInfo)!=null&&m.expression.includes("$feature"))})),o||(l=l.filter(f=>{var m;return!((m=f.valueExpressionInfo)!=null&&m.expression.includes("$view"))})),l.length>0){const f={spatialReference:t,fields:S(r.attributes),geometryType:s};await n.createRenderExpressions(l,f),n.evaluateOverrides(l,r,s??"esriGeometryPoint",a,o)}n.applyOverrides(p,l)}return i&&n.applyDictionaryTextOverrides(p,r,i,null),p}static async createRenderExpressions(e,r){const t=[];for(const i of e){const s=i.valueExpressionInfo;if(!s||n._expressionToRenderExpression.has(s.expression))continue;const a=O(s.expression,r.spatialReference,r.fields);t.push(a),a.then(o=>n._expressionToRenderExpression.set(s.expression,o))}t.length>0&&await Promise.all(t)}static evaluateOverrides(e,r,t,i,s){const a={$view:{scale:s==null?void 0:s.scale}};for(const o of e){o.value&&typeof o.value=="object"&&I(o.value)&&(o.propertyName==="Color"||o.propertyName==="StrokeColor")&&(o.value=A(o.value));const p=o.valueExpressionInfo;if(!p)continue;const l=n._expressionToRenderExpression.get(p.expression);l&&(o.value=D(l,r,a,t,i))}}static applyDictionaryTextOverrides(e,r,t,i,s="Normal"){if(e!=null&&e.type)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":case"CIMTextSymbol":{const a=e.symbolLayers;if(!a)return;for(const o of a)o&&o.type==="CIMVectorMarker"&&n.applyDictionaryTextOverrides(o,r,t,i,e.type==="CIMTextSymbol"?e.textCase:s)}break;case"CIMVectorMarker":{const a=e.markerGraphics;if(!a)return;for(const o of a)o&&n.applyDictionaryTextOverrides(o,r,t,i)}break;case"CIMMarkerGraphic":{const a=e.textString;if(a&&a.includes("[")){const o=g(a,t);e.textString=N(r,o,i,s)}}}}static applyOverrides(e,r,t,i){if(e.primitiveName){for(const s of r)if(s.primitiveName===e.primitiveName){const a=P(s.propertyName);if(i&&i.push({cim:e,nocapPropertyName:a,value:e[a]}),t){let o=!1;for(const p of t)p.primitiveName===e.primitiveName&&(o=!0);o||t.push(s)}s.value!=null&&(e[a]=s.value)}}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const s of e.effects)n.applyOverrides(s,r,t,i);if(e.symbolLayers)for(const s of e.symbolLayers)n.applyOverrides(s,r,t,i);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(e.effects)for(const s of e.effects)n.applyOverrides(s,r,t,i);if(e.type==="CIMVectorMarker"&&e.markerGraphics)for(const s of e.markerGraphics)n.applyOverrides(s,r,t,i),n.applyOverrides(s.symbol,r,t,i)}}static restoreOverrides(e){for(const r of e)r.cim[r.nocapPropertyName]=r.value}static buildOverrideKey(e){let r="";for(const t of e)t.value!==void 0&&(r+=`${t.primitiveName}${t.propertyName}${JSON.stringify(t.value)}`);return r}static toValue(e,r){if(e==="DashTemplate")return r.split(" ").map(t=>Number(t));if(e==="Color"){const t=new C(r).toRgba();return t[3]*=255,t}return r}}n._expressionToRenderExpression=new Map;export{D as s,n as y};
