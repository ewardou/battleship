/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "header {\n    grid-column: 1/3;\n    justify-self: center;\n}\nh1 {\n    font-family: 'Bungee Shade', cursive;\n    font-size: 3.5rem;\n    margin-bottom: 0;\n}\np {\n    font-family: sans-serif;\n    font-weight: bold;\n    font-size: 1.5rem;\n    height: 1.5rem;\n    text-align: center;\n    margin-top: 15px;\n    margin-bottom: 0;\n}\n\nbody > div {\n    --size: 350px;\n    width: var(--size);\n    border-top: solid black 1px;\n    border-left: solid black 1px;\n    outline: 2px solid black;\n    height: var(--size);\n    display: grid;\n    position: relative;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\ndiv > p {\n    position: absolute;\n    margin: 0;\n    font-size: 1.2rem;\n    bottom: -30px;\n    right: 0;\n    font-weight: bold;\n    font-family: sans-serif;\n}\nbody > div:first-of-type {\n    justify-self: end;\n}\n\nbody {\n    background-color: aquamarine;\n    display: grid;\n    gap: 50px;\n    row-gap: 30px;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: min-content 1fr;\n    justify-items: start;\n    align-items: center;\n}\n\nbody > div > div {\n    border-right: solid black 1px;\n    background-color: white;\n    border-bottom: solid black 1px;\n}\n\n.available:hover {\n    box-shadow: inset rgb(63, 50, 248) 0px 0px 5px 2px;\n}\n\n.ship {\n    background-color: blue;\n    border: none;\n}\n.miss {\n    background-color: rgb(253, 253, 191);\n    text-align: center;\n}\n.miss::after {\n    position: relative;\n    content: '';\n    display: block;\n    height: 12%;\n    width: 12%;\n    border-radius: 50%;\n    background: black;\n    left: 0;\n    right: 0;\n    top: 40%;\n    bottom: 0;\n    margin: auto;\n}\n.success::before,\n.success::after {\n    position: relative;\n    content: '';\n    background: rgba(0, 0, 0, 0.6);\n    display: inline-block;\n    width: 5%;\n    height: 155%;\n    transform: rotate(-45deg);\n    left: 0;\n    right: 0;\n    top: -10px;\n    bottom: 0;\n    margin: auto;\n}\n\n.success::after {\n    transform: rotate(45deg);\n}\n\n.ship {\n    background-color: blue;\n    border: none;\n    outline: none;\n}\n\n.success {\n    background-color: red;\n    overflow: hidden;\n    text-align: center;\n}\n\n.hide {\n    display: none;\n    transform: rotate(90deg);\n}\n\n.ships-container {\n    background-color: white;\n    outline: 2px black solid;\n    display: grid;\n    gap: 15px;\n    width: fit-content;\n    height: auto;\n    padding: 15px;\n    box-sizing: border-box;\n    grid-template-columns: min-content min-content min-content;\n    grid-template-rows: min-content min-content min-content;\n}\n.ships-container button {\n    padding: 10px;\n    width: fit-content;\n    justify-self: center;\n    background-color: black;\n    color: white;\n    font-weight: bold;\n    border: none;\n    border-radius: 10px;\n    font-size: 1rem;\n}\n.ships-container button:hover {\n    background-color: gray;\n}\n.ships-container button:first-of-type {\n    grid-column: 1/2;\n}\n.ships-container button:nth-of-type(2) {\n    grid-column: 2/4;\n}\n\nbody > button {\n    grid-column: 1/3;\n    justify-self: center;\n    border-radius: 50%;\n    width: 65px;\n    height: 65px;\n    background-color: white;\n    border: black solid 2px;\n}\n\nbody > button:hover {\n    background-color: lightgray;\n}\n\nbody > button:active {\n    background-color: white;\n    transform: translate(0px, 4px);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,gBAAgB;IAChB,oBAAoB;AACxB;AACA;IACI,oCAAoC;IACpC,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,iBAAiB;IACjB,cAAc;IACd,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,2BAA2B;IAC3B,4BAA4B;IAC5B,wBAAwB;IACxB,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,sCAAsC;IACtC,mCAAmC;AACvC;AACA;IACI,kBAAkB;IAClB,SAAS;IACT,iBAAiB;IACjB,aAAa;IACb,QAAQ;IACR,iBAAiB;IACjB,uBAAuB;AAC3B;AACA;IACI,iBAAiB;AACrB;;AAEA;IACI,4BAA4B;IAC5B,aAAa;IACb,SAAS;IACT,aAAa;IACb,8BAA8B;IAC9B,mCAAmC;IACnC,oBAAoB;IACpB,mBAAmB;AACvB;;AAEA;IACI,6BAA6B;IAC7B,uBAAuB;IACvB,8BAA8B;AAClC;;AAEA;IACI,kDAAkD;AACtD;;AAEA;IACI,sBAAsB;IACtB,YAAY;AAChB;AACA;IACI,oCAAoC;IACpC,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,cAAc;IACd,WAAW;IACX,UAAU;IACV,kBAAkB;IAClB,iBAAiB;IACjB,OAAO;IACP,QAAQ;IACR,QAAQ;IACR,SAAS;IACT,YAAY;AAChB;AACA;;IAEI,kBAAkB;IAClB,WAAW;IACX,8BAA8B;IAC9B,qBAAqB;IACrB,SAAS;IACT,YAAY;IACZ,yBAAyB;IACzB,OAAO;IACP,QAAQ;IACR,UAAU;IACV,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,wBAAwB;AAC5B;;AAEA;IACI,uBAAuB;IACvB,wBAAwB;IACxB,aAAa;IACb,SAAS;IACT,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,0DAA0D;IAC1D,uDAAuD;AAC3D;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,oBAAoB;IACpB,uBAAuB;IACvB,YAAY;IACZ,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,oBAAoB;IACpB,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,uBAAuB;IACvB,8BAA8B;AAClC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap');\n\nheader {\n    grid-column: 1/3;\n    justify-self: center;\n}\nh1 {\n    font-family: 'Bungee Shade', cursive;\n    font-size: 3.5rem;\n    margin-bottom: 0;\n}\np {\n    font-family: sans-serif;\n    font-weight: bold;\n    font-size: 1.5rem;\n    height: 1.5rem;\n    text-align: center;\n    margin-top: 15px;\n    margin-bottom: 0;\n}\n\nbody > div {\n    --size: 350px;\n    width: var(--size);\n    border-top: solid black 1px;\n    border-left: solid black 1px;\n    outline: 2px solid black;\n    height: var(--size);\n    display: grid;\n    position: relative;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\ndiv > p {\n    position: absolute;\n    margin: 0;\n    font-size: 1.2rem;\n    bottom: -30px;\n    right: 0;\n    font-weight: bold;\n    font-family: sans-serif;\n}\nbody > div:first-of-type {\n    justify-self: end;\n}\n\nbody {\n    background-color: aquamarine;\n    display: grid;\n    gap: 50px;\n    row-gap: 30px;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: min-content 1fr;\n    justify-items: start;\n    align-items: center;\n}\n\nbody > div > div {\n    border-right: solid black 1px;\n    background-color: white;\n    border-bottom: solid black 1px;\n}\n\n.available:hover {\n    box-shadow: inset rgb(63, 50, 248) 0px 0px 5px 2px;\n}\n\n.ship {\n    background-color: blue;\n    border: none;\n}\n.miss {\n    background-color: rgb(253, 253, 191);\n    text-align: center;\n}\n.miss::after {\n    position: relative;\n    content: '';\n    display: block;\n    height: 12%;\n    width: 12%;\n    border-radius: 50%;\n    background: black;\n    left: 0;\n    right: 0;\n    top: 40%;\n    bottom: 0;\n    margin: auto;\n}\n.success::before,\n.success::after {\n    position: relative;\n    content: '';\n    background: rgba(0, 0, 0, 0.6);\n    display: inline-block;\n    width: 5%;\n    height: 155%;\n    transform: rotate(-45deg);\n    left: 0;\n    right: 0;\n    top: -10px;\n    bottom: 0;\n    margin: auto;\n}\n\n.success::after {\n    transform: rotate(45deg);\n}\n\n.ship {\n    background-color: blue;\n    border: none;\n    outline: none;\n}\n\n.success {\n    background-color: red;\n    overflow: hidden;\n    text-align: center;\n}\n\n.hide {\n    display: none;\n    transform: rotate(90deg);\n}\n\n.ships-container {\n    background-color: white;\n    outline: 2px black solid;\n    display: grid;\n    gap: 15px;\n    width: fit-content;\n    height: auto;\n    padding: 15px;\n    box-sizing: border-box;\n    grid-template-columns: min-content min-content min-content;\n    grid-template-rows: min-content min-content min-content;\n}\n.ships-container button {\n    padding: 10px;\n    width: fit-content;\n    justify-self: center;\n    background-color: black;\n    color: white;\n    font-weight: bold;\n    border: none;\n    border-radius: 10px;\n    font-size: 1rem;\n}\n.ships-container button:hover {\n    background-color: gray;\n}\n.ships-container button:first-of-type {\n    grid-column: 1/2;\n}\n.ships-container button:nth-of-type(2) {\n    grid-column: 2/4;\n}\n\nbody > button {\n    grid-column: 1/3;\n    justify-self: center;\n    border-radius: 50%;\n    width: 65px;\n    height: 65px;\n    background-color: white;\n    border: black solid 2px;\n}\n\nbody > button:hover {\n    background-color: lightgray;\n}\n\nbody > button:active {\n    background-color: white;\n    transform: translate(0px, 4px);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/battleship.js":
/*!***************************!*\
  !*** ./src/battleship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard),
/* harmony export */   "Player": () => (/* binding */ Player),
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(length) {
    if (length < 2 || !length || length > 5) {
        throw new Error('Length must be greater than 0 and less than 6');
    }
    let sunk = false;
    let numberOfHits = 0;
    function isSunk() {
        sunk = numberOfHits >= length;
        return sunk;
    }
    function hit() {
        if (sunk) return 'The ship has already sunk';
        numberOfHits += 1;
        isSunk();
        return numberOfHits;
    }

    return {
        hit,
        isSunk,
    };
}

