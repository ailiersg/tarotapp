(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-service-info-my-service-info-module"],{

/***/ "./src/app/my-service-info/my-service-info.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/my-service-info/my-service-info.module.ts ***!
  \***********************************************************/
/*! exports provided: MyServiceInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyServiceInfoPageModule", function() { return MyServiceInfoPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_service_info_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-service-info.page */ "./src/app/my-service-info/my-service-info.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _my_service_info_page__WEBPACK_IMPORTED_MODULE_5__["MyServiceInfoPage"]
    }
];
var MyServiceInfoPageModule = /** @class */ (function () {
    function MyServiceInfoPageModule() {
    }
    MyServiceInfoPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_my_service_info_page__WEBPACK_IMPORTED_MODULE_5__["MyServiceInfoPage"]]
        })
    ], MyServiceInfoPageModule);
    return MyServiceInfoPageModule;
}());



/***/ }),

/***/ "./src/app/my-service-info/my-service-info.page.html":
/*!***********************************************************!*\
  !*** ./src/app/my-service-info/my-service-info.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <div class=\"head_berd {{header_class}}\">\n    <div>\n      <ion-toolbar color=\"primary\" mode=\"ios\">\n        <ion-buttons slot=\"start\">\n          <ion-back-button text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>修改服务</ion-title>\n        <ion-buttons slot='end'>\n          <ion-button (click)=\"baoc_click()\">\n            <ion-label>保存</ion-label>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </div>\n  </div>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list>\n    <ion-item>\n      <ion-label> 是否启用</ion-label>\n      <ion-toggle [(ngModel)]=\"mushrooms\" (ionChange)=\"ischecked()\" checked=\"false\"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label color=\"button2\" stacked>服务名称</ion-label>\n      <ion-input [(ngModel)]=\"serviceName\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>服务价格</ion-label>\n      <ion-input placeholder=\"0-999.99￥\" [(ngModel)]=\"serviceMoney\" type=\"text\" aria-placeholder=\"0-9999\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">服务内容说明</ion-label>\n      <ion-textarea [(ngModel)]=\"serviceText\"></ion-textarea>\n    </ion-item>\n\n\n    <ion-item style=\"display:none\">\n      <ion-label>服务名称</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/my-service-info/my-service-info.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/my-service-info/my-service-info.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --background:#ffffff;\n  --border-color:#eeeeee; }\n\nion-content {\n  --padding-top:16px; }\n\nion-input {\n  --color:#666666; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvbXktc2VydmljZS1pbmZvL215LXNlcnZpY2UtaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBYTtFQUNiLHNCQUFnQixFQUFBOztBQUVwQjtFQUNJLGtCQUFjLEVBQUE7O0FBR2xCO0VBQ0ksZUFBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbXktc2VydmljZS1pbmZvL215LXNlcnZpY2UtaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgICAtLWJvcmRlci1jb2xvciA6I2VlZWVlZTtcbn1cbmlvbi1jb250ZW50e1xuICAgIC0tcGFkZGluZy10b3A6MTZweDtcbn1cblxuaW9uLWlucHV0e1xuICAgIC0tY29sb3I6IzY2NjY2Njtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/my-service-info/my-service-info.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/my-service-info/my-service-info.page.ts ***!
  \*********************************************************/
