import"./index-DwIhxbHs.js";import"./index-fFnlo_g2.js";import"./index-DWeq-ojO.js";import"./index-pyEU_klK.js";import{S as y}from"./jsxFactory-Cnml7uXM.js";import{n as d}from"./ref-D9wHsL_T.js";import{c as C}from"./repeat-B6KIBwLP.js";import{L as k,v as A,c,q as g,s as r,E as s,x as m,i as E}from"./index-4eY77cms.js";import{o as v,f as T,c as u,Y as w,s as b}from"./floating-ui-IixYHfbQ.js";import{m as O,p as D}from"./interactive-DTzfFku4.js";import{s as z}from"./openCloseComponent-nqWrSaIH.js";import{v as B,T as P}from"./label-CHHpnzD0.js";import{D as V,O as F,W as M,$ as S,B as H}from"./form-BzoUrXC7.js";import{u as x}from"./dom-DEluURzl.js";import{i as L}from"./guid-ejniuQmw.js";import{s as U}from"./useT9n-C1Hrfc-A.js";import{m as R}from"./Validation-BYp9DS84.js";import{b as $}from"./observers-Co4E8E8j.js";import{d as q}from"./debounce-DbkufipY.js";import{e as G}from"./escapeRegExp-CdLjXKbf.js";import"./live-D7NQ-TrC.js";import"./directive-helpers-DaBykg1t.js";import"./keyed-CU1C-h1n.js";import"./static-DLD4WjLv.js";import"./key-CZcQa38B.js";import"./loadable-XBvaWFYY.js";import"./locale-CXx8I9ox.js";import"./component-CBVlbUuE.js";import"./input-DI9tZAPS.js";import"./Accessor-BmwT4B0c.js";import"./intl-Duiy0OzY.js";import"./Promise-DfET-uns.js";import"./cast-CsZslgGN.js";import"./JSONSupport-DcrLLGjL.js";import"./Evented-Dw4_VOGn.js";import"./reactiveUtils-XM7cS2OP.js";import"./SimpleObservable-CvOkykwM.js";import"./uuid-Cl5lrJ4c.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const W=E`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:block}.input-container{position:relative;display:flex;flex:1 1 auto;flex-wrap:nowrap}.input{width:100%;--calcite-input-prefix-size: var(--calcite-autocomplete-input-prefix-size);--calcite-input-suffix-size: var(--calcite-autocomplete-input-suffix-size);--calcite-input-background-color: var(--calcite-autocomplete-input-background-color);--calcite-input-border-color: var(--calcite-autocomplete-input-border-color);--calcite-input-corner-radius: var(--calcite-autocomplete-input-corner-radius);--calcite-input-shadow: var(--calcite-autocomplete-input-shadow);--calcite-input-icon-color: var(--calcite-autocomplete-input-icon-color);--calcite-input-text-color: var(--calcite-autocomplete-input-text-color);--calcite-input-placeholder-text-color: var(--calcite-autocomplete-input-placeholder-text-color);--calcite-input-actions-background-color: var(--calcite-autocomplete-input-actions-background-color);--calcite-input-actions-background-color-hover: var(--calcite-autocomplete-input-actions-background-color-hover);--calcite-input-actions-background-color-press: var(--calcite-autocomplete-input-actions-background-color-press);--calcite-input-actions-icon-color: var(--calcite-autocomplete-input-actions-icon-color);--calcite-input-actions-icon-color-hover: var(--calcite-autocomplete-input-actions-icon-color-hover);--calcite-input-actions-icon-color-press: var(--calcite-autocomplete-input-actions-icon-color-press);--calcite-input-loading-background-color: var(--calcite-autocomplete-input-loading-background-color);--calcite-input-loading-fill-color: var(--calcite-autocomplete-input-loading-fill-color);--calcite-input-prefix-background-color: var(--calcite-autocomplete-input-prefix-background-color);--calcite-input-prefix-text-color: var(--calcite-autocomplete-input-prefix-text-color);--calcite-input-suffix-background-color: var(--calcite-autocomplete-input-suffix-background-color);--calcite-input-suffix-text-color: var(--calcite-autocomplete-input-suffix-text-color)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.content-container{box-sizing:border-box;width:100%}.floating-ui-container{--calcite-floating-ui-z-index: var(--calcite-z-index-dropdown);inline-size:max-content;display:none;inset-block-start:0;left:0;z-index:var(--calcite-floating-ui-z-index)}.floating-ui-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset,left,opacity;opacity:0;box-shadow:0 0 16px #00000029;z-index:var(--calcite-z-index);border-radius:.25rem}.floating-ui-container[data-placement^=bottom] .calcite-floating-ui-anim{inset-block-start:-5px}.floating-ui-container[data-placement^=top] .calcite-floating-ui-anim{inset-block-start:5px}.floating-ui-container[data-placement^=left] .calcite-floating-ui-anim{left:5px}.floating-ui-container[data-placement^=right] .calcite-floating-ui-anim{left:-5px}.floating-ui-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;inset-block-start:0;left:0}.content-container .calcite-floating-ui-anim{max-height:45vh;width:100%;overflow-y:auto;color:var(--calcite-autocomplete-text-color, var(--calcite-color-text-1));background-color:var(--calcite-autocomplete-background-color, var(--calcite-color-foreground-1));border-radius:var(--calcite-autocomplete-corner-radius, var(--calcite-corner-radius-round))}.content--hidden{display:none}@media (forced-colors: active){.floating-ui-container--active{border:1px solid canvasText}}.screen-readers-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:.5rem}:host([scale=s]) .validation-container{padding-block-start:.25rem}::slotted(input[slot=hidden-form-input]){margin:0!important;opacity:0!important;outline:none!important;padding:0!important;position:absolute!important;inset:0!important;transform:none!important;-webkit-appearance:none!important;z-index:-1!important}:host([hidden]){display:none}[hidden]{display:none}`,I={contentBottom:"content-bottom",contentTop:"content-top"},l={inputContainer:"input-container",input:"input",contentContainer:"content-container",contentAnimation:"content-animation",content:"content",contentHidden:"content--hidden",floatingUIContainer:"floating-ui-container",floatingUIContainerActive:"floating-ui-container--active",screenReadersOnly:"screen-readers-only"},K={validationMessage:"autocompleteValidationMessage"},Y="calcite-autocomplete-item-group",J="calcite-autocomplete-item",h=class h extends k{constructor(){super(),this.guid=L(),this.attributeWatch=A(["autofocus","enterkeyhint","inputmode"],this.handleGlobalAttributesChanged),this.inputId=`autocomplete-input-${this.guid}`,this.listId=`autocomplete-list-${this.guid}`,this.messages=U(),this.transitionProp="opacity",this.activeDescendant="",this.activeIndex=-1,this.hasContentBottom=!1,this.hasContentTop=!1,this.items=[],this.groups=[],this.alignment="start",this.disabled=!1,this.iconFlipRtl=!1,this.loading=!1,this.open=!1,this.overlayPositioning="absolute",this.placement=v,this.readOnly=!1,this.required=!1,this.scale="m",this.status="idle",this.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1},this.value="",this.calciteAutocompleteBeforeClose=c({cancelable:!1}),this.calciteAutocompleteBeforeOpen=c({cancelable:!1}),this.calciteAutocompleteChange=c({cancelable:!1}),this.calciteAutocompleteClose=c({cancelable:!1}),this.calciteAutocompleteOpen=c({cancelable:!1}),this.calciteAutocompleteTextChange=c({cancelable:!1}),this.calciteAutocompleteTextInput=c({cancelable:!1}),this.mutationObserver=$("mutation",()=>this.getAllItemsDebounced()),this.resizeObserver=$("resize",()=>{this.setFloatingElSize()}),this.getAllItemsDebounced=q(this.getAllItems,0),this.listenOn(document,"click",this.documentClickHandler),this.listen("calciteInternalAutocompleteItemSelect",this.handleInternalAutocompleteItemSelect)}get isOpen(){return this.open&&(this.hasContentTop||this.hasContentBottom||this.items.length>0)}get enabledItems(){return this.items.filter(t=>!t.disabled)}async reposition(t=!1){const{floatingEl:e,referenceEl:n,placement:i,overlayPositioning:o,flipPlacements:a}=this;return T(this,{floatingEl:e,referenceEl:n,overlayPositioning:o,placement:i,flipPlacements:a,type:"menu"},t)}async scrollContentTo(t){var e;(e=this.transitionEl)==null||e.scrollTo(t)}async selectText(){return this.referenceEl.selectText()}async setFocus(){return this.referenceEl.setFocus()}connectedCallback(){var t;super.connectedCallback(),(t=this.mutationObserver)==null||t.observe(this.el,{childList:!0,subtree:!0}),B(this),V(this),this.defaultInputValue=this.inputValue||"",this.getAllItemsDebounced(),u(this)}async load(){this.getAllItemsDebounced()}willUpdate(t){t.has("disabled")&&(this.hasUpdated||this.disabled!==!1)&&this.handleDisabledChange(this.disabled),t.has("flipPlacements")&&this.reposition(!0),t.has("open")&&(this.hasUpdated||this.open!==!1)&&this.openHandler(),t.has("overlayPositioning")&&(this.hasUpdated||this.overlayPositioning!=="absolute")&&this.reposition(!0),t.has("placement")&&(this.hasUpdated||this.placement!==v)&&this.reposition(!0);let e=!1;t.has("inputValue")&&(this.hasUpdated||this.inputValue)&&(this.inputValueMatchPattern=this.inputValue&&new RegExp(`(${G(this.inputValue)})`,"i"),this.updateItems(),this.updateGroups(),e=!0),!e&&t.has("scale")&&(this.hasUpdated||this.scale!=="m")&&(this.updateItems(),this.updateGroups(),e=!0),!e&&t.has("activeIndex")&&(this.hasUpdated||this.activeIndex!==-1)&&this.updateItems()}updated(){O(this)}loaded(){F(this,this.value||""),this.defaultInputValue=this.inputValue||"",u(this)}disconnectedCallback(){var t,e;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect(),(e=this.resizeObserver)==null||e.disconnect(),P(this),M(this),w(this)}setFloatingElSize(){const{referenceEl:t,floatingEl:e}=this;!t||!e||(e.style.inlineSize=`${t.clientWidth}px`)}handleGlobalAttributesChanged(){this.requestUpdate()}handleDisabledChange(t){t||(this.open=!1)}openHandler(){if(z(this),this.open||(this.activeIndex=-1),this.disabled){this.open=!1;return}this.setFloatingElSize(),this.reposition(!0)}async documentClickHandler(t){this.disabled||t.composedPath().includes(this.el)||(this.open=!1)}async handleInternalAutocompleteItemSelect(t){this.value=t.target.value,t.stopPropagation(),this.emitChange(),await this.setFocus(),this.open=!1}onLabelClick(){this.setFocus()}onFormReset(){this.inputValue=this.defaultInputValue}onBeforeOpen(){this.calciteAutocompleteBeforeOpen.emit()}onOpen(){this.calciteAutocompleteOpen.emit()}onBeforeClose(){this.calciteAutocompleteBeforeClose.emit()}onClose(){this.calciteAutocompleteClose.emit()}emitChange(){this.calciteAutocompleteChange.emit()}updateGroups(){this.groups.forEach((t,e,n)=>{t.scale=this.scale,e===0&&(t.disableSpacing=!0);const i=n[e+1];i&&(i.disableSpacing=t.children.length===0)})}updateItems(){let t=null;this.items.forEach(e=>{e.scale=this.scale,e.inputValueMatchPattern=this.inputValueMatchPattern}),this.enabledItems.forEach((e,n)=>{const i=n===this.activeIndex;i&&(t=e.guid),e.active=i}),this.activeDescendant=t}handleInputFocus(){this.open=!0}handleContentTopSlotChange(t){this.hasContentTop=x(t)}handleContentBottomSlotChange(t){this.hasContentBottom=x(t)}getAllItems(){const{el:t}=this;this.groups=Array.from(t.querySelectorAll(Y)),this.items=Array.from(t.querySelectorAll(J)),this.updateItems(),this.updateGroups()}setReferenceEl(t){var e;this.referenceEl=t,t&&((e=this.resizeObserver)==null||e.observe(t),u(this))}keyDownHandler(t){const{defaultPrevented:e,key:n}=t;if(e)return;const{open:i,activeIndex:o,enabledItems:a}=this,p=a.length&&o>-1?a[o]:null;switch(n){case"Escape":i&&(this.open=!1,t.preventDefault());break;case"Tab":this.open=!1;break;case"Enter":i&&p?(this.value=p.value,this.emitChange(),this.open=!1,t.preventDefault()):t.defaultPrevented||S(this)&&t.preventDefault();break;case"ArrowDown":a.length&&(this.open=!0,this.activeIndex=o!==-1?Math.min(o+1,a.length-1):0,this.scrollToActiveItem(),t.preventDefault());break;case"ArrowUp":a.length&&(this.open=!0,this.activeIndex=o!==-1?Math.max(o-1,0):a.length-1,this.scrollToActiveItem(),t.preventDefault());break;case"Home":a.length&&(this.open=!0,this.activeIndex=0,this.scrollToActiveItem(),t.preventDefault());break;case"End":a.length&&(this.open=!0,this.activeIndex=a.length-1,this.scrollToActiveItem(),t.preventDefault());break}}scrollToActiveItem(){var t;(t=this.enabledItems[this.activeIndex])==null||t.scrollIntoView({block:"nearest"})}changeHandler(t){t.stopPropagation(),this.inputValue=t.target.value,this.calciteAutocompleteTextChange.emit()}inputClickHandler(t){t.defaultPrevented||(this.open=!0)}inputHandler(t){t.stopPropagation(),this.inputValue=t.target.value,this.calciteAutocompleteTextInput.emit()}setFloatingEl(t){this.floatingEl=t,u(this)}setTransitionEl(t){this.transitionEl=t}render(){const{disabled:t,listId:e,inputId:n,isOpen:i}=this,o=this.el.autofocus,a=this.el.enterKeyHint,p=this.el.inputMode;return D({disabled:t,children:m`<div class=${r(l.inputContainer)}><calcite-input .alignment=${this.alignment} aria-activedescendant=${this.activeDescendant??s} aria-controls=${e??s} aria-owns=${e??s} aria-autocomplete=list .ariaExpanded=${i} aria-haspopup=listbox .autocomplete=${this.autocomplete} .autofocus=${o} class=${r(l.input)} clearable .disabled=${t} enterkeyhint=${a??s} .form=${this.form} .icon=${this.icon??!0} .iconFlipRtl=${this.iconFlipRtl} id=${n??s} inputmode=${p??s} .label=${this.label} .loading=${this.loading} .maxLength=${this.maxLength} .messageOverrides=${this.messages} .minLength=${this.minLength} .name=${this.name} @click=${this.inputClickHandler} @keydown=${this.keyDownHandler} @calciteInputChange=${this.changeHandler} @calciteInputInput=${this.inputHandler} @calciteInternalInputFocus=${this.handleInputFocus} .pattern=${this.pattern} .placeholder=${this.placeholder} .prefixText=${this.prefixText} .readOnly=${this.readOnly} role=combobox .scale=${this.scale} .status=${this.status} .suffixText=${this.suffixText} type=search .value=${this.inputValue} ${d(this.setReferenceEl)}></calcite-input>${this.renderListBox()}<div class=${r({[l.contentContainer]:!0,[l.floatingUIContainer]:!0,[l.floatingUIContainerActive]:i})} ${d(this.setFloatingEl)}><div class=${r({[l.contentAnimation]:!0,[b.animation]:!0,[b.animationActive]:i})} ${d(this.setTransitionEl)}><div class=${r({[l.content]:!0,[l.contentHidden]:!i})}><slot name=${I.contentTop} @slotchange=${this.handleContentTopSlotChange}></slot><slot aria-hidden=true></slot><slot name=${I.contentBottom} @slotchange=${this.handleContentBottomSlotChange}></slot></div></div></div></div>${H({component:this})}${this.validationMessage&&this.status==="invalid"?R({icon:this.validationIcon,id:K.validationMessage,message:this.validationMessage,scale:this.scale,status:this.status}):null}`})}renderListBox(){return m`<ul aria-labelledby=${this.inputId??s} class=${r(l.screenReadersOnly)} id=${this.listId??s} role=listbox tabindex=-1>${this.renderListBoxOptions()}</ul>`}renderListBoxOptions(){return C(this.items.filter(t=>!!(t.label||t.heading)),t=>t.guid,t=>m`<li .ariaDisabled=${t.disabled} .ariaLabel=${t.label} id=${t.guid??s} role=option tabindex=-1>${t.heading}${t.description}</li>`)}};h.properties={activeDescendant:16,activeIndex:16,hasContentBottom:16,hasContentTop:16,items:16,groups:16,isOpen:16,enabledItems:16,alignment:3,autocomplete:0,disabled:7,flipPlacements:0,form:3,icon:[3,{converter:g}],iconFlipRtl:7,inputValue:1,label:1,loading:7,maxLength:11,messageOverrides:0,minLength:11,name:3,open:7,overlayPositioning:3,pattern:1,placeholder:1,placement:3,prefixText:1,readOnly:7,required:7,scale:3,status:3,suffixText:1,validationIcon:[3,{converter:g}],validationMessage:1,validity:0,value:1},h.styles=W;let f=h;y("calcite-autocomplete",f);export{f as Autocomplete};
