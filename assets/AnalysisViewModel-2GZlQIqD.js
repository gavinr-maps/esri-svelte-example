import{r as e}from"./tslib.es6-B3Jf3DVX.js";import{b as d,e as r,s as v,c as _,i as V,l as w}from"./Accessor-BLX9ikPh.js";import{d as y}from"./asyncUtils-CWX51uTe.js";import{m as n,a as g,n as h}from"./subclass-BZA_h8Db.js";import{watch as c,syncAndInitial as u,sync as O,whenOnce as A,when as m}from"./reactiveUtils-C5zUhJQJ.js";var o;(function(t){t[t.PENDING=0]="PENDING",t[t.WAIT_FOR_VIEW_READY=1]="WAIT_FOR_VIEW_READY",t[t.RUNNING=2]="RUNNING"})(o||(o={}));let i=class extends d{constructor(t={}){super(t),this.view=null,this.analysisView=null,this._reconnectViewTask=null,this._forceInteractiveHandle=null,this._parentChangeFromReconnect=!1,this._startUserOperation=null;const s=t==null?void 0:t.analysis;s!=null?this.analysis=s:(this._set("analysis",this.constructAnalysis()),this._set("isAnalysisOwner",!0)),(t==null?void 0:t.visible)!=null&&(this.visible=t.visible)}normalizeCtorArgs(t){const{analysis:s,...a}=t;return a}initialize(){this.addHandles([c(()=>({readyAndNotSupported:this.view!=null&&this.view.ready&&!this.supported}),({readyAndNotSupported:t})=>{t&&h.getLogger(this).errorOnce(this.unsupportedErrorMessage)},u),c(()=>{var t;return(t=this.analysis)==null?void 0:t.parent},t=>{this._parentChangeFromReconnect||t===this.view||this._set("isAnalysisOwner",!1);const s=!this._parentChangeFromReconnect;this._parentChangeFromReconnect=!1,s&&this._scheduleViewReconnect()},O),c(()=>({view:this.view,ready:this.view!=null&&this.view.ready,supported:this.supported}),({view:t},s)=>{const a=s==null?void 0:s.view;t!==a&&(this._startUserOperation=r(this._startUserOperation),this._disconnectFromView(a)),this._scheduleViewReconnect()},u)])}destroy(){this._reconnectViewTask=r(this._reconnectViewTask),this._startUserOperation=r(this._startUserOperation),this.analysisView!=null&&(this.analysisView.visible=void 0),this._disconnectFromView(this.view),this._set("view",null),this.analysis!=null&&this.isAnalysisOwner&&(this.analysis.destroy(),this._set("analysis",null))}get supported(){return this.view==null||this.view.type===this.supportedViewType}set visible(t){this._set("visible",t),this.analysisView!=null&&(this.analysisView.visible=t)}get active(){return this.tool!=null&&this.tool.active}get disabled(){return this.view==null||!this.view.ready||!this.supported}set analysis(t){t!==this._get("analysis")&&(this._startUserOperation=r(this._startUserOperation),this._disconnectFromView(this.view),this._setExternalAnalysis(t),this._scheduleViewReconnect())}get ready(){return this.analysisView!=null&&!this.connectingToView}get connectingToView(){return this._reconnectViewTask!=null}get isAnalysisOwner(){return this._get("isAnalysisOwner")}get tool(){return this.analysisView!=null?this.analysisView.tool:null}clear(){this._startUserOperation=r(this._startUserOperation),this._resetInteractiveCreationState(),this.tool!=null&&this.view!=null&&this.view.activeTool===this.tool&&(this.view.activeTool=null)}async start(){if(!this.visible)return void h.getLogger(this).warn("Cannot start analysis when not visible");this.clear();const t={task:null,abort:null,state:o.PENDING},s=y(async a=>{if(t.state=o.WAIT_FOR_VIEW_READY,await A(()=>this.ready,a),t.state=o.RUNNING,this.analysisView==null||this.view==null)return;const l=this.analysisView.tool;l!=null&&(this.view.activeTool=l,m(()=>l.created,()=>{l.active&&this.view!=null&&(this.view.activeTool=null)},{initial:!0,once:!0}))});return t.task=s,t.abort=()=>s.abort(),this._startUserOperation=t,s.promise}onConnectToAnalysisView(t){}onDisconnectFromAnalysisView(){}_scheduleViewReconnect(){this._reconnectViewTask=r(this._reconnectViewTask);const t=y(async s=>{try{await this._reconnectView(s)}catch(a){if(v(s),!_(a))return void h.getLogger(this).warn("Failed to use analysis in view model",a);throw a}finally{t===this._reconnectViewTask&&(this._reconnectViewTask=null)}});this._reconnectViewTask=t}async _reconnectView(t){const{view:s}=this,a=s!=null&&s.ready&&this.supported,l=this.analysis;if(this._startUserOperation=p(this._startUserOperation),this._disconnectFromView(s),a&&s!=null&&l!=null){if(this.isAnalysisOwner){if(l.parent!=null)return void h.getLogger(this).errorOnce("expected owned analysis to have null parent when connecting to view");this._parentChangeFromReconnect=!0,s.analyses.add(l)}this.analysisView=await s.whenAnalysisView(l),V(t)?this._startUserOperation=p(this._startUserOperation):(this.analysisView.visible=this.visible,this._forceInteractiveHandle=this.analysisView.forceInteractiveForViewModel(),this.addHandles(this._forceInteractiveHandle),this.onConnectToAnalysisView(this.analysisView))}}_disconnectFromView(t){t!=null&&this.isAnalysisOwner&&t.analyses.includes(this.analysis)&&(this._parentChangeFromReconnect=!0,this.analysis.clear(),t.analyses.remove(this.analysis)),this.onDisconnectFromAnalysisView(),this._forceInteractiveHandle=w(this._forceInteractiveHandle),this.analysisView=null}_setExternalAnalysis(t){this.analysisView==null||this.isAnalysisOwner||(this.analysisView.visible=void 0,this._forceInteractiveHandle=w(this._forceInteractiveHandle)),this.analysisView=null,this._set("isAnalysisOwner",!1),this._set("analysis",t),this._parentChangeFromReconnect=!1}_resetInteractiveCreationState(){this.analysis.clear(),this.tool!=null&&this.tool.resetCreated()}get testInfo(){}};function p(t){return t!=null&&t.state>=o.RUNNING?(t.abort(),null):t}e([n()],i.prototype,"supported",null),e([n()],i.prototype,"view",void 0),e([n({type:Boolean,value:!0})],i.prototype,"visible",null),e([n()],i.prototype,"active",null),e([n()],i.prototype,"disabled",null),e([n({nonNullable:!0})],i.prototype,"analysis",null),e([n()],i.prototype,"analysisView",void 0),e([n()],i.prototype,"ready",null),e([n()],i.prototype,"connectingToView",null),e([n({readOnly:!0})],i.prototype,"isAnalysisOwner",null),e([n()],i.prototype,"_reconnectViewTask",void 0),e([n()],i.prototype,"_forceInteractiveHandle",void 0),e([n()],i.prototype,"tool",null),i=e([g("esri.widgets.support.AnalysisViewModel")],i);export{i as _};