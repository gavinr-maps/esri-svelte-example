import{d as _}from"./index-Dc6NQLgc.js";import"./index-DwIhxbHs.js";import"./jsxFactory-Cnml7uXM.js";import"./Accessor-BmwT4B0c.js";import"./intl-Duiy0OzY.js";import"./Promise-DfET-uns.js";import"./cast-CsZslgGN.js";import"./index-4eY77cms.js";import"./JSONSupport-DcrLLGjL.js";import"./Evented-Dw4_VOGn.js";import"./reactiveUtils-XM7cS2OP.js";import"./SimpleObservable-CvOkykwM.js";import"./uuid-Cl5lrJ4c.js";import"./dom-DEluURzl.js";import"./guid-ejniuQmw.js";import"./observers-Co4E8E8j.js";import"./index-fFnlo_g2.js";import"./index-DWeq-ojO.js";import"./customElement-BxsvsANk.js";import"./live-D7NQ-TrC.js";import"./directive-helpers-DaBykg1t.js";import"./ref-D9wHsL_T.js";import"./form-BzoUrXC7.js";import"./interactive-DTzfFku4.js";import"./label-CHHpnzD0.js";import"./loadable-XBvaWFYY.js";import"./component-CBVlbUuE.js";import"./Validation-BYp9DS84.js";import"./input-DI9tZAPS.js";import"./useT9n-C1Hrfc-A.js";import"./index-CMxz6F2k.js";import"./index-BPm91e5Z.js";import"./keyed-CU1C-h1n.js";import"./index-DMeQur4V.js";import"./floating-ui-IixYHfbQ.js";import"./debounce-DbkufipY.js";import"./openCloseComponent-nqWrSaIH.js";import"./static-DLD4WjLv.js";import"./FloatingArrow-BZRr6Zld.js";import"./useFocusTrap-COeL24Kx.js";import"./focusTrapComponent-D1wJZ4RD.js";import"./key-CZcQa38B.js";import"./locale-CXx8I9ox.js";import"./math-BpAtBkbz.js";function o(m){return m%100==2}function t(m){return m%100==3||m%100==4}function n(m,e,p,r){var a=m+" ";switch(p){case"s":return e||r?"nekaj sekund":"nekaj sekundami";case"m":return e?"ena minuta":"eno minuto";case"mm":return o(m)?a+(e||r?"minuti":"minutama"):t(m)?a+(e||r?"minute":"minutami"):a+(e||r?"minut":"minutami");case"h":return e?"ena ura":"eno uro";case"hh":return o(m)?a+(e||r?"uri":"urama"):t(m)?a+(e||r?"ure":"urami"):a+(e||r?"ur":"urami");case"d":return e||r?"en dan":"enim dnem";case"dd":return o(m)?a+(e||r?"dneva":"dnevoma"):a+(e||r?"dni":"dnevi");case"M":return e||r?"en mesec":"enim mesecem";case"MM":return o(m)?a+(e||r?"meseca":"mesecema"):t(m)?a+(e||r?"mesece":"meseci"):a+(e||r?"mesecev":"meseci");case"y":return e||r?"eno leto":"enim letom";case"yy":return o(m)?a+(e||r?"leti":"letoma"):t(m)?a+(e||r?"leta":"leti"):a+(e||r?"let":"leti")}}var i={name:"sl",weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),weekStart:1,weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"čez %s",past:"pred %s",s:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n}};_.locale(i,null,!0);export{i as default};
