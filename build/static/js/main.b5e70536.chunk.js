(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{40:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(2),r=(n(40),n(0)),a=n(7),j=n.n(a),i=n(34),o=n(20),s=n(30),u=n.n(s);var l=function(){return Object(c.jsx)("header",{children:Object(c.jsxs)("h1",{children:[Object(c.jsx)(u.a,{}),"Keeper"]})})};var b=function(){var e=(new Date).getFullYear();return Object(c.jsx)("footer",{children:Object(c.jsx)("p",{children:e})})},O=n(32),d=n.n(O);var x=function(e){return Object(c.jsxs)("div",{className:"note",children:[Object(c.jsx)("h1",{children:e.title}),Object(c.jsx)("p",{children:e.content}),Object(c.jsx)("button",{onClick:function(){e.onDelete(e.id)},children:Object(c.jsx)(d.a,{})})]})},h=n(24),f=n(29),p=n(33),v=n.n(p),m=n(66),k=n(67);var g=function(e){var t=Object(r.useState)(!1),n=Object(o.a)(t,2),a=n[0],j=n[1],i=Object(r.useState)({title:"",content:""}),s=Object(o.a)(i,2),u=s[0],l=s[1];function b(e){var t=e.target,n=t.name,c=t.value;l((function(e){return Object(f.a)(Object(f.a)({},e),{},Object(h.a)({},n,c))}))}return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{className:"create-note",children:[a&&Object(c.jsx)("input",{name:"title",onChange:b,value:u.title,placeholder:"Title"}),Object(c.jsx)("textarea",{name:"content",onClick:function(){j(!0)},onChange:b,value:u.content,placeholder:"Take a note...",rows:a?3:1}),Object(c.jsx)(k.a,{in:a,children:Object(c.jsx)(m.a,{onClick:function(t){e.onAdd(u),l({title:"",content:""}),t.preventDefault()},children:Object(c.jsx)(v.a,{})})})]})})};var C=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1];function j(e){a((function(t){return t.filter((function(t,n){return n!==e}))}))}return Object(c.jsxs)("div",{children:[Object(c.jsx)(l,{}),Object(c.jsx)(g,{onAdd:function(e){a((function(t){return[].concat(Object(i.a)(t),[e])}))}}),n.map((function(e,t){return Object(c.jsx)(x,{id:t,title:e.title,content:e.content,onDelete:j},t)})),Object(c.jsx)(b,{})]})};j.a.render(Object(c.jsx)(C,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.b5e70536.chunk.js.map