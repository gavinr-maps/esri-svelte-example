import{r as o}from"./tslib.es6-B3Jf3DVX.js";import{I as w}from"./Accessor-BLX9ikPh.js";import{watch as u}from"./reactiveUtils-C5zUhJQJ.js";import{m as n,a as c}from"./subclass-BZA_h8Db.js";import{B as b,n as M}from"./jsxFactory-CJa39Fro.js";import{l as y}from"./AnchorElementViewModel-DhGwA7fN.js";let l=class extends y{constructor(i){super(i),this.visible=!1}};o([n()],l.prototype,"visible",void 0),l=o([c("esri.widgets.Spinner.SpinnerViewModel")],l);const p=l,a="esri-spinner",h={base:a,spinnerStart:`${a}--start`,spinnerFinish:`${a}--finish`};let s=class extends b{constructor(i,e){super(i,e),this._animationDelay=500,this._animationPromise=null,this.viewModel=new p}initialize(){this.addHandles(u(()=>this.visible,i=>this._visibleChange(i)))}destroy(){this._animationPromise=null}get location(){return this.viewModel.location}set location(i){this.viewModel.location=i}get view(){return this.viewModel.view}set view(i){this.viewModel.view=i}get visible(){return this.viewModel.visible}set visible(i){this.viewModel.visible=i}show(i){const{location:e,promise:t}=i??{};e&&(this.viewModel.location=e),this.visible=!0;const r=()=>this.hide();t&&t.catch(()=>{}).then(r)}hide(){this.visible=!1}render(){const{visible:i}=this,{screenLocation:e}=this.viewModel,t=!!e,r=i&&t,v=!i&&t,d={[h.spinnerStart]:r,[h.spinnerFinish]:v},m=this._getPositionStyles();return M("div",{class:this.classes(h.base,d),styles:m})}_visibleChange(i){if(i)return void(this.viewModel.screenLocationEnabled=!0);const e=w(this._animationDelay);this._animationPromise=e,e.catch(()=>{}).then(()=>{this._animationPromise===e&&(this.viewModel.screenLocationEnabled=!1,this._animationPromise=null)})}_getPositionStyles(){const{screenLocation:i,view:e}=this.viewModel;if(e==null||i==null)return{};const{padding:t}=e;return{left:i.x-t.left+"px",top:i.y-t.top+"px"}}};o([n()],s.prototype,"location",null),o([n()],s.prototype,"view",null),o([n({type:p})],s.prototype,"viewModel",void 0),o([n()],s.prototype,"visible",null),s=o([c("esri.widgets.Spinner")],s);const x=s;export{x as h,p};
