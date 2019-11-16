(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-order-list-my-order-list-module"],{

/***/ "./src/app/my-order-list/my-order-list.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/my-order-list/my-order-list.module.ts ***!
  \*******************************************************/
/*! exports provided: MyOrderListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrderListPageModule", function() { return MyOrderListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_order_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-order-list.page */ "./src/app/my-order-list/my-order-list.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _my_order_list_page__WEBPACK_IMPORTED_MODULE_5__["MyOrderListPage"]
    }
];
var MyOrderListPageModule = /** @class */ (function () {
    function MyOrderListPageModule() {
    }
    MyOrderListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_my_order_list_page__WEBPACK_IMPORTED_MODULE_5__["MyOrderListPage"]]
        })
    ], MyOrderListPageModule);
    return MyOrderListPageModule;
}());



/***/ }),

/***/ "./src/app/my-order-list/my-order-list.page.html":
/*!*******************************************************!*\
  !*** ./src/app/my-order-list/my-order-list.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border >\n  <div class=\"{{header_class}}\">\n    <div class=\"head_berd\">\n      <ion-toolbar color=\"primary\" >\n        <ion-buttons slot=\"start\" >\n          <ion-back-button text=\"\"></ion-back-button>\n        </ion-buttons>\n\n        <ion-title style=\"font-size: 1.7rem;\">咨询订单</ion-title>\n      </ion-toolbar>\n\n      <div style=\"padding-bottom:1px;background: #8fa6c6; \">\n        <ion-segment [(ngModel)]=\"pet\" (ionChange)=\"segmentChanged($event)\">\n          <ion-segment-button mode=\"md\" id=\"ion-segment-button1-obj\" value=\"jinxingzhong\">\n            进行中\n          </ion-segment-button>\n          <ion-segment-button mode=\"md\" id=\"ion-segment-button2-obj\" value=\"daipingjia\">\n            待评价\n          </ion-segment-button>\n          <ion-segment-button mode=\"md\" id=\"ion-segment-button3-obj\" value=\"yiwancheng\">\n            已完成\n          </ion-segment-button>\n\n        </ion-segment>\n      </div>\n    </div>\n  </div>\n\n\n</ion-header>\n\n<ion-content #content2 (ionScroll)=\"ionScroll()\" padding>\n  <ion-refresher (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"Crescent\" refreshingSpinner=\"circles\"></ion-refresher-content>\n  </ion-refresher>\n\n  <div [ngSwitch]=\"pet\" style=\"width:100%;\">\n    <ion-list *ngSwitchCase=\"'jinxingzhong'\">\n      <div *ngIf=\"notMoer1\" style=\"text-align: center;color: #666666;font-size: 1.5rem;\">\n        没有找到的订单。。\n      </div>\n      <div class=\"list_f\" *ngFor='let item of orderList_jinxingzhong'>\n        <ion-row>\n          <ion-col class=\"name_col huanhangshenglue\" col-6>\n            <img src=\"{{item.toUserImg}}\">\n            <span class=\"title_span\">{{item.name}}</span>\n          </ion-col>\n\n\n          <ion-col class=\"ion_col1\" col-6>\n            <ion-icon name=\"ios-arrow-forward-outline\"></ion-icon>\n            <span class=\"title_span\">{{item.orderStateTxt}}</span>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"huanhangshenglue\">\n            <span>已购买:</span>\n            <span class=\"fuwubiaoq\" (click)=\"alertServiceTxt(item.serviceId)\">{{item.serviceName}}</span>\n\n          </ion-col>\n          <ion-col class=\"huanhangshenglue\">\n            <span>日期:</span>\n            <span class=\"span_data\">{{item.buyDate}}</span>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p class=liuy_p>\n              <span>留言：</span>{{item.orderTxt}}</p>\n          </ion-col>\n        </ion-row>\n        <div>\n          <div style='border-top: 1px solid #eee;'></div>\n          <div style='margin-top:5px;padding:0px;text-align: right;'>\n            <!-- 按钮组开始 -->\n            <ion-button color=\"secondary\" size='small' class=\"left-btn\" (click)=\"toConsultation(item.orderId,item.toUserId)\">咨询\n            </ion-button>\n            <!-- <button  color='hui' ion-button round small outline>评价</button> -->\n            <ion-button color=\"primary\" size='small' (click)='toDetails(item.orderId)'>详情</ion-button>\n          </div>\n        </div>\n\n\n      </div>\n\n      <ion-infinite-scroll immediate-check=\"false\" (ionInfinite)=\"doInfinite($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载中...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n\n    </ion-list>\n    <ion-list *ngSwitchCase=\"'daipingjia'\">\n      <div *ngIf=\"notMoer2\" style=\"text-align: center;color: #666666;font-size: 1.5rem;\">\n        没有找到的订单。。\n      </div>\n\n      <div class=\"list_f\" *ngFor='let item of orderList_daipingjia'>\n        <ion-row>\n          <ion-col class=\"name_col huanhangshenglue\" col-6>\n            <img src=\"{{item.toUserImg}}\">\n            <span class=\"title_span\">{{item.name}}</span>\n\n          </ion-col>\n\n\n          <ion-col class=\"ion_col1\" col-6>\n            <ion-icon name=\"ios-arrow-forward-outline\"></ion-icon>\n            <span class=\"title_span\">{{item.orderStateTxt}}</span>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col class=\"huanhangshenglue\">\n            <span>已购买:</span>\n            <span class=\"fuwubiaoq\" (click)=\"alertServiceTxt(item.serviceId)\">{{item.serviceName}}</span>\n\n          </ion-col>\n          <ion-col class=\"huanhangshenglue\">\n            <span>日期:</span>\n            <span class=\"span_data\">{{item.buyDate}}</span>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <p class=liuy_p>\n              <span>留言：</span>{{item.orderTxt}}</p>\n          </ion-col>\n\n        </ion-row>\n        <div>\n          <div style='border-top: 1px solid #eee;'></div>\n          <div style='margin-top:5px;padding:0px;text-align: right;'>\n            <!-- 按钮组开始 -->\n            <!-- <button color=\"button1\"  ion-button round small outline>咨询</button> -->\n            <!-- <button  color='hui' ion-button round small outline>评价</button> -->\n            <ion-button color=\"primary\" size='small' (click)='toDetails(item.orderId)'>去评价</ion-button>\n          </div>\n        </div>\n\n\n      </div>\n\n      <ion-infinite-scroll immediate-check=\"false\" (ionInfinite)=\"doInfinite($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载中...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase=\"'yiwancheng'\">\n      <div *ngIf=\"notMoer3\" style=\"text-align: center;color: #666666;font-size: 1.5rem;\">\n        没有找到的订单。。\n      </div>\n      <div class=\"list_f\" *ngFor='let item of orderList_yiwancheng'>\n        <ion-row>\n          <ion-col class=\"name_col huanhangshenglue\" col-6>\n            <img src=\"{{item.toUserImg}}\">\n            <span class=\"title_span\">{{item.name}}</span>\n\n          </ion-col>\n\n\n          <ion-col class=\"ion_col1\" col-6>\n            <ion-icon name=\"ios-arrow-forward-outline\"></ion-icon>\n            <span class=\"title_span\">{{item.orderStateTxt}}</span>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"huanhangshenglue\">\n            <span>已购买:</span>\n            <span class=\"fuwubiaoq\" (click)=\"alertServiceTxt(item.serviceId)\">{{item.serviceName}}</span>\n\n          </ion-col>\n          <ion-col class=\"huanhangshenglue\">\n            <span>日期:</span>\n            <span class=\"span_data\">{{item.buyDate}}</span>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p class=liuy_p>\n              <span>留言：</span>{{item.orderTxt}}</p>\n          </ion-col>\n        </ion-row>\n        <div>\n          <div style='border-top: 1px solid #eee;'></div>\n          <div style='margin-top:5px;padding:0px;text-align: right;'>\n            <!-- 按钮组开始 -->\n            <!-- <button color=\"button1\"  ion-button round small outline>咨询</button> -->\n            <!-- <button  color='hui' ion-button round small outline>评价</button> -->\n            <ion-button color=\"primary\" size='small' (click)='toDetails(item.orderId)'>详情</ion-button>\n          </div>\n        </div>\n\n\n      </div>\n\n      <ion-infinite-scroll immediate-check=\"false\" (ionInfinite)=\"doInfinite($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载中...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n\n    </ion-list>\n  </div>\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/my-order-list/my-order-list.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/my-order-list/my-order-list.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-segment-button {\n  --background:rgba(0, 0, 0, 0)  ;\n  --background-activated: transparent;\n  --background-checked:rgba(0, 0, 0, 0) ;\n  --color:rgb(233, 233, 233)  !important;\n  --color-checked:#fff  ;\n  --color-activated:#fff;\n  --color-disabled:rgb(241, 241, 241);\n  --color-checked-disabled:rgb(241, 241, 241);\n  --border-radius:10px\n; }\n\n.left-btn {\n  margin-right: 1rem; }\n\n.row1 {\n  transition: height 0.3s;\n  overflow: hidden; }\n\n.name_col img {\n  width: 4.15rem;\n  border-radius: 50%;\n  float: left; }\n\n.title_span {\n  font-size: 1.65rem;\n  padding: 5px 5px; }\n\n.huanhangshenglue {\n  font-size: 1.5rem; }\n\n.ion_col1 {\n  text-align: right;\n  padding: 10px 10px;\n  padding-left: 0px;\n  padding-right: 0px;\n  font-size: 1.4rem; }\n\n.span_fl {\n  padding: 3px;\n  border-radius: 5px;\n  background: #8fa6c6; }\n\n.fuwubiaoq {\n  border-bottom: solid #8fa6c6 1px; }\n\n.span_data {\n  font-family: Georgia, 'Times New Roman', Times, serif; }\n\n.liuy_p {\n  margin-bottom: 5px;\n  margin-top: 5px;\n  font-size: 1.5rem; }\n\n.list_f {\n  margin-bottom: 15px;\n  padding-bottom: 10px;\n  border-bottom: dashed 1px #707070;\n  background: #fff;\n  padding: 7px;\n  border-radius: 10px;\n  box-shadow: 1px 3px 2px #eee;\n  border: 0px; }\n\n.col_button {\n  text-align: center; }\n\n.name_col span {\n  line-height: 37px;\n  font-size: 1.8rem; }\n\n.scroll-content {\n  border-top: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvbXktb3JkZXItbGlzdC9teS1vcmRlci1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLHNDQUFxQjtFQUNyQixzQ0FBUTtFQUNSLHNCQUFnQjtFQUNoQixzQkFBa0I7RUFDbEIsbUNBQWlCO0VBQ2pCLDJDQUF5QjtFQUN6QjtBQUFnQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUtuQjtFQUNHLHVCQUF1QjtFQUN2QixnQkFDRixFQUFBOztBQUdBO0VBQ0UsY0FBYztFQUVkLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRWpCO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQ0YsRUFBQTs7QUFFQTtFQUNFLGdDQUFnQyxFQUFBOztBQUdsQztFQUNFLHFEQUNGLEVBQUE7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixXQUFXLEVBQUE7O0FBRWI7RUFDRSxrQkFDRixFQUFBOztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLDBCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbXktb3JkZXItbGlzdC9teS1vcmRlci1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWdtZW50LWJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwKSAgO1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOnJnYmEoMCwgMCwgMCwgMCkgO1xuICAgIC0tY29sb3I6cmdiKDIzMywgMjMzLCAyMzMpICAhaW1wb3J0YW50O1xuICAgIC0tY29sb3ItY2hlY2tlZDojZmZmICA7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6I2ZmZjtcbiAgICAtLWNvbG9yLWRpc2FibGVkOnJnYigyNDEsIDI0MSwgMjQxKTtcbiAgICAtLWNvbG9yLWNoZWNrZWQtZGlzYWJsZWQ6cmdiKDI0MSwgMjQxLCAyNDEpO1xuICAgIC0tYm9yZGVyLXJhZGl1czoxMHB4XG59XG5cbi5sZWZ0LWJ0bntcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG5cbiBcbiAucm93MSB7XG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3M7XG4gICAgb3ZlcmZsb3c6IGhpZGRlblxuICB9XG5cblxuICAubmFtZV9jb2wgaW1nIHtcbiAgICB3aWR0aDogNC4xNXJlbTtcblxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gIC50aXRsZV9zcGFuIHtcbiAgICBmb250LXNpemU6IDEuNjVyZW07XG4gICAgcGFkZGluZzogNXB4IDVweDtcbiAgICBcbiAgfVxuLmh1YW5oYW5nc2hlbmdsdWV7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuICAuaW9uX2NvbDEge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgZm9udC1zaXplOiAxLjRyZW07IC8v5LiL6Z2i55qEZm9udOWbvuagh+Wkp+Wwj1xuICB9XG5cbiAgLnNwYW5fZmwge1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogIzhmYTZjNlxuICB9XG5cbiAgLmZ1d3ViaWFvcSB7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgIzhmYTZjNiAxcHg7XG4gIH1cblxuICAuc3Bhbl9kYXRhIHtcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZlxuICB9XG5cbiAgLmxpdXlfcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICAubGlzdF9me1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogZGFzaGVkIDFweCAjNzA3MDcwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDNweCAycHggI2VlZTtcbiAgICBib3JkZXI6IDBweDtcbiAgfVxuICAuY29sX2J1dHRvbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgfVxuXG4gIC8v5aS05YOP5a+55YW2XG4gIC5uYW1lX2NvbCBzcGFue1xuICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICB9XG5cbiAgLnNjcm9sbC1jb250ZW50e1xuICAgIGJvcmRlci10b3A6MHB4ICFpbXBvcnRhbnQ7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/my-order-list/my-order-list.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/my-order-list/my-order-list.page.ts ***!
  \*****************************************************/
