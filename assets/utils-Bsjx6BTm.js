import{e as f,aw as s}from"./Accessor-BmwT4B0c.js";import{d as m}from"./enums-BTM-fOHQ.js";import{e as l}from"./grouping-CyFLmhwA.js";function d(e){return s(e.frameDurations.reduce((t,n)=>t+n,0))}function _(e){const{width:t,height:n}=e,o=e.frameDurations.reverse(),i=r=>{const a=e.frameDurations.length-1-r;return e.getFrame(a)};return{frameCount:e.frameCount,duration:e.duration,frameDurations:o,getFrame:i,width:t,height:n}}function F(e,t){const{width:n,height:o,getFrame:i}=e,r=t/e.duration,a=e.frameDurations.map(u=>s(u*r));return{frameCount:e.frameCount,duration:e.duration,frameDurations:a,getFrame:i,width:n,height:o}}function p(e,t){const{width:n,height:o,getFrame:i}=e,r=e.frameDurations.slice(),a=r.shift();return r.unshift(s(a+t)),{frameCount:e.frameCount,duration:e.duration+t,frameDurations:r,getFrame:i,width:n,height:o}}function c(e,t){const{width:n,height:o,getFrame:i}=e,r=e.frameDurations.slice(),a=r.pop();return r.push(s(a+t)),{frameCount:e.frameCount,duration:e.duration+t,frameDurations:r,getFrame:i,width:n,height:o}}class g{constructor(t,n,o,i){this._animation=t,this._repeatType=o,this._onFrameData=i,this._direction=1,this._currentFrame=0,this.timeToFrame=this._animation.frameDurations[this._currentFrame];let r=0;for(;n>r;)r+=this.timeToFrame,this.nextFrame();const a=this._animation.getFrame(this._currentFrame);this._onFrameData(a)}nextFrame(){if(this._currentFrame+=this._direction,this._direction>0){if(this._currentFrame===this._animation.frameDurations.length)switch(this._repeatType){case m.None:this._currentFrame-=this._direction;break;case m.Loop:this._currentFrame=0;break;case m.Oscillate:this._currentFrame-=this._direction,this._direction=-1}}else if(this._currentFrame===-1)switch(this._repeatType){case m.None:this._currentFrame-=this._direction;break;case m.Loop:this._currentFrame=this._animation.frameDurations.length-1;break;case m.Oscillate:this._currentFrame-=this._direction,this._direction=1}this.timeToFrame=this._animation.frameDurations[this._currentFrame];const t=this._animation.getFrame(this._currentFrame);this._onFrameData(t)}}function D(e,t,n,o){let i,{repeatType:r}=t;if(r==null&&(r=m.Loop),t.reverseAnimation===!0&&(e=_(e)),t.duration!=null&&(e=F(e,s(1e3*t.duration))),t.repeatDelay!=null){const a=1e3*t.repeatDelay;r===m.Loop?e=c(e,s(a)):r===m.Oscillate&&(e=p(c(e,s(a/2)),s(a/2)))}if(t.startTimeOffset!=null)i=s(1e3*t.startTimeOffset);else if(t.randomizeStartTime!=null){const u=t.randomizeStartSeed!=null?t.randomizeStartSeed:82749913,h=l(n,u);i=s(h*d(e))}else i=s(0);return new g(e,i,r,o)}function C(e,t,n,o){const i=t.playAnimation==null||t.playAnimation,r=D(e,t,n,o);let a,u=r.timeToFrame;function h(){a=i?setTimeout(()=>{r.nextFrame(),u=r.timeToFrame,h()},u):void 0}return h(),f(()=>i&&clearTimeout(a))}export{C as c};
