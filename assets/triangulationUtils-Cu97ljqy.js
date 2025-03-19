import{e as Z}from"./earcut-D9gy186-.js";import{n as g,g as I}from"./Polyline-s-JzsQqo.js";import{t as M,d as H,e as N}from"./aaBoundingBox-Dw3yBk2f.js";import{t as b}from"./Indices-D8XWalpO.js";import{s as S}from"./mathUtils-Cfq9PL9W.js";import{Q as W,$ as X}from"./Point-Cz2JYYmX.js";import{o as Y}from"./vec32-Dvg_eL9J.js";import{O as v,M as F,v as Q}from"./plane-CpXmOyqq.js";import{e as x}from"./deduplicate-Cp1WDW0w.js";function R(t,o,l){const r=$(E,t,o,l)?v(E):[0,0,1];return Math.abs(r[2])>Math.cos(S(80))?g.Z:Math.abs(r[1])>Math.abs(r[0])?g.Y:g.X}function $(t,o,l,r){const e=(i=>!Array.isArray(i[0]))(o)?(i,n)=>o[3*i+n]:(i,n)=>o[i][n],s=r?W(r)/X(r):1;return Q(t,(i,n)=>Y(i,e(n,0)*s,e(n,1)*s,e(n,2)),l)}const E=F();function V(t){const o=k(t.rings,t.hasZ,_.CCW_IS_HOLE,t.spatialReference),l=new Array;let r=0,e=0;for(const n of o.polygons){const h=n.count,c=n.index,y=H(o.position,3*c,3*h),d=n.holeIndices.map(f=>f-c),m=b(Z(y,d,3));l.push({position:y,faces:m}),r+=y.length,e+=m.length}const s=j(l,r,e),i=Array.isArray(s.position)?x(s.position,3,{originalIndices:s.faces}):x(s.position.buffer,6,{originalIndices:s.faces});return s.position=N(new Float64Array(i.buffer)),s.faces=i.indices,s}function j(t,o,l){if(t.length===1)return t[0];const r=M(o),e=new Array(l);let s=0,i=0,n=0;for(const h of t){for(let c=0;c<h.position.length;c++)r[s++]=h.position[c];for(const c of h.faces)e[i++]=c+n;n=s/3}return{position:r,faces:b(e)}}function k(t,o,l,r){const e=t.length,s=new Array(e),i=new Array(e),n=new Array(e);let h=0;for(let u=0;u<e;++u)h+=t[u].length;let c=0,y=0,d=0;const m=M(3*h);let f=0;for(let u=e-1;u>=0;u--){const a=t[u],L=l===_.CCW_IS_HOLE&&q(a,o,r);if(L&&e!==1)s[c++]=a;else{let O=a.length;for(let p=0;p<c;++p)O+=s[p].length;const A={index:f,pathLengths:new Array(c+1),count:O,holeIndices:new Array(c)};A.pathLengths[0]=a.length,a.length>0&&(n[d++]={index:f,count:a.length}),f=L?C(a,a.length-1,-1,m,f,a.length,o):C(a,0,1,m,f,a.length,o);for(let p=0;p<c;++p){const w=s[p];A.holeIndices[p]=f,A.pathLengths[p+1]=w.length,w.length>0&&(n[d++]={index:f,count:w.length}),f=C(w,0,1,m,f,w.length,o)}c=0,A.count>0&&(i[y++]=A)}}for(let u=0;u<c;++u){const a=s[u];a.length>0&&(n[d++]={index:f,count:a.length}),f=C(a,0,1,m,f,a.length,o)}return i.length=y,n.length=d,{position:m,polygons:i,outlines:n}}function C(t,o,l,r,e,s,i){e*=3;for(let n=0;n<s;++n){const h=t[o];r[e++]=h[0],r[e++]=h[1],r[e++]=i&&h[2]?h[2]:0,o+=l}return e/3}function q(t,o,l){if(!o)return!I(t);const r=t.length-1;switch(R(t,r,l)){case g.X:return!I(t,g.Y,g.Z);case g.Y:return!I(t,g.X,g.Z);case g.Z:return!I(t,g.X,g.Y)}}var _;(function(t){t[t.NONE=0]="NONE",t[t.CCW_IS_HOLE=1]="CCW_IS_HOLE"})(_||(_={}));export{k as a,R as c,V as f,_ as p};
