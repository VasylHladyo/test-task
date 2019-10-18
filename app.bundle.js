/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SettingsModule = function () {
    var settings = {
        'secondary-title': {
            status: true,
            selector: '.secondary-title',
            type: 'checkbox'
        },
        'title': {
            status: true,
            selector: '.title',
            type: 'checkbox'
        },
        'subtitle': {
            status: true,
            selector: '.author',
            type: 'checkbox'
        },
        'secondary-btn': {
            status: true,
            selector: '.learn-more',
            type: 'checkbox'
        },
        'theme': {
            val: 'theme-white',
            selector: '#theme-container',
            type: 'radio'
        }
    },
        tabSections = document.querySelectorAll('.section'),
        addClassToAll = function addClassToAll(selectors, className) {
        selectors.forEach(function (el) {
            el.classList.add(className);
        });
    },
        removeClassToAll = function removeClassToAll(selectors, className) {
        selectors.forEach(function (el) {
            el.classList.remove(className);
        });
    },
        setCheckboxStatus = function setCheckboxStatus(status, selector) {
        if (document.querySelector(selector)) {
            var list = document.querySelectorAll(selector);
            if (status) {
                removeClassToAll(list, 'hide');
            } else {
                addClassToAll(list, 'hide');
            }
        }
    },
        setRadioStatus = function setRadioStatus(theme, selector) {
        if (document.querySelector(selector)) {
            document.querySelector(selector).classList = theme;
        }
    },
        hideScroll = function hideScroll() {
        document.body.style.overflow = 'hidden';
    },
        showScroll = function showScroll() {
        document.body.style.overflow = 'auto';
    },
        saveSettings = function saveSettings(cb) {
        for (var key in settings) {
            var _settings$key = settings[key],
                type = _settings$key.type,
                selector = _settings$key.selector;

            if (type === 'checkbox') {
                setCheckboxStatus(settings[key].status, selector);
            } else if (type === 'radio') {
                setRadioStatus(settings[key].val, selector);
            }
        }
        cb();
    },
        closeModal = function closeModal() {
        document.querySelector('.modal').classList = 'hide';
        showScroll();
    },
        onClickTab = function onClickTab() {
        var tabList = document.querySelectorAll('.tab-btn');
        tabList.forEach(function (el) {
            el.addEventListener('click', function () {
                var sectionName = this.getAttribute('data-section');
                removeClassToAll(tabList, 'active');
                removeClassToAll(tabSections, 'active');
                this.classList.add('active');
                document.querySelector('form[name=' + sectionName + ']').classList.add('active');
            });
        });
    },
        events = function events() {
        document.querySelectorAll('.general-control').forEach(function (control) {
            control.addEventListener('change', function () {
                var name = this.name,
                    checked = this.checked;

                settings[name].status = checked;
            });
        });

        document.appearance.theme.forEach(function (control) {
            control.addEventListener('change', function () {
                var name = this.name,
                    value = this.value;

                settings[name].val = value;
            });
        });

        document.querySelector('#cancel-btn').addEventListener('click', function () {
            closeModal();
        });

        document.querySelector('#save-btn').addEventListener('click', function () {
            saveSettings(function () {
                closeModal();
            });
        });

        onClickTab();
    };
    return {
        init: function init() {
            hideScroll();
            events();
        }
    };
}();

