import{i as d,U as l}from"./assets-C43MgM-v.js";async function f(e,t,s){var a,c;if(!((a=d)==null?void 0:a.findCredential(e.restUrl)))return null;if(e.loadStatus==="loaded"&&t===""&&((c=e.user)!=null&&c.sourceJSON)&&s===!1)return e.user.sourceJSON;const n={responseType:"json",query:{f:"json"}};if(s&&(n.query.returnUserLicenseTypeExtensions=!0),t===""){const u=await l(e.restUrl+"/community/self",n);if(u.data){const i=u.data;if(i!=null&&i.username)return i}return null}const o=await l(e.restUrl+"/community/users/"+t,n);if(o.data){const u=o.data;return u.error?null:u}return null}async function m(e,t,s){var n;const r=await f(e,t,!0);return((n=r==null?void 0:r.privileges)==null?void 0:n.includes(s))??!1}async function p(e,t,s){var n;const r=await f(e,t,!0);return((n=r==null?void 0:r.userLicenseTypeExtensions)==null?void 0:n.includes(s))??!1}export{f as r,p as s,m as t};
