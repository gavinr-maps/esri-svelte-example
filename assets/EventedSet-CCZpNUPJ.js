import{o as i}from"./Evented-BHRw9x22.js";import{E as s}from"./Collection-CEdjem1-.js";import{r as h}from"./signal-D4lghLjV.js";class f extends i{constructor(){super(...arguments),this._set=new Set,this._length=h(0)}clear(){if(this._set.size>0){const t=this.toArray();this._set.clear(),this.emit("after-changes",{type:s.REMOVE}),this.emit("change",{added:[],removed:t})}}get length(){return this._length.value}addMany(t){if(t.length!==0){for(const e of t)this._set.add(e);this._length.value=this._set.size,this.emit("after-changes",{type:s.ADD}),this.emit("change",{added:t,removed:[]})}}remove(t){this._set.delete(t)&&(this._length.value=this._set.size,this.emit("after-changes",{type:s.REMOVE}),this.emit("change",{added:[],removed:[t]}))}removeMany(t){const e=[];for(const r of t)this._set.delete(r)&&e.push(r);e.length>0&&(this._length.value=this._set.size,this.emit("after-changes",{type:s.REMOVE}),this.emit("change",{added:[],removed:e}))}toArray(){return Array.from(this._set.values())}find(t){for(const e of this._set.values())if(t(e))return e}some(t){for(const e of this._set.values())if(t(e))return!0;return!1}forEach(t){this._set.forEach(e=>t(e))}}export{f as r};