function Gameboard() {
    const availableCoordinates = [];
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            availableCoordinates.push(JSON.stringify([i, j]));
        }
    }
    const shipSurroundCoordinates = [];

    function removeCoordinates(...coordinates) {
        while (coordinates.length !== 0) {
            const index = availableCoordinates.indexOf(
                JSON.stringify(coordinates[0])
            );
            availableCoordinates.splice(index, 1);
            coordinates.shift();
        }
    }

    function checkAvailabilityForPlacing(...coordinates) {
        coordinates.forEach((element) => {
            if (
                !availableCoordinates.includes(JSON.stringify(element)) ||
                shipSurroundCoordinates.includes(JSON.stringify(element))
            ) {
                throw new Error(
                    `Coordinate ${JSON.stringify(element)} is already occupied`
                );
            }
        });
    }

    const currentShips = [];

    function checkBoardLimits(coordinate) {
        if (
            coordinate[0] > 9 ||
            coordinate[1] > 9 ||
            coordinate[0] < 0 ||
            coordinate[1] < 0
        ) {
            throw new Error('Outside of board limits');
        }
    }
    function getAdjacentCoordinates(cell, recordArray, diagonals = false) {
        let array = [];
        if (cell[0] >= 0 && cell[0] < 9) {
            array.push([cell[0] + 1, cell[1]]);
        }
        if (cell[0] <= 9 && cell[0] > 0) {
            array.push([cell[0] - 1, cell[1]]);
        }
        if (cell[1] >= 0 && cell[1] < 9) {
            array.push([cell[0], cell[1] + 1]);
        }
        if (cell[1] <= 9 && cell[1] > 0) {
            array.push([cell[0], cell[1] - 1]);
        }

        if (diagonals) {
            if (cell[0] <= 9 && cell[0] > 0 && cell[1] <= 9 && cell[1] > 0) {
                array.push([cell[0] - 1, cell[1] - 1]);
            }
            if (cell[0] <= 9 && cell[0] > 0 && cell[1] >= 0 && cell[1] < 9) {
                array.push([cell[0] - 1, cell[1] + 1]);
            }
            if (cell[0] >= 0 && cell[0] < 9 && cell[1] <= 9 && cell[1] > 0) {
                array.push([cell[0] + 1, cell[1] - 1]);
            }
            if (cell[0] >= 0 && cell[0] < 9 && cell[1] >= 0 && cell[1] < 9) {
                array.push([cell[0] + 1, cell[1] + 1]);
            }
        }

        array = array.filter(
            (pair) => !recordArray.includes(JSON.stringify(pair))
        );
        return array;
    }

    function placeShip(startingCoordinate, length, isHorizontal = true) {
        const coordinates = [];
        for (let i = 0; i < length; i++) {
            let newCoordinate;
            if (isHorizontal) {
                newCoordinate = [startingCoordinate[0] + i].concat([
                    startingCoordinate[1],
                ]);
            } else {
                newCoordinate = [startingCoordinate[0]].concat([
                    startingCoordinate[1] + i,
                ]);
            }
            checkBoardLimits(newCoordinate);
            coordinates.push(newCoordinate);
        }
        checkAvailabilityForPlacing(...coordinates);
        const newShip = Ship(length);
        newShip.coordinates = coordinates;
        removeCoordinates(...coordinates);
        coordinates.forEach((pair) => {
            const surrounding = getAdjacentCoordinates(
                pair,
                shipSurroundCoordinates,
                true
            );
            surrounding.forEach((sub) => {
                shipSurroundCoordinates.push(JSON.stringify(sub));
            });
        });
        currentShips.push(newShip);
        return newShip;
    }

    const missedShots = [];
    const successfulShots = [];

    function receiveAttack(coordinates) {
        checkBoardLimits(coordinates);
        if (availableCoordinates.includes(JSON.stringify(coordinates))) {
            missedShots.push(JSON.stringify(coordinates));
            removeCoordinates(coordinates);
            return missedShots;
        }
        if (
            missedShots.includes(JSON.stringify(coordinates)) ||
            successfulShots.includes(JSON.stringify(coordinates))
        ) {
            throw new Error('Shot already taken at this coordinate');
        }
        let value;
        currentShips.forEach((obj) => {
            obj.coordinates.forEach((shipCoordinate) => {
                if (
                    JSON.stringify(shipCoordinate) ===
                    JSON.stringify(coordinates)
                ) {
                    value = obj.hit();
                    successfulShots.push(JSON.stringify(coordinates));
                }
            });
        });
        if (value) return value;
    }

    function allShipsSunk() {
        return currentShips.every((ship) => ship.isSunk());
    }

    function getBoardInformation() {
        return {
            currentShips,
            missedShots,
            successfulShots,
        };
    }

    return {
        placeShip,
        receiveAttack,
        allShipsSunk,
        getBoardInformation,
        getAdjacentCoordinates,
    };
}

