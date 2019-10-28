(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["obj-order-list-show-obj-order-list-show-module"],{

/***/ "./src/app/obj-order-list-show/obj-order-list-show.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/obj-order-list-show/obj-order-list-show.module.ts ***!
  \*******************************************************************/
/*! exports provided: ObjOrderListShowPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjOrderListShowPageModule", function() { return ObjOrderListShowPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _obj_order_list_show_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./obj-order-list-show.page */ "./src/app/obj-order-list-show/obj-order-list-show.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _obj_order_list_show_page__WEBPACK_IMPORTED_MODULE_5__["ObjOrderListShowPage"]
    }
];
var ObjOrderListShowPageModule = /** @class */ (function () {
    function ObjOrderListShowPageModule() {
    }
    ObjOrderListShowPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_obj_order_list_show_page__WEBPACK_IMPORTED_MODULE_5__["ObjOrderListShowPage"], _obj_order_list_show_page__WEBPACK_IMPORTED_MODULE_5__["ObjOrderListShowPage_PopoverPage"]]
        })
    ], ObjOrderListShowPageModule);
    return ObjOrderListShowPageModule;
}());



/***/ }),

/***/ "./src/app/obj-order-list-show/obj-order-list-show.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/obj-order-list-show/obj-order-list-show.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n\n  <div class=\"{{header_class}}\">\n    <div class=\"head_berd\">\n      <ion-toolbar color=\"primary\" mode=\"ios\">\n        <ion-buttons slot=\"start\">\n          <ion-back-button text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>占卜订单</ion-title>\n        <ion-buttons slot='end'>\n          <ion-button  *ngIf='false'  (click)=\"presentPopover($event)\">\n            <ion-icon name=\"more\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </div>\n  </div>\n\n\n</ion-header>\n\n\n<ion-content style=\"background-color: #f5f5f9;\" overflow-scroll=\"true\">\n  <div padding style=\"margin-bottom: 40px;   margin-top: 10px;\">\n\n    <div style=\"border-radius: 8px;padding:6px;background-color:#fff;margin-bottom:10px;box-shadow: 1px 3px 2px #eee;\">\n      <ion-list class=\"list_f\">\n        <ion-list-header>\n          订单详情\n        </ion-list-header>\n        <ion-item>\n          问卜者：\n          <span class='btn_sp'>{{userName}}</span>\n\n        </ion-item>\n        <ion-item>\n          购买的服务：\n          <span class='btn_sp'>{{serviceName}}</span>\n        </ion-item>\n        <ion-item>\n          订单号：\n          <span class='btn_sp'>{{orderId}}</span>\n        </ion-item>\n        <ion-item>\n          订单日期：\n          <span class='btn_sp'>{{payDate}}</span>\n        </ion-item>\n\n\n        <ion-item>\n          付款金额：\n          <span class='btn_sp'>{{payMoney}}</span>\n          <span class='btn_sp'>￥</span>\n        </ion-item>\n\n\n      </ion-list>\n    </div>\n    <div\n      style=\"border-radius: 8px;padding:6px;background-color:#fff; margin-bottom: 10px;box-shadow: 1px 3px 2px #eee;\">\n      <ion-list class=\"list_f\">\n\n        <ion-list-header>\n          对方的资料\n        </ion-list-header>\n        <ion-item>\n          性别：\n          <span class='btn_sp'>{{userSex}}</span>\n\n        </ion-item>\n        <ion-item>\n          年龄：\n          <span class='btn_sp'>{{userAge}}</span>\n          <span class='btn_sp'></span>\n        </ion-item>\n        <ion-item class=\"showm_text\">\n          留言：\n          <span style=\"margin:5px 0px 0px 0px; color:#666666\">{{orderText}}</span>\n        </ion-item>\n      </ion-list>\n    </div>\n\n\n    <div *ngIf='orderState ==3'\n      style=\"border-radius: 8px;padding:6px;background-color:#fff; margin-bottom: 40px;box-shadow: 1px 3px 2px #eee;\">\n      <ion-list class=\"list_f\">\n\n        <ion-list-header>\n          用户评价：\n        </ion-list-header>\n        <ion-item style=\"color: #333333;\">\n\n          <div>\n            <div class=\"cl pj_list\">\n              <div class=\"fl\" style=\"color: #333333;\"> 服务态度：</div>\n              <div class=\"fl img_f\" id=\"saturation_taidu\">\n                <img src=\"../../assets/img/未评价.png\">\n                <img src=\"../../assets/img/未评价.png\">\n                <img src=\"../../assets/img/未评价.png\">\n                <img src=\"../../assets/img/未评价.png\">\n                <img src=\"../../assets/img/未评价.png\">\n              </div>\n            </div>\n            <div class=\"cl pj_list\">\n              <div class=\"fl\" style=\"color: #333333;\"> 服务质量：</div>\n              <div class=\"fl img_f\" id=\"saturation_zhiliang\">\n                <img src=\"../../assets/img/未评价.png\">\n                <img src=\"../../assets/img/未评价.png \">\n                <img src=\"../../assets/img/未评价.png\">\n                <img src=\"../../assets/img/未评价.png \">\n                <img src=\"../../assets/img/未评价.png\">\n              </div>\n            </div>\n            <div class=\"cl pj_list \">\n              <div class=\"fl \" style=\"color: #333333; \"> 回复速度：</div>\n              <div class=\"fl img_f \" id=\"saturation_sudu\">\n                <img src=\"../../assets/img/未评价.png \">\n                <img src=\"../../assets/img/未评价.png\">\n                <img src=\"../../assets/img/未评价.png \">\n                <img src=\"../../assets/img/未评价.png\">\n                <img src=\"../../assets/img/未评价.png \">\n              </div>\n            </div>\n          </div>\n\n        </ion-item>\n        <ion-item lines=\"inset\">\n          评价：\n          <ion-textarea disabled [(ngModel)]=\"evaluateText\" placeholder=\"我的评价...\"></ion-textarea>\n        </ion-item>\n        <ion-item style=\"display: none;\">\n          评价：\n          <ion-textarea placeholder=\"我的评价...\" style=\"border: 1px solid #eee;border-radius: 10px;\"></ion-textarea>\n        </ion-item>\n\n      </ion-list>\n      <div>\n        <div style=\"padding-left:10px;\">\n          <!-- <P style=\"color:#666666;font-size:1.1em;\">·请在咨询完成后再提交</P> -->\n        </div>\n        <div style='margin-top:10px;padding:5px;text-align: center;'>\n\n          <!-- <button color=\"button2\" ion-button round small outline (click)=\"submitEvaluate()\">提交评价</button> -->\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/obj-order-list-show/obj-order-list-show.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/obj-order-list-show/obj-order-list-show.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --background:#ffffff;\n  --padding-end:16px; }\n\n.list_f {\n  margin-bottom: 15px;\n  padding-bottom: 10px;\n  background: #ffffff; }\n\n.col_button {\n  text-align: center; }\n\nion-list-header {\n  border-top: 0px !important;\n  color: #333333; }\n\nion-item {\n  color: #333333;\n  font-size: 1.4rem; }\n\n.showm_text ion-label {\n  white-space: inherit !important; }\n\n.img_f {\n  text-align: left;\n  line-height: 35px; }\n\n.img_f img {\n  margin-left: 1rem; }\n\n.pj_list {\n  line-height: 30px; }\n\n.pj_list img {\n  padding: 1px;\n  width: 1.6em; }\n\n.no_border_botton {\n  border-bottom: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvb2JqLW9yZGVyLWxpc3Qtc2hvdy9vYmotb3JkZXItbGlzdC1zaG93LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFhO0VBQ2Isa0JBQWMsRUFBQTs7QUFFZDtFQUNJLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usa0JBQ0YsRUFBQTs7QUFDQTtFQUNJLDBCQUEwQjtFQUMxQixjQUFjLEVBQUE7O0FBRWxCO0VBQ0UsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQU1yQjtFQUFzQiwrQkFBOEIsRUFBQTs7QUFHdEQ7RUFBUSxnQkFBZTtFQUFDLGlCQUFpQixFQUFBOztBQUN6QztFQUFZLGlCQUFpQixFQUFBOztBQUM3QjtFQUFVLGlCQUFpQixFQUFBOztBQUMzQjtFQUFjLFlBQVk7RUFBRSxZQUFZLEVBQUE7O0FBTXhDO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9vYmotb3JkZXItbGlzdC1zaG93L29iai1vcmRlci1saXN0LXNob3cucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XG4gICAgLS1wYWRkaW5nLWVuZDoxNnB4O1xufVxuICAgIC5saXN0X2Z7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgXG4gICAgICB9XG4gICAgICAuY29sX2J1dHRvbntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgICB9XG4gICAgICBpb24tbGlzdC1oZWFkZXJ7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICB9XG4gICAgICBpb24taXRlbXtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIH1cbiAgICAgIC5idG5fc3B7XG4gICAgICAgLy8gY29sb3I6JGNvbG9yX2J1dHRvbjE7XG5cbiAgICB9XG4gICAgLnNob3dtX3RleHQgaW9uLWxhYmVse3doaXRlLXNwYWNlOmluaGVyaXQgIWltcG9ydGFudDt9XG5cbiAgLy/or4Tku7dcbiAgLmltZ19meyB0ZXh0LWFsaWduOmxlZnQ7bGluZS1oZWlnaHQ6IDM1cHg7fVxuICAuaW1nX2YgaW1neyBtYXJnaW4tbGVmdDogMXJlbTt9XG4gIC5wal9saXN0eyBsaW5lLWhlaWdodDogMzBweDt9XG4gIC5wal9saXN0IGltZ3sgcGFkZGluZzogMXB4OyB3aWR0aDogMS42ZW07fVxuXG4gXG4gIFxuXG4gIC8v6YCa55SoXG4gIC5ub19ib3JkZXJfYm90dG9ue1xuICAgIGJvcmRlci1ib3R0b206IDBweDtcbiAgfVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/obj-order-list-show/obj-order-list-show.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/obj-order-list-show/obj-order-list-show.page.ts ***!
  \*****************************************************************/
