(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mywallet-mywallet-module"],{

/***/ "./src/app/mywallet/mywallet.module.ts":
/*!*********************************************!*\
  !*** ./src/app/mywallet/mywallet.module.ts ***!
  \*********************************************/
/*! exports provided: MywalletPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MywalletPageModule", function() { return MywalletPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mywallet_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mywallet.page */ "./src/app/mywallet/mywallet.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _mywallet_page__WEBPACK_IMPORTED_MODULE_5__["MywalletPage"]
    }
];
var MywalletPageModule = /** @class */ (function () {
    function MywalletPageModule() {
    }
    MywalletPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_mywallet_page__WEBPACK_IMPORTED_MODULE_5__["MywalletPage"]]
        })
    ], MywalletPageModule);
    return MywalletPageModule;
}());



/***/ }),

/***/ "./src/app/mywallet/mywallet.page.html":
/*!*********************************************!*\
  !*** ./src/app/mywallet/mywallet.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <div class=\"{{header_class}}\">\n    <div class=\"head_berd\">\n      <ion-toolbar color=\"primary\" >\n        <ion-buttons slot=\"start\">\n          <ion-back-button text=''></ion-back-button>\n        </ion-buttons>\n        <ion-title>我的钱包</ion-title>\n      </ion-toolbar>\n    </div>\n  </div>\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <ion-row class=\"mone_f\">\n      <ion-col>\n        <span>\n          {{mymoney}}\n        </span>\n        <span>\n          ¥\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ianjtihi\">\n      <ion-col style=\"font-size: 1.4rem;\">当前可提取账户余额 {{mymoney}}元 <span></span></ion-col>\n\n    </ion-row>\n\n  </div>\n  <div style=\"margin: 0px auto; width: 80%\">\n    <ion-button (click)='tixian()' color=\"secondary\" style=\"color:#FFFFFF;width: 100%;\">提现</ion-button>\n    <ion-row>\n      <ion-col col-2></ion-col>\n      <ion-col col-8> </ion-col>\n      <ion-col col-2></ion-col>\n    </ion-row>\n  </div>\n  <style>\n\n\n  </style>\n  <div class=\"tikshuom\">\n    <ion-row>\n      <ion-col>\n        <p>1、到账日期为1-3个工作日，具体视支付平台状况而定。</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col (click)=\"moer()\">\n        <p>2、往期提款记录请<a><span>点此查询</span></a>。</p>\n      </ion-col>\n\n    </ion-row>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/mywallet/mywallet.page.scss":
/*!*********************************************!*\
  !*** ./src/app/mywallet/mywallet.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mone_f span:nth-child(1) {\n  font-family: Georgia, 'Times New Roman', Times, serif;\n  font-size: 5.0rem;\n  color: #363636; }\n\n.mone_f span:nth-child(2) {\n  font-size: 1.8em;\n  color: #363636; }\n\n.mone_f {\n  text-align: center;\n  padding-top: 20%;\n  padding-bottom: 20%; }\n\n.ianjtihi {\n  border-bottom: 1px solid #eee;\n  margin-bottom: 5%; }\n\n.tikshuom p {\n  font-size: 1.3rem;\n  color: #3F3F3F; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvbXl3YWxsZXQvbXl3YWxsZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kscURBQXFEO0VBQ3JELGlCQUFpQjtFQUNqQixjQUNGLEVBQUE7O0FBRUE7RUFFRSxnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLDZCQUE2QjtFQUM3QixpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxpQkFBZ0I7RUFDaEIsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbXl3YWxsZXQvbXl3YWxsZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubW9uZV9mIHNwYW46bnRoLWNoaWxkKDEpIHtcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDUuMHJlbTtcbiAgICBjb2xvcjogIzM2MzYzNlxuICB9XG5cbiAgLm1vbmVfZiBzcGFuOm50aC1jaGlsZCgyKSB7XG5cbiAgICBmb250LXNpemU6IDEuOGVtO1xuICAgIGNvbG9yOiAjMzYzNjM2O1xuICB9XG5cbiAgLm1vbmVfZiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOjIwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjAlO1xuICB9XG4gIC5pYW5qdGloaXtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgfVxuICAudGlrc2h1b20gcHtcbiAgICBmb250LXNpemU6MS4zcmVtO1xuICAgIGNvbG9yOiAjM0YzRjNGO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/mywallet/mywallet.page.ts":
/*!*******************************************!*\
  !*** ./src/app/mywallet/mywallet.page.ts ***!
  \*******************************************/
