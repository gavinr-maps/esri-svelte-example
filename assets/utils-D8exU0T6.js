import{s as E}from"./Accessor-BHnuXKD2.js";import{u as z}from"./screenUtils-_ZIvrt5o.js";import{r as j}from"./timeUtils-D2X862bk.js";import{g as O,a1 as C,L as A,j as G}from"./Point-XGrwlf63.js";import{j as R}from"./quantizationUtils-2Az-xHPA.js";import{x as Y,o as D}from"./opacityUtils-CSd4XoR2.js";import{l as L,u as S}from"./heatmapUtils-DA7NmY3d.js";import{$ as V}from"./utils-DLmnG8WZ.js";import{m as v,B as P}from"./utils-B8VMZhYy.js";let c=null;const _=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function k(e,t,n){return e.x<0?e.x+=t:e.x>n&&(e.x-=t),e}function re(e,t,n,o){const r=C(n)?A(n):null,s=r?Math.round((r.valid[1]-r.valid[0])/t.scale[0]):null;return e.map(a=>{const l=new G(a.geometry);return R(t,l,l),a.geometry=r?k(l,s??0,o[0]):l,a})}function ie(e,t=18,n,o,r){const s=new Float64Array(o*r);t=Math.round(z(t));let a=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;const F=S(n);for(const{geometry:p,attributes:N}of e){const{x:g,y:f}=p,y=Math.max(0,g-t),b=Math.max(0,f-t),M=Math.min(r,f+t),x=Math.min(o,g+t),h=+F(N);for(let m=b;m<M;m++)for(let d=y;d<x;d++){const w=m*o+d,I=L(d-g,m-f,t)*h,u=s[w]+=I;a=Math.min(a,u),l=Math.max(l,u)}}return{min:a,max:l}}function q(e){const t=_.exec(e);if(!t)return null;const{hh:n,mm:o,ss:r,ms:s}=t.groups;return Number(n)*j.hours+Number(o)*j.minutes+Number(r)*j.seconds+Number(s||0)}async function se(e,t,n=!0){if(!t)return[];const{field:o,field2:r,field3:s,fieldDelimiter:a,fieldInfos:l,timeZone:F}=e,p=o&&(l==null?void 0:l.find(u=>u.name.toLowerCase()===o.toLowerCase())),N=!!p&&Y(p),g=!!p&&V(p),f=e.valueExpression,y=e.normalizationType,b=e.normalizationField,M=e.normalizationTotal,x=[],h=e.viewInfoParams;let m=null,d=null;if(f){if(!c){const{arcadeUtils:u}=await D();c=u}c.hasGeometryOperations(f)&&await c.enableGeometryOperations(),m=c.createFunction(f),d=h?c.getViewInfo({viewingMode:h.viewingMode,scale:h.scale,spatialReference:new O(h.spatialReference)}):null}const w=e.fieldInfos,I=!(t[0]&&"declaredClass"in t[0]&&t[0].declaredClass==="esri.Graphic")&&w?{fields:w}:null;return t.forEach(u=>{const $=u.attributes;let i;if(f){const T=I?{...u,layer:I}:u,U=c.createExecContext(T,d,F);i=c.executeFunction(m,U)}else $&&(i=$[o],r?(i=`${v(i)}${a}${v($[r])}`,s&&(i=`${i}${a}${v($[s])}`)):typeof i=="string"&&n&&(g?i=i?new Date(i).getTime():null:N&&(i=i?q(i):null)));if(y&&typeof i=="number"&&isFinite(i)){const T=$&&parseFloat($[b]);i=P(i,y,T,M)}x.push(i)}),x}function le(e){const t=e.field,n=e.normalizationType,o=e.normalizationField;let r;return n==="field"?r="(NOT "+o+" = 0)":n!=="log"&&n!=="natural-log"&&n!=="square-root"||(r=`(${t} > 0)`),r}function ae(e,t,n){const o=t!=null?e+" >= "+t:"",r=n!=null?e+" <= "+n:"";let s="";return s=o&&r?B(o,r):o||r,s?"("+s+")":""}function B(e,t){let n=e??"";return t!=null&&t&&(n=n?"("+n+") AND ("+t+")":t),n}function ue(e,t){if(e&&e.spatialRelationship!=="intersects")return new E(t,"Only 'intersects' spatialRelationship is supported for featureFilter")}function fe(e,t,n){const o=Z({layer:e,fields:t});if(o.length)return new E(n,"Unknown fields: "+o.join(", ")+". You can only use fields defined in the layer schema");const r=H({layer:e,fields:t});return r.length?new E(n,"Unsupported fields: "+r.join(", ")+". You can only use fields that can be fetched i.e. AdapterFieldUsageInfo.supportsStatistics must be true"):void 0}function Z(e){const t=e.layer;return e.fields.filter(n=>!t.getField(n))}function H(e){const t=e.layer;return e.fields.filter(n=>{const o=t.getFieldUsageInfo(n);return!o||!o.supportsStatistics})}export{le as F,q as I,ue as M,ae as N,fe as T,B as U,se as b,ie as w,re as x};
