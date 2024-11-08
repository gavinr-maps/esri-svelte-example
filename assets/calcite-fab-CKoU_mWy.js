import{p as f,H as w,h as a}from"./jsxFactory-CJa39Fro.js";import{f as x}from"./dom-D_AJDzAj.js";import{u as v,I as E}from"./interactive-y84HQRWL.js";import{s as g,a as y,c as C}from"./loadable-DM18hPdE.js";import{d as k}from"./button-9P4PM9SO.js";import{d as F}from"./icon-BQO9J86c.js";import{d as S}from"./loader-C-zIPscB.js";import"./tslib.es6-B3Jf3DVX.js";import"./intl-CChhNOV8.js";import"./date-DlqISzcw.js";import"./jsonMap-0cxwUWs2.js";import"./subclass-BZA_h8Db.js";import"./locale-C9TlLpzi.js";import"./messages-OmQvZhAg.js";import"./Accessor-BLX9ikPh.js";import"./assets-C43MgM-v.js";import"./index-Bh2oEzTI.js";import"./Evented-BHRw9x22.js";import"./Promise-B2Hu02L7.js";import"./reactiveUtils-C5zUhJQJ.js";import"./asyncUtils-CWX51uTe.js";import"./Collection-CEdjem1-.js";import"./shared-B3wH2qpO.js";import"./SimpleObservable-KocWTzVy.js";import"./uuid-fwrPAdZb.js";import"./cast-Bjksrh93.js";import"./form-BZPQ5PUM.js";import"./label-DEe8AW1C.js";import"./component-6CIDVndn.js";import"./locale-A4FuYD8q.js";import"./key-D63ExP77.js";import"./observers-D2xgmA06.js";import"./t9n-D0ry3MEw.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const R={button:"button"},I={plus:"plus"},L=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;background-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}calcite-button{--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}calcite-button:hover{--tw-shadow:var(--calcite-shadow-md);--tw-shadow-colored:var(--calcite-shadow-md);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}calcite-button:active{--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([hidden]){display:none}[hidden]{display:none}",_=L,s=f(class extends w{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.appearance="solid",this.kind="brand",this.disabled=!1,this.icon=I.plus,this.iconFlipRtl=!1,this.label=void 0,this.loading=!1,this.scale="m",this.text=void 0,this.textEnabled=!1}componentWillLoad(){g(this)}componentDidLoad(){y(this)}componentDidRender(){v(this)}async setFocus(){await C(this),x(this.buttonEl)}render(){const{appearance:t,kind:l,disabled:e,loading:d,scale:r,textEnabled:c,icon:p,label:o,text:m,iconFlipRtl:b}=this,h=c?null:o||m||null;return a(E,{key:"7953bd06defeddfed5530500901609524f7b58fd",disabled:e},a("calcite-button",{key:"c2bbe2be5e2ac375abab75024005f1eb5afed51c",appearance:t==="solid"?"solid":"outline-fill",class:R.button,disabled:e,iconFlipRtl:b?"start":null,iconStart:p,kind:l,label:o,loading:d,ref:u=>{this.buttonEl=u},round:!0,scale:r,title:h,type:"button",width:"auto"},this.textEnabled?this.text:null))}get el(){return this}static get style(){return _}},[1,"calcite-fab",{appearance:[513],kind:[513],disabled:[516],icon:[513],iconFlipRtl:[516,"icon-flip-rtl"],label:[1],loading:[516],scale:[513],text:[1],textEnabled:[516,"text-enabled"],setFocus:[64]}]);function i(){if(typeof customElements>"u")return;["calcite-fab","calcite-button","calcite-icon","calcite-loader"].forEach(t=>{switch(t){case"calcite-fab":customElements.get(t)||customElements.define(t,s);break;case"calcite-button":customElements.get(t)||k();break;case"calcite-icon":customElements.get(t)||F();break;case"calcite-loader":customElements.get(t)||S();break}})}i();const pt=s,mt=i;export{pt as CalciteFab,mt as defineCustomElement};