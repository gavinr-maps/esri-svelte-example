import{as as Z,ih as Ae,iA as Le,a1 as W,d as Se,T as ee,dw as w,aN as ke,n as De,dG as Ne,bT as j,dv as te,e2 as K,hO as He,dA as de,dB as qe,dy as Ge,hy as We,hz as Ve,v as J,fU as je,ai as ue,fX as Ke,o as Xe,iB as Ye,iC as Qe,eL as Je,gP as ce,iD as Ze,_ as he,fm as et,g as tt,dt as it,l as X,f as rt,af as _e,cb as st,iE as nt}from"./index-e8c6bcc0.js";import{c as at}from"./ExpandedCIM-edf32ef2.js";import{s as ot,C as lt,b as dt,e as fe,r as ut,t as ct,a as ht,m as _t,Y as ft,n as pt,c as mt,d as gt}from"./MagnifierPrograms-7d5f0447.js";import{f as Cs,y as As}from"./MagnifierPrograms-7d5f0447.js";import{o as vt}from"./imageutils-146f9422.js";import{t as bt,b as wt,o as pe,h as me,i as xt}from"./Container-97e947c4.js";import{i as yt}from"./BufferPool-e9a824a0.js";import{T as M,E as C,S as $}from"./color-c94de968.js";import{f as Tt,a as k,g as q,w as S,n as Ft,m as Bt}from"./WGLContainer-c34de5f8.js";import{L as B}from"./enums-fb086c25.js";import{e as Et,a as V}from"./ProgramTemplate-b4d5f7ad.js";import{n as U}from"./programUtils-7d888fe6.js";import{u as ie,c as re,x as P,i as se,n as Ot}from"./VertexArrayObject-218fbe6a.js";import{R as v,E as H,F as ne,O as Y,I as ae,L as D,C as ge,D as E,B as oe,G as T,U as le,P as Rt}from"./enums-b14466b3.js";import{o as ve,P as Mt}from"./RenderingContext-c610bdc1.js";import{z as Pt,q as Ct,Q as At,E as St,F as Dt,L as N,M as zt,_ as ze,R as be}from"./definitions-52704927.js";import{t as we}from"./VertexElementDescriptor-2925c6af.js";import{e as O,T as L}from"./Texture-7faa3913.js";import{e as It}from"./imageUtils-c2d0d1ae.js";import{o as Ds}from"./GraphicsView2D-8607020b.js";import{i as Is}from"./GraphicContainer-49df7442.js";import{t as xe}from"./requestImageUtils-e543f1cf.js";import"./BidiEngine-9a40f2f4.js";import"./OptimizedGeometry-33b2eb0d.js";import"./GeometryUtils-984e8446.js";import"./enums-f1a6a48a.js";import"./utils-bd9a7a79.js";import"./GeometryUtils-cd9b347d.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-4ff178e4.js";import"./floatRGBA-02807d91.js";import"./rasterizingUtils-99cc8688.js";import"./pbf-2b43d9bb.js";import"./Matcher-488a57cf.js";import"./visualVariablesUtils-6582dc8f.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-a9f47a55.js";import"./defaultsJSON-b087dd4d.js";import"./earcut-5cea2bcf.js";import"./LRUCache-3922d825.js";import"./devEnvironmentUtils-5002a058.js";import"./styleUtils-d6218d7e.js";import"./featureFlags-bf3d5654.js";import"./webStyleSymbolUtils-bca5fddb.js";import"./CircularArray-ef508845.js";import"./DisjointTimerQuery-c56792df.js";import"./throttle-7bf02de9.js";import"./ComputedAttributeStorage-5d1a51c8.js";import"./featureConversionUtils-096a49d9.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./FieldsIndex-888b8bd2.js";import"./arcadeTimeUtils-414ec519.js";import"./executionError-c92d3b85.js";import"./projectionSupport-380694fd.js";import"./json-48e3ea08.js";import"./diffUtils-f8f9fc73.js";import"./parser-c8281db0.js";import"./AttributeStoreView-2af62cbc.js";import"./TiledDisplayObject-2f5891c6.js";import"./LabelClass-669bcee9.js";import"./labelUtils-98630c63.js";import"./labelingInfo-98c89153.js";import"./clusterUtils-a6986c79.js";import"./SizeVariable-dc6fe734.js";import"./colorRamps-7c0167a8.js";import"./LegendOptions-0ffe455e.js";import"./lengthUtils-b9fae671.js";import"./util-85ddbb8f.js";import"./heatmapUtils-ee8bc01a.js";import"./vec4f64-aa64c7e9.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./NestedMap-1b5db22e.js";import"./OrderIndependentTransparency-309a1bc3.js";import"./basicInterfaces-4ab7cc6a.js";import"./doublePrecisionUtils-e3c3d0d8.js";import"./normalizeUtilsSync-18609246.js";import"./normalizeUtilsCommon-123fc71f.js";import"./normalizeUtils-f64efc29.js";import"./utils-c9a76eea.js";import"./BaseGraphicContainer-485a4ad3.js";import"./FeatureContainer-a5bdac2e.js";import"./TileContainer-2e9369e7.js";import"./vec3f32-ad1dc57f.js";async function Ut(d,e){const t=ot(d);if(t instanceof Error)throw t;await t.createImages(),Z(e);const{frames:i,width:r,height:n}=t,s=document.createElement("canvas");s.width=r,s.height=n;const a=s.getContext("2d",{willReadFrequently:!0}),l=[],u=[];for(const o of i){u.push(Ae(o.delay||100));const c=o.imageElement;o.blendOp===0?a.globalCompositeOperation="copy":a.globalCompositeOperation="source-over";const h=o.disposeOp===2?a.getImageData(o.left,o.top,o.width,o.height):void 0;a.drawImage(c,o.left,o.top);const f=a.getImageData(0,0,r,n);l.push(f),o.disposeOp===0||(o.disposeOp===1?a.clearRect(o.left,o.top,o.width,o.height):o.disposeOp===2&&a.putImageData(h,o.left,o.top))}return{frameDurations:u,getFrame:o=>l[o],width:r,height:n}}const $t=[137,80,78,71,13,10,26,10];function Lt(d){const e=new Uint8Array(d);return!$t.some((t,i)=>t!==e[i])}function kt(d){if(!Lt(d))return!1;const e=new DataView(d),t=new Uint8Array(d);let i,r=8;do{const n=e.getUint32(r);if(i=String.fromCharCode.apply(String,Array.prototype.slice.call(t.subarray(r+4,r+8))),i==="acTL")return!0;r+=12+n}while(i!=="IEND"&&r<t.length);return!1}async function Nt(d,e){const t=lt(d),i=dt(t,!0),{width:r,height:n}=t.lsd,s=document.createElement("canvas");s.width=r,s.height=n;const a=s.getContext("2d",{willReadFrequently:!0}),l=[],u=[];for(const o of i){u.push(Ae(o.delay||100));const c=new ImageData(o.patch,o.dims.width,o.dims.height),h=vt(c),f=o.disposalType===3?a.getImageData(o.dims.left,o.dims.top,o.dims.width,o.dims.height):void 0;a.drawImage(h,o.dims.left,o.dims.top);const p=a.getImageData(0,0,r,n);l.push(p),o.disposalType===1||(o.disposalType===2?a.clearRect(o.dims.left,o.dims.top,o.dims.width,o.dims.height):o.disposalType===3&&a.putImageData(f,o.dims.left,o.dims.top))}return{frameDurations:u,getFrame:o=>l[o],width:r,height:n}}const Ht=[71,73,70];function qt(d){const e=new Uint8Array(d);return!Ht.some((t,i)=>t!==e[i])}function Gt(d){if(!qt(d))return!1;const e=new DataView(d),t=e.getUint8(10);let i=13+(128&t?3*2**(1+(7&t)):0),r=0,n=!1;for(;!n;){switch(e.getUint8(i++)){case 33:if(!s())return!1;break;case 44:a();break;case 59:n=!0;break;default:return!1}if(r>1)return!0}function s(){switch(e.getUint8(i++)){case 249:l();break;case 1:u();break;case 254:o();break;case 255:c();break;default:return!1}return!0}function a(){r++,i+=8;const f=e.getUint8(i++);i+=128&f?3*2**(1+(7&f)):0,i++,h()}function l(){i++,i+=4,h()}function u(){r++,i++,i+=12,h()}function o(){h()}function c(){i++,i+=8,i+=3,h()}function h(){let f;for(;f=e.getUint8(i++);)i+=f}return!1}let Wt=class{constructor(){this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){this._inFlightResourceMap.clear(),this._resourceMap.clear()}getResource(e){return this._resourceMap.get(e)??null}async fetchResource(e,t){const i=this._resourceMap.get(e);if(i)return{width:i.width,height:i.height};let r=this._inFlightResourceMap.get(e);return r?r.then(n=>({width:n.width,height:n.height})):(r=jt(e,t),this._inFlightResourceMap.set(e,r),r.then(n=>(this._inFlightResourceMap.delete(e),this._resourceMap.set(e,n),{width:n.width,height:n.height}),()=>({width:0,height:0})))}deleteResource(e){this._inFlightResourceMap.delete(e),this._resourceMap.delete(e)}loadFont(e){return at(e)}};async function Vt(d,e){const t=window.URL.createObjectURL(d);try{const{data:i}=await W(t,{...e,responseType:"image"});return i}catch(i){throw Se(i)?i:new ee("mapview-invalid-resource",`Could not fetch requested resource at ${t}`)}finally{window.URL.revokeObjectURL(t)}}async function jt(d,e){const{arrayBuffer:t,mediaType:i}=await Kt(d,e),r=i==="image/png";return i==="image/gif"&&Gt(t)?Nt(t):r&&kt(t)?Ut(t,e):Vt(new Blob([t],{type:i}),e)}async function Kt(d,e){let t;const i=";base64,";if(d.includes(i)){const r=d.indexOf(i),n=d.indexOf(i)+i.length,s=d.substring(n);t={arrayBuffer:Le(s),mediaType:d.substring(0,r).replace("data:","")}}else try{const r=await W(d,{responseType:"array-buffer",...e});t={arrayBuffer:r.data,mediaType:r.getHeader("Content-Type")}}catch(r){if(!Se(r))throw new ee("mapview-invalid-resource",`Could not fetch requested resource at ${d}`)}return t}const Xt={background:{"background.frag":`#ifdef PATTERN
uniform lowp float u_opacity;
uniform lowp sampler2D u_texture;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_tileTextureCoord;
#else
uniform lowp vec4 u_color;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
void main() {
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = u_opacity * color;
#else
gl_FragColor = u_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"background.vert":`precision mediump float;
attribute vec2 a_pos;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform mediump float u_coord_range;
uniform mediump float u_depth;
#ifdef PATTERN
uniform mediump mat3 u_pattern_matrix;
varying mediump vec2 v_tileTextureCoord;
uniform mediump vec4 u_tlbr;
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
#endif
void main() {
gl_Position = vec4((u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0)).xy, u_depth, 1.0);
#ifdef PATTERN
v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;
v_tlbr             = u_tlbr / u_mosaicSize.xyxy;
#endif
#ifdef ID
v_id = u_id / 255.0;
#endif
}`},circle:{"circle.frag":`precision lowp float;
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
mediump float dist = length(v_offset);
mediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);
lowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));
gl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"circle.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_circleTranslation;
uniform mediump float u_depth;
uniform mediump float u_antialiasingWidth;
void main()
{
#pragma main
v_color = color * opacity;
v_stroke_color = stroke_color * stroke_opacity;
v_stroke_width = stroke_width;
v_radius = radius;
v_blur = max(blur, u_antialiasingWidth / (radius + stroke_width));
mediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);
v_offset = offset;
#ifdef ID
v_id = u_id / 255.0;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos * 0.5, 1.0) + u_displayMat3 * vec3((v_radius + v_stroke_width) * offset + u_circleTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},fill:{"fill.frag":`precision lowp float;
#ifdef PATTERN
uniform lowp sampler2D u_texture;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = fract(v_tileTextureCoord);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = v_color[3] * color;
#else
gl_FragColor = v_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"fill.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump float u_depth;
uniform mediump vec2 u_fillTranslation;
#ifdef PATTERN
#include <util/util.glsl>
uniform mediump vec2 u_mosaicSize;
uniform mediump float u_patternFactor;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef ID
v_id = u_id / 255.0;
#endif
#ifdef PATTERN
float patternWidth = nextPOT(tlbr.z - tlbr.x);
float patternHeight = nextPOT(tlbr.w - tlbr.y);
float scaleX = 1.0 / (patternWidth * u_patternFactor);
float scaleY = 1.0 / (patternHeight * u_patternFactor);
mat3 patterMat = mat3(scaleX, 0.0,    0.0,
0.0,    -scaleY, 0.0,
0.0,    0.0,    1.0);
v_tileTextureCoord = (patterMat * vec3(a_pos, 1.0)).xy;
v_tlbr             = tlbr / u_mosaicSize.xyxy;
#endif
vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},icon:{"icon.frag":`precision mediump float;
uniform lowp sampler2D u_texture;
#ifdef SDF
uniform lowp vec4 u_color;
uniform lowp vec4 u_outlineColor;
#endif
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
varying lowp vec4 v_color;
#ifdef SDF
varying mediump flaot v_halo_width;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
#include <util/encoding.glsl>
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef SDF
lowp vec4 fillPixelColor = v_color;
float d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;
const float softEdgeRatio = 0.248062016;
float size = max(v_size.x, v_size.y);
float dist = d * softEdgeRatio * size;
fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);
if (v_halo_width > 0.25) {
lowp vec4 outlinePixelColor = u_outlineColor;
const float outlineLimitRatio = (16.0 / 86.0);
float clampedOutlineSize = softEdgeRatio * min(v_halo_width, outlineLimitRatio * max(v_size.x, v_size.y));
outlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);
gl_FragColor = v_opacity * mixColors(fillPixelColor, outlinePixelColor);
}
else {
gl_FragColor = v_opacity * fillPixelColor;
}
#else
lowp vec4 texColor = texture2D(u_texture, v_tex);
gl_FragColor = v_opacity * texColor;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"icon.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
#ifdef SDF
varying mediump float v_halo_width;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_iconTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
const float C_OFFSET_PRECISION = 1.0 / 8.0;
const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float tileCoordRatio = 1.0 / 8.0;
uniform highp float u_time;
void main()
{
#pragma main
v_color = color;
v_opacity = opacity;
#ifdef SDF
v_halo_width = halo_width;
#endif
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_opacity *= interpolatedOpacity;
mediump float a_angle         = a_levelInfo[1];
mediump float a_minLevel      = a_levelInfo[2];
mediump float a_maxLevel      = a_levelInfo[3];
mediump vec2 a_tex            = a_texAngleRange.xy;
mediump float delta_z = 0.0;
mediump float rotated = mod(a_angle + u_mapRotation, 256.0);
delta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_opacity, 0.0);
vec2 offset = C_OFFSET_PRECISION * a_vertexOffset;
v_size = abs(offset);
#ifdef SDF
offset = (120.0 / 86.0) * offset;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayViewMat3 * vec3(size * offset, 0.0) + u_displayMat3 * vec3(u_iconTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
#ifdef ID
v_id = u_id / 255.0;
#endif
v_tex = a_tex.xy / u_mosaicSize;
}`},line:{"line.frag":`precision lowp float;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
varying mediump float v_lineHalfWidth;
varying lowp vec4 v_color;
varying mediump float v_blur;
#if defined (PATTERN) || defined(SDF)
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
uniform sampler2D u_texture;
uniform mediump float u_antialiasing;
#endif
#ifdef SDF
#include <util/encoding.glsl>
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
mediump float fragDist = length(v_normal) * v_lineHalfWidth;
lowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);
#ifdef PATTERN
mediump float relativeTexX = fract(v_accumulatedDistance / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY = 0.5 + v_normal.y * v_lineHalfWidth / (v_patternSize.y * v_widthRatio);
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
lowp vec4 color = texture2D(u_texture, texCoord);
gl_FragColor = alpha * v_color[3] * color;
#elif defined(SDF)
mediump float relativeTexX = fract((v_accumulatedDistance * 0.5) / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY =  0.5 + 0.25 * v_normal.y;
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;
float dist = d * (v_lineHalfWidth + u_antialiasing / 2.0);
gl_FragColor = alpha * clamp(0.5 - dist, 0.0, 1.0) * v_color;
#else
gl_FragColor = alpha * v_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"line.vert":`precision mediump float;
attribute vec2 a_pos;
attribute vec4 a_extrude_offset;
attribute vec4 a_dir_normal;
attribute vec2 a_accumulatedDistance;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump float u_zoomFactor;
uniform mediump vec2 u_lineTranslation;
uniform mediump float u_antialiasing;
uniform mediump float u_depth;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
const float scale = 1.0 / 31.0;
const mediump float tileCoordRatio = 8.0;
#if defined (SDF)
const mediump float sdfPatternHalfWidth = 15.5;
#endif
#if defined (PATTERN) || defined(SDF)
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
#endif
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
varying mediump float v_lineHalfWidth;
varying mediump float v_blur;
void main()
{
#pragma main
v_color = color * opacity;
v_blur = blur + u_antialiasing;
v_normal = a_dir_normal.zw * scale;
#if defined (PATTERN) || defined(SDF)
v_tlbr          = tlbr / u_mosaicSize.xyxy;
v_patternSize   = vec2(tlbr.z - tlbr.x, tlbr.y - tlbr.w);
#if defined (PATTERN)
v_widthRatio = width / v_patternSize.y;
#else
v_widthRatio = width / sdfPatternHalfWidth / 2.0;
#endif
#endif
v_lineHalfWidth = (width + u_antialiasing) * 0.5;
mediump vec2 dir = a_dir_normal.xy * scale;
mediump vec2 offset_ = a_extrude_offset.zw * scale * offset;
mediump vec2 dist = v_lineHalfWidth * scale * a_extrude_offset.xy;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos + offset_ * tileCoordRatio / u_zoomFactor, 1.0) + u_displayViewMat3 * vec3(dist, 0.0) + u_displayMat3 * vec3(u_lineTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
#if defined (PATTERN) || defined(SDF)
v_accumulatedDistance = a_accumulatedDistance.x * u_zoomFactor / tileCoordRatio + dot(dir, dist + offset_);
#endif
#ifdef ID
v_id = u_id / 255.0;
#endif
}`},outline:{"outline.frag":`varying lowp vec4 v_color;
varying mediump vec2 v_normal;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
lowp float dist = abs(v_normal.y);
lowp float alpha = smoothstep(1.0, 0.0, dist);
gl_FragColor = alpha * v_color;
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"outline.vert":`attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_xnormal;
#pragma header
varying lowp vec4 v_color;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_fillTranslation;
uniform mediump float u_depth;
uniform mediump float u_outline_width;
varying lowp vec2 v_normal;
const float scale = 1.0 / 15.0;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef ID
v_id = u_id / 255.0;
#endif
v_normal = a_xnormal;
mediump vec2 dist = u_outline_width * scale * a_offset;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(dist + u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},text:{"text.frag":`uniform lowp sampler2D u_texture;
varying lowp vec2 v_tex;
varying lowp vec4 v_color;
varying mediump float v_edgeWidth;
varying mediump float v_edgeDistance;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
lowp float dist = texture2D(u_texture, v_tex).a;
mediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist);
gl_FragColor = alpha * v_color;
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"text.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
varying lowp vec4 v_color;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_textTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying lowp vec2 v_tex;
const float offsetPrecision = 1.0 / 8.0;
const mediump float edgePos = 0.75;
uniform mediump float u_antialiasingWidth;
varying mediump float v_edgeDistance;
varying mediump float v_edgeWidth;
uniform lowp float u_halo;
const float sdfFontScale = 1.0 / 24.0;
const float sdfPixel = 3.0;
uniform highp float u_time;
void main()
{
#pragma main
if (u_halo > 0.5)
{
v_color = halo_color * opacity;
halo_width *= sdfPixel;
halo_blur *= sdfPixel;
}
else
{
v_color = color * opacity;
halo_width = 0.0;
halo_blur = 0.0;
}
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_color *= interpolatedOpacity;
mediump float a_angle       = a_levelInfo[1];
mediump float a_minLevel    = a_levelInfo[2];
mediump float a_maxLevel    = a_levelInfo[3];
mediump vec2 a_tex          = a_texAngleRange.xy;
mediump float a_visMinAngle    = a_texAngleRange.z;
mediump float a_visMaxAngle    = a_texAngleRange.w;
mediump float delta_z = 0.0;
mediump float angle = mod(a_angle + u_mapRotation, 256.0);
if (a_visMinAngle < a_visMaxAngle)
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) + (1.0 - step(a_visMinAngle, angle)));
}
else
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) * (1.0 - step(a_visMinAngle, angle)));
}
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_color[3], 0.0);
v_tex = a_tex.xy / u_mosaicSize;
#ifdef ID
v_id = u_id / 255.0;
#endif
v_edgeDistance = edgePos - halo_width / size;
v_edgeWidth = (u_antialiasingWidth + halo_blur) / size;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + sdfFontScale * u_displayViewMat3 * vec3(offsetPrecision * size * a_vertexOffset, 0.0) + u_displayMat3 * vec3(u_textTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
}`},util:{"encoding.glsl":`const vec4 rgba2float_factors = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, rgba2float_factors);
}`,"util.glsl":`float nextPOT(in float x) {
return pow(2.0, ceil(log2(abs(x))));
}`}};function Yt(d){let e=Xt;return d.split("/").forEach(t=>{e&&(e=e[t])}),e}const Qt=new Et(Yt);function R(d){return Qt.resolveIncludes(d)}const ye=d=>U({ID:d.id,PATTERN:d.pattern}),Jt={shaders:d=>({vertexShader:ye(d)+R("background/background.vert"),fragmentShader:ye(d)+R("background/background.frag")})},Te=d=>U({ID:d.id}),Zt={shaders:d=>({vertexShader:Te(d)+R("circle/circle.vert"),fragmentShader:Te(d)+R("circle/circle.frag")})},Fe=d=>U({ID:d.id,PATTERN:d.pattern}),ei={shaders:d=>({vertexShader:Fe(d)+R("fill/fill.vert"),fragmentShader:Fe(d)+R("fill/fill.frag")})},Be=d=>U({ID:d.id}),ti={shaders:d=>({vertexShader:Be(d)+R("outline/outline.vert"),fragmentShader:Be(d)+R("outline/outline.frag")})},Ee=d=>U({ID:d.id,SDF:d.sdf}),ii={shaders:d=>({vertexShader:Ee(d)+R("icon/icon.vert"),fragmentShader:Ee(d)+R("icon/icon.frag")})},Oe=d=>U({ID:d.id,PATTERN:d.pattern,SDF:d.sdf}),ri={shaders:d=>({vertexShader:Oe(d)+R("line/line.vert"),fragmentShader:Oe(d)+R("line/line.frag")})},Re=d=>U({ID:d.id}),si={shaders:d=>({vertexShader:Re(d)+R("text/text.vert"),fragmentShader:Re(d)+R("text/text.frag")})};let ni=class{constructor(){this._programByKey=new Map}dispose(){this._programByKey.forEach(e=>e.dispose()),this._programByKey.clear()}getMaterialProgram(e,t,i){const r=t.key<<3|this._getMaterialOptionsValue(t.type,i);if(this._programByKey.has(r))return this._programByKey.get(r);const n=this._getProgramTemplate(t.type),{shaders:s}=n,{vertexShader:a,fragmentShader:l}=s(i),u=t.getShaderHeader(),o=t.getShaderMain(),c=a.replace("#pragma header",u).replace("#pragma main",o),h=e.programCache.acquire(c,l,t.getAttributeLocations());return this._programByKey.set(r,h),h}_getMaterialOptionsValue(e,t){switch(e){case B.BACKGROUND:{const i=t;return(i.pattern?1:0)<<1|(i.id?1:0)}case B.FILL:{const i=t;return(i.pattern?1:0)<<1|(i.id?1:0)}case B.OUTLINE:return t.id?1:0;case B.LINE:{const i=t;return(i.sdf?1:0)<<2|(i.pattern?1:0)<<1|(i.id?1:0)}case B.ICON:{const i=t;return(i.sdf?1:0)<<1|(i.id?1:0)}case B.CIRCLE:return t.id?1:0;case B.TEXT:return t.id?1:0;default:return 0}}_getProgramTemplate(e){switch(e){case B.BACKGROUND:return Jt;case B.CIRCLE:return Zt;case B.FILL:return ei;case B.ICON:return ii;case B.LINE:return ri;case B.OUTLINE:return ti;case B.TEXT:return si;default:return null}}},Ie=class{constructor(){this._initialized=!1}dispose(){this._program=w(this._program),this._vertexArrayObject=w(this._vertexArrayObject)}render(e,t,i,r){e&&(this._initialized||this._initialize(e),e.setBlendFunctionSeparate(v.ONE,v.ONE_MINUS_SRC_ALPHA,v.ONE,v.ONE_MINUS_SRC_ALPHA),e.bindVAO(this._vertexArrayObject),e.useProgram(this._program),t.setSamplingMode(i),e.bindTexture(t,0),this._program.setUniform1i("u_tex",0),this._program.setUniform1f("u_opacity",r),e.drawArrays(H.TRIANGLE_STRIP,0,4),e.bindTexture(null,0),e.bindVAO())}_initialize(e){if(this._initialized)return!0;const t=V(e,fe);if(!t)return!1;const i=new Int8Array(16);i[0]=-1,i[1]=-1,i[2]=0,i[3]=0,i[4]=1,i[5]=-1,i[6]=1,i[7]=0,i[8]=-1,i[9]=1,i[10]=0,i[11]=1,i[12]=1,i[13]=1,i[14]=1,i[15]=1;const r=fe.attributes,n=new ie(e,r,Tt,{geometry:re.createVertex(e,ne.STATIC_DRAW,i)});return this._program=t,this._vertexArrayObject=n,this._initialized=!0,!0}};const Ue=d=>d===M.HITTEST||d===M.LABEL_ALPHA,ai=d=>(Ue(d)?1:0)|(d===M.HIGHLIGHT?2:0),oi=({rendererInfo:d,drawPhase:e},t,i)=>`${t.getVariationHash()}-${ai(e)}-${d.getVariationHash()}-${i!=null&&i.join(".")}`,li=(d,e,t,i={})=>{if(i={...i,...e.getVariation(),...d.rendererInfo.getVariation(),highlight:d.drawPhase===M.HIGHLIGHT,id:Ue(d.drawPhase)},t!=null)for(const r of t)i[r]=!0;return i};let di=class{constructor(e){this._rctx=e,this._programByKey=new Map}dispose(){this._programByKey.forEach(e=>e.dispose()),this._programByKey.clear()}getProgram(e,t=[]){const i=e.vsPath+"."+e.fsPath+JSON.stringify(t);if(this._programByKey.has(i))return this._programByKey.get(i);const r={...t.map(o=>typeof o=="string"?{name:o,value:!0}:o).reduce((o,c)=>({...o,[c.name]:c.value}),{})},{vsPath:n,fsPath:s,attributes:a}=e,l=ve(n,s,a,r),u=this._rctx.programCache.acquire(l.shaders.vertexShader,l.shaders.fragmentShader,l.attributes);if(!u)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(i,u),u}getMaterialProgram(e,t,i,r,n){const s=oi(e,t,n);if(this._programByKey.has(s))return this._programByKey.get(s);const a=li(e,t,n,{ignoresSamplerPrecision:e.context.driverTest.ignoresSamplerPrecision.result}),l=ve(i,i,r,a),u=this._rctx.programCache.acquire(l.shaders.vertexShader,l.shaders.fragmentShader,l.attributes);if(!u)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(s,u),u}},ui=class{constructor(e,t){this._queue=[],this._context=e,this._refreshable=t}destroy(){this._queue=[]}enqueueTextureUpdate(e,t){const i=ke(),r=e,n=Ct,s=Math.ceil(r.height/n);if(Z(t),this._context.type===De.WEBGL1)this._queue.push({type:"no-chunk",request:e,resolver:i,options:t});else for(let a=0;a<s;a++){const l=a*n,u=a===s-1,o=u?r.height-n*a:n;this._queue.push({type:"chunk",request:e,resolver:i,chunk:a,chunkOffset:l,destHeight:o,chunkIsLast:u,options:t})}return Ne(t,a=>i.reject(a)),i.promise}upload(){let e=0;for(;this._queue.length;){const t=performance.now(),i=this._queue.shift();if(i){if(i.options.signal!=null&&i.options.signal.aborted)continue;switch(i.type){case"chunk":this._uploadChunk(i);break;case"no-chunk":this._uploadNoChunk(i)}const r=performance.now()-t;if(e+=r,e+r>=Pt)break}}this._queue.length&&this._refreshable.requestRender()}_uploadChunk(e){const{request:t,resolver:i,chunkOffset:r,chunkIsLast:n,destHeight:s}=e,{data:a,texture:l,width:u}=t;a!=null&&(l.updateData(0,0,r,u,s,a,r),n&&i.resolve())}_uploadNoChunk(e){const{request:t,resolver:i}=e,{data:r,texture:n}=t;n.setData(r),i.resolve()}};const ci=We(-.5,-.5);let hi=class{constructor(){this._centerNdc=j(),this._pxToNdc=j(),this._worldDimensionsPx=j(),this._mat3=te(),this._initialized=!1}dispose(){this._program=w(this._program),this._quad=w(this._quad)}render(e,t){const{context:i}=e;return!!this._updateGeometry(e,t)&&(this._initialized||this._initialize(i),i.setDepthWriteEnabled(!1),i.setDepthTestEnabled(!1),i.setColorMask(!1,!1,!1,!1),i.setBlendingEnabled(!1),i.setStencilOp(Y.KEEP,Y.KEEP,Y.REPLACE),i.setStencilFunction(ae.ALWAYS,1,255),i.setStencilTestEnabled(!0),i.useProgram(this._program),this._program.setUniformMatrix3fv("u_worldExtent",this._mat3),this._quad.draw(),this._quad.unbind(),!0)}_initialize(e){if(this._initialized)return;const t=V(e,ut);t&&(this._program=t,this._quad=new k(e,[0,0,1,0,0,1,1,1]),this._initialized=!0)}_updateGeometry(e,t){const{state:i,pixelRatio:r}=e,{size:n,rotation:s}=i,a=Math.round(n[0]*r),l=Math.round(n[1]*r);if(!i.spatialReference.isWrappable)return!1;const u=Ve(s),o=Math.abs(Math.cos(u)),c=Math.abs(Math.sin(u)),h=Math.round(a*o+l*c),f=Math.round(i.worldScreenWidth);if(h<=f)return!1;const p=a*c+l*o,m=f*r,b=(t.left-t.right)*r/a,g=(t.bottom-t.top)*r/l;K(this._worldDimensionsPx,m,p,1),K(this._pxToNdc,2/a,-2/l,1),K(this._centerNdc,b,g,1);const _=this._mat3;return He(_,this._centerNdc),de(_,_,this._pxToNdc),s!==0&&qe(_,_,u),de(_,_,this._worldDimensionsPx),Ge(_,_,ci),!0}},_i=class extends q{constructor(){super(...arguments),this.defines=[],this._desc={vsPath:"fx/integrate",fsPath:"fx/integrate",attributes:new Map([["a_position",0]])}}dispose(){this._quad&&this._quad.dispose()}bind(){}unbind(){}draw(e,t){if(!(t!=null&&t.size))return;const{context:i,renderingOptions:r}=e;this._quad||(this._quad=new k(i,[0,0,1,0,0,1,1,1]));const n=i.getBoundFramebufferObject(),{x:s,y:a,width:l,height:u}=i.getViewport();t.bindTextures(i);const o=t.getBlock(At);if(o==null)return;const c=o.getFBO(i),h=o.getFBO(i,1);i.setViewport(0,0,t.size,t.size),this._computeDelta(e,h,r.labelsAnimationTime),this._updateAnimationState(e,h,c),i.bindFramebuffer(n),i.setViewport(s,a,l,u)}_computeDelta(e,t,i){const{context:r,painter:n,displayLevel:s}=e,a=n.materialManager.getProgram(this._desc,["delta"]);r.bindFramebuffer(t),r.setClearColor(0,0,0,0),r.clear(r.gl.COLOR_BUFFER_BIT),r.useProgram(a);const l=J("featurelayer-animation-enabled")?i:1;a.setUniform1i("u_maskTexture",St),a.setUniform1i("u_sourceTexture",Dt),a.setUniform1f("u_timeDelta",e.deltaTime),a.setUniform1f("u_animationTime",l),a.setUniform1f("u_zoomLevel",Math.round(10*s)),this._quad.draw()}_updateAnimationState(e,t,i){const{context:r,painter:n}=e,s=n.materialManager.getProgram(this._desc,["update"]);r.bindTexture(t.colorTexture,1),r.useProgram(s),s.setUniform1i("u_sourceTexture",1),r.bindFramebuffer(i),r.setClearColor(0,0,0,0),r.clear(r.gl.COLOR_BUFFER_BIT),this._quad.draw()}};class Me extends q{constructor(e){super(),this.name=this.constructor.name,this.defines=[e]}dispose(){}bind({context:e,painter:t}){this._prev=e.getBoundFramebufferObject();const{width:i,height:r}=e.getViewport(),n=t.getFbos(i,r).effect0;e.bindFramebuffer(n),e.setColorMask(!0,!0,!0,!0),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT)}unbind(){}draw(e,t){const{context:i,painter:r}=e,n=r.getPostProcessingEffects(t),s=i.getBoundFramebufferObject();for(const{postProcessingEffect:a,effect:l}of n)a.draw(e,s,l);i.bindFramebuffer(this._prev),i.setStencilTestEnabled(!1),r.blitTexture(i,s.colorTexture,D.NEAREST),i.setStencilTestEnabled(!0)}}let fi=class{constructor(){this._width=void 0,this._height=void 0,this._resources=null}dispose(){this._resources&&(this._resources.quadGeometry.dispose(),this._resources.quadVAO.dispose(),this._resources.highlightProgram.dispose(),this._resources.blurProgram.dispose(),this._resources=null)}preBlur(e,t){e.bindTexture(t,N),e.useProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[1,0,1/this._width,0]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",bt),e.bindVAO(this._resources.quadVAO),e.drawArrays(H.TRIANGLE_STRIP,0,4),e.bindVAO()}finalBlur(e,t){e.bindTexture(t,N),e.useProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[0,1,0,1/this._height]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",wt),e.bindVAO(this._resources.quadVAO),e.drawArrays(H.TRIANGLE_STRIP,0,4),e.bindVAO()}renderHighlight(e,t,i){e.bindTexture(t,N),e.useProgram(this._resources.highlightProgram),i.applyHighlightOptions(e,this._resources.highlightProgram),e.bindVAO(this._resources.quadVAO),e.setBlendingEnabled(!0),e.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),e.drawArrays(H.TRIANGLE_STRIP,0,4),e.bindVAO()}_initialize(e,t,i){this._width=t,this._height=i;const r=re.createVertex(e,ne.STATIC_DRAW,new Int8Array([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1]).buffer),n=new ie(e,new Map([["a_position",0],["a_texcoord",1]]),{geometry:[new we("a_position",2,ge.BYTE,0,4),new we("a_texcoord",2,ge.UNSIGNED_BYTE,2,4)]},{geometry:r}),s=V(e,ct),a=V(e,ht);e.useProgram(s),s.setUniform1i("u_texture",N),s.setUniform1i("u_shade",zt),s.setUniform1f("u_sigma",pe),e.useProgram(a),a.setUniform1i("u_texture",N),a.setUniform1f("u_sigma",pe),this._resources={quadGeometry:r,quadVAO:n,highlightProgram:s,blurProgram:a}}setup(e,t,i){this._resources?(this._width=t,this._height=i):this._initialize(e,t,i)}};function Pe(d,e,t){const i=new O(e,t);return i.wrapMode=E.CLAMP_TO_EDGE,new P(d,i,new se(oe.STENCIL_INDEX8,e,t))}let pi=class{constructor(){this._width=void 0,this._height=void 0,this._resources=null}dispose(){this._resources&&(this._resources.sharedBlur1Fbo.dispose(),this._resources.sharedBlur2Fbo.dispose(),this._resources=je(this._resources))}_initialize(e,t,i){this._width=t,this._height=i;const r=Pe(e,t,i),n=Pe(e,t,i);this._resources={sharedBlur1Fbo:r,sharedBlur2Fbo:n}}setup(e,t,i){!this._resources||this._width===t&&this._height===i||this.dispose(),this._resources||this._initialize(e,t,i)}get sharedBlur1Tex(){return this._resources.sharedBlur1Fbo.colorTexture}get sharedBlur1Fbo(){return this._resources.sharedBlur1Fbo}get sharedBlur2Tex(){return this._resources.sharedBlur2Fbo.colorTexture}get sharedBlur2Fbo(){return this._resources.sharedBlur2Fbo}};const I=4,G=4/I;let mi=class extends q{constructor(){super(...arguments),this.defines=["highlight"],this._hlRenderer=new fi,this._width=void 0,this._height=void 0,this._boundFBO=null,this._hlSurfaces=new pi,this._adjustedWidth=void 0,this._adjustedHeight=void 0,this._blitRenderer=new Ie}dispose(){var e,t;(e=this._hlSurfaces)==null||e.dispose(),(t=this._hlRenderer)==null||t.dispose(),this._boundFBO=null}bind(e){const{context:t,painter:i}=e,{width:r,height:n}=t.getViewport(),s=i.getFbos(r,n).effect0;this.setup(e,r,n),t.bindFramebuffer(s),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT)}unbind(){}setup({context:e},t,i){this._width=t,this._height=i;const r=t%I,n=i%I;t+=r<I/2?-r:I-r,i+=n<I/2?-n:I-n,this._adjustedWidth=t,this._adjustedHeight=i,this._boundFBO=e.getBoundFramebufferObject();const s=Math.round(t*G),a=Math.round(i*G);this._hlRenderer.setup(e,s,a),this._hlSurfaces.setup(e,s,a)}draw(e){const{context:t,highlightGradient:i}=e;if(!i)return;const r=t.getBoundFramebufferObject();t.setViewport(0,0,this._adjustedWidth*G,this._adjustedHeight*G),t.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),t.setStencilTestEnabled(!1),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT),this._blitRenderer.render(t,r.colorTexture,D.NEAREST,1),t.setStencilTestEnabled(!1),t.setBlendingEnabled(!1),t.setColorMask(!1,!1,!1,!0),t.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT),this._hlRenderer.preBlur(t,this._hlSurfaces.sharedBlur1Tex),t.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT),this._hlRenderer.finalBlur(t,this._hlSurfaces.sharedBlur2Tex),t.bindFramebuffer(this._boundFBO),t.setBlendingEnabled(!0),t.setColorMask(!0,!0,!0,!0),t.setViewport(0,0,this._width,this._height),this._hlRenderer.renderHighlight(t,this._hlSurfaces.sharedBlur1Tex,i),this._boundFBO=null}},gi=class extends q{constructor(){super(...arguments),this.name=this.constructor.name,this.defines=["hittest"]}dispose(){this._fbo!=null&&this._fbo.dispose()}createOptions({pixelRatio:e},t,i=ze){if(!t.length)return null;const r=t.shift(),n=r.x,s=r.y;return this._outstanding=r,{type:"hittest",distance:i*e,position:[n,s]}}bind(e){const{context:t,attributeView:i}=e;if(!i.size)return;const r=i.getBlock(be);if(r==null)return;const n=r.getFBO(t);t.setViewport(0,0,i.size,i.size),t.bindFramebuffer(n),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT|t.gl.DEPTH_BUFFER_BIT)}unbind(e){}draw(e){if(this._outstanding==null)return;const t=this._outstanding;this._outstanding=null,this._resolve(e,t.resolvers)}async _resolve(e,t){const{context:i,attributeView:r}=e,n=r.getBlock(be);if(n==null)return void t.forEach(o=>o.resolve([]));const s=n.getFBO(i),a=new Uint8Array(s.width*s.height*4);try{await s.readPixelsAsync(0,0,s.width,s.height,T.RGBA,le.UNSIGNED_BYTE,a)}catch{return void t.forEach(c=>c.resolve([]))}const l=[];for(let o=0;o<a.length;o+=4){const c=a[o],h=a[o+3];c&&l.push({id:o/4,directHits:h})}l.sort((o,c)=>c.directHits===o.directHits?c.id-o.id:c.directHits-o.directHits);const u=l.map(o=>o.id);t.forEach(o=>o.resolve(u))}},vi=class extends q{constructor(){super(...arguments),this.name=this.constructor.name,this.defines=["id"],this._lastSize=0,this._boundFBO=null}dispose(){this._fbo!=null&&this._fbo.dispose()}bind({context:e,painter:t}){const{width:i,height:r}=e.getViewport();this._boundFBO=e.getBoundFramebufferObject();const n=t.getFbos(i,r).effect0;e.bindFramebuffer(n),e.setColorMask(!0,!0,!0,!0),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT)}unbind({context:e}){e.bindFramebuffer(this._boundFBO),this._boundFBO=null}draw(e,t,i=2*ze){this._resolve(e,t,i)}async _resolve({context:e,state:t,pixelRatio:i},r,n){const s=e.getBoundFramebufferObject(),a=t.size[1]*i,l=Math.round(n*i),u=l/2,o=l/2;this._ensureBuffer(l),r.forEach(async(c,h)=>{const f=new Map,p=Math.floor(h.x*i-l/2),m=Math.floor(a-h.y*i-l/2);await s.readPixelsAsync(p,m,l,l,T.RGBA,le.UNSIGNED_BYTE,this._buf);for(let g=0;g<this._buf32.length;g++){const _=this._buf32[g];if(_!==4294967295&&_!==0){const A=g%l,x=l-Math.floor(g/l),y=(u-A)*(u-A)+(o-x)*(o-x),F=f.has(_)?f.get(_):4294967295;f.set(_,Math.min(y,F))}}const b=Array.from(f).sort((g,_)=>g[1]-_[1]).map(g=>g[0]);c.resolve(b),r.delete(h)})}_ensureBuffer(e){this._lastSize!==e&&(this._lastSize=e,this._buf=new Uint8Array(4*e*e),this._buf32=new Uint32Array(this._buf.buffer))}};const Q=5,bi=[1,0],wi=[0,1],xi=[1,.8,.6,.4,.2],yi=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];let Ti=class{constructor(){this._intensityFBO=null,this._compositeFBO=null,this._mipsFBOs=new Array(Q),this._nMips=Q,this._kernelSizeArray=[3,5,7,9,11],this._size=[0,0],this._programDesc={luminosityHighPass:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/luminosityHighPass",attributes:new Map([["a_position",0]])},gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){if(this._quad=w(this._quad),this._intensityFBO=w(this._intensityFBO),this._compositeFBO=w(this._compositeFBO),this._mipsFBOs){for(let e=0;e<this._nMips;e++)this._mipsFBOs[e]&&(this._mipsFBOs[e].horizontal.dispose(),this._mipsFBOs[e].vertical.dispose());this._mipsFBOs=null}}draw(e,t,i){const{width:r,height:n}=t,{context:s,painter:a}=e,{materialManager:l}=a,u=s.gl,o=this._programDesc,{strength:c,radius:h,threshold:f}=i;this._quad||(this._quad=new k(s,[-1,-1,1,-1,-1,1,1,1])),this._createOrResizeResources(e,r,n),s.setStencilTestEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),s.setStencilWriteMask(0);const p=this._quad;p.bind(),s.bindFramebuffer(this._intensityFBO);const m=l.getProgram(o.luminosityHighPass);s.useProgram(m),s.bindTexture(t.colorTexture,0),m.setUniform1i("u_texture",0),m.setUniform3fv("u_defaultColor",[0,0,0]),m.setUniform1f("u_defaultOpacity",0),m.setUniform1f("u_luminosityThreshold",f),m.setUniform1f("u_smoothWidth",.01);const b=[Math.round(r/2),Math.round(n/2)];s.setViewport(0,0,b[0],b[1]),s.setClearColor(0,0,0,0),s.clear(u.COLOR_BUFFER_BIT),p.draw(),s.setBlendingEnabled(!1);let g=this._intensityFBO.colorTexture;for(let x=0;x<this._nMips;x++){const y=l.getProgram(o.gaussianBlur,[{name:"radius",value:this._kernelSizeArray[x]}]);s.useProgram(y),s.bindTexture(g,x+1),y.setUniform1i("u_colorTexture",x+1),y.setUniform2fv("u_texSize",b),y.setUniform2fv("u_direction",bi),s.setViewport(0,0,b[0],b[1]);const F=this._mipsFBOs[x];s.bindFramebuffer(F.horizontal),p.draw(),g=F.horizontal.colorTexture,s.bindFramebuffer(F.vertical),s.bindTexture(g,x+1),y.setUniform2fv("u_direction",wi),p.draw(),g=F.vertical.colorTexture,b[0]=Math.round(b[0]/2),b[1]=Math.round(b[1]/2)}s.setViewport(0,0,r,n);const _=l.getProgram(o.composite,[{name:"nummips",value:Q}]);s.bindFramebuffer(this._compositeFBO),s.useProgram(_),_.setUniform1f("u_bloomStrength",c),_.setUniform1f("u_bloomRadius",h),_.setUniform1fv("u_bloomFactors",xi),_.setUniform3fv("u_bloomTintColors",yi),s.bindTexture(this._mipsFBOs[0].vertical.colorTexture,1),_.setUniform1i("u_blurTexture1",1),s.bindTexture(this._mipsFBOs[1].vertical.colorTexture,2),_.setUniform1i("u_blurTexture2",2),s.bindTexture(this._mipsFBOs[2].vertical.colorTexture,3),_.setUniform1i("u_blurTexture3",3),s.bindTexture(this._mipsFBOs[3].vertical.colorTexture,4),_.setUniform1i("u_blurTexture4",4),s.bindTexture(this._mipsFBOs[4].vertical.colorTexture,5),_.setUniform1i("u_blurTexture5",5),p.draw(),s.bindFramebuffer(t),s.setBlendingEnabled(!0);const A=l.getProgram(o.blit);s.useProgram(A),s.bindTexture(this._compositeFBO.colorTexture,6),A.setUniform1i("u_texture",6),s.setBlendFunction(v.ONE,v.ONE),p.draw(),p.unbind(),s.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),s.setStencilTestEnabled(!0)}_createOrResizeResources(e,t,i){const{context:r}=e;if(this._compositeFBO&&this._size[0]===t&&this._size[1]===i)return;this._size[0]=t,this._size[1]=i;const n=[Math.round(t/2),Math.round(i/2)];if(this._compositeFBO)this._compositeFBO.resize(t,i);else{const s=new O(t,i);s.internalFormat=T.RGBA,s.wrapMode=E.CLAMP_TO_EDGE,this._compositeFBO=new P(r,s)}if(this._intensityFBO)this._intensityFBO.resize(n[0],n[1]);else{const s=new O(n[0],n[1]);s.internalFormat=T.RGBA,s.wrapMode=E.CLAMP_TO_EDGE,this._intensityFBO=new P(r,s)}for(let s=0;s<this._nMips;s++){if(this._mipsFBOs[s])this._mipsFBOs[s].horizontal.resize(n[0],n[1]),this._mipsFBOs[s].vertical.resize(n[0],n[1]);else{const a=new O(n[0],n[1]);a.internalFormat=T.RGBA,a.wrapMode=E.CLAMP_TO_EDGE,this._mipsFBOs[s]={horizontal:new P(r,a),vertical:new P(r,a)}}n[0]=Math.round(n[0]/2),n[1]=Math.round(n[1]/2)}}};const Fi=[1,0],Bi=[0,1];let Ei=class{constructor(){this._blurFBO=null,this._size=[0,0],this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null)}draw(e,t,i){const{context:r}=e,{type:n,radius:s}=i;if(s===0)return;this._createOrResizeResources(e),this._quad||(this._quad=new k(r,[-1,-1,1,-1,-1,1,1,1]));const a=this._quad;a.bind(),n==="blur"?this._gaussianBlur(e,t,s):this._radialBlur(e,t),a.unbind()}_gaussianBlur(e,t,i){const{context:r,state:n,painter:s,pixelRatio:a}=e,{size:l}=n,{materialManager:u}=s,o=this._programDesc,c=this._quad,h=[Math.round(a*l[0]),Math.round(a*l[1])],f=this._blurFBO,p=u.getProgram(o.gaussianBlur,[{name:"radius",value:Math.ceil(i)}]);r.useProgram(p),r.setBlendingEnabled(!1),r.bindFramebuffer(f),r.bindTexture(t.colorTexture,4),p.setUniform1i("u_colorTexture",4),p.setUniform2fv("u_texSize",h),p.setUniform2fv("u_direction",Fi),p.setUniform1f("u_sigma",i),c.draw(),r.bindFramebuffer(t),r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.bindTexture(f==null?void 0:f.colorTexture,5),p.setUniform1i("u_colorTexture",5),p.setUniform2fv("u_direction",Bi),c.draw(),r.setBlendingEnabled(!0),r.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),r.setStencilTestEnabled(!0)}_radialBlur(e,t){const{context:i,painter:r}=e,{materialManager:n}=r,s=this._programDesc,a=this._quad,l=this._blurFBO;i.bindFramebuffer(l);const u=n.getProgram(s.radialBlur);i.useProgram(u),i.setBlendingEnabled(!1),i.bindTexture(t.colorTexture,4),u.setUniform1i("u_colorTexture",4),a.draw(),i.bindFramebuffer(t),i.setStencilWriteMask(0),i.setStencilTestEnabled(!1),i.setDepthWriteEnabled(!1),i.setDepthTestEnabled(!1),i.setBlendingEnabled(!0);const o=n.getProgram(s.blit);i.useProgram(o),i.bindTexture(l==null?void 0:l.colorTexture,5),o.setUniform1i("u_texture",5),i.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),a.draw()}_createOrResizeResources(e){const{context:t,state:i,pixelRatio:r}=e,{size:n}=i,s=Math.round(r*n[0]),a=Math.round(r*n[1]);if(!this._blurFBO||this._size[0]!==s||this._size[1]!==a)if(this._size[0]=s,this._size[1]=a,this._blurFBO)this._blurFBO.resize(s,a);else{const l=new O(s,a);l.internalFormat=T.RGBA,l.wrapMode=E.CLAMP_TO_EDGE,this._blurFBO=new P(t,l)}}};class Oi{constructor(){this._layerFBOTexture=null,this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:new Map([["a_position",0]])}}dispose(){this._layerFBOTexture=w(this._layerFBOTexture)}draw(e,t,i){const{width:r,height:n}=t;this._createOrResizeResources(e,r,n);const{context:s,painter:a}=e,{materialManager:l}=a,u=this._programDesc,o=this._quad,c=i.colorMatrix;o.bind();const h=this._layerFBOTexture;s.bindFramebuffer(t),t.copyToTexture(0,0,r,n,0,0,h),s.setBlendingEnabled(!1),s.setStencilTestEnabled(!1);const f=l.getProgram(u);s.useProgram(f),s.bindTexture(h,2),f.setUniformMatrix4fv("u_coefficients",c),f.setUniform1i("u_colorTexture",2),o.draw(),s.setBlendingEnabled(!0),s.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),s.setStencilTestEnabled(!0),o.unbind()}_createOrResizeResources(e,t,i){const{context:r}=e;if(!this._layerFBOTexture||this._size[0]!==t||this._size[1]!==i){if(this._size[0]=t,this._size[1]=i,this._layerFBOTexture)this._layerFBOTexture.resize(t,i);else{const n=new O;n.internalFormat=T.RGBA,n.wrapMode=E.CLAMP_TO_EDGE,n.width=t,n.height=i,this._layerFBOTexture=new L(r,n)}this._quad||(this._quad=new k(r,[-1,-1,1,-1,-1,1,1,1]))}}}const Ri=[1,0],Mi=[0,1];class Pi{constructor(){this._layerFBOTexture=null,this._horizontalBlurFBO=null,this._verticalBlurFBO=null,this._size=[0,0],this._quad=null,this._programDesc={blur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/drop-shadow/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._layerFBOTexture=w(this._layerFBOTexture),this._horizontalBlurFBO=w(this._horizontalBlurFBO),this._verticalBlurFBO=w(this._verticalBlurFBO)}draw(e,t,i){const{context:r,state:n,painter:s}=e,{materialManager:a}=s,l=this._programDesc,u=t.width,o=t.height,c=[Math.round(u),Math.round(o)],{blurRadius:h,offsetX:f,offsetY:p,color:m}=i,b=[ue(f),ue(p)];this._createOrResizeResources(e,u,o,c);const g=this._horizontalBlurFBO,_=this._verticalBlurFBO;r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1);const A=this._layerFBOTexture;t.copyToTexture(0,0,u,o,0,0,A),this._quad||(this._quad=new k(r,[-1,-1,1,-1,-1,1,1,1])),r.setViewport(0,0,c[0],c[1]);const x=this._quad;x.bind(),r.setBlendingEnabled(!1);const y=a.getProgram(l.blur,[{name:"radius",value:Math.ceil(h)}]);r.useProgram(y),r.bindFramebuffer(g),r.bindTexture(t.colorTexture,4),y.setUniform1i("u_colorTexture",4),y.setUniform2fv("u_texSize",c),y.setUniform2fv("u_direction",Ri),y.setUniform1f("u_sigma",h),x.draw(),r.bindFramebuffer(_),r.bindTexture(g==null?void 0:g.colorTexture,5),y.setUniform1i("u_colorTexture",5),y.setUniform2fv("u_direction",Mi),x.draw(),r.bindFramebuffer(t),r.setViewport(0,0,u,o);const F=a.getProgram(l.composite);r.useProgram(F),r.bindTexture(_==null?void 0:_.colorTexture,2),F.setUniform1i("u_blurTexture",2),r.bindTexture(A,3),F.setUniform1i("u_layerFBOTexture",3),F.setUniform4fv("u_shadowColor",[m[3]*(m[0]/255),m[3]*(m[1]/255),m[3]*(m[2]/255),m[3]]),F.setUniformMatrix3fv("u_displayViewMat3",n.displayMat3),F.setUniform2fv("u_shadowOffset",b),x.draw(),r.setBlendingEnabled(!0),r.setStencilTestEnabled(!0),r.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),x.unbind()}_createOrResizeResources(e,t,i,r){const{context:n}=e;if(!this._horizontalBlurFBO||this._size[0]!==t||this._size[1]!==i){if(this._size[0]=t,this._size[1]=i,this._horizontalBlurFBO)this._horizontalBlurFBO.resize(r[0],r[1]);else{const s=new O(r[0],r[1]);s.internalFormat=T.RGBA,s.wrapMode=E.CLAMP_TO_EDGE,this._horizontalBlurFBO=new P(n,s)}if(this._verticalBlurFBO)this._verticalBlurFBO.resize(r[0],r[1]);else{const s=new O(r[0],r[1]);s.internalFormat=T.RGBA,s.wrapMode=E.CLAMP_TO_EDGE,this._verticalBlurFBO=new P(n,s)}if(this._layerFBOTexture)this._layerFBOTexture.resize(t,i);else{const s=new O;s.internalFormat=T.RGBA,s.wrapMode=E.CLAMP_TO_EDGE,s.width=t,s.height=i,this._layerFBOTexture=new L(n,s)}}}}class Ci{constructor(){this._size=[0,0],this._layerFBOTexture=null}dispose(){this._layerFBOTexture=w(this._layerFBOTexture)}draw(e,t,i){const{width:r,height:n}=t;this._createOrResizeResources(e,r,n);const{context:s,painter:a}=e,{amount:l}=i,u=s.gl,o=this._layerFBOTexture;s.bindFramebuffer(t),t.copyToTexture(0,0,r,n,0,0,o),s.setBlendingEnabled(!0),s.setStencilTestEnabled(!1),s.setDepthTestEnabled(!1),s.setClearColor(0,0,0,0),s.clear(u.COLOR_BUFFER_BIT),a.blitTexture(s,o,D.NEAREST,l)}_createOrResizeResources(e,t,i){const{context:r}=e;if(!this._layerFBOTexture||this._size[0]!==t||this._size[1]!==i)if(this._size[0]=t,this._size[1]=i,this._layerFBOTexture)this._layerFBOTexture.resize(t,i);else{const n=new O;n.internalFormat=T.RGBA,n.wrapMode=E.CLAMP_TO_EDGE,n.samplingMode=D.NEAREST,n.width=t,n.height=i,this._layerFBOTexture=new L(r,n)}}}function Ai(d){switch(d){case"bloom":case"blur":case"opacity":case"drop-shadow":return d;default:return"colorize"}}const Si={colorize:()=>new Oi,blur:()=>new Ei,bloom:()=>new Ti,opacity:()=>new Ci,"drop-shadow":()=>new Pi};class Di{constructor(){this._effectMap=new Map}dispose(){this._effectMap.forEach(e=>e.dispose()),this._effectMap.clear()}getPostProcessingEffects(e){if(!e||e.length===0)return[];const t=[];for(const i of e){const r=Ai(i.type);let n=this._effectMap.get(r);n||(n=Si[r](),this._effectMap.set(r,n)),t.push({postProcessingEffect:n,effect:i})}return t}}class zi{constructor(e,t){this.brushes=e,this.name=t.name,this.drawPhase=t.drawPhase||M.MAP,this._targetFn=t.target,this.effects=t.effects||[],this.enableDefaultDraw=t.enableDefaultDraw??(()=>!0),this.forceDrawByDisplayOrder=!!t.forceDrawByDisplayOrder}render(e){const{context:t,profiler:i}=e,r=this._targetFn(),n=this.drawPhase&e.drawPhase;if(i.recordPassStart(this.name),n){this.enableDefaultDraw()&&this._doRender(e,r),i.recordPassEnd();for(const s of this.effects){if(!s.enable())continue;const a=s.apply,l=s.args&&s.args(),u=t.getViewport(),o=t.getBoundFramebufferObject(),c=e.passOptions;this._bindEffect(e,a,l),this._doRender(e,r,a.defines),this._drawAndUnbindEffect(e,a,u,o,c,l)}}}_doRender(e,t,i){if(t==null)return;const{profiler:r,context:n}=e;if(this.forceDrawByDisplayOrder){for(const l of this.brushes){if(r.recordBrushStart(l.name),l.brushEffect!=null){const u=n.getViewport(),o=n.getBoundFramebufferObject(),c=e.passOptions;this._bindEffect(e,l.brushEffect),this._drawWithBrush(l,e,t,i),this._drawAndUnbindEffect(e,l.brushEffect,u,o,c)}else this._drawWithBrush(l,e,t,i);r.recordBrushEnd()}const s=t,a=e;a.attributeView.bindTextures(e.context);for(const l of s){if(!l.visible)continue;l.commit(a),a.context.setStencilFunction(ae.EQUAL,l.stencilRef,255);const u=l.getGeometry(C.MARKER),o=l.getGeometry(C.TEXT);if(u!=null&&u.records&&o!=null&&o.records){const c=new Map,h=u.records.getCursor();for(;h.next();)c.set(h.id,[h.getDrawInfo(u,C.MARKER)]);const f=o.records.getCursor();for(;f.next();){const m=c.get(f.id),b=f.getDrawInfo(o,C.TEXT);m?m.push(b):c.set(f.id,[b])}const p=Array.from(c.entries()).sort(([m,b],[g,_])=>g-m);for(const[m,b]of p)for(const g of b){const _=a.painter.getBrush(g.geometryType,$.DEFAULT);_.prepareState(a,i),_.drawGeometry(a,l,g,i)}}else if(u){const c=a.painter.getBrush(C.MARKER,$.DEFAULT);c.prepareState(a,i),u.forEachCommand(h=>{c.drawGeometry(a,l,h,i)})}else if(o){const c=a.painter.getBrush(C.TEXT,$.DEFAULT);c.prepareState(a,i),o.forEachCommand(h=>{c.drawGeometry(a,l,h,i)})}}}else for(const s of this.brushes){if(r.recordBrushStart(s.name),s.brushEffect!=null){const a=n.getViewport(),l=n.getBoundFramebufferObject(),u=e.passOptions;this._bindEffect(e,s.brushEffect),this._drawWithBrush(s,e,t,i),this._drawAndUnbindEffect(e,s.brushEffect,a,l,u)}else this._drawWithBrush(s,e,t,i);r.recordBrushEnd()}}_drawWithBrush(e,t,i,r){Ke(i)?(e.prepareState(t,r),e.drawMany(t,i,r)):i.visible&&(e.prepareState(t,r),e.draw(t,i,r))}_bindEffect(e,t,i){const{profiler:r}=e;r.recordPassStart(this.name+"."+t.name),t.bind(e,i);const n=t.createOptions(e,i);e.passOptions=n}_drawAndUnbindEffect(e,t,i,r,n,s){const{profiler:a,context:l}=e;e.passOptions=n,a.recordBrushStart(t.name),t.draw(e,s),t.unbind(e,s),l.bindFramebuffer(r);const{x:u,y:o,width:c,height:h}=i;l.setViewport(u,o,c,h),a.recordBrushEnd(),a.recordPassEnd()}}function Ii(d,e){switch(d){case C.LINE:return S.line;case C.TEXT:return S.text;case C.LABEL:return S.label;case C.FILL:return e===$.DOT_DENSITY?S.dotDensity:S.fill;case C.MARKER:switch(e){case $.HEATMAP:return S.heatmap;case $.PIE_CHART:return S.pieChart;default:return S.marker}}}class Ui{constructor(e,t,i){this.context=e,this._blitRenderer=new Ie,this._worldExtentClipRenderer=new hi,this._isClippedToWorldExtent=!1,this._brushCache=new Map,this._lastWidth=null,this._lastHeight=null,this._prevFBO=null,this._vtlMaterialManager=new ni,this._blendEffect=new _t,this._stencilBuf=null,this._fbos=null,this._fboPool=[],this._renderTarget=null,this.effects={highlight:new mi,hittest:new gi,hittestVTL:new vi,integrate:new _i,insideEffect:new Me("inside"),outsideEffect:new Me("outside")},this.materialManager=new di(e),this.textureManager=new ft(t,i,e.type===De.WEBGL2),this.textureUploadManager=new ui(e,t),this._effectsManager=new Di}get vectorTilesMaterialManager(){return this._vtlMaterialManager}getRenderTarget(){return this._renderTarget}setRenderTarget(e){this._renderTarget=e}getFbos(e,t){if(e!==this._lastWidth||t!==this._lastHeight){if(this._lastWidth=e,this._lastHeight=t,this._fbos){let n;for(n in this._fbos)this._fbos[n].resize(e,t);return this._fbos}const i=new O(e,t);i.samplingMode=D.NEAREST,i.wrapMode=E.CLAMP_TO_EDGE;const r=new se(oe.DEPTH_STENCIL,e,t);this._stencilBuf=new Ot(this.context,r),this._fbos={output:new P(this.context,i,this._stencilBuf),blend:new P(this.context,i,this._stencilBuf),effect0:new P(this.context,i,this._stencilBuf)}}return this._fbos}acquireFbo(e,t){let i;if(this._fboPool.length>0)i=this._fboPool.pop();else{const r=new O(e,t);r.samplingMode=D.NEAREST,r.wrapMode=E.CLAMP_TO_EDGE,i=new P(this.context,r,this._stencilBuf)}return i.width===e&&i.height===t||i.resize(e,t),i}releaseFbo(e){this._fboPool.push(e)}getSharedStencilBuffer(){return this._stencilBuf}beforeRenderLayers(e,t=null){const{width:i,height:r}=e.getViewport();this._prevFBO=e.getBoundFramebufferObject();const n=this.getFbos(i,r);if(e.bindFramebuffer(n==null?void 0:n.output),e.setColorMask(!0,!0,!0,!0),t!=null){const{r:s,g:a,b:l,a:u}=t;e.setClearColor(u*s/255,u*a/255,u*l/255,u)}else e.setClearColor(0,0,0,0);e.setDepthWriteEnabled(!0),e.setClearDepth(1),e.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.setDepthWriteEnabled(!1)}beforeRenderLayer(e,t,i){var u;const{context:r,blendMode:n,effects:s,requireFBO:a,drawPhase:l}=e;if(a||Ce(l,n,s,i))r.bindFramebuffer((u=this._fbos)==null?void 0:u.blend),r.setColorMask(!0,!0,!0,!0),r.setClearColor(0,0,0,0),r.setDepthWriteEnabled(!0),r.setClearDepth(1),r.clear(r.gl.COLOR_BUFFER_BIT|r.gl.DEPTH_BUFFER_BIT),r.setDepthWriteEnabled(!1);else{const o=this._getOutputFBO();r.bindFramebuffer(o)}r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.setStencilTestEnabled(!0),r.setClearStencil(t),r.setStencilWriteMask(255),r.clear(r.gl.STENCIL_BUFFER_BIT)}compositeLayer(e,t){const{context:i,blendMode:r,effects:n,requireFBO:s,drawPhase:a}=e;if(s||Ce(a,r,n,t)){n!=null&&n.length>0&&a===M.MAP&&this._applyEffects(e,n);const l=this._getOutputFBO();i.bindFramebuffer(l),i.setStencilTestEnabled(!1),i.setStencilWriteMask(0),i.setBlendingEnabled(!0),i.setBlendFunctionSeparate(v.ONE,v.ONE_MINUS_SRC_ALPHA,v.ONE,v.ONE_MINUS_SRC_ALPHA),i.setColorMask(!0,!0,!0,!0);const u=r==null||a===M.HIGHLIGHT?"normal":r,o=this._fbos;o!=null&&o.blend.colorTexture&&this._blendEffect.draw(e,o.blend.colorTexture,D.NEAREST,u,t)}}renderLayers(e){e.bindFramebuffer(this._prevFBO);const t=this._getOutputFBO();t&&(e.setDepthTestEnabled(!1),e.setStencilWriteMask(0),this._isClippedToWorldExtent?(e.setStencilTestEnabled(!0),e.setStencilFunction(ae.EQUAL,1,255)):e.setStencilTestEnabled(!1),this.blitTexture(e,t.colorTexture,D.NEAREST))}prepareDisplay(e,t,i){const{context:r}=e;if(r.bindFramebuffer(this._prevFBO),r.setColorMask(!0,!0,!0,!0),t!=null){const{r:n,g:s,b:a,a:l}=t;r.setClearColor(l*n/255,l*s/255,l*a/255,l)}else r.setClearColor(0,0,0,0);r.setStencilWriteMask(255),r.setClearStencil(0),r.clear(r.gl.COLOR_BUFFER_BIT|r.gl.STENCIL_BUFFER_BIT),this._isClippedToWorldExtent=this._worldExtentClipRenderer.render(e,i)}dispose(){if(this.materialManager.dispose(),this.textureManager.dispose(),this.textureUploadManager.destroy(),this._blitRenderer=w(this._blitRenderer),this._worldExtentClipRenderer=w(this._worldExtentClipRenderer),this._brushCache&&(this._brushCache.forEach(e=>e.dispose()),this._brushCache.clear(),this._brushCache=null),this._fbos){let e;for(e in this._fbos)this._fbos[e]&&this._fbos[e].dispose()}for(const e of this._fboPool)e.dispose();if(this._fboPool.length=0,this.effects){let e;for(e in this.effects)this.effects[e]&&this.effects[e].dispose()}this._effectsManager.dispose(),this._vtlMaterialManager=w(this._vtlMaterialManager),this._prevFBO=null}getBrush(e,t){const i=Ii(e,t);let r=this._brushCache.get(i);return r===void 0&&(r=new i,this._brushCache.set(i,r)),r}renderObject(e,t,i,r){const n=S[i];if(!n)return;let s=this._brushCache.get(n);s===void 0&&(s=new n,this._brushCache.set(n,s)),s.prepareState(e,r),s.draw(e,t,r)}renderObjects(e,t,i,r){const n=S[i];if(!n)return;let s=this._brushCache.get(n);s===void 0&&(s=new n,this._brushCache.set(n,s)),s.drawMany(e,t,r)}registerRenderPass(e){const t=e.brushes.map(i=>(this._brushCache.has(i)||this._brushCache.set(i,new i),this._brushCache.get(i)));return new zi(t,e)}blitTexture(e,t,i,r=1){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(v.ONE,v.ONE_MINUS_SRC_ALPHA,v.ONE,v.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0),this._blitRenderer.render(e,t,i,r)}getPostProcessingEffects(e){return this._effectsManager.getPostProcessingEffects(e)}_getOutputFBO(){var e;return this._renderTarget!=null?this._renderTarget:((e=this._fbos)==null?void 0:e.output)??null}_applyEffects(e,t){var s;const i=(s=this._fbos)==null?void 0:s.blend;if(!i)return;const{context:r}=e,n=this._effectsManager.getPostProcessingEffects(t);for(const{postProcessingEffect:a,effect:l}of n)r.bindFramebuffer(i),a.draw(e,i,l)}}function Ce(d,e,t,i){return d!==M.HIGHLIGHT&&(i!==1||e!=null&&e!=="normal"||t!=null&&t.length>0)}const $i=2e3;class Os extends me{constructor(e,t){super(),this._trash=new Set,this._renderRemainingTime=0,this._lastFrameRenderTime=0,this.renderRequested=!1,this.stage=this,this._stationary=!0;const{canvas:i=document.createElement("canvas"),alpha:r=!0,stencil:n=!0,contextOptions:s={}}=t;this._canvas=i;const a=Xe("2d",i,{alpha:r,antialias:!1,depth:!0,stencil:n});this.context=new Mt(a??null,s),this.resourceManager=new Wt,this.painter=new Ui(this.context,this,this.resourceManager),J("esri-2d-profiler")&&(this._debugOutput=document.createElement("div"),this._debugOutput.setAttribute("style","margin: 24px 64px; position: absolute; color: red;"),e.appendChild(this._debugOutput));const l=()=>this._highlightGradient;this._renderParameters={drawPhase:0,state:this.state,pixelRatio:window.devicePixelRatio,stationary:!1,globalOpacity:1,blendMode:null,deltaTime:-1,time:0,inFadeTransition:!1,effects:null,context:this.context,painter:this.painter,timeline:t.timeline||new Ye,renderingOptions:t.renderingOptions,requestRender:()=>this.requestRender(),allowDelayedRender:!1,requireFBO:!1,profiler:new pt(this.context,this._debugOutput),dataUploadCounter:0,get highlightGradient(){return l()}},this._taskHandle=Qe({render:u=>this.renderFrame(u)}),this._taskHandle.pause(),this._lostWebGLContextHandle=Je(i,"webglcontextlost",u=>{this.emit("webgl-error",{error:new ee("webgl-context-lost",u.statusMessage)})}),this._bufferPool=new yt,i.setAttribute("style","width: 100%; height:100%; display:block;"),e.appendChild(i)}destroy(){var e,t,i;this.removeAllChildren(),this._emptyTrash(),this._taskHandle=ce(this._taskHandle),this._lostWebGLContextHandle=ce(this._lostWebGLContextHandle),(e=this._canvas.parentNode)==null||e.removeChild(this._canvas),(i=(t=this._debugOutput)==null?void 0:t.parentNode)==null||i.removeChild(this._debugOutput),this._bufferPool.destroy(),this.resourceManager.destroy(),this.painter.dispose(),this.context.dispose(),this._canvas=null}get backgroundColor(){return this._backgroundColor}set backgroundColor(e){this._backgroundColor=e,this.requestRender()}get bufferPool(){return this._bufferPool}get renderingOptions(){return this._renderingOptions}set renderingOptions(e){this._renderingOptions=e,this.requestRender()}get state(){return this._state}set state(e){this._state=e,this.requestRender()}get stationary(){return this._stationary}set stationary(e){this._stationary!==e&&(this._stationary=e,this.requestRender())}trashDisplayObject(e){this._trash.add(e),this.requestRender()}untrashDisplayObject(e){return this._trash.delete(e)}requestRender(){this._renderRemainingTime=$i,this.renderRequested||(this.renderRequested=!0,this.emit("will-render"),this._taskHandle.resume())}renderFrame(e){const t=this._lastFrameRenderTime?e.time-this._lastFrameRenderTime:0;this._renderRemainingTime-=t,this._renderRemainingTime<=0&&this._taskHandle.pause(),this._lastFrameRenderTime=e.time,this.renderRequested=!1,this._renderParameters.state=this._state,this._renderParameters.stationary=this.stationary,this._renderParameters.pixelRatio=window.devicePixelRatio,this._renderParameters.globalOpacity=1,this._renderParameters.time=e.time,this._renderParameters.deltaTime=e.deltaTime,this._renderParameters.effects=null,this.processRender(this._renderParameters),this._emptyTrash(),this.emit("post-render")}_createTransforms(){return{dvs:te()}}renderChildren(e){for(const t of this.children)t.beforeRender(e);this._renderChildren(this.children,e);for(const t of this.children)t.afterRender(e)}_renderChildren(e,t){const i=this.context;this.painter.textureUploadManager.upload(),i.resetInfo(),t.profiler.recordStart("drawLayers"),t.dataUploadCounter=0,t.drawPhase=M.MAP,this.painter.beforeRenderLayers(i,this.backgroundColor);for(const r of e)r.processRender(t);this.painter.prepareDisplay(t,this.backgroundColor,this.state.padding),this.painter.renderLayers(i),t.drawPhase=M.HIGHLIGHT,this.painter.beforeRenderLayers(i);for(const r of e)r.processRender(t);if(this.painter.renderLayers(i),this._isLabelDrawPhaseRequired(e)){t.drawPhase=M.LABEL,this.painter.beforeRenderLayers(i);for(const r of e)r.processRender(t);this.painter.renderLayers(i)}if(J("esri-tiles-debug")){t.drawPhase=M.DEBUG,this.painter.beforeRenderLayers(i);for(const r of e)r.processRender(t);this.painter.renderLayers(i)}t.profiler.recordEnd("drawLayers"),i.logInfo()}doRender(e){const t=this.context,{state:i,pixelRatio:r}=e;this._resizeCanvas(e),t.setViewport(0,0,r*i.size[0],r*i.size[1]),t.setDepthWriteEnabled(!0),t.setStencilWriteMask(255),super.doRender(e)}async takeScreenshot(e){const t=Math.round(this.state.size[0]*e.resolutionScale),i=Math.round(this.state.size[1]*e.resolutionScale),r=e.resolutionScale,n=this.context,s=this._state.clone();if(e.rotation!=null){const b=s.viewpoint;s.viewpoint.rotation=e.rotation,s.viewpoint=b}const a={...this._renderParameters,drawPhase:null,globalOpacity:1,stationary:!0,state:s,pixelRatio:r,time:performance.now(),deltaTime:0,blendMode:null,effects:null,inFadeTransition:!1},l=Ft(n.gl),u=new O(t,i);u.wrapMode=E.CLAMP_TO_EDGE,u.internalFormat=l?Rt.RGBA8:T.RGBA,u.isImmutable=l;const o=new P(n,u,new se(oe.DEPTH_STENCIL,t,i)),c=n.getBoundFramebufferObject(),h=n.getViewport();n.bindFramebuffer(o),n.setViewport(0,0,t,i),this._renderChildren(e.children,a);const f=this._readbackScreenshot(o,{...e.cropArea,y:i-(e.cropArea.y+e.cropArea.height)});n.bindFramebuffer(c),n.setViewport(h.x,h.y,h.width,h.height),this.requestRender();const p=await f;let m;return e.outputScale===1?m=p:(m=new ImageData(Math.round(p.width*e.outputScale),Math.round(p.height*e.outputScale)),Ze(p,m,!0)),o.dispose(),m}async _readbackScreenshot(e,t){const i=It(t.width,t.height,document.createElement("canvas"));return await e.readPixelsAsync(t.x,t.y,t.width,t.height,T.RGBA,le.UNSIGNED_BYTE,new Uint8Array(i.data.buffer)),i}_resizeCanvas(e){const t=this._canvas,i=t.style,{state:{size:r},pixelRatio:n}=e,s=r[0],a=r[1],l=Math.round(s*n),u=Math.round(a*n);t.width===l&&t.height===u||(t.width=l,t.height=u),i.width=s+"px",i.height=a+"px"}_emptyTrash(){for(;this._trash.size>0;){const e=Array.from(this._trash);this._trash.clear();for(const t of e)t.processDetach()}}_isLabelDrawPhaseRequired(e){let t=!1;for(const i of e){if(!(i instanceof me)){t=t||!1;break}if("hasLabels"in i&&i.hasLabels)return!0;t=t||this._isLabelDrawPhaseRequired(i.children)}return t}}async function Li(d){const e=he(()=>import("./mask-svg-023bbc42.js"),[],import.meta.url),t=he(()=>import("./overlay-svg-d62383f3.js"),[],import.meta.url),i=xe((await e).default,{signal:d}),r=xe((await t).default,{signal:d}),n={mask:await i,overlay:await r};return Z(d),n}class Rs extends xt{constructor(){super(),this._handles=new et,this._resourcePixelRatio=1,this.visible=!1}destroy(){this._handles=tt(this._handles),this._disposeRenderResources(),this._resourcesTask=it(this._resourcesTask)}get backgroundColor(){return this._backgroundColor}set backgroundColor(e){this._backgroundColor=e,this.requestRender()}get magnifier(){return this._magnifier}set magnifier(e){this._magnifier=e,this._handles.removeAll(),this._handles.add([X(()=>e.version,()=>{this.visible=e.visible&&e.position!=null&&e.size>0,this.requestRender()},rt),X(()=>[e.maskUrl,e.overlayUrl],()=>this._reloadResources()),X(()=>e.size,()=>{this._disposeRenderResources(),this.requestRender()})])}_createTransforms(){return{dvs:te()}}doRender(e){const t=e.context;if(!this._resourcesTask)return void this._reloadResources();if(e.drawPhase!==M.MAP||!this._canRender())return;this._updateResources(e);const i=this._magnifier;if(i.position==null)return;const r=e.pixelRatio,n=i.size*r,s=1/i.factor,a=Math.ceil(s*n);this._readbackTexture.resize(a,a);const{size:l}=e.state,u=r*l[0],o=r*l[1],c=.5*a,h=.5*a,f=_e(r*i.position.x,c,u-c-1),p=_e(o-r*i.position.y,h,o-h-1);t.setBlendingEnabled(!0);const m=f-c,b=p-h,g=this._readbackTexture;t.bindTexture(g,0),t.gl.copyTexImage2D(g.descriptor.target,0,g.descriptor.pixelFormat,m,b,a,a,0);const _=this.backgroundColor,A=_?[_.a*_.r/255,_.a*_.g/255,_.a*_.b/255,_.a]:[1,1,1,1],x=(f+i.offset.x*r)/u*2-1,y=(p-i.offset.y*r)/o*2-1,F=n/u*2,$e=n/o*2,z=this._program;t.bindVAO(this._vertexArrayObject),t.bindTexture(this._overlayTexture,6),t.bindTexture(this._maskTexture,7),t.useProgram(z),z.setUniform4fv("u_background",A),z.setUniform1i("u_readbackTexture",0),z.setUniform1i("u_overlayTexture",6),z.setUniform1i("u_maskTexture",7),z.setUniform4f("u_drawPos",x,y,F,$e),z.setUniform1i("u_maskEnabled",i.maskEnabled?1:0),z.setUniform1i("u_overlayEnabled",i.overlayEnabled?1:0),t.setStencilTestEnabled(!1),t.setColorMask(!0,!0,!0,!0),t.drawArrays(H.TRIANGLE_STRIP,0,4),t.bindVAO()}_canRender(){return this.mask&&this.overlay&&this._magnifier!=null}_reloadResources(){this._resourcesTask&&this._resourcesTask.abort();const e=this._magnifier!=null?this._magnifier.maskUrl:null,t=this._magnifier!=null?this._magnifier.overlayUrl:null;this._resourcesTask=st(async i=>{const r=e==null||t==null?Li(i):null,n=e!=null?W(e,{responseType:"image",signal:i}).then(u=>u.data):r.then(u=>u.mask),s=t!=null?W(t,{responseType:"image",signal:i}).then(u=>u.data):r.then(u=>u.overlay),[a,l]=await Promise.all([n,s]);this.mask=a,this.overlay=l,this._disposeRenderResources(),this.requestRender()})}_disposeRenderResources(){this._readbackTexture=w(this._readbackTexture),this._overlayTexture=w(this._overlayTexture),this._maskTexture=w(this._maskTexture),this._vertexArrayObject=w(this._vertexArrayObject),this._program=w(this._program)}_updateResources(e){if(e.pixelRatio!==this._resourcePixelRatio&&this._disposeRenderResources(),this._readbackTexture)return;const t=e.context;this._resourcePixelRatio=e.pixelRatio;const i=Math.ceil(this._magnifier.size*e.pixelRatio);this._program=mt(t);const r=new Uint16Array([0,1,0,0,1,1,1,0]),n=gt.attributes;this._vertexArrayObject=new ie(t,n,Bt,{geometry:re.createVertex(t,ne.STATIC_DRAW,r)}),this.overlay.width=i,this.overlay.height=i;const s=new O;s.internalFormat=T.RGBA,s.wrapMode=E.CLAMP_TO_EDGE,s.samplingMode=D.NEAREST,s.flipped=!0,s.preMultiplyAlpha=!nt(this.overlay.src)||!e.context.driverTest.svgPremultipliesAlpha.result,this._overlayTexture=new L(t,s,this.overlay),this.mask.width=i,this.mask.height=i,s.pixelFormat=s.internalFormat=T.ALPHA,this._maskTexture=new L(t,s,this.mask);const a=1/this._magnifier.factor;s.pixelFormat=s.internalFormat=T.RGBA,s.width=s.height=Math.ceil(a*i),s.samplingMode=D.LINEAR,s.flipped=!1,this._readbackTexture=new L(t,s)}}export{Is as GraphicContainer,Ds as GraphicsView2D,Cs as LabelManager,Rs as MagnifierView2D,As as MapViewNavigation,Os as Stage};
