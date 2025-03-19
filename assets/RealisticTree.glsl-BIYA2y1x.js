import{bm as f}from"./Accessor-BHnuXKD2.js";import{y as _,i as O}from"./memoryEstimations-5gFNwkKK.js";import{R as v}from"./Intersector-DqUGp7Vs.js";import{i as g,e as y}from"./intersectorUtils-l6zkk4nF.js";import{e as x}from"./VertexAttribute-Cq4MnHjR.js";import{s as G}from"./Intersector-DPK4WnQE.js";import"./glsl-BH37Aalp.js";import"./vec2-maR1OrZI.js";import"./vec2f64-Dy6m9Nrb.js";import"./BindType-BBwFZqyN.js";import"./ShaderBuilder-DV1s2efh.js";import{i as L,m as T,v as M,J as R,_ as E}from"./DefaultMaterial-B5sYRDQR.js";import"./vec42-YcqnINSP.js";import"./vec4f64-o2zAXfmz.js";import"./Matrix3PassUniform-Bhi2fM3C.js";import"./mat3f64-BBpwCtoL.js";import"./mat4f64-Dk4dwAN8.js";import"./vec3f64-BLpZdpfb.js";import"./FloatArray-BCfeX8wo.js";import"./mat3-CR8GKnhD.js";import"./vec32-Dvg_eL9J.js";import"./mat4-Fi6iAz29.js";import"./NormalAttribute.glsl-BPQl43kJ.js";import"./mathUtils-DV9iOXpW.js";import"./boundedPlane-Dyz2ub5d.js";import"./sphere-DQxj5tsv.js";import"./ViewingMode-Dodu7ZZk.js";import"./Material-Ba8x5bbY.js";import"./basicInterfaces-CZwQPxTp.js";import"./SceneLighting-fZH2UQ_L.js";class j{constructor(e,r,s,t){this.material=e,this.bufferWriter=e.createBufferWriter(),this.vertexBufferLayout=this.bufferWriter.vertexBufferLayout,this.buffer=r,this.elementCount=s,this.boundingInfo=t}get numTriangles(){return this.elementCount/3}get numVertices(){return this.elementCount}computeUsedMemory(){return this.buffer.byteLength+_}getRenderGeometry(){return this}intersect(e,r,s,t,i,o,u,m){const c=this.bufferWriter,a=this.buffer;c.intersect(a,e,s,t,(l,p,d,h,S)=>b(l,p,d,S,e,r,o,u,i,m))}}class ue{constructor(e){this.engineGeometry=e}get material(){return this.engineGeometry.material}get numVertices(){return this.engineGeometry.attributes.get(x.POSITION).indices.length}get numTriangles(){return this.engineGeometry.indexCount/3}get boundingInfo(){return this.engineGeometry.boundingInfo}computeUsedMemory(){return Array.from(this.engineGeometry.attributes.values()).reduce((e,r)=>e+O(r.data,r.indices),0)}getRenderGeometry(){const e=this.material,r=this.engineGeometry,s=r.attributes,t=r.boundingInfo,i=e.createBufferWriter(),o=i.vertexBufferLayout,u=i.elementCount(s),m=o.createBuffer(u);return i.write(null,null,s,null,m,0),new j(e,m.buffer,u,t)}intersect(e,r,s,t,i,o,u,m){const c=this.engineGeometry;this.material.intersect(c,e.transform.transform,e,s,t,(a,l,p,d,h)=>b(a,l,p,h,e,r,o,u,i,m))}}function b(n,e,r,s,t,i,o,u,m,c){if(n<0||i&&!i(t.rayBegin,t.rayEnd,n))return;const a=new G(o.layerUid,o.graphicUid(m),r,u,c);if((t.results.min.drapedLayerOrder==null||s>=t.results.min.drapedLayerOrder)&&(t.results.min.dist==null||n<t.results.min.dist)&&t.results.min.set(g.LOD,a,n,e,t.transform.transform,s),t.options.store!==y.MIN&&(t.results.max.drapedLayerOrder==null||s>=t.results.max.drapedLayerOrder)&&(t.results.max.dist==null||n>t.results.max.dist)&&t.results.max.set(g.LOD,a,n,e,t.transform.transform,s),t.options.store===y.ALL){const l=v(t.results.min.ray);l.set(g.LOD,a,n,e,t.transform.transform,s),t.results.all.push(l)}}class me{constructor(e,r=null){this.geometry=e,this.textures=r}get material(){return this.geometry.material}get numTriangles(){return this.geometry.numTriangles}}class ae{constructor(e,r,s){this.components=e,this.minScreenSpaceRadius=r,this.pivotOffset=s;const t=f(this.components.map(i=>i.geometry));this.numVertices=t.reduce((i,o)=>i+o.numVertices,0)}}class le{constructor(e){this.levels=e,this.levels.sort((r,s)=>r.minScreenSpaceRadius===s.minScreenSpaceRadius?r.numVertices-s.numVertices:r.minScreenSpaceRadius-s.minScreenSpaceRadius)}getMaterials(){const e=[];return this.levels.forEach(r=>r.components.forEach(s=>e.push(s.geometry.material))),f(e)}getTextures(){const e=new Array;return this.levels.forEach(r=>r.components.forEach(s=>{s.textures!=null&&e.push(...s.textures)})),f(e)}getGeometries(){const e=new Array;return this.levels.forEach(r=>r.components.forEach(s=>{e.push(s.geometry)})),f(e)}getEngineGeometries(){return this.getGeometries().map(e=>e.engineGeometry).filter(e=>e!=null)}computeUsedMemory(){const e=this.getGeometries(),r=this.getTextures(),s=e.reduce((t,i)=>t+i.computeUsedMemory(),0);return r.reduce((t,i)=>t+i.memoryEstimate,0)+s}}const ce=Object.freeze(Object.defineProperty({__proto__:null,build:L},Symbol.toStringTag,{value:"Module"})),fe=Object.freeze(Object.defineProperty({__proto__:null,build:T,getRadius:M},Symbol.toStringTag,{value:"Module"})),pe=Object.freeze(Object.defineProperty({__proto__:null,build:R},Symbol.toStringTag,{value:"Module"})),ge=Object.freeze(Object.defineProperty({__proto__:null,build:E},Symbol.toStringTag,{value:"Module"}));export{pe as D,ge as R,ce as S,ue as a,fe as b,ae as f,le as h,me as l,j as m};
