import{p,H as m,c as f,h as l}from"./jsxFactory-CJa39Fro.js";import{v as u,z as a}from"./dom-D_AJDzAj.js";import{u as C,I as g}from"./interactive-y84HQRWL.js";import{a as b,s as I,c as S}from"./loadable-DM18hPdE.js";import"./tslib.es6-B3Jf3DVX.js";import"./intl-CChhNOV8.js";import"./date-DlqISzcw.js";import"./jsonMap-0cxwUWs2.js";import"./subclass-BZA_h8Db.js";import"./locale-C9TlLpzi.js";import"./messages-OmQvZhAg.js";import"./Accessor-BLX9ikPh.js";import"./assets-C43MgM-v.js";import"./index-Bh2oEzTI.js";import"./Evented-BHRw9x22.js";import"./Promise-B2Hu02L7.js";import"./reactiveUtils-C5zUhJQJ.js";import"./asyncUtils-CWX51uTe.js";import"./Collection-CEdjem1-.js";import"./shared-B3wH2qpO.js";import"./SimpleObservable-KocWTzVy.js";import"./uuid-fwrPAdZb.js";import"./cast-Bjksrh93.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const y=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.container{display:flex;inline-size:100%;flex-wrap:wrap;gap:0.5rem}::slotted(calcite-chip){flex:none}:host([scale=s]) .container{gap:0.25rem}:host([scale=l]) .container{gap:0.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}",E=y,n=p(class extends m{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteChipGroupSelect=f(this,"calciteChipGroupSelect",6),this.items=[],this.updateItems=e=>{var s,i,o;const t=(s=this.slotRefEl)==null?void 0:s.assignedElements({flatten:!0}).filter(c=>c==null?void 0:c.matches("calcite-chip"));this.items=e?u(e):t,!(((i=this.items)==null?void 0:i.length)<1)&&((o=this.items)==null||o.forEach(c=>{c.interactive=!0,c.scale=this.scale,c.selectionMode=this.selectionMode,c.parentChipGroup=this.el}),this.setSelectedItems(!1))},this.updateSelectedItems=()=>{var e;this.selectedItems=(e=this.items)==null?void 0:e.filter(t=>t.selected)},this.setSelectedItems=(e,t)=>{var s;t&&((s=this.items)==null||s.forEach(i=>{const o=t===i;switch(this.selectionMode){case"multiple":o&&(i.selected=!i.selected);break;case"single":i.selected=o?!i.selected:!1;break;case"single-persist":i.selected=!!o;break}})),this.updateSelectedItems(),e&&this.calciteChipGroupSelect.emit()},this.disabled=!1,this.label=void 0,this.scale="m",this.selectionMode="none",this.selectedItems=[]}onSelectionModeChange(){this.updateItems()}componentDidRender(){C(this)}componentDidLoad(){b(this)}async componentWillLoad(){I(this)}calciteInternalChipKeyEventListener(e){var t;if(e.composedPath().includes(this.el)){const s=(t=this.items)==null?void 0:t.filter(i=>!i.disabled);switch(e.detail.key){case"ArrowRight":a(s,e.detail.target,"next");break;case"ArrowLeft":a(s,e.detail.target,"previous");break;case"Home":a(s,e.detail.target,"first");break;case"End":a(s,e.detail.target,"last");break}}e.stopPropagation()}calciteChipCloseListener(e){var s,i,o,c;const t=e.target;(s=this.items)!=null&&s.includes(t)&&(((i=this.items)==null?void 0:i.indexOf(t))>0?a(this.items,t,"previous"):((o=this.items)==null?void 0:o.indexOf(t))===0?a(this.items,t,"next"):a(this.items,t,"first")),this.items=(c=this.items)==null?void 0:c.filter(h=>h!==t),e.stopPropagation()}calciteChipSelectListener(e){e.composedPath().includes(this.el)&&this.setSelectedItems(!0,e.target),e.stopPropagation()}calciteInternalChipSelectListener(e){e.composedPath().includes(this.el)&&this.setSelectedItems(!1,e.target),e.stopPropagation()}calciteInternalSyncSelectedChips(e){e.composedPath().includes(this.el)&&(this.updateSelectedItems(),this.selectionMode==="single"&&this.selectedItems.length>1&&this.setSelectedItems(!1,e.target)),e.stopPropagation()}async setFocus(){var e;if(await S(this),!this.disabled)return(e=this.selectedItems[0]||this.items[0])==null?void 0:e.setFocus()}render(){const e=this.selectionMode==="none"||this.selectionMode==="multiple"?"group":"radiogroup",{disabled:t}=this;return l(g,{key:"0db5548f1c2854898191b4d6eb8140cae2faf3d8",disabled:t},l("div",{key:"60fc92fea20478ee6fde23d807f17f7f472c1f5a","aria-label":this.label,class:"container",role:e},l("slot",{key:"d43fcf04af0063cd4d00f46e6dd61347eafccb3b",onSlotchange:this.updateItems,ref:s=>this.slotRefEl=s})))}get el(){return this}static get watchers(){return{selectionMode:["onSelectionModeChange"]}}static get style(){return E}},[1,"calcite-chip-group",{disabled:[516],label:[1],scale:[513],selectionMode:[513,"selection-mode"],selectedItems:[1040],setFocus:[64]},[[0,"calciteInternalChipKeyEvent","calciteInternalChipKeyEventListener"],[0,"calciteChipClose","calciteChipCloseListener"],[0,"calciteChipSelect","calciteChipSelectListener"],[0,"calciteInternalChipSelect","calciteInternalChipSelectListener"],[0,"calciteInternalSyncSelectedChips","calciteInternalSyncSelectedChips"]],{selectionMode:["onSelectionModeChange"]}]);function r(){if(typeof customElements>"u")return;["calcite-chip-group"].forEach(e=>{switch(e){case"calcite-chip-group":customElements.get(e)||customElements.define(e,n);break}})}r();const V=n,X=r;export{V as CalciteChipGroup,X as defineCustomElement};
