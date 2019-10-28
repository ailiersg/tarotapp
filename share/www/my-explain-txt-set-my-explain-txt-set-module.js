(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-explain-txt-set-my-explain-txt-set-module"],{

/***/ "./src/app/my-explain-txt-set/my-explain-txt-set.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/my-explain-txt-set/my-explain-txt-set.module.ts ***!
  \*****************************************************************/
/*! exports provided: MyExplainTxtSetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyExplainTxtSetPageModule", function() { return MyExplainTxtSetPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_explain_txt_set_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-explain-txt-set.page */ "./src/app/my-explain-txt-set/my-explain-txt-set.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _my_explain_txt_set_page__WEBPACK_IMPORTED_MODULE_5__["MyExplainTxtSetPage"]
    }
];
var MyExplainTxtSetPageModule = /** @class */ (function () {
    function MyExplainTxtSetPageModule() {
    }
    MyExplainTxtSetPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_my_explain_txt_set_page__WEBPACK_IMPORTED_MODULE_5__["MyExplainTxtSetPage"]]
        })
    ], MyExplainTxtSetPageModule);
    return MyExplainTxtSetPageModule;
}());



/***/ }),

/***/ "./src/app/my-explain-txt-set/my-explain-txt-set.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/my-explain-txt-set/my-explain-txt-set.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <div class=\"{{header_class}}\">\n    <div class=\"head_berd\">\n      <ion-toolbar color=\"primary\" mode=\"ios\">\n        <ion-buttons slot=\"start\">\n          <ion-back-button text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>编辑名片</ion-title>\n        <ion-buttons slot='end'>\n          <ion-button (click)=\"baoc_click()\">\n            <ion-label>保存</ion-label>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </div>\n  </div>\n</ion-header>\n\n\n<ion-content>\n\n  <div class=\"hea_f\">\n    <div class=\"set_user_img\" (click)=\"setUserImg()\">\n      <img src=\"{{toUserImg}}\">\n      <ion-icon color=\"medium\" name=\"camera\"></ion-icon>\n    </div>\n    <div class=\"img_f\" id=\"service_img_f_div\">\n    </div>\n    <div class=\"set_back_img\" (click)=\"toSetServiceImgs()\">\n      <p style=\"margin:0px;\">\n        <ion-icon style=\"font-size:2rem;vertical-align: middle;\" name=\"camera\"></ion-icon> 更换封面\n      </p>\n    </div>\n  </div>\n  <div style=\"    padding-bottom: 2rem;\">\n\n    <ion-item-group>\n\n      <ion-item (click)=\"toSetServiceTxt()\" detail>\n        <ion-label color=\"dark\">咨询说明&自我介绍</ion-label>\n\n      </ion-item>\n\n\n      <ion-item (click)=\"toSetBages()\" detail>\n        <ion-label color=\"dark\">我的印象标签</ion-label>\n      </ion-item>\n      <ion-item (click)=\"orterTxt()\" detail>\n        <ion-label color=\"dark\">设置擅长</ion-label>\n      </ion-item>\n\n      <ion-item (click)=\"setService()\" detail>\n        <ion-label color=\"dark\">我的服务项目</ion-label>\n      </ion-item>\n\n      <ion-item (click)=\"SetExperience()\" detail>\n        <ion-label color=\"dark\">占卜经历</ion-label>\n      </ion-item>\n      <ion-item (click)=\"SetSkill()\" detail>\n        <ion-label color=\"dark\">占卜方式&牌阵</ion-label>\n      </ion-item>\n\n      <!-- <input type=\"text\" id=\"city-picker\"> -->\n      <ion-item  (click)=\"onpikcer()\"  detail>\n        <ion-label color=\"dark\">所在地</ion-label>\n        <ion-text style=\"text-align: right;\">{{selectCity}}</ion-text>\n      \n      \n      </ion-item>\n      <ion-input  id=\"city-picker\" [(ngModel)]=\"selectCity\" readonly type=\"text\" style=\"text-align: right;display: none\"></ion-input>\n      <!-- <input  [(ngModel)]=\"selectCity\" [readonly]='readonly' id=\"city-picker\" type=\"text\" style=\"text-align: right;\" > -->\n      <!-- <input [(ngModel)]=\"selectCity\" [readonly]='readonly' id=\"city-picker\" type=\"text\" style=\"text-align: right;\" /> -->\n      <ion-input id=\"city-picker2\" ></ion-input>\n      <!-- <ion-item>\n\n        <ion-label>居住地</ion-label>\n        <ion-multi-picker placeholder=\"{{selectCity}}\" [(ngModel)]=\"selectCity\" [separator]=\"','\" item-content\n          [multiPickerColumns]=\"cityColumns\" [cancelText]=\"'取消'\" [doneText]=\"'完成'\"></ion-multi-picker>\n      </ion-item> -->\n\n      <ion-item (click)=\"viewShop()\" detail>\n        <ion-label>预览店面</ion-label>\n      </ion-item>\n    </ion-item-group>\n  </div>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/my-explain-txt-set/my-explain-txt-set.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/my-explain-txt-set/my-explain-txt-set.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --background: #ffffff;\n  --border-color:#eeeeee; }\n\nion-content {\n  --padding-top:16px; }\n\nion-input {\n  --color:#666666; }\n\n.hea_f {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  position: relative; }\n\n.set_user_img {\n  position: absolute;\n  left: 40%;\n  top: 2rem;\n  width: 7rem;\n  height: 7.2rem;\n  border-radius: 50%;\n  background: #BDBDBD;\n  border: 1px solid #ffffff; }\n\n.set_user_img ion-icon {\n  position: absolute;\n  right: 0.1rem;\n  bottom: 0.1rem;\n  font-size: 3rem; }\n\n.set_back_img {\n  border-radius: 0.5rem;\n  color: #fff;\n  background: rgba(0, 0, 0, 0.3);\n  position: absolute;\n  bottom: 1rem;\n  right: 1rem;\n  padding: 2px 8px; }\n\n.set_back_img p {\n  font-size: 1.5rem;\n  margin: 5px; }\n\n.set_user_img img {\n  border-radius: 50%;\n  width: 7rem;\n  height: 7rem; }\n\n.img_f {\n  width: 100%;\n  padding: 0px;\n  margin: 0px;\n  height: 12.5rem;\n  background-position: 50% 50%;\n  background-size: cover; }\n\n.img_f img {\n  width: 100%;\n  height: 12.5rem; }\n\n.img_table {\n  margin-left: 16px; }\n\n.zhuo_imgf {\n  margin-bottom: 16px;\n  padding-right: 16px; }\n\n.img_table ion-col {\n  border: 1px solid #eee;\n  padding: 1px; }\n\n.list_f {\n  height: 70px;\n  padding-right: 16px; }\n\n.img_table img {\n  width: 100%;\n  box-shadow: 0px 1px 1px #666;\n  vertical-align: middle;\n  height: 15vmax;\n  width: 20vmax; }\n\n.img_table img:active {\n  opacity: 0.7; }\n\n.add_ion {\n  font-size: 5em;\n  color: #888; }\n\n.add_ion:active {\n  color: #eee; }\n\n.add_img_col {\n  text-align: center; }\n\n.shuom_f {\n  margin-left: 16px;\n  margin-top: 20px;\n  margin-right: 16px; }\n\n.textarea1 textarea {\n  border: 1px solid #BDBDBD;\n  border-radius: 5px;\n  resize: none;\n  padding: 10px;\n  margin: 0px auto;\n  height: 150px;\n  width: 100%;\n  box-shadow: 0px 3px 3px #F5F5F5; }\n\n.textarea1 textarea:focus {\n  border: 1px solid #999;\n  box-shadow: 0px 3px 3px #eee; }\n\n.alert_class .alert-title {\n  margin: 0px;\n  font-weight: 300 !important; }\n\n.alert_class img {\n  box-shadow: 0px 3px 3px #666; }\n\n.badgeF ion-badge {\n  box-shadow: 1px 1px 1px #eee;\n  color: #ffffff;\n  border: 1px solid #ffffff; }\n\n.badgeF2 ion-badge {\n  background: #ffffff;\n  border: 1px solid #999999;\n  color: #999999;\n  margin-top: 5px;\n  margin-left: 3px;\n  box-shadow: 1px 2px 1px #eee; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvbXktZXhwbGFpbi10eHQtc2V0L215LWV4cGxhaW4tdHh0LXNldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxxQkFBYTtFQUNiLHNCQUFlLEVBQUE7O0FBRW5CO0VBQ0ksa0JBQWMsRUFBQTs7QUFLbEI7RUFDSSxlQUFRLEVBQUE7O0FBSVo7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUTtFQUNSLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix5QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBR25CO0VBQ0EscUJBQXFCO0VBRXJCLFdBQVc7RUFDWCw4QkFBMkI7RUFDM0Isa0JBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBRWhCO0VBQ0ksaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVoQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFFZiw0QkFBNEI7RUFDNUIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFNbkI7RUFDQSxpQkFBaUIsRUFBQTs7QUFFakI7RUFBWSxtQkFBbUI7RUFBRyxtQkFBbUIsRUFBQTs7QUFDckQ7RUFDSyxzQkFBc0I7RUFDdEIsWUFBWSxFQUFBOztBQUVqQjtFQUNJLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFFdkI7RUFBZ0IsV0FBVztFQUFDLDRCQUE0QjtFQUFDLHNCQUFxQjtFQUMxRSxjQUFhO0VBQ2IsYUFBWSxFQUFBOztBQUVoQjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxjQUFjO0VBQ2QsV0FBVSxFQUFBOztBQUVkO0VBQ0ksV0FBVyxFQUFBOztBQUVmO0VBRUMsa0JBQWtCLEVBQUE7O0FBRW5CO0VBQ0ksaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFLdEI7RUFDSSx5QkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWlCO0VBQ2pCLGFBQWE7RUFDYixXQUFXO0VBQ1gsK0JBQStCLEVBQUE7O0FBR25DO0VBQ0ksc0JBQXVCO0VBQ3ZCLDRCQUE0QixFQUFBOztBQUdoQztFQUNpQixXQUFVO0VBQUMsMkJBQTJCLEVBQUE7O0FBRHZEO0VBRVMsNEJBQTRCLEVBQUE7O0FBR3JDO0VBQ0ksNEJBQTRCO0VBQzVCLGNBQWM7RUFFZCx5QkFBd0IsRUFBQTs7QUFJNUI7RUFDSSxtQkFBbUI7RUFDbkIseUJBQXdCO0VBQ3hCLGNBQWM7RUFDZCxlQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDRCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbXktZXhwbGFpbi10eHQtc2V0L215LWV4cGxhaW4tdHh0LXNldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAtLWJvcmRlci1jb2xvcjojZWVlZWVlO1xufVxuaW9uLWNvbnRlbnR7XG4gICAgLS1wYWRkaW5nLXRvcDoxNnB4O1xufVxuLy8gaW9uLWxhYmVse1xuLy8gICAgIC0tY29sb3I6IzMzMzMzM1xuLy8gfVxuaW9uLWlucHV0e1xuICAgIC0tY29sb3I6IzY2NjY2Njtcbn1cblxuXG4uaGVhX2Z7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxufVxuLnNldF91c2VyX2ltZ3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNDAlO1xuICAgIHRvcDoycmVtO1xuICAgIHdpZHRoOiA3cmVtO1xuICAgIGhlaWdodDogNy4ycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjQkRCREJEO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2ZmZmZmZjtcbiAgICBcbn1cbi5zZXRfdXNlcl9pbWcgaW9uLWljb257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwLjFyZW07XG4gICAgYm90dG9tOiAwLjFyZW07XG4gICAgZm9udC1zaXplOiAzcmVtO1xufVxuLy/mm7TmjaLlsIHpnaLmjInpkq5cbi5zZXRfYmFja19pbWd7XG5ib3JkZXItcmFkaXVzOiAwLjVyZW07XG5cbmNvbG9yOiAjZmZmO1xuYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjMpO1xucG9zaXRpb246YWJzb2x1dGU7XG5ib3R0b206IDFyZW07XG5yaWdodDogMXJlbTtcbnBhZGRpbmc6IDJweCA4cHg7XG59XG4uc2V0X2JhY2tfaW1nIHB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luOiA1cHg7XG59XG4uc2V0X3VzZXJfaW1nIGltZ3tcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDdyZW07XG4gICAgaGVpZ2h0OiA3cmVtO1xufVxuLmltZ19me1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBoZWlnaHQ6IDEyLjVyZW07XG4gICAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHA6Ly9icGljLjU4OGt1LmNvbS9iYWNrX3BpYy8wNC85OC83Ni8xOTU5M2JmZjc4Y2M2YjguanBnIXI4NTAvZncvODAwJyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uaW1nX2YgaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTIuNXJlbTtcbiAgXG59XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLW5ldyBzdG9wXG4gICAgXG4uaW1nX3RhYmxle1xubWFyZ2luLWxlZnQ6IDE2cHg7XG59XG4uemh1b19pbWdmeyBtYXJnaW4tYm90dG9tOiAxNnB4OyAgcGFkZGluZy1yaWdodDogMTZweDt9XG4uaW1nX3RhYmxlIGlvbi1jb2x7XG4gICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgIHBhZGRpbmc6IDFweDtcbn1cbi5saXN0X2Z7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG4uaW1nX3RhYmxlIGltZ3sgd2lkdGg6IDEwMCU7Ym94LXNoYWRvdzogMHB4IDFweCAxcHggIzY2Njt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG4gICAgaGVpZ2h0OjE1dm1heDtcbiAgICB3aWR0aDoyMHZtYXg7XG59XG4uaW1nX3RhYmxlIGltZzphY3RpdmV7XG4gICAgb3BhY2l0eTogMC43O1xufVxuLmFkZF9pb257XG4gICAgZm9udC1zaXplOiA1ZW07XG4gICAgY29sb3I6Izg4ODtcbn1cbi5hZGRfaW9uOmFjdGl2ZXtcbiAgICBjb2xvcjogI2VlZTsgXG59XG4uYWRkX2ltZ19jb2x7XG4vLyAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2h1b21fZntcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi50ZXh0YXJlYTF7XG4gICAvLyBoZWlnaHQ6IDMwMHB4O1xufVxuLnRleHRhcmVhMSB0ZXh0YXJlYXtcbiAgICBib3JkZXI6ICAxcHggc29saWQgI0JEQkRCRDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcmVzaXplOm5vbmU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46ICAwcHggYXV0bztcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggM3B4ICNGNUY1RjU7XG59XG5cbi50ZXh0YXJlYTEgdGV4dGFyZWE6Zm9jdXN7XG4gICAgYm9yZGVyOiAgMXB4IHNvbGlkICM5OTk7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggI2VlZTtcbn1cblxuLmFsZXJ0X2NsYXNze1xuICAgIC5hbGVydC10aXRsZXttYXJnaW46MHB4O2ZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDt9ICAgXG4gICAgaW1neyBib3gtc2hhZG93OiAwcHggM3B4IDNweCAjNjY2fSAgXG5cbn1cbi5iYWRnZUYgaW9uLWJhZGdle1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICNlZWU7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIFxuICAgIGJvcmRlcjoxcHggc29saWQgI2ZmZmZmZjtcbiAgICBcblxufVxuLmJhZGdlRjIgaW9uLWJhZGdle1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjOTk5OTk5O1xuICAgIGNvbG9yOiAjOTk5OTk5O1xuICAgIG1hcmdpbi10b3A6NXB4OyBcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xuICAgIGJveC1zaGFkb3c6IDFweCAycHggMXB4ICNlZWU7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/my-explain-txt-set/my-explain-txt-set.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/my-explain-txt-set/my-explain-txt-set.page.ts ***!
  \***************************************************************/
/*! exports provided: MyExplainTxtSetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyExplainTxtSetPage", function() { return MyExplainTxtSetPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/fesm5/ng-zorro-antd-mobile.js");
/* harmony import */ var _assets_jqweui_jquery_2_1_4_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/jqweui/jquery-2.1.4.js */ "./src/assets/jqweui/jquery-2.1.4.js");
/* harmony import */ var _assets_jqweui_jquery_2_1_4_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_jqweui_jquery_2_1_4_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_LArea_master_LAreaData2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/LArea-master/LAreaData2.js */ "./src/assets/LArea-master/LAreaData2.js");
/* harmony import */ var _assets_LArea_master_LAreaData2_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_LArea_master_LAreaData2_js__WEBPACK_IMPORTED_MODULE_8__);
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









var MyExplainTxtSetPage = /** @class */ (function () {
    function MyExplainTxtSetPage(events, PickerController, PickerService, DataserviceService, Router, appmin, navCtrl, alertCtrl, actionSheetCtrl, loadingCtrl, camera) {
        //city-picker
        this.events = events;
        this.PickerController = PickerController;
        this.PickerService = PickerService;
        this.DataserviceService = DataserviceService;
        this.Router = Router;
        this.appmin = appmin;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.selectImgUrl = "";
        this.toUserImg = "img/头像.png";
        this.serviceImgs = [];
        this.serviceTxt = "";
        this.isShowAddBtn = true;
        this.readonly = false;
        // this.cityColumns = this.cityDataProvider.data;//设置省市区数据源
        //测试全局事件订阅
        events.subscribe('全局事件', function (user, time) {
            // user and time are the same arguments passed in `events.publish(user, time)`
            console.log('Welcome', user, 'at', time);
        });
        //测试全局事件订阅结束
        if (appmin.GetPhoneMode() == "ios") {
            this.header_class = "header_class";
        }
        else {
            this.header_class = "header_class";
            console.log("判断为安卓系统 设置状态栏样式");
        }
    }
    MyExplainTxtSetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyExplainTxtSetPage');
    };
    MyExplainTxtSetPage.prototype.send = function (value, isshow) {
        var _this = this;
        this.appmin.post(JSON.parse(value)).subscribe(function (data) {
            _this.dataHandle(data);
        });
    };
    MyExplainTxtSetPage.prototype.addUserData = function () {
        //加载用户数据
        var obj = {
            type: "addUserDataExplain",
            userId: this.appmin.getUserid()
        };
        this.send(JSON.stringify(obj), true);
    };
    MyExplainTxtSetPage.prototype.setUserImg = function () {
        //设置用户头像
        console.log("setUserImg()!");
        this.add_img();
    };
    MyExplainTxtSetPage.prototype.add_img = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //添加图片按钮
                        console.log("add_img()111");
                        return [4 /*yield*/, this.actionSheetCtrl.create({
                                header: '上传头像',
                                buttons: [
                                    {
                                        text: '从图库上传',
                                        role: 'destructive',
                                        // icon: "ios-image-outline",
                                        handler: function () {
                                            Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])('从图库上传');
                                            _this.userSelectImg();
                                        }
                                    }, {
                                        text: '拍照',
                                        // icon: "ios-reverse-camera-outline",
                                        handler: function () {
                                            Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])('拍照');
                                            _this.Photograph();
                                        }
                                    }, {
                                        text: '取消',
                                        role: 'cancel',
                                        // icon: 'ios-log-out-outline',
                                        handler: function () {
                                            console.log('取消 clicked');
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        actionSheet.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyExplainTxtSetPage.prototype.baoc_click = function () {
        //保存按钮
        //1 保存所在地
        var obj = {
            type: "setCity",
            userId: this.appmin.getUserid(),
            city_attr: this.selectCity
        };
        this.send(JSON.stringify(obj));
        //保存所在地end
    };
    MyExplainTxtSetPage.prototype.Photograph = function (upType) {
        //拍照上传
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 400,
            targetHeight: 250,
            allowEdit: true,
            cameraDirection: 0,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.getBase64Image(imageData);
        }, function (err) {
        });
    };
    MyExplainTxtSetPage.prototype.userSelectImg = function (upType) {
        //从图库上传
        var _this = this;
        var options = {
            sourceType: 0,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 400,
            targetHeight: 400,
            allowEdit: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.getBase64Image(imageData);
            //alert(imageData);
        }, function (err) {
            // Handle error
        });
    };
    MyExplainTxtSetPage.prototype.getBase64Image = function (imgUri) {
        //转码并发送
        // imgUri = normalizeURL(imgUri);//解决WKWebView兼容问题
        var this1 = this;
        var img = new Image();
        img.src = imgUri;
        img.onload = function () {
            var canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, img.width, img.height);
            //var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
            var dataURL = canvas.toDataURL("image/jpeg");
            //return dataURL;
            //上传头像
            var upobj = {
                type: "updataUserImg",
                userid: this1.appmin.getUserid(),
                userImgUri: dataURL
            };
            this1.send(JSON.stringify(upobj));
            console.log("上传头像=" + JSON.stringify(upobj));
        };
    };
    MyExplainTxtSetPage.prototype.dataHandle = function (meg) {
        if (meg['type'] == "updataUserImg_ret") {
            //上传头像返回
            this.addUserData();
        }
        if (meg["type"] == "setCity_ret") {
            console.log("setCity_ret!");
            this.navCtrl.pop();
        }
        //
        if (meg['type'] == "addUserDataExplain_ret") {
            //加载初始数据
            //  console.log('addUserDataExplain=' + JSON.stringify(meg));
            _core__WEBPACK_IMPORTED_MODULE_2__["myLocalStorage"].setItem('addUserDataExplain_ret', JSON.stringify(meg), 30);
            if (meg["serviceImgs"]) {
                this.serviceImgs = meg["serviceImgs"].split(',');
            }
            else {
                this.serviceImgs.length = 0; //清空数组
            }
            this.serviceTxt = meg["serviceTxt"];
            if (this.serviceImgs[0] == undefined && this.serviceImgs[0] == null) {
                //等待有新的默认图片可以加上？ 还是在数据库里直接设置？
                //$("#service_img_f_div").css("background-image", "url('http://bpic.588ku.com/back_pic/04/98/76/19593bff78cc6b8.jpg!r850/fw/800')");//设置背景
            }
            else {
                $("#service_img_f_div").css("background-image", "url(" + this.serviceImgs[0] + ")"); //设置背景
            }
            //处理数据
            if (this.serviceImgs.length >= 3) {
                this.isShowAddBtn = false;
            }
            else {
                this.isShowAddBtn = true;
            }
            // WitePrompt("数组长度："+imgs.length.toString());
            Object(_core__WEBPACK_IMPORTED_MODULE_2__["WitePrompt"])(this.serviceImgs.length.toString());
            this.objImpressioned = meg['badgeRows'];
            this.objImpressionedSum = this.objImpressioned.length;
            this.objImpression = meg['badgeRows_'];
            if (meg["userImg"] == "") {
                this.toUserImg = "../assets/img/头像.png";
            }
            else {
                this.toUserImg = meg["userImg"];
            }
            this.selectCity = meg['city']; //设置所在地
        }
    };
    MyExplainTxtSetPage.prototype.presentAlert = function (val) {
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
    //new function start
    MyExplainTxtSetPage.prototype.toSetServiceImgs = function () {
        //跳转到设置封面
        console.log("toSetServiceImgs()!");
        //this.navCtrl.push(MyExplainSetserviceimgsPage);
        this.Router.navigate(['my-explain-setserviceimgs']);
    };
    MyExplainTxtSetPage.prototype.toSetServiceTxt = function () {
        //跳转到简介
        //  this.navCtrl.push(MyExplainTxtSetServiceTxtPage);
        this.Router.navigate(['my-explain-set-service-info']);
    };
    MyExplainTxtSetPage.prototype.toSetBages = function () {
        //跳转到标签
        // this.navCtrl.push(MyExplainTxtSetbagePage);
        this.Router.navigate(['my-explain-txt-setbage']);
    };
    MyExplainTxtSetPage.prototype.showdefault = function () {
    };
    MyExplainTxtSetPage.prototype.setService = function () {
        //设置服务项目
        //  this.navCtrl.push(MySetServiceSerectPage);
        this.Router.navigate(['my-set-service-serect']);
    };
    MyExplainTxtSetPage.prototype.orterTxt = function () {
        //跳转到设置擅长页面
        //  this.navCtrl.push(MyExplainTxtSetExpertPage);
        this.Router.navigate(['my-explain-txt-set-expert']);
    };
    MyExplainTxtSetPage.prototype.viewShop = function () {
        //跳转到咨询师详情页 预览
        var obj = {
            userId: this.appmin.getUserid()
        };
        // this.navCtrl.push(Consultant, obj);
        this.Router.navigate(['consultant'], { queryParams: obj });
    };
    MyExplainTxtSetPage.prototype.SetExperience = function () {
        //跳转设置咨询经历页面
        //this.navCtrl.push(MyExplainTxtSetExperiencePage);
        this.Router.navigate(['my-explain-txt-set-experience']);
    };
    MyExplainTxtSetPage.prototype.SetSkill = function () {
        //跳转设置塔罗排阵页面
        // this.navCtrl.push(MyExplainTxtSetSkillPage);
        this.Router.navigate(['my-explain-txt-set-skill']);
    };
    MyExplainTxtSetPage.prototype.ngOnInit = function () {
        if (_core__WEBPACK_IMPORTED_MODULE_2__["myLocalStorage"].getItem('addUserDataExplain_ret') != null) {
            this.dataHandle(JSON.parse(_core__WEBPACK_IMPORTED_MODULE_2__["myLocalStorage"].getItem('addUserDataExplain_ret')));
        }
        this.addUserData();
    };
    MyExplainTxtSetPage.prototype.getResult = function (result) {
        var value = [];
        var temp = '';
        result.forEach(function (item) {
            value.push(item.label || item);
            temp += item.label || item;
        });
        return value.map(function (v) { return v; }).join(',');
    };
    MyExplainTxtSetPage.prototype.onpikcer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var this1;
            var _this = this;
            return __generator(this, function (_a) {
                this1 = this;
                ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__["PickerService"].showPicker({
                    data: cry3,
                    title: '选择城市',
                }, function (result) {
                    this1.selectCity = _this.getResult(result);
                    console.log('result2=' + this1.selectCity);
                }, function (cancel) {
                    console.log('cancel');
                });
                return [2 /*return*/];
            });
        });
    };
    MyExplainTxtSetPage.prototype.ionPickerDidPresent = function (a) {
    };
    MyExplainTxtSetPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-explain-txt-set',
            template: __webpack_require__(/*! ./my-explain-txt-set.page.html */ "./src/app/my-explain-txt-set/my-explain-txt-set.page.html"),
            styles: [__webpack_require__(/*! ./my-explain-txt-set.page.scss */ "./src/app/my-explain-txt-set/my-explain-txt-set.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PickerController"], ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__["PickerService"], _dataservice_service__WEBPACK_IMPORTED_MODULE_5__["DataserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _core__WEBPACK_IMPORTED_MODULE_2__["AppMin"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"]])
    ], MyExplainTxtSetPage);
    return MyExplainTxtSetPage;
}());



/***/ }),

