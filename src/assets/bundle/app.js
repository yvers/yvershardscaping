/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./app.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _initPhotoSwipe = __webpack_require__(/*! ./initPhotoSwipe */ \"./initPhotoSwipe.js\");\n\nvar _initPhotoSwipe2 = _interopRequireDefault(_initPhotoSwipe);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _initPhotoSwipe2.default)('.my-gallery');\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./initPhotoSwipe.js":
/*!***************************!*\
  !*** ./initPhotoSwipe.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function (gallerySelector) {\n  // parse slide data (url, title, size ...) from DOM elements \n  // (children of gallerySelector)\n  var parseThumbnailElements = function parseThumbnailElements(el) {\n    var thumbElements = el.childNodes,\n        numNodes = thumbElements.length,\n        items = [],\n        figureEl,\n        linkEl,\n        size,\n        item;\n\n    for (var i = 0; i < numNodes; i++) {\n      figureEl = thumbElements[i]; // <figure> element\n\n      // include only element nodes \n      if (figureEl.nodeType !== 1) {\n        continue;\n      }\n\n      linkEl = figureEl.children[0]; // <a> element\n\n      size = linkEl.getAttribute('data-size').split('x');\n\n      // create slide object\n      item = {\n        src: linkEl.getAttribute('href'),\n        w: parseInt(size[0], 10),\n        h: parseInt(size[1], 10)\n      };\n\n      if (figureEl.children.length > 1) {\n        // <figcaption> content\n        item.title = figureEl.children[1].innerHTML;\n      }\n\n      if (linkEl.children.length > 0) {\n        // <img> thumbnail element, retrieving thumbnail url\n        item.msrc = linkEl.children[0].getAttribute('src');\n      }\n\n      item.el = figureEl; // save link to element for getThumbBoundsFn\n      items.push(item);\n    }\n\n    return items;\n  };\n\n  // find nearest parent element\n  var closest = function closest(el, fn) {\n    return el && (fn(el) ? el : closest(el.parentNode, fn));\n  };\n\n  // triggers when user clicks on thumbnail\n  var onThumbnailsClick = function onThumbnailsClick(e) {\n    e = e || window.event;\n    e.preventDefault ? e.preventDefault() : e.returnValue = false;\n\n    var eTarget = e.target || e.srcElement;\n\n    // find root element of slide\n    var clickedListItem = closest(eTarget, function (el) {\n      return el.tagName && el.tagName.toUpperCase() === 'FIGURE';\n    });\n\n    if (!clickedListItem) {\n      return;\n    }\n\n    // find index of clicked item by looping through all child nodes\n    // alternatively, you may define index via data- attribute\n    var clickedGallery = clickedListItem.parentNode,\n        childNodes = clickedListItem.parentNode.childNodes,\n        numChildNodes = childNodes.length,\n        nodeIndex = 0,\n        index;\n\n    for (var i = 0; i < numChildNodes; i++) {\n      if (childNodes[i].nodeType !== 1) {\n        continue;\n      }\n\n      if (childNodes[i] === clickedListItem) {\n        index = nodeIndex;\n        break;\n      }\n      nodeIndex++;\n    }\n\n    if (index >= 0) {\n      // open PhotoSwipe if valid index found\n      openPhotoSwipe(index, clickedGallery);\n    }\n    return false;\n  };\n\n  // parse picture index and gallery index from URL (#&pid=1&gid=2)\n  var photoswipeParseHash = function photoswipeParseHash() {\n    var hash = window.location.hash.substring(1),\n        params = {};\n\n    if (hash.length < 5) {\n      return params;\n    }\n\n    var vars = hash.split('&');\n    for (var i = 0; i < vars.length; i++) {\n      if (!vars[i]) {\n        continue;\n      }\n      var pair = vars[i].split('=');\n      if (pair.length < 2) {\n        continue;\n      }\n      params[pair[0]] = pair[1];\n    }\n\n    if (params.gid) {\n      params.gid = parseInt(params.gid, 10);\n    }\n\n    return params;\n  };\n\n  var openPhotoSwipe = function openPhotoSwipe(index, galleryElement, disableAnimation, fromURL) {\n    var pswpElement = document.querySelectorAll('.pswp')[0],\n        gallery,\n        options,\n        items;\n\n    items = parseThumbnailElements(galleryElement);\n\n    // define options (if needed)\n    options = {\n      // define gallery index (for URL)\n      galleryUID: galleryElement.getAttribute('data-pswp-uid'),\n\n      getThumbBoundsFn: function getThumbBoundsFn(index) {\n        // See Options -> getThumbBoundsFn section of documentation for more info\n        var thumbnail = items[index].el.getElementsByTagName('img')[0],\n            // find thumbnail\n        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,\n            rect = thumbnail.getBoundingClientRect();\n\n        return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };\n      }\n    };\n\n    // PhotoSwipe opened from URL\n    if (fromURL) {\n      if (options.galleryPIDs) {\n        // parse real index when custom PIDs are used \n        // http://photoswipe.com/documentation/faq.html#custom-pid-in-url\n        for (var j = 0; j < items.length; j++) {\n          if (items[j].pid == index) {\n            options.index = j;\n            break;\n          }\n        }\n      } else {\n        // in URL indexes start from 1\n        options.index = parseInt(index, 10) - 1;\n      }\n    } else {\n      options.index = parseInt(index, 10);\n    }\n\n    // exit if index not found\n    if (isNaN(options.index)) {\n      return;\n    }\n\n    if (disableAnimation) {\n      options.showAnimationDuration = 0;\n    }\n\n    // Pass data to PhotoSwipe and initialize it\n    gallery = new _photoswipe2.default(pswpElement, _photoswipeUiDefault2.default, items, options);\n    gallery.init();\n  };\n\n  // loop through all gallery elements and bind events\n  var galleryElements = document.querySelectorAll(gallerySelector);\n\n  for (var i = 0, l = galleryElements.length; i < l; i++) {\n    galleryElements[i].setAttribute('data-pswp-uid', i + 1);\n    galleryElements[i].onclick = onThumbnailsClick;\n  }\n\n  // Parse URL and open gallery if it contains #&pid=3&gid=1\n  var hashData = photoswipeParseHash();\n\n  if (hashData.pid && hashData.gid) {\n    openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);\n  }\n};\n\nvar _photoswipe = __webpack_require__(/*! photoswipe */ \"../node_modules/photoswipe/dist/photoswipe.js\");\n\nvar _photoswipe2 = _interopRequireDefault(_photoswipe);\n\nvar _photoswipeUiDefault = __webpack_require__(/*! photoswipe/dist/photoswipe-ui-default */ \"../node_modules/photoswipe/dist/photoswipe-ui-default.js\");\n\nvar _photoswipeUiDefault2 = _interopRequireDefault(_photoswipeUiDefault);\n\n__webpack_require__(/*! photoswipe/dist/default-skin/default-skin.png */ \"../node_modules/photoswipe/dist/default-skin/default-skin.png\");\n\n__webpack_require__(/*! photoswipe/dist/default-skin/default-skin.svg */ \"../node_modules/photoswipe/dist/default-skin/default-skin.svg\");\n\n__webpack_require__(/*! photoswipe/dist/default-skin/preloader.gif */ \"../node_modules/photoswipe/dist/default-skin/preloader.gif\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n;\n\n//# sourceURL=webpack:///./initPhotoSwipe.js?");

/***/ })

/******/ });