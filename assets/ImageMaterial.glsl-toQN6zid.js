import{y as E}from"./BufferView-_QDXRCew.js";import{o as b,n as I,p as g,q as m}from"./Matrix3DrawUniform-CiBFaSz6.js";import{B as D,o as y,f as O,g as A,e as v}from"./renderState-DQLu6AJX.js";import{a as S,u as x,r as w,d as C,F as N}from"./VertexColor.glsl-_ARMpsAT.js";import{d as R}from"./Material-_xx7OZxD.js";import{o as F,d as V,u as L,P as M,V as j,q as B,b as z,r as U,h as W,j as q,x as _,af as H,a9 as k,z as G,B as Q,aa as J,ab as K,ac as X,ad as Y,E as Z,k as ee,F as te,A as f,ae as ie}from"./Texture-Fac_8AOC.js";import{s as re}from"./Util-BIfApRF5.js";import{e as n}from"./VertexAttribute-Cq4MnHjR.js";import{f as se}from"./DefaultLayouts-BuE1efcQ.js";import{e as oe}from"./TriangleMaterial-BiHR3MKx.js";import{_ as ae}from"./index-Bh2oEzTI.js";import{o as T}from"./interfaces-DDtDqZYj.js";import{r as o}from"./tslib.es6-B3Jf3DVX.js";import{i as a}from"./ShaderTechniqueConfiguration-CBbn2DCi.js";import"./mat4-GpOFENPA.js";import"./mat4f64-Dk4dwAN8.js";import"./vec32-Dvg_eL9J.js";import"./vec3f64-BLpZdpfb.js";import"./BindType-BmZEZMMh.js";import"./mat3f64-BBpwCtoL.js";import"./vec2-maR1OrZI.js";import"./vec2f64-miziP1SN.js";function P(i){const e=new F,{vertex:t,fragment:r}=e;return V(t,i),e.include(S,i),e.include(L,i),e.include(M,i),e.include(j,i),e.include(B,i),e.attributes.add(n.POSITION,"vec3"),e.attributes.add(n.UV0,"vec2"),i.perspectiveInterpolation&&e.attributes.add(n.PERSPECTIVEDIVIDE,"float"),e.varyings.add("vpos","vec3"),i.terrainDepthTest&&e.varyings.add("depth","float"),t.main.add(T`
    vpos = position;
    ${i.terrainDepthTest?"depth = (view * vec4(vpos, 1.0)).z;":""}
    vTexCoord = uv0;
    gl_Position = transformPosition(proj, view, vpos);
    ${i.perspectiveInterpolation?"gl_Position *= perspectiveDivide;":""}`),r.uniforms.add(new z("tex",p=>p.texture),new b("opacity",p=>p.opacity)),e.varyings.add("vTexCoord","vec2"),r.include(U),r.main.add(T`
    discardBySlice(vpos);
    ${i.terrainDepthTest?"terrainDepthTest(depth);":""}
    ${i.output===I.ObjectAndLayerIdColor?`fragColor = vec4(0, 0, 0, 1);
           return;`:""}
    vec4 finalColor = texture(tex, vTexCoord) * opacity;
    outputColorHighlightOID(finalColor, vpos);`),e}const ne=Object.freeze(Object.defineProperty({__proto__:null,build:P},Symbol.toStringTag,{value:"Module"}));class pe extends W{constructor(e,t,r){super(e,t,new q(ne,()=>ae(()=>Promise.resolve().then(()=>de),void 0,import.meta.url)),r,$)}_getPipelineState(e,t){const{oitPass:r,output:p,hasOccludees:u,enableOffset:d,cullFace:c}=e,l=r===_.NONE,h=r===_.FrontFace;return D({blending:p===I.Color?l?y:H(r):null,culling:O(c),depthTest:{func:k(r)},depthWrite:G(e),drawBuffers:Q(r,p),colorWrite:A,stencilWrite:u?J:null,stencilTest:u?t?K:X:null,polygonOffset:l||h?null:Y(d)})}initializePipeline(e){return this._occludeePipeline=this._getPipelineState(e,!0),this._getPipelineState(e,!1)}getPipeline(e){return e?this._occludeePipeline:super.getPipeline()}}const $=new Map([[n.POSITION,0],[n.UV0,2],[n.PERSPECTIVEDIVIDE,3]]);class s extends Z{constructor(){super(...arguments),this.cullFace=v.None,this.hasSlicePlane=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.perspectiveInterpolation=!0,this.textureCoordinateType=ee.None,this.emissionSource=te.None,this.discardInvisibleFragments=!0,this.occlusionPass=!1,this.objectAndLayerIdColorInstanced=!1}}o([a({count:v.COUNT})],s.prototype,"cullFace",void 0),o([a()],s.prototype,"hasSlicePlane",void 0),o([a()],s.prototype,"enableOffset",void 0),o([a()],s.prototype,"writeDepth",void 0),o([a()],s.prototype,"hasOccludees",void 0),o([a()],s.prototype,"terrainDepthTest",void 0),o([a()],s.prototype,"cullAboveTerrain",void 0),o([a()],s.prototype,"perspectiveInterpolation",void 0);let Fe=class extends oe{constructor(e){super(e,ue),this._configuration=new s,this.vertexAttributeLocations=$,this.supportsEdges=!0,this.produces=new Map([[f.OPAQUE_MATERIAL,t=>g(t)],[f.TRANSPARENT_MATERIAL,t=>m(t)&&this.parameters.writeDepth],[f.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,t=>m(t)&&!this.parameters.writeDepth],[f.DRAPED_MATERIAL,t=>m(t)||g(t)]])}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=t.hasOccludees,this._configuration.oitPass=t.oitPass,this._configuration.enableOffset=t.camera.relativeElevation<ie,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}get visible(){return!0}createGLMaterial(e){return new le(e)}createBufferWriter(){const e=se.clone();return this.parameters.perspectiveInterpolation&&e.f32(n.PERSPECTIVEDIVIDE),new ce(e)}};class le extends x{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.acquireTechnique(pe,e)}}class ce extends w{write(e,t,r,p,u,d){for(const c of this.vertexBufferLayout.fields.keys()){const l=r.get(c);if(l)if(c===n.PERSPECTIVEDIVIDE){re(l.size===1);const h=u.getField(c,E);h&&C(l,h,d)}else N(c,l,e,t,u,d)}}}class ue extends R{constructor(){super(...arguments),this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=v.None,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0,this.perspectiveInterpolation=!1}}const de=Object.freeze(Object.defineProperty({__proto__:null,build:P},Symbol.toStringTag,{value:"Module"}));export{Fe as I};