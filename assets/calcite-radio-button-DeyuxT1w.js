import{p as m,H as k,d as s,a as g,h as a,c as B}from"./jsxFactory-CbAu6VfF.js";import{g as h}from"./array-DofFqflK.js";import{g as v,f as C,b as x,t as y}from"./dom-Cv0oa6So.js";import{c as I,d as R,H as w}from"./form-DcBTx4ZC.js";import{c as F,d as E,u as z,I as A}from"./interactive-Dtpmn6Ls.js";import{c as L,d as H,g as O}from"./label-rdYpV4K5.js";import{c as q,s as D,a as G}from"./loadable-CTFTnu2T.js";import"./Evented-CXIxDjmW.js";import"./Accessor-D6mNnsWy.js";import"./subclass-BR3PhgZG.js";import"./intl-Dpfm8vPB.js";import"./Promise-CZrWwByK.js";import"./jsonMap-DCC6W5ex.js";import"./assets-C2mb-ea2.js";import"./index-CeCSsEgo.js";import"./reactiveUtils-BFQ0BtrB.js";import"./shared-B3wH2qpO.js";import"./uuid-fwrPAdZb.js";import"./component-ByvC-PUv.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.2
 */const T={container:"container"},S=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block;cursor:pointer}:host .container{position:relative;outline:2px solid transparent;outline-offset:2px}:host .radio{cursor:pointer;border-radius:9999px;background-color:var(--calcite-color-foreground-1);outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;box-shadow:inset 0 0 0 1px var(--calcite-color-border-input)}:host([hovered]) .radio,:host(:not([checked])[focused]:not([disabled])) .radio{box-shadow:inset 0 0 0 2px var(--calcite-color-brand)}:host([focused]) .radio{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([disabled]) .radio{cursor:default;opacity:var(--calcite-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hovered][disabled]) .radio{box-shadow:inset 0 0 0 1px var(--calcite-color-border-input)}:host([scale=s]){--calcite-radio-size:var(--calcite-font-size--2)}:host([scale=m]){--calcite-radio-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-radio-size:var(--calcite-font-size-0)}.radio{block-size:var(--calcite-radio-size);max-inline-size:var(--calcite-radio-size);min-inline-size:var(--calcite-radio-size)}:host([scale=s][checked]) .radio,:host([hovered][scale=s][checked][disabled]) .radio{box-shadow:inset 0 0 0 4px var(--calcite-color-brand)}:host([scale=s][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 4px var(--calcite-color-brand), 0 0 0 2px var(--calcite-color-foreground-1)}:host([scale=m][checked]) .radio,:host([hovered][scale=m][checked][disabled]) .radio{box-shadow:inset 0 0 0 5px var(--calcite-color-brand)}:host([scale=m][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 5px var(--calcite-color-brand), 0 0 0 2px var(--calcite-color-foreground-1)}:host([scale=l][checked]) .radio,:host([hovered][scale=l][checked][disabled]) .radio{box-shadow:inset 0 0 0 6px var(--calcite-color-brand)}:host([scale=l][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 6px var(--calcite-color-brand), 0 0 0 2px var(--calcite-color-foreground-1)}@media (forced-colors: active){:host([checked]) .radio::after,:host([checked][disabled]) .radio::after{content:"";inline-size:var(--calcite-radio-size);block-size:var(--calcite-radio-size);background-color:windowText;display:block}}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}`,K=S,u=m(class extends k{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalRadioButtonBlur=s(this,"calciteInternalRadioButtonBlur",6),this.calciteRadioButtonChange=s(this,"calciteRadioButtonChange",6),this.calciteInternalRadioButtonCheckedChange=s(this,"calciteInternalRadioButtonCheckedChange",6),this.calciteInternalRadioButtonFocus=s(this,"calciteInternalRadioButtonFocus",6),this.selectItem=(e,o)=>{e[o].click()},this.queryButtons=()=>Array.from(this.rootNode.querySelectorAll("calcite-radio-button:not([hidden])")).filter(e=>e.name===this.name),this.isFocusable=()=>{const e=this.queryButtons(),o=e.find(i=>!i.disabled),t=e.find(i=>i.checked);return o===this.el&&!t},this.check=()=>{this.disabled||(this.focused=!0,this.setFocus(),!this.checked&&(this.uncheckAllRadioButtonsInGroup(),this.checked=!0,this.calciteRadioButtonChange.emit()))},this.clickHandler=()=>{this.disabled||this.check()},this.setContainerEl=e=>{this.containerEl=e},this.handleKeyDown=e=>{const o=["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"," "],{key:t}=e,{el:i}=this;if(o.indexOf(t)===-1)return;if(t===" "){this.check(),e.preventDefault();return}let c=t;v(i)==="rtl"&&(t==="ArrowRight"&&(c="ArrowLeft"),t==="ArrowLeft"&&(c="ArrowRight"));const n=Array.from(this.rootNode.querySelectorAll("calcite-radio-button:not([hidden])")).filter(d=>d.name===this.name);let r=0;const l=n.length;switch(n.some((d,p)=>{if(d.checked)return r=p,!0}),c){case"ArrowLeft":case"ArrowUp":e.preventDefault(),this.selectItem(n,h(Math.max(r-1,-1),l));return;case"ArrowRight":case"ArrowDown":e.preventDefault(),this.selectItem(n,h(r+1,l));return;default:return}},this.onContainerBlur=()=>{this.focused=!1,this.calciteInternalRadioButtonBlur.emit()},this.onContainerFocus=()=>{this.disabled||(this.focused=!0,this.calciteInternalRadioButtonFocus.emit())},this.checked=!1,this.disabled=!1,this.focused=!1,this.form=void 0,this.guid=void 0,this.hovered=!1,this.label=void 0,this.name=void 0,this.required=!1,this.scale="m",this.value=void 0}handleHiddenChange(){this.updateTabIndexOfOtherRadioButtonsInGroup()}checkedChanged(e){e&&this.uncheckOtherRadioButtonsInGroup(),this.calciteInternalRadioButtonCheckedChange.emit()}disabledChanged(){this.updateTabIndexOfOtherRadioButtonsInGroup()}nameChanged(){this.checkLastRadioButton()}async setFocus(){await q(this),this.disabled||C(this.containerEl)}syncHiddenFormInput(e){e.type="radio"}onLabelClick(e){if(this.disabled||this.el.hidden)return;const o=e.currentTarget,t=o.for?this.rootNode.querySelector(`calcite-radio-button[id="${o.for}"]`):o.querySelector(`calcite-radio-button[name="${this.name}"]`);t&&(t.focused=!0,this.setFocus(),!t.checked&&(this.uncheckOtherRadioButtonsInGroup(),t.checked=!0,this.calciteRadioButtonChange.emit()))}checkLastRadioButton(){const o=this.queryButtons().filter(t=>t.checked);if((o==null?void 0:o.length)>1){const t=o[o.length-1];o.filter(i=>i!==t).forEach(i=>{i.checked=!1,i.emitCheckedChange()})}}async emitCheckedChange(){this.calciteInternalRadioButtonCheckedChange.emit()}uncheckAllRadioButtonsInGroup(){this.queryButtons().forEach(o=>{o.checked&&(o.checked=!1,o.focused=!1)})}uncheckOtherRadioButtonsInGroup(){this.queryButtons().filter(t=>t.guid!==this.guid).forEach(t=>{t.checked&&(t.checked=!1,t.focused=!1)})}updateTabIndexOfOtherRadioButtonsInGroup(){this.queryButtons().filter(t=>t.guid!==this.guid&&!t.disabled).forEach(t=>{g(t)})}getTabIndex(){if(!this.disabled)return this.checked||this.isFocusable()?0:-1}pointerEnterHandler(){this.disabled||(this.hovered=!0)}pointerLeaveHandler(){this.disabled||(this.hovered=!1)}connectedCallback(){this.rootNode=this.el.getRootNode(),this.guid=this.el.id||`calcite-radio-button-${x()}`,this.name&&this.checkLastRadioButton(),F(this),L(this),I(this),this.updateTabIndexOfOtherRadioButtonsInGroup()}componentWillLoad(){D(this)}componentDidLoad(){G(this),this.focused&&!this.disabled&&this.setFocus()}disconnectedCallback(){E(this),H(this),R(this),this.updateTabIndexOfOtherRadioButtonsInGroup()}componentDidRender(){z(this)}render(){const e=this.getTabIndex();return a(B,{key:"ba3eb165cc92980ff2dbc1ad92b96e05e67c7738",onClick:this.clickHandler,onKeyDown:this.handleKeyDown},a(A,{key:"cc34b939f2d7461239102e360d862e7b770b4f51",disabled:this.disabled},a("div",{key:"9fe5d157ecf61a7dfbb68b174c0a072cafa7fb93","aria-checked":y(this.checked),"aria-label":O(this),class:T.container,onBlur:this.onContainerBlur,onFocus:this.onContainerFocus,ref:this.setContainerEl,role:"radio",tabIndex:e},a("div",{key:"82e64cb36cd384a2b05b6768c996cba67490db48",class:"radio"})),a(w,{key:"aec9b59e49dbb867432a4fd006cf32db53306d1c",component:this})))}get el(){return this}static get watchers(){return{hidden:["handleHiddenChange"],checked:["checkedChanged"],disabled:["disabledChanged"],name:["nameChanged"]}}static get style(){return K}},[1,"calcite-radio-button",{checked:[1540],disabled:[516],focused:[1540],form:[513],guid:[1537],hovered:[1540],label:[1],name:[513],required:[516],scale:[513],value:[1032],setFocus:[64],emitCheckedChange:[64]},[[1,"pointerenter","pointerEnterHandler"],[1,"pointerleave","pointerLeaveHandler"]],{hidden:["handleHiddenChange"],checked:["checkedChanged"],disabled:["disabledChanged"],name:["nameChanged"]}]);function f(){if(typeof customElements>"u")return;["calcite-radio-button"].forEach(e=>{switch(e){case"calcite-radio-button":customElements.get(e)||customElements.define(e,u);break}})}f();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.2
 */const se=u,ce=f;export{se as CalciteRadioButton,ce as defineCustomElement};
