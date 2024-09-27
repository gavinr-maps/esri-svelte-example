import{N as X,O as Z,P as A,Q as K,R as f,S,T as ee,U as te,i as oe}from"./index-d2df902e-k_MvfteY.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
 * v4.30.7
 */function se(t,e){var o;if(e){const s=q(t);t.manager.internals.members=Object.fromEntries(Array.from(s,([r,{state:n,type:c}])=>[r,[n?32:c===Number?2:c===Boolean?4:1]]))}else{const s=t.constructor,r=((o=s.__registerControllers)==null?void 0:o.call(s,t))??void 0;if(s.__registerControllers=void 0,typeof r!="object")throw new Error("Failed to retrieve internal component meta. Make sure you have the useComponentsControllers() Rollup Plugin for Stencil Controllers configured in your Stencil config.");t.manager.internals.members=r}}var q=t=>t.constructor.elementProperties;function ne(t,e=8){return t==null||typeof t=="object"||typeof t=="function"?t:e&4?t==="false"?!1:t===""||!!t:e&2?Number.parseFloat(t):e&1?String(t):t}var re=t=>e=>{const o=e.manager.internals.members;return Object.entries(o??{}).filter(([s,[r]])=>(r&t)!==0).map(([s])=>s)},V=re(63),T=(t,e)=>{var o,s;return(s=(o=t.manager.internals.members)==null?void 0:o[e])==null?void 0:s[0]};function N(t,e){const o=T(t,e);if(o!==void 0)return o&32?"state":"prop"}var R=Symbol("controller"),ie=t=>typeof t=="object"&&t!==null&&(R in t||"hostConnected"in t||"hostDisconnected"in t||"hostUpdate"in t||"hostUpdated"in t),ae=class{constructor(){this._ambientControllers=[],this.use=async(t,e)=>{const o=this.useRefSync(t);if(o===void 0){if(typeof e=="function"){const s=new Error(`Unable to resolve a controller from the provided value, so can't watch it's exports. ${j}`);console.error(s)}return t}if(await o.ready,typeof e=="function"){if(o.watchExports===void 0)throw new Error("The controller must implement watchExports method to support watching exports");const s=o.watchExports(r=>e(r,s))}return o.exports},this.useRef=async t=>{const e=this.useRefSync(t);if(e===void 0)throw new Error(`Unable to resolve a controller from the provided value. ${j}`);return await e.ready,e},this.useRefSync=t=>{const e=this.retrieveAmbientChildController();if(e!==void 0)return e;const s=y.internals.retrieveComponent().manager.internals.resolveExports(t);if(s!==void 0)return s;if(ie(t))return t},this.shouldBypassSetter=!1,this.shouldBypassGetter=!1,this.shouldBypassReadonly=!1,this.elementToInstance=new WeakMap}setAmbientComponent(t){this._ambientComponent!==t&&(this._ambientComponent=t,queueMicrotask(()=>{this._ambientComponent===t&&(this._ambientComponent=void 0)}))}retrieveComponent(t){if(this._ambientComponent===void 0)throw new Error([`Unable to find out which component ${t||"this"} controller `,"belongs to. This might happen if you tried to create a controller ","outside the component. If so, please wrap your controller ","definition in an arrow function, ","`const myController = ()=>makeController(...);` and call that","function inside the component `my = myController();`, or ","define your controller using makeGenericController/GenericController ",`instead.
`,"If you wish to use a controller inside an async controller, ",`make sure you are using controller.use.
`,"You might also have multiple instances of Controllers loaded"].join(`
`));return this._ambientComponent}setParentController(t){if(t===void 0){this._ambientControllers=[];return}const e=this._ambientControllers.indexOf(t);this._ambientControllers=e===-1?[...this._ambientControllers,t]:this._ambientControllers.slice(0,e+1),queueMicrotask(()=>{this._ambientControllers=[]})}retrieveParentControllers(){return this._ambientControllers}setAmbientChildController(t){this._ambientChildController!==t&&(this._ambientChildController=t,queueMicrotask(()=>{this._ambientChildController===t&&(this._ambientChildController=void 0)}))}retrieveAmbientChildController(){const t=this._ambientChildController;return this._ambientChildController=void 0,t}},j=["The value you passed is not a controller and not a controller exports. If ","your controller exports a literal value, try making your controller export ","an object instead"].join(""),F,z=class m{constructor(e){this._callbacks={hostConnected:[],hostDisconnected:[],hostLoad:[],hostLoaded:[],hostUpdate:[],hostUpdated:[],hostDestroy:[],hostLifecycle:[]},this._ready=new A,this._lifecycleDisconnected=[],this.connectedCalled=!1,this.willLoadCalled=!1,this.didLoadCalled=!1,this[F]=!0,this.ready=this._ready.promise,this._exports=B(this),this._exportWatchers=new Set;const o=le(e??m.internals.retrieveComponent(new.target.name));Object.defineProperty(this,"component",{writable:!1,enumerable:!1,configurable:!0,value:o}),this.component.addController(this),m.internals.setParentController(this),"hostDestroy"in this&&this.component.manager.ensureHasDestroy(),this.component.manager===void 0||queueMicrotask(()=>this.catchUpLifecycle())}catchUpLifecycle(){const{manager:e}=this.component;e.connectedCalled&&!this.connectedCalled&&this.triggerConnected(),e.willLoadCalled&&this.triggerLoad().then(()=>{e.didLoadCalled&&this.triggerLoaded()}).catch(console.error)}get exports(){return this._exports}set exports(e){this._exports!==e&&(this._exports=e,this.connectedCalled&&this.component.requestUpdate(),this._exportWatchers.forEach(f)),this._ready.resolve(e)}setProvisionalExports(e){this._exports=B(e),this._exportWatchers.forEach(f)}watchExports(e){const o=()=>e(this._exports);return this._exportWatchers.add(o),()=>void this._exportWatchers.delete(o)}get use(){return m.internals.setAmbientComponent(this.component),m.internals.use}get useRef(){return m.internals.setAmbientComponent(this.component),m.internals.useRef}get useRefSync(){return m.internals.setAmbientComponent(this.component),m.internals.useRefSync}bypassSetter(e){m.internals.shouldBypassSetter=!0;try{return e()}finally{m.internals.shouldBypassSetter=!1}}bypassReadonly(e){m.internals.shouldBypassReadonly=!0;try{return e()}finally{m.internals.shouldBypassReadonly=!1}}bypassGetter(e){m.internals.shouldBypassGetter=!0;try{return e()}finally{m.internals.shouldBypassGetter=!1}}dynamicGetSet(e,o){this.genericGetSet(e,o)}genericGetSet(e,o){var s,r;const n=o,c=this.component.manager.internals;typeof n.get=="function"&&((s=c.getters)[e]??(s[e]=[]),c.getters[e].unshift(n.get));const i=n.set==="ignore"?he:n.set;i&&((r=c.setters)[e]??(r[e]=[]),c.setters[e].unshift(i))}watch(e,o){var s;if(T(this.component,e)===void 0)throw new Error(`Trying to watch a non-@property, non-@state property "${e}". Either convert it into a @state() or use get/set syntax`);const n=this.component.manager.internals;(s=n.allWatchers)[e]??(s[e]=[]);const c=n.allWatchers[e],i=o,l=(a,h,p)=>f(i,null,a,h,p);return c.push(l),()=>{const a=c.indexOf(l);a!==-1&&c.splice(a,1)}}controllerRemoved(){this.component.el.isConnected&&this.triggerDisconnected(),this.triggerDestroy()}onConnected(e){this._callbacks.hostConnected.push(e)}onDisconnected(e){this._callbacks.hostDisconnected.push(e)}onLoad(e){this._callbacks.hostLoad.push(e)}onLoaded(e){this._callbacks.hostLoaded.push(e)}onUpdate(e){this._callbacks.hostUpdate.push(e)}onUpdated(e){this._callbacks.hostUpdated.push(e)}onDestroy(e){this.component.manager.ensureHasDestroy(),this._callbacks.hostDestroy.push(e)}onLifecycle(e){this._callbacks.hostLifecycle.push(e),this.connectedCalled&&this.component.el.isConnected&&this._callLifecycle(e)}triggerConnected(){const e=this;e.hostConnected&&f(e.hostConnected,e),this._callbacks.hostConnected.forEach(f),this.triggerLifecycle(),this.connectedCalled=!0}triggerDisconnected(){const e=this;e.hostDisconnected&&f(e.hostDisconnected,e),this._callbacks.hostDisconnected.forEach(f),this._lifecycleDisconnected.forEach(f),this._lifecycleDisconnected=[]}async triggerLoad(){if(this.willLoadCalled)return;this.willLoadCalled=!0;const e=this;e.hostLoad&&await S(e.hostLoad,e),this._callbacks.hostLoad.length>0&&await Promise.allSettled(this._callbacks.hostLoad.map(S)),this._ready.resolve(this._exports)}triggerLoaded(){if(this.didLoadCalled)return;const e=this;e.hostLoaded&&f(e.hostLoaded,e),this._callbacks.hostLoaded.forEach(f),this.didLoadCalled=!0}triggerUpdate(){const e=this;e.hostUpdate&&f(e.hostUpdate,e),this._callbacks.hostUpdate.forEach(f)}triggerUpdated(){const e=this;e.hostUpdated&&f(e.hostUpdated,e),this._callbacks.hostUpdated.forEach(f)}triggerDestroy(){const e=this;e.hostDestroy&&f(e.hostDestroy,e),this._callbacks.hostDestroy.forEach(f)}triggerLifecycle(){const e=this;e.hostLifecycle&&this._callLifecycle(()=>e.hostLifecycle()),this._callbacks.hostLifecycle.forEach(o=>this._callLifecycle(o))}_callLifecycle(e){m.internals.setAmbientComponent(this.component);const o=f(e);(Array.isArray(o)?o:[o]).forEach(r=>{typeof r=="function"?this._lifecycleDisconnected.push(r):typeof r=="object"&&typeof r.remove=="function"&&this._lifecycleDisconnected.push(r.remove)})}};F=R;z.internals=new ae;var y=z,W=class extends y{constructor(t){super(t)}watch(t,e){return super.watch(t,e)}dynamicGetSet(t,e){super.genericGetSet(t,e)}};function B(t){if(typeof t!="object"&&typeof t!="function"||t===null)return t;const e=new Proxy(t,{get(o,s,r){if(!(ce.has(s)&&s in o&&o[s]===e)){if(s in o||s in Promise.prototype||typeof s=="symbol")return typeof o=="function"?o[s]:Reflect.get(o,s,r);console.error(`Trying to access "${s.toString()}" on the controller before it's loaded. ${$}`)}},set(o,s,r,n){return console.error(`Trying to set "${s.toString()}" on the controller before it's loaded. ${$}`),Reflect.set(o,s,r,n)}});return e}var ce=new Set(["exports","_exports"]),$="";function le(t){if("addController"in t)return t;throw new Error("Component does not implement ControllerHost. This might be because you forgot to add 'manager: Controller<this> = useControllerManager(this);' in your component, or you tried to use some controller before that line")}var he=(t,e)=>e;function de(t,e,o){const s=Object.keys(t),r=s.length;w===void 0&&queueMicrotask(Q),w??(w=new Map);let n=w.get(t);return n===void 0&&(n={callbacks:[],keyCount:r},w.set(t,n)),n.keyCount!==r&&(n.callbacks.forEach(c=>c(s)),n.callbacks=[],n.keyCount=r),n.callbacks.push(c=>{const i=a=>f(e,null,a),l=c[r];l===void 0?i(void 0):t[l]===o?i(l):i(void 0)}),o}var w=void 0;function Q(){Array.from((w==null?void 0:w.entries())??[]).forEach(([t,{callbacks:e}])=>{const o=Object.keys(t);e.forEach(s=>s(o))}),w=void 0}var pe=class{constructor(t){this.enabledWatchers={},this.allWatchers={},this.trackKey=(e,o,s)=>{const r=Array.isArray(e)?e:[e];let n=r.length+1;const c=i=>{n-=1,i!==void 0&&(n=0),n===0&&o(i)};return r.forEach(i=>this.component.manager.trackPropertyKey(i,l=>c(l===void 0?void 0:{key:l,host:i,type:"property",domValue:void 0}),s)),this.component.manager.trackPropKey((i,l)=>{const a=i===void 0?void 0:N(this.component,i);c(i===void 0?void 0:{key:i,host:this.component,type:a??"prop",domValue:a==="prop"?l:void 0})},s),s},this.trackPropKey=(e,o)=>(this._trackedValue!==U&&this._trackedValue!==o&&this._firePropertyTrackers(void 0,void 0,void 0),this._keyTrackers.length===0&&queueMicrotask(()=>this._firePropertyTrackers(void 0,void 0,void 0)),this._trackedValue=o,this._keyTrackers.push((s,r,n)=>f(e,void 0,o===r?s:void 0,n)),o),this._trackedValue=U,this._keyTrackers=[],this.getters={},this.setters={},this.accessorGetter={},this.accessorSetter={},this.reactiveUtilsIntegrations=new Set,this._exports=new WeakMap,Object.defineProperty(this,"component",{writable:!1,enumerable:!1,configurable:!0,value:t})}_firePropertyTrackers(t,e,o){const s=this._keyTrackers;this._trackedValue=U,this._keyTrackers=[],s.forEach(r=>r(t,e,o))}getSetProxy(t,e,o){const s=this.component,r=s.constructor.prototype;if(this._getSetProxy(r,t,e,o,"class"),s.manager.isLit)return;const n=s.el.constructor.prototype;r!==n&&this._getSetProxy(n,t,e,o,"html")}_getSetProxy(t,e,o,s,r){const n=this.component,c=T(n,e),i=Object.getOwnPropertyDescriptor(t,e),l=r==="html";if((i==null?void 0:i.set)===void 0||i.get===void 0){if(i!==void 0&&"value"in i)throw new Error(`getSet() should only be used on @Prop/@property/@State/@state properties. For internal component properties, use regular get/set syntax. Tried to use it on "${e}" in ${n.el.tagName}`);if(l)return;throw new Error(`Unable to find "${e}" property on the ${n.el.tagName} component`)}const{get:a,set:h}=i,p=x in a,d=x in h,b=!p&&o,u=!d&&s;if(!b&&!u)return;const O=b?function(){let g=a.call(this);const _=y.internals.elementToInstance.get(this);if(y.internals.shouldBypassGetter||_===void 0)return g;const k=_.manager.internals;g=k.accessorGetter[e](g,e);const v=k.getters[e]??E;for(let C=0;C<v.length;C++)g=v[C](g,e);return g}:a,G=u?function(g){var M;const _=a.call(this),k=y.internals.elementToInstance.get(this);if(k===void 0){h.call(this,g);return}let v=k.manager.isLit?g:ne(g,c);const C=k.manager.internals;if(v===_)h.call(this,g);else{const I=y.internals.shouldBypassSetter?E:C.setters[e]??E;for(let L=0;L<I.length&&(v=I[L](v,_,e),v!==_);L++);v=C.accessorSetter[e](v,_,e),h.call(this,v),v!==_&&((M=C.enabledWatchers[e])==null||M.forEach(L=>L(v,_,e)))}C._keyTrackers.length>0&&(C==null||C._firePropertyTrackers(e,g,_))}:h;b&&Object.defineProperty(O,x,{value:!0}),u&&Object.defineProperty(G,x,{value:!0}),Object.defineProperty(t,e,{...i,get:O,set:G})}markExports(t,e){(typeof e=="object"&&e!==null||typeof e=="function")&&this._exports.set(e,t)}resolveExports(t){if(typeof t=="object"&&t!==null||typeof t=="function")return this._exports.get(t)}},E=[],x=Symbol("controllersCustomAccessor"),U=Symbol("nothing"),Le=(t,e)=>new fe(t,e),fe=class extends W{constructor(t,e){const o="addController"in t,s=new Set;function r(a){var h;s.add(a),o&&!(R in a)&&t.el.isConnected&&((h=a.hostConnected)==null||h.call(a))}function n(a){var h;s.delete(a),(h=a.controllerRemoved)==null||h.call(a)}const c=t;if(c.addController=r,c.removeController=n,!o){const a=e??t.constructor.__forceUpdate;c.requestUpdate=()=>a(t)}super(t),this.internals=new pe(this.component),this.destroyed=!1,this._updatePromise=new A,this._originalLifecycles={},this.trackPropertyKey=de,this.trackPropKey=this.internals.trackPropKey,this.trackKey=this.internals.trackKey,this._readonlySetter=(a,h,p)=>{if(y.internals.shouldBypassReadonly)return a;const d=this.component;if(N(d,p)==="prop")if(this.isLit){const u=q(d).get(p);u&&(u==null?void 0:u.attribute)!==!1&&d.el.setAttribute(typeof u.attribute=="string"?u.attribute:K(p),String(h))}else d.requestUpdate();throw new Error(`Cannot assign to read-only property "${p}" of ${d.el.tagName.toLowerCase()}. Trying to assign "${String(a)}"`)},this.devOnlySetPersistentControllerData=void 0,this.devOnlyGetPersistentControllerData=void 0,this.isLit=o,this.component.manager=this,se(t,o),this._controllers=s,this.exports=void 0,this.hasDestroy="autoDestroyDisabled"in this.component&&typeof this.component.destroy=="function",this.hasDestroy&&this.watch("autoDestroyDisabled",()=>this._autoDestroyDisabledWatcher()),this._bindLifecycleMethods(),o||Object.defineProperty(t,"updateComplete",{get:async()=>await this._updatePromise.promise});const i=V(t),l=t.manager.internals;i.forEach(a=>{l.accessorGetter[a]=P,l.accessorSetter[a]=P,l.getSetProxy(a,!0,!0)}),y.internals.setParentController(void 0),y.internals.setAmbientComponent(t),y.internals.elementToInstance.set(t.el,t),y.internals.elementToInstance.set(t,t)}_bindLifecycleMethods(){const t=this.component,e=this.isLit,o=t.el===t;this._originalLifecycles={connectedCallback:e||o?void 0:t.connectedCallback,disconnectedCallback:e||o?void 0:t.disconnectedCallback,componentWillLoad:e?void 0:t.componentWillLoad,componentDidLoad:e?void 0:t.componentDidLoad,componentWillUpdate:e?void 0:t.componentWillUpdate,componentDidUpdate:e?void 0:t.componentDidUpdate,destroy:t.destroy};const s=this._connectedCallback.bind(this),r=this._disconnectedCallback.bind(this),n=this._update.bind(this),c=this._updated.bind(this);e?t.constructor.prototype.addController.call(t,{hostConnected:s,hostDisconnected:r,hostUpdate:n,hostUpdated:c}):(t.connectedCallback=s,t.disconnectedCallback=r,t.componentWillLoad=this._load.bind(this),t.componentDidLoad=this._loaded.bind(this),t.componentWillUpdate=n,t.componentDidUpdate=c),this.hasDestroy&&(t.destroy=this.destroy.bind(this))}ensureHasDestroy(){if(!this.hasDestroy)throw new Error(ue)}_connectedCallback(){var t;if(this.destroyed){const e=this.component.el.tagName.toLowerCase();throw this.component.el.remove(),new Error(`The ${e} component has already been destroyed. It can not be used again. If you meant to disconnect and reconnect a component without automatic destroy, set the autoDestroyDisabled prop.`)}this._autoDestroyTimeout!==void 0&&clearTimeout(this._autoDestroyTimeout),this.internals.enabledWatchers=this.internals.allWatchers,Q(),this._controllers.forEach(e=>"triggerConnected"in e?e.triggerConnected():f(e.hostConnected,e)),(t=this._originalLifecycles.connectedCallback)==null||t.call(this.component)}_disconnectedCallback(){var t;this.destroyed||(this._controllers.forEach(e=>"triggerDisconnected"in e?e.triggerDisconnected():f(e.hostDisconnected,e)),(t=this._originalLifecycles.disconnectedCallback)==null||t.call(this.component),this.hasDestroy&&this._autoDestroyDisabledWatcher())}async _load(){var e;const t=this.internals.reactiveUtilsIntegrations;if(t.size>0)for(const o of t)"triggerLoad"in o?await o.triggerLoad():await S(o.hostLoad,o);await Promise.allSettled(Array.from(this._controllers,async o=>t.has(o)?void 0:"triggerLoad"in o?await o.triggerLoad():await S(o.hostLoad,o))),await((e=this._originalLifecycles.componentWillLoad)==null?void 0:e.call(this.component))}_loaded(){var t;this._controllers.forEach(e=>"triggerLoaded"in e?e.triggerLoaded():f(e.hostLoaded,e)),(t=this._originalLifecycles.componentDidLoad)==null||t.call(this.component)}_update(){var t;this._controllers.forEach(e=>"triggerUpdate"in e?e.triggerUpdate():f(e.hostUpdate,e)),(t=this._originalLifecycles.componentWillUpdate)==null||t.call(this.component)}_updated(){var t;if(this._controllers.forEach(e=>"triggerUpdated"in e?e.triggerUpdated():f(e.hostUpdated,e)),(t=this._originalLifecycles.componentDidUpdate)==null||t.call(this.component),!this.isLit){const e=this._updatePromise;this._updatePromise=new A,e.resolve(!0)}}async destroy(){var t;if(this.ensureHasDestroy(),!this.destroyed){if(this.component.el.isConnected){this.hasDestroy=!1;try{this.component.el.remove()}finally{this.hasDestroy=!0}}this._autoDestroyTimeout=void 0,this.destroyed=!0,this._controllers.forEach(e=>"triggerDestroy"in e?e.triggerDestroy():f(e.hostDestroy,e)),this._controllers.clear(),await((t=this._originalLifecycles.destroy)==null?void 0:t.call(this.component))}}_autoDestroyDisabledWatcher(){if(!this.component.el.isConnected&&!this.component.autoDestroyDisabled){this._autoDestroyTimeout!==void 0&&clearTimeout(this._autoDestroyTimeout);const t=()=>void this.destroy().catch(console.error);this._autoDestroyTimeout=ee(t,me)}}readonly(t){return this.getSet(t,{set:this._readonlySetter})}getSet(t,e){return this.component.manager.trackPropKey(o=>{var s;if(o===void 0)throw new Error("Unable to resolve get/set's prop name. Make sure you are using it like @Prop() someProp = this.manager.getSet(defaultValue,{get,set})");e.set===this._readonlySetter&&((s=this.internals).readonlyProps??(s.readonlyProps=new Set),this.internals.readonlyProps.add(o));const r=this.component,n=r[o],c=!1,i=e.initialSet??!0;if(n!=null&&n!==t&&typeof e.set=="function"&&i&&!c){const l=e.set(n,t,o);if(l!==n)if(this.isLit)r[o]=l;else{let a=!0;this.onConnected(()=>{a&&(a=!0,this.bypassSetter(()=>{r[o]=l}))})}}this.genericGetSet(o,e)},t)}},ue=`
If the component uses a controller that uses destroy() method, then the
component must have the following properties:
autoDestroyDisabled and destroy
`.trim(),me=1e3,P=t=>t,Y=t=>(...e)=>{const o=y.internals.retrieveParentControllers(),s=new t(...e),r=s.exports;y.internals.setParentController(o.at(-1));const n=s.component.manager.internals;n.markExports(s,r),s.watchExports(i=>n.markExports(s,i)),y.internals.setAmbientChildController(s);const c=[s.component,...o].reverse();return n.trackKey(c,i=>i===void 0?void 0:ye(s,i,r),r)};function ye(t,{host:e,key:o,type:s},r){const n=e,c=n[o]!==t.exports,i=n[o]!==r,l=r!==t.exports;if(c&&!i&&l&&(n[o]=t.exports),e===t.component&&s==="prop"){const h=t.component.manager.internals;i&&h.markExports(t,n[o]),t.component.manager.watch(o,p=>{p!==t.exports&&h.markExports(t,p)})}t.watchExports(()=>{var d;if(n[o]===t.exports)return;const h=t.component.manager;((d=h.internals.readonlyProps)==null?void 0:d.has(o))===!0?h.bypassReadonly(()=>{n[o]=t.exports}):n[o]=t.exports})}var Pe=t=>ve(void 0,t),ge=class extends y{constructor(t,e){super(t);const o=this.exports;try{y.internals.setAmbientComponent(this.component);const s=e(this.component,this),r=this.exports!==o;if(s instanceof Promise){r||this.setProvisionalExports(s);const n=s.then(c=>{this.exports=c,super.catchUpLifecycle()}).catch(c=>{this._ready.reject(c),console.error(c)});this.onLoad(async()=>await n)}else(!r||s!==void 0)&&(this.exports=s),queueMicrotask(()=>super.catchUpLifecycle())}catch(s){this._ready.reject(s),console.error(s)}}catchUpLifecycle(){}},ve=Y(ge),xe=(t,e)=>(o,s)=>be(o,t,s),Ce=class extends W{constructor(t,e,o){super(t),this._loadAccessor=e,this._options=o,this.reactiveUtils=this.component.reactiveUtils,this._watchedProperties=new Map,this._isBinding={value:!0},this.setProvisionalExports(D.makeGetterProxy(t,this._watchedProperties,this._isBinding,this.constructor.allowedPropNameMismatches));const s=t.manager.internals.reactiveUtilsIntegrations;s.add(this);const r=Array.from(s).find(n=>n instanceof H);r&&s.delete(r),s.add(r??new H(this.component)),t.manager.trackPropKey(n=>{n&&(this._instancePropName=n)},this.exports)}hostConnected(){this._isBinding.value=!1}async hostLoad(){var i,l;const t=this.component;t.reactiveUtils===void 0?this.reactiveUtils=await oe():this.reactiveUtils=await this.use(t.reactiveUtils);const e=D.gatherParameters(this,this._watchedProperties),o=((l=(i=this._options)==null?void 0:i.editConstructorProperties)==null?void 0:l.call(t,e))??e,s=o instanceof Promise?await o:o,r=t,n=typeof this._instancePropName=="string"?r[this._instancePropName]:void 0;n!=null&&n!==this.exports?(this._instance=n,n.set(s)):this._instance=await this._createInstance(s),!t.manager.destroyed&&(D.watchComponentUpdates(this,this._instance,this._watchedProperties),D.watchAccessorUpdates(this,this._instance,this._watchedProperties),this.exports=this._instance)}async _createInstance(t){return this._isAccessorConstructor(this._loadAccessor)?new this._loadAccessor(t):await this._loadAccessor(t)}_isAccessorConstructor(t){return"prototype"in t&&"declaredClass"in t.prototype}hostDestroy(){this._instance&&this._instance.destroy()}async reCreate(){this.hostDestroy(),await this.hostLoad()}},be=Y(Ce),D={makeGetterProxy:(t,e,o,s)=>new Proxy({},{has:(r,n)=>typeof n=="string"||n in r,get:(r,n)=>{const c=Reflect.get(r,n);if(typeof n=="symbol"||n in Promise.prototype)return c;const i=n in r,l=(o==null?void 0:o.value)??!0;return i||!l?c:t.manager.trackKey(t,a=>{a!==void 0&&e.set(a.key,n)},c)}}),watchComponentUpdates(t,e,o){function s(i,l){const a=o.get(l),h=e[a];return typeof h=="boolean"&&a!==l&&l.toLowerCase().includes("disable")?!h:h}const r=(i,l,a)=>{const h=o.get(a),p=e[h],d=typeof p=="boolean"&&h!==a&&a.toLowerCase().includes("disable");if((d?!p:p)===i)return i;e[h]=d?!i:i;const u=e[h];return d?!u:u},c=t.component.manager.internals;o.forEach((i,l)=>{c.accessorGetter[l]=s,c.accessorSetter[l]=r})},watchAccessorUpdates(t,e,o){const{component:s}=t,r=s,n=e,c=_e(e);s.manager.bypassGetter(()=>o.forEach((i,l)=>{if(c.has(i))return;const a=r[l],h=n[i],d=typeof a=="boolean"&&i!==l&&l.toLowerCase().includes("disable")?!a:a;d!=null&&h!==d&&(n[i]=d)})),t.onLifecycle(()=>{if(!e.destroyed)return Array.from(o,([i,l])=>t.reactiveUtils.watch(()=>n[l],()=>{const a=n[l],p=typeof a=="boolean"&&l!==i&&i.toLowerCase().includes("disable")?!a:a;s.manager.bypassSetter(()=>{r[i]=p})},{initial:!0}))})},gatherParameters(t,e){const{component:o}=t;return Object.fromEntries(Array.from(e,([r,n])=>[n,o[r]]).filter(([,r])=>r!==void 0))},reEmitAccessorEvents(t,e,o,s){if(!("on"in e&&typeof e.on=="function"))return;const n=Object.entries(t.component).map(([l,a])=>{const h=a;if(!l.startsWith(s)||l===s||typeof h!="object"||h===null||!("emit"in h)||typeof h.emit!="function")return;const p=h.emit,d=l.slice(s.length);return[K(d).toLowerCase(),p]}).filter(te);if(n.length===0)return;const c=e,i=()=>c;t.onLifecycle(()=>{if(!e.destroyed)return n.map(([l,a])=>o.on(i,l,a))})},async reCreate(t,e){const o=e.manager.useRefSync(t);o!==void 0&&await o.reCreate()}};function _e(t){var s;const o=Object.entries(((s=t.__accessor__)==null?void 0:s.metadata)??{});return new Set(o.filter(([r,n])=>(n==null?void 0:n.readOnly)===!0).map(([r])=>r))}var we=Promise.all([X(),Z()]),H=class extends W{async hostLoad(){const[t,{subclass:e,property:o}]=await we;class s extends t{}const r=(d,b)=>p[b];function n(d,b,u){return p!==void 0&&(p[u]=d),d}const c=this.component,i=c.manager.internals,l=[],a=V(this.component);if(c.manager.bypassGetter(()=>a.forEach(d=>{i.accessorSetter[d]===P&&(l.push(d),i.accessorGetter[d]=r,i.accessorSetter[d]=n,o({value:c[d]})(s.prototype,d))})),this._enabledMembers=l,l.length===0)return;const h=e(c.el.tagName)(s),p=new h;this._instance=p}controllerRemoved(){var e,o;super.controllerRemoved();const t=this.component.manager.internals;(e=this._instance)==null||e.destroy(),(o=this._enabledMembers)==null||o.forEach(s=>{t.accessorGetter[s]=P,t.accessorSetter[s]=P})}};export{Ce as A,D as a,Pe as b,xe as m,Y as p,Le as u};
