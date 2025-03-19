import{D as r,S as l}from"./jsxFactory-CLjKarlq.js";import{i as n,L as h,c as o,x as d,s as c,b as s,k as g}from"./index-tefRSezt.js";import{e as b,n as p}from"./ref-Ccn4I0kT.js";import{b as m}from"./dom--xxYYVQF.js";import{D as k,W as u,B as v}from"./form-B15gmg4q.js";import{m as f,p as x}from"./interactive-B8siLByk.js";import{t as y}from"./key-CZcQa38B.js";import{v as z,T as w,I as C}from"./label-BLne9qNB.js";import{r as $}from"./loadable-DOQnSSjG.js";import"./Accessor-BHnuXKD2.js";import"./intl-Do3GEEJ7.js";import"./Promise-CmQqe-ke.js";import"./cast-BA_-jlhc.js";import"./JSONSupport-CGdeqxpk.js";import"./Evented-DCWccWGU.js";import"./reactiveUtils-BR0C1Kq4.js";import"./SimpleObservable-7oieNGD8.js";import"./uuid-Cl5lrJ4c.js";import"./directive-helpers-C0aXnQdc.js";import"./guid-ejniuQmw.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const a={toggle:"toggle",check:"check-svg"},B=n`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]) .check-svg,:host([scale=s]) .toggle{inline-size:var(--calcite-checkbox-size, .75rem);block-size:var(--calcite-checkbox-size, .75rem)}:host([scale=m]) .check-svg,:host([scale=m]) .toggle{inline-size:var(--calcite-checkbox-size, var(--calcite-font-size--1));block-size:var(--calcite-checkbox-size, var(--calcite-font-size--1))}:host([scale=l]) .check-svg,:host([scale=l]) .toggle{inline-size:var(--calcite-checkbox-size, 1rem);block-size:var(--calcite-checkbox-size, 1rem)}:host{position:relative;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}:host .check-svg{pointer-events:none;box-sizing:border-box;display:block;overflow:hidden;background-color:var(--calcite-color-foreground-1);fill:currentColor;stroke:currentColor;stroke-width:1;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;box-shadow:inset 0 0 0 1px var(--calcite-checkbox-border-color, var(--calcite-color-border-input));color:var(--calcite-checkbox-icon-color, var(--calcite-color-background))}:host([status=invalid]:not([checked])) .check-svg{box-shadow:inset 0 0 0 1px var(--calcite-color-status-danger)}:host([status=invalid]:not([checked])) .toggle:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host([checked]) .check-svg,:host([indeterminate]) .check-svg{background-color:var(--calcite-color-brand);box-shadow:inset 0 0 0 1px var(--calcite-color-brand)}:host([hovered]) .toggle .check-svg,:host .toggle:hover .check-svg{box-shadow:inset 0 0 0 2px var(--calcite-checkbox-border-color-hover, var(--calcite-color-brand))}.toggle{position:relative;outline-color:transparent}.toggle:active,.toggle:focus,.toggle:focus-visible{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.toggle:after,.toggle:before{inset-block-start:50%;inset-inline-start:50%;min-block-size:1.5rem;min-inline-size:1.5rem;position:absolute}.toggle:not(.calcite--rtl):after{content:"";transform:translate(-50%) translateY(-50%)}.toggle.calcite--rtl:before{content:"";transform:translate(50%) translateY(-50%)}@media (forced-colors: active){.check-svg{border:1px solid currentColor}}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}::slotted(input[slot=hidden-form-input]){margin:0!important;opacity:0!important;outline:none!important;padding:0!important;position:absolute!important;inset:0!important;transform:none!important;-webkit-appearance:none!important;z-index:-1!important}:host([hidden]){display:none}[hidden]{display:none}`,t=class t extends h{constructor(){super(),this.checkedPath="M5.5 12L2 8.689l.637-.636L5.5 10.727l8.022-7.87.637.637z",this.indeterminatePath="M13 8v1H3V8z",this.onLabelClick=()=>{this.toggle()},this.toggleEl=b(),this.checked=!1,this.disabled=!1,this.hovered=!1,this.indeterminate=!1,this.required=!1,this.scale="m",this.status="idle",this.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1},this.calciteCheckboxChange=o({cancelable:!1}),this.calciteInternalCheckboxBlur=o({cancelable:!1}),this.calciteInternalCheckboxFocus=o({cancelable:!1}),this.listen("click",this.clickHandler),this.listen("keydown",this.keyDownHandler)}async setFocus(){var e;await $(this),(e=this.toggleEl.value)==null||e.focus()}connectedCallback(){super.connectedCallback(),z(this),k(this)}load(){}updated(){f(this)}loaded(){}disconnectedCallback(){super.disconnectedCallback(),w(this),u(this)}syncHiddenFormInput(e){e.type="checkbox"}getPath(){return this.indeterminate?this.indeterminatePath:this.checked?this.checkedPath:""}toggle(){this.disabled||(this.checked=!this.checked,this.setFocus(),this.indeterminate=!1,this.calciteCheckboxChange.emit())}keyDownHandler(e){y(e.key)&&(this.toggle(),e.preventDefault())}clickHandler(){this.toggle()}onToggleBlur(){this.calciteInternalCheckboxBlur.emit(!1)}onToggleFocus(){this.calciteInternalCheckboxFocus.emit(!0)}render(){const e=m(this.el)==="rtl";return x({disabled:this.disabled,children:d`<div .ariaChecked=${this.checked} .ariaLabel=${C(this)} class=${c({[a.toggle]:!0,[r.rtl]:e})} @blur=${this.onToggleBlur} @focus=${this.onToggleFocus} role=checkbox tabindex=${(this.disabled?void 0:0)??s} ${p(this.toggleEl)}><svg aria-hidden=true class=${c(a.check)} viewBox="0 0 16 16">${g`<path d=${this.getPath()??s} />`}</svg><slot></slot></div>${v({component:this})}`})}};t.properties={checked:7,disabled:7,form:3,hovered:7,indeterminate:7,label:1,name:3,required:7,scale:3,status:3,validity:0,value:1},t.styles=B;let i=t;l("calcite-checkbox",i);export{i as Checkbox};
