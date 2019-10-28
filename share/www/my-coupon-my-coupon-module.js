(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-coupon-my-coupon-module"],{

/***/ "./src/app/my-coupon/my-coupon.module.ts":
/*!***********************************************!*\
  !*** ./src/app/my-coupon/my-coupon.module.ts ***!
  \***********************************************/
/*! exports provided: MyCouponPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCouponPageModule", function() { return MyCouponPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_coupon_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-coupon.page */ "./src/app/my-coupon/my-coupon.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _my_coupon_page__WEBPACK_IMPORTED_MODULE_5__["MyCouponPage"]
    }
];
var MyCouponPageModule = /** @class */ (function () {
    function MyCouponPageModule() {
    }
    MyCouponPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_my_coupon_page__WEBPACK_IMPORTED_MODULE_5__["MyCouponPage"]]
        })
    ], MyCouponPageModule);
    return MyCouponPageModule;
}());



/***/ }),

/***/ "./src/app/my-coupon/my-coupon.page.html":
/*!***********************************************!*\
  !*** ./src/app/my-coupon/my-coupon.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header no-border>\n    <div class=\"{{header_class}}\">\n      <div class=\"head_berd\">\n        <ion-toolbar color=\"primary\" mode=\"ios\">\n            <ion-buttons slot=\"start\">\n                <ion-back-button text=\"\"></ion-back-button>\n              </ion-buttons>\n          <ion-title>我的优惠券</ion-title>\n        </ion-toolbar>\n      </div>\n    </div>\n  \n  \n  \n  </ion-header>\n  \n  \n  <ion-content padding class=\"neir_f\">\n    <div *ngIf=\"notMoer\" style=\"text-align: center;color: #666666;font-size: 1.4rem\">\n      当前没有优惠券。。\n    </div>\n  \n    <ion-list>\n  \n      <div class=\"yhj_f\" *ngFor=\"let item of objlist\">\n        <div class=\"yhj_t\">\n  \n          <ion-row class=\"row_t\">\n            <ion-col>\n              <P>塔罗馆</P>\n            </ion-col>\n            <ion-col class=\"row_t_sp\">\n              <p>\n                <span>{{item.couponName}}</span>\n              </p>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"row_c\">\n  \n            <ion-col>\n              <div style=\"text-align: right;    font-size: 1.5rem;\">\n                <span>¥\n                  <span class=\"span_nab\">{{item.couponMoney}}</span>\n                </span>\n                <span>\n                  咨询通用\n                </span>\n              </div>\n            </ion-col>\n          </ion-row>\n  \n        </div>\n        <div class=\"toothbg\"></div>\n        <div class=\"yhj_b\">\n  \n          <ion-row class=\"row_b\">\n            <ion-col>\n              <p>使用期限：{{item.date}}</p>\n            </ion-col>\n            <ion-col>\n              <p>可使用</p>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n  \n      <!-- -------优惠券分隔符------- -->\n  \n      <!-- <div class=\"yhj_f\">\n            <div class=\"yhj_t2\">\n        \n        <ion-row class=\"row_t\">\n          <ion-col>\n        <P>塔罗馆</P>\n          </ion-col>\n          <ion-col class=\"row_t_sp\">\n              \n              <p><span>现金抵扣卷</span></p>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"row_c\">\n            <ion-col></ion-col>\n            <ion-col>\n              <span>¥<span class=\"span_nab\">30</span></span>\n              <span>\n          咨询通用\n              </span>\n            </ion-col>\n          </ion-row>\n        \n            </div>\n              <div class=\"toothbg2\"></div>\n              <div class=\"yhj_b\">\n        \n                <ion-row class=\"row_b\">\n                  <ion-col>\n        <p>使用期限：无限制</p>\n                  </ion-col>\n                  <ion-col>\n                      <p>可使用</p>\n                    </ion-col>\n                </ion-row>\n              </div>\n          </div> -->\n    </ion-list>\n  \n  \n  \n  \n  </ion-content>"

/***/ }),

