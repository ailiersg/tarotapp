(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-explain-txt-setbage-my-explain-txt-setbage-module"],{

/***/ "./src/app/my-explain-txt-setbage/my-explain-txt-setbage.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/my-explain-txt-setbage/my-explain-txt-setbage.module.ts ***!
  \*************************************************************************/
/*! exports provided: MyExplainTxtSetbagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyExplainTxtSetbagePageModule", function() { return MyExplainTxtSetbagePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_explain_txt_setbage_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-explain-txt-setbage.page */ "./src/app/my-explain-txt-setbage/my-explain-txt-setbage.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _my_explain_txt_setbage_page__WEBPACK_IMPORTED_MODULE_5__["MyExplainTxtSetbagePage"]
    }
];
var MyExplainTxtSetbagePageModule = /** @class */ (function () {
    function MyExplainTxtSetbagePageModule() {
    }
    MyExplainTxtSetbagePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_my_explain_txt_setbage_page__WEBPACK_IMPORTED_MODULE_5__["MyExplainTxtSetbagePage"]]
        })
    ], MyExplainTxtSetbagePageModule);
    return MyExplainTxtSetbagePageModule;
}());



/***/ }),

/***/ "./src/app/my-explain-txt-setbage/my-explain-txt-setbage.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/my-explain-txt-setbage/my-explain-txt-setbage.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header no-border>\n    <div class=\"{{header_class}}\">\n      <div class=\"head_berd\">\n          <ion-toolbar color=\"primary\" mode=\"ios\">\n              <ion-buttons slot=\"start\">\n                <ion-back-button text=\"\"></ion-back-button>\n              </ion-buttons>\n          <ion-title>我的印象标签</ion-title>\n          <ion-buttons slot='end'>\n            <ion-button ion-button (click)=\"baoc_click()\">\n              <ion-label>保存</ion-label>\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </div>\n    </div>\n  </ion-header >\n  \n    <ion-content>\n      <div class=\"shuom_f \" style=\"margin-bottom: 40px;\">\n  \n        <p style=\"color:#666666\">印象表情设置，印象表情将显示在你的详情页。根据用户评价显示认可度最高的前4个，此页面只做初始设置和查看用户认可度。</p>\n        <div style=\"    margin-top: 10px;    margin-bottom: 10px;border: 1px solid #eee;\"></div>\n        <div class=\"badgeF\">\n          <p style=\"color:#666666\">已选择({{objImpressionedSum}}/4)</p>\n          <ion-badge item-end color=\"secondary\" (click)=\"selectbadgeEd($event)\" *ngFor=\"let item of objImpressioned\">{{item.txt}}({{item.sum}})</ion-badge>\n          <ion-badge item-end color=\"primary\" (click)=\"addbadgeEd()\">...添加</ion-badge>\n        </div>\n        <div class=\"badgeF2\">\n          <p style=\"color:#666666\">全部</p>\n          <ion-badge item-end color=\"secondary\" *ngFor=\" let item of objImpression\" (click)=\"selectbadge($event)\">{{item}}</ion-badge>\n        </div>\n  \n  \n      </div> \n    </ion-content>"

/***/ }),

