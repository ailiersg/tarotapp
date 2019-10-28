(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-explain-txt-set-experience-my-explain-txt-set-experience-module"],{

/***/ "./src/app/my-explain-txt-set-experience/my-explain-txt-set-experience.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/my-explain-txt-set-experience/my-explain-txt-set-experience.module.ts ***!
  \***************************************************************************************/
/*! exports provided: MyExplainTxtSetExperiencePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyExplainTxtSetExperiencePageModule", function() { return MyExplainTxtSetExperiencePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_explain_txt_set_experience_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-explain-txt-set-experience.page */ "./src/app/my-explain-txt-set-experience/my-explain-txt-set-experience.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _my_explain_txt_set_experience_page__WEBPACK_IMPORTED_MODULE_5__["MyExplainTxtSetExperiencePage"]
    }
];
var MyExplainTxtSetExperiencePageModule = /** @class */ (function () {
    function MyExplainTxtSetExperiencePageModule() {
    }
    MyExplainTxtSetExperiencePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_my_explain_txt_set_experience_page__WEBPACK_IMPORTED_MODULE_5__["MyExplainTxtSetExperiencePage"]]
        })
    ], MyExplainTxtSetExperiencePageModule);
    return MyExplainTxtSetExperiencePageModule;
}());



/***/ }),

/***/ "./src/app/my-explain-txt-set-experience/my-explain-txt-set-experience.page.html":
/*!***************************************************************************************!*\
  !*** ./src/app/my-explain-txt-set-experience/my-explain-txt-set-experience.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <div class=\"{{header_class}}\">\n    <div class=\"head_berd\">\n      <ion-toolbar color=\"primary\" mode=\"ios\">\n        <ion-buttons slot=\"start\">\n          <ion-back-button text=\"\"></ion-back-button>\n        </ion-buttons>\n          <ion-title>修改占卜经历说明</ion-title>\n          <ion-buttons slot='end'>\n            <ion-button ion-button (click)=\"baoc_click()\">\n              <ion-label>保存</ion-label>\n            </ion-button>\n          </ion-buttons>\n      </ion-toolbar>\n    </div>\n  </div>\n\n</ion-header>\n\n<ion-content style=\"background:rgb(245, 245, 249) none repeat scroll 0% 0%;\">\n  <div class=\"textarea_f\">\n\n    <textarea #jianjieinfoin (keyup)='userTxt_upkey(jianjieinfoin.value)' placeholder=\"向用户展示的咨询说明\"\n      class=\"jianjie_textarea\" style=\"width:100%\" style=\"background: #ffffff; border:0px;\"\n      rows=\"5\">{{serviceTxt}}</textarea>\n\n  </div>\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/my-explain-txt-set-experience/my-explain-txt-set-experience.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/my-explain-txt-set-experience/my-explain-txt-set-experience.page.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textarea_f {\n  padding: 10px;\n  margin-top: 20px;\n  background: #FFFFFF; }\n\n.jianjie_textarea {\n  width: 100%;\n  font-size: 1.45rem;\n  color: #333333; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvbXktZXhwbGFpbi10eHQtc2V0LWV4cGVyaWVuY2UvbXktZXhwbGFpbi10eHQtc2V0LWV4cGVyaWVuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUFFLGdCQUFnQjtFQUFDLG1CQUFtQixFQUFBOztBQUV2RDtFQUNBLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbXktZXhwbGFpbi10eHQtc2V0LWV4cGVyaWVuY2UvbXktZXhwbGFpbi10eHQtc2V0LWV4cGVyaWVuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRhcmVhX2Z7XG4gICAgcGFkZGluZzogMTBweDsgbWFyZ2luLXRvcDogMjBweDtiYWNrZ3JvdW5kOiAjRkZGRkZGO1xufVxuLmppYW5qaWVfdGV4dGFyZWF7XG53aWR0aDogMTAwJTtcbmZvbnQtc2l6ZTogMS40NXJlbTtcbmNvbG9yOiMzMzMzMzM7XG59Il19 */"

