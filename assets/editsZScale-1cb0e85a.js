import{bq as a,d as l}from"./index-27db053b.js";function t(n,o,s){if(n.hasM==null||n.hasZ)for(const f of o)for(const e of f)e.length>2&&(e[2]*=s)}function u(n,o,s){if(!n&&!o||!s)return;const f=a(s);r(n,s,f),r(o,s,f)}function r(n,o,s){if(n)for(const f of n)c(f.geometry,o,s)}function c(n,o,s){if(!(n!=null&&n.spatialReference)||l(n.spatialReference,o))return;const f=a(n.spatialReference)/s;if(f!==1){if("x"in n)n.z!=null&&(n.z*=f);else if("rings"in n)t(n,n.rings,f);else if("paths"in n)t(n,n.paths,f);else if("points"in n&&(n.hasM==null||n.hasZ))for(const e of n.points)e.length>2&&(e[2]*=f)}}export{u as i};
