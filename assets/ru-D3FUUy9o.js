import{d as M}from"./calcite-input-time-picker-C41HwG-M.js";import"./index-Bh2oEzTI.js";import"./jsxFactory-CJa39Fro.js";import"./tslib.es6-B3Jf3DVX.js";import"./intl-CChhNOV8.js";import"./date-DlqISzcw.js";import"./jsonMap-0cxwUWs2.js";import"./subclass-BZA_h8Db.js";import"./locale-C9TlLpzi.js";import"./messages-OmQvZhAg.js";import"./Accessor-BLX9ikPh.js";import"./assets-C43MgM-v.js";import"./Evented-BHRw9x22.js";import"./Promise-B2Hu02L7.js";import"./reactiveUtils-C5zUhJQJ.js";import"./asyncUtils-CWX51uTe.js";import"./Collection-CEdjem1-.js";import"./shared-B3wH2qpO.js";import"./SimpleObservable-KocWTzVy.js";import"./uuid-fwrPAdZb.js";import"./cast-Bjksrh93.js";import"./form-BZPQ5PUM.js";import"./dom-D_AJDzAj.js";import"./interactive-y84HQRWL.js";import"./key-D63ExP77.js";import"./label-DEe8AW1C.js";import"./component-6CIDVndn.js";import"./loadable-DM18hPdE.js";import"./locale-A4FuYD8q.js";import"./observers-D2xgmA06.js";import"./focusTrapComponent-BSUg_DLj.js";import"./t9n-D0ry3MEw.js";import"./math-CPc4dlb6.js";import"./icon-BQO9J86c.js";import"./Validation-Bz9yoU6e.js";import"./input-j1u1wOBY.js";import"./action-D0Er9Ef6.js";import"./loader-C-zIPscB.js";import"./input-message-CWvsvdFk.js";import"./input-text-uJGGrtzk.js";import"./progress-BXyickl_.js";import"./popover-Q5ruM4hh.js";import"./floating-ui-Bma_zPVt.js";import"./debounce-BOqmhDXu.js";import"./openCloseComponent-CmOrfBN-.js";import"./Heading-D7P0OjYI.js";import"./FloatingArrow-BBdsG5MP.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */var p="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),e="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),n="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),a="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),s=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function h(o,t){var r=o.split("_");return t%10===1&&t%100!==11?r[0]:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?r[1]:r[2]}function _(o,t,r){var l={mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};return r==="m"?t?"минута":"минуту":o+" "+h(l[r],+o)}var m=function(t,r){return s.test(r)?p[t.month()]:e[t.month()]};m.s=e;m.f=p;var i=function(t,r){return s.test(r)?n[t.month()]:a[t.month()]};i.s=a;i.f=n;var d={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:m,monthsShort:i,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:_,mm:_,h:"час",hh:_,d:"день",dd:_,M:"месяц",MM:_,y:"год",yy:_},ordinal:function(t){return t},meridiem:function(t){return t<4?"ночи":t<12?"утра":t<17?"дня":"вечера"}};M.locale(d,null,!0);export{d as default};