/***/ "./src/assets/LArea-master/LAreaData2.js":
/*!***********************************************!*\
  !*** ./src/assets/LArea-master/LAreaData2.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



window.cry3 = [
	{
		'value': '110000',
		'label': '北京市',
		'children': [
			{
				'value': '110100',
				'label': '北京市',
				'children': [
					{
						'value': '110101',
						'label': '东城区'
					},
					{
						'value': '110102',
						'label': '西城区'
					},
					{
						'value': '110105',
						'label': '朝阳区'
					},
					{
						'value': '110106',
						'label': '丰台区'
					},
					{
						'value': '110107',
						'label': '石景山区'
					},
					{
						'value': '110108',
						'label': '海淀区'
					},
					{
						'value': '110109',
						'label': '门头沟区'
					},
					{
						'value': '110111',
						'label': '房山区'
					},
					{
						'value': '110112',
						'label': '通州区'
					},
					{
						'value': '110113',
						'label': '顺义区'
					},
					{
						'value': '110114',
						'label': '昌平区'
					},
					{
						'value': '110115',
						'label': '大兴区'
					},
					{
						'value': '110116',
						'label': '怀柔区'
					},
					{
						'value': '110117',
						'label': '平谷区'
					},
					{
						'value': '110228',
						'label': '密云区'
					},
					{
						'value': '110229',
						'label': '延庆区'
					}
				]
			}
		]
	},
	{
		'value': '120000',
		'label': '天津市',
		'children': [
			{
				'value': '120100',
				'label': '天津市',
				'children': [
					{
						'value': '120101',
						'label': '和平区'
					},
					{
						'value': '120102',
						'label': '河东区'
					},
					{
						'value': '120103',
						'label': '河西区'
					},
					{
						'value': '120104',
						'label': '南开区'
					},
					{
						'value': '120105',
						'label': '河北区'
					},
					{
						'value': '120106',
						'label': '红桥区'
					},
					{
						'value': '120110',
						'label': '东丽区'
					},
					{
						'value': '120111',
						'label': '西青区'
					},
					{
						'value': '120112',
						'label': '津南区'
					},
					{
						'value': '120113',
						'label': '北辰区'
					},
					{
						'value': '120114',
						'label': '武清区'
					},
					{
						'value': '120115',
						'label': '宝坻区'
					},
					{
						'value': '120116',
						'label': '滨海新区'
					},
					{
						'value': '120221',
						'label': '宁河区'
					},
					{
						'value': '120223',
						'label': '静海区'
					},
					{
						'value': '120225',
						'label': '蓟州区'
					}
				]
			}
		]
	},
	{
		'value': '130000',
		'label': '河北省',
		'children': [
			{
				'value': '130100',
				'label': '石家庄市',
				'children': [
					{
						'value': '130102',
						'label': '长安区'
					},
					{
						'value': '130104',
						'label': '桥西区'
					},
					{
						'value': '130105',
						'label': '新华区'
					},
					{
						'value': '130107',
						'label': '井陉矿区'
					},
					{
						'value': '130108',
						'label': '裕华区'
					},
					{
						'value': '130109',
						'label': '藁城区'
					},
					{
						'value': '130110',
						'label': '鹿泉区'
					},
					{
						'value': '130111',
						'label': '栾城区'
					},
					{
						'value': '130121',
						'label': '井陉县'
					},
					{
						'value': '130123',
						'label': '正定县'
					},
					{
						'value': '130125',
						'label': '行唐县'
					},
					{
						'value': '130126',
						'label': '灵寿县'
					},
					{
						'value': '130127',
						'label': '高邑县'
					},
					{
						'value': '130128',
						'label': '深泽县'
					},
					{
						'value': '130129',
						'label': '赞皇县'
					},
					{
						'value': '130130',
						'label': '无极县'
					},
					{
						'value': '130131',
						'label': '平山县'
					},
					{
						'value': '130132',
						'label': '元氏县'
					},
					{
						'value': '130133',
						'label': '赵　县'
					},
					{
						'value': '130181',
						'label': '辛集市'
					},
					{
						'value': '130182',
						'label': '藁城市'
					},
					{
						'value': '130183',
						'label': '晋州市'
					},
					{
						'value': '130184',
						'label': '新乐市'
					}
				]
			},
			{
				'value': '130200',
				'label': '唐山市',
				'children': [
					{
						'value': '130202',
						'label': '路南区'
					},
					{
						'value': '130203',
						'label': '路北区'
					},
					{
						'value': '130204',
						'label': '古冶区'
					},
					{
						'value': '130205',
						'label': '开平区'
					},
					{
						'value': '130207',
						'label': '丰南区'
					},
					{
						'value': '130208',
						'label': '丰润区'
					},
					{
						'value': '130209',
						'label': '曹妃甸区'
					},
					{
						'value': '130223',
						'label': '滦　县'
					},
					{
						'value': '130224',
						'label': '滦南县'
					},
					{
						'value': '130225',
						'label': '乐亭县'
					},
					{
						'value': '130227',
						'label': '迁西县'
					},
					{
						'value': '130229',
						'label': '玉田县'
					},
					{
						'value': '130281',
						'label': '遵化市'
					},
					{
						'value': '130283',
						'label': '迁安市'
					}
				]
			},
			{
				'value': '130300',
				'label': '秦皇岛市',
				'children': [
					{
						'value': '130302',
						'label': '海港区'
					},
					{
						'value': '130303',
						'label': '山海关区'
					},
					{
						'value': '130304',
						'label': '北戴河区'
					},
					{
						'value': '130306',
						'label': '抚宁区'
					},
					{
						'value': '130321',
						'label': '青龙满族自治县'
					},
					{
						'value': '130322',
						'label': '昌黎县'
					},
					{
						'value': '130324',
						'label': '卢龙县'
					}
				]
			},
			{
				'value': '130400',
				'label': '邯郸市',
				'children': [
					{
						'value': '130402',
						'label': '邯山区'
					},
					{
						'value': '130403',
						'label': '丛台区'
					},
					{
						'value': '130404',
						'label': '复兴区'
					},
					{
						'value': '130406',
						'label': '峰峰矿区'
					},
					{
						'value': '130421',
						'label': '邯郸县'
					},
					{
						'value': '130423',
						'label': '临漳县'
					},
					{
						'value': '130424',
						'label': '成安县'
					},
					{
						'value': '130425',
						'label': '大名县'
					},
					{
						'value': '130426',
						'label': '涉　县'
					},
					{
						'value': '130427',
						'label': '磁　县'
					},
					{
						'value': '130428',
						'label': '肥乡县'
					},
					{
						'value': '130429',
						'label': '永年县'
					},
					{
						'value': '130430',
						'label': '邱　县'
					},
					{
						'value': '130431',
						'label': '鸡泽县'
					},
					{
						'value': '130432',
						'label': '广平县'
					},
					{
						'value': '130433',
						'label': '馆陶县'
					},
					{
						'value': '130434',
						'label': '魏　县'
					},
					{
						'value': '130435',
						'label': '曲周县'
					},
					{
						'value': '130481',
						'label': '武安市'
					}
				]
			},
			{
				'value': '130500',
				'label': '邢台市',
				'children': [
					{
						'value': '130502',
						'label': '桥东区'
					},
					{
						'value': '130503',
						'label': '桥西区'
					},
					{
						'value': '130521',
						'label': '邢台县'
					},
					{
						'value': '130522',
						'label': '临城县'
					},
					{
						'value': '130523',
						'label': '内丘县'
					},
					{
						'value': '130524',
						'label': '柏乡县'
					},
					{
						'value': '130525',
						'label': '隆尧县'
					},
					{
						'value': '130526',
						'label': '任　县'
					},
					{
						'value': '130527',
						'label': '南和县'
					},
					{
						'value': '130528',
						'label': '宁晋县'
					},
					{
						'value': '130529',
						'label': '巨鹿县'
					},
					{
						'value': '130530',
						'label': '新河县'
					},
					{
						'value': '130531',
						'label': '广宗县'
					},
					{
						'value': '130532',
						'label': '平乡县'
					},
					{
						'value': '130533',
						'label': '威　县'
					},
					{
						'value': '130534',
						'label': '清河县'
					},
					{
						'value': '130535',
						'label': '临西县'
					},
					{
						'value': '130581',
						'label': '南宫市'
					},
					{
						'value': '130582',
						'label': '沙河市'
					}
				]
			},
			{
				'value': '130600',
				'label': '保定市',
				'children': [
					{
						'value': '130602',
						'label': '竞秀区'
					},
					{
						'value': '130606',
						'label': '莲池区'
					},
					{
						'value': '130607',
						'label': '满城区'
					},
					{
						'value': '130608',
						'label': '清苑区'
					},
					{
						'value': '130609',
						'label': '徐水区'
					},
					{
						'value': '130623',
						'label': '涞水县'
					},
					{
						'value': '130624',
						'label': '阜平县'
					},
					{
						'value': '130626',
						'label': '定兴县'
					},
					{
						'value': '130627',
						'label': '唐　县'
					},
					{
						'value': '130628',
						'label': '高阳县'
					},
					{
						'value': '130629',
						'label': '容城县'
					},
					{
						'value': '130630',
						'label': '涞源县'
					},
					{
						'value': '130631',
						'label': '望都县'
					},
					{
						'value': '130632',
						'label': '安新县'
					},
					{
						'value': '130633',
						'label': '易　县'
					},
					{
						'value': '130634',
						'label': '曲阳县'
					},
					{
						'value': '130635',
						'label': '蠡　县'
					},
					{
						'value': '130636',
						'label': '顺平县'
					},
					{
						'value': '130637',
						'label': '博野县'
					},
					{
						'value': '130638',
						'label': '雄　县'
					},
					{
						'value': '130681',
						'label': '涿州市'
					},
					{
						'value': '130683',
						'label': '安国市'
					},
					{
						'value': '130684',
						'label': '高碑店市'
					}
				]
			},
			{
				'value': '130700',
				'label': '张家口市',
				'children': [
					{
						'value': '130702',
						'label': '桥东区'
					},
					{
						'value': '130703',
						'label': '桥西区'
					},
					{
						'value': '130705',
						'label': '宣化区'
					},
					{
						'value': '130706',
						'label': '下花园区'
					},
					{
						'value': '130721',
						'label': '宣化县'
					},
					{
						'value': '130722',
						'label': '张北县'
					},
					{
						'value': '130723',
						'label': '康保县'
					},
					{
						'value': '130724',
						'label': '沽源县'
					},
					{
						'value': '130725',
						'label': '尚义县'
					},
					{
						'value': '130726',
						'label': '蔚　县'
					},
					{
						'value': '130727',
						'label': '阳原县'
					},
					{
						'value': '130728',
						'label': '怀安县'
					},
					{
						'value': '130729',
						'label': '万全县'
					},
					{
						'value': '130730',
						'label': '怀来县'
					},
					{
						'value': '130731',
						'label': '涿鹿县'
					},
					{
						'value': '130732',
						'label': '赤城县'
					},
					{
						'value': '130733',
						'label': '崇礼县'
					}
				]
			},
			{
				'value': '130800',
				'label': '承德市',
				'children': [
					{
						'value': '130802',
						'label': '双桥区'
					},
					{
						'value': '130803',
						'label': '双滦区'
					},
					{
						'value': '130804',
						'label': '鹰手营子矿区'
					},
					{
						'value': '130821',
						'label': '承德县'
					},
					{
						'value': '130822',
						'label': '兴隆县'
					},
					{
						'value': '130823',
						'label': '平泉县'
					},
					{
						'value': '130824',
						'label': '滦平县'
					},
					{
						'value': '130825',
						'label': '隆化县'
					},
					{
						'value': '130826',
						'label': '丰宁满族自治县'
					},
					{
						'value': '130827',
						'label': '宽城满族自治县'
					},
					{
						'value': '130828',
						'label': '围场满族蒙古族自治县'
					}
				]
			},
			{
				'value': '130900',
				'label': '沧州市',
				'children': [
					{
						'value': '130902',
						'label': '新华区'
					},
					{
						'value': '130903',
						'label': '运河区'
					},
					{
						'value': '130921',
						'label': '沧　县'
					},
					{
						'value': '130922',
						'label': '青　县'
					},
					{
						'value': '130923',
						'label': '东光县'
					},
					{
						'value': '130924',
						'label': '海兴县'
					},
					{
						'value': '130925',
						'label': '盐山县'
					},
					{
						'value': '130926',
						'label': '肃宁县'
					},
					{
						'value': '130927',
						'label': '南皮县'
					},
					{
						'value': '130928',
						'label': '吴桥县'
					},
					{
						'value': '130929',
						'label': '献　县'
					},
					{
						'value': '130930',
						'label': '孟村回族自治县'
					},
					{
						'value': '130981',
						'label': '泊头市'
					},
					{
						'value': '130982',
						'label': '任丘市'
					},
					{
						'value': '130983',
						'label': '黄骅市'
					},
					{
						'value': '130984',
						'label': '河间市'
					}
				]
			},
			{
				'value': '131000',
				'label': '廊坊市',
				'children': [
					{
						'value': '131002',
						'label': '安次区'
					},
					{
						'value': '131003',
						'label': '广阳区'
					},
					{
						'value': '131022',
						'label': '固安县'
					},
					{
						'value': '131023',
						'label': '永清县'
					},
					{
						'value': '131024',
						'label': '香河县'
					},
					{
						'value': '131025',
						'label': '大城县'
					},
					{
						'value': '131026',
						'label': '文安县'
					},
					{
						'value': '131028',
						'label': '大厂回族自治县'
					},
					{
						'value': '131081',
						'label': '霸州市'
					},
					{
						'value': '131082',
						'label': '三河市'
					}
				]
			},
			{
				'value': '131100',
				'label': '衡水市',
				'children': [
					{
						'value': '131102',
						'label': '桃城区'
					},
					{
						'value': '131121',
						'label': '枣强县'
					},
					{
						'value': '131122',
						'label': '武邑县'
					},
					{
						'value': '131123',
						'label': '武强县'
					},
					{
						'value': '131124',
						'label': '饶阳县'
					},
					{
						'value': '131125',
						'label': '安平县'
					},
					{
						'value': '131126',
						'label': '故城县'
					},
					{
						'value': '131127',
						'label': '景　县'
					},
					{
						'value': '131128',
						'label': '阜城县'
					},
					{
						'value': '131181',
						'label': '冀州市'
					},
					{
						'value': '131182',
						'label': '深州市'
					}
				]
			},
			{
				'value': '139000',
				'label': '省直辖县级行政区划',
				'children': [
					{
						'value': '139001',
						'label': '定州市'
					},
					{
						'value': '139002',
						'label': '辛集市'
					}
				]
			}
		]
	},
	{
		'value': '140000',
		'label': '山西省',
		'children': [
			{
				'value': '140100',
				'label': '太原市',
				'children': [
					{
						'value': '140105',
						'label': '小店区'
					},
					{
						'value': '140106',
						'label': '迎泽区'
					},
					{
						'value': '140107',
						'label': '杏花岭区'
					},
					{
						'value': '140108',
						'label': '尖草坪区'
					},
					{
						'value': '140109',
						'label': '万柏林区'
					},
					{
						'value': '140110',
						'label': '晋源区'
					},
					{
						'value': '140121',
						'label': '清徐县'
					},
					{
						'value': '140122',
						'label': '阳曲县'
					},
					{
						'value': '140123',
						'label': '娄烦县'
					},
					{
						'value': '140181',
						'label': '古交市'
					}
				]
			},
			{
				'value': '140200',
				'label': '大同市',
				'children': [
					{
						'value': '140202',
						'label': '城　区'
					},
					{
						'value': '140203',
						'label': '矿　区'
					},
					{
						'value': '140211',
						'label': '南郊区'
					},
					{
						'value': '140212',
						'label': '新荣区'
					},
					{
						'value': '140221',
						'label': '阳高县'
					},
					{
						'value': '140222',
						'label': '天镇县'
					},
					{
						'value': '140223',
						'label': '广灵县'
					},
					{
						'value': '140224',
						'label': '灵丘县'
					},
					{
						'value': '140225',
						'label': '浑源县'
					},
					{
						'value': '140226',
						'label': '左云县'
					},
					{
						'value': '140227',
						'label': '大同县'
					}
				]
			},
			{
				'value': '140300',
				'label': '阳泉市',
				'children': [
					{
						'value': '140302',
						'label': '城　区'
					},
					{
						'value': '140303',
						'label': '矿　区'
					},
					{
						'value': '140311',
						'label': '郊　区'
					},
					{
						'value': '140321',
						'label': '平定县'
					},
					{
						'value': '140322',
						'label': '盂　县'
					}
				]
			},
			{
				'value': '140400',
				'label': '长治市',
				'children': [
					{
						'value': '140402',
						'label': '城　区'
					},
					{
						'value': '140411',
						'label': '郊　区'
					},
					{
						'value': '140421',
						'label': '长治县'
					},
					{
						'value': '140423',
						'label': '襄垣县'
					},
					{
						'value': '140424',
						'label': '屯留县'
					},
					{
						'value': '140425',
						'label': '平顺县'
					},
					{
						'value': '140426',
						'label': '黎城县'
					},
					{
						'value': '140427',
						'label': '壶关县'
					},
					{
						'value': '140428',
						'label': '长子县'
					},
					{
						'value': '140429',
						'label': '武乡县'
					},
					{
						'value': '140430',
						'label': '沁　县'
					},
					{
						'value': '140431',
						'label': '沁源县'
					},
					{
						'value': '140481',
						'label': '潞城市'
					}
				]
			},
			{
				'value': '140500',
				'label': '晋城市',
				'children': [
					{
						'value': '140502',
						'label': '城　区'
					},
					{
						'value': '140521',
						'label': '沁水县'
					},
					{
						'value': '140522',
						'label': '阳城县'
					},
					{
						'value': '140524',
						'label': '陵川县'
					},
					{
						'value': '140525',
						'label': '泽州县'
					},
					{
						'value': '140581',
						'label': '高平市'
					}
				]
			},
			{
				'value': '140600',
				'label': '朔州市',
				'children': [
					{
						'value': '140602',
						'label': '朔城区'
					},
					{
						'value': '140603',
						'label': '平鲁区'
					},
					{
						'value': '140621',
						'label': '山阴县'
					},
					{
						'value': '140622',
						'label': '应　县'
					},
					{
						'value': '140623',
						'label': '右玉县'
					},
					{
						'value': '140624',
						'label': '怀仁县'
					}
				]
			},
			{
				'value': '140700',
				'label': '晋中市',
				'children': [
					{
						'value': '140702',
						'label': '榆次区'
					},
					{
						'value': '140721',
						'label': '榆社县'
					},
					{
						'value': '140722',
						'label': '左权县'
					},
					{
						'value': '140723',
						'label': '和顺县'
					},
					{
						'value': '140724',
						'label': '昔阳县'
					},
					{
						'value': '140725',
						'label': '寿阳县'
					},
					{
						'value': '140726',
						'label': '太谷县'
					},
					{
						'value': '140727',
						'label': '祁　县'
					},
					{
						'value': '140728',
						'label': '平遥县'
					},
					{
						'value': '140729',
						'label': '灵石县'
					},
					{
						'value': '140781',
						'label': '介休市'
					}
				]
			},
			{
				'value': '140800',
				'label': '运城市',
				'children': [
					{
						'value': '140802',
						'label': '盐湖区'
					},
					{
						'value': '140821',
						'label': '临猗县'
					},
					{
						'value': '140822',
						'label': '万荣县'
					},
					{
						'value': '140823',
						'label': '闻喜县'
					},
					{
						'value': '140824',
						'label': '稷山县'
					},
					{
						'value': '140825',
						'label': '新绛县'
					},
					{
						'value': '140826',
						'label': '绛　县'
					},
					{
						'value': '140827',
						'label': '垣曲县'
					},
					{
						'value': '140828',
						'label': '夏　县'
					},
					{
						'value': '140829',
						'label': '平陆县'
					},
					{
						'value': '140830',
						'label': '芮城县'
					},
					{
						'value': '140881',
						'label': '永济市'
					},
					{
						'value': '140882',
						'label': '河津市'
					}
				]
			},
			{
				'value': '140900',
				'label': '忻州市',
				'children': [
					{
						'value': '140902',
						'label': '忻府区'
					},
					{
						'value': '140921',
						'label': '定襄县'
					},
					{
						'value': '140922',
						'label': '五台县'
					},
					{
						'value': '140923',
						'label': '代　县'
					},
					{
						'value': '140924',
						'label': '繁峙县'
					},
					{
						'value': '140925',
						'label': '宁武县'
					},
					{
						'value': '140926',
						'label': '静乐县'
					},
					{
						'value': '140927',
						'label': '神池县'
					},
					{
						'value': '140928',
						'label': '五寨县'
					},
					{
						'value': '140929',
						'label': '岢岚县'
					},
					{
						'value': '140930',
						'label': '河曲县'
					},
					{
						'value': '140931',
						'label': '保德县'
					},
					{
						'value': '140932',
						'label': '偏关县'
					},
					{
						'value': '140981',
						'label': '原平市'
					}
				]
			},
			{
				'value': '141000',
				'label': '临汾市',
				'children': [
					{
						'value': '141002',
						'label': '尧都区'
					},
					{
						'value': '141021',
						'label': '曲沃县'
					},
					{
						'value': '141022',
						'label': '翼城县'
					},
					{
						'value': '141023',
						'label': '襄汾县'
					},
					{
						'value': '141024',
						'label': '洪洞县'
					},
					{
						'value': '141025',
						'label': '古　县'
					},
					{
						'value': '141026',
						'label': '安泽县'
					},
					{
						'value': '141027',
						'label': '浮山县'
					},
					{
						'value': '141028',
						'label': '吉　县'
					},
					{
						'value': '141029',
						'label': '乡宁县'
					},
					{
						'value': '141030',
						'label': '大宁县'
					},
					{
						'value': '141031',
						'label': '隰　县'
					},
					{
						'value': '141032',
						'label': '永和县'
					},
					{
						'value': '141033',
						'label': '蒲　县'
					},
					{
						'value': '141034',
						'label': '汾西县'
					},
					{
						'value': '141081',
						'label': '侯马市'
					},
					{
						'value': '141082',
						'label': '霍州市'
					}
				]
			},
			{
				'value': '141100',
				'label': '吕梁市',
				'children': [
					{
						'value': '141102',
						'label': '离石区'
					},
					{
						'value': '141121',
						'label': '文水县'
					},
					{
						'value': '141122',
						'label': '交城县'
					},
					{
						'value': '141123',
						'label': '兴　县'
					},
					{
						'value': '141124',
						'label': '临　县'
					},
					{
						'value': '141125',
						'label': '柳林县'
					},
					{
						'value': '141126',
						'label': '石楼县'
					},
					{
						'value': '141127',
						'label': '岚　县'
					},
					{
						'value': '141128',
						'label': '方山县'
					},
					{
						'value': '141129',
						'label': '中阳县'
					},
					{
						'value': '141130',
						'label': '交口县'
					},
					{
						'value': '141181',
						'label': '孝义市'
					},
					{
						'value': '141182',
						'label': '汾阳市'
					}
				]
			}
		]
	},
	{
		'value': '150000',
		'label': '内蒙古自治区',
		'children': [
			{
				'value': '150100',
				'label': '呼和浩特市',
				'children': [
					{
						'value': '150102',
						'label': '新城区'
					},
					{
						'value': '150103',
						'label': '回民区'
					},
					{
						'value': '150104',
						'label': '玉泉区'
					},
					{
						'value': '150105',
						'label': '赛罕区'
					},
					{
						'value': '150121',
						'label': '土默特左旗'
					},
					{
						'value': '150122',
						'label': '托克托县'
					},
					{
						'value': '150123',
						'label': '和林格尔县'
					},
					{
						'value': '150124',
						'label': '清水河县'
					},
					{
						'value': '150125',
						'label': '武川县'
					}
				]
			},
			{
				'value': '150200',
				'label': '包头市',
				'children': [
					{
						'value': '150202',
						'label': '东河区'
					},
					{
						'value': '150203',
						'label': '昆都仑区'
					},
					{
						'value': '150204',
						'label': '青山区'
					},
					{
						'value': '150205',
						'label': '石拐区'
					},
					{
						'value': '150206',
						'label': '白云鄂博矿区'
					},
					{
						'value': '150207',
						'label': '九原区'
					},
					{
						'value': '150221',
						'label': '土默特右旗'
					},
					{
						'value': '150222',
						'label': '固阳县'
					},
					{
						'value': '150223',
						'label': '达尔罕茂明安联合旗'
					}
				]
			},
			{
				'value': '150300',
				'label': '乌海市',
				'children': [
					{
						'value': '150302',
						'label': '海勃湾区'
					},
					{
						'value': '150303',
						'label': '海南区'
					},
					{
						'value': '150304',
						'label': '乌达区'
					}
				]
			},
			{
				'value': '150400',
				'label': '赤峰市',
				'children': [
					{
						'value': '150402',
						'label': '红山区'
					},
					{
						'value': '150403',
						'label': '元宝山区'
					},
					{
						'value': '150404',
						'label': '松山区'
					},
					{
						'value': '150421',
						'label': '阿鲁科尔沁旗'
					},
					{
						'value': '150422',
						'label': '巴林左旗'
					},
					{
						'value': '150423',
						'label': '巴林右旗'
					},
					{
						'value': '150424',
						'label': '林西县'
					},
					{
						'value': '150425',
						'label': '克什克腾旗'
					},
					{
						'value': '150426',
						'label': '翁牛特旗'
					},
					{
						'value': '150428',
						'label': '喀喇沁旗'
					},
					{
						'value': '150429',
						'label': '宁城县'
					},
					{
						'value': '150430',
						'label': '敖汉旗'
					}
				]
			},
			{
				'value': '150500',
				'label': '通辽市',
				'children': [
					{
						'value': '150502',
						'label': '科尔沁区'
					},
					{
						'value': '150521',
						'label': '科尔沁左翼中旗'
					},
					{
						'value': '150522',
						'label': '科尔沁左翼后旗'
					},
					{
						'value': '150523',
						'label': '开鲁县'
					},
					{
						'value': '150524',
						'label': '库伦旗'
					},
					{
						'value': '150525',
						'label': '奈曼旗'
					},
					{
						'value': '150526',
						'label': '扎鲁特旗'
					},
					{
						'value': '150581',
						'label': '霍林郭勒市'
					}
				]
			},
			{
				'value': '150600',
				'label': '鄂尔多斯市',
				'children': [
					{
						'value': '150602',
						'label': '东胜区'
					},
					{
						'value': '150621',
						'label': '达拉特旗'
					},
					{
						'value': '150622',
						'label': '准格尔旗'
					},
					{
						'value': '150623',
						'label': '鄂托克前旗'
					},
					{
						'value': '150624',
						'label': '鄂托克旗'
					},
					{
						'value': '150625',
						'label': '杭锦旗'
					},
					{
						'value': '150626',
						'label': '乌审旗'
					},
					{
						'value': '150627',
						'label': '伊金霍洛旗'
					}
				]
			},
			{
				'value': '150700',
				'label': '呼伦贝尔市',
				'children': [
					{
						'value': '150702',
						'label': '海拉尔区'
					},
					{
						'value': '150703',
						'label': '扎赉诺尔区'
					},
					{
						'value': '150721',
						'label': '阿荣旗'
					},
					{
						'value': '150722',
						'label': '莫力达瓦达斡尔族自治旗'
					},
					{
						'value': '150723',
						'label': '鄂伦春自治旗'
					},
					{
						'value': '150724',
						'label': '鄂温克族自治旗'
					},
					{
						'value': '150725',
						'label': '陈巴尔虎旗'
					},
					{
						'value': '150726',
						'label': '新巴尔虎左旗'
					},
					{
						'value': '150727',
						'label': '新巴尔虎右旗'
					},
					{
						'value': '150781',
						'label': '满洲里市'
					},
					{
						'value': '150782',
						'label': '牙克石市'
					},
					{
						'value': '150783',
						'label': '扎兰屯市'
					},
					{
						'value': '150784',
						'label': '额尔古纳市'
					},
					{
						'value': '150785',
						'label': '根河市'
					}
				]
			},
			{
				'value': '150800',
				'label': '巴彦淖尔市',
				'children': [
					{
						'value': '150802',
						'label': '临河区'
					},
					{
						'value': '150821',
						'label': '五原县'
					},
					{
						'value': '150822',
						'label': '磴口县'
					},
					{
						'value': '150823',
						'label': '乌拉特前旗'
					},
					{
						'value': '150824',
						'label': '乌拉特中旗'
					},
					{
						'value': '150825',
						'label': '乌拉特后旗'
					},
					{
						'value': '150826',
						'label': '杭锦后旗'
					}
				]
			},
			{
				'value': '150900',
				'label': '乌兰察布市',
				'children': [
					{
						'value': '150902',
						'label': '集宁区'
					},
					{
						'value': '150921',
						'label': '卓资县'
					},
					{
						'value': '150922',
						'label': '化德县'
					},
					{
						'value': '150923',
						'label': '商都县'
					},
					{
						'value': '150924',
						'label': '兴和县'
					},
					{
						'value': '150925',
						'label': '凉城县'
					},
					{
						'value': '150926',
						'label': '察哈尔右翼前旗'
					},
					{
						'value': '150927',
						'label': '察哈尔右翼中旗'
					},
					{
						'value': '150928',
						'label': '察哈尔右翼后旗'
					},
					{
						'value': '150929',
						'label': '四子王旗'
					},
					{
						'value': '150981',
						'label': '丰镇市'
					}
				]
			},
			{
				'value': '152200',
				'label': '兴安盟',
				'children': [
					{
						'value': '152201',
						'label': '乌兰浩特市'
					},
					{
						'value': '152202',
						'label': '阿尔山市'
					},
					{
						'value': '152221',
						'label': '科尔沁右翼前旗'
					},
					{
						'value': '152222',
						'label': '科尔沁右翼中旗'
					},
					{
						'value': '152223',
						'label': '扎赉特旗'
					},
					{
						'value': '152224',
						'label': '突泉县'
					}
				]
			},
			{
				'value': '152500',
				'label': '锡林郭勒盟',
				'children': [
					{
						'value': '152501',
						'label': '二连浩特市'
					},
					{
						'value': '152502',
						'label': '锡林浩特市'
					},
					{
						'value': '152522',
						'label': '阿巴嘎旗'
					},
					{
						'value': '152523',
						'label': '苏尼特左旗'
					},
					{
						'value': '152524',
						'label': '苏尼特右旗'
					},
					{
						'value': '152525',
						'label': '东乌珠穆沁旗'
					},
					{
						'value': '152526',
						'label': '西乌珠穆沁旗'
					},
					{
						'value': '152527',
						'label': '太仆寺旗'
					},
					{
						'value': '152528',
						'label': '镶黄旗'
					},
					{
						'value': '152529',
						'label': '正镶白旗'
					},
					{
						'value': '152530',
						'label': '正蓝旗'
					},
					{
						'value': '152531',
						'label': '多伦县'
					}
				]
			},
			{
				'value': '152900',
				'label': '阿拉善盟',
				'children': [
					{
						'value': '152921',
						'label': '阿拉善左旗'
					},
					{
						'value': '152922',
						'label': '阿拉善右旗'
					},
					{
						'value': '152923',
						'label': '额济纳旗'
					}
				]
			}
		]
	},
	{
		'value': '210000',
		'label': '辽宁省',
		'children': [
			{
				'value': '210100',
				'label': '沈阳市',
				'children': [
					{
						'value': '210102',
						'label': '和平区'
					},
					{
						'value': '210103',
						'label': '沈河区'
					},
					{
						'value': '210104',
						'label': '大东区'
					},
					{
						'value': '210105',
						'label': '皇姑区'
					},
					{
						'value': '210106',
						'label': '铁西区'
					},
					{
						'value': '210111',
						'label': '苏家屯区'
					},
					{
						'value': '210112',
						'label': '浑南区'
					},
					{
						'value': '210113',
						'label': '沈北新区'
					},
					{
						'value': '210114',
						'label': '于洪区'
					},
					{
						'value': '210122',
						'label': '辽中县'
					},
					{
						'value': '210123',
						'label': '康平县'
					},
					{
						'value': '210124',
						'label': '法库县'
					},
					{
						'value': '210181',
						'label': '新民市'
					}
				]
			},
			{
				'value': '210200',
				'label': '大连市',
				'children': [
					{
						'value': '210202',
						'label': '中山区'
					},
					{
						'value': '210203',
						'label': '西岗区'
					},
					{
						'value': '210204',
						'label': '沙河口区'
					},
					{
						'value': '210211',
						'label': '甘井子区'
					},
					{
						'value': '210212',
						'label': '旅顺口区'
					},
					{
						'value': '210213',
						'label': '金州区'
					},
					{
						'value': '210224',
						'label': '长海县'
					},
					{
						'value': '210281',
						'label': '瓦房店市'
					},
					{
						'value': '210282',
						'label': '普兰店市'
					},
					{
						'value': '210283',
						'label': '庄河市'
					}
				]
			},
			{
				'value': '210300',
				'label': '鞍山市',
				'children': [
					{
						'value': '210302',
						'label': '铁东区'
					},
					{
						'value': '210303',
						'label': '铁西区'
					},
					{
						'value': '210304',
						'label': '立山区'
					},
					{
						'value': '210311',
						'label': '千山区'
					},
					{
						'value': '210321',
						'label': '台安县'
					},
					{
						'value': '210323',
						'label': '岫岩满族自治县'
					},
					{
						'value': '210381',
						'label': '海城市'
					}
				]
			},
			{
				'value': '210400',
				'label': '抚顺市',
				'children': [
					{
						'value': '210402',
						'label': '新抚区'
					},
					{
						'value': '210403',
						'label': '东洲区'
					},
					{
						'value': '210404',
						'label': '望花区'
					},
					{
						'value': '210411',
						'label': '顺城区'
					},
					{
						'value': '210421',
						'label': '抚顺县'
					},
					{
						'value': '210422',
						'label': '新宾满族自治县'
					},
					{
						'value': '210423',
						'label': '清原满族自治县'
					}
				]
			},
			{
				'value': '210500',
				'label': '本溪市',
				'children': [
					{
						'value': '210502',
						'label': '平山区'
					},
					{
						'value': '210503',
						'label': '溪湖区'
					},
					{
						'value': '210504',
						'label': '明山区'
					},
					{
						'value': '210505',
						'label': '南芬区'
					},
					{
						'value': '210521',
						'label': '本溪满族自治县'
					},
					{
						'value': '210522',
						'label': '桓仁满族自治县'
					}
				]
			},
			{
				'value': '210600',
				'label': '丹东市',
				'children': [
					{
						'value': '210602',
						'label': '元宝区'
					},
					{
						'value': '210603',
						'label': '振兴区'
					},
					{
						'value': '210604',
						'label': '振安区'
					},
					{
						'value': '210624',
						'label': '宽甸满族自治县'
					},
					{
						'value': '210681',
						'label': '东港市'
					},
					{
						'value': '210682',
						'label': '凤城市'
					}
				]
			},
			{
				'value': '210700',
				'label': '锦州市',
				'children': [
					{
						'value': '210702',
						'label': '古塔区'
					},
					{
						'value': '210703',
						'label': '凌河区'
					},
					{
						'value': '210711',
						'label': '太和区'
					},
					{
						'value': '210726',
						'label': '黑山县'
					},
					{
						'value': '210727',
						'label': '义　县'
					},
					{
						'value': '210781',
						'label': '凌海市'
					},
					{
						'value': '210783',
						'label': '北镇市'
					}
				]
			},
			{
				'value': '210800',
				'label': '营口市',
				'children': [
					{
						'value': '210802',
						'label': '站前区'
					},
					{
						'value': '210803',
						'label': '西市区'
					},
					{
						'value': '210804',
						'label': '鲅鱼圈区'
					},
					{
						'value': '210811',
						'label': '老边区'
					},
					{
						'value': '210881',
						'label': '盖州市'
					},
					{
						'value': '210882',
						'label': '大石桥市'
					}
				]
			},
			{
				'value': '210900',
				'label': '阜新市',
				'children': [
					{
						'value': '210902',
						'label': '海州区'
					},
					{
						'value': '210903',
						'label': '新邱区'
					},
					{
						'value': '210904',
						'label': '太平区'
					},
					{
						'value': '210905',
						'label': '清河门区'
					},
					{
						'value': '210911',
						'label': '细河区'
					},
					{
						'value': '210921',
						'label': '阜新蒙古族自治县'
					},
					{
						'value': '210922',
						'label': '彰武县'
					}
				]
			},
			{
				'value': '211000',
				'label': '辽阳市',
				'children': [
					{
						'value': '211002',
						'label': '白塔区'
					},
					{
						'value': '211003',
						'label': '文圣区'
					},
					{
						'value': '211004',
						'label': '宏伟区'
					},
					{
						'value': '211005',
						'label': '弓长岭区'
					},
					{
						'value': '211011',
						'label': '太子河区'
					},
					{
						'value': '211021',
						'label': '辽阳县'
					},
					{
						'value': '211081',
						'label': '灯塔市'
					}
				]
			},
			{
				'value': '211100',
				'label': '盘锦市',
				'children': [
					{
						'value': '211102',
						'label': '双台子区'
					},
					{
						'value': '211103',
						'label': '兴隆台区'
					},
					{
						'value': '211121',
						'label': '大洼县'
					},
					{
						'value': '211122',
						'label': '盘山县'
					}
				]
			},
			{
				'value': '211200',
				'label': '铁岭市',
				'children': [
					{
						'value': '211202',
						'label': '银州区'
					},
					{
						'value': '211204',
						'label': '清河区'
					},
					{
						'value': '211221',
						'label': '铁岭县'
					},
					{
						'value': '211223',
						'label': '西丰县'
					},
					{
						'value': '211224',
						'label': '昌图县'
					},
					{
						'value': '211281',
						'label': '调兵山市'
					},
					{
						'value': '211282',
						'label': '开原市'
					}
				]
			},
			{
				'value': '211300',
				'label': '朝阳市',
				'children': [
					{
						'value': '211302',
						'label': '双塔区'
					},
					{
						'value': '211303',
						'label': '龙城区'
					},
					{
						'value': '211321',
						'label': '朝阳县'
					},
					{
						'value': '211322',
						'label': '建平县'
					},
					{
						'value': '211324',
						'label': '喀喇沁左翼蒙古族自治县'
					},
					{
						'value': '211381',
						'label': '北票市'
					},
					{
						'value': '211382',
						'label': '凌源市'
					}
				]
			},
			{
				'value': '211400',
				'label': '葫芦岛市',
				'children': [
					{
						'value': '211402',
						'label': '连山区'
					},
					{
						'value': '211403',
						'label': '龙港区'
					},
					{
						'value': '211404',
						'label': '南票区'
					},
					{
						'value': '211421',
						'label': '绥中县'
					},
					{
						'value': '211422',
						'label': '建昌县'
					},
					{
						'value': '211481',
						'label': '兴城市'
					}
				]
			}
		]
	},
	{
		'value': '220000',
		'label': '吉林省',
		'children': [
			{
				'value': '220100',
				'label': '长春市',
				'children': [
					{
						'value': '220102',
						'label': '南关区'
					},
					{
						'value': '220103',
						'label': '宽城区'
					},
					{
						'value': '220104',
						'label': '朝阳区'
					},
					{
						'value': '220105',
						'label': '二道区'
					},
					{
						'value': '220106',
						'label': '绿园区'
					},
					{
						'value': '220112',
						'label': '双阳区'
					},
					{
						'value': '220122',
						'label': '农安县'
					},
					{
						'value': '220181',
						'label': '九台市'
					},
					{
						'value': '220182',
						'label': '榆树市'
					},
					{
						'value': '220183',
						'label': '德惠市'
					}
				]
			},
			{
				'value': '220200',
				'label': '吉林市',
				'children': [
					{
						'value': '220202',
						'label': '昌邑区'
					},
					{
						'value': '220203',
						'label': '龙潭区'
					},
					{
						'value': '220204',
						'label': '船营区'
					},
					{
						'value': '220211',
						'label': '丰满区'
					},
					{
						'value': '220221',
						'label': '永吉县'
					},
					{
						'value': '220281',
						'label': '蛟河市'
					},
					{
						'value': '220282',
						'label': '桦甸市'
					},
					{
						'value': '220283',
						'label': '舒兰市'
					},
					{
						'value': '220284',
						'label': '磐石市'
					}
				]
			},
			{
				'value': '220300',
				'label': '四平市',
				'children': [
					{
						'value': '220302',
						'label': '铁西区'
					},
					{
						'value': '220303',
						'label': '铁东区'
					},
					{
						'value': '220322',
						'label': '梨树县'
					},
					{
						'value': '220323',
						'label': '伊通满族自治县'
					},
					{
						'value': '220381',
						'label': '公主岭市'
					},
					{
						'value': '220382',
						'label': '双辽市'
					}
				]
			},
			{
				'value': '220400',
				'label': '辽源市',
				'children': [
					{
						'value': '220402',
						'label': '龙山区'
					},
					{
						'value': '220403',
						'label': '西安区'
					},
					{
						'value': '220421',
						'label': '东丰县'
					},
					{
						'value': '220422',
						'label': '东辽县'
					}
				]
			},
			{
				'value': '220500',
				'label': '通化市',
				'children': [
					{
						'value': '220502',
						'label': '东昌区'
					},
					{
						'value': '220503',
						'label': '二道江区'
					},
					{
						'value': '220521',
						'label': '通化县'
					},
					{
						'value': '220523',
						'label': '辉南县'
					},
					{
						'value': '220524',
						'label': '柳河县'
					},
					{
						'value': '220581',
						'label': '梅河口市'
					},
					{
						'value': '220582',
						'label': '集安市'
					}
				]
			},
			{
				'value': '220600',
				'label': '白山市',
				'children': [
					{
						'value': '220602',
						'label': '浑江区'
					},
					{
						'value': '220605',
						'label': '江源区'
					},
					{
						'value': '220621',
						'label': '抚松县'
					},
					{
						'value': '220622',
						'label': '靖宇县'
					},
					{
						'value': '220623',
						'label': '长白朝鲜族自治县'
					},
					{
						'value': '220681',
						'label': '临江市'
					}
				]
			},
			{
				'value': '220700',
				'label': '松原市',
				'children': [
					{
						'value': '220702',
						'label': '宁江区'
					},
					{
						'value': '220721',
						'label': '前郭尔罗斯蒙古族自治县'
					},
					{
						'value': '220722',
						'label': '长岭县'
					},
					{
						'value': '220723',
						'label': '乾安县'
					},
					{
						'value': '220724',
						'label': '扶余县'
					}
				]
			},
			{
				'value': '220800',
				'label': '白城市',
				'children': [
					{
						'value': '220802',
						'label': '洮北区'
					},
					{
						'value': '220821',
						'label': '镇赉县'
					},
					{
						'value': '220822',
						'label': '通榆县'
					},
					{
						'value': '220881',
						'label': '洮南市'
					},
					{
						'value': '220882',
						'label': '大安市'
					}
				]
			},
			{
				'value': '222400',
				'label': '延边朝鲜族自治州',
				'children': [
					{
						'value': '222401',
						'label': '延吉市'
					},
					{
						'value': '222402',
						'label': '图们市'
					},
					{
						'value': '222403',
						'label': '敦化市'
					},
					{
						'value': '222404',
						'label': '珲春市'
					},
					{
						'value': '222405',
						'label': '龙井市'
					},
					{
						'value': '222406',
						'label': '和龙市'
					},
					{
						'value': '222424',
						'label': '汪清县'
					},
					{
						'value': '222426',
						'label': '安图县'
					}
				]
			}
		]
	},
	{
		'value': '230000',
		'label': '黑龙江省',
		'children': [
			{
				'value': '230100',
				'label': '哈尔滨市',
				'children': [
					{
						'value': '230102',
						'label': '道里区'
					},
					{
						'value': '230103',
						'label': '南岗区'
					},
					{
						'value': '230104',
						'label': '道外区'
					},
					{
						'value': '230106',
						'label': '香坊区'
					},
					{
						'value': '230108',
						'label': '平房区'
					},
					{
						'value': '230109',
						'label': '松北区'
					},
					{
						'value': '230111',
						'label': '呼兰区'
					},
					{
						'value': '230123',
						'label': '依兰县'
					},
					{
						'value': '230124',
						'label': '方正县'
					},
					{
						'value': '230125',
						'label': '宾　县'
					},
					{
						'value': '230126',
						'label': '巴彦县'
					},
					{
						'value': '230127',
						'label': '木兰县'
					},
					{
						'value': '230128',
						'label': '通河县'
					},
					{
						'value': '230129',
						'label': '延寿县'
					},
					{
						'value': '230181',
						'label': '阿城市'
					},
					{
						'value': '230182',
						'label': '双城市'
					},
					{
						'value': '230183',
						'label': '尚志市'
					},
					{
						'value': '230184',
						'label': '五常市'
					}
				]
			},
			{
				'value': '230200',
				'label': '齐齐哈尔市',
				'children': [
					{
						'value': '230202',
						'label': '龙沙区'
					},
					{
						'value': '230203',
						'label': '建华区'
					},
					{
						'value': '230204',
						'label': '铁锋区'
					},
					{
						'value': '230205',
						'label': '昂昂溪区'
					},
					{
						'value': '230206',
						'label': '富拉尔基区'
					},
					{
						'value': '230207',
						'label': '碾子山区'
					},
					{
						'value': '230208',
						'label': '梅里斯达斡尔族区'
					},
					{
						'value': '230221',
						'label': '龙江县'
					},
					{
						'value': '230223',
						'label': '依安县'
					},
					{
						'value': '230224',
						'label': '泰来县'
					},
					{
						'value': '230225',
						'label': '甘南县'
					},
					{
						'value': '230227',
						'label': '富裕县'
					},
					{
						'value': '230229',
						'label': '克山县'
					},
					{
						'value': '230230',
						'label': '克东县'
					},
					{
						'value': '230231',
						'label': '拜泉县'
					},
					{
						'value': '230281',
						'label': '讷河市'
					}
				]
			},
			{
				'value': '230300',
				'label': '鸡西市',
				'children': [
					{
						'value': '230302',
						'label': '鸡冠区'
					},
					{
						'value': '230303',
						'label': '恒山区'
					},
					{
						'value': '230304',
						'label': '滴道区'
					},
					{
						'value': '230305',
						'label': '梨树区'
					},
					{
						'value': '230306',
						'label': '城子河区'
					},
					{
						'value': '230307',
						'label': '麻山区'
					},
					{
						'value': '230321',
						'label': '鸡东县'
					},
					{
						'value': '230381',
						'label': '虎林市'
					},
					{
						'value': '230382',
						'label': '密山市'
					}
				]
			},
			{
				'value': '230400',
				'label': '鹤岗市',
				'children': [
					{
						'value': '230402',
						'label': '向阳区'
					},
					{
						'value': '230403',
						'label': '工农区'
					},
					{
						'value': '230404',
						'label': '南山区'
					},
					{
						'value': '230405',
						'label': '兴安区'
					},
					{
						'value': '230406',
						'label': '东山区'
					},
					{
						'value': '230407',
						'label': '兴山区'
					},
					{
						'value': '230421',
						'label': '萝北县'
					},
					{
						'value': '230422',
						'label': '绥滨县'
					}
				]
			},
			{
				'value': '230500',
				'label': '双鸭山市',
				'children': [
					{
						'value': '230502',
						'label': '尖山区'
					},
					{
						'value': '230503',
						'label': '岭东区'
					},
					{
						'value': '230505',
						'label': '四方台区'
					},
					{
						'value': '230506',
						'label': '宝山区'
					},
					{
						'value': '230521',
						'label': '集贤县'
					},
					{
						'value': '230522',
						'label': '友谊县'
					},
					{
						'value': '230523',
						'label': '宝清县'
					},
					{
						'value': '230524',
						'label': '饶河县'
					}
				]
			},
			{
				'value': '230600',
				'label': '大庆市',
				'children': [
					{
						'value': '230602',
						'label': '萨尔图区'
					},
					{
						'value': '230603',
						'label': '龙凤区'
					},
					{
						'value': '230604',
						'label': '让胡路区'
					},
					{
						'value': '230605',
						'label': '红岗区'
					},
					{
						'value': '230606',
						'label': '大同区'
					},
					{
						'value': '230621',
						'label': '肇州县'
					},
					{
						'value': '230622',
						'label': '肇源县'
					},
					{
						'value': '230623',
						'label': '林甸县'
					},
					{
						'value': '230624',
						'label': '杜尔伯特蒙古族自治县'
					}
				]
			},
			{
				'value': '230700',
				'label': '伊春市',
				'children': [
					{
						'value': '230702',
						'label': '伊春区'
					},
					{
						'value': '230703',
						'label': '南岔区'
					},
					{
						'value': '230704',
						'label': '友好区'
					},
					{
						'value': '230705',
						'label': '西林区'
					},
					{
						'value': '230706',
						'label': '翠峦区'
					},
					{
						'value': '230707',
						'label': '新青区'
					},
					{
						'value': '230708',
						'label': '美溪区'
					},
					{
						'value': '230709',
						'label': '金山屯区'
					},
					{
						'value': '230710',
						'label': '五营区'
					},
					{
						'value': '230711',
						'label': '乌马河区'
					},
					{
						'value': '230712',
						'label': '汤旺河区'
					},
					{
						'value': '230713',
						'label': '带岭区'
					},
					{
						'value': '230714',
						'label': '乌伊岭区'
					},
					{
						'value': '230715',
						'label': '红星区'
					},
					{
						'value': '230716',
						'label': '上甘岭区'
					},
					{
						'value': '230722',
						'label': '嘉荫县'
					},
					{
						'value': '230781',
						'label': '铁力市'
					}
				]
			},
			{
				'value': '230800',
				'label': '佳木斯市',
				'children': [
					{
						'value': '230803',
						'label': '向阳区'
					},
					{
						'value': '230804',
						'label': '前进区'
					},
					{
						'value': '230805',
						'label': '东风区'
					},
					{
						'value': '230811',
						'label': '郊　区'
					},
					{
						'value': '230822',
						'label': '桦南县'
					},
					{
						'value': '230826',
						'label': '桦川县'
					},
					{
						'value': '230828',
						'label': '汤原县'
					},
					{
						'value': '230833',
						'label': '抚远县'
					},
					{
						'value': '230881',
						'label': '同江市'
					},
					{
						'value': '230882',
						'label': '富锦市'
					}
				]
			},
			{
				'value': '230900',
				'label': '七台河市',
				'children': [
					{
						'value': '230902',
						'label': '新兴区'
					},
					{
						'value': '230903',
						'label': '桃山区'
					},
					{
						'value': '230904',
						'label': '茄子河区'
					},
					{
						'value': '230921',
						'label': '勃利县'
					}
				]
			},
			{
				'value': '231000',
				'label': '牡丹江市',
				'children': [
					{
						'value': '231002',
						'label': '东安区'
					},
					{
						'value': '231003',
						'label': '阳明区'
					},
					{
						'value': '231004',
						'label': '爱民区'
					},
					{
						'value': '231005',
						'label': '西安区'
					},
					{
						'value': '231024',
						'label': '东宁县'
					},
					{
						'value': '231025',
						'label': '林口县'
					},
					{
						'value': '231081',
						'label': '绥芬河市'
					},
					{
						'value': '231083',
						'label': '海林市'
					},
					{
						'value': '231084',
						'label': '宁安市'
					},
					{
						'value': '231085',
						'label': '穆棱市'
					}
				]
			},
			{
				'value': '231100',
				'label': '黑河市',
				'children': [
					{
						'value': '231102',
						'label': '爱辉区'
					},
					{
						'value': '231121',
						'label': '嫩江县'
					},
					{
						'value': '231123',
						'label': '逊克县'
					},
					{
						'value': '231124',
						'label': '孙吴县'
					},
					{
						'value': '231181',
						'label': '北安市'
					},
					{
						'value': '231182',
						'label': '五大连池市'
					}
				]
			},
			{
				'value': '231200',
				'label': '绥化市',
				'children': [
					{
						'value': '231202',
						'label': '北林区'
					},
					{
						'value': '231221',
						'label': '望奎县'
					},
					{
						'value': '231222',
						'label': '兰西县'
					},
					{
						'value': '231223',
						'label': '青冈县'
					},
					{
						'value': '231224',
						'label': '庆安县'
					},
					{
						'value': '231225',
						'label': '明水县'
					},
					{
						'value': '231226',
						'label': '绥棱县'
					},
					{
						'value': '231281',
						'label': '安达市'
					},
					{
						'value': '231282',
						'label': '肇东市'
					},
					{
						'value': '231283',
						'label': '海伦市'
					}
				]
			},
			{
				'value': '232700',
				'label': '大兴安岭地区',
				'children': [
					{
						'value': '232721',
						'label': '呼玛县'
					},
					{
						'value': '232722',
						'label': '塔河县'
					},
					{
						'value': '232723',
						'label': '漠河县'
					}
				]
			}
		]
	},
	{
		'value': '310000',
		'label': '上海市',
		'children': [
			{
				'value': '310100',
				'label': '上海市',
				'children': [
					{
						'value': '310101',
						'label': '黄浦区'
					},
					{
						'value': '310104',
						'label': '徐汇区'
					},
					{
						'value': '310105',
						'label': '长宁区'
					},
					{
						'value': '310106',
						'label': '静安区'
					},
					{
						'value': '310107',
						'label': '普陀区'
					},
					{
						'value': '310109',
						'label': '虹口区'
					},
					{
						'value': '310110',
						'label': '杨浦区'
					},
					{
						'value': '310112',
						'label': '闵行区'
					},
					{
						'value': '310113',
						'label': '宝山区'
					},
					{
						'value': '310114',
						'label': '嘉定区'
					},
					{
						'value': '310115',
						'label': '浦东新区'
					},
					{
						'value': '310116',
						'label': '金山区'
					},
					{
						'value': '310117',
						'label': '松江区'
					},
					{
						'value': '310118',
						'label': '青浦区'
					},
					{
						'value': '310120',
						'label': '奉贤区'
					},
					{
						'value': '310230',
						'label': '崇明区'
					}
				]
			}
		]
	},
	{
		'value': '320000',
		'label': '江苏省',
		'children': [
			{
				'value': '320100',
				'label': '南京市',
				'children': [
					{
						'value': '320102',
						'label': '玄武区'
					},
					{
						'value': '320104',
						'label': '秦淮区'
					},
					{
						'value': '320105',
						'label': '建邺区'
					},
					{
						'value': '320106',
						'label': '鼓楼区'
					},
					{
						'value': '320111',
						'label': '浦口区'
					},
					{
						'value': '320113',
						'label': '栖霞区'
					},
					{
						'value': '320114',
						'label': '雨花台区'
					},
					{
						'value': '320115',
						'label': '江宁区'
					},
					{
						'value': '320116',
						'label': '六合区'
					},
					{
						'value': '320124',
						'label': '溧水区'
					},
					{
						'value': '320125',
						'label': '高淳区'
					}
				]
			},
			{
				'value': '320200',
				'label': '无锡市',
				'children': [
					{
						'value': '320202',
						'label': '崇安区'
					},
					{
						'value': '320203',
						'label': '南长区'
					},
					{
						'value': '320204',
						'label': '北塘区'
					},
					{
						'value': '320205',
						'label': '锡山区'
					},
					{
						'value': '320206',
						'label': '惠山区'
					},
					{
						'value': '320211',
						'label': '滨湖区'
					},
					{
						'value': '320281',
						'label': '江阴市'
					},
					{
						'value': '320282',
						'label': '宜兴市'
					}
				]
			},
			{
				'value': '320300',
				'label': '徐州市',
				'children': [
					{
						'value': '320302',
						'label': '鼓楼区'
					},
					{
						'value': '320303',
						'label': '云龙区'
					},
					{
						'value': '320305',
						'label': '贾汪区'
					},
					{
						'value': '320311',
						'label': '泉山区'
					},
					{
						'value': '320312',
						'label': '铜山区'
					},
					{
						'value': '320321',
						'label': '丰　县'
					},
					{
						'value': '320322',
						'label': '沛　县'
					},
					{
						'value': '320324',
						'label': '睢宁县'
					},
					{
						'value': '320381',
						'label': '新沂市'
					},
					{
						'value': '320382',
						'label': '邳州市'
					}
				]
			},
			{
				'value': '320400',
				'label': '常州市',
				'children': [
					{
						'value': '320402',
						'label': '天宁区'
					},
					{
						'value': '320404',
						'label': '钟楼区'
					},
					{
						'value': '320411',
						'label': '新北区'
					},
					{
						'value': '320412',
						'label': '武进区'
					},
					{
						'value': '320413',
						'label': '金坛区'
					},
					{
						'value': '320481',
						'label': '溧阳市'
					}
				]
			},
			{
				'value': '320500',
				'label': '苏州市',
				'children': [
					{
						'value': '320505',
						'label': '虎丘区'
					},
					{
						'value': '320506',
						'label': '吴中区'
					},
					{
						'value': '320507',
						'label': '相城区'
					},
					{
						'value': '320508',
						'label': '姑苏区'
					},
					{
						'value': '320509',
						'label': '吴江区'
					},
					{
						'value': '320581',
						'label': '常熟市'
					},
					{
						'value': '320582',
						'label': '张家港市'
					},
					{
						'value': '320583',
						'label': '昆山市'
					},
					{
						'value': '320585',
						'label': '太仓市'
					}
				]
			},
			{
				'value': '320600',
				'label': '南通市',
				'children': [
					{
						'value': '320602',
						'label': '崇川区'
					},
					{
						'value': '320611',
						'label': '港闸区'
					},
					{
						'value': '320612',
						'label': '通州区'
					},
					{
						'value': '320621',
						'label': '海安县'
					},
					{
						'value': '320623',
						'label': '如东县'
					},
					{
						'value': '320681',
						'label': '启东市'
					},
					{
						'value': '320682',
						'label': '如皋市'
					},
					{
						'value': '320684',
						'label': '海门市'
					}
				]
			},
			{
				'value': '320700',
				'label': '连云港市',
				'children': [
					{
						'value': '320703',
						'label': '连云区'
					},
					{
						'value': '320706',
						'label': '海州区'
					},
					{
						'value': '320707',
						'label': '赣榆县'
					},
					{
						'value': '320722',
						'label': '东海县'
					},
					{
						'value': '320723',
						'label': '灌云县'
					},
					{
						'value': '320724',
						'label': '灌南县'
					}
				]
			},
			{
				'value': '320800',
				'label': '淮安市',
				'children': [
					{
						'value': '320802',
						'label': '清河区'
					},
					{
						'value': '320803',
						'label': '淮安区'
					},
					{
						'value': '320804',
						'label': '淮阴区'
					},
					{
						'value': '320811',
						'label': '清浦区'
					},
					{
						'value': '320826',
						'label': '涟水县'
					},
					{
						'value': '320829',
						'label': '洪泽县'
					},
					{
						'value': '320830',
						'label': '盱眙县'
					},
					{
						'value': '320831',
						'label': '金湖县'
					}
				]
			},
			{
				'value': '320900',
				'label': '盐城市',
				'children': [
					{
						'value': '320902',
						'label': '亭湖区'
					},
					{
						'value': '320903',
						'label': '盐都区'
					},
					{
						'value': '320904',
						'label': '大丰市'
					},
					{
						'value': '320921',
						'label': '响水县'
					},
					{
						'value': '320922',
						'label': '滨海县'
					},
					{
						'value': '320923',
						'label': '阜宁县'
					},
					{
						'value': '320924',
						'label': '射阳县'
					},
					{
						'value': '320925',
						'label': '建湖县'
					},
					{
						'value': '320981',
						'label': '东台市'
					}
				]
			},
			{
				'value': '321000',
				'label': '扬州市',
				'children': [
					{
						'value': '321002',
						'label': '广陵区'
					},
					{
						'value': '321003',
						'label': '邗江区'
					},
					{
						'value': '321012',
						'label': '江都区'
					},
					{
						'value': '321023',
						'label': '宝应县'
					},
					{
						'value': '321081',
						'label': '仪征市'
					},
					{
						'value': '321084',
						'label': '高邮市'
					}
				]
			},
			{
				'value': '321100',
				'label': '镇江市',
				'children': [
					{
						'value': '321102',
						'label': '京口区'
					},
					{
						'value': '321111',
						'label': '润州区'
					},
					{
						'value': '321112',
						'label': '丹徒区'
					},
					{
						'value': '321181',
						'label': '丹阳市'
					},
					{
						'value': '321182',
						'label': '扬中市'
					},
					{
						'value': '321183',
						'label': '句容市'
					}
				]
			},
			{
				'value': '321200',
				'label': '泰州市',
				'children': [
					{
						'value': '321202',
						'label': '海陵区'
					},
					{
						'value': '321203',
						'label': '高港区'
					},
					{
						'value': '321204',
						'label': '姜堰区'
					},
					{
						'value': '321281',
						'label': '兴化市'
					},
					{
						'value': '321282',
						'label': '靖江市'
					},
					{
						'value': '321283',
						'label': '泰兴市'
					}
				]
			},
			{
				'value': '321300',
				'label': '宿迁市',
				'children': [
					{
						'value': '321302',
						'label': '宿城区'
					},
					{
						'value': '321311',
						'label': '宿豫区'
					},
					{
						'value': '321322',
						'label': '沭阳县'
					},
					{
						'value': '321323',
						'label': '泗阳县'
					},
					{
						'value': '321324',
						'label': '泗洪县'
					}
				]
			}
		]
	},
	{
		'value': '330000',
		'label': '浙江省',
		'children': [
			{
				'value': '330100',
				'label': '杭州市',
				'children': [
					{
						'value': '330102',
						'label': '上城区'
					},
					{
						'value': '330103',
						'label': '下城区'
					},
					{
						'value': '330104',
						'label': '江干区'
					},
					{
						'value': '330105',
						'label': '拱墅区'
					},
					{
						'value': '330106',
						'label': '西湖区'
					},
					{
						'value': '330108',
						'label': '滨江区'
					},
					{
						'value': '330109',
						'label': '萧山区'
					},
					{
						'value': '330110',
						'label': '余杭区'
					},
					{
						'value': '330111',
						'label': '富阳区'
					},
					{
						'value': '330122',
						'label': '桐庐县'
					},
					{
						'value': '330127',
						'label': '淳安县'
					},
					{
						'value': '330182',
						'label': '建德市'
					},
					{
						'value': '330185',
						'label': '临安市'
					}
				]
			},
			{
				'value': '330200',
				'label': '宁波市',
				'children': [
					{
						'value': '330203',
						'label': '海曙区'
					},
					{
						'value': '330204',
						'label': '江东区'
					},
					{
						'value': '330205',
						'label': '江北区'
					},
					{
						'value': '330206',
						'label': '北仑区'
					},
					{
						'value': '330211',
						'label': '镇海区'
					},
					{
						'value': '330212',
						'label': '鄞州区'
					},
					{
						'value': '330225',
						'label': '象山县'
					},
					{
						'value': '330226',
						'label': '宁海县'
					},
					{
						'value': '330281',
						'label': '余姚市'
					},
					{
						'value': '330282',
						'label': '慈溪市'
					},
					{
						'value': '330283',
						'label': '奉化市'
					}
				]
			},
			{
				'value': '330300',
				'label': '温州市',
				'children': [
					{
						'value': '330302',
						'label': '鹿城区'
					},
					{
						'value': '330303',
						'label': '龙湾区'
					},
					{
						'value': '330304',
						'label': '瓯海区'
					},
					{
						'value': '330305',
						'label': '洞头区'
					},
					{
						'value': '330324',
						'label': '永嘉县'
					},
					{
						'value': '330326',
						'label': '平阳县'
					},
					{
						'value': '330327',
						'label': '苍南县'
					},
					{
						'value': '330328',
						'label': '文成县'
					},
					{
						'value': '330329',
						'label': '泰顺县'
					},
					{
						'value': '330381',
						'label': '瑞安市'
					},
					{
						'value': '330382',
						'label': '乐清市'
					}
				]
			},
			{
				'value': '330400',
				'label': '嘉兴市',
				'children': [
					{
						'value': '330402',
						'label': '南湖区'
					},
					{
						'value': '330411',
						'label': '秀洲区'
					},
					{
						'value': '330421',
						'label': '嘉善县'
					},
					{
						'value': '330424',
						'label': '海盐县'
					},
					{
						'value': '330481',
						'label': '海宁市'
					},
					{
						'value': '330482',
						'label': '平湖市'
					},
					{
						'value': '330483',
						'label': '桐乡市'
					}
				]
			},
			{
				'value': '330500',
				'label': '湖州市',
				'children': [
					{
						'value': '330502',
						'label': '吴兴区'
					},
					{
						'value': '330503',
						'label': '南浔区'
					},
					{
						'value': '330521',
						'label': '德清县'
					},
					{
						'value': '330522',
						'label': '长兴县'
					},
					{
						'value': '330523',
						'label': '安吉县'
					}
				]
			},
			{
				'value': '330600',
				'label': '绍兴市',
				'children': [
					{
						'value': '330602',
						'label': '越城区'
					},
					{
						'value': '330603',
						'label': '柯桥区'
					},
					{
						'value': '330604',
						'label': '上虞区'
					},
					{
						'value': '330624',
						'label': '新昌县'
					},
					{
						'value': '330681',
						'label': '诸暨市'
					},
					{
						'value': '330683',
						'label': '嵊州市'
					}
				]
			},
			{
				'value': '330700',
				'label': '金华市',
				'children': [
					{
						'value': '330702',
						'label': '婺城区'
					},
					{
						'value': '330703',
						'label': '金东区'
					},
					{
						'value': '330723',
						'label': '武义县'
					},
					{
						'value': '330726',
						'label': '浦江县'
					},
					{
						'value': '330727',
						'label': '磐安县'
					},
					{
						'value': '330781',
						'label': '兰溪市'
					},
					{
						'value': '330782',
						'label': '义乌市'
					},
					{
						'value': '330783',
						'label': '东阳市'
					},
					{
						'value': '330784',
						'label': '永康市'
					}
				]
			},
			{
				'value': '330800',
				'label': '衢州市',
				'children': [
					{
						'value': '330802',
						'label': '柯城区'
					},
					{
						'value': '330803',
						'label': '衢江区'
					},
					{
						'value': '330822',
						'label': '常山县'
					},
					{
						'value': '330824',
						'label': '开化县'
					},
					{
						'value': '330825',
						'label': '龙游县'
					},
					{
						'value': '330881',
						'label': '江山市'
					}
				]
			},
			{
				'value': '330900',
				'label': '舟山市',
				'children': [
					{
						'value': '330902',
						'label': '定海区'
					},
					{
						'value': '330903',
						'label': '普陀区'
					},
					{
						'value': '330921',
						'label': '岱山县'
					},
					{
						'value': '330922',
						'label': '嵊泗县'
					}
				]
			},
			{
				'value': '331000',
				'label': '台州市',
				'children': [
					{
						'value': '331002',
						'label': '椒江区'
					},
					{
						'value': '331003',
						'label': '黄岩区'
					},
					{
						'value': '331004',
						'label': '路桥区'
					},
					{
						'value': '331021',
						'label': '玉环县'
					},
					{
						'value': '331022',
						'label': '三门县'
					},
					{
						'value': '331023',
						'label': '天台县'
					},
					{
						'value': '331024',
						'label': '仙居县'
					},
					{
						'value': '331081',
						'label': '温岭市'
					},
					{
						'value': '331082',
						'label': '临海市'
					}
				]
			},
			{
				'value': '331100',
				'label': '丽水市',
				'children': [
					{
						'value': '331102',
						'label': '莲都区'
					},
					{
						'value': '331121',
						'label': '青田县'
					},
					{
						'value': '331122',
						'label': '缙云县'
					},
					{
						'value': '331123',
						'label': '遂昌县'
					},
					{
						'value': '331124',
						'label': '松阳县'
					},
					{
						'value': '331125',
						'label': '云和县'
					},
					{
						'value': '331126',
						'label': '庆元县'
					},
					{
						'value': '331127',
						'label': '景宁畲族自治县'
					},
					{
						'value': '331181',
						'label': '龙泉市'
					}
				]
			}
		]
	},
	{
		'value': '340000',
		'label': '安徽省',
		'children': [
			{
				'value': '340100',
				'label': '合肥市',
				'children': [
					{
						'value': '340102',
						'label': '瑶海区'
					},
					{
						'value': '340103',
						'label': '庐阳区'
					},
					{
						'value': '340104',
						'label': '蜀山区'
					},
					{
						'value': '340111',
						'label': '包河区'
					},
					{
						'value': '340121',
						'label': '长丰县'
					},
					{
						'value': '340122',
						'label': '肥东县'
					},
					{
						'value': '340123',
						'label': '肥西县'
					},
					{
						'value': '340124',
						'label': '庐江县'
					},
					{
						'value': '340181',
						'label': '巢湖市'
					}
				]
			},
			{
				'value': '340200',
				'label': '芜湖市',
				'children': [
					{
						'value': '340202',
						'label': '镜湖区'
					},
					{
						'value': '340203',
						'label': '弋江区'
					},
					{
						'value': '340207',
						'label': '鸠江区'
					},
					{
						'value': '340208',
						'label': '三山区'
					},
					{
						'value': '340221',
						'label': '芜湖县'
					},
					{
						'value': '340222',
						'label': '繁昌县'
					},
					{
						'value': '340223',
						'label': '南陵县'
					},
					{
						'value': '340225',
						'label': '无为县'
					}
				]
			},
			{
				'value': '340300',
				'label': '蚌埠市',
				'children': [
					{
						'value': '340302',
						'label': '龙子湖区'
					},
					{
						'value': '340303',
						'label': '蚌山区'
					},
					{
						'value': '340304',
						'label': '禹会区'
					},
					{
						'value': '340311',
						'label': '淮上区'
					},
					{
						'value': '340321',
						'label': '怀远县'
					},
					{
						'value': '340322',
						'label': '五河县'
					},
					{
						'value': '340323',
						'label': '固镇县'
					}
				]
			},
			{
				'value': '340400',
				'label': '淮南市',
				'children': [
					{
						'value': '340402',
						'label': '大通区'
					},
					{
						'value': '340403',
						'label': '田家庵区'
					},
					{
						'value': '340404',
						'label': '谢家集区'
					},
					{
						'value': '340405',
						'label': '八公山区'
					},
					{
						'value': '340406',
						'label': '潘集区'
					},
					{
						'value': '340421',
						'label': '凤台县'
					}
				]
			},
			{
				'value': '340500',
				'label': '马鞍山市',
				'children': [
					{
						'value': '340503',
						'label': '花山区'
					},
					{
						'value': '340504',
						'label': '雨山区'
					},
					{
						'value': '340506',
						'label': '博望区'
					},
					{
						'value': '340521',
						'label': '当涂县'
					},
					{
						'value': '340522',
						'label': '含山县'
					},
					{
						'value': '340523',
						'label': '和县'
					}
				]
			},
			{
				'value': '340600',
				'label': '淮北市',
				'children': [
					{
						'value': '340602',
						'label': '杜集区'
					},
					{
						'value': '340603',
						'label': '相山区'
					},
					{
						'value': '340604',
						'label': '烈山区'
					},
					{
						'value': '340621',
						'label': '濉溪县'
					}
				]
			},
			{
				'value': '340700',
				'label': '铜陵市',
				'children': [
					{
						'value': '340702',
						'label': '铜官山区'
					},
					{
						'value': '340703',
						'label': '狮子山区'
					},
					{
						'value': '340711',
						'label': '郊　区'
					},
					{
						'value': '340721',
						'label': '铜陵县'
					}
				]
			},
			{
				'value': '340800',
				'label': '安庆市',
				'children': [
					{
						'value': '340802',
						'label': '迎江区'
					},
					{
						'value': '340803',
						'label': '大观区'
					},
					{
						'value': '340811',
						'label': '宜秀区'
					},
					{
						'value': '340822',
						'label': '怀宁县'
					},
					{
						'value': '340823',
						'label': '枞阳县'
					},
					{
						'value': '340824',
						'label': '潜山县'
					},
					{
						'value': '340825',
						'label': '太湖县'
					},
					{
						'value': '340826',
						'label': '宿松县'
					},
					{
						'value': '340827',
						'label': '望江县'
					},
					{
						'value': '340828',
						'label': '岳西县'
					},
					{
						'value': '340881',
						'label': '桐城市'
					}
				]
			},
			{
				'value': '341000',
				'label': '黄山市',
				'children': [
					{
						'value': '341002',
						'label': '屯溪区'
					},
					{
						'value': '341003',
						'label': '黄山区'
					},
					{
						'value': '341004',
						'label': '徽州区'
					},
					{
						'value': '341021',
						'label': '歙　县'
					},
					{
						'value': '341022',
						'label': '休宁县'
					},
					{
						'value': '341023',
						'label': '黟　县'
					},
					{
						'value': '341024',
						'label': '祁门县'
					}
				]
			},
			{
				'value': '341100',
				'label': '滁州市',
				'children': [
					{
						'value': '341102',
						'label': '琅琊区'
					},
					{
						'value': '341103',
						'label': '南谯区'
					},
					{
						'value': '341122',
						'label': '来安县'
					},
					{
						'value': '341124',
						'label': '全椒县'
					},
					{
						'value': '341125',
						'label': '定远县'
					},
					{
						'value': '341126',
						'label': '凤阳县'
					},
					{
						'value': '341181',
						'label': '天长市'
					},
					{
						'value': '341182',
						'label': '明光市'
					}
				]
			},
			{
				'value': '341200',
				'label': '阜阳市',
				'children': [
					{
						'value': '341202',
						'label': '颍州区'
					},
					{
						'value': '341203',
						'label': '颍东区'
					},
					{
						'value': '341204',
						'label': '颍泉区'
					},
					{
						'value': '341221',
						'label': '临泉县'
					},
					{
						'value': '341222',
						'label': '太和县'
					},
					{
						'value': '341225',
						'label': '阜南县'
					},
					{
						'value': '341226',
						'label': '颍上县'
					},
					{
						'value': '341282',
						'label': '界首市'
					}
				]
			},
			{
				'value': '341300',
				'label': '宿州市',
				'children': [
					{
						'value': '341302',
						'label': '墉桥区'
					},
					{
						'value': '341321',
						'label': '砀山县'
					},
					{
						'value': '341322',
						'label': '萧　县'
					},
					{
						'value': '341323',
						'label': '灵璧县'
					},
					{
						'value': '341324',
						'label': '泗　县'
					}
				]
			},
			{
				'value': '341500',
				'label': '六安市',
				'children': [
					{
						'value': '341502',
						'label': '金安区'
					},
					{
						'value': '341503',
						'label': '裕安区'
					},
					{
						'value': '341521',
						'label': '寿　县'
					},
					{
						'value': '341522',
						'label': '霍邱县'
					},
					{
						'value': '341523',
						'label': '舒城县'
					},
					{
						'value': '341524',
						'label': '金寨县'
					},
					{
						'value': '341525',
						'label': '霍山县'
					}
				]
			},
			{
				'value': '341600',
				'label': '亳州市',
				'children': [
					{
						'value': '341602',
						'label': '谯城区'
					},
					{
						'value': '341621',
						'label': '涡阳县'
					},
					{
						'value': '341622',
						'label': '蒙城县'
					},
					{
						'value': '341623',
						'label': '利辛县'
					}
				]
			},
			{
				'value': '341700',
				'label': '池州市',
				'children': [
					{
						'value': '341702',
						'label': '贵池区'
					},
					{
						'value': '341721',
						'label': '东至县'
					},
					{
						'value': '341722',
						'label': '石台县'
					},
					{
						'value': '341723',
						'label': '青阳县'
					}
				]
			},
			{
				'value': '341800',
				'label': '宣城市',
				'children': [
					{
						'value': '341802',
						'label': '宣州区'
					},
					{
						'value': '341821',
						'label': '郎溪县'
					},
					{
						'value': '341822',
						'label': '广德县'
					},
					{
						'value': '341823',
						'label': '泾　县'
					},
					{
						'value': '341824',
						'label': '绩溪县'
					},
					{
						'value': '341825',
						'label': '旌德县'
					},
					{
						'value': '341881',
						'label': '宁国市'
					}
				]
			}
		]
	},
	{
		'value': '350000',
		'label': '福建省',
		'children': [
			{
				'value': '350100',
				'label': '福州市',
				'children': [
					{
						'value': '350102',
						'label': '鼓楼区'
					},
					{
						'value': '350103',
						'label': '台江区'
					},
					{
						'value': '350104',
						'label': '仓山区'
					},
					{
						'value': '350105',
						'label': '马尾区'
					},
					{
						'value': '350111',
						'label': '晋安区'
					},
					{
						'value': '350121',
						'label': '闽侯县'
					},
					{
						'value': '350122',
						'label': '连江县'
					},
					{
						'value': '350123',
						'label': '罗源县'
					},
					{
						'value': '350124',
						'label': '闽清县'
					},
					{
						'value': '350125',
						'label': '永泰县'
					},
					{
						'value': '350128',
						'label': '平潭县'
					},
					{
						'value': '350181',
						'label': '福清市'
					},
					{
						'value': '350182',
						'label': '长乐市'
					}
				]
			},
			{
				'value': '350200',
				'label': '厦门市',
				'children': [
					{
						'value': '350203',
						'label': '思明区'
					},
					{
						'value': '350205',
						'label': '海沧区'
					},
					{
						'value': '350206',
						'label': '湖里区'
					},
					{
						'value': '350211',
						'label': '集美区'
					},
					{
						'value': '350212',
						'label': '同安区'
					},
					{
						'value': '350213',
						'label': '翔安区'
					}
				]
			},
			{
				'value': '350300',
				'label': '莆田市',
				'children': [
					{
						'value': '350302',
						'label': '城厢区'
					},
					{
						'value': '350303',
						'label': '涵江区'
					},
					{
						'value': '350304',
						'label': '荔城区'
					},
					{
						'value': '350305',
						'label': '秀屿区'
					},
					{
						'value': '350322',
						'label': '仙游县'
					}
				]
			},
			{
				'value': '350400',
				'label': '三明市',
				'children': [
					{
						'value': '350402',
						'label': '梅列区'
					},
					{
						'value': '350403',
						'label': '三元区'
					},
					{
						'value': '350421',
						'label': '明溪县'
					},
					{
						'value': '350423',
						'label': '清流县'
					},
					{
						'value': '350424',
						'label': '宁化县'
					},
					{
						'value': '350425',
						'label': '大田县'
					},
					{
						'value': '350426',
						'label': '尤溪县'
					},
					{
						'value': '350427',
						'label': '沙　县'
					},
					{
						'value': '350428',
						'label': '将乐县'
					},
					{
						'value': '350429',
						'label': '泰宁县'
					},
					{
						'value': '350430',
						'label': '建宁县'
					},
					{
						'value': '350481',
						'label': '永安市'
					}
				]
			},
			{
				'value': '350500',
				'label': '泉州市',
				'children': [
					{
						'value': '350502',
						'label': '鲤城区'
					},
					{
						'value': '350503',
						'label': '丰泽区'
					},
					{
						'value': '350504',
						'label': '洛江区'
					},
					{
						'value': '350505',
						'label': '泉港区'
					},
					{
						'value': '350521',
						'label': '惠安县'
					},
					{
						'value': '350524',
						'label': '安溪县'
					},
					{
						'value': '350525',
						'label': '永春县'
					},
					{
						'value': '350526',
						'label': '德化县'
					},
					{
						'value': '350527',
						'label': '金门县'
					},
					{
						'value': '350581',
						'label': '石狮市'
					},
					{
						'value': '350582',
						'label': '晋江市'
					},
					{
						'value': '350583',
						'label': '南安市'
					}
				]
			},
			{
				'value': '350600',
				'label': '漳州市',
				'children': [
					{
						'value': '350602',
						'label': '芗城区'
					},
					{
						'value': '350603',
						'label': '龙文区'
					},
					{
						'value': '350622',
						'label': '云霄县'
					},
					{
						'value': '350623',
						'label': '漳浦县'
					},
					{
						'value': '350624',
						'label': '诏安县'
					},
					{
						'value': '350625',
						'label': '长泰县'
					},
					{
						'value': '350626',
						'label': '东山县'
					},
					{
						'value': '350627',
						'label': '南靖县'
					},
					{
						'value': '350628',
						'label': '平和县'
					},
					{
						'value': '350629',
						'label': '华安县'
					},
					{
						'value': '350681',
						'label': '龙海市'
					}
				]
			},
			{
				'value': '350700',
				'label': '南平市',
				'children': [
					{
						'value': '350702',
						'label': '延平区'
					},
					{
						'value': '350703',
						'label': '建阳区'
					},
					{
						'value': '350721',
						'label': '顺昌县'
					},
					{
						'value': '350722',
						'label': '浦城县'
					},
					{
						'value': '350723',
						'label': '光泽县'
					},
					{
						'value': '350724',
						'label': '松溪县'
					},
					{
						'value': '350725',
						'label': '政和县'
					},
					{
						'value': '350781',
						'label': '邵武市'
					},
					{
						'value': '350782',
						'label': '武夷山市'
					},
					{
						'value': '350783',
						'label': '建瓯市'
					}
				]
			},
			{
				'value': '350800',
				'label': '龙岩市',
				'children': [
					{
						'value': '350802',
						'label': '新罗区'
					},
					{
						'value': '350803',
						'label': '永定区'
					},
					{
						'value': '350821',
						'label': '长汀县'
					},
					{
						'value': '350823',
						'label': '上杭县'
					},
					{
						'value': '350824',
						'label': '武平县'
					},
					{
						'value': '350825',
						'label': '连城县'
					},
					{
						'value': '350881',
						'label': '漳平市'
					}
				]
			},
			{
				'value': '350900',
				'label': '宁德市',
				'children': [
					{
						'value': '350902',
						'label': '蕉城区'
					},
					{
						'value': '350921',
						'label': '霞浦县'
					},
					{
						'value': '350922',
						'label': '古田县'
					},
					{
						'value': '350923',
						'label': '屏南县'
					},
					{
						'value': '350924',
						'label': '寿宁县'
					},
					{
						'value': '350925',
						'label': '周宁县'
					},
					{
						'value': '350926',
						'label': '柘荣县'
					},
					{
						'value': '350981',
						'label': '福安市'
					},
					{
						'value': '350982',
						'label': '福鼎市'
					}
				]
			}
		]
	},
	{
		'value': '360000',
		'label': '江西省',
		'children': [
			{
				'value': '360100',
				'label': '南昌市',
				'children': [
					{
						'value': '360102',
						'label': '东湖区'
					},
					{
						'value': '360103',
						'label': '西湖区'
					},
					{
						'value': '360104',
						'label': '青云谱区'
					},
					{
						'value': '360105',
						'label': '湾里区'
					},
					{
						'value': '360111',
						'label': '青山湖区'
					},
					{
						'value': '360112',
						'label': '新建区'
					},
					{
						'value': '360121',
						'label': '南昌县'
					},
					{
						'value': '360123',
						'label': '安义县'
					},
					{
						'value': '360124',
						'label': '进贤县'
					}
				]
			},
			{
				'value': '360200',
				'label': '景德镇市',
				'children': [
					{
						'value': '360202',
						'label': '昌江区'
					},
					{
						'value': '360203',
						'label': '珠山区'
					},
					{
						'value': '360222',
						'label': '浮梁县'
					},
					{
						'value': '360281',
						'label': '乐平市'
					}
				]
			},
			{
				'value': '360300',
				'label': '萍乡市',
				'children': [
					{
						'value': '360302',
						'label': '安源区'
					},
					{
						'value': '360313',
						'label': '湘东区'
					},
					{
						'value': '360321',
						'label': '莲花县'
					},
					{
						'value': '360322',
						'label': '上栗县'
					},
					{
						'value': '360323',
						'label': '芦溪县'
					}
				]
			},
			{
				'value': '360400',
				'label': '九江市',
				'children': [
					{
						'value': '360402',
						'label': '庐山区'
					},
					{
						'value': '360403',
						'label': '浔阳区'
					},
					{
						'value': '360421',
						'label': '九江县'
					},
					{
						'value': '360423',
						'label': '武宁县'
					},
					{
						'value': '360424',
						'label': '修水县'
					},
					{
						'value': '360425',
						'label': '永修县'
					},
					{
						'value': '360426',
						'label': '德安县'
					},
					{
						'value': '360427',
						'label': '星子县'
					},
					{
						'value': '360428',
						'label': '都昌县'
					},
					{
						'value': '360429',
						'label': '湖口县'
					},
					{
						'value': '360430',
						'label': '彭泽县'
					},
					{
						'value': '360481',
						'label': '瑞昌市'
					},
					{
						'value': '360482',
						'label': '共青城市'
					}
				]
			},
			{
				'value': '360500',
				'label': '新余市',
				'children': [
					{
						'value': '360502',
						'label': '渝水区'
					},
					{
						'value': '360521',
						'label': '分宜县'
					}
				]
			},
			{
				'value': '360600',
				'label': '鹰潭市',
				'children': [
					{
						'value': '360602',
						'label': '月湖区'
					},
					{
						'value': '360622',
						'label': '余江县'
					},
					{
						'value': '360681',
						'label': '贵溪市'
					}
				]
			},
			{
				'value': '360700',
				'label': '赣州市',
				'children': [
					{
						'value': '360702',
						'label': '章贡区'
					},
					{
						'value': '360703',
						'label': '南康区'
					},
					{
						'value': '360721',
						'label': '赣　县'
					},
					{
						'value': '360722',
						'label': '信丰县'
					},
					{
						'value': '360723',
						'label': '大余县'
					},
					{
						'value': '360724',
						'label': '上犹县'
					},
					{
						'value': '360725',
						'label': '崇义县'
					},
					{
						'value': '360726',
						'label': '安远县'
					},
					{
						'value': '360727',
						'label': '龙南县'
					},
					{
						'value': '360728',
						'label': '定南县'
					},
					{
						'value': '360729',
						'label': '全南县'
					},
					{
						'value': '360730',
						'label': '宁都县'
					},
					{
						'value': '360731',
						'label': '于都县'
					},
					{
						'value': '360732',
						'label': '兴国县'
					},
					{
						'value': '360733',
						'label': '会昌县'
					},
					{
						'value': '360734',
						'label': '寻乌县'
					},
					{
						'value': '360735',
						'label': '石城县'
					},
					{
						'value': '360781',
						'label': '瑞金市'
					}
				]
			},
			{
				'value': '360800',
				'label': '吉安市',
				'children': [
					{
						'value': '360802',
						'label': '吉州区'
					},
					{
						'value': '360803',
						'label': '青原区'
					},
					{
						'value': '360821',
						'label': '吉安县'
					},
					{
						'value': '360822',
						'label': '吉水县'
					},
					{
						'value': '360823',
						'label': '峡江县'
					},
					{
						'value': '360824',
						'label': '新干县'
					},
					{
						'value': '360825',
						'label': '永丰县'
					},
					{
						'value': '360826',
						'label': '泰和县'
					},
					{
						'value': '360827',
						'label': '遂川县'
					},
					{
						'value': '360828',
						'label': '万安县'
					},
					{
						'value': '360829',
						'label': '安福县'
					},
					{
						'value': '360830',
						'label': '永新县'
					},
					{
						'value': '360881',
						'label': '井冈山市'
					}
				]
			},
			{
				'value': '360900',
				'label': '宜春市',
				'children': [
					{
						'value': '360902',
						'label': '袁州区'
					},
					{
						'value': '360921',
						'label': '奉新县'
					},
					{
						'value': '360922',
						'label': '万载县'
					},
					{
						'value': '360923',
						'label': '上高县'
					},
					{
						'value': '360924',
						'label': '宜丰县'
					},
					{
						'value': '360925',
						'label': '靖安县'
					},
					{
						'value': '360926',
						'label': '铜鼓县'
					},
					{
						'value': '360981',
						'label': '丰城市'
					},
					{
						'value': '360982',
						'label': '樟树市'
					},
					{
						'value': '360983',
						'label': '高安市'
					}
				]
			},
			{
				'value': '361000',
				'label': '抚州市',
				'children': [
					{
						'value': '361002',
						'label': '临川区'
					},
					{
						'value': '361021',
						'label': '南城县'
					},
					{
						'value': '361022',
						'label': '黎川县'
					},
					{
						'value': '361023',
						'label': '南丰县'
					},
					{
						'value': '361024',
						'label': '崇仁县'
					},
					{
						'value': '361025',
						'label': '乐安县'
					},
					{
						'value': '361026',
						'label': '宜黄县'
					},
					{
						'value': '361027',
						'label': '金溪县'
					},
					{
						'value': '361028',
						'label': '资溪县'
					},
					{
						'value': '361029',
						'label': '东乡县'
					},
					{
						'value': '361030',
						'label': '广昌县'
					}
				]
			},
			{
				'value': '361100',
				'label': '上饶市',
				'children': [
					{
						'value': '361102',
						'label': '信州区'
					},
					{
						'value': '361103',
						'label': '广丰区'
					},
					{
						'value': '361121',
						'label': '上饶县'
					},
					{
						'value': '361123',
						'label': '玉山县'
					},
					{
						'value': '361124',
						'label': '铅山县'
					},
					{
						'value': '361125',
						'label': '横峰县'
					},
					{
						'value': '361126',
						'label': '弋阳县'
					},
					{
						'value': '361127',
						'label': '余干县'
					},
					{
						'value': '361128',
						'label': '鄱阳县'
					},
					{
						'value': '361129',
						'label': '万年县'
					},
					{
						'value': '361130',
						'label': '婺源县'
					},
					{
						'value': '361181',
						'label': '德兴市'
					}
				]
			}
		]
	},
	{
		'value': '370000',
		'label': '山东省',
		'children': [
			{
				'value': '370100',
				'label': '济南市',
				'children': [
					{
						'value': '370102',
						'label': '历下区'
					},
					{
						'value': '370103',
						'label': '市中区'
					},
					{
						'value': '370104',
						'label': '槐荫区'
					},
					{
						'value': '370105',
						'label': '天桥区'
					},
					{
						'value': '370112',
						'label': '历城区'
					},
					{
						'value': '370113',
						'label': '长清区'
					},
					{
						'value': '370124',
						'label': '平阴县'
					},
					{
						'value': '370125',
						'label': '济阳县'
					},
					{
						'value': '370126',
						'label': '商河县'
					},
					{
						'value': '370181',
						'label': '章丘市'
					}
				]
			},
			{
				'value': '370200',
				'label': '青岛市',
				'children': [
					{
						'value': '370202',
						'label': '市南区'
					},
					{
						'value': '370203',
						'label': '市北区'
					},
					{
						'value': '370205',
						'label': '四方区'
					},
					{
						'value': '370211',
						'label': '黄岛区'
					},
					{
						'value': '370212',
						'label': '崂山区'
					},
					{
						'value': '370213',
						'label': '李沧区'
					},
					{
						'value': '370214',
						'label': '城阳区'
					},
					{
						'value': '370281',
						'label': '胶州市'
					},
					{
						'value': '370282',
						'label': '即墨市'
					},
					{
						'value': '370283',
						'label': '平度市'
					},
					{
						'value': '370285',
						'label': '莱西市'
					}
				]
			},
			{
				'value': '370300',
				'label': '淄博市',
				'children': [
					{
						'value': '370302',
						'label': '淄川区'
					},
					{
						'value': '370303',
						'label': '张店区'
					},
					{
						'value': '370304',
						'label': '博山区'
					},
					{
						'value': '370305',
						'label': '临淄区'
					},
					{
						'value': '370306',
						'label': '周村区'
					},
					{
						'value': '370321',
						'label': '桓台县'
					},
					{
						'value': '370322',
						'label': '高青县'
					},
					{
						'value': '370323',
						'label': '沂源县'
					}
				]
			},
			{
				'value': '370400',
				'label': '枣庄市',
				'children': [
					{
						'value': '370402',
						'label': '市中区'
					},
					{
						'value': '370403',
						'label': '薛城区'
					},
					{
						'value': '370404',
						'label': '峄城区'
					},
					{
						'value': '370405',
						'label': '台儿庄区'
					},
					{
						'value': '370406',
						'label': '山亭区'
					},
					{
						'value': '370481',
						'label': '滕州市'
					}
				]
			},
			{
				'value': '370500',
				'label': '东营市',
				'children': [
					{
						'value': '370502',
						'label': '东营区'
					},
					{
						'value': '370503',
						'label': '河口区'
					},
					{
						'value': '370521',
						'label': '垦利县'
					},
					{
						'value': '370522',
						'label': '利津县'
					},
					{
						'value': '370523',
						'label': '广饶县'
					}
				]
			},
			{
				'value': '370600',
				'label': '烟台市',
				'children': [
					{
						'value': '370602',
						'label': '芝罘区'
					},
					{
						'value': '370611',
						'label': '福山区'
					},
					{
						'value': '370612',
						'label': '牟平区'
					},
					{
						'value': '370613',
						'label': '莱山区'
					},
					{
						'value': '370634',
						'label': '长岛县'
					},
					{
						'value': '370681',
						'label': '龙口市'
					},
					{
						'value': '370682',
						'label': '莱阳市'
					},
					{
						'value': '370683',
						'label': '莱州市'
					},
					{
						'value': '370684',
						'label': '蓬莱市'
					},
					{
						'value': '370685',
						'label': '招远市'
					},
					{
						'value': '370686',
						'label': '栖霞市'
					},
					{
						'value': '370687',
						'label': '海阳市'
					}
				]
			},
			{
				'value': '370700',
				'label': '潍坊市',
				'children': [
					{
						'value': '370702',
						'label': '潍城区'
					},
					{
						'value': '370703',
						'label': '寒亭区'
					},
					{
						'value': '370704',
						'label': '坊子区'
					},
					{
						'value': '370705',
						'label': '奎文区'
					},
					{
						'value': '370724',
						'label': '临朐县'
					},
					{
						'value': '370725',
						'label': '昌乐县'
					},
					{
						'value': '370781',
						'label': '青州市'
					},
					{
						'value': '370782',
						'label': '诸城市'
					},
					{
						'value': '370783',
						'label': '寿光市'
					},
					{
						'value': '370784',
						'label': '安丘市'
					},
					{
						'value': '370785',
						'label': '高密市'
					},
					{
						'value': '370786',
						'label': '昌邑市'
					}
				]
			},
			{
				'value': '370800',
				'label': '济宁市',
				'children': [
					{
						'value': '370811',
						'label': '任城区'
					},
					{
						'value': '370812',
						'label': '兖州区'
					},
					{
						'value': '370826',
						'label': '微山县'
					},
					{
						'value': '370827',
						'label': '鱼台县'
					},
					{
						'value': '370828',
						'label': '金乡县'
					},
					{
						'value': '370829',
						'label': '嘉祥县'
					},
					{
						'value': '370830',
						'label': '汶上县'
					},
					{
						'value': '370831',
						'label': '泗水县'
					},
					{
						'value': '370832',
						'label': '梁山县'
					},
					{
						'value': '370881',
						'label': '曲阜市'
					},
					{
						'value': '370883',
						'label': '邹城市'
					}
				]
			},
			{
				'value': '370900',
				'label': '泰安市',
				'children': [
					{
						'value': '370902',
						'label': '泰山区'
					},
					{
						'value': '370903',
						'label': '岱岳区'
					},
					{
						'value': '370921',
						'label': '宁阳县'
					},
					{
						'value': '370923',
						'label': '东平县'
					},
					{
						'value': '370982',
						'label': '新泰市'
					},
					{
						'value': '370983',
						'label': '肥城市'
					}
				]
			},
			{
				'value': '371000',
				'label': '威海市',
				'children': [
					{
						'value': '371002',
						'label': '环翠区'
					},
					{
						'value': '371081',
						'label': '文登区'
					},
					{
						'value': '371082',
						'label': '荣成市'
					},
					{
						'value': '371083',
						'label': '乳山市'
					}
				]
			},
			{
				'value': '371100',
				'label': '日照市',
				'children': [
					{
						'value': '371102',
						'label': '东港区'
					},
					{
						'value': '371103',
						'label': '岚山区'
					},
					{
						'value': '371121',
						'label': '五莲县'
					},
					{
						'value': '371122',
						'label': '莒　县'
					}
				]
			},
			{
				'value': '371200',
				'label': '莱芜市',
				'children': [
					{
						'value': '371202',
						'label': '莱城区'
					},
					{
						'value': '371203',
						'label': '钢城区'
					}
				]
			},
			{
				'value': '371300',
				'label': '临沂市',
				'children': [
					{
						'value': '371302',
						'label': '兰山区'
					},
					{
						'value': '371311',
						'label': '罗庄区'
					},
					{
						'value': '371312',
						'label': '河东区'
					},
					{
						'value': '371321',
						'label': '沂南县'
					},
					{
						'value': '371322',
						'label': '郯城县'
					},
					{
						'value': '371323',
						'label': '沂水县'
					},
					{
						'value': '371324',
						'label': '兰陵县'
					},
					{
						'value': '371325',
						'label': '费　县'
					},
					{
						'value': '371326',
						'label': '平邑县'
					},
					{
						'value': '371327',
						'label': '莒南县'
					},
					{
						'value': '371328',
						'label': '蒙阴县'
					},
					{
						'value': '371329',
						'label': '临沭县'
					}
				]
			},
			{
				'value': '371400',
				'label': '德州市',
				'children': [
					{
						'value': '371402',
						'label': '德城区'
					},
					{
						'value': '371421',
						'label': '陵城区'
					},
					{
						'value': '371422',
						'label': '宁津县'
					},
					{
						'value': '371423',
						'label': '庆云县'
					},
					{
						'value': '371424',
						'label': '临邑县'
					},
					{
						'value': '371425',
						'label': '齐河县'
					},
					{
						'value': '371426',
						'label': '平原县'
					},
					{
						'value': '371427',
						'label': '夏津县'
					},
					{
						'value': '371428',
						'label': '武城县'
					},
					{
						'value': '371481',
						'label': '乐陵市'
					},
					{
						'value': '371482',
						'label': '禹城市'
					}
				]
			},
			{
				'value': '371500',
				'label': '聊城市',
				'children': [
					{
						'value': '371502',
						'label': '东昌府区'
					},
					{
						'value': '371521',
						'label': '阳谷县'
					},
					{
						'value': '371522',
						'label': '莘　县'
					},
					{
						'value': '371523',
						'label': '茌平县'
					},
					{
						'value': '371524',
						'label': '东阿县'
					},
					{
						'value': '371525',
						'label': '冠　县'
					},
					{
						'value': '371526',
						'label': '高唐县'
					},
					{
						'value': '371581',
						'label': '临清市'
					}
				]
			},
			{
				'value': '371600',
				'label': '滨州市',
				'children': [
					{
						'value': '371602',
						'label': '滨城区'
					},
					{
						'value': '371603',
						'label': '沾化区'
					},
					{
						'value': '371621',
						'label': '惠民县'
					},
					{
						'value': '371622',
						'label': '阳信县'
					},
					{
						'value': '371623',
						'label': '无棣县'
					},
					{
						'value': '371625',
						'label': '博兴县'
					},
					{
						'value': '371626',
						'label': '邹平县'
					}
				]
			},
			{
				'value': '371700',
				'label': '荷泽市',
				'children': [
					{
						'value': '371702',
						'label': '牡丹区'
					},
					{
						'value': '371721',
						'label': '曹 县'
					},
					{
						'value': '371722',
						'label': '单 县'
					},
					{
						'value': '371723',
						'label': '成武县'
					},
					{
						'value': '371724',
						'label': '巨野县'
					},
					{
						'value': '371725',
						'label': '郓城县'
					},
					{
						'value': '371726',
						'label': '鄄城县'
					},
					{
						'value': '371727',
						'label': '定陶县'
					},
					{
						'value': '371728',
						'label': '东明县'
					}
				]
			}
		]
	},
	{
		'value': '410000',
		'label': '河南省',
		'children': [
			{
				'value': '410100',
				'label': '郑州市',
				'children': [
					{
						'value': '410102',
						'label': '中原区'
					},
					{
						'value': '410103',
						'label': '二七区'
					},
					{
						'value': '410104',
						'label': '管城回族区'
					},
					{
						'value': '410105',
						'label': '金水区'
					},
					{
						'value': '410106',
						'label': '上街区'
					},
					{
						'value': '410108',
						'label': '惠济区'
					},
					{
						'value': '410122',
						'label': '中牟县'
					},
					{
						'value': '410181',
						'label': '巩义市'
					},
					{
						'value': '410182',
						'label': '荥阳市'
					},
					{
						'value': '410183',
						'label': '新密市'
					},
					{
						'value': '410184',
						'label': '新郑市'
					},
					{
						'value': '410185',
						'label': '登封市'
					}
				]
			},
			{
				'value': '410200',
				'label': '开封市',
				'children': [
					{
						'value': '410202',
						'label': '龙亭区'
					},
					{
						'value': '410203',
						'label': '顺河回族区'
					},
					{
						'value': '410204',
						'label': '鼓楼区'
					},
					{
						'value': '410205',
						'label': '禹王台区'
					},
					{
						'value': '410211',
						'label': '金明区'
					},
					{
						'value': '410212',
						'label': '祥符区'
					},
					{
						'value': '410221',
						'label': '杞　县'
					},
					{
						'value': '410222',
						'label': '通许县'
					},
					{
						'value': '410223',
						'label': '尉氏县'
					},
					{
						'value': '410224',
						'label': '开封县'
					},
					{
						'value': '410225',
						'label': '兰考县'
					}
				]
			},
			{
				'value': '410300',
				'label': '洛阳市',
				'children': [
					{
						'value': '410302',
						'label': '老城区'
					},
					{
						'value': '410303',
						'label': '西工区'
					},
					{
						'value': '410304',
						'label': '廛河回族区'
					},
					{
						'value': '410305',
						'label': '涧西区'
					},
					{
						'value': '410306',
						'label': '吉利区'
					},
					{
						'value': '410307',
						'label': '洛龙区'
					},
					{
						'value': '410322',
						'label': '孟津县'
					},
					{
						'value': '410323',
						'label': '新安县'
					},
					{
						'value': '410324',
						'label': '栾川县'
					},
					{
						'value': '410325',
						'label': '嵩　县'
					},
					{
						'value': '410326',
						'label': '汝阳县'
					},
					{
						'value': '410327',
						'label': '宜阳县'
					},
					{
						'value': '410328',
						'label': '洛宁县'
					},
					{
						'value': '410329',
						'label': '伊川县'
					},
					{
						'value': '410381',
						'label': '偃师市'
					}
				]
			},
			{
				'value': '410400',
				'label': '平顶山市',
				'children': [
					{
						'value': '410402',
						'label': '新华区'
					},
					{
						'value': '410403',
						'label': '卫东区'
					},
					{
						'value': '410404',
						'label': '石龙区'
					},
					{
						'value': '410411',
						'label': '湛河区'
					},
					{
						'value': '410421',
						'label': '宝丰县'
					},
					{
						'value': '410422',
						'label': '叶　县'
					},
					{
						'value': '410423',
						'label': '鲁山县'
					},
					{
						'value': '410425',
						'label': '郏　县'
					},
					{
						'value': '410481',
						'label': '舞钢市'
					},
					{
						'value': '410482',
						'label': '汝州市'
					}
				]
			},
			{
				'value': '410500',
				'label': '安阳市',
				'children': [
					{
						'value': '410502',
						'label': '文峰区'
					},
					{
						'value': '410503',
						'label': '北关区'
					},
					{
						'value': '410505',
						'label': '殷都区'
					},
					{
						'value': '410506',
						'label': '龙安区'
					},
					{
						'value': '410522',
						'label': '安阳县'
					},
					{
						'value': '410523',
						'label': '汤阴县'
					},
					{
						'value': '410526',
						'label': '滑　县'
					},
					{
						'value': '410527',
						'label': '内黄县'
					},
					{
						'value': '410581',
						'label': '林州市'
					}
				]
			},
			{
				'value': '410600',
				'label': '鹤壁市',
				'children': [
					{
						'value': '410602',
						'label': '鹤山区'
					},
					{
						'value': '410603',
						'label': '山城区'
					},
					{
						'value': '410611',
						'label': '淇滨区'
					},
					{
						'value': '410621',
						'label': '浚　县'
					},
					{
						'value': '410622',
						'label': '淇　县'
					}
				]
			},
			{
				'value': '410700',
				'label': '新乡市',
				'children': [
					{
						'value': '410702',
						'label': '红旗区'
					},
					{
						'value': '410703',
						'label': '卫滨区'
					},
					{
						'value': '410704',
						'label': '凤泉区'
					},
					{
						'value': '410711',
						'label': '牧野区'
					},
					{
						'value': '410721',
						'label': '新乡县'
					},
					{
						'value': '410724',
						'label': '获嘉县'
					},
					{
						'value': '410725',
						'label': '原阳县'
					},
					{
						'value': '410726',
						'label': '延津县'
					},
					{
						'value': '410727',
						'label': '封丘县'
					},
					{
						'value': '410728',
						'label': '长垣县'
					},
					{
						'value': '410781',
						'label': '卫辉市'
					},
					{
						'value': '410782',
						'label': '辉县市'
					}
				]
			},
			{
				'value': '410800',
				'label': '焦作市',
				'children': [
					{
						'value': '410802',
						'label': '解放区'
					},
					{
						'value': '410803',
						'label': '中站区'
					},
					{
						'value': '410804',
						'label': '马村区'
					},
					{
						'value': '410811',
						'label': '山阳区'
					},
					{
						'value': '410821',
						'label': '修武县'
					},
					{
						'value': '410822',
						'label': '博爱县'
					},
					{
						'value': '410823',
						'label': '武陟县'
					},
					{
						'value': '410825',
						'label': '温　县'
					},
					{
						'value': '410882',
						'label': '沁阳市'
					},
					{
						'value': '410883',
						'label': '孟州市'
					}
				]
			},
			{
				'value': '410900',
				'label': '濮阳市',
				'children': [
					{
						'value': '410902',
						'label': '华龙区'
					},
					{
						'value': '410922',
						'label': '清丰县'
					},
					{
						'value': '410923',
						'label': '南乐县'
					},
					{
						'value': '410926',
						'label': '范　县'
					},
					{
						'value': '410927',
						'label': '台前县'
					},
					{
						'value': '410928',
						'label': '濮阳县'
					}
				]
			},
			{
				'value': '411000',
				'label': '许昌市',
				'children': [
					{
						'value': '411002',
						'label': '魏都区'
					},
					{
						'value': '411023',
						'label': '许昌县'
					},
					{
						'value': '411024',
						'label': '鄢陵县'
					},
					{
						'value': '411025',
						'label': '襄城县'
					},
					{
						'value': '411081',
						'label': '禹州市'
					},
					{
						'value': '411082',
						'label': '长葛市'
					}
				]
			},
			{
				'value': '411100',
				'label': '漯河市',
				'children': [
					{
						'value': '411102',
						'label': '源汇区'
					},
					{
						'value': '411103',
						'label': '郾城区'
					},
					{
						'value': '411104',
						'label': '召陵区'
					},
					{
						'value': '411121',
						'label': '舞阳县'
					},
					{
						'value': '411122',
						'label': '临颍县'
					}
				]
			},
			{
				'value': '411200',
				'label': '三门峡市',
				'children': [
					{
						'value': '411202',
						'label': '湖滨区'
					},
					{
						'value': '411221',
						'label': '渑池县'
					},
					{
						'value': '411222',
						'label': '陕　县'
					},
					{
						'value': '411224',
						'label': '卢氏县'
					},
					{
						'value': '411281',
						'label': '义马市'
					},
					{
						'value': '411282',
						'label': '灵宝市'
					}
				]
			},
			{
				'value': '411300',
				'label': '南阳市',
				'children': [
					{
						'value': '411302',
						'label': '宛城区'
					},
					{
						'value': '411303',
						'label': '卧龙区'
					},
					{
						'value': '411321',
						'label': '南召县'
					},
					{
						'value': '411322',
						'label': '方城县'
					},
					{
						'value': '411323',
						'label': '西峡县'
					},
					{
						'value': '411324',
						'label': '镇平县'
					},
					{
						'value': '411325',
						'label': '内乡县'
					},
					{
						'value': '411326',
						'label': '淅川县'
					},
					{
						'value': '411327',
						'label': '社旗县'
					},
					{
						'value': '411328',
						'label': '唐河县'
					},
					{
						'value': '411329',
						'label': '新野县'
					},
					{
						'value': '411330',
						'label': '桐柏县'
					},
					{
						'value': '411381',
						'label': '邓州市'
					}
				]
			},
			{
				'value': '411400',
				'label': '商丘市',
				'children': [
					{
						'value': '411402',
						'label': '梁园区'
					},
					{
						'value': '411403',
						'label': '睢阳区'
					},
					{
						'value': '411421',
						'label': '民权县'
					},
					{
						'value': '411422',
						'label': '睢　县'
					},
					{
						'value': '411423',
						'label': '宁陵县'
					},
					{
						'value': '411424',
						'label': '柘城县'
					},
					{
						'value': '411425',
						'label': '虞城县'
					},
					{
						'value': '411426',
						'label': '夏邑县'
					},
					{
						'value': '411481',
						'label': '永城市'
					}
				]
			},
			{
				'value': '411500',
				'label': '信阳市',
				'children': [
					{
						'value': '411502',
						'label': '浉河区'
					},
					{
						'value': '411503',
						'label': '平桥区'
					},
					{
						'value': '411521',
						'label': '罗山县'
					},
					{
						'value': '411522',
						'label': '光山县'
					},
					{
						'value': '411523',
						'label': '新　县'
					},
					{
						'value': '411524',
						'label': '商城县'
					},
					{
						'value': '411525',
						'label': '固始县'
					},
					{
						'value': '411526',
						'label': '潢川县'
					},
					{
						'value': '411527',
						'label': '淮滨县'
					},
					{
						'value': '411528',
						'label': '息　县'
					}
				]
			},
			{
				'value': '411600',
				'label': '周口市',
				'children': [
					{
						'value': '411602',
						'label': '川汇区'
					},
					{
						'value': '411621',
						'label': '扶沟县'
					},
					{
						'value': '411622',
						'label': '西华县'
					},
					{
						'value': '411623',
						'label': '商水县'
					},
					{
						'value': '411624',
						'label': '沈丘县'
					},
					{
						'value': '411625',
						'label': '郸城县'
					},
					{
						'value': '411626',
						'label': '淮阳县'
					},
					{
						'value': '411627',
						'label': '太康县'
					},
					{
						'value': '411628',
						'label': '鹿邑县'
					},
					{
						'value': '411681',
						'label': '项城市'
					}
				]
			},
			{
				'value': '411700',
				'label': '驻马店市',
				'children': [
					{
						'value': '411702',
						'label': '驿城区'
					},
					{
						'value': '411721',
						'label': '西平县'
					},
					{
						'value': '411722',
						'label': '上蔡县'
					},
					{
						'value': '411723',
						'label': '平舆县'
					},
					{
						'value': '411724',
						'label': '正阳县'
					},
					{
						'value': '411725',
						'label': '确山县'
					},
					{
						'value': '411726',
						'label': '泌阳县'
					},
					{
						'value': '411727',
						'label': '汝南县'
					},
					{
						'value': '411728',
						'label': '遂平县'
					},
					{
						'value': '411729',
						'label': '新蔡县'
					}
				]
			},
			{
				'value': '419000',
				'label': '省直辖县级行政区划',
				'children': [
					{
						'value': '419001',
						'label': '济源市'
					}
				]
			}
		]
	},
	{
		'value': '420000',
		'label': '湖北省',
		'children': [
			{
				'value': '420100',
				'label': '武汉市',
				'children': [
					{
						'value': '420102',
						'label': '江岸区'
					},
					{
						'value': '420103',
						'label': '江汉区'
					},
					{
						'value': '420104',
						'label': '硚口区'
					},
					{
						'value': '420105',
						'label': '汉阳区'
					},
					{
						'value': '420106',
						'label': '武昌区'
					},
					{
						'value': '420107',
						'label': '青山区'
					},
					{
						'value': '420111',
						'label': '洪山区'
					},
					{
						'value': '420112',
						'label': '东西湖区'
					},
					{
						'value': '420113',
						'label': '汉南区'
					},
					{
						'value': '420114',
						'label': '蔡甸区'
					},
					{
						'value': '420115',
						'label': '江夏区'
					},
					{
						'value': '420116',
						'label': '黄陂区'
					},
					{
						'value': '420117',
						'label': '新洲区'
					}
				]
			},
			{
				'value': '420200',
				'label': '黄石市',
				'children': [
					{
						'value': '420202',
						'label': '黄石港区'
					},
					{
						'value': '420203',
						'label': '西塞山区'
					},
					{
						'value': '420204',
						'label': '下陆区'
					},
					{
						'value': '420205',
						'label': '铁山区'
					},
					{
						'value': '420222',
						'label': '阳新县'
					},
					{
						'value': '420281',
						'label': '大冶市'
					}
				]
			},
			{
				'value': '420300',
				'label': '十堰市',
				'children': [
					{
						'value': '420302',
						'label': '茅箭区'
					},
					{
						'value': '420303',
						'label': '张湾区'
					},
					{
						'value': '420304',
						'label': '郧阳区'
					},
					{
						'value': '420322',
						'label': '郧西县'
					},
					{
						'value': '420323',
						'label': '竹山县'
					},
					{
						'value': '420324',
						'label': '竹溪县'
					},
					{
						'value': '420325',
						'label': '房　县'
					},
					{
						'value': '420381',
						'label': '丹江口市'
					}
				]
			},
			{
				'value': '420500',
				'label': '宜昌市',
				'children': [
					{
						'value': '420502',
						'label': '西陵区'
					},
					{
						'value': '420503',
						'label': '伍家岗区'
					},
					{
						'value': '420504',
						'label': '点军区'
					},
					{
						'value': '420505',
						'label': '猇亭区'
					},
					{
						'value': '420506',
						'label': '夷陵区'
					},
					{
						'value': '420525',
						'label': '远安县'
					},
					{
						'value': '420526',
						'label': '兴山县'
					},
					{
						'value': '420527',
						'label': '秭归县'
					},
					{
						'value': '420528',
						'label': '长阳土家族自治县'
					},
					{
						'value': '420529',
						'label': '五峰土家族自治县'
					},
					{
						'value': '420581',
						'label': '宜都市'
					},
					{
						'value': '420582',
						'label': '当阳市'
					},
					{
						'value': '420583',
						'label': '枝江市'
					}
				]
			},
			{
				'value': '420600',
				'label': '襄阳市',
				'children': [
					{
						'value': '420602',
						'label': '襄城区'
					},
					{
						'value': '420606',
						'label': '樊城区'
					},
					{
						'value': '420607',
						'label': '襄州区'
					},
					{
						'value': '420624',
						'label': '南漳县'
					},
					{
						'value': '420625',
						'label': '谷城县'
					},
					{
						'value': '420626',
						'label': '保康县'
					},
					{
						'value': '420682',
						'label': '老河口市'
					},
					{
						'value': '420683',
						'label': '枣阳市'
					},
					{
						'value': '420684',
						'label': '宜城市'
					}
				]
			},
			{
				'value': '420700',
				'label': '鄂州市',
				'children': [
					{
						'value': '420702',
						'label': '梁子湖区'
					},
					{
						'value': '420703',
						'label': '华容区'
					},
					{
						'value': '420704',
						'label': '鄂城区'
					}
				]
			},
			{
				'value': '420800',
				'label': '荆门市',
				'children': [
					{
						'value': '420802',
						'label': '东宝区'
					},
					{
						'value': '420804',
						'label': '掇刀区'
					},
					{
						'value': '420821',
						'label': '京山县'
					},
					{
						'value': '420822',
						'label': '沙洋县'
					},
					{
						'value': '420881',
						'label': '钟祥市'
					}
				]
			},
			{
				'value': '420900',
				'label': '孝感市',
				'children': [
					{
						'value': '420902',
						'label': '孝南区'
					},
					{
						'value': '420921',
						'label': '孝昌县'
					},
					{
						'value': '420922',
						'label': '大悟县'
					},
					{
						'value': '420923',
						'label': '云梦县'
					},
					{
						'value': '420981',
						'label': '应城市'
					},
					{
						'value': '420982',
						'label': '安陆市'
					},
					{
						'value': '420984',
						'label': '汉川市'
					}
				]
			},
			{
				'value': '421000',
				'label': '荆州市',
				'children': [
					{
						'value': '421002',
						'label': '沙市区'
					},
					{
						'value': '421003',
						'label': '荆州区'
					},
					{
						'value': '421022',
						'label': '公安县'
					},
					{
						'value': '421023',
						'label': '监利县'
					},
					{
						'value': '421024',
						'label': '江陵县'
					},
					{
						'value': '421081',
						'label': '石首市'
					},
					{
						'value': '421083',
						'label': '洪湖市'
					},
					{
						'value': '421087',
						'label': '松滋市'
					}
				]
			},
			{
				'value': '421100',
				'label': '黄冈市',
				'children': [
					{
						'value': '421102',
						'label': '黄州区'
					},
					{
						'value': '421121',
						'label': '团风县'
					},
					{
						'value': '421122',
						'label': '红安县'
					},
					{
						'value': '421123',
						'label': '罗田县'
					},
					{
						'value': '421124',
						'label': '英山县'
					},
					{
						'value': '421125',
						'label': '浠水县'
					},
					{
						'value': '421126',
						'label': '蕲春县'
					},
					{
						'value': '421127',
						'label': '黄梅县'
					},
					{
						'value': '421181',
						'label': '麻城市'
					},
					{
						'value': '421182',
						'label': '武穴市'
					}
				]
			},
			{
				'value': '421200',
				'label': '咸宁市',
				'children': [
					{
						'value': '421202',
						'label': '咸安区'
					},
					{
						'value': '421221',
						'label': '嘉鱼县'
					},
					{
						'value': '421222',
						'label': '通城县'
					},
					{
						'value': '421223',
						'label': '崇阳县'
					},
					{
						'value': '421224',
						'label': '通山县'
					},
					{
						'value': '421281',
						'label': '赤壁市'
					}
				]
			},
			{
				'value': '421300',
				'label': '随州市',
				'children': [
					{
						'value': '421302',
						'label': '曾都区'
					},
					{
						'value': '421321',
						'label': '随县'
					},
					{
						'value': '421381',
						'label': '广水市'
					}
				]
			},
			{
				'value': '422800',
				'label': '恩施土家族苗族自治州',
				'children': [
					{
						'value': '422801',
						'label': '恩施市'
					},
					{
						'value': '422802',
						'label': '利川市'
					},
					{
						'value': '422822',
						'label': '建始县'
					},
					{
						'value': '422823',
						'label': '巴东县'
					},
					{
						'value': '422825',
						'label': '宣恩县'
					},
					{
						'value': '422826',
						'label': '咸丰县'
					},
					{
						'value': '422827',
						'label': '来凤县'
					},
					{
						'value': '422828',
						'label': '鹤峰县'
					}
				]
			},
			{
				'value': '429000',
				'label': '省直辖县级行政区划',
				'children': [
					{
						'value': '429004',
						'label': '仙桃市'
					},
					{
						'value': '429005',
						'label': '潜江市'
					},
					{
						'value': '429006',
						'label': '天门市'
					},
					{
						'value': '429021',
						'label': '神农架林区'
					}
				]
			}
		]
	},
	{
		'value': '430000',
		'label': '湖南省',
		'children': [
			{
				'value': '430100',
				'label': '长沙市',
				'children': [
					{
						'value': '430102',
						'label': '芙蓉区'
					},
					{
						'value': '430103',
						'label': '天心区'
					},
					{
						'value': '430104',
						'label': '岳麓区'
					},
					{
						'value': '430105',
						'label': '开福区'
					},
					{
						'value': '430111',
						'label': '雨花区'
					},
					{
						'value': '430112',
						'label': '望城区'
					},
					{
						'value': '430121',
						'label': '长沙县'
					},
					{
						'value': '430124',
						'label': '宁乡县'
					},
					{
						'value': '430181',
						'label': '浏阳市'
					}
				]
			},
			{
				'value': '430200',
				'label': '株洲市',
				'children': [
					{
						'value': '430202',
						'label': '荷塘区'
					},
					{
						'value': '430203',
						'label': '芦淞区'
					},
					{
						'value': '430204',
						'label': '石峰区'
					},
					{
						'value': '430211',
						'label': '天元区'
					},
					{
						'value': '430221',
						'label': '株洲县'
					},
					{
						'value': '430223',
						'label': '攸　县'
					},
					{
						'value': '430224',
						'label': '茶陵县'
					},
					{
						'value': '430225',
						'label': '炎陵县'
					},
					{
						'value': '430281',
						'label': '醴陵市'
					}
				]
			},
			{
				'value': '430300',
				'label': '湘潭市',
				'children': [
					{
						'value': '430302',
						'label': '雨湖区'
					},
					{
						'value': '430304',
						'label': '岳塘区'
					},
					{
						'value': '430321',
						'label': '湘潭县'
					},
					{
						'value': '430381',
						'label': '湘乡市'
					},
					{
						'value': '430382',
						'label': '韶山市'
					}
				]
			},
			{
				'value': '430400',
				'label': '衡阳市',
				'children': [
					{
						'value': '430405',
						'label': '珠晖区'
					},
					{
						'value': '430406',
						'label': '雁峰区'
					},
					{
						'value': '430407',
						'label': '石鼓区'
					},
					{
						'value': '430408',
						'label': '蒸湘区'
					},
					{
						'value': '430412',
						'label': '南岳区'
					},
					{
						'value': '430421',
						'label': '衡阳县'
					},
					{
						'value': '430422',
						'label': '衡南县'
					},
					{
						'value': '430423',
						'label': '衡山县'
					},
					{
						'value': '430424',
						'label': '衡东县'
					},
					{
						'value': '430426',
						'label': '祁东县'
					},
					{
						'value': '430481',
						'label': '耒阳市'
					},
					{
						'value': '430482',
						'label': '常宁市'
					}
				]
			},
			{
				'value': '430500',
				'label': '邵阳市',
				'children': [
					{
						'value': '430502',
						'label': '双清区'
					},
					{
						'value': '430503',
						'label': '大祥区'
					},
					{
						'value': '430511',
						'label': '北塔区'
					},
					{
						'value': '430521',
						'label': '邵东县'
					},
					{
						'value': '430522',
						'label': '新邵县'
					},
					{
						'value': '430523',
						'label': '邵阳县'
					},
					{
						'value': '430524',
						'label': '隆回县'
					},
					{
						'value': '430525',
						'label': '洞口县'
					},
					{
						'value': '430527',
						'label': '绥宁县'
					},
					{
						'value': '430528',
						'label': '新宁县'
					},
					{
						'value': '430529',
						'label': '城步苗族自治县'
					},
					{
						'value': '430581',
						'label': '武冈市'
					}
				]
			},
			{
				'value': '430600',
				'label': '岳阳市',
				'children': [
					{
						'value': '430602',
						'label': '岳阳楼区'
					},
					{
						'value': '430603',
						'label': '云溪区'
					},
					{
						'value': '430611',
						'label': '君山区'
					},
					{
						'value': '430621',
						'label': '岳阳县'
					},
					{
						'value': '430623',
						'label': '华容县'
					},
					{
						'value': '430624',
						'label': '湘阴县'
					},
					{
						'value': '430626',
						'label': '平江县'
					},
					{
						'value': '430681',
						'label': '汨罗市'
					},
					{
						'value': '430682',
						'label': '临湘市'
					}
				]
			},
			{
				'value': '430700',
				'label': '常德市',
				'children': [
					{
						'value': '430702',
						'label': '武陵区'
					},
					{
						'value': '430703',
						'label': '鼎城区'
					},
					{
						'value': '430721',
						'label': '安乡县'
					},
					{
						'value': '430722',
						'label': '汉寿县'
					},
					{
						'value': '430723',
						'label': '澧　县'
					},
					{
						'value': '430724',
						'label': '临澧县'
					},
					{
						'value': '430725',
						'label': '桃源县'
					},
					{
						'value': '430726',
						'label': '石门县'
					},
					{
						'value': '430781',
						'label': '津市市'
					}
				]
			},
			{
				'value': '430800',
				'label': '张家界市',
				'children': [
					{
						'value': '430802',
						'label': '永定区'
					},
					{
						'value': '430811',
						'label': '武陵源区'
					},
					{
						'value': '430821',
						'label': '慈利县'
					},
					{
						'value': '430822',
						'label': '桑植县'
					}
				]
			},
			{
				'value': '430900',
				'label': '益阳市',
				'children': [
					{
						'value': '430902',
						'label': '资阳区'
					},
					{
						'value': '430903',
						'label': '赫山区'
					},
					{
						'value': '430921',
						'label': '南　县'
					},
					{
						'value': '430922',
						'label': '桃江县'
					},
					{
						'value': '430923',
						'label': '安化县'
					},
					{
						'value': '430981',
						'label': '沅江市'
					}
				]
			},
			{
				'value': '431000',
				'label': '郴州市',
				'children': [
					{
						'value': '431002',
						'label': '北湖区'
					},
					{
						'value': '431003',
						'label': '苏仙区'
					},
					{
						'value': '431021',
						'label': '桂阳县'
					},
					{
						'value': '431022',
						'label': '宜章县'
					},
					{
						'value': '431023',
						'label': '永兴县'
					},
					{
						'value': '431024',
						'label': '嘉禾县'
					},
					{
						'value': '431025',
						'label': '临武县'
					},
					{
						'value': '431026',
						'label': '汝城县'
					},
					{
						'value': '431027',
						'label': '桂东县'
					},
					{
						'value': '431028',
						'label': '安仁县'
					},
					{
						'value': '431081',
						'label': '资兴市'
					}
				]
			},
			{
				'value': '431100',
				'label': '永州市',
				'children': [
					{
						'value': '431102',
						'label': '零陵区'
					},
					{
						'value': '431103',
						'label': '冷水滩区'
					},
					{
						'value': '431121',
						'label': '祁阳县'
					},
					{
						'value': '431122',
						'label': '东安县'
					},
					{
						'value': '431123',
						'label': '双牌县'
					},
					{
						'value': '431124',
						'label': '道　县'
					},
					{
						'value': '431125',
						'label': '江永县'
					},
					{
						'value': '431126',
						'label': '宁远县'
					},
					{
						'value': '431127',
						'label': '蓝山县'
					},
					{
						'value': '431128',
						'label': '新田县'
					},
					{
						'value': '431129',
						'label': '江华瑶族自治县'
					}
				]
			},
			{
				'value': '431200',
				'label': '怀化市',
				'children': [
					{
						'value': '431202',
						'label': '鹤城区'
					},
					{
						'value': '431221',
						'label': '中方县'
					},
					{
						'value': '431222',
						'label': '沅陵县'
					},
					{
						'value': '431223',
						'label': '辰溪县'
					},
					{
						'value': '431224',
						'label': '溆浦县'
					},
					{
						'value': '431225',
						'label': '会同县'
					},
					{
						'value': '431226',
						'label': '麻阳苗族自治县'
					},
					{
						'value': '431227',
						'label': '新晃侗族自治县'
					},
					{
						'value': '431228',
						'label': '芷江侗族自治县'
					},
					{
						'value': '431229',
						'label': '靖州苗族侗族自治县'
					},
					{
						'value': '431230',
						'label': '通道侗族自治县'
					},
					{
						'value': '431281',
						'label': '洪江市'
					}
				]
			},
			{
				'value': '431300',
				'label': '娄底市',
				'children': [
					{
						'value': '431302',
						'label': '娄星区'
					},
					{
						'value': '431321',
						'label': '双峰县'
					},
					{
						'value': '431322',
						'label': '新化县'
					},
					{
						'value': '431381',
						'label': '冷水江市'
					},
					{
						'value': '431382',
						'label': '涟源市'
					}
				]
			},
			{
				'value': '433100',
				'label': '湘西土家族苗族自治州',
				'children': [
					{
						'value': '433101',
						'label': '吉首市'
					},
					{
						'value': '433122',
						'label': '泸溪县'
					},
					{
						'value': '433123',
						'label': '凤凰县'
					},
					{
						'value': '433124',
						'label': '花垣县'
					},
					{
						'value': '433125',
						'label': '保靖县'
					},
					{
						'value': '433126',
						'label': '古丈县'
					},
					{
						'value': '433127',
						'label': '永顺县'
					},
					{
						'value': '433130',
						'label': '龙山县'
					}
				]
			}
		]
	},
	{
		'value': '440000',
		'label': '广东省',
		'children': [
			{
				'value': '440100',
				'label': '广州市',
				'children': [
					{
						'value': '440103',
						'label': '荔湾区'
					},
					{
						'value': '440104',
						'label': '越秀区'
					},
					{
						'value': '440105',
						'label': '海珠区'
					},
					{
						'value': '440106',
						'label': '天河区'
					},
					{
						'value': '440111',
						'label': '白云区'
					},
					{
						'value': '440112',
						'label': '黄埔区'
					},
					{
						'value': '440113',
						'label': '番禺区'
					},
					{
						'value': '440114',
						'label': '花都区'
					},
					{
						'value': '440115',
						'label': '南沙区'
					},
					{
						'value': '440117',
						'label': '萝岗区'
					},
					{
						'value': '440183',
						'label': '增城市'
					},
					{
						'value': '440184',
						'label': '从化区'
					}
				]
			},
			{
				'value': '440200',
				'label': '韶关市',
				'children': [
					{
						'value': '440203',
						'label': '武江区'
					},
					{
						'value': '440204',
						'label': '浈江区'
					},
					{
						'value': '440205',
						'label': '曲江区'
					},
					{
						'value': '440222',
						'label': '始兴县'
					},
					{
						'value': '440224',
						'label': '仁化县'
					},
					{
						'value': '440229',
						'label': '翁源县'
					},
					{
						'value': '440232',
						'label': '乳源瑶族自治县'
					},
					{
						'value': '440233',
						'label': '新丰县'
					},
					{
						'value': '440281',
						'label': '乐昌市'
					},
					{
						'value': '440282',
						'label': '南雄市'
					}
				]
			},
			{
				'value': '440300',
				'label': '深圳市',
				'children': [
					{
						'value': '440303',
						'label': '罗湖区'
					},
					{
						'value': '440304',
						'label': '福田区'
					},
					{
						'value': '440305',
						'label': '南山区'
					},
					{
						'value': '440306',
						'label': '宝安区'
					},
					{
						'value': '440307',
						'label': '龙岗区'
					},
					{
						'value': '440308',
						'label': '盐田区'
					},
					{
						'value': '440309',
						'label': '大鹏新区'
					},
					{
						'value': '440310',
						'label': '坪山新区'
					},
					{
						'value': '440311',
						'label': '光明新区'
					},
					{
						'value': '440312',
						'label': '龙华新区'
					}
				]
			},
			{
				'value': '440400',
				'label': '珠海市',
				'children': [
					{
						'value': '440402',
						'label': '香洲区'
					},
					{
						'value': '440403',
						'label': '斗门区'
					},
					{
						'value': '440404',
						'label': '金湾区'
					}
				]
			},
			{
				'value': '440500',
				'label': '汕头市',
				'children': [
					{
						'value': '440507',
						'label': '龙湖区'
					},
					{
						'value': '440511',
						'label': '金平区'
					},
					{
						'value': '440512',
						'label': '濠江区'
					},
					{
						'value': '440513',
						'label': '潮阳区'
					},
					{
						'value': '440514',
						'label': '潮南区'
					},
					{
						'value': '440515',
						'label': '澄海区'
					},
					{
						'value': '440523',
						'label': '南澳县'
					}
				]
			},
			{
				'value': '440600',
				'label': '佛山市',
				'children': [
					{
						'value': '440604',
						'label': '禅城区'
					},
					{
						'value': '440605',
						'label': '南海区'
					},
					{
						'value': '440606',
						'label': '顺德区'
					},
					{
						'value': '440607',
						'label': '三水区'
					},
					{
						'value': '440608',
						'label': '高明区'
					}
				]
			},
			{
				'value': '440700',
				'label': '江门市',
				'children': [
					{
						'value': '440703',
						'label': '蓬江区'
					},
					{
						'value': '440704',
						'label': '江海区'
					},
					{
						'value': '440705',
						'label': '新会区'
					},
					{
						'value': '440781',
						'label': '台山市'
					},
					{
						'value': '440783',
						'label': '开平市'
					},
					{
						'value': '440784',
						'label': '鹤山市'
					},
					{
						'value': '440785',
						'label': '恩平市'
					}
				]
			},
			{
				'value': '440800',
				'label': '湛江市',
				'children': [
					{
						'value': '440802',
						'label': '赤坎区'
					},
					{
						'value': '440803',
						'label': '霞山区'
					},
					{
						'value': '440804',
						'label': '坡头区'
					},
					{
						'value': '440811',
						'label': '麻章区'
					},
					{
						'value': '440823',
						'label': '遂溪县'
					},
					{
						'value': '440825',
						'label': '徐闻县'
					},
					{
						'value': '440881',
						'label': '廉江市'
					},
					{
						'value': '440882',
						'label': '雷州市'
					},
					{
						'value': '440883',
						'label': '吴川市'
					},
					{
						'value': '440890',
						'label': '经济技术开发区'
					}
				]
			},
			{
				'value': '440900',
				'label': '茂名市',
				'children': [
					{
						'value': '440902',
						'label': '茂南区'
					},
					{
						'value': '440903',
						'label': '茂港区'
					},
					{
						'value': '440923',
						'label': '电白县'
					},
					{
						'value': '440981',
						'label': '高州市'
					},
					{
						'value': '440982',
						'label': '化州市'
					},
					{
						'value': '440983',
						'label': '信宜市'
					}
				]
			},
			{
				'value': '441200',
				'label': '肇庆市',
				'children': [
					{
						'value': '441202',
						'label': '端州区'
					},
					{
						'value': '441203',
						'label': '鼎湖区'
					},
					{
						'value': '441204',
						'label': '高要区'
					},
					{
						'value': '441223',
						'label': '广宁县'
					},
					{
						'value': '441224',
						'label': '怀集县'
					},
					{
						'value': '441225',
						'label': '封开县'
					},
					{
						'value': '441226',
						'label': '德庆县'
					},
					{
						'value': '441284',
						'label': '四会市'
					}
				]
			},
			{
				'value': '441300',
				'label': '惠州市',
				'children': [
					{
						'value': '441302',
						'label': '惠城区'
					},
					{
						'value': '441303',
						'label': '惠阳区'
					},
					{
						'value': '441322',
						'label': '博罗县'
					},
					{
						'value': '441323',
						'label': '惠东县'
					},
					{
						'value': '441324',
						'label': '龙门县'
					},
					{
						'value': '441326',
						'label': '大亚湾区'
					}
				]
			},
			{
				'value': '441400',
				'label': '梅州市',
				'children': [
					{
						'value': '441402',
						'label': '梅江区'
					},
					{
						'value': '441421',
						'label': '梅　县'
					},
					{
						'value': '441422',
						'label': '大埔县'
					},
					{
						'value': '441423',
						'label': '丰顺县'
					},
					{
						'value': '441424',
						'label': '五华县'
					},
					{
						'value': '441426',
						'label': '平远县'
					},
					{
						'value': '441427',
						'label': '蕉岭县'
					},
					{
						'value': '441481',
						'label': '兴宁市'
					}
				]
			},
			{
				'value': '441500',
				'label': '汕尾市',
				'children': [
					{
						'value': '441502',
						'label': '城　区'
					},
					{
						'value': '441521',
						'label': '海丰县'
					},
					{
						'value': '441523',
						'label': '陆河县'
					},
					{
						'value': '441581',
						'label': '陆丰市'
					}
				]
			},
			{
				'value': '441600',
				'label': '河源市',
				'children': [
					{
						'value': '441602',
						'label': '源城区'
					},
					{
						'value': '441621',
						'label': '紫金县'
					},
					{
						'value': '441622',
						'label': '龙川县'
					},
					{
						'value': '441623',
						'label': '连平县'
					},
					{
						'value': '441624',
						'label': '和平县'
					},
					{
						'value': '441625',
						'label': '东源县'
					}
				]
			},
			{
				'value': '441700',
				'label': '阳江市',
				'children': [
					{
						'value': '441702',
						'label': '江城区'
					},
					{
						'value': '441704',
						'label': '阳东区'
					},
					{
						'value': '441721',
						'label': '阳西县'
					},
					{
						'value': '441781',
						'label': '阳春市'
					}
				]
			},
			{
				'value': '441800',
				'label': '清远市',
				'children': [
					{
						'value': '441802',
						'label': '清城区'
					},
					{
						'value': '441803',
						'label': '清新区'
					},
					{
						'value': '441821',
						'label': '佛冈县'
					},
					{
						'value': '441823',
						'label': '阳山县'
					},
					{
						'value': '441825',
						'label': '连山壮族瑶族自治县'
					},
					{
						'value': '441826',
						'label': '连南瑶族自治县'
					},
					{
						'value': '441881',
						'label': '英德市'
					},
					{
						'value': '441882',
						'label': '连州市'
					}
				]
			},
			{
				'value': '441900',
				'label': '东莞市',
				'children': [
					{
						'value': '659005',
						'label': '莞城区'
					},
					{
						'value': '659006',
						'label': '南城区'
					},
					{
						'value': '659007',
						'label': '东城区'
					},
					{
						'value': '659008',
						'label': '万江区'
					},
					{
						'value': '659009',
						'label': '石碣镇'
					},
					{
						'value': '659010',
						'label': '石龙镇'
					},
					{
						'value': '659011',
						'label': '茶山镇'
					},
					{
						'value': '659012',
						'label': '石排镇'
					},
					{
						'value': '659013',
						'label': '企石镇'
					},
					{
						'value': '659014',
						'label': '横沥镇'
					},
					{
						'value': '659015',
						'label': '桥头镇'
					},
					{
						'value': '659016',
						'label': '谢岗镇'
					},
					{
						'value': '659017',
						'label': '东坑镇'
					},
					{
						'value': '659018',
						'label': '常平镇'
					},
					{
						'value': '659019',
						'label': '寮步镇'
					},
					{
						'value': '659020',
						'label': '大朗镇'
					},
					{
						'value': '659021',
						'label': '黄江镇'
					},
					{
						'value': '659022',
						'label': '清溪镇'
					},
					{
						'value': '659023',
						'label': '塘厦镇'
					},
					{
						'value': '659024',
						'label': '凤岗镇'
					},
					{
						'value': '659025',
						'label': '长安镇'
					},
					{
						'value': '659026',
						'label': '虎门镇'
					},
					{
						'value': '659027',
						'label': '厚街镇'
					},
					{
						'value': '659028',
						'label': '沙田镇'
					},
					{
						'value': '659029',
						'label': '道滘镇'
					},
					{
						'value': '659030',
						'label': '洪梅镇'
					},
					{
						'value': '659031',
						'label': '麻涌镇'
					},
					{
						'value': '659032',
						'label': '中堂镇'
					},
					{
						'value': '659033',
						'label': '高埗镇'
					},
					{
						'value': '659034',
						'label': '樟木头镇'
					},
					{
						'value': '659035',
						'label': '大岭山镇'
					},
					{
						'value': '659036',
						'label': '望牛墩镇'
					}
				]
			},
			{
				'value': '442000',
				'label': '中山市',
				'children': [
					{
						'value': '442001',
						'label': '石岐区街道'
					},
					{
						'value': '442002',
						'label': '东区街道'
					},
					{
						'value': '442003',
						'label': '火炬开发区'
					},
					{
						'value': '442004',
						'label': '西区街道'
					},
					{
						'value': '442005',
						'label': '南区街道'
					},
					{
						'value': '442006',
						'label': '五桂山街道'
					},
					{
						'value': '659037',
						'label': '板芙镇'
					},
					{
						'value': '659038',
						'label': '大涌镇'
					},
					{
						'value': '659039',
						'label': '东凤镇'
					},
					{
						'value': '659040',
						'label': '东升镇'
					},
					{
						'value': '659041',
						'label': '阜沙镇'
					},
					{
						'value': '659042',
						'label': '港口镇'
					},
					{
						'value': '659043',
						'label': '古镇'
					},
					{
						'value': '659044',
						'label': '横栏镇'
					},
					{
						'value': '659045',
						'label': '黄圃镇'
					},
					{
						'value': '659046',
						'label': '民众镇'
					},
					{
						'value': '659047',
						'label': '南朗镇'
					},
					{
						'value': '659048',
						'label': '南头镇'
					},
					{
						'value': '659049',
						'label': '三角镇'
					},
					{
						'value': '659050',
						'label': '三乡镇'
					},
					{
						'value': '659051',
						'label': '沙溪镇'
					},
					{
						'value': '659052',
						'label': '神湾镇'
					},
					{
						'value': '659053',
						'label': '坦洲镇'
					},
					{
						'value': '659054',
						'label': '小榄镇'
					}
				]
			},
			{
				'value': '445100',
				'label': '潮州市',
				'children': [
					{
						'value': '445102',
						'label': '湘桥区'
					},
					{
						'value': '445103',
						'label': '潮安区'
					},
					{
						'value': '445104',
						'label': '枫溪区'
					},
					{
						'value': '445122',
						'label': '饶平县'
					}
				]
			},
			{
				'value': '445200',
				'label': '揭阳市',
				'children': [
					{
						'value': '445202',
						'label': '榕城区'
					},
					{
						'value': '445221',
						'label': '揭东区'
					},
					{
						'value': '445222',
						'label': '揭西县'
					},
					{
						'value': '445224',
						'label': '惠来县'
					},
					{
						'value': '445281',
						'label': '普宁市'
					}
				]
			},
			{
				'value': '445300',
				'label': '云浮市',
				'children': [
					{
						'value': '445302',
						'label': '云城区'
					},
					{
						'value': '445303',
						'label': '云安区'
					},
					{
						'value': '445321',
						'label': '新兴县'
					},
					{
						'value': '445322',
						'label': '郁南县'
					},
					{
						'value': '445381',
						'label': '罗定市'
					}
				]
			}
		]
	},
	{
		'value': '450000',
		'label': '广西壮族自治区',
		'children': [
			{
				'value': '450100',
				'label': '南宁市',
				'children': [
					{
						'value': '450102',
						'label': '兴宁区'
					},
					{
						'value': '450103',
						'label': '青秀区'
					},
					{
						'value': '450105',
						'label': '江南区'
					},
					{
						'value': '450107',
						'label': '西乡塘区'
					},
					{
						'value': '450108',
						'label': '良庆区'
					},
					{
						'value': '450109',
						'label': '邕宁区'
					},
					{
						'value': '450122',
						'label': '武鸣县'
					},
					{
						'value': '450123',
						'label': '隆安县'
					},
					{
						'value': '450124',
						'label': '马山县'
					},
					{
						'value': '450125',
						'label': '上林县'
					},
					{
						'value': '450126',
						'label': '宾阳县'
					},
					{
						'value': '450127',
						'label': '横　县'
					}
				]
			},
			{
				'value': '450200',
				'label': '柳州市',
				'children': [
					{
						'value': '450202',
						'label': '城中区'
					},
					{
						'value': '450203',
						'label': '鱼峰区'
					},
					{
						'value': '450204',
						'label': '柳南区'
					},
					{
						'value': '450205',
						'label': '柳北区'
					},
					{
						'value': '450221',
						'label': '柳江县'
					},
					{
						'value': '450222',
						'label': '柳城县'
					},
					{
						'value': '450223',
						'label': '鹿寨县'
					},
					{
						'value': '450224',
						'label': '融安县'
					},
					{
						'value': '450225',
						'label': '融水苗族自治县'
					},
					{
						'value': '450226',
						'label': '三江侗族自治县'
					}
				]
			},
			{
				'value': '450300',
				'label': '桂林市',
				'children': [
					{
						'value': '450302',
						'label': '秀峰区'
					},
					{
						'value': '450303',
						'label': '叠彩区'
					},
					{
						'value': '450304',
						'label': '象山区'
					},
					{
						'value': '450305',
						'label': '七星区'
					},
					{
						'value': '450311',
						'label': '雁山区'
					},
					{
						'value': '450321',
						'label': '阳朔县'
					},
					{
						'value': '450322',
						'label': '临桂区'
					},
					{
						'value': '450323',
						'label': '灵川县'
					},
					{
						'value': '450324',
						'label': '全州县'
					},
					{
						'value': '450325',
						'label': '兴安县'
					},
					{
						'value': '450326',
						'label': '永福县'
					},
					{
						'value': '450327',
						'label': '灌阳县'
					},
					{
						'value': '450328',
						'label': '龙胜各族自治县'
					},
					{
						'value': '450329',
						'label': '资源县'
					},
					{
						'value': '450330',
						'label': '平乐县'
					},
					{
						'value': '450331',
						'label': '荔蒲县'
					},
					{
						'value': '450332',
						'label': '恭城瑶族自治县'
					}
				]
			},
			{
				'value': '450400',
				'label': '梧州市',
				'children': [
					{
						'value': '450403',
						'label': '万秀区'
					},
					{
						'value': '450405',
						'label': '长洲区'
					},
					{
						'value': '450406',
						'label': '龙圩区'
					},
					{
						'value': '450421',
						'label': '苍梧县'
					},
					{
						'value': '450422',
						'label': '藤　县'
					},
					{
						'value': '450423',
						'label': '蒙山县'
					},
					{
						'value': '450481',
						'label': '岑溪市'
					}
				]
			},
			{
				'value': '450500',
				'label': '北海市',
				'children': [
					{
						'value': '450502',
						'label': '海城区'
					},
					{
						'value': '450503',
						'label': '银海区'
					},
					{
						'value': '450512',
						'label': '铁山港区'
					},
					{
						'value': '450521',
						'label': '合浦县'
					}
				]
			},
			{
				'value': '450600',
				'label': '防城港市',
				'children': [
					{
						'value': '450602',
						'label': '港口区'
					},
					{
						'value': '450603',
						'label': '防城区'
					},
					{
						'value': '450621',
						'label': '上思县'
					},
					{
						'value': '450681',
						'label': '东兴市'
					}
				]
			},
			{
				'value': '450700',
				'label': '钦州市',
				'children': [
					{
						'value': '450702',
						'label': '钦南区'
					},
					{
						'value': '450703',
						'label': '钦北区'
					},
					{
						'value': '450721',
						'label': '灵山县'
					},
					{
						'value': '450722',
						'label': '浦北县'
					}
				]
			},
			{
				'value': '450800',
				'label': '贵港市',
				'children': [
					{
						'value': '450802',
						'label': '港北区'
					},
					{
						'value': '450803',
						'label': '港南区'
					},
					{
						'value': '450804',
						'label': '覃塘区'
					},
					{
						'value': '450821',
						'label': '平南县'
					},
					{
						'value': '450881',
						'label': '桂平市'
					}
				]
			},
			{
				'value': '450900',
				'label': '玉林市',
				'children': [
					{
						'value': '450902',
						'label': '玉州区'
					},
					{
						'value': '450903',
						'label': '福绵区'
					},
					{
						'value': '450921',
						'label': '容　县'
					},
					{
						'value': '450922',
						'label': '陆川县'
					},
					{
						'value': '450923',
						'label': '博白县'
					},
					{
						'value': '450924',
						'label': '兴业县'
					},
					{
						'value': '450981',
						'label': '北流市'
					}
				]
			},
			{
				'value': '451000',
				'label': '百色市',
				'children': [
					{
						'value': '451002',
						'label': '右江区'
					},
					{
						'value': '451021',
						'label': '田阳县'
					},
					{
						'value': '451022',
						'label': '田东县'
					},
					{
						'value': '451023',
						'label': '平果县'
					},
					{
						'value': '451024',
						'label': '德保县'
					},
					{
						'value': '451025',
						'label': '靖西市'
					},
					{
						'value': '451026',
						'label': '那坡县'
					},
					{
						'value': '451027',
						'label': '凌云县'
					},
					{
						'value': '451028',
						'label': '乐业县'
					},
					{
						'value': '451029',
						'label': '田林县'
					},
					{
						'value': '451030',
						'label': '西林县'
					},
					{
						'value': '451031',
						'label': '隆林各族自治县'
					}
				]
			},
			{
				'value': '451100',
				'label': '贺州市',
				'children': [
					{
						'value': '451102',
						'label': '八步区'
					},
					{
						'value': '451121',
						'label': '昭平县'
					},
					{
						'value': '451122',
						'label': '钟山县'
					},
					{
						'value': '451123',
						'label': '富川瑶族自治县'
					}
				]
			},
			{
				'value': '451200',
				'label': '河池市',
				'children': [
					{
						'value': '451202',
						'label': '金城江区'
					},
					{
						'value': '451221',
						'label': '南丹县'
					},
					{
						'value': '451222',
						'label': '天峨县'
					},
					{
						'value': '451223',
						'label': '凤山县'
					},
					{
						'value': '451224',
						'label': '东兰县'
					},
					{
						'value': '451225',
						'label': '罗城仫佬族自治县'
					},
					{
						'value': '451226',
						'label': '环江毛南族自治县'
					},
					{
						'value': '451227',
						'label': '巴马瑶族自治县'
					},
					{
						'value': '451228',
						'label': '都安瑶族自治县'
					},
					{
						'value': '451229',
						'label': '大化瑶族自治县'
					},
					{
						'value': '451281',
						'label': '宜州市'
					}
				]
			},
			{
				'value': '451300',
				'label': '来宾市',
				'children': [
					{
						'value': '451302',
						'label': '兴宾区'
					},
					{
						'value': '451321',
						'label': '忻城县'
					},
					{
						'value': '451322',
						'label': '象州县'
					},
					{
						'value': '451323',
						'label': '武宣县'
					},
					{
						'value': '451324',
						'label': '金秀瑶族自治县'
					},
					{
						'value': '451381',
						'label': '合山市'
					}
				]
			},
			{
				'value': '451400',
				'label': '崇左市',
				'children': [
					{
						'value': '451402',
						'label': '江洲区'
					},
					{
						'value': '451421',
						'label': '扶绥县'
					},
					{
						'value': '451422',
						'label': '宁明县'
					},
					{
						'value': '451423',
						'label': '龙州县'
					},
					{
						'value': '451424',
						'label': '大新县'
					},
					{
						'value': '451425',
						'label': '天等县'
					},
					{
						'value': '451481',
						'label': '凭祥市'
					}
				]
			}
		]
	},
	{
		'value': '460000',
		'label': '海南省',
		'children': [
			{
				'value': '460100',
				'label': '海口市',
				'children': [
					{
						'value': '460105',
						'label': '秀英区'
					},
					{
						'value': '460106',
						'label': '龙华区'
					},
					{
						'value': '460107',
						'label': '琼山区'
					},
					{
						'value': '460108',
						'label': '美兰区'
					}
				]
			},
			{
				'value': '460200',
				'label': '三亚市',
				'children': [
					{
						'value': '659055',
						'label': '吉阳区'
					},
					{
						'value': '659056',
						'label': '天涯区'
					},
					{
						'value': '659057',
						'label': '崖州区'
					},
					{
						'value': '659058',
						'label': '海棠区'
					}
				]
			},
			{
				'value': '460300',
				'label': '三沙市',
				'children': [
					{
						'value': '460321',
						'label': '西沙群岛'
					},
					{
						'value': '460322',
						'label': '南沙群岛'
					},
					{
						'value': '460323',
						'label': '中沙群岛的岛礁及其海域'
					}
				]
			},
			{
				'value': '469000',
				'label': '省直辖县级行政区划',
				'children': [
					{
						'value': '469001',
						'label': '五指山市'
					},
					{
						'value': '469002',
						'label': '琼海市'
					},
					{
						'value': '469003',
						'label': '儋州市'
					},
					{
						'value': '469005',
						'label': '文昌市'
					},
					{
						'value': '469006',
						'label': '万宁市'
					},
					{
						'value': '469007',
						'label': '东方市'
					},
					{
						'value': '469021',
						'label': '定安县'
					},
					{
						'value': '469022',
						'label': '屯昌县'
					},
					{
						'value': '469023',
						'label': '澄迈县'
					},
					{
						'value': '469024',
						'label': '临高县'
					},
					{
						'value': '469025',
						'label': '白沙黎族自治县'
					},
					{
						'value': '469026',
						'label': '昌江黎族自治县'
					},
					{
						'value': '469027',
						'label': '乐东黎族自治县'
					},
					{
						'value': '469028',
						'label': '陵水黎族自治县'
					},
					{
						'value': '469029',
						'label': '保亭黎族苗族自治县'
					},
					{
						'value': '469030',
						'label': '琼中黎族苗族自治县'
					}
				]
			}
		]
	},
	{
		'value': '500000',
		'label': '重庆市',
		'children': [
			{
				'value': '500100',
				'label': '重庆市',
				'children': [
					{
						'value': '500101',
						'label': '万州区'
					},
					{
						'value': '500102',
						'label': '涪陵区'
					},
					{
						'value': '500103',
						'label': '渝中区'
					},
					{
						'value': '500104',
						'label': '大渡口区'
					},
					{
						'value': '500105',
						'label': '江北区'
					},
					{
						'value': '500106',
						'label': '沙坪坝区'
					},
					{
						'value': '500107',
						'label': '九龙坡区'
					},
					{
						'value': '500108',
						'label': '南岸区'
					},
					{
						'value': '500109',
						'label': '北碚区'
					},
					{
						'value': '500110',
						'label': '綦江区'
					},
					{
						'value': '500111',
						'label': '大足区'
					},
					{
						'value': '500112',
						'label': '渝北区'
					},
					{
						'value': '500113',
						'label': '巴南区'
					},
					{
						'value': '500114',
						'label': '黔江区'
					},
					{
						'value': '500115',
						'label': '长寿区'
					},
					{
						'value': '500116',
						'label': '江津区'
					},
					{
						'value': '500117',
						'label': '合川区'
					},
					{
						'value': '500118',
						'label': '永川区'
					},
					{
						'value': '500119',
						'label': '南川区'
					},
					{
						'value': '500120',
						'label': '璧山区'
					},
					{
						'value': '500223',
						'label': '潼南区'
					},
					{
						'value': '500224',
						'label': '铜梁区'
					},
					{
						'value': '500226',
						'label': '荣昌区'
					},
					{
						'value': '500228',
						'label': '梁平县'
					},
					{
						'value': '500229',
						'label': '城口县'
					},
					{
						'value': '500230',
						'label': '丰都县'
					},
					{
						'value': '500231',
						'label': '垫江县'
					},
					{
						'value': '500232',
						'label': '武隆县'
					},
					{
						'value': '500233',
						'label': '忠　县'
					},
					{
						'value': '500234',
						'label': '开　县'
					},
					{
						'value': '500235',
						'label': '云阳县'
					},
					{
						'value': '500236',
						'label': '奉节县'
					},
					{
						'value': '500237',
						'label': '巫山县'
					},
					{
						'value': '500238',
						'label': '巫溪县'
					},
					{
						'value': '500240',
						'label': '石柱土家族自治县'
					},
					{
						'value': '500241',
						'label': '秀山土家族苗族自治县'
					},
					{
						'value': '500242',
						'label': '酉阳土家族苗族自治县'
					},
					{
						'value': '500243',
						'label': '彭水苗族土家族自治县'
					}
				]
			}
		]
	},
	{
		'value': '510000',
		'label': '四川省',
		'children': [
			{
				'value': '510100',
				'label': '成都市',
				'children': [
					{
						'value': '510104',
						'label': '锦江区'
					},
					{
						'value': '510105',
						'label': '青羊区'
					},
					{
						'value': '510106',
						'label': '金牛区'
					},
					{
						'value': '510107',
						'label': '武侯区'
					},
					{
						'value': '510108',
						'label': '成华区'
					},
					{
						'value': '510112',
						'label': '龙泉驿区'
					},
					{
						'value': '510113',
						'label': '青白江区'
					},
					{
						'value': '510114',
						'label': '新都区'
					},
					{
						'value': '510115',
						'label': '温江区'
					},
					{
						'value': '510121',
						'label': '金堂县'
					},
					{
						'value': '510122',
						'label': '双流县'
					},
					{
						'value': '510124',
						'label': '郫　县'
					},
					{
						'value': '510129',
						'label': '大邑县'
					},
					{
						'value': '510131',
						'label': '蒲江县'
					},
					{
						'value': '510132',
						'label': '新津县'
					},
					{
						'value': '510181',
						'label': '都江堰市'
					},
					{
						'value': '510182',
						'label': '彭州市'
					},
					{
						'value': '510183',
						'label': '邛崃市'
					},
					{
						'value': '510184',
						'label': '崇州市'
					}
				]
			},
			{
				'value': '510300',
				'label': '自贡市',
				'children': [
					{
						'value': '510302',
						'label': '自流井区'
					},
					{
						'value': '510303',
						'label': '贡井区'
					},
					{
						'value': '510304',
						'label': '大安区'
					},
					{
						'value': '510311',
						'label': '沿滩区'
					},
					{
						'value': '510321',
						'label': '荣　县'
					},
					{
						'value': '510322',
						'label': '富顺县'
					}
				]
			},
			{
				'value': '510400',
				'label': '攀枝花市',
				'children': [
					{
						'value': '510402',
						'label': '东　区'
					},
					{
						'value': '510403',
						'label': '西　区'
					},
					{
						'value': '510411',
						'label': '仁和区'
					},
					{
						'value': '510421',
						'label': '米易县'
					},
					{
						'value': '510422',
						'label': '盐边县'
					}
				]
			},
			{
				'value': '510500',
				'label': '泸州市',
				'children': [
					{
						'value': '510502',
						'label': '江阳区'
					},
					{
						'value': '510503',
						'label': '纳溪区'
					},
					{
						'value': '510504',
						'label': '龙马潭区'
					},
					{
						'value': '510521',
						'label': '泸　县'
					},
					{
						'value': '510522',
						'label': '合江县'
					},
					{
						'value': '510524',
						'label': '叙永县'
					},
					{
						'value': '510525',
						'label': '古蔺县'
					}
				]
			},
			{
				'value': '510600',
				'label': '德阳市',
				'children': [
					{
						'value': '510603',
						'label': '旌阳区'
					},
					{
						'value': '510623',
						'label': '中江县'
					},
					{
						'value': '510626',
						'label': '罗江县'
					},
					{
						'value': '510681',
						'label': '广汉市'
					},
					{
						'value': '510682',
						'label': '什邡市'
					},
					{
						'value': '510683',
						'label': '绵竹市'
					}
				]
			},
			{
				'value': '510700',
				'label': '绵阳市',
				'children': [
					{
						'value': '510703',
						'label': '涪城区'
					},
					{
						'value': '510704',
						'label': '游仙区'
					},
					{
						'value': '510722',
						'label': '三台县'
					},
					{
						'value': '510723',
						'label': '盐亭县'
					},
					{
						'value': '510724',
						'label': '安　县'
					},
					{
						'value': '510725',
						'label': '梓潼县'
					},
					{
						'value': '510726',
						'label': '北川羌族自治县'
					},
					{
						'value': '510727',
						'label': '平武县'
					},
					{
						'value': '510781',
						'label': '江油市'
					}
				]
			},
			{
				'value': '510800',
				'label': '广元市',
				'children': [
					{
						'value': '510802',
						'label': '利州区'
					},
					{
						'value': '510811',
						'label': '昭化区'
					},
					{
						'value': '510812',
						'label': '朝天区'
					},
					{
						'value': '510821',
						'label': '旺苍县'
					},
					{
						'value': '510822',
						'label': '青川县'
					},
					{
						'value': '510823',
						'label': '剑阁县'
					},
					{
						'value': '510824',
						'label': '苍溪县'
					}
				]
			},
			{
				'value': '510900',
				'label': '遂宁市',
				'children': [
					{
						'value': '510903',
						'label': '船山区'
					},
					{
						'value': '510904',
						'label': '安居区'
					},
					{
						'value': '510921',
						'label': '蓬溪县'
					},
					{
						'value': '510922',
						'label': '射洪县'
					},
					{
						'value': '510923',
						'label': '大英县'
					}
				]
			},
			{
				'value': '511000',
				'label': '内江市',
				'children': [
					{
						'value': '511002',
						'label': '市中区'
					},
					{
						'value': '511011',
						'label': '东兴区'
					},
					{
						'value': '511024',
						'label': '威远县'
					},
					{
						'value': '511025',
						'label': '资中县'
					},
					{
						'value': '511028',
						'label': '隆昌县'
					}
				]
			},
			{
				'value': '511100',
				'label': '乐山市',
				'children': [
					{
						'value': '511102',
						'label': '市中区'
					},
					{
						'value': '511111',
						'label': '沙湾区'
					},
					{
						'value': '511112',
						'label': '五通桥区'
					},
					{
						'value': '511113',
						'label': '金口河区'
					},
					{
						'value': '511123',
						'label': '犍为县'
					},
					{
						'value': '511124',
						'label': '井研县'
					},
					{
						'value': '511126',
						'label': '夹江县'
					},
					{
						'value': '511129',
						'label': '沐川县'
					},
					{
						'value': '511132',
						'label': '峨边彝族自治县'
					},
					{
						'value': '511133',
						'label': '马边彝族自治县'
					},
					{
						'value': '511181',
						'label': '峨眉山市'
					}
				]
			},
			{
				'value': '511300',
				'label': '南充市',
				'children': [
					{
						'value': '511302',
						'label': '顺庆区'
					},
					{
						'value': '511303',
						'label': '高坪区'
					},
					{
						'value': '511304',
						'label': '嘉陵区'
					},
					{
						'value': '511321',
						'label': '南部县'
					},
					{
						'value': '511322',
						'label': '营山县'
					},
					{
						'value': '511323',
						'label': '蓬安县'
					},
					{
						'value': '511324',
						'label': '仪陇县'
					},
					{
						'value': '511325',
						'label': '西充县'
					},
					{
						'value': '511381',
						'label': '阆中市'
					}
				]
			},
			{
				'value': '511400',
				'label': '眉山市',
				'children': [
					{
						'value': '511402',
						'label': '东坡区'
					},
					{
						'value': '511403',
						'label': '彭山区'
					},
					{
						'value': '511421',
						'label': '仁寿县'
					},
					{
						'value': '511423',
						'label': '洪雅县'
					},
					{
						'value': '511424',
						'label': '丹棱县'
					},
					{
						'value': '511425',
						'label': '青神县'
					}
				]
			},
			{
				'value': '511500',
				'label': '宜宾市',
				'children': [
					{
						'value': '511502',
						'label': '翠屏区'
					},
					{
						'value': '511503',
						'label': '南溪区'
					},
					{
						'value': '511521',
						'label': '宜宾县'
					},
					{
						'value': '511523',
						'label': '江安县'
					},
					{
						'value': '511524',
						'label': '长宁县'
					},
					{
						'value': '511525',
						'label': '高　县'
					},
					{
						'value': '511526',
						'label': '珙　县'
					},
					{
						'value': '511527',
						'label': '筠连县'
					},
					{
						'value': '511528',
						'label': '兴文县'
					},
					{
						'value': '511529',
						'label': '屏山县'
					}
				]
			},
			{
				'value': '511600',
				'label': '广安市',
				'children': [
					{
						'value': '511602',
						'label': '广安区'
					},
					{
						'value': '511603',
						'label': '前锋区'
					},
					{
						'value': '511621',
						'label': '岳池县'
					},
					{
						'value': '511622',
						'label': '武胜县'
					},
					{
						'value': '511623',
						'label': '邻水县'
					},
					{
						'value': '511681',
						'label': '华蓥市'
					}
				]
			},
			{
				'value': '511700',
				'label': '达州市',
				'children': [
					{
						'value': '511702',
						'label': '通川区'
					},
					{
						'value': '511703',
						'label': '达川区'
					},
					{
						'value': '511722',
						'label': '宣汉县'
					},
					{
						'value': '511723',
						'label': '开江县'
					},
					{
						'value': '511724',
						'label': '大竹县'
					},
					{
						'value': '511725',
						'label': '渠　县'
					},
					{
						'value': '511781',
						'label': '万源市'
					}
				]
			},
			{
				'value': '511800',
				'label': '雅安市',
				'children': [
					{
						'value': '511802',
						'label': '雨城区'
					},
					{
						'value': '511803',
						'label': '名山区'
					},
					{
						'value': '511822',
						'label': '荥经县'
					},
					{
						'value': '511823',
						'label': '汉源县'
					},
					{
						'value': '511824',
						'label': '石棉县'
					},
					{
						'value': '511825',
						'label': '天全县'
					},
					{
						'value': '511826',
						'label': '芦山县'
					},
					{
						'value': '511827',
						'label': '宝兴县'
					}
				]
			},
			{
				'value': '511900',
				'label': '巴中市',
				'children': [
					{
						'value': '511902',
						'label': '巴州区'
					},
					{
						'value': '511903',
						'label': '恩阳区'
					},
					{
						'value': '511921',
						'label': '通江县'
					},
					{
						'value': '511922',
						'label': '南江县'
					},
					{
						'value': '511923',
						'label': '平昌县'
					}
				]
			},
			{
				'value': '512000',
				'label': '资阳市',
				'children': [
					{
						'value': '512002',
						'label': '雁江区'
					},
					{
						'value': '512021',
						'label': '安岳县'
					},
					{
						'value': '512022',
						'label': '乐至县'
					},
					{
						'value': '512081',
						'label': '简阳市'
					}
				]
			},
			{
				'value': '513200',
				'label': '阿坝藏族羌族自治州',
				'children': [
					{
						'value': '513221',
						'label': '汶川县'
					},
					{
						'value': '513222',
						'label': '理　县'
					},
					{
						'value': '513223',
						'label': '茂　县'
					},
					{
						'value': '513224',
						'label': '松潘县'
					},
					{
						'value': '513225',
						'label': '九寨沟县'
					},
					{
						'value': '513226',
						'label': '金川县'
					},
					{
						'value': '513227',
						'label': '小金县'
					},
					{
						'value': '513228',
						'label': '黑水县'
					},
					{
						'value': '513229',
						'label': '马尔康县'
					},
					{
						'value': '513230',
						'label': '壤塘县'
					},
					{
						'value': '513231',
						'label': '阿坝县'
					},
					{
						'value': '513232',
						'label': '若尔盖县'
					},
					{
						'value': '513233',
						'label': '红原县'
					}
				]
			},
			{
				'value': '513300',
				'label': '甘孜藏族自治州',
				'children': [
					{
						'value': '513321',
						'label': '康定县'
					},
					{
						'value': '513322',
						'label': '泸定县'
					},
					{
						'value': '513323',
						'label': '丹巴县'
					},
					{
						'value': '513324',
						'label': '九龙县'
					},
					{
						'value': '513325',
						'label': '雅江县'
					},
					{
						'value': '513326',
						'label': '道孚县'
					},
					{
						'value': '513327',
						'label': '炉霍县'
					},
					{
						'value': '513328',
						'label': '甘孜县'
					},
					{
						'value': '513329',
						'label': '新龙县'
					},
					{
						'value': '513330',
						'label': '德格县'
					},
					{
						'value': '513331',
						'label': '白玉县'
					},
					{
						'value': '513332',
						'label': '石渠县'
					},
					{
						'value': '513333',
						'label': '色达县'
					},
					{
						'value': '513334',
						'label': '理塘县'
					},
					{
						'value': '513335',
						'label': '巴塘县'
					},
					{
						'value': '513336',
						'label': '乡城县'
					},
					{
						'value': '513337',
						'label': '稻城县'
					},
					{
						'value': '513338',
						'label': '得荣县'
					}
				]
			},
			{
				'value': '513400',
				'label': '凉山彝族自治州',
				'children': [
					{
						'value': '513401',
						'label': '西昌市'
					},
					{
						'value': '513422',
						'label': '木里藏族自治县'
					},
					{
						'value': '513423',
						'label': '盐源县'
					},
					{
						'value': '513424',
						'label': '德昌县'
					},
					{
						'value': '513425',
						'label': '会理县'
					},
					{
						'value': '513426',
						'label': '会东县'
					},
					{
						'value': '513427',
						'label': '宁南县'
					},
					{
						'value': '513428',
						'label': '普格县'
					},
					{
						'value': '513429',
						'label': '布拖县'
					},
					{
						'value': '513430',
						'label': '金阳县'
					},
					{
						'value': '513431',
						'label': '昭觉县'
					},
					{
						'value': '513432',
						'label': '喜德县'
					},
					{
						'value': '513433',
						'label': '冕宁县'
					},
					{
						'value': '513434',
						'label': '越西县'
					},
					{
						'value': '513435',
						'label': '甘洛县'
					},
					{
						'value': '513436',
						'label': '美姑县'
					},
					{
						'value': '513437',
						'label': '雷波县'
					}
				]
			}
		]
	},
	{
		'value': '520000',
		'label': '贵州省',
		'children': [
			{
				'value': '520100',
				'label': '贵阳市',
				'children': [
					{
						'value': '520102',
						'label': '南明区'
					},
					{
						'value': '520103',
						'label': '云岩区'
					},
					{
						'value': '520111',
						'label': '花溪区'
					},
					{
						'value': '520112',
						'label': '乌当区'
					},
					{
						'value': '520113',
						'label': '白云区'
					},
					{
						'value': '520115',
						'label': '观山湖区'
					},
					{
						'value': '520121',
						'label': '开阳县'
					},
					{
						'value': '520122',
						'label': '息烽县'
					},
					{
						'value': '520123',
						'label': '修文县'
					},
					{
						'value': '520181',
						'label': '清镇市'
					}
				]
			},
			{
				'value': '520200',
				'label': '六盘水市',
				'children': [
					{
						'value': '520201',
						'label': '钟山区'
					},
					{
						'value': '520203',
						'label': '六枝特区'
					},
					{
						'value': '520221',
						'label': '水城县'
					},
					{
						'value': '520222',
						'label': '盘　县'
					}
				]
			},
			{
				'value': '520300',
				'label': '遵义市',
				'children': [
					{
						'value': '520302',
						'label': '红花岗区'
					},
					{
						'value': '520303',
						'label': '汇川区'
					},
					{
						'value': '520321',
						'label': '遵义县'
					},
					{
						'value': '520322',
						'label': '桐梓县'
					},
					{
						'value': '520323',
						'label': '绥阳县'
					},
					{
						'value': '520324',
						'label': '正安县'
					},
					{
						'value': '520325',
						'label': '道真仡佬族苗族自治县'
					},
					{
						'value': '520326',
						'label': '务川仡佬族苗族自治县'
					},
					{
						'value': '520327',
						'label': '凤冈县'
					},
					{
						'value': '520328',
						'label': '湄潭县'
					},
					{
						'value': '520329',
						'label': '余庆县'
					},
					{
						'value': '520330',
						'label': '习水县'
					},
					{
						'value': '520381',
						'label': '赤水市'
					},
					{
						'value': '520382',
						'label': '仁怀市'
					}
				]
			},
			{
				'value': '520400',
				'label': '安顺市',
				'children': [
					{
						'value': '520402',
						'label': '西秀区'
					},
					{
						'value': '520421',
						'label': '平坝县'
					},
					{
						'value': '520422',
						'label': '普定县'
					},
					{
						'value': '520423',
						'label': '镇宁布依族苗族自治县'
					},
					{
						'value': '520424',
						'label': '关岭布依族苗族自治县'
					},
					{
						'value': '520425',
						'label': '紫云苗族布依族自治县'
					}
				]
			},
			{
				'value': '522200',
				'label': '铜仁市',
				'children': [
					{
						'value': '520602',
						'label': '碧江区'
					},
					{
						'value': '520603',
						'label': '万山区'
					},
					{
						'value': '522222',
						'label': '江口县'
					},
					{
						'value': '522223',
						'label': '玉屏侗族自治县'
					},
					{
						'value': '522224',
						'label': '石阡县'
					},
					{
						'value': '522225',
						'label': '思南县'
					},
					{
						'value': '522226',
						'label': '印江土家族苗族自治县'
					},
					{
						'value': '522227',
						'label': '德江县'
					},
					{
						'value': '522228',
						'label': '沿河土家族自治县'
					},
					{
						'value': '522229',
						'label': '松桃苗族自治县'
					}
				]
			},
			{
				'value': '522400',
				'label': '毕节市',
				'children': [
					{
						'value': '522401',
						'label': '七星关区'
					},
					{
						'value': '522422',
						'label': '大方县'
					},
					{
						'value': '522423',
						'label': '黔西县'
					},
					{
						'value': '522424',
						'label': '金沙县'
					},
					{
						'value': '522425',
						'label': '织金县'
					},
					{
						'value': '522426',
						'label': '纳雍县'
					},
					{
						'value': '522427',
						'label': '威宁彝族回族苗族自治县'
					},
					{
						'value': '522428',
						'label': '赫章县'
					}
				]
			},
			{
				'value': '522300',
				'label': '黔西南布依族苗族自治州',
				'children': [
					{
						'value': '522301',
						'label': '兴义市'
					},
					{
						'value': '522322',
						'label': '兴仁县'
					},
					{
						'value': '522323',
						'label': '普安县'
					},
					{
						'value': '522324',
						'label': '晴隆县'
					},
					{
						'value': '522325',
						'label': '贞丰县'
					},
					{
						'value': '522326',
						'label': '望谟县'
					},
					{
						'value': '522327',
						'label': '册亨县'
					},
					{
						'value': '522328',
						'label': '安龙县'
					}
				]
			},
			{
				'value': '522600',
				'label': '黔东南苗族侗族自治州',
				'children': [
					{
						'value': '522601',
						'label': '凯里市'
					},
					{
						'value': '522622',
						'label': '黄平县'
					},
					{
						'value': '522623',
						'label': '施秉县'
					},
					{
						'value': '522624',
						'label': '三穗县'
					},
					{
						'value': '522625',
						'label': '镇远县'
					},
					{
						'value': '522626',
						'label': '岑巩县'
					},
					{
						'value': '522627',
						'label': '天柱县'
					},
					{
						'value': '522628',
						'label': '锦屏县'
					},
					{
						'value': '522629',
						'label': '剑河县'
					},
					{
						'value': '522630',
						'label': '台江县'
					},
					{
						'value': '522631',
						'label': '黎平县'
					},
					{
						'value': '522632',
						'label': '榕江县'
					},
					{
						'value': '522633',
						'label': '从江县'
					},
					{
						'value': '522634',
						'label': '雷山县'
					},
					{
						'value': '522635',
						'label': '麻江县'
					},
					{
						'value': '522636',
						'label': '丹寨县'
					}
				]
			},
			{
				'value': '522700',
				'label': '黔南布依族苗族自治州',
				'children': [
					{
						'value': '522701',
						'label': '都匀市'
					},
					{
						'value': '522702',
						'label': '福泉市'
					},
					{
						'value': '522722',
						'label': '荔波县'
					},
					{
						'value': '522723',
						'label': '贵定县'
					},
					{
						'value': '522725',
						'label': '瓮安县'
					},
					{
						'value': '522726',
						'label': '独山县'
					},
					{
						'value': '522727',
						'label': '平塘县'
					},
					{
						'value': '522728',
						'label': '罗甸县'
					},
					{
						'value': '522729',
						'label': '长顺县'
					},
					{
						'value': '522730',
						'label': '龙里县'
					},
					{
						'value': '522731',
						'label': '惠水县'
					},
					{
						'value': '522732',
						'label': '三都水族自治县'
					}
				]
			}
		]
	},
	{
		'value': '530000',
		'label': '云南省',
		'children': [
			{
				'value': '530100',
				'label': '昆明市',
				'children': [
					{
						'value': '530102',
						'label': '五华区'
					},
					{
						'value': '530103',
						'label': '盘龙区'
					},
					{
						'value': '530111',
						'label': '官渡区'
					},
					{
						'value': '530112',
						'label': '西山区'
					},
					{
						'value': '530113',
						'label': '东川区'
					},
					{
						'value': '530121',
						'label': '呈贡县'
					},
					{
						'value': '530122',
						'label': '晋宁县'
					},
					{
						'value': '530124',
						'label': '富民县'
					},
					{
						'value': '530125',
						'label': '宜良县'
					},
					{
						'value': '530126',
						'label': '石林彝族自治县'
					},
					{
						'value': '530127',
						'label': '嵩明县'
					},
					{
						'value': '530128',
						'label': '禄劝彝族苗族自治县'
					},
					{
						'value': '530129',
						'label': '寻甸回族彝族自治县'
					},
					{
						'value': '530181',
						'label': '安宁市'
					}
				]
			},
			{
				'value': '530300',
				'label': '曲靖市',
				'children': [
					{
						'value': '530302',
						'label': '麒麟区'
					},
					{
						'value': '530321',
						'label': '马龙县'
					},
					{
						'value': '530322',
						'label': '陆良县'
					},
					{
						'value': '530323',
						'label': '师宗县'
					},
					{
						'value': '530324',
						'label': '罗平县'
					},
					{
						'value': '530325',
						'label': '富源县'
					},
					{
						'value': '530326',
						'label': '会泽县'
					},
					{
						'value': '530328',
						'label': '沾益县'
					},
					{
						'value': '530381',
						'label': '宣威市'
					}
				]
			},
			{
				'value': '530400',
				'label': '玉溪市',
				'children': [
					{
						'value': '530402',
						'label': '红塔区'
					},
					{
						'value': '530421',
						'label': '江川县'
					},
					{
						'value': '530422',
						'label': '澄江县'
					},
					{
						'value': '530423',
						'label': '通海县'
					},
					{
						'value': '530424',
						'label': '华宁县'
					},
					{
						'value': '530425',
						'label': '易门县'
					},
					{
						'value': '530426',
						'label': '峨山彝族自治县'
					},
					{
						'value': '530427',
						'label': '新平彝族傣族自治县'
					},
					{
						'value': '530428',
						'label': '元江哈尼族彝族傣族自治县'
					}
				]
			},
			{
				'value': '530500',
				'label': '保山市',
				'children': [
					{
						'value': '530502',
						'label': '隆阳区'
					},
					{
						'value': '530521',
						'label': '施甸县'
					},
					{
						'value': '530522',
						'label': '腾冲县'
					},
					{
						'value': '530523',
						'label': '龙陵县'
					},
					{
						'value': '530524',
						'label': '昌宁县'
					}
				]
			},
			{
				'value': '530600',
				'label': '昭通市',
				'children': [
					{
						'value': '530602',
						'label': '昭阳区'
					},
					{
						'value': '530621',
						'label': '鲁甸县'
					},
					{
						'value': '530622',
						'label': '巧家县'
					},
					{
						'value': '530623',
						'label': '盐津县'
					},
					{
						'value': '530624',
						'label': '大关县'
					},
					{
						'value': '530625',
						'label': '永善县'
					},
					{
						'value': '530626',
						'label': '绥江县'
					},
					{
						'value': '530627',
						'label': '镇雄县'
					},
					{
						'value': '530628',
						'label': '彝良县'
					},
					{
						'value': '530629',
						'label': '威信县'
					},
					{
						'value': '530630',
						'label': '水富县'
					}
				]
			},
			{
				'value': '530700',
				'label': '丽江市',
				'children': [
					{
						'value': '530702',
						'label': '古城区'
					},
					{
						'value': '530721',
						'label': '玉龙纳西族自治县'
					},
					{
						'value': '530722',
						'label': '永胜县'
					},
					{
						'value': '530723',
						'label': '华坪县'
					},
					{
						'value': '530724',
						'label': '宁蒗彝族自治县'
					}
				]
			},
			{
				'value': '530800',
				'label': '普洱市',
				'children': [
					{
						'value': '530802',
						'label': '思茅区'
					},
					{
						'value': '530821',
						'label': '宁洱哈尼族彝族自治县'
					},
					{
						'value': '530822',
						'label': '墨江哈尼族自治县'
					},
					{
						'value': '530823',
						'label': '景东彝族自治县'
					},
					{
						'value': '530824',
						'label': '景谷傣族彝族自治县'
					},
					{
						'value': '530825',
						'label': '镇沅彝族哈尼族拉祜族自治县'
					},
					{
						'value': '530826',
						'label': '江城哈尼族彝族自治县'
					},
					{
						'value': '530827',
						'label': '孟连傣族拉祜族佤族自治县'
					},
					{
						'value': '530828',
						'label': '澜沧拉祜族自治县'
					},
					{
						'value': '530829',
						'label': '西盟佤族自治县'
					}
				]
			},
			{
				'value': '530900',
				'label': '临沧市',
				'children': [
					{
						'value': '530902',
						'label': '临翔区'
					},
					{
						'value': '530921',
						'label': '凤庆县'
					},
					{
						'value': '530922',
						'label': '云　县'
					},
					{
						'value': '530923',
						'label': '永德县'
					},
					{
						'value': '530924',
						'label': '镇康县'
					},
					{
						'value': '530925',
						'label': '双江拉祜族佤族布朗族傣族自治县'
					},
					{
						'value': '530926',
						'label': '耿马傣族佤族自治县'
					},
					{
						'value': '530927',
						'label': '沧源佤族自治县'
					}
				]
			},
			{
				'value': '532300',
				'label': '楚雄彝族自治州',
				'children': [
					{
						'value': '532301',
						'label': '楚雄市'
					},
					{
						'value': '532322',
						'label': '双柏县'
					},
					{
						'value': '532323',
						'label': '牟定县'
					},
					{
						'value': '532324',
						'label': '南华县'
					},
					{
						'value': '532325',
						'label': '姚安县'
					},
					{
						'value': '532326',
						'label': '大姚县'
					},
					{
						'value': '532327',
						'label': '永仁县'
					},
					{
						'value': '532328',
						'label': '元谋县'
					},
					{
						'value': '532329',
						'label': '武定县'
					},
					{
						'value': '532331',
						'label': '禄丰县'
					}
				]
			},
			{
				'value': '532500',
				'label': '红河哈尼族彝族自治州',
				'children': [
					{
						'value': '532501',
						'label': '个旧市'
					},
					{
						'value': '532502',
						'label': '开远市'
					},
					{
						'value': '532503',
						'label': '蒙自市'
					},
					{
						'value': '532504',
						'label': '弥勒市'
					},
					{
						'value': '532523',
						'label': '屏边苗族自治县'
					},
					{
						'value': '532524',
						'label': '建水县'
					},
					{
						'value': '532525',
						'label': '石屏县'
					},
					{
						'value': '532527',
						'label': '泸西县'
					},
					{
						'value': '532528',
						'label': '元阳县'
					},
					{
						'value': '532529',
						'label': '红河县'
					},
					{
						'value': '532530',
						'label': '金平苗族瑶族傣族自治县'
					},
					{
						'value': '532531',
						'label': '绿春县'
					},
					{
						'value': '532532',
						'label': '河口瑶族自治县'
					}
				]
			},
			{
				'value': '532600',
				'label': '文山壮族苗族自治州',
				'children': [
					{
						'value': '532621',
						'label': '文山市'
					},
					{
						'value': '532622',
						'label': '砚山县'
					},
					{
						'value': '532623',
						'label': '西畴县'
					},
					{
						'value': '532624',
						'label': '麻栗坡县'
					},
					{
						'value': '532625',
						'label': '马关县'
					},
					{
						'value': '532626',
						'label': '丘北县'
					},
					{
						'value': '532627',
						'label': '广南县'
					},
					{
						'value': '532628',
						'label': '富宁县'
					}
				]
			},
			{
				'value': '532800',
				'label': '西双版纳傣族自治州',
				'children': [
					{
						'value': '532801',
						'label': '景洪市'
					},
					{
						'value': '532822',
						'label': '勐海县'
					},
					{
						'value': '532823',
						'label': '勐腊县'
					}
				]
			},
			{
				'value': '532900',
				'label': '大理白族自治州',
				'children': [
					{
						'value': '532901',
						'label': '大理市'
					},
					{
						'value': '532922',
						'label': '漾濞彝族自治县'
					},
					{
						'value': '532923',
						'label': '祥云县'
					},
					{
						'value': '532924',
						'label': '宾川县'
					},
					{
						'value': '532925',
						'label': '弥渡县'
					},
					{
						'value': '532926',
						'label': '南涧彝族自治县'
					},
					{
						'value': '532927',
						'label': '巍山彝族回族自治县'
					},
					{
						'value': '532928',
						'label': '永平县'
					},
					{
						'value': '532929',
						'label': '云龙县'
					},
					{
						'value': '532930',
						'label': '洱源县'
					},
					{
						'value': '532931',
						'label': '剑川县'
					},
					{
						'value': '532932',
						'label': '鹤庆县'
					}
				]
			},
			{
				'value': '533100',
				'label': '德宏傣族景颇族自治州',
				'children': [
					{
						'value': '533102',
						'label': '瑞丽市'
					},
					{
						'value': '533103',
						'label': '芒市'
					},
					{
						'value': '533122',
						'label': '梁河县'
					},
					{
						'value': '533123',
						'label': '盈江县'
					},
					{
						'value': '533124',
						'label': '陇川县'
					}
				]
			},
			{
				'value': '533300',
				'label': '怒江傈僳族自治州',
				'children': [
					{
						'value': '533321',
						'label': '泸水县'
					},
					{
						'value': '533323',
						'label': '福贡县'
					},
					{
						'value': '533324',
						'label': '贡山独龙族怒族自治县'
					},
					{
						'value': '533325',
						'label': '兰坪白族普米族自治县'
					}
				]
			},
			{
				'value': '533400',
				'label': '迪庆藏族自治州',
				'children': [
					{
						'value': '533421',
						'label': '香格里拉县'
					},
					{
						'value': '533422',
						'label': '德钦县'
					},
					{
						'value': '533423',
						'label': '维西傈僳族自治县'
					}
				]
			}
		]
	},
	{
		'value': '540000',
		'label': '西藏自治区',
		'children': [
			{
				'value': '540100',
				'label': '拉萨市',
				'children': [
					{
						'value': '540102',
						'label': '城关区'
					},
					{
						'value': '540121',
						'label': '林周县'
					},
					{
						'value': '540122',
						'label': '当雄县'
					},
					{
						'value': '540123',
						'label': '尼木县'
					},
					{
						'value': '540124',
						'label': '曲水县'
					},
					{
						'value': '540125',
						'label': '堆龙德庆县'
					},
					{
						'value': '540126',
						'label': '达孜县'
					},
					{
						'value': '540127',
						'label': '墨竹工卡县'
					}
				]
			},
			{
				'value': '542100',
				'label': '昌都市',
				'children': [
					{
						'value': '542102',
						'label': '卡若区'
					},
					{
						'value': '542122',
						'label': '江达县'
					},
					{
						'value': '542123',
						'label': '贡觉县'
					},
					{
						'value': '542124',
						'label': '类乌齐县'
					},
					{
						'value': '542125',
						'label': '丁青县'
					},
					{
						'value': '542126',
						'label': '察雅县'
					},
					{
						'value': '542127',
						'label': '八宿县'
					},
					{
						'value': '542128',
						'label': '左贡县'
					},
					{
						'value': '542129',
						'label': '芒康县'
					},
					{
						'value': '542132',
						'label': '洛隆县'
					},
					{
						'value': '542133',
						'label': '边坝县'
					}
				]
			},
			{
				'value': '542200',
				'label': '山南地区',
				'children': [
					{
						'value': '542221',
						'label': '乃东县'
					},
					{
						'value': '542222',
						'label': '扎囊县'
					},
					{
						'value': '542223',
						'label': '贡嘎县'
					},
					{
						'value': '542224',
						'label': '桑日县'
					},
					{
						'value': '542225',
						'label': '琼结县'
					},
					{
						'value': '542226',
						'label': '曲松县'
					},
					{
						'value': '542227',
						'label': '措美县'
					},
					{
						'value': '542228',
						'label': '洛扎县'
					},
					{
						'value': '542229',
						'label': '加查县'
					},
					{
						'value': '542231',
						'label': '隆子县'
					},
					{
						'value': '542232',
						'label': '错那县'
					},
					{
						'value': '542233',
						'label': '浪卡子县'
					}
				]
			},
			{
				'value': '542300',
				'label': '日喀则市',
				'children': [
					{
						'value': '542302',
						'label': '桑珠孜区'
					},
					{
						'value': '542322',
						'label': '南木林县'
					},
					{
						'value': '542323',
						'label': '江孜县'
					},
					{
						'value': '542324',
						'label': '定日县'
					},
					{
						'value': '542325',
						'label': '萨迦县'
					},
					{
						'value': '542326',
						'label': '拉孜县'
					},
					{
						'value': '542327',
						'label': '昂仁县'
					},
					{
						'value': '542328',
						'label': '谢通门县'
					},
					{
						'value': '542329',
						'label': '白朗县'
					},
					{
						'value': '542330',
						'label': '仁布县'
					},
					{
						'value': '542331',
						'label': '康马县'
					},
					{
						'value': '542332',
						'label': '定结县'
					},
					{
						'value': '542333',
						'label': '仲巴县'
					},
					{
						'value': '542334',
						'label': '亚东县'
					},
					{
						'value': '542335',
						'label': '吉隆县'
					},
					{
						'value': '542336',
						'label': '聂拉木县'
					},
					{
						'value': '542337',
						'label': '萨嘎县'
					},
					{
						'value': '542338',
						'label': '岗巴县'
					}
				]
			},
			{
				'value': '542400',
				'label': '那曲地区',
				'children': [
					{
						'value': '542421',
						'label': '那曲县'
					},
					{
						'value': '542422',
						'label': '嘉黎县'
					},
					{
						'value': '542423',
						'label': '比如县'
					},
					{
						'value': '542424',
						'label': '聂荣县'
					},
					{
						'value': '542425',
						'label': '安多县'
					},
					{
						'value': '542426',
						'label': '申扎县'
					},
					{
						'value': '542427',
						'label': '索　县'
					},
					{
						'value': '542428',
						'label': '班戈县'
					},
					{
						'value': '542429',
						'label': '巴青县'
					},
					{
						'value': '542430',
						'label': '尼玛县'
					},
					{
						'value': '542431',
						'label': '双湖县'
					}
				]
			},
			{
				'value': '542500',
				'label': '阿里地区',
				'children': [
					{
						'value': '542521',
						'label': '普兰县'
					},
					{
						'value': '542522',
						'label': '札达县'
					},
					{
						'value': '542523',
						'label': '噶尔县'
					},
					{
						'value': '542524',
						'label': '日土县'
					},
					{
						'value': '542525',
						'label': '革吉县'
					},
					{
						'value': '542526',
						'label': '改则县'
					},
					{
						'value': '542527',
						'label': '措勤县'
					}
				]
			},
			{
				'value': '542600',
				'label': '林芝市',
				'children': [
					{
						'value': '542602',
						'label': '巴宜区'
					},
					{
						'value': '542622',
						'label': '工布江达县'
					},
					{
						'value': '542623',
						'label': '米林县'
					},
					{
						'value': '542624',
						'label': '墨脱县'
					},
					{
						'value': '542625',
						'label': '波密县'
					},
					{
						'value': '542626',
						'label': '察隅县'
					},
					{
						'value': '542627',
						'label': '朗　县'
					}
				]
			}
		]
	},
	{
		'value': '610000',
		'label': '陕西省',
		'children': [
			{
				'value': '610100',
				'label': '西安市',
				'children': [
					{
						'value': '610102',
						'label': '新城区'
					},
					{
						'value': '610103',
						'label': '碑林区'
					},
					{
						'value': '610104',
						'label': '莲湖区'
					},
					{
						'value': '610111',
						'label': '灞桥区'
					},
					{
						'value': '610112',
						'label': '未央区'
					},
					{
						'value': '610113',
						'label': '雁塔区'
					},
					{
						'value': '610114',
						'label': '阎良区'
					},
					{
						'value': '610115',
						'label': '临潼区'
					},
					{
						'value': '610116',
						'label': '长安区'
					},
					{
						'value': '610117',
						'label': '高陵区'
					},
					{
						'value': '610122',
						'label': '蓝田县'
					},
					{
						'value': '610124',
						'label': '周至县'
					},
					{
						'value': '610125',
						'label': '户　县'
					},
					{
						'value': '610126',
						'label': '杨凌农业示范区'
					}
				]
			},
			{
				'value': '610200',
				'label': '铜川市',
				'children': [
					{
						'value': '610202',
						'label': '王益区'
					},
					{
						'value': '610203',
						'label': '印台区'
					},
					{
						'value': '610204',
						'label': '耀州区'
					},
					{
						'value': '610222',
						'label': '宜君县'
					}
				]
			},
			{
				'value': '610300',
				'label': '宝鸡市',
				'children': [
					{
						'value': '610302',
						'label': '渭滨区'
					},
					{
						'value': '610303',
						'label': '金台区'
					},
					{
						'value': '610304',
						'label': '陈仓区'
					},
					{
						'value': '610322',
						'label': '凤翔县'
					},
					{
						'value': '610323',
						'label': '岐山县'
					},
					{
						'value': '610324',
						'label': '扶风县'
					},
					{
						'value': '610326',
						'label': '眉　县'
					},
					{
						'value': '610327',
						'label': '陇　县'
					},
					{
						'value': '610328',
						'label': '千阳县'
					},
					{
						'value': '610329',
						'label': '麟游县'
					},
					{
						'value': '610330',
						'label': '凤　县'
					},
					{
						'value': '610331',
						'label': '太白县'
					}
				]
			},
			{
				'value': '610400',
				'label': '咸阳市',
				'children': [
					{
						'value': '610402',
						'label': '秦都区'
					},
					{
						'value': '610403',
						'label': '杨陵区'
					},
					{
						'value': '610404',
						'label': '渭城区'
					},
					{
						'value': '610422',
						'label': '三原县'
					},
					{
						'value': '610423',
						'label': '泾阳县'
					},
					{
						'value': '610424',
						'label': '乾　县'
					},
					{
						'value': '610425',
						'label': '礼泉县'
					},
					{
						'value': '610426',
						'label': '永寿县'
					},
					{
						'value': '610427',
						'label': '彬　县'
					},
					{
						'value': '610428',
						'label': '长武县'
					},
					{
						'value': '610429',
						'label': '旬邑县'
					},
					{
						'value': '610430',
						'label': '淳化县'
					},
					{
						'value': '610431',
						'label': '武功县'
					},
					{
						'value': '610481',
						'label': '兴平市'
					}
				]
			},
			{
				'value': '610500',
				'label': '渭南市',
				'children': [
					{
						'value': '610502',
						'label': '临渭区'
					},
					{
						'value': '610521',
						'label': '华　县'
					},
					{
						'value': '610522',
						'label': '潼关县'
					},
					{
						'value': '610523',
						'label': '大荔县'
					},
					{
						'value': '610524',
						'label': '合阳县'
					},
					{
						'value': '610525',
						'label': '澄城县'
					},
					{
						'value': '610526',
						'label': '蒲城县'
					},
					{
						'value': '610527',
						'label': '白水县'
					},
					{
						'value': '610528',
						'label': '富平县'
					},
					{
						'value': '610581',
						'label': '韩城市'
					},
					{
						'value': '610582',
						'label': '华阴市'
					}
				]
			},
			{
				'value': '610600',
				'label': '延安市',
				'children': [
					{
						'value': '610602',
						'label': '宝塔区'
					},
					{
						'value': '610621',
						'label': '延长县'
					},
					{
						'value': '610622',
						'label': '延川县'
					},
					{
						'value': '610623',
						'label': '子长县'
					},
					{
						'value': '610624',
						'label': '安塞县'
					},
					{
						'value': '610625',
						'label': '志丹县'
					},
					{
						'value': '610626',
						'label': '吴旗县'
					},
					{
						'value': '610627',
						'label': '甘泉县'
					},
					{
						'value': '610628',
						'label': '富　县'
					},
					{
						'value': '610629',
						'label': '洛川县'
					},
					{
						'value': '610630',
						'label': '宜川县'
					},
					{
						'value': '610631',
						'label': '黄龙县'
					},
					{
						'value': '610632',
						'label': '黄陵县'
					}
				]
			},
			{
				'value': '610700',
				'label': '汉中市',
				'children': [
					{
						'value': '610702',
						'label': '汉台区'
					},
					{
						'value': '610721',
						'label': '南郑县'
					},
					{
						'value': '610722',
						'label': '城固县'
					},
					{
						'value': '610723',
						'label': '洋　县'
					},
					{
						'value': '610724',
						'label': '西乡县'
					},
					{
						'value': '610725',
						'label': '勉　县'
					},
					{
						'value': '610726',
						'label': '宁强县'
					},
					{
						'value': '610727',
						'label': '略阳县'
					},
					{
						'value': '610728',
						'label': '镇巴县'
					},
					{
						'value': '610729',
						'label': '留坝县'
					},
					{
						'value': '610730',
						'label': '佛坪县'
					}
				]
			},
			{
				'value': '610800',
				'label': '榆林市',
				'children': [
					{
						'value': '610802',
						'label': '榆阳区'
					},
					{
						'value': '610821',
						'label': '神木县'
					},
					{
						'value': '610822',
						'label': '府谷县'
					},
					{
						'value': '610823',
						'label': '横山县'
					},
					{
						'value': '610824',
						'label': '靖边县'
					},
					{
						'value': '610825',
						'label': '定边县'
					},
					{
						'value': '610826',
						'label': '绥德县'
					},
					{
						'value': '610827',
						'label': '米脂县'
					},
					{
						'value': '610828',
						'label': '佳　县'
					},
					{
						'value': '610829',
						'label': '吴堡县'
					},
					{
						'value': '610830',
						'label': '清涧县'
					},
					{
						'value': '610831',
						'label': '子洲县'
					}
				]
			},
			{
				'value': '610900',
				'label': '安康市',
				'children': [
					{
						'value': '610902',
						'label': '汉滨区'
					},
					{
						'value': '610921',
						'label': '汉阴县'
					},
					{
						'value': '610922',
						'label': '石泉县'
					},
					{
						'value': '610923',
						'label': '宁陕县'
					},
					{
						'value': '610924',
						'label': '紫阳县'
					},
					{
						'value': '610925',
						'label': '岚皋县'
					},
					{
						'value': '610926',
						'label': '平利县'
					},
					{
						'value': '610927',
						'label': '镇坪县'
					},
					{
						'value': '610928',
						'label': '旬阳县'
					},
					{
						'value': '610929',
						'label': '白河县'
					}
				]
			},
			{
				'value': '611000',
				'label': '商洛市',
				'children': [
					{
						'value': '611002',
						'label': '商州区'
					},
					{
						'value': '611021',
						'label': '洛南县'
					},
					{
						'value': '611022',
						'label': '丹凤县'
					},
					{
						'value': '611023',
						'label': '商南县'
					},
					{
						'value': '611024',
						'label': '山阳县'
					},
					{
						'value': '611025',
						'label': '镇安县'
					},
					{
						'value': '611026',
						'label': '柞水县'
					}
				]
			}
		]
	},
	{
		'value': '620000',
		'label': '甘肃省',
		'children': [
			{
				'value': '620100',
				'label': '兰州市',
				'children': [
					{
						'value': '620102',
						'label': '城关区'
					},
					{
						'value': '620103',
						'label': '七里河区'
					},
					{
						'value': '620104',
						'label': '西固区'
					},
					{
						'value': '620105',
						'label': '安宁区'
					},
					{
						'value': '620111',
						'label': '红古区'
					},
					{
						'value': '620121',
						'label': '永登县'
					},
					{
						'value': '620122',
						'label': '皋兰县'
					},
					{
						'value': '620123',
						'label': '榆中县'
					}
				]
			},
			{
				'value': '620200',
				'label': '嘉峪关市',
				'children': [
					{
						'value': '659059',
						'label': '雄关区'
					},
					{
						'value': '659060',
						'label': '长城区'
					},
					{
						'value': '659061',
						'label': '镜铁区'
					}
				]
			},
			{
				'value': '620300',
				'label': '金昌市',
				'children': [
					{
						'value': '620302',
						'label': '金川区'
					},
					{
						'value': '620321',
						'label': '永昌县'
					}
				]
			},
			{
				'value': '620400',
				'label': '白银市',
				'children': [
					{
						'value': '620402',
						'label': '白银区'
					},
					{
						'value': '620403',
						'label': '平川区'
					},
					{
						'value': '620421',
						'label': '靖远县'
					},
					{
						'value': '620422',
						'label': '会宁县'
					},
					{
						'value': '620423',
						'label': '景泰县'
					}
				]
			},
			{
				'value': '620500',
				'label': '天水市',
				'children': [
					{
						'value': '620502',
						'label': '秦州区'
					},
					{
						'value': '620503',
						'label': '麦积区'
					},
					{
						'value': '620521',
						'label': '清水县'
					},
					{
						'value': '620522',
						'label': '秦安县'
					},
					{
						'value': '620523',
						'label': '甘谷县'
					},
					{
						'value': '620524',
						'label': '武山县'
					},
					{
						'value': '620525',
						'label': '张家川回族自治县'
					}
				]
			},
			{
				'value': '620600',
				'label': '武威市',
				'children': [
					{
						'value': '620602',
						'label': '凉州区'
					},
					{
						'value': '620621',
						'label': '民勤县'
					},
					{
						'value': '620622',
						'label': '古浪县'
					},
					{
						'value': '620623',
						'label': '天祝藏族自治县'
					}
				]
			},
			{
				'value': '620700',
				'label': '张掖市',
				'children': [
					{
						'value': '620702',
						'label': '甘州区'
					},
					{
						'value': '620721',
						'label': '肃南裕固族自治县'
					},
					{
						'value': '620722',
						'label': '民乐县'
					},
					{
						'value': '620723',
						'label': '临泽县'
					},
					{
						'value': '620724',
						'label': '高台县'
					},
					{
						'value': '620725',
						'label': '山丹县'
					}
				]
			},
			{
				'value': '620800',
				'label': '平凉市',
				'children': [
					{
						'value': '620802',
						'label': '崆峒区'
					},
					{
						'value': '620821',
						'label': '泾川县'
					},
					{
						'value': '620822',
						'label': '灵台县'
					},
					{
						'value': '620823',
						'label': '崇信县'
					},
					{
						'value': '620824',
						'label': '华亭县'
					},
					{
						'value': '620825',
						'label': '庄浪县'
					},
					{
						'value': '620826',
						'label': '静宁县'
					}
				]
			},
			{
				'value': '620900',
				'label': '酒泉市',
				'children': [
					{
						'value': '620902',
						'label': '肃州区'
					},
					{
						'value': '620921',
						'label': '金塔县'
					},
					{
						'value': '620922',
						'label': '瓜州县'
					},
					{
						'value': '620923',
						'label': '肃北蒙古族自治县'
					},
					{
						'value': '620924',
						'label': '阿克塞哈萨克族自治县'
					},
					{
						'value': '620981',
						'label': '玉门市'
					},
					{
						'value': '620982',
						'label': '敦煌市'
					}
				]
			},
			{
				'value': '621000',
				'label': '庆阳市',
				'children': [
					{
						'value': '621002',
						'label': '西峰区'
					},
					{
						'value': '621021',
						'label': '庆城县'
					},
					{
						'value': '621022',
						'label': '环　县'
					},
					{
						'value': '621023',
						'label': '华池县'
					},
					{
						'value': '621024',
						'label': '合水县'
					},
					{
						'value': '621025',
						'label': '正宁县'
					},
					{
						'value': '621026',
						'label': '宁　县'
					},
					{
						'value': '621027',
						'label': '镇原县'
					}
				]
			},
			{
				'value': '621100',
				'label': '定西市',
				'children': [
					{
						'value': '621102',
						'label': '安定区'
					},
					{
						'value': '621121',
						'label': '通渭县'
					},
					{
						'value': '621122',
						'label': '陇西县'
					},
					{
						'value': '621123',
						'label': '渭源县'
					},
					{
						'value': '621124',
						'label': '临洮县'
					},
					{
						'value': '621125',
						'label': '漳　县'
					},
					{
						'value': '621126',
						'label': '岷　县'
					}
				]
			},
			{
				'value': '621200',
				'label': '陇南市',
				'children': [
					{
						'value': '621202',
						'label': '武都区'
					},
					{
						'value': '621221',
						'label': '成　县'
					},
					{
						'value': '621222',
						'label': '文　县'
					},
					{
						'value': '621223',
						'label': '宕昌县'
					},
					{
						'value': '621224',
						'label': '康　县'
					},
					{
						'value': '621225',
						'label': '西和县'
					},
					{
						'value': '621226',
						'label': '礼　县'
					},
					{
						'value': '621227',
						'label': '徽　县'
					},
					{
						'value': '621228',
						'label': '两当县'
					}
				]
			},
			{
				'value': '622900',
				'label': '临夏回族自治州',
				'children': [
					{
						'value': '622901',
						'label': '临夏市'
					},
					{
						'value': '622921',
						'label': '临夏县'
					},
					{
						'value': '622922',
						'label': '康乐县'
					},
					{
						'value': '622923',
						'label': '永靖县'
					},
					{
						'value': '622924',
						'label': '广河县'
					},
					{
						'value': '622925',
						'label': '和政县'
					},
					{
						'value': '622926',
						'label': '东乡族自治县'
					},
					{
						'value': '622927',
						'label': '积石山保安族东乡族撒拉族自治县'
					}
				]
			},
			{
				'value': '623000',
				'label': '甘南藏族自治州',
				'children': [
					{
						'value': '623001',
						'label': '合作市'
					},
					{
						'value': '623021',
						'label': '临潭县'
					},
					{
						'value': '623022',
						'label': '卓尼县'
					},
					{
						'value': '623023',
						'label': '舟曲县'
					},
					{
						'value': '623024',
						'label': '迭部县'
					},
					{
						'value': '623025',
						'label': '玛曲县'
					},
					{
						'value': '623026',
						'label': '碌曲县'
					},
					{
						'value': '623027',
						'label': '夏河县'
					}
				]
			}
		]
	},
	{
		'value': '630000',
		'label': '青海省',
		'children': [
			{
				'value': '630100',
				'label': '西宁市',
				'children': [
					{
						'value': '630102',
						'label': '城东区'
					},
					{
						'value': '630103',
						'label': '城中区'
					},
					{
						'value': '630104',
						'label': '城西区'
					},
					{
						'value': '630105',
						'label': '城北区'
					},
					{
						'value': '630121',
						'label': '大通回族土族自治县'
					},
					{
						'value': '630122',
						'label': '湟中县'
					},
					{
						'value': '630123',
						'label': '湟源县'
					}
				]
			},
			{
				'value': '632100',
				'label': '海东市',
				'children': [
					{
						'value': '632002',
						'label': '乐都区'
					},
					{
						'value': '632121',
						'label': '平安县'
					},
					{
						'value': '632122',
						'label': '民和回族土族自治县'
					},
					{
						'value': '632126',
						'label': '互助土族自治县'
					},
					{
						'value': '632127',
						'label': '化隆回族自治县'
					},
					{
						'value': '632128',
						'label': '循化撒拉族自治县'
					}
				]
			},
			{
				'value': '632200',
				'label': '海北藏族自治州',
				'children': [
					{
						'value': '632221',
						'label': '门源回族自治县'
					},
					{
						'value': '632222',
						'label': '祁连县'
					},
					{
						'value': '632223',
						'label': '海晏县'
					},
					{
						'value': '632224',
						'label': '刚察县'
					}
				]
			},
			{
				'value': '632300',
				'label': '黄南藏族自治州',
				'children': [
					{
						'value': '632321',
						'label': '同仁县'
					},
					{
						'value': '632322',
						'label': '尖扎县'
					},
					{
						'value': '632323',
						'label': '泽库县'
					},
					{
						'value': '632324',
						'label': '河南蒙古族自治县'
					}
				]
			},
			{
				'value': '632500',
				'label': '海南藏族自治州',
				'children': [
					{
						'value': '632521',
						'label': '共和县'
					},
					{
						'value': '632522',
						'label': '同德县'
					},
					{
						'value': '632523',
						'label': '贵德县'
					},
					{
						'value': '632524',
						'label': '兴海县'
					},
					{
						'value': '632525',
						'label': '贵南县'
					}
				]
			},
			{
				'value': '632600',
				'label': '果洛藏族自治州',
				'children': [
					{
						'value': '632621',
						'label': '玛沁县'
					},
					{
						'value': '632622',
						'label': '班玛县'
					},
					{
						'value': '632623',
						'label': '甘德县'
					},
					{
						'value': '632624',
						'label': '达日县'
					},
					{
						'value': '632625',
						'label': '久治县'
					},
					{
						'value': '632626',
						'label': '玛多县'
					}
				]
			},
			{
				'value': '632700',
				'label': '玉树藏族自治州',
				'children': [
					{
						'value': '632721',
						'label': '玉树市'
					},
					{
						'value': '632722',
						'label': '杂多县'
					},
					{
						'value': '632723',
						'label': '称多县'
					},
					{
						'value': '632724',
						'label': '治多县'
					},
					{
						'value': '632725',
						'label': '囊谦县'
					},
					{
						'value': '632726',
						'label': '曲麻莱县'
					}
				]
			},
			{
				'value': '632800',
				'label': '海西蒙古族藏族自治州',
				'children': [
					{
						'value': '632801',
						'label': '格尔木市'
					},
					{
						'value': '632802',
						'label': '德令哈市'
					},
					{
						'value': '632821',
						'label': '乌兰县'
					},
					{
						'value': '632822',
						'label': '都兰县'
					},
					{
						'value': '632823',
						'label': '天峻县'
					}
				]
			}
		]
	},
	{
		'value': '640000',
		'label': '宁夏回族自治区',
		'children': [
			{
				'value': '640100',
				'label': '银川市',
				'children': [
					{
						'value': '640104',
						'label': '兴庆区'
					},
					{
						'value': '640105',
						'label': '西夏区'
					},
					{
						'value': '640106',
						'label': '金凤区'
					},
					{
						'value': '640121',
						'label': '永宁县'
					},
					{
						'value': '640122',
						'label': '贺兰县'
					},
					{
						'value': '640181',
						'label': '灵武市'
					}
				]
			},
			{
				'value': '640200',
				'label': '石嘴山市',
				'children': [
					{
						'value': '640202',
						'label': '大武口区'
					},
					{
						'value': '640205',
						'label': '惠农区'
					},
					{
						'value': '640221',
						'label': '平罗县'
					}
				]
			},
			{
				'value': '640300',
				'label': '吴忠市',
				'children': [
					{
						'value': '640302',
						'label': '利通区'
					},
					{
						'value': '640303',
						'label': '红寺堡区'
					},
					{
						'value': '640323',
						'label': '盐池县'
					},
					{
						'value': '640324',
						'label': '同心县'
					},
					{
						'value': '640381',
						'label': '青铜峡市'
					}
				]
			},
			{
				'value': '640400',
				'label': '固原市',
				'children': [
					{
						'value': '640402',
						'label': '原州区'
					},
					{
						'value': '640422',
						'label': '西吉县'
					},
					{
						'value': '640423',
						'label': '隆德县'
					},
					{
						'value': '640424',
						'label': '泾源县'
					},
					{
						'value': '640425',
						'label': '彭阳县'
					}
				]
			},
			{
				'value': '640500',
				'label': '中卫市',
				'children': [
					{
						'value': '640502',
						'label': '沙坡头区'
					},
					{
						'value': '640521',
						'label': '中宁县'
					},
					{
						'value': '640522',
						'label': '海原县'
					}
				]
			}
		]
	},
	{
		'value': '650000',
		'label': '新疆维吾尔自治区',
		'children': [
			{
				'value': '650100',
				'label': '乌鲁木齐市',
				'children': [
					{
						'value': '650102',
						'label': '天山区'
					},
					{
						'value': '650103',
						'label': '沙依巴克区'
					},
					{
						'value': '650104',
						'label': '新市区'
					},
					{
						'value': '650105',
						'label': '水磨沟区'
					},
					{
						'value': '650106',
						'label': '头屯河区'
					},
					{
						'value': '650107',
						'label': '达坂城区'
					},
					{
						'value': '650108',
						'label': '米东区'
					},
					{
						'value': '650121',
						'label': '乌鲁木齐县'
					}
				]
			},
			{
				'value': '650200',
				'label': '克拉玛依市',
				'children': [
					{
						'value': '650202',
						'label': '独山子区'
					},
					{
						'value': '650203',
						'label': '克拉玛依区'
					},
					{
						'value': '650204',
						'label': '白碱滩区'
					},
					{
						'value': '650205',
						'label': '乌尔禾区'
					}
				]
			},
			{
				'value': '652100',
				'label': '吐鲁番市',
				'children': [
					{
						'value': '652102',
						'label': '高昌区'
					},
					{
						'value': '652122',
						'label': '鄯善县'
					},
					{
						'value': '652123',
						'label': '托克逊县'
					}
				]
			},
			{
				'value': '652200',
				'label': '哈密地区',
				'children': [
					{
						'value': '652201',
						'label': '哈密市'
					},
					{
						'value': '652222',
						'label': '巴里坤哈萨克自治县'
					},
					{
						'value': '652223',
						'label': '伊吾县'
					}
				]
			},
			{
				'value': '652300',
				'label': '昌吉回族自治州',
				'children': [
					{
						'value': '652301',
						'label': '昌吉市'
					},
					{
						'value': '652302',
						'label': '阜康市'
					},
					{
						'value': '652303',
						'label': '米泉市'
					},
					{
						'value': '652323',
						'label': '呼图壁县'
					},
					{
						'value': '652324',
						'label': '玛纳斯县'
					},
					{
						'value': '652325',
						'label': '奇台县'
					},
					{
						'value': '652327',
						'label': '吉木萨尔县'
					},
					{
						'value': '652328',
						'label': '木垒哈萨克自治县'
					}
				]
			},
			{
				'value': '652700',
				'label': '博尔塔拉蒙古自治州',
				'children': [
					{
						'value': '652701',
						'label': '博乐市'
					},
					{
						'value': '652702',
						'label': '阿拉山口市'
					},
					{
						'value': '652722',
						'label': '精河县'
					},
					{
						'value': '652723',
						'label': '温泉县'
					}
				]
			},
			{
				'value': '652800',
				'label': '巴音郭楞蒙古自治州',
				'children': [
					{
						'value': '652801',
						'label': '库尔勒市'
					},
					{
						'value': '652822',
						'label': '轮台县'
					},
					{
						'value': '652823',
						'label': '尉犁县'
					},
					{
						'value': '652824',
						'label': '若羌县'
					},
					{
						'value': '652825',
						'label': '且末县'
					},
					{
						'value': '652826',
						'label': '焉耆回族自治县'
					},
					{
						'value': '652827',
						'label': '和静县'
					},
					{
						'value': '652828',
						'label': '和硕县'
					},
					{
						'value': '652829',
						'label': '博湖县'
					}
				]
			},
			{
				'value': '652900',
				'label': '阿克苏地区',
				'children': [
					{
						'value': '652901',
						'label': '阿克苏市'
					},
					{
						'value': '652922',
						'label': '温宿县'
					},
					{
						'value': '652923',
						'label': '库车县'
					},
					{
						'value': '652924',
						'label': '沙雅县'
					},
					{
						'value': '652925',
						'label': '新和县'
					},
					{
						'value': '652926',
						'label': '拜城县'
					},
					{
						'value': '652927',
						'label': '乌什县'
					},
					{
						'value': '652928',
						'label': '阿瓦提县'
					},
					{
						'value': '652929',
						'label': '柯坪县'
					}
				]
			},
			{
				'value': '653000',
				'label': '克孜勒苏柯尔克孜自治州',
				'children': [
					{
						'value': '653001',
						'label': '阿图什市'
					},
					{
						'value': '653022',
						'label': '阿克陶县'
					},
					{
						'value': '653023',
						'label': '阿合奇县'
					},
					{
						'value': '653024',
						'label': '乌恰县'
					}
				]
			},
			{
				'value': '653100',
				'label': '喀什地区',
				'children': [
					{
						'value': '653101',
						'label': '喀什市'
					},
					{
						'value': '653121',
						'label': '疏附县'
					},
					{
						'value': '653122',
						'label': '疏勒县'
					},
					{
						'value': '653123',
						'label': '英吉沙县'
					},
					{
						'value': '653124',
						'label': '泽普县'
					},
					{
						'value': '653125',
						'label': '莎车县'
					},
					{
						'value': '653126',
						'label': '叶城县'
					},
					{
						'value': '653127',
						'label': '麦盖提县'
					},
					{
						'value': '653128',
						'label': '岳普湖县'
					},
					{
						'value': '653129',
						'label': '伽师县'
					},
					{
						'value': '653130',
						'label': '巴楚县'
					},
					{
						'value': '653131',
						'label': '塔什库尔干塔吉克自治县'
					}
				]
			},
			{
				'value': '653200',
				'label': '和田地区',
				'children': [
					{
						'value': '653201',
						'label': '和田市'
					},
					{
						'value': '653221',
						'label': '和田县'
					},
					{
						'value': '653222',
						'label': '墨玉县'
					},
					{
						'value': '653223',
						'label': '皮山县'
					},
					{
						'value': '653224',
						'label': '洛浦县'
					},
					{
						'value': '653225',
						'label': '策勒县'
					},
					{
						'value': '653226',
						'label': '于田县'
					},
					{
						'value': '653227',
						'label': '民丰县'
					}
				]
			},
			{
				'value': '654000',
				'label': '伊犁哈萨克自治州',
				'children': [
					{
						'value': '654002',
						'label': '伊宁市'
					},
					{
						'value': '654003',
						'label': '奎屯市'
					},
					{
						'value': '654021',
						'label': '伊宁县'
					},
					{
						'value': '654022',
						'label': '察布查尔锡伯自治县'
					},
					{
						'value': '654023',
						'label': '霍城县'
					},
					{
						'value': '654024',
						'label': '巩留县'
					},
					{
						'value': '654025',
						'label': '新源县'
					},
					{
						'value': '654026',
						'label': '昭苏县'
					},
					{
						'value': '654027',
						'label': '特克斯县'
					},
					{
						'value': '654028',
						'label': '尼勒克县'
					}
				]
			},
			{
				'value': '654200',
				'label': '塔城地区',
				'children': [
					{
						'value': '654201',
						'label': '塔城市'
					},
					{
						'value': '654202',
						'label': '乌苏市'
					},
					{
						'value': '654221',
						'label': '额敏县'
					},
					{
						'value': '654223',
						'label': '沙湾县'
					},
					{
						'value': '654224',
						'label': '托里县'
					},
					{
						'value': '654225',
						'label': '裕民县'
					},
					{
						'value': '654226',
						'label': '和布克赛尔蒙古自治县'
					}
				]
			},
			{
				'value': '654300',
				'label': '阿勒泰地区',
				'children': [
					{
						'value': '654301',
						'label': '阿勒泰市'
					},
					{
						'value': '654321',
						'label': '布尔津县'
					},
					{
						'value': '654322',
						'label': '富蕴县'
					},
					{
						'value': '654323',
						'label': '福海县'
					},
					{
						'value': '654324',
						'label': '哈巴河县'
					},
					{
						'value': '654325',
						'label': '青河县'
					},
					{
						'value': '654326',
						'label': '吉木乃县'
					}
				]
			},
			{
				'value': '659000',
				'label': '自治区直辖县级行政区划',
				'children': [
					{
						'value': '659001',
						'label': '石河子市'
					},
					{
						'value': '659002',
						'label': '阿拉尔市'
					},
					{
						'value': '659003',
						'label': '图木舒克市'
					},
					{
						'value': '659004',
						'label': '五家渠市'
					}
				]
			}
		]
	},
	{
		'value': '710000',
		'label': '台湾省',
		'children': [
			{
				'value': '710100',
				'label': '台北市',
				'children': [
					{
						'value': '710101',
						'label': '中正区'
					},
					{
						'value': '710102',
						'label': '大同区'
					},
					{
						'value': '710103',
						'label': '中山区'
					},
					{
						'value': '710104',
						'label': '松山区'
					},
					{
						'value': '710105',
						'label': '大安区'
					},
					{
						'value': '710106',
						'label': '万华区'
					},
					{
						'value': '710107',
						'label': '信义区'
					},
					{
						'value': '710108',
						'label': '士林区'
					},
					{
						'value': '710109',
						'label': '北投区'
					},
					{
						'value': '710110',
						'label': '内湖区'
					},
					{
						'value': '710111',
						'label': '南港区'
					},
					{
						'value': '710112',
						'label': '文山区'
					},
					{
						'value': '710113',
						'label': '其它区'
					}
				]
			},
			{
				'value': '710200',
				'label': '高雄市',
				'children': [
					{
						'value': '710201',
						'label': '新兴区'
					},
					{
						'value': '710202',
						'label': '前金区'
					},
					{
						'value': '710203',
						'label': '芩雅区'
					},
					{
						'value': '710204',
						'label': '盐埕区'
					},
					{
						'value': '710205',
						'label': '鼓山区'
					},
					{
						'value': '710206',
						'label': '旗津区'
					},
					{
						'value': '710207',
						'label': '前镇区'
					},
					{
						'value': '710208',
						'label': '三民区'
					},
					{
						'value': '710209',
						'label': '左营区'
					},
					{
						'value': '710210',
						'label': '楠梓区'
					},
					{
						'value': '710211',
						'label': '小港区'
					},
					{
						'value': '710212',
						'label': '其它区'
					},
					{
						'value': '710241',
						'label': '苓雅区'
					},
					{
						'value': '710242',
						'label': '仁武区'
					},
					{
						'value': '710243',
						'label': '大社区'
					},
					{
						'value': '710244',
						'label': '冈山区'
					},
					{
						'value': '710245',
						'label': '路竹区'
					},
					{
						'value': '710246',
						'label': '阿莲区'
					},
					{
						'value': '710247',
						'label': '田寮区'
					},
					{
						'value': '710248',
						'label': '燕巢区'
					},
					{
						'value': '710249',
						'label': '桥头区'
					},
					{
						'value': '710250',
						'label': '梓官区'
					},
					{
						'value': '710251',
						'label': '弥陀区'
					},
					{
						'value': '710252',
						'label': '永安区'
					},
					{
						'value': '710253',
						'label': '湖内区'
					},
					{
						'value': '710254',
						'label': '凤山区'
					},
					{
						'value': '710255',
						'label': '大寮区'
					},
					{
						'value': '710256',
						'label': '林园区'
					},
					{
						'value': '710257',
						'label': '鸟松区'
					},
					{
						'value': '710258',
						'label': '大树区'
					},
					{
						'value': '710259',
						'label': '旗山区'
					},
					{
						'value': '710260',
						'label': '美浓区'
					},
					{
						'value': '710261',
						'label': '六龟区'
					},
					{
						'value': '710262',
						'label': '内门区'
					},
					{
						'value': '710263',
						'label': '杉林区'
					},
					{
						'value': '710264',
						'label': '甲仙区'
					},
					{
						'value': '710265',
						'label': '桃源区'
					},
					{
						'value': '710266',
						'label': '那玛夏区'
					},
					{
						'value': '710267',
						'label': '茂林区'
					},
					{
						'value': '710268',
						'label': '茄萣区'
					}
				]
			},
			{
				'value': '710300',
				'label': '台南市',
				'children': [
					{
						'value': '710301',
						'label': '中西区'
					},
					{
						'value': '710302',
						'label': '东区'
					},
					{
						'value': '710303',
						'label': '南区'
					},
					{
						'value': '710304',
						'label': '北区'
					},
					{
						'value': '710305',
						'label': '安平区'
					},
					{
						'value': '710306',
						'label': '安南区'
					},
					{
						'value': '710307',
						'label': '其它区'
					},
					{
						'value': '710339',
						'label': '永康区'
					},
					{
						'value': '710340',
						'label': '归仁区'
					},
					{
						'value': '710341',
						'label': '新化区'
					},
					{
						'value': '710342',
						'label': '左镇区'
					},
					{
						'value': '710343',
						'label': '玉井区'
					},
					{
						'value': '710344',
						'label': '楠西区'
					},
					{
						'value': '710345',
						'label': '南化区'
					},
					{
						'value': '710346',
						'label': '仁德区'
					},
					{
						'value': '710347',
						'label': '关庙区'
					},
					{
						'value': '710348',
						'label': '龙崎区'
					},
					{
						'value': '710349',
						'label': '官田区'
					},
					{
						'value': '710350',
						'label': '麻豆区'
					},
					{
						'value': '710351',
						'label': '佳里区'
					},
					{
						'value': '710352',
						'label': '西港区'
					},
					{
						'value': '710353',
						'label': '七股区'
					},
					{
						'value': '710354',
						'label': '将军区'
					},
					{
						'value': '710355',
						'label': '学甲区'
					},
					{
						'value': '710356',
						'label': '北门区'
					},
					{
						'value': '710357',
						'label': '新营区'
					},
					{
						'value': '710358',
						'label': '后壁区'
					},
					{
						'value': '710359',
						'label': '白河区'
					},
					{
						'value': '710360',
						'label': '东山区'
					},
					{
						'value': '710361',
						'label': '六甲区'
					},
					{
						'value': '710362',
						'label': '下营区'
					},
					{
						'value': '710363',
						'label': '柳营区'
					},
					{
						'value': '710364',
						'label': '盐水区'
					},
					{
						'value': '710365',
						'label': '善化区'
					},
					{
						'value': '710366',
						'label': '大内区'
					},
					{
						'value': '710367',
						'label': '山上区'
					},
					{
						'value': '710368',
						'label': '新市区'
					},
					{
						'value': '710369',
						'label': '安定区'
					}
				]
			},
			{
				'value': '710400',
				'label': '台中市',
				'children': [
					{
						'value': '710401',
						'label': '中区'
					},
					{
						'value': '710402',
						'label': '东区'
					},
					{
						'value': '710403',
						'label': '南区'
					},
					{
						'value': '710404',
						'label': '西区'
					},
					{
						'value': '710405',
						'label': '北区'
					},
					{
						'value': '710406',
						'label': '北屯区'
					},
					{
						'value': '710407',
						'label': '西屯区'
					},
					{
						'value': '710408',
						'label': '南屯区'
					},
					{
						'value': '710409',
						'label': '其它区'
					},
					{
						'value': '710431',
						'label': '太平区'
					},
					{
						'value': '710432',
						'label': '大里区'
					},
					{
						'value': '710433',
						'label': '雾峰区'
					},
					{
						'value': '710434',
						'label': '乌日区'
					},
					{
						'value': '710435',
						'label': '丰原区'
					},
					{
						'value': '710436',
						'label': '后里区'
					},
					{
						'value': '710437',
						'label': '石冈区'
					},
					{
						'value': '710438',
						'label': '东势区'
					},
					{
						'value': '710439',
						'label': '和平区'
					},
					{
						'value': '710440',
						'label': '新社区'
					},
					{
						'value': '710441',
						'label': '潭子区'
					},
					{
						'value': '710442',
						'label': '大雅区'
					},
					{
						'value': '710443',
						'label': '神冈区'
					},
					{
						'value': '710444',
						'label': '大肚区'
					},
					{
						'value': '710445',
						'label': '沙鹿区'
					},
					{
						'value': '710446',
						'label': '龙井区'
					},
					{
						'value': '710447',
						'label': '梧栖区'
					},
					{
						'value': '710448',
						'label': '清水区'
					},
					{
						'value': '710449',
						'label': '大甲区'
					},
					{
						'value': '710450',
						'label': '外埔区'
					},
					{
						'value': '710451',
						'label': '大安区'
					}
				]
			},
			{
				'value': '710500',
				'label': '金门县',
				'children': [
					{
						'value': '710507',
						'label': '金沙镇'
					},
					{
						'value': '710508',
						'label': '金湖镇'
					},
					{
						'value': '710509',
						'label': '金宁乡'
					},
					{
						'value': '710510',
						'label': '金城镇'
					},
					{
						'value': '710511',
						'label': '烈屿乡'
					},
					{
						'value': '710512',
						'label': '乌坵乡'
					}
				]
			},
			{
				'value': '710600',
				'label': '南投县',
				'children': [
					{
						'value': '710614',
						'label': '南投市'
					},
					{
						'value': '710615',
						'label': '中寮乡'
					},
					{
						'value': '710616',
						'label': '草屯镇'
					},
					{
						'value': '710617',
						'label': '国姓乡'
					},
					{
						'value': '710618',
						'label': '埔里镇'
					},
					{
						'value': '710619',
						'label': '仁爱乡'
					},
					{
						'value': '710620',
						'label': '名间乡'
					},
					{
						'value': '710621',
						'label': '集集镇'
					},
					{
						'value': '710622',
						'label': '水里乡'
					},
					{
						'value': '710623',
						'label': '鱼池乡'
					},
					{
						'value': '710624',
						'label': '信义乡'
					},
					{
						'value': '710625',
						'label': '竹山镇'
					},
					{
						'value': '710626',
						'label': '鹿谷乡'
					}
				]
			},
			{
				'value': '710700',
				'label': '基隆市',
				'children': [
					{
						'value': '710701',
						'label': '仁爱区'
					},
					{
						'value': '710702',
						'label': '信义区'
					},
					{
						'value': '710703',
						'label': '中正区'
					},
					{
						'value': '710704',
						'label': '中山区'
					},
					{
						'value': '710705',
						'label': '安乐区'
					},
					{
						'value': '710706',
						'label': '暖暖区'
					},
					{
						'value': '710707',
						'label': '七堵区'
					},
					{
						'value': '710708',
						'label': '其它区'
					}
				]
			},
			{
				'value': '710800',
				'label': '新竹市',
				'children': [
					{
						'value': '710801',
						'label': '东区'
					},
					{
						'value': '710802',
						'label': '北区'
					},
					{
						'value': '710803',
						'label': '香山区'
					},
					{
						'value': '710804',
						'label': '其它区'
					}
				]
			},
			{
				'value': '710900',
				'label': '嘉义市',
				'children': [
					{
						'value': '710901',
						'label': '东区'
					},
					{
						'value': '710902',
						'label': '西区'
					},
					{
						'value': '710903',
						'label': '其它区'
					}
				]
			},
			{
				'value': '711100',
				'label': '新北市',
				'children': [
					{
						'value': '711130',
						'label': '万里区'
					},
					{
						'value': '711131',
						'label': '金山区'
					},
					{
						'value': '711132',
						'label': '板桥区'
					},
					{
						'value': '711133',
						'label': '汐止区'
					},
					{
						'value': '711134',
						'label': '深坑区'
					},
					{
						'value': '711135',
						'label': '石碇区'
					},
					{
						'value': '711136',
						'label': '瑞芳区'
					},
					{
						'value': '711137',
						'label': '平溪区'
					},
					{
						'value': '711138',
						'label': '双溪区'
					},
					{
						'value': '711139',
						'label': '贡寮区'
					},
					{
						'value': '711140',
						'label': '新店区'
					},
					{
						'value': '711141',
						'label': '坪林区'
					},
					{
						'value': '711142',
						'label': '乌来区'
					},
					{
						'value': '711143',
						'label': '永和区'
					},
					{
						'value': '711144',
						'label': '中和区'
					},
					{
						'value': '711145',
						'label': '土城区'
					},
					{
						'value': '711146',
						'label': '三峡区'
					},
					{
						'value': '711147',
						'label': '树林区'
					},
					{
						'value': '711148',
						'label': '莺歌区'
					},
					{
						'value': '711149',
						'label': '三重区'
					},
					{
						'value': '711150',
						'label': '新庄区'
					},
					{
						'value': '711151',
						'label': '泰山区'
					},
					{
						'value': '711152',
						'label': '林口区'
					},
					{
						'value': '711153',
						'label': '芦洲区'
					},
					{
						'value': '711154',
						'label': '五股区'
					},
					{
						'value': '711155',
						'label': '八里区'
					},
					{
						'value': '711156',
						'label': '淡水区'
					},
					{
						'value': '711157',
						'label': '三芝区'
					},
					{
						'value': '711158',
						'label': '石门区'
					}
				]
			},
			{
				'value': '711200',
				'label': '宜兰县',
				'children': [
					{
						'value': '711214',
						'label': '宜兰市'
					},
					{
						'value': '711215',
						'label': '头城镇'
					},
					{
						'value': '711216',
						'label': '礁溪乡'
					},
					{
						'value': '711217',
						'label': '壮围乡'
					},
					{
						'value': '711218',
						'label': '员山乡'
					},
					{
						'value': '711219',
						'label': '罗东镇'
					},
					{
						'value': '711220',
						'label': '三星乡'
					},
					{
						'value': '711221',
						'label': '大同乡'
					},
					{
						'value': '711222',
						'label': '五结乡'
					},
					{
						'value': '711223',
						'label': '冬山乡'
					},
					{
						'value': '711224',
						'label': '苏澳镇'
					},
					{
						'value': '711225',
						'label': '南澳乡'
					},
					{
						'value': '711226',
						'label': '钓鱼台'
					}
				]
			},
			{
				'value': '711300',
				'label': '新竹县',
				'children': [
					{
						'value': '711314',
						'label': '竹北市'
					},
					{
						'value': '711315',
						'label': '湖口乡'
					},
					{
						'value': '711316',
						'label': '新丰乡'
					},
					{
						'value': '711317',
						'label': '新埔镇'
					},
					{
						'value': '711318',
						'label': '关西镇'
					},
					{
						'value': '711319',
						'label': '芎林乡'
					},
					{
						'value': '711320',
						'label': '宝山乡'
					},
					{
						'value': '711321',
						'label': '竹东镇'
					},
					{
						'value': '711322',
						'label': '五峰乡'
					},
					{
						'value': '711323',
						'label': '横山乡'
					},
					{
						'value': '711324',
						'label': '尖石乡'
					},
					{
						'value': '711325',
						'label': '北埔乡'
					},
					{
						'value': '711326',
						'label': '峨眉乡'
					}
				]
			},
			{
				'value': '711400',
				'label': '桃园县',
				'children': [
					{
						'value': '711414',
						'label': '中坜市'
					},
					{
						'value': '711415',
						'label': '平镇市'
					},
					{
						'value': '711416',
						'label': '龙潭乡'
					},
					{
						'value': '711417',
						'label': '杨梅市'
					},
					{
						'value': '711418',
						'label': '新屋乡'
					},
					{
						'value': '711419',
						'label': '观音乡'
					},
					{
						'value': '711420',
						'label': '桃园市'
					},
					{
						'value': '711421',
						'label': '龟山乡'
					},
					{
						'value': '711422',
						'label': '八德市'
					},
					{
						'value': '711423',
						'label': '大溪镇'
					},
					{
						'value': '711424',
						'label': '复兴乡'
					},
					{
						'value': '711425',
						'label': '大园乡'
					},
					{
						'value': '711426',
						'label': '芦竹乡'
					}
				]
			},
			{
				'value': '711500',
				'label': '苗栗县',
				'children': [
					{
						'value': '711519',
						'label': '竹南镇'
					},
					{
						'value': '711520',
						'label': '头份镇'
					},
					{
						'value': '711521',
						'label': '三湾乡'
					},
					{
						'value': '711522',
						'label': '南庄乡'
					},
					{
						'value': '711523',
						'label': '狮潭乡'
					},
					{
						'value': '711524',
						'label': '后龙镇'
					},
					{
						'value': '711525',
						'label': '通霄镇'
					},
					{
						'value': '711526',
						'label': '苑里镇'
					},
					{
						'value': '711527',
						'label': '苗栗市'
					},
					{
						'value': '711528',
						'label': '造桥乡'
					},
					{
						'value': '711529',
						'label': '头屋乡'
					},
					{
						'value': '711530',
						'label': '公馆乡'
					},
					{
						'value': '711531',
						'label': '大湖乡'
					},
					{
						'value': '711532',
						'label': '泰安乡'
					},
					{
						'value': '711533',
						'label': '铜锣乡'
					},
					{
						'value': '711534',
						'label': '三义乡'
					},
					{
						'value': '711535',
						'label': '西湖乡'
					},
					{
						'value': '711536',
						'label': '卓兰镇'
					}
				]
			},
			{
				'value': '711700',
				'label': '彰化县',
				'children': [
					{
						'value': '711727',
						'label': '彰化市'
					},
					{
						'value': '711728',
						'label': '芬园乡'
					},
					{
						'value': '711729',
						'label': '花坛乡'
					},
					{
						'value': '711730',
						'label': '秀水乡'
					},
					{
						'value': '711731',
						'label': '鹿港镇'
					},
					{
						'value': '711732',
						'label': '福兴乡'
					},
					{
						'value': '711733',
						'label': '线西乡'
					},
					{
						'value': '711734',
						'label': '和美镇'
					},
					{
						'value': '711735',
						'label': '伸港乡'
					},
					{
						'value': '711736',
						'label': '员林镇'
					},
					{
						'value': '711737',
						'label': '社头乡'
					},
					{
						'value': '711738',
						'label': '永靖乡'
					},
					{
						'value': '711739',
						'label': '埔心乡'
					},
					{
						'value': '711740',
						'label': '溪湖镇'
					},
					{
						'value': '711741',
						'label': '大村乡'
					},
					{
						'value': '711742',
						'label': '埔盐乡'
					},
					{
						'value': '711743',
						'label': '田中镇'
					},
					{
						'value': '711744',
						'label': '北斗镇'
					},
					{
						'value': '711745',
						'label': '田尾乡'
					},
					{
						'value': '711746',
						'label': '埤头乡'
					},
					{
						'value': '711747',
						'label': '溪州乡'
					},
					{
						'value': '711748',
						'label': '竹塘乡'
					},
					{
						'value': '711749',
						'label': '二林镇'
					},
					{
						'value': '711750',
						'label': '大城乡'
					},
					{
						'value': '711751',
						'label': '芳苑乡'
					},
					{
						'value': '711752',
						'label': '二水乡'
					}
				]
			},
			{
				'value': '711900',
				'label': '嘉义县',
				'children': [
					{
						'value': '711919',
						'label': '番路乡'
					},
					{
						'value': '711920',
						'label': '梅山乡'
					},
					{
						'value': '711921',
						'label': '竹崎乡'
					},
					{
						'value': '711922',
						'label': '阿里山乡'
					},
					{
						'value': '711923',
						'label': '中埔乡'
					},
					{
						'value': '711924',
						'label': '大埔乡'
					},
					{
						'value': '711925',
						'label': '水上乡'
					},
					{
						'value': '711926',
						'label': '鹿草乡'
					},
					{
						'value': '711927',
						'label': '太保市'
					},
					{
						'value': '711928',
						'label': '朴子市'
					},
					{
						'value': '711929',
						'label': '东石乡'
					},
					{
						'value': '711930',
						'label': '六脚乡'
					},
					{
						'value': '711931',
						'label': '新港乡'
					},
					{
						'value': '711932',
						'label': '民雄乡'
					},
					{
						'value': '711933',
						'label': '大林镇'
					},
					{
						'value': '711934',
						'label': '溪口乡'
					},
					{
						'value': '711935',
						'label': '义竹乡'
					},
					{
						'value': '711936',
						'label': '布袋镇'
					}
				]
			},
			{
				'value': '712100',
				'label': '云林县',
				'children': [
					{
						'value': '712121',
						'label': '斗南镇'
					},
					{
						'value': '712122',
						'label': '大埤乡'
					},
					{
						'value': '712123',
						'label': '虎尾镇'
					},
					{
						'value': '712124',
						'label': '土库镇'
					},
					{
						'value': '712125',
						'label': '褒忠乡'
					},
					{
						'value': '712126',
						'label': '东势乡'
					},
					{
						'value': '712127',
						'label': '台西乡'
					},
					{
						'value': '712128',
						'label': '仑背乡'
					},
					{
						'value': '712129',
						'label': '麦寮乡'
					},
					{
						'value': '712130',
						'label': '斗六市'
					},
					{
						'value': '712131',
						'label': '林内乡'
					},
					{
						'value': '712132',
						'label': '古坑乡'
					},
					{
						'value': '712133',
						'label': '莿桐乡'
					},
					{
						'value': '712134',
						'label': '西螺镇'
					},
					{
						'value': '712135',
						'label': '二仑乡'
					},
					{
						'value': '712136',
						'label': '北港镇'
					},
					{
						'value': '712137',
						'label': '水林乡'
					},
					{
						'value': '712138',
						'label': '口湖乡'
					},
					{
						'value': '712139',
						'label': '四湖乡'
					},
					{
						'value': '712140',
						'label': '元长乡'
					}
				]
			},
			{
				'value': '712400',
				'label': '屏东县',
				'children': [
					{
						'value': '712434',
						'label': '屏东市'
					},
					{
						'value': '712435',
						'label': '三地门乡'
					},
					{
						'value': '712436',
						'label': '雾台乡'
					},
					{
						'value': '712437',
						'label': '玛家乡'
					},
					{
						'value': '712438',
						'label': '九如乡'
					},
					{
						'value': '712439',
						'label': '里港乡'
					},
					{
						'value': '712440',
						'label': '高树乡'
					},
					{
						'value': '712441',
						'label': '盐埔乡'
					},
					{
						'value': '712442',
						'label': '长治乡'
					},
					{
						'value': '712443',
						'label': '麟洛乡'
					},
					{
						'value': '712444',
						'label': '竹田乡'
					},
					{
						'value': '712445',
						'label': '内埔乡'
					},
					{
						'value': '712446',
						'label': '万丹乡'
					},
					{
						'value': '712447',
						'label': '潮州镇'
					},
					{
						'value': '712448',
						'label': '泰武乡'
					},
					{
						'value': '712449',
						'label': '来义乡'
					},
					{
						'value': '712450',
						'label': '万峦乡'
					},
					{
						'value': '712451',
						'label': '崁顶乡'
					},
					{
						'value': '712452',
						'label': '新埤乡'
					},
					{
						'value': '712453',
						'label': '南州乡'
					},
					{
						'value': '712454',
						'label': '林边乡'
					},
					{
						'value': '712455',
						'label': '东港镇'
					},
					{
						'value': '712456',
						'label': '琉球乡'
					},
					{
						'value': '712457',
						'label': '佳冬乡'
					},
					{
						'value': '712458',
						'label': '新园乡'
					},
					{
						'value': '712459',
						'label': '枋寮乡'
					},
					{
						'value': '712460',
						'label': '枋山乡'
					},
					{
						'value': '712461',
						'label': '春日乡'
					},
					{
						'value': '712462',
						'label': '狮子乡'
					},
					{
						'value': '712463',
						'label': '车城乡'
					},
					{
						'value': '712464',
						'label': '牡丹乡'
					},
					{
						'value': '712465',
						'label': '恒春镇'
					},
					{
						'value': '712466',
						'label': '满州乡'
					}
				]
			},
			{
				'value': '712500',
				'label': '台东县',
				'children': [
					{
						'value': '712517',
						'label': '台东市'
					},
					{
						'value': '712518',
						'label': '绿岛乡'
					},
					{
						'value': '712519',
						'label': '兰屿乡'
					},
					{
						'value': '712520',
						'label': '延平乡'
					},
					{
						'value': '712521',
						'label': '卑南乡'
					},
					{
						'value': '712522',
						'label': '鹿野乡'
					},
					{
						'value': '712523',
						'label': '关山镇'
					},
					{
						'value': '712524',
						'label': '海端乡'
					},
					{
						'value': '712525',
						'label': '池上乡'
					},
					{
						'value': '712526',
						'label': '东河乡'
					},
					{
						'value': '712527',
						'label': '成功镇'
					},
					{
						'value': '712528',
						'label': '长滨乡'
					},
					{
						'value': '712529',
						'label': '金峰乡'
					},
					{
						'value': '712530',
						'label': '大武乡'
					},
					{
						'value': '712531',
						'label': '达仁乡'
					},
					{
						'value': '712532',
						'label': '太麻里乡'
					}
				]
			},
			{
				'value': '712600',
				'label': '花莲县',
				'children': [
					{
						'value': '712615',
						'label': '花莲市'
					},
					{
						'value': '712616',
						'label': '新城乡'
					},
					{
						'value': '712617',
						'label': '太鲁阁'
					},
					{
						'value': '712618',
						'label': '秀林乡'
					},
					{
						'value': '712619',
						'label': '吉安乡'
					},
					{
						'value': '712620',
						'label': '寿丰乡'
					},
					{
						'value': '712621',
						'label': '凤林镇'
					},
					{
						'value': '712622',
						'label': '光复乡'
					},
					{
						'value': '712623',
						'label': '丰滨乡'
					},
					{
						'value': '712624',
						'label': '瑞穗乡'
					},
					{
						'value': '712625',
						'label': '万荣乡'
					},
					{
						'value': '712626',
						'label': '玉里镇'
					},
					{
						'value': '712627',
						'label': '卓溪乡'
					},
					{
						'value': '712628',
						'label': '富里乡'
					}
				]
			},
			{
				'value': '712700',
				'label': '澎湖县',
				'children': [
					{
						'value': '712707',
						'label': '马公市'
					},
					{
						'value': '712708',
						'label': '西屿乡'
					},
					{
						'value': '712709',
						'label': '望安乡'
					},
					{
						'value': '712710',
						'label': '七美乡'
					},
					{
						'value': '712711',
						'label': '白沙乡'
					},
					{
						'value': '712712',
						'label': '湖西乡'
					}
				]
			},
			{
				'value': '712800',
				'label': '连江县',
				'children': [
					{
						'value': '712805',
						'label': '南竿乡'
					},
					{
						'value': '712806',
						'label': '北竿乡'
					},
					{
						'value': '712807',
						'label': '莒光乡'
					},
					{
						'value': '712808',
						'label': '东引乡'
					}
				]
			}
		]
	},
	{
		'value': '810000',
		'label': '香港特别行政区',
		'children': [
			{
				'value': '810100',
				'label': '香港',
				'children': [
					{
						'value': '810101',
						'label': '中西区'
					},
					{
						'value': '810102',
						'label': '湾仔区'
					},
					{
						'value': '810103',
						'label': '东区'
					},
					{
						'value': '810104',
						'label': '南区'
					},
					{
						'value': '810105',
						'label': '油尖旺区'
					},
					{
						'value': '810106',
						'label': '深水埗区'
					},
					{
						'value': '810107',
						'label': '九龙城区'
					},
					{
						'value': '810108',
						'label': '黄大仙区'
					},
					{
						'value': '810109',
						'label': '观塘区'
					},
					{
						'value': '810110',
						'label': '荃湾区'
					},
					{
						'value': '810111',
						'label': '屯门区'
					},
					{
						'value': '810112',
						'label': '元朗区'
					},
					{
						'value': '810113',
						'label': '北区'
					},
					{
						'value': '810114',
						'label': '大埔区'
					},
					{
						'value': '810115',
						'label': '西贡区'
					},
					{
						'value': '810116',
						'label': '沙田区'
					},
					{
						'value': '810117',
						'label': '葵青区'
					},
					{
						'value': '810118',
						'label': '离岛区'
					}
				]
			}
		]
	},
	{
		'value': '820000',
		'label': '澳门特别行政区',
		'children': [
			{
				'value': '820100',
				'label': '澳门',
				'children': [
					{
						'value': '820101',
						'label': '花地玛堂区'
					},
					{
						'value': '820102',
						'label': '花王堂区'
					},
					{
						'value': '820103',
						'label': '望德堂区'
					},
					{
						'value': '820104',
						'label': '大堂区'
					},
					{
						'value': '820105',
						'label': '风顺堂区'
					},
					{
						'value': '820106',
						'label': '嘉模堂区'
					},
					{
						'value': '820107',
						'label': '路凼填海区'
					},
					{
						'value': '820108',
						'label': '圣方济各堂区'
					}
				]
			}
		]
	}
]

/***/ }),

