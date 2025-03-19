const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./loader-Cil2pc0I.js","./Accessor-BHnuXKD2.js","./mat4f64-Dk4dwAN8.js","./enums-D9v74xTE.js","./cast-BA_-jlhc.js","./index-tefRSezt.js","./index-Cx51aysm.css","./JSONSupport-CGdeqxpk.js","./Version-9k2AOv05.js","./mat4-Fi6iAz29.js","./vec3f64-BLpZdpfb.js","./common-DQOJ18NT.js","./quat-4pa1e6ds.js","./mat3f64-BBpwCtoL.js","./quatf64-CCm9z-pX.js","./vec32-Dvg_eL9J.js","./vec42-YcqnINSP.js","./BufferView-_QDXRCew.js","./vec2-maR1OrZI.js","./resourceUtils-SMgkqOp7.js","./basicInterfaces-CZwQPxTp.js"])))=>i.map(i=>d[i]);
import{_ as ie}from"./index-tefRSezt.js";import{t as Z}from"./colorUtils-Rxh2V3ai.js";import{a as ae}from"./devEnvironmentUtils-CnNDiFMM.js";import{T as q}from"./mathUtils-DV9iOXpW.js";import{i as D,j as le,n as ue}from"./mat3-CR8GKnhD.js";import{t as F,e as J}from"./mat3f64-BBpwCtoL.js";import{h as ce}from"./mat4-Fi6iAz29.js";import{e as me}from"./mat4f64-Dk4dwAN8.js";import{s as fe}from"./vec2f64-Dy6m9Nrb.js";import{E as U,c as de,i as z,r as pe,A as xe,I as Te}from"./vec32-Dvg_eL9J.js";import{n as L}from"./vec3f64-BLpZdpfb.js";import{q as he,l as G}from"./aaBoundingBox-CeBivBRq.js";import{n as _,f as ge,N as be}from"./FloatArray-BCfeX8wo.js";import{c as X,x as ye,L as $e,i as ee,O as we,E as Re}from"./BufferView-_QDXRCew.js";import{r as ve,n as Be,d as W,l as H}from"./vec3-Bn81gjoR.js";import{o as Se,d as K}from"./vec4-DcW4fpPA.js";import{o as Me,n as Ae}from"./indexUtils-Cyox7Wyy.js";import{n as Ee}from"./DefaultLoadingContext-b8vwa5ZD.js";import{n as C}from"./resourceUtils-SMgkqOp7.js";import{i as Oe,f as _e}from"./vec2f32-BbH2jxlN.js";import{j as Ie,E as Fe}from"./wosrLoader-F8PxTYxV.js";import{a as Q}from"./NormalAttribute.glsl-BPQl43kJ.js";import{t as B}from"./Attribute-B-NAci_J.js";import{i as A,n as Le,e as Y}from"./basicInterfaces-CZwQPxTp.js";import{e as S}from"./VertexAttribute-Cq4MnHjR.js";import{s as Ce,t as Pe,z as P,a as je,o as Ne}from"./DefaultMaterial-B5sYRDQR.js";function M(r){if(r==null)return null;const t=r.offset!=null?r.offset:Oe,s=r.rotation!=null?r.rotation:0,o=r.scale!=null?r.scale:_e,c=F(1,0,0,0,1,0,t[0],t[1],1),f=F(Math.cos(s),-Math.sin(s),0,Math.sin(s),Math.cos(s),0,0,0,1),a=F(o[0],0,0,0,o[1],0,0,0,1),l=J();return D(l,f,a),D(l,c,l),l}class Ve{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class ke{constructor(t,s,o){this.name=t,this.lodThreshold=s,this.pivotOffset=o,this.stageResources=new Ve,this.numberOfVertices=0}}async function qe(r,t){var u;const s=re(ae(r));if(s.fileType==="wosr"){const d=await(t.cache?t.cache.loadWOSR(s.url,t):Ie(s.url,t)),{engineResources:p,referenceBoundingBox:m}=Fe(d,t);return{lods:p,referenceBoundingBox:m,isEsriSymbolResource:!1,isWosr:!0}}let o;if(t.cache)o=await t.cache.loadGLTF(s.url,t,!!t.usePBR);else{const{loadGLTF:d}=await ie(()=>import("./loader-Cil2pc0I.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),import.meta.url);o=await d(new Ee(t.streamDataRequester),s.url,t,t.usePBR)}const c=(u=o.model.meta)==null?void 0:u.ESRI_proxyEllipsoid,f=o.meta.isEsriSymbolResource&&c!=null&&o.meta.ESRI_webstyle==="EsriRealisticTreesStyle";f&&!o.customMeta.esriTreeRendering&&(o.customMeta.esriTreeRendering=!0,We(o,c));const a=!!t.usePBR,l=o.meta.isEsriSymbolResource?{usePBR:a,isSchematic:!1,treeRendering:f,mrrFactors:Ce}:{usePBR:a,isSchematic:!1,treeRendering:!1,mrrFactors:Pe},e={...t.materialParameters,treeRendering:f},{engineResources:n,referenceBoundingBox:i}=De(o,l,e,t,s.specifiedLodIndex);return{lods:n,referenceBoundingBox:i,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1}}function re(r){const t=r.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:t[4]!=null?Number(t[4]):null}:r.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:r,specifiedLodIndex:null}:{fileType:"unknown",url:r,specifiedLodIndex:null}}function De(r,t,s,o,c){const f=r.model,a=new Array,l=new Map,e=new Map,n=f.lods.length,i=he();return f.lods.forEach((u,d)=>{const p=o.skipHighLods===!0&&(n>1&&d===0||n>3&&d===1)||o.skipHighLods===!1&&c!=null&&d!==c;if(p&&d!==0)return;const m=new ke(u.name,u.lodThreshold,[0,0,0]);u.parts.forEach(h=>{const T=p?new P({},o):Ue(f,h,m,t,s,l,e,o),{geometry:b,vertexCount:y}=ze(h,T??new P({},o)),g=b.boundingInfo;g!=null&&d===0&&(G(i,g.bbMin),G(i,g.bbMax)),T!=null&&(m.stageResources.geometries.push(b),m.numberOfVertices+=y)}),p||a.push(m)}),{engineResources:a,referenceBoundingBox:i}}function Ue(r,t,s,o,c,f,a,l){var y,g;const e=r.materials.get(t.material);if(e==null)return null;const{normal:n,color:i,texCoord0:u,tangent:d}=t.attributes,p=t.material+(n?"_normal":"")+(i?"_color":"")+(u?"_texCoord0":"")+(d?"_tangent":""),m=t.attributes.texCoord0!=null,h=t.attributes.normal!=null,T=Ge(e.alphaMode);if(!f.has(p)){if(m){const v=(O,ne=!1)=>{if(O!=null&&!a.has(O)){const I=r.textures.get(O);if(I){const $=I.data;a.set(O,new be(C($)?$.data:$,{...I.parameters,preMultiplyAlpha:!C($)&&ne,encoding:C($)?$.encoding:void 0}))}}};v(e.colorTexture,T!==A.Opaque),v(e.normalTexture),v(e.occlusionTexture),v(e.emissiveTexture),v(e.metallicRoughnessTexture)}const x=1/Z,R=e.color[0]**x,j=e.color[1]**x,N=e.color[2]**x,te=e.emissiveFactor[0]**x,oe=e.emissiveFactor[1]**x,se=e.emissiveFactor[2]**x,E=e.colorTexture!=null&&m?a.get(e.colorTexture):null,V=je(e),k=((y=e.normalTextureTransform)==null?void 0:y.scale)!=null?(g=e.normalTextureTransform)==null?void 0:g.scale:fe;f.set(p,new P({...o,transparent:T===A.Blend,customDepthTest:Le.Lequal,textureAlphaMode:T,textureAlphaCutoff:e.alphaCutoff,diffuse:[R,j,N],ambient:[R,j,N],opacity:e.opacity,doubleSided:e.doubleSided,doubleSidedType:"winding-order",cullFace:e.doubleSided?Y.None:Y.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:h?Q.Attribute:Q.ScreenDerivative,castShadows:!0,receiveShadows:e.receiveShadows,receiveAmbientOcclusion:e.receiveAmbientOcclustion,textureId:E!=null?E.id:void 0,colorMixMode:e.colorMixMode,normalTextureId:e.normalTexture!=null&&m?a.get(e.normalTexture).id:void 0,textureAlphaPremultiplied:E!=null&&!!E.parameters.preMultiplyAlpha,occlusionTextureId:e.occlusionTexture!=null&&m?a.get(e.occlusionTexture).id:void 0,emissiveTextureId:e.emissiveTexture!=null&&m?a.get(e.emissiveTexture).id:void 0,metallicRoughnessTextureId:e.metallicRoughnessTexture!=null&&m?a.get(e.metallicRoughnessTexture).id:void 0,emissiveFactor:[te,oe,se],mrrFactors:V?Ne:[e.metallicFactor,e.roughnessFactor,o.mrrFactors[2]],isSchematic:V,colorTextureTransformMatrix:M(e.colorTextureTransform),normalTextureTransformMatrix:M(e.normalTextureTransform),scale:[k[0],k[1]],occlusionTextureTransformMatrix:M(e.occlusionTextureTransform),emissiveTextureTransformMatrix:M(e.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:M(e.metallicRoughnessTextureTransform),...c},l))}const b=f.get(p);if(s.stageResources.materials.push(b),m){const x=R=>{R!=null&&s.stageResources.textures.push(a.get(R))};x(e.colorTexture),x(e.normalTexture),x(e.occlusionTexture),x(e.emissiveTexture),x(e.metallicRoughnessTexture)}return b}function ze(r,t){const s=r.attributes.position.count,o=Me(r.indices||s,r.primitiveType),c=_(3*s),{typedBuffer:f,typedBufferStride:a}=r.attributes.position;ve(c,f,r.transform,3,a);const l=[[S.POSITION,new B(c,o,3,!0)]];if(r.attributes.normal!=null){const n=_(3*s),{typedBuffer:i,typedBufferStride:u}=r.attributes.normal;le(w,r.transform),Be(n,i,w,3,u),q(w)&&W(n,n),l.push([S.NORMAL,new B(n,o,3,!0)])}if(r.attributes.tangent!=null){const n=_(4*s),{typedBuffer:i,typedBufferStride:u}=r.attributes.tangent;ue(w,r.transform),Se(n,i,w,4,u),q(w)&&W(n,n,4),l.push([S.TANGENT,new B(n,o,4,!0)])}if(r.attributes.texCoord0!=null){const n=_(2*s),{typedBuffer:i,typedBufferStride:u}=r.attributes.texCoord0;Ae(n,i,2,u),l.push([S.UV0,new B(n,o,2,!0)])}const e=r.attributes.color;if(e!=null){const n=new Uint8Array(4*s);e.elementCount===4?e instanceof X?K(n,e,1,255):(e instanceof ye||e instanceof $e)&&K(n,e,1/255,255):(n.fill(255),e instanceof ee?H(n,e.typedBuffer,1,255,4,e.typedBufferStride):(r.attributes.color instanceof we||r.attributes.color instanceof Re)&&H(n,e.typedBuffer,1/255,255,4,r.attributes.color.typedBufferStride)),l.push([S.COLOR,new B(n,o,4,!0)])}return{geometry:new ge(t,l),vertexCount:s}}const w=J();function Ge(r){switch(r){case"BLEND":return A.Blend;case"MASK":return A.Mask;case"OPAQUE":case null:case void 0:return A.Opaque}}function We(r,t){for(let s=0;s<r.model.lods.length;++s){const o=r.model.lods[s];for(const c of o.parts){const f=c.attributes.normal;if(f==null)return;const a=c.attributes.position,l=a.count,e=L(),n=L(),i=L(),u=new Float32Array(4*l),d=new Float32Array(3*l),p=ce(me(),c.transform);let m=0,h=0;for(let T=0;T<l;T++){a.getVec(T,n),f.getVec(T,e),U(n,n,c.transform),de(i,n,t.center),z(i,i,t.radius);const b=i[2],y=pe(i),g=Math.min(.45+.55*y*y,1)**Z;z(i,i,t.radius),p!==null&&U(i,i,p),xe(i,i),s+1!==r.model.lods.length&&r.model.lods.length>1&&Te(i,i,e,b>-1?.2:Math.min(-4*b-3.8,1)),d[m]=i[0],d[m+1]=i[1],d[m+2]=i[2],m+=3,u[h]=g,u[h+1]=g,u[h+2]=g,u[h+3]=1,h+=4}c.attributes.normal=new ee(d),c.attributes.color=new X(u)}}}const br=Object.freeze(Object.defineProperty({__proto__:null,fetch:qe,parseUrl:re},Symbol.toStringTag,{value:"Module"}));export{qe as Y,br as o,M as s};
