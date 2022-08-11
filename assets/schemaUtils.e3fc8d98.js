import{s as Q,e as $,aK as j,f as d,bv as se,$ as A,a0 as we,bL as Se,a1 as Fe,bM as oe,bN as re,aY as ue,t as D,bO as N,r as T,L as Te,bP as Ee,h as q,y as ne}from"./index.ebaf2ed0.js";import{l as R,S as x,r as ze}from"./Utils.2c7f2924.js";import{c as Ve}from"./utils.b347edcb.js";import{o as Ie}from"./visualVariablesUtils.dfcf3380.js";import{createSymbolSchema as v}from"./createSymbolSchema.a5dbc0f9.js";import{t as $e}from"./CIMSymbolHelper.500b7abd.js";import{a5 as Le}from"./enums.6e42a319.js";import"./MaterialKey.50366530.js";import"./ExpandedCIM.a965d5f1.js";import{x as X}from"./MD5.97b39efc.js";import{e as pe}from"./util.cb4363f2.js";function Me(e){if(!e)return R.NONE;let i=0;for(const t of e)if(t.type==="size"){const s=Ie(t);i|=s,t.target==="outline"&&(i|=s<<4)}else t.type==="color"?i|=R.COLOR:t.type==="opacity"?i|=R.OPACITY:t.type==="rotation"&&(i|=R.ROTATION);return i}function Oe(e){if(!("visualVariables"in e)||!e.hasVisualVariables("size"))return 0;const i=e.getVisualVariablesForType("size");if(!i[0])return 0;const t=i[0];if(t.target==="outline")return 0;if(t.transformationType==="stops")return t.stops.map(s=>s.size).reduce(G,0);if(t.transformationType==="clamped-linear"){let s=-1/0,r=-1/0;return s=typeof t.maxSize=="number"?t.maxSize:t.maxSize.stops.map(n=>n.size).reduce(G,0),r=typeof t.minSize=="number"?t.minSize:t.minSize.stops.map(n=>n.size).reduce(G,0),Math.max(s,r)}return t.transformationType==="real-world-size"?30:void 0}Le.metrics,new $e(0,0,24,24);function G(e,i){return Math.max(e,i)}const k=8,fe=k-2,P=Q.getLogger("esri.views.2d.layers.features.support.rendererUtils"),ht=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e;const i=e.clone(),t=i.visualVariables.map(s=>ce(s)?de(s):s);return i.visualVariables=t,i};function Ce(e){return e.map(i=>ce(i)?de(i.clone()):i)}function ce(e){return(e.type==="size"||e.type==="color"||e.type==="opacity")&&e.stops!=null}function de(e){return e.stops=Re(e.type,e.stops),e}function z(e,i,t){return(1-t)*e+t*i}function Ne(e,i){const[t,...s]=i,r=s.pop(),n=s[0].value,a=s[s.length-1].value,l=(a-n)/fe,u=[];for(let o=n;o<a;o+=l){let p=0;for(;o>=s[p].value;)p++;const m=s[p],f=i[p-1],L=o-f.value,w=m.value===f.value?1:L/(m.value-f.value);if(e==="color"){const c=s[p],g=i[p-1],y=c.color.clone();y.r=z(g.color.r,y.r,w),y.g=z(g.color.g,y.g,w),y.b=z(g.color.b,y.b,w),y.a=z(g.color.a,y.a,w),u.push({value:o,color:y,label:c.label})}else if(e==="size"){const c=s[p],g=i[p-1],y=se(c.size),U=z(se(g.size),y,w);u.push({value:o,size:U,label:c.label})}else{const c=s[p],g=z(i[p-1].opacity,c.opacity,w);u.push({value:o,opacity:g,label:c.label})}}return[t,...u,r]}function _e(e){const[i,...t]=e,s=t.pop();for(;t.length>fe;){let r=0,n=0;for(let a=1;a<t.length;a++){const l=t[a-1],u=t[a],o=Math.abs(u.value-l.value);o>n&&(n=o,r=a)}t.splice(r,1)}return[i,...t,s]}function Re(e,i){return i.length<=k?i:(P.warn(`Found ${i.length} Visual Variable stops, but MapView only supports ${k}. Displayed stops will be simplified.`),i.length>2*k?Ne(e,i):_e(i))}function Z(){if($("heatmap-force-raster"))return"raster";const{supportsTextureFloat:e,supportsTextureHalfFloat:i,supportsColorBufferFloat:t,supportsColorBufferFloatBlend:s,supportsColorBufferHalfFloat:r}=j("2d");return e&&t&&s||i&&r?"symbol":$("heatmap-allow-raster-fallback")?"raster":"none"}function wt(e){if(!e)return!0;switch(e.type){case"dot-density":if(!j("2d").supportsTextureFloat)return P.error(new d("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),!1;break;case"heatmap":{const i=Z();if(i==="none"||i==="raster"&&!$("heatmap-force-raster")){const t=j("2d"),s=["supportsTextureFloat","supportsTextureHalfFloat","supportsColorBufferFloat","supportsColorBufferFloatBlend","supportsColorBufferHalfFloat"].filter(r=>!t[r]).join(", ");if(i==="none")return P.errorOnce(new d("webgl-missing-extension",`Missing WebGL${t.type} requirements for Heatmap: ${s}`)),!1;i==="raster"&&P.warnOnce(`Missing WebGL${t.type} requirements for accelerated Heatmap: ${s}. Feature support may be limited.`)}break}}return!0}var K;let _=K=class extends oe{writeLevels(e,i,t){for(const s in e){const r=this.levels[s];return void(i.stops=r)}}clone(){return new K({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:re(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:re(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map(e=>e.clone()),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone(),levels:ue(this.levels)})}};A([we()],_.prototype,"levels",void 0),A([Se("levels")],_.prototype,"writeLevels",null),_=K=A([Fe("esri.views.2d.engine.LevelDependentSizeVariable")],_);const ye=Q.getLogger("esri.views.2d.layers.support.clusterUtils");$.add("esri-cluster-arcade-enabled",!0);const Be=$("esri-cluster-arcade-enabled"),ke=(e,i,t,s)=>{const r=i.clone();if(!Ae(r))return r;if(t.fields)for(const n of t.fields)me(e,n);if("visualVariables"in r){const n=(r.visualVariables||[]).filter(l=>l.valueExpression!=="$view.scale"),a=Pe(n);n.forEach(l=>{l.type==="rotation"?l.field?l.field=V(e,l.field,"avg_angle"):l.valueExpression&&(l.field=B(e,l.valueExpression,"avg_angle"),l.valueExpression=null):l.normalizationField?(l.field=V(e,l.field,"norm",l.normalizationField),l.normalizationField=null):l.field?l.field=V(e,l.field,"avg"):(l.field=B(e,l.valueExpression,"avg"),l.valueExpression=null)}),D(a)&&!De(n)&&(n.push(Ue(t,s)),r.dynamicClusterSize=!0),r.visualVariables=n}switch(r.type){case"simple":break;case"unique-value":r.field?r.field=V(e,r.field,"mode"):r.valueExpression&&(r.field=B(e,r.valueExpression,"mode"),r.valueExpression=null);break;case"class-breaks":r.normalizationField?(r.field=V(e,r.field,"norm",r.normalizationField),r.normalizationField=null):r.field?r.field=V(e,r.field,"avg"):(r.field=B(e,r.valueExpression,"avg"),r.valueExpression=null)}return r},Pe=e=>{for(const i of e)if(i.type==="size")return i;return null},De=e=>{for(const i of e)if(i.field==="cluster_count")return!0;return!1},Ue=(e,i)=>{const t=[new N({value:0,size:0}),new N({value:1})];if(D(i))return new oe({field:"cluster_count",stops:[...t,new N({value:2,size:0})]});const s=Object.keys(i).reduce((r,n)=>({...r,[n]:[...t,new N({value:Math.max(2,i[n].minValue),size:e.clusterMinSize}),new N({value:Math.max(3,i[n].maxValue),size:e.clusterMaxSize})]}),{});return new _({field:"cluster_count",levels:s})},Ae=e=>{const i=t=>ye.error(new d("Unsupported-renderer",t,{renderer:e}));if(e.type==="unique-value"){if(e.field2||e.field3)return i("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1}else if(e.type==="class-breaks"){if(e.normalizationField){const t=e.normalizationType;if(t!=="field")return i(`FeatureReductionCluster does not support a normalizationType of ${t}`),!1}}else if(e.type!=="simple")return i(`FeatureReductionCluster does not support renderers of type ${e.type}`),!1;if(!Be){if("valueExpression"in e&&e.valueExpression)return i("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in e&&e.visualVariables||[]).some(t=>!(!("valueExpression"in t)||!t.valueExpression)))return i("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function qe(e,i,t){switch(e){case"avg":case"avg_angle":return`cluster_avg_${i}`;case"mode":return`cluster_type_${i}`;case"norm":{const s=t,r="field",n=i.toLowerCase()+",norm:"+r+","+s.toLowerCase();return"cluster_avg_"+X(n)}}}function me(e,i){const{name:t,outStatistic:s}=i,{onStatisticField:r,onStatisticValueExpression:n,statisticType:a}=s;if(n){const l=X(n.toLowerCase());e.push({name:t,outStatistic:{onStatisticField:l,onStatisticValueExpression:n,statisticType:a}})}else r?e.push({name:t,outStatistic:{onStatisticField:r,statisticType:a}}):ye.error(new d("mapview-unsupported-field","Unable to handle field",{field:i}))}function B(e,i,t){const s=X(i),r=t==="mode"?`cluster_type_${s}`:`cluster_avg_${s}`;return e.some(n=>n.name===r)||e.push({name:r,outStatistic:{onStatisticField:s,onStatisticValueExpression:i,statisticType:t}}),r}function V(e,i,t,s){if(i==="cluster_count"||e.some(n=>n.name===i))return i;const r=qe(t,i,s);return e.some(n=>n.name===r)||(t==="norm"?e.push({name:r,outStatistic:{onStatisticField:i,onStatisticNormalizationField:s,statisticType:t}}):e.push({name:r,outStatistic:{onStatisticField:i,statisticType:t}})),r}const I=Q.getLogger("esri.views.2d.layers.features.schemaUtils"),b="ValidationError",Ge={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function F(e){let i=0,t=0,s=x.DEFAULT;if(T(e)){if(t=Oe(e),"visualVariables"in e&&(i=Me(e.visualVariables||[]),e.type==="dot-density"&&(s=x.DOT_DENSITY)),e.type==="heatmap"&&(s=x.HEATMAP),e.type==="dictionary")return{maxVVSize:t,vvFlags:i,symbologyType:x.DEFAULT};if(e.type==="pie-chart")return{maxVVSize:t,vvFlags:i,symbologyType:x.PIE_CHART};if(s!==x.DOT_DENSITY&&s!==x.HEATMAP){const r=e.getSymbols();"backgroundFillSymbol"in e&&e.backgroundFillSymbol&&r.push(e.backgroundFillSymbol);let n=!0,a=!0;for(const l of r)if(l.type==="cim"&&(a=!1),l.type==="simple-fill"||l.type==="picture-fill"){const u=l.outline,o=u&&u.style!=="none"&&u.style!=="solid",p=l.type==="simple-fill"&&l.style!=="none"&&l.style!=="solid",m=l.type==="picture-fill"||p||o;o&&(n=!1),m&&(a=!1)}n?s=a?x.OUTLINE_FILL_SIMPLE:x.OUTLINE_FILL:a&&(s=x.SIMPLE)}}return{vvFlags:i,maxVVSize:t,symbologyType:s}}function He(e,i){const t=e.labelPlacement,s=Ge[i];if(!e.symbol)return I.warn("No ILabelClass symbol specified."),!0;if(!s)return I.error(new d("mapview-labeling:unsupported-geometry-type",`Unable to create labels for Feature Layer, ${i} is not supported`)),!0;if(!s.includes(t)){const r=s[0];t&&I.warn(`Found invalid label placement type ${t} for ${i}. Defaulting to ${r}`),e.labelPlacement=r}return!1}function ge(e,i){const t=ue(e);return t.some(s=>He(s,i))?[]:t}function St(e){return $("esri-2d-update-debug")&&console.debug("Created new schema",le(e,!0)),le(e)}function le(e,i=!1){var t,s;try{const r=Ke(e,i),n=Xe(e),a={};r.map(o=>Je(a,e,o));const l=T(e.subtypeCode)?`${e.subtypeField} = ${e.subtypeCode}`:null;return{source:{definitionExpression:Ee(e.definitionExpression,l),fields:e.fields.map(o=>o.toJSON()),gdbVersion:e.gdbVersion,historicMoment:(t=e.historicMoment)==null?void 0:t.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:(s=e.timeExtent)==null?void 0:s.toJSON(),customParameters:e.customParameters},attributes:{fields:{},indexCount:0},processors:r,tileRenderer:n,targets:a}}catch(r){if(r.fieldName===b)return I.error(r),null;throw r}}function Je(e,i,t){switch(t.target){case"feature":return void J(e,H(i),t);case"aggregate":{if(!("featureReduction"in i))return;const s=i.featureReduction;switch(s.type){case"selection":throw new d(b,"Mapview does not support `selection` reduction type",s);case"binning":return J(e,H(i),t),void Ye(e,s,t);case"cluster":return J(e,H(i),t),void je(e,s,t)}}}}function ee(e,i){for(const t in i){const s=i[t];if(s.target!==e.name)continue;const r=e.attributes[t];r?(r.context.mesh=r.context.mesh||s.context.mesh,r.context.storage=r.context.storage||s.context.storage):e.attributes[t]=s}return e}function H(e){var i,t,s,r,n;return[(t=(i=q(e.filter))==null?void 0:i.toJSON())!=null?t:null,(n=(r=q((s=q(e.featureEffect))==null?void 0:s.filter))==null?void 0:r.toJSON())!=null?n:null]}function J(e,i,t){return e.feature||(e.feature={name:"feature",input:"source",filters:i,attributes:{}}),ee(e.feature,t.attributes.fields),e}function Ye(e,i,t){return e.aggregate||(e.aggregate={name:"aggregate",type:"bin",filters:null,input:"feature",params:{fixedBinLevel:i.fixedBinLevel},attributes:{}}),ee(e.aggregate,t.attributes.fields),e}function je(e,i,t){return e.aggregate||(e.aggregate={name:"aggregate",type:"cluster",input:"feature",filters:null,attributes:{},params:{clusterRadius:ne(i.clusterRadius/2),clusterPixelBuffer:64*Math.ceil(ne(i.clusterMaxSize)/64),fields:t.aggregateFields}}),ee(e.aggregate,t.attributes.fields),e}function h(e,i){return i.field?S(e,{...i,type:"field",field:i.field}):i.valueExpression?S(e,{...i,type:"expression",valueExpression:i.valueExpression}):{field:null,fieldIndex:null}}function S(e,i){switch(i.type){case"expression":{const t=i.valueExpression;if(!e.fields[t]){const s=e.indexCount++;e.fields[t]={...i,name:t,fieldIndex:s}}return{fieldIndex:e.fields[t].fieldIndex}}case"label-expression":{const t=JSON.stringify(i.label);if(!e.fields[t]){const s=e.indexCount++;e.fields[t]={...i,name:t,fieldIndex:s}}return{fieldIndex:e.fields[t].fieldIndex}}case"field":{const t=i.field;return i.target==="aggregate"&&e.fields[t]||(e.fields[t]={...i,name:t}),{field:t}}case"statistic":return e.fields[i.name]={...i},{field:i.name}}}function Ke(e,i=!1){const t=new Array;let s=0;return t.push(Qe(e,s++,i)),t}function Y(e,i,t,s,r,n=!1){const a=S(i,{type:"label-expression",target:s,context:{mesh:!0},resultType:"string",label:{labelExpression:t.labelExpression,labelExpressionInfo:t.labelExpressionInfo?{expression:t.labelExpressionInfo.expression}:null,symbol:!!t.symbol,where:t.where}}),{fieldIndex:l}=a,u=F(e);return{...v(t,u,n),fieldIndex:l,target:s,index:r}}function We(e,i,t){const s="featureReduction"in i&&i.featureReduction;if(!s)return{fields:[],labels:[],matcher:null,rendererOverride:null};const r="aggregate",n=[];let a=null,l=pe(i.geometryType),u=[],o=null;if(s)switch(s.type){case"selection":throw new d(b,"Mapview does not support `selection` reduction type",s);case"cluster":case"binning":if(s.type==="cluster"?l="esriGeometryPoint":s.type==="binning"&&(l="esriGeometryPolygon"),s.renderer){for(const p of s.fields)me(n,p);o=s.renderer,a=W(null,r,s.renderer,t),u=s&&s.labelsVisible&&s.labelingInfo||[]}else if(s.type==="cluster"){if(o=ke(n,i.renderer,s,null),s.symbol){const p=F(o);a={type:"simple",symbol:v(s.symbol,p,t),symbologyType:p.symbologyType}}u=s&&s.labelsVisible&&s.labelingInfo||[]}}return et(e,n),{labels:ge(u,s.type==="binning"?"esriGeometryPolygon":l),matcher:a,fields:n,rendererOverride:o}}function Qe(e,i,t=!1){var w;const s={indexCount:0,fields:{}},r="featureReduction"in e&&e.featureReduction?"aggregate":"feature";if("sublayers"in e){const c={type:"subtype",subtypeField:e.subtypeField,renderers:{},symbologyType:x.DEFAULT},g={type:"subtype",mapping:{},target:"feature"},y={type:"subtype",classes:{}},U={type:"symbol",target:"feature",aggregateFields:[],attributes:s,storage:g,mesh:{matcher:c,aggregateMatcher:null,labels:y,sortKey:null}},te=new Set;let be=0;for(const{renderer:E,subtypeCode:M,labelingInfo:ve,labelsVisible:xe}of e.sublayers){const O=W(s,r,E,t),C=ae(s,r,E),ie=xe&&ve;if("visualVariables"in E&&E.visualVariables&&E.visualVariables.length)throw new d(b,"Visual variables are currently not supported for subtype layers");if(O.type==="dictionary")throw new d(b,"Dictionary renderer is not supported in subtype layers");if(O.type==="subtype")throw new d(b,"Nested subtype renderers is not supported");if(T(C)&&C.type==="subtype")throw new d(b,"Nested subtype storage is not supported");if(T(C)&&T(C.attributeMapping))throw new d(b,"Non-visual-variable attributes are not supported in subtype layers");if(O.type==="heatmap")throw new d(b,"Heatmaps are not supported in subtype layers");if(O.type==="pie-chart")throw new d(b,"Pie-charts are not supported in subtype layers");if(te.has(M))throw new d(b,"Subtype codes for sublayers must be unique");te.add(M),c.renderers[M]=O,g.mapping[M]=C,ie&&(y.classes[M]=ie.map(he=>Y(E,s,he,"feature",be++,t)))}return U}if(e.renderer.type==="heatmap"&&Z()==="raster"){const{radius:c,fieldOffset:g,field:y}=e.renderer;return{type:"heatmap",aggregateFields:[],attributes:s,target:r,storage:null,mesh:{radius:c,fieldOffset:g,field:h(s,{target:r,field:y,resultType:"numeric"}).field}}}const n=We(s,e,t),a=pe(e.geometryType),l=(w=n.rendererOverride)!=null?w:e.renderer,u=W(s,r,l,t),o=ae(s,r,l),p=Ze(s,e.orderBy),m=ge(e.labelsVisible&&e.labelingInfo||[],a);let f=0;const L=[...m.map(c=>Y(l,s,c,"feature",f++,t)),...n.labels.map(c=>Y(l,s,c,"aggregate",f++,t))];return{type:"symbol",target:r,attributes:s,aggregateFields:n.fields,storage:o,mesh:{matcher:u,labels:{type:"simple",classes:L},aggregateMatcher:n.matcher,sortKey:p}}}function Xe(e){var i;return((i=e.renderer)==null?void 0:i.type)==="heatmap"&&Z()==="raster"?{type:"heatmap"}:{type:"symbol"}}function Ze(e,i){if(D(i)||!i.length)return null;i.length>1&&I.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${i.length}. All but the first will be discarded`);const t=i[0],s=t.order==="ascending"?"asc":"desc";return t.field?{field:t.field,order:s}:t.valueExpression?{fieldIndex:S(e,{type:"expression",target:"feature",valueExpression:t.valueExpression,resultType:"numeric"}).fieldIndex,order:s}:(I.error(new d(b,"Expected to find a field or valueExpression for OrderByInfo",t)),null)}function et(e,i){const t={mesh:!0,storage:!0};for(const s of i){const{name:r,outStatistic:n}=s,{statisticType:a,onStatisticField:l}=n;let u=null,o=null,p=null;const m="numeric",f="feature";"onStatisticValueExpression"in n?o=S(e,{type:"expression",target:f,valueExpression:n.onStatisticValueExpression,resultType:m}).fieldIndex:"onStatisticNormalizationField"in n?(u=S(e,{type:"field",target:f,field:l,resultType:m}).field,p=n.onStatisticNormalizationField):u=S(e,{type:"field",target:f,field:l,resultType:m}).field,S(e,{type:"statistic",target:"aggregate",name:r,context:t,inField:u,inNormalizationField:p,inFieldIndex:o,statisticType:a})}}function ae(e,i,t){let s;switch(t.type){case"simple":case"class-breaks":case"unique-value":case"dictionary":s={visualVariables:!0,attributes:null};break;default:s=Ve(t).getStorageSpec(t)}return tt(e,i,s,t)}function tt(e,i,t,s){if(D(t))return null;const{visualVariables:r,attributes:n}=t;let a=null;r&&"visualVariables"in s&&(a=it(e,i,s.visualVariables));const l=T(a)?4:0;let u=null;return T(n)&&(u=n.map((o,p)=>{const{field:m,fieldIndex:f}=h(e,{valueExpression:o.valueExpression,field:o.field,resultType:"numeric",target:i});return{binding:p+l,field:m,fieldIndex:f}})),{type:"simple",target:i,attributeMapping:u,vvMapping:a}}function it(e,i,t){if(!t||!t.length)return[];const s={storage:!0},r="numeric";return Ce(t).map(n=>{var o;const a=ze(n.type),{field:l,fieldIndex:u}=h(e,{target:i,valueExpression:n.valueExpression,field:n.field,context:s,resultType:r});switch(n.type){case"size":return n.valueExpression==="$view.scale"?null:{type:"size",binding:a,field:l,fieldIndex:u,normalizationField:h(e,{target:i,field:n.normalizationField,context:s,resultType:r}).field,valueRepresentation:(o=n.valueRepresentation)!=null?o:null};case"color":return{type:"color",binding:a,field:l,fieldIndex:u,normalizationField:h(e,{target:i,field:n.normalizationField,context:s,resultType:r}).field};case"opacity":return{type:"opacity",binding:a,field:l,fieldIndex:u,normalizationField:h(e,{target:i,field:n.normalizationField,context:s,resultType:r}).field};case"rotation":return{type:"rotation",binding:a,field:l,fieldIndex:u}}}).filter(n=>n)}function W(e,i,t,s=!1){const r=Te(e,{indexCount:0,fields:{}});switch(t.type){case"simple":case"dot-density":return st(r,t,s);case"class-breaks":return nt(r,i,t,s);case"unique-value":return lt(r,i,t,s);case"dictionary":return at(r,t,s);case"heatmap":return ot(r,t,s);case"pie-chart":return rt(r,t,s)}}function st(e,i,t=!1){const s=i.getSymbols(),r=s.length?s[0]:null,n=F(i);return{type:"simple",symbol:v(r,n,t),symbologyType:n.symbologyType}}function rt(e,i,t=!1){const s=i.getSymbols(),r=s[0],n=s.length>1?s[1]:null,a=F(i);return{type:"pie-chart",markerSymbol:v(r,a,t),fillSymbol:v(n,a,t),symbologyType:a.symbologyType}}function nt(e,i,t,s=!1){const r={mesh:!0,use:"renderer.field"},n=t.backgroundFillSymbol,{field:a,fieldIndex:l}=h(e,{target:i,field:t.field,valueExpression:t.valueExpression,resultType:"numeric",context:r}),u=t.normalizationType,o=u==="log"?"esriNormalizeByLog":u==="percent-of-total"?"esriNormalizeByPercentOfTotal":u==="field"?"esriNormalizeByField":null,p=F(t),m=t.classBreakInfos.map(f=>({symbol:v(f.symbol,p,s),min:f.minValue,max:f.maxValue})).sort((f,L)=>f.min-L.min);return{type:"interval",attributes:e.fields,field:a,fieldIndex:l,backgroundFillSymbol:v(n,p,s),defaultSymbol:v(t.defaultSymbol,p,s),intervals:m,normalizationField:t.normalizationField,normalizationTotal:t.normalizationTotal,normalizationType:o,isMaxInclusive:t.isMaxInclusive,symbologyType:p.symbologyType}}function lt(e,i,t,s=!1){const r=[],n=t.backgroundFillSymbol,a={target:i,context:{mesh:!0},resultType:"string"};if(t.field&&typeof t.field!="string")throw new d(b,"Expected renderer.field to be a string",t);const{field:l,fieldIndex:u}=h(e,{...a,field:t.field,valueExpression:t.valueExpression}),o=F(t);for(const p of t.uniqueValueInfos)r.push({value:""+p.value,symbol:v(p.symbol,o,s)});return{type:"map",attributes:e.fields,field:l,fieldIndex:u,field2:h(e,{...a,field:t.field2}).field,field3:h(e,{...a,field:t.field3}).field,fieldDelimiter:t.fieldDelimiter,backgroundFillSymbol:v(n,o),defaultSymbol:v(t.defaultSymbol,o),map:r,symbologyType:o.symbologyType}}function at(e,i,t=!1){const s=F(i);return{type:"dictionary",config:i.config,fieldMap:i.fieldMap,scaleExpression:i.scaleExpression,url:i.url,symbolOptions:s,symbologyType:s.symbologyType}}function ot(e,i,t=!1){const s=i.getSymbols(),r=s.length?s[0]:null,n=F(i);return{type:"heatmap",symbol:v(r,n,t),symbologyType:n.symbologyType}}export{W as K,F as S,ke as c,Pe as d,Ue as f,ht as i,Ae as m,wt as v,me as x,St as z};
