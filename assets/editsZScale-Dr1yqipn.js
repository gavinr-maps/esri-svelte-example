import{bp as l,G as a}from"./index-B1qcMJFy.js";function t(n,s,o){if(n.hasM==null||n.hasZ)for(const f of s)for(const e of f)e.length>2&&(e[2]*=o)}function u(n,s,o){if(!n&&!s||!o)return;const f=l(o);r(n,o,f),r(s,o,f)}function r(n,s,o){if(n)for(const f of n)c(f.geometry,s,o)}function c(n,s,o){if(!(n!=null&&n.spatialReference)||a(n.spatialReference,s))return;const f=l(n.spatialReference)/o;if(f!==1){if("x"in n)n.z!=null&&(n.z*=f);else if("rings"in n)t(n,n.rings,f);else if("paths"in n)t(n,n.paths,f);else if("points"in n&&(n.hasM==null||n.hasZ))for(const e of n.points)e.length>2&&(e[2]*=f)}}export{u as i};
