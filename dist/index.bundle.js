(self["webpackChunkmealwebpackapi"] = self["webpackChunkmealwebpackapi"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #fff;\r\n  display: flex;\r\n  justify-content: left;\r\n  flex-direction: column;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: normal;\r\n}\r\n\r\n.header-container {\r\n  max-width: 1536px;\r\n  padding-left: 30px;\r\n  padding-right: 30px;\r\n  background-color: #2196f3;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-flow: row wrap;\r\n  border-bottom: 0.09px solid #fff;\r\n}\r\n\r\n.header-navbar {\r\n  max-width: 1536px;\r\n  padding: 4px;\r\n  display: flex;\r\n  padding-right: 30px;\r\n  align-items: center;\r\n}\r\n\r\n.restaurant-icon {\r\n  width: 60px;\r\n  margin-right: 20px;\r\n}\r\n\r\n.navbar-menu {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  list-style: none;\r\n}\r\n\r\n.menu-item-link {\r\n  display: inline-block;\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n\r\n.menu-active {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n.main {\r\n  max-width: 1536px;\r\n  margin-left: 30px;\r\n  margin-right: 30px;\r\n  overflow: hidden;\r\n}\r\n\r\n.meal-container {\r\n  padding: 2rem;\r\n  background-color: #f2f2f2;\r\n  gap: 2rem;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  list-style: none;\r\n}\r\n\r\n.meal-card {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  background-color: transparent;\r\n  background-image: linear-gradient(\r\n      -45deg,\r\n      transparent,\r\n      transparent 2%,\r\n      white 2%,\r\n      white 85%,\r\n      transparent,\r\n      85%,\r\n      transparent\r\n    ),\r\n    linear-gradient(to bottom right, #2ad, #2ad 90%, transparent 90%);\r\n  background-position: top left, 0.2em 0.2em;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.meal-head {\r\n  text-align: end;\r\n  font-style: italic;\r\n  font-size: 15px;\r\n}\r\n\r\n.meal-thumbail {\r\n  width: 300px;\r\n  height: 300px;\r\n  border-radius: 50%;\r\n  align-self: center;\r\n  padding: 10px;\r\n}\r\n\r\n.meal-item {\r\n  flex-grow: 0;\r\n  flex-basis: 100%;\r\n}\r\n\r\n.meal-interaction {\r\n  padding: 8px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 17px;\r\n}\r\n\r\n.meal-button {\r\n  padding: 6px;\r\n  border: none;\r\n  font-size: 17px;\r\n  cursor: pointer;\r\n}\r\n\r\n.meal-button:hover {\r\n  color: #00f;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .meal-item {\r\n    flex-basis: 47.5%;\r\n  }\r\n}\r\n\r\n@media (min-width: 1125px) {\r\n  .meal-item {\r\n    flex-basis: 31%;\r\n  }\r\n}\r\n\r\n.comment-popup {\r\n  padding: 2rem;\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n.comment-container {\r\n  display: flex;\r\n  gap: 1rem;\r\n  list-style: none;\r\n  flex-direction: column;\r\n}\r\n\r\n.comment-head {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  border-bottom: 1px solid #00f;\r\n  padding: 10px;\r\n}\r\n\r\n.comment-thumbail {\r\n  max-width: 348px;\r\n  max-height: 348px;\r\n  height: auto;\r\n  align-self: center;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.meal-image {\r\n  width: 100%;\r\n  height: auto;\r\n  border-radius: 50%;\r\n}\r\n\r\n.button-close {\r\n  border: none;\r\n  font-size: 17px;\r\n  font-weight: bold;\r\n  background-color: transparent;\r\n}\r\n\r\n.comment-details {\r\n  border-top: 1px solid #00f;\r\n  gap: 10px;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex-flow: row wrap;\r\n}\r\n\r\n.meal-desc {\r\n  padding: 10px;\r\n  font-size: 15px;\r\n  font-style: italic;\r\n}\r\n\r\n.add-comment {\r\n  padding: 16px;\r\n  border: 1px solid #000;\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.commet-item {\r\n  padding-left: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.comment-form {\r\n  padding: 10px;\r\n  display: flex;\r\n  gap: 10px;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-flow: row wrap;\r\n  border-bottom: 1px dashed #000;\r\n  margin-top: 10px;\r\n}\r\n\r\n.comment-input {\r\n  padding: 7px;\r\n}\r\n\r\n.comment-history {\r\n  display: block;\r\n  padding: 10px;\r\n  line-height: 1.5rem;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.footer-container {\r\n  max-width: 1536px;\r\n  margin: 30px;\r\n  width: 100%;\r\n  background-color: #2196f3;\r\n  opacity: 0.8;\r\n  display: block;\r\n  border-top: 0.09px solid #fff;\r\n}\r\n\r\n.nav-footer{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-flow: row wrap;\r\n  gap: 20px;\r\n  padding: 1rem;\r\n}\r\n\r\n.dev-description{\r\n  display: flex;\r\n}\r\n\r\n.developer{\r\n  display: flex;\r\n  padding: 10px;\r\n  list-style: none;\r\n}\r\n\r\n.mit{\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.d-popup header {\r\n  display: none;\r\n}\r\n\r\n.d-popup > main > .meal-container {\r\n  display: none;\r\n}\r\n\r\n.d-popup footer {\r\n  display: none;\r\n}\r\n\r\n.d-none {\r\n  display: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #fff;\r\n  display: flex;\r\n  justify-content: left;\r\n  flex-direction: column;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: normal;\r\n}\r\n\r\n.header-container {\r\n  max-width: 1536px;\r\n  padding-left: 30px;\r\n  padding-right: 30px;\r\n  background-color: #2196f3;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-flow: row wrap;\r\n  border-bottom: 0.09px solid #fff;\r\n}\r\n\r\n.header-navbar {\r\n  max-width: 1536px;\r\n  padding: 4px;\r\n  display: flex;\r\n  padding-right: 30px;\r\n  align-items: center;\r\n}\r\n\r\n.restaurant-icon {\r\n  width: 60px;\r\n  margin-right: 20px;\r\n}\r\n\r\n.navbar-menu {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  list-style: none;\r\n}\r\n\r\n.menu-item-link {\r\n  display: inline-block;\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n\r\n.menu-active {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n.main {\r\n  max-width: 1536px;\r\n  margin-left: 30px;\r\n  margin-right: 30px;\r\n  overflow: hidden;\r\n}\r\n\r\n.meal-container {\r\n  padding: 2rem;\r\n  background-color: #f2f2f2;\r\n  gap: 2rem;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  list-style: none;\r\n}\r\n\r\n.meal-card {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  background-color: transparent;\r\n  background-image: linear-gradient(\r\n      -45deg,\r\n      transparent,\r\n      transparent 2%,\r\n      white 2%,\r\n      white 85%,\r\n      transparent,\r\n      85%,\r\n      transparent\r\n    ),\r\n    linear-gradient(to bottom right, #2ad, #2ad 90%, transparent 90%);\r\n  background-position: top left, 0.2em 0.2em;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.meal-head {\r\n  text-align: end;\r\n  font-style: italic;\r\n  font-size: 15px;\r\n}\r\n\r\n.meal-thumbail {\r\n  width: 300px;\r\n  height: 300px;\r\n  border-radius: 50%;\r\n  align-self: center;\r\n  padding: 10px;\r\n}\r\n\r\n.meal-item {\r\n  flex-grow: 0;\r\n  flex-basis: 100%;\r\n}\r\n\r\n.meal-interaction {\r\n  padding: 8px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 17px;\r\n}\r\n\r\n.meal-button {\r\n  padding: 6px;\r\n  border: none;\r\n  font-size: 17px;\r\n  cursor: pointer;\r\n}\r\n\r\n.meal-button:hover {\r\n  color: #00f;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .meal-item {\r\n    flex-basis: 47.5%;\r\n  }\r\n}\r\n\r\n@media (min-width: 1125px) {\r\n  .meal-item {\r\n    flex-basis: 31%;\r\n  }\r\n}\r\n\r\n.comment-popup {\r\n  padding: 2rem;\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n.comment-container {\r\n  display: flex;\r\n  gap: 1rem;\r\n  list-style: none;\r\n  flex-direction: column;\r\n}\r\n\r\n.comment-head {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  border-bottom: 1px solid #00f;\r\n  padding: 10px;\r\n}\r\n\r\n.comment-thumbail {\r\n  max-width: 348px;\r\n  max-height: 348px;\r\n  height: auto;\r\n  align-self: center;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.meal-image {\r\n  width: 100%;\r\n  height: auto;\r\n  border-radius: 50%;\r\n}\r\n\r\n.button-close {\r\n  border: none;\r\n  font-size: 17px;\r\n  font-weight: bold;\r\n  background-color: transparent;\r\n}\r\n\r\n.comment-details {\r\n  border-top: 1px solid #00f;\r\n  gap: 10px;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex-flow: row wrap;\r\n}\r\n\r\n.meal-desc {\r\n  padding: 10px;\r\n  font-size: 15px;\r\n  font-style: italic;\r\n}\r\n\r\n.add-comment {\r\n  padding: 16px;\r\n  border: 1px solid #000;\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.commet-item {\r\n  padding-left: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.comment-form {\r\n  padding: 10px;\r\n  display: flex;\r\n  gap: 10px;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-flow: row wrap;\r\n  border-bottom: 1px dashed #000;\r\n  margin-top: 10px;\r\n}\r\n\r\n.comment-input {\r\n  padding: 7px;\r\n}\r\n\r\n.comment-history {\r\n  display: block;\r\n  padding: 10px;\r\n  line-height: 1.5rem;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.footer-container {\r\n  max-width: 1536px;\r\n  margin: 30px;\r\n  width: 100%;\r\n  background-color: #2196f3;\r\n  opacity: 0.8;\r\n  display: block;\r\n  border-top: 0.09px solid #fff;\r\n}\r\n\r\n.nav-footer{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-flow: row wrap;\r\n  gap: 20px;\r\n  padding: 1rem;\r\n}\r\n\r\n.dev-description{\r\n  display: flex;\r\n}\r\n\r\n.developer{\r\n  display: flex;\r\n  padding: 10px;\r\n  list-style: none;\r\n}\r\n\r\n.mit{\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.d-popup header {\r\n  display: none;\r\n}\r\n\r\n.d-popup > main > .meal-container {\r\n  display: none;\r\n}\r\n\r\n.d-popup footer {\r\n  display: none;\r\n}\r\n\r\n.d-none {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "resource/images/logo.png");

/***/ }),

