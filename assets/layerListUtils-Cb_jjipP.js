import{r as a}from"./tslib.es6-B3Jf3DVX.js";import{m as o,a as y}from"./subclass-BZA_h8Db.js";import{p as f}from"./ActionToggle-iT4slXc7.js";var u;let s=u=class extends f{constructor(i){super(i),this.displayValueEnabled=!1,this.max=1,this.min=0,this.step=.1,this.type="slider",this.value=null}clone(){return new u({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,displayValueEnabled:this.displayValueEnabled,max:this.max,min:this.min,step:this.step,value:this.value})}};a([o()],s.prototype,"displayValueEnabled",void 0),a([o()],s.prototype,"max",void 0),a([o()],s.prototype,"min",void 0),a([o()],s.prototype,"step",void 0),a([o()],s.prototype,"value",void 0),s=u=a([y("esri.support.actions.ActionSlider")],s);const V=s,c={hide:"hide",hideChildren:"hide-children"},q=10,w=2;function E({exclusive:i,visible:e,visibilityAppearance:t}){const r=t==="checkbox";return e?i?"circle-f":r?"check-square-f":"view-visible":i?"circle":r?"square":"view-hide"}function A({connectionStatus:i,publishing:e}){return i?i==="connected"?"beacon":"offline":e?"square":"bullet-point"}function k(i){return(i==null?void 0:i.listMode)===c.hideChildren}function h(i){return(i==null?void 0:i.listMode)??void 0}function b(i){return i!=null&&"minScale"in i&&i.minScale!=null?i.minScale:void 0}function v(i){return i!=null&&"maxScale"in i&&i.maxScale!=null?i.maxScale:void 0}function C(i){if(!i)return"inherited";const e=S(d(i)?i.layer:i);return e!=null?e?"independent":"inherited":"visibilityMode"in i&&i.visibilityMode!=null?i.visibilityMode:"independent"}function m(i){if(i&&(!("type"in i)||i.type!=="wmts"))return"sublayers"in i?"sublayers":"layers"in i?"layers":void 0}function D(i){const e=(i!=null&&i.layer&&d(i.layer)?i.layer.layer:void 0)??(i==null?void 0:i.layer);return!!e&&e.type!=="catalog"&&(N(e)??!0)}function L(i){return h(i)!==c.hide}function O(i,e){if(!i||e==null||isNaN(e))return!1;const t=b(i),r=v(i),l=t!=null&&!isNaN(t)&&t>0&&e>t,n=r!=null&&!isNaN(r)&&r>0&&e<r;return l||n}function x(i,e){i==null||i.sort((t,r)=>{const l="uid"in t?e.indexOf(t.uid):-1,n="uid"in r?e.indexOf(r.uid):-1;return l>n?-1:l<n?1:0})}function j(i,e){const t=i==null?void 0:i.layer;if(!t)return;const r=m(t);if(!r)return;let l;r==="layers"&&"layers"in t?l=t.layers:r==="sublayers"&&"sublayers"in t&&(l=t.sublayers),x(l,e)}function z(i){const e=i==null?void 0:i.layer;return e&&"layers"in e?e.layers:null}function d(i){return i!=null&&"layer"in i&&i.layer!=null}function S(i){const e=p(i);return e!=null&&"supportsSublayerVisibility"in e?e.supportsSublayerVisibility:void 0}function N(i){const e=p(i);return e!=null&&"supportsDynamicLayers"in e?e.supportsDynamicLayers:void 0}function p(i){return i&&"capabilities"in i&&i.capabilities!=null&&"exportMap"in i.capabilities?i.capabilities.exportMap:void 0}function B(i){return i==null?void 0:i["data-item"]}function F(i){return i==null?void 0:i.getAttribute("data-layer-type")}function G({children:i,error:e,incompatible:t}){return!!(i!=null&&i.filter(r=>!r.hidden).length)&&!e&&!t}function H(i){for(const e of i)for(const t of e)if(t.type==="button"||t.type==="toggle")return t}export{B as M,G as N,V as a,C as b,j as c,D as d,w as e,O as f,F as g,z as h,q as i,k as l,x as p,H as q,A as r,m as s,E as t,h as u,d as v,L as y};