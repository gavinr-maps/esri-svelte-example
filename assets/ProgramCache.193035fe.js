import{t as r}from"./ShaderCompiler.77c0ea3a.js";var a=class{constructor(r){this._programCacheByTemplate=new Map,this._rctx=r}dispose(){this._programCacheByTemplate.forEach((r=>r.programs.forEach((r=>r.dispose())))),this._programCacheByTemplate=null}getProgram(a,t){return this._programCacheByTemplate.has(a)||this.addProgramTemplate(a,(t=>r(this._rctx,a,t))),this.getProgramTemplateInstance(a,t)}addProgramTemplate(r,a){this._programCacheByTemplate.set(r,{constructor:a,programs:new Map})}getProgramTemplateInstance(r,a){const t=this._programCacheByTemplate.get(r);if(t){const r=a?JSON.stringify(a):"default";if(!t.programs.has(r)){const e=t.constructor(a);t.programs.set(r,e)}return t.programs.get(r)}return null}};export{a as s};
