import"./index-73bQemcW.js";import"./index-Ch_sYKt7.js";import"./index-BnH8ZLT5.js";import{S as j,M as N}from"./jsxFactory-CLjKarlq.js";import{i as b}from"./keyed-CdPY5MOf.js";import{l as X}from"./live-BIBBLA6F.js";import{t as Y}from"./core-zHisM37C.js";import{i as J,L as K,c as f,q as Q,x as d,s as r,E as u}from"./index-tefRSezt.js";import{e as Z,n as v}from"./ref-Ccn4I0kT.js";import{y as ee}from"./filter-Cs9GmjDF.js";import{v as C,c as te}from"./dom--xxYYVQF.js";import{o as ie,f as se,c as $,Y as le,l as ae,X as oe,s as H}from"./floating-ui-BkLjHVN3.js";import{D as ne,O as ce,W as re,$ as he,B as de}from"./form-B15gmg4q.js";import{i as pe}from"./guid-ejniuQmw.js";import{m as me,p as ue}from"./interactive-B8siLByk.js";import{v as be,T as ge,I as fe}from"./label-BLne9qNB.js";import{r as ve,t as xe}from"./loadable-DOQnSSjG.js";import{b as A}from"./observers-BdozwIHb.js";import{s as Ie}from"./openCloseComponent-dw_x67D_.js";import{g as F,s as E}from"./component-CFGnHAqh.js";import{m as Ce}from"./Validation-O1TFEQW-.js";import{s as $e}from"./useT9n-CJAswmP1.js";import{h as O,I as x,p as c,O as y,f as T,g as ye,c as M,i as V,m as z}from"./utils3-CmcdYP7V.js";import{d as we}from"./debounce-DbkufipY.js";import{e as Se}from"./escapeRegExp-UP7ghjt8.js";import"./Accessor-BHnuXKD2.js";import"./intl-Do3GEEJ7.js";import"./Promise-CmQqe-ke.js";import"./cast-BA_-jlhc.js";import"./JSONSupport-CGdeqxpk.js";import"./Evented-DCWccWGU.js";import"./reactiveUtils-BR0C1Kq4.js";import"./SimpleObservable-7oieNGD8.js";import"./uuid-Cl5lrJ4c.js";import"./key-CZcQa38B.js";import"./directive-helpers-C0aXnQdc.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const G={button:"x-button"},Ee=({disabled:U,key:e,label:t,scale:i})=>b(e,d`<button .ariaLabel=${t} class=${r(G.button)} .disabled=${U} tabindex=-1 type=button><calcite-icon icon=x .scale=${E(i)}></calcite-icon></button>`),ke=J`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([scale=s]) .x-button{inline-size:1rem;block-size:1rem}:host([scale=m]) .x-button{inline-size:1.5rem;block-size:1.5rem}:host([scale=l]) .x-button{inline-size:2rem;block-size:2rem}.x-button{margin:0;display:flex;cursor:pointer;appearance:none;align-content:center;align-items:center;justify-content:center;align-self:center;border-width:2px;background-color:transparent;color:var(--calcite-color-text-3);outline-color:transparent;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;border-radius:50%;border-color:transparent;background-color:var(--calcite-color-foreground-2)}.x-button:active,.x-button:hover{color:var(--calcite-color-text-1);background-color:var(--calcite-color-foreground-3)}.x-button:active{border-style:solid;border-color:var(--calcite-color-brand)}.x-button calcite-icon{color:inherit}:host([scale=s]){font-size:var(--calcite-font-size--2);--calcite-combobox-item-spacing-unit-l: .5rem;--calcite-combobox-item-spacing-unit-s: .25rem;--calcite-combobox-input-height: 1rem;--calcite-internal-combobox-input-margin-block: calc(.25rem - 1px) }:host([scale=s]) .x-button{margin-inline:.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);--calcite-combobox-item-spacing-unit-l: .75rem;--calcite-combobox-item-spacing-unit-s: .5rem;--calcite-combobox-input-height: 1rem;--calcite-internal-combobox-input-margin-block: calc(.5rem - 1px) }:host([scale=m]) .x-button{margin-inline-end:.75rem}:host([scale=l]){font-size:var(--calcite-font-size-0);--calcite-combobox-item-spacing-unit-l: 1rem;--calcite-combobox-item-spacing-unit-s: .75rem;--calcite-combobox-input-height: 1.5rem;--calcite-internal-combobox-input-margin-block: calc(.625rem - 1px) }:host([scale=l]) .x-button{margin-inline-end:1rem}.wrapper{display:flex;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-1);outline-color:transparent;padding-block:calc(var(--calcite-combobox-item-spacing-unit-s) / 4);padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.wrapper:hover .icon{color:var(--calcite-color-text-1)}:host(:focus-within) .wrapper,.wrapper--active{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host([read-only]) .wrapper{background-color:var(--calcite-color-background)}:host([read-only]) .label{font-weight:var(--calcite-font-weight-medium)}:host([status=invalid]) .wrapper{border-color:var(--calcite-color-status-danger)}:host([status=invalid]:focus-within) .wrapper{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.wrapper--single{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l);cursor:pointer;flex-wrap:nowrap}.grid-input{position:relative;display:flex;flex-grow:1;flex-wrap:wrap;align-items:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0;gap:var(--calcite-combobox-item-spacing-unit-s);margin-inline-end:var(--calcite-combobox-item-spacing-unit-s)}.grid-input.selection-display-fit,.grid-input.selection-display-single{flex-wrap:nowrap;overflow:hidden}.input{flex-grow:1;appearance:none;overflow:hidden;text-overflow:ellipsis;border-style:none;background-color:transparent;padding:0;font-family:inherit;color:var(--calcite-color-text-1);font-size:inherit;block-size:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height);inline-size:100%;margin-block-end:var(--calcite-combobox-item-spacing-unit-s);min-inline-size:4.8125rem}.input:focus{outline:2px solid transparent;outline-offset:2px}.input:placeholder-shown{text-overflow:ellipsis}.input--single{padding:0;margin-block:var(--calcite-internal-combobox-input-margin-block)}.wrapper--active .input-single{cursor:text}.input--hidden{pointer-events:none;width:0px;min-width:0px;opacity:0}.input--icon{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.placeholder-icon{color:var(--calcite-color-text-3)}.input-wrap{display:flex;flex-grow:1;align-items:center}.input-wrap--single{flex:1 1 0%;overflow:hidden}.label{pointer-events:none;max-width:100%;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0;font-weight:var(--calcite-font-weight-normal);block-size:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height)}.label--icon{padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.icon-end,.icon-start{display:flex;cursor:pointer;align-items:center}.icon-end{flex:none}.icon-end .icon{color:var(--calcite-color-text-3)}.floating-ui-container{--calcite-floating-ui-z-index: var(--calcite-z-index-dropdown);inline-size:max-content;display:none;inset-block-start:0;left:0;z-index:var(--calcite-floating-ui-z-index)}.floating-ui-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset,left,opacity;opacity:0;box-shadow:0 0 16px #00000029;z-index:var(--calcite-z-index);border-radius:.25rem}.floating-ui-container[data-placement^=bottom] .calcite-floating-ui-anim{inset-block-start:-5px}.floating-ui-container[data-placement^=top] .calcite-floating-ui-anim{inset-block-start:5px}.floating-ui-container[data-placement^=left] .calcite-floating-ui-anim{left:5px}.floating-ui-container[data-placement^=right] .calcite-floating-ui-anim{left:-5px}.floating-ui-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;inset-block-start:0;left:0}@media (forced-colors: active){.wrapper,.floating-ui-container{border:1px solid canvasText}}.screen-readers-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.list-container{max-height:45vh;overflow-y:auto;background-color:var(--calcite-color-foreground-1);inline-size:var(--calcite-dropdown-width, 100%)}.list{margin:0;display:block;padding:0}.list--hide{height:0px;overflow:hidden}calcite-chip{--calcite-animation-timing: 0}.chip{margin-block:calc(var(--calcite-combobox-item-spacing-unit-s) / 4);max-inline-size:100%}.chip--active{background-color:var(--calcite-color-foreground-3)}.chip--invisible{visibility:hidden;position:absolute}.item{display:block}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:.5rem}:host([scale=s]) .validation-container{padding-block-start:.25rem}::slotted(input[slot=hidden-form-input]){margin:0!important;opacity:0!important;outline:none!important;padding:0!important;position:absolute!important;inset:0!important;transform:none!important;-webkit-appearance:none!important;z-index:-1!important}:host([hidden]){display:none}[hidden]{display:none}::slotted(calcite-combobox-item-group:not(:first-child)){padding-block-start:var(--calcite-combobox-item-spacing-unit-l)}`,P="combobox-item-",L="combobox-chip-",R="combobox-label-",S="combobox-listbox-",B="combobox-input-",w=class w extends K{constructor(){super(),this.filterItems=(()=>{const e=(t,i)=>t&&i.some(({el:s})=>t===s);return we((t,i=!1,s=!0)=>{const l=ee([...this.data,...this.groupData],t,this.effectiveFilterProps),a=this.getItemsAndGroups(),o=t==="";a.forEach(n=>{if(o){n.itemHidden=!1;return}const h=!e(n,l);n.itemHidden=h;const[p,m]=n.ancestors;(e(p,l)||e(m,l))&&(n.itemHidden=!1),h||n.ancestors.forEach(g=>g.itemHidden=!1)}),this.filterTextMatchPattern=this.filterText&&new RegExp(`(${Se(this.filterText)})`,"i"),this.filteredItems=this.getFilteredItems(),this.filteredItems.forEach(n=>{n.filterTextMatchPattern=this.filterTextMatchPattern}),i&&(this.open=this.filterText.trim().length>0&&this.filteredItems.length>0),s&&this.calciteComboboxFilterChange.emit()},N.filter)})(),this._filterText="",this.getSelectedItems=()=>{if(!this.isMulti()){const e=this.items.find(({selected:t})=>t);return e?[e]:[]}return this.items.filter(e=>e.selected&&(this.selectionMode!=="ancestors"||!O(e))).sort((e,t)=>{const i=this.selectedItems.indexOf(e),s=this.selectedItems.indexOf(t);return i>-1&&s>-1?i-s:s-i})},this.groupItems=[],this.guid=pe(),this.ignoreSelectedEventsFlag=!1,this.inputHeight=0,this.internalValueChangeFlag=!1,this.items=[],this.mutationObserver=A("mutation",()=>this.updateItems()),this.onLabelClick=()=>{this.setFocus()},this.transitionProp="opacity",this.placement=ie,this.resizeObserver=A("resize",()=>{this.setMaxScrollerHeight(),this.refreshSelectionDisplay()}),this._selectedItems=[],this.textInput=Z(),this._value=null,this.activeChipIndex=-1,this.activeDescendant="",this.activeItemIndex=-1,this.compactSelectionDisplay=!1,this.selectedHiddenChipsCount=0,this.selectedVisibleChipsCount=0,this.clearDisabled=!1,this.disabled=!1,this.filteredItems=[],this.maxItems=0,this.messages=$e(),this.open=!1,this.overlayPositioning="absolute",this.placeholderIconFlipRtl=!1,this.readOnly=!1,this.required=!1,this.scale="m",this.selectionDisplay="all",this.selectionMode="multiple",this.status="idle",this.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1},this.calciteComboboxBeforeClose=f({cancelable:!1}),this.calciteComboboxBeforeOpen=f({cancelable:!1}),this.calciteComboboxChange=f({cancelable:!1}),this.calciteComboboxChipClose=f({cancelable:!1}),this.calciteComboboxClose=f({cancelable:!1}),this.calciteComboboxFilterChange=f({cancelable:!1}),this.calciteComboboxOpen=f({cancelable:!1}),this.listenOn(document,"click",this.documentClickHandler),this.listen("calciteComboboxItemChange",this.calciteComboboxItemChangeHandler),this.listen("calciteInternalComboboxItemChange",this.calciteInternalComboboxItemChangeHandler),this.listen("click",this.comboboxFocusHandler)}emitComboboxChange(){this.calciteComboboxChange.emit()}get effectiveFilterProps(){return this.filterProps?this.filterProps.filter(e=>e!=="el"):["description","label","metadata","shortHeading","textLabel"]}get showingInlineIcon(){const{placeholderIcon:e,selectionMode:t,selectedItems:i,open:s}=this,l=i[0],a=l==null?void 0:l.icon,o=x(t);return!s&&l?!!a&&o:!!e&&(!l||o)}get filterText(){return this._filterText}set filterText(e){const t=this._filterText;e!==t&&(this._filterText=e,this.filterTextChange(e))}get selectedItems(){return this._selectedItems}set selectedItems(e){const t=this._selectedItems;e!==t&&(this._selectedItems=e,this.selectedItemsHandler())}get value(){return this._value}set value(e){const t=this._value;e!==t&&(this._value=e,this.valueHandler(e))}async reposition(e=!1){const{floatingEl:t,referenceEl:i,placement:s,overlayPositioning:l,filteredFlipPlacements:a}=this;return se(this,{floatingEl:t,referenceEl:i,overlayPositioning:l,placement:s,flipPlacements:a,type:"menu"},e)}async setFocus(){var e;await ve(this),(e=this.textInput.value)==null||e.focus(),this.activeChipIndex=-1,this.activeItemIndex=-1}connectedCallback(){var e;super.connectedCallback(),be(this),ne(this),this.internalValueChangeFlag=!0,this.value=this.getValue(),this.internalValueChangeFlag=!1,(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0,subtree:!0}),this.setFilteredPlacements(),$(this)}async load(){}willUpdate(e){e.has("open")&&(this.hasUpdated||this.open!==!1)&&this.openHandler(),e.has("disabled")&&(this.hasUpdated||this.disabled!==!1)&&this.handleDisabledChange(this.disabled),e.has("maxItems")&&(this.hasUpdated||this.maxItems!==0)&&this.setMaxScrollerHeight(),e.has("overlayPositioning")&&(this.hasUpdated||this.overlayPositioning!=="absolute")&&this.reposition(!0),(e.has("selectionMode")||e.has("scale"))&&this.updateItems(),e.has("flipPlacements")&&this.flipPlacementsHandler()}updated(){this.el.offsetHeight!==this.inputHeight&&(this.reposition(!0),this.inputHeight=this.el.offsetHeight),me(this),this.refreshSelectionDisplay()}loaded(){ce(this,this.getValue()),$(this),this.updateItems(),this.filterItems(this.filterText,!1,!1)}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect(),(t=this.resizeObserver)==null||t.disconnect(),ge(this),re(this),le(this)}filterTextChange(e){this.updateActiveItemIndex(-1),this.filterItems(e,!0)}openHandler(){Ie(this),!this.disabled&&this.setMaxScrollerHeight()}handleDisabledChange(e){e||(this.open=!1)}valueHandler(e){this.internalValueChangeFlag||(this.getItems().forEach(t=>{t.selected=Array.isArray(e)?e.includes(t.value):e===t.value}),this.updateItems())}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}selectedItemsHandler(){this.internalValueChangeFlag=!0,this.value=this.getValue(),this.internalValueChangeFlag=!1}async documentClickHandler(e){this.disabled||e.composedPath().includes(this.el)||(await this.componentOnReady(),!this.allowCustomValues&&this.filterText&&(this.clearInputValue(),this.filterItems(""),this.updateActiveItemIndex(-1)),this.allowCustomValues&&this.filterText.trim().length&&this.addCustomChip(this.filterText),this.open=!1)}calciteComboboxItemChangeHandler(e){if(this.ignoreSelectedEventsFlag)return;const t=e.target,i=this.filteredItems.indexOf(t);this.updateActiveItemIndex(i),this.toggleSelection(t,t.selected)}calciteInternalComboboxItemChangeHandler(e){e.stopPropagation(),this.hasUpdated&&this.updateItems()}clearValue(){this.ignoreSelectedEventsFlag=!0,this.items.forEach(e=>e.selected=!1),this.ignoreSelectedEventsFlag=!1,this.selectedItems=[],this.emitComboboxChange(),this.open=!1,this.updateActiveItemIndex(-1),this.resetText(),this.filterItems(""),this.setFocus()}clearInputValue(){this.textInput.value.value="",this.filterText=""}setFilteredPlacements(){const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?ae(t,e):null}getValue(){const e=this.selectedItems.map(t=>{var i;return(i=t.value)==null?void 0:i.toString()});return e.length?e.length>1?e:e[0]:""}comboboxInViewport(){const e=this.el.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.right<=(window.innerWidth||document.documentElement.clientWidth)&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)}keyDownHandler(e){if(this.readOnly)return;const{key:t}=e;switch(t){case"Tab":this.activeChipIndex=-1,this.activeItemIndex=-1,this.allowCustomValues&&this.filterText?(this.addCustomChip(this.filterText,!0),e.preventDefault()):this.open?(this.open=!1,e.preventDefault()):!this.allowCustomValues&&this.filterText&&(this.clearInputValue(),this.filterItems(""),this.updateActiveItemIndex(-1));break;case"ArrowLeft":(this.activeChipIndex!==-1||this.textInput.value.selectionStart===0)&&(this.previousChip(),e.preventDefault());break;case"ArrowRight":this.activeChipIndex!==-1&&(this.nextChip(),e.preventDefault());break;case"ArrowUp":this.filteredItems.length&&(e.preventDefault(),this.open&&this.shiftActiveItemIndex(-1),this.comboboxInViewport()||this.el.scrollIntoView());break;case"ArrowDown":this.filteredItems.length&&(e.preventDefault(),this.open?this.shiftActiveItemIndex(1):(this.open=!0,this.ensureRecentSelectedItemIsActive()),this.comboboxInViewport()||this.el.scrollIntoView());break;case" ":!this.textInput.value.value&&!e.defaultPrevented&&(this.open||(this.open=!0,this.shiftActiveItemIndex(1)),e.preventDefault());break;case"Home":if(!this.open)return;e.preventDefault(),this.updateActiveItemIndex(0),this.scrollToActiveOrSelectedItem(),this.comboboxInViewport()||this.el.scrollIntoView();break;case"End":if(!this.open)return;e.preventDefault(),this.updateActiveItemIndex(this.filteredItems.length-1),this.scrollToActiveOrSelectedItem(),this.comboboxInViewport()||this.el.scrollIntoView();break;case"Escape":!this.clearDisabled&&!this.open&&this.clearValue(),this.open=!1,e.preventDefault();break;case"Enter":if(this.open&&this.activeItemIndex>-1){const i=this.filteredItems[this.activeItemIndex];this.toggleSelection(i,!i.selected),e.preventDefault()}else this.activeChipIndex>-1?(this.removeActiveChip(),e.preventDefault()):this.allowCustomValues&&this.filterText?(this.addCustomChip(this.filterText,!0),e.preventDefault()):e.defaultPrevented||he(this)&&e.preventDefault();break;case"Delete":case"Backspace":{if(this.selectionDisplay==="single"||this.selectionDisplay==="fit"&&this.selectedHiddenChipsCount>0)return;this.activeChipIndex>-1?(e.preventDefault(),this.removeActiveChip()):!this.filterText&&this.isMulti()&&(e.preventDefault(),this.removeLastChip());break}}}onBeforeOpen(){this.scrollToActiveOrSelectedItem(),this.calciteComboboxBeforeOpen.emit()}onOpen(){this.scrollToActiveOrSelectedItem(!0),this.calciteComboboxOpen.emit()}onBeforeClose(){this.calciteComboboxBeforeClose.emit()}onClose(){this.calciteComboboxClose.emit(),oe(this)}async setMaxScrollerHeight(){const{listContainerEl:e,open:t,referenceEl:i}=this;if(!e||!t)return;await this.reposition(!0);const s=this.getMaxScrollerHeight();e.style.maxBlockSize=s>0?`${s}px`:"",e.style.inlineSize=`${i.clientWidth}px`,await this.reposition(!0)}calciteChipCloseHandler(e){this.open=!1;const t=this.items.find(i=>i===e);t&&this.toggleSelection(t,!1),this.calciteComboboxChipClose.emit()}clickHandler(e){if(this.readOnly)return;const t=e.composedPath();if(t.some(i=>i.tagName==="CALCITE-CHIP")){this.open=!1,e.preventDefault();return}if(t.some(i=>{var s;return(s=i.classList)==null?void 0:s.contains(G.button)})){this.clearValue(),e.preventDefault();return}this.open=!this.open,this.ensureRecentSelectedItemIsActive()}ensureRecentSelectedItemIsActive(){const{selectedItems:e}=this,t=e.length===0?0:this.items.indexOf(e[e.length-1]);this.updateActiveItemIndex(t)}hideChip(e){e.classList.add(c.chipInvisible)}showChip(e){e.classList.remove(c.chipInvisible)}refreshChipDisplay({chipEls:e,availableHorizontalChipElSpace:t,chipContainerElGap:i}){e.forEach(s=>{if(!s.selected)this.hideChip(s);else{const l=C(s);if(l&&l<t){t-=l+i,this.showChip(s);return}}this.hideChip(s)})}async refreshSelectionDisplay(){if(await xe(this),x(this.selectionMode)||!this.textInput.value)return;const{allSelectedIndicatorChipEl:e,chipContainerEl:t,selectionDisplay:i,placeholder:s,selectedIndicatorChipEl:l,textInput:{value:a}}=this,o=parseInt(getComputedStyle(t).gap.replace("px","")),n=C(t),{fontSize:h,fontFamily:p}=getComputedStyle(a),m=(te(s,`${h} ${p}`)||parseInt(Y))+o,g=C(e),I=C(l),W=Math.max(g,I);if(this.setCompactSelectionDisplay({chipContainerElGap:o,chipContainerElWidth:n,inputWidth:m,largestSelectedIndicatorChipWidth:W}),i==="fit"){const D=Array.from(this.el.shadowRoot.querySelectorAll("calcite-chip")).filter(q=>q.closable),_=Math.round(n-((this.selectedHiddenChipsCount>0?I:0)+o+m+o));this.refreshChipDisplay({availableHorizontalChipElSpace:_,chipContainerElGap:o,chipEls:D}),this.setVisibleAndHiddenChips(D)}}setFloatingEl(e){this.floatingEl=e,$(this)}setCompactSelectionDisplay({chipContainerElGap:e,chipContainerElWidth:t,inputWidth:i,largestSelectedIndicatorChipWidth:s}){const l=Math.round(s+e+i);(!this.maxCompactBreakpoint||this.maxCompactBreakpoint<l)&&(this.maxCompactBreakpoint=l),this.compactSelectionDisplay=t<this.maxCompactBreakpoint}setContainerEl(e){var t;e&&((t=this.resizeObserver)==null||t.observe(e)),this.listContainerEl=e,this.transitionEl=e}setChipContainerEl(e){var t;e&&((t=this.resizeObserver)==null||t.observe(e)),this.chipContainerEl=e}setReferenceEl(e){this.referenceEl=e,$(this)}setAllSelectedIndicatorChipEl(e){this.allSelectedIndicatorChipEl=e}setSelectedIndicatorChipEl(e){this.selectedIndicatorChipEl=e}setVisibleAndHiddenChips(e){let t=0;e.forEach(s=>{s.selected&&!s.classList.contains(c.chipInvisible)&&t++}),t!==this.selectedVisibleChipsCount&&(this.selectedVisibleChipsCount=t);const i=this.getSelectedItems().length-t;i!==this.selectedHiddenChipsCount&&(this.selectedHiddenChipsCount=i)}getMaxScrollerHeight(){const e=[...this.groupItems,...this.getItems(!0)].filter(l=>!F(l)),{maxItems:t}=this;let i=0,s=0;return e.length>=t&&e.forEach(l=>{if(i<t){const a=this.calculateScrollerHeight(l);s+=a,i+=1}}),s}calculateScrollerHeight(e){if(!e)return 0;const t=e.getBoundingClientRect().height,i=`:scope > ${M}, :scope > ${V}`,s=Array.from(e.querySelectorAll(i)).reduce((l,a)=>l+a.getBoundingClientRect().height,0);return t-s}inputHandler(e){const t=e.target.value;this.filterText=t}getItemsAndGroups(){return[...this.groupItems,...this.items]}toggleSelection(e,t){!e||this.selectionMode==="single-persist"&&e.selected&&e.value===this.value&&!t||(this.isMulti()?(e.selected=t,this.updateAncestors(e),this.selectedItems=this.getSelectedItems(),this.emitComboboxChange(),this.resetText(),this.filterItems("")):(this.ignoreSelectedEventsFlag=!0,this.items.forEach(i=>i.selected=i===e?t:!1),this.ignoreSelectedEventsFlag=!1,this.selectedItems=this.getSelectedItems(),this.emitComboboxChange(),this.textInput.value&&(this.textInput.value.value=y(e)),this.open=!1,this.updateActiveItemIndex(-1),this.resetText(),this.filterItems("")))}updateAncestors(e){if(this.selectionMode!=="ancestors")return;const t=T(e),i=ye(e);e.selected?t.forEach(s=>{s.selected=!0}):(i.forEach(s=>s.selected=!1),[...t].forEach(s=>{O(s)||(s.selected=!1)}))}getFilteredItems(){return this.filterText===""?this.items:this.items.filter(e=>!F(e))}updateItems(){this.items=this.getItems(),this.groupItems=this.getGroupItems(),this.data=this.getData(),this.groupData=this.getGroupData(),this.updateItemProps(),this.selectedItems=this.getSelectedItems(),this.filteredItems=this.getFilteredItems()}updateItemProps(){this.getItems(!0).forEach(e=>{e.selectionMode=this.selectionMode,e.scale=this.scale}),this.groupItems.forEach(e=>e.scale=this.scale),this.allowCustomValues||this.setMaxScrollerHeight(),this.groupItems.forEach((e,t,i)=>{t===0&&(e.afterEmptyGroup=!1);const s=i[t+1];s&&(s.afterEmptyGroup=e.children.length===0)})}getData(){return this.items.map(e=>({description:e.description,filterDisabled:e.filterDisabled,label:e.heading,metadata:e.metadata,shortHeading:e.shortHeading,textLabel:e.textLabel,el:e}))}getGroupData(){return this.groupItems.map(e=>({label:e.label,el:e}))}resetText(){this.textInput.value&&(this.textInput.value.value=""),this.filterText=""}getItems(e=!1){return Array.from(this.el.querySelectorAll(M)).filter(t=>e||!t.disabled)}getGroupItems(){return Array.from(this.el.querySelectorAll(V))}addCustomChip(e,t){const i=this.items.find(s=>(s.heading||s.textLabel)===e);if(i)this.toggleSelection(i,!0);else{const s=document.createElement("calcite-combobox-item");s.value=e,s.heading=e,this.el.prepend(s),this.updateItems(),this.toggleSelection(s,!0),this.open=!0,t&&this.setFocus()}}removeActiveChip(){this.toggleSelection(this.selectedItems[this.activeChipIndex],!1),this.setFocus()}removeLastChip(){this.toggleSelection(this.selectedItems[this.selectedItems.length-1],!1),this.setFocus()}previousChip(){const e=this.selectedItems.length-1,t=this.activeChipIndex;this.activeChipIndex=t===-1?e:Math.max(t-1,0),this.updateActiveItemIndex(-1),this.focusChip()}nextChip(){const e=this.selectedItems.length-1,t=this.activeChipIndex+1;t>e?(this.activeChipIndex=-1,this.setFocus()):(this.activeChipIndex=t,this.focusChip()),this.updateActiveItemIndex(-1)}focusChip(){var t,i;const e=(t=this.selectedItems[this.activeChipIndex])==null?void 0:t.guid;(i=e?this.referenceEl.querySelector(`#${L}${e}`):null)==null||i.setFocus()}scrollToActiveOrSelectedItem(e=!1){const t=e&&this.selectedItems&&this.selectedItems.length?this.selectedItems[0]:this.filteredItems[this.activeItemIndex];t&&t.scrollIntoView({block:"nearest"})}shiftActiveItemIndex(e){const{length:t}=this.filteredItems,i=(this.activeItemIndex+t+e)%t;this.updateActiveItemIndex(i),this.scrollToActiveOrSelectedItem()}updateActiveItemIndex(e){this.activeItemIndex=e;let t=null;this.filteredItems.forEach((i,s)=>{s===e?(i.active=!0,t=`${P}${i.guid}`):i.active=!1}),this.activeDescendant=t,this.activeItemIndex>-1&&(this.activeChipIndex=-1)}isAllSelected(){return this.getItems().length===this.getSelectedItems().length}isMulti(){return!x(this.selectionMode)}comboboxFocusHandler(){var e;this.disabled||((e=this.textInput.value)==null||e.focus())}renderChips(){const{activeChipIndex:e,readOnly:t,scale:i,selectionMode:s,messages:l}=this;return this.selectedItems.map((a,o)=>{const n={chip:!0,"chip--active":e===o},h=[...T(a)].reverse(),p=y(a),m=[...h,a].map(I=>y(I)),g=s!=="ancestors"?p:m.join(" / ");return b(p,d`<calcite-chip .appearance=${t?"outline":"solid"} class=${r(n)} .closable=${!t} data-test-id=${`chip-${o}`} .icon=${a.icon} .iconFlipRtl=${a.iconFlipRtl} id=${(a.guid?`${L}${a.guid}`:null)??u} .label=${g} .messageOverrides=${{dismissLabel:l.removeTag}} @focusin=${()=>this.activeChipIndex=o} @calciteChipClose=${()=>this.calciteChipCloseHandler(a)} .scale=${i} .selected=${a.selected} .tabIndex=${e===o?0:-1} title=${g??u} .value=${a.value}>${g}</calcite-chip>`)})}renderAllSelectedIndicatorChip(){const{compactSelectionDisplay:e,scale:t,selectedVisibleChipsCount:i,setAllSelectedIndicatorChipEl:s}=this,l=this.messages.allSelected;return d`<calcite-chip class=${r({chip:!0,[c.chipInvisible]:!(this.isAllSelected()&&!i&&!e)})} .label=${l} .scale=${t} title=${l??u} value ${v(s)}>${l}</calcite-chip>`}renderAllSelectedIndicatorChipCompact(){const{compactSelectionDisplay:e,scale:t,selectedVisibleChipsCount:i}=this,s=this.messages.all||"All";return d`<calcite-chip class=${r({chip:!0,[c.chipInvisible]:!(this.isAllSelected()&&!i&&e)})} .label=${s} .scale=${t} title=${s} value>${s}</calcite-chip>`}renderSelectedIndicatorChip(){const{compactSelectionDisplay:e,selectionDisplay:t,getSelectedItems:i,scale:s,selectedHiddenChipsCount:l,selectedVisibleChipsCount:a,setSelectedIndicatorChipEl:o}=this;let n,h;if(e)n=!0;else if(t==="single"){const p=i().length;this.isAllSelected()?n=!0:p>0?n=!1:n=!0,h=`${p} ${this.messages.selected}`}else t==="fit"&&(n=!!(this.isAllSelected()&&a===0||l===0),h=a>0?`+${l}`:`${l} ${this.messages.selected}`);return d`<calcite-chip class=${r({chip:!0,[c.chipInvisible]:n})} .label=${h} .scale=${s} title=${h??u} value ${v(o)}>${h}</calcite-chip>`}renderSelectedIndicatorChipCompact(){const{compactSelectionDisplay:e,selectionDisplay:t,getSelectedItems:i,scale:s,selectedHiddenChipsCount:l}=this;let a,o;if(e){const n=i().length;this.isAllSelected()?a=!0:t==="fit"?(a=!(l>0),o=`${l||0}`):t==="single"&&(a=!(n>0),o=`${n}`)}else a=!0;return d`<calcite-chip class=${r({chip:!0,[c.chipInvisible]:a})} .label=${o} .scale=${s} title=${o??u} value>${o}</calcite-chip>`}renderInput(){const{guid:e,disabled:t,placeholder:i,selectionMode:s,selectedItems:l,open:a}=this,o=x(s),n=l[0],h=!a&&o&&!!n&&!this.filterText;return d`<span class=${r({"input-wrap":!0,"input-wrap--single":o})}>${h&&b("label",d`<span class=${r({label:!0,"label--icon":!!(n!=null&&n.icon)})}>${y(n)}</span>`)||""}${b("input",d`<input aria-activedescendant=${this.activeDescendant??u} aria-controls=${`${S}${e}`} aria-errormessage=${z.validationMessage} aria-owns=${`${S}${e}`} aria-autocomplete=list .ariaExpanded=${a} aria-haspopup=listbox .ariaInvalid=${this.status==="invalid"} .ariaLabel=${fe(this)} class=${r({[c.input]:!0,"input--single":!0,[c.inputHidden]:h,"input--icon":this.showingInlineIcon&&!!this.placeholderIcon})} data-test-id=input .disabled=${t} .id=${`${B}${e}`} @focus=${this.comboboxFocusHandler} @input=${this.inputHandler} placeholder=${i??u} .readOnly=${this.readOnly} role=combobox .tabIndex=${this.activeChipIndex===-1?0:-1} type=text .value=${X(this.filterText??"")} ${v(this.textInput)}>`)}</span>`}renderListBoxOptions(){return this.filteredItems.map(e=>d`<li .ariaLabel=${e.label} .ariaSelected=${e.selected} id=${(e.guid?`${P}${e.guid}`:null)??u} role=option tabindex=-1>${e.heading||e.textLabel}</li>`)}renderFloatingUIContainer(){const{setFloatingEl:e,setContainerEl:t,open:i}=this,s={[c.listContainer]:!0,[H.animation]:!0,[H.animationActive]:i};return d`<div aria-hidden=true class=${r(c.floatingUIContainer)} ${v(e)}><div class=${r(s)} ${v(t)}><ul class=${r({list:!0,"list--hide":!i})}><slot></slot></ul></div></div>`}renderSelectedOrPlaceholderIcon(){const{open:e,placeholderIcon:t,placeholderIconFlipRtl:i,selectedItems:s}=this,l=s[0],a=l==null?void 0:l.icon,o=t&&(e||!l);return this.showingInlineIcon&&b("selected-placeholder-icon",d`<span class="icon-start"><calcite-icon class=${r({[c.selectedIcon]:!o,[c.placeholderIcon]:o})} .flipRtl=${o?i:l.iconFlipRtl} .icon=${o?t:a} .scale=${E(this.scale)}></calcite-icon></span>`)||""}renderChevronIcon(){const{open:e}=this;return b("chevron",d`<span class="icon-end"><calcite-icon class=${r(c.icon)} .icon=${e?"chevron-up":"chevron-down"} .scale=${E(this.scale)}></calcite-icon></span>`)}render(){var m;const{selectionDisplay:e,guid:t,label:i,open:s,readOnly:l}=this,a=x(this.selectionMode),o=e==="all",n=e==="single",h=!a&&e==="fit",p=!this.clearDisabled&&((m=this.value)==null?void 0:m.length)>0;return ue({disabled:this.disabled,children:d`<div aria-live=polite class=${r({wrapper:!0,"wrapper--single":a||!this.selectedItems.length,"wrapper--active":s})} @click=${this.clickHandler} @keydown=${this.keyDownHandler} ${v(this.setReferenceEl)}>${this.renderSelectedOrPlaceholderIcon()}${b("grid",d`<div class=${r({"grid-input":!0,[c.selectionDisplayFit]:h,[c.selectionDisplaySingle]:n})} ${v(this.setChipContainerEl)}>${!a&&!n&&this.renderChips()||""}${!a&&!o&&[this.renderSelectedIndicatorChip(),this.renderSelectedIndicatorChipCompact(),this.renderAllSelectedIndicatorChip(),this.renderAllSelectedIndicatorChipCompact()]||""}<label class=${r(c.screenReadersOnly)} .htmlFor=${`${B}${t}`} .id=${`${R}${t}`}>${i}</label>${this.renderInput()}</div>`)}${!l&&p?b("close-button",Ee({disabled:this.disabled,label:this.messages.clear,scale:this.scale})):null}${!l&&this.renderChevronIcon()||""}</div><ul aria-labelledby=${`${R}${t}`} aria-multiselectable=true class=${r(c.screenReadersOnly)} .id=${`${S}${t}`} role=listbox tabindex=-1>${this.renderListBoxOptions()}</ul>${this.renderFloatingUIContainer()}${de({component:this})}${this.validationMessage&&this.status==="invalid"?Ce({icon:this.validationIcon,id:z.validationMessage,message:this.validationMessage,scale:this.scale,status:this.status}):null}`})}};w.properties={activeChipIndex:16,activeDescendant:16,activeItemIndex:16,compactSelectionDisplay:16,selectedHiddenChipsCount:16,selectedVisibleChipsCount:16,allowCustomValues:7,clearDisabled:7,disabled:7,filterText:3,filterProps:0,filteredItems:0,flipPlacements:0,form:3,label:1,maxItems:11,messageOverrides:0,name:3,open:7,overlayPositioning:3,placeholder:1,placeholderIcon:3,placeholderIconFlipRtl:7,readOnly:7,required:7,scale:3,selectedItems:0,selectionDisplay:3,selectionMode:3,status:3,validationIcon:[3,{converter:Q}],validationMessage:1,validity:0,value:1},w.styles=ke;let k=w;j("calcite-combobox",k);export{k as Combobox};
