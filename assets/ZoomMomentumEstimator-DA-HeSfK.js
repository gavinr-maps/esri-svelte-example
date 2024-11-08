import{o as u,r as o,g as c}from"./vec32-Dvg_eL9J.js";import{n as d}from"./vec3f64-BLpZdpfb.js";import{r as m}from"./mathUtils-C4_ghTv4.js";let a=class{constructor(t){this._gain=t,this.lastValue=void 0,this.filteredDelta=void 0}update(t){if(this.hasLastValue()){const e=this.computeDelta(t);this._updateDelta(e)}this.lastValue=t}reset(){this.lastValue=void 0,this.filteredDelta=void 0}hasLastValue(){return this.lastValue!==void 0}hasFilteredDelta(){return this.filteredDelta!==void 0}computeDelta(t){return this.lastValue===void 0?NaN:t-this.lastValue}_updateDelta(t){this.filteredDelta!==void 0?this.filteredDelta=(1-this._gain)*this.filteredDelta+this._gain*t:this.filteredDelta=t}};class n{constructor(t,e,i){this._initialVelocity=t,this._stopVelocity=e,this._friction=i,this._duration=Math.abs(Math.log(Math.abs(this._initialVelocity)/this._stopVelocity)/Math.log(1-this._friction))}get duration(){return this._duration}isFinished(t){return t>this.duration}get friction(){return this._friction}value(t){return this.valueFromInitialVelocity(this._initialVelocity,t)}valueDelta(t,e){const i=this.value(t);return this.value(t+e)-i}valueFromInitialVelocity(t,e){e=Math.min(e,this.duration);const i=1-this.friction;return t*(i**e-1)/Math.log(i)}}class _ extends n{constructor(t,e,i,s,r){super(t,e,i),this._sceneVelocity=s,this.direction=r}value(t){return super.valueFromInitialVelocity(this._sceneVelocity,t)}}class M{constructor(t=300,e=12,i=.84){this._minimumInitialVelocity=t,this._stopVelocity=e,this._friction=i,this.enabled=!0,this._time=new a(.6),this._screen=[new a(.4),new a(.4)],this._scene=[new a(.6),new a(.6),new a(.6)],this._tmpDirection=d()}add(t,e,i){if(this.enabled){if(this._time.hasLastValue()&&this._time.computeDelta(i)<.015)return;this._screen[0].update(t[0]),this._screen[1].update(t[1]),this._scene[0].update(e[0]),this._scene[1].update(e[1]),this._scene[2].update(e[2]),this._time.update(i)}}reset(){this._screen[0].reset(),this._screen[1].reset(),this._scene[0].reset(),this._scene[1].reset(),this._scene[2].reset(),this._time.reset()}evaluateMomentum(){if(!this.enabled||!this._screen[0].hasFilteredDelta()||!this._time.hasFilteredDelta())return null;const t=this._screen[0].filteredDelta,e=this._screen[1].filteredDelta,i=t==null||e==null?0:Math.sqrt(t*t+e*e),s=this._time.filteredDelta,r=s==null||i==null?0:i/s;return Math.abs(r)<this._minimumInitialVelocity?null:this.createMomentum(r,this._stopVelocity,this._friction)}createMomentum(t,e,i){u(this._tmpDirection,this._scene[0].filteredDelta??0,this._scene[1].filteredDelta??0,this._scene[2].filteredDelta??0);const s=o(this._tmpDirection);s>0&&c(this._tmpDirection,this._tmpDirection,1/s);const r=this._time.filteredDelta;return new _(t,e,i,r==null?0:s/r,this._tmpDirection)}}let h=class{constructor(t=2.5,e=.01,i=.95,s=12){this._minimumInitialVelocity=t,this._stopVelocity=e,this._friction=i,this._maxVelocity=s,this.enabled=!0,this.value=new a(.8),this.time=new a(.3)}add(t,e){if(this.enabled&&e!=null){if(this.time.hasLastValue()){if(this.time.computeDelta(e)<.01)return;if(this.value.hasFilteredDelta()){const i=this.value.computeDelta(t);this.value.filteredDelta*i<0&&this.value.reset()}}this.time.update(e),this.value.update(t)}}reset(){this.value.reset(),this.time.reset()}evaluateMomentum(){if(!this.enabled||!this.value.hasFilteredDelta()||!this.time.hasFilteredDelta())return null;let t=this.value.filteredDelta/this.time.filteredDelta;return t=m(t,-this._maxVelocity,this._maxVelocity),Math.abs(t)<this._minimumInitialVelocity?null:this.createMomentum(t,this._stopVelocity,this._friction)}createMomentum(t,e,i){return new n(t,e,i)}};class b extends h{constructor(t=3,e=.01,i=.95,s=12){super(t,e,i,s)}add(t,e){const i=this.value.lastValue;if(i!=null){let s=t-i;for(;s>Math.PI;)s-=2*Math.PI;for(;s<-Math.PI;)s+=2*Math.PI;t=i+s}super.add(t,e)}}class p extends n{constructor(t,e,i){super(t,e,i)}value(t){const e=super.value(t);return Math.exp(e)}valueDelta(t,e){const i=super.value(t),s=super.value(t+e)-i;return Math.exp(s)}}class w extends h{constructor(t=2.5,e=.01,i=.95,s=12){super(t,e,i,s)}add(t,e){super.add(Math.log(t),e)}createMomentum(t,e,i){return new p(t,e,i)}}export{b as a,n as b,M as c,w as s,a as t};
