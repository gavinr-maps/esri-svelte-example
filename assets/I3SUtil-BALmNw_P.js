import"./geometry-D964gYQX.js";import{U as z}from"./assets-C43MgM-v.js";import{a5 as B,a6 as Z,j as H,a7 as Q,b as S,a8 as V}from"./subclass-BZA_h8Db.js";import{h as X}from"./mat4-GpOFENPA.js";import{e as A}from"./mat4f64-Dk4dwAN8.js";import{o as Y,E as I,s as ee}from"./vec32-Dvg_eL9J.js";import{t as te,n as b}from"./vec3f64-BLpZdpfb.js";import{J as re}from"./projection-B971H0Re.js";import{n as O}from"./projectVectorToVector-G2uWGoIb.js";import{b as D,D as W,k as N,E as ne}from"./Polyline-D9YkgmM_.js";import{U as oe}from"./sphere-C77djCO6.js";import{b as ae}from"./Query-5Xpquc1r.js";import{I as se}from"./I3SBinaryReader-D1r70N_w.js";import{i as ie,g as G}from"./Point-Cg0-ChZE.js";import{C as le}from"./computeTranslationToOriginAndRotation-Q27G6TBL.js";import{g as ce,f as ue}from"./edgeUtils-BUKTgPFR.js";import{e as fe,n as _}from"./DecodeSymbolColor.glsl-BPIX0fAF.js";import{I as pe,J as de}from"./orientedBoundingBox-DOAJUK5g.js";import{o as L}from"./layerViewUtils-DhFEu8Rd.js";function he(e,t,r,n,o){const a=r==="east-north-up"?te(e):me(e,t,n),s=A();return le(n,a,s,o),s}const P=1,F=5-P;function me(e,t,r){const n=b(),o=e[3],a=2**(Math.ceil(Math.log(o)*Math.LOG2E/F)*F+P);if(r.isGeographic){const c=a/ie(r).radius*180/Math.PI,l=Math.round(e[1]/c),h=Math.max(-90,Math.min(90,l*c)),f=c/Math.cos((Math.abs(h)-c/2)/180*Math.PI),m=Math.round(e[0]/f)*f;n[0]=m,n[1]=h}else{const c=Math.round(e[0]/a),l=Math.round(e[1]/a);n[0]=c*a,n[1]=l*a}const s=e[2]+t,i=Math.round(s/a);return n[2]=i*a,n}function J(e){return e?parseInt(e.slice(e.lastIndexOf("/")+1),10):void 0}function et(e){var t;if(H("disable-feature:i3s-draco")||!e)return!1;for(const r of e)for(const n of r.geometryBuffers)if(((t=n.compressedAttributes)==null?void 0:t.encoding)==="draco")return!0;return!1}function tt(e,t,r,n){r.traverse(t,o=>{const a=o.serviceMbsInIndexSR;return(a!=null&&ye(e,a))!==w.OUTSIDE&&(n(o),!0)})}function rt(e,t,r){let n=0,o=0;for(let a=0;a<t.length&&n<e.length;a++)e[n]===t[a]&&(r(a)&&(e[o]=e[n],o++),n++);e.length=o}function nt(e,t,r){let n=0,o=0;for(;n<r.length;)Q(e,r[n])>=0===t&&(r[o]=r[n],o++),n++;r.length=o}const T=D();function ot(e,t){if(t.rotationScale[1]===0&&t.rotationScale[2]===0&&t.rotationScale[3]===0&&t.rotationScale[5]===0&&t.rotationScale[6]===0&&t.rotationScale[7]===0)return T[0]=(e[0]-t.position[0])/t.rotationScale[0],T[1]=(e[1]-t.position[1])/t.rotationScale[4],T[2]=(e[2]-t.position[0])/t.rotationScale[0],T[3]=(e[3]-t.position[1])/t.rotationScale[4],T}var w;function ye(e,t){const r=t[0],n=t[1],o=t[3],a=e[0]-r,s=r-e[2],i=e[1]-n,c=n-e[3],l=Math.max(a,s,0),h=Math.max(i,c,0),f=l*l+h*h;return f>o*o?w.OUTSIDE:f>0?w.INTERSECTS_CENTER_OUTSIDE:-Math.max(a,s,i,c)>o?w.INSIDE:w.INTERSECTS_CENTER_INSIDE}function ge(e,t,r){const n=[],o=r==null?void 0:r.missingFields,a=r==null?void 0:r.originalFields;for(const s of e){const i=s.toLowerCase();let c=!1;for(const l of t)if(i===l.name.toLowerCase()){n.push(l.name),c=!0,a&&a.push(s);break}!c&&o&&o.push(s)}return n}async function at(e,t,r,n,o,a){if(t.length===0)return[];const s=e.attributeStorageInfo;if(e.associatedLayer!=null)try{return await Se(e.associatedLayer,t,r,n,a)}catch(i){if(e.associatedLayer.loaded)throw i}if(s){const i=be(t,r,o);if(i==null)throw new S("scenelayer:features-not-loaded","Tried to query attributes for unloaded features");const c=e.parsedUrl.path;return(await Promise.all(i.map(l=>we(c,s,l.node,l.indices,n,e.apiKey,e.customParameters,a).then(h=>{for(let f=0;f<l.graphics.length;f++){const m=l.graphics[f],y=h[f];if(m.attributes)for(const u in m.attributes)u in y||(y[u]=m.attributes[u]);m.attributes=y}return l.graphics})))).flat()}throw new S("scenelayer:no-attribute-source","This scene layer does not have a source for attributes available")}function be(e,t,r){const n=new Map,o=[],a=r();for(const s of e){const i=s.attributes[t];for(let c=0;c<a.length;c++){const l=a[c],h=l.featureIds.indexOf(i);if(h>=0){let f=n.get(l.node);f||(f={node:l.node,indices:[],graphics:[]},o.push(f),n.set(l.node,f)),f.indices.push(h),f.graphics.push(s);for(let m=c;m>0;m--)a[m]=a[m-1];a[0]=l;break}}}return o}async function Se(e,t,r,n,o){t.sort((l,h)=>l.attributes[r]-h.attributes[r]);const a=t.map(l=>l.attributes[r]),s=[],i=ge(n,e.fields,{originalFields:s}),c=await j(e,a,i,o);for(let l=0;l<t.length;l++){const h=t[l],f=c[l],m={};if(h.attributes)for(const y in h.attributes)m[y]=h.attributes[y];for(let y=0;y<s.length;y++)m[s[y]]=f[i[y]];h.attributes=m}return t}function j(e,t,r,n){const o=e.capabilities.query.maxRecordCount;if(o!=null&&t.length>o){const s=V(t,o);return Promise.all(s.map(i=>j(e,i,r,n))).then(i=>i.flat())}const a=new ae({objectIds:t,outFields:r,orderByFields:[e.objectIdField]});return e.queryFeatures(a,n).then(s=>{if(s&&s.features&&s.features.length===t.length)return s.features.map(i=>i.attributes);throw new S("scenelayer:feature-not-in-associated-layer","Feature not found in associated feature layer")})}function we(e,t,r,n,o,a,s,i){return Ie(e,t,r.resources.attributes,n,o,a,s,i)}async function Ie(e,t,r,n,o,a,s,i){const c=[];for(const f of t)if(f&&o.includes(f.name)){const m=`${e}/nodes/${r}/attributes/${f.key}/0`;c.push({url:m,storageInfo:f})}const l=await Promise.allSettled(c.map(f=>z(f.url,{responseType:"array-buffer",query:{...s,token:a},signal:i==null?void 0:i.signal}).then(m=>se(f.storageInfo,m.data)))),h=[];for(const f of n){const m={};for(let y=0;y<l.length;y++){const u=l[y];if(u.status==="fulfilled"){const p=u.value;m[c[y].storageInfo.name]=Me(p,f)}}h.push(m)}return h}(function(e){e[e.OUTSIDE=0]="OUTSIDE",e[e.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",e[e.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",e[e.INSIDE=3]="INSIDE"})(w||(w={}));const Te=-32768,Ee=-(2**31);function Me(e,t){if(!e)return null;const r=e[t];return B(e)?r===Te?null:r:Z(e)?r===Ee?null:r:r!=r?null:r}function Re(e){const t=e.store,r=t.indexCRS||t.geographicCRS,n=r===void 0?t.indexWKT:void 0;if(n){if(!e.spatialReference)throw new S("layerview:no-store-spatial-reference-wkt-index-and-no-layer-spatial-reference","Found indexWKT in the scene layer store but no layer spatial reference",{});if(n!==e.spatialReference.wkt)throw new S("layerview:store-spatial-reference-wkt-index-incompatible","The indexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const o=r?new G(J(r)):e.spatialReference;return o.equals(e.spatialReference)?e.spatialReference:o}function ve(e){const t=e.store,r=t.vertexCRS||t.projectedCRS,n=r===void 0?t.vertexWKT:void 0;if(n){if(!e.spatialReference)throw new S("layerview:no-store-spatial-reference-wkt-vertex-and-no-layer-spatial-reference","Found vertexWKT in the scene layer store but no layer spatial reference",{});if(n!==e.spatialReference.wkt)throw new S("layerview:store-spatial-reference-wkt-vertex-incompatible","The vertexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const o=r?new G(J(r)):e.spatialReference;return o.equals(e.spatialReference)?e.spatialReference:o}function U(e,t,r){if(!re(e,t))throw L("scene layer",e==null?void 0:e.wkid,t==null?void 0:t.wkid);if(r==="local"&&!xe(e,t))throw L("scene layer",e==null?void 0:e.wkid,t==null?void 0:t.wkid)}function st(e,t,r){var n,o,a,s;if(((n=e.serviceUpdateTimeStamp)==null?void 0:n.lastUpdate)!==((o=t.serviceUpdateTimeStamp)==null?void 0:o.lastUpdate)||!r.isEmpty||((a=e.associatedLayer)==null?void 0:a.url)!==((s=t.associatedLayer)==null?void 0:s.url))throw new S("layerview:recycle-failed")}function xe(e,t){return e.equals(t)||e.isWGS84&&t.isWebMercator||e.isWebMercator&&t.isWGS84}function $e(e,t,r){const n=Re(e),o=ve(e);U(n,t,r),U(o,t,r)}function Ce(e){var t;return(e.geometryType==null||e.geometryType==="triangles")&&(e.topology==null||e.topology==="PerAttributeArray")&&((t=e.vertexAttributes)==null?void 0:t.position)!=null}function it(e){var t;if(((t=e.store)==null?void 0:t.defaultGeometrySchema)==null||!Ce(e.store.defaultGeometrySchema))throw new S("scenelayer:unsupported-geometry-schema","The geometry schema of this scene layer is not supported.",{url:e.parsedUrl.path})}function lt(e,t){$e(e,t.spatialReference,t.viewingMode)}function Ne(e){var t;return e.geometryType!=null&&e.geometryType==="points"&&(e.topology==null||e.topology==="PerAttributeArray")&&(e.encoding==null||e.encoding===""||e.encoding==="lepcc-xyz")&&((t=e.vertexAttributes)==null?void 0:t.position)!=null}function ct(e){var t;if(((t=e.store)==null?void 0:t.defaultGeometrySchema)==null||!Ne(e.store.defaultGeometrySchema))throw new S("pointcloud:unsupported-geometry-schema","The geometry schema of this point cloud scene layer is not supported.",{})}function ut(e,t){U(e.spatialReference,t.spatialReference,t.viewingMode)}function ke(e){return e.type==="simple"||e.type==="class-breaks"||e.type==="unique-value"}function Ue(e){return e.type==="mesh-3d"}function ft(e){var r;if(e==null||!ke(e)||(e.type==="unique-value"||e.type==="class-breaks")&&e.defaultSymbol==null)return!0;const t=e.getSymbols();if(t.length===0)return!0;for(const n of t){if(!Ue(n)||n.symbolLayers.length===0)return!0;for(const o of n.symbolLayers.items)if(o.type!=="fill"||((r=o.material)==null?void 0:r.color)==null||o.material.colorMixMode!=="replace")return!0}return!1}const pt=ce({color:[0,0,0,0],opacity:0});class De{constructor(){this.edgeMaterial=null,this.material=null,this.castShadows=!0}}function dt(e){const t=new De;let r=!1,n=!1;for(const o of e.symbolLayers.items)if(o.type==="fill"&&o.enabled){const a=o.material,s=o.edges;if(a!=null&&!r){const i=a.color,c=fe(a.colorMixMode);t.material=i!=null?{color:[i.r/255,i.g/255,i.b/255],alpha:i.a,colorMixMode:c}:{color:[1,1,1],alpha:1,colorMixMode:_.Multiply},t.castShadows=o.castShadows,r=!0}s==null||n||(t.edgeMaterial=ue(s,{}),n=!0)}return t.material||(t.material={color:[1,1,1],alpha:1,colorMixMode:_.Multiply}),t}function ht(e,t){return(0|e)+(0|t)|0}function mt(e,t,r,n,o,a,s){if(!a||a.length===0||t==null||!e.serviceMbsInIndexSR)return null;const i=he(e.serviceMbsInIndexSR,o,"none",r,t);X(v,i);let c=null;const l=()=>{if(!c)if(c=Oe,W(R),e.serviceObbInIndexSR!=null){e.serviceObbInIndexSR.transform(q,r,t,o,s),q.getCorners(c);for(const u of c)I(u,u,v),N(R,u)}else{const u=e.serviceMbsInIndexSR;if(!u)return;const p=u[3];O(oe(u),r,d,t),I(d,d,v),d[2]+=o;for(let g=0;g<8;++g){const E=1&g?p:-p,x=2&g?p:-p,$=4&g?p:-p,M=c[g];ee(M,[d[0]+E,d[1]+x,d[2]+$]),N(R,M)}}};let h=1/0,f=-1/0;const m=u=>{if(u.type!=="replace")return;const p=u.geometry;if(!(p!=null&&p.hasZ))return;W(k);const g=p.spatialReference||n,E=p.rings.reduce((x,$)=>$.reduce((M,C)=>(Y(d,C[0],C[1],C[2]),O(d,g,d,t),I(d,d,v),N(k,d),Math.min(d[2],M)),x),1/0);l(),ne(R,k)&&(h=Math.min(h,E),f=Math.max(f,E))};if(a.forEach(u=>m(u)),h===1/0)return null;const y=(u,p,g)=>{I(d,g,i),u[p]=d[0],u[p+1]=d[1],u[p+2]=d[2],p+=24,g[2]=h,I(d,g,i),u[p]=d[0],u[p+1]=d[1],u[p+2]=d[2],p+=24,g[2]=f,I(d,g,i),u[p]=d[0],u[p+1]=d[1],u[p+2]=d[2]};for(let u=0;u<8;++u)y(K.data,3*u,c[u]);return de(K)}function yt(e){return e[3]>=0}function gt(e){e!=null&&(e[3]=-1)}const Oe=[b(),b(),b(),b(),b(),b(),b(),b()],k=D(),R=D(),q=new pe,d=b(),K={data:new Array(72),size:3,exclusive:!0,stride:3},v=A();export{at as A,rt as D,ye as F,ve as H,U as J,ge as L,tt as N,ot as O,Me as Q,Ie as V,nt as W,st as X,Re as Z,ft as c,mt as d,$e as e,gt as h,ct as i,et as k,ht as m,he as n,lt as o,dt as p,w as q,it as r,ut as s,pt as u,yt as y};
