(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ././guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _modules_sign_in_sign_in_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/sign-in/sign-in-routing.module */ "./src/modules/sign-in/sign-in-routing.module.ts");
/* harmony import */ var src_modules_dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/modules/dashboard/dashboard-routing.module */ "./src/modules/dashboard/dashboard-routing.module.ts");






var routes = [
    { path: '', children: src_modules_dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["dashboardRoutes"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'signin', children: _modules_sign_in_sign_in_routing_module__WEBPACK_IMPORTED_MODULE_4__["signInRoutes"] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/app.component */ "./src/app/components/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var src_modules_sign_in_sign_in_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/modules/sign-in/sign-in.module */ "./src/modules/sign-in/sign-in.module.ts");
/* harmony import */ var src_modules_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/modules/dashboard/dashboard.module */ "./src/modules/dashboard/dashboard.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var src_modules_dashboard_state_management__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/modules/dashboard/state-management */ "./src/modules/dashboard/state-management/index.ts");
/* harmony import */ var src_modules_dashboard_state_management_states_cities__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/modules/dashboard/state-management/states/cities */ "./src/modules/dashboard/state-management/states/cities/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_modules_dashboard_state_management_states_route__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/modules/dashboard/state-management/states/route */ "./src/modules/dashboard/state-management/states/route/index.ts");
/* harmony import */ var src_modules_dashboard_state_management_states_sight__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/modules/dashboard/state-management/states/sight */ "./src/modules/dashboard/state-management/states/sight/index.ts");
/* harmony import */ var src_modules_dashboard_state_management_states_audios_audios_effects__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/modules/dashboard/state-management/states/audios/audios.effects */ "./src/modules/dashboard/state-management/states/audios/audios.effects.ts");
/* harmony import */ var src_modules_dashboard_state_management_states_styles__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/modules/dashboard/state-management/states/styles */ "./src/modules/dashboard/state-management/states/styles/index.ts");
/* harmony import */ var src_modules_dashboard_state_management_states_accesscodes__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/modules/dashboard/state-management/states/accesscodes */ "./src/modules/dashboard/state-management/states/accesscodes/index.ts");




//import { MaterialModule } from './material.module';























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorageModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabaseModule"],
                //AngularFireDatabase,
                src_modules_sign_in_sign_in_module__WEBPACK_IMPORTED_MODULE_14__["SignInModule"],
                src_modules_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_15__["DashboardModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreModule"].forRoot(src_modules_dashboard_state_management__WEBPACK_IMPORTED_MODULE_18__["templarReducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["EffectsModule"].forRoot([src_modules_dashboard_state_management_states_cities__WEBPACK_IMPORTED_MODULE_19__["CitiesEffects"], src_modules_dashboard_state_management_states_route__WEBPACK_IMPORTED_MODULE_22__["RoutesEffects"], src_modules_dashboard_state_management_states_sight__WEBPACK_IMPORTED_MODULE_23__["SightsEffects"], src_modules_dashboard_state_management_states_audios_audios_effects__WEBPACK_IMPORTED_MODULE_24__["AudiosEffects"], src_modules_dashboard_state_management_states_styles__WEBPACK_IMPORTED_MODULE_25__["StylesEffects"], src_modules_dashboard_state_management_states_accesscodes__WEBPACK_IMPORTED_MODULE_26__["AccesscodesEffects"]]),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"].forRoot()
            ],
            providers: [_services_backend_service__WEBPACK_IMPORTED_MODULE_12__["BackendService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
            bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app.component.html":
/*!***********************************************!*\
  !*** ./src/app/components/app.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/app.component.scss":
/*!***********************************************!*\
  !*** ./src/app/components/app.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudC5zY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'gotemp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/components/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/components/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_modules_sign_in_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/modules/sign-in/services */ "./src/modules/sign-in/services/index.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(signInService, router) {
        this.signInService = signInService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var token = this.signInService.getToken();
        var loggedIn = token && token.expiresIn.getTime() > new Date().getTime();
        if (!loggedIn) {
            this.router.navigate(['/signin']);
        }
        return loggedIn;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_modules_sign_in_services__WEBPACK_IMPORTED_MODULE_3__["SignInService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/backend.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/backend.service.ts ***!
  \*********************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BackendService = /** @class */ (function () {
    function BackendService() {
    }
    BackendService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BackendService);
    return BackendService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// export const environment = {
//   production: false,
//   firebase: {
//     apiKey: "AIzaSyAMpvu_qhBP6WdFQFcdDJ6lEDb3Uhtgryk",
//     authDomain: "gotemp-9edd0.firebaseapp.com",
//     databaseURL: "https://gotemp-9edd0.firebaseio.com",
//     projectId: "gotemp-9edd0",
//     storageBucket: "gotemp-9edd0.appspot.com",
//     messagingSenderId: "653864285888"
//   },
//   database: 'firebase' 
// };
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBwxsPC7k6a-fAjlbSESmnEZtKKh09TNvY",
        authDomain: "go-teplates.firebaseapp.com",
        databaseURL: "https://go-teplates.firebaseio.com",
        projectId: "go-teplates",
        storageBucket: "go-teplates.appspot.com",
        messagingSenderId: "316589838541"
    },
    database: 'firebase'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/modules/dashboard/components/accesscodes-info/accesscodes-info.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/modules/dashboard/components/accesscodes-info/accesscodes-info.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-content [title]=\"editAccesscodes ? 'Update Accesscodes' : 'Create Accesscodes'\">\n  <form class=\"form\" novalidate=\"\" [formGroup]=\"updateAccesscodesForm\" (ngSubmit)=\"saveAccesscodes()\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label>code</label>\n          <input class=\"form-control\" type=\"text\" formControlName=\"code\" placeholder=\"code\" />\n        </div>\n      </div>\n      <div class=\"col-md-4 align-self-center\">\n        <label class=\"custom-file-upload btn btn-primary btn-round btn-simple\" (click)=\"generateCode()\">\n          Generate Code\n        </label>\n      </div>\n    </div>\n    <br>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label>Hours</label>\n          <input class=\"form-control\" type=\"number\" formControlName=\"hours\" placeholder=\"hours\" />\n        </div>\n      </div>\n    </div>\n    <br>\n    <div class=\"row\" *ngIf=\"editAccesscodes\">\n      <div class=\"col-md-4\">\n          <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\" formControlName=\"isActivated\" placeholder=\"isActivated\">\n                  isActivated\n                  <span class=\"form-check-sign\"></span>\n              </label>\n          </div>\n      </div>\n    </div>\n    <br>\n    <div class=\"row justify-content-end\">\n      <div class=\"col-sm-12 col-actions\">\n        <button class=\"btn btn-primary btn-round btn-simple\" (click)=\"goBack()\">\n          Cancel\n          <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n        </button>\n        <button class=\"btn btn-primary btn-round\" type=\"submit\" [disabled]=\"updateAccesscodesForm.invalid\">\n          {{editAccesscodes ? 'Update Accesscodes' : 'Create Accesscodes'}}\n          <i class=\"now-ui-icons ui-1_check\"></i>\n        </button>\n      </div>\n    </div>\n  </form>\n</app-page-content>"

/***/ }),

/***/ "./src/modules/dashboard/components/accesscodes-info/accesscodes-info.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/modules/dashboard/components/accesscodes-info/accesscodes-info.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9hY2Nlc3Njb2Rlcy1pbmZvL2FjY2Vzc2NvZGVzLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/modules/dashboard/components/accesscodes-info/accesscodes-info.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/modules/dashboard/components/accesscodes-info/accesscodes-info.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AccesscodesInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccesscodesInfoComponent", function() { return AccesscodesInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var src_modules_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/modules/shared */ "./src/modules/shared/index.ts");
/* harmony import */ var _state_management__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../state-management */ "./src/modules/dashboard/state-management/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _state_management_states_accesscodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../state-management/states/accesscodes */ "./src/modules/dashboard/state-management/states/accesscodes/index.ts");










var AccesscodesInfoComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AccesscodesInfoComponent, _super);
    function AccesscodesInfoComponent(store, router, formBuilder, activateRoute) {
        var _this = _super.call(this) || this;
        _this.store = store;
        _this.router = router;
        _this.formBuilder = formBuilder;
        _this.activateRoute = activateRoute;
        _this.accesscodes$ = _this.store.select(_state_management__WEBPACK_IMPORTED_MODULE_5__["accesscodesSelectors"].getActiveAccesscodSelector).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(_this.destroyed$));
        _this.updateAccesscodesForm = _this.formBuilder.group({
            code: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)
                ]],
            hours: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required
                ]],
            isActivated: ['', [
                //Validators.required
                ]],
        });
        _this.accesscodes$.subscribe(function (accesscodes) {
            accesscodes ? _this.updateAccesscodesForm.patchValue(accesscodes) : _this.updateAccesscodesForm.reset();
        });
        return _this;
    }
    AccesscodesInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accesscodes$.subscribe(function (data) { return _this.editAccesscodes = !!data; });
    };
    AccesscodesInfoComponent.prototype.ngOnDestroy = function () {
        this.store.dispatch(new _state_management_states_accesscodes__WEBPACK_IMPORTED_MODULE_9__["AccesscodesActions"].LoadActiveAccesscodesDataAction(null));
    };
    AccesscodesInfoComponent.prototype.saveAccesscodes = function () {
        var _this = this;
        if (this.editAccesscodes) {
            this.accesscodes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(function (data) {
                _this.store.dispatch(new _state_management_states_accesscodes__WEBPACK_IMPORTED_MODULE_9__["AccesscodesActions"].UpdateActiveAccesscodesDataAction({ accesscodesData: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data, _this.updateAccesscodesForm.value), id: _this.activateRoute.snapshot.paramMap.get('id') }));
            });
        }
        else {
            this.updateAccesscodesForm.get('isActivated').setValue(false);
            this.store.dispatch(new _state_management_states_accesscodes__WEBPACK_IMPORTED_MODULE_9__["AccesscodesActions"].AddAccesscodesDataAction(this.updateAccesscodesForm.value));
            this.goBack();
        }
    };
    AccesscodesInfoComponent.prototype.goBack = function () {
        this.router.navigate(['/accesscodes']);
    };
    AccesscodesInfoComponent.prototype.generateCode = function () {
        var generatedCode = '';
        var variable = 'q1w2e3r4t5y6u7i8o9p0a9q8s7d5f5g43h3j2k2lz3x4c5v6b7n8m';
        for (var i = 0; i < 10; i++) {
            generatedCode += variable.charAt(Math.floor(Math.random() * variable.length));
            Math.random() > 0.5 ? generatedCode = generatedCode.slice(0, i) + generatedCode[i].toUpperCase() : null;
        }
        this.updateAccesscodesForm.get('code').setValue(generatedCode);
    };
    AccesscodesInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accesscodes-info',
            template: __webpack_require__(/*! ./accesscodes-info.component.html */ "./src/modules/dashboard/components/accesscodes-info/accesscodes-info.component.html"),
            styles: [__webpack_require__(/*! ./accesscodes-info.component.scss */ "./src/modules/dashboard/components/accesscodes-info/accesscodes-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AccesscodesInfoComponent);
    return AccesscodesInfoComponent;
}(src_modules_shared__WEBPACK_IMPORTED_MODULE_4__["AbstractComponent"]));



/***/ }),

/***/ "./src/modules/dashboard/components/accesscodes/accesscodes.component.html":
/*!*********************************************************************************!*\
  !*** ./src/modules/dashboard/components/accesscodes/accesscodes.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-content [title]=\"'Accesscodes'\">\n  <div>\n    <button type=\"button\" class=\"btn btn-primary btn-round btn-simple\" (click)=\"onAddItem()\">\n      Add Accesscodes\n      </button>\n  </div>\n  <div class=\"table-responsive\">\n    <table class=\"table\">\n      <thead class=\" text-primary\" *ngIf=\"(accesscodes$ | async)?.length > 0\">\n        <th>#</th>\n        <th>Code</th>\n        <th>Hours</th>\n        <th>isActivated</th>\n        <th class=\"text-right\">Actions</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of accesscodes$ | async; let i = index\">\n          <td>{{i+1}}</td>\n          <td>{{item.code}}</td>\n          <td>{{item.hours}}</td>\n          <td *ngIf=\"item.isActivated\"><i class=\"now-ui-icons sport_user-run\"></i>_<i\n              class=\"now-ui-icons travel_istanbul\"></i></td>\n          <td *ngIf=\"!item.isActivated\"></td>\n          <td class=\"text-right actions-cell\">\n            <button type=\"button\" rel=\"tooltip\" title=\"\"\n              class=\"btn btn-info btn-round btn-icon btn-icon-mini btn-neutral\" data-original-title=\"Edit\"\n              (click)=\"onEditItem(item)\" onclick=\"this.blur();\">\n              <i class=\"now-ui-icons now-ui-icons ui-2_settings-90\"></i>\n            </button>\n            <button type=\"button\" rel=\"tooltip\" title=\"\"\n              class=\"btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral\" data-original-title=\"Remove\"\n              (click)=\"onDeleteItem(item)\" onclick=\"this.blur();\">\n              <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</app-page-content>"

/***/ }),

/***/ "./src/modules/dashboard/components/accesscodes/accesscodes.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/modules/dashboard/components/accesscodes/accesscodes.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9hY2Nlc3Njb2Rlcy9hY2Nlc3Njb2Rlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/modules/dashboard/components/accesscodes/accesscodes.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/modules/dashboard/components/accesscodes/accesscodes.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AccesscodesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccesscodesComponent", function() { return AccesscodesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_management__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state-management */ "./src/modules/dashboard/state-management/index.ts");
/* harmony import */ var src_modules_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/modules/shared */ "./src/modules/shared/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _state_management_states_accesscodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../state-management/states/accesscodes */ "./src/modules/dashboard/state-management/states/accesscodes/index.ts");








var AccesscodesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AccesscodesComponent, _super);
    function AccesscodesComponent(router, store) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.store = store;
        _this.accesscodes$ = _this.store.select(_state_management__WEBPACK_IMPORTED_MODULE_4__["accesscodesSelectors"].getAccesscodesSelector).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this.destroyed$));
        return _this;
    }
    AccesscodesComponent.prototype.onAddItem = function () {
        this.router.navigate(['addaccesscodes']);
    };
    AccesscodesComponent.prototype.onEditItem = function (item) {
        this.router.navigate(["accesscodes-info/" + item.id]);
    };
    AccesscodesComponent.prototype.onDeleteItem = function (item) {
        this.store.dispatch(new _state_management_states_accesscodes__WEBPACK_IMPORTED_MODULE_7__["AccesscodesActions"].DeleteAccesscodesDataAction(item.id));
    };
    AccesscodesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accesscodes',
            template: __webpack_require__(/*! ./accesscodes.component.html */ "./src/modules/dashboard/components/accesscodes/accesscodes.component.html"),
            styles: [__webpack_require__(/*! ./accesscodes.component.scss */ "./src/modules/dashboard/components/accesscodes/accesscodes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], AccesscodesComponent);
    return AccesscodesComponent;
}(src_modules_shared__WEBPACK_IMPORTED_MODULE_5__["AbstractComponent"]));



/***/ }),

/***/ "./src/modules/dashboard/components/city-info/city-info.component.html":
/*!*****************************************************************************!*\
  !*** ./src/modules/dashboard/components/city-info/city-info.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-content [title]=\"editCity ? 'Update City' : 'Create City'\">\r\n  <form class=\"form\" novalidate=\"\" [formGroup]=\"updateCityForm\" (ngSubmit)=\"saveCity()\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (en)*</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_en\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (es)</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_es\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (pt)</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_pt\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (de)</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_de\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (fr)</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_fr\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (it)</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_it\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (en)*</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_en\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (es)</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_es\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (pt)</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_pt\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (de)</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_de\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (fr)</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_fr\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (it)</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_it\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>Position</label>\r\n          <input class=\"form-control\" type=\"number\" formControlName=\"position\" placeholder=\"Position\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <h6>Background Image:</h6>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>Background Image Url</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"background_url\" placeholder=\"Background Image Url\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 align-self-center\">\r\n        <label for=\"file-upload\" class=\"custom-file-upload btn btn-primary btn-round btn-simple\">\r\n          Upload image\r\n          <i *ngIf=\"!uploading\" class=\"now-ui-icons arrows-1_cloud-upload-94\"></i>\r\n          <i *ngIf=\"uploading\" class=\"now-ui-icons loader_refresh spin\"></i>\r\n        </label>\r\n        <input class=\"file-input\" type=\"file\" id=\"file-upload\" accept=\"image/*\"\r\n          (change)=\"startUpload($event.target.files)\">\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div *ngIf=\"updateCityForm.value?.background_url as url\">\r\n      <img class=\"image-preview\" [src]=\"url\">\r\n      <br>\r\n    </div>\r\n    <br>\r\n    <h6>Location:</h6>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\">\r\n          <label>Select Location</label>\r\n          <input type=\"text\" class=\"form-control location-input\" placeholder=\"Select Location\"\r\n            (focus)=\"onAddressFocus($event)\" (blur)=\"onAddressBlur($event)\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label>Lattitude</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"location_lat\" placeholder=\"Lattitude\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label>Longitude</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"location_lng\" placeholder=\"Longitude\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"map\" class=\"map\" [ngStyle]=\"{'z-index' : '1'}\"></div>\r\n    <br>\r\n    <br>\r\n    <h6>Sights:</h6>\r\n    <app-data-table [items$]=\"currentSights$\" [addItems$]=\"sights$\" [itemName]=\"'Sight'\" [form]=\"updateCityForm\"\r\n      [formFieldName]=\"'sight_list'\" [allowAdd]=\"true\"></app-data-table>\r\n    <br>\r\n    <div class=\"row justify-content-end\">\r\n      <div class=\"col-sm-12 col-actions\">\r\n        <button class=\"btn btn-primary btn-round btn-simple\" (click)=\"goBack()\">\r\n          Cancel\r\n          <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n        </button>\r\n        <button class=\"btn btn-primary btn-round\" type=\"submit\" [disabled]=\"updateCityForm.invalid\">\r\n          {{editCity ? 'Update City' : 'Create City'}}\r\n          <i class=\"now-ui-icons ui-1_check\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</app-page-content>"

/***/ }),

/***/ "./src/modules/dashboard/components/city-info/city-info.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/modules/dashboard/components/city-info/city-info.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  width: 100%;\n  height: 400px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2Rhc2hib2FyZC9jb21wb25lbnRzL2NpdHktaW5mby9EOlxcQW5ndWxhclxcZ29UZW1wL3NyY1xcbW9kdWxlc1xcZGFzaGJvYXJkXFxjb21wb25lbnRzXFxjaXR5LWluZm9cXGNpdHktaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL21vZHVsZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvY2l0eS1pbmZvL2NpdHktaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/modules/dashboard/components/city-info/city-info.component.ts":
/*!***************************************************************************!*\
  !*** ./src/modules/dashboard/components/city-info/city-info.component.ts ***!
  \***************************************************************************/
/*! exports provided: CityInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityInfoComponent", function() { return CityInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_modules_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/modules/shared */ "./src/modules/shared/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services */ "./src/modules/dashboard/services/index.ts");
/* harmony import */ var _state_management__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../state-management */ "./src/modules/dashboard/state-management/index.ts");
/* harmony import */ var _state_management_states_cities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../state-management/states/cities */ "./src/modules/dashboard/state-management/states/cities/index.ts");











var CityInfoComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CityInfoComponent, _super);
    function CityInfoComponent(store, router, formBuilder, activateRoute, mapsService, uploadService, renderer) {
        var _this = _super.call(this) || this;
        _this.store = store;
        _this.router = router;
        _this.formBuilder = formBuilder;
        _this.activateRoute = activateRoute;
        _this.mapsService = mapsService;
        _this.uploadService = uploadService;
        _this.renderer = renderer;
        _this.city$ = _this.store.select(_state_management__WEBPACK_IMPORTED_MODULE_9__["citiesSelectors"].getActiveCitySelector).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this.destroyed$));
        _this.sights$ = _this.store.select(_state_management__WEBPACK_IMPORTED_MODULE_9__["sightSelectors"].getSightsSelector).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this.destroyed$));
        //en, es, pt, de, fr, it
        _this.updateCityForm = _this.formBuilder.group({
            name: _this.formBuilder.group({
                _en: ['', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                    ]],
                _es: ['', [
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                    ]],
                _pt: ['', [
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                    ]],
                _de: ['', [
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                    ]],
                _fr: ['', [
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                    ]],
                _it: ['', [
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                    ]]
            }),
            position: ['', [
                //Validators.required
                ]],
            desc: _this.formBuilder.group({
                _en: ['', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                    ]],
                _es: ['', [
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                    ]],
                _pt: ['', [
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                    ]],
                _de: ['', [
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                    ]],
                _fr: ['', [
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                    ]],
                _it: ['', [
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                    ]]
            }),
            background_url: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ]],
            location_lat: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            location_lng: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            sight_list: []
        });
        _this.city$.subscribe(function (city) {
            city ? _this.updateCityForm.patchValue(city) : _this.updateCityForm.reset();
        });
        _this.updateCityForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this.destroyed$)).subscribe(function (value) {
            if (_this.marker) {
                if (value.location_lat !== _this.marker._latlng.lat || value.location_lng !== _this.marker._latlng.lng) {
                    _this.marker = _this.mapsService.setMarker(_this.map, _this.marker, value.location_lat, value.location_lng);
                }
            }
        });
        return _this;
    }
    Object.defineProperty(CityInfoComponent.prototype, "currentSights$", {
        get: function () {
            var _this = this;
            return this.sights$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (sights) {
                return sights ?
                    sights.filter(function (sight) {
                        return _this.updateCityForm.value && _this.updateCityForm.value.sight_list && _this.updateCityForm.value.sight_list.indexOf(sight.id) !== -1;
                    }) : [];
            }));
        },
        enumerable: true,
        configurable: true
    });
    CityInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.map = this.mapsService.createMap(this.updateCityForm.get('location_lat').value, this.updateCityForm.get('location_lng').value);
        this.map.on('click', function (e) {
            _this.marker = _this.mapsService.setMarker(_this.map, _this.marker, e.latlng.lat, e.latlng.lng);
            _this.updateCityForm.get('location_lat').setValue(e.latlng.lat, { emitEvent: false });
            _this.updateCityForm.get('location_lng').setValue(e.latlng.lng, { emitEvent: false });
        });
        this.city$.pipe().subscribe(function (city) {
            _this.editCity = !!city;
            if (city) {
                _this.marker = _this.mapsService.setMarker(_this.map, _this.marker, city.location_lat, city.location_lng);
            }
        });
    };
    CityInfoComponent.prototype.ngOnDestroy = function () {
        this.store.dispatch(new _state_management_states_cities__WEBPACK_IMPORTED_MODULE_10__["CitiesActions"].LoadActiveCityDataAction(null));
    };
    CityInfoComponent.prototype.saveCity = function () {
        var _this = this;
        this.updateCityForm.value.position === null || "" || 0 ? this.updateCityForm.get('position').setValue(500) : null;
        if (this.editCity) {
            this.city$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (city) {
                _this.store.dispatch(new _state_management_states_cities__WEBPACK_IMPORTED_MODULE_10__["CitiesActions"].UpdateActiveCityDataAction({ cityData: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, city, _this.updateCityForm.value), id: _this.activateRoute.snapshot.paramMap.get('id') }));
            });
        }
        else {
            this.store.dispatch(new _state_management_states_cities__WEBPACK_IMPORTED_MODULE_10__["CitiesActions"].AddCityDataAction(this.updateCityForm.value));
        }
        this.goBack();
    };
    CityInfoComponent.prototype.goBack = function () {
        this.router.navigate(['/city']);
    };
    CityInfoComponent.prototype.startUpload = function (event) {
        var _this = this;
        this.uploading = true;
        this.uploadService.uploadImage(event, 'cities/images').subscribe(function (file) {
            _this.updateCityForm.get('background_url').setValue(file.url);
            _this.uploading = false;
        });
    };
    CityInfoComponent.prototype.onAddressFocus = function (event) {
        this.renderer.addClass(event.target.parentElement.parentElement, 'input-group-focus');
    };
    CityInfoComponent.prototype.onAddressBlur = function (event) {
        this.renderer.removeClass(event.target.parentElement.parentElement, 'input-group-focus');
    };
    CityInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-city-info',
            template: __webpack_require__(/*! ./city-info.component.html */ "./src/modules/dashboard/components/city-info/city-info.component.html"),
            styles: [__webpack_require__(/*! ./city-info.component.scss */ "./src/modules/dashboard/components/city-info/city-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services__WEBPACK_IMPORTED_MODULE_8__["MapsService"],
            _services__WEBPACK_IMPORTED_MODULE_8__["UploadService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], CityInfoComponent);
    return CityInfoComponent;
}(src_modules_shared__WEBPACK_IMPORTED_MODULE_7__["AbstractComponent"]));



/***/ }),

