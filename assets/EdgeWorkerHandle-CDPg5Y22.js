import{E as r,H as o}from"./subclass-BZA_h8Db.js";import{h as c}from"./WorkerHandle-T1sH-Myb.js";import{t as s}from"./workerHelper-DDJ6ziyx.js";import{f as d}from"./edgeProcessing-CaTaoQ4d.js";class p extends c{constructor(t){super("EdgeProcessingWorker","extract",{extract:e=>[e.dataBuffer],extractComponentsEdgeLocations:e=>[e.dataBuffer],extractEdgeLocations:e=>[e.dataBuffer]},t)}async process(t,e,a){return a?d(t):g(await this.invoke(new i(t),e))}async extractEdgeLocations(t,e){const a=await this.invokeMethod("extractEdgeLocations",new i(t),e);return s(a)}async extractComponentsEdgeLocations(t,e){const a=await this.invokeMethod("extractComponentsEdgeLocations",new i(t),e);return s(a)}}function g(n){return{regular:{instancesData:s(n.regular.instancesData),lodInfo:{lengths:new Float32Array(n.regular.lodInfo.lengths)}},silhouette:{instancesData:s(n.silhouette.instancesData),lodInfo:{lengths:new Float32Array(n.silhouette.lodInfo.lengths)}},averageEdgeLength:n.averageEdgeLength}}class i{constructor(t){this.dataBuffer=t.data.buffer,this.writerSettings=t.writerSettings,this.skipDeduplicate=t.skipDeduplicate,this.indices=r(t.indices)?t.indices:t.indices.buffer,this.indicesType=r(t.indices)?"Array":o(t.indices)?"Uint32Array":"Uint16Array",this.indicesLength=t.indicesLength}}export{p as a};