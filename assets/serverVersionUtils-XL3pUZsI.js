import{U as s}from"./assets-C43MgM-v.js";async function i(a,e){let n=null;const r=typeof e=="string"?e:e.path;if(!a.has(r)){const t=await s(r.replace(/\/VersionManagementServer/i,"/FeatureServer"),{query:{f:"json"}});n={serverVersion:Number(t.data.currentVersion),featureServerUrl:r.replace(/\/VersionManagementServer/i,"/FeatureServer")},a.set(e,n)}}export{i as r};
