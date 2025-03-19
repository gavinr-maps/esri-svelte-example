import"./index-73bQemcW.js";import"./index-Ch_sYKt7.js";import{S as b}from"./jsxFactory-CLjKarlq.js";import{l as y}from"./live-BIBBLA6F.js";import{i as z,L as $,v as L,c as g,q as w,x as h,b as r,s as o}from"./index-tefRSezt.js";import{e as E,n as p}from"./ref-Ccn4I0kT.js";import{D as k,W as A,B as C}from"./form-B15gmg4q.js";import{v as O,T as H,I as S}from"./label-BLne9qNB.js";import{u as x}from"./dom--xxYYVQF.js";import{q as d}from"./locale-CXx8I9ox.js";import{b as T}from"./observers-BdozwIHb.js";import{t as f,r as I}from"./loadable-DOQnSSjG.js";import{m as M,p as W}from"./interactive-B8siLByk.js";import{i as q}from"./guid-ejniuQmw.js";import{m as j}from"./Validation-O1TFEQW-.js";import{m as F}from"./input-DI9tZAPS.js";import{s as R}from"./useT9n-CJAswmP1.js";import{t as V}from"./throttle-CQXZGPS6.js";import"./Accessor-BHnuXKD2.js";import"./intl-Do3GEEJ7.js";import"./Promise-CmQqe-ke.js";import"./cast-BA_-jlhc.js";import"./JSONSupport-CGdeqxpk.js";import"./Evented-DCWccWGU.js";import"./reactiveUtils-BR0C1Kq4.js";import"./SimpleObservable-7oieNGD8.js";import"./uuid-Cl5lrJ4c.js";import"./directive-helpers-C0aXnQdc.js";import"./key-CZcQa38B.js";import"./debounce-DbkufipY.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const a={assistiveText:"assistive-text",characterLimit:"character-limit",content:"content",container:"container",footer:"footer",characterOverLimit:"character--over-limit",readOnly:"readonly",textAreaInvalid:"text-area--invalid",footerSlotted:"footer--slotted",hide:"hide",footerEndSlotOnly:"footer--end-only",textArea:"text-area",textAreaOnly:"text-area--only"},u={validationMessage:"textAreaValidationMessage"},v={footerStart:"footer-start",footerEnd:"footer-end"},B=100,G=z`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:inline-block;block-size:100%;inline-size:100%;--calcite-internal-text-area-border-color: var(--calcite-text-area-border-color, var(--calcite-color-border-input));--calcite-internal-text-area-footer-border-color: var( --calcite-text-area-footer-border-color, var(--calcite-internal-text-area-border-color) )}.text-area,.footer{font-size:var(--calcite-text-area-font-size, var(--calcite-font-size--1));background-color:var(--calcite-text-area-background-color, var(--calcite-color-foreground-1));padding-block:var(--calcite-spacing-sm);padding-inline:var(--calcite-spacing-md)}.text-area{position:relative;margin:0;box-sizing:border-box;display:block;inline-size:100%;font-family:var(--calcite-font-family);--calcite-internal-text-area-border-block-end-color: var(--calcite-internal-text-area-border-color);border:var(--calcite-border-width-sm) solid var(--calcite-internal-text-area-border-color);border-block-end-color:var(--calcite-internal-text-area-border-block-end-color);color:var(--calcite-text-area-text-color, var(--calcite-color-text-1));font-family:var(--calcite-sans-family);max-block-size:var(--calcite-text-area-max-height);min-block-size:var(--calcite-text-area-min-height);max-inline-size:var(--calcite-text-area-max-width);min-inline-size:var(--calcite-text-area-min-width, 12rem)}.text-area::placeholder{font-weight:var(--calcite-font-weight-normal)}@media screen and (max-width: 480px){.text-area{resize:none}}.text-area:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.text-area.text-area--invalid{--calcite-internal-text-area-border-color: var(--calcite-color-status-danger)}.text-area.text-area--invalid:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.text-area.footer--slotted{min-inline-size:18rem}.text-area:not(.text-area--only,.text-area--invalid){--calcite-internal-text-area-border-block-end-color: var( --calcite-text-area-divider-color, var(--calcite-color-border-3) )}.footer{box-sizing:border-box;display:flex;align-items:center;border:var(--calcite-border-width-sm) solid var(--calcite-internal-text-area-footer-border-color);border-block-start:var(--calcite-border-width-none);min-block-size:2.25rem}.character-limit{display:flex;align-items:center;justify-content:flex-end;white-space:nowrap;font-size:var(--calcite-text-area-font-size, var(--calcite-font-size--1));font-weight:var(--calcite-font-weight-regular);color:var(--calcite-text-area-character-limit-text-color, var(--calcite-color-text-2));padding-inline-start:var(--calcite-spacing-md)}.character--over-limit{font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-status-danger)}.readonly{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium)}.content,.hide{display:none}.container{display:flex;inline-size:100%;justify-content:space-between}.footer--end-only{justify-content:flex-end}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.text-area.text-area--only{block-size:100%}:host([resize=none]) .text-area{resize:none}:host([resize=horizontal]) .text-area{resize:horizontal}:host([resize=vertical]) .text-area{resize:vertical}:host([scale=s]) .text-area,:host([scale=s]) .footer,:host([scale=s]) .character-limit{padding-inline-start:.5rem;font-size:var(--calcite-text-area-font-size, var(--calcite-font-size--2))}:host([scale=s]) .footer{min-block-size:1.75rem}:host([scale=s]) .text-area{padding-block:.25rem;padding-inline:.5rem}:host([scale=m]) .text-area{padding-block:.5rem;padding-inline:.75rem}:host([scale=m]) .footer{padding-block:.5rem;padding-inline:.75rem;min-block-size:2.25rem}:host([scale=l]) .text-area,:host([scale=l]) .footer{font-size:var(--calcite-text-area-font-size, var(--calcite-font-size-0));padding-block:var(--calcite-spacing-md);padding-inline:var(--calcite-spacing-lg)}:host([scale=l]) .footer{min-block-size:2.75rem}:host([scale=l]) .text-area,:host([scale=l]) .footer,:host([scale=l]) .character-limit{font-size:var(--calcite-text-area-font-size, var(--calcite-font-size-0));padding-inline-start:var(--calcite-spacing-lg)}:host([status=invalid]){--calcite-internal-text-area-border-color: var(--calcite-color-status-danger)}:host([status=invalid]) .text-area:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host([disabled]) .text-area,:host([disabled]) .footer{opacity:var(--calcite-opacity-half)}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:.5rem}:host([scale=s]) .validation-container{padding-block-start:.25rem}::slotted(input[slot=hidden-form-input]){margin:0!important;opacity:0!important;outline:none!important;padding:0!important;position:absolute!important;inset:0!important;transform:none!important;-webkit-appearance:none!important;z-index:-1!important}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`,l=class l extends ${constructor(){super(...arguments),this.attributeWatch=L(["autofocus","spellcheck"],this.handleGlobalAttributesChanged),this.footerEl=E(),this.guid=q(),this.resizeObserver=T("resize",async()=>{await f(this);const{textAreaHeight:t,textAreaWidth:e,elHeight:i,elWidth:n,footerHeight:c,footerWidth:s}=this.getHeightAndWidthOfElements();s>0&&s!==e&&(this.footerEl.value.style.width=`${e}px`),(n!==e||i!==t+(c||0))&&this.setHeightAndWidthToAuto()}),this.setHeightAndWidthToAuto=V(()=>{(this.resize==="vertical"||this.resize==="both")&&(this.el.style.height="auto"),(this.resize==="horizontal"||this.resize==="both")&&(this.el.style.width="auto")},B,{leading:!1}),this.disabled=!1,this.groupSeparator=!1,this.limitText=!1,this.messages=R({blocking:!0}),this.readOnly=!1,this.required=!1,this.resize="both",this.scale="m",this.status="idle",this.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1},this.value="",this.wrap="soft",this.calciteTextAreaChange=g(),this.calciteTextAreaInput=g()}async selectText(){await f(this),this.textAreaEl.select()}async setFocus(){await I(this),this.textAreaEl.focus()}connectedCallback(){super.connectedCallback(),O(this),k(this)}async load(){}updated(){M(this),this.setTextAreaHeight()}loaded(){}disconnectedCallback(){var t;super.disconnectedCallback(),H(this),A(this),(t=this.resizeObserver)==null||t.disconnect()}handleGlobalAttributesChanged(){this.requestUpdate()}onLabelClick(){this.setFocus()}handleInput(t){this.value=t.target.value,this.calciteTextAreaInput.emit()}handleChange(){this.calciteTextAreaChange.emit()}contentSlotChangeHandler(){this.value||this.el.childNodes.forEach(t=>{t.nodeName==="#text"&&(this.value=t.nodeValue.trim())})}getLocalizedCharacterLength(){const t=this.value?this.value.length.toString():"0",e=this.maxLength.toString();return this.numberingSystem==="latn"?{currentLength:t,maxLength:e}:(d.numberFormatOptions={locale:this.messages._lang,numberingSystem:this.numberingSystem,signDisplay:"never",useGrouping:this.groupSeparator},{currentLength:d.localize(t),maxLength:d.localize(e)})}syncHiddenFormInput(t){t.setCustomValidity(""),this.isCharacterLimitExceeded()&&t.setCustomValidity(this.replacePlaceholdersInMessages()),F("textarea",this,t)}setTextAreaEl(t){var e;t&&(this.textAreaEl=t,(e=this.resizeObserver)==null||e.observe(t))}setTextAreaHeight(){const{textAreaHeight:t,elHeight:e,footerHeight:i}=this.getHeightAndWidthOfElements();i>0&&t+i!=e&&(this.textAreaEl.style.height=`${e-i}px`)}getHeightAndWidthOfElements(){const{height:t,width:e}=this.textAreaEl.getBoundingClientRect(),{height:i,width:n}=this.el.getBoundingClientRect(),{height:c,width:s}=this.footerEl.value?this.footerEl.value.getBoundingClientRect():{height:0,width:0};return{textAreaHeight:t,textAreaWidth:e,elHeight:i,elWidth:n,footerHeight:c,footerWidth:s}}replacePlaceholdersInMessages(){return this.messages.tooLong.replace("{maxLength}",this.localizedCharacterLengthObj.maxLength).replace("{currentLength}",this.localizedCharacterLengthObj.currentLength)}isCharacterLimitExceeded(){var t;return((t=this.value)==null?void 0:t.length)>this.maxLength}render(){const t=this.startSlotHasElements||this.endSlotHasElements||!!this.maxLength;return W({disabled:this.disabled,children:h`<textarea aria-describedby=${this.guid??r} aria-errormessage=${u.validationMessage} .ariaInvalid=${this.status==="invalid"||this.isCharacterLimitExceeded()} .ariaLabel=${S(this)} .autofocus=${this.el.autofocus} class=${o({[a.textArea]:!0,[a.readOnly]:this.readOnly,[a.textAreaInvalid]:this.isCharacterLimitExceeded(),[a.footerSlotted]:this.endSlotHasElements&&this.startSlotHasElements,[a.textAreaOnly]:!t})} .cols=${this.columns} .disabled=${this.disabled} maxlength=${(this.limitText?this.maxLength:void 0)??r} name=${this.name??r} @change=${this.handleChange} @input=${this.handleInput} placeholder=${this.placeholder??r} .readOnly=${this.readOnly} .required=${this.required} .rows=${this.rows} spellcheck=${this.el.spellcheck??r} .value=${y(this.value??"")} wrap=${this.wrap??r} ${p(this.setTextAreaEl)}></textarea><span class=${o({[a.content]:!0})}><slot @slotchange=${this.contentSlotChangeHandler}></slot></span><footer class=${o({[a.footer]:!0,[a.readOnly]:this.readOnly,[a.hide]:!t})} ${p(this.footerEl)}><div class=${o({[a.container]:!0,[a.footerEndSlotOnly]:!this.startSlotHasElements&&this.endSlotHasElements})}><slot name=${v.footerStart} @slotchange=${e=>this.startSlotHasElements=x(e)}></slot><slot name=${v.footerEnd} @slotchange=${e=>this.endSlotHasElements=x(e)}></slot></div>${this.renderCharacterLimit()}</footer>${C({component:this})}${this.isCharacterLimitExceeded()&&h`<span aria-live=polite class=${o(a.assistiveText)} id=${this.guid??r}>${this.replacePlaceholdersInMessages()}</span>`||""}${this.validationMessage&&this.status==="invalid"?j({icon:this.validationIcon,id:u.validationMessage,message:this.validationMessage,scale:this.scale,status:this.status}):null}`})}renderCharacterLimit(){return this.maxLength?(this.localizedCharacterLengthObj=this.getLocalizedCharacterLength(),h`<span class=${o(a.characterLimit)}><span class=${o({[a.characterOverLimit]:this.isCharacterLimitExceeded()})}>${this.localizedCharacterLengthObj.currentLength}</span>/${this.localizedCharacterLengthObj.maxLength}</span>`):null}};l.properties={endSlotHasElements:16,startSlotHasElements:16,columns:11,disabled:7,form:3,groupSeparator:7,label:1,limitText:7,maxLength:11,messageOverrides:0,minLength:11,name:3,numberingSystem:1,placeholder:1,readOnly:7,required:7,resize:3,rows:11,scale:3,status:3,validationIcon:[3,{converter:w}],validationMessage:1,validity:0,value:1,wrap:3},l.styles=G;let m=l;b("calcite-text-area",m);export{m as TextArea};
