import{as as g,G as v}from"./Accessor-BmwT4B0c.js";import{O as M}from"./quat-CP7JhygC.js";import{e as d}from"./quatf64-CCm9z-pX.js";import{Q as y}from"./vec32-Dvg_eL9J.js";import{t as c,n as h}from"./vec3f32-nZdmKIgz.js";import{g as I}from"./Point-Cz2JYYmX.js";import{o as w}from"./projectBuffer-CQnuEMuP.js";import{u as S,c as l,i as $,f as x}from"./PointCloudWorkerUtil-d-sDeJid.js";import{I as F}from"./orientedBoundingBox-B17G_yFO.js";import"./mat3f64-BBpwCtoL.js";import"./vec3f64-BLpZdpfb.js";import"./common-DQOJ18NT.js";import"./vec42-YcqnINSP.js";import"./cast-CsZslgGN.js";import"./index-4eY77cms.js";import"./JSONSupport-DcrLLGjL.js";import"./writer-DKgfqj4X.js";import"./mathUtils-Cfq9PL9W.js";import"./geodesicConstants-RQL9oKdk.js";import"./PointCloudUniqueValueRenderer-DcQF_3qx.js";import"./enumeration-DpvDkLNI.js";import"./RendererLegendOptions-CYAPr8D6.js";import"./Clonable-Z-AWS-16.js";import"./Color-VJEMvW-n.js";import"./colorUtils-Rxh2V3ai.js";import"./ColorStop-BYiAUa8d.js";import"./I3SBinaryReader-DxrJbUZw.js";import"./VertexAttribute-Cq4MnHjR.js";import"./mat3-CR8GKnhD.js";import"./mat4f64-Dk4dwAN8.js";import"./vec4f64-o2zAXfmz.js";import"./spatialReferenceEllipsoidUtils-DBqQpPRa.js";import"./computeTranslationToOriginAndRotation-DYUrDrjE.js";import"./mat4-Fi6iAz29.js";import"./plane-CpXmOyqq.js";import"./vec2f64-Dy6m9Nrb.js";import"./mathUtils-BgCEaV43.js";import"./ViewingMode-Dodu7ZZk.js";import"./Attribute-DGhdp5lO.js";class O{transform(t){const r=this._transform(t),o=[r.points.buffer,r.rgb.buffer];r.pointIdFilterMap!=null&&o.push(r.pointIdFilterMap.buffer);for(const f of r.attributes)"buffer"in f.values&&g(f.values.buffer)&&f.values.buffer!==r.rgb.buffer&&o.push(f.values.buffer);return Promise.resolve({result:r,transferList:o})}_transform(t){const r=S(t.schema,t.geometryBuffer);let o=r.length/3,f=null;const n=new Array,a=l(t.primaryAttributeData,r,o);t.primaryAttributeData!=null&&a&&n.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:a});const u=l(t.modulationAttributeData,r,o);t.modulationAttributeData!=null&&u&&n.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:u});let i=$(t.rendererInfo,a,u,o);if(t.filterInfo&&t.filterInfo.length>0&&t.filterAttributesData!=null){const s=t.filterAttributesData.filter(v).map(e=>{const D=l(e,r,o),b={attributeInfo:e.attributeInfo,values:D};return n.push(b),b});f=new Uint32Array(o),o=x(r,i,f,t.filterInfo,s)}for(const s of t.userAttributesData){const e=l(s,r,o);n.push({attributeInfo:s.attributeInfo,values:e})}3*o<i.length&&(i=new Uint8Array(i.buffer.slice(0,3*o))),G(r,o,t.elevationOffset);const p=z(r,o,F.fromData(t.obbData),I.fromJSON(t.inSR),I.fromJSON(t.outSR));return{obbData:t.obbData,points:p,rgb:i,attributes:n,pointIdFilterMap:f}}}function z(m,t,r,o,f){if(!w(m,o,0,m,f,0,t))throw new Error("Can't reproject");const n=c(r.center),a=h(),u=h(),i=c(r.halfSize);M(A,r.quaternion);const p=new Float32Array(3*t);for(let s=0;s<t;s++){let e=3*s;a[0]=m[e]-n[0],a[1]=m[e+1]-n[1],a[2]=m[e+2]-n[2],y(u,a,A),i[0]=Math.max(i[0],Math.abs(u[0])),i[1]=Math.max(i[1],Math.abs(u[1])),i[2]=Math.max(i[2],Math.abs(u[2])),p[e++]=a[0],p[e++]=a[1],p[e]=a[2]}return r.halfSize=i,p}function G(m,t,r){if(r!==0)for(let o=0;o<t;o++)m[3*o+2]+=r}const A=d();function At(){return new O}export{At as default};