/***/ "./src/assets/jqweui/jquery-2.1.4.js":
/*!*******************************************!*\
  !*** ./src/assets/jqweui/jquery-2.1.4.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:01Z
 */

(function( global, factory ) {

	if (  true && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//

var arr = [];

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,

	version = "2.1.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {
		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
	},

	isPlainObject: function( obj ) {
		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.constructor &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
			return false;
		}

		// If the function hasn't returned already, we're confident that
		// |obj| is a plain object, created by {} or constructed with new Object
		return true;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		// Support: Android<4.0, iOS<6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call(obj) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
			indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {
			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf("use strict") === 1 ) {
				script = document.createElement("script");
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {
			// Otherwise, avoid the DOM node creation, insertion
			// and removal by using an indirect global eval
				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + characterEncoding + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];
	nodeType = context.nodeType;

	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	if ( !seed && documentIsHTML ) {

		// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
		if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document (jQuery #6963)
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType !== 1 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;
	parent = doc.defaultView;

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent !== parent.top ) {
		// IE11 does not have attachEvent, so all must suffer
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Support tests
	---------------------------------------------------------------------- */
	documentIsHTML = !isXML( doc );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( doc.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\f]' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (oldCache = outerCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							outerCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context !== document && context;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is no seed and only one group
	if ( match.length === 1 ) {

		// Take a shortcut and set the context if the root selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
	});
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		}));
};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},
	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
});


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Support: Blackberry 4.6
					// gEBID returns nodes no longer in the document (#6963)
					if ( elem && elem.parentNode ) {
						// Inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof rootjQuery.ready !== "undefined" ?
				rootjQuery.ready( selector ) :
				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.extend({
	dir: function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	}
});

