var e,t=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(e,i,a)=>i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[i]=a,o=(e,t)=>{for(var i in t||(t={}))s.call(t,i)&&n(e,i,t[i]);if(l)for(var i of l(t))r.call(t,i)&&n(e,i,t[i]);return e},h=(e,t)=>i(e,a(t));import{d1 as c,q as p,bk as v,L as m,p as u,d2 as f,ab as d,ac as b,d3 as y,ad as w,a9 as _,ax as g,bK as A,X as T,B as $,C as z,D as O,ba as S,d4 as q,E as D,cY as P}from"./vendor.5b1a85aa.js";class L{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),a=i%8,l=i>>3,s=this._tileAvailabilityBitSet;return l<0||l>s.length?"unknown":s[l]&1<<a?"available":"unavailable"}_updateFromData(e){const t=this.location.width,i=this.location.height;let a=!0,l=!0;const s=Math.ceil(t*i/8),r=new Uint8Array(s);let n=0;for(let o=0;o<e.length;o++){const t=o%8;e[o]?(l=!1,r[n]|=1<<t):a=!1,7===t&&++n}l?this._allAvailability="unavailable":a?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=r,this.byteSize+=r.length)}static fromDefinition(e,t){const i=e.service.request||m,{row:a,col:l,width:s,height:r}=e,n={query:{f:"json"}};return t=t?o(o({},n),t):n,i(function(e){let t;if("vector-tile"===e.service.type)t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;else{const i=e.service.tileServers;t=`${i&&i.length?i[e.row%i.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const i=e.service.query;return i&&(t=`${t}?${i}`),t}(e),t).then((e=>e.data)).catch((e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:a,left:l,width:s,height:r},valid:!0,data:c(s*r,0)};throw e})).then((e=>{if(e.location&&(e.location.top!==a||e.location.left!==l||e.location.width!==s||e.location.height!==r))throw new p("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:a,left:l,width:s,height:r}});return L.fromJSON(e)}))}static fromJSON(e){L.validateJSON(e);const t=new L;return t.location=Object.freeze(v(e.location)),t._updateFromData(e.data),Object.freeze(t)}static validateJSON(e){if(!e||!e.location)throw new p("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new p("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new p("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new p("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new p("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function j(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const C=u.getLogger("esri.layers.support.TilemapCache");let U=e=class extends _{constructor(e){super(e),this._handles=new g,this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2097152,this.request=m,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new A(this.cacheByteSize),this._handles.add([this.watch(["layer.parsedUrl","layer.tileServers?"],(()=>this._initializeTilemapDefinition())),T(this,"layer.tileInfo.lods",(e=>this._initializeAvailableLevels(e)),!0)]),this._initializeTilemapDefinition()}destroy(){this._handles&&(this._handles.destroy(),this._handles=null)}castLevels(e){return e<=2?(C.error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,i,a){if(!this._availableLevels[e])return Promise.reject(new p("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const l=this._tmpTilemapDefinition,s=this._tilemapFromCache(e,t,i,l);if(s)return Promise.resolve(s);const r=a&&a.signal;return a=h(o({},a),{signal:null}),new Promise(((e,t)=>{$(r,(()=>t(z())));const i=j(l);let s=this._pendingTilemapRequests[i];if(!s){s=L.fromDefinition(l,a).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>delete this._pendingTilemapRequests[i];this._pendingTilemapRequests[i]=s,s.then(e,e)}s.then(e,t)}))}getAvailability(e,t,i){if(!this._availableLevels[e])return"unavailable";const a=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return a?a.getAvailability(t,i):"unknown"}getAvailabilityUpsample(e,t,i,a){a.level=e,a.row=t,a.col=i;const l=this.layer.tileInfo;for(l.updateTileInfo(a);;){const e=this.getAvailability(a.level,a.row,a.col);if("unavailable"!==e)return e;if(!l.upsampleTile(a))return"unavailable"}}fetchAvailability(e,t,i,a){return this._availableLevels[e]?this.fetchTilemap(e,t,i,a).catch((e=>e)).then((a=>{if(a instanceof L){const l=a.getAvailability(t,i);return"unavailable"===l?Promise.reject(new p("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):l}if(O(a))throw a;return"unknown"})):Promise.reject(new p("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,i,a,l){a.level=e,a.row=t,a.col=i;const s=this.layer.tileInfo;s.updateTileInfo(a);const r=this.fetchAvailability(e,t,i,l).catch((e=>{if(O(e))throw e;if(s.upsampleTile(a))return this.fetchAvailabilityUpsample(a.level,a.row,a.col,a);throw e}));return this._fetchAvailabilityUpsamplePrefetch(a.id,e,t,i,l,r),r}async _fetchAvailabilityUpsamplePrefetch(t,i,a,l,s,r){if(!this._prefetchingEnabled)return;const n=`prefetch-${t}`;if(this._handles.has(n))return;const c=S();r.then((()=>c.abort()),(()=>c.abort()));let p=!1;const v={remove(){p||(p=!0,c.abort())}};if(this._handles.add(v,n),await q(10,c.signal).catch((()=>{})),p||(p=!0,this._handles.remove(n)),D(c))return;const m={id:t,level:i,row:a,col:l},u=h(o({},s),{signal:c.signal}),f=this.layer.tileInfo;for(let o=0;e._prefetches.length<e._maxPrefetch&&f.upsampleTile(m);++o){const t=this.fetchAvailability(m.level,m.row,m.col,u);e._prefetches.push(t);const i=()=>{e._prefetches.removeUnordered(t)};t.then(i,i)}}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;const e=this.layer.parsedUrl,t=e.query;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:t?P(t):null,tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,a){a.level=e,a.row=t-t%this.size,a.col=i-i%this.size;const l=j(a);return this._tilemapCache.get(l)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach((e=>this._availableLevels[e.level]=!0))}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,a)=>!!e._tilemapFromCache(t,i,a,e._tmpTilemapDefinition)}}};U._maxPrefetch=4,U._prefetches=new f({initialSize:e._maxPrefetch}),d([b({constructOnly:!0,type:Number})],U.prototype,"levels",void 0),d([y("levels")],U.prototype,"castLevels",null),d([b({readOnly:!0,type:Number})],U.prototype,"size",null),d([b({constructOnly:!0,type:Number})],U.prototype,"cacheByteSize",void 0),d([b({constructOnly:!0})],U.prototype,"layer",void 0),d([b({constructOnly:!0})],U.prototype,"request",void 0),U=e=d([w("esri.layers.support.TilemapCache")],U);export{U as j};
