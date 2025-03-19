/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const i=(n,t,r)=>Math.max(t,Math.min(n,r)),a=new RegExp(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/),c=n=>{const t=(""+n).match(a);return!t||parseInt(t[1])===0?0:Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0))};function u(n){return c(n)>0&&n>0?parseFloat(`0.${n.toString().split(".")[1]}`):n}function s(n,t,r,e,o){return(n-t)*(o-e)/(r-t)+e}function h(n,t,r){return n<r?-1:n>t-r?1:0}export{h as g,u as i,i as m,s as o,c as s};
