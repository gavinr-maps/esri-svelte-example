import{E as b}from"./ByteSizeUnit-BsxeN7wM.js";import{a as M}from"./Cyclical-oTUX3aX7.js";import{r as $}from"./mathUtils-C4_ghTv4.js";import{m as h}from"./quantityUtils-D0GB2dMc.js";import{l as I}from"./subclass-BZA_h8Db.js";import{I as u,l as p,m as D,A as S,H as T,J as x,K as F}from"./Point-Cg0-ChZE.js";import{l as c}from"./intl-CChhNOV8.js";function y(n,t,r){return n.units[t][r]}function s(n,t,r,o=2,e="abbr"){return`${c(t,{minimumFractionDigits:o,maximumFractionDigits:o,signDisplay:t>0?"never":"exceptZero"})} ${y(n,r,e)}`}function m(n,t,r,o=2,e="abbr"){return`${c(t,{minimumFractionDigits:o,maximumFractionDigits:o,signDisplay:"exceptZero"})} ${y(n,r,e)}`}function J(n,t,r,o=2,e="abbr"){const i=p(t,r);return s(n,u(t,r,i),i,o,e)}function L(n,t,r,o=2,e="abbr"){const i=p(t,r);return m(n,u(t,r,i),i,o,e)}function N(n,t,r,o=2,e="abbr"){const i=x(t,r);return s(n,u(t,r,i),i,o,e)}function U(n,t,r,o=2,e="abbr"){const i=x(t,r);return m(n,u(t,r,i),i,o,e)}function Y(n,t,r,o=2,e="abbr"){const i=D(t,r);return s(n,u(t,r,i),i,o,e)}function j(n,t,r,o=2,e="abbr"){const i=D(t,r);return m(n,u(t,r,i),i,o,e)}function k(n,t,r,o=2,e="abbr"){const i=F(t,r);return s(n,u(t,r,i),i,o,e)}function A(n,t,r,o=2,e="abbr"){const i=F(t,r);return m(n,u(t,r,i),i,o,e)}function H(n,t,r,o=2,e="abbr"){const i=S(t,r);return s(n,u(t,r,i),i,o,e)}function q(n,t,r,o=2,e="abbr"){const i=T(t,r);return s(n,u(t,r,i),i,o,e)}const d=(n,t)=>({style:"unit",unitDisplay:"narrow",unit:"degree",maximumFractionDigits:t,minimumFractionDigits:t,signDisplay:n>0?"never":"exceptZero"});function C(n,t,r,o,e,i=M,B=!0){let a=i.normalize(h(u(n,t,"degrees"),r,o),0,B);const f=d(a,e??2);return a=w(a,f),c(a,f)}const g=new Map;function w(n,t){const r=JSON.stringify(t);let o=g.get(r);return o||(o=new Intl.NumberFormat("en-US",t),g.set(r,o)),/^[-+]?360\.?0*°?$/.test(o.format(n))?0:n}const l=["B","kB","MB","GB","TB"];function P(n,t){let r=(t=Math.round(t))===0?0:Math.floor(Math.log(t)/Math.log(b.KILOBYTES));r=$(r,0,l.length-1);const o=c(t/b.KILOBYTES**r,{maximumFractionDigits:2});return I(n.units.bytes[l[r]],{fileSize:o})}export{H as $,k as B,J as D,U as F,A as M,P as T,y as b,Y as d,s as g,j as h,q as j,m as p,C as w,L as x,N as y};