/***/ "./src/modules/dashboard/components/city/city.component.html":
/*!*******************************************************************!*\
  !*** ./src/modules/dashboard/components/city/city.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-content [title]=\"'Cities'\">\n  <app-data-table [items$]=\"cities$\"\n                  [itemName]=\"'City'\"\n                  [allowEdit]=\"true\"\n                  [allowAdd]=\"true\"\n                  (addButtonClick)=\"onAddItem()\"\n                  (editItem)=\"onEditItem($event)\"\n                  (deleteItem)=\"onDeleteItem($event)\"\n  ></app-data-table>\n</app-page-content>\n"

/***/ }),

/***/ "./src/modules/dashboard/components/city/city.component.scss":
/*!*******************************************************************!*\
  !*** ./src/modules/dashboard/components/city/city.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9jaXR5L2NpdHkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/modules/dashboard/components/city/city.component.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/dashboard/components/city/city.component.ts ***!
  \*****************************************************************/
/*! exports provided: CityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityComponent", function() { return CityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_management__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state-management */ "./src/modules/dashboard/state-management/index.ts");
/* harmony import */ var src_modules_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/modules/shared */ "./src/modules/shared/index.ts");
/* harmony import */ var _state_management_states_cities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../state-management/states/cities */ "./src/modules/dashboard/state-management/states/cities/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var CityComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CityComponent, _super);
    function CityComponent(router, store) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.store = store;
        _this.cities$ = _this.store.select(_state_management__WEBPACK_IMPORTED_MODULE_4__["citiesSelectors"].getCitiesSelector).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this.destroyed$));
        return _this;
    }
    CityComponent.prototype.onAddItem = function () {
        this.router.navigate(['addcity']);
    };
    CityComponent.prototype.onEditItem = function (item) {
        this.router.navigate(["city-info/" + item.id]);
    };
    CityComponent.prototype.onDeleteItem = function (item) {
        confirm("Delete \"" + item.name._en + "\"?") ? this.store.dispatch(new _state_management_states_cities__WEBPACK_IMPORTED_MODULE_6__["CitiesActions"].DeleteCityDataAction(item.id)) : null;
    };
    CityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-city',
            template: __webpack_require__(/*! ./city.component.html */ "./src/modules/dashboard/components/city/city.component.html"),
            styles: [__webpack_require__(/*! ./city.component.scss */ "./src/modules/dashboard/components/city/city.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], CityComponent);
    return CityComponent;
}(src_modules_shared__WEBPACK_IMPORTED_MODULE_5__["AbstractComponent"]));



/***/ }),

/***/ "./src/modules/dashboard/components/dashboard.component.html":
/*!*******************************************************************!*\
  !*** ./src/modules/dashboard/components/dashboard.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"red\">\n        <app-main-menu></app-main-menu>\n        <div class=\"sidebar-background\" style=\"background-image: url(/assets/img/image_3_1.png) \"></div>\n    </div>\n    <div class=\"main-panel\">\n        <app-header></app-header>\n        <router-outlet></router-outlet>\n        <app-footer></app-footer>\n    </div>\n</div>"

/***/ }),

/***/ "./src/modules/dashboard/components/dashboard.component.scss":
/*!*******************************************************************!*\
  !*** ./src/modules/dashboard/components/dashboard.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/modules/dashboard/components/dashboard.component.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/dashboard/components/dashboard.component.ts ***!
  \*****************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]; })).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["default"](elemSidebar);
        }
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    DashboardComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    DashboardComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["default"](elemMainPanel);
            ps.update();
        }
    };
    DashboardComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/modules/dashboard/components/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/modules/dashboard/components/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/modules/dashboard/components/data-table/data-table.component.html":
/*!*******************************************************************************!*\
  !*** ./src/modules/dashboard/components/data-table/data-table.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"allowAdd\">\n  <button type=\"button\" *ngIf=\"!isAdd\" class=\"btn btn-primary btn-round btn-simple\" (click)=\"onAddButtonClick()\">\n    Add {{itemName}}\n    <i *ngIf=\"!uploadingAudio\" class=\"now-ui-icons ui-1_simple-add\"></i>\n    <i *ngIf=\"uploadingAudio\" class=\"now-ui-icons loader_refresh spin\"></i>\n  </button>\n  <ng-container *ngIf=\"isAdd && !isAudioUploader\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label>{{itemName}}</label>\n          <select class=\"form-control\" type=\"text\" [(ngModel)]=\"itemToAdd\" (ngModelChange)=\"onAddItem()\">\n            <option value=\"\" disabled selected>Select the {{itemNameLowerCase}} to add</option>\n            <option *ngFor=\"let item of filteredAddItems$ | async\" [(ngValue)]=\"item.id\">{{getName(item)}}</option>\n          </select>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n  <ng-container *ngIf=\"isAudioUploader\">\n    <input #audioUpload class=\"file-input hidden\" type=\"file\" accept=\"audio/*\" id=\"audio-upload\" (change)=\"startUploadAudio($event.target.files)\">\n  </ng-container>\n</div>\n<div class=\"table-responsive\">\n  <table class=\"table\">\n    <thead class=\" text-primary\" *ngIf=\"(items$ | async)?.length > 0\">\n      <th>#</th>\n      <th>Name</th>\n      <th>{{isAudioUploader ? 'Audio' : 'Description'}}</th>\n      <th class=\"text-right\">Actions</th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of items$ | async; let i = index\">\n        <td>{{i+1}}</td>\n        <td>{{getName(item)}}</td>\n        <td>\n          <span *ngIf=\"!isAudioUploader\">{{getDescription(item)}}</span>\n          <audio *ngIf=\"isAudioUploader\" [src]=\"getDescription(item)\" controls></audio>\n        </td>\n        <td class=\"text-right actions-cell\">\n          <button *ngIf=\"allowEdit\" type=\"button\" rel=\"tooltip\" title=\"\" class=\"btn btn-info btn-round btn-icon btn-icon-mini btn-neutral\"\n                  data-original-title=\"Edit\" (click)=\"onEditItem(item)\" onclick=\"this.blur();\"\n          >\n              <i class=\"now-ui-icons now-ui-icons ui-2_settings-90\"></i>\n          </button>\n          <button type=\"button\" rel=\"tooltip\" title=\"\" class=\"btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral\"\n                  data-original-title=\"Remove\" (click)=\"onDeleteItem(item)\" onclick=\"this.blur();\"\n          >\n            <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n          </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/modules/dashboard/components/data-table/data-table.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/modules/dashboard/components/data-table/data-table.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services */ "./src/modules/dashboard/services/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_management__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../state-management */ "./src/modules/dashboard/state-management/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");









var DataTableComponent = /** @class */ (function () {
    function DataTableComponent(actions, uploadService, store) {
        this.actions = actions;
        this.uploadService = uploadService;
        this.store = store;
        this.addButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isAdd = false;
        this.itemToAdd = '';
    }
    Object.defineProperty(DataTableComponent.prototype, "filteredAddItems$", {
        get: function () {
            if (!this.addItems$ || !this.items$) {
                return this.addItems$;
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.addItems$, this.items$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                return data[0] && data[1] ?
                    data[0].filter(function (item) { return data[1].findIndex(function (value) { return value['id'] === item['id']; }) === -1; }) :
                    data[0];
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "itemNameLowerCase", {
        get: function () {
            return this.itemName ? this.itemName.toLowerCase() : this.itemName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableComponent.prototype, "isAudioUploader", {
        get: function () {
            return this.itemName && this.itemName.toLowerCase() === 'audio';
        },
        enumerable: true,
        configurable: true
    });
    DataTableComponent.prototype.onAddButtonClick = function () {
        this.addButtonClick.emit();
        if (this.isAudioUploader) {
            this.audioUpload.nativeElement.click();
        }
        else {
            this.isAdd = true;
        }
    };
    DataTableComponent.prototype.onAddItem = function () {
        this.addItemFunc(this.itemToAdd);
        this.itemToAdd = '';
    };
    DataTableComponent.prototype.onEditItem = function (item) {
        this.editItem.emit(item);
    };
    DataTableComponent.prototype.onDeleteItem = function (item) {
        if (this.form && this.formFieldName) {
            var newList = this.form.value[this.formFieldName] || [];
            newList = newList.filter(function (id) { return item['id'] !== id; });
            this.form.get(this.formFieldName).setValue(newList);
        }
        this.deleteItem.emit(item);
        if (this.isAudioUploader) {
            this.store.dispatch(new _state_management__WEBPACK_IMPORTED_MODULE_7__["AudiosActions"].DeleteAudioDataAction(item['id']));
        }
    };
    DataTableComponent.prototype.getName = function (item) {
        return this.customNameField ? item[this.customNameField] : item['name']['_en'];
    };
    DataTableComponent.prototype.getDescription = function (item) {
        return this.customDescField ? item[this.customDescField] : item['desc']['_en'];
    };
    DataTableComponent.prototype.startUploadAudio = function (event) {
        var _this = this;
        this.uploadingAudio = true;
        this.uploadService.uploadAudio(event, this.uploadFolder).subscribe(function (file) {
            _this.store.dispatch(new _state_management__WEBPACK_IMPORTED_MODULE_7__["AudiosActions"].AddAudioDataAction({ audio_content: file.url, audio_name: file.fileName }));
            _this.uploadingAudio = false;
            _this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["ofType"])(_state_management__WEBPACK_IMPORTED_MODULE_7__["AudiosActions"].Actions.AudioDataAdded)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (action) {
                var id = action['payload'];
                _this.addItemFunc(id);
            });
        });
    };
    DataTableComponent.prototype.addItemFunc = function (id) {
        if (this.form && this.formFieldName) {
            var newList = this.form.value[this.formFieldName] || [];
            newList.push(id);
            this.form.get(this.formFieldName).setValue(newList);
        }
        this.addItem.emit(id);
        this.isAdd = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], DataTableComponent.prototype, "items$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], DataTableComponent.prototype, "addItems$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DataTableComponent.prototype, "allowEdit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DataTableComponent.prototype, "allowAdd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DataTableComponent.prototype, "itemName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"])
    ], DataTableComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DataTableComponent.prototype, "formFieldName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DataTableComponent.prototype, "customNameField", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DataTableComponent.prototype, "customDescField", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DataTableComponent.prototype, "uploadFolder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DataTableComponent.prototype, "addButtonClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DataTableComponent.prototype, "addItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DataTableComponent.prototype, "editItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DataTableComponent.prototype, "deleteItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('audioUpload'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DataTableComponent.prototype, "audioUpload", void 0);
    DataTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-table',
            template: __webpack_require__(/*! ./data-table.component.html */ "./src/modules/dashboard/components/data-table/data-table.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["Actions"], _services__WEBPACK_IMPORTED_MODULE_5__["UploadService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]])
    ], DataTableComponent);
    return DataTableComponent;
}());



/***/ }),

/***/ "./src/modules/dashboard/components/footer/footer.component.css":
/*!**********************************************************************!*\
  !*** ./src/modules/dashboard/components/footer/footer.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/modules/dashboard/components/footer/footer.component.html":
/*!***********************************************************************!*\
  !*** ./src/modules/dashboard/components/footer/footer.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n<footer class=\"footer\">\n  <div class=\"container-fluid\">\n    <nav>\n      <ul>\n        <li>\n          <a href=\"https://www.creative-tim.com\">\n            Creative Tim\n          </a>\n        </li>\n        <li>\n          <a href=\"https://www.creative-tim.com/about-us\">\n            About Us\n          </a>\n        </li>\n        <li>\n          <a href=\"http://blog.creative-tim.com\">\n            Blog\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <div class=\"copyright\">\n      &copy;\n      {{test | date: 'yyyy'}}, Designed by\n      <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n      <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\n    </div>\n  </div>\n</footer> -->\n"

/***/ }),

/***/ "./src/modules/dashboard/components/footer/footer.component.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/dashboard/components/footer/footer.component.ts ***!
  \*********************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/modules/dashboard/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/modules/dashboard/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/modules/dashboard/components/header/header.component.html":
/*!***********************************************************************!*\
  !*** ./src/modules/dashboard/components/header/header.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n  </div>\n<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute bg-primary fixed-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-wrapper\">\n            <div class=\"navbar-toggle\">\n                <button type=\"button\" class=\"navbar-toggler\" (click)=\"sidebarToggle()\">\n                    <span class=\"navbar-toggler-bar bar1\"></span>\n                    <span class=\"navbar-toggler-bar bar2\"></span>\n                    <span class=\"navbar-toggler-bar bar3\"></span>\n                </button>\n            </div>\n            <a class=\"navbar-brand\">Go! Templars</a>\n        </div>\n        <button class=\"navbar-toggler\" type=\"button\" (click)=\"collapse()\"\n          [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\n          <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n          <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n          <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n          <ul class=\"navbar-nav\">\n            <!-- <li class=\"nav-item\" ngbDropdown>\n              <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle>\n                <i class=\"now-ui-icons location_world\"></i>\n                </a>\n              <div class=\"dropdown-menu dropdown-menu-right\" ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                <a class=\"dropdown-item\" href=\"#\" (click)=\"logOut()\">Log Out</a>\n              </div>\n            </li> -->\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" (click)=\"logOut()\">\n                  Log Out\n                  <i class=\"now-ui-icons arrows-1_share-66\"></i>\n              </a>\n            </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/modules/dashboard/components/header/header.component.scss":
/*!***********************************************************************!*\
  !*** ./src/modules/dashboard/components/header/header.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .navbar-brand {\n  float: none;\n  font-size: 20px; }\n\n:host .nav-link {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2Rhc2hib2FyZC9jb21wb25lbnRzL2hlYWRlci9EOlxcQW5ndWxhclxcZ29UZW1wL3NyY1xcbW9kdWxlc1xcZGFzaGJvYXJkXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBSG5CO0VBT0ksZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9tb2R1bGVzL2Rhc2hib2FyZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5uYXZiYXItYnJhbmQge1xuICAgIGZsb2F0OiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gIC5uYXYtbGluayB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/modules/dashboard/components/header/header.component.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/dashboard/components/header/header.component.ts ***!
  \*********************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../main-menu/main-menu.component */ "./src/modules/dashboard/components/main-menu/main-menu.component.ts");
/* harmony import */ var src_modules_sign_in_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/modules/sign-in/services */ "./src/modules/sign-in/services/index.ts");






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(signInService, router, location, element) {
        this.signInService = signInService;
        this.router = router;
        this.element = element;
        this.mobile_menu_visible = 0;
        this.isCollapsed = true;
        this.location = location;
        this.sidebarVisible = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    HeaderComponent.prototype.logOut = function () {
        this.signInService.removeToken();
        this.router.navigate(['/signin']);
    };
    HeaderComponent.prototype.collapse = function () {
        this.isCollapsed = !this.isCollapsed;
        var navbar = document.getElementsByTagName('nav')[0];
        console.log(navbar);
        if (!this.isCollapsed) {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('bg-white');
        }
        else {
            navbar.classList.add('navbar-transparent');
            navbar.classList.remove('bg-white');
        }
    };
    HeaderComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        var html = document.getElementsByTagName('html')[0];
        if (window.innerWidth < 991) {
            mainPanel.style.position = 'fixed';
        }
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    HeaderComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        if (window.innerWidth < 991) {
            setTimeout(function () {
                mainPanel.style.position = '';
            }, 500);
        }
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    HeaderComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const html = document.getElementsByTagName('html')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var html = document.getElementsByTagName('html')[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            html.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (html.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (html.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                html.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            html.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    ;
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/modules/dashboard/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/modules/dashboard/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_modules_sign_in_services__WEBPACK_IMPORTED_MODULE_5__["SignInService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/modules/dashboard/components/index.ts":
/*!***************************************************!*\
  !*** ./src/modules/dashboard/components/index.ts ***!
  \***************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ "./src/modules/dashboard/components/dashboard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return _dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]; });




/***/ }),

/***/ "./src/modules/dashboard/components/main-menu/main-menu.component.html":
/*!*****************************************************************************!*\
  !*** ./src/modules/dashboard/components/main-menu/main-menu.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"logo\">\n    <a href=\"\" class=\"simple-text logo-mini\">\n      <div class=\"logo-img\">\n          <img src=\"./assets/img/logo.png\"/>\n      </div>\n    </a>\n    <a href=\"\" class=\"simple-text logo-normal\">\n        Go! Templars\n    </a>\n</div>\n<div class=\"sidebar-wrapper\">\n    <ul class=\"nav\">\n        <li *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\" [class.active]=\"isActive(menuItem)\">\n            <a [routerLink]=\"[menuItem.path]\">\n                <i class=\"now-ui-icons {{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "./src/modules/dashboard/components/main-menu/main-menu.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/modules/dashboard/components/main-menu/main-menu.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  display: flex;\n  width: 100%; }\n\n.sidebar-sticky {\n  width: 200px;\n  position: fixed;\n  height: 100vh;\n  box-shadow: 0px 0px 120px 0px rgba(0, 0, 0, 0.15); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2Rhc2hib2FyZC9jb21wb25lbnRzL21haW4tbWVudS9EOlxcQW5ndWxhclxcZ29UZW1wL3NyY1xcbW9kdWxlc1xcZGFzaGJvYXJkXFxjb21wb25lbnRzXFxtYWluLW1lbnVcXG1haW4tbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxZQUFZO0VBQ1osZUFBZTtFQUdkLGFBQWE7RUFDYixpREFBaUQsRUFBQSIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9tYWluLW1lbnUvbWFpbi1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaWRlYmFyLXN0aWNreSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAvLyB0b3A6IDA7XG4gICAgLy8gbGVmdDogMDtcbiAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICAvLyB6LWluZGV4OiA5OTk7XG4gICAgLy8gYmFja2dyb3VuZDogIzczODZENTtcbiAgICAvLyBjb2xvcjogI2ZmZjtcbiAgICAvLyB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/modules/dashboard/components/main-menu/main-menu.component.ts":
/*!***************************************************************************!*\
  !*** ./src/modules/dashboard/components/main-menu/main-menu.component.ts ***!
  \***************************************************************************/
/*! exports provided: ROUTES, MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ROUTES = [
    { path: '/city', title: 'Cities', icon: 'location_world', class: '', additionalPaths: ['addcity', 'city-info'] },
    { path: '/route', title: 'Routes', icon: 'location_pin', class: '', additionalPaths: ['addroute', 'route-info'] },
    { path: '/sight', title: 'Sights', icon: 'business_bank', class: '', additionalPaths: ['addsight', 'sight-info'] },
    { path: '/accesscodes', title: 'Accesscodes', icon: 'objects_key-25', class: '', additionalPaths: ['addaccesscodes', 'accesscodes-info'] },
];
var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent() {
    }
    MainMenuComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    MainMenuComponent.prototype.isMobileMenu = function () {
        if (window.innerWidth > 991) {
            return false;
        }
        return true;
    };
    ;
    MainMenuComponent.prototype.isActive = function (menuItem) {
        return menuItem.additionalPaths ?
            location.pathname.indexOf(menuItem.path) !== -1 || !!menuItem.additionalPaths.find(function (path) { return location.pathname.indexOf(path) !== -1; }) :
            false;
    };
    MainMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-menu',
            template: __webpack_require__(/*! ./main-menu.component.html */ "./src/modules/dashboard/components/main-menu/main-menu.component.html"),
            styles: [__webpack_require__(/*! ./main-menu.component.scss */ "./src/modules/dashboard/components/main-menu/main-menu.component.scss")]
        })
    ], MainMenuComponent);
    return MainMenuComponent;
}());



/***/ }),

/***/ "./src/modules/dashboard/components/page-content/page-content.component.html":
/*!***********************************************************************************!*\
  !*** ./src/modules/dashboard/components/page-content/page-content.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\">{{title}}</h4>\n        </div>\n        <div class=\"card-body\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/modules/dashboard/components/page-content/page-content.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/modules/dashboard/components/page-content/page-content.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PageContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageContentComponent", function() { return PageContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageContentComponent = /** @class */ (function () {
    function PageContentComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PageContentComponent.prototype, "title", void 0);
    PageContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-content',
            template: __webpack_require__(/*! ./page-content.component.html */ "./src/modules/dashboard/components/page-content/page-content.component.html")
        })
    ], PageContentComponent);
    return PageContentComponent;
}());



/***/ }),

