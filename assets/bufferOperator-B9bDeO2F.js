import{G as y}from"./Accessor-BHnuXKD2.js";import{a8 as l}from"./Point-XGrwlf63.js";import{x as g,f as j,l as S}from"./operatorBuffer-DiRBZm0B.js";import{getSpatialReference as c,toPolygon as p,fromSpatialReference as f,fromGeometry as s}from"./apiConverter-CBpLPeKU.js";function _(o,e,a={}){const{unit:t}=a,r=c(o);return t&&(e=l(e,t,r)),p(j(s(o),f(r),e),r)}function $(o,e,a={}){let{maxDeviation:t=NaN,maxVerticesInFullCircle:r=96,union:u=!1,unit:m}=a;const n=c(o);m&&(e=e.map(i=>l(i,m,n)),t&&(t=l(t,m,n)));const x=o.map(s);return S(x,f(n),e,t,r,u).map(i=>p(i,n)).filter(y)}const b=g(),d=Object.freeze(Object.defineProperty({__proto__:null,execute:_,executeMany:$,supportsCurves:b},Symbol.toStringTag,{value:"Module"}));export{d as l,_ as p};