jQuery.fn.extend({
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter(function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.unique(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.unique( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
});
var rnotwhite = (/\S+/g);



// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// Add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// If we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {
	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend({
	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
});

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed, false );
	window.removeEventListener( "load", completed, false );
	jQuery.ready();
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// We once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {
			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[0], key ) : emptyGet;
};


/**
 * Determines whether an object can have data
 */
jQuery.acceptData = function( owner ) {
	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};


function Data() {
	// Support: Android<4,
	// Old WebKit does not have Object.preventExtensions/freeze method,
	// return new empty object instead with no [[set]] accessor
	Object.defineProperty( this.cache = {}, 0, {
		get: function() {
			return {};
		}
	});

	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;
Data.accepts = jQuery.acceptData;

Data.prototype = {
	key: function( owner ) {
		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return the key for a frozen object.
		if ( !Data.accepts( owner ) ) {
			return 0;
		}

		var descriptor = {},
			// Check if the owner object already has a cache key
			unlock = owner[ this.expando ];

		// If not, create one
		if ( !unlock ) {
			unlock = Data.uid++;

			// Secure it in a non-enumerable, non-writable property
			try {
				descriptor[ this.expando ] = { value: unlock };
				Object.defineProperties( owner, descriptor );

			// Support: Android<4
			// Fallback to a less secure definition
			} catch ( e ) {
				descriptor[ this.expando ] = unlock;
				jQuery.extend( owner, descriptor );
			}
		}

		// Ensure the cache object
		if ( !this.cache[ unlock ] ) {
			this.cache[ unlock ] = {};
		}

		return unlock;
	},
	set: function( owner, data, value ) {
		var prop,
			// There may be an unlock assigned to this node,
			// if there is no entry for this "owner", create one inline
			// and set the unlock as though an owner entry had always existed
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {
			// Fresh assignments by object are shallow copied
			if ( jQuery.isEmptyObject( cache ) ) {
				jQuery.extend( this.cache[ unlock ], data );
			// Otherwise, copy the properties one-by-one to the cache object
			} else {
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		// Either a valid cache is found, or will be created.
		// New caches will be created and the unlock returned,
		// allowing direct access to the newly created
		// empty data object. A valid owner object must be provided.
		var cache = this.cache[ this.key( owner ) ];

		return key === undefined ?
			cache : cache[ key ];
	},
	access: function( owner, key, value ) {
		var stored;
		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				((key && typeof key === "string") && value === undefined) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase(key) );
		}

		// [*]When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		if ( key === undefined ) {
			this.cache[ unlock ] = {};

		} else {
			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );
				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( rnotwhite ) || [] );
				}
			}

			i = name.length;
			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}
	},
	hasData: function( owner ) {
		return !jQuery.isEmptyObject(
			this.cache[ owner[ this.expando ] ] || {}
		);
	},
	discard: function( owner ) {
		if ( owner[ this.expando ] ) {
			delete this.cache[ owner[ this.expando ] ];
		}
	}
};
var data_priv = new Data();

