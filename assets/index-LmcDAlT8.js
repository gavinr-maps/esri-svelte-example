import{S as s}from"./jsxFactory-CLjKarlq.js";import{i as o,L as r,r as n,x as d,s as l}from"./index-tefRSezt.js";import{h as b}from"./dom--xxYYVQF.js";import{i as h}from"./guid-ejniuQmw.js";import"./Accessor-BHnuXKD2.js";import"./intl-Do3GEEJ7.js";import"./Promise-CmQqe-ke.js";import"./cast-BA_-jlhc.js";import"./JSONSupport-CGdeqxpk.js";import"./Evented-DCWccWGU.js";import"./reactiveUtils-BR0C1Kq4.js";import"./SimpleObservable-7oieNGD8.js";import"./uuid-Cl5lrJ4c.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const c={container:"container",content:"content"},p=o`:host([selected]) section,:host([selected]) .container{display:block}:host{display:none;block-size:100%;inline-size:100%}:host([selected]){display:block;block-size:100%;inline-size:100%;overflow:auto}.content{box-sizing:border-box;padding-block:var(--calcite-internal-tab-content-block-padding)}.scale-s{--calcite-internal-tab-content-block-padding: var(--calcite-tab-content-block-padding, .25rem);font-size:var(--calcite-font-size--2);line-height:1rem}.scale-m{--calcite-internal-tab-content-block-padding: var(--calcite-tab-content-block-padding, .5rem);font-size:var(--calcite-font-size--1);line-height:1rem}.scale-l{--calcite-internal-tab-content-block-padding: var(--calcite-tab-content-block-padding, .625rem);font-size:var(--calcite-font-size-0);line-height:1.25rem}section,.container{display:none;block-size:100%;inline-size:100%}.container{outline-color:transparent}.container:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host([hidden]){display:none}[hidden]{display:none}`,i=class i extends r{constructor(){super(),this.guid=`calcite-tab-title-${h()}`,this.scale="m",this.selected=!1,this.listenOn(document.body,"calciteInternalTabChange",this.internalTabChangeHandler)}async getTabIndex(){return Array.prototype.indexOf.call(b(this.el.parentElement.children).filter(t=>t.matches("calcite-tab")),this.el)}_updateAriaInfo(t=[],e=[]){this.labeledBy=e[t.indexOf(this.el.id)]||null}connectedCallback(){super.connectedCallback(),this.parentTabsEl=this.el.closest("calcite-tabs")}disconnectedCallback(){var t;super.disconnectedCallback(),(t=document.body)==null||t.dispatchEvent(new CustomEvent("calciteTabUnregister",{detail:this.el}))}internalTabChangeHandler(t){t.composedPath().find(e=>e.tagName==="CALCITE-TABS")===this.parentTabsEl&&(this.tab?this.selected=this.tab===t.detail.tab:this.getTabIndex().then(e=>{this.selected=e===t.detail.tab}),t.stopPropagation())}render(){const t=this.el.id||this.guid;return n(this.el,"aria-labelledby",this.labeledBy),n(this.el,"id",t),d`<div class=${l({[c.container]:!0,[`scale-${this.scale}`]:!0})} role=tabpanel .tabIndex=${this.selected?0:-1}><section class=${l(c.content)}><slot></slot></section></div>`}};i.properties={labeledBy:16,scale:1,selected:7,tab:3},i.styles=p;let a=i;s("calcite-tab",a);export{a as Tab};
