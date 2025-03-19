import"./index-CjrYEQXz.js";import"./index-73bQemcW.js";import"./index-BtF7Kdcs.js";import{D as w,S as m}from"./jsxFactory-CLjKarlq.js";import{n as I}from"./ref-Ccn4I0kT.js";import{i as x}from"./keyed-CdPY5MOf.js";import{c as S,a as C,e as y}from"./core-zHisM37C.js";import{i as O,L as k,c as T,x as p,s as b}from"./index-tefRSezt.js";import{S as f,b as B,s as $,x as H}from"./dom--xxYYVQF.js";import{b as g}from"./observers-BdozwIHb.js";import{s as W}from"./useT9n-CJAswmP1.js";import"./guid-ejniuQmw.js";import"./Accessor-BHnuXKD2.js";import"./intl-Do3GEEJ7.js";import"./Promise-CmQqe-ke.js";import"./cast-BA_-jlhc.js";import"./JSONSupport-CGdeqxpk.js";import"./Evented-DCWccWGU.js";import"./reactiveUtils-BR0C1Kq4.js";import"./SimpleObservable-7oieNGD8.js";import"./uuid-Cl5lrJ4c.js";import"./static-g4FJ4v8I.js";import"./form-B15gmg4q.js";import"./interactive-B8siLByk.js";import"./label-BLne9qNB.js";import"./loadable-DOQnSSjG.js";import"./component-CFGnHAqh.js";import"./directive-helpers-C0aXnQdc.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const u={chevronRight:"chevron-right",chevronLeft:"chevron-left"},o={container:"tab-nav",containerHasEndTabTitleOverflow:"tab-nav--end-overflow",containerHasStartTabTitleOverflow:"tab-nav--start-overflow",scrollButton:"scroll-button",scrollButtonContainer:"scroll-button-container",scrollBackwardContainerButton:"scroll-button-container--backward",scrollForwardContainerButton:"scroll-button-container--forward",tabTitleSlotWrapper:"tab-titles-slot-wrapper"},E=O`:host{--calcite-internal-tab-nav-gradient-start-side: left;--calcite-internal-tab-nav-gradient-end-side: right;position:relative;display:flex}.scale-s{--calcite-internal-tab-nav-scroller-button-width: 24px;min-block-size:1.5rem}.scale-m{--calcite-internal-tab-nav-scroller-button-width: 32px;min-block-size:2rem}.scale-l{--calcite-internal-tab-nav-scroller-button-width: 44px;min-block-size:2.75rem}.calcite--rtl{--calcite-internal-tab-nav-gradient-start-side: right;--calcite-internal-tab-nav-gradient-end-side: left}.tab-nav--start-overflow .tab-titles-slot-wrapper{mask-image:linear-gradient(to var(--calcite-internal-tab-nav-gradient-end-side),transparent,transparent var(--calcite-internal-tab-nav-scroller-button-width),white var(--calcite-internal-tab-nav-scroller-button-width),white 51%)}.tab-nav--end-overflow .tab-titles-slot-wrapper{mask-image:linear-gradient(to var(--calcite-internal-tab-nav-gradient-start-side),transparent,transparent var(--calcite-internal-tab-nav-scroller-button-width),white var(--calcite-internal-tab-nav-scroller-button-width),white 51%)}.tab-nav--start-overflow.tab-nav--end-overflow .tab-titles-slot-wrapper{mask-image:linear-gradient(to var(--calcite-internal-tab-nav-gradient-end-side),transparent,transparent var(--calcite-internal-tab-nav-scroller-button-width),white var(--calcite-internal-tab-nav-scroller-button-width),white 51%,transparent 51%),linear-gradient(to var(--calcite-internal-tab-nav-gradient-start-side),transparent,transparent var(--calcite-internal-tab-nav-scroller-button-width),white var(--calcite-internal-tab-nav-scroller-button-width),white 51%,transparent 51%)}.tab-nav::-webkit-scrollbar{display:none;-ms-overflow-style:none;scrollbar-width:none}:host([layout=center]) ::slotted(calcite-tab-title){display:flex;flex-grow:1;flex-shrink:0;min-inline-size:auto;white-space:nowrap}:host([layout=center]) ::slotted(calcite-tab-title[selected]){overflow:unset}:host(:not([bordered])) .scale-l{--calcite-internal-tab-nav-gap: var(--calcite-spacing-xxl)}:host(:not([bordered])) .scale-m{--calcite-internal-tab-nav-gap: var(--calcite-spacing-xl)}:host(:not([bordered])) .scale-s{--calcite-internal-tab-nav-gap: var(--calcite-spacing-lg)}:host(:not([bordered])) .tab-titles-slot-wrapper{gap:var(--calcite-internal-tab-nav-gap)}:host([layout=center]:not([bordered])) .tab-titles-slot-wrapper{padding-inline:var(--calcite-spacing-xl)}.tab-nav,.tab-titles-slot-wrapper{display:flex;inline-size:100%;justify-content:flex-start;overflow:hidden;white-space:nowrap}.scroll-button-container{position:absolute;inset-block:0px}.scroll-button-container calcite-button{--calcite-offset-invert-focus: 1;--calcite-color-text-1: var(--calcite-color-text-3);block-size:100%}.scroll-button-container calcite-button:hover{--calcite-color-text-1: unset;--calcite-color-foreground-1: var(--calcite-color-transparent-hover);--calcite-color-foreground-3: var(--calcite-color-transparent)}.scroll-button-container--forward{inset-inline-end:0;z-index:var(--calcite-z-index)}.scroll-button-container--backward{inset-inline-start:0;z-index:var(--calcite-z-index)}:host(:not([bordered])) .scroll-button-container--backward:before,:host(:not([bordered])) .scroll-button-container--forward:before{background-color:var(--calcite-color-border-3);content:"";inline-size:var(--calcite-border-width-sm);inset-block-start:var(--calcite-border-width-md);inset-block-end:var(--calcite-border-width-md);position:absolute}:host(:not([bordered])) .scroll-button-container--backward:before{inset-inline-end:0}:host(:not([bordered])) .scroll-button-container--forward:before{inset-inline-start:0}:host([hidden]){display:none}[hidden]{display:none}`,h=class h extends k{constructor(){super(),this.effectiveDir="ltr",this.lastScrollWheelAxis="x",this.resizeObserver=g("resize",()=>{this.updateScrollingState()}),this.hasOverflowingEndTabTitle=!1,this.hasOverflowingStartTabTitle=!1,this.bordered=!1,this.layout="inline",this.messages=W(),this.position="bottom",this.scale="m",this.selectedTitle=null,this.calciteInternalTabChange=T({cancelable:!1}),this.calciteInternalTabNavSlotChange=T(),this.calciteTabChange=T({cancelable:!1}),this.listen("calciteInternalTabsFocusPrevious",this.focusPreviousTabHandler),this.listen("calciteInternalTabsFocusNext",this.focusNextTabHandler),this.listen("calciteInternalTabsFocusFirst",this.focusFirstTabHandler),this.listen("calciteInternalTabsFocusLast",this.focusLastTabHandler),this.listen("calciteInternalTabsActivate",this.internalActivateTabHandler),this.listen("calciteTabsActivate",this.activateTabHandler),this.listen("calciteInternalTabsClose",this.internalCloseTabHandler),this.listen("calciteInternalTabTitleRegister",this.updateTabTitles),this.listenOn(document.body,"calciteInternalTabChange",this.globalInternalTabChangeHandler)}get enabledTabTitles(){return f(this.el,"calcite-tab-title:not([disabled])").filter(t=>!t.closed)}get scrollerButtonWidth(){const{scale:t}=this;return parseInt(t==="s"?S:t==="m"?C:y)}get tabTitles(){return f(this.el,"calcite-tab-title")}connectedCallback(){var t;super.connectedCallback(),this.parentTabsEl=this.el.closest("calcite-tabs"),(t=this.resizeObserver)==null||t.observe(this.el)}async load(){const t=`calcite-tab-nav-${this.storageId}`;if(localStorage&&this.storageId&&localStorage.getItem(t)){const e=JSON.parse(localStorage.getItem(t));this.selectedTabId=e}}willUpdate(t){t.has("selectedTitle")&&(this.hasUpdated||this.selectedTitle!==null)&&this.calciteInternalTabChange.emit({tab:this.selectedTabId}),t.has("selectedTabId")&&this.selectedTabIdChanged();const{parentTabsEl:e}=this;this.layout=e==null?void 0:e.layout,this.bordered=e==null?void 0:e.bordered,this.effectiveDir=B(this.el)}loaded(){this.scrollTabTitleIntoView(this.selectedTitle,"instant"),this.tabTitles.length&&this.tabTitles.every(t=>!t.selected)&&!this.selectedTabId&&this.tabTitles[0].getTabIdentifier().then(t=>{this.calciteInternalTabChange.emit({tab:t})})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.disconnect()}focusPreviousTabHandler(t){this.handleTabFocus(t,t.target,"previous")}focusNextTabHandler(t){this.handleTabFocus(t,t.target,"next")}focusFirstTabHandler(t){this.handleTabFocus(t,t.target,"first")}focusLastTabHandler(t){this.handleTabFocus(t,t.target,"last")}internalActivateTabHandler(t){const e=t.target;this.selectedTabId=t.detail.tab?t.detail.tab:this.getIndexOfTabTitle(e),t.stopPropagation(),this.selectedTitle=e,this.scrollTabTitleIntoView(e)}scrollTabTitleIntoView(t,e="smooth"){t&&requestAnimationFrame(()=>{const i=this.effectiveDir==="ltr",a=this.tabTitleContainerEl,r=a.getBoundingClientRect(),l=t.getBoundingClientRect(),s=a.scrollLeft,n=i?this.hasOverflowingStartTabTitle:this.hasOverflowingEndTabTitle,c=i?this.hasOverflowingEndTabTitle:this.hasOverflowingStartTabTitle;if(l.left<r.left+(n?this.scrollerButtonWidth:0)){const d=s+(l.left-r.left)-this.scrollerButtonWidth;a.scrollTo({left:d,behavior:e})}else if(l.right>r.right-(c?this.scrollerButtonWidth:0)){const d=s+(l.right-r.right)+this.scrollerButtonWidth;a.scrollTo({left:d,behavior:e})}})}activateTabHandler(t){this.calciteTabChange.emit(),t.stopPropagation()}internalCloseTabHandler(t){const e=t.target;this.handleTabTitleClose(e),t.stopPropagation()}async updateTabTitles(t){t.target.selected&&(this.selectedTabId=t.detail,this.selectedTitle=await this.getTabTitleById(this.selectedTabId))}globalInternalTabChangeHandler(t){this.syncId&&t.target!==this.el&&t.target.syncId===this.syncId&&this.selectedTabId!==t.detail.tab&&(this.selectedTabId=t.detail.tab),t.stopPropagation()}async selectedTabIdChanged(){await this.componentOnReady(),localStorage&&this.storageId&&this.selectedTabId!==void 0&&this.selectedTabId!==null&&localStorage.setItem(`calcite-tab-nav-${this.storageId}`,JSON.stringify(this.selectedTabId)),this.calciteInternalTabChange.emit({tab:this.selectedTabId})}onTabTitleWheel(t){t.preventDefault();const{deltaX:e,deltaY:i}=t,a=Math.abs(e),r=Math.abs(i);let l;a===r?l=this.lastScrollWheelAxis==="x"?e:i:a>r?(l=e,this.lastScrollWheelAxis="x"):(l=i,this.lastScrollWheelAxis="y");const s=(this.effectiveDir==="rtl"?-1:1)*l;t.currentTarget.scrollBy(s,0)}onSlotChange(t){var i;(i=this.intersectionObserver)==null||i.disconnect();const e=$(t,"calcite-tab-title");e.forEach(a=>{var r;(r=this.intersectionObserver)==null||r.observe(a)}),this.calciteInternalTabNavSlotChange.emit(e)}storeTabTitleWrapperRef(t){t&&(this.tabTitleContainerEl=t,this.intersectionObserver=g("intersection",()=>this.updateScrollingState(),{root:t,threshold:[0,.5,1]}))}updateScrollingState(){const t=this.tabTitleContainerEl;if(!t)return;let e,i;const a=t.scrollLeft,r=t.clientWidth,l=t.scrollWidth;this.effectiveDir==="ltr"?(e=a>0,i=a+r<l):(e=a<0,i=a!==-(l-r)),this.hasOverflowingStartTabTitle=e,this.hasOverflowingEndTabTitle=i}scrollToTabTitles(t){requestAnimationFrame(()=>{const e=this.tabTitleContainerEl,i=e.getBoundingClientRect(),a=Array.from(this.el.querySelectorAll("calcite-tab-title")),{effectiveDir:r}=this;t==="forward"&&a.reverse();let l=null;if(a.forEach(s=>{const n=s.getBoundingClientRect(),c=i.x+i.width,d=n.x+n.width;t==="forward"&&r==="ltr"||t==="backward"&&r==="rtl"?(n.x>c||d>c&&n.x>i.x)&&(l=s):(d<i.x||d<c&&n.x<i.x)&&(l=s)}),l){const{scrollerButtonWidth:s}=this,n=t==="forward"&&r==="ltr"||t==="backward"&&r==="rtl"?-s:l.offsetWidth-e.clientWidth+s,c=l.offsetLeft+n;e.scrollTo({left:c,behavior:"smooth"})}})}scrollToNextTabTitles(){this.scrollToTabTitles("forward")}scrollToPreviousTabTitles(){this.scrollToTabTitles("backward")}handleTabFocus(t,e,i){const a=H(this.enabledTabTitles,e,i);this.scrollTabTitleIntoView(a,"instant"),t.stopPropagation()}getIndexOfTabTitle(t,e=this.tabTitles){return e.indexOf(t)}onTabTitleScroll(){this.updateScrollingState()}async getTabTitleById(t){return Promise.all(this.tabTitles.map(e=>e.getTabIdentifier())).then(e=>this.tabTitles[e.indexOf(t)])}handleTabTitleClose(t){const{tabTitles:e}=this,i=t.selected,a=e.reduce((l,s,n)=>s.closed?l:[...l,n],[]),r=a.length;if(r===1&&e[a[0]].closable)e[a[0]].closable=!1,this.selectedTabId=a[0],i&&e[a[0]].activateTab();else if(r>1){const l=e.findIndex(n=>n===t),s=a.find(n=>n>l);this.selectedTabId===l&&(this.selectedTabId=s||r-1,e[this.selectedTabId].activateTab())}requestAnimationFrame(()=>{e[this.selectedTabId].focus()})}render(){return this.el.role="tablist",p`<div class=${b({[o.container]:!0,[o.containerHasStartTabTitleOverflow]:!!this.hasOverflowingStartTabTitle,[o.containerHasEndTabTitleOverflow]:!!this.hasOverflowingEndTabTitle,[`scale-${this.scale}`]:!0,[`position-${this.position}`]:!0,[w.rtl]:this.effectiveDir==="rtl"})}>${this.renderScrollButton("start")}<div class=${b({[o.tabTitleSlotWrapper]:!0})} @scroll=${this.onTabTitleScroll} @wheel=${this.onTabTitleWheel} ${I(this.storeTabTitleWrapperRef)}><slot @slotchange=${this.onSlotChange}></slot></div>${this.renderScrollButton("end")}</div>`}renderScrollButton(t){const{bordered:e,messages:i,hasOverflowingStartTabTitle:a,hasOverflowingEndTabTitle:r,scale:l}=this,s=t==="end";return x(t,p`<div class=${b({[o.scrollButtonContainer]:!0,[o.scrollBackwardContainerButton]:!s,[o.scrollForwardContainerButton]:s})} .hidden=${s&&!r||!s&&!a}><calcite-button .appearance=${e?"outline-fill":"transparent"} .ariaLabel=${s?i.nextTabTitles:i.previousTabTitles} class=${b({[o.scrollButton]:!0})} icon-flip-rtl=both .iconStart=${s?u.chevronRight:u.chevronLeft} kind=neutral @click=${s?this.scrollToNextTabTitles:this.scrollToPreviousTabTitles} .scale=${l} tabindex=-1></calcite-button></div>`)}};h.properties={hasOverflowingEndTabTitle:16,hasOverflowingStartTabTitle:16,selectedTabId:16,bordered:7,layout:3,messageOverrides:0,position:1,scale:1,selectedTitle:0,storageId:3,syncId:3},h.styles=E;let v=h;m("calcite-tab-nav",v);export{v as TabNav};
