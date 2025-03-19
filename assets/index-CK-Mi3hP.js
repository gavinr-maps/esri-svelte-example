import"./index-DwIhxbHs.js";import"./index-BciJpaKz.js";import{S as v}from"./jsxFactory-Cnml7uXM.js";import{L as u,c as m,s as c,x as l,b as x,i as b}from"./index-4eY77cms.js";import{i as $}from"./keyed-CU1C-h1n.js";import{a as f}from"./dom-DEluURzl.js";import{t as k}from"./key-CZcQa38B.js";import{r as w}from"./loadable-XBvaWFYY.js";import{s as y}from"./useT9n-C1Hrfc-A.js";import"./observers-Co4E8E8j.js";import"./ref-D9wHsL_T.js";import"./directive-helpers-DaBykg1t.js";import"./form-BzoUrXC7.js";import"./interactive-DTzfFku4.js";import"./label-CHHpnzD0.js";import"./Accessor-BmwT4B0c.js";import"./intl-Duiy0OzY.js";import"./Promise-DfET-uns.js";import"./cast-CsZslgGN.js";import"./JSONSupport-DcrLLGjL.js";import"./Evented-Dw4_VOGn.js";import"./reactiveUtils-XM7cS2OP.js";import"./SimpleObservable-CvOkykwM.js";import"./uuid-Cl5lrJ4c.js";import"./guid-ejniuQmw.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const r={content:"content",toggle:"toggle"},t={chevronIcon:"chevron-icon",content:"content",iconStart:"icon--start",iconEnd:"icon--end",invalid:"invalid",sectionHeader:"section-header",sectionHeaderText:"section-header__text",statusIcon:"status-icon",switch:"switch",toggle:"toggle",toggleSwitch:"toggle--switch",toggleContainer:"toggle-container",toggleSwitchContent:"toggle--switch__content",toggleSwitchText:"toggle--switch__text",valid:"valid"},d={menuOpen:"chevron-up",menuClosed:"chevron-down",valid:"check-circle",invalid:"exclamation-mark-triangle"},S=b`:host{box-sizing:border-box;display:block;font-size:var(--calcite-font-size--1);color:var(--calcite-block-section-header-text-color, var(--calcite-color-text-2));background-color:var(--calcite-block-section-background-color, var(--calcite-color-foreground-1))}:host([open]){border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-block-section-border-color, var(--calcite-color-border-3))}:host([open]) .toggle{color:var(--calcite-block-section-text-color-hover, var(--calcite-color-text-1))}:host([open]) .toggle:hover{color:var(--calcite-block-section-text-color-hover, var(--calcite-color-text-1))}:host([open]) .chevron-icon{color:var(--calcite-block-section-text-color, var(--calcite-color-text-3))}:host([open]) .chevron-icon:hover{color:var(--calcite-block-section-text-color-hover, var(--calcite-color-text-1))}:host(:last-child){border-block-end-width:0px}.toggle{inline-size:100%;border-width:0px;font-family:var(--calcite-font-family);gap:var(--calcite-spacing-md);color:var(--calcite-block-section-header-text-color, var(--calcite-color-text-2));background-color:var(--calcite-block-section-background-color, transparent);font-weight:var(--calcite-font-weight-normal)}.toggle:hover{color:var(--calcite-block-section-text-color-hover, var(--calcite-color-text-1))}.toggle--switch,.section-header{margin-inline:0px;margin-block:.25rem;display:flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;padding-inline:0px;padding-block:.5rem;font-size:var(--calcite-font-size--1);outline-color:transparent}.toggle--switch:focus,.section-header:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.toggle--switch:hover,.section-header:hover{color:var(--calcite-block-section-text-color-hover, var(--calcite-color-text-1))}.section-header__text{margin-block:0px;flex:1 1 auto;text-align:initial;word-wrap:anywhere}.toggle-container{position:relative;display:flex;align-items:center;word-break:break-word;background-color:var(--calcite-block-section-background-color, transparent)}.toggle-container .toggle--switch__content{display:flex;flex:1 1 auto;align-items:center}.toggle-container .icon--end,.toggle-container .icon--start,.toggle-container .chevron-icon{display:flex;align-items:center;color:var(--calcite-block-section-text-color, var(--calcite-color-text-3))}.toggle-container .icon--end:hover,.toggle-container .icon--start:hover,.toggle-container .chevron-icon:hover{color:var(--calcite-block-section-text-color-hover, var(--calcite-color-text-1))}.status-icon{display:flex;align-items:center}.status-icon.valid{color:var(--calcite-color-status-success)}.status-icon.invalid{color:var(--calcite-color-status-danger)}:host([hidden]){display:none}[hidden]{display:none}`,a=class a extends u{constructor(){super(...arguments),this.messages=y(),this.open=!1,this.toggleDisplay="button",this.calciteBlockSectionToggle=m({cancelable:!1})}async setFocus(){await w(this),f(this.el)}async load(){}loaded(){}handleHeaderKeyDown(e){k(e.key)&&(this.toggleSection(),e.preventDefault(),e.stopPropagation())}toggleSection(){this.open=!this.open,this.calciteBlockSectionToggle.emit()}renderStatusIcon(){const{status:e}=this,o=d[e]??!1,i={[t.statusIcon]:!0,[t.valid]:e=="valid",[t.invalid]:e=="invalid"};return o?l`<calcite-icon class=${c(i)} .icon=${o} scale=s></calcite-icon>`:null}renderIcon(e){const{iconFlipRtl:o}=this;if(e===void 0)return null;const i=o==="both"||o==="start",s=o==="both"||o==="end",n=e===this.iconStart;return $(n?this.iconStart:this.iconEnd,l`<calcite-icon class=${c(n?t.iconStart:t.iconEnd)} .flipRtl=${n?i:s} .icon=${n?this.iconStart:this.iconEnd} scale=s></calcite-icon>`)}render(){const{messages:e,open:o,text:i,toggleDisplay:s}=this,n=o?d.menuOpen:d.menuClosed,h=o?e.collapse:e.expand,p=s==="switch"?l`<div class=${c({[t.toggleContainer]:!0})}><div aria-controls=${r.content} .ariaExpanded=${o} class=${c({[t.toggle]:!0,[t.toggleSwitch]:!0})} id=${r.toggle} @click=${this.toggleSection} @keydown=${this.handleHeaderKeyDown} role=button tabindex=0 title=${h??x}>${this.renderIcon(this.iconStart)}<div class=${c(t.toggleSwitchContent)}><span class=${c(t.toggleSwitchText)}>${i}</span></div>${this.renderIcon(this.iconEnd)}${this.renderStatusIcon()}<calcite-switch .checked=${o} class=${c(t.switch)} inert .label=${h} scale=s></calcite-switch></div></div>`:l`<div class=${c({[t.toggleContainer]:!0})}><button aria-controls=${r.content} .ariaExpanded=${o} class=${c({[t.sectionHeader]:!0,[t.toggle]:!0})} id=${r.toggle} @click=${this.toggleSection}>${this.renderIcon(this.iconStart)}<span class=${c(t.sectionHeaderText)}>${i}</span>${this.renderIcon(this.iconEnd)}${this.renderStatusIcon()}<calcite-icon class=${c(t.chevronIcon)} .icon=${n} scale=s></calcite-icon></button></div>`;return l`${p}<section aria-labelledby=${r.toggle} class=${c(t.content)} .hidden=${!o} id=${r.content}><slot></slot></section>`}};a.properties={iconEnd:3,iconFlipRtl:3,iconStart:3,messageOverrides:0,open:7,status:3,text:1,toggleDisplay:3},a.styles=S;let g=a;v("calcite-block-section",g);export{g as BlockSection};
