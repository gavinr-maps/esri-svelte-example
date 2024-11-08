import{l as M}from"./Color-BCS62Hs5.js";import"./subclass-BZA_h8Db.js";import{u as x}from"./screenUtils-_ZIvrt5o.js";import{r as m,u as O}from"./vec4f64-o2zAXfmz.js";import{n as h}from"./compilerUtils-Dw3R0f-Z.js";import{o as g}from"./floatRGBA-CfH_2xsy.js";import{a as y}from"./DecodeSymbolColor.glsl-BPIX0fAF.js";import{a as E,s as w,n as F,e as I,t as P,o as L,c as u,d as S,f as V,g as v,h as p,i as $}from"./Matrix3DrawUniform-CiBFaSz6.js";import{t as T,o as b}from"./Float4DrawUniform-N58YDhuZ.js";import{a as N}from"./BindType-BmZEZMMh.js";import{o as n}from"./interfaces-DDtDqZYj.js";import{e as s}from"./VertexAttribute-Cq4MnHjR.js";var i;(function(o){o[o.TRANSPARENT=0]="TRANSPARENT",o[o.OPAQUE=1]="OPAQUE"})(i||(i={}));function A(o){return o.type==="fill"}function R(o){return o.type==="extrude"}class W extends E{constructor(r,e){super(r,"int",N.Draw,(t,a,l)=>t.setUniform1i(r,e(a,l)))}}var c;(function(o){o[o.Uniform=0]="Uniform",o[o.Varying=1]="Varying",o[o.COUNT=2]="COUNT"})(c||(c={}));const f=429496.7296;function no(o,r){g(o/f*.5+.5,r)}function ao(o,r){switch(r.componentData){case c.Varying:return z(o,r);case c.Uniform:return U(o,r);case c.COUNT:return;default:h(r.componentData)}}function z(o,r){const{vertex:e,fragment:t}=o;e.include(T),e.uniforms.add(new w("componentColorTex",l=>l.componentParameters.texture.texture)),o.attributes.add(s.COMPONENTINDEX,"float"),o.varyings.add("vExternalColorMixMode","mediump float"),o.varyings.add("vExternalColor","vec4");const a=r.output===F.ObjectAndLayerIdColor;a&&o.varyings.add("vObjectAndLayerIdColor","vec4"),o.include(y),e.constants.add("stride","float",I()?3:2),e.code.add(n`vec2 getComponentTextureCoordinates(float componentIndex, float typeOffset) {
float index = componentIndex * stride + typeOffset;
float texSize = float(textureSize(componentColorTex, 0).x);
float coordX = mod(index, texSize);
float coordY = floor(index / texSize);
return vec2(coordX, coordY) + 0.5;
}`),e.code.add(n`
  vec4 _readComponentColor() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 0.0);
    return texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
   }

  float readElevationOffset() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 1.0);
    vec4 encodedElevation = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
    return uninterpolatedRGBAToFloat(encodedElevation) * ${n.float(f)};
  }

  ${a?n`
          void forwardObjectAndLayerIdColor() {
            vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 2.0);
            vObjectAndLayerIdColor = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
          }`:n`void forwardObjectAndLayerIdColor() {}`}

  vec4 forwardExternalColor(out bool castShadows) {
    vec4 componentColor = _readComponentColor() * 255.0;

    float shadowFlag = mod(componentColor.b * 255.0, 2.0);
    componentColor.b -= shadowFlag;
    castShadows = shadowFlag >= 1.0;

    int decodedColorMixMode;
    vExternalColor = decodeSymbolColor(componentColor, decodedColorMixMode) * 0.003921568627451; // = 1/255;
    vExternalColorMixMode = float(decodedColorMixMode) + 0.5; // add 0.5 to avoid interpolation artifacts

    return vExternalColor;
  }
`),t.code.add(n`
  void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {
    externalColor = vExternalColor;
    externalColorMixMode = int(vExternalColorMixMode);
  }

  void outputObjectAndLayerIdColor() {
     ${a?n`fragColor = vObjectAndLayerIdColor;`:""}
  }
`)}function U(o,r){const{vertex:e,fragment:t}=o;e.uniforms.add(new b("externalColor",l=>l.componentParameters.externalColor)),t.uniforms.add(new W("externalColorMixMode",l=>l.componentParameters.externalColorMixMode)),o.varyings.add("vExternalColor","vec4"),e.code.add(n`float readElevationOffset() {
return 0.0;
}
void forwardObjectAndLayerIdColor() {}
vec4 forwardExternalColor(out bool castShadows) {
vExternalColor = externalColor;
castShadows = true;
return externalColor;
}`);const a=r.output===F.ObjectAndLayerIdColor;t.code.add(n`
  void readExternalColor(out vec4 color, out int colorMixMode) {
    color = vExternalColor;
    colorMixMode = externalColorMixMode;
  }

  void outputObjectAndLayerIdColor() {
    ${a?n`fragColor = vec4(0, 0, 0, 0);`:""}
 }
`)}function lo(o,r){const e=o.vertex;e.include(T),o.include(P,r),e.uniforms.add(new L("distanceFalloffFactor",t=>t.distanceFalloffFactor)),e.code.add(n`float distanceBasedPerspectiveFactor(float distance) {
return clamp(sqrt(distanceFalloffFactor / distance), 0.0, 1.0);
}`),e.uniforms.add(new w("componentDataTex",t=>t.componentDataTexture)),o.attributes.add(s.COMPONENTINDEX,"float"),e.constants.add("componentColorFieldOffset","float",0),e.constants.add("componentOtherFieldOffset","float",1),e.constants.add("componentVerticalOffsetFieldOffset","float",2),e.constants.add("componentFieldCount","float",3),e.constants.add("lineWidthFractionFactor","float",8),e.constants.add("extensionLengthOffset","float",128),e.code.add(n`
    vec2 _componentTextureCoords(float componentIndex, float fieldOffset) {
      float fieldIndex = componentFieldCount * componentIndex + fieldOffset;
      float texSize = float(textureSize(componentDataTex, 0).x);
      float colIndex = mod(fieldIndex, texSize);
      float rowIndex = floor(fieldIndex / texSize);

      return vec2(colIndex, rowIndex) + 0.5;
    }

    struct ComponentData {
      vec4 color;
      vec3 normal;
      vec3 normal2;
      float lineWidth;
      float extensionLength;
      float type;
      float verticalOffset;
    };

    ComponentData readComponentData() {
      vec2 colorIndex = _componentTextureCoords(componentIndex, componentColorFieldOffset);
      vec2 otherIndex = _componentTextureCoords(componentIndex, componentOtherFieldOffset);
      vec2 verticalOffsetIndex = _componentTextureCoords(componentIndex, componentVerticalOffsetFieldOffset);
      vec3 normal = normalModel();
      vec3 normal2 = ${r.silhouette?n`decompressNormal(normal2Compressed)`:n`normal`};

      vec4 colorValue = texelFetch(componentDataTex, ivec2(colorIndex), 0);
      vec4 otherValue = texelFetch(componentDataTex, ivec2(otherIndex), 0);
      float verticalOffset = uninterpolatedRGBAToFloat(texelFetch(componentDataTex, ivec2(verticalOffsetIndex), 0)) * ${n.float(f)};

      return ComponentData(
        vec4(colorValue.rgb, colorValue.a * otherValue.w), // otherValue.w stores separate opacity
        normal, normal2,
        otherValue.x * (255.0 / lineWidthFractionFactor),
        otherValue.y * 255.0 - extensionLengthOffset,
        -(otherValue.z * 255.0) + 0.5, // SOLID (=0/255) needs to be > 0.0, SKETCHY (=1/255) needs to be <= 0;
        verticalOffset
      );
    }
  `),r.legacy?e.code.add(n`vec3 _modelToWorldNormal(vec3 normal) {
return (model * vec4(normal, 0.0)).xyz;
}
vec3 _modelToViewNormal(vec3 normal) {
return (localView * model * vec4(normal, 0.0)).xyz;
}`):(e.uniforms.add(new u("transformNormalGlobalFromModel",t=>t.transformNormalGlobalFromModel)),e.code.add(n`vec3 _modelToWorldNormal(vec3 normal) {
return transformNormalGlobalFromModel * normal;
}`)),r.silhouette?(o.attributes.add(s.NORMAL2COMPRESSED,"vec2"),e.code.add(n`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(normalize(data.normal + data.normal2));
}`)):e.code.add(n`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(data.normal);
}`),r.legacy?e.code.add(n`void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
worldPos = (model * vec4(modelPos, 1.0)).xyz;
viewPos = (localView * vec4(worldPos, 1.0)).xyz;
}`):(e.include(S,r),e.uniforms.add(new V("transformViewFromCameraRelativeRS",t=>t.transformViewFromCameraRelativeRS),new u("transformWorldFromModelRS",t=>t.transformWorldFromModelRS),new v("transformWorldFromModelTL",t=>t.transformWorldFromModelTL),new v("transformWorldFromModelTH",t=>t.transformWorldFromModelTH),new p("transformWorldFromViewTL",t=>t.transformWorldFromViewTL),new p("transformWorldFromViewTH",t=>t.transformWorldFromViewTH)),e.code.add(n`
      void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
        vec3 rotatedModelPosition = transformWorldFromModelRS * modelPos;

        vec3 transformCameraRelativeFromModel = dpAdd(
          transformWorldFromModelTL,
          transformWorldFromModelTH,
          -transformWorldFromViewTL,
          -transformWorldFromViewTH
        );

        worldPos = transformCameraRelativeFromModel + rotatedModelPosition;

        if (verticalOffset != 0.0) {
          vec3 vUp = ${r.spherical?n`normalize(transformWorldFromModelTL + rotatedModelPosition);`:n`vec3(0.0, 0.0, 1.0);`}
          worldPos += verticalOffset * vUp;
        }

        viewPos = transformViewFromCameraRelativeRS * worldPos;
      }
    `)),e.uniforms.add(new $("transformProjFromView",(t,a)=>a.camera.projectionMatrix)),e.code.add(n`vec4 projFromViewPosition(vec3 position) {
return transformProjFromView * vec4(position, 1.0);
}`),e.code.add(n`float calculateExtensionLength(float extensionLength, float lineLength) {
return extensionLength / (log2(max(1.0, 256.0 / lineLength)) * 0.2 + 1.0);
}`)}function co(o){return o===d.Sketch||o===d.Mixed}var d,C;(function(o){o[o.Solid=0]="Solid",o[o.Sketch=1]="Sketch",o[o.Mixed=2]="Mixed",o[o.COUNT=3]="COUNT"})(d||(d={})),function(o){o[o.REGULAR=0]="REGULAR",o[o.SILHOUETTE=1]="SILHOUETTE"}(C||(C={}));function io(o){return o&&o.enabled&&(R(o)||A(o))&&o.edges!=null}function D(o){return o&&o.enabled&&o.edges||null}function so(o,r){return j(D(o),r)}function j(o,r){if(o==null)return null;const e=o.color!=null?O(M.toUnitRGBA(o.color)):m(0,0,0,0),t=x(o.size),a=x(o.extensionLength);switch(o.type){case"solid":return _({color:e,size:t,extensionLength:a,...r});case"sketch":return H({color:e,size:t,extensionLength:a,...r});default:return}}function _(o){return{...G,...o,type:d.Solid}}function H(o){return{...k,...o,type:d.Sketch}}const G={color:m(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:i.OPAQUE,hasSlicePlane:!1},k={color:m(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:i.OPAQUE,hasSlicePlane:!1};export{i as A,so as a,c as b,io as c,ao as d,j as f,_ as g,no as m,d as p,co as u,lo as v,C as x};
