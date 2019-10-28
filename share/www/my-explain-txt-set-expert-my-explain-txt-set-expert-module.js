(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-explain-txt-set-expert-my-explain-txt-set-expert-module"],{

/***/ "./src/app/my-explain-txt-set-expert/my-explain-txt-set-expert.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/my-explain-txt-set-expert/my-explain-txt-set-expert.module.ts ***!
  \*******************************************************************************/
/*! exports provided: MyExplainTxtSetExpertPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyExplainTxtSetExpertPageModule", function() { return MyExplainTxtSetExpertPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_explain_txt_set_expert_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-explain-txt-set-expert.page */ "./src/app/my-explain-txt-set-expert/my-explain-txt-set-expert.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _my_explain_txt_set_expert_page__WEBPACK_IMPORTED_MODULE_5__["MyExplainTxtSetExpertPage"]
    }
];
var MyExplainTxtSetExpertPageModule = /** @class */ (function () {
    function MyExplainTxtSetExpertPageModule() {
    }
    MyExplainTxtSetExpertPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_my_explain_txt_set_expert_page__WEBPACK_IMPORTED_MODULE_5__["MyExplainTxtSetExpertPage"]]
        })
    ], MyExplainTxtSetExpertPageModule);
    return MyExplainTxtSetExpertPageModule;
}());



/***/ }),

/***/ "./src/app/my-explain-txt-set-expert/my-explain-txt-set-expert.page.html":
/*!*******************************************************************************!*\
  !*** ./src/app/my-explain-txt-set-expert/my-explain-txt-set-expert.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header no-border>\n    <div class=\"{{header_class}}\">\n      <div class=\"head_berd\">\n          <ion-toolbar color=\"primary\" mode=\"ios\">\n              <ion-buttons slot=\"start\">\n                <ion-back-button text=\"\"></ion-back-button>\n              </ion-buttons>\n          <ion-title>我的擅长</ion-title>\n          <ion-buttons slot='end'>\n            <ion-button ion-button (click)=\"baoc_click()\">\n              <ion-label>保存</ion-label>\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </div>\n    </div>\n  \n  </ion-header>\n  \n  \n  \n  <ion-content style=\"background:rgb(245, 245, 249) none repeat scroll 0% 0%;\">\n  \n    <!-- <div style=\"margin:1.6rem\">\n      <p style=\"color:#333333;font-size:1.4rem;\">我擅长占卜那些方面 比如：爱情,事业,学业 ... 请用,号分隔 该内容用作向客户展示</p>\n    </div> -->\n    <div class=\"textarea_f\">\n      <textarea #jianjieinfoin (keyup)='userTxt_upkey(jianjieinfoin.value)' placeholder=\"擅长占卜哪些方面 请用空格分隔 比如：爱情 事业 学业    该内容只用作向用户展示。\" class=\"jianjie_textarea\"\n        style=\"width:100%\" style=\"background: #ffffff; border:0px;\" rows=\"5\">{{serviceTxt}}</textarea>\n  \n    </div>\n  \n  \n  \n  </ion-content>"

/***/ }),

/***/ "./src/app/my-explain-txt-set-expert/my-explain-txt-set-expert.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/my-explain-txt-set-expert/my-explain-txt-set-expert.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textarea_f {\n  padding: 10px;\n  margin-top: 20px;\n  background: #FFFFFF; }\n\n.jianjie_textarea {\n  width: 100%;\n  font-size: 1.45rem;\n  color: #333333; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvbXktZXhwbGFpbi10eHQtc2V0LWV4cGVydC9teS1leHBsYWluLXR4dC1zZXQtZXhwZXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFBRSxnQkFBZ0I7RUFBQyxtQkFBbUIsRUFBQTs7QUFFdkQ7RUFDQSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL215LWV4cGxhaW4tdHh0LXNldC1leHBlcnQvbXktZXhwbGFpbi10eHQtc2V0LWV4cGVydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGFyZWFfZntcbiAgICBwYWRkaW5nOiAxMHB4OyBtYXJnaW4tdG9wOiAyMHB4O2JhY2tncm91bmQ6ICNGRkZGRkY7XG59XG4uamlhbmppZV90ZXh0YXJlYXtcbndpZHRoOiAxMDAlO1xuZm9udC1zaXplOiAxLjQ1cmVtO1xuY29sb3I6IzMzMzMzMztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/my-explain-txt-set-expert/my-explain-txt-set-expert.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/my-explain-txt-set-expert/my-explain-txt-set-expert.page.ts ***!
  \*****************************************************************************/
/*! exports provided: MyExplainTxtSetExpertPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyExplainTxtSetExpertPage", function() { return MyExplainTxtSetExpertPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyExplainTxtSetExpertPage = /** @class */ (function () {
    function MyExplainTxtSetExpertPage(appmin, navCtrl, alertCtrl, actionSheetCtrl, loadingCtrl, camera) {
        this.appmin = appmin;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.serviceTxt = "";
        //------------------动态设置导航栏高度start
        if (appmin.GetPhoneMode() == "ios") {
            this.header_class = "header_class";
        }
        else {
            this.header_class = "header_class";
            console.log("判断为安卓系统 设置状态栏样式");
        }
        //------------------动态设置导航栏高度end
        this.serviceTxt = this.serviceTxt.trim();
    }
    MyExplainTxtSetExpertPage.prototype.userTxt_upkey = function (value) {
        //简介输入框 输入事件
        this.serviceTxt = value;
    };
    MyExplainTxtSetExpertPage.prototype.baoc_click = function () {
        //保存按钮
        var _this = this;
        var obj = {
            type: "setExpert",
            userId: this.appmin.getUserid(),
            expert: this.serviceTxt
        };
        // this.send(JSON.stringify(obj), true);
        // this.appmin.send(JSON.stringify(obj))
        this.appmin.post(obj).subscribe(function (data) {
            _this.dataHandle(data);
        });
    };
    MyExplainTxtSetExpertPage.prototype.ionViewWillEnter = function () {
        this.addExpert();
    };
    MyExplainTxtSetExpertPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyExplainTxtSetExpertPage');
    };
    MyExplainTxtSetExpertPage.prototype.addExpert = function () {
        var _this = this;
        //删除内容
        var obj = {
            type: "addExpert",
            userId: this.appmin.getUserid(),
        };
        // this.appmin.send(JSON.stringify(obj));
        this.appmin.post(obj).subscribe(function (data) {
            _this.dataHandle(data);
        });
    };
    MyExplainTxtSetExpertPage.prototype.dataHandle = function (msg) {
        if (msg.type == 'addExpert_ret') {
            console.log("addExpert_ret=" + JSON.stringify(msg));
            //收到加载数据
            this.serviceTxt = msg.expert;
        }
        if (msg.type == 'setExpert_ret') {
            //设置擅长完成 返回
            this.navCtrl.pop();
        }
    };
    MyExplainTxtSetExpertPage.prototype.ngOnInit = function () {
    };
    MyExplainTxtSetExpertPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-explain-txt-set-expert',
            template: __webpack_require__(/*! ./my-explain-txt-set-expert.page.html */ "./src/app/my-explain-txt-set-expert/my-explain-txt-set-expert.page.html"),
            styles: [__webpack_require__(/*! ./my-explain-txt-set-expert.page.scss */ "./src/app/my-explain-txt-set-expert/my-explain-txt-set-expert.page.scss")]
        }),
        __metadata("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["AppMin"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"]])
    ], MyExplainTxtSetExpertPage);
    return MyExplainTxtSetExpertPage;
}());



/***/ })

}]);
//# sourceMappingURL=my-explain-txt-set-expert-my-explain-txt-set-expert-module.js.map