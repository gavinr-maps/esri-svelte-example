import{a as U,aB as d,t as L}from"./index-3399a756.js";import{M as A,P as c,U as G,G as _,L as p,D as h,o as n}from"./enums-64ab819c.js";import{E as O}from"./Texture-cba35665.js";function M(e,t,a="nearest",i=!1){var f;const r=!(i&&t.pixelType==="u8"),o=r?_.FLOAT:_.UNSIGNED_BYTE,s=t.pixels==null||t.pixels.length===0?null:r?t.getAsRGBAFloat():t.getAsRGBA(),u=(f=e.capabilities.textureFloat)==null?void 0:f.textureFloatLinear,g={width:t.width,height:t.height,target:A.TEXTURE_2D,pixelFormat:c.RGBA,internalFormat:e.type===U.WEBGL2&&r?G.RGBA32F:c.RGBA,samplingMode:!u||a!=="bilinear"&&a!=="cubic"?p.NEAREST:p.LINEAR,dataType:o,wrapMode:h.CLAMP_TO_EDGE,flipped:!1};return new O(e,g,s)}function b(e,t){const{spacing:a,offsets:i,coefficients:r,size:[o,s]}=t,u=a[0]>1,g={width:u?4*o:o,height:s,target:A.TEXTURE_2D,pixelFormat:c.RGBA,internalFormat:e.type===U.WEBGL2?G.RGBA32F:c.RGBA,dataType:_.FLOAT,samplingMode:p.NEAREST,wrapMode:h.CLAMP_TO_EDGE,flipped:!1},f=new Float32Array(u?o*s*16:2*i.length);if(u&&r!=null)for(let l=0,m=0;l<r.length;l++)f[m++]=r[l],l%3==2&&(f[m++]=1);else for(let l=0;l<s;l++)for(let m=0;m<o;m++){const E=4*(l*o+m),T=2*(m*s+l);f[E]=i[T],f[E+1]=i[T+1],f[E+3]=i[T]===-1?0:1}return new O(e,g,f)}function R(e,t){const a={width:t.length/4,height:1,target:A.TEXTURE_2D,pixelFormat:c.RGBA,internalFormat:c.RGBA,dataType:_.UNSIGNED_BYTE,samplingMode:p.NEAREST,wrapMode:h.CLAMP_TO_EDGE,flipped:!1};return new O(e,a,t)}function w(e,t,a,i=1,r=!0){return{u_flipY:r,u_applyTransform:!!e,u_opacity:i,u_transformSpacing:e?e.spacing:d,u_transformGridSize:e?e.size:d,u_targetImageSize:t,u_srcImageSize:a}}function N(e,t){return{u_colormapOffset:t||0,u_colormapMaxIndex:e?e.length/4-1:0}}function V(e,t){return{u_scale:e,u_offset:t}}function y(e){return{u_bandCount:e.bandCount,u_minOutput:e.outMin,u_maxOutput:e.outMax,u_minCutOff:e.minCutOff,u_maxCutOff:e.maxCutOff,u_factor:e.factor,u_useGamma:e.useGamma,u_gamma:e.gamma,u_gammaCorrection:e.gammaCorrection}}function k(e){return{u_hillshadeType:e.hillshadeType,u_sinZcosAs:e.sinZcosAs,u_sinZsinAs:e.sinZsinAs,u_cosZs:e.cosZs,u_weights:e.weights,u_factor:e.factor,u_minValue:e.minValue,u_maxValue:e.maxValue}}function I(e,t){const a=e.gl,i=t.glName,r=new Map;if(L(i))return r;const o=a.getProgramParameter(i,a.ACTIVE_UNIFORMS);let s;for(let u=0;u<o;u++)s=a.getActiveUniform(i,u),s&&r.set(s.name,{location:a.getUniformLocation(i,s.name),info:s});return r}function v(e,t,a){Object.keys(a).forEach(i=>{const r=t.get(i)||t.get(i+"[0]");r&&x(e,i,a[i],r)})}function S(e,t,a,i){a.length===i.length&&(i.some(r=>r==null)||a.some(r=>r==null)||a.forEach((r,o)=>{t.setUniform1i(r,o),e.bindTexture(i[o],o)}))}function x(e,t,a,i){if(i===null||a==null)return!1;const{info:r}=i;switch(r.type){case n.FLOAT:r.size>1?e.setUniform1fv(t,a):e.setUniform1f(t,a);break;case n.FLOAT_VEC2:e.setUniform2fv(t,a);break;case n.FLOAT_VEC3:e.setUniform3fv(t,a);break;case n.FLOAT_VEC4:e.setUniform4fv(t,a);break;case n.FLOAT_MAT3:e.setUniformMatrix3fv(t,a);break;case n.FLOAT_MAT4:e.setUniformMatrix4fv(t,a);break;case n.INT:r.size>1?e.setUniform1iv(t,a):e.setUniform1i(t,a);break;case n.BOOL:e.setUniform1i(t,a?1:0);break;case n.INT_VEC2:case n.BOOL_VEC2:e.setUniform2iv(t,a);break;case n.INT_VEC3:case n.BOOL_VEC3:e.setUniform3iv(t,a);break;case n.INT_VEC4:case n.BOOL_VEC4:e.setUniform4iv(t,a);break;default:return!1}return!0}export{k as A,y as E,v as O,V as T,R as _,M as c,S as d,N as g,I as h,b as l,w as p};
