import{d as n}from"./index-Dc6NQLgc.js";import"./index-DwIhxbHs.js";import"./jsxFactory-Cnml7uXM.js";import"./Accessor-BmwT4B0c.js";import"./intl-Duiy0OzY.js";import"./Promise-DfET-uns.js";import"./cast-CsZslgGN.js";import"./index-4eY77cms.js";import"./JSONSupport-DcrLLGjL.js";import"./Evented-Dw4_VOGn.js";import"./reactiveUtils-XM7cS2OP.js";import"./SimpleObservable-CvOkykwM.js";import"./uuid-Cl5lrJ4c.js";import"./dom-DEluURzl.js";import"./guid-ejniuQmw.js";import"./observers-Co4E8E8j.js";import"./index-fFnlo_g2.js";import"./index-DWeq-ojO.js";import"./customElement-BxsvsANk.js";import"./live-D7NQ-TrC.js";import"./directive-helpers-DaBykg1t.js";import"./ref-D9wHsL_T.js";import"./form-BzoUrXC7.js";import"./interactive-DTzfFku4.js";import"./label-CHHpnzD0.js";import"./loadable-XBvaWFYY.js";import"./component-CBVlbUuE.js";import"./Validation-BYp9DS84.js";import"./input-DI9tZAPS.js";import"./useT9n-C1Hrfc-A.js";import"./index-CMxz6F2k.js";import"./index-BPm91e5Z.js";import"./keyed-CU1C-h1n.js";import"./index-DMeQur4V.js";import"./floating-ui-IixYHfbQ.js";import"./debounce-DbkufipY.js";import"./openCloseComponent-nqWrSaIH.js";import"./static-DLD4WjLv.js";import"./FloatingArrow-BZRr6Zld.js";import"./useFocusTrap-COeL24Kx.js";import"./focusTrapComponent-D1wJZ4RD.js";import"./key-CZcQa38B.js";import"./locale-CXx8I9ox.js";import"./math-BpAtBkbz.js";function m(t){return t%10<5&&t%10>1&&~~(t/10)%10!==1}function r(t,i,e){var o=t+" ";switch(e){case"m":return i?"minuta":"minutę";case"mm":return o+(m(t)?"minuty":"minut");case"h":return i?"godzina":"godzinę";case"hh":return o+(m(t)?"godziny":"godzin");case"MM":return o+(m(t)?"miesiące":"miesięcy");case"yy":return o+(m(t)?"lata":"lat")}}var p="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),_="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),s=/D MMMM/,a=function(i,e){return s.test(e)?p[i.month()]:_[i.month()]};a.s=_;a.f=p;var l={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:a,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(i){return i+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:r,mm:r,h:r,hh:r,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:r,y:"rok",yy:r},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};n.locale(l,null,!0);export{l as default};