/*! exports provided: MywalletPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MywalletPage", function() { return MywalletPage; });
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



// import { MyWalletRecordPage } from '../my-wallet-record/my-wallet-record';

var MywalletPage = /** @class */ (function () {
    function MywalletPage(navCtrl, Router, appMin, toastCtrl, alertCtrl, actionSheetCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.Router = Router;
        this.appMin = appMin;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.mymoney = "0";
        this.checkReWalletAcce = false; //是否设置提款账户
        if (this.appMin.GetPhoneMode() == "ios") {
            this.header_class = "header_class";
        }
        else {
            this.header_class = "header_class_md";
            console.log("判断为安卓系统 设置状态栏样式");
        }
    }
    MywalletPage.prototype.send = function (value, isshow) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!isshow) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: "加载中...",
                                duration: 3000
                            })];
                    case 1:
                        _a.loader = _b.sent();
                        this.loader.present();
                        _b.label = 2;
                    case 2:
                        this.appMin.post(JSON.parse(value)).subscribe(function (data) {
                            _this.dataHandle(data);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MywalletPage.prototype.tixian = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.checkReWalletAcce) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertCtrl.create({
                                message: '还没有设置提款账户。',
                                buttons: [
                                    {
                                        text: '取消',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function (blah) {
                                        }
                                    }, {
                                        text: '去设置',
                                        handler: function () {
                                            _this.Router.navigate(['drawing-account'], { queryParams: {} });
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3:
                        this.Router.navigate(["mywallet-cash"], { queryParams: { mymoney: this.mymoney } });
                        return [2 /*return*/];
                }
            });
        });
    };
    MywalletPage.prototype.addMywalletPage = function () {
        //加载用户数据
        var obj = {
            type: "addMywalletPage",
            userId: this.appMin.getUserid()
        };
        this.send(JSON.stringify(obj), false);
    };
    MywalletPage.prototype.dataHandle = function (meg) {
        if (this.loader) {
            this.loader.dismiss();
        }
        console.log(JSON.stringify(meg));
        if (meg['type'] == 'addMywalletPage_ret') {
            this.mymoney = meg["money"];
            if (meg['ali'] != "") {
                this.checkReWalletAcce = true;
            }
        }
        if (meg['type'] == 'withdrawalsMoney_ret') {
            if (meg['meg'] == '1') {
                //已经申请过了
                console.log('已经申请过了');
                this.presentToast("已经申请过了，请查看申请记录");
            }
            else {
                console.log('申请成功');
                this.presentToast("申请成功,将尽快处理");
            }
        }
    };
    MywalletPage.prototype.presentAlert = function (val) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: '提示',
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
    MywalletPage.prototype.presentToast = function (val) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: val,
                            duration: 2000,
                            position: 'top'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MywalletPage.prototype.moer = function () {
        //跳转记录页面
        //  this.navCtrl.push(MyWalletRecordPage); 
        this.Router.navigate(['mywallet-record'], { queryParams: {} });
        // this.Router.navigate(['/my-order-list'], { queryParams: {} })
    };
    MywalletPage.prototype.ngOnInit = function () {
        console.log("ngOnInit");
    };
    MywalletPage.prototype.ionViewWillEnter = function () {
        console.log("ionViewWillEnter");
        this.addMywalletPage();
    };
    MywalletPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mywallet',
            template: __webpack_require__(/*! ./mywallet.page.html */ "./src/app/mywallet/mywallet.page.html"),
            styles: [__webpack_require__(/*! ./mywallet.page.scss */ "./src/app/mywallet/mywallet.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _core__WEBPACK_IMPORTED_MODULE_2__["AppMin"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]])
    ], MywalletPage);
    return MywalletPage;
}());



/***/ })

}]);
//# sourceMappingURL=mywallet-mywallet-module.js.map