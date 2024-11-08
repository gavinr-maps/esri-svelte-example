import{r as n}from"./tslib.es6-B3Jf3DVX.js";import{d as c}from"./asyncUtils-CWX51uTe.js";import{m as a,a as _,n as w}from"./subclass-BZA_h8Db.js";import{e as r,s as u,c as p,i as V}from"./Accessor-BLX9ikPh.js";import{watch as h,sync as d,syncAndInitial as v,whenOnce as m}from"./reactiveUtils-C5zUhJQJ.js";import{p as O}from"./MeasurementWidgetContent-DYwVXn7I.js";var l;(function(s){s[s.PENDING=0]="PENDING",s[s.WAIT_FOR_VIEW_READY=1]="WAIT_FOR_VIEW_READY",s[s.RUNNING=2]="RUNNING"})(l||(l={}));let e=class extends O{constructor(s={}){super(s),this.analysisView=null,this._reconnectViewTask=null,this._parentChangeFromReconnect=!1,this._startUserOperation=null;const i=s==null?void 0:s.analysis;i!=null?this.analysis=i:(this._set("analysis",this.constructAnalysis()),this._set("isAnalysisOwner",!0))}normalizeCtorArgs(s){const{analysis:i,...t}=s;return t}initialize(){this.addHandles([h(()=>{var s;return(s=this.analysis)==null?void 0:s.parent},s=>{this._parentChangeFromReconnect||s===this.view||this._set("isAnalysisOwner",!1);const i=!this._parentChangeFromReconnect;this._parentChangeFromReconnect=!1,i&&this._scheduleViewReconnect()},d),h(()=>({view:this.view,ready:this.view!=null&&this.view.ready,supported:this.supported}),({view:s},i)=>{const t=i==null?void 0:i.view;s!==t&&(this._startUserOperation=r(this._startUserOperation),this._disconnectFromView(t)),this._scheduleViewReconnect()},v),h(()=>this.analysis.isEditable,(s,i)=>{this.analysisView!=null&&(s&&!i&&this.tool==null?this.createTool():s||!i||this.tool==null||this.tool.active||this.removeTool())})])}destroy(){this._reconnectViewTask=r(this._reconnectViewTask),this._startUserOperation=r(this._startUserOperation),this.analysisView!=null&&(this.analysisView.visible=void 0),this._disconnectFromView(this.view),this.analysis!=null&&this.isAnalysisOwner&&(this.analysis.destroy(),this._set("analysis",null))}set analysis(s){s!==this._get("analysis")&&(this._startUserOperation=r(this._startUserOperation),this._disconnectFromView(this.view),this._setExternalAnalysis(s),this._scheduleViewReconnect())}get ready(){return this.analysisView!=null&&!this.connectingToView}get connectingToView(){return this._reconnectViewTask!=null}get isAnalysisOwner(){return this._get("isAnalysisOwner")}set visible(s){this._set("visible",s),this.analysisView!=null&&(this.analysisView.visible=s)}async start(){if(!this.visible)return void w.getLogger(this).warn("Cannot start analysis when not visible");this.clear();const s={task:null,abort:null,state:l.PENDING},i=c(async t=>{s.state=l.WAIT_FOR_VIEW_READY,await m(()=>this.ready,t),s.state=l.RUNNING,this.createTool({interactive:!0})});return s.task=i,s.abort=()=>i.abort(),this._startUserOperation=s,i.promise}clear(){this._startUserOperation=r(this._startUserOperation),this.removeTool(),this.analysis.clear()}onConnectToAnalysisView(s){}onDisconnectFromAnalysisView(){}_scheduleViewReconnect(){this._reconnectViewTask=r(this._reconnectViewTask);const s=c(async i=>{try{await this._reconnectView(i)}catch(t){if(u(i),!p(t))return void w.getLogger(this).warn("Failed to use analysis in view model",t);throw t}finally{s===this._reconnectViewTask&&(this._reconnectViewTask=null)}});this._reconnectViewTask=s}async _reconnectView(s){const{view:i}=this,t=i!=null&&i.ready&&this.supported,o=this.analysis;if(this._startUserOperation=y(this._startUserOperation),this._disconnectFromView(i),t&&i!=null&&o!=null){if(this.isAnalysisOwner){if(o.parent!=null)return void this.logError("expected owned analysis to have null parent when connecting to view");this._parentChangeFromReconnect=!0,i.analyses.add(o)}this.analysisView=await i.whenAnalysisView(o),V(s)?this._startUserOperation=y(this._startUserOperation):(this.analysisView.visible=this.visible,this.onConnectToAnalysisView(this.analysisView),this.createTool())}}_disconnectFromView(s){this.removeTool(),s!=null&&this.isAnalysisOwner&&(this._parentChangeFromReconnect=!0,s.analyses.remove(this.analysis),this.analysis.clear()),this.analysisView=null,this.onDisconnectFromAnalysisView()}_setExternalAnalysis(s){this.analysisView==null||this.isAnalysisOwner||(this.analysisView.visible=!0),this.analysisView=null,this._set("isAnalysisOwner",!1),this._set("analysis",s),this._parentChangeFromReconnect=!1}get testInfo(){}};function y(s){return s!=null&&s.state>=l.RUNNING?(s.abort(),null):s}n([a({nonNullable:!0})],e.prototype,"analysis",null),n([a()],e.prototype,"analysisView",void 0),n([a()],e.prototype,"ready",null),n([a()],e.prototype,"connectingToView",null),n([a({readOnly:!0})],e.prototype,"isAnalysisOwner",null),n([a({type:Boolean,value:!0})],e.prototype,"visible",null),n([a()],e.prototype,"_reconnectViewTask",void 0),e=n([_("esri.widgets.support.InteractiveAnalysisViewModel")],e);export{e as u};