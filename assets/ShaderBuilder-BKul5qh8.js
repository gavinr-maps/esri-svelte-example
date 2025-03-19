import{B as T,s as _}from"./Accessor-BmwT4B0c.js";import{a as c}from"./BindType-BBwFZqyN.js";const g=()=>T.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class l{constructor(){this._includedModules=new Map}include(e,n){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,n),e(this.builder,n))}}class M extends l{constructor(){super(...arguments),this.vertex=new f,this.fragment=new f,this.attributes=new E,this.varyings=new A,this.extensions=new h,this.outputs=new m}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e,n=!1){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(e),s=e==="vertex"?this.vertex:this.fragment,u=s.uniforms.generateSource(),d=s.code.generateSource(),$=s.main.generateSource(n),p=e==="vertex"?I:F,S=s.constants.generateSource(),b=this.outputs.generateSource(e);return`#version 300 es
${t.join(`
`)}
${p}
${S.join(`
`)}
${u.join(`
`)}
${r.join(`
`)}
${i.join(`
`)}
${b.join(`
`)}
${d.join(`
`)}
${$.join(`
`)}`}generateBind(e){const n=new Map;this.vertex.uniforms.entries.forEach(i=>{const s=i.bind[c.Bind];s&&n.set(i.name,s)}),this.fragment.uniforms.entries.forEach(i=>{const s=i.bind[c.Bind];s&&n.set(i.name,s)});const t=Array.from(n.values()),r=t.length;return i=>{for(let s=0;s<r;++s)t[s](e,i)}}generateBindPass(e){const n=new Map;this.vertex.uniforms.entries.forEach(i=>{const s=i.bind[c.Pass];s&&n.set(i.name,s)}),this.fragment.uniforms.entries.forEach(i=>{const s=i.bind[c.Pass];s&&n.set(i.name,s)});const t=Array.from(n.values()),r=t.length;return(i,s)=>{for(let u=0;u<r;++u)t[u](e,i,s)}}generateBindDraw(e){const n=new Map;this.vertex.uniforms.entries.forEach(i=>{const s=i.bind[c.Draw];s&&n.set(i.name,s)}),this.fragment.uniforms.entries.forEach(i=>{const s=i.bind[c.Draw];s&&n.set(i.name,s)});const t=Array.from(n.values()),r=t.length;return(i,s,u)=>{for(let d=0;d<r;++d)t[d](e,u,i,s)}}}class w{constructor(e){this._stage=e,this._entries=new Map}add(...e){for(const n of e)this._add(n);return this._stage}get(e){return this._entries.get(e)}_add(e){if(e!=null){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new _(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else g().error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(e=>e.arraySize!=null?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}}class v{constructor(e){this._stage=e,this._bodies=new Array}add(e){return this._bodies.push(e),this._stage}generateSource(e){if(this._bodies.length>0)return[`void main() {
 ${this._bodies.join(`
`)||""} 
}`];if(e)throw new _("Shader does not contain main function body.");return[]}}class y{constructor(e){this._stage=e,this._entries=new Array}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}}class f extends l{constructor(){super(...arguments),this.uniforms=new w(this),this.main=new v(this),this.code=new y(this),this.constants=new a(this)}get builder(){return this}}class E{constructor(){this._entries=new Array}add(e,n){this._entries.push([e,n])}generateSource(e){return e==="fragment"?[]:this._entries.map(n=>`in ${n[1]} ${n[0]};`)}}class A{constructor(){this._entries=new Map}add(e,n){this._entries.has(e)?g().warn(`Ignoring duplicate varying ${n} ${e}`):this._entries.set(e,n)}generateSource(e){const n=new Array;return this._entries.forEach((t,r)=>n.push(e==="vertex"?`out ${t} ${r};`:`in ${t} ${r};`)),n}}class h{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const n=e==="vertex"?h.ALLOWLIST_VERTEX:h.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(t=>n.includes(t)).map(t=>`#extension ${t} : enable`)}}h.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],h.ALLOWLIST_VERTEX=[];class m{constructor(){this._entries=new Map}add(e,n,t=0){const r=this._entries.get(t);(r==null?void 0:r.name)!==e||(r==null?void 0:r.type)!==n?this._entries.set(t,{name:e,type:n}):g().warn(`Fragment shader output location ${t} occupied`)}generateSource(e){if(e==="vertex")return[];this._entries.size===0&&this._entries.set(0,{name:m.DEFAULT_NAME,type:m.DEFAULT_TYPE});const n=new Array;return this._entries.forEach((t,r)=>n.push(`layout(location = ${r}) out ${t.type} ${t.name};`)),n}}m.DEFAULT_TYPE="vec4",m.DEFAULT_NAME="fragColor";class a{constructor(e){this._stage=e,this._entries=new Set}add(e,n,t){let r="ERROR_CONSTRUCTOR_STRING";switch(n){case"float":r=a._numberToFloatStr(t);break;case"int":r=a._numberToIntStr(t);break;case"bool":r=t.toString();break;case"vec2":r=`vec2(${a._numberToFloatStr(t[0])},                            ${a._numberToFloatStr(t[1])})`;break;case"vec3":r=`vec3(${a._numberToFloatStr(t[0])},                            ${a._numberToFloatStr(t[1])},                            ${a._numberToFloatStr(t[2])})`;break;case"vec4":r=`vec4(${a._numberToFloatStr(t[0])},                            ${a._numberToFloatStr(t[1])},                            ${a._numberToFloatStr(t[2])},                            ${a._numberToFloatStr(t[3])})`;break;case"ivec2":r=`ivec2(${a._numberToIntStr(t[0])},                             ${a._numberToIntStr(t[1])})`;break;case"ivec3":r=`ivec3(${a._numberToIntStr(t[0])},                             ${a._numberToIntStr(t[1])},                             ${a._numberToIntStr(t[2])})`;break;case"ivec4":r=`ivec4(${a._numberToIntStr(t[0])},                             ${a._numberToIntStr(t[1])},                             ${a._numberToIntStr(t[2])},                             ${a._numberToIntStr(t[3])})`;break;case"mat2":case"mat3":case"mat4":r=`${n}(${Array.prototype.map.call(t,i=>a._numberToFloatStr(i)).join(", ")})`}return this._entries.add(`const ${n} ${e} = ${r};`),this._stage}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const F=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp int;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump int;
  precision mediump sampler2D;
#endif`,I=`precision highp float;
precision highp sampler2D;`;export{M as i};
