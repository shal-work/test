(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,function(e,t,n){e.exports={mainQuestion:"Question_mainQuestion__xRmWD",mainQuestion__text:"Question_mainQuestion__text__3NIxt",circle:"Question_circle__6ln3k",circle__target:"Question_circle__target__39ww-",true:"Question_true__ynf99",false:"Question_false__1D_8y",mainQuestion__quantity:"Question_mainQuestion__quantity__3n5EI"}},function(e,t,n){e.exports={main:"Header_main__wTPEq",title:"Header_title__gW1H5",mainIntro:"Header_mainIntro__1P3xH",mainIntro__logo:"Header_mainIntro__logo__2AhrJ",logo:"Header_logo__5RNvJ",mainIntro__text:"Header_mainIntro__text__1gtoA"}},,function(e,t,n){e.exports={nextQuestion:"Control_nextQuestion__3vu9Z",nextQuestionDisabled:"Control_nextQuestionDisabled__3Bm88"}},,function(e,t,n){e.exports={answers:"Options_answers__3VUa4",answer:"Options_answer__3Lrds"}},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(8),r=n.n(a),i=(n(14),n(15),n(3)),o=n.n(i),d=n(2),c=n.n(d),u=n(0),g=function(e){var t=e.answer.map((function(e){return e.viewAnswer?e.correctAnswer?Object(u.jsx)("div",{className:c.a.circle__target+" "+c.a.true},e.id):Object(u.jsx)("div",{className:c.a.circle__target+" "+c.a.false},e.id):Object(u.jsx)("div",{className:c.a.circle__target},e.id)}));return Object(u.jsx)("div",{className:c.a.circle,children:t})},f=function(e){return Object(u.jsxs)("div",{className:c.a.mainQuestion__quantity,children:["\u0412\u043e\u043f\u0440\u043e\u0441",Object(u.jsxs)("span",{className:"current",children:["\u2002",e.index]}),Object(u.jsx)("span",{children:" \u0438\u0437 "}),Object(u.jsx)("span",{className:"total",children:e.getQuantity()})]})},j=function(e){return Object(u.jsx)("div",{className:c.a.mainQuestion__text,children:Object(u.jsxs)("p",{children:[Object(u.jsxs)("span",{children:[e.index,". "]}),Object(u.jsx)("span",{children:e.text})]})})},h=function(e){return Object(u.jsxs)("div",{className:c.a.mainQuestion,children:[Object(u.jsx)(f,{index:e.index,getQuantity:e.getQuantity}),Object(u.jsx)(g,{answer:e.answer}),e.getGo()?Object(u.jsx)(j,{text:e.text,index:e.index}):Object(u.jsx)(u.Fragment,{})]})},l=function(e){return Object(u.jsx)("div",{className:o.a.mainIntro__logo,children:Object(u.jsx)("img",{className:o.a.logo,src:"data:image/png;base64,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",alt:"logo"})})},D=function(e){return Object(u.jsxs)("div",{className:o.a.mainIntro__text,children:[Object(u.jsx)("h2",{children:"\u0422\u0435\u0441\u0442 \u043f\u043e HTML"}),Object(u.jsx)("div",{className:o.a.mainIntro__description,children:Object(u.jsxs)("p",{children:["\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",Object(u.jsxs)("strong",{children:["\u2002",e.getQuantity()," \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432 \u043f\u043e \u043e\u0441\u043d\u043e\u0432\u0430\u043c HTML."]})," \u041f\u0440\u0438 \u043e\u0447\u0435\u0440\u0435\u0434\u043d\u043e\u043c \u043f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0438 \u0442\u0435\u0441\u0442\u0430 \u043c\u043d\u043e\u0433\u0438\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u043c\u0435\u043d\u0435\u043d\u044b. \u0417\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442 \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0435 1 \u0431\u0430\u043b\u043b, \u0432 \u043a\u043e\u043d\u0446\u0435 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0442\u0435\u0441\u0442\u0430 \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0435 \u0441\u0432\u043e\u0439 \u043e\u0431\u0449\u0438\u0439 \u0431\u0430\u043b\u043b."]})})]})},b=function(e){return Object(u.jsxs)("div",{className:o.a.mainIntro,children:[Object(u.jsx)(l,{}),Object(u.jsx)(D,{getQuantity:e.getQuantity})]})},x=function(e){return Object(u.jsx)("div",{className:o.a.title,children:Object(u.jsx)("h1",{children:"\u0422\u0435\u0441\u0442"})})},O=function(e){var t=e.state.number-1;return Object(u.jsxs)("div",{className:o.a.main,children:[Object(u.jsx)(x,{}),Object(u.jsx)(b,{getQuantity:e.getQuantity}),Object(u.jsx)(h,{answer:e.state.answer,text:e.state.questions.item[t].text,index:e.state.number,getGo:e.getGo,getQuantity:e.getQuantity})]})},m=n(7),w=n.n(m),v=function(e){var t=e.shuffleOptions(),n=function(t){var n=t.target.value,s={id:e.state.number,text:n};e.versionAnswer(s)};Object(s.useEffect)((function(){if(e.getGo())for(var t=document.querySelectorAll(".question-options"),n=0;n<t.length;n++)t[n].checked&&(t[n].checked="")}));var a=t.item.map((function(e,t){return Object(u.jsxs)("li",{children:[Object(u.jsx)("input",{className:"question-options",id:"question_"+t,name:"question",type:"radio",onChange:n,value:e}),Object(u.jsx)("label",{className:w.a.answer,htmlFor:"question_"+t,children:e})]},t)}));return e.getGo()?Object(u.jsx)("ul",{className:w.a.answers,children:a}):Object(u.jsx)("div",{})},A=n(5),P=n.n(A),B=function(e){return Object(u.jsx)("div",{children:e.getGo()?Object(u.jsx)("button",{className:P.a.nextQuestion,onClick:function(){e.addAnswer()},children:"\u0414\u0430\u043b\u044c\u0448\u0435 \xbb"}):Object(u.jsx)("button",{disabled:!0,className:"".concat(P.a.nextQuestion," ").concat(P.a.nextQuestionDisabled),children:" \u0412\u0441\u0451 "})})};console.log("%c  \u0420\u041e\u0421\u0421\u0418\u042f  ","background: blue; color: yellow; font-size: x-large; border-left: 5px solid black; border-top: 30px solid white; border-right: 2px solid black; border-bottom: 30px solid red;");var p=function(e){return Object(u.jsxs)("div",{className:"app-wrapper",children:[Object(u.jsx)(O,{state:e.state,getGo:e.getGo,getQuantity:e.getQuantity}),Object(u.jsx)(v,{state:e.state,versionAnswer:e.versionAnswer,getGo:e.getGo,shuffleOptions:e.shuffleOptions}),Object(u.jsx)(B,{addAnswer:e.addAnswer,getGo:e.getGo,state:e.state})]})},H=n(9),G=n(4),Q={_state:{questions:{item:[{id:1,text:"\u041a\u0430\u043a\u0438\u0435 \u0438\u0437 \u044d\u0442\u0438\u0445 \u0442\u0435\u0433\u043e\u0432 \u043e\u0442\u043d\u043e\u0441\u044f\u0442\u0441\u044f \u043a \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0443 <table>?",var:["<table><tr><td>","<table><tr><tt>","<table><head><tfoot>","<thead><body><tr>"]},{id:2,text:"\u041a\u0430\u043a \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443 \u0432 \u043d\u043e\u0432\u043e\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u0435 / \u043e\u043a\u043d\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430?",var:['<a href="url" target="_blank">\u0422\u0435\u043a\u0441\u0442</a>','<a href="url" new>\u0422\u0435\u043a\u0441\u0442</a>','<a href="url" target="new">\u0422\u0435\u043a\u0441\u0442</a>']},{id:3,text:"\u0412 \u043a\u0430\u043a\u043e\u043c \u043c\u0435\u0441\u0442\u0435 HTML \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0434\u043e\u043b\u0436\u043d\u044b \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0442\u044c\u0441\u044f \u0442\u0435\u0433\u0438 <title>, <link> \u0438 <meta>?",var:["\u0412 \u0441\u0435\u043a\u0446\u0438\u0438 <head>","\u0412 \u0441\u0435\u043a\u0446\u0438\u0438 <body>","<footer>"]},{id:4,text:"\u041a\u0442\u043e \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u0432\u0435\u0431-\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u044b?",var:["World Wide Web Consortium (W3C)","Google","Mozilla","Microsoft"]},{id:5,text:"\u0414\u043b\u044f \u043a\u0430\u043a\u043e\u0433\u043e \u0442\u0435\u0433\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 <!DOCTYPE> \u0432\u044b\u0441\u0442\u0443\u043f\u0430\u0435\u0442 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u0435\u043c?",var:["\u041d\u0438 \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u0442\u0435\u0433\u0430","<BODY>","<TITLE>","<HTML>","<HEAD>"]},{id:6,text:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0442\u0435\u0433 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0438\u0439 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043d\u0443\u043c\u0435\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a.",var:["<ol>","<ul","<li>","<list>"]},{id:7,text:"\u0412 \u043a\u0430\u043a\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u0433\u0440\u0430\u0444\u0438\u043a\u0430 SVG?",var:["XML","HTML","CSS"]},{id:8,text:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0432\u044b\u0432\u0435\u0441\u0442\u0438 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043a\u043e\u0434, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0430\u043f\u0438\u0441\u0430\u043d \u043d\u0430 \u044f\u0437\u044b\u043a\u0435 Java. \u041a\u0430\u043a\u043e\u0439 \u0442\u0435\u0433 \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c?",var:["<code>","<java>","<pre>","<p>"]},{id:9,text:"\u041c\u043e\u0436\u043d\u043e \u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0444\u0440\u0435\u0439\u043c\u044b \u0432 HTML \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0445 \u0441 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043d\u044b\u043c (transitional) DTD ?",var:["\u0414\u0430","\u041d\u0435\u0442"]},{id:10,text:"\u041a\u0430\u043a\u043e\u0439 \u0442\u0438\u043f \u0432\u0432\u043e\u0434\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043f\u043e\u043b\u0437\u0443\u043d\u043e\u043a?",var:["range","controls","search","slider"]},{id:11,text:"\u0422\u0435\u0433 <iframe> \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0432\u043d\u0443\u0442\u0440\u0438 \u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b.",var:["\u0414\u0430","\u041d\u0435\u0442 \u0442\u0430\u043a\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 <iframe>","\u041d\u0435\u0442"]},{id:12,text:"\u041a\u0430\u043a\u043e\u0439 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0435\u0441\u043b\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043e?",var:["alt","src","title"]},{id:13,text:"\u041a\u0430\u043a\u043e\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0438\u043c\u0435\u0442\u044c HTML \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b?",var:[".html \u0438\u043b\u0438 .htm",".php \u0438\u043b\u0438 .asp",".txt \u0438\u043b\u0438 .doc",".doc"]},{id:14,text:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 HTML-\u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430 \u0441 \u0432\u044b\u0441\u0448\u0438\u043c \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c:",var:["<h1></h1>","<head></head>","<h6></h6>","<heading></heading>"]},{id:15,text:"\u041a\u0430\u043a\u043e\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441\u043a\u0430\u043b\u044f\u0440\u043d\u043e\u0433\u043e \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f \u0432 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430?",var:["<meter></meter>","<gauge></gauge>","<measure></measure>","<range></range>"]},{id:16,text:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0435\u0440\u0435\u0447\u0435\u043d\u044c, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0432\u0441\u0435 \u0442\u0435\u0433\u0438 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u043c\u0438.",var:["<strike>, <font> \u0438 <center>","<center>, <span> \u0438 <div>","<u>, <b> \u0438 <s>","<menu>, <font> \u0438 <span>"]},{id:17,text:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0442\u0435\u0433 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0438\u0439 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443",var:["<table></table>","<tabs></tabs>","<tr></tr>","<tab></tab>"]},{id:18,text:"\u041f\u0430\u043f\u043a\u0438 images \u0438 pages \u043b\u0435\u0436\u0430\u0442 \u0432 \u043a\u043e\u0440\u043d\u0435 \u0441\u0430\u0439\u0442\u0430. \u0412 \u043f\u0430\u043f\u043a\u0435 images \u043b\u0435\u0436\u0438\u0442 \u0444\u0430\u0439\u043b foto.jpg. \u041a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0443\u0442\u044c \u043a foto.jpg \u0438\u0437 \u0444\u0430\u0439\u043b\u0430 page.html?",var:["../images/foto.jpg","pages/images/foto.jpg","../images/pages/foto.jpg","images/foto.jpg"]},{id:19,text:"\u041a\u0430\u043a\u043e\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 HTML \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430?",var:["<title></title>","<head></head>","<meta></meta>"]},{id:20,text:"\u041a\u0430\u043a\u043e\u0439 HTML-\u043a\u043e\u0434 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u0432\u0441\u0442\u0430\u0432\u043a\u0438 \u0444\u043e\u043d\u043e\u0432\u043e\u0433\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f?",var:['<body style="background-image:url(background.gif)">','<background img="background.gif">','<body bg="background.gif">']}]},answer:[],number:1},getState:function(){return this._state},initAnswer:function(){for(var e=this.getQuantity(),t=0;t<e;t++){var n={id:t+1,correctAnswer:!1,viewAnswer:!1};this._state.answer.push(n)}},_renderEntireTree:function(){console.log("\u0412\u044b\u0437\u043e\u0432 state")},_checkingDo:!0,getQuantity:function(){return this._state.questions.item.length},getGo:function(){return this._checkingDo},_varAnswer:{id:1,text:""},versionAnswer:function(e){this._varAnswer.id=e.id,this._varAnswer.text=e.text},addAnswer:function(){var e=this;this._state.questions.item[this._varAnswer.id-1].var[0]===this._varAnswer.text?this._state.answer=this._state.answer.map((function(t){return t.id===e._varAnswer.id?Object(G.a)(Object(G.a)({},t),{},{correctAnswer:!0,viewAnswer:!0}):t})):this._state.answer=this._state.answer.map((function(t){return t.id===e._varAnswer.id?Object(G.a)(Object(G.a)({},t),{},{correctAnswer:!1,viewAnswer:!0}):t})),this._addNumber(),this._shuffleVar(),this._renderEntireTree(this._state)},shuffleOptions:function(){return{item:this._shuffleVar(),id:this._state.number}},_addNumber:function(){this._state.number<this.getQuantity()?this._state.number++:this._checkingDo=!1},_shuffleVar:function(){for(var e=this._state.number,t=Object(H.a)(this._state.questions.item[e-1].var),n=t.length-1;n>0;n--){var s=Math.floor(Math.random()*(n+1)),a=t[n];t[n]=t[s],t[s]=a}return t},subscribe:function(e){this._renderEntireTree=e}},L=function(e){r.a.render(Object(u.jsx)(p,{state:e,versionAnswer:Q.versionAnswer.bind(Q),addAnswer:Q.addAnswer.bind(Q),getGo:Q.getGo.bind(Q),shuffleOptions:Q.shuffleOptions.bind(Q),getQuantity:Q.getQuantity.bind(Q)}),document.getElementById("root"))};L(Q.getState(),Q.initAnswer()),Q.subscribe(L)}],[[17,1,2]]]);
//# sourceMappingURL=main.816cb210.chunk.js.map