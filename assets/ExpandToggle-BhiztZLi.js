import{n as y}from"./ref-D9wHsL_T.js";import{E as H,x as C}from"./index-4eY77cms.js";import{b as W}from"./dom-DEluURzl.js";import{n as h}from"./index-Cz6Ao6Wl.js";import{e as w}from"./index-DK5B8inx.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const L=2,d=t=>t.reduce((e,o)=>e+o,0)/t.length,B=t=>{const e=t.filter(n=>n.slot!==h.menuActions),o=e==null?void 0:e.length;return{actionWidth:o?d(e.map(n=>n.clientWidth||0)):0,actionHeight:o?d(e.map(n=>n.clientHeight||0)):0}},q=({width:t,actionWidth:e,layout:o,height:n,actionHeight:c,groupCount:i})=>{const l=o==="horizontal"?t:n,r=o==="horizontal"?e:c;return Math.floor((l-i*L)/r)},D=({layout:t,actionCount:e,actionWidth:o,width:n,actionHeight:c,height:i,groupCount:l})=>Math.max(e-q({width:n,actionWidth:o,layout:t,height:i,actionHeight:c,groupCount:l}),0),f=t=>Array.from(t.querySelectorAll("calcite-action")).filter(e=>e.closest("calcite-action-menu")?e.slot===w.trigger:!0),I=({actionGroups:t,expanded:e,overflowCount:o})=>{let n=o;t.reverse().forEach(c=>{let i=0;const l=f(c).reverse();l.forEach(r=>{r.slot===h.menuActions&&(r.removeAttribute("slot"),r.textEnabled=e)}),n>0&&l.some(r=>(l.filter(s=>!s.slot).length>1&&l.length>2&&!r.closest("calcite-action-menu")&&(r.textEnabled=!0,r.setAttribute("slot",h.menuActions),i++,i>1&&n--),n<1)),c.manager.component.requestUpdate()})},m={chevronsLeft:"chevrons-left",chevronsRight:"chevrons-right"};function S(t,e){var o;return t||((o=e.closest("calcite-shell-panel"))==null?void 0:o.position)||"start"}function N({el:t,expanded:e}){f(t).filter(o=>o.slot!==h.menuActions).forEach(o=>o.textEnabled=e),t.querySelectorAll("calcite-action-group, calcite-action-menu").forEach(o=>o.expanded=e)}const k=({tooltip:t,referenceElement:e,expanded:o,ref:n})=>(t&&(t.referenceElement=!o&&e?e:null),n&&n(e),e),O=({expanded:t,expandText:e,collapseText:o,expandLabel:n,collapseLabel:c,toggle:i,el:l,position:r,tooltip:s,ref:g,scale:x})=>{const E=W(l)==="rtl",u=t?o:e,v=t?c:n,a=[m.chevronsLeft,m.chevronsRight];E&&a.reverse();const p=S(r,l)==="end",$=p?a[1]:a[0],b=p?a[0]:a[1];return C`<calcite-action .icon=${t?$:b} id=expand-toggle .label=${v} @click=${i} .scale=${x} .text=${u} .textEnabled=${t} title=${(!t&&!s?u:null)??H} ${y(A=>k({tooltip:s,referenceElement:A,expanded:t,ref:g}))}></calcite-action>`};export{f as A,N as B,B as D,O as G,D as H,I as k};
