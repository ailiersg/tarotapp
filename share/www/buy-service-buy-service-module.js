(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buy-service-buy-service-module"],{

/***/ "./src/app/buy-service/buy-service.module.ts":
/*!***************************************************!*\
  !*** ./src/app/buy-service/buy-service.module.ts ***!
  \***************************************************/
/*! exports provided: BuyServicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyServicePageModule", function() { return BuyServicePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _buy_service_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buy-service.page */ "./src/app/buy-service/buy-service.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _buy_service_page__WEBPACK_IMPORTED_MODULE_5__["BuyServicePage"]
    }
];
var BuyServicePageModule = /** @class */ (function () {
    function BuyServicePageModule() {
    }
    BuyServicePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_buy_service_page__WEBPACK_IMPORTED_MODULE_5__["BuyServicePage"]]
        })
    ], BuyServicePageModule);
    return BuyServicePageModule;
}());



/***/ }),

/***/ "./src/app/buy-service/buy-service.page.html":
/*!***************************************************!*\
  !*** ./src/app/buy-service/buy-service.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n\n  <div class=\"{{header_class}}\">\n    <div class=\"head_berd\">\n      <ion-toolbar color=\"primary\" mode=\"ios\">\n        <ion-buttons slot=\"start\">\n          <ion-back-button text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>占卜订单</ion-title>\n      </ion-toolbar>\n    </div>\n  </div>\n\n\n</ion-header>\n\n\n<ion-content style=\"background-color: #f5f5f9;\" overflow-scroll=\"true\">\n\n  <ion-refresher (ionRefresh)=\"doRefresh($event)\" closeDuration='0' snapbackDuration='400'>\n    <ion-refresher-content pullingIcon=\"null\" pullingText=\"\" refreshingSpinner=\"\" refreshingText=\"\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n\n\n  <div padding style=\"margin-bottom: 40px;   margin-top: 10px;\">\n\n    <div style=\"border-radius: 8px;padding:6px;background-color:#fff;margin-bottom:10px;\">\n      <ion-list class=\"list_f\">\n        <ion-list-header>\n          订单详情\n        </ion-list-header>\n        <ion-item >\n          <ion-label>\n            咨询师名：\n          </ion-label>\n          <ion-label style=\"text-align: right;\">\n            {{CName}}\n          </ion-label>\n\n\n        </ion-item>\n        <ion-item>\n          <ion-label (click)='selectCoupon(1)'>\n            服务名称：\n          </ion-label>\n          <ion-label class='btn_sp' style=\"text-align: right;\">\n            {{serviceName}}\n          </ion-label>\n        </ion-item>\n        <!-- <ion-item>\n                    咨询时间\n                    <button ion-button outline item-end>立即</button>\n                    <button ion-button outline item-end>预约</button>\n                  </ion-item> -->\n        <!-- <ion-button (click)=\"showRadio()\">\n          优惠券：\n          <span>{{select_couponName}}</span>\n        </ion-button> -->\n        <ion-item lines=\"inset\">\n          <ion-label>\n            优惠券\n          </ion-label>\n          <!-- <ion-label slot='end' style=\"text-align: right;\">\n            {{select_couponName}}\n          </ion-label> -->\n          <ion-select class=\"couponName_\" [(ngModel)]=\"gaming\" (ionChange)=\"selectCoupon()\" slot='end' okText=\"确定\" cancelText=\"取消\">\n            <ion-select-option *ngFor='let i of alertButton' value=\"{{i.value}}\">{{i.label}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>\n            单价：\n          </ion-label>\n          <ion-label style=\"text-align: right;\">\n            {{start_money}}￥\n          </ion-label>\n        </ion-item>\n\n\n      </ion-list>\n    </div>\n    <div style=\"border-radius: 8px;padding:6px;background-color:#fff; margin-bottom: 40px;\">\n      <ion-list class=\"list_f\">\n\n        <ion-list-header>\n          个人资料\n        </ion-list-header>\n        <ion-item  lines=\"inset\">\n          <ion-label>姓名：</ion-label>\n          <ion-input [(ngModel)]=\"userName\" type=\"text\" value=\"\" style=\"text-align: right;\"></ion-input>\n        </ion-item>\n        <ion-item (click)=\"shezsex()\" detail lines=\"inset\">\n          <ion-label>\n            性别：\n          </ion-label>\n          <ion-label slot='end' style=\"text-align: right;\" >\n            <ion-text>\n              {{sexShow}}\n            </ion-text>\n          </ion-label>\n\n        </ion-item>\n\n        <ion-item  lines=\"inset\" >\n          <ion-label>年龄：</ion-label>\n\n          <ion-input [(ngModel)]=\"userAge\" type=\"number\" value=\"\" style=\"text-align: right;\"></ion-input>\n        </ion-item>\n\n        <ion-item lines=\"none\" >\n          <ion-label>留言：</ion-label>\n          <ion-input [(ngModel)]=\"orderText\" type=\"text\" value=\"\" style=\"text-align: right;\"></ion-input>\n        </ion-item>\n\n      </ion-list>\n    </div>\n  </div>\n\n\n</ion-content>\n<div style=\"bottom:0px;position:fixed;width:100%;height:50px;z-index:100\">\n  <ion-row style=\"padding:0px;height:100%;\">\n    <ion-col style=\"padding:0px;height:100%\" size='8'>\n      <ion-button expand=\"full\" class=\"mybtn six_btn\" style=\"margin:0px;height:100%\">合计费用：\n        <span class='btn_sp'>{{money}}￥</span>\n      </ion-button>\n\n    </ion-col>\n    <ion-col style=\"padding:0px;height:100%\" size='4'>\n\n      <ion-button expand=\"full\" color=\"primary\" class=\"mybtn\" (click)=\"paySelect()\" style=\"margin:0px;height:100%;color:#fff\">去付款\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</div>\n<div class='alertCeng'>\n  <div>\n    <h3>选择付款方式</h3>\n    <span class=\"ionicons icon-weixin\"></span>\n    <div>\n      <ion-list>\n\n        <ion-button>\n          <ion-icon class=\"ionicons icon-umidd17\" name='icon-umidd17'></ion-icon>\n          支付宝付款\n        </ion-button>\n        <ion-button>\n          <ion-icon class=\"ionicons icon-weixin\" name='icon-weixin'></ion-icon>\n          微信支付\n        </ion-button>\n      </ion-list>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/buy-service/buy-service.page.scss":
/*!***************************************************!*\
  !*** ./src/app/buy-service/buy-service.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".six_btn {\n  --color:#666666;\n  --background:#ffffff; }\n\n.mybtn {\n  font-size: 1.45rem; }\n\nion-item {\n  --ion-text-color:#333333; }\n\n.list-md {\n  background: #ffffff; }\n\nion-item {\n  --background:#ffffff; }\n\nion-input {\n  --color:#666666 \n; }\n\nion-button {\n  --color:#333333 \n; }\n\n.list-ios {\n  background: #ffffff !important; }\n\n.couponName_ {\n  color: #666666; }\n\n.list_f ion-list-header {\n  border-top: 0px;\n  margin-bottom: 0px; }\n\n.list_f input {\n  color: #666666; }\n\n.list_f ion-label {\n  color: #666666; }\n\n.item_sex p {\n  color: #666666; }\n\n.tj_f {\n  margin-bottom: 20px; }\n\n.scroll-content {\n  border-top: 1px solid #f5f5f9 !important; }\n\n.alertCeng {\n  display: none;\n  width: 70%;\n  height: 350px;\n  z-index: 9999;\n  top: 20%;\n  background: #fff;\n  left: 15%;\n  border: 1px solid #000;\n  position: fixed;\n  border-radius: 5px;\n  padding: 15px; }\n\n.iconfont ion-icon {\n  font-family: \"Ionicons\" !important;\n  font-size: 16px;\n  font-style: normal;\n  color: #666666;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvYnV5LXNlcnZpY2UvYnV5LXNlcnZpY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBUTtFQUNSLG9CQUFhLEVBQUE7O0FBRWpCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0Usd0JBQWlCLEVBQUE7O0FBRW5CO0VBQ0ksbUJBQW1CLEVBQUE7O0FBRXpCO0VBQ0ksb0JBQWEsRUFBQTs7QUFHakI7RUFDSTtBQUFRLEVBQUE7O0FBRVo7RUFDSTtBQUFRLEVBQUE7O0FBR1Y7RUFDSSw4QkFBOEIsRUFBQTs7QUFFcEM7RUFDSSxjQUNKLEVBQUE7O0FBQ0E7RUFDSSxlQUFlO0VBQ2Ysa0JBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksY0FDSixFQUFBOztBQUNBO0VBQ0ksY0FDSixFQUFBOztBQUNBO0VBQVksY0FBYSxFQUFBOztBQUN6QjtFQUNJLG1CQUFtQixFQUFBOztBQUt2QjtFQUNJLHdDQUFrRCxFQUFBOztBQUl0RDtFQUNHLGFBQWE7RUFDWixVQUFVO0VBQ1YsYUFBYTtFQUNiLGFBQWE7RUFDYixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYTtFQUNiLG1DQUFtQztFQUNuQyxrQ0FBa0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2J1eS1zZXJ2aWNlL2J1eS1zZXJ2aWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaXhfYnRue1xuICAgIC0tY29sb3I6IzY2NjY2NjtcbiAgICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgfVxuLm15YnRue1xuICAgIGZvbnQtc2l6ZTogMS40NXJlbTtcbn1cbiAgaW9uLWl0ZW17XG4gICAgLS1pb24tdGV4dC1jb2xvcjojMzMzMzMzO1xuICB9XG4gIC5saXN0LW1ke1xuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgfVxuaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XG4gICAgLy8gLS1wYWRkaW5nLWVuZDoxNnB4O1xufVxuaW9uLWlucHV0e1xuICAgIC0tY29sb3I6IzY2NjY2NiBcbn1cbmlvbi1idXR0b257XG4gICAgLS1jb2xvcjojMzMzMzMzIFxufVxuXG4gIC5saXN0LWlvc3tcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgfVxuLmNvdXBvbk5hbWVfe1xuICAgIGNvbG9yOiM2NjY2NjZcbn1cbi5saXN0X2YgaW9uLWxpc3QtaGVhZGVye1xuICAgIGJvcmRlci10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOjBweDtcbn1cbi5saXN0X2YgIGlucHV0e1xuICAgIGNvbG9yOiM2NjY2NjZcbn1cbi5saXN0X2YgaW9uLWxhYmVse1xuICAgIGNvbG9yOiM2NjY2NjZcbn1cbi5pdGVtX3NleCBwe2NvbG9yOiM2NjY2NjZ9XG4udGpfZntcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmJ0bl9zcHtcbiAgLy8gIGNvbG9yOiRjb2xvcl9idXR0b24xO1xufVxuLnNjcm9sbC1jb250ZW50e1xuICAgIGJvcmRlci10b3A6MXB4IHNvbGlkIHJnYigyNDUsIDI0NSwgMjQ5KSAhaW1wb3J0YW50O1xufVxuXG5cbi5hbGVydENlbmd7XG4gICBkaXNwbGF5OiBub25lO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIHRvcDogMjAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbGVmdDogMTUlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuXG59XG4uaWNvbmZvbnQgaW9uLWljb257XG4gICAgZm9udC1mYW1pbHk6IFwiSW9uaWNvbnNcIiAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgY29sb3I6IzY2NjY2NjtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/buy-service/buy-service.page.ts":
/*!*************************************************!*\
  !*** ./src/app/buy-service/buy-service.page.ts ***!
  \*************************************************/
