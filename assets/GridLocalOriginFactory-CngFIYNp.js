import{aR as I}from"./Accessor-BmwT4B0c.js";import{c as p}from"./vec32-Dvg_eL9J.js";import{r as S,n as O}from"./vec3f64-BLpZdpfb.js";import{r as R}from"./vec4f64-o2zAXfmz.js";import{o as y}from"./projectBuffer-CQnuEMuP.js";import{t as $}from"./Attribute-DGhdp5lO.js";import{e as j}from"./Material-C_-mgXN8.js";import{f as v}from"./FloatArray-BQXWSSJh.js";import{W as L,a as W,A as x}from"./RibbonLine.glsl-DwJpAQ1c.js";import{e as z}from"./VertexAttribute-Cq4MnHjR.js";var l,M,w;(function(t){t[t.RasterImage=0]="RasterImage",t[t.Features=1]="Features"})(l||(l={})),function(t){t[t.MapLayer=0]="MapLayer",t[t.ViewLayer=1]="ViewLayer",t[t.Outline=2]="Outline",t[t.SnappingHint=3]="SnappingHint"}(M||(M={})),function(t){t[t.WithRasterImage=0]="WithRasterImage",t[t.WithoutRasterImage=1]="WithoutRasterImage"}(w||(w={}));class A{constructor(i,e){this.vec3=i,this.id=e}}function b(t,i,e,s){return new A(S(t,i,e),s)}class C{constructor(i){this._originSR=i,this._rootOriginId="root/"+I(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5}getOrigin(i){const e=this._origins.get(this._rootOriginId);if(e==null){const c=b(i[0]+Math.random()-.5,i[1]+Math.random()-.5,i[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,c),c}const s=this._gridSize,m=Math.round(i[0]/s),g=Math.round(i[1]/s),u=Math.round(i[2]/s),h=`${m}/${g}/${u}`;let o=this._origins.get(h);const n=.5*s;if(p(r,i,e.vec3),r[0]=Math.abs(r[0]),r[1]=Math.abs(r[1]),r[2]=Math.abs(r[2]),r[0]<n&&r[1]<n&&r[2]<n){if(o){const c=Math.max(...r);if(p(r,i,o.vec3),r[0]=Math.abs(r[0]),r[1]=Math.abs(r[1]),r[2]=Math.abs(r[2]),Math.max(...r)<c)return o}return e}return o||(o=b(m*s,g*s,u*s,h),this._origins.set(h,o)),o}_drawOriginBox(i,e=R(1,1,0,1)){const s=window.view,m=s._stage,g=e.toString();if(!this._objects.has(g)){this._material=new L({width:2,color:e}),m.add(this._material);const a=new W(m,{pickable:!1}),_=new x({castShadow:!1});m.add(_),a.add(_),this._objects.set(g,_)}const u=this._objects.get(g),h=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],o=h.length,n=new Array(3*o),c=new Array,d=.5*this._gridSize;for(let a=0;a<o;a++)n[3*a]=i[0]+(1&h[a]?d:-d),n[3*a+1]=i[1]+(2&h[a]?d:-d),n[3*a+2]=i[2]+(4&h[a]?d:-d),a>0&&c.push(a-1,a);y(n,this._originSR,0,n,s.renderSpatialReference,0,o);const f=new v(this._material,[[z.POSITION,new $(n,c,3,!0)]],null,j.Line);m.add(f),u.addGeometry(f)}get test(){}}const r=O();export{C as _,M as a,b,l as e,w as t};
