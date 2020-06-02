(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/app.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/landing/components/card/card.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/landing/components/card/card.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\" [ngClass]=\"cardClasses\" [class.h-100]=\"grow\">\n  <div #header class=\"card-header\" [class.hidden]=\"!isSectionVisible(header)\">\n    <ng-content select=\"[header]\"></ng-content>\n  </div>\n  <div class=\"card-body\">\n    <ng-content></ng-content>\n  </div>\n  <div #footer class=\"card-footer\" [class.hidden]=\"!isSectionVisible(footer)\">\n    <ng-content select=\"[footer]\"></ng-content>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/landing/components/exp/exp.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/landing/components/exp/exp.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a class=\"anchor\" id=\"exp\"></a>\r\n<section>\r\n    <a href=\"http://grse.de\" target=\"_blank\">\r\n        <div class=\"row exp-block\">\r\n            <div class=\"col-sm-12 col-lg-6 company-logo img-hover-zoom\">\r\n                <img src=\"{{image1}}\">\r\n            </div>\r\n            <div class=\"col-sm-12 col-lg-6\">\r\n                <div class=\"text-center\">\r\n                    <img class=\"mt-4 logo-zoom\" [src]=\"grseLogo\" [ngStyle]=\"{'height': '50px'}\">\r\n                </div>\r\n                <div class=\"text-center mt-5\">\r\n                    <h4>Software development for a German automobile company based on TwinCat 3.<br>\r\n                    </h4>\r\n                    <h5>Technology: TwinCat 3, VisiWin 7, OpcUa</h5>\r\n                    <h5>Tools: Git, Jira, Scrum</h5>\r\n                    <h4 class=\"mb-1\">Key Projects & Achievements:</h4>\r\n                    <h5>\r\n                        <li>Commissioning on site in Germany</li>\r\n                        <li>Perform hands-on development and deployment</li>\r\n                        <li>Performance and capacity monitoring</li>\r\n                        <li>Problem identification</li>\r\n                        <li>Load testing</li>\r\n                        <li>library development</li>\r\n                    </h5>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </a>\r\n\r\n    <div class=\"clearfix visible-sm-block visible-md-block\"></div>\r\n\r\n    <a href=\"http://cisforce.com\" target=\"_blank\">\r\n        <div class=\"row exp-block\">\r\n            <div class=\"col-sm-12 col-lg-6\">\r\n                <div class=\"text-center pb-4\">\r\n                    <img class=\"mt-4 logo-zoom\" [src]=\"cisForceLogo\">\r\n                </div>\r\n                <div class=\"text-center mt-5\">\r\n                    <h4>Development of online outsourcing platform</h4>\r\n                    <h5>Technology: Angular2+, TypeScript, JavaScript, ngrx, rxjs, NodeJS, NestJs, GraphQL, Postman, PostgreSQL</h5>\r\n                    <h5>Tools: Git, Jira, Scrum</h5>\r\n                    <h4 class=\"mb-1\">Key Projects & Achievements:</h4>\r\n                    <h5>\r\n                        <li>Development new features</li>\r\n                        <li>Code Review and Merge Requests</li>\r\n                        <li>Planning tasks and managing schedules to meet deadlines<br> for web development projects in\r\n                            a team of three developers</li>\r\n                        <li>Working with the database</li>\r\n                    </h5>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-12 col-lg-6 company-logo img-hover-zoom\">\r\n                <img src=\"{{image2}}\">\r\n            </div>\r\n        </div>\r\n    </a>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/landing/components/footer/footer.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/landing/components/footer/footer.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer p-0\">\r\n  <div class=\"container-fluid m-2\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 offset-md-3 d-flex justify-content-center\">\r\n        <a class=\"btn\" href=\"https://www.linkedin.com/in/nikita-b-1501031a4/\">\r\n          <i class=\"fab fa-linkedin fa-2x\"></i>\r\n        </a>\r\n        <a class=\"btn\" href=\"https://t.me/Oonikita\">\r\n          <i class=\"fab fa-telegram-plane fa-2x\"></i>\r\n        </a>\r\n        <a class=\"btn\" href=\"mailto:nikita.bukanov93@yandex.ru\">\r\n          <i class=\"fas fa-envelope-open-text fa-2x\"></i>\r\n        </a>\r\n      </div>\r\n      <div class=\"d-flex justify-content-center align-items-center col-md-3 col-12\">\r\n        <a href=\"https://www.codewars.com/users/gzngzn\">\r\n          <img src=\"https://www.codewars.com/users/gzngzn/badges/micro\" alt=\"codewars\">\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/landing/components/general-info/general-info.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/landing/components/general-info/general-info.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-header page-header-custom header-filter\">\r\n    <a class=\"anchor\" id=\"general-info\"></a>\r\n    <div class=\"page-header-image floating-zoom\" data-parallax=\"false\"\r\n        [ngStyle]=\"{ 'background-image': 'url(' + image + ')'}\"></div>\r\n\r\n    <div class=\"content-center pb-2 pl-0 pr-0\">\r\n        <div class=\"col-md-12 ml-auto mr-auto text-center\">\r\n            <div class=\"title pl-auto pr-auto pb-2 p-xl-5\">\r\n                <p class=\"pb-2\">Analytical and highly motivated Software Developer with 4 years of experience in web development.</p>\r\n                <p class=\"pb-2\">Bachelor of industrial automatization in Nizhny Novgorod State Technical University (2011-2015).</p>\r\n                <p class=\"pb-2\">Innovative professional with the ability to collaborate with colleagues across multiple business areas to ensure products align with requirements and expectations.</p> \r\n                <p class=\"pb-2\">Build new tools to streamline the development and deployment process, improve software and code quality, and increase productivity to support rapid delivery in an Agile environment.</p> \r\n                \r\n                <p class=\"title--center text-nowrap\"><a class=\"block-border action p-3\" href=\"#tech-stack\">Explore my tech skills</a></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/landing/components/header/header.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/landing/components/header/header.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav id=\"navbar-main\" class=\"navbar navbar-expand-sm fixed-top navbar-light headroom\">\r\n    <div class=\"row\">\r\n        <a class=\"navbar-brand pl-6\" href=\"#\">NIKITA BUKANOV</a>\r\n        <!-- <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button> -->\r\n        <div class=\"collapse navbar-collapse\" id=\"navbar\">\r\n            <ul class=\"navbar-nav\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#general-info\">about me</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#tech-stack\">tech stack</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#exp\">experience</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/landing/components/landing.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/landing/components/landing.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header-root></header-root>\r\n<general-info-root></general-info-root>\r\n<tech-stack-root></tech-stack-root>\r\n<exp-root></exp-root>\r\n<portfolio-root></portfolio-root>\r\n<footer-root></footer-root>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/landing/components/portfolio/portfolio.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/landing/components/portfolio/portfolio.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"portfolio pb-3\">\r\n    <p class=\"title--center pt-2\">My portfolio projects</p>\r\n    <div class=\"container\">\r\n        <div *ngFor=\"let item of portfolioItems\">\r\n            <a href={{item.link}}>\r\n                <div class=\"row portfolioItem justify-content-center\">\r\n                    <div class=\"col-12 col-lg-2 d-flex justify-content-center align-items-center\">\r\n                        <p>{{item.name}}</p>\r\n                    </div>\r\n                    <div class=\"col-12 col-lg-6 d-flex justify-content-center align-items-center\">\r\n                        <p>{{item.desc}}</p>\r\n                    </div>\r\n                    <div class=\"skills col-12 col-lg-2 d-flex justify-content-center align-items-center\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-6\" *ngFor=\"let skill of item.tech\">\r\n                                <i class={{skill}}></i>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12 col-lg-2 pr-lg-0 pt-lg-0 pt-2 d-flex justify-content-center align-items-center\">\r\n                        <img *ngIf=\"item.img\" [ngStyle]=\"{'border-radius': !mobile ? '0% 20px 20px 0%' : ''}\" src={{item.img}}>\r\n                    </div>\r\n                </div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/landing/components/tech-stack/tech-stack.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/landing/components/tech-stack/tech-stack.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section-sm p-0\">\r\n    <a class=\"anchor\" id=\"tech-stack\"></a>\r\n    <section class=\"section section-md pt-4\">\r\n        <div class=\"container\">\r\n            <h5 class=\"lead text-center mb-6\">My Tech Stack</h5>\r\n            <div class=\"row mb-3\">\r\n                <div *ngFor=\"let howToStep of howToSteps\" \r\n                    class=\"col-lg-3 col-md-6 mb-3\">\r\n                    <h1 class=\"text-center text-dark mb-2 zoom\">\r\n                        <img class=\"tech-skill\" src={{howToStep.icon}}>\r\n                    </h1>\r\n                    <h6 class=\"text-center\">{{ howToStep.title }}</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</section>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modules_landing_landing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/landing/landing-routing.module */ "./src/modules/landing/landing-routing.module.ts");




const routes = [
    { path: 'landing', children: _modules_landing_landing_routing_module__WEBPACK_IMPORTED_MODULE_3__["landingRoutes"] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_modules_landing_landing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/modules/landing/landing-routing.module */ "./src/modules/landing/landing-routing.module.ts");
/* harmony import */ var src_modules_landing_landing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/modules/landing/landing.module */ "./src/modules/landing/landing.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/app.component */ "./src/app/components/app.component.ts");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
        ],
        imports: [
            src_modules_landing_landing_module__WEBPACK_IMPORTED_MODULE_4__["LandingModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            src_modules_landing_landing_routing_module__WEBPACK_IMPORTED_MODULE_3__["LandingRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ],
        providers: [],
        bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/app.component.scss":
/*!***********************************************!*\
  !*** ./src/app/components/app.component.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/app.component.ts":
/*!*********************************************!*\
  !*** ./src/app/components/app.component.ts ***!
  \*********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'gotemp';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/components/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/modules/landing/components/card/card.component.ts":
/*!***************************************************************!*\
  !*** ./src/modules/landing/components/card/card.component.ts ***!
  \***************************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardComponent = class CardComponent {
    isSectionVisible(element) {
        return element && element.childNodes.length > 0;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "classes", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "grow", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "liftHover", void 0);
CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cf-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/landing/components/card/card.component.html")).default
    })
], CardComponent);



/***/ }),

