import{r as n}from"./mathUtils-C4_ghTv4.js";import{o as r}from"./interfaces-DDtDqZYj.js";var l;function M(o){switch(o){case"multiply":default:return l.Multiply;case"ignore":return l.Ignore;case"replace":return l.Replace;case"tint":return l.Tint}}function b(o,i,e){if(o==null||i===l.Ignore)return e[0]=255,e[1]=255,e[2]=255,void(e[3]=255);const c=n(Math.round(o[3]*t),0,t),s=c===0||i===l.Tint?0:i===l.Replace?p:m;e[0]=n(Math.round(o[0]*a),0,a),e[1]=n(Math.round(o[1]*a),0,a),e[2]=n(Math.round(o[2]*a),0,a),e[3]=c+s}(function(o){o[o.Multiply=1]="Multiply",o[o.Ignore=2]="Ignore",o[o.Replace=3]="Replace",o[o.Tint=4]="Tint"})(l||(l={}));const a=255,t=85,p=t,m=2*t;function d(o){o.vertex.code.add(r`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${r.int(l.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${r.int(l.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${r.int(l.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${r.int(l.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}export{d as a,M as e,l as n,b as r};
