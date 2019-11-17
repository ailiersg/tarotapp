(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-order-list-show-my-order-list-show-module"],{

/***/ "./src/app/my-order-list-show/my-order-list-show.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/my-order-list-show/my-order-list-show.module.ts ***!
  \*****************************************************************/
/*! exports provided: MyOrderListShowPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrderListShowPageModule", function() { return MyOrderListShowPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_order_list_show_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-order-list-show.page */ "./src/app/my-order-list-show/my-order-list-show.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _my_order_list_show_page__WEBPACK_IMPORTED_MODULE_5__["MyOrderListShowPage"]
    }
];
var MyOrderListShowPageModule = /** @class */ (function () {
    function MyOrderListShowPageModule() {
    }
    MyOrderListShowPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_my_order_list_show_page__WEBPACK_IMPORTED_MODULE_5__["MyOrderListShowPage"]], entryComponents: []
        })
    ], MyOrderListShowPageModule);
    return MyOrderListShowPageModule;
}());



/***/ }),

/***/ "./src/app/my-order-list-show/my-order-list-show.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/my-order-list-show/my-order-list-show.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n\n  <div class=\"{{header_class}}\">\n    <div class=\"head_berd\">\n      <ion-toolbar color=\"primary\" mode=\"ios\">\n        <ion-buttons slot=\"start\">\n          <ion-back-button text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>占卜订单</ion-title>\n        <ion-buttons slot='end' *ngIf=\"orderState < 3\">\n          <ion-button ion-button icon-only (click)=\"presentPopover($event)\">\n            <ion-icon name=\"more\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n\n      </ion-toolbar>\n    </div>\n  </div>\n\n\n</ion-header>\n\n\n<ion-content class=\"my-order-list-show\" style=\"background-color: #f5f5f9;\" overflow-scroll=\"true\">\n  <div padding style=\"margin-bottom: 40px;   margin-top: 10px;\">\n\n    <div style=\"border-radius: 8px;padding:6px;background-color:#fff;margin-bottom:10px;box-shadow: 1px 3px 2px #eee;\">\n      <ion-list class=\"list_f\">\n        <ion-list-header>\n          订单详情\n        </ion-list-header>\n        <ion-item>\n          塔罗师：\n          <span class='btn_sp'>{{name}}</span>\n\n        </ion-item>\n        <ion-item>\n          我购买的服务：\n          <span class='btn_sp'>{{serviceName}}</span>\n        </ion-item>\n        <ion-item>\n          订单号：\n          <span class='btn_sp'>{{orderId}}</span>\n        </ion-item>\n        <ion-item>\n          订单日期：\n          <span class='btn_sp'>{{payDate}}</span>\n        </ion-item>\n        <ion-item>\n          订单有效期：\n          <span class='btn_sp'>{{remainingTime}}</span>\n        </ion-item>\n\n\n        <ion-item>\n          付款金额：\n          <span class='btn_sp'>{{payMoney}}</span>\n          <span class='btn_sp'>￥</span>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div\n      style=\"border-radius: 8px;padding:6px;background-color:#fff; margin-bottom: 10px;box-shadow: 1px 3px 2px #eee;\">\n      <ion-list class=\"list_f\">\n\n        <ion-list-header>\n          我的资料\n        </ion-list-header>\n        <ion-item>\n          性别：\n          <span class='btn_sp'>{{userSex}}</span>\n        </ion-item>\n        <ion-item>\n          年龄：\n          <span class='btn_sp'>{{userAge}}</span>\n          <span class='btn_sp'></span>\n        </ion-item>\n        <ion-item class=\"showm_text\">\n          我的留言：\n          <span style=\"margin:5px 0px 0px 0px; color:#666666\">{{orderText}}</span>\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <div *ngIf='orderState < 3'\n      style=\"border-radius: 8px;padding:6px;background-color:#fff; margin-bottom: 40px;box-shadow: 1px 3px 2px #eee;\">\n      <ion-list class=\"list_f\">\n\n        <ion-list-header>\n          请为他打分：\n        </ion-list-header>\n        <ion-item style=\"color: #333333;\">\n          <div>\n            <div class=\"cl pj_list\">\n              <div class=\"fl\" style=\"color: #333333;\"> 服务态度：</div>\n              <div class=\"fl img_f\" id=\"saturation_taidu\">\n                <img src=\"../../assets/img/未评价.png\" (click)=\"saturation_taidu_click('saturation_taidu',1)\">\n                <img src=\"../../assets/img/未评价.png\" (click)=\"saturation_taidu_click('saturation_taidu',2)\">\n                <img src=\"../../assets/img/未评价.png\" (click)=\"saturation_taidu_click('saturation_taidu',3)\">\n                <img src=\"../../assets/img/未评价.png\" (click)=\"saturation_taidu_click('saturation_taidu',4)\">\n                <img src=\"../../assets/img/未评价.png\" (click)=\"saturation_taidu_click('saturation_taidu',5)\">\n              </div>\n            </div>\n            <div class=\"cl pj_list\">\n              <div class=\"fl\" style=\"color: #333333;\"> 服务质量：</div>\n              <div class=\"fl img_f\" id=\"saturation_zhiliang\">\n                <img src=\"../../assets/img/未评价.png\" (click)=\"saturation_taidu_click('saturation_zhiliang',1)\">\n                <img src=\"../../assets/img/未评价.png \" (click)=\"saturation_taidu_click( 'saturation_zhiliang',2)\">\n                <img src=\"../../assets/img/未评价.png\" (click)=\"saturation_taidu_click('saturation_zhiliang',3)\">\n                <img src=\"../../assets/img/未评价.png \" (click)=\"saturation_taidu_click( 'saturation_zhiliang',4)\">\n                <img src=\"../../assets/img/未评价.png\" (click)=\"saturation_taidu_click('saturation_zhiliang',5)\">\n              </div>\n            </div>\n            <div class=\"cl pj_list \">\n              <div class=\"fl \" style=\"color: #333333; \"> 回复速度：</div>\n              <div class=\"fl img_f \" id=\"saturation_sudu\">\n                <img src=\"../../assets/img/未评价.png \" (click)=\"saturation_taidu_click( 'saturation_sudu',1)\">\n                <img src=\"../../assets/img/未评价.png\" (click)=\"saturation_taidu_click('saturation_sudu',2)\">\n                <img src=\"../../assets/img/未评价.png \" (click)=\"saturation_taidu_click( 'saturation_sudu',3)\">\n                <img src=\"../../assets/img/未评价.png\" (click)=\"saturation_taidu_click('saturation_sudu',4)\">\n                <img src=\"../../assets/img/未评价.png \" (click)=\"saturation_taidu_click( 'saturation_sudu',5)\">\n              </div>\n            </div>\n          </div>\n\n        </ion-item>\n        <ion-item lines=\"inset\">\n          <ion-label position=\"floating\"> 评价：</ion-label>\n\n          <ion-textarea [(ngModel)]=\"evaluateText\" placeholder=\"我的评价...\"></ion-textarea>\n        </ion-item>\n        <ion-item style=\"display: none;\">\n          评价：\n          <ion-textarea placeholder=\"请输入我的评价...\" style=\"border: 1px solid #eee;border-radius: 10px;\"></ion-textarea>\n        </ion-item>\n\n      </ion-list>\n\n      <!-- 评价标签 -->\n      <div>\n        <div>\n          <div class=\"shuom_f \" style=\"margin-bottom: 40px;\">\n            <p style=\"color:#666666;font-size:1.45rem\">你对它的印象</p>\n            <div style=\"margin-top: 10px;margin-bottom: 10px;border-bottom: 0.55px solid #c8c7cc;\"></div>\n            <div class=\"badgeF\">\n              <p style=\"color:#666666\">已有({{objImpressionedSum}}个印象)</p>\n              <ion-badge *ngFor=\"let item of ObjBadge  \" item-end color=\"secondary\" (click)=\"selectbadgeEd(item)\">\n                {{item.txt}}({{item.sum}})</ion-badge>\n              <ion-badge item-end color=\"primary\" (click)=\"addbadgeEd()\">...添加</ion-badge>\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <!-- 评价标签结束 --> \n      <div>\n        <div style=\"padding-left:10px;\">\n          <p style=\"color:#666666;font-size:1.4rem;\">·请在咨询完成后再提交</p>\n        </div>\n        <div style='margin-top:10px;padding:5px;text-align: center;'>\n          <!-- 按钮组开始 -->\n          <ion-button color=\"primary\" size=\"small\" (click)=\"submitEvaluate()\">提交评价</ion-button>\n\n        </div>\n      </div>\n\n    </div>\n\n\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/my-order-list-show/my-order-list-show.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/my-order-list-show/my-order-list-show.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --background:#ffffff;\n  --padding-end:16px; }\n\n.list_f {\n  margin-bottom: 15px;\n  padding-bottom: 10px;\n  background: #ffffff; }\n\n.list-ios {\n  background: #ffffff !important; }\n\n.col_button {\n  text-align: center; }\n\nion-list-header {\n  border-top: 0px !important;\n  color: #333333; }\n\n.list_f ion-item {\n  color: #333333; }\n\n.my-order-list-show ion-item {\n  font-size: 1.45rem; }\n\n.showm_text ion-label {\n  white-space: inherit !important; }\n\n.img_f {\n  text-align: left;\n  line-height: 35px; }\n\n.img_f img {\n  margin-left: 0.7rem; }\n\n.pj_list {\n  line-height: 30px; }\n\n.pj_list img {\n  padding: 1px;\n  width: 1.6em; }\n\n.shuom_f {\n  margin-left: 16px;\n  margin-top: 20px;\n  margin-right: 0px; }\n\n.badgeF ion-badge {\n  box-shadow: 1px 1px 1px #eee;\n  color: #ffffff;\n  font-size: 1.3rem;\n  border: 1px solid #ffffff;\n  margin-bottom: 0.3rem; }\n\n.no_border_botton {\n  border-bottom: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvbXktb3JkZXItbGlzdC1zaG93L215LW9yZGVyLWxpc3Qtc2hvdy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBYTtFQUNiLGtCQUFjLEVBQUE7O0FBRWxCO0VBQ0ksbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixtQkFBbUIsRUFBQTs7QUFFckI7RUFDSSw4QkFBOEIsRUFBQTs7QUFFbEM7RUFDRSxrQkFDRixFQUFBOztBQUNBO0VBQ0ksMEJBQTBCO0VBQzFCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxjQUFjLEVBQUE7O0FBSWxCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBSXRCO0VBQXNCLCtCQUE4QixFQUFBOztBQUlwRDtFQUFRLGdCQUFlO0VBQUMsaUJBQWlCLEVBQUE7O0FBQ3pDO0VBQVksbUJBQW1CLEVBQUE7O0FBQy9CO0VBQVUsaUJBQWlCLEVBQUE7O0FBQzNCO0VBQWMsWUFBWTtFQUFFLFlBQVksRUFBQTs7QUFHeEM7RUFDQSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUVqQjtFQUNBLDRCQUE0QjtFQUM1QixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHlCQUF3QjtFQUN4QixxQkFBcUIsRUFBQTs7QUFTckI7RUFDQSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL215LW9yZGVyLWxpc3Qtc2hvdy9teS1vcmRlci1saXN0LXNob3cucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XG4gICAgLS1wYWRkaW5nLWVuZDoxNnB4O1xufVxuLmxpc3RfZntcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG4gIC5saXN0LWlvc3tcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgfVxuICAuY29sX2J1dHRvbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgfVxuICBpb24tbGlzdC1oZWFkZXJ7XG4gICAgICBib3JkZXItdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICB9XG4gIC5saXN0X2YgaW9uLWl0ZW17XG4gICAgICBjb2xvcjogIzMzMzMzMztcbiAgIFxuICB9XG5cbiAgLm15LW9yZGVyLWxpc3Qtc2hvdyBpb24taXRlbXtcbiAgICBmb250LXNpemU6IDEuNDVyZW07XG4gICAgLy8gZm9udC1zaXplOiA0LjV2dztcbn0gIFxuXG4uc2hvd21fdGV4dCBpb24tbGFiZWx7d2hpdGUtc3BhY2U6aW5oZXJpdCAhaW1wb3J0YW50O31cblxuXG4vL+ivhOS7t1xuLmltZ19meyB0ZXh0LWFsaWduOmxlZnQ7bGluZS1oZWlnaHQ6IDM1cHg7fVxuLmltZ19mIGltZ3sgbWFyZ2luLWxlZnQ6IDAuN3JlbTt9XG4ucGpfbGlzdHsgbGluZS1oZWlnaHQ6IDMwcHg7fVxuLnBqX2xpc3QgaW1neyBwYWRkaW5nOiAxcHg7IHdpZHRoOiAxLjZlbTt9XG5cbi8v5ZKo6K+i5qCH562+XG4uc2h1b21fZntcbm1hcmdpbi1sZWZ0OiAxNnB4O1xubWFyZ2luLXRvcDogMjBweDtcbm1hcmdpbi1yaWdodDogMHB4O1xufVxuLmJhZGdlRiBpb24tYmFkZ2V7XG5ib3gtc2hhZG93OiAxcHggMXB4IDFweCAjZWVlO1xuY29sb3I6ICNmZmZmZmY7XG5mb250LXNpemU6IDEuM3JlbTtcbmJvcmRlcjoxcHggc29saWQgI2ZmZmZmZjtcbm1hcmdpbi1ib3R0b206IDAuM3JlbTtcblxuXG59XG5cblxuXG5cbi8v6YCa55SoXG4ubm9fYm9yZGVyX2JvdHRvbntcbmJvcmRlci1ib3R0b206IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/my-order-list-show/my-order-list-show.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/my-order-list-show/my-order-list-show.page.ts ***!
  \***************************************************************/
