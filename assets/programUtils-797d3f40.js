import{t as a}from"./NestedMap-1b5db22e.js";import{m as h}from"./ProgramTemplate-8035f66f.js";let p=class{constructor(e){this._rctx=e,this._store=new a}dispose(){this._store.forEach(e=>e.forEach(t=>t.dispose())),this._store.clear()}acquire(e,t,o,r){const n=this._store.get(e,t);if(n!=null)return n.ref(),n;const s=new h(this._rctx,e,t,o,r);return s.ref(),this._store.set(e,t,s),s}get test(){let e=0;return this._store.forEach(t=>t.forEach(o=>e+=o.hasGLName?2:1)),{cachedWebGLProgramObjects:e}}};function l(i){const{options:e,value:t}=i;return typeof e[t]=="number"}function m(i){let e="";for(const t in i){const o=i[t];if(typeof o=="boolean")o&&(e+=`#define ${t}
`);else if(typeof o=="number")e+=`#define ${t} ${o.toFixed()}
`;else if(typeof o=="object")if(l(o)){const{value:r,options:n,namespace:s}=o,f=s?`${s}_`:"";for(const c in n)e+=`#define ${f}${c} ${n[c].toFixed()}
`;e+=`#define ${t} ${f}${r}
`}else{const r=o.options;let n=0;for(const s in r)e+=`#define ${r[s]} ${(n++).toFixed()}
`;e+=`#define ${t} ${r[o.value]}
`}}return e}export{p as e,m as n};