/***/ "./src/modules/dashboard/components/route-info/route-info.component.html":
/*!*******************************************************************************!*\
  !*** ./src/modules/dashboard/components/route-info/route-info.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-content [title]=\"editRoute ? 'Update Route' : 'Create Route'\">\r\n  <form class=\"form\" novalidate=\"\" [formGroup]=\"updateRouteForm\" (ngSubmit)=\"saveRoute()\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (en)*</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_en\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (es)</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_es\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (pt)</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_pt\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (de)</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_de\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (fr)</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_fr\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (it)</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_it\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (en)*</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_en\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (es)</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_es\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (pt)</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_pt\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (de)</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_de\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (fr)</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_fr\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (it)</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_it\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>Length</label>\r\n          <select class=\"form-control\" type=\"text\" formControlName=\"leght\">\r\n            <option value=\"\" disabled selected>Select the length</option>\r\n            <option *ngFor=\"let item of routeLengths\" [(ngValue)]=\"item\">{{getLengthName(item)}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>Hours</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"hours\" placeholder=\"Hours\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>Kilometers</label>\r\n          <input class=\"form-control\" type=\"number\" formControlName=\"kilometers\" placeholder=\"Kilometers\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>Contact phone</label>\r\n          <input class=\"form-control\" type=\"string\" formControlName=\"contact_phone\" placeholder=\"Contact phone\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>Styles</label>\r\n          <angular2-multiselect [data]=\"dropdownList\" [(ngModel)]=\"selectedItems\" [ngModelOptions]=\"{standalone: true}\"\r\n            [settings]=\"dropdownSettings\" (onSelect)=\"onItemSelect($event)\" (onDeSelect)=\"OnItemDeSelect($event)\"\r\n            (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\">\r\n          </angular2-multiselect>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <h6>Background Image:</h6>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>Background Image Url</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"background_url\" placeholder=\"Background Image Url\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 align-self-center\">\r\n        <label for=\"background-upload\" class=\"custom-file-upload btn btn-primary btn-round btn-simple\">\r\n          Upload image\r\n          <i *ngIf=\"!uploadingBackground\" class=\"now-ui-icons arrows-1_cloud-upload-94\"></i>\r\n          <i *ngIf=\"uploadingBackground\" class=\"now-ui-icons loader_refresh spin\"></i>\r\n        </label>\r\n        <input class=\"file-input\" type=\"file\" id=\"background-upload\" accept=\"image/*\"\r\n          (change)=\"startUploadBackground($event.target.files)\">\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div *ngIf=\"updateRouteForm.value?.background_url as url\">\r\n      <img class=\"image-preview\" [src]=\"url\">\r\n      <br>\r\n    </div>\r\n    <br>\r\n    <!--<h6>Audio:</h6>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>Audio Url</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"audi_url\" placeholder=\"Audio Url\"/>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 align-self-center\">\r\n        <label for=\"audio-upload\" class=\"custom-file-upload btn btn-primary btn-round btn-simple\">\r\n          Upload audio\r\n          <i *ngIf=\"!uploadingAudio\" class=\"now-ui-icons arrows-1_cloud-upload-94\"></i>\r\n          <i *ngIf=\"uploadingAudio\" class=\"now-ui-icons loader_refresh spin\"></i>\r\n        </label>\r\n        <input class=\"file-input\" type=\"file\" id=\"audio-upload\" (change)=\"startUploadAudio($event.target.files)\">\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div *ngIf=\"updateSightForm.value.audi_url as url\">\r\n      <audio [src]=\"url\" controls></audio>\r\n      <br>\r\n    </div>\r\n    <br>-->\r\n    <!-- Location search part -->\r\n    <!-- <h6>Location:</h6>\r\n    <br>\r\n    <input type=\"text\" class=\"form-control location-input\" placeholder=\"Select Location\"\r\n      (focus)=\"onAddressFocus($event)\" (blur)=\"onAddressBlur($event)\">\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label>Lattitude</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"location_lat\" placeholder=\"Lattitude\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label>Longitude</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"location_lng\" placeholder=\"Longitude\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"map\" class=\"map\" [ngStyle]=\"{'z-index' : '1'}\"></div>\r\n    <br> -->\r\n    <h6>Audios:</h6>\r\n    <app-data-table [items$]=\"currentAudios$\" [addItems$]=\"audios$\" [itemName]=\"'Audio'\" [form]=\"updateRouteForm\"\r\n      [formFieldName]=\"'audios_list'\" [allowAdd]=\"true\" [customNameField]=\"'audio_name'\"\r\n      [customDescField]=\"'audio_content'\" [uploadFolder]=\"'routes/audio'\"></app-data-table>\r\n    <br>\r\n    <h6>Sights:</h6>\r\n    <app-data-table [items$]=\"currentSights$\" [addItems$]=\"sights$\" [itemName]=\"'Sight'\" [form]=\"updateRouteForm\"\r\n      [formFieldName]=\"'sights_list'\" [allowAdd]=\"true\"></app-data-table>\r\n    <br>\r\n    <div class=\"row justify-content-end\">\r\n      <div class=\"col-sm-12 col-actions\">\r\n        <button class=\"btn btn-primary btn-round btn-simple\" (click)=\"goBack()\">\r\n          Cancel\r\n          <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n        </button>\r\n        <button class=\"btn btn-primary btn-round\" type=\"submit\" [disabled]=\"updateRouteForm.invalid\">\r\n          {{editRoute ? 'Update Route' : 'Create Route'}}\r\n          <i class=\"now-ui-icons ui-1_check\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</app-page-content>"

/***/ }),

/***/ "./src/modules/dashboard/components/route-info/route-info.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/modules/dashboard/components/route-info/route-info.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9yb3V0ZS1pbmZvL3JvdXRlLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/modules/dashboard/components/route-info/route-info.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/modules/dashboard/components/route-info/route-info.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RouteInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteInfoComponent", function() { return RouteInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_modules_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/modules/shared */ "./src/modules/shared/index.ts");
/* harmony import */ var _state_management__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../state-management */ "./src/modules/dashboard/state-management/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _state_management_states_route__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../state-management/states/route */ "./src/modules/dashboard/state-management/states/route/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services */ "./src/modules/dashboard/services/index.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../enums */ "./src/modules/dashboard/enums/index.ts");












var RouteInfoComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RouteInfoComponent, _super);
    function RouteInfoComponent(store, router, formBuilder, activateRoute, mapsService, uploadService, renderer) {
        var _this = _super.call(this) || this;
        _this.store = store;
        _this.router = router;
        _this.formBuilder = formBuilder;
        _this.activateRoute = activateRoute;
        _this.mapsService = mapsService;
        _this.uploadService = uploadService;
        _this.renderer = renderer;
        _this.RouteLength = _enums__WEBPACK_IMPORTED_MODULE_11__["RouteLength"];
        _this.dropdownList = [];
        _this.selectedItems = [];
        _this.dropdownSettings = {
            singleSelection: false,
            text: "Select styles",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
        _this.route$ = _this.store.select(_state_management__WEBPACK_IMPORTED_MODULE_6__["routesSelectors"].getActiveRouteSelector).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.destroyed$));
        _this.sights$ = _this.store.select(_state_management__WEBPACK_IMPORTED_MODULE_6__["sightSelectors"].getSightsSelector).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.destroyed$));
        _this.audios$ = _this.store.select(_state_management__WEBPACK_IMPORTED_MODULE_6__["audioSelectors"].getAudiosSelector).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.destroyed$));
        _this.styles$ = _this.store.select(_state_management__WEBPACK_IMPORTED_MODULE_6__["styleSelectors"].getStylesSelector).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.destroyed$));
        _this.updateRouteForm = _this.formBuilder.group({
            name: _this.formBuilder.group({
                _en: ['', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3)
                    ]],
                _es: ['', [
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3)
                    ]],
                _pt: ['', [
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3)
                    ]],
                _de: ['', [
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3)
                    ]],
                _fr: ['', [
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3)
                    ]],
                _it: ['', [
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3)
                    ]]
            }),
            desc: _this.formBuilder.group({
                _en: ['', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3)
                    ]],
                _es: ['', [
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3)
                    ]],
                _pt: ['', [
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3)
                    ]],
                _de: ['', [
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3)
                    ]],
                _fr: ['', [
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3)
                    ]],
                _it: ['', [
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3)
                    ]]
            }),
            audios_list: [],
            contact_phone: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(6)
                ]],
            background_url: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3)
                ]],
            hours: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required
                ]],
            kilometers: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required
                ]],
            leght: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required
                ]],
            // location_lat: ['', [
            //   Validators.required
            // ]],
            // location_lng: ['', [
            //   Validators.required
            // ]],
            sights_list: [],
            style: []
        });
        _this.route$.subscribe(function (route) {
            route ? _this.updateRouteForm.patchValue(route) : _this.updateRouteForm.reset();
        });
        return _this;
        // this.updateRouteForm.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe((value: RouteInterface) => {
        //   if (this.marker) {
        //     if (value.location_lat !== this.marker._latlng.lat || value.location_lng !== this.marker._latlng.lng) {
        //       this.marker = this.mapsService.setMarker(this.map, this.marker, value.location_lat, value.location_lng);
        //     }
        //   }
        // });
    }
    Object.defineProperty(RouteInfoComponent.prototype, "routeLengths", {
        get: function () {
            return Object.keys(_enums__WEBPACK_IMPORTED_MODULE_11__["RouteLength"]).map(function (key) { return _enums__WEBPACK_IMPORTED_MODULE_11__["RouteLength"][key]; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouteInfoComponent.prototype, "currentSights$", {
        get: function () {
            var _this = this;
            return this.sights$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (sights) {
                return sights ?
                    sights.filter(function (sight) {
                        return _this.updateRouteForm.value && _this.updateRouteForm.value.sights_list && _this.updateRouteForm.value.sights_list.indexOf(sight.id) !== -1;
                    }) : [];
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouteInfoComponent.prototype, "currentAudios$", {
        get: function () {
            var _this = this;
            return this.audios$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (audios) {
                return audios ?
                    audios.filter(function (audio) {
                        return _this.updateRouteForm.value && _this.updateRouteForm.value.audios_list && _this.updateRouteForm.value.audios_list.indexOf(audio.id) !== -1;
                    }) : [];
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouteInfoComponent.prototype, "currentStyles$", {
        get: function () {
            var _this = this;
            return this.styles$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (styles) {
                return styles ?
                    styles.filter(function (style) {
                        return _this.updateRouteForm.value && _this.updateRouteForm.value.style && _this.updateRouteForm.value.style.indexOf(style.id) !== -1;
                    }) : [];
            }));
        },
        enumerable: true,
        configurable: true
    });
    RouteInfoComponent.prototype.ngOnInit = function () {
        // this.map = this.mapsService.createMap(this.updateRouteForm.get('location_lat').value, this.updateRouteForm.get('location_lng').value);
        // this.map.on('click', (e: any) => {
        //   this.marker = this.mapsService.setMarker(this.map, this.marker, e.latlng.lat, e.latlng.lng);
        //   this.updateRouteForm.get('location_lat').setValue(e.latlng.lat, { emitEvent: false });
        //   this.updateRouteForm.get('location_lng').setValue(e.latlng.lng, { emitEvent: false });
        // });
        var _this = this;
        this.route$.pipe().subscribe(function (route) {
            _this.editRoute = !!route;
            //   if (route) {
            //     this.marker = this.mapsService.setMarker(this.map, this.marker, route.location_lat, route.location_lng);
            //   }
        });
        this.styles$.subscribe(function (data) {
            _this.dropdownList = _this.getSelectItems(data);
        });
        this.currentStyles$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (styles) {
            _this.selectedItems = _this.getSelectItems(styles);
        });
    };
    RouteInfoComponent.prototype.ngOnDestroy = function () {
        this.store.dispatch(new _state_management_states_route__WEBPACK_IMPORTED_MODULE_9__["RouteActions"].LoadActiveRouteDataAction(null));
    };
    RouteInfoComponent.prototype.saveRoute = function () {
        var _this = this;
        if (this.editRoute) {
            this.route$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (route) {
                _this.store.dispatch(new _state_management_states_route__WEBPACK_IMPORTED_MODULE_9__["RouteActions"].UpdateActiveRouteDataAction({ routeData: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, route, _this.updateRouteForm.value), id: _this.activateRoute.snapshot.paramMap.get('id') }));
            });
        }
        else {
            this.store.dispatch(new _state_management_states_route__WEBPACK_IMPORTED_MODULE_9__["RouteActions"].AddRouteDataAction(this.updateRouteForm.value));
        }
        this.goBack();
    };
    RouteInfoComponent.prototype.goBack = function () {
        this.router.navigate(['/route']);
    };
    RouteInfoComponent.prototype.getLengthName = function (value) {
        return Object.keys(_enums__WEBPACK_IMPORTED_MODULE_11__["RouteLength"]).find(function (key) { return _enums__WEBPACK_IMPORTED_MODULE_11__["RouteLength"][key] === value; });
    };
    RouteInfoComponent.prototype.startUploadBackground = function (event) {
        var _this = this;
        this.uploadingBackground = true;
        this.uploadService.uploadImage(event, 'routes/images').subscribe(function (file) {
            _this.updateRouteForm.get('background_url').setValue(file.url);
            _this.uploadingBackground = false;
        });
    };
    RouteInfoComponent.prototype.startUploadAudio = function (event) {
        var _this = this;
        this.uploadingAudio = true;
        this.uploadService.uploadAudio(event, 'routes/audio').subscribe(function (file) {
            _this.store.dispatch(new _state_management__WEBPACK_IMPORTED_MODULE_6__["AudiosActions"].AddAudioDataAction({ audio_content: file.url, audio_name: file.fileName }));
            //this.updateRouteForm.get('audi_url').setValue(url);
            _this.uploadingAudio = false;
        });
    };
    // styles functions
    RouteInfoComponent.prototype.onItemSelect = function (item) {
        var style = this.updateRouteForm.value.style || [];
        style.push(item.id);
        this.updateRouteForm.get('style').setValue(style);
    };
    RouteInfoComponent.prototype.OnItemDeSelect = function (item) {
        var style = this.updateRouteForm.value.style || [];
        style = style.filter(function (id) { return id !== item.id; });
        this.updateRouteForm.get('style').setValue(style);
    };
    RouteInfoComponent.prototype.onSelectAll = function (items) {
        this.updateRouteForm.get('style').setValue(items.map(function (item) { return item.id; }));
    };
    RouteInfoComponent.prototype.onDeSelectAll = function (items) {
        this.updateRouteForm.get('style').setValue([]);
    };
    RouteInfoComponent.prototype.getSelectItems = function (data) {
        return data.map(function (style) {
            return { itemName: style.name._en, id: style.id };
        });
    };
    RouteInfoComponent.prototype.onAddressFocus = function (event) {
        this.renderer.addClass(event.target.parentElement.parentElement, 'input-group-focus');
    };
    RouteInfoComponent.prototype.onAddressBlur = function (event) {
        this.renderer.removeClass(event.target.parentElement.parentElement, 'input-group-focus');
    };
    RouteInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-route-info',
            template: __webpack_require__(/*! ./route-info.component.html */ "./src/modules/dashboard/components/route-info/route-info.component.html"),
            styles: [__webpack_require__(/*! ./route-info.component.scss */ "./src/modules/dashboard/components/route-info/route-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services__WEBPACK_IMPORTED_MODULE_10__["MapsService"],
            _services__WEBPACK_IMPORTED_MODULE_10__["UploadService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], RouteInfoComponent);
    return RouteInfoComponent;
}(src_modules_shared__WEBPACK_IMPORTED_MODULE_5__["AbstractComponent"]));



/***/ }),

/***/ "./src/modules/dashboard/components/route/route.component.html":
/*!*********************************************************************!*\
  !*** ./src/modules/dashboard/components/route/route.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-content [title]=\"'Routes'\">\n  <app-data-table [items$]=\"routes$\"\n                  [itemName]=\"'Route'\"\n                  [allowEdit]=\"true\"\n                  [allowAdd]=\"true\"\n                  (addButtonClick)=\"onAddItem()\"\n                  (editItem)=\"onEditItem($event)\"\n                  (deleteItem)=\"onDeleteItem($event)\"\n  ></app-data-table>\n</app-page-content>\n"

/***/ }),

/***/ "./src/modules/dashboard/components/route/route.component.scss":
/*!*********************************************************************!*\
  !*** ./src/modules/dashboard/components/route/route.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9yb3V0ZS9yb3V0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/modules/dashboard/components/route/route.component.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/dashboard/components/route/route.component.ts ***!
  \*******************************************************************/
/*! exports provided: RouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteComponent", function() { return RouteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_management__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state-management */ "./src/modules/dashboard/state-management/index.ts");
/* harmony import */ var src_modules_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/modules/shared */ "./src/modules/shared/index.ts");
/* harmony import */ var _state_management_states_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../state-management/states/route */ "./src/modules/dashboard/state-management/states/route/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var RouteComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RouteComponent, _super);
    function RouteComponent(router, store) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.store = store;
        _this.routes$ = _this.store.select(_state_management__WEBPACK_IMPORTED_MODULE_4__["routesSelectors"].getRoutesSelector).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this.destroyed$));
        return _this;
    }
    RouteComponent.prototype.onAddItem = function () {
        this.router.navigate(['addroute']);
    };
    RouteComponent.prototype.onEditItem = function (item) {
        this.router.navigate(["route-info/" + item.id]);
    };
    RouteComponent.prototype.onDeleteItem = function (item) {
        confirm("Delete \"" + item.name._en + "\"?") ? this.store.dispatch(new _state_management_states_route__WEBPACK_IMPORTED_MODULE_6__["RouteActions"].DeleteRouteDataAction(item.id)) : null;
    };
    RouteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-route',
            template: __webpack_require__(/*! ./route.component.html */ "./src/modules/dashboard/components/route/route.component.html"),
            styles: [__webpack_require__(/*! ./route.component.scss */ "./src/modules/dashboard/components/route/route.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], RouteComponent);
    return RouteComponent;
}(src_modules_shared__WEBPACK_IMPORTED_MODULE_5__["AbstractComponent"]));



/***/ }),

/***/ "./src/modules/dashboard/components/sight-info/sight-info.component.html":
/*!*******************************************************************************!*\
  !*** ./src/modules/dashboard/components/sight-info/sight-info.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-content [title]=\"editSight ? 'Update Sight' : 'Create Sight'\">\r\n  <form class=\"form\" novalidate=\"\" [formGroup]=\"updateSightForm\" (ngSubmit)=\"saveSight()\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (en)*</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_en\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (es)</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_es\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (pt)</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_pt\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (de)</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_de\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (fr)</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_fr\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (it)</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_it\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (en)*</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_en\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (es)</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_es\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (pt)</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_pt\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (de)</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_de\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (fr)</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_fr\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (it)</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_it\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>Position</label>\r\n          <input class=\"form-control\" type=\"number\" formControlName=\"position\" placeholder=\"Position\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>City</label>\r\n          <select class=\"form-control\" type=\"text\" formControlName=\"city_id\">\r\n            <option value=\"\" disabled selected>Select the city</option>\r\n            <option *ngFor=\"let item of cities$ | async\" [(ngValue)]=\"item.id\">{{item.name._en}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>Length</label>\r\n          <select class=\"form-control\" type=\"text\" formControlName=\"lenght\">\r\n            <option value=\"\" disabled selected>Select the length</option>\r\n            <option *ngFor=\"let item of sightLengths\" [(ngValue)]=\"item\">{{getLengthName(item)}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>Price</label>\r\n          <input class=\"form-control\" type=\"number\" formControlName=\"price\" placeholder=\"Price\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>Styles</label>\r\n          <angular2-multiselect [data]=\"dropdownList\" [(ngModel)]=\"selectedItems\" [ngModelOptions]=\"{standalone: true}\"\r\n            [settings]=\"dropdownSettings\" (onSelect)=\"onItemSelect($event)\" (onDeSelect)=\"OnItemDeSelect($event)\"\r\n            (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\">\r\n          </angular2-multiselect>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <h6>Background Image:</h6>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>Background Image Url</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"background_url\" placeholder=\"Background Image Url\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 align-self-center\">\r\n        <label for=\"background-upload\" class=\"custom-file-upload btn btn-primary btn-round btn-simple\">\r\n          Upload image\r\n          <i *ngIf=\"!uploadingBackground\" class=\"now-ui-icons arrows-1_cloud-upload-94\"></i>\r\n          <i *ngIf=\"uploadingBackground\" class=\"now-ui-icons loader_refresh spin\"></i>\r\n        </label>\r\n        <input class=\"file-input\" type=\"file\" id=\"background-upload\" accept=\"image/*\"\r\n          (change)=\"startUploadBackground($event.target.files)\">\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div *ngIf=\"updateSightForm.value?.background_url as url\">\r\n      <img class=\"image-preview\" [src]=\"url\">\r\n      <br>\r\n    </div>\r\n    <br>\r\n    <h6>Audio:</h6>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>Audio Url</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"audi_url\" placeholder=\"Audio Url\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 align-self-center\">\r\n        <label for=\"audio-upload\" class=\"custom-file-upload btn btn-primary btn-round btn-simple\">\r\n          Upload audio\r\n          <i *ngIf=\"!uploadingAudio\" class=\"now-ui-icons arrows-1_cloud-upload-94\"></i>\r\n          <i *ngIf=\"uploadingAudio\" class=\"now-ui-icons loader_refresh spin\"></i>\r\n        </label>\r\n        <input class=\"file-input\" type=\"file\" id=\"audio-upload\" accept=\"audio/*\"\r\n          (change)=\"startUploadAudio($event.target.files)\">\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div *ngIf=\"updateSightForm.value?.audi_url as url\">\r\n      <audio [src]=\"url\" controls></audio>\r\n      <br>\r\n    </div>\r\n    <br>\r\n    <h6>Location:</h6>\r\n    <br>\r\n    <input type=\"text\" class=\"form-control location-input\" placeholder=\"Select Location\"\r\n      (focus)=\"onAddressFocus($event)\" (blur)=\"onAddressBlur($event)\">\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label>Lattitude</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"location_lat\" placeholder=\"Lattitude\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label>Longitude</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"location_lng\" placeholder=\"Longitude\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"map\" class=\"map\" [ngStyle]=\"{'z-index' : '1'}\"></div>\r\n    <br>\r\n    <div class=\"row justify-content-end\">\r\n      <div class=\"col-sm-12 col-actions\">\r\n        <button class=\"btn btn-primary btn-round btn-simple\" (click)=\"goBack()\">\r\n          Cancel\r\n          <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n        </button>\r\n        <button class=\"btn btn-primary btn-round\" type=\"submit\" [disabled]=\"updateSightForm.invalid\">\r\n          {{editSight ? 'Update Sight' : 'Create Sight'}}\r\n          <i class=\"now-ui-icons ui-1_check\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</app-page-content>"

/***/ }),

/***/ "./src/modules/dashboard/components/sight-info/sight-info.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/modules/dashboard/components/sight-info/sight-info.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9zaWdodC1pbmZvL3NpZ2h0LWluZm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/modules/dashboard/components/sight-info/sight-info.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/modules/dashboard/components/sight-info/sight-info.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SightInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SightInfoComponent", function() { return SightInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var src_modules_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/modules/shared */ "./src/modules/shared/index.ts");
/* harmony import */ var _state_management__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../state-management */ "./src/modules/dashboard/state-management/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _state_management_states_sight__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../state-management/states/sight */ "./src/modules/dashboard/state-management/states/sight/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../enums */ "./src/modules/dashboard/enums/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services */ "./src/modules/dashboard/services/index.ts");












var SightInfoComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SightInfoComponent, _super);
    function SightInfoComponent(store, router, formBuilder, activateRoute, mapsService, uploadService, renderer) {
        var _this = _super.call(this) || this;
        _this.store = store;
        _this.router = router;
        _this.formBuilder = formBuilder;
        _this.activateRoute = activateRoute;
        _this.mapsService = mapsService;
        _this.uploadService = uploadService;
        _this.renderer = renderer;
        _this.SightLength = _enums__WEBPACK_IMPORTED_MODULE_10__["SightLength"];
        _this.dropdownList = [];
        _this.selectedItems = [];
        _this.dropdownSettings = {
            singleSelection: false,
            text: "Select styles",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
        _this.sight$ = _this.store.select(_state_management__WEBPACK_IMPORTED_MODULE_5__["sightSelectors"].getActiveSightSelector).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(_this.destroyed$));
        _this.cities$ = _this.store.select(_state_management__WEBPACK_IMPORTED_MODULE_5__["citiesSelectors"].getCitiesSelector).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(_this.destroyed$));
        _this.styles$ = _this.store.select(_state_management__WEBPACK_IMPORTED_MODULE_5__["styleSelectors"].getStylesSelector).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(_this.destroyed$));
        _this.updateSightForm = _this.formBuilder.group({
            name: _this.formBuilder.group({
                _en: ['', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)
                    ]],
                _es: ['', [
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)
                    ]],
                _pt: ['', [
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)
                    ]],
                _de: ['', [
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)
                    ]],
                _fr: ['', [
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)
                    ]],
                _it: ['', [
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)
                    ]]
            }),
            desc: _this.formBuilder.group({
                _en: ['', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)
                    ]],
                _es: ['', [
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)
                    ]],
                _pt: ['', [
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)
                    ]],
                _de: ['', [
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)
                    ]],
                _fr: ['', [
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)
                    ]],
                _it: ['', [
                        //Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)
                    ]]
            }),
            audi_url: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)
                ]],
            background_url: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)
                ]],
            position: ['', [
                //Validators.required
                ]],
            city_id: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required
                ]],
            lenght: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required
                ]],
            location_lat: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required
                ]],
            location_lng: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required
                ]],
            price: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)
                ]],
            style: []
        });
        _this.sight$.subscribe(function (sight) {
            sight ? _this.updateSightForm.patchValue(sight) : _this.updateSightForm.reset();
        });
        _this.updateSightForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(_this.destroyed$)).subscribe(function (value) {
            if (_this.marker) {
                if (value.location_lat !== _this.marker._latlng.lat || value.location_lng !== _this.marker._latlng.lng) {
                    _this.marker = _this.mapsService.setMarker(_this.map, _this.marker, value.location_lat, value.location_lng);
                }
            }
        });
        return _this;
    }
    Object.defineProperty(SightInfoComponent.prototype, "sightLengths", {
        get: function () {
            return Object.keys(_enums__WEBPACK_IMPORTED_MODULE_10__["SightLength"]).map(function (key) { return _enums__WEBPACK_IMPORTED_MODULE_10__["SightLength"][key]; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SightInfoComponent.prototype, "currentStyles$", {
        get: function () {
            var _this = this;
            return this.styles$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (styles) {
                return styles ?
                    styles.filter(function (style) {
                        return _this.updateSightForm.value && _this.updateSightForm.value.style && _this.updateSightForm.value.style.indexOf(style.id) !== -1;
                    }) : [];
            }));
        },
        enumerable: true,
        configurable: true
    });
    SightInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.map = this.mapsService.createMap(this.updateSightForm.get('location_lat').value, this.updateSightForm.get('location_lng').value);
        this.map.on('click', function (e) {
            _this.marker = _this.mapsService.setMarker(_this.map, _this.marker, e.latlng.lat, e.latlng.lng);
            _this.updateSightForm.get('location_lat').setValue(e.latlng.lat, { emitEvent: false });
            _this.updateSightForm.get('location_lng').setValue(e.latlng.lng, { emitEvent: false });
        });
        this.sight$.pipe().subscribe(function (sight) {
            _this.editSight = !!sight;
            if (sight) {
                _this.marker = _this.mapsService.setMarker(_this.map, _this.marker, sight.location_lat, sight.location_lng);
            }
        });
        this.styles$.subscribe(function (data) {
            _this.dropdownList = _this.getSelectItems(data);
        });
        this.currentStyles$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1)).subscribe(function (styles) {
            _this.selectedItems = _this.getSelectItems(styles);
        });
    };
    SightInfoComponent.prototype.ngOnDestroy = function () {
        this.store.dispatch(new _state_management_states_sight__WEBPACK_IMPORTED_MODULE_8__["SightActions"].LoadActiveSightDataAction(null));
    };
    SightInfoComponent.prototype.saveSight = function () {
        var _this = this;
        this.updateSightForm.value.position === null || '' || 0 ? this.updateSightForm.get('position').setValue(500) : null;
        if (this.editSight) {
            this.sight$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1)).subscribe(function (sight) {
                _this.store.dispatch(new _state_management_states_sight__WEBPACK_IMPORTED_MODULE_8__["SightActions"].UpdateActiveSightDataAction({ sightData: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, sight, _this.updateSightForm.value), id: _this.activateRoute.snapshot.paramMap.get('id') }));
            });
        }
        else {
            this.store.dispatch(new _state_management_states_sight__WEBPACK_IMPORTED_MODULE_8__["SightActions"].AddSightDataAction(this.updateSightForm.value));
        }
        this.goBack();
    };
    SightInfoComponent.prototype.goBack = function () {
        this.router.navigate(['/sight']);
    };
    SightInfoComponent.prototype.getLengthName = function (value) {
        return Object.keys(_enums__WEBPACK_IMPORTED_MODULE_10__["SightLength"]).find(function (key) { return _enums__WEBPACK_IMPORTED_MODULE_10__["SightLength"][key] === value; });
    };
    SightInfoComponent.prototype.startUploadBackground = function (event) {
        var _this = this;
        this.uploadingBackground = true;
        this.uploadService.uploadImage(event, 'sights/images').subscribe(function (file) {
            _this.updateSightForm.get('background_url').setValue(file.url);
            _this.uploadingBackground = false;
        });
    };
    SightInfoComponent.prototype.startUploadAudio = function (event) {
        var _this = this;
        this.uploadingAudio = true;
        this.uploadService.uploadAudio(event, 'sights/audio').subscribe(function (file) {
            _this.updateSightForm.get('audi_url').setValue(file.url);
            _this.store.dispatch(new _state_management__WEBPACK_IMPORTED_MODULE_5__["AudiosActions"].AddAudioDataAction({ audio_content: file.url, audio_name: file.fileName }));
            _this.uploadingAudio = false;
        });
    };
    // styles functions
    SightInfoComponent.prototype.onItemSelect = function (item) {
        var style = this.updateSightForm.value.style || [];
        style.push(item.id);
        this.updateSightForm.get('style').setValue(style);
    };
    SightInfoComponent.prototype.OnItemDeSelect = function (item) {
        var style = this.updateSightForm.value.style || [];
        style = style.filter(function (id) { return id !== item.id; });
        this.updateSightForm.get('style').setValue(style);
    };
    SightInfoComponent.prototype.onSelectAll = function (items) {
        this.updateSightForm.get('style').setValue(items.map(function (item) { return item.id; }));
    };
    SightInfoComponent.prototype.onDeSelectAll = function (items) {
        this.updateSightForm.get('style').setValue([]);
    };
    SightInfoComponent.prototype.getSelectItems = function (data) {
        return data.map(function (style) {
            return { itemName: style.name._en, id: style.id };
        });
    };
    SightInfoComponent.prototype.onAddressFocus = function (event) {
        this.renderer.addClass(event.target.parentElement.parentElement, 'input-group-focus');
    };
    SightInfoComponent.prototype.onAddressBlur = function (event) {
        this.renderer.removeClass(event.target.parentElement.parentElement, 'input-group-focus');
    };
    SightInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sight-info',
            template: __webpack_require__(/*! ./sight-info.component.html */ "./src/modules/dashboard/components/sight-info/sight-info.component.html"),
            styles: [__webpack_require__(/*! ./sight-info.component.scss */ "./src/modules/dashboard/components/sight-info/sight-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services__WEBPACK_IMPORTED_MODULE_11__["MapsService"],
            _services__WEBPACK_IMPORTED_MODULE_11__["UploadService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], SightInfoComponent);
    return SightInfoComponent;
}(src_modules_shared__WEBPACK_IMPORTED_MODULE_4__["AbstractComponent"]));



/***/ }),

/***/ "./src/modules/dashboard/components/sight/sight.component.html":
/*!*********************************************************************!*\
  !*** ./src/modules/dashboard/components/sight/sight.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-content [title]=\"'Sights'\">\n  <app-data-table [items$]=\"sights$\"\n                  [itemName]=\"'Sight'\"\n                  [allowEdit]=\"true\"\n                  [allowAdd]=\"true\"\n                  (addButtonClick)=\"onAddItem()\"\n                  (editItem)=\"onEditItem($event)\"\n                  (deleteItem)=\"onDeleteItem($event)\"\n  ></app-data-table>\n</app-page-content>\n"

/***/ }),

/***/ "./src/modules/dashboard/components/sight/sight.component.scss":
/*!*********************************************************************!*\
  !*** ./src/modules/dashboard/components/sight/sight.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9zaWdodC9zaWdodC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/modules/dashboard/components/sight/sight.component.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/dashboard/components/sight/sight.component.ts ***!
  \*******************************************************************/
/*! exports provided: SightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SightComponent", function() { return SightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_management__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state-management */ "./src/modules/dashboard/state-management/index.ts");
/* harmony import */ var src_modules_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/modules/shared */ "./src/modules/shared/index.ts");
/* harmony import */ var _state_management_states_sight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../state-management/states/sight */ "./src/modules/dashboard/state-management/states/sight/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var SightComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SightComponent, _super);
    function SightComponent(router, store) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.store = store;
        _this.sights$ = _this.store.select(_state_management__WEBPACK_IMPORTED_MODULE_4__["sightSelectors"].getSightsSelector).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this.destroyed$));
        return _this;
    }
    SightComponent.prototype.onAddItem = function () {
        this.router.navigate(['addsight']);
    };
    SightComponent.prototype.onEditItem = function (item) {
        this.router.navigate(["sight-info/" + item.id]);
    };
    SightComponent.prototype.onDeleteItem = function (item) {
        confirm("Delete \"" + item.name._en + "\"?") ? this.store.dispatch(new _state_management_states_sight__WEBPACK_IMPORTED_MODULE_6__["SightActions"].DeleteSightDataAction(item.id)) : null;
    };
    SightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sight',
            template: __webpack_require__(/*! ./sight.component.html */ "./src/modules/dashboard/components/sight/sight.component.html"),
            styles: [__webpack_require__(/*! ./sight.component.scss */ "./src/modules/dashboard/components/sight/sight.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], SightComponent);
    return SightComponent;
}(src_modules_shared__WEBPACK_IMPORTED_MODULE_5__["AbstractComponent"]));



/***/ }),

/***/ "./src/modules/dashboard/dashboard-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/modules/dashboard/dashboard-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: dashboardRoutes, DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardRoutes", function() { return dashboardRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_city_city_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/city/city.component */ "./src/modules/dashboard/components/city/city.component.ts");
/* harmony import */ var _components_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard.component */ "./src/modules/dashboard/components/dashboard.component.ts");
/* harmony import */ var _components_route_route_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/route/route.component */ "./src/modules/dashboard/components/route/route.component.ts");
/* harmony import */ var _components_sight_sight_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sight/sight.component */ "./src/modules/dashboard/components/sight/sight.component.ts");
/* harmony import */ var _components_city_info_city_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/city-info/city-info.component */ "./src/modules/dashboard/components/city-info/city-info.component.ts");
/* harmony import */ var _components_route_info_route_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/route-info/route-info.component */ "./src/modules/dashboard/components/route-info/route-info.component.ts");
/* harmony import */ var _components_sight_info_sight_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sight-info/sight-info.component */ "./src/modules/dashboard/components/sight-info/sight-info.component.ts");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resolvers */ "./src/modules/dashboard/resolvers/index.ts");
/* harmony import */ var _components_accesscodes_accesscodes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/accesscodes/accesscodes.component */ "./src/modules/dashboard/components/accesscodes/accesscodes.component.ts");
/* harmony import */ var _components_accesscodes_info_accesscodes_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/accesscodes-info/accesscodes-info.component */ "./src/modules/dashboard/components/accesscodes-info/accesscodes-info.component.ts");













var dashboardRoutes = [
    {
        path: '', component: _components_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], resolve: { CitiesDataResolver: _resolvers__WEBPACK_IMPORTED_MODULE_10__["CitiesDataResolver"], RoutesDataResolver: _resolvers__WEBPACK_IMPORTED_MODULE_10__["RoutesDataResolver"], SightsDataResolver: _resolvers__WEBPACK_IMPORTED_MODULE_10__["SightsDataResolver"], AudiosDataResolver: _resolvers__WEBPACK_IMPORTED_MODULE_10__["AudiosDataResolver"], StylesDataResolver: _resolvers__WEBPACK_IMPORTED_MODULE_10__["StylesDataResolver"], AccesscodeDataResolver: _resolvers__WEBPACK_IMPORTED_MODULE_10__["AccesscodeDataResolver"] }, children: [
            { path: '', redirectTo: 'city', pathMatch: 'full' },
            { path: 'city', component: _components_city_city_component__WEBPACK_IMPORTED_MODULE_3__["CityComponent"] },
            { path: 'route', component: _components_route_route_component__WEBPACK_IMPORTED_MODULE_5__["RouteComponent"] },
            { path: 'sight', component: _components_sight_sight_component__WEBPACK_IMPORTED_MODULE_6__["SightComponent"] },
            { path: 'accesscodes', component: _components_accesscodes_accesscodes_component__WEBPACK_IMPORTED_MODULE_11__["AccesscodesComponent"] },
            { path: 'city-info/:id', component: _components_city_info_city_info_component__WEBPACK_IMPORTED_MODULE_7__["CityInfoComponent"], resolve: { CityInfoResolver: _resolvers__WEBPACK_IMPORTED_MODULE_10__["CityInfoResolver"] } },
            { path: 'route-info/:id', component: _components_route_info_route_info_component__WEBPACK_IMPORTED_MODULE_8__["RouteInfoComponent"], resolve: { RouteInfoResolver: _resolvers__WEBPACK_IMPORTED_MODULE_10__["RouteInfoResolver"] } },
            { path: 'sight-info/:id', component: _components_sight_info_sight_info_component__WEBPACK_IMPORTED_MODULE_9__["SightInfoComponent"], resolve: { SightInfoResolver: _resolvers__WEBPACK_IMPORTED_MODULE_10__["SightInfoResolver"] } },
            { path: 'accesscodes-info/:id', component: _components_accesscodes_info_accesscodes_info_component__WEBPACK_IMPORTED_MODULE_12__["AccesscodesInfoComponent"], resolve: { AccesscodInfoResolver: _resolvers__WEBPACK_IMPORTED_MODULE_10__["AccesscodInfoResolver"] } },
            { path: 'addcity', component: _components_city_info_city_info_component__WEBPACK_IMPORTED_MODULE_7__["CityInfoComponent"] },
            { path: 'addroute', component: _components_route_info_route_info_component__WEBPACK_IMPORTED_MODULE_8__["RouteInfoComponent"] },
            { path: 'addsight', component: _components_sight_info_sight_info_component__WEBPACK_IMPORTED_MODULE_9__["SightInfoComponent"] },
            { path: 'addaccesscodes', component: _components_accesscodes_info_accesscodes_info_component__WEBPACK_IMPORTED_MODULE_12__["AccesscodesInfoComponent"] },
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(dashboardRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: []
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/modules/dashboard/dashboard.module.ts":
/*!***************************************************!*\
  !*** ./src/modules/dashboard/dashboard.module.ts ***!
  \***************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_multiselect_dropdown_angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-multiselect-dropdown/angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/angular2-multiselect-dropdown.js");
/* harmony import */ var _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main-menu/main-menu.component */ "./src/modules/dashboard/components/main-menu/main-menu.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/modules/dashboard/components/header/header.component.ts");
/* harmony import */ var _components_city_city_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/city/city.component */ "./src/modules/dashboard/components/city/city.component.ts");
/* harmony import */ var _components_route_route_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/route/route.component */ "./src/modules/dashboard/components/route/route.component.ts");
/* harmony import */ var _components_sight_sight_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sight/sight.component */ "./src/modules/dashboard/components/sight/sight.component.ts");
/* harmony import */ var _components_city_info_city_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/city-info/city-info.component */ "./src/modules/dashboard/components/city-info/city-info.component.ts");
/* harmony import */ var _components_route_info_route_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/route-info/route-info.component */ "./src/modules/dashboard/components/route-info/route-info.component.ts");
/* harmony import */ var _components_sight_info_sight_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sight-info/sight-info.component */ "./src/modules/dashboard/components/sight-info/sight-info.component.ts");
/* harmony import */ var _components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/data-table/data-table.component */ "./src/modules/dashboard/components/data-table/data-table.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/modules/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components */ "./src/modules/dashboard/components/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services */ "./src/modules/dashboard/services/index.ts");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./resolvers */ "./src/modules/dashboard/resolvers/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/modules/dashboard/components/footer/footer.component.ts");
/* harmony import */ var _services_routeapi_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/routeapi.service */ "./src/modules/dashboard/services/routeapi.service.ts");
/* harmony import */ var _services_sightapi_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/sightapi.service */ "./src/modules/dashboard/services/sightapi.service.ts");
/* harmony import */ var _components_page_content_page_content_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/page-content/page-content.component */ "./src/modules/dashboard/components/page-content/page-content.component.ts");
/* harmony import */ var _services_styles_api_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/styles-api.service */ "./src/modules/dashboard/services/styles-api.service.ts");
/* harmony import */ var _resolvers_accesscodes_resolver__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./resolvers/accesscodes.resolver */ "./src/modules/dashboard/resolvers/accesscodes.resolver.ts");
/* harmony import */ var _resolvers_accesscoddata_resolver__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./resolvers/accesscoddata.resolver */ "./src/modules/dashboard/resolvers/accesscoddata.resolver.ts");
/* harmony import */ var _components_accesscodes_accesscodes_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/accesscodes/accesscodes.component */ "./src/modules/dashboard/components/accesscodes/accesscodes.component.ts");
/* harmony import */ var _components_accesscodes_info_accesscodes_info_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/accesscodes-info/accesscodes-info.component */ "./src/modules/dashboard/components/accesscodes-info/accesscodes-info.component.ts");






























var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"],
                _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_6__["MainMenuComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _components_city_city_component__WEBPACK_IMPORTED_MODULE_8__["CityComponent"],
                _components_route_route_component__WEBPACK_IMPORTED_MODULE_9__["RouteComponent"],
                _components_sight_sight_component__WEBPACK_IMPORTED_MODULE_10__["SightComponent"],
                _components_city_info_city_info_component__WEBPACK_IMPORTED_MODULE_11__["CityInfoComponent"],
                _components_route_info_route_info_component__WEBPACK_IMPORTED_MODULE_12__["RouteInfoComponent"],
                _components_sight_info_sight_info_component__WEBPACK_IMPORTED_MODULE_13__["SightInfoComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
                _components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_14__["DataTableComponent"],
                _components_page_content_page_content_component__WEBPACK_IMPORTED_MODULE_24__["PageContentComponent"],
                _components_accesscodes_accesscodes_component__WEBPACK_IMPORTED_MODULE_28__["AccesscodesComponent"],
                _components_accesscodes_info_accesscodes_info_component__WEBPACK_IMPORTED_MODULE_29__["AccesscodesInfoComponent"]
            ],
            imports: [
                angular2_multiselect_dropdown_angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__["AngularMultiSelectModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_15__["DashboardRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"]
            ],
            providers: [
                _services__WEBPACK_IMPORTED_MODULE_17__["AudiosApiService"],
                _services__WEBPACK_IMPORTED_MODULE_17__["CityApiService"],
                _resolvers__WEBPACK_IMPORTED_MODULE_18__["CitiesDataResolver"],
                _resolvers__WEBPACK_IMPORTED_MODULE_18__["CityInfoResolver"],
                _resolvers__WEBPACK_IMPORTED_MODULE_18__["RoutesDataResolver"],
                _services_routeapi_service__WEBPACK_IMPORTED_MODULE_22__["RouteApiService"],
                _resolvers__WEBPACK_IMPORTED_MODULE_18__["RouteInfoResolver"],
                _services_sightapi_service__WEBPACK_IMPORTED_MODULE_23__["SightApiService"],
                _resolvers__WEBPACK_IMPORTED_MODULE_18__["SightsDataResolver"],
                _resolvers__WEBPACK_IMPORTED_MODULE_18__["SightInfoResolver"],
                _resolvers__WEBPACK_IMPORTED_MODULE_18__["AudiosDataResolver"],
                _services__WEBPACK_IMPORTED_MODULE_17__["MapsService"],
                _services__WEBPACK_IMPORTED_MODULE_17__["UploadService"],
                _services_styles_api_service__WEBPACK_IMPORTED_MODULE_25__["StylesApiService"],
                _resolvers__WEBPACK_IMPORTED_MODULE_18__["StylesDataResolver"],
                _services__WEBPACK_IMPORTED_MODULE_17__["AccesscodesApiService"],
                _resolvers_accesscodes_resolver__WEBPACK_IMPORTED_MODULE_26__["AccesscodInfoResolver"],
                _resolvers_accesscoddata_resolver__WEBPACK_IMPORTED_MODULE_27__["AccesscodeDataResolver"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/modules/dashboard/enums/index.ts":
/*!**********************************************!*\
  !*** ./src/modules/dashboard/enums/index.ts ***!
  \**********************************************/
/*! exports provided: RouteLength, SightLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _route_length_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route-length.enum */ "./src/modules/dashboard/enums/route-length.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouteLength", function() { return _route_length_enum__WEBPACK_IMPORTED_MODULE_0__["RouteLength"]; });

/* harmony import */ var _sight_length_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sight-length.enum */ "./src/modules/dashboard/enums/sight-length.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SightLength", function() { return _sight_length_enum__WEBPACK_IMPORTED_MODULE_1__["SightLength"]; });





/***/ }),

/***/ "./src/modules/dashboard/enums/route-length.enum.ts":
/*!**********************************************************!*\
  !*** ./src/modules/dashboard/enums/route-length.enum.ts ***!
  \**********************************************************/
/*! exports provided: RouteLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteLength", function() { return RouteLength; });
var RouteLength;
(function (RouteLength) {
    RouteLength["Short"] = "short";
    RouteLength["Medium"] = "medium";
    RouteLength["Long"] = "long";
})(RouteLength || (RouteLength = {}));


/***/ }),

/***/ "./src/modules/dashboard/enums/sight-length.enum.ts":
/*!**********************************************************!*\
  !*** ./src/modules/dashboard/enums/sight-length.enum.ts ***!
  \**********************************************************/
/*! exports provided: SightLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SightLength", function() { return SightLength; });
var SightLength;
(function (SightLength) {
    SightLength["Short"] = "short";
    SightLength["Medium"] = "medium";
    SightLength["Long"] = "long";
})(SightLength || (SightLength = {}));


/***/ }),

/***/ "./src/modules/dashboard/resolvers/accesscoddata.resolver.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/dashboard/resolvers/accesscoddata.resolver.ts ***!
  \*******************************************************************/
/*! exports provided: AccesscodeDataResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccesscodeDataResolver", function() { return AccesscodeDataResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _state_management_states_accesscodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state-management/states/accesscodes */ "./src/modules/dashboard/state-management/states/accesscodes/index.ts");






var AccesscodeDataResolver = /** @class */ (function () {
    function AccesscodeDataResolver(store, actions) {
        this.store = store;
        this.actions = actions;
    }
    AccesscodeDataResolver.prototype.resolve = function () {
        this.store.dispatch(new _state_management_states_accesscodes__WEBPACK_IMPORTED_MODULE_5__["AccesscodesActions"].LoadAccesscodesDataAction());
        return this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_state_management_states_accesscodes__WEBPACK_IMPORTED_MODULE_5__["AccesscodesActions"].Actions.SetAccesscodesData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    };
    AccesscodeDataResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]])
    ], AccesscodeDataResolver);
    return AccesscodeDataResolver;
}());



/***/ }),

