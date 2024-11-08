import{o as c,t as He,r as P}from"./interfaces-DDtDqZYj.js";import{e as y}from"./VertexAttribute-Cq4MnHjR.js";import{b as xe,n as Nt,m as Ge,a as vr,U as Te,E as st,G as _r,F as he,$ as me}from"./subclass-BZA_h8Db.js";import{a as v}from"./BindType-BmZEZMMh.js";import{s as B}from"./Util-BIfApRF5.js";import{t as Ot,B as ke,b as Tr,a as xr,s as mt,m as Ar,u as $r,l as Sr}from"./Accessor-BLX9ikPh.js";import{O as br,t as Er,p as yr,r as Ft,e as fe}from"./Material-_xx7OZxD.js";import{c as Cr,m as ge,a as wr,e as Rr}from"./Texture-Begq2x5n.js";import{E as Pr,R as Se,O,X as j,I as x,c as U,G as te,L as se,D as je}from"./enums-D9v74xTE.js";import{B as Ir,o as Lr,g as Mr,a as Nr,O as Or,r as Fr,c as Dr,p as Hr,t as Dt,s as k,u as ie}from"./renderState-DQLu6AJX.js";import{r as W}from"./tslib.es6-B3Jf3DVX.js";import{watch as Ur,initial as zr}from"./reactiveUtils-C5zUhJQJ.js";import{e as oe,o as ft,r as Gr}from"./mat4f64-Dk4dwAN8.js";import{r as at,o as X}from"./mathUtils-C4_ghTv4.js";import{o as Vr,x as Br,l as Wr,m as kr,n as jr,r as Xr,c as qr,f as Kr,i as Ie}from"./mat4-GpOFENPA.js";import{c as ot,r as Ue,n as _,_ as lt,t as Qr}from"./vec3f64-BLpZdpfb.js";import"./projectBuffer-Bs7GwaPY.js";import"./Point-Cg0-ChZE.js";import{o as w,E as Le,u as I,c as Ht,I as Xe,v as Yr,g as N,W as Zr,s as K,y as Jr}from"./vec32-Dvg_eL9J.js";import{a as F,i as pe,g as z,h as S,o as ei,n as Ae,f as ct,S as Ut,u as qe,s as Ke,d as ti,c as zt,b as be,t as ri}from"./Matrix3DrawUniform-CiBFaSz6.js";import{o as Qe}from"./vec2-maR1OrZI.js";import{n as Gt}from"./vec2f64-miziP1SN.js";import{n as ii}from"./mat3-BRl2i9Bz.js";import{e as $e}from"./mat3f64-BBpwCtoL.js";import{m as gt}from"./lengthUtils-DL1-FDQQ.js";import{i as Me,a as ni}from"./ShaderTechniqueConfiguration-CBbn2DCi.js";import{t as si,l as ai}from"./Indices-DflDlU4Z.js";import{S as oi}from"./triangle-PTGDC_xJ.js";import{n as Vt}from"./compilerUtils-Dw3R0f-Z.js";import{n as Bt}from"./vec4f64-o2zAXfmz.js";import{s as pt}from"./vec42-YcqnINSP.js";import{o as li}from"./AlphaCutoff-UcccL64p.js";import{o as ci}from"./Evented-BHRw9x22.js";import{c as ui,Z as vt,t as di,a6 as hi}from"./assets-C43MgM-v.js";import{t as mi}from"./requestImageUtils-DgMiQwsm.js";import{_ as fi}from"./index-Bh2oEzTI.js";function Ds(t,e=!0){t.attributes.add(y.POSITION,"vec2"),e&&t.varyings.add("uv","vec2"),t.vertex.main.add(c`
      gl_Position = vec4(position, 0.0, 1.0);
      ${e?c`uv = position * 0.5 + vec2(0.5);`:""}
  `)}let Wt=class extends F{constructor(e,r){super(e,"vec2",v.Pass,(i,n,s)=>i.setUniform2fv(e,r(n,s)))}};const gi=()=>Nt.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let kt=class{constructor(){this._includedModules=new Map}include(e,r){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,r),e(this.builder,r))}},zs=class extends kt{constructor(){super(...arguments),this.vertex=new _t,this.fragment=new _t,this.attributes=new Ti,this.varyings=new xi,this.extensions=new Ye,this.outputs=new Je}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const r=this.extensions.generateSource(e),i=this.attributes.generateSource(e),n=this.varyings.generateSource(e),s=e==="vertex"?this.vertex:this.fragment,a=s.uniforms.generateSource(),l=s.code.generateSource(),o=s.main.generateSource(),d=e==="vertex"?Si:$i,u=s.constants.generateSource(),h=this.outputs.generateSource(e);return`#version 300 es
${r.join(`
`)}

${d}

${u.join(`
`)}

${a.join(`
`)}

${i.join(`
`)}

${n.join(`
`)}

${h.join(`
`)}

${l.join(`
`)}

${o.join(`
`)}`}generateBindPass(e){const r=new Map;this.vertex.uniforms.entries.forEach(s=>{const a=s.bind[v.Pass];a&&r.set(s.name,a)}),this.fragment.uniforms.entries.forEach(s=>{const a=s.bind[v.Pass];a&&r.set(s.name,a)});const i=Array.from(r.values()),n=i.length;return(s,a)=>{for(let l=0;l<n;++l)i[l](e,s,a)}}generateBindDraw(e){const r=new Map;this.vertex.uniforms.entries.forEach(s=>{const a=s.bind[v.Draw];a&&r.set(s.name,a)}),this.fragment.uniforms.entries.forEach(s=>{const a=s.bind[v.Draw];a&&r.set(s.name,a)});const i=Array.from(r.values()),n=i.length;return(s,a,l)=>{for(let o=0;o<n;++o)i[o](e,l,s,a)}}},pi=class{constructor(e){this._stage=e,this._entries=new Map}add(...e){for(const r of e)this._add(r);return this._stage}get(e){return this._entries.get(e)}_add(e){if(e!=null){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new xe(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else gi().error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(e=>e.arraySize!=null?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}},vi=class{constructor(e){this._stage=e,this._bodies=new Array}add(e){return this._bodies.push(e),this._stage}generateSource(){if(this._bodies.length>0)return[`void main() {
 ${this._bodies.join(`
`)||""} 
}`];throw new xe("Shader does not contain main function body.")}},_i=class{constructor(e){this._stage=e,this._entries=new Array}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}},_t=class extends kt{constructor(){super(...arguments),this.uniforms=new pi(this),this.main=new vi(this),this.code=new _i(this),this.constants=new Ai(this)}get builder(){return this}},Ti=class{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map(r=>`in ${r[1]} ${r[0]};`)}},xi=class{constructor(){this._entries=new Map}add(e,r){this._entries.has(e)&&B(this._entries.get(e)===r),this._entries.set(e,r)}generateSource(e){const r=new Array;return this._entries.forEach((i,n)=>r.push(e==="vertex"?`out ${i} ${n};`:`in ${i} ${n};`)),r}},Ye=class Ze{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const r=e==="vertex"?Ze.ALLOWLIST_VERTEX:Ze.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(i=>r.includes(i)).map(i=>`#extension ${i} : enable`)}};Ye.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],Ye.ALLOWLIST_VERTEX=[];let Je=class et{constructor(){this._entries=new Map}add(e,r,i=0){const n=this._entries.get(i);n?B(n.name===e&&n.type===r,`Fragment shader output location ${i} occupied`):this._entries.set(i,{name:e,type:r})}generateSource(e){if(e==="vertex")return[];this._entries.size===0&&this._entries.set(0,{name:et.DEFAULT_NAME,type:et.DEFAULT_TYPE});const r=new Array;return this._entries.forEach((i,n)=>r.push(`layout(location = ${n}) out ${i.type} ${i.name};`)),r}};Je.DEFAULT_TYPE="vec4",Je.DEFAULT_NAME="fragColor";let Ai=class g{constructor(e){this._stage=e,this._entries=new Set}add(e,r,i){let n="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":n=g._numberToFloatStr(i);break;case"int":n=g._numberToIntStr(i);break;case"bool":n=i.toString();break;case"vec2":n=`vec2(${g._numberToFloatStr(i[0])},                            ${g._numberToFloatStr(i[1])})`;break;case"vec3":n=`vec3(${g._numberToFloatStr(i[0])},                            ${g._numberToFloatStr(i[1])},                            ${g._numberToFloatStr(i[2])})`;break;case"vec4":n=`vec4(${g._numberToFloatStr(i[0])},                            ${g._numberToFloatStr(i[1])},                            ${g._numberToFloatStr(i[2])},                            ${g._numberToFloatStr(i[3])})`;break;case"ivec2":n=`ivec2(${g._numberToIntStr(i[0])},                             ${g._numberToIntStr(i[1])})`;break;case"ivec3":n=`ivec3(${g._numberToIntStr(i[0])},                             ${g._numberToIntStr(i[1])},                             ${g._numberToIntStr(i[2])})`;break;case"ivec4":n=`ivec4(${g._numberToIntStr(i[0])},                             ${g._numberToIntStr(i[1])},                             ${g._numberToIntStr(i[2])},                             ${g._numberToIntStr(i[3])})`;break;case"mat2":case"mat3":case"mat4":n=`${r}(${Array.prototype.map.call(i,s=>g._numberToFloatStr(s)).join(", ")})`}return this._entries.add(`const ${r} ${e} = ${n};`),this._stage}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}};const $i=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,Si=`precision highp float;
precision highp sampler2D;`;let ae=class extends F{constructor(e,r){super(e,"sampler2D",v.Pass,(i,n,s)=>i.bindTexture(e,r(n,s)))}},Ks=class{constructor(e,r){this._module=e,this._load=r}get(){return this._module}async reload(){return this._module=await this._load(),this._module}},Tt=class{constructor(e,r,i){this._context=e,this._locations=i,this._textures=new Map,this._freeTextureUnits=new Ot({deallocator:null}),this._glProgram=e.programCache.acquire(r.generate("vertex"),r.generate("fragment"),i),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=r.generateBindPass(this),this.bindDraw=r.generateBindDraw(this),this._fragmentUniforms=Cr()?r.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(e,r){this._glProgram.setUniform1i(e,r?1:0)}setUniform1i(e,r){this._glProgram.setUniform1i(e,r)}setUniform1f(e,r){this._glProgram.setUniform1f(e,r)}setUniform2fv(e,r){this._glProgram.setUniform2fv(e,r)}setUniform3fv(e,r){this._glProgram.setUniform3fv(e,r)}setUniform4fv(e,r){this._glProgram.setUniform4fv(e,r)}setUniformMatrix3fv(e,r){this._glProgram.setUniformMatrix3fv(e,r)}setUniformMatrix4fv(e,r){this._glProgram.setUniformMatrix4fv(e,r)}setUniform1fv(e,r){this._glProgram.setUniform1fv(e,r)}setUniform1iv(e,r){this._glProgram.setUniform1iv(e,r)}setUniform2iv(e,r){this._glProgram.setUniform2iv(e,r)}setUniform3iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform4iv(e,r){this._glProgram.setUniform4iv(e,r)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,r){if((r==null?void 0:r.glName)==null){const n=this._textures.get(e);return n&&(this._context.bindTexture(null,n.unit),this._freeTextureUnit(n),this._textures.delete(e)),null}let i=this._textures.get(e);return i==null?(i=this._allocTextureUnit(r),this._textures.set(e,i)):i.texture=r,this._context.useProgram(this),this.setUniform1i(e,i.unit),this._context.bindTexture(r,i.unit),i.unit}rebindTextures(){var e;this._context.useProgram(this),this._textures.forEach((r,i)=>{this._context.bindTexture(r.texture,r.unit),this.setUniform1i(i,r.unit)}),(e=this._fragmentUniforms)==null||e.forEach(r=>{r.type!=="sampler2D"&&r.type!=="samplerCube"||this._textures.has(r.name)||console.error(`Texture sampler ${r.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}},Zs=class{constructor(e,r,i,n,s=br){this.release=n,this.locations=s,this.primitiveType=Pr.TRIANGLES,this.key=r.key,this._program=new Tt(e.rctx,i.get().build(r),s),this._pipeline=this.initializePipeline(r),this.reload=async a=>{if(a&&await i.reload(),!this.key.equals(r.key))throw new Error("Configuration was changed after construction, cannot reload shader");ke(this._program),this._program=new Tt(e.rctx,i.get().build(r),s),this._pipeline=this.initializePipeline(r)}}destroy(){this._program=ke(this._program),this._pipeline=null}get program(){return this._program}get compiled(){return this.program.compiled}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}getPipeline(e,r){return this._pipeline}initializePipeline(e){return Ir({blending:Lr,colorWrite:Mr})}};var tt,xt;(function(t){t.OPAQUE="opaque-color",t.TRANSPARENT="transparent-color",t.COMPOSITE="composite-color",t.FINAL="final-color"})(tt||(tt={})),function(t){t.SSAO="ssao",t.LASERLINES="laserline-color",t.ANTIALIASING="aa-color",t.HIGHLIGHTS="highlight-color",t.MAGNIFIER="magnifier-color",t.OCCLUDED="occluded-color",t.VIEWSHED="viewshed-color",t.OPAQUE_ENVIRONMENT="opaque-environment-color",t.TRANSPARENT_ENVIRONMENT="transparent-environment-color"}(xt||(xt={}));let re=class extends Tr{constructor(e){super(e),this.view=null,this.consumes={required:[]},this.produces=tt.COMPOSITE,this.requireGeometryDepth=!1,this._dirty=!0}initialize(){this.addHandles([Ur(()=>this.view.ready,e=>{var r;e&&((r=this.view._stage)==null||r.renderer.addRenderNode(this))},zr)])}destroy(){var e,r;(r=(e=this.view._stage)==null?void 0:e.renderer)==null||r.removeRenderNode(this)}precompile(){}render(){throw new xe("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view._stage.renderView.renderingContext.gl}acquireOutputFramebuffer(){var i,n,s;const e=(n=(i=this._frameBuffer)==null?void 0:i.getTexture())==null?void 0:n.descriptor,r=this.view._stage.renderer.fboCache.acquire((e==null?void 0:e.width)??640,(e==null?void 0:e.height)??480,this.produces);return(s=r.fbo)==null||s.initializeAndBind(),r}bindRenderTarget(){var e,r;return(r=(e=this._frameBuffer)==null?void 0:e.fbo)==null||r.initializeAndBind(),this._frameBuffer}requestRender(e){var r;e===Nr.UPDATE&&((r=this.view._stage)==null||r.renderView.requestRender(e)),this._dirty=!0}resetWebGLState(){var e;this.renderingContext.resetState(),this.renderingContext.bindFramebuffer((e=this._frameBuffer)==null?void 0:e.fbo)}get fboCache(){return this.view._stage.renderer.fboCache}get bindParameters(){return this.renderContext.bind}get renderingContext(){return this.view._stage.renderView.renderingContext}get renderContext(){var e;return(e=this.view._stage)==null?void 0:e.renderer.renderContext}updateAnimation(e){return!!this._dirty&&(this._dirty=!1,!0)}doRender(e){this._frameBuffer=e.find(({name:r})=>r===this.produces);try{return this.render(e)}finally{this._frameBuffer=null}}};W([Ge({constructOnly:!0})],re.prototype,"view",void 0),W([Ge({constructOnly:!0})],re.prototype,"consumes",void 0),W([Ge()],re.prototype,"produces",void 0),re=W([vr("esri.views.3d.webgl.RenderNode")],re);const ta=re;let bi=class{constructor(e=ot()){this.intensity=e}},Ei=class{constructor(e=ot(),r=Ue(.57735,.57735,.57735)){this.intensity=e,this.direction=r}},rt=class{constructor(e=ot(),r=Ue(.57735,.57735,.57735),i=!0,n=1,s=1){this.intensity=e,this.direction=r,this.castShadows=i,this.specularStrength=n,this.environmentStrength=s}},jt=class{constructor(){this.r=[0],this.g=[0],this.b=[0]}};var A,At;(function(t){t[t.Undefined=0]="Undefined",t[t.DefinedSize=1]="DefinedSize",t[t.DefinedScale=2]="DefinedScale"})(A||(A={})),function(t){t[t.Undefined=0]="Undefined",t[t.DefinedAngle=1]="DefinedAngle"}(At||(At={}));class ut{constructor(e){this.field=e}}let yi=class extends ut{constructor(e){super(e),this.minSize=[0,0,0],this.maxSize=[0,0,0],this.offset=[0,0,0],this.factor=[0,0,0],this.type=[A.Undefined,A.Undefined,A.Undefined]}},Ci=class extends ut{constructor(e){super(e),this.colors=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.values=[0,0,0,0,0,0,0,0]}},wi=class extends ut{constructor(e){super(e),this.values=[0,0,0,0,0,0,0,0],this.opacityValues=[0,0,0,0,0,0,0,0]}};class Ri{}function ue(t){return t!=null}function J(t){return typeof t=="number"}function ze(t){return typeof t=="string"}function Pi(t){return t==null||ze(t)}function Ii(t,e,r,i=oe()){const n=t||0,s=e||0,a=r||0;return n!==0&&Br(i,i,-n/180*Math.PI),s!==0&&Wr(i,i,s/180*Math.PI),a!==0&&kr(i,i,a/180*Math.PI),i}function G(t,e,r,i,n){var l;const s=t.minSize,a=t.maxSize;if(t.useSymbolValue){const o=i.symbolSize[r];return e.minSize[r]=o,e.maxSize[r]=o,e.offset[r]=e.minSize[r],e.factor[r]=0,e.type[r]=A.DefinedSize,!0}if(ue(t.field))return ue(t.stops)?t.stops.length===2&&J(t.stops[0].size)&&J(t.stops[1].size)?($t(t.stops[0].size,t.stops[1].size,t.stops[0].value,t.stops[1].value,e,r),e.type[r]=A.DefinedSize,!0):!1:J(s)&&J(a)&&ue(t.minDataValue)&&ue(t.maxDataValue)?($t(s,a,t.minDataValue,t.maxDataValue,e,r),e.type[r]=A.DefinedSize,!0):t.valueUnit==="unknown"?!1:gt[t.valueUnit]!=null?(e.minSize[r]=-1/0,e.maxSize[r]=1/0,e.offset[r]=0,e.factor[r]=1/gt[t.valueUnit],e.type[r]=A.DefinedSize,!0):!1;if(!ue(t.field)){if((l=t.stops)!=null&&l[0]&&J(t.stops[0].size))return e.minSize[r]=t.stops[0].size,e.maxSize[r]=t.stops[0].size,e.offset[r]=e.minSize[r],e.factor[r]=0,e.type[r]=A.DefinedSize,!0;if(J(s))return e.minSize[r]=s,e.maxSize[r]=s,e.offset[r]=s,e.factor[r]=0,e.type[r]=A.DefinedSize,!0}return!1}function $t(t,e,r,i,n,s){const a=Math.abs(i-r)>0?(e-t)/(i-r):0;n.minSize[s]=a>0?t:e,n.maxSize[s]=a>0?e:t,n.offset[s]=t-r*a,n.factor[s]=a}function Li(t,e,r,i){if(t.normalizationField||t.valueRepresentation||!Pi(t.field))return null;if(e.size){if(t.field)if(e.size.field){if(t.field!==e.size.field)return null}else e.size.field=t.field}else e.size=new yi(t.field);let n;switch(t.axis){case"width":return n=G(t,e.size,0,r),n?e:null;case"height":return n=G(t,e.size,2,r),n?e:null;case"depth":return n=G(t,e.size,1,r),n?e:null;case"width-and-depth":return n=G(t,e.size,0,r),n&&G(t,e.size,1,r),n?e:null;case null:case void 0:case"all":return n=G(t,e.size,0,r),n=n&&G(t,e.size,1,r),n=n&&G(t,e.size,2,r),n?e:null;default:return`${t.axis}`,null}}function Mi(t,e,r){for(let n=0;n<3;++n){let s=e.unitInMeters;t.type[n]===A.DefinedSize&&(s*=e.modelSize[n],t.type[n]=A.DefinedScale),t.minSize[n]=t.minSize[n]/s,t.maxSize[n]=t.maxSize[n]/s,t.offset[n]=t.offset[n]/s,t.factor[n]=t.factor[n]/s}let i;if(t.type[0]!==A.Undefined)i=0;else if(t.type[1]!==A.Undefined)i=1;else{if(t.type[2]===A.Undefined)return!1;i=2}for(let n=0;n<3;++n)t.type[n]===A.Undefined&&(t.minSize[n]=t.minSize[i],t.maxSize[n]=t.maxSize[i],t.offset[n]=t.offset[i],t.factor[n]=t.factor[i],t.type[n]=t.type[i]);return!0}function St(t,e,r){t[4*e]=r.r/255,t[4*e+1]=r.g/255,t[4*e+2]=r.b/255,t[4*e+3]=r.a}function Ni(t,e,r){if(t.normalizationField)return null;if(ze(t.field)){if(!t.stops)return null;{if(t.stops.length>8)return null;e.color=new Ci(t.field);const i=t.stops;for(let n=0;n<8;++n){const s=i[Math.min(n,i.length-1)];e.color.values[n]=s.value,St(e.color.colors,n,s.color)}}}else{if(!(t.stops&&t.stops.length>=0))return null;{const i=t.stops&&t.stops.length>=0&&t.stops[0].color;e.color={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};for(let n=0;n<8;n++)e.color.values[n]=1/0,St(e.color.colors,n,i)}}return e}function Oi(t,e,r){if(t.normalizationField)return null;if(ze(t.field)){if(!t.stops)return null;{if(t.stops.length>8)return null;e.opacity=new wi(t.field);const i=t.stops;for(let n=0;n<8;++n){const s=i[Math.min(n,i.length-1)];e.opacity.values[n]=s.value,e.opacity.opacityValues[n]=s.opacity}}}else{if(!(t.stops&&t.stops.length>=0))return null;{const i=t.stops&&t.stops.length>=0?t.stops[0].opacity:0;e.opacity={field:null,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]};for(let n=0;n<8;n++)e.opacity.values[n]=1/0,e.opacity.opacityValues[n]=i}}return e}function Ve(t,e,r){const i=r===2&&t.rotationType==="arithmetic";e.offset[r]=i?90:0,e.factor[r]=i?-1:1,e.type[r]=1}function Fi(t,e,r){if(!ze(t.field))return null;if(e.rotation){if(t.field)if(e.rotation.field){if(t.field!==e.rotation.field)return null}else e.rotation.field=t.field}else e.rotation={field:t.field,offset:[0,0,0],factor:[1,1,1],type:[0,0,0]};switch(t.axis){case"tilt":return Ve(t,e.rotation,0),e;case"roll":return Ve(t,e.rotation,1),e;case null:case void 0:case"heading":return Ve(t,e.rotation,2),e;default:return`${t.axis}`,null}}let ca=class{constructor(e,r=[1,1,1],i=[1,1,1],n=1,s=[0,0,0],a=[1,1,1],l=[0,0,0]){this.supports=e,this.modelSize=r,this.symbolSize=i,this.unitInMeters=n,this.anchor=s,this.scale=a,this.rotation=l}};function Xt(t,e,r){if(!t)return null;const i=t.reduce((n,s)=>{if(!n)return n;if(s.valueExpression)return null;switch(s.type){case"size":return e.supports.size?Li(s,n,e,r):n;case"color":return e.supports.color?Ni(s,n):n;case"opacity":return e.supports.opacity?Oi(s,n):null;case"rotation":return e.supports.rotation?Fi(s,n,r):n;default:return null}},new Ri);return!(t.length>0&&i)||i.size||i.color||i.opacity||i.rotation?i!=null&&i.size&&!Mi(i.size,e)?null:i:null}let Di=class{constructor(e,r,i){this.visualVariables=e,this.materialParameters=r,this.requiresShaderTransformation=i}};function ha(t,e){if(!t||Er.TESTS_DISABLE_FAST_UPDATES)return null;const r=Xt(t.visualVariables,e);return r?new Di(r,Kt(r,e),!!r.size):null}function ma(t,e,r){if(!e||!t)return!1;const i=t.visualVariables,n=Xt(e.visualVariables,r);return!!n&&!!(Ee(i.size,n.size,"size")&&Ee(i.color,n.color,"color")&&Ee(i.rotation,n.rotation,"rotation")&&Ee(i.opacity,n.opacity,"opacity"))&&(t.visualVariables=n,t.materialParameters=Kt(n,r),t.requiresShaderTransformation=!!n.size,!0)}function Ee(t,e,r){if(!!t!=!!e||t&&t.field!==(e==null?void 0:e.field))return!1;if(t&&r==="rotation"){const i=t,n=e;for(let s=0;s<3;s++)if(i.type[s]!==n.type[s]||i.offset[s]!==n.offset[s]||i.factor[s]!==n.factor[s])return!1}return!0}class qt extends He{constructor(e){super(),this.vvSize=(e==null?void 0:e.size)??null,this.vvColor=(e==null?void 0:e.color)??null,this.vvOpacity=(e==null?void 0:e.opacity)??null}}function Kt(t,e){const r=new qt(t);return r.vvSize&&(r.vvSymbolAnchor=e.anchor,Vr(ve),Ii(e.rotation[2],e.rotation[0],e.rotation[1],ve),r.vvSymbolRotationMatrix=r.vvSymbolRotationMatrix||$e(),ii(r.vvSymbolRotationMatrix,ve)),r}function fa(t,e,r){if(!t.vvSize)return r;jr(V,r);const i=t.vvSymbolRotationMatrix;Xr(ve,i[0],i[1],i[2],0,i[3],i[4],i[5],0,i[6],i[7],i[8],0,0,0,0,1),qr(V,V,ve);for(let n=0;n<3;++n){const s=t.vvSize.offset[n]+e[0]*t.vvSize.factor[n];bt[n]=at(s,t.vvSize.minSize[n],t.vvSize.maxSize[n])}return Kr(V,V,bt),Ie(V,V,t.vvSymbolAnchor),V}function ga(t,e,r){if(!e.vvSize)return w(t,1,1,1),t;for(let i=0;i<3;++i){const n=e.vvSize.offset[i]+r[0]*e.vvSize.factor[i];t[i]=at(n,e.vvSize.minSize[i],e.vvSize.maxSize[i])}return t}function pa(t,e){const r=t==null?0:e.attributes[t];return typeof r=="number"&&isFinite(r)?r:0}const V=oe(),bt=_(),ve=oe();let Hi=class extends F{constructor(e,r){super(e,"mat4",v.Draw,(i,n,s)=>i.setUniformMatrix4fv(e,r(n,s)))}};function _a(t,e){e.instancedDoublePrecision?t.constants.add("cameraPosition","vec3",lt):t.uniforms.add(new z("cameraPosition",(r,i)=>w(Qt,i.camera.viewInverseTransposeMatrix[3]-r.origin[0],i.camera.viewInverseTransposeMatrix[7]-r.origin[1],i.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function Ta(t,e){if(!e.instancedDoublePrecision)return void t.uniforms.add(new pe("proj",(i,n)=>n.camera.projectionMatrix),new Hi("view",(i,n)=>Ie(Et,n.camera.viewMatrix,i.origin)),new z("localOrigin",i=>i.origin));const r=i=>w(Qt,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]);t.uniforms.add(new pe("proj",(i,n)=>n.camera.projectionMatrix),new pe("view",(i,n)=>Ie(Et,n.camera.viewMatrix,r(n))),new S("localOrigin",(i,n)=>r(n)))}const Et=oe(),Qt=_();function xa(t){t.uniforms.add(new pe("viewNormal",(e,r)=>r.camera.viewInverseTransposeMatrix))}function Aa(t){t.uniforms.add(new ei("pixelRatio",(e,r)=>r.camera.pixelRatio/r.overlayStretch))}let Ui=class extends F{constructor(e,r){super(e,"vec4",v.Pass,(i,n,s)=>i.setUniform4fv(e,r(n,s)))}},Sa=class{constructor(e){this._material=e.material,this._techniques=e.techniques,this._output=e.output}dispose(){}get _stippleTextures(){return this._techniques.context.stippleTextures}get _markerTextures(){return this._techniques.context.markerTextures}acquireTechnique(e,r){return this._techniques.acquire(e,this._material.getConfiguration(this._output,r))}ensureResources(e){return Or.LOADED}};var yt;(function(t){t[t.INTEGRATED_MESH=0]="INTEGRATED_MESH",t[t.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",t[t.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",t[t.OPAQUE_MATERIAL_WITHOUT_NORMALS=3]="OPAQUE_MATERIAL_WITHOUT_NORMALS",t[t.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",t[t.TRANSPARENT_MATERIAL_WITHOUT_NORMALS=5]="TRANSPARENT_MATERIAL_WITHOUT_NORMALS",t[t.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",t[t.TRANSPARENT_MATERIAL_WITHOUT_DEPTH=7]="TRANSPARENT_MATERIAL_WITHOUT_DEPTH",t[t.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",t[t.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",t[t.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",t[t.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",t[t.HUD_MATERIAL=12]="HUD_MATERIAL",t[t.LABEL_MATERIAL=13]="LABEL_MATERIAL",t[t.LINE_CALLOUTS=14]="LINE_CALLOUTS",t[t.LINE_CALLOUTS_HUD_DEPTH=15]="LINE_CALLOUTS_HUD_DEPTH",t[t.DRAPED_MATERIAL=16]="DRAPED_MATERIAL",t[t.DRAPED_WATER=17]="DRAPED_WATER",t[t.VOXEL=18]="VOXEL",t[t.MAX_SLOTS=19]="MAX_SLOTS"})(yt||(yt={}));let Ea=class extends He{constructor(e){super(),this.slicePlaneLocalOrigin=e}};function Ca(t,e){Yt(t,e,new S("slicePlaneOrigin",(r,i)=>tr(e,r,i)),new S("slicePlaneBasis1",(r,i)=>{var n;return Ne(e,r,i,(n=i.slicePlane)==null?void 0:n.basis1)}),new S("slicePlaneBasis2",(r,i)=>{var n;return Ne(e,r,i,(n=i.slicePlane)==null?void 0:n.basis2)}))}function wa(t,e){Yt(t,e,new z("slicePlaneOrigin",(r,i)=>tr(e,r,i)),new z("slicePlaneBasis1",(r,i)=>{var n;return Ne(e,r,i,(n=i.slicePlane)==null?void 0:n.basis1)}),new z("slicePlaneBasis2",(r,i)=>{var n;return Ne(e,r,i,(n=i.slicePlane)==null?void 0:n.basis2)}))}function Yt(t,e,...r){if(!e.hasSlicePlane){const a=c`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return e.hasSliceInVertexProgram&&t.vertex.code.add(a),void t.fragment.code.add(a)}const i=c`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,n=c`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,s=e.hasSliceHighlight?c`
        ${n}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:c`#define highlightSlice(_color_, _pos_) (_color_)`;e.hasSliceInVertexProgram&&t.vertex.uniforms.add(...r).code.add(i),t.fragment.uniforms.add(...r).code.add(i),t.fragment.code.add(s)}function Zt(t,e,r){return t.instancedDoublePrecision?w(zi,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):e.slicePlaneLocalOrigin}function Jt(t,e){return t!=null?Ht(Oe,e.origin,t):e.origin}function er(t,e,r){return t.hasSliceTranslatedView?e!=null?Ie(Gi,r.camera.viewMatrix,e):r.camera.viewMatrix:null}function tr(t,e,r){if(r.slicePlane==null)return lt;const i=Zt(t,e,r),n=Jt(i,r.slicePlane),s=er(t,i,r);return s!=null?Le(Oe,n,s):n}function Ne(t,e,r,i){if(i==null||r.slicePlane==null)return lt;const n=Zt(t,e,r),s=Jt(n,r.slicePlane),a=er(t,n,r);return a!=null?(I(de,i,s),Le(Oe,s,a),Le(de,de,a),Ht(de,de,Oe)):i}const zi=_(),Oe=_(),de=_(),Gi=oe();function Ra(t,e){if(e.output!==Ae.ObjectAndLayerIdColor)return t.vertex.code.add(c`void forwardObjectAndLayerIdColor() {}`),void t.fragment.code.add(c`void outputObjectAndLayerIdColor() {}`);const r=e.objectAndLayerIdColorInstanced;t.varyings.add("objectAndLayerIdColorVarying","vec4"),t.attributes.add(r?y.INSTANCEOBJECTANDLAYERIDCOLOR:y.OBJECTANDLAYERIDCOLOR,"vec4"),t.vertex.code.add(c`
    void forwardObjectAndLayerIdColor() {
      objectAndLayerIdColorVarying = ${r?"instanceObjectAndLayerIdColor":"objectAndLayerIdColor"} * 0.003921568627451;
    }`),t.fragment.code.add(c`void outputObjectAndLayerIdColor() {
fragColor = objectAndLayerIdColorVarying;
}`)}let Pa=class extends F{constructor(e,r){super(e,"bool",v.Pass,(i,n,s)=>i.setUniform1b(e,r(n,s)))}};function Vi(t){t.uniforms.add(new Wt("zProjectionMap",(e,r)=>Bi(r.camera))),t.code.add(c`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`),t.code.add(c`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return depth;
}`),t.code.add(c`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}function Bi(t){const e=t.projectionMatrix;return Qe(Wi,e[14],e[10])}const Wi=Gt();function La(t,{occlusionPass:e,terrainDepthTest:r,cullAboveTerrain:i}){r?(t.fragment.include(Vi),t.fragment.uniforms.add(new ae("terrainDepthTexture",(n,s)=>{var a;return(a=s.terrainDepth)==null?void 0:a.attachment})).code.add(c`
   ${e?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${e?c`return fragmentDepth < linearDepth && depth < 1.0;`:c`if(fragmentDepth ${i?">":"<="} linearDepth) discard;`}
    }`)):e?t.fragment.code.add(c`#define terrainDepthTest(fragmentDepth) false`):t.fragment.code.add(c`#define terrainDepthTest(fragmentDepth) {}`)}let ki=class extends F{constructor(e,r){super(e,"ivec2",v.Pass,(i,n,s)=>i.setUniform2iv(e,r(n,s)))}},ji=class extends F{constructor(e,r){super(e,"int",v.Pass,(i,n,s)=>i.setUniform1i(e,r(n,s)))}};function Xi(t,e){const{fragment:r}=t;e.output===Ae.Highlight?(r.uniforms.add(new ae("depthTexture",(i,n)=>n.mainDepth),new ae("highlightTexture",(i,n)=>n.highlightMixTexture),new ji("highlightLevel",(i,n)=>n.highlightLevel),new ki("highlightMixOrigin",(i,n)=>n.highlightMixOrigin)),t.outputs.add("fragHighlight","vec2",0),r.code.add(c`vec2 getAccumulatedHighlight() {
return texelFetch(highlightTexture, ivec2(gl_FragCoord.xy) - highlightMixOrigin, 0).rg;
}
void outputHighlight(bool occluded) {
if (highlightLevel == 0) {
uint bits = occluded ? 3u : 1u;
fragHighlight = vec2(float(bits) / 255.0, 0.0);
} else {
int ll = (highlightLevel & 3) << 1;
int li = (highlightLevel >> 2) & 3;
uint bits;
if (occluded) {
bits = 3u << ll;
} else {
bits = 1u << ll;
}
vec2 combinedHighlight = getAccumulatedHighlight();
uint accumulatedI = uint(combinedHighlight[li] * 255.0);
combinedHighlight[li] = float(bits | accumulatedI) / 255.0;
fragHighlight = combinedHighlight;
}
}
bool isHighlightOccluded() {
float sceneDepth = texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x;
return gl_FragCoord.z > sceneDepth + 5e-7;
}
void calculateOcclusionAndOutputHighlight() {
outputHighlight(isHighlightOccluded());
}`),e.canHaveOverlay&&(r.constants.add("occlusionAndMask","int",85),r.code.add(c`void outputAllHighlights(vec2 highlightToAdd) {
if (highlightToAdd == vec2(0.0)) { discard; }
int occludedOrMask = isHighlightOccluded() ? 0xaa : 0;
ivec2 added = ivec2(highlightToAdd * 255.0);
ivec2 masked = (added & ivec2(occlusionAndMask)) | (ivec2(occludedOrMask) & (added<<1));
fragHighlight = vec2(masked) / 255.0;
}`))):r.code.add(c`void calculateOcclusionAndOutputHighlight() {}`)}let qi=class extends F{constructor(e,r,i){super(e,"vec4",v.Pass,(n,s,a)=>n.setUniform4fv(e,r(s,a)),i)}},Ki=class extends F{constructor(e,r,i){super(e,"float",v.Pass,(n,s,a)=>n.setUniform1fv(e,r(s,a)),i)}},Da=class extends qt{constructor(){super(...arguments),this.renderOccluded=yr.Occlude,this.isDecoration=!1}};const Be=8;function Ua(t,e){const{vertex:r,attributes:i}=t;e.hasVvInstancing&&(e.vvSize||e.vvColor)&&i.add(y.INSTANCEFEATUREATTRIBUTE,"vec4"),e.vvSize?(r.uniforms.add(new S("vvSizeMinSize",n=>n.vvSize.minSize)),r.uniforms.add(new S("vvSizeMaxSize",n=>n.vvSize.maxSize)),r.uniforms.add(new S("vvSizeOffset",n=>n.vvSize.offset)),r.uniforms.add(new S("vvSizeFactor",n=>n.vvSize.factor)),r.uniforms.add(new ct("vvSymbolRotationMatrix",n=>n.vvSymbolRotationMatrix)),r.uniforms.add(new S("vvSymbolAnchor",n=>n.vvSymbolAnchor)),r.code.add(c`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(c`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.hasVvInstancing?c`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(c`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(r.constants.add("vvColorNumber","int",Be),r.uniforms.add(new Ki("vvColorValues",n=>n.vvColor.values,Be),new qi("vvColorColors",n=>n.vvColor.colors,Be)),r.code.add(c`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${e.hasVvInstancing?c`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(c`vec4 vvColor() { return vec4(1.0); }`)}function Qi(t){t.code.add(c`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}var T;(function(t){t[t.NONE=0]="NONE",t[t.ColorAlpha=1]="ColorAlpha",t[t.FrontFace=2]="FrontFace",t[t.COUNT=3]="COUNT"})(T||(T={}));const rr=Fr(Se.ONE,Se.ZERO,Se.ONE,Se.ONE_MINUS_SRC_ALPHA);function za(t){return t===T.FrontFace?null:rr}function Ga(t){switch(t){case T.NONE:return Dr;case T.ColorAlpha:return rr;case T.FrontFace:case T.COUNT:return null}}function Va(t){if(t.draped)return null;switch(t.oitPass){case T.NONE:case T.FrontFace:return t.writeDepth?Hr:null;case T.ColorAlpha:case T.COUNT:return null}}const Ba=5e5,Yi={factor:-1,units:-2};function Wa(t){return t?Yi:null}function ka(t,e=O.LESS){return t===T.NONE||t===T.FrontFace?e:O.LEQUAL}function ja(t,e){const r=Ut(e);return t===T.ColorAlpha?r?{buffers:[j.COLOR_ATTACHMENT0,j.COLOR_ATTACHMENT1,j.COLOR_ATTACHMENT2]}:{buffers:[j.COLOR_ATTACHMENT0,j.COLOR_ATTACHMENT1]}:r?{buffers:[j.COLOR_ATTACHMENT0,j.COLOR_ATTACHMENT1]}:null}var M;function Zi(t,e){switch(e.textureCoordinateType){case M.Default:return t.attributes.add(y.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(c`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case M.Compressed:return t.attributes.add(y.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(c`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case M.Atlas:return t.attributes.add(y.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add(y.UVREGION,"vec4"),t.varyings.add("vuvRegion","vec4"),void t.vertex.code.add(c`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:Vt(e.textureCoordinateType);case M.None:return void t.vertex.code.add(c`void forwardTextureCoordinates() {}`);case M.COUNT:return}}(function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Atlas=2]="Atlas",t[t.Compressed=3]="Compressed",t[t.COUNT=4]="COUNT"})(M||(M={}));function Ji(t){t.fragment.code.add(c`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function ir(t,e){const{textureCoordinateType:r}=e;if(r===M.None||r===M.COUNT)return;t.include(Zi,e);const i=r===M.Atlas;i&&t.include(Ji),t.fragment.code.add(c`
    vec4 textureLookup(sampler2D tex, vec2 uv) {
      return ${i?"textureAtlasLookup(tex, uv, vuvRegion)":"texture(tex, uv)"};
    }
  `)}var Fe;(function(t){t[t.None=0]="None",t[t.Value=1]="Value",t[t.Texture=2]="Texture",t[t.COUNT=3]="COUNT"})(Fe||(Fe={}));function en(t,e){if(!qe(e.output))return;const{emissionSource:r,hasEmissiveTextureTransform:i,bindType:n}=e,s=r===Fe.Texture;s&&(t.include(ir,e),t.fragment.uniforms.add(n===v.Pass?new ae("texEmission",l=>l.textureEmissive):new Ke("texEmission",l=>l.textureEmissive)));const a=r===Fe.Value||s;a&&t.fragment.uniforms.add(n===v.Pass?new S("emissionFactor",l=>l.emissiveFactor):new z("emissionFactor",l=>l.emissiveFactor)),t.fragment.code.add(c`
    vec4 getEmissions() {
      vec4 emissions = ${a?"vec4(emissionFactor, 1.0)":"vec4(0.0)"};
      ${P(s,`emissions *= textureLookup(texEmission, ${i?"emissiveUV":"vuv0"});
         emissions.w = emissions.rgb == vec3(0.0) ? 0.0: emissions.w;`)};
      return emissions;
    }
  `)}let it=class extends ni{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}};W([Me()],it.prototype,"instancedDoublePrecision",void 0),W([Me()],it.prototype,"hasModelTransformation",void 0);let Ct=class extends it{constructor(){super(...arguments),this.output=Ae.Color,this.oitPass=T.NONE,this.hasSliceHighlight=!0,this.hasSliceInVertexProgram=!1,this.bindType=v.Pass,this.writeDepth=!0}};W([Me({count:Ae.COUNT})],Ct.prototype,"output",void 0),W([Me({count:T.COUNT})],Ct.prototype,"oitPass",void 0);function tn(t){if(t.length<Te)return Array.from(t);if(st(t))return Float64Array.from(t);if(!("BYTES_PER_ELEMENT"in t))return Array.from(t);switch(t.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(t);case 2:return _r(t)?Uint16Array.from(t):Int16Array.from(t);case 4:return Float32Array.from(t);default:return Float64Array.from(t)}}let rn=class nr{constructor(e,r,i){this.primitiveIndices=e,this._numIndexPerPrimitive=r,this.position=i,this._children=void 0,B(e.length>=1),B(i.size===3||i.size===4);const{data:n,size:s,indices:a}=i;B(a.length%this._numIndexPerPrimitive==0),B(a.length>=e.length*this._numIndexPerPrimitive);const l=e.length;let o=s*a[this._numIndexPerPrimitive*e[0]];q.clear(),q.push(o);const d=Ue(n[o],n[o+1],n[o+2]),u=Qr(d);for(let m=0;m<l;++m){const f=this._numIndexPerPrimitive*e[m];for(let E=0;E<this._numIndexPerPrimitive;++E){o=s*a[f+E],q.push(o);let $=n[o];d[0]=Math.min($,d[0]),u[0]=Math.max($,u[0]),$=n[o+1],d[1]=Math.min($,d[1]),u[1]=Math.max($,u[1]),$=n[o+2],d[2]=Math.min($,d[2]),u[2]=Math.max($,u[2])}}this.bbMin=d,this.bbMax=u;const h=Xe(_(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(u[0]-d[0],u[1]-d[1]),u[2]-d[2]);let b=this.radius*this.radius;for(let m=0;m<q.length;++m){o=q.at(m);const f=n[o]-h[0],E=n[o+1]-h[1],$=n[o+2]-h[2],Y=f*f+E*E+$*$;if(Y<=b)continue;const le=Math.sqrt(Y),ce=.5*(le-this.radius);this.radius=this.radius+ce,b=this.radius*this.radius;const Z=ce/le;h[0]+=f*Z,h[1]+=E*Z,h[2]+=$*Z}this.center=h,q.clear()}getChildren(){if(this._children||Yr(this.bbMin,this.bbMax)<=1)return this._children;const e=Xe(_(),this.bbMin,this.bbMax,.5),r=this.primitiveIndices.length,i=new Uint8Array(r),n=new Array(8);for(let u=0;u<8;++u)n[u]=0;const{data:s,size:a,indices:l}=this.position;for(let u=0;u<r;++u){let h=0;const b=this._numIndexPerPrimitive*this.primitiveIndices[u];let m=a*l[b],f=s[m],E=s[m+1],$=s[m+2];for(let Y=1;Y<this._numIndexPerPrimitive;++Y){m=a*l[b+Y];const le=s[m],ce=s[m+1],Z=s[m+2];le<f&&(f=le),ce<E&&(E=ce),Z<$&&($=Z)}f<e[0]&&(h|=1),E<e[1]&&(h|=2),$<e[2]&&(h|=4),i[u]=h,++n[h]}let o=0;for(let u=0;u<8;++u)n[u]>0&&++o;if(o<2)return;const d=new Array(8);for(let u=0;u<8;++u)d[u]=n[u]>0?new Uint32Array(n[u]):void 0;for(let u=0;u<8;++u)n[u]=0;for(let u=0;u<r;++u){const h=i[u];d[h][n[h]++]=this.primitiveIndices[u]}this._children=new Array;for(let u=0;u<8;++u)d[u]!==void 0&&this._children.push(new nr(d[u],this._numIndexPerPrimitive,this.position));return this._children}static prune(){q.prune()}};const q=new Ot({deallocator:null});function nn(t,e){if(!t)return!1;const{size:r,data:i,indices:n}=t;w(e,0,0,0),w(R,0,0,0);let s=0,a=0;for(let l=0;l<n.length-2;l+=3){const o=n[l]*r,d=n[l+1]*r,u=n[l+2]*r;w(p,i[o],i[o+1],i[o+2]),w(D,i[d],i[d+1],i[d+2]),w(ye,i[u],i[u+1],i[u+2]);const h=oi(p,D,ye);h?(I(p,p,D),I(p,p,ye),N(p,p,1/3*h),I(e,e,p),s+=h):(I(R,R,p),I(R,R,D),I(R,R,ye),a+=3)}return(a!==0||s!==0)&&(s!==0?(N(e,e,1/s),!0):a!==0&&(N(e,R,1/a),!0))}function sn(t,e){if(!t)return!1;const{size:r,data:i,indices:n}=t;w(e,0,0,0);let s=-1,a=0;for(let l=0;l<n.length;l++){const o=n[l]*r;s!==o&&(e[0]+=i[o],e[1]+=i[o+1],e[2]+=i[o+2],a++),s=o}return a>1&&N(e,e,1/a),a>0}function an(t,e,r){if(!t)return!1;w(r,0,0,0),w(R,0,0,0);let i=0,n=0;const{size:s,data:a,indices:l}=t,o=l.length-1,d=o+(e?2:0);for(let u=0;u<d;u+=2){const h=u<o?u+1:0,b=l[u<o?u:o]*s,m=l[h]*s;p[0]=a[b],p[1]=a[b+1],p[2]=a[b+2],D[0]=a[m],D[1]=a[m+1],D[2]=a[m+2],N(p,I(p,p,D),.5);const f=Zr(p,D);f>0?(I(r,r,N(p,p,f)),i+=f):i===0&&(I(R,R,p),n++)}return i!==0?(N(r,r,1/i),!0):n!==0&&(N(r,R,1/n),!0)}const p=_(),D=_(),ye=_(),R=_();let sr=class{constructor(){this.uid=xr()}},on=class extends sr{constructor(e){super(),this.highlightGroupName=e,this.channel=Dt.Highlight}},Ya=class extends sr{constructor(){super(...arguments),this.channel=Dt.MaskOccludee}},Ja=class ar extends Ft{constructor(e,r,i=null,n=fe.Mesh,s=null,a=-1){super(),this.material=e,this.mapPositions=i,this.type=n,this.objectAndLayerIdColor=s,this.edgeIndicesLength=a,this.highlights=new Set,this._highlightGroupCounts=new Map,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[l,o]of r)this._attributes.set(l,{...o,indices:si(o.indices)}),l===y.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(l).indices.length:this.edgeIndicesLength)}instantiate(e={}){const r=new ar(e.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach((i,n)=>{i.exclusive=!1,r._attributes.set(n,i)}),r._boundingInfo=this._boundingInfo,r.transformation=e.transformation||this.transformation,r}get attributes(){return this._attributes}getMutableAttribute(e){let r=this._attributes.get(e);return r&&!r.exclusive&&(r={...r,exclusive:!0,data:tn(r.data)},this._attributes.set(e,r)),r}setAttributeData(e,r){const i=this._attributes.get(e);i&&this._attributes.set(e,{...i,exclusive:!0,data:r})}get indexCount(){const e=this._attributes.values().next().value.indices;return(e==null?void 0:e.length)??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return this._boundingInfo==null&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===fe.Mesh?this._computeAttachmentOriginTriangles(e):this.type===fe.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(this._transformation!=null&&Le(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){const r=this.attributes.get(y.POSITION);return nn(r,e)}_computeAttachmentOriginLines(e){const r=this.attributes.get(y.POSITION);return an(r,ln(this.material.parameters,r),e)}_computeAttachmentOriginPoints(e){const r=this.attributes.get(y.POSITION);return sn(r,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.attributes.get(y.POSITION);if(!e||e.indices.length===0)return null;const r=this.type===fe.Mesh?3:1;B(e.indices.length%r==0,"Indexing error: "+e.indices.length+" not divisible by "+r);const i=ai(e.indices.length/r);return new rn(i,r,e)}get transformation(){return this._transformation??ft}set transformation(e){this._transformation=e&&e!==ft?Gr(e):null}get highlightGroups(){return this._highlightGroupCounts}get hasHighlights(){return this._highlightGroupCounts.size>0}foreachHighlightGroup(e){this._highlightGroupCounts.forEach((r,i)=>e(i))}allocateIdAndHighlight(e){const r=new on(e);return this.addHighlight(r)}addHighlight(e){this.highlights.add(e);const{highlightGroupName:r}=e,i=(this._highlightGroupCounts.get(r)??0)+1;return this._highlightGroupCounts.set(r,i),e}removeHighlight(e){if(this.highlights.delete(e)){const{highlightGroupName:r}=e,i=this._highlightGroupCounts.get(r)??0;i<=1?this._highlightGroupCounts.delete(r):this._highlightGroupCounts.set(r,i-1)}}};function ln(t,e){return!(!("isClosed"in t)||!t.isClosed)&&e.indices.length>2}function eo(t,e=!1){return t<=Te?e?new Array(t).fill(0):new Array(t):new Float32Array(t)}function to(t){return st(t)?t.length<Te?t:new Float32Array(t):t.length<Te?Array.from(t):t}function ro(t){return(st(t)?t.length:t.byteLength/8)<=Te?Array.from(t):new Float32Array(t)}function io(t,e,r){return Array.isArray(t)?t.slice(e,e+r):t.subarray(e,e+r)}var C;(function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.Simplified=5]="Simplified",t[t.TerrainWithWater=6]="TerrainWithWater",t[t.COUNT=7]="COUNT"})(C||(C={}));function no(t,e){const r=e.pbrMode,i=t.fragment;if(r!==C.Schematic&&r!==C.Disabled&&r!==C.Normal)return void i.code.add(c`void applyPBRFactors() {}`);if(r===C.Disabled)return void i.code.add(c`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(r===C.Schematic)return void i.code.add(c`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);const{hasMetallicRoughnessTexture:n,hasMetallicRoughnessTextureTransform:s,hasOcclusionTexture:a,hasOcclusionTextureTransform:l,bindType:o}=e;(n||a)&&t.include(ir,e),i.code.add(c`vec3 mrr;
float occlusion;`),n&&i.uniforms.add(o===v.Pass?new ae("texMetallicRoughness",d=>d.textureMetallicRoughness):new Ke("texMetallicRoughness",d=>d.textureMetallicRoughness)),a&&i.uniforms.add(o===v.Pass?new ae("texOcclusion",d=>d.textureOcclusion):new Ke("texOcclusion",d=>d.textureOcclusion)),i.uniforms.add(o===v.Pass?new S("mrrFactors",d=>d.mrrFactors):new z("mrrFactors",d=>d.mrrFactors)),i.code.add(c`
    ${P(n,c`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${P(a,"void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${a?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${P(n,`applyMetallicRoughness(${s?"metallicRoughnessUV":"vuv0"});`)}
      ${P(a,`applyOcclusion(${l?"occlusionUV":"vuv0"});`)}
    }
  `)}function cn(t){t.attributes.add(y.POSITION,"vec3"),t.vertex.code.add(c`vec3 positionModel() { return position; }`)}function so(t,e){t.include(cn);const r=t.vertex;r.include(ti,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),r.uniforms.add(new S("transformWorldFromViewTH",i=>i.transformWorldFromViewTH),new S("transformWorldFromViewTL",i=>i.transformWorldFromViewTL),new ct("transformViewFromCameraRelativeRS",i=>i.transformViewFromCameraRelativeRS),new pe("transformProjFromView",i=>i.transformProjFromView),new zt("transformWorldFromModelRS",i=>i.transformWorldFromModelRS),new z("transformWorldFromModelTH",i=>i.transformWorldFromModelTH),new z("transformWorldFromModelTL",i=>i.transformWorldFromModelTL)),r.code.add(c`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(c`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${e.spherical?c`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:c`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),t.fragment.uniforms.add(new S("transformWorldFromViewTL",i=>i.transformWorldFromViewTL)),r.code.add(c`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),t.fragment.code.add(c`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class un extends He{constructor(){super(...arguments),this.transformWorldFromViewTH=_(),this.transformWorldFromViewTL=_(),this.transformViewFromCameraRelativeRS=$e(),this.transformProjFromView=oe()}}class dn extends He{constructor(){super(...arguments),this.transformWorldFromModelRS=$e(),this.transformWorldFromModelTH=_(),this.transformWorldFromModelTL=_()}}function ao(t,e){switch(e.normalType){case be.Attribute:case be.Compressed:t.include(ri,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add(new zt("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new ct("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)),t.vertex.code.add(c`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case be.ScreenDerivative:t.vertex.code.add(c`void forwardNormal() {}`);break;default:Vt(e.normalType);case be.COUNT:}}let oo=class extends un{constructor(){super(...arguments),this.transformNormalViewFromGlobal=$e()}},co=class extends dn{constructor(){super(...arguments),this.transformNormalGlobalFromModel=$e(),this.toMapSpace=Bt()}};const ho={func:O.LESS},mo={func:O.ALWAYS},fo={mask:255},go={mask:0},po=t=>({function:{func:O.NOTEQUAL,ref:t,mask:t},operation:{fail:x.KEEP,zFail:x.KEEP,zPass:x.KEEP}}),vo=t=>({function:{func:O.ALWAYS,ref:t,mask:t},operation:{fail:x.KEEP,zFail:x.KEEP,zPass:x.REPLACE}}),_o={function:{func:O.ALWAYS,ref:k.OutlineVisualElementMask,mask:k.OutlineVisualElementMask},operation:{fail:x.KEEP,zFail:x.KEEP,zPass:x.ZERO}},To={function:{func:O.ALWAYS,ref:k.OutlineVisualElementMask,mask:k.OutlineVisualElementMask},operation:{fail:x.KEEP,zFail:x.KEEP,zPass:x.REPLACE}},xo={function:{func:O.EQUAL,ref:k.OutlineVisualElementMask,mask:k.OutlineVisualElementMask},operation:{fail:x.KEEP,zFail:x.KEEP,zPass:x.KEEP}},Ao={function:{func:O.NOTEQUAL,ref:k.OutlineVisualElementMask,mask:k.OutlineVisualElementMask},operation:{fail:x.KEEP,zFail:x.KEEP,zPass:x.KEEP}};var wt,Rt;(function(t){t[t.RED=0]="RED",t[t.RG=1]="RG",t[t.RGBA4=2]="RGBA4",t[t.RGBA=3]="RGBA",t[t.RGBA_MIPMAP=4]="RGBA_MIPMAP",t[t.R16F=5]="R16F",t[t.RGBA16F=6]="RGBA16F"})(wt||(wt={})),function(t){t[t.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",t[t.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(Rt||(Rt={}));const $o=3e5,So=5e5;let bo=class extends F{constructor(e,r){super(e,"vec2",v.Draw,(i,n,s,a)=>i.setUniform2fv(e,r(n,s,a)))}};function yo(t){t.fragment.uniforms.add(new Ui("projInfo",(e,r)=>hn(r.camera))),t.fragment.uniforms.add(new Wt("zScale",(e,r)=>mn(r.camera))),t.fragment.code.add(c`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function hn(t){const e=t.projectionMatrix;return e[11]===0?pt(Pt,2/(t.fullWidth*e[0]),2/(t.fullHeight*e[5]),(1+e[12])/e[0],(1+e[13])/e[5]):pt(Pt,-2/(t.fullWidth*e[0]),-2/(t.fullHeight*e[5]),(1-e[8])/e[0],(1-e[9])/e[5])}const Pt=Bt();function mn(t){return t.projectionMatrix[11]===0?Qe(It,0,1):Qe(It,1,0)}const It=Gt();function fn(t){t.uniforms.add(new S("mainLightDirection",(e,r)=>r.lighting.mainLight.direction))}function gn(t){t.uniforms.add(new S("mainLightIntensity",(e,r)=>r.lighting.mainLight.intensity))}function Co(t){fn(t.fragment),gn(t.fragment),t.fragment.code.add(c`vec3 applyShading(vec3 shadingNormalWorld, float shadow) {
float dotVal = clamp(dot(shadingNormalWorld, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}function pn(t){const e=t.fragment.code;e.add(c`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(c`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(c`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function or(t){const e=3.141592653589793,r=.3183098861837907;t.vertex.constants.add("PI","float",e),t.fragment.constants.add("PI","float",e),t.fragment.constants.add("LIGHT_NORMALIZATION","float",r),t.fragment.constants.add("INV_PI","float",r),t.fragment.constants.add("HALF_PI","float",1.570796326794897),t.fragment.constants.add("TWO_PI","float",6.28318530717958)}function wo(t,e){const r=t.fragment.code;t.include(or),e.pbrMode!==C.Normal&&e.pbrMode!==C.Schematic&&e.pbrMode!==C.Simplified&&e.pbrMode!==C.TerrainWithWater||(r.add(c`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(c`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),e.pbrMode!==C.Normal&&e.pbrMode!==C.Schematic||(t.include(pn),r.add(c`struct PBRShadingInfo
{
float NdotV;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(c`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(c`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(c`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function Ro(t,e){const r=t.fragment.code;t.include(or),r.add(c`
  struct PBRShadingWater
  {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${e.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),r.add(c`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(c`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(c`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(c`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}function vn(t,e,r){(r=r||t).length=t.length;for(let i=0;i<t.length;i++)r[i]=t[i]*e[i];return r}function We(t,e,r){(r=r||t).length=t.length;for(let i=0;i<t.length;i++)r[i]=t[i]*e;return r}function ne(t,e,r){(r=r||t).length=t.length;for(let i=0;i<t.length;i++)r[i]=t[i]+e[i];return r}function lr(t){return(t+1)*(t+1)}function _n(t){return at(Math.floor(Math.sqrt(t)-1),0,2)}function cr(t,e,r){const i=t[0],n=t[1],s=t[2],a=r||[];return a.length=lr(e),e>=0&&(a[0]=.28209479177),e>=1&&(a[1]=.4886025119*i,a[2]=.4886025119*s,a[3]=.4886025119*n),e>=2&&(a[4]=1.09254843059*i*n,a[5]=1.09254843059*n*s,a[6]=.31539156525*(3*s*s-1),a[7]=1.09254843059*i*s,a[8]=.54627421529*(i*i-n*n)),a}function Tn(t,e){const r=lr(t),i=e||{r:[],g:[],b:[]};i.r.length=i.g.length=i.b.length=r;for(let n=0;n<r;n++)i.r[n]=i.g[n]=i.b[n]=0;return i}function xn(t,e){const r=_n(e.r.length);for(const i of t)Jr(nt,i.direction),cr(nt,r,H),vn(H,Pe),We(H,i.intensity[0],ee),ne(e.r,ee),We(H,i.intensity[1],ee),ne(e.g,ee),We(H,i.intensity[2],ee),ne(e.b,ee);return e}function An(t,e){cr(nt,0,H);for(const r of t)e.r[0]+=H[0]*Pe[0]*r.intensity[0]*4*Math.PI,e.g[0]+=H[0]*Pe[0]*r.intensity[1]*4*Math.PI,e.b[0]+=H[0]*Pe[0]*r.intensity[2]*4*Math.PI;return e}function $n(t,e,r,i){Tn(e,i),w(r.intensity,0,0,0);let n=!1;const s=Sn,a=bn,l=En;s.length=0,a.length=0,l.length=0;for(const o of t)o instanceof rt&&!n?(K(r.direction,o.direction),K(r.intensity,o.intensity),r.specularStrength=o.specularStrength,r.environmentStrength=o.environmentStrength,r.castShadows=o.castShadows,n=!0):o instanceof rt||o instanceof Ei?s.push(o):o instanceof bi?a.push(o):o instanceof jt&&l.push(o);xn(s,i),An(a,i);for(const o of l)ne(i.r,o.r),ne(i.g,o.g),ne(i.b,o.b)}const Sn=[],bn=[],En=[],H=[0],ee=[0],nt=_(),Pe=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];let Lt=class{constructor(){this.color=_(),this.intensity=1}},yn=class{constructor(){this.direction=_(),this.ambient=new Lt,this.diffuse=new Lt}};const Cn=.4;let Lo=class{constructor(){this._shOrder=2,this._legacy=new yn,this.globalFactor=.5,this.noonFactor=.5,this._sphericalHarmonics=new jt,this._mainLight=new rt(_(),Ue(1,0,0),!1)}get legacy(){return this._legacy}get sh(){return this._sphericalHarmonics}get mainLight(){return this._mainLight}set(e){$n(e,this._shOrder,this._mainLight,this._sphericalHarmonics),K(this._legacy.direction,this._mainLight.direction);const r=1/Math.PI;this._legacy.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*r,this._legacy.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*r,this._legacy.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*r,N(this._legacy.diffuse.color,this._mainLight.intensity,r),K(Ce,this._legacy.diffuse.color),N(Ce,Ce,Cn*this.globalFactor),I(this._legacy.ambient.color,this._legacy.ambient.color,Ce)}copyFrom(e){this._sphericalHarmonics.r=Array.from(e.sh.r),this._sphericalHarmonics.g=Array.from(e.sh.g),this._sphericalHarmonics.b=Array.from(e.sh.b),K(this._mainLight.direction,e.mainLight.direction),K(this._mainLight.intensity,e.mainLight.intensity),this._mainLight.castShadows=e.mainLight.castShadows,this._mainLight.specularStrength=e.mainLight.specularStrength,this._mainLight.environmentStrength=e.mainLight.environmentStrength,this.globalFactor=e.globalFactor,this.noonFactor=e.noonFactor}lerpLighting(e,r,i){if(Xe(this._mainLight.intensity,e.mainLight.intensity,r.mainLight.intensity,i),this._mainLight.environmentStrength=X(e.mainLight.environmentStrength,r.mainLight.environmentStrength,i),this._mainLight.specularStrength=X(e.mainLight.specularStrength,r.mainLight.specularStrength,i),K(this._mainLight.direction,r.mainLight.direction),this._mainLight.castShadows=r.mainLight.castShadows,this.globalFactor=X(e.globalFactor,r.globalFactor,i),this.noonFactor=X(e.noonFactor,r.noonFactor,i),e.sh.r.length===r.sh.r.length)for(let n=0;n<r.sh.r.length;n++)this._sphericalHarmonics.r[n]=X(e.sh.r[n],r.sh.r[n],i),this._sphericalHarmonics.g[n]=X(e.sh.g[n],r.sh.g[n],i),this._sphericalHarmonics.b[n]=X(e.sh.b[n],r.sh.b[n],i);else for(let n=0;n<r.sh.r.length;n++)this._sphericalHarmonics.r[n]=r.sh.r[n],this._sphericalHarmonics.g[n]=r.sh.g[n],this._sphericalHarmonics.b[n]=r.sh.b[n]}};const Ce=_();function No(t,e){t.include(Xi,e),t.include(en,e),t.fragment.include(Qi);const r=e.output===Ae.ObjectAndLayerIdColor,i=Ut(e.output),n=qe(e.output)&&e.oitPass===T.ColorAlpha,s=qe(e.output)&&e.oitPass!==T.ColorAlpha,a=e.discardInvisibleFragments;let l=0;(s||i||n)&&t.outputs.add("fragColor","vec4",l++),i&&t.outputs.add("fragEmission","vec4",l++),n&&t.outputs.add("fragAlpha","float",l++),t.fragment.code.add(c`
    void outputColorHighlightOID(vec4 finalColor, const in vec3 vWorldPosition) {
      ${P(r,c`finalColor.a = 1.0;`)}

      ${P(a,c`if (finalColor.a < ${c.float(li)}){
              discard;
              return;
            }`)}

      finalColor = highlightSlice(finalColor, vWorldPosition);
      ${P(n,c`fragColor = premultiplyAlpha(finalColor);
             fragAlpha = finalColor.a;`)}
      ${P(s,"fragColor = finalColor;")}
      ${P(i,"fragEmission = getEmissions();")}
      calculateOcclusionAndOutputHighlight();
      ${P(r,"outputObjectAndLayerIdColor();")}
    }
  `)}function wn(){return Mt??(Mt=(async()=>{const t=await fi(()=>import("./basis_transcoder-B40h2JNH.js"),[],import.meta.url),e=await t.default({locateFile:r=>ui(`esri/libs/basisu/${r}`)});return e.initializeBasis(),e})()),Mt}let Mt;var Q;(function(t){t[t.ETC1_RGB=0]="ETC1_RGB",t[t.ETC2_RGBA=1]="ETC2_RGBA",t[t.BC1_RGB=2]="BC1_RGB",t[t.BC3_RGBA=3]="BC3_RGBA",t[t.BC4_R=4]="BC4_R",t[t.BC5_RG=5]="BC5_RG",t[t.BC7_M6_RGB=6]="BC7_M6_RGB",t[t.BC7_M5_RGBA=7]="BC7_M5_RGBA",t[t.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",t[t.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",t[t.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",t[t.ATC_RGB=11]="ATC_RGB",t[t.ATC_RGBA=12]="ATC_RGBA",t[t.FXT1_RGB=17]="FXT1_RGB",t[t.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",t[t.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",t[t.ETC2_EAC_R11=20]="ETC2_EAC_R11",t[t.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",t[t.RGBA32=13]="RGBA32",t[t.RGB565=14]="RGB565",t[t.BGR565=15]="BGR565",t[t.RGBA4444=16]="RGBA4444"})(Q||(Q={}));let L=null,we=null;async function ur(){return we==null&&(we=wn(),L=await we),we}function Rn(t,e){if(L==null)return t.byteLength;const r=new L.BasisFile(new Uint8Array(t)),i=hr(r)?dr(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),e):0;return r.close(),r.delete(),i}function Pn(t,e){if(L==null)return t.byteLength;const r=new L.KTX2File(new Uint8Array(t)),i=mr(r)?dr(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),e):0;return r.close(),r.delete(),i}function dr(t,e,r,i,n){const s=wr(e?U.COMPRESSED_RGBA8_ETC2_EAC:U.COMPRESSED_RGB8_ETC2),a=n&&t>1?(4**t-1)/(3*4**(t-1)):1;return Math.ceil(r*i*s*a)}function hr(t){return t.getNumImages()>=1&&!t.isUASTC()}function mr(t){return t.getFaces()>=1&&t.isETC1S()}async function In(t,e,r){L==null&&(L=await ur());const i=new L.BasisFile(new Uint8Array(r));if(!hr(i))return null;i.startTranscoding();const n=fr(t,e,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),(s,a)=>i.getImageTranscodedSizeInBytes(0,s,a),(s,a,l)=>i.transcodeImage(l,0,s,a,0,0));return i.close(),i.delete(),n}async function Ln(t,e,r){L==null&&(L=await ur());const i=new L.KTX2File(new Uint8Array(r));if(!mr(i))return null;i.startTranscoding();const n=fr(t,e,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),(s,a)=>i.getImageTranscodedSizeInBytes(s,0,0,a),(s,a,l)=>i.transcodeImage(l,s,0,0,a,0,-1,-1));return i.close(),i.delete(),n}function fr(t,e,r,i,n,s,a,l){const{compressedTextureETC:o,compressedTextureS3TC:d}=t.capabilities,[u,h]=o?i?[Q.ETC2_RGBA,U.COMPRESSED_RGBA8_ETC2_EAC]:[Q.ETC1_RGB,U.COMPRESSED_RGB8_ETC2]:d?i?[Q.BC3_RGBA,U.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[Q.BC1_RGB,U.COMPRESSED_RGB_S3TC_DXT1_EXT]:[Q.RGBA32,te.RGBA],b=e.hasMipmap?r:Math.min(1,r),m=[];for(let f=0;f<b;f++)m.push(new Uint8Array(a(f,u))),l(f,u,m[f]);return e.internalFormat=h,e.hasMipmap=m.length>1,e.samplingMode=e.hasMipmap?se.LINEAR_MIPMAP_LINEAR:se.LINEAR,e.width=n,e.height=s,new ge(t,e,{type:"compressed",levels:m})}const Re=()=>Nt.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),Mn=542327876,Nn=131072,On=4;function dt(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function Fn(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const Dn=dt("DXT1"),Hn=dt("DXT3"),Un=dt("DXT5"),zn=31,Gn=0,Vn=1,Bn=2,Wn=3,kn=4,jn=7,Xn=20,qn=21;function Kn(t,e,r){const i=Qn(r,e.hasMipmap??!1);if(i==null)throw new Error("DDS texture data is null");const{textureData:n,internalFormat:s,width:a,height:l}=i;return e.samplingMode=n.levels.length>1?se.LINEAR_MIPMAP_LINEAR:se.LINEAR,e.hasMipmap=n.levels.length>1,e.internalFormat=s,e.width=a,e.height=l,new ge(t,e,n)}function Qn(t,e){const r=new Int32Array(t.buffer,t.byteOffset,zn);if(r[Gn]!==Mn)return Re().error("Invalid magic number in DDS header"),null;if(!(r[Xn]&On))return Re().error("Unsupported format, must contain a FourCC code"),null;const i=r[qn];let n,s;switch(i){case Dn:n=8,s=U.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Hn:n=16,s=U.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Un:n=16,s=U.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Re().error("Unsupported FourCC code:",Fn(i)),null}let a=1,l=r[kn],o=r[Wn];(3&l||3&o)&&(Re().warn("Rounding up compressed texture size to nearest multiple of 4."),l=l+3&-4,o=o+3&-4);const d=l,u=o;let h,b;r[Bn]&Nn&&e!==!1&&(a=Math.max(1,r[jn]));let m=t.byteOffset+r[Vn]+4;const f=[];for(let E=0;E<a;++E)b=(l+3>>2)*(o+3>>2)*n,h=new Uint8Array(t.buffer,m,b),f.push(h),m+=b,l=Math.max(1,l>>1),o=Math.max(1,o>>1);return{textureData:{type:"compressed",levels:f},internalFormat:s,width:d,height:u}}const De=16;function Oo(t){return Math.ceil(t/De)*De}function Fo(t){return Math.floor(t/De)*De}function Yn(t,e){let s=t.width*t.height;if(s<4096)return t instanceof ImageData?gr(t):t;let a=t.width,l=t.height;do a=Math.ceil(a/2),l=Math.ceil(l/2),s=a*l;while(s>1048576||e!=null&&(a>e||l>e));return ht(t,a,l)}function Zn(t,e){const r=Math.max(t.width,t.height);if(r<=e)return t;const i=e/r;return ht(t,Math.round(t.width*i),Math.round(t.height*i))}function ht(t,e,r){if(t instanceof ImageData)return ht(gr(t),e,r);const i=document.createElement("canvas");return i.width=e,i.height=r,i.getContext("2d").drawImage(t,0,0,i.width,i.height),i}function gr(t){const e=document.createElement("canvas");e.width=t.width,e.height=t.height;const r=e.getContext("2d");if(r==null)throw new xe("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(t,0,0),e}class Do extends Ft{get parameters(){return this._parameters}constructor(e,r){super(),this._data=e,this.type=fe.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new ci,this._parameters={...es,...r},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){e!=null&&(e instanceof HTMLVideoElement?(this.frameUpdate=r=>this._frameUpdate(e,r),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!(vt(e.src)||e.preload==="auto"&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const r=!e.paused;if(e.src=e.src,r&&e.autoplay){const i=()=>{e.removeEventListener("canplay",i),e.play()};e.addEventListener("canplay",i)}}}_startPreloadImageElement(e){di(e.src)||vt(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const r=new Rr;return r.wrapMode=this._parameters.wrap??je.REPEAT,r.flipped=!this._parameters.noUnpackFlip,r.samplingMode=this._parameters.mipmap?se.LINEAR_MIPMAP_LINEAR:se.LINEAR,r.hasMipmap=!!this._parameters.mipmap,r.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,r.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),r}get glTexture(){return this._glTexture}get memoryEstimate(){var e;return((e=this._glTexture)==null?void 0:e.usedMemory)||Jn(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const r=this._data;return r==null?(this._glTexture=new ge(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),typeof r=="string"?this._loadFromURL(e,r):r instanceof Image?this._loadFromImageElement(e,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(e,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(e,r):he(r)&&this._parameters.encoding===ie.DDS_ENCODING?this._loadFromDDSData(e,r):me(r)&&this._parameters.encoding===ie.DDS_ENCODING?this._loadFromDDSData(e,new Uint8Array(r)):(me(r)||he(r))&&this._parameters.encoding===ie.KTX2_ENCODING?this._loadFromKTX2(e,r):(me(r)||he(r))&&this._parameters.encoding===ie.BASIS_ENCODING?this._loadFromBasis(e,r):he(r)?this._loadFromPixelData(e,r):me(r)?this._loadFromPixelData(e,new Uint8Array(r)):null)}_frameUpdate(e,r){return this._glTexture==null||e.readyState<_e.HAVE_CURRENT_DATA||r===e.currentTime?r:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,r){return this._glTexture=Kn(e,this._createDescriptor(e),r),this._glTexture}_loadFromKTX2(e,r){return this._loadAsync(()=>Ln(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromBasis(e,r){return this._loadAsync(()=>In(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromPixelData(e,r){B(this._parameters.width>0&&this._parameters.height>0);const i=this._createDescriptor(e);return i.pixelFormat=this._parameters.components===1?te.LUMINANCE:this._parameters.components===3?te.RGB:te.RGBA,i.width=this._parameters.width??0,i.height=this._parameters.height??0,this._glTexture=new ge(e,i,r),this._glTexture}_loadFromURL(e,r){return this._loadAsync(async i=>{const n=await mi(r,{signal:i});return mt(i),this._loadFromImage(e,n)})}_loadFromImageElement(e,r){return r.complete?this._loadFromImage(e,r):this._loadAsync(async i=>{const n=await hi(r,r.src,!1,i);return mt(i),this._loadFromImage(e,n)})}_loadFromVideoElement(e,r){return r.readyState>=_e.HAVE_CURRENT_DATA?this._loadFromImage(e,r):this._loadFromVideoElementAsync(e,r)}_loadFromVideoElementAsync(e,r){return this._loadAsync(i=>new Promise((n,s)=>{const a=()=>{r.removeEventListener("loadeddata",l),r.removeEventListener("error",o),Sr(d)},l=()=>{r.readyState>=_e.HAVE_CURRENT_DATA&&(a(),n(this._loadFromImage(e,r)))},o=u=>{a(),s(u||new xe("Failed to load video"))};r.addEventListener("loadeddata",l),r.addEventListener("error",o);const d=Ar(i,()=>o($r()))}))}_loadFromImage(e,r){let i=r;if(!(i instanceof HTMLVideoElement)){const{maxTextureSize:a}=e.parameters;i=this._parameters.downsampleUncompressed?Yn(i,a):Zn(i,a)}const n=pr(i);this._parameters.width=n.width,this._parameters.height=n.height;const s=this._createDescriptor(e);return s.pixelFormat=this._parameters.components===3?te.RGB:te.RGBA,s.width=n.width,s.height=n.height,this._glTexture=new ge(e,s,i),this._glTexture}_loadAsync(e){const r=new AbortController;this._loadingController=r;const i=e(r.signal);this._loadingPromise=i;const n=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===i&&(this._loadingPromise=null)};return i.then(n,n),i}unload(){if(this._glTexture=ke(this._glTexture),this._loadingController!=null){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}function Jn(t,e){if(t==null)return 0;if(me(t)||he(t))return e.encoding===ie.KTX2_ENCODING?Pn(t,!!e.mipmap):e.encoding===ie.BASIS_ENCODING?Rn(t,!!e.mipmap):t.byteLength;const{width:r,height:i}=t instanceof Image||t instanceof ImageData||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?pr(t):e;return(e.mipmap?4/3:1)*r*i*(e.components||4)||0}function pr(t){return t instanceof HTMLVideoElement?{width:t.videoWidth,height:t.videoHeight}:t}var _e;(function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"})(_e||(_e={}));const es={wrap:{s:je.REPEAT,t:je.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};export{C as $,yt as A,ja as B,Do as C,Yi as D,Ct as E,Fe as F,yo as G,ta as H,xt as I,Yn as J,co as K,ur as L,to as M,rn as N,tn as O,wa as P,ji as Q,Zi as R,Ua as S,Xi as T,ao as U,Ra as V,ir as W,bo as X,wt as Y,So as Z,$o as _,xa as a,Cn as a0,wo as a1,or as a2,fn as a3,gn as a4,Co as a5,cn as a6,no as a7,oo as a8,ka as a9,Lo as aA,bi as aB,ha as aC,ma as aD,ca as aE,fa as aF,io as aG,Be as aH,qi as aI,rt as aJ,Ei as aK,po as aL,Ca as aM,vo as aN,tt as aO,fo as aa,To as ab,_o as ac,Wa as ad,Ba as ae,za as af,ga as ag,pa as ah,Ya as ai,on as aj,Ki as ak,mo as al,Ao as am,go as an,xo as ao,ho as ap,Da as aq,Ea as ar,Hi as as,Fo as at,Rt as au,Ji as av,un as aw,dn as ax,Ro as ay,ki as az,ae as b,Wt as c,Ta as d,Ui as e,_a as f,Vi as g,Zs as h,Ds as i,Ks as j,M as k,ro as l,Sa as m,Oo as n,zs as o,Ja as p,No as q,Qi as r,Pa as s,eo as t,La as u,so as v,Aa as w,T as x,Ga as y,Va as z};
