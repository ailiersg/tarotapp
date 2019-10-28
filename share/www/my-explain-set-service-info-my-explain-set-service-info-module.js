(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-explain-set-service-info-my-explain-set-service-info-module"],{

/***/ "./src/app/my-explain-set-service-info/my-explain-set-service-info.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/my-explain-set-service-info/my-explain-set-service-info.module.ts ***!
  \***********************************************************************************/
/*! exports provided: MyExplainSetServiceInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyExplainSetServiceInfoPageModule", function() { return MyExplainSetServiceInfoPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_explain_set_service_info_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-explain-set-service-info.page */ "./src/app/my-explain-set-service-info/my-explain-set-service-info.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _my_explain_set_service_info_page__WEBPACK_IMPORTED_MODULE_5__["MyExplainSetServiceInfoPage"]
    }
];
var MyExplainSetServiceInfoPageModule = /** @class */ (function () {
    function MyExplainSetServiceInfoPageModule() {
    }
    MyExplainSetServiceInfoPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_my_explain_set_service_info_page__WEBPACK_IMPORTED_MODULE_5__["MyExplainSetServiceInfoPage"]]
        })
    ], MyExplainSetServiceInfoPageModule);
    return MyExplainSetServiceInfoPageModule;
}());



/***/ }),

/***/ "./src/app/my-explain-set-service-info/my-explain-set-service-info.page.html":
/*!***********************************************************************************!*\
  !*** ./src/app/my-explain-set-service-info/my-explain-set-service-info.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <div class=\"{{header_class}}\">\n    <div class=\"head_berd\">\n      <ion-toolbar color=\"primary\" mode=\"ios\">\n        <ion-buttons slot=\"start\">\n          <ion-back-button text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>修改咨询说明</ion-title>\n        <ion-buttons slot='end'>\n          <ion-button (click)=\"baoc_click()\">\n            <ion-label>保存</ion-label>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </div>\n  </div>\n\n</ion-header>\n\n\n\n<ion-content style=\"background:rgb(245, 245, 249) none repeat scroll 0% 0%;\">\n  <div class=\"textarea_f\">\n\n    <textarea #jianjieinfoin (keyup)='userTxt_upkey(jianjieinfoin.value)' placeholder=\"自我介绍，占卜介绍\"\n      class=\"jianjie_textarea\" style=\"width:100%\" style=\"background: #ffffff; border:0px;\"\n      rows=\"5\">{{serviceTxt}}</textarea>\n\n  </div>\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/my-explain-set-service-info/my-explain-set-service-info.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/my-explain-set-service-info/my-explain-set-service-info.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textarea_f {\n  padding: 10px;\n  margin-top: 20px;\n  background: #FFFFFF; }\n\n.jianjie_textarea {\n  width: 100%;\n  font-size: 1.45rem;\n  color: #333333; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvbXktZXhwbGFpbi1zZXQtc2VydmljZS1pbmZvL215LWV4cGxhaW4tc2V0LXNlcnZpY2UtaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQUUsZ0JBQWdCO0VBQUMsbUJBQW1CLEVBQUE7O0FBRXZEO0VBQ0EsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9teS1leHBsYWluLXNldC1zZXJ2aWNlLWluZm8vbXktZXhwbGFpbi1zZXQtc2VydmljZS1pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0YXJlYV9me1xuICAgIHBhZGRpbmc6IDEwcHg7IG1hcmdpbi10b3A6IDIwcHg7YmFja2dyb3VuZDogI0ZGRkZGRjtcbn1cbi5qaWFuamllX3RleHRhcmVhe1xud2lkdGg6IDEwMCU7XG5mb250LXNpemU6IDEuNDVyZW07XG5jb2xvcjojMzMzMzMzO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/my-explain-set-service-info/my-explain-set-service-info.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/my-explain-set-service-info/my-explain-set-service-info.page.ts ***!
  \*********************************************************************************/