/***/ "./src/modules/dashboard/resolvers/accesscodes.resolver.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/dashboard/resolvers/accesscodes.resolver.ts ***!
  \*****************************************************************/
/*! exports provided: AccesscodInfoResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccesscodInfoResolver", function() { return AccesscodInfoResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _state_management_states_accesscodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state-management/states/accesscodes */ "./src/modules/dashboard/state-management/states/accesscodes/index.ts");






var AccesscodInfoResolver = /** @class */ (function () {
    function AccesscodInfoResolver(store, actions) {
        this.store = store;
        this.actions = actions;
    }
    AccesscodInfoResolver.prototype.resolve = function (route) {
        this.store.dispatch(new _state_management_states_accesscodes__WEBPACK_IMPORTED_MODULE_5__["AccesscodesActions"].LoadActiveAccesscodesDataAction(route.params.id));
        return this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_state_management_states_accesscodes__WEBPACK_IMPORTED_MODULE_5__["AccesscodesActions"].Actions.SetActiveAccesscodData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    };
    AccesscodInfoResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]])
    ], AccesscodInfoResolver);
    return AccesscodInfoResolver;
}());



/***/ }),

/***/ "./src/modules/dashboard/resolvers/audiosdata.resolver.ts":
/*!****************************************************************!*\
  !*** ./src/modules/dashboard/resolvers/audiosdata.resolver.ts ***!
  \****************************************************************/
/*! exports provided: AudiosDataResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudiosDataResolver", function() { return AudiosDataResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_management_states_audios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state-management/states/audios */ "./src/modules/dashboard/state-management/states/audios/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AudiosDataResolver = /** @class */ (function () {
    function AudiosDataResolver(store, actions) {
        this.store = store;
        this.actions = actions;
    }
    AudiosDataResolver.prototype.resolve = function () {
        this.store.dispatch(new _state_management_states_audios__WEBPACK_IMPORTED_MODULE_3__["AudiosActions"].LoadAudiosDataAction());
        return this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_state_management_states_audios__WEBPACK_IMPORTED_MODULE_3__["AudiosActions"].Actions.SetAudiosData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
    };
    AudiosDataResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]])
    ], AudiosDataResolver);
    return AudiosDataResolver;
}());



/***/ }),

/***/ "./src/modules/dashboard/resolvers/citiesdata.resolver.ts":
/*!****************************************************************!*\
  !*** ./src/modules/dashboard/resolvers/citiesdata.resolver.ts ***!
  \****************************************************************/
/*! exports provided: CitiesDataResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesDataResolver", function() { return CitiesDataResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_management_states_cities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state-management/states/cities */ "./src/modules/dashboard/state-management/states/cities/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var CitiesDataResolver = /** @class */ (function () {
    function CitiesDataResolver(store, actions) {
        this.store = store;
        this.actions = actions;
    }
    CitiesDataResolver.prototype.resolve = function () {
        this.store.dispatch(new _state_management_states_cities__WEBPACK_IMPORTED_MODULE_3__["CitiesActions"].LoadCitiesDataAction());
        return this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_state_management_states_cities__WEBPACK_IMPORTED_MODULE_3__["CitiesActions"].Actions.SetCitiesData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
    };
    CitiesDataResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]])
    ], CitiesDataResolver);
    return CitiesDataResolver;
}());



/***/ }),

/***/ "./src/modules/dashboard/resolvers/city.resolver.ts":
/*!**********************************************************!*\
  !*** ./src/modules/dashboard/resolvers/city.resolver.ts ***!
  \**********************************************************/
/*! exports provided: CityInfoResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityInfoResolver", function() { return CityInfoResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_management_states_cities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state-management/states/cities */ "./src/modules/dashboard/state-management/states/cities/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var CityInfoResolver = /** @class */ (function () {
    function CityInfoResolver(store, actions) {
        this.store = store;
        this.actions = actions;
    }
    CityInfoResolver.prototype.resolve = function (route) {
        this.store.dispatch(new _state_management_states_cities__WEBPACK_IMPORTED_MODULE_3__["CitiesActions"].LoadActiveCityDataAction(route.params.id));
        return this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_state_management_states_cities__WEBPACK_IMPORTED_MODULE_3__["CitiesActions"].Actions.SetActiveCityData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
    };
    CityInfoResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]])
    ], CityInfoResolver);
    return CityInfoResolver;
}());



/***/ }),

/***/ "./src/modules/dashboard/resolvers/index.ts":
/*!**************************************************!*\
  !*** ./src/modules/dashboard/resolvers/index.ts ***!
  \**************************************************/
/*! exports provided: AccesscodeDataResolver, AccesscodInfoResolver, AudiosDataResolver, CitiesDataResolver, CityInfoResolver, RoutesDataResolver, RouteInfoResolver, SightsDataResolver, SightInfoResolver, StylesDataResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _audiosdata_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audiosdata.resolver */ "./src/modules/dashboard/resolvers/audiosdata.resolver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudiosDataResolver", function() { return _audiosdata_resolver__WEBPACK_IMPORTED_MODULE_0__["AudiosDataResolver"]; });

/* harmony import */ var _citiesdata_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./citiesdata.resolver */ "./src/modules/dashboard/resolvers/citiesdata.resolver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CitiesDataResolver", function() { return _citiesdata_resolver__WEBPACK_IMPORTED_MODULE_1__["CitiesDataResolver"]; });

/* harmony import */ var _city_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./city.resolver */ "./src/modules/dashboard/resolvers/city.resolver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CityInfoResolver", function() { return _city_resolver__WEBPACK_IMPORTED_MODULE_2__["CityInfoResolver"]; });

/* harmony import */ var _routesdata_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routesdata.resolver */ "./src/modules/dashboard/resolvers/routesdata.resolver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoutesDataResolver", function() { return _routesdata_resolver__WEBPACK_IMPORTED_MODULE_3__["RoutesDataResolver"]; });

/* harmony import */ var _route_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./route.resolver */ "./src/modules/dashboard/resolvers/route.resolver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouteInfoResolver", function() { return _route_resolver__WEBPACK_IMPORTED_MODULE_4__["RouteInfoResolver"]; });

/* harmony import */ var _sightsdata_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sightsdata.resolver */ "./src/modules/dashboard/resolvers/sightsdata.resolver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SightsDataResolver", function() { return _sightsdata_resolver__WEBPACK_IMPORTED_MODULE_5__["SightsDataResolver"]; });

/* harmony import */ var _sight_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sight.resolver */ "./src/modules/dashboard/resolvers/sight.resolver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SightInfoResolver", function() { return _sight_resolver__WEBPACK_IMPORTED_MODULE_6__["SightInfoResolver"]; });

/* harmony import */ var _stylesdata_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stylesdata.resolver */ "./src/modules/dashboard/resolvers/stylesdata.resolver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StylesDataResolver", function() { return _stylesdata_resolver__WEBPACK_IMPORTED_MODULE_7__["StylesDataResolver"]; });

/* harmony import */ var _accesscoddata_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./accesscoddata.resolver */ "./src/modules/dashboard/resolvers/accesscoddata.resolver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccesscodeDataResolver", function() { return _accesscoddata_resolver__WEBPACK_IMPORTED_MODULE_8__["AccesscodeDataResolver"]; });

/* harmony import */ var _accesscodes_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./accesscodes.resolver */ "./src/modules/dashboard/resolvers/accesscodes.resolver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccesscodInfoResolver", function() { return _accesscodes_resolver__WEBPACK_IMPORTED_MODULE_9__["AccesscodInfoResolver"]; });













/***/ }),

/***/ "./src/modules/dashboard/resolvers/route.resolver.ts":
/*!***********************************************************!*\
  !*** ./src/modules/dashboard/resolvers/route.resolver.ts ***!
  \***********************************************************/
/*! exports provided: RouteInfoResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteInfoResolver", function() { return RouteInfoResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_management_states_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state-management/states/route */ "./src/modules/dashboard/state-management/states/route/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var RouteInfoResolver = /** @class */ (function () {
    function RouteInfoResolver(store, actions) {
        this.store = store;
        this.actions = actions;
    }
    RouteInfoResolver.prototype.resolve = function (route) {
        this.store.dispatch(new _state_management_states_route__WEBPACK_IMPORTED_MODULE_3__["RouteActions"].LoadActiveRouteDataAction(route.params.id));
        return this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_state_management_states_route__WEBPACK_IMPORTED_MODULE_3__["RouteActions"].Actions.SetActiveRouteData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
    };
    RouteInfoResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]])
    ], RouteInfoResolver);
    return RouteInfoResolver;
}());



/***/ }),

/***/ "./src/modules/dashboard/resolvers/routesdata.resolver.ts":
/*!****************************************************************!*\
  !*** ./src/modules/dashboard/resolvers/routesdata.resolver.ts ***!
  \****************************************************************/
/*! exports provided: RoutesDataResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesDataResolver", function() { return RoutesDataResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_management_states_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state-management/states/route */ "./src/modules/dashboard/state-management/states/route/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var RoutesDataResolver = /** @class */ (function () {
    function RoutesDataResolver(store, actions) {
        this.store = store;
        this.actions = actions;
    }
    RoutesDataResolver.prototype.resolve = function () {
        this.store.dispatch(new _state_management_states_route__WEBPACK_IMPORTED_MODULE_3__["RouteActions"].LoadRoutesDataAction());
        return this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_state_management_states_route__WEBPACK_IMPORTED_MODULE_3__["RouteActions"].Actions.SetRoutesData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
    };
    RoutesDataResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]])
    ], RoutesDataResolver);
    return RoutesDataResolver;
}());



/***/ }),

/***/ "./src/modules/dashboard/resolvers/sight.resolver.ts":
/*!***********************************************************!*\
  !*** ./src/modules/dashboard/resolvers/sight.resolver.ts ***!
  \***********************************************************/
/*! exports provided: SightInfoResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SightInfoResolver", function() { return SightInfoResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_management_states_sight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state-management/states/sight */ "./src/modules/dashboard/state-management/states/sight/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var SightInfoResolver = /** @class */ (function () {
    function SightInfoResolver(store, actions) {
        this.store = store;
        this.actions = actions;
    }
    SightInfoResolver.prototype.resolve = function (route) {
        this.store.dispatch(new _state_management_states_sight__WEBPACK_IMPORTED_MODULE_3__["SightActions"].LoadActiveSightDataAction(route.params.id));
        return this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_state_management_states_sight__WEBPACK_IMPORTED_MODULE_3__["SightActions"].Actions.SetActiveSightData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
    };
    SightInfoResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]])
    ], SightInfoResolver);
    return SightInfoResolver;
}());



/***/ }),

/***/ "./src/modules/dashboard/resolvers/sightsdata.resolver.ts":
/*!****************************************************************!*\
  !*** ./src/modules/dashboard/resolvers/sightsdata.resolver.ts ***!
  \****************************************************************/
/*! exports provided: SightsDataResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SightsDataResolver", function() { return SightsDataResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_management_states_sight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state-management/states/sight */ "./src/modules/dashboard/state-management/states/sight/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var SightsDataResolver = /** @class */ (function () {
    function SightsDataResolver(store, actions) {
        this.store = store;
        this.actions = actions;
    }
    SightsDataResolver.prototype.resolve = function () {
        this.store.dispatch(new _state_management_states_sight__WEBPACK_IMPORTED_MODULE_3__["SightActions"].LoadSightsDataAction());
        return this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_state_management_states_sight__WEBPACK_IMPORTED_MODULE_3__["SightActions"].Actions.SetSightsData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
    };
    SightsDataResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]])
    ], SightsDataResolver);
    return SightsDataResolver;
}());



/***/ }),

/***/ "./src/modules/dashboard/resolvers/stylesdata.resolver.ts":
/*!****************************************************************!*\
  !*** ./src/modules/dashboard/resolvers/stylesdata.resolver.ts ***!
  \****************************************************************/
/*! exports provided: StylesDataResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylesDataResolver", function() { return StylesDataResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _state_management_states_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state-management/states/styles */ "./src/modules/dashboard/state-management/states/styles/index.ts");






var StylesDataResolver = /** @class */ (function () {
    function StylesDataResolver(store, actions) {
        this.store = store;
        this.actions = actions;
    }
    StylesDataResolver.prototype.resolve = function () {
        this.store.dispatch(new _state_management_states_styles__WEBPACK_IMPORTED_MODULE_5__["StylesActions"].LoadStylesDataAction());
        return this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_state_management_states_styles__WEBPACK_IMPORTED_MODULE_5__["StylesActions"].Actions.SetStylesData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    };
    StylesDataResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]])
    ], StylesDataResolver);
    return StylesDataResolver;
}());



/***/ }),

/***/ "./src/modules/dashboard/services/accesscodes-api.service.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/dashboard/services/accesscodes-api.service.ts ***!
  \*******************************************************************/
/*! exports provided: AccesscodesApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccesscodesApiService", function() { return AccesscodesApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var AccesscodesApiService = /** @class */ (function () {
    function AccesscodesApiService(afs) {
        this.afs = afs;
        this.accesscodesCollection = this.afs.collection('accesscodes');
    }
    AccesscodesApiService.prototype.getAccesscodes = function () {
        return this.accesscodesCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
        }); }));
    };
    AccesscodesApiService.prototype.getAccesscod = function (id) {
        var itemDoc = this.afs.doc("accesscodes/" + id);
        return itemDoc.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (city) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, city);
        }));
    };
    AccesscodesApiService.prototype.updateAccesscode = function (newAccesscod, id) {
        var itemDoc = this.afs.doc("accesscodes/" + id);
        var _newAccesscod = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, newAccesscod);
        delete _newAccesscod.id;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(itemDoc.update(_newAccesscod));
    };
    AccesscodesApiService.prototype.deleteAccesscodes = function (id) {
        var userDoc = this.afs.doc("accesscodes/" + id);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(userDoc.delete());
    };
    AccesscodesApiService.prototype.addAccesscodes = function (city) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.accesscodesCollection.add(city)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { }));
    };
    AccesscodesApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], AccesscodesApiService);
    return AccesscodesApiService;
}());



/***/ }),

/***/ "./src/modules/dashboard/services/audios-api.service.ts":
/*!**************************************************************!*\
  !*** ./src/modules/dashboard/services/audios-api.service.ts ***!
  \**************************************************************/
/*! exports provided: AudiosApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudiosApiService", function() { return AudiosApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var AudiosApiService = /** @class */ (function () {
    function AudiosApiService(afs) {
        this.afs = afs;
        this.audiosCollection = this.afs.collection('audios');
    }
    AudiosApiService.prototype.getAudios = function () {
        return this.audiosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
        }); }));
    };
    AudiosApiService.prototype.getAudio = function (id) {
        var itemDoc = this.afs.doc("audios/" + id);
        return itemDoc.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (audio) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, audio);
        }));
    };
    AudiosApiService.prototype.deleteAudio = function (id) {
        var userDoc = this.afs.doc("audios/" + id);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(userDoc.delete());
    };
    AudiosApiService.prototype.addAudio = function (audio) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.audiosCollection.add(audio)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (audio) { return audio.id; }));
    };
    AudiosApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], AudiosApiService);
    return AudiosApiService;
}());



/***/ }),

/***/ "./src/modules/dashboard/services/cityapi.service.ts":
/*!***********************************************************!*\
  !*** ./src/modules/dashboard/services/cityapi.service.ts ***!
  \***********************************************************/
/*! exports provided: CityApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityApiService", function() { return CityApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var CityApiService = /** @class */ (function () {
    function CityApiService(afs) {
        this.afs = afs;
        this.citysCollection = this.afs.collection('city');
    }
    CityApiService.prototype.getCities = function () {
        return this.citysCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
        }); }));
    };
    CityApiService.prototype.getCity = function (id) {
        var itemDoc = this.afs.doc("city/" + id);
        return itemDoc.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (city) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, city);
        }));
    };
    CityApiService.prototype.updateCity = function (newCity, id) {
        var itemDoc = this.afs.doc("city/" + id);
        var _newCity = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, newCity);
        delete _newCity.id;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(itemDoc.update(_newCity));
    };
    CityApiService.prototype.deleteCity = function (id) {
        var userDoc = this.afs.doc("city/" + id);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(userDoc.delete());
    };
    CityApiService.prototype.addCity = function (city) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.citysCollection.add(city)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { }));
    };
    CityApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], CityApiService);
    return CityApiService;
}());



/***/ }),

/***/ "./src/modules/dashboard/services/index.ts":
/*!*************************************************!*\
  !*** ./src/modules/dashboard/services/index.ts ***!
  \*************************************************/
/*! exports provided: RouteApiService, SightApiService, AudiosApiService, CityApiService, MapsService, UploadService, AccesscodesApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _audios_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audios-api.service */ "./src/modules/dashboard/services/audios-api.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudiosApiService", function() { return _audios_api_service__WEBPACK_IMPORTED_MODULE_0__["AudiosApiService"]; });

/* harmony import */ var _cityapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cityapi.service */ "./src/modules/dashboard/services/cityapi.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CityApiService", function() { return _cityapi_service__WEBPACK_IMPORTED_MODULE_1__["CityApiService"]; });

/* harmony import */ var _maps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maps.service */ "./src/modules/dashboard/services/maps.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapsService", function() { return _maps_service__WEBPACK_IMPORTED_MODULE_2__["MapsService"]; });

/* harmony import */ var _routeapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routeapi.service */ "./src/modules/dashboard/services/routeapi.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouteApiService", function() { return _routeapi_service__WEBPACK_IMPORTED_MODULE_3__["RouteApiService"]; });

/* harmony import */ var _sightapi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sightapi.service */ "./src/modules/dashboard/services/sightapi.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SightApiService", function() { return _sightapi_service__WEBPACK_IMPORTED_MODULE_4__["SightApiService"]; });

/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upload.service */ "./src/modules/dashboard/services/upload.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return _upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]; });

/* harmony import */ var _accesscodes_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accesscodes-api.service */ "./src/modules/dashboard/services/accesscodes-api.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccesscodesApiService", function() { return _accesscodes_api_service__WEBPACK_IMPORTED_MODULE_6__["AccesscodesApiService"]; });










/***/ }),

/***/ "./src/modules/dashboard/services/maps.service.ts":
/*!********************************************************!*\
  !*** ./src/modules/dashboard/services/maps.service.ts ***!
  \********************************************************/
/*! exports provided: MapsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsService", function() { return MapsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var places_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! places.js */ "./node_modules/places.js/index.js");
/* harmony import */ var places_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(places_js__WEBPACK_IMPORTED_MODULE_2__);



var markers = [];
var MapsService = /** @class */ (function () {
    function MapsService() {
    }
    MapsService.prototype.createMap = function (viewLat, viewLng) {
        var zoom = viewLat !== null && viewLng !== null ? 13 : 1;
        var map = L.map('map').setView([viewLat || 0, viewLng || 0], zoom); //viewLat || 51.505, viewLng || -0.09
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: '',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiZ3puZ3puIiwiYSI6ImNqc3N4NDEwOTFpb3M0YW9lYzFnNW43NDUifQ.SGCPcbkRSOTsZaY2D6ALKQ'
        }).addTo(map);
        var osmLayer = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            minZoom: 1,
            maxZoom: 13,
        });
        //map.setView(new L.LatLng(0, 0), 1);
        map.addLayer(osmLayer);
        var placesAutocomplete = places_js__WEBPACK_IMPORTED_MODULE_2__({
            appId: 'plNV2TW92I8R',
            apiKey: '3e9387d7ab0dcfe0fcbb0bbd59605779',
            container: document.querySelector('.location-input')
        });
        markers = [];
        placesAutocomplete.on('suggestions', handleOnSuggestions);
        placesAutocomplete.on('cursorchanged', handleOnCursorchanged);
        placesAutocomplete.on('change', handleOnChange);
        placesAutocomplete.on('clear', handleOnClear);
        function handleOnSuggestions(e) {
            markers.forEach(removeMarker);
            markers = [];
            if (e.suggestions.length === 0) {
                map.setView(new L.LatLng(0, 0), 1);
                return;
            }
            e.suggestions.forEach(addMarker);
            findBestZoom();
        }
        function handleOnChange(e) {
            markers
                .forEach(function (marker, markerIndex) {
                if (markerIndex === e.suggestionIndex) {
                    markers = [marker];
                    marker.setOpacity(1);
                    findBestZoom();
                }
                else {
                    removeMarker(marker);
                }
            });
        }
        function handleOnClear() {
            map.setView(new L.LatLng(0, 0), 1);
            markers.forEach(removeMarker);
        }
        function handleOnCursorchanged(e) {
            markers
                .forEach(function (marker, markerIndex) {
                if (markerIndex === e.suggestionIndex) {
                    marker.setOpacity(1);
                    marker.setZIndexOffset(1000);
                }
                else {
                    marker.setZIndexOffset(0);
                    marker.setOpacity(0.5);
                }
            });
        }
        function addMarker(suggestion) {
            var marker = L.marker(suggestion.latlng, { opacity: .4 });
            //marker.addTo(map);
            markers.push(marker);
        }
        function removeMarker(marker) {
            map.removeLayer(marker);
        }
        function findBestZoom() {
            var featureGroup = L.featureGroup(markers);
            map.fitBounds(featureGroup.getBounds().pad(0.5), { animate: false });
        }
        return map;
    };
    MapsService.prototype.setMarker = function (map, marker, lat, lng) {
        if (marker) {
            var latlng = L.latLng(lat, lng);
            marker.setLatLng(latlng);
            return marker;
        }
        else {
            return L.marker([lat, lng]).addTo(map);
        }
    };
    MapsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], MapsService);
    return MapsService;
}());



/***/ }),

/***/ "./src/modules/dashboard/services/routeapi.service.ts":
/*!************************************************************!*\
  !*** ./src/modules/dashboard/services/routeapi.service.ts ***!
  \************************************************************/
/*! exports provided: RouteApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteApiService", function() { return RouteApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var RouteApiService = /** @class */ (function () {
    function RouteApiService(afs) {
        this.afs = afs;
        this.RoutesCollection = this.afs.collection('itineraries');
    }
    RouteApiService.prototype.getRoutes = function () {
        return this.RoutesCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
        }); }));
    };
    RouteApiService.prototype.getRoute = function (id) {
        var itemDoc = this.afs.doc("itineraries/" + id);
        return itemDoc.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (route) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, route);
        }));
    };
    RouteApiService.prototype.updateRoute = function (newRoute, id) {
        var itemDoc = this.afs.doc("itineraries/" + id);
        var _newRoute = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, newRoute);
        delete _newRoute.id;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(itemDoc.update(_newRoute));
    };
    RouteApiService.prototype.deleteRoute = function (id) {
        var userDoc = this.afs.doc("itineraries/" + id);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(userDoc.delete());
    };
    RouteApiService.prototype.addRoute = function (route) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.RoutesCollection.add(route)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { }));
    };
    RouteApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], RouteApiService);
    return RouteApiService;
}());



/***/ }),

/***/ "./src/modules/dashboard/services/sightapi.service.ts":
/*!************************************************************!*\
  !*** ./src/modules/dashboard/services/sightapi.service.ts ***!
  \************************************************************/
