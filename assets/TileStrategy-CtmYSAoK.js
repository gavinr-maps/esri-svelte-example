import{L as E}from"./Point-Cz2JYYmX.js";import{e as q}from"./TileKey-DBTeo_j0.js";import{a8 as D,g as Z,N as Q,o as G,bz as H,r as B,m as R,a as J}from"./Accessor-BmwT4B0c.js";import{m as U,b as K}from"./vec2-ChnYg_BJ.js";import{_ as ee}from"./ScheduledQueueProcessor-U8WIIyj8.js";import{a as X,d as te}from"./Polyline-s-JzsQqo.js";function b(y,e){return[y,e]}function P(y,e,t){return y[0]=e,y[1]=t,y}function ie(y,e,t,i,s){return y[0]=e,y[1]=t,y[2]=i,y[3]=s,y}const T=new q("0/0/0/0");let se=class j{static create(e,t,i=null){const s=E(e.spatialReference),o=t.origin||b(e.origin.x,e.origin.y),r=b(e.size[0]*t.resolution,e.size[1]*t.resolution),l=b(-1/0,-1/0),n=b(1/0,1/0),h=b(1/0,1/0);i!=null&&(P(l,Math.max(0,Math.floor((i.xmin-o[0])/r[0])),Math.max(0,Math.floor((o[1]-i.ymax)/r[1]))),P(n,Math.max(0,Math.floor((i.xmax-o[0])/r[0])),Math.max(0,Math.floor((o[1]-i.ymin)/r[1]))),P(h,n[0]-l[0]+1,n[1]-l[1]+1));const{cols:a,rows:u}=t;let d,_,w,g;return!i&&a&&u&&(P(l,a[0],u[0]),P(n,a[1],u[1]),P(h,a[1]-a[0]+1,u[1]-u[0]+1)),e.isWrappable?(d=b(Math.ceil(Math.round((s.valid[1]-s.valid[0])/t.resolution)/e.size[0]),h[1]),_=!0,w=s.origin,g=s.valid):(d=h,_=!1),new j(t.level,t.resolution,t.scale,o,l,n,h,r,d,_,w,g)}constructor(e,t,i,s,o,r,l,n,h,a,u,d){this.level=e,this.resolution=t,this.scale=i,this.origin=s,this.first=o,this.last=r,this.size=l,this.norm=n,this.worldSize=h,this.wrap=a,this._spatialReferenceOrigin=u,this._spatialReferenceValid=d}normalizeCol(e){if(!this.wrap)return e;const t=this.worldSize[0];return e<0?t-1-Math.abs((e+1)%t):e%t}normalizeKey(e){if(!this.wrap)return;const t=this.worldSize[0],i=e.col;i<0?(e.col=i+t,e.world-=1):i>=t&&(e.col=i-t,e.world+=1)}denormalizeCol(e,t){return this.wrap?this.worldSize[0]*t+e:e}getWorldForColumn(e){return this.wrap?Math.floor(e/this.worldSize[0]):0}getFirstColumnForWorld(e){return e*this.worldSize[0]+this.first[0]}getLastColumnForWorld(e){return e*this.worldSize[0]+this.first[0]+this.size[0]-1}getColumnForX(e){return(e-this.origin[0])/this.norm[0]}getXForColumn(e){const t=this.origin[0]+e*this.norm[0],i=this._spatialReferenceOrigin,s=this._spatialReferenceValid;return this.wrap&&i&&s?t===i[0]?s[0]:this.origin[0]===i[0]&&e===this.worldSize[0]?s[1]:t:t}getRowForY(e){return(this.origin[1]-e)/this.norm[1]}getYForRow(e){return this.origin[1]-e*this.norm[1]}getTileBounds(e,t,i=!1){T.set(t);const s=i?T.col:this.denormalizeCol(T.col,T.world),o=T.row;return ie(e,this.getXForColumn(s),this.getYForRow(o+1),this.getXForColumn(s+1),this.getYForRow(o)),e}getTileCoords(e,t,i=!1){T.set(t);const s=i?T.col:this.denormalizeCol(T.col,T.world);return Array.isArray(e)?P(e,this.getXForColumn(s),this.getYForRow(T.row)):(e.x=this.getXForColumn(s),e.y=this.getYForRow(T.row)),e}};class V{constructor(){this.spans=[]}acquire(e){this.lodInfo=e}release(){this.lodInfo=null,this.spans.length=0}*keys(){const e=this.lodInfo;for(const{row:t,colFrom:i,colTo:s}of this.spans)for(let o=i;o<=s;o++){const r=e.getWorldForColumn(o);yield new q(e.level,t,e.normalizeCol(o),r)}}forEach(e,t){const{spans:i,lodInfo:s}=this,{level:o}=s;if(i.length!==0)for(const{row:r,colFrom:l,colTo:n}of i)for(let h=l;h<=n;h++)e.call(t,o,r,s.normalizeCol(h),s.getWorldForColumn(h))}}V.pool=new D(V);let A=class{constructor(e,t,i){this.row=e,this.colFrom=t,this.colTo=i}};const f=new q("0/0/0/0");class Y{static create(e,t){e[1]>t[1]&&([e,t]=[t,e]);const[i,s]=e,[o,r]=t,l=o-i,n=r-s,h=n!==0?l/n:0,a=(Math.ceil(s)-s)*h,u=(Math.floor(s)-s)*h;return new Y(i,Math.floor(s),Math.ceil(r),h,l<0?a:u,l<0?u:a,l<0?o:i,l<0?i:o)}constructor(e,t,i,s,o,r,l,n){this.x=e,this.ymin=t,this.ymax=i,this.invM=s,this.leftAdjust=o,this.rightAdjust=r,this.leftBound=l,this.rightBound=n}incrRow(){this.x+=this.invM}getLeftCol(){return Math.max(this.x+this.leftAdjust,this.leftBound)}getRightCol(){return Math.min(this.x+this.rightAdjust,this.rightBound)}}const I=[[0,0],[0,0],[0,0],[0,0]],oe=1e-6;let de=class{constructor(e,t=null,i=e.lods[0].level,s=e.lods[e.lods.length-1].level){this.tileInfo=e,this.fullExtent=t,this.scales=[],this._infoByScale={},this._infoByLevel={};const o=e.lods.filter(l=>l.level>=i&&l.level<=s);this.minScale=o[0].scale,this.maxScale=o[o.length-1].scale;const r=this._lodInfos=o.map(l=>se.create(e,l,t));o.forEach((l,n)=>{this._infoByLevel[l.level]=r[n],this._infoByScale[l.scale]=r[n],this.scales[n]=l.scale},this),this._wrap=e.isWrappable}get spatialReference(){return this.tileInfo.spatialReference}getLODInfoAt(e){return this._infoByLevel[typeof e=="number"?e:e.level]}getTileBounds(e,t,i=!1){f.set(t);const s=this._infoByLevel[f.level];return s?s.getTileBounds(e,f,i):e}getTileCoords(e,t,i=!1){f.set(t);const s=this._infoByLevel[f.level];return s?s.getTileCoords(e,f,i):e}getTileCoverage(e,t=192,i=!0,s="closest"){if(!i&&(e.scale>this.minScale||e.scale<this.maxScale))return null;const o=s==="closest"?this.getClosestInfoForScale(e.scale):this.getSmallestInfoForScale(e.scale),r=V.pool.acquire(o),l=this._wrap;let n,h,a,u=1/0,d=-1/0;const _=r.spans;I[0][0]=I[0][1]=I[1][1]=I[3][0]=-t,I[1][0]=I[2][0]=e.size[0]+t,I[2][1]=I[3][1]=e.size[1]+t;for(const c of I)e.toMap(c,c),c[0]=o.getColumnForX(c[0]),c[1]=o.getRowForY(c[1]);const w=[];let g=3;for(let c=0;c<4;c++){if(I[c][1]===I[g][1]){g=c;continue}const m=Y.create(I[c],I[g]);u=Math.min(m.ymin,u),d=Math.max(m.ymax,d),w[m.ymin]===void 0&&(w[m.ymin]=[]),w[m.ymin].push(m),g=c}if(u==null||d==null||d-u>100)return null;let v=[];for(n=u;n<d;){w[n]!=null&&(v=v.concat(w[n])),h=1/0,a=-1/0;for(let c=v.length-1;c>=0;c--){const m=v[c];h=Math.min(h,m.getLeftCol()),a=Math.max(a,m.getRightCol())}if(h=Math.floor(h),a=Math.floor(a),n>=o.first[1]&&n<=o.last[1])if(l)if(o.size[0]<o.worldSize[0]){const c=Math.floor(a/o.worldSize[0]);for(let m=Math.floor(h/o.worldSize[0]);m<=c;m++)_.push(new A(n,Math.max(o.getFirstColumnForWorld(m),h),Math.min(o.getLastColumnForWorld(m),a)))}else _.push(new A(n,h,a));else h>o.last[0]||a<o.first[0]||(h=Math.max(h,o.first[0]),a=Math.min(a,o.last[0]),_.push(new A(n,h,a)));n+=1;for(let c=v.length-1;c>=0;c--){const m=v[c];m.ymax>=n?m.incrRow():v.splice(c,1)}}return r}getTileParentId(e){f.set(e);const t=this._infoByLevel[f.level],i=this._lodInfos.indexOf(t)-1;return i<0?null:(this._getTileIdAtLOD(f,this._lodInfos[i],f),f.id)}getTileResolution(e){const t=this._infoByLevel[typeof e=="object"?e.level:e];return t?t.resolution:-1}getTileScale(e){const t=this._infoByLevel[e.level];return t?t.scale:-1}intersects(e,t){f.set(t);const i=this._infoByLevel[f.level],s=e.lodInfo;if(s.resolution>i.resolution){this._getTileIdAtLOD(f,s,f);const r=s.denormalizeCol(f.col,f.world);for(const l of e.spans)if(l.row===f.row&&l.colFrom<=r&&l.colTo>=r)return!0}if(s.resolution<i.resolution){const[r,l,n,h]=e.spans.reduce((g,v)=>(g[0]=Math.min(g[0],v.row),g[1]=Math.max(g[1],v.row),g[2]=Math.min(g[2],v.colFrom),g[3]=Math.max(g[3],v.colTo),g),[1/0,-1/0,1/0,-1/0]),a=i.denormalizeCol(f.col,f.world),u=s.getColumnForX(i.getXForColumn(a)),d=s.getRowForY(i.getYForRow(f.row)),_=s.getColumnForX(i.getXForColumn(a+1))-1,w=s.getRowForY(i.getYForRow(f.row+1))-1;return!(u>h||_<n||d>l||w<r)}const o=s.denormalizeCol(f.col,f.world);return e.spans.some(r=>r.row===f.row&&r.colFrom<=o&&r.colTo>=o)}normalizeBounds(e,t,i){if(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],this._wrap){const s=E(this.tileInfo.spatialReference),o=-i*(s.valid[1]-s.valid[0]);e[0]+=o,e[2]+=o}return e}getSmallestInfoForScale(e){const t=this.scales;if(this._infoByScale[e])return this._infoByScale[e];if(e>t[0])return this._infoByScale[t[0]];for(let i=1;i<t.length-1;i++)if(e>t[i]+oe)return this._infoByScale[t[i-1]];return this._infoByScale[t[t.length-1]]}getClosestInfoForScale(e){const t=this.scales;return this._infoByScale[e]||(e=t.reduce((i,s)=>Math.abs(s-e)<Math.abs(i-e)?s:i,t[0])),this._infoByScale[e]}scaleToLevel(e){const t=this.scales;if(this._infoByScale[e])return this._infoByScale[e].level;for(let i=t.length-1;i>=0;i--)if(e<t[i])return i===t.length-1?this._infoByScale[t[t.length-1]].level:this._infoByScale[t[i]].level+(t[i]-e)/(t[i]-t[i+1]);return this._infoByScale[t[0]].level}scaleToZoom(e){return this.tileInfo.scaleToZoom(e)}zoomToScale(e){return this.tileInfo.zoomToScale(e)}_getTileIdAtLOD(e,t,i){const s=this._infoByLevel[i.level];return e.set(i),t.resolution<s.resolution?null:(t.resolution===s.resolution||(e.level=t.level,e.col=Math.floor(i.col*s.resolution/t.resolution+.01),e.row=Math.floor(i.row*s.resolution/t.resolution+.01)),e)}};const N=[0,0];let F=class extends Z{constructor(e){super(e),this._keyToItem=new Map,this._tilesByScale=new Map,this.concurrency=6}initialize(){const{concurrency:e,process:t,scheduler:i,priority:s}=this;this._queue=new ee({concurrency:e,scheduler:i,priority:s,process:(o,r)=>{const l=this._keyToItem.get(o);return t(l,{signal:r})},peeker:o=>this._peek(o)})}destroy(){this.clear(),this._queue=Q(this._queue)}get length(){return this._queue?this._queue.length:0}abort(e){const t=typeof e=="string"?e:e.id;this._queue.abort(t)}clear(){this._queue.clear(),this._keyToItem.clear(),this._tilesByScale.clear()}has(e){return typeof e=="string"?this._keyToItem.has(e):this._keyToItem.has(e.id)}pause(){this._queue.pause()}push(e){const t=e.key.id;if(this._queue.has(t))return this._queue.get(t);const i=this._queue.push(t),s=this.tileInfoView.getTileScale(e.key),o=G(this._tilesByScale,s,()=>new Set),r=()=>{o.delete(e.key),o.size===0&&this._tilesByScale.delete(s),this._keyToItem.delete(t)};return o.add(e.key),this._keyToItem.set(t,e),i.then(r,r),i}reset(){this._queue.reset()}resume(){this._queue.resume()}_peek(e){if(!this.state)return e.values().next().value;const t=new Set;for(const r of e)t.add(this._keyToItem.get(r).key);const i=this.state.scale;let s,o=Number.POSITIVE_INFINITY;for(const[r,l]of this._tilesByScale)if(H(l,n=>t.has(n))){const n=Math.abs(r-i);n<o&&(s=l,o=n)}return this._getClosestTileKey(s,e).id}_getClosestTileKey(e,t){const i=this.tileInfoView,s=this.state.center;let o,r=Number.POSITIVE_INFINITY;for(const l of e)if(t.has(l.id)){i.getTileCoords(N,l);const n=U(N,s);n<r&&(r=n,o=l)}return o}};B([R({constructOnly:!0})],F.prototype,"concurrency",void 0),B([R({constructOnly:!0})],F.prototype,"priority",void 0),B([R({constructOnly:!0})],F.prototype,"process",void 0),B([R({constructOnly:!0})],F.prototype,"scheduler",void 0),B([R()],F.prototype,"state",void 0),B([R({constructOnly:!0})],F.prototype,"tileInfoView",void 0),F=B([J("esri.views.2d.tiling.TileQueue")],F);const ye=F;class le{constructor(e,t,i){this.maxSize=e,this._tileInfoView=t,this._removedFunc=i,this._tilePerId=new Map,this._tileKeysPerLevel=[]}clear(){this._tilePerId.clear(),this._tileKeysPerLevel=[]}has(e){return this._tilePerId.has(e)}get(e){return this._tilePerId.get(e)}pop(e){const t=this._tilePerId.get(e);if(!t)return;const i=t.key.level,s=this._tileKeysPerLevel[i];W(this._tilePerId,e);for(let o=0;o<s.length;o++)if(s[o].id===e){s.splice(o,1);break}return t.visible=!0,t}add(e){e.visible=!1;const t=e.key,i=t.id;if(this._tilePerId.has(i))return;this._tilePerId.set(i,e);const s=t.level;this._tileKeysPerLevel[s]||(this._tileKeysPerLevel[s]=[]),this._tileKeysPerLevel[s].push(t)}prune(e,t,i){let s=this._tilePerId.size;if(s<=this.maxSize)return;let o=this._tileKeysPerLevel.length-1;for(;s>this.maxSize&&o>=0;)o!==e&&(s=this._pruneAroundCenterTile(s,t,i,o)),o--;s>this.maxSize&&(s=this._pruneAroundCenterTile(s,t,i,e))}_pruneAroundCenterTile(e,t,i,s){const o=this._tileKeysPerLevel[s];if(!o||o.length===0)return e;const{size:r,origin:l}=this._tileInfoView.tileInfo,n=i*r[0],h=i*r[1],a=[0,0],u=[0,0];for(o.sort((d,_)=>(a[0]=l.x+n*(d.col+.5),a[1]=l.y-h*(d.row+.5),u[0]=l.x+n*(_.col+.5),u[1]=l.y-h*(_.row+.5),K(a,t)-K(u,t)));o.length>0;){const d=o.pop();if(this._removeTile(d.id),--e===this.maxSize)break}return e}_removeTile(e){const t=this._tilePerId.get(e);this._removedFunc&&t&&this._removedFunc(t),W(this._tilePerId,e)}}function W(y,e){y.delete(e)}const k=new q(0,0,0,0),x=new Map,L=[],O=[];class pe{constructor(e){this._previousScale=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.coveragePolicy="closest",this.resampling=!0,this.tileIndex=new Map,this.tiles=[],this.buffer=192,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,e.resampling!=null&&(this.resampling=e.resampling),e.cachePolicy&&(this.cachePolicy=e.cachePolicy),e.coveragePolicy&&(this.coveragePolicy=e.coveragePolicy),e.buffer!=null&&(this.buffer=e.buffer),e.cacheSize&&(this._tileCache=new le(e.cacheSize,this.tileInfoView,t=>{this.releaseTile(t)}))}destroy(){this.tileIndex.clear()}update(e){var c,m;const{resampling:t,tileIndex:i}=this,{scale:s,center:o,resolution:r}=e.state,{minScale:l,maxScale:n}=this.tileInfoView,h=!e.stationary&&s>this._previousScale;if(this._previousScale=s,!t&&(s>l||s<n))return this.tiles.length=0,void this.clear();const a=this.tileInfoView.getTileCoverage(e.state,this.buffer,this.resampling,this.coveragePolicy);if(!a)return this.tiles.length=0,void this.clear();const{spans:u,lodInfo:d}=a,{level:_}=d;this.tiles.length=0,i.forEach(p=>p.visible=!0);let w=0,g=0;if(u.length>0)for(const{row:p,colFrom:M,colTo:$}of u)for(let z=M;z<=$;z++){w++;const S=k.set(_,p,d.normalizeCol(z),d.getWorldForColumn(z)).id;let C=i.get(S);if(C)C.isReady?(x.set(S,C),g++):h||this._addParentTile(S,x);else{if((c=this._tileCache)!=null&&c.has(S)){if(C=this._tileCache.pop(S),this.tileIndex.set(S,C),C.isReady){x.set(S,C),g++;continue}}else C=this.acquireTile(k),this.tileIndex.set(S,C);h||this._addParentTile(S,x)}}const v=g===w;for(const[p,M]of i){if(x.has(p))continue;k.set(p);const $=this.tileInfoView.intersects(a,k),z=this.cachePolicy==="purge"?k.level!==_:k.level>_;!$||!h&&v?!z&&$||L.push(M):M.isReady?z&&this.cachePolicy==="purge"&&this._hasReadyAncestor(k,_)?L.push(M):O.push(M):z&&L.push(M)}for(const p of O)p.isReady&&x.set(p.key.id,p);for(const p of L)this._tileCache?this._tileCache.add(p):this.releaseTile(p),i.delete(p.key.id);for(const p of x.values())this.tiles.push(p);for(const p of i.values())x.has(p.key.id)||(p.visible=!1);(m=this._tileCache)==null||m.prune(_,o,r),V.pool.release(a),O.length=0,L.length=0,x.clear()}clear(){const{tileIndex:e}=this;for(const t of e.values())this.releaseTile(t);e.clear()}refresh(e){var t;for(const i of this.tileIndex.values())e(i);(t=this._tileCache)==null||t.clear()}updateCacheSize(e){this._tileCache&&(this._tileCache.maxSize=e)}_addParentTile(e,t){var o;let i=e,s=null;for(;i=this.tileInfoView.getTileParentId(i),i;)if(this.tileIndex.has(i)){if(s=this.tileIndex.get(i),s==null?void 0:s.isReady){t.has(s.key.id)||t.set(s.key.id,s);break}}else if((o=this._tileCache)!=null&&o.has(i)&&(s=this._tileCache.pop(i),this.tileIndex.set(i,s),s==null?void 0:s.isReady)){t.has(s.key.id)||t.set(s.key.id,s);break}}_hasReadyAncestor(e,t){const i=X();this.tileInfoView.getTileBounds(i,e,!0);for(const s of this.tileIndex.values())if(s.isReady&&s.key.level>=t&&s.key.level<e.level){const o=X();if(this.tileInfoView.getTileBounds(o,s.key,!0),te(o,i))return!0}return!1}}export{de as h,ye as p,pe as r,V as s};
