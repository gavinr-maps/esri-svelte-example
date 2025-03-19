import{s as u}from"./Accessor-BHnuXKD2.js";import{U as _,L as o,G as t,P as R}from"./enums-D9v74xTE.js";class p{constructor(l,n,e,r){this.dataType=l,this.samplingMode=n,this.pixelFormat=e,this.internalFormat=r}}function F(a,l){const{textureFloatLinear:n,colorBufferFloat:e}=a.capabilities,r=e==null?void 0:e.textureFloat,i=e==null?void 0:e.textureHalfFloat,c=e==null?void 0:e.floatBlend,s=a.driverTest.floatBufferBlend.result;if(!r&&!i)throw new u("heatmap:missing-color-buffer-float","HeatmapRenderer requires the WebGL extension EXT_color_buffer_float or EXT_color_buffer_half_float or WEBGL_color_buffer_float.");if(!(c&&s||i))throw new u("heatmap:missing-float-blend","HeatmapRenderer requires the WebGL extension EXT_float_blend or EXT_color_buffer_half_float."+(s?"":" This device claims support for EXT_float_blend, but does not actually support it."));const h=r&&c&&s,b=i,f=n,d=!!(e!=null&&e.R32F),m=!!(e!=null&&e.R16F);if(h&&f)return f||l.warnOnce("Missing WebGL extension OES_texture_float_linear. Heatmap quality may be reduced."),new p(_.FLOAT,f?o.LINEAR:o.NEAREST,d?t.RED:t.RGBA,d?R.R32F:t.RGBA);if(b)return new p(_.HALF_FLOAT,o.LINEAR,m?t.RED:t.RGBA,m?R.R16F:t.RGBA);throw new u("heatmap:missing-hardware-support","HeatmapRenderer requires WebGL extensions that allow it to render and blend to float or half float textures.")}const L=new p(_.HALF_FLOAT,o.NEAREST,t.RGBA,t.RGBA);export{L as i,F as n};
