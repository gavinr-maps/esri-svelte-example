import{o as p,e as f,F as d,t as h}from"./Accessor-BHnuXKD2.js";import{t as g,_ as y}from"./InputManager-Bs9UE-jw.js";const s="z",a="r",l={redo:a,undo:s,center:"Alt",constraint:"Shift",cancel:"Escape",delete:["Backspace","Delete"],complete:"Enter",vertexAdd:"f",pan:" "},w={toggle:"Control"},A={enterInputMode:"Tab",commit:"Enter",discard:"Escape",next:"Tab"},S={moveUp:{key:"ArrowUp",modifier:"Shift",repeats:!0},moveDown:{key:"ArrowDown",modifier:"Shift",repeats:!0},moveLeft:{key:"ArrowLeft",modifier:"Shift",repeats:!0},moveRight:{key:"ArrowRight",modifier:"Shift",repeats:!0},scaleUp:{key:"+",modifier:"Shift"},scaleDown:{key:"-",modifier:"Shift"},factorModifier:{key:g,continuePropagation:!0},toggleOpacity:"t",preserveAspectRatio:{key:"Shift",continuePropagation:!0},rotateIncrements:{key:"Shift",continuePropagation:!0},editSourcePoints:{key:"Alt",continuePropagation:!0},undo:s,redo:a};class P{constructor(){this._bindings=new Map}add(t,e){return this.addToggle(t,i=>{i.type==="key-down"&&e(i)})}addToggle(t,e){const i=n.fromDefinition(t,e),o=p(this._bindings,i.key,()=>[]);return o.push(i),f(()=>d(o,i))}register(t,e=y.WIDGET){return h([t.on("key-down",i=>this.dispatch(t.inputManager,i),e),t.on("key-up",i=>this.dispatch(t.inputManager,i),e)])}dispatch(t,e){const i=e.key,o=this._bindings.get(i);if(o)for(const r of o)r.process(t,e)}}class n{constructor(t,e,i,o,r){this.key=t,this.modifiers=e,this.repeats=i,this.continuePropagation=o,this.callback=r}process(t,e){if(!(e.key!==this.key||"repeat"in e&&e.repeat&&!this.repeats)){for(const i of this.modifiers)if(!t.isModifierKeyDown(i))return;this.continuePropagation||e.stopPropagation(),this.callback(e)}}static fromDefinition(t,e){if(typeof t=="string")return new n(t,[],!1,!1,e);const{key:i,modifier:o,repeats:r,continuePropagation:c}=t;return new n(i,o?Array.isArray(o)?o:[o]:[],!!r,!!c,e)}}export{w as c,S as d,A as f,P as h,l as p};
