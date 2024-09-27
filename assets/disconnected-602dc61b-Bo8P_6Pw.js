import{T as v}from"./index-d2df902e-k_MvfteY.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
 * v4.30.7
 */function h(i){var d,w,a;i.el.childElem?i.el.isConnected||((d=i.view)!=null&&d.ui?i.view.ui.remove(i.el.childElem):(w=i.widget)!=null&&w.view&&i.widget.view.ui.remove(i.el.childElem),i._watchHandles&&i._watchHandles.forEach(o=>{o.remove()}),i._watchHandles=[],(a=i.widget)==null||a.destroy()):v(()=>{var o,s,c;i.el.isConnected||((o=i.view)!=null&&o.ui?i.view.ui.remove(i.el):(s=i.widget)!=null&&s.view&&i.widget.view.ui.remove(i.el),i._watchHandles&&i._watchHandles.forEach(r=>{r.remove()}),i._watchHandles=[],(c=i.widget)==null||c.destroy())},1e3)}export{h as o};
