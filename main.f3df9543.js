parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n=new Promise(function(n,e){document.addEventListener("mousedown",function(){n()}),setTimeout(function(){e(new Error)},3e3)}),e=new Promise(function(n,e){document.addEventListener("mousedown",function(e){0!==e.button&&2!==e.button||n()})}),t=new Promise(function(n,e){var t=[],c=function(){if(t.includes("leftClick")&&t.includes("rightClick"))return n()};document.addEventListener("mousedown",function(n){0===n.button&&(t.push("leftClick"),c())}),document.addEventListener("mousedown",function(n){2===n.button&&(t.push("rightClick"),c())})}),c=function(n,e,t){document.body.insertAdjacentHTML("beforeend",'\n  <div data-qa="notification" class="'.concat(n,'">\n    ').concat(e," promise was ").concat(t,"\n  </div>\n  "))};n.then(function(){c("success","First","resolved")}).catch(function(){c("warning","First","rejected")}),e.then(function(){c("success","Second","resolved")}).catch(function(){c("warning","Second","rejected")}),t.then(function(){c("success","Third","resolved")}).catch(function(){c("warning","Third","rejected")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.f3df9543.js.map