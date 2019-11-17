(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myfollow-myfollow-module"],{

/***/ "./src/app/myfollow/myfollow.module.ts":
/*!*********************************************!*\
  !*** ./src/app/myfollow/myfollow.module.ts ***!
  \*********************************************/
/*! exports provided: MyfollowPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyfollowPageModule", function() { return MyfollowPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _myfollow_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./myfollow.page */ "./src/app/myfollow/myfollow.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _myfollow_page__WEBPACK_IMPORTED_MODULE_5__["MyfollowPage"]
    }
];
var MyfollowPageModule = /** @class */ (function () {
    function MyfollowPageModule() {
    }
    MyfollowPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_myfollow_page__WEBPACK_IMPORTED_MODULE_5__["MyfollowPage"]]
        })
    ], MyfollowPageModule);
    return MyfollowPageModule;
}());



/***/ }),

/***/ "./src/app/myfollow/myfollow.page.html":
/*!*********************************************!*\
  !*** ./src/app/myfollow/myfollow.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <div class=\"{{header_class}}\">\n    <div class=\"head_berd\">\n      <ion-toolbar color=\"primary\" >\n        <ion-buttons slot=\"start\">\n          <ion-back-button text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>我的关注</ion-title>\n      </ion-toolbar>\n    </div>\n  </div>\n\n</ion-header>\n<ion-content padding>\n  <!-- <ion-refresher (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content pullingIcon=\"null\" pullingText=\"\" refreshingSpinner=\"\" refreshingText=\"\"></ion-refresher-content>\n    </ion-refresher> -->\n\n\n\n\n  <div style=\"text-align: center;color: #666666;font-size: 1.45rem\">\n    <div *ngIf=\"!notMoer\">\n      没有关注任何人。。\n    </div>\n  </div>\n\n  <div style=\"padding: 0px;\">\n    <ion-list style=\"margin:0px\">\n      <ion-item detail *ngFor=\"let item of objList\" (click)=\"list_click(item.userid)\">\n        <ion-avatar slot=\"start\">\n          <img src=\"{{item.userImg}}\">\n        </ion-avatar>\n        <ion-label text-wrap>\n          <ion-text color=\"primary\">\n            <h3>{{item.userName}}</h3>\n          </ion-text>\n        </ion-label>\n\n\n      </ion-item>\n    </ion-list>\n  </div>\n\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/myfollow/myfollow.page.scss":
/*!*********************************************!*\
  !*** ./src/app/myfollow/myfollow.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215Zm9sbG93L215Zm9sbG93LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/myfollow/myfollow.page.ts":
/*!*******************************************!*\
  !*** ./src/app/myfollow/myfollow.page.ts ***!
  \*******************************************/
/*! exports provided: MyfollowPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyfollowPage", function() { return MyfollowPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyfollowPage = /** @class */ (function () {
    function MyfollowPage(navCtrl, Router, appMin, alertCtrl, actionSheetCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.Router = Router;
        this.appMin = appMin;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.header_class = "";
        if (this.appMin.GetPhoneMode() == "ios") {
            this.header_class = "header_class";
        }
        else {
            this.header_class = "header_class_md";
            console.log("判断为安卓系统 设置状态栏样式");
        }
    }
    MyfollowPage.prototype.send = function (value, isshow) {
        var _this = this;
        if (isshow) {
            if (!this.loader) {
                this.loader = this.loadingCtrl.create({
                    message: "加载中...",
                    duration: 3000
                });
                this.loader.present();
            }
        }
        this.appMin.post(JSON.parse(value)).subscribe(function (data) {
            _this.dataHandle(data);
        });
    };
    MyfollowPage.prototype.addFollowList = function () {
        //加载关注列表
        var obj = {
            type: 'addFollowList',
            userId: this.appMin.getUserid()
        };
        this.send(JSON.stringify(obj), false);
    };
    MyfollowPage.prototype.list_click = function (val) {
        //列表被单击
        console.log('list_click=' + val); //输出用户ID
        var obj = {
            userId: val,
        };
        //this.navCtrl.push(Consultant, obj);
        this.Router.navigate(['/consultant'], { queryParams: obj });
    };
    MyfollowPage.prototype.dataHandle = function (meg) {
        //   console.log(JSON.stringify(meg));
        if (meg['type'] == "addFollowList_ret") {
            //收到加载数据列表
            this.objList = meg['rows'];
            //  console.log("objList.length=" + this.objList.length)
            if (this.objList.length != 0) {
                this.notMoer = true;
            }
        }
    };
    MyfollowPage.prototype.ngOnInit = function () {
        this.addFollowList();
    };
    MyfollowPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myfollow',
            template: __webpack_require__(/*! ./myfollow.page.html */ "./src/app/myfollow/myfollow.page.html"),
            styles: [__webpack_require__(/*! ./myfollow.page.scss */ "./src/app/myfollow/myfollow.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _core__WEBPACK_IMPORTED_MODULE_2__["AppMin"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]])
    ], MyfollowPage);
    return MyfollowPage;
}());



/***/ })

}]);
//# sourceMappingURL=myfollow-myfollow-module.js.map