var data_user = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			data_user.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend({
	hasData: function( elem ) {
		return data_user.hasData( elem ) || data_priv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return data_user.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		data_user.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to data_priv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return data_priv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		data_priv.remove( elem, name );
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = data_user.get( elem );

				if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice(5) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					data_priv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				data_user.set( this, key );
			});
		}

		return access( this, function( value ) {
			var data,
				camelKey = jQuery.camelCase( key );

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {
				// Attempt to get data from the cache
				// with the key as-is
				data = data_user.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to get data from the cache
				// with the key camelized
				data = data_user.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each(function() {
				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = data_user.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				data_user.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf("-") !== -1 && data !== undefined ) {
					data_user.set( this, key, value );
				}
			});
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each(function() {
			data_user.remove( this, key );
		});
	}
});


jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = data_priv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = data_priv.access( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return data_priv.get( elem, key ) || data_priv.access( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				data_priv.remove( elem, [ type + "queue", key ] );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = data_priv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	};

var rcheckableType = (/^(?:checkbox|radio)$/i);



(function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
})();
var strundefined = typeof undefined;



support.focusinBubbles = "onfocusin" in window;


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.hasData( elem ) && data_priv.get( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;
			data_priv.remove( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.disabled !== true || event.type !== "click" ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome<28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle, false );
	}
};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&
				// Support: Android<4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && e.preventDefault ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && e.stopPropagation ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// Support: Chrome 15+
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// Support: Firefox, Chrome, Safari
// Create "bubbling" focus and blur events
if ( !support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					data_priv.remove( doc, fix );

				} else {
					data_priv.access( doc, fix, attaches );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});


