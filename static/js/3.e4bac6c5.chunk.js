(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{304:function(e,a,s){e.exports={dialogsContainer:"Dialog_dialogsContainer__3Ftcc",dialogsField:"Dialog_dialogsField__Bm8J6",dialogs:"Dialog_dialogs__2nWS6",dialogItem:"Dialog_dialogItem__EM1vm",messages:"Dialog_messages__19Bic",messageItem:"Dialog_messageItem__1Er95",textField:"Dialog_textField__1GyaD"}},311:function(e,a,s){"use strict";s.r(a);var t=s(16),i=s(9),c=(s(1),s(304)),n=s.n(c),d=s(17),l=s(0),o=function(e){var a="/dialogs/id"+e.id;return Object(l.jsx)("div",{className:n.a.dialogItem,children:Object(l.jsxs)(d.b,{to:a,children:[Object(l.jsx)("img",{src:"https://about.canva.com/wp-content/uploads/sites/3/2018/03/Purple-and-Pink-Cute-Man-Face-Laptop-Sticker.jpg",alt:"avatar"}),e.name]})})},r=function(e){return Object(l.jsx)("div",{className:n.a.messageItem,children:e.message})},m=s(140),g=s(141),j=s(60),b=s(31),u=Object(b.a)(200),x=Object(b.b)(1),O=Object(g.a)({form:"dialog"})((function(e){var a=e.handleSubmit,s=e.reset;return Object(l.jsxs)("form",{onSubmit:a,children:[Object(l.jsx)("div",{children:Object(l.jsx)(m.a,{component:j.a,name:"body",type:"text",placeholder:"Write your new message",validate:[b.c,u,x]})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){return setTimeout(s,0)},children:"Send message"})})]})})),h=function(e){var a=e.dialogs.map((function(e){return Object(l.jsx)(o,{name:e.name,id:e.id},e.id)})),s=e.messages.map((function(e){return Object(l.jsx)(r,{message:e.message,id:e.id},e.id)}));return Object(l.jsxs)("div",{className:n.a.dialogsContainer,children:[Object(l.jsx)("h2",{children:"Massages"}),Object(l.jsxs)("div",{className:n.a.dialogsField,children:[Object(l.jsx)("div",{className:n.a.dialogs,children:Object(l.jsx)("div",{className:n.a.dialogItem,children:a})}),Object(l.jsx)("div",{className:n.a.messages,children:Object(l.jsx)("div",{className:n.a.messageItem,children:s})})]}),Object(l.jsx)("div",{className:n.a.textField,children:Object(l.jsx)(O,{onSubmit:function(a){e.createMessage(a.body)}})})]})},p=s(78),_=s(119);a.default=Object(i.d)(p.a,Object(t.b)((function(e){return{dialogs:e.dialogPage.dialogs,messages:e.dialogPage.messages}}),{createMessage:_.b.sendMessageCreator}))(h)}}]);
//# sourceMappingURL=3.e4bac6c5.chunk.js.map