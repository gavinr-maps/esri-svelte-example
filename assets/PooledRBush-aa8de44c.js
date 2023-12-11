import{c7 as w,c8 as v,c9 as D,ca as H}from"./index-27db053b.js";class O{constructor(t=9,n){this._compareMinX=F,this._compareMinY=j,this._toBBox=e=>e,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&(typeof n=="function"?this._toBBox=n:this._initFormat(n)),this.clear()}destroy(){this.clear(),_.prune(),X.prune(),d.prune(),Y.prune()}all(t){this._all(this._data,t)}search(t,n){let e=this._data;const i=this._toBBox;if(M(t,e))for(_.clear();e;){for(let s=0,a=e.children.length;s<a;s++){const r=e.children[s],o=e.leaf?i(r):r;M(t,o)&&(e.leaf?n(r):S(t,o)?this._all(r,n):_.push(r))}e=_.pop()}}collides(t){let n=this._data;const e=this._toBBox;if(!M(t,n))return!1;for(_.clear();n;){for(let i=0,s=n.children.length;i<s;i++){const a=n.children[i],r=n.leaf?e(a):a;if(M(t,r)){if(n.leaf||S(t,r))return!0;_.push(a)}}n=_.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,i=t.length;e<i;e++)this.insert(t[e]);return this}let n=this._build(t.slice(0,t.length),0,t.length-1,0);if(this._data.children.length)if(this._data.height===n.height)this._splitRoot(this._data,n);else{if(this._data.height<n.height){const e=this._data;this._data=n,n=e}this._insert(n,this._data.height-n.height-1,!0)}else this._data=n;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new B([]),this}remove(t){if(!t)return this;let n,e=this._data,i=null,s=0,a=!1;const r=this._toBBox(t);for(d.clear(),Y.clear();e||d.length>0;){if(e||(e=d.pop(),i=d.data[d.length-1],s=Y.pop()??0,a=!0),e.leaf&&(n=v(e.children,t,e.children.length,e.indexHint),n!==-1))return e.children.splice(n,1),d.push(e),this._condense(d),this;a||e.leaf||!S(e,r)?i?(s++,e=i.children[s],a=!1):e=null:(d.push(e),Y.push(s),s=0,i=e,e=e.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_all(t,n){let e=t;for(X.clear();e;){if(e.leaf===!0)for(const i of e.children)n(i);else X.pushArray(e.children);e=X.pop()??null}}_build(t,n,e,i){const s=e-n+1;let a=this._maxEntries;if(s<=a){const l=new B(t.slice(n,e+1));return x(l,this._toBBox),l}i||(i=Math.ceil(Math.log(s)/Math.log(a)),a=Math.ceil(s/a**(i-1)));const r=new E([]);r.height=i;const o=Math.ceil(s/a),c=o*Math.ceil(Math.sqrt(a));R(t,n,e,c,this._compareMinX);for(let l=n;l<=e;l+=c){const m=Math.min(l+c-1,e);R(t,l,m,o,this._compareMinY);for(let u=l;u<=m;u+=o){const A=Math.min(u+o-1,m);r.children.push(this._build(t,u,A,i-1))}}return x(r,this._toBBox),r}_chooseSubtree(t,n,e,i){for(;i.push(n),n.leaf!==!0&&i.length-1!==e;){let s,a=1/0,r=1/0;for(let o=0,c=n.children.length;o<c;o++){const l=n.children[o],m=b(l),u=P(t,l)-m;u<r?(r=u,a=m<a?m:a,s=l):u===r&&m<a&&(a=m,s=l)}n=s||n.children[0]}return n}_insert(t,n,e){const i=this._toBBox,s=e?t:i(t);d.clear();const a=this._chooseSubtree(s,this._data,n,d);for(a.children.push(t),p(a,s);n>=0&&d.data[n].children.length>this._maxEntries;)this._split(d,n),n--;this._adjustParentBBoxes(s,d,n)}_split(t,n){const e=t.data[n],i=e.children.length,s=this._minEntries;this._chooseSplitAxis(e,s,i);const a=this._chooseSplitIndex(e,s,i);if(!a)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const r=e.children.splice(a,e.children.length-a),o=e.leaf?new B(r):new E(r);o.height=e.height,x(e,this._toBBox),x(o,this._toBBox),n?t.data[n-1].children.push(o):this._splitRoot(e,o)}_splitRoot(t,n){this._data=new E([t,n]),this._data.height=t.height+1,x(this._data,this._toBBox)}_chooseSplitIndex(t,n,e){let i,s,a;i=s=1/0;for(let r=n;r<=e-n;r++){const o=f(t,0,r,this._toBBox),c=f(t,r,e,this._toBBox),l=I(o,c),m=b(o)+b(c);l<i?(i=l,a=r,s=m<s?m:s):l===i&&m<s&&(s=m,a=r)}return a}_chooseSplitAxis(t,n,e){const i=t.leaf?this._compareMinX:F,s=t.leaf?this._compareMinY:j;this._allDistMargin(t,n,e,i)<this._allDistMargin(t,n,e,s)&&t.children.sort(i)}_allDistMargin(t,n,e,i){t.children.sort(i);const s=this._toBBox,a=f(t,0,n,s),r=f(t,e-n,e,s);let o=g(a)+g(r);for(let c=n;c<e-n;c++){const l=t.children[c];p(a,t.leaf?s(l):l),o+=g(a)}for(let c=e-n-1;c>=n;c--){const l=t.children[c];p(r,t.leaf?s(l):l),o+=g(r)}return o}_adjustParentBBoxes(t,n,e){for(let i=e;i>=0;i--)p(n.data[i],t)}_condense(t){for(let n=t.length-1;n>=0;n--){const e=t.data[n];if(e.children.length===0)if(n>0){const i=t.data[n-1],s=i.children;s.splice(v(s,e,s.length,i.indexHint),1)}else this.clear();else x(e,this._toBBox)}}_initFormat(t){const n=["return a"," - b",";"];this._compareMinX=new Function("a","b",n.join(t[0])),this._compareMinY=new Function("a","b",n.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function x(h,t){f(h,0,h.children.length,t,h)}function f(h,t,n,e,i){i||(i=new B([])),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(let s,a=t;a<n;a++)s=h.children[a],p(i,h.leaf?e(s):s);return i}function p(h,t){h.minX=Math.min(h.minX,t.minX),h.minY=Math.min(h.minY,t.minY),h.maxX=Math.max(h.maxX,t.maxX),h.maxY=Math.max(h.maxY,t.maxY)}function F(h,t){return h.minX-t.minX}function j(h,t){return h.minY-t.minY}function b(h){return(h.maxX-h.minX)*(h.maxY-h.minY)}function g(h){return h.maxX-h.minX+(h.maxY-h.minY)}function P(h,t){return(Math.max(t.maxX,h.maxX)-Math.min(t.minX,h.minX))*(Math.max(t.maxY,h.maxY)-Math.min(t.minY,h.minY))}function I(h,t){const n=Math.max(h.minX,t.minX),e=Math.max(h.minY,t.minY),i=Math.min(h.maxX,t.maxX),s=Math.min(h.maxY,t.maxY);return Math.max(0,i-n)*Math.max(0,s-e)}function S(h,t){return h.minX<=t.minX&&h.minY<=t.minY&&t.maxX<=h.maxX&&t.maxY<=h.maxY}function M(h,t){return t.minX<=h.maxX&&t.minY<=h.maxY&&t.maxX>=h.minX&&t.maxY>=h.minY}function R(h,t,n,e,i){const s=[t,n];for(;s.length;){const a=s.pop(),r=s.pop();if(a-r<=e)continue;const o=r+Math.ceil((a-r)/e/2)*e;D(h,o,r,a,i),s.push(r,o,o,a)}}const _=new w,X=new w,d=new w,Y=new w({deallocator:void 0});class J{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class y extends J{constructor(){super(...arguments),this.height=1,this.indexHint=new H}}class B extends y{constructor(t){super(),this.children=t,this.leaf=!0}}class E extends y{constructor(t){super(),this.children=t,this.leaf=!1}}export{O as s};
