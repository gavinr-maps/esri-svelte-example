var ke=Object.defineProperty,$e=Object.defineProperties;var Ze=Object.getOwnPropertyDescriptors;var ve=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,Ye=Object.prototype.propertyIsEnumerable;var pe=(r,e,t)=>e in r?ke(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,ee=(r,e)=>{for(var t in e||(e={}))je.call(e,t)&&pe(r,t,e[t]);if(ve)for(var t of ve(e))Ye.call(e,t)&&pe(r,t,e[t]);return r},ge=(r,e)=>$e(r,Ze(e));import{q as E,X as te,r as w,bm as he,L as qe,b9 as j,cg as Ke,b6 as Xe,b8 as ce,bb as Je,ch as Qe,b7 as et,m as xe,ci as tt,aM as be,w as ue,cj as nt,J as it,P as ye}from"./vendor.f5642644.js";import{z as Se,U as F,W as Ce,V as Te,e as ot,A as at,B as rt,C as st,D as lt,G as ct,H as ut,o as fe}from"./definitions.21e97413.js";import{o as H,f as $}from"./VertexArrayObject.e0a1a120.js";import{n as W,I as A,M as Y,E as q,w as M}from"./Utils.cc4850d4.js";import{o as K}from"./Texture.36d56722.js";import{e as ft,t as ne}from"./ShaderCompiler.42257610.js";import{e as Ie}from"./config.2a39d8a4.js";import{M as De}from"./GeometryUtils.ea8c8742.js";import{x as dt,b as mt,B as _t,U as vt,R as pt}from"./MaterialKey.4d0549e4.js";import{l as gt}from"./pixelUtils.62a09b6b.js";import{a as Pe,s as ht}from"./Container.46e88f89.js";import{x as xt}from"./earcut.f20dd8d8.js";class L{constructor(){this.name=this.constructor.name||"UnnamedBrush"}prepareState(e,t,n){}draw(e,t,n){}drawMany(e,t,n){for(const i of t)this.draw(e,i,n)}}class bt extends L{dispose(){}prepareState(e){const{context:t}=e;t.setColorMask(!0,!0,!0,!0),t.setStencilFunction(514,0,255)}draw(e,t){const{context:n}=e,{displayData:i}=t;if(E(i)||(i.state.name==="loaded"&&i.prepareForRendering(n,X,yt),i.state.name!=="attached"))return;const o=i.state.resources,a=e.painter.materialManager.getProgram(e,{vsPath:"raster/flow",fsPath:"raster/flow",attributes:X});n.setFaceCullingEnabled(!1),n.setBlendingEnabled(!0),n.setBlendFunctionSeparate(1,771,1,1),n.useProgram(a),a.setUniform1f("u_time",e.time/1e3),a.setUniform1f("u_fadeDuration",i.flowStyle.renderSettings.fadeDuration),a.setUniform1f("u_lineSpeed",i.flowStyle.renderSettings.lineSpeed),a.setUniformMatrix3fv("u_dvsMat3",t.transforms.dvs),a.setUniformMatrix3fv("u_displayViewMat3",e.state.displayViewMat3),a.setUniform4f("u_lineColor",i.flowStyle.renderSettings.lineColor[0]*e.globalOpacity,i.flowStyle.renderSettings.lineColor[1]*e.globalOpacity,i.flowStyle.renderSettings.lineColor[2]*e.globalOpacity,i.flowStyle.renderSettings.lineColor[3]*e.globalOpacity),a.setUniform1f("u_lineHalfWidth",i.flowStyle.renderSettings.lineRenderWidth/2),n.bindVAO(o.vertexArray),n.drawElements(4,o.indexBuffer.size,5125,0),i.flowStyle.animated&&t.requestRender()}}const X=new Map;X.set("a_positionAndSide",0),X.set("a_timeInfo",1),X.set("a_extrude",2);const yt={geometry:[{name:"a_positionAndSide",count:3,type:5126,offset:0,stride:32,normalized:!1},{name:"a_timeInfo",count:3,type:5126,offset:12,stride:32,normalized:!1},{name:"a_extrude",count:2,type:5126,offset:24,stride:32,normalized:!1}]};class ze{constructor(e,t){this.rctx=e,this._vertexBuffer=H.createVertex(e,35044,new Uint16Array(t)),this._vao=new $(e,new Map([["a_position",0]]),{geometry:[{name:"a_position",count:2,type:5122,offset:0,stride:4,normalized:!1}]},{geometry:this._vertexBuffer}),this._count=t.length/2}bind(){this._vao.bind()}unbind(){this._vao.unbind()}dispose(){this._vao.dispose(!1),this._vertexBuffer.dispose()}draw(){this.rctx.bindVAO(this._vao),this.rctx.drawArrays(5,0,this._count)}}const de={nearest:{defines:[],samplingMode:9728,mips:!1},bilinear:{defines:[],samplingMode:9729,mips:!1},bicubic:{defines:["bicubic"],samplingMode:9729,mips:!1},trilinear:{defines:[],samplingMode:9987,mips:!0}},St=(r,e,t)=>{if(t.samplingMode==="dynamic"){const{state:n}=r,i=e.resolution/e.pixelRatio/n.resolution,o=Math.round(r.pixelRatio)!==r.pixelRatio,a=i>1.05||i<.95;return n.rotation||a||o||e.isSourceScaled||e.rotation?de.bilinear:de.nearest}return de[t.samplingMode]};class Ct extends L{constructor(){super(...arguments),this._desc={vsPath:"raster/bitmap",fsPath:"raster/bitmap",attributes:new Map([["a_position",0],["a_texcoord",1]])}}dispose(){this._quad&&this._quad.dispose()}prepareState({context:e},t){e.setBlendingEnabled(!0),t.blendFunction==="additive"?e.setBlendFunctionSeparate(1,1,1,1):e.setBlendFunctionSeparate(1,771,1,771),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!0),e.setStencilFunction(514,t.stencilRef,255)}draw(e,t){const{context:n,renderingOptions:i,painter:o}=e;if(!t.source)return;e.timeline.begin(this.name),this._quad||(this._quad=new ze(n,[0,0,1,0,0,1,1,1]));const a=St(e,t,i),s=o.materialManager.getProgram(e,this._desc,a.defines),{coordScale:u,computedOpacity:l,transforms:d}=t;t.setSamplingProfile(a),t.bind(e.context,Se),n.useProgram(s),s.setUniformMatrix3fv("u_dvsMat3",d.dvs),s.setUniform1i("u_texture",Se),s.setUniform2fv("u_coordScale",u),s.setUniform1f("u_opacity",l),this._quad.draw(),e.timeline.end(this.name)}}function Oe(){return new Float32Array(4)}function Tt(r){const e=new Float32Array(4);return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e}function U(r,e,t,n){const i=new Float32Array(4);return i[0]=r,i[1]=e,i[2]=t,i[3]=n,i}function It(r,e){return new Float32Array(r,e,4)}function Ve(){return Oe()}function we(){return U(1,1,1,1)}function Ae(){return U(1,0,0,0)}function Me(){return U(0,1,0,0)}function Ee(){return U(0,0,1,0)}function Le(){return U(0,0,0,1)}const Dt=Ve(),Pt=we(),zt=Ae(),Ot=Me(),Vt=Ee(),wt=Le();Object.freeze({__proto__:null,create:Oe,clone:Tt,fromValues:U,createView:It,zeros:Ve,ones:we,unitX:Ae,unitY:Me,unitZ:Ee,unitW:Le,ZEROS:Dt,ONES:Pt,UNIT_X:zt,UNIT_Y:Ot,UNIT_Z:Vt,UNIT_W:wt});const At={background:{"background.frag":`uniform lowp vec4 u_color;
void main() {
gl_FragColor = u_color;
}`,"background.vert":`attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform mediump vec2 u_coord_range;
uniform mediump float u_depth;
void main() {
vec3 v_pos = u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0);
gl_Position = vec4(v_pos.xy, 0.0, 1.0);
}`},bitBlit:{"bitBlit.frag":`uniform lowp sampler2D u_tex;
uniform lowp float u_opacity;
varying mediump vec2 v_uv;
void main() {
lowp vec4 color = texture2D(u_tex, v_uv);
gl_FragColor = color *  u_opacity;
}`,"bitBlit.vert":`attribute vec2 a_pos;
attribute vec2 a_tex;
varying mediump vec2 v_uv;
void main(void) {
gl_Position = vec4(a_pos, 0.0, 1.0);
v_uv = a_tex;
}`},blend:{"blend.frag":`precision mediump float;
uniform sampler2D u_layerTexture;
uniform lowp float u_opacity;
uniform lowp float u_inFadeOpacity;
#ifndef NORMAL
uniform sampler2D u_backbufferTexture;
#endif
varying mediump vec2 v_uv;
float rgb2v(in vec3 c) {
return max(c.x, max(c.y, c.z));
}
vec3 rgb2hsv(in vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(in vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
vec3 tint(in vec3 Cb, in vec3 Cs) {
float vIn = rgb2v(Cb);
vec3 hsvTint = rgb2hsv(Cs);
vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
return hsv2rgb(hsvOut);
}
float overlay(in float Cb, in float Cs) {
return (1.0 - step(0.5, Cs)) * (1.0 - 2.0 * (1.0 - Cs ) * (1.0 - Cb)) + step(0.5, Cs) * (2.0 * Cs * Cb);
}
float colorDodge(in float Cb, in float Cs) {
return (Cb == 0.0) ? 0.0 : (Cs == 1.0) ? 1.0 : min(1.0, Cb / (1.0 - Cs));
}
float colorBurn(in float Cb, in float Cs) {
return (Cb == 1.0) ? 1.0 : (Cs == 0.0) ? 0.0 : 1.0 - min(1.0, (1.0 - Cb) / Cs);
}
float hardLight(in float Cb, in float Cs) {
return (1.0 - step(0.5, Cs)) * (2.0 * Cs * Cb) + step(0.5, Cs) * (1.0 - 2.0 * (1.0 - Cs) * (1.0 - Cb));
}
float reflectBlend(in float Cb, in float Cs) {
return (Cs == 1.0) ? Cs : min(Cb * Cb / (1.0 - Cs), 1.0);
}
float softLight(in float Cb, in float Cs) {
if (Cs <= 0.5) {
return Cb - (1.0 - 2.0 * Cs) * Cb * (1.0 - Cb);
}
if (Cb <= 0.25) {
return Cb + (2.0 * Cs - 1.0) * Cb * ((16.0 * Cb - 12.0) * Cb + 3.0);
}
return Cb + (2.0 * Cs - 1.0) * (sqrt(Cb) - Cb);
}
float vividLight(in float Cb, in float Cs) {
return (1.0 - step(0.5, Cs)) * colorBurn(Cb, 2.0 * Cs) + step(0.5, Cs) * colorDodge(Cb, (2.0 * (Cs - 0.5)));
}
float minv3(in vec3 c) {
return min(min(c.r, c.g), c.b);
}
float maxv3(in vec3 c) {
return max(max(c.r, c.g), c.b);
}
float lumv3(in vec3 c) {
return dot(c, vec3(0.3, 0.59, 0.11));
}
float satv3(vec3 c) {
return maxv3(c) - minv3(c);
}
vec3 clipColor(vec3 color) {
float lum = lumv3(color);
float mincol = minv3(color);
float maxcol = maxv3(color);
if (mincol < 0.0) {
color = lum + ((color - lum) * lum) / (lum - mincol);
}
if (maxcol > 1.0) {
color = lum + ((color - lum) * (1.0 - lum)) / (maxcol - lum);
}
return color;
}
vec3 setLum(vec3 cbase, vec3 clum) {
float lbase = lumv3(cbase);
float llum = lumv3(clum);
float ldiff = llum - lbase;
vec3 color = cbase + vec3(ldiff);
return clipColor(color);
}
vec3 setLumSat(vec3 cbase, vec3 csat, vec3 clum)
{
float minbase = minv3(cbase);
float sbase = satv3(cbase);
float ssat = satv3(csat);
vec3 color;
if (sbase > 0.0) {
color = (cbase - minbase) * ssat / sbase;
} else {
color = vec3(0.0);
}
return setLum(color, clum);
}
void main() {
vec4 src = texture2D(u_layerTexture, v_uv);
#ifdef NORMAL
gl_FragColor = src *  u_opacity;
#else
vec4 dst = texture2D(u_backbufferTexture, v_uv);
vec3 Cs = src.a == 0.0 ? src.rgb : vec3(src.rgb / src.a);
vec3 Cb = dst.a == 0.0 ? dst.rgb : vec3(dst.rgb / dst.a);
float as = u_opacity * src.a;
float ab = dst.a;
#ifdef DESTINATION_OVER
gl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb, as + ab - as * ab);
#endif
#ifdef SOURCE_IN
vec4 color = vec4(as * Cs * ab, as * ab);
vec4 fadeColor = (1.0 - u_opacity) * u_inFadeOpacity * vec4(ab * Cb, ab);
gl_FragColor = color + fadeColor;
#endif
#ifdef DESTINATION_IN
vec4 color = vec4(ab * Cb * as, ab * as);
vec4 fadeColor = (1.0 - u_opacity) * u_inFadeOpacity * vec4(ab * Cb, ab);
gl_FragColor = color + fadeColor;
#endif
#ifdef SOURCE_OUT
gl_FragColor = vec4(as * Cs * (1.0 - ab), as * (1.0 - ab));
#endif
#ifdef DESTINATION_OUT
gl_FragColor = vec4(ab * Cb * (1.0 - as), ab * (1.0 - as));
#endif
#ifdef SOURCE_ATOP
gl_FragColor = vec4(as * Cs * ab + ab * Cb * (1.0 - as), ab);
#endif
#ifdef DESTINATION_ATOP
gl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb * as, as);
#endif
#ifdef XOR
gl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb * (1.0 - as),
as * (1.0 - ab) + ab * (1.0 - as));
#endif
#ifdef MULTIPLY
gl_FragColor = vec4(as * Cs * ab * Cb + (1.0 - ab) * as * Cs + (1.0 - as) * ab * Cb,
as + ab * (1.0 - as));
#endif
#ifdef SCREEN
gl_FragColor = vec4((Cs + Cb - Cs * Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef OVERLAY
vec3 f = vec3(overlay(Cb.r, Cs.r), overlay(Cb.g, Cs.g), overlay(Cb.b, Cs.b));
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef DARKEN
gl_FragColor = vec4(min(Cs, Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef LIGHTER
gl_FragColor = vec4(as * Cs + ab * Cb, as + ab);
#endif
#ifdef LIGHTEN
gl_FragColor = vec4(max(Cs, Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef COLOR_DODGE
vec3 f = vec3(colorDodge(Cb.r, Cs.r), colorDodge(Cb.g, Cs.g), colorDodge(Cb.b, Cs.b));
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef COLOR_BURN
vec3 f = vec3(colorBurn(Cb.r, Cs.r), colorBurn(Cb.g, Cs.g), colorBurn(Cb.b, Cs.b));
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef HARD_LIGHT
vec3 f = vec3(hardLight(Cb.r, Cs.r), hardLight(Cb.g, Cs.g), hardLight(Cb.b, Cs.b));
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef SOFT_LIGHT
vec3 f = vec3(softLight(Cb.r, Cs.r), softLight(Cb.g, Cs.g), softLight(Cb.b, Cs.b));
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef DIFFERENCE
gl_FragColor = vec4(abs(Cb - Cs) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef EXCLUSION
vec3 f = Cs + Cb - 2.0 * Cs * Cb;
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef INVERT
gl_FragColor = vec4((1.0 - Cb) * as * ab + Cb * ab * (1.0 - as), ab);
#endif
#ifdef VIVID_LIGHT
vec3 f = vec3(vividLight(Cb.r, Cs.r),
vividLight(Cb.g, Cs.g),
vividLight(Cb.b, Cs.b));
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef HUE
vec3 f = setLumSat(Cs,Cb,Cb);
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef SATURATION
vec3 f = setLumSat(Cb,Cs,Cb);
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef COLOR
vec3 f = setLum(Cs,Cb);
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef LUMINOSITY
vec3 f = setLum(Cb,Cs);
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef PLUS
gl_FragColor = clamp(vec4(src.r + Cb.r, src.g + Cb.g, src.b + Cb.b, as + ab), 0.0, 1.0);
#endif
#ifdef MINUS
gl_FragColor = vec4(clamp(vec3(Cb.r - src.r, Cb.g - src.g, Cb.b - src.b), 0.0, 1.0), ab * as);
#endif
#ifdef AVERAGE
vec3 f = (Cb + Cs) / 2.0;
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#ifdef REFLECT
vec3 f = vec3(reflectBlend(Cb.r, Cs.r),
reflectBlend(Cb.g, Cs.g),
reflectBlend(Cb.b, Cs.b));
gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),
as + ab * (1.0 - as));
#endif
#endif
}`,"blend.vert":`attribute vec2 a_position;
varying mediump vec2 v_uv;
void main(void) {
gl_Position = vec4(a_position , 0.0, 1.0);
v_uv = (a_position + 1.0) / 2.0;
}`},filtering:{"bicubic.glsl":`vec4 computeWeights(float v) {
float b = 1.0 / 6.0;
float v2 = v * v;
float v3 = v2 * v;
float w0 = b * (-v3 + 3.0 * v2 - 3.0 * v + 1.0);
float w1 = b * (3.0 * v3  - 6.0 * v2 + 4.0);
float w2 = b * (-3.0 * v3 + 3.0 * v2 + 3.0 * v + 1.0);
float w3 = b * v3;
return vec4(w0, w1, w2, w3);
}
vec4 bicubicOffsetsAndWeights(float v) {
vec4 w = computeWeights(v);
float g0 = w.x + w.y;
float g1 = w.z + w.w;
float h0 = 1.0 - (w.y / g0) + v;
float h1 = 1.0 + (w.w / g1) - v;
return vec4(h0, h1, g0, g1);
}
vec4 sampleBicubicBSpline(sampler2D sampler, vec2 coords, vec2 texSize) {
vec2 eX = vec2(1.0 / texSize.x, 0.0);
vec2 eY = vec2(0.0, 1.0 / texSize.y);
vec2 texel = coords * texSize - 0.5;
vec3 hgX = bicubicOffsetsAndWeights(fract(texel).x).xyz;
vec3 hgY = bicubicOffsetsAndWeights(fract(texel).y).xyz;
vec2 coords10 = coords + hgX.x * eX;
vec2 coords00 = coords - hgX.y * eX;
vec2 coords11 = coords10 + hgY.x * eY;
vec2 coords01 = coords00 + hgY.x * eY;
coords10 = coords10 - hgY.y * eY;
coords00 = coords00 - hgY.y * eY;
vec4 color00 = texture2D(sampler, coords00);
vec4 color10 = texture2D(sampler, coords10);
vec4 color01 = texture2D(sampler, coords01);
vec4 color11 = texture2D(sampler, coords11);
color00 = mix(color00, color01, hgY.z);
color10 = mix(color10, color11, hgY.z);
color00 = mix(color00, color10, hgX.z);
return color00;
}`,"bilinear.glsl":`vec4 sampleBilinear(sampler2D sampler, vec2 coords, vec2 texSize) {
vec2 texelStart = floor(coords * texSize);
vec2 coord0 = texelStart / texSize;
vec2 coord1 = (texelStart +  vec2(1.0, 0.0)) / texSize;
vec2 coord2 = (texelStart +  vec2(0.0, 1.0)) / texSize;
vec2 coord3 = (texelStart +  vec2(1.0, 1.0)) / texSize;
vec4 color0 = texture2D(sampler, coord0);
vec4 color1 = texture2D(sampler, coord1);
vec4 color2 = texture2D(sampler, coord2);
vec4 color3 = texture2D(sampler, coord3);
vec2 blend = fract(coords * texSize);
vec4 color01 = mix(color0, color1, blend.x);
vec4 color23 = mix(color2, color3, blend.x);
vec4 color = mix(color01, color23, blend.y);
#ifdef NNEDGE
float alpha = floor(color0.a * color1.a * color2.a * color3.a + 0.5);
color = color * alpha + (1.0 - alpha) * texture2D(sampler, coords);
#endif
return color;
}`,"epx.glsl":`vec4 sampleEPX(sampler2D sampler, float size, vec2 coords, vec2 texSize) {
vec2 invSize = 1.0 / texSize;
vec2 texel = coords * texSize;
vec2 texel_i = floor(texel);
vec2 texel_frac = fract(texel);
vec4 colorP = texture2D(sampler, texel_i * invSize);
vec4 colorP1 = vec4(colorP);
vec4 colorP2 = vec4(colorP);
vec4 colorP3 = vec4(colorP);
vec4 colorP4 = vec4(colorP);
vec4 colorA = texture2D(sampler, (texel_i - vec2(0.0, 1.0)) * invSize);
vec4 colorB = texture2D(sampler, (texel_i + vec2(1.0, 0.0)) * invSize);
vec4 colorC = texture2D(sampler, (texel_i - vec2(1.0, 0.0)) * invSize);
vec4 colorD = texture2D(sampler, (texel_i + vec2(0.0, 1.0)) * invSize);
if (colorC == colorA && colorC != colorD && colorA != colorB) {
colorP1 = colorA;
}
if (colorA == colorB && colorA != colorC && colorB != colorD) {
colorP2 = colorB;
}
if (colorD == colorC && colorD != colorB && colorC != colorA) {
colorP3 = colorC;
}
if (colorB == colorD && colorB != colorA && colorD != colorC) {
colorP4 = colorD;
}
vec4 colorP12 = mix(colorP1, colorP2, texel_frac.x);
vec4 colorP34 = mix(colorP1, colorP2, texel_frac.x);
return mix(colorP12, colorP34, texel_frac.y);
}`},fx:{integrate:{"integrate.frag":`precision mediump float;
uniform lowp sampler2D u_sourceTexture;
uniform lowp sampler2D u_maskTexture;
uniform mediump float u_zoomLevel;
uniform highp float u_timeDelta;
uniform highp float u_animationTime;
varying highp vec2 v_texcoord;
#include <materials/utils.glsl>
void main()
{
#ifdef DELTA
vec4 texel = texture2D(u_sourceTexture, v_texcoord);
vec4 data0 = texture2D(u_maskTexture, v_texcoord);
float flags = data0.r * 255.0;
float groupMinZoom = data0.g * 255.0;
float isVisible = getFilterBit(flags, 0);
float wouldClip = step(groupMinZoom, u_zoomLevel);
float direction = wouldClip * 1.0 + (1.0 - wouldClip) * -1.0;
float dt = u_timeDelta / max(u_animationTime, 0.0001);
vec4 nextState = vec4(texel + direction * dt);
gl_FragColor =  vec4(nextState);
#elif defined(UPDATE)
vec4 texel = texture2D(u_sourceTexture, v_texcoord);
gl_FragColor = texel;
#endif
}`,"integrate.vert":`precision mediump float;
attribute vec2 a_pos;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_pos;
gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);
}`}},highlight:{"blur.frag":`varying mediump vec2 v_texcoord;
uniform mediump vec4 u_direction;
uniform mediump mat4 u_channelSelector;
uniform mediump float u_sigma;
uniform sampler2D u_texture;
mediump float gauss1(mediump vec2 dir) {
return exp(-dot(dir, dir) / (2.0 * u_sigma * u_sigma));
}
mediump vec4 selectChannel(mediump vec4 sample) {
return u_channelSelector * sample;
}
void accumGauss1(mediump float i, inout mediump float tot, inout mediump float weight) {
mediump float w = gauss1(i * u_direction.xy);
tot += selectChannel(texture2D(u_texture, v_texcoord + i * u_direction.zw))[3] * w;
weight += w;
}
void main(void) {
mediump float tot = 0.0;
mediump float weight = 0.0;
accumGauss1(-5.0, tot, weight);
accumGauss1(-4.0, tot, weight);
accumGauss1(-3.0, tot, weight);
accumGauss1(-2.0, tot, weight);
accumGauss1(-1.0, tot, weight);
accumGauss1(0.0, tot, weight);
accumGauss1(1.0, tot, weight);
accumGauss1(2.0, tot, weight);
accumGauss1(3.0, tot, weight);
accumGauss1(4.0, tot, weight);
accumGauss1(5.0, tot, weight);
gl_FragColor = vec4(0.0, 0.0, 0.0, tot / weight);
}`,"highlight.frag":`varying mediump vec2 v_texcoord;
uniform sampler2D u_texture;
uniform mediump float u_sigma;
uniform sampler2D u_shade;
uniform mediump vec2 u_minMaxDistance;
mediump float estimateDistance() {
mediump float y = texture2D(u_texture, v_texcoord)[3];
const mediump float y0 = 0.5;
mediump float m0 = 1.0 / (sqrt(2.0 * 3.1415) * u_sigma);
mediump float d = (y - y0) / m0;
return d;
}
mediump vec4 shade(mediump float d) {
mediump float mappedDistance = (d - u_minMaxDistance.x) / (u_minMaxDistance.y - u_minMaxDistance.x);
mappedDistance = clamp(mappedDistance, 0.0, 1.0);
return texture2D(u_shade, vec2(mappedDistance, 0.5));
}
void main(void) {
mediump float d = estimateDistance();
gl_FragColor = shade(d);
}`,"textured.vert":`attribute mediump vec2 a_position;
attribute mediump vec2 a_texcoord;
varying mediump vec2 v_texcoord;
void main(void) {
gl_Position = vec4(a_position, 0.0, 1.0);
v_texcoord = a_texcoord;
}`},magnifier:{"magnifier.frag":`uniform lowp vec4 u_background;
uniform mediump sampler2D u_readbackTexture;
uniform mediump sampler2D u_maskTexture;
uniform mediump sampler2D u_overlayTexture;
uniform bool u_maskEnabled;
uniform bool u_overlayEnabled;
varying mediump vec2 v_texCoord;
const lowp float barrelFactor = 1.1;
lowp vec2 barrel(lowp vec2 uv) {
lowp vec2 uvn = uv * 2.0 - 1.0;
if (uvn.x == 0.0 && uvn.y == 0.0) {
return vec2(0.5, 0.5);
}
lowp float theta = atan(uvn.y, uvn.x);
lowp float r = pow(length(uvn), barrelFactor);
return r * vec2(cos(theta), sin(theta)) * 0.5 + 0.5;
}
void main(void)
{
lowp vec4 color = texture2D(u_readbackTexture, barrel(v_texCoord));
color = (color + (1.0 - color.a) * u_background);
lowp float mask = u_maskEnabled ? texture2D(u_maskTexture, v_texCoord).a : 1.0;
color *= mask;
lowp vec4 overlayColor = u_overlayEnabled ? texture2D(u_overlayTexture, v_texCoord) : vec4(0);
gl_FragColor = overlayColor + (1.0 - overlayColor.a) * color;
}`,"magnifier.vert":`precision mediump float;
attribute mediump vec2 a_pos;
uniform mediump vec4 u_drawPos;
varying mediump vec2 v_texCoord;
void main(void)
{
v_texCoord = a_pos;
gl_Position = vec4(u_drawPos.xy + vec2(a_pos - 0.5) * u_drawPos.zw, 0.0, 1.0);
}`},materials:{"attributeData.glsl":`uniform highp sampler2D u_attributeData0;
uniform highp sampler2D u_attributeData1;
uniform highp sampler2D u_attributeData2;
uniform highp sampler2D u_attributeData3;
uniform highp int u_attributeTextureSize;
highp vec2 getAttributeDataCoords(in highp vec3 id) {
highp vec3  texel = unpackDisplayIdTexel(id);
highp float size = float(u_attributeTextureSize);
highp float u32 = float(int(texel.r) + int(texel.g) * 256 + int(texel.b) * 256 * 256);
highp float col = mod(u32, size);
highp float row = (u32 - col) / size;
highp float u = col / size;
highp float v = row / size;
return vec2(u, v);
}
highp vec4 getAttributeData0(in highp vec3 id) {
vec2 coords = getAttributeDataCoords(id);
return texture2D(u_attributeData0, coords);
}
highp vec4 getAttributeData1(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(u_attributeData1, coords);
}
highp vec4 getAttributeData2(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(u_attributeData2, coords);
}
highp vec4 getAttributeData3(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(u_attributeData3, coords);
}
float u88VVToFloat(in vec2 v) {
bool isMagic = v.x == 255.0 && v.y == 255.0;
if (isMagic) {
return NAN_MAGIC_NUMBER;
}
return (v.x + v.y * float(0x100)) - 32768.0;
}`,"constants.glsl":`const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float SIGNED_BYTE_TO_UNSIGNED = 128.0;
const float POSITION_PRECISION = 1.0 / 8.0;
const float FILL_POSITION_PRECISION = 1.0 / 1.0;
const float SOFT_EDGE_RATIO = 1.0;
const float THIN_LINE_WIDTH_FACTOR = 1.1;
const float THIN_LINE_HALF_WIDTH = 1.0;
const float EXTRUDE_SCALE_PLACEMENT_PADDING = 1.0 / 4.0;
const float OFFSET_PRECISION = 1.0 / 8.0;
const float OUTLINE_SCALE = 1.0 / 5.0;
const float SDF_FONT_SIZE = 24.0;
const float MAX_SDF_DISTANCE = 8.0;
const float PLACEMENT_PADDING = 8.0;
const float EPSILON = 0.0000001;
const int MAX_FILTER_COUNT = 2;
const int ATTR_VV_SIZE = 0;
const int ATTR_VV_COLOR = 1;
const int ATTR_VV_OPACITY = 2;
const int ATTR_VV_ROTATION = 3;
const highp float NAN_MAGIC_NUMBER = 1e-30;
const int BITSET_GENERIC_LOCK_COLOR = 1;
const int BITSET_MARKER_ALIGNMENT_MAP = 0;
const int BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE = 2;
const int BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY = 3;
const int BITSET_TYPE_FILL_OUTLINE = 0;
const int BITSET_LINE_SCALE_DASH = 2;`,fill:{"common.glsl":`#ifdef PATTERN
uniform mediump vec2 u_mosaicSize;
#endif
#ifdef DOT_DENSITY
uniform lowp vec4 u_isActive[ 2 ];
uniform highp float u_dotValue;
uniform highp float u_tileDotsOverArea;
uniform highp float u_dotTextureDotCount;
uniform mediump float u_tileZoomFactor;
#endif
varying highp vec3 v_id;
varying lowp vec4 v_color;
varying lowp float v_opacity;
varying mediump vec4 v_aux1;
#ifdef PATTERN
varying mediump vec2 v_tileTextureCoord;
#endif
#ifdef OUTLINED_FILL
varying lowp float v_isOutline;
#endif
#ifdef DOT_DENSITY
varying highp vec2 v_dotTextureCoords;
varying highp vec4 v_dotThresholds[ 2 ];
#endif`,"fill.frag":`precision highp float;
#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/fill/common.glsl>
#ifdef PATTERN
uniform lowp sampler2D u_texture;
#endif
#ifdef DOT_DENSITY
uniform mediump mat4 u_dotColors[ 2 ];
uniform sampler2D u_dotTextures[ 2 ];
uniform vec4 u_dotBackgroundColor;
#endif
#ifdef OUTLINED_FILL
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.frag>
lowp vec4 drawLine() {
float v_lineWidth = v_aux1.x;
vec2  v_normal    = v_aux1.yz;
LineData inputs = LineData(
v_color,
v_normal,
v_lineWidth,
v_opacity,
v_id
);
return shadeLine(inputs);
}
#endif
lowp vec4 drawFill() {
lowp vec4 out_color = vec4(0.);
#ifdef ID
out_color = vec4(v_id, 0.0);
#elif defined(PATTERN)
mediump vec4 v_tlbr = v_aux1;
mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
out_color = v_opacity * v_color * color;
#elif defined(DOT_DENSITY) && !defined(HIGHLIGHT)
vec4 textureThresholds0 = texture2D(u_dotTextures[0], v_dotTextureCoords);
vec4 textureThresholds1 = texture2D(u_dotTextures[1], v_dotTextureCoords);
vec4 difference0 = v_dotThresholds[0] - textureThresholds0;
vec4 difference1 = v_dotThresholds[1] - textureThresholds1;
#ifdef DD_DOT_BLENDING
vec4 isPositive0 = step(0.0, difference0);
vec4 isPositive1 = step(0.0, difference1);
float weightSum = dot(isPositive0, difference0) + dot(isPositive1, difference1);
float lessThanEqZero = step(weightSum, 0.0);
float greaterThanZero = 1.0 - lessThanEqZero ;
float divisor = (weightSum + lessThanEqZero);
vec4 weights0 = difference0 * isPositive0 / divisor;
vec4 weights1 = difference1 * isPositive1 / divisor;
vec4 dotColor = u_dotColors[0] * weights0 + u_dotColors[1] * weights1;
vec4 preEffectColor = greaterThanZero * dotColor + lessThanEqZero * u_dotBackgroundColor;
#else
float diffMax = max(max4(difference0), max4(difference1));
float lessThanZero = step(diffMax, 0.0);
float greaterOrEqZero = 1.0 - lessThanZero;
vec4 isMax0 = step(diffMax, difference0);
vec4 isMax1 = step(diffMax, difference1);
vec4 dotColor = u_dotColors[0] * isMax0 + u_dotColors[1] * isMax1;
vec4 preEffectColor = greaterOrEqZero * dotColor + lessThanZero * u_dotBackgroundColor;
#endif
out_color = preEffectColor;
#else
out_color = v_opacity * v_color;
#endif
#ifdef HIGHLIGHT
out_color.a = 1.0;
#endif
return out_color;
}
void main() {
#ifdef OUTLINED_FILL
if (v_isOutline > 0.5) {
gl_FragColor = drawLine();
} else {
gl_FragColor = drawFill();
}
#else
gl_FragColor = drawFill();
#endif
}`,"fill.vert":`#define PACKED_LINE
precision highp float;
attribute float a_bitset;
#ifdef DOT_DENSITY
attribute float a_inverseArea;
vec4 a_color = vec4(0.0, 0.0, 0.0, 1.0);
vec2 a_zoomRange = vec2(0.0, 10000.0);
#else
attribute vec4 a_color;
attribute vec4 a_aux2;
attribute vec4 a_aux3;
#ifndef SIMPLE
attribute vec4 a_aux1;
attribute vec2 a_zoomRange;
#else
vec2 a_zoomRange = vec2(0.0, 10000.0);
#endif
#endif
uniform vec2 u_tileOffset;
#include <materials/vcommon.glsl>
#include <materials/fill/common.glsl>
#ifdef DOT_DENSITY
vec4 dotThreshold(vec4 featureAttrOverFeatureArea, float dotValue, float tileDotsOverArea) {
return featureAttrOverFeatureArea * (1.0 / dotValue)  * (1.0 / tileDotsOverArea);
}
#endif
#ifdef OUTLINED_FILL
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.vert>
void drawLine(out lowp vec4 out_color, out highp vec3 out_pos) {
LineData outputs = buildLine(
out_pos,
a_id,
a_pos,
a_color,
(a_aux3.xy - 128.) / 16.,
(a_aux3.zw - 128.) / 16.,
0.,
a_aux2.z / 16.,
a_bitset,
vec4(0.),
vec2(0.),
a_aux2.w / 16.
);
v_id      = outputs.id;
v_color   = outputs.color;
v_opacity = outputs.opacity;
v_aux1    = vec4(outputs.lineHalfWidth, outputs.normal, 0.);
out_color = outputs.color;
}
#endif
void drawFill(out lowp vec4 out_color, out highp vec3 out_pos) {
float a_bitSet = a_bitset;
v_color   = getColor(a_color, a_bitSet, BITSET_GENERIC_LOCK_COLOR);
v_opacity = getOpacity();
v_id      = norm(a_id);
out_color = v_color;
out_pos   = u_dvsMat3 * vec3(a_pos * FILL_POSITION_PRECISION, 1.);
#ifdef PATTERN
vec4  a_tlbr   = a_aux1;
float a_width  = a_aux2.x;
float a_height = a_aux2.y;
vec2  a_offset = a_aux2.zw;
vec2  a_scale  = a_aux3.xy;
float a_angle  = a_aux3.z;
vec2 scale = (1.0 / SIGNED_BYTE_TO_UNSIGNED) * a_scale;
float width = u_pixelRatio * u_zoomFactor * a_width * scale.x;
float height = u_pixelRatio * u_zoomFactor * a_height * scale.y;
float angle = C_256_TO_RAD * a_angle;
float sinA = sin(angle);
float cosA = cos(angle);
mat3 patternMatrix = mat3(cosA / width, sinA / height, 0,
-sinA / width, cosA / height, 0,
0,            0,             1);
vec2 tileOffset = vec2(u_tileOffset.x * cosA - u_tileOffset.y * sinA, u_tileOffset.x * sinA + u_tileOffset.y * cosA);
tileOffset = mod(tileOffset, vec2(a_aux2.x, a_aux2.y));
vec2 symbolOffset = (a_offset - tileOffset - SIGNED_BYTE_TO_UNSIGNED) / vec2(width, height);
v_tileTextureCoord = (patternMatrix * vec3(a_pos * FILL_POSITION_PRECISION, 1.0)).xy - symbolOffset;
v_aux1 = a_tlbr / u_mosaicSize.xyxy;
#elif defined(DOT_DENSITY)
vec4 ddAttributeData0 = getAttributeData2(a_id) * u_isActive[0] * a_inverseArea;
vec4 ddAttributeData1 = getAttributeData3(a_id) * u_isActive[1] * a_inverseArea;
float size = u_tileZoomFactor * 512.0 * 1.0 / u_pixelRatio;
v_dotThresholds[0] = dotThreshold(ddAttributeData0, u_dotValue, u_tileDotsOverArea);
v_dotThresholds[1] = dotThreshold(ddAttributeData1, u_dotValue, u_tileDotsOverArea);
v_dotTextureCoords = (a_pos * FILL_POSITION_PRECISION + 0.5) / size;
#endif
}
void main()
{
INIT;
lowp vec4 color = vec4(0.);
highp vec3 pos  = vec3(0.);
#ifdef OUTLINED_FILL
v_isOutline = getBit(a_bitset, BITSET_TYPE_FILL_OUTLINE);
if (v_isOutline > 0.5) {
drawLine(color, pos);
} else {
drawFill(color, pos);
}
#else
drawFill(color, pos);
#endif
gl_Position = vec4(clip(color, pos, getFilterFlags(), a_zoomRange), 1.0);
}`},icon:{"common.glsl":`uniform lowp vec2 u_mosaicSize;
varying lowp vec4 v_color;
varying highp vec3 v_id;
varying highp vec4 v_sizeTex;
varying mediump vec3 v_pos;
varying highp float v_filters;
varying lowp float v_opacity;
#ifdef SDF
varying lowp vec4 v_outlineColor;
varying mediump float v_outlineWidth;
varying mediump float v_distRatio;
varying mediump float v_overridingOutlineColor;
varying mediump float v_isThin;
#endif`,"icon.frag":`precision mediump float;
#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <util/encoding.glsl>
#include <materials/constants.glsl>
#include <materials/icon/common.glsl>
uniform lowp sampler2D u_texture;
void main()
{
vec2 v_size = v_sizeTex.xy;
vec2 v_tex  = v_sizeTex.zw;
#ifdef SDF
lowp vec4 fillPixelColor = v_color;
float d = 0.5 - rgba2float(texture2D(u_texture, v_tex));
float size = max(v_size.x, v_size.y);
float dist = d * size * SOFT_EDGE_RATIO * v_distRatio;
fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);
float outlineWidth = v_outlineWidth;
#ifdef HIGHLIGHT
outlineWidth = max(outlineWidth, 4.0 * v_isThin);
#endif
if (outlineWidth > 0.25) {
lowp vec4 outlinePixelColor = v_overridingOutlineColor * v_color + (1.0 - v_overridingOutlineColor) * v_outlineColor;
float clampedOutlineSize = min(outlineWidth, size);
outlinePixelColor *= clamp(0.5 - abs(dist) + clampedOutlineSize * 0.5, 0.0, 1.0);
gl_FragColor = v_opacity * ((1.0 - outlinePixelColor.a) * fillPixelColor + outlinePixelColor);
}
else {
gl_FragColor = v_opacity * fillPixelColor;
}
#else
lowp vec4 texColor = texture2D(u_texture, v_tex);
gl_FragColor = v_opacity * texColor * v_color;
#endif
#ifdef HIGHLIGHT
gl_FragColor.a = step(1.0 / 255.0, gl_FragColor.a);
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = vec4(v_id, 0.0);
#endif
}`,"icon.vert":`precision highp float;
attribute vec4 a_color;
attribute vec4 a_outlineColor;
attribute vec4 a_sizeAndOutlineWidth;
attribute vec2 a_vertexOffset;
attribute vec2 a_texCoords;
attribute vec2 a_bitSetAndDistRatio;
attribute vec2 a_zoomRange;
#include <materials/vcommon.glsl>
#include <materials/icon/common.glsl>
vec2 getMarkerSize(inout vec2 offset, inout vec2 baseSize, inout float outlineSize, in float referenceSize, in float bitSet) {
#ifdef VV_SIZE
float r = getSize(baseSize.y) / referenceSize;
baseSize.xy *= r;
offset.xy *= r;
float scaleSymbolProportionally = getBit(bitSet, BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY);
outlineSize *= scaleSymbolProportionally * (r - 1.0) + 1.0;
#endif
return baseSize;
}
vec3 getOffset(in vec2 in_offset, float a_bitSet) {
float isMapAligned = getBit(a_bitSet, BITSET_MARKER_ALIGNMENT_MAP);
vec3  offset       = getRotation() * vec3(in_offset, 0.0);
return getMatrix(isMapAligned) * offset;
}
void main()
{
INIT;
vec2  a_size   = a_sizeAndOutlineWidth.xy * a_sizeAndOutlineWidth.xy / 128.0;
vec2  a_offset = a_vertexOffset / 16.0;
float a_outlineSize = a_sizeAndOutlineWidth.z * a_sizeAndOutlineWidth.z / 128.0;
float a_bitSet = a_bitSetAndDistRatio.x;
vec2 v_size = getMarkerSize(a_offset, a_size, a_outlineSize, a_sizeAndOutlineWidth.w * a_sizeAndOutlineWidth.w / 128.0, a_bitSet);
vec2 v_tex      = a_texCoords / u_mosaicSize;
v_color    = getColor(a_color, a_bitSet, BITSET_GENERIC_LOCK_COLOR);
v_opacity  = getOpacity();
v_id       = norm(a_id);
v_filters  = getFilterFlags();
v_pos      = u_dvsMat3 * vec3(a_pos * POSITION_PRECISION, 1.0) + getOffset(a_offset, a_bitSet);
v_sizeTex  = vec4(v_size.xy, v_tex.xy);
#ifdef SDF
v_isThin   = getBit(a_bitSet, BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE);
#ifdef VV_COLOR
v_overridingOutlineColor = v_isThin;
#else
v_overridingOutlineColor = 0.0;
#endif
v_outlineWidth = min(a_outlineSize, max(max(v_size.x, v_size.y) - 0.99, 0.0));
v_outlineColor = a_outlineColor;
v_distRatio = a_bitSetAndDistRatio.y / 126.0;
#endif
gl_Position = vec4(clip(v_color, v_pos, v_filters, a_zoomRange), 1.0);
}`},label:{"common.glsl":`uniform mediump float u_zoomLevel;
uniform mediump float u_mapRotation;
uniform mediump float u_mapAligned;
uniform mediump vec2 u_mosaicSize;
varying mediump float v_antialiasingWidth;
varying mediump float v_edgeDistanceOffset;
varying mediump vec2 v_tex;
varying mediump vec4 v_color;
varying lowp vec4 v_animation;`,"label.frag":"#include <materials/text/text.frag>","label.vert":`precision highp float;
#include <materials/vcommon.glsl>
#include <materials/text/common.glsl>
attribute vec4 a_color;
attribute vec4 a_haloColor;
attribute vec4 a_texAndSize;
attribute vec4 a_refSymbolAndPlacementOffset;
attribute vec4 a_glyphData;
attribute vec2 a_vertexOffset;
attribute vec2 a_texCoords;
uniform float u_isHalo;
uniform float u_mapRotation;
uniform float u_mapAligned;
float getZ(in float minZoom, in float maxZoom, in float angle) {
float glyphAngle = angle * 360.0 / 254.0;
float mapAngle = u_mapRotation * 360.0 / 254.0;
float diffAngle = min(360.0 - abs(mapAngle - glyphAngle), abs(mapAngle - glyphAngle));
float z = 0.0;
z += u_mapAligned * (2.0 * (1.0 - step(minZoom, u_currentZoom)));
z += u_mapAligned * 2.0 * step(90.0, diffAngle);
z += 2.0 * (1.0 - step(u_currentZoom, maxZoom));
return z;
}
void main()
{
INIT;
float groupMinZoom    = getMinZoom();
float glyphMinZoom    = a_glyphData.x;
float glyphMaxZoom    = a_glyphData.y;
float glyphAngle      = a_glyphData.z;
float a_minZoom          = max(groupMinZoom, glyphMinZoom);
float a_placementPadding = a_refSymbolAndPlacementOffset.x * EXTRUDE_SCALE_PLACEMENT_PADDING;
vec2  a_placementDir     = unpack_u8_nf32(a_refSymbolAndPlacementOffset.zw);
float a_refSymbolSize    = a_refSymbolAndPlacementOffset.y;
float fontSize           = a_texAndSize.z;
float haloSize           = a_texAndSize.w * OUTLINE_SCALE;
vec2  vertexOffset = a_vertexOffset * OFFSET_PRECISION;
vec3  pos          = vec3(a_pos * POSITION_PRECISION, 1.0);
float z            = getZ(a_minZoom, glyphMaxZoom, glyphAngle);
float fontScale    = fontSize / SDF_FONT_SIZE;
float halfSize     = getSize(a_refSymbolSize) / 2.0;
float animation    = pow(getAnimationState(), vec4(2.0)).r;
v_color     = animation * ((1.0 - u_isHalo) * a_color + (u_isHalo * a_haloColor));
v_opacity   = 1.0;
v_tex       = a_texCoords / u_mosaicSize;
v_edgeDistanceOffset = u_isHalo * haloSize / fontScale / MAX_SDF_DISTANCE;
v_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;
vec2 placementOffset = a_placementDir * (halfSize + a_placementPadding);
vec3 glyphOffset     = u_displayMat3 * vec3(vertexOffset + placementOffset, 0.0);
vec3 v_pos           = vec3((u_dvsMat3 * pos + glyphOffset).xy, z);
gl_Position = vec4(applyFilterLabels(v_color, v_pos, getFilterFlags()), 1.0);
#ifdef DEBUG
v_color = vec4(a_color.rgb, z == 0.0 ? 1.0 : 0.645);
#endif
}`},line:{"common.glsl":`varying lowp vec4 v_color;
varying highp vec3 v_id;
varying mediump vec2 v_normal;
varying mediump float v_lineHalfWidth;
varying lowp float v_opacity;
#ifdef PATTERN
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
#endif
#if defined(PATTERN) || defined(SDF)
varying highp float v_accumulatedDistance;
#endif
#ifdef SDF
varying mediump float v_lineWidthRatio;
#endif`,"line.frag":`precision lowp float;
#include <util/encoding.glsl>
#include <materials/constants.glsl>
#include <materials/line/common.glsl>
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.frag>
void main()
{
LineData inputs = LineData(
v_color,
v_normal,
v_lineHalfWidth,
v_opacity,
#ifndef OUTLINED_FILL
#ifdef PATTERN
v_tlbr,
v_patternSize,
#endif
#ifdef SDF
v_lineWidthRatio,
#endif
#if defined(PATTERN) || defined(SDF)
v_accumulatedDistance,
#endif
#endif
v_id
);
gl_FragColor = shadeLine(inputs);
}`,"line.vert":`precision highp float;
attribute vec4 a_color;
attribute vec4 a_offsetAndNormal;
attribute vec2 a_accumulatedDistanceAndHalfWidth;
attribute vec4 a_tlbr;
attribute vec4 a_segmentDirection;
attribute vec2 a_aux;
attribute vec2 a_zoomRange;
#include <materials/vcommon.glsl>
#include <materials/line/common.glsl>
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.vert>
void main()
{
INIT;
highp vec3 pos = vec3(0.);
LineData outputs = buildLine(
pos,
a_id,
a_pos,
a_color,
a_offsetAndNormal.xy / 16.,
a_offsetAndNormal.zw / 16.,
a_accumulatedDistanceAndHalfWidth.x,
a_accumulatedDistanceAndHalfWidth.y / 16.,
a_segmentDirection.w,
a_tlbr,
a_segmentDirection.xy / 16.,
a_aux.x / 16.
);
v_id              = outputs.id;
v_color           = outputs.color;
v_normal          = outputs.normal;
v_lineHalfWidth   = outputs.lineHalfWidth;
v_opacity         = outputs.opacity;
#ifndef OUTLINED_FILL
#ifdef PATTERN
v_tlbr          = outputs.tlbr;
v_patternSize   = outputs.patternSize;
#endif
#ifdef SDF
v_lineWidthRatio = outputs.lineWidthRatio;
#endif
#if defined(PATTERN) || defined(SDF)
v_accumulatedDistance = outputs.accumulatedDistance;
#endif
#endif
gl_Position = vec4(clip(outputs.color, pos, getFilterFlags(), a_zoomRange), 1.0);
}`},shared:{line:{"common.glsl":`#if !defined(OUTLINED_FILL) && defined(PATTERN)
uniform mediump vec2 u_mosaicSize;
#endif
struct LineData {
lowp vec4 color;
mediump vec2 normal;
mediump float lineHalfWidth;
lowp float opacity;
#ifndef OUTLINED_FILL
#ifdef PATTERN
mediump vec4 tlbr;
mediump vec2 patternSize;
#endif
#ifdef SDF
mediump float lineWidthRatio;
#endif
#if defined(PATTERN) || defined(SDF)
highp float accumulatedDistance;
#endif
#endif
highp vec3 id;
};`,"line.frag":`uniform lowp float u_blur;
#if !defined(OUTLINED_FILL) && !defined(HIGHLIGHT)
#if defined(PATTERN) || defined(SDF)
uniform sampler2D u_texture;
uniform highp float u_pixelRatio;
#endif
#endif
#if defined(SDF) && !defined(HIGHLIGHT) && !defined(OUTLINED_FILL)
lowp vec4 getLineColor(LineData line) {
mediump float adjustedPatternWidth = line.patternSize.x * 2.0 * line.lineWidthRatio;
mediump float relativeTexX = fract(u_pixelRatio * line.accumulatedDistance / adjustedPatternWidth);
mediump float relativeTexY = 0.5 + 0.25 * line.normal.y;
mediump vec2 texCoord = mix(line.tlbr.xy, line.tlbr.zw, vec2(relativeTexX, relativeTexY));
mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;
float dist = d * line.lineHalfWidth;
return line.opacity * clamp(0.5 - dist, 0.0, 1.0) * line.color;
}
#elif defined(PATTERN) && !defined(HIGHLIGHT) && !defined(OUTLINED_FILL)
lowp vec4 getLineColor(LineData line) {
mediump float lineHalfWidth = line.lineHalfWidth;
mediump float adjustedPatternWidth = line.patternSize.x * 2.0 * lineHalfWidth / line.patternSize.y;
mediump float relativeTexX = fract(u_pixelRatio * line.accumulatedDistance / adjustedPatternWidth);
mediump float relativeTexY = 0.5 + 0.5 * line.normal.y;
mediump vec2 texCoord = mix(line.tlbr.xy, line.tlbr.zw, vec2(relativeTexY, relativeTexX));
lowp vec4 color = texture2D(u_texture, texCoord);
return line.opacity * line.color * color;
}
#else
lowp vec4 getLineColor(LineData line) {
return line.opacity * line.color;
}
#endif
vec4 shadeLine(LineData line)
{
mediump float thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(line.lineHalfWidth, THIN_LINE_HALF_WIDTH), 1.0);
mediump float fragDist = length(line.normal) * line.lineHalfWidth;
lowp float alpha = clamp(thinLineFactor * (line.lineHalfWidth - fragDist) / (u_blur + thinLineFactor - 1.0), 0.0, 1.0);
lowp vec4 out_color = getLineColor(line) * alpha;
#ifdef HIGHLIGHT
out_color.a = step(1.0 / 255.0, out_color.a);
#endif
#ifdef ID
if (out_color.a < 1.0 / 255.0) {
discard;
}
out_color = vec4(line.id, 0.0);
#endif
return out_color;
}`,"line.vert":`float getBaseLineHalfWidth(in float lineHalfWidth, in float referenceHalfWidth) {
#ifdef VV_SIZE
float lineWidth = 2.0 * lineHalfWidth;
return 0.5 * (lineHalfWidth / referenceHalfWidth) * getSize(lineWidth);
#else
return lineHalfWidth;
#endif
}
float getLineHalfWidth(in float baseWidth, in float aa) {
float halfWidth = max(baseWidth + aa, 0.45) + 0.1 * aa;
#ifdef HIGHLIGHT
halfWidth = max(halfWidth, 2.0);
#endif
return halfWidth;
}
vec2 getDist(in vec2 offset, in float halfWidth) {
float thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(halfWidth, THIN_LINE_HALF_WIDTH), 1.0);
return thinLineFactor * halfWidth * offset;
}
LineData buildLine(
out vec3 out_pos,
in vec3 in_id,
in vec2 in_pos,
in vec4 in_color,
in vec2 in_offset,
in vec2 in_normal,
in float in_accumulatedDist,
in float in_lineHalfWidth,
in float in_bitSet,
in vec4 in_tlbr,
in vec2 in_segmentDirection,
in float in_referenceHalfWidth
)
{
float aa        = 0.5 * u_antialiasing;
float baseWidth = getBaseLineHalfWidth(in_lineHalfWidth, in_referenceHalfWidth);
float halfWidth = getLineHalfWidth(baseWidth, aa);
float z         = 2.0 * step(baseWidth, 0.0);
vec2  dist      = getDist(in_offset, halfWidth);
vec3  offset    = u_displayViewMat3 * vec3(dist, 0.0);
vec3  pos       = u_dvsMat3 * vec3(in_pos * POSITION_PRECISION, 1.0) + offset;
#ifdef OUTLINED_FILL
vec4  color     = in_color;
float opacity   = 1.0;
#else
vec4  color     = getColor(in_color, in_bitSet, 0);
float opacity   = getOpacity();
#ifdef SDF
const float SDF_PATTERN_HALF_WIDTH = 15.5;
float scaleDash = getBit(in_bitSet, BITSET_LINE_SCALE_DASH);
float lineWidthRatio = (scaleDash * max(halfWidth - 0.55 * u_antialiasing, 0.25) + (1.0 - scaleDash)) / SDF_PATTERN_HALF_WIDTH;
#endif
#endif
out_pos = vec3(pos.xy, z);
return LineData(
color,
in_normal,
halfWidth,
opacity,
#ifndef OUTLINED_FILL
#ifdef PATTERN
in_tlbr / u_mosaicSize.xyxy,
vec2(in_tlbr.z - in_tlbr.x, in_tlbr.w - in_tlbr.y),
#endif
#ifdef SDF
lineWidthRatio,
#endif
#if defined(PATTERN) || defined(SDF)
in_accumulatedDist * u_zoomFactor + dot(in_segmentDirection, dist),
#endif
#endif
norm(in_id)
);
}`}},text:{"common.glsl":`uniform highp vec2 u_mosaicSize;
varying highp vec3 v_id;
varying mediump vec3 v_pos;
varying lowp float v_opacity;
varying lowp vec4 v_color;
varying highp vec2 v_tex;
varying mediump float v_antialiasingWidth;
varying mediump float v_edgeDistanceOffset;
varying lowp float v_transparency;`,"text.frag":`precision mediump float;
#include <materials/text/common.glsl>
uniform lowp sampler2D u_texture;
void main()
{
float SDF_CUTOFF = (2.0 / 8.0);
float SDF_BASE_EDGE_DIST = 1.0 - SDF_CUTOFF;
lowp float dist = texture2D(u_texture, v_tex).a;
mediump float edge = SDF_BASE_EDGE_DIST - v_edgeDistanceOffset;
#ifdef HIGHLIGHT
edge /= 2.0;
#endif
lowp float aa = v_antialiasingWidth;
lowp float alpha = smoothstep(edge - aa, edge + aa, dist);
gl_FragColor = alpha * v_color * v_opacity;
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = vec4(v_id, 0.0);
#endif
}`,"text.vert":`precision highp float;
#include <materials/utils.glsl>
#include <materials/vcommon.glsl>
#include <materials/text/common.glsl>
attribute vec4 a_color;
attribute vec4 a_haloColor;
attribute vec4 a_texFontSize;
attribute vec4 a_aux;
attribute vec2 a_zoomRange;
attribute vec2 a_vertexOffset;
attribute vec2 a_texCoords;
uniform float u_isHalo;
float getTextSize(inout vec2 offset, inout float baseSize, in float referenceSize) {
#ifdef VV_SIZE
float r = getSize(baseSize) / referenceSize;
baseSize *= r;
offset.xy *= r;
return baseSize;
#endif
return baseSize;
}
void main()
{
INIT;
float a_referenceSize = a_aux.z * a_aux.z / 256.0;
float a_bitSet        = a_aux.w;
float a_fontSize      = a_texFontSize.z;
vec2  a_offset        = a_vertexOffset * OFFSET_PRECISION;
vec3  in_pos        = vec3(a_pos * POSITION_PRECISION, 1.0);
float fontSize      = getTextSize(a_offset, a_fontSize, a_referenceSize);
float fontScale     = fontSize / SDF_FONT_SIZE;
vec3  offset        = getRotation() * vec3(a_offset, 0.0);
mat3  extrudeMatrix = getBit(a_bitSet, 0) == 1.0 ? u_displayViewMat3 : u_displayMat3;
v_color   = u_isHalo * a_haloColor + (1.0 - u_isHalo) * getColor(a_color, a_bitSet, 1);
v_opacity = getOpacity();
v_id      = norm(a_id);
v_tex     = a_texCoords / u_mosaicSize;
v_pos     = u_dvsMat3 * in_pos + extrudeMatrix * offset;
v_edgeDistanceOffset = u_isHalo * OUTLINE_SCALE * a_texFontSize.w / fontScale / MAX_SDF_DISTANCE;
v_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;
gl_Position =  vec4(clip(v_color, v_pos, getFilterFlags(), a_zoomRange), 1.0);
}`},"utils.glsl":`float rshift(in float u32, in int amount) {
return floor(u32 / pow(2.0, float(amount)));
}
float getBit(in float bitset, in int bitIndex) {
float offset = pow(2.0, float(bitIndex));
return mod(floor(bitset / offset), 2.0);
}
float getFilterBit(in float bitset, in int bitIndex) {
return getBit(bitset, bitIndex + 1);
}
float getHighlightBit(in float bitset) {
return getBit(bitset, 0);
}
highp vec3 unpackDisplayIdTexel(in highp vec3 bitset) {
float isAggregate = getBit(bitset.b, 7);
return (1.0 - isAggregate) * bitset + isAggregate * (vec3(bitset.rgb) - vec3(0.0, 0.0, float(0x80)));
}
vec4 unpack(in float u32) {
float r = mod(rshift(u32, 0), 255.0);
float g = mod(rshift(u32, 8), 255.0);
float b = mod(rshift(u32, 16), 255.0);
float a = mod(rshift(u32, 24), 255.0);
return vec4(r, g, b, a);
}
vec3 norm(in vec3 v) {
return v /= 255.0;
}
vec4 norm(in vec4 v) {
return v /= 255.0;
}
float max4(vec4 target) {
return max(max(max(target.x, target.y), target.z), target.w);
}
vec2 unpack_u8_nf32(vec2 bytes) {
return (bytes - 127.0) / 127.0;
}`,"vcommon.glsl":`#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/attributeData.glsl>
#include <materials/vv.glsl>
attribute vec2 a_pos;
attribute highp vec3 a_id;
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform highp float u_pixelRatio;
uniform mediump float u_zoomFactor;
uniform mediump float u_antialiasing;
uniform mediump float u_currentZoom;
vec4 VV_ADATA = vec4(0.0);
void loadVisualVariableData(inout vec4 target) {
#ifdef OES_TEXTURE_FLOAT
target.rgba = getAttributeData2(a_id);
#else
vec4 data0 = getAttributeData2(a_id);
vec4 data1 = getAttributeData3(a_id);
target.r = u88VVToFloat(data0.rg * 255.0);
target.g = u88VVToFloat(data0.ba * 255.0);
target.b = u88VVToFloat(data1.rg * 255.0);
target.a = u88VVToFloat(data1.ba * 255.0);
#endif
}
#ifdef VV
#define INIT loadVisualVariableData(VV_ADATA)
#else
#define INIT
#endif
vec4 getColor(in vec4 a_color, in float a_bitSet, int index) {
#ifdef VV_COLOR
float isColorLocked   = getBit(a_bitSet, index);
return getVVColor(VV_ADATA[ATTR_VV_COLOR], a_color, isColorLocked);
#else
return a_color;
#endif
}
float getOpacity() {
#ifdef VV_OPACITY
return getVVOpacity(VV_ADATA[ATTR_VV_OPACITY]);
#else
return 1.0;
#endif
}
float getSize(in float in_size) {
#ifdef VV_SIZE
return getVVSize(in_size, VV_ADATA[ATTR_VV_SIZE]);
#else
return in_size;
#endif
}
mat3 getRotation() {
#ifdef VV_ROTATION
return getVVRotationMat3(mod(VV_ADATA[ATTR_VV_ROTATION], 360.0));
#else
return mat3(1.0);
#endif
}
float getFilterFlags() {
#ifdef IGNORES_SAMPLER_PRECISION
return ceil(getAttributeData0(a_id).x * 255.0);
#else
return getAttributeData0(a_id).x * 255.0;
#endif
}
vec4 getAnimationState() {
return getAttributeData1(a_id);
}
float getMinZoom() {
vec4 data0 = getAttributeData0(a_id) * 255.0;
return data0.g;
}
mat3 getMatrix(float isMapAligned) {
return isMapAligned * u_displayViewMat3 + (1.0 - isMapAligned) * u_displayMat3;
}
vec3 clip(inout vec4 color, inout vec3 pos, in float filterFlags, in vec2 minMaxZoom) {
pos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 0));
#ifdef INSIDE
pos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 1));
#elif defined(OUTSIDE)
pos.z += 2.0 * getFilterBit(filterFlags, 1);
#elif defined(HIGHLIGHT)
#if !defined(HIGHLIGHT_ALL)
pos.z += 2.0 * (1.0 - getHighlightBit(filterFlags));
#endif
#endif
pos.z += 2.0 * (step(minMaxZoom.y, u_currentZoom) + (1.0 - step(minMaxZoom.x, u_currentZoom)));
return pos;
}
vec3 applyFilterLabels(inout vec4 color, inout vec3 pos, in float filterFlags) {
pos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 0));
#ifndef OUTSIDE_LABELS_VISIBLE
pos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 1));
#endif
return pos;
}`,"vv.glsl":`#if defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)
#define VV_SIZE
#endif
#if defined(VV_COLOR) || defined(VV_SIZE) || defined(VV_OPACITY) || defined(VV_ROTATION)
#define VV
#endif
#ifdef VV_COLOR
uniform highp float u_vvColorValues[8];
uniform vec4 u_vvColors[8];
#endif
#ifdef VV_SIZE_MIN_MAX_VALUE
uniform highp vec4 u_vvSizeMinMaxValue;
#endif
#ifdef VV_SIZE_SCALE_STOPS
uniform highp float u_vvSizeScaleStopsValue;
#endif
#ifdef VV_SIZE_FIELD_STOPS
uniform highp float u_vvSizeFieldStopsValues[6];
uniform float u_vvSizeFieldStopsSizes[6];
#endif
#ifdef VV_SIZE_UNIT_VALUE
uniform highp float u_vvSizeUnitValueWorldToPixelsRatio;
#endif
#ifdef VV_OPACITY
uniform highp float u_vvOpacityValues[8];
uniform float u_vvOpacities[8];
#endif
#ifdef VV_ROTATION
uniform lowp float u_vvRotationType;
#endif
bool isNan(float val) {
return (val == NAN_MAGIC_NUMBER);
}
#ifdef VV_SIZE_MIN_MAX_VALUE
float getVVMinMaxSize(float sizeValue, float fallback) {
if (isNan(sizeValue)) {
return fallback;
}
float interpolationRatio = (sizeValue  - u_vvSizeMinMaxValue.x) / (u_vvSizeMinMaxValue.y - u_vvSizeMinMaxValue.x);
interpolationRatio = clamp(interpolationRatio, 0.0, 1.0);
return u_vvSizeMinMaxValue.z + interpolationRatio * (u_vvSizeMinMaxValue.w - u_vvSizeMinMaxValue.z);
}
#endif
#ifdef VV_SIZE_FIELD_STOPS
const int VV_SIZE_N = 6;
float getVVStopsSize(float sizeValue, float fallback) {
if (isNan(sizeValue)) {
return fallback;
}
if (sizeValue <= u_vvSizeFieldStopsValues[0]) {
return u_vvSizeFieldStopsSizes[0];
}
for (int i = 1; i < VV_SIZE_N; ++i) {
if (u_vvSizeFieldStopsValues[i] >= sizeValue) {
float f = (sizeValue - u_vvSizeFieldStopsValues[i-1]) / (u_vvSizeFieldStopsValues[i] - u_vvSizeFieldStopsValues[i-1]);
return mix(u_vvSizeFieldStopsSizes[i-1], u_vvSizeFieldStopsSizes[i], f);
}
}
return u_vvSizeFieldStopsSizes[VV_SIZE_N - 1];
}
#endif
#ifdef VV_SIZE_UNIT_VALUE
float getVVUnitValue(float sizeValue, float fallback) {
if (isNan(sizeValue)) {
return fallback;
}
return u_vvSizeUnitValueWorldToPixelsRatio * sizeValue;
}
#endif
#ifdef VV_OPACITY
const int VV_OPACITY_N = 8;
float getVVOpacity(float opacityValue) {
if (isNan(opacityValue)) {
return 1.0;
}
if (opacityValue <= u_vvOpacityValues[0]) {
return u_vvOpacities[0];
}
for (int i = 1; i < VV_OPACITY_N; ++i) {
if (u_vvOpacityValues[i] >= opacityValue) {
float f = (opacityValue - u_vvOpacityValues[i-1]) / (u_vvOpacityValues[i] - u_vvOpacityValues[i-1]);
return mix(u_vvOpacities[i-1], u_vvOpacities[i], f);
}
}
return u_vvOpacities[VV_OPACITY_N - 1];
}
#endif
#ifdef VV_ROTATION
mat4 getVVRotation(float rotationValue) {
if (isNan(rotationValue)) {
return mat4(1, 0, 0, 0,
0, 1, 0, 0,
0, 0, 1, 0,
0, 0, 0, 1);
}
float rotation = rotationValue;
if (u_vvRotationType == 1.0) {
rotation = 90.0 - rotation;
}
float angle = C_DEG_TO_RAD * rotation;
float sinA = sin(angle);
float cosA = cos(angle);
return mat4(cosA, sinA, 0, 0,
-sinA,  cosA, 0, 0,
0,     0, 1, 0,
0,     0, 0, 1);
}
mat3 getVVRotationMat3(float rotationValue) {
if (isNan(rotationValue)) {
return mat3(1, 0, 0,
0, 1, 0,
0, 0, 1);
}
float rotation = rotationValue;
if (u_vvRotationType == 1.0) {
rotation = 90.0 - rotation;
}
float angle = C_DEG_TO_RAD * -rotation;
float sinA = sin(angle);
float cosA = cos(angle);
return mat3(cosA, -sinA, 0,
sinA, cosA, 0,
0,    0,    1);
}
#endif
#ifdef VV_COLOR
const int VV_COLOR_N = 8;
vec4 getVVColor(float colorValue, vec4 fallback, float isColorLocked) {
if (isNan(colorValue) || isColorLocked == 1.0) {
return fallback;
}
if (colorValue <= u_vvColorValues[0]) {
return u_vvColors[0];
}
for (int i = 1; i < VV_COLOR_N; ++i) {
if (u_vvColorValues[i] >= colorValue) {
float f = (colorValue - u_vvColorValues[i-1]) / (u_vvColorValues[i] - u_vvColorValues[i-1]);
return mix(u_vvColors[i-1], u_vvColors[i], f);
}
}
return u_vvColors[VV_COLOR_N - 1];
}
#endif
float getVVSize(in float size, in float vvSize)  {
#ifdef VV_SIZE_MIN_MAX_VALUE
return getVVMinMaxSize(vvSize, size);
#elif defined(VV_SIZE_SCALE_STOPS)
return u_vvSizeScaleStopsValue;
#elif defined(VV_SIZE_FIELD_STOPS)
float outSize = getVVStopsSize(vvSize, size);
return isNan(outSize) ? size : outSize;
#elif defined(VV_SIZE_UNIT_VALUE)
return getVVUnitValue(vvSize, size);
#else
return size;
#endif
}`},"post-processing":{blit:{"blit.frag":`precision mediump float;
uniform sampler2D u_texture;
varying vec2 v_uv;
void main() {
gl_FragColor = texture2D(u_texture, v_uv);
}`},bloom:{composite:{"composite.frag":`precision mediump float;
varying vec2 v_uv;
uniform sampler2D u_blurTexture1;
uniform sampler2D u_blurTexture2;
uniform sampler2D u_blurTexture3;
uniform sampler2D u_blurTexture4;
uniform sampler2D u_blurTexture5;
uniform float u_bloomStrength;
uniform float u_bloomRadius;
uniform float u_bloomFactors[NUMMIPS];
uniform vec3 u_bloomTintColors[NUMMIPS];
float lerpBloomFactor(const in float factor) {
float mirrorFactor = 1.2 - factor;
return mix(factor, mirrorFactor, u_bloomRadius);
}
void main() {
gl_FragColor = u_bloomStrength * (
lerpBloomFactor(u_bloomFactors[0]) * vec4(u_bloomTintColors[0], 1.0) * texture2D(u_blurTexture1, v_uv) +
lerpBloomFactor(u_bloomFactors[1]) * vec4(u_bloomTintColors[1], 1.0) * texture2D(u_blurTexture2, v_uv) +
lerpBloomFactor(u_bloomFactors[2]) * vec4(u_bloomTintColors[2], 1.0) * texture2D(u_blurTexture3, v_uv) +
lerpBloomFactor(u_bloomFactors[3]) * vec4(u_bloomTintColors[3], 1.0) * texture2D(u_blurTexture4, v_uv) +
lerpBloomFactor(u_bloomFactors[4]) * vec4(u_bloomTintColors[4], 1.0) * texture2D(u_blurTexture5, v_uv)
);
}`},gaussianBlur:{"gaussianBlur.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
uniform vec2 u_texSize;
uniform vec2 u_direction;
varying vec2 v_uv;
#define KERNEL_RADIUS RADIUS
#define SIGMA RADIUS
float gaussianPdf(in float x, in float sigma) {
return 0.39894 * exp(-0.5 * x * x / ( sigma * sigma)) / sigma;
}
void main() {
vec2 invSize = 1.0 / u_texSize;
float fSigma = float(SIGMA);
float weightSum = gaussianPdf(0.0, fSigma);
vec4 pixelColorSum = texture2D(u_colorTexture, v_uv) * weightSum;
for (int i = 1; i < KERNEL_RADIUS; i ++) {
float x = float(i);
float w = gaussianPdf(x, fSigma);
vec2 uvOffset = u_direction * invSize * x;
vec4 sample1 = texture2D(u_colorTexture, v_uv + uvOffset);
vec4 sample2 = texture2D(u_colorTexture, v_uv - uvOffset);
pixelColorSum += (sample1 + sample2) * w;
weightSum += 2.0 * w;
}
gl_FragColor = pixelColorSum /weightSum;
}`},luminosityHighPass:{"luminosityHighPass.frag":`precision mediump float;
uniform sampler2D u_texture;
uniform vec3 u_defaultColor;
uniform float u_defaultOpacity;
uniform float u_luminosityThreshold;
uniform float u_smoothWidth;
varying vec2 v_uv;
void main() {
vec4 texel = texture2D(u_texture, v_uv);
vec3 luma = vec3(0.299, 0.587, 0.114);
float v = dot(texel.xyz, luma);
vec4 outputColor = vec4(u_defaultColor.rgb, u_defaultOpacity);
float alpha = smoothstep(u_luminosityThreshold, u_luminosityThreshold + u_smoothWidth, v);
gl_FragColor = mix(outputColor, texel, alpha);
}`}},blur:{gaussianBlur:{"gaussianBlur.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
uniform vec2 u_texSize;
uniform vec2 u_direction;
uniform float u_sigma;
varying vec2 v_uv;
#define KERNEL_RADIUS RADIUS
float gaussianPdf(in float x, in float sigma) {
return 0.39894 * exp(-0.5 * x * x / ( sigma * sigma)) / sigma;
}
void main() {
vec2 invSize = 1.0 / u_texSize;
float fSigma = u_sigma;
float weightSum = gaussianPdf(0.0, fSigma);
vec4 pixelColorSum = texture2D(u_colorTexture, v_uv) * weightSum;
for (int i = 1; i < KERNEL_RADIUS; i ++) {
float x = float(i);
float w = gaussianPdf(x, fSigma);
vec2 uvOffset = u_direction * invSize * x;
vec4 sample1 = texture2D(u_colorTexture, v_uv + uvOffset);
vec4 sample2 = texture2D(u_colorTexture, v_uv - uvOffset);
pixelColorSum += (sample1 + sample2) * w;
weightSum += 2.0 * w;
}
gl_FragColor = pixelColorSum /weightSum;
}`},"radial-blur":{"radial-blur.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
varying vec2 v_uv;
const float sampleDist = 1.0;
const float sampleStrength = 2.2;
void main(void) {
float samples[10];
samples[0] = -0.08;
samples[1] = -0.05;
samples[2] = -0.03;
samples[3] = -0.02;
samples[4] = -0.01;
samples[5] =  0.01;
samples[6] =  0.02;
samples[7] =  0.03;
samples[8] =  0.05;
samples[9] =  0.08;
vec2 dir = 0.5 - v_uv;
float dist = sqrt(dir.x * dir.x + dir.y * dir.y);
dir = dir / dist;
vec4 color = texture2D(u_colorTexture,v_uv);
vec4 sum = color;
for (int i = 0; i < 10; i++) {
sum += texture2D(u_colorTexture, v_uv + dir * samples[i] * sampleDist);
}
sum *= 1.0 / 11.0;
float t = dist * sampleStrength;
t = clamp(t, 0.0, 1.0);
gl_FragColor = mix(color, sum, t);
}`}},dra:{"dra.frag":`precision mediump float;
uniform sampler2D u_minColor;
uniform sampler2D u_maxColor;
uniform sampler2D u_texture;
varying vec2 v_uv;
void main() {
vec4 minColor = texture2D(u_minColor, vec2(0.5));
vec4 maxColor = texture2D(u_maxColor, vec2(0.5));
vec4 color = texture2D(u_texture, v_uv);
vec3 minColorUnpremultiply = minColor.rgb / minColor.a;
vec3 maxColorUnpremultiply = maxColor.rgb / maxColor.a;
vec3 colorUnpremultiply = color.rgb / color.a;
vec3 range = maxColorUnpremultiply - minColorUnpremultiply;
gl_FragColor = vec4(color.a * (colorUnpremultiply - minColorUnpremultiply) / range, color.a);
}`,"min-max":{"min-max.frag":`#extension GL_EXT_draw_buffers : require
precision mediump float;
#define CELL_SIZE 2
uniform sampler2D u_minTexture;
uniform sampler2D u_maxTexture;
uniform vec2 u_srcResolution;
uniform vec2 u_dstResolution;
varying vec2 v_uv;
void main() {
vec2 srcPixel = floor(gl_FragCoord.xy) * float(CELL_SIZE);
vec2 onePixel = vec2(1.0) / u_srcResolution;
vec2 uv = (srcPixel + 0.5) / u_srcResolution;
vec4 minColor = vec4(1.0);
vec4 maxColor = vec4(0.0);
for (int y = 0; y < CELL_SIZE; ++y) {
for (int x = 0; x < CELL_SIZE; ++x) {
vec2 offset = uv + vec2(x, y) * onePixel;
minColor = min(minColor, texture2D(u_minTexture, offset));
maxColor = max(maxColor, texture2D(u_maxTexture, offset));
}
}
gl_FragData[0] = minColor;
gl_FragData[1] = maxColor;
}`}},"drop-shadow":{composite:{"composite.frag":`precision mediump float;
uniform sampler2D u_layerFBOTexture;
uniform sampler2D u_blurTexture;
uniform vec4 u_shadowColor;
varying vec2 v_uv;
void main() {
vec4 layerColor = texture2D(u_layerFBOTexture, v_uv);
vec4 blurColor = texture2D(u_blurTexture, v_uv);
gl_FragColor = ((1.0 - layerColor.a) * blurColor.a * u_shadowColor + layerColor);
}`},"drop-shadow.vert":`precision mediump float;
attribute vec2 a_position;
uniform highp mat3 u_displayViewMat3;
uniform highp vec2 u_offset;
varying vec2 v_uv;
void main() {
vec3 offset = u_displayViewMat3 * vec3(u_offset, 0.0);
gl_Position = vec4(a_position, 0.0, 1.0) + vec4(offset, 0.0);
v_uv = (a_position + 1.0) / 2.0;
}`},"edge-detect":{"frei-chen":{"frei-chen.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
uniform vec2 u_texSize;
varying vec2 v_uv;
vec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);
mat3 G[9];
const mat3 g0 = mat3( 0.3535533845424652, 0, -0.3535533845424652, 0.5, 0, -0.5, 0.3535533845424652, 0, -0.3535533845424652 );
const mat3 g1 = mat3( 0.3535533845424652, 0.5, 0.3535533845424652, 0, 0, 0, -0.3535533845424652, -0.5, -0.3535533845424652 );
const mat3 g2 = mat3( 0, 0.3535533845424652, -0.5, -0.3535533845424652, 0, 0.3535533845424652, 0.5, -0.3535533845424652, 0 );
const mat3 g3 = mat3( 0.5, -0.3535533845424652, 0, -0.3535533845424652, 0, 0.3535533845424652, 0, 0.3535533845424652, -0.5 );
const mat3 g4 = mat3( 0, -0.5, 0, 0.5, 0, 0.5, 0, -0.5, 0 );
const mat3 g5 = mat3( -0.5, 0, 0.5, 0, 0, 0, 0.5, 0, -0.5 );
const mat3 g6 = mat3( 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.6666666865348816, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204 );
const mat3 g7 = mat3( -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, 0.6666666865348816, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408 );
const mat3 g8 = mat3( 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408 );
void main() {
G[0] = g0,
G[1] = g1,
G[2] = g2,
G[3] = g3,
G[4] = g4,
G[5] = g5,
G[6] = g6,
G[7] = g7,
G[8] = g8;
mat3 I;
float cnv[9];
vec3 sample;
for (float i = 0.0; i < 3.0; i++) {
for (float j = 0.0; j < 3.0; j++) {
sample = texture2D(u_colorTexture, v_uv + texel * vec2(i - 1.0,j - 1.0)).rgb;
I[int(i)][int(j)] = length(sample);
}
}
for (int i = 0; i < 9; i++) {
float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);
cnv[i] = dp3 * dp3;
}
float M = (cnv[0] + cnv[1]) + (cnv[2] + cnv[3]);
float S = (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]) + (cnv[8] + M);
gl_FragColor = vec4(vec3(sqrt(M / S)), texture2D(u_colorTexture, v_uv).a);
}`},sobel:{"sobel.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
varying vec2 v_uv;
uniform vec2 u_texSize;
vec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);
mat3 G[2];
const mat3 g0 = mat3( 1.0, 2.0, 1.0, 0.0, 0.0, 0.0, -1.0, -2.0, -1.0 );
const mat3 g1 = mat3( 1.0, 0.0, -1.0, 2.0, 0.0, -2.0, 1.0, 0.0, -1.0 );
void main() {
mat3 I;
float cnv[2];
vec3 sample;
G[0] = g0;
G[1] = g1;
for (float i = 0.0; i < 3.0; i++) {
for (float j = 0.0; j < 3.0; j++) {
sample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;
I[int(i)][int(j)] = length(sample);
}
}
for (int i = 0; i < 2; i++) {
float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);
cnv[i] = dp3 * dp3;
}
gl_FragColor = vec4(vec3(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1])), texture2D(u_colorTexture, v_uv).a);
}`}},"edge-enhance":{"edge-enhance.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
varying vec2 v_uv;
uniform vec2 u_texSize;
vec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);
mat3 G[2];
const mat3 g0 = mat3( 1.0, 0.0, -1.0, 1.0, 0.0, -1.0, 1.0, 0.0, -1.0 );
const mat3 g1 = mat3( 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, -1.0, -1.0, -1.0 );
void main() {
mat3 I;
float cnv[2];
vec3 sample;
G[0] = g0;
G[1] = g1;
for (float i = 0.0; i < 3.0; i++) {
for (float j = 0.0; j < 3.0; j++) {
sample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;
I[int(i)][int(j)] = length(sample);
}
}
for (int i = 0; i < 2; i++) {
float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);
cnv[i] = dp3 * dp3;
}
vec4 color = texture2D(u_colorTexture, v_uv);
gl_FragColor = vec4(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1]) * color);
}`},filterEffect:{"filterEffect.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
uniform mat4 u_coefficients;
varying vec2 v_uv;
void main() {
vec4 color = texture2D(u_colorTexture, v_uv);
vec4 rgbw = u_coefficients * vec4(color.a > 0.0 ? color.rgb / color.a : vec3(0.0), 1.0);
float a = color.a;
gl_FragColor = vec4(a * rgbw.rgb, a);
}`},pp:{"pp.vert":`precision mediump float;
attribute vec2 a_position;
varying vec2 v_uv;
void main() {
gl_Position = vec4(a_position, 0.0, 1.0);
v_uv = (a_position + 1.0) / 2.0;
}`}},raster:{bitmap:{"bitmap.frag":`precision mediump float;
varying highp vec2 v_texcoord;
uniform sampler2D u_texture;
uniform highp vec2 u_coordScale;
uniform lowp float u_opacity;
#include <filtering/bicubic.glsl>
void main() {
#ifdef BICUBIC
vec4 color = sampleBicubicBSpline(u_texture, v_texcoord, u_coordScale);
#else
vec4 color = texture2D(u_texture, v_texcoord);
#endif
float alpha = u_opacity * color.a;
gl_FragColor = vec4(alpha * color.rgb, alpha);
}`,"bitmap.vert":`precision mediump float;
attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform highp vec2 u_coordScale;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_pos;
gl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);
}`},common:{"common.glsl":`uniform sampler2D u_image;
uniform int u_bandCount;
uniform bool u_isFloatTexture;
uniform bool u_flipY;
uniform float u_opacity;
uniform int u_resampling;
uniform vec2 u_srcImageSize;
#ifdef APPLY_PROJECTION
#include <raster/common/projection.glsl>
#endif
#ifdef BICUBIC
#include <filtering/bicubic.glsl>
#endif
#ifdef BILINEAR
#include <filtering/bilinear.glsl>
#endif
vec2 getPixelLocation(vec2 coords) {
vec2 targetLocation = u_flipY ? vec2(coords.s, 1.0 - coords.t) : coords;
#ifdef APPLY_PROJECTION
targetLocation = projectPixelLocation(targetLocation);
#endif
return targetLocation;
}
bool isOutside(vec2 coords){
if (coords.t>1.00001 ||coords.t<-0.00001 || coords.s>1.00001 ||coords.s<-0.00001) {
return true;
} else {
return false;
}
}
vec4 getPixel(vec2 pixelLocation) {
#ifdef BICUBIC
vec4 color = sampleBicubicBSpline(u_image, pixelLocation, u_srcImageSize);
#elif defined(BILINEAR)
vec4 color = sampleBilinear(u_image, pixelLocation, u_srcImageSize);
#else
vec4 color = texture2D(u_image, pixelLocation);
#endif
return color;
}`,"contrastBrightness.glsl":`uniform float u_contrastOffset;
uniform float u_brightnessOffset;
vec4 adjustContrastBrightness(vec4 currentPixel, bool isFloat) {
vec4 pixelValue = isFloat ? currentPixel * 255.0 : currentPixel;
float maxI = 255.0;
float mid = 128.0;
float c = u_contrastOffset;
float b = u_brightnessOffset;
vec4 v;
if (c > 0.0 && c < 100.0) {
v = (200.0 * pixelValue - 100.0 * maxI + 2.0 * maxI * b) / (2.0 * (100.0 - c)) + mid;
} else if (c <= 0.0 && c > -100.0) {
v = (200.0 * pixelValue - 100.0 * maxI + 2.0 * maxI * b) * (100.0 + c) / 20000.0 + mid;
} else if (c == 100.0) {
v = (200.0 * pixelValue - 100.0 * maxI + (maxI + 1.0) * (100.0 - c) + 2.0 * maxI * b);
v = (sign(v) + 1.0) / 2.0;
} else if (c == -100.0) {
v = vec4(mid, mid, mid, currentPixel.a);
}
return vec4(v.r / 255.0, v.g / 255.0, v.b / 255.0, currentPixel.a);
}`,"projection.glsl":`uniform sampler2D u_transformGrid;
uniform vec2 u_transformSpacing;
uniform vec2 u_transformGridSize;
uniform vec2 u_targetImageSize;
vec2 projectPixelLocation(vec2 coords) {
vec2 index_image = floor(coords * u_targetImageSize);
vec2 oneTransformPixel = vec2(0.25 / u_transformGridSize.s, 1.0 / u_transformGridSize.t);
vec2 index_transform = floor(index_image / u_transformSpacing) / u_transformGridSize;
vec2 pos = fract((index_image + vec2(0.5, 0.5)) / u_transformSpacing);
vec2 srcLocation;
vec2 transform_location = index_transform + oneTransformPixel * 0.5;
if (pos.s <= pos.t) {
vec4 ll_abc = texture2D(u_transformGrid, vec2(transform_location.s, transform_location.t));
vec4 ll_def = texture2D(u_transformGrid, vec2(transform_location.s + oneTransformPixel.s, transform_location.t));
srcLocation.s = dot(ll_abc.rgb, vec3(pos, 1.0));
srcLocation.t = dot(ll_def.rgb, vec3(pos, 1.0));
} else {
vec4 ur_abc = texture2D(u_transformGrid, vec2(transform_location.s + 2.0 * oneTransformPixel.s, transform_location.t));
vec4 ur_def = texture2D(u_transformGrid, vec2(transform_location.s + 3.0 * oneTransformPixel.s, transform_location.t));
srcLocation.s = dot(ur_abc.rgb, vec3(pos, 1.0));
srcLocation.t = dot(ur_def.rgb, vec3(pos, 1.0));
}
return srcLocation;
}`},flow:{"flow.frag":`precision highp float;
varying float v_side;
varying float v_time;
varying float v_totalTime;
varying float v_timeSeed;
uniform float u_time;
uniform float u_fadeDuration;
uniform float u_lineSpeed;
uniform vec4 u_lineColor;
uniform float u_lineHalfWidth;
void main(void) {
vec4 color = u_lineColor;
float edgeWidth = min(2.0 * u_lineHalfWidth - 1.0, 1.0);
float edgeStart = (u_lineHalfWidth - edgeWidth) / u_lineHalfWidth;
if (edgeStart < 0.95) {
float s = step(edgeStart, abs(v_side));
color.a *= (1.0 - s) + s * (1.0 - (abs(v_side) - edgeStart) / (1.0 - edgeStart));
}
float t = mod(v_timeSeed * (v_totalTime + u_fadeDuration) + u_time * u_lineSpeed, v_totalTime + u_fadeDuration) - v_time;
color.a *= step(0.0, t) * exp(-2.3 * t / u_fadeDuration);
color.rgb *= color.a;
gl_FragColor = color;
}`,"flow.vert":`precision highp float;
attribute vec3 a_positionAndSide;
attribute vec3 a_timeInfo;
attribute vec2 a_extrude;
uniform mat3 u_dvsMat3;
uniform mat3 u_displayViewMat3;
uniform float u_lineHalfWidth;
varying float v_side;
varying float v_time;
varying float v_totalTime;
varying float v_timeSeed;
void main(void) {
vec2 position = a_positionAndSide.xy;
float side = a_positionAndSide.z;
vec2 xy = (u_dvsMat3 * vec3(position, 1.0) + u_displayViewMat3 * vec3(a_extrude * u_lineHalfWidth, 0.0)).xy;
gl_Position = vec4(xy, 0.0, 1.0);
v_side = side;
v_time = a_timeInfo.x;
v_totalTime = a_timeInfo.y;
v_timeSeed = a_timeInfo.z;
}`},hillshade:{"hillshade.frag":`precision mediump float;
varying highp vec2 v_texcoord;
#include <raster/common/common.glsl>
uniform int u_hillshadeType;
uniform float u_sinZcosAs[6];
uniform float u_sinZsinAs[6];
uniform float u_cosZs[6];
uniform float u_weights[6];
uniform vec2 u_factor;
uniform float u_minValue;
uniform float u_maxValue;
#include <raster/lut/colorize.glsl>
float getNeighborHoodAlpha(float a, float b, float c, float d, float e, float f, float g, float h, float i){
if (a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0) {
return 0.0;
}
else {
return e;
}
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
vec4 overlay(float val, float minValue, float maxValue, float hillshade) {
val = clamp((val - minValue) / (maxValue - minValue), 0.0, 1.0);
vec4 rgb = colorize(vec4(val, val, val, 1.0), 255.0);
vec3 hsv = rgb2hsv(rgb.xyz);
hsv.z = hillshade;
return vec4(hsv2rgb(hsv), 1.0) * rgb.a;
}
void main() {
vec2 pixelLocation = getPixelLocation(v_texcoord);
if (isOutside(pixelLocation)) {
gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
return;
}
vec4 currentPixel = getPixel(pixelLocation);
if (currentPixel.a == 0.0) {
gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
return;
}
vec2 axy = vec2(-1.0, -1.0);
vec2 bxy = vec2(0.0, -1.0);
vec2 cxy = vec2(1.0, -1.0);
vec2 dxy = vec2(-1.0, 0.0);
vec2 fxy = vec2(1.0, 0.0);
vec2 gxy = vec2(-1.0, 1.0);
vec2 hxy = vec2(0.0, 1.0);
vec2 ixy = vec2(1.0, 1.0);
vec2 onePixel = 1.0 / u_srcImageSize;
if (pixelLocation.s < onePixel.s) {
axy[0] = 1.0;
dxy[0] = 1.0;
gxy[0] = 1.0;
}
if (pixelLocation.t < onePixel.t) {
axy[1] = 1.0;
bxy[1] = 1.0;
cxy[1] = 1.0;
}
if (pixelLocation.s > 1.0 - onePixel.s) {
cxy[0] = -1.0;
fxy[0] = -1.0;
ixy[0] = -1.0;
}
if (pixelLocation.t > 1.0 - onePixel.t) {
gxy[1] = -1.0;
hxy[1] = -1.0;
ixy[1] = -1.0;
}
vec4 va = texture2D(u_image, pixelLocation + onePixel * axy);
vec4 vb = texture2D(u_image, pixelLocation + onePixel * bxy);
vec4 vc = texture2D(u_image, pixelLocation + onePixel * cxy);
vec4 vd = texture2D(u_image, pixelLocation + onePixel * dxy);
vec4 ve = texture2D(u_image, pixelLocation);
vec4 vf = texture2D(u_image, pixelLocation + onePixel * fxy);
vec4 vg = texture2D(u_image, pixelLocation + onePixel * gxy);
vec4 vh = texture2D(u_image, pixelLocation + onePixel * hxy);
vec4 vi = texture2D(u_image, pixelLocation + onePixel * ixy);
float dzx = (vc + 2.0 * vf + vi - va - 2.0 * vd - vg).r * u_factor.s;
float dzy = (vg + 2.0 * vh + vi - va - 2.0 * vb - vc).r * u_factor.t;
float dzd = sqrt(1.0 + dzx * dzx + dzy * dzy);
float hillshade = 0.0;
if (u_hillshadeType == 0){
float cosDelta = u_sinZsinAs[0] * dzy - u_sinZcosAs[0] * dzx;
float z = (u_cosZs[0] + cosDelta) / dzd;
if (z < 0.0)  z = 0.0;
hillshade = z;
} else {
for (int k = 0; k < 6; k++) {
float cosDelta = u_sinZsinAs[k] * dzy - u_sinZcosAs[k] * dzx;
float z = (u_cosZs[k] + cosDelta) / dzd;
if (z < 0.0) z = 0.0;
hillshade = hillshade + z * u_weights[k];
if (k == 5) break;
}
}
float alpha = getNeighborHoodAlpha(va.a, vb.a, vc.a, vd.a, ve.a, vf.a, vg.a, vh.a, vi.a);
#ifdef APPLY_COLORMAP
gl_FragColor = overlay(ve.r, u_minValue, u_maxValue, hillshade) * alpha * u_opacity;
#else
gl_FragColor = vec4(hillshade, hillshade, hillshade, 1.0) * alpha * u_opacity;
#endif
}`,"hillshade.vert":`precision mediump float;
attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform highp vec2 u_coordScale;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_pos;
gl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);
}`},lut:{"colorize.glsl":`uniform sampler2D u_colormap;
uniform float u_colormapOffset;
uniform float u_colormapMaxIndex;
vec4 colorize(vec4 currentPixel, float scaleFactor) {
float clrIndex = clamp(currentPixel.r * scaleFactor - u_colormapOffset, 0.0, u_colormapMaxIndex);
vec2 clrPosition = vec2((clrIndex + 0.5) / (u_colormapMaxIndex + 1.0), 0.0);
vec4 color = texture2D(u_colormap, clrPosition);
vec4 result = vec4(color.rgb, color.a * currentPixel.a);
return result;
}`,"lut.frag":`precision mediump float;
varying highp vec2 v_texcoord;
#include <raster/common/common.glsl>
#include <raster/lut/colorize.glsl>
void main() {
vec2 pixelLocation = getPixelLocation(v_texcoord);
if (isOutside(pixelLocation)) {
gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
return;
}
vec4 currentPixel = getPixel(pixelLocation);
vec4 result = colorize(currentPixel, 1.0);
gl_FragColor = vec4(result.xyz, 1.0) * result.a * u_opacity;
}`,"lut.vert":`precision mediump float;
attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform highp vec2 u_coordScale;
uniform highp float u_scale;
uniform highp vec2 u_offset;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_pos * u_scale + u_offset;
gl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);
}`},magdir:{"magdir.frag":`precision mediump float;
varying vec4 v_color;
uniform lowp float u_opacity;
void main() {
gl_FragColor = v_color * u_opacity;
}`,"magdir.vert":`precision mediump float;
attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_vv;
uniform highp mat3 u_dvsMat3;
uniform highp vec2 u_coordScale;
uniform vec2 u_symbolSize;
uniform vec2 u_symbolPercentRange;
uniform vec2 u_dataRange;
uniform float u_rotation;
uniform vec4 u_colors[12];
varying vec4 v_color;
void main()
{
float angle = a_offset.y + u_rotation;
#ifndef ROTATION_GEOGRAPHIC
angle = 3.14159265359 * 2.0 - angle - 3.14159265359 / 2.0;
#endif
vec2 offset = vec2(cos(angle), sin(angle)) * a_offset.x;
#ifdef DATA_RANGE
float valuePercentage = clamp((a_vv.y - u_dataRange.x) / (u_dataRange.y - u_dataRange.x), 0.0, 1.0);
float sizeRatio = u_symbolPercentRange.x + valuePercentage * (u_symbolPercentRange.y - u_symbolPercentRange.x);
float sizePercentage = clamp(sizeRatio, u_symbolPercentRange.x, u_symbolPercentRange.y);
#else
float sizePercentage = (u_symbolPercentRange.x + u_symbolPercentRange.y) / 2.0;
#endif
vec2 pos = a_pos + offset * sizePercentage * u_symbolSize;
v_color = u_colors[int(a_vv.x)];
gl_Position = vec4(u_dvsMat3 * vec3(pos * u_coordScale, 1.0), 1.0);
}`},reproject:{"reproject.frag":`precision mediump float;
varying vec2 v_texcoord;
#include <raster/common/common.glsl>
void main() {
vec2 pixelLocation = getPixelLocation(v_texcoord);
if (isOutside(pixelLocation)) {
gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
return;
}
vec4 currentPixel = getPixel(pixelLocation);
gl_FragColor = vec4(currentPixel.rgb, 1.0) * currentPixel.a * u_opacity;
}`,"reproject.vert":`precision mediump float;
attribute vec2 a_position;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_position;
gl_Position = vec4(2.0 * (a_position - 0.5), 0.0, 1.0);
}`},scalar:{"scalar.frag":`precision mediump float;
uniform lowp float u_opacity;
varying vec2 v_pos;
const vec4 outlineColor = vec4(0.2, 0.2, 0.2, 1.0);
const float outlineSize = 0.02;
const float innerRadius = 0.25;
const float outerRadius = 0.42;
const float innerSquareLength = 0.15;
void main() {
mediump float dist = length(v_pos);
mediump float fillalpha1 = smoothstep(outerRadius, outerRadius + outlineSize, dist);
fillalpha1 *= (1.0-smoothstep(outerRadius + outlineSize, outerRadius + 0.1 + outlineSize, dist));
#ifdef INNER_CIRCLE
mediump float fillalpha2 = smoothstep(innerRadius, innerRadius + outlineSize, dist);
fillalpha2 *= (1.0-smoothstep(innerRadius + outlineSize, innerRadius + 0.1 + outlineSize, dist));
#else
mediump float fillalpha2 = (abs(v_pos.x) < innerSquareLength ? 1.0 : 0.0) * (abs(v_pos.y) < innerSquareLength ? 1.0 : 0.0);
#endif
gl_FragColor = (fillalpha2 + fillalpha1) * outlineColor * u_opacity;
}`,"scalar.vert":`precision mediump float;
attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_vv;
uniform highp mat3 u_dvsMat3;
uniform highp vec2 u_coordScale;
uniform vec2 u_symbolSize;
uniform vec2 u_symbolPercentRange;
uniform vec2 u_dataRange;
varying vec2 v_pos;
void main()
{
#ifdef DATA_RANGE
float valuePercentage = clamp((a_vv.y - u_dataRange.x) / (u_dataRange.y - u_dataRange.x), 0.0, 1.0);
float sizeRatio = u_symbolPercentRange.x + valuePercentage * (u_symbolPercentRange.y - u_symbolPercentRange.x);
float sizePercentage = clamp(sizeRatio, u_symbolPercentRange.x, u_symbolPercentRange.y);
#else
float sizePercentage = (u_symbolPercentRange.x + u_symbolPercentRange.y) / 2.0;
#endif
vec2 size = u_symbolSize * sizePercentage;
vec2 pos = a_pos + a_offset * size;
v_pos = a_offset;
gl_Position = vec4(u_dvsMat3 * vec3(pos * u_coordScale, 1.0), 1.0);
}`},stretch:{"stretch.frag":`precision mediump float;
varying highp vec2 v_texcoord;
#include <raster/common/common.glsl>
uniform float u_minCutOff[3];
uniform float u_maxCutOff[3];
uniform float u_minOutput;
uniform float u_maxOutput;
uniform float u_factor[3];
uniform bool u_useGamma;
uniform float u_gamma[3];
uniform float u_gammaCorrection[3];
#include <raster/lut/colorize.glsl>
float stretchOneValue(float val, float minCutOff, float maxCutOff, float minOutput, float maxOutput, float factor, bool useGamma, float gamma, float gammaCorrection) {
if (val >= maxCutOff) {
return maxOutput;
} else if (val <= minCutOff) {
return minOutput;
}
float stretchedVal;
if (useGamma) {
float tempf = 1.0;
float outRange = maxOutput - minOutput;
float relativeVal = (val - minCutOff) / (maxCutOff - minCutOff);
if (gamma > 1.0) {
tempf -= pow(1.0 / outRange, relativeVal * gammaCorrection);
}
stretchedVal = (tempf * outRange * pow(relativeVal, 1.0 / gamma) + minOutput) / 255.0;
} else {
stretchedVal = minOutput + (val - minCutOff) * factor;
}
return stretchedVal;
}
void main() {
vec2 pixelLocation = getPixelLocation(v_texcoord);
if (isOutside(pixelLocation)) {
gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
return;
}
vec4 currentPixel = getPixel(pixelLocation);
#ifdef NOOP
gl_FragColor = vec4(currentPixel.rgb, 1.0) * currentPixel.a * u_opacity;
return;
#endif
if (u_bandCount == 1) {
float grayVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);
#ifdef APPLY_COLORMAP
vec4 result = colorize(vec4(grayVal, grayVal, grayVal, 1.0), u_useGamma ? 255.0 : 1.0);
gl_FragColor = vec4(result.xyz, 1.0) * result.a * currentPixel.a * u_opacity;
#else
gl_FragColor = vec4(grayVal, grayVal, grayVal, 1.0) * currentPixel.a * u_opacity;
#endif
} else {
float redVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);
float greenVal = stretchOneValue(currentPixel.g, u_minCutOff[1], u_maxCutOff[1], u_minOutput, u_maxOutput, u_factor[1], u_useGamma, u_gamma[1], u_gammaCorrection[1]);
float blueVal = stretchOneValue(currentPixel.b, u_minCutOff[2], u_maxCutOff[2], u_minOutput, u_maxOutput, u_factor[2], u_useGamma, u_gamma[2], u_gammaCorrection[2]);
gl_FragColor = vec4(redVal, greenVal, blueVal, 1.0) * currentPixel.a * u_opacity;
}
}`,"stretch.vert":`precision mediump float;
attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform highp vec2 u_coordScale;
uniform highp float u_scale;
uniform highp vec2 u_offset;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_pos * u_scale + u_offset;
gl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);
}`}},stencil:{"stencil.frag":`void main() {
gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}`,"stencil.vert":`attribute vec2 a_pos;
void main() {
gl_Position = vec4(a_pos, 0.0, 1.0);
}`},tileInfo:{"tileInfo.frag":`uniform mediump sampler2D u_texture;
varying mediump vec2 v_tex;
void main(void) {
lowp vec4 color = texture2D(u_texture, v_tex);
gl_FragColor = 0.75 * color;
}`,"tileInfo.vert":`attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform mediump float u_depth;
uniform mediump vec2 u_coord_ratio;
uniform mediump vec2 u_delta;
uniform mediump vec2 u_dimensions;
varying mediump vec2 v_tex;
void main() {
mediump vec2 offset = u_coord_ratio * vec2(u_delta + a_pos * u_dimensions);
vec3 v_pos = u_dvsMat3 * vec3(offset, 1.0);
gl_Position = vec4(v_pos.xy, 0.0, 1.0);
v_tex = a_pos;
}`},util:{"encoding.glsl":`const vec4 rgba2float_factors = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, rgba2float_factors);
}`}};function Mt(r){let e=At;return r.split("/").forEach(t=>{e&&(e=e[t])}),e}const Et=new ft(Mt);function ie(r){return Et.resolveIncludes(r)}const J={shaders:{vertexShader:ie("background/background.vert"),fragmentShader:ie("background/background.frag")},attributes:new Map([["a_pos",0]])},Lt=()=>W("clip",{geometry:[{location:0,name:"a_pos",count:2,type:5122}]});class Rt extends L{constructor(){super(...arguments),this._color=U(0,1,0,1)}dispose(){this._program&&this._program.dispose()}prepareState({context:e}){e.setStencilTestEnabled(!0),e.setBlendingEnabled(!1),e.setFaceCullingEnabled(!1),e.setColorMask(!1,!1,!1,!1),e.setStencilOp(7680,7680,7681),e.setStencilWriteMask(255),e.setStencilFunction(519,0,255)}draw(e,t){const{context:n,state:i}=e,o=Lt(),a=t.getVAO(n,i,o.attributes,o.bufferLayouts);E(a.indexBuffer)||(this._program||(this._program=ne(n,J)),n.useProgram(this._program),this._program.setUniform2fv("u_coord_range",[1,1]),this._program.setUniform4fv("u_color",this._color),this._program.setUniformMatrix3fv("u_dvsMat3",i.displayMat3),n.bindVAO(a),n.drawElements(4,a.indexBuffer.size,5125,0),n.bindVAO())}}const Re={shaders:{vertexShader:ie("tileInfo/tileInfo.vert"),fragmentShader:ie("tileInfo/tileInfo.frag")},attributes:new Map([["a_pos",0]])},oe=300,ae=32;class Ft extends L{constructor(){super(...arguments),this._color=U(1,0,0,1)}dispose(){this._outlineProgram&&(this._outlineProgram.dispose(),this._outlineProgram=null),this._tileInfoProgram&&(this._tileInfoProgram.dispose(),this._tileInfoProgram=null),this._outlineVertexArrayObject&&(this._outlineVertexArrayObject.dispose(),this._outlineVertexArrayObject=null),this._tileInfoVertexArrayObject&&(this._tileInfoVertexArrayObject.dispose(),this._tileInfoVertexArrayObject=null),this._canvas=null}prepareState({context:e}){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(1,771,1,771),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!1)}draw(e,t){const{context:n}=e;if(!t.isReady)return;this._loadWGLResources(n),n.bindVAO(this._outlineVertexArrayObject),n.useProgram(this._outlineProgram),this._outlineProgram.setUniformMatrix3fv("u_dvsMat3",t.transforms.dvs),this._outlineProgram.setUniform2f("u_coord_range",t.rangeX,t.rangeY),this._outlineProgram.setUniform1f("u_depth",0),this._outlineProgram.setUniform4fv("u_color",this._color),n.drawArrays(3,0,4);const i=this._getTexture(n,t);i&&(n.bindVAO(this._tileInfoVertexArrayObject),n.useProgram(this._tileInfoProgram),n.bindTexture(i,0),this._tileInfoProgram.setUniformMatrix3fv("u_dvsMat3",t.transforms.dvs),this._tileInfoProgram.setUniform1f("u_depth",0),this._tileInfoProgram.setUniform2f("u_coord_ratio",t.rangeX/t.width,t.rangeY/t.height),this._tileInfoProgram.setUniform2f("u_delta",8,8),this._tileInfoProgram.setUniform2f("u_dimensions",i.descriptor.width,i.descriptor.height),n.drawArrays(5,0,4)),n.bindVAO()}_loadWGLResources(e){if(this._outlineProgram&&this._tileInfoProgram)return;const t=ne(e,J),n=ne(e,Re),i={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},o=new Int8Array([0,0,1,0,1,1,0,1]),a=H.createVertex(e,35044,o),s=new $(e,J.attributes,i,{geometry:a}),u=new Int8Array([0,0,1,0,0,1,1,1]),l=H.createVertex(e,35044,u),d=new $(e,Re.attributes,i,{geometry:l});this._outlineProgram=t,this._tileInfoProgram=n,this._outlineVertexArrayObject=s,this._tileInfoVertexArrayObject=d}_getTexture(e,t){if(t.texture&&t.triangleCountReportedInDebug===t.triangleCount)return t.texture;t.triangleCountReportedInDebug=t.triangleCount,this._canvas||(this._canvas=document.createElement("canvas"),this._canvas.setAttribute("id","canvas2d"),this._canvas.setAttribute("width",`${oe}`),this._canvas.setAttribute("height",`${ae}`),this._canvas.setAttribute("style","display:none"));const n=t.triangleCount;let i=t.key.id;t.triangleCount>0&&(i+=`, ${n}`);const o=this._canvas,a=o.getContext("2d");return a.font="24px sans-serif",a.textAlign="left",a.textBaseline="top",a.clearRect(0,0,oe,ae),n>1e5?(a.fillStyle="red",a.fillRect(0,0,oe,ae),a.fillStyle="black"):(a.clearRect(0,0,oe,ae),a.fillStyle="blue"),a.fillText(i,0,0),t.texture=new K(e,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071},o),t.texture}}class Ut extends L{constructor(){super(...arguments),this._color=U(1,0,0,1),this._initialized=!1}dispose(){this._solidProgram&&(this._solidProgram.dispose(),this._solidProgram=null),this._solidVertexArrayObject&&(this._solidVertexArrayObject.dispose(),this._solidVertexArrayObject=null)}prepareState({context:e},t){e.setDepthWriteEnabled(!1),e.setDepthTestEnabled(!1),e.setStencilTestEnabled(!0),e.setBlendingEnabled(!1),e.setColorMask(!1,!1,!1,!1),e.setStencilOp(7680,7680,7681),e.setStencilWriteMask(255),e.setStencilFunctionSeparate(1032,516,t.stencilRef,255)}draw(e,t){const{context:n}=e;this._initialized||this._initialize(n),n.bindVAO(this._solidVertexArrayObject),n.useProgram(this._solidProgram),this._solidProgram.setUniformMatrix3fv("u_dvsMat3",t.transforms.dvs),this._solidProgram.setUniform2fv("u_coord_range",[t.rangeX,t.rangeY]),this._solidProgram.setUniform1f("u_depth",0),this._solidProgram.setUniform4fv("u_color",this._color),n.drawArrays(5,0,4),n.bindVAO()}_initialize(e){if(this._initialized)return!0;const t=ne(e,J);if(!t)return!1;const n={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},i=new Int8Array([0,0,1,0,0,1,1,1]),o=H.createVertex(e,35044,i),a=new $(e,J.attributes,n,{geometry:o});return this._solidProgram=t,this._solidVertexArrayObject=a,this._initialized=!0,!0}}class Nt extends L{constructor(){super(...arguments),this._color=U(1,0,0,1),this._patternMatrix=te(),this._programOptions={id:!1,pattern:!1}}dispose(){this._vao&&(this._vao.dispose(),this._vao=null)}drawMany(e,t){const{context:n,painter:i,styleLayerUID:o}=e;this._loadWGLResources(e);const a=e.displayLevel,s=e.styleLayer,u=s.backgroundMaterial,l=i.vectorTilesMaterialManager,d=s.getPaintValue("background-color",a),f=s.getPaintValue("background-opacity",a),c=s.getPaintValue("background-pattern",a),m=c!==void 0,p=d[3]*f,P=1|window.devicePixelRatio,x=e.spriteMosaic;let S,D;const b=P>Ce?2:1,I=e.drawPhase===A.HITTEST,h=this._programOptions;h.id=I,h.pattern=m;const _=l.getMaterialProgram(n,u,h);if(n.bindVAO(this._vao),n.useProgram(_),m){const v=x.getMosaicItemPosition(c,!0);if(w(v)){const{tl:y,br:g,page:T}=v;S=g[0]-y[0],D=g[1]-y[1];const C=x.getPageSize(T);w(C)&&(x.bind(n,9729,T,F),_.setUniform4f("u_tlbr",y[0],y[1],g[0],g[1]),_.setUniform2fv("u_mosaicSize",C),_.setUniform1i("u_texture",F))}_.setUniform1f("u_opacity",f)}else this._color[0]=p*d[0],this._color[1]=p*d[1],this._color[2]=p*d[2],this._color[3]=p,_.setUniform4fv("u_color",this._color);if(_.setUniform1f("u_depth",s.z||0),I){const v=Y(o+1);_.setUniform4fv("u_id",v)}for(const v of t){if(_.setUniform1f("u_coord_range",v.rangeX),_.setUniformMatrix3fv("u_dvsMat3",v.transforms.dvs),m){const y=Math.max(2**(Math.round(a)-v.key.level),1),g=b*v.width*y,T=g/he(S),C=g/he(D);this._patternMatrix[0]=T,this._patternMatrix[4]=C,_.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)}n.setStencilFunction(514,v.stencilRef,255),n.drawArrays(5,0,4)}}_loadWGLResources(e){if(this._vao)return;const{context:t,styleLayer:n}=e,i=n.backgroundMaterial,o=new Int8Array([0,0,1,0,0,1,1,1]),a=H.createVertex(t,35044,o),s=new $(t,i.getAttributeLocations(),i.getLayoutInfo(),{geometry:a});this._vao=s}}class Bt extends L{constructor(){super(...arguments),this._programOptions={id:!1}}dispose(){}drawMany(e,t){const{context:n,displayLevel:i,requiredLevel:o,state:a,drawPhase:s,painter:u,spriteMosaic:l,styleLayerUID:d}=e;if(!t.some(h=>{var _,v;return(_=(v=h.layerData.get(d))==null?void 0:v.circleIndexCount)!=null&&_}))return;const f=e.styleLayer,c=f.circleMaterial,m=u.vectorTilesMaterialManager,p=1.2,P=f.getPaintValue("circle-translate",i),x=f.getPaintValue("circle-translate-anchor",i),S=s===A.HITTEST,D=this._programOptions;D.id=S;const b=m.getMaterialProgram(n,c,D);n.useProgram(b),b.setUniformMatrix3fv("u_displayMat3",x===1?a.displayMat3:a.displayViewMat3),b.setUniform2fv("u_circleTranslation",P),b.setUniform1f("u_depth",f.z),b.setUniform1f("u_antialiasingWidth",p);let I=-1;if(S){const h=Y(d+1);b.setUniform4fv("u_id",h)}for(const h of t){if(!h.layerData.has(d))continue;h.key.level!==I&&(I=h.key.level,c.setDataUniforms(b,i,f,I,l));const _=h.layerData.get(d);if(!_.circleIndexCount)continue;_.prepareForRendering(n);const v=_.circleVertexArrayObject;E(v)||(n.bindVAO(v),b.setUniformMatrix3fv("u_dvsMat3",h.transforms.dvs),o!==h.key.level?n.setStencilFunction(514,h.stencilRef,255):n.setStencilFunction(516,255,255),n.drawElements(4,_.circleIndexCount,5125,Uint32Array.BYTES_PER_ELEMENT*_.circleIndexStart),h.triangleCount+=_.circleIndexCount/3)}}}const Fe=1/65536;class Gt extends L{constructor(){super(...arguments),this._fillProgramOptions={id:!1,pattern:!1},this._outlineProgramOptions={id:!1}}dispose(){}drawMany(e,t){const{displayLevel:n,drawPhase:i,renderPass:o,spriteMosaic:a,styleLayerUID:s}=e;let u=!1;for(const h of t)if(h.layerData.has(s)){const _=h.layerData.get(s);if(_.fillIndexCount>0||_.outlineIndexCount>0){u=!0;break}}if(!u)return;const l=e.styleLayer,d=l.getPaintProperty("fill-pattern"),f=d!==void 0,c=f&&d.isDataDriven;let m;if(f&&!c){const h=d.getValue(n);m=a.getMosaicItemPosition(h,!0)}const p=!f&&l.getPaintValue("fill-antialias",n);let P=!0,x=1;if(!f){const h=l.getPaintProperty("fill-color"),_=l.getPaintProperty("fill-opacity");if(!(h!=null&&h.isDataDriven||_!=null&&_.isDataDriven)){const v=l.getPaintValue("fill-color",n);x=l.getPaintValue("fill-opacity",n)*v[3],x>=1&&(P=!1)}}if(P&&o==="opaque")return;let S;i===A.HITTEST&&(S=Y(s+1));const D=l.getPaintValue("fill-translate",n),b=l.getPaintValue("fill-translate-anchor",n);(P||o!=="translucent")&&this._drawFill(e,s,l,t,D,b,f,m,c,S);const I=!l.hasDataDrivenOutlineColor&&l.outlineUsesFillColor&&x<1;p&&o!=="opaque"&&!I&&this._drawOutline(e,s,l,t,D,b,S)}_drawFill(e,t,n,i,o,a,s,u,l,d){if(s&&!l&&E(u))return;const{context:f,displayLevel:c,state:m,drawPhase:p,painter:P,pixelRatio:x,spriteMosaic:S}=e,D=n.fillMaterial,b=P.vectorTilesMaterialManager,I=x>Ce?2:1,h=p===A.HITTEST,_=this._fillProgramOptions;_.id=h,_.pattern=s;const v=b.getMaterialProgram(f,D,_);if(f.useProgram(v),w(u)){const{page:g}=u,T=S.getPageSize(g);w(T)&&(S.bind(f,9729,g,F),v.setUniform2fv("u_mosaicSize",T),v.setUniform1i("u_texture",F))}v.setUniformMatrix3fv("u_displayMat3",a===1?m.displayMat3:m.displayViewMat3),v.setUniform2fv("u_fillTranslation",o),v.setUniform1f("u_depth",n.z+Fe),h&&v.setUniform4fv("u_id",d);let y=-1;for(const g of i){if(!g.layerData.has(t))continue;g.key.level!==y&&(y=g.key.level,D.setDataUniforms(v,c,n,y,S));const T=g.layerData.get(t);if(!T.fillIndexCount)continue;T.prepareForRendering(f);const C=T.fillVertexArrayObject;if(!E(C)){if(f.bindVAO(C),v.setUniformMatrix3fv("u_dvsMat3",g.transforms.dvs),f.setStencilFunction(514,g.stencilRef,255),s){const V=Math.max(2**(Math.round(c)-g.key.level),1),z=g.rangeX/(I*g.width*V);v.setUniform1f("u_patternFactor",z)}if(l){const V=T.patternMap;if(!V)continue;for(const[z,B]of V){const G=S.getPageSize(z);w(G)&&(S.bind(f,9729,z,F),v.setUniform2fv("u_mosaicSize",G),v.setUniform1i("u_texture",F),f.drawElements(4,B[1],5125,Uint32Array.BYTES_PER_ELEMENT*B[0]))}}else f.drawElements(4,T.fillIndexCount,5125,Uint32Array.BYTES_PER_ELEMENT*T.fillIndexStart);g.triangleCount+=T.fillIndexCount/3}}}_drawOutline(e,t,n,i,o,a,s){const{context:u,displayLevel:l,state:d,drawPhase:f,painter:c,pixelRatio:m,spriteMosaic:p}=e,P=n.outlineMaterial,x=c.vectorTilesMaterialManager,S=.75/m,D=f===A.HITTEST,b=this._outlineProgramOptions;b.id=D;const I=x.getMaterialProgram(u,P,b);u.useProgram(I),I.setUniformMatrix3fv("u_displayMat3",a===1?d.displayMat3:d.displayViewMat3),I.setUniform2fv("u_fillTranslation",o),I.setUniform1f("u_depth",n.z+Fe),I.setUniform1f("u_outline_width",S),D&&I.setUniform4fv("u_id",s);let h=-1;for(const _ of i){if(!_.layerData.has(t))continue;_.key.level!==h&&(h=_.key.level,P.setDataUniforms(I,l,n,h,p));const v=_.layerData.get(t);if(v.prepareForRendering(u),!v.outlineIndexCount)continue;const y=v.outlineVertexArrayObject;E(y)||(u.bindVAO(y),I.setUniformMatrix3fv("u_dvsMat3",_.transforms.dvs),u.setStencilFunction(514,_.stencilRef,255),u.drawElements(4,v.outlineIndexCount,5125,Uint32Array.BYTES_PER_ELEMENT*v.outlineIndexStart),_.triangleCount+=v.outlineIndexCount/3)}}}class Ht extends L{constructor(){super(...arguments),this._programOptions={id:!1,pattern:!1,sdf:!1}}dispose(){}drawMany(e,t){const{context:n,displayLevel:i,state:o,drawPhase:a,painter:s,pixelRatio:u,spriteMosaic:l,styleLayerUID:d}=e;if(!t.some(C=>{var V,z;return(V=(z=C.layerData.get(d))==null?void 0:z.lineIndexCount)!=null&&V}))return;const f=e.styleLayer,c=f.lineMaterial,m=s.vectorTilesMaterialManager,p=f.getPaintValue("line-translate",i),P=f.getPaintValue("line-translate-anchor",i),x=f.getPaintProperty("line-pattern"),S=x!==void 0,D=S&&x.isDataDriven;let b,I;if(S&&!D){const C=x.getValue(i);b=l.getMosaicItemPosition(C)}let h=!1;if(!S){const C=f.getPaintProperty("line-dasharray");if(I=C!==void 0,h=I&&C.isDataDriven,I&&!h){const V=C.getValue(i),z=f.getDashKey(V,f.getLayoutValue("line-cap",i));b=l.getMosaicItemPosition(z)}}const _=1/u,v=a===A.HITTEST,y=this._programOptions;y.id=v,y.pattern=S,y.sdf=I;const g=m.getMaterialProgram(n,c,y);if(n.useProgram(g),g.setUniformMatrix3fv("u_displayViewMat3",o.displayViewMat3),g.setUniformMatrix3fv("u_displayMat3",P===1?o.displayMat3:o.displayViewMat3),g.setUniform2fv("u_lineTranslation",p),g.setUniform1f("u_depth",f.z),g.setUniform1f("u_antialiasing",_),v){const C=Y(d+1);g.setUniform4fv("u_id",C)}if(b&&w(b)){const{page:C}=b,V=l.getPageSize(C);w(V)&&(l.bind(n,9729,C,F),g.setUniform2fv("u_mosaicSize",V),g.setUniform1i("u_texture",F))}let T=-1;for(const C of t){if(!C.layerData.has(d))continue;C.key.level!==T&&(T=C.key.level,c.setDataUniforms(g,i,f,T,l));const V=2**(i-T)/u;g.setUniform1f("u_zoomFactor",V);const z=C.layerData.get(d);if(!z.lineIndexCount)continue;z.prepareForRendering(n);const B=z.lineVertexArrayObject;if(!E(B)){if(n.bindVAO(B),g.setUniformMatrix3fv("u_dvsMat3",C.transforms.dvs),n.setStencilFunction(514,C.stencilRef,255),D||h){const G=z.patternMap;if(!G)continue;for(const[Z,O]of G){const k=l.getPageSize(Z);w(k)&&(l.bind(n,9729,Z,F),g.setUniform2fv("u_mosaicSize",k),g.setUniform1i("u_texture",F),n.drawElements(4,O[1],5125,Uint32Array.BYTES_PER_ELEMENT*O[0]))}}else n.drawElements(4,z.lineIndexCount,5125,Uint32Array.BYTES_PER_ELEMENT*z.lineIndexStart);C.triangleCount+=z.lineIndexCount/3}}}}const Wt=1/65536;class kt extends L{constructor(){super(...arguments),this._iconProgramOptions={id:!1,sdf:!1},this._sdfProgramOptions={id:!1},this._spritesTextureSize=qe()}dispose(){}drawMany(e,t){const{drawPhase:n,styleLayerUID:i}=e,o=e.styleLayer;let a;n===A.HITTEST&&(a=Y(i+1)),this._drawIcons(e,o,t,a),this._drawText(e,o,t,a)}_drawIcons(e,t,n,i){const{context:o,displayLevel:a,drawPhase:s,painter:u,spriteMosaic:l,state:d,styleLayerUID:f}=e,c=t.iconMaterial,m=u.vectorTilesMaterialManager;let p,P=!1;for(const T of n)if(T.layerData.has(f)&&(p=T.layerData.get(f),p.iconPerPageElementsMap.size>0)){P=!0;break}if(!P)return;const x=t.getPaintValue("icon-translate",a),S=t.getPaintValue("icon-translate-anchor",a);let D=t.getLayoutValue("icon-rotation-alignment",a);D===2&&(D=t.getLayoutValue("symbol-placement",a)===0?1:0);const b=D===0,I=t.getLayoutValue("icon-keep-upright",a)&&b,h=p.isIconSDF,_=s===A.HITTEST,v=this._iconProgramOptions;v.id=_,v.sdf=h;const y=m.getMaterialProgram(o,c,v);o.useProgram(y),y.setUniformMatrix3fv("u_displayViewMat3",D===0?d.displayViewMat3:d.displayMat3),y.setUniformMatrix3fv("u_displayMat3",S===1?d.displayMat3:d.displayViewMat3),y.setUniform2fv("u_iconTranslation",x),y.setUniform1f("u_depth",t.z),y.setUniform1f("u_mapRotation",De(d.rotation)),y.setUniform1f("u_keepUpright",I?1:0),y.setUniform1f("u_level",10*a),y.setUniform1i("u_texture",F),y.setUniform1f("u_fadeDuration",Ie/1e3),_&&y.setUniform4fv("u_id",i);let g=-1;for(const T of n){if(!T.layerData.has(f)||(T.key.level!==g&&(g=T.key.level,c.setDataUniforms(y,a,t,g,l)),p=T.layerData.get(f),p.iconPerPageElementsMap.size===0))continue;p.prepareForRendering(o),p.updateOpacityInfo();const C=p.iconVertexArrayObject;if(!E(C)){o.bindVAO(C),y.setUniformMatrix3fv("u_dvsMat3",T.transforms.dvs),y.setUniform1f("u_time",(performance.now()-p.lastOpacityUpdate)/1e3);for(const[V,z]of p.iconPerPageElementsMap)this._renderIconRange(e,y,z,V,T)}}}_renderIconRange(e,t,n,i,o){const{context:a,spriteMosaic:s}=e;this._spritesTextureSize[0]=s.getWidth(i)/4,this._spritesTextureSize[1]=s.getHeight(i)/4,t.setUniform2fv("u_mosaicSize",this._spritesTextureSize),s.bind(a,9729,i,F),a.setStencilTestEnabled(!0),a.setStencilFunction(516,255,255),a.setStencilWriteMask(0),a.drawElements(4,n[1],5125,Uint32Array.BYTES_PER_ELEMENT*n[0]),o.triangleCount+=n[1]/3}_drawText(e,t,n,i){const{context:o,displayLevel:a,drawPhase:s,glyphMosaic:u,painter:l,pixelRatio:d,spriteMosaic:f,state:c,styleLayerUID:m}=e,p=t.textMaterial,P=l.vectorTilesMaterialManager;let x,S=!1;for(const N of n)if(N.layerData.has(m)&&(x=N.layerData.get(m),x.glyphPerPageElementsMap.size>0)){S=!0;break}if(!S)return;const D=t.getPaintProperty("text-opacity");if(D&&!D.isDataDriven&&D.getValue(a)===0)return;const b=t.getPaintProperty("text-color"),I=!b||b.isDataDriven||b.getValue(a)[3]>0,h=t.getPaintProperty("text-halo-width"),_=t.getPaintProperty("text-halo-color"),v=(!h||h.isDataDriven||h.getValue(a)>0)&&(!_||_.isDataDriven||_.getValue(a)[3]>0);if(!I&&!v)return;const y=24/8;let g=t.getLayoutValue("text-rotation-alignment",a);g===2&&(g=t.getLayoutValue("symbol-placement",a)===0?1:0);const T=g===0,C=t.getLayoutValue("text-keep-upright",a)&&T,V=s===A.HITTEST,z=.8*y/d;this._glyphTextureSize||(this._glyphTextureSize=j(u.width/4,u.height/4));const B=t.getPaintValue("text-translate",a),G=t.getPaintValue("text-translate-anchor",a),Z=this._sdfProgramOptions;Z.id=V;const O=P.getMaterialProgram(o,p,Z);o.useProgram(O),O.setUniformMatrix3fv("u_displayViewMat3",g===0?c.displayViewMat3:c.displayMat3),O.setUniformMatrix3fv("u_displayMat3",G===1?c.displayMat3:c.displayViewMat3),O.setUniform2fv("u_textTranslation",B),O.setUniform1f("u_depth",t.z+Wt),O.setUniform2fv("u_mosaicSize",this._glyphTextureSize),O.setUniform1f("u_mapRotation",De(c.rotation)),O.setUniform1f("u_keepUpright",C?1:0),O.setUniform1f("u_level",10*a),O.setUniform1i("u_texture",Te),O.setUniform1f("u_antialiasingWidth",z),O.setUniform1f("u_fadeDuration",Ie/1e3),V&&O.setUniform4fv("u_id",i);let k=-1;for(const N of n){if(!N.layerData.has(m)||(N.key.level!==k&&(k=N.key.level,p.setDataUniforms(O,a,t,k,f)),x=N.layerData.get(m),x.glyphPerPageElementsMap.size===0))continue;x.prepareForRendering(o),x.updateOpacityInfo();const _e=x.textVertexArrayObject;if(E(_e))continue;o.bindVAO(_e),O.setUniformMatrix3fv("u_dvsMat3",N.transforms.dvs),o.setStencilTestEnabled(!0),o.setStencilFunction(516,255,255),o.setStencilWriteMask(0);const Ge=(performance.now()-x.lastOpacityUpdate)/1e3;O.setUniform1f("u_time",Ge),x.glyphPerPageElementsMap.forEach((He,We)=>{this._renderGlyphRange(o,He,We,u,O,v,I,N)})}}_renderGlyphRange(e,t,n,i,o,a,s,u){i.bind(e,9729,n,Te),a&&(o.setUniform1f("u_halo",1),e.drawElements(4,t[1],5125,Uint32Array.BYTES_PER_ELEMENT*t[0]),u.triangleCount+=t[1]/3),s&&(o.setUniform1f("u_halo",0),e.drawElements(4,t[1],5125,Uint32Array.BYTES_PER_ELEMENT*t[0]),u.triangleCount+=t[1]/3)}}class Q extends L{prepareState({context:e},t,n){const i=n&&n.indexOf("id")!==-1;e.setBlendingEnabled(!i),e.setBlendFunctionSeparate(1,771,1,771),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!0),e.setStencilFunction(514,t.stencilRef,255)}draw(e,t,n){const i=this.getGeometryType();t.commit(e);const o=t.getGeometry(i);E(o)||(e.timeline.begin(this.name),e.attributeView.bindTextures(e.context),o.forEachCommand(a=>this.drawGeometry(e,t,a,n)))}_setSharedUniforms(e,t,n){const{displayLevel:i,pixelRatio:o,state:a}=t;e.setUniform1f("u_pixelRatio",o),e.setUniformMatrix3fv("u_dvsMat3",n.transforms.dvs,!1,!0),e.setUniformMatrix3fv("u_displayViewMat3",a.displayViewMat3,!1,!0),e.setUniform1f("u_currentZoom",Math.round(i*ot)),e.setUniform1i("u_attributeTextureSize",t.attributeView.size),e.setUniform1i("u_attributeData0",at),e.setUniform1i("u_attributeData1",rt),e.setUniform1i("u_attributeData2",st),e.setUniform1i("u_attributeData3",lt)}_setSizeVVUniforms(e,t,n,i){if(e.vvSizeMinMaxValue&&t.setUniform4fv("u_vvSizeMinMaxValue",n.vvSizeMinMaxValue),e.vvSizeScaleStops&&t.setUniform1f("u_vvSizeScaleStopsValue",n.vvSizeScaleStopsValue),e.vvSizeFieldStops){const o=n.getSizeVVFieldStops(i.key.level);t.setUniform1fv("u_vvSizeFieldStopsValues",o.values),t.setUniform1fv("u_vvSizeFieldStopsSizes",o.sizes)}e.vvSizeUnitValue&&t.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",n.vvSizeUnitValueToPixelsRatio)}_setColorAndOpacityVVUniforms(e,t,n){e.vvColor&&(t.setUniform1fv("u_vvColorValues",n.vvColorValues),t.setUniform4fv("u_vvColors",n.vvColors)),e.vvOpacity&&(t.setUniform1fv("u_vvOpacityValues",n.vvOpacityValues),t.setUniform1fv("u_vvOpacities",n.vvOpacities))}_setRotationVVUniforms(e,t,n){e.vvRotation&&t.setUniform1f("u_vvRotationType",n.vvMaterialParameters.vvRotationType==="geographic"?0:1)}}const $t=r=>{const e={geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_id",count:3,type:5121},{location:2,name:"a_bitset",count:1,type:5121}]};return r.dotDensity?(e.geometry.push({location:3,name:"a_inverseArea",count:1,type:5126}),W(r.data,e)):(e.geometry.push({location:3,name:"a_color",count:4,type:5121,normalized:!0}),r.simple||e.geometry.push({location:4,name:"a_aux1",count:4,type:5123}),e.geometry.push({location:5,name:"a_aux2",count:4,type:5121},{location:6,name:"a_aux3",count:4,type:5121}),r.simple||e.geometry.push({location:7,name:"a_zoomRange",count:2,type:5123}),W(r.data,e))};class Zt extends Q{constructor(){super(...arguments),this._dotTextureSize=0,this._dotTextures=null,this._dotSamplers=new Int32Array([ct,ut])}dispose(){this._disposeTextures()}getGeometryType(){return q.FILL}drawGeometry(e,t,n,i){const{context:o,painter:a,rendererInfo:s,requiredLevel:u}=e,l=dt.load(n.materialKey),{bufferLayouts:d,attributes:f}=$t(l),c=a.materialManager.getMaterialProgram(e,l,"materials/fill",f,i);if(o.useProgram(c),this._setSharedUniforms(c,e,t),c.setUniform2f("u_tileOffset",512*t.key.col,512*t.key.row),l.textureBinding){a.textureManager.bindTextures(o,c,l);const p=1/2**(u-t.key.level)/e.pixelRatio;c.setUniform1f("u_zoomFactor",p)}const m=1/e.pixelRatio;if(c.setUniform1f("u_blur",m),c.setUniform1f("u_antialiasing",m),this._setSizeVVUniforms(l,c,s,t),this._setColorAndOpacityVVUniforms(l,c,s),l.dotDensity){const p=fe/s.ddDotSize,P=p*window.devicePixelRatio*p*window.devicePixelRatio,x=1/2**(u-t.key.level),S=1/x*(1/x),D=s.ddDotScale?e.state.scale/s.ddDotScale:1;c.setUniform1f("u_tileZoomFactor",x),c.setUniform1f("u_tileDotsOverArea",P/(fe*window.devicePixelRatio*fe*window.devicePixelRatio)),c.setUniformMatrix4fv("u_dotColors",s.ddColors),c.setUniform4fv("u_isActive",s.ddActiveDots),c.setUniform4fv("u_dotBackgroundColor",s.ddBackgroundColor),c.setUniform1f("u_dotValue",Math.max(1,s.ddDotValue*D*S)),this._bindDotDensityTextures(o,c,s,p)}n.draw(o,d,f)}_disposeTextures(){if(this._dotTextures){for(let e=0;e<this._dotTextures.length;e++)this._dotTextures[e].dispose();this._dotTextures=null}}_bindDotDensityTextures(e,t,n,i){const o=this._createDotDensityTextures(e,i,n.ddSeed);t.setUniform1iv("u_dotTextures",this._dotSamplers);for(let a=0;a<o.length;a++)e.bindTexture(o[a],this._dotSamplers[a])}_createDotDensityTextures(e,t,n){if(this._dotTextureSize===t&&this._seed===n||(this._disposeTextures(),this._dotTextureSize=t,this._seed=n),this._dotTextures===null){const i=new Ke(n);this._dotTextures=[this._allocDotDensityTexture(e,t,i),this._allocDotDensityTexture(e,t,i)]}return this._dotTextures}_allocDotDensityTexture(e,t,n){const i=new Float32Array(t*t*4);for(let o=0;o<i.length;o++)i[o]=n.getFloat();return new K(e,{wrapMode:10497,pixelFormat:6408,dataType:5126,samplingMode:9728,width:t,height:t},i)}}const jt=r=>W(r.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_id",count:4,type:5121},{location:2,name:"a_color",count:4,type:5121,normalized:!0},{location:3,name:"a_haloColor",count:4,type:5121,normalized:!0},{location:4,name:"a_texAndSize",count:4,type:5121},{location:5,name:"a_refSymbolAndPlacementOffset",count:4,type:5121},{location:6,name:"a_glyphData",count:4,type:5121},{location:7,name:"a_vertexOffset",count:2,type:5122},{location:8,name:"a_texCoords",count:2,type:5123}]});class Yt extends Q{dispose(){}getGeometryType(){return q.LABEL}drawGeometry(e,t,n,i){const{context:o,painter:a,state:s,rendererInfo:u}=e,l=mt.load(n.materialKey),d=l.mapAligned?1:0;if(!d&&Math.abs(t.key.level-Math.round(100*e.displayLevel)/100)>=1)return;const{bufferLayouts:f,attributes:c}=jt(l),m=a.materialManager.getMaterialProgram(e,l,"materials/label",c,i);e.context.setStencilFunction(514,0,255),o.useProgram(m),this._setSharedUniforms(m,e,t),a.textureManager.bindTextures(o,m,l);const p=d===1?s.displayViewMat3:s.displayMat3;this._setSizeVVUniforms(l,m,u,t),m.setUniform1f("u_mapRotation",Math.floor(s.rotation/360*254)),m.setUniform1f("u_mapAligned",d),m.setUniformMatrix3fv("u_displayMat3",p),m.setUniform1f("u_opacity",1),m.setUniform2fv("u_screenSize",e.state.size),m.setUniform1f("u_isHalo",1),n.draw(o,f,c),m.setUniform1f("u_isHalo",0),n.draw(o,f,c),o.setStencilTestEnabled(!0),o.setBlendingEnabled(!0)}}const qt=r=>W(r.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_id",count:4,type:5121},{location:2,name:"a_color",count:4,type:5121,normalized:!0},{location:3,name:"a_offsetAndNormal",count:4,type:5120},{location:4,name:"a_accumulatedDistanceAndHalfWidth",count:2,type:5123},{location:5,name:"a_tlbr",count:4,type:5123},{location:6,name:"a_segmentDirection",count:4,type:5120},{location:7,name:"a_aux",count:2,type:5123},{location:8,name:"a_zoomRange",count:2,type:5123}]});class Kt extends Q{dispose(){}getGeometryType(){return q.LINE}drawGeometry(e,t,n,i){const{context:o,painter:a,rendererInfo:s,displayLevel:u}=e,l=_t.load(n.materialKey),{bufferLayouts:d,attributes:f}=qt(l),c=a.materialManager.getMaterialProgram(e,l,"materials/line",f,i),m=1/e.pixelRatio,p=0;o.useProgram(c),this._setSharedUniforms(c,e,t),l.textureBinding&&a.textureManager.bindTextures(o,c,l);const P=2**(u-t.key.level)/e.pixelRatio;c.setUniform1f("u_zoomFactor",P),c.setUniform1f("u_blur",p+m),c.setUniform1f("u_antialiasing",m),this._setSizeVVUniforms(l,c,s,t),this._setColorAndOpacityVVUniforms(l,c,s),o.setFaceCullingEnabled(!1),n.draw(o,d,f)}}const Xt=r=>W(r.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_vertexOffset",count:2,type:5122},{location:2,name:"a_texCoords",count:2,type:5123},{location:3,name:"a_bitSetAndDistRatio",count:2,type:5123},{location:4,name:"a_id",count:4,type:5121},{location:5,name:"a_color",count:4,type:5121,normalized:!0},{location:6,name:"a_outlineColor",count:4,type:5121,normalized:!0},{location:7,name:"a_sizeAndOutlineWidth",count:4,type:5121},{location:8,name:"a_zoomRange",count:2,type:5123}]});class Jt extends Q{dispose(){}getGeometryType(){return q.MARKER}drawGeometry(e,t,n,i){const{context:o,painter:a,rendererInfo:s,state:u}=e,l=vt.load(n.materialKey),{bufferLayouts:d,attributes:f}=Xt(l),c=a.materialManager.getMaterialProgram(e,l,"materials/icon",f,i);o.useProgram(c),l.textureBinding&&a.textureManager.bindTextures(o,c,l,!0),this._setSharedUniforms(c,e,t);const m=l.vvRotation?u.displayViewMat3:u.displayMat3;c.setUniformMatrix3fv("u_displayMat3",m),this._setSizeVVUniforms(l,c,s,t),this._setColorAndOpacityVVUniforms(l,c,s),this._setRotationVVUniforms(l,c,s),n.draw(o,d,f)}}const Qt=r=>W(r.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_id",count:4,type:5121},{location:2,name:"a_color",count:4,type:5121,normalized:!0},{location:3,name:"a_haloColor",count:4,type:5121,normalized:!0},{location:4,name:"a_texFontSize",count:4,type:5121},{location:5,name:"a_aux",count:4,type:5120},{location:6,name:"a_zoomRange",count:2,type:5123},{location:7,name:"a_vertexOffset",count:2,type:5122},{location:8,name:"a_texCoords",count:2,type:5123}]});class en extends Q{dispose(){}getGeometryType(){return q.TEXT}drawGeometry(e,t,n,i){const{context:o,painter:a,rendererInfo:s,state:u}=e,l=pt.load(n.materialKey),{bufferLayouts:d,attributes:f}=Qt(l),c=a.materialManager.getMaterialProgram(e,l,"materials/text",f,i);o.useProgram(c),this._setSharedUniforms(c,e,t),a.textureManager.bindTextures(o,c,l),c.setUniformMatrix3fv("u_displayMat3",u.displayMat3),c.setUniformMatrix3fv("u_displayViewMat3",u.displayViewMat3),this._setSizeVVUniforms(l,c,s,t),this._setColorAndOpacityVVUniforms(l,c,s),this._setRotationVVUniforms(l,c,s),c.setUniform1f("u_isHalo",1),n.draw(o,d,f),c.setUniform1f("u_isHalo",0),n.draw(o,d,f)}}function tn(r,e,t="nearest",n=!1){var i;const o=!(n&&e.pixelType==="u8"),a=o?5126:5121,s=e.pixels==null||e.pixels.length===0?null:o?e.getAsRGBAFloat():e.getAsRGBA(),u=(i=r.capabilities.textureFloat)==null?void 0:i.textureFloatLinear,l={width:e.width,height:e.height,target:3553,pixelFormat:6408,internalFormat:r.webglVersion==="webgl2"&&o?34836:6408,samplingMode:!u||t!=="bilinear"&&t!=="cubic"?9728:9729,dataType:a,wrapMode:33071,flipped:!1};return new K(r,l,s)}function nn(r,e){const t=4*e.size[0],n=e.size[1],i={width:t,height:n,target:3553,pixelFormat:6408,internalFormat:r.webglVersion==="webgl2"?34836:6408,dataType:5126,samplingMode:9728,wrapMode:33071,flipped:!1},o=new Float32Array(t*n*4);let a=0;for(let s=0;s<e.coefficients.length;s++)o[a++]=e.coefficients[s],s%3==2&&(o[a++]=1);return new K(r,i,o)}function Ue(r,e){const t={width:e.length/4,height:1,target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,flipped:!1};return new K(r,t,e)}function on(r,e,t,n=1,i=!0,o=!1){return{u_flipY:i,u_isFloatTexture:o,u_applyTransform:!!r,u_opacity:n,u_transformSpacing:r?r.spacing:null,u_transformGridSize:r?r.size:null,u_targetImageSize:e,u_srcImageSize:t}}function an(r,e){return{u_colormapOffset:e||0,u_colormapMaxIndex:r?r.length/4-1:null}}function rn(r,e){return{u_scale:r,u_offset:e}}function sn(r){return{u_bandCount:r.bandCount,u_minOutput:r.outMin,u_maxOutput:r.outMax,u_minCutOff:r.minCutOff,u_maxCutOff:r.maxCutOff,u_factor:r.factor,u_useGamma:r.useGamma,u_gamma:r.gamma,u_gammaCorrection:r.gammaCorrection}}function ln(r){return{u_hillshadeType:r.hillshadeType,u_sinZcosAs:r.sinZcosAs,u_sinZsinAs:r.sinZsinAs,u_cosZs:r.cosZs,u_weights:r.weights,u_factor:r.factor,u_minValue:r.minValue,u_maxValue:r.maxValue}}function cn(r,e){const t=r.gl,n=e.glName,i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS),o=new Map;let a;for(let s=0;s<i;s++)a=t.getActiveUniform(n,s),a&&o.set(a.name,{location:t.getUniformLocation(n,a.name),info:a});return o}function re(r,e,t){Object.keys(t).forEach(n=>{const i=e.get(n)||e.get(n+"[0]");i&&fn(r,n,t[n],i)})}function un(r,e,t,n){t.length===n.length&&(n.some(i=>i==null)||t.some(i=>i==null)||t.forEach((i,o)=>{e.setUniform1i(i,o),r.bindTexture(n[o],o)}))}function fn(r,e,t,n){if(n===null||t==null)return!1;const{info:i}=n;switch(i.type){case 5126:i.size>1?r.setUniform1fv(e,t):r.setUniform1f(e,t);break;case 35664:r.setUniform2fv(e,t);break;case 35665:r.setUniform3fv(e,t);break;case 35666:r.setUniform4fv(e,t);break;case 35675:r.setUniformMatrix3fv(e,t);break;case 35676:r.setUniformMatrix4fv(e,t);break;case 5124:i.size>1?r.setUniform1iv(e,t):r.setUniform1i(e,t);break;case 35670:r.setUniform1i(e,t?1:0);break;case 35667:case 35671:r.setUniform2iv(e,t);break;case 35668:case 35672:r.setUniform3iv(e,t);break;case 35669:case 35673:r.setUniform4iv(e,t);break;default:return!1}return!0}const dn={bandCount:3,outMin:0,outMax:1,minCutOff:[0,0,0],maxCutOff:[255,255,255],factor:[1/255,1/255,1/255],useGamma:!1,gamma:[1,1,1],gammaCorrection:[1,1,1],colormap:null,colormapOffset:null,stretchType:"none",type:"stretch"};class En extends Pe{constructor(e=null,t=null,n=null){super(),this._textureInvalidated=!0,this._colormapTextureInvalidated=!0,this._supportsBilinearTexture=!0,this.stencilRef=0,this.coordScale=[1,1],this._symbolizerParameters=null,this.height=null,this.isRendereredSource=!1,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this.rawPixelData=null,this._suspended=!1,this._bandIds=null,this._interpolation=null,this._transformGrid=null,this.width=null,this.x=0,this.y=0,this.source=e,this.transformGrid=t,this.interpolation=n}destroy(){const e=this.getTextures();e==null||e.textures.forEach(t=>t.dispose()),this._rasterTexture=null,this._transformGridTexture=null,this._colormapTexture=null}get symbolizerParameters(){return this._symbolizerParameters||dn}set symbolizerParameters(e){this._symbolizerParameters!==e&&(this._symbolizerParameters=e,this._colormapTextureInvalidated=!0)}get source(){return this._source}set source(e){this._source!==e&&(this._source=e,this._rasterTexture&&(this._rasterTexture.dispose(),this._rasterTexture=null,this._rasterTextureBandIds=null),this.invalidateTexture())}get suspended(){return this._suspended}set suspended(e){this._suspended&&!e&&this.stage&&(this.ready(),this.requestRender()),this._suspended=e}get bandIds(){return this._bandIds}set bandIds(e){this._bandIds=e,this._isBandIdschanged(e)&&this.invalidateTexture()}get interpolation(){return this._interpolation||"nearest"}set interpolation(e){this._interpolation=e,this._rasterTexture&&this._rasterTexture.setSamplingMode(this._getTextureSamplingMethod(e)==="bilinear"?9729:9728)}get transformGrid(){return this._transformGrid}set transformGrid(e){this._transformGrid=e,this._transformGridTexture&&(this._transformGridTexture.dispose(),this._transformGridTexture=null)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRender())}_createTransforms(){return{dvs:te()}}setTransform(e){const t=Xe(this.transforms.dvs),[n,i]=e.toScreenNoRotation([0,0],[this.x,this.y]),o=this.resolution/this.pixelRatio/e.resolution,a=o*this.width,s=o*this.height,u=Math.PI*this.rotation/180;ce(t,t,j(n,i)),ce(t,t,j(a/2,s/2)),Je(t,t,-u),ce(t,t,j(-a/2,-s/2)),Qe(t,t,j(a,s)),et(this.transforms.dvs,e.displayViewMat3,t)}getTextures(){if(!this._rasterTexture)return null;const e=[],t=[];return this._transformGridTexture&&(t.push(this._transformGridTexture),e.push("u_transformGrid")),this._rasterTexture&&(t.push(this._rasterTexture),e.push("u_image")),this._colormapTexture&&(t.push(this._colormapTexture),e.push("u_colormap")),{names:e,textures:t}}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}updateTexture({context:e}){var t,n,i;if(!this.stage)return(t=this._rasterTexture)==null||t.dispose(),(n=this._transformGridTexture)==null||n.dispose(),(i=this._colormapTexture)==null||i.dispose(),this._rasterTexture=null,this._rasterTextureBandIds=null,this._transformGridTexture=null,void(this._colormapTexture=null);const o=this._isValidSource(this.source);o&&this._colormapTextureInvalidated&&(this._colormapTextureInvalidated=!1,this._updateColormapTexture(e)),this._textureInvalidated&&(this._textureInvalidated=!1,this._createOrDestroyRasterTexture(e),this._rasterTexture&&(o?this.transformGrid&&!this._transformGridTexture&&(this._transformGridTexture=nn(e,this.transformGrid)):this._rasterTexture.setData(null)),this.suspended||(this.ready(),this.requestRender()))}_createOrDestroyRasterTexture(e){var t,n;const i=w(this.source)?gt(this.source,this.bandIds):null;if(!this._isValidSource(i))return void(this._rasterTexture&&(this._rasterTexture.dispose(),this._rasterTextureBandIds=null,this._rasterTexture=null));const o=!this._isBandIdschanged(this.bandIds);if(this._rasterTexture){if(o)return;this._rasterTexture.dispose(),this._rasterTextureBandIds=null,this._rasterTexture=null}this._supportsBilinearTexture=(t=e.capabilities.textureFloat)==null?void 0:t.textureFloatLinear;const a=this._getTextureSamplingMethod(this.interpolation),s=this.isRendereredSource||!((n=e.capabilities.textureFloat)!=null&&n.textureFloat);this._rasterTexture=tn(e,i,a,s),this._rasterTextureBandIds=this.bandIds?[...this.bandIds]:null}_isBandIdschanged(e){const t=this._rasterTextureBandIds;return!(t==null&&e==null||t&&e&&t.join("")===e.join(""))}_isValidSource(e){var t;return w(e)&&((t=e.pixels)==null?void 0:t.length)>0}_getTextureSamplingMethod(e){const{type:t,colormap:n}=this.symbolizerParameters,i=t==="lut"||t==="stretch"&&w(n);return!this._supportsBilinearTexture||i||e!=="bilinear"&&e!=="cubic"?"nearest":"bilinear"}_updateColormapTexture(e){const t=this._colormap,n=this.symbolizerParameters.colormap;return n?t?n.length!==t.length||n.some((i,o)=>i!==t[o])?(this._colormapTexture&&(this._colormapTexture.dispose(),this._colormapTexture=null),this._colormapTexture=Ue(e,n),void(this._colormap=n)):void 0:(this._colormapTexture=Ue(e,n),void(this._colormap=n)):(this._colormapTexture&&(this._colormapTexture.dispose(),this._colormapTexture=null),void(this._colormap=null))}}function mn(r){return w(r.source)}class _n extends L{constructor(){super(...arguments),this._desc={lut:{vsPath:"raster/lut",fsPath:"raster/lut",attributes:new Map([["a_position",0],["a_texcoord",1]])},stretch:{vsPath:"raster/stretch",fsPath:"raster/stretch",attributes:new Map([["a_position",0],["a_texcoord",1]])},hillshade:{vsPath:"raster/hillshade",fsPath:"raster/hillshade",attributes:new Map([["a_position",0],["a_texcoord",1]])}},this._rendererUniformInfos=new Map}dispose(){this._quad&&this._quad.dispose()}prepareState({context:e},t){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(1,771,1,771),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!0),e.setStencilFunction(514,t.stencilRef,255)}draw(e,t){var n;if(!mn(t)||t.suspended)return;e.timeline.begin(this.name);const i=!((n=e.context.capabilities.textureFloat)!=null&&n.textureFloatLinear);t.updateTexture(e);const o=this.getShaderVariations(t,i),a=e.painter.materialManager.getProgram(e,this._desc[t.symbolizerParameters.type],o);this.drawWithProgram(e.context,a,t),e.timeline.end(this.name)}drawWithProgram(e,t,n,i=1,o=[0,0],a=!1){this._quad||(this._quad=new ze(e,[0,0,1,0,0,1,1,1]));const{symbolizerParameters:s,transformGrid:u,width:l,height:d,opacity:f}=n,c=s.type;e.useProgram(t);const m=this.getShaderVariations(n),p=this.getUniformInfos(c,e,t,m),{names:P,textures:x}=n.getTextures();un(e,t,P,x);const S=rn(i,o),D=on(u,[l,d],[n.source.width,n.source.height],f,a);if(re(t,p,ee(ee({u_coordScale:n.coordScale,u_dvsMat3:n.transforms.dvs},S),D)),s.colormap){const{colormap:b,colormapOffset:I}=s,h=an(b,I);re(t,p,h)}if(s.type==="stretch"){const b=sn(s);re(t,p,b)}else if(s.type==="hillshade"){const b=ln(s);re(t,p,b)}this._quad.draw()}getUniformInfos(e,t,n,i){const o=i.length>0?e+"-"+i.join("-"):e;if(this._rendererUniformInfos.has(o))return this._rendererUniformInfos.get(o);const a=cn(t,n);return this._rendererUniformInfos.set(o,a),a}getShaderVariations(e,t=!1){const n=[],{interpolation:i}=e,{type:o,colormap:a}=e.symbolizerParameters;return i==="cubic"?n.push("bicubic"):i==="bilinear"&&o==="stretch"&&a!=null?(n.push("bilinear"),n.push("nnedge")):t&&i==="bilinear"&&n.push("bilinear"),e.isRendereredSource?n.push("noop"):a&&n.push("applyColormap"),e.transformGrid&&n.push("applyProjection"),n}}const se=new Float32Array([.27058823529411763,.4588235294117647,.7098039215686275,1,.396078431372549,.5372549019607843,.7215686274509804,1,.5176470588235295,.6196078431372549,.7294117647058823,1,.6352941176470588,.7058823529411765,.7411764705882353,1,.7529411764705882,.8,.7450980392156863,1,.8705882352941177,.8901960784313725,.7490196078431373,1,1,1,.7490196078431373,1,1,.8627450980392157,.6313725490196078,1,.9803921568627451,.7254901960784313,.5176470588235295,1,.9607843137254902,.596078431372549,.4117647058823529,1,.9294117647058824,.4588235294117647,.3176470588235294,1,.9098039215686274,.08235294117647059,.08235294117647059,1]),Ne={beaufort_ft:se,beaufort_m:se,beaufort_km:se,beaufort_mi:se,beaufort_kn:new Float32Array([.1568627450980392,.5725490196078431,.7803921568627451,1,.34901960784313724,.6352941176470588,.7294117647058823,1,.5058823529411764,.7019607843137254,.6705882352941176,1,.6274509803921569,.7607843137254902,.6078431372549019,1,.7490196078431373,.8313725490196079,.5411764705882353,1,.8549019607843137,.9019607843137255,.4666666666666667,1,.9803921568627451,.9803921568627451,.39215686274509803,1,.9882352941176471,.8352941176470589,.3254901960784314,1,.9882352941176471,.7019607843137254,.4,1,.9803921568627451,.5529411764705883,.20392156862745098,1,.9686274509803922,.43137254901960786,.16470588235294117,1,.9411764705882353,.2784313725490196,.11372549019607843,1]),classified_arrow:new Float32Array([.2196078431372549,.6588235294117647,0,1,.5450980392156862,1.2117647058823529,0,1,1,1,0,1,1,.5019607843137255,0,1,1,0,0,1]),ocean_current_m:new Float32Array([.3058823529411765,.10196078431372549,.6,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),ocean_current_kn:new Float32Array([0,0,0,1,0,.1450980392156863,.39215686274509803,1,.3058823529411765,.10196078431372549,.6,1,.592156862745098,0,.39215686274509803,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.6941176470588235,.3058823529411765,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.7019607843137254,.20392156862745098,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),single_arrow:new Float32Array([0,92/255,230/255,1]),wind_speed:new Float32Array([0,0,0,1])};class vn extends L{constructor(){super(...arguments),this._desc={magdir:{vsPath:"raster/magdir",fsPath:"raster/magdir",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])},scalar:{vsPath:"raster/scalar",fsPath:"raster/scalar",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])}}}dispose(){}prepareState({context:e},t){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(1,771,1,771),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!0),e.setStencilOp(7680,7680,7681),e.setStencilFunction(514,t.stencilRef,255)}draw(e,t){if(E(t.source)||t.source.validPixelCount===0)return;const{timeline:n}=e;if(n.begin(this.name),t.updateVectorFieldVAO(e),e.renderPass==="scalar"){const i=t.vaoData.scalar;i&&this._drawScalars(e,t,i.vao,i.elementCount)}else{const i=t.vaoData.magdir;i&&this._drawTriangles(e,t,i.vao,i.elementCount)}n.end(this.name)}_drawTriangles(e,t,n,i){const{context:o,painter:a}=e,{symbolizerParameters:s}=t,u=s.dataRange?["dataRange"]:[];s.rotationType==="geographic"&&u.push("rotationGeographic");const l=a.materialManager.getProgram(e,this._desc.magdir,u);o.useProgram(l);const{coordScale:d,opacity:f,transforms:c}=t;l.setUniform2fv("u_coordScale",d),l.setUniform1f("u_opacity",f),l.setUniformMatrix3fv("u_dvsMat3",c.dvs);const{style:m,dataRange:p,rotation:P,symbolPercentRange:x}=s;l.setUniform4fv("u_colors",Ne[m]||Ne.single_arrow),l.setUniform2fv("u_dataRange",p),l.setUniform1f("u_rotation",P),l.setUniform2fv("u_symbolPercentRange",x);const S=this._getSymbolSize(e,t);l.setUniform2fv("u_symbolSize",S),o.bindVAO(n),o.drawElements(4,i,5125,0)}_drawScalars(e,t,n,i){const{context:o,painter:a}=e,{symbolizerParameters:s}=t,u=[];s.style==="wind_speed"?u.push("innerCircle"):s.dataRange&&u.push("dataRange"),s.rotationType==="geographic"&&u.push("rotationGeographic");const l=a.materialManager.getProgram(e,this._desc.scalar,u);o.useProgram(l);const{coordScale:d,opacity:f,transforms:c}=t;l.setUniform2fv("u_coordScale",d),l.setUniform1f("u_opacity",f),l.setUniformMatrix3fv("u_dvsMat3",c.dvs);const{dataRange:m,symbolPercentRange:p}=s;l.setUniform2fv("u_dataRange",m),l.setUniform2fv("u_symbolPercentRange",p);const P=this._getSymbolSize(e,t);l.setUniform2fv("u_symbolSize",P),o.bindVAO(n),o.drawElements(4,i,5125,0)}_getSymbolSize(e,t){const n=2**(e.displayLevel-t.key.level),{symbolTileSize:i}=t.symbolizerParameters;return[i/(Math.round((t.width-t.offset[0])/i)*i)/n,i/(Math.round((t.height-t.offset[1])/i)*i)/n]}}const pn={marker:Jt,line:Kt,fill:Zt,text:en,label:Yt,clip:Rt,stencil:Ut,bitmap:Ct,raster:_n,rasterVF:vn,flow:bt,tileInfo:Ft,vtlBackground:Nt,vtlFill:Gt,vtlLine:Ht,vtlCircle:Bt,vtlSymbol:kt},gn=xe.getLogger("esri.views.2d.engine.webgl.Mesh2D"),hn=r=>{switch(r.BYTES_PER_ELEMENT){case 1:return 5121;case 2:return 5123;case 4:return 5125;default:throw new ue("Cannot get DataType of array")}},xn=(r,e,t,n)=>{let i=0;for(let o=1;o<t;o++){const a=r[2*(e+o-1)],s=r[2*(e+o-1)+1];i+=(r[2*(e+o)]-a)*(r[2*(e+o)+1]+s)}return n?i>0:i<0},Be=({coords:r,lengths:e},t)=>{const n=[];for(let i=0,o=0;i<e.length;o+=e[i],i+=1){const a=o,s=[];for(;i<e.length-1&&xn(r,o+e[i],e[i+1],t);i+=1,o+=e[i])s.push(o+e[i]-a);const u=r.slice(2*a,2*(o+e[i])),l=xt(u,s,2);for(const d of l)n.push(d+a)}return n};class R{constructor(e,t,n,i=!1){this._cache={},this.vertices=e,this.indices=t,this.primitiveType=n,this.isMapSpace=i}static fromRect({x:e,y:t,width:n,height:i}){const o=e,a=t,s=o+n,u=a+i;return R.fromScreenExtent({xmin:o,ymin:a,xmax:s,ymax:u})}static fromPath(e){const t=tt(new be,e.path,!1,!1),n=t.coords,i=new Uint32Array(Be(t,!0)),o=new Uint32Array(n.length/2);for(let a=0;a<o.length;a++)o[a]=M(Math.floor(n[2*a]),Math.floor(n[2*a+1]));return new R({geometry:o},i,4)}static fromGeometry(e,t){const n=t.geometry.type;switch(n){case"polygon":return R.fromPolygon(e,t.geometry);case"extent":return R.fromMapExtent(e,t.geometry);default:return gn.error(new ue("mapview-bad-type",`Unable to create a mesh from type ${n}`,t)),R.fromRect({x:0,y:0,width:1,height:1})}}static fromPolygon(e,t){const n=nt(new be,t,!1,!1),i=n.coords,o=new Uint32Array(Be(n,!1)),a=new Uint32Array(i.length/2),s=ye(),u=ye();for(let l=0;l<a.length;l++)it(s,i[2*l],i[2*l+1]),e.toScreen(u,s),a[l]=M(Math.floor(u[0]),Math.floor(u[1]));return new R({geometry:a},o,4,!0)}static fromScreenExtent({xmin:e,xmax:t,ymin:n,ymax:i}){const o={geometry:new Uint32Array([M(e,n),M(t,n),M(e,i),M(e,i),M(t,n),M(t,i)])},a=new Uint32Array([0,1,2,3,4,5]);return new R(o,a,4)}static fromMapExtent(e,t){const[n,i]=e.toScreen([0,0],[t.xmin,t.ymin]),[o,a]=e.toScreen([0,0],[t.xmax,t.ymax]),s={geometry:new Uint32Array([M(n,i),M(o,i),M(n,a),M(n,a),M(o,i),M(o,a)])},u=new Uint32Array([0,1,2,3,4,5]);return new R(s,u,4)}destroy(){w(this._cache.indexBuffer)&&this._cache.indexBuffer.dispose();for(const e in this._cache.vertexBuffers)w(this._cache.vertexBuffers[e])&&this._cache.vertexBuffers[e].dispose()}get elementType(){return hn(this.indices)}getIndexBuffer(e,t=35044){return this._cache.indexBuffer||(this._cache.indexBuffer=H.createIndex(e,t,this.indices)),this._cache.indexBuffer}getVertexBuffers(e,t=35044){return this._cache.vertexBuffers||(this._cache.vertexBuffers=Object.keys(this.vertices).reduce((n,i)=>ge(ee({},n),{[i]:H.createVertex(e,t,this.vertices[i])}),{})),this._cache.vertexBuffers}}const bn=xe.getLogger("esri.views.2d.engine.webgl.ClippingInfo"),le=r=>parseFloat(r)/100;class me extends Pe{constructor(e,t){super(),this._clip=t,this._cache={},this.stage=e,this._handle=t.watch("version",()=>this._invalidate()),this.ready()}static fromClipArea(e,t){return new me(e,t)}_destroyGL(){w(this._cache.mesh)&&(this._cache.mesh.destroy(),this._cache.mesh=null),w(this._cache.vao)&&(this._cache.vao.dispose(),this._cache.vao=null)}destroy(){this._destroyGL(),this._handle.remove()}getVAO(e,t,n,i){const[o,a]=t.size;if(this._clip.type!=="geometry"&&this._lastWidth===o&&this._lastHeight===a||(this._lastWidth=o,this._lastHeight=a,this._destroyGL()),E(this._cache.vao)){const s=this._createMesh(t,this._clip),u=s.getIndexBuffer(e),l=s.getVertexBuffers(e);this._cache.mesh=s,this._cache.vao=new $(e,n,i,l,u)}return this._cache.vao}_createTransforms(){return{dvs:te()}}_invalidate(){this._destroyGL(),this.requestRender()}_createScreenRect(e,t){const[n,i]=e.size,o=typeof t.left=="string"?le(t.left)*n:t.left,a=typeof t.right=="string"?le(t.right)*n:t.right,s=typeof t.top=="string"?le(t.top)*i:t.top,u=typeof t.bottom=="string"?le(t.bottom)*i:t.bottom,l=o,d=s;return{x:l,y:d,width:Math.max(n-a-l,0),height:Math.max(i-u-d,0)}}_createMesh(e,t){switch(t.type){case"rect":return R.fromRect(this._createScreenRect(e,t));case"path":return R.fromPath(t);case"geometry":return R.fromGeometry(e,t);default:return bn.error(new ue("mapview-bad-type","Unable to create ClippingInfo mesh from clip of type: ${clip.type}")),R.fromRect({x:0,y:0,width:1,height:1})}}}class Ln extends ht{constructor(){super(...arguments),this.name=this.constructor.name}set clips(e){this._clips=e,this.children.forEach(t=>t.clips=e),this._updateClippingInfo()}_createTransforms(){return{dvs:te()}}doRender(e){const t=this.createRenderParams(e),{painter:n,globalOpacity:i,profiler:o,drawPhase:a}=t,s=a===A.LABEL||a===A.HIGHLIGHT?1:i*this.computedOpacity;o.recordContainerStart(this.name),n.beforeRenderLayer(t,this._clippingInfos?255:0,s),this.updateTransforms(e.state),this.renderChildren(t),n.compositeLayer(t,s),o.recordContainerEnd()}renderChildren(e){E(this._renderPasses)&&(this._renderPasses=this.prepareRenderPasses(e.painter));for(const t of this.children)t.beforeRender(e);for(const t of this._renderPasses)try{t.render(e)}catch{}for(const t of this.children)t.afterRender(e)}createRenderParams(e){return e.requireFBO=this.requiresDedicatedFBO,e}prepareRenderPasses(e){return[e.registerRenderPass({name:"clip",brushes:[pn.clip],target:()=>this._clippingInfos,drawPhase:A.MAP|A.LABEL|A.LABEL_ALPHA|A.DEBUG|A.HIGHLIGHT})]}updateTransforms(e){for(const t of this.children)t.setTransform(e)}onAttach(){super.onAttach(),this._updateClippingInfo()}onDetach(){super.onDetach(),this._updateClippingInfo()}_updateClippingInfo(){if(w(this._clippingInfos)&&(this._clippingInfos.forEach(t=>t.destroy()),this._clippingInfos=null),!this.stage)return;const e=this._clips;w(e)&&e.length&&(this._clippingInfos=e.items.map(t=>me.fromClipArea(this.stage,t))),this.requestRender()}}export{Ln as a,Ut as b,bt as c,vn as d,pn as j,Ft as m,ze as r,ie as s,En as x};
