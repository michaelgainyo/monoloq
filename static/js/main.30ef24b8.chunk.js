(this["webpackJsonp@miq/monoloq"]=this["webpackJsonp@miq/monoloq"]||[]).push([[0],{17:function(e,t,n){"use strict";n.d(t,"b",(function(){return U})),n.d(t,"a",(function(){return X})),n.d(t,"c",(function(){return z}));var a=n(7),c=n(0),r=n(19),i=n(6),s=n(93),o=n(94),u=n(95),d=n(96),l=(n(57),n(20)),j=n(2),b=n(18),O=n(12),h=n(87),m=n(8),v=n(16),f=/(\n|\r|\r\n){2,}/g,x=function(e){return e&&(e=e.trim().replace(f,"\n\n")),e},p=function(){return function(e){return new Promise((function(t){var n=localStorage.getItem("entries");return n?n=JSON.parse(n):(n=U.entries,localStorage.setItem("entries",JSON.stringify(n))),e({type:"SET_ENTRIES",payload:n}),t(n)}))}},g=function(e){return function(t,n){return new Promise((function(a){var c=n().entries,r=Object(j.a)(Object(j.a)({},c),{},Object(v.a)({},"".concat(e.slug),e));localStorage.setItem("entries",JSON.stringify(r)),t({type:"SET_ENTRIES",payload:r}),a(Object(j.a)(Object(j.a)({},e),{},{status:1}))}))}},N=function(e,t){return function(n,a){return new Promise((function(c,r){var i=a().entries,s=i[e];if(!s)return r(new Error("Invalid slug ".concat(e,".")));s=Object(j.a)(Object(j.a)({},s),t);var o=Object(j.a)(Object(j.a)({},i),{},Object(v.a)({},"".concat(e),s));localStorage.setItem("entries",JSON.stringify(o)),n({type:"SET_ENTRIES",payload:o}),c(Object(j.a)(Object(j.a)({},s),{},{status:1}))}))}},w=function(e){return function(t,n){return new Promise((function(a,c){var r=n().entries;delete r[e],localStorage.setItem("entries",JSON.stringify(r)),t({type:"SET_ENTRIES",payload:r}),a({slug:e,status:1})}))}},y=n(9),D=n(91),S=["What are your thoughts ...","What are you up to ...","How are you feeling right now ?!","How happy are you ?","Are you stressed out?","Are you worried about the future?"],k=n(1),T=function(e){var t=e.placeholder,n=void 0===t?Object(m.sample)(S):t,a=e.maxLength,c=void 0===a?280:a;return Object(k.jsx)(y.d,Object(j.a)(Object(j.a)({},e),{},{placeholder:n,maxLength:c,required:!0}))},C=function(e){var t=e.className;return Object(k.jsx)("div",{className:t,children:Object(k.jsx)("button",{type:"submit",className:"btn",title:"Submit",children:Object(k.jsx)(D.a,{className:"btn-icon"})})})};function E(e){var t=Object(b.b)(),n=Object(c.useState)(""),a=Object(O.a)(n,2),r=a[0],i=a[1];return Object(k.jsx)("div",{id:"EntryAddForm",children:Object(k.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={slug:Object(h.a)(),text:x(r),dt:new Date};t(g(n)).then((function(e){e.status&&i("")}))},className:"entries-add-form",children:[Object(k.jsx)("div",{className:"entries-add-form-input",children:Object(k.jsx)(T,{value:r,onChange:function(e){return i(e.target.value)}})}),Object(k.jsx)(C,{className:"entries-add-form-submit"})]})})}var I=function(e){var t=e.data,n=void 0===t?{}:t,r=Object(a.a)(e,["data"]),i=Object(b.b)(),s=Object(c.useState)(n.text||""),o=Object(O.a)(s,2),u=o[0],d=o[1];if(!n.slug)return null;return Object(k.jsx)("div",{id:"EntryUpdateForm",children:Object(k.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),u!==n.text){var t=Object(j.a)(Object(j.a)({},n),{},{text:x(u)});i(N(n.slug,t)).then((function(e){if(e.status)return r.onSuccess?r.onSuccess(t):void 0}))}},className:"entries-upd-form",children:[Object(k.jsx)("div",{className:"entries-upd-form-input",children:Object(k.jsx)(T,{value:u,onChange:function(e){return d(e.target.value)}})}),Object(k.jsx)(C,{className:"entries-upd-form-submit"})]})})},M=n(92);function q(e){var t=e.data,n=void 0===t?{}:t,r=e.dispatch,i=(Object(a.a)(e,["data","dispatch"]),Object(c.useState)(!1)),s=Object(O.a)(i,2),o=s[0],u=s[1];return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("div",{className:"entry",onClick:function(){return u(!0)},children:[Object(k.jsx)("div",{className:"entry-text",children:n.text}),Object(k.jsx)("div",{className:"entry-meta",children:Object(k.jsx)("span",{className:"entry-meta-time",children:"".concat(Object(y.g)(n.date))})})]}),o&&Object(k.jsx)(P,{onClose:function(){return u(!1)},onDelete:function(e){e.preventDefault(),r(w(n.slug)).then((function(e){e.status}))},children:Object(k.jsx)(I,{data:n,onSuccess:function(){return u(!1)}})})]})}var P=function(e){var t=e.children,n=e.onClose,a=e.onDelete,c=Object(k.jsx)("div",{className:"",children:Object(k.jsx)("div",{className:"CloseButton",onClick:n,children:Object(k.jsx)(y.b,{Icon:M.a,maxSize:24})})}),r=Object(k.jsx)("div",{className:"bg-white",children:Object(k.jsx)("div",{className:"CloseButton",onClick:a,children:"Delete"})});return Object(k.jsx)(y.c,{children:Object(k.jsx)(y.c.Modal,{header:c,footer:r,children:t})})},F=(n(85),new Map);function _(e){var t=Object(b.b)(),n=Object(b.c)((function(e){return e.entries}));return Object(c.useEffect)((function(){t(p())}),[t]),F.clear(),Object.values(n).forEach((function(e){var t=new Date(e.dt);e=Object(j.a)(Object(j.a)({},e),{},{date:t});var n=Object(y.f)(t);F.has(n)||F.set(n,{date:t,entries:[]});var a=F.get(n);a.entries.push(e),F.set(n,a)})),Object(k.jsxs)("section",{id:"EntriesView",className:"entries",children:[Object(k.jsx)("div",{className:"entries-days",children:Object(l.a)(F.values()).map((function(e){return Object(c.createElement)(W,{data:e,dispatch:t,key:"".concat(e.date)})}))}),Object(k.jsx)("footer",{className:"viewport-footer",children:Object(k.jsx)(E,{})})]})}var W=function(e){var t=e.data,n=void 0===t?{entries:[]}:t,a=e.dispatch;return Object(k.jsxs)("div",{className:"entries-day",children:[Object(k.jsx)("div",{className:"weekday",children:Object(y.e)(n.date)}),Object(k.jsx)("div",{className:"items",children:n.entries.map((function(e){return Object(c.createElement)(q,{dispatch:a,data:e,key:e.slug})}))})]})},R=n(47),A=n(44),U={entries:{},todos:{},settings:{created:null,theme:"light"}},J=Object(c.lazy)((function(){return Promise.resolve().then(n.bind(null,47))})),L=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,99))}));function X(e){return Object(k.jsx)("div",{id:"Monoloq",className:"viewport",children:Object(k.jsxs)("div",{className:"mn viewport-content",children:[Object(k.jsxs)("header",{className:"viewport-header",children:[Object(k.jsx)("div",{children:Object(k.jsx)(B,{})}),Object(k.jsxs)("div",{className:"viewport-header-navlinks",children:[Object(k.jsx)(r.b,{exact:!0,to:"/monoloq",className:"btn btn-icon",children:Object(k.jsx)(s.a,{className:"icon"})}),Object(k.jsx)(r.b,{to:"/monoloq/todo/",className:"btn btn-icon",children:Object(k.jsx)(o.a,{className:"icon"})}),Object(k.jsx)(r.b,{to:"/monoloq/settings/",className:"btn btn-icon",children:Object(k.jsx)(u.a,{className:"icon"})})]})]}),Object(k.jsx)("section",{className:"viewport-body",children:Object(k.jsx)("main",{className:"viewport-main",role:"main",children:Object(k.jsx)(c.Suspense,{fallback:Object(k.jsx)("div",{children:"loading ..."}),children:Object(k.jsxs)(i.d,{children:[Object(k.jsx)(i.b,{exact:!0,path:"/monoloq",component:_}),Object(k.jsx)(i.b,{path:"/monoloq/todo",component:L}),Object(k.jsx)(i.b,{path:"/monoloq/settings",component:J}),Object(k.jsx)(i.a,{to:"/monoloq"})]})})})})]})})}var B=function(e){var t=e.sitename,n=void 0===t?"Monoloq":t;Object(a.a)(e,["sitename"]);return Object(k.jsxs)("div",{id:"Logo",className:"btn",children:[Object(k.jsx)(d.a,{className:"btn-icon"}),Object(k.jsx)("span",{className:"btn-label",children:n})]})},z={entries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U.entries,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_ENTRIES":return Object(j.a)({},a);case"CLEAR_ENTRIES":return Object(j.a)({},U.entries);default:return Object(j.a)({},e)}},todos:A.a,settings:R.settingsReducer}},34:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return y}));var a=n(12),c=n(7),r=n(2),i=n(0),s=n(89),o=n(90),u=(n(84),n(4)),d=n(20),l=n(8),j=function(e,t){return!(!Object(l.isDate)(e)||!Object(l.isDate)(t))&&Object(u.c)(e)===Object(u.c)(t)},b=function(e){h(e)||(e=new Date);for(var t=e.getFullYear(),n=e.getMonth(),a=new Date(t,n,1),c=new Date(t,n+1,0),r=[],i=new Date(a),s=0;i.getMonth()===n&&i.getFullYear()===t;s+=7){(i=new Date(a)).setDate(a.getDate()+s);var o=O(i);if(o.firstDate>c)break;r=[].concat(Object(d.a)(r),[o])}return{weeks:r,firstDate:a,lastDate:c}},O=function(e){h(e)||(e=new Date);var t=e.getDate()-e.getDay(),n=new Date(e);n.setDate(t);for(var a=[],c=0;c<7;c++){var r=new Date(n),i=n.getDate()+c;r.setDate(i),a.push(r)}return{dates:[].concat(a),firstDate:n,lastDate:a.slice(-1)[0]}},h=function(e){return e&&"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e)},m=[{short:"Sun",long:"Sunday"},{short:"Mon",long:"Monday"},{short:"Tue",long:"Tuesday"},{short:"Wed",long:"Wednesday"},{short:"Thu",long:"Thursday"},{short:"Fri",long:"Friday"},{short:"Sat",long:"Saturday"}].map((function(e,t){return Object(r.a)(Object(r.a)({},e),{},{index:t})})),v=n(1),f=Object(i.createContext)(),x=function(e){var t=e.view,n=e.dt,a=e.context,c=void 0===a?{}:a,i=j(n,new Date),s=j(n,c.selected),o=e.DateComponent||c.DateComponent;if(o)return Object(v.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{view:t,isToday:i,isCurrent:s}));return Object(v.jsxs)("div",{className:Object(u.e)(["day",i&&"today",s&&"current"]),onClick:function(e){var a=c.onDateClick;a&&a({event:e,date:n,view:t,isToday:i,isCurrent:s})},role:"button",children:["week"===t&&Object(v.jsx)("div",{className:"day-weekday",children:Object(u.b)(n,{weekday:"short"})}),Object(v.jsx)("div",{className:"day-date",children:n.getDate()})]})},p=function(e){var t=e.view||"week",n=Object(i.useContext)(f),a=e.curWeek||n.curWeek;return a.dates?Object(v.jsx)("div",{className:"Week",children:Object(v.jsx)("div",{className:"Dates",children:a.dates.map((function(a){return Object(i.createElement)(x,Object(r.a)(Object(r.a)({},e),{},{dt:a,view:t,context:n,key:a.toString()}))}))})}):null},g=function(e){var t=e.renderToggler,n=e.TogglerComponent,a=Object(c.a)(e,["renderToggler","TogglerComponent"]);return t?t(a):n?Object(v.jsx)(n,Object(r.a)({},a)):null},N=function(e){var t=e.renderFooter,n=e.FooterComponent,a=Object(c.a)(e,["renderFooter","FooterComponent"]);return t?t(a):n?Object(v.jsx)(n,Object(r.a)({},a)):null},w=function(e){return Object(v.jsx)("div",{id:e.id,className:"Weekdays",children:m.map((function(e){return Object(v.jsx)("div",{className:"Weekday",children:e.short},e.index)}))})};function y(e){var t=e.children,n=Object(c.a)(e,["children"]),s=Object(l.isDate)(n.initialDate)?s:new Date,o=Object(i.useState)(s),d=Object(a.a)(o,2),j=d[0],h=d[1],m=n.id,x=n.className,p=Object(c.a)(n,["id","className"]),g=p.onWeekChange,N=p.onMonthChange,w=Object(c.a)(p,["onWeekChange","onMonthChange"]),y=Object(i.useMemo)((function(){return Object(r.a)(Object(r.a)({},w),{},{curDate:j,setCurDate:h,initialDate:s,curWeek:O(j),curMonth:b(j),goToday:function(){h(new Date)},goPrevWeek:function(){if(Object(l.isDate)(j)){var e=new Date(j.setDate(j.getDate()-7));h(e),g&&g({dt:e})}},goNextWeek:function(){if(Object(l.isDate)(j)){var e=new Date(j.setDate(j.getDate()+7));h(e),g&&g({dt:e})}},goPrevMonth:function(){if(Object(l.isDate)(j)){var e=new Date(j.setMonth(j.getMonth()-1));h(e),N&&N({dt:e})}},goNextMonth:function(){if(Object(l.isDate)(j)){var e=new Date(j.setMonth(j.getMonth()+1));h(e),N&&N({dt:e})}}})}),[w,j,h,s]);return Object(v.jsx)(f.Provider,{value:y,children:Object(v.jsx)("div",{id:m,className:Object(u.e)(["miq-calendar",x]),children:t})})}y.Title=function(e){var t=Object(i.useContext)(f),n=t.curDate,a=t.curWeek,c=e.view,s=void 0===c?Object(u.g)("view"):c;if(!Object(l.isDate)(n))return null;var o,d={month:"long",year:"numeric"};switch(s){case"week":var j=a.firstDate,b=a.lastDate;d={day:"numeric",month:"short"},o=Object(v.jsxs)(v.Fragment,{children:[Object(l.isDate)(j)&&Object(v.jsx)("span",{children:Object(u.b)(j,d)}),Object(l.isDate)(b)&&Object(v.jsxs)("span",{children:[" - ",Object(u.b)(b,Object(r.a)(Object(r.a)({},d),{},{year:"numeric"}))]})]});break;default:o=Object(u.b)(n,d)}return Object(v.jsx)("div",{className:"Title",children:o})},y.Prev=function(e){var t=Object(i.useContext)(f),n=t.goPrevWeek,a=t.goPrevMonth,c=e.view,r="week"===(void 0===c?Object(u.g)("view"):c)?n:a;return Object(v.jsx)("button",{className:"btn icon-btn btn-prev",onClick:r,children:Object(v.jsx)(s.a,{className:"icon"})})},y.Next=function(e){var t=Object(i.useContext)(f),n=t.goNextWeek,a=t.goNextMonth,c=e.view,r="week"===(void 0===c?Object(u.g)("view"):c)?n:a;return Object(v.jsx)("button",{className:"btn icon-btn btn-next",onClick:r,children:Object(v.jsx)(o.a,{className:"icon"})})},y.Toolbar=function(e){var t=e.context,n=void 0===t?Object(u.g)("Calendar context"):t;return Object(v.jsx)("div",{className:"Toolbar",children:Object(v.jsxs)("select",{name:"view",value:n.view,onChange:function(e){var t=e.target;n.setView(t.value)},children:[Object(v.jsx)("option",{value:"month",children:"Month"}),Object(v.jsx)("option",{value:"week",children:"Week"})]})})},y.DatePicker=function(e){var t=e.showBody,n=void 0===t||t,c=e.renderToggler||e.TogglerComponent,s=e.renderFooter||e.FooterComponent,o=Object(i.useState)(n),u=Object(a.a)(o,2),d=u[0],l=u[1];return Object(v.jsxs)("div",{className:"miq-datepicker",children:[c&&Object(v.jsx)("div",{className:"miq-datepicker-header",children:Object(v.jsx)(g,Object(r.a)(Object(r.a)({},e),{},{show:d,setShow:l}))}),d&&Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"miq-datepicker-body",children:Object(v.jsxs)("div",{className:"miq-datepicker-content",children:[Object(v.jsxs)("div",{className:"miq-datepicker-toolbar",children:[Object(v.jsx)(y.Prev,{view:"month"}),Object(v.jsx)(y.Title,{view:"month"}),Object(v.jsx)(y.Next,{view:"month"})]}),Object(v.jsx)("div",{className:"miq-datepicker-month",children:Object(v.jsx)(y.Month,{})}),s&&Object(v.jsx)("div",{className:"miq-datepicker-footer",children:Object(v.jsx)(N,Object(r.a)(Object(r.a)({},e),{},{show:d,setShow:l}))})]})})})]})},y.Week=p,y.Weekdays=w,y.Month=function(e){var t="month",n=Object(i.useContext)(f).curMonth,a=void 0===n?{}:n;return a.weeks?Object(v.jsxs)("div",{className:"Month",children:[Object(v.jsx)(w,Object(r.a)(Object(r.a)({},e),{},{view:t,curMonth:a})),Object(v.jsx)("div",{className:"Weeks",children:a.weeks.map((function(n){return Object(i.createElement)(p,Object(r.a)(Object(r.a)({},e),{},{view:t,curWeek:n,key:n.dates[0].toString()}))}))})]}):null}},4:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return h})),n.d(t,"f",(function(){return m})),n.d(t,"e",(function(){return v})),n.d(t,"g",(function(){return f}));var a=n(30),c=n.n(a),r=n(46),i=n(2),s=n(22),o=n.n(s),u=n(8),d=!1,l=d?"http://127.0.0.1:8000":"".concat(window.location.origin);o.a.defaults.xsrfCookieName="csrftoken",o.a.defaults.xsrfHeaderName="X-CSRFTOKEN",o.a.defaults.headers["Content-Type"]="text/html; charset=UTF-8",o.a.defaults.headers.post["Content-Type"]="application/json";var j=o.a.create({baseURL:l,timeout:3e3,withCredentials:!0,headers:{"X-Requested-With":"XMLHttpRequest"},onUploadProgress:function(e){}}),b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{weekday:"short",month:"long",day:"numeric"},n=new Intl.DateTimeFormat("en-US",Object(i.a)({},t));return n.format(new Date(e))},O=function(e){if(!Object(u.isDate)(e))return"";var t=e.getDate(),n=e.getMonth()+1;return t<10&&(t="0"+t),n<10&&(n="0"+n),e.getFullYear()+"-"+n+"-"+t},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{hour:"numeric",minute:"numeric"},n=new Intl.DateTimeFormat("en-US",Object(i.a)({},t));return n.format(new Date(e))},m=function(){return new Promise(function(){var e=Object(r.a)(c.a.mark((function e(t,n){var a,r,i,s,o,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=document.getElementById("sharedData"))||!d){e.next=17;break}return console.log("Getting page shared data in ".concat("production"," mode")),r=new URL(window.location.href),i="".concat(r.pathname).concat(r.search),e.prev=5,e.next=8,j.get(i);case 8:s=e.sent,e.next=14;break;case 11:return e.prev=11,e.t0=e.catch(5),e.abrupt("return",n(e.t0));case 14:if(s&&200===s.status){e.next=16;break}return e.abrupt("return",n("No data"));case 16:s.headers["content-type"].includes("text")&&(o=new DOMParser,u=o.parseFromString(s.data,"text/html"),a=u.getElementById("sharedData"));case 17:if(!a){e.next=19;break}return e.abrupt("return",t(JSON.parse(a.textContent)));case 19:return e.abrupt("return",t({}));case 20:case"end":return e.stop()}}),e,null,[[5,11]])})));return function(t,n){return e.apply(this,arguments)}}())},v=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Array.isArray(t)&&(e=t.map((function(e){return e&&"".concat(e)})).filter(Boolean).join(" ")),e},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Param";throw new Error("".concat(e," is required"))}},44:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return l}));var a=n(2),c=n(16),r=n(87),i=n(9),s=n(8),o=n(17),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"todos",t=localStorage.getItem(e);return t?JSON.parse(t):(t=o.b[e],localStorage.setItem(e,JSON.stringify(t)),t)},d={byDate:function(e){return function(t){return new Promise((function(n){Object(s.isDate)(e)||(e=new Date);var a=u("todos"),r=Object(i.f)(e),o=a[r];return o?(t({type:"UPDATE_TODOS",payload:Object(c.a)({},r,o)}),n(o)):n({})}))}},post:function(e){return function(t){return new Promise((function(n){var s=e.dt,o=void 0===s?new Date:s,d=Object(i.f)(o),l=u("todos");Object.keys(l).includes(d)||(l[d]=[]),l[d].push(Object(a.a)(Object(a.a)({},e),{},{slug:Object(r.a)()})),localStorage.setItem("todos",JSON.stringify(l)),t({type:"UPDATE_TODOS",payload:Object(c.a)({},d,l[d])}),n({status:1})}))}},patch:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(i.i)("data required");return function(n){return new Promise((function(r,s){var o=e.slug,d=e.dt,l=Object(i.f)(new Date(d));if(!l)return s(new Error("Invalid date"));var j=u("todos");if(!Object.keys(j).includes(l))return s(new Error("Invalid date"));var b=j[l].map((function(e){return e.slug===o?Object(a.a)(Object(a.a)({},e),t):e}));j[l]=b,localStorage.setItem("todos",JSON.stringify(j)),n({type:"UPDATE_TODOS",payload:Object(c.a)({},l,b)}),r({status:1})}))}}},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.b.todos,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.type,c=t.payload,r=void 0===c?{}:c;switch(n){case"SET_TODOS":return Object(a.a)({},r);case"UPDATE_TODOS":return Object(a.a)(Object(a.a)({},e),r);default:return Object(a.a)({},e)}}},47:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i})),n.d(t,"settingsReducer",(function(){return s}));var a=n(2),c=(n(0),n(17)),r=n(1);function i(e){return Object(r.jsx)("div",{children:"settings"})}var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.b.settings,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.type,r=t.payload,i=void 0===r?{}:r;switch(n){case"RESET_SETTINGS":return Object(a.a)({},e);case"SET_THEME":return Object(a.a)(Object(a.a)({},e),i);default:return e}}},48:function(e,t){},57:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},82:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t),n.d(t,"appStore",(function(){return p}));var a=n(20),c=n(2),r=n(0),i=n.n(r),s=n(21),o=n.n(s),u=n(45),d=n(18),l=n(19),j=n(25),b=n(17),O=n(48),h=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,98)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},m=n(1),v=Object(j.b)(Object(c.a)({},b.c)),f=[u.a],x=[j.a.apply(void 0,f)];O.IS_DEV&&(x=[].concat(Object(a.a)(x),[window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}]));var p=Object(j.d)(v,b.b,j.c.apply(void 0,Object(a.a)(x)));o.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(l.a,{children:Object(m.jsx)(d.a,{store:p,children:Object(m.jsx)(b.a,{})})})}),document.getElementById("root")),h()},9:function(e,t,n){"use strict";n.d(t,"c",(function(){return N})),n.d(t,"a",(function(){return y.b})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return w})),n.d(t,"e",(function(){return o.b})),n.d(t,"f",(function(){return o.c})),n.d(t,"g",(function(){return o.d})),n.d(t,"i",(function(){return o.g})),n.d(t,"h",(function(){return o.e}));n(59);var a=n(2),c=n(7),r=n(0),i=(n(60),n(3)),s=n.n(i),o=(n(61),n(4)),u=n(1),d=(0,n(0).forwardRef)((function(e,t){var n=e.id,r=e.value,i=e.onChange,s=e.placeholder,d=void 0===s?"Start typing ...":s,l=Object(c.a)(e,["id","value","onChange","placeholder"]),j=e.style;return Object(u.jsxs)("div",{id:n,className:Object(o.e)(["textareax"]),children:[Object(u.jsx)("span",{className:"textareax-mirror",style:j,children:"".concat(r,"\n")}),Object(u.jsx)("div",{className:"textareax-input",children:Object(u.jsx)("textarea",Object(a.a)(Object(a.a)({},l),{},{value:r,onChange:i,placeholder:d,style:j,ref:t}))})]})})),l=Object(r.createContext)(null),j=l.Provider,b=l,O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r.forwardRef)((function(n,c){n=Object(a.a)(Object(a.a)({},t),n);var i=Object(r.useContext)(b)||Object(o.g)("FormCtx"),s=n.name,d=void 0===s?Object(o.g)("name prop"):s,l=n,j=l.value,O=l.checked,h=l.onChange;return Object.keys(i.values).includes(d)&&("checkbox"===n.type?O=i.values[d]:j=i.values[d]),h=h||i.handleChange,Object(u.jsx)(e,Object(a.a)(Object(a.a)({},n),{},{className:Object(o.e)([t.className,n.className]),value:j,checked:O,onChange:h,ref:c}))}))},h=O("input",{className:"input"});h.propTypes={id:s.a.string,className:s.a.string,value:s.a.string,required:s.a.bool,disabled:s.a.bool};var m=O("input",{type:"checkbox",className:"input input-checkbox"});m.propTypes={id:s.a.string,className:s.a.string,value:s.a.any,checked:s.a.bool,required:s.a.bool,disabled:s.a.bool};var v=O("textarea",{className:"textarea"}),f=O(d);o.a&&(h.displayName="TextInput",m.displayName="CheckboxInput",v.displayName="TextArea",f.displayName="TextAreaX");var x=Object(r.forwardRef)((function(e,t){var n=e.children,r=e.context,i=Object(c.a)(e,["children","context"]);return Object(u.jsx)(j,{value:r,children:Object(u.jsx)("form",Object(a.a)(Object(a.a)({},i),{},{ref:t,children:n}))})}));x.TextInput=h,x.CheckboxInput=m,x.TextArea=v,x.TextAreaX=f;n(16),n(12);var p=n(21),g=n.n(p),N=(n(82),function(e){var t=e.children;return g.a.createPortal(t,document.body)});N.Modal=function(e){var t=e.id,n=e.header,a=e.children,c=e.footer,r=e.fullscreen;return Object(u.jsxs)("div",{id:t,className:"modal-container",children:[Object(u.jsx)("div",{className:"modal-background"}),Object(u.jsx)("div",{className:"modal-inner",children:Object(u.jsx)("div",{className:"modal-content",children:Object(u.jsxs)("div",{className:Object(o.e)(["modal-content-inner",r&&"modal-content-inner-fullscreen"]),children:[n&&Object(u.jsx)("div",{className:"modal-header",children:n}),Object(u.jsx)("div",{className:"modal-body",children:a}),c&&Object(u.jsx)("div",{className:"modal-footer",children:c})]})})})]})},N.propTypes={children:s.a.node.isRequired};n(19);var w=function(e){var t=e.Icon,n=e.label,r=Object(c.a)(e,["Icon","label"]),i=r.maxSize,s=Object(c.a)(r,["maxSize"]);return t?Object(u.jsxs)("button",Object(a.a)(Object(a.a)({title:n},s),{},{className:Object(o.e)(["btn btn-icon",r.className]),children:[Object(u.jsx)(t,{className:"icon",height:i,width:i}),n&&Object(u.jsx)("span",{className:"label",children:n})]})):null},y=n(34)}},[[86,1,2]]]);
//# sourceMappingURL=main.30ef24b8.chunk.js.map