/*! exports provided: MyServiceInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyServiceInfoPage", function() { return MyServiceInfoPage; });
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




var MyServiceInfoPage = /** @class */ (function () {
    function MyServiceInfoPage(navCtrl, ActivatedRoute, toastCtrl, loadingCtrl, appMin) {
        this.navCtrl = navCtrl;
        this.ActivatedRoute = ActivatedRoute;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.appMin = appMin;
        this.serviceText = " ";
        this.serviceMoney = 0;
        if (appMin.GetPhoneMode() == "ios") {
            this.header_class = "header_class";
        }
        else {
            this.header_class = "header_class_md";
            console.log("判断为安卓系统 设置状态栏样式");
        }
        // this.serviceId = this.navParams.get("serviceId");
        this.serviceId = this.ActivatedRoute.snapshot.queryParams['serviceId'];
        console.log("serviceId=" + this.ActivatedRoute.snapshot.queryParams['serviceId']);
        // socket1.removeEventListener('message', MyServiceSetPage_message);
        // let _this = this;
        // MyServiceSetPage_message = function (event) {
        //   let meg = JSON.parse(event.data);
        //   if (meg.type == "error") {
        //     WitePrompt("MyServiceSetPage页面监听消息===" + JSON.stringify(meg));
        //   } else {
        //     WitePrompt("MyServiceSetPage页面监听消息===" + meg.type);
        //   }
        //   if (_this.loader) {
        //     _this.loader.dismiss();
        //     _this.loader = null;
        //   }
        //   //安全的删除加载框结束 --
        //   if (meg.type == 'addMyServiceSetPage_ret') {
        //     _this.dataHandle(meg);
        //   }
        // }
        // socket1.removeEventListener('close', MyServiceSetPage_close);
        // MyServiceSetPage_close = function () {
        //   WitePrompt('MyServiceSetPage页面真听到close事件');
        //   let c = setInterval(function () {
        //     if (socket1.readyState == 1) {
        //       socket1.removeEventListener('message', MyServiceSetPage_message);
        //       socket1.addEventListener('message', MyServiceSetPage_message);
        //       clearInterval(c);
        //       WitePrompt('MyServiceSetPage页面重新建立连接完成');
        //       c = null;
        //     }
        //   }, 500)
        // }
        // socket1.addEventListener('close', MyServiceSetPage_close);
        // socket1.addEventListener('message', MyServiceSetPage_message);
        this.addMyServiceSetPage(this.serviceId);
    }
    MyServiceInfoPage.prototype.ionViewWillLeave = function () {
        //即将离开页面
    };
    MyServiceInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyServiceSetPage');
    };
    MyServiceInfoPage.prototype.send = function (value, isshow) {
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
    MyServiceInfoPage.prototype.ischecked = function () {
        //是否启用
        if (this.mushrooms) {
            Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])("ok");
        }
        else {
            Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])("no");
        }
    };
    MyServiceInfoPage.prototype.addMyServiceSetPage = function (serviceId) {
        //加载服务内容
        Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])("serviceId is " + serviceId);
        var obj = {
            type: "addMyServiceSetPage",
            userId: this.appMin.getUserid(),
            serviceId: serviceId
        };
        this.send(JSON.stringify(obj), false);
    };
    MyServiceInfoPage.prototype.upServiceDate = function () {
        //上传服务数据
        if (this.serviceMoney != undefined && this.serviceMoney != null) {
            Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])("parseFloat=" + parseFloat(this.serviceMoney));
            if (this.appMin.isMoney(this.serviceMoney)) {
                //输入的是数字
                if (this.serviceMoney <= 0) {
                    this.presentToast("不能是0");
                    return;
                }
                else {
                }
            }
            else {
                //输入的不是数字
                this.presentToast("请输入正确的单价");
                return;
            }
        }
        else {
            //没有填写money
            this.presentToast("请输入单价");
            return;
        }
        var obj = {
            type: 'upServiceDate',
            userId: this.appMin.getUserid(),
            serviceName: this.serviceName,
            serviceText: this.serviceText,
            serviceMoney: this.serviceMoney,
            serviceId: this.serviceId,
            state: (this.mushrooms == true) ? 1 : 0
        };
        this.send(JSON.stringify(obj), true);
        this.navCtrl.pop();
    };
    MyServiceInfoPage.prototype.baoc_click = function () {
        //保存按钮
        this.upServiceDate();
    };
    MyServiceInfoPage.prototype.dataHandle = function (meg) {
        if (meg['type'] == "addMyServiceSetPage_ret") {
            var state = meg["state"];
            if (state == "1") {
                //启用
                this.mushrooms = true;
            }
            else {
                this.mushrooms = false;
            }
            this.serviceName = meg['serviceName'];
            this.serviceMoney = meg['serviceMoney'];
            this.serviceText = meg['serviceText'];
        }
    };
    MyServiceInfoPage.prototype.presentToast = function (txt) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: txt,
                            duration: 3000,
                            position: 'top',
                            cssClass: "md-toast",
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyServiceInfoPage.prototype.ngOnInit = function () {
    };
    MyServiceInfoPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-service-info',
            template: __webpack_require__(/*! ./my-service-info.page.html */ "./src/app/my-service-info/my-service-info.page.html"),
            styles: [__webpack_require__(/*! ./my-service-info.page.scss */ "./src/app/my-service-info/my-service-info.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _core__WEBPACK_IMPORTED_MODULE_2__["AppMin"]])
    ], MyServiceInfoPage);
    return MyServiceInfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=my-service-info-my-service-info-module.js.map