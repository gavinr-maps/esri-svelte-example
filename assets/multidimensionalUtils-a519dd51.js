import{f as h,g,eO as v,j as x,az as U,a6 as k,n as F}from"./index-27db053b.js";var y;let d=y=class extends U{constructor(e){super(e),this.variableName=null,this.dimensionName=null,this.values=[],this.isSlice=!1}clone(){return new y({variableName:this.variableName,dimensionName:this.dimensionName,values:k(this.values),isSlice:this.isSlice})}};h([g({type:String,json:{write:!0}})],d.prototype,"variableName",void 0),h([g({type:String,json:{write:!0}})],d.prototype,"dimensionName",void 0),h([g({type:v.array(v.oneOf([v.native(Number),v.array(v.native(Number))])),json:{write:!0}})],d.prototype,"values",void 0),h([g({type:Boolean,json:{write:!0}})],d.prototype,"isSlice",void 0),d=y=h([x("esri.layers.support.DimensionalDefinition")],d);const N=d;function D(e,n,i){var t;const o=n.shift();if(i.length===0){const s=[];i.push({sliceId:-1,multidimensionalDefinition:s})}const a=i.length;for(let s=0;s<a;s++){const m=i.shift().multidimensionalDefinition;(t=o.values)==null||t.forEach(l=>{i.push({sliceId:-1,multidimensionalDefinition:[...m,{variableName:e,dimensionName:o.name,values:[l]}]})})}n.length&&D(e,n,i)}function j(e,n){const i=[];let o=0;return(n?e.variables.filter(a=>a.name.toLowerCase()===n.toLowerCase()):[...e.variables].sort((a,t)=>a.name>t.name?1:-1)).forEach(a=>{const t=[],s=[...a.dimensions].sort((m,l)=>m.name>l.name?-1:1);D(a.name,s,t),t.forEach(m=>{i.push({...m,sliceId:o++})})}),i}function L(e,n,i){let o=e;if(n&&(n=[...n].sort((a,t)=>a.dimensionName<t.dimensionName?-1:1)).forEach(({dimensionName:a,values:t,isSlice:s})=>{t.length&&(o=o.filter(m=>{const l=m.multidimensionalDefinition.find(r=>r.dimensionName===a);if(l==null)return!1;const u=l.values[0];return typeof u=="number"?typeof t[0]=="number"?t.includes(u):t.some(r=>r[0]<=u&&r[1]>=u):typeof t[0]=="number"?t.some(r=>u[0]<=r&&u[1]>=r):s?t.some(r=>r[0]===u[0]&&r[0]===u[1]):t.some(r=>r[0]>=u[0]&&r[0]<=u[1]||r[1]>=u[0]&&r[1]<=u[1]||r[0]<u[0]&&r[1]>u[1])}))}),o.length&&(i==null?void 0:i.start)!=null&&i.end!=null){const a=i.start.getTime(),t=i.end.getTime(),s=o[0].multidimensionalDefinition.findIndex(m=>m.dimensionName==="StdTime");s>-1&&(o=o.filter(m=>{const l=m.multidimensionalDefinition[s].values[0];return a<=l&&t>=l}))}return o.map(a=>a.sliceId)}function w(e,n){return Array.isArray(e)?n[0]===n[1]?e[0]===n[0]||e[1]===n[0]:e[0]>=n[0]&&e[0]<=n[1]&&e[1]>=n[0]&&e[1]<=n[1]:e>=n[0]&&e<=n[1]}function A(e,n){return e[0]<=n[0]&&e[1]>=n[0]||e[0]<=n[1]&&e[1]>=n[1]||e[0]>=n[0]&&e[1]<=n[1]}function M(e){return e.length===1?[e[0],e[0]]:[e[0],e[e.length-1]]}function C(e,n,i){var s,m;if(!((s=n==null?void 0:n.subsetDefinitions)!=null&&s.length))return e;let o;if(i){const{variables:l}=n;if(l.length&&!l.includes(i))return null;const u=n.subsetDefinitions.find(r=>r.dimensionName===e.name&&r.variableName===i);if(!((m=u==null?void 0:u.values)!=null&&m.length))return e;o=M(u.values)}else{const l=n.dimensions.find(({name:u})=>u===e.name);o=l==null?void 0:l.extent}const a=o;if(!(a!=null&&a.length))return e;const t=e.values.filter(l=>w(l,a));return{...e,extent:[...a],values:t}}function T(e,n,i){var a;if(!((a=n==null?void 0:n.subsetDefinitions)!=null&&a.length))return!1;const{variables:o}=n;if(o.length&&e.some(({variableName:t})=>t&&!o.includes(t)))return!0;for(let t=0;t<e.length;t++){const s=e[t],m=n.subsetDefinitions.find(l=>(s.variableName===""||l.variableName===s.variableName)&&l.dimensionName===s.dimensionName);if(m!=null&&m.values.length){const l=M(m.values);if(!s.isSlice&&s.values.length===2&&!Array.isArray(s.values[0])&&s.values[0]!==s.values[1]&&i){if(!A(s.values,l))return!0}else if(s.values.some(u=>!w(u,l)))return!0}}return!1}function R(e,n){if(e==null)return{isOutside:!1};const{geometry:i,timeExtent:o,multidimensionalDefinition:a}=n;let t=null;if(o!=null&&(t=O(e,o),t==null))return{isOutside:!0};const{areaOfInterest:s}=e;if(s&&i){const m=i.type==="point"?i:i.type==="extent"?i.center:i.type==="polygon"?i.centroid:null;if(m&&!s.contains(m))return{isOutside:!0}}return a!=null&&a.length&&T(a,e,!0)?{isOutside:!0}:{isOutside:!1,intersection:{geometry:i,timeExtent:t,multidimensionalDefinition:a}}}function O(e,n){const i=e.dimensions.find(({name:s})=>s==="StdTime");if(i==null||n.start==null&&n.end==null)return n;n=n.clone();const{start:o,end:a}=n.toJSON(),t=o===a?[o]:o!=null&&a!=null?[o,a]:[o??a];return t.length===2&&(i!=null&&i.extent.length)&&(t[0]=Math.max(t[0],i.extent[0]),t[1]=Math.min(t[1],i.extent[1]??i.extent[0]),t[1]<t[0])||T([new N({variableName:"",dimensionName:"StdTime",isSlice:t.length===1,values:t})],e,!0)?null:(n.start=new Date(t[0]),n.end=new Date(t[1]??t[0]),n)}function Y(e,n={}){var r,c;const{multidimensionalInfo:i,keyProperties:o}=e;if(i==null)return null;const{variableName:a,multidimensionalSubset:t,multidimensionalDefinition:s}=n,m=s!=null?(r=s[0])==null?void 0:r.variableName:null,l=a||m||(o==null?void 0:o.DefaultVariable);let{variables:u}=i;return(c=t==null?void 0:t.variables)!=null&&c.length&&(u=u.filter(({name:f})=>t.variables.includes(f))),l?u.find(({name:f})=>f===l)??u[0]:u[0]}function $(e,n={}){const i=Y(e,n);if(!i)return null;const o=[],{dimensions:a,name:t}=i;if(a.length===0)return[new N({variableName:t,dimensionName:"",values:[],isSlice:!0})];for(let s=0;s<a.length;s++){const m=C(a[s],n.multidimensionalSubset,t);if(!m)return null;const{values:l,extent:u}=m;let r=(l==null?void 0:l[0])??u[0];m.name.toLowerCase()==="stdz"&&!m.hasRanges&&Math.abs(u[1])<=Math.abs(u[0])&&(r=l!=null&&l.length?l[l.length-1]:u[1]),o.push(new N({variableName:t,dimensionName:m.name,values:[r],isSlice:!n.useRangeForRangedDimensionInfo||!!m.hasRanges}))}return o}function z(e){return!!(e!=null&&e.length)&&e.some(n=>{if(n.values==null)return!0;const i=n.values.length;return i===0||i>1||!n.isSlice&&Array.isArray(n.values[0])})}function B(e,n){var o;if(n==null||e==null)return null;let i=n.variables.map(a=>({...a}));return(o=e==null?void 0:e.variables)!=null&&o.length&&(i=i.filter(({name:a})=>e.variables.includes(a)),i.forEach(a=>{a.dimensions=a.dimensions.map(t=>C(t,e,a.name)).filter(F)})),i}function I(e,n){var m;const{values:i}=n;if(i!=null&&i.length){const l=Array.isArray(i[0]),u=Array.isArray(e);return l!==u?-1:l&&u?i.findIndex(r=>r[0]===e[0]&&r[1]===e[1]):i.indexOf(e)}const{extent:o}=n;if(Array.isArray(e)||e<o[0]||e>o[1])return-1;const a=n.interval||1;if(n.unit!=="ISO8601")return Math.round((e-o[0])/a);const t=o[0];let s=-1;switch(((m=n.intervalUnit)==null?void 0:m.toLowerCase())||"seconds"){case"seconds":s=Math.round((e-t)/1e3/a);break;case"minutes":s=Math.round((e-t)/6e4/a);break;case"hours":s=Math.round((e-t)/36e5/a);break;case"days":s=Math.round((e-t)/864e5/a);break;case"months":{const l=new Date(e).getUTCFullYear()-new Date(t).getUTCFullYear(),u=new Date(t).getUTCMonth(),r=new Date(e).getUTCMonth();s=l===0?r-u:r+11-u+12*(l-1)}break;case"years":s=Math.round((new Date(e).getUTCFullYear()-new Date(t).getUTCFullYear())/a);break;case"decades":s=Math.round((new Date(e).getUTCFullYear()-new Date(t).getUTCFullYear())/10/a)}return s}function p(e){var s,m;let n=(s=e.values)==null?void 0:s.length;if(n)return n;const{extent:i,unit:o}=e,a=e.interval||1,t=i?i[1]-i[0]:0;if(o!=="ISO8601")return Math.round(t/a);switch(((m=e.intervalUnit)==null?void 0:m.toLowerCase())??"seconds"){case"seconds":n=Math.round(t/1e3/a);break;case"minutes":n=Math.round(t/6e4/a);break;case"hours":n=Math.round(t/36e5/a);break;case"days":n=Math.round(t/864e5/a);break;case"months":{const l=new Date(i[1]).getUTCFullYear()-new Date(i[0]).getUTCFullYear(),u=new Date(i[0]).getUTCMonth(),r=new Date(i[1]).getUTCMonth();n=l===0?r-u+1:r+11-u+12*(l-1)+1}break;case"years":n=Math.round((new Date(i[1]).getUTCFullYear()-new Date(i[0]).getUTCFullYear())/a);break;case"decades":n=Math.round((new Date(i[1]).getUTCFullYear()-new Date(i[0]).getUTCFullYear())/10/a);break;default:n=0}return n}function J(e,n){let i=0;const o=e[0].variableName,a=[...n.variables].sort((t,s)=>t.name>s.name?1:-1);for(let t=0;t<a.length;t++){const s=a[t],m=[...s.dimensions].sort((r,c)=>r.name>c.name?-1:1);if(s.name!==o){i+=m.map(r=>p(r)).reduce((r,c)=>r*c);continue}const l=m.map(r=>p(r)),u=m.length;for(let r=0;r<u;r++){const c=e.find(b=>b.dimensionName===m[r].name);if(c==null)return null;const f=I(c.values[0],m[r]);if(f===-1)return null;l.shift(),i+=r===u-1?f:f*l.reduce((b,S)=>b*S)}break}return i}export{J as D,L as a,$ as d,Y as f,B as g,z as h,j as i,R as m,T as o,N as p};
