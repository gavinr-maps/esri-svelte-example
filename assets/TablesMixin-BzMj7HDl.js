import{n as c}from"./CollectionFlattener-B9CFCLSp.js";import{r as l,m as h,a as p,B as i,S as m}from"./Accessor-BHnuXKD2.js";import{V as u}from"./reactiveUtils-BR0C1Kq4.js";import{n as f}from"./collectionUtils-CbaToa73.js";import{f as b}from"./Layer-C9uQlTBT.js";function A(o){return new c({getCollections:()=>[o.tables,o.layers],getChildrenFunction:s=>{const e=[];return"tables"in s&&e.push(s.tables),"layers"in s&&e.push(s.layers),e},itemFilterFunction:s=>{const e=s.parent;return!!e&&"tables"in e&&e.tables.includes(s)}})}function B(o){for(const s of o.values())s==null||s.destroy();o.clear()}function d(o,s,e){let t,a;if(o)for(let n=0,r=o.length;n<r;n++){if(t=o.at(n),(t==null?void 0:t[s])===e)return t;if((t==null?void 0:t.type)==="group"&&(a=d(t.layers,s,e),a))return a}}const M=o=>{let s=class extends o{constructor(...e){super(...e),this.layers=new u;const t=r=>{r.parent&&"remove"in r.parent&&r.parent.remove(r)},a=r=>{r.parent=this,this.layerAdded(r),r.type!=="elevation"&&r.type!=="base-elevation"||i.getLogger(this).error(`Layer 'title:${r.title}, id:${r.id}' of type '${r.type}' is not supported as an operational layer and will therefore be ignored.`)},n=r=>{r.parent=null,this.layerRemoved(r)};this.addHandles([this.layers.on("before-add",r=>{if(r.item===this)return r.preventDefault(),void i.getLogger(this).error("#add()","Cannot add layer to itself.");t(r.item)}),this.layers.on("after-add",r=>a(r.item)),this.layers.on("after-remove",r=>n(r.item))])}destroy(){const e=this.layers.toArray();for(const t of e)t.destroy();this.layers.destroy()}set layers(e){this._set("layers",f(e,this._get("layers")))}add(e,t){const a=this.layers;if(t=a.getNextIndex(t),e instanceof b){const n=e;n.parent===this?this.reorder(n,t):a.add(n,t)}else m(e)?e.then(n=>{this.destroyed||this.add(n,t)}):i.getLogger(this).error("#add()","The item being added is not a Layer or a Promise that resolves to a Layer.")}addMany(e,t){const a=this.layers;let n=a.getNextIndex(t);e.slice().forEach(r=>{r.parent!==this?(a.add(r,n),n+=1):this.reorder(r,n)})}findLayerById(e){return d(this.layers,"id",e)}findLayerByUid(e){return d(this.layers,"uid",e)}remove(e){return this.layers.remove(e)}removeMany(e){return this.layers.removeMany(e)}removeAll(){return this.layers.removeAll()}reorder(e,t){return this.layers.reorder(e,t)}layerAdded(e){}layerRemoved(e){}};return l([h()],s.prototype,"layers",null),s=l([p("esri.support.LayersMixin")],s),s},g=new Set(["feature","subtype-group"]);function y(o,s,e){if(o)for(let t=0,a=o.length;t<a;t++){const n=o.at(t);if(n[s]===e)return n;if((n==null?void 0:n.type)==="group"){const r=y(n.tables,s,e);if(r)return r}}}const I=o=>{let s=class extends o{constructor(...e){super(...e),this.tables=new u,this.addHandles([this.tables.on("after-add",t=>{const a=t.item;a.parent&&a.parent!==this&&"tables"in a.parent&&a.parent.tables.remove(a),a.parent=this,g.has(a.type)||i.getLogger(this).error(`Layer 'title:${a.title}, id:${a.id}' of type '${a.type}' is not supported as a table and will therefore be ignored.`)}),this.tables.on("after-remove",t=>{t.item.parent=null})])}destroy(){const e=this.tables.toArray();for(const t of e)t.destroy();this.tables.destroy()}set tables(e){this._set("tables",f(e,this._get("tables")))}findTableById(e){return y(this.tables,"id",e)}findTableByUid(e){return y(this.tables,"uid",e)}};return l([h()],s.prototype,"tables",null),s=l([p("esri.support.TablesMixin")],s),s};export{M as a,I as l,B as n,A as t};
