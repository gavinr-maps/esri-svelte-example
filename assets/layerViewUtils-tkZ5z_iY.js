import{s as e}from"./Accessor-BHnuXKD2.js";function l(n){return n&&typeof n.highlight=="function"}function o(n){return n&&typeof n.maskOccludee=="function"}function u(n,t,i){return n==null||n>=i&&(t===0||n<=t)}function f(n,t){if(t&&n){const{minScale:i,maxScale:r}=n;if(c(i,r))return u(t,i,r)}return!0}function c(n,t){return n!=null&&n>0||t!=null&&t>0}function s(n){return!(n!=null&&n.minScale)||!n.maxScale||n.minScale>=n.maxScale}function m(n){return n!=null&&typeof n=="object"&&"createQuery"in n&&"queryFeatures"in n&&"layer"in n&&"view"in n}function p(n,t,i){return new e("layerview:spatial-reference-incompatible",`The spatial reference of this ${n}${t?`(wkid:${t})`:""} is incompatible with the spatial reference of the view${i?`(wkid:${i})`:""}.`,{})}export{c,u as i,p as l,l as n,m as o,f as r,o as t,s as u};
