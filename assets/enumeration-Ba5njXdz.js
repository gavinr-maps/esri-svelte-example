import{n as t}from"./jsonMap-0cxwUWs2.js";import{m as f}from"./subclass-BZA_h8Db.js";function p(n,a={}){const e=n instanceof t?n:new t(n,a),{alwaysWriteDefaults:l,default:o,ignoreUnknown:i=!0,name:s,nonNullable:u,readOnly:r=!1}=a;return f({type:i?e.apiValues:String,json:{type:e.jsonValues,default:o,name:s,read:!r&&{reader:e.read},write:{writer:e.write,alwaysWriteDefaults:l}},nonNullable:u,readOnly:r})}export{p as r};
