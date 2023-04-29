"use strict";
(self["webpackChunkmealwebpackapi"] = self["webpackChunkmealwebpackapi"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #fff;\r\n  display: flex;\r\n  justify-content: left;\r\n  flex-direction: column;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: normal;\r\n}\r\n\r\n.header-container {\r\n  max-width: 1536px;\r\n  padding-left: 30px;\r\n  padding-right: 30px;\r\n  background-color: #2196f3;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-flow: row wrap;\r\n  border-bottom: 0.09px solid #fff;\r\n}\r\n\r\n.header-navbar {\r\n  padding: 4px;\r\n  display: flex;\r\n  padding-right: 30px;\r\n  align-items: center;\r\n}\r\n\r\n.restaurant-icon {\r\n  width: 60px;\r\n  margin-right: 20px;\r\n}\r\n\r\n.navbar-menu {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  list-style: none;\r\n}\r\n\r\n.menu-item-link {\r\n  display: inline-block;\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n\r\n.menu-active {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n.main {\r\n  max-width: 1536px;\r\n  margin-left: 30px;\r\n  margin-right: 30px;\r\n  overflow: hidden;\r\n}\r\n\r\n.meal-container {\r\n  padding: 2rem;\r\n  background-color: #f2f2f2;\r\n  gap: 2rem;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  list-style: none;\r\n}\r\n\r\n.meal-card {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  background-color: transparent;\r\n  background-image: linear-gradient(\r\n      -45deg,\r\n      transparent,\r\n      transparent 2%,\r\n      white 2%,\r\n      white 85%,\r\n      transparent,\r\n      85%,\r\n      transparent\r\n    ),\r\n    linear-gradient(to bottom right, #2ad, #2ad 90%, transparent 90%);\r\n  background-position: top left, 0.2em 0.2em;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.meal-head {\r\n  text-align: end;\r\n  font-style: italic;\r\n  font-size: 15px;\r\n}\r\n\r\n.meal-thumbail {\r\n  width: 300px;\r\n  height: 300px;\r\n  border-radius: 50%;\r\n  align-self: center;\r\n  padding: 10px;\r\n}\r\n\r\n.meal-item {\r\n  flex-grow: 0;\r\n  flex-basis: 100%;\r\n}\r\n\r\n.meal-interaction {\r\n  padding: 8px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 17px;\r\n}\r\n\r\n.meal-button {\r\n  padding: 6px;\r\n  border: none;\r\n  font-size: 17px;\r\n  cursor: pointer;\r\n}\r\n\r\n.meal-button:hover {\r\n  color: #00f;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .meal-item {\r\n    flex-basis: 47.5%;\r\n  }\r\n}\r\n\r\n@media (min-width: 1125px) {\r\n  .meal-item {\r\n    flex-basis: 31%;\r\n  }\r\n}\r\n\r\n.comment-popup {\r\n  padding: 2rem;\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n.comment-container {\r\n  display: flex;\r\n  gap: 1rem;\r\n  list-style: none;\r\n  flex-direction: column;\r\n}\r\n\r\n.comment-head {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  border-bottom: 1px solid #00f;\r\n  padding: 10px;\r\n}\r\n\r\n.comment-thumbail{\r\n  max-width: 348px;\r\n  max-height: 348px;\r\n  height: auto;\r\n  align-self: center;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.meal-image{\r\nwidth: 100%;\r\nheight: auto;\r\nborder-radius: 50%;\r\n}\r\n\r\n.button-close{\r\nborder: none;\r\nfont-size: 17px;\r\nfont-weight: bold;\r\nbackground-color: transparent;\r\n}\r\n\r\n.comment-details{\r\n  border-top:1px solid #00f;\r\n  gap: 10px;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex-flow: row wrap;\r\n}\r\n\r\n.meal-desc{\r\n  padding: 10px;\r\n  font-size: 15px;\r\n  font-style: italic;\r\n}\r\n\r\n.add-comment{\r\n  padding: 16px;\r\n  border: 1px solid #000;\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.commet-item{\r\n  padding-left: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.comment-form{\r\n  padding: 10px;\r\n  display: flex;\r\n  gap: 10px;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-flow: row wrap;\r\n  border-bottom: 1px dashed #000;\r\n  margin-top: 10px;\r\n}\r\n\r\n.comment-input{\r\n  padding: 7px;\r\n}\r\n\r\n.comment-history{\r\n  display: block;\r\n  padding: 10px;\r\n  line-height: 1.5rem;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.d-popup header{\r\n  display: none;\r\n}\r\n\r\n.d-popup > main > .meal-container{\r\ndisplay: none;\r\n}\r\n\r\n.d-popup footer{\r\n  display: none;\r\n}\r\n\r\n.d-none{\r\n  display: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,qBAAqB;EACrB,sBAAsB;EACtB,yCAAyC;EACzC,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,yBAAyB;EACzB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;EACnB,gCAAgC;AAClC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,eAAe;EACf,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,6BAA6B;EAC7B;;;;;;;;;;qEAUmE;EACnE,0CAA0C;EAC1C,4BAA4B;AAC9B;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE;IACE,iBAAiB;EACnB;AACF;;AAEA;EACE;IACE,eAAe;EACjB;AACF;;AAEA;EACE,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,SAAS;EACT,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,uBAAuB;EACvB,6BAA6B;EAC7B,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;AACA,WAAW;AACX,YAAY;AACZ,kBAAkB;AAClB;;AAEA;AACA,YAAY;AACZ,eAAe;AACf,iBAAiB;AACjB,6BAA6B;AAC7B;;AAEA;EACE,yBAAyB;EACzB,SAAS;EACT,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,cAAc;EACd,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,SAAS;EACT,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,mBAAmB;EACnB,8BAA8B;EAC9B,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;AACA,aAAa;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #fff;\r\n  display: flex;\r\n  justify-content: left;\r\n  flex-direction: column;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: normal;\r\n}\r\n\r\n.header-container {\r\n  max-width: 1536px;\r\n  padding-left: 30px;\r\n  padding-right: 30px;\r\n  background-color: #2196f3;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-flow: row wrap;\r\n  border-bottom: 0.09px solid #fff;\r\n}\r\n\r\n.header-navbar {\r\n  padding: 4px;\r\n  display: flex;\r\n  padding-right: 30px;\r\n  align-items: center;\r\n}\r\n\r\n.restaurant-icon {\r\n  width: 60px;\r\n  margin-right: 20px;\r\n}\r\n\r\n.navbar-menu {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  list-style: none;\r\n}\r\n\r\n.menu-item-link {\r\n  display: inline-block;\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n\r\n.menu-active {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n.main {\r\n  max-width: 1536px;\r\n  margin-left: 30px;\r\n  margin-right: 30px;\r\n  overflow: hidden;\r\n}\r\n\r\n.meal-container {\r\n  padding: 2rem;\r\n  background-color: #f2f2f2;\r\n  gap: 2rem;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  list-style: none;\r\n}\r\n\r\n.meal-card {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  background-color: transparent;\r\n  background-image: linear-gradient(\r\n      -45deg,\r\n      transparent,\r\n      transparent 2%,\r\n      white 2%,\r\n      white 85%,\r\n      transparent,\r\n      85%,\r\n      transparent\r\n    ),\r\n    linear-gradient(to bottom right, #2ad, #2ad 90%, transparent 90%);\r\n  background-position: top left, 0.2em 0.2em;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.meal-head {\r\n  text-align: end;\r\n  font-style: italic;\r\n  font-size: 15px;\r\n}\r\n\r\n.meal-thumbail {\r\n  width: 300px;\r\n  height: 300px;\r\n  border-radius: 50%;\r\n  align-self: center;\r\n  padding: 10px;\r\n}\r\n\r\n.meal-item {\r\n  flex-grow: 0;\r\n  flex-basis: 100%;\r\n}\r\n\r\n.meal-interaction {\r\n  padding: 8px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 17px;\r\n}\r\n\r\n.meal-button {\r\n  padding: 6px;\r\n  border: none;\r\n  font-size: 17px;\r\n  cursor: pointer;\r\n}\r\n\r\n.meal-button:hover {\r\n  color: #00f;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .meal-item {\r\n    flex-basis: 47.5%;\r\n  }\r\n}\r\n\r\n@media (min-width: 1125px) {\r\n  .meal-item {\r\n    flex-basis: 31%;\r\n  }\r\n}\r\n\r\n.comment-popup {\r\n  padding: 2rem;\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n.comment-container {\r\n  display: flex;\r\n  gap: 1rem;\r\n  list-style: none;\r\n  flex-direction: column;\r\n}\r\n\r\n.comment-head {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  border-bottom: 1px solid #00f;\r\n  padding: 10px;\r\n}\r\n\r\n.comment-thumbail{\r\n  max-width: 348px;\r\n  max-height: 348px;\r\n  height: auto;\r\n  align-self: center;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.meal-image{\r\nwidth: 100%;\r\nheight: auto;\r\nborder-radius: 50%;\r\n}\r\n\r\n.button-close{\r\nborder: none;\r\nfont-size: 17px;\r\nfont-weight: bold;\r\nbackground-color: transparent;\r\n}\r\n\r\n.comment-details{\r\n  border-top:1px solid #00f;\r\n  gap: 10px;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex-flow: row wrap;\r\n}\r\n\r\n.meal-desc{\r\n  padding: 10px;\r\n  font-size: 15px;\r\n  font-style: italic;\r\n}\r\n\r\n.add-comment{\r\n  padding: 16px;\r\n  border: 1px solid #000;\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.commet-item{\r\n  padding-left: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.comment-form{\r\n  padding: 10px;\r\n  display: flex;\r\n  gap: 10px;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-flow: row wrap;\r\n  border-bottom: 1px dashed #000;\r\n  margin-top: 10px;\r\n}\r\n\r\n.comment-input{\r\n  padding: 7px;\r\n}\r\n\r\n.comment-history{\r\n  display: block;\r\n  padding: 10px;\r\n  line-height: 1.5rem;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.d-popup header{\r\n  display: none;\r\n}\r\n\r\n.d-popup > main > .meal-container{\r\ndisplay: none;\r\n}\r\n\r\n.d-popup footer{\r\n  display: none;\r\n}\r\n\r\n.d-none{\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "resource/images/logo.png");

/***/ }),

