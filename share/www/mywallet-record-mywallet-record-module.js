(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mywallet-record-mywallet-record-module"],{

/***/ "./src/app/mywallet-record/mywallet-record.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/mywallet-record/mywallet-record.module.ts ***!
  \***********************************************************/
/*! exports provided: MywalletRecordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MywalletRecordPageModule", function() { return MywalletRecordPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mywallet_record_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mywallet-record.page */ "./src/app/mywallet-record/mywallet-record.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _mywallet_record_page__WEBPACK_IMPORTED_MODULE_5__["MywalletRecordPage"]
    }
];
var MywalletRecordPageModule = /** @class */ (function () {
    function MywalletRecordPageModule() {
    }
    MywalletRecordPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_mywallet_record_page__WEBPACK_IMPORTED_MODULE_5__["MywalletRecordPage"]]
        })
    ], MywalletRecordPageModule);
    return MywalletRecordPageModule;
}());



/***/ }),

/***/ "./src/app/mywallet-record/mywallet-record.page.html":
/*!***********************************************************!*\
  !*** ./src/app/mywallet-record/mywallet-record.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <div class=\"{{header_class}}\">\n      <div class=\"head_berd\">\n        <ion-toolbar color=\"primary\" mode=\"ios\">\n            <ion-buttons slot=\"start\">\n                <ion-back-button text=''></ion-back-button>\n              </ion-buttons>\n          <ion-title>提款记录</ion-title>\n        </ion-toolbar>\n      </div>\n    </div>\n  </ion-header>\n  \n  \n  <ion-content padding>\n    <!-- <ion-refresher (ionRefresh)=\"doRefresh($event)\"  >\n      <ion-refresher-content\n      pullingIcon=\"null\"\n      pullingText=\"\"\n      refreshingSpinner=\"\"\n      refreshingText=\"\"\n      ></ion-refresher-content>\n  </ion-refresher> -->\n  \n  <div style=\"text-align: center\" *ngIf=\"ret_data_leth == 0\">\n  <P style=\"color: #666666\">没有提款记录 </P>\n  </div>\n      <ion-list *ngIf=\"ret_data_leth != 0\">\n          <ion-item>\n  \n              <ion-grid>\n                  <ion-row class=\"title\">\n                    <ion-col >申请日期</ion-col>\n                    <ion-col >提款金额</ion-col>\n                    <ion-col >处理状态</ion-col>\n                  </ion-row>\n                 \n                </ion-grid>\n          </ion-item>\n          <ion-item *ngFor=\"let item of listobj\">\n  \n              <ion-grid>\n                  <ion-row class=\"row1\">\n                    <ion-col >{{item.date}}</ion-col>\n                    <ion-col >{{item.money}}</ion-col>\n                    <ion-col >{{item.state}}</ion-col>\n                  </ion-row>\n                 \n                </ion-grid>\n          </ion-item>\n      </ion-list>\n  \n  </ion-content>"

/***/ }),

/***/ "./src/app/mywallet-record/mywallet-record.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/mywallet-record/mywallet-record.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title ion-col {\n  color: #333333;\n  text-align: center; }\n\n.row1 ion-col {\n  color: #666666;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvbXl3YWxsZXQtcmVjb3JkL215d2FsbGV0LXJlY29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksY0FBYztFQUNkLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbXl3YWxsZXQtcmVjb3JkL215d2FsbGV0LXJlY29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUgaW9uLWNvbHtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucm93MSBpb24tY29se1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/mywallet-record/mywallet-record.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/mywallet-record/mywallet-record.page.ts ***!
  \*********************************************************/
/*! exports provided: MywalletRecordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MywalletRecordPage", function() { return MywalletRecordPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MywalletRecordPage = /** @class */ (function () {
    function MywalletRecordPage(navCtrl, appmin, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.appmin = appmin;
        this.loadingCtrl = loadingCtrl;
        this.listobj = [];
        this.ret_data_leth = 0;
        if (this.appmin.GetPhoneMode() == "ios") {
            this.header_class = "header_class";
        }
        else {
            this.header_class = "header_class";
            console.log("判断为安卓系统 设置状态栏样式");
        }
    }
    MywalletRecordPage.prototype.send = function (value, isshow) {
        var _this = this;
        if (isshow) {
            this.loader = this.loadingCtrl.create({
                message: "加载中...",
                duration: 3000
            });
            this.loader.present();
        }
        this.appmin.post(JSON.parse(value)).subscribe(function (data) {
            _this.dataHandle(data);
        });
    };
    MywalletRecordPage.prototype.dataHandle = function (meg) {
        if (meg['type'] == 'addMyWalletRecordPage_ret') {
            //
            console.log('addMyWalletRecordPage_ret=' + JSON.stringify(meg));
            this.listobj = meg['rows'];
            this.ret_data_leth = this.listobj.length; //设置返回的数据行数 用来判断是否显示没有数据的提示
            console.log("ret_data_leth=" + this.ret_data_leth);
        }
    };
    MywalletRecordPage.prototype.addMyWalletRecordPage = function () {
        //加载数据
        var obj = {
            type: 'addMyWalletRecordPage',
            userId: this.appmin.getUserid()
        };
        this.send(JSON.stringify(obj));
    };
    MywalletRecordPage.prototype.ngOnInit = function () {
        this.addMyWalletRecordPage();
    };
    MywalletRecordPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mywallet-record',
            template: __webpack_require__(/*! ./mywallet-record.page.html */ "./src/app/mywallet-record/mywallet-record.page.html"),
            styles: [__webpack_require__(/*! ./mywallet-record.page.scss */ "./src/app/mywallet-record/mywallet-record.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _core__WEBPACK_IMPORTED_MODULE_2__["AppMin"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]])
    ], MywalletRecordPage);
    return MywalletRecordPage;
}());



/***/ })

}]);
//# sourceMappingURL=mywallet-record-mywallet-record-module.js.map