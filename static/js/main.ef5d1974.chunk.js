(window["webpackJsonpmy-react"]=window["webpackJsonpmy-react"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),i=(a(11),a(2)),s=a.n(i),l=a(5),m=a(1),u=function(e){var t=e.title,a=e.calories,n=e.image,r=e.ingredients;return c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"card mb-4 shadow-sm"},c.a.createElement("div",{className:"card-body text-center"},c.a.createElement("h1",{className:"display-4 text-center"},t),c.a.createElement("ol",{className:"card-text"},r.map(function(e){return c.a.createElement("li",null,e.text)})),c.a.createElement("p",null,a),c.a.createElement("img",{src:n,alt:""}))))},p=(a(13),function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),i=Object(m.a)(o,2),p=i[0],d=i[1],f=Object(n.useState)("chicken"),h=Object(m.a)(f,2),b=h[0],v=h[1];Object(n.useEffect)(function(){E()},[b]);var E=function(){var e=Object(l.a)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(b,"&app_id=").concat("9f5a7a17","&app_key=").concat("aef7df3064657c57eef25ecc39ba61e0"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.hits),console.log(a.hits);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v(p),d("")},className:"search-form"},c.a.createElement("input",{placeholder:"Type to search",className:"search-bar",type:"text",value:p,onChange:function(e){d(e.target.value)}}),c.a.createElement("button",{className:"search-button",type:"submit"},"Search")),c.a.createElement("div",{className:"row  mb-4 p-4"},a.map(function(e){return c.a.createElement(u,{key:e.recipe.id,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})}),";"))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,a){e.exports=a(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.ef5d1974.chunk.js.map