SettingsModule.init();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/dist/cjs.js??ref--2-1!../node_modules/sass-loader/lib/loader.js??ref--2-2!./index.scss", function() {
			var newContent = require("!!../node_modules/css-loader/dist/cjs.js??ref--2-1!../node_modules/sass-loader/lib/loader.js??ref--2-2!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(1);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, "/*\n * Theme definitions\n */\n/*\n * Implementation of themes\n */\nbody {\n  margin: 0;\n  overflow-x: hidden; }\n\nhtml, body {\n  height: 100%; }\n\n.hide {\n  display: none !important; }\n\n.modal {\n  position: fixed;\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  background-color: #ffffff;\n  z-index: 9;\n  justify-content: center;\n  align-items: center; }\n  .modal .setting-container {\n    border-radius: 5px;\n    width: 100%;\n    max-width: 227px;\n    border: 1px solid #B0B8BF; }\n    .modal .setting-container .section {\n      display: none;\n      margin-top: 20px;\n      flex-direction: row;\n      flex-wrap: wrap; }\n      .modal .setting-container .section div {\n        width: 100%; }\n      .modal .setting-container .section.appearance {\n        justify-content: space-around; }\n      .modal .setting-container .section .theme-radio {\n        display: block;\n        position: relative;\n        margin-bottom: 12px;\n        cursor: pointer;\n        font-size: 22px;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        width: 20px;\n        height: 20px; }\n        .modal .setting-container .section .theme-radio input {\n          position: absolute;\n          opacity: 0;\n          cursor: pointer;\n          left: 0;\n          top: 0;\n          z-index: 9;\n          width: 100%;\n          height: 100%; }\n          .modal .setting-container .section .theme-radio input:checked ~ .checkmark:after {\n            display: block; }\n        .modal .setting-container .section .theme-radio .checkmark {\n          position: absolute;\n          top: 0;\n          left: 0;\n          height: 25px;\n          width: 25px;\n          background-color: #eee;\n          border-radius: 5px;\n          border: 1px solid #8E959E; }\n          .modal .setting-container .section .theme-radio .checkmark.white {\n            background-color: #ffffff; }\n          .modal .setting-container .section .theme-radio .checkmark.dark {\n            background-color: #10161C; }\n          .modal .setting-container .section .theme-radio .checkmark:after {\n            content: '';\n            top: 0px;\n            width: 8px;\n            height: 8px;\n            border-radius: 50%;\n            background: #000000;\n            z-index: 2;\n            margin-left: auto;\n            margin-right: -3px;\n            margin-top: -3px; }\n      .modal .setting-container .section.active {\n        display: flex !important; }\n    .modal .setting-container .setting-title {\n      background: #B0B8BF;\n      padding: 10px 30px;\n      margin-bottom: 20px;\n      color: #10161C;\n      font-weight: 600;\n      font-family: 'Source Sans Pro', sans-serif; }\n    .modal .setting-container .settings-text {\n      padding: 0 30px;\n      font-family: 'Source Sans Pro', sans-serif;\n      color: #10161C;\n      font-weight: 600; }\n    .modal .setting-container form {\n      padding: 0 30px;\n      font-family: 'Source Sans Pro', sans-serif;\n      color: #10161C;\n      font-weight: 600; }\n    .modal .setting-container .btn-cont {\n      display: flex;\n      margin-top: 30px; }\n      .modal .setting-container .btn-cont button {\n        width: 50%;\n        height: 35px;\n        background: transparent;\n        border-top: 1px solid #B0B8BF;\n        border-bottom: none;\n        outline: none !important;\n        font-family: 'Source Sans Pro', sans-serif;\n        color: #10161C;\n        font-weight: 600;\n        font-size: 15px; }\n        .modal .setting-container .btn-cont button:first-child {\n          border-left: none;\n          border-right: none; }\n        .modal .setting-container .btn-cont button:last-child {\n          border-right: none; }\n    .modal .setting-container .tabs {\n      display: flex;\n      justify-content: center; }\n      .modal .setting-container .tabs .tab-btn {\n        width: 100px;\n        background: transparent;\n        border: 1px solid gray;\n        height: 35px;\n        color: #181E29;\n        outline: none !important;\n        cursor: pointer; }\n        .modal .setting-container .tabs .tab-btn:first-child {\n          border-top-left-radius: 5px;\n          border-bottom-left-radius: 5px;\n          border-right: none; }\n        .modal .setting-container .tabs .tab-btn:last-child {\n          border-top-right-radius: 5px;\n          border-bottom-right-radius: 5px;\n          border-left: none; }\n        .modal .setting-container .tabs .tab-btn.active {\n          background: #181E29;\n          color: #ffffff; }\n\n/*header styles start*/\n.header {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  height: 80px; }\n  .theme-white .header {\n    background-color: white; }\n  .theme-gray .header {\n    background-color: #ffffff; }\n  .theme-dark .header {\n    background-color: #10161C; }\n  .header .logo {\n    max-width: 88px;\n    display: flex;\n    align-items: center;\n    margin-left: 18px; }\n    .header .logo img {\n      margin-right: 7px; }\n    .header .logo span {\n      font-family: 'IBM Plex Serif', serif;\n      font-style: normal;\n      font-weight: 500;\n      font-size: 18px;\n      line-height: 24px;\n      display: flex;\n      align-items: center; }\n      .theme-white .header .logo span {\n        color: #3625A9; }\n      .theme-gray .header .logo span {\n        color: #3625A9; }\n      .theme-dark .header .logo span {\n        color: #ffffff; }\n  .header nav {\n    margin-left: auto;\n    margin-right: 92px; }\n    .header nav ul {\n      list-style-type: none;\n      display: flex;\n      font-family: 'Source Sans Pro', sans-serif;\n      font-style: normal;\n      font-weight: 600;\n      font-size: 16px;\n      line-height: 28px;\n      align-items: center;\n      margin: 0;\n      height: 100%; }\n      .theme-white .header nav ul li {\n        color: #10161C; }\n      .theme-gray .header nav ul li {\n        color: #10161C; }\n      .theme-dark .header nav ul li {\n        color: #FFFFFF; }\n      .header nav ul li:last-child {\n        margin-left: 45px; }\n  .header .phone {\n    font-family: 'Open Sans', sans-serif;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 28px;\n    display: flex;\n    align-items: center; }\n    .theme-white .header .phone {\n      color: #10161C; }\n    .theme-gray .header .phone {\n      color: #10161C; }\n    .theme-dark .header .phone {\n      color: #FFFFFF; }\n\n/*header styles and*/\n/*main content styles start*/\nsection.main-content {\n  padding-bottom: 103px;\n  padding-top: 104px;\n  display: flex;\n  justify-content: center; }\n  .theme-white section.main-content {\n    background-color: #ffffff; }\n  .theme-gray section.main-content {\n    background-color: #FAFAFA; }\n  .theme-dark section.main-content {\n    background-color: #10161C; }\n  section.main-content .container {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    align-items: center; }\n  section.main-content .secondary-title {\n    font-family: 'Open Sans', sans-serif;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 28px;\n    align-items: center;\n    margin: 0;\n    width: 100%;\n    text-align: center; }\n    .theme-white section.main-content .secondary-title {\n      color: #8E959E; }\n    .theme-gray section.main-content .secondary-title {\n      color: #8E959E; }\n    .theme-dark section.main-content .secondary-title {\n      color: #FFFFFF; }\n  section.main-content .articles {\n    font-family: 'IBM Plex Serif', serif;\n    font-style: normal;\n    font-weight: 300;\n    font-size: 40px;\n    line-height: 48px;\n    align-items: center;\n    text-align: center;\n    margin: 6px;\n    width: 100%; }\n    .theme-white section.main-content .articles {\n      color: #181E29; }\n    .theme-gray section.main-content .articles {\n      color: #181E29; }\n    .theme-dark section.main-content .articles {\n      color: #FFFFFF; }\n  section.main-content .paragraph {\n    max-width: 770px;\n    font-family: 'Open Sans', sans-serif;\n    font-style: normal;\n    font-weight: 300;\n    font-size: 18px;\n    line-height: 28px;\n    display: flex;\n    align-items: center;\n    text-align: center;\n    margin: 20px; }\n    .theme-white section.main-content .paragraph {\n      color: #646C75; }\n    .theme-gray section.main-content .paragraph {\n      color: #646C75; }\n    .theme-dark section.main-content .paragraph {\n      color: #FFFFFF; }\n  section.main-content .post-main-container {\n    display: flex;\n    flex-wrap: wrap;\n    margin-top: 20px;\n    width: 100%; }\n    section.main-content .post-main-container .post-container {\n      width: calc( 100% / 3 - 30px);\n      margin: 0 15px 0 15px;\n      padding-bottom: 40px; }\n      .theme-white section.main-content .post-main-container .post-container {\n        background-color: #FFFFFF; }\n      .theme-gray section.main-content .post-main-container .post-container {\n        background-color: #FFFFFF; }\n      .theme-dark section.main-content .post-main-container .post-container {\n        background-color: #181E29; }\n      section.main-content .post-main-container .post-container .image {\n        width: 100%; }\n        section.main-content .post-main-container .post-container .image img {\n          border-radius: 5px;\n          width: 100%; }\n      section.main-content .post-main-container .post-container .author {\n        font-family: 'Source Sans Pro', sans-serif;\n        font-style: normal;\n        font-weight: 300;\n        font-size: 16px;\n        line-height: 28px;\n        display: flex;\n        align-items: center;\n        margin-top: 40px;\n        margin-bottom: 0;\n        padding-left: 40px; }\n        .theme-white section.main-content .post-main-container .post-container .author {\n          color: #8E959E; }\n        .theme-gray section.main-content .post-main-container .post-container .author {\n          color: #646C75; }\n        .theme-dark section.main-content .post-main-container .post-container .author {\n          color: #B0B8BF; }\n      section.main-content .post-main-container .post-container .title {\n        font-family: 'IBM Plex Serif', serif;\n        font-style: normal;\n        font-weight: 300;\n        font-size: 22px;\n        line-height: 28px;\n        display: flex;\n        align-items: center;\n        padding-left: 40px;\n        margin-top: 11px;\n        margin-bottom: 0; }\n        .theme-white section.main-content .post-main-container .post-container .title {\n          color: #3625A9; }\n        .theme-gray section.main-content .post-main-container .post-container .title {\n          color: #3625A9; }\n        .theme-dark section.main-content .post-main-container .post-container .title {\n          color: #6555D0; }\n      section.main-content .post-main-container .post-container .description {\n        font-family: 'Open Sans', sans-serif;\n        padding-left: 40px;\n        padding-right: 40px;\n        font-style: normal;\n        font-weight: normal;\n        font-size: 16px;\n        line-height: 28px;\n        display: flex;\n        align-items: center;\n        margin-top: 13px;\n        margin-bottom: 12px; }\n        .theme-white section.main-content .post-main-container .post-container .description {\n          color: #646C75; }\n        .theme-gray section.main-content .post-main-container .post-container .description {\n          color: #646C75; }\n        .theme-dark section.main-content .post-main-container .post-container .description {\n          color: #DADDE0; }\n      section.main-content .post-main-container .post-container .learn-more {\n        font-family: 'IBM Plex Serif', serif;\n        font-style: normal;\n        font-weight: normal;\n        font-size: 16px;\n        line-height: 24px;\n        display: flex;\n        align-items: center;\n        padding-left: 40px;\n        padding-right: 40px;\n        text-decoration: none; }\n        .theme-white section.main-content .post-main-container .post-container .learn-more {\n          color: #3625A9; }\n        .theme-gray section.main-content .post-main-container .post-container .learn-more {\n          color: #3625A9; }\n        .theme-dark section.main-content .post-main-container .post-container .learn-more {\n          color: #6555D0; }\n  section.main-content .btn-container {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    margin-top: 39px; }\n    section.main-content .btn-container a {\n      font-family: 'IBM Plex Serif', serif;\n      font-style: normal;\n      font-weight: normal;\n      font-size: 16px;\n      line-height: 24px;\n      border-radius: 4px;\n      padding: 11px 40px;\n      text-decoration: none;\n      text-align: center; }\n    section.main-content .btn-container .contact {\n      background: #4534BA;\n      margin-right: 24px;\n      color: #ffffff !important; }\n    section.main-content .btn-container .learn-more {\n      border: 2px solid #3625A9;\n      box-sizing: border-box;\n      padding: 11px 34px; }\n      .theme-white section.main-content .btn-container .learn-more {\n        background-color: white;\n        color: #10161C; }\n      .theme-gray section.main-content .btn-container .learn-more {\n        background-color: #ffffff;\n        color: #10161C; }\n      .theme-dark section.main-content .btn-container .learn-more {\n        background-color: #10161C;\n        color: #FFFFFF; }\n\n/*main content styles and*/\n/*footer styles start*/\nfooter {\n  padding-bottom: 55px;\n  display: flex;\n  justify-content: center; }\n  .theme-white footer {\n    background-color: #ffffff; }\n  .theme-gray footer {\n    background-color: #FAFAFA; }\n  .theme-dark footer {\n    background-color: #10161C; }\n  footer .container {\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center; }\n    footer .container > div {\n      display: flex; }\n  footer .footer-logo {\n    max-width: 88px;\n    margin-bottom: 33px;\n    display: flex;\n    align-items: center; }\n    footer .footer-logo img {\n      margin-right: 5px; }\n    footer .footer-logo span {\n      font-family: 'IBM Plex Serif', serif;\n      font-style: normal;\n      font-weight: 500;\n      font-size: 18px;\n      line-height: 24px;\n      display: flex;\n      align-items: center; }\n      .theme-white footer .footer-logo span {\n        color: #3625A9; }\n      .theme-gray footer .footer-logo span {\n        color: #3625A9; }\n      .theme-dark footer .footer-logo span {\n        color: #ffffff; }\n  footer .footer-text {\n    max-width: 770px;\n    text-align: center;\n    font-family: 'Open Sans', sans-serif;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 28px; }\n    .theme-white footer .footer-text {\n      color: #646C75; }\n    .theme-gray footer .footer-text {\n      color: #181E29; }\n    .theme-dark footer .footer-text {\n      color: #8E959E; }\n  footer .footer-social {\n    margin-top: 30px; }\n    footer .footer-social img {\n      margin: 0 8px; }\n  footer .copyright {\n    font-family: 'Open Sans', sans-serif;\n    font-style: normal;\n    font-weight: 300;\n    font-size: 16px;\n    line-height: 28px;\n    margin-top: 33px; }\n    .theme-white footer .copyright {\n      color: #8E959E; }\n    .theme-gray footer .copyright {\n      color: #646C75; }\n    .theme-dark footer .copyright {\n      color: #8E959E; }\n\n/*footer styles and*/\n.container {\n  display: flex;\n  justify-content: space-between; }\n\n@media (min-width: 768px) {\n  .container {\n    width: 750px; } }\n\n@media (min-width: 992px) {\n  .container {\n    width: 970px; } }\n\n@media (min-width: 1200px) {\n  .container {\n    width: 1205px; } }\n\n@media (max-width: 767.98px) {\n  section.main-content .post-main-container .post-container {\n    width: 100%; } }\n", ""]);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(3);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list, options);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list, options) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove, transformResult;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    transformResult = options.transform(obj.css);
	    
	    if (transformResult) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = transformResult;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css. 
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ })
/******/ ]);