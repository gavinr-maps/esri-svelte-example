import{cv as m,r as h,c6 as c}from"./index.ebaf2ed0.js";function u(e,n){return n?"xoffset"in n&&n.xoffset?Math.max(e,Math.abs(n.xoffset)):"yoffset"in n&&n.yoffset?Math.max(e,Math.abs(n.yoffset||0)):e:e}function M(e){let n=0,s=0;for(let r=0;r<e.length;r++){const t=e[r].size;typeof t=="number"&&(n+=t,s++)}return n/s}function p(e,n){return typeof e=="number"?e:e&&e.stops&&e.stops.length?M(e.stops):n}function b(e,n){if(!n)return e;const s=n.filter(a=>a.type==="size").map(a=>{const{maxSize:f,minSize:o}=a;return(p(f,e)+p(o,e))/2});let r=0;const t=s.length;if(t===0)return e;for(let a=0;a<t;a++)r+=s[a];const i=Math.floor(r/t);return Math.max(i,e)}function z(e){const n=e&&e.renderer,s=(e&&e.event&&e.event.pointerType)==="touch"?9:6;if(!n)return s;const r="visualVariables"in n?b(s,n.visualVariables):s;if(n.type==="simple")return u(r,n.symbol);if(n.type==="unique-value"){let t=r;return n.uniqueValueInfos.forEach(i=>{t=u(t,i.symbol)}),t}if(n.type==="class-breaks"){let t=r;return n.classBreakInfos.forEach(i=>{t=u(t,i.symbol)}),t}return n.type==="dot-density"||n.type,r}function d(e,n,s,r=new m){let t;if(s.type==="2d")t=n*s.resolution;else if(s.type==="3d"){const x=s.overlayPixelSizeInMapUnits(e),l=s.basemapSpatialReference;t=h(l)&&!l.equals(s.spatialReference)?c(l)/c(s.spatialReference):n*x}const i=e.x-t,a=e.y-t,f=e.x+t,o=e.y+t,{spatialReference:y}=s;return r.xmin=Math.min(i,f),r.ymin=Math.min(a,o),r.xmax=Math.max(i,f),r.ymax=Math.max(a,o),r.spatialReference=y,r}new m;export{d as a,z as s};
