import{j as t}from"./subclass-BR3PhgZG.js";import{s as o}from"./reactiveUtils-BFQ0BtrB.js";class _{constructor(e){this._observable=new o,this._set=new Set(e)}get size(){return t(this._observable),this._set.size}add(e){const s=this._set.size;return this._set.add(e),this._set.size!==s&&this._observable.notify(),this}clear(){this._set.size>0&&(this._set.clear(),this._observable.notify())}delete(e){const s=this._set.delete(e);return s&&this._observable.notify(),s}entries(){return t(this._observable),this._set.entries()}forEach(e,s){t(this._observable),this._set.forEach((r,i)=>e.call(s,r,i,this),s)}has(e){return t(this._observable),this._set.has(e)}keys(){return t(this._observable),this._set.keys()}values(){return t(this._observable),this._set.values()}[Symbol.iterator](){return t(this._observable),this._set[Symbol.iterator]()}get[Symbol.toStringTag](){return this._set[Symbol.toStringTag]}}export{_ as s};
