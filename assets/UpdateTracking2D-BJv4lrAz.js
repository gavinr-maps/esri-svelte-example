import{r as m,m as f,a as g,g as y,M as $}from"./Accessor-BHnuXKD2.js";import{s as T}from"./ReactiveMap-Dwhwbx9R.js";import{d as v}from"./reactiveUtils-BR0C1Kq4.js";import{h as x}from"./UpdatingHandles-ptqz1ck8.js";var u;(function(t){t.Local="Local",t.Global="Global"})(u||(u={}));let n=class{generateSource(o){const e=[];for(let a=1;a<this.length;a++)e.push(`vec4 atom${a} = texture(${o.animationTexture}, (pointer + 0.5) / size);`),e.push("pointer.x += 1.0;");for(let a=0;a<this.ins;a++)e.push("top--;"),e.push(`vec4 in${this.ins-a-1} = stack[top];`);for(let a=0;a<this.outs;a++)e.push(`vec4 out${a};`);const{microcode:i}=this;for(const a of i)e.push(a);for(let a=0;a<this.outs;a++)e.push(`stack[top] = out${a};`),e.push("top++;"),e.push(`if (top >= ${p}) { top = ${p-1}; }`);return e}},s=128;class S extends n{constructor(){super(...arguments),this.opcode=++s,this.length=1,this.ins=0,this.outs=0,this.microcode=["break;"]}encode(){return[[this.opcode,0,0,0]]}}let O=class extends n{constructor(){super(...arguments),this.opcode=++s,this.length=1,this.ins=0,this.outs=1,this.microcode=["out0 = vec4(atom0.y, atom0.y, atom0.y, atom0.y);"]}encode(o){return[[this.opcode,o,0,0]]}},A=class extends n{constructor(){super(...arguments),this.opcode=++s,this.length=1,this.ins=0,this.outs=1,this.microcode=["out0 = vec4(atom0.yzw, 0.0);"]}encode(o){return[[this.opcode,o[0]||0,o[1]||0,o[2]||0]]}},w=class extends n{constructor(){super(...arguments),this.opcode=++s,this.length=2,this.ins=0,this.outs=1,this.microcode=["out0 = atom1;"]}encode(o){return[[this.opcode,0,0,0],o]}};function r(t){return[`float duration = clamp(${t.duration}, 0.05, 3600.0);`,`float startTimeOffset = ${t.startTimeOffset};`,`float repeatDelay = ${t.repeatDelay};`,`float timeOriginSelector = ${t.timeOriginSelector};`,`float repeatType = ${t.repeatType};`,`float easing = ${t.easing};`,`float playAnimation = ${t.playAnimation} * (1.0 - step(0.0, -${t.duration}));`,`float reverseAnimation = ${t.reverseAnimation};`,"float time = globalTime - (timeOriginSelector == 1.0 ? localTimeOrigin : 0.0);","time *= playAnimation;","time *= 1.0 - reverseAnimation * 2.0;","float period = duration + repeatDelay;","time += reverseAnimation == 1.0 ? (period - startTimeOffset - 0.001) : startTimeOffset + 0.001;","float omega = time / period;","float oi = floor(omega);","omega = repeatType == 1.0 || repeatType == 3.0 ? omega - oi : omega;","float of = omega * period;","of = (clamp(of, reverseAnimation * repeatDelay, period - (1.0 - reverseAnimation) * repeatDelay) - reverseAnimation * repeatDelay) / duration;","of = easing == 2.0 ? pow(of, 3.0) : of;","of = easing == 3.0 ? 1.0 - pow(1.0 - of, 3.0) : of;","of = easing == 4.0 ? of < 0.5 ? 4.0 * pow(of, 3.0) : 1.0 - pow(-2.0 * of + 2.0, 3.0) / 2.0 : of;","bool oscillate = repeatType == 3.0 && mod(oi, 2.0) == 1.0;",`${t.out} = oscillate ? 1.0 - of : of;`]}const D={Linear:1,EaseIn:2,EaseOut:3,EaseInOut:4},b={Loop:1,None:2,Oscillate:3},z={Local:1,Global:2};function l(t){const o=D[t.easing],e=b[t.repeatType],i=z[t.timeOriginSelector];return[[t.duration,t.startTimeOffset,t.repeatDelay,i],[e,o,t.playAnimation,t.reverseAnimation]]}let C=class extends n{constructor(){super(...arguments),this.opcode=++s,this.length=10,this.ins=1,this.outs=1,this.microcode=["vec2 fromTranslation = atom1.xy;","vec2 toTranslation = atom1.zw;","float fromRotation = atom2.x;","float toRotation = atom2.y;","float fromScale = atom2.z;","float toScale = atom2.w;","bool relativeTranslation = atom9.x == 1.0;","bool absoluteScale = atom9.y == 1.0;","vec2 translationMultiplier = relativeTranslation ? pixelDimensions : vec2(1.0, 1.0);","float scaleDivisor = absoluteScale ? pixelDimensions.y : 1.0;","float fTranslation;","{",...r({duration:"atom3.x",startTimeOffset:"atom3.y",repeatDelay:"atom3.z",timeOriginSelector:"atom3.w",repeatType:"atom4.x",easing:"atom4.y",playAnimation:"atom4.z",reverseAnimation:"atom4.w",out:"fTranslation"}),"}","float fRotation;","{",...r({duration:"atom5.x",startTimeOffset:"atom5.y",repeatDelay:"atom5.z",timeOriginSelector:"atom5.w",repeatType:"atom6.x",easing:"atom6.y",playAnimation:"atom6.z",reverseAnimation:"atom6.w",out:"fRotation"}),"}","float fScale;","{",...r({duration:"atom7.x",startTimeOffset:"atom7.y",repeatDelay:"atom7.z",timeOriginSelector:"atom7.w",repeatType:"atom8.x",easing:"atom8.y",playAnimation:"atom8.z",reverseAnimation:"atom8.w",out:"fScale"}),"}","vec2 aTranslation = mix(fromTranslation, toTranslation, fTranslation);","float aRotation = mix(fromRotation, toRotation, fRotation);","float aScale = mix(fromScale, toScale, fScale);","vec2 pTranslation = in0.xy;","float pRotation = in0.z;","float pScale = in0.w;","aTranslation *= translationMultiplier;","aScale /= scaleDivisor;","float rotation = pRotation + aRotation;","float scale = pScale * aScale;","float sin1 = sin(pRotation);","float cos1 = cos(pRotation);","float s1 = pScale;","float x1 = pTranslation.x;","float y1 = pTranslation.y;","float x2 = aTranslation.x;","float y2 = aTranslation.y;",`
    vec2 translation = vec2(
      cos1 * s1 * x2 - sin1 * s1 * y2 + x1,
      sin1 * s1 * x2 + cos1 * s1 * y2 + y1
    );
    `,"out0 = vec4(translation, rotation, scale);"]}encode(o){return[[this.opcode,0,0,0],[o.translation.from[0],o.translation.from[1],o.translation.to[0],o.translation.to[1]],[o.rotation.from,o.rotation.to,o.scale.from,o.scale.to],...l(o.translation.timing),...l(o.rotation.timing),...l(o.scale.timing),[o.relativeTranslation?1:0,o.absoluteScale?1:0,0,0]]}},R=class extends n{constructor(){super(...arguments),this.opcode=++s,this.length=7,this.ins=1,this.outs=1,this.microcode=["float fromOpacity = atom0.y;","float toOpacity = atom0.z;","vec4 fromColor = atom1;","vec4 toColor = atom2;","float fColor;","{",...r({duration:"atom3.x",startTimeOffset:"atom3.y",repeatDelay:"atom3.z",timeOriginSelector:"atom3.w",repeatType:"atom4.x",easing:"atom4.y",playAnimation:"atom4.z",reverseAnimation:"atom4.w",out:"fColor"}),"}","float fOpacity;","{",...r({duration:"atom5.x",startTimeOffset:"atom5.y",repeatDelay:"atom5.z",timeOriginSelector:"atom5.w",repeatType:"atom6.x",easing:"atom6.y",playAnimation:"atom6.z",reverseAnimation:"atom6.w",out:"fOpacity"}),"}","vec4 aColor = mix(fromColor, toColor, fColor);","aColor.a *= mix(fromOpacity, toOpacity, fOpacity);","vec4 pColor = in0;","out0 = aColor * pColor;"]}encode(o){return[[this.opcode,o.opacity.from,o.opacity.to,0],[o.color.from[0],o.color.from[1],o.color.from[2],o.color.from[3]],[o.color.to[0],o.color.to[1],o.color.to[2],o.color.to[3]],...l(o.color.timing),...l(o.opacity.timing)]}};const d={scalar:new O,vector3:new A,vector4:new w,animatedTransform:new C,animatedColor:new R,ret:new S},k=40,p=4;function q(t){const o=[];o.push(`float globalTime = ${t.globalTime};`),o.push(`float localTimeOrigin = ${t.localTimeOrigin};`),o.push(`vec2 pointer = ${t.animationPointer};`),o.push(`vec2 size = ${t.animationTextureSize};`),o.push("int top = 0;"),o.push(`vec4 stack[${p}];`),o.push(`for (int counter = 0; counter < ${k}; counter++) {`),o.push(`vec4 atom0 = texture(${t.animationTexture}, (pointer + 0.5) / size);`),o.push("pointer.x += 1.0;"),o.push(`vec2 pixelDimensions = ${t.pixelDimensions};`),o.push("if (false) {");for(const e in d){const i=d[e];o.push(`} else if (int(atom0.x) == ${i.opcode}) {`);for(const a of i.generateSource(t))o.push(a)}return o.push("} // End if-else."),o.push("} // End for."),o.push(`${t.out} = top > 0 ? stack[top - 1] : vec4(0.0);`),o.join(`
`)}var h;(function(t){t[t.Geographic=0]="Geographic",t[t.Arithmatic=1]="Arithmatic"})(h||(h={}));const B=3.14159265359/180,J=3.14159265359/128,K=1,Q=1.1,V=1,W=24,X=8,Y=1e-5,Z=.05,oo=1e-30,to=4,ao=0,eo=2,io=2,no=3,so=0,ro=3,lo=16777216,co=1.1,mo=16,po=128,fo={bitset:{isSDF:0,isMapAligned:1,scaleSymbolsProportionally:2,overrideOutlineColor:3,colorLocked:4,isStroke:5}},uo={linear:0,rectangular:1,circular:2},ho={isAbsolute:0,isDiscrete:1},go={isAlongLine:0,isAbsoluteSize:1,isDiscrete:2},L=8388607,_=8388608,yo=t=>t&L;function $o(t,o){return((o?_:0)|t)>>>0}let c=class extends y{constructor(t){super(t),this.debugName="",this._updatingHandles=new x,this._idToUpdatingState=new T}get updating(){const t=this._updatingHandles.updating||Array.from(this._idToUpdatingState.values()).some(o=>o);if($("esri-2d-log-updating")){const o=Array.from(this._idToUpdatingState.entries()).map(([e,i])=>`-> ${e}: ${i}`).join(`
`);console.log(`${this.debugName}: Updating: ${t}
-> Handles: ${this._updatingHandles.updating}
${o}`)}return t}addUpdateTracking(t,o){const e=v(()=>o.updating,i=>this._idToUpdatingState.set(t,i),{sync:!0});this.addHandles(e)}addPromise(t){return this._updatingHandles.addPromise(t)}};m([f({constructOnly:!0})],c.prototype,"debugName",void 0),m([f({readOnly:!0})],c.prototype,"updating",null),c=m([g("esri.views.2d.layers.support.UpdateTracking2D")],c);export{W as A,ao as B,eo as C,io as D,no as E,so as F,X as G,ro as H,lo as I,co as J,mo as K,po as L,go as a,B as b,J as c,c as d,ho as e,yo as f,K as g,d as h,h as i,Q as j,oo as k,V as l,Y as m,L as n,fo as o,to as q,uo as r,$o as s,u as t,Z as u,q as x};