/***/ "./src/modules/landing/components/exp/exp.component.scss":
/*!***************************************************************!*\
  !*** ./src/modules/landing/components/exp/exp.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\n  width: 100%;\n  min-height: 40%;\n  background: #191919;\n  position: relative;\n  opacity: 100%;\n  padding-bottom: 0;\n  padding-top: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.2);\n  border-top-width: 1px;\n  border-top-style: solid;\n  border-top-color: rgba(0, 0, 0, 0.2);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n}\nsection a {\n  text-decoration: none;\n}\n.company-logo {\n  position: relative;\n  padding: 0;\n  background-size: 100% auto;\n  background-repeat: no-repeat;\n}\n.company-desc {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  padding: 0;\n  display: inline-block;\n}\n.text-center {\n  color: #a2a2a2;\n}\nh6 {\n  font-size: 1em;\n  color: #a2a2a2;\n}\nh5 {\n  font-size: 1.2em;\n  color: #a2a2a2;\n}\n.img-hover-zoom {\n  overflow: hidden;\n}\n.img-hover-zoom img {\n  -webkit-transition: -webkit-transform 1s, -webkit-filter 2s ease-in-out;\n  transition: -webkit-transform 1s, -webkit-filter 2s ease-in-out;\n  transition: transform 1s, filter 2s ease-in-out;\n  transition: transform 1s, filter 2s ease-in-out, -webkit-transform 1s, -webkit-filter 2s ease-in-out;\n  -webkit-filter: blur(1px);\n          filter: blur(1px);\n  max-width: 100%;\n}\n.exp-block:hover > .img-hover-zoom img {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n}\nli {\n  padding-top: 10px;\n}\n.logo-zoom {\n  -webkit-transition: -webkit-transform 1s, -webkit-filter 2s ease-in-out;\n  transition: -webkit-transform 1s, -webkit-filter 2s ease-in-out;\n  transition: transform 1s, filter 2s ease-in-out;\n  transition: transform 1s, filter 2s ease-in-out, -webkit-transform 1s, -webkit-filter 2s ease-in-out;\n}\n.logo-zoom:hover {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2xhbmRpbmcvY29tcG9uZW50cy9leHAvRDpcXEFuZ3VsYXJcXE15VGVzdFByb2plY3RzXFxjdi9zcmNcXG1vZHVsZXNcXGxhbmRpbmdcXGNvbXBvbmVudHNcXGV4cFxcZXhwLmNvbXBvbmVudC5zY3NzIiwic3JjL21vZHVsZXMvbGFuZGluZy9jb21wb25lbnRzL2V4cC9leHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1Q0FBQTtBQ0NKO0FEQ0k7RUFDSSxxQkFBQTtBQ0NSO0FER0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FDQUo7QURHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUNBSjtBREdBO0VBQ0ksY0FBQTtBQ0FKO0FER0E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQ0FKO0FER0E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNBSjtBREVBO0VBQ0ksZ0JBQUE7QUNDSjtBRENJO0VBQ0ksdUVBQUE7RUFBQSwrREFBQTtFQUFBLCtDQUFBO0VBQUEsb0dBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NSO0FER0U7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FDQUo7QURHRTtFQUNJLGlCQUFBO0FDQU47QURHQTtFQUNJLHVFQUFBO0VBQUEsK0RBQUE7RUFBQSwrQ0FBQTtFQUFBLG9HQUFBO0FDQUo7QURDSTtFQUNJLDhCQUFBO1VBQUEsc0JBQUE7QUNDUiIsImZpbGUiOiJzcmMvbW9kdWxlcy9sYW5kaW5nL2NvbXBvbmVudHMvZXhwL2V4cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA0MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTkxOTE5O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3BhY2l0eTogMTAwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBcclxuICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbXBhbnktbG9nbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uY29tcGFueS1kZXNjIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnRleHQtY2VudGVyIHtcclxuICAgIGNvbG9yOiAjYTJhMmEyO1xyXG59XHJcblxyXG5oNiB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiAjYTJhMmEyO1xyXG59XHJcblxyXG5oNSB7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgY29sb3I6ICNhMmEyYTI7XHJcbn1cclxuLmltZy1ob3Zlci16b29tIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMsIGZpbHRlciAycyBlYXNlLWluLW91dDtcclxuICAgICAgICBmaWx0ZXI6IGJsdXIoMXB4KTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgICBcclxuICAuZXhwLWJsb2NrOmhvdmVyID4gLmltZy1ob3Zlci16b29tIGltZ3tcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgfVxyXG5cclxuICBsaSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIH1cclxuXHJcbi5sb2dvLXpvb217XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMsIGZpbHRlciAycyBlYXNlLWluLW91dDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICB9XHJcbn0iLCJzZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDQwJTtcbiAgYmFja2dyb3VuZDogIzE5MTkxOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvcGFjaXR5OiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcbiAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuc2VjdGlvbiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY29tcGFueS1sb2dvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmNvbXBhbnktZGVzYyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udGV4dC1jZW50ZXIge1xuICBjb2xvcjogI2EyYTJhMjtcbn1cblxuaDYge1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6ICNhMmEyYTI7XG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgY29sb3I6ICNhMmEyYTI7XG59XG5cbi5pbWctaG92ZXItem9vbSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaW1nLWhvdmVyLXpvb20gaW1nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzLCBmaWx0ZXIgMnMgZWFzZS1pbi1vdXQ7XG4gIGZpbHRlcjogYmx1cigxcHgpO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5leHAtYmxvY2s6aG92ZXIgPiAuaW1nLWhvdmVyLXpvb20gaW1nIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxubGkge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmxvZ28tem9vbSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcywgZmlsdGVyIDJzIGVhc2UtaW4tb3V0O1xufVxuLmxvZ28tem9vbTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59Il19 */");

