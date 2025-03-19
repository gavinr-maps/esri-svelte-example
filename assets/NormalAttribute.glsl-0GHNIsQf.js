import{r as i}from"./mathUtils-Cfq9PL9W.js";import{n as l}from"./glsl-BH37Aalp.js";import{aO as p}from"./Accessor-BmwT4B0c.js";import{e as m}from"./VertexAttribute-Cq4MnHjR.js";var e;function C(o){switch(o){case"multiply":default:return e.Multiply;case"ignore":return e.Ignore;case"replace":return e.Replace;case"tint":return e.Tint}}function x(o,a,r){if(o==null||a===e.Ignore)return r[0]=255,r[1]=255,r[2]=255,void(r[3]=255);const c=i(Math.round(o[3]*s),0,s),d=c===0||a===e.Tint?0:a===e.Replace?u:b;r[0]=i(Math.round(o[0]*n),0,n),r[1]=i(Math.round(o[1]*n),0,n),r[2]=i(Math.round(o[2]*n),0,n),r[3]=c+d}(function(o){o[o.Multiply=1]="Multiply",o[o.Ignore=2]="Ignore",o[o.Replace=3]="Replace",o[o.Tint=4]="Tint"})(e||(e={}));const n=255,s=85,u=s,b=2*s;function h(o){o.vertex.code.add(l`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${l.int(e.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${l.int(e.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${l.int(e.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${l.int(e.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function A(o,a){switch(a.normalType){case t.Compressed:o.attributes.add(m.NORMALCOMPRESSED,"vec2"),o.vertex.code.add(l`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case t.Attribute:o.attributes.add(m.NORMAL,"vec3"),o.vertex.code.add(l`vec3 normalModel() {
return normal;
}`);break;case t.ScreenDerivative:o.fragment.code.add(l`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:p(a.normalType);case t.COUNT:}}var t;(function(o){o[o.Attribute=0]="Attribute",o[o.Compressed=1]="Compressed",o[o.ScreenDerivative=2]="ScreenDerivative",o[o.COUNT=3]="COUNT"})(t||(t={}));export{t as a,h as b,C as e,e as n,x as r,A as t};
