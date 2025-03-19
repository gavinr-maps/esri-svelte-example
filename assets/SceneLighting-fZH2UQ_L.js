import{L as P,M as A,k as F,O as C}from"./FloatArray-BCfeX8wo.js";import{n as s,t as y}from"./glsl-BH37Aalp.js";import{b as T,e as E,a as W,i as G}from"./Matrix3PassUniform-Bhi2fM3C.js";import"./Accessor-BHnuXKD2.js";import"./basicInterfaces-CZwQPxTp.js";import{o as k,s as g,y as V,g as $,u as z,I as U}from"./vec32-Dvg_eL9J.js";import{c as R,r as x,n as b}from"./vec3f64-BLpZdpfb.js";import{a as v}from"./BindType-BBwFZqyN.js";import{r as K,o as d}from"./mathUtils-DV9iOXpW.js";var w,M;(function(t){t[t.RED=0]="RED",t[t.RG=1]="RG",t[t.RGBA4=2]="RGBA4",t[t.RGBA=3]="RGBA",t[t.RGBA_MIPMAP=4]="RGBA_MIPMAP",t[t.R16F=5]="R16F",t[t.RGBA16F=6]="RGBA16F"})(w||(w={})),function(t){t[t.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",t[t.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(M||(M={}));function X(t){t.uniforms.add(new P("mainLightDirection",n=>n.lighting.mainLight.direction))}function j(t){t.uniforms.add(new P("mainLightIntensity",n=>n.lighting.mainLight.intensity))}function bt(t){X(t.fragment),j(t.fragment),t.fragment.code.add(s`vec3 applyShading(vec3 shadingNormalWorld, float shadow) {
float dotVal = clamp(dot(shadingNormalWorld, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}var l;(function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.Simplified=5]="Simplified",t[t.TerrainWithWater=6]="TerrainWithWater",t[t.COUNT=7]="COUNT"})(l||(l={}));function yt(t,n){const e=n.pbrMode,o=t.fragment;if(e!==l.Schematic&&e!==l.Disabled&&e!==l.Normal)return void o.code.add(s`void applyPBRFactors() {}`);if(e===l.Disabled)return void o.code.add(s`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(e===l.Schematic)return void o.code.add(s`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);const{hasMetallicRoughnessTexture:a,hasMetallicRoughnessTextureTransform:c,hasOcclusionTexture:i,hasOcclusionTextureTransform:p,bindType:r}=n;(a||i)&&t.include(A,n),o.code.add(s`vec3 mrr;
float occlusion;`),a&&o.uniforms.add(r===v.Pass?new F("texMetallicRoughness",h=>h.textureMetallicRoughness):new T("texMetallicRoughness",h=>h.textureMetallicRoughness)),i&&o.uniforms.add(r===v.Pass?new F("texOcclusion",h=>h.textureOcclusion):new T("texOcclusion",h=>h.textureOcclusion)),o.uniforms.add(r===v.Pass?new E("mrrFactors",h=>h.mrrFactors):new W("mrrFactors",h=>h.mrrFactors)),o.code.add(s`
    ${y(a,s`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${y(i,"void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${i?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${y(a,`applyMetallicRoughness(${c?"metallicRoughnessUV":"vuv0"});`)}
      ${y(i,`applyOcclusion(${p?"occlusionUV":"vuv0"});`)}
    }
  `)}function q(t){const n=t.fragment.code;n.add(s`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),n.add(s`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),n.add(s`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function St(t,n){const e=t.fragment.code;t.include(C),n.pbrMode!==l.Normal&&n.pbrMode!==l.Schematic&&n.pbrMode!==l.Simplified&&n.pbrMode!==l.TerrainWithWater||(e.add(s`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),e.add(s`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),n.pbrMode!==l.Normal&&n.pbrMode!==l.Schematic||(t.include(q),e.add(s`struct PBRShadingInfo
{
float NdotV;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),e.add(s`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),e.add(s`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),e.add(s`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function _t(t,n){const e=t.fragment.code;t.include(C),e.add(s`
  struct PBRShadingWater
  {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${n.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),e.add(s`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),e.add(s`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),e.add(s`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),e.add(s`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}const Ht=3e5,Lt=5e5;let Nt=class extends G{constructor(n,e){super(n,"int",v.Pass,(o,a,c)=>o.setUniform1i(n,e(a,c)))}};class xt extends G{constructor(n,e){super(n,"vec2",v.Draw,(o,a,c,i)=>o.setUniform2fv(n,e(a,c,i)))}}class J{constructor(n=R()){this.intensity=n}}class Q{constructor(n=R(),e=x(.57735,.57735,.57735)){this.intensity=n,this.direction=e}}class L{constructor(n=R(),e=x(.57735,.57735,.57735),o=!0,a=1,c=1){this.intensity=n,this.direction=e,this.castShadows=o,this.specularStrength=a,this.environmentStrength=c}}let D=class{constructor(){this.r=[0],this.g=[0],this.b=[0]}};function Y(t,n,e){(e=e||t).length=t.length;for(let o=0;o<t.length;o++)e[o]=t[o]*n[o];return e}function H(t,n,e){(e=e||t).length=t.length;for(let o=0;o<t.length;o++)e[o]=t[o]*n;return e}function m(t,n,e){(e=e||t).length=t.length;for(let o=0;o<t.length;o++)e[o]=t[o]+n[o];return e}function B(t){return(t+1)*(t+1)}function Z(t){return K(Math.floor(Math.sqrt(t)-1),0,2)}function O(t,n,e){const o=t[0],a=t[1],c=t[2],i=e||[];return i.length=B(n),n>=0&&(i[0]=.28209479177),n>=1&&(i[1]=.4886025119*o,i[2]=.4886025119*c,i[3]=.4886025119*a),n>=2&&(i[4]=1.09254843059*o*a,i[5]=1.09254843059*a*c,i[6]=.31539156525*(3*c*c-1),i[7]=1.09254843059*o*c,i[8]=.54627421529*(o*o-a*a)),i}function tt(t,n){const e=B(t),o=n||{r:[],g:[],b:[]};o.r.length=o.g.length=o.b.length=e;for(let a=0;a<e;a++)o.r[a]=o.g[a]=o.b[a]=0;return o}function nt(t,n){const e=Z(n.r.length);for(const o of t)V(N,o.direction),O(N,e,u),Y(u,_),H(u,o.intensity[0],f),m(n.r,f),H(u,o.intensity[1],f),m(n.g,f),H(u,o.intensity[2],f),m(n.b,f);return n}function et(t,n){O(N,0,u);for(const e of t)n.r[0]+=u[0]*_[0]*e.intensity[0]*4*Math.PI,n.g[0]+=u[0]*_[0]*e.intensity[1]*4*Math.PI,n.b[0]+=u[0]*_[0]*e.intensity[2]*4*Math.PI;return n}function ot(t,n,e,o){tt(n,o),k(e.intensity,0,0,0);let a=!1;const c=at,i=it,p=rt;c.length=0,i.length=0,p.length=0;for(const r of t)r instanceof L&&!a?(g(e.direction,r.direction),g(e.intensity,r.intensity),e.specularStrength=r.specularStrength,e.environmentStrength=r.environmentStrength,e.castShadows=r.castShadows,a=!0):r instanceof L||r instanceof Q?c.push(r):r instanceof J?i.push(r):r instanceof D&&p.push(r);nt(c,o),et(i,o);for(const r of p)m(o.r,r.r),m(o.g,r.g),m(o.b,r.b)}const at=[],it=[],rt=[],u=[0],f=[0],N=b(),_=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];class I{constructor(){this.color=b(),this.intensity=1}}class st{constructor(){this.direction=b(),this.ambient=new I,this.diffuse=new I}}const ct=.4;class Tt{constructor(){this._shOrder=2,this._legacy=new st,this.globalFactor=.5,this.noonFactor=.5,this._sphericalHarmonics=new D,this._mainLight=new L(b(),x(1,0,0),!1)}get legacy(){return this._legacy}get sh(){return this._sphericalHarmonics}get mainLight(){return this._mainLight}set(n){ot(n,this._shOrder,this._mainLight,this._sphericalHarmonics),g(this._legacy.direction,this._mainLight.direction);const e=1/Math.PI;this._legacy.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*e,this._legacy.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*e,this._legacy.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*e,$(this._legacy.diffuse.color,this._mainLight.intensity,e),g(S,this._legacy.diffuse.color),$(S,S,ct*this.globalFactor),z(this._legacy.ambient.color,this._legacy.ambient.color,S)}copyFrom(n){this._sphericalHarmonics.r=Array.from(n.sh.r),this._sphericalHarmonics.g=Array.from(n.sh.g),this._sphericalHarmonics.b=Array.from(n.sh.b),g(this._mainLight.direction,n.mainLight.direction),g(this._mainLight.intensity,n.mainLight.intensity),this._mainLight.castShadows=n.mainLight.castShadows,this._mainLight.specularStrength=n.mainLight.specularStrength,this._mainLight.environmentStrength=n.mainLight.environmentStrength,this.globalFactor=n.globalFactor,this.noonFactor=n.noonFactor}lerpLighting(n,e,o){if(U(this._mainLight.intensity,n.mainLight.intensity,e.mainLight.intensity,o),this._mainLight.environmentStrength=d(n.mainLight.environmentStrength,e.mainLight.environmentStrength,o),this._mainLight.specularStrength=d(n.mainLight.specularStrength,e.mainLight.specularStrength,o),g(this._mainLight.direction,e.mainLight.direction),this._mainLight.castShadows=e.mainLight.castShadows,this.globalFactor=d(n.globalFactor,e.globalFactor,o),this.noonFactor=d(n.noonFactor,e.noonFactor,o),n.sh.r.length===e.sh.r.length)for(let a=0;a<e.sh.r.length;a++)this._sphericalHarmonics.r[a]=d(n.sh.r[a],e.sh.r[a],o),this._sphericalHarmonics.g[a]=d(n.sh.g[a],e.sh.g[a],o),this._sphericalHarmonics.b[a]=d(n.sh.b[a],e.sh.b[a],o);else for(let a=0;a<e.sh.r.length;a++)this._sphericalHarmonics.r[a]=e.sh.r[a],this._sphericalHarmonics.g[a]=e.sh.g[a],this._sphericalHarmonics.b[a]=e.sh.b[a]}}const S=b();export{M as E,w as R,Tt as _,xt as a,Lt as b,St as c,j as d,Ht as e,bt as f,L as g,Q as h,J as i,ct as l,yt as m,l as n,Nt as o,_t as r,X as t};
