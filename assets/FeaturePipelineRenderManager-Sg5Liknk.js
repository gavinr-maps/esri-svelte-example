import{r as c,m as v,a as f,M as I,D as G,g as M,e as C,K as x}from"./Accessor-BHnuXKD2.js";import{s as g}from"./vec3f64-BLpZdpfb.js";import{N as E}from"./vec4f64-o2zAXfmz.js";import{l as T}from"./ViewingMode-Dodu7ZZk.js";import{t as D,s as P}from"./DepthRange-C25RnOB3.js";import{t as F}from"./glUtil-D0YUa0ow.js";import{n as u}from"./Matrix3PassUniform-Bhi2fM3C.js";import{u as L}from"./RenderPlugin-B2sz29jJ.js";import{A as R}from"./FloatArray-BCfeX8wo.js";import{i as S}from"./DrawParameters-C0gywgJQ.js";import{e as A}from"./VertexAttribute-Cq4MnHjR.js";import{k as $}from"./LodRenderer-DrfQ8MMz.js";import{m as B,l as O,f as U,h as k}from"./RealisticTree.glsl-BIYA2y1x.js";import{c as z,u as H,s as V}from"./sdfPrimitives-B8Jbwvqs.js";import{e as w}from"./basicInterfaces-CZwQPxTp.js";import{z as q,o as N}from"./DefaultMaterial-B5sYRDQR.js";import{a as W}from"./HUDMaterial-DRUv4rua.js";let h=class extends L{constructor(e){super(e),this._glMaterials=null,this._produces=new Map,this._renderGeometries=new Map,this._vaoCache=null,this._drawParameters=new S,this._bufferWriter=null}get produces(){return this._produces}get numFeatures(){let r=0;return this._renderGeometries.forEach(t=>r+=t.numElements/6),r}get usedMemory(){let e=0;return this._renderGeometries.forEach(r=>{e+=r.vao.usedMemory}),e}initialize(){this._bufferWriter=this.material.createBufferWriter(),this.material.produces.forEach((e,r)=>{this._produces.set(r,t=>t!==u.Highlight&&t!==u.ShadowHighlight&&e(t))})}destroy(){this._glMaterials.dispose();const e=this._renderGeometries.keys();for(const r of e)this.removeRenderGeometry(r)}acquireTechniques(e){const r=this.material;if(!r.shouldRender(e))return null;const{output:t,bind:s}=e,n=r.produces.get(s.slot);if(!(n!=null&&n(t))||t===u.Highlight||t===u.ShadowHighlight)return null;const i=this._glMaterials.load(e.rctx,s.slot,t);return i==null?void 0:i.beginSlot(s)}render(e,r){const t=this._renderGeometries;if(t.size===0)return;const{bind:s}=e,n=s.slot===R.OCCLUDER_MATERIAL||s.slot===R.TRANSPARENT_OCCLUDER_MATERIAL?s.slot:null,i=e.rctx;i.runAppleAmdDriverHelper(),i.bindTechnique(r,s,this.material.parameters);const a=r.program;for(const[d,o]of t)this._drawParameters.origin=o.localOrigin,a.bindDraw(s,this.material.parameters,this._drawParameters),r.ensureAttributeLocations(o.vao),i.bindVAO(o.vao),i.setPipelineState(r.getPipeline(!1,n)),i.drawArrays(r.primitiveType,0,o.numElements)}initializeRenderContext(e,r){this._glMaterials=new D(this.material,e.materials),this._vaoCache=e.renderContext.rctx.getVaoCache(this.material.vertexAttributeLocations,F(this._bufferWriter.vertexBufferLayout))}uninitializeRenderContext(){}addRenderGeometry(e,r,t){this.removeRenderGeometry(e);const s=this._vaoCache.newVao(r.data.byteLength);s.vertexBuffers.get("geometry").setSubData(new Uint8Array(r.data),0,0,r.data.byteLength);const n={localOrigin:t,vao:s,numElements:r.elementCount};return this._renderGeometries.set(e,n),n}removeRenderGeometry(e){const r=this._renderGeometries.get(e);r!=null&&(this._vaoCache.deleteVao(r.vao),this._renderGeometries.delete(e))}hasHighlightOptions(e){return!1}};c([v({constructOnly:!0})],h.prototype,"material",void 0),h=c([f("esri.views.3d.layers.graphics.pipeline.rendering.DirectRenderer")],h);let p=class{constructor(e){this._optionalFields=new Array,this._featureIdToInstanceIndex=new Map,this._disposeResourceHandles=new Array,this._lodRendererResources=null,this.layerUid=e.layerUid,this.view=e.view,this.sharedResources=this.view.sharedSymbolResources,this.scheduler=this.view.resourceController.scheduler}get numFeatures(){return this._featureIdToInstanceIndex.size}get usedMemory(){var t;const e=(t=this._lodRendererResources)==null?void 0:t.lodRenderer,r=e==null?void 0:e.symbol;return((r==null?void 0:r.computeUsedMemory())??0)+16*this._featureIdToInstanceIndex.size}destroy(){this._disposeResourceHandles.forEach(e=>e())}async doLoad(e,r,t){I("enable-feature:objectAndLayerId-rendering")&&this._optionalFields.push(A.OBJECTANDLAYERIDCOLOR);const s=j(o=>r(o),e),n=this.view._stage,i=s.getMaterials();n.addMany(i),this._addDisposeResource(()=>n.removeMany(i));const a=s.getTextures();n.addMany(a),this._addDisposeResource(()=>{a.forEach(o=>o.unload()),n.removeMany(a)}),await Promise.all(a.map(o=>this.view._stage.schedule(()=>o.load(n.renderView.renderingContext),t))),G(t);const d=await this._createLodRenderer(s,t);this._lodRendererResources={lodRenderer:d,materials:i,textures:a}}addInstances(e){const r=this._lodRendererResources;if(r==null)return;const{featureIds:t,localTransforms:s,globalTransforms:n}=e,i=r.lodRenderer;if(i==null)return;const a=i.instanceData,d=t.length;for(let o=0;o<d;++o){const b=t[o],l=a.addInstance(),_=a.view,y=16*o;_.localTransform.copyFromTypedBuffer(l,s,y),_.globalTransform.copyFromTypedBuffer(l,n,y),a.updateModelTransform(l),a.setVisible(l,!0),this._featureIdToInstanceIndex.set(b,l)}}removeInstances(e){const r=this._lodRendererResources;if(r==null)return;const t=r.lodRenderer.instanceData,s=this._featureIdToInstanceIndex,n=e.length;for(let i=0;i<n;++i){const a=e[i],d=s.get(a);d!=null&&(t.removeInstance(d),s.delete(a))}}_addDisposeResource(e){this._disposeResourceHandles.push(e)}async _createLodRenderer(e,r){const t=this.view._stage,s={layerUid:this.layerUid,graphicUid:i=>1,notifyGraphicGeometryChanged:i=>1,notifyGraphicVisibilityChanged:i=>1},n=new $({symbol:e,optionalFields:this._optionalFields,metadata:s,shaderTransformation:null},this.scheduler);return n.slicePlaneEnabled=!1,this._addDisposeResource(()=>{t.removeRenderPlugin(n),n.destroy()}),await t.addRenderPlugin(n,r),n}};function j(e,r){const t=r.levels.map(s=>{const n=s.components.map(i=>{const a=e(i.materialId);if(!J(a))throw new Error("LodRenderer only supports DefaultMaterial");const d=new B(a,i.renderGeometryBuffer.data,i.renderGeometryBuffer.elementCount,i.boundingInfo);return new O(d)});return new U(n,s.minScreenSpaceRadius)});return new k(t)}function J(e){return e!=null&&"materialType"in e&&e.materialType==="default"}p=c([f("esri.views.3d.layers.graphics.pipeline.rendering.LodRenderer")],p);let m=class extends M{constructor(e){super(),this.view=null,this.layerUid=null,this._renderGeometries=new Map,this._materials=new Map,this._directRenderers=new Map,this._lodRenderers=new Map,this.totalFeatures=0,this.view=e.view,this.layerUid=e.layerUid}initialize(){}destroy(){this.removeAllHandles(),this._lodRenderers.forEach(e=>e.destroy())}async executeRenderCommands(e){for(const r of e)switch(r.id){case"create-material":await this._createMaterial(r);break;case"create-direct-renderer":await this._createDirectRenderer(r);break;case"add-direct-renderer-geometry":await this._addDirectRendererGeometry(r),this._updateFeatureCount();break;case"remove-direct-renderer-geometry":await this._removeDirectRendererGeometry(r),this._updateFeatureCount();break;case"create-lod-renderer":await this._createLodRenderer(r);break;case"add-lod-instances":await this._addLodInstances(r),this._updateFeatureCount();break;case"remove-lod-instances":await this._removeLodInstances(r),this._updateFeatureCount()}}_updateFeatureCount(){let e=0;for(const r of this._directRenderers.values())e+=r.numFeatures;for(const r of this._lodRenderers.values())e+=r.numFeatures;this._set("totalFeatures",e)}get usedMemory(){let e=0;for(const r of this._directRenderers.values())e+=r.usedMemory;for(const r of this._lodRenderers.values())e+=r.usedMemory;return e}async _createMaterial(e){const{view:r}=this,{sharedSymbolResources:t}=r;if(t==null)throw new Error("No shared symbol resources found!");const{textures:s}=t,n=r.state.viewingMode===T.Global;let i=null;switch(e.type){case"default":i=Y(t,{physicalBasedRenderingEnabled:!0,slicePlaneEnabled:!1,castShadows:!0,isPrimitive:!0,screenSizePerspectiveEnabled:!0,doublePrecisionRequiresObfuscation:r._stage.renderView.renderingContext.driverTest.doublePrecisionRequiresObfuscation.result},n);break;case"hud":{const[a,d]=K(s,n);this.addHandles([C(()=>x(d))]),i=a}break;default:throw new Error(`unable to create unknown material type ${e.type}`)}this._materials.set(e.materialId,i)}_getMaterial(e){return this._materials.get(e)}async _createDirectRenderer(e){const r=e.materialId,t=this._getMaterial(r);if(t==null)throw new Error(`material not found ${r}`);const{view:s}=this,n=new h({material:t});this._directRenderers.set(r,n),s._stage.addRenderPlugin(n),s._stage.renderView.renderer.updateHasFlags()}async _addDirectRendererGeometry(e){const r=e.renderGeometryId,t=e.materialId;await this._removeDirectRendererGeometry({renderGeometryId:r});const s=this._directRenderers.get(t);if(s==null)return void console.error("no renderer assigned to provided material");const n=s.addRenderGeometry(r,e.renderGeometryBuffer,e.localOrigin);this._renderGeometries.set(r,{renderGeometry:n,materialId:t}),this.view._stage.renderView.requestRender()}async _removeDirectRendererGeometry(e){const r=e.renderGeometryId,t=this._renderGeometries.get(r);if(t==null)return;const s=t.materialId,n=this._directRenderers.get(s);n!=null?n.removeRenderGeometry(e.renderGeometryId):console.error("no renderer assigned to provided material")}async _createLodRenderer(e){const r=new p({view:this.view,layerUid:this.layerUid}),t=new AbortController,s=n=>this._getMaterial(n);await r.doLoad(e.lodRenderGeometry,s,t.signal),this._lodRenderers.set(e.lodRendererId,r)}async _addLodInstances(e){const r=this._lodRenderers.get(e.lodRendererId);if(r==null)throw new Error("no lod renderer assigned to provided lod renderer Id");r.addInstances(e.data)}async _removeLodInstances(e){const r=this._lodRenderers.get(e.lodRendererId);if(r==null)throw new Error("no lod renderer assigned to provided lod renderer Id");r.removeInstances(e.featureIds)}};function K(e,r){const t={anchorPosition:P.center,occlusionTest:!0,hasSlicePlane:!1,color:[1,0,0,1],outlineColor:[0,0,0,1],outlineSize:1,distanceFieldBoundingBox:z},s=null;if(e!=null){const n=e.fromData("circle-icon",()=>H("circle"));t.textureId=n.texture.id,t.textureIsSignedDistanceField=!0,t.sampleSignedDistanceFieldTexelCenter=V("circle")}return[new W(t,r),s]}function Y(e,r,t){const s={usePBR:r.physicalBasedRenderingEnabled,isSchematic:!0,mrrFactors:N,ambient:g,diffuse:g,hasSlicePlane:r.slicePlaneEnabled,castShadows:r.castShadows,offsetTransparentBackfaces:!r.isPrimitive};return Q(s),s.screenSizePerspective=e.screenSizePerspectiveSettings,s.externalColor=E,s.isInstanced=!0,new q(s,{spherical:t,doublePrecisionRequiresObfuscation:!0})}function Q(e){const r=e.opacity??1,t=r<1;return e.transparent=t,e.opacity=r,e.cullFace=t?w.None:w.Back,e}c([v({readOnly:!0})],m.prototype,"totalFeatures",void 0),m=c([f("esri.views.3d.layers.graphics.pipeline.rendering.FeaturePipelineRenderManager")],m);export{K as R,m as _};
