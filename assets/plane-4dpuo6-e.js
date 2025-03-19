import{b as q,r as k}from"./mathUtils-DV9iOXpW.js";import{P as a,r as d,A as P,_ as v,g as A,c as h,u as L,s as z,H as V,o as x}from"./vec32-Dvg_eL9J.js";import{n as E}from"./vec3f64-BLpZdpfb.js";import"./vec42-YcqnINSP.js";import{aC as B}from"./Accessor-BHnuXKD2.js";import{e as G}from"./mat3f64-BBpwCtoL.js";import{e as J}from"./mat4f64-Dk4dwAN8.js";import{e as K}from"./quatf64-CCm9z-pX.js";import{n as W}from"./vec2f64-Dy6m9Nrb.js";import{n as Y}from"./vec4f64-o2zAXfmz.js";import{q as Z}from"./mathUtils-B9R7G-2c.js";function Mt(t,r,e){const n=a(t,r)/a(t,t);return A(e,t,n)}function y(t,r){return a(t,r)/d(t)}function $t(t,r){const e=a(t,r)/(d(t)*d(r));return-q(e)}function gt(t,r,e){P(O,t),P(X,r);const n=a(O,X),c=q(n),o=v(O,O,X);return a(o,e)<0?2*Math.PI-c:c}const O=E(),X=E();class u{constructor(r){this._create=r,this._items=new Array,this._itemsPtr=0}get(){return this._itemsPtr===0&&B(()=>this._reset()),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const r=2*this._itemsPtr;this._items.length>r&&(this._items.length=r),this._itemsPtr=0}static createVec2f64(){return new u(W)}static createVec3f64(){return new u(E)}static createVec4f64(){return new u(Y)}static createMat3f64(){return new u(G)}static createMat4f64(){return new u(J)}static createQuatf64(){return new u(K)}get test(){}}const Dt=u.createVec2f64(),N=u.createVec3f64(),tt=u.createVec4f64();u.createMat3f64();const Ot=u.createMat4f64(),pt=u.createQuatf64();function H(t=M){return[t[0],t[1],t[2],t[3]]}function Ct(t=M[0],r=M[1],e=M[2],n=M[3]){return Q(t,r,e,n,tt.get())}function rt(t,r){return Q(r[0],r[1],r[2],r[3],t)}function Pt(t){return t}function Q(t,r,e,n,c=H()){return c[0]=t,c[1]=r,c[2]=e,c[3]=n,c}function At(t,r,e){return z(e,t),e[3]=r,e}function et(t,r,e){const n=r[0]*r[0]+r[1]*r[1]+r[2]*r[2],c=Math.abs(n-1)>1e-5&&n>1e-12?1/Math.sqrt(n):1;return e[0]=r[0]*c,e[1]=r[1]*c,e[2]=r[2]*c,e[3]=-(e[0]*t[0]+e[1]*t[1]+e[2]*t[2]),e}function nt(t,r,e,n=H()){const c=e[0]-r[0],o=e[1]-r[1],s=e[2]-r[2],i=t[0]-r[0],g=t[1]-r[1],D=t[2]-r[2],S=o*D-s*g,F=s*i-c*D,R=c*g-o*i,b=S*S+F*F+R*R,w=Math.abs(b-1)>1e-5&&b>1e-12?1/Math.sqrt(b):1;return n[0]=S*w,n[1]=F*w,n[2]=R*w,n[3]=-(n[0]*t[0]+n[1]*t[1]+n[2]*t[2]),n}function j(t,r,e,n=0,c=Math.floor(e*(1/3)),o=Math.floor(e*(2/3))){if(e<3)return!1;r(m,n);let s=c,i=!1;for(;s<e-1&&!i;)r(_,s),s++,i=!V(m,_);if(!i)return!1;for(s=Math.max(s,o),i=!1;s<e&&!i;)r(T,s),s++,h(p,m,_),P(p,p),h(C,_,T),P(C,C),i=!V(m,T)&&!V(_,T)&&Math.abs(a(p,C))<ct;return i?(nt(m,_,T,t),!0):(n!==0||c!==1||o!==2)&&j(t,r,e,0,1,2)}function Ut(t,r,e=!0){const n=r.length/3;return j(t,(c,o)=>x(c,r[3*o+0],r[3*o+1],r[3*o+2]),e?n-1:n)}const ct=.99619469809,m=E(),_=E(),T=E(),p=E(),C=E();function lt(t,r,e){return r!==t&&rt(t,r),t[3]=-a(t,e),t}function Ft(t,r){return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[3]=-t[3],r}function Rt(t,r,e,n){return v(T,r,t),et(e,T,n)}function bt(t,r,e,n){return U(l(t,r,h(N.get(),e,r),st,n))}function wt(t,r,e){return r!=null&&U(l(t,r.origin,r.direction,ot,e))}function Vt(t,r,e){return U(l(t,r.origin,r.vector,I.NONE,e))}function yt(t,r,e){return U(l(t,r.origin,r.vector,I.CLAMP,e))}function Xt(t,r){return $(t,r)>=0}function dt(t,r){const e=a(t,r.ray.direction),n=-$(t,r.ray.origin);if(n<0&&e>=0)return!1;if(e>-1e-6&&e<1e-6)return n>0;if((n<0||e<0)&&!(n<0&&e<0))return!0;const c=n/e;return e>0?c<r.c1&&(r.c1=c):c>r.c0&&(r.c0=c),r.c0<=r.c1}function qt(t,r){const e=a(t,r.ray.direction),n=-$(t,r.ray.origin);if(e>-1e-6&&e<1e-6)return n>0;const c=n/e;return e>0?c<r.c1&&(r.c1=c):c>r.c0&&(r.c0=c),r.c0<=r.c1}function vt(t,r,e){const n=A(N.get(),t,-t[3]),c=it(t,h(N.get(),r,n),N.get());return L(e,c,n),e}function Lt(t,r,e,n){const c=t,o=N.get(),s=N.get();Z(c,o,s);const i=h(N.get(),e,r),g=y(o,i),D=y(s,i),S=y(c,i);return x(n,g,D,S)}function it(t,r,e){const n=A(N.get(),t,a(t,r));return h(e,r,n),e}function xt(t,r){return Math.abs($(t,r))}function $(t,r){return a(t,r)+t[3]}var f;function U(t){return t===f.INTERSECTS_INSIDE_OUT||t===f.INTERSECTS_OUTSIDE_IN}function l(t,r,e,n,c){const o=a(t,e),s=$(t,r);if(o===0)return s>=0?f.INSIDE:f.OUTSIDE;let i=-s/o;return n&I.CLAMP&&(i=k(i,0,1)),!(n&I.INFINITE_MIN)&&i<0||!(n&I.INFINITE_MAX)&&i>1?s>=0?f.INSIDE:f.OUTSIDE:(L(c,r,A(c,e,i)),s>=0?f.INTERSECTS_INSIDE_OUT:f.INTERSECTS_OUTSIDE_IN)}(function(t){t[t.INTERSECTS_INSIDE_OUT=0]="INTERSECTS_INSIDE_OUT",t[t.INTERSECTS_OUTSIDE_IN=1]="INTERSECTS_OUTSIDE_IN",t[t.INSIDE=2]="INSIDE",t[t.OUTSIDE=3]="OUTSIDE"})(f||(f={}));const M=[0,0,1,0];var I;(function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"})(I||(I={}));const st=I.INFINITE_MIN|I.INFINITE_MAX,ot=I.INFINITE_MAX;export{Ut as A,dt as B,At as C,Ct as D,qt as G,vt as H,Lt as J,Ft as L,H as M,Pt as O,Rt as P,xt as Q,Q as U,$ as V,f as W,l as Z,Ot as a,$t as b,N as c,I as d,y as f,rt as h,Mt as i,bt as k,et as l,pt as o,nt as p,Vt as q,tt as r,Dt as t,gt as u,j as v,yt as w,wt as x,lt as y,Xt as z};
