import{c as e,a as _,b as t}from"./moment.c9075dd2.js";var s,d={};s=t,function(e){function _(e,_,t){var s,d;return"m"===t?_?"минута":"минуту":e+" "+(s=+e,d={ss:_?"секунда_секунды_секунд":"секунду_секунды_секунд",mm:_?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",ww:"неделя_недели_недель",MM:"месяц_месяца_месяцев",yy:"год_года_лет"}[t].split("_"),s%10==1&&s%100!=11?d[0]:s%10>=2&&s%10<=4&&(s%100<10||s%100>=20)?d[1]:d[2])}var t=[/^янв/i,/^фев/i,/^мар/i,/^апр/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^авг/i,/^сен/i,/^окт/i,/^ноя/i,/^дек/i];e.defineLocale("ru",{months:{format:"января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),standalone:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")},monthsShort:{format:"янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),standalone:"янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")},weekdays:{standalone:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),format:"воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),isFormat:/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/},weekdaysShort:"вс_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),monthsParse:t,longMonthsParse:t,shortMonthsParse:t,monthsRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsShortRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsStrictRegex:/^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,monthsShortStrictRegex:/^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},calendar:{sameDay:"[Сегодня, в] LT",nextDay:"[Завтра, в] LT",lastDay:"[Вчера, в] LT",nextWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd, [в] LT":"[В] dddd, [в] LT";switch(this.day()){case 0:return"[В следующее] dddd, [в] LT";case 1:case 2:case 4:return"[В следующий] dddd, [в] LT";case 3:case 5:case 6:return"[В следующую] dddd, [в] LT"}},lastWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd, [в] LT":"[В] dddd, [в] LT";switch(this.day()){case 0:return"[В прошлое] dddd, [в] LT";case 1:case 2:case 4:return"[В прошлый] dddd, [в] LT";case 3:case 5:case 6:return"[В прошлую] dddd, [в] LT"}},sameElse:"L"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",ss:_,m:_,mm:_,h:"час",hh:_,d:"день",dd:_,w:"неделя",ww:_,M:"месяц",MM:_,y:"год",yy:_},meridiemParse:/ночи|утра|дня|вечера/i,isPM:function(e){return/^(дня|вечера)$/.test(e)},meridiem:function(e,_,t){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"},dayOfMonthOrdinalParse:/\d{1,2}-(й|го|я)/,ordinal:function(e,_){switch(_){case"M":case"d":case"DDD":return e+"-й";case"D":return e+"-го";case"w":case"W":return e+"-я";default:return e}},week:{dow:1,doy:4}})}("function"==typeof e?_.exports:s.moment);var a=d,r=Object.freeze(Object.assign(Object.create(null),d,{[Symbol.toStringTag]:"Module",default:a}));export{r};
