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
___CSS_LOADER_EXPORT___.push([module.id, "header {\n    grid-column: 1/3;\n    justify-self: center;\n}\nh1 {\n    font-family: 'Bungee Shade', cursive;\n    font-size: 3.5rem;\n    margin-bottom: 0;\n}\np {\n    font-family: sans-serif;\n    font-weight: bold;\n    font-size: 1.5rem;\n    height: 1.5rem;\n    text-align: center;\n    margin-top: 15px;\n    margin-bottom: 0;\n}\n\nbody > div {\n    --size: 350px;\n    width: var(--size);\n    border-top: solid black 1px;\n    border-left: solid black 1px;\n    outline: 2px solid black;\n    height: var(--size);\n    display: grid;\n    position: relative;\n    align-self: flex-start;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\ndiv > p {\n    position: absolute;\n    margin: 0;\n    font-size: 1.2rem;\n    bottom: -30px;\n    right: 0;\n    font-weight: bold;\n    font-family: sans-serif;\n}\nbody > div:first-of-type {\n    justify-self: end;\n}\n\nbody {\n    background-color: aquamarine;\n    display: grid;\n    gap: 50px;\n    row-gap: 30px;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: min-content 1fr;\n    justify-items: start;\n    align-items: center;\n}\n\nbody > div > div {\n    border-right: solid black 1px;\n    background-color: white;\n    border-bottom: solid black 1px;\n}\n\n.available:hover {\n    box-shadow: inset rgb(63, 50, 248) 0px 0px 5px 2px;\n}\n\n.ship {\n    background-color: blue;\n    border: none;\n}\n.miss {\n    background-color: rgb(253, 253, 191);\n    text-align: center;\n}\n.miss::after {\n    position: relative;\n    content: '';\n    display: block;\n    height: 12%;\n    width: 12%;\n    border-radius: 50%;\n    background: black;\n    left: 0;\n    right: 0;\n    top: 40%;\n    bottom: 0;\n    margin: auto;\n}\n.success::before,\n.success::after {\n    position: relative;\n    content: '';\n    background: rgba(0, 0, 0, 0.6);\n    display: inline-block;\n    width: 5%;\n    height: 155%;\n    transform: rotate(-45deg);\n    left: 0;\n    right: 0;\n    top: -10px;\n    bottom: 0;\n    margin: auto;\n}\n\n.success::after {\n    transform: rotate(45deg);\n}\n\n.ship {\n    background-color: blue;\n    border: none;\n    outline: none;\n}\n\n.success {\n    background-color: red;\n    overflow: hidden;\n    text-align: center;\n}\n\n.hide {\n    display: none;\n    transform: rotate(90deg);\n}\n\n.ships-container {\n    background-color: white;\n    outline: 2px black solid;\n    display: grid;\n    gap: 15px;\n    width: fit-content;\n    height: fit-content;\n    padding: 15px;\n    box-sizing: border-box;\n    grid-template-columns: min-content min-content min-content;\n    grid-template-rows: min-content min-content min-content;\n}\n.ships-container button {\n    padding: 10px;\n    width: fit-content;\n    justify-self: center;\n    background-color: black;\n    color: white;\n    font-weight: bold;\n    border: none;\n    border-radius: 10px;\n    font-size: 1rem;\n}\n.ships-container button:hover {\n    background-color: gray;\n}\n.ships-container button:first-of-type {\n    grid-column: 1/2;\n}\n.ships-container button:nth-of-type(2) {\n    grid-column: 2/4;\n}\n\nbody > button {\n    grid-column: 1/3;\n    justify-self: center;\n    border-radius: 50%;\n    width: 65px;\n    height: 65px;\n    background-color: white;\n    border: black solid 2px;\n}\n\nbody > button:hover {\n    background-color: lightgray;\n}\n\nbody > button:active {\n    background-color: white;\n    transform: translate(0px, 4px);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,gBAAgB;IAChB,oBAAoB;AACxB;AACA;IACI,oCAAoC;IACpC,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,iBAAiB;IACjB,cAAc;IACd,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,2BAA2B;IAC3B,4BAA4B;IAC5B,wBAAwB;IACxB,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,sBAAsB;IACtB,sCAAsC;IACtC,mCAAmC;AACvC;AACA;IACI,kBAAkB;IAClB,SAAS;IACT,iBAAiB;IACjB,aAAa;IACb,QAAQ;IACR,iBAAiB;IACjB,uBAAuB;AAC3B;AACA;IACI,iBAAiB;AACrB;;AAEA;IACI,4BAA4B;IAC5B,aAAa;IACb,SAAS;IACT,aAAa;IACb,8BAA8B;IAC9B,mCAAmC;IACnC,oBAAoB;IACpB,mBAAmB;AACvB;;AAEA;IACI,6BAA6B;IAC7B,uBAAuB;IACvB,8BAA8B;AAClC;;AAEA;IACI,kDAAkD;AACtD;;AAEA;IACI,sBAAsB;IACtB,YAAY;AAChB;AACA;IACI,oCAAoC;IACpC,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,cAAc;IACd,WAAW;IACX,UAAU;IACV,kBAAkB;IAClB,iBAAiB;IACjB,OAAO;IACP,QAAQ;IACR,QAAQ;IACR,SAAS;IACT,YAAY;AAChB;AACA;;IAEI,kBAAkB;IAClB,WAAW;IACX,8BAA8B;IAC9B,qBAAqB;IACrB,SAAS;IACT,YAAY;IACZ,yBAAyB;IACzB,OAAO;IACP,QAAQ;IACR,UAAU;IACV,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,wBAAwB;AAC5B;;AAEA;IACI,uBAAuB;IACvB,wBAAwB;IACxB,aAAa;IACb,SAAS;IACT,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,0DAA0D;IAC1D,uDAAuD;AAC3D;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,oBAAoB;IACpB,uBAAuB;IACvB,YAAY;IACZ,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,oBAAoB;IACpB,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,uBAAuB;IACvB,8BAA8B;AAClC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap');\n\nheader {\n    grid-column: 1/3;\n    justify-self: center;\n}\nh1 {\n    font-family: 'Bungee Shade', cursive;\n    font-size: 3.5rem;\n    margin-bottom: 0;\n}\np {\n    font-family: sans-serif;\n    font-weight: bold;\n    font-size: 1.5rem;\n    height: 1.5rem;\n    text-align: center;\n    margin-top: 15px;\n    margin-bottom: 0;\n}\n\nbody > div {\n    --size: 350px;\n    width: var(--size);\n    border-top: solid black 1px;\n    border-left: solid black 1px;\n    outline: 2px solid black;\n    height: var(--size);\n    display: grid;\n    position: relative;\n    align-self: flex-start;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\ndiv > p {\n    position: absolute;\n    margin: 0;\n    font-size: 1.2rem;\n    bottom: -30px;\n    right: 0;\n    font-weight: bold;\n    font-family: sans-serif;\n}\nbody > div:first-of-type {\n    justify-self: end;\n}\n\nbody {\n    background-color: aquamarine;\n    display: grid;\n    gap: 50px;\n    row-gap: 30px;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: min-content 1fr;\n    justify-items: start;\n    align-items: center;\n}\n\nbody > div > div {\n    border-right: solid black 1px;\n    background-color: white;\n    border-bottom: solid black 1px;\n}\n\n.available:hover {\n    box-shadow: inset rgb(63, 50, 248) 0px 0px 5px 2px;\n}\n\n.ship {\n    background-color: blue;\n    border: none;\n}\n.miss {\n    background-color: rgb(253, 253, 191);\n    text-align: center;\n}\n.miss::after {\n    position: relative;\n    content: '';\n    display: block;\n    height: 12%;\n    width: 12%;\n    border-radius: 50%;\n    background: black;\n    left: 0;\n    right: 0;\n    top: 40%;\n    bottom: 0;\n    margin: auto;\n}\n.success::before,\n.success::after {\n    position: relative;\n    content: '';\n    background: rgba(0, 0, 0, 0.6);\n    display: inline-block;\n    width: 5%;\n    height: 155%;\n    transform: rotate(-45deg);\n    left: 0;\n    right: 0;\n    top: -10px;\n    bottom: 0;\n    margin: auto;\n}\n\n.success::after {\n    transform: rotate(45deg);\n}\n\n.ship {\n    background-color: blue;\n    border: none;\n    outline: none;\n}\n\n.success {\n    background-color: red;\n    overflow: hidden;\n    text-align: center;\n}\n\n.hide {\n    display: none;\n    transform: rotate(90deg);\n}\n\n.ships-container {\n    background-color: white;\n    outline: 2px black solid;\n    display: grid;\n    gap: 15px;\n    width: fit-content;\n    height: fit-content;\n    padding: 15px;\n    box-sizing: border-box;\n    grid-template-columns: min-content min-content min-content;\n    grid-template-rows: min-content min-content min-content;\n}\n.ships-container button {\n    padding: 10px;\n    width: fit-content;\n    justify-self: center;\n    background-color: black;\n    color: white;\n    font-weight: bold;\n    border: none;\n    border-radius: 10px;\n    font-size: 1rem;\n}\n.ships-container button:hover {\n    background-color: gray;\n}\n.ships-container button:first-of-type {\n    grid-column: 1/2;\n}\n.ships-container button:nth-of-type(2) {\n    grid-column: 2/4;\n}\n\nbody > button {\n    grid-column: 1/3;\n    justify-self: center;\n    border-radius: 50%;\n    width: 65px;\n    height: 65px;\n    background-color: white;\n    border: black solid 2px;\n}\n\nbody > button:hover {\n    background-color: lightgray;\n}\n\nbody > button:active {\n    background-color: white;\n    transform: translate(0px, 4px);\n}\n"],"sourceRoot":""}]);
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
const message = document.querySelector('header>p');
const para = document.createElement('p');
para.textContent = `Ships left: ${cpu.shipsLeft()}`;

