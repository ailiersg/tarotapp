(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-set-service-data-my-set-service-data-module"],{

/***/ "./src/app/my-set-service-data/my-set-service-data.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/my-set-service-data/my-set-service-data.module.ts ***!
  \*******************************************************************/
/*! exports provided: MySetServiceDataPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySetServiceDataPageModule", function() { return MySetServiceDataPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_set_service_data_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-set-service-data.page */ "./src/app/my-set-service-data/my-set-service-data.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _my_set_service_data_page__WEBPACK_IMPORTED_MODULE_5__["MySetServiceDataPage"]
    }
];
var MySetServiceDataPageModule = /** @class */ (function () {
    function MySetServiceDataPageModule() {
    }
    MySetServiceDataPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_my_set_service_data_page__WEBPACK_IMPORTED_MODULE_5__["MySetServiceDataPage"]]
        })
    ], MySetServiceDataPageModule);
    return MySetServiceDataPageModule;
}());



/***/ }),

/***/ "./src/app/my-set-service-data/my-set-service-data.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/my-set-service-data/my-set-service-data.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <div class=\"head_berd {{header_class}}\">\n    <div>\n      <ion-toolbar color=\"primary\" mode=\"ios\">\n        <ion-buttons slot=\"start\">\n          <ion-back-button text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>营业设置</ion-title>\n      </ion-toolbar>\n    </div>\n  </div>\n</ion-header>\n<ion-content style=\"background-color: rgb(245,245,249)\">\n\n\n  <ion-list style=\"margin-top: 1rem;\">\n    <!-- <ion-list-header class=\"ion-list-header_\">\n      开启营业后才会收到咨询订单与提示\n    </ion-list-header> -->\n    <ion-item>\n      <ion-label  color=\"dark\"> 开启营业</ion-label>\n      <ion-toggle color=\"secondary\" [(ngModel)]=\"serviceState\" (ionChange)=\"ischecked()\" checked=\"false\"></ion-toggle>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <!-- <ion-list-header class=\"ion-list-header_\">\n      设置收到新订单后提醒你的方式\n    </ion-list-header> -->\n    <ion-item>\n      <ion-label color=\"dark\"> 新订单短信通知</ion-label>\n      <ion-toggle [(ngModel)]=\"serviceShortMessage\" (ionChange)=\"ischeckedShort()\" checked=\"false\"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label> 新订单系统通知</ion-label>\n      <ion-toggle [(ngModel)]=\"serviceSystemNotification\" (ionChange)=\"ischeckedSystem()\" checked=\"false\"></ion-toggle>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <!-- <ion-list-header class=\"ion-list-header_\">\n      其他设置\n    </ion-list-header> -->\n    <ion-item (click)=\"myserviceset_click()\" detail>\n      <ion-label color=\"dark\"> 设置服务内容</ion-label>\n    </ion-item>\n    <ion-item (click)=\"drawingAccount_click()\" detail>\n      <ion-label color=\"dark\">提款账户</ion-label>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/my-set-service-data/my-set-service-data.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/my-set-service-data/my-set-service-data.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --background:#ffffff;\n  --border-color:#eeeeee; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvbXktc2V0LXNlcnZpY2UtZGF0YS9teS1zZXQtc2VydmljZS1kYXRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFhO0VBQ2Isc0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9teS1zZXQtc2VydmljZS1kYXRhL215LXNldC1zZXJ2aWNlLWRhdGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XG4gICAgLS1ib3JkZXItY29sb3IgOiNlZWVlZWU7XG59Il19 */"

/***/ }),

/***/ "./src/app/my-set-service-data/my-set-service-data.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/my-set-service-data/my-set-service-data.page.ts ***!
  \*****************************************************************/