/***/ }),

/***/ "./src/modules/landing/components/exp/exp.component.ts":
/*!*************************************************************!*\
  !*** ./src/modules/landing/components/exp/exp.component.ts ***!
  \*************************************************************/
/*! exports provided: ExpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpComponent", function() { return ExpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExpComponent = class ExpComponent {
    constructor() {
        this.image1 = './assets/img/code1.jpg';
        this.image2 = './assets/img/code2.jpg';
        this.grseLogo = '/assets/img/grse-logo-black.png';
        this.cisForceLogo = '/assets/img/cis-force-logo.png';
    }
};
ExpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'exp-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./exp.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/landing/components/exp/exp.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./exp.component.scss */ "./src/modules/landing/components/exp/exp.component.scss")).default]
    })
], ExpComponent);



/***/ }),

/***/ "./src/modules/landing/components/footer/footer.component.scss":
/*!*********************************************************************!*\
  !*** ./src/modules/landing/components/footer/footer.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  background-color: #191919;\n  overflow: hidden;\n}\n\nimg {\n  max-width: auto;\n  height: 40px;\n  -webkit-filter: grayscale(100%);\n  /* Safari 6.0 - 9.0 */\n  filter: grayscale(100%);\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n}\n\n.btn {\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  background: #191919;\n  margin: 2px;\n  border-radius: 30%;\n  border: #a2a2a2 solid 0.7px;\n  color: #a2a2a2;\n  overflow: hidden;\n  position: relative;\n  padding: 0px;\n  padding-top: 11px;\n}\n\n.btn i {\n  text-align: center;\n  vertical-align: bottom;\n  -webkit-transition: 0.2s linear;\n  transition: 0.2s linear;\n  position: relative;\n}\n\n.btn:hover i {\n  -webkit-transform: scale(1.3);\n          transform: scale(1.3);\n  color: #191919;\n}\n\n.btn::before {\n  content: \"\";\n  position: absolute;\n  width: 120%;\n  height: 120%;\n  background: #919191;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  left: -110%;\n  top: 90%;\n}\n\n.btn:hover::before {\n  -webkit-animation: aaa 0.9s 1;\n          animation: aaa 0.9s 1;\n  top: -10%;\n  left: -10%;\n}\n\n@-webkit-keyframes aaa {\n  0% {\n    left: -110%;\n    top: 90%;\n  }\n  50% {\n    left: 10%;\n    top: -30%;\n  }\n  100% {\n    top: -10%;\n    left: -10%;\n  }\n}\n\n@keyframes aaa {\n  0% {\n    left: -110%;\n    top: 90%;\n  }\n  50% {\n    left: 10%;\n    top: -30%;\n  }\n  100% {\n    top: -10%;\n    left: -10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2xhbmRpbmcvY29tcG9uZW50cy9mb290ZXIvRDpcXEFuZ3VsYXJcXE15VGVzdFByb2plY3RzXFxjdi9zcmNcXG1vZHVsZXNcXGxhbmRpbmdcXGNvbXBvbmVudHNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL21vZHVsZXMvbGFuZGluZy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQWlDLHFCQUFBO0VBQ2pDLHVCQUFBO0FDRUo7O0FEQ0E7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQ0VKOztBREFFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFFO0VBR0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQUEsdUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENFO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLGNBQUE7QUNFSjs7QURBRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUNHSjs7QURERTtFQUNFLDZCQUFBO1VBQUEscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0lKOztBREZFO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsUUFBQTtFQ0tKO0VESkc7SUFDQyxTQUFBO0lBQ0EsU0FBQTtFQ01KO0VETEc7SUFDQyxTQUFBO0lBQ0EsVUFBQTtFQ09KO0FBQ0Y7O0FEakJFO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsUUFBQTtFQ0tKO0VESkc7SUFDQyxTQUFBO0lBQ0EsU0FBQTtFQ01KO0VETEc7SUFDQyxTQUFBO0lBQ0EsVUFBQTtFQ09KO0FBQ0YiLCJmaWxlIjoic3JjL21vZHVsZXMvbGFuZGluZy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWF4LXdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA0MHB4OyAgICAgXHJcbiAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpOyAvKiBTYWZhcmkgNi4wIC0gOS4wICovXHJcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTsgXHJcbn1cclxuICBcclxuYm9keXtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuICAuYnRue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTkxOTE5O1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMCU7XHJcbiAgICBib3JkZXI6ICNhMmEyYTIgc29saWQgMC43cHg7XHJcbiAgICAvLyBib3gtc2hhZG93OiAwIDZweCA2cHggLTVweCAjNjE2MTYxNzA7XHJcbiAgICBjb2xvcjogI2EyYTJhMjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTFweDtcclxuICB9XHJcbiAgLmJ0biBpe1xyXG4gICAgLy8gbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAvLyBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBsaW5lYXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5idG46aG92ZXIgaXtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxuICAgIGNvbG9yOiAjMTkxOTE5O1xyXG4gIH1cclxuICAuYnRuOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEyMCU7XHJcbiAgICBoZWlnaHQ6IDEyMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTQ1LCAxNDUsIDE0NSk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICBsZWZ0OiAtMTEwJTtcclxuICAgIHRvcDogOTAlO1xyXG4gIH1cclxuICAuYnRuOmhvdmVyOjpiZWZvcmV7XHJcbiAgICBhbmltYXRpb246IGFhYSAwLjlzIDE7XHJcbiAgICB0b3A6IC0xMCU7XHJcbiAgICBsZWZ0OiAtMTAlO1xyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGFhYSB7XHJcbiAgICAwJXtcclxuICAgICAgbGVmdDogLTExMCU7XHJcbiAgICAgIHRvcDogOTAlO1xyXG4gICAgfTUwJXtcclxuICAgICAgbGVmdDogMTAlO1xyXG4gICAgICB0b3A6IC0zMCU7XHJcbiAgICB9MTAwJXtcclxuICAgICAgdG9wOiAtMTAlO1xyXG4gICAgICBsZWZ0OiAtMTAlO1xyXG4gICAgfVxyXG4gIH1cclxuICAiLCIuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDQwcHg7XG4gIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gIC8qIFNhZmFyaSA2LjAgLSA5LjAgKi9cbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG59XG5cbmJvZHkge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICMxOTE5MTk7XG4gIG1hcmdpbjogMnB4O1xuICBib3JkZXItcmFkaXVzOiAzMCU7XG4gIGJvcmRlcjogI2EyYTJhMiBzb2xpZCAwLjdweDtcbiAgY29sb3I6ICNhMmEyYTI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMHB4O1xuICBwYWRkaW5nLXRvcDogMTFweDtcbn1cblxuLmJ0biBpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICB0cmFuc2l0aW9uOiAwLjJzIGxpbmVhcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYnRuOmhvdmVyIGkge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gIGNvbG9yOiAjMTkxOTE5O1xufVxuXG4uYnRuOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMjAlO1xuICBoZWlnaHQ6IDEyMCU7XG4gIGJhY2tncm91bmQ6ICM5MTkxOTE7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgbGVmdDogLTExMCU7XG4gIHRvcDogOTAlO1xufVxuXG4uYnRuOmhvdmVyOjpiZWZvcmUge1xuICBhbmltYXRpb246IGFhYSAwLjlzIDE7XG4gIHRvcDogLTEwJTtcbiAgbGVmdDogLTEwJTtcbn1cblxuQGtleWZyYW1lcyBhYWEge1xuICAwJSB7XG4gICAgbGVmdDogLTExMCU7XG4gICAgdG9wOiA5MCU7XG4gIH1cbiAgNTAlIHtcbiAgICBsZWZ0OiAxMCU7XG4gICAgdG9wOiAtMzAlO1xuICB9XG4gIDEwMCUge1xuICAgIHRvcDogLTEwJTtcbiAgICBsZWZ0OiAtMTAlO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/modules/landing/components/footer/footer.component.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/landing/components/footer/footer.component.ts ***!
  \*******************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() {
        this.title = 'gotemp';
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'footer-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/landing/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/modules/landing/components/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/modules/landing/components/general-info/general-info.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/modules/landing/components/general-info/general-info.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content-center {\n  background-color: rgba(0, 0, 0, 0.753);\n  display: block;\n}\n\np {\n  font-family: \"CustomFont\" !important;\n  font-size: 19.2px;\n  font-style: normal;\n  font-weight: 400;\n  -webkit-font-smoothing: antialiased;\n}\n\n.title, .title--center {\n  border-radius: 4px;\n  color: #FFFFFF;\n  text-align: justify;\n  text-transform: uppercase;\n}\n\n.title--center {\n  text-align: center;\n}\n\nh1 {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n}\n\n.block-border {\n  background: none;\n  border: 1px solid #FFFFFF;\n  color: #FFFFFF;\n  text-transform: none;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2xhbmRpbmcvY29tcG9uZW50cy9nZW5lcmFsLWluZm8vRDpcXEFuZ3VsYXJcXE15VGVzdFByb2plY3RzXFxjdi9zcmNcXG1vZHVsZXNcXGxhbmRpbmdcXGNvbXBvbmVudHNcXGdlbmVyYWwtaW5mb1xcZ2VuZXJhbC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL21vZHVsZXMvbGFuZGluZy9jb21wb25lbnRzL2dlbmVyYWwtaW5mby9nZW5lcmFsLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQ0FBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNFSjs7QURBSTtFQUVJLGtCQUFBO0FDQ1I7O0FER0E7RUFDSSwyQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1Q0FBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvbW9kdWxlcy9sYW5kaW5nL2NvbXBvbmVudHMvZ2VuZXJhbC1pbmZvL2dlbmVyYWwtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWNlbnRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NTMpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBmb250LWZhbWlseTogXCJDdXN0b21Gb250XCIgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZToxOS4ycHg7XHJcbiAgICBmb250LXN0eWxlOm5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7XHJcbn1cclxuLnRpdGxlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgXHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgXHJcbiAgICAmLS1jZW50ZXIge1xyXG4gICAgICAgIEBleHRlbmQgLnRpdGxlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuaDEge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4uYmxvY2stYm9yZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkZGRkZGO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuIiwiLmNvbnRlbnQtY2VudGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1Myk7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6IFwiQ3VzdG9tRm9udFwiICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTkuMnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG4udGl0bGUsIC50aXRsZS0tY2VudGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi50aXRsZS0tY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmJsb2NrLWJvcmRlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRkZGRkY7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/modules/landing/components/general-info/general-info.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/modules/landing/components/general-info/general-info.component.ts ***!
  \*******************************************************************************/
/*! exports provided: GeneralInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralInfoComponent", function() { return GeneralInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GeneralInfoComponent = class GeneralInfoComponent {
    constructor() {
        this.image = './assets/img/general2.jpg';
    }
};
GeneralInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'general-info-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./general-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/landing/components/general-info/general-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./general-info.component.scss */ "./src/modules/landing/components/general-info/general-info.component.scss")).default]
    })
], GeneralInfoComponent);