function Player(name, isCPU = false) {
    const gameboard = Gameboard();
    const previousAttacks = [];
    function attackEnemy(enemy, coordinate) {
        enemy.gameboard.receiveAttack(coordinate);
        previousAttacks.push(JSON.stringify(coordinate));
        return 'Enemy attacked';
    }
    function generateRandomCoordinate() {
        return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    }

    function placeShipRandomly() {
        try {
            if (gameboard.getBoardInformation().currentShips.length >= 5) {
                return;
            }
            const randomCoordinate = generateRandomCoordinate();
            let randomLength = Math.floor(Math.random() * 6);
            while (randomLength < 2) {
                randomLength = Math.floor(Math.random() * 6);
            }
            const randomDirection = Math.floor(Math.random() * 2) === 0;
            gameboard.placeShip(
                randomCoordinate,
                randomLength,
                randomDirection
            );
            placeShipRandomly();
        } catch {
            placeShipRandomly();
        }
    }

    let previousLastHit = null;
    let lastHit;
    function computerAttack(enemy) {
        function getAdjacentCell(cell) {
            const array = gameboard.getAdjacentCoordinates(
                cell,
                previousAttacks
            );
            const option = Math.floor(Math.random() * array.length);
            return array[option];
        }

        function attackAdjacentCell() {
            let newCoordinate;
            if (lastHit) {
                newCoordinate = getAdjacentCell(lastHit);
            }
            if (newCoordinate === [] || !newCoordinate) {
                lastHit = previousLastHit;
                newCoordinate = generateRandomCoordinate();
                while (
                    previousAttacks.includes(JSON.stringify(newCoordinate))
                ) {
                    newCoordinate = generateRandomCoordinate();
                }
            }
            attackEnemy(enemy, newCoordinate);
            if (
                enemy.gameboard
                    .getBoardInformation()
                    .successfulShots.includes(JSON.stringify(newCoordinate))
            ) {
                previousLastHit = lastHit;
                lastHit = newCoordinate;
            }
            return 'Computer attack';
        }
        return attackAdjacentCell();
    }

    function shipsLeft() {
        const { currentShips } = gameboard.getBoardInformation();
        let count = 0;
        for (let i = 0; i < currentShips.length; i++) {
            if (currentShips[i].isSunk()) {
                count += 1;
            }
        }
        return currentShips.length - count;
    }

    if (isCPU) {
        return {
            name,
            gameboard,
            computerAttack,
            shipsLeft,
            placeShipRandomly,
        };
    }
    return {
        name,
        gameboard,
        attackEnemy,
        shipsLeft,
        placeShipRandomly,
    };
}




/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBoard": () => (/* binding */ createBoard),
/* harmony export */   "createRestartButton": () => (/* binding */ createRestartButton),
/* harmony export */   "createShipDivs": () => (/* binding */ createShipDivs),
/* harmony export */   "renderGameboard": () => (/* binding */ renderGameboard)
/* harmony export */ });
/* harmony import */ var _reset_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.svg */ "./src/reset.svg");


function createBoard(player) {
    const container = document.createElement('div');
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.setAttribute('data-coordinate', `[${j},${i}]`);
            if (player.name === 'cpu') {
                cell.classList.add('available');
            }
            container.appendChild(cell);
        }
    }
    container.classList.add(player.name);
    return container;
}

function renderGameboard(player) {
    const board = player.gameboard.getBoardInformation();
    board.missedShots.forEach((pair) => {
        const cell = document.querySelector(
            `.${player.name}>div[data-coordinate="${pair}"]`
        );
        cell.classList.add('miss');
    });
    board.successfulShots.forEach((pair) => {
        const cell = document.querySelector(
            `.${player.name}>div[data-coordinate="${pair}"]`
        );
        cell.classList.add('success');
    });
    if (player.name !== 'cpu') {
        board.currentShips.forEach((ship) => {
            ship.coordinates.forEach((pair) => {
                const cell = document.querySelector(
                    `.${player.name}>div[data-coordinate="${JSON.stringify(
                        pair
                    )}"]`
                );
                cell.classList.add('ship');
            });
        });
    }
}

function rotate() {
    const oneDiv = document.querySelector('.ships-container>div');
    const allDivs = document.querySelectorAll('.ships-container>div');
    const [, direction] = JSON.parse(oneDiv.getAttribute('data-info'));
    if (direction) {
        allDivs.forEach((div) => {
            const [length] = JSON.parse(div.getAttribute('data-info'));
            div.setAttribute('data-info', `[${length}, false]`);
            div.setAttribute('style', `width:35px;height:${length * 35}px`);
        });
    } else {
        allDivs.forEach((div) => {
            const [length] = JSON.parse(div.getAttribute('data-info'));
            div.setAttribute('data-info', `[${length}, true]`);
            div.setAttribute('style', `height:35px;width:${length * 35}px`);
        });
    }
}
function dragStart(e) {
    e.dataTransfer.clearData();
    e.dataTransfer.setData('text/plain', e.target.getAttribute('data-info'));
    setTimeout(() => {
        this.classList.add('hide');
    }, 0);
}
function dragEnd() {
    this.classList.remove('hide');
}

function createShipDivs(player, fn) {
    const container = document.createElement('div');
    container.classList.add('ships-container');
    const rotateButton = document.createElement('button');
    rotateButton.textContent = 'Rotate';
    rotateButton.addEventListener('click', rotate);
    const placeRandomlyButton = document.createElement('button');
    placeRandomlyButton.textContent = 'Place ships randomly';
    placeRandomlyButton.addEventListener('click', () => {
        player.placeShipRandomly();
        renderGameboard(player);
        fn();
    });
    container.append(rotateButton, placeRandomlyButton);
    const shipDivs = [];
    for (let i = 1; i <= 5; i++) {
        const div = document.createElement('div');
        let length = i;
        if (i < 2) {
            length = 3;
        }
        div.classList.add('ship');
        div.setAttribute('draggable', 'true');
        div.setAttribute('data-info', `[${length}, true]`);
        div.setAttribute('style', `height:35px;width:${length * 35}px`);
        div.addEventListener('dragstart', dragStart);
        div.addEventListener('dragend', dragEnd);
        shipDivs.push(div);
    }
    container.append(...shipDivs);
    return container;
}

function createRestartButton() {
    const button = document.createElement('button');
    const img = document.createElement('img');
    img.setAttribute('src', _reset_svg__WEBPACK_IMPORTED_MODULE_0__);
    button.append(img);
    button.addEventListener('click', () => {
        location.reload();
    });
    return button;
}




