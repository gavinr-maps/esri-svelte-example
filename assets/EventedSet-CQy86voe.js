import{i as r}from"./Evented-DCWccWGU.js";import{E as s}from"./reactiveUtils-BR0C1Kq4.js";import{r as h}from"./signal-DSa0yokC.js";class f extends r{constructor(){super(...arguments),this._set=new Set,this._length=h(0)}clear(){if(this._set.size>0){const t=this.toArray();this._set.clear(),this.emit("after-changes",{type:s.REMOVE}),this.emit("change",{added:[],removed:t})}}get length(){return this._length.value}addMany(t){if(t.length!==0){for(const e of t)this._set.add(e);this._length.value=this._set.size,this.emit("after-changes",{type:s.ADD}),this.emit("change",{added:t,removed:[]})}}remove(t){this._set.delete(t)&&(this._length.value=this._set.size,this.emit("after-changes",{type:s.REMOVE}),this.emit("change",{added:[],removed:[t]}))}removeMany(t){const e=[];for(const i of t)this._set.delete(i)&&e.push(i);e.length>0&&(this._length.value=this._set.size,this.emit("after-changes",{type:s.REMOVE}),this.emit("change",{added:[],removed:e}))}toArray(){return Array.from(this._set.values())}find(t){for(const e of this._set.values())if(t(e))return e}some(t){for(const e of this._set.values())if(t(e))return!0;return!1}forEach(t){this._set.forEach(e=>t(e))}}export{f as r};