/***/ }),

/***/ "./src/modules/landing/components/header/header.component.scss":
/*!*********************************************************************!*\
  !*** ./src/modules/landing/components/header/header.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .navbar-brand {\n  float: none;\n  font-size: 20px;\n  background: transparent;\n}\n:host .nav-link {\n  cursor: pointer;\n  font-size: 1.2em;\n}\n.navbar {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2xhbmRpbmcvY29tcG9uZW50cy9oZWFkZXIvRDpcXEFuZ3VsYXJcXE15VGVzdFByb2plY3RzXFxjdi9zcmNcXG1vZHVsZXNcXGxhbmRpbmdcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL21vZHVsZXMvbGFuZGluZy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDQU47QURHSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0ROO0FESUE7RUFDRSw0Q0FBQTtBQ0RGIiwiZmlsZSI6InNyYy9tb2R1bGVzL2xhbmRpbmcvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgLm5hdmJhci1icmFuZCB7XHJcbiAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubmF2LWxpbmsge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICB9XHJcbiAgfVxyXG4ubmF2YmFyIHtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwKTtcclxufSIsIjpob3N0IC5uYXZiYXItYnJhbmQge1xuICBmbG9hdDogbm9uZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0IC5uYXYtbGluayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLm5hdmJhciB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDApO1xufSJdfQ== */");

