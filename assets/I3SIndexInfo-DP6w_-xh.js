import{P as u}from"./cast-BA_-jlhc.js";import{s as y}from"./Accessor-BHnuXKD2.js";async function x(n,o,e,t,a,s,d){let i=null;if(e!=null){const r=`${n}/nodepages/`,c=r+Math.floor(e.rootIndex/e.nodesPerPage);try{return{type:"page",rootPage:(await u(c,{query:{f:"json",...t,token:a},responseType:"json",signal:d})).data,rootIndex:e.rootIndex,pageSize:e.nodesPerPage,lodMetric:e.lodSelectionMetricType,urlPrefix:r}}catch(g){s!=null&&s.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",c,g),i=g}}if(!o)return null;const f=o==null?void 0:o.split("/").pop(),l=`${n}/nodes/`,p=l+f;try{return{type:"node",rootNode:(await u(p,{query:{f:"json",...t,token:a},responseType:"json",signal:d})).data,urlPrefix:l}}catch(r){throw new y("sceneservice:root-node-missing","Root node missing.",{pageError:i,nodeError:r,url:p})}}export{x as r};
