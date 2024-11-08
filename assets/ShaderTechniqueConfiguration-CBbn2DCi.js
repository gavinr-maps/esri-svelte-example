import{S as c,b as h}from"./subclass-BZA_h8Db.js";import{t as l}from"./interfaces-DDtDqZYj.js";class f{constructor(t){this._bits=[...t]}equals(t){return c(this._bits,t.bits)}get code(){return this._code??(this._code=String.fromCharCode(...this._bits)),this._code}get bits(){return this._bits}}class B extends l{constructor(){var t;super(),this._parameterBits=((t=this._parameterBits)==null?void 0:t.map(()=>0))??[],this._parameterNames??(this._parameterNames=[])}get key(){return this._key??(this._key=new f(this._parameterBits)),this._key}decode(t=this.key){const r=this._parameterBits;this._parameterBits=[...t.bits];const m=this._parameterNames.map(i=>`    ${i}: ${this[i]}`).join(`
`);return this._parameterBits=r,m}}function g(o={}){return(t,r)=>{var u,_;t.hasOwnProperty("_parameterNames")||Object.defineProperty(t,"_parameterNames",{value:((u=t._parameterNames)==null?void 0:u.slice())??[],configurable:!0,writable:!0}),t.hasOwnProperty("_parameterBits")||Object.defineProperty(t,"_parameterBits",{value:((_=t._parameterBits)==null?void 0:_.slice())??[0],configurable:!0,writable:!0}),t._parameterNames.push(r);const m=o.count||2,i=Math.ceil(Math.log2(m)),n=t._parameterBits;let e=0;for(;n[e]+i>16;)e++,e>=n.length&&n.push(0);const p=n[e],a=(1<<i)-1<<p;n[e]+=i,o.count?Object.defineProperty(t,r,{get(){return(this._parameterBits[e]&a)>>p},set(s){if(this[r]!==s){if(this._key=null,this._parameterBits[e]=this._parameterBits[e]&~a|+s<<p&a,typeof s!="number")throw new h(`Configuration value for ${r} must be a number, got ${typeof s}`);if(o.count==null)throw new h(`Configuration value for ${r} must provide a count option`)}}}):Object.defineProperty(t,r,{get(){return!!((this._parameterBits[e]&a)>>p)},set(s){if(this[r]!==s&&(this._key=null,this._parameterBits[e]=this._parameterBits[e]&~a|+s<<p&a,typeof s!="boolean"))throw new h(`Configuration value for ${r} must be boolean, got ${typeof s}`)}})}}export{B as a,g as i};