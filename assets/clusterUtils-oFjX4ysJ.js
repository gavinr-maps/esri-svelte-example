import{ba as j,c as o,f as u,g,ay as E,a5 as S,aZ as k,s as A,w as z,D as C}from"./index-XUlETPJZ.js";import{x as $}from"./MD5-uECS9GB-.js";import{b as _,e as w,j as G,l as v}from"./SizeVariable-eDAmtsU9.js";let d=class extends j(E){constructor(i){super(i),this.expression=null,this.title=null,this.returnType=null}};o([u({type:String,json:{write:!0}})],d.prototype,"expression",void 0),o([u({type:String,json:{write:!0}})],d.prototype,"title",void 0),o([u({type:String,json:{write:!0}})],d.prototype,"returnType",void 0),d=o([g("esri.layers.support.ExpressionInfo")],d);const b=d;var x;let p=x=class extends E{constructor(e){super(e),this.isAutoGenerated=!1,this.name=null,this.alias=null,this.onStatisticField=null,this.onStatisticExpression=null,this.statisticType=null}clone(){return new x({name:this.name,alias:this.alias,isAutoGenerated:this.isAutoGenerated,onStatisticExpression:S(this.onStatisticExpression),onStatisticField:this.onStatisticField,statisticType:this.statisticType})}};o([u({type:Boolean,json:{write:!0}})],p.prototype,"isAutoGenerated",void 0),o([u({type:String,json:{write:!0}})],p.prototype,"name",void 0),o([u({type:String,json:{write:!0}})],p.prototype,"alias",void 0),o([u({type:String,json:{write:!0}})],p.prototype,"onStatisticField",void 0),o([u({type:b,json:{write:!0}})],p.prototype,"onStatisticExpression",void 0),o([u({type:String,json:{write:!0}})],p.prototype,"statisticType",void 0),p=x=o([g("esri.layers.support.AggregateField")],p);const h=p;var y;let f=y=class extends _{writeLevels(e,i,t){for(const l in e){const r=this.levels[l];return void(i.stops=r)}}clone(){var e,i;return new y({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:w(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:w(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:(e=this.stops)==null?void 0:e.map(t=>t.clone()),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:(i=this.legendOptions)==null?void 0:i.clone(),levels:S(this.levels)})}};o([u()],f.prototype,"levels",void 0),o([k("levels")],f.prototype,"writeLevels",null),f=y=o([g("esri.views.2d.engine.LevelDependentSizeVariable")],f);const R=A.getLogger("esri.views.2d.layers.support.clusterUtils");z.add("esri-cluster-arcade-enabled",!0);const D=z("esri-cluster-arcade-enabled"),Z=(e,i,t,l,r)=>{const s=i.clone();if(!I(s))return s;if(s.authoringInfo||(s.authoringInfo=new G),s.authoringInfo.isAutoGenerated=!0,"visualVariables"in s){const a=(s.visualVariables||[]).filter(n=>n.valueExpression!=="$view.scale"),T=V(a);a.forEach(n=>{n.type==="rotation"?n.field?n.field=c(e,n.field,"avg_angle","number"):n.valueExpression&&(n.field=m(e,n.valueExpression,"avg_angle","number"),n.valueExpression=null):n.normalizationField?(n.field=c(e,n.field,"avg_norm","number",n.normalizationField),n.normalizationField=null):n.field?n.field=c(e,n.field,"avg","number"):n.valueExpression&&(n.field=m(e,n.valueExpression,"avg","number"),n.valueExpression=null)}),T==null&&!L(a)&&r&&(a.push(F(t,l)),s.dynamicClusterSize=!0),s.visualVariables=a}switch(s.type){case"simple":break;case"pie-chart":for(const a of s.attributes)a.field?a.field=c(e,a.field,"sum","number"):a.valueExpression&&(a.field=m(e,a.valueExpression,"sum","number"),a.valueExpression=null);break;case"unique-value":s.field?s.field=c(e,s.field,"mode","string"):s.valueExpression&&(s.field=m(e,s.valueExpression,"mode","string"),s.valueExpression=null);break;case"class-breaks":s.normalizationField?(s.field=c(e,s.field,"avg_norm","number",s.normalizationField),s.normalizationField=null):s.field?s.field=c(e,s.field,"avg","number"):s.valueExpression&&(s.field=m(e,s.valueExpression,"avg","number"),s.valueExpression=null)}return s},V=e=>{for(const i of e)if(i.type==="size")return i;return null};function H(e,i,t){const l=e.clone();let r=!1;if("visualVariables"in l){const s=(l.visualVariables||[]).filter(a=>a.valueExpression!=="$view.scale");V(s)==null&&(l.visualVariables||(l.visualVariables=[]),l.visualVariables.push(F(i,t)),l.dynamicClusterSize=!0,r=!0)}return{renderer:l,didInject:r}}const L=e=>{for(const i of e)if(i.field==="cluster_count")return!0;return!1},F=(e,i)=>{const t=[new v({value:0,size:0}),new v({value:1})];if(i==null)return new _({field:"cluster_count",stops:[...t,new v({value:2,size:0})]});const l=Object.keys(i).reduce((r,s)=>({...r,[s]:[...t,new v({value:Math.max(2,i[s].minValue),size:e.clusterMinSize}),new v({value:Math.max(3,i[s].maxValue),size:e.clusterMaxSize})]}),{});return new f({field:"cluster_count",levels:l})},I=e=>{const i=t=>R.error(new C("Unsupported-renderer",t,{renderer:e}));if(!e)return!1;switch(e.type){case"unique-value":if(e.field2||e.field3)return i("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1;break;case"class-breaks":if(e.normalizationField){const t=e.normalizationType;if(t!=="field")return i(`FeatureReductionCluster does not support a normalizationType of ${t}`),!1}break;case"simple":case"pie-chart":break;default:return i(`FeatureReductionCluster does not support renderers of type ${e.type}`),!1}if(!D){if("valueExpression"in e&&e.valueExpression)return i("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in e&&e.visualVariables||[]).some(t=>!(!("valueExpression"in t)||!t.valueExpression)))return i("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function U(e,i,t){switch(e){case"sum":return`cluster_sum_${i}`;case"avg":case"avg_angle":return`cluster_avg_${i}`;case"mode":return`cluster_type_${i}`;case"avg_norm":{const l=t,r="field",s=i.toLowerCase()+",norm:"+r+","+l.toLowerCase();return"cluster_avg_"+$(s)}}}function m(e,i,t,l){const r=$(i),s=t==="mode"?`cluster_type_${r}`:t==="sum"?`cluster_sum_${r}`:`cluster_avg_${r}`;return e.some(a=>a.name===s)||e.push(new h({name:s,isAutoGenerated:!0,onStatisticExpression:new b({expression:i,returnType:l}),statisticType:t})),s}function c(e,i,t,l,r){if(i==="cluster_count"||e.some(a=>a.name===i))return i;const s=U(t,i,r);return e.some(a=>a.name===s)||(t==="avg_norm"?e.push(new h({name:s,isAutoGenerated:!0,onStatisticExpression:new b({expression:`$feature.${i} / $feature.${r}`,returnType:l}),statisticType:"avg"})):e.push(new h({name:s,isAutoGenerated:!0,onStatisticField:i,statisticType:t}))),s}export{h as a,I as b,Z as c,V as d,H as f,F as v};
