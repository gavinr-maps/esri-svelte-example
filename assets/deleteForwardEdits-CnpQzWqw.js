import{F as c,aW as f,dS as u,dT as p,U as m}from"./index-B1qcMJFy.js";async function g(a,s,e,i){if(!s)throw new c("post:missing-guid","guid for version is missing");const t=f(a),o=e.toJSON(),r=u(t.query,{query:p({...o,f:"json"}),...i,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const d=`${t.path}/versions/${s}/deleteForwardEdits`,{data:n}=await m(d,r);return n.success}export{g as deleteForwardEdits};