/***/ }),

/***/ "./src/reset.svg":
/*!***********************!*\
  !*** ./src/reset.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f9c56dca8ae8b336f6f.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameLoop": () => (/* binding */ gameLoop)
/* harmony export */ });
/* harmony import */ var _battleship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battleship */ "./src/battleship.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");




const player1 = (0,_battleship__WEBPACK_IMPORTED_MODULE_0__.Player)('player1');
const cpu = (0,_battleship__WEBPACK_IMPORTED_MODULE_0__.Player)('cpu', true);
cpu.placeShipRandomly();
const para = document.createElement('p');
para.textContent = `Ships left: ${cpu.shipsLeft()}`;
const message = document.querySelector('header>p');

function gameLoop(player, computer, coordinate) {
    if (computer.gameboard.allShipsSunk() || player.gameboard.allShipsSunk()) {
        throw new Error('Game already ended');
    }
    player.attackEnemy(computer, coordinate);
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.renderGameboard)(cpu);
    para.textContent = `Ships left: ${cpu.shipsLeft()}`;
    if (computer.gameboard.allShipsSunk()) {
        message.textContent = 'Player won';
        document.body.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_2__.createRestartButton)());
    }
    computer.computerAttack(player);
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.renderGameboard)(player1);
    if (player.gameboard.allShipsSunk()) {
        message.textContent = 'Cpu won';
        document.body.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_2__.createRestartButton)());
    }
}
const board = (0,_dom__WEBPACK_IMPORTED_MODULE_2__.createBoard)(player1);
document.body.append(board);
(0,_dom__WEBPACK_IMPORTED_MODULE_2__.renderGameboard)(player1);

function addCPUCellsListener() {
    const cpuCells = document.querySelectorAll('.cpu>div[data-coordinate]');
    cpuCells.forEach((cell) => {
        cell.addEventListener('click', (event) => {
            const coordinate = JSON.parse(
                event.target.getAttribute('data-coordinate')
            );
            gameLoop(player1, cpu, coordinate);
            cell.classList.remove('available');
        });
    });
}

function removeShipsDiv() {
    if (player1.shipsLeft() >= 5) {
        document.querySelector('.ships-container').remove();
        const cpuBoard = (0,_dom__WEBPACK_IMPORTED_MODULE_2__.createBoard)(cpu);
        cpuBoard.append(para);
        message.textContent = '';
        document.body.append(cpuBoard);
        (0,_dom__WEBPACK_IMPORTED_MODULE_2__.renderGameboard)(cpu);
        addCPUCellsListener();
    }
}
const playerCells = document.querySelectorAll('.player1>div[data-coordinate]');
const dragOver = function (e) {
    e.preventDefault();
};
const drop = function (e) {
    const info = e.dataTransfer.getData('text/plain');
    const length = JSON.parse(info)[0];
    const state = JSON.parse(info)[1];
    const startCoordinate = e.target.getAttribute('data-coordinate');
    player1.gameboard.placeShip(JSON.parse(startCoordinate), length, state);
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.renderGameboard)(player1);
    document.querySelector(`[data-info="${info}"`).remove();
    removeShipsDiv();
};
playerCells.forEach((cell) => {
    cell.addEventListener('dragover', dragOver);
    cell.addEventListener('drop', drop);
});

