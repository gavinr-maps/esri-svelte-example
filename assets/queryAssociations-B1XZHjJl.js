import{P as l}from"./cast-CsZslgGN.js";import{r as a,m as y,a as d,aS as f,B as g}from"./Accessor-BmwT4B0c.js";import{i as v}from"./typeUtils-cWA9Lf-p.js";import{f as S,s as w,i as $}from"./utils-YowqfOgk.js";import{S as j}from"./JSONSupport-DcrLLGjL.js";import{d as I}from"./Association-CvaR2Zsv.js";import"./index-4eY77cms.js";import"./writer-DKgfqj4X.js";import"./Polyline-s-JzsQqo.js";import"./Extent-g5W9hy0j.js";import"./Point-Cz2JYYmX.js";import"./mathUtils-Cfq9PL9W.js";import"./NetworkElement-BEwoE6j2.js";let r=class extends j{constructor(e){super(e),this.associations=[]}};a([y({type:[I],json:{write:!0}})],r.prototype,"associations",void 0),r=a([d("esri.rest.networks.support.QueryAssociationsResult")],r);const J=r;function O(s){const{returnDeletes:e,elements:i,gdbVersion:o,moment:n}=s.toJSON();return{returnDeletes:e,elements:JSON.stringify(i.map(t=>({globalId:t.globalId,networkSourceId:t.networkSourceId,terminalId:t.terminalId}))),types:JSON.stringify(s.types.map(t=>v.toJSON(t))).replaceAll('"connectivity"','"junctionJunctionConnectivity"'),gdbVersion:o,moment:n}}async function R(s,e,i){const o=S(s),n={...O(e),f:"json"},t=w({...o.query,...n}),p=$(t,{...i,method:"post"}),c=`${o.path}/associations/query`,{data:m}=await l(c,p),u=J.fromJSON(m);return e.types.includes("connectivity")&&f(g.getLogger("esri/rest/networks/support/QueryAssociationsParameters"),"types",{replacement:"Please use 'junction-junction-connectivity' instead of 'connectivity'.",see:"https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-networks-support-QueryAssociationsParameters.html#types",version:"4.29",warnOnce:!0}),u}export{R as queryAssociations};
