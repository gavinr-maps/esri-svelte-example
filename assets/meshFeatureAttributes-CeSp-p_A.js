import{j as n}from"./Point-XGrwlf63.js";import{N as r}from"./MeshTransform-CIhaTwDv.js";function l(o,t,i=a){return new n({x:o[i.originX],y:o[i.originY],z:o[i.originZ],spatialReference:t})}function c(o,t=a){return new r({translation:[o[t.translationX],-o[t.translationZ],o[t.translationY]],rotationAxis:[o[t.rotationX],-o[t.rotationZ],o[t.rotationY]],rotationAngle:o[t.rotationDeg],scale:[o[t.scaleX],o[t.scaleZ],o[t.scaleY]]})}const a={originX:"originX",originY:"originY",originZ:"originZ",translationX:"translationX",translationY:"translationY",translationZ:"translationZ",scaleX:"scaleX",scaleY:"scaleY",scaleZ:"scaleZ",rotationX:"rotationX",rotationY:"rotationY",rotationZ:"rotationZ",rotationDeg:"rotationDeg"};export{c as i,l as n};
