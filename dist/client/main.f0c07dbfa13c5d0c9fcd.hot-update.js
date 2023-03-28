webpackHotUpdate("main",{

/***/ "./src/client/widgets/nav/index.ts":
/*!*****************************************!*\
  !*** ./src/client/widgets/nav/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ui/Nav */ \"./src/client/widgets/nav/ui/Nav.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/client/widgets/nav/index.ts?");

/***/ }),

/***/ "./src/client/widgets/nav/ui/Nav.tsx":
/*!*******************************************!*\
  !*** ./src/client/widgets/nav/ui/Nav.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Nav = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar nav_scss_1 = __importDefault(__webpack_require__(/*! ./nav.scss */ \"./src/client/widgets/nav/ui/nav.scss\"));\r\nvar shared_1 = __webpack_require__(/*! ../../../shared */ \"./src/client/shared/index.ts\");\r\nfunction Nav() {\r\n    return (react_1.default.createElement(\"div\", { className: nav_scss_1.default.container, id: \"menuUser\" },\r\n        react_1.default.createElement(shared_1.BtnDelivery, null),\r\n        react_1.default.createElement(shared_1.BtnCommunicate, null),\r\n        react_1.default.createElement(shared_1.BtnHistory, null),\r\n        react_1.default.createElement(shared_1.BtnSettings, null),\r\n        react_1.default.createElement(shared_1.BtnMore, null)));\r\n}\r\nexports.Nav = Nav;\r\n\n\n//# sourceURL=webpack:///./src/client/widgets/nav/ui/Nav.tsx?");

/***/ })

})