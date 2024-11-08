import{r as x,g,_ as y}from"./subclass-BZA_h8Db.js";import{e as $}from"./LRUCache-B_PHMSGm.js";import{s as m}from"./Accessor-BLX9ikPh.js";import{W as z}from"./Point-Cg0-ChZE.js";import{n as I}from"./unitConversionUtils-BMfW9yAe.js";function G(o=!1,e){if(o){const{elevationInfo:t,alignPointsInFeatures:n}=e;return new v(t,n)}return new w}let w=class{async alignCandidates(e,t,n){return e}notifyElevationSourceChange(){}};const b=1024;let v=class{constructor(e,t){this._elevationInfo=e,this._alignPointsInFeatures=t,this._alignmentsCache=new $(b),this._cacheVersion=0}async alignCandidates(e,t,n){const s=this._elevationInfo;return s==null||s.mode!=="absolute-height"||s.featureExpressionInfo?this._alignComputedElevationCandidates(e,t,n):(S(e,t,s),e)}notifyElevationSourceChange(){this._alignmentsCache.clear(),this._cacheVersion++}async _alignComputedElevationCandidates(e,t,n){const s=new Map;for(const u of e)x(s,u.objectId,O).push(u);const[a,c,i]=this._prepareQuery(s,t),r=await this._alignPointsInFeatures(a,n);if(m(n),i!==this._cacheVersion)return this._alignComputedElevationCandidates(e,t,n);this._applyCacheAndResponse(a,r,c);const{drapedObjectIds:h,failedObjectIds:l}=r,d=[];for(const u of e){const{objectId:f}=u;h.has(f)&&u.type==="edge"&&(u.draped=!0),l.has(f)||d.push(u)}return d}_prepareQuery(e,t){const n=[],s=[];for(const[a,c]of e){const i=[];for(const r of c)this._addToQueriesOrCachedResult(a,r.target,i,s),r.type==="edge"&&(this._addToQueriesOrCachedResult(a,r.start,i,s),this._addToQueriesOrCachedResult(a,r.end,i,s));i.length!==0&&n.push({objectId:a,points:i})}return[{spatialReference:t.toJSON(),pointsInFeatures:n},s,this._cacheVersion]}_addToQueriesOrCachedResult(e,t,n,s){const a=_(e,t),c=this._alignmentsCache.get(a);c==null?n.push(t):s.push(new j(t,c))}_applyCacheAndResponse(e,{elevations:t,drapedObjectIds:n,failedObjectIds:s},a){for(const r of a)r.apply();let c=0;const i=this._alignmentsCache;for(const{objectId:r,points:h}of e.pointsInFeatures){if(s.has(r)){c+=h.length;continue}const l=!n.has(r);for(const d of h){const u=_(r,d),f=t[c++];d.z=f,l&&i.put(u,f,1)}}}};class j{constructor(e,t){this.point=e,this.z=t}apply(){this.point.z=this.z}}function _(o,{x:e,y:t,z:n,spatialReference:s}){return`${o}-${e}-${t}-${n??0}}-wkid:${s==null?void 0:s.wkid}`}function S(o,e,t){const{offset:n,unit:s}=t;if(n==null)return;const a=z(e),c=n*(I(s??"meters")/a);for(const i of o)switch(i.type){case"edge":i.start.z+=c,i.end.z+=c;continue;case"vertex":i.target.z+=c;continue}}function O(){return[]}class R{filter(e,t){return t}notifyElevationSourceChange(){}}let V=class{filter(e,t){const{point:n,distance:s}=e,{z:a}=n;if(a==null||t.length===0)return t;const c=M(s),i=this._updateCandidatesTo3D(t,n,c).filter(E);return i.sort(P),i}_updateCandidatesTo3D(e,t,n){for(const s of e)switch(s.type){case"edge":Q(s,t,n);continue;case"vertex":F(s,t,n);continue}return e}};function E(o){return o.distance<=1}function U(o=!1){return o?new V:new R}function Q(o,e,{x:t,y:n,z:s}){const{start:a,end:c,target:i}=o;o.draped||T(i,e,a,c);const r=(e.x-i.x)/t,h=(e.y-i.y)/n,l=(e.z-i.z)/s;o.distance=Math.sqrt(r*r+h*h+l*l)}function T(o,e,t,n){const s=n.x-t.x,a=n.y-t.y,c=n.z-t.z,i=s*s+a*a+c*c,r=(e.x-t.x)*s+(e.y-t.y)*a+c*(e.z-t.z),h=Math.min(1,Math.max(0,r/i)),l=t.x+s*h,d=t.y+a*h,u=t.z+c*h;o.x=l,o.y=d,o.z=u}function F(o,e,{x:t,y:n,z:s}){const{target:a}=o,c=(e.x-a.x)/t,i=(e.y-a.y)/n,r=(e.z-a.z)/s,h=Math.sqrt(c*c+i*i+r*r);o.distance=h}function M(o){return typeof o=="number"?{x:o,y:o,z:o}:o}function P(o,e){return o.distance-e.distance}function X(o=!1,e){return o?new A(e):new k}class k{async fetch(){return[]}notifySymbologyChange(){}}const q=1024;class A{constructor(e){this._getSymbologyCandidates=e,this._candidatesCache=new $(q),this._cacheVersion=0}async fetch(e,t){if(e.length===0)return[];const n=[],s=[],a=this._candidatesCache;for(const d of e){const u=C(d),f=a.get(u);if(f)for(const p of f)s.push(g(p));else n.push(d),a.put(u,[],1)}if(n.length===0)return s;const c=this._cacheVersion,{candidates:i,sourceCandidateIndices:r}=await this._getSymbologyCandidates(n,t);if(m(t),c!==this._cacheVersion)return this.fetch(e,t);const h=[],{length:l}=i;for(let d=0;d<l;++d){const u=i[d],f=C(n[r[d]]),p=a.get(f);p.push(u),a.put(f,p,p.length),h.push(g(u))}return s.concat(h)}notifySymbologyChange(){this._candidatesCache.clear(),this._cacheVersion++}}function C(o){switch(o.type){case"vertex":{const{objectId:e,target:t}=o,n=`${e}-vertex-${t.x}-${t.y}-${t.z??0}`;return y(n).toString()}case"edge":{const{objectId:e,start:t,end:n}=o,s=`${e}-edge-${t.x}-${t.y}-${t.z??0}-to-${n.x}-${n.y}-${n.z??0}`;return y(s).toString()}default:return""}}export{G as i,X as n,U as r};