/*! exports provided: SightApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SightApiService", function() { return SightApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var SightApiService = /** @class */ (function () {
    function SightApiService(afs) {
        this.afs = afs;
        this.sightsCollection = this.afs.collection('sights');
    }
    SightApiService.prototype.getSights = function () {
        return this.sightsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
        }); }));
    };
    SightApiService.prototype.getSight = function (id) {
        var itemDoc = this.afs.doc("sights/" + id);
        return itemDoc.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (sight) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, sight);
        }));
    };
    SightApiService.prototype.updateSight = function (newSight, id) {
        var itemDoc = this.afs.doc("sights/" + id);
        var _newSight = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, newSight);
        delete _newSight.id;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(itemDoc.update(_newSight));
    };
    SightApiService.prototype.deleteSight = function (id) {
        var userDoc = this.afs.doc("sights/" + id);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(userDoc.delete());
    };
    SightApiService.prototype.addSight = function (sight) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.sightsCollection.add(sight)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { }));
    };
    SightApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], SightApiService);
    return SightApiService;
}());



/***/ }),

/***/ "./src/modules/dashboard/services/styles-api.service.ts":
/*!**************************************************************!*\
  !*** ./src/modules/dashboard/services/styles-api.service.ts ***!
  \**************************************************************/
/*! exports provided: StylesApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylesApiService", function() { return StylesApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var StylesApiService = /** @class */ (function () {
    function StylesApiService(afs) {
        this.afs = afs;
        this.stylesCollection = this.afs.collection('styles');
    }
    StylesApiService.prototype.getStyles = function () {
        return this.stylesCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
        }); }));
    };
    StylesApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], StylesApiService);
    return StylesApiService;
}());



/***/ }),

/***/ "./src/modules/dashboard/services/upload.service.ts":
/*!**********************************************************!*\
  !*** ./src/modules/dashboard/services/upload.service.ts ***!
  \**********************************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var UploadService = /** @class */ (function () {
    function UploadService(storage) {
        this.storage = storage;
    }
    UploadService.prototype.uploadImage = function (event, folder) {
        return this.upload(event.item(0), folder);
    };
    UploadService.prototype.uploadAudio = function (event, folder) {
        return this.upload(event.item(0), folder);
    };
    UploadService.prototype.upload = function (file, folder) {
        var _this = this;
        var path = folder + "/" + new Date().getTime() + "_" + file.name;
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        var task = this.storage.upload(path, file);
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            _this.storage.ref(path).getDownloadURL().subscribe(function (url) {
                subject.next({ url: url, fileName: file.name });
            });
        })).subscribe();
        return subject;
    };
    UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/modules/dashboard/state-management/index.ts":
/*!*********************************************************!*\
  !*** ./src/modules/dashboard/state-management/index.ts ***!
  \*********************************************************/
/*! exports provided: templarReducers, getCitiesState, getRoutesState, getSightState, getAudiosState, getStyleState, getAccesscodesState, getCitiesData, getActiveCityData, citiesSelectors, getRoutesData, getActiveRouteData, routesSelectors, getSightsData, getActiveSightData, sightSelectors, getAudiosData, audioSelectors, getStylesData, styleSelectors, getAccesscodesData, getActiveAccesscodData, accesscodesSelectors, AudiosActions, AudiosEffects, audiosReducer, CitiesActions, CitiesEffects, citiesReducer, RouteActions, RoutesEffects, routeReducer, SightActions, SightsEffects, sightReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./states */ "./src/modules/dashboard/state-management/states/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudiosActions", function() { return _states__WEBPACK_IMPORTED_MODULE_0__["AudiosActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudiosEffects", function() { return _states__WEBPACK_IMPORTED_MODULE_0__["AudiosEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "audiosReducer", function() { return _states__WEBPACK_IMPORTED_MODULE_0__["audiosReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CitiesActions", function() { return _states__WEBPACK_IMPORTED_MODULE_0__["CitiesActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CitiesEffects", function() { return _states__WEBPACK_IMPORTED_MODULE_0__["CitiesEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "citiesReducer", function() { return _states__WEBPACK_IMPORTED_MODULE_0__["citiesReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouteActions", function() { return _states__WEBPACK_IMPORTED_MODULE_0__["RouteActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoutesEffects", function() { return _states__WEBPACK_IMPORTED_MODULE_0__["RoutesEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "routeReducer", function() { return _states__WEBPACK_IMPORTED_MODULE_0__["routeReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SightActions", function() { return _states__WEBPACK_IMPORTED_MODULE_0__["SightActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SightsEffects", function() { return _states__WEBPACK_IMPORTED_MODULE_0__["SightsEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sightReducer", function() { return _states__WEBPACK_IMPORTED_MODULE_0__["sightReducer"]; });

/* harmony import */ var _state_management__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state-management */ "./src/modules/dashboard/state-management/state-management.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templarReducers", function() { return _state_management__WEBPACK_IMPORTED_MODULE_1__["templarReducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCitiesState", function() { return _state_management__WEBPACK_IMPORTED_MODULE_1__["getCitiesState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRoutesState", function() { return _state_management__WEBPACK_IMPORTED_MODULE_1__["getRoutesState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSightState", function() { return _state_management__WEBPACK_IMPORTED_MODULE_1__["getSightState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAudiosState", function() { return _state_management__WEBPACK_IMPORTED_MODULE_1__["getAudiosState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStyleState", function() { return _state_management__WEBPACK_IMPORTED_MODULE_1__["getStyleState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAccesscodesState", function() { return _state_management__WEBPACK_IMPORTED_MODULE_1__["getAccesscodesState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCitiesData", function() { return _state_management__WEBPACK_IMPORTED_MODULE_1__["getCitiesData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActiveCityData", function() { return _state_management__WEBPACK_IMPORTED_MODULE_1__["getActiveCityData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "citiesSelectors", function() { return _state_management__WEBPACK_IMPORTED_MODULE_1__["citiesSelectors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRoutesData", function() { return _state_management__WEBPACK_IMPORTED_MODULE_1__["getRoutesData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActiveRouteData", function() { return _state_management__WEBPACK_IMPORTED_MODULE_1__["getActiveRouteData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "routesSelectors", function() { return _state_management__WEBPACK_IMPORTED_MODULE_1__["routesSelectors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSightsData", function() { return _state_management__WEBPACK_IMPORTED_MODULE_1__["getSightsData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActiveSightData", function() { return _state_management__WEBPACK_IMPORTED_MODULE_1__["getActiveSightData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sightSelectors", function() { return _state_management__WEBPACK_IMPORTED_MODULE_1__["sightSelectors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAudiosData", function() { return _state_management__WEBPACK_IMPORTED_MODULE_1__["getAudiosData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "audioSelectors", function() { return _state_management__WEBPACK_IMPORTED_MODULE_1__["audioSelectors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStylesData", function() { return _state_management__WEBPACK_IMPORTED_MODULE_1__["getStylesData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styleSelectors", function() { return _state_management__WEBPACK_IMPORTED_MODULE_1__["styleSelectors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAccesscodesData", function() { return _state_management__WEBPACK_IMPORTED_MODULE_1__["getAccesscodesData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActiveAccesscodData", function() { return _state_management__WEBPACK_IMPORTED_MODULE_1__["getActiveAccesscodData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "accesscodesSelectors", function() { return _state_management__WEBPACK_IMPORTED_MODULE_1__["accesscodesSelectors"]; });





/***/ }),

/***/ "./src/modules/dashboard/state-management/state-management.ts":
/*!********************************************************************!*\
  !*** ./src/modules/dashboard/state-management/state-management.ts ***!
  \********************************************************************/
/*! exports provided: templarReducers, getCitiesState, getRoutesState, getSightState, getAudiosState, getStyleState, getAccesscodesState, getCitiesData, getActiveCityData, citiesSelectors, getRoutesData, getActiveRouteData, routesSelectors, getSightsData, getActiveSightData, sightSelectors, getAudiosData, audioSelectors, getStylesData, styleSelectors, getAccesscodesData, getActiveAccesscodData, accesscodesSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templarReducers", function() { return templarReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCitiesState", function() { return getCitiesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoutesState", function() { return getRoutesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSightState", function() { return getSightState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAudiosState", function() { return getAudiosState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyleState", function() { return getStyleState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccesscodesState", function() { return getAccesscodesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCitiesData", function() { return getCitiesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveCityData", function() { return getActiveCityData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "citiesSelectors", function() { return citiesSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoutesData", function() { return getRoutesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveRouteData", function() { return getActiveRouteData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routesSelectors", function() { return routesSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSightsData", function() { return getSightsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveSightData", function() { return getActiveSightData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sightSelectors", function() { return sightSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAudiosData", function() { return getAudiosData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audioSelectors", function() { return audioSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStylesData", function() { return getStylesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleSelectors", function() { return styleSelectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccesscodesData", function() { return getAccesscodesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveAccesscodData", function() { return getActiveAccesscodData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accesscodesSelectors", function() { return accesscodesSelectors; });
/* harmony import */ var _states_cities_cities_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./states/cities/cities.reducer */ "./src/modules/dashboard/state-management/states/cities/cities.reducer.ts");
/* harmony import */ var _states_route_route_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./states/route/route.reducer */ "./src/modules/dashboard/state-management/states/route/route.reducer.ts");
/* harmony import */ var _states_sight_sight_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./states/sight/sight.reducer */ "./src/modules/dashboard/state-management/states/sight/sight.reducer.ts");
/* harmony import */ var _states_audios_audios_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./states/audios/audios.reducer */ "./src/modules/dashboard/state-management/states/audios/audios.reducer.ts");
/* harmony import */ var _states_styles_styles_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./states/styles/styles.reducer */ "./src/modules/dashboard/state-management/states/styles/styles.reducer.ts");
/* harmony import */ var _states_accesscodes_accesscodes_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./states/accesscodes/accesscodes.reducer */ "./src/modules/dashboard/state-management/states/accesscodes/accesscodes.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");







var templarReducers = {
    templar_cities: _states_cities_cities_reducer__WEBPACK_IMPORTED_MODULE_0__["citiesReducer"],
    templar_routes: _states_route_route_reducer__WEBPACK_IMPORTED_MODULE_1__["routeReducer"],
    templar_sights: _states_sight_sight_reducer__WEBPACK_IMPORTED_MODULE_2__["sightReducer"],
    templar_audios: _states_audios_audios_reducer__WEBPACK_IMPORTED_MODULE_3__["audiosReducer"],
    templar_styles: _states_styles_styles_reducer__WEBPACK_IMPORTED_MODULE_4__["stylesReducer"],
    templat_accesscodes: _states_accesscodes_accesscodes_reducer__WEBPACK_IMPORTED_MODULE_5__["accesscodesReducer"],
};
var getCitiesState = function (state) { return state ? state.templar_cities : null; };
var getRoutesState = function (state) { return state ? state.templar_routes : null; };
var getSightState = function (state) { return state ? state.templar_sights : null; };
var getAudiosState = function (state) { return state ? state.templar_audios : null; };
var getStyleState = function (state) { return state ? state.templar_styles : null; };
var getAccesscodesState = function (state) { return state ? state.templat_accesscodes : null; };
// ***** Cities selectors *****
var getCitiesData = function (state) { return state ? state.cities : undefined; };
var getActiveCityData = function (state) { return state ? state.activeCity : undefined; };
var citiesSelectors = {
    getCitiesSelector: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["createSelector"])(getCitiesState, getCitiesData),
    getActiveCitySelector: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["createSelector"])(getCitiesState, getActiveCityData)
};
// ***** Routes selectors *****
var getRoutesData = function (state) { return state ? state.routes : undefined; };
var getActiveRouteData = function (state) { return state ? state.activeRoute : undefined; };
var routesSelectors = {
    getRoutesSelector: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["createSelector"])(getRoutesState, getRoutesData),
    getActiveRouteSelector: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["createSelector"])(getRoutesState, getActiveRouteData)
};
// ***** Sight selectors *****
var getSightsData = function (state) { return state ? state.sights : undefined; };
var getActiveSightData = function (state) { return state ? state.activeSight : undefined; };
var sightSelectors = {
    getSightsSelector: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["createSelector"])(getSightState, getSightsData),
    getActiveSightSelector: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["createSelector"])(getSightState, getActiveSightData)
};
// ***** Audios selectors *****
var getAudiosData = function (state) { return state ? state.audios : undefined; };
var audioSelectors = {
    getAudiosSelector: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["createSelector"])(getAudiosState, getAudiosData)
};
// ***** Styles selectors *****
var getStylesData = function (state) { return state ? state.styles : undefined; };
var styleSelectors = {
    getStylesSelector: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["createSelector"])(getStyleState, getStylesData)
};
// ***** Accesscodes selectors *****
var getAccesscodesData = function (state) { return state ? state.accesscodes : undefined; };
var getActiveAccesscodData = function (state) { return state ? state.activeAccesscod : undefined; };
var accesscodesSelectors = {
    getAccesscodesSelector: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["createSelector"])(getAccesscodesState, getAccesscodesData),
    getActiveAccesscodSelector: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["createSelector"])(getAccesscodesState, getActiveAccesscodData)
};


/***/ }),

/***/ "./src/modules/dashboard/state-management/states/accesscodes/accesscodes.actions.ts":
/*!******************************************************************************************!*\
  !*** ./src/modules/dashboard/state-management/states/accesscodes/accesscodes.actions.ts ***!
  \******************************************************************************************/
/*! exports provided: AccesscodesActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccesscodesActions", function() { return AccesscodesActions; });
var AccesscodesActions;
(function (AccesscodesActions) {
    var Actions;
    (function (Actions) {
        Actions["LoadAccesscodesData"] = "[Accesscodes] LoadAccesscodesData";
        Actions["SetAccesscodesData"] = "[Accesscodes] SetAccesscodesData";
        Actions["SetActiveAccesscodData"] = "[Accesscodes] SetActiveAccesscodData";
        Actions["DeleteAccesscodesData"] = "[Accesscodes] DeleteAccesscodesData";
        Actions["AddAccesscodesData"] = "[Accesscodes] AddAccesscodesData";
        Actions["LoadActiveAccesscodesData"] = "[Accesscodes] LoadActiveAccesscodesData";
        Actions["UpdateActiveAccesscodesData"] = "[Accesscodes] UpdateActiveAccesscodesData";
    })(Actions = AccesscodesActions.Actions || (AccesscodesActions.Actions = {}));
    var LoadAccesscodesDataAction = /** @class */ (function () {
        function LoadAccesscodesDataAction() {
            this.type = Actions.LoadAccesscodesData;
        }
        return LoadAccesscodesDataAction;
    }());
    AccesscodesActions.LoadAccesscodesDataAction = LoadAccesscodesDataAction;
    var LoadActiveAccesscodesDataAction = /** @class */ (function () {
        function LoadActiveAccesscodesDataAction(payload) {
            this.payload = payload;
            this.type = Actions.LoadActiveAccesscodesData;
        }
        return LoadActiveAccesscodesDataAction;
    }());
    AccesscodesActions.LoadActiveAccesscodesDataAction = LoadActiveAccesscodesDataAction;
    var SetAccesscodesDataAction = /** @class */ (function () {
        function SetAccesscodesDataAction(payload) {
            this.payload = payload;
            this.type = Actions.SetAccesscodesData;
        }
        return SetAccesscodesDataAction;
    }());
    AccesscodesActions.SetAccesscodesDataAction = SetAccesscodesDataAction;
    var SetActiveAccesscodDataAction = /** @class */ (function () {
        function SetActiveAccesscodDataAction(payload) {
            this.payload = payload;
            this.type = Actions.SetActiveAccesscodData;
        }
        return SetActiveAccesscodDataAction;
    }());
    AccesscodesActions.SetActiveAccesscodDataAction = SetActiveAccesscodDataAction;
    var UpdateActiveAccesscodesDataAction = /** @class */ (function () {
        function UpdateActiveAccesscodesDataAction(payload) {
            this.payload = payload;
            this.type = Actions.UpdateActiveAccesscodesData;
        }
        return UpdateActiveAccesscodesDataAction;
    }());
    AccesscodesActions.UpdateActiveAccesscodesDataAction = UpdateActiveAccesscodesDataAction;
    var DeleteAccesscodesDataAction = /** @class */ (function () {
        function DeleteAccesscodesDataAction(payload) {
            this.payload = payload;
            this.type = Actions.DeleteAccesscodesData;
        }
        return DeleteAccesscodesDataAction;
    }());
    AccesscodesActions.DeleteAccesscodesDataAction = DeleteAccesscodesDataAction;
    var AddAccesscodesDataAction = /** @class */ (function () {
        function AddAccesscodesDataAction(payload) {
            this.payload = payload;
            this.type = Actions.AddAccesscodesData;
        }
        return AddAccesscodesDataAction;
    }());
    AccesscodesActions.AddAccesscodesDataAction = AddAccesscodesDataAction;
})(AccesscodesActions || (AccesscodesActions = {}));


/***/ }),

/***/ "./src/modules/dashboard/state-management/states/accesscodes/accesscodes.effects.ts":
/*!******************************************************************************************!*\
  !*** ./src/modules/dashboard/state-management/states/accesscodes/accesscodes.effects.ts ***!
  \******************************************************************************************/
/*! exports provided: AccesscodesEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccesscodesEffects", function() { return AccesscodesEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _accesscodes_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accesscodes.actions */ "./src/modules/dashboard/state-management/states/accesscodes/accesscodes.actions.ts");
/* harmony import */ var src_modules_dashboard_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/modules/dashboard/services */ "./src/modules/dashboard/services/index.ts");







var AccesscodesEffects = /** @class */ (function () {
    function AccesscodesEffects(actions, AccesscodesapiService, store) {
        var _this = this;
        this.actions = actions;
        this.AccesscodesapiService = AccesscodesapiService;
        this.store = store;
        this.loadAccesscodesData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_accesscodes_actions__WEBPACK_IMPORTED_MODULE_5__["AccesscodesActions"].Actions.LoadAccesscodesData))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            _this.AccesscodesapiService.getAccesscodes().subscribe(function (cities) {
                _this.store.dispatch(new _accesscodes_actions__WEBPACK_IMPORTED_MODULE_5__["AccesscodesActions"].SetAccesscodesDataAction(cities));
            });
            return [];
        }));
        this.deleteAccesscodesData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_accesscodes_actions__WEBPACK_IMPORTED_MODULE_5__["AccesscodesActions"].Actions.DeleteAccesscodesData))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            var id = action['payload'];
            _this.AccesscodesapiService.deleteAccesscodes(id).subscribe();
            return [];
        }));
        this.addAccesscodesData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_accesscodes_actions__WEBPACK_IMPORTED_MODULE_5__["AccesscodesActions"].Actions.AddAccesscodesData))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            var cityData = action['payload'];
            _this.AccesscodesapiService.addAccesscodes(cityData).subscribe();
            return [];
        }));
        this.loadAccesscodesInfoData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_accesscodes_actions__WEBPACK_IMPORTED_MODULE_5__["AccesscodesActions"].Actions.LoadActiveAccesscodesData))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            var id = action['payload'];
            if (id) {
                _this.getAccesscodesSubscription = _this.AccesscodesapiService.getAccesscod(id).subscribe(function (city) {
                    _this.store.dispatch(new _accesscodes_actions__WEBPACK_IMPORTED_MODULE_5__["AccesscodesActions"].SetActiveAccesscodDataAction(city));
                });
            }
            else {
                _this.store.dispatch(new _accesscodes_actions__WEBPACK_IMPORTED_MODULE_5__["AccesscodesActions"].SetActiveAccesscodDataAction(null));
                if (_this.getAccesscodesSubscription) {
                    _this.getAccesscodesSubscription.unsubscribe();
                    _this.getAccesscodesSubscription = null;
                }
            }
            return [];
        }));
        this.updateActiveAccesscodesData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_accesscodes_actions__WEBPACK_IMPORTED_MODULE_5__["AccesscodesActions"].Actions.UpdateActiveAccesscodesData))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            var payload = action['payload'];
            _this.AccesscodesapiService.updateAccesscode(payload.accesscodesData, payload.id).subscribe();
            return [];
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AccesscodesEffects.prototype, "loadAccesscodesData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AccesscodesEffects.prototype, "deleteAccesscodesData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AccesscodesEffects.prototype, "addAccesscodesData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AccesscodesEffects.prototype, "loadAccesscodesInfoData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AccesscodesEffects.prototype, "updateActiveAccesscodesData$", void 0);
    AccesscodesEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            src_modules_dashboard_services__WEBPACK_IMPORTED_MODULE_6__["AccesscodesApiService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], AccesscodesEffects);
    return AccesscodesEffects;
}());



/***/ }),

/***/ "./src/modules/dashboard/state-management/states/accesscodes/accesscodes.reducer.ts":
/*!******************************************************************************************!*\
  !*** ./src/modules/dashboard/state-management/states/accesscodes/accesscodes.reducer.ts ***!
  \******************************************************************************************/
/*! exports provided: accesscodesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accesscodesReducer", function() { return accesscodesReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _accesscodes_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accesscodes.actions */ "./src/modules/dashboard/state-management/states/accesscodes/accesscodes.actions.ts");


var initialState = {
    accesscodes: [],
    activeAccesscod: null
};
function accesscodesReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _accesscodes_actions__WEBPACK_IMPORTED_MODULE_1__["AccesscodesActions"].Actions.SetAccesscodesData: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { accesscodes: action["payload"] });
        }
        case _accesscodes_actions__WEBPACK_IMPORTED_MODULE_1__["AccesscodesActions"].Actions.SetActiveAccesscodData: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { activeAccesscod: action["payload"] });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/modules/dashboard/state-management/states/accesscodes/index.ts":
/*!****************************************************************************!*\
  !*** ./src/modules/dashboard/state-management/states/accesscodes/index.ts ***!
  \****************************************************************************/
/*! exports provided: AccesscodesActions, AccesscodesEffects, accesscodesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accesscodes_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accesscodes.actions */ "./src/modules/dashboard/state-management/states/accesscodes/accesscodes.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccesscodesActions", function() { return _accesscodes_actions__WEBPACK_IMPORTED_MODULE_0__["AccesscodesActions"]; });

/* harmony import */ var _accesscodes_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accesscodes.effects */ "./src/modules/dashboard/state-management/states/accesscodes/accesscodes.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccesscodesEffects", function() { return _accesscodes_effects__WEBPACK_IMPORTED_MODULE_1__["AccesscodesEffects"]; });

/* harmony import */ var _accesscodes_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accesscodes.reducer */ "./src/modules/dashboard/state-management/states/accesscodes/accesscodes.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "accesscodesReducer", function() { return _accesscodes_reducer__WEBPACK_IMPORTED_MODULE_2__["accesscodesReducer"]; });






/***/ }),

/***/ "./src/modules/dashboard/state-management/states/audios/audios.actions.ts":
/*!********************************************************************************!*\
  !*** ./src/modules/dashboard/state-management/states/audios/audios.actions.ts ***!
  \********************************************************************************/
