(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["application-consultant2-application-consultant2-module"],{

/***/ "./src/app/application-consultant2/application-consultant2.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/application-consultant2/application-consultant2.module.ts ***!
  \***************************************************************************/
/*! exports provided: ApplicationConsultant2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationConsultant2PageModule", function() { return ApplicationConsultant2PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _application_consultant2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./application-consultant2.page */ "./src/app/application-consultant2/application-consultant2.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _application_consultant2_page__WEBPACK_IMPORTED_MODULE_5__["ApplicationConsultant2Page"]
    }
];
var ApplicationConsultant2PageModule = /** @class */ (function () {
    function ApplicationConsultant2PageModule() {
    }
    ApplicationConsultant2PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_application_consultant2_page__WEBPACK_IMPORTED_MODULE_5__["ApplicationConsultant2Page"]]
        })
    ], ApplicationConsultant2PageModule);
    return ApplicationConsultant2PageModule;
}());



/***/ }),

/***/ "./src/app/application-consultant2/application-consultant2.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/application-consultant2/application-consultant2.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <div class=\"{{header_class}}\">\n    <div class=\"head_berd\">\n      <ion-toolbar color=\"primary\" mode=\"ios\">\n        <ion-buttons slot=\"secondary\">\n          <!-- <ion-back-button text=\"\"></ion-back-button> -->\n        </ion-buttons>\n        <ion-title>咨询师入驻</ion-title>\n\n        <ion-buttons slot='end'>\n          <ion-button (click)='Applicationok()'>\n            <ion-label style=\"font-size: 1.5rem;\">完成</ion-label>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </div>\n  </div>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div style=\"text-align: center;margin-top: 5%;\">\n    <img width=\"60\" height=\"60\" src='../../assets/img/申请成功.png'>\n    <h2 style='color:#333333'>提交成功</h2>\n  </div>\n  <div>\n    <p style='color:#666666'>\n      1、我们已经收到你的申请，请加入QQ群165324370(阿苏法第十三庭)进行第二步占卜能力测试，通过后将为你开通咨询师权限\n    </p>\n    <p style='color:#666666'>\n      2、加群请注明，'塔罗馆申请咨询师'。\n    </p>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/application-consultant2/application-consultant2.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/application-consultant2/application-consultant2.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uLWNvbnN1bHRhbnQyL2FwcGxpY2F0aW9uLWNvbnN1bHRhbnQyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/application-consultant2/application-consultant2.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/application-consultant2/application-consultant2.page.ts ***!
  \*************************************************************************/
/*! exports provided: ApplicationConsultant2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationConsultant2Page", function() { return ApplicationConsultant2Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core */ "./src/app/core.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApplicationConsultant2Page = /** @class */ (function () {
    function ApplicationConsultant2Page(navCtrl, appMin, Router) {
        this.navCtrl = navCtrl;
        this.appMin = appMin;
        this.Router = Router;
        if (this.appMin.GetPhoneMode() != "ios") {
            this.header_class = "header_class";
        }
        else {
            this.header_class = "header_class";
        }
        // this.navCtrl.remove(null,2,null)
    }
    ApplicationConsultant2Page.prototype.ngOnInit = function () {
    };
    ApplicationConsultant2Page.prototype.Applicationok = function () {
        this.Router.navigate(['tabs/contact'], { queryParams: {} });
    };
    ApplicationConsultant2Page.prototype.ionViewWillLeave = function () {
        //将要离开
        // this.navCtrl.setRoot(ContactPage);
    };
    ApplicationConsultant2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ApplicationConsultant_2Page');
    };
    ApplicationConsultant2Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-application-consultant2',
            template: __webpack_require__(/*! ./application-consultant2.page.html */ "./src/app/application-consultant2/application-consultant2.page.html"),
            styles: [__webpack_require__(/*! ./application-consultant2.page.scss */ "./src/app/application-consultant2/application-consultant2.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _core__WEBPACK_IMPORTED_MODULE_3__["AppMin"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ApplicationConsultant2Page);
    return ApplicationConsultant2Page;
}());



/***/ })

}]);
//# sourceMappingURL=application-consultant2-application-consultant2-module.js.map