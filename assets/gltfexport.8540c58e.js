import{v as e,cw as t,q as s,ah as i,eg as r,ed as n,e7 as a,r as o,al as h,ag as c,w as f,jg as u,dn as l,ev as d,h7 as p,ex as m,jC as g,jx as w}from"./vendor.d0a39f0f.js";import{N as b,c as y,r as A,e as x,C as E}from"./quat.8d7fb927.js";import{c as T}from"./meshFeatureSet.09a9eadb.js";import{g as R}from"./georeference.07d1c825.js";import"./earcut.9760c2d2.js";import"./deduplicate.405f49bb.js";import"./vec33.7050de41.js";import"./BufferView.0e91c841.js";class B{constructor(e,t){if(!e)throw new Error("GLB requires a JSON gltf chunk");this.length=B.HEADER_SIZE,this.length+=B.CHUNK_HEADER_SIZE;const s=this.textToArrayBuffer(e);if(this.length+=this.alignTo(s.byteLength,4),t&&(this.length+=B.CHUNK_HEADER_SIZE,this.length+=t.byteLength,t.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this.length),this.outView=new DataView(this.buffer),this.writeHeader();const i=this.writeChunk(s,12,1313821514,32);t&&this.writeChunk(t,i,5130562)}writeHeader(){this.outView.setUint32(0,B.MAGIC,!0),this.outView.setUint32(4,B.VERSION,!0),this.outView.setUint32(8,this.length,!0)}writeChunk(e,t,s,i=0){const r=this.alignTo(e.byteLength,4);for(this.outView.setUint32(t,r,!0),this.outView.setUint32(t+=4,s,!0),this.writeArrayBuffer(this.outView.buffer,e,t+=4,0,e.byteLength),t+=e.byteLength;t%4;)i&&this.outView.setUint8(t,i),t++;return t}writeArrayBuffer(e,t,s,i,r){new Uint8Array(e,s,r).set(new Uint8Array(t,i,r),0)}textToArrayBuffer(t){if(e("esri-text-encoder"))return(new TextEncoder).encode(t).buffer;const s=new Uint8Array(t.length);for(let e=0;e<s.length;++e)s[e]=t.charCodeAt(e);return s.buffer}alignTo(e,t){return t*Math.ceil(e/t)}}var C,M,O,S,L,I,N,z;B.HEADER_SIZE=12,B.CHUNK_HEADER_SIZE=8,B.MAGIC=1179937895,B.VERSION=2,(z=C||(C={}))[z.External=0]="External",z[z.DataURI=1]="DataURI",z[z.GLB=2]="GLB",function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(M||(M={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(O||(O={})),function(e){e.SCALAR="SCALAR",e.VEC2="VEC2",e.VEC3="VEC3",e.VEC4="VEC4",e.MAT2="MAT2",e.MAT3="MAT3",e.MAT4="MAT4"}(S||(S={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(L||(L={})),function(e){e.OPAQUE="OPAQUE",e.MASK="MASK",e.BLEND="BLEND"}(I||(I={})),function(e){e[e.NoColor=0]="NoColor",e[e.FaceColor=1]="FaceColor",e[e.VertexColor=2]="VertexColor"}(N||(N={}));class V{constructor(e,t,s,i,r){this.buffer=e,this.componentType=s,this.dataType=i,this.data=[],this.isFinalized=!1,this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,t.bufferViews||(t.bufferViews=[]),this.index=t.bufferViews.length,this.bufferView={buffer:e.index,byteLength:-1,target:r};const n=this.getElementSize();n>=4&&r!==O.ELEMENT_ARRAY_BUFFER&&(this.bufferView.byteStride=n),t.bufferViews.push(this.bufferView),this.numComponentsForDataType=this.calculateNumComponentsForDataType()}push(e){const t=this.data.length;if(this.data.push(e),this.accessorIndex>=0){const s=t%this.numComponentsForDataType,i=this.accessorMin[s];this.accessorMin[s]="number"!=typeof i?e:Math.min(i,e);const r=this.accessorMax[s];this.accessorMax[s]="number"!=typeof r?e:Math.max(r,e)}}get dataSize(){return this.data.length*this.sizeComponentType()}get byteSize(){return e=this.dataSize,(t=4)*Math.ceil(e/t);var e,t}getByteOffset(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}get byteOffset(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}createTypedArray(e,t){switch(this.componentType){case 5120:return new Int8Array(e,t);case 5126:return new Float32Array(e,t);case 5122:return new Int16Array(e,t);case 5121:return new Uint8Array(e,t);case 5125:return new Uint32Array(e,t);case 5123:return new Uint16Array(e,t)}}writeOutToBuffer(e,t){this.createTypedArray(e,t).set(this.data)}writeAsync(e){if(this.asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this.asyncWritePromise=e.then((e=>{const t=new Uint8Array(e);for(let s=0;s<t.length;++s)this.data.push(t[s]);delete this.asyncWritePromise})),this.asyncWritePromise}startAccessor(e){if(this.accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this.accessorIndex=this.data.length,this.accessorAttribute=e;const t=this.numComponentsForDataType;this.accessorMin=new Array(t),this.accessorMax=new Array(t)}endAccessor(){if(this.accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const e=this.getElementSize(),t=this.numComponentsForDataType,s=(this.data.length-this.accessorIndex)/t;if(s%1)throw new Error("An accessor was ended with missing component values");for(let r=0;r<this.accessorMin.length;++r)"number"!=typeof this.accessorMin[r]&&(this.accessorMin[r]=0),"number"!=typeof this.accessorMax[r]&&(this.accessorMax[r]=0);const i={byteOffset:e*(this.accessorIndex/t),componentType:this.componentType,count:s,type:this.dataType,min:this.accessorMin,max:this.accessorMax,name:this.accessorAttribute};switch(this.accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this.componentType){case 5121:case 5123:i.normalized=!0}}return this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,i}get finalized(){return this.finalizedPromise?this.finalizedPromise:this.isFinalized?this.finalizedPromise=Promise.resolve():this.finalizedPromise=new Promise((e=>this.finalizedPromiseResolve=e))}finalize(){const e=this.bufferView;return new Promise((e=>{const s=this.buffer.getViewFinalizePromises(this);this.asyncWritePromise&&s.push(this.asyncWritePromise),e(t(s))})).then((()=>{this.isFinalized=!0,e.byteOffset=this.getByteOffset(),e.byteLength=this.dataSize,this.finalizedPromiseResolve&&this.finalizedPromiseResolve()}))}getElementSize(){return this.sizeComponentType()*this.numComponentsForDataType}sizeComponentType(){switch(this.componentType){case 5120:case 5121:return 1;case 5122:case 5123:return 2;case 5125:case 5126:return 4}}calculateNumComponentsForDataType(){switch(this.dataType){case S.SCALAR:return 1;case S.VEC2:return 2;case S.VEC3:return 3;case S.VEC4:case S.MAT2:return 4;case S.MAT3:return 9;case S.MAT4:return 16}}}class F{constructor(e){this.gltf=e,this.bufferViews=[],this.isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;const t={byteLength:-1};e.buffers.push(t),this.buffer=t}addBufferView(e,t,s){if(this.finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const i=new V(this,this.gltf,e,t,s);return this.bufferViews.push(i),i}getByteOffset(e){let t=0;for(const s of this.bufferViews){if(s===e)return t;t+=s.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(e){const t=[];for(const s of this.bufferViews){if(e&&s===e)return t;t.push(s.finalized)}return t}getArrayBuffer(){if(!this.isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const e=this.getTotalSize(),t=new ArrayBuffer(e);let s=0;for(const i of this.bufferViews)i.writeOutToBuffer(t,s),s+=i.byteSize;return t}finalize(){if(this.finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this.finalizePromise=new Promise((e=>{e(t(this.getViewFinalizePromises()))})).then((()=>{this.isFinalized=!0;const e=this.getArrayBuffer();this.buffer.byteLength=e.byteLength,this.buffer.uri=e})),this.gltf.extras.promises.push(this.finalizePromise),this.finalizePromise}getTotalSize(){let e=0;for(const t of this.bufferViews)e+=t.byteSize;return e}}function _(e,t){s(t.normal)&&(t.normal=new Float32Array(t.position.length));const o=e.faces,{position:h,normal:c}=t,f=o.length/3;for(let s=0;s<f;++s){const e=3*o[3*s+0],t=3*o[3*s+1],a=3*o[3*s+2],f=i(v,h[e+0],h[e+1],h[e+2]),u=i(U,h[t+0],h[t+1],h[t+2]),l=i(P,h[a+0],h[a+1],h[a+2]),d=r(u,u,f),p=r(l,l,f),m=n(d,d,p);c[e+0]+=m[0],c[e+1]+=m[1],c[e+2]+=m[2],c[t+0]+=m[0],c[t+1]+=m[1],c[t+2]+=m[2],c[a+0]+=m[0],c[a+1]+=m[1],c[a+2]+=m[2]}for(let s=0;s<c.length;s+=3)i(D,c[s],c[s+1],c[s+2]),a(D,D),c[s+0]=D[0],c[s+1]=D[1],c[s+2]=D[2]}const v=c(),U=c(),P=c(),D=c();async function G(e){const t=j(e);if(s(t))throw new f("imageToArrayBuffer","Unsupported image type");const i=await async function(e){if(!(e instanceof HTMLImageElement))return"image/png";const t=e.src;if(u(t)){const{mediaType:e}=l(t);return"image/jpeg"===e?e:"image/png"}return/\.png$/i.test(t)?"image/png":/\.(jpg|jpeg)$/i.test(t)?"image/jpeg":"image/png"}(e),r=await new Promise((e=>t.toBlob(e,i)));if(!r)throw new f("imageToArrayBuffer","Failed to encode image");return{data:await r.arrayBuffer(),type:i}}function j(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");return e instanceof HTMLImageElement?s.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&s.putImageData(e,e.width,e.height),t}class k{constructor(e,t,s){this.params={},this.materialMap=new Array,this.imageMap=new Map,this.textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{options:t,binChunkBuffer:null,promises:[]}},s&&(this.params=s),this.addScenes(e)}addScenes(e){this.gltf.scene=e.defaultScene;const t=this.gltf.extras.options.bufferOutputType===C.GLB||this.gltf.extras.options.imageOutputType===M.GLB;t&&(this.gltf.extras.binChunkBuffer=new F(this.gltf)),e.forEachScene((e=>{this.addScene(e)})),t&&this.gltf.extras.binChunkBuffer.finalize()}addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);const t={};e.name&&(t.name=e.name),e.forEachNode((e=>{t.nodes||(t.nodes=[]);const s=this.addNode(e);t.nodes.push(s)})),this.gltf.scenes.push(t)}addNode(e){this.gltf.nodes||(this.gltf.nodes=[]);const t={};e.name&&(t.name=e.name);const s=e.translation;d(s,p)||(t.translation=m(s));const i=e.rotation;b(i,y)||(t.rotation=A(i));const r=e.scale;d(r,g)||(t.scale=m(r)),e.mesh&&e.mesh.vertexAttributes.position?t.mesh=this.addMesh(e.mesh):e.forEachNode((e=>{t.children||(t.children=[]);const s=this.addNode(e);t.children.push(s)}));const n=this.gltf.nodes.length;return this.gltf.nodes.push(t),n}addMesh(e){this.gltf.meshes||(this.gltf.meshes=[]);const t={primitives:[]},s=this.gltf.extras.options.bufferOutputType===C.GLB;let i;i=s?this.gltf.extras.binChunkBuffer:new F(this.gltf),this.params.origin||(this.params.origin=function(e){if(o(e.transform))return e.transform.getOriginPoint(e.spatialReference);const t=e.extent.xmax-e.extent.width/2,s=e.extent.ymax-e.extent.height/2,i=e.extent.zmin;return new h({x:t,y:s,z:i,spatialReference:e.extent.spatialReference})}(e));const r=R(e.vertexAttributes,e.transform,this.params.origin,{geographic:this.params.geographic,unit:"meters"});(function(e,t){if(e.components)for(const s of e.components)s.faces&&"smooth"===s.shading&&_(s,t)})(e,r),this.flipYZAxis(r);const n=i.addBufferView(5126,S.VEC3,O.ARRAY_BUFFER);let a,c,f,u;r.normal&&(a=i.addBufferView(5126,S.VEC3,O.ARRAY_BUFFER)),e.vertexAttributes.uv&&(c=i.addBufferView(5126,S.VEC2,O.ARRAY_BUFFER)),r.tangent&&(f=i.addBufferView(5126,S.VEC4,O.ARRAY_BUFFER)),e.vertexAttributes.color&&(u=i.addBufferView(5121,S.VEC4,O.ARRAY_BUFFER)),n.startAccessor("POSITION"),a&&a.startAccessor("NORMAL"),c&&c.startAccessor("TEXCOORD_0"),f&&f.startAccessor("TANGENT"),u&&u.startAccessor("COLOR_0");const l=r.position.length/3,{position:d,normal:p,tangent:m}=r,{color:g,uv:w}=e.vertexAttributes;for(let h=0;h<l;++h)n.push(d[3*h+0]),n.push(d[3*h+1]),n.push(d[3*h+2]),a&&o(p)&&(a.push(p[3*h+0]),a.push(p[3*h+1]),a.push(p[3*h+2])),c&&o(w)&&(c.push(w[2*h+0]),c.push(w[2*h+1])),f&&o(m)&&(f.push(m[4*h+0]),f.push(m[4*h+1]),f.push(m[4*h+2]),f.push(m[4*h+3])),u&&o(g)&&(u.push(g[4*h+0]),u.push(g[4*h+1]),u.push(g[4*h+2]),u.push(g[4*h+3]));const b=n.endAccessor(),y=this.addAccessor(n.index,b);let A,x,E,T,B;if(a){const e=a.endAccessor();A=this.addAccessor(a.index,e)}if(c){const e=c.endAccessor();x=this.addAccessor(c.index,e)}if(f){const e=f.endAccessor();E=this.addAccessor(f.index,e)}if(u){const e=u.endAccessor();T=this.addAccessor(u.index,e)}e.components&&e.components.length>0&&e.components[0].faces?(B=i.addBufferView(5125,S.SCALAR,O.ELEMENT_ARRAY_BUFFER),this.addMeshVertexIndexed(B,e.components,t,y,A,x,E,T)):this.addMeshVertexNonIndexed(e.components,t,y,A,x,E,T),n.finalize(),a&&a.finalize(),c&&c.finalize(),f&&f.finalize(),B&&B.finalize(),u&&u.finalize(),s||i.finalize();const M=this.gltf.meshes.length;return this.gltf.meshes.push(t),M}flipYZAxis({position:e,normal:t,tangent:s}){this.flipYZBuffer(e,3),this.flipYZBuffer(t,3),this.flipYZBuffer(s,4)}flipYZBuffer(e,t){if(!s(e))for(let s=1,i=2;s<e.length;s+=t,i+=t){const t=e[s],r=e[i];e[s]=r,e[i]=-t}}addMaterial(e){if(null===e)return;const t=this.materialMap.indexOf(e);if(-1!==t)return t;this.gltf.materials||(this.gltf.materials=[]);const s={};switch(e.alphaMode){case"mask":s.alphaMode=I.MASK;break;case"auto":case"blend":s.alphaMode=I.BLEND}.5!==e.alphaCutoff&&(s.alphaCutoff=e.alphaCutoff),e.doubleSided&&(s.doubleSided=e.doubleSided),s.pbrMetallicRoughness={};const i=e=>e**2.1,r=e=>{const t=e.toRgba();return t[0]=i(t[0]/255),t[1]=i(t[1]/255),t[2]=i(t[2]/255),t};if(o(e.color)&&(s.pbrMetallicRoughness.baseColorFactor=r(e.color)),o(e.colorTexture)&&(s.pbrMetallicRoughness.baseColorTexture={index:this.addTexture(e.colorTexture)}),o(e.normalTexture)&&(s.normalTexture={index:this.addTexture(e.normalTexture)}),e instanceof T){if(o(e.emissiveTexture)&&(s.emissiveTexture={index:this.addTexture(e.emissiveTexture)}),o(e.emissiveColor)){const t=r(e.emissiveColor);s.emissiveFactor=[t[0],t[1],t[2]]}o(e.occlusionTexture)&&(s.occlusionTexture={index:this.addTexture(e.occlusionTexture)}),o(e.metallicRoughnessTexture)&&(s.pbrMetallicRoughness.metallicRoughnessTexture={index:this.addTexture(e.metallicRoughnessTexture)}),s.pbrMetallicRoughness.metallicFactor=e.metallic,s.pbrMetallicRoughness.roughnessFactor=e.roughness}else s.pbrMetallicRoughness.metallicFactor=1,s.pbrMetallicRoughness.roughnessFactor=1;const n=this.gltf.materials.length;return this.gltf.materials.push(s),this.materialMap.push(e),n}addTexture(e){return this.gltf.textures||(this.gltf.textures=[]),w(this.textureMap,e,(()=>{const t={sampler:this.addSampler(e),source:this.addImage(e)},s=this.gltf.textures.length;return this.gltf.textures.push(t),s}))}addImage(e){const t=this.imageMap.get(e);if(null!=t)return t;this.gltf.images||(this.gltf.images=[]);const s={};if(e.url)s.uri=e.url;else{s.extras=e.data;for(let t=0;t<this.gltf.images.length;++t)if(e.data===this.gltf.images[t].extras)return t;switch(this.gltf.extras.options.imageOutputType){case M.GLB:{const t=this.gltf.extras.binChunkBuffer.addBufferView(5121,S.SCALAR),i=G(e.data).then((({data:e,type:t})=>(s.mimeType=t,e)));t.writeAsync(i).then((()=>{t.finalize()})),s.bufferView=t.index;break}case M.DataURI:s.uri=function(e){const t=j(e);return o(t)?t.toDataURL():""}(e.data);break;default:this.gltf.extras.promises.push(G(e.data).then((({data:e,type:t})=>{s.uri=e,s.mimeType=t})))}}const i=this.gltf.images.length;return this.gltf.images.push(s),this.imageMap.set(e,i),i}addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let t=10497,s=10497;if("string"==typeof e.wrap)switch(e.wrap){case"clamp":t=33071,s=33071;break;case"mirror":t=33648,s=33648}else{switch(e.wrap.vertical){case"clamp":s=33071;break;case"mirror":s=33648}switch(e.wrap.horizontal){case"clamp":t=33071;break;case"mirror":t=33648}}const i={wrapS:t,wrapT:s};for(let n=0;n<this.gltf.samplers.length;++n)if(JSON.stringify(i)===JSON.stringify(this.gltf.samplers[n]))return n;const r=this.gltf.samplers.length;return this.gltf.samplers.push(i),r}addAccessor(e,t){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(s.normalized=!0);const i=this.gltf.accessors.length;return this.gltf.accessors.push(s),i}addMeshVertexIndexed(e,t,s,i,r,n,a,o){for(const h of t){e.startAccessor("INDICES");for(let s=0;s<h.faces.length;++s)e.push(h.faces[s]);const t=e.endAccessor(),c={attributes:{POSITION:i},indices:this.addAccessor(e.index,t),material:this.addMaterial(h.material)};r&&"flat"!==h.shading&&(c.attributes.NORMAL=r),n&&(c.attributes.TEXCOORD_0=n),a&&"flat"!==h.shading&&(c.attributes.TANGENT=a),o&&(c.attributes.COLOR_0=o),s.primitives.push(c)}}addMeshVertexNonIndexed(e,t,s,i,r,n,a){const o={attributes:{POSITION:s}};i&&(o.attributes.NORMAL=i),r&&(o.attributes.TEXCOORD_0=r),n&&(o.attributes.TANGENT=n),a&&(o.attributes.COLOR_0=a),e&&(o.material=this.addMaterial(e[0].material)),t.primitives.push(o)}}class Y{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.indexOf(e)>=0)throw new Error("Scene already added");this._scenes.push(e)}removeScene(e){const t=this._scenes.indexOf(e);t>=0&&this._scenes.splice(t,1)}forEachScene(e){this._scenes.forEach(e)}}class H{constructor(){this.name="",this.nodes=[]}addNode(e){if(this.nodes.indexOf(e)>=0)throw new Error("Node already added");this.nodes.push(e)}forEachNode(e){this.nodes.forEach(e)}}class Z{constructor(e){this.mesh=e,this.name="",this.translation=c(),this.rotation=x(),this.scale=m(g),this.nodes=[]}addNode(e){if(this.nodes.indexOf(e)>=0)throw new Error("Node already added");this.nodes.push(e)}forEachNode(e){this.nodes.forEach(e)}set rotationAngles(e){E(this.rotation,e[0],e[1],e[2])}}const W="model.glb";function K(e,s,i){const r=new k(e,s=s||{},i);let n=r.params;n?n.origin||(n.origin=new h({x:-1,y:-1,z:-1})):n={origin:new h({x:-1,y:-1,z:-1})};const a=n.origin,o=r.gltf,c=o.extras.promises;let f=1,u=1,l=null;return t(c).then((()=>{const e={origin:a};delete o.extras;const t="number"==typeof s.jsonSpacing?s.jsonSpacing:4,i=JSON.stringify(o,((t,i)=>{if("extras"!==t){if(i instanceof ArrayBuffer){if(function(e){if(e.byteLength<8)return!1;const t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}(i))switch(s.imageOutputType){case M.DataURI:case M.GLB:break;case M.External:default:{const t=`img${u}.png`;return u++,e[t]=i,t}}switch(s.bufferOutputType){case C.DataURI:return function(e){const t=[],s=new Uint8Array(e);for(let i=0;i<s.length;i++)t.push(String.fromCharCode(s[i]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}(i);case C.GLB:if(l)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(l=i);case C.External:default:{const t=`data${f}.bin`;return f++,e[t]=i,t}}}return i}}),t);return s.bufferOutputType===C.GLB||s.imageOutputType===M.GLB?e[W]=new B(i,l).buffer:e["model.gltf"]=i,e}))}class X{constructor(e,t){this.file={type:"model/gltf-binary",data:e},this.origin=t}buffer(){return Promise.resolve(this.file)}download(e){return new Promise((()=>{const t=new Blob([this.file.data],{type:this.file.type});let s=e;if(s||(s="model.glb"),"glb"!==s.split(".").pop()&&(s+=".glb"),window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(t,s);else{const e=document.createElement("a"),i=URL.createObjectURL(t);e.href=i,e.download=s,document.body.appendChild(e),e.click(),setTimeout((function(){document.body.removeChild(e),window.URL.revokeObjectURL(i)}),0)}}))}}function $(e,t){const s=new Y,i=new H;s.addScene(i);const r=new Z(e);return i.addNode(r),(n=s,a=t,K(n,{bufferOutputType:C.GLB,imageOutputType:M.GLB,jsonSpacing:0},a)).then((e=>new X(e[W],e.origin)));var n,a}export{$ as toBinaryGLTF};