/***/ "./src/assets/meal.jpg":
/*!*****************************!*\
  !*** ./src/assets/meal.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "resource/images/meal.jpg");

/***/ }),

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css");

      
      
      
      
      
      
      
      
      

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

"use strict";


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

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

"use strict";


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

"use strict";


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

"use strict";


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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

"use strict";


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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/style.css */ "./src/assets/style.css");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _assets_meal_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/meal.jpg */ "./src/assets/meal.jpg");
/* harmony import */ var _module_meal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/meal.js */ "./src/module/meal.js");
/* harmony import */ var _module_dom_elements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/dom_elements.js */ "./src/module/dom_elements.js");
/* harmony import */ var _module_eventlistener_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/eventlistener.js */ "./src/module/eventlistener.js");
/* harmony import */ var _module_likes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module/likes.js */ "./src/module/likes.js");
/* harmony import */ var _module_comments_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./module/comments.js */ "./src/module/comments.js");









let meals = [];
const render = () => {
  let list = '';
  document.getElementById(
    'item-count'
  ).textContent = `Seafood (${meals.length})`;
  meals.forEach((meal) => {
    list += `
    <li class="meal-item meal-card">
          <p class="meal-head">${meal.strMeal}</p>
          <hr>
          <img src="${meal.strMealThumb}" class="meal-thumbail">
          <hr>
          <div class="meal-interaction">
          <button class="meal-button meal-comment" value="${meal.idMeal}">&#10029; Comment</button>
            <button class="meal-button meal-like" value="${meal.idMeal}">&#10084; Like</button><p id="like${meal.idMeal}"> Liked 0</p></div>
          </div>
        </li>
    `;
  });
  _module_dom_elements_js__WEBPACK_IMPORTED_MODULE_4__.ulelement.innerHTML = list;
  (0,_module_likes_js__WEBPACK_IMPORTED_MODULE_6__.updatelikes)();
};

const loading = async () => {
  const resp = await (0,_module_meal_js__WEBPACK_IMPORTED_MODULE_3__["default"])().then((data) => {
    meals = [...data];
    render();
    (0,_module_eventlistener_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  });
  (0,_module_comments_js__WEBPACK_IMPORTED_MODULE_7__.addpopup)();
};
loading();


/***/ }),

/***/ "./src/module/comments.js":
/*!********************************!*\
  !*** ./src/module/comments.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addcomment": () => (/* binding */ addcomment),
/* harmony export */   "addpopup": () => (/* binding */ addpopup)
/* harmony export */ });
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ "./src/module/popup.js");
/* harmony import */ var _restapi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restapi.js */ "./src/module/restapi.js");
/* harmony import */ var _dom_elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom_elements.js */ "./src/module/dom_elements.js");
/* harmony import */ var _countcomment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countcomment.js */ "./src/module/countcomment.js");
/* harmony import */ var _countcomment_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_countcomment_js__WEBPACK_IMPORTED_MODULE_3__);





