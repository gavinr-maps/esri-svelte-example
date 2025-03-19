import"./index-DwIhxbHs.js";import"./index-fFnlo_g2.js";import{S as o}from"./jsxFactory-Cnml7uXM.js";import{L as l,c as r,q as n,s as c,x as d,i as h}from"./index-4eY77cms.js";import{b as p}from"./observers-Co4E8E8j.js";import{r as u}from"./loadable-XBvaWFYY.js";import{m}from"./Validation-BYp9DS84.js";import{a as e}from"./dom-DEluURzl.js";import"./Accessor-BmwT4B0c.js";import"./intl-Duiy0OzY.js";import"./Promise-DfET-uns.js";import"./cast-CsZslgGN.js";import"./JSONSupport-DcrLLGjL.js";import"./Evented-Dw4_VOGn.js";import"./reactiveUtils-XM7cS2OP.js";import"./SimpleObservable-CvOkykwM.js";import"./uuid-Cl5lrJ4c.js";import"./guid-ejniuQmw.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const g={itemWrapper:"item-wrapper"},i={validationMessage:"radioButtonGroupValidationMessage"},v=h`:host{display:flex;flex-direction:column}:host>.item-wrapper{display:flex;max-inline-size:100vw}:host([layout=horizontal])>.item-wrapper{flex-direction:row;flex-wrap:wrap}:host([layout=horizontal][scale=s])>.item-wrapper{column-gap:1rem}:host([layout=horizontal][scale=m])>.item-wrapper{column-gap:1.25rem}:host([layout=horizontal][scale=l])>.item-wrapper{column-gap:1.5rem}:host([layout=vertical])>.item-wrapper{flex-direction:column;inline-size:fit-content}:host([scale=s]) calcite-input-message{--calcite-input-message-spacing-value: calc(var(--calcite-spacing-xxs) * -1)}:host([scale=m]) calcite-input-message{--calcite-input-message-spacing-value: calc(var(--calcite-spacing-sm) * -1)}:host([scale=l]) calcite-input-message{--calcite-input-message-spacing-value: calc(var(--calcite-spacing-md) * -1)}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:.5rem}:host([scale=s]) .validation-container{padding-block-start:.25rem}:host([hidden]){display:none}[hidden]{display:none}`,a=class a extends l{constructor(){super(),this.mutationObserver=p("mutation",()=>this.passPropsToRadioButtons()),this.radioButtons=[],this.disabled=!1,this.layout="horizontal",this.required=!1,this.scale="m",this.selectedItem=null,this.status="idle",this.calciteRadioButtonGroupChange=r({cancelable:!1}),this.listen("calciteRadioButtonChange",this.radioButtonChangeHandler)}async setFocus(){await u(this),this.selectedItem&&!this.selectedItem.disabled&&e(this.selectedItem),this.radioButtons.length>0&&e(this.getFocusableRadioButton())}connectedCallback(){var t;super.connectedCallback(),this.passPropsToRadioButtons(),(t=this.mutationObserver)==null||t.observe(this.el,{childList:!0,subtree:!0})}load(){}willUpdate(t){(t.has("disabled")&&(this.hasUpdated||this.disabled!==!1)||t.has("layout")&&(this.hasUpdated||this.layout!=="horizontal")||t.has("scale")&&(this.hasUpdated||this.scale!=="m"))&&this.passPropsToRadioButtons()}loaded(){this.passPropsToRadioButtons()}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}passPropsToRadioButtons(){this.radioButtons=Array.from(this.el.querySelectorAll("calcite-radio-button")),this.selectedItem=Array.from(this.radioButtons).reverse().find(t=>t.checked)||null,this.radioButtons.length>0&&this.radioButtons.forEach(t=>{this.hasUpdated&&(t.disabled=this.disabled||t.disabled),t.name=this.name,t.required=this.required,t.scale=this.scale})}getFocusableRadioButton(){return this.radioButtons.find(t=>!t.disabled)??null}radioButtonChangeHandler(t){this.selectedItem=t.target,this.calciteRadioButtonGroupChange.emit()}render(){return this.el.role="radiogroup",d`<div aria-errormessage=${i.validationMessage} .ariaInvalid=${this.status==="invalid"} class=${c(g.itemWrapper)}><slot></slot></div>${this.validationMessage&&this.status==="invalid"?m({icon:this.validationIcon,id:i.validationMessage,message:this.validationMessage,scale:this.scale,status:this.status}):null}`}};a.properties={radioButtons:16,disabled:7,layout:3,name:3,required:7,scale:3,selectedItem:0,status:3,validationIcon:[3,{converter:n}],validationMessage:1},a.styles=v;let s=a;o("calcite-radio-button-group",s);export{s as RadioButtonGroup};