/*! exports provided: ObjOrderListShowPage, ObjOrderListShowPage_PopoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjOrderListShowPage", function() { return ObjOrderListShowPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjOrderListShowPage_PopoverPage", function() { return ObjOrderListShowPage_PopoverPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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



//import { ShowAdvisoryrecordPage } from '../show-advisoryrecord/show-advisoryrecord';


var ObjOrderListShowPage = /** @class */ (function () {
    function ObjOrderListShowPage(navCtrl, ActivatedRoute, popoverCtrl, toastCtrl, loadingCtrl, appMin, alertCtrl) {
        this.navCtrl = navCtrl;
        this.ActivatedRoute = ActivatedRoute;
        this.popoverCtrl = popoverCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.appMin = appMin;
        this.alertCtrl = alertCtrl;
        //输入
        this.saturation_taidu = '0';
        this.saturation_zhiliang = '0';
        this.saturation_sudu = '0';
        this.evaluateText = "";
        if (appMin.GetPhoneMode() == "ios") {
            this.header_class = "header_class";
        }
        else {
            this.header_class = "header_class";
            console.log("判断为安卓系统 设置状态栏样式");
        }
        // this.orderId = this.navParams.get('orderId');
        this.orderId = this.ActivatedRoute.snapshot.queryParams['orderId'];
        // socket1.removeEventListener('message', ObjOrderListShowPage_message);
        // let _this = this;
        // ObjOrderListShowPage_message = function (event) {
        //   let meg = JSON.parse(event.data);
        //   // WitePrompt(event.data);
        //   if (meg.type == "error") {
        //     WitePrompt("ObjOrderListShowPage页面监听消息===" + JSON.stringify(meg));
        //   } else {
        //     WitePrompt("ObjOrderListShowPage页面监听消息===" + meg.type);
        //   }
        //   if (_this.loader) {
        //     _this.loader.dismiss();
        //     _this.loader = null;
        //   }
        //   //安全的删除加载框结束 --
        //   if (meg.type == 'addObjOrderListShowPage_ret') {
        //     _this.dataHandle(meg);
        //   } else if (meg.type == 'submitEvaluate_ret') {
        //     _this.dataHandle(meg);
        //   }
        //   else if (meg.type == 'addObjOrderSaturation_ret') {
        //     _this.dataHandle(meg);
        //   }
        // }
        // socket1.removeEventListener('close', ObjOrderListShowPage_close);
        // ObjOrderListShowPage_close = function () {
        //   WitePrompt('ObjOrderListShowPage页面真听到close事件');
        //   let c = setInterval(function () {
        //     if (socket1.readyState == 1) {
        //       socket1.removeEventListener('message', ObjOrderListShowPage_message);
        //       socket1.addEventListener('message', ObjOrderListShowPage_message);
        //       clearInterval(c);
        //       WitePrompt('ObjOrderListShowPage页面重新建立连接完成');
        //       c = null;
        //     }
        //   }, 500)
        // }
        // socket1.addEventListener('close', ObjOrderListShowPage_close);
        // socket1.addEventListener('message', ObjOrderListShowPage_message);
    }
    ObjOrderListShowPage.prototype.send = function (value, isshow) {
        var _this = this;
        if (isshow) {
            this.loader = this.loadingCtrl.create({
                message: "加载中...",
                duration: 3000
            });
            this.loader.present();
        }
        this.appMin.post(JSON.parse(value)).subscribe(function (data) {
            _this.dataHandle(data);
        });
    };
    ObjOrderListShowPage.prototype.addObjOrderListShowPage = function () {
        //加载初始数据
        var obj = {
            type: 'addObjOrderListShowPage',
            orderId: this.orderId,
            userId: this.appMin.getUserid()
        };
        this.send(JSON.stringify(obj));
    };
    ObjOrderListShowPage.prototype.dataHandle = function (meg) {
        return __awaiter(this, void 0, void 0, function () {
            var toast, saturation_taidu_1, saturation_zhiliang_1, saturation_sudu_1, i_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])(JSON.stringify(meg));
                        if (meg == null) {
                            return [2 /*return*/];
                        }
                        if (meg['type'] == "addObjOrderListShowPage_ret") {
                            Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])('addMyOrderListShowPage_ret!');
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
                            if (this.orderText == '') {
                                this.orderText = "没填写";
                            }
                            this.orderState = meg['orderState'];
                        }
                        if (!(meg['type'] == "submitEvaluate_ret")) return [3 /*break*/, 2];
                        //提交订单返回值
                        Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])("submitEvaluate_ret=" + JSON.stringify(meg));
                        if (!(meg['isTransactionOk'] == true)) return [3 /*break*/, 2];
                        //提交成功
                        //1弹出提示框
                        Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])("提交成功!");
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: "评价成功！",
                                duration: 2000,
                                position: 'top'
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.onDidDismiss();
                        toast.present();
                        //2 重新请求数据
                        this.addObjOrderListShowPage();
                        _a.label = 2;
                    case 2:
                        if (meg['type'] == 'addObjOrderSaturation_ret') {
                            saturation_taidu_1 = meg['saturation_taidu'];
                            saturation_zhiliang_1 = meg['saturation_zhiliang'];
                            saturation_sudu_1 = meg['saturation_sudu'];
                            //初始化图标
                            jquery__WEBPACK_IMPORTED_MODULE_4__('#' + 'saturation_taidu' + ' img').attr('src', '../../assets/img/未评价.png');
                            jquery__WEBPACK_IMPORTED_MODULE_4__('#' + 'saturation_zhiliang' + ' img').attr('src', '../../assets/img/未评价.png');
                            jquery__WEBPACK_IMPORTED_MODULE_4__('#' + 'saturation_sudu' + ' img').attr('src', '../../assets/img/未评价.png');
                            i_1 = 0;
                            jquery__WEBPACK_IMPORTED_MODULE_4__('#' + 'saturation_taidu' + ' img').each(function (obj) {
                                jquery__WEBPACK_IMPORTED_MODULE_4__(this).attr('src', '../../assets/img/评价.png');
                                i_1++;
                                if (i_1 == saturation_taidu_1) {
                                    return false;
                                }
                            });
                            i_1 = 0;
                            jquery__WEBPACK_IMPORTED_MODULE_4__('#' + 'saturation_zhiliang' + ' img').each(function (obj) {
                                jquery__WEBPACK_IMPORTED_MODULE_4__(this).attr('src', '../../assets/img/评价.png');
                                i_1++;
                                if (i_1 == saturation_zhiliang_1) {
                                    return false;
                                }
                            });
                            i_1 = 0;
                            jquery__WEBPACK_IMPORTED_MODULE_4__('#' + 'saturation_sudu' + ' img').each(function (obj) {
                                jquery__WEBPACK_IMPORTED_MODULE_4__(this).attr('src', '../../assets/img/评价.png');
                                i_1++;
                                if (i_1 == saturation_sudu_1) {
                                    return false;
                                }
                            });
                            //设置评价文本
                            this.evaluateText = meg['评价内容'];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ObjOrderListShowPage.prototype.saturation_taidu_click = function (obj, val) {
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
        jquery__WEBPACK_IMPORTED_MODULE_4__('#' + obj + ' img').attr('src', '../../assets/img/未评价.png');
        var i = 0;
        jquery__WEBPACK_IMPORTED_MODULE_4__('#' + obj + ' img').each(function (obj) {
            jquery__WEBPACK_IMPORTED_MODULE_4__(this).attr('src', '../../assets/img/评价.png');
            i++;
            if (i == val) {
                return false;
            }
        });
    };
    ObjOrderListShowPage.prototype.submitEvaluate = function () {
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
                                            console.log('等下 clicked');
                                        }
                                    },
                                    {
                                        text: '提交',
                                        handler: function () {
                                            console.log('提交 clicked');
                                            var obj = {
                                                type: 'submitEvaluate',
                                                userId: _this.appMin.getUserid(),
                                                orderId: _this.orderId,
                                                saturation_taidu: _this.saturation_taidu,
                                                saturation_zhiliang: _this.saturation_zhiliang,
                                                saturation_sudu: _this.saturation_sudu,
                                                evaluateText: _this.evaluateText
                                            };
                                            _this.send(JSON.stringify(obj), true);
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
    ObjOrderListShowPage.prototype.addObjOrderSaturation = function () {
        //加载评价
        var obj = {
            type: 'addObjOrderSaturation',
            orderId: this.orderId
        };
        this.send(JSON.stringify(obj));
    };
    ObjOrderListShowPage.prototype.judgeCanSubmitEvaluate = function () {
        if (this.saturation_taidu != '0' && this.saturation_zhiliang != '0' && this.saturation_sudu != '0') {
            return true;
        }
        else {
            return false;
        }
    };
    ObjOrderListShowPage.prototype.presentToast = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: text,
                            duration: 3000,
                            position: 'top'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.onDidDismiss();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ObjOrderListShowPage.prototype.presentPopover = function (myEvent) {
        return __awaiter(this, void 0, void 0, function () {
            var obj;
            return __generator(this, function (_a) {
                obj = {
                    orderId: this.orderId,
                    toUserCName: this.name,
                    toUserId: this.objUserId,
                    toUserImg: this.objUserImg
                };
                return [2 /*return*/];
            });
        });
    };
    ObjOrderListShowPage.prototype.ngOnInit = function () {
        this.addObjOrderListShowPage();
        this.addObjOrderSaturation();
    };
    ObjOrderListShowPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-obj-order-list-show',
            template: __webpack_require__(/*! ./obj-order-list-show.page.html */ "./src/app/obj-order-list-show/obj-order-list-show.page.html"),
            styles: [__webpack_require__(/*! ./obj-order-list-show.page.scss */ "./src/app/obj-order-list-show/obj-order-list-show.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _core__WEBPACK_IMPORTED_MODULE_2__["AppMin"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
    ], ObjOrderListShowPage);
    return ObjOrderListShowPage;
}());

