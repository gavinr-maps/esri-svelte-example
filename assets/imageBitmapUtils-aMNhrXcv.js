import{b as l}from"./subclass-BZA_h8Db.js";import{s as c}from"./Accessor-BLX9ikPh.js";async function u(a,r,t){let e;try{e=await createImageBitmap(a)}catch(o){throw new l("request:server",`Unable to load ${r}`,{url:r,error:o})}return c(t),e}async function w(a,r,t,e,o){let n;try{n=await createImageBitmap(a)}catch(s){throw new l("request:server",`Unable to load tile ${r}/${t}/${e}`,{error:s,level:r,row:t,col:e})}return c(o),n}export{w as o,u as t};
