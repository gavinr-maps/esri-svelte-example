import{t as u,e as l}from"./executionError-c92d3b85.js";import{l as h,Q as F,c as p,V as s,a4 as w}from"./arcadeUtils-d76635e6.js";import{u as c,f as R}from"./SpatialFilter-57ec3c7e.js";import{dk as o}from"./index-e8c6bcc0.js";import{R as I,m as A,S as P,x as g,O as m,p as C,h as S}from"./geometryEngineAsync-186d5836.js";import"./arcadeTimeUtils-414ec519.js";import"./FieldsIndex-888b8bd2.js";import"./number-0a2c8766.js";import"./Field-fadcb771.js";import"./fieldType-a79b2e2e.js";import"./featureConversionUtils-096a49d9.js";import"./OptimizedGeometry-33b2eb0d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./WhereClause-0a306758.js";function f(r){return r instanceof o}function a(r,t,i,d){return d(r,t,async(y,e,n)=>{if(n.length<2)throw new u(r,l.WrongNumberOfParameters,t);if((n=h(n))[0]===null&&n[1]===null)return!1;if(s(n[0])){if(n[1]instanceof o)return new R({parentfeatureset:n[0],relation:i,relationGeom:n[1]});if(n[1]===null)return new c({parentfeatureset:n[0]});throw new u(r,l.InvalidParameter,t)}if(f(n[0])){if(f(n[1])){switch(i){case"esriSpatialRelEnvelopeIntersects":return S(w(n[0]),w(n[1]));case"esriSpatialRelIntersects":return S(n[0],n[1]);case"esriSpatialRelContains":return C(n[0],n[1]);case"esriSpatialRelOverlaps":return m(n[0],n[1]);case"esriSpatialRelWithin":return g(n[0],n[1]);case"esriSpatialRelTouches":return P(n[0],n[1]);case"esriSpatialRelCrosses":return A(n[0],n[1])}throw new u(r,l.InvalidParameter,t)}if(s(n[1]))return new R({parentfeatureset:n[1],relation:i,relationGeom:n[0]});if(n[1]===null)return!1;throw new u(r,l.InvalidParameter,t)}if(n[0]!==null)throw new u(r,l.InvalidParameter,t);return s(n[1])?new c({parentfeatureset:n[1]}):!(n[1]instanceof o||n[1]===null)&&void 0})}function B(r){r.mode==="async"&&(r.functions.intersects=function(t,i){return a(t,i,"esriSpatialRelIntersects",r.standardFunctionAsync)},r.functions.envelopeintersects=function(t,i){return a(t,i,"esriSpatialRelEnvelopeIntersects",r.standardFunctionAsync)},r.signatures.push({name:"envelopeintersects",min:2,max:2}),r.functions.contains=function(t,i){return a(t,i,"esriSpatialRelContains",r.standardFunctionAsync)},r.functions.overlaps=function(t,i){return a(t,i,"esriSpatialRelOverlaps",r.standardFunctionAsync)},r.functions.within=function(t,i){return a(t,i,"esriSpatialRelWithin",r.standardFunctionAsync)},r.functions.touches=function(t,i){return a(t,i,"esriSpatialRelTouches",r.standardFunctionAsync)},r.functions.crosses=function(t,i){return a(t,i,"esriSpatialRelCrosses",r.standardFunctionAsync)},r.functions.relate=function(t,i){return r.standardFunctionAsync(t,i,(d,y,e)=>{if(e=h(e),F(e,3,3,t,i),f(e[0])&&f(e[1]))return I(e[0],e[1],p(e[2]));if(e[0]instanceof o&&e[1]===null||e[1]instanceof o&&e[0]===null)return!1;if(s(e[0])&&e[1]===null)return new c({parentfeatureset:e[0]});if(s(e[1])&&e[0]===null)return new c({parentfeatureset:e[1]});if(s(e[0])&&e[1]instanceof o)return e[0].relate(e[1],p(e[2]));if(s(e[1])&&e[0]instanceof o)return e[1].relate(e[0],p(e[2]));if(e[0]===null&&e[1]===null)return!1;throw new u(t,l.InvalidParameter,i)})})}export{B as registerFunctions};
