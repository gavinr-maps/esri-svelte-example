import{d as a}from"./index-DDhS9rWV.js";import"./index-73bQemcW.js";import"./jsxFactory-CLjKarlq.js";import"./Accessor-BHnuXKD2.js";import"./intl-Do3GEEJ7.js";import"./Promise-CmQqe-ke.js";import"./cast-BA_-jlhc.js";import"./index-tefRSezt.js";import"./JSONSupport-CGdeqxpk.js";import"./Evented-DCWccWGU.js";import"./reactiveUtils-BR0C1Kq4.js";import"./SimpleObservable-7oieNGD8.js";import"./uuid-Cl5lrJ4c.js";import"./dom--xxYYVQF.js";import"./guid-ejniuQmw.js";import"./observers-BdozwIHb.js";import"./index-Ch_sYKt7.js";import"./index-svtat3zr.js";import"./customElement-C8qyVijX.js";import"./live-BIBBLA6F.js";import"./directive-helpers-C0aXnQdc.js";import"./ref-Ccn4I0kT.js";import"./form-B15gmg4q.js";import"./interactive-B8siLByk.js";import"./label-BLne9qNB.js";import"./loadable-DOQnSSjG.js";import"./component-CFGnHAqh.js";import"./Validation-O1TFEQW-.js";import"./input-DI9tZAPS.js";import"./useT9n-CJAswmP1.js";import"./index-CjrYEQXz.js";import"./index-DVEy4f7w.js";import"./keyed-CdPY5MOf.js";import"./index-DIp-v4qk.js";import"./floating-ui-BkLjHVN3.js";import"./debounce-DbkufipY.js";import"./openCloseComponent-dw_x67D_.js";import"./static-g4FJ4v8I.js";import"./FloatingArrow-D9X-HbKW.js";import"./useFocusTrap-ENcZoC4L.js";import"./focusTrapComponent-Br_3Mz8_.js";import"./key-CZcQa38B.js";import"./locale-CXx8I9ox.js";import"./math-BpAtBkbz.js";var i="січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),p="січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"),e=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function M(m,r){var t=m.split("_");return r%10===1&&r%100!==11?t[0]:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?t[1]:t[2]}function _(m,r,t){var s={ss:r?"секунда_секунди_секунд":"секунду_секунди_секунд",mm:r?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:r?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"};return t==="m"?r?"хвилина":"хвилину":t==="h"?r?"година":"годину":m+" "+M(s[t],+m)}var o=function(r,t){return e.test(t)?i[r.month()]:p[r.month()]};o.s=p;o.f=i;var l={name:"uk",weekdays:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),weekdaysShort:"ндл_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),months:o,monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekStart:1,relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",m:_,mm:_,h:_,hh:_,d:"день",dd:_,M:"місяць",MM:_,y:"рік",yy:_},ordinal:function(r){return r},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"}};a.locale(l,null,!0);export{l as default};