/***/ }),

/***/ "./src/app/my-explain-txt-set-experience/my-explain-txt-set-experience.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/my-explain-txt-set-experience/my-explain-txt-set-experience.page.ts ***!
  \*************************************************************************************/
/*! exports provided: MyExplainTxtSetExperiencePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyExplainTxtSetExperiencePage", function() { return MyExplainTxtSetExperiencePage; });
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



var MyExplainTxtSetExperiencePage = /** @class */ (function () {
    function MyExplainTxtSetExperiencePage(appmin, navCtrl, alertCtrl, actionSheetCtrl, loadingCtrl) {
        this.appmin = appmin;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
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
        // socket1.removeEventListener('message', MyExplainTxtSetExperiencePage_message);
        // let _this = this;
        // MyExplainTxtSetExperiencePage_message = function (event) {
        //   let meg = JSON.parse(event.data);
        //   if (meg.type == "error") {
        //     WitePrompt("MyExplainTxtSetExperiencePage页面监听消息===" + JSON.stringify(meg));
        //   } else {
        //     WitePrompt("MyExplainTxtSetExperiencePage页面监听消息===" + meg.type);
        //   }
        //   // if (_this.loader) {
        //   //   _this.loader.dismiss();
        //   //   _this.loader = null;
        //   // }
        //   //安全的删除加载框结束 --
        //   //
        //   if (meg.type == 'addExperience_ret') {
        //     _this.dataHandle(meg);
        //   }
        //   if (meg.type == 'setExperience_ret') {
        //     _this.dataHandle(meg);
        //   }
        // }
        // socket1.addEventListener('message', MyExplainTxtSetExperiencePage_message);
        //------------------加载网络监听器结束end
    }
    MyExplainTxtSetExperiencePage.prototype.userTxt_upkey = function (value) {
        //简介输入框 输入事件
        this.serviceTxt = value;
    };
    MyExplainTxtSetExperiencePage.prototype.baoc_click = function () {
        //保存按钮
        var _this = this;
        var obj = {
            type: "setExperience",
            userId: this.appmin.getUserid(),
            serviceTxt: this.serviceTxt
        };
        // this.send(JSON.stringify(obj), true);
        //this.appmin.send(JSON.stringify(obj))
        this.appmin.post(obj).subscribe(function (data) {
            _this.dataHandle(data);
        });
    };
    MyExplainTxtSetExperiencePage.prototype.dataHandle = function (meg) {
        if (meg['type'] == "setExperience_ret") {
            this.navCtrl.pop();
        }
        if (meg['type'] == "addExperience_ret") {
            this.serviceTxt = meg['txt'];
        }
        //
    };
    MyExplainTxtSetExperiencePage.prototype.addExperience = function () {
        var _this = this;
        var obj = {
            type: "addExperience",
            userId: this.appmin.getUserid()
        };
        //  this.appmin.send(JSON.stringify(obj));
        this.appmin.get(obj).subscribe(function (data) {
            _this.dataHandle(data);
        });
    };
    MyExplainTxtSetExperiencePage.prototype.ngOnInit = function () {
        this.addExperience();
    };
    MyExplainTxtSetExperiencePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-explain-txt-set-experience',
            template: __webpack_require__(/*! ./my-explain-txt-set-experience.page.html */ "./src/app/my-explain-txt-set-experience/my-explain-txt-set-experience.page.html"),
            styles: [__webpack_require__(/*! ./my-explain-txt-set-experience.page.scss */ "./src/app/my-explain-txt-set-experience/my-explain-txt-set-experience.page.scss")]
        }),
        __metadata("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["AppMin"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]])
    ], MyExplainTxtSetExperiencePage);
    return MyExplainTxtSetExperiencePage;
}());



/***/ })

}]);
//# sourceMappingURL=my-explain-txt-set-experience-my-explain-txt-set-experience-module.js.map