(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["obj-order-list-obj-order-list-module"],{

/***/ "./src/app/obj-order-list/obj-order-list.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/obj-order-list/obj-order-list.module.ts ***!
  \*********************************************************/
/*! exports provided: ObjOrderListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjOrderListPageModule", function() { return ObjOrderListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _obj_order_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./obj-order-list.page */ "./src/app/obj-order-list/obj-order-list.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _obj_order_list_page__WEBPACK_IMPORTED_MODULE_5__["ObjOrderListPage"]
    }
];
var ObjOrderListPageModule = /** @class */ (function () {
    function ObjOrderListPageModule() {
    }
    ObjOrderListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_obj_order_list_page__WEBPACK_IMPORTED_MODULE_5__["ObjOrderListPage"]]
        })
    ], ObjOrderListPageModule);
    return ObjOrderListPageModule;
}());



/***/ }),

/***/ "./src/app/obj-order-list/obj-order-list.page.html":
/*!*********************************************************!*\
  !*** ./src/app/obj-order-list/obj-order-list.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <div class=\"{{header_class}}\">\n    <div class=\"head_berd\">\n      <ion-toolbar color=\"primary\" mode=\"ios\">\n        <ion-buttons slot=\"start\">\n          <ion-back-button text=\"\"></ion-back-button>\n        </ion-buttons>\n\n        <ion-title style=\"font-size: 1.7rem;\">咨询订单</ion-title>\n      </ion-toolbar>\n      <!-- <ion-row id=\"row1_order\" style=\"height:45px;background: #8fa6c6;\" class=\"row1\">\n          <ion-col>\n            <ion-icon (click)=\"likai()\" style=\"color:#fff;font-size:2.8rem;padding:8px 16px\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n          </ion-col>\n          <ion-col style=\"color:#fff;line-height:100%;font-size:1.2em\" padding-vertical>咨询订单</ion-col>\n          <ion-col></ion-col>\n     \n      </ion-row> -->\n      <div style=\"padding-bottom:1px;background: #8fa6c6; \">\n        <ion-segment [(ngModel)]=\"pet\" (ionChange)=\"segmentChanged($event)\">\n          <ion-segment-button mode=\"md\" id=\"ion-segment-button1-obj\" value=\"jinxingzhong\">\n            进行中\n          </ion-segment-button>\n          <ion-segment-button mode=\"md\" id=\"ion-segment-button2-obj\" value=\"daipingjia\">\n            待评价\n          </ion-segment-button>\n          <ion-segment-button mode=\"md\" id=\"ion-segment-button3-obj\" value=\"yiwancheng\">\n            已完成\n          </ion-segment-button>\n\n        </ion-segment>\n      </div>\n    </div>\n  </div>\n\n</ion-header>\n\n<ion-content #ObjOrderListPage_content  padding>\n\n  <ion-refresher #RefresherObjOrderList (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"Crescent\" refreshingSpinner=\"circles\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n\n  <div [ngSwitch]=\"pet\">\n    <ion-list *ngSwitchCase=\"'jinxingzhong'\">\n      <div *ngIf=\"notMoer1\" style=\"text-align: center;color: #666666;font-size: 1.45rem\">\n        没有收到新订单。。\n      </div>\n\n      <div class=\"list_f\" *ngFor='let item of orderList_jinxingzhong'>\n        <ion-row>\n          <ion-col class=\"name_col huanhangshenglue\" col-6>\n            <img src=\"{{item.toUserImg}}\">\n            <span class=\"title_span\">{{item.name}}</span>\n          </ion-col>\n\n\n          <ion-col class=\"ion_col1\" col-6>\n            <ion-icon name=\"ios-arrow-forward-outline\"></ion-icon>\n            <span class=\"title_span\">{{item.orderStateTxt}}</span>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"huanhangshenglue\">\n            <span>已购买:</span>\n            <span class=\"fuwubiaoq\" (click)=\"alertServiceTxt(item.serviceId)\">{{item.serviceName}}</span>\n\n          </ion-col>\n          <ion-col class=\"huanhangshenglue\">\n            <span>日期:</span>\n            <span class=\"span_data\">{{item.buyDate}}</span>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p class=liuy_p>\n              <span>留言：</span>{{item.orderTxt}}</p>\n          </ion-col>\n        </ion-row>\n        <div>\n          <div style='border-top: 1px solid #eee;'></div>\n          <div style='margin-top:5px;padding:0px;text-align: right;'>\n            <!-- 按钮组开始 -->\n            <ion-button color=\"secondary\" size='small' (click)=\"toConsultation(item.orderId,item.toUserId)\">咨询\n            </ion-button>\n            <!-- <button  color='hui' ion-button round small outline>评价</button> -->\n            <ion-button color=\"primary\" size='small' (click)='toDetails(item.orderId)'>详情</ion-button>\n          </div>\n        </div>\n\n\n      </div>\n\n\n\n\n\n\n      <ion-infinite-scroll immediate-check=\"false\" (ionInfinite)=\"doInfinite($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载中...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n\n    </ion-list>\n    <ion-list *ngSwitchCase=\"'daipingjia'\">\n      <div *ngIf=\"notMoer2\" style=\"text-align: center;color: #666666;font-size: 1.45rem\">\n        没有此类订单。。\n      </div>\n\n      <div class=\"list_f\" *ngFor='let item of orderList_daipingjia'>\n        <ion-row>\n          <ion-col class=\"name_col huanhangshenglue\" col-6>\n            <img src=\"{{item.toUserImg}}\">\n            <span class=\"title_span\">{{item.name}}</span>\n\n          </ion-col>\n\n\n          <ion-col class=\"ion_col1\" col-6>\n            <ion-icon name=\"ios-arrow-forward-outline\"></ion-icon>\n            <span class=\"title_span\">{{item.orderStateTxt}}</span>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"huanhangshenglue\">\n            <span>已购买:</span>\n            <span class=\"fuwubiaoq\" (click)=\"alertServiceTxt(item.serviceId)\">{{item.serviceName}}</span>\n\n          </ion-col>\n          <ion-col class=\"huanhangshenglue\">\n            <span>日期:</span>\n            <span class=\"span_data\">{{item.buyDate}}</span>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p class=liuy_p>\n              <span>留言：</span>{{item.orderTxt}}</p>\n          </ion-col>\n        </ion-row>\n        <div>\n          <div style='border-top: 1px solid #eee;'></div>\n          <div style='margin-top:5px;padding:0px;text-align: right;'>\n            <!-- 按钮组开始 -->\n            <!-- <button color=\"button1\"  ion-button round small outline>咨询</button> -->\n            <!-- <button  color='hui' ion-button round small outline>评价</button> -->\n            <ion-button color=\"primary\" size='small' (click)='toDetails(item.orderId)'>查看详情</ion-button>\n            <!-- <p style=\"color:#666666;margin: 0px;font-size: left\">等待用户进行评价</p> -->\n          </div>\n        </div>\n\n\n      </div>\n\n\n\n      <ion-infinite-scroll immediate-check=\"false\" (ionInfinite)=\"doInfinite($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载中...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </ion-list>\n\n    <ion-list *ngSwitchCase=\"'yiwancheng'\">\n      <div *ngIf=\"notMoer3\" style=\"text-align: center;color: #666666;font-size: 1.45rem\">\n        没有此类订单。。\n      </div>\n      <div class=\"list_f\" *ngFor='let item of orderList_yiwancheng'>\n        <ion-row>\n          <ion-col class=\"name_col huanhangshenglue\" col-6>\n            <img src=\"{{item.toUserImg}}\">\n            <span class=\"title_span\">{{item.name}}</span>\n\n          </ion-col>\n\n\n          <ion-col class=\"ion_col1\" col-6>\n            <ion-icon name=\"ios-arrow-forward-outline\"></ion-icon>\n            <span class=\"title_span\">{{item.orderStateTxt}}</span>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"huanhangshenglue\">\n            <span>已购买:</span>\n            <span class=\"fuwubiaoq\" (click)=\"alertServiceTxt(item.serviceId)\">{{item.serviceName}}</span>\n\n          </ion-col>\n          <ion-col class=\"huanhangshenglue\">\n            <span>日期:</span>\n            <span class=\"span_data\">{{item.buyDate}}</span>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p class=liuy_p>\n              <span>留言：</span>{{item.orderTxt}}</p>\n          </ion-col>\n        </ion-row>\n        <div>\n          <div style='border-top: 1px solid #eee;'></div>\n          <div style='margin-top:5px;padding:0px;text-align: right;'>\n            <!-- 按钮组开始 -->\n            <!-- <button color=\"button1\"  ion-button round small outline>咨询</button> -->\n            <!-- <button  color='hui' ion-button round small outline>评价</button> -->\n            <ion-button color=\"primary\" size='small' (click)='toDetails(item.orderId)'>详情</ion-button>\n          </div>\n        </div>\n\n\n      </div>\n\n\n      <ion-infinite-scroll immediate-check=\"false\" (ionInfinite)=\"doInfinite($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载中...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n\n    </ion-list>\n  </div>\n\n  <!-- <div id=\"orderlist_show_moer_data\">\n      <p style=\"color: #666666;text-align: center\">没有更多数据了。。。</p>\n    </div> -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/obj-order-list/obj-order-list.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/obj-order-list/obj-order-list.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-segment-button {\n  --background:rgba(0, 0, 0, 0)  ;\n  --background-activated:rgba(0, 0, 0, 0) ;\n  --background-checked:rgba(0, 0, 0, 0) ;\n  --color:rgb(233, 233, 233)  !important;\n  --color-checked:#fff  ;\n  --color-activated:#fff;\n  --color-disabled:rgb(241, 241, 241);\n  --color-checked-disabled:rgb(32, 23, 23); }\n\n.row1 {\n  transition: height 0.3s;\n  overflow: hidden; }\n\n.name_col img {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  float: left; }\n\n.title_span {\n  font-size: 1.65rem;\n  padding: 5px 5px; }\n\n.huanhangshenglue {\n  font-size: 1.5rem; }\n\n.ion_col1 {\n  text-align: right;\n  padding: 10px 10px;\n  padding-left: 0px;\n  padding-right: 0px; }\n\n.span_fl {\n  padding: 3px;\n  border-radius: 5px;\n  background: #8fa6c6; }\n\n.fuwubiaoq {\n  border-bottom: solid #8fa6c6 1px; }\n\n.span_data {\n  font-family: Georgia, 'Times New Roman', Times, serif; }\n\n.liuy_p {\n  margin-bottom: 5px;\n  margin-top: 5px;\n  font-size: 1.5rem; }\n\n.list_f {\n  margin-bottom: 15px;\n  padding-bottom: 10px;\n  border-bottom: dashed 1px #707070;\n  background: #fff;\n  padding: 7px;\n  border-radius: 10px;\n  box-shadow: 1px 3px 2px #eee;\n  border: 0px; }\n\n.col_button {\n  text-align: center; }\n\n.name_col span {\n  line-height: 37px; }\n\n.scroll-content {\n  border-top: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvb2JqLW9yZGVyLWxpc3Qvb2JqLW9yZGVyLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQWE7RUFDYix3Q0FBdUI7RUFDdkIsc0NBQXFCO0VBQ3JCLHNDQUFRO0VBQ1Isc0JBQWdCO0VBQ2hCLHNCQUFrQjtFQUNsQixtQ0FBaUI7RUFDakIsd0NBQXlCLEVBQUE7O0FBSTdCO0VBQ0ksdUJBQXVCO0VBQ3ZCLGdCQUNGLEVBQUE7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQ0YsRUFBQTs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQ0YsRUFBQTs7QUFFQTtFQUNFLGdDQUFnQyxFQUFBOztBQUdsQztFQUNFLHFEQUNGLEVBQUE7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixXQUFXLEVBQUE7O0FBRWI7RUFDRSxrQkFDRixFQUFBOztBQUlBO0VBQ0UsaUJBQWlCLEVBQUE7O0FBSW5CO0VBQ0UsMEJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9vYmotb3JkZXItbGlzdC9vYmotb3JkZXItbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VnbWVudC1idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMCkgIDtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOnJnYmEoMCwgMCwgMCwgMCkgO1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOnJnYmEoMCwgMCwgMCwgMCkgO1xuICAgIC0tY29sb3I6cmdiKDIzMywgMjMzLCAyMzMpICAhaW1wb3J0YW50O1xuICAgIC0tY29sb3ItY2hlY2tlZDojZmZmICA7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6I2ZmZjtcbiAgICAtLWNvbG9yLWRpc2FibGVkOnJnYigyNDEsIDI0MSwgMjQxKTtcbiAgICAtLWNvbG9yLWNoZWNrZWQtZGlzYWJsZWQ6cmdiKDMyLCAyMywgMjMpO1xuICAgXG59XG5cbi5yb3cxIHtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcztcbiAgICBvdmVyZmxvdzogaGlkZGVuXG4gIH1cblxuXG4gIC5uYW1lX2NvbCBpbWcge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuICAudGl0bGVfc3BhbiB7XG4gICAgZm9udC1zaXplOiAxLjY1cmVtO1xuICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gIH1cbiAgLmh1YW5oYW5nc2hlbmdsdWV7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cblxuICAuaW9uX2NvbDEge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHhcbiAgfVxuXG4gIC5zcGFuX2ZsIHtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6ICM4ZmE2YzZcbiAgfVxuXG4gIC5mdXd1Ymlhb3Ege1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkICM4ZmE2YzYgMXB4O1xuICB9XG5cbiAgLnNwYW5fZGF0YSB7XG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWZcbiAgfVxuXG4gIC5saXV5X3Age1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgLmxpc3RfZntcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IGRhc2hlZCAxcHggIzcwNzA3MDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAzcHggMnB4ICNlZWU7XG4gICAgYm9yZGVyOiAwcHg7XG4gIH1cbiAgLmNvbF9idXR0b257XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG4gIH1cblxuXG4gIC8v5aS05YOP5a+55YW2XG4gIC5uYW1lX2NvbCBzcGFue1xuICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xuICB9XG5cblxuICAuc2Nyb2xsLWNvbnRlbnR7XG4gICAgYm9yZGVyLXRvcDowcHggIWltcG9ydGFudDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/obj-order-list/obj-order-list.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/obj-order-list/obj-order-list.page.ts ***!
  \*******************************************************/
