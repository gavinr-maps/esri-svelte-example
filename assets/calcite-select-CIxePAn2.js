import{p as h,H as p,c as m,h as a,a as u}from"./jsxFactory-CJa39Fro.js";import{f,t as v}from"./dom-D_AJDzAj.js";import{c as b,d as g,a as E,H as C}from"./form-BZPQ5PUM.js";import{u as w,I as x}from"./interactive-y84HQRWL.js";import{c as y,d as I,g as S}from"./label-DEe8AW1C.js";import{s as k,a as N,c as z}from"./loadable-DM18hPdE.js";import{c as O}from"./observers-D2xgmA06.js";import{g as T}from"./component-6CIDVndn.js";import{V as A}from"./Validation-Bz9yoU6e.js";import{d as F}from"./icon-BQO9J86c.js";import{d as L}from"./input-message-CWvsvdFk.js";import"./tslib.es6-B3Jf3DVX.js";import"./intl-CChhNOV8.js";import"./date-DlqISzcw.js";import"./jsonMap-0cxwUWs2.js";import"./subclass-BZA_h8Db.js";import"./locale-C9TlLpzi.js";import"./messages-OmQvZhAg.js";import"./Accessor-BLX9ikPh.js";import"./assets-C43MgM-v.js";import"./index-Bh2oEzTI.js";import"./Evented-BHRw9x22.js";import"./Promise-B2Hu02L7.js";import"./reactiveUtils-C5zUhJQJ.js";import"./asyncUtils-CWX51uTe.js";import"./Collection-CEdjem1-.js";import"./shared-B3wH2qpO.js";import"./SimpleObservable-KocWTzVy.js";import"./uuid-fwrPAdZb.js";import"./cast-Bjksrh93.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const o={icon:"icon",iconContainer:"icon-container",select:"select",wrapper:"wrapper"},c={validationMessage:"selectValidationMessage"},M=`:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column}.wrapper{position:relative;display:flex;align-items:stretch;inline-size:var(--select-width)}.wrapper:focus-within .icon,.wrapper:active .icon,.wrapper:hover .icon{color:var(--calcite-color-text-1)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([scale=s]){--calcite-select-font-size:var(--calcite-font-size--2);--calcite-select-spacing-inline:0.5rem 2rem}:host([scale=s]) .wrapper{block-size:1.5rem}:host([scale=s]) .icon-container{padding-inline:0.5rem}:host([scale=m]){--calcite-select-font-size:var(--calcite-font-size--1);--calcite-select-spacing-inline:0.75rem 2.5rem}:host([scale=m]) .wrapper{block-size:2rem}:host([scale=m]) .icon-container{padding-inline:0.75rem}:host([scale=l]){--calcite-select-font-size:var(--calcite-font-size-0);--calcite-select-spacing-inline:1rem 3rem}:host([scale=l]) .wrapper{block-size:44px}:host([scale=l]) .icon-container{padding-inline:1rem}:host([width=auto]){inline-size:auto}:host([width=half]){inline-size:50%}:host([width=full]){inline-size:100%}.select{margin:0px;box-sizing:border-box;inline-size:100%;cursor:pointer;appearance:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:0px;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);font-family:inherit;color:var(--calcite-color-text-2);outline-color:transparent;font-size:var(--calcite-select-font-size);padding-inline:var(--calcite-select-spacing-inline);border-inline-end-width:0px}.select:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}select:disabled{border-color:var(--calcite-color-border-input);--tw-bg-opacity:1}.icon-container{pointer-events:none;position:absolute;inset-block:0px;display:flex;align-items:center;border-width:0px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:transparent;color:var(--calcite-color-text-2);inset-inline-end:0px;border-inline-width:0px 1px}.icon-container .icon{color:var(--calcite-color-text-3)}:host([status=invalid]) select,:host([status=invalid]) .icon-container{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) select:focus,:host([status=invalid]) .icon-container:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.select:focus~.icon-container{border-color:transparent}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}`,H=M;function l(n){return n.tagName==="CALCITE-OPTION"}function q(n){return n.tagName==="CALCITE-OPTION-GROUP"}const r=h(class extends p{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteSelectChange=m(this,"calciteSelectChange",6),this.componentToNativeEl=new Map,this.mutationObserver=O("mutation",()=>this.populateInternalSelect()),this.handleInternalSelectChange=()=>{const e=this.selectEl.selectedOptions[0];this.selectFromNativeOption(e),requestAnimationFrame(()=>this.emitChangeEvent())},this.populateInternalSelect=()=>{const e=Array.from(this.el.children).filter(t=>t.tagName==="CALCITE-OPTION"||t.tagName==="CALCITE-OPTION-GROUP");this.clearInternalSelect(),e.forEach(t=>{var i;return(i=this.selectEl)==null?void 0:i.append(this.toNativeElement(t))})},this.storeSelectRef=e=>{this.selectEl=e,this.populateInternalSelect();const t=this.selectEl.selectedOptions[0];this.selectFromNativeOption(t)},this.emitChangeEvent=()=>{this.calciteSelectChange.emit()},this.disabled=!1,this.form=void 0,this.label=void 0,this.validationMessage=void 0,this.validationIcon=void 0,this.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1},this.name=void 0,this.required=!1,this.scale="m",this.status="idle",this.value=null,this.selectedOption=void 0,this.width="auto"}valueHandler(e){this.updateItemsFromValue(e)}selectedOptionHandler(e){this.value=e==null?void 0:e.value}connectedCallback(){var t;const{el:e}=this;(t=this.mutationObserver)==null||t.observe(e,{subtree:!0,childList:!0}),y(this),b(this)}disconnectedCallback(){var e;(e=this.mutationObserver)==null||e.disconnect(),I(this),g(this)}componentWillLoad(){k(this),typeof this.value=="string"&&this.updateItemsFromValue(this.value)}componentDidLoad(){var e;N(this),E(this,((e=this.selectedOption)==null?void 0:e.value)??"")}componentDidRender(){w(this)}async setFocus(){await z(this),f(this.selectEl)}handleOptionOrGroupChange(e){e.stopPropagation();const t=e.target,i=this.componentToNativeEl.get(t);i&&(this.updateNativeElement(t,i),l(t)&&t.selected&&(this.deselectAllExcept(t),this.selectedOption=t))}onLabelClick(){this.setFocus()}updateItemsFromValue(e){this.el.querySelectorAll("calcite-option").forEach(t=>t.selected=t.value===e)}updateNativeElement(e,t){if(t.disabled=e.disabled,t.label=e.label,l(e)){const i=t;i.selected=e.selected,i.value=e.value,i.innerText=e.label}}clearInternalSelect(){this.componentToNativeEl.forEach(e=>e.remove()),this.componentToNativeEl.clear()}selectFromNativeOption(e){if(!e)return;let t;this.componentToNativeEl.forEach((i,s)=>{l(s)&&i===e&&(s.selected=!0,t=s,this.deselectAllExcept(s))}),t&&(this.selectedOption=t)}toNativeElement(e){if(l(e)){const t=document.createElement("option");return this.updateNativeElement(e,t),this.componentToNativeEl.set(e,t),t}if(q(e)){const t=document.createElement("optgroup");return this.updateNativeElement(e,t),Array.from(e.children).forEach(i=>{const s=this.toNativeElement(i);t.append(s),this.componentToNativeEl.set(e,s)}),this.componentToNativeEl.set(e,t),t}throw new Error("unsupported element child provided")}deselectAllExcept(e){this.el.querySelectorAll("calcite-option").forEach(t=>{t!==e&&(t.selected=!1)})}renderChevron(){return a("div",{class:o.iconContainer},a("calcite-icon",{class:o.icon,icon:"chevron-down",scale:T(this.scale)}))}render(){const{disabled:e}=this;return a(u,{key:"d2e0ad4197079513f4e9e0070fb397c4f8331597"},a(x,{key:"5eee0d42742248209469fb7a5e3541cdbe373d30",disabled:e},a("div",{key:"e12c66d415dfe7c24e63731f2a83a081687fba8a",class:o.wrapper},a("select",{key:"22685962db75d2527740d288f016665ec5e6053e","aria-errormessage":c.validationMessage,"aria-invalid":v(this.status==="invalid"),"aria-label":S(this),class:o.select,disabled:e,onChange:this.handleInternalSelectChange,ref:this.storeSelectRef},a("slot",{key:"1b105206faa1f0765add18140b0f99f3d273c11f"})),this.renderChevron(),a(C,{key:"5767128465128a9fb5f69c9241bef0da56b9432e",component:this})),this.validationMessage&&this.status==="invalid"?a(A,{icon:this.validationIcon,id:c.validationMessage,message:this.validationMessage,scale:this.scale,status:this.status}):null))}get el(){return this}static get watchers(){return{value:["valueHandler"],selectedOption:["selectedOptionHandler"]}}static get style(){return H}},[1,"calcite-select",{disabled:[516],form:[513],label:[1],validationMessage:[1,"validation-message"],validationIcon:[520,"validation-icon"],validity:[1040],name:[513],required:[516],scale:[513],status:[513],value:[1025],selectedOption:[1040],width:[513],setFocus:[64]},[[0,"calciteInternalOptionChange","handleOptionOrGroupChange"],[0,"calciteInternalOptionGroupChange","handleOptionOrGroupChange"]],{value:["valueHandler"],selectedOption:["selectedOptionHandler"]}]);function d(){if(typeof customElements>"u")return;["calcite-select","calcite-icon","calcite-input-message"].forEach(e=>{switch(e){case"calcite-select":customElements.get(e)||customElements.define(e,r);break;case"calcite-icon":customElements.get(e)||F();break;case"calcite-input-message":customElements.get(e)||L();break}})}d();const ue=r,fe=d;export{ue as CalciteSelect,fe as defineCustomElement};