/***/ "./src/app/my-coupon/my-coupon.page.scss":
/*!***********************************************!*\
  !*** ./src/app/my-coupon/my-coupon.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toothbg {\n  width: 100%;\n  height: 9px;\n  background: #A3DFF1;\n  background-image: -moz-linear-gradient(50% 0 -45deg, transparent, transparent 50%, #fff 50%, #fff), -moz-linear-gradient(50% 0 -135deg, transparent, transparent 50%, #fff 50%, #fff);\n  background-size: 10px 13px;\n  background-repeat: repeat-x;\n  background-position: 0 100%; }\n\n.toothbg2 {\n  width: 100%;\n  height: 9px;\n  background: #F5BCCD;\n  background-image: -moz-linear-gradient(50% 0 -45deg, transparent, transparent 50%, #fff 50%, #fff), -moz-linear-gradient(50% 0 -135deg, transparent, transparent 50%, #fff 50%, #fff);\n  background-size: 10px 13px;\n  background-repeat: repeat-x;\n  background-position: 0 100%; }\n\n.yhj_t {\n  height: 85px;\n  background: #A3DFF1;\n  color: #fff;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n  padding: 10px 10px 0px 10px; }\n\n.yhj_t2 {\n  height: 85px;\n  background: #F5BCCD;\n  color: #fff;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n  padding: 10px 10px 0px 10px; }\n\n.yhj_b {\n  background: #fff;\n  height: 25px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px; }\n\n.neir_f {\n  background: #F1F1F1; }\n\n.row_t {\n  font-size: 1.4rem; }\n\n.row_t ion-col {\n  padding-top: 0px; }\n\n.row_t p {\n  margin: 0px; }\n\n.row_t_sp p:nth-child(1) {\n  text-align: right; }\n\n.row_b {\n  font-size: 1.4rem; }\n\n.row_b p {\n  margin: 0px;\n  font-size: 0.9em;\n  color: #666666; }\n\n.row_b ion-col {\n  padding-top: 2px;\n  padding-left: 10px;\n  padding-right: 10px; }\n\n.row_b ion-col:nth-child(1) {\n  text-align: left; }\n\n.row_b ion-col:nth-child(2) {\n  text-align: right; }\n\n.row_c ion-col:nth-child(2) span:nth-child(2) {\n  font-size: 1.5em; }\n\n.row_c .span_nab {\n  font-size: 1.6em;\n  font-family: Georgia, 'Times New Roman', Times, serif;\n  margin-left: 3px; }\n\n.yhj_f {\n  margin-bottom: 20px;\n  transition: opacity 0.2s; }\n\n.yhj_f:active {\n  opacity: 0.6; }\n\nion-list .yhj_f:nth-of-type(odd) .yhj_t {\n  background: #A3DFF1; }\n\nion-list .yhj_f:nth-of-type(even) .yhj_t {\n  background: #F5BCCD; }\n\nion-list .yhj_f:nth-of-type(odd) .toothbg {\n  background: #A3DFF1;\n  background-image: -moz-linear-gradient(50% 0 -45deg, transparent, transparent 50%, #fff 50%, #fff), -moz-linear-gradient(50% 0 -135deg, transparent, transparent 50%, #fff 50%, #fff);\n  background-size: 10px 13px;\n  background-repeat: repeat-x;\n  background-position: 0 100%; }\n\nion-list .yhj_f:nth-of-type(even) .toothbg {\n  background: #F5BCCD;\n  background-image: -moz-linear-gradient(50% 0 -45deg, transparent, transparent 50%, #fff 50%, #fff), -moz-linear-gradient(50% 0 -135deg, transparent, transparent 50%, #fff 50%, #fff);\n  background-size: 10px 13px;\n  background-repeat: repeat-x;\n  background-position: 0 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvbXktY291cG9uL215LWNvdXBvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUyxXQUFVO0VBQUMsV0FBVTtFQUFDLG1CQUFrQjtFQUc3QyxxTEFDNkY7RUFDN0YsMEJBQXlCO0VBQ3pCLDJCQUEwQjtFQUMxQiwyQkFBMEIsRUFBQTs7QUFFOUI7RUFBVSxXQUFVO0VBQUMsV0FBVTtFQUFDLG1CQUFrQjtFQUc5QyxxTEFDNkY7RUFDN0YsMEJBQXlCO0VBQ3pCLDJCQUEwQjtFQUMxQiwyQkFBMEIsRUFBQTs7QUFFOUI7RUFDSSxZQUFZO0VBQUMsbUJBQWtCO0VBQy9CLFdBQVU7RUFDViw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLDJCQUEwQixFQUFBOztBQUk5QjtFQUNJLFlBQVk7RUFBQyxtQkFBa0I7RUFDL0IsV0FBVTtFQUNWLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsMkJBQTBCLEVBQUE7O0FBSTlCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsZ0NBQWdDLEVBQUE7O0FBSXBDO0VBQ0ksbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksaUJBQ0osRUFBQTs7QUFDQTtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFdBQVcsRUFBQTs7QUFFZjtFQUNHLGlCQUFpQixFQUFBOztBQUVwQjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYSxFQUFBOztBQUVqQjtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0EsZ0JBQWdCLEVBQUE7O0FBRWhCO0VBQ0ksaUJBQWdCLEVBQUE7O0FBRXBCO0VBQ0EsZ0JBQWdCLEVBQUE7O0FBRWhCO0VBQ0ksZ0JBQWdCO0VBQ2hCLHFEQUFxRDtFQUNyRCxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxtQkFBbUI7RUFDbkIsd0JBQXdCLEVBQUE7O0FBRTVCO0VBQ0csWUFBWSxFQUFBOztBQUdmO0VBRUksbUJBQWtCLEVBQUE7O0FBRXRCO0VBRUksbUJBQWtCLEVBQUE7O0FBRXRCO0VBRUksbUJBQWtCO0VBR3RCLHFMQUNpRjtFQUNqRiwwQkFBeUI7RUFDekIsMkJBQTBCO0VBQzFCLDJCQUEwQixFQUFBOztBQUUxQjtFQUVJLG1CQUFrQjtFQUd0QixxTEFDaUY7RUFDakYsMEJBQXlCO0VBQ3pCLDJCQUEwQjtFQUMxQiwyQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL215LWNvdXBvbi9teS1jb3Vwb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb3RoYmd7d2lkdGg6MTAwJTtoZWlnaHQ6OXB4O2JhY2tncm91bmQ6I0EzREZGMTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLDUwJSAwLDAgMTAwJSxmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCguNSx0cmFuc3BhcmVudCksY29sb3Itc3RvcCguNSwjZmZmKSx0bygjZmZmKSksXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZ3JhZGllbnQobGluZWFyLDUwJSAwLDEwMCUgMTAwJSxmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCguNSx0cmFuc3BhcmVudCksY29sb3Itc3RvcCguNSwjZmZmKSx0bygjZmZmKSk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTotbW96LWxpbmVhci1ncmFkaWVudCg1MCUgMCAtNDVkZWcsdHJhbnNwYXJlbnQsdHJhbnNwYXJlbnQgNTAlLCNmZmYgNTAlLCNmZmYpLFxuICAgICAgICAgICAgICAgICAgICAtbW96LWxpbmVhci1ncmFkaWVudCg1MCUgMCAtMTM1ZGVnLHRyYW5zcGFyZW50LHRyYW5zcGFyZW50IDUwJSwjZmZmIDUwJSwjZmZmKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIGJhY2tncm91bmQtc2l6ZToxMHB4IDEzcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0LXg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjowIDEwMCU7ICAgICAgICAgICAgICAgICAgICBcbn1cbi50b290aGJnMnt3aWR0aDoxMDAlO2hlaWdodDo5cHg7YmFja2dyb3VuZDojRjVCQ0NEO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIsNTAlIDAsMCAxMDAlLGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKC41LHRyYW5zcGFyZW50KSxjb2xvci1zdG9wKC41LCNmZmYpLHRvKCNmZmYpKSxcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsNTAlIDAsMTAwJSAxMDAlLGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKC41LHRyYW5zcGFyZW50KSxjb2xvci1zdG9wKC41LCNmZmYpLHRvKCNmZmYpKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOi1tb3otbGluZWFyLWdyYWRpZW50KDUwJSAwIC00NWRlZyx0cmFuc3BhcmVudCx0cmFuc3BhcmVudCA1MCUsI2ZmZiA1MCUsI2ZmZiksXG4gICAgICAgICAgICAgICAgICAgIC1tb3otbGluZWFyLWdyYWRpZW50KDUwJSAwIC0xMzVkZWcsdHJhbnNwYXJlbnQsdHJhbnNwYXJlbnQgNTAlLCNmZmYgNTAlLCNmZmYpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgYmFja2dyb3VuZC1zaXplOjEwcHggMTNweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXQteDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOjAgMTAwJTsgICAgICAgICAgICAgICAgICAgIFxufVxuLnloal90e1xuICAgIGhlaWdodDogODVweDtiYWNrZ3JvdW5kOiNBM0RGRjE7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6MTBweCAxMHB4IDBweCAxMHB4O1xuICAgIFxuXG59XG4ueWhqX3Qye1xuICAgIGhlaWdodDogODVweDtiYWNrZ3JvdW5kOiNGNUJDQ0Q7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6MTBweCAxMHB4IDBweCAxMHB4O1xuICAgIFxuXG59XG4ueWhqX2J7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgIFxufVxuXG4ubmVpcl9me1xuICAgIGJhY2tncm91bmQ6ICNGMUYxRjE7XG59XG4ucm93X3R7XG4gICAgZm9udC1zaXplOiAxLjRyZW1cbn1cbi5yb3dfdCBpb24tY29se1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG59XG4ucm93X3QgcHtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5yb3dfdF9zcCBwOm50aC1jaGlsZCgxKXtcbiAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnJvd19ie1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuLnJvd19iIHB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBjb2xvcjojNjY2NjY2O1xufVxuLnJvd19iIGlvbi1jb2x7XG4gICAgcGFkZGluZy10b3A6IDJweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5yb3dfYiBpb24tY29sOm50aC1jaGlsZCgxKXtcbnRleHQtYWxpZ246IGxlZnQ7XG59XG4ucm93X2IgaW9uLWNvbDpudGgtY2hpbGQoMil7XG4gICAgdGV4dC1hbGlnbjpyaWdodDtcbiAgICB9XG4ucm93X2MgaW9uLWNvbDpudGgtY2hpbGQoMikgc3BhbjpudGgtY2hpbGQoMikge1xuZm9udC1zaXplOiAxLjVlbTtcbn1cbi5yb3dfYyAuc3Bhbl9uYWJ7XG4gICAgZm9udC1zaXplOiAxLjZlbTtcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xufVxuLnloal9me1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xufVxuLnloal9mOmFjdGl2ZXtcbiAgIG9wYWNpdHk6IDAuNjtcbn1cbi8vLS0tLS0tLS0tLS0tLeaMieihjOaVsOWumuS5ieagt+W8jyDlj6/nm7TmjqXliKDpmaQtLS0tLS0tLS0tLS0tXG5pb24tbGlzdCAgLnloal9mOm50aC1vZi10eXBlKG9kZCkgIC55aGpfdCB7XG4gICAgLy/lpYfmlbDooYxcbiAgICBiYWNrZ3JvdW5kOiNBM0RGRjE7XG59XG5pb24tbGlzdCAgLnloal9mOm50aC1vZi10eXBlKGV2ZW4pICAueWhqX3R7XG4gICAgLy/lgbbmlbDooYxcbiAgICBiYWNrZ3JvdW5kOiNGNUJDQ0Q7XG59XG5pb24tbGlzdCAgLnloal9mOm50aC1vZi10eXBlKG9kZCkgIC50b290aGJnIHtcbiAgICAvL+Wlh+aVsOihjFxuICAgIGJhY2tncm91bmQ6I0EzREZGMTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLDUwJSAwLDAgMTAwJSxmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCguNSx0cmFuc3BhcmVudCksY29sb3Itc3RvcCguNSwjZmZmKSx0bygjZmZmKSksXG4gICAgLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsNTAlIDAsMTAwJSAxMDAlLGZyb20odHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKC41LHRyYW5zcGFyZW50KSxjb2xvci1zdG9wKC41LCNmZmYpLHRvKCNmZmYpKTtcbmJhY2tncm91bmQtaW1hZ2U6LW1vei1saW5lYXItZ3JhZGllbnQoNTAlIDAgLTQ1ZGVnLHRyYW5zcGFyZW50LHRyYW5zcGFyZW50IDUwJSwjZmZmIDUwJSwjZmZmKSxcbiAgICAtbW96LWxpbmVhci1ncmFkaWVudCg1MCUgMCAtMTM1ZGVnLHRyYW5zcGFyZW50LHRyYW5zcGFyZW50IDUwJSwjZmZmIDUwJSwjZmZmKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuYmFja2dyb3VuZC1zaXplOjEwcHggMTNweDtcbmJhY2tncm91bmQtcmVwZWF0OnJlcGVhdC14O1xuYmFja2dyb3VuZC1wb3NpdGlvbjowIDEwMCU7ICAgICAgICAgICAgIFxufVxuaW9uLWxpc3QgIC55aGpfZjpudGgtb2YtdHlwZShldmVuKSAgLnRvb3RoYmd7XG4gICAgLy/lgbbmlbDooYxcbiAgICBiYWNrZ3JvdW5kOiNGNUJDQ0Q7XG4gICAgYmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWdyYWRpZW50KGxpbmVhciw1MCUgMCwwIDEwMCUsZnJvbSh0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoLjUsdHJhbnNwYXJlbnQpLGNvbG9yLXN0b3AoLjUsI2ZmZiksdG8oI2ZmZikpLFxuICAgIC13ZWJraXQtZ3JhZGllbnQobGluZWFyLDUwJSAwLDEwMCUgMTAwJSxmcm9tKHRyYW5zcGFyZW50KSwgY29sb3Itc3RvcCguNSx0cmFuc3BhcmVudCksY29sb3Itc3RvcCguNSwjZmZmKSx0bygjZmZmKSk7XG5iYWNrZ3JvdW5kLWltYWdlOi1tb3otbGluZWFyLWdyYWRpZW50KDUwJSAwIC00NWRlZyx0cmFuc3BhcmVudCx0cmFuc3BhcmVudCA1MCUsI2ZmZiA1MCUsI2ZmZiksXG4gICAgLW1vei1saW5lYXItZ3JhZGllbnQoNTAlIDAgLTEzNWRlZyx0cmFuc3BhcmVudCx0cmFuc3BhcmVudCA1MCUsI2ZmZiA1MCUsI2ZmZik7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmJhY2tncm91bmQtc2l6ZToxMHB4IDEzcHg7XG5iYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXQteDtcbmJhY2tncm91bmQtcG9zaXRpb246MCAxMDAlOyAgICAgICAgICAgICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/my-coupon/my-coupon.page.ts":
/*!*********************************************!*\
  !*** ./src/app/my-coupon/my-coupon.page.ts ***!
  \*********************************************/