document.body.append((0,_dom__WEBPACK_IMPORTED_MODULE_2__.createShipDivs)(player1, removeShipsDiv));



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQztBQUNqQjtBQU1OOztBQUVmLGdCQUFnQixtREFBTTtBQUN0QixZQUFZLG1EQUFNO0FBQ2xCO0FBQ0E7QUFDQSxrQ0FBa0MsZ0JBQWdCO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFlO0FBQ25CLHNDQUFzQyxnQkFBZ0I7QUFDdEQ7QUFDQTtBQUNBLGtDQUFrQyx5REFBbUI7QUFDckQ7QUFDQTtBQUNBLElBQUkscURBQWU7QUFDbkI7QUFDQTtBQUNBLGtDQUFrQyx5REFBbUI7QUFDckQ7QUFDQTtBQUNBLGNBQWMsaURBQVc7QUFDekI7QUFDQSxxREFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpREFBVztBQUNwQztBQUNBO0FBQ0E7QUFDQSxRQUFRLHFEQUFlO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBZTtBQUNuQiwwQ0FBMEMsS0FBSztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxxQkFBcUIsb0RBQWM7O0FBRWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYmF0dGxlc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CdW5nZWUrU2hhZGUmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbmgxIHtcXG4gICAgZm9udC1mYW1pbHk6ICdCdW5nZWUgU2hhZGUnLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxucCB7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbmJvZHkgPiBkaXYge1xcbiAgICAtLXNpemU6IDM1MHB4O1xcbiAgICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuZGl2ID4gcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYm90dG9tOiAtMzBweDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuYm9keSA+IGRpdjpmaXJzdC1vZi10eXBlIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIHJvdy1nYXA6IDMwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5ib2R5ID4gZGl2ID4gZGl2IHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCBibGFjayAxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCBibGFjayAxcHg7XFxufVxcblxcbi5hdmFpbGFibGU6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiBpbnNldCByZ2IoNjMsIDUwLCAyNDgpIDBweCAwcHggNXB4IDJweDtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MywgMjUzLCAxOTEpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5taXNzOjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDEyJTtcXG4gICAgd2lkdGg6IDEyJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogNDAlO1xcbiAgICBib3R0b206IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuLnN1Y2Nlc3M6OmJlZm9yZSxcXG4uc3VjY2Vzczo6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDUlO1xcbiAgICBoZWlnaHQ6IDE1NSU7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IC0xMHB4O1xcbiAgICBib3R0b206IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLnN1Y2Nlc3M6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnN1Y2Nlc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5zaGlwcy1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgb3V0bGluZTogMnB4IGJsYWNrIHNvbGlkO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbn1cXG4uc2hpcHMtY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLnNoaXBzLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG4uc2hpcHMtY29udGFpbmVyIGJ1dHRvbjpmaXJzdC1vZi10eXBlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG59XFxuLnNoaXBzLWNvbnRhaW5lciBidXR0b246bnRoLW9mLXR5cGUoMikge1xcbiAgICBncmlkLWNvbHVtbjogMi80O1xcbn1cXG5cXG5ib2R5ID4gYnV0dG9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDY1cHg7XFxuICAgIGhlaWdodDogNjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogYmxhY2sgc29saWQgMnB4O1xcbn1cXG5cXG5ib2R5ID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG5ib2R5ID4gYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDRweCk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsU0FBUztJQUNULGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUNBQW1DO0lBQ25DLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtEQUFrRDtBQUN0RDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsT0FBTztJQUNQLFFBQVE7SUFDUixRQUFRO0lBQ1IsU0FBUztJQUNULFlBQVk7QUFDaEI7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsU0FBUztJQUNULFlBQVk7SUFDWix5QkFBeUI7SUFDekIsT0FBTztJQUNQLFFBQVE7SUFDUixVQUFVO0lBQ1YsU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDBEQUEwRDtJQUMxRCx1REFBdUQ7QUFDM0Q7QUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qiw4QkFBOEI7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QnVuZ2VlK1NoYWRlJmRpc3BsYXk9c3dhcCcpO1xcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5oMSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQnVuZ2VlIFNoYWRlJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbnAge1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG5ib2R5ID4gZGl2IHtcXG4gICAgLS1zaXplOiAzNTBweDtcXG4gICAgd2lkdGg6IHZhcigtLXNpemUpO1xcbiAgICBib3JkZXItdG9wOiBzb2xpZCBibGFjayAxcHg7XFxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCBibGFjayAxcHg7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcXG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcbmRpdiA+IHAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJvdHRvbTogLTMwcHg7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcbmJvZHkgPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICByb3ctZ2FwOiAzMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYm9keSA+IGRpdiA+IGRpdiB7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgYmxhY2sgMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgYmxhY2sgMXB4O1xcbn1cXG5cXG4uYXZhaWxhYmxlOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgcmdiKDYzLCA1MCwgMjQ4KSAwcHggMHB4IDVweCAycHg7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTMsIDI1MywgMTkxKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubWlzczo6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiAxMiU7XFxuICAgIHdpZHRoOiAxMiU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDQwJTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcbi5zdWNjZXNzOjpiZWZvcmUsXFxuLnN1Y2Nlc3M6OmFmdGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA1JTtcXG4gICAgaGVpZ2h0OiAxNTUlO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAtMTBweDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5zdWNjZXNzOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5zdWNjZXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uc2hpcHMtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG91dGxpbmU6IDJweCBibGFjayBzb2xpZDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG59XFxuLnNoaXBzLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcbi5zaGlwcy1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuLnNoaXBzLWNvbnRhaW5lciBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxufVxcbi5zaGlwcy1jb250YWluZXIgYnV0dG9uOm50aC1vZi10eXBlKDIpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvNDtcXG59XFxuXFxuYm9keSA+IGJ1dHRvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiA2NXB4O1xcbiAgICBoZWlnaHQ6IDY1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDJweDtcXG59XFxuXFxuYm9keSA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuYm9keSA+IGJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCA0cHgpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBTaGlwKGxlbmd0aCkge1xuICAgIGlmIChsZW5ndGggPCAyIHx8ICFsZW5ndGggfHwgbGVuZ3RoID4gNSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xlbmd0aCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwIGFuZCBsZXNzIHRoYW4gNicpO1xuICAgIH1cbiAgICBsZXQgc3VuayA9IGZhbHNlO1xuICAgIGxldCBudW1iZXJPZkhpdHMgPSAwO1xuICAgIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICAgICAgc3VuayA9IG51bWJlck9mSGl0cyA+PSBsZW5ndGg7XG4gICAgICAgIHJldHVybiBzdW5rO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgICAgIGlmIChzdW5rKSByZXR1cm4gJ1RoZSBzaGlwIGhhcyBhbHJlYWR5IHN1bmsnO1xuICAgICAgICBudW1iZXJPZkhpdHMgKz0gMTtcbiAgICAgICAgaXNTdW5rKCk7XG4gICAgICAgIHJldHVybiBudW1iZXJPZkhpdHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGl0LFxuICAgICAgICBpc1N1bmssXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gR2FtZWJvYXJkKCkge1xuICAgIGNvbnN0IGF2YWlsYWJsZUNvb3JkaW5hdGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgYXZhaWxhYmxlQ29vcmRpbmF0ZXMucHVzaChKU09OLnN0cmluZ2lmeShbaSwgal0pKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBzaGlwU3Vycm91bmRDb29yZGluYXRlcyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ29vcmRpbmF0ZXMoLi4uY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgd2hpbGUgKGNvb3JkaW5hdGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBhdmFpbGFibGVDb29yZGluYXRlcy5pbmRleE9mKFxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGVzWzBdKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGF2YWlsYWJsZUNvb3JkaW5hdGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBjb29yZGluYXRlcy5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tBdmFpbGFiaWxpdHlGb3JQbGFjaW5nKC4uLmNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAhYXZhaWxhYmxlQ29vcmRpbmF0ZXMuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoZWxlbWVudCkpIHx8XG4gICAgICAgICAgICAgICAgc2hpcFN1cnJvdW5kQ29vcmRpbmF0ZXMuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoZWxlbWVudCkpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIGBDb29yZGluYXRlICR7SlNPTi5zdHJpbmdpZnkoZWxlbWVudCl9IGlzIGFscmVhZHkgb2NjdXBpZWRgXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudFNoaXBzID0gW107XG5cbiAgICBmdW5jdGlvbiBjaGVja0JvYXJkTGltaXRzKGNvb3JkaW5hdGUpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgY29vcmRpbmF0ZVswXSA+IDkgfHxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVbMV0gPiA5IHx8XG4gICAgICAgICAgICBjb29yZGluYXRlWzBdIDwgMCB8fFxuICAgICAgICAgICAgY29vcmRpbmF0ZVsxXSA8IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ091dHNpZGUgb2YgYm9hcmQgbGltaXRzJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0QWRqYWNlbnRDb29yZGluYXRlcyhjZWxsLCByZWNvcmRBcnJheSwgZGlhZ29uYWxzID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IGFycmF5ID0gW107XG4gICAgICAgIGlmIChjZWxsWzBdID49IDAgJiYgY2VsbFswXSA8IDkpIHtcbiAgICAgICAgICAgIGFycmF5LnB1c2goW2NlbGxbMF0gKyAxLCBjZWxsWzFdXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNlbGxbMF0gPD0gOSAmJiBjZWxsWzBdID4gMCkge1xuICAgICAgICAgICAgYXJyYXkucHVzaChbY2VsbFswXSAtIDEsIGNlbGxbMV1dKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2VsbFsxXSA+PSAwICYmIGNlbGxbMV0gPCA5KSB7XG4gICAgICAgICAgICBhcnJheS5wdXNoKFtjZWxsWzBdLCBjZWxsWzFdICsgMV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZWxsWzFdIDw9IDkgJiYgY2VsbFsxXSA+IDApIHtcbiAgICAgICAgICAgIGFycmF5LnB1c2goW2NlbGxbMF0sIGNlbGxbMV0gLSAxXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlhZ29uYWxzKSB7XG4gICAgICAgICAgICBpZiAoY2VsbFswXSA8PSA5ICYmIGNlbGxbMF0gPiAwICYmIGNlbGxbMV0gPD0gOSAmJiBjZWxsWzFdID4gMCkge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goW2NlbGxbMF0gLSAxLCBjZWxsWzFdIC0gMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNlbGxbMF0gPD0gOSAmJiBjZWxsWzBdID4gMCAmJiBjZWxsWzFdID49IDAgJiYgY2VsbFsxXSA8IDkpIHtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKFtjZWxsWzBdIC0gMSwgY2VsbFsxXSArIDFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjZWxsWzBdID49IDAgJiYgY2VsbFswXSA8IDkgJiYgY2VsbFsxXSA8PSA5ICYmIGNlbGxbMV0gPiAwKSB7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChbY2VsbFswXSArIDEsIGNlbGxbMV0gLSAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2VsbFswXSA+PSAwICYmIGNlbGxbMF0gPCA5ICYmIGNlbGxbMV0gPj0gMCAmJiBjZWxsWzFdIDwgOSkge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goW2NlbGxbMF0gKyAxLCBjZWxsWzFdICsgMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYXJyYXkgPSBhcnJheS5maWx0ZXIoXG4gICAgICAgICAgICAocGFpcikgPT4gIXJlY29yZEFycmF5LmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KHBhaXIpKVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHN0YXJ0aW5nQ29vcmRpbmF0ZSwgbGVuZ3RoLCBpc0hvcml6b250YWwgPSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBuZXdDb29yZGluYXRlO1xuICAgICAgICAgICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICAgIG5ld0Nvb3JkaW5hdGUgPSBbc3RhcnRpbmdDb29yZGluYXRlWzBdICsgaV0uY29uY2F0KFtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRpbmdDb29yZGluYXRlWzFdLFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdDb29yZGluYXRlID0gW3N0YXJ0aW5nQ29vcmRpbmF0ZVswXV0uY29uY2F0KFtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRpbmdDb29yZGluYXRlWzFdICsgaSxcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoZWNrQm9hcmRMaW1pdHMobmV3Q29vcmRpbmF0ZSk7XG4gICAgICAgICAgICBjb29yZGluYXRlcy5wdXNoKG5ld0Nvb3JkaW5hdGUpO1xuICAgICAgICB9XG4gICAgICAgIGNoZWNrQXZhaWxhYmlsaXR5Rm9yUGxhY2luZyguLi5jb29yZGluYXRlcyk7XG4gICAgICAgIGNvbnN0IG5ld1NoaXAgPSBTaGlwKGxlbmd0aCk7XG4gICAgICAgIG5ld1NoaXAuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICAgICAgcmVtb3ZlQ29vcmRpbmF0ZXMoLi4uY29vcmRpbmF0ZXMpO1xuICAgICAgICBjb29yZGluYXRlcy5mb3JFYWNoKChwYWlyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXJyb3VuZGluZyA9IGdldEFkamFjZW50Q29vcmRpbmF0ZXMoXG4gICAgICAgICAgICAgICAgcGFpcixcbiAgICAgICAgICAgICAgICBzaGlwU3Vycm91bmRDb29yZGluYXRlcyxcbiAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc3Vycm91bmRpbmcuZm9yRWFjaCgoc3ViKSA9PiB7XG4gICAgICAgICAgICAgICAgc2hpcFN1cnJvdW5kQ29vcmRpbmF0ZXMucHVzaChKU09OLnN0cmluZ2lmeShzdWIpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudFNoaXBzLnB1c2gobmV3U2hpcCk7XG4gICAgICAgIHJldHVybiBuZXdTaGlwO1xuICAgIH1cblxuICAgIGNvbnN0IG1pc3NlZFNob3RzID0gW107XG4gICAgY29uc3Qgc3VjY2Vzc2Z1bFNob3RzID0gW107XG5cbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGNoZWNrQm9hcmRMaW1pdHMoY29vcmRpbmF0ZXMpO1xuICAgICAgICBpZiAoYXZhaWxhYmxlQ29vcmRpbmF0ZXMuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZXMpKSkge1xuICAgICAgICAgICAgbWlzc2VkU2hvdHMucHVzaChKU09OLnN0cmluZ2lmeShjb29yZGluYXRlcykpO1xuICAgICAgICAgICAgcmVtb3ZlQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgcmV0dXJuIG1pc3NlZFNob3RzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIG1pc3NlZFNob3RzLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGVzKSkgfHxcbiAgICAgICAgICAgIHN1Y2Nlc3NmdWxTaG90cy5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShjb29yZGluYXRlcykpXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaG90IGFscmVhZHkgdGFrZW4gYXQgdGhpcyBjb29yZGluYXRlJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBjdXJyZW50U2hpcHMuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgICAgICAgICBvYmouY29vcmRpbmF0ZXMuZm9yRWFjaCgoc2hpcENvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHNoaXBDb29yZGluYXRlKSA9PT1cbiAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZXMpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gb2JqLmhpdCgpO1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzZnVsU2hvdHMucHVzaChKU09OLnN0cmluZ2lmeShjb29yZGluYXRlcykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHZhbHVlKSByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWxsU2hpcHNTdW5rKCkge1xuICAgICAgICByZXR1cm4gY3VycmVudFNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRCb2FyZEluZm9ybWF0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3VycmVudFNoaXBzLFxuICAgICAgICAgICAgbWlzc2VkU2hvdHMsXG4gICAgICAgICAgICBzdWNjZXNzZnVsU2hvdHMsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBhbGxTaGlwc1N1bmssXG4gICAgICAgIGdldEJvYXJkSW5mb3JtYXRpb24sXG4gICAgICAgIGdldEFkamFjZW50Q29vcmRpbmF0ZXMsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gUGxheWVyKG5hbWUsIGlzQ1BVID0gZmFsc2UpIHtcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgICBjb25zdCBwcmV2aW91c0F0dGFja3MgPSBbXTtcbiAgICBmdW5jdGlvbiBhdHRhY2tFbmVteShlbmVteSwgY29vcmRpbmF0ZSkge1xuICAgICAgICBlbmVteS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKTtcbiAgICAgICAgcHJldmlvdXNBdHRhY2tzLnB1c2goSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZSkpO1xuICAgICAgICByZXR1cm4gJ0VuZW15IGF0dGFja2VkJztcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlKCkge1xuICAgICAgICByZXR1cm4gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGFjZVNoaXBSYW5kb21seSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChnYW1lYm9hcmQuZ2V0Qm9hcmRJbmZvcm1hdGlvbigpLmN1cnJlbnRTaGlwcy5sZW5ndGggPj0gNSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUNvb3JkaW5hdGUgPSBnZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGUoKTtcbiAgICAgICAgICAgIGxldCByYW5kb21MZW5ndGggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KTtcbiAgICAgICAgICAgIHdoaWxlIChyYW5kb21MZW5ndGggPCAyKSB7XG4gICAgICAgICAgICAgICAgcmFuZG9tTGVuZ3RoID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByYW5kb21EaXJlY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSA9PT0gMDtcbiAgICAgICAgICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoXG4gICAgICAgICAgICAgICAgcmFuZG9tQ29vcmRpbmF0ZSxcbiAgICAgICAgICAgICAgICByYW5kb21MZW5ndGgsXG4gICAgICAgICAgICAgICAgcmFuZG9tRGlyZWN0aW9uXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcGxhY2VTaGlwUmFuZG9tbHkoKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBwbGFjZVNoaXBSYW5kb21seSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHByZXZpb3VzTGFzdEhpdCA9IG51bGw7XG4gICAgbGV0IGxhc3RIaXQ7XG4gICAgZnVuY3Rpb24gY29tcHV0ZXJBdHRhY2soZW5lbXkpIHtcbiAgICAgICAgZnVuY3Rpb24gZ2V0QWRqYWNlbnRDZWxsKGNlbGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGFycmF5ID0gZ2FtZWJvYXJkLmdldEFkamFjZW50Q29vcmRpbmF0ZXMoXG4gICAgICAgICAgICAgICAgY2VsbCxcbiAgICAgICAgICAgICAgICBwcmV2aW91c0F0dGFja3NcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpO1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5W29wdGlvbl07XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhdHRhY2tBZGphY2VudENlbGwoKSB7XG4gICAgICAgICAgICBsZXQgbmV3Q29vcmRpbmF0ZTtcbiAgICAgICAgICAgIGlmIChsYXN0SGl0KSB7XG4gICAgICAgICAgICAgICAgbmV3Q29vcmRpbmF0ZSA9IGdldEFkamFjZW50Q2VsbChsYXN0SGl0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXdDb29yZGluYXRlID09PSBbXSB8fCAhbmV3Q29vcmRpbmF0ZSkge1xuICAgICAgICAgICAgICAgIGxhc3RIaXQgPSBwcmV2aW91c0xhc3RIaXQ7XG4gICAgICAgICAgICAgICAgbmV3Q29vcmRpbmF0ZSA9IGdlbmVyYXRlUmFuZG9tQ29vcmRpbmF0ZSgpO1xuICAgICAgICAgICAgICAgIHdoaWxlIChcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNBdHRhY2tzLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KG5ld0Nvb3JkaW5hdGUpKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBuZXdDb29yZGluYXRlID0gZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXR0YWNrRW5lbXkoZW5lbXksIG5ld0Nvb3JkaW5hdGUpO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGVuZW15LmdhbWVib2FyZFxuICAgICAgICAgICAgICAgICAgICAuZ2V0Qm9hcmRJbmZvcm1hdGlvbigpXG4gICAgICAgICAgICAgICAgICAgIC5zdWNjZXNzZnVsU2hvdHMuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkobmV3Q29vcmRpbmF0ZSkpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBwcmV2aW91c0xhc3RIaXQgPSBsYXN0SGl0O1xuICAgICAgICAgICAgICAgIGxhc3RIaXQgPSBuZXdDb29yZGluYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICdDb21wdXRlciBhdHRhY2snO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhdHRhY2tBZGphY2VudENlbGwoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaGlwc0xlZnQoKSB7XG4gICAgICAgIGNvbnN0IHsgY3VycmVudFNoaXBzIH0gPSBnYW1lYm9hcmQuZ2V0Qm9hcmRJbmZvcm1hdGlvbigpO1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRTaGlwc1tpXS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIGNvdW50ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRTaGlwcy5sZW5ndGggLSBjb3VudDtcbiAgICB9XG5cbiAgICBpZiAoaXNDUFUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBnYW1lYm9hcmQsXG4gICAgICAgICAgICBjb21wdXRlckF0dGFjayxcbiAgICAgICAgICAgIHNoaXBzTGVmdCxcbiAgICAgICAgICAgIHBsYWNlU2hpcFJhbmRvbWx5LFxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBnYW1lYm9hcmQsXG4gICAgICAgIGF0dGFja0VuZW15LFxuICAgICAgICBzaGlwc0xlZnQsXG4gICAgICAgIHBsYWNlU2hpcFJhbmRvbWx5LFxuICAgIH07XG59XG5cbmV4cG9ydCB7IFNoaXAsIEdhbWVib2FyZCwgUGxheWVyIH07XG4iLCJpbXBvcnQgcmVzZXQgZnJvbSAnLi9yZXNldC5zdmcnO1xuXG5mdW5jdGlvbiBjcmVhdGVCb2FyZChwbGF5ZXIpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS1jb29yZGluYXRlJywgYFske2p9LCR7aX1dYCk7XG4gICAgICAgICAgICBpZiAocGxheWVyLm5hbWUgPT09ICdjcHUnKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdhdmFpbGFibGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChwbGF5ZXIubmFtZSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyR2FtZWJvYXJkKHBsYXllcikge1xuICAgIGNvbnN0IGJvYXJkID0gcGxheWVyLmdhbWVib2FyZC5nZXRCb2FyZEluZm9ybWF0aW9uKCk7XG4gICAgYm9hcmQubWlzc2VkU2hvdHMuZm9yRWFjaCgocGFpcikgPT4ge1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuJHtwbGF5ZXIubmFtZX0+ZGl2W2RhdGEtY29vcmRpbmF0ZT1cIiR7cGFpcn1cIl1gXG4gICAgICAgICk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgIH0pO1xuICAgIGJvYXJkLnN1Y2Nlc3NmdWxTaG90cy5mb3JFYWNoKChwYWlyKSA9PiB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC4ke3BsYXllci5uYW1lfT5kaXZbZGF0YS1jb29yZGluYXRlPVwiJHtwYWlyfVwiXWBcbiAgICAgICAgKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzdWNjZXNzJyk7XG4gICAgfSk7XG4gICAgaWYgKHBsYXllci5uYW1lICE9PSAnY3B1Jykge1xuICAgICAgICBib2FyZC5jdXJyZW50U2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgc2hpcC5jb29yZGluYXRlcy5mb3JFYWNoKChwYWlyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIGAuJHtwbGF5ZXIubmFtZX0+ZGl2W2RhdGEtY29vcmRpbmF0ZT1cIiR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWlyXG4gICAgICAgICAgICAgICAgICAgICl9XCJdYFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByb3RhdGUoKSB7XG4gICAgY29uc3Qgb25lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBzLWNvbnRhaW5lcj5kaXYnKTtcbiAgICBjb25zdCBhbGxEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXBzLWNvbnRhaW5lcj5kaXYnKTtcbiAgICBjb25zdCBbLCBkaXJlY3Rpb25dID0gSlNPTi5wYXJzZShvbmVEaXYuZ2V0QXR0cmlidXRlKCdkYXRhLWluZm8nKSk7XG4gICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICBhbGxEaXZzLmZvckVhY2goKGRpdikgPT4ge1xuICAgICAgICAgICAgY29uc3QgW2xlbmd0aF0gPSBKU09OLnBhcnNlKGRpdi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5mbycpKTtcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5mbycsIGBbJHtsZW5ndGh9LCBmYWxzZV1gKTtcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYHdpZHRoOjM1cHg7aGVpZ2h0OiR7bGVuZ3RoICogMzV9cHhgKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWxsRGl2cy5mb3JFYWNoKChkaXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFtsZW5ndGhdID0gSlNPTi5wYXJzZShkaXYuZ2V0QXR0cmlidXRlKCdkYXRhLWluZm8nKSk7XG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLWluZm8nLCBgWyR7bGVuZ3RofSwgdHJ1ZV1gKTtcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGhlaWdodDozNXB4O3dpZHRoOiR7bGVuZ3RoICogMzV9cHhgKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gZHJhZ1N0YXJ0KGUpIHtcbiAgICBlLmRhdGFUcmFuc2Zlci5jbGVhckRhdGEoKTtcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZm8nKSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH0sIDApO1xufVxuZnVuY3Rpb24gZHJhZ0VuZCgpIHtcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2hpcERpdnMocGxheWVyLCBmbikge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaGlwcy1jb250YWluZXInKTtcbiAgICBjb25zdCByb3RhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByb3RhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnUm90YXRlJztcbiAgICByb3RhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGUpO1xuICAgIGNvbnN0IHBsYWNlUmFuZG9tbHlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwbGFjZVJhbmRvbWx5QnV0dG9uLnRleHRDb250ZW50ID0gJ1BsYWNlIHNoaXBzIHJhbmRvbWx5JztcbiAgICBwbGFjZVJhbmRvbWx5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwbGF5ZXIucGxhY2VTaGlwUmFuZG9tbHkoKTtcbiAgICAgICAgcmVuZGVyR2FtZWJvYXJkKHBsYXllcik7XG4gICAgICAgIGZuKCk7XG4gICAgfSk7XG4gICAgY29udGFpbmVyLmFwcGVuZChyb3RhdGVCdXR0b24sIHBsYWNlUmFuZG9tbHlCdXR0b24pO1xuICAgIGNvbnN0IHNoaXBEaXZzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgbGVuZ3RoID0gaTtcbiAgICAgICAgaWYgKGkgPCAyKSB7XG4gICAgICAgICAgICBsZW5ndGggPSAzO1xuICAgICAgICB9XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICd0cnVlJyk7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5mbycsIGBbJHtsZW5ndGh9LCB0cnVlXWApO1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBoZWlnaHQ6MzVweDt3aWR0aDoke2xlbmd0aCAqIDM1fXB4YCk7XG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnU3RhcnQpO1xuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIGRyYWdFbmQpO1xuICAgICAgICBzaGlwRGl2cy5wdXNoKGRpdik7XG4gICAgfVxuICAgIGNvbnRhaW5lci5hcHBlbmQoLi4uc2hpcERpdnMpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlc3RhcnRCdXR0b24oKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgcmVzZXQpO1xuICAgIGJ1dHRvbi5hcHBlbmQoaW1nKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuICAgIHJldHVybiBidXR0b247XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUJvYXJkLCByZW5kZXJHYW1lYm9hcmQsIGNyZWF0ZVNoaXBEaXZzLCBjcmVhdGVSZXN0YXJ0QnV0dG9uIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9iYXR0bGVzaGlwJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtcbiAgICBjcmVhdGVCb2FyZCxcbiAgICByZW5kZXJHYW1lYm9hcmQsXG4gICAgY3JlYXRlU2hpcERpdnMsXG4gICAgY3JlYXRlUmVzdGFydEJ1dHRvbixcbn0gZnJvbSAnLi9kb20nO1xuXG5jb25zdCBwbGF5ZXIxID0gUGxheWVyKCdwbGF5ZXIxJyk7XG5jb25zdCBjcHUgPSBQbGF5ZXIoJ2NwdScsIHRydWUpO1xuY3B1LnBsYWNlU2hpcFJhbmRvbWx5KCk7XG5jb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xucGFyYS50ZXh0Q29udGVudCA9IGBTaGlwcyBsZWZ0OiAke2NwdS5zaGlwc0xlZnQoKX1gO1xuY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcj5wJyk7XG5cbmZ1bmN0aW9uIGdhbWVMb29wKHBsYXllciwgY29tcHV0ZXIsIGNvb3JkaW5hdGUpIHtcbiAgICBpZiAoY29tcHV0ZXIuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpIHx8IHBsYXllci5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdHYW1lIGFscmVhZHkgZW5kZWQnKTtcbiAgICB9XG4gICAgcGxheWVyLmF0dGFja0VuZW15KGNvbXB1dGVyLCBjb29yZGluYXRlKTtcbiAgICByZW5kZXJHYW1lYm9hcmQoY3B1KTtcbiAgICBwYXJhLnRleHRDb250ZW50ID0gYFNoaXBzIGxlZnQ6ICR7Y3B1LnNoaXBzTGVmdCgpfWA7XG4gICAgaWYgKGNvbXB1dGVyLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gJ1BsYXllciB3b24nO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVJlc3RhcnRCdXR0b24oKSk7XG4gICAgfVxuICAgIGNvbXB1dGVyLmNvbXB1dGVyQXR0YWNrKHBsYXllcik7XG4gICAgcmVuZGVyR2FtZWJvYXJkKHBsYXllcjEpO1xuICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSAnQ3B1IHdvbic7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlUmVzdGFydEJ1dHRvbigpKTtcbiAgICB9XG59XG5jb25zdCBib2FyZCA9IGNyZWF0ZUJvYXJkKHBsYXllcjEpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQoYm9hcmQpO1xucmVuZGVyR2FtZWJvYXJkKHBsYXllcjEpO1xuXG5mdW5jdGlvbiBhZGRDUFVDZWxsc0xpc3RlbmVyKCkge1xuICAgIGNvbnN0IGNwdUNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNwdT5kaXZbZGF0YS1jb29yZGluYXRlXScpO1xuICAgIGNwdUNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IEpTT04ucGFyc2UoXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1jb29yZGluYXRlJylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBnYW1lTG9vcChwbGF5ZXIxLCBjcHUsIGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdhdmFpbGFibGUnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVNoaXBzRGl2KCkge1xuICAgIGlmIChwbGF5ZXIxLnNoaXBzTGVmdCgpID49IDUpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBzLWNvbnRhaW5lcicpLnJlbW92ZSgpO1xuICAgICAgICBjb25zdCBjcHVCb2FyZCA9IGNyZWF0ZUJvYXJkKGNwdSk7XG4gICAgICAgIGNwdUJvYXJkLmFwcGVuZChwYXJhKTtcbiAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChjcHVCb2FyZCk7XG4gICAgICAgIHJlbmRlckdhbWVib2FyZChjcHUpO1xuICAgICAgICBhZGRDUFVDZWxsc0xpc3RlbmVyKCk7XG4gICAgfVxufVxuY29uc3QgcGxheWVyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyMT5kaXZbZGF0YS1jb29yZGluYXRlXScpO1xuY29uc3QgZHJhZ092ZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn07XG5jb25zdCBkcm9wID0gZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zdCBpbmZvID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuICAgIGNvbnN0IGxlbmd0aCA9IEpTT04ucGFyc2UoaW5mbylbMF07XG4gICAgY29uc3Qgc3RhdGUgPSBKU09OLnBhcnNlKGluZm8pWzFdO1xuICAgIGNvbnN0IHN0YXJ0Q29vcmRpbmF0ZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1jb29yZGluYXRlJyk7XG4gICAgcGxheWVyMS5nYW1lYm9hcmQucGxhY2VTaGlwKEpTT04ucGFyc2Uoc3RhcnRDb29yZGluYXRlKSwgbGVuZ3RoLCBzdGF0ZSk7XG4gICAgcmVuZGVyR2FtZWJvYXJkKHBsYXllcjEpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZm89XCIke2luZm99XCJgKS5yZW1vdmUoKTtcbiAgICByZW1vdmVTaGlwc0RpdigpO1xufTtcbnBsYXllckNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ092ZXIpO1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyb3ApO1xufSk7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kKGNyZWF0ZVNoaXBEaXZzKHBsYXllcjEsIHJlbW92ZVNoaXBzRGl2KSk7XG5cbmV4cG9ydCB7IGdhbWVMb29wIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=