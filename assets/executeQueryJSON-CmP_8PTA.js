import{f as m}from"./utils-D61i9O7E.js";import{c}from"./query-DbJf0nTj.js";import{d as e}from"./FeatureSet-DyOnd9Rj.js";import{b as s}from"./Query-Cx4awVKu.js";async function S(r,o,t){const a=await p(r,o,t);return e.fromJSON(a)}async function p(r,o,t){const a=m(r),f={...t},n=s.from(o),{data:i}=await c(a,n,n.sourceSpatialReference,f);return i}export{p as a,S as s};
