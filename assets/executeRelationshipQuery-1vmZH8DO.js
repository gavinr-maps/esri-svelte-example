import{f as d}from"./utils-D61i9O7E.js";import{U as f}from"./assets-C2mb-ea2.js";import{a8 as y}from"./Point-DB4Hp4hH.js";import{t as j}from"./query-DbJf0nTj.js";import{d as R}from"./FeatureSet-DyOnd9Rj.js";import u from"./RelationshipQuery-kHvI2dm7.js";import"./subclass-BR3PhgZG.js";import"./index-CeCSsEgo.js";import"./Evented-CXIxDjmW.js";import"./Accessor-D6mNnsWy.js";import"./jsonMap-DCC6W5ex.js";import"./writer-3zufXUNV.js";import"./jsonUtils-Cma_7A64.js";import"./Extent-DHjqVB-p.js";import"./Polyline-D97hl-6E.js";import"./mathUtils-ClvKsMak.js";import"./normalizeUtils-Bi6Jza1f.js";import"./normalizeUtilsCommon-tgSpcwHH.js";import"./geometry-DpwwkAX1.js";import"./utils-Dx8bgRIB.js";import"./pbfQueryUtils-C7MaRxj2.js";import"./pbf-CmaozfCN.js";import"./OptimizedGeometry-vU5jWBvU.js";import"./OptimizedFeature-7juV2tZm.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-B_YkkRy9.js";import"./projection-A9yUaaTs.js";import"./reactiveUtils-BFQ0BtrB.js";import"./shared-B3wH2qpO.js";import"./projectBuffer-vsa0P_cF.js";import"./geodesicConstants-XRAvAZCD.js";import"./Graphic-Dc7F67nR.js";import"./PopupTemplate-ByHks6sq.js";import"./Clonable-cKbRam6-.js";import"./fieldUtils-CNduWQU9.js";import"./intl-Dpfm8vPB.js";import"./Promise-CZrWwByK.js";import"./enumeration--HlxOQ_N.js";import"./Color-DDUWtbqR.js";import"./colorUtils-CS9vdHXB.js";import"./ActionToggle-C0Z1k2jc.js";import"./Identifiable-BLvpQbOc.js";import"./symbols-CsUQ5BxR.js";import"./TextSymbol-gKE-H_J6.js";import"./screenUtils-PfxkaaMN.js";import"./materialUtils-CQ3JLQ1x.js";import"./opacityUtils-BT7mQkwC.js";import"./aaBoundingBox-rJEWaOSN.js";import"./persistableUrlUtils-BcifXQ1Z.js";import"./collectionUtils-Dm1icNvk.js";import"./Portal-liet8xHC.js";import"./Field-C8SaaeoI.js";import"./fieldType-CIG5ey7e.js";import"./DataLayerSource-6X35yXpo.js";function F(e,o){const t=e.toJSON();return t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.orderByFields&&(t.orderByFields=t.orderByFields.join(",")),t.outFields&&!(o!=null&&o.returnCountOnly)?t.outFields.includes("*")?t.outFields="*":t.outFields=t.outFields.join(","):delete t.outFields,t.outSR&&(t.outSR=y(t.outSR)),t.dynamicDataSource&&(t.layer=JSON.stringify({source:t.dynamicDataSource}),delete t.dynamicDataSource),t}async function b(e,o,t){const i=await l(e,o,t),r=i.data,p=r.geometryType,m=r.spatialReference,n={};for(const a of r.relatedRecordGroups){const s={fields:void 0,objectIdFieldName:void 0,geometryType:p,spatialReference:m,hasZ:!!r.hasZ,hasM:!!r.hasM,features:a.relatedRecords};if(a.objectId!=null)n[a.objectId]=s;else for(const c of Object.keys(a))c!=="relatedRecords"&&(n[a[c]]=s)}return{...i,data:n}}async function h(e,o,t){const i=await l(e,o,t,{returnCountOnly:!0}),r=i.data,p={};for(const m of r.relatedRecordGroups)m.objectId!=null&&(p[m.objectId]=m.count);return{...i,data:p}}async function l(e,o,t={},i){const r=j({...e.query,f:"json",...i,...F(o,i)});return f(e.path+"/queryRelatedRecords",{...t,query:{...t.query,...r}})}async function St(e,o,t){o=u.from(o);const i=d(e);return b(i,o,t).then(r=>{const p=r.data,m={};return Object.keys(p).forEach(n=>m[n]=R.fromJSON(p[n])),m})}async function It(e,o,t){o=u.from(o);const i=d(e);return h(i,o,{...t}).then(r=>r.data)}export{St as executeRelationshipQuery,It as executeRelationshipQueryForCount};
