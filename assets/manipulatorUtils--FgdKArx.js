import{e as a}from"./subclass-BZA_h8Db.js";import{c as l}from"./elevationInfoUtils-BC_66_Fg.js";function m(r,n){return u(r==null?void 0:r.data.coordinateHelper.hasZ(),n)}function u(r,n){return!!r&&n.mode!=="on-the-ground"&&!l(n)}function d(r,n){let o=null;const t=r.events.on("grab-changed",e=>{o!=null&&(o.remove(),o=null),e.action==="start"&&(o=r.disableDisplay())});return a(()=>{o==null||o.remove(),t.remove()})}export{m as o,d as r};