/*! exports provided: ObjOrderListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjOrderListPage", function() { return ObjOrderListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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



// import { ObjOrderListShowPage } from '../obj-order-list-show/obj-order-list-show';
// import { ConsultTimePage } from '../consult-time/consult-time';



var ObjOrderListPage_message;
var ObjOrderListPage_close;
var ObjOrderListPage = /** @class */ (function () {
    function ObjOrderListPage(navCtrl, Router, toast, storage, platform, toastCtrl, loadingCtrl, appMin, alertCtrl) {
        this.navCtrl = navCtrl;
        this.Router = Router;
        this.toast = toast;
        this.storage = storage;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.appMin = appMin;
        this.alertCtrl = alertCtrl;
        this.pet = "jinxingzhong";
        this.orderList_jinxingzhong = new Array();
        this.orderList_daipingjia = new Array();
        this.orderList_yiwancheng = new Array();
        this.isadd_orderList_jinxingzhong = true;
        this.isadd_orderList_daipingjia = true;
        this.isadd_orderList_yiwancheng = true;
        this.jinxingzhong_page = 0;
        this.daipingjia_page = 0;
        this.yiwancheng_page = 0;
        this.isud = false;
        this.header_class = "";
        this.notMoer1 = true;
        this.notMoer2 = true;
        this.notMoer3 = true;
        this.row1_order = document.getElementById("row1_order");
        var this1 = this;
        if (appMin.GetPhoneMode() == "ios") {
            this.header_class = "header_class";
        }
        else {
            this.header_class = "header_class";
            console.log("判断为安卓系统 设置状态栏样式");
        }
        platform.ready().then(function () {
            document.addEventListener('backbutton', function (evt) {
                if (cordova.platformId !== 'windows') {
                    return;
                }
                alert('backbutton事件触发');
                window.history.back();
            }, false);
        });
    }
    ObjOrderListPage.prototype.ionViewDidLoad = function () {
    };
    ObjOrderListPage.prototype.segmentChanged = function (event) {
        this.addObjOrderList();
    };
    ObjOrderListPage.prototype.send = function (value, isshow) {
        var _this = this;
        if (isshow) {
            this.loader = this.loadingCtrl.create({
                message: "加载中...",
                duration: 3000
            });
            this.loader.present();
        }
        this.appMin.post(JSON.parse(value)).subscribe(function (data) {
            _this.dataHandle(data, true);
        });
    };
    ObjOrderListPage.prototype.ionViewDidEnter = function () {
        document.querySelector('#ion-segment-button1-obj').shadowRoot.querySelector('.button-native').querySelector('ion-ripple-effect').shadowRoot.querySelector('style').innerHTML = '';
        document.querySelector('#ion-segment-button2-obj').shadowRoot.querySelector('.button-native').querySelector('ion-ripple-effect').shadowRoot.querySelector('style').innerHTML = '';
        document.querySelector('#ion-segment-button3-obj').shadowRoot.querySelector('.button-native').querySelector('ion-ripple-effect').shadowRoot.querySelector('style').innerHTML = '';
    };
    ObjOrderListPage.prototype.addObjOrderList = function () {
        //加载我的订单列表
        if (this.pet == "jinxingzhong") {
            Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])("当前pet=jinxingzhong");
            Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])("当前jinxingzhong_page=" + this.jinxingzhong_page);
            if (this.jinxingzhong_page == 0) {
            }
            else {
                return;
            }
        }
        else if (this.pet == "daipingjia") {
            Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])("当前pet=daipingjia");
            Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])("当前daipingjia_page=" + this.daipingjia_page);
            if (this.daipingjia_page == 0) {
            }
            else {
                return;
            }
        }
        else {
            Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])("当前pet=" + this.pet);
            Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])("当前yiwancheng_page_page=" + this.yiwancheng_page);
            if (this.yiwancheng_page == 0) {
            }
            else {
                return;
            }
        }
        var obj = {
            type: 'addObjOrderList',
            userId: this.appMin.getUserid(),
            page: 0,
            selectType: this.pet
        };
        this.send(JSON.stringify(obj), false);
    };
    ObjOrderListPage.prototype.dataHandle = function (meg, isSave) {
        // WitePrompt(JSON.stringify(meg));
        if (this.refresher) {
            this.refresher.target.complete();
        }
        if (meg["type"] == null)
            return;
        if (meg['type'] == 'addObjOrderList_ret') {
            //加载初始数据
            //console.log("addObjOrderList_ret="+JSON.stringify(meg));
            var count = meg['count'];
            var selectType = meg['selectType'];
            var page = meg['page'];
            Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])('selectType=' + selectType);
            if (selectType == "jinxingzhong") {
                this.jinxingzhong_page = page;
                if (page - 10 == 0) {
                    Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])("首次加载");
                    this.orderList_jinxingzhong = meg['rows'];
                }
                else {
                    for (var i = 0; i < count; i++) {
                        this.orderList_jinxingzhong.push(meg['rows'][i]);
                    }
                }
                if (this.orderList_jinxingzhong.length != 0) {
                    this.notMoer1 = false;
                }
                if (count < 10) {
                    this.isadd_orderList_jinxingzhong = false;
                }
                //判断是否显示"没有更多数据了"
            }
            else if (selectType == "daipingjia") {
                this.daipingjia_page = page;
                if (page - 10 == 0) {
                    Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])("首次加载");
                    this.orderList_daipingjia = meg['rows'];
                }
                else {
                    for (var i = 0; i < count; i++) {
                        this.orderList_daipingjia.push(meg['rows'][i]);
                    }
                }
                if (this.orderList_daipingjia.length != 0) {
                    this.notMoer2 = false;
                }
                if (count < 10) {
                    this.isadd_orderList_daipingjia = false;
                }
            }
            else {
                this.yiwancheng_page = page;
                if (page - 10 == 0) {
                    Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])("首次加载");
                    this.orderList_yiwancheng = meg['rows'];
                }
                else {
                    for (var i = 0; i < count; i++) {
                        this.orderList_yiwancheng.push(meg['rows'][i]);
                    }
                }
                if (this.orderList_yiwancheng.length != 0) {
                    this.notMoer3 = false;
                }
                if (count < 10) {
                    this.isadd_orderList_yiwancheng = false;
                }
            }
            if (meg['count'] == 0) {
                //没有数据
            }
            Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])("addObjOrderList_ret=" + JSON.stringify(meg));
            // document.getElementById("row1_order").style.height = "45px";
            if (isSave) {
                this.storage.set("addObjOrderList_ret", meg);
            }
        }
        if (meg['type'] == 'addObjOrderServiceTxt_ret') {
            // WitePrompt("addOrderServiceTxt_ret=" + JSON.stringify(meg));
            // let alert =await this.alertCtrl.create({
            //   message: "说明：" + meg['serviceTxt'],
            //   subHeader: meg['serviceName'],
            //   buttons: ['确定']
            // });
            // alert.present();
            this.showalert(meg['serviceTxt'], meg['serviceName'], '确定');
        }
    };
    ObjOrderListPage.prototype.showalert = function (msg, header, button) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: "说明：" + msg,
                            subHeader: header,
                            buttons: [button]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ObjOrderListPage.prototype.alertServiceTxt = function (serviceId) {
        //显示服务名称和内容
        //alert(serviceId);
        var obj = {
            type: 'addObjOrderServiceTxt',
            serviceId: serviceId
        };
        this.send(JSON.stringify(obj));
    };
    ObjOrderListPage.prototype.toDetails = function (orderId, toUserId) {
        //详情按钮
        //跳转到详情页
        var obj = {
            orderId: orderId,
        };
        // this.navCtrl.push(ObjOrderListShowPage, obj);
        this.Router.navigate(['obj-order-list-show'], { queryParams: obj });
    };
    ObjOrderListPage.prototype.doInfinite = function (infiniteScroll) {
        //上拉刷新
        // infiniteScroll.complete();
        console.log(infiniteScroll);
        var page;
        var pet = this.pet;
        if (pet == 'jinxingzhong') {
            page = this.jinxingzhong_page;
            //判断是否还有数据可加载
            if (this.isadd_orderList_jinxingzhong == false) {
                infiniteScroll.target.complete();
                return;
            }
        }
        else if (pet == 'daipingjia') {
            page = this.daipingjia_page;
            if (this.isadd_orderList_daipingjia == false) {
                infiniteScroll.target.complete();
                return;
            }
        }
        else if (pet == 'yiwancheng') {
            page = this.yiwancheng_page;
            if (this.isadd_orderList_yiwancheng == false) {
                infiniteScroll.target.complete();
                return;
            }
        }
        var obj = {
            type: 'addObjOrderList',
            userId: this.appMin.getUserid(),
            page: page,
            selectType: this.pet
        };
        this.send(JSON.stringify(obj), false);
        setTimeout(function () {
            if (infiniteScroll)
                infiniteScroll.target.complete();
        }, 2000);
    };
    ObjOrderListPage.prototype.doRefresh = function (refresher) {
        //下拉刷新
        this.refresher = refresher;
        console.log('下滑刷新', refresher);
        var obj = {
            type: 'addObjOrderList',
            userId: this.appMin.getUserid(),
            page: 0,
            selectType: this.pet
        };
        this.send(JSON.stringify(obj), false);
    };
    ObjOrderListPage.prototype.toConsultation = function (orderId, toUserId) {
        //咨询咨询按钮
        var obj = {
            orderId: orderId,
            toUserId: toUserId,
            userisobj: '1'
        };
        //this.navCtrl.push(ConsultTimePage, obj);
        this.Router.navigate(["consult-time"], { queryParams: obj });
    };
    ObjOrderListPage.prototype.ngOnInit = function () {
        this.addObjOrderList(); //加载初始数据
        console.log('ngOnInit ');
    };
    ObjOrderListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-obj-order-list',
            template: __webpack_require__(/*! ./obj-order-list.page.html */ "./src/app/obj-order-list/obj-order-list.page.html"),
            styles: [__webpack_require__(/*! ./obj-order-list.page.scss */ "./src/app/obj-order-list/obj-order-list.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_4__["Toast"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _core__WEBPACK_IMPORTED_MODULE_2__["AppMin"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
    ], ObjOrderListPage);
    return ObjOrderListPage;
}());



/***/ })

}]);
//# sourceMappingURL=obj-order-list-obj-order-list-module.js.map