/*! exports provided: AudiosActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudiosActions", function() { return AudiosActions; });
var AudiosActions;
(function (AudiosActions) {
    var Actions;
    (function (Actions) {
        Actions["LoadAudiosData"] = "[Audios] LoadAudiosData";
        Actions["SetAudiosData"] = "[Audios] SetAudiosData";
        Actions["DeleteAudioData"] = "[Audios] DeleteAudioData";
        Actions["AddAudioData"] = "[Audios] AddAudioData";
        Actions["AudioDataAdded"] = "[Audios] AudioDataAdded";
    })(Actions = AudiosActions.Actions || (AudiosActions.Actions = {}));
    var LoadAudiosDataAction = /** @class */ (function () {
        function LoadAudiosDataAction() {
            this.type = Actions.LoadAudiosData;
        }
        return LoadAudiosDataAction;
    }());
    AudiosActions.LoadAudiosDataAction = LoadAudiosDataAction;
    var SetAudiosDataAction = /** @class */ (function () {
        function SetAudiosDataAction(payload) {
            this.payload = payload;
            this.type = Actions.SetAudiosData;
        }
        return SetAudiosDataAction;
    }());
    AudiosActions.SetAudiosDataAction = SetAudiosDataAction;
    var DeleteAudioDataAction = /** @class */ (function () {
        function DeleteAudioDataAction(payload) {
            this.payload = payload;
            this.type = Actions.DeleteAudioData;
        }
        return DeleteAudioDataAction;
    }());
    AudiosActions.DeleteAudioDataAction = DeleteAudioDataAction;
    var AddAudioDataAction = /** @class */ (function () {
        function AddAudioDataAction(payload) {
            this.payload = payload;
            this.type = Actions.AddAudioData;
        }
        return AddAudioDataAction;
    }());
    AudiosActions.AddAudioDataAction = AddAudioDataAction;
    var AudioDataAddedAction = /** @class */ (function () {
        function AudioDataAddedAction(payload) {
            this.payload = payload;
            this.type = Actions.AudioDataAdded;
        }
        return AudioDataAddedAction;
    }());
    AudiosActions.AudioDataAddedAction = AudioDataAddedAction;
})(AudiosActions || (AudiosActions = {}));


/***/ }),

/***/ "./src/modules/dashboard/state-management/states/audios/audios.effects.ts":
/*!********************************************************************************!*\
  !*** ./src/modules/dashboard/state-management/states/audios/audios.effects.ts ***!
  \********************************************************************************/
/*! exports provided: AudiosEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudiosEffects", function() { return AudiosEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _audios_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audios.actions */ "./src/modules/dashboard/state-management/states/audios/audios.actions.ts");
/* harmony import */ var src_modules_dashboard_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/modules/dashboard/services */ "./src/modules/dashboard/services/index.ts");







var AudiosEffects = /** @class */ (function () {
    function AudiosEffects(actions, audiosApiService, store) {
        var _this = this;
        this.actions = actions;
        this.audiosApiService = audiosApiService;
        this.store = store;
        this.loadAudiosData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_audios_actions__WEBPACK_IMPORTED_MODULE_5__["AudiosActions"].Actions.LoadAudiosData))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            _this.audiosApiService.getAudios().subscribe(function (audios) {
                _this.store.dispatch(new _audios_actions__WEBPACK_IMPORTED_MODULE_5__["AudiosActions"].SetAudiosDataAction(audios));
            });
            return [];
        }));
        this.deleteAudioData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_audios_actions__WEBPACK_IMPORTED_MODULE_5__["AudiosActions"].Actions.DeleteAudioData))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            var id = action['payload'];
            _this.audiosApiService.deleteAudio(id).subscribe();
            return [];
        }));
        this.addAudioData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_audios_actions__WEBPACK_IMPORTED_MODULE_5__["AudiosActions"].Actions.AddAudioData))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            var audioData = action['payload'];
            _this.audiosApiService.addAudio(audioData).subscribe(function (id) {
                _this.store.dispatch(new _audios_actions__WEBPACK_IMPORTED_MODULE_5__["AudiosActions"].AudioDataAddedAction(id));
            });
            return [];
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AudiosEffects.prototype, "loadAudiosData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AudiosEffects.prototype, "deleteAudioData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AudiosEffects.prototype, "addAudioData$", void 0);
    AudiosEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            src_modules_dashboard_services__WEBPACK_IMPORTED_MODULE_6__["AudiosApiService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], AudiosEffects);
    return AudiosEffects;
}());



/***/ }),

/***/ "./src/modules/dashboard/state-management/states/audios/audios.reducer.ts":
/*!********************************************************************************!*\
  !*** ./src/modules/dashboard/state-management/states/audios/audios.reducer.ts ***!
  \********************************************************************************/
/*! exports provided: audiosReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audiosReducer", function() { return audiosReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _audios_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audios.actions */ "./src/modules/dashboard/state-management/states/audios/audios.actions.ts");


var initialState = {
    audios: []
};
function audiosReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _audios_actions__WEBPACK_IMPORTED_MODULE_1__["AudiosActions"].Actions.SetAudiosData: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { audios: action["payload"] });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/modules/dashboard/state-management/states/audios/index.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/dashboard/state-management/states/audios/index.ts ***!
  \***********************************************************************/
/*! exports provided: AudiosActions, AudiosEffects, audiosReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _audios_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audios.actions */ "./src/modules/dashboard/state-management/states/audios/audios.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudiosActions", function() { return _audios_actions__WEBPACK_IMPORTED_MODULE_0__["AudiosActions"]; });

/* harmony import */ var _audios_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audios.effects */ "./src/modules/dashboard/state-management/states/audios/audios.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudiosEffects", function() { return _audios_effects__WEBPACK_IMPORTED_MODULE_1__["AudiosEffects"]; });

/* harmony import */ var _audios_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audios.reducer */ "./src/modules/dashboard/state-management/states/audios/audios.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "audiosReducer", function() { return _audios_reducer__WEBPACK_IMPORTED_MODULE_2__["audiosReducer"]; });






/***/ }),

/***/ "./src/modules/dashboard/state-management/states/cities/cities.actions.ts":
/*!********************************************************************************!*\
  !*** ./src/modules/dashboard/state-management/states/cities/cities.actions.ts ***!
  \********************************************************************************/
/*! exports provided: CitiesActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesActions", function() { return CitiesActions; });
var CitiesActions;
(function (CitiesActions) {
    var Actions;
    (function (Actions) {
        Actions["LoadCitiesData"] = "[Cities] LoadCitiesData";
        Actions["SetCitiesData"] = "[Cities] SetCitiesData";
        Actions["SetActiveCityData"] = "[Cities] SetActiveCityData";
        Actions["DeleteCityData"] = "[Cities] DeleteCityData";
        Actions["AddCityData"] = "[Cities] AddCityData";
        Actions["LoadActiveCityData"] = "[Cities] LoadActiveCityData";
        Actions["UpdateActiveCityData"] = "[Cities] UpdateActiveCityData";
    })(Actions = CitiesActions.Actions || (CitiesActions.Actions = {}));
    var LoadCitiesDataAction = /** @class */ (function () {
        function LoadCitiesDataAction() {
            this.type = Actions.LoadCitiesData;
        }
        return LoadCitiesDataAction;
    }());
    CitiesActions.LoadCitiesDataAction = LoadCitiesDataAction;
    var LoadActiveCityDataAction = /** @class */ (function () {
        function LoadActiveCityDataAction(payload) {
            this.payload = payload;
            this.type = Actions.LoadActiveCityData;
        }
        return LoadActiveCityDataAction;
    }());
    CitiesActions.LoadActiveCityDataAction = LoadActiveCityDataAction;
    var SetCitiesDataAction = /** @class */ (function () {
        function SetCitiesDataAction(payload) {
            this.payload = payload;
            this.type = Actions.SetCitiesData;
        }
        return SetCitiesDataAction;
    }());
    CitiesActions.SetCitiesDataAction = SetCitiesDataAction;
    var SetActiveCityDataAction = /** @class */ (function () {
        function SetActiveCityDataAction(payload) {
            this.payload = payload;
            this.type = Actions.SetActiveCityData;
        }
        return SetActiveCityDataAction;
    }());
    CitiesActions.SetActiveCityDataAction = SetActiveCityDataAction;
    var UpdateActiveCityDataAction = /** @class */ (function () {
        function UpdateActiveCityDataAction(payload) {
            this.payload = payload;
            this.type = Actions.UpdateActiveCityData;
        }
        return UpdateActiveCityDataAction;
    }());
    CitiesActions.UpdateActiveCityDataAction = UpdateActiveCityDataAction;
    var DeleteCityDataAction = /** @class */ (function () {
        function DeleteCityDataAction(payload) {
            this.payload = payload;
            this.type = Actions.DeleteCityData;
        }
        return DeleteCityDataAction;
    }());
    CitiesActions.DeleteCityDataAction = DeleteCityDataAction;
    var AddCityDataAction = /** @class */ (function () {
        function AddCityDataAction(payload) {
            this.payload = payload;
            this.type = Actions.AddCityData;
        }
        return AddCityDataAction;
    }());
    CitiesActions.AddCityDataAction = AddCityDataAction;
})(CitiesActions || (CitiesActions = {}));


/***/ }),

/***/ "./src/modules/dashboard/state-management/states/cities/cities.effects.ts":
/*!********************************************************************************!*\
  !*** ./src/modules/dashboard/state-management/states/cities/cities.effects.ts ***!
  \********************************************************************************/
/*! exports provided: CitiesEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesEffects", function() { return CitiesEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _cities_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cities.actions */ "./src/modules/dashboard/state-management/states/cities/cities.actions.ts");
/* harmony import */ var src_modules_dashboard_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/modules/dashboard/services */ "./src/modules/dashboard/services/index.ts");







var CitiesEffects = /** @class */ (function () {
    function CitiesEffects(actions, CityapiService, store) {
        var _this = this;
        this.actions = actions;
        this.CityapiService = CityapiService;
        this.store = store;
        this.loadCitiessData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_cities_actions__WEBPACK_IMPORTED_MODULE_5__["CitiesActions"].Actions.LoadCitiesData))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            _this.CityapiService.getCities().subscribe(function (cities) {
                cities.sort(function (a, b) {
                    return a.position < b.position ? -1 : 1;
                });
                _this.store.dispatch(new _cities_actions__WEBPACK_IMPORTED_MODULE_5__["CitiesActions"].SetCitiesDataAction(cities));
            });
            return [];
        }));
        this.deleteCityData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_cities_actions__WEBPACK_IMPORTED_MODULE_5__["CitiesActions"].Actions.DeleteCityData))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            var id = action['payload'];
            _this.CityapiService.deleteCity(id).subscribe();
            return [];
        }));
        this.addCityData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_cities_actions__WEBPACK_IMPORTED_MODULE_5__["CitiesActions"].Actions.AddCityData))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            var cityData = action['payload'];
            _this.CityapiService.addCity(cityData).subscribe();
            return [];
        }));
        this.loadCityInfoData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_cities_actions__WEBPACK_IMPORTED_MODULE_5__["CitiesActions"].Actions.LoadActiveCityData))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            var id = action['payload'];
            if (id) {
                _this.getCitySubscription = _this.CityapiService.getCity(id).subscribe(function (city) {
                    _this.store.dispatch(new _cities_actions__WEBPACK_IMPORTED_MODULE_5__["CitiesActions"].SetActiveCityDataAction(city));
                });
            }
            else {
                _this.store.dispatch(new _cities_actions__WEBPACK_IMPORTED_MODULE_5__["CitiesActions"].SetActiveCityDataAction(null));
                if (_this.getCitySubscription) {
                    _this.getCitySubscription.unsubscribe();
                    _this.getCitySubscription = null;
                }
            }
            return [];
        }));
        this.updateActiveCityData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_cities_actions__WEBPACK_IMPORTED_MODULE_5__["CitiesActions"].Actions.UpdateActiveCityData))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            var payload = action['payload'];
            _this.CityapiService.updateCity(payload.cityData, payload.id).subscribe();
            return [];
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CitiesEffects.prototype, "loadCitiessData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CitiesEffects.prototype, "deleteCityData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CitiesEffects.prototype, "addCityData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CitiesEffects.prototype, "loadCityInfoData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CitiesEffects.prototype, "updateActiveCityData$", void 0);
    CitiesEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            src_modules_dashboard_services__WEBPACK_IMPORTED_MODULE_6__["CityApiService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], CitiesEffects);
    return CitiesEffects;
}());



/***/ }),

/***/ "./src/modules/dashboard/state-management/states/cities/cities.reducer.ts":
/*!********************************************************************************!*\
  !*** ./src/modules/dashboard/state-management/states/cities/cities.reducer.ts ***!
  \********************************************************************************/
/*! exports provided: citiesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "citiesReducer", function() { return citiesReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _cities_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cities.actions */ "./src/modules/dashboard/state-management/states/cities/cities.actions.ts");


var initialState = {
    cities: [],
    activeCity: null
};
function citiesReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _cities_actions__WEBPACK_IMPORTED_MODULE_1__["CitiesActions"].Actions.SetCitiesData: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { cities: action["payload"] });
        }
        case _cities_actions__WEBPACK_IMPORTED_MODULE_1__["CitiesActions"].Actions.SetActiveCityData: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { activeCity: action["payload"] });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/modules/dashboard/state-management/states/cities/index.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/dashboard/state-management/states/cities/index.ts ***!
  \***********************************************************************/
/*! exports provided: CitiesActions, CitiesEffects, citiesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cities_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cities.actions */ "./src/modules/dashboard/state-management/states/cities/cities.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CitiesActions", function() { return _cities_actions__WEBPACK_IMPORTED_MODULE_0__["CitiesActions"]; });

/* harmony import */ var _cities_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cities.effects */ "./src/modules/dashboard/state-management/states/cities/cities.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CitiesEffects", function() { return _cities_effects__WEBPACK_IMPORTED_MODULE_1__["CitiesEffects"]; });

/* harmony import */ var _cities_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cities.reducer */ "./src/modules/dashboard/state-management/states/cities/cities.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "citiesReducer", function() { return _cities_reducer__WEBPACK_IMPORTED_MODULE_2__["citiesReducer"]; });






/***/ }),

/***/ "./src/modules/dashboard/state-management/states/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/dashboard/state-management/states/index.ts ***!
  \****************************************************************/
/*! exports provided: AudiosActions, AudiosEffects, audiosReducer, CitiesActions, CitiesEffects, citiesReducer, RouteActions, RoutesEffects, routeReducer, SightActions, SightsEffects, sightReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _audios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audios */ "./src/modules/dashboard/state-management/states/audios/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudiosActions", function() { return _audios__WEBPACK_IMPORTED_MODULE_0__["AudiosActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudiosEffects", function() { return _audios__WEBPACK_IMPORTED_MODULE_0__["AudiosEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "audiosReducer", function() { return _audios__WEBPACK_IMPORTED_MODULE_0__["audiosReducer"]; });

/* harmony import */ var _cities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cities */ "./src/modules/dashboard/state-management/states/cities/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CitiesActions", function() { return _cities__WEBPACK_IMPORTED_MODULE_1__["CitiesActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CitiesEffects", function() { return _cities__WEBPACK_IMPORTED_MODULE_1__["CitiesEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "citiesReducer", function() { return _cities__WEBPACK_IMPORTED_MODULE_1__["citiesReducer"]; });

/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route */ "./src/modules/dashboard/state-management/states/route/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouteActions", function() { return _route__WEBPACK_IMPORTED_MODULE_2__["RouteActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoutesEffects", function() { return _route__WEBPACK_IMPORTED_MODULE_2__["RoutesEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "routeReducer", function() { return _route__WEBPACK_IMPORTED_MODULE_2__["routeReducer"]; });

/* harmony import */ var _sight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sight */ "./src/modules/dashboard/state-management/states/sight/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SightActions", function() { return _sight__WEBPACK_IMPORTED_MODULE_3__["SightActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SightsEffects", function() { return _sight__WEBPACK_IMPORTED_MODULE_3__["SightsEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sightReducer", function() { return _sight__WEBPACK_IMPORTED_MODULE_3__["sightReducer"]; });







/***/ }),

/***/ "./src/modules/dashboard/state-management/states/route/index.ts":
/*!**********************************************************************!*\
  !*** ./src/modules/dashboard/state-management/states/route/index.ts ***!
  \**********************************************************************/
/*! exports provided: RouteActions, RoutesEffects, routeReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _route_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route.actions */ "./src/modules/dashboard/state-management/states/route/route.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouteActions", function() { return _route_actions__WEBPACK_IMPORTED_MODULE_0__["RouteActions"]; });

/* harmony import */ var _route_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route.effects */ "./src/modules/dashboard/state-management/states/route/route.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoutesEffects", function() { return _route_effects__WEBPACK_IMPORTED_MODULE_1__["RoutesEffects"]; });

/* harmony import */ var _route_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route.reducer */ "./src/modules/dashboard/state-management/states/route/route.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "routeReducer", function() { return _route_reducer__WEBPACK_IMPORTED_MODULE_2__["routeReducer"]; });






/***/ }),

/***/ "./src/modules/dashboard/state-management/states/route/route.actions.ts":
/*!******************************************************************************!*\
  !*** ./src/modules/dashboard/state-management/states/route/route.actions.ts ***!
  \******************************************************************************/
/*! exports provided: RouteActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteActions", function() { return RouteActions; });
var RouteActions;
(function (RouteActions) {
    var Actions;
    (function (Actions) {
        Actions["LoadRoutesData"] = "[Route] LoadRoutesData";
        Actions["SetRoutesData"] = "[Route] SetRoutesData";
        Actions["SetActiveRouteData"] = "[Route] SetActiveRouteData";
        Actions["DeleteRouteData"] = "[Route] DeleteRouteData";
        Actions["AddRouteData"] = "[Route] AddRouteData";
        Actions["LoadActiveRouteData"] = "[Route] LoadActiveRouteData";
        Actions["UpdateActiveRouteData"] = "[Route] UpdateActiveRouteData";
    })(Actions = RouteActions.Actions || (RouteActions.Actions = {}));
    var LoadRoutesDataAction = /** @class */ (function () {
        function LoadRoutesDataAction() {
            this.type = Actions.LoadRoutesData;
        }
        return LoadRoutesDataAction;
    }());
    RouteActions.LoadRoutesDataAction = LoadRoutesDataAction;
    var LoadActiveRouteDataAction = /** @class */ (function () {
        function LoadActiveRouteDataAction(payload) {
            this.payload = payload;
            this.type = Actions.LoadActiveRouteData;
        }
        return LoadActiveRouteDataAction;
    }());
    RouteActions.LoadActiveRouteDataAction = LoadActiveRouteDataAction;
    var SetRoutesDataAction = /** @class */ (function () {
        function SetRoutesDataAction(payload) {
            this.payload = payload;
            this.type = Actions.SetRoutesData;
        }
        return SetRoutesDataAction;
    }());
    RouteActions.SetRoutesDataAction = SetRoutesDataAction;
    var SetActiveRouteDataAction = /** @class */ (function () {
        function SetActiveRouteDataAction(payload) {
            this.payload = payload;
            this.type = Actions.SetActiveRouteData;
        }
        return SetActiveRouteDataAction;
    }());
    RouteActions.SetActiveRouteDataAction = SetActiveRouteDataAction;
    var UpdateActiveRouteDataAction = /** @class */ (function () {
        function UpdateActiveRouteDataAction(payload) {
            this.payload = payload;
            this.type = Actions.UpdateActiveRouteData;
        }
        return UpdateActiveRouteDataAction;
    }());
    RouteActions.UpdateActiveRouteDataAction = UpdateActiveRouteDataAction;
    var DeleteRouteDataAction = /** @class */ (function () {
        function DeleteRouteDataAction(payload) {
            this.payload = payload;
            this.type = Actions.DeleteRouteData;
        }
        return DeleteRouteDataAction;
    }());
    RouteActions.DeleteRouteDataAction = DeleteRouteDataAction;
    var AddRouteDataAction = /** @class */ (function () {
        function AddRouteDataAction(payload) {
            this.payload = payload;
            this.type = Actions.AddRouteData;
        }
        return AddRouteDataAction;
    }());
    RouteActions.AddRouteDataAction = AddRouteDataAction;
})(RouteActions || (RouteActions = {}));


/***/ }),

/***/ "./src/modules/dashboard/state-management/states/route/route.effects.ts":
/*!******************************************************************************!*\
  !*** ./src/modules/dashboard/state-management/states/route/route.effects.ts ***!
  \******************************************************************************/
/*! exports provided: RoutesEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesEffects", function() { return RoutesEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _route_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./route.actions */ "./src/modules/dashboard/state-management/states/route/route.actions.ts");
/* harmony import */ var src_modules_dashboard_services_routeapi_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/modules/dashboard/services/routeapi.service */ "./src/modules/dashboard/services/routeapi.service.ts");







var RoutesEffects = /** @class */ (function () {
    function RoutesEffects(actions, RouteApiService, store) {
        var _this = this;
        this.actions = actions;
        this.RouteApiService = RouteApiService;
        this.store = store;
        this.loadRoutesData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_route_actions__WEBPACK_IMPORTED_MODULE_5__["RouteActions"].Actions.LoadRoutesData))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            _this.RouteApiService.getRoutes().subscribe(function (route) {
                _this.store.dispatch(new _route_actions__WEBPACK_IMPORTED_MODULE_5__["RouteActions"].SetRoutesDataAction(route));
            });
            return [];
        }));
        this.deleteRouteData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_route_actions__WEBPACK_IMPORTED_MODULE_5__["RouteActions"].Actions.DeleteRouteData))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            var id = action['payload'];
            _this.RouteApiService.deleteRoute(id).subscribe();
            return [];
        }));
        this.addRouteData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_route_actions__WEBPACK_IMPORTED_MODULE_5__["RouteActions"].Actions.AddRouteData))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            var routeData = action['payload'];
            _this.RouteApiService.addRoute(routeData).subscribe();
            return [];
        }));
        this.loadRouteInfoData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_route_actions__WEBPACK_IMPORTED_MODULE_5__["RouteActions"].Actions.LoadActiveRouteData))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            var id = action['payload'];
            if (id) {
                _this.getRouteSubscription = _this.RouteApiService.getRoute(id).subscribe(function (route) {
                    _this.store.dispatch(new _route_actions__WEBPACK_IMPORTED_MODULE_5__["RouteActions"].SetActiveRouteDataAction(route));
                });
            }
            else {
                _this.store.dispatch(new _route_actions__WEBPACK_IMPORTED_MODULE_5__["RouteActions"].SetActiveRouteDataAction(null));
                if (_this.getRouteSubscription) {
                    _this.getRouteSubscription.unsubscribe();
                    _this.getRouteSubscription = null;
                }
            }
            return [];
        }));
        this.updateRouteRouteData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_route_actions__WEBPACK_IMPORTED_MODULE_5__["RouteActions"].Actions.UpdateActiveRouteData))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            var payload = action['payload'];
            _this.RouteApiService.updateRoute(payload.routeData, payload.id).subscribe();
            return [];
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RoutesEffects.prototype, "loadRoutesData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RoutesEffects.prototype, "deleteRouteData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RoutesEffects.prototype, "addRouteData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RoutesEffects.prototype, "loadRouteInfoData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RoutesEffects.prototype, "updateRouteRouteData$", void 0);
    RoutesEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            src_modules_dashboard_services_routeapi_service__WEBPACK_IMPORTED_MODULE_6__["RouteApiService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], RoutesEffects);
    return RoutesEffects;
}());



/***/ }),

/***/ "./src/modules/dashboard/state-management/states/route/route.reducer.ts":
/*!******************************************************************************!*\
  !*** ./src/modules/dashboard/state-management/states/route/route.reducer.ts ***!
  \******************************************************************************/
