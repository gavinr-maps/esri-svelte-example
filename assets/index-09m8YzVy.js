import"./index-DwIhxbHs.js";import"./index-fFnlo_g2.js";import{S as I}from"./jsxFactory-Cnml7uXM.js";import{i as q,L as U,s as v,b as y,x as M,k as w,c as C,q as W,r as Z,e as z,E as K}from"./index-4eY77cms.js";import{i as j}from"./guid-ejniuQmw.js";import{b as J}from"./observers-Co4E8E8j.js";import{n as P}from"./ref-D9wHsL_T.js";import{i as Q}from"./keyed-CU1C-h1n.js";import{I as D,E}from"./dom-DEluURzl.js";import{m as Y}from"./Validation-BYp9DS84.js";import{D as tt,O as et,W as at,B as it}from"./form-BzoUrXC7.js";import{m as st,p as lt}from"./interactive-DTzfFku4.js";import{t as nt}from"./key-CZcQa38B.js";import{v as rt,T as ot,I as ht}from"./label-CHHpnzD0.js";import{r as ct}from"./loadable-XBvaWFYY.js";import{q as O,i as dt}from"./locale-CXx8I9ox.js";import{s as B,m as mt}from"./math-BpAtBkbz.js";import{s as ut}from"./useT9n-C1Hrfc-A.js";import"./Accessor-BmwT4B0c.js";import"./intl-Duiy0OzY.js";import"./Promise-DfET-uns.js";import"./cast-CsZslgGN.js";import"./JSONSupport-DcrLLGjL.js";import"./Evented-Dw4_VOGn.js";import"./reactiveUtils-XM7cS2OP.js";import"./SimpleObservable-CvOkykwM.js";import"./uuid-Cl5lrJ4c.js";import"./directive-helpers-DaBykg1t.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */function gt(g,t,e){const a=t[0]-g[0],i=e[0]-t[0],s=t[1]-g[1],o=e[1]-t[1],r=s/(a||i<0&&0),l=o/(i||a<0&&0),n=(r*i+l*a)/(a+i);return(Math.sign(r)+Math.sign(l))*Math.min(Math.abs(r),Math.abs(l),.5*Math.abs(n))||0}function F(g,t,e){const a=t[0]-g[0],i=t[1]-g[1];return a?(3*i/a-e)/2:e}function X(g,t,e,a,i){const[s,o]=g,[r,l]=t,n=(r-s)/3,h=i([s+n,o+n*e]).join(","),c=i([r-n,l-n*a]).join(","),u=i([r,l]).join(",");return`C ${h} ${c} ${u}`}function pt({width:g,height:t,min:e,max:a}){const i=a[0]-e[0],s=a[1]-e[1];return o=>{const r=(o[0]-e[0])/i*g,l=t-(o[1]-e[1])/s*t;return[r,l]}}function bt(g){const[t,e]=g[0],a=[t,e],i=[t,e];return g.reduce(({min:s,max:o},[r,l])=>({min:[Math.min(s[0],r),Math.min(s[1],l)],max:[Math.max(o[0],r),Math.max(o[1],l)]}),{min:a,max:i})}function ft({data:g,min:t,max:e,t:a}){if(g.length===0)return"";const[i,s]=a(g[0]),[o,r]=a(t),[l]=a(e);let n,h,c;const u=g.reduce((f,p,d)=>{if(h=g[d-2],c=g[d-1],d>1){const k=gt(h,c,p),$=n===void 0?F(h,c,k):n,_=X(h,c,$,k,a);return n=k,`${f} ${_}`}return f},`M ${o},${r} L ${o},${s} L ${i},${s}`),x=g[g.length-1],b=X(c,x,n,F(c,x,n),a);return`${u} ${b} L ${l},${r} Z`}const vt=q`:host{display:block;block-size:100%}.svg{fill:currentColor;stroke:transparent;margin:0;display:block;block-size:100%;inline-size:100%;padding:0}.svg .graph-path--highlight{fill:var(--calcite-graph-highlight-fill-color, var(--calcite-color-brand));opacity:.5}:host([hidden]){display:none}[hidden]{display:none}`,L={svg:"svg",graphPath:"graph-path",graphPathHighlight:"graph-path--highlight"},H=class H extends U{constructor(){super(...arguments),this.graphId=`calcite-graph-${j()}`,this.resizeObserver=J("resize",()=>this.requestUpdate()),this.data=[]}connectedCallback(){var t;super.connectedCallback(),(t=this.resizeObserver)==null||t.observe(this.el)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.disconnect()}render(){const{data:t,colorStops:e,el:a,highlightMax:i,highlightMin:s,min:o,max:r}=this,l=this.graphId,{clientHeight:n,clientWidth:h}=a;if(!t||t.length===0)return M`<svg aria-hidden=true class=${v(L.svg)} height=${n??y} preserveAspectRatio=none viewBox=${`0 0 ${h} ${n}`} width=${h??y}></svg>`;const{min:c,max:u}=bt(t);let x=c,b=u;(o<c[0]||o>c[0])&&(x=[o,0]),(r>u[0]||r<u[0])&&(b=[r,u[1]]);const f=pt({min:x,max:b,width:h,height:n}),[p]=f([s,b[1]]),[d]=f([i,b[1]]),k=ft({data:t,min:c,max:u,t:f}),$=e?`url(#linear-gradient-${l})`:void 0;return M`<svg aria-hidden=true class=${v(L.svg)} height=${n??y} preserveAspectRatio=none viewBox=${`0 0 ${h} ${n}`} width=${h??y}>${e?w`<defs><linearGradient .id=${`linear-gradient-${l}`} x1=0 x2=1 y1=0 y2=0>${e.map(({offset:_,color:N,opacity:G})=>w`<stop offset=${`${_*100}%`} stop-color=${N??y} stop-opacity=${G??y} />`)}</linearGradient></defs>`:null}${s!==void 0?[w`<mask height=100% .id=${`${l}1`} width=100% x=0% y=0%><path d=${`
            M 0,0
            L ${p-1},0
            L ${p-1},${n}
            L 0,${n}
            Z
          `} fill=white /></mask>`,w`<mask height=100% .id=${`${l}2`} width=100% x=0% y=0%><path d=${`
            M ${p+1},0
            L ${d-1},0
            L ${d-1},${n}
            L ${p+1}, ${n}
            Z
          `} fill=white /></mask>`,w`<mask height=100% .id=${`${l}3`} width=100% x=0% y=0%><path d=${`
                M ${d+1},0
                L ${h},0
                L ${h},${n}
                L ${d+1}, ${n}
                Z
              `} fill=white /></mask>`,w`<path class=${v(L.graphPath)} d=${k??y} fill=${$??y} mask=${`url(#${l}1)`} />`,w`<path class=${v(L.graphPathHighlight)} d=${k??y} fill=${$??y} mask=${`url(#${l}2)`} />`,w`<path class=${v(L.graphPath)} d=${k??y} fill=${$??y} mask=${`url(#${l}3)`} />`]:w`<path class=${v(L.graphPath)} d=${k??y} fill=${$??y} />`}</svg>`}};H.properties={colorStops:0,data:0,highlightMax:9,highlightMin:9,max:11,min:11},H.styles=vt;let S=H;I("calcite-graph",S);/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const m={container:"container",containerRange:"container--range",graph:"graph",handle:"handle",handleExtension:"handle-extension",handleLabel:"handle__label",handleLabelMinValue:"handle__label--minValue",handleLabelValue:"handle__label--value",hyphen:"hyphen",hyphenWrap:"hyphen--wrap",static:"static",thumb:"thumb",thumbActive:"thumb--active",thumbContainer:"thumb-container",thumbMinValue:"thumb--minValue",thumbPrecise:"thumb--precise",thumbValue:"thumb--value",tick:"tick",tickActive:"tick--active",tickLabel:"tick__label",tickMax:"tick__label--max",tickMin:"tick__label--min",ticks:"ticks",track:"track",trackRange:"track__range",transformed:"transformed"},A={validationMessage:"validationMessage"},xt=250,$t=q`@charset "UTF-8";:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}.scale--s{--calcite-slider-handle-size: .625rem;--calcite-slider-handle-extension-height: .4rem;--calcite-slider-container-font-size: var(--calcite-font-size--3)}.scale--s .handle__label,.scale--s .tick__label{line-height:.75rem}.scale--m{--calcite-slider-handle-size: .875rem;--calcite-slider-handle-extension-height: .5rem;--calcite-slider-container-font-size: var(--calcite-font-size--2)}.scale--m .handle__label,.scale--m .tick__label{line-height:1rem}.scale--l{--calcite-slider-handle-size: 1rem;--calcite-slider-handle-extension-height: .65rem;--calcite-slider-container-font-size: var(--calcite-font-size--1)}.scale--l .handle__label,.scale--l .tick__label{line-height:1rem}.handle__label,.tick__label{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-slider-text-color, var(--calcite-color-text-2));font-size:var(--calcite-slider-container-font-size)}:host{display:block}:host .validation-container{padding-block-start:0!important}.container{position:relative;display:block;overflow-wrap:normal;word-break:normal;padding-inline:calc(var(--calcite-slider-handle-size) * .5);padding-block:calc(var(--calcite-slider-handle-size) * .5);margin-block:calc(var(--calcite-slider-handle-size) * .5);margin-inline:0;--calcite-slider-full-handle-height: calc( var(--calcite-slider-handle-size) + var(--calcite-slider-handle-extension-height) );touch-action:none;-webkit-user-select:none;user-select:none}:host([disabled]) .track__range,:host([disabled]) .tick--active{background-color:var(--calcite-color-text-3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.scale--s .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset: -.375rem}.scale--m .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset: -.5rem}.scale--l .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset: -.55rem}:host([precise]:not([has-histogram])) .container .thumb--value{--calcite-slider-thumb-y-offset: calc(var(--calcite-slider-full-handle-height) * -1)}.thumb-container{position:relative;max-inline-size:100%}.thumb{--calcite-slider-thumb-x-offset: calc(var(--calcite-slider-handle-size) * .5);position:absolute;margin:0;display:flex;cursor:pointer;flex-direction:column;align-items:center;border-style:none;background-color:transparent;padding:0;font-family:inherit;outline:2px solid transparent;outline-offset:2px;transform:translate(var(--calcite-slider-thumb-x-offset),var(--calcite-slider-thumb-y-offset))}.thumb .handle__label{white-space:nowrap}.thumb .handle__label.static,.thumb .handle__label.transformed{position:absolute;inset-block:0px;opacity:0}.thumb .handle__label.hyphen:after{content:"\u2014";display:inline-block;inline-size:1em}.thumb .handle__label.hyphen--wrap{display:flex}.thumb .handle{box-sizing:border-box;border-radius:9999px;outline-color:transparent;background-color:var(--calcite-slider-handle-fill-color, var(--calcite-color-foreground-1));block-size:var(--calcite-slider-handle-size);inline-size:var(--calcite-slider-handle-size);box-shadow:0 0 0 2px var(--calcite-color-text-3) inset;transition:border var(--calcite-internal-animation-timing-medium) ease,background-color var(--calcite-internal-animation-timing-medium) ease,box-shadow var(--calcite-animation-timing) ease}.thumb .handle-extension{inline-size:.125rem;block-size:var(--calcite-slider-handle-extension-height);background-color:var(--calcite-slider-handle-extension-color, var(--calcite-color-text-3))}.thumb:hover .handle{box-shadow:0 0 0 3px var(--calcite-color-brand) inset}.thumb:hover .handle-extension{background-color:var(--calcite-slider-accent-color, var(--calcite-color-brand))}.thumb:focus .handle{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.thumb:focus .handle-extension{background-color:var(--calcite-slider-accent-color, var(--calcite-color-brand))}.thumb.thumb--minValue{transform:translate(calc(var(--calcite-slider-thumb-x-offset) * -1),var(--calcite-slider-thumb-y-offset))}.thumb.thumb--precise{--calcite-slider-thumb-y-offset: -.125rem}:host([label-handles]) .thumb{--calcite-slider-thumb-x-offset: 50%}:host([label-handles]):host(:not([has-histogram])) .scale--s .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset: -1.4375rem}:host([label-handles]):host(:not([has-histogram])) .scale--m .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset: -1.875rem}:host([label-handles]):host(:not([has-histogram])) .scale--l .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset: -2rem}:host([has-histogram][label-handles]) .handle__label,:host([label-handles]:not([has-histogram])) .thumb--minValue.thumb--precise .handle__label{margin-block-start:.5em}:host(:not([has-histogram]):not([precise])) .handle__label,:host([label-handles]:not([has-histogram])) .thumb--value .handle__label{margin-block-end:.5em}:host([label-handles][precise]):host(:not([has-histogram])) .scale--s .thumb--value{--calcite-slider-thumb-y-offset: -2.075rem}:host([label-handles][precise]):host(:not([has-histogram])) .scale--m .thumb--value{--calcite-slider-thumb-y-offset: -2.75rem}:host([label-handles][precise]):host(:not([has-histogram])) .scale--l .thumb--value{--calcite-slider-thumb-y-offset: -3.0625rem}.thumb:focus .handle,.thumb--active .handle{background-color:var(--calcite-slider-accent-color, var(--calcite-color-brand));box-shadow:0 0 8px #00000029}.thumb:hover.thumb--precise:after,.thumb:focus.thumb--precise:after,.thumb--active.thumb--precise:after{background-color:var(--calcite-slider-accent-color, var(--calcite-color-brand))}.track{position:relative;block-size:.125rem;border-radius:0;background-color:var(--calcite-slider-track-color, var(--calcite-color-border-2));transition:all var(--calcite-internal-animation-timing-medium) ease-in}.track__range{position:absolute;inset-block-start:0px;block-size:.125rem;background-color:var(--calcite-slider-track-fill-color, var(--calcite-color-brand))}.container--range .track__range:hover{cursor:ew-resize}.container--range .track__range:after{position:absolute;inline-size:100%;content:"";inset-block-start:calc(var(--calcite-slider-full-handle-height) * .5 * -1);block-size:calc(var(--calcite-slider-handle-size) + var(--calcite-slider-handle-extension-height))}@media (forced-colors: active){.thumb{outline-width:0;outline-offset:0}.handle{outline:2px solid transparent;outline-offset:2px}.thumb:focus .handle,.thumb .handle-extension,.thumb:hover .handle-extension,.thumb:focus .handle-extension,.thumb:active .handle-extension{background-color:canvasText}.track{background-color:canvasText}.track__range{background-color:highlight}}.tick{position:absolute;block-size:.25rem;inline-size:.125rem;border-width:1px;border-style:solid;background-color:var(--calcite-slider-tick-color, var(--calcite-color-border-input));border-color:var(--calcite-slider-tick-border-color, var(--calcite-color-foreground-1));inset-block-start:-2px;pointer-events:none;margin-inline-start:-.125rem}.tick--active{background-color:var(--calcite-slider-tick-selected-color, var(--calcite-color-brand))}.tick__label{pointer-events:none;margin-block-start:.875rem;display:flex;justify-content:center}.tick__label--min{transition:opacity var(--calcite-animation-timing)}.tick__label--max{transition:opacity var(--calcite-internal-animation-timing-fast)}:host([has-histogram][label-handles]) .tick__label--min,:host([has-histogram][label-handles]) .tick__label--max,:host([has-histogram][precise]) .tick__label--min,:host([has-histogram][precise]) .tick__label--max{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-3)}.graph{color:var(--calcite-slider-graph-color, var(--calcite-color-foreground-3));block-size:48px}:host([label-ticks][ticks]) .container{padding-block-end:calc(.875rem + var(--calcite-slider-container-font-size))}:host([has-histogram]):host([precise][label-handles]) .container{padding-block-end:calc(var(--calcite-slider-full-handle-height) + 1em)}:host([has-histogram]):host([label-handles]:not([precise])) .container{padding-block-end:calc(var(--calcite-slider-handle-size) * .5 + 1em)}:host([has-histogram]):host([precise]:not([label-handles])) .container{padding-block-end:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([precise]:not([label-handles])) .container{padding-block-start:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([precise]:not([label-handles])) .container--range{padding-block-end:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([label-handles]:not([precise])) .container{padding-block-start:calc(var(--calcite-slider-full-handle-height) + 4px)}:host(:not([has-histogram])):host([label-handles][precise]) .container{padding-block-start:calc(var(--calcite-slider-full-handle-height) + var(--calcite-slider-container-font-size) + 4px)}:host(:not([has-histogram])):host([label-handles][precise]) .container--range{padding-block-end:calc(var(--calcite-slider-full-handle-height) + var(--calcite-slider-container-font-size) + 4px)}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:.5rem}:host([scale=s]) .validation-container{padding-block-start:.25rem}::slotted(input[slot=hidden-form-input]){margin:0!important;opacity:0!important;outline:none!important;padding:0!important;position:absolute!important;inset:0!important;transform:none!important;-webkit-appearance:none!important;z-index:-1!important}:host([hidden]){display:none}[hidden]{display:none}`;function V(g){return Array.isArray(g)}const R=class R extends U{constructor(){super(),this.activeProp="value",this.dragEnd=t=>{this.disabled||(this.removeDragListeners(),this.focusActiveHandle(t.clientX),this.lastDragPropValue!=this[this.dragProp]&&this.emitChange(),this.dragProp=null,this.lastDragPropValue=null,this.minValueDragRange=null,this.maxValueDragRange=null,this.minMaxValueRange=null)},this.dragUpdate=t=>{if(!this.disabled&&(t.preventDefault(),this.dragProp)){const e=this.mapToRange(t.clientX||t.pageX);if(V(this.value)&&this.dragProp==="minMaxValue")if(this.minValueDragRange&&this.maxValueDragRange&&this.minMaxValueRange){const a=e-this.minValueDragRange,i=e+this.maxValueDragRange;i<=this.max&&a>=this.min&&i-a===this.minMaxValueRange&&this.setValue({minValue:this.clamp(a,"minValue"),maxValue:this.clamp(i,"maxValue")})}else this.minValueDragRange=e-this.minValue,this.maxValueDragRange=this.maxValue-e,this.minMaxValueRange=this.maxValue-this.minValue;else this.setValue({[this.dragProp]:this.clamp(e,this.dragProp)})}},this.formatValue=t=>(O.numberFormatOptions={locale:this.messages._lang,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator},O.localize(t.toString())),this.guid=`calcite-slider-${j()}`,this.messages=ut({name:null}),this.pointerUpDragEnd=t=>{this.disabled||!D(t)||this.dragEnd(t)},this.maxValueDragRange=null,this.minMaxValueRange=null,this.minValueDragRange=null,this.tickValues=[],this.disabled=!1,this.fillPlacement="start",this.groupSeparator=!1,this.hasHistogram=!1,this.labelHandles=!1,this.labelTicks=!1,this.max=100,this.min=0,this.mirrored=!1,this.precise=!1,this.required=!1,this.scale="m",this.snap=!1,this.status="idle",this.step=1,this.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1},this.value=0,this.calciteSliderChange=C({cancelable:!1}),this.calciteSliderInput=C({cancelable:!1}),this.listen("pointerdown",this.pointerDownHandler),this.listen("keydown",this.handleKeyDown),this.listen("touchstart",this.handleTouchStart)}async setFocus(){var t;await ct(this),(t=this.minHandle?this.minHandle:this.maxHandle)==null||t.focus()}connectedCallback(){super.connectedCallback(),this.setMinMaxFromValue(),this.setValueFromMinMax(),rt(this),tt(this)}load(){V(this.value)||(this.value=this.snap?this.getClosestStep(this.value):this.clamp(this.value)),et(this,this.value)}willUpdate(t){t.has("histogram")&&(this.hasHistogram=!!this.histogram),t.has("ticks")&&(this.tickValues=this.generateTickValues()),t.has("value")&&(this.hasUpdated||this.value!==0)&&this.setMinMaxFromValue(),(t.has("minValue")||t.has("maxValue"))&&this.setValueFromMinMax()}updated(){this.labelHandles&&(this.adjustHostObscuredHandleLabel("value"),V(this.value)&&(this.adjustHostObscuredHandleLabel("minValue"),this.precise&&!this.hasHistogram||this.hyphenateCollidingRangeHandleLabels())),this.hideObscuredBoundingTickLabels(),st(this)}loaded(){}disconnectedCallback(){super.disconnectedCallback(),ot(this),at(this),this.removeDragListeners()}handleKeyDown(t){const e=this.shouldMirror(),{activeProp:a,max:i,min:s,pageStep:o,step:r}=this,l=this[a],{key:n}=t;if(nt(n)){t.preventDefault();return}let h;if(n==="ArrowUp"||n==="ArrowRight"?h=l+r*(e&&n==="ArrowRight"?-1:1):n==="ArrowDown"||n==="ArrowLeft"?h=l-r*(e&&n==="ArrowLeft"?-1:1):n==="PageUp"?o&&(h=l+o):n==="PageDown"?o&&(h=l-o):n==="Home"?h=s:n==="End"&&(h=i),isNaN(h))return;t.preventDefault();const c=Number(h.toFixed(B(r)));this.setValue({[a]:this.clamp(c,a)})}pointerDownHandler(t){if(this.disabled||!D(t))return;const e=t.clientX||t.pageX,a=this.mapToRange(e);let i="value";V(this.value)&&(a>=this.minValue&&a<=this.maxValue&&this.lastDragProp==="minMaxValue"?i="minMaxValue":i=Math.abs(this.maxValue-a)<Math.abs(this.minValue-a)||a>=this.maxValue?"maxValue":"minValue"),this.lastDragPropValue=this[i],this.dragStart(i),this.el.shadowRoot.querySelector(`.${m.thumb}:active`)||this.setValue({[i]:this.clamp(a,i)}),this.focusActiveHandle(e)}handleTouchStart(t){t.preventDefault()}buildThumbType(t){const e=[t];return this.labelHandles&&e.push("labeled"),this.precise&&e.push("precise"),this.hasHistogram&&e.push("histogram"),e.join("-")}setValueFromMinMax(){const{minValue:t,maxValue:e}=this;typeof t=="number"&&typeof e=="number"&&(this.value=[t,e])}setMinMaxFromValue(){const{value:t}=this;V(t)&&(this.minValue=t[0],this.maxValue=t[1])}onLabelClick(){this.setFocus()}shouldMirror(){return this.mirrored&&!this.hasHistogram}shouldUseMinValue(){return V(this.value)?this.hasHistogram&&this.maxValue===0||!this.hasHistogram&&this.minValue===0:!1}getTickDensity(){const t=(this.max-this.min)/this.ticks/xt;return t<1?1:t}generateTickValues(){const t=this.ticks??0;if(t<=0)return[];const e=[this.min],a=this.getTickDensity(),i=t*a;let s=this.min;for(;s<this.max;)s+=i,e.push(Math.min(s,this.max));return e.includes(this.max)||e.push(this.max),e}onThumbBlur(){this.activeProp=null}onThumbFocus(t){const e=t.currentTarget;this.activeProp=e.getAttribute("data-value-prop")}onThumbPointerDown(t){const e=t.currentTarget;this.pointerDownDragStart(t,e.getAttribute("data-value-prop"))}onTrackPointerDown(t){this.pointerDownDragStart(t,"minMaxValue")}pointerDownDragStart(t,e){D(t)&&this.dragStart(e)}dragStart(t){this.dragProp=t,this.lastDragProp=this.dragProp,this.activeProp=t,window.addEventListener("pointermove",this.dragUpdate),window.addEventListener("pointerup",this.pointerUpDragEnd),window.addEventListener("pointercancel",this.dragEnd)}focusActiveHandle(t){this.dragProp==="minValue"?this.minHandle.focus():this.dragProp==="maxValue"||this.dragProp==="value"?this.maxHandle.focus():this.dragProp==="minMaxValue"&&this.getClosestHandle(t).focus()}emitInput(){this.calciteSliderInput.emit()}emitChange(){this.calciteSliderChange.emit()}removeDragListeners(){window.removeEventListener("pointermove",this.dragUpdate),window.removeEventListener("pointerup",this.pointerUpDragEnd),window.removeEventListener("pointercancel",this.dragEnd)}setValue(t){let e;Object.keys(t).forEach(a=>{const i=t[a];e||(e=this[a]!==i),this[a]=i}),e&&(this.dragProp||this.emitChange(),this.emitInput())}storeTrackRef(t){this.trackEl=t}storeThumbRef(t){t&&(t.getAttribute("data-value-prop")==="minValue"?this.minHandle=t:this.maxHandle=t)}clamp(t,e){return t=mt(t,this.min,this.max),e==="maxValue"&&(t=Math.max(t,this.minValue)),e==="minValue"&&(t=Math.min(t,this.maxValue)),t}mapToRange(t){const e=this.max-this.min,{left:a,width:i}=this.trackEl.getBoundingClientRect(),s=(t-a)/i,o=this.shouldMirror(),r=this.clamp(this.min+e*(o?1-s:s)),l=Number(r.toFixed(B(this.step)));return this.snap&&this.step?this.getClosestStep(l):l}getClosestStep(t){const{max:e,min:a,step:i}=this,s=new dt(`${Math.floor((t-a)/i)}`).multiply(`${i}`).add(`${a}`).toString();let o=this.clamp(Number(s));return o>e&&(o-=i),o}getClosestHandle(t){return this.getDistanceX(this.maxHandle,t)>this.getDistanceX(this.minHandle,t)?this.minHandle:this.maxHandle}getDistanceX(t,e){return Math.abs(t.getBoundingClientRect().left-e)}getFontSizeForElement(t){return Number(window.getComputedStyle(t).getPropertyValue("font-size").match(/\d+/)[0])}getUnitInterval(t){t=this.clamp(t);const e=this.max-this.min;return(t-this.min)/e}adjustHostObscuredHandleLabel(t){const e=this.el.shadowRoot.querySelector(`.handle__label--${t}`),a=this.el.shadowRoot.querySelector(`.handle__label--${t}.static`),i=this.el.shadowRoot.querySelector(`.handle__label--${t}.transformed`),s=a.getBoundingClientRect(),o=this.getHostOffset(s.left,s.right);e.style.transform=`translateX(${o}px)`,i.style.transform=`translateX(${o}px)`}hyphenateCollidingRangeHandleLabels(){const{shadowRoot:t}=this.el,e=this.shouldMirror(),a=e?"value":"minValue",i=e?"minValue":"value",s=t.querySelector(`.handle__label--${a}`),o=t.querySelector(`.handle__label--${a}.static`),r=t.querySelector(`.handle__label--${a}.transformed`),l=this.getHostOffset(o.getBoundingClientRect().left,o.getBoundingClientRect().right),n=t.querySelector(`.handle__label--${i}`),h=t.querySelector(`.handle__label--${i}.static`),c=t.querySelector(`.handle__label--${i}.transformed`),u=this.getHostOffset(h.getBoundingClientRect().left,h.getBoundingClientRect().right),x=this.getFontSizeForElement(s),b=this.getRangeLabelOverlap(r,c),f=s,p=x/2;if(b>0){if(f.classList.add(m.hyphen,m.hyphenWrap),u===0&&l===0){let d=b/2-p;d=Math.sign(d)===-1?Math.abs(d):-d;const k=this.getHostOffset(r.getBoundingClientRect().left+d-p,r.getBoundingClientRect().right+d-p);let $=b/2;const _=this.getHostOffset(c.getBoundingClientRect().left+$,c.getBoundingClientRect().right+$);k!==0&&(d+=k,$+=k),_!==0&&(d+=_,$+=_),s.style.transform=`translateX(${d}px)`,r.style.transform=`translateX(${d-p}px)`,n.style.transform=`translateX(${$}px)`,c.style.transform=`translateX(${$}px)`}else if(l>0||u>0)s.style.transform=`translateX(${l+p}px)`,n.style.transform=`translateX(${b+u}px)`,c.style.transform=`translateX(${b+u}px)`;else if(l<0||u<0){let d=Math.abs(l)+b-p;d=Math.sign(d)===-1?Math.abs(d):-d,s.style.transform=`translateX(${d}px)`,r.style.transform=`translateX(${d-p}px)`}}else f.classList.remove(m.hyphen,m.hyphenWrap),s.style.transform=`translateX(${l}px)`,r.style.transform=`translateX(${l}px)`,n.style.transform=`translateX(${u}px)`,c.style.transform=`translateX(${u}px)`}hideObscuredBoundingTickLabels(){const t=V(this.value);if(!this.hasHistogram&&!t&&!this.labelHandles&&!this.precise||!this.hasHistogram&&!t&&this.labelHandles&&!this.precise||!this.hasHistogram&&!t&&!this.labelHandles&&this.precise||!this.hasHistogram&&!t&&this.labelHandles&&this.precise||!this.hasHistogram&&t&&!this.precise||this.hasHistogram&&!this.precise&&!this.labelHandles)return;const e=this.el.shadowRoot.querySelector(`.${m.thumbMinValue}`),a=this.el.shadowRoot.querySelector(`.${m.thumbValue}`),i=this.el.shadowRoot.querySelector(`.${m.tickMin}`),s=this.el.shadowRoot.querySelector(`.${m.tickMax}`);!e&&a&&i&&s&&(i.style.opacity=this.isMinTickLabelObscured(i,a)?"0":"1",s.style.opacity=this.isMaxTickLabelObscured(s,a)?"0":"1"),e&&a&&i&&s&&(i.style.opacity=this.isMinTickLabelObscured(i,e)||this.isMinTickLabelObscured(i,a)?"0":"1",s.style.opacity=this.isMaxTickLabelObscured(s,e)||this.isMaxTickLabelObscured(s,a)&&this.hasHistogram?"0":"1")}getHostOffset(t,e){const{left:a,right:i}=this.el.getBoundingClientRect();return t<a?a-t:e>i?-(e-i):0}getRangeLabelOverlap(t,e){const a=t.getBoundingClientRect(),i=e.getBoundingClientRect(),s=this.getFontSizeForElement(t),o=a.right+s-i.left;return Math.max(o,0)}isMinTickLabelObscured(t,e){const a=t.getBoundingClientRect(),i=e.getBoundingClientRect();return E(a,i)}isMaxTickLabelObscured(t,e){const a=t.getBoundingClientRect(),i=e.getBoundingClientRect();return E(a,i)}internalLabelFormatter(t,e){const a=this.labelFormatter;return a?a(t,e,this.formatValue)??this.formatValue(t):this.formatValue(t)}render(){const t=this.el.id||this.guid,e=V(this.value)?this.maxValue:this.value,a=this.minValue||this.min,i=this.shouldUseMinValue(),s=this.getUnitInterval(i?this.minValue:a)*100,o=this.getUnitInterval(e)*100,r=this.shouldMirror(),l=V(this.value),n=this.buildThumbType("max"),h=this.renderThumb({type:n,thumbPlacement:n.includes("histogram")?"below":"above",maxInterval:o,minInterval:s,mirror:r}),c=this.buildThumbType("min"),u=l?this.renderThumb({type:c,thumbPlacement:c.includes("histogram")||c.includes("precise")?"below":"above",maxInterval:o,minInterval:s,mirror:r}):null,x=l?"start":this.fillPlacement,b=x==="none"?{left:"unset",right:"unset"}:x==="end"?{left:`${r?s:o}%`,right:`${r?o:s}%`}:{left:`${r?100-o:s}%`,right:`${r?s:100-o}%`};return Z(this.el,"id",t),lt({disabled:this.disabled,children:M`<div aria-errormessage=${A.validationMessage} .ariaInvalid=${this.status==="invalid"} .ariaLabel=${ht(this)} class=${v({[m.container]:!0,[m.containerRange]:l,[`scale--${this.scale}`]:!0})}>${this.renderGraph()}<div class=${v(m.track)} ${P(this.storeTrackRef)}><div class=${v(m.trackRange)} @pointerdown=${this.onTrackPointerDown} style=${z(b)}></div><div class=${v(m.ticks)}>${this.tickValues.map(f=>{const p=`${this.getUnitInterval(f)*100}%`;let d=!1;if(x==="start"||x==="end")if(i)d=f>=this.minValue&&f<=this.maxValue;else{const k=x==="start"?a:e,$=x==="start"?e:this.max;d=f>=k&&f<=$}return M`<span class=${v({[m.tick]:!0,[m.tickActive]:d})} style=${z({left:r?"":p,right:r?p:""})}>${this.renderTickLabel(f)}</span>`})}</div></div><div class=${v(m.thumbContainer)}>${u}${h}${it({component:this})}</div></div>${this.validationMessage&&this.status==="invalid"?Y({icon:this.validationIcon,id:A.validationMessage,message:this.validationMessage,scale:this.scale,status:this.status}):null}`})}renderThumb({type:t,mirror:e,thumbPlacement:a,minInterval:i,maxInterval:s}){const o=t.includes("labeled"),r=t.includes("precise"),l=t.includes("min"),n=V(this.value),h=l?this.minValue:n?this.maxValue:this.value,c=l?"minValue":n?"maxValue":"value",u=l?this.minLabel:n?this.maxLabel:this.minLabel,x=l?this.minValue:h,b=c==="minValue"?this.internalLabelFormatter(this.minValue,"min"):c==="maxValue"?this.internalLabelFormatter(this.maxValue,"max"):this.internalLabelFormatter(h,"value"),f=l?{left:`${e?100-i:i}%`}:{right:`${e?s:100-s}%`},p=`${m.handleLabel} ${l?m.handleLabelMinValue:m.handleLabelValue}`,d=[...o?[M`<span aria-hidden=true class=${v(p)}>${b}</span>`,M`<span aria-hidden=true class=${`${p} ${m.static}`}>${b}</span>`,M`<span aria-hidden=true class=${`${p} ${m.transformed}`}>${b}</span>`]:[],M`<div class=${v(m.handle)}></div>`,r&&M`<div class=${v(m.handleExtension)}></div>`||""];return a==="below"&&d.reverse(),Q(t,M`<div .ariaLabel=${u} aria-orientation=horizontal .ariaValueMax=${this.max} .ariaValueMin=${this.min} .ariaValueNow=${x} class=${v({[m.thumb]:!0,[m.thumbValue]:!l,[m.thumbActive]:this.lastDragProp!=="minMaxValue"&&this.dragProp===c,[m.thumbPrecise]:r,[m.thumbMinValue]:l})} data-value-prop=${c??K} @blur=${this.onThumbBlur} @focus=${this.onThumbFocus} @pointerdown=${this.onThumbPointerDown} role=slider style=${z(f)} tabindex=0 ${P(this.storeThumbRef)}>${d}</div>`)}renderGraph(){return this.histogram?M`<calcite-graph class=${v(m.graph)} .colorStops=${this.histogramStops} .data=${this.histogram} .highlightMax=${V(this.value)?this.maxValue:this.value} .highlightMin=${V(this.value)?this.minValue:this.min} .max=${this.max} .min=${this.min}></calcite-graph>`:null}renderTickLabel(t){const{hasHistogram:e,labelHandles:a,labelTicks:i,max:s,min:o,precise:r,value:l}=this,n=V(l),h=t===o,c=t===s,u=h||c;return i&&(!e&&(u||!r||!n)||e&&(u||!r&&!a))?M`<span class=${v({[m.tickLabel]:!0,[m.tickMin]:h,[m.tickMax]:c})}>${this.internalLabelFormatter(t,"tick")}</span>`:null}};R.properties={maxValueDragRange:16,minMaxValueRange:16,minValueDragRange:16,tickValues:16,disabled:7,fillPlacement:3,form:3,groupSeparator:7,hasHistogram:7,histogram:0,histogramStops:0,labelFormatter:0,labelHandles:7,labelTicks:7,max:11,maxLabel:1,maxValue:9,min:11,minLabel:1,minValue:9,mirrored:7,name:3,numberingSystem:1,pageStep:11,precise:7,required:7,scale:3,snap:7,status:3,step:11,ticks:11,validationIcon:[3,{converter:W}],validationMessage:1,validity:0,value:11},R.shadowRootOptions={mode:"open",delegatesFocus:!0},R.styles=$t;let T=R;I("calcite-slider",T);export{T as Slider};
