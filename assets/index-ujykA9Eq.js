import"./index-CjrYEQXz.js";import"./index-cLdK6V3t.js";import{m as O}from"./index-73bQemcW.js";import"./index-Df8-0rWt.js";import"./index-DVEy4f7w.js";import"./index-DIB7yhJF.js";import"./index-BfAp5_ga.js";import"./customElement-kBYuBfHB.js";import{h as P}from"./index-DIp-v4qk.js";import"./index-CCqZjfSZ.js";import{S as z}from"./jsxFactory-CLjKarlq.js";import{i as s}from"./keyed-CdPY5MOf.js";import{n as I}from"./ref-Ccn4I0kT.js";import{i as A,L as T,c as l,x as o,s as i,E as f}from"./index-tefRSezt.js";import{a as M,u as d}from"./dom--xxYYVQF.js";import{m as L,p as F}from"./interactive-B8siLByk.js";import{r as j}from"./loadable-DOQnSSjG.js";import{s as D}from"./openCloseComponent-dw_x67D_.js";import{r as R}from"./floating-ui-BkLjHVN3.js";import{s as U}from"./useT9n-CJAswmP1.js";import"./guid-ejniuQmw.js";import"./observers-BdozwIHb.js";import"./key-CZcQa38B.js";import"./dynamicClasses-pKEMtFzB.js";import"./component-CFGnHAqh.js";import"./resources6-Cs2_VmEC.js";import"./static-g4FJ4v8I.js";import"./FloatingArrow-D9X-HbKW.js";import"./useFocusTrap-ENcZoC4L.js";import"./focusTrapComponent-Br_3Mz8_.js";import"./array-BbE1dLa5.js";import"./Accessor-BHnuXKD2.js";import"./intl-Do3GEEJ7.js";import"./Promise-CmQqe-ke.js";import"./cast-BA_-jlhc.js";import"./JSONSupport-CGdeqxpk.js";import"./Evented-DCWccWGU.js";import"./reactiveUtils-BR0C1Kq4.js";import"./SimpleObservable-7oieNGD8.js";import"./uuid-Cl5lrJ4c.js";import"./directive-helpers-C0aXnQdc.js";import"./debounce-DbkufipY.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const c={content:"content",toggle:"toggle",header:"header"},t={actionsEnd:"actions-end",container:"container",content:"content",contentStart:"content-start",controlContainer:"control-container",description:"description",header:"header",headerContainer:"header-container",headerHasText:"header--has-text",heading:"heading",icon:"icon",iconStart:"icon--start",iconEnd:"icon--end",iconEndContainer:"icon-end-container",invalid:"invalid",statusIcon:"status-icon",title:"title",toggle:"toggle",toggleIcon:"toggle-icon",valid:"valid"},h={actionsEnd:"actions-end",contentStart:"content-start",control:"control",headerMenuActions:"header-menu-actions",icon:"icon"},b={opened:"chevron-up",closed:"chevron-down",valid:"check-circle",invalid:"exclamation-mark-triangle"},N=A`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{--calcite-icon-size: 1rem;--calcite-spacing-eighth: .125rem;--calcite-spacing-quarter: .25rem;--calcite-spacing-half: .5rem;--calcite-spacing-three-quarters: .75rem;--calcite-spacing: 1rem;--calcite-spacing-plus-quarter: 1.25rem;--calcite-spacing-plus-half: 1.5rem;--calcite-spacing-double: 2rem;--calcite-menu-min-width: 10rem;--calcite-header-min-height: 3rem;--calcite-footer-min-height: 3rem}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-shrink:0;flex-grow:0;flex-direction:column;border-width:0px;border-block-end-width:1px;border-style:solid;padding:0;transition-property:margin;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s;transition-timing-function:cubic-bezier(.215,.44,.42,.88);flex-basis:auto;transition-duration:var(--calcite-animation-timing);border-color:var(--calcite-block-border-color, var(--calcite-color-border-3))}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0;padding:0;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:.5rem}.header{justify-content:flex-start}.header--has-text{padding:var(--calcite-spacing-md)}.header,.toggle{grid-area:header}.header-container{display:grid;align-items:stretch;grid-template:auto/auto 1fr auto auto;grid-template-areas:"handle header control menu actions-end";grid-column:header-start/actions-end;grid-row:1/2}.content-start,.icon,.icon--start,.icon--end{margin-inline-end:var(--calcite-spacing-md)}.icon calcite-loader{margin-inline-end:var(--calcite-spacing-xxxs)}.icon--start,.icon--end{color:var(--calcite-block-text-color, var(--calcite-color-text-3))}.actions-end{grid-area:actions-end}.toggle{margin:0;display:flex;cursor:pointer;flex-wrap:nowrap;align-items:center;justify-content:space-between;border-style:none;padding:0;font-family:var(--calcite-font-family);outline-color:transparent;text-align:initial;background-color:var(--calcite-block-header-background-color, transparent)}.toggle:hover{background-color:var(--calcite-block-header-background-color-hover, var(--calcite-color-foreground-2))}.toggle:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}calcite-loader[inline]{grid-area:control;align-self:center}calcite-handle{grid-area:handle}.title{margin:0}.header .title .heading{padding:0;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);line-height:1.25;transition-property:color;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);word-wrap:break-word;word-break:break-word;color:var(--calcite-block-heading-text-color, var(--calcite-color-text-2))}.description{margin-block-start:.125rem;padding:0;font-size:var(--calcite-font-size--2);line-height:1.375;word-wrap:break-word;word-break:break-word;color:var(--calcite-block-text-color, var(--calcite-color-text-3))}.icon{display:flex}.status-icon.valid{color:var(--calcite-color-status-success)}.status-icon.invalid{color:var(--calcite-color-status-danger)}@keyframes spin{0%{transform:rotate(0)}50%{transform:rotate(180deg)}to{transform:rotate(360deg)}}.icon-end-container{display:flex;align-items:center;margin-inline-start:auto}.toggle-icon{align-self:center;justify-self:end;transition-property:color;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);margin-inline-end:var(--calcite-spacing-md);color:var(--calcite-block-text-color, var(--calcite-color-text-3))}.toggle:hover .toggle-icon{color:var(--calcite-block-heading-text-color-press, var(--calcite-color-text-1))}.container{position:relative;display:flex;block-size:100%;flex-direction:column}.content{position:relative;min-block-size:0px;flex:1 1 0%}@keyframes in{0%{opacity:0}to{opacity:1}}.content{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;padding-block:var(--calcite-block-padding, var(--calcite-spacing-sm));padding-inline:var(--calcite-block-padding, var(--calcite-spacing-md))}.content-start{display:flex;align-items:center;color:var(--calcite-block-text-color, var(--calcite-color-text-3))}.control-container{margin:0;display:flex;grid-area:control}calcite-action-menu{grid-area:menu}.actions-end{display:flex;align-items:stretch}:host([open]){margin-block:.5rem}:host([open]) .header .title .heading{color:var(--calcite-block-heading-text-color-press, var(--calcite-color-text-1))}:host([hidden]){display:none}[hidden]{display:none}`,g=class g extends T{constructor(){super(...arguments),this.transitionProp="margin-top",this.hasContentStart=!1,this.hasControl=!1,this.hasEndActions=!1,this.hasIcon=!1,this.hasMenuActions=!1,this.collapsible=!1,this.disabled=!1,this.dragDisabled=!1,this.dragHandle=!1,this.loading=!1,this.menuPlacement=R,this.messages=U(),this.moveToItems=[],this.open=!1,this.overlayPositioning="absolute",this.setPosition=null,this.setSize=null,this.sortHandleOpen=!1,this.calciteBlockBeforeClose=l({cancelable:!1}),this.calciteBlockBeforeOpen=l({cancelable:!1}),this.calciteBlockClose=l({cancelable:!1}),this.calciteBlockOpen=l({cancelable:!1}),this.calciteBlockSortHandleBeforeClose=l({cancelable:!1}),this.calciteBlockSortHandleBeforeOpen=l({cancelable:!1}),this.calciteBlockSortHandleClose=l({cancelable:!1}),this.calciteBlockSortHandleOpen=l({cancelable:!1}),this.calciteBlockToggle=l({cancelable:!1})}async setFocus(){await j(this),M(this.el)}connectedCallback(){super.connectedCallback(),this.transitionEl=this.el}load(){!this.heading&&!this.label&&O.warn(`${this.el.tagName} is missing both heading & label. Please provide a heading or label for the component to be accessible.`)}willUpdate(e){e.has("open")&&(this.hasUpdated||this.open!==!1)&&D(this),e.has("sortHandleOpen")&&(this.hasUpdated||this.sortHandleOpen!==!1)&&this.sortHandleOpenHandler()}updated(){L(this)}loaded(){}onBeforeOpen(){this.calciteBlockBeforeOpen.emit()}onOpen(){this.calciteBlockOpen.emit()}onBeforeClose(){this.calciteBlockBeforeClose.emit()}onClose(){this.calciteBlockClose.emit()}sortHandleOpenHandler(){this.sortHandleEl&&(this.sortHandleEl.open=this.sortHandleOpen)}setSortHandleEl(e){this.sortHandleEl=e,this.sortHandleOpenHandler()}handleSortHandleBeforeOpen(e){e.stopPropagation(),this.calciteBlockSortHandleBeforeOpen.emit()}handleSortHandleBeforeClose(e){e.stopPropagation(),this.calciteBlockSortHandleBeforeClose.emit()}handleSortHandleClose(e){e.stopPropagation(),this.sortHandleOpen=!1,this.calciteBlockSortHandleClose.emit()}handleSortHandleOpen(e){e.stopPropagation(),this.sortHandleOpen=!0,this.calciteBlockSortHandleOpen.emit()}onHeaderClick(){this.open=!this.open,this.calciteBlockToggle.emit()}controlSlotChangeHandler(e){this.hasControl=d(e)}menuActionsSlotChangeHandler(e){this.hasMenuActions=d(e)}iconSlotChangeHandler(e){this.hasIcon=d(e)}actionsEndSlotChangeHandler(e){this.hasEndActions=d(e)}handleContentStartSlotChange(e){this.hasContentStart=d(e)}renderScrim(){const{loading:e}=this,n=o`<slot></slot>`;return[e?o`<calcite-scrim .loading=${e}></calcite-scrim>`:null,n]}renderLoaderStatusIcon(){const{loading:e,messages:n,status:a}=this;return e?s("loader",o`<div class=${i(t.icon)}><calcite-loader inline .label=${n.loading}></calcite-loader></div>`):a?s("status-icon",o`<div class=${i(t.icon)}><calcite-icon class=${i({[t.statusIcon]:!0,[t.valid]:a=="valid",[t.invalid]:a=="invalid"})} .icon=${b[a]} scale=s></calcite-icon></div>`):s("icon-slot",o`<div class=${i(t.icon)} .hidden=${!this.hasIcon}>${s("icon-slot",o`<slot name=${h.icon} @slotchange=${this.iconSlotChangeHandler}></slot>`)}</div>`)}renderActionsEnd(){return o`<div class=${i(t.actionsEnd)} .hidden=${!this.hasEndActions}><slot name=${h.actionsEnd} @slotchange=${this.actionsEndSlotChangeHandler}></slot></div>`}renderContentStart(){return o`<div class=${i(t.contentStart)} .hidden=${!this.hasContentStart}><slot name=${h.contentStart} @slotchange=${this.handleContentStartSlotChange}></slot></div>`}renderTitle(){const{heading:e,headingLevel:n,description:a}=this;return e||a?o`<div class=${i(t.title)}>${P({class:t.heading,level:n,children:e})}${a?o`<div class=${i(t.description)}>${a}</div>`:null}</div>`:null}renderIcon(e){const{iconFlipRtl:n}=this,a=n==="both"||e==="start"?n==="start":n==="end",r=e==="start"?this.iconStart:this.iconEnd,p=e==="start"?t.iconStart:t.iconEnd;if(r)return s(r,o`<calcite-icon class=${i(p)} .flipRtl=${a} .icon=${r} scale=s></calcite-icon>`)}render(){const{collapsible:e,loading:n,open:a,label:r,heading:p,messages:m,description:$,menuFlipPlacements:k,menuPlacement:x,moveToItems:S,setPosition:H,setSize:C,dragDisabled:y}=this,B=a?m.collapse:m.expand,u=o`<header class=${i({[t.header]:!0,[t.headerHasText]:!!(p||$)})} id=${c.header}>${this.renderIcon("start")}${this.renderContentStart()}${this.renderLoaderStatusIcon()}${this.renderTitle()}</header>`,E=a?b.opened:b.closed,w=o`<div class=${i(t.headerContainer)}>${this.dragHandle?o`<calcite-sort-handle .disabled=${y} .label=${p||r} .moveToItems=${S} @calciteSortHandleBeforeClose=${this.handleSortHandleBeforeClose} @calciteSortHandleBeforeOpen=${this.handleSortHandleBeforeOpen} @calciteSortHandleClose=${this.handleSortHandleClose} @calciteSortHandleOpen=${this.handleSortHandleOpen} overlay-positioning=fixed .setPosition=${H} .setSize=${C} ${I(this.setSortHandleEl)}></calcite-sort-handle>`:null}${e?o`<button aria-controls=${c.content} aria-describedby=${c.header} .ariaExpanded=${e?a:null} class=${i(t.toggle)} id=${c.toggle} @click=${this.onHeaderClick} title=${B??f}>${u}<div class=${i(t.iconEndContainer)}>${this.renderIcon("end")}<calcite-icon class=${i(t.toggleIcon)} .icon=${E} scale=s></calcite-icon></div></button>`:this.iconEnd?o`<div>${u}<div class=${i(t.iconEndContainer)}>${this.renderIcon("end")}</div></div>`:u}<div aria-labelledby=${c.header} class=${i(t.controlContainer)} .hidden=${!this.hasControl}><slot name=${h.control} @slotchange=${this.controlSlotChangeHandler}></slot></div><calcite-action-menu .flipPlacements=${k??["top","bottom"]} .hidden=${!this.hasMenuActions} .label=${m.options} .overlayPositioning=${this.overlayPositioning} .placement=${x}><slot name=${h.headerMenuActions} @slotchange=${this.menuActionsSlotChangeHandler}></slot></calcite-action-menu>${this.renderActionsEnd()}</div>`;return F({disabled:this.disabled,children:o`<article aria-label=${r??f} .ariaBusy=${n} class=${i({[t.container]:!0})}>${w}<section aria-labelledby=${c.toggle} class=${i(t.content)} .hidden=${!a} id=${c.content}>${this.renderScrim()}</section></article>`})}};g.properties={hasContentStart:16,hasControl:16,hasEndActions:16,hasIcon:16,hasMenuActions:16,collapsible:7,description:1,disabled:7,dragDisabled:7,dragHandle:7,heading:1,headingLevel:11,iconEnd:3,iconFlipRtl:3,iconStart:3,loading:7,label:1,menuFlipPlacements:0,menuPlacement:3,messageOverrides:0,moveToItems:0,open:7,overlayPositioning:3,setPosition:9,setSize:9,sortHandleOpen:7,status:3},g.styles=N;let v=g;z("calcite-block",v);export{v as Block};
