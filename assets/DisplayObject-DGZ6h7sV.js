import{m as r,a as c,j as _,C as f}from"./subclass-BZA_h8Db.js";import{o as v}from"./Evented-BHRw9x22.js";import{r as n}from"./tslib.es6-B3Jf3DVX.js";import{b as m,L as u}from"./Accessor-BLX9ikPh.js";let e=class extends m{constructor(i){super(i),this.computedOpacity=1,this.computedVisible=!0,this.opacity=1,this.visible=!0,this._fadeOutResolver=null,this._fadeInResolver=null}get transitioning(){return(this._fadeOutResolver||!this.visible?0:this.opacity)!==this.computedOpacity}endTransition(){var i,t;(i=this._fadeInResolver)==null||i.call(this),(t=this._fadeOutResolver)==null||t.call(this),this._fadeInResolver=this._fadeOutResolver=null,this.computedOpacity=this.visible?this.opacity:0}fadeIn(){var i;return this._fadeInResolver||(this.opacity=1,this.computedOpacity=0,(i=this._fadeOutResolver)==null||i.call(this),this._fadeOutResolver=null,this._fadeInResolver=u()),this._fadeInResolver.promise}fadeOut(){var i;return this._fadeOutResolver||(this.opacity=0,(i=this._fadeInResolver)==null||i.call(this),this._fadeInResolver=null,this._fadeOutResolver=u()),this._fadeOutResolver.promise}transitionStep(i,t){var d,l;const s=_("mapview-transitions-duration"),a=s?1/s:0;if(a===0)this.computedOpacity=this.opacity,this.computedVisible=this.visible;else{const o=this._fadeOutResolver||!this.visible?0:this.opacity,h=this.computedOpacity;if(h===o)this.computedVisible=this.visible;else{const p=i*a;this.computedOpacity=h>o?Math.max(o,h-p):Math.min(o,h+p),this.computedVisible=this.computedOpacity>0}}this.transitioning||((d=this._fadeInResolver)==null||d.call(this),(l=this._fadeOutResolver)==null||l.call(this),this._fadeOutResolver=this._fadeInResolver=null)}};n([r()],e.prototype,"computedOpacity",void 0),n([r()],e.prototype,"computedVisible",void 0),n([r()],e.prototype,"opacity",void 0),n([r()],e.prototype,"visible",void 0),n([r()],e.prototype,"transitioning",null),n([r()],e.prototype,"_fadeOutResolver",void 0),n([r()],e.prototype,"_fadeInResolver",void 0),e=n([c("esri.views.2d.engine.transitions.FadeTransition")],e);class T extends v{constructor(){super(...arguments),this._transitionables=null,this._clips=null,this._fadeTransition=null,this._isReady=!1,this._opacity=1,this.parent=null,this._stage=null,this._visible=!0}get computedOpacity(){var t;return((t=this._fadeTransition)==null?void 0:t.computedOpacity)??this.opacity}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender()}get fadeTransitionEnabled(){return this._fadeTransition!==null}set fadeTransitionEnabled(t){!this._fadeTransition&&t?(this._fadeTransition=new e({opacity:this.opacity,visible:this.visible}),this.addTransitionable(this._fadeTransition)):this._fadeTransition&&!t&&(this.removeTransitionable(this._fadeTransition),this._fadeTransition=null)}get inFadeTransition(){var t;return((t=this._fadeTransition)==null?void 0:t.transitioning)??!1}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this._fadeTransition&&(this._fadeTransition.opacity=this._opacity),this.requestRender())}get stage(){return this._stage}set stage(t){var a;if(this._stage===t)return;const s=this._stage;this._stage=t,t?(a=this._stage)!=null&&a.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):s==null||s.trashDisplayObject(this)}get transforms(){return this._transforms==null&&(this._transforms=this._createTransforms()),this._transforms}get transitioning(){return this.isTransitioning()}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this._fadeTransition&&(this._fadeTransition.visible=this._visible),this.requestRender())}get hasLabels(){return!1}get hasHighlight(){return!1}get hasBlending(){return!1}addTransitionable(t){this._transitionables??(this._transitionables=[]),this._transitionables.push(t),this.requestRender()}removeTransitionable(t){t.endTransition(),this._transitionables&&f(this._transitionables,t),this.requestRender()}fadeIn(){this.fadeTransitionEnabled=!0;const t=this._fadeTransition.fadeIn();return this.opacity=1,this.requestRender(),t}fadeOut(){this.fadeTransitionEnabled=!0;const t=this._fadeTransition.fadeOut();return this.opacity=0,this.requestRender(),t}endTransitions(){if(this._transitionables){for(const t of this._transitionables)t.endTransition();this.requestRender()}}beforeRender(t){this.transitionStep(t.deltaTime,t.state.scale),this.setTransform(t.state)}afterRender(t){this.transitioning&&this.requestRender()}remove(){var t;(t=this.parent)==null||t.removeChild(this)}setTransform(t){}processRender(t){var s;this.stage&&(((s=this._fadeTransition)==null?void 0:s.computedVisible)??this.visible)&&this.doRender(t)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this.endTransitions(),this.onDetach(),this.emit("detach")}isTransitioning(){var t;return((t=this._transitionables)==null?void 0:t.some(s=>s.transitioning))??!1}transitionStep(t,s){if(this._transitionables)for(const a of this._transitionables)a.transitionStep(t,s)}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}export{T as e};