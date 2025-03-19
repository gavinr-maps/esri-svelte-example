import{o as R}from"./floatRGBA-Cb__GiDF.js";import{B as $}from"./Accessor-BmwT4B0c.js";import{i as A}from"./mathUtils-Cfq9PL9W.js";import{n as b}from"./defaultCIMValues-Bb-CUowV.js";import{c as I}from"./definitions-CP59Y04S.js";const z=15.5,x=4,U=64,j=1024,v=()=>$.getLogger("esri.symbols.cim.rasterizingUtils"),L=32,P=t=>t==="vertical"||t==="horizontal"||t==="cross"||t==="esriSFSCross"||t==="esriSFSVertical"||t==="esriSFSHorizontal";function J(t,i,n){const e=i.style,a=A(Math.ceil(n)),o=P(e)?8*a:16*a,r=2*a;t.width=o,t.height=o;const s=t.getContext("2d");s.strokeStyle="#ffffff",s.lineWidth=a,s.beginPath(),e!=="vertical"&&e!=="cross"&&e!=="esriSFSCross"&&e!=="esriSFSVertical"||(s.moveTo(o/2,-r),s.lineTo(o/2,o+r)),e!=="horizontal"&&e!=="cross"&&e!=="esriSFSCross"&&e!=="esriSFSHorizontal"||(s.moveTo(-r,o/2),s.lineTo(o+r,o/2)),e!=="backward-diagonal"&&e!=="diagonal-cross"&&e!=="esriSFSDiagonalCross"&&e!=="esriSFSBackwardDiagonal"||(s.moveTo(-r,-r),s.lineTo(o+r,o+r),s.moveTo(o-r,-r),s.lineTo(o+r,r),s.moveTo(-r,o-r),s.lineTo(r,o+r)),e!=="forward-diagonal"&&e!=="diagonal-cross"&&e!=="esriSFSForwardDiagonal"&&e!=="esriSFSDiagonalCross"||(s.moveTo(o+r,-r),s.lineTo(-r,o+r),s.moveTo(r,-r),s.lineTo(-r,r),s.moveTo(o+r,o-r),s.lineTo(o-r,o+r)),s.stroke();const h=s.getImageData(0,0,t.width,t.height),l=new Uint8Array(h.data);let f;for(let c=0;c<l.length;c+=4)f=l[c+3]/255,l[c]=l[c]*f,l[c+1]=l[c+1]*f,l[c+2]=l[c+2]*f;return[l,t.width,t.height,a]}function K(t){t.length%2==1&&(t=[...t,...t]);const i=t.reduce((c,u)=>c+u,0),n=Math.round(i*x),e=1,a=new Float32Array(n*e);let o=0,r=0,s=.5,h=!0;for(const c of t){for(o=r,r+=c*x;s<=r;){const u=s-.5,m=Math.min(Math.abs(s-o),Math.abs(s-r));a[u]=h?-m:m,s++}h=!h}const l=a.length,f=new Uint8Array(4*l);for(let c=0;c<l;++c){const u=a[c]/x;R(u/U*.5+.5,f,4*c)}return[f,n,e]}function Q(t,i){t==null&&(t=[]);const n=i==="Butt",e=i==="Square",a=!n&&!e;t.length%2==1&&(t=[...t,...t]);const o=z,r=2*o;let s=0;for(const g of t)s+=g;const h=Math.round(s*o),l=new Float32Array(h*r),f=.5*o;let c=0,u=0,m=.5,M=!0;for(const g of t){for(c=u,u+=g*o;m<=u;){let p=.5;for(;p<r;){const D=(p-.5)*h+m-.5,d=a?(p-o)*(p-o):Math.abs(p-o);l[D]=M?n?Math.max(Math.max(c+f-m,d),Math.max(m-u+f,d)):d:a?Math.min((m-c)*(m-c)+d,(m-u)*(m-u)+d):e?Math.min(Math.max(m-c,d),Math.max(u-m,d)):Math.min(Math.max(m-c+f,d),Math.max(u+f-m,d)),p++}m++}M=!M}const F=l.length,T=new Uint8Array(4*F);for(let g=0;g<F;++g){const p=(a?Math.sqrt(l[g]):l[g])/o;R(p,T,4*g)}return[T,h,r]}function X(t,i){const{colorRamp:n,gradientType:e}=i,a=n.type==="CIMFixedColorRamp",o=i.interval||b.CIMGradientFill.interval;let r=w(n);return a&&(r=N(r,o)),e==="Discrete"||a?B(t,r,o):q(t,r)}let y;function Y(t,i){const{colorRamp:n,gradientType:e}=i,a=w(n),o=n.type==="CIMFixedColorRamp";if(e==="Continuous"&&!o)return C(t,a);const r=i.interval??b.CIMGradientFill.interval;if(o)return C(t,N(a,r));const s=[];y??(y=document.createElement("canvas")),S(y,a,r,1,0);const h=y.getContext("2d").getImageData(0,0,r,1).data;for(let l=0,f=0;l<r;l++,f=4*l){const c=[h[f+0],h[f+1],h[f+2],h[f+3]];s.push({offset:l/r,color:c}),s.push({offset:(l+1)/r,color:c})}return C(t,s)}function w(t){const i=[];switch(t.type){case"CIMPolarContinuousColorRamp":case"CIMLinearContinuousColorRamp":{t.type==="CIMPolarContinuousColorRamp"&&v().warnOnce("CIMPolarContinuousColorRamp is currently unsupported. Falling back to CIMLinearContinuousColorRamp.");const n=t;i.push({offset:0,color:[n.fromColor[0],n.fromColor[1],n.fromColor[2],n.fromColor[3]/255]}),i.push({offset:1,color:[n.toColor[0],n.toColor[1],n.toColor[2],n.toColor[3]/255]});break}case"CIMFixedColorRamp":{const n=t,e=1/(n.colors.length-1);let a=0;for(const o of n.colors)i.push({offset:a,color:[o[0],o[1],o[2],o[3]/255]}),a+=e;break}case"CIMMultipartColorRamp":{const n=t,e=n.weights.reduce((o,r)=>o+r,0);let a=0;for(let o=0;o<n.colorRamps.length;o++){const r=n.colorRamps[o],s=n.weights[o],h=w(r);for(const l of h)i.push({offset:(a+l.offset*s)/e,color:l.color});a+=s}break}default:v().error(`Color ramp "${t.type}" currently unsupported.`)}return i}function N(t,i){const n=[],e=(t.length-1)/(i-1);for(let a=0;a<i;a++){const o=t[Math.round(a*e)].color;n.push({offset:a/i,color:o}),n.push({offset:(a+1)/i,color:o})}return n}function q(t,i){return S(t,i,L,1,I),k(t)}function B(t,i,n){return S(t,i,n,1,I),k(t)}function C(t,i,n=0){for(const{offset:e,color:a}of i)t.addColorStop(Math.min(Math.max(e,n),1-n),`rgba(${a[0]}, ${a[1]}, ${a[2]}, ${a[3]})`)}function S(t,i,n,e,a){const o=n+2*a;t.width=o,t.height=e;const r=(a+1)/o,s=t.getContext("2d",{willReadFrequently:!0});if(i.length>0){const h=s.createLinearGradient(0,0,o,e);C(h,i,r),s.fillStyle=h}else s.fillStyle="rgba(128, 128, 128, 1)";s.fillRect(0,0,o,e)}function k(t){const{width:i,height:n}=t,e=t.getContext("2d").getImageData(0,0,i,n),a=new Uint8Array(e.data);for(let o=0;o<a.length;o+=4){const r=a[o+3]/255;a[o]*=r,a[o+1]*=r,a[o+2]*=r}return[a,i,n]}function E(t){var a,o,r,s;const i=((o=(a=t[0])==null?void 0:a[0])==null?void 0:o[0])??0,n=((s=(r=t[0])==null?void 0:r[0])==null?void 0:s[1])??0,e={ymin:n,xmin:i,ymax:n,xmax:i,width:0,height:0};for(let h=0;h<t.length;h++){const l=t[h];for(let f=0;f<l.length;f++){const c=l[f][0],u=l[f][1];c<e.xmin&&(e.xmin=c),c>e.xmax&&(e.xmax=c),u<e.ymin&&(e.ymin=u),u>e.ymax&&(e.ymax=u)}}return e.width=Math.abs(e.xmax-e.xmin),e.height=Math.abs(e.ymax-e.ymin),e}function Z(t,i){const n=E(t),e=n.width===0?1:n.width,a=n.height===0?1:n.height,o=[];for(let r=0;r<t.length;r++){const s=t[r],h=[];for(let l=0;l<s.length;l++){let f=Math.round(s[l][0]-n.xmin),c=Math.round(s[l][1]-n.ymin);if(f=i.xmin+f*i.width/e,c=i.ymin+c*i.height/a,isNaN(f)||isNaN(c))throw new Error("Scaled shape has NaN values");h.push([f,c])}o.push(h)}return o}function _(t,i,n){const e=[];for(let a=0;a<t.length;a++){const o=t[a],r=[];for(let s=0;s<o.length;s++){const h=o[s][0]+i,l=o[s][1]+n;if(isNaN(h)||isNaN(l))throw new Error("Scaled shape has NaN values");r.push([h,l])}e.push(r)}return e}export{_ as R,Z as T,U as c,j as e,J as f,X as g,K as m,Y as p,x as t,Q as u};
