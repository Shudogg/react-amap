(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{CUj7:function(e,t,n){"use strict";var l=n("ahKI"),a=n.n(l),r=n("bIC1"),c=n.n(r);n("tkuz");function u(e,t){return E(e)||d(e,t)||m(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,a,r=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(l=n.next()).done);c=!0)if(r.push(l.value),t&&r.length===t)break}catch(o){u=!0,a=o}finally{try{c||null==n["return"]||n["return"]()}finally{if(u)throw a}}return r}}function E(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,n=Object(l["useRef"])(),r=Object(l["useState"])(!1),o=u(r,2),m=o[0],i=o[1],d=Object(l["useState"])(!1),E=u(d,2),s=E[0],h=E[1];return Object(l["useEffect"])((function(){var e=n.current,t=c()((function(){i(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":m||void 0,"data-right-folded":s||void 0},a.a.createElement("table",null,t)))};t["a"]=s},MZF8:function(e,t,n){"use strict";var l=n("ogwx");n.d(t,"a",(function(){return l["b"]}));n("VCU9")},gM10:function(e,t,n){"use strict";n.r(t);var l=n("ahKI"),a=n.n(l),r=n("Xg8R"),c=n("sPhZ"),u=n("CUj7"),o=a.a.memo((e=>{var t=e.demos,n=t["auto-complete-demo-01"].component;return a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"autocomplete-\u5173\u952e\u5b57\u641c\u7d22"},a.a.createElement(r["AnchorLink"],{to:"#autocomplete-\u5173\u952e\u5b57\u641c\u7d22","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"AutoComplete \u5173\u952e\u5b57\u641c\u7d22"),a.a.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},a.a.createElement(r["AnchorLink"],{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),a.a.createElement("ul",null,a.a.createElement("li",null,"\u6839\u636e\u8f93\u5165\u5173\u952e\u5b57\u63d0\u793a\u5339\u914d\u4fe1\u606f")),a.a.createElement("h2",{id:"\u4ee3\u7801\u793a\u4f8b"},a.a.createElement(r["AnchorLink"],{to:"#\u4ee3\u7801\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u793a\u4f8b"),a.a.createElement("h3",{id:"\u57fa\u672c\u4f7f\u7528"},a.a.createElement(r["AnchorLink"],{to:"#\u57fa\u672c\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u4f7f\u7528")),a.a.createElement(c["default"],t["auto-complete-demo-01"].previewerProps,a.a.createElement(n,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"api"},a.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"API"),a.a.createElement("h3",{id:"\u52a8\u6001\u5c5e\u6027"},a.a.createElement(r["AnchorLink"],{to:"#\u52a8\u6001\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u52a8\u6001\u5c5e\u6027"),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"type"),a.a.createElement("td",null,"\u8f93\u5165\u63d0\u793a\u65f6\u9650\u5b9aPOI\u7c7b\u578b"),a.a.createElement("td",null,a.a.createElement("code",null,"string")),a.a.createElement("td",null,"--")),a.a.createElement("tr",null,a.a.createElement("td",null,"city"),a.a.createElement("td",null,"\u8f93\u5165\u63d0\u793a\u65f6\u9650\u5b9a\u57ce\u5e02"),a.a.createElement("td",null,a.a.createElement("code",null,"string")),a.a.createElement("td",null,a.a.createElement("code",null,"\u5168\u56fd"))),a.a.createElement("tr",null,a.a.createElement("td",null,"citylimit"),a.a.createElement("td",null,"\u662f\u5426\u5f3a\u5236\u9650\u5236\u5728\u8bbe\u7f6e\u7684\u57ce\u5e02\u5185\u641c\u7d22"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))))),a.a.createElement("h3",{id:"\u9759\u6001\u5c5e\u6027"},a.a.createElement(r["AnchorLink"],{to:"#\u9759\u6001\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u9759\u6001\u5c5e\u6027"),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"datatype"),a.a.createElement("td",null,"\u8fd4\u56de\u7684\u6570\u636e\u7c7b\u578b"),a.a.createElement("td",null,a.a.createElement("code",null,"string")),a.a.createElement("td",null,"--")),a.a.createElement("tr",null,a.a.createElement("td",null,"input"),a.a.createElement("td",null,"\u7528\u6765\u6307\u5b9a\u4e00\u4e2ainput\u8f93\u5165\u6846"),a.a.createElement("td",null,a.a.createElement("code",null,"string")," | ",a.a.createElement("code",null,"HTMLDivElement")),a.a.createElement("td",null,"--")),a.a.createElement("tr",null,a.a.createElement("td",null,"output"),a.a.createElement("td",null,"\u7528\u6765\u6307\u5b9a\u4e00\u4e2a\u5c55\u793a\u63d0\u793a\u7ed3\u679c\u7684\u5bb9\u5668"),a.a.createElement("td",null,a.a.createElement("code",null,"string")," | ",a.a.createElement("code",null,"HTMLDivElement")),a.a.createElement("td",null,"--")),a.a.createElement("tr",null,a.a.createElement("td",null,"outPutDirAuto"),a.a.createElement("td",null,"\u662f\u5426\u907f\u514d\u88ab\u906e\u6321"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"true"))),a.a.createElement("tr",null,a.a.createElement("td",null,"closeResultOnScroll"),a.a.createElement("td",null,"\u9875\u9762\u6eda\u52a8\u65f6\u5173\u95ed\u641c\u7d22\u7ed3\u679c\u5217\u8868"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"true"))),a.a.createElement("tr",null,a.a.createElement("td",null,"lang"),a.a.createElement("td",null,"\u8bbe\u7f6e\u68c0\u7d22\u8bed\u8a00\u7c7b\u578b"),a.a.createElement("td",null,a.a.createElement("code",null,"string")),a.a.createElement("td",null,a.a.createElement("code",null,"zh_cn"))))))))}));t["default"]=e=>{var t=a.a.useContext(r["context"]),n=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(o,{demos:n})}},tkuz:function(e,t,n){}}]);