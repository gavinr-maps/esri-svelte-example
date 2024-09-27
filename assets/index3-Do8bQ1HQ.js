import{t as b}from"./time-zones-B23cWwRL.js";import{e as f,i as p}from"./continent-DJXoL968.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.2
 */const d=n=>n.map(o=>{const{label:a}=o,t=f(a,!0);return{...o,continent:t,isRegularContinent:p(t)}});async function R(){const n=[],o=b.map(t=>({label:t})),a=d(o);for(const t of a){const{label:e,continent:i,isRegularContinent:c}=t;if(t.visited)continue;if(t.visited=!0,!c){t.visited=!0;continue}const s={label:i,tzs:[{label:e}]};for(const r of a.filter(l=>!l.visited)){const{label:l,continent:u,isRegularContinent:z}=r;if(i===u){const m={label:l};s.tzs.push(m),r.visited=!0}}n.push(s)}return n.map(t=>(t.tzs=t.tzs.sort((e,i)=>e.label.localeCompare(i.label)),{label:t.label,tzs:t.tzs.map(e=>e.label)})).sort((t,e)=>t.label.localeCompare(e.label))}export{R as groupByRegion};
