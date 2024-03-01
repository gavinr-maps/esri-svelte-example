import{e as O}from"./mat3f64-q3fE-ZOt.js";import{e as I}from"./quatf64-Bdb9ZJJK.js";import{aa as b,ch as v,ci as g,cj as S,ck as T,cl as Y,cm as j,ab as k}from"./index-B1qcMJFy.js";import{a as W,s as X,o as Z,m as w,j as B,_ as C,q as D,p as F,y as G,E as H,L as J}from"./vec42-B-sS29RP.js";function K(a){return a[0]=0,a[1]=0,a[2]=0,a[3]=1,a}function x(a,o,c){c*=.5;const r=Math.sin(c);return a[0]=r*o[0],a[1]=r*o[1],a[2]=r*o[2],a[3]=Math.cos(c),a}function N(a,o){const c=2*Math.acos(o[3]),r=Math.sin(c/2);return r>b()?(a[0]=o[0]/r,a[1]=o[1]/r,a[2]=o[2]/r):(a[0]=1,a[1]=0,a[2]=0),c}function A(a,o,c){const r=o[0],e=o[1],s=o[2],t=o[3],i=c[0],u=c[1],n=c[2],h=c[3];return a[0]=r*h+t*i+e*n-s*u,a[1]=e*h+t*u+s*i-r*n,a[2]=s*h+t*n+r*u-e*i,a[3]=t*h-r*i-e*u-s*n,a}function Q(a,o,c){c*=.5;const r=o[0],e=o[1],s=o[2],t=o[3],i=Math.sin(c),u=Math.cos(c);return a[0]=r*u+t*i,a[1]=e*u+s*i,a[2]=s*u-e*i,a[3]=t*u-r*i,a}function R(a,o,c){c*=.5;const r=o[0],e=o[1],s=o[2],t=o[3],i=Math.sin(c),u=Math.cos(c);return a[0]=r*u-s*i,a[1]=e*u+t*i,a[2]=s*u+r*i,a[3]=t*u-e*i,a}function U(a,o,c){c*=.5;const r=o[0],e=o[1],s=o[2],t=o[3],i=Math.sin(c),u=Math.cos(c);return a[0]=r*u+e*i,a[1]=e*u-r*i,a[2]=s*u+t*i,a[3]=t*u-s*i,a}function V(a,o){const c=o[0],r=o[1],e=o[2];return a[0]=c,a[1]=r,a[2]=e,a[3]=Math.sqrt(Math.abs(1-c*c-r*r-e*e)),a}function d(a,o,c,r){const e=o[0],s=o[1],t=o[2],i=o[3];let u,n,h,f,l,m=c[0],$=c[1],p=c[2],q=c[3];return n=e*m+s*$+t*p+i*q,n<0&&(n=-n,m=-m,$=-$,p=-p,q=-q),1-n>b()?(u=Math.acos(n),h=Math.sin(u),f=Math.sin((1-r)*u)/h,l=Math.sin(r*u)/h):(f=1-r,l=r),a[0]=f*e+l*m,a[1]=f*s+l*$,a[2]=f*t+l*p,a[3]=f*i+l*q,a}function aa(a){const o=k,c=o(),r=o(),e=o(),s=Math.sqrt(1-c),t=Math.sqrt(c);return a[0]=s*Math.sin(2*Math.PI*r),a[1]=s*Math.cos(2*Math.PI*r),a[2]=t*Math.sin(2*Math.PI*e),a[3]=t*Math.cos(2*Math.PI*e),a}function oa(a,o){const c=o[0],r=o[1],e=o[2],s=o[3],t=c*c+r*r+e*e+s*s,i=t?1/t:0;return a[0]=-c*i,a[1]=-r*i,a[2]=-e*i,a[3]=s*i,a}function ra(a,o){return a[0]=-o[0],a[1]=-o[1],a[2]=-o[2],a[3]=o[3],a}function E(a,o){const c=o[0]+o[4]+o[8];let r;if(c>0)r=Math.sqrt(c+1),a[3]=.5*r,r=.5/r,a[0]=(o[5]-o[7])*r,a[1]=(o[6]-o[2])*r,a[2]=(o[1]-o[3])*r;else{let e=0;o[4]>o[0]&&(e=1),o[8]>o[3*e+e]&&(e=2);const s=(e+1)%3,t=(e+2)%3;r=Math.sqrt(o[3*e+e]-o[3*s+s]-o[3*t+t]+1),a[e]=.5*r,r=.5/r,a[3]=(o[3*s+t]-o[3*t+s])*r,a[s]=(o[3*s+e]+o[3*e+s])*r,a[t]=(o[3*t+e]+o[3*e+t])*r}return a}function ea(a,o,c,r){const e=.5*Math.PI/180;o*=e,c*=e,r*=e;const s=Math.sin(o),t=Math.cos(o),i=Math.sin(c),u=Math.cos(c),n=Math.sin(r),h=Math.cos(r);return a[0]=s*u*h-t*i*n,a[1]=t*i*h+s*u*n,a[2]=t*u*n-s*i*h,a[3]=t*u*h+s*i*n,a}function ca(a){return"quat("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+")"}const sa=W,ta=X,ia=Z,ua=A,na=w,ha=B,Ma=C,L=D,fa=L,z=F,la=z,y=G,ma=H,$a=J;function pa(a,o,c){const r=v(o,c);return r<-.999999?(g(M,qa,o),S(M)<1e-6&&g(M,da,o),T(M,M),x(a,M,Math.PI),a):r>.999999?(a[0]=0,a[1]=0,a[2]=0,a[3]=1,a):(g(M,o,c),a[0]=M[0],a[1]=M[1],a[2]=M[2],a[3]=1+r,y(a,a))}const M=Y(),qa=j(1,0,0),da=j(0,1,0);function ga(a,o,c,r,e,s){return d(P,o,e,s),d(_,c,r,s),d(a,P,_,2*s*(1-s)),a}const P=I(),_=I();function ya(a,o,c,r){const e=Pa;return e[0]=c[0],e[3]=c[1],e[6]=c[2],e[1]=r[0],e[4]=r[1],e[7]=r[2],e[2]=-o[0],e[5]=-o[1],e[8]=-o[2],y(a,E(a,e))}const Pa=O();Object.freeze(Object.defineProperty({__proto__:null,add:ia,calculateW:V,conjugate:ra,copy:sa,dot:ha,equals:$a,exactEquals:ma,fromEuler:ea,fromMat3:E,getAxisAngle:N,identity:K,invert:oa,len:fa,length:L,lerp:Ma,mul:ua,multiply:A,normalize:y,random:aa,rotateX:Q,rotateY:R,rotateZ:U,rotationTo:pa,scale:na,set:ta,setAxes:ya,setAxisAngle:x,slerp:d,sqlerp:ga,sqrLen:la,squaredLength:z,str:ca},Symbol.toStringTag,{value:"Module"}));export{ma as N,ra as O,ea as T,ta as X,x as b,N as v,A as x};
