webpackHotUpdate("main",{

/***/ "./src/client/pages/main/ui/index.ts":
/*!*******************************************!*\
  !*** ./src/client/pages/main/ui/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./main-page/MainPage */ \"./src/client/pages/main/ui/main-page/MainPage.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/client/pages/main/ui/index.ts?");

/***/ }),

/***/ "./src/client/pages/main/ui/main-page/MainPage.tsx":
/*!*********************************************************!*\
  !*** ./src/client/pages/main/ui/main-page/MainPage.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MainPage = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar widgets_1 = __webpack_require__(/*! ../../../../widgets */ \"./src/client/widgets/index.ts\");\r\nvar entities_1 = __webpack_require__(/*! ../../../../entities */ \"./src/client/entities/index.ts\");\r\nvar shared_1 = __webpack_require__(/*! ../../../../shared */ \"./src/client/shared/index.ts\");\r\nvar main_page_scss_1 = __importDefault(__webpack_require__(/*! ./main-page.scss */ \"./src/client/pages/main/ui/main-page/main-page.scss\"));\r\nvar MainPage = function () { return (react_1.default.createElement(\"div\", { className: main_page_scss_1.default.container },\r\n    react_1.default.createElement(widgets_1.Nav, null),\r\n    react_1.default.createElement(entities_1.RecyclingCentersList, null),\r\n    react_1.default.createElement(entities_1.FormDelivery, null),\r\n    react_1.default.createElement(\"div\", { className: main_page_scss_1.default.mapWrap },\r\n        react_1.default.createElement(shared_1.RemoveRouteBtn, null),\r\n        react_1.default.createElement(entities_1.MapYandex, null),\r\n        react_1.default.createElement(entities_1.PrivacyPolicy, null)))); };\r\nexports.MainPage = MainPage;\r\n\n\n//# sourceURL=webpack:///./src/client/pages/main/ui/main-page/MainPage.tsx?");

/***/ })

})