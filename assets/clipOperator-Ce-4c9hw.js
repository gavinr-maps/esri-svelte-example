import"./Transformation2D-CV3xaSnP.js";import{I as x}from"./ProjectionTransformation-BlFTV7sx.js";import"./Extent-g5W9hy0j.js";import"./Polyline-s-JzsQqo.js";import"./Point-Cz2JYYmX.js";import"./jsonConverter-CHvsvxL-.js";import{s as _}from"./SimpleGeometryCursor-B92kdZ15.js";import{fromGeometry as u,getSpatialReference as c,fromExtent as p,fromSpatialReference as s,toGeometry as a}from"./apiConverter-THGFVp57.js";const n=new x;function v(e,r,t){return n.execute(e,r,t,null)}function b(e,r,t){const o=n.executeMany(new _(e),r,t,null);return Array.from(o)}function M(){return n.supportsCurves()}function m(e,r){const t=c(e),o=p(r).asEnvelope2D();return a(v(u(e),o,s(t)),t)}function i(e,r){const t=e.map(u),o=c(e),f=p(r).asEnvelope2D();return b(t,f,s(o)).map(y=>a(y,o))}const l=M(),z=Object.freeze(Object.defineProperty({__proto__:null,execute:m,executeMany:i,supportsCurves:l},Symbol.toStringTag,{value:"Module"})),D=Object.freeze(Object.defineProperty({__proto__:null,execute:m,executeMany:i,supportsCurves:l},Symbol.toStringTag,{value:"Module"}));export{D as c,z as i};