var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

// Support: IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: 1.x compatibility
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute("type");
	}

	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		data_priv.set(
			elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
		);
	}
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( data_priv.hasData( src ) ) {
		pdataOld = data_priv.access( src );
		pdataCur = data_priv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( data_user.hasData( src ) ) {
		udataOld = data_user.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		data_user.set( dest, udataCur );
	}
}

function getAll( context, tag ) {
	var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
			context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					// Support: QtWebKit, PhantomJS
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: QtWebKit, PhantomJS
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	},

	cleanData: function( elems ) {
		var data, elem, type, key,
			special = jQuery.event.special,
			i = 0;

		for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
			if ( jQuery.acceptData( elem ) ) {
				key = elem[ data_priv.expando ];

				if ( key && (data = data_priv.cache[ key ]) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}
					if ( data_priv.cache[ key ] ) {
						// Discard any remaining `private` data
						delete data_priv.cache[ key ];
					}
				}
			}
			// Discard any remaining `user` data
			delete data_user.cache[ elem[ data_user.expando ] ];
		}
	}
});

jQuery.fn.extend({
	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each(function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				});
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	remove: function( selector, keepData /* Internal Use Only */ ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {
			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map(function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var arg = arguments[ 0 ];

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			arg = this.parentNode;

			jQuery.cleanData( getAll( this ) );

			if ( arg ) {
				arg.replaceChild( elem, this );
			}
		});

		// Force removal if there was no new content (e.g., from empty arguments)
		return arg && (arg.length || arg.nodeType) ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							// Support: QtWebKit
							// jQuery.merge because push.apply(_, arraylike) throws
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return this;
	}
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because push.apply(_, arraylike) throws
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});


