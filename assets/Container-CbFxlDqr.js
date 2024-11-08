import{q as r}from"./subclass-BZA_h8Db.js";import{s as n}from"./SimpleObservable-KocWTzVy.js";import{e as h}from"./DefaultUI-C0utm694.js";import{a as l}from"./EffectView-DC4OeDwG.js";import{e as d}from"./DisplayObject-DGZ6h7sV.js";let p=class extends d{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this._children=[],this._childrenObservable=new n,this._effectView=null,this._highlightGradient=null}get blendMode(){return this._blendMode}set blendMode(e){this._blendMode=e,this.requestRender()}get children(){return r(this._childrenObservable),this._children}get clips(){return this._clips}set clips(e){this._clips=e,this.children.forEach(t=>t.clips=e)}get computedEffects(){var e;return((e=this._effectView)==null?void 0:e.effects)??null}get effect(){var e;return((e=this._effectView)==null?void 0:e.effect)??""}set effect(e){(this._effectView||e)&&(this._effectView||(this._effectView=new l,this.addTransitionable(this._effectView)),this._effectView.effect=e,this.requestRender())}get highlightGradient(){return this._highlightGradient}set highlightGradient(e){this._highlightGradient=e,this.requestRender()}get hasBlending(){return!!this.blendMode}get hasHighlight(){return this.children.some(e=>e.hasHighlight)}get hasLabels(){return this.children.some(e=>e.hasLabels)}get requiresDedicatedFBO(){return this.children.some(e=>"blendMode"in e&&e.blendMode&&e.blendMode!=="normal")}get isReady(){return this.children.every(e=>e.isReady)}get sortFunction(){return this._sortFunction}set sortFunction(e){this._sortFunction=e,e&&(this._needsSort=!0)}doRender(e){var s;const t=this.createRenderParams(e),{painter:i}=t;i.beforeRenderLayer(t,(s=this._clips)!=null&&s.length?255:0,this.computedOpacity),this.renderChildren(t),i.afterRenderLayer(t,this.computedOpacity)}addChild(e){return this.addChildAt(e,this.children.length)}addChildAt(e,t=this.children.length){if(!e||this.contains(e))return e;this._needsSort=!0;const i=e.parent;return i&&i!==this&&i.removeChild(e),t>=this.children.length?this.children.push(e):this.children.splice(t,0,e),this._childrenSet.add(e),e.parent=this,e.stage=this.stage,this!==this.stage&&(e.clips=this.clips),this.requestRender(),this._childrenObservable.notify(),e}contains(e){return r(this._childrenObservable),this._childrenSet.has(e)}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const e of this.children)this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null;this.children.length=0,this._childrenObservable.notify()}removeChild(e){return this.contains(e)?this.removeChildAt(this.children.indexOf(e)):e}removeChildAt(e){if(e<0||e>=this.children.length)return null;this._needsSort=!0;const t=this.children.splice(e,1)[0];return this._childrenSet.delete(t),this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null,this._childrenObservable.notify(),t}beforeRender(e){super.beforeRender(e),this.sortFunction&&this._needsSort&&(this.children.sort(this.sortFunction),this._needsSort=!1,this._childrenObservable.notify());for(const t of this.children)t.beforeRender(e)}afterRender(e){super.afterRender(e);for(const t of this.children)t.afterRender(e)}_createTransforms(){return{displayViewScreenMat3:h()}}onAttach(){super.onAttach();const e=this.stage;for(const t of this.children)t.stage=e}onDetach(){super.onDetach();for(const e of this.children)e.stage=null}renderChildren(e){for(const t of this.children)t.processRender(e)}createRenderParams(e){return{...e,requireFBO:this.requiresDedicatedFBO,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:e.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||e.highlightGradient}}isTransitioning(){return super.isTransitioning()||this.children.some(e=>e.transitioning)}};export{p as n};
