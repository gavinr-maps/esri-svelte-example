import{F as R,a as y,m as f,B as a,b as u,r as l}from"./arcadeUtils-CEAwR0QG.js";import{s as d}from"./TimeOnly-cvONhzoK.js";import{u as p,f as w}from"./SpatialFilter-BEZJ9Px6.js";import{n as o}from"./Point-DB4Hp4hH.js";import{relate as F,crosses as I,touches as A,within as P,overlaps as g,contains as C,intersects as h}from"./geometryEngineAsync-BmiBKUN1.js";import"./geometry-DpwwkAX1.js";import"./subclass-BR3PhgZG.js";import"./Extent-DHjqVB-p.js";import"./Evented-CXIxDjmW.js";import"./Accessor-D6mNnsWy.js";import"./Polyline-D97hl-6E.js";import"./writer-3zufXUNV.js";import"./mathUtils-ClvKsMak.js";import"./jsonMap-DCC6W5ex.js";import"./index-CeCSsEgo.js";import"./assets-C2mb-ea2.js";import"./ImmutableArray-BPVd6ESQ.js";import"./Field-C8SaaeoI.js";import"./enumeration--HlxOQ_N.js";import"./fieldType-CIG5ey7e.js";import"./Promise-CZrWwByK.js";import"./number-CrcpkfNb.js";import"./jsonUtils-Cma_7A64.js";import"./featureConversionUtils-DdoZh_25.js";import"./aaBoundingBox-rJEWaOSN.js";import"./OptimizedFeature-7juV2tZm.js";import"./OptimizedGeometry-vU5jWBvU.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FieldsIndex-IOXc-mnc.js";import"./UnknownTimeZone-D0GlcniK.js";import"./fieldUtils-CNduWQU9.js";import"./intl-Dpfm8vPB.js";import"./hash-CcEbRgUF.js";import"./uuid-fwrPAdZb.js";import"./Portal-liet8xHC.js";import"./WhereClause-B8B42Be_.js";import"./workers-8Q6jrI18.js";import"./Queue-DpHko4Yk.js";import"./reactiveUtils-BFQ0BtrB.js";import"./shared-B3wH2qpO.js";function c(e){return e instanceof o}function s(e,t,i,m){return m(e,t,async(S,n,r)=>{if(r.length<2)throw new u(e,l.WrongNumberOfParameters,t);if((r=R(r))[0]===null&&r[1]===null)return!1;if(a(r[0])){if(r[1]instanceof o)return new w({parentfeatureset:r[0],relation:i,relationGeom:r[1]});if(r[1]===null)return new p({parentfeatureset:r[0]});throw new u(e,l.InvalidParameter,t)}if(c(r[0])){if(c(r[1])){switch(i){case"esriSpatialRelEnvelopeIntersects":return h(d(r[0]),d(r[1]));case"esriSpatialRelIntersects":return h(r[0],r[1]);case"esriSpatialRelContains":return C(r[0],r[1]);case"esriSpatialRelOverlaps":return g(r[0],r[1]);case"esriSpatialRelWithin":return P(r[0],r[1]);case"esriSpatialRelTouches":return A(r[0],r[1]);case"esriSpatialRelCrosses":return I(r[0],r[1])}throw new u(e,l.InvalidParameter,t)}if(a(r[1]))return new w({parentfeatureset:r[1],relation:i,relationGeom:r[0]});if(r[1]===null)return!1;throw new u(e,l.InvalidParameter,t)}if(r[0]===null){if(a(r[1]))return new p({parentfeatureset:r[1]});if(r[1]instanceof o||r[1]===null)return!1}throw new u(e,l.InvalidParameter,t)})}function fr(e){e.mode==="async"&&(e.functions.intersects=function(t,i){return s(t,i,"esriSpatialRelIntersects",e.standardFunctionAsync)},e.functions.envelopeintersects=function(t,i){return s(t,i,"esriSpatialRelEnvelopeIntersects",e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:2,max:2}),e.functions.contains=function(t,i){return s(t,i,"esriSpatialRelContains",e.standardFunctionAsync)},e.functions.overlaps=function(t,i){return s(t,i,"esriSpatialRelOverlaps",e.standardFunctionAsync)},e.functions.within=function(t,i){return s(t,i,"esriSpatialRelWithin",e.standardFunctionAsync)},e.functions.touches=function(t,i){return s(t,i,"esriSpatialRelTouches",e.standardFunctionAsync)},e.functions.crosses=function(t,i){return s(t,i,"esriSpatialRelCrosses",e.standardFunctionAsync)},e.functions.relate=function(t,i){return e.standardFunctionAsync(t,i,async(m,S,n)=>{if(n=R(n),y(n,3,3,t,i),c(n[0])&&c(n[1]))return F(n[0],n[1],f(n[2]));if(n[0]instanceof o&&n[1]===null||n[1]instanceof o&&n[0]===null)return!1;if(a(n[0])&&n[1]===null)return new p({parentfeatureset:n[0]});if(a(n[1])&&n[0]===null)return new p({parentfeatureset:n[1]});if(a(n[0])&&n[1]instanceof o)return n[0].relate(n[1],f(n[2]));if(a(n[1])&&n[0]instanceof o)return n[1].relate(n[0],f(n[2]));if(n[0]===null&&n[1]===null)return!1;throw new u(t,l.InvalidParameter,i)})})}export{fr as registerFunctions};