/***/ }),

/***/ "./src/modules/landing/components/header/header.component.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/landing/components/header/header.component.ts ***!
  \*******************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let HeaderComponent = class HeaderComponent {
    constructor(platformId) {
        this.platformId = platformId;
        this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId);
    }
    ngOnInit() {
        if (this.isBrowser) {
            if ($('.headroom')[0]) {
                const headroom = new Headroom(document.querySelector('#navbar-main'), {
                    offset: 150,
                    tolerance: 0
                });
                headroom.init();
            }
        }
    }
};
HeaderComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"],] }] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'header-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/landing/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/modules/landing/components/header/header.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]))
], HeaderComponent);



/***/ }),

/***/ "./src/modules/landing/components/landing.component.scss":
/*!***************************************************************!*\
  !*** ./src/modules/landing/components/landing.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9sYW5kaW5nL2NvbXBvbmVudHMvbGFuZGluZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/modules/landing/components/landing.component.ts":
/*!*************************************************************!*\
  !*** ./src/modules/landing/components/landing.component.ts ***!
  \*************************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LandingComponent = class LandingComponent {
    constructor() {
        this.title = 'gotemp';
    }
};
LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'landing-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/landing/components/landing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing.component.scss */ "./src/modules/landing/components/landing.component.scss")).default]
    })
], LandingComponent);



