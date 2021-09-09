var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,n=(t,r,s)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s;import{cc as a,bB as l,cl as c,cm as d,o as h}from"./vendor.5b1a85aa.js";import{a as u}from"./Container.37ffa055.js";import{I as f}from"./Utils.e2f03d29.js";import{o as p,a as g,m}from"./WGLContainer.702d0e97.js";class y extends u{constructor(e,t,r,s=r){super(),this.triangleCountReportedInDebug=0,this.transforms={dvs:a(),tileMat3:a()},this.triangleCount=0,this.key=new l(e),this.bounds=t,this.size=r,this.coordRange=s}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}get coords(){return this._coords}get bounds(){return this._bounds}set bounds(e){this._coords=[e[0],e[3]],this._bounds=e}setTransform(e,t){const r=t/(e.resolution*e.pixelRatio),s=this.transforms.tileMat3,[o,i]=e.toScreenNoRotation([0,0],this.coords),n=this.size[0]/this.coordRange[0]*r,a=this.size[1]/this.coordRange[1]*r;c(s,n,0,0,0,a,0,o,i,1),d(this.transforms.dvs,e.displayViewMat3,s)}}const b=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class w extends p{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(b),this.setStencilReference(),super.renderChildren(e)}createRenderParams(e){const{state:a}=e;return l=((e,t)=>{for(var r in t||(t={}))o.call(t,r)&&n(e,r,t[r]);if(s)for(var r of s(t))i.call(t,r)&&n(e,r,t[r]);return e})({},super.createRenderParams(e)),c={requiredLevel:this._tileInfoView.getClosestInfoForScale(a.scale).level,displayLevel:this._tileInfoView.tileInfo.scaleToZoom(a.scale)},t(l,r(c));var l,c}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[g],drawPhase:f.DEBUG|f.MAP|f.HIGHLIGHT,target:()=>this.getStencilTarget()})),h("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[m],drawPhase:f.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}updateTransforms(e){for(const t of this.children){const r=this._tileInfoView.getTileResolution(t.key);t.setTransform(e,r)}}setStencilReference(){let e=1;for(const t of this.children)t.stencilRef=e++}}export{w as o,y as r};