var ObjOrderListShowPage_PopoverPage = /** @class */ (function () {
    function ObjOrderListShowPage_PopoverPage(navCtrl, actionSheetCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        //this.toUserId = JSON.parse(this.viewCtrl.data)['toUserId'];
        // this.toUserId = this.viewCtrl.data['toUserId'];
        // this.orderId = this.viewCtrl.data['orderId'];
        // this.toUserCName = this.viewCtrl.data['toUserCName'];
        // this.toUserImg = this.viewCtrl.data['toUserImg'];
        Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])('PopoverPage取得toUserId=' + this.orderId);
    }
    ObjOrderListShowPage_PopoverPage.prototype.addMoreText = function () {
        //跳转到更多对话记录
        var obj = {
            toUserImg: this.toUserImg,
            toUserId: this.toUserId,
            orderId: this.orderId
        };
        // this.navCtrl.push(ShowAdvisoryrecordPage, obj);
        // this.viewCtrl.dismiss(function () {
        //   WitePrompt('dismiss!!')
        // });
    };
    ObjOrderListShowPage_PopoverPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <ion-list>\n  <ion-list-header style='margin-bottom: 0px;'>\u66F4\u591A</ion-list-header>\n  <button ion-item (click)=\"addMoreText()\">\u67E5\u770B\u5BF9\u8BDD\u8BB0\u5F55</button>\n</ion-list>\n  "
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
    ], ObjOrderListShowPage_PopoverPage);
    return ObjOrderListShowPage_PopoverPage;
}());



/***/ })

}]);
//# sourceMappingURL=obj-order-list-show-obj-order-list-show-module.js.map