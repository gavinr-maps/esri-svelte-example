import{j as f}from"./subclass-BZA_h8Db.js";import{h as a}from"./PooledRBush-D7s4d_Fs.js";import{b as u}from"./MeshLocalVertexSpace-LEHwMUnu.js";import{B as l}from"./vertexSpaceConversion-CPh5QK5U.js";import"./Accessor-BLX9ikPh.js";import"./quickselect-QQC62dOK.js";import"./tslib.es6-B3Jf3DVX.js";import"./Clonable-D3rtuBWg.js";import"./assets-C43MgM-v.js";import"./index-Bh2oEzTI.js";import"./enumeration-Ba5njXdz.js";import"./jsonMap-0cxwUWs2.js";import"./vec3f64-BLpZdpfb.js";import"./mathUtils-C4_ghTv4.js";import"./Point-Cg0-ChZE.js";import"./cast-Bjksrh93.js";import"./writer-DNAwXnhG.js";import"./mat3-BRl2i9Bz.js";import"./common-DQOJ18NT.js";import"./mat3f64-BBpwCtoL.js";import"./mat4-GpOFENPA.js";import"./mat4f64-Dk4dwAN8.js";import"./vec32-Dvg_eL9J.js";import"./spatialReferenceEllipsoidUtils-DBE_OFra.js";import"./computeTranslationToOriginAndRotation-Q27G6TBL.js";import"./projectBuffer-Bs7GwaPY.js";import"./geodesicConstants-DWQLYX7F.js";import"./projectPointToVector-GINIbYMz.js";import"./projection-B971H0Re.js";import"./SimpleObservable-KocWTzVy.js";import"./Extent-Bf3YTe7m.js";import"./Polyline-D9YkgmM_.js";import"./meshVertexSpaceUtils-CXzOFlTI.js";import"./vec3-kbEkneOB.js";import"./BufferView-_QDXRCew.js";import"./vec2-maR1OrZI.js";import"./vec42-YcqnINSP.js";import"./vec4-BpYqBTK4.js";class ot{async createIndex(o,r){var m;const i=new Array;if(!((m=o.vertexAttributes)!=null&&m.position))return new a;const n=d(o),e=r!=null?await r.invoke("createIndexThread",n,{transferList:i}):this.createIndexThread(n).result;return s().fromJSON(e)}createIndexThread(o){const r=s();if(!o)return{result:r.toJSON()};const i=new Float64Array(o.position);return o.components?h(r,i,o.components.map(n=>new Uint32Array(n))):x(r,i)}}function x(t,o){const r=new Array(o.length/9);let i=0;for(let n=0;n<o.length;n+=9)r[i++]=c(o,n,n+3,n+6);return t.load(r),{result:t.toJSON()}}function h(t,o,r){let i=0;for(const m of r)i+=m.length/3;const n=new Array(i);let e=0;for(const m of r)for(let p=0;p<m.length;p+=3)n[e++]=c(o,3*m[p],3*m[p+1],3*m[p+2]);return t.load(n),{result:t.toJSON()}}function d(t){var m;const{vertexAttributes:{position:o},vertexSpace:r,spatialReference:i,transform:n}=t,e=(m=l({vertexAttributes:{position:o},vertexSpace:r,spatialReference:i,transform:n},u.absolute,{allowBufferReuse:!0}))==null?void 0:m.position;return e?!t.components||t.components.some(p=>!p.faces)?{position:e.buffer}:{position:e.buffer,components:t.components.map(p=>p.faces)}:null}function s(){return new a(9,f("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}function c(t,o,r,i){return{minX:Math.min(t[o],t[r],t[i]),maxX:Math.max(t[o],t[r],t[i]),minY:Math.min(t[o+1],t[r+1],t[i+1]),maxY:Math.max(t[o+1],t[r+1],t[i+1]),p0:[t[o],t[o+1],t[o+2]],p1:[t[r],t[r+1],t[r+2]],p2:[t[i],t[i+1],t[i+2]]}}export{ot as default};