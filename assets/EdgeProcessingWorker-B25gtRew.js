import{u as o}from"./workerHelper-B8H8hdjW.js";import{EdgeInputBufferLayout as u}from"./bufferLayouts-C7weggCO.js";import{f as l,u as c,p,d,m as f}from"./edgeProcessing-BCtcmmbP.js";import"./InterleavedLayout-Dvj-Snan.js";import"./BufferView-_QDXRCew.js";import"./vec2-maR1OrZI.js";import"./common-DQOJ18NT.js";import"./vec32-Dvg_eL9J.js";import"./vec3f64-BLpZdpfb.js";import"./vec42-YcqnINSP.js";import"./types-D0PSWh4d.js";import"./vec2f64-Dy6m9Nrb.js";import"./vec4f64-o2zAXfmz.js";import"./glUtil-D0YUa0ow.js";import"./enums-D9v74xTE.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./VertexAttribute-Cq4MnHjR.js";import"./deduplicate-8uOXlcvp.js";import"./mathUtils-DV9iOXpW.js";import"./Indices-Db9lERgy.js";import"./Accessor-BHnuXKD2.js";import"./Normals-OOhKYumi.js";class J{async extract(t){const e=a(t),r=l(e),s=[e.data.buffer];return{result:m(r,s),transferList:s}}async extractComponentsEdgeLocations(t){const e=a(t),r=c(e.data,e.skipDeduplicate,e.indices,e.indicesLength),s=p(r,y),n=[];return{result:o(s.regular.instancesData,n),transferList:n}}async extractEdgeLocations(t){const e=a(t),r=c(e.data,e.skipDeduplicate,e.indices,e.indicesLength),s=p(r,L),n=[];return{result:o(s.regular.instancesData,n),transferList:n}}}function a(i){return{data:u.createView(i.dataBuffer),indices:i.indicesType==="Uint32Array"?new Uint32Array(i.indices):i.indicesType==="Uint16Array"?new Uint16Array(i.indices):i.indices,indicesLength:i.indicesLength,writerSettings:i.writerSettings,skipDeduplicate:i.skipDeduplicate}}function m(i,t){return t.push(i.regular.lodInfo.lengths.buffer),t.push(i.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:o(i.regular.instancesData,t),lodInfo:{lengths:i.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:o(i.silhouette.instancesData,t),lodInfo:{lengths:i.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:i.averageEdgeLength}}class g{allocate(t){return d.createBuffer(t)}trim(t,e){return t.slice(0,e)}write(t,e,r){t.position0.setVec(e,r.position0),t.position1.setVec(e,r.position1)}}class h{allocate(t){return f.createBuffer(t)}trim(t,e){return t.slice(0,e)}write(t,e,r){t.position0.setVec(e,r.position0),t.position1.setVec(e,r.position1),t.componentIndex.set(e,r.componentIndex)}}const L=new g,y=new h;export{J as default};
