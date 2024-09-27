import"./geometry-DpwwkAX1.js";import"./subclass-BR3PhgZG.js";import{u as j}from"./screenUtils-PfxkaaMN.js";import{r as E}from"./timeUtils-DQR2jUPL.js";import{a4 as G,b as _,_ as z,f as O}from"./Point-DB4Hp4hH.js";import{j as V}from"./quantizationUtils-CIQDbQFJ.js";import{b as A,i as D}from"./fieldUtils-CNduWQU9.js";import{l as L,u as P}from"./heatmapUtils-C-uT6ZIV.js";import{Z as R}from"./utils-BaQRRNPl.js";import{c as T,B as U}from"./utils-BTpbFBnk.js";let c=null;const Y=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function Z(t,e,a){return t.x<0?t.x+=e:t.x>a&&(t.x-=e),t}function te(t,e,a,i){const o=G(a)?_(a):null,m=o?Math.round((o.valid[1]-o.valid[0])/e.scale[0]):null;return t.map(s=>{const n=new z(s.geometry);return V(e,n,n),s.geometry=o?Z(n,m??0,i[0]):n,s})}function re(t,e=18,a,i,o){const m=new Float64Array(i*o);e=Math.round(j(e));let s=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;const N=P(a);for(const{geometry:d,attributes:g}of t){const{x:$,y:u}=d,b=Math.max(0,$-e),M=Math.max(0,u-e),F=Math.min(o,u+e),I=Math.min(i,$+e),h=+N(g);for(let f=M;f<F;f++)for(let p=b;p<I;p++){const y=f*i+p,w=L(p-$,f-u,e)*h,l=m[y]+=w;s=Math.min(s,l),n=Math.max(n,l)}}return{min:s,max:n}}function B(t){const e=Y.exec(t);if(!e)return null;const{hh:a,mm:i,ss:o,ms:m}=e.groups;return Number(a)*E.hours+Number(i)*E.minutes+Number(o)*E.seconds+Number(m||0)}async function oe(t,e,a=!0){if(!e)return[];const{field:i,field2:o,field3:m,fieldDelimiter:s,fieldInfos:n,timeZone:N}=t,d=i&&(n==null?void 0:n.find(l=>l.name.toLowerCase()===i.toLowerCase())),g=!!d&&A(d),$=!!d&&R(d),u=t.valueExpression,b=t.normalizationType,M=t.normalizationField,F=t.normalizationTotal,I=[],h=t.viewInfoParams;let f=null,p=null;if(u){if(!c){const{arcadeUtils:l}=await D();c=l}c.hasGeometryOperations(u)&&await c.enableGeometryOperations(),f=c.createFunction(u),p=h?c.getViewInfo({viewingMode:h.viewingMode,scale:h.scale,spatialReference:new O(h.spatialReference)}):null}const y=t.fieldInfos,w=!(e[0]&&"declaredClass"in e[0]&&e[0].declaredClass==="esri.Graphic")&&y?{fields:y}:null;return e.forEach(l=>{const x=l.attributes;let r;if(u){const v=w?{...l,layer:w}:l,C=c.createExecContext(v,p,N);r=c.executeFunction(f,C)}else x&&(r=x[i],o?(r=`${T(r)}${s}${T(x[o])}`,m&&(r=`${r}${s}${T(x[m])}`)):typeof r=="string"&&a&&($?r=r?new Date(r).getTime():null:g&&(r=r?B(r):null)));if(b&&typeof r=="number"&&isFinite(r)){const v=x&&parseFloat(x[M]);r=U(r,b,v,F)}I.push(r)}),I}export{oe as b,te as j,B as w,re as x};
