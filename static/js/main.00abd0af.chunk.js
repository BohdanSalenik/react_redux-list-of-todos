(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{14:function(t,e,n){t.exports=n(27)},26:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(5),c=n.n(o),u=n(2),l=n(3),s=n(6),i="LOAD_FROM_API",d="SORT_BY_NAME",m="SORT_BY_TITLE",p="SORT_BY_COMPLETE",b="DELETE_TASK",f={todos:[]},E=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),y=Object(s.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case i:return{todos:e.payload.todos};case d:return{todos:Object(l.a)(t.todos).sort((function(t,e){return t.user.name.localeCompare(e.user.name)}))};case m:return{todos:Object(l.a)(t.todos).sort((function(t,e){return t.title.localeCompare(e.title)}))};case p:return{todos:Object(l.a)(t.todos).sort((function(t,e){return Number(e.completed)-Number(t.completed)}))};case b:return{todos:Object(l.a)(t.todos).filter((function(t){return t.id!==e.payload.id}))};default:return t}}),E),O=n(1),h=n.n(O),_=n(13),v=n(4),T=n(12),N="https://jsonplaceholder.typicode.com/",j=function(){var t=Object(v.a)(h.a.mark((function t(e){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=function(){var t=Object(v.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",j("".concat(N).concat("todos")));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(){var t=Object(v.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",j("".concat(N).concat("users")));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=Object(u.b)(null,(function(t){return{deleteTask:function(e){return t(function(t){return{type:b,payload:{id:t}}}(e))}}}))((function(t){var e=t.todo,n=t.deleteTask;return a.a.createElement("tr",{className:"table-info"},a.a.createElement("td",null,e.title),a.a.createElement("td",null,e.completed?"OK":"KO"),a.a.createElement("td",null,e.user&&a.a.createElement("p",null,e.user.name)),a.a.createElement("td",null,a.a.createElement("button",{type:"button",onClick:function(){return n(e.id)}},"\ud83d\uddd1")))})),B=Object(u.b)(null,(function(t){return{sortByName:function(){return t({type:d})},sortByTitle:function(){return t({type:m})},sortByComplete:function(){return t({type:p})}}}))((function(t){var e=t.todos,n=t.sortByTitle,r=t.sortByComplete,o=t.sortByName;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement("button",{className:"btn btn-info button-margin",type:"button",onClick:n},"sort by title"),a.a.createElement("button",{className:"btn btn-info button-margin",type:"button",onClick:r},"show completed"),a.a.createElement("button",{className:"btn btn-info",type:"button",onClick:o},"by user name")),a.a.createElement("table",{className:"table-bordered table-center"},a.a.createElement("thead",null,a.a.createElement("tr",{className:"bg-danger"},a.a.createElement("th",null,"Todo"),a.a.createElement("th",null,"Status"),a.a.createElement("th",null,"UserName"),a.a.createElement("th",null,"DELETE"))),a.a.createElement("tbody",null,e.map((function(t){return a.a.createElement(g,{key:t.id,todo:t})})))))})),C=(n(26),Object(u.b)((function(t){return{todos:t.todos}}),(function(t){return{setTodos:function(e){return t(function(t){return{type:i,payload:{todos:t}}}(e))}}}))((function(t){var e=t.todos,n=t.setTodos,o=Object(r.useState)(!1),c=Object(T.a)(o,2),u=c[0],s=c[1],i=Object(l.a)(e),d=function(){var t=Object(v.a)(h.a.mark((function t(){var e,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(!0),t.next=3,w();case 3:return e=t.sent,t.next=6,k();case 6:r=t.sent,n(e.map((function(t){return Object(_.a)({},t,{user:r.find((function(e){return e.id===t.userId}))})}))),s(!1);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return u?a.a.createElement("p",{className:"loading"},"Loading..."):a.a.createElement("div",{className:"main"},a.a.createElement("div",null,e.length?a.a.createElement(B,{todos:i}):a.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:d},"Load All")))}))),S=a.a.createElement(u.a,{store:y},a.a.createElement(C,null));c.a.render(S,document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.00abd0af.chunk.js.map