import{s as i}from"./sphere-C77djCO6.js";import{c as t,r as v,_ as w}from"./vec32-Dvg_eL9J.js";import{t as m,n as o}from"./vec3f64-BLpZdpfb.js";import{v as M}from"./lineSegment-D7sKPPYf.js";import"./plane-IENfwZlB.js";function b(r){return r?{p0:m(r.p0),p1:m(r.p1),p2:m(r.p2)}:{p0:o(),p1:o(),p2:o()}}function _(r,p,n){const f=p[0]-r[0],a=p[1]-r[1],u=n[0]-r[0],e=n[1]-r[1];return .5*Math.abs(f*e-a*u)}function $(r,p,n){return t(s,p,r),t(c,n,r),.5*v(w(s,s,c))}new i(M);new i(()=>b());const s=o(),c=o();export{$ as S,_ as v};
