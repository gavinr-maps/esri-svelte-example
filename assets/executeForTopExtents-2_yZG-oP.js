import{a$ as p,aO as i}from"./index-XUlETPJZ.js";import{d as e}from"./queryTopFeatures-YDrH3U2i.js";import{S as n}from"./TopFeaturesQuery-MpP2S3lQ.js";import"./query-zZyiJ9CO.js";import"./pbfQueryUtils-9R9dOnXI.js";import"./pbf-XJzY62Pa.js";import"./OptimizedGeometry-1RFAES06.js";import"./OptimizedFeatureSet-smVI1ez9.js";import"./queryZScale-JMBNq6Za.js";async function w(o,r,m){const a=p(o),t=await e(a,n.from(r),{...m});return{count:t.data.count,extent:i.fromJSON(t.data.extent)}}export{w as executeForTopExtents};
