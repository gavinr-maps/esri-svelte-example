import"./index-CjrYEQXz.js";import"./index-73bQemcW.js";import"./index-DVEy4f7w.js";import"./index-DIp-v4qk.js";import"./index-CCqZjfSZ.js";import"./index-BSRDeu3E.js";import{S as g}from"./jsxFactory-CLjKarlq.js";import{i as b,L as y,c as v,x as l,s as c}from"./index-tefRSezt.js";import{a as f,s as w}from"./dom--xxYYVQF.js";import{r as G}from"./loadable-DOQnSSjG.js";import{B as k,G as $}from"./ExpandToggle-UGfmSgey.js";import{b as L}from"./observers-BdozwIHb.js";import{s as T}from"./useT9n-CJAswmP1.js";import"./guid-ejniuQmw.js";import"./keyed-CdPY5MOf.js";import"./directive-helpers-C0aXnQdc.js";import"./ref-Ccn4I0kT.js";import"./interactive-B8siLByk.js";import"./component-CFGnHAqh.js";import"./floating-ui-BkLjHVN3.js";import"./debounce-DbkufipY.js";import"./openCloseComponent-dw_x67D_.js";import"./static-g4FJ4v8I.js";import"./FloatingArrow-D9X-HbKW.js";import"./useFocusTrap-ENcZoC4L.js";import"./focusTrapComponent-Br_3Mz8_.js";import"./key-CZcQa38B.js";import"./array-BbE1dLa5.js";import"./Accessor-BHnuXKD2.js";import"./intl-Do3GEEJ7.js";import"./Promise-CmQqe-ke.js";import"./cast-BA_-jlhc.js";import"./JSONSupport-CGdeqxpk.js";import"./Evented-DCWccWGU.js";import"./reactiveUtils-BR0C1Kq4.js";import"./SimpleObservable-7oieNGD8.js";import"./uuid-Cl5lrJ4c.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const p={actionGroupEnd:"action-group--end",container:"container"},C={expandTooltip:"expand-tooltip"},E=b`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:block}@keyframes in{0%{opacity:0}to{opacity:1}}:host{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;border-radius:var(--calcite-action-pad-corner-radius, .125rem);background:transparent}:host([expanded][layout=vertical]) .container{max-inline-size:var(--calcite-action-pad-expanded-max-width, auto)}:host([layout=vertical]) ::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:1px}.container{display:inline-flex;flex-direction:column;overflow:hidden;--tw-shadow: 0 6px 20px -4px rgba(0, 0, 0, .1), 0 4px 12px -2px rgba(0, 0, 0, .08);--tw-shadow-colored: 0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);gap:var(--calcite-action-pad-items-space, 0);border-radius:calc(var(--calcite-action-pad-corner-radius, .125rem) * 2);background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1))}.action-group--bottom{flex-grow:1;justify-content:flex-end;padding-block-end:0px}:host([layout=horizontal]) .container{flex-direction:row}:host([layout=horizontal]) .container .action-group--bottom{padding:0}:host([layout=horizontal]) .container ::slotted(calcite-action-group:not(:last-of-type)){border-inline-end-width:1px}:host([hidden]){display:none}[hidden]{display:none}`,e=class e extends y{constructor(){super(),this.mutationObserver=L("mutation",()=>this.updateGroups()),this.toggleExpand=()=>{this.expanded=!this.expanded,this.calciteActionPadToggle.emit()},this.expandDisabled=!1,this.expanded=!1,this.layout="vertical",this.messages=T(),this.overlayPositioning="absolute",this.scale="m",this.calciteActionPadToggle=v({cancelable:!1}),this.listen("calciteActionMenuOpen",this.actionMenuOpenHandler)}async setFocus(){await G(this),f(this.el)}connectedCallback(){var t;super.connectedCallback(),(t=this.mutationObserver)==null||t.observe(this.el,{childList:!0,subtree:!0})}async load(){}willUpdate(t){t.has("expanded")&&this.hasUpdated&&k({el:this.el,expanded:this.expanded}),t.has("layout")&&(this.hasUpdated||this.layout!=="vertical")&&this.updateGroups()}loaded(){}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}actionMenuOpenHandler(t){var a;if(t.target.menuOpen){const o=t.composedPath();(a=this.actionGroups)==null||a.forEach(i=>{o.includes(i)||(i.menuOpen=!1)})}}updateGroups(){const t=Array.from(this.el.querySelectorAll("calcite-action-group"));this.actionGroups=t,this.setGroupLayout(t)}setGroupLayout(t){t.forEach(a=>a.layout=this.layout)}handleDefaultSlotChange(){this.updateGroups()}handleTooltipSlotChange(t){const a=w(t).filter(o=>o==null?void 0:o.matches("calcite-tooltip"));this.expandTooltip=a[0]}renderBottomActionGroup(){const{expanded:t,expandDisabled:a,messages:o,el:i,position:d,toggleExpand:h,scale:r,layout:u,actionsEndGroupLabel:m,overlayPositioning:x}=this,s=a?null:$({collapseLabel:o.collapseLabel,collapseText:o.collapse,el:i,expandLabel:o.expandLabel,expandText:o.expand,expanded:t,position:d,scale:r,toggle:h,tooltip:this.expandTooltip});return s?l`<calcite-action-group class=${c(p.actionGroupEnd)} .label=${m} .layout=${u} .overlayPositioning=${x} .scale=${r}><slot name=${C.expandTooltip} @slotchange=${this.handleTooltipSlotChange}></slot>${s}</calcite-action-group>`:null}render(){return l`<div class=${c(p.container)}><slot @slotchange=${this.handleDefaultSlotChange}></slot>${this.renderBottomActionGroup()}</div>`}};e.properties={expandTooltip:16,actionsEndGroupLabel:1,expandDisabled:7,expanded:7,layout:3,messageOverrides:0,overlayPositioning:3,position:3,scale:3},e.shadowRootOptions={mode:"open",delegatesFocus:!0},e.styles=E;let n=e;g("calcite-action-pad",n);export{n as ActionPad};
