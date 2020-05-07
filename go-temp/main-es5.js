(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/app.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/accesscodes-info/accesscodes-info.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/accesscodes-info/accesscodes-info.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDashboardComponentsAccesscodesInfoAccesscodesInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-page-content [title]=\"editAccesscodes ? 'Update Accesscodes' : 'Create Accesscodes'\">\n  <form class=\"form\" novalidate=\"\" [formGroup]=\"updateAccesscodesForm\" (ngSubmit)=\"saveAccesscodes()\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label>code</label>\n          <input class=\"form-control\" type=\"text\" formControlName=\"code\" placeholder=\"code\" />\n        </div>\n      </div>\n      <div class=\"col-md-4 align-self-center\">\n        <label class=\"custom-file-upload btn btn-primary btn-round btn-simple\" (click)=\"generateCode()\">\n          Generate Code\n        </label>\n      </div>\n    </div>\n    <br>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label>Hours</label>\n          <input class=\"form-control\" type=\"number\" formControlName=\"hours\" placeholder=\"hours\" />\n        </div>\n      </div>\n    </div>\n    <br>\n    <div class=\"row\" *ngIf=\"editAccesscodes\">\n      <div class=\"col-md-4\">\n          <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\" formControlName=\"isActivated\" placeholder=\"isActivated\">\n                  isActivated\n                  <span class=\"form-check-sign\"></span>\n              </label>\n          </div>\n      </div>\n    </div>\n    <br>\n    <div class=\"row justify-content-end\">\n      <div class=\"col-sm-12 col-actions\">\n        <button class=\"btn btn-primary btn-round btn-simple\" (click)=\"goBack()\">\n          Cancel\n          <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n        </button>\n        <button class=\"btn btn-primary btn-round\" type=\"submit\" [disabled]=\"updateAccesscodesForm.invalid\">\n          {{editAccesscodes ? 'Update Accesscodes' : 'Create Accesscodes'}}\n          <i class=\"now-ui-icons ui-1_check\"></i>\n        </button>\n      </div>\n    </div>\n  </form>\n</app-page-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/accesscodes/accesscodes.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/accesscodes/accesscodes.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDashboardComponentsAccesscodesAccesscodesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-page-content [title]=\"'Accesscodes'\">\n  <div>\n    <button type=\"button\" class=\"btn btn-primary btn-round btn-simple\" (click)=\"onAddItem()\">\n      Add Accesscodes\n      </button>\n  </div>\n  <div class=\"table-responsive\">\n    <table class=\"table\">\n      <thead class=\" text-primary\" *ngIf=\"(accesscodes$ | async)?.length > 0\">\n        <th>#</th>\n        <th>Code</th>\n        <th>Hours</th>\n        <th>isActivated</th>\n        <th class=\"text-right\">Actions</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of accesscodes$ | async; let i = index\">\n          <td>{{i+1}}</td>\n          <td>{{item.code}}</td>\n          <td>{{item.hours}}</td>\n          <td *ngIf=\"item.isActivated\"><i class=\"now-ui-icons sport_user-run\"></i>_<i\n              class=\"now-ui-icons travel_istanbul\"></i></td>\n          <td *ngIf=\"!item.isActivated\"></td>\n          <td class=\"text-right actions-cell\">\n            <button type=\"button\" rel=\"tooltip\" title=\"\"\n              class=\"btn btn-info btn-round btn-icon btn-icon-mini btn-neutral\" data-original-title=\"Edit\"\n              (click)=\"onEditItem(item)\" onclick=\"this.blur();\">\n              <i class=\"now-ui-icons now-ui-icons ui-2_settings-90\"></i>\n            </button>\n            <button type=\"button\" rel=\"tooltip\" title=\"\"\n              class=\"btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral\" data-original-title=\"Remove\"\n              (click)=\"onDeleteItem(item)\" onclick=\"this.blur();\">\n              <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n            </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</app-page-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/city-info/city-info.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/city-info/city-info.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDashboardComponentsCityInfoCityInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-page-content [title]=\"editCity ? 'Update City' : 'Create City'\">\r\n  <form class=\"form\" novalidate=\"\" [formGroup]=\"updateCityForm\" (ngSubmit)=\"saveCity()\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (en)*</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_en\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (es)</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_es\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (pt)</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_pt\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (de)</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_de\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (fr)</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_fr\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (it)</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_it\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (en)*</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_en\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (es)</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_es\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (pt)</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_pt\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (de)</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_de\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (fr)</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_fr\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (it)</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_it\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>Position</label>\r\n          <input class=\"form-control\" type=\"number\" formControlName=\"position\" placeholder=\"Position\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <h6>Background Image:</h6>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>Background Image Url</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"background_url\" placeholder=\"Background Image Url\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 align-self-center\">\r\n        <label for=\"file-upload\" class=\"custom-file-upload btn btn-primary btn-round btn-simple\">\r\n          Upload image\r\n          <i *ngIf=\"!uploading\" class=\"now-ui-icons arrows-1_cloud-upload-94\"></i>\r\n          <i *ngIf=\"uploading\" class=\"now-ui-icons loader_refresh spin\"></i>\r\n        </label>\r\n        <input class=\"file-input\" type=\"file\" id=\"file-upload\" accept=\"image/*\"\r\n          (change)=\"startUpload($event.target.files)\">\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div *ngIf=\"updateCityForm.value?.background_url as url\">\r\n      <img class=\"image-preview\" [src]=\"url\">\r\n      <br>\r\n    </div>\r\n    <br>\r\n    <h6>Location:</h6>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\">\r\n          <label>Select Location</label>\r\n          <input type=\"text\" class=\"form-control location-input\" placeholder=\"Select Location\"\r\n            (focus)=\"onAddressFocus($event)\" (blur)=\"onAddressBlur($event)\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label>Lattitude</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"location_lat\" placeholder=\"Lattitude\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label>Longitude</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"location_lng\" placeholder=\"Longitude\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"map\" class=\"map\" [ngStyle]=\"{'z-index' : '1'}\"></div>\r\n    <br>\r\n    <br>\r\n    <h6>Sights:</h6>\r\n    <app-data-table [items$]=\"currentSights$\" [addItems$]=\"sights$\" [itemName]=\"'Sight'\" [form]=\"updateCityForm\"\r\n      [formFieldName]=\"'sight_list'\" [allowAdd]=\"true\"></app-data-table>\r\n    <br>\r\n    <div class=\"row justify-content-end\">\r\n      <div class=\"col-sm-12 col-actions\">\r\n        <button class=\"btn btn-primary btn-round btn-simple\" (click)=\"goBack()\">\r\n          Cancel\r\n          <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n        </button>\r\n        <button class=\"btn btn-primary btn-round\" type=\"submit\" [disabled]=\"updateCityForm.invalid\">\r\n          {{editCity ? 'Update City' : 'Create City'}}\r\n          <i class=\"now-ui-icons ui-1_check\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</app-page-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/city/city.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/city/city.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDashboardComponentsCityCityComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-page-content [title]=\"'Cities'\">\n  <app-data-table [items$]=\"cities$\"\n                  [itemName]=\"'City'\"\n                  [allowEdit]=\"true\"\n                  [allowAdd]=\"true\"\n                  (addButtonClick)=\"onAddItem()\"\n                  (editItem)=\"onEditItem($event)\"\n                  (deleteItem)=\"onDeleteItem($event)\"\n  ></app-data-table>\n</app-page-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDashboardComponentsDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"red\">\n        <app-main-menu></app-main-menu>\n        <div class=\"sidebar-background\" style=\"background-image: url(/assets/img/image_3_1.png) \"></div>\n    </div>\n    <div class=\"main-panel\">\n        <app-header></app-header>\n        <router-outlet></router-outlet>\n        <app-footer></app-footer>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/data-table/data-table.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/data-table/data-table.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDashboardComponentsDataTableDataTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"allowAdd\">\n  <button type=\"button\" *ngIf=\"!isAdd\" class=\"btn btn-primary btn-round btn-simple\" (click)=\"onAddButtonClick()\">\n    Add {{itemName}}\n    <i *ngIf=\"!uploadingAudio\" class=\"now-ui-icons ui-1_simple-add\"></i>\n    <i *ngIf=\"uploadingAudio\" class=\"now-ui-icons loader_refresh spin\"></i>\n  </button>\n  <ng-container *ngIf=\"isAdd && !isAudioUploader\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label>{{itemName}}</label>\n          <select class=\"form-control\" type=\"text\" [(ngModel)]=\"itemToAdd\" (ngModelChange)=\"onAddItem()\">\n            <option value=\"\" disabled selected>Select the {{itemNameLowerCase}} to add</option>\n            <option *ngFor=\"let item of filteredAddItems$ | async\" [(ngValue)]=\"item.id\">{{getName(item)}}</option>\n          </select>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n  <ng-container *ngIf=\"isAudioUploader\">\n    <input #audioUpload class=\"file-input hidden\" type=\"file\" accept=\"audio/*\" id=\"audio-upload\" (change)=\"startUploadAudio($event.target.files)\">\n  </ng-container>\n</div>\n<div class=\"table-responsive\">\n  <table class=\"table\">\n    <thead class=\" text-primary\" *ngIf=\"(items$ | async)?.length > 0\">\n      <th style=\"width: 5%\">#</th>\n      <th style=\"width: 10%\">Name</th>\n      <th style=\"width: 65%\">{{isAudioUploader ? 'Audio' : 'Description'}}</th>\n      <th style=\"width: 10%\" class=\"text-right\">Actions</th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of items$ | async; let i = index\">\n        <td>{{i+1}}</td>\n        <td>{{getName(item)}}</td>\n        <td style=\"word-wrap: break-all; white-space:normal; min-width: 160px; max-width: 160px;\">\n          <span *ngIf=\"!isAudioUploader\">{{getDescription(item)}}</span>\n          <audio *ngIf=\"isAudioUploader\" [src]=\"getDescription(item)\" controls></audio>\n        </td>\n        <td class=\"text-right actions-cell\">\n          <button *ngIf=\"allowEdit\" type=\"button\" rel=\"tooltip\" title=\"\" class=\"btn btn-info btn-round btn-icon btn-icon-mini btn-neutral\"\n                  data-original-title=\"Edit\" (click)=\"onEditItem(item)\" onclick=\"this.blur();\"\n          >\n              <i class=\"now-ui-icons now-ui-icons ui-2_settings-90\"></i>\n          </button>\n          <button type=\"button\" rel=\"tooltip\" title=\"\" class=\"btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral\"\n                  data-original-title=\"Remove\" (click)=\"onDeleteItem(item)\" onclick=\"this.blur();\"\n          >\n            <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n          </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/footer/footer.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/footer/footer.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDashboardComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n<footer class=\"footer\">\n  <div class=\"container-fluid\">\n    <nav>\n      <ul>\n        <li>\n          <a href=\"https://www.creative-tim.com\">\n            Creative Tim\n          </a>\n        </li>\n        <li>\n          <a href=\"https://www.creative-tim.com/about-us\">\n            About Us\n          </a>\n        </li>\n        <li>\n          <a href=\"http://blog.creative-tim.com\">\n            Blog\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <div class=\"copyright\">\n      &copy;\n      {{test | date: 'yyyy'}}, Designed by\n      <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n      <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\n    </div>\n  </div>\n</footer> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/header/header.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/header/header.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDashboardComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"panel-header panel-header-sm\">\n  </div>\n<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute bg-primary fixed-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-wrapper\">\n            <div class=\"navbar-toggle\">\n                <button type=\"button\" class=\"navbar-toggler\" (click)=\"sidebarToggle()\">\n                    <span class=\"navbar-toggler-bar bar1\"></span>\n                    <span class=\"navbar-toggler-bar bar2\"></span>\n                    <span class=\"navbar-toggler-bar bar3\"></span>\n                </button>\n            </div>\n            <a class=\"navbar-brand\">Go! Templars</a>\n        </div>\n        <button class=\"navbar-toggler\" type=\"button\" (click)=\"collapse()\"\n          [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\n          <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n          <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n          <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n          <ul class=\"navbar-nav\">\n            <!-- <li class=\"nav-item\" ngbDropdown>\n              <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle>\n                <i class=\"now-ui-icons location_world\"></i>\n                </a>\n              <div class=\"dropdown-menu dropdown-menu-right\" ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                <a class=\"dropdown-item\" href=\"#\" (click)=\"logOut()\">Log Out</a>\n              </div>\n            </li> -->\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" (click)=\"logOut()\">\n                  Log Out\n                  <i class=\"now-ui-icons arrows-1_share-66\"></i>\n              </a>\n            </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/main-menu/main-menu.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/main-menu/main-menu.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDashboardComponentsMainMenuMainMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"logo\">\n    <a href=\"\" class=\"simple-text logo-mini\">\n      <div class=\"logo-img\">\n          <img src=\"./assets/img/logo.png\"/>\n      </div>\n    </a>\n    <a href=\"\" class=\"simple-text logo-normal\">\n        Go! Templars\n    </a>\n</div>\n<div class=\"sidebar-wrapper\">\n    <ul class=\"nav\">\n        <li *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\" [class.active]=\"isActive(menuItem)\">\n            <a [routerLink]=\"[menuItem.path]\">\n                <i class=\"now-ui-icons {{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/page-content/page-content.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/page-content/page-content.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDashboardComponentsPageContentPageContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\">{{title}}</h4>\n        </div>\n        <div class=\"card-body\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/route-info/route-info.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/route-info/route-info.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDashboardComponentsRouteInfoRouteInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-page-content [title]=\"editRoute ? 'Update Route' : 'Create Route'\">\r\n  <form class=\"form\" novalidate=\"\" [formGroup]=\"updateRouteForm\" (ngSubmit)=\"saveRoute()\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (en)*</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_en\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (es)</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_es\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (pt)</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_pt\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (de)</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_de\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (fr)</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_fr\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (it)</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_it\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (en)*</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_en\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (es)</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_es\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (pt)</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_pt\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (de)</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_de\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (fr)</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_fr\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (it)</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_it\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>Length</label>\r\n          <select class=\"form-control\" type=\"text\" formControlName=\"leght\">\r\n            <option value=\"\" disabled selected>Select the length</option>\r\n            <option *ngFor=\"let item of routeLengths\" [(ngValue)]=\"item\">{{getLengthName(item)}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>Hours</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"hours\" placeholder=\"Hours\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>Kilometers</label>\r\n          <input class=\"form-control\" type=\"number\" formControlName=\"kilometers\" placeholder=\"Kilometers\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>Contact phone</label>\r\n          <input class=\"form-control\" type=\"string\" formControlName=\"contact_phone\" placeholder=\"Contact phone\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>Styles</label>\r\n          <angular2-multiselect [data]=\"dropdownList\" [(ngModel)]=\"selectedItems\" [ngModelOptions]=\"{standalone: true}\"\r\n            [settings]=\"dropdownSettings\" (onSelect)=\"onItemSelect($event)\" (onDeSelect)=\"OnItemDeSelect($event)\"\r\n            (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\">\r\n          </angular2-multiselect>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <h6>Background Image:</h6>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>Background Image Url</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"background_url\" placeholder=\"Background Image Url\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 align-self-center\">\r\n        <label for=\"background-upload\" class=\"custom-file-upload btn btn-primary btn-round btn-simple\">\r\n          Upload image\r\n          <i *ngIf=\"!uploadingBackground\" class=\"now-ui-icons arrows-1_cloud-upload-94\"></i>\r\n          <i *ngIf=\"uploadingBackground\" class=\"now-ui-icons loader_refresh spin\"></i>\r\n        </label>\r\n        <input class=\"file-input\" type=\"file\" id=\"background-upload\" accept=\"image/*\"\r\n          (change)=\"startUploadBackground($event.target.files)\">\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div *ngIf=\"updateRouteForm.value?.background_url as url\">\r\n      <img class=\"image-preview\" [src]=\"url\">\r\n      <br>\r\n    </div>\r\n    <br>\r\n    <!--<h6>Audio:</h6>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>Audio Url</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"audi_url\" placeholder=\"Audio Url\"/>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 align-self-center\">\r\n        <label for=\"audio-upload\" class=\"custom-file-upload btn btn-primary btn-round btn-simple\">\r\n          Upload audio\r\n          <i *ngIf=\"!uploadingAudio\" class=\"now-ui-icons arrows-1_cloud-upload-94\"></i>\r\n          <i *ngIf=\"uploadingAudio\" class=\"now-ui-icons loader_refresh spin\"></i>\r\n        </label>\r\n        <input class=\"file-input\" type=\"file\" id=\"audio-upload\" (change)=\"startUploadAudio($event.target.files)\">\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div *ngIf=\"updateSightForm.value.audi_url as url\">\r\n      <audio [src]=\"url\" controls></audio>\r\n      <br>\r\n    </div>\r\n    <br>-->\r\n    <!-- Location search part -->\r\n    <!-- <h6>Location:</h6>\r\n    <br>\r\n    <input type=\"text\" class=\"form-control location-input\" placeholder=\"Select Location\"\r\n      (focus)=\"onAddressFocus($event)\" (blur)=\"onAddressBlur($event)\">\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label>Lattitude</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"location_lat\" placeholder=\"Lattitude\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label>Longitude</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"location_lng\" placeholder=\"Longitude\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"map\" class=\"map\" [ngStyle]=\"{'z-index' : '1'}\"></div>\r\n    <br> -->\r\n    <h6>Audios:</h6>\r\n    <app-data-table [items$]=\"currentAudios$\" [addItems$]=\"audios$\" [itemName]=\"'Audio'\" [form]=\"updateRouteForm\"\r\n      [formFieldName]=\"'audios_list'\" [allowAdd]=\"true\" [customNameField]=\"'audio_name'\"\r\n      [customDescField]=\"'audio_content'\" [uploadFolder]=\"'routes/audio'\"></app-data-table>\r\n    <br>\r\n    <h6>Sights:</h6>\r\n    <app-data-table [items$]=\"currentSights$\" [addItems$]=\"sights$\" [itemName]=\"'Sight'\" [form]=\"updateRouteForm\"\r\n      [formFieldName]=\"'sights_list'\" [allowAdd]=\"true\"></app-data-table>\r\n    <br>\r\n    <div class=\"row justify-content-end\">\r\n      <div class=\"col-sm-12 col-actions\">\r\n        <button class=\"btn btn-primary btn-round btn-simple\" (click)=\"goBack()\">\r\n          Cancel\r\n          <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n        </button>\r\n        <button class=\"btn btn-primary btn-round\" type=\"submit\" [disabled]=\"updateRouteForm.invalid\">\r\n          {{editRoute ? 'Update Route' : 'Create Route'}}\r\n          <i class=\"now-ui-icons ui-1_check\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</app-page-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/route/route.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/route/route.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDashboardComponentsRouteRouteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-page-content [title]=\"'Routes'\">\n  <app-data-table [items$]=\"routes$\"\n                  [itemName]=\"'Route'\"\n                  [allowEdit]=\"true\"\n                  [allowAdd]=\"true\"\n                  (addButtonClick)=\"onAddItem()\"\n                  (editItem)=\"onEditItem($event)\"\n                  (deleteItem)=\"onDeleteItem($event)\"\n  ></app-data-table>\n</app-page-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/sight-info/sight-info.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/sight-info/sight-info.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDashboardComponentsSightInfoSightInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-page-content [title]=\"editSight ? 'Update Sight' : 'Create Sight'\">\r\n  <form class=\"form\" novalidate=\"\" [formGroup]=\"updateSightForm\" (ngSubmit)=\"saveSight()\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (en)*</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_en\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (es)</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_es\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (pt)</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_pt\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (de)</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_de\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (fr)</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_fr\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\" formGroupName=\"name\">\r\n          <label>Name (it)</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"_it\" placeholder=\"Name\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (en)*</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_en\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (es)</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_es\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (pt)</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_pt\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (de)</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_de\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (fr)</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_fr\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\" formGroupName=\"desc\">\r\n          <label>Description (it)</label>\r\n          <textarea class=\"form-control\" type=\"text\" formControlName=\"_it\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>Position</label>\r\n          <input class=\"form-control\" type=\"number\" formControlName=\"position\" placeholder=\"Position\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>City</label>\r\n          <select class=\"form-control\" type=\"text\" formControlName=\"city_id\">\r\n            <option value=\"\" disabled selected>Select the city</option>\r\n            <option *ngFor=\"let item of cities$ | async\" [(ngValue)]=\"item.id\">{{item.name._en}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>Length</label>\r\n          <select class=\"form-control\" type=\"text\" formControlName=\"lenght\">\r\n            <option value=\"\" disabled selected>Select the length</option>\r\n            <option *ngFor=\"let item of sightLengths\" [(ngValue)]=\"item\">{{getLengthName(item)}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>Price</label>\r\n          <input class=\"form-control\" type=\"number\" formControlName=\"price\" placeholder=\"Price\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>Styles</label>\r\n          <angular2-multiselect [data]=\"dropdownList\" [(ngModel)]=\"selectedItems\" [ngModelOptions]=\"{standalone: true}\"\r\n            [settings]=\"dropdownSettings\" (onSelect)=\"onItemSelect($event)\" (onDeSelect)=\"OnItemDeSelect($event)\"\r\n            (onSelectAll)=\"onSelectAll($event)\" (onDeSelectAll)=\"onDeSelectAll($event)\">\r\n          </angular2-multiselect>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <h6>Background Image:</h6>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>Background Image Url</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"background_url\" placeholder=\"Background Image Url\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 align-self-center\">\r\n        <label for=\"background-upload\" class=\"custom-file-upload btn btn-primary btn-round btn-simple\">\r\n          Upload image\r\n          <i *ngIf=\"!uploadingBackground\" class=\"now-ui-icons arrows-1_cloud-upload-94\"></i>\r\n          <i *ngIf=\"uploadingBackground\" class=\"now-ui-icons loader_refresh spin\"></i>\r\n        </label>\r\n        <input class=\"file-input\" type=\"file\" id=\"background-upload\" accept=\"image/*\"\r\n          (change)=\"startUploadBackground($event.target.files)\">\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div *ngIf=\"updateSightForm.value?.background_url as url\">\r\n      <img class=\"image-preview\" [src]=\"url\">\r\n      <br>\r\n    </div>\r\n    <br>\r\n    <h6>Audio:</h6>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label>Audio Url</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"audi_url\" placeholder=\"Audio Url\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 align-self-center\">\r\n        <label for=\"audio-upload\" class=\"custom-file-upload btn btn-primary btn-round btn-simple\">\r\n          Upload audio\r\n          <i *ngIf=\"!uploadingAudio\" class=\"now-ui-icons arrows-1_cloud-upload-94\"></i>\r\n          <i *ngIf=\"uploadingAudio\" class=\"now-ui-icons loader_refresh spin\"></i>\r\n        </label>\r\n        <input class=\"file-input\" type=\"file\" id=\"audio-upload\" accept=\"audio/*\"\r\n          (change)=\"startUploadAudio($event.target.files)\">\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div *ngIf=\"updateSightForm.value?.audi_url as url\">\r\n      <audio [src]=\"url\" controls></audio>\r\n      <br>\r\n    </div>\r\n    <br>\r\n    <h6>Location:</h6>\r\n    <br>\r\n    <input type=\"text\" class=\"form-control location-input\" placeholder=\"Select Location\"\r\n      (focus)=\"onAddressFocus($event)\" (blur)=\"onAddressBlur($event)\">\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label>Lattitude</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"location_lat\" placeholder=\"Lattitude\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label>Longitude</label>\r\n          <input class=\"form-control\" type=\"text\" formControlName=\"location_lng\" placeholder=\"Longitude\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"map\" class=\"map\" [ngStyle]=\"{'z-index' : '1'}\"></div>\r\n    <br>\r\n    <div class=\"row justify-content-end\">\r\n      <div class=\"col-sm-12 col-actions\">\r\n        <button class=\"btn btn-primary btn-round btn-simple\" (click)=\"goBack()\">\r\n          Cancel\r\n          <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n        </button>\r\n        <button class=\"btn btn-primary btn-round\" type=\"submit\" [disabled]=\"updateSightForm.invalid\">\r\n          {{editSight ? 'Update Sight' : 'Create Sight'}}\r\n          <i class=\"now-ui-icons ui-1_check\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</app-page-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/sight/sight.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/sight/sight.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDashboardComponentsSightSightComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-page-content [title]=\"'Sights'\">\n  <app-data-table [items$]=\"sights$\"\n                  [itemName]=\"'Sight'\"\n                  [allowEdit]=\"true\"\n                  [allowAdd]=\"true\"\n                  (addButtonClick)=\"onAddItem()\"\n                  (editItem)=\"onEditItem($event)\"\n                  (deleteItem)=\"onDeleteItem($event)\"\n  ></app-data-table>\n</app-page-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/sign-in/components/sign/sign.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/sign-in/components/sign/sign.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesSignInComponentsSignSignComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\n  <div class=\"main-panel ps ps--active-y\">\n    <div class=\"panel-header panel-header-sm\">Go! Templars</div>\n    <div class=\"content\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-12 col-sign-in\">\n          <div class=\"card \">\n            <div class=\"card-header \">\n              <h5 class=\"title text-center\">Sign In</h5>\n            </div>\n            <div class=\"card-body \">\n              <form class=\"form\" novalidate=\"\" [formGroup]=\"signInForm\" (ngSubmit)=\"logIn()\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <label>Login(123)</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Login\" formControlName=\"account\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <label>Password(123)</label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"footer text-center\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-round btn-lg btn-block\" [disabled]=\"signInForm.invalid\">Sign In</button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div> \n</div>\n\n<!--<div class=\"row justify-content-center\">\n  <div class=\"col-md-4 content-center\">\n    <div class=\"card card-login card-plain\">\n      <form class=\"form\" novalidate=\"\" [formGroup]=\"signInForm\" (ngSubmit)=\"logIn()\">\n        <div class=\"header header-primary text-center\">\n          <div class=\"logo-container\">\n            <img alt=\"\" src=\"\">\n          </div>\n        </div>\n        <div class=\"content\">\n          <div class=\"input-group form-group-no-border input-lg\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"> <i class=\"now-ui-icons users_circle-08\"></i></span>\n            </div>\n            <input class=\"form-control\" formControlName=\"account\" placeholder=\"Account\" type=\"text\">\n          </div>\n          <div class=\"input-group form-group-no-border input-lg\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"now-ui-icons text_caps-small\"></i></span>\n            </div>\n            <input class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" type=\"text\">\n          </div>\n        </div>\n        <div class=\"footer text-center\">\n          <button type=\"submit\" class=\"btn btn-primary btn-round btn-lg btn-block\" [disabled]=\"signInForm.invalid\">Log In</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>-->";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
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
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ././guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _modules_sign_in_sign_in_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../modules/sign-in/sign-in-routing.module */
    "./src/modules/sign-in/sign-in-routing.module.ts");
    /* harmony import */


    var src_modules_dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/modules/dashboard/dashboard-routing.module */
    "./src/modules/dashboard/dashboard-routing.module.ts");

    const routes = [{
      path: '',
      children: src_modules_dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["dashboardRoutes"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'signin',
      children: _modules_sign_in_sign_in_routing_module__WEBPACK_IMPORTED_MODULE_4__["signInRoutes"]
    }, {
      path: '**',
      redirectTo: '',
      pathMatch: 'full'
    }];
    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/app.component */
    "./src/app/components/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var angularfire2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angularfire2 */
    "./node_modules/angularfire2/index.js");
    /* harmony import */


    var angularfire2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var angularfire2_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angularfire2/storage */
    "./node_modules/angularfire2/storage/index.js");
    /* harmony import */


    var angularfire2_storage__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angularfire2/auth */
    "./node_modules/angularfire2/auth/index.js");
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var angularfire2_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! angularfire2/database */
    "./node_modules/angularfire2/database/index.js");
    /* harmony import */


    var angularfire2_database__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_backend_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/backend.service */
    "./src/app/services/backend.service.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var src_modules_sign_in_sign_in_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/modules/sign-in/sign-in.module */
    "./src/modules/sign-in/sign-in.module.ts");
    /* harmony import */


    var src_modules_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/modules/dashboard/dashboard.module */
    "./src/modules/dashboard/dashboard.module.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var src_modules_dashboard_state_management__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! src/modules/dashboard/state-management */
    "./src/modules/dashboard/state-management/index.ts");
    /* harmony import */


    var src_modules_dashboard_state_management_states_cities__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! src/modules/dashboard/state-management/states/cities */
    "./src/modules/dashboard/state-management/states/cities/index.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_modules_dashboard_state_management_states_route__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! src/modules/dashboard/state-management/states/route */
    "./src/modules/dashboard/state-management/states/route/index.ts");
    /* harmony import */


    var src_modules_dashboard_state_management_states_sight__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! src/modules/dashboard/state-management/states/sight */
    "./src/modules/dashboard/state-management/states/sight/index.ts");
    /* harmony import */


    var src_modules_dashboard_state_management_states_audios_audios_effects__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! src/modules/dashboard/state-management/states/audios/audios.effects */
    "./src/modules/dashboard/state-management/states/audios/audios.effects.ts");
    /* harmony import */


    var src_modules_dashboard_state_management_states_styles__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! src/modules/dashboard/state-management/states/styles */
    "./src/modules/dashboard/state-management/states/styles/index.ts");
    /* harmony import */


    var src_modules_dashboard_state_management_states_accesscodes__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! src/modules/dashboard/state-management/states/accesscodes */
    "./src/modules/dashboard/state-management/states/accesscodes/index.ts"); //import { MaterialModule } from './material.module';


    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_components_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], angularfire2__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebase), angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"], angularfire2_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorageModule"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"], angularfire2_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabaseModule"], //AngularFireDatabase,
      src_modules_sign_in_sign_in_module__WEBPACK_IMPORTED_MODULE_14__["SignInModule"], src_modules_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_15__["DashboardModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreModule"].forRoot(src_modules_dashboard_state_management__WEBPACK_IMPORTED_MODULE_18__["templarReducers"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["EffectsModule"].forRoot([src_modules_dashboard_state_management_states_cities__WEBPACK_IMPORTED_MODULE_19__["CitiesEffects"], src_modules_dashboard_state_management_states_route__WEBPACK_IMPORTED_MODULE_22__["RoutesEffects"], src_modules_dashboard_state_management_states_sight__WEBPACK_IMPORTED_MODULE_23__["SightsEffects"], src_modules_dashboard_state_management_states_audios_audios_effects__WEBPACK_IMPORTED_MODULE_24__["AudiosEffects"], src_modules_dashboard_state_management_states_styles__WEBPACK_IMPORTED_MODULE_25__["StylesEffects"], src_modules_dashboard_state_management_states_accesscodes__WEBPACK_IMPORTED_MODULE_26__["AccesscodesEffects"]]), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"].forRoot()],
      providers: [_services_backend_service__WEBPACK_IMPORTED_MODULE_12__["BackendService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
      bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/app.component.scss":
  /*!***********************************************!*\
    !*** ./src/app/components/app.component.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/app.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/components/app.component.ts ***!
    \*********************************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppComponentsAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AppComponent = class AppComponent {
      constructor() {
        this.title = 'gotemp';
      }

    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/components/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_modules_sign_in_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/modules/sign-in/services */
    "./src/modules/sign-in/services/index.ts");

    let AuthGuard = class AuthGuard {
      constructor(signInService, router) {
        this.signInService = signInService;
        this.router = router;
      }

      canActivate() {
        const token = this.signInService.getToken();
        const loggedIn = token && token.expiresIn.getTime() > new Date().getTime();

        if (!loggedIn) {
          this.router.navigate(['/signin']);
        }

        return loggedIn;
      }

    };

    AuthGuard.ctorParameters = () => [{
      type: src_modules_sign_in_services__WEBPACK_IMPORTED_MODULE_3__["SignInService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthGuard);
    /***/
  },

  /***/
  "./src/app/services/backend.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/backend.service.ts ***!
    \*********************************************/

  /*! exports provided: BackendService */

  /***/
  function srcAppServicesBackendServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackendService", function () {
      return BackendService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let BackendService = class BackendService {
      constructor() {}

    };
    BackendService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BackendService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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


    const environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  "./src/modules/dashboard/components/accesscodes-info/accesscodes-info.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/modules/dashboard/components/accesscodes-info/accesscodes-info.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesDashboardComponentsAccesscodesInfoAccesscodesInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9hY2Nlc3Njb2Rlcy1pbmZvL2FjY2Vzc2NvZGVzLWluZm8uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/dashboard/components/accesscodes-info/accesscodes-info.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/modules/dashboard/components/accesscodes-info/accesscodes-info.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: AccesscodesInfoComponent */

  /***/
  function srcModulesDashboardComponentsAccesscodesInfoAccesscodesInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccesscodesInfoComponent", function () {
      return AccesscodesInfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/add/operator/filter */
    "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
    /* harmony import */


    var src_modules_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/modules/shared */
    "./src/modules/shared/index.ts");
    /* harmony import */


    var _state_management__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../state-management */
    "./src/modules/dashboard/state-management/index.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _state_management_states_accesscodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../state-management/states/accesscodes */
    "./src/modules/dashboard/state-management/states/accesscodes/index.ts");

    let AccesscodesInfoComponent = class AccesscodesInfoComponent extends src_modules_shared__WEBPACK_IMPORTED_MODULE_4__["AbstractComponent"] {
      constructor(store, router, formBuilder, activateRoute) {
        super();
        this.store = store;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activateRoute = activateRoute;
        this.accesscodes$ = this.store.select(_state_management__WEBPACK_IMPORTED_MODULE_5__["accesscodesSelectors"].getActiveAccesscodSelector).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroyed$));
        this.updateAccesscodesForm = this.formBuilder.group({
          code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)]],
          hours: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
          isActivated: ['', [//Validators.required
          ]]
        });
        this.accesscodes$.subscribe(accesscodes => {
          accesscodes ? this.updateAccesscodesForm.patchValue(accesscodes) : this.updateAccesscodesForm.reset();
        });
      }

      ngOnInit() {
        this.accesscodes$.subscribe(data => this.editAccesscodes = !!data);
      }

      ngOnDestroy() {
        this.store.dispatch(new _state_management_states_accesscodes__WEBPACK_IMPORTED_MODULE_9__["AccesscodesActions"].LoadActiveAccesscodesDataAction(null));
      }

      saveAccesscodes() {
        if (this.editAccesscodes) {
          this.accesscodes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(data => {
            this.store.dispatch(new _state_management_states_accesscodes__WEBPACK_IMPORTED_MODULE_9__["AccesscodesActions"].UpdateActiveAccesscodesDataAction({
              accesscodesData: Object.assign({}, data, this.updateAccesscodesForm.value),
              id: this.activateRoute.snapshot.paramMap.get('id')
            }));
          });
        } else {
          this.updateAccesscodesForm.get('isActivated').setValue(false);
          this.store.dispatch(new _state_management_states_accesscodes__WEBPACK_IMPORTED_MODULE_9__["AccesscodesActions"].AddAccesscodesDataAction(this.updateAccesscodesForm.value));
          this.goBack();
        }
      }

      goBack() {
        this.router.navigate(['/accesscodes']);
      }

      generateCode() {
        var generatedCode = '';
        const variable = 'q1w2e3r4t5y6u7i8o9p0a9q8s7d5f5g43h3j2k2lz3x4c5v6b7n8m';

        for (var i = 0; i < 10; i++) {
          generatedCode += variable.charAt(Math.floor(Math.random() * variable.length));
          Math.random() > 0.5 ? generatedCode = generatedCode.slice(0, i) + generatedCode[i].toUpperCase() : null;
        }

        this.updateAccesscodesForm.get('code').setValue(generatedCode);
      }

    };

    AccesscodesInfoComponent.ctorParameters = () => [{
      type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }];

    AccesscodesInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-accesscodes-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./accesscodes-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/accesscodes-info/accesscodes-info.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./accesscodes-info.component.scss */
      "./src/modules/dashboard/components/accesscodes-info/accesscodes-info.component.scss")).default]
    })], AccesscodesInfoComponent);
    /***/
  },

  /***/
  "./src/modules/dashboard/components/accesscodes/accesscodes.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/modules/dashboard/components/accesscodes/accesscodes.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesDashboardComponentsAccesscodesAccesscodesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9hY2Nlc3Njb2Rlcy9hY2Nlc3Njb2Rlcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/dashboard/components/accesscodes/accesscodes.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/modules/dashboard/components/accesscodes/accesscodes.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: AccesscodesComponent */

  /***/
  function srcModulesDashboardComponentsAccesscodesAccesscodesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccesscodesComponent", function () {
      return AccesscodesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _state_management__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../state-management */
    "./src/modules/dashboard/state-management/index.ts");
    /* harmony import */


    var src_modules_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/modules/shared */
    "./src/modules/shared/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _state_management_states_accesscodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../state-management/states/accesscodes */
    "./src/modules/dashboard/state-management/states/accesscodes/index.ts");

    let AccesscodesComponent = class AccesscodesComponent extends src_modules_shared__WEBPACK_IMPORTED_MODULE_5__["AbstractComponent"] {
      constructor(router, store) {
        super();
        this.router = router;
        this.store = store;
        this.accesscodes$ = this.store.select(_state_management__WEBPACK_IMPORTED_MODULE_4__["accesscodesSelectors"].getAccesscodesSelector).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$));
      }

      onAddItem() {
        this.router.navigate(['addaccesscodes']);
      }

      onEditItem(item) {
        this.router.navigate(["accesscodes-info/".concat(item.id)]);
      }

      onDeleteItem(item) {
        this.store.dispatch(new _state_management_states_accesscodes__WEBPACK_IMPORTED_MODULE_7__["AccesscodesActions"].DeleteAccesscodesDataAction(item.id));
      }

    };

    AccesscodesComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
    }, {
      type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
    }];

    AccesscodesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-accesscodes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./accesscodes.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/accesscodes/accesscodes.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./accesscodes.component.scss */
      "./src/modules/dashboard/components/accesscodes/accesscodes.component.scss")).default]
    })], AccesscodesComponent);
    /***/
  },

  /***/
  "./src/modules/dashboard/components/city-info/city-info.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/modules/dashboard/components/city-info/city-info.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesDashboardComponentsCityInfoCityInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#map {\n  width: 100%;\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2Rhc2hib2FyZC9jb21wb25lbnRzL2NpdHktaW5mby9EOlxcQW5ndWxhclxcTXlUZXN0UHJvamVjdHNcXEFuaW1hdGlvblRlc3RcXG15RGVzQXBwMS9zcmNcXG1vZHVsZXNcXGRhc2hib2FyZFxcY29tcG9uZW50c1xcY2l0eS1pbmZvXFxjaXR5LWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9jaXR5LWluZm8vY2l0eS1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9jaXR5LWluZm8vY2l0eS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuIiwiI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/modules/dashboard/components/city-info/city-info.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/modules/dashboard/components/city-info/city-info.component.ts ***!
    \***************************************************************************/

  /*! exports provided: CityInfoComponent */

  /***/
  function srcModulesDashboardComponentsCityInfoCityInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CityInfoComponent", function () {
      return CityInfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/add/operator/filter */
    "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_modules_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/modules/shared */
    "./src/modules/shared/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services */
    "./src/modules/dashboard/services/index.ts");
    /* harmony import */


    var _state_management__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../state-management */
    "./src/modules/dashboard/state-management/index.ts");
    /* harmony import */


    var _state_management_states_cities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../state-management/states/cities */
    "./src/modules/dashboard/state-management/states/cities/index.ts");

    let CityInfoComponent = class CityInfoComponent extends src_modules_shared__WEBPACK_IMPORTED_MODULE_7__["AbstractComponent"] {
      constructor(store, router, formBuilder, activateRoute, mapsService, uploadService, renderer) {
        super();
        this.store = store;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activateRoute = activateRoute;
        this.mapsService = mapsService;
        this.uploadService = uploadService;
        this.renderer = renderer;
        this.city$ = this.store.select(_state_management__WEBPACK_IMPORTED_MODULE_9__["citiesSelectors"].getActiveCitySelector).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$));
        this.sights$ = this.store.select(_state_management__WEBPACK_IMPORTED_MODULE_9__["sightSelectors"].getSightsSelector).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$)); //en, es, pt, de, fr, it

        this.updateCityForm = this.formBuilder.group({
          name: this.formBuilder.group({
            _en: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            _es: ['', [//Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            _pt: ['', [//Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            _de: ['', [//Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            _fr: ['', [//Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            _it: ['', [//Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]]
          }),
          position: ['', [//Validators.required
          ]],
          desc: this.formBuilder.group({
            _en: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            _es: ['', [//Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            _pt: ['', [//Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            _de: ['', [//Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            _fr: ['', [//Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            _it: ['', [//Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]]
          }),
          background_url: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
          location_lat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          location_lng: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          sight_list: []
        });
        this.city$.subscribe(city => {
          city ? this.updateCityForm.patchValue(city) : this.updateCityForm.reset();
        });
        this.updateCityForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$)).subscribe(value => {
          if (this.marker) {
            if (value.location_lat !== this.marker._latlng.lat || value.location_lng !== this.marker._latlng.lng) {
              this.marker = this.mapsService.setMarker(this.map, this.marker, value.location_lat, value.location_lng);
            }
          }
        });
      }

      get currentSights$() {
        return this.sights$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(sights => {
          return sights ? sights.filter(sight => {
            return this.updateCityForm.value && this.updateCityForm.value.sight_list && this.updateCityForm.value.sight_list.indexOf(sight.id) !== -1;
          }) : [];
        }));
      }

      ngOnInit() {
        this.map = this.mapsService.createMap(this.updateCityForm.get('location_lat').value, this.updateCityForm.get('location_lng').value);
        this.map.on('click', e => {
          this.marker = this.mapsService.setMarker(this.map, this.marker, e.latlng.lat, e.latlng.lng);
          this.updateCityForm.get('location_lat').setValue(e.latlng.lat, {
            emitEvent: false
          });
          this.updateCityForm.get('location_lng').setValue(e.latlng.lng, {
            emitEvent: false
          });
        });
        this.city$.pipe().subscribe(city => {
          this.editCity = !!city;

          if (city) {
            this.marker = this.mapsService.setMarker(this.map, this.marker, city.location_lat, city.location_lng);
          }
        });
      }

      ngOnDestroy() {
        this.store.dispatch(new _state_management_states_cities__WEBPACK_IMPORTED_MODULE_10__["CitiesActions"].LoadActiveCityDataAction(null));
      }

      saveCity() {
        this.updateCityForm.value.position === null || "" || 0 ? this.updateCityForm.get('position').setValue(500) : null;

        if (this.editCity) {
          this.city$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(city => {
            this.store.dispatch(new _state_management_states_cities__WEBPACK_IMPORTED_MODULE_10__["CitiesActions"].UpdateActiveCityDataAction({
              cityData: Object.assign({}, city, this.updateCityForm.value),
              id: this.activateRoute.snapshot.paramMap.get('id')
            }));
          });
        } else {
          this.store.dispatch(new _state_management_states_cities__WEBPACK_IMPORTED_MODULE_10__["CitiesActions"].AddCityDataAction(this.updateCityForm.value));
        }

        this.goBack();
      }

      goBack() {
        this.router.navigate(['/city']);
      }

      startUpload(event) {
        this.uploading = true;
        this.uploadService.uploadImage(event, 'cities/images').subscribe(file => {
          this.updateCityForm.get('background_url').setValue(file.url);
          this.uploading = false;
        });
      }

      onAddressFocus(event) {
        this.renderer.addClass(event.target.parentElement.parentElement, 'input-group-focus');
      }

      onAddressBlur(event) {
        this.renderer.removeClass(event.target.parentElement.parentElement, 'input-group-focus');
      }

    };

    CityInfoComponent.ctorParameters = () => [{
      type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _services__WEBPACK_IMPORTED_MODULE_8__["MapsService"]
    }, {
      type: _services__WEBPACK_IMPORTED_MODULE_8__["UploadService"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
    }];

    CityInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-city-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./city-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/city-info/city-info.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./city-info.component.scss */
      "./src/modules/dashboard/components/city-info/city-info.component.scss")).default]
    })], CityInfoComponent);
    /***/
  },

  /***/
  "./src/modules/dashboard/components/city/city.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/modules/dashboard/components/city/city.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesDashboardComponentsCityCityComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9jaXR5L2NpdHkuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/dashboard/components/city/city.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/modules/dashboard/components/city/city.component.ts ***!
    \*****************************************************************/

  /*! exports provided: CityComponent */

  /***/
  function srcModulesDashboardComponentsCityCityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CityComponent", function () {
      return CityComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _state_management__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../state-management */
    "./src/modules/dashboard/state-management/index.ts");
    /* harmony import */


    var src_modules_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/modules/shared */
    "./src/modules/shared/index.ts");
    /* harmony import */


    var _state_management_states_cities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../state-management/states/cities */
    "./src/modules/dashboard/state-management/states/cities/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let CityComponent = class CityComponent extends src_modules_shared__WEBPACK_IMPORTED_MODULE_5__["AbstractComponent"] {
      constructor(router, store) {
        super();
        this.router = router;
        this.store = store;
        this.cities$ = this.store.select(_state_management__WEBPACK_IMPORTED_MODULE_4__["citiesSelectors"].getCitiesSelector).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$));
      }

      onAddItem() {
        this.router.navigate(['addcity']);
      }

      onEditItem(item) {
        this.router.navigate(["city-info/".concat(item.id)]);
      }

      onDeleteItem(item) {
        confirm("Delete \"".concat(item.name._en, "\"?")) ? this.store.dispatch(new _state_management_states_cities__WEBPACK_IMPORTED_MODULE_6__["CitiesActions"].DeleteCityDataAction(item.id)) : null;
      }

    };

    CityComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
    }, {
      type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
    }];

    CityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-city',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./city.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/city/city.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./city.component.scss */
      "./src/modules/dashboard/components/city/city.component.scss")).default]
    })], CityComponent);
    /***/
  },

  /***/
  "./src/modules/dashboard/components/dashboard.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/modules/dashboard/components/dashboard.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesDashboardComponentsDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/dashboard/components/dashboard.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/modules/dashboard/components/dashboard.component.ts ***!
    \*****************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcModulesDashboardComponentsDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! perfect-scrollbar */
    "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");

    let DashboardComponent = class DashboardComponent {
      constructor(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
      }

      ngOnInit() {
        const isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
          // if we are on windows OS we activate the perfectScrollbar function
          document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        } else {
          document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }

        const elemMainPanel = document.querySelector('.main-panel');
        const elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(ev => {
          this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(event => {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]) {
            if (event.url != this.lastPoppedUrl) this.yScrollStack.push(window.scrollY);
          } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
            if (event.url == this.lastPoppedUrl) {
              this.lastPoppedUrl = undefined;
              window.scrollTo(0, this.yScrollStack.pop());
            } else window.scrollTo(0, 0);
          }
        });
        this._router = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"])).subscribe(event => {
          elemMainPanel.scrollTop = 0;
          elemSidebar.scrollTop = 0;
        });

        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
          let ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["default"](elemMainPanel);
          ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["default"](elemSidebar);
        }
      }

      ngAfterViewInit() {
        this.runOnRouteChange();
      }

      isMaps(path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);

        if (path == titlee) {
          return false;
        } else {
          return true;
        }
      }

      runOnRouteChange() {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
          const elemMainPanel = document.querySelector('.main-panel');
          const ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["default"](elemMainPanel);
          ps.update();
        }
      }

      isMac() {
        let bool = false;

        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
          bool = true;
        }

        return bool;
      }

    };

    DashboardComponent.ctorParameters = () => [{
      type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }];

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/modules/dashboard/components/dashboard.component.scss")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/modules/dashboard/components/data-table/data-table.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/modules/dashboard/components/data-table/data-table.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: DataTableComponent */

  /***/
  function srcModulesDashboardComponentsDataTableDataTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTableComponent", function () {
      return DataTableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services */
    "./src/modules/dashboard/services/index.ts");
    /* harmony import */


    var _state_management__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../state-management */
    "./src/modules/dashboard/state-management/index.ts");

    let DataTableComponent = class DataTableComponent {
      constructor(actions, uploadService, store) {
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

      get filteredAddItems$() {
        if (!this.addItems$ || !this.items$) {
          return this.addItems$;
        }

        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.addItems$, this.items$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => {
          return data[0] && data[1] ? data[0].filter(item => data[1].findIndex(value => value['id'] === item['id']) === -1) : data[0];
        }));
      }

      get itemNameLowerCase() {
        return this.itemName ? this.itemName.toLowerCase() : this.itemName;
      }

      get isAudioUploader() {
        return this.itemName && this.itemName.toLowerCase() === 'audio';
      }

      onAddButtonClick() {
        this.addButtonClick.emit();

        if (this.isAudioUploader) {
          this.audioUpload.nativeElement.click();
        } else {
          this.isAdd = true;
        }
      }

      onAddItem() {
        this.addItemFunc(this.itemToAdd);
        this.itemToAdd = '';
      }

      onEditItem(item) {
        this.editItem.emit(item);
      }

      onDeleteItem(item) {
        if (this.form && this.formFieldName) {
          let newList = this.form.value[this.formFieldName] || [];
          newList = newList.filter(id => item['id'] !== id);
          this.form.get(this.formFieldName).setValue(newList);
        }

        this.deleteItem.emit(item);

        if (this.isAudioUploader) {
          this.store.dispatch(new _state_management__WEBPACK_IMPORTED_MODULE_7__["AudiosActions"].DeleteAudioDataAction(item['id']));
        }
      }

      getName(item) {
        return this.customNameField ? item[this.customNameField] : item['name']['_en'];
      }

      getDescription(item) {
        return this.customDescField ? item[this.customDescField] : item['desc']['_en'];
      }

      startUploadAudio(event) {
        this.uploadingAudio = true;
        this.uploadService.uploadAudio(event, this.uploadFolder).subscribe(file => {
          this.store.dispatch(new _state_management__WEBPACK_IMPORTED_MODULE_7__["AudiosActions"].AddAudioDataAction({
            audio_content: file.url,
            audio_name: file.fileName
          }));
          this.uploadingAudio = false;
          this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_state_management__WEBPACK_IMPORTED_MODULE_7__["AudiosActions"].Actions.AudioDataAdded)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(action => {
            const id = action['payload'];
            this.addItemFunc(id);
          });
        });
      }

      addItemFunc(id) {
        if (this.form && this.formFieldName) {
          let newList = this.form.value[this.formFieldName] || [];
          newList.push(id);
          this.form.get(this.formFieldName).setValue(newList);
        }

        this.addItem.emit(id);
        this.isAdd = false;
      }

    };

    DataTableComponent.ctorParameters = () => [{
      type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
    }, {
      type: _services__WEBPACK_IMPORTED_MODULE_6__["UploadService"]
    }, {
      type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableComponent.prototype, "items$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableComponent.prototype, "addItems$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableComponent.prototype, "allowEdit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableComponent.prototype, "allowAdd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableComponent.prototype, "itemName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableComponent.prototype, "formFieldName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableComponent.prototype, "customNameField", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableComponent.prototype, "customDescField", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableComponent.prototype, "uploadFolder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableComponent.prototype, "addButtonClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableComponent.prototype, "addItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableComponent.prototype, "editItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DataTableComponent.prototype, "deleteItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('audioUpload', {
      static: false
    })], DataTableComponent.prototype, "audioUpload", void 0);
    DataTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-data-table',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./data-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/data-table/data-table.component.html")).default
    })], DataTableComponent);
    /***/
  },

  /***/
  "./src/modules/dashboard/components/footer/footer.component.css":
  /*!**********************************************************************!*\
    !*** ./src/modules/dashboard/components/footer/footer.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesDashboardComponentsFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/dashboard/components/footer/footer.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/modules/dashboard/components/footer/footer.component.ts ***!
    \*********************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcModulesDashboardComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let FooterComponent = class FooterComponent {
      constructor() {
        this.test = new Date();
      }

      ngOnInit() {}

    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/modules/dashboard/components/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/modules/dashboard/components/header/header.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/modules/dashboard/components/header/header.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesDashboardComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .navbar-brand {\n  float: none;\n  font-size: 20px;\n}\n:host .nav-link {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2Rhc2hib2FyZC9jb21wb25lbnRzL2hlYWRlci9EOlxcQW5ndWxhclxcTXlUZXN0UHJvamVjdHNcXEFuaW1hdGlvblRlc3RcXG15RGVzQXBwMS9zcmNcXG1vZHVsZXNcXGRhc2hib2FyZFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9tb2R1bGVzL2Rhc2hib2FyZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5uYXZiYXItYnJhbmQge1xuICAgIGZsb2F0OiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gIC5uYXYtbGluayB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4iLCI6aG9zdCAubmF2YmFyLWJyYW5kIHtcbiAgZmxvYXQ6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbjpob3N0IC5uYXYtbGluayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/modules/dashboard/components/header/header.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/modules/dashboard/components/header/header.component.ts ***!
    \*********************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcModulesDashboardComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../main-menu/main-menu.component */
    "./src/modules/dashboard/components/main-menu/main-menu.component.ts");
    /* harmony import */


    var src_modules_sign_in_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/modules/sign-in/services */
    "./src/modules/sign-in/services/index.ts");

    let HeaderComponent = class HeaderComponent {
      constructor(signInService, router, location, element) {
        this.signInService = signInService;
        this.router = router;
        this.element = element;
        this.mobile_menu_visible = 0;
        this.isCollapsed = true;
        this.location = location;
        this.sidebarVisible = false;
      }

      ngOnInit() {
        this.listTitles = _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].filter(listTitle => listTitle);
        const navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(event => {
          this.sidebarClose();
          var $layer = document.getElementsByClassName('close-layer')[0];

          if ($layer) {
            $layer.remove();
            this.mobile_menu_visible = 0;
          }
        });
      }

      logOut() {
        this.signInService.removeToken();
        this.router.navigate(['/signin']);
      }

      collapse() {
        this.isCollapsed = !this.isCollapsed;
        const navbar = document.getElementsByTagName('nav')[0];
        console.log(navbar);

        if (!this.isCollapsed) {
          navbar.classList.remove('navbar-transparent');
          navbar.classList.add('bg-white');
        } else {
          navbar.classList.add('navbar-transparent');
          navbar.classList.remove('bg-white');
        }
      }

      sidebarOpen() {
        const toggleButton = this.toggleButton;
        const mainPanel = document.getElementsByClassName('main-panel')[0];
        const html = document.getElementsByTagName('html')[0];

        if (window.innerWidth < 991) {
          mainPanel.style.position = 'fixed';
        }

        setTimeout(function () {
          toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
      }

      sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        const mainPanel = document.getElementsByClassName('main-panel')[0];

        if (window.innerWidth < 991) {
          setTimeout(function () {
            mainPanel.style.position = '';
          }, 500);
        }

        this.sidebarVisible = false;
        html.classList.remove('nav-open');
      }

      sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const html = document.getElementsByTagName('html')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];

        if (this.sidebarVisible === false) {
          this.sidebarOpen();
        } else {
          this.sidebarClose();
        }

        const html = document.getElementsByTagName('html')[0];

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
        } else {
          setTimeout(function () {
            $toggle.classList.add('toggled');
          }, 430);
          var $layer = document.createElement('div');
          $layer.setAttribute('class', 'close-layer');

          if (html.querySelectorAll('.main-panel')) {
            document.getElementsByClassName('main-panel')[0].appendChild($layer);
          } else if (html.classList.contains('off-canvas-sidebar')) {
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
      }

    };

    HeaderComponent.ctorParameters = () => [{
      type: src_modules_sign_in_services__WEBPACK_IMPORTED_MODULE_5__["SignInService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    }];

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/modules/dashboard/components/header/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/modules/dashboard/components/index.ts":
  /*!***************************************************!*\
    !*** ./src/modules/dashboard/components/index.ts ***!
    \***************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcModulesDashboardComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/modules/dashboard/components/dashboard.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return _dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"];
    });
    /***/

  },

  /***/
  "./src/modules/dashboard/components/main-menu/main-menu.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/modules/dashboard/components/main-menu/main-menu.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesDashboardComponentsMainMenuMainMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n}\n\n.sidebar-sticky {\n  width: 200px;\n  position: fixed;\n  height: 100vh;\n  box-shadow: 0px 0px 120px 0px rgba(0, 0, 0, 0.15);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2Rhc2hib2FyZC9jb21wb25lbnRzL21haW4tbWVudS9EOlxcQW5ndWxhclxcTXlUZXN0UHJvamVjdHNcXEFuaW1hdGlvblRlc3RcXG15RGVzQXBwMS9zcmNcXG1vZHVsZXNcXGRhc2hib2FyZFxcY29tcG9uZW50c1xcbWFpbi1tZW51XFxtYWluLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9tYWluLW1lbnUvbWFpbi1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFHQyxhQUFBO0VBQ0EsaURBQUE7QUNETCIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9tYWluLW1lbnUvbWFpbi1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaWRlYmFyLXN0aWNreSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAvLyB0b3A6IDA7XG4gICAgLy8gbGVmdDogMDtcbiAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICAvLyB6LWluZGV4OiA5OTk7XG4gICAgLy8gYmFja2dyb3VuZDogIzczODZENTtcbiAgICAvLyBjb2xvcjogI2ZmZjtcbiAgICAvLyB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbiIsIi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaWRlYmFyLXN0aWNreSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/modules/dashboard/components/main-menu/main-menu.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/modules/dashboard/components/main-menu/main-menu.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ROUTES, MainMenuComponent */

  /***/
  function srcModulesDashboardComponentsMainMenuMainMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function () {
      return MainMenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    const ROUTES = [{
      path: '/city',
      title: 'Cities',
      icon: 'location_world',
      class: '',
      additionalPaths: ['addcity', 'city-info']
    }, {
      path: '/route',
      title: 'Routes',
      icon: 'location_pin',
      class: '',
      additionalPaths: ['addroute', 'route-info']
    }, {
      path: '/sight',
      title: 'Sights',
      icon: 'business_bank',
      class: '',
      additionalPaths: ['addsight', 'sight-info']
    }, {
      path: '/accesscodes',
      title: 'Accesscodes',
      icon: 'objects_key-25',
      class: '',
      additionalPaths: ['addaccesscodes', 'accesscodes-info']
    }];
    let MainMenuComponent = class MainMenuComponent {
      ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
      }

      isMobileMenu() {
        if (window.innerWidth > 991) {
          return false;
        }

        return true;
      }

      isActive(menuItem) {
        return menuItem.additionalPaths ? location.pathname.indexOf(menuItem.path) !== -1 || !!menuItem.additionalPaths.find(path => location.pathname.indexOf(path) !== -1) : false;
      }

    };
    MainMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/main-menu/main-menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main-menu.component.scss */
      "./src/modules/dashboard/components/main-menu/main-menu.component.scss")).default]
    })], MainMenuComponent);
    /***/
  },

  /***/
  "./src/modules/dashboard/components/page-content/page-content.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/modules/dashboard/components/page-content/page-content.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: PageContentComponent */

  /***/
  function srcModulesDashboardComponentsPageContentPageContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageContentComponent", function () {
      return PageContentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let PageContentComponent = class PageContentComponent {};
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PageContentComponent.prototype, "title", void 0);
    PageContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-content',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-content.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/page-content/page-content.component.html")).default
    })], PageContentComponent);
    /***/
  },

  /***/
  "./src/modules/dashboard/components/route-info/route-info.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/modules/dashboard/components/route-info/route-info.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesDashboardComponentsRouteInfoRouteInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9yb3V0ZS1pbmZvL3JvdXRlLWluZm8uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/dashboard/components/route-info/route-info.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/modules/dashboard/components/route-info/route-info.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: RouteInfoComponent */

  /***/
  function srcModulesDashboardComponentsRouteInfoRouteInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouteInfoComponent", function () {
      return RouteInfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/add/operator/filter */
    "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_modules_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/modules/shared */
    "./src/modules/shared/index.ts");
    /* harmony import */


    var _state_management__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../state-management */
    "./src/modules/dashboard/state-management/index.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _state_management_states_route__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../state-management/states/route */
    "./src/modules/dashboard/state-management/states/route/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../services */
    "./src/modules/dashboard/services/index.ts");
    /* harmony import */


    var _enums__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../enums */
    "./src/modules/dashboard/enums/index.ts");

    let RouteInfoComponent = class RouteInfoComponent extends src_modules_shared__WEBPACK_IMPORTED_MODULE_5__["AbstractComponent"] {
      constructor(store, router, formBuilder, activateRoute, mapsService, uploadService, renderer) {
        super();
        this.store = store;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activateRoute = activateRoute;
        this.mapsService = mapsService;
        this.uploadService = uploadService;
        this.renderer = renderer;
        this.RouteLength = _enums__WEBPACK_IMPORTED_MODULE_11__["RouteLength"];
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {
          singleSelection: false,
          text: "Select styles",
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          enableSearchFilter: true,
          classes: ""
        };
        this.route$ = this.store.select(_state_management__WEBPACK_IMPORTED_MODULE_6__["routesSelectors"].getActiveRouteSelector).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$));
        this.sights$ = this.store.select(_state_management__WEBPACK_IMPORTED_MODULE_6__["sightSelectors"].getSightsSelector).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$));
        this.audios$ = this.store.select(_state_management__WEBPACK_IMPORTED_MODULE_6__["audioSelectors"].getAudiosSelector).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$));
        this.styles$ = this.store.select(_state_management__WEBPACK_IMPORTED_MODULE_6__["styleSelectors"].getStylesSelector).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$));
        this.updateRouteForm = this.formBuilder.group({
          name: this.formBuilder.group({
            _en: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3)]],
            _es: ['', [//Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3)]],
            _pt: ['', [//Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3)]],
            _de: ['', [//Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3)]],
            _fr: ['', [//Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3)]],
            _it: ['', [//Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3)]]
          }),
          desc: this.formBuilder.group({
            _en: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3)]],
            _es: ['', [//Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3)]],
            _pt: ['', [//Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3)]],
            _de: ['', [//Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3)]],
            _fr: ['', [//Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3)]],
            _it: ['', [//Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3)]]
          }),
          audios_list: [],
          contact_phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(6)]],
          background_url: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3)]],
          hours: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
          kilometers: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
          leght: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
          // location_lat: ['', [
          //   Validators.required
          // ]],
          // location_lng: ['', [
          //   Validators.required
          // ]],
          sights_list: [],
          style: []
        });
        this.route$.subscribe(route => {
          route ? this.updateRouteForm.patchValue(route) : this.updateRouteForm.reset();
        }); // this.updateRouteForm.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe((value: RouteInterface) => {
        //   if (this.marker) {
        //     if (value.location_lat !== this.marker._latlng.lat || value.location_lng !== this.marker._latlng.lng) {
        //       this.marker = this.mapsService.setMarker(this.map, this.marker, value.location_lat, value.location_lng);
        //     }
        //   }
        // });
      }

      get routeLengths() {
        return Object.keys(_enums__WEBPACK_IMPORTED_MODULE_11__["RouteLength"]).map(key => _enums__WEBPACK_IMPORTED_MODULE_11__["RouteLength"][key]);
      }

      get currentSights$() {
        return this.sights$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(sights => {
          return sights ? sights.filter(sight => {
            return this.updateRouteForm.value && this.updateRouteForm.value.sights_list && this.updateRouteForm.value.sights_list.indexOf(sight.id) !== -1;
          }) : [];
        }));
      }

      get currentAudios$() {
        return this.audios$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(audios => {
          return audios ? audios.filter(audio => {
            return this.updateRouteForm.value && this.updateRouteForm.value.audios_list && this.updateRouteForm.value.audios_list.indexOf(audio.id) !== -1;
          }) : [];
        }));
      }

      get currentStyles$() {
        return this.styles$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(styles => {
          return styles ? styles.filter(style => {
            return this.updateRouteForm.value && this.updateRouteForm.value.style && this.updateRouteForm.value.style.indexOf(style.id) !== -1;
          }) : [];
        }));
      }

      ngOnInit() {
        // this.map = this.mapsService.createMap(this.updateRouteForm.get('location_lat').value, this.updateRouteForm.get('location_lng').value);
        // this.map.on('click', (e: any) => {
        //   this.marker = this.mapsService.setMarker(this.map, this.marker, e.latlng.lat, e.latlng.lng);
        //   this.updateRouteForm.get('location_lat').setValue(e.latlng.lat, { emitEvent: false });
        //   this.updateRouteForm.get('location_lng').setValue(e.latlng.lng, { emitEvent: false });
        // });
        this.route$.pipe().subscribe(route => {
          this.editRoute = !!route; //   if (route) {
          //     this.marker = this.mapsService.setMarker(this.map, this.marker, route.location_lat, route.location_lng);
          //   }
        });
        this.styles$.subscribe(data => {
          this.dropdownList = this.getSelectItems(data);
        });
        this.currentStyles$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(styles => {
          this.selectedItems = this.getSelectItems(styles);
        });
      }

      ngOnDestroy() {
        this.store.dispatch(new _state_management_states_route__WEBPACK_IMPORTED_MODULE_9__["RouteActions"].LoadActiveRouteDataAction(null));
      }

      saveRoute() {
        if (this.editRoute) {
          this.route$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(route => {
            this.store.dispatch(new _state_management_states_route__WEBPACK_IMPORTED_MODULE_9__["RouteActions"].UpdateActiveRouteDataAction({
              routeData: Object.assign({}, route, this.updateRouteForm.value),
              id: this.activateRoute.snapshot.paramMap.get('id')
            }));
          });
        } else {
          this.store.dispatch(new _state_management_states_route__WEBPACK_IMPORTED_MODULE_9__["RouteActions"].AddRouteDataAction(this.updateRouteForm.value));
        }

        this.goBack();
      }

      goBack() {
        this.router.navigate(['/route']);
      }

      getLengthName(value) {
        return Object.keys(_enums__WEBPACK_IMPORTED_MODULE_11__["RouteLength"]).find(key => _enums__WEBPACK_IMPORTED_MODULE_11__["RouteLength"][key] === value);
      }

      startUploadBackground(event) {
        this.uploadingBackground = true;
        this.uploadService.uploadImage(event, 'routes/images').subscribe(file => {
          this.updateRouteForm.get('background_url').setValue(file.url);
          this.uploadingBackground = false;
        });
      }

      startUploadAudio(event) {
        this.uploadingAudio = true;
        this.uploadService.uploadAudio(event, 'routes/audio').subscribe(file => {
          this.store.dispatch(new _state_management__WEBPACK_IMPORTED_MODULE_6__["AudiosActions"].AddAudioDataAction({
            audio_content: file.url,
            audio_name: file.fileName
          })); //this.updateRouteForm.get('audi_url').setValue(url);

          this.uploadingAudio = false;
        });
      } // styles functions


      onItemSelect(item) {
        const style = this.updateRouteForm.value.style || [];
        style.push(item.id);
        this.updateRouteForm.get('style').setValue(style);
      }

      OnItemDeSelect(item) {
        let style = this.updateRouteForm.value.style || [];
        style = style.filter(id => id !== item.id);
        this.updateRouteForm.get('style').setValue(style);
      }

      onSelectAll(items) {
        this.updateRouteForm.get('style').setValue(items.map(item => item.id));
      }

      onDeSelectAll(items) {
        this.updateRouteForm.get('style').setValue([]);
      }

      getSelectItems(data) {
        return data.map(style => {
          return {
            itemName: style.name._en,
            id: style.id
          };
        });
      }

      onAddressFocus(event) {
        this.renderer.addClass(event.target.parentElement.parentElement, 'input-group-focus');
      }

      onAddressBlur(event) {
        this.renderer.removeClass(event.target.parentElement.parentElement, 'input-group-focus');
      }

    };

    RouteInfoComponent.ctorParameters = () => [{
      type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _services__WEBPACK_IMPORTED_MODULE_10__["MapsService"]
    }, {
      type: _services__WEBPACK_IMPORTED_MODULE_10__["UploadService"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
    }];

    RouteInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-route-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./route-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/route-info/route-info.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./route-info.component.scss */
      "./src/modules/dashboard/components/route-info/route-info.component.scss")).default]
    })], RouteInfoComponent);
    /***/
  },

  /***/
  "./src/modules/dashboard/components/route/route.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/modules/dashboard/components/route/route.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesDashboardComponentsRouteRouteComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9yb3V0ZS9yb3V0ZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/dashboard/components/route/route.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/modules/dashboard/components/route/route.component.ts ***!
    \*******************************************************************/

  /*! exports provided: RouteComponent */

  /***/
  function srcModulesDashboardComponentsRouteRouteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouteComponent", function () {
      return RouteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _state_management__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../state-management */
    "./src/modules/dashboard/state-management/index.ts");
    /* harmony import */


    var src_modules_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/modules/shared */
    "./src/modules/shared/index.ts");
    /* harmony import */


    var _state_management_states_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../state-management/states/route */
    "./src/modules/dashboard/state-management/states/route/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let RouteComponent = class RouteComponent extends src_modules_shared__WEBPACK_IMPORTED_MODULE_5__["AbstractComponent"] {
      constructor(router, store) {
        super();
        this.router = router;
        this.store = store;
        this.routes$ = this.store.select(_state_management__WEBPACK_IMPORTED_MODULE_4__["routesSelectors"].getRoutesSelector).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$));
      }

      onAddItem() {
        this.router.navigate(['addroute']);
      }

      onEditItem(item) {
        this.router.navigate(["route-info/".concat(item.id)]);
      }

      onDeleteItem(item) {
        confirm("Delete \"".concat(item.name._en, "\"?")) ? this.store.dispatch(new _state_management_states_route__WEBPACK_IMPORTED_MODULE_6__["RouteActions"].DeleteRouteDataAction(item.id)) : null;
      }

    };

    RouteComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
    }, {
      type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
    }];

    RouteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-route',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./route.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/route/route.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./route.component.scss */
      "./src/modules/dashboard/components/route/route.component.scss")).default]
    })], RouteComponent);
    /***/
  },

  /***/
  "./src/modules/dashboard/components/sight-info/sight-info.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/modules/dashboard/components/sight-info/sight-info.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesDashboardComponentsSightInfoSightInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9zaWdodC1pbmZvL3NpZ2h0LWluZm8uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/dashboard/components/sight-info/sight-info.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/modules/dashboard/components/sight-info/sight-info.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: SightInfoComponent */

  /***/
  function srcModulesDashboardComponentsSightInfoSightInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SightInfoComponent", function () {
      return SightInfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/add/operator/filter */
    "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
    /* harmony import */


    var src_modules_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/modules/shared */
    "./src/modules/shared/index.ts");
    /* harmony import */


    var _state_management__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../state-management */
    "./src/modules/dashboard/state-management/index.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _state_management_states_sight__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../state-management/states/sight */
    "./src/modules/dashboard/state-management/states/sight/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _enums__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../enums */
    "./src/modules/dashboard/enums/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../services */
    "./src/modules/dashboard/services/index.ts");

    let SightInfoComponent = class SightInfoComponent extends src_modules_shared__WEBPACK_IMPORTED_MODULE_4__["AbstractComponent"] {
      constructor(store, router, formBuilder, activateRoute, mapsService, uploadService, renderer) {
        super();
        this.store = store;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activateRoute = activateRoute;
        this.mapsService = mapsService;
        this.uploadService = uploadService;
        this.renderer = renderer;
        this.SightLength = _enums__WEBPACK_IMPORTED_MODULE_10__["SightLength"];
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {
          singleSelection: false,
          text: "Select styles",
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          enableSearchFilter: true,
          classes: ""
        };
        this.sight$ = this.store.select(_state_management__WEBPACK_IMPORTED_MODULE_5__["sightSelectors"].getActiveSightSelector).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroyed$));
        this.cities$ = this.store.select(_state_management__WEBPACK_IMPORTED_MODULE_5__["citiesSelectors"].getCitiesSelector).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroyed$));
        this.styles$ = this.store.select(_state_management__WEBPACK_IMPORTED_MODULE_5__["styleSelectors"].getStylesSelector).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroyed$));
        this.updateSightForm = this.formBuilder.group({
          name: this.formBuilder.group({
            _en: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)]],
            _es: ['', [//Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)]],
            _pt: ['', [//Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)]],
            _de: ['', [//Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)]],
            _fr: ['', [//Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)]],
            _it: ['', [//Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)]]
          }),
          desc: this.formBuilder.group({
            _en: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)]],
            _es: ['', [//Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)]],
            _pt: ['', [//Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)]],
            _de: ['', [//Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)]],
            _fr: ['', [//Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)]],
            _it: ['', [//Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)]]
          }),
          audi_url: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)]],
          background_url: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)]],
          position: ['', [//Validators.required
          ]],
          city_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
          lenght: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
          location_lat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
          location_lng: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
          price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(3)]],
          style: []
        });
        this.sight$.subscribe(sight => {
          sight ? this.updateSightForm.patchValue(sight) : this.updateSightForm.reset();
        });
        this.updateSightForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroyed$)).subscribe(value => {
          if (this.marker) {
            if (value.location_lat !== this.marker._latlng.lat || value.location_lng !== this.marker._latlng.lng) {
              this.marker = this.mapsService.setMarker(this.map, this.marker, value.location_lat, value.location_lng);
            }
          }
        });
      }

      get sightLengths() {
        return Object.keys(_enums__WEBPACK_IMPORTED_MODULE_10__["SightLength"]).map(key => _enums__WEBPACK_IMPORTED_MODULE_10__["SightLength"][key]);
      }

      get currentStyles$() {
        return this.styles$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(styles => {
          return styles ? styles.filter(style => {
            return this.updateSightForm.value && this.updateSightForm.value.style && this.updateSightForm.value.style.indexOf(style.id) !== -1;
          }) : [];
        }));
      }

      ngOnInit() {
        this.map = this.mapsService.createMap(this.updateSightForm.get('location_lat').value, this.updateSightForm.get('location_lng').value);
        this.map.on('click', e => {
          this.marker = this.mapsService.setMarker(this.map, this.marker, e.latlng.lat, e.latlng.lng);
          this.updateSightForm.get('location_lat').setValue(e.latlng.lat, {
            emitEvent: false
          });
          this.updateSightForm.get('location_lng').setValue(e.latlng.lng, {
            emitEvent: false
          });
        });
        this.sight$.pipe().subscribe(sight => {
          this.editSight = !!sight;

          if (sight) {
            this.marker = this.mapsService.setMarker(this.map, this.marker, sight.location_lat, sight.location_lng);
          }
        });
        this.styles$.subscribe(data => {
          this.dropdownList = this.getSelectItems(data);
        });
        this.currentStyles$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1)).subscribe(styles => {
          this.selectedItems = this.getSelectItems(styles);
        });
      }

      ngOnDestroy() {
        this.store.dispatch(new _state_management_states_sight__WEBPACK_IMPORTED_MODULE_8__["SightActions"].LoadActiveSightDataAction(null));
      }

      saveSight() {
        this.updateSightForm.value.position === null || '' || 0 ? this.updateSightForm.get('position').setValue(500) : null;

        if (this.editSight) {
          this.sight$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1)).subscribe(sight => {
            this.store.dispatch(new _state_management_states_sight__WEBPACK_IMPORTED_MODULE_8__["SightActions"].UpdateActiveSightDataAction({
              sightData: Object.assign({}, sight, this.updateSightForm.value),
              id: this.activateRoute.snapshot.paramMap.get('id')
            }));
          });
        } else {
          this.store.dispatch(new _state_management_states_sight__WEBPACK_IMPORTED_MODULE_8__["SightActions"].AddSightDataAction(this.updateSightForm.value));
        }

        this.goBack();
      }

      goBack() {
        this.router.navigate(['/sight']);
      }

      getLengthName(value) {
        return Object.keys(_enums__WEBPACK_IMPORTED_MODULE_10__["SightLength"]).find(key => _enums__WEBPACK_IMPORTED_MODULE_10__["SightLength"][key] === value);
      }

      startUploadBackground(event) {
        this.uploadingBackground = true;
        this.uploadService.uploadImage(event, 'sights/images').subscribe(file => {
          this.updateSightForm.get('background_url').setValue(file.url);
          this.uploadingBackground = false;
        });
      }

      startUploadAudio(event) {
        this.uploadingAudio = true;
        this.uploadService.uploadAudio(event, 'sights/audio').subscribe(file => {
          this.updateSightForm.get('audi_url').setValue(file.url);
          this.store.dispatch(new _state_management__WEBPACK_IMPORTED_MODULE_5__["AudiosActions"].AddAudioDataAction({
            audio_content: file.url,
            audio_name: file.fileName
          }));
          this.uploadingAudio = false;
        });
      } // styles functions


      onItemSelect(item) {
        const style = this.updateSightForm.value.style || [];
        style.push(item.id);
        this.updateSightForm.get('style').setValue(style);
      }

      OnItemDeSelect(item) {
        let style = this.updateSightForm.value.style || [];
        style = style.filter(id => id !== item.id);
        this.updateSightForm.get('style').setValue(style);
      }

      onSelectAll(items) {
        this.updateSightForm.get('style').setValue(items.map(item => item.id));
      }

      onDeSelectAll(items) {
        this.updateSightForm.get('style').setValue([]);
      }

      getSelectItems(data) {
        return data.map(style => {
          return {
            itemName: style.name._en,
            id: style.id
          };
        });
      }

      onAddressFocus(event) {
        this.renderer.addClass(event.target.parentElement.parentElement, 'input-group-focus');
      }

      onAddressBlur(event) {
        this.renderer.removeClass(event.target.parentElement.parentElement, 'input-group-focus');
      }

    };

    SightInfoComponent.ctorParameters = () => [{
      type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _services__WEBPACK_IMPORTED_MODULE_11__["MapsService"]
    }, {
      type: _services__WEBPACK_IMPORTED_MODULE_11__["UploadService"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
    }];

    SightInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sight-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sight-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/sight-info/sight-info.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sight-info.component.scss */
      "./src/modules/dashboard/components/sight-info/sight-info.component.scss")).default]
    })], SightInfoComponent);
    /***/
  },

  /***/
  "./src/modules/dashboard/components/sight/sight.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/modules/dashboard/components/sight/sight.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesDashboardComponentsSightSightComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9zaWdodC9zaWdodC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/dashboard/components/sight/sight.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/modules/dashboard/components/sight/sight.component.ts ***!
    \*******************************************************************/

  /*! exports provided: SightComponent */

  /***/
  function srcModulesDashboardComponentsSightSightComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SightComponent", function () {
      return SightComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _state_management__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../state-management */
    "./src/modules/dashboard/state-management/index.ts");
    /* harmony import */


    var src_modules_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/modules/shared */
    "./src/modules/shared/index.ts");
    /* harmony import */


    var _state_management_states_sight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../state-management/states/sight */
    "./src/modules/dashboard/state-management/states/sight/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let SightComponent = class SightComponent extends src_modules_shared__WEBPACK_IMPORTED_MODULE_5__["AbstractComponent"] {
      constructor(router, store) {
        super();
        this.router = router;
        this.store = store;
        this.sights$ = this.store.select(_state_management__WEBPACK_IMPORTED_MODULE_4__["sightSelectors"].getSightsSelector).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed$));
      }

      onAddItem() {
        this.router.navigate(['addsight']);
      }

      onEditItem(item) {
        this.router.navigate(["sight-info/".concat(item.id)]);
      }

      onDeleteItem(item) {
        confirm("Delete \"".concat(item.name._en, "\"?")) ? this.store.dispatch(new _state_management_states_sight__WEBPACK_IMPORTED_MODULE_6__["SightActions"].DeleteSightDataAction(item.id)) : null;
      }

    };

    SightComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
    }, {
      type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
    }];

    SightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sight',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sight.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/sight/sight.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sight.component.scss */
      "./src/modules/dashboard/components/sight/sight.component.scss")).default]
    })], SightComponent);
    /***/
  },

  /***/
  "./src/modules/dashboard/dashboard-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/modules/dashboard/dashboard-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: dashboardRoutes, DashboardRoutingModule */

  /***/
  function srcModulesDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dashboardRoutes", function () {
      return dashboardRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
      return DashboardRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_city_city_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/city/city.component */
    "./src/modules/dashboard/components/city/city.component.ts");
    /* harmony import */


    var _components_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/dashboard.component */
    "./src/modules/dashboard/components/dashboard.component.ts");
    /* harmony import */


    var _components_route_route_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/route/route.component */
    "./src/modules/dashboard/components/route/route.component.ts");
    /* harmony import */


    var _components_sight_sight_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/sight/sight.component */
    "./src/modules/dashboard/components/sight/sight.component.ts");
    /* harmony import */


    var _components_city_info_city_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/city-info/city-info.component */
    "./src/modules/dashboard/components/city-info/city-info.component.ts");
    /* harmony import */


    var _components_route_info_route_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/route-info/route-info.component */
    "./src/modules/dashboard/components/route-info/route-info.component.ts");
    /* harmony import */


    var _components_sight_info_sight_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/sight-info/sight-info.component */
    "./src/modules/dashboard/components/sight-info/sight-info.component.ts");
    /* harmony import */


    var _resolvers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./resolvers */
    "./src/modules/dashboard/resolvers/index.ts");
    /* harmony import */


    var _components_accesscodes_accesscodes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/accesscodes/accesscodes.component */
    "./src/modules/dashboard/components/accesscodes/accesscodes.component.ts");
    /* harmony import */


    var _components_accesscodes_info_accesscodes_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/accesscodes-info/accesscodes-info.component */
    "./src/modules/dashboard/components/accesscodes-info/accesscodes-info.component.ts");

    const dashboardRoutes = [{
      path: '',
      component: _components_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
      resolve: {
        CitiesDataResolver: _resolvers__WEBPACK_IMPORTED_MODULE_10__["CitiesDataResolver"],
        RoutesDataResolver: _resolvers__WEBPACK_IMPORTED_MODULE_10__["RoutesDataResolver"],
        SightsDataResolver: _resolvers__WEBPACK_IMPORTED_MODULE_10__["SightsDataResolver"],
        AudiosDataResolver: _resolvers__WEBPACK_IMPORTED_MODULE_10__["AudiosDataResolver"],
        StylesDataResolver: _resolvers__WEBPACK_IMPORTED_MODULE_10__["StylesDataResolver"],
        AccesscodeDataResolver: _resolvers__WEBPACK_IMPORTED_MODULE_10__["AccesscodeDataResolver"]
      },
      children: [{
        path: '',
        redirectTo: 'city',
        pathMatch: 'full'
      }, {
        path: 'city',
        component: _components_city_city_component__WEBPACK_IMPORTED_MODULE_3__["CityComponent"]
      }, {
        path: 'route',
        component: _components_route_route_component__WEBPACK_IMPORTED_MODULE_5__["RouteComponent"]
      }, {
        path: 'sight',
        component: _components_sight_sight_component__WEBPACK_IMPORTED_MODULE_6__["SightComponent"]
      }, {
        path: 'accesscodes',
        component: _components_accesscodes_accesscodes_component__WEBPACK_IMPORTED_MODULE_11__["AccesscodesComponent"]
      }, {
        path: 'city-info/:id',
        component: _components_city_info_city_info_component__WEBPACK_IMPORTED_MODULE_7__["CityInfoComponent"],
        resolve: {
          CityInfoResolver: _resolvers__WEBPACK_IMPORTED_MODULE_10__["CityInfoResolver"]
        }
      }, {
        path: 'route-info/:id',
        component: _components_route_info_route_info_component__WEBPACK_IMPORTED_MODULE_8__["RouteInfoComponent"],
        resolve: {
          RouteInfoResolver: _resolvers__WEBPACK_IMPORTED_MODULE_10__["RouteInfoResolver"]
        }
      }, {
        path: 'sight-info/:id',
        component: _components_sight_info_sight_info_component__WEBPACK_IMPORTED_MODULE_9__["SightInfoComponent"],
        resolve: {
          SightInfoResolver: _resolvers__WEBPACK_IMPORTED_MODULE_10__["SightInfoResolver"]
        }
      }, {
        path: 'accesscodes-info/:id',
        component: _components_accesscodes_info_accesscodes_info_component__WEBPACK_IMPORTED_MODULE_12__["AccesscodesInfoComponent"],
        resolve: {
          AccesscodInfoResolver: _resolvers__WEBPACK_IMPORTED_MODULE_10__["AccesscodInfoResolver"]
        }
      }, {
        path: 'addcity',
        component: _components_city_info_city_info_component__WEBPACK_IMPORTED_MODULE_7__["CityInfoComponent"]
      }, {
        path: 'addroute',
        component: _components_route_info_route_info_component__WEBPACK_IMPORTED_MODULE_8__["RouteInfoComponent"]
      }, {
        path: 'addsight',
        component: _components_sight_info_sight_info_component__WEBPACK_IMPORTED_MODULE_9__["SightInfoComponent"]
      }, {
        path: 'addaccesscodes',
        component: _components_accesscodes_info_accesscodes_info_component__WEBPACK_IMPORTED_MODULE_12__["AccesscodesInfoComponent"]
      }]
    }];
    let DashboardRoutingModule = class DashboardRoutingModule {};
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(dashboardRoutes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: []
    })], DashboardRoutingModule);
    /***/
  },

  /***/
  "./src/modules/dashboard/dashboard.module.ts":
  /*!***************************************************!*\
    !*** ./src/modules/dashboard/dashboard.module.ts ***!
    \***************************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcModulesDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var angular2_multiselect_dropdown_angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular2-multiselect-dropdown/angular2-multiselect-dropdown */
    "./node_modules/angular2-multiselect-dropdown/angular2-multiselect-dropdown.js");
    /* harmony import */


    var _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/main-menu/main-menu.component */
    "./src/modules/dashboard/components/main-menu/main-menu.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/modules/dashboard/components/header/header.component.ts");
    /* harmony import */


    var _components_city_city_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/city/city.component */
    "./src/modules/dashboard/components/city/city.component.ts");
    /* harmony import */


    var _components_route_route_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/route/route.component */
    "./src/modules/dashboard/components/route/route.component.ts");
    /* harmony import */


    var _components_sight_sight_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/sight/sight.component */
    "./src/modules/dashboard/components/sight/sight.component.ts");
    /* harmony import */


    var _components_city_info_city_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/city-info/city-info.component */
    "./src/modules/dashboard/components/city-info/city-info.component.ts");
    /* harmony import */


    var _components_route_info_route_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/route-info/route-info.component */
    "./src/modules/dashboard/components/route-info/route-info.component.ts");
    /* harmony import */


    var _components_sight_info_sight_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/sight-info/sight-info.component */
    "./src/modules/dashboard/components/sight-info/sight-info.component.ts");
    /* harmony import */


    var _components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/data-table/data-table.component */
    "./src/modules/dashboard/components/data-table/data-table.component.ts");
    /* harmony import */


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/modules/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components */
    "./src/modules/dashboard/components/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./services */
    "./src/modules/dashboard/services/index.ts");
    /* harmony import */


    var _resolvers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./resolvers */
    "./src/modules/dashboard/resolvers/index.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/modules/dashboard/components/footer/footer.component.ts");
    /* harmony import */


    var _services_routeapi_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./services/routeapi.service */
    "./src/modules/dashboard/services/routeapi.service.ts");
    /* harmony import */


    var _services_sightapi_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./services/sightapi.service */
    "./src/modules/dashboard/services/sightapi.service.ts");
    /* harmony import */


    var _components_page_content_page_content_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/page-content/page-content.component */
    "./src/modules/dashboard/components/page-content/page-content.component.ts");
    /* harmony import */


    var _services_styles_api_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./services/styles-api.service */
    "./src/modules/dashboard/services/styles-api.service.ts");
    /* harmony import */


    var _resolvers_accesscodes_resolver__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./resolvers/accesscodes.resolver */
    "./src/modules/dashboard/resolvers/accesscodes.resolver.ts");
    /* harmony import */


    var _resolvers_accesscoddata_resolver__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./resolvers/accesscoddata.resolver */
    "./src/modules/dashboard/resolvers/accesscoddata.resolver.ts");
    /* harmony import */


    var _components_accesscodes_accesscodes_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/accesscodes/accesscodes.component */
    "./src/modules/dashboard/components/accesscodes/accesscodes.component.ts");
    /* harmony import */


    var _components_accesscodes_info_accesscodes_info_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/accesscodes-info/accesscodes-info.component */
    "./src/modules/dashboard/components/accesscodes-info/accesscodes-info.component.ts");

    let DashboardModule = class DashboardModule {};
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"], _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_6__["MainMenuComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _components_city_city_component__WEBPACK_IMPORTED_MODULE_8__["CityComponent"], _components_route_route_component__WEBPACK_IMPORTED_MODULE_9__["RouteComponent"], _components_sight_sight_component__WEBPACK_IMPORTED_MODULE_10__["SightComponent"], _components_city_info_city_info_component__WEBPACK_IMPORTED_MODULE_11__["CityInfoComponent"], _components_route_info_route_info_component__WEBPACK_IMPORTED_MODULE_12__["RouteInfoComponent"], _components_sight_info_sight_info_component__WEBPACK_IMPORTED_MODULE_13__["SightInfoComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"], _components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_14__["DataTableComponent"], _components_page_content_page_content_component__WEBPACK_IMPORTED_MODULE_24__["PageContentComponent"], _components_accesscodes_accesscodes_component__WEBPACK_IMPORTED_MODULE_28__["AccesscodesComponent"], _components_accesscodes_info_accesscodes_info_component__WEBPACK_IMPORTED_MODULE_29__["AccesscodesInfoComponent"]],
      imports: [angular2_multiselect_dropdown_angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__["AngularMultiSelectModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_15__["DashboardRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"]],
      providers: [_services__WEBPACK_IMPORTED_MODULE_17__["AudiosApiService"], _services__WEBPACK_IMPORTED_MODULE_17__["CityApiService"], _resolvers__WEBPACK_IMPORTED_MODULE_18__["CitiesDataResolver"], _resolvers__WEBPACK_IMPORTED_MODULE_18__["CityInfoResolver"], _resolvers__WEBPACK_IMPORTED_MODULE_18__["RoutesDataResolver"], _services_routeapi_service__WEBPACK_IMPORTED_MODULE_22__["RouteApiService"], _resolvers__WEBPACK_IMPORTED_MODULE_18__["RouteInfoResolver"], _services_sightapi_service__WEBPACK_IMPORTED_MODULE_23__["SightApiService"], _resolvers__WEBPACK_IMPORTED_MODULE_18__["SightsDataResolver"], _resolvers__WEBPACK_IMPORTED_MODULE_18__["SightInfoResolver"], _resolvers__WEBPACK_IMPORTED_MODULE_18__["AudiosDataResolver"], _services__WEBPACK_IMPORTED_MODULE_17__["MapsService"], _services__WEBPACK_IMPORTED_MODULE_17__["UploadService"], _services_styles_api_service__WEBPACK_IMPORTED_MODULE_25__["StylesApiService"], _resolvers__WEBPACK_IMPORTED_MODULE_18__["StylesDataResolver"], _services__WEBPACK_IMPORTED_MODULE_17__["AccesscodesApiService"], _resolvers_accesscodes_resolver__WEBPACK_IMPORTED_MODULE_26__["AccesscodInfoResolver"], _resolvers_accesscoddata_resolver__WEBPACK_IMPORTED_MODULE_27__["AccesscodeDataResolver"]]
    })], DashboardModule);
    /***/
  },

  /***/
  "./src/modules/dashboard/enums/index.ts":
  /*!**********************************************!*\
    !*** ./src/modules/dashboard/enums/index.ts ***!
    \**********************************************/

  /*! exports provided: RouteLength, SightLength */

  /***/
  function srcModulesDashboardEnumsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _route_length_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./route-length.enum */
    "./src/modules/dashboard/enums/route-length.enum.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RouteLength", function () {
      return _route_length_enum__WEBPACK_IMPORTED_MODULE_1__["RouteLength"];
    });
    /* harmony import */


    var _sight_length_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sight-length.enum */
    "./src/modules/dashboard/enums/sight-length.enum.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SightLength", function () {
      return _sight_length_enum__WEBPACK_IMPORTED_MODULE_2__["SightLength"];
    });
    /***/

  },

  /***/
  "./src/modules/dashboard/enums/route-length.enum.ts":
  /*!**********************************************************!*\
    !*** ./src/modules/dashboard/enums/route-length.enum.ts ***!
    \**********************************************************/

  /*! exports provided: RouteLength */

  /***/
  function srcModulesDashboardEnumsRouteLengthEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouteLength", function () {
      return RouteLength;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var RouteLength;

    (function (RouteLength) {
      RouteLength["Short"] = "short";
      RouteLength["Medium"] = "medium";
      RouteLength["Long"] = "long";
    })(RouteLength || (RouteLength = {}));
    /***/

  },

  /***/
  "./src/modules/dashboard/enums/sight-length.enum.ts":
  /*!**********************************************************!*\
    !*** ./src/modules/dashboard/enums/sight-length.enum.ts ***!
    \**********************************************************/

  /*! exports provided: SightLength */

  /***/
  function srcModulesDashboardEnumsSightLengthEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SightLength", function () {
      return SightLength;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SightLength;

    (function (SightLength) {
      SightLength["Short"] = "short";
      SightLength["Medium"] = "medium";
      SightLength["Long"] = "long";
    })(SightLength || (SightLength = {}));
    /***/

  },

  /***/
  "./src/modules/dashboard/resolvers/accesscoddata.resolver.ts":
  /*!*******************************************************************!*\
    !*** ./src/modules/dashboard/resolvers/accesscoddata.resolver.ts ***!
    \*******************************************************************/

  /*! exports provided: AccesscodeDataResolver */

  /***/
  function srcModulesDashboardResolversAccesscoddataResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccesscodeDataResolver", function () {
      return AccesscodeDataResolver;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _state_management_states_accesscodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../state-management/states/accesscodes */
    "./src/modules/dashboard/state-management/states/accesscodes/index.ts");

    let AccesscodeDataResolver = class AccesscodeDataResolver {
      constructor(store, actions) {
        this.store = store;
        this.actions = actions;
      }

      resolve() {
        this.store.dispatch(new _state_management_states_accesscodes__WEBPACK_IMPORTED_MODULE_5__["AccesscodesActions"].LoadAccesscodesDataAction());
        return this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_state_management_states_accesscodes__WEBPACK_IMPORTED_MODULE_5__["AccesscodesActions"].Actions.SetAccesscodesData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
      }

    };

    AccesscodeDataResolver.ctorParameters = () => [{
      type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
    }, {
      type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]
    }];

    AccesscodeDataResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AccesscodeDataResolver);
    /***/
  },

  /***/
  "./src/modules/dashboard/resolvers/accesscodes.resolver.ts":
  /*!*****************************************************************!*\
    !*** ./src/modules/dashboard/resolvers/accesscodes.resolver.ts ***!
    \*****************************************************************/

  /*! exports provided: AccesscodInfoResolver */

  /***/
  function srcModulesDashboardResolversAccesscodesResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccesscodInfoResolver", function () {
      return AccesscodInfoResolver;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _state_management_states_accesscodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../state-management/states/accesscodes */
    "./src/modules/dashboard/state-management/states/accesscodes/index.ts");

    let AccesscodInfoResolver = class AccesscodInfoResolver {
      constructor(store, actions) {
        this.store = store;
        this.actions = actions;
      }

      resolve(route) {
        this.store.dispatch(new _state_management_states_accesscodes__WEBPACK_IMPORTED_MODULE_5__["AccesscodesActions"].LoadActiveAccesscodesDataAction(route.params.id));
        return this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_state_management_states_accesscodes__WEBPACK_IMPORTED_MODULE_5__["AccesscodesActions"].Actions.SetActiveAccesscodData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
      }

    };

    AccesscodInfoResolver.ctorParameters = () => [{
      type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
    }, {
      type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]
    }];

    AccesscodInfoResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AccesscodInfoResolver);
    /***/
  },

  /***/
  "./src/modules/dashboard/resolvers/audiosdata.resolver.ts":
  /*!****************************************************************!*\
    !*** ./src/modules/dashboard/resolvers/audiosdata.resolver.ts ***!
    \****************************************************************/

  /*! exports provided: AudiosDataResolver */

  /***/
  function srcModulesDashboardResolversAudiosdataResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AudiosDataResolver", function () {
      return AudiosDataResolver;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _state_management_states_audios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../state-management/states/audios */
    "./src/modules/dashboard/state-management/states/audios/index.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    let AudiosDataResolver = class AudiosDataResolver {
      constructor(store, actions) {
        this.store = store;
        this.actions = actions;
      }

      resolve() {
        this.store.dispatch(new _state_management_states_audios__WEBPACK_IMPORTED_MODULE_3__["AudiosActions"].LoadAudiosDataAction());
        return this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_state_management_states_audios__WEBPACK_IMPORTED_MODULE_3__["AudiosActions"].Actions.SetAudiosData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
      }

    };

    AudiosDataResolver.ctorParameters = () => [{
      type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
    }, {
      type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]
    }];

    AudiosDataResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AudiosDataResolver);
    /***/
  },

  /***/
  "./src/modules/dashboard/resolvers/citiesdata.resolver.ts":
  /*!****************************************************************!*\
    !*** ./src/modules/dashboard/resolvers/citiesdata.resolver.ts ***!
    \****************************************************************/

  /*! exports provided: CitiesDataResolver */

  /***/
  function srcModulesDashboardResolversCitiesdataResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CitiesDataResolver", function () {
      return CitiesDataResolver;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _state_management_states_cities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../state-management/states/cities */
    "./src/modules/dashboard/state-management/states/cities/index.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    let CitiesDataResolver = class CitiesDataResolver {
      constructor(store, actions) {
        this.store = store;
        this.actions = actions;
      }

      resolve() {
        this.store.dispatch(new _state_management_states_cities__WEBPACK_IMPORTED_MODULE_3__["CitiesActions"].LoadCitiesDataAction());
        return this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_state_management_states_cities__WEBPACK_IMPORTED_MODULE_3__["CitiesActions"].Actions.SetCitiesData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
      }

    };

    CitiesDataResolver.ctorParameters = () => [{
      type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
    }, {
      type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]
    }];

    CitiesDataResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], CitiesDataResolver);
    /***/
  },

  /***/
  "./src/modules/dashboard/resolvers/city.resolver.ts":
  /*!**********************************************************!*\
    !*** ./src/modules/dashboard/resolvers/city.resolver.ts ***!
    \**********************************************************/

  /*! exports provided: CityInfoResolver */

  /***/
  function srcModulesDashboardResolversCityResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CityInfoResolver", function () {
      return CityInfoResolver;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _state_management_states_cities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../state-management/states/cities */
    "./src/modules/dashboard/state-management/states/cities/index.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    let CityInfoResolver = class CityInfoResolver {
      constructor(store, actions) {
        this.store = store;
        this.actions = actions;
      }

      resolve(route) {
        this.store.dispatch(new _state_management_states_cities__WEBPACK_IMPORTED_MODULE_3__["CitiesActions"].LoadActiveCityDataAction(route.params.id));
        return this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_state_management_states_cities__WEBPACK_IMPORTED_MODULE_3__["CitiesActions"].Actions.SetActiveCityData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
      }

    };

    CityInfoResolver.ctorParameters = () => [{
      type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
    }, {
      type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]
    }];

    CityInfoResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], CityInfoResolver);
    /***/
  },

  /***/
  "./src/modules/dashboard/resolvers/index.ts":
  /*!**************************************************!*\
    !*** ./src/modules/dashboard/resolvers/index.ts ***!
    \**************************************************/

  /*! exports provided: AccesscodeDataResolver, AccesscodInfoResolver, AudiosDataResolver, CitiesDataResolver, CityInfoResolver, RoutesDataResolver, RouteInfoResolver, SightsDataResolver, SightInfoResolver, StylesDataResolver */

  /***/
  function srcModulesDashboardResolversIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _audiosdata_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./audiosdata.resolver */
    "./src/modules/dashboard/resolvers/audiosdata.resolver.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AudiosDataResolver", function () {
      return _audiosdata_resolver__WEBPACK_IMPORTED_MODULE_1__["AudiosDataResolver"];
    });
    /* harmony import */


    var _citiesdata_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./citiesdata.resolver */
    "./src/modules/dashboard/resolvers/citiesdata.resolver.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CitiesDataResolver", function () {
      return _citiesdata_resolver__WEBPACK_IMPORTED_MODULE_2__["CitiesDataResolver"];
    });
    /* harmony import */


    var _city_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./city.resolver */
    "./src/modules/dashboard/resolvers/city.resolver.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CityInfoResolver", function () {
      return _city_resolver__WEBPACK_IMPORTED_MODULE_3__["CityInfoResolver"];
    });
    /* harmony import */


    var _routesdata_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./routesdata.resolver */
    "./src/modules/dashboard/resolvers/routesdata.resolver.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RoutesDataResolver", function () {
      return _routesdata_resolver__WEBPACK_IMPORTED_MODULE_4__["RoutesDataResolver"];
    });
    /* harmony import */


    var _route_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./route.resolver */
    "./src/modules/dashboard/resolvers/route.resolver.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RouteInfoResolver", function () {
      return _route_resolver__WEBPACK_IMPORTED_MODULE_5__["RouteInfoResolver"];
    });
    /* harmony import */


    var _sightsdata_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sightsdata.resolver */
    "./src/modules/dashboard/resolvers/sightsdata.resolver.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SightsDataResolver", function () {
      return _sightsdata_resolver__WEBPACK_IMPORTED_MODULE_6__["SightsDataResolver"];
    });
    /* harmony import */


    var _sight_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./sight.resolver */
    "./src/modules/dashboard/resolvers/sight.resolver.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SightInfoResolver", function () {
      return _sight_resolver__WEBPACK_IMPORTED_MODULE_7__["SightInfoResolver"];
    });
    /* harmony import */


    var _stylesdata_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./stylesdata.resolver */
    "./src/modules/dashboard/resolvers/stylesdata.resolver.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StylesDataResolver", function () {
      return _stylesdata_resolver__WEBPACK_IMPORTED_MODULE_8__["StylesDataResolver"];
    });
    /* harmony import */


    var _accesscoddata_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./accesscoddata.resolver */
    "./src/modules/dashboard/resolvers/accesscoddata.resolver.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AccesscodeDataResolver", function () {
      return _accesscoddata_resolver__WEBPACK_IMPORTED_MODULE_9__["AccesscodeDataResolver"];
    });
    /* harmony import */


    var _accesscodes_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./accesscodes.resolver */
    "./src/modules/dashboard/resolvers/accesscodes.resolver.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AccesscodInfoResolver", function () {
      return _accesscodes_resolver__WEBPACK_IMPORTED_MODULE_10__["AccesscodInfoResolver"];
    });
    /***/

  },

  /***/
  "./src/modules/dashboard/resolvers/route.resolver.ts":
  /*!***********************************************************!*\
    !*** ./src/modules/dashboard/resolvers/route.resolver.ts ***!
    \***********************************************************/

  /*! exports provided: RouteInfoResolver */

  /***/
  function srcModulesDashboardResolversRouteResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouteInfoResolver", function () {
      return RouteInfoResolver;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _state_management_states_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../state-management/states/route */
    "./src/modules/dashboard/state-management/states/route/index.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    let RouteInfoResolver = class RouteInfoResolver {
      constructor(store, actions) {
        this.store = store;
        this.actions = actions;
      }

      resolve(route) {
        this.store.dispatch(new _state_management_states_route__WEBPACK_IMPORTED_MODULE_3__["RouteActions"].LoadActiveRouteDataAction(route.params.id));
        return this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_state_management_states_route__WEBPACK_IMPORTED_MODULE_3__["RouteActions"].Actions.SetActiveRouteData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
      }

    };

    RouteInfoResolver.ctorParameters = () => [{
      type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
    }, {
      type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]
    }];

    RouteInfoResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], RouteInfoResolver);
    /***/
  },

  /***/
  "./src/modules/dashboard/resolvers/routesdata.resolver.ts":
  /*!****************************************************************!*\
    !*** ./src/modules/dashboard/resolvers/routesdata.resolver.ts ***!
    \****************************************************************/

  /*! exports provided: RoutesDataResolver */

  /***/
  function srcModulesDashboardResolversRoutesdataResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoutesDataResolver", function () {
      return RoutesDataResolver;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _state_management_states_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../state-management/states/route */
    "./src/modules/dashboard/state-management/states/route/index.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    let RoutesDataResolver = class RoutesDataResolver {
      constructor(store, actions) {
        this.store = store;
        this.actions = actions;
      }

      resolve() {
        this.store.dispatch(new _state_management_states_route__WEBPACK_IMPORTED_MODULE_3__["RouteActions"].LoadRoutesDataAction());
        return this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_state_management_states_route__WEBPACK_IMPORTED_MODULE_3__["RouteActions"].Actions.SetRoutesData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
      }

    };

    RoutesDataResolver.ctorParameters = () => [{
      type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
    }, {
      type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]
    }];

    RoutesDataResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], RoutesDataResolver);
    /***/
  },

  /***/
  "./src/modules/dashboard/resolvers/sight.resolver.ts":
  /*!***********************************************************!*\
    !*** ./src/modules/dashboard/resolvers/sight.resolver.ts ***!
    \***********************************************************/

  /*! exports provided: SightInfoResolver */

  /***/
  function srcModulesDashboardResolversSightResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SightInfoResolver", function () {
      return SightInfoResolver;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _state_management_states_sight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../state-management/states/sight */
    "./src/modules/dashboard/state-management/states/sight/index.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    let SightInfoResolver = class SightInfoResolver {
      constructor(store, actions) {
        this.store = store;
        this.actions = actions;
      }

      resolve(route) {
        this.store.dispatch(new _state_management_states_sight__WEBPACK_IMPORTED_MODULE_3__["SightActions"].LoadActiveSightDataAction(route.params.id));
        return this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_state_management_states_sight__WEBPACK_IMPORTED_MODULE_3__["SightActions"].Actions.SetActiveSightData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
      }

    };

    SightInfoResolver.ctorParameters = () => [{
      type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
    }, {
      type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]
    }];

    SightInfoResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SightInfoResolver);
    /***/
  },

  /***/
  "./src/modules/dashboard/resolvers/sightsdata.resolver.ts":
  /*!****************************************************************!*\
    !*** ./src/modules/dashboard/resolvers/sightsdata.resolver.ts ***!
    \****************************************************************/

  /*! exports provided: SightsDataResolver */

  /***/
  function srcModulesDashboardResolversSightsdataResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SightsDataResolver", function () {
      return SightsDataResolver;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _state_management_states_sight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../state-management/states/sight */
    "./src/modules/dashboard/state-management/states/sight/index.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    let SightsDataResolver = class SightsDataResolver {
      constructor(store, actions) {
        this.store = store;
        this.actions = actions;
      }

      resolve() {
        this.store.dispatch(new _state_management_states_sight__WEBPACK_IMPORTED_MODULE_3__["SightActions"].LoadSightsDataAction());
        return this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_state_management_states_sight__WEBPACK_IMPORTED_MODULE_3__["SightActions"].Actions.SetSightsData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
      }

    };

    SightsDataResolver.ctorParameters = () => [{
      type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
    }, {
      type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]
    }];

    SightsDataResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SightsDataResolver);
    /***/
  },

  /***/
  "./src/modules/dashboard/resolvers/stylesdata.resolver.ts":
  /*!****************************************************************!*\
    !*** ./src/modules/dashboard/resolvers/stylesdata.resolver.ts ***!
    \****************************************************************/

  /*! exports provided: StylesDataResolver */

  /***/
  function srcModulesDashboardResolversStylesdataResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StylesDataResolver", function () {
      return StylesDataResolver;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _state_management_states_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../state-management/states/styles */
    "./src/modules/dashboard/state-management/states/styles/index.ts");

    let StylesDataResolver = class StylesDataResolver {
      constructor(store, actions) {
        this.store = store;
        this.actions = actions;
      }

      resolve() {
        this.store.dispatch(new _state_management_states_styles__WEBPACK_IMPORTED_MODULE_5__["StylesActions"].LoadStylesDataAction());
        return this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_state_management_states_styles__WEBPACK_IMPORTED_MODULE_5__["StylesActions"].Actions.SetStylesData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
      }

    };

    StylesDataResolver.ctorParameters = () => [{
      type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
    }, {
      type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]
    }];

    StylesDataResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], StylesDataResolver);
    /***/
  },

  /***/
  "./src/modules/dashboard/services/accesscodes-api.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/modules/dashboard/services/accesscodes-api.service.ts ***!
    \*******************************************************************/

  /*! exports provided: AccesscodesApiService */

  /***/
  function srcModulesDashboardServicesAccesscodesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccesscodesApiService", function () {
      return AccesscodesApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AccesscodesApiService = class AccesscodesApiService {
      constructor(afs) {
        this.afs = afs;
        this.accesscodesCollection = this.afs.collection('accesscodes');
      }

      getAccesscodes() {
        return this.accesscodesCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return Object.assign({
            id
          }, data);
        })));
      }

      getAccesscod(id) {
        const itemDoc = this.afs.doc("accesscodes/".concat(id));
        return itemDoc.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(city => {
          return Object.assign({
            id
          }, city);
        }));
      }

      updateAccesscode(newAccesscod, id) {
        const itemDoc = this.afs.doc("accesscodes/".concat(id));

        const _newAccesscod = Object.assign({}, newAccesscod);

        delete _newAccesscod.id;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(itemDoc.update(_newAccesscod));
      }

      deleteAccesscodes(id) {
        const userDoc = this.afs.doc("accesscodes/".concat(id));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(userDoc.delete());
      }

      addAccesscodes(city) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.accesscodesCollection.add(city)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {}));
      }

    };

    AccesscodesApiService.ctorParameters = () => [{
      type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
    }];

    AccesscodesApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])()], AccesscodesApiService);
    /***/
  },

  /***/
  "./src/modules/dashboard/services/audios-api.service.ts":
  /*!**************************************************************!*\
    !*** ./src/modules/dashboard/services/audios-api.service.ts ***!
    \**************************************************************/

  /*! exports provided: AudiosApiService */

  /***/
  function srcModulesDashboardServicesAudiosApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AudiosApiService", function () {
      return AudiosApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AudiosApiService = class AudiosApiService {
      constructor(afs) {
        this.afs = afs;
        this.audiosCollection = this.afs.collection('audios');
      }

      getAudios() {
        return this.audiosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return Object.assign({
            id
          }, data);
        })));
      }

      getAudio(id) {
        const itemDoc = this.afs.doc("audios/".concat(id));
        return itemDoc.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(audio => {
          return Object.assign({
            id
          }, audio);
        }));
      }

      deleteAudio(id) {
        const userDoc = this.afs.doc("audios/".concat(id));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(userDoc.delete());
      }

      addAudio(audio) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.audiosCollection.add(audio)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(audio => audio.id));
      }

    };

    AudiosApiService.ctorParameters = () => [{
      type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
    }];

    AudiosApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])()], AudiosApiService);
    /***/
  },

  /***/
  "./src/modules/dashboard/services/cityapi.service.ts":
  /*!***********************************************************!*\
    !*** ./src/modules/dashboard/services/cityapi.service.ts ***!
    \***********************************************************/

  /*! exports provided: CityApiService */

  /***/
  function srcModulesDashboardServicesCityapiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CityApiService", function () {
      return CityApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let CityApiService = class CityApiService {
      constructor(afs) {
        this.afs = afs;
        this.citysCollection = this.afs.collection('city');
      }

      getCities() {
        return this.citysCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return Object.assign({
            id
          }, data);
        })));
      }

      getCity(id) {
        const itemDoc = this.afs.doc("city/".concat(id));
        return itemDoc.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(city => {
          return Object.assign({
            id
          }, city);
        }));
      }

      updateCity(newCity, id) {
        const itemDoc = this.afs.doc("city/".concat(id));

        const _newCity = Object.assign({}, newCity);

        delete _newCity.id;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(itemDoc.update(_newCity));
      }

      deleteCity(id) {
        const userDoc = this.afs.doc("city/".concat(id));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(userDoc.delete());
      }

      addCity(city) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.citysCollection.add(city)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {}));
      }

    };

    CityApiService.ctorParameters = () => [{
      type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
    }];

    CityApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])()], CityApiService);
    /***/
  },

  /***/
  "./src/modules/dashboard/services/index.ts":
  /*!*************************************************!*\
    !*** ./src/modules/dashboard/services/index.ts ***!
    \*************************************************/

  /*! exports provided: AudiosApiService, CityApiService, MapsService, RouteApiService, SightApiService, UploadService, AccesscodesApiService */

  /***/
  function srcModulesDashboardServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _audios_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./audios-api.service */
    "./src/modules/dashboard/services/audios-api.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AudiosApiService", function () {
      return _audios_api_service__WEBPACK_IMPORTED_MODULE_1__["AudiosApiService"];
    });
    /* harmony import */


    var _cityapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./cityapi.service */
    "./src/modules/dashboard/services/cityapi.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CityApiService", function () {
      return _cityapi_service__WEBPACK_IMPORTED_MODULE_2__["CityApiService"];
    });
    /* harmony import */


    var _maps_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./maps.service */
    "./src/modules/dashboard/services/maps.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MapsService", function () {
      return _maps_service__WEBPACK_IMPORTED_MODULE_3__["MapsService"];
    });
    /* harmony import */


    var _routeapi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./routeapi.service */
    "./src/modules/dashboard/services/routeapi.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RouteApiService", function () {
      return _routeapi_service__WEBPACK_IMPORTED_MODULE_4__["RouteApiService"];
    });
    /* harmony import */


    var _sightapi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sightapi.service */
    "./src/modules/dashboard/services/sightapi.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SightApiService", function () {
      return _sightapi_service__WEBPACK_IMPORTED_MODULE_5__["SightApiService"];
    });
    /* harmony import */


    var _upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./upload.service */
    "./src/modules/dashboard/services/upload.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UploadService", function () {
      return _upload_service__WEBPACK_IMPORTED_MODULE_6__["UploadService"];
    });
    /* harmony import */


    var _accesscodes_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./accesscodes-api.service */
    "./src/modules/dashboard/services/accesscodes-api.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AccesscodesApiService", function () {
      return _accesscodes_api_service__WEBPACK_IMPORTED_MODULE_7__["AccesscodesApiService"];
    });
    /***/

  },

  /***/
  "./src/modules/dashboard/services/maps.service.ts":
  /*!********************************************************!*\
    !*** ./src/modules/dashboard/services/maps.service.ts ***!
    \********************************************************/

  /*! exports provided: MapsService */

  /***/
  function srcModulesDashboardServicesMapsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapsService", function () {
      return MapsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var places_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! places.js */
    "./node_modules/places.js/index.js");
    /* harmony import */


    var places_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(places_js__WEBPACK_IMPORTED_MODULE_2__);

    var markers = [];
    let MapsService = class MapsService {
      createMap(viewLat, viewLng) {
        const zoom = viewLat !== null && viewLng !== null ? 13 : 1;
        const map = L.map('map').setView([viewLat || 0, viewLng || 0], zoom); //viewLat || 51.505, viewLng || -0.09

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
          attribution: '',
          maxZoom: 18,
          id: 'mapbox.streets',
          accessToken: 'pk.eyJ1IjoiZ3puZ3puIiwiYSI6ImNqc3N4NDEwOTFpb3M0YW9lYzFnNW43NDUifQ.SGCPcbkRSOTsZaY2D6ALKQ'
        }).addTo(map);
        var osmLayer = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          minZoom: 1,
          maxZoom: 13
        }); //map.setView(new L.LatLng(0, 0), 1);

        map.addLayer(osmLayer);
        var placesAutocomplete = places_js__WEBPACK_IMPORTED_MODULE_2___default()({
          appId: 'plNV2TW92I8R',
          apiKey: '3e9387d7ab0dcfe0fcbb0bbd59605779',
          // The following change: <HTMLInputElement>
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
          markers.forEach(function (marker, markerIndex) {
            if (markerIndex === e.suggestionIndex) {
              markers = [marker];
              marker.setOpacity(1);
              findBestZoom();
            } else {
              removeMarker(marker);
            }
          });
        }

        function handleOnClear() {
          map.setView(new L.LatLng(0, 0), 1);
          markers.forEach(removeMarker);
        }

        function handleOnCursorchanged(e) {
          markers.forEach(function (marker, markerIndex) {
            if (markerIndex === e.suggestionIndex) {
              marker.setOpacity(1);
              marker.setZIndexOffset(1000);
            } else {
              marker.setZIndexOffset(0);
              marker.setOpacity(0.5);
            }
          });
        }

        function addMarker(suggestion) {
          var marker = L.marker(suggestion.latlng, {
            opacity: .4
          }); //marker.addTo(map);

          markers.push(marker);
        }

        function removeMarker(marker) {
          map.removeLayer(marker);
        }

        function findBestZoom() {
          var featureGroup = L.featureGroup(markers);
          map.fitBounds(featureGroup.getBounds().pad(0.5), {
            animate: false
          });
        }

        return map;
      }

      setMarker(map, marker, lat, lng) {
        if (marker) {
          const latlng = L.latLng(lat, lng);
          marker.setLatLng(latlng);
          return marker;
        } else {
          return L.marker([lat, lng]).addTo(map);
        }
      }

    };
    MapsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], MapsService);
    /***/
  },

  /***/
  "./src/modules/dashboard/services/routeapi.service.ts":
  /*!************************************************************!*\
    !*** ./src/modules/dashboard/services/routeapi.service.ts ***!
    \************************************************************/

  /*! exports provided: RouteApiService */

  /***/
  function srcModulesDashboardServicesRouteapiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouteApiService", function () {
      return RouteApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let RouteApiService = class RouteApiService {
      constructor(afs) {
        this.afs = afs;
        this.RoutesCollection = this.afs.collection('itineraries');
      }

      getRoutes() {
        return this.RoutesCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return Object.assign({
            id
          }, data);
        })));
      }

      getRoute(id) {
        const itemDoc = this.afs.doc("itineraries/".concat(id));
        return itemDoc.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(route => {
          return Object.assign({
            id
          }, route);
        }));
      }

      updateRoute(newRoute, id) {
        const itemDoc = this.afs.doc("itineraries/".concat(id));

        const _newRoute = Object.assign({}, newRoute);

        delete _newRoute.id;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(itemDoc.update(_newRoute));
      }

      deleteRoute(id) {
        const userDoc = this.afs.doc("itineraries/".concat(id));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(userDoc.delete());
      }

      addRoute(route) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.RoutesCollection.add(route)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {}));
      }

    };

    RouteApiService.ctorParameters = () => [{
      type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
    }];

    RouteApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])()], RouteApiService);
    /***/
  },

  /***/
  "./src/modules/dashboard/services/sightapi.service.ts":
  /*!************************************************************!*\
    !*** ./src/modules/dashboard/services/sightapi.service.ts ***!
    \************************************************************/

  /*! exports provided: SightApiService */

  /***/
  function srcModulesDashboardServicesSightapiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SightApiService", function () {
      return SightApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let SightApiService = class SightApiService {
      constructor(afs) {
        this.afs = afs;
        this.sightsCollection = this.afs.collection('sights');
      }

      getSights() {
        return this.sightsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return Object.assign({
            id
          }, data);
        })));
      }

      getSight(id) {
        const itemDoc = this.afs.doc("sights/".concat(id));
        return itemDoc.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(sight => {
          return Object.assign({
            id
          }, sight);
        }));
      }

      updateSight(newSight, id) {
        const itemDoc = this.afs.doc("sights/".concat(id));

        const _newSight = Object.assign({}, newSight);

        delete _newSight.id;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(itemDoc.update(_newSight));
      }

      deleteSight(id) {
        const userDoc = this.afs.doc("sights/".concat(id));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(userDoc.delete());
      }

      addSight(sight) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.sightsCollection.add(sight)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {}));
      }

    };

    SightApiService.ctorParameters = () => [{
      type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
    }];

    SightApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])()], SightApiService);
    /***/
  },

  /***/
  "./src/modules/dashboard/services/styles-api.service.ts":
  /*!**************************************************************!*\
    !*** ./src/modules/dashboard/services/styles-api.service.ts ***!
    \**************************************************************/

  /*! exports provided: StylesApiService */

  /***/
  function srcModulesDashboardServicesStylesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StylesApiService", function () {
      return StylesApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let StylesApiService = class StylesApiService {
      constructor(afs) {
        this.afs = afs;
        this.stylesCollection = this.afs.collection('styles');
      }

      getStyles() {
        return this.stylesCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return Object.assign({
            id
          }, data);
        })));
      }

    };

    StylesApiService.ctorParameters = () => [{
      type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
    }];

    StylesApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()], StylesApiService);
    /***/
  },

  /***/
  "./src/modules/dashboard/services/upload.service.ts":
  /*!**********************************************************!*\
    !*** ./src/modules/dashboard/services/upload.service.ts ***!
    \**********************************************************/

  /*! exports provided: UploadService */

  /***/
  function srcModulesDashboardServicesUploadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadService", function () {
      return UploadService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angularfire2/storage */
    "./node_modules/angularfire2/storage/index.js");
    /* harmony import */


    var angularfire2_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    let UploadService = class UploadService {
      constructor(storage) {
        this.storage = storage;
      }

      uploadImage(event, folder) {
        return this.upload(event.item(0), folder);
      }

      uploadAudio(event, folder) {
        return this.upload(event.item(0), folder);
      }

      upload(file, folder) {
        const path = "".concat(folder, "/").concat(new Date().getTime(), "_").concat(file.name);
        const subject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        const task = this.storage.upload(path, file);
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
          this.storage.ref(path).getDownloadURL().subscribe(url => {
            subject.next({
              url,
              fileName: file.name
            });
          });
        })).subscribe();
        return subject;
      }

    };

    UploadService.ctorParameters = () => [{
      type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]
    }];

    UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], UploadService);
    /***/
  },

  /***/
  "./src/modules/dashboard/state-management/index.ts":
  /*!*********************************************************!*\
    !*** ./src/modules/dashboard/state-management/index.ts ***!
    \*********************************************************/

  /*! exports provided: templarReducers, getCitiesState, getRoutesState, getSightState, getAudiosState, getStyleState, getAccesscodesState, getCitiesData, getActiveCityData, citiesSelectors, getRoutesData, getActiveRouteData, routesSelectors, getSightsData, getActiveSightData, sightSelectors, getAudiosData, audioSelectors, getStylesData, styleSelectors, getAccesscodesData, getActiveAccesscodData, accesscodesSelectors, AudiosActions, AudiosEffects, audiosReducer, CitiesActions, CitiesEffects, citiesReducer, RouteActions, RoutesEffects, routeReducer, SightActions, SightsEffects, sightReducer */

  /***/
  function srcModulesDashboardStateManagementIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _states__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./states */
    "./src/modules/dashboard/state-management/states/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AudiosActions", function () {
      return _states__WEBPACK_IMPORTED_MODULE_1__["AudiosActions"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AudiosEffects", function () {
      return _states__WEBPACK_IMPORTED_MODULE_1__["AudiosEffects"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "audiosReducer", function () {
      return _states__WEBPACK_IMPORTED_MODULE_1__["audiosReducer"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CitiesActions", function () {
      return _states__WEBPACK_IMPORTED_MODULE_1__["CitiesActions"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CitiesEffects", function () {
      return _states__WEBPACK_IMPORTED_MODULE_1__["CitiesEffects"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "citiesReducer", function () {
      return _states__WEBPACK_IMPORTED_MODULE_1__["citiesReducer"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RouteActions", function () {
      return _states__WEBPACK_IMPORTED_MODULE_1__["RouteActions"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RoutesEffects", function () {
      return _states__WEBPACK_IMPORTED_MODULE_1__["RoutesEffects"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "routeReducer", function () {
      return _states__WEBPACK_IMPORTED_MODULE_1__["routeReducer"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SightActions", function () {
      return _states__WEBPACK_IMPORTED_MODULE_1__["SightActions"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SightsEffects", function () {
      return _states__WEBPACK_IMPORTED_MODULE_1__["SightsEffects"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "sightReducer", function () {
      return _states__WEBPACK_IMPORTED_MODULE_1__["sightReducer"];
    });
    /* harmony import */


    var _state_management__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./state-management */
    "./src/modules/dashboard/state-management/state-management.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "templarReducers", function () {
      return _state_management__WEBPACK_IMPORTED_MODULE_2__["templarReducers"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getCitiesState", function () {
      return _state_management__WEBPACK_IMPORTED_MODULE_2__["getCitiesState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getRoutesState", function () {
      return _state_management__WEBPACK_IMPORTED_MODULE_2__["getRoutesState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getSightState", function () {
      return _state_management__WEBPACK_IMPORTED_MODULE_2__["getSightState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getAudiosState", function () {
      return _state_management__WEBPACK_IMPORTED_MODULE_2__["getAudiosState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getStyleState", function () {
      return _state_management__WEBPACK_IMPORTED_MODULE_2__["getStyleState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getAccesscodesState", function () {
      return _state_management__WEBPACK_IMPORTED_MODULE_2__["getAccesscodesState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getCitiesData", function () {
      return _state_management__WEBPACK_IMPORTED_MODULE_2__["getCitiesData"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getActiveCityData", function () {
      return _state_management__WEBPACK_IMPORTED_MODULE_2__["getActiveCityData"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "citiesSelectors", function () {
      return _state_management__WEBPACK_IMPORTED_MODULE_2__["citiesSelectors"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getRoutesData", function () {
      return _state_management__WEBPACK_IMPORTED_MODULE_2__["getRoutesData"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getActiveRouteData", function () {
      return _state_management__WEBPACK_IMPORTED_MODULE_2__["getActiveRouteData"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "routesSelectors", function () {
      return _state_management__WEBPACK_IMPORTED_MODULE_2__["routesSelectors"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getSightsData", function () {
      return _state_management__WEBPACK_IMPORTED_MODULE_2__["getSightsData"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getActiveSightData", function () {
      return _state_management__WEBPACK_IMPORTED_MODULE_2__["getActiveSightData"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "sightSelectors", function () {
      return _state_management__WEBPACK_IMPORTED_MODULE_2__["sightSelectors"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getAudiosData", function () {
      return _state_management__WEBPACK_IMPORTED_MODULE_2__["getAudiosData"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "audioSelectors", function () {
      return _state_management__WEBPACK_IMPORTED_MODULE_2__["audioSelectors"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getStylesData", function () {
      return _state_management__WEBPACK_IMPORTED_MODULE_2__["getStylesData"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "styleSelectors", function () {
      return _state_management__WEBPACK_IMPORTED_MODULE_2__["styleSelectors"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getAccesscodesData", function () {
      return _state_management__WEBPACK_IMPORTED_MODULE_2__["getAccesscodesData"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getActiveAccesscodData", function () {
      return _state_management__WEBPACK_IMPORTED_MODULE_2__["getActiveAccesscodData"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "accesscodesSelectors", function () {
      return _state_management__WEBPACK_IMPORTED_MODULE_2__["accesscodesSelectors"];
    });
    /***/

  },

  /***/
  "./src/modules/dashboard/state-management/state-management.ts":
  /*!********************************************************************!*\
    !*** ./src/modules/dashboard/state-management/state-management.ts ***!
    \********************************************************************/

  /*! exports provided: templarReducers, getCitiesState, getRoutesState, getSightState, getAudiosState, getStyleState, getAccesscodesState, getCitiesData, getActiveCityData, citiesSelectors, getRoutesData, getActiveRouteData, routesSelectors, getSightsData, getActiveSightData, sightSelectors, getAudiosData, audioSelectors, getStylesData, styleSelectors, getAccesscodesData, getActiveAccesscodData, accesscodesSelectors */

  /***/
  function srcModulesDashboardStateManagementStateManagementTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "templarReducers", function () {
      return templarReducers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getCitiesState", function () {
      return getCitiesState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getRoutesState", function () {
      return getRoutesState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getSightState", function () {
      return getSightState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAudiosState", function () {
      return getAudiosState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getStyleState", function () {
      return getStyleState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAccesscodesState", function () {
      return getAccesscodesState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getCitiesData", function () {
      return getCitiesData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getActiveCityData", function () {
      return getActiveCityData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "citiesSelectors", function () {
      return citiesSelectors;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getRoutesData", function () {
      return getRoutesData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getActiveRouteData", function () {
      return getActiveRouteData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routesSelectors", function () {
      return routesSelectors;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getSightsData", function () {
      return getSightsData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getActiveSightData", function () {
      return getActiveSightData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sightSelectors", function () {
      return sightSelectors;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAudiosData", function () {
      return getAudiosData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "audioSelectors", function () {
      return audioSelectors;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getStylesData", function () {
      return getStylesData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styleSelectors", function () {
      return styleSelectors;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAccesscodesData", function () {
      return getAccesscodesData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getActiveAccesscodData", function () {
      return getActiveAccesscodData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "accesscodesSelectors", function () {
      return accesscodesSelectors;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _states_cities_cities_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./states/cities/cities.reducer */
    "./src/modules/dashboard/state-management/states/cities/cities.reducer.ts");
    /* harmony import */


    var _states_route_route_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./states/route/route.reducer */
    "./src/modules/dashboard/state-management/states/route/route.reducer.ts");
    /* harmony import */


    var _states_sight_sight_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./states/sight/sight.reducer */
    "./src/modules/dashboard/state-management/states/sight/sight.reducer.ts");
    /* harmony import */


    var _states_audios_audios_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./states/audios/audios.reducer */
    "./src/modules/dashboard/state-management/states/audios/audios.reducer.ts");
    /* harmony import */


    var _states_styles_styles_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./states/styles/styles.reducer */
    "./src/modules/dashboard/state-management/states/styles/styles.reducer.ts");
    /* harmony import */


    var _states_accesscodes_accesscodes_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./states/accesscodes/accesscodes.reducer */
    "./src/modules/dashboard/state-management/states/accesscodes/accesscodes.reducer.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    const templarReducers = {
      templar_cities: _states_cities_cities_reducer__WEBPACK_IMPORTED_MODULE_1__["citiesReducer"],
      templar_routes: _states_route_route_reducer__WEBPACK_IMPORTED_MODULE_2__["routeReducer"],
      templar_sights: _states_sight_sight_reducer__WEBPACK_IMPORTED_MODULE_3__["sightReducer"],
      templar_audios: _states_audios_audios_reducer__WEBPACK_IMPORTED_MODULE_4__["audiosReducer"],
      templar_styles: _states_styles_styles_reducer__WEBPACK_IMPORTED_MODULE_5__["stylesReducer"],
      templat_accesscodes: _states_accesscodes_accesscodes_reducer__WEBPACK_IMPORTED_MODULE_6__["accesscodesReducer"]
    };

    const getCitiesState = state => state ? state.templar_cities : null;

    const getRoutesState = state => state ? state.templar_routes : null;

    const getSightState = state => state ? state.templar_sights : null;

    const getAudiosState = state => state ? state.templar_audios : null;

    const getStyleState = state => state ? state.templar_styles : null;

    const getAccesscodesState = state => state ? state.templat_accesscodes : null; // ***** Cities selectors *****


    const getCitiesData = state => state ? state.cities : undefined;

    const getActiveCityData = state => state ? state.activeCity : undefined;

    const citiesSelectors = {
      getCitiesSelector: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["createSelector"])(getCitiesState, getCitiesData),
      getActiveCitySelector: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["createSelector"])(getCitiesState, getActiveCityData)
    }; // ***** Routes selectors *****

    const getRoutesData = state => state ? state.routes : undefined;

    const getActiveRouteData = state => state ? state.activeRoute : undefined;

    const routesSelectors = {
      getRoutesSelector: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["createSelector"])(getRoutesState, getRoutesData),
      getActiveRouteSelector: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["createSelector"])(getRoutesState, getActiveRouteData)
    }; // ***** Sight selectors *****

    const getSightsData = state => state ? state.sights : undefined;

    const getActiveSightData = state => state ? state.activeSight : undefined;

    const sightSelectors = {
      getSightsSelector: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["createSelector"])(getSightState, getSightsData),
      getActiveSightSelector: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["createSelector"])(getSightState, getActiveSightData)
    }; // ***** Audios selectors *****

    const getAudiosData = state => state ? state.audios : undefined;

    const audioSelectors = {
      getAudiosSelector: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["createSelector"])(getAudiosState, getAudiosData)
    }; // ***** Styles selectors *****

    const getStylesData = state => state ? state.styles : undefined;

    const styleSelectors = {
      getStylesSelector: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["createSelector"])(getStyleState, getStylesData)
    }; // ***** Accesscodes selectors *****

    const getAccesscodesData = state => state ? state.accesscodes : undefined;

    const getActiveAccesscodData = state => state ? state.activeAccesscod : undefined;

    const accesscodesSelectors = {
      getAccesscodesSelector: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["createSelector"])(getAccesscodesState, getAccesscodesData),
      getActiveAccesscodSelector: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["createSelector"])(getAccesscodesState, getActiveAccesscodData)
    };
    /***/
  },

  /***/
  "./src/modules/dashboard/state-management/states/accesscodes/accesscodes.actions.ts":
  /*!******************************************************************************************!*\
    !*** ./src/modules/dashboard/state-management/states/accesscodes/accesscodes.actions.ts ***!
    \******************************************************************************************/

  /*! exports provided: AccesscodesActions */

  /***/
  function srcModulesDashboardStateManagementStatesAccesscodesAccesscodesActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccesscodesActions", function () {
      return AccesscodesActions;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var AccesscodesActions;

    (function (AccesscodesActions) {
      let Actions;

      (function (Actions) {
        Actions["LoadAccesscodesData"] = "[Accesscodes] LoadAccesscodesData";
        Actions["SetAccesscodesData"] = "[Accesscodes] SetAccesscodesData";
        Actions["SetActiveAccesscodData"] = "[Accesscodes] SetActiveAccesscodData";
        Actions["DeleteAccesscodesData"] = "[Accesscodes] DeleteAccesscodesData";
        Actions["AddAccesscodesData"] = "[Accesscodes] AddAccesscodesData";
        Actions["LoadActiveAccesscodesData"] = "[Accesscodes] LoadActiveAccesscodesData";
        Actions["UpdateActiveAccesscodesData"] = "[Accesscodes] UpdateActiveAccesscodesData";
      })(Actions = AccesscodesActions.Actions || (AccesscodesActions.Actions = {}));

      class LoadAccesscodesDataAction {
        constructor() {
          this.type = Actions.LoadAccesscodesData;
        }

      }

      AccesscodesActions.LoadAccesscodesDataAction = LoadAccesscodesDataAction;

      class LoadActiveAccesscodesDataAction {
        constructor(payload) {
          this.payload = payload;
          this.type = Actions.LoadActiveAccesscodesData;
        }

      }

      AccesscodesActions.LoadActiveAccesscodesDataAction = LoadActiveAccesscodesDataAction;

      class SetAccesscodesDataAction {
        constructor(payload) {
          this.payload = payload;
          this.type = Actions.SetAccesscodesData;
        }

      }

      AccesscodesActions.SetAccesscodesDataAction = SetAccesscodesDataAction;

      class SetActiveAccesscodDataAction {
        constructor(payload) {
          this.payload = payload;
          this.type = Actions.SetActiveAccesscodData;
        }

      }

      AccesscodesActions.SetActiveAccesscodDataAction = SetActiveAccesscodDataAction;

      class UpdateActiveAccesscodesDataAction {
        constructor(payload) {
          this.payload = payload;
          this.type = Actions.UpdateActiveAccesscodesData;
        }

      }

      AccesscodesActions.UpdateActiveAccesscodesDataAction = UpdateActiveAccesscodesDataAction;

      class DeleteAccesscodesDataAction {
        constructor(payload) {
          this.payload = payload;
          this.type = Actions.DeleteAccesscodesData;
        }

      }

      AccesscodesActions.DeleteAccesscodesDataAction = DeleteAccesscodesDataAction;

      class AddAccesscodesDataAction {
        constructor(payload) {
          this.payload = payload;
          this.type = Actions.AddAccesscodesData;
        }

      }

      AccesscodesActions.AddAccesscodesDataAction = AddAccesscodesDataAction;
    })(AccesscodesActions || (AccesscodesActions = {}));
    /***/

  },

  /***/
  "./src/modules/dashboard/state-management/states/accesscodes/accesscodes.effects.ts":
  /*!******************************************************************************************!*\
    !*** ./src/modules/dashboard/state-management/states/accesscodes/accesscodes.effects.ts ***!
    \******************************************************************************************/

  /*! exports provided: AccesscodesEffects */

  /***/
  function srcModulesDashboardStateManagementStatesAccesscodesAccesscodesEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccesscodesEffects", function () {
      return AccesscodesEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _accesscodes_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./accesscodes.actions */
    "./src/modules/dashboard/state-management/states/accesscodes/accesscodes.actions.ts");
    /* harmony import */


    var src_modules_dashboard_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/modules/dashboard/services */
    "./src/modules/dashboard/services/index.ts");

    let AccesscodesEffects = class AccesscodesEffects {
      constructor(actions, AccesscodesapiService, store) {
        this.actions = actions;
        this.AccesscodesapiService = AccesscodesapiService;
        this.store = store;
        this.loadAccesscodesData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_accesscodes_actions__WEBPACK_IMPORTED_MODULE_5__["AccesscodesActions"].Actions.LoadAccesscodesData)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(action => {
          this.AccesscodesapiService.getAccesscodes().subscribe(cities => {
            this.store.dispatch(new _accesscodes_actions__WEBPACK_IMPORTED_MODULE_5__["AccesscodesActions"].SetAccesscodesDataAction(cities));
          });
          return [];
        }));
        this.deleteAccesscodesData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_accesscodes_actions__WEBPACK_IMPORTED_MODULE_5__["AccesscodesActions"].Actions.DeleteAccesscodesData)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(action => {
          const id = action['payload'];
          this.AccesscodesapiService.deleteAccesscodes(id).subscribe();
          return [];
        }));
        this.addAccesscodesData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_accesscodes_actions__WEBPACK_IMPORTED_MODULE_5__["AccesscodesActions"].Actions.AddAccesscodesData)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(action => {
          const cityData = action['payload'];
          this.AccesscodesapiService.addAccesscodes(cityData).subscribe();
          return [];
        }));
        this.loadAccesscodesInfoData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_accesscodes_actions__WEBPACK_IMPORTED_MODULE_5__["AccesscodesActions"].Actions.LoadActiveAccesscodesData)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(action => {
          const id = action['payload'];

          if (id) {
            this.getAccesscodesSubscription = this.AccesscodesapiService.getAccesscod(id).subscribe(city => {
              this.store.dispatch(new _accesscodes_actions__WEBPACK_IMPORTED_MODULE_5__["AccesscodesActions"].SetActiveAccesscodDataAction(city));
            });
          } else {
            this.store.dispatch(new _accesscodes_actions__WEBPACK_IMPORTED_MODULE_5__["AccesscodesActions"].SetActiveAccesscodDataAction(null));

            if (this.getAccesscodesSubscription) {
              this.getAccesscodesSubscription.unsubscribe();
              this.getAccesscodesSubscription = null;
            }
          }

          return [];
        }));
        this.updateActiveAccesscodesData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_accesscodes_actions__WEBPACK_IMPORTED_MODULE_5__["AccesscodesActions"].Actions.UpdateActiveAccesscodesData)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(action => {
          const payload = action['payload'];
          this.AccesscodesapiService.updateAccesscode(payload.accesscodesData, payload.id).subscribe();
          return [];
        }));
      }

    };

    AccesscodesEffects.ctorParameters = () => [{
      type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
    }, {
      type: src_modules_dashboard_services__WEBPACK_IMPORTED_MODULE_6__["AccesscodesApiService"]
    }, {
      type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], AccesscodesEffects.prototype, "loadAccesscodesData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], AccesscodesEffects.prototype, "deleteAccesscodesData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], AccesscodesEffects.prototype, "addAccesscodesData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], AccesscodesEffects.prototype, "loadAccesscodesInfoData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], AccesscodesEffects.prototype, "updateActiveAccesscodesData$", void 0);
    AccesscodesEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AccesscodesEffects);
    /***/
  },

  /***/
  "./src/modules/dashboard/state-management/states/accesscodes/accesscodes.reducer.ts":
  /*!******************************************************************************************!*\
    !*** ./src/modules/dashboard/state-management/states/accesscodes/accesscodes.reducer.ts ***!
    \******************************************************************************************/

  /*! exports provided: accesscodesReducer */

  /***/
  function srcModulesDashboardStateManagementStatesAccesscodesAccesscodesReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "accesscodesReducer", function () {
      return accesscodesReducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _accesscodes_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./accesscodes.actions */
    "./src/modules/dashboard/state-management/states/accesscodes/accesscodes.actions.ts");

    const initialState = {
      accesscodes: [],
      activeAccesscod: null
    };

    function accesscodesReducer(state = initialState, action) {
      switch (action.type) {
        case _accesscodes_actions__WEBPACK_IMPORTED_MODULE_1__["AccesscodesActions"].Actions.SetAccesscodesData:
          {
            return Object.assign({}, state, {
              accesscodes: action["payload"]
            });
          }

        case _accesscodes_actions__WEBPACK_IMPORTED_MODULE_1__["AccesscodesActions"].Actions.SetActiveAccesscodData:
          {
            return Object.assign({}, state, {
              activeAccesscod: action["payload"]
            });
          }

        default:
          {
            return state;
          }
      }
    }
    /***/

  },

  /***/
  "./src/modules/dashboard/state-management/states/accesscodes/index.ts":
  /*!****************************************************************************!*\
    !*** ./src/modules/dashboard/state-management/states/accesscodes/index.ts ***!
    \****************************************************************************/

  /*! exports provided: AccesscodesActions, AccesscodesEffects, accesscodesReducer */

  /***/
  function srcModulesDashboardStateManagementStatesAccesscodesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _accesscodes_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./accesscodes.actions */
    "./src/modules/dashboard/state-management/states/accesscodes/accesscodes.actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AccesscodesActions", function () {
      return _accesscodes_actions__WEBPACK_IMPORTED_MODULE_1__["AccesscodesActions"];
    });
    /* harmony import */


    var _accesscodes_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./accesscodes.effects */
    "./src/modules/dashboard/state-management/states/accesscodes/accesscodes.effects.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AccesscodesEffects", function () {
      return _accesscodes_effects__WEBPACK_IMPORTED_MODULE_2__["AccesscodesEffects"];
    });
    /* harmony import */


    var _accesscodes_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./accesscodes.reducer */
    "./src/modules/dashboard/state-management/states/accesscodes/accesscodes.reducer.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "accesscodesReducer", function () {
      return _accesscodes_reducer__WEBPACK_IMPORTED_MODULE_3__["accesscodesReducer"];
    });
    /***/

  },

  /***/
  "./src/modules/dashboard/state-management/states/audios/audios.actions.ts":
  /*!********************************************************************************!*\
    !*** ./src/modules/dashboard/state-management/states/audios/audios.actions.ts ***!
    \********************************************************************************/

  /*! exports provided: AudiosActions */

  /***/
  function srcModulesDashboardStateManagementStatesAudiosAudiosActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AudiosActions", function () {
      return AudiosActions;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var AudiosActions;

    (function (AudiosActions) {
      let Actions;

      (function (Actions) {
        Actions["LoadAudiosData"] = "[Audios] LoadAudiosData";
        Actions["SetAudiosData"] = "[Audios] SetAudiosData";
        Actions["DeleteAudioData"] = "[Audios] DeleteAudioData";
        Actions["AddAudioData"] = "[Audios] AddAudioData";
        Actions["AudioDataAdded"] = "[Audios] AudioDataAdded";
      })(Actions = AudiosActions.Actions || (AudiosActions.Actions = {}));

      class LoadAudiosDataAction {
        constructor() {
          this.type = Actions.LoadAudiosData;
        }

      }

      AudiosActions.LoadAudiosDataAction = LoadAudiosDataAction;

      class SetAudiosDataAction {
        constructor(payload) {
          this.payload = payload;
          this.type = Actions.SetAudiosData;
        }

      }

      AudiosActions.SetAudiosDataAction = SetAudiosDataAction;

      class DeleteAudioDataAction {
        constructor(payload) {
          this.payload = payload;
          this.type = Actions.DeleteAudioData;
        }

      }

      AudiosActions.DeleteAudioDataAction = DeleteAudioDataAction;

      class AddAudioDataAction {
        constructor(payload) {
          this.payload = payload;
          this.type = Actions.AddAudioData;
        }

      }

      AudiosActions.AddAudioDataAction = AddAudioDataAction;

      class AudioDataAddedAction {
        constructor(payload) {
          this.payload = payload;
          this.type = Actions.AudioDataAdded;
        }

      }

      AudiosActions.AudioDataAddedAction = AudioDataAddedAction;
    })(AudiosActions || (AudiosActions = {}));
    /***/

  },

  /***/
  "./src/modules/dashboard/state-management/states/audios/audios.effects.ts":
  /*!********************************************************************************!*\
    !*** ./src/modules/dashboard/state-management/states/audios/audios.effects.ts ***!
    \********************************************************************************/

  /*! exports provided: AudiosEffects */

  /***/
  function srcModulesDashboardStateManagementStatesAudiosAudiosEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AudiosEffects", function () {
      return AudiosEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _audios_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./audios.actions */
    "./src/modules/dashboard/state-management/states/audios/audios.actions.ts");
    /* harmony import */


    var src_modules_dashboard_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/modules/dashboard/services */
    "./src/modules/dashboard/services/index.ts");

    let AudiosEffects = class AudiosEffects {
      constructor(actions, audiosApiService, store) {
        this.actions = actions;
        this.audiosApiService = audiosApiService;
        this.store = store;
        this.loadAudiosData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_audios_actions__WEBPACK_IMPORTED_MODULE_5__["AudiosActions"].Actions.LoadAudiosData)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(action => {
          this.audiosApiService.getAudios().subscribe(audios => {
            this.store.dispatch(new _audios_actions__WEBPACK_IMPORTED_MODULE_5__["AudiosActions"].SetAudiosDataAction(audios));
          });
          return [];
        }));
        this.deleteAudioData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_audios_actions__WEBPACK_IMPORTED_MODULE_5__["AudiosActions"].Actions.DeleteAudioData)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(action => {
          const id = action['payload'];
          this.audiosApiService.deleteAudio(id).subscribe();
          return [];
        }));
        this.addAudioData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_audios_actions__WEBPACK_IMPORTED_MODULE_5__["AudiosActions"].Actions.AddAudioData)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(action => {
          const audioData = action['payload'];
          this.audiosApiService.addAudio(audioData).subscribe(id => {
            this.store.dispatch(new _audios_actions__WEBPACK_IMPORTED_MODULE_5__["AudiosActions"].AudioDataAddedAction(id));
          });
          return [];
        }));
      }

    };

    AudiosEffects.ctorParameters = () => [{
      type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
    }, {
      type: src_modules_dashboard_services__WEBPACK_IMPORTED_MODULE_6__["AudiosApiService"]
    }, {
      type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], AudiosEffects.prototype, "loadAudiosData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], AudiosEffects.prototype, "deleteAudioData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], AudiosEffects.prototype, "addAudioData$", void 0);
    AudiosEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AudiosEffects);
    /***/
  },

  /***/
  "./src/modules/dashboard/state-management/states/audios/audios.reducer.ts":
  /*!********************************************************************************!*\
    !*** ./src/modules/dashboard/state-management/states/audios/audios.reducer.ts ***!
    \********************************************************************************/

  /*! exports provided: audiosReducer */

  /***/
  function srcModulesDashboardStateManagementStatesAudiosAudiosReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "audiosReducer", function () {
      return audiosReducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _audios_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./audios.actions */
    "./src/modules/dashboard/state-management/states/audios/audios.actions.ts");

    const initialState = {
      audios: []
    };

    function audiosReducer(state = initialState, action) {
      switch (action.type) {
        case _audios_actions__WEBPACK_IMPORTED_MODULE_1__["AudiosActions"].Actions.SetAudiosData:
          {
            return Object.assign({}, state, {
              audios: action["payload"]
            });
          }

        default:
          {
            return state;
          }
      }
    }
    /***/

  },

  /***/
  "./src/modules/dashboard/state-management/states/audios/index.ts":
  /*!***********************************************************************!*\
    !*** ./src/modules/dashboard/state-management/states/audios/index.ts ***!
    \***********************************************************************/

  /*! exports provided: AudiosActions, AudiosEffects, audiosReducer */

  /***/
  function srcModulesDashboardStateManagementStatesAudiosIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _audios_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./audios.actions */
    "./src/modules/dashboard/state-management/states/audios/audios.actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AudiosActions", function () {
      return _audios_actions__WEBPACK_IMPORTED_MODULE_1__["AudiosActions"];
    });
    /* harmony import */


    var _audios_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./audios.effects */
    "./src/modules/dashboard/state-management/states/audios/audios.effects.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AudiosEffects", function () {
      return _audios_effects__WEBPACK_IMPORTED_MODULE_2__["AudiosEffects"];
    });
    /* harmony import */


    var _audios_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./audios.reducer */
    "./src/modules/dashboard/state-management/states/audios/audios.reducer.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "audiosReducer", function () {
      return _audios_reducer__WEBPACK_IMPORTED_MODULE_3__["audiosReducer"];
    });
    /***/

  },

  /***/
  "./src/modules/dashboard/state-management/states/cities/cities.actions.ts":
  /*!********************************************************************************!*\
    !*** ./src/modules/dashboard/state-management/states/cities/cities.actions.ts ***!
    \********************************************************************************/

  /*! exports provided: CitiesActions */

  /***/
  function srcModulesDashboardStateManagementStatesCitiesCitiesActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CitiesActions", function () {
      return CitiesActions;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CitiesActions;

    (function (CitiesActions) {
      let Actions;

      (function (Actions) {
        Actions["LoadCitiesData"] = "[Cities] LoadCitiesData";
        Actions["SetCitiesData"] = "[Cities] SetCitiesData";
        Actions["SetActiveCityData"] = "[Cities] SetActiveCityData";
        Actions["DeleteCityData"] = "[Cities] DeleteCityData";
        Actions["AddCityData"] = "[Cities] AddCityData";
        Actions["LoadActiveCityData"] = "[Cities] LoadActiveCityData";
        Actions["UpdateActiveCityData"] = "[Cities] UpdateActiveCityData";
      })(Actions = CitiesActions.Actions || (CitiesActions.Actions = {}));

      class LoadCitiesDataAction {
        constructor() {
          this.type = Actions.LoadCitiesData;
        }

      }

      CitiesActions.LoadCitiesDataAction = LoadCitiesDataAction;

      class LoadActiveCityDataAction {
        constructor(payload) {
          this.payload = payload;
          this.type = Actions.LoadActiveCityData;
        }

      }

      CitiesActions.LoadActiveCityDataAction = LoadActiveCityDataAction;

      class SetCitiesDataAction {
        constructor(payload) {
          this.payload = payload;
          this.type = Actions.SetCitiesData;
        }

      }

      CitiesActions.SetCitiesDataAction = SetCitiesDataAction;

      class SetActiveCityDataAction {
        constructor(payload) {
          this.payload = payload;
          this.type = Actions.SetActiveCityData;
        }

      }

      CitiesActions.SetActiveCityDataAction = SetActiveCityDataAction;

      class UpdateActiveCityDataAction {
        constructor(payload) {
          this.payload = payload;
          this.type = Actions.UpdateActiveCityData;
        }

      }

      CitiesActions.UpdateActiveCityDataAction = UpdateActiveCityDataAction;

      class DeleteCityDataAction {
        constructor(payload) {
          this.payload = payload;
          this.type = Actions.DeleteCityData;
        }

      }

      CitiesActions.DeleteCityDataAction = DeleteCityDataAction;

      class AddCityDataAction {
        constructor(payload) {
          this.payload = payload;
          this.type = Actions.AddCityData;
        }

      }

      CitiesActions.AddCityDataAction = AddCityDataAction;
    })(CitiesActions || (CitiesActions = {}));
    /***/

  },

  /***/
  "./src/modules/dashboard/state-management/states/cities/cities.effects.ts":
  /*!********************************************************************************!*\
    !*** ./src/modules/dashboard/state-management/states/cities/cities.effects.ts ***!
    \********************************************************************************/

  /*! exports provided: CitiesEffects */

  /***/
  function srcModulesDashboardStateManagementStatesCitiesCitiesEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CitiesEffects", function () {
      return CitiesEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _cities_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cities.actions */
    "./src/modules/dashboard/state-management/states/cities/cities.actions.ts");
    /* harmony import */


    var src_modules_dashboard_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/modules/dashboard/services */
    "./src/modules/dashboard/services/index.ts");

    let CitiesEffects = class CitiesEffects {
      constructor(actions, CityapiService, store) {
        this.actions = actions;
        this.CityapiService = CityapiService;
        this.store = store;
        this.loadCitiessData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_cities_actions__WEBPACK_IMPORTED_MODULE_5__["CitiesActions"].Actions.LoadCitiesData)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(action => {
          this.CityapiService.getCities().subscribe(cities => {
            cities.sort((a, b) => {
              return a.position < b.position ? -1 : 1;
            });
            this.store.dispatch(new _cities_actions__WEBPACK_IMPORTED_MODULE_5__["CitiesActions"].SetCitiesDataAction(cities));
          });
          return [];
        }));
        this.deleteCityData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_cities_actions__WEBPACK_IMPORTED_MODULE_5__["CitiesActions"].Actions.DeleteCityData)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(action => {
          const id = action['payload'];
          this.CityapiService.deleteCity(id).subscribe();
          return [];
        }));
        this.addCityData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_cities_actions__WEBPACK_IMPORTED_MODULE_5__["CitiesActions"].Actions.AddCityData)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(action => {
          const cityData = action['payload'];
          this.CityapiService.addCity(cityData).subscribe();
          return [];
        }));
        this.loadCityInfoData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_cities_actions__WEBPACK_IMPORTED_MODULE_5__["CitiesActions"].Actions.LoadActiveCityData)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(action => {
          const id = action['payload'];

          if (id) {
            this.getCitySubscription = this.CityapiService.getCity(id).subscribe(city => {
              this.store.dispatch(new _cities_actions__WEBPACK_IMPORTED_MODULE_5__["CitiesActions"].SetActiveCityDataAction(city));
            });
          } else {
            this.store.dispatch(new _cities_actions__WEBPACK_IMPORTED_MODULE_5__["CitiesActions"].SetActiveCityDataAction(null));

            if (this.getCitySubscription) {
              this.getCitySubscription.unsubscribe();
              this.getCitySubscription = null;
            }
          }

          return [];
        }));
        this.updateActiveCityData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_cities_actions__WEBPACK_IMPORTED_MODULE_5__["CitiesActions"].Actions.UpdateActiveCityData)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(action => {
          const payload = action['payload'];
          this.CityapiService.updateCity(payload.cityData, payload.id).subscribe();
          return [];
        }));
      }

    };

    CitiesEffects.ctorParameters = () => [{
      type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
    }, {
      type: src_modules_dashboard_services__WEBPACK_IMPORTED_MODULE_6__["CityApiService"]
    }, {
      type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], CitiesEffects.prototype, "loadCitiessData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], CitiesEffects.prototype, "deleteCityData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], CitiesEffects.prototype, "addCityData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], CitiesEffects.prototype, "loadCityInfoData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], CitiesEffects.prototype, "updateActiveCityData$", void 0);
    CitiesEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], CitiesEffects);
    /***/
  },

  /***/
  "./src/modules/dashboard/state-management/states/cities/cities.reducer.ts":
  /*!********************************************************************************!*\
    !*** ./src/modules/dashboard/state-management/states/cities/cities.reducer.ts ***!
    \********************************************************************************/

  /*! exports provided: citiesReducer */

  /***/
  function srcModulesDashboardStateManagementStatesCitiesCitiesReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "citiesReducer", function () {
      return citiesReducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _cities_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./cities.actions */
    "./src/modules/dashboard/state-management/states/cities/cities.actions.ts");

    const initialState = {
      cities: [],
      activeCity: null
    };

    function citiesReducer(state = initialState, action) {
      switch (action.type) {
        case _cities_actions__WEBPACK_IMPORTED_MODULE_1__["CitiesActions"].Actions.SetCitiesData:
          {
            return Object.assign({}, state, {
              cities: action["payload"]
            });
          }

        case _cities_actions__WEBPACK_IMPORTED_MODULE_1__["CitiesActions"].Actions.SetActiveCityData:
          {
            return Object.assign({}, state, {
              activeCity: action["payload"]
            });
          }

        default:
          {
            return state;
          }
      }
    }
    /***/

  },

  /***/
  "./src/modules/dashboard/state-management/states/cities/index.ts":
  /*!***********************************************************************!*\
    !*** ./src/modules/dashboard/state-management/states/cities/index.ts ***!
    \***********************************************************************/

  /*! exports provided: CitiesActions, CitiesEffects, citiesReducer */

  /***/
  function srcModulesDashboardStateManagementStatesCitiesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _cities_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./cities.actions */
    "./src/modules/dashboard/state-management/states/cities/cities.actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CitiesActions", function () {
      return _cities_actions__WEBPACK_IMPORTED_MODULE_1__["CitiesActions"];
    });
    /* harmony import */


    var _cities_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./cities.effects */
    "./src/modules/dashboard/state-management/states/cities/cities.effects.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CitiesEffects", function () {
      return _cities_effects__WEBPACK_IMPORTED_MODULE_2__["CitiesEffects"];
    });
    /* harmony import */


    var _cities_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cities.reducer */
    "./src/modules/dashboard/state-management/states/cities/cities.reducer.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "citiesReducer", function () {
      return _cities_reducer__WEBPACK_IMPORTED_MODULE_3__["citiesReducer"];
    });
    /***/

  },

  /***/
  "./src/modules/dashboard/state-management/states/index.ts":
  /*!****************************************************************!*\
    !*** ./src/modules/dashboard/state-management/states/index.ts ***!
    \****************************************************************/

  /*! exports provided: AudiosActions, AudiosEffects, audiosReducer, CitiesActions, CitiesEffects, citiesReducer, RouteActions, RoutesEffects, routeReducer, SightActions, SightsEffects, sightReducer */

  /***/
  function srcModulesDashboardStateManagementStatesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _audios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./audios */
    "./src/modules/dashboard/state-management/states/audios/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AudiosActions", function () {
      return _audios__WEBPACK_IMPORTED_MODULE_1__["AudiosActions"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AudiosEffects", function () {
      return _audios__WEBPACK_IMPORTED_MODULE_1__["AudiosEffects"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "audiosReducer", function () {
      return _audios__WEBPACK_IMPORTED_MODULE_1__["audiosReducer"];
    });
    /* harmony import */


    var _cities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./cities */
    "./src/modules/dashboard/state-management/states/cities/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CitiesActions", function () {
      return _cities__WEBPACK_IMPORTED_MODULE_2__["CitiesActions"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CitiesEffects", function () {
      return _cities__WEBPACK_IMPORTED_MODULE_2__["CitiesEffects"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "citiesReducer", function () {
      return _cities__WEBPACK_IMPORTED_MODULE_2__["citiesReducer"];
    });
    /* harmony import */


    var _route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./route */
    "./src/modules/dashboard/state-management/states/route/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RouteActions", function () {
      return _route__WEBPACK_IMPORTED_MODULE_3__["RouteActions"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RoutesEffects", function () {
      return _route__WEBPACK_IMPORTED_MODULE_3__["RoutesEffects"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "routeReducer", function () {
      return _route__WEBPACK_IMPORTED_MODULE_3__["routeReducer"];
    });
    /* harmony import */


    var _sight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sight */
    "./src/modules/dashboard/state-management/states/sight/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SightActions", function () {
      return _sight__WEBPACK_IMPORTED_MODULE_4__["SightActions"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SightsEffects", function () {
      return _sight__WEBPACK_IMPORTED_MODULE_4__["SightsEffects"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "sightReducer", function () {
      return _sight__WEBPACK_IMPORTED_MODULE_4__["sightReducer"];
    });
    /***/

  },

  /***/
  "./src/modules/dashboard/state-management/states/route/index.ts":
  /*!**********************************************************************!*\
    !*** ./src/modules/dashboard/state-management/states/route/index.ts ***!
    \**********************************************************************/

  /*! exports provided: RouteActions, RoutesEffects, routeReducer */

  /***/
  function srcModulesDashboardStateManagementStatesRouteIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _route_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./route.actions */
    "./src/modules/dashboard/state-management/states/route/route.actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RouteActions", function () {
      return _route_actions__WEBPACK_IMPORTED_MODULE_1__["RouteActions"];
    });
    /* harmony import */


    var _route_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./route.effects */
    "./src/modules/dashboard/state-management/states/route/route.effects.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RoutesEffects", function () {
      return _route_effects__WEBPACK_IMPORTED_MODULE_2__["RoutesEffects"];
    });
    /* harmony import */


    var _route_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./route.reducer */
    "./src/modules/dashboard/state-management/states/route/route.reducer.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "routeReducer", function () {
      return _route_reducer__WEBPACK_IMPORTED_MODULE_3__["routeReducer"];
    });
    /***/

  },

  /***/
  "./src/modules/dashboard/state-management/states/route/route.actions.ts":
  /*!******************************************************************************!*\
    !*** ./src/modules/dashboard/state-management/states/route/route.actions.ts ***!
    \******************************************************************************/

  /*! exports provided: RouteActions */

  /***/
  function srcModulesDashboardStateManagementStatesRouteRouteActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouteActions", function () {
      return RouteActions;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var RouteActions;

    (function (RouteActions) {
      let Actions;

      (function (Actions) {
        Actions["LoadRoutesData"] = "[Route] LoadRoutesData";
        Actions["SetRoutesData"] = "[Route] SetRoutesData";
        Actions["SetActiveRouteData"] = "[Route] SetActiveRouteData";
        Actions["DeleteRouteData"] = "[Route] DeleteRouteData";
        Actions["AddRouteData"] = "[Route] AddRouteData";
        Actions["LoadActiveRouteData"] = "[Route] LoadActiveRouteData";
        Actions["UpdateActiveRouteData"] = "[Route] UpdateActiveRouteData";
      })(Actions = RouteActions.Actions || (RouteActions.Actions = {}));

      class LoadRoutesDataAction {
        constructor() {
          this.type = Actions.LoadRoutesData;
        }

      }

      RouteActions.LoadRoutesDataAction = LoadRoutesDataAction;

      class LoadActiveRouteDataAction {
        constructor(payload) {
          this.payload = payload;
          this.type = Actions.LoadActiveRouteData;
        }

      }

      RouteActions.LoadActiveRouteDataAction = LoadActiveRouteDataAction;

      class SetRoutesDataAction {
        constructor(payload) {
          this.payload = payload;
          this.type = Actions.SetRoutesData;
        }

      }

      RouteActions.SetRoutesDataAction = SetRoutesDataAction;

      class SetActiveRouteDataAction {
        constructor(payload) {
          this.payload = payload;
          this.type = Actions.SetActiveRouteData;
        }

      }

      RouteActions.SetActiveRouteDataAction = SetActiveRouteDataAction;

      class UpdateActiveRouteDataAction {
        constructor(payload) {
          this.payload = payload;
          this.type = Actions.UpdateActiveRouteData;
        }

      }

      RouteActions.UpdateActiveRouteDataAction = UpdateActiveRouteDataAction;

      class DeleteRouteDataAction {
        constructor(payload) {
          this.payload = payload;
          this.type = Actions.DeleteRouteData;
        }

      }

      RouteActions.DeleteRouteDataAction = DeleteRouteDataAction;

      class AddRouteDataAction {
        constructor(payload) {
          this.payload = payload;
          this.type = Actions.AddRouteData;
        }

      }

      RouteActions.AddRouteDataAction = AddRouteDataAction;
    })(RouteActions || (RouteActions = {}));
    /***/

  },

  /***/
  "./src/modules/dashboard/state-management/states/route/route.effects.ts":
  /*!******************************************************************************!*\
    !*** ./src/modules/dashboard/state-management/states/route/route.effects.ts ***!
    \******************************************************************************/

  /*! exports provided: RoutesEffects */

  /***/
  function srcModulesDashboardStateManagementStatesRouteRouteEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoutesEffects", function () {
      return RoutesEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _route_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./route.actions */
    "./src/modules/dashboard/state-management/states/route/route.actions.ts");
    /* harmony import */


    var src_modules_dashboard_services_routeapi_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/modules/dashboard/services/routeapi.service */
    "./src/modules/dashboard/services/routeapi.service.ts");

    let RoutesEffects = class RoutesEffects {
      constructor(actions, RouteApiService, store) {
        this.actions = actions;
        this.RouteApiService = RouteApiService;
        this.store = store;
        this.loadRoutesData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_route_actions__WEBPACK_IMPORTED_MODULE_5__["RouteActions"].Actions.LoadRoutesData)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(action => {
          this.RouteApiService.getRoutes().subscribe(route => {
            this.store.dispatch(new _route_actions__WEBPACK_IMPORTED_MODULE_5__["RouteActions"].SetRoutesDataAction(route));
          });
          return [];
        }));
        this.deleteRouteData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_route_actions__WEBPACK_IMPORTED_MODULE_5__["RouteActions"].Actions.DeleteRouteData)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(action => {
          const id = action['payload'];
          this.RouteApiService.deleteRoute(id).subscribe();
          return [];
        }));
        this.addRouteData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_route_actions__WEBPACK_IMPORTED_MODULE_5__["RouteActions"].Actions.AddRouteData)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(action => {
          const routeData = action['payload'];
          this.RouteApiService.addRoute(routeData).subscribe();
          return [];
        }));
        this.loadRouteInfoData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_route_actions__WEBPACK_IMPORTED_MODULE_5__["RouteActions"].Actions.LoadActiveRouteData)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(action => {
          const id = action['payload'];

          if (id) {
            this.getRouteSubscription = this.RouteApiService.getRoute(id).subscribe(route => {
              this.store.dispatch(new _route_actions__WEBPACK_IMPORTED_MODULE_5__["RouteActions"].SetActiveRouteDataAction(route));
            });
          } else {
            this.store.dispatch(new _route_actions__WEBPACK_IMPORTED_MODULE_5__["RouteActions"].SetActiveRouteDataAction(null));

            if (this.getRouteSubscription) {
              this.getRouteSubscription.unsubscribe();
              this.getRouteSubscription = null;
            }
          }

          return [];
        }));
        this.updateRouteRouteData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_route_actions__WEBPACK_IMPORTED_MODULE_5__["RouteActions"].Actions.UpdateActiveRouteData)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(action => {
          const payload = action['payload'];
          this.RouteApiService.updateRoute(payload.routeData, payload.id).subscribe();
          return [];
        }));
      }

    };

    RoutesEffects.ctorParameters = () => [{
      type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
    }, {
      type: src_modules_dashboard_services_routeapi_service__WEBPACK_IMPORTED_MODULE_6__["RouteApiService"]
    }, {
      type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], RoutesEffects.prototype, "loadRoutesData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], RoutesEffects.prototype, "deleteRouteData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], RoutesEffects.prototype, "addRouteData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], RoutesEffects.prototype, "loadRouteInfoData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], RoutesEffects.prototype, "updateRouteRouteData$", void 0);
    RoutesEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], RoutesEffects);
    /***/
  },

  /***/
  "./src/modules/dashboard/state-management/states/route/route.reducer.ts":
  /*!******************************************************************************!*\
    !*** ./src/modules/dashboard/state-management/states/route/route.reducer.ts ***!
    \******************************************************************************/

  /*! exports provided: routeReducer */

  /***/
  function srcModulesDashboardStateManagementStatesRouteRouteReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routeReducer", function () {
      return routeReducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _route_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./route.actions */
    "./src/modules/dashboard/state-management/states/route/route.actions.ts");

    const initialState = {
      routes: [],
      activeRoute: null
    };

    function routeReducer(state = initialState, action) {
      switch (action.type) {
        case _route_actions__WEBPACK_IMPORTED_MODULE_1__["RouteActions"].Actions.SetRoutesData:
          {
            return Object.assign({}, state, {
              routes: action["payload"]
            });
          }

        case _route_actions__WEBPACK_IMPORTED_MODULE_1__["RouteActions"].Actions.SetActiveRouteData:
          {
            return Object.assign({}, state, {
              activeRoute: action["payload"]
            });
          }

        default:
          {
            return state;
          }
      }
    }
    /***/

  },

  /***/
  "./src/modules/dashboard/state-management/states/sight/index.ts":
  /*!**********************************************************************!*\
    !*** ./src/modules/dashboard/state-management/states/sight/index.ts ***!
    \**********************************************************************/

  /*! exports provided: SightActions, SightsEffects, sightReducer */

  /***/
  function srcModulesDashboardStateManagementStatesSightIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _sight_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./sight.actions */
    "./src/modules/dashboard/state-management/states/sight/sight.actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SightActions", function () {
      return _sight_actions__WEBPACK_IMPORTED_MODULE_1__["SightActions"];
    });
    /* harmony import */


    var _sight_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sight.effects */
    "./src/modules/dashboard/state-management/states/sight/sight.effects.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SightsEffects", function () {
      return _sight_effects__WEBPACK_IMPORTED_MODULE_2__["SightsEffects"];
    });
    /* harmony import */


    var _sight_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sight.reducer */
    "./src/modules/dashboard/state-management/states/sight/sight.reducer.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "sightReducer", function () {
      return _sight_reducer__WEBPACK_IMPORTED_MODULE_3__["sightReducer"];
    });
    /***/

  },

  /***/
  "./src/modules/dashboard/state-management/states/sight/sight.actions.ts":
  /*!******************************************************************************!*\
    !*** ./src/modules/dashboard/state-management/states/sight/sight.actions.ts ***!
    \******************************************************************************/

  /*! exports provided: SightActions */

  /***/
  function srcModulesDashboardStateManagementStatesSightSightActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SightActions", function () {
      return SightActions;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SightActions;

    (function (SightActions) {
      let Actions;

      (function (Actions) {
        Actions["LoadSightsData"] = "[Sight] LoadSightsData";
        Actions["SetSightsData"] = "[Sight] SetSightsData";
        Actions["SetActiveSightData"] = "[Sight] SetActiveSightData";
        Actions["DeleteSightData"] = "[Sight] DeleteSightData";
        Actions["AddSightData"] = "[Sight] AddSightData";
        Actions["LoadActiveSightData"] = "[Sight] LoadActiveSightData";
        Actions["UpdateActiveSightData"] = "[Sight] UpdateActiveSightData";
      })(Actions = SightActions.Actions || (SightActions.Actions = {}));

      class LoadSightsDataAction {
        constructor() {
          this.type = Actions.LoadSightsData;
        }

      }

      SightActions.LoadSightsDataAction = LoadSightsDataAction;

      class LoadActiveSightDataAction {
        constructor(payload) {
          this.payload = payload;
          this.type = Actions.LoadActiveSightData;
        }

      }

      SightActions.LoadActiveSightDataAction = LoadActiveSightDataAction;

      class SetSightsDataAction {
        constructor(payload) {
          this.payload = payload;
          this.type = Actions.SetSightsData;
        }

      }

      SightActions.SetSightsDataAction = SetSightsDataAction;

      class SetActiveSightDataAction {
        constructor(payload) {
          this.payload = payload;
          this.type = Actions.SetActiveSightData;
        }

      }

      SightActions.SetActiveSightDataAction = SetActiveSightDataAction;

      class UpdateActiveSightDataAction {
        constructor(payload) {
          this.payload = payload;
          this.type = Actions.UpdateActiveSightData;
        }

      }

      SightActions.UpdateActiveSightDataAction = UpdateActiveSightDataAction;

      class DeleteSightDataAction {
        constructor(payload) {
          this.payload = payload;
          this.type = Actions.DeleteSightData;
        }

      }

      SightActions.DeleteSightDataAction = DeleteSightDataAction;

      class AddSightDataAction {
        constructor(payload) {
          this.payload = payload;
          this.type = Actions.AddSightData;
        }

      }

      SightActions.AddSightDataAction = AddSightDataAction;
    })(SightActions || (SightActions = {}));
    /***/

  },

  /***/
  "./src/modules/dashboard/state-management/states/sight/sight.effects.ts":
  /*!******************************************************************************!*\
    !*** ./src/modules/dashboard/state-management/states/sight/sight.effects.ts ***!
    \******************************************************************************/

  /*! exports provided: SightsEffects */

  /***/
  function srcModulesDashboardStateManagementStatesSightSightEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SightsEffects", function () {
      return SightsEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _sight_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sight.actions */
    "./src/modules/dashboard/state-management/states/sight/sight.actions.ts");
    /* harmony import */


    var src_modules_dashboard_services_sightapi_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/modules/dashboard/services/sightapi.service */
    "./src/modules/dashboard/services/sightapi.service.ts");

    let SightsEffects = class SightsEffects {
      constructor(actions, SightApiService, store) {
        this.actions = actions;
        this.SightApiService = SightApiService;
        this.store = store;
        this.loadSightsData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_sight_actions__WEBPACK_IMPORTED_MODULE_5__["SightActions"].Actions.LoadSightsData)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(action => {
          this.SightApiService.getSights().subscribe(Sight => {
            Sight.sort((a, b) => {
              return a.position < b.position ? -1 : 1;
            });
            this.store.dispatch(new _sight_actions__WEBPACK_IMPORTED_MODULE_5__["SightActions"].SetSightsDataAction(Sight));
          });
          return [];
        }));
        this.deleteSightData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_sight_actions__WEBPACK_IMPORTED_MODULE_5__["SightActions"].Actions.DeleteSightData)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(action => {
          const id = action['payload'];
          this.SightApiService.deleteSight(id).subscribe();
          return [];
        }));
        this.addSightData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_sight_actions__WEBPACK_IMPORTED_MODULE_5__["SightActions"].Actions.AddSightData)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(action => {
          const SightData = action['payload'];
          this.SightApiService.addSight(SightData).subscribe();
          return [];
        }));
        this.loadSightInfoData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_sight_actions__WEBPACK_IMPORTED_MODULE_5__["SightActions"].Actions.LoadActiveSightData)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(action => {
          const id = action['payload'];

          if (id) {
            this.getSightsubscription = this.SightApiService.getSight(id).subscribe(Sight => {
              this.store.dispatch(new _sight_actions__WEBPACK_IMPORTED_MODULE_5__["SightActions"].SetActiveSightDataAction(Sight));
            });
          } else {
            this.store.dispatch(new _sight_actions__WEBPACK_IMPORTED_MODULE_5__["SightActions"].SetActiveSightDataAction(null));

            if (this.getSightsubscription) {
              this.getSightsubscription.unsubscribe();
              this.getSightsubscription = null;
            }
          }

          return [];
        }));
        this.updateSightSightData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_sight_actions__WEBPACK_IMPORTED_MODULE_5__["SightActions"].Actions.UpdateActiveSightData)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(action => {
          const payload = action['payload'];
          this.SightApiService.updateSight(payload.sightData, payload.id).subscribe();
          return [];
        }));
      }

    };

    SightsEffects.ctorParameters = () => [{
      type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
    }, {
      type: src_modules_dashboard_services_sightapi_service__WEBPACK_IMPORTED_MODULE_6__["SightApiService"]
    }, {
      type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], SightsEffects.prototype, "loadSightsData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], SightsEffects.prototype, "deleteSightData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], SightsEffects.prototype, "addSightData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], SightsEffects.prototype, "loadSightInfoData$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], SightsEffects.prototype, "updateSightSightData$", void 0);
    SightsEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SightsEffects);
    /***/
  },

  /***/
  "./src/modules/dashboard/state-management/states/sight/sight.reducer.ts":
  /*!******************************************************************************!*\
    !*** ./src/modules/dashboard/state-management/states/sight/sight.reducer.ts ***!
    \******************************************************************************/

  /*! exports provided: sightReducer */

  /***/
  function srcModulesDashboardStateManagementStatesSightSightReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sightReducer", function () {
      return sightReducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _sight_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./sight.actions */
    "./src/modules/dashboard/state-management/states/sight/sight.actions.ts");

    const initialState = {
      sights: [],
      activeSight: null
    };

    function sightReducer(state = initialState, action) {
      switch (action.type) {
        case _sight_actions__WEBPACK_IMPORTED_MODULE_1__["SightActions"].Actions.SetSightsData:
          {
            return Object.assign({}, state, {
              sights: action["payload"]
            });
          }

        case _sight_actions__WEBPACK_IMPORTED_MODULE_1__["SightActions"].Actions.SetActiveSightData:
          {
            return Object.assign({}, state, {
              activeSight: action["payload"]
            });
          }

        default:
          {
            return state;
          }
      }
    }
    /***/

  },

  /***/
  "./src/modules/dashboard/state-management/states/styles/index.ts":
  /*!***********************************************************************!*\
    !*** ./src/modules/dashboard/state-management/states/styles/index.ts ***!
    \***********************************************************************/

  /*! exports provided: StylesActions, StylesEffects, stylesReducer */

  /***/
  function srcModulesDashboardStateManagementStatesStylesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _styles_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./styles.actions */
    "./src/modules/dashboard/state-management/states/styles/styles.actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StylesActions", function () {
      return _styles_actions__WEBPACK_IMPORTED_MODULE_1__["StylesActions"];
    });
    /* harmony import */


    var _styles_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./styles.effects */
    "./src/modules/dashboard/state-management/states/styles/styles.effects.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StylesEffects", function () {
      return _styles_effects__WEBPACK_IMPORTED_MODULE_2__["StylesEffects"];
    });
    /* harmony import */


    var _styles_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./styles.reducer */
    "./src/modules/dashboard/state-management/states/styles/styles.reducer.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "stylesReducer", function () {
      return _styles_reducer__WEBPACK_IMPORTED_MODULE_3__["stylesReducer"];
    });
    /***/

  },

  /***/
  "./src/modules/dashboard/state-management/states/styles/styles.actions.ts":
  /*!********************************************************************************!*\
    !*** ./src/modules/dashboard/state-management/states/styles/styles.actions.ts ***!
    \********************************************************************************/

  /*! exports provided: StylesActions */

  /***/
  function srcModulesDashboardStateManagementStatesStylesStylesActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StylesActions", function () {
      return StylesActions;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var StylesActions;

    (function (StylesActions) {
      let Actions;

      (function (Actions) {
        Actions["LoadStylesData"] = "[Styles] LoadAudiosData";
        Actions["SetStylesData"] = "[Styles] SetAudiosData";
      })(Actions = StylesActions.Actions || (StylesActions.Actions = {}));

      class LoadStylesDataAction {
        constructor() {
          this.type = Actions.LoadStylesData;
        }

      }

      StylesActions.LoadStylesDataAction = LoadStylesDataAction;

      class SetStylesDataAction {
        constructor(payload) {
          this.payload = payload;
          this.type = Actions.SetStylesData;
        }

      }

      StylesActions.SetStylesDataAction = SetStylesDataAction;
    })(StylesActions || (StylesActions = {}));
    /***/

  },

  /***/
  "./src/modules/dashboard/state-management/states/styles/styles.effects.ts":
  /*!********************************************************************************!*\
    !*** ./src/modules/dashboard/state-management/states/styles/styles.effects.ts ***!
    \********************************************************************************/

  /*! exports provided: StylesEffects */

  /***/
  function srcModulesDashboardStateManagementStatesStylesStylesEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StylesEffects", function () {
      return StylesEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _styles_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./styles.actions */
    "./src/modules/dashboard/state-management/states/styles/styles.actions.ts");
    /* harmony import */


    var src_modules_dashboard_services_styles_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/modules/dashboard/services/styles-api.service */
    "./src/modules/dashboard/services/styles-api.service.ts");

    let StylesEffects = class StylesEffects {
      constructor(actions, stylesApiService, store) {
        this.actions = actions;
        this.stylesApiService = stylesApiService;
        this.store = store;
        this.loadStylesData$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_styles_actions__WEBPACK_IMPORTED_MODULE_5__["StylesActions"].Actions.LoadStylesData)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(action => {
          this.stylesApiService.getStyles().subscribe(styles => {
            this.store.dispatch(new _styles_actions__WEBPACK_IMPORTED_MODULE_5__["StylesActions"].SetStylesDataAction(styles));
          });
          return [];
        }));
      }

    };

    StylesEffects.ctorParameters = () => [{
      type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
    }, {
      type: src_modules_dashboard_services_styles_api_service__WEBPACK_IMPORTED_MODULE_6__["StylesApiService"]
    }, {
      type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()], StylesEffects.prototype, "loadStylesData$", void 0);
    StylesEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], StylesEffects);
    /***/
  },

  /***/
  "./src/modules/dashboard/state-management/states/styles/styles.reducer.ts":
  /*!********************************************************************************!*\
    !*** ./src/modules/dashboard/state-management/states/styles/styles.reducer.ts ***!
    \********************************************************************************/

  /*! exports provided: stylesReducer */

  /***/
  function srcModulesDashboardStateManagementStatesStylesStylesReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "stylesReducer", function () {
      return stylesReducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _styles_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./styles.actions */
    "./src/modules/dashboard/state-management/states/styles/styles.actions.ts");

    const initialState = {
      styles: []
    };

    function stylesReducer(state = initialState, action) {
      switch (action.type) {
        case _styles_actions__WEBPACK_IMPORTED_MODULE_1__["StylesActions"].Actions.SetStylesData:
          {
            return Object.assign({}, state, {
              styles: action["payload"]
            });
          }

        default:
          {
            return state;
          }
      }
    }
    /***/

  },

  /***/
  "./src/modules/shared/components/abstract.component.ts":
  /*!*************************************************************!*\
    !*** ./src/modules/shared/components/abstract.component.ts ***!
    \*************************************************************/

  /*! exports provided: AbstractComponent */

  /***/
  function srcModulesSharedComponentsAbstractComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbstractComponent", function () {
      return AbstractComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    class AbstractComponent {
      constructor() {
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
      }

      ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
      }

    }
    /***/

  },

  /***/
  "./src/modules/shared/components/index.ts":
  /*!************************************************!*\
    !*** ./src/modules/shared/components/index.ts ***!
    \************************************************/

  /*! exports provided: AbstractComponent */

  /***/
  function srcModulesSharedComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _abstract_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./abstract.component */
    "./src/modules/shared/components/abstract.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AbstractComponent", function () {
      return _abstract_component__WEBPACK_IMPORTED_MODULE_1__["AbstractComponent"];
    });
    /***/

  },

  /***/
  "./src/modules/shared/constants/index.ts":
  /*!***********************************************!*\
    !*** ./src/modules/shared/constants/index.ts ***!
    \***********************************************/

  /*! exports provided: URL_PATTERN, DEFAULT_LANG */

  /***/
  function srcModulesSharedConstantsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _patterns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./patterns */
    "./src/modules/shared/constants/patterns.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "URL_PATTERN", function () {
      return _patterns__WEBPACK_IMPORTED_MODULE_1__["URL_PATTERN"];
    });
    /* harmony import */


    var _translation_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./translation-constants */
    "./src/modules/shared/constants/translation-constants.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_LANG", function () {
      return _translation_constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_LANG"];
    });
    /***/

  },

  /***/
  "./src/modules/shared/constants/patterns.ts":
  /*!**************************************************!*\
    !*** ./src/modules/shared/constants/patterns.ts ***!
    \**************************************************/

  /*! exports provided: URL_PATTERN */

  /***/
  function srcModulesSharedConstantsPatternsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "URL_PATTERN", function () {
      return URL_PATTERN;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    const URL_PATTERN = '(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?';
    /***/
  },

  /***/
  "./src/modules/shared/constants/translation-constants.ts":
  /*!***************************************************************!*\
    !*** ./src/modules/shared/constants/translation-constants.ts ***!
    \***************************************************************/

  /*! exports provided: DEFAULT_LANG */

  /***/
  function srcModulesSharedConstantsTranslationConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_LANG", function () {
      return DEFAULT_LANG;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    const DEFAULT_LANG = '_en';
    /***/
  },

  /***/
  "./src/modules/shared/index.ts":
  /*!*************************************!*\
    !*** ./src/modules/shared/index.ts ***!
    \*************************************/

  /*! exports provided: AbstractComponent, URL_PATTERN, DEFAULT_LANG */

  /***/
  function srcModulesSharedIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components */
    "./src/modules/shared/components/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AbstractComponent", function () {
      return _components__WEBPACK_IMPORTED_MODULE_1__["AbstractComponent"];
    });
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./constants */
    "./src/modules/shared/constants/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "URL_PATTERN", function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["URL_PATTERN"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_LANG", function () {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_LANG"];
    });
    /***/

  },

  /***/
  "./src/modules/sign-in/components/index.ts":
  /*!*************************************************!*\
    !*** ./src/modules/sign-in/components/index.ts ***!
    \*************************************************/

  /*! exports provided: SignComponent */

  /***/
  function srcModulesSignInComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _sign_sign_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./sign/sign.component */
    "./src/modules/sign-in/components/sign/sign.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SignComponent", function () {
      return _sign_sign_component__WEBPACK_IMPORTED_MODULE_1__["SignComponent"];
    });
    /***/

  },

  /***/
  "./src/modules/sign-in/components/sign/sign.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/modules/sign-in/components/sign/sign.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesSignInComponentsSignSignComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .panel-header {\n  padding-top: 30px;\n  color: white;\n  text-align: center;\n  font-size: 30px;\n}\n:host .main-panel {\n  width: 100%;\n  min-height: 100%;\n}\n:host .main-panel .content {\n  margin-top: -30px;\n}\n:host .main-panel .content .col-sign-in {\n  flex-basis: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL3NpZ24taW4vY29tcG9uZW50cy9zaWduL0Q6XFxBbmd1bGFyXFxNeVRlc3RQcm9qZWN0c1xcQW5pbWF0aW9uVGVzdFxcbXlEZXNBcHAxL3NyY1xcbW9kdWxlc1xcc2lnbi1pblxcY29tcG9uZW50c1xcc2lnblxcc2lnbi5jb21wb25lbnQuc2NzcyIsInNyYy9tb2R1bGVzL3NpZ24taW4vY29tcG9uZW50cy9zaWduL3NpZ24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNBSjtBREVFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDQUo7QURDSTtFQUNFLGlCQUFBO0FDQ047QURDTTtFQUNFLGlCQUFBO0FDQ1IiLCJmaWxlIjoic3JjL21vZHVsZXMvc2lnbi1pbi9jb21wb25lbnRzL3NpZ24vc2lnbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLnBhbmVsLWhlYWRlciB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbiAgLm1haW4tcGFuZWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgLmNvbnRlbnQge1xuICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XG5cbiAgICAgIC5jb2wtc2lnbi1pbiB7XG4gICAgICAgIGZsZXgtYmFzaXM6IDM1MHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3QgLnBhbmVsLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuOmhvc3QgLm1haW4tcGFuZWwge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5tYWluLXBhbmVsIC5jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG59XG46aG9zdCAubWFpbi1wYW5lbCAuY29udGVudCAuY29sLXNpZ24taW4ge1xuICBmbGV4LWJhc2lzOiAzNTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/modules/sign-in/components/sign/sign.component.ts":
  /*!***************************************************************!*\
    !*** ./src/modules/sign-in/components/sign/sign.component.ts ***!
    \***************************************************************/

  /*! exports provided: SignComponent */

  /***/
  function srcModulesSignInComponentsSignSignComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignComponent", function () {
      return SignComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/add/observable/of */
    "./node_modules/rxjs-compat/_esm2015/add/observable/of.js");
    /* harmony import */


    var _services_sign_in_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/sign-in.service */
    "./src/modules/sign-in/services/sign-in.service.ts");

    const USER_ACCOUNT = '123';
    const USER_PASSWORD = '123';
    let SignComponent = class SignComponent {
      constructor(router, formBuilder, signInService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.signInService = signInService;
        this.token = false;
        this.signInForm = this.formBuilder.group({
          account: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]]
        });
      }

      logIn() {
        if (this.signInForm.value.account == USER_ACCOUNT && this.signInForm.value.password == USER_PASSWORD) {
          this.signInService.setToken(this.signInForm.value.account);
          this.router.navigate(['']);
        }
      }

    };

    SignComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _services_sign_in_service__WEBPACK_IMPORTED_MODULE_5__["SignInService"]
    }];

    SignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/sign-in/components/sign/sign.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign.component.scss */
      "./src/modules/sign-in/components/sign/sign.component.scss")).default]
    })], SignComponent);
    /***/
  },

  /***/
  "./src/modules/sign-in/services/index.ts":
  /*!***********************************************!*\
    !*** ./src/modules/sign-in/services/index.ts ***!
    \***********************************************/

  /*! exports provided: SignInService */

  /***/
  function srcModulesSignInServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _sign_in_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./sign-in.service */
    "./src/modules/sign-in/services/sign-in.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SignInService", function () {
      return _sign_in_service__WEBPACK_IMPORTED_MODULE_1__["SignInService"];
    });
    /***/

  },

  /***/
  "./src/modules/sign-in/services/sign-in.service.ts":
  /*!*********************************************************!*\
    !*** ./src/modules/sign-in/services/sign-in.service.ts ***!
    \*********************************************************/

  /*! exports provided: SignInService */

  /***/
  function srcModulesSignInServicesSignInServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInService", function () {
      return SignInService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    const TOKEN_KEY = 'user_token';
    let SignInService = class SignInService {
      getToken() {
        const tokenEdge = localStorage.getItem(TOKEN_KEY);
        return tokenEdge ? JSON.parse(tokenEdge, this.dateTimeReviver) : null;
      }

      setToken(userName) {
        const date = new Date();
        date.setHours(date.getHours() + 3);
        const token = {
          userName: userName,
          expiresIn: date
        };
        localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
      }

      removeToken() {
        localStorage.removeItem(TOKEN_KEY);
      }

      dateTimeReviver(key, value) {
        return key === 'expiresIn' ? new Date(value) : value;
      }

    };
    SignInService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SignInService);
    /***/
  },

  /***/
  "./src/modules/sign-in/sign-in-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/modules/sign-in/sign-in-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: signInRoutes, SignInRoutingModule */

  /***/
  function srcModulesSignInSignInRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "signInRoutes", function () {
      return signInRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInRoutingModule", function () {
      return SignInRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components */
    "./src/modules/sign-in/components/index.ts");

    const signInRoutes = [{
      path: '',
      component: _components__WEBPACK_IMPORTED_MODULE_3__["SignComponent"]
    }];
    let SignInRoutingModule = class SignInRoutingModule {};
    SignInRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(signInRoutes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: []
    })], SignInRoutingModule);
    /***/
  },

  /***/
  "./src/modules/sign-in/sign-in.module.ts":
  /*!***********************************************!*\
    !*** ./src/modules/sign-in/sign-in.module.ts ***!
    \***********************************************/

  /*! exports provided: SignInModule */

  /***/
  function srcModulesSignInSignInModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInModule", function () {
      return SignInModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components */
    "./src/modules/sign-in/components/index.ts");
    /* harmony import */


    var _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sign-in-routing.module */
    "./src/modules/sign-in/sign-in-routing.module.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services */
    "./src/modules/sign-in/services/index.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    let SignInModule = class SignInModule {};
    SignInModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components__WEBPACK_IMPORTED_MODULE_3__["SignComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_4__["SignInRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
      providers: [_services__WEBPACK_IMPORTED_MODULE_5__["SignInService"]]
    })], SignInModule);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Angular\MyTestProjects\AnimationTest\myDesApp1\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map