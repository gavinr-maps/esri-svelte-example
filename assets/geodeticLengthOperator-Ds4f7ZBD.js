const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./OperatorGeodeticLength-hPwNuRM6.js","./Accessor-BHnuXKD2.js","./Transformation2D-BSBl8u-h.js","./OperatorShapePreservingLength-9ovB8spP.js","./ProjectionTransformation-DzMxxvj3.js","./SimpleGeometryCursor-B92kdZ15.js","./apiConverter-CBpLPeKU.js","./Extent-CBBGeHb-.js","./Point-XGrwlf63.js","./cast-BA_-jlhc.js","./index-tefRSezt.js","./index-Cx51aysm.css","./JSONSupport-CGdeqxpk.js","./writer-B2bQV2uU.js","./Polyline-BmuD2-ZN.js","./mathUtils-DV9iOXpW.js","./jsonConverter-BddGRRgO.js"])))=>i.map(i=>d[i]);
import{_ as g,a6 as v,r as O,x as P}from"./Point-XGrwlf63.js";import{_ as i}from"./index-tefRSezt.js";import{e as y}from"./geodeticCurveType-CirnHLSB.js";let n;function s(){return!!n&&O()}async function L(){if(!s()){const[e,r]=await Promise.all([i(()=>import("./OperatorGeodeticLength-hPwNuRM6.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),i(()=>import("./ProjectionTransformation-DzMxxvj3.js").then(t=>t.aW),__vite__mapDeps([4,2,5,1]),import.meta.url).then(t=>t.aG).then(({injectPe:t})=>t),g()]);n=new e.OperatorGeodeticLength,r(v)}}function b(e,r,t){return n.execute(e,r,t,null)}function E(){return n.supportsCurves()}let u,_,p,a;function c(){return!!u&&s()}async function m(){if(!c()){const[e]=await Promise.all([i(()=>import("./apiConverter-CBpLPeKU.js"),__vite__mapDeps([6,2,4,5,1,7,8,9,10,11,12,13,14,15,16]),import.meta.url),L()]);u=e.fromGeometry,_=e.fromSpatialReference,p=e.getSpatialReference,a=E()}}function f(e,r={}){const{curveType:t="geodesic",unit:l}=r,d=p(e);let o=b(u(e),_(d),y[t]);return o&&l&&(o=P(o,"meters",l)),o}const j=Object.freeze(Object.defineProperty({__proto__:null,execute:f,isLoaded:c,load:m,get supportsCurves(){return a}},Symbol.toStringTag,{value:"Module"})),x=Object.freeze(Object.defineProperty({__proto__:null,execute:f,isLoaded:c,load:m,get supportsCurves(){return a}},Symbol.toStringTag,{value:"Module"}));export{j as f,x as g,m};
