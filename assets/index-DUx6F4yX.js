import{k as b,D as v,X as f,K as w,$ as U,R as V,B as ge,W as H,q as $,N as x,P as be,a as y,f as J,A as D,V as ye,t as xe,j as Y,_ as W,Y as F,b as Se,J as Q,c as A,M as C,L as r,Z as we,Q as Z,G as ee,U as $e,T as te}from"./index-BSn6RZnP.js";import"./index-DwIhxbHs.js";import"./index-fFnlo_g2.js";import"./index-DWeq-ojO.js";import"./customElement-BxsvsANk.js";import"./index-BVlRRyQC.js";import{S as oe}from"./jsxFactory-Cnml7uXM.js";import{n as S}from"./ref-D9wHsL_T.js";import{i as T}from"./keyed-CU1C-h1n.js";import{i as se,L as re,c as q,s as h,x as u,e as O,E as P}from"./index-4eY77cms.js";import{t as Ie,I as ie,a as ke,b as De}from"./dom-DEluURzl.js";import{r as he}from"./loadable-XBvaWFYY.js";import"./index-DLytGOKi.js";import"./index-CMxz6F2k.js";import"./index-jjUP6Yam.js";import"./index-B3pS2bTY.js";import"./index-yzfJymDm.js";import"./index-MCMiazMa.js";import{c as Fe}from"./repeat-B6KIBwLP.js";import{m as Ae,p as Oe}from"./interactive-DTzfFku4.js";import{t as Pe}from"./key-CZcQa38B.js";import{m as Te,o as ae,g as He}from"./math-BpAtBkbz.js";import{s as Ne}from"./useT9n-C1Hrfc-A.js";import{b as Re}from"./observers-Co4E8E8j.js";import{t as ne}from"./throttle-DCm6gPaM.js";import"./_commonjsHelpers-DqlTr81k.js";import"./global-BYws3GYH.js";import"./live-D7NQ-TrC.js";import"./directive-helpers-DaBykg1t.js";import"./form-BzoUrXC7.js";import"./label-CHHpnzD0.js";import"./component-CBVlbUuE.js";import"./Validation-BYp9DS84.js";import"./input-DI9tZAPS.js";import"./locale-CXx8I9ox.js";import"./Accessor-BmwT4B0c.js";import"./intl-Duiy0OzY.js";import"./Promise-DfET-uns.js";import"./cast-CsZslgGN.js";import"./JSONSupport-DcrLLGjL.js";import"./Evented-Dw4_VOGn.js";import"./reactiveUtils-XM7cS2OP.js";import"./SimpleObservable-CvOkykwM.js";import"./uuid-Cl5lrJ4c.js";import"./guid-ejniuQmw.js";import"./static-DLD4WjLv.js";import"./core-zHisM37C.js";import"./debounce-DbkufipY.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const B={container:"container",hexInput:"hex-input",opacityInput:"opacity-input"},ze=se`:host{display:block}.container{display:flex;inline-size:100%;flex-wrap:nowrap;align-items:center}.hex-input{flex-grow:1;text-transform:uppercase}.opacity-input{inline-size:100px;margin-inline-start:-1px}:host([hidden]){display:none}[hidden]{display:none}`,j=b(),N=class N extends re{constructor(){super(...arguments),this.internalColor=j,this.alphaChannel=!1,this.allowEmpty=!1,this.hexLabel="Hex",this.scale="m",this.value=v(f(j,this.alphaChannel),this.alphaChannel,!0),this.calciteColorPickerHexInputChange=q({cancelable:!1})}async setFocus(){return await he(this),Ie(this.hexInputNode)}connectedCallback(){super.connectedCallback(),this.previousNonNullValue=this.value;const{allowEmpty:e,alphaChannel:t,value:i}=this;if(i){const a=v(i,t);w(a,t)&&this.internalSetValue(a,a,!1);return}e&&this.internalSetValue(void 0,void 0,!1)}load(){}willUpdate(e){e.has("value")&&(this.hasUpdated||this.value!==v(f(j,this.alphaChannel),this.alphaChannel,!0))&&this.internalSetValue(this.value,e.get("value"),!1)}loaded(){}onHexInputBlur(){const e=this.hexInputNode,t=e.value,i=`#${t}`,{allowEmpty:a,internalColor:n}=this,l=a&&!t,o=U(i);(V(i,!0)||V(i,!1))&&this.onHexInputChange(),!(l||w(i)&&o)&&(e.value=a&&!n?"":this.formatHexForInternalInput(ge(n.object())))}onOpacityInputBlur(){const e=this.opacityInputNode,t=e.value,{allowEmpty:i,internalColor:a}=this;i&&!t||(e.value=i&&!a?"":this.formatOpacityForInternalInput(a))}onOpacityInputInput(){this.onOpacityInputChange()}onHexInputChange(){let e=this.hexInputNode.value;if(e){const t=v(e,!1);if(w(t)&&this.alphaChannel&&this.internalColor){const i=v(this.internalColor.hexa(),!0).slice(-2);e=`${t+i}`}}this.internalSetValue(e,this.value)}onOpacityInputChange(){var i;const e=this.opacityInputNode;let t;if(!e.value)t=e.value;else{const a=H(Number(e.value));t=(i=this.internalColor)==null?void 0:i.alpha(a).hexa()}this.internalSetValue(t,this.value)}onInputFocus(e){e.type==="calciteInternalInputTextFocus"?this.hexInputNode.selectText():this.opacityInputNode.selectText()}onHexInputInput(){const e=`#${this.hexInputNode.value}`,t=this.value;w(e,this.alphaChannel)&&U(e,this.alphaChannel)&&this.internalSetValue(e,t)}onInputKeyDown(e){const{altKey:t,ctrlKey:i,metaKey:a,shiftKey:n}=e,{alphaChannel:l,hexInputNode:o,internalColor:s,value:c}=this,{key:d}=e,p=e.composedPath();if(d==="Tab"&&V(c,this.alphaChannel)||d==="Enter"){p.includes(o)?this.onHexInputChange():this.onOpacityInputChange(),d==="Enter"&&e.preventDefault();return}const g=d==="ArrowDown"||d==="ArrowUp",m=this.value;if(g){if(!c){this.internalSetValue(this.previousNonNullValue,m),e.preventDefault();return}const L=d==="ArrowUp"?1:-1,K=n?10:1;this.internalSetValue(f(this.nudgeRGBChannels(s,K*L,p.includes(o)?"rgb":"a"),l),m),e.preventDefault();return}const z=t||i||a,I=d.length===1,k=be.test(d);I&&!z&&!k&&e.preventDefault()}onHexInputPaste(e){const t=e.clipboardData.getData("text");w(t,this.alphaChannel)&&U(t,this.alphaChannel)&&(e.preventDefault(),this.hexInputNode.value=t.slice(1),this.internalSetValue(t,this.value))}internalSetValue(e,t,i=!0){if(e){const{alphaChannel:a}=this,n=v(e,a,a);if(w(n,a)){const{internalColor:l}=this,o=b(n),s=v(f(o,a),a),c=!l||s!==v(f(l,a),a);this.internalColor=o,this.previousNonNullValue=s,this.value=s,c&&i&&this.calciteColorPickerHexInputChange.emit();return}}else if(this.allowEmpty){this.internalColor=void 0,this.value=void 0,i&&this.calciteColorPickerHexInputChange.emit();return}this.value=t}storeHexInputRef(e){this.hexInputNode=e}storeOpacityInputRef(e){this.opacityInputNode=e}formatHexForInternalInput(e){return e?e.replace("#","").slice(0,6):""}formatOpacityForInternalInput(e){return e?`${$(e.alpha())}`:""}nudgeRGBChannels(e,t,i){let a;const n=e.array(),l=n.slice(0,3);if(i==="rgb")a=[...l.map(o=>o+t),this.alphaChannel?n[3]:void 0];else{const o=H($(e.alpha())+t);a=[...l,o]}return b(a)}render(){const{alphaChannel:e,hexLabel:t,internalColor:i,messages:a,scale:n,value:l}=this,o=this.formatHexForInternalInput(l),s=this.formatOpacityForInternalInput(i),c=n==="l"?"m":"s";return u`<div class=${h(B.container)}><calcite-input-text class=${h(B.hexInput)} .label=${(a==null?void 0:a.hex)||t} .maxLength=${this.alphaChannel?8:6} @keydown=${this.onInputKeyDown} @paste=${this.onHexInputPaste} @calciteInputTextChange=${this.onHexInputChange} @calciteInputTextInput=${this.onHexInputInput} @calciteInternalInputTextBlur=${this.onHexInputBlur} @calciteInternalInputTextFocus=${this.onInputFocus} prefix-text=# .scale=${c} .value=${o} ${S(this.storeHexInputRef)}></calcite-input-text>${e?T("opacity-input",u`<calcite-input-number class=${h(B.opacityInput)} .label=${a==null?void 0:a.opacity} .max=${x.max} max-length=3 .min=${x.min} number-button-type=none .numberingSystem=${this.numberingSystem} @keydown=${this.onInputKeyDown} @calciteInputNumberInput=${this.onOpacityInputInput} @calciteInternalInputNumberBlur=${this.onOpacityInputBlur} @calciteInternalInputNumberFocus=${this.onInputFocus} .scale=${c} suffix-text=% .value=${s} ${S(this.storeOpacityInputRef)}></calcite-input-number>`):null}</div>`}};N.properties={internalColor:16,alphaChannel:5,allowEmpty:5,hexLabel:1,messages:0,numberingSystem:1,scale:3,value:3},N.styles=ze;let _=N;oe("calcite-color-picker-hex-input",_);/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const Le=se`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal);inline-size:var(--calcite-internal-color-picker-min-width);min-inline-size:var(--calcite-internal-color-picker-min-width)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([scale=s]){--calcite-internal-color-picker-min-width: 200px;--calcite-color-picker-spacing: 8px}:host([scale=s]) .saved-colors{gap:.25rem;grid-template-columns:repeat(auto-fill,20px)}:host([scale=m]){--calcite-internal-color-picker-min-width: 240px;--calcite-color-picker-spacing: 12px}:host([scale=l]){--calcite-internal-color-picker-min-width: 304px;--calcite-color-picker-spacing: 16px;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) .section:first-of-type{padding-block-start:var(--calcite-color-picker-spacing)}:host([scale=l]) .saved-colors{grid-template-columns:repeat(auto-fill,32px)}:host([scale=l]) .control-section{display:flex;flex-direction:column;flex-wrap:wrap;align-items:baseline}:host([scale=l]) .color-hex-options{inline-size:100%;display:flex;flex-shrink:1;flex-direction:column;justify-content:space-around}:host([scale=l]) .color-mode-container{flex-shrink:3}.container{background-color:var(--calcite-color-foreground-1);display:flex;flex-direction:column;block-size:min-content;border:1px solid var(--calcite-color-border-1)}.control-and-scope{position:relative;display:flex;cursor:pointer;touch-action:none}.color-field,.control-and-scope{-webkit-user-select:none;user-select:none}.scope{pointer-events:none;position:absolute;z-index:var(--calcite-z-index);block-size:1px;inline-size:1px;border-radius:9999px;background-color:transparent;font-size:var(--calcite-font-size--1);outline-color:transparent}.scope:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))));outline-offset:6px}.hex-and-channels-group{display:flex;inline-size:100%;flex-direction:column;flex-wrap:wrap}.section{padding-block:0 var(--calcite-color-picker-spacing);padding-inline:var(--calcite-color-picker-spacing)}.section:first-of-type{padding-block-start:var(--calcite-color-picker-spacing)}.sliders{display:flex;flex-direction:column;justify-content:space-between;margin-inline-start:var(--calcite-color-picker-spacing);gap:var(--calcite-spacing-xxs)}.preview-and-sliders{display:flex;align-items:center;padding:var(--calcite-color-picker-spacing)}.color-hex-options,.section--split{flex-grow:1}.header{display:flex;align-items:center;justify-content:space-between;color:var(--calcite-color-text-1)}.color-mode-container{padding-block-start:var(--calcite-color-picker-spacing)}.channels{display:flex}.channel{flex-grow:1}.channel[data-channel-index="3"]{margin-inline-start:-1px;min-inline-size:81px}:host([scale=s]) .channel[data-channel-index="3"]{min-inline-size:68px}:host([scale=l]) .channel[data-channel-index="3"]{min-inline-size:88px}.saved-colors{display:grid;gap:.5rem;padding-block-start:var(--calcite-color-picker-spacing);grid-template-columns:repeat(auto-fill,24px)}.saved-colors-buttons{display:flex}.saved-color{outline-offset:0;outline-color:transparent;cursor:pointer}.saved-color:focus{outline:2px solid var(--calcite-color-brand);outline-offset:2px}.saved-color:hover{transition:outline-color var(--calcite-internal-animation-timing-fast) ease-in-out;outline:2px solid var(--calcite-color-border-2);outline-offset:2px}:host([hidden]){display:none}[hidden]{display:none}`,le=16,R=class R extends re{constructor(){super(),this._color=y,this.internalColorUpdateContext=null,this.isActiveChannelInputEmpty=!1,this.mode=J.HEX,this.resizeObserver=Re("resize",e=>this.resizeCanvas(e)),this.shiftKeyChannelAdjustment=0,this.upOrDownArrowKeyTracker=null,this._valueWasSet=!1,this.channelMode="rgb",this.channels=this.toChannels(y),this.staticDimensions=D.m,this.savedColors=[],this.allowEmpty=!1,this.alphaChannel=!1,this.channelsDisabled=!1,this.clearable=!1,this.disabled=!1,this.format="auto",this.hexDisabled=!1,this.messages=Ne({blocking:!0}),this.savedDisabled=!1,this.scale="m",this.calciteColorPickerChange=q({cancelable:!1}),this.calciteColorPickerInput=q({cancelable:!1}),this.captureColorFieldColor=(e,t,i=!0)=>{const{width:a,height:n}=this.dynamicDimensions.colorField,l=Math.round(C.s/a*e),o=Math.round(C.v/n*(n-t));this.internalColorSet(this.baseColorFieldColor.hsv().saturationv(l).value(o),i)},this.drawColorControls=ne((e="all")=>{(e==="all"||e==="color-field")&&this.colorFieldRenderingContext&&this.drawColorField(),(e==="all"||e==="hue-slider")&&this.hueSliderRenderingContext&&this.drawHueSlider(),this.alphaChannel&&(e==="all"||e==="opacity-slider")&&this.opacitySliderRenderingContext&&this.drawOpacitySlider()},le),this.globalPointerMoveHandler=e=>{const{activeCanvasInfo:t,el:i}=this;if(!i.isConnected||!t)return;const{context:a,bounds:n}=t;let l,o;const{clientX:s,clientY:c}=e;a.canvas.matches(":hover")?(l=s-n.x,o=c-n.y):(s<n.x+n.width&&s>n.x?l=s-n.x:s<n.x?l=0:l=n.width,c<n.y+n.height&&c>n.y?o=c-n.y:c<n.y?o=0:o=n.height),a===this.colorFieldRenderingContext?this.captureColorFieldColor(l,o,!1):a===this.hueSliderRenderingContext?this.captureHueSliderColor(l):a===this.opacitySliderRenderingContext&&this.captureOpacitySliderValue(l)},this.globalPointerUpHandler=e=>{if(!ie(e))return;const t=this.activeCanvasInfo;this.activeCanvasInfo=null,this.drawColorControls(),t&&this.calciteColorPickerChange.emit()},this.resizeCanvas=ne(e=>{if(!this.hasUpdated)return;const[t]=e,i=Math.floor(t.contentBoxSize[0].inlineSize);this.dynamicDimensions.colorField.width!==i&&(this.updateDynamicDimensions(i),this.updateCanvasSize(),this.drawColorControls())},le),this.updateDynamicDimensions=e=>{const t={width:ye(e,this.staticDimensions,this.alphaChannel),height:this.staticDimensions.slider.height};this.dynamicDimensions={colorField:xe(e),slider:t}},this.listen("keydown",this.handleChannelKeyUpOrDown,{capture:!0}),this.listen("keyup",this.handleChannelKeyUpOrDown,{capture:!0})}get baseColorFieldColor(){return this.color||this.previousColor||y}get effectiveSliderWidth(){return this.dynamicDimensions.slider.width}get color(){return this._color}set color(e){const t=this._color;this._color=e,this.handleColorChange(e,t)}get value(){return this._value}set value(e){const t=this._value;this._value=e,this.handleValueChange(e,t),this._valueWasSet=!0}async setFocus(){await he(this),ke(this.el)}connectedCallback(){super.connectedCallback(),this.observeResize()}async load(){this._valueWasSet||(this._value??(this._value=v(f(y,this.alphaChannel)))),this.handleAllowEmptyOrClearableChange();const{isClearable:e,color:t,format:i,value:a}=this,n=e&&!a,l=Y(a),o=n||i==="auto"&&l||i===l,s=n?null:o?b(a):t;o||this.showIncompatibleColorWarning(a,i),this.setMode(i,!1),this.internalColorSet(s,!1,"initial"),this.updateStaticDimensions(this.scale),this.updateDynamicDimensions(D[this.scale].minWidth);const c=`${W}${this.storageId}`;this.storageId&&localStorage.getItem(c)&&(this.savedColors=JSON.parse(localStorage.getItem(c)))}willUpdate(e){(e.has("allowEmpty")&&(this.hasUpdated||this.allowEmpty!==!1)||e.has("clearable")&&(this.hasUpdated||this.clearable!==!1))&&this.handleAllowEmptyOrClearableChange(),e.has("alphaChannel")&&(this.hasUpdated||this.alphaChannel!==!1)&&this.handleAlphaChannelChange(this.alphaChannel),this.hasUpdated&&(e.has("alphaChannel")&&this.alphaChannel!==!1||e.has("staticDimensions")&&this.staticDimensions!==D.m)&&this.handleAlphaChannelDimensionsChange(),(e.has("alphaChannel")&&(this.hasUpdated||this.alphaChannel!==!1)||e.has("format")&&(this.hasUpdated||this.format!=="auto"))&&this.handleFormatOrAlphaChannelChange(),e.has("scale")&&(this.hasUpdated||this.scale!=="m")&&this.handleScaleChange(this.scale)}updated(){Ae(this)}loaded(){this.handleAlphaChannelDimensionsChange()}disconnectedCallback(){var e;super.disconnectedCallback(),window.removeEventListener("pointermove",this.globalPointerMoveHandler),window.removeEventListener("pointerup",this.globalPointerUpHandler),(e=this.resizeObserver)==null||e.disconnect()}observeResize(){var e;(e=this.resizeObserver)==null||e.observe(this.el)}handleAllowEmptyOrClearableChange(){this.isClearable=this.clearable||this.allowEmpty}handleAlphaChannelChange(e){const{format:t}=this;e&&t!=="auto"&&!F(t)&&(console.warn(`ignoring alphaChannel as the current format (${t}) does not support alpha`),this.alphaChannel=!1)}handleAlphaChannelDimensionsChange(){this.drawColorControls()}handleColorChange(e,t){this.drawColorControls(),this.updateChannelsFromColor(e),this.previousColor=t}handleFormatOrAlphaChannelChange(){this.setMode(this.format),this.internalColorSet(this.color,!1,"internal")}handleScaleChange(e="m"){this.updateStaticDimensions(e),this.updateCanvasSize(),this.drawColorControls()}handleValueChange(e,t){const{isClearable:i,format:a}=this,n=!i||e;let l=!1;if(n){const d=Y(e);if(!d||a!=="auto"&&d!==a){this.showIncompatibleColorWarning(e,a),this._value=t;return}l=this.mode!==d,this.setMode(d,this.internalColorUpdateContext===null)}const o=this.activeCanvasInfo;if(this.internalColorUpdateContext==="initial")return;if(this.internalColorUpdateContext==="user-interaction"){this.calciteColorPickerInput.emit(),o||this.calciteColorPickerChange.emit();return}const s=i&&!e?null:b(e!=null&&typeof e=="object"&&F(this.mode)?Se(e):e),c=!Q(s,this.color);(l||c)&&this.internalColorSet(s,this.alphaChannel&&!(this.mode.endsWith("a")||this.mode.endsWith("a-css"))||this.internalColorUpdateContext==="internal","internal")}handleTabActivate(e){this.channelMode=e.currentTarget.getAttribute("data-color-mode"),this.updateChannelsFromColor(this.color)}handleColorFieldScopeKeyDown(e){const{key:t}=e,i={ArrowUp:{x:0,y:-10},ArrowRight:{x:10,y:0},ArrowDown:{x:0,y:10},ArrowLeft:{x:-10,y:0}};i[t]&&(e.preventDefault(),this.scopeOrientation=t==="ArrowDown"||t==="ArrowUp"?"vertical":"horizontal",this.captureColorFieldColor(this.colorFieldScopeLeft+i[t].x||0,this.colorFieldScopeTop+i[t].y||0,!1))}handleHueScopeKeyDown(e){const t=e.shiftKey?10:1,{key:i}=e,a={ArrowUp:1,ArrowRight:1,ArrowDown:-1,ArrowLeft:-1};if(a[i]){e.preventDefault();const n=a[i]*t,l=this.baseColorFieldColor.hue(),o=this.baseColorFieldColor.hue(l+n);this.internalColorSet(o,!1)}}handleHexInputChange(e){e.stopPropagation();const{isClearable:t,color:i}=this,a=e.target.value;if(t&&!a){this.internalColorSet(null);return}const n=i&&v(f(i,F(this.mode)));a!==n&&this.internalColorSet(b(a))}handleSavedColorSelect(e){const t=e.currentTarget;this.internalColorSet(b(t.color))}handleChannelInput(e){const t=e.currentTarget,i=Number(t.getAttribute("data-channel-index")),a=i===3?x.max:this.channelMode==="rgb"?A[Object.keys(A)[i]]:C[Object.keys(C)[i]];let n;if(!t.value)n="",this.isActiveChannelInputEmpty=!0,this.upOrDownArrowKeyTracker=null;else{const l=Number(t.value)+this.shiftKeyChannelAdjustment;n=Te(l,0,a).toString()}t.value=n,n!==""&&this.shiftKeyChannelAdjustment!==0?this.handleChannelChange(e):n!==""&&this.handleChannelChange(e)}handleChannelBlur(e){var n;const t=e.currentTarget,i=Number(t.getAttribute("data-channel-index")),a=[...this.channels];!t.value&&!this.isClearable&&(t.value=(n=a[i])==null?void 0:n.toString())}handleChannelFocus(e){e.currentTarget.selectText()}handleChannelKeyUpOrDown(e){this.shiftKeyChannelAdjustment=0;const{key:t}=e;if(t!=="ArrowUp"&&t!=="ArrowDown"||!e.composedPath().some(n=>{var l;return(l=n.classList)==null?void 0:l.contains(r.channel)}))return;const{shiftKey:i}=e;if(e.preventDefault(),!this.color){this.internalColorSet(this.previousColor),e.stopPropagation();return}const a=9;this.shiftKeyChannelAdjustment=t==="ArrowUp"&&i?a:t==="ArrowDown"&&i?-9:0,t==="ArrowUp"&&(this.upOrDownArrowKeyTracker="up"),t==="ArrowDown"&&(this.upOrDownArrowKeyTracker="down")}getChannelInputLimit(e){return this.channelMode==="rgb"?A[Object.keys(A)[e]]:C[Object.keys(C)[e]]}handleChannelChange(e){const t=e.currentTarget,i=Number(t.getAttribute("data-channel-index")),a=[...this.channels];if(this.isClearable&&!t.value){this.channels=[null,null,null,null],this.internalColorSet(null);return}const n=i===3;this.isActiveChannelInputEmpty&&this.upOrDownArrowKeyTracker&&(t.value=this.upOrDownArrowKeyTracker==="up"?(a[i]+1<=this.getChannelInputLimit(i)?a[i]+1:this.getChannelInputLimit(i)).toString():(a[i]-1>=0?a[i]-1:0).toString(),this.isActiveChannelInputEmpty=!1,this.upOrDownArrowKeyTracker=null);const l=t.value?Number(t.value):a[i];a[i]=n?H(l):l,this.updateColorFromChannels(a)}handleSavedColorKeyDown(e){Pe(e.key)&&(e.preventDefault(),this.handleSavedColorSelect(e))}handleColorFieldPointerDown(e){this.handleCanvasControlPointerDown(e,this.colorFieldRenderingContext,this.captureColorFieldColor,this.colorFieldScopeNode)}focusScope(e){requestAnimationFrame(()=>{e.focus()})}handleHueSliderPointerDown(e){this.handleCanvasControlPointerDown(e,this.hueSliderRenderingContext,this.captureHueSliderColor,this.hueScopeNode)}handleOpacitySliderPointerDown(e){this.handleCanvasControlPointerDown(e,this.opacitySliderRenderingContext,this.captureOpacitySliderValue,this.opacityScopeNode)}handleCanvasControlPointerDown(e,t,i,a){ie(e)&&(window.addEventListener("pointermove",this.globalPointerMoveHandler),window.addEventListener("pointerup",this.globalPointerUpHandler,{once:!0}),this.activeCanvasInfo={context:t,bounds:t.canvas.getBoundingClientRect()},i.call(this,e.offsetX,e.offsetY),this.focusScope(a))}storeColorFieldScope(e){this.colorFieldScopeNode=e}storeHueScope(e){this.hueScopeNode=e}handleKeyDown(e){e.key==="Enter"&&e.preventDefault()}showIncompatibleColorWarning(e,t){console.warn(`ignoring color value (${e}) as it is not compatible with the current format (${t})`)}setMode(e,t=!0){const i=e==="auto"?this.mode:e;this.mode=this.ensureCompatibleMode(i,t)}ensureCompatibleMode(e,t){const{alphaChannel:i}=this,a=F(e);if(i&&!a){const n=we(e);return t&&console.warn(`setting format to (${n}) as the provided one (${e}) does not support alpha`),n}if(!i&&a){const n=Z(e);return t&&console.warn(`setting format to (${n}) as the provided one (${e}) does not support alpha`),n}return e}captureHueSliderColor(e){const t=ee/this.effectiveSliderWidth*e;this.internalColorSet(this.baseColorFieldColor.hue(t),!1)}captureOpacitySliderValue(e){const t=H(x.max/this.effectiveSliderWidth*e);this.internalColorSet(this.baseColorFieldColor.alpha(t),!1)}internalColorSet(e,t=!0,i="user-interaction"){t&&Q(e,this.color)||(this.internalColorUpdateContext=i,this.color=e,this.value=this.toValue(e),this.internalColorUpdateContext=null)}toValue(e,t=this.mode){if(!e)return null;if(t.includes("hex")){const a=t===J.HEXA;return v(f(e.round(),a),a)}if(t.includes("-css")){const a=e[t.replace("-css","").replace("a","")]().round().string();if((t.endsWith("a")||t.endsWith("a-css"))&&e.alpha()===1){const n=a.slice(0,3),l=a.slice(4,-1);return`${n}a(${l}, ${e.alpha()})`}return a}const i=e[Z(t)]().round().object();return t.endsWith("a")?$e(i):i}getSliderCapSpacing(){const{staticDimensions:{slider:{height:e},thumb:{radius:t}}}=this;return t*2-e}updateStaticDimensions(e="m"){this.staticDimensions=D[e]}deleteColor(){const e=f(this.color,this.alphaChannel);if(!(this.savedColors.indexOf(e)>-1))return;const t=this.savedColors.filter(a=>a!==e);this.savedColors=t;const i=`${W}${this.storageId}`;this.storageId&&localStorage.setItem(i,JSON.stringify(t))}saveColor(){const e=f(this.color,this.alphaChannel);if(this.savedColors.indexOf(e)>-1)return;const t=[...this.savedColors,e];this.savedColors=t;const i=`${W}${this.storageId}`;this.storageId&&localStorage.setItem(i,JSON.stringify(t))}drawColorField(){const e=this.colorFieldRenderingContext,{width:t,height:i}=this.dynamicDimensions.colorField;e.fillStyle=this.baseColorFieldColor.hsv().saturationv(100).value(100).alpha(1).string(),e.fillRect(0,0,t,i);const a=e.createLinearGradient(0,0,t,0);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=a,e.fillRect(0,0,t,i);const n=e.createLinearGradient(0,0,0,i);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(1,"rgba(0,0,0,1)"),e.fillStyle=n,e.fillRect(0,0,t,i),this.drawActiveColorFieldColor()}setCanvasContextSize(e,{height:t,width:i}){if(!e)return;const a=window.devicePixelRatio||1;e.width=i*a,e.height=t*a,e.style.height=`${t}px`,e.style.width=`${i}px`,e.getContext("2d").scale(a,a)}initColorField(e){e&&(this.colorFieldRenderingContext=e.getContext("2d"),this.updateCanvasSize("color-field"),this.drawColorControls())}initHueSlider(e){e&&(this.hueSliderRenderingContext=e.getContext("2d"),this.updateCanvasSize("hue-slider"),this.drawHueSlider())}initOpacitySlider(e){e&&(this.opacitySliderRenderingContext=e.getContext("2d"),this.updateCanvasSize("opacity-slider"),this.drawOpacitySlider())}updateCanvasSize(e="all"){var n,l,o;const{dynamicDimensions:t,staticDimensions:i}=this;(e==="all"||e==="color-field")&&this.setCanvasContextSize((n=this.colorFieldRenderingContext)==null?void 0:n.canvas,t.colorField);const a={width:this.effectiveSliderWidth,height:i.slider.height+(i.thumb.radius-t.slider.height/2)*2};(e==="all"||e==="hue-slider")&&this.setCanvasContextSize((l=this.hueSliderRenderingContext)==null?void 0:l.canvas,a),(e==="all"||e==="opacity-slider")&&this.setCanvasContextSize((o=this.opacitySliderRenderingContext)==null?void 0:o.canvas,a)}drawActiveColorFieldColor(){const{color:e}=this;if(!e)return;const t=e.hsv(),{staticDimensions:{thumb:{radius:i}}}=this,{width:a,height:n}=this.dynamicDimensions.colorField,l=t.saturationv()/(C.s/a),o=n-t.value()/(C.v/n);requestAnimationFrame(()=>{this.colorFieldScopeLeft=l,this.colorFieldScopeTop=o}),this.drawThumb(this.colorFieldRenderingContext,i,l,o,t,!1)}drawThumb(e,t,i,a,n,l){const o=2*Math.PI,s=1;if(e.beginPath(),e.arc(i,a,t,0,o),e.fillStyle="#fff",e.fill(),e.strokeStyle="rgba(0,0,0,0.3)",e.lineWidth=s,e.stroke(),l&&n.alpha()<1){const d=e.createPattern(this.getCheckeredBackgroundPattern(),"repeat");e.beginPath(),e.arc(i,a,t-3,0,o),e.fillStyle=d,e.fill()}e.globalCompositeOperation="source-atop",e.beginPath(),e.arc(i,a,t-3,0,o);const c=l?n.alpha():1;e.fillStyle=n.rgb().alpha(c).string(),e.fill(),e.globalCompositeOperation="source-over"}drawActiveHueSliderColor(){const{color:e}=this;if(!e)return;const t=e.hsv().saturationv(100).value(100),{staticDimensions:{thumb:{radius:i}}}=this,a=this.effectiveSliderWidth,n=t.hue()/(ee/a),l=i,o=this.getSliderBoundX(n,a,i);requestAnimationFrame(()=>{this.hueScopeLeft=o}),this.drawThumb(this.hueSliderRenderingContext,i,o,l,t,!1)}drawHueSlider(){const e=this.hueSliderRenderingContext,{staticDimensions:{slider:{height:t},thumb:{radius:i}}}=this,a=0,n=i-t/2,l=this.effectiveSliderWidth,o=e.createLinearGradient(0,0,l,0),s=["red","yellow","lime","cyan","blue","magenta","#ff0004"],c=1/(s.length-1);let d=0;s.forEach(p=>{o.addColorStop(d,b(p).string()),d+=c}),e.clearRect(0,0,l,t+this.getSliderCapSpacing()*2),this.drawSliderPath(e,t,l,a,n),e.fillStyle=o,e.fill(),e.strokeStyle="rgba(0,0,0,0.3)",e.lineWidth=1,e.stroke(),this.drawActiveHueSliderColor()}drawOpacitySlider(){const e=this.opacitySliderRenderingContext,{baseColorFieldColor:t,staticDimensions:{slider:{height:i},thumb:{radius:a}}}=this,n=0,l=a-i/2,o=this.effectiveSliderWidth;e.clearRect(0,0,o,i+this.getSliderCapSpacing()*2);const s=e.createLinearGradient(0,l,o,0),c=t.rgb().alpha(0),d=t.rgb().alpha(.5),p=t.rgb().alpha(1);s.addColorStop(0,c.string()),s.addColorStop(.5,d.string()),s.addColorStop(1,p.string()),this.drawSliderPath(e,i,o,n,l);const g=e.createPattern(this.getCheckeredBackgroundPattern(),"repeat");e.fillStyle=g,e.fill(),e.fillStyle=s,e.fill(),e.strokeStyle="rgba(0,0,0,0.3)",e.lineWidth=1,e.stroke(),this.drawActiveOpacitySliderColor()}drawSliderPath(e,t,i,a,n){const l=t/2+1;e.beginPath(),e.moveTo(a+l,n),e.lineTo(a+i-l,n),e.quadraticCurveTo(a+i,n,a+i,n+l),e.lineTo(a+i,n+t-l),e.quadraticCurveTo(a+i,n+t,a+i-l,n+t),e.lineTo(a+l,n+t),e.quadraticCurveTo(a,n+t,a,n+t-l),e.lineTo(a,n+l),e.quadraticCurveTo(a,n,a+l,n),e.closePath()}getCheckeredBackgroundPattern(){if(this.checkerPattern)return this.checkerPattern;const e=document.createElement("canvas");e.width=10,e.height=10;const t=e.getContext("2d");return t.fillStyle="#ccc",t.fillRect(0,0,10,10),t.fillStyle="#fff",t.fillRect(0,0,5,5),t.fillRect(5,5,5,5),this.checkerPattern=e,e}drawActiveOpacitySliderColor(){const{color:e}=this;if(!e)return;const t=e,{staticDimensions:{thumb:{radius:i}}}=this,a=this.effectiveSliderWidth,n=$(t.alpha())/(x.max/a),l=i,o=this.getSliderBoundX(n,a,i);requestAnimationFrame(()=>{this.opacityScopeLeft=o}),this.drawThumb(this.opacitySliderRenderingContext,i,o,l,t,!0)}getSliderBoundX(e,t,i){const a=He(e,t,i);return a===0?e:a===-1?ae(e,0,t,i,i*2):ae(e,0,t,t-i*2,t-i)}storeOpacityScope(e){this.opacityScopeNode=e}handleOpacityScopeKeyDown(e){const t=e.shiftKey?10:1,{key:i}=e,a={ArrowUp:.01,ArrowRight:.01,ArrowDown:-.01,ArrowLeft:-.01};if(a[i]){e.preventDefault();const n=a[i]*t,l=this.baseColorFieldColor.alpha(),o=this.baseColorFieldColor.alpha(l+n);this.internalColorSet(o,!1)}}updateColorFromChannels(e){this.internalColorSet(b(e,this.channelMode))}updateChannelsFromColor(e){this.channels=e?this.toChannels(e):[null,null,null,null]}toChannels(e){const{channelMode:t}=this,i=e[t]().array().map((a,n)=>n===3?a:Math.floor(a));return i.length===3&&i.push(1),i}getAdjustedScopePosition(e,t){return[e-te/2,t-te/2]}render(){const{channelsDisabled:e,color:t,colorFieldScopeLeft:i,colorFieldScopeTop:a,staticDimensions:{thumb:{radius:n}},hexDisabled:l,hueScopeLeft:o,messages:s,alphaChannel:c,opacityScopeLeft:d,savedColors:p,savedDisabled:g,scale:m,scopeOrientation:z}=this,I=this.effectiveSliderWidth,k=t?f(t,c):null,L=n,K=o??I*y.hue()/C.h,ce=n,de=d??I*$(y.alpha())/x.max,X=t===void 0,E=z==="vertical",[pe,ue]=this.getAdjustedScopePosition(i,a),[Ce,me]=this.getAdjustedScopePosition(K,L),[ve,fe]=this.getAdjustedScopePosition(de,ce);return Oe({disabled:this.disabled,children:u`<div class=${h(r.container)}><div class=${h(r.controlAndScope)}><canvas class=${h(r.colorField)} @pointerdown=${this.handleColorFieldPointerDown} ${S(this.initColorField)}></canvas><div .ariaLabel=${E?s.value:s.saturation} .ariaValueMax=${E?C.v:C.s} aria-valuemin=0 .ariaValueNow=${(E?t==null?void 0:t.saturationv():t==null?void 0:t.value())||"0"} class=${h({[r.scope]:!0,[r.colorFieldScope]:!0})} @keydown=${this.handleColorFieldScopeKeyDown} role=slider style=${O({top:`${ue||0}px`,left:`${pe||0}px`})} tabindex=0 ${S(this.storeColorFieldScope)}></div></div><div class=${h(r.previewAndSliders)}><calcite-color-picker-swatch class=${h(r.preview)} .color=${k} .scale=${this.alphaChannel?"l":this.scale}></calcite-color-picker-swatch><div class=${h(r.sliders)}><div class=${h(r.controlAndScope)}><canvas class=${h({[r.slider]:!0,[r.hueSlider]:!0})} @pointerdown=${this.handleHueSliderPointerDown} ${S(this.initHueSlider)}></canvas><div .ariaLabel=${s.hue} .ariaValueMax=${C.h} aria-valuemin=0 .ariaValueNow=${(t==null?void 0:t.round().hue())||y.round().hue()} class=${h({[r.scope]:!0,[r.hueScope]:!0})} @keydown=${this.handleHueScopeKeyDown} role=slider style=${O({top:`${me}px`,left:`${Ce}px`})} tabindex=0 ${S(this.storeHueScope)}></div></div>${c?u`<div class=${h(r.controlAndScope)}><canvas class=${h({[r.slider]:!0,[r.opacitySlider]:!0})} @pointerdown=${this.handleOpacitySliderPointerDown} ${S(this.initOpacitySlider)}></canvas><div .ariaLabel=${s.opacity} .ariaValueMax=${x.max} .ariaValueMin=${x.min} .ariaValueNow=${(t||y).round().alpha()} class=${h({[r.scope]:!0,[r.opacityScope]:!0})} @keydown=${this.handleOpacityScopeKeyDown} role=slider style=${O({top:`${fe}px`,left:`${ve}px`})} tabindex=0 ${S(this.storeOpacityScope)}></div></div>`:null}</div></div>${l&&e?null:u`<div class=${h({[r.controlSection]:!0,[r.section]:!0})}><div class=${h(r.hexAndChannelsGroup)}>${l?null:u`<div class=${h(r.hexOptions)}><calcite-color-picker-hex-input .allowEmpty=${this.isClearable} .alphaChannel=${c} class=${h(r.control)} .messages=${s} .numberingSystem=${this.numberingSystem} @calciteColorPickerHexInputChange=${this.handleHexInputChange} .scale=${m} .value=${k}></calcite-color-picker-hex-input></div>`}${e?null:u`<calcite-tabs class=${h({[r.colorModeContainer]:!0,[r.splitSection]:!0})} .scale=${m==="l"?"m":"s"}><calcite-tab-nav slot=title-group>${this.renderChannelsTabTitle("rgb")}${this.renderChannelsTabTitle("hsv")}</calcite-tab-nav>${this.renderChannelsTab("rgb")}${this.renderChannelsTab("hsv")}</calcite-tabs>`}</div></div>`}${g?null:u`<div class=${h({[r.savedColorsSection]:!0,[r.section]:!0})}><div class=${h(r.header)}><label>${s.saved}</label><div class=${h(r.savedColorsButtons)}><calcite-button appearance=transparent class=${h(r.deleteColor)} .disabled=${X} icon-start=minus kind=neutral .label=${s.deleteColor} @click=${this.deleteColor} .scale=${m} type=button></calcite-button><calcite-button appearance=transparent class=${h(r.saveColor)} .disabled=${X} icon-start=plus kind=neutral .label=${s.saveColor} @click=${this.saveColor} .scale=${m} type=button></calcite-button></div></div>${p.length>0?u`<div class=${h(r.savedColors)}>${Fe(p,M=>M,M=>u`<calcite-color-picker-swatch class=${h(r.savedColor)} .color=${M} @click=${this.handleSavedColorSelect} @keydown=${this.handleSavedColorKeyDown} .scale=${m} tabindex=0></calcite-color-picker-swatch>`)}</div>`:null}</div>`}</div>`})}renderChannelsTabTitle(e){const{channelMode:t,messages:i}=this,a=e===t,n=e==="rgb"?i.rgb:i.hsv;return T(e,u`<calcite-tab-title class=${h(r.colorMode)} data-color-mode=${e??P} @calciteTabsActivate=${this.handleTabActivate} .selected=${a}>${n}</calcite-tab-title>`)}renderChannelsTab(e){const{isClearable:t,channelMode:i,channels:a,messages:n,alphaChannel:l}=this,o=e===i,s=e==="rgb"?[n.red,n.green,n.blue]:[n.hue,n.saturation,n.value],c=De(this.el),d=l?a:a.slice(0,3);return T(e,u`<calcite-tab class=${h(r.control)} .selected=${o}><div class=${h(r.channels)} dir=ltr>${d.map((p,g)=>{const m=g===3;return m&&(p=t&&!p?p:$(p)),this.renderChannel(p,g,s[g],c,m?"%":"")})}</div></calcite-tab>`)}renderChannel(e,t,i,a,n){return T(t,u`<calcite-input-number class=${h(r.channel)} data-channel-index=${t??P} dir=${a??P} .label=${i} lang=${this.messages._lang??P} number-button-type=none .numberingSystem=${this.numberingSystem} @keydown=${this.handleKeyDown} @calciteInputNumberChange=${this.handleChannelChange} @calciteInputNumberInput=${this.handleChannelInput} @calciteInternalInputNumberBlur=${this.handleChannelBlur} @calciteInternalInputNumberFocus=${this.handleChannelFocus} .scale=${this.scale==="l"?"m":"s"} style=${O({marginLeft:t>0&&!(this.scale==="s"&&this.alphaChannel&&t===3)?"-1px":""})} .suffixText=${n} .value=${e==null?void 0:e.toString()}></calcite-input-number>`)}};R.properties={channelMode:16,channels:16,colorFieldScopeLeft:16,colorFieldScopeTop:16,staticDimensions:16,hueScopeLeft:16,opacityScopeLeft:16,savedColors:16,scopeOrientation:16,allowEmpty:7,alphaChannel:5,channelsDisabled:5,clearable:7,color:0,disabled:7,format:3,hexDisabled:5,messageOverrides:0,numberingSystem:3,savedDisabled:7,scale:3,storageId:3,value:1},R.styles=Le;let G=R;oe("calcite-color-picker",G);export{G as ColorPicker};
