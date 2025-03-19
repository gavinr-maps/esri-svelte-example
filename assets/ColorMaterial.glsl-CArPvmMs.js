import{s as b}from"./vec4f64-o2zAXfmz.js";import{H as I}from"./InterleavedLayout-Dvj-Snan.js";import{u as g,n as T,l as f,S as v,k as S,c as E}from"./Matrix3PassUniform-Bhi2fM3C.js";import{e as m}from"./basicInterfaces-CZwQPxTp.js";import{g as D,x as N,y as w,G as R,H as x,u as L,c as M,z as F,m as V,t as q,C as _,I as U,_ as j,J as B,D as H,$ as z,a0 as W,a1 as G,a2 as J,E as Q,q as k,F as Y,A as p,a3 as K,r as X,e as Z,ab as ee}from"./FloatArray-BCfeX8wo.js";import{e as l}from"./VertexAttribute-Cq4MnHjR.js";import{f as te}from"./DefaultBufferWriter-D4XUxbP-.js";import{e as re}from"./TriangleMaterial-t01j2IAH.js";import{_ as se}from"./index-tefRSezt.js";import"./Material-Ba8x5bbY.js";import{f as ie}from"./enums-D9v74xTE.js";import{B as oe,f as ae,g as ne}from"./renderState-e7QeQoUO.js";import{r as i}from"./Accessor-BHnuXKD2.js";import{i as o}from"./ShaderTechniqueConfiguration-YrUOztAU.js";import"./mat3f64-BBpwCtoL.js";import"./mat4f64-Dk4dwAN8.js";import"./vec3f64-BLpZdpfb.js";import{n as O}from"./glsl-BH37Aalp.js";import"./BindType-BBwFZqyN.js";import"./vec2-maR1OrZI.js";import"./vec2f64-Dy6m9Nrb.js";import"./mat4-Fi6iAz29.js";import"./vec32-Dvg_eL9J.js";import{i as pe}from"./ShaderBuilder-DV1s2efh.js";import{o as le,e as ce}from"./VertexColor.glsl-C67vI27I.js";function A(r){const e=new pe,{vertex:t,fragment:a,attributes:n,varyings:c}=e,{vvColor:h,hasVertexColors:u}=r;return D(t,r),e.include(le,r),e.include(ce,r),e.include(N,r),e.include(w,r),a.include(R,r),e.include(x,r),e.include(L,r),n.add(l.POSITION,"vec3"),h&&n.add(l.COLORFEATUREATTRIBUTE,"float"),u||c.add("vColor","vec4"),c.add("vpos","vec3"),t.uniforms.add(new M("uColor",d=>d.color)),t.main.add(O`
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();

      ${u?"vColor *= uColor;":h?"vColor = uColor * interpolateVVColor(colorFeatureAttribute);":"vColor = uColor;"}
      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
      gl_Position = transformPosition(proj, view, vpos);`),a.include(F),a.main.add(O`discardBySlice(vpos);
discardByTerrainDepth();
outputColorHighlightOID(vColor, vpos);`),e}const he=Object.freeze(Object.defineProperty({__proto__:null,build:A},Symbol.toStringTag,{value:"Module"}));class ue extends V{constructor(e,t){super(e,t,new q(he,()=>se(()=>Promise.resolve().then(()=>ve),void 0,import.meta.url)))}_createPipeline(e,t){const{oitPass:a,output:n,transparent:c,cullFace:h,draped:u,hasOccludees:d,polygonOffset:P,enableOffset:$}=e,C=a===_.NONE,y=a===_.FrontFace;return oe({blending:g(n)&&c?U(a):null,culling:ae(h),depthTest:u?null:{func:j(a)},depthWrite:B(e),drawBuffers:n===T.Depth?{buffers:[ie.NONE]}:H(a,n),colorWrite:ne,stencilWrite:d?z:null,stencilTest:d?t?W:G:null,polygonOffset:C||y?P?de:null:J($)})}initializePipeline(e){return this._occludeePipelineState=this._createPipeline(e,!0),this._createPipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}const de={factor:1,units:1};class s extends Q{constructor(){super(...arguments),this.cullFace=m.None,this.hasVertexColors=!1,this.transparent=!1,this.discardInvisibleFragments=!1,this.polygonOffset=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.objectAndLayerIdColorInstanced=!1,this.vvColor=!1,this.draped=!1,this.textureCoordinateType=k.None,this.emissionSource=Y.None,this.occlusionPass=!1,this.hasVvInstancing=!0,this.vvSize=!1,this.vvOpacity=!1}}i([o({count:m.COUNT})],s.prototype,"cullFace",void 0),i([o()],s.prototype,"hasVertexColors",void 0),i([o()],s.prototype,"transparent",void 0),i([o()],s.prototype,"discardInvisibleFragments",void 0),i([o()],s.prototype,"polygonOffset",void 0),i([o()],s.prototype,"enableOffset",void 0),i([o()],s.prototype,"writeDepth",void 0),i([o()],s.prototype,"hasOccludees",void 0),i([o()],s.prototype,"terrainDepthTest",void 0),i([o()],s.prototype,"cullAboveTerrain",void 0),i([o()],s.prototype,"objectAndLayerIdColorInstanced",void 0),i([o()],s.prototype,"vvColor",void 0),i([o()],s.prototype,"draped",void 0);class Be extends re{constructor(e){super(e,me),this._configuration=new s,this.supportsEdges=!0,this.produces=new Map([[p.OPAQUE_MATERIAL,t=>this._isOpaqueMaterialPass(t)],[p.OPAQUE_MATERIAL_WITHOUT_NORMALS,t=>this._isOpaqueNoSSAODepthPass(t)],[p.TRANSPARENT_MATERIAL,t=>f(t)&&this._transparent&&this.parameters.writeDepth],[p.TRANSPARENT_MATERIAL_WITHOUT_NORMALS,t=>v(t)&&this._transparent&&this.parameters.writeDepth],[p.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,t=>f(t)&&this._transparent&&!this.parameters.writeDepth],[p.DRAPED_MATERIAL,t=>S(t)]])}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasVertexColors=this.parameters.hasVertexColors&&!this.parameters.vvColor,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this._transparent,this._configuration.discardInvisibleFragments=this._transparent&&!this._isOpaquePass(e)&&this.parameters.discardInvisibleFragments,this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=t.hasOccludees,this._configuration.oitPass=t.oitPass,this._configuration.enableOffset=t.camera.relativeElevation<K,this._configuration.terrainDepthTest=t.terrainDepthTest&&g(e),this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.draped=this.parameters.draped,this._configuration}get visible(){return this.parameters.color[3]>=X}get _transparent(){return this.parameters.color[3]<1||this.parameters.forceTransparentMode}_isOpaquePass(e){return this._isOpaqueMaterialPass(e)||this._isOpaqueNoSSAODepthPass(e)}_isOpaqueMaterialPass(e){return e===T.Highlight||f(e)&&!this._transparent}_isOpaqueNoSSAODepthPass(e){return v(e)&&this.parameters.writeDepth&&!this._transparent}createGLMaterial(e){return new fe(e)}createBufferWriter(){const e=I().vec3f(l.POSITION);return E()&&e.vec4u8(l.OBJECTANDLAYERIDCOLOR),this.parameters.vvColor?e.f32(l.COLORFEATUREATTRIBUTE):e.vec4u8(l.COLOR),new te(e)}}class fe extends Z{beginSlot(e){return this.getTechnique(ue,e)}}class me extends ee{constructor(){super(...arguments),this.color=b,this.forceTransparentMode=!1,this.writeDepth=!0,this.hasVertexColors=!1,this.polygonOffset=!1,this.hasSlicePlane=!1,this.cullFace=m.None,this.draped=!1,this.discardInvisibleFragments=!1}}const ve=Object.freeze(Object.defineProperty({__proto__:null,build:A},Symbol.toStringTag,{value:"Module"}));export{Be as A};
