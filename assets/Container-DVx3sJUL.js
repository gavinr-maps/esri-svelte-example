import{e as D}from"./DefaultUI-DVON9ypr.js";import{h as W}from"./EffectView-D2q0Wr_W.js";import{s as U}from"./DisplayObject-DFOkWAgp.js";import{n as $}from"./jsonMap-DCC6W5ex.js";import{n as F}from"./subclass-BR3PhgZG.js";import{l as V,c as R}from"./highlightReasons-BXkdrXK1.js";import{I as q,r as C,a as I}from"./definitions-ByNBSgP9.js";import{D as B,O as K,I as O}from"./enums-BlUEVwJR.js";import{e as X,c as Y}from"./Texture-BbJIOVx_.js";import{W as Z}from"./Point-DB4Hp4hH.js";const k=1,mt=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],Et=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],_=256,g={outlineWidth:1.3,outerHaloWidth:.4,innerHaloWidth:.4,outlinePosition:0},A=()=>F.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");function z(e,t){t.fillColor[0]=e.color.r/255,t.fillColor[1]=e.color.g/255,t.fillColor[2]=e.color.b/255,t.fillColor[3]=e.color.a,e.haloColor?(t.outlineColor[0]=e.haloColor.r/255,t.outlineColor[1]=e.haloColor.g/255,t.outlineColor[2]=e.haloColor.b/255,t.outlineColor[3]=e.haloColor.a):(t.outlineColor[0]=t.fillColor[0],t.outlineColor[1]=t.fillColor[1],t.outlineColor[2]=t.fillColor[2],t.outlineColor[3]=t.fillColor[3]),t.fillColor[3]*=e.fillOpacity,t.outlineColor[3]*=e.haloOpacity,t.fillColor[0]*=t.fillColor[3],t.fillColor[1]*=t.fillColor[3],t.fillColor[2]*=t.fillColor[3],t.outlineColor[0]*=t.outlineColor[3],t.outlineColor[1]*=t.outlineColor[3],t.outlineColor[2]*=t.outlineColor[3],t.outlineWidth=g.outlineWidth,t.outerHaloWidth=g.outerHaloWidth,t.innerHaloWidth=g.innerHaloWidth,t.outlinePosition=g.outlinePosition}const J=[0,0,0,0];class b{constructor(){this.type="single",this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*.9,.54,.81,.9],outlinePosition:g.outlinePosition,outlineWidth:g.outlineWidth,innerHaloWidth:g.innerHaloWidth,outerHaloWidth:g.outerHaloWidth},this._shadeTexChanged=!0,this._texelData=new Uint8Array(4*_),this._minMaxDistance=[0,0]}setHighlightOptions(t){const i=this._convertedHighlightOptions;z(t,i);const n=i.outlinePosition-i.outlineWidth/2-i.outerHaloWidth,s=i.outlinePosition-i.outlineWidth/2,d=i.outlinePosition+i.outlineWidth/2,a=i.outlinePosition+i.outlineWidth/2+i.innerHaloWidth,l=Math.sqrt(Math.PI/2)*k,r=Math.abs(n)>l?Math.round(10*(Math.abs(n)-l))/10:0,u=Math.abs(a)>l?Math.round(10*(Math.abs(a)-l))/10:0;let c;r&&!u?A().error("The outer rim of the highlight is "+r+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!r&&u?A().error("The inner rim of the highlight is "+u+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):r&&u&&A().error("The highlight is "+Math.max(r,u)+"px away from the edge of the feature; consider reducing some width values.");const o=[void 0,void 0,void 0,void 0];function p(h,E,f){o[0]=(1-f)*h[0]+f*E[0],o[1]=(1-f)*h[1]+f*E[1],o[2]=(1-f)*h[2]+f*E[2],o[3]=(1-f)*h[3]+f*E[3]}const{_texelData:m}=this;for(let h=0;h<_;++h)c=n+h/(_-1)*(a-n),c<n?(o[0]=0,o[1]=0,o[2]=0,o[3]=0):c<s?p(J,i.outlineColor,(c-n)/(s-n)):c<d?[o[0],o[1],o[2],o[3]]=i.outlineColor:c<a?p(i.outlineColor,i.fillColor,(c-d)/(a-d)):[o[0],o[1],o[2],o[3]]=i.fillColor,m[4*h]=255*o[0],m[4*h+1]=255*o[1],m[4*h+2]=255*o[2],m[4*h+3]=255*o[3];this._minMaxDistance[0]=n,this._minMaxDistance[1]=a,this._shadeTexChanged=!0}applyHighlightOptions(t,i){if(!this._shadeTex){const n=new X;n.wrapMode=B.CLAMP_TO_EDGE,n.width=_,n.height=1,this._shadeTex=new Y(t,n)}this._shadeTexChanged&&(this._shadeTex.updateData(0,0,0,_,1,this._texelData),this._shadeTexChanged=!1),t.bindTexture(this._shadeTex,q),i.setUniform2fv("u_minMaxDistance",this._minMaxDistance)}destroy(){var t;(t=this._shadeTex)==null||t.dispose(),this._shadeTex=null}getReasonsWithGradients(){return[{activeReasons:(1<<V.length)-1,activeGradient:this}]}}let Q=class{constructor(){this.type="multi";const t={};for(const i in R)t[i]=new b;this.gradients=t}setHighlightOptions(t){for(const i in R){const n=R[i](t);this.gradients[i].setHighlightOptions(n)}}applyHighlightOptions(t,i,n){this.gradients[n].applyHighlightOptions(t,i)}destroy(){for(const t in R)this.gradients[t].destroy()}getReasonsWithGradients(){let t=1;const i=[];for(const n in this.gradients){const s=this.gradients[n];i.push({activeReasons:t,activeGradient:s}),t<<=1}return i}};var y,M,S,w,H,v,L,P,G;(function(e){e[e.FILL=0]="FILL",e[e.LINE=1]="LINE",e[e.MARKER=2]="MARKER",e[e.TEXT=3]="TEXT",e[e.LABEL=4]="LABEL"})(y||(y={})),function(e){e[e.NONE=0]="NONE",e[e.MAP=1]="MAP",e[e.LABEL=2]="LABEL",e[e.LABEL_ALPHA=4]="LABEL_ALPHA",e[e.HITTEST=8]="HITTEST",e[e.HIGHLIGHT=16]="HIGHLIGHT",e[e.CLIP=32]="CLIP",e[e.DEBUG=64]="DEBUG",e[e.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(M||(M={})),function(e){e[e.SIZE=0]="SIZE",e[e.COLOR=1]="COLOR",e[e.OPACITY=2]="OPACITY",e[e.ROTATION=3]="ROTATION"}(S||(S={})),function(e){e[e.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",e[e.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",e[e.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",e[e.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(w||(w={})),function(e){e[e.SPRITE=0]="SPRITE",e[e.GLYPH=1]="GLYPH"}(H||(H={})),function(e){e[e.DEFAULT=0]="DEFAULT",e[e.SIMPLE=1]="SIMPLE",e[e.DOT_DENSITY=2]="DOT_DENSITY",e[e.OUTLINE_FILL=3]="OUTLINE_FILL",e[e.OUTLINE_FILL_SIMPLE=4]="OUTLINE_FILL_SIMPLE",e[e.HEATMAP=5]="HEATMAP",e[e.PIE_CHART=6]="PIE_CHART"}(v||(v={})),function(e){e[e.All=0]="All",e[e.Highlight=1]="Highlight",e[e.InsideEffect=2]="InsideEffect",e[e.OutsideEffect=3]="OutsideEffect"}(L||(L={})),function(e){e[e.BATCHING=0]="BATCHING",e[e.STRICT_ORDER=1]="STRICT_ORDER",e[e.STRICT_MARKERS_AND_TEXT=2]="STRICT_MARKERS_AND_TEXT"}(P||(P={})),function(e){e[e.FILL=0]="FILL",e[e.LINE=1]="LINE",e[e.MARKER=2]="MARKER",e[e.TEXT=3]="TEXT"}(G||(G={}));const N={color:{write:[!0,!0,!0,!0],blendMode:"composite"},depth:!1,stencil:{write:!1,test:{ref:e=>e.stencilRef,compare:K.EQUAL,mask:255,op:{fail:O.KEEP,zFail:O.KEEP,zPass:O.REPLACE}}}},j={color:{write:[!0,!0,!0,!0],blendMode:"additive"},depth:!1,stencil:!1},tt={...N,color:{write:[!0,!0,!0,!0],blendMode:"delete"}};function et({pixelRatio:e,state:t,displayLevel:i,requiredLevel:n},s){const d=1/2**(i-s.key.level),a=1/2**(n-s.key.level);return{displayMat3:Array.from(t.displayMat3),displayViewMat3:Array.from(t.displayViewMat3),displayViewScreenMat3:Array.from(s.transforms.displayViewScreenMat3),viewMat3:Array.from(t.viewMat3),tileMat3:Array.from(s.transforms.tileMat3),displayZoomFactor:d,requiredZoomFactor:a,tileOffset:[s.x,s.y],currentScale:t.scale,currentZoom:i,metersPerSRUnit:Z(t.spatialReference),rotation:t.rotation,pixelRatio:e}}function T(e){var t;return((t=e.passOptions)==null?void 0:t.type)==="highlight"}function x(e){var t;return((t=e.passOptions)==null?void 0:t.type)==="hittest"}function it(e){if(!x(e))return null;const{position:t,distance:i,smallSymbolDistance:n,smallSymbolSizeThreshold:s}=e.passOptions;return{position:t,distance:i,smallSymbolDistance:n,smallSymbolSizeThreshold:s}}function nt(e){if(!T(e))return null;const{activeReasons:t,highlightAll:i}=e.passOptions;return{activeReasons:t,highlightAll:i?1:0}}function Ct(e,t,i){const n={};for(const s in i)i[s]instanceof Function?n[s]=i[s](e,t):n[s]=i[s];return n}function Lt(e,t){const{attributeView:i,context:n}=e;return{storage:i.getUniforms(n),view:et(e,t),hittestRequest:it(e),highlight:nt(e)}}function Ot(e){return{inside:e.selection===L.InsideEffect,outside:e.selection===L.OutsideEffect}}function st(e){return x(e)?j:T(e)&&e.passOptions.stepType==="clear"?tt:N}function At(e){const{row:t,col:i}=e.key,n=i*I,s=t*I;return{tileOffsetFromLocalOrigin:[n%C,s%C],maxIntsToLocalOrigin:[Math.floor(n/C),Math.floor(s/C)]}}const ot=new $({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function It(e){return ot.toJSON(e)}function yt(e){const{bandCount:t,attributeTable:i,colormap:n,pixelType:s}=e.raster.rasterInfo;return t===1&&(i!=null||n!=null||s==="u8"||s==="s8")}function rt(e,t){return(e==null?void 0:e.type)==="single"&&t.multiHighlightEnabled&&(e.destroy(),e=null),(e==null?void 0:e.type)!=="multi"||t.multiHighlightEnabled||(e.destroy(),e=null),e||(e=t.multiHighlightEnabled?new Q:new b),e.setHighlightOptions(t),e}function Mt(e,t,i){const{painter:n,highlightGradient:s}=e,{highlight:d}=n.effects;if(!s)return;const a=e.passOptions,l=s.getReasonsWithGradients();for(let r=0;r<l.length;r++){const u={...e,passOptions:{type:"highlight",activeGradient:l[r].activeGradient,activeReasons:l[r].activeReasons,stepType:"burn",highlightAll:t}};if(d.bind(u),i(u),r<l.length-1){let o=0;for(let p=r+1;p<l.length;p++)o|=l[p].activeReasons;i({...e,passOptions:{type:"highlight",activeGradient:l[r].activeGradient,activeReasons:o,stepType:"clear",highlightAll:t}})}const c={...e,passOptions:{type:"highlight",activeGradient:l[r].activeGradient,activeReasons:l[r].activeReasons,stepType:"draw",highlightAll:t}};n.setPipelineState(st(e)),n.updatePipelineState(e.context),d.draw(c),d.unbind()}e.passOptions=a}class St extends U{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this._children=[],this._effectView=null,this._highlightOptions=null,this._highlightGradient=null}get blendMode(){return this._blendMode}set blendMode(t){this._blendMode=t,this.requestRender()}get children(){return this._children}get clips(){return this._clips}set clips(t){this._clips=t,this.children.forEach(i=>i.clips=t)}get computedEffects(){var t;return((t=this._effectView)==null?void 0:t.effects)??null}get effect(){var t;return((t=this._effectView)==null?void 0:t.effect)??""}set effect(t){(this._effectView||t)&&(this._effectView||(this._effectView=new W),this._effectView.effect=t,this.requestRender())}get highlightOptions(){return this._highlightOptions}set highlightOptions(t){var i;if(!t)return this._highlightOptions=null,void(this._highlightGradient&&(this._highlightGradient.destroy(),this._highlightGradient=null,this.requestRender()));(i=this._highlightOptions)!=null&&i.equals(t)||(this._highlightOptions=t,this._highlightGradient=rt(this._highlightGradient,t),this.requestRender())}get hasBlending(){return!!this.blendMode}get hasHighlight(){return this.children.some(t=>t.hasHighlight)}get hasLabels(){return this.children.some(t=>t.hasLabels)}get requiresDedicatedFBO(){return this.children.some(t=>"blendMode"in t&&t.blendMode&&t.blendMode!=="normal")}updateTransitionProperties(t,i){super.updateTransitionProperties(t,i),this._effectView&&(this._effectView.transitionStep(t,i),this._effectView.transitioning&&this.requestRender())}doRender(t){var s;const i=this.createRenderParams(t),{painter:n}=i;n.beforeRenderLayer(i,(s=this._clips)!=null&&s.length?255:0,this.computedOpacity),this.renderChildren(i),n.afterRenderLayer(i,this.computedOpacity)}addChild(t){return this.addChildAt(t,this.children.length)}addChildAt(t,i=this.children.length){if(!t||this.contains(t))return t;this._needsSort=!0;const n=t.parent;return n&&n!==this&&n.removeChild(t),i>=this.children.length?this.children.push(t):this.children.splice(i,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),t}contains(t){return this._childrenSet.has(t)}endTransitions(){super.endTransitions(),this._effectView&&(this._effectView.endTransitions(),this.requestRender())}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const t of this.children)this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null;this.children.length=0}removeChild(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t}removeChildAt(t){if(t<0||t>=this.children.length)return null;this._needsSort=!0;const i=this.children.splice(t,1)[0];return this._childrenSet.delete(i),this!==this.stage&&(i.clips=null),i.stage=null,i.parent=null,i}sortChildren(t){this._needsSort&&(this.children.sort(t),this._needsSort=!1)}beforeRender(t){super.beforeRender(t);for(const i of this.children)i.beforeRender(t)}afterRender(t){super.afterRender(t);for(const i of this.children)i.afterRender(t)}_createTransforms(){return{displayViewScreenMat3:D()}}onAttach(){super.onAttach();const t=this.stage;for(const i of this.children)i.stage=t}onDetach(){super.onDetach();for(const t of this.children)t.stage=null}renderChildren(t){for(const i of this.children)i.processRender(t)}createRenderParams(t){return{...t,requireFBO:this.requiresDedicatedFBO,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||t.highlightGradient}}}export{H as A,M as E,S as L,st as M,P as N,L as R,G as S,Mt as a,Ot as b,et as c,Ct as d,T as f,St as h,Et as i,k as o,x as p,yt as r,It as s,mt as t,At as w,Lt as y};