const commentdisplay = (content) => {
  document.querySelector('.popup-comments').innerHTML = content;
};

const commentpage = (list) => {
  document.getElementById('popupmeal-name').textContent = list.strMeal;
  document.getElementById('popupmeal-id').value = list.idMeal;
  document.getElementById(
    'popupmeal-cat'
  ).textContent = `Category : ${list.strCategory}`;
  document.getElementById(
    'popupmeal-area'
  ).textContent = `Area : ${list.strArea}`;
  document.getElementById(
    'popupmeal-tag'
  ).textContent = `Tags : ${list.strTags}`;
  document.getElementById('popupmeal-img').src = list.strMealThumb;
  document.getElementById('popupmeal-video').href = list.strYoutube;
};

const mealbyid = async (id) => {
  const url = `${_restapi_js__WEBPACK_IMPORTED_MODULE_1__.meal_url}/lookup.php?i=${id}`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      commentpage(data.meals[0]);
    }
  } catch (error) {
    console.log('Something is wrong comments.js line 14');
    throw error;
  }
};

const updatecomments = async (id) => {
  const url = `${_restapi_js__WEBPACK_IMPORTED_MODULE_1__.base_url}/comments?item_id=${id}`;
  commentdisplay('');
  _countcomment_js__WEBPACK_IMPORTED_MODULE_3___default()('');
  try {
    const response = await fetch(url);
    if (response.ok) {
      const lists = await response.json();
      _countcomment_js__WEBPACK_IMPORTED_MODULE_3___default()(lists.length);
      let html = '';
      lists.forEach((list) => {
        html += `<p class="comment-history"><strong>${list.username} :</strong>${list.comment} on <strong>${list.creation_date}.</strong>
        `;
      });
      commentdisplay(html);
    }
  } catch (error) {
    throw error;
  }
};

const addcomment = (event) => {
  mealbyid(event.target.value);
  updatecomments(event.target.value);
  (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__.togglepopup)();
};

const createcomment = async (event) => {
  event.preventDefault();
  const { item_id, username, comment } = event.target.elements;
  const data = {
    item_id: item_id.value,
    username: username.value,
    comment: comment.value,
  };
  const url = `${_restapi_js__WEBPACK_IMPORTED_MODULE_1__.base_url}/comments`;
  try {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => {
      if (response.ok) {
        updatecomments(data.item_id);
        _dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.formdata.reset();
      }
    });
  } catch (error) {
    throw error;
  }
};

const commentform = () => {
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.formdata.addEventListener('submit', createcomment);
};
const closepopup = () => {
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.btnclose.addEventListener('click', _popup_js__WEBPACK_IMPORTED_MODULE_0__.togglepopup);
};
const addpopup = () => {
  closepopup();
  commentform();
};


/***/ }),

/***/ "./src/module/countcomment.js":
/*!************************************!*\
  !*** ./src/module/countcomment.js ***!
  \************************************/
/***/ ((module) => {

function commentcounter(num) {
  document.getElementById('comment-count').textContent = num;
}
module.exports = commentcounter;


/***/ }),

/***/ "./src/module/countlike.js":
/*!*********************************!*\
  !*** ./src/module/countlike.js ***!
  \*********************************/
/***/ ((module) => {

function likecounter(id, num) {
  document.getElementById(id).textContent = num;
}
module.exports = likecounter;


/***/ }),

/***/ "./src/module/dom_elements.js":
/*!************************************!*\
  !*** ./src/module/dom_elements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "body": () => (/* binding */ body),
/* harmony export */   "btnclose": () => (/* binding */ btnclose),
/* harmony export */   "cpopup": () => (/* binding */ cpopup),
/* harmony export */   "formdata": () => (/* binding */ formdata),
/* harmony export */   "ulelement": () => (/* binding */ ulelement)
/* harmony export */ });
const ulelement = document.getElementById('meal-unorder-id');
const body = document.querySelector('body');
const cpopup = document.querySelector('.comment-popup');
const btnclose = document.querySelector('.button-close');
const formdata = document.querySelector('.comment-form');


/***/ }),

/***/ "./src/module/eventlistener.js":
/*!*************************************!*\
  !*** ./src/module/eventlistener.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.js */ "./src/module/comments.js");
/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likes.js */ "./src/module/likes.js");



const addaction = () => {
  const comments = document.querySelectorAll('.meal-comment');
  const likes = document.querySelectorAll('.meal-like');

  comments.forEach((comment) => {
    comment.addEventListener('click', _comments_js__WEBPACK_IMPORTED_MODULE_0__.addcomment);
  });
  likes.forEach((like) => {
    like.addEventListener('click', _likes_js__WEBPACK_IMPORTED_MODULE_1__.addlike);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addaction);


/***/ }),

/***/ "./src/module/likes.js":
/*!*****************************!*\
  !*** ./src/module/likes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addlike": () => (/* binding */ addlike),
/* harmony export */   "updatelikes": () => (/* binding */ updatelikes)
/* harmony export */ });
/* harmony import */ var _restapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restapi */ "./src/module/restapi.js");
/* harmony import */ var _countlike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countlike.js */ "./src/module/countlike.js");
/* harmony import */ var _countlike_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_countlike_js__WEBPACK_IMPORTED_MODULE_1__);



const renderlikes = (lists) => {
  lists.forEach((list) => {
    try {
      const id = `like${list.item_id}`;
      const like = `Liked ${list.likes}`;
      if (document.getElementById(id)) {
        _countlike_js__WEBPACK_IMPORTED_MODULE_1___default()(id, like);
      }
    } catch (error) {
      throw error;
    }
  });
};
const updatelikes = async () => {
  const url = `${_restapi__WEBPACK_IMPORTED_MODULE_0__.base_url}/likes/`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      renderlikes(data);
    }
  } catch (error) {
    throw error;
  }
};

const addlike = async (event) => {
  const mealid = event.target.value;
  const url = `${_restapi__WEBPACK_IMPORTED_MODULE_0__.base_url}/likes/`;
  try {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ item_id: mealid }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => {
      if (response.ok) {
        updatelikes();
      }
    });
  } catch (error) {
    throw error;
  }
};


/***/ }),