/*! exports provided: MyExplainSetServiceInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyExplainSetServiceInfoPage", function() { return MyExplainSetServiceInfoPage; });
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




// var MyExplainTxtSetServiceTxtPage_message;
// let MyExplainTxtSetServiceTxtPage_close;
var MyExplainSetServiceInfoPage = /** @class */ (function () {
    function MyExplainSetServiceInfoPage(appmin, navCtrl, alertCtrl, actionSheetCtrl, loadingCtrl, camera) {
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
        //------------------加载网络监听器start
        // socket1.removeEventListener('message', MyExplainTxtSetServiceTxtPage_message);
        // let _this = this;
        // MyExplainTxtSetServiceTxtPage_message = function (event) {
        //   let meg = JSON.parse(event.data);
        //   if (meg.type == "error") {
        //     WitePrompt("MyExplainTxtSetPage页面监听消息===" + JSON.stringify(meg));
        //   } else {
        //     WitePrompt("MyExplainTxtSetPage页面监听消息===" + meg.type);
        //   }
        //   // if (_this.loader) {
        //   //   _this.loader.dismiss();
        //   //   _this.loader = null;
        //   // }
        //   //安全的删除加载框结束 --
        //   //
        //   if (meg.type == 'addServiceTxt_ret') {
        //     _this.dataHandle(meg);
        //   }
        //   if (meg.type == 'setObjServiceInTxt_ret') {
        //     _this.dataHandle(meg);
        //   }
        // }
        // socket1.addEventListener('message', MyExplainTxtSetServiceTxtPage_message);
        // socket1.removeEventListener('close', MyExplainTxtSetServiceTxtPage_close);
        // MyExplainTxtSetServiceTxtPage_close = function () {
        //   console.log('MyExplainTxtSetServiceTxtPage页面真听到close事件');
        //   let c = setInterval(function () {
        //     if (socket1.readyState == 1) {
        //       socket1.removeEventListener('message', MyExplainTxtSetServiceTxtPage_message);
        //       socket1.addEventListener('message', MyExplainTxtSetServiceTxtPage_message);
        //       clearInterval(c);
        //       console.log('MyExplainTxtSetServiceTxtPage页面重新建立连接完成');
        //       c = null;
        //     }
        //   }, 500)
        // }
        // socket1.addEventListener('close', MyExplainTxtSetServiceTxtPage_close);
        //------------------加载网络监听器结束end
    }
    MyExplainSetServiceInfoPage.prototype.baoc_click = function () {
        //保存按钮
        var _this = this;
        var obj = {
            type: "setObjServiceInTxt",
            userId: this.appmin.getUserid(),
            serviceTxt: this.serviceTxt
        };
        // this.send(JSON.stringify(obj), true);
        // this.appmin.send(JSON.stringify(obj))
        this.appmin.post(obj).subscribe(function (data) {
            _this.dataHandle(data);
        });
    };
    MyExplainSetServiceInfoPage.prototype.userTxt_upkey = function (value) {
        //简介输入框 输入事件
        this.serviceTxt = value;
    };
    MyExplainSetServiceInfoPage.prototype.dataHandle = function (meg) {
        if (meg['type'] == "setObjServiceInTxt_ret") {
            this.navCtrl.pop();
        }
        if (meg['type'] == "addServiceTxt_ret") {
            this.serviceTxt = meg['txt'];
        }
        //
    };
    MyExplainSetServiceInfoPage.prototype.addServiceTxt = function () {
        var obj = {
            type: "addServiceTxt",
            userId: this.appmin.getUserid()
        };
        this.appmin.post((obj));
    };
    MyExplainSetServiceInfoPage.prototype.ngOnInit = function () {
        this.addServiceTxt();
    };
    MyExplainSetServiceInfoPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-explain-set-service-info',
            template: __webpack_require__(/*! ./my-explain-set-service-info.page.html */ "./src/app/my-explain-set-service-info/my-explain-set-service-info.page.html"),
            styles: [__webpack_require__(/*! ./my-explain-set-service-info.page.scss */ "./src/app/my-explain-set-service-info/my-explain-set-service-info.page.scss")]
        }),
        __metadata("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["AppMin"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"]])
    ], MyExplainSetServiceInfoPage);
    return MyExplainSetServiceInfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=my-explain-set-service-info-my-explain-set-service-info-module.js.map