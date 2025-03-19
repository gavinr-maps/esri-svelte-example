import{a3 as H,a5 as $,b2 as D,r as u,b6 as A}from"./Accessor-BmwT4B0c.js";import{o as W,M,h as C,b as G,i as N}from"./mat3-CR8GKnhD.js";import{e as q}from"./DefaultUI-BwWVKFUS.js";import{t as _}from"./vec2f32-BbH2jxlN.js";import{e as O}from"./DisplayObject-Dejv4A66.js";import{P as U,G as V,D as j,I as R,O as F,L as y}from"./enums-D9v74xTE.js";import{p as K,w as Q}from"./Texture-BVJ22uHh.js";import{w as X}from"./definitions-CP59Y04S.js";import{C as b,_ as c,E as P,a as p,c as k,Y as v,j as Y,X as J,w as Z,h as tt,g as m,K as et,b as it,P as st,U as rt,r as ot,m as E,v as at,t as lt}from"./GraphShaderModule--vK3Hbk2.js";import{e as nt}from"./TechniqueType-uMFRS8dR.js";class ut{constructor(t,e,i){this.pixelBlock=t,this.extent=e,this.originalPixelBlock=i}get width(){return this.pixelBlock!=null?this.pixelBlock.width:0}get height(){return this.pixelBlock!=null?this.pixelBlock.height:0}render(t){const e=this.pixelBlock;if(e==null)return;const i=this.filter({extent:this.extent,pixelBlock:this.originalPixelBlock??e});if(i.pixelBlock==null)return;i.pixelBlock.maskIsAlpha&&(i.pixelBlock.premultiplyAlpha=!0);const r=i.pixelBlock.getAsRGBA(),o=t.createImageData(i.pixelBlock.width,i.pixelBlock.height);o.data.set(r),t.putImageData(o,0,0)}getRenderedRasterPixels(){const t=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return t.pixelBlock==null?null:(t.pixelBlock.maskIsAlpha&&(t.pixelBlock.premultiplyAlpha=!0),{width:t.pixelBlock.width,height:t.pixelBlock.height,renderedRasterPixels:new Uint8Array(t.pixelBlock.getAsRGBA().buffer)})}}function ht(s){return s&&"render"in s}function ct(s){const t=document.createElement("canvas");return t.width=s.width,t.height=s.height,s.render(t.getContext("2d")),t}function dt(s){var t;return ht(s)?s instanceof ut?(t=s.getRenderedRasterPixels())==null?void 0:t.renderedRasterPixels:ct(s):s}let kt=class extends O{constructor(t=null,e=!1){super(),this.blendFunction="standard",this._sourceWidth=0,this._sourceHeight=0,this._textureInvalidated=!1,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._texture=null,this._width=void 0,this.x=0,this.y=0,this.immutable=e,this.source=t,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null),this._uploadStatus!=null&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return this._height!==void 0?this._height:this._sourceHeight}set height(t){this._height=t}get source(){return this._source}set source(t){t==null&&this._source==null||(this._source=t,this.invalidateTexture(),this.requestRender())}get texture(){return this._texture}get width(){return this._width!==void 0?this._width:this._sourceWidth}set width(t){this._width=t}beforeRender(t){super.beforeRender(t),this.updateTexture(t)}async setSourceAsync(t,e){this._uploadStatus!=null&&this._uploadStatus.controller.abort();const i=new AbortController,r=H();return $(e,()=>i.abort()),$(i,o=>r.reject(o)),this._uploadStatus={controller:i,resolver:r},this.source=t,r.promise}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width))}transitionStep(t,e){t>=64&&(this.fadeTransitionEnabled=!1),super.transitionStep(t,e)}setTransform(t){const e=W(this.transforms.displayViewScreenMat3),[i,r]=t.toScreenNoRotation([0,0],[this.x,this.y]),o=this.resolution/this.pixelRatio/t.resolution,a=o*this.width,l=o*this.height,n=Math.PI*this.rotation/180;M(e,e,_(i,r)),M(e,e,_(a/2,l/2)),C(e,e,-n),M(e,e,_(-a/2,-l/2)),G(e,e,_(a,l)),N(this.transforms.displayViewScreenMat3,t.displayViewMat3,e)}setSamplingProfile(t){this._texture&&(t.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(t.samplingMode))}bind(t,e){this._texture&&t.bindTexture(this._texture,e)}async updateTexture({context:t,painter:e}){if(!this._textureInvalidated)return;if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(t)),!this.source)return void this._texture.setData(null);this._texture.resize(this._sourceWidth,this._sourceHeight);const i=dt(this.source);try{if(this._uploadStatus!=null){const{controller:r,resolver:o}=this._uploadStatus,a={signal:r.signal},{width:l,height:n}=this,h=this._texture;await e.textureUploadManager.enqueueTextureUpdate({data:i,texture:h,width:l,height:n},a),o.resolve(),this._uploadStatus=null}else this._texture.setData(i);this.ready()}catch(r){D(r)}}onDetach(){this.destroy()}_createTransforms(){return{displayViewScreenMat3:q()}}_createTexture(t){const e=this.immutable,i=new K;return i.internalFormat=e?U.RGBA8:V.RGBA,i.wrapMode=j.CLAMP_TO_EDGE,i.isImmutable=e,i.width=this._sourceWidth,i.height=this._sourceHeight,new Q(t,i)}};function pt(s){const t=new c(.16666666666666666),e=s.multiply(s),i=e.multiply(s),r=t.multiply(i.multiply(-1).add(new c(3).multiply(e)).subtract(new c(3).multiply(s)).add(1)),o=t.multiply(i.multiply(3).subtract(e.multiply(6)).add(4)),a=t.multiply(i.multiply(-3).add(e.multiply(3)).add(s.multiply(3)).add(1)),l=t.multiply(i);return new v(r,o,a,l)}function I(s){const t=pt(s),e=t.x.add(t.y),i=t.z.add(t.w),r=new c(1).subtract(t.y.divide(e)).add(s),o=new c(1).add(t.w.divide(i)).subtract(s);return new v(r,o,e,i)}function mt(s,t,e){const i=new b(new c(1).divide(e.x),0),r=new b(0,new c(1).divide(e.y)),o=t.multiply(e).subtract(.5),a=I(P(o).x).xyz,l=I(P(o).y).xyz;let n=t.add(a.x.multiply(i)),h=t.subtract(a.y.multiply(i));const f=n.add(l.x.multiply(r)),S=h.add(l.x.multiply(r));n=n.subtract(l.y.multiply(r)),h=h.subtract(l.y.multiply(r));let d=p(s,h),B=p(s,n);const z=p(s,S),L=p(s,f);return d=k(d,z,l.z),B=k(B,L,l.z),d=k(d,B,a.z),d}class T extends it{}u([tt(0,b)],T.prototype,"position",void 0);class xt extends at{}class x extends st{}u([m(rt)],x.prototype,"texture",void 0),u([m(ot)],x.prototype,"dvsMat3",void 0),u([m(b)],x.prototype,"coordScale",void 0),u([m(c)],x.prototype,"opacity",void 0);class g extends Y{constructor(){super(...arguments),this.type="BitmapShader"}vertex(t){const e=this.config.dvsMat3.multiply(new J(t.position.multiply(this.config.coordScale),1));return{glPosition:new v(e,1),texcoord:t.position}}fragment(t){const e=new Z;let i;return i=this.bicubic?mt(this.config.texture,t.texcoord,this.config.coordScale):p(this.config.texture,t.texcoord),e.fragColor=new v(i.rgb.multiply(this.config.opacity),i.a.multiply(this.config.opacity)),e}}u([m(x)],g.prototype,"config",void 0),u([et],g.prototype,"bicubic",void 0),u([A(0,E(T))],g.prototype,"vertex",null),u([A(0,E(xt))],g.prototype,"fragment",null);const w={nearest:{samplingMode:y.NEAREST,mips:!1},bilinear:{samplingMode:y.LINEAR,mips:!1},bicubic:{samplingMode:y.LINEAR,mips:!1},trilinear:{samplingMode:y.LINEAR_MIPMAP_LINEAR,mips:!0}},gt=(s,t,e)=>{if(e.samplingMode==="dynamic"){const{state:i}=s,r=t.resolution/t.pixelRatio/i.resolution,o=Math.round(s.pixelRatio)!==s.pixelRatio,a=r>1.05||r<.95;return i.rotation||a||o||t.isSourceScaled||t.rotation?w.bilinear:w.nearest}return w[e.samplingMode]};class At extends lt{constructor(){super(...arguments),this.name="BrushBitmap",this.type=nt.Bitmap,this.shaders={bitmap:new g}}render(t,e){const{context:i,renderingOptions:r,painter:o}=t;for(const a of e.bitmaps){const l=a.texture;if(!a.source||!a.isReady||l==null)continue;const n=gt(t,a,r);t.timeline.begin(this.name),o.setPipelineState({depth:!1,stencil:{test:{mask:255,ref:a.stencilRef,compare:F.EQUAL,op:{fail:R.KEEP,zFail:R.KEEP,zPass:R.KEEP}},write:!1},color:{write:[!0,!0,!0,!0],blendMode:a.blendFunction==="additive"?"additive":"composite"}}),a.setSamplingProfile(n);const{coordScale:h,computedOpacity:f,transforms:S}=a,d={texture:{texture:l,unit:X},dvsMat3:S.displayViewScreenMat3,coordScale:h,opacity:f};o.submitDrawMesh(i,{shader:this.shaders.bitmap,uniforms:{config:d},defines:{bicubic:n===w.bicubic},optionalAttributes:null,useComputeBuffer:!1},o.quadMesh),t.timeline.end(this.name)}}}export{kt as S,ct as f,ht as g,ut as l,At as p};