/*! exports provided: MyOrderListShowPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrderListShowPage", function() { return MyOrderListShowPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
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






// var MyOrderListShowPage_message;
// let MyOrderListShowPage_close;
var MyOrderListShowPage = /** @class */ (function () {
    function MyOrderListShowPage(navCtrl, ActivatedRoute, Router, storage, actionSheetCtrl, popoverCtrl, toastCtrl, loadingCtrl, appMin, alertCtrl) {
        this.navCtrl = navCtrl;
        this.ActivatedRoute = ActivatedRoute;
        this.Router = Router;
        this.storage = storage;
        this.actionSheetCtrl = actionSheetCtrl;
        this.popoverCtrl = popoverCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.appMin = appMin;
        this.alertCtrl = alertCtrl;
        this.ObjBadge = []; //印象标签数组
        this.selectbadgeEd_item = []; //待更新的标签
        this.addbadgeEd_txt_sum = 0; //是否已经添加了印象标签 用来判断不能再次添加
        //输入
        this.saturation_taidu = '0';
        this.saturation_zhiliang = '0';
        this.saturation_sudu = '0';
        this.evaluateText = "";
        if (appMin.GetPhoneMode() == "ios") {
            this.header_class = "header_class";
        }
        else {
            this.header_class = "header_class_md";
            //  console.log("判断为安卓系统 设置状态栏样式");
        }
        this.orderId = this.ActivatedRoute.snapshot.queryParams['orderId'];
    }
    MyOrderListShowPage.prototype.ionViewWillEnter = function () {
        //页面即将载入
    };
    MyOrderListShowPage.prototype.send = function (value, isshow) {
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
    MyOrderListShowPage.prototype.addMyOrderListShowPage = function () {
        //加载初始数据
        var obj = {
            type: 'addMyOrderListShowPage',
            orderId: this.orderId,
            userId: this.appMin.getUserid()
        };
        this.send(JSON.stringify(obj));
    };
    MyOrderListShowPage.prototype.dataHandle = function (meg) {
        if (meg == null) {
            return;
        }
        if (meg['type'] == "addMyOrderListShowPage_ret") {
            //  WitePrompt('addMyOrderListShowPage_ret!');
            this.name = meg['name'];
            this.serviceName = meg['serviceName'];
            this.payDate = meg['payDate'];
            this.payMoney = meg['payMoney'];
            this.userSex = meg['userSex'];
            this.userName = meg['userName'];
            this.userAge = meg['userAge'];
            this.okDate = meg['okDate'];
            this.orderText = meg['orderText'];
            this.objUserId = meg['objUserId'];
            this.objUserImg = meg['objUserImg'];
            this.ClosingDate = meg['截止日期']; //截止日期
            this.remainingTime = meg["剩余时间"]; //剩余时间
            if (this.orderText == '') {
                this.orderText = "没填写";
            }
            this.orderState = meg['orderState'];
        }
        if (meg['type'] == "submitEvaluate_ret") {
            //提交订单返回值
            if (meg['isTransactionOk'] == true) {
                this.presentToast("评价成功！");
                //2 重新请求数据
                this.addMyOrderListShowPage();
            }
        }
        if (meg['type'] == 'getObjBadge_ret') {
            //取得咨询师印象标签
            // console.log('getObjBadge_ret=' + JSON.stringify(meg))
            if (meg['bq'] != undefined && meg['bq'] != null) {
                this.ObjBadge = meg['bq'];
                this.objImpressionedSum = this.ObjBadge.length;
            }
        }
    };
    MyOrderListShowPage.prototype.saturation_taidu_click = function (obj, val) {
        //设置数据
        if (obj == "saturation_taidu") {
            this.saturation_taidu = val;
        }
        if (obj == "saturation_zhiliang") {
            this.saturation_zhiliang = val;
        }
        if (obj == "saturation_sudu") {
            this.saturation_sudu = val;
        }
        jquery__WEBPACK_IMPORTED_MODULE_5__('#' + obj + ' img').attr('src', '../../assets/img/未评价.png');
        var i = 0;
        jquery__WEBPACK_IMPORTED_MODULE_5__('#' + obj + ' img').each(function (obj) {
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).attr('src', '../../assets/img/评价.png');
            i++;
            if (i == val) {
                return false;
            }
        });
    };
    MyOrderListShowPage.prototype.presentAlert = function (val) {
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
    MyOrderListShowPage.prototype.getObjBadge = function () {
        //加载咨询师标签
        var obj = {
            type: 'getObjBadge',
            orderId: this.orderId
        };
        this.send(JSON.stringify(obj));
    };
    MyOrderListShowPage.prototype.addbadgeEd = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //添加新标签
                        if (this.addbadgeEd_txt_sum == 1) {
                            //超过了最大数量 弹出提示
                            this.presentAlert("最多添加1个");
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
                                            //   console.log('Cancel clicked');
                                        }
                                    },
                                    {
                                        text: '确定',
                                        handler: function (data) {
                                            // let txt = data.name;
                                            var obj = {
                                                txt: data.name,
                                                sum: '1',
                                                id: ''
                                            };
                                            _this.ObjBadge.push(obj);
                                            _this.addbadgeEd_txt = data.name;
                                            _this.addbadgeEd_txt_sum = 1;
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
    MyOrderListShowPage.prototype.selectbadgeEd = function (item) {
        //更新标签
        //  console.log("selectbadgeEd()=" + JSON.stringify(item));
        var id = item.id;
        //  console.log("selectbadgeEd id=" + id);
        if (jquery__WEBPACK_IMPORTED_MODULE_5__["inArray"](id, this.selectbadgeEd_item) >= 0) {
            //数组中存在该项
            //   console.log("数组中存在该项=" + id);
        }
        else {
            this.selectbadgeEd_item.push(id); //添加到数组
            //  console.log("添加进数组=" + id);
            //遍历并临时显示计数器+1
            for (var i = 0; i < this.ObjBadge.length; i++) {
                if (this.ObjBadge[i].id == id) {
                    this.ObjBadge[i].sum = parseInt(this.ObjBadge[i].sum) + 1;
                    //   console.log("找到对应的标签ID+1");
                }
            }
        }
        //   console.log("selectbadgeEd 当前数组序列=" + this.selectbadgeEd_item);
    };
    MyOrderListShowPage.prototype.submitEvaluate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.judgeCanSubmitEvaluate()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: '提交评价',
                                message: '请确认你已经咨询完毕?',
                                buttons: [
                                    {
                                        text: '等下',
                                        role: 'cancel',
                                        handler: function () {
                                            //   console.log('等下 clicked');
                                        }
                                    },
                                    {
                                        text: '提交',
                                        handler: function () {
                                            //  console.log('提交 clicked');
                                            var obj = {
                                                type: 'submitEvaluate',
                                                userId: _this.appMin.getUserid(),
                                                orderId: _this.orderId,
                                                saturation_taidu: _this.saturation_taidu,
                                                saturation_zhiliang: _this.saturation_zhiliang,
                                                saturation_sudu: _this.saturation_sudu,
                                                evaluateText: _this.evaluateText,
                                                selectbadgeEd_item: _this.selectbadgeEd_item.join(','),
                                                addbadgeEd_txt: _this.addbadgeEd_txt,
                                            };
                                            _this.send(JSON.stringify(obj), true);
                                            //   console.log("submitEvaluate=" + JSON.stringify(obj));
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        alert_1.present();
                        return [3 /*break*/, 3];
                    case 2:
                        //不能提交
                        this.presentToast('请先打分在提交');
                        return [2 /*return*/];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MyOrderListShowPage.prototype.judgeCanSubmitEvaluate = function () {
        if (this.saturation_taidu != '0' && this.saturation_zhiliang != '0' && this.saturation_sudu != '0') {
            return true;
        }
        else {
            return false;
        }
    };
    MyOrderListShowPage.prototype.presentToast = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: text,
                            duration: 1500,
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
    MyOrderListShowPage.prototype.presentPopover = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            // header: '',
                            buttons: [
                                {
                                    text: '投诉咨询师',
                                    // role: 'destructive',
                                    cssClass: 'iconfont',
                                    handler: function () {
                                        var obj = {
                                            orderId: _this.orderId,
                                            toUserCName: _this.name
                                        };
                                        _this.Router.navigate(["complaint"], { queryParams: obj });
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
    MyOrderListShowPage.prototype.ngOnInit = function () {
        this.addMyOrderListShowPage();
        this.getObjBadge();
    };
    MyOrderListShowPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-order-list-show',
            template: __webpack_require__(/*! ./my-order-list-show.page.html */ "./src/app/my-order-list-show/my-order-list-show.page.html"),
            styles: [__webpack_require__(/*! ./my-order-list-show.page.scss */ "./src/app/my-order-list-show/my-order-list-show.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _core__WEBPACK_IMPORTED_MODULE_2__["AppMin"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
    ], MyOrderListShowPage);
    return MyOrderListShowPage;
}());



/***/ })

}]);
//# sourceMappingURL=my-order-list-show-my-order-list-show-module.js.map