/*! exports provided: MyCouponPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCouponPage", function() { return MyCouponPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyCouponPage = /** @class */ (function () {
    function MyCouponPage(appmin, navCtrl, actionSheetCtrl, loadingCtrl) {
        this.appmin = appmin;
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.notMoer = true;
        if (appmin.GetPhoneMode() == "ios") {
            this.header_class = "header_class";
        }
        else {
            this.header_class = "header_class";
            console.log("判断为安卓系统 设置状态栏样式");
        }
    }
    MyCouponPage.prototype.ionViewWillEnter = function () {
        //每次即将加载页面
    };
    MyCouponPage.prototype.ionViewDidEnter = function () {
        //每次已经进入页面
    };
    MyCouponPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MywalletPage');
    };
    MyCouponPage.prototype.send = function (value, isshow) {
        var _this = this;
        if (isshow) {
            this.loader = this.loadingCtrl.create({
                message: "加载中...",
                duration: 3000
            });
            this.loader.present();
        }
        this.appmin.post(JSON.parse(value)).subscribe(function (data) {
            _this.dataHandle(data);
        });
    };
    MyCouponPage.prototype.addMyCouponPage = function () {
        var obj = {
            type: "addMyCouponPage",
            userId: this.appmin.getUserid(),
        };
        this.send(JSON.stringify(obj), false);
    };
    MyCouponPage.prototype.dataHandle = function (meg) {
        console.log(meg);
        if (meg['type'] == "addMyCouponPage_ret") {
            this.objlist = meg['rows'];
            if (this.objlist.length != 0) {
                this.notMoer = false;
            }
        }
    };
    MyCouponPage.prototype.ngOnInit = function () {
        this.addMyCouponPage();
    };
    MyCouponPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-coupon',
            template: __webpack_require__(/*! ./my-coupon.page.html */ "./src/app/my-coupon/my-coupon.page.html"),
            styles: [__webpack_require__(/*! ./my-coupon.page.scss */ "./src/app/my-coupon/my-coupon.page.scss")]
        }),
        __metadata("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["AppMin"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]])
    ], MyCouponPage);
    return MyCouponPage;
}());



/***/ })

}]);
//# sourceMappingURL=my-coupon-my-coupon-module.js.map