/***/ "./src/assets/title.png":
/*!******************************!*\
  !*** ./src/assets/title.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "resource/images/title.png");

/***/ }),

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/style.css */ "./src/assets/style.css");
/* harmony import */ var _assets_title_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/title.png */ "./src/assets/title.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/logo.png */ "./src/assets/logo.png");
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addcomment": () => (/* binding */ addcomment),
/* harmony export */   "addpopup": () => (/* binding */ addpopup)
/* harmony export */ });
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ "./src/module/popup.js");
/* harmony import */ var _restapi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restapi.js */ "./src/module/restapi.js");
/* harmony import */ var _dom_elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom_elements.js */ "./src/module/dom_elements.js");




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
  document.querySelector('.popup-comments').innerHTML = '';
  document.getElementById('comment-count').textContent = '';
  try {
    const response = await fetch(url);
    if (response.ok) {
      const lists = await response.json();
      document.getElementById('comment-count').textContent = `(${
        lists.length ?? 0
      })`;
      let html = '';
      lists.forEach((list) => {
        html += `<p class="comment-history"><strong>${list.username} :</strong>${list.comment} on <strong>${list.creation_date}.</strong>
        `;
      });
      document.querySelector('.popup-comments').innerHTML = html;
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

/***/ "./src/module/dom_elements.js":
/*!************************************!*\
  !*** ./src/module/dom_elements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addlike": () => (/* binding */ addlike),
/* harmony export */   "updatelikes": () => (/* binding */ updatelikes)
/* harmony export */ });
/* harmony import */ var _restapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restapi */ "./src/module/restapi.js");

