import{d as n}from"./calcite-input-time-picker-DprGU9yG.js";import"./index-CeCSsEgo.js";import"./jsxFactory-CbAu6VfF.js";import"./Evented-CXIxDjmW.js";import"./Accessor-D6mNnsWy.js";import"./subclass-BR3PhgZG.js";import"./intl-Dpfm8vPB.js";import"./Promise-CZrWwByK.js";import"./jsonMap-DCC6W5ex.js";import"./assets-C2mb-ea2.js";import"./reactiveUtils-BFQ0BtrB.js";import"./shared-B3wH2qpO.js";import"./uuid-fwrPAdZb.js";import"./form-DcBTx4ZC.js";import"./dom-Cv0oa6So.js";import"./interactive-Dtpmn6Ls.js";import"./key-D5DPfjW0.js";import"./label-rdYpV4K5.js";import"./component-ByvC-PUv.js";import"./loadable-CTFTnu2T.js";import"./locale-BUTTOPma.js";import"./observers-EizV_Lvc.js";import"./focusTrapComponent-C9GPb5g8.js";import"./t9n-DfK3dFGw.js";import"./math-DqfKmoY3.js";import"./icon-DIKjN-ev.js";import"./Validation-BBJwLSGg.js";import"./input-Dt5r39B0.js";import"./action-DJPgY7YC.js";import"./loader-wfvKSvDR.js";import"./input-message-CKyGNFPw.js";import"./input-text-DDEoYBD7.js";import"./progress-B-8bmD6j.js";import"./popover-Cj0_nbSv.js";import"./floating-ui-BiOoil4s.js";import"./debounce-C5YDvsuO.js";import"./openCloseComponent-v_dlVp47.js";import"./Heading-Dn_ijr3J.js";import"./FloatingArrow-HmzV7w9c.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.2
 */function m(t){return t%10<5&&t%10>1&&~~(t/10)%10!==1}function r(t,i,e){var o=t+" ";switch(e){case"m":return i?"minuta":"minutę";case"mm":return o+(m(t)?"minuty":"minut");case"h":return i?"godzina":"godzinę";case"hh":return o+(m(t)?"godziny":"godzin");case"MM":return o+(m(t)?"miesiące":"miesięcy");case"yy":return o+(m(t)?"lata":"lat")}}var p="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),_="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),s=/D MMMM/,a=function(i,e){return s.test(e)?p[i.month()]:_[i.month()]};a.s=_;a.f=p;var l={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:a,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(i){return i+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:r,mm:r,h:r,hh:r,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:r,y:"rok",yy:r},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};n.locale(l,null,!0);export{l as default};