/*! exports provided: MyOrderListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrderListPage", function() { return MyOrderListPage; });
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



// import { MyOrderListShowPage } from '../my-order-list-show/my-order-list-show';
// import { ConsultTimePage } from '../consult-time/consult-time';

var MyOrderListPage = /** @class */ (function () {
    function MyOrderListPage(navCtrl, Router, appCtrl, platform, toastCtrl, loadingCtrl, appMin, alertCtrl) {
        this.navCtrl = navCtrl;
        this.Router = Router;
        this.appCtrl = appCtrl;
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
        this.isud = false;
        this.jinxingzhong_page = 0;
        this.daipingjia_page = 0;
        this.yiwancheng_page = 0;
        this.header_class = "";
        this.notMoer1 = true;
        this.notMoer2 = true;
        this.notMoer3 = true;
        if (appMin.GetPhoneMode() == "ios") {
            this.header_class = "header_class";
        }
        else {
            this.header_class = "header_class_md";
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
    MyOrderListPage.prototype.ionViewDidEnter = function () {
        //每次即将进入页面
        this.addMyOrderList(); //加载初始数据
        document.querySelector('#ion-segment-button1-obj').shadowRoot.querySelector('.button-native').querySelector('ion-ripple-effect').shadowRoot.querySelector('style').innerHTML = '';
        document.querySelector('#ion-segment-button2-obj').shadowRoot.querySelector('.button-native').querySelector('ion-ripple-effect').shadowRoot.querySelector('style').innerHTML = '';
        document.querySelector('#ion-segment-button3-obj').shadowRoot.querySelector('.button-native').querySelector('ion-ripple-effect').shadowRoot.querySelector('style').innerHTML = '';
    };
    MyOrderListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyOrderListPage');
    };
    MyOrderListPage.prototype.segmentChanged = function (event) {
        this.addMyOrderList();
    };
    MyOrderListPage.prototype.ionScroll = function (event) {
    };
    MyOrderListPage.prototype.send = function (value, isshow) {
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
    MyOrderListPage.prototype.addMyOrderList = function () {
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
            type: 'addMyOrderList',
            userId: this.appMin.getUserid(),
            page: 0,
            selectType: this.pet
        };
        this.send(JSON.stringify(obj), false);
    };
    MyOrderListPage.prototype.dataHandle = function (meg) {
        return __awaiter(this, void 0, void 0, function () {
            var count, selectType, page, i, i, i, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // WitePrompt(JSON.stringify(meg));
                        if (this.refresher) {
                            this.refresher.target.complete();
                        }
                        if (meg['type'] == 'addMyOrderList_ret') {
                            //加载初始数据
                            console.log("addMyOrderList_ret=" + JSON.stringify(meg));
                            count = meg['count'];
                            selectType = meg['selectType'];
                            page = meg['page'];
                            // WitePrompt('selectType=' + selectType);
                            if (selectType == "jinxingzhong") {
                                this.jinxingzhong_page = page;
                                if (page - 10 == 0) {
                                    Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])("首次加载");
                                    this.orderList_jinxingzhong = meg['rows'];
                                }
                                else {
                                    for (i = 0; i < count; i++) {
                                        this.orderList_jinxingzhong.push(meg['rows'][i]);
                                    }
                                }
                                if (this.orderList_jinxingzhong.length != 0) {
                                    this.notMoer1 = false;
                                }
                                if (count < 10) {
                                    this.isadd_orderList_jinxingzhong = false;
                                }
                            }
                            else if (selectType == "daipingjia") {
                                this.daipingjia_page = page;
                                if (page - 10 == 0) {
                                    Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])("首次加载");
                                    this.orderList_daipingjia = meg['rows'];
                                }
                                else {
                                    for (i = 0; i < count; i++) {
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
                                    for (i = 0; i < count; i++) {
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
                            //  WitePrompt("addMyOrderList_ret=" + JSON.stringify(meg));
                        }
                        if (!(meg['type'] == 'addOrderServiceTxt_ret')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.alertCtrl.create({
                                message: "说明：" + meg['serviceTxt'],
                                subHeader: meg['serviceName'],
                                buttons: ['确定']
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        alert_1.present();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MyOrderListPage.prototype.alertServiceTxt = function (serviceId) {
        //显示服务名称和内容
        //alert(serviceId);
        var obj = {
            type: 'addOrderServiceTxt',
            serviceId: serviceId
        };
        this.send(JSON.stringify(obj));
    };
    MyOrderListPage.prototype.toDetails = function (orderId, toUserId) {
        //详情按钮
        //跳转到详情页
        var obj = {
            orderId: orderId,
        };
        // this.navCtrl.push(MyOrderListShowPage, obj);
        this.Router.navigate(['my-order-list-show'], { queryParams: obj });
    };
    MyOrderListPage.prototype.doInfinite = function (infiniteScroll) {
        //上拉刷新
        // infiniteScroll.complete();
        console.log(infiniteScroll);
        var page;
        var pet = this.pet;
        if (pet == 'jinxingzhong') {
            if (this.isadd_orderList_jinxingzhong == false) {
                infiniteScroll.target.complete();
                return;
            }
            page = this.jinxingzhong_page;
        }
        else if (pet == 'daipingjia') {
            if (this.isadd_orderList_daipingjia == false) {
                infiniteScroll.target.complete();
                return;
            }
            page = this.daipingjia_page;
        }
        else if (pet == 'yiwancheng') {
            if (this.isadd_orderList_yiwancheng == false) {
                infiniteScroll.target.complete();
                return;
            }
            page = this.yiwancheng_page;
        }
        var obj = {
            type: 'addMyOrderList',
            userId: this.appMin.getUserid(),
            page: page,
            selectType: this.pet
        };
        this.send(JSON.stringify(obj), false);
        setTimeout(function () {
            if (infiniteScroll)
                infiniteScroll.target.complete();
        }, 1000);
    };
    MyOrderListPage.prototype.doRefresh = function (refresher) {
        //下拉刷新
        this.refresher = refresher;
        console.log('下滑刷新', refresher);
        var obj = {
            type: 'addMyOrderList',
            userId: this.appMin.getUserid(),
            page: 0,
            selectType: this.pet
        };
        this.send(JSON.stringify(obj), false);
    };
    MyOrderListPage.prototype.toConsultation = function (orderId, toUserId) {
        //咨询咨询按钮
        var obj = {
            orderId: orderId,
            toUserId: toUserId
        };
        console.log("toConsultation!");
        //   this.navCtrl.push(ConsultTimePage, obj, objcache);
        this.Router.navigate(["consult-time"], { queryParams: obj });
    };
    MyOrderListPage.prototype.ngOnInit = function () {
    };
    MyOrderListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-order-list',
            template: __webpack_require__(/*! ./my-order-list.page.html */ "./src/app/my-order-list/my-order-list.page.html"),
            styles: [__webpack_require__(/*! ./my-order-list.page.scss */ "./src/app/my-order-list/my-order-list.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonApp"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _core__WEBPACK_IMPORTED_MODULE_2__["AppMin"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
    ], MyOrderListPage);
    return MyOrderListPage;
}());



/***/ })

}]);
//# sourceMappingURL=my-order-list-my-order-list-module.js.map