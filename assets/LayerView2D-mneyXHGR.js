import{g as b,o as C,r,a as g,m as a,s as H}from"./Accessor-BmwT4B0c.js";import{V as w,d as l,v as $,A as p}from"./reactiveUtils-XM7cS2OP.js";import{n as q}from"./collectionUtils-CTT-51g7.js";import{e as A}from"./utils-BQBvadb7.js";import{n as T}from"./Container-CQ-TKdBu.js";import{s as O}from"./ReactiveMap-BHFEHYMj.js";import{c as P,t as j,a as I}from"./View2D-CUfvXSSH.js";import{a as R,p as k}from"./ClipRect-0Tl6AMAT.js";import{w as U}from"./Extent-g5W9hy0j.js";import{b as V}from"./Point-Cz2JYYmX.js";import{j as x}from"./Polyline-s-JzsQqo.js";import{f as B}from"./jsonUtils-CwFG8yN4.js";import{u as y}from"./DefaultUI-BwWVKFUS.js";import{r as M}from"./layerViewUtils-Bevty3Jm.js";let m=class extends b{constructor(){super(...arguments),this._idToCounters=new O}get size(){return this._idToCounters.size}get objectIds(){return this._idToCounters.keys()}get highlightNamesByObjectId(){return z(this._idToCounters)}add(n,i){let e=!1;for(const s of n){const h=C(this._idToCounters,s,()=>(e=!0,new Map)),o=h.get(i)??0;o||(e=!0),h.set(i,o+1)}return e}delete(n,i){let e=!1;for(const s of n){const h=this._idToCounters.get(s);if(!h)continue;let o=h.get(i);o!=null&&(o--,o>0?h.set(i,o):(h.delete(i),e=!0),h.size===0&&(this._idToCounters.delete(s),e=!0))}return e}};function*z(n){for(const[i,e]of n)yield[i,e.keys()]}m=r([g("esri.views.2d.layers.support.HighlightCounter")],m);var v;const L={base:V,key:"type",typeMap:{extent:U,polygon:x}};let d=v=class extends R{constructor(n){super(n),this.type="geometry",this.geometry=null}clone(){var n;return new v({geometry:((n=this.geometry)==null?void 0:n.clone())??null})}commitVersionProperties(){this.commitProperty("geometry")}};r([a({types:L,json:{read:B,write:!0}})],d.prototype,"geometry",void 0),d=v=r([g("esri.views.layers.support.Geometry")],d);const G=d;let u=class extends R{constructor(n){super(n),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};r([a({type:[[[Number]]],json:{write:!0}})],u.prototype,"path",void 0),u=r([g("esri.views.layers.support.Path")],u);const N=u,f=w.ofType({key:"type",base:null,typeMap:{rect:k,path:N,geometry:G}}),D=new(w.ofType(y)),he=n=>{let i=class extends n{constructor(){super(...arguments),this._highlightCounter=new m,this.attached=!1,this.clips=new f,this.highlights=null,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this._visibleAtCurrentScale=!0}initialize(){var h,o,c;const e=((h=this.view)==null?void 0:h.spatialReferenceLocked)??!0;((o=this.view)==null?void 0:o.spatialReference)&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new H("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new T),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([l(()=>this.suspended,t=>{this.container&&(this.container.visible=!t)},p),l(()=>this.updateSuspended,t=>{this.view&&!t&&this.updateRequested&&this.view.requestUpdate()},p),l(()=>{var t;return((t=this.layer)==null?void 0:t.opacity)??1},t=>{this.container&&(this.container.opacity=t)},p),l(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",t=>{this.container&&(this.container.blendMode=t)},p),l(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,t=>{this.container&&(this.container.effect=t)},p),l(()=>this._mergedHighlights.items.map(t=>({name:t.name,options:{fillColor:t.color,haloColor:t.haloColor,fillOpacity:t.fillOpacity,haloOpacity:t.haloOpacity,haloWidth:t.haloWidth,haloBlur:t.haloBlur}})),()=>{this.container.highlightGradient=P(this.container.highlightGradient,this._mergedHighlights.items)},p),l(()=>this._mergedHighlights.items.map(t=>t.name),()=>{this._processHighlight()}),$(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},p),l(()=>{var t;return{scale:(t=this.view)==null?void 0:t.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}},({scale:t,scaleRange:S})=>{const _=M(S,t);_!==this._visibleAtCurrentScale&&(this._visibleAtCurrentScale=_)},p)],"constructor"),(c=this.view)!=null&&c.whenLayerView?this.view.whenLayerView(this.layer).then(t=>{t===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}destroy(){this.processDetach(),this.updateRequested=!1}get highlightOptions(){return j(this)}set highlightOptions(e){I(this,e)}get hasHighlight(){return this._highlightCounter.size>0}get _mergedHighlights(){if(!this.view)return D;if(!this.highlights)return this.view.highlights;const e=this.view.highlights.clone();for(const s of this.highlights){const h=e.find(o=>o.name===s.name);h&&h.assignFrom(s)}return e}get highlightIds(){return Array.from(this._highlightCounter.objectIds)}get scheduler(){return this.view.scheduler}get spatialReferenceSupported(){var s;const e=(s=this.view)==null?void 0:s.spatialReference;return e==null||this.supportsSpatialReference(e)}get updating(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!((e=this._updatingHandles)!=null&&e.updating)||this.container.transitioning)}get visibleAtCurrentScale(){return this._visibleAtCurrentScale}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,s){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){var e;if(!this.spatialReferenceSupported)return!1;switch((e=this.layer)==null?void 0:e.type){case"link-chart":case"knowledge-graph-sublayer":case"graphics":break;default:if(A(this.view)&&!this.view.inGeographicLayout)return!1}return!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),s=!this.spatialReferenceSupported;return s&&(e.spatialReferenceNotSupported=s),e}addAttachHandles(e){this.addHandles(e,"attach")}_addHighlights(e,s){this._highlightCounter.add(e,s)&&this._processHighlight()}_removeHighlights(e,s){this._highlightCounter.delete(e,s)&&this._processHighlight()}_processHighlight(){}_getHighlights(){const e=[];for(const[s,h]of this._highlightCounter.highlightNamesByObjectId){const o=this._getHighlightBits(h);e.push({objectId:s,highlightFlags:o})}return e}_getHighlightBits(e){const s=new Set(e);let h=1,o=0;if(!this.view)return 0;const c=this._mergedHighlights;for(const{name:t}of c)s.delete(t)&&(o=h),h<<=1;return o}};return r([a()],i.prototype,"attached",void 0),r([a({type:f,set(e){const s=q(e,this._get("clips"),f);this._set("clips",s)}})],i.prototype,"clips",void 0),r([a()],i.prototype,"container",void 0),r([a({type:y})],i.prototype,"highlightOptions",null),r([a({type:w.ofType(y)})],i.prototype,"highlights",void 0),r([a()],i.prototype,"_mergedHighlights",null),r([a()],i.prototype,"moving",void 0),r([a({readOnly:!0})],i.prototype,"spatialReferenceSupported",null),r([a({readOnly:!0})],i.prototype,"updateParameters",void 0),r([a()],i.prototype,"updateRequested",void 0),r([a()],i.prototype,"updating",null),r([a()],i.prototype,"view",void 0),r([a()],i.prototype,"_visibleAtCurrentScale",void 0),r([a({readOnly:!0})],i.prototype,"visibleAtCurrentScale",null),i=r([g("esri.views.2d.layers.LayerView2D")],i),i};export{he as S,G as a};
