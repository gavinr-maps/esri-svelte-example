import{timeZones as b}from"./time-zones-D0E35ZOg.js";import{extractRegion as p}from"./region-CmSYMm4q.js";import"./index-p4VH55K1-DFe7Bl0A.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const u=n=>n.map(o=>{const{label:a}=o,t=p(a);return{...o,continent:t}});async function v(){const n=[],o=b.map(t=>({label:t})),a=u(o);for(const t of a){const{label:e,continent:l}=t;if(t.visited)continue;t.visited=!0;const i={label:l,tzs:[{label:e}]};for(const r of a.filter(s=>!s.visited)){const{label:s,continent:c}=r;if(l===c){const m={label:s};i.tzs.push(m),r.visited=!0}}n.push(i)}return n.map(t=>(t.tzs=t.tzs.sort((e,l)=>e.label.localeCompare(l.label)),{label:t.label,tzs:t.tzs.map(e=>e.label)})).sort((t,e)=>t.label.localeCompare(e.label))}export{v as groupByRegion};
