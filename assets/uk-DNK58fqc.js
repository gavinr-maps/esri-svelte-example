import{d as a}from"./calcite-input-time-picker-C41HwG-M.js";import"./index-Bh2oEzTI.js";import"./jsxFactory-CJa39Fro.js";import"./tslib.es6-B3Jf3DVX.js";import"./intl-CChhNOV8.js";import"./date-DlqISzcw.js";import"./jsonMap-0cxwUWs2.js";import"./subclass-BZA_h8Db.js";import"./locale-C9TlLpzi.js";import"./messages-OmQvZhAg.js";import"./Accessor-BLX9ikPh.js";import"./assets-C43MgM-v.js";import"./Evented-BHRw9x22.js";import"./Promise-B2Hu02L7.js";import"./reactiveUtils-C5zUhJQJ.js";import"./asyncUtils-CWX51uTe.js";import"./Collection-CEdjem1-.js";import"./shared-B3wH2qpO.js";import"./SimpleObservable-KocWTzVy.js";import"./uuid-fwrPAdZb.js";import"./cast-Bjksrh93.js";import"./form-BZPQ5PUM.js";import"./dom-D_AJDzAj.js";import"./interactive-y84HQRWL.js";import"./key-D63ExP77.js";import"./label-DEe8AW1C.js";import"./component-6CIDVndn.js";import"./loadable-DM18hPdE.js";import"./locale-A4FuYD8q.js";import"./observers-D2xgmA06.js";import"./focusTrapComponent-BSUg_DLj.js";import"./t9n-D0ry3MEw.js";import"./math-CPc4dlb6.js";import"./icon-BQO9J86c.js";import"./Validation-Bz9yoU6e.js";import"./input-j1u1wOBY.js";import"./action-D0Er9Ef6.js";import"./loader-C-zIPscB.js";import"./input-message-CWvsvdFk.js";import"./input-text-uJGGrtzk.js";import"./progress-BXyickl_.js";import"./popover-Q5ruM4hh.js";import"./floating-ui-Bma_zPVt.js";import"./debounce-BOqmhDXu.js";import"./openCloseComponent-CmOrfBN-.js";import"./Heading-D7P0OjYI.js";import"./FloatingArrow-BBdsG5MP.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */var i="січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),p="січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"),e=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function M(m,r){var t=m.split("_");return r%10===1&&r%100!==11?t[0]:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?t[1]:t[2]}function _(m,r,t){var s={ss:r?"секунда_секунди_секунд":"секунду_секунди_секунд",mm:r?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:r?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"};return t==="m"?r?"хвилина":"хвилину":t==="h"?r?"година":"годину":m+" "+M(s[t],+m)}var o=function(r,t){return e.test(t)?i[r.month()]:p[r.month()]};o.s=p;o.f=i;var l={name:"uk",weekdays:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),weekdaysShort:"ндл_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),months:o,monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekStart:1,relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",m:_,mm:_,h:_,hh:_,d:"день",dd:_,M:"місяць",MM:_,y:"рік",yy:_},ordinal:function(r){return r},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"}};a.locale(l,null,!0);export{l as default};