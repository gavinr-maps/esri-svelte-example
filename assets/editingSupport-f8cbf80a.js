import{aN as A,Q as I,T as l,d7 as v,d8 as b,s as $,V as h,a3 as E,j as S,d6 as R,d5 as O}from"./index-e8c6bcc0.js";import{b as k}from"./normalizeUtils-f64efc29.js";import{n as L,l as U}from"./EditBusLayer-d52c85d8.js";import"./normalizeUtilsCommon-123fc71f.js";import"./utils-c9a76eea.js";function F(e){return e&&e.applyEdits!=null}function j(e){return typeof e=="object"&&e!=null&&"objectId"in e&&!!e.objectId}function Q(e){return e.every(j)}function G(e){return typeof e=="object"&&e!=null&&"globalId"in e&&!!e.globalId}function H(e){return e.every(G)}async function J(e,t,a,s={}){var o;let i;if(L(e)&&e.url)i=U(e.url,e.layerId,s.returnServiceEditsOption==="original-and-current-features");else{i=A(),i.promise.then(d=>{(d.addedFeatures.length||d.updatedFeatures.length||d.deletedFeatures.length||d.addedAttachments.length||d.updatedAttachments.length||d.deletedAttachments.length)&&e.emit("edits",d)});const n={result:i.promise};e.emit("apply-edits",n)}try{const{results:n,edits:d}=await B(e,t,a,s),r=u=>u.filter(c=>!c.error).map(I),p={edits:d,addedFeatures:r(n.addFeatureResults),updatedFeatures:r(n.updateFeatureResults),deletedFeatures:r(n.deleteFeatureResults),addedAttachments:r(n.addAttachmentResults),updatedAttachments:r(n.updateAttachmentResults),deletedAttachments:r(n.deleteAttachmentResults),exceededTransferLimit:!1};return(o=n.editedFeatureResults)!=null&&o.length&&(p.editedFeatures=n.editedFeatureResults),i.resolve(p),n}catch(n){throw i.reject(n),n}}async function B(e,t,a,s){var n,d,r,p,u,c;if(await e.load(),!F(t))throw new l(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!v(e))throw new l(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:i,options:o}=await T(e,a,s);return(n=i.addFeatures)!=null&&n.length||(d=i.updateFeatures)!=null&&d.length||(r=i.deleteFeatures)!=null&&r.length||(p=i.addAttachments)!=null&&p.length||(u=i.updateAttachments)!=null&&u.length||(c=i.deleteAttachments)!=null&&c.length?{edits:i,results:await t.applyEdits(i,o)}:{edits:i,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}async function T(e,t,a){const s=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),i=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),o=e.infoFor3D!=null;if(!t||!s&&!i)throw new l(`${e.type}-layer:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");const n=b(e);if(!n.data.isVersioned&&(a!=null&&a.gdbVersion))throw new l(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!n.editing.supportsRollbackOnFailure&&(a!=null&&a.rollbackOnFailureEnabled))throw new l(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!n.editing.supportsGlobalId&&(a!=null&&a.globalIdUsed))throw new l(`${e.type}-layer:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!n.editing.supportsGlobalId&&i)throw new l(`${e.type}-layer:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!(a!=null&&a.globalIdUsed)&&i)throw new l(`${e.type}-layer:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const d={...a};if(d.rollbackOnFailureEnabled!=null||n.editing.supportsRollbackOnFailure||(d.rollbackOnFailureEnabled=!0),d.rollbackOnFailureEnabled||d.returnServiceEditsOption!=="original-and-current-features"||(d.rollbackOnFailureEnabled===!1&&$.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwrritten and set to true."),d.rollbackOnFailureEnabled=!0),!n.editing.supportsReturnServiceEditsInSourceSpatialReference&&d.returnServiceEditsInSourceSR)throw new l(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(d.returnServiceEditsInSourceSR&&d.returnServiceEditsOption!=="original-and-current-features")throw new l(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const r={...t};if(r.addFeatures=t&&h.isCollection(t.addFeatures)?t.addFeatures.toArray():r.addFeatures||[],r.updateFeatures=t&&h.isCollection(t.updateFeatures)?t.updateFeatures.toArray():r.updateFeatures||[],r.deleteFeatures=t&&h.isCollection(t.deleteFeatures)?t.deleteFeatures.toArray():r.deleteFeatures||[],r.addFeatures.length&&!n.operations.supportsAdd)throw new l(`${e.type}-layer:unsupported-operation`,"Layer does not support adding features.");if(r.updateFeatures.length&&!n.operations.supportsUpdate)throw new l(`${e.type}-layer:unsupported-operation`,"Layer does not support updating features.");if(r.deleteFeatures.length&&!n.operations.supportsDelete)throw new l(`${e.type}-layer:unsupported-operation`,"Layer does not support deleting features.");r.addAttachments=r.addAttachments||[],r.updateAttachments=r.updateAttachments||[],r.deleteAttachments=r.deleteAttachments||[],r.addFeatures=r.addFeatures.map(f),r.updateFeatures=r.updateFeatures.map(f),r.addAssetFeatures=[];const p=(a==null?void 0:a.globalIdUsed)||o;return r.addFeatures.forEach(u=>W(u,e,p)),r.updateFeatures.forEach(u=>V(u,e,p)),r.deleteFeatures.forEach(u=>D(u,e,p)),r.addAttachments.forEach(u=>m(u,e)),r.updateAttachments.forEach(u=>m(u,e)),o&&await q(r,e),{edits:await C(r),options:d}}function y(e,t,a){var s,i;if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new l(`${t.type}-layer:invalid-parameter`,"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new l(`${t.type}-layer:invalid-parameter`,"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&e.geometry!=null){if(e.geometry.hasZ&&((s=t.capabilities)==null?void 0:s.data.supportsZ)===!1)throw new l(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&((i=t.capabilities)==null?void 0:i.data.supportsM)===!1)throw new l(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function w(e,t){var a;if("geometry"in e&&((a=e.geometry)==null?void 0:a.type)==="mesh"){const{geometry:s}=e;if(s.vertexSpace.isGeoreferenced)throw new l(`${t.type}-layer:georeferenced-mesh-unsupported`,"Uploading georeferenced meshes to a layer is not supported.")}}function W(e,t,a){y(e,t,a),w(e,t)}function D(e,t,a){y(e,t,a)}function V(e,t,a){y(e,t,a),w(e,t);const s=b(t);if("geometry"in e&&e.geometry!=null&&!(s!=null&&s.editing.supportsGeometryUpdate))throw new l(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}function m(e,t){var i;const{feature:a,attachment:s}=e;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new l(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new l(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!s.globalId)throw new l(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!s.data&&!s.uploadId)throw new l(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(s.data instanceof File&&s.data.name)&&!s.name)throw new l(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!((i=t.capabilities)!=null&&i.editing.supportsUploadWithItemId)&&s.uploadId)throw new l(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if(typeof s.data=="string"){const o=E(s.data);if(o&&!o.isBase64)throw new l(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function C(e){const t=e.addFeatures??[],a=e.updateFeatures??[],s=t.concat(a).map(d=>d.geometry),i=await k(s),o=t.length,n=a.length;return i.slice(0,o).forEach((d,r)=>t[r].geometry=d),i.slice(o,o+n).forEach((d,r)=>a[r].geometry=d),e}function f(e){const t=new S;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}async function q(e,t){if(t.infoFor3D==null)return;const{infoFor3D:a}=t,s=R("model/gltf-binary",a.supportedFormats)??O("glb",a.supportedFormats);if(!(s&&a.editFormats.includes(s)))throw new l(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??(e.addAssetFeatures=[]);const{addAssetFeatures:i}=e;for(const o of e.addFeatures??[])g(o)&&i.push(o);for(const o of e.updateFeatures??[])g(o)&&i.push(o)}function g(e){var t;return((t=e==null?void 0:e.geometry)==null?void 0:t.type)==="mesh"}function K(e,t,a,s){if(!F(t))throw new l(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new l(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(a,s)}export{J as applyEdits,H as isFeatureIdentifierArrayWithGlobalId,Q as isFeatureIdentifierArrayWithObjectId,G as isFeatureIdentifierWithGlobalId,j as isFeatureIdentifierWithObjectId,K as uploadAssets};
