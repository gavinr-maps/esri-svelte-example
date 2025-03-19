import{t as f}from"./requestPresets-v9_cUP4i.js";import{s as p}from"./associatedFeatureServiceUtils-Bfw5GA1N.js";import{i as b}from"./fetchService-zLGBmq3X.js";class L{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(e,a){const r=this._serviceMetadatas.get(e);if(r)return r;const s=await f(e,a);return this._serviceMetadatas.set(e,s),s}async fetchItemData(e){const{id:a}=e;if(!a)return null;const{_itemDatas:r}=this;if(r.has(a))return r.get(a);const s=await e.fetchData();return r.set(a,s),s}async fetchCustomParameters(e,a){const r=await this.fetchItemData(e);return r&&typeof r=="object"&&(a?a(r):r.customParameters)||null}}function c(t){const e={id:t.id,name:t.name},a=b(t.type);return a!=="FeatureLayer"&&(e.layerType=a),e}async function w(t,e,a){var r,s,l;if((t==null?void 0:t.layers)==null||(t==null?void 0:t.tables)==null){const u=await a.fetchServiceMetadata(e,{customParameters:(r=o(t))==null?void 0:r.customParameters});(t=t||{}).layers=t.layers||((s=u==null?void 0:u.layers)==null?void 0:s.map(c)),t.tables=t.tables||((l=u==null?void 0:u.tables)==null?void 0:l.map(c))}return t}function o(t){if(!t)return null;const{layers:e,tables:a}=t;return e!=null&&e.length?e[0]:a!=null&&a.length?a[0]:null}function S(t,e){return e==null?null:[...t.layers||[],...t.tables||[]].find(a=>a.id===e)}function I(t,e){return[...t.layers||[],...t.tables||[]].filter(({layerType:a})=>a?e.includes(a):e.includes("ArcGISFeatureLayer"))}function v(t){var e,a;return(((e=t==null?void 0:t.layers)==null?void 0:e.length)??0)+(((a=t==null?void 0:t.tables)==null?void 0:a.length)??0)}function M(t){switch(t){case"catalog":return["CatalogLayer"];case"feature":return["ArcGISFeatureLayer"];case"oriented-imagery":return["OrientedImageryLayer"];case"subtype-group":return["SubtypeGroupLayer","SubtypeGroupTable"]}return null}function P(t){switch(t){case"CatalogLayer":return"CatalogLayer";case"OrientedImageryLayer":return"OrientedImageryLayer";case"SubtypeGroupLayer":case"SubtypeGroupTable":return"SubtypeGroupLayer"}return"FeatureLayer"}async function G(t,e,a){var l,u,y,m;if(!(t!=null&&t.url))return e??{};if(e??(e={}),!e.layers){const n=await a.fetchServiceMetadata(t.url);e.layers=(l=n.layers)==null?void 0:l.map(c)}const{serverUrl:r,portalItem:s}=await p(t.url,{sceneLayerItem:t,customParameters:(u=o(e))==null?void 0:u.customParameters}).catch(()=>({serverUrl:null,portalItem:null}));if(r==null)return e.tables=[],e;if(!e.tables&&s){const n=await s.fetchData().catch(()=>null);if(n!=null&&n.tables)e.tables=n.tables.map(c);else{const i=await a.fetchServiceMetadata(r,{customParameters:(y=o(n))==null?void 0:y.customParameters}).catch(()=>null);e.tables=(m=i==null?void 0:i.tables)==null?void 0:m.map(c)}}if(e.tables)for(const n of e.tables)n.url=`${r}/${n.id}`;return e}export{w as a,M as c,L as e,P as i,o as l,I as n,G as o,S as s,c as t,v as u};
