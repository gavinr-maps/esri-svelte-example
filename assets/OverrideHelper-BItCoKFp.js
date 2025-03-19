import{h as b}from"./Color-VJEMvW-n.js";import{i as M}from"./colorUtils-DaPfwnk3.js";import{c as u}from"./Accessor-BmwT4B0c.js";import{L as C}from"./opacityUtils-Dim20wpZ.js";import{B as I,W as y,U as x,v as k,a as O,c as S,z as h}from"./utils-UPZJIDfz.js";import N from"./callExpressionWithFeature-Dty09cLj.js";import"./colorUtils-Rxh2V3ai.js";import"./mathUtils-Cfq9PL9W.js";import"./vec42-YcqnINSP.js";import"./common-DQOJ18NT.js";import"./vec4f64-o2zAXfmz.js";import"./index-4eY77cms.js";import"./Promise-DfET-uns.js";import"./cast-CsZslgGN.js";import"./JSONSupport-DcrLLGjL.js";import"./Point-Cz2JYYmX.js";import"./writer-DKgfqj4X.js";import"./defaultCIMValues-Bb-CUowV.js";import"./enums-BTM-fOHQ.js";import"./quantizationUtils-DgFbqZi7.js";import"./Extent-g5W9hy0j.js";import"./Polyline-s-JzsQqo.js";const P=m=>{if(!m)return[0,0,0,0];const{r:e,g:r,b:i,a:s}=m;return[e,r,i,255*s]};class a{static findApplicableOverrides(e,r,i){if(e&&r){if(e.primitiveName){let s=!1;for(const t of i)if(t.primitiveName===e.primitiveName){s=!0;break}if(!s)for(const t of r)t.primitiveName===e.primitiveName&&i.push(t)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const s of e.effects)a.findApplicableOverrides(s,r,i);if(e.symbolLayers)for(const s of e.symbolLayers)a.findApplicableOverrides(s,r,i);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":if(e.effects)for(const s of e.effects)a.findApplicableOverrides(s,r,i);if(e.markerPlacement&&a.findApplicableOverrides(e.markerPlacement,r,i),e.type==="CIMVectorMarker"){if(e.markerGraphics)for(const s of e.markerGraphics)a.findApplicableOverrides(s,r,i),a.findApplicableOverrides(s.symbol,r,i)}else e.type==="CIMCharacterMarker"?a.findApplicableOverrides(e.symbol,r,i):e.type==="CIMHatchFill"?a.findApplicableOverrides(e.lineSymbol,r,i):e.type==="CIMPictureMarker"&&a.findApplicableOverrides(e.animatedSymbolProperties,r,i)}}}static findEffectOverrides(e,r){if(!e)return null;if(e.type==="CIMGeometricEffectDashes"&&I(e),!r||!e.primitiveName)return{type:"cim-effect-param",effect:e,overrides:[]};const i=y(e),s=e.primitiveName,t=[];for(const c of r)c.primitiveName===s&&t.push(y(c));return{type:"cim-effect-param",effect:i,overrides:x(t)}}static async resolveSymbolOverrides(e,r,i,s,t,c,o){if(!(e!=null&&e.symbol))return null;let{symbol:l,primitiveOverrides:p}=e;const v=!!p;if(!v&&!s)return l;l=u(l),p=u(p);let d=!0;if(r||(r={attributes:{}},d=!1),v){if(d||(p=p.filter(n=>{var f;return!((f=n.valueExpressionInfo)!=null&&f.expression.includes("$feature"))})),o||(p=p.filter(n=>{var f;return!((f=n.valueExpressionInfo)!=null&&f.expression.includes("$view"))})),p.length>0){const n={spatialReference:i,fields:k(r.attributes),geometryType:t};await a.createRenderExpressions(p,n),a.evaluateOverrides(p,r,t??"esriGeometryPoint",c,o)}a.applyOverrides(l,p)}return s&&a.applyDictionaryTextOverrides(l,r,s,null),l}static async createRenderExpressions(e,r){const i=[];for(const s of e){const t=s.valueExpressionInfo;if(!t||a._expressionToRenderExpression.has(t.expression))continue;const c=C(t.expression,r.spatialReference,r.fields);i.push(c),c.then(o=>a._expressionToRenderExpression.set(t.expression,o))}i.length>0&&await Promise.all(i)}static evaluateOverrides(e,r,i,s,t){const c={$view:{scale:t==null?void 0:t.scale}};for(const o of e){o.value&&typeof o.value=="object"&&M(o.value)&&(o.propertyName==="Color"||o.propertyName==="StrokeColor")&&(o.value=P(o.value));const l=o.valueExpressionInfo;if(!l)continue;const p=a._expressionToRenderExpression.get(l.expression);p&&(o.value=N(p,r,c,i,s))}}static applyDictionaryTextOverrides(e,r,i,s,t="Normal"){if(e!=null&&e.type)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":case"CIMTextSymbol":{const c=e.symbolLayers;if(!c)return;for(const o of c)o&&o.type==="CIMVectorMarker"&&a.applyDictionaryTextOverrides(o,r,i,s,e.type==="CIMTextSymbol"?e.textCase:t)}break;case"CIMVectorMarker":{const c=e.markerGraphics;if(!c)return;for(const o of c)o&&a.applyDictionaryTextOverrides(o,r,i,s)}break;case"CIMMarkerGraphic":{const c=e.textString;if(c&&c.includes("[")){const o=O(c,i);e.textString=S(r,o,s,t)}}}}static applyOverrides(e,r,i,s){if(e.primitiveName){for(const t of r)if(t.primitiveName===e.primitiveName){const c=h(t.propertyName);if(s&&s.push({cim:e,nocapPropertyName:c,value:e[c]}),i){let o=!1;for(const l of i)l.primitiveName===e.primitiveName&&(o=!0);o||i.push(t)}t.value!=null&&(e[c]=t.value)}}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const t of e.effects)a.applyOverrides(t,r,i,s);if(e.symbolLayers)for(const t of e.symbolLayers)a.applyOverrides(t,r,i,s);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(e.effects)for(const t of e.effects)a.applyOverrides(t,r,i,s);if(e.type==="CIMVectorMarker"&&e.markerGraphics)for(const t of e.markerGraphics)a.applyOverrides(t,r,i,s),a.applyOverrides(t.symbol,r,i,s)}}static restoreOverrides(e){for(const r of e)r.cim[r.nocapPropertyName]=r.value}static buildOverrideKey(e){let r="";for(const i of e)i.value!==void 0&&(r+=`${i.primitiveName}${i.propertyName}${JSON.stringify(i.value)}`);return r}static toValue(e,r){if(e==="DashTemplate")return r.split(" ").map(i=>Number(i));if(e==="Color"){const i=new b(r).toRgba();return i[3]*=255,i}return r}}a._expressionToRenderExpression=new Map;export{a as OverrideHelper};
