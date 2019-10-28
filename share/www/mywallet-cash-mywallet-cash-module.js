(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mywallet-cash-mywallet-cash-module"],{

/***/ "./src/app/mywallet-cash/mywallet-cash.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/mywallet-cash/mywallet-cash.module.ts ***!
  \*******************************************************/
/*! exports provided: MywalletCashPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MywalletCashPageModule", function() { return MywalletCashPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mywallet_cash_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mywallet-cash.page */ "./src/app/mywallet-cash/mywallet-cash.page.ts");
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/fesm5/ng-zorro-antd-mobile.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _mywallet_cash_page__WEBPACK_IMPORTED_MODULE_5__["MywalletCashPage"]
    }
];
var MywalletCashPageModule = /** @class */ (function () {
    function MywalletCashPageModule() {
    }
    MywalletCashPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__["InputItemModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_mywallet_cash_page__WEBPACK_IMPORTED_MODULE_5__["MywalletCashPage"]]
        })
    ], MywalletCashPageModule);
    return MywalletCashPageModule;
}());



/***/ }),

/***/ "./src/app/mywallet-cash/mywallet-cash.page.html":
/*!*******************************************************!*\
  !*** ./src/app/mywallet-cash/mywallet-cash.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <div class=\"{{header_class}}\">\n    <div class=\"head_berd\">\n      <ion-toolbar color=\"primary\" mode=\"ios\">\n        <ion-buttons slot=\"start\">\n          <ion-back-button text=''></ion-back-button>\n        </ion-buttons>\n        <ion-title>提现</ion-title>\n      </ion-toolbar>\n    </div>\n  </div>\n\n\n\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label>提现金额：</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"money\" type=\"number\" [placeholder]=\"'当前最多'+mymoney\"></ion-input>\n\n  </ion-item>\n\n\n  <ion-item>\n    <ion-label>手机号：</ion-label>\n    <ion-input disabled=\"true\" [(ngModel)]=\"phone\" type=\"number\"></ion-input>\n    <ion-button [disabled]=\"isDisabled\" slot=\"end\" (click)=\"send_phone_code()\" >\n      {{smitBtnTxt}}\n    </ion-button>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>验证码：</ion-label>\n    <ion-input [(ngModel)]=\"code\"></ion-input>\n  </ion-item>\n\n\n  <div class=\"myfroms\">\n\n    <ion-button ion-button block (click)=\"subm()\" color=\"secondary\"\n      style=\"color:#fff;box-shadow:0px 0px #fff;margin-bottom:15px;height:46px;font-size:1.15em;border-radius:5px;    width: 100%;\">\n      提现</ion-button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/mywallet-cash/mywallet-cash.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/mywallet-cash/mywallet-cash.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myfroms {\n  margin-top: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvbXl3YWxsZXQtY2FzaC9teXdhbGxldC1jYXNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbXl3YWxsZXQtY2FzaC9teXdhbGxldC1jYXNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teWZyb21ze1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/mywallet-cash/mywallet-cash.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/mywallet-cash/mywallet-cash.page.ts ***!
  \*****************************************************/
/*! exports provided: MywalletCashPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MywalletCashPage", function() { return MywalletCashPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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




var MywalletCashPage = /** @class */ (function () {
    function MywalletCashPage(AppMin, ToastController, ActivatedRoute) {
        this.AppMin = AppMin;
        this.ToastController = ToastController;
        this.ActivatedRoute = ActivatedRoute;
        this.isDisabled = false;
        this.smitBtnTxt = "发送验证码";
        this.phone = this.AppMin.getUserPhoneNumber();
        this.mymoney = this.ActivatedRoute.snapshot.queryParams['mymoney'];
        // console.log('mymoney='+this.mymoney);
    }
    MywalletCashPage.prototype.ngOnInit = function () {
    };
    MywalletCashPage.prototype.send_phone_code = function () {
        return __awaiter(this, void 0, void 0, function () {
            var this1, obj, sendTime, sendInterval;
            var _this = this;
            return __generator(this, function (_a) {
                this1 = this;
                if (this.phone == '') {
                    this.toast('请输入手机号');
                    return [2 /*return*/];
                }
                obj = {
                    type: "sendVerificationCode",
                    phonenumber: this.phone
                };
                sendTime = 59;
                this.isDisabled = true;
                sendInterval = setInterval(function () {
                    sendTime -= 1;
                    _this.smitBtnTxt = "已发送(" + sendTime + ")";
                    if (sendTime == 0) {
                        _this.isDisabled = false;
                        _this.smitBtnTxt = "发送验证码";
                        clearInterval(sendInterval);
                    }
                }, 1000);
                this.AppMin.get(obj).subscribe(function (data) {
                    this1.toast("已发送验证码");
                });
                return [2 /*return*/];
            });
        });
    };
    MywalletCashPage.prototype.toast = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ToastController.create({
                            message: msg,
                            duration: 1500,
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
    MywalletCashPage.prototype.subm = function () {
        if (this.code == '' || this.code == undefined) {
            this.toast('请输入正确的验证码');
            return;
        }
        var money = parseFloat(this.money);
        if (money <= 0 || isNaN(money)) {
            this.toast('请输入正确的提现金额');
            return;
        }
        if (money > this.mymoney) {
            this.toast('余额不足');
            return;
        }
        var this1 = this;
        var obj = {
            type: 'withdrawalsMoney',
            userId: this.AppMin.getUserid(),
            money: this.money,
            code: this.code,
            phone: this.phone
        };
        this.AppMin.post(obj).subscribe(function (data) {
            if (data['code'] == '200') {
                this1.toast("提交成功");
                history.go(-1);
            }
            else {
                this1.toast(data['msg']);
            }
        });
    };
    MywalletCashPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mywallet-cash',
            template: __webpack_require__(/*! ./mywallet-cash.page.html */ "./src/app/mywallet-cash/mywallet-cash.page.html"),
            styles: [__webpack_require__(/*! ./mywallet-cash.page.scss */ "./src/app/mywallet-cash/mywallet-cash.page.scss")]
        }),
        __metadata("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_3__["AppMin"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MywalletCashPage);
    return MywalletCashPage;
}());



/***/ })

}]);
//# sourceMappingURL=mywallet-cash-mywallet-cash-module.js.map