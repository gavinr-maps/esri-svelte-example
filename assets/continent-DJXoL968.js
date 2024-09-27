/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.2
 */const e=new Set(["Europe","Asia","America","America/Argentina","Africa","Australia","Pacific","Atlantic","Antarctica","Arctic","Indian"]);function r(n,i=!1){if(n.includes("Istanbul"))return"Europe";const t=n[i?"indexOf":"lastIndexOf"]("/");return t===-1?n:n.slice(0,t)}function a(n){return e.has(n)}export{r as e,a as i};
