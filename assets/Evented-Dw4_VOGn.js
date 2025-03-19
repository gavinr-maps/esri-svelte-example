import{r as m,a as _,t as E,e as f,g as v}from"./Accessor-BmwT4B0c.js";let d=class p{constructor(){this._emitter=new p.EventEmitter(this)}emit(i,l){return this._emitter.emit(i,l)}on(i,l){return this._emitter.on(i,l)}once(i,l){return this._emitter.once(i,l)}hasEventListener(i){return this._emitter.hasEventListener(i)}};(function(u){class i{constructor(e=null){this._target=e,this._listenersMap=null}clear(){var e;(e=this._listenersMap)==null||e.clear(),this._listenersMap=null}destroy(){this.clear()}emit(e,s){var h;let t=(h=this._listenersMap)==null?void 0:h.get(e);if(!t)return!1;const r=this._target||this;let n=!1;for(const c of t.slice()){const a="deref"in c?c.deref():c;a?a==null||a.call(r,s):n=!0}return n&&(t=t.filter(c=>!("deref"in c)||c.deref()!=null),this._listenersMap.set(e,t)),t.length>0}on(e,s){if(Array.isArray(e)){const r=e.map(n=>this.on(n,s));return E(r)}if(e.includes(","))throw new TypeError("Evented.on() with a comma delimited string of event types is not supported");this._listenersMap??(this._listenersMap=new Map);const t=this._listenersMap.get(e)||[];return t.push(s),this._listenersMap.set(e,t),f(()=>{var h;const r=(h=this._listenersMap)==null?void 0:h.get(e),n=(r==null?void 0:r.indexOf(s))??-1;n>=0&&r.splice(n,1)})}once(e,s){const t=this.on(e,r=>{t.remove();const n="deref"in s?s.deref():s;n==null||n.call(null,r)});return t}hasEventListener(e){var t;const s=(t=this._listenersMap)==null?void 0:t.get(e);return s!=null&&s.length>0}}u.EventEmitter=i,u.EventedMixin=o=>{let e=class extends o{constructor(){super(...arguments),this._emitter=new i}destroy(){this._emitter.clear()}emit(t,r){return this._emitter.emit(t,r)}on(t,r){return this._emitter.on(t,r)}once(t,r){return this._emitter.once(t,r)}hasEventListener(t){return this._emitter.hasEventListener(t)}};return e=m([_("esri.core.Evented")],e),e};let l=class extends v{constructor(){super(...arguments),this._emitter=new d.EventEmitter(this)}destroy(){this._emitter.clear()}emit(o,e){return this._emitter.emit(o,e)}on(o,e){return this._emitter.on(o,e)}once(o,e){return this._emitter.once(o,e)}hasEventListener(o){return this._emitter.hasEventListener(o)}};l=m([_("esri.core.Evented.EventedAccessor")],l),u.EventedAccessor=l})(d);export{d as i};
