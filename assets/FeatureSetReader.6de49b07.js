import{r as t,c1 as e,ck as s,m as r,P as i,aU as n}from"./vendor.5b1a85aa.js";import{t as h}from"./centroid.f7592ee4.js";class o{constructor(t,e){this._mask=0,this._buf=t,this._mask=e}static fromBuffer(t,e){return new o(t,e)}static create(t,e=4294967295){const s=new Uint32Array(Math.ceil(t/32));return new o(s,e)}_getIndex(t){return Math.floor(t/32)}has(t){const e=this._mask&t;return!!(this._buf[this._getIndex(e)]&1<<e%32)}hasRange(t,e){let s=t,r=e;for(;s%32&&s!==r;){if(this.has(s))return!0;s++}for(;r%32&&s!==r;){if(this.has(s))return!0;r--}if(s===r)return!1;for(let i=s/32;i!==r/32;i++)if(this._buf[i])return!0;return!1}set(t){const e=this._mask&t,s=this._getIndex(e),r=1<<e%32;this._buf[s]|=r}setRange(t,e){let s=t,r=e;for(;s%32&&s!==r;)this.set(s++);for(;r%32&&s!==r;)this.set(r--);if(s!==r)for(let i=s/32;i!==r/32;i++)this._buf[i]=4294967295}unset(t){const e=this._mask&t,s=this._getIndex(e),r=1<<e%32;this._buf[s]&=4294967295^r}resize(t){const e=this._buf,s=new Uint32Array(Math.ceil(t/32));s.set(e),this._buf=s}or(t){for(let e=0;e<this._buf.length;e++)this._buf[e]|=t._buf[e];return this}and(t){for(let e=0;e<this._buf.length;e++)this._buf[e]&=t._buf[e];return this}xor(t){for(let e=0;e<this._buf.length;e++)this._buf[e]^=t._buf[e];return this}ior(t){for(let e=0;e<this._buf.length;e++)this._buf[e]|=~t._buf[e];return this}iand(t){for(let e=0;e<this._buf.length;e++)this._buf[e]&=~t._buf[e];return this}ixor(t){for(let e=0;e<this._buf.length;e++)this._buf[e]^=~t._buf[e];return this}any(){for(let t=0;t<this._buf.length;t++)if(this._buf[t])return!0;return!1}copy(t){for(let e=0;e<this._buf.length;e++)this._buf[e]=t._buf[e];return this}clone(){return new o(this._buf.slice(),this._mask)}clear(){for(let t=0;t<this._buf.length;t++)this._buf[t]=0}forEachSet(t){for(let e=0;e<this._buf.length;e++){let s=this._buf[e],r=32*e;if(s)for(;s;)1&s&&t(r),s>>>=1,r++}}countSet(){let t=0;return this.forEachSet((e=>{t++})),t}}let u=0;class a{constructor(t){this.type="FeatureSetReader",this.seen=!1,this.instance=0,this._tx=0,this._ty=0,this._sx=1,this._sy=1,this._deleted=null,this._joined=[],this._objectIdToIndex=null,this.instance=t}static createInstance(){return u++,u=u>65535?0:u,u}get isEmpty(){return t(this._deleted)&&this._deleted.countSet()===this.getSize()}setArcadeSpatialReference(t){this._arcadeSpatialReference=t}attachStorage(t){this._storage=t}getQuantizationTransform(){throw new Error("Unable to find transform for featureSet")}getStorage(){return this._storage}getComputedNumeric(t){return this.getComputedNumericAtIndex(0)}setComputedNumeric(t,e){return this.setComputedNumericAtIndex(e,0)}getComputedString(t){return this.getComputedStringAtIndex(0)}setComputedString(t,e){return this.setComputedStringAtIndex(0,e)}getComputedNumericAtIndex(t){return this._storage.getComputedNumericAtIndex(this.getDisplayId(),t)}setComputedNumericAtIndex(t,e){this._storage.setComputedNumericAtIndex(this.getDisplayId(),t,e)}getComputedStringAtIndex(t){return this._storage.getComputedStringAtIndex(this.getDisplayId(),t)}setComputedStringAtIndex(t,e){return this._storage.setComputedStringAtIndex(this.getDisplayId(),t,e)}transform(t,e,s,r){const i=this.copy();return i._tx+=t,i._ty+=e,i._sx*=s,i._sy*=r,i}readAttribute(t,e=!1){const s=this._readAttribute(t,e);if(void 0!==s)return s;for(const r of this._joined){r.setIndex(this.getIndex());const s=r._readAttribute(t,e);if(void 0!==s)return s}}readAttributes(){const t=this._readAttributes();for(const e of this._joined){e.setIndex(this.getIndex());const s=e._readAttributes();for(const e of Object.keys(s))t[e]=s[e]}return t}joinAttributes(t){this._joined.push(t)}readArcadeFeature(){return this}geometry(){const t=this.readHydratedGeometry(),r=e(t,this.geometryType,this.hasZ,this.hasM),i=s(r);return i&&(i.spatialReference=this._arcadeSpatialReference),i}field(t){return this.readAttribute(t,!0)}hasField(t){return!0}setField(t,e){}keys(){return[]}castToText(){return""}removeIds(t){if(r(this._objectIdToIndex)){const t=new Map,e=this.getCursor();for(;e.next();)t.set(e.getObjectId(),e.getIndex());this._objectIdToIndex=t}const e=this._objectIdToIndex;for(const s of t)e.has(s)&&this.removeAtIndex(e.get(s))}removeAtIndex(t){r(this._deleted)&&(this._deleted=o.create(this.getSize())),this._deleted.set(t)}*features(){const t=this.getCursor();for(;t.next();)yield t.readOptimizedFeature()}_getExists(){return r(this._deleted)||!this._deleted.has(this.getIndex())}_computeCentroid(){if("esriGeometryPolygon"!==this.geometryType)return null;const t=this.readUnquantizedGeometry();if(!t||t.hasIndeterminateRingOrder)return null;const e=i(this.getQuantizationTransform(),null);return h(new n,t,this.hasM,this.hasZ,e)}copyInto(t){t.seen=this.seen,t._storage=this._storage,t._arcadeSpatialReference=this._arcadeSpatialReference,t._joined=this._joined,t._tx=this._tx,t._ty=this._ty,t._sx=this._sx,t._sy=this._sy,t._deleted=this._deleted,t._objectIdToIndex=this._objectIdToIndex}}export{a as h,o as t};