var iframe,
	elemdisplay = {};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var style,
		elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		// getDefaultComputedStyle might be reliably used only on attached element
		display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

			// Use of this method is a temporary fix (more like optimization) until something better comes along,
			// since it was removed from specification and supported only in FF
			style.display : jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = iframe[ 0 ].contentDocument;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = (/^margin/);

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {
		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		if ( elem.ownerDocument.defaultView.opener ) {
			return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
		}

		return window.getComputedStyle( elem, null );
	};



function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];
	}

	if ( computed ) {

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: iOS < 6
		// A tribute to the "awesome hack by Dean Edwards"
		// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
		// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
		if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?
		// Support: IE
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {
	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {
				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return (this.get = hookFn).apply( this, arguments );
		}
	};
}


(function() {
	var pixelPositionVal, boxSizingReliableVal,
		docElem = document.documentElement,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	if ( !div.style ) {
		return;
	}

	// Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
		"position:absolute";
	container.appendChild( div );

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computePixelPositionAndBoxSizingReliable() {
		div.style.cssText =
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
			"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
			"border:1px;padding:1px;width:4px;position:absolute";
		div.innerHTML = "";
		docElem.appendChild( container );

		var divStyle = window.getComputedStyle( div, null );
		pixelPositionVal = divStyle.top !== "1%";
		boxSizingReliableVal = divStyle.width === "4px";

		docElem.removeChild( container );
	}

	// Support: node.js jsdom
	// Don't assume that getComputedStyle is a property of the global object
	if ( window.getComputedStyle ) {
		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computePixelPositionAndBoxSizingReliable();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computePixelPositionAndBoxSizingReliable();
				}
				return boxSizingReliableVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				docElem.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );

				docElem.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		});
	}
})();


