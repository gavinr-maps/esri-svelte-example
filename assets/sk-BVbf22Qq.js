import{d as a}from"./calcite-input-time-picker-C41HwG-M.js";import"./index-Bh2oEzTI.js";import"./jsxFactory-CJa39Fro.js";import"./tslib.es6-B3Jf3DVX.js";import"./intl-CChhNOV8.js";import"./date-DlqISzcw.js";import"./jsonMap-0cxwUWs2.js";import"./subclass-BZA_h8Db.js";import"./locale-C9TlLpzi.js";import"./messages-OmQvZhAg.js";import"./Accessor-BLX9ikPh.js";import"./assets-C43MgM-v.js";import"./Evented-BHRw9x22.js";import"./Promise-B2Hu02L7.js";import"./reactiveUtils-C5zUhJQJ.js";import"./asyncUtils-CWX51uTe.js";import"./Collection-CEdjem1-.js";import"./shared-B3wH2qpO.js";import"./SimpleObservable-KocWTzVy.js";import"./uuid-fwrPAdZb.js";import"./cast-Bjksrh93.js";import"./form-BZPQ5PUM.js";import"./dom-D_AJDzAj.js";import"./interactive-y84HQRWL.js";import"./key-D63ExP77.js";import"./label-DEe8AW1C.js";import"./component-6CIDVndn.js";import"./loadable-DM18hPdE.js";import"./locale-A4FuYD8q.js";import"./observers-D2xgmA06.js";import"./focusTrapComponent-BSUg_DLj.js";import"./t9n-D0ry3MEw.js";import"./math-CPc4dlb6.js";import"./icon-BQO9J86c.js";import"./Validation-Bz9yoU6e.js";import"./input-j1u1wOBY.js";import"./action-D0Er9Ef6.js";import"./loader-C-zIPscB.js";import"./input-message-CWvsvdFk.js";import"./input-text-uJGGrtzk.js";import"./progress-BXyickl_.js";import"./popover-Q5ruM4hh.js";import"./floating-ui-Bma_zPVt.js";import"./debounce-BOqmhDXu.js";import"./openCloseComponent-CmOrfBN-.js";import"./Heading-D7P0OjYI.js";import"./FloatingArrow-BBdsG5MP.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */function e(m){return m>1&&m<5&&~~(m/10)!==1}function t(m,r,i,o){var p=m+" ";switch(i){case"s":return r||o?"pár sekúnd":"pár sekundami";case"m":return r?"minúta":o?"minútu":"minútou";case"mm":return r||o?p+(e(m)?"minúty":"minút"):p+"minútami";case"h":return r?"hodina":o?"hodinu":"hodinou";case"hh":return r||o?p+(e(m)?"hodiny":"hodín"):p+"hodinami";case"d":return r||o?"deň":"dňom";case"dd":return r||o?p+(e(m)?"dni":"dní"):p+"dňami";case"M":return r||o?"mesiac":"mesiacom";case"MM":return r||o?p+(e(m)?"mesiace":"mesiacov"):p+"mesiacmi";case"y":return r||o?"rok":"rokom";case"yy":return r||o?p+(e(m)?"roky":"rokov"):p+"rokmi"}}var n={name:"sk",weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),months:"január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),monthsShort:"jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),weekStart:1,yearStart:4,ordinal:function(r){return r+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"pred %s",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t}};a.locale(n,null,!0);export{n as default};
