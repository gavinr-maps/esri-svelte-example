import{M as j,s as B}from"./mathUtils-DV9iOXpW.js";import{j as x}from"./mat4-Fi6iAz29.js";import{v,b as e,x as M}from"./quat-4pa1e6ds.js";import{e as y}from"./quatf64-CCm9z-pX.js";import{s as b,_ as d,A as k,B as q}from"./vec32-Dvg_eL9J.js";import{m as w,y as z,N as C}from"./vec3f64-BLpZdpfb.js";function o(r=D){return[r[0],r[1],r[2],r[3]]}function i(r,n,t=o()){return b(t,r),t[3]=n,t}function g(r,n,t){return d(t,r,n),k(t,t),t[3]=-q(r,n),t}function h(r,n=o()){const t=x(u,r);return A(n,j(v(n,t))),n}function m(r,n,t=o()){return e(u,r,c(r)),e(a,n,c(n)),M(u,a,u),A(t,j(v(t,u)))}function l(r,n,t,s=o()){return i(w,r,f),i(z,n,$),i(C,t,p),m(f,$,f),m(f,p,s),s}function E(r){return r}function I(r){return r[3]}function c(r){return B(r[3])}function A(r,n){return r[3]=n,r}const D=[0,0,1,0],u=y(),a=y();o();const f=o(),$=o(),p=o();export{D as B,l as d,o as j,h as k,i as q,g as v,E as w,I as y,c as z};
