(this["webpackJsonp@miq/monoloq"]=this["webpackJsonp@miq/monoloq"]||[]).push([[0],{14:function(e,t,n){"use strict";n.d(t,"b",(function(){return A})),n.d(t,"a",(function(){return B})),n.d(t,"c",(function(){return H}));var a=n(11),c=n(0),r=n(16),s=n(5),i=n(86),o=n(87),l=n(88),u=n(89),d=(n(55),n(23)),j=n(2),b=n(15),O=n(17),f=n(83),m=n(19),h=n(13),v=/(\n|\r|\r\n){2,}/g,x=function(e){return e&&(e=e.trim().replace(v,"\n\n")),e},p=function(){return function(e){return new Promise((function(t){var n=localStorage.getItem("entries");return n?n=JSON.parse(n):(n=A.entries,localStorage.setItem("entries",JSON.stringify(n))),e({type:"SET_ENTRIES",payload:n}),t(n)}))}},g=function(e){return function(t,n){return new Promise((function(a){var c=n().entries,r=Object(j.a)(Object(j.a)({},c),{},Object(h.a)({},"".concat(e.slug),e));localStorage.setItem("entries",JSON.stringify(r)),t({type:"SET_ENTRIES",payload:r}),a(Object(j.a)(Object(j.a)({},e),{},{status:1}))}))}},N=function(e,t){return function(n,a){return new Promise((function(c,r){var s=a().entries,i=s[e];if(!i)return r(new Error("Invalid slug ".concat(e,".")));i=Object(j.a)(Object(j.a)({},i),t);var o=Object(j.a)(Object(j.a)({},s),{},Object(h.a)({},"".concat(e),i));localStorage.setItem("entries",JSON.stringify(o)),n({type:"SET_ENTRIES",payload:o}),c(Object(j.a)(Object(j.a)({},i),{},{status:1}))}))}},y=function(e){return function(t,n){return new Promise((function(a,c){var r=n().entries;delete r[e],localStorage.setItem("entries",JSON.stringify(r)),t({type:"SET_ENTRIES",payload:r}),a({slug:e,status:1})}))}},S=n(6),w=n(84),E=["What are your thoughts ...","What are you up to ...","How are you feeling right now ?!","How happy are you ?","Are you stressed out?","Are you worried about the future?"],T=n(1),D=function(e){var t=e.placeholder,n=void 0===t?Object(m.sample)(E):t,a=e.maxLength,c=void 0===a?280:a;return Object(T.jsx)(S.c,Object(j.a)(Object(j.a)({},e),{},{placeholder:n,maxLength:c,required:!0}))},I=function(e){var t=e.className;return Object(T.jsx)("div",{className:t,children:Object(T.jsx)("button",{type:"submit",className:"btn",title:"Submit",children:Object(T.jsx)(w.a,{className:"btn-icon"})})})};function _(e){var t=Object(b.b)(),n=Object(c.useState)(""),a=Object(O.a)(n,2),r=a[0],s=a[1];return Object(T.jsx)("div",{id:"EntryAddForm",children:Object(T.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={slug:Object(f.a)(),text:x(r),dt:new Date};t(g(n)).then((function(e){e.status&&s("")}))},className:"entries-add-form",children:[Object(T.jsx)("div",{className:"entries-add-form-input",children:Object(T.jsx)(D,{value:r,onChange:function(e){return s(e.target.value)}})}),Object(T.jsx)(I,{className:"entries-add-form-submit"})]})})}var C=function(e){var t=e.data,n=void 0===t?{}:t,r=Object(a.a)(e,["data"]),s=Object(b.b)(),i=Object(c.useState)(n.text||""),o=Object(O.a)(i,2),l=o[0],u=o[1];if(!n.slug)return null;return Object(T.jsx)("div",{id:"EntryUpdateForm",children:Object(T.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),l!==n.text){var t=Object(j.a)(Object(j.a)({},n),{},{text:x(l)});s(N(n.slug,t)).then((function(e){if(e.status)return r.onSuccess?r.onSuccess(t):void 0}))}},className:"entries-upd-form",children:[Object(T.jsx)("div",{className:"entries-upd-form-input",children:Object(T.jsx)(D,{value:l,onChange:function(e){return u(e.target.value)}})}),Object(T.jsx)(I,{className:"entries-upd-form-submit"})]})})},R=n(85);function P(e){var t=e.data,n=void 0===t?{}:t,r=e.dispatch,s=(Object(a.a)(e,["data","dispatch"]),Object(c.useState)(!1)),i=Object(O.a)(s,2),o=i[0],l=i[1];return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{className:"entry",onClick:function(){return l(!0)},children:[Object(T.jsx)("div",{className:"entry-text",children:n.text}),Object(T.jsx)("div",{className:"entry-meta",children:Object(T.jsx)("span",{className:"entry-meta-time",children:"".concat(Object(S.f)(n.date))})})]}),o&&Object(T.jsx)(k,{onClose:function(){return l(!1)},onDelete:function(e){e.preventDefault(),r(y(n.slug)).then((function(e){e.status}))},children:Object(T.jsx)(C,{data:n,onSuccess:function(){return l(!1)}})})]})}var k=function(e){var t=e.children,n=e.onClose,a=e.onDelete;console.log(n);var c=Object(T.jsx)("div",{className:"",children:Object(T.jsx)("div",{className:"CloseButton",onClick:n,children:Object(T.jsx)(S.a,{Icon:R.a,maxSize:24})})}),r=Object(T.jsx)("div",{className:"bg-white",children:Object(T.jsx)("div",{className:"CloseButton",onClick:a,children:"Delete"})});return Object(T.jsx)(S.b,{children:Object(T.jsx)(S.b.Modal,{header:c,footer:r,children:t})})},q=(n(81),new Map);function F(e){var t=Object(b.b)(),n=Object(b.c)((function(e){return e.entries}));return Object(c.useEffect)((function(){t(p())}),[t]),q.clear(),Object.values(n).forEach((function(e){var t=new Date(e.dt);e=Object(j.a)(Object(j.a)({},e),{},{date:t});var n=Object(S.e)(t);q.has(n)||q.set(n,{date:t,entries:[]});var a=q.get(n);a.entries.push(e),q.set(n,a)})),Object(T.jsxs)("section",{id:"EntriesView",className:"entries",children:[Object(T.jsx)("div",{className:"entries-days",children:Object(d.a)(q.values()).map((function(e){return Object(c.createElement)(U,{data:e,dispatch:t,key:"".concat(e.date)})}))}),Object(T.jsx)("footer",{className:"viewport-footer",children:Object(T.jsx)(_,{})})]})}var U=function(e){var t=e.data,n=void 0===t?{entries:[]}:t,a=e.dispatch;return Object(T.jsxs)("div",{className:"entries-day",children:[Object(T.jsx)("div",{className:"weekday",children:Object(S.d)(n.date)}),Object(T.jsx)("div",{className:"items",children:n.entries.map((function(e){return Object(c.createElement)(P,{dispatch:a,data:e,key:e.slug})}))})]})},J=n(45),L=n(42),A={entries:{},todos:{},settings:{created:null,theme:"light"}},M=Object(c.lazy)((function(){return Promise.resolve().then(n.bind(null,45))})),X=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,91))}));function B(e){return Object(T.jsx)("div",{id:"Monoloq",className:"viewport",children:Object(T.jsxs)("div",{className:"mn viewport-content",children:[Object(T.jsxs)("header",{className:"viewport-header",children:[Object(T.jsx)("div",{children:Object(T.jsx)(z,{})}),Object(T.jsxs)("div",{className:"viewport-header-navlinks",children:[Object(T.jsx)(r.b,{exact:!0,to:"/",className:"btn",children:Object(T.jsx)(i.a,{className:"btn-icon"})}),Object(T.jsx)(r.b,{to:"/todo/",className:"btn",children:Object(T.jsx)(o.a,{className:"btn-icon"})}),Object(T.jsx)(r.b,{to:"/settings/",className:"btn",children:Object(T.jsx)(l.a,{className:"btn-icon"})})]})]}),Object(T.jsx)("section",{className:"viewport-body",children:Object(T.jsx)("main",{className:"viewport-main",role:"main",children:Object(T.jsx)(c.Suspense,{fallback:Object(T.jsx)("div",{children:"loading ..."}),children:Object(T.jsxs)(s.c,{children:[Object(T.jsx)(s.a,{path:"/todo/",component:X}),Object(T.jsx)(s.a,{path:"/settings/",component:M}),Object(T.jsx)(s.a,{path:"/",component:F})]})})})})]})})}var z=function(e){var t=e.sitename,n=void 0===t?"Monoloq":t;Object(a.a)(e,["sitename"]);return Object(T.jsxs)("div",{id:"Logo",className:"btn",children:[Object(T.jsx)(u.a,{className:"btn-icon"}),Object(T.jsx)("span",{className:"btn-label",children:n})]})},H={entries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A.entries,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_ENTRIES":return Object(j.a)({},a);case"CLEAR_ENTRIES":return Object(j.a)({},A.entries);default:return Object(j.a)({},e)}},todos:L.a,settings:J.settingsReducer}},42:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return d}));var a=n(2),c=n(13),r=n(83),s=n(6),i=n(19),o=n(14),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"todos",t=localStorage.getItem(e);return t?JSON.parse(t):(t=o.b[e],localStorage.setItem(e,JSON.stringify(t)),t)},u={byDate:function(e){return function(t){return new Promise((function(n){Object(i.isDate)(e)||(e=new Date);var a=l("todos"),r=Object(s.e)(e),o=a[r];return o?(t({type:"UPDATE_TODOS",payload:Object(c.a)({},r,o)}),n(o)):n({})}))}},post:function(e){return function(t){return new Promise((function(n){var a=new Date,i=Object(s.e)(a),o=l("todos");Object.keys(o).includes(i)||(o[i]=[]);var u={slug:Object(r.a)(),value:e,dt:a};console.log(u),o[i].push(u),localStorage.setItem("todos",JSON.stringify(o)),t({type:"UPDATE_TODOS",payload:Object(c.a)({},i,o[i])}),n({status:1})}))}},patch:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(s.h)("data required");return function(n){return new Promise((function(r,i){var o=e.slug,u=e.dt,d=Object(s.e)(new Date(u));if(!d)return i(new Error("Invalid date"));var j=l("todos");if(!Object.keys(j).includes(d))return i(new Error("Invalid date"));var b=j[d].map((function(e){return e.slug===o?(console.log(t),Object(a.a)(Object(a.a)({},e),t)):e}));j[d]=b,localStorage.setItem("todos",JSON.stringify(j)),n({type:"UPDATE_TODOS",payload:Object(c.a)({},d,b)}),r({status:1})}))}}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.b.todos,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.type,c=t.payload,r=void 0===c?{}:c;switch(n){case"SET_TODOS":return Object(a.a)({},r);case"UPDATE_TODOS":return Object(a.a)(Object(a.a)({},e),r);default:return Object(a.a)({},e)}}},45:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s})),n.d(t,"settingsReducer",(function(){return i}));var a=n(2),c=(n(0),n(14)),r=n(1);function s(e){return Object(r.jsx)("div",{children:"settings"})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.b.settings,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.type,r=t.payload,s=void 0===r?{}:r;switch(n){case"RESET_SETTINGS":return Object(a.a)({},e);case"SET_THEME":return Object(a.a)(Object(a.a)({},e),s);default:return e}}},46:function(e,t){},55:function(e,t,n){},6:function(e,t,n){"use strict";n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return p})),n.d(t,"a",(function(){return g})),n.d(t,"d",(function(){return j})),n.d(t,"e",(function(){return b})),n.d(t,"f",(function(){return O})),n.d(t,"h",(function(){return m})),n.d(t,"g",(function(){return f}));n(0);var a=n(18),c=n.n(a),r=n(3),s=n.n(r),i=(n(29),n(44),n(2)),o=n(20),l=n.n(o),u=n(19),d=(n(76),"".concat(window.location.origin));l.a.defaults.xsrfCookieName="csrftoken",l.a.defaults.xsrfHeaderName="X-CSRFTOKEN",l.a.defaults.headers["Content-Type"]="text/html; charset=UTF-8",l.a.defaults.headers.post["Content-Type"]="application/json";l.a.create({baseURL:d,timeout:3e3,withCredentials:!0,headers:{"X-Requested-With":"XMLHttpRequest"},onUploadProgress:function(e){}});var j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{weekday:"short",month:"long",day:"numeric"},n=new Intl.DateTimeFormat("en-US",Object(i.a)({},t));return n.format(new Date(e))},b=function(e){if(!Object(u.isDate)(e))return"";var t=e.getDate(),n=e.getMonth()+1;return t<10&&(t="0"+t),n<10&&(n="0"+n),e.getFullYear()+"-"+n+"-"+t},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{hour:"numeric",minute:"numeric"},n=new Intl.DateTimeFormat("en-US",Object(i.a)({},t));return n.format(new Date(e))},f=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Array.isArray(t)&&(e=t.map((function(e){return e&&"".concat(e)})).filter(Boolean).join(" ")),e},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Param";throw new Error("".concat(e," is required"))},h=(n(77),n(1)),v=function(e){var t=e.children;return c.a.createPortal(t,document.body)};v.Modal=function(e){var t=e.id,n=e.header,a=e.children,c=e.footer,r=e.fullscreen;return Object(h.jsxs)("div",{id:t,className:"modal-container",children:[Object(h.jsx)("div",{className:"modal-background"}),Object(h.jsx)("div",{className:"modal-inner",children:Object(h.jsx)("div",{className:"modal-content",children:Object(h.jsxs)("div",{className:f(["modal-content-inner",r&&"modal-content-inner-fullscreen"]),children:[n&&Object(h.jsx)("div",{className:"modal-header",children:n}),Object(h.jsx)("div",{className:"modal-body",children:a}),c&&Object(h.jsx)("div",{className:"modal-footer",children:c})]})})})]})},v.propTypes={children:s.a.node.isRequired};var x=n(11),p=(n(79),(0,n(0).forwardRef)((function(e,t){var n=e.id,a=e.value,c=e.onChange,r=e.placeholder,s=void 0===r?"Start typing ...":r,o=Object(x.a)(e,["id","value","onChange","placeholder"]),l=e.style;return Object(h.jsxs)("div",{id:n,className:f(["textareax"]),children:[Object(h.jsx)("span",{className:"textareax-mirror",style:l,children:"".concat(a,"\n")}),Object(h.jsx)("div",{className:"textareax-input",children:Object(h.jsx)("textarea",Object(i.a)(Object(i.a)({},o),{},{value:a,onChange:c,placeholder:s,style:l,ref:t}))})]})}))),g=(n(16),function(e){var t=e.Icon,n=e.label,a=Object(x.a)(e,["Icon","label"]),c=a.maxSize,r=Object(x.a)(a,["maxSize"]);return t?Object(h.jsxs)("button",Object(i.a)(Object(i.a)({title:n},r),{},{className:f(["IconButton",a.className]),children:[Object(h.jsx)(t,{className:"Icon",height:c,width:c}),n&&Object(h.jsx)("span",{className:"Label",children:n})]})):null});n(17)},76:function(e,t,n){},77:function(e,t,n){},79:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t),n.d(t,"appStore",(function(){return p}));var a=n(23),c=n(2),r=n(0),s=n.n(r),i=n(18),o=n.n(i),l=n(43),u=n(15),d=n(16),j=n(24),b=n(14),O=n(46),f=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,92)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},m=n(1),h=Object(j.b)(Object(c.a)({},b.c)),v=[l.a],x=[j.a.apply(void 0,v)];O.IS_DEV&&(x=[].concat(Object(a.a)(x),[window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}]));var p=Object(j.d)(h,b.b,j.c.apply(void 0,Object(a.a)(x)));o.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(d.a,{children:Object(m.jsx)(u.a,{store:p,children:Object(m.jsx)(b.a,{})})})}),document.getElementById("root")),f()}},[[82,1,2]]]);
//# sourceMappingURL=main.735746bd.chunk.js.map