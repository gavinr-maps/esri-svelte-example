import{h as B}from"./Color-gncXBiLc.js";import{t as L}from"./colorUtils-Rxh2V3ai.js";import{P as z}from"./cast-BA_-jlhc.js";import{s as D,o as O}from"./Accessor-BHnuXKD2.js";import{T as S,M as G}from"./mathUtils-DV9iOXpW.js";import{j as N,n as U}from"./mat3-CR8GKnhD.js";import{e as C}from"./mat3f64-BBpwCtoL.js";import{r as V}from"./vec3f64-BLpZdpfb.js";import{r as q}from"./vec4f64-o2zAXfmz.js";import{w as K,m as Q,f as k,i as H}from"./MeshComponent-Csew-urT.js";import{p as J}from"./MeshVertexAttributes-Dh8Pp9-Y.js";import{l as M}from"./meshVertexSpaceUtils-SW0WEjNN.js";import{c as j,x as F,L as W,O as R,i as I,E as X,T as Y,u as Z}from"./BufferView-_QDXRCew.js";import{e as ee,f as te,s as re,u as _}from"./vec3-Bn81gjoR.js";import{n as oe,u as ne,c as E}from"./vec4-DcW4fpPA.js";import{e as ie}from"./types-D0PSWh4d.js";import{loadGLTF as se}from"./loader-Cil2pc0I.js";import{o as ae,a as le,l as ue}from"./indexUtils-Cyox7Wyy.js";import{f as fe}from"./vec33-KumQEj7U.js";import{B as ce}from"./vertexSpaceConversion-Dbe11h0o.js";import{n as me}from"./DefaultLoadingContext-b8vwa5ZD.js";import{n as pe}from"./resourceUtils-SMgkqOp7.js";import{D as w}from"./enums-D9v74xTE.js";import"./index-tefRSezt.js";import"./JSONSupport-CGdeqxpk.js";import"./common-DQOJ18NT.js";import"./imageUtils-brik-GLm.js";import"./writer-B2bQV2uU.js";import"./Clonable-DvJsj5LF.js";import"./meshProperties-C4iW0Ukm.js";import"./vec32-Dvg_eL9J.js";import"./Point-XGrwlf63.js";import"./MeshLocalVertexSpace-C0YDTRex.js";import"./enumeration-Cr5WIZs4.js";import"./vec2-maR1OrZI.js";import"./vec42-YcqnINSP.js";import"./mat4f64-Dk4dwAN8.js";import"./Version-9k2AOv05.js";import"./mat4-Fi6iAz29.js";import"./quat-4pa1e6ds.js";import"./quatf64-CCm9z-pX.js";import"./Indices-Db9lERgy.js";import"./spatialReferenceEllipsoidUtils-DM073JUd.js";import"./computeTranslationToOriginAndRotation-BT43Xu5d.js";import"./projectBuffer-DOU0xvVi.js";import"./geodesicConstants-yASAK_zX.js";import"./projectPointToVector-BS0u8fq6.js";import"./projection-B2I9Bzj_.js";import"./SimpleObservable-7oieNGD8.js";import"./Extent-CBBGeHb-.js";import"./Polyline-BmuD2-ZN.js";import"./reactiveUtils-BR0C1Kq4.js";import"./Evented-DCWccWGU.js";import"./basicInterfaces-CZwQPxTp.js";function de(e,t,r){const l=e.typedBuffer,s=e.typedBufferStride,o=t.typedBuffer,u=t.typedBufferStride,n=r?r.count:t.count;let a=((r==null?void 0:r.dstIndex)??0)*s,c=((r==null?void 0:r.srcIndex)??0)*u;for(let f=0;f<n;++f){for(let i=0;i<9;++i)l[a+i]=o[c+i];a+=s,c+=u}}Object.freeze(Object.defineProperty({__proto__:null,copy:de},Symbol.toStringTag,{value:"Module"}));function xe(e,t,r){const l=e.typedBuffer,s=e.typedBufferStride,o=t.typedBuffer,u=t.typedBufferStride,n=r?r.count:t.count;let a=((r==null?void 0:r.dstIndex)??0)*s,c=((r==null?void 0:r.srcIndex)??0)*u;for(let f=0;f<n;++f){for(let i=0;i<16;++i)l[a+i]=o[c+i];a+=s,c+=u}}Object.freeze(Object.defineProperty({__proto__:null,copy:xe},Symbol.toStringTag,{value:"Module"}));function ye(e,t){P(e.typedBuffer,t,e.typedBufferStride)}function P(e,t,r=4){const l=t.typedBuffer,s=t.typedBufferStride,o=t.count;let u=0,n=0;for(let a=0;a<o;++a)e[u]=l[n],e[u+1]=l[n+1],e[u+2]=l[n+2],e[u+3]=l[n+3],u+=r,n+=s}function $(e,t,r,l,s,o){const u=e.typedBuffer,n=e.typedBufferStride,a=(o==null?void 0:o.count)??e.count;let c=((o==null?void 0:o.dstIndex)??0)*n;for(let f=0;f<a;++f)u[c]=t,u[c+1]=r,u[c+2]=l,u[c+3]=s,c+=n}Object.freeze(Object.defineProperty({__proto__:null,copy:P,copyView:ye,fill:$},Symbol.toStringTag,{value:"Module"}));function g(e,t){return new e(new ArrayBuffer(t*e.ElementCount*ie(e.ElementType)))}async function Rt(e,t,r){const l=new me(ge(r)),s=(await se(l,t,r,!0)).model,o=s.lods.shift(),u=new Map,n=new Map;s.textures.forEach((y,h)=>u.set(h,he(y))),s.materials.forEach((y,h)=>n.set(h,we(y,u)));const a=$e(o);for(const y of a.parts)be(a,y,n);const{position:c,normal:f,tangent:i,color:m,texCoord0:p}=a.vertexAttributes,d=M(e,r),b=e.spatialReference.isGeographic?M(e):d,v=ce({vertexAttributes:{position:c.typedBuffer,normal:f==null?void 0:f.typedBuffer,tangent:i==null?void 0:i.typedBuffer},vertexSpace:b,spatialReference:e.spatialReference},d,{allowBufferReuse:!0,sourceUnit:r!=null&&r.unitConversionDisabled?void 0:"meters"});if(!v)throw new D("load-gltf-mesh:vertex-space-projection",`Failed to load mesh from glTF because we could not convert the vertex space from ${b.type} to ${d.type}`);return{transform:null,vertexSpace:d,components:a.components,spatialReference:e.spatialReference,vertexAttributes:new J({...v,color:m==null?void 0:m.typedBuffer,uv:p==null?void 0:p.typedBuffer})}}function ge(e){const t=e==null?void 0:e.resolveFile;return t?{busy:!1,request:async(r,l,s)=>{const o=(t==null?void 0:t(r))??r;return(await z(o,{responseType:l==="image"?"image":l==="binary"||l==="image+type"?"array-buffer":"json",signal:s==null?void 0:s.signal,timeout:0})).data}}:null}function T(e,t){if(e==null)return"-";const r=e.typedBuffer;return`${O(t,r.buffer,()=>t.size)}/${r.byteOffset}/${r.byteLength}`}function Te(e){return e!=null?e.toString():"-"}function $e(e){let t=0;const r={color:!1,tangent:!1,normal:!1,texCoord0:!1},l=new Map,s=new Map,o=[];for(const u of e.parts){const{position:n,normal:a,color:c,tangent:f,texCoord0:i}=u.attributes,m=`
      ${T(n,l)}/
      ${T(a,l)}/
      ${T(c,l)}/
      ${T(f,l)}/
      ${T(i,l)}/
      ${Te(u.transform)}
    `;let p=!1;const d=O(s,m,()=>(p=!0,{start:t,length:n.count}));p&&(t+=n.count),a&&(r.normal=!0),c&&(r.color=!0),f&&(r.tangent=!0),i&&(r.texCoord0=!0),o.push({gltf:u,writeVertices:p,region:d})}return{vertexAttributes:{position:g(Y,t),normal:r.normal?g(I,t):null,tangent:r.tangent?g(j,t):null,color:r.color?g(F,t):null,texCoord0:r.texCoord0?g(Z,t):null},parts:o,components:[]}}function he(e){return new K({data:(pe(e.data),e.data),wrap:Se(e.parameters.wrap)})}function we(e,t){const r=new B(Ce(e.color,e.opacity)),l=e.emissiveFactor?new B(Me(e.emissiveFactor)):null,s=o=>o?new H({scale:o.scale?[o.scale[0],o.scale[1]]:[1,1],rotation:G(o.rotation??0),offset:o.offset?[o.offset[0],o.offset[1]]:[0,0]}):null;return new Q({color:r,colorTexture:t.get(e.colorTexture),normalTexture:t.get(e.normalTexture),emissiveColor:l,emissiveTexture:t.get(e.emissiveTexture),occlusionTexture:t.get(e.occlusionTexture),alphaMode:Be(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:t.get(e.metallicRoughnessTexture),colorTextureTransform:s(e.colorTextureTransform),normalTextureTransform:s(e.normalTextureTransform),occlusionTextureTransform:s(e.occlusionTextureTransform),emissiveTextureTransform:s(e.emissiveTextureTransform),metallicRoughnessTextureTransform:s(e.metallicRoughnessTextureTransform)})}function be(e,t,r){t.writeVertices&&ve(e,t);const{indices:l,attributes:s,primitiveType:o,material:u}=t.gltf;let n=ae(l||s.position.count,o);const a=t.region.start;if(a){const c=new Uint32Array(n);for(let f=0;f<n.length;f++)c[f]+=a;n=c}e.components.push(new k({name:t.gltf.name,faces:n,material:r.get(u),shading:s.normal?"source":"flat",trustSourceNormals:!0}))}function ve(e,t){const{position:r,normal:l,tangent:s,color:o,texCoord0:u}=e.vertexAttributes,n=t.region.start,{attributes:a,transform:c}=t.gltf,f=a.position.count;if(ee(r.slice(n,f),a.position,c),a.normal!=null&&l!=null){const i=N(C(),c),m=l.slice(n,f);te(m,a.normal,i),S(i)&&re(m,m)}else l!=null&&fe(l,0,0,1,{dstIndex:n,count:f});if(a.tangent!=null&&s!=null){const i=U(C(),c),m=s.slice(n,f);oe(m,a.tangent,i),S(i)&&ne(m,m)}else s!=null&&$(s,0,0,1,1,{dstIndex:n,count:f});if(a.texCoord0!=null&&u!=null?le(u.slice(n,f),a.texCoord0):u!=null&&ue(u,0,0,{dstIndex:n,count:f}),a.color!=null&&o!=null){const i=a.color,m=o.slice(n,f);if(i.elementCount===4)i instanceof j?E(m,i,1,255):(i instanceof F||i instanceof W)&&E(m,i,1/255,255);else{$(m,255,255,255,255);const p=R.fromTypedArray(m.typedBuffer,m.typedBufferStride);i instanceof I?_(p,i,1,255):(i instanceof R||i instanceof X)&&_(p,i,1/255,255)}}else o!=null&&$(o.slice(n,f),255,255,255,255)}function Be(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Se(e){return{horizontal:A(e.s),vertical:A(e.t)}}function A(e){switch(e){case w.CLAMP_TO_EDGE:return"clamp";case w.MIRRORED_REPEAT:return"mirror";case w.REPEAT:return"repeat"}}function x(e){return e**(1/L)*255}function Ce(e,t){return q(x(e[0]),x(e[1]),x(e[2]),t)}function Me(e){return V(x(e[0]),x(e[1]),x(e[2]))}export{Rt as loadGLTFMesh};
