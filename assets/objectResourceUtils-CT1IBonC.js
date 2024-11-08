const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./loader-Ca9EgBla.js","./subclass-BZA_h8Db.js","./mat4f64-Dk4dwAN8.js","./enums-D9v74xTE.js","./Accessor-BLX9ikPh.js","./assets-C43MgM-v.js","./index-Bh2oEzTI.js","./index-2kwcjS9-.css","./tslib.es6-B3Jf3DVX.js","./Version-BSlAgupz.js","./mat4-GpOFENPA.js","./vec3f64-BLpZdpfb.js","./common-DQOJ18NT.js","./quat-4pa1e6ds.js","./mat3f64-BBpwCtoL.js","./quatf64-CCm9z-pX.js","./vec32-Dvg_eL9J.js","./vec42-YcqnINSP.js","./BufferView-_QDXRCew.js","./vec2-maR1OrZI.js","./resourceUtils-B0XGoEvl.js","./renderState-DQLu6AJX.js"])))=>i.map(i=>d[i]);
import{_ as te}from"./index-Bh2oEzTI.js";import{a as re}from"./devEnvironmentUtils-CnNDiFMM.js";import{A as V}from"./mathUtils-C4_ghTv4.js";import{i as j,j as oe,n as se}from"./mat3-BRl2i9Bz.js";import{t as _,e as K}from"./mat3f64-BBpwCtoL.js";import{h as ne}from"./mat4-GpOFENPA.js";import{e as ie}from"./mat4f64-Dk4dwAN8.js";import{l as ae}from"./vec2f64-miziP1SN.js";import{E as U,c as le,i as k,r as ue,A as ce,I as me}from"./vec32-Dvg_eL9J.js";import{n as C}from"./vec3f64-BLpZdpfb.js";import{q as fe,l as q}from"./aaBoundingBox-BE7cC1jD.js";import{t as O,p as de,C as pe}from"./Texture-Fac_8AOC.js";import{c as xe,x as Q,L as he,i as J,O as ge,E as Te}from"./BufferView-_QDXRCew.js";import{e as be,f as ye,l as D,o as G}from"./vec3-kbEkneOB.js";import{n as $e,s as W}from"./vec4-BpYqBTK4.js";import{o as $,a as Re,n as we,t as ve}from"./DefaultMaterial_COLOR_GAMMA-DmJDQQRt.js";import{A as Be,T as Me,n as Se,t as Ae}from"./vec33-DUxPafiq.js";import{r as I}from"./resourceUtils-B0XGoEvl.js";import{i as Ee,f as Oe}from"./vec2f32-BbH2jxlN.js";import{b as z}from"./Matrix3DrawUniform-CiBFaSz6.js";import{t as v}from"./orientedBoundingBox-DOAJUK5g.js";import{i as S,n as Fe,e as H}from"./renderState-DQLu6AJX.js";import{e as B}from"./VertexAttribute-Cq4MnHjR.js";import{s as _e,t as Ce,B as L,n as Ie,o as Le}from"./DefaultMaterial-DgOvtNL9.js";function M(t){if(t==null)return null;const r=t.offset!=null?t.offset:Ee,n=t.rotation!=null?t.rotation:0,s=t.scale!=null?t.scale:Oe,c=_(1,0,0,0,1,0,r[0],r[1],1),m=_(Math.cos(n),-Math.sin(n),0,Math.sin(n),Math.cos(n),0,0,0,1),a=_(s[0],0,0,0,s[1],0,0,0,1),l=K();return j(l,m,a),j(l,c,l),l}class Ne{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class Pe{constructor(r,n,s){this.name=r,this.lodThreshold=n,this.pivotOffset=s,this.stageResources=new Ne,this.numberOfVertices=0}}async function Ve(t,r){var u;const n=X(re(t));if(n.fileType==="wosr"){const f=await(r.cache?r.cache.loadWOSR(n.url,r):Be(n.url,r)),{engineResources:x,referenceBoundingBox:p}=Me(f,r);return{lods:x,referenceBoundingBox:p,isEsriSymbolResource:!1,isWosr:!0}}let s;if(r.cache)s=await r.cache.loadGLTF(n.url,r,!!r.usePBR);else{const{loadGLTF:f}=await te(()=>import("./loader-Ca9EgBla.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]),import.meta.url);s=await f(new Se(r.streamDataRequester),n.url,r,r.usePBR)}const c=(u=s.model.meta)==null?void 0:u.ESRI_proxyEllipsoid,m=s.meta.isEsriSymbolResource&&c!=null&&s.meta.ESRI_webstyle==="EsriRealisticTreesStyle";m&&!s.customMeta.esriTreeRendering&&(s.customMeta.esriTreeRendering=!0,De(s,c));const a=!!r.usePBR,l=s.meta.isEsriSymbolResource?{usePBR:a,isSchematic:!1,treeRendering:m,mrrFactors:_e}:{usePBR:a,isSchematic:!1,treeRendering:!1,mrrFactors:Ce},i={...r.materialParameters,treeRendering:m},{engineResources:e,referenceBoundingBox:o}=je(s,l,i,r,n.specifiedLodIndex);return{lods:e,referenceBoundingBox:o,isEsriSymbolResource:s.meta.isEsriSymbolResource,isWosr:!1}}function X(t){const r=t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return r?{fileType:"gltf",url:r[1],specifiedLodIndex:r[4]!=null?Number(r[4]):null}:t.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:t,specifiedLodIndex:null}:{fileType:"unknown",url:t,specifiedLodIndex:null}}function je(t,r,n,s,c){const m=t.model,a=new Array,l=new Map,i=new Map,e=m.lods.length,o=fe();return m.lods.forEach((u,f)=>{const x=s.skipHighLods===!0&&(e>1&&f===0||e>3&&f===1)||s.skipHighLods===!1&&c!=null&&f!==c;if(x&&f!==0)return;const p=new Pe(u.name,u.lodThreshold,[0,0,0]);u.parts.forEach(h=>{const d=x?new L({},s):Ue(m,h,p,r,n,l,i,s),{geometry:g,vertexCount:b}=ke(h,d??new L({},s)),T=g.boundingInfo;T!=null&&f===0&&(q(o,T.bbMin),q(o,T.bbMax)),d!=null&&(p.stageResources.geometries.push(g),p.numberOfVertices+=b)}),x||a.push(p)}),{engineResources:a,referenceBoundingBox:o}}function Ue(t,r,n,s,c,m,a,l){var p,h;const i=r.material+(r.attributes.normal?"_normal":"")+(r.attributes.color?"_color":"")+(r.attributes.texCoord0?"_texCoord0":"")+(r.attributes.tangent?"_tangent":""),e=t.materials.get(r.material),o=r.attributes.texCoord0!=null,u=r.attributes.normal!=null;if(e==null)return null;const f=qe(e.alphaMode);if(!m.has(i)){if(o){const w=(E,ee=!1)=>{if(E!=null&&!a.has(E)){const F=t.textures.get(E);if(F!=null){const y=F.data;a.set(E,new pe(I(y)?y.data:y,{...F.parameters,preMultiplyAlpha:!I(y)&&ee,encoding:I(y)&&y.encoding!=null?y.encoding:void 0}))}}};w(e.textureColor,f!==S.Opaque),w(e.textureNormal),w(e.textureOcclusion),w(e.textureEmissive),w(e.textureMetallicRoughness)}const d=e.color[0]**(1/$),g=e.color[1]**(1/$),b=e.color[2]**(1/$),T=e.emissiveFactor[0]**(1/$),Y=e.emissiveFactor[1]**(1/$),Z=e.emissiveFactor[2]**(1/$),A=e.textureColor!=null&&o?a.get(e.textureColor):null,N=Ie({normalTexture:e.textureNormal,metallicRoughnessTexture:e.textureMetallicRoughness,metallicFactor:e.metallicFactor,roughnessFactor:e.roughnessFactor,emissiveTexture:e.textureEmissive,emissiveFactor:e.emissiveFactor,occlusionTexture:e.textureOcclusion}),P=((p=e.normalTextureTransform)==null?void 0:p.scale)!=null?(h=e.normalTextureTransform)==null?void 0:h.scale:ae;m.set(i,new L({...s,transparent:f===S.Blend,customDepthTest:Fe.Lequal,textureAlphaMode:f,textureAlphaCutoff:e.alphaCutoff,diffuse:[d,g,b],ambient:[d,g,b],opacity:e.opacity,doubleSided:e.doubleSided,doubleSidedType:"winding-order",cullFace:e.doubleSided?H.None:H.Back,hasVertexColors:!!r.attributes.color,hasVertexTangents:!!r.attributes.tangent,normalType:u?z.Attribute:z.ScreenDerivative,castShadows:!0,receiveShadows:e.receiveShadows,receiveAmbientOcclusion:e.receiveAmbientOcclustion,textureId:A!=null?A.id:void 0,colorMixMode:e.colorMixMode,normalTextureId:e.textureNormal!=null&&o?a.get(e.textureNormal).id:void 0,textureAlphaPremultiplied:A!=null&&!!A.parameters.preMultiplyAlpha,occlusionTextureId:e.textureOcclusion!=null&&o?a.get(e.textureOcclusion).id:void 0,emissiveTextureId:e.textureEmissive!=null&&o?a.get(e.textureEmissive).id:void 0,metallicRoughnessTextureId:e.textureMetallicRoughness!=null&&o?a.get(e.textureMetallicRoughness).id:void 0,emissiveFactor:[T,Y,Z],mrrFactors:N?Le:[e.metallicFactor,e.roughnessFactor,s.mrrFactors[2]],isSchematic:N,colorTextureTransformMatrix:M(e.colorTextureTransform),normalTextureTransformMatrix:M(e.normalTextureTransform),scale:[P[0],P[1]],occlusionTextureTransformMatrix:M(e.occlusionTextureTransform),emissiveTextureTransformMatrix:M(e.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:M(e.metallicRoughnessTextureTransform),...c},l))}const x=m.get(i);if(n.stageResources.materials.push(x),o){const d=g=>{g!=null&&n.stageResources.textures.push(a.get(g))};d(e.textureColor),d(e.textureNormal),d(e.textureOcclusion),d(e.textureEmissive),d(e.textureMetallicRoughness)}return x}function ke(t,r){const n=t.attributes.position.count,s=Re(t.indices||n,t.primitiveType),c=O(3*n),{typedBuffer:m,typedBufferStride:a}=t.attributes.position;be(c,m,t.transform,3,a);const l=[[B.POSITION,new v(c,s,3,!0)]];if(t.attributes.normal!=null){const e=O(3*n),{typedBuffer:o,typedBufferStride:u}=t.attributes.normal;oe(R,t.transform),ye(e,o,R,3,u),V(R)&&D(e,e),l.push([B.NORMAL,new v(e,s,3,!0)])}if(t.attributes.tangent!=null){const e=O(4*n),{typedBuffer:o,typedBufferStride:u}=t.attributes.tangent;se(R,t.transform),$e(e,o,R,4,u),V(R)&&D(e,e,4),l.push([B.TANGENT,new v(e,s,4,!0)])}if(t.attributes.texCoord0!=null){const e=O(2*n),{typedBuffer:o,typedBufferStride:u}=t.attributes.texCoord0;we(e,o,2,u),l.push([B.UV0,new v(e,s,2,!0)])}const i=t.attributes.color;if(i!=null){const e=new Uint8Array(4*n);i.elementCount===4?i instanceof xe?W(e,i,255):i instanceof Q?ve(e,i):i instanceof he&&W(e,i,1/256):(e.fill(255),i instanceof J?G(e,i.typedBuffer,255,4,i.typedBufferStride):t.attributes.color instanceof ge?Ae(e,i.typedBuffer,4,t.attributes.color.typedBufferStride):t.attributes.color instanceof Te&&G(e,i.typedBuffer,1/256,4,i.typedBufferStride)),l.push([B.COLOR,new v(e,s,4,!0)])}return{geometry:new de(r,l),vertexCount:n}}const R=K();function qe(t){switch(t){case"BLEND":return S.Blend;case"MASK":return S.Mask;case"OPAQUE":case null:case void 0:return S.Opaque}}function De(t,r){for(let n=0;n<t.model.lods.length;++n){const s=t.model.lods[n];for(const c of s.parts){const m=c.attributes.normal;if(m==null)return;const a=c.attributes.position,l=a.count,i=C(),e=C(),o=C(),u=new Uint8Array(4*l),f=new Float64Array(3*l),x=ne(ie(),c.transform);let p=0,h=0;for(let d=0;d<l;d++){a.getVec(d,e),m.getVec(d,i),U(e,e,c.transform),le(o,e,r.center),k(o,o,r.radius);const g=o[2],b=ue(o),T=Math.min(.45+.55*b*b,1);k(o,o,r.radius),x!==null&&U(o,o,x),ce(o,o),n+1!==t.model.lods.length&&t.model.lods.length>1&&me(o,o,i,g>-1?.2:Math.min(-4*g-3.8,1)),f[p]=o[0],f[p+1]=o[1],f[p+2]=o[2],p+=3,u[h]=255*T,u[h+1]=255*T,u[h+2]=255*T,u[h+3]=255,h+=4}c.attributes.normal=new J(f),c.attributes.color=new Q(u)}}}const pt=Object.freeze(Object.defineProperty({__proto__:null,fetch:Ve,parseUrl:X},Symbol.toStringTag,{value:"Module"}));export{Ve as e,pt as o,M as s};
