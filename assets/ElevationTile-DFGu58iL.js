import{t as M}from"./ElevationSamplerData-IYvomv6Y.js";class W{constructor(a,t=null){if(this.tile=a,t!=null&&a!=null){const s=a.extent;this._samplerData=new M(t,s)}}get zmin(){return this._samplerData!=null?this._samplerData.data.minValue:0}get zmax(){return this._samplerData!=null?this._samplerData.data.maxValue:0}get hasNoDataValues(){var a;return!!((a=this._samplerData)!=null&&a.data.hasNoDataValues)}sample(a,t){if(this._samplerData==null)return;const{safeWidth:s,data:g,dx:v,dy:w,y1:y,x0:z}=this._samplerData,{width:o,values:l,noDataValue:r}=g,h=V(w*(y-t),0,s),m=V(v*(a-z),0,s),p=Math.floor(h),D=Math.floor(m),n=p*o+D,d=n+o,u=l[n],i=l[d],f=l[n+1],_=l[d+1];if(u!==r&&i!==r&&f!==r&&_!==r){const c=m-D,x=u+(f-u)*c;return x+(i+(_-i)*c-x)*(h-p)}}}function V(e,a,t){return e<a?a:e>t?t:e}export{W as t};
