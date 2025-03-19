import"./index-73bQemcW.js";import{S as u}from"./jsxFactory-CLjKarlq.js";import{i as h,L as v,c as f,x as s,s as i}from"./index-tefRSezt.js";import{s as g}from"./component-CFGnHAqh.js";import{m as b,p as x}from"./interactive-B8siLByk.js";import{i as $}from"./guid-ejniuQmw.js";import{c as d}from"./text-CbTMlb2o.js";import"./dom--xxYYVQF.js";import"./observers-BdozwIHb.js";import"./Accessor-BHnuXKD2.js";import"./intl-Do3GEEJ7.js";import"./Promise-CmQqe-ke.js";import"./cast-BA_-jlhc.js";import"./JSONSupport-CGdeqxpk.js";import"./Evented-DCWccWGU.js";import"./reactiveUtils-BR0C1Kq4.js";import"./SimpleObservable-7oieNGD8.js";import"./uuid-Cl5lrJ4c.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const t={container:"container",containerActive:"container--active",contentCenter:"content-center",description:"description",heading:"heading",iconEnd:"icon-end",iconStart:"icon-start",scale:m=>`scale--${m}`},p={contentEnd:"content-end",contentStart:"content-start"},k=h`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}.scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-internal-autocomplete-item-spacing-unit-l: .5rem;--calcite-internal-autocomplete-item-spacing-unit-s: .25rem;--calcite-internal-autocomplete-item-description-font-size: var(--calcite-font-size-xs)}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-internal-autocomplete-item-spacing-unit-l: .75rem;--calcite-internal-autocomplete-item-spacing-unit-s: .375rem;--calcite-internal-autocomplete-item-description-font-size: var(--calcite-font-size-sm)}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-internal-autocomplete-item-spacing-unit-l: 1rem;--calcite-internal-autocomplete-item-spacing-unit-s: .625rem;--calcite-internal-autocomplete-item-description-font-size: var(--calcite-font-size)}:host{display:flex}.container{position:relative;box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:100%;cursor:pointer;align-items:center;outline-color:transparent;background-color:var(--calcite-autocomplete-background-color, var(--calcite-color-foreground-1));color:var(--calcite-autocomplete-text-color, var(--calcite-color-text-3));gap:var(--calcite-internal-autocomplete-item-spacing-unit-l);padding-inline:var(--calcite-internal-autocomplete-item-spacing-unit-l);padding-block:var(--calcite-internal-autocomplete-item-spacing-unit-s);word-wrap:break-word;word-break:break-word;justify-content:space-around}.description{color:var(--calcite-autocomplete-description-text-color);font-size:var(--calcite-internal-autocomplete-item-description-font-size)}.heading{color:var(--calcite-autocomplete-heading-text-color, var(--calcite-color-text-1))}.heading,.description{line-height:var(--calcite-font-line-height-relative-snug)}:host(:hover:not([disabled])) .container{background-color:var(--calcite-autocomplete-background-color, var(--calcite-color-foreground-2))}:host(:hover:not([disabled])) .container .description{color:var(--calcite-autocomplete-description-text-color, var(--calcite-color-text-2))}.container--active{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.content-center{display:flex;flex-direction:column;flex-grow:1;padding-block:0}.text-match{background-color:transparent;color:inherit;font-weight:var(--calcite-font-weight-bold)}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}`,a=class a extends v{constructor(){super(...arguments),this.active=!1,this.disabled=!1,this.guid=`autocomplete-item-${$()}`,this.scale="m",this.calciteInternalAutocompleteItemSelect=f({cancelable:!1})}load(){}updated(){b(this)}loaded(){}handleClick(e){e.preventDefault(),this.calciteInternalAutocompleteItemSelect.emit()}render(){const{active:e,description:c,heading:o,disabled:l,inputValueMatchPattern:r}=this;return x({disabled:l,children:s`<div class=${i({[t.container]:!0,[t.containerActive]:e&&!l,[t.scale(this.scale)]:!0})} @click=${this.handleClick}>${this.renderIcon("start")}<slot name=${p.contentStart}></slot><div class=${i(t.contentCenter)}><div class=${i(t.heading)}>${d({text:o,pattern:r})}</div><div class=${i(t.description)}>${d({text:c,pattern:r})}</div></div><slot name=${p.contentEnd}></slot>${this.renderIcon("end")}</div>`})}renderIcon(e){const{iconFlipRtl:c}=this,o=e==="start"?this.iconStart:this.iconEnd;return o?s`<calcite-icon class=${i(e==="start"?t.iconStart:t.iconEnd)} .flipRtl=${c===e||c==="both"} .icon=${o} .scale=${g(this.scale)}></calcite-icon>`:null}};a.properties={active:5,description:1,disabled:7,guid:1,heading:1,iconEnd:3,iconFlipRtl:3,iconStart:3,inputValueMatchPattern:2,label:1,scale:1,value:1},a.styles=k;let n=a;u("calcite-autocomplete-item",n);export{n as AutocompleteItem};