/***/ }),

/***/ "./src/modules/landing/components/portfolio/portfolio.component.scss":
/*!***************************************************************************!*\
  !*** ./src/modules/landing/components/portfolio/portfolio.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".portfolio {\n  background-color: #191919;\n  overflow: hidden;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  color: #a2a2a2;\n}\n.portfolio a {\n  text-decoration: none;\n}\na {\n  color: inherit;\n  /* blue colors for links too */\n  text-decoration: inherit;\n  /* no underline */\n}\n.portfolioItem {\n  border-radius: 20px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n}\n.portfolioItem:hover {\n  background-color: rgba(255, 255, 255, 0.068);\n}\nimg {\n  width: auto;\n  max-height: 65px;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\np {\n  font-family: \"CustomFont\" !important;\n  font-size: 19.2px;\n  font-style: normal;\n  font-weight: 400;\n  -webkit-font-smoothing: antialiased;\n  margin: 0;\n}\n.title, .title--center {\n  border-radius: 4px;\n  color: #FFFFFF;\n  text-align: justify;\n  text-transform: uppercase;\n}\n.title--center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2xhbmRpbmcvY29tcG9uZW50cy9wb3J0Zm9saW8vRDpcXEFuZ3VsYXJcXE15VGVzdFByb2plY3RzXFxjdi9zcmNcXG1vZHVsZXNcXGxhbmRpbmdcXGNvbXBvbmVudHNcXHBvcnRmb2xpb1xccG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic3JjL21vZHVsZXMvbGFuZGluZy9jb21wb25lbnRzL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSxjQUFBO0FDQ0o7QURBSTtFQUNJLHFCQUFBO0FDRVI7QURDQTtFQUNJLGNBQUE7RUFBZ0IsOEJBQUE7RUFDaEIsd0JBQUE7RUFBMEIsaUJBQUE7QUNJOUI7QUREQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7QUNJSjtBREhJO0VBQ0EsNENBQUE7QUNLSjtBREFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0dKO0FEREE7RUFDSSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0EsU0FBQTtBQ0lKO0FERkE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDS0o7QURISTtFQUVJLGtCQUFBO0FDSVIiLCJmaWxlIjoic3JjL21vZHVsZXMvbGFuZGluZy9jb21wb25lbnRzL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9ydGZvbGlvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE5MTk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGNvbG9yOiAjYTJhMmEyO1xyXG4gICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG59XHJcbmEge1xyXG4gICAgY29sb3I6IGluaGVyaXQ7IC8qIGJsdWUgY29sb3JzIGZvciBsaW5rcyB0b28gKi9cclxuICAgIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDsgLyogbm8gdW5kZXJsaW5lICovXHJcbiAgfVxyXG5cclxuLnBvcnRmb2xpb0l0ZW17XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgJjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNjgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOmF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA2NXB4O1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6MTtcclxufVxyXG5we1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ3VzdG9tRm9udFwiICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6MTkuMnB4O1xyXG4gICAgZm9udC1zdHlsZTpub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi50aXRsZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7IFxyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIFxyXG4gICAgJi0tY2VudGVyIHtcclxuICAgICAgICBAZXh0ZW5kIC50aXRsZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn0iLCIucG9ydGZvbGlvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgY29sb3I6ICNhMmEyYTI7XG59XG4ucG9ydGZvbGlvIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgLyogYmx1ZSBjb2xvcnMgZm9yIGxpbmtzIHRvbyAqL1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gIC8qIG5vIHVuZGVybGluZSAqL1xufVxuXG4ucG9ydGZvbGlvSXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5wb3J0Zm9saW9JdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2OCk7XG59XG5cbmltZyB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA2NXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBcIkN1c3RvbUZvbnRcIiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE5LjJweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgbWFyZ2luOiAwO1xufVxuXG4udGl0bGUsIC50aXRsZS0tY2VudGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi50aXRsZS0tY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/modules/landing/components/portfolio/portfolio.component.ts":
/*!*************************************************************************!*\
  !*** ./src/modules/landing/components/portfolio/portfolio.component.ts ***!
  \*************************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PortfolioComponent = class PortfolioComponent {
    constructor() {
        this.portfolioItems = [
            {
                name: 'GoTemplars', link: 'https://gzngzn.github.io/go-temp/', desc: 'A platform for managing a mobile travel app, with the ability to edit cities, routes, and sights.',
                img: './assets/img/gotemp.PNG', tech: ['fab fa-angular', 'fab fa-js', 'fas fa-fire']
            },
            {
                name: 'Weather App', link: 'https://gzngzn.github.io/weatherApp/', desc: 'Rain is good!',
                img: '', tech: ['fab fa-angular', 'fab fa-js']
            },
        ];
    }
    ngOnInit() {
        if (window.screen.width <= 768) { // 768px portrait
            this.mobile = true;
        }
    }
};
PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'portfolio-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./portfolio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/landing/components/portfolio/portfolio.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./portfolio.component.scss */ "./src/modules/landing/components/portfolio/portfolio.component.scss")).default]
    })
], PortfolioComponent);



