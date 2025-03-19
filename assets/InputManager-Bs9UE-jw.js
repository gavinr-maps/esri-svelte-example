import{M as E,bv as T,bw as I,bx as m,r as l,m as c,a as S,g as C,B as k}from"./Accessor-BHnuXKD2.js";import{s as y}from"./Queue-BOnccek2.js";import{r as M}from"./signal-DSa0yokC.js";const H=E("mac")?"Meta":"Control",b=new Set(["Alt","Control","Meta","Shift","Ctrl","Primary"]),w=i=>b.has(i);class D{constructor(t,e=[]){this.eventType=t,this.keyModifiers=e}matches(t){if(t.type!==this.eventType)return!1;if(this.keyModifiers.length===0)return!0;const e=t.modifiers;for(const n of this.keyModifiers)if(!e.has(n))return!1;return!0}}let f=class{constructor(t){this._manager=null,this._incoming={},this._outgoing={},this._incomingEventMatches=null,this._incomingEventTypes=null,this._outgoingEventTypes=null,this._hasSideEffects=t}get incomingEventMatches(){if(!this._incomingEventMatches){this._incomingEventMatches=[];for(const t in this._incoming){const e=this._incoming[t];for(const n of e)this._incomingEventMatches.push(n.match)}}return this._incomingEventMatches}get incomingEventTypes(){return this._incomingEventTypes||(this._incomingEventTypes=this.incomingEventMatches.map(t=>t.eventType)),this._incomingEventTypes}get outgoingEventTypes(){return this._outgoingEventTypes||(this._outgoingEventTypes=Object.keys(this._outgoing)),this._outgoingEventTypes}get hasSideEffects(){return this._hasSideEffects}get hasPendingInputs(){return!1}onInstall(t){this._manager||(t.setEventCallback(e=>this._handleEvent(e)),t.setUninstallCallback(()=>this._onUninstall()),this._manager=t)}onUninstall(){}registerIncoming(t,e,n){let s;typeof e=="function"?(n=e,s=[]):s=e||[];const r=typeof t=="string"?new D(t,s):t,o=()=>{this._incomingEventTypes=null,this._incomingEventMatches=null},a=p=>{const _=this._incoming[p.match.eventType];if(_){const P=_.indexOf(p);_.splice(P,1),o(),this._manager&&this._manager.updateDependencies()}},d=new A(r,n,{onPause:a,onRemove:a,onResume:p=>{const _=this._incoming[p.match.eventType];_&&!_.includes(p)&&(_.push(p),o(),this._manager&&this._manager.updateDependencies())}});let g=this._incoming[r.eventType];return g||(g=[],this._incoming[r.eventType]=g),g.push(d),o(),this._manager&&this._manager.updateDependencies(),d}registerOutgoing(t){if(this._outgoing[t])throw new Error("There is already a callback registered for this outgoing InputEvent: "+t);const e=new x(t,{onEmit:(n,s,r,o)=>{var a;(a=this._manager)==null||a.emit(n.eventType,s,r,o)},onRemove:n=>{var s;delete this._outgoing[n.eventType],(s=this._manager)==null||s.updateDependencies()}});return this._outgoing[t]=e,this._outgoingEventTypes=null,this._manager&&this._manager.updateDependencies(),e}startCapturingPointer(t){var e;(e=this._manager)==null||e.setPointerCapture(t,!0)}stopCapturingPointer(t){var e;(e=this._manager)==null||e.setPointerCapture(t,!1)}refreshHasPendingInputs(){var t;(t=this._manager)==null||t.refreshHasPendingInputs()}_onUninstall(){this._manager&&(this.onUninstall(),this._manager=null)}_handleEvent(t){var n;const e=this._incoming[t.type];if(e){for(const s of e)if(s.match.matches(t)&&((n=s.callback)==null||n.call(s,t),t.shouldStopPropagation()))break}}};class A{constructor(t,e,n){this.match=t,this._callback=e,this._handler=n}pause(){this._handler.onPause(this)}resume(){this._handler.onResume(this)}remove(){this._handler.onRemove(this)}get callback(){return this._callback}}let x=class{constructor(t,e){this.eventType=t,this._removed=!1,this._handler=e}emit(t,e,n){this._removed||this._handler.onEmit(this,t,e,n)}remove(){this._removed=!0,this._handler.onRemove(this)}};class R extends f{constructor(t){super(!0),this._onChange=t,this._value="mouse",this._x=null,this._y=null,this.registerIncoming("pointer-move",e=>this._update(e.data))}_update(t){const e=t.native.pointerType==="touch"?"touch":"mouse",{x:n,y:s}=t;e===this._value&&this._x===n&&this._y===s||(this._value=e,this._x=n,this._y=s,this._onChange(e,n,s))}}class K extends f{get multiTouchActive(){return this._multiTouchActive.value}constructor(){super(!0),this._activeTouchPointerIds=new Set,this._multiTouchActive=M(!1),this._onPointerAdd=({data:t})=>{t.pointerType==="touch"&&(this._activeTouchPointerIds.add(t.native.pointerId),this._update())},this._onPointerRemove=({data:t})=>{t.pointerType==="touch"&&(this._activeTouchPointerIds.delete(t.native.pointerId),this._update())},this.registerIncoming("pointer-down",this._onPointerAdd),this.registerIncoming("pointer-up",this._onPointerRemove),this.registerIncoming("pointer-capture-lost",this._onPointerRemove),this.registerIncoming("pointer-cancel",this._onPointerRemove)}_update(){this._multiTouchActive.value=this._activeTouchPointerIds.size>1}}class O{constructor(t,e){this._owner=e,this._properties={},this._afterDispatchHandle=null;for(const n in t){const s=t[n],r=new T(s,void 0,void 0,2,2);this._properties[n]={pool:r,acquired:[]}}this._afterDispatchHandle=I(()=>this._release())}destroy(){this._afterDispatchHandle&&(this._afterDispatchHandle.remove(),this._afterDispatchHandle=null);for(const t in this._properties){const e=this._properties[t];for(const n of e.acquired)m(n)||e.pool.release(n);e.pool.destroy(),e.pool=null,e.acquired=null}this._properties=null,this._owner=null}get(t){const e=this._owner._get(t),n=this._properties[t];let s=n.pool.acquire();for(n.acquired.push(s);s===e;)n.acquired.push(s),s=n.pool.acquire();return s}_release(){for(const t in this._properties){const e=this._properties[t];let n=0;for(const s of e.acquired)m(s)?e.acquired[n++]=s:e.pool.release(s);e.acquired.length=n}}}let h=class extends C{constructor(i){super(i),this._pointerCaptures=new Map,this._nameToGroup={},this._handlers=[],this._handlersPriority=[],this._currentPropagation=null,this._updateDependenciesAfterPropagation=!1,this._sourceEvents=new Set,this._keyModifiers=new Set,this._activeKeyModifiers=new Set,this._stoppedPropagationEventIds=new Set,this.primaryKey=H,this._latestPointerType="mouse",this._propertiesPool=new O({latestPointerLocation:U},this),this.latestPointerLocation=null,this._paused=!1,this.test={timestamp:void 0,hasCurrentPropagation:()=>!!this._currentPropagation}}initialize(){this.eventSource.onEventReceived=this._onEventReceived.bind(this),this._installRecognizers()}destroy(){const i=Object.keys(this._nameToGroup);for(const t of i)this.uninstallHandlers(t);this.eventSource.destroy(),this._currentPropagation=null,this._propertiesPool.destroy()}get hasPendingInputs(){return this._handlers.some(i=>i.handler.hasPendingInputs)}get latestPointerType(){return this._latestPointerType}get multiTouchActive(){return this._multiTouchHandler.multiTouchActive}get updating(){return this.hasPendingInputs||this._paused}installHandlers(i,t,e=v.INTERNAL){if(this._nameToGroup[i]||t.length===0)return;const n={name:i,handlers:t.map(s=>({handler:s,active:!0,removed:!1,priorityIndex:0,groupPriority:e,eventCallback:null,uninstallCallback:null}))};this._nameToGroup[i]=n;for(let s=n.handlers.length-1;s>=0;s--){const r=n.handlers[s];this._handlers.push(r),r.handler.onInstall({updateDependencies:()=>{this.updateDependencies()},emit:(o,a,d,g,p)=>{this._emitInputEvent(r.priorityIndex+1,o,a,d,p,g)},setPointerCapture:(o,a)=>{this._setPointerCapture(n,r,o,a)},setEventCallback:o=>{r.eventCallback=o},setUninstallCallback:o=>{r.uninstallCallback=o},refreshHasPendingInputs:()=>{this.notifyChange("hasPendingInputs")}})}this.updateDependencies()}uninstallHandlers(i){const t=this._nameToGroup[i];t?(t.handlers.forEach(e=>{var n;e.removed=!0,(n=e.uninstallCallback)==null||n.call(e)}),delete this._nameToGroup[i],this._currentPropagation?this._currentPropagation.needsHandlerGarbageCollect=!0:this._garbageCollectRemovedHandlers()):k.getLogger(this).error("There is no InputHandler group registered under the name `"+i+"`")}hasHandlers(i){return this._nameToGroup[i]!==void 0}isModifierKeyDown(i){return this._activeKeyModifiers.has(i)}updateDependencies(){if(this._currentPropagation)return void(this._updateDependenciesAfterPropagation=!0);this._updateDependenciesAfterPropagation=!1;const i=new Set,t=new Set;this._handlersPriority=[];for(let e=this._handlers.length-1;e>=0;e--){const n=this._handlers[e];n.priorityIndex=e,this._handlersPriority.push(n)}this._handlersPriority=this._sortHandlersPriority(this._handlersPriority);for(let e=this._handlersPriority.length-1;e>=0;e--){const n=this._handlersPriority[e];n.priorityIndex=e;let s=n.handler.hasSideEffects;if(!s){for(const r of n.handler.outgoingEventTypes)if(i.has(r)){s=!0;break}}if(s)for(const r of n.handler.incomingEventMatches){i.add(r.eventType);for(const o of r.keyModifiers)w(o)||t.add(o)}n.active=s}this._sourceEvents=i,this._keyModifiers=t,this._pointerCaptures.size>0&&this._sourceEvents.add("pointer-capture-lost"),this._keyModifiers.size>0&&(this._sourceEvents.add("key-down"),this._sourceEvents.add("key-up")),this.eventSource&&(this.eventSource.activeEvents=this._sourceEvents)}_setLatestPointer(i,t,e){this._latestPointerType=i;const n=this._get("latestPointerLocation");if(n==null||n.x!==t||n.y!==e){const s=this._propertiesPool.get("latestPointerLocation");s.x=t,s.y=e,this._set("latestPointerLocation",s)}}_onEventReceived(i,t){if(i==="pointer-capture-lost"){const s=t;this._pointerCaptures.delete(s.native.pointerId)}this._updateKeyModifiers(i,t);const e=this.test.timestamp!=null?this.test.timestamp:t.native?t.native.timestamp:void 0,n=t.native?t.native.cancelable:void 0;this._emitInputEventFromSource(i,t,e,n)}_updateKeyModifiers(i,t){if(!t)return;let e=!1;const n=()=>{e||(this._activeKeyModifiers=new Set(this._activeKeyModifiers),e=!0)},s=(o,a)=>{a&&!this._activeKeyModifiers.has(o)?(n(),this._activeKeyModifiers.add(o)):!a&&this._activeKeyModifiers.has(o)&&(n(),this._activeKeyModifiers.delete(o))};if(i==="key-down"||i==="key-up"){const o=t.key;this._keyModifiers.has(o)&&s(o,i==="key-down")}const r=t.native;s("Alt",!!(r!=null&&r.altKey)),s("Control",!!(r!=null&&r.ctrlKey)),s("Ctrl",!!(r!=null&&r.ctrlKey)),s("Shift",!!(r!=null&&r.shiftKey)),s("Meta",!!(r!=null&&r.metaKey)),s("Primary",this._activeKeyModifiers.has(this.primaryKey))}_installRecognizers(){this._latestPointerHandler=new R((i,t,e)=>this._setLatestPointer(i,t,e)),this._multiTouchHandler=new K,this.installHandlers("input-manager-logic",[this._latestPointerHandler,this._multiTouchHandler],v.ALWAYS),this.recognizers.length>0&&this.installHandlers("default",this.recognizers,v.INTERNAL)}_setPointerCapture(i,t,e,n){const s=i.name+"-"+t.priorityIndex,r=this._pointerCaptures.get(e.pointerId)||new Set;this._pointerCaptures.set(e.pointerId,r),n?(r.add(s),r.size===1&&this.eventSource&&this.eventSource.setPointerCapture(e,!0)):r.has(s)&&(r.delete(s),r.size===0&&(this._pointerCaptures.delete(e.pointerId),this.eventSource&&this.eventSource.setPointerCapture(e,!1)))}_garbageCollectRemovedHandlers(){this._handlers=this._handlers.filter(i=>!i.removed),this.updateDependencies()}_emitInputEventFromSource(i,t,e,n){this._emitInputEvent(0,i,t,e,n)}_emitInputEvent(i,t,e,n,s,r){const o=n!==void 0?n:this._currentPropagation?this._currentPropagation.timestamp:performance.now(),a=s!==void 0&&s,d={event:new L(t,e,o,r||this._activeKeyModifiers,a),priorityIndex:i};this._currentPropagation?this._currentPropagation.events.push(d):this._doNewPropagation(d)}_doNewPropagation(i){this._currentPropagation={events:new y,currentHandler:null,needsHandlerGarbageCollect:!1,timestamp:i.event.timestamp},this._currentPropagation.events.push(i),this._continuePropagation()}_continuePropagation(){var t,e,n;this._paused=!1;const i=this._currentPropagation;if(i){for(;i.events.length>0;){const{event:s,priorityIndex:r}=i.events.pop(),o=(t=s.data)==null?void 0:t.eventId;if(!(o!=null&&this._stoppedPropagationEventIds.has(o)))for(i.currentHandler=this._handlersPriority[r];i.currentHandler;){if(i.currentHandler.removed)i.needsHandlerGarbageCollect=!0;else{if(i.currentHandler.active&&!s.shouldStopPropagation()&&((n=(e=i.currentHandler).eventCallback)==null||n.call(e,s)),s.shouldStopPropagation()){o!=null&&this._stoppedPropagationEventIds.add(o);break}if(s.shouldPausePropagation(()=>this._continuePropagation()))return void this._pausePropagation({event:s,priorityIndex:i.currentHandler.priorityIndex+1})}i.currentHandler=this._handlersPriority[i.currentHandler.priorityIndex+1]}}i.needsHandlerGarbageCollect&&this._garbageCollectRemovedHandlers(),this.hasPendingInputs||this._stoppedPropagationEventIds.clear(),this._currentPropagation=null,this._updateDependenciesAfterPropagation&&this.updateDependencies()}}_pausePropagation(i){const t=new y;t.push(i);const e=this._currentPropagation;if(e){for(;e.events.length;)t.push(e.events.pop());e.events=t,e.currentHandler=null,this._paused=!0}}_compareHandlerPriority(i,t){if(i.handler.hasSideEffects!==t.handler.hasSideEffects)return i.handler.hasSideEffects?1:-1;if(i.groupPriority!==t.groupPriority)return i.groupPriority>t.groupPriority?-1:1;for(const e of i.handler.incomingEventMatches)for(const n of t.handler.incomingEventMatches){if(e.eventType!==n.eventType)continue;const s=e.keyModifiers.filter(r=>n.keyModifiers.includes(r));if(s.length===e.keyModifiers.length!=(s.length===n.keyModifiers.length))return e.keyModifiers.length>n.keyModifiers.length?-1:1}return i.priorityIndex>t.priorityIndex?-1:1}_sortHandlersPriority(i){const t=[];for(const e of i){let n=0;for(;n<t.length&&this._compareHandlerPriority(e,t[n])>=0;)n++;t.splice(n,0,e)}return t}get debug(){const i=t=>{const e=this._setPointerCapture;this._setPointerCapture=()=>{},t(),this._setPointerCapture=e};return{injectEvent:(t,e)=>{i(()=>this._onEventReceived(t,e))},disablePointerCapture:i}}};l([c({readOnly:!0})],h.prototype,"hasPendingInputs",null),l([c({constructOnly:!0})],h.prototype,"eventSource",void 0),l([c({constructOnly:!0})],h.prototype,"recognizers",void 0),l([c()],h.prototype,"_latestPointerType",void 0),l([c()],h.prototype,"latestPointerType",null),l([c()],h.prototype,"multiTouchActive",null),l([c({readOnly:!0})],h.prototype,"latestPointerLocation",void 0),l([c()],h.prototype,"_paused",void 0),l([c({readOnly:!0})],h.prototype,"updating",null),h=l([S("esri.views.input.InputManager")],h);class L{constructor(t,e,n,s,r){this.type=t,this.data=e,this.timestamp=n,this.modifiers=s,this.cancelable=r,this._propagationState=u.NONE,this._resumeCallback=null}stopPropagation(){this._propagationState|=u.STOPPED}shouldStopPropagation(){return!!(this._propagationState&u.STOPPED)}async(t){this._propagationState|=u.PAUSED;const e=(n,s)=>{this._propagationState&=~u.PAUSED;const r=this._resumeCallback;if(this._resumeCallback=null,r&&r(),s)throw n;return n};return(typeof t=="function"?t():t).then(n=>e(n,!1),n=>e(n,!0))}shouldPausePropagation(t){return!!(this._propagationState&u.PAUSED)&&(this._resumeCallback=t,!0)}preventDefault(){this.data.native.preventDefault()}}var u;(function(i){i[i.NONE=0]="NONE",i[i.STOPPED=1]="STOPPED",i[i.PAUSED=2]="PAUSED"})(u||(u={}));const v={ALWAYS:1,DEFAULT:0,TOOL:-1,WIDGET:-2,INTERNAL:-3};class N{}const U=N;export{v as _,f as a,h as d,O as o,H as t};
