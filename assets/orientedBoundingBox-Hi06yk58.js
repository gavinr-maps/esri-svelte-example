import{cM as g,f3 as x,f1 as o,f4 as y,f5 as A,f6 as B,f7 as I,cR as M,cN as E,eP as R,cQ as T,f8 as s,f9 as G,fa as H,ch as u}from"./index-XUlETPJZ.js";import"./mat3f64-sunSSgMR.js";import{B as J,O as b}from"./quat-Ux67tTAu.js";import{r as N,e as w}from"./quatf64-5VCgza3C.js";import"./vec4f64-_4WP0ZGf.js";import"./plane-jIl8Id_U.js";var v;(function(n){n[n.Multiply=1]="Multiply",n[n.Ignore=2]="Ignore",n[n.Replace=3]="Replace",n[n.Tint=4]="Tint"})(v||(v={}));function C(n=[0,0,0],t=[-1,-1,-1],e=w()){return{center:g(n),halfSize:g(t),quaternion:N(e)}}(()=>{const n=new Int8Array(162);let t=0;const e=l=>{for(let r=0;r<l.length;r++)n[t+r]=l[r];t+=6};return e([6,2,3,1,5,4]),e([0,2,3,1,5,4]),e([0,2,3,7,5,4]),e([0,1,3,2,6,4]),e([0,1,3,2,0,0]),e([0,1,5,7,3,2]),e([0,1,3,7,6,4]),e([0,1,3,7,6,2]),e([0,1,5,7,6,2]),e([0,1,5,4,6,2]),e([0,1,5,4,0,0]),e([0,1,3,7,5,4]),e([0,2,6,4,0,0]),e([0,0,0,0,0,0]),e([1,3,7,5,0,0]),e([2,3,7,6,4,0]),e([2,3,7,6,0,0]),e([2,3,1,5,7,6]),e([0,1,5,7,6,2]),e([0,1,5,7,6,4]),e([0,1,3,7,6,4]),e([4,5,7,6,2,0]),e([4,5,7,6,0,0]),e([4,5,1,3,7,6]),e([0,2,3,7,5,4]),e([6,2,3,7,5,4]),e([6,2,3,1,5,4]),n})();function D(n,t,e,l,r){if(J(r.quaternion,n.quaternion),l===x.Global){b(h,n.quaternion),o(i,n.center,h),y(c,i),A(f,c,n.halfSize),B(f,c,f);const a=I(f);M(f,c,n.halfSize);const z=I(f);if(a<e)E(r.center,n.center),R(i,e,e,e),M(r.halfSize,n.halfSize,i);else{const S=z>0?1+t/z:1,p=a>0?1+e/a:1,m=(p+S)/2,q=(p-S)/2;T(r.halfSize,c,q),s(r.halfSize,r.halfSize,n.halfSize,m),T(r.center,c,m),s(r.center,r.center,n.halfSize,q),G(i,i),H(r.center,r.center,i),o(r.center,r.center,r.quaternion)}}else{const a=R(i,0,0,1);s(r.center,n.center,a,(e+t)/2),b(h,n.quaternion),o(a,a,h),y(a,a),s(r.halfSize,n.halfSize,a,(e-t)/2)}return r}const i=u(),c=u(),f=u(),h=w();export{C as H,D as e,v as n};
