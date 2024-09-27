import{p as d,H as b,h as i,F as h}from"./jsxFactory-CbAu6VfF.js";import{v as p,F as m}from"./dom-Cv0oa6So.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.2
 */const f={titleGroup:"title-group"},u=":host{display:flex;flex-direction:column}:host([bordered]){box-shadow:inset 0 1px 0 var(--calcite-color-border-1);background-color:var(--calcite-color-foreground-1)}:host([bordered]) section{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-1)}:host([bordered][position=bottom]){box-shadow:inset 0 1px 0 var(--calcite-color-border-1), inset 0 -1px 0 var(--calcite-color-border-1)}:host([bordered]:not([position=bottom])) ::slotted(calcite-tab-nav){margin-block-end:-1px}:host([bordered][scale=s]) section{padding:0.75rem}:host([bordered][scale=m]) section{padding:0.5rem}:host([bordered][scale=l]) section{padding:1rem}:host([position=bottom]){flex-direction:column-reverse}section{display:flex;flex-grow:1;overflow:hidden;border-block-start-width:1px;border-block-start-color:var(--calcite-color-border-1);border-block-start-style:solid}:host([position=bottom]) section{flex-direction:column-reverse;border-block-start-width:0px;border-block-end-width:1px;border-block-end-color:var(--calcite-color-border-1)}:host([position=bottom]:not([bordered])) section{border-block-end-style:solid}@media (forced-colors: active){:host([bordered]) section{border-block-start-width:0px;border-block-end-width:1px}:host([position=bottom][bordered]) section{border-block-start-width:1px;border-block-end-width:0px}}:host([hidden]){display:none}[hidden]{display:none}",g=u,x=d(class extends b{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.defaultSlotChangeHandler=e=>{this.tabs=p(e,"calcite-tab")},this.setDefaultSlotRef=e=>this.slotEl=e,this.layout="inline",this.position="top",this.scale="m",this.bordered=!1,this.titles=[],this.tabs=[]}handleInheritableProps(){this.updateItems()}calciteInternalTabNavSlotChangeHandler(e){e.stopPropagation(),e.detail.length!==this.titles.length&&(this.titles=e.detail)}titlesWatcher(){this.updateAriaSettings(),this.updateItems()}tabsWatcher(){this.updateAriaSettings(),this.updateItems()}async updateAriaSettings(){let e,a;const o=m(this.slotEl,"calcite-tab");if(o.some(t=>t.tab)||this.titles.some(t=>t.tab))e=o.sort((t,r)=>t.tab.localeCompare(r.tab)).map(t=>t.id),a=this.titles.sort((t,r)=>t.tab.localeCompare(r.tab)).map(t=>t.id);else{const t=await Promise.all(o.map(s=>s.getTabIndex())),r=await Promise.all(this.titles.map(s=>s.getTabIndex()));e=t.reduce((s,l,c)=>(s[l]=o[c].id,s),[]),a=r.reduce((s,l,c)=>(s[l]=this.titles[c].id,s),[])}o.forEach(t=>t.updateAriaInfo(e,a)),this.titles.forEach(t=>t.updateAriaInfo(e,a))}updateItems(){const{position:e,scale:a}=this,o=this.el.querySelector("calcite-tab-nav");o&&(o.position=e,o.scale=a),Array.from(this.el.querySelectorAll("calcite-tab")).forEach(t=>{t.parentElement===this.el&&(t.scale=a)}),Array.from(this.el.querySelectorAll("calcite-tab-nav > calcite-tab-title")).forEach(t=>{t.position=e,t.scale=a})}connectedCallback(){this.updateItems()}async componentWillLoad(){this.updateItems()}disconnectedCallback(){}render(){return i(h,{key:"300872682f4f969586b06b6bbfa5cccb5a005e03"},i("slot",{key:"9b8c09c2f93725349a98d13fb0167c88b82ef413",name:f.titleGroup}),i("section",{key:"bf1b19251ca8ab3ba4c3c3fa15995889d71d9355"},i("slot",{key:"e1008e065225b4f0cb1b4fbe2ec91ab761db1144",onSlotchange:this.defaultSlotChangeHandler,ref:this.setDefaultSlotRef})))}get el(){return this}static get watchers(){return{position:["handleInheritableProps"],scale:["handleInheritableProps"],titles:["titlesWatcher"],tabs:["tabsWatcher"]}}static get style(){return g}},[1,"calcite-tabs",{layout:[513],position:[513],scale:[513],bordered:[4],titles:[32],tabs:[32]},[[0,"calciteInternalTabNavSlotChange","calciteInternalTabNavSlotChangeHandler"]],{position:["handleInheritableProps"],scale:["handleInheritableProps"],titles:["titlesWatcher"],tabs:["tabsWatcher"]}]);function y(){if(typeof customElements>"u")return;["calcite-tabs"].forEach(e=>{switch(e){case"calcite-tabs":customElements.get(e)||customElements.define(e,x);break}})}y();export{x as T,y as d};