/***/ }),

/***/ "./src/modules/landing/components/tech-stack/tech-stack.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/modules/landing/components/tech-stack/tech-stack.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\n  width: 100%;\n  min-height: 350px;\n  background: #191919;\n  position: relative;\n  opacity: 100%;\n}\n\n.tech-skill {\n  height: 200px;\n  width: 200px;\n}\n\nh6 {\n  font-size: 2em;\n  color: #a2a2a2;\n  text-transform: uppercase;\n}\n\nh5 {\n  font-size: 3.2em;\n  color: #a2a2a2;\n}\n\n.zoom {\n  -webkit-transition: -webkit-transform 1s;\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s;\n}\n\n.zoom:hover {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2xhbmRpbmcvY29tcG9uZW50cy90ZWNoLXN0YWNrL0Q6XFxBbmd1bGFyXFxNeVRlc3RQcm9qZWN0c1xcY3Yvc3JjXFxtb2R1bGVzXFxsYW5kaW5nXFxjb21wb25lbnRzXFx0ZWNoLXN0YWNrXFx0ZWNoLXN0YWNrLmNvbXBvbmVudC5zY3NzIiwic3JjL21vZHVsZXMvbGFuZGluZy9jb21wb25lbnRzL3RlY2gtc3RhY2svdGVjaC1zdGFjay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSx3Q0FBQTtFQUFBLGdDQUFBO0VBQUEsd0JBQUE7RUFBQSw4Q0FBQTtBQ0NKOztBREVFO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9tb2R1bGVzL2xhbmRpbmcvY29tcG9uZW50cy90ZWNoLXN0YWNrL3RlY2gtc3RhY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMzUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTkxOTE5O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3BhY2l0eTogMTAwJTtcclxufVxyXG5cclxuLnRlY2gtc2tpbGwge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuaDYge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBjb2xvcjogI2EyYTJhMjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbmg1IHtcclxuICAgIGZvbnQtc2l6ZTogMy4yZW07XHJcbiAgICBjb2xvcjogI2EyYTJhMjtcclxufVxyXG5cclxuLnpvb20ge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xyXG4gIH1cclxuICBcclxuICAuem9vbTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gIH0iLCJzZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xuICBiYWNrZ3JvdW5kOiAjMTkxOTE5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG9wYWNpdHk6IDEwMCU7XG59XG5cbi50ZWNoLXNraWxsIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG5oNiB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBjb2xvcjogI2EyYTJhMjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuaDUge1xuICBmb250LXNpemU6IDMuMmVtO1xuICBjb2xvcjogI2EyYTJhMjtcbn1cblxuLnpvb20ge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG59XG5cbi56b29tOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/modules/landing/components/tech-stack/tech-stack.component.ts":
/*!***************************************************************************!*\
  !*** ./src/modules/landing/components/tech-stack/tech-stack.component.ts ***!
  \***************************************************************************/
