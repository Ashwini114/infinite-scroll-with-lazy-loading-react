(this["webpackJsonpfilm-listing"]=this["webpackJsonpfilm-listing"]||[]).push([[0],{20:function(e,t,a){e.exports=a(34)},25:function(e,t,a){},26:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},27:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(9),s=a.n(o),p=(a(25),a(26),a(27),a(6)),i=a(8),m=a(18),g=a(19),c=a(36),l=a(37),u=a(16),d=n.a.lazy((function(){return a.e(3).then(a.bind(null,38))})),_=function(e){var t=e.item;return n.a.createElement("div",null,n.a.createElement(r.Suspense,{fallback:n.a.createElement("div",null,n.a.createElement(u.a,null))},n.a.createElement(d,{img:t.poster_image})),n.a.createElement("p",null,t.name))},j=a(11);var h=Object(j.b)((function(e){return{list:e}}),(function(e){return{searchItem:function(t){return e({type:"SEARCH",payload:t})}}}))((function(e){var t=e.list,a=e.searchItem,o=t.page1.page.content_items.content,s=Object(r.useState)(parseInt(t.page1.page["page-num-requested"])),u=Object(i.a)(s,2),d=u[0],j=u[1],h=function(){var e="page"+(d+1);j(d+1),t[e]&&(v([].concat(Object(p.a)(w),Object(p.a)(t[e].page.content_items.content))),console.log(t[e].page))},f=Object(r.useState)(o),y=Object(i.a)(f,2),w=y[0],v=y[1],b=n.a.useRef(h),E=n.a.useRef(new IntersectionObserver((function(e){e[0].isIntersecting&&b.current()}),{threshold:1})),R=n.a.useState(null),B=Object(i.a)(R,2),W=B[0],T=B[1];n.a.useEffect((function(){b.current=h}),[h]),n.a.useEffect((function(){var e=W,t=E.current;return e&&t.observe(e),function(){e&&t.unobserve(e)}}),[W]);var F=w.map((function(e,t){return n.a.createElement(c.a,{key:t},n.a.createElement(_,{item:e}))})),P=n.a.useRef(),O=n.a.createElement("input",{type:"text",name:"search",placeholder:"Search",ref:P,className:"search-box",onKeyUp:function(){return z()}}),k=Object(r.useState)(!1),C=Object(i.a)(k,2),S=C[0],q=C[1],z=function(){P.current.value.length>3?(a(P.current.value),t.search[0].length>0?(v(t.search[0]),j(3)):(console.log("here"),v([]),j(3))):(v(o),j(1))};return n.a.createElement("div",null,n.a.createElement("header",null,n.a.createElement("h2",null,n.a.createElement(m.a,{className:"back-btn"}),t.page1.page.title,n.a.createElement(g.a,{className:"search-btn",onClick:function(){return q(!S),v(o),void j(1)}})),S?O:""),n.a.createElement(l.a,{xs:"3"},F),n.a.createElement("h1",{ref:T}))}));var f=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(33);var y=a(10),w={page1:{page:{title:"Romantic Comedy","total-content_items":"54","page-num-requested":"1","page-size-requested":"20","page-size-returned":"20",content_items:{content:[{name:"The Birds",poster_image:"poster1.jpg"},{name:"Rear Window",poster_image:"poster2.jpg"},{name:"Family Pot",poster_image:"poster3.jpg"},{name:"Family Pot",poster_image:"poster2.jpg"},{name:"Rear Window",poster_image:"poster1.jpg"},{name:"The Birds",poster_image:"poster3.jpg"},{name:"Rear Window",poster_image:"poster3.jpg"},{name:"The Birds",poster_image:"poster2.jpg"},{name:"Family Pot",poster_image:"poster1.jpg"},{name:"The Birds",poster_image:"poster1.jpg"},{name:"The Birds",poster_image:"poster1.jpg"},{name:"Rear Window",poster_image:"poster2.jpg"},{name:"Family Pot",poster_image:"poster3.jpg"},{name:"Family Pot",poster_image:"poster2.jpg"},{name:"Rear Window",poster_image:"poster1.jpg"},{name:"The Birds",poster_image:"poster3.jpg"},{name:"Rear Window",poster_image:"poster3.jpg"},{name:"The Birds",poster_image:"poster2.jpg"},{name:"Family Pot",poster_image:"poster1.jpg"},{name:"The Birds",poster_image:"poster1.jpg"}]}}},page2:{page:{title:"Romantic Comedy","total-content_items":"54","page-num-requested":"2","page-size-requested":"20","page-size-returned":"20",content_items:{content:[{name:"Rear Window",poster_image:"poster5.jpg"},{name:"Family Pot",poster_image:"poster6.jpg"},{name:"Family Pot",poster_image:"poster5.jpg"},{name:"Rear Window",poster_image:"poster4.jpg"},{name:"The Birds",poster_image:"poster6.jpg"},{name:"Rear Window",poster_image:"poster6.jpg"},{name:"The Birds",poster_image:"poster5.jpg"},{name:"Family Pot",poster_image:"poster4.jpg"},{name:"The Birds",poster_image:"poster4.jpg"},{name:"Rear Window",poster_image:"poster5.jpg"},{name:"Rear Window",poster_image:"poster5.jpg"},{name:"Family Pot",poster_image:"poster6.jpg"},{name:"Family Pot",poster_image:"poster5.jpg"},{name:"Rear Window",poster_image:"poster4.jpg"},{name:"The Birds",poster_image:"poster6.jpg"},{name:"Rear Window",poster_image:"poster6.jpg"},{name:"The Birds",poster_image:"poster5.jpg"},{name:"Family Pot",poster_image:"poster4.jpg"},{name:"The Birds",poster_image:"poster4.jpg"},{name:"Rear Window",poster_image:"poster5.jpg"}]}}},page3:{page:{title:"Romantic Comedy","total-content_items":"54","page-num-requested":"3","page-size-requested":"20","page-size-returned":"14",content_items:{content:[{name:"Family Pot",poster_image:"poster9.jpg"},{name:"Family Pot",poster_image:"poster8.jpg"},{name:"Rear Window",poster_image:"poster7.jpg"},{name:"The Birds",poster_image:"poster9.jpg"},{name:"Rear Window",poster_image:"poster9.jpg"},{name:"The Birds",poster_image:"poster8.jpg"},{name:"Family Pot",poster_image:"poster7.jpg"},{name:"Family Pot",poster_image:"poster9.jpg"},{name:"Family Pot",poster_image:"poster8.jpg"},{name:"Rear Window",poster_image:"poster7.jpg"},{name:"The Birds with an Extra Long Title",poster_image:"poster9.jpg"},{name:"Rear Window",poster_image:"poster9.jpg"},{name:"The Birds",poster_image:"poster8.jpg"},{name:"Family Pot",poster_image:"placeholder_for_missing_posters.png"}]}}},search:[]};var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;if("SEARCH"===t.type){e.search=[];var a=[].concat(Object(p.a)(e.page1.page.content_items.content),Object(p.a)(e.page2.page.content_items.content),Object(p.a)(e.page3.page.content_items.content)),r=a.filter((function(e){return e.name.toLowerCase().includes(t.payload.toLowerCase())}));e.search.push(r)}return e},b=Object(y.b)(v);s.a.render(n.a.createElement(j.a,{store:b},n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.3fb9708c.chunk.js.map