cpu.placeShipRandomly();

const board = (0,_dom__WEBPACK_IMPORTED_MODULE_2__.createBoard)(player1);
document.body.append(board);
(0,_dom__WEBPACK_IMPORTED_MODULE_2__.renderGameboard)(player1);

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
        message.textContent = 'CPU won';
        document.body.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_2__.createRestartButton)());
    }
}

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
document.body.append((0,_dom__WEBPACK_IMPORTED_MODULE_2__.createShipDivs)(player1, removeShipsDiv));

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



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHlCQUF5QjtBQUMzRDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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aUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0M7QUFDakI7QUFNTjs7QUFFZixnQkFBZ0IsbURBQU07QUFDdEIsWUFBWSxtREFBTTtBQUNsQjtBQUNBO0FBQ0Esa0NBQWtDLGdCQUFnQjs7QUFFbEQ7O0FBRUEsY0FBYyxpREFBVztBQUN6QjtBQUNBLHFEQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFlO0FBQ25CLHNDQUFzQyxnQkFBZ0I7QUFDdEQ7QUFDQTtBQUNBLGtDQUFrQyx5REFBbUI7QUFDckQ7QUFDQTtBQUNBLElBQUkscURBQWU7QUFDbkI7QUFDQTtBQUNBLGtDQUFrQyx5REFBbUI7QUFDckQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpREFBVztBQUNwQztBQUNBO0FBQ0E7QUFDQSxRQUFRLHFEQUFlO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixvREFBYzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFlO0FBQ25CLDBDQUEwQyxLQUFLO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVtQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9iYXR0bGVzaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJ1bmdlZStTaGFkZSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJoZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuaDEge1xcbiAgICBmb250LWZhbWlseTogJ0J1bmdlZSBTaGFkZScsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5wIHtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuYm9keSA+IGRpdiB7XFxuICAgIC0tc2l6ZTogMzUwcHg7XFxuICAgIHdpZHRoOiB2YXIoLS1zaXplKTtcXG4gICAgYm9yZGVyLXRvcDogc29saWQgYmxhY2sgMXB4O1xcbiAgICBib3JkZXItbGVmdDogc29saWQgYmxhY2sgMXB4O1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XFxuICAgIGhlaWdodDogdmFyKC0tc2l6ZSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5kaXYgPiBwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBib3R0b206IC0zMHB4O1xcbiAgICByaWdodDogMDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5ID4gZGl2OmZpcnN0LW9mLXR5cGUge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNTBweDtcXG4gICAgcm93LWdhcDogMzBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJvZHkgPiBkaXYgPiBkaXYge1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIGJsYWNrIDFweDtcXG59XFxuXFxuLmF2YWlsYWJsZTpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IHJnYig2MywgNTAsIDI0OCkgMHB4IDBweCA1cHggMnB4O1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUzLCAyNTMsIDE5MSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1pc3M6OmFmdGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMTIlO1xcbiAgICB3aWR0aDogMTIlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiA0MCU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG4uc3VjY2Vzczo6YmVmb3JlLFxcbi5zdWNjZXNzOjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNSU7XFxuICAgIGhlaWdodDogMTU1JTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogLTEwcHg7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uc3VjY2Vzczo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc3VjY2VzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLnNoaXBzLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBvdXRsaW5lOiAycHggYmxhY2sgc29saWQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMTVweDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbn1cXG4uc2hpcHMtY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLnNoaXBzLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG4uc2hpcHMtY29udGFpbmVyIGJ1dHRvbjpmaXJzdC1vZi10eXBlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG59XFxuLnNoaXBzLWNvbnRhaW5lciBidXR0b246bnRoLW9mLXR5cGUoMikge1xcbiAgICBncmlkLWNvbHVtbjogMi80O1xcbn1cXG5cXG5ib2R5ID4gYnV0dG9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDY1cHg7XFxuICAgIGhlaWdodDogNjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogYmxhY2sgc29saWQgMnB4O1xcbn1cXG5cXG5ib2R5ID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG5ib2R5ID4gYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDRweCk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsc0NBQXNDO0lBQ3RDLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFNBQVM7SUFDVCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1DQUFtQztJQUNuQyxvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLE9BQU87SUFDUCxRQUFRO0lBQ1IsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLE9BQU87SUFDUCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwwREFBMEQ7SUFDMUQsdURBQXVEO0FBQzNEO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsOEJBQThCO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJ1bmdlZStTaGFkZSZkaXNwbGF5PXN3YXAnKTtcXG5cXG5oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuaDEge1xcbiAgICBmb250LWZhbWlseTogJ0J1bmdlZSBTaGFkZScsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5wIHtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuYm9keSA+IGRpdiB7XFxuICAgIC0tc2l6ZTogMzUwcHg7XFxuICAgIHdpZHRoOiB2YXIoLS1zaXplKTtcXG4gICAgYm9yZGVyLXRvcDogc29saWQgYmxhY2sgMXB4O1xcbiAgICBib3JkZXItbGVmdDogc29saWQgYmxhY2sgMXB4O1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XFxuICAgIGhlaWdodDogdmFyKC0tc2l6ZSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5kaXYgPiBwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBib3R0b206IC0zMHB4O1xcbiAgICByaWdodDogMDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5ID4gZGl2OmZpcnN0LW9mLXR5cGUge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNTBweDtcXG4gICAgcm93LWdhcDogMzBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJvZHkgPiBkaXYgPiBkaXYge1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIGJsYWNrIDFweDtcXG59XFxuXFxuLmF2YWlsYWJsZTpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IHJnYig2MywgNTAsIDI0OCkgMHB4IDBweCA1cHggMnB4O1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUzLCAyNTMsIDE5MSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1pc3M6OmFmdGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMTIlO1xcbiAgICB3aWR0aDogMTIlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiA0MCU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG4uc3VjY2Vzczo6YmVmb3JlLFxcbi5zdWNjZXNzOjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNSU7XFxuICAgIGhlaWdodDogMTU1JTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogLTEwcHg7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uc3VjY2Vzczo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc3VjY2VzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLnNoaXBzLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBvdXRsaW5lOiAycHggYmxhY2sgc29saWQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMTVweDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbn1cXG4uc2hpcHMtY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLnNoaXBzLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG4uc2hpcHMtY29udGFpbmVyIGJ1dHRvbjpmaXJzdC1vZi10eXBlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG59XFxuLnNoaXBzLWNvbnRhaW5lciBidXR0b246bnRoLW9mLXR5cGUoMikge1xcbiAgICBncmlkLWNvbHVtbjogMi80O1xcbn1cXG5cXG5ib2R5ID4gYnV0dG9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDY1cHg7XFxuICAgIGhlaWdodDogNjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogYmxhY2sgc29saWQgMnB4O1xcbn1cXG5cXG5ib2R5ID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG5ib2R5ID4gYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDRweCk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIFNoaXAobGVuZ3RoKSB7XG4gICAgaWYgKGxlbmd0aCA8IDIgfHwgIWxlbmd0aCB8fCBsZW5ndGggPiA1KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTGVuZ3RoIG11c3QgYmUgZ3JlYXRlciB0aGFuIDAgYW5kIGxlc3MgdGhhbiA2Jyk7XG4gICAgfVxuICAgIGxldCBzdW5rID0gZmFsc2U7XG4gICAgbGV0IG51bWJlck9mSGl0cyA9IDA7XG4gICAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgICAgICBzdW5rID0gbnVtYmVyT2ZIaXRzID49IGxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHN1bms7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhpdCgpIHtcbiAgICAgICAgaWYgKHN1bmspIHJldHVybiAnVGhlIHNoaXAgaGFzIGFscmVhZHkgc3Vuayc7XG4gICAgICAgIG51bWJlck9mSGl0cyArPSAxO1xuICAgICAgICBpc1N1bmsoKTtcbiAgICAgICAgcmV0dXJuIG51bWJlck9mSGl0cztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBoaXQsXG4gICAgICAgIGlzU3VuayxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gICAgY29uc3QgYXZhaWxhYmxlQ29vcmRpbmF0ZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICBhdmFpbGFibGVDb29yZGluYXRlcy5wdXNoKEpTT04uc3RyaW5naWZ5KFtpLCBqXSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHNoaXBTdXJyb3VuZENvb3JkaW5hdGVzID0gW107XG5cbiAgICBmdW5jdGlvbiByZW1vdmVDb29yZGluYXRlcyguLi5jb29yZGluYXRlcykge1xuICAgICAgICB3aGlsZSAoY29vcmRpbmF0ZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGF2YWlsYWJsZUNvb3JkaW5hdGVzLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZXNbMF0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYXZhaWxhYmxlQ29vcmRpbmF0ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0F2YWlsYWJpbGl0eUZvclBsYWNpbmcoLi4uY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICFhdmFpbGFibGVDb29yZGluYXRlcy5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShlbGVtZW50KSkgfHxcbiAgICAgICAgICAgICAgICBzaGlwU3Vycm91bmRDb29yZGluYXRlcy5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShlbGVtZW50KSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgYENvb3JkaW5hdGUgJHtKU09OLnN0cmluZ2lmeShlbGVtZW50KX0gaXMgYWxyZWFkeSBvY2N1cGllZGBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50U2hpcHMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrQm9hcmRMaW1pdHMoY29vcmRpbmF0ZSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjb29yZGluYXRlWzBdID4gOSB8fFxuICAgICAgICAgICAgY29vcmRpbmF0ZVsxXSA+IDkgfHxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVbMF0gPCAwIHx8XG4gICAgICAgICAgICBjb29yZGluYXRlWzFdIDwgMFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignT3V0c2lkZSBvZiBib2FyZCBsaW1pdHMnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRBZGphY2VudENvb3JkaW5hdGVzKGNlbGwsIHJlY29yZEFycmF5LCBkaWFnb25hbHMgPSBmYWxzZSkge1xuICAgICAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICAgICAgaWYgKGNlbGxbMF0gPj0gMCAmJiBjZWxsWzBdIDwgOSkge1xuICAgICAgICAgICAgYXJyYXkucHVzaChbY2VsbFswXSArIDEsIGNlbGxbMV1dKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2VsbFswXSA8PSA5ICYmIGNlbGxbMF0gPiAwKSB7XG4gICAgICAgICAgICBhcnJheS5wdXNoKFtjZWxsWzBdIC0gMSwgY2VsbFsxXV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZWxsWzFdID49IDAgJiYgY2VsbFsxXSA8IDkpIHtcbiAgICAgICAgICAgIGFycmF5LnB1c2goW2NlbGxbMF0sIGNlbGxbMV0gKyAxXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNlbGxbMV0gPD0gOSAmJiBjZWxsWzFdID4gMCkge1xuICAgICAgICAgICAgYXJyYXkucHVzaChbY2VsbFswXSwgY2VsbFsxXSAtIDFdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaWFnb25hbHMpIHtcbiAgICAgICAgICAgIGlmIChjZWxsWzBdIDw9IDkgJiYgY2VsbFswXSA+IDAgJiYgY2VsbFsxXSA8PSA5ICYmIGNlbGxbMV0gPiAwKSB7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChbY2VsbFswXSAtIDEsIGNlbGxbMV0gLSAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2VsbFswXSA8PSA5ICYmIGNlbGxbMF0gPiAwICYmIGNlbGxbMV0gPj0gMCAmJiBjZWxsWzFdIDwgOSkge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goW2NlbGxbMF0gLSAxLCBjZWxsWzFdICsgMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNlbGxbMF0gPj0gMCAmJiBjZWxsWzBdIDwgOSAmJiBjZWxsWzFdIDw9IDkgJiYgY2VsbFsxXSA+IDApIHtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKFtjZWxsWzBdICsgMSwgY2VsbFsxXSAtIDFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjZWxsWzBdID49IDAgJiYgY2VsbFswXSA8IDkgJiYgY2VsbFsxXSA+PSAwICYmIGNlbGxbMV0gPCA5KSB7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChbY2VsbFswXSArIDEsIGNlbGxbMV0gKyAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhcnJheSA9IGFycmF5LmZpbHRlcihcbiAgICAgICAgICAgIChwYWlyKSA9PiAhcmVjb3JkQXJyYXkuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkocGFpcikpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGFjZVNoaXAoc3RhcnRpbmdDb29yZGluYXRlLCBsZW5ndGgsIGlzSG9yaXpvbnRhbCA9IHRydWUpIHtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5ld0Nvb3JkaW5hdGU7XG4gICAgICAgICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgbmV3Q29vcmRpbmF0ZSA9IFtzdGFydGluZ0Nvb3JkaW5hdGVbMF0gKyBpXS5jb25jYXQoW1xuICAgICAgICAgICAgICAgICAgICBzdGFydGluZ0Nvb3JkaW5hdGVbMV0sXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld0Nvb3JkaW5hdGUgPSBbc3RhcnRpbmdDb29yZGluYXRlWzBdXS5jb25jYXQoW1xuICAgICAgICAgICAgICAgICAgICBzdGFydGluZ0Nvb3JkaW5hdGVbMV0gKyBpLFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hlY2tCb2FyZExpbWl0cyhuZXdDb29yZGluYXRlKTtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2gobmV3Q29vcmRpbmF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tBdmFpbGFiaWxpdHlGb3JQbGFjaW5nKC4uLmNvb3JkaW5hdGVzKTtcbiAgICAgICAgY29uc3QgbmV3U2hpcCA9IFNoaXAobGVuZ3RoKTtcbiAgICAgICAgbmV3U2hpcC5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgICAgICByZW1vdmVDb29yZGluYXRlcyguLi5jb29yZGluYXRlcyk7XG4gICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKHBhaXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1cnJvdW5kaW5nID0gZ2V0QWRqYWNlbnRDb29yZGluYXRlcyhcbiAgICAgICAgICAgICAgICBwYWlyLFxuICAgICAgICAgICAgICAgIHNoaXBTdXJyb3VuZENvb3JkaW5hdGVzLFxuICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzdXJyb3VuZGluZy5mb3JFYWNoKChzdWIpID0+IHtcbiAgICAgICAgICAgICAgICBzaGlwU3Vycm91bmRDb29yZGluYXRlcy5wdXNoKEpTT04uc3RyaW5naWZ5KHN1YikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjdXJyZW50U2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgcmV0dXJuIG5ld1NoaXA7XG4gICAgfVxuXG4gICAgY29uc3QgbWlzc2VkU2hvdHMgPSBbXTtcbiAgICBjb25zdCBzdWNjZXNzZnVsU2hvdHMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgY2hlY2tCb2FyZExpbWl0cyhjb29yZGluYXRlcyk7XG4gICAgICAgIGlmIChhdmFpbGFibGVDb29yZGluYXRlcy5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShjb29yZGluYXRlcykpKSB7XG4gICAgICAgICAgICBtaXNzZWRTaG90cy5wdXNoKEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGVzKSk7XG4gICAgICAgICAgICByZW1vdmVDb29yZGluYXRlcyhjb29yZGluYXRlcyk7XG4gICAgICAgICAgICByZXR1cm4gbWlzc2VkU2hvdHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbWlzc2VkU2hvdHMuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZXMpKSB8fFxuICAgICAgICAgICAgc3VjY2Vzc2Z1bFNob3RzLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGVzKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Nob3QgYWxyZWFkeSB0YWtlbiBhdCB0aGlzIGNvb3JkaW5hdGUnKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGN1cnJlbnRTaGlwcy5mb3JFYWNoKChvYmopID0+IHtcbiAgICAgICAgICAgIG9iai5jb29yZGluYXRlcy5mb3JFYWNoKChzaGlwQ29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoc2hpcENvb3JkaW5hdGUpID09PVxuICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShjb29yZGluYXRlcylcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBvYmouaGl0KCk7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NmdWxTaG90cy5wdXNoKEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGVzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodmFsdWUpIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbGxTaGlwc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50U2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJvYXJkSW5mb3JtYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjdXJyZW50U2hpcHMsXG4gICAgICAgICAgICBtaXNzZWRTaG90cyxcbiAgICAgICAgICAgIHN1Y2Nlc3NmdWxTaG90cyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIGFsbFNoaXBzU3VuayxcbiAgICAgICAgZ2V0Qm9hcmRJbmZvcm1hdGlvbixcbiAgICAgICAgZ2V0QWRqYWNlbnRDb29yZGluYXRlcyxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBQbGF5ZXIobmFtZSwgaXNDUFUgPSBmYWxzZSkge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuICAgIGNvbnN0IHByZXZpb3VzQXR0YWNrcyA9IFtdO1xuICAgIGZ1bmN0aW9uIGF0dGFja0VuZW15KGVuZW15LCBjb29yZGluYXRlKSB7XG4gICAgICAgIGVuZW15LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpO1xuICAgICAgICBwcmV2aW91c0F0dGFja3MucHVzaChKU09OLnN0cmluZ2lmeShjb29yZGluYXRlKSk7XG4gICAgICAgIHJldHVybiAnRW5lbXkgYXR0YWNrZWQnO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGUoKSB7XG4gICAgICAgIHJldHVybiBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcFJhbmRvbWx5KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGdhbWVib2FyZC5nZXRCb2FyZEluZm9ybWF0aW9uKCkuY3VycmVudFNoaXBzLmxlbmd0aCA+PSA1KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmFuZG9tQ29vcmRpbmF0ZSA9IGdlbmVyYXRlUmFuZG9tQ29vcmRpbmF0ZSgpO1xuICAgICAgICAgICAgbGV0IHJhbmRvbUxlbmd0aCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpO1xuICAgICAgICAgICAgd2hpbGUgKHJhbmRvbUxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgICAgICByYW5kb21MZW5ndGggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbURpcmVjdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID09PSAwO1xuICAgICAgICAgICAgZ2FtZWJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgICAgICAgICByYW5kb21Db29yZGluYXRlLFxuICAgICAgICAgICAgICAgIHJhbmRvbUxlbmd0aCxcbiAgICAgICAgICAgICAgICByYW5kb21EaXJlY3Rpb25cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwbGFjZVNoaXBSYW5kb21seSgpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHBsYWNlU2hpcFJhbmRvbWx5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcHJldmlvdXNMYXN0SGl0ID0gbnVsbDtcbiAgICBsZXQgbGFzdEhpdDtcbiAgICBmdW5jdGlvbiBjb21wdXRlckF0dGFjayhlbmVteSkge1xuICAgICAgICBmdW5jdGlvbiBnZXRBZGphY2VudENlbGwoY2VsbCkge1xuICAgICAgICAgICAgY29uc3QgYXJyYXkgPSBnYW1lYm9hcmQuZ2V0QWRqYWNlbnRDb29yZGluYXRlcyhcbiAgICAgICAgICAgICAgICBjZWxsLFxuICAgICAgICAgICAgICAgIHByZXZpb3VzQXR0YWNrc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5Lmxlbmd0aCk7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXlbb3B0aW9uXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGF0dGFja0FkamFjZW50Q2VsbCgpIHtcbiAgICAgICAgICAgIGxldCBuZXdDb29yZGluYXRlO1xuICAgICAgICAgICAgaWYgKGxhc3RIaXQpIHtcbiAgICAgICAgICAgICAgICBuZXdDb29yZGluYXRlID0gZ2V0QWRqYWNlbnRDZWxsKGxhc3RIaXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5ld0Nvb3JkaW5hdGUgPT09IFtdIHx8ICFuZXdDb29yZGluYXRlKSB7XG4gICAgICAgICAgICAgICAgbGFzdEhpdCA9IHByZXZpb3VzTGFzdEhpdDtcbiAgICAgICAgICAgICAgICBuZXdDb29yZGluYXRlID0gZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlKCk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKFxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0F0dGFja3MuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkobmV3Q29vcmRpbmF0ZSkpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0Nvb3JkaW5hdGUgPSBnZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhdHRhY2tFbmVteShlbmVteSwgbmV3Q29vcmRpbmF0ZSk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZW5lbXkuZ2FtZWJvYXJkXG4gICAgICAgICAgICAgICAgICAgIC5nZXRCb2FyZEluZm9ybWF0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgLnN1Y2Nlc3NmdWxTaG90cy5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShuZXdDb29yZGluYXRlKSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzTGFzdEhpdCA9IGxhc3RIaXQ7XG4gICAgICAgICAgICAgICAgbGFzdEhpdCA9IG5ld0Nvb3JkaW5hdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJ0NvbXB1dGVyIGF0dGFjayc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF0dGFja0FkamFjZW50Q2VsbCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNoaXBzTGVmdCgpIHtcbiAgICAgICAgY29uc3QgeyBjdXJyZW50U2hpcHMgfSA9IGdhbWVib2FyZC5nZXRCb2FyZEluZm9ybWF0aW9uKCk7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFNoaXBzW2ldLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgY291bnQgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudFNoaXBzLmxlbmd0aCAtIGNvdW50O1xuICAgIH1cblxuICAgIGlmIChpc0NQVSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGdhbWVib2FyZCxcbiAgICAgICAgICAgIGNvbXB1dGVyQXR0YWNrLFxuICAgICAgICAgICAgc2hpcHNMZWZ0LFxuICAgICAgICAgICAgcGxhY2VTaGlwUmFuZG9tbHksXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGdhbWVib2FyZCxcbiAgICAgICAgYXR0YWNrRW5lbXksXG4gICAgICAgIHNoaXBzTGVmdCxcbiAgICAgICAgcGxhY2VTaGlwUmFuZG9tbHksXG4gICAgfTtcbn1cblxuZXhwb3J0IHsgU2hpcCwgR2FtZWJvYXJkLCBQbGF5ZXIgfTtcbiIsImltcG9ydCByZXNldCBmcm9tICcuL3Jlc2V0LnN2Zyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkKHBsYXllcikge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkaW5hdGUnLCBgWyR7an0sJHtpfV1gKTtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIubmFtZSA9PT0gJ2NwdScpIHtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2F2YWlsYWJsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHBsYXllci5uYW1lKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiByZW5kZXJHYW1lYm9hcmQocGxheWVyKSB7XG4gICAgY29uc3QgYm9hcmQgPSBwbGF5ZXIuZ2FtZWJvYXJkLmdldEJvYXJkSW5mb3JtYXRpb24oKTtcbiAgICBib2FyZC5taXNzZWRTaG90cy5mb3JFYWNoKChwYWlyKSA9PiB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC4ke3BsYXllci5uYW1lfT5kaXZbZGF0YS1jb29yZGluYXRlPVwiJHtwYWlyfVwiXWBcbiAgICAgICAgKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgfSk7XG4gICAgYm9hcmQuc3VjY2Vzc2Z1bFNob3RzLmZvckVhY2goKHBhaXIpID0+IHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLiR7cGxheWVyLm5hbWV9PmRpdltkYXRhLWNvb3JkaW5hdGU9XCIke3BhaXJ9XCJdYFxuICAgICAgICApO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3N1Y2Nlc3MnKTtcbiAgICB9KTtcbiAgICBpZiAocGxheWVyLm5hbWUgIT09ICdjcHUnKSB7XG4gICAgICAgIGJvYXJkLmN1cnJlbnRTaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBzaGlwLmNvb3JkaW5hdGVzLmZvckVhY2goKHBhaXIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgYC4ke3BsYXllci5uYW1lfT5kaXZbZGF0YS1jb29yZGluYXRlPVwiJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhaXJcbiAgICAgICAgICAgICAgICAgICAgKX1cIl1gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZSgpIHtcbiAgICBjb25zdCBvbmVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHMtY29udGFpbmVyPmRpdicpO1xuICAgIGNvbnN0IGFsbERpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcHMtY29udGFpbmVyPmRpdicpO1xuICAgIGNvbnN0IFssIGRpcmVjdGlvbl0gPSBKU09OLnBhcnNlKG9uZURpdi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5mbycpKTtcbiAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGFsbERpdnMuZm9yRWFjaCgoZGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBbbGVuZ3RoXSA9IEpTT04ucGFyc2UoZGl2LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmZvJykpO1xuICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1pbmZvJywgYFske2xlbmd0aH0sIGZhbHNlXWApO1xuICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgd2lkdGg6MzVweDtoZWlnaHQ6JHtsZW5ndGggKiAzNX1weGApO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhbGxEaXZzLmZvckVhY2goKGRpdikgPT4ge1xuICAgICAgICAgICAgY29uc3QgW2xlbmd0aF0gPSBKU09OLnBhcnNlKGRpdi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5mbycpKTtcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5mbycsIGBbJHtsZW5ndGh9LCB0cnVlXWApO1xuICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgaGVpZ2h0OjM1cHg7d2lkdGg6JHtsZW5ndGggKiAzNX1weGApO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBkcmFnU3RhcnQoZSkge1xuICAgIGUuZGF0YVRyYW5zZmVyLmNsZWFyRGF0YSgpO1xuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5mbycpKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfSwgMCk7XG59XG5mdW5jdGlvbiBkcmFnRW5kKCkge1xuICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaGlwRGl2cyhwbGF5ZXIsIGZuKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NoaXBzLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHJvdGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJvdGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdSb3RhdGUnO1xuICAgIHJvdGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZSk7XG4gICAgY29uc3QgcGxhY2VSYW5kb21seUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHBsYWNlUmFuZG9tbHlCdXR0b24udGV4dENvbnRlbnQgPSAnUGxhY2Ugc2hpcHMgcmFuZG9tbHknO1xuICAgIHBsYWNlUmFuZG9tbHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHBsYXllci5wbGFjZVNoaXBSYW5kb21seSgpO1xuICAgICAgICByZW5kZXJHYW1lYm9hcmQocGxheWVyKTtcbiAgICAgICAgZm4oKTtcbiAgICB9KTtcbiAgICBjb250YWluZXIuYXBwZW5kKHJvdGF0ZUJ1dHRvbiwgcGxhY2VSYW5kb21seUJ1dHRvbik7XG4gICAgY29uc3Qgc2hpcERpdnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA1OyBpKyspIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBsZW5ndGggPSBpO1xuICAgICAgICBpZiAoaSA8IDIpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IDM7XG4gICAgICAgIH1cbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1pbmZvJywgYFske2xlbmd0aH0sIHRydWVdYCk7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGhlaWdodDozNXB4O3dpZHRoOiR7bGVuZ3RoICogMzV9cHhgKTtcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdTdGFydCk7XG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZHJhZ0VuZCk7XG4gICAgICAgIHNoaXBEaXZzLnB1c2goZGl2KTtcbiAgICB9XG4gICAgY29udGFpbmVyLmFwcGVuZCguLi5zaGlwRGl2cyk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVzdGFydEJ1dHRvbigpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCByZXNldCk7XG4gICAgYnV0dG9uLmFwcGVuZChpbWcpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZXhwb3J0IHsgY3JlYXRlQm9hcmQsIHJlbmRlckdhbWVib2FyZCwgY3JlYXRlU2hpcERpdnMsIGNyZWF0ZVJlc3RhcnRCdXR0b24gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL2JhdHRsZXNoaXAnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge1xuICAgIGNyZWF0ZUJvYXJkLFxuICAgIHJlbmRlckdhbWVib2FyZCxcbiAgICBjcmVhdGVTaGlwRGl2cyxcbiAgICBjcmVhdGVSZXN0YXJ0QnV0dG9uLFxufSBmcm9tICcuL2RvbSc7XG5cbmNvbnN0IHBsYXllcjEgPSBQbGF5ZXIoJ3BsYXllcjEnKTtcbmNvbnN0IGNwdSA9IFBsYXllcignY3B1JywgdHJ1ZSk7XG5jb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyPnAnKTtcbmNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5wYXJhLnRleHRDb250ZW50ID0gYFNoaXBzIGxlZnQ6ICR7Y3B1LnNoaXBzTGVmdCgpfWA7XG5cbmNwdS5wbGFjZVNoaXBSYW5kb21seSgpO1xuXG5jb25zdCBib2FyZCA9IGNyZWF0ZUJvYXJkKHBsYXllcjEpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQoYm9hcmQpO1xucmVuZGVyR2FtZWJvYXJkKHBsYXllcjEpO1xuXG5mdW5jdGlvbiBnYW1lTG9vcChwbGF5ZXIsIGNvbXB1dGVyLCBjb29yZGluYXRlKSB7XG4gICAgaWYgKGNvbXB1dGVyLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSB8fCBwbGF5ZXIuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignR2FtZSBhbHJlYWR5IGVuZGVkJyk7XG4gICAgfVxuICAgIHBsYXllci5hdHRhY2tFbmVteShjb21wdXRlciwgY29vcmRpbmF0ZSk7XG4gICAgcmVuZGVyR2FtZWJvYXJkKGNwdSk7XG4gICAgcGFyYS50ZXh0Q29udGVudCA9IGBTaGlwcyBsZWZ0OiAke2NwdS5zaGlwc0xlZnQoKX1gO1xuICAgIGlmIChjb21wdXRlci5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9ICdQbGF5ZXIgd29uJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVSZXN0YXJ0QnV0dG9uKCkpO1xuICAgIH1cbiAgICBjb21wdXRlci5jb21wdXRlckF0dGFjayhwbGF5ZXIpO1xuICAgIHJlbmRlckdhbWVib2FyZChwbGF5ZXIxKTtcbiAgICBpZiAocGxheWVyLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gJ0NQVSB3b24nO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVJlc3RhcnRCdXR0b24oKSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhZGRDUFVDZWxsc0xpc3RlbmVyKCkge1xuICAgIGNvbnN0IGNwdUNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNwdT5kaXZbZGF0YS1jb29yZGluYXRlXScpO1xuICAgIGNwdUNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IEpTT04ucGFyc2UoXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1jb29yZGluYXRlJylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBnYW1lTG9vcChwbGF5ZXIxLCBjcHUsIGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdhdmFpbGFibGUnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVNoaXBzRGl2KCkge1xuICAgIGlmIChwbGF5ZXIxLnNoaXBzTGVmdCgpID49IDUpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBzLWNvbnRhaW5lcicpLnJlbW92ZSgpO1xuICAgICAgICBjb25zdCBjcHVCb2FyZCA9IGNyZWF0ZUJvYXJkKGNwdSk7XG4gICAgICAgIGNwdUJvYXJkLmFwcGVuZChwYXJhKTtcbiAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChjcHVCb2FyZCk7XG4gICAgICAgIHJlbmRlckdhbWVib2FyZChjcHUpO1xuICAgICAgICBhZGRDUFVDZWxsc0xpc3RlbmVyKCk7XG4gICAgfVxufVxuZG9jdW1lbnQuYm9keS5hcHBlbmQoY3JlYXRlU2hpcERpdnMocGxheWVyMSwgcmVtb3ZlU2hpcHNEaXYpKTtcblxuY29uc3QgcGxheWVyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyMT5kaXZbZGF0YS1jb29yZGluYXRlXScpO1xuY29uc3QgZHJhZ092ZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn07XG5jb25zdCBkcm9wID0gZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zdCBpbmZvID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuICAgIGNvbnN0IGxlbmd0aCA9IEpTT04ucGFyc2UoaW5mbylbMF07XG4gICAgY29uc3Qgc3RhdGUgPSBKU09OLnBhcnNlKGluZm8pWzFdO1xuICAgIGNvbnN0IHN0YXJ0Q29vcmRpbmF0ZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1jb29yZGluYXRlJyk7XG4gICAgcGxheWVyMS5nYW1lYm9hcmQucGxhY2VTaGlwKEpTT04ucGFyc2Uoc3RhcnRDb29yZGluYXRlKSwgbGVuZ3RoLCBzdGF0ZSk7XG4gICAgcmVuZGVyR2FtZWJvYXJkKHBsYXllcjEpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZm89XCIke2luZm99XCJgKS5yZW1vdmUoKTtcbiAgICByZW1vdmVTaGlwc0RpdigpO1xufTtcbnBsYXllckNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ092ZXIpO1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyb3ApO1xufSk7XG5cbmV4cG9ydCB7IGdhbWVMb29wIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=