/*! exports provided: TechStackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechStackComponent", function() { return TechStackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TechStackComponent = class TechStackComponent {
    constructor() {
        this.howToSteps = [
            {
                icon: './assets/img/angular-logo-black.png',
                title: 'Angular2+',
                active: false
            },
            {
                icon: './assets/img/badge-black.png',
                title: 'ngrx',
                active: false
            },
            {
                icon: './assets/img/rxjs-1-black.png',
                title: 'rxjs',
                active: false
            },
            {
                icon: './assets/img/nodejs-icon-black.png',
                title: 'nodejs',
                active: false
            }
        ];
    }
    setActive() {
    }
};
TechStackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tech-stack-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tech-stack.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/landing/components/tech-stack/tech-stack.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tech-stack.component.scss */ "./src/modules/landing/components/tech-stack/tech-stack.component.scss")).default]
    })
], TechStackComponent);



/***/ }),

/***/ "./src/modules/landing/landing-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/modules/landing/landing-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: landingRoutes, LandingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "landingRoutes", function() { return landingRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingRoutingModule", function() { return LandingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/landing.component */ "./src/modules/landing/components/landing.component.ts");




const routerOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
};
const landingRoutes = [
    {
        path: '',
        component: _components_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"]
    },
];
let LandingRoutingModule = class LandingRoutingModule {
};
LandingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(landingRoutes, routerOptions)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LandingRoutingModule);



/***/ }),

/***/ "./src/modules/landing/landing.module.ts":
/*!***********************************************!*\
  !*** ./src/modules/landing/landing.module.ts ***!
  \***********************************************/
/*! exports provided: LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/card/card.component */ "./src/modules/landing/components/card/card.component.ts");
/* harmony import */ var _components_exp_exp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/exp/exp.component */ "./src/modules/landing/components/exp/exp.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/modules/landing/components/footer/footer.component.ts");
/* harmony import */ var _components_general_info_general_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/general-info/general-info.component */ "./src/modules/landing/components/general-info/general-info.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/modules/landing/components/header/header.component.ts");
/* harmony import */ var _components_landing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/landing.component */ "./src/modules/landing/components/landing.component.ts");
/* harmony import */ var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/portfolio/portfolio.component */ "./src/modules/landing/components/portfolio/portfolio.component.ts");
/* harmony import */ var _components_tech_stack_tech_stack_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/tech-stack/tech-stack.component */ "./src/modules/landing/components/tech-stack/tech-stack.component.ts");
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./landing-routing.module */ "./src/modules/landing/landing-routing.module.ts");













let LandingModule = class LandingModule {
};
LandingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _components_general_info_general_info_component__WEBPACK_IMPORTED_MODULE_7__["GeneralInfoComponent"],
            _components_tech_stack_tech_stack_component__WEBPACK_IMPORTED_MODULE_11__["TechStackComponent"],
            _components_exp_exp_component__WEBPACK_IMPORTED_MODULE_5__["ExpComponent"],
            _components_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"],
            _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_10__["PortfolioComponent"]
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _landing_routing_module__WEBPACK_IMPORTED_MODULE_12__["LandingRoutingModule"]
        ],
        providers: [],
        bootstrap: [_components_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"]]
    })
], LandingModule);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular\MyTestProjects\cv\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map