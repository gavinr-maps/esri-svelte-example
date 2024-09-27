import{p as f,H as u,h as e,C as b,c as m}from"./jsxFactory-CbAu6VfF.js";import{g as k,f as g}from"./dom-Cv0oa6So.js";import{c as y,u as E,d as v,I as x}from"./interactive-Dtpmn6Ls.js";import{s as C,a as z,c as w}from"./loadable-CTFTnu2T.js";import{d as R}from"./icon-DIKjN-ev.js";import"./Evented-CXIxDjmW.js";import"./Accessor-D6mNnsWy.js";import"./subclass-BR3PhgZG.js";import"./intl-Dpfm8vPB.js";import"./Promise-CZrWwByK.js";import"./jsonMap-DCC6W5ex.js";import"./assets-C2mb-ea2.js";import"./index-CeCSsEgo.js";import"./reactiveUtils-BFQ0BtrB.js";import"./shared-B3wH2qpO.js";import"./uuid-fwrPAdZb.js";import"./observers-EizV_Lvc.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.2
 */const F=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline}:host a,:host span{position:relative;display:flex;cursor:pointer;align-items:center;justify-content:center;border-radius:0px;border-style:none;font-family:inherit;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;text-decoration:none;line-height:inherit;font-size:inherit;-webkit-appearance:none}:host a:hover,:host span:hover{text-decoration:none}:host a,:host span{outline-color:transparent}:host a:focus,:host span:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}calcite-icon{inline-size:1em;block-size:1em;min-inline-size:unset;min-block-size:unset}.calcite-link--icon{vertical-align:middle;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;margin-block-start:-0.25em}:host .calcite-link--icon.icon-start{margin-inline-end:0.5rem}:host .calcite-link--icon.icon-end{margin-inline-start:0.5rem}:host span,:host a{position:relative;display:inline;border-style:none;background-color:transparent;padding:0px;color:var(--calcite-color-text-link);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;line-height:inherit;white-space:initial;background-image:linear-gradient(currentColor, currentColor), linear-gradient(var(--calcite-color-brand-underline), var(--calcite-color-brand-underline));background-position-x:0%, 100%;background-position-y:min(1.5em, 100%);background-repeat:no-repeat, no-repeat;background-size:0% 1px, 100% 1px}:host span:hover,:host span:focus,:host a:hover,:host a:focus{background-size:100% 1px, 100% 1px}:host span:active,:host a:active{background-size:100% 2px, 100% 2px}:host span.calcite--rtl,:host a.calcite--rtl{background-position:100% 100%, 100% 100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`,I=F,o=f(class extends u{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.childElClickHandler=t=>{t.isTrusted||t.stopPropagation()},this.storeTagRef=t=>{this.childEl=t},this.disabled=!1,this.download=!1,this.href=void 0,this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconStart=void 0,this.rel=void 0,this.target=void 0}connectedCallback(){y(this)}componentWillLoad(){C(this)}componentDidLoad(){z(this)}componentDidRender(){E(this)}disconnectedCallback(){v(this)}render(){const{download:t,el:a}=this,l=k(a),n=this.href?"a":"span",r=e("calcite-icon",{key:"98cdfc979033eb5e339557d4d1a2143c9db9481d",class:"calcite-link--icon icon-start",flipRtl:this.iconFlipRtl==="start"||this.iconFlipRtl==="both",icon:this.iconStart,scale:"s"}),d=e("calcite-icon",{key:"df0cfff6b187899330ec32a74132ca9d6ccb71f6",class:"calcite-link--icon icon-end",flipRtl:this.iconFlipRtl==="end"||this.iconFlipRtl==="both",icon:this.iconEnd,scale:"s"}),i=n,h=n==="span"?"link":null,p=n==="span"?0:null;return e(m,{key:"e0db07bcdf54a1558d2ee5f7d72dc6b3c9b7b4fc",role:"presentation"},e(x,{key:"84e1d20ffe03e7776560fa3f3bcc51a0e17c39ca",disabled:this.disabled},e(i,{key:"3d37687afd90675d8aab80bce396e765d81b580e",class:{[b.rtl]:l==="rtl"},download:i==="a"&&(t===""||t)?t:null,href:i==="a"&&this.href,onClick:this.childElClickHandler,ref:this.storeTagRef,rel:i==="a"&&this.rel,role:h,tabIndex:p,target:i==="a"&&this.target},this.iconStart?r:null,e("slot",{key:"14a04fe0a03318cfa130744530bff8d68450c317"}),this.iconEnd?d:null)))}clickHandler(t){this.disabled||t.isTrusted||this.childEl.click()}async setFocus(){await w(this),g(this.childEl)}get el(){return this}static get style(){return I}},[1,"calcite-link",{disabled:[516],download:[520],href:[513],iconEnd:[513,"icon-end"],iconFlipRtl:[513,"icon-flip-rtl"],iconStart:[513,"icon-start"],rel:[1],target:[1],setFocus:[64]},[[0,"click","clickHandler"]]]);function s(){if(typeof customElements>"u")return;["calcite-link","calcite-icon"].forEach(t=>{switch(t){case"calcite-link":customElements.get(t)||customElements.define(t,o);break;case"calcite-icon":customElements.get(t)||R();break}})}s();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.2
 */const M=o,O=s;export{M as CalciteLink,O as defineCustomElement};
