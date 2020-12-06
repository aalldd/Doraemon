// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
var string = "\n/*\u4F60\u597D\uFF0C\u6211\u662F\u4E00\u540D\u524D\u7AEF\u5207\u56FE\u72D7\n\u63A5\u4E0B\u6765\u6211\u8981\u753B\u4E00\u53EA\u54C6\u553B\u7231\u68A6\n\u6CE8\uFF1A\u6B64css\u4EE3\u7801\u7531less\u7F16\u8BD1\u800C\u6765\uFF0C\u56E0\u6B64\u6BD4\u8F83\u5197\u957F*/\n.bg .main {\n  position: relative;\n  width: 275px;\n  height: 315px;\n  margin: auto;\n  margin-top: 30px;\n}\n/*\u6211\u5148\u628A\u7AF9\u873B\u8713\u5B89\u6392\u4E0A \u5E76\u4E14\u8BA9\u5B83\u8F6C\u8D77\u6765*/\n.bg .main .Take-copter {\n  width: 100px;\n  height: 22px;\n  position: absolute;\n  left: 50%;\n  top: 0px;\n  margin-left: -50px;\n}\n.bg .main .Take-copter .copter-g {\n  width: 8px;\n  height: 12px;\n  position: absolute;\n  left: 50%;\n  bottom: -2px;\n  margin-left: -4px;\n  background-color: #fcc136;\n  border: 2px solid #000;\n  z-index: 2;\n}\n.bg .main .Take-copter .copter-j {\n  width: 100px;\n  height: 4px;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  bottom: 6px;\n  left: 0;\n  z-index: 2;\n  animation: twsiting 0.2s infinite linear;\n}\n.bg .main .Take-copter .copter-t {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #d4ecf9;\n  background: linear-gradient(0deg, #d4ecf9 0%, #d4ecf9 50%, #fcc136 50%, #fcc136 100%);\n  position: absolute;\n  left: 50%;\n  margin-left: -10px;\n  top: 2px;\n  z-index: 1;\n}\n/*\u6211\u6765\u753B\u4E00\u4E0B\u673A\u5668\u732B\u7684\u8138*/\n.bg .main .face {\n  position: absolute;\n  left: 50%;\n  top: 20px;\n  transform: translateX(-50%);\n  border: 2px solid #000;\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background-color: #35a1c9;\n  z-index: 6;\n}\n.bg .main .face .facew {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 170px;\n  height: 170px;\n  background-color: #fff;\n  border: 2px solid #000;\n  border-radius: 50%;\n  z-index: 1;\n}\n/*\u6211\u6765\u753B\u4E00\u4E0B\u673A\u5668\u732B\u7684\u5DE6\u773C*/\n.bg .main .face .facew .eyel {\n  border: 1px solid #000;\n  width: 50px;\n  height: 50px;\n  background-color: #fff;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-100%);\n  border-radius: 50%;\n  z-index: 2;\n}\n.bg .main .face .facew .eyel .eyeinner {\n  width: 15px;\n  height: 24px;\n  background-color: #000;\n  border-radius: 60%;\n  position: absolute;\n  left: 26px;\n  top: 16px;\n}\n.bg .main .face .facew .eyel .eyeinner::after {\n  content: \"\";\n  display: block;\n  width: 3px;\n  height: 7px;\n  background-color: #fff;\n  border-radius: 60%;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.bg .main .face .facew .eyer {\n  border: 1px solid #000;\n  width: 50px;\n  height: 50px;\n  background-color: #fff;\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  z-index: 2;\n  overflow: hidden;\n}\n/*\u673A\u5668\u732B\u7684\u53F3\u773C\uFF0C\u54B1\u4EEC\u7684\u673A\u5668\u732B\u7741\u4E00\u53EA\u773C\u95ED\u4E00\u53EA\u773C*/\n.bg .main .face .facew .eyer::after {\n  content: \"\";\n  display: block;\n  width: 24px;\n  height: 24px;\n  border: 4px solid #000;\n  border-radius: 50%;\n  background-color: #fff;\n  position: absolute;\n  left: 50%;\n  bottom: -13px;\n  transform: translateX(-50%);\n}\n/*\u673A\u5668\u732B\u7684\u9F3B\u5B50*/\n.bg .main .face .facew .nose {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  border: 1px solid #000;\n  background-color: #b11735;\n  position: absolute;\n  left: 50%;\n  top: 46.5%;\n  transform: translate(-50%, -100%);\n}\n.bg .main .face .facew .nose::after {\n  content: \"\";\n  display: block;\n  width: 10px;\n  height: 10px;\n  background-color: #fff;\n  position: absolute;\n  left: 8px;\n  top: 8px;\n  border-radius: 50%;\n}\n.bg .main .face .facew .middle {\n  width: 2px;\n  height: 12px;\n  background-color: #000;\n  position: absolute;\n  left: 50%;\n  top: 46%;\n}\n/*\u673A\u5668\u732B\u7684\u5927\u5634\u5DF4 \u91CC\u9762\u6709\u4E00\u4E2A\u5FC3\u5F62\u7684\u820C\u5934*/\n.bg .main .face .facew .mouth {\n  width: 140px;\n  height: 140px;\n  background: #b11635;\n  background: linear-gradient(0deg, #b11635 0%, #b11635 50%, #ffffff 50%, #ffffff 100%);\n  border-radius: 50%;\n  position: absolute;\n  left: 50%;\n  bottom: 8px;\n  margin-left: -70px;\n  z-index: -1;\n  overflow: hidden;\n}\n.bg .main .face .facew .mouth .tongue {\n  width: 40px;\n  height: 120px;\n  position: absolute;\n  bottom: -20px;\n  left: 50%;\n  margin-left: -30px;\n  transform-origin: 50% 100%;\n  transform: rotate(45deg);\n}\n.bg .main .face .facew .mouth .tongue .tongueCommon {\n  width: 100%;\n  height: 40px;\n  background-color: #ca2533;\n}\n.bg .main .face .facew .mouth .tongue .tonguel {\n  position: absolute;\n  bottom: 0;\n  left: -34px;\n  border-radius: 50% 0 0 50%;\n}\n.bg .main .face .facew .mouth .tongue .tonguer {\n  position: absolute;\n  bottom: 34px;\n  left: 0;\n  border-radius: 50% 50% 0 0;\n}\n.bg .main .face .facew .mouth .tongue .tonguem {\n  position: absolute;\n  bottom: 0;\n}\n.bg .main .face .facew .common {\n  width: 60px;\n  height: 2px;\n  background-color: #000;\n  position: absolute;\n}\n/*\u673A\u5668\u732B\u7684\u516D\u6839\u80E1\u987B*/\n.bg .main .face .facew .beard1 {\n  left: -2px;\n  top: 40px;\n  transform: rotate(30deg);\n}\n.bg .main .face .facew .beard2 {\n  left: 0;\n  top: 63px;\n}\n.bg .main .face .facew .beard3 {\n  left: 0;\n  top: 76px;\n  transform: rotate(-10deg);\n}\n.bg .main .face .facew .beard4 {\n  left: 66%;\n  top: 40px;\n  transform: rotate(-30deg);\n}\n.bg .main .face .facew .beard5 {\n  right: 0;\n  top: 63px;\n}\n.bg .main .face .facew .beard6 {\n  right: 0;\n  top: 76px;\n  transform: rotate(10deg);\n}\n/*\u673A\u5668\u732B\u7684\u8EAB\u4F53*/\n.bg .main .body {\n  width: 140px;\n  height: 140px;\n  background-color: #35a1c9;\n  position: absolute;\n  left: 50%;\n  top: 46%;\n  margin-left: -70px;\n  z-index: 2;\n  border-radius: 50%;\n  border: 2px solid #000;\n}\n/*\u673A\u5668\u732B\u6709\u4E2A\u7EA2\u8272\u7684\u56F4\u5DFE*/\n.bg .main .body .scaff {\n  width: 160px;\n  height: 160px;\n  background-color: #a1172e;\n  border-radius: 50%;\n  position: absolute;\n  left: 50%;\n  top: -55%;\n  z-index: 4;\n  margin-left: -80px;\n}\n/*\u673A\u5668\u732B\u7684\u767E\u5B9D\u888B\uFF0C\u91CC\u9762\u662F\u56DB\u6B21\u5143\u7A7A\u95F4\u54E6*/\n.bg .main .body .belly {\n  width: 100px;\n  height: 63px;\n  background-color: #fff;\n  position: absolute;\n  left: 50%;\n  top: 40%;\n  margin-left: -50px;\n  border-radius: 64%;\n  z-index: 3;\n}\n.bg .main .body .belly .pocket {\n  width: 60px;\n  height: 30px;\n  border: 2px solid #000;\n  position: absolute;\n  left: 50%;\n  top: 40%;\n  margin-left: -30px;\n  border-radius: 0 0 50% 50%;\n}\n/*\u673A\u5668\u732B\u7684\u94C3\u94DB*/\n.bg .main .body .bell {\n  width: 30px;\n  height: 30px;\n  border: 2px solid #000;\n  border-radius: 50%;\n  position: absolute;\n  left: 50%;\n  top: 52%;\n  margin-left: -15px;\n  background-color: #f19629;\n  z-index: 5;\n}\n.bg .main .body .bell .bellinner1 {\n  width: 8px;\n  height: 8px;\n  background-color: #000;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%);\n  border-radius: 50%;\n}\n.bg .main .body .bell .bellinner2 {\n  width: 14px;\n  height: 2px;\n  background-color: #000;\n  position: absolute;\n  left: 50%;\n  top: 85%;\n  transform: translateX(-50%);\n}\n/*\u673A\u5668\u732B\u7684\u4E24\u53EA\u624B\u624B*/\n.bg .main .handCommon {\n  width: 40px;\n  height: 75px;\n  border-radius: 70%;\n  background-color: #35a1c9;\n  border: 2px solid #000;\n}\n.bg .main .handl {\n  transform: rotate(-40deg);\n  position: absolute;\n  top: 46%;\n  left: 13%;\n  z-index: 4;\n}\n.bg .main .handl .handql {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: #fff;\n  border: 2px solid #000;\n  position: absolute;\n  left: -30%;\n  top: -30%;\n}\n.bg .main .handr {\n  transform: rotate(40deg);\n  position: absolute;\n  top: 46%;\n  left: 70%;\n  z-index: 4;\n}\n.bg .main .handr .handqr {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: #fff;\n  border: 2px solid #000;\n  position: absolute;\n  left: -10%;\n  top: -30%;\n}\n/*\u673A\u5668\u732B\u7684\u4E24\u53EA\u811A*/\n.bg .main .footCommon {\n  width: 50px;\n  height: 90px;\n  border: 2px solid #000;\n  background-color: #fff;\n  z-index: 1;\n  position: absolute;\n  border-radius: 70%;\n}\n.bg .main .footl {\n  transform: rotate(10deg);\n  left: 35%;\n  bottom: 2%;\n}\n.bg .main .footr {\n  transform: rotate(-10deg);\n  left: 50%;\n  bottom: 2%;\n}\n/*\u6700\u540E\u6211\u4EEC\u8BA9\u673A\u5668\u732B\u98DE\u8D77\u6765*/\n.bg .main{\n  animation: flying 1s infinite  linear;\n}\n/*\u597D\u4E86\uFF0C\u8FD9\u53EA\u54C6\u553B\u7231\u68A6\u9001\u7ED9\u4F60*/\n";
var string2 = '';
var player = {
  n: 0,
  id: undefined,
  time: 100,
  init: function init() {
    demo.innerHTML = string.substr(0, player.n);
    demo2.innerHTML = string.substr(0, player.n);
    player.play();
    player.bindEvents();
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n++;

    if (string[player.n] === '\n') {
      string2 += '<br>';
    } else if (string[player.n] === ' ') {
      // 如果是空格
      string2 += '&nbsp';
    } else {
      // 如果不是回车就照搬
      string2 += string[player.n];
    }

    demo.innerHTML = string2;
    demo2.innerHTML = string.substr(0, player.n);
    demo.scrollTop = demo.scrollHeight;

    if (player.n > string.length - 2) {
      window.clearInterval(player.id);
      return;
    }
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.time = 140;
    player.pause();
    player.play();
  },
  normal: function normal() {
    player.time = 70;
    player.pause();
    player.play();
  },
  fast: function fast() {
    player.time = 0;
    player.pause();
    player.play();
  }
};
player.init();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.45f02175.js.map