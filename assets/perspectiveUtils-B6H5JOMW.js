import{e as s}from"./Evented-CXIxDjmW.js";import{S as w}from"./Accessor-D6mNnsWy.js";import{y as l,b as E}from"./subclass-BR3PhgZG.js";import{o as a,j as J}from"./Polyline-D97hl-6E.js";import{V as M}from"./projection-A9yUaaTs.js";import{p as N}from"./normalizeUtilsSync-BELDWNln.js";import{u as y,i as g,c as h,r as d}from"./mat3-DRqs2t5W.js";import{e as i}from"./mat3f64-BBpwCtoL.js";import{o as m}from"./vec2-B_ymkwGp.js";import{d as x,S as z,n as O}from"./mathUtils-ClvKsMak.js";let t=class extends w{constructor(o){super(o)}get bounds(){const o=this.coords;return(o==null?void 0:o.extent)==null?null:a(o.extent)}get coords(){var r;const o=(r=this.element.georeference)==null?void 0:r.coords;return M(o,this.spatialReference).geometry}get normalizedCoords(){return J.fromJSON(N(this.coords))}get normalizedBounds(){const o=this.normalizedCoords!=null?this.normalizedCoords.extent:null;return o!=null?a(o):null}};s([l()],t.prototype,"spatialReference",void 0),s([l()],t.prototype,"element",void 0),s([l()],t.prototype,"bounds",null),s([l()],t.prototype,"coords",null),s([l()],t.prototype,"normalizedCoords",null),s([l()],t.prototype,"normalizedBounds",null),t=s([E("esri.layers.support.MediaElementView")],t);const e=O(),p=i(),u=i(),c=i();function P(o,r,n){return x(e,r[0],r[1],1),z(e,e,y(p,n)),e[2]===0?m(o,e[0],e[1]):m(o,e[0]/e[2],e[1]/e[2])}function Q(o,r,n){return f(u,r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7]),f(c,n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]),g(o,h(u,u),c),o[8]!==0&&(o[0]/=o[8],o[1]/=o[8],o[2]/=o[8],o[3]/=o[8],o[4]/=o[8],o[5]/=o[8],o[6]/=o[8],o[7]/=o[8],o[8]/=o[8]),o}function f(o,r,n,C,S,b,j,v,B){d(o,r,C,b,n,S,j,1,1,1),x(e,v,B,1),h(p,o);const[R,V,$]=z(e,e,y(p,p));return d(p,R,0,0,0,V,0,0,0,$),g(o,p,o)}export{Q as j,t as m,P as p};
