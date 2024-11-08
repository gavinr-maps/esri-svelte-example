import{t as z}from"./Accessor-BLX9ikPh.js";const c=-3,f=c-1;var n;(function(_){_[_.ALL=0]="ALL",_[_.SOME=1]="SOME"})(n||(n={}));class b{constructor(i,t,e){this.name=i,this._storage=t,this.id=g+++":",this.size=0,this.maxSize=-1,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),e&&(this._storage.registerRemoveFunc(this.id,e),this._removeFunc=!0)}destroy(){this._storage.clear(this),this._removeFunc&&this._storage.deregisterRemoveFunc(this.id),this._storage.deregister(this),this._storage=null}get hitRate(){return this._hit/(this._hit+this._miss)}get storageSize(){return this._storage.size}getSize(i){return this._storage.getSize(this,i)}resetHitRate(){this._hit=this._miss=0}put(i,t,e,h=0){this._storage.put(this,i,t,e,h)}pop(i){const t=this._storage.pop(this,i);return t===void 0?++this._miss:++this._hit,t}get(i){const t=this._storage.get(this,i);return t===void 0?++this._miss:++this._hit,t}peek(i){return this._storage.peek(this,i)}updateSize(i,t,e){this._storage.updateSize(this,i,t,e)}clear(){this._storage.clear(this)}clearAll(){this._storage.clearAll()}get performanceInfo(){return this._storage.performanceInfo}resetStats(){this._storage.resetStats()}}class p{get size(){return this._size}constructor(i=10485760){this._maxSize=i,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new z,this._users=new z}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(i){this._users.push(i)}deregister(i){this._users.removeUnordered(i)}registerRemoveFunc(i,t){this._removeFuncs.push([i,t])}deregisterRemoveFunc(i){this._removeFuncs.filterInPlace(t=>t[0]!==i)}get maxSize(){return this._maxSize}set maxSize(i){this._maxSize=Math.max(i,-1),this._checkSize()}getSize(i,t){const e=this._db.get(i.id+t);return(e==null?void 0:e.size)??0}put(i,t,e,h,r){t=i.id+t;const s=this._db.get(t);if(s&&(this._size-=s.size,i.size-=s.size,this._db.delete(t),s.entry!==e&&this._notifyRemove(t,s.entry,s.size,n.ALL)),h>this._maxSize)return void this._notifyRemove(t,e,h,n.ALL);if(e===void 0)return void console.warn("Refusing to cache undefined entry ");if(!h||h<0)return console.warn(`Refusing to cache entry with size ${h} for key ${t}`),void this._notifyRemove(t,e,0,n.ALL);const o=1+Math.max(r,f)-c;this._db.set(t,new S(e,h,o)),this._size+=h,i.size+=h,this._checkSize()}updateSize(i,t,e,h){t=i.id+t;const r=this._db.get(t);if(r&&r.entry===e){for(this._size-=r.size,i.size-=r.size;h>this._maxSize;){const s=this._notifyRemove(t,e,h,n.SOME);if(!(s!=null&&s>0))return void this._db.delete(t);h=s}r.size=h,this._size+=h,i.size+=h,this._checkSize()}}pop(i,t){t=i.id+t;const e=this._db.get(t);if(e)return this._size-=e.size,i.size-=e.size,this._db.delete(t),++this._hit,e.entry;++this._miss}get(i,t){t=i.id+t;const e=this._db.get(t);if(e!==void 0)return this._db.delete(t),e.lives=e.lifetime,this._db.set(t,e),++this._hit,e.entry;++this._miss}peek(i,t){const e=this._db.get(i.id+t);return e?++this._hit:++this._miss,e==null?void 0:e.entry}get performanceInfo(){const i={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},t={},e=new Array;this._db.forEach((s,o)=>{const a=s.lifetime;e[a]=(e[a]||0)+s.size,this._users.forAll(d=>{const{id:m,name:u}=d;if(o.startsWith(m)){const l=t[u]||0;t[u]=l+s.size}})});const h={};this._users.forAll(s=>{const o=s.name;if("hitRate"in s&&typeof s.hitRate=="number"&&!isNaN(s.hitRate)&&s.hitRate>0){const a=t[o]||0;t[o]=a,h[o]=Math.round(100*s.hitRate)+"%"}else h[o]="0%"});const r=Object.keys(t);r.sort((s,o)=>t[o]-t[s]),r.forEach(s=>i[s]=Math.round(t[s]/2**20)+"MB / "+h[s]);for(let s=e.length-1;s>=0;--s){const o=e[s];o&&(i["Priority "+(s+c-1)]=Math.round(o/this._size*100)+"%")}return i}resetStats(){this._hit=this._miss=0,this._users.forAll(i=>i.resetHitRate())}clear(i){const t=i.id;this._db.forEach((e,h)=>{h.startsWith(t)&&(this._size-=e.size,this._db.delete(h),this._notifyRemove(h,e.entry,e.size,n.ALL))}),i.size=0}clearAll(){this._db.forEach((i,t)=>this._notifyRemove(t,i.entry,i.size,n.ALL)),this._users.forAll(i=>i.size=0),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(i,t,e,h){let r;return this._removeFuncs.some(s=>{if(i.startsWith(s[0])){const o=s[1](t,h,e);return typeof o=="number"&&(r=o),!0}return!1}),r}_checkSize(){this._users.forAll(i=>this._checkSizeLimits(i)),this._checkSizeLimits()}_checkSizeLimits(i){const t=i??this;if(t.maxSize<0||t.size<=t.maxSize)return;const e=i==null?void 0:i.id;let h=!0;for(;h;){h=!1;for(const[r,s]of this._db)if(s.lifetime===0&&(!e||r.startsWith(e))){if(this._purgeItem(r,s,i),t.size<=.9*t.maxSize)return;h||(h=this._db.has(r))}}for(const[r,s]of this._db)if((!e||r.startsWith(e))&&(this._purgeItem(r,s,i),t.size<=.9*t.maxSize))return}_purgeItem(i,t,e=this._users.find(h=>i.startsWith(h.id))){if(this._db.delete(i),t.lives<=1){this._size-=t.size,e&&(e.size-=t.size);const h=this._notifyRemove(i,t.entry,t.size,n.SOME);h!=null&&h>0&&(this._size+=h,e&&(e.size+=h),t.lives=t.lifetime,t.size=h,this._db.set(i,t))}else--t.lives,this._db.set(i,t)}}let g=0;class S{constructor(i,t,e){this.entry=i,this.size=t,this.lifetime=e,this.lives=e}}export{c as e,p as h,n as i,b as r,f as s};