const renderlikes = (lists) => {
  lists.forEach((list) => {
    try {
      const id = `like${list.item_id}`;
      const like = `Liked ${list.likes}`;
      const likepar = document.getElementById(id);
      if (likepar) {
        likepar.textContent = like;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLGtCQUFrQixpREFBUSxDQUFDO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDWm9CO0FBQzFDO0FBQ1AsRUFBRSxxRUFBdUI7QUFDekIsRUFBRSxtRUFBcUI7QUFDdkI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ08sNkJBQTZCLFFBQVEsR0FBRyxRQUFRLEdBQUcsS0FBSztBQUMvRDtBQUNPLDRCQUE0QixRQUFRLEdBQUcsUUFBUSxHQUFHLEtBQUssR0FBRyxPQUFPO0FBQ2pFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVhbHdlYnBhY2thcGkvLi9zcmMvYXNzZXRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9tZWFsd2VicGFja2FwaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbWVhbHdlYnBhY2thcGkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9tZWFsd2VicGFja2FwaS8uL3NyYy9hc3NldHMvbG9nby5wbmciLCJ3ZWJwYWNrOi8vbWVhbHdlYnBhY2thcGkvLi9zcmMvYXNzZXRzL3RpdGxlLnBuZyIsIndlYnBhY2s6Ly9tZWFsd2VicGFja2FwaS8uL3NyYy9hc3NldHMvc3R5bGUuY3NzPzYwMWQiLCJ3ZWJwYWNrOi8vbWVhbHdlYnBhY2thcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbWVhbHdlYnBhY2thcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL21lYWx3ZWJwYWNrYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL21lYWx3ZWJwYWNrYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21lYWx3ZWJwYWNrYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbWVhbHdlYnBhY2thcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9tZWFsd2VicGFja2FwaS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9tZWFsd2VicGFja2FwaS8uL3NyYy9tb2R1bGUvY29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vbWVhbHdlYnBhY2thcGkvLi9zcmMvbW9kdWxlL2RvbV9lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9tZWFsd2VicGFja2FwaS8uL3NyYy9tb2R1bGUvZXZlbnRsaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly9tZWFsd2VicGFja2FwaS8uL3NyYy9tb2R1bGUvbGlrZXMuanMiLCJ3ZWJwYWNrOi8vbWVhbHdlYnBhY2thcGkvLi9zcmMvbW9kdWxlL21lYWwuanMiLCJ3ZWJwYWNrOi8vbWVhbHdlYnBhY2thcGkvLi9zcmMvbW9kdWxlL3BvcHVwLmpzIiwid2VicGFjazovL21lYWx3ZWJwYWNrYXBpLy4vc3JjL21vZHVsZS9yZXN0YXBpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItY29udGFpbmVyIHtcXHJcXG4gIG1heC13aWR0aDogMTUzNnB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICBib3JkZXItYm90dG9tOiAwLjA5cHggc29saWQgI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1uYXZiYXIge1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdGF1cmFudC1pY29uIHtcXHJcXG4gIHdpZHRoOiA2MHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLW1lbnUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0tbGluayB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgbWF4LXdpZHRoOiAxNTM2cHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMzBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtY2FyZCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgICAtNDVkZWcsXFxyXFxuICAgICAgdHJhbnNwYXJlbnQsXFxyXFxuICAgICAgdHJhbnNwYXJlbnQgMiUsXFxyXFxuICAgICAgd2hpdGUgMiUsXFxyXFxuICAgICAgd2hpdGUgODUlLFxcclxcbiAgICAgIHRyYW5zcGFyZW50LFxcclxcbiAgICAgIDg1JSxcXHJcXG4gICAgICB0cmFuc3BhcmVudFxcclxcbiAgICApLFxcclxcbiAgICBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMmFkLCAjMmFkIDkwJSwgdHJhbnNwYXJlbnQgOTAlKTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0LCAwLjJlbSAwLjJlbTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWhlYWQge1xcclxcbiAgdGV4dC1hbGlnbjogZW5kO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC10aHVtYmFpbCB7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtaXRlbSB7XFxyXFxuICBmbGV4LWdyb3c6IDA7XFxyXFxuICBmbGV4LWJhc2lzOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pbnRlcmFjdGlvbiB7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjMDBmO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5tZWFsLWl0ZW0ge1xcclxcbiAgICBmbGV4LWJhc2lzOiA0Ny41JTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDExMjVweCkge1xcclxcbiAgLm1lYWwtaXRlbSB7XFxyXFxuICAgIGZsZXgtYmFzaXM6IDMxJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtcG9wdXAge1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWhlYWQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMGY7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC10aHVtYmFpbHtcXHJcXG4gIG1heC13aWR0aDogMzQ4cHg7XFxyXFxuICBtYXgtaGVpZ2h0OiAzNDhweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pbWFnZXtcXHJcXG53aWR0aDogMTAwJTtcXHJcXG5oZWlnaHQ6IGF1dG87XFxyXFxuYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLWNsb3Nle1xcclxcbmJvcmRlcjogbm9uZTtcXHJcXG5mb250LXNpemU6IDE3cHg7XFxyXFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWRldGFpbHN7XFxyXFxuICBib3JkZXItdG9wOjFweCBzb2xpZCAjMDBmO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWRlc2N7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbW1lbnR7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZXQtaXRlbXtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1mb3Jte1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICMwMDA7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1pbnB1dHtcXHJcXG4gIHBhZGRpbmc6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtaGlzdG9yeXtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZC1wb3B1cCBoZWFkZXJ7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZC1wb3B1cCA+IG1haW4gPiAubWVhbC1jb250YWluZXJ7XFxyXFxuZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmQtcG9wdXAgZm9vdGVye1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmQtbm9uZXtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHFC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O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItY29udGFpbmVyIHtcXHJcXG4gIG1heC13aWR0aDogMTUzNnB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICBib3JkZXItYm90dG9tOiAwLjA5cHggc29saWQgI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1uYXZiYXIge1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdGF1cmFudC1pY29uIHtcXHJcXG4gIHdpZHRoOiA2MHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLW1lbnUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0tbGluayB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgbWF4LXdpZHRoOiAxNTM2cHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMzBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtY2FyZCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgICAtNDVkZWcsXFxyXFxuICAgICAgdHJhbnNwYXJlbnQsXFxyXFxuICAgICAgdHJhbnNwYXJlbnQgMiUsXFxyXFxuICAgICAgd2hpdGUgMiUsXFxyXFxuICAgICAgd2hpdGUgODUlLFxcclxcbiAgICAgIHRyYW5zcGFyZW50LFxcclxcbiAgICAgIDg1JSxcXHJcXG4gICAgICB0cmFuc3BhcmVudFxcclxcbiAgICApLFxcclxcbiAgICBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMmFkLCAjMmFkIDkwJSwgdHJhbnNwYXJlbnQgOTAlKTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0LCAwLjJlbSAwLjJlbTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWhlYWQge1xcclxcbiAgdGV4dC1hbGlnbjogZW5kO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC10aHVtYmFpbCB7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtaXRlbSB7XFxyXFxuICBmbGV4LWdyb3c6IDA7XFxyXFxuICBmbGV4LWJhc2lzOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pbnRlcmFjdGlvbiB7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjMDBmO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5tZWFsLWl0ZW0ge1xcclxcbiAgICBmbGV4LWJhc2lzOiA0Ny41JTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDExMjVweCkge1xcclxcbiAgLm1lYWwtaXRlbSB7XFxyXFxuICAgIGZsZXgtYmFzaXM6IDMxJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtcG9wdXAge1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWhlYWQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMGY7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC10aHVtYmFpbHtcXHJcXG4gIG1heC13aWR0aDogMzQ4cHg7XFxyXFxuICBtYXgtaGVpZ2h0OiAzNDhweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pbWFnZXtcXHJcXG53aWR0aDogMTAwJTtcXHJcXG5oZWlnaHQ6IGF1dG87XFxyXFxuYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLWNsb3Nle1xcclxcbmJvcmRlcjogbm9uZTtcXHJcXG5mb250LXNpemU6IDE3cHg7XFxyXFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWRldGFpbHN7XFxyXFxuICBib3JkZXItdG9wOjFweCBzb2xpZCAjMDBmO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWRlc2N7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbW1lbnR7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZXQtaXRlbXtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1mb3Jte1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICMwMDA7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1pbnB1dHtcXHJcXG4gIHBhZGRpbmc6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtaGlzdG9yeXtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZC1wb3B1cCBoZWFkZXJ7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZC1wb3B1cCA+IG1haW4gPiAubWVhbC1jb250YWluZXJ7XFxyXFxuZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmQtcG9wdXAgZm9vdGVye1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmQtbm9uZXtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qXHJcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcclxuICB2YXIgbGlzdCA9IFtdO1xyXG5cclxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcclxuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xyXG4gICAgICBpZiAoaXRlbVs0XSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbVsyXSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcclxuICAgICAgfVxyXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XHJcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtWzJdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbVs0XSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICB9KS5qb2luKFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcclxuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcclxuICAgIH1cclxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcbiAgICBpZiAoZGVkdXBlKSB7XHJcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XHJcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcclxuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xyXG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XHJcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcclxuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lZGlhKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XHJcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcclxuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcclxuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XHJcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxpc3QucHVzaChpdGVtKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiBsaXN0O1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcclxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XHJcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcclxuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcclxuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xyXG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xyXG4gIH1cclxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XHJcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInJlc291cmNlL2ltYWdlcy9sb2dvLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJyZXNvdXJjZS9pbWFnZXMvdGl0bGUucG5nXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcclxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xyXG4gIHZhciByZXN1bHQgPSAtMTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xyXG4gICAgICByZXN1bHQgPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xyXG4gIHZhciBpZENvdW50TWFwID0ge307XHJcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XHJcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcclxuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XHJcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcclxuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xyXG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XHJcbiAgICB2YXIgb2JqID0ge1xyXG4gICAgICBjc3M6IGl0ZW1bMV0sXHJcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxyXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXHJcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxyXG4gICAgICBsYXllcjogaXRlbVs1XVxyXG4gICAgfTtcclxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XHJcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XHJcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XHJcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcclxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxyXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xyXG4gIH1cclxuICByZXR1cm4gaWRlbnRpZmllcnM7XHJcbn1cclxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcclxuICBhcGkudXBkYXRlKG9iaik7XHJcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xyXG4gICAgaWYgKG5ld09iaikge1xyXG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFwaS5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiB1cGRhdGVyO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcclxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICBsaXN0ID0gbGlzdCB8fCBbXTtcclxuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xyXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcclxuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XHJcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XHJcbiAgICB9XHJcbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcclxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcclxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xyXG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xyXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XHJcbiAgfTtcclxufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBtZW1vID0ge307XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xyXG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XHJcblxyXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcclxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxyXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXHJcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XHJcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcclxuICB9XHJcbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcclxufVxyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xyXG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcclxuICBpZiAoIXRhcmdldCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcclxuICB9XHJcbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcclxuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcclxuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XHJcbiAgaWYgKG5vbmNlKSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xyXG4gIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xyXG4gIHZhciBjc3MgPSBcIlwiO1xyXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcclxuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XHJcbiAgfVxyXG4gIGlmIChvYmoubWVkaWEpIHtcclxuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xyXG4gIH1cclxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcclxuICBpZiAobmVlZExheWVyKSB7XHJcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XHJcbiAgfVxyXG4gIGNzcyArPSBvYmouY3NzO1xyXG4gIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcbiAgaWYgKG9iai5tZWRpYSkge1xyXG4gICAgY3NzICs9IFwifVwiO1xyXG4gIH1cclxuICBpZiAob2JqLnN1cHBvcnRzKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xyXG4gIH1cclxuXHJcbiAgLy8gRm9yIG9sZCBJRVxyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cclxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcclxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxufVxyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XHJcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcclxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxyXG4gICAgfTtcclxuICB9XHJcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG4gIHJldHVybiB7XHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcclxuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xyXG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XHJcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuICB9XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vYXNzZXRzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi9hc3NldHMvdGl0bGUucG5nJ1xyXG5pbXBvcnQgJy4vYXNzZXRzL2xvZ28ucG5nJztcclxuaW1wb3J0IGdldGNhdGVnb3JpZXMgZnJvbSAnLi9tb2R1bGUvbWVhbC5qcyc7XHJcbmltcG9ydCB7IHVsZWxlbWVudCB9IGZyb20gJy4vbW9kdWxlL2RvbV9lbGVtZW50cy5qcyc7XHJcbmltcG9ydCBhZGRhY3Rpb24gZnJvbSAnLi9tb2R1bGUvZXZlbnRsaXN0ZW5lci5qcyc7XHJcbmltcG9ydCB7IHVwZGF0ZWxpa2VzIH0gZnJvbSAnLi9tb2R1bGUvbGlrZXMuanMnO1xyXG5pbXBvcnQgeyBhZGRwb3B1cCB9IGZyb20gJy4vbW9kdWxlL2NvbW1lbnRzLmpzJztcclxuXHJcbmxldCBtZWFscyA9IFtdO1xyXG5jb25zdCByZW5kZXIgPSAoKSA9PiB7XHJcbiAgbGV0IGxpc3QgPSAnJztcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICdpdGVtLWNvdW50J1xyXG4gICkudGV4dENvbnRlbnQgPSBgU2VhZm9vZCAoJHttZWFscy5sZW5ndGh9KWA7XHJcbiAgbWVhbHMuZm9yRWFjaCgobWVhbCkgPT4ge1xyXG4gICAgbGlzdCArPSBgXHJcbiAgICA8bGkgY2xhc3M9XCJtZWFsLWl0ZW0gbWVhbC1jYXJkXCI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cIm1lYWwtaGVhZFwiPiR7bWVhbC5zdHJNZWFsfTwvcD5cclxuICAgICAgICAgIDxocj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiJHttZWFsLnN0ck1lYWxUaHVtYn1cIiBjbGFzcz1cIm1lYWwtdGh1bWJhaWxcIj5cclxuICAgICAgICAgIDxocj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWludGVyYWN0aW9uXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWVhbC1idXR0b24gbWVhbC1jb21tZW50XCIgdmFsdWU9XCIke21lYWwuaWRNZWFsfVwiPiYjMTAwMjk7IENvbW1lbnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1lYWwtYnV0dG9uIG1lYWwtbGlrZVwiIHZhbHVlPVwiJHttZWFsLmlkTWVhbH1cIj4mIzEwMDg0OyBMaWtlPC9idXR0b24+PHAgaWQ9XCJsaWtlJHttZWFsLmlkTWVhbH1cIj4gTGlrZWQgMDwvcD48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICBgO1xyXG4gIH0pO1xyXG4gIHVsZWxlbWVudC5pbm5lckhUTUwgPSBsaXN0O1xyXG4gIHVwZGF0ZWxpa2VzKCk7XHJcbn07XHJcblxyXG5jb25zdCBsb2FkaW5nID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3AgPSBhd2FpdCBnZXRjYXRlZ29yaWVzKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgbWVhbHMgPSBbLi4uZGF0YV07XHJcbiAgICByZW5kZXIoKTtcclxuICAgIGFkZGFjdGlvbigpO1xyXG4gIH0pO1xyXG4gIGFkZHBvcHVwKCk7XHJcbn07XHJcbmxvYWRpbmcoKTtcclxuIiwiaW1wb3J0IHsgdG9nZ2xlcG9wdXAgfSBmcm9tICcuL3BvcHVwLmpzJztcclxuaW1wb3J0IHsgbWVhbF91cmwsIGJhc2VfdXJsIH0gZnJvbSAnLi9yZXN0YXBpLmpzJztcclxuaW1wb3J0IHsgYnRuY2xvc2UsIGZvcm1kYXRhIH0gZnJvbSAnLi9kb21fZWxlbWVudHMuanMnO1xyXG5cclxuY29uc3QgY29tbWVudHBhZ2UgPSAobGlzdCkgPT4ge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cG1lYWwtbmFtZScpLnRleHRDb250ZW50ID0gbGlzdC5zdHJNZWFsO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cG1lYWwtaWQnKS52YWx1ZSA9IGxpc3QuaWRNZWFsO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgJ3BvcHVwbWVhbC1jYXQnXHJcbiAgKS50ZXh0Q29udGVudCA9IGBDYXRlZ29yeSA6ICR7bGlzdC5zdHJDYXRlZ29yeX1gO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgJ3BvcHVwbWVhbC1hcmVhJ1xyXG4gICkudGV4dENvbnRlbnQgPSBgQXJlYSA6ICR7bGlzdC5zdHJBcmVhfWA7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAncG9wdXBtZWFsLXRhZydcclxuICApLnRleHRDb250ZW50ID0gYFRhZ3MgOiAke2xpc3Quc3RyVGFnc31gO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cG1lYWwtaW1nJykuc3JjID0gbGlzdC5zdHJNZWFsVGh1bWI7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwbWVhbC12aWRlbycpLmhyZWYgPSBsaXN0LnN0cllvdXR1YmU7XHJcbn07XHJcblxyXG5jb25zdCBtZWFsYnlpZCA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIGNvbnN0IHVybCA9IGAke21lYWxfdXJsfS9sb29rdXAucGhwP2k9JHtpZH1gO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgY29tbWVudHBhZ2UoZGF0YS5tZWFsc1swXSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKCdTb21ldGhpbmcgaXMgd3JvbmcgY29tbWVudHMuanMgbGluZSAxNCcpO1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlY29tbWVudHMgPSBhc3luYyAoaWQpID0+IHtcclxuICBjb25zdCB1cmwgPSBgJHtiYXNlX3VybH0vY29tbWVudHM/aXRlbV9pZD0ke2lkfWA7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWNvbW1lbnRzJykuaW5uZXJIVE1MID0gJyc7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQtY291bnQnKS50ZXh0Q29udGVudCA9ICcnO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgY29uc3QgbGlzdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50LWNvdW50JykudGV4dENvbnRlbnQgPSBgKCR7XHJcbiAgICAgICAgbGlzdHMubGVuZ3RoID8/IDBcclxuICAgICAgfSlgO1xyXG4gICAgICBsZXQgaHRtbCA9ICcnO1xyXG4gICAgICBsaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XHJcbiAgICAgICAgaHRtbCArPSBgPHAgY2xhc3M9XCJjb21tZW50LWhpc3RvcnlcIj48c3Ryb25nPiR7bGlzdC51c2VybmFtZX0gOjwvc3Ryb25nPiR7bGlzdC5jb21tZW50fSBvbiA8c3Ryb25nPiR7bGlzdC5jcmVhdGlvbl9kYXRlfS48L3N0cm9uZz5cclxuICAgICAgICBgO1xyXG4gICAgICB9KTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWNvbW1lbnRzJykuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZGNvbW1lbnQgPSAoZXZlbnQpID0+IHtcclxuICBtZWFsYnlpZChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIHVwZGF0ZWNvbW1lbnRzKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgdG9nZ2xlcG9wdXAoKTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZWNvbW1lbnQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IHsgaXRlbV9pZCwgdXNlcm5hbWUsIGNvbW1lbnQgfSA9IGV2ZW50LnRhcmdldC5lbGVtZW50cztcclxuICBjb25zdCBkYXRhID0ge1xyXG4gICAgaXRlbV9pZDogaXRlbV9pZC52YWx1ZSxcclxuICAgIHVzZXJuYW1lOiB1c2VybmFtZS52YWx1ZSxcclxuICAgIGNvbW1lbnQ6IGNvbW1lbnQudmFsdWUsXHJcbiAgfTtcclxuICBjb25zdCB1cmwgPSBgJHtiYXNlX3VybH0vY29tbWVudHNgO1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICAgICAgfSxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHVwZGF0ZWNvbW1lbnRzKGRhdGEuaXRlbV9pZCk7XHJcbiAgICAgICAgZm9ybWRhdGEucmVzZXQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGNvbW1lbnRmb3JtID0gKCkgPT4ge1xyXG4gIGZvcm1kYXRhLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGNyZWF0ZWNvbW1lbnQpO1xyXG59O1xyXG5jb25zdCBjbG9zZXBvcHVwID0gKCkgPT4ge1xyXG4gIGJ0bmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlcG9wdXApO1xyXG59O1xyXG5leHBvcnQgY29uc3QgYWRkcG9wdXAgPSAoKSA9PiB7XHJcbiAgY2xvc2Vwb3B1cCgpO1xyXG4gIGNvbW1lbnRmb3JtKCk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCB1bGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVhbC11bm9yZGVyLWlkJyk7XHJcbmV4cG9ydCBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5leHBvcnQgY29uc3QgY3BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtcG9wdXAnKTtcclxuZXhwb3J0IGNvbnN0IGJ0bmNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1jbG9zZScpO1xyXG5leHBvcnQgY29uc3QgZm9ybWRhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1mb3JtJyk7XHJcbiIsImltcG9ydCB7IGFkZGNvbW1lbnQgfSBmcm9tICcuL2NvbW1lbnRzLmpzJztcclxuaW1wb3J0IHsgYWRkbGlrZSB9IGZyb20gJy4vbGlrZXMuanMnO1xyXG5cclxuY29uc3QgYWRkYWN0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lYWwtY29tbWVudCcpO1xyXG4gIGNvbnN0IGxpa2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lYWwtbGlrZScpO1xyXG5cclxuICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XHJcbiAgICBjb21tZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkY29tbWVudCk7XHJcbiAgfSk7XHJcbiAgbGlrZXMuZm9yRWFjaCgobGlrZSkgPT4ge1xyXG4gICAgbGlrZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZGxpa2UpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkYWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBiYXNlX3VybCB9IGZyb20gJy4vcmVzdGFwaSc7XHJcbmNvbnN0IHJlbmRlcmxpa2VzID0gKGxpc3RzKSA9PiB7XHJcbiAgbGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaWQgPSBgbGlrZSR7bGlzdC5pdGVtX2lkfWA7XHJcbiAgICAgIGNvbnN0IGxpa2UgPSBgTGlrZWQgJHtsaXN0Lmxpa2VzfWA7XHJcbiAgICAgIGNvbnN0IGxpa2VwYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgIGlmIChsaWtlcGFyKSB7XHJcbiAgICAgICAgbGlrZXBhci50ZXh0Q29udGVudCA9IGxpa2U7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5leHBvcnQgY29uc3QgdXBkYXRlbGlrZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgdXJsID0gYCR7YmFzZV91cmx9L2xpa2VzL2A7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZW5kZXJsaWtlcyhkYXRhKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZGxpa2UgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICBjb25zdCBtZWFsaWQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgY29uc3QgdXJsID0gYCR7YmFzZV91cmx9L2xpa2VzL2A7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBtZWFsaWQgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxyXG4gICAgICB9LFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdXBkYXRlbGlrZXMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgbWVhbF91cmwgfSBmcm9tICcuL3Jlc3RhcGkuanMnO1xyXG4gY29uc3QgZ2V0Y2F0ZWdvcmllcyA9IGFzeW5jICgpID0+IHtcclxuICAgY29uc3QgdXJsID0gYCR7bWVhbF91cmx9L2ZpbHRlci5waHA/Yz1TZWFmb29kYDtcclxuICAgdHJ5IHtcclxuICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICByZXR1cm4gZGF0YS5tZWFscztcclxuICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICB0aHJvdyBlcnJvcjtcclxuICAgfVxyXG4gICByZXR1cm4gW107XHJcbiB9O1xyXG5leHBvcnQgZGVmYXVsdCBnZXRjYXRlZ29yaWVzO1xyXG4iLCJpbXBvcnQgeyBib2R5LCBjcG9wdXAgfSBmcm9tICcuL2RvbV9lbGVtZW50cy5qcyc7XHJcbmV4cG9ydCBjb25zdCB0b2dnbGVwb3B1cCA9ICgpID0+IHtcclxuICBjcG9wdXAuY2xhc3NMaXN0LnRvZ2dsZSgnZC1ub25lJyk7XHJcbiAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkLXBvcHVwJyk7XHJcbn07XHJcbiIsImNvbnN0IGFkZHJlc3MgPSAndXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldCc7XHJcbmNvbnN0IGRpcm5hbWUgPSAnY2Fwc3RvbmVBcGknO1xyXG5jb25zdCBwYXRoID0gJ2FwcHMnO1xyXG5leHBvcnQgY29uc3Qgc3RhcnRfdXJsID0gYGh0dHBzOi8vJHthZGRyZXNzfS8ke2Rpcm5hbWV9LyR7cGF0aH0vYDtcclxuY29uc3QgYXBwX2lkID0gJ3BXT2tVWXhISmk0WlZQSUFBWHBwJztcclxuZXhwb3J0IGNvbnN0IGJhc2VfdXJsID0gYGh0dHBzOi8vJHthZGRyZXNzfS8ke2Rpcm5hbWV9LyR7cGF0aH0vJHthcHBfaWR9YDtcclxuZXhwb3J0IGNvbnN0IG1lYWxfdXJsID0gJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMSc7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==