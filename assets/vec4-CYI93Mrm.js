import{t as L}from"./colorUtils-Rxh2V3ai.js";import{B as P}from"./Accessor-BmwT4B0c.js";const $=()=>P.getLogger("esri.views.3d.support.buffer.math");function k(t,n,e){if(t.count!==n.count)return;const o=t.count,d=e[0],r=e[1],c=e[2],u=e[3],f=e[4],i=e[5],s=e[6],l=e[7],B=e[8],w=e[9],y=e[10],m=e[11],h=e[12],T=e[13],v=e[14],V=e[15],p=t.typedBuffer,z=t.typedBufferStride,a=n.typedBuffer,_=n.typedBufferStride;for(let j=0;j<o;j++){const S=j*z,g=j*_,M=a[g],b=a[g+1],G=a[g+2],O=a[g+3];p[S]=d*M+f*b+B*G+h*O,p[S+1]=r*M+i*b+w*G+T*O,p[S+2]=c*M+s*b+y*G+v*O,p[S+3]=u*M+l*b+m*G+V*O}}function A(t,n,e,o=4,d=o){if(t.length/o!=n.length/d)return void $().error("source and destination buffers need to have the same number of elements");const r=t.length/o,c=e[0],u=e[1],f=e[2],i=e[3],s=e[4],l=e[5],B=e[6],w=e[7],y=e[8],m=e[9],h=e[10],T=e[11],v=e[12],V=e[13],p=e[14],z=e[15];let a=0,_=0;for(let j=0;j<r;j++){const S=n[a],g=n[a+1],M=n[a+2],b=n[a+3];t[_]=c*S+s*g+y*M+v*b,t[_+1]=u*S+l*g+m*M+V*b,t[_+2]=f*S+B*g+h*M+p*b,t[_+3]=i*S+w*g+T*M+z*b,a+=d,_+=o}}function C(t,n,e){R(t.typedBuffer,n.typedBuffer,e,t.typedBufferStride,n.typedBufferStride)}function R(t,n,e,o=4,d=o){if(t.length/o!=n.length/d)return;const r=t.length/o,c=e[0],u=e[1],f=e[2],i=e[3],s=e[4],l=e[5],B=e[6],w=e[7],y=e[8];let m=0,h=0;for(let T=0;T<r;T++){const v=n[m],V=n[m+1],p=n[m+2],z=n[m+3];t[h]=c*v+i*V+B*p,t[h+1]=u*v+s*V+w*p,t[h+2]=f*v+l*V+y*p,t[h+3]=z,m+=d,h+=o}}function D(t,n){const e=Math.min(t.count,n.count),o=t.typedBuffer,d=t.typedBufferStride,r=n.typedBuffer,c=n.typedBufferStride;for(let u=0;u<e;u++){const f=u*d,i=u*c,s=r[i],l=r[i+1],B=r[i+2],w=s*s+l*l+B*B;if(w>0){const y=1/Math.sqrt(w);o[f]=y*s,o[f+1]=y*l,o[f+2]=y*B}}}function E(t,n,e){q(t.typedBuffer,n,e,t.typedBufferStride)}function q(t,n,e,o=4){const d=Math.min(t.length/o,n.count),r=n.typedBuffer,c=n.typedBufferStride;let u=0,f=0;for(let i=0;i<d;i++)t[f]=e*r[u],t[f+1]=e*r[u+1],t[f+2]=e*r[u+2],t[f+3]=e*r[u+3],u+=c,f+=o}function F(t,n,e,o){x(t.typedBuffer,n,e,o,t.typedBufferStride)}function x(t,n,e,o,d=4){const r=Math.min(t.length/d,n.count),c=n.typedBuffer,u=n.typedBufferStride;let f=0,i=0;const s=1/L;for(let l=0;l<r;l++)t[i]=o*(e*c[f])**s,t[i+1]=o*(e*c[f+1])**s,t[i+2]=o*(e*c[f+2])**s,t[i+3]=o*e*c[f+3],f+=u,i+=d}Object.freeze(Object.defineProperty({__proto__:null,linearToSRGB:x,linearToSRGBView:F,normalize:D,scale:q,scaleView:E,transformMat3:R,transformMat3View:C,transformMat4:A,transformMat4View:k},Symbol.toStringTag,{value:"Module"}));export{F as c,x as d,C as n,R as o,D as u};
