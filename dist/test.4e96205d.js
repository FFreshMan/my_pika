parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"K4Xi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n='\n.skin{\n    position: relative;\n}\n.san{\n    position: relative;\n    border: 10px solid;\n    border-color: #000 transparent;\n    border-bottom: none;\n    top:100px;\n    left:50%;\n    height: 0px;\n    width: 0px;\n    margin-left: -10px;\n    z-index: 4;\n}\n.yuan{\n    position: absolute;\n    border  : 1px  ;\n    top: -18px;\n    width: 20px;\n    height: 8px;\n    transform: translateX(-50%);\n    border-radius: 10px 10px 0 0;\n    background: #000;\n}\n.eye{\n    border: 3px solid #000   ;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    left:50%;\n    margin-left: -32px;\n    top:50px;\n    background: #2e2e2e;\n}\n.eye::before{\n    content: "";\n    border: 3px solid #000;\n    background: #fff;\n    width: 25px;\n    height: 25px;\n    display: block;\n    border-radius: 50%;\n    position: absolute;\n    left: 9px;\n    top: 1px;\n}\n.eye.left{\n    transform: translateX(-140px);\n    border-radius: 50%;\n}\n.eye.right{\n    transform: translateX(140px);\n    border-radius: 50%;\n}\n.mouth{\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    top: 70px;\n    left: 50%;\n    margin-left: -100px;\n}\n.mouth .up{\n    position: relative;\n    z-index: 5 ;\n}\n.lip.left{\n    position: absolute;\n    border: 3px solid #000;\n    height: 30px;\n    width: 100px;\n    top: 46px;\n    border-radius: 0 50px 0 50px ;\n    border-color: transparent transparent black transparent;\n    border-right: none; \n    transform: rotate(-15deg);\n    background: #ffe600;\n    \n}\n.lip.right{\n    position: absolute;\n    border: 3px solid #000;\n    height: 30px;\n    width: 100px;\n    right:0px;\n    top: 46px;\n    border-radius: 50px 0 50px 0 ;\n    border-color: transparent transparent black transparent;\n    border-left: none;\n    transform: rotate(15deg);\n    background: #ffe600;\n}\n.mouth .down{\n    left: 50%;\n    position: relative;\n    width: 100%;\n    margin-left: -100px;\n    height: 250px;\n    top: 60px;\n    overflow: hidden;\n   \n}\n.yuan1{\n    border: 3px solid black;\n    width: 180px;\n    position: absolute;\n    bottom:50px;  \n    left: 0;\n    height: 1000px;\n    transform: translateX(6%);\n    border-radius: 100px/395px;\n    background: #a3081d;\n    overflow: hidden;   \n}\n.yuan2{\n    width: 200px;\n    height: 250px;\n    background: #ff485f;\n    position: absolute;\n    left: 50%;\n    margin-left: -100px;\n    bottom:-90px;\n    border-radius: 100%;\n}\n.face.face_left{\n    border: 3px solid ;\n    width: 100px ;\n    height: 100px;\n    border-radius: 100%;\n    position:absolute;\n    left: 50%;\n    top: 174px;\n    background: red;\n    transform: translateX(-231px);\n    z-index: 5;\n}\n.face.face_right{\n    border: 3px solid ;\n    width: 100px ;\n    height: 100px;\n    border-radius: 100%;\n    position:absolute;\n    right: 50%;\n    top: 174px;\n    background: red;\n    transform: translateX(231px);\n    z-index: 5;\n}\n',t=n;exports.default=t;
},{}],"HdJB":[function(require,module,exports) {
"use strict";var e=t(require("./css.js"));function t(e){return e&&e.__esModule?e:{default:e}}var n=1,c=document.querySelector(".demo"),o=document.querySelector(".demo2"),r=function(){n>e.default.length?window.clearInterval(i):(o.innerHTML=e.default.substr(0,n),c.innerText=e.default.substr(0,n),c.scrollTop=c.scrollHeight,n+=1)},u=0,l=function(){return setInterval(r,u)},i=l(),s=function(){window.clearInterval(i)},d=document.querySelector("#fast"),a=document.querySelector("#slow"),f=document.querySelector("#stop"),m=document.querySelector("#start");f.onclick=function(){s()},m.onclick=function(){s(),i=l()},d.onclick=function(){u>99&&(u-=100),s(),i=l()},a.onclick=function(){u+=100,s(),i=l()};
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=/test.4e96205d.js.map