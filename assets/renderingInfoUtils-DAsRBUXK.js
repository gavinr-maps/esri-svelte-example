import{l as y}from"./Color-BCS62Hs5.js";import{getVisualVariableValues as b}from"./visualVariableUtils-DX1kS9Se.js";function c(o,t){if(!o||o.symbol)return null;const e=t==null?void 0:t.renderer;return o&&e!=null&&e.getObservationRenderer?e.getObservationRenderer(o):e}function f(o,t){if(o.symbol!=null)return o.symbol;const e=c(o,t);return e!=null&&e.type!=="dot-density"?e.getSymbol(o,t):null}function g(o,t){const e=c(o,t),u=f(o,t);if(u==null)return null;const n={renderer:e,symbol:u};if(e==null||!("visualVariables"in e)||!e.visualVariables)return n;const p=b(e,o,t)??[],r=["proportional","proportional","proportional"];for(const{variable:i,value:l}of p)switch(i.type){case"color":n.color=l.toRgba();break;case"size":if(i.target==="outline")n.outlineSize=l;else{const s=i.axis,a=i.useSymbolValue?"symbol-value":l;switch(s){case"width":r[0]=a;break;case"depth":r[1]=a;break;case"height":r[2]=a;break;case"width-and-depth":r[0]=r[1]=a;break;default:r[0]=r[1]=r[2]=a}}break;case"opacity":n.opacity=l;break;case"rotation":switch(i.axis){case"tilt":n.tilt=l;break;case"roll":n.roll=l;break;default:n.heading=l}}return r[0]==="proportional"&&r[1]==="proportional"&&r[2]==="proportional"||(n.size=r),n}async function d(o,t){if(o.symbol!=null)return o.symbol;const e=c(o,t);return e!=null?e.getSymbolAsync(o,t):null}async function v(o,t){const e=c(o,t),u=await d(o,t);if(!u)return null;const n={renderer:e,symbol:u};if(!e||!("visualVariables"in e)||!e.visualVariables)return n;const p=b(e,o,t)??[],r=["proportional","proportional","proportional"];for(const{variable:i,value:l}of p)if(i.type==="color")n.color=y.toUnitRGBA(l);else if(i.type==="size")if(i.target==="outline")n.outlineSize=l;else{const s=i.axis,a=i.useSymbolValue?"symbol-value":l;s==="width"?r[0]=a:s==="depth"?r[1]=a:s==="height"?r[2]=a:r[0]=r[1]=s==="width-and-depth"?a:r[2]=a}else i.type==="opacity"?n.opacity=l:i.type==="rotation"&&i.axis==="tilt"?n.tilt=l:i.type==="rotation"&&i.axis==="roll"?n.roll=l:i.type==="rotation"&&(n.heading=l);return(isFinite(r[0])||isFinite(r[1])||isFinite(r[2]))&&(n.size=r),n}function k(o,t=0){const e=o[t];return typeof e=="number"&&isFinite(e)?e:null}function V(o){for(let t=0;t<3;t++){const e=o[t];if(typeof e=="number")return isFinite(e)?e:0}return 0}export{k as a,g as i,v as l,V as s};
