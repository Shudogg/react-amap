(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[42],{BXDS:function(e,t,n){"use strict";var a=n("1QO0"),l=n.n(a),r=n("bIC1"),c=n.n(r);n("a2dQ");function u(e,t){return E(e)||d(e,t)||m(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(r.push(a.value),t&&r.length===t)break}catch(o){u=!0,l=o}finally{try{c||null==n["return"]||n["return"]()}finally{if(u)throw l}}return r}}function E(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,n=Object(a["useRef"])(),r=Object(a["useState"])(!1),o=u(r,2),m=o[0],i=o[1],d=Object(a["useState"])(!1),E=u(d,2),s=E[0],h=E[1];return Object(a["useEffect"])((function(){var e=n.current,t=c()((function(){i(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":m||void 0,"data-right-folded":s||void 0},l.a.createElement("table",null,t)))};t["a"]=s},MZF8:function(e,t,n){"use strict";var a=n("ogwx");n.d(t,"a",(function(){return a["b"]}));n("VCU9")},a2dQ:function(e,t,n){},igsp:function(e,t,n){"use strict";n.r(t);var a=n("1QO0"),l=n.n(a),r=n("RWgX"),c=n("lMkJ"),u=n("BgHv"),o=n("BXDS"),m=l.a.memo((e=>{var t=e.demos,n=t["rectangle-demo-01"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"rectangle-\u77e9\u5f62"},l.a.createElement(r["AnchorLink"],{to:"#rectangle-\u77e9\u5f62","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Rectangle \u77e9\u5f62"),l.a.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},l.a.createElement(r["AnchorLink"],{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u9700\u8981\u5728\u5730\u56fe\u4e0a\u663e\u793a\u4e00\u4e2a\u77e9\u5f62\u65f6")),l.a.createElement("h2",{id:"\u4ee3\u7801\u793a\u4f8b"},l.a.createElement(r["AnchorLink"],{to:"#\u4ee3\u7801\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u793a\u4f8b"),l.a.createElement("h3",{id:"\u57fa\u672c\u4f7f\u7528"},l.a.createElement(r["AnchorLink"],{to:"#\u57fa\u672c\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u4f7f\u7528")),l.a.createElement(c["default"],t["rectangle-demo-01"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement("h3",{id:"\u52a8\u6001\u5c5e\u6027"},l.a.createElement(r["AnchorLink"],{to:"#\u52a8\u6001\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u52a8\u6001\u5c5e\u6027"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"bounds"),l.a.createElement("td",null,"\u77e9\u5f62\u7684\u8303\u56f4"),l.a.createElement("td",null,l.a.createElement("code",null,"AMap.Bounds")," | ",l.a.createElement("code",null,"[Position, Position]")),l.a.createElement("td",null,"--")),l.a.createElement("tr",null,l.a.createElement("td",null,"draggable"),l.a.createElement("td",null,"\u5706\u5f62\u662f\u5426\u53ef\u62d6\u62fd"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,"--")),l.a.createElement("tr",null,l.a.createElement("td",null,"extData"),l.a.createElement("td",null,"\u7528\u6237\u81ea\u5b9a\u4e49\u5c5e\u6027"),l.a.createElement("td",null,l.a.createElement("code",null,"any")),l.a.createElement("td",null,"--")))),l.a.createElement("h3",{id:"\u9759\u6001\u5c5e\u6027"},l.a.createElement(r["AnchorLink"],{to:"#\u9759\u6001\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u9759\u6001\u5c5e\u6027"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"zIndex"),l.a.createElement("td",null,"\u5c42\u53e0\u987a\u5e8f"),l.a.createElement("td",null,l.a.createElement("code",null,"number")),l.a.createElement("td",null,l.a.createElement("code",null,"10"))),l.a.createElement("tr",null,l.a.createElement("td",null,"bubble"),l.a.createElement("td",null,"\u662f\u5426\u5c06\u8986\u76d6\u7269\u7684\u9f20\u6807\u6216touch\u7b49\u4e8b\u4ef6\u5192\u6ce1\u5230\u5730\u56fe\u4e0a"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))))),l.a.createElement("h3",{id:"\u6269\u5c55\u5c5e\u6027"},l.a.createElement(r["AnchorLink"],{to:"#\u6269\u5c55\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6269\u5c55\u5c5e\u6027"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u5c5e\u6027\u7c7b\u578b"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"style"),l.a.createElement("td",null,"\u52a8\u6001\u5c5e\u6027"),l.a.createElement("td",null,"\u7ed8\u5236\u5706\u5f62\u7684\u5916\u89c2\uff0c\u5404\u4e2a\u5b57\u6bb5\u53d6\u503c\u7c7b\u578b\u53c2\u8003"),l.a.createElement("td",null,l.a.createElement("code",null,"Style")),l.a.createElement("td",null,"--")),l.a.createElement("tr",null,l.a.createElement("td",null,"visible"),l.a.createElement("td",null,"\u52a8\u6001\u5c5e\u6027"),l.a.createElement("td",null,"\u5706\u5f62\u7684\u663e\u793a/\u9690\u85cf\u72b6\u6001"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,l.a.createElement("code",null,"true"))))),l.a.createElement("p",null,"\u7c7b\u578b\u8bf4\u660e\uff1a"),l.a.createElement(u["a"],{code:"type Position = [number, number] | \n  { lng: number; lat: number; } | \n  { longitude: number; latitude: number; } |\n  AMap.LngLat;\n\ninterface Style { \n  /** \u7ebf\u6761\u989c\u8272 */\n  strokeColor?: string;\n  /** \u7ebf\u6761\u900f\u660e\u5ea6 */\n  strokeOpacity?: number;\n  /** \u7ebf\u6761\u5bbd\u5ea6 */\n  strokeWeight?: number;\n  /** \u865a\u7ebf\u6216\u8005\u89c6\u7ebf */\n  strokeStyle?: AMap.StrokeStyle;\n  /** \u865a\u7ebf\u7684\u5206\u6bb5  */\n  strokeDasharray?: [number, number];\n  /** \u586b\u5145\u7684\u989c\u8272 */\n  fillColor?: string;\n  /** \u586b\u5145\u7684\u900f\u660e\u5ea6 */\n  fillOpacity?: number;\n}",lang:"ts"}))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(m,{demos:n})}}}]);