/***/ "./src/module/meal.js":
/*!****************************!*\
  !*** ./src/module/meal.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _restapi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restapi.js */ "./src/module/restapi.js");

 const getcategories = async () => {
   const url = `${_restapi_js__WEBPACK_IMPORTED_MODULE_0__.meal_url}/filter.php?c=Seafood`;
   try {
     const response = await fetch(url);
     const data = await response.json();
     return data.meals;
   } catch (error) {
     throw error;
   }
   return [];
 };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getcategories);


/***/ }),

/***/ "./src/module/popup.js":
/*!*****************************!*\
  !*** ./src/module/popup.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "togglepopup": () => (/* binding */ togglepopup)
/* harmony export */ });
/* harmony import */ var _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_elements.js */ "./src/module/dom_elements.js");

const togglepopup = () => {
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.cpopup.classList.toggle('d-none');
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.body.classList.toggle('d-popup');
};


/***/ }),

/***/ "./src/module/restapi.js":
/*!*******************************!*\
  !*** ./src/module/restapi.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base_url": () => (/* binding */ base_url),
/* harmony export */   "meal_url": () => (/* binding */ meal_url),
/* harmony export */   "start_url": () => (/* binding */ start_url)
/* harmony export */ });
const address = 'us-central1-involvement-api.cloudfunctions.net';
const dirname = 'capstoneApi';
const path = 'apps';
const start_url = `https://${address}/${dirname}/${path}/`;
const app_id = 'pWOkUYxHJi4ZVPIAAXpp';
const base_url = `https://${address}/${dirname}/${path}/${app_id}`;
const meal_url = 'https://www.themealdb.com/api/json/v1/1';


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLDZDQUE2QyxnQkFBZ0IsaUJBQWlCLDZCQUE2QixLQUFLLGNBQWMsNkJBQTZCLG9CQUFvQiw0QkFBNEIsNkJBQTZCLGdEQUFnRCwwQkFBMEIsS0FBSywyQkFBMkIsd0JBQXdCLHlCQUF5QiwwQkFBMEIsZ0NBQWdDLG9CQUFvQixxQ0FBcUMsMEJBQTBCLDBCQUEwQix1Q0FBdUMsS0FBSyx3QkFBd0Isd0JBQXdCLG1CQUFtQixvQkFBb0IsMEJBQTBCLDBCQUEwQixLQUFLLDBCQUEwQixrQkFBa0IseUJBQXlCLEtBQUssc0JBQXNCLG9CQUFvQixvQ0FBb0MsMEJBQTBCLHVCQUF1QixLQUFLLHlCQUF5Qiw0QkFBNEIsb0JBQW9CLHNCQUFzQiw0QkFBNEIsc0JBQXNCLEtBQUssc0JBQXNCLGdDQUFnQyxLQUFLLGVBQWUsd0JBQXdCLHdCQUF3Qix5QkFBeUIsdUJBQXVCLEtBQUsseUJBQXlCLG9CQUFvQixnQ0FBZ0MsZ0JBQWdCLG9CQUFvQiwwQkFBMEIsdUJBQXVCLEtBQUssb0JBQW9CLHlCQUF5QixvQkFBb0IsNkJBQTZCLG9CQUFvQixvQ0FBb0MsNFJBQTRSLGlEQUFpRCxtQ0FBbUMsS0FBSyxvQkFBb0Isc0JBQXNCLHlCQUF5QixzQkFBc0IsS0FBSyx3QkFBd0IsbUJBQW1CLG9CQUFvQix5QkFBeUIseUJBQXlCLG9CQUFvQixLQUFLLG9CQUFvQixtQkFBbUIsdUJBQXVCLEtBQUssMkJBQTJCLG1CQUFtQixvQkFBb0IscUNBQXFDLDBCQUEwQixzQkFBc0IsS0FBSyxzQkFBc0IsbUJBQW1CLG1CQUFtQixzQkFBc0Isc0JBQXNCLEtBQUssNEJBQTRCLGtCQUFrQixLQUFLLG1DQUFtQyxrQkFBa0IsMEJBQTBCLE9BQU8sS0FBSyxvQ0FBb0Msa0JBQWtCLHdCQUF3QixPQUFPLEtBQUssd0JBQXdCLG9CQUFvQixnQ0FBZ0MsS0FBSyw0QkFBNEIsb0JBQW9CLGdCQUFnQix1QkFBdUIsNkJBQTZCLEtBQUssdUJBQXVCLG9CQUFvQixxQ0FBcUMsOEJBQThCLG9DQUFvQyxvQkFBb0IsS0FBSywyQkFBMkIsdUJBQXVCLHdCQUF3QixtQkFBbUIseUJBQXlCLDJCQUEyQixLQUFLLHFCQUFxQixrQkFBa0IsbUJBQW1CLHlCQUF5QixLQUFLLHVCQUF1QixtQkFBbUIsc0JBQXNCLHdCQUF3QixvQ0FBb0MsS0FBSywwQkFBMEIsaUNBQWlDLGdCQUFnQixvQkFBb0Isb0NBQW9DLDBCQUEwQiwwQkFBMEIsS0FBSyxvQkFBb0Isb0JBQW9CLHNCQUFzQix5QkFBeUIsS0FBSyxzQkFBc0Isb0JBQW9CLDZCQUE2QixxQkFBcUIsa0JBQWtCLEtBQUssc0JBQXNCLHlCQUF5QiwyQkFBMkIsS0FBSyx1QkFBdUIsb0JBQW9CLG9CQUFvQixnQkFBZ0Isb0JBQW9CLGtDQUFrQywwQkFBMEIsMEJBQTBCLHFDQUFxQyx1QkFBdUIsS0FBSyx3QkFBd0IsbUJBQW1CLEtBQUssMEJBQTBCLHFCQUFxQixvQkFBb0IsMEJBQTBCLDBCQUEwQixLQUFLLDJCQUEyQix3QkFBd0IsbUJBQW1CLGtCQUFrQixnQ0FBZ0MsbUJBQW1CLHFCQUFxQixvQ0FBb0MsS0FBSyxvQkFBb0Isb0JBQW9CLHFDQUFxQywwQkFBMEIsMEJBQTBCLGdCQUFnQixvQkFBb0IsS0FBSyx5QkFBeUIsb0JBQW9CLEtBQUssbUJBQW1CLG9CQUFvQixvQkFBb0IsdUJBQXVCLEtBQUssYUFBYSxvQkFBb0IsMEJBQTBCLEtBQUsseUJBQXlCLG9CQUFvQixLQUFLLDJDQUEyQyxvQkFBb0IsS0FBSyx5QkFBeUIsb0JBQW9CLEtBQUssaUJBQWlCLG9CQUFvQixLQUFLLFdBQVcsdUZBQXVGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksZUFBZSxPQUFPLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxX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R0FBRyxLQUFLO0FBQy9EO0FBQ08sNEJBQTRCLFFBQVEsR0FBRyxRQUFRLEdBQUcsS0FBSyxHQUFHLE9BQU87QUFDakUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWFsd2VicGFja2FwaS8uL3NyYy9hc3NldHMvc3R5bGUuY3NzIiwid2VicGFjazovL21lYWx3ZWJwYWNrYXBpLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tZWFsd2VicGFja2FwaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL21lYWx3ZWJwYWNrYXBpLy4vc3JjL2Fzc2V0cy9sb2dvLnBuZyIsIndlYnBhY2s6Ly9tZWFsd2VicGFja2FwaS8uL3NyYy9hc3NldHMvbWVhbC5qcGciLCJ3ZWJwYWNrOi8vbWVhbHdlYnBhY2thcGkvLi9zcmMvYXNzZXRzL3N0eWxlLmNzcz82MDFkIiwid2VicGFjazovL21lYWx3ZWJwYWNrYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL21lYWx3ZWJwYWNrYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tZWFsd2VicGFja2FwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9tZWFsd2VicGFja2FwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9tZWFsd2VicGFja2FwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21lYWx3ZWJwYWNrYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbWVhbHdlYnBhY2thcGkvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWVhbHdlYnBhY2thcGkvLi9zcmMvbW9kdWxlL2NvbW1lbnRzLmpzIiwid2VicGFjazovL21lYWx3ZWJwYWNrYXBpLy4vc3JjL21vZHVsZS9jb3VudGNvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vbWVhbHdlYnBhY2thcGkvLi9zcmMvbW9kdWxlL2NvdW50bGlrZS5qcyIsIndlYnBhY2s6Ly9tZWFsd2VicGFja2FwaS8uL3NyYy9tb2R1bGUvZG9tX2VsZW1lbnRzLmpzIiwid2VicGFjazovL21lYWx3ZWJwYWNrYXBpLy4vc3JjL21vZHVsZS9ldmVudGxpc3RlbmVyLmpzIiwid2VicGFjazovL21lYWx3ZWJwYWNrYXBpLy4vc3JjL21vZHVsZS9saWtlcy5qcyIsIndlYnBhY2s6Ly9tZWFsd2VicGFja2FwaS8uL3NyYy9tb2R1bGUvbWVhbC5qcyIsIndlYnBhY2s6Ly9tZWFsd2VicGFja2FwaS8uL3NyYy9tb2R1bGUvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vbWVhbHdlYnBhY2thcGkvLi9zcmMvbW9kdWxlL3Jlc3RhcGkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1jb250YWluZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxNTM2cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDAuMDlweCBzb2xpZCAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLW5hdmJhciB7XFxyXFxuICBtYXgtd2lkdGg6IDE1MzZweDtcXHJcXG4gIHBhZGRpbmc6IDRweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3RhdXJhbnQtaWNvbiB7XFxyXFxuICB3aWR0aDogNjBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1tZW51IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtLWxpbmsge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIG1heC13aWR0aDogMTUzNnB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1jb250YWluZXIge1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWNhcmQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgICAgLTQ1ZGVnLFxcclxcbiAgICAgIHRyYW5zcGFyZW50LFxcclxcbiAgICAgIHRyYW5zcGFyZW50IDIlLFxcclxcbiAgICAgIHdoaXRlIDIlLFxcclxcbiAgICAgIHdoaXRlIDg1JSxcXHJcXG4gICAgICB0cmFuc3BhcmVudCxcXHJcXG4gICAgICA4NSUsXFxyXFxuICAgICAgdHJhbnNwYXJlbnRcXHJcXG4gICAgKSxcXHJcXG4gICAgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzJhZCwgIzJhZCA5MCUsIHRyYW5zcGFyZW50IDkwJSk7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdCwgMC4yZW0gMC4yZW07XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1oZWFkIHtcXHJcXG4gIHRleHQtYWxpZ246IGVuZDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtdGh1bWJhaWwge1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWl0ZW0ge1xcclxcbiAgZmxleC1ncm93OiAwO1xcclxcbiAgZmxleC1iYXNpczogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtaW50ZXJhY3Rpb24ge1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWJ1dHRvbjpob3ZlciB7XFxyXFxuICBjb2xvcjogIzAwZjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubWVhbC1pdGVtIHtcXHJcXG4gICAgZmxleC1iYXNpczogNDcuNSU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMTI1cHgpIHtcXHJcXG4gIC5tZWFsLWl0ZW0ge1xcclxcbiAgICBmbGV4LWJhc2lzOiAzMSU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXBvcHVwIHtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1oZWFkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDBmO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtdGh1bWJhaWwge1xcclxcbiAgbWF4LXdpZHRoOiAzNDhweDtcXHJcXG4gIG1heC1oZWlnaHQ6IDM0OHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWltYWdlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLWNsb3NlIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWRldGFpbHMge1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMGY7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtZGVzYyB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbW1lbnQge1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWV0LWl0ZW0ge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWZvcm0ge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICMwMDA7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1pbnB1dCB7XFxyXFxuICBwYWRkaW5nOiA3cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWhpc3Rvcnkge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItY29udGFpbmVyIHtcXHJcXG4gIG1heC13aWR0aDogMTUzNnB4O1xcclxcbiAgbWFyZ2luOiAzMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xcclxcbiAgb3BhY2l0eTogMC44O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBib3JkZXItdG9wOiAwLjA5cHggc29saWQgI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1mb290ZXJ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV2LWRlc2NyaXB0aW9ue1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldmVsb3BlcntcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1pdHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZC1wb3B1cCBoZWFkZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmQtcG9wdXAgPiBtYWluID4gLm1lYWwtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5kLXBvcHVwIGZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZC1ub25lIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIseUNBQXlDO0VBQ3pDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1C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QUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItY29udGFpbmVyIHtcXHJcXG4gIG1heC13aWR0aDogMTUzNnB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICBib3JkZXItYm90dG9tOiAwLjA5cHggc29saWQgI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1uYXZiYXIge1xcclxcbiAgbWF4LXdpZHRoOiAxNTM2cHg7XFxyXFxuICBwYWRkaW5nOiA0cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMzBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZXN0YXVyYW50LWljb24ge1xcclxcbiAgd2lkdGg6IDYwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItbWVudSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbS1saW5rIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICBtYXgtd2lkdGg6IDE1MzZweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1jYXJkIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAgIC00NWRlZyxcXHJcXG4gICAgICB0cmFuc3BhcmVudCxcXHJcXG4gICAgICB0cmFuc3BhcmVudCAyJSxcXHJcXG4gICAgICB3aGl0ZSAyJSxcXHJcXG4gICAgICB3aGl0ZSA4NSUsXFxyXFxuICAgICAgdHJhbnNwYXJlbnQsXFxyXFxuICAgICAgODUlLFxcclxcbiAgICAgIHRyYW5zcGFyZW50XFxyXFxuICAgICksXFxyXFxuICAgIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMyYWQsICMyYWQgOTAlLCB0cmFuc3BhcmVudCA5MCUpO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQsIDAuMmVtIDAuMmVtO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtaGVhZCB7XFxyXFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXRodW1iYWlsIHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pdGVtIHtcXHJcXG4gIGZsZXgtZ3JvdzogMDtcXHJcXG4gIGZsZXgtYmFzaXM6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWludGVyYWN0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1idXR0b24ge1xcclxcbiAgcGFkZGluZzogNnB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1idXR0b246aG92ZXIge1xcclxcbiAgY29sb3I6ICMwMGY7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1lYWwtaXRlbSB7XFxyXFxuICAgIGZsZXgtYmFzaXM6IDQ3LjUlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTEyNXB4KSB7XFxyXFxuICAubWVhbC1pdGVtIHtcXHJcXG4gICAgZmxleC1iYXNpczogMzElO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1wb3B1cCB7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtaGVhZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwZjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXRodW1iYWlsIHtcXHJcXG4gIG1heC13aWR0aDogMzQ4cHg7XFxyXFxuICBtYXgtaGVpZ2h0OiAzNDhweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1jbG9zZSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1kZXRhaWxzIHtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDBmO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWRlc2Mge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jb21tZW50IHtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1ldC1pdGVtIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1mb3JtIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjMDAwO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtaW5wdXQge1xcclxcbiAgcGFkZGluZzogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1oaXN0b3J5IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDE1MzZweDtcXHJcXG4gIG1hcmdpbjogMzBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcXHJcXG4gIG9wYWNpdHk6IDAuODtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYm9yZGVyLXRvcDogMC4wOXB4IHNvbGlkICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5uYXYtZm9vdGVye1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldi1kZXNjcmlwdGlvbntcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5kZXZlbG9wZXJ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5taXR7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmQtcG9wdXAgaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5kLXBvcHVwID4gbWFpbiA+IC5tZWFsLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZC1wb3B1cCBmb290ZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmQtbm9uZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKlxyXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XHJcbiAgdmFyIGxpc3QgPSBbXTtcclxuXHJcbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XHJcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcclxuICAgICAgaWYgKGl0ZW1bNF0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1bMl0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XHJcbiAgICAgIH1cclxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xyXG4gICAgICBpZiAobmVlZExheWVyKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbVsyXSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1bNF0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjb250ZW50O1xyXG4gICAgfSkuam9pbihcIlwiKTtcclxuICB9O1xyXG5cclxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XHJcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XHJcbiAgICB9XHJcbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG4gICAgaWYgKGRlZHVwZSkge1xyXG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xyXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcclxuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xyXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XHJcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZWRpYSkge1xyXG4gICAgICAgIGlmICghaXRlbVsyXSkge1xyXG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcclxuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHN1cHBvcnRzKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XHJcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gbGlzdDtcclxufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XHJcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xyXG4gIGlmICghY3NzTWFwcGluZykge1xyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XHJcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XHJcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcclxuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcclxuICB9XHJcbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xyXG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJyZXNvdXJjZS9pbWFnZXMvbG9nby5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicmVzb3VyY2UvaW1hZ2VzL21lYWwuanBnXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcclxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xyXG4gIHZhciByZXN1bHQgPSAtMTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xyXG4gICAgICByZXN1bHQgPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xyXG4gIHZhciBpZENvdW50TWFwID0ge307XHJcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XHJcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcclxuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XHJcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcclxuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xyXG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XHJcbiAgICB2YXIgb2JqID0ge1xyXG4gICAgICBjc3M6IGl0ZW1bMV0sXHJcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxyXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXHJcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxyXG4gICAgICBsYXllcjogaXRlbVs1XVxyXG4gICAgfTtcclxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XHJcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XHJcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XHJcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcclxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxyXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xyXG4gIH1cclxuICByZXR1cm4gaWRlbnRpZmllcnM7XHJcbn1cclxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcclxuICBhcGkudXBkYXRlKG9iaik7XHJcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xyXG4gICAgaWYgKG5ld09iaikge1xyXG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFwaS5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiB1cGRhdGVyO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcclxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICBsaXN0ID0gbGlzdCB8fCBbXTtcclxuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xyXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcclxuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XHJcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XHJcbiAgICB9XHJcbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcclxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcclxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xyXG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xyXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XHJcbiAgfTtcclxufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBtZW1vID0ge307XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xyXG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XHJcblxyXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcclxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxyXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXHJcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XHJcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcclxuICB9XHJcbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcclxufVxyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xyXG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcclxuICBpZiAoIXRhcmdldCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcclxuICB9XHJcbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcclxuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcclxuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XHJcbiAgaWYgKG5vbmNlKSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xyXG4gIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xyXG4gIHZhciBjc3MgPSBcIlwiO1xyXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcclxuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XHJcbiAgfVxyXG4gIGlmIChvYmoubWVkaWEpIHtcclxuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xyXG4gIH1cclxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcclxuICBpZiAobmVlZExheWVyKSB7XHJcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XHJcbiAgfVxyXG4gIGNzcyArPSBvYmouY3NzO1xyXG4gIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcbiAgaWYgKG9iai5tZWRpYSkge1xyXG4gICAgY3NzICs9IFwifVwiO1xyXG4gIH1cclxuICBpZiAob2JqLnN1cHBvcnRzKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xyXG4gIH1cclxuXHJcbiAgLy8gRm9yIG9sZCBJRVxyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cclxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcclxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxufVxyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XHJcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcclxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxyXG4gICAgfTtcclxuICB9XHJcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG4gIHJldHVybiB7XHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcclxuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xyXG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XHJcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuICB9XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vYXNzZXRzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi9hc3NldHMvbG9nby5wbmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL21lYWwuanBnJztcclxuaW1wb3J0IGdldGNhdGVnb3JpZXMgZnJvbSAnLi9tb2R1bGUvbWVhbC5qcyc7XHJcbmltcG9ydCB7IHVsZWxlbWVudCB9IGZyb20gJy4vbW9kdWxlL2RvbV9lbGVtZW50cy5qcyc7XHJcbmltcG9ydCBhZGRhY3Rpb24gZnJvbSAnLi9tb2R1bGUvZXZlbnRsaXN0ZW5lci5qcyc7XHJcbmltcG9ydCB7IHVwZGF0ZWxpa2VzIH0gZnJvbSAnLi9tb2R1bGUvbGlrZXMuanMnO1xyXG5pbXBvcnQgeyBhZGRwb3B1cCB9IGZyb20gJy4vbW9kdWxlL2NvbW1lbnRzLmpzJztcclxuXHJcbmxldCBtZWFscyA9IFtdO1xyXG5jb25zdCByZW5kZXIgPSAoKSA9PiB7XHJcbiAgbGV0IGxpc3QgPSAnJztcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICdpdGVtLWNvdW50J1xyXG4gICkudGV4dENvbnRlbnQgPSBgU2VhZm9vZCAoJHttZWFscy5sZW5ndGh9KWA7XHJcbiAgbWVhbHMuZm9yRWFjaCgobWVhbCkgPT4ge1xyXG4gICAgbGlzdCArPSBgXHJcbiAgICA8bGkgY2xhc3M9XCJtZWFsLWl0ZW0gbWVhbC1jYXJkXCI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cIm1lYWwtaGVhZFwiPiR7bWVhbC5zdHJNZWFsfTwvcD5cclxuICAgICAgICAgIDxocj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiJHttZWFsLnN0ck1lYWxUaHVtYn1cIiBjbGFzcz1cIm1lYWwtdGh1bWJhaWxcIj5cclxuICAgICAgICAgIDxocj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWludGVyYWN0aW9uXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWVhbC1idXR0b24gbWVhbC1jb21tZW50XCIgdmFsdWU9XCIke21lYWwuaWRNZWFsfVwiPiYjMTAwMjk7IENvbW1lbnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1lYWwtYnV0dG9uIG1lYWwtbGlrZVwiIHZhbHVlPVwiJHttZWFsLmlkTWVhbH1cIj4mIzEwMDg0OyBMaWtlPC9idXR0b24+PHAgaWQ9XCJsaWtlJHttZWFsLmlkTWVhbH1cIj4gTGlrZWQgMDwvcD48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICBgO1xyXG4gIH0pO1xyXG4gIHVsZWxlbWVudC5pbm5lckhUTUwgPSBsaXN0O1xyXG4gIHVwZGF0ZWxpa2VzKCk7XHJcbn07XHJcblxyXG5jb25zdCBsb2FkaW5nID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3AgPSBhd2FpdCBnZXRjYXRlZ29yaWVzKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgbWVhbHMgPSBbLi4uZGF0YV07XHJcbiAgICByZW5kZXIoKTtcclxuICAgIGFkZGFjdGlvbigpO1xyXG4gIH0pO1xyXG4gIGFkZHBvcHVwKCk7XHJcbn07XHJcbmxvYWRpbmcoKTtcclxuIiwiaW1wb3J0IHsgdG9nZ2xlcG9wdXAgfSBmcm9tICcuL3BvcHVwLmpzJztcclxuaW1wb3J0IHsgbWVhbF91cmwsIGJhc2VfdXJsIH0gZnJvbSAnLi9yZXN0YXBpLmpzJztcclxuaW1wb3J0IHsgYnRuY2xvc2UsIGZvcm1kYXRhIH0gZnJvbSAnLi9kb21fZWxlbWVudHMuanMnO1xyXG5pbXBvcnQgY29tbWVudGNvdW50ZXIgZnJvbSAnLi9jb3VudGNvbW1lbnQuanMnO1xyXG5cclxuY29uc3QgY29tbWVudGRpc3BsYXkgPSAoY29udGVudCkgPT4ge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jb21tZW50cycpLmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbn07XHJcblxyXG5jb25zdCBjb21tZW50cGFnZSA9IChsaXN0KSA9PiB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwbWVhbC1uYW1lJykudGV4dENvbnRlbnQgPSBsaXN0LnN0ck1lYWw7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwbWVhbC1pZCcpLnZhbHVlID0gbGlzdC5pZE1lYWw7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAncG9wdXBtZWFsLWNhdCdcclxuICApLnRleHRDb250ZW50ID0gYENhdGVnb3J5IDogJHtsaXN0LnN0ckNhdGVnb3J5fWA7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAncG9wdXBtZWFsLWFyZWEnXHJcbiAgKS50ZXh0Q29udGVudCA9IGBBcmVhIDogJHtsaXN0LnN0ckFyZWF9YDtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICdwb3B1cG1lYWwtdGFnJ1xyXG4gICkudGV4dENvbnRlbnQgPSBgVGFncyA6ICR7bGlzdC5zdHJUYWdzfWA7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwbWVhbC1pbWcnKS5zcmMgPSBsaXN0LnN0ck1lYWxUaHVtYjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBtZWFsLXZpZGVvJykuaHJlZiA9IGxpc3Quc3RyWW91dHViZTtcclxufTtcclxuXHJcbmNvbnN0IG1lYWxieWlkID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgY29uc3QgdXJsID0gYCR7bWVhbF91cmx9L2xvb2t1cC5waHA/aT0ke2lkfWA7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBjb21tZW50cGFnZShkYXRhLm1lYWxzWzBdKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coJ1NvbWV0aGluZyBpcyB3cm9uZyBjb21tZW50cy5qcyBsaW5lIDE0Jyk7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVjb21tZW50cyA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIGNvbnN0IHVybCA9IGAke2Jhc2VfdXJsfS9jb21tZW50cz9pdGVtX2lkPSR7aWR9YDtcclxuICBjb21tZW50ZGlzcGxheSgnJyk7XHJcbiAgY29tbWVudGNvdW50ZXIoJycpO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgY29uc3QgbGlzdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGNvbW1lbnRjb3VudGVyKGxpc3RzLmxlbmd0aCk7XHJcbiAgICAgIGxldCBodG1sID0gJyc7XHJcbiAgICAgIGxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcclxuICAgICAgICBodG1sICs9IGA8cCBjbGFzcz1cImNvbW1lbnQtaGlzdG9yeVwiPjxzdHJvbmc+JHtsaXN0LnVzZXJuYW1lfSA6PC9zdHJvbmc+JHtsaXN0LmNvbW1lbnR9IG9uIDxzdHJvbmc+JHtsaXN0LmNyZWF0aW9uX2RhdGV9Ljwvc3Ryb25nPlxyXG4gICAgICAgIGA7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb21tZW50ZGlzcGxheShodG1sKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZGNvbW1lbnQgPSAoZXZlbnQpID0+IHtcclxuICBtZWFsYnlpZChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIHVwZGF0ZWNvbW1lbnRzKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgdG9nZ2xlcG9wdXAoKTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZWNvbW1lbnQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IHsgaXRlbV9pZCwgdXNlcm5hbWUsIGNvbW1lbnQgfSA9IGV2ZW50LnRhcmdldC5lbGVtZW50cztcclxuICBjb25zdCBkYXRhID0ge1xyXG4gICAgaXRlbV9pZDogaXRlbV9pZC52YWx1ZSxcclxuICAgIHVzZXJuYW1lOiB1c2VybmFtZS52YWx1ZSxcclxuICAgIGNvbW1lbnQ6IGNvbW1lbnQudmFsdWUsXHJcbiAgfTtcclxuICBjb25zdCB1cmwgPSBgJHtiYXNlX3VybH0vY29tbWVudHNgO1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICAgICAgfSxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHVwZGF0ZWNvbW1lbnRzKGRhdGEuaXRlbV9pZCk7XHJcbiAgICAgICAgZm9ybWRhdGEucmVzZXQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGNvbW1lbnRmb3JtID0gKCkgPT4ge1xyXG4gIGZvcm1kYXRhLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGNyZWF0ZWNvbW1lbnQpO1xyXG59O1xyXG5jb25zdCBjbG9zZXBvcHVwID0gKCkgPT4ge1xyXG4gIGJ0bmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlcG9wdXApO1xyXG59O1xyXG5leHBvcnQgY29uc3QgYWRkcG9wdXAgPSAoKSA9PiB7XHJcbiAgY2xvc2Vwb3B1cCgpO1xyXG4gIGNvbW1lbnRmb3JtKCk7XHJcbn07XHJcbiIsImZ1bmN0aW9uIGNvbW1lbnRjb3VudGVyKG51bSkge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50LWNvdW50JykudGV4dENvbnRlbnQgPSBudW07XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBjb21tZW50Y291bnRlcjtcclxuIiwiZnVuY3Rpb24gbGlrZWNvdW50ZXIoaWQsIG51bSkge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS50ZXh0Q29udGVudCA9IG51bTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGxpa2Vjb3VudGVyO1xyXG4iLCJleHBvcnQgY29uc3QgdWxlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lYWwtdW5vcmRlci1pZCcpO1xyXG5leHBvcnQgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuZXhwb3J0IGNvbnN0IGNwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LXBvcHVwJyk7XHJcbmV4cG9ydCBjb25zdCBidG5jbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tY2xvc2UnKTtcclxuZXhwb3J0IGNvbnN0IGZvcm1kYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtZm9ybScpO1xyXG4iLCJpbXBvcnQgeyBhZGRjb21tZW50IH0gZnJvbSAnLi9jb21tZW50cy5qcyc7XHJcbmltcG9ydCB7IGFkZGxpa2UgfSBmcm9tICcuL2xpa2VzLmpzJztcclxuXHJcbmNvbnN0IGFkZGFjdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBjb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZWFsLWNvbW1lbnQnKTtcclxuICBjb25zdCBsaWtlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZWFsLWxpa2UnKTtcclxuXHJcbiAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xyXG4gICAgY29tbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZGNvbW1lbnQpO1xyXG4gIH0pO1xyXG4gIGxpa2VzLmZvckVhY2goKGxpa2UpID0+IHtcclxuICAgIGxpa2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRsaWtlKTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZGFjdGlvbjtcclxuIiwiaW1wb3J0IHsgYmFzZV91cmwgfSBmcm9tICcuL3Jlc3RhcGknO1xyXG5pbXBvcnQgbGlrZWNvdW50ZXIgZnJvbSAnLi9jb3VudGxpa2UuanMnO1xyXG5cclxuY29uc3QgcmVuZGVybGlrZXMgPSAobGlzdHMpID0+IHtcclxuICBsaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBpZCA9IGBsaWtlJHtsaXN0Lml0ZW1faWR9YDtcclxuICAgICAgY29uc3QgbGlrZSA9IGBMaWtlZCAke2xpc3QubGlrZXN9YDtcclxuICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSkge1xyXG4gICAgICAgIGxpa2Vjb3VudGVyKGlkLCBsaWtlKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCB1cGRhdGVsaWtlcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB1cmwgPSBgJHtiYXNlX3VybH0vbGlrZXMvYDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHJlbmRlcmxpa2VzKGRhdGEpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkbGlrZSA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gIGNvbnN0IG1lYWxpZCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICBjb25zdCB1cmwgPSBgJHtiYXNlX3VybH0vbGlrZXMvYDtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IG1lYWxpZCB9KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgICAgIH0sXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICB1cGRhdGVsaWtlcygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBtZWFsX3VybCB9IGZyb20gJy4vcmVzdGFwaS5qcyc7XHJcbiBjb25zdCBnZXRjYXRlZ29yaWVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICBjb25zdCB1cmwgPSBgJHttZWFsX3VybH0vZmlsdGVyLnBocD9jPVNlYWZvb2RgO1xyXG4gICB0cnkge1xyXG4gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgIHJldHVybiBkYXRhLm1lYWxzO1xyXG4gICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgIHRocm93IGVycm9yO1xyXG4gICB9XHJcbiAgIHJldHVybiBbXTtcclxuIH07XHJcbmV4cG9ydCBkZWZhdWx0IGdldGNhdGVnb3JpZXM7XHJcbiIsImltcG9ydCB7IGJvZHksIGNwb3B1cCB9IGZyb20gJy4vZG9tX2VsZW1lbnRzLmpzJztcclxuZXhwb3J0IGNvbnN0IHRvZ2dsZXBvcHVwID0gKCkgPT4ge1xyXG4gIGNwb3B1cC5jbGFzc0xpc3QudG9nZ2xlKCdkLW5vbmUnKTtcclxuICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2QtcG9wdXAnKTtcclxufTtcclxuIiwiY29uc3QgYWRkcmVzcyA9ICd1cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0JztcclxuY29uc3QgZGlybmFtZSA9ICdjYXBzdG9uZUFwaSc7XHJcbmNvbnN0IHBhdGggPSAnYXBwcyc7XHJcbmV4cG9ydCBjb25zdCBzdGFydF91cmwgPSBgaHR0cHM6Ly8ke2FkZHJlc3N9LyR7ZGlybmFtZX0vJHtwYXRofS9gO1xyXG5jb25zdCBhcHBfaWQgPSAncFdPa1VZeEhKaTRaVlBJQUFYcHAnO1xyXG5leHBvcnQgY29uc3QgYmFzZV91cmwgPSBgaHR0cHM6Ly8ke2FkZHJlc3N9LyR7ZGlybmFtZX0vJHtwYXRofS8ke2FwcF9pZH1gO1xyXG5leHBvcnQgY29uc3QgbWVhbF91cmwgPSAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xJztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9