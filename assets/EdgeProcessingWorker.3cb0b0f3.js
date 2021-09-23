var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o;import{n as a}from"./deduplicate.405f49bb.js";import{y as c,u as f,i as l,c as u,l as g,p as d,o as p,m,T as h,h as w,a as y,b as v,d as b,A,O as I,x as L,g as N,w as S,E as V,L as E,B as x,F as O,I as j,U as P,j as D,V as W,M as B,S as F,k as U,q as k,v as M,z,C as T,D as C,G as H,H as R}from"./BufferView.0e91c841.js";import{e6 as $,e7 as q,ag as G,cf as _,e8 as J,e9 as K,ea as Q,ah as X,eb as Y,ec as Z,ed as ee,ee as te,ef as ne,eg as oe,eh as re}from"./vendor.d0a39f0f.js";import{A as se}from"./InterleavedLayout.4d734fc2.js";import"./types.738f7bc2.js";function ie(e,t,n){const o=t/3,r=new Uint32Array(n+1),s=new Uint32Array(n+1),i=(e,t)=>{e<t?r[e+1]++:s[t+1]++};for(let w=0;w<o;w++){const t=e[3*w],n=e[3*w+1],o=e[3*w+2];i(t,n),i(n,o),i(o,t)}let a=0,c=0;for(let w=0;w<n;w++){const e=r[w+1],t=s[w+1];r[w+1]=a,s[w+1]=c,a+=e,c+=t}const f=new Uint32Array(6*o),l=r[n],u=(e,t,n)=>{if(e<t){const o=r[e+1]++;f[2*o]=t,f[2*o+1]=n}else{const o=s[t+1]++;f[2*l+2*o]=e,f[2*l+2*o+1]=n}};for(let w=0;w<o;w++){const t=e[3*w],n=e[3*w+1],o=e[3*w+2];u(t,n,w),u(n,o,w),u(o,t,w)}const g=(e,t)=>{const n=2*e,o=t-e;for(let r=1;r<o;r++){const e=f[n+2*r],t=f[n+2*r+1];let o=r-1;for(;o>=0&&f[n+2*o]>e;o--)f[n+2*o+2]=f[n+2*o],f[n+2*o+3]=f[n+2*o+1];f[n+2*o+2]=e,f[n+2*o+3]=t}};for(let w=0;w<n;w++)g(r[w],r[w+1]),g(l+s[w],l+s[w+1]);const d=new Int32Array(3*o),p=(t,n)=>t===e[3*n]?0:t===e[3*n+1]?1:t===e[3*n+2]?2:-1,m=(e,t)=>{const n=p(e,t);d[3*t+n]=-1},h=(e,t,n,o)=>{const r=p(e,t);d[3*t+r]=o;const s=p(n,o);d[3*o+s]=t};for(let w=0;w<n;w++){let e=r[w];const t=r[w+1];let n=s[w];const o=s[w+1];for(;e<t&&n<o;){const t=f[2*e],o=f[2*l+2*n];t===o?(h(w,f[2*e+1],o,f[2*l+2*n+1]),e++,n++):t<o?(m(w,f[2*e+1]),e++):(m(o,f[2*l+2*n+1]),n++)}for(;e<t;)m(w,f[2*e+1]),e++;for(;n<o;)m(f[2*l+2*n],f[2*l+2*n+1]),n++}return d}function ae(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:ce(e.layout)}}function ce(e){const a=new Array;return e.fields.forEach(((e,c)=>{const f=(l=((e,t)=>{for(var n in t||(t={}))r.call(t,n)&&i(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&i(e,n,t[n]);return e})({},e),u={constructor:le(e.constructor)},t(l,n(u)));var l,u;a.push([c,f])})),{stride:e.stride,fields:a,fieldNames:e.fieldNames}}const fe=[c,f,l,u,g,d,p,m,h,w,y,v,b,A,I,L,N,S,V,E,x,O,j,P,D,W,B,F,U,k,M,z,T,C,H,R];function le(e){return`${e.ElementType}_${e.ElementCount}`}const ue=new Map;function ge(e,t=0){const n=e.stride;return e.fieldNames.filter((t=>{const n=e.fields.get(t).optional;return!(n&&n.glPadding)})).map((o=>{const r=e.fields.get(o),s=r.constructor.ElementCount,i=function(e){const t=de[e];if(t)return t;throw new Error("BufferType not supported in WebGL")}(r.constructor.ElementType),a=r.offset,c=!(!r.optional||!r.optional.glNormalized);return{name:o,stride:n,count:s,type:i,offset:a,normalized:c,divisor:t}}))}fe.forEach((e=>ue.set(le(e),e)));const de={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126},pe=se().vec3f("position").u16("componentIndex").u16("u16padding");ge(se().vec2u8("sideness"));const me=se().vec3f("position0").vec3f("position1").u16("componentIndex").u8("variantOffset",{glNormalized:!0}).u8("variantStroke").u8("variantExtension",{glNormalized:!0}).u8("u8padding",{glPadding:!0}).u16("u16padding",{glPadding:!0}),he=me.clone().vec3f("normal"),we=me.clone().vec3f("normalA").vec3f("normalB");class ye{updateSettings(e){this.settings=e,this.edgeHashFunction=e.reducedPrecision?Le:Ie}write(e,t,n){const o=this.edgeHashFunction(n);xe.seed=o;const r=xe.getIntRange(0,255),s=xe.getIntRange(0,this.settings.variants-1),i=xe.getFloat(),a=255*(.5*function(e,t){const n=e<0?-1:1;return Math.abs(e)**t*n}(-(1-Math.min(i/.7,1))+Math.max(0,i-.7)/(1-.7),1.2)+.5);e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1),e.componentIndex.set(t,n.componentIndex),e.variantOffset.set(t,r),e.variantStroke.set(t,s),e.variantExtension.set(t,a)}trim(e,t){return e.slice(0,t)}}const ve=new Float32Array(6),be=new Uint32Array(ve.buffer),Ae=new Uint32Array(1);function Ie(e){const t=ve;t[0]=e.position0[0],t[1]=e.position0[1],t[2]=e.position0[2],t[3]=e.position1[0],t[4]=e.position1[1],t[5]=e.position1[2],Ae[0]=5381;for(let n=0;n<be.length;n++)Ae[0]=31*Ae[0]+be[n];return Ae[0]}function Le(e){const t=ve;t[0]=Ne(e.position0[0]),t[1]=Ne(e.position0[1]),t[2]=Ne(e.position0[2]),t[3]=Ne(e.position1[0]),t[4]=Ne(e.position1[1]),t[5]=Ne(e.position1[2]),Ae[0]=5381;for(let n=0;n<be.length;n++)Ae[0]=31*Ae[0]+be[n];return Ae[0]}function Ne(e){return Math.round(1e4*e)/1e4}class Se{constructor(){this.commonWriter=new ye}updateSettings(e){this.commonWriter.updateSettings(e)}allocate(e){return he.createBuffer(e)}write(e,t,n){this.commonWriter.write(e,t,n),$(Ee,n.faceNormal0,n.faceNormal1),q(Ee,Ee),e.normal.setVec(t,Ee)}trim(e,t){return this.commonWriter.trim(e,t)}}Se.Layout=he,Se.glLayout=ge(he,1);class Ve{constructor(){this.commonWriter=new ye}updateSettings(e){this.commonWriter.updateSettings(e)}allocate(e){return we.createBuffer(e)}write(e,t,n){this.commonWriter.write(e,t,n),e.normalA.setVec(t,n.faceNormal0),e.normalB.setVec(t,n.faceNormal1)}trim(e,t){return this.commonWriter.trim(e,t)}}Ve.Layout=we,Ve.glLayout=ge(we,1);const Ee=G(),xe=new _,Oe=-1;function je(e,t,n,o=Ue){const r=e.vertices.position,s=e.vertices.componentIndex,i=J(o.anglePlanar),a=J(o.angleSignificantEdge),c=Math.cos(a),f=Math.cos(i),l=Be.edge,u=l.position0,g=l.position1,d=l.faceNormal0,p=l.faceNormal1,m=function(e){const t=e.faces.length/3,n=e.vertices.position,o=e.faces,r=Fe.v0,s=Fe.v1,i=Fe.v2,a=new Float32Array(3*t);for(let c=0;c<t;c++){const e=o[3*c+0],t=o[3*c+1],f=o[3*c+2];n.getVec(e,r),n.getVec(t,s),n.getVec(f,i),oe(s,s,r),oe(i,i,r),ee(r,s,i),q(r,r),a[3*c+0]=r[0],a[3*c+1]=r[1],a[3*c+2]=r[2]}return a}(e),h=function(e){const t=e.faces.length/3,n=e.faces,o=e.neighbors;let r=0;for(let a=0;a<t;a++){const e=o[3*a+0],t=o[3*a+1],s=o[3*a+2],i=n[3*a+0],c=n[3*a+1],f=n[3*a+2];r+=e===Oe||i<c?1:0,r+=t===Oe||c<f?1:0,r+=s===Oe||f<i?1:0}const s=new Int32Array(4*r);let i=0;for(let a=0;a<t;a++){const e=o[3*a+0],t=o[3*a+1],r=o[3*a+2],c=n[3*a+0],f=n[3*a+1],l=n[3*a+2];(e===Oe||c<f)&&(s[i++]=c,s[i++]=f,s[i++]=a,s[i++]=e),(t===Oe||f<l)&&(s[i++]=f,s[i++]=l,s[i++]=a,s[i++]=t),(r===Oe||l<c)&&(s[i++]=l,s[i++]=c,s[i++]=a,s[i++]=r)}return s}(e),w=h.length/4,y=t.allocate(w);let v=0;const b=w,A=n.allocate(b);let I=0,L=0,N=0;const S=K(0,w),V=new Float32Array(w);Q(V,((e,t,n)=>{r.getVec(h[4*t+0],u),r.getVec(h[4*t+1],g),n[t]=re(u,g)})),S.sort(((e,t)=>V[t]-V[e]));const E=new Array,x=new Array;for(let P=0;P<w;P++){const e=S[P],o=V[e],a=h[4*e+0],w=h[4*e+1],b=h[4*e+2],O=h[4*e+3],j=O===Oe;if(r.getVec(a,u),r.getVec(w,g),j)X(d,m[3*b+0],m[3*b+1],m[3*b+2]),Y(p,d),l.componentIndex=s.get(a),l.cosAngle=Z(d,p);else{if(X(d,m[3*b+0],m[3*b+1],m[3*b+2]),X(p,m[3*O+0],m[3*O+1],m[3*O+2]),l.componentIndex=s.get(a),l.cosAngle=Z(d,p),De(l,f))continue;l.cosAngle<-.9999&&Y(p,d)}L+=o,N++,j||Pe(l,c)?(t.write(y,v++,l),E.push(o)):We(l,i)&&(n.write(A,I++,l),x.push(o))}const O=new Float32Array(E.reverse()),j=new Float32Array(x.reverse());return{regular:{instancesData:t.trim(y,v),lodInfo:{lengths:O}},silhouette:{instancesData:n.trim(A,I),lodInfo:{lengths:j}},averageEdgeLength:L/N}}function Pe(e,t){return e.cosAngle<t}function De(e,t){return e.cosAngle>t}function We(e,t){const n=te(e.cosAngle),o=Be.fwd,r=Be.ortho;return ne(o,e.position1,e.position0),n*(Z(ee(r,e.faceNormal0,e.faceNormal1),o)>0?-1:1)>t}const Be={edge:{position0:G(),position1:G(),faceNormal0:G(),faceNormal1:G(),componentIndex:0,cosAngle:0},ortho:G(),fwd:G()},Fe={v0:G(),v1:G(),v2:G()},Ue={anglePlanar:4,angleSignificantEdge:35};async function ke(e){const t=(r=e,{data:pe.createView(r.dataBuffer),indices:"Uint32Array"===r.indicesType?new Uint32Array(r.indicesBuffer):"Uint16Array"===r.indicesType?new Uint16Array(r.indicesBuffer):void 0,indicesLength:r.indicesLength,writerSettings:r.writerSettings,skipDeduplicate:r.skipDeduplicate}),n=Me(t),o=[t.data.buffer];var r;return{result:ze(n,o),transferList:o}}function Me(e){const t=function(e,t,n,o){if(t)return{faces:n,facesLength:o,neighbors:ie(n,o,e.count),vertices:e};const r=a(e.buffer,e.stride/4,{originalIndices:n,originalIndicesLength:o}),s=ie(r.indices,o,r.uniqueCount);return{faces:r.indices,facesLength:r.indices.length,neighbors:s,vertices:pe.createView(r.buffer)}}(e.data,e.skipDeduplicate,e.indices,e.indicesLength);return Te.updateSettings(e.writerSettings),Ce.updateSettings(e.writerSettings),je(t,Te,Ce)}function ze(e,t){return t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:ae(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:ae(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}}const Te=new Se,Ce=new Ve;export{Me as work,ke as wrappedWork};