/*! exports provided: BuyServicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyServicePage", function() { return BuyServicePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");
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





var BuyServicePage = /** @class */ (function () {
    function BuyServicePage(navCtrl, ToastController, PickerController, DataserviceService, router, ActivatedRoute, modalCtrl, loadingCtrl, actionSheetCtrl, alertCtrl, appMin) {
        this.navCtrl = navCtrl;
        this.ToastController = ToastController;
        this.PickerController = PickerController;
        this.DataserviceService = DataserviceService;
        this.router = router;
        this.ActivatedRoute = ActivatedRoute;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.appMin = appMin;
        this.sex = "";
        this.sexShow = "";
        this.money = 0;
        this.start_money = 0;
        this.payType = ""; //支付方式 alipay or wechar
        this.alertButton = [];
        //----------选择属性
        this.select_couponId = 0;
        this.select_couponName = "不使用";
        //--------------输入属性
        this.userName = "";
        this.userAge = "";
        this.orderText = "";
        Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])("收到的touserid" + this.ActivatedRoute.snapshot.queryParams['touserid']);
        if (appMin.GetPhoneMode() == "ios") {
            this.header_class = "header_class";
        }
        else {
            this.header_class = "header_class";
            console.log("判断为安卓系统 设置状态栏样式");
        }
        //this.touserid = this.navParams.get("touserid");//获取塔罗师id
        this.touserid = this.ActivatedRoute.snapshot.queryParams['touserid']; ////获取塔罗师id
        //  this.user_select_service_id = this.navParams.get("serviceid");//获取用户选择的服务id
        this.user_select_service_id = this.ActivatedRoute.snapshot.queryParams['serviceid']; //获取用户选择的服务id
    }
    BuyServicePage.prototype.ionViewWillEnter = function () {
        //每次即将进入页面
        this.addBuyData();
    };
    BuyServicePage.prototype.send = function (value, isshow) {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!isshow) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: '加载中...',
                                duration: 3000
                            })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        this.appMin.post(JSON.parse(value)).subscribe(function (data) {
                            _this.HandleData(data);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    BuyServicePage.prototype.baocl_go = function () {
        this.navCtrl.pop();
    };
    BuyServicePage.prototype.generateOrder = function () {
        //请求订单数据 
        //alert("generateOrder()发送生成订单");
        if (this.userName.trim() == "") {
            //必须填写姓名
            this.toast("必须填写姓名");
            return;
        }
        if (this.sex.trim() == "") {
            this.toast("请填写性别");
            return;
        }
        if (this.userAge == "" && !isNaN(parseInt(this.userAge))) {
            this.toast("请填写正确的年龄");
            return;
        }
        console.log("generateOrder2!");
        var obj = {
            type: 'generateOrder',
            serviceId: this.user_select_service_id,
            localUserId: this.appMin.getUserid(),
            toUserId: this.touserid,
            ouponId: this.select_couponId,
            userName: this.userName,
            userAge: this.userAge,
            userSex: this.sexShow,
            orderText: this.orderText,
            payType: this.payType,
        };
        this.send(JSON.stringify(obj), true);
    };
    BuyServicePage.prototype.shezsex = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //设置性别按钮
                        Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])("设置性别按钮被单击");
                        return [4 /*yield*/, this.actionSheetCtrl.create({
                                // header: '',
                                buttons: [
                                    {
                                        text: '男',
                                        // role: 'destructive',
                                        handler: function () {
                                            Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])('男_click');
                                            _this.sex = "0";
                                            _this.sexShow = "男";
                                        }
                                    }, {
                                        text: '女',
                                        handler: function () {
                                            Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])('女_click');
                                            _this.sex = "1";
                                            _this.sexShow = "女";
                                        }
                                    }, {
                                        text: '取消',
                                        role: 'cancel',
                                        handler: function () {
                                            Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])('取消_click');
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BuyServicePage.prototype.buyService = function (select) {
        //提交订单按钮
        //this.generateOrder();
        //支付方式 alipay or wechar
        if (select == 'alipay') {
            //支付宝方式付款
            this.payType = "alipay";
            this.generateOrder();
        }
        else {
            //微信方式付款
            this.payType = "wechar";
            this.generateOrder();
        }
    };
    BuyServicePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        // setTimeout(() => {
        //     console.log('Async operation has ended');
        //     refresher.complete();
        // }, 1000);
        refresher.complete();
    };
    BuyServicePage.prototype.addBuyData = function () {
        //加载初始数据
        var obj = {
            type: 'addBuyData',
            serviceId: this.user_select_service_id,
            userId: this.appMin.getUserid()
        };
        this.send(JSON.stringify(obj), false);
    };
    BuyServicePage.prototype.HandleData = function (meg) {
        //处理返回的数据
        console.log('neg=' + JSON.stringify(meg));
        if (meg['type'] == "addBuyData_ret") {
            //更新数据完成 准备跳转
            this.CName = meg['CName'];
            this.serviceName = meg['serviceName'];
            this.money = meg['money'];
            this.start_money = meg['money'];
            // WitePrompt("this.money=" + this.money);
            this.objlist = meg['rows'];
            //this.alertButton;
            var shuzu = [];
            var count = meg['rows'].length;
            shuzu.push({
                label: '不使用',
                value: '0',
                item: {}
            });
            for (var i = 0; i < count; i++) {
                var objdata = {
                    type: 'radio',
                    label: meg['rows'][i]['couponName'] + " " + meg['rows'][i]['couponMoney'] + "￥",
                    value: meg['rows'][i].couponId,
                    item: meg['rows'][i]
                    // checked: false,
                    // handler: data => { this.selectCoupon(data) }
                };
                shuzu.push(objdata);
            }
            if (shuzu.length != 0) {
                this.gaming = shuzu[0].value;
            }
            this.alertButton = shuzu;
        }
        if (meg['type'] == "generateOrder_ret") {
            console.log("generateOrder_ret" + meg);
            this.orderId = meg['orderId'];
            // let a = meg['orderString'].split('&');
            // let appobj = {};
            // for (let i = 0; i < a.length; i++) {
            //   let b = a[i].split('=');
            //   let b1 = b[0];
            //   let b2 = b[1];
            //   WitePrompt(b1 + "=" + b2);
            //   appobj[b1] = b2;
            // }
            this.pay(meg['orderString']);
        }
    };
    BuyServicePage.prototype.showRadio = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.PickerController.create({
                            columns: []
                            // buttons: [
                            //   {
                            //     text: '确定',
                            //     cssClass: 'secondary',
                            //     handler: () => {
                            //       console.log('Confirm Cancel');
                            //     }
                            //   }
                            // ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BuyServicePage.prototype.selectCoupon = function (val) {
        if (this.gaming == '0') {
            console.log();
            Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])("this.start_money=" + this.start_money);
            this.money = Number(this.start_money);
            return;
        }
        // console.log("gaming=" + this.gaming);
        var item = {};
        for (var i = 0; i < this.alertButton.length; i++) {
            if (this.alertButton[i]['item'].couponId == this.gaming) {
                item = this.alertButton[i]['item'];
            }
        }
        //  console.log(JSON.stringify(item));
        this.select_couponId = item['couponId'];
        this.select_couponMoney = item['couponMoney'];
        this.select_couponName = item['couponName'];
        var ok_money = this.start_money - this.select_couponMoney;
        if (ok_money <= 0) {
            this.money = 0;
        }
        else {
            this.money = Number(ok_money.toFixed(2)); //保留小数后2位
        }
        // WitePrompt("this.money=" + this.money);
        // WitePrompt("this.start_money=" + this.start_money);
        // WitePrompt("this.select_couponName=" + this.select_couponName);
    };
    BuyServicePage.prototype.unescapeHTML = function (a) {
        var aNew = "" + a;
        return aNew.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'");
    };
    BuyServicePage.prototype.pay = function (orderString) {
        var _this = this;
        Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])("订单字符串=" + orderString);
        var this1 = this;
        if (this.payType == "alipay") {
            orderString = this.unescapeHTML(orderString);
            cordova.plugins.alipay.payment(orderString, function (success) {
                if (success.resultStatus === "9000") {
                    console.log('支付成功');
                    this1.toast("付款成功,开始咨询。");
                    // console.log("buy_this1.touserid,="+this1.touserid)
                    var obj = {
                        toUserId: this1.touserid,
                        CName: this1.CName,
                        UserImgUrl: this1.appMin.getUserImg(),
                    };
                    this1.router.navigate(['consult-time'], { queryParams: obj, replaceUrl: true });
                }
                else {
                    console.log('支付失败');
                }
            }, function (error) {
                console.log('支付失败2');
            });
        }
        else {
            this1.toast("准备执行 调用微信方法。");
            var orderString_ = JSON.parse(orderString);
            var params = {
                partnerid: orderString_.mchid,
                prepayid: orderString_.prepayid,
                noncestr: orderString_.noncestr,
                timestamp: orderString_.timestamp,
                sign: orderString_.sign,
                appid: orderString_.appid //appid
            };
            console.log("asd0");
            try {
                Wechat.sendPaymentRequest(params, function () {
                    _this.toast("付款成功,开始咨询。");
                    var obj = {
                        toUserId: this1.touserid,
                        CName: this1.CName,
                        UserImgUrl: this1.appMin.getUserImg(),
                    };
                    _this.router.navigate(['consult-time'], { queryParams: obj, replaceUrl: true });
                }, function (reason) {
                    alert("Failed: " + reason);
                });
            }
            catch (err) {
                console.log("asd1" + err);
            }
            console.log("asd2");
        }
        return;
    };
    BuyServicePage.prototype.toast = function (msg) {
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
    BuyServicePage.prototype.paySelect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert_1, alert_2, confirm_1, actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.appMin.islogin() == false)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.alertCtrl.create({
                                message: '请先登录，再继续',
                                buttons: [
                                    {
                                        text: '取消',
                                        role: 'cancel',
                                        handler: function () {
                                            console.log('Cancel clicked');
                                        }
                                    },
                                    {
                                        text: '去登录',
                                        handler: function () {
                                            console.log('Buy clicked');
                                            var obj = {
                                                ispop: true
                                            };
                                            //this.navCtrl.push(login, obj);
                                            _this.router.navigate(['/login', obj]);
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        alert_1.present();
                        return [2 /*return*/];
                    case 2:
                        if (!(this.appMin.getUserid() == this.touserid)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: '通知',
                                subHeader: '不能购买自己的服务',
                                buttons: ['确定']
                            })];
                    case 3:
                        alert_2 = _a.sent();
                        return [4 /*yield*/, alert_2.present()];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5:
                        if (!(this.appMin.islogin() == false)) return [3 /*break*/, 8];
                        console.log('没有登录 弹出提示');
                        return [4 /*yield*/, this.alertCtrl.create({
                                message: '请先登录，再操作',
                                buttons: [
                                    {
                                        text: '取消',
                                        handler: function () {
                                            console.log('Disagree clicked');
                                        }
                                    },
                                    {
                                        text: '去登陆',
                                        handler: function () {
                                            var obj = {
                                                ispop: true
                                            };
                                            // this.navCtrl.push(login, obj);
                                            _this.router.navigate(['/login', obj]);
                                        }
                                    }
                                ]
                            })];
                    case 6:
                        confirm_1 = _a.sent();
                        return [4 /*yield*/, confirm_1.present()];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                    case 8:
                        console.log('已经登录 继续执行');
                        _a.label = 9;
                    case 9: return [4 /*yield*/, this.actionSheetCtrl.create({
                            // header: '',
                            buttons: [
                                {
                                    text: '支付宝付款',
                                    // role: 'destructive',
                                    cssClass: 'iconfont',
                                    handler: function () {
                                        _this.buyService('alipay');
                                    }
                                }, {
                                    text: '微信支付',
                                    cssClass: 'iconfont',
                                    handler: function () {
                                        _this.buyService('wechar');
                                    }
                                }, {
                                    text: '取消',
                                    role: 'cancel',
                                    handler: function () {
                                        Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])('取消_click');
                                    }
                                }
                            ]
                        })];
                    case 10:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 11:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BuyServicePage.prototype.ngOnInit = function () {
    };
    BuyServicePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buy-service',
            template: __webpack_require__(/*! ./buy-service.page.html */ "./src/app/buy-service/buy-service.page.html"),
            styles: [__webpack_require__(/*! ./buy-service.page.scss */ "./src/app/buy-service/buy-service.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PickerController"], _dataservice_service__WEBPACK_IMPORTED_MODULE_4__["DataserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _core__WEBPACK_IMPORTED_MODULE_2__["AppMin"]])
    ], BuyServicePage);
    return BuyServicePage;
}());



/***/ })

}]);
//# sourceMappingURL=buy-service-buy-service-module.js.map