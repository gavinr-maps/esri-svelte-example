import{b0 as f}from"./index-27db053b.js";import{p as e}from"./queryTopFeatures-aba62324.js";import{d as s}from"./FeatureSet-b143a95b.js";import{S as n}from"./TopFeaturesQuery-c5d00ba7.js";import"./query-633304fb.js";import"./pbfQueryUtils-1b37294c.js";import"./pbf-4aa35e16.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-54772c3a.js";import"./Field-a20a79af.js";import"./fieldType-c94915e3.js";async function O(r,o,t,m){const i=f(r),p={...m},{data:a}=await e(i,n.from(o),t,p);return s.fromJSON(a)}export{O as executeTopFeaturesQuery};
