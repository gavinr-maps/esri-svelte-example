import{aC as i}from"./index-e8c6bcc0.js";import{f as a}from"./utils-c9a76eea.js";import{p as e}from"./queryTopFeatures-ab807f85.js";import{S as n}from"./TopFeaturesQuery-1a582382.js";import"./normalizeUtils-f64efc29.js";import"./normalizeUtilsCommon-123fc71f.js";import"./query-0796d492.js";import"./pbfQueryUtils-a8ac8764.js";import"./pbf-2b43d9bb.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-c236a6ea.js";async function F(o,r,m){const p=a(o),t=await e(p,n.from(r),{...m});return{count:t.data.count,extent:i.fromJSON(t.data.extent)}}export{F as executeForTopExtents};
