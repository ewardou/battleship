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
___CSS_LOADER_EXPORT___.push([module.id, "header {\n    grid-column: 1/3;\n    justify-self: center;\n}\nh1 {\n    font-family: 'Bungee Shade', cursive;\n    font-size: 3.5rem;\n    margin-bottom: 0;\n}\np {\n    font-family: sans-serif;\n    font-weight: bold;\n    font-size: 1.5rem;\n    height: 1.5rem;\n    text-align: center;\n    margin-top: 15px;\n    margin-bottom: 0;\n}\n\nbody > div {\n    --size: 350px;\n    width: var(--size);\n    border-top: solid black 1px;\n    border-left: solid black 1px;\n    outline: 2px solid black;\n    height: var(--size);\n    display: grid;\n    position: relative;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\ndiv > p {\n    position: absolute;\n    margin: 0;\n    font-size: 1.2rem;\n    bottom: -30px;\n    right: 0;\n    font-weight: bold;\n    font-family: sans-serif;\n}\nbody > div:first-of-type {\n    justify-self: end;\n}\n\nbody {\n    background-color: aquamarine;\n    display: grid;\n    gap: 50px;\n    row-gap: 30px;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: min-content 1fr;\n    justify-items: start;\n    align-items: center;\n}\n\nbody > div > div {\n    border-right: solid black 1px;\n    background-color: white;\n    border-bottom: solid black 1px;\n}\n\n.available:hover {\n    box-shadow: inset rgb(63, 50, 248) 0px 0px 5px 2px;\n}\n\n.ship {\n    background-color: blue;\n    border: none;\n}\n.miss {\n    background-color: rgb(253, 253, 191);\n    text-align: center;\n}\n.miss::after {\n    position: relative;\n    content: '';\n    display: block;\n    height: 12%;\n    width: 12%;\n    border-radius: 50%;\n    background: black;\n    left: 0;\n    right: 0;\n    top: 40%;\n    bottom: 0;\n    margin: auto;\n}\n.success::before,\n.success::after {\n    position: relative;\n    content: '';\n    background: rgba(0, 0, 0, 0.6);\n    display: inline-block;\n    width: 5%;\n    height: 155%;\n    transform: rotate(-45deg);\n    left: 0;\n    right: 0;\n    top: -10px;\n    bottom: 0;\n    margin: auto;\n}\n\n.success::after {\n    transform: rotate(45deg);\n}\n\n.ship {\n    background-color: blue;\n    border: none;\n    outline: none;\n}\n\n.success {\n    background-color: red;\n    overflow: hidden;\n    text-align: center;\n}\n\n.hide {\n    display: none;\n    transform: rotate(90deg);\n}\n\n.ships-container {\n    background-color: white;\n    outline: 2px black solid;\n    display: grid;\n    gap: 15px;\n    width: fit-content;\n    height: auto;\n    padding: 15px;\n    box-sizing: border-box;\n    grid-template-columns: min-content min-content min-content;\n    grid-template-rows: min-content min-content min-content;\n}\n.ships-container button {\n    grid-column: 1/4;\n    padding: 10px;\n    width: fit-content;\n    justify-self: center;\n    background-color: black;\n    color: white;\n    font-weight: bold;\n    border: none;\n    border-radius: 10px;\n    font-size: 1rem;\n}\n.ships-container button:hover {\n    background-color: gray;\n}\nbody > button {\n    grid-column: 1/3;\n    justify-self: center;\n    border-radius: 50%;\n    width: 65px;\n    height: 65px;\n    background-color: white;\n    border: black solid 2px;\n}\n\nbody > button:hover {\n    background-color: lightgray;\n}\n\nbody > button:active {\n    background-color: white;\n    transform: translate(0px, 4px);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,gBAAgB;IAChB,oBAAoB;AACxB;AACA;IACI,oCAAoC;IACpC,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,iBAAiB;IACjB,cAAc;IACd,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,2BAA2B;IAC3B,4BAA4B;IAC5B,wBAAwB;IACxB,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,sCAAsC;IACtC,mCAAmC;AACvC;AACA;IACI,kBAAkB;IAClB,SAAS;IACT,iBAAiB;IACjB,aAAa;IACb,QAAQ;IACR,iBAAiB;IACjB,uBAAuB;AAC3B;AACA;IACI,iBAAiB;AACrB;;AAEA;IACI,4BAA4B;IAC5B,aAAa;IACb,SAAS;IACT,aAAa;IACb,8BAA8B;IAC9B,mCAAmC;IACnC,oBAAoB;IACpB,mBAAmB;AACvB;;AAEA;IACI,6BAA6B;IAC7B,uBAAuB;IACvB,8BAA8B;AAClC;;AAEA;IACI,kDAAkD;AACtD;;AAEA;IACI,sBAAsB;IACtB,YAAY;AAChB;AACA;IACI,oCAAoC;IACpC,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,cAAc;IACd,WAAW;IACX,UAAU;IACV,kBAAkB;IAClB,iBAAiB;IACjB,OAAO;IACP,QAAQ;IACR,QAAQ;IACR,SAAS;IACT,YAAY;AAChB;AACA;;IAEI,kBAAkB;IAClB,WAAW;IACX,8BAA8B;IAC9B,qBAAqB;IACrB,SAAS;IACT,YAAY;IACZ,yBAAyB;IACzB,OAAO;IACP,QAAQ;IACR,UAAU;IACV,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,wBAAwB;AAC5B;;AAEA;IACI,uBAAuB;IACvB,wBAAwB;IACxB,aAAa;IACb,SAAS;IACT,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,0DAA0D;IAC1D,uDAAuD;AAC3D;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,kBAAkB;IAClB,oBAAoB;IACpB,uBAAuB;IACvB,YAAY;IACZ,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,gBAAgB;IAChB,oBAAoB;IACpB,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,uBAAuB;IACvB,8BAA8B;AAClC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap');\n\nheader {\n    grid-column: 1/3;\n    justify-self: center;\n}\nh1 {\n    font-family: 'Bungee Shade', cursive;\n    font-size: 3.5rem;\n    margin-bottom: 0;\n}\np {\n    font-family: sans-serif;\n    font-weight: bold;\n    font-size: 1.5rem;\n    height: 1.5rem;\n    text-align: center;\n    margin-top: 15px;\n    margin-bottom: 0;\n}\n\nbody > div {\n    --size: 350px;\n    width: var(--size);\n    border-top: solid black 1px;\n    border-left: solid black 1px;\n    outline: 2px solid black;\n    height: var(--size);\n    display: grid;\n    position: relative;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\ndiv > p {\n    position: absolute;\n    margin: 0;\n    font-size: 1.2rem;\n    bottom: -30px;\n    right: 0;\n    font-weight: bold;\n    font-family: sans-serif;\n}\nbody > div:first-of-type {\n    justify-self: end;\n}\n\nbody {\n    background-color: aquamarine;\n    display: grid;\n    gap: 50px;\n    row-gap: 30px;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: min-content 1fr;\n    justify-items: start;\n    align-items: center;\n}\n\nbody > div > div {\n    border-right: solid black 1px;\n    background-color: white;\n    border-bottom: solid black 1px;\n}\n\n.available:hover {\n    box-shadow: inset rgb(63, 50, 248) 0px 0px 5px 2px;\n}\n\n.ship {\n    background-color: blue;\n    border: none;\n}\n.miss {\n    background-color: rgb(253, 253, 191);\n    text-align: center;\n}\n.miss::after {\n    position: relative;\n    content: '';\n    display: block;\n    height: 12%;\n    width: 12%;\n    border-radius: 50%;\n    background: black;\n    left: 0;\n    right: 0;\n    top: 40%;\n    bottom: 0;\n    margin: auto;\n}\n.success::before,\n.success::after {\n    position: relative;\n    content: '';\n    background: rgba(0, 0, 0, 0.6);\n    display: inline-block;\n    width: 5%;\n    height: 155%;\n    transform: rotate(-45deg);\n    left: 0;\n    right: 0;\n    top: -10px;\n    bottom: 0;\n    margin: auto;\n}\n\n.success::after {\n    transform: rotate(45deg);\n}\n\n.ship {\n    background-color: blue;\n    border: none;\n    outline: none;\n}\n\n.success {\n    background-color: red;\n    overflow: hidden;\n    text-align: center;\n}\n\n.hide {\n    display: none;\n    transform: rotate(90deg);\n}\n\n.ships-container {\n    background-color: white;\n    outline: 2px black solid;\n    display: grid;\n    gap: 15px;\n    width: fit-content;\n    height: auto;\n    padding: 15px;\n    box-sizing: border-box;\n    grid-template-columns: min-content min-content min-content;\n    grid-template-rows: min-content min-content min-content;\n}\n.ships-container button {\n    grid-column: 1/4;\n    padding: 10px;\n    width: fit-content;\n    justify-self: center;\n    background-color: black;\n    color: white;\n    font-weight: bold;\n    border: none;\n    border-radius: 10px;\n    font-size: 1rem;\n}\n.ships-container button:hover {\n    background-color: gray;\n}\nbody > button {\n    grid-column: 1/3;\n    justify-self: center;\n    border-radius: 50%;\n    width: 65px;\n    height: 65px;\n    background-color: white;\n    border: black solid 2px;\n}\n\nbody > button:hover {\n    background-color: lightgray;\n}\n\nbody > button:active {\n    background-color: white;\n    transform: translate(0px, 4px);\n}\n"],"sourceRoot":""}]);
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

