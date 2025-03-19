import{s as a}from"./Accessor-BHnuXKD2.js";import{t as l}from"./NestedMap-GuqgquCN.js";import{a as p}from"./ShaderTechniqueConfiguration-YrUOztAU.js";class u{constructor(e){this.context=e,this._debug=!1,this._precompiling=this._debug?0:1,this._cache=new l}get precompiling(){return this._precompiling}set precompiling(e){this._precompiling=e,e===0&&this.context.rctx.gl.flush()}get viewingMode(){return this.context.viewingMode}destroy(){this._cache.forAll(e=>e.destroy()),this._cache.clear()}precompile(e,t=s){++this.precompiling,this.get(e,t),--this.precompiling}get(e,t=s){const r=t.key.code;let o=this._cache.get(e,r);if(o==null){if(this._precompiling===0){let c=`Uncached shader compile in ${new Error().stack}
  for configuration
${t.decode()}`;const i=this._cache.getInner(e);throw i!=null&&i.size&&(c+=`

  cached configurations:
`,c+=Array.from(i.values()).map(h=>t.decode(h.key)).sort().join(`

`)),console.log(c),new a(c)}o=new e(this.context,t),this._cache.set(e,r,o)}return o}async reloadAll(){const e=new Array;this._cache.forEach(t=>e.push(g(t))),await Promise.all(e)}}async function g(n){let e=!0;n.forEach(async t=>{await t.reload(e),e=!1})}const s=new p;export{u as o,s as r};
