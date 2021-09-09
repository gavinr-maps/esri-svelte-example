import{S as e,i as t,s as n,e as r,t as o,a as s,b as a,c as i,d as c,f as l,g as d,h as u,j as p,n as m,k as f,W as h}from"./vendor.5b1a85aa.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();function g(e){let t,n;return{c(){t=r("p"),n=o(e[0])},m(e,r){s(e,t,r),a(t,n)},p(e,t){1&t&&i(n,e[0])},d(e){e&&c(t)}}}function v(e){let t,n,o,a,i,f,h,v,x,y=e[0]&&g(e);return{c(){t=r("h1"),t.textContent="Esri Svelte Example",n=l(),o=r("p"),o.innerHTML='An example\n  <a href="https://svelte.dev/">Svelte</a>\n  application that shows how use the ArcGIS API for JavaScript to load a map. Check\n  out the\n  <a href="https://github.com/gavinr/esri-svelte-example">code</a>\n  for more info!',a=l(),i=r("div"),f=l(),y&&y.c(),h=d(),u(i,"class","view svelte-n8chaa")},m(r,c){s(r,t,c),s(r,n,c),s(r,o,c),s(r,a,c),s(r,i,c),s(r,f,c),y&&y.m(r,c),s(r,h,c),v||(x=p(e[1].call(null,i)),v=!0)},p(e,[t]){e[0]?y?y.p(e,t):(y=g(e),y.c(),y.m(h.parentNode,h)):y&&(y.d(1),y=null)},i:m,o:m,d(e){e&&c(t),e&&c(n),e&&c(o),e&&c(a),e&&c(i),e&&c(f),y&&y.d(e),e&&c(h),v=!1,x()}}}function x(e,t,n){let{centerText:r}=t;return e.$$set=e=>{"centerText"in e&&n(0,r=e.centerText)},[r,e=>{const t=new f({basemap:"streets"});new h({container:e,map:t,zoom:8,center:[-90,38]}).watch("center",(e=>{const{latitude:t,longitude:o}=e;n(0,r=`Lat: ${t.toFixed(2)} | Lon: ${o.toFixed(2)}`)}))}]}new class extends e{constructor(e){super(),t(this,e,x,v,n,{centerText:0})}}({target:document.getElementById("app")});
