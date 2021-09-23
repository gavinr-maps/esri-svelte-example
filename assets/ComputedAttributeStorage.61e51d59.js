import{c3 as t,c4 as e,c5 as s,c6 as r,q as i,c7 as n,c8 as a,r as o,c9 as h,m as u,v as c,bb as d,ca as l,bo as _,G as p,w as g,cb as f,cc as m,cd as y,bF as x,bI as b,a6 as I}from"./vendor.d0a39f0f.js";import{h as z,t as S}from"./FeatureSetReader.3c31cb94.js";import{N as T,O as A,K as F,c as C,J as w}from"./definitions.e5e12ce7.js";import{H as D}from"./Utils.ea926aef.js";import{n as M,l as k,r as E}from"./visualVariablesUtils.684ffd7c.js";class R extends z{constructor(t,e,s){super(t),this._featureIndex=-1,this._dateFields=new Set,this._geometryType=s,this._features=e}static fromFeatures(e,s,r){const i=t([],e,s,!1,!1,r);for(let t=0;t<i.length;t++)i[t].displayId=e[t].displayId;return R.fromOptimizedFeatures(i,s)}static fromFeatureSet(t,s){const r=e(t,s);return R.fromOptimizedFeatureSet(r)}static fromOptimizedFeatureSet(t){const{features:e,geometryType:s}=t,r=R.fromOptimizedFeatures(e,s);r._exceededTransferLimit=t.exceededTransferLimit,r._transform=t.transform;for(const i of t.fields)"esriFieldTypeDate"===i.type&&r._dateFields.add(i.name);return r}static fromOptimizedFeatures(t,e,s){const r=z.createInstance(),i=new R(r,t,e);return i._transform=s,i}get _current(){return this._features[this._featureIndex]}get geometryType(){return this._geometryType}get hasFeatures(){return!!this._features.length}get hasNext(){return this._featureIndex+1<this._features.length}get exceededTransferLimit(){return this._exceededTransferLimit}get hasZ(){return!1}get hasM(){return!1}removeIds(t){const e=new Set(t);this._features=this._features.filter((t=>!e.has(t.objectId)))}append(t){for(const e of t)this._features.push(e)}getSize(){return this._features.length}getCursor(){return this.copy()}getQuantizationTransform(){return this._transform}getAttributeHash(){let t="";for(const e in this._current.attributes)t+=this._current.attributes[e];return t}getIndex(){return this._featureIndex}setIndex(t){this._featureIndex=t}getObjectId(){return this._current.objectId}getDisplayId(){return this._current.displayId}setDisplayId(t){this._current.displayId=t}getGroupId(){return this._current.groupId}setGroupId(t){this._current.groupId=t}copy(){const t=new R(this.instance,this._features,this.geometryType);return this.copyInto(t),t}next(){for(;++this._featureIndex<this._features.length&&!this._getExists(););return this._featureIndex<this._features.length}readLegacyFeature(){return s(this._current,this.geometryType,this.hasZ,this.hasM)}readOptimizedFeature(){return this._current}readLegacyPointGeometry(){return this.readGeometry()?{x:this.getX(),y:this.getY()}:null}readLegacyGeometry(){const t=this.readGeometry();return r(t,this.geometryType,this.hasZ,this.hasM)}readLegacyCentroid(){const t=this.readCentroid();return i(t)?null:{x:t.coords[0]*this._sx+this._tx,y:t.coords[1]*this._sy+this._ty}}readGeometryArea(){return n(this._current)?a(this._current.geometry,2):0}readUnquantizedGeometry(){const t=this.readGeometry();if("esriGeometryPoint"===this.geometryType||!t)return t;const e=t.clone();return function({coords:t,lengths:e}){let s=0;for(const r of e){for(let e=1;e<r;e++)t[2*(s+e)]+=t[2*(s+e)-2],t[2*(s+e)+1]+=t[2*(s+e)-1];s+=r}}(e),e}readHydratedGeometry(){const t=this._current.geometry;if(i(t))return null;const e=t.clone();return o(this._transform)&&h(e,e,this.hasZ,this.hasM,this._transform),e}getXHydrated(){if(!n(this._current))return 0;const t=this._current.geometry.coords[0],e=this.getQuantizationTransform();return i(e)?t:t*e.scale[0]+e.translate[0]}getYHydrated(){if(!n(this._current))return 0;const t=this._current.geometry.coords[1],e=this.getQuantizationTransform();return i(e)?t:e.translate[1]-t*e.scale[1]}getX(){return n(this._current)?this._current.geometry.coords[0]*this._sx+this._tx:0}getY(){return n(this._current)?this._current.geometry.coords[1]*this._sy+this._ty:0}readGeometry(){if(!n(this._current))return null;const t=this._current.geometry.clone();if(t.isPoint)return t.coords[0]=t.coords[0]*this._sx+this._tx,t.coords[1]=t.coords[1]*this._sy+this._ty,t;let e=0;for(const s of t.lengths)t.coords[2*e]=t.coords[2*e]*this._sx+this._tx,t.coords[2*e+1]=t.coords[2*e+1]*this._sy+this._ty,e+=s;return t}readCentroid(){if(!n(this._current))return null;if(!this._current.centroid){const t=this._computeCentroid();if(!t)return null;t.coords[0]=(t.coords[0]-this._tx)/this._sx,t.coords[1]=(t.coords[1]-this._ty)/this._sy,this._current.centroid=t}const t=this._current.centroid.clone();return t.coords[0]=t.coords[0]*this._sx+this._tx,t.coords[1]=t.coords[1]*this._sx+this._ty,t}_readAttribute(t,e){const s=this._current.attributes[t];if(void 0!==s)return null!=s&&e&&this._dateFields.has(t)?new Date(s):s;const r=this.readAttributes(),i=t.toLocaleLowerCase().trim();for(const n in r)if(n.toLocaleLowerCase().trim()===i){const t=this._current.attributes[n];return null!=t&&e&&this._dateFields.has(n)?new Date(t):t}}copyInto(t){super.copyInto(t),t._featureIndex=this._featureIndex,t._transform=this._transform,t._dateFields=this._dateFields}_readAttributes(){return this._current.attributes}}const U=u.getLogger("esri.views.layers.2d.features.support.AttributeStore"),B=M(k,U),v=t=>(2147483648&t)>>>31,O=t=>2147483647&t;function G(t){return 1===v(t)}const N={sharedArrayBuffer:c("esri-shared-array-buffer"),atomics:c("esri-atomics")};function P(t,e){return s=>e(t(s))}class L{constructor(t,e,s,r){this.size=0,this.texelSize=4;const{pixelType:i,layout:n,textureOnly:a}=r;this.textureOnly=a||!1,this.pixelType=i,this._ctype=e,this.layout=n,this._resetRange(),this._shared=t,this.size=s,a||(this.data=this._initData(i,s,t,e))}get buffer(){return x(this.data,(t=>t.buffer))}unsetComponentAllTexels(t,e){const s=b(this.data);for(let r=0;r<this.size*this.size;r++)s[r*this.texelSize+t]&=~e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponentAllTexels(t,e){const s=b(this.data);for(let r=0;r<this.size*this.size;r++)s[r*this.texelSize+t]|=255&e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponent(t,e,s){const r=b(this.data);for(const i of s)r[i*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i)}setComponentTexel(t,e,s){b(this.data)[s*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}unsetComponentTexel(t,e,s){b(this.data)[s*this.texelSize+t]&=~e,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}getData(t,e){const s=O(t);return b(this.data)[s*this.texelSize+e]}setData(t,e,s){const r=O(t),i=1<<e;0!=(this.layout&i)?(this.data[r*this.texelSize+e]=s,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r)):U.error("mapview-attributes-store","Tried to set a value for a texel's readonly component")}lock(){5121===this.pixelType&&this._shared&&N.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,1)}unlock(){5121===this.pixelType&&this._shared&&N.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,0)}expand(t){if(this.size=t,!this.textureOnly){const e=this._initData(this.pixelType,t,this._shared,this._ctype),s=b(this.data);e.set(s),this.data=e}}toMessage(){const t=this.dirtyStart,e=this.dirtyEnd,s=this.texelSize;if(t>e)return null;this._resetRange();const r=!(this._shared||"local"===this._ctype),i=this.pixelType,n=this.layout,a=b(this.data);return{start:t,end:e,data:r&&a.slice(t*s,(e+1)*s)||null,pixelType:i,layout:n}}_initData(t,e,s,r){const i=s&&"local"!==r?SharedArrayBuffer:ArrayBuffer,n=D(t),a=new n(new i(e*e*4*n.BYTES_PER_ELEMENT));for(let o=0;o<a.length;o+=4)a[o+1]=255;return a}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}}class H{constructor(t,e){this._client=t,this.config=e,this._attributeComputeMap=new Map,this._blocks=new Array,this._filters=new Array(T),this._targetType=0,this._abortController=d(),this._hasScaleExpr=!1,this._size=32,this._idsToHighlight=new Set;const s=e.supportsTextureFloat?5126:5121;B(`Creating AttributeStore ${N.sharedArrayBuffer?"with":"without"} shared memory`),this._blockDescriptors=[{pixelType:5121,layout:1},{pixelType:5121,layout:15,textureOnly:!0},{pixelType:s,layout:15},{pixelType:s,layout:15}],this._blocks=this._blockDescriptors.map((()=>null))}destroy(){this._abortController.abort()}get hasScaleExpr(){return this._hasScaleExpr}get _signal(){return this._abortController.signal}update(t,e){this.config=e;const s=e.schema.processors[0].storage,r=l(this._schema,s);if((t.targets.feature||t.targets.aggregate)&&(t.storage.data=!0),r&&(c("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:",r),t.storage.data=!0,this._schema=s,this._attributeComputeMap.clear(),!i(s))){switch(s.target){case"feature":this._targetType=0;break;case"aggregate":this._targetType=1}if("subtype"===s.type)for(const t in s.mapping){const e=s.mapping[t];if(o(e))for(const t of e.mapping)this._bindAttribute(t)}else for(const t of s.mapping)this._bindAttribute(t)}}onTileData(t,e){if(i(e.addOrUpdate))return;const s=e.addOrUpdate.getCursor();for(;s.next();){const t=s.getDisplayId();this.setAttributeData(t,s)}}invalidateResources(){this._createResourcesPromise=null,this._abortController.abort(),this._abortController=d()}async setHighlight(t,e){const s=this._getBlock(0),r=e.map((t=>O(t)));s.lock(),s.unsetComponentAllTexels(0,1),s.setComponent(0,1,r),s.unlock(),this._idsToHighlight.clear();for(const i of t)this._idsToHighlight.add(i);await this.sendUpdates()}async updateFilters(t,e){const{config:s,service:r,spatialReference:i}=e,{filters:n}=s,a=n.map(((t,e)=>this._updateFilter(t,e,r,i)));(await Promise.all(a)).some((t=>t))&&(t.storage.filters=!0,c("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:","Filters changed"))}setData(t,e,s,r){const i=O(t);this._ensureSizeForTexel(i),this._getBlock(e).setData(t,s,r)}getData(t,e,s){return this._getBlock(e).getData(t,s)}getHighlightFlag(t){return this._idsToHighlight.has(t)?A:0}unsetAttributeData(t){const e=O(t);this._getBlock(0).setData(e,0,0)}setAttributeData(t,e){const s=O(t);if(this._ensureSizeForTexel(s),this._getBlock(0).setData(s,0,this.getFilterFlags(e)),this._targetType!==v(t))return;const r=this._attributeComputeMap,i=this.config.supportsTextureFloat?1:2;r.size&&r.forEach(((t,r)=>{const n=r*i%4,a=Math.floor(r*i/4),o=this._getBlock(a+F),h=t(e);if(this.config.supportsTextureFloat)o.setData(s,n,h);else if(h===C)o.setData(s,n,255),o.setData(s,n+1,255);else{const t=I(Math.round(h),-32767,32766)+32768,e=255&t,r=(65280&t)>>8;o.setData(s,n,e),o.setData(s,n+1,r)}}))}sendUpdates(){if(this._nextUpdate)return this._nextUpdate.promise;if(this._currUpdate)return this._nextUpdate=_(),this._nextUpdate.promise;const t={blocks:this._blocks.map((t=>o(t)?t.toMessage():null))};return this._currUpdate=this._createResources().then((()=>{const e=()=>{if(this._currUpdate=null,this._nextUpdate){const t=this._nextUpdate;this._nextUpdate=null,this.sendUpdates().then((()=>t.resolve()))}},s=this._client.update(t,this._signal).then(e).catch(e);return this._client.render(this._signal),s})).catch((t=>p(t)?(this._createResourcesPromise=null,this._createResources()):(U.error(new g("mapview-attribute-store","Encountered an error during client update",t)),Promise.resolve()))),this._currUpdate}_ensureSizeForTexel(t){for(;t>=this._size*this._size;)if(this._expand())return}_bindAttribute(t){let e;if(null!=t.fieldIndex)t.normalizationField&&U.warn("mapview-arcade","Ignoring normalizationField specified with an arcade expression which is not supported."),e=e=>e.getComputedNumericAtIndex(t.fieldIndex);else{if(!t.field)return;e=t.normalizationField?e=>{const s=e.readAttribute(t.normalizationField);return s?e.readAttribute(t.field)/s:null}:e=>e.readAttribute(t.field)}t.valueRepresentation&&(e=P(e,(e=>E(e,t.valueRepresentation))));this._attributeComputeMap.set(t.binding,P(e,(t=>null===t||isNaN(t)||t===1/0?C:t)))}_createResources(){if(o(this._createResourcesPromise))return this._createResourcesPromise;this._getBlock(w),B("Initializing AttributeStore");const t={shared:N.sharedArrayBuffer&&!("local"===this._client.type),size:this._size,blocks:f(this._blocks,(t=>({textureOnly:t.textureOnly,buffer:t.buffer,pixelType:t.pixelType})))},e=this._client.initialize(t,this._signal).catch((t=>{p(t)?this._createResourcesPromise=null:U.error(new g("mapview-attribute-store","Encountered an error during client initialization",t))}));return this._createResourcesPromise=e,e.then((()=>i(this._createResourcesPromise)?this._createResources():void 0)),e}_getBlock(t){const e=this._blocks[t];if(o(e))return e;B(`Initializing AttributeBlock at index ${t}`);const s=N.sharedArrayBuffer,r=this._client.type,i=new L(s,r,this._size,this._blockDescriptors[t]);return this._blocks[t]=i,this._createResourcesPromise=null,i}_expand(){if(this._size<this.config.maxTextureSize){const t=this._size<<=1;return B("Expanding block size to",t,this._blocks),m(this._blocks,(e=>e.expand(t))),this._createResourcesPromise=null,this._size=t,0}return U.error(new g("mapview-limitations","Maximum number of onscreen features exceeded.")),-1}async _updateFilter(t,e,s,r){const n=this._filters[e],a=o(n)&&n.hash;if(!n&&!t)return!1;if(a===JSON.stringify(t))return!1;if(i(t)){if(!n)return!1;const t=1<<e+1,s=this._getBlock(0);return this._filters[e]=null,s.setComponentAllTexels(0,t),this.sendUpdates(),!0}const h=await this._getFilter(e,s);return await h.update(t,r),!0}async _getFilter(t,e){const s=this._filters[t];if(o(s))return s;const{default:r}=await import("./FeatureFilter.940ab396.js"),i=new r({geometryType:e.geometryType,hasM:!1,hasZ:!1,timeInfo:e.timeInfo,fieldsIndex:new y(e.fields)});return this._filters[t]=i,i}isVisible(t){return!!(2&this._getBlock(0).getData(t,0))}getFilterFlags(t){let e=0;const s=(t=>1===v(t)?254:255)(t.getDisplayId());for(let n=0;n<this._filters.length;n++){const r=!!(s&1<<n),a=this._filters[n];e|=(!r||i(a)||a.check(t)?1:0)<<n}let r=0;if(this._idsToHighlight.size){const e=t.getObjectId();r=this.getHighlightFlag(e)}return e<<1|r}}class j{constructor(){this._freeIds=[],this._idCounter=1}createId(t=!1){return function(t,e){return((e?2147483648:0)|t)>>>0}(this._getFreeId(),t)}releaseId(t){this._freeIds.push(t)}_getFreeId(){return this._freeIds.length?this._freeIds.pop():this._idCounter++}}function Y(t,e,s){if(!(t.length>e))for(;t.length<=e;)t.push(s)}const X=2147483647;class Z{constructor(){this._numerics=[],this._strings=[],this._idGenerator=new j,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[]}createBitset(){const t=this._bitsets.length;return this._bitsets.push(S.create(this._allocatedSize,X)),t+1}getBitset(t){return this._bitsets[t-1]}_expand(){this._allocatedSize<<=1;for(const t of this._bitsets)t.resize(this._allocatedSize)}_ensureNumeric(t,e){this._numerics[t]||(this._numerics[t]=[]),Y(this._numerics[t],e,0)}_ensureInstanceId(t){Y(this._instanceIds,t,0)}_ensureString(t,e){this._strings[t]||(this._strings[t]=[]),Y(this._strings[t],e,null)}createDisplayId(t=!1){const e=this._idGenerator.createId();return e>this._allocatedSize&&this._expand(),((t,e)=>((e?2147483648:0)|t)>>>0)(e,t)}releaseDisplayId(t){for(const e of this._bitsets)e.unset(t);return this._idGenerator.releaseId(t&X)}getComputedNumeric(t,e){return this.getComputedNumericAtIndex(t&X,0)}setComputedNumeric(t,e,s){return this.setComputedNumericAtIndex(t&X,s,0)}getComputedString(t,e){return this.getComputedStringAtIndex(t&X,0)}setComputedString(t,e,s){return this.setComputedStringAtIndex(t&X,0,s)}getComputedNumericAtIndex(t,e){const s=t&X;return this._ensureNumeric(e,s),this._numerics[e][s]}setComputedNumericAtIndex(t,e,s){const r=t&X;this._ensureNumeric(e,r),this._numerics[e][r]=s}getInstanceId(t){const e=t&X;return this._ensureInstanceId(e),this._instanceIds[e]}setInstanceId(t,e){const s=t&X;this._ensureInstanceId(s),this._instanceIds[s]=e}getComputedStringAtIndex(t,e){const s=t&X;return this._ensureString(e,s),this._strings[e][s]}setComputedStringAtIndex(t,e,s){const r=t&X;this._ensureString(e,r),this._strings[e][r]=s}getXMin(t){return this._bounds[4*(t&X)]}getYMin(t){return this._bounds[4*(t&X)+1]}getXMax(t){return this._bounds[4*(t&X)+2]}getYMax(t){return this._bounds[4*(t&X)+3]}setBounds(t,e){const s=e.readHydratedGeometry();if(!s||!s.coords.length)return!1;let r=1/0,i=1/0,n=-1/0,a=-1/0;s.forEachVertex(((t,e)=>{r=Math.min(r,t),i=Math.min(i,e),n=Math.max(n,t),a=Math.max(a,e)}));const o=t&X;return Y(this._bounds,4*o+4,0),this._bounds[4*o]=r,this._bounds[4*o+1]=i,this._bounds[4*o+2]=n,this._bounds[4*o+3]=a,!0}}export{O as M,H as O,R as d,Z as u,G as v};
