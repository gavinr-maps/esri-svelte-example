import{s as x,d9 as y,da as E,T as n,db as K,dc as L,ap as F,a7 as R,aK as D,dd as j}from"./index-e8c6bcc0.js";import{i as f}from"./originUtils-1469eeaf.js";import q from"./FeatureLayer-6a49528b.js";import{r as z}from"./fetchService-c852bf28.js";import{o as w}from"./jsonContext-cb79343f.js";import{i as c,a as M,u as I,l as m}from"./portalItemUtils-9c4b4c29.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./UniqueValueRenderer-6847f026.js";import"./LegendOptions-0ffe455e.js";import"./diffUtils-f8f9fc73.js";import"./SizeVariable-dc6fe734.js";import"./colorRamps-7c0167a8.js";import"./lengthUtils-b9fae671.js";import"./ColorStop-3149a864.js";import"./featureFlags-bf3d5654.js";import"./styleUtils-d6218d7e.js";import"./jsonUtils-f94670aa.js";import"./DictionaryLoader-67262ed1.js";import"./LRUCache-3922d825.js";import"./Version-651090e3.js";import"./FieldsIndex-888b8bd2.js";import"./heatmapUtils-ee8bc01a.js";import"./vec4f64-aa64c7e9.js";import"./MultiOriginJSONSupport-476ea916.js";import"./LabelClass-669bcee9.js";import"./labelUtils-98630c63.js";import"./defaultsJSON-b087dd4d.js";import"./FeatureLayerBase-f34fe56d.js";import"./Field-fadcb771.js";import"./fieldType-a79b2e2e.js";import"./commonProperties-a06e23a3.js";import"./ElevationInfo-9f2bd050.js";import"./featureLayerUtils-07676dd2.js";import"./AttachmentQuery-35d4fb4f.js";import"./Query-ce383482.js";import"./RelationshipQuery-5b5a1cfb.js";import"./serviceCapabilitiesUtils-722af797.js";import"./editsZScale-b2a6d781.js";import"./queryZScale-c236a6ea.js";import"./FeatureSet-72ed3e08.js";import"./APIKeyMixin-9f78a4f2.js";import"./ArcGISService-a51cd6d5.js";import"./BlendLayer-63dc08ea.js";import"./jsonUtils-45b2dffb.js";import"./parser-c8281db0.js";import"./CustomParametersMixin-518863ba.js";import"./EditBusLayer-d52c85d8.js";import"./FeatureEffectLayer-6c255e54.js";import"./FeatureEffect-70b2b2ed.js";import"./FeatureReductionLayer-2ee74cd2.js";import"./clusterUtils-a6986c79.js";import"./OperationalLayer-6d8023bf.js";import"./OrderedLayer-38737c5b.js";import"./PortalLayer-9295b91f.js";import"./RefreshableLayer-4a8676fc.js";import"./ScaleRangeLayer-4cc0b1db.js";import"./TemporalLayer-0500715a.js";import"./FeatureTemplate-1e31fa32.js";import"./FeatureType-f32ea6a9.js";import"./fieldProperties-0a0dca54.js";import"./labelingInfo-98c89153.js";import"./versionUtils-4823e346.js";import"./styleUtils-1146cb85.js";import"./TopFeaturesQuery-1a582382.js";import"./popupUtils-b796c605.js";const U=x.getLogger("esri.layers.FeatureLayer"),d="Feature Service";function u(t,a){return`Layer (title: ${t.title}, id: ${t.id}) of type '${t.declaredClass}' ${a}`}function g(t,a){if(a.type!==d)throw new n("feature-layer:portal-item-wrong-type",u(t,`should have portal item of type "${d}"`))}async function A(t){if(await t.load(),E(t))throw new n("feature-layer:save",u(t,"using an in-memory source cannot be saved to a portal item"))}function Y(t,a){let r=(t.messages??[]).filter(({type:e})=>e==="error").map(({name:e,message:s,details:o})=>new n(e,s,o));if(a!=null&&a.ignoreUnsupported&&(r=r.filter(({name:e})=>e!=="layer:unsupported"&&e!=="symbol:unsupported"&&e!=="symbol-layer:unsupported"&&e!=="property:unsupported"&&e!=="url:unsupported")),r.length>0)throw new n("feature-layer:save","Failed to save feature layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:r})}async function v(t,a,r){"beforeSave"in t&&typeof t.beforeSave=="function"&&await t.beforeSave();const e=t.write({},a);return Y(a,r),e}function J(t){const{layer:a,layerJSON:r}=t;return a.isTable?{layers:[],tables:[r]}:{layers:[r],tables:[]}}function h(t){c(t,m.JSAPI),t.typeKeywords&&(t.typeKeywords=t.typeKeywords.filter((a,r,e)=>e.indexOf(a)===r))}function _(t){const a=t.portalItem;if(!a)throw U.error("save: requires the portalItem property to be set"),new n("feature-layer:portal-item-not-set",u(t,"requires the portalItem property to be set"));if(!a.loaded)throw new n("feature-layer:portal-item-not-loaded",u(t,"cannot be saved to a portal item that does not exist or is inaccessible"));g(t,a)}async function N(t,a){return/\/\d+\/?$/.test(t.url??"")?J(a[0]):B(t,a)}async function B(t,a){const{layer:{url:r,customParameters:e,apiKey:s}}=a[0];let o=await t.fetchData("json");o&&o.layers!=null&&o.tables!=null||(o=await C(o,{url:r??"",customParameters:e,apiKey:s},a.map(i=>i.layer.layerId)));for(const i of a)O(i.layer,i.layerJSON,o);return o}async function C(t,a,r){t||(t={}),t.layers||(t.layers=[]),t.tables||(t.tables=[]);const{url:e,customParameters:s,apiKey:o}=a,{serviceJSON:i,layersJSON:l}=await z(e,{customParameters:s,apiKey:o}),p=S(t.layers,i.layers,r),b=S(t.tables,i.tables,r);t.layers=p.itemResources,t.tables=b.itemResources;const T=[...p.added,...b.added],P=l?[...l.layers,...l.tables]:[];return await k(t,T,e,P),t}function S(t,a,r){const e=K(t,a,(o,i)=>o.id===i.id);t=t.filter(o=>!e.removed.some(i=>i.id===o.id));const s=e.added.map(({id:o})=>({id:o}));return s.forEach(({id:o})=>{t.push({id:o})}),{itemResources:t,added:s.filter(({id:o})=>!r.includes(o))}}async function k(t,a,r,e){const s=a.map(({id:o})=>new q({url:r,layerId:o,sourceJSON:e.find(({id:i})=>i===o)}));await L(s.map(o=>o.load())),s.forEach(o=>{const{layerId:i,loaded:l,defaultPopupTemplate:p}=o;!l||p==null||O(o,{id:i,popupInfo:p.toJSON()},t)})}function O(t,a,r){t.isTable?$(r.tables,a):$(r.layers,a)}function $(t,a){if(!t)return;const r=t.findIndex(({id:e})=>e===a.id);r===-1?t.push(a):t[r]=a}function G(t){const{portalItem:a}=t;return j(t)&&!t.dynamicDataSource&&!!(a!=null&&a.loaded)&&a.type===d}async function H(t){if(!(t!=null&&t.length))throw new n("feature-layer-utils-saveall:missing-parameters","'layers' array should contain at least one feature layer");await Promise.all(t.map(e=>e.load()));for(const e of t)if(!G(e))throw new n("feature-layer-utils-saveall:invalid-parameters",`'layers' array should only contain layers or tables in a feature service loaded from 'Feature Service' item. ${u(e,"does not conform")}`,{layer:e});const a=t.map(e=>e.portalItem.id);if(new Set(a).size>1)throw new n("feature-layer-utils-saveall:invalid-parameters","All layers in the 'layers' array should be loaded from the same portal item");const r=t.map(e=>e.layerId);if(new Set(r).size!==r.length)throw new n("feature-layer-utils-saveall:invalid-parameters","'layers' array should contain only one instance each of layer or table in a feature service")}function Q(t,a){let r=F.from(a);return r.id&&(r=r.clone(),r.id=null),r.type??(r.type=d),r.portal??(r.portal=R.getDefault()),g(t,r),r}async function V(t,a){const{url:r,layerId:e,title:s,fullExtent:o,isTable:i}=t,l=D(r),p=l!=null&&l.serverType==="FeatureServer";a.url=p?r:`${r}/${e}`,a.title||(a.title=s),a.extent=null,i||o==null||(a.extent=await M(o)),I(a,m.METADATA),I(a,m.MULTI_LAYER),c(a,m.SINGLE_LAYER),i&&c(a,m.TABLE),h(a)}async function W(t,a,r){var s;const e=t.portal;await(e==null?void 0:e.signIn()),await((s=e==null?void 0:e.user)==null?void 0:s.addItem({item:t,data:a,folder:r==null?void 0:r.folder}))}const ua=y(X);async function X(t,a){await A(t),_(t);const r=t.portalItem,e=w(r),s=await v(t,e,a),o=await N(r,[{layer:t,layerJSON:s}]);return h(r),await r.update({data:o}),f(e),r}const da=y(async(t,a)=>{await H(t);const r=t[0].portalItem,e=w(r),s=await Promise.all(t.map(i=>v(i,e,a))),o=await N(r,t.map((i,l)=>({layer:i,layerJSON:s[l]})));return h(r),await r.update({data:o}),await Promise.all(t.slice(1).map(i=>i.portalItem.reload())),f(e),r.clone()}),ca=y(Z);async function Z(t,a,r){await A(t);const e=Q(t,a),s=w(e),o=J({layer:t,layerJSON:await v(t,s,r)});return await V(t,e),await W(e,o,r),t.portalItem=e,f(s),e}export{ua as save,da as saveAll,ca as saveAs};