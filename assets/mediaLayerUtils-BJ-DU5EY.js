const t=Symbol("ImageElementInstance"),e=Symbol("VideoElementInstance");function o(n){return n!=null&&typeof n=="object"&&t in n}function c(n){return n!=null&&typeof n=="object"&&e in n}function l(n){return o(n)||c(n)}export{l as c,e,t as n,c as o};
