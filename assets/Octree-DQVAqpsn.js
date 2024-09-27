import{d as he,l as C}from"./Accessor-D6mNnsWy.js";import{r as W,A as ae,n as J,g as q,c as $,p as G,b as _}from"./mathUtils-ClvKsMak.js";import{s as v}from"./frustum-DqmLJYYu.js";import{T as w,l as U,N as k,H as Q,V as f,_ as B}from"./sphere-7666U3LO.js";import{i as te}from"./Util-BMqL_pkg.js";class A{get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}constructor(e,t){this.objectToBoundingSphere=e,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new l,this._objectCount=0,t&&(t.maximumObjectsPerNode!==void 0&&(this._maximumObjectsPerNode=t.maximumObjectsPerNode),t.maximumDepth!==void 0&&(this._maximumDepth=t.maximumDepth))}destroy(){this._degenerateObjects.clear(),l.clearPool(),K[0]=null,N.prune(),M.prune()}add(e,t=e.length){this._objectCount+=t,this._grow(e,t);const n=l.acquire();for(let o=0;o<t;o++){const r=e[o];this._isDegenerate(r)?this._degenerateObjects.add(r):(n.init(this._root),this._add(r,n))}l.release(n)}remove(e,t=null){this._objectCount-=e.length;const n=l.acquire();for(const o of e){const r=t??w(this.objectToBoundingSphere(o),be);F(r[3])?(n.init(this._root),le(o,r,n)):this._degenerateObjects.delete(o)}l.release(n),this._shrink()}update(e,t){if(!F(t[3])&&this._isDegenerate(e))return;const n=pe(e);this.remove(n,t),this.add(n)}forEachAlongRay(e,t,n){const o=U(e,t);z(this._root,r=>{if(!ue(o,r))return!1;const h=r.node;return h.terminals.forAll(a=>{this._intersectsObject(o,a)&&n(a)}),h.residents!==null&&h.residents.forAll(a=>{this._intersectsObject(o,a)&&n(a)}),!0})}forEachAlongRayWithVerticalOffset(e,t,n,o){const r=U(e,t);z(this._root,h=>{if(!ce(r,h,o))return!1;const a=h.node;return a.terminals.forAll(s=>{this._intersectsObjectWithOffset(r,s,o)&&n(s)}),a.residents!==null&&a.residents.forAll(s=>{this._intersectsObjectWithOffset(r,s,o)&&n(s)}),!0})}forEach(e){z(this._root,t=>{const n=t.node;return n.terminals.forAll(e),n.residents!==null&&n.residents.forAll(e),!0}),this._degenerateObjects.forEach(e)}forEachDegenerateObject(e){this._degenerateObjects.forEach(e)}findClosest(e,t,n,o=()=>!0,r=1/0){let h=1/0,a=1/0,s=null;const u=y(e,t),m=d=>{if(--r,!o(d))return;const p=this.objectToBoundingSphere(d);if(!v(n,p))return;const O=T(e,t,f(p)),D=O-p[3],c=O+p[3];D<h&&(h=D,a=c,s=d)};return X(this._root,d=>{if(r<=0||!v(n,d.bounds)||(q(S,u,d.halfSize),$(S,S,f(d.bounds)),T(e,t,S)>a))return!1;const p=d.node;return p.terminals.forAll(O=>m(O)),p.residents!==null&&p.residents.forAll(O=>m(O)),!0},e,t),s}forEachInDepthRange(e,t,n,o,r,h,a){let s=-1/0,u=1/0;const m={setRange:c=>{n===A.DepthOrder.FRONT_TO_BACK?(s=Math.max(s,c.near),u=Math.min(u,c.far)):(s=Math.max(s,-c.far),u=Math.min(u,-c.near))}};m.setRange(o);const d=T(t,n,e),p=y(t,n),O=y(t,-n),D=c=>{if(!a(c))return;const j=this.objectToBoundingSphere(c),R=f(j),V=T(t,n,R)-d,re=V-j[3],se=V+j[3];re>u||se<s||!v(h,j)||r(c,m)};X(this._root,c=>{if(!v(h,c.bounds)||(q(S,p,c.halfSize),$(S,S,f(c.bounds)),T(t,n,S)-d>u)||(q(S,O,c.halfSize),$(S,S,f(c.bounds)),T(t,n,S)-d<s))return!1;const j=c.node;return j.terminals.forAll(R=>D(R)),j.residents!==null&&j.residents.forAll(R=>D(R)),!0},t,n)}forEachNode(e){z(this._root,t=>e(t.node,t.bounds,t.halfSize,t.depth))}forEachNeighbor(e,t){const n=k(t),o=f(t),r=s=>{const u=this.objectToBoundingSphere(s),m=k(u),d=n+m;return!(G(f(u),o)-d*d<=0)||e(s)};let h=!0;const a=s=>{h&&(h=r(s))};z(this._root,s=>{const u=k(s.bounds),m=n+u;if(G(f(s.bounds),o)-m*m>0)return!1;const d=s.node;return d.terminals.forAll(a),h&&d.residents!==null&&d.residents.forAll(a),h}),h&&this.forEachDegenerateObject(a)}_intersectsObject(e,t){const n=this.objectToBoundingSphere(t);return!(n[3]>0)||Q(n,e)}_intersectsObjectWithOffset(e,t,n){const o=this.objectToBoundingSphere(t);return!(o[3]>0)||Q(n.applyToBoundingSphere(o),e)}_add(e,t){t.advanceTo(this.objectToBoundingSphere(e))?t.node.terminals.push(e):(t.node.residents.push(e),t.node.residents.length>this._maximumObjectsPerNode&&t.depth<this._maximumDepth&&this._split(t))}_split(e){const t=e.node.residents;e.node.residents=null;for(let n=0;n<t.length;n++){const o=l.acquire().init(e);this._add(t.at(n),o),l.release(o)}}_grow(e,t){if(t!==0&&(Y(e,t,n=>this.objectToBoundingSphere(n),x),F(x[3])&&!this._fitsInsideTree(x)))if(ne(this._root.node))w(x,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else{const n=this._rootBoundsForRootAsSubNode(x);this._placingRootViolatesMaxDepth(n)?this._rebuildTree(x,n):this._growRootAsSubNode(n),l.release(n)}}_rebuildTree(e,t){W(f(I),f(t.bounds)),I[3]=t.halfSize,Y([e,I],2,o=>o,L);const n=l.acquire().init(this._root);this._root.initFrom(null,L,L[3]),this._root.increaseHalfSize(1.25),z(n,o=>(this.add(o.node.terminals.data,o.node.terminals.length),o.node.residents!==null&&this.add(o.node.residents.data,o.node.residents.length),!0)),l.release(n)}_placingRootViolatesMaxDepth(e){const t=Math.log(e.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return z(this._root,o=>(n=Math.max(n,o.depth),n+t<=this._maximumDepth)),n+t>this._maximumDepth}_rootBoundsForRootAsSubNode(e){const t=e[3],n=e;let o=-1/0;const r=this._root.bounds,h=this._root.halfSize;for(let s=0;s<3;s++){const u=r[s]-h-(n[s]-t),m=n[s]+t-(r[s]+h),d=Math.max(0,Math.ceil(u/(2*h))),p=Math.max(0,Math.ceil(m/(2*h)))+1,O=2**Math.ceil(Math.log(d+p)*Math.LOG2E);o=Math.max(o,O),E[s].min=d,E[s].max=p}for(let s=0;s<3;s++){let u=E[s].min,m=E[s].max;const d=(o-(u+m))/2;u+=Math.ceil(d),m+=Math.floor(d);const p=r[s]-h-u*h*2;H[s]=p+(m+u)*h}const a=o*h;return H[3]=a*ie,l.acquire().initFrom(null,H,a,0)}_growRootAsSubNode(e){const t=this._root.node;W(f(x),f(this._root.bounds)),x[3]=this._root.halfSize,this._root.init(e),e.advanceTo(x,null,!0),e.node.children=t.children,e.node.residents=t.residents,e.node.terminals=t.terminals}_shrink(){for(;;){const e=this._findShrinkIndex();if(e===-1)break;this._root.advance(e),this._root.depth=0}}_findShrinkIndex(){if(this._root.node.terminals.length!==0||this._root.isLeaf())return-1;let e=null;const t=this._root.node.children;let n=0,o=0;for(;o<t.length&&e==null;)n=o++,e=t[n];for(;o<t.length;)if(t[o++])return-1;return n}_isDegenerate(e){return!F(this.objectToBoundingSphere(e)[3])}_fitsInsideTree(e){const t=this._root.bounds,n=this._root.halfSize;return e[3]<=n&&e[0]>=t[0]-n&&e[0]<=t[0]+n&&e[1]>=t[1]-n&&e[1]<=t[1]+n&&e[2]>=t[2]-n&&e[2]<=t[2]+n}toJSON(){const{maximumDepth:e,maximumObjectsPerNode:t,_objectCount:n}=this,o=this._nodeToJSON(this._root.node);return{maximumDepth:e,maximumObjectsPerNode:t,objectCount:n,root:{bounds:this._root.bounds,halfSize:this._root.halfSize,depth:this._root.depth,node:o}}}_nodeToJSON(e){var r,h;const t=e.children.map(a=>a?this._nodeToJSON(a):null),n=(r=e.residents)==null?void 0:r.map(a=>this.objectToBoundingSphere(a)),o=(h=e.terminals)==null?void 0:h.map(a=>this.objectToBoundingSphere(a));return{children:t,residents:n,terminals:o}}static fromJSON(e){const t=new A(n=>n,{maximumDepth:e.maximumDepth,maximumObjectsPerNode:e.maximumObjectsPerNode});return t._objectCount=e.objectCount,t._root.initFrom(e.root.node,e.root.bounds,e.root.halfSize,e.root.depth),t}}class l{constructor(){this.bounds=B(),this.halfSize=0,this.initFrom(null,null,0,0)}init(e){return this.initFrom(e.node,e.bounds,e.halfSize,e.depth)}initFrom(e,t,n,o=this.depth){return this.node=e??l.createEmptyNode(),t&&w(t,this.bounds),this.halfSize=n,this.depth=o,this}increaseHalfSize(e){this.halfSize*=e,this.updateBoundsRadiusFromHalfSize()}updateBoundsRadiusFromHalfSize(){this.bounds[3]=this.halfSize*ie}advance(e){let t=this.node.children[e];t||(t=l.createEmptyNode(),this.node.children[e]=t),this.node=t,this.halfSize/=2,this.depth++;const n=oe[e];return this.bounds[0]+=n[0]*this.halfSize,this.bounds[1]+=n[1]*this.halfSize,this.bounds[2]+=n[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this}advanceTo(e,t,n=!1){for(;;){if(this.isTerminalFor(e))return t&&t(this,-1),!0;if(this.isLeaf()){if(!n)return t&&t(this,-1),!1;this.node.residents=null}const o=this._childIndex(e);t&&t(this,o),this.advance(o)}}isLeaf(){return this.node.residents!=null}isTerminalFor(e){return e[3]>this.halfSize/2}_childIndex(e){const t=this.bounds;return(t[0]<e[0]?1:0)+(t[1]<e[1]?2:0)+(t[2]<e[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new C({shrink:!0}),residents:new C({shrink:!0})}}static acquire(){return l._pool.acquire()}static release(e){l._pool.release(e)}static clearPool(){l._pool.prune()}}function z(i,e){let t=l.acquire().init(i);const n=[t];for(;n.length!==0;){if(t=n.pop(),e(t)&&!t.isLeaf())for(let o=0;o<t.node.children.length;o++)t.node.children[o]&&n.push(l.acquire().init(t).advance(o));l.release(t)}}function X(i,e,t,n=A.DepthOrder.FRONT_TO_BACK){let o=l.acquire().init(i);const r=[o];for(_e(t,n,ee);r.length!==0;){if(o=r.pop(),e(o)&&!o.isLeaf())for(let h=7;h>=0;--h){const a=ee[h];o.node.children[a]&&r.push(l.acquire().init(o).advance(a))}l.release(o)}}function le(i,e,t){N.clear();const n=t.advanceTo(e,(o,r)=>{N.push(o.node),N.push(r)})?t.node.terminals:t.node.residents;if(n.removeUnordered(i),n.length===0)for(let o=N.length-2;o>=0&&de(N.data[o],N.data[o+1]);o-=2);}function de(i,e){return e>=0&&(i.children[e]=null),!!ne(i)&&(i.residents===null&&(i.residents=new C({shrink:!0})),!0)}function ue(i,e){return P(f(e.bounds),2*-e.halfSize,b),P(f(e.bounds),2*e.halfSize,g),te(i.origin,i.direction,b,g)}function ce(i,e,t){return P(f(e.bounds),2*-e.halfSize,b),P(f(e.bounds),2*e.halfSize,g),t.applyToMinMax(b,g),te(i.origin,i.direction,b,g)}function ne(i){if(i.terminals.length!==0)return!1;if(i.residents!==null)return i.residents.length===0;for(let e=0;e<i.children.length;e++)if(i.children[e])return!1;return!0}function fe(i,e){i[0]=Math.min(i[0],e[0]-e[3]),i[1]=Math.min(i[1],e[1]-e[3]),i[2]=Math.min(i[2],e[2]-e[3])}function me(i,e){i[0]=Math.max(i[0],e[0]+e[3]),i[1]=Math.max(i[1],e[1]+e[3]),i[2]=Math.max(i[2],e[2]+e[3])}function P(i,e,t){t[0]=i[0]+e,t[1]=i[1]+e,t[2]=i[2]+e}function Y(i,e,t,n){if(e===1){const o=t(i[0]);w(o,n)}else{b[0]=1/0,b[1]=1/0,b[2]=1/0,g[0]=-1/0,g[1]=-1/0,g[2]=-1/0;for(let o=0;o<e;o++){const r=t(i[o]);F(r[3])&&(fe(b,r),me(g,r))}ae(f(n),b,g,.5),n[3]=Math.max(g[0]-b[0],g[1]-b[1],g[2]-b[2])/2}}function _e(i,e,t){if(!M.length)for(let n=0;n<8;++n)M.push({index:0,distance:0});for(let n=0;n<8;++n){const o=oe[n];M.data[n].index=n,M.data[n].distance=T(i,e,o)}M.sort((n,o)=>n.distance-o.distance);for(let n=0;n<8;++n)t[n]=M.data[n].index}function y(i,e){let t,n=1/0;for(let o=0;o<8;++o){const r=T(i,e,Z[o]);r<n&&(n=r,t=Z[o])}return t}function T(i,e,t){return e*(i[0]*t[0]+i[1]*t[1]+i[2]*t[2])}function F(i){return!isNaN(i)&&i!==-1/0&&i!==1/0&&i>0}l._pool=new he(l),function(i){var e;(e=i.DepthOrder||(i.DepthOrder={}))[e.FRONT_TO_BACK=1]="FRONT_TO_BACK",e[e.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(A||(A={}));const oe=[_(-1,-1,-1),_(1,-1,-1),_(-1,1,-1),_(1,1,-1),_(-1,-1,1),_(1,-1,1),_(-1,1,1),_(1,1,1)],Z=[_(-1,-1,-1),_(-1,-1,1),_(-1,1,-1),_(-1,1,1),_(1,-1,-1),_(1,-1,1),_(1,1,-1),_(1,1,1)],ie=Math.sqrt(3),K=[null];function pe(i){return K[0]=i,K}const H=B(),S=J(),b=J(),g=J(),N=new C,be=B(),x=B(),I=B(),L=B(),E=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],M=new C,ee=[0,0,0,0,0,0,0,0],Te=A;export{Te as Y};