/*! exports provided: MySetServiceDataPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySetServiceDataPage", function() { return MySetServiceDataPage; });
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




var MySetServiceDataPage = /** @class */ (function () {
    function MySetServiceDataPage(appMin, alertCtrl, ActivatedRoute, Router, navCtrl, loadingCtrl) {
        this.appMin = appMin;
        this.alertCtrl = alertCtrl;
        this.ActivatedRoute = ActivatedRoute;
        this.Router = Router;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        if (this.appMin.GetPhoneMode() == "ios") {
            this.header_class = "header_class";
        }
        else {
            this.header_class = "header_class";
            console.log("判断为安卓系统 设置状态栏样式");
        }
    }
    MySetServiceDataPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MySetServiceDatePage');
    };
    MySetServiceDataPage.prototype.ionViewWillEnter = function () {
        //每次即将加载页面
    };
    MySetServiceDataPage.prototype.ionViewDidEnter = function () {
        //每次已经进入页面
    };
    MySetServiceDataPage.prototype.send = function (value, isshow) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!isshow) return [3 /*break*/, 3];
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: "加载中...",
                                duration: 3000
                            })];
                    case 1:
                        _a.loader = _b.sent();
                        return [4 /*yield*/, this.loader.present()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        this.appMin.post(JSON.parse(value)).subscribe(function (data) {
                            _this.dataHandle(data);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MySetServiceDataPage.prototype.ischecked = function () {
        //切换营业按钮
        var obj = {
            type: "setServiceState",
            serviceState: (this.serviceState == true) ? 1 : 0,
            userId: this.appMin.getUserid()
        };
        this.send(JSON.stringify(obj), false);
        console.log("修改营业状态事件");
    };
    MySetServiceDataPage.prototype.ischeckedShort = function () {
        var obj = {
            type: "setServiceShortMessage",
            serviceShortMessage: (this.serviceShortMessage == true) ? 1 : 0,
            userId: this.appMin.getUserid()
        };
        this.send(JSON.stringify(obj));
    };
    MySetServiceDataPage.prototype.ischeckedSystem = function () {
        var obj = {
            type: "setServiceSystemNotification",
            serviceSystemNotification: (this.serviceSystemNotification == true) ? 1 : 0,
            userId: this.appMin.getUserid()
        };
        this.send(JSON.stringify(obj));
    };
    MySetServiceDataPage.prototype.myserviceset_click = function () {
        //设置服务按钮
        // this.navCtrl.push(MySetServiceSerectPage);
        console.log("myserviceset_click");
        this.Router.navigate(['my-set-service-serect']);
    };
    MySetServiceDataPage.prototype.addMySetServiceDatePage = function () {
        //加载初始数据
        //需要加载是否已经填写服务项目已经完善资料
        var obj = {
            type: "addMySetServiceDatePage",
            userId: this.appMin.getUserid()
        };
        this.send(JSON.stringify(obj), false);
    };
    MySetServiceDataPage.prototype.drawingAccount_click = function () {
        //提款账户按钮
        //  this.navCtrl.push(DrawingAccountPage);
        this.Router.navigate(['drawing-account'], { queryParams: {} });
    };
    MySetServiceDataPage.prototype.presentAlert = function (val) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            // header: '提示',
                            message: val,
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
    MySetServiceDataPage.prototype.dataHandle = function (meg) {
        // console.log(JSON.stringify(meg));
        if (meg['type'] == "addMySetServiceDatePage_ret") {
            _core__WEBPACK_IMPORTED_MODULE_2__["myLocalStorage"].setItem('addMySetServiceDatePage_ret', JSON.stringify(meg), 30);
            this.serviceExistence = (meg["serviceExistence"] == 0) ? false : true;
            this.serviceState = (meg["serviceState"] == 0) ? false : true;
            this.serviceShortMessage = (meg['serviceShortMessage'] == 0) ? false : true;
            this.serviceSystemNotification = (meg['serviceSystemNotification'] == 0) ? false : true;
        }
        else if (meg['type'] == 'setServiceState_ret') {
            if (meg.hasOwnProperty('msg')) {
                if (meg['msg'] == '-1') {
                    //未找到记录
                    this.presentAlert("请先添加占卜服务项目才能开始营业");
                    this.serviceState = false;
                }
            }
        }
    };
    MySetServiceDataPage.prototype.ngOnInit = function () {
        if (_core__WEBPACK_IMPORTED_MODULE_2__["myLocalStorage"].getItem('addMySetServiceDatePage_ret') != null) {
            this.dataHandle(JSON.parse(_core__WEBPACK_IMPORTED_MODULE_2__["myLocalStorage"].getItem('addMySetServiceDatePage_ret')));
        }
        this.addMySetServiceDatePage();
    };
    MySetServiceDataPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-set-service-data',
            template: __webpack_require__(/*! ./my-set-service-data.page.html */ "./src/app/my-set-service-data/my-set-service-data.page.html"),
            styles: [__webpack_require__(/*! ./my-set-service-data.page.scss */ "./src/app/my-set-service-data/my-set-service-data.page.scss")]
        }),
        __metadata("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["AppMin"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]])
    ], MySetServiceDataPage);
    return MySetServiceDataPage;
}());



/***/ })

}]);
//# sourceMappingURL=my-set-service-data-my-set-service-data-module.js.map