// A method for quickly swapping in/out CSS properties to get correct calculations.
jQuery.swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var
	// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[0].toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = data_priv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display !== "none" || !hidden ) {
				data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.extend({

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Support: IE9-11+
			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
				style[ name ] = value;
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return jQuery.swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});

jQuery.fn.extend({
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	}
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*.
					// Use string for doubling so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur(),
				// break the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		} ]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = data_priv.get( elem, "fxshow" );

	// Handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// Ensure the complete handler is called before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// Height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always(function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		});
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = data_priv.access( elem, "fxshow", {} );
		}

		// Store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;

			data_priv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// Don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || data_priv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = data_priv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = data_priv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		});
	}
});

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = setTimeout( next, time );
		hooks.stop = function() {
			clearTimeout( timeout );
		};
	});
};


(function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<=11+
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
})();


var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend({
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	}
});

jQuery.extend({
	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	}
});

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle;
		if ( !isXML ) {
			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ name ];
			attrHandle[ name ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				name.toLowerCase() :
				null;
			attrHandle[ name ] = handle;
		}
		return ret;
	};
});




var rfocusable = /^(?:input|select|textarea|button)$/i;

jQuery.fn.extend({
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each(function() {
			delete this[ jQuery.propFix[ name ] || name ];
		});
	}
});

jQuery.extend({
	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
					elem.tabIndex :
					-1;
			}
		}
	}
});

if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});




var rclass = /[\t\r\n\f]/g;

jQuery.fn.extend({
	addClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = arguments.length === 0 || typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = value ? jQuery.trim( cur ) : "";
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// Toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					data_priv.set( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	}
});




var rreturn = /\r/g;

jQuery.fn.extend({
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// Handle most common string cases
					ret.replace(rreturn, "") :
					// Handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE6-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
						optionSet = true;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
});

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});




// Return jQuery for attributes-only inclusion


jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});


var nonce = jQuery.now();

var rquery = (/\?/);



// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE9
	try {
		tmp = new DOMParser();
		xml = tmp.parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Document location
	ajaxLocation = window.location.href,

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,
			// URL without anti-cache param
			cacheURL,
			// Response headers
			responseHeadersString,
			responseHeaders,
			// timeout handle
			timeoutTimer,
			// Cross-domain detection vars
			parts,
			// To know if global events are to be dispatched
			fireGlobals,
			// Loop variable
			i,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});


jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};


jQuery.fn.extend({
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapAll( html.call(this, i) );
			});
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});


jQuery.expr.filters.hidden = function( elem ) {
	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
};
jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function() {
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		.map(function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});


jQuery.ajaxSettings.xhr = function() {
	try {
		return new XMLHttpRequest();
	} catch( e ) {}
};

var xhrId = 0,
	xhrCallbacks = {},
	xhrSuccessStatus = {
		// file protocol always yields status code 0, assume 200
		0: 200,
		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE9
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]();
		}
	});
}

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport(function( options ) {
	var callback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr(),
					id = ++xhrId;

				xhr.open( options.type, options.url, options.async, options.username, options.password );

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers["X-Requested-With"] ) {
					headers["X-Requested-With"] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							delete xhrCallbacks[ id ];
							callback = xhr.onload = xhr.onerror = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {
								complete(
									// file: protocol always yields status 0; see #8605, #14207
									xhr.status,
									xhr.statusText
								);
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,
									// Support: IE9
									// Accessing binary-data responseText throws an exception
									// (#11426)
									typeof xhr.responseText === "string" ? {
										text: xhr.responseText
									} : undefined,
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				xhr.onerror = callback("error");

				// Create the abort callback
				callback = xhrCallbacks[ id ] = callback("abort");

				try {
					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {
					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {
	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery("<script>").prop({
					async: true,
					charset: s.scriptCharset,
					src: s.url
				}).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});




// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[1] ) ];
	}

	parsed = jQuery.buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
});




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep(jQuery.timers, function( fn ) {
		return elem === fn.elem;
	}).length;
};




var docElem = window.document.documentElement;

/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend({
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each(function( i ) {
					jQuery.offset.setOffset( this, options, i );
				});
		}

		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// Support: BlackBerry 5, iOS 3 (original iPhone)
		// If we don't have gBCR, just use 0,0 rather than error
		if ( typeof elem.getBoundingClientRect !== strundefined ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || docElem;
		});
	}
});

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : window.pageXOffset,
					top ? val : window.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

// Support: Safari<7+, Chrome<37+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );
				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
});


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});


// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === strundefined ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;

}));


/***/ })

}]);
//# sourceMappingURL=my-explain-txt-set-my-explain-txt-set-module.js.map