import{s}from"./screenUtils-_ZIvrt5o.js";import{e as i,v as d}from"./vec2-maR1OrZI.js";import{s as a}from"./vec32-Dvg_eL9J.js";import{n as c}from"./vec3f64-BLpZdpfb.js";import{x as u}from"./elevationInfoUtils-BC_66_Fg.js";function S(n,o,e,r){e.projectToRenderScreen(n,p),e.projectToRenderScreen(o,f),i(r,f,p),d(r,r)}function T(n,o,e,r,m=c()){const t=a(R,n);return t[2]=u(r,t,o,e)||0,r.renderCoordsHelper.toRenderCoords(t,o,m),m}const R=c(),p=s(),f=s();export{T as i,S as n};