/***/ "./src/app/my-explain-txt-setbage/my-explain-txt-setbage.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/my-explain-txt-setbage/my-explain-txt-setbage.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".shuom_f {\n  margin-left: 16px;\n  margin-top: 20px;\n  margin-right: 16px;\n  font-size: 1.45rem; }\n\n.badgeF ion-badge {\n  box-shadow: 1px 1px 1px #eee;\n  color: #ffffff;\n  font-size: 1.4rem;\n  border: 1px solid #ffffff;\n  margin-top: 0.4rem;\n  margin-left: 0.4rem;\n  box-shadow: 1px 2px 1px #eee; }\n\n.badgeF2 ion-badge {\n  background: #ffffff;\n  border: 1px solid #999999;\n  color: #999999;\n  margin-top: 0.4rem;\n  margin-left: 0.4rem;\n  font-size: 1.4rem;\n  box-shadow: 1px 2px 1px #eee; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvbXktZXhwbGFpbi10eHQtc2V0YmFnZS9teS1leHBsYWluLXR4dC1zZXRiYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBRWxCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLDRCQUE0QjtFQUM1QixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHlCQUF3QjtFQUN4QixrQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLDRCQUE0QixFQUFBOztBQUVoQztFQUNJLG1CQUFtQjtFQUNuQix5QkFBd0I7RUFDeEIsY0FBYztFQUNkLGtCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBRWpCLDRCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbXktZXhwbGFpbi10eHQtc2V0YmFnZS9teS1leHBsYWluLXR4dC1zZXRiYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnNodW9tX2Z7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG5cbiAgICBmb250LXNpemU6IDEuNDVyZW07XG59XG4uYmFkZ2VGIGlvbi1iYWRnZXtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjZWVlO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2ZmZmZmZjtcbiAgICBtYXJnaW4tdG9wOjAuNHJlbTsgXG4gICAgbWFyZ2luLWxlZnQ6IDAuNHJlbTtcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDFweCAjZWVlO1xufVxuLmJhZGdlRjIgaW9uLWJhZGdle1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjOTk5OTk5O1xuICAgIGNvbG9yOiAjOTk5OTk5O1xuICAgIG1hcmdpbi10b3A6MC40cmVtOyBcbiAgICBtYXJnaW4tbGVmdDogMC40cmVtO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAxcHggI2VlZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/my-explain-txt-setbage/my-explain-txt-setbage.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/my-explain-txt-setbage/my-explain-txt-setbage.page.ts ***!
  \***********************************************************************/
/*! exports provided: MyExplainTxtSetbagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyExplainTxtSetbagePage", function() { return MyExplainTxtSetbagePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};





var MyExplainTxtSetbagePage = /** @class */ (function () {
    function MyExplainTxtSetbagePage(appmin, navCtrl, alertCtrl, actionSheetCtrl, loadingCtrl, camera) {
        this.appmin = appmin;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        if (appmin.GetPhoneMode() == "ios") {
            this.header_class = "header_class";
        }
        else {
            this.header_class = "header_class";
            console.log("判断为安卓系统 设置状态栏样式");
        }
        //------------加载网络监听器
        // socket1.removeEventListener('message', MyExplainTxtSetbagePage_message);
        // let _this = this;
        // MyExplainTxtSetbagePage_message = function (event) {
        //   let meg = JSON.parse(event.data);
        //   if (meg.type == "error") {
        //     WitePrompt("MyExplainTxtSetbagePage_message页面监听消息===" + JSON.stringify(meg));
        //   } else {
        //     WitePrompt("MyExplainTxtSetbagePage_message页面监听消息===" + JSON.stringify(meg));
        //   }
        //   // if (_this.loader) {
        //   //   _this.loader.dismiss();
        //   //   _this.loader = null;
        //   // }
        //   //安全的删除加载框结束 --
        //   if (meg.type == 'addbage_ret') {
        //     _this.dataHandle(meg);
        //   }
        //   if (meg.type == 'deleteBadge_ret') {
        //     _this.dataHandle(meg);
        //   }
        //   if (meg.type == 'selectbadge_ret') {
        //     _this.dataHandle(meg);
        //   }
        // }
        // socket1.addEventListener('message', MyExplainTxtSetbagePage_message);
        //------------加载网络监听器end
    }
    MyExplainTxtSetbagePage.prototype.baoc_click = function () {
        this.navCtrl.pop();
    };
    MyExplainTxtSetbagePage.prototype.selectbadge = function (event) {
        //alert($(event.target).text;
        //1、删除待选数组
        //2、返回数据后更新已选数组 此方法不做该处理
        var _this = this;
        if (this.objImpressionedSum >= 4) {
            //超过了最大数量 弹出提示
            this.presentAlert("最多添加4个");
            return;
        }
        var selecttxt = jquery__WEBPACK_IMPORTED_MODULE_4__(event.target).text();
        console.log("单击的待选为=" + selecttxt);
        var itemok;
        //查找索引
        for (var i = 0; i < this.objImpression.length; i++) {
            if (this.objImpression[i] == selecttxt) {
                itemok = i;
                break;
            }
        }
        //根据索引删除数组元素
        this.objImpression.splice(itemok, 1);
        //发送修改请求
        var obj = {
            type: 'selectbadge',
            txt: selecttxt,
            userId: this.appmin.getUserid()
        };
        // this.appmin.send(JSON.stringify(obj));
        this.appmin.post(obj).subscribe(function (data) {
            _this.dataHandle(data);
        });
    };
    MyExplainTxtSetbagePage.prototype.selectbadgeEd = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var txt, c, this1, alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        txt = jquery__WEBPACK_IMPORTED_MODULE_4__(event.target).text();
                        c = txt.indexOf('(');
                        txt = txt.substring(0, c);
                        this1 = this;
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: '提示',
                                message: '确定要删除' + txt + "吗？",
                                buttons: [
                                    {
                                        text: '取消',
                                        role: 'cancel',
                                        handler: function () {
                                            console.log('Cancel clicked');
                                        }
                                    },
                                    {
                                        text: '删除',
                                        handler: function () {
                                            console.log('Buy clicked');
                                            var obj = {
                                                type: "deleteBadge",
                                                userId: _this.appmin.getUserid(),
                                                txt: txt
                                            };
                                            //  this1.appmin.send(JSON.stringify(obj));
                                            this1.appmin.get(obj).subscribe(function (data) {
                                                this1.dataHandle(data);
                                            });
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyExplainTxtSetbagePage.prototype.presentAlert = function (val) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: '提示',
                            subHeader: val,
                            buttons: ['确定']
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyExplainTxtSetbagePage.prototype.addbadgeEd = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //添加新标签
                        if (this.objImpressionedSum >= 4) {
                            //超过了最大数量 弹出提示
                            this.presentAlert("最多添加4个");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: '添加新标签',
                                inputs: [
                                    {
                                        name: 'name',
                                        placeholder: '标签名'
                                    }
                                ],
                                buttons: [
                                    {
                                        text: '取消',
                                        role: 'cancel',
                                        handler: function (data) {
                                            console.log('Cancel clicked');
                                        }
                                    },
                                    {
                                        text: '确定',
                                        handler: function (data) {
                                            var txt = data.name;
                                            var obj = {
                                                type: 'selectbadge',
                                                txt: txt,
                                                userId: _this.appmin.getUserid()
                                            };
                                            //  this.appmin.send(JSON.stringify(obj));
                                            _this.appmin.get(obj).subscribe(function (data) {
                                                _this.dataHandle(data);
                                            });
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyExplainTxtSetbagePage.prototype.addbage = function () {
        var _this = this;
        // console.log("addbage()!");
        var obj = {
            type: 'addbage',
            userId: this.appmin.getUserid()
        };
        //  this.appmin.send(JSON.stringify(obj));
        this.appmin.get(obj).subscribe(function (data) {
            _this.dataHandle(data);
        });
    };
    MyExplainTxtSetbagePage.prototype.dataHandle = function (meg) {
        //  console.log("dataHandle()!");
        if (meg['type'] == 'addbage_ret') {
            this.objImpressioned = meg['badgeRows'];
            this.objImpressionedSum = this.objImpressioned.length;
            this.objImpression = meg['badgeRows_'];
            // console.log("objImpressionedSum="+this.objImpressionedSum);
            // console.log("objImpressioned="+JSON.stringify(this.objImpressioned));
            // console.log("objImpressioned_="+(this.objImpressioned));
        }
        if (meg['type'] == "deleteBadge_ret") {
            this.objImpressioned = meg['badgeRows'];
            this.objImpressionedSum = this.objImpressioned.length;
        }
        if (meg['type'] == "selectbadge_ret") {
            // console.log('selectbadge_ret=' + JSON.stringify(meg))
            if (meg['msg'] == 'countmax') {
                this.presentAlert('最多添加4个，请删除一个标签再添加');
                return;
            }
            if (meg['msg'] == 'existence') {
                this.presentAlert('这个标签已经添加过了');
                return;
            }
            this.objImpressioned = meg['rows'];
            this.objImpressionedSum = this.objImpressioned.length;
        }
    };
    MyExplainTxtSetbagePage.prototype.ngOnInit = function () {
        this.addbage();
    };
    MyExplainTxtSetbagePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-explain-txt-setbage',
            template: __webpack_require__(/*! ./my-explain-txt-setbage.page.html */ "./src/app/my-explain-txt-setbage/my-explain-txt-setbage.page.html"),
            styles: [__webpack_require__(/*! ./my-explain-txt-setbage.page.scss */ "./src/app/my-explain-txt-setbage/my-explain-txt-setbage.page.scss")]
        }),
        __metadata("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["AppMin"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"]])
    ], MyExplainTxtSetbagePage);
    return MyExplainTxtSetbagePage;
}());



/***/ })

}]);
//# sourceMappingURL=my-explain-txt-setbage-my-explain-txt-setbage-module.js.map