let e=1e-6;function a(){return e}function o(t){e=t}const r=Math.random,u=Math.PI/180,i=180/Math.PI;function c(t){return t*u}function l(t){return t*i}function s(t,n){return Math.abs(t-n)<=e*Math.max(1,Math.abs(t),Math.abs(n))}Object.freeze(Object.defineProperty({__proto__:null,RANDOM:r,equals:s,getEpsilon:a,setEpsilon:o,toDegree:l,toRadian:c},Symbol.toStringTag,{value:"Module"}));export{l as c,a as e,r as o,c as u};