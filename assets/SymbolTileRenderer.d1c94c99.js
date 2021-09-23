import{r as t,q as e,bF as s,j5 as r,bL as i,D as n,Z as a,$ as h,bS as o,bN as d,N as u,v as f,bo as l,ab as c,ad as _,aA as p}from"./vendor.d0a39f0f.js";import{s as m}from"./CircularArray.f5086d89.js";import{r as y,E as g,I as x}from"./Utils.ea926aef.js";import{i as b,f as w,o as v}from"./FeatureContainer.da02904a.js";import{h as C,f as k}from"./VertexArrayObject.3a9852d6.js";import"./Texture.6f578e52.js";import{i as S}from"./schemaUtils.c72e3829.js";import{o as E}from"./BaseTileRenderer.969d1b8c.js";import{m as T}from"./visualVariablesUtils.684ffd7c.js";import{G as B}from"./WGLContainer.e726cb8a.js";import"./definitions.e5e12ce7.js";import"./TileContainer.850b0054.js";import"./Container.90659a9c.js";import"./MaterialKey.376930c0.js";import"./visualVariablesUtils.076fa3c6.js";import"./CIMSymbolHelper.0ef4e080.js";import"./Rect.db562a93.js";import"./BidiEngine.af5bfcbd.js";import"./MD5.86afbcc5.js";import"./ShaderCompiler.f5adc423.js";import"./config.92a85a9b.js";import"./GeometryUtils.1bcb906c.js";import"./pixelUtils.df2312f8.js";import"./earcut.9760c2d2.js";const V=4294967296;class M{constructor(t){this._head=t,this._cursor=t}static from(t){const e=A.from(new Float32Array(t));return new M(e)}get id(){return this._cursor.id}get baseZoom(){return this._cursor.baseZoom}get anchorX(){return this._cursor.anchorX}get anchorY(){return this._cursor.anchorY}get directionX(){return this._cursor.directionX}get directionY(){return this._cursor.directionY}get size(){return this._cursor.size}get materialKey(){return this._cursor.materialKey}get boundsCount(){return this._cursor.boundsCount}computedMinZoom(){return this._cursor.computedMinZoom()}setComputedMinZoom(t){return this._cursor.setComputedMinZoom(t)}boundsComputedAnchorX(t){return this._cursor.boundsComputedAnchorX(t)}boundsComputedAnchorY(t){return this._cursor.boundsComputedAnchorY(t)}setBoundsComputedAnchorX(t,e){return this._cursor.setBoundsComputedAnchorX(t,e)}setBoundsComputedAnchorY(t,e){return this._cursor.setBoundsComputedAnchorY(t,e)}boundsX(t){return this._cursor.boundsX(t)}boundsY(t){return this._cursor.boundsY(t)}boundsWidth(t){return this._cursor.boundsWidth(t)}boundsHeight(t){return this._cursor.boundsHeight(t)}link(e){if(t(e._head))return this._cursor.link(e._head)}getCursor(){return this.copy()}copy(){var t;const e=new M(null==(t=this._head)?void 0:t.copy());if(!e._head)return e;let s=e._head,r=e._head._link;for(;r;)s._link=r.copy(),s=r,r=s._link;return e}peekId(){var t;return null!=(t=this._cursor.peekId())?t:this._cursor._link.peekId()}nextId(){const t=this.id;for(;t===this.id;)if(!this.next())return!1;return!0}save(){this._savedCursor=this._cursor,this._savedOffset=this._cursor._offset}restore(){this._cursor=this._savedCursor,this._cursor._offset=this._savedOffset}next(){if(!this._cursor)return!1;if(!this._cursor.next()){if(!this._cursor._link)return!1;this._cursor=this._cursor._link,this._cursor._offset=0}return!0}lookup(t){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(t);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}delete(e){let s=this._head,r=null;for(;s;){if(s.delete(e))return s.isEmpty()&&t(r)&&(r._link=s._link),!0;r=s,s=s._link}return!1}}class A{constructor(t){this._offset=-1,this._link=null,this._count=0,this._deletedCount=0,this._offsets={instance:null},this._buffer=t}static from(t){return new A(new Float32Array(t))}isEmpty(){return this._deletedCount===this.count}get count(){return this._count||(this._count=this._computeCount()),this._count}get id(){return this._buffer[this._offset+0]}set id(t){this._buffer[this._offset+0]=t}get baseZoom(){return this._buffer[this._offset+1]}get anchorX(){return this._buffer[this._offset+2]}get anchorY(){return this._buffer[this._offset+3]}get directionX(){return this._buffer[this._offset+4]}get directionY(){return this._buffer[this._offset+5]}get size(){return this._buffer[this._offset+6]}get materialKey(){return this._buffer[this._offset+7]}computedMinZoom(){return this._buffer[this._offset+8]}setComputedMinZoom(t){this._buffer[this._offset+8]=t}get boundsCount(){return this._buffer[this._offset+9]}boundsComputedAnchorX(t){return this._buffer[this._offset+10+6*t+0]}boundsComputedAnchorY(t){return this._buffer[this._offset+10+6*t+1]}setBoundsComputedAnchorX(t,e){this._buffer[this._offset+10+6*t+0]=e}setBoundsComputedAnchorY(t,e){this._buffer[this._offset+10+6*t+1]=e}boundsX(t){return this._buffer[this._offset+10+6*t+2]}boundsY(t){return this._buffer[this._offset+10+6*t+3]}boundsWidth(t){return this._buffer[this._offset+10+6*t+4]}boundsHeight(t){return this._buffer[this._offset+10+6*t+5]}link(t){let e=this;for(;e._link;)e=e._link;e._link=t}getCursor(){return this.copy()}copy(){const t=new A(this._buffer);return t._link=this._link,t._offset=this._offset,t._deletedCount=this._deletedCount,t._offsets=this._offsets,t._count=this._count,t}peekId(){const t=this._offset+10+6*this.boundsCount+0;return t>=this._buffer.length?0:this._buffer[t]}next(){let t=0;for(;this._offset<this._buffer.length&&t++<100&&(-1===this._offset?this._offset=0:this._offset+=10+6*this.boundsCount,this.id===V););return this.id!==V&&this._offset<this._buffer.length}delete(t){const e=this._offset,s=this.lookup(t);if(s)for(this.id=4294967295,++this._deletedCount;this.next()&&this.id===t;)this.id=4294967295,++this._deletedCount;return this._offset=e,s}lookup(t){const s=this._offset;if(e(this._offsets.instance)){this._offsets.instance=new Map;const t=this.copy();t._offset=-1;let e=0;for(;t.next();)t.id!==e&&(this._offsets.instance.set(t.id,t._offset),e=t.id)}return!!this._offsets.instance.has(t)&&(this._offset=this._offsets.instance.get(t),this.id!==V||(this._offset=s,!1))}_computeCount(){const t=this._offset;let e=0;for(this._offset=-1;this.next();)e++;return this._offset=t,e}}class I{constructor(t){if(!Array.isArray(t))return void(this.data=t);this.data=t[0];let e=this;for(let s=1;s<t.length;s++)e.next=new I([t[s]]),e=e.next}*values(){let t=this;for(;t;)yield t.data,t=t.next}forEach(t){let e=this;for(;e;)t(e.data),e=e.next}find(t){var e;return t(this.data)?this:null==(e=this.next)?void 0:e.find(t)}max(t,e=this){const s=t(this.data)>t(e.data)?this:e;return this.next?this.next.max(t,s):s}remove(t,e=null){return this===t?e?(e.next=this.next,e):this.next:this.next.remove(t,this)}get last(){return this.next?this.next.last:this}}class L{constructor(t){this._head=null,e(t)||(this._head=new I(t))}get head(){return this._head}maxAvailableSpace(){if(e(this._head))return 0;const t=this._head.max((t=>t.end-t.start));return t.data.end-t.data.start}firstFit(t){if(e(this._head))return null;let s=null,r=this._head;for(;r;){const e=r.data.end-r.data.start;if(e===t)return s?s.next=r.next:this._head=r.next,r.data.start;if(e>t){const e=r.data.start;return r.data.start+=t,e}s=r,r=r.next}return null}free(t,s){const r=t+s;if(e(this._head)){const e=new I({start:t,end:r});return void(this._head=e)}if(r<=this._head.data.start){if(r===this._head.data.start)return void(this._head.data.start-=s);const e=new I({start:t,end:r});return e.next=this._head,void(this._head=e)}let i=this._head,n=i.next;for(;n;){if(n.data.start>=r){if(i.data.end===t)return void(i.data.end+=s);if(n.data.start===r)return void(n.data.start-=s);const e=new I({start:t,end:r});return e.next=i.next,void(i.next=e)}i=n,n=n.next}if(t===i.data.end)return void(i.data.end+=s);const a=new I({start:t,end:r});i.next=a}}class U{constructor(t,e,s,r,i){this.target=t,this.geometryType=e,this.materialKey=s,this.indexFrom=r,this.indexCount=i}get indexEnd(){return this.indexFrom+this.indexCount}extend(t){this.indexCount+=t}draw(t,e,s){this.target.draw(t,e,s,this.indexFrom,this.indexCount)}}class R{constructor(t,e){this.geometryType=0,this._target=t,this.geometryType=e}static from(e,s,r,i){const n=new R(e,s);if(t(i))for(const t of i)r.seekIndex(t),n.addRecord(r);else for(;r.next();)n.addRecord(r);return n}addRecord(t){const s=this._target,r=this.geometryType,i=t.materialKey,n=t.indexFrom,a=t.indexCount;if(e(this._head)){const t=new U(s,r,i,n,a);return void(this._head=new I(t))}let h=null,o=this._head;for(;o;){if(n<o.data.indexFrom)return this._insert(i,n,a,h,o);h=o,o=o.next}this._insert(i,n,a,h,null)}forEach(e){t(this._head)&&this._head.forEach(e)}*infos(){if(t(this._head))for(const t of this._head.values())yield t}_insert(s,r,i,n,a){if(e(n)&&e(a)){const t=new U(this._target,this.geometryType,s,r,i);this._head=new I(t)}return e(n)&&t(a)?this._insertAtHead(s,r,i,a):t(n)&&e(a)?this._insertAtEnd(s,r,i,n):t(n)&&t(a)?this._insertAtMiddle(s,r,i,n,a):void 0}_insertAtHead(t,e,s,r){const i=e+s;if(t===r.data.materialKey&&i===r.data.indexFrom)r.data.indexFrom=e,r.data.indexCount+=s;else{const i=new U(this._target,this.geometryType,t,e,s);this._head=new I(i),this._head.next=r}}_insertAtEnd(t,e,s,r){if(r.data.materialKey===t&&r.data.indexEnd===e)r.data.indexCount+=s;else{const i=new U(this._target,this.geometryType,t,e,s),n=new I(i);r.next=n}}_insertAtMiddle(t,e,s,r,i){const n=e+s;if(r.data.materialKey===t&&r.data.indexEnd===e)r.data.indexCount+=s,r.data.materialKey===i.data.materialKey&&r.data.indexEnd===i.data.indexFrom&&(r.data.indexCount+=i.data.indexCount,r.next=i.next);else if(t===i.data.materialKey&&n===i.data.indexFrom)i.data.indexFrom=e,i.data.indexCount+=s;else{const n=new U(this._target,this.geometryType,t,e,s),a=new I(n);r.next=a,a.next=i}}}class F{constructor(t,e,s){const r=new Uint32Array(e*s);this.strideInt=s,this.bufferType=t,this.dirty={start:1/0,end:0},this.gpu=null,this._cpu=r,this.clear()}get elementSize(){return this._cpu.length/this.strideInt}destroy(){s(this.gpu,(t=>t.dispose()))}clear(){this.dirty.start=1/0,this.dirty.end=0,this.freeList=new L({start:0,end:this._cpu.length/this.strideInt}),this.fillPointer=0}ensure(e){if(this.maxAvailableSpace()>=e)return;const s=e*this.strideInt;if(s>this._cpu.length-this.fillPointer){t(this.gpu)&&(this.gpu=null);const e=Math.round(1.5*(this._cpu.length+s)),r=new Uint32Array(e),i=this._cpu.length/this.strideInt,n=e/this.strideInt;this.freeList.free(i,n-i),r.set(this._cpu),this._cpu=r}}set(t,e){this._cpu[t]!==e&&(this._cpu[t]=e,this.dirty.start=Math.min(t,this.dirty.start),this.dirty.end=Math.max(t,this.dirty.end))}getBuffer(){if(!this._cpu2||this._cpu2.length!==this._cpu.length){const t=this._cpu.slice();this._cpu2=t}return this._cpu2.set(this._cpu),this._cpu2}get bufferSize(){return this._cpu.length/this.strideInt}maxAvailableSpace(){return this.freeList.maxAvailableSpace()}insert(t,e,s,i){const n=s*this.strideInt,a=e*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,h=new Uint32Array(t,a,n),o=r(this.freeList.firstFit(s),"First fit region must be defined")*this.strideInt,d=n,u=o/this.strideInt-e;if(0!==i)for(let r=0;r<h.length;r++)h[r]+=i;return this._cpu.set(h,o),this.dirty.start=Math.min(this.dirty.start,o),this.dirty.end=Math.max(this.dirty.end,o+d),this.fillPointer=Math.max(this.fillPointer,o+d),u}free(t,e,s){const r=t*this.strideInt,i=(t+e)*this.strideInt;if(!0===s)for(let n=t;n!==t+e;n++)this._cpu[n*this.strideInt]=2147450879;this.dirty.start=Math.min(this.dirty.start,r),this.dirty.end=Math.max(this.dirty.end,i),this.freeList.free(t,e)}upload(t){if(this.dirty.end){if(e(this.gpu))return this.gpu=this._createBuffer(t),this.dirty.start=1/0,void(this.dirty.end=0);this.gpu.setSubData(this._cpu,this.dirty.start,this.dirty.start,this.dirty.end),this.dirty.start=1/0,this.dirty.end=0}}_createBuffer(t){return"index"===this.bufferType?C.createIndex(t,35048,this._cpu):C.createVertex(t,35048,this._cpu)}}class j{constructor(t,e){this._indicesInvalid=!1,this.geometryType=t}destroy(){this._vao&&(this._vao.dispose(),this._vao=null)}insert(t,e,s){if(!t.records.byteLength)return;const i=t.stride;if(this._vertexBuffer&&this._indexBuffer){const s=4*t.indices.byteLength,n=t.vertices.byteLength/i;this._indexBuffer.ensure(s),this._vertexBuffer.ensure(n);const{vertices:a,indices:h}=t,o=b.from(t.records),d=this._vertexBuffer.insert(a,0,a.byteLength/i,0),u=this._indexBuffer.insert(h,0,h.byteLength/4,d);if(o.forEach((t=>{t.indexFrom+=u,t.vertexFrom+=d})),r(this._records,"Expected records to be defined").link(o),e)this._indicesInvalid=!0;else if(this._displayList){const t=o.getCursor();for(;t.next();)this._displayList.addRecord(t)}}else{const s=4*t.indices.byteLength,r=t.vertices.byteLength/i,n=i/Uint32Array.BYTES_PER_ELEMENT;this._records=b.from(t.records),this._indexBuffer=new F("index",s,1),this._vertexBuffer=new F("vertex",r,n),this._indexBuffer.insert(t.indices,0,t.indices.byteLength/4,0),this._vertexBuffer.insert(t.vertices,0,t.vertices.byteLength/i,0),e&&(this._indicesInvalid=!0)}}remove(t){if(!e(this._records))for(const e of t){const t=this._records.getCursor();if(!t.lookup(e))continue;const s=t.indexFrom,r=t.vertexFrom;let i=t.indexCount,n=t.vertexCount;for(;t.next()&&t.id===e;)i+=t.indexCount,n+=t.vertexCount;this._indexBuffer.free(s,i),this._vertexBuffer.free(r,n,!0),this._records.delete(e)}}draw(t,s,r,i,n){if(!this._vertexBuffer||!this._indexBuffer||e(this._records))return;if((e(this._vertexBuffer.gpu)||e(this._indexBuffer.gpu))&&(this._vao&&(this._vao.dispose(),this._vao=null),this._vertexBuffer.gpu=null,this._indexBuffer.gpu=null),this._vertexBuffer.upload(t),this._indexBuffer.upload(t),!this._vao){const e=this._vertexBuffer.gpu,i=this._indexBuffer.gpu;if(!i||!e)return;this._vao=new k(t,r,s,{geometry:e},i)}const a=this._vao,h=i*Uint32Array.BYTES_PER_ELEMENT;t.bindVAO(a),t.drawElements(4,n,5125,h)}forEachCommand(t){if(!e(this._records)){if(this._sortIndices(this._records),!this._displayList){const t=this._cursorIndexOrder;this._displayList=R.from(this,this.geometryType,this._records.getCursor(),t)}this._displayList.forEach(t)}}_sortIndices(t){if(!this._indicesInvalid)return;this._indicesInvalid=!1;let e=0;const s=t.getCursor(),r=this._indexBuffer.getBuffer(),i=[],n=[],a=[];for(;s.next();)n.push(s.index),a.push(s.sortKey),i.push(s.id);n.sort(((t,e)=>{const s=a[e],r=a[t];return r===s?i[e]-i[t]:s-r}));const h=t.getCursor();for(const o of n){if(!h.seekIndex(o))throw new Error("Expected to find index");const{indexFrom:t,indexCount:s}=h;h.indexFrom=e;for(let i=0;i<s;i++)this._indexBuffer.set(e++,r[t+i])}this._cursorIndexOrder=n,this._displayList=null}}let P=0;class q extends w{constructor(t,e,s,r){super(t,e,s),this.instanceId=P++,this.patchCount=0,this._renderState={current:{geometry:new Map,metrics:null},next:null,swap:!1,swapFrames:0,locked:!1},this._patches=new m(100),this._bufferPatches=new m(100),this._lastCommitTime=0,this._lastMessageWasClear=!1,this.transforms.labelMat2d=i(),this._store=r}destroy(){super.destroy(),this._renderState.current.geometry.forEach((t=>t.destroy()))}get labelMetrics(){return this._renderState.current.metrics}get hasData(){return!!this._renderState.current.geometry.size}getGeometry(t){return this._renderState.current.geometry.get(t)}setTransform(t,e){super.setTransform(t,e);const s=this.transforms.labelMat2d,r=t.getScreenTransform(s,e),i=u();n(i,[this.x,this.y],r),a(s),h(s,s,i),o(s,t.viewMat2d,s)}patch(t,e){if(this.patchCount++,t.clear&&this._lastMessageWasClear)return;this._lastMessageWasClear=t.clear,t.clear&&this._patches.size>=50&&this._dropPatches();const s=t,r=s.addOrUpdate&&this.key.id!==s.addOrUpdate.tileKeyOrigin;e&&r?this._bufferPatches.enqueue(s):(s.sort=s.sort&&!e,this._patches.enqueue(s)),this.requestRender()}commit(t){if(this._lastCommitTime!==t.time){this._lastCommitTime=t.time;for(let t=0;t<4;t++)this._updateMesh(),this.isReady&&this._updateBufferMesh();this._renderState.swap&&(this._swapRenderStates(),this.requestRender())}}lock(){this._renderState.locked=!0}unlock(){this._renderState.locked=!1,this._flushUpdates(),this._swap()}_swapRenderStates(){if(this._renderState.next){if(this._renderState.locked)return this._renderState.swap=!0,void this.requestRender();if(this._renderState.swap=!0,0===this._renderState.swapFrames)return this._renderState.swapFrames=8,void this.requestRender();1==this._renderState.swapFrames--?this._swap():this.requestRender()}}_swap(){this._renderState.swap&&(this._renderState.swap=!1,t(this._renderState.next)&&(this._renderState.current.geometry.forEach((t=>t.destroy())),this._renderState.current=this._renderState.next,this._renderState.next=null))}_flushUpdates(){let t=this._patches.maxSize;for(;this._patches.size&&t--;)this._updateMesh(),this._swap()}_updateBufferMesh(){const e=this._bufferPatches.peek();if(!t(e)||!e.clear||null===this._renderState.next)for(;this._bufferPatches.size;){const e=this._bufferPatches.dequeue();t(e)&&this._patchBuffer(e)}}_updateMesh(){const e=this._patches.peek();if(t(e)&&e.clear&&null!==this._renderState.next)return;const s=this._patches.dequeue();if(t(s)){if(!0===s.clear){if(!this.isReady)return;return this._renderState.next,void(this._renderState.next={geometry:new Map,metrics:null})}this.requestRender(),this._patch(s),s.end&&(this.ready(),this._swapRenderStates())}}_patch(t){y((e=>{this._remove(e,t.remove),this._insert(e,t,!1)}))}_patchBuffer(t){y((e=>{this._insert(e,t,!0)}))}_insert(t,s,r){try{var i;const n=d(this._renderState.next,this._renderState.current),a=null==(i=s.addOrUpdate)?void 0:i.data[t],h=n.geometry;if(e(a))return;h.has(t)||h.set(t,new j(t,this.stage)),h.get(t).insert(a,s.sort,r),t===g.LABEL&&this._insertLabelMetrics(s.type,a.metrics,s.clear)}catch(n){}}_insertLabelMetrics(t,s,r){const i=d(this._renderState.next,this._renderState.current);if(e(s))return;const n=M.from(s);if(e(i.metrics))i.metrics=n;else{if("update"===t){const t=n.getCursor();for(;t.next();)i.metrics.delete(t.id)}i.metrics.link(n)}}_remove(t,e){const s=d(this._renderState.next,this._renderState.current).geometry.get(t);e&&e.length&&s&&(s.remove(e),this._removeLabelMetrics(e))}_removeLabelMetrics(t){const{metrics:s}=d(this._renderState.next,this._renderState.current);if(!e(s)&&t.length)for(const e of t)for(;s.delete(e););}_dropPatches(){const t=new Array;let s=!1;for(;this._patches.size;){const r=this._patches.dequeue();if(e(r))break;if(r.clear){if(s)break;s=!0}t.push(r)}this._patches.clear(),t.forEach((t=>this._patches.enqueue(t)))}}const Y=f("featurelayer-order-by-server-enabled");class K extends v{constructor(t,e,s,r){super(t),this._pointToCallbacks=new Map,this._layer=s,this._layerView=e,this._onUpdate=r}renderChildren(t){this.attributeView.update(),this.hasAnimation&&t.painter.effects.integrate.draw(t,t.attributeView),super.renderChildren(t)}isUpdating(){return this.attributeView.isUpdating()}hitTest(t,e){const s=[t,e],r=l();return this._pointToCallbacks.set(s,r),this.requestRender(),r.promise}onTileData(t,e){const s=Y&&"orderBy"in this._layer&&this._layer.orderBy,r=(null==s?void 0:s.length)&&!s[0].valueExpression&&s[0].field,i=s&&this._layerView.orderByFields===r;t.patch(e,i),this.contains(t)||this.addChild(t),this.requestRender()}onTileError(t){this.contains(t)||this.addChild(t)}doRender(t){const{minScale:e,maxScale:s}=this._layer,r=t.state.scale;r<=(e||1/0)&&r>=s&&super.doRender(t)}onAttributeStoreUpdate(){this.hasLabels&&this._layerView.view.labelManager.requestUpdate(),this._onUpdate()}get hasAnimation(){return this.hasLabels}get hasLabels(){if("sublayers"in this._layer)return this._layer.sublayers.some((t=>t.labelingInfo&&t.labelingInfo.length&&t.labelsVisible));const t=this._layer.featureReduction,e=t&&"cluster"===t.type&&t.labelsVisible&&t.labelingInfo&&t.labelingInfo.length;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!e}prepareRenderPasses(t){const e=t.registerRenderPass({name:"label",brushes:[B.label],target:()=>this.hasLabels?this.children:null,drawPhase:x.LABEL|x.LABEL_ALPHA}),s=t.registerRenderPass({name:"geometry",brushes:[B.fill,B.line,B.marker,B.text],target:()=>this.children,enableDefaultDraw:()=>!this._layerView.hasEffects,effects:[{apply:t.effects.outsideEffect,enable:()=>this._layerView.hasEffects,args:()=>this._layerView.effectLists.excluded},{apply:t.effects.insideEffect,enable:()=>this._layerView.hasEffects,args:()=>this._layerView.effectLists.included},{apply:t.effects.hittest,enable:()=>!!this._pointToCallbacks.size,args:()=>this._pointToCallbacks}]}),r=t.registerRenderPass({name:"highlight",brushes:[B.fill,B.line,B.marker,B.text],target:()=>this.children,drawPhase:x.HIGHLIGHT,enableDefaultDraw:()=>!1,effects:[{apply:t.effects.highlight,enable:()=>!!this._layerView.hasHighlight()}]});return[...super.prepareRenderPasses(t),s,r,e]}}let X=class extends E{install(t){const e=new K(this.tileInfoView,this.layerView,this.layer,(()=>this.notifyChange("updating")));this.featuresView=e,t.addChild(e)}uninstall(t){t.removeChild(this.featuresView),this.featuresView.destroy()}isUpdating(){const t=super.isUpdating(),e=!this.featuresView||this.featuresView.isUpdating(),s=t||e;return f("esri-2d-log-updating")&&console.log(`Updating SymbolTileRenderer ${s}\n  -> updatingTiles ${t}\n  -> updatingFeaturesView ${e}`),s}hitTest(t,e){return this.featuresView.hitTest(t,e)}supportsRenderer(t){return null!=t&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(t.type)}onConfigUpdate(t){let e=null;if("visualVariables"in t){const s=(S(t).visualVariables||[]).map((t=>{const e=t.clone();return"normalizationField"in t&&(e.normalizationField=null),t.valueExpression&&"$view.scale"!==t.valueExpression&&(e.valueExpression=null,e.field="nop"),e}));e=T(s)}this.featuresView.setRendererInfo(t,e,this.layerView.effects)}onTileData(t){const e=this.tiles.get(t.tileKey);e&&t.data&&this.featuresView.onTileData(e,t.data),this.layerView.view.labelManager.requestUpdate()}onTileError(t){const e=this.tiles.get(t.tileKey);e&&this.featuresView.onTileError(e)}forceAttributeTextureUpload(){this.featuresView.attributeView.forceTextureUpload()}lockGPUUploads(){this.featuresView.attributeView.lockTextureUpload(),this.tiles.forEach((t=>t.lock()))}unlockGPUUploads(){this.featuresView.attributeView.unlockTextureUpload(),this.tiles.forEach((t=>t.unlock()))}async getMaterialItems(t){return this.featuresView.getMaterialItems(t)}invalidateLabels(){this.featuresView.hasLabels&&this.layerView.view.labelManager.requestUpdate()}createTile(t){const e=this.tileInfoView.getTileBounds(p(),t);return new q(t,e[0],e[3],this.featuresView.attributeView)}disposeTile(t){this.featuresView.removeChild(t),t.destroy(),this.layerView.view.labelManager.requestUpdate()}};X=c([_("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],X);var z=X;export{z as default};
