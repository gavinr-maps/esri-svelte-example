import{u as a}from"./ILyr3DWasmPerSceneView-QwgNPJGT.js";import{e as c}from"./Lyr3DModule-KUjzK0-R.js";import"./index-tefRSezt.js";import"./cast-BA_-jlhc.js";import"./Accessor-BHnuXKD2.js";import"./JSONSupport-CGdeqxpk.js";let i,e;async function w(r){if(await f(),r.inputs.length<1)return{result:{status:a.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[]},transferList:[]};const n={ptrs:[],sizes:[]};for(const s of r.inputs){const p=e._malloc(s.byteLength);new Uint8Array(e.HEAPU8.buffer,p,s.byteLength).set(new Uint8Array(s)),n.ptrs.push(p),n.sizes.push(s.byteLength)}const t=e.process(r.jobDescJson,n,r.isMissingResourceCase),u=t.status===a.Succeeded&&t.data,l=t.status===a.MissingInputs&&t.missingInputUrls.length>0;if(u){const s=t.data.slice();t.data=s}else l&&(t.jobDescJson=t.jobDescJson.slice(),t.originalInputs=r.inputs.slice());for(let s=0;s<n.ptrs.length;++s)e._free(n.ptrs[s]);const o=[];if(u)o.push(t.data.buffer);else if(l)for(const s of r.inputs)o.push(s);return{result:t,transferList:o}}function _(){e&&(e.uninitialize_lyr3d_worker_wasm(),e=null)}function f(){return e?Promise.resolve():(i||(i=c().then(r=>{e=r,e.initialize_lyr3d_worker_wasm(),i=null})),i)}export{_ as destroyWasm,f as initialize,w as process};