/*! exports provided: routeReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeReducer", function() { return routeReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _route_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route.actions */ "./src/modules/dashboard/state-management/states/route/route.actions.ts");


var initialState = {
    routes: [],
    activeRoute: null
};
function routeReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _route_actions__WEBPACK_IMPORTED_MODULE_1__["RouteActions"].Actions.SetRoutesData: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { routes: action["payload"] });
        }
        case _route_actions__WEBPACK_IMPORTED_MODULE_1__["RouteActions"].Actions.SetActiveRouteData: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { activeRoute: action["payload"] });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/modules/dashboard/state-management/states/sight/index.ts":
/*!**********************************************************************!*\
  !*** ./src/modules/dashboard/state-management/states/sight/index.ts ***!
  \**********************************************************************/
/*! exports provided: SightActions, SightsEffects, sightReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sight_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sight.actions */ "./src/modules/dashboard/state-management/states/sight/sight.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SightActions", function() { return _sight_actions__WEBPACK_IMPORTED_MODULE_0__["SightActions"]; });

/* harmony import */ var _sight_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sight.effects */ "./src/modules/dashboard/state-management/states/sight/sight.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SightsEffects", function() { return _sight_effects__WEBPACK_IMPORTED_MODULE_1__["SightsEffects"]; });

/* harmony import */ var _sight_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sight.reducer */ "./src/modules/dashboard/state-management/states/sight/sight.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sightReducer", function() { return _sight_reducer__WEBPACK_IMPORTED_MODULE_2__["sightReducer"]; });






/***/ }),

/***/ "./src/modules/dashboard/state-management/states/sight/sight.actions.ts":
/*!******************************************************************************!*\
  !*** ./src/modules/dashboard/state-management/states/sight/sight.actions.ts ***!
  \******************************************************************************/
/*! exports provided: SightActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SightActions", function() { return SightActions; });
var SightActions;
(function (SightActions) {
    var Actions;
    (function (Actions) {
        Actions["LoadSightsData"] = "[Sight] LoadSightsData";
        Actions["SetSightsData"] = "[Sight] SetSightsData";
        Actions["SetActiveSightData"] = "[Sight] SetActiveSightData";
        Actions["DeleteSightData"] = "[Sight] DeleteSightData";
        Actions["AddSightData"] = "[Sight] AddSightData";
        Actions["LoadActiveSightData"] = "[Sight] LoadActiveSightData";
        Actions["UpdateActiveSightData"] = "[Sight] UpdateActiveSightData";
    })(Actions = SightActions.Actions || (SightActions.Actions = {}));
    var LoadSightsDataAction = /** @class */ (function () {
        function LoadSightsDataAction() {
            this.type = Actions.LoadSightsData;
        }
        return LoadSightsDataAction;
    }());
    SightActions.LoadSightsDataAction = LoadSightsDataAction;
    var LoadActiveSightDataAction = /** @class */ (function () {
        function LoadActiveSightDataAction(payload) {
            this.payload = payload;
            this.type = Actions.LoadActiveSightData;
        }
        return LoadActiveSightDataAction;
    }());
    SightActions.LoadActiveSightDataAction = LoadActiveSightDataAction;
    var SetSightsDataAction = /** @class */ (function () {
        function SetSightsDataAction(payload) {
            this.payload = payload;
            this.type = Actions.SetSightsData;
        }
        return SetSightsDataAction;
    }());
    SightActions.SetSightsDataAction = SetSightsDataAction;
    var SetActiveSightDataAction = /** @class */ (function () {
        function SetActiveSightDataAction(payload) {
            this.payload = payload;
            this.type = Actions.SetActiveSightData;
        }
        return SetActiveSightDataAction;
    }());
    SightActions.SetActiveSightDataAction = SetActiveSightDataAction;
    var UpdateActiveSightDataAction = /** @class */ (function () {
        function UpdateActiveSightDataAction(payload) {
            this.payload = payload;
            this.type = Actions.UpdateActiveSightData;
        }
        return UpdateActiveSightDataAction;
    }());
    SightActions.UpdateActiveSightDataAction = UpdateActiveSightDataAction;
    var DeleteSightDataAction = /** @class */ (function () {
        function DeleteSightDataAction(payload) {
            this.payload = payload;
            this.type = Actions.DeleteSightData;
        }
        return DeleteSightDataAction;
    }());
    SightActions.DeleteSightDataAction = DeleteSightDataAction;
    var AddSightDataAction = /** @class */ (function () {
        function AddSightDataAction(payload) {
            this.payload = payload;
            this.type = Actions.AddSightData;
        }
        return AddSightDataAction;
    }());
    SightActions.AddSightDataAction = AddSightDataAction;
})(SightActions || (SightActions = {}));


/***/ }),

/***/ "./src/modules/dashboard/state-management/states/sight/sight.effects.ts":
/*!******************************************************************************!*\
  !*** ./src/modules/dashboard/state-management/states/sight/sight.effects.ts ***!
  \******************************************************************************/
/*! exports provided: SightsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SightsEffects", function() { return SightsEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _sight_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sight.actions */ "./src/modules/dashboard/state-management/states/sight/sight.actions.ts");
/* harmony import */ var src_modules_dashboard_services_sightapi_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/modules/dashboard/services/sightapi.service */ "./src/modules/dashboard/services/sightapi.service.ts");







var SightsEffects = /** @class */ (function () {
    function SightsEffects(actions, SightApiService, store) {
        var _this = this;
        this.actions = actions;
        this.SightApiService = SightApiService;
        this.store = store;
        this.loadSightsData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_sight_actions__WEBPACK_IMPORTED_MODULE_5__["SightActions"].Actions.LoadSightsData))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            _this.SightApiService.getSights().subscribe(function (Sight) {
                Sight.sort(function (a, b) {
                    return a.position < b.position ? -1 : 1;
                });
                _this.store.dispatch(new _sight_actions__WEBPACK_IMPORTED_MODULE_5__["SightActions"].SetSightsDataAction(Sight));
            });
            return [];
        }));
        this.deleteSightData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_sight_actions__WEBPACK_IMPORTED_MODULE_5__["SightActions"].Actions.DeleteSightData))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            var id = action['payload'];
            _this.SightApiService.deleteSight(id).subscribe();
            return [];
        }));
        this.addSightData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_sight_actions__WEBPACK_IMPORTED_MODULE_5__["SightActions"].Actions.AddSightData))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            var SightData = action['payload'];
            _this.SightApiService.addSight(SightData).subscribe();
            return [];
        }));
        this.loadSightInfoData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_sight_actions__WEBPACK_IMPORTED_MODULE_5__["SightActions"].Actions.LoadActiveSightData))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            var id = action['payload'];
            if (id) {
                _this.getSightsubscription = _this.SightApiService.getSight(id).subscribe(function (Sight) {
                    _this.store.dispatch(new _sight_actions__WEBPACK_IMPORTED_MODULE_5__["SightActions"].SetActiveSightDataAction(Sight));
                });
            }
            else {
                _this.store.dispatch(new _sight_actions__WEBPACK_IMPORTED_MODULE_5__["SightActions"].SetActiveSightDataAction(null));
                if (_this.getSightsubscription) {
                    _this.getSightsubscription.unsubscribe();
                    _this.getSightsubscription = null;
                }
            }
            return [];
        }));
        this.updateSightSightData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_sight_actions__WEBPACK_IMPORTED_MODULE_5__["SightActions"].Actions.UpdateActiveSightData))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            var payload = action['payload'];
            _this.SightApiService.updateSight(payload.sightData, payload.id).subscribe();
            return [];
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SightsEffects.prototype, "loadSightsData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SightsEffects.prototype, "deleteSightData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SightsEffects.prototype, "addSightData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SightsEffects.prototype, "loadSightInfoData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SightsEffects.prototype, "updateSightSightData$", void 0);
    SightsEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            src_modules_dashboard_services_sightapi_service__WEBPACK_IMPORTED_MODULE_6__["SightApiService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], SightsEffects);
    return SightsEffects;
}());



/***/ }),

/***/ "./src/modules/dashboard/state-management/states/sight/sight.reducer.ts":
/*!******************************************************************************!*\
  !*** ./src/modules/dashboard/state-management/states/sight/sight.reducer.ts ***!
  \******************************************************************************/
/*! exports provided: sightReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sightReducer", function() { return sightReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sight_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sight.actions */ "./src/modules/dashboard/state-management/states/sight/sight.actions.ts");


var initialState = {
    sights: [],
    activeSight: null
};
function sightReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _sight_actions__WEBPACK_IMPORTED_MODULE_1__["SightActions"].Actions.SetSightsData: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { sights: action["payload"] });
        }
        case _sight_actions__WEBPACK_IMPORTED_MODULE_1__["SightActions"].Actions.SetActiveSightData: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { activeSight: action["payload"] });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/modules/dashboard/state-management/states/styles/index.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/dashboard/state-management/states/styles/index.ts ***!
  \***********************************************************************/
/*! exports provided: StylesActions, StylesEffects, stylesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.actions */ "./src/modules/dashboard/state-management/states/styles/styles.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StylesActions", function() { return _styles_actions__WEBPACK_IMPORTED_MODULE_0__["StylesActions"]; });

/* harmony import */ var _styles_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.effects */ "./src/modules/dashboard/state-management/states/styles/styles.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StylesEffects", function() { return _styles_effects__WEBPACK_IMPORTED_MODULE_1__["StylesEffects"]; });

/* harmony import */ var _styles_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.reducer */ "./src/modules/dashboard/state-management/states/styles/styles.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stylesReducer", function() { return _styles_reducer__WEBPACK_IMPORTED_MODULE_2__["stylesReducer"]; });






/***/ }),

/***/ "./src/modules/dashboard/state-management/states/styles/styles.actions.ts":
/*!********************************************************************************!*\
  !*** ./src/modules/dashboard/state-management/states/styles/styles.actions.ts ***!
  \********************************************************************************/
/*! exports provided: StylesActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylesActions", function() { return StylesActions; });
var StylesActions;
(function (StylesActions) {
    var Actions;
    (function (Actions) {
        Actions["LoadStylesData"] = "[Styles] LoadAudiosData";
        Actions["SetStylesData"] = "[Styles] SetAudiosData";
    })(Actions = StylesActions.Actions || (StylesActions.Actions = {}));
    var LoadStylesDataAction = /** @class */ (function () {
        function LoadStylesDataAction() {
            this.type = Actions.LoadStylesData;
        }
        return LoadStylesDataAction;
    }());
    StylesActions.LoadStylesDataAction = LoadStylesDataAction;
    var SetStylesDataAction = /** @class */ (function () {
        function SetStylesDataAction(payload) {
            this.payload = payload;
            this.type = Actions.SetStylesData;
        }
        return SetStylesDataAction;
    }());
    StylesActions.SetStylesDataAction = SetStylesDataAction;
})(StylesActions || (StylesActions = {}));


/***/ }),

/***/ "./src/modules/dashboard/state-management/states/styles/styles.effects.ts":
/*!********************************************************************************!*\
  !*** ./src/modules/dashboard/state-management/states/styles/styles.effects.ts ***!
  \********************************************************************************/
/*! exports provided: StylesEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylesEffects", function() { return StylesEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _styles_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.actions */ "./src/modules/dashboard/state-management/states/styles/styles.actions.ts");
/* harmony import */ var src_modules_dashboard_services_styles_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/modules/dashboard/services/styles-api.service */ "./src/modules/dashboard/services/styles-api.service.ts");







var StylesEffects = /** @class */ (function () {
    function StylesEffects(actions, stylesApiService, store) {
        var _this = this;
        this.actions = actions;
        this.stylesApiService = stylesApiService;
        this.store = store;
        this.loadStylesData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_styles_actions__WEBPACK_IMPORTED_MODULE_5__["StylesActions"].Actions.LoadStylesData))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (action) {
            _this.stylesApiService.getStyles().subscribe(function (styles) {
                _this.store.dispatch(new _styles_actions__WEBPACK_IMPORTED_MODULE_5__["StylesActions"].SetStylesDataAction(styles));
            });
            return [];
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StylesEffects.prototype, "loadStylesData$", void 0);
    StylesEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            src_modules_dashboard_services_styles_api_service__WEBPACK_IMPORTED_MODULE_6__["StylesApiService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], StylesEffects);
    return StylesEffects;
}());



/***/ }),

/***/ "./src/modules/dashboard/state-management/states/styles/styles.reducer.ts":
/*!********************************************************************************!*\
  !*** ./src/modules/dashboard/state-management/states/styles/styles.reducer.ts ***!
  \********************************************************************************/
/*! exports provided: stylesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stylesReducer", function() { return stylesReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _styles_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.actions */ "./src/modules/dashboard/state-management/states/styles/styles.actions.ts");


var initialState = {
    styles: []
};
function stylesReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _styles_actions__WEBPACK_IMPORTED_MODULE_1__["StylesActions"].Actions.SetStylesData: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { styles: action["payload"] });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/modules/shared/components/abstract.component.ts":
/*!*************************************************************!*\
  !*** ./src/modules/shared/components/abstract.component.ts ***!
  \*************************************************************/
/*! exports provided: AbstractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractComponent", function() { return AbstractComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var AbstractComponent = /** @class */ (function () {
    function AbstractComponent() {
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();
    }
    AbstractComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    };
    return AbstractComponent;
}());



/***/ }),

/***/ "./src/modules/shared/components/index.ts":
/*!************************************************!*\
  !*** ./src/modules/shared/components/index.ts ***!
  \************************************************/
/*! exports provided: AbstractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.component */ "./src/modules/shared/components/abstract.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractComponent", function() { return _abstract_component__WEBPACK_IMPORTED_MODULE_0__["AbstractComponent"]; });




/***/ }),

/***/ "./src/modules/shared/constants/index.ts":
/*!***********************************************!*\
  !*** ./src/modules/shared/constants/index.ts ***!
  \***********************************************/
/*! exports provided: URL_PATTERN, DEFAULT_LANG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _patterns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patterns */ "./src/modules/shared/constants/patterns.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "URL_PATTERN", function() { return _patterns__WEBPACK_IMPORTED_MODULE_0__["URL_PATTERN"]; });

/* harmony import */ var _translation_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translation-constants */ "./src/modules/shared/constants/translation-constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LANG", function() { return _translation_constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_LANG"]; });





/***/ }),

/***/ "./src/modules/shared/constants/patterns.ts":
/*!**************************************************!*\
  !*** ./src/modules/shared/constants/patterns.ts ***!
  \**************************************************/
/*! exports provided: URL_PATTERN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_PATTERN", function() { return URL_PATTERN; });
var URL_PATTERN = '(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?';


/***/ }),

/***/ "./src/modules/shared/constants/translation-constants.ts":
/*!***************************************************************!*\
  !*** ./src/modules/shared/constants/translation-constants.ts ***!
  \***************************************************************/
/*! exports provided: DEFAULT_LANG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LANG", function() { return DEFAULT_LANG; });
var DEFAULT_LANG = '_en';


/***/ }),

/***/ "./src/modules/shared/index.ts":
/*!*************************************!*\
  !*** ./src/modules/shared/index.ts ***!
  \*************************************/
/*! exports provided: AbstractComponent, URL_PATTERN, DEFAULT_LANG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/modules/shared/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["AbstractComponent"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/modules/shared/constants/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "URL_PATTERN", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["URL_PATTERN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LANG", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_LANG"]; });





/***/ }),

/***/ "./src/modules/sign-in/components/index.ts":
/*!*************************************************!*\
  !*** ./src/modules/sign-in/components/index.ts ***!
  \*************************************************/
/*! exports provided: SignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sign_sign_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign/sign.component */ "./src/modules/sign-in/components/sign/sign.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignComponent", function() { return _sign_sign_component__WEBPACK_IMPORTED_MODULE_0__["SignComponent"]; });




/***/ }),

/***/ "./src/modules/sign-in/components/sign/sign.component.html":
/*!*****************************************************************!*\
  !*** ./src/modules/sign-in/components/sign/sign.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"main-panel ps ps--active-y\">\n    <div class=\"panel-header panel-header-sm\">Go! Templars</div>\n    <div class=\"content\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-12 col-sign-in\">\n          <div class=\"card \">\n            <div class=\"card-header \">\n              <h5 class=\"title text-center\">Sign In</h5>\n            </div>\n            <div class=\"card-body \">\n              <form class=\"form\" novalidate=\"\" [formGroup]=\"signInForm\" (ngSubmit)=\"logIn()\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <label>Login(123)</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Login\" formControlName=\"account\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <label>Password(123)</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"footer text-center\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-round btn-lg btn-block\" [disabled]=\"signInForm.invalid\">Sign In</button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div> \n</div>\n\n<!--<div class=\"row justify-content-center\">\n  <div class=\"col-md-4 content-center\">\n    <div class=\"card card-login card-plain\">\n      <form class=\"form\" novalidate=\"\" [formGroup]=\"signInForm\" (ngSubmit)=\"logIn()\">\n        <div class=\"header header-primary text-center\">\n          <div class=\"logo-container\">\n            <img alt=\"\" src=\"\">\n          </div>\n        </div>\n        <div class=\"content\">\n          <div class=\"input-group form-group-no-border input-lg\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"> <i class=\"now-ui-icons users_circle-08\"></i></span>\n            </div>\n            <input class=\"form-control\" formControlName=\"account\" placeholder=\"Account\" type=\"text\">\n          </div>\n          <div class=\"input-group form-group-no-border input-lg\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"now-ui-icons text_caps-small\"></i></span>\n            </div>\n            <input class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" type=\"text\">\n          </div>\n        </div>\n        <div class=\"footer text-center\">\n          <button type=\"submit\" class=\"btn btn-primary btn-round btn-lg btn-block\" [disabled]=\"signInForm.invalid\">Log In</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>-->"

/***/ }),

/***/ "./src/modules/sign-in/components/sign/sign.component.scss":
/*!*****************************************************************!*\
  !*** ./src/modules/sign-in/components/sign/sign.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .panel-header {\n  padding-top: 30px;\n  color: white;\n  text-align: center;\n  font-size: 30px; }\n\n:host .main-panel {\n  width: 100%;\n  min-height: 100%; }\n\n:host .main-panel .content {\n    margin-top: -30px; }\n\n:host .main-panel .content .col-sign-in {\n      flex-basis: 350px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL3NpZ24taW4vY29tcG9uZW50cy9zaWduL0Q6XFxBbmd1bGFyXFxnb1RlbXAvc3JjXFxtb2R1bGVzXFxzaWduLWluXFxjb21wb25lbnRzXFxzaWduXFxzaWduLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUxuQjtFQVFJLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFUcEI7SUFXTSxpQkFBaUIsRUFBQTs7QUFYdkI7TUFjUSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvbW9kdWxlcy9zaWduLWluL2NvbXBvbmVudHMvc2lnbi9zaWduLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAucGFuZWwtaGVhZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuICAubWFpbi1wYW5lbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAuY29udGVudCB7XG4gICAgICBtYXJnaW4tdG9wOiAtMzBweDtcblxuICAgICAgLmNvbC1zaWduLWluIHtcbiAgICAgICAgZmxleC1iYXNpczogMzUwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/modules/sign-in/components/sign/sign.component.ts":
/*!***************************************************************!*\
  !*** ./src/modules/sign-in/components/sign/sign.component.ts ***!
  \***************************************************************/
/*! exports provided: SignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignComponent", function() { return SignComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var _services_sign_in_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/sign-in.service */ "./src/modules/sign-in/services/sign-in.service.ts");






var USER_ACCOUNT = '123';
var USER_PASSWORD = '123';
var SignComponent = /** @class */ (function () {
    function SignComponent(router, formBuilder, signInService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.signInService = signInService;
        this.token = false;
        this.signInForm = this.formBuilder.group({
            account: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
                ]]
        });
    }
    SignComponent.prototype.logIn = function () {
        if (this.signInForm.value.account == USER_ACCOUNT && this.signInForm.value.password == USER_PASSWORD) {
            this.signInService.setToken(this.signInForm.value.account);
            this.router.navigate(['']);
        }
    };
    SignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign',
            template: __webpack_require__(/*! ./sign.component.html */ "./src/modules/sign-in/components/sign/sign.component.html"),
            styles: [__webpack_require__(/*! ./sign.component.scss */ "./src/modules/sign-in/components/sign/sign.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_sign_in_service__WEBPACK_IMPORTED_MODULE_5__["SignInService"]])
    ], SignComponent);
    return SignComponent;
}());



/***/ }),

/***/ "./src/modules/sign-in/services/index.ts":
/*!***********************************************!*\
  !*** ./src/modules/sign-in/services/index.ts ***!
  \***********************************************/
/*! exports provided: SignInService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sign_in_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in.service */ "./src/modules/sign-in/services/sign-in.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignInService", function() { return _sign_in_service__WEBPACK_IMPORTED_MODULE_0__["SignInService"]; });




/***/ }),

/***/ "./src/modules/sign-in/services/sign-in.service.ts":
/*!*********************************************************!*\
  !*** ./src/modules/sign-in/services/sign-in.service.ts ***!
  \*********************************************************/
/*! exports provided: SignInService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInService", function() { return SignInService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TOKEN_KEY = 'user_token';
var SignInService = /** @class */ (function () {
    function SignInService() {
    }
    SignInService.prototype.getToken = function () {
        var tokenEdge = localStorage.getItem(TOKEN_KEY);
        return tokenEdge ? JSON.parse(tokenEdge, this.dateTimeReviver) : null;
    };
    SignInService.prototype.setToken = function (userName) {
        var date = new Date();
        date.setHours(date.getHours() + 3);
        var token = { userName: userName, expiresIn: date };
        localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
    };
    SignInService.prototype.removeToken = function () {
        localStorage.removeItem(TOKEN_KEY);
    };
    SignInService.prototype.dateTimeReviver = function (key, value) {
        return key === 'expiresIn' ? new Date(value) : value;
    };
    SignInService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SignInService);
    return SignInService;
}());



/***/ }),

/***/ "./src/modules/sign-in/sign-in-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/modules/sign-in/sign-in-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: signInRoutes, SignInRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInRoutes", function() { return signInRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInRoutingModule", function() { return SignInRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/modules/sign-in/components/index.ts");




var signInRoutes = [
    { path: '', component: _components__WEBPACK_IMPORTED_MODULE_3__["SignComponent"] }
];
var SignInRoutingModule = /** @class */ (function () {
    function SignInRoutingModule() {
    }
    SignInRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(signInRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: []
        })
    ], SignInRoutingModule);
    return SignInRoutingModule;
}());



/***/ }),

/***/ "./src/modules/sign-in/sign-in.module.ts":
/*!***********************************************!*\
  !*** ./src/modules/sign-in/sign-in.module.ts ***!
  \***********************************************/
/*! exports provided: SignInModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInModule", function() { return SignInModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/modules/sign-in/components/index.ts");
/* harmony import */ var _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-in-routing.module */ "./src/modules/sign-in/sign-in-routing.module.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services */ "./src/modules/sign-in/services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var SignInModule = /** @class */ (function () {
    function SignInModule() {
    }
    SignInModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components__WEBPACK_IMPORTED_MODULE_3__["SignComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_4__["SignInRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            providers: [
                _services__WEBPACK_IMPORTED_MODULE_5__["SignInService"]
            ]
        })
    ], SignInModule);
    return SignInModule;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular\goTemp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map