function createShipDivs() {
    const container = document.createElement('div');
    container.classList.add('ships-container');
    const rotateButton = document.createElement('button');
    rotateButton.textContent = 'Rotate';
    rotateButton.addEventListener('click', rotate);
    container.append(rotateButton);
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

document.body.append((0,_dom__WEBPACK_IMPORTED_MODULE_2__.createShipDivs)());



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM1Qix3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MseUJBQXlCO0FBQzNEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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QjtBQU1OOztBQUVmLGdCQUFnQixtREFBTTtBQUN0QixZQUFZLG1EQUFNO0FBQ2xCO0FBQ0E7QUFDQSxrQ0FBa0MsZ0JBQWdCO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFlO0FBQ25CLHNDQUFzQyxnQkFBZ0I7QUFDdEQ7QUFDQTtBQUNBLGtDQUFrQyx5REFBbUI7QUFDckQ7QUFDQTtBQUNBLElBQUkscURBQWU7QUFDbkI7QUFDQTtBQUNBLGtDQUFrQyx5REFBbUI7QUFDckQ7QUFDQTtBQUNBLGNBQWMsaURBQVc7QUFDekI7QUFDQSxxREFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpREFBVztBQUNwQztBQUNBO0FBQ0E7QUFDQSxRQUFRLHFEQUFlO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBZTtBQUNuQiwwQ0FBMEMsS0FBSztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxxQkFBcUIsb0RBQWM7O0FBRWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYmF0dGxlc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CdW5nZWUrU2hhZGUmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbmgxIHtcXG4gICAgZm9udC1mYW1pbHk6ICdCdW5nZWUgU2hhZGUnLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxucCB7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbmJvZHkgPiBkaXYge1xcbiAgICAtLXNpemU6IDM1MHB4O1xcbiAgICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuZGl2ID4gcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYm90dG9tOiAtMzBweDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuYm9keSA+IGRpdjpmaXJzdC1vZi10eXBlIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIHJvdy1nYXA6IDMwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5ib2R5ID4gZGl2ID4gZGl2IHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCBibGFjayAxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCBibGFjayAxcHg7XFxufVxcblxcbi5hdmFpbGFibGU6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiBpbnNldCByZ2IoNjMsIDUwLCAyNDgpIDBweCAwcHggNXB4IDJweDtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MywgMjUzLCAxOTEpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5taXNzOjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDEyJTtcXG4gICAgd2lkdGg6IDEyJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogNDAlO1xcbiAgICBib3R0b206IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuLnN1Y2Nlc3M6OmJlZm9yZSxcXG4uc3VjY2Vzczo6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDUlO1xcbiAgICBoZWlnaHQ6IDE1NSU7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IC0xMHB4O1xcbiAgICBib3R0b206IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLnN1Y2Nlc3M6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnN1Y2Nlc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5zaGlwcy1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgb3V0bGluZTogMnB4IGJsYWNrIHNvbGlkO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbn1cXG4uc2hpcHMtY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLnNoaXBzLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5ib2R5ID4gYnV0dG9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDY1cHg7XFxuICAgIGhlaWdodDogNjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogYmxhY2sgc29saWQgMnB4O1xcbn1cXG5cXG5ib2R5ID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG5ib2R5ID4gYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDRweCk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsU0FBUztJQUNULGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUNBQW1DO0lBQ25DLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtEQUFrRDtBQUN0RDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsT0FBTztJQUNQLFFBQVE7SUFDUixRQUFRO0lBQ1IsU0FBUztJQUNULFlBQVk7QUFDaEI7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsU0FBUztJQUNULFlBQVk7SUFDWix5QkFBeUI7SUFDekIsT0FBTztJQUNQLFFBQVE7SUFDUixVQUFVO0lBQ1YsU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDBEQUEwRDtJQUMxRCx1REFBdUQ7QUFDM0Q7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDhCQUE4QjtBQUNsQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CdW5nZWUrU2hhZGUmZGlzcGxheT1zd2FwJyk7XFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbmgxIHtcXG4gICAgZm9udC1mYW1pbHk6ICdCdW5nZWUgU2hhZGUnLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxucCB7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbmJvZHkgPiBkaXYge1xcbiAgICAtLXNpemU6IDM1MHB4O1xcbiAgICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuZGl2ID4gcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYm90dG9tOiAtMzBweDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuYm9keSA+IGRpdjpmaXJzdC1vZi10eXBlIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIHJvdy1nYXA6IDMwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5ib2R5ID4gZGl2ID4gZGl2IHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCBibGFjayAxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCBibGFjayAxcHg7XFxufVxcblxcbi5hdmFpbGFibGU6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiBpbnNldCByZ2IoNjMsIDUwLCAyNDgpIDBweCAwcHggNXB4IDJweDtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MywgMjUzLCAxOTEpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5taXNzOjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDEyJTtcXG4gICAgd2lkdGg6IDEyJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogNDAlO1xcbiAgICBib3R0b206IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuLnN1Y2Nlc3M6OmJlZm9yZSxcXG4uc3VjY2Vzczo6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDUlO1xcbiAgICBoZWlnaHQ6IDE1NSU7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IC0xMHB4O1xcbiAgICBib3R0b206IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLnN1Y2Nlc3M6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnN1Y2Nlc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5zaGlwcy1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgb3V0bGluZTogMnB4IGJsYWNrIHNvbGlkO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbn1cXG4uc2hpcHMtY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLnNoaXBzLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5ib2R5ID4gYnV0dG9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDY1cHg7XFxuICAgIGhlaWdodDogNjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogYmxhY2sgc29saWQgMnB4O1xcbn1cXG5cXG5ib2R5ID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG5ib2R5ID4gYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDRweCk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIFNoaXAobGVuZ3RoKSB7XG4gICAgaWYgKGxlbmd0aCA8IDIgfHwgIWxlbmd0aCB8fCBsZW5ndGggPiA1KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTGVuZ3RoIG11c3QgYmUgZ3JlYXRlciB0aGFuIDAgYW5kIGxlc3MgdGhhbiA2Jyk7XG4gICAgfVxuICAgIGxldCBzdW5rID0gZmFsc2U7XG4gICAgbGV0IG51bWJlck9mSGl0cyA9IDA7XG4gICAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgICAgICBzdW5rID0gbnVtYmVyT2ZIaXRzID49IGxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHN1bms7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhpdCgpIHtcbiAgICAgICAgaWYgKHN1bmspIHJldHVybiAnVGhlIHNoaXAgaGFzIGFscmVhZHkgc3Vuayc7XG4gICAgICAgIG51bWJlck9mSGl0cyArPSAxO1xuICAgICAgICBpc1N1bmsoKTtcbiAgICAgICAgcmV0dXJuIG51bWJlck9mSGl0cztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBoaXQsXG4gICAgICAgIGlzU3VuayxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gICAgY29uc3QgYXZhaWxhYmxlQ29vcmRpbmF0ZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICBhdmFpbGFibGVDb29yZGluYXRlcy5wdXNoKEpTT04uc3RyaW5naWZ5KFtpLCBqXSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHNoaXBTdXJyb3VuZENvb3JkaW5hdGVzID0gW107XG5cbiAgICBmdW5jdGlvbiByZW1vdmVDb29yZGluYXRlcyguLi5jb29yZGluYXRlcykge1xuICAgICAgICB3aGlsZSAoY29vcmRpbmF0ZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGF2YWlsYWJsZUNvb3JkaW5hdGVzLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZXNbMF0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYXZhaWxhYmxlQ29vcmRpbmF0ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0F2YWlsYWJpbGl0eUZvclBsYWNpbmcoLi4uY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICFhdmFpbGFibGVDb29yZGluYXRlcy5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShlbGVtZW50KSkgfHxcbiAgICAgICAgICAgICAgICBzaGlwU3Vycm91bmRDb29yZGluYXRlcy5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShlbGVtZW50KSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgYENvb3JkaW5hdGUgJHtKU09OLnN0cmluZ2lmeShlbGVtZW50KX0gaXMgYWxyZWFkeSBvY2N1cGllZGBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50U2hpcHMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrQm9hcmRMaW1pdHMoY29vcmRpbmF0ZSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjb29yZGluYXRlWzBdID4gOSB8fFxuICAgICAgICAgICAgY29vcmRpbmF0ZVsxXSA+IDkgfHxcbiAgICAgICAgICAgIGNvb3JkaW5hdGVbMF0gPCAwIHx8XG4gICAgICAgICAgICBjb29yZGluYXRlWzFdIDwgMFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignT3V0c2lkZSBvZiBib2FyZCBsaW1pdHMnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRBZGphY2VudENvb3JkaW5hdGVzKGNlbGwsIHJlY29yZEFycmF5LCBkaWFnb25hbHMgPSBmYWxzZSkge1xuICAgICAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICAgICAgaWYgKGNlbGxbMF0gPj0gMCAmJiBjZWxsWzBdIDwgOSkge1xuICAgICAgICAgICAgYXJyYXkucHVzaChbY2VsbFswXSArIDEsIGNlbGxbMV1dKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2VsbFswXSA8PSA5ICYmIGNlbGxbMF0gPiAwKSB7XG4gICAgICAgICAgICBhcnJheS5wdXNoKFtjZWxsWzBdIC0gMSwgY2VsbFsxXV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZWxsWzFdID49IDAgJiYgY2VsbFsxXSA8IDkpIHtcbiAgICAgICAgICAgIGFycmF5LnB1c2goW2NlbGxbMF0sIGNlbGxbMV0gKyAxXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNlbGxbMV0gPD0gOSAmJiBjZWxsWzFdID4gMCkge1xuICAgICAgICAgICAgYXJyYXkucHVzaChbY2VsbFswXSwgY2VsbFsxXSAtIDFdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaWFnb25hbHMpIHtcbiAgICAgICAgICAgIGlmIChjZWxsWzBdIDw9IDkgJiYgY2VsbFswXSA+IDAgJiYgY2VsbFsxXSA8PSA5ICYmIGNlbGxbMV0gPiAwKSB7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChbY2VsbFswXSAtIDEsIGNlbGxbMV0gLSAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2VsbFswXSA8PSA5ICYmIGNlbGxbMF0gPiAwICYmIGNlbGxbMV0gPj0gMCAmJiBjZWxsWzFdIDwgOSkge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goW2NlbGxbMF0gLSAxLCBjZWxsWzFdICsgMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNlbGxbMF0gPj0gMCAmJiBjZWxsWzBdIDwgOSAmJiBjZWxsWzFdIDw9IDkgJiYgY2VsbFsxXSA+IDApIHtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKFtjZWxsWzBdICsgMSwgY2VsbFsxXSAtIDFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjZWxsWzBdID49IDAgJiYgY2VsbFswXSA8IDkgJiYgY2VsbFsxXSA+PSAwICYmIGNlbGxbMV0gPCA5KSB7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChbY2VsbFswXSArIDEsIGNlbGxbMV0gKyAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhcnJheSA9IGFycmF5LmZpbHRlcihcbiAgICAgICAgICAgIChwYWlyKSA9PiAhcmVjb3JkQXJyYXkuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkocGFpcikpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGFjZVNoaXAoc3RhcnRpbmdDb29yZGluYXRlLCBsZW5ndGgsIGlzSG9yaXpvbnRhbCA9IHRydWUpIHtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5ld0Nvb3JkaW5hdGU7XG4gICAgICAgICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgbmV3Q29vcmRpbmF0ZSA9IFtzdGFydGluZ0Nvb3JkaW5hdGVbMF0gKyBpXS5jb25jYXQoW1xuICAgICAgICAgICAgICAgICAgICBzdGFydGluZ0Nvb3JkaW5hdGVbMV0sXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld0Nvb3JkaW5hdGUgPSBbc3RhcnRpbmdDb29yZGluYXRlWzBdXS5jb25jYXQoW1xuICAgICAgICAgICAgICAgICAgICBzdGFydGluZ0Nvb3JkaW5hdGVbMV0gKyBpLFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hlY2tCb2FyZExpbWl0cyhuZXdDb29yZGluYXRlKTtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2gobmV3Q29vcmRpbmF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tBdmFpbGFiaWxpdHlGb3JQbGFjaW5nKC4uLmNvb3JkaW5hdGVzKTtcbiAgICAgICAgY29uc3QgbmV3U2hpcCA9IFNoaXAobGVuZ3RoKTtcbiAgICAgICAgbmV3U2hpcC5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgICAgICByZW1vdmVDb29yZGluYXRlcyguLi5jb29yZGluYXRlcyk7XG4gICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKHBhaXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1cnJvdW5kaW5nID0gZ2V0QWRqYWNlbnRDb29yZGluYXRlcyhcbiAgICAgICAgICAgICAgICBwYWlyLFxuICAgICAgICAgICAgICAgIHNoaXBTdXJyb3VuZENvb3JkaW5hdGVzLFxuICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzdXJyb3VuZGluZy5mb3JFYWNoKChzdWIpID0+IHtcbiAgICAgICAgICAgICAgICBzaGlwU3Vycm91bmRDb29yZGluYXRlcy5wdXNoKEpTT04uc3RyaW5naWZ5KHN1YikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjdXJyZW50U2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgcmV0dXJuIG5ld1NoaXA7XG4gICAgfVxuXG4gICAgY29uc3QgbWlzc2VkU2hvdHMgPSBbXTtcbiAgICBjb25zdCBzdWNjZXNzZnVsU2hvdHMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgY2hlY2tCb2FyZExpbWl0cyhjb29yZGluYXRlcyk7XG4gICAgICAgIGlmIChhdmFpbGFibGVDb29yZGluYXRlcy5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShjb29yZGluYXRlcykpKSB7XG4gICAgICAgICAgICBtaXNzZWRTaG90cy5wdXNoKEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGVzKSk7XG4gICAgICAgICAgICByZW1vdmVDb29yZGluYXRlcyhjb29yZGluYXRlcyk7XG4gICAgICAgICAgICByZXR1cm4gbWlzc2VkU2hvdHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbWlzc2VkU2hvdHMuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZXMpKSB8fFxuICAgICAgICAgICAgc3VjY2Vzc2Z1bFNob3RzLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGVzKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Nob3QgYWxyZWFkeSB0YWtlbiBhdCB0aGlzIGNvb3JkaW5hdGUnKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGN1cnJlbnRTaGlwcy5mb3JFYWNoKChvYmopID0+IHtcbiAgICAgICAgICAgIG9iai5jb29yZGluYXRlcy5mb3JFYWNoKChzaGlwQ29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoc2hpcENvb3JkaW5hdGUpID09PVxuICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShjb29yZGluYXRlcylcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBvYmouaGl0KCk7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NmdWxTaG90cy5wdXNoKEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGVzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodmFsdWUpIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbGxTaGlwc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50U2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJvYXJkSW5mb3JtYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjdXJyZW50U2hpcHMsXG4gICAgICAgICAgICBtaXNzZWRTaG90cyxcbiAgICAgICAgICAgIHN1Y2Nlc3NmdWxTaG90cyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIGFsbFNoaXBzU3VuayxcbiAgICAgICAgZ2V0Qm9hcmRJbmZvcm1hdGlvbixcbiAgICAgICAgZ2V0QWRqYWNlbnRDb29yZGluYXRlcyxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBQbGF5ZXIobmFtZSwgaXNDUFUgPSBmYWxzZSkge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuICAgIGNvbnN0IHByZXZpb3VzQXR0YWNrcyA9IFtdO1xuICAgIGZ1bmN0aW9uIGF0dGFja0VuZW15KGVuZW15LCBjb29yZGluYXRlKSB7XG4gICAgICAgIGVuZW15LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpO1xuICAgICAgICBwcmV2aW91c0F0dGFja3MucHVzaChKU09OLnN0cmluZ2lmeShjb29yZGluYXRlKSk7XG4gICAgICAgIHJldHVybiAnRW5lbXkgYXR0YWNrZWQnO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGUoKSB7XG4gICAgICAgIHJldHVybiBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcFJhbmRvbWx5KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGdhbWVib2FyZC5nZXRCb2FyZEluZm9ybWF0aW9uKCkuY3VycmVudFNoaXBzLmxlbmd0aCA+PSA1KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmFuZG9tQ29vcmRpbmF0ZSA9IGdlbmVyYXRlUmFuZG9tQ29vcmRpbmF0ZSgpO1xuICAgICAgICAgICAgbGV0IHJhbmRvbUxlbmd0aCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpO1xuICAgICAgICAgICAgd2hpbGUgKHJhbmRvbUxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgICAgICByYW5kb21MZW5ndGggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbURpcmVjdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID09PSAwO1xuICAgICAgICAgICAgZ2FtZWJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgICAgICAgICByYW5kb21Db29yZGluYXRlLFxuICAgICAgICAgICAgICAgIHJhbmRvbUxlbmd0aCxcbiAgICAgICAgICAgICAgICByYW5kb21EaXJlY3Rpb25cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwbGFjZVNoaXBSYW5kb21seSgpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHBsYWNlU2hpcFJhbmRvbWx5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcHJldmlvdXNMYXN0SGl0ID0gbnVsbDtcbiAgICBsZXQgbGFzdEhpdDtcbiAgICBmdW5jdGlvbiBjb21wdXRlckF0dGFjayhlbmVteSkge1xuICAgICAgICBmdW5jdGlvbiBnZXRBZGphY2VudENlbGwoY2VsbCkge1xuICAgICAgICAgICAgY29uc3QgYXJyYXkgPSBnYW1lYm9hcmQuZ2V0QWRqYWNlbnRDb29yZGluYXRlcyhcbiAgICAgICAgICAgICAgICBjZWxsLFxuICAgICAgICAgICAgICAgIHByZXZpb3VzQXR0YWNrc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5Lmxlbmd0aCk7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXlbb3B0aW9uXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGF0dGFja0FkamFjZW50Q2VsbCgpIHtcbiAgICAgICAgICAgIGxldCBuZXdDb29yZGluYXRlO1xuICAgICAgICAgICAgaWYgKGxhc3RIaXQpIHtcbiAgICAgICAgICAgICAgICBuZXdDb29yZGluYXRlID0gZ2V0QWRqYWNlbnRDZWxsKGxhc3RIaXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5ld0Nvb3JkaW5hdGUgPT09IFtdIHx8ICFuZXdDb29yZGluYXRlKSB7XG4gICAgICAgICAgICAgICAgbGFzdEhpdCA9IHByZXZpb3VzTGFzdEhpdDtcbiAgICAgICAgICAgICAgICBuZXdDb29yZGluYXRlID0gZ2VuZXJhdGVSYW5kb21Db29yZGluYXRlKCk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKFxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0F0dGFja3MuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkobmV3Q29vcmRpbmF0ZSkpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0Nvb3JkaW5hdGUgPSBnZW5lcmF0ZVJhbmRvbUNvb3JkaW5hdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhdHRhY2tFbmVteShlbmVteSwgbmV3Q29vcmRpbmF0ZSk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZW5lbXkuZ2FtZWJvYXJkXG4gICAgICAgICAgICAgICAgICAgIC5nZXRCb2FyZEluZm9ybWF0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgLnN1Y2Nlc3NmdWxTaG90cy5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShuZXdDb29yZGluYXRlKSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzTGFzdEhpdCA9IGxhc3RIaXQ7XG4gICAgICAgICAgICAgICAgbGFzdEhpdCA9IG5ld0Nvb3JkaW5hdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJ0NvbXB1dGVyIGF0dGFjayc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF0dGFja0FkamFjZW50Q2VsbCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNoaXBzTGVmdCgpIHtcbiAgICAgICAgY29uc3QgeyBjdXJyZW50U2hpcHMgfSA9IGdhbWVib2FyZC5nZXRCb2FyZEluZm9ybWF0aW9uKCk7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFNoaXBzW2ldLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgY291bnQgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudFNoaXBzLmxlbmd0aCAtIGNvdW50O1xuICAgIH1cblxuICAgIGlmIChpc0NQVSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGdhbWVib2FyZCxcbiAgICAgICAgICAgIGNvbXB1dGVyQXR0YWNrLFxuICAgICAgICAgICAgc2hpcHNMZWZ0LFxuICAgICAgICAgICAgcGxhY2VTaGlwUmFuZG9tbHksXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGdhbWVib2FyZCxcbiAgICAgICAgYXR0YWNrRW5lbXksXG4gICAgICAgIHNoaXBzTGVmdCxcbiAgICB9O1xufVxuXG5leHBvcnQgeyBTaGlwLCBHYW1lYm9hcmQsIFBsYXllciB9O1xuIiwiaW1wb3J0IHJlc2V0IGZyb20gJy4vcmVzZXQuc3ZnJztcblxuZnVuY3Rpb24gY3JlYXRlQm9hcmQocGxheWVyKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmRpbmF0ZScsIGBbJHtqfSwke2l9XWApO1xuICAgICAgICAgICAgaWYgKHBsYXllci5uYW1lID09PSAnY3B1Jykge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnYXZhaWxhYmxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQocGxheWVyLm5hbWUpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckdhbWVib2FyZChwbGF5ZXIpIHtcbiAgICBjb25zdCBib2FyZCA9IHBsYXllci5nYW1lYm9hcmQuZ2V0Qm9hcmRJbmZvcm1hdGlvbigpO1xuICAgIGJvYXJkLm1pc3NlZFNob3RzLmZvckVhY2goKHBhaXIpID0+IHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLiR7cGxheWVyLm5hbWV9PmRpdltkYXRhLWNvb3JkaW5hdGU9XCIke3BhaXJ9XCJdYFxuICAgICAgICApO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICB9KTtcbiAgICBib2FyZC5zdWNjZXNzZnVsU2hvdHMuZm9yRWFjaCgocGFpcikgPT4ge1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuJHtwbGF5ZXIubmFtZX0+ZGl2W2RhdGEtY29vcmRpbmF0ZT1cIiR7cGFpcn1cIl1gXG4gICAgICAgICk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc3VjY2VzcycpO1xuICAgIH0pO1xuICAgIGlmIChwbGF5ZXIubmFtZSAhPT0gJ2NwdScpIHtcbiAgICAgICAgYm9hcmQuY3VycmVudFNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXMuZm9yRWFjaCgocGFpcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBgLiR7cGxheWVyLm5hbWV9PmRpdltkYXRhLWNvb3JkaW5hdGU9XCIke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFpclxuICAgICAgICAgICAgICAgICAgICApfVwiXWBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcm90YXRlKCkge1xuICAgIGNvbnN0IG9uZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwcy1jb250YWluZXI+ZGl2Jyk7XG4gICAgY29uc3QgYWxsRGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwcy1jb250YWluZXI+ZGl2Jyk7XG4gICAgY29uc3QgWywgZGlyZWN0aW9uXSA9IEpTT04ucGFyc2Uob25lRGl2LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmZvJykpO1xuICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgICAgYWxsRGl2cy5mb3JFYWNoKChkaXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFtsZW5ndGhdID0gSlNPTi5wYXJzZShkaXYuZ2V0QXR0cmlidXRlKCdkYXRhLWluZm8nKSk7XG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLWluZm8nLCBgWyR7bGVuZ3RofSwgZmFsc2VdYCk7XG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsIGB3aWR0aDozNXB4O2hlaWdodDoke2xlbmd0aCAqIDM1fXB4YCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFsbERpdnMuZm9yRWFjaCgoZGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBbbGVuZ3RoXSA9IEpTT04ucGFyc2UoZGl2LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmZvJykpO1xuICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1pbmZvJywgYFske2xlbmd0aH0sIHRydWVdYCk7XG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBoZWlnaHQ6MzVweDt3aWR0aDoke2xlbmd0aCAqIDM1fXB4YCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRyYWdTdGFydChlKSB7XG4gICAgZS5kYXRhVHJhbnNmZXIuY2xlYXJEYXRhKCk7XG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmZvJykpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9LCAwKTtcbn1cbmZ1bmN0aW9uIGRyYWdFbmQoKSB7XG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoaXBEaXZzKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaGlwcy1jb250YWluZXInKTtcbiAgICBjb25zdCByb3RhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByb3RhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnUm90YXRlJztcbiAgICByb3RhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQocm90YXRlQnV0dG9uKTtcbiAgICBjb25zdCBzaGlwRGl2cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDU7IGkrKykge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGxlbmd0aCA9IGk7XG4gICAgICAgIGlmIChpIDwgMikge1xuICAgICAgICAgICAgbGVuZ3RoID0gMztcbiAgICAgICAgfVxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAndHJ1ZScpO1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLWluZm8nLCBgWyR7bGVuZ3RofSwgdHJ1ZV1gKTtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgaGVpZ2h0OjM1cHg7d2lkdGg6JHtsZW5ndGggKiAzNX1weGApO1xuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ1N0YXJ0KTtcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBkcmFnRW5kKTtcbiAgICAgICAgc2hpcERpdnMucHVzaChkaXYpO1xuICAgIH1cbiAgICBjb250YWluZXIuYXBwZW5kKC4uLnNoaXBEaXZzKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSZXN0YXJ0QnV0dG9uKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHJlc2V0KTtcbiAgICBidXR0b24uYXBwZW5kKGltZyk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG5leHBvcnQgeyBjcmVhdGVCb2FyZCwgcmVuZGVyR2FtZWJvYXJkLCBjcmVhdGVTaGlwRGl2cywgY3JlYXRlUmVzdGFydEJ1dHRvbiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vYmF0dGxlc2hpcCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7XG4gICAgY3JlYXRlQm9hcmQsXG4gICAgcmVuZGVyR2FtZWJvYXJkLFxuICAgIGNyZWF0ZVNoaXBEaXZzLFxuICAgIGNyZWF0ZVJlc3RhcnRCdXR0b24sXG59IGZyb20gJy4vZG9tJztcblxuY29uc3QgcGxheWVyMSA9IFBsYXllcigncGxheWVyMScpO1xuY29uc3QgY3B1ID0gUGxheWVyKCdjcHUnLCB0cnVlKTtcbmNwdS5wbGFjZVNoaXBSYW5kb21seSgpO1xuY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbnBhcmEudGV4dENvbnRlbnQgPSBgU2hpcHMgbGVmdDogJHtjcHUuc2hpcHNMZWZ0KCl9YDtcbmNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXI+cCcpO1xuXG5mdW5jdGlvbiBnYW1lTG9vcChwbGF5ZXIsIGNvbXB1dGVyLCBjb29yZGluYXRlKSB7XG4gICAgaWYgKGNvbXB1dGVyLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSB8fCBwbGF5ZXIuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignR2FtZSBhbHJlYWR5IGVuZGVkJyk7XG4gICAgfVxuICAgIHBsYXllci5hdHRhY2tFbmVteShjb21wdXRlciwgY29vcmRpbmF0ZSk7XG4gICAgcmVuZGVyR2FtZWJvYXJkKGNwdSk7XG4gICAgcGFyYS50ZXh0Q29udGVudCA9IGBTaGlwcyBsZWZ0OiAke2NwdS5zaGlwc0xlZnQoKX1gO1xuICAgIGlmIChjb21wdXRlci5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9ICdQbGF5ZXIgd29uJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVSZXN0YXJ0QnV0dG9uKCkpO1xuICAgIH1cbiAgICBjb21wdXRlci5jb21wdXRlckF0dGFjayhwbGF5ZXIpO1xuICAgIHJlbmRlckdhbWVib2FyZChwbGF5ZXIxKTtcbiAgICBpZiAocGxheWVyLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gJ0NwdSB3b24nO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVJlc3RhcnRCdXR0b24oKSk7XG4gICAgfVxufVxuY29uc3QgYm9hcmQgPSBjcmVhdGVCb2FyZChwbGF5ZXIxKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kKGJvYXJkKTtcbnJlbmRlckdhbWVib2FyZChwbGF5ZXIxKTtcblxuZnVuY3Rpb24gYWRkQ1BVQ2VsbHNMaXN0ZW5lcigpIHtcbiAgICBjb25zdCBjcHVDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jcHU+ZGl2W2RhdGEtY29vcmRpbmF0ZV0nKTtcbiAgICBjcHVDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBKU09OLnBhcnNlKFxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmRpbmF0ZScpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZ2FtZUxvb3AocGxheWVyMSwgY3B1LCBjb29yZGluYXRlKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYXZhaWxhYmxlJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTaGlwc0RpdigpIHtcbiAgICBpZiAocGxheWVyMS5zaGlwc0xlZnQoKSA+PSA1KSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwcy1jb250YWluZXInKS5yZW1vdmUoKTtcbiAgICAgICAgY29uc3QgY3B1Qm9hcmQgPSBjcmVhdGVCb2FyZChjcHUpO1xuICAgICAgICBjcHVCb2FyZC5hcHBlbmQocGFyYSk7XG4gICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY3B1Qm9hcmQpO1xuICAgICAgICByZW5kZXJHYW1lYm9hcmQoY3B1KTtcbiAgICAgICAgYWRkQ1BVQ2VsbHNMaXN0ZW5lcigpO1xuICAgIH1cbn1cbmNvbnN0IHBsYXllckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllcjE+ZGl2W2RhdGEtY29vcmRpbmF0ZV0nKTtcbmNvbnN0IGRyYWdPdmVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59O1xuY29uc3QgZHJvcCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc3QgaW5mbyA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKTtcbiAgICBjb25zdCBsZW5ndGggPSBKU09OLnBhcnNlKGluZm8pWzBdO1xuICAgIGNvbnN0IHN0YXRlID0gSlNPTi5wYXJzZShpbmZvKVsxXTtcbiAgICBjb25zdCBzdGFydENvb3JkaW5hdGUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmRpbmF0ZScpO1xuICAgIHBsYXllcjEuZ2FtZWJvYXJkLnBsYWNlU2hpcChKU09OLnBhcnNlKHN0YXJ0Q29vcmRpbmF0ZSksIGxlbmd0aCwgc3RhdGUpO1xuICAgIHJlbmRlckdhbWVib2FyZChwbGF5ZXIxKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmZvPVwiJHtpbmZvfVwiYCkucmVtb3ZlKCk7XG4gICAgcmVtb3ZlU2hpcHNEaXYoKTtcbn07XG5wbGF5ZXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdPdmVyKTtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wKTtcbn0pO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZChjcmVhdGVTaGlwRGl2cygpKTtcblxuZXhwb3J0IHsgZ2FtZUxvb3AgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==