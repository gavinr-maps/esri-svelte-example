import{h as O}from"./Color-gncXBiLc.js";import{aO as F}from"./Accessor-BHnuXKD2.js";import{u as x}from"./screenUtils-_ZIvrt5o.js";import{r as f,u as P}from"./vec4f64-o2zAXfmz.js";import{o as E}from"./floatRGBA-CR2j2c7-.js";import{b as I,t as $}from"./NormalAttribute.glsl-BPQl43kJ.js";import{i as y,b as T,n as M,c as g,o as S,a as v,e as p,t as L}from"./Matrix3PassUniform-Bhi2fM3C.js";import{t as h}from"./RgbaFloatEncoding.glsl-_io2eW3M.js";import{o as b}from"./Float4DrawUniform-C_Hqa-pI.js";import{n as t,t as V}from"./glsl-BH37Aalp.js";import{a as N}from"./BindType-BBwFZqyN.js";import{e as s}from"./VertexAttribute-Cq4MnHjR.js";import{t as C,c as A}from"./Matrix3DrawUniform-B_gSHO7v.js";function R(o){return o.type==="fill"}function W(o){return o.type==="extrude"}var m;(function(o){o[o.TRANSPARENT=0]="TRANSPARENT",o[o.OPAQUE=1]="OPAQUE"})(m||(m={}));class z extends y{constructor(r,e){super(r,"int",N.Draw,(l,a,d)=>l.setUniform1i(r,e(a,d)))}}var i;(function(o){o[o.Uniform=0]="Uniform",o[o.Varying=1]="Varying",o[o.COUNT=2]="COUNT"})(i||(i={}));const u=429496.7296;function uo(o,r){E(o/u*.5+.5,r)}function xo(o,r){switch(r.componentData){case i.Varying:return U(o,r);case i.Uniform:return D(o,r);case i.COUNT:return;default:F(r.componentData)}}function U(o,r){const{vertex:e,fragment:l}=o;e.include(h),e.uniforms.add(new T("componentColorTex",d=>d.componentParameters.texture.texture)),o.attributes.add(s.COMPONENTINDEX,"float"),o.varyings.add("vExternalColorMixMode","mediump float"),o.varyings.add("vExternalColor","vec4");const a=r.output===M.ObjectAndLayerIdColor;a&&o.varyings.add("vObjectAndLayerIdColor","vec4"),o.include(I),e.constants.add("stride","float",g()?3:2),e.code.add(t`vec2 getComponentTextureCoordinates(float componentIndex, float typeOffset) {
float index = componentIndex * stride + typeOffset;
float texSize = float(textureSize(componentColorTex, 0).x);
float coordX = mod(index, texSize);
float coordY = floor(index / texSize);
return vec2(coordX, coordY) + 0.5;
}`),e.code.add(t`
  vec4 _readComponentColor() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 0.0);
    return texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
   }

  float readElevationOffset() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 1.0);
    vec4 encodedElevation = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
    return uninterpolatedRGBAToFloat(encodedElevation) * ${t.float(u)};
  }

  ${a?t`
          void forwardObjectAndLayerIdColor() {
            vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 2.0);
            vObjectAndLayerIdColor = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
          }`:t`void forwardObjectAndLayerIdColor() {}`}

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
`),l.code.add(t`
  void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {
    externalColor = vExternalColor;
    externalColorMixMode = int(vExternalColorMixMode);
  }

  void outputObjectAndLayerIdColor() {
     ${a?t`fragColor = vObjectAndLayerIdColor;`:""}
  }
`)}function D(o,r){const{vertex:e,fragment:l}=o;o.varyings.add("vExternalColor","vec4"),e.uniforms.add(new b("externalColor",d=>d.componentParameters.externalColor)).code.add(t`float readElevationOffset() {
return 0.0;
}
void forwardObjectAndLayerIdColor() {}
vec4 forwardExternalColor(out bool castShadows) {
vExternalColor = externalColor;
castShadows = true;
return externalColor;
}`);const a=r.output===M.ObjectAndLayerIdColor;l.uniforms.add(new z("externalColorMixMode",d=>d.componentParameters.externalColorMixMode)).code.add(t`
    void readExternalColor(out vec4 color, out int colorMixMode) {
      color = vExternalColor;
      colorMixMode = externalColorMixMode;
    }

    void outputObjectAndLayerIdColor() {
      ${V(a,"fragColor = vec4(0, 0, 0, 0);")}
    }
  `)}function vo(o,r){const e=o.vertex;e.include(h),o.include($,r);const{silhouette:l,legacy:a,spherical:d}=r;e.uniforms.add(new T("componentDataTex",n=>n.componentDataTexture)),o.attributes.add(s.COMPONENTINDEX,"float"),e.constants.add("lineWidthFractionFactor","float",8),e.constants.add("extensionLengthOffset","float",128),e.code.add(t`
    vec2 _componentTextureCoords(float componentIndex, float fieldOffset) {
      float fieldIndex = ${t.float(3)}  * componentIndex + fieldOffset;
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
      vec2 colorIndex = _componentTextureCoords(componentIndex, ${t.float(0)});
      vec2 otherIndex = _componentTextureCoords(componentIndex, ${t.float(1)});
      vec2 verticalOffsetIndex = _componentTextureCoords(float(componentIndex), ${t.float(2)} );
      vec3 normal = normalModel();
      vec3 normal2 = ${l?t`decompressNormal(normal2Compressed)`:t`normal`};

      vec4 colorValue = texelFetch(componentDataTex, ivec2(colorIndex), 0);
      vec4 otherValue = texelFetch(componentDataTex, ivec2(otherIndex), 0);
      float verticalOffset = uninterpolatedRGBAToFloat(texelFetch(componentDataTex, ivec2(verticalOffsetIndex), 0)) * ${t.float(u)};

      return ComponentData(
        vec4(colorValue.rgb, colorValue.a * otherValue.w), // otherValue.w stores separate opacity
        normal, normal2,
        otherValue.x * (255.0 / ${t.float(8)} ),
        otherValue.y * 255.0 - ${t.float(128)},
        -(otherValue.z * 255.0) + 0.5, // SOLID (=0/255) needs to be > 0.0, SKETCHY (=1/255) needs to be <= 0;
        verticalOffset
      );
    }
  `),a?e.code.add(t`vec3 _modelToWorldNormal(vec3 normal) {
return (model * vec4(normal, 0.0)).xyz;
}
vec3 _modelToViewNormal(vec3 normal) {
return (localView * model * vec4(normal, 0.0)).xyz;
}`):(e.uniforms.add(new C("transformNormalGlobalFromModel",n=>n.transformNormalGlobalFromModel)),e.code.add(t`vec3 _modelToWorldNormal(vec3 normal) {
return transformNormalGlobalFromModel * normal;
}`)),l?(o.attributes.add(s.NORMAL2COMPRESSED,"vec2"),e.code.add(t`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(normalize(data.normal + data.normal2));
}`)):e.code.add(t`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(data.normal);
}`),a?e.code.add(t`void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
worldPos = (model * vec4(modelPos, 1.0)).xyz;
viewPos = (localView * vec4(worldPos, 1.0)).xyz;
}`):(e.include(A,r),e.uniforms.add(new S("transformViewFromCameraRelativeRS",n=>n.transformViewFromCameraRelativeRS),new C("transformWorldFromModelRS",n=>n.transformWorldFromModelRS),new v("transformWorldFromModelTL",n=>n.transformWorldFromModelTL),new v("transformWorldFromModelTH",n=>n.transformWorldFromModelTH),new p("transformWorldFromViewTL",n=>n.transformWorldFromViewTL),new p("transformWorldFromViewTH",n=>n.transformWorldFromViewTH)),e.code.add(t`
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
          vec3 vUp = ${d?"normalize(transformWorldFromModelTL + rotatedModelPosition);":"vec3(0.0, 0.0, 1.0);"}
          worldPos += verticalOffset * vUp;
        }

        viewPos = transformViewFromCameraRelativeRS * worldPos;
      }
    `)),e.uniforms.add(new L("transformProjFromView",n=>n.camera.projectionMatrix)).code.add(t`vec4 projFromViewPosition(vec3 position) {
return transformProjFromView * vec4(position, 1.0);
}`),e.code.add(t`float calculateExtensionLength(float extensionLength, float lineLength) {
return extensionLength / (log2(max(1.0, 256.0 / lineLength)) * 0.2 + 1.0);
}`)}function po(o){return o===c.Sketch||o===c.Mixed}var c,w;(function(o){o[o.Solid=0]="Solid",o[o.Sketch=1]="Sketch",o[o.Mixed=2]="Mixed",o[o.COUNT=3]="COUNT"})(c||(c={})),function(o){o[o.REGULAR=0]="REGULAR",o[o.SILHOUETTE=1]="SILHOUETTE"}(w||(w={}));function Co(o){return o&&o.enabled&&(W(o)||R(o))&&o.edges!=null}function j(o){return o&&o.enabled&&o.edges||null}function wo(o,r){return _(j(o),r)}function _(o,r){if(o==null)return null;const e=o.color!=null?P(O.toUnitRGBA(o.color)):f(0,0,0,0),l=x(o.size),a=x(o.extensionLength);switch(o.type){case"solid":return H({color:e,size:l,extensionLength:a,...r});case"sketch":return G({color:e,size:l,extensionLength:a,...r});default:return}}function H(o){return{...k,...o,type:c.Solid}}function G(o){return{...Q,...o,type:c.Sketch}}const k={color:f(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:m.OPAQUE,hasSlicePlane:!1},Q={color:f(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:m.OPAQUE,hasSlicePlane:!1};export{m as A,i as C,wo as a,vo as b,Co as c,uo as d,xo as e,_ as f,H as g,c as u,po as v,w as x};
