import{P as n}from"./cast-CsZslgGN.js";import{f as p,i as u,s as y}from"./utils-YowqfOgk.js";import{a as m}from"./TraceResult-BGYxkdrX.js";import"./Accessor-BmwT4B0c.js";import"./index-4eY77cms.js";import"./JSONSupport-DcrLLGjL.js";import"./Polyline-s-JzsQqo.js";import"./writer-DKgfqj4X.js";import"./Extent-g5W9hy0j.js";import"./Point-Cz2JYYmX.js";import"./mathUtils-Cfq9PL9W.js";import"./NetworkElement-BEwoE6j2.js";async function d(s,t,a){const o=p(s),r=t.toJSON();r.traceLocations=JSON.stringify(t.traceLocations),t.resultTypes&&(r.resultTypes=JSON.stringify(t.resultTypes));const e=u(o.query,{query:y({...r,f:"json"}),...a}),i=`${o.path}/trace`;return n(i,e).then(c=>f(c))}async function j(s,t,a){const o=p(s),r=t.toJSON();r.traceLocations=JSON.stringify(t.traceLocations),t.resultTypes&&(r.resultTypes=JSON.stringify(t.resultTypes));const e=u(o.query,{query:y({...r,async:!0,f:"json"}),...a}),i=`${o.path}/trace`,{data:c}=await n(i,e);return c.statusUrl}function f(s){const{data:t}=s;return m.fromJSON(t.traceResults)}export{j as submitTraceJob,d as trace};
