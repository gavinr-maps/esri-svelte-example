import{L as e,w as t,cx as r,cz as n}from"./vendor.d0a39f0f.js";import{a}from"./lazyLayerLoader.87256c2d.js";import{o as l}from"./jsonContext.8f8535ba.js";async function o(t){const{data:r}=await e(t,{responseType:"json",query:{f:"json"}});return r}function s(e,t,r){let n=r.layers||[];const a=r.tables||[];"Feature Collection"===e.portalItem.type&&(n.forEach((e=>{var t;"Table"===(null==e||null==(t=e.layerDefinition)?void 0:t.type)&&a.push(e)})),n=n.filter((e=>{var t;return"Table"!==(null==e||null==(t=e.layerDefinition)?void 0:t.type)}))),n.reverse().forEach((n=>{const a=i(e,t,r,n);e.add(a)})),a.reverse().forEach((n=>{const a=i(e,t,r,n);e.tables.add(a)}))}function i(e,t,r,a){const l=new t({portalItem:e.portalItem.clone(),layerId:a.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){const t={origin:"portal-item",portal:e.portalItem.portal||n.getDefault()};l.read(a,t);const o=r.showLegend;null!=o&&l.read({showLegend:o},t)}return l}function u(e,t){if(!1===e.supportsData)return Promise.resolve(void 0);const r=e.instance;return r.portalItem.fetchData("json",t).catch((()=>null)).then((async e=>{if(function(e){return"stream"!==e.type&&"layerId"in e}(r)){let t,n=!0;return e&&d(e)>0&&(null==r.layerId&&(r.layerId=p(e)),t=function(e,t){const r=e.layers;if(r)for(let a=0;a<r.length;a++)if(r[a].id===t)return r[a];const n=e.tables;if(n)for(let a=0;a<n.length;a++)if(n[a].id===t)return n[a];return null}(e,r.layerId),t&&(1===d(e)&&(n=!1),null!=e.showLegend&&(t.showLegend=e.showLegend))),n&&"service-name"!==r.sublayerTitleMode&&(r.sublayerTitleMode="item-title-and-service-name"),t}return e}))}async function c(e,t){var r,n;if(null==(null==(r=e)?void 0:r.layers)||null==(null==(n=e)?void 0:n.tables)){const r=await o(t);(e=e||{}).layers=e.layers||(null==r?void 0:r.layers),e.tables=e.tables||(null==r?void 0:r.tables)}return e}function p(e){const t=e.layers;if(t&&t.length)return t[0].id;const r=e.tables;return r&&r.length?r[0].id:null}function d(e){var t,r,n,a;return(null!=(t=null==e||null==(r=e.layers)?void 0:r.length)?t:0)+(null!=(n=null==e||null==(a=e.tables)?void 0:a.length)?n:0)}var y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",getFirstLayerOrTableId:p,getNumLayersAndTables:d,load:async function(e,n){const i=e.instance.portalItem;return i&&i.id?(await i.load(n),function(e){const r=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(r.type))throw new t("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r.type,expectedType:e.supportedTypes.join(", ")})}(e),async function(e,n){const i=e.instance,p=i.portalItem,{url:y,title:f}=p,m=l(p);if("group"===i.type)return i.read({title:f},m),function(e,r){let n;const l=e.portalItem.type;switch(l){case"Feature Service":n=a.FeatureLayer;break;case"Stream Service":n=a.StreamLayer;break;case"Scene Service":n=a.SceneLayer;break;case"Feature Collection":n=a.FeatureLayer;break;default:throw new t("portal:unsupported-item-type-as-group",`The item type '${l}' is not supported as a 'IGroupLayer'`)}let i;return n().then((e=>(i=e,u(r)))).then((async t=>"Feature Service"===l?(t=await c(t,e.portalItem.url),s(e,i,t)):d(t)>0?s(e,i,t):function(e,t){return e.portalItem.url?o(e.portalItem.url).then((r=>{var n,a;function l(e){return{id:e.id,name:e.name}}r&&s(e,t,{layers:null==(n=r.layers)?void 0:n.map(l),tables:null==(a=r.tables)?void 0:a.map(l)})})):Promise.resolve()}(e,i)))}(i,e);y&&i.read({url:y},m);const v=await u(e,n);return v&&i.read(v,m),i.resourceReferences={portalItem:p,paths:m.readResourcePaths},i.read({title:f},m),r(i,m)}(e,n)):Promise.resolve()},preprocessFSItemData:c});export{p as f,d as h,y as l,c as m,o as n};
