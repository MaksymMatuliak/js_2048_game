parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n=[[null,null,null,null],[null,null,null,null],[null,null,null,null],[null,null,null,null]],l=n.length,e=2,r=4,u=.1,t=document.querySelector(".message-lose"),a=document.querySelector(".message-win"),o=document.querySelector(".message-start"),s=document.querySelector("tbody").rows,c=document.getElementsByClassName("button start")[0],i=document.querySelector(".game-score"),f=document.querySelector("body"),d=!1,v=!1;function m(){if(v){g();for(var e=0;e<l;e++)for(var r=s[e].cells,u=0;u<l;u++){var o=n[e][u];r[u].innerText=o,r[u].className="field-cell field-cell--".concat(o)}h()||(t.className="message message-lose"),x()&&(a.className="message message-win"),v=!1}}function g(){for(var t=[],a=0;a<l;a++)for(var o=0;o<l;o++)null===n[a][o]&&t.push({rowIndex:a,cellIndex:o});if(0===t.length)return!1;var s=t[Math.floor(Math.random()*t.length)],c=e;return Math.random()<=u&&(c=r),n[s.rowIndex][s.cellIndex]=c,i.innerText=c+parseInt(i.innerText),!0}function w(){var e=function(){for(var e=1;e<l;e++)for(var r=0;r<l;r++){var u=e,t=n[e][r];if(null!==t)for(;null===n[u-1][r]&&(n[u-1][r]=t,n[u][r]=null,v=!0,u-1>0);)u--}};e(),function(){for(var e=1;e<l;e++)for(var r=0;r<l;r++){var u=n[e][r],t=n[e-1][r];null!==u&&t===u&&(n[e-1][r]=2*u,n[e][r]=null,v=!0)}}(),e()}function h(){for(var e=0;e<l;e++){if(n[e].includes(null))return!0;for(var r=0;r<l-1;r++)if(n[e][r]===n[e][r+1])return!0}for(var u=0;u<l-1;u++)for(var t=0;t<l;t++)if(n[u][t]===n[u+1][t])return!0;return!1}function y(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=function(n){for(var e=new Array(l),r=0;r<l;r++)e[r]=new Array(l);for(var u=0;u<l;u++)for(var t=0;t<l;t++)e[u][t]=n[l-t-1][u];return e},u=0;u<e;u++)n=r(n)}function x(){return n.some(function(n){return n.includes(2048)})}function b(){n=[[null,null,null,null],[null,null,null,null],[null,null,null,null],[null,null,null,null]]}f.addEventListener("keydown",function(n){if(d)switch(n.key){case"ArrowUp":w(),m();break;case"ArrowDown":y(2),w(),y(2),m();break;case"ArrowRight":y(3),w(),y(),m();break;case"ArrowLeft":y(),w(),y(3),m()}}),c.addEventListener("click",function(){d&&b(),i.innerText=0,d=!0,v=!0,c.className="button restart",c.innerText="Restart",o.classList.add("hidden"),t.classList.add("hidden"),a.classList.add("hidden"),g(),m()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.cb95f8cc.js.map