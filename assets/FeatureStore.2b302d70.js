import{v as e,dA as t,aO as s,P as d,aA as i,dE as o,r as n,dF as r,m as a,w as h,q as u,dG as _}from"./vendor.d0a39f0f.js";import{h as m}from"./PooledRBush.4b631a20.js";import{e as l}from"./centroid.1404a86d.js";const I={minX:0,minY:0,maxX:0,maxY:0};class c{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new m(9,e("csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach(((s,d)=>{e[t++]=d})),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((e=>this._idByBounds.has(e)))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex(),function(e,t,s){I.minX=t[0],I.minY=t[1],I.maxX=t[2],I.maxY=t[3],e.search(I,s)}(this._index,e,(e=>t(this._idByBounds.get(e))))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}const g={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,s)=>new t(s,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>(e.centroid||(e.centroid=l(new s,e.geometry,t.hasZ,t.hasM)),e.centroid)};class y{constructor(e){this.geometryInfo=e,this._boundsStore=new c,this._featuresById=new Map,this._markedIds=new Set,this.events=new d,this.featureAdapter=g}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const e=i(o);return this._featuresById.forEach((t=>{const s=this._boundsStore.get(t.objectId);s&&(e[0]=Math.min(s[0],e[0]),e[1]=Math.min(s[1],e[1]),e[2]=Math.max(s[2],e[2]),e[3]=Math.max(s[3],e[3]))})),e}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{n(t.geometry)&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t,s){for(const d of e){const e=this._boundsStore.get(d.objectId);e&&t(r(s,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach(((t,s)=>{this._markedIds.has(s)||(e=!0,this._remove(t))})),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void a.getLogger("esri.layers.graphics.data.FeatureStore").error(new h("featurestore:invalid-feature","feature id is missing",{feature:e}));const s=this._featuresById.get(t);let d;if(this._markedIds.add(t),s?(e.displayId=s.displayId,d=this._boundsStore.get(t),this._boundsStore.delete(t)):n(this.onFeatureAdd)&&this.onFeatureAdd(e),u(e.geometry)||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);d=_(n(d)?d:i(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),n(d)&&this._boundsStore.set(t,d),this._featuresById.set(t,e)}_remove(e){return n(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}export{c as e,y as m};
