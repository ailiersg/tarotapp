(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["palace-palace-module"],{

/***/ "./src/app/palace/palace.module.ts":
/*!*****************************************!*\
  !*** ./src/app/palace/palace.module.ts ***!
  \*****************************************/
/*! exports provided: PalacePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalacePageModule", function() { return PalacePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/fesm5/ng-zorro-antd-mobile.js");
/* harmony import */ var _palace_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./palace.page */ "./src/app/palace/palace.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _palace_page__WEBPACK_IMPORTED_MODULE_6__["PalacePage"]
    }
];
var PalacePageModule = /** @class */ (function () {
    function PalacePageModule() {
    }
    PalacePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdMobileModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_palace_page__WEBPACK_IMPORTED_MODULE_6__["PalacePage"]]
        })
    ], PalacePageModule);
    return PalacePageModule;
}());



/***/ }),

/***/ "./src/app/palace/palace.page.html":
/*!*****************************************!*\
  !*** ./src/app/palace/palace.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class={{header_class}} no-border >\n\n  <div class=\"head_berd\">\n    <ion-toolbar color=\"primary\" mode=\"ios\">\n      <ion-buttons color=\"primary\" slot=\"secondary\" >\n        <ion-button color=\"primary\">\n          <!-- <ion-icon slot=\"icon-only\" name=\"contact\"></ion-icon> -->\n        </ion-button>\n\n      </ion-buttons>\n      <ion-title>塔罗馆</ion-title>\n      <ion-buttons color=\"primary\" slot=\"primary\">\n        <ion-button color=\"primary\" color=\"secondary\" (click)='onClickSearch()'>\n          <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n\n    </ion-toolbar>\n\n\n\n\n    <ion-segment [(ngModel)]=\"pet\" mode=\"md\"  (ionChange)=\"segmentChanged($event)\">\n      <ion-segment-button mode=\"md\" value=\"tuijian\" id=\"ion-segment-button1\">\n        推荐\n      </ion-segment-button>\n      <ion-segment-button mode=\"md\" value=\"koubei\" id=\"ion-segment-button2\">\n        口碑\n      </ion-segment-button>\n      <ion-segment-button mode=\"md\" value=\"youhui\" id=\"ion-segment-button3\">\n        优惠\n      </ion-segment-button>\n    </ion-segment>\n\n  </div>\n\n\n\n</ion-header>\n\n<ion-content id=\"pages_content\" #content1 style=\" background: rgb(245, 245, 249) none repeat scroll 0% 0%;\">\n\n  <div style=\"padding-top:16px;\">\n    <div>\n      <div>\n        <ion-slides pager=\"true\" [options]=\"slideOpts\">\n          <ion-slide *ngFor=\"let  item of Speciallist\" (click)=\"imgsclick(item)\">\n            <img [src]=\"item.url\">\n          </ion-slide>\n\n        </ion-slides>\n      </div>\n\n    </div>\n  </div>\n\n\n\n\n  <div id=\"ion-content_1\" style=\"width:100%;padding-top: 8px;\">\n    <div [ngSwitch]=\"pet\">\n      <ion-list *ngSwitchCase=\"'tuijian'\" id=\"pages_list1\" style=\"width:100%;\">\n        <div class=\"list_f\">\n          <div *ngIf=\"notMoer1\" style=\"text-align: center;color: #666666;font-size: 1.4rem\">\n            没有更多的咨询师。。\n          </div>\n          <div style=\"text-align: center;\">\n            <ion-spinner *ngIf=\"this_row_tuijian_sum == 0\" name=\"circles\"></ion-spinner>\n          </div>\n\n\n          <div *ngFor=\"let item of this_row_tuijian_listobj let i=index  let id of this_row_tuijian_listobj\"\n            (click)=\"listClick(id)\" class=\" oncardList\">\n            <div style=\"width:100%;padding: 0.5rem 1rem;\" class=\"cl\">\n              <div item-start class=\"fl\">\n                <img class=\"oncardList_t_img\" src=\"{{item.UserImgUrl}}\">\n              </div>\n              <div class=\"fl\" style=\"margin: 0px 1rem;\">\n                <h2 class=\"litem_h2_name \" style=\"margin-top: 1px;\"> {{item.CName}} </h2>\n                <p class=\"litem_P_span \">\n                  <span>\n                    占卜：{{item.zongdingdanliang}}\n                    <!-- <ion-badge class=\"badge_t\" item-end> </ion-badge> -->\n                  </span>\n                  <span>\n                    &nbsp; 评分：{{item.zixunpingfen}}%\n                    <!-- <ion-badge class=\"badge_t\" item-end></ion-badge> -->\n                  </span>\n                </p>\n              </div>\n            </div>\n            <!-- <img src=\"{{item.fnengmianurl}}\"> -->\n            <div>\n              <p class=\"item_p_text\">{{item.zixunjieshao}}</p>\n            </div>\n\n            <div class=\"litet_bottom_f cl\">\n              <div class=\"fl\">\n                <div class=\"cl\">\n                  <ion-icon class=\"fl\" style=\"font-size: 1.8rem;\" src=\"../../assets/img/rmb.svg\"></ion-icon>\n\n                  <div class=\"pj_divf fl\">{{item.danjia}}/问题 </div>\n                </div>\n              </div>\n              <div class=\"fl\" style=\"margin-left: 1rem;\">\n                <div class=\"cl\">\n                  <ion-icon class=\"fl\" style=\"font-size: 1.8rem;\" src=\"../../assets/img/hua.svg\"></ion-icon>\n                  <div class=\"pj_divf fl\">{{item.zixunpingfen}}好评</div>\n                </div>\n              </div>\n              <div class=\"fr\">\n                <ion-badge *ngIf=\"item.isLine==0\" color=\"primary\" style=\"font-size: 1.2rem;\">可预约</ion-badge>\n                <ion-badge *ngIf=\"item.isLine==1\" color=\"secondary\" style=\"font-size: 1.2rem;\">在线</ion-badge>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n        <ion-infinite-scroll immediate-check=\"false\" (ionInfinite)=\"doInfinite($event)\">\n          <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载中...\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n\n      </ion-list>\n      <ion-list *ngSwitchCase=\"'koubei'\" style=\"width:100%\">\n\n        <div class=\"list_f\">\n          <div *ngIf=\"notMoer2\" style=\"text-align: center;color: #666666;font-size: 1.4rem\">\n            没有更多的咨询师。。\n          </div>\n\n          <div style=\"text-align: center;\">\n            <ion-spinner *ngIf=\"this_row_koubei_sum == 0\" name=\"circles\"></ion-spinner>\n          </div>\n\n          <div *ngFor=\"let item of this_row_koubei_listobj let i=index  let id of isadd_this_row_koubei_listobj\"\n            (click)=\"listClick(id)\" class=\" oncardList\">\n            <div style=\"width:100%;padding: 0.5rem 1rem;\" class=\"cl\">\n              <div item-start class=\"fl\">\n                <img class=\"oncardList_t_img\" src=\"{{item.UserImgUrl}}\">\n              </div>\n              <div class=\"fl\" style=\"margin: 0px 1rem;\">\n                <h2 class=\"litem_h2_name \" style=\"margin-top: 1px;color:#333\"> {{item.CName}} </h2>\n                <p class=\"litem_P_span \">\n                  <span>\n                    占卜：{{item.zongdingdanliang}}\n                    <!-- <ion-badge class=\"badge_t\" item-end> </ion-badge> -->\n                  </span>\n                  <span>\n                    &nbsp; 评分：{{item.zixunpingfen}}%\n                    <!-- <ion-badge class=\"badge_t\" item-end></ion-badge> -->\n                  </span>\n                </p>\n              </div>\n            </div>\n            <!-- <img src=\"{{item.fnengmianurl}}\"> -->\n            <div>\n              <p class=\"item_p_text\">{{item.zixunjieshao}}</p>\n            </div>\n\n            <div class=\"litet_bottom_f cl\">\n              <div class=\"fl\">\n                <div class=\"cl\">\n                  <ion-icon class=\"fl\" style=\"font-size: 1.8rem;\" src=\"../../assets/img/rmb.svg\"></ion-icon>\n\n                  <div class=\"pj_divf fl\">{{item.danjia}}/问题 </div>\n                </div>\n              </div>\n              <div class=\"fl\" style=\"margin-left: 1rem;\">\n                <div class=\"cl\">\n                  <ion-icon class=\"fl\" style=\"font-size: 1.8rem;\" src=\"../../assets/img/hua.svg\"></ion-icon>\n                  <div class=\"pj_divf fl\">{{item.zixunpingfen}}好评</div>\n                </div>\n              </div>\n              <div class=\"fr\">\n                <ion-badge *ngIf=\"item.isLine==0\" color=\"primary\" style=\"font-size: 1.2rem;\">可预约</ion-badge>\n                <ion-badge *ngIf=\"item.isLine==1\" color=\"secondary\" style=\"font-size: 1.2rem;\">在线</ion-badge>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <ion-infinite-scroll immediate-check=\"false\" (ionInfinite)=\"doInfinite($event)\">\n          <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载中...\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n\n      </ion-list>\n      <ion-list *ngSwitchCase=\"'youhui'\">\n        <div class=\"list_f\">\n          <div *ngIf=\"notMoer3\" style=\"text-align: center;color: #666666;font-size: 1.4rem\">\n            没有更多的咨询师。。\n          </div>\n\n          <div style=\"text-align: center;\">\n            <ion-spinner *ngIf=\"this_row_youhui_sum == 0\" name=\"circles\"></ion-spinner>\n          </div>\n\n\n          <div *ngFor=\"let item of this_row_youhui_listobj let i=index  let id of this_row_youhui_listobj\"\n            (click)=\"listClick(id)\" class=\"oncardList\">\n            <div style=\"width:100%;padding: 0.5rem 1rem;\" class=\"cl\">\n              <div item-start class=\"fl\">\n                <img class=\"oncardList_t_img\" src=\"{{item.UserImgUrl}}\">\n              </div>\n              <div class=\"fl\" style=\"margin: 0px 1rem;\">\n                <h2 class=\"litem_h2_name \" style=\"margin-top: 1px;\"> {{item.CName}} </h2>\n                <p class=\"litem_P_span \">\n                  <span>\n                    占卜：{{item.zongdingdanliang}}\n                    <!-- <ion-badge class=\"badge_t\" item-end> </ion-badge> -->\n                  </span>\n                  <span>\n                    &nbsp; 评分：{{item.zixunpingfen}}%\n                    <!-- <ion-badge class=\"badge_t\" item-end></ion-badge> -->\n                  </span>\n                </p>\n              </div>\n            </div>\n            <!-- <img src=\"{{item.fnengmianurl}}\"> -->\n            <div>\n              <p class=\"item_p_text\">{{item.zixunjieshao}}</p>\n            </div>\n\n            <div class=\"litet_bottom_f cl\">\n              <div class=\"fl\">\n                <div class=\"cl\">\n                  <ion-icon class=\"fl\" style=\"font-size: 1.8rem;\" src=\"../../assets/img/rmb.svg\"></ion-icon>\n\n                  <div class=\"pj_divf fl\">{{item.danjia}}/问题 </div>\n                </div>\n              </div>\n              <div class=\"fl\" style=\"margin-left: 1rem;\">\n                <div class=\"cl\">\n                  <ion-icon class=\"fl\" style=\"font-size: 1.8rem;\" src=\"../../assets/img/hua.svg\"></ion-icon>\n                  <div class=\"pj_divf fl\">{{item.zixunpingfen}}好评</div>\n                </div>\n              </div>\n              <div class=\"fr\">\n                <ion-badge *ngIf=\"item.isLine==0\" color=\"primary\" style=\"font-size: 1.2rem;\">可预约</ion-badge>\n                <ion-badge *ngIf=\"item.isLine==1\" color=\"secondary\" style=\"font-size: 1.2rem;\">在线</ion-badge>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n        <ion-infinite-scroll immediate-check=\"false\" (ionInfinite)=\"doInfinite($event)\">\n          <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载中...\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n\n      </ion-list>\n    </div>\n\n  </div>\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/palace/palace.page.scss":
/*!*****************************************!*\
  !*** ./src/app/palace/palace.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-segment-button {\n  --background:rgba(0, 0, 0, 0)  ;\n  --background-activated:#000 ;\n  --color:rgb(233, 233, 233)  !important;\n  --color-checked:#fff  ;\n  --color-activated:#fff;\n  --color-disabled:rgb(241, 241, 241);\n  --color-checked-disabled:rgb(241, 241, 241); }\n\n.am-tabs-content-wrap {\n  display: none !important; }\n\nion-segment-button .segment-button-indicator {\n  width: 30% !important;\n  margin: 0px auto !important; }\n\n#ion-content_1 {\n  padding-bottom: 30px; }\n\n.list_f ion-card {\n  border-radius: 6px; }\n\n.oncardList {\n  background: #fff;\n  margin: 1.2rem 0px;\n  box-shadow: 2px 6px 12px #eee;\n  border-radius: 10px;\n  padding: 1rem 0rem;\n  margin: 1.4rem 2.2rem; }\n\n.oncardList ion-item {\n  border-radius: 10px; }\n\n.oncardList_t_img {\n  border-radius: 50%;\n  width: 4.4rem;\n  height: 4.4rem; }\n\n.badge_t {\n  background: #8fa6c6; }\n\n.badge_t2 {\n  background: #f0cac9; }\n\n.css3ma_h {\n  transition: all 0.3s; }\n\n.row1 {\n  transition: height 0.3s;\n  overflow: hidden; }\n\n.pj_divf {\n  color: var(--color-button1);\n  font-size: 1.2rem; }\n\n.item-inner {\n  border-bottom: 0px !important; }\n\n.litem_h2_name {\n  font-size: 1.7rem !important;\n  margin-bottom: 0.5rem;\n  margin-top: 1px;\n  color: #333333; }\n\n.litem_P_span {\n  font-size: 1.4rem !important;\n  margin: 0px;\n  color: #555555; }\n\n.item_p_text {\n  font-size: 1.5rem !important;\n  margin: 1rem 0px !important;\n  padding: 0rem 2rem;\n  color: #333333; }\n\n.litet_bottom_f {\n  padding: 0px 0.85rem; }\n\n.litet_bottom_f button {\n  padding: 0px; }\n\n.litet_bottom_f button ion-icon {\n  font-size: 1.6rem;\n  color: #fff; }\n\nion-icon {\n  color: #fff !important; }\n\n.segment-md .segment-button {\n  flex: none !important;\n  width: auto;\n  margin: auto auto; }\n\n.swiper-container_palace_zhuanti .swiper-slide {\n  width: 100%;\n  height: 14rem; }\n\n.swiper-container_palace_zhuanti .swiper-slide .f {\n  width: 100%;\n  height: 14rem; }\n\n.swiper-container_palace_zhuanti .swiper-slide .f img {\n  width: 100%;\n  height: 96%;\n  border-radius: 4px;\n  box-shadow: 1px 3px 3px #e8e8eb; }\n\n.swiper-container_palace_zhuanti .swiper-slide .cl .fl {\n  width: 50%; }\n\nion-searchbar {\n  --color:#ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvcGFsYWNlL3BhbGFjZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSwrQkFBYTtFQUNiLDRCQUF1QjtFQUd2QixzQ0FBUTtFQUNSLHNCQUFnQjtFQUNoQixzQkFBa0I7RUFFbEIsbUNBQWlCO0VBQ2pCLDJDQUF5QixFQUFBOztBQUtoQztFQUNFLHdCQUF3QixFQUFBOztBQUd2QjtFQUNFLHFCQUFxQjtFQUNyQiwyQkFBMkIsRUFBQTs7QUFLN0I7RUFDRSxvQkFBb0IsRUFBQTs7QUFFdEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHckI7RUFDQyxnQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUU3QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBOztBQUV0QjtFQUNFLG1CQUFtQixFQUFBOztBQUVwQjtFQUNFLGtCQUFrQjtFQUVsQixhQUFhO0VBQ2IsY0FBYyxFQUFBOztBQUloQjtFQUVBLG1CQUFrQixFQUFBOztBQUVsQjtFQUNFLG1CQUNGLEVBQUE7O0FBR0Y7RUFFRSxvQkFBb0IsRUFBQTs7QUFFcEI7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQ0YsRUFBQTs7QUFDQTtFQUNFLDJCQUEwQjtFQUMxQixpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSw2QkFBNkIsRUFBQTs7QUFFL0I7RUFDRSw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUNGLEVBQUE7O0FBQ0Y7RUFDRSw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLGNBQ0YsRUFBQTs7QUFDRTtFQUNFLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGNBQWEsRUFBQTs7QUFJZjtFQUNFLG9CQUFvQixFQUFBOztBQUV0QjtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBRWI7RUFDSSxzQkFBc0IsRUFBQTs7QUFJMUI7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGlCQUFpQixFQUFBOztBQU9uQjtFQUNJLFdBQVU7RUFBRSxhQUFhLEVBQUE7O0FBRTdCO0VBQ0ksV0FBVTtFQUFDLGFBQWEsRUFBQTs7QUFFNUI7RUFDRSxXQUFXO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUVsQiwrQkFBK0IsRUFBQTs7QUFJL0I7RUFDSSxVQUFVLEVBQUE7O0FBS2Q7RUFDRSxlQUFRLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWxhY2UvcGFsYWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICAgaW9uLXNlZ21lbnQtYnV0dG9ue1xuICAgICAgICAtLWJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwKSAgO1xuICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiMwMDAgO1xuICAgICAgICAvLyAtLWJhY2tncm91bmQtaG92ZXI6dHJhbnNpdGlvbjtcbiAgICAgICAgLy8gLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6dHJhbnNpdGlvbjtcbiAgICAgICAgLS1jb2xvcjpyZ2IoMjMzLCAyMzMsIDIzMykgICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tY29sb3ItY2hlY2tlZDojZmZmICA7XG4gICAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiNmZmY7XG4gICAgICAvLyAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDojZmZmO1xuICAgICAgICAtLWNvbG9yLWRpc2FibGVkOnJnYigyNDEsIDI0MSwgMjQxKTsgIFxuICAgICAgICAtLWNvbG9yLWNoZWNrZWQtZGlzYWJsZWQ6cmdiKDI0MSwgMjQxLCAyNDEpO1xuICAgICAgXG4gICAgICAgXG4gICAgfVxuXG4gLmFtLXRhYnMtY29udGVudC13cmFwe1xuICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuIH1cblxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiAuc2VnbWVudC1idXR0b24taW5kaWNhdG9yIHtcbiAgICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbjogMHB4IGF1dG8gIWltcG9ydGFudDtcbiAgICAgfVxuICAgIFxuICBcbiBcbiAgICAjaW9uLWNvbnRlbnRfMXtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIH1cbiAgICAubGlzdF9mIGlvbi1jYXJke1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgXG4gICAgfVxuICAgLm9uY2FyZExpc3R7XG4gICAgYmFja2dyb3VuZDogICNmZmY7XG4gICAgbWFyZ2luOiAxLjJyZW0gMHB4O1xuICAgIGJveC1zaGFkb3c6IDJweCA2cHggMTJweCAjZWVlO1xuICAgIC8vYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsMCwwLC4xMik7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAxcmVtIDByZW07XG4gICAgbWFyZ2luOiAxLjRyZW0gMi4ycmVtO1xuICAgfVxuICAgLm9uY2FyZExpc3QgaW9uLWl0ZW17XG4gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICB9XG4gICAgLm9uY2FyZExpc3RfdF9pbWcge1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC8vICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2lkdGg6IDQuNHJlbTtcbiAgICAgIGhlaWdodDogNC40cmVtO1xuICAgIC8vICBib3gtc2hhZG93OiAxcHggMnB4IDFweCAjZWVlOyAgLy8g5aS05YOP6Zi05b2xXG4gICAgfVxuICAgIFxuICAgIC5iYWRnZV90IHtcbiAgICBcbiAgICBiYWNrZ3JvdW5kOiM4ZmE2YzY7XG4gICAgfVxuICAgIC5iYWRnZV90MiB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjBjYWM5XG4gICAgfVxuICBcbiAgXG4gIC5jc3MzbWFfaFxuICB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIH1cbiAgICAucm93MSB7XG4gICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcztcbiAgICAgIG92ZXJmbG93OiBoaWRkZW5cbiAgICB9XG4gICAgLnBqX2RpdmZ7XG4gICAgICBjb2xvcjp2YXIoLS1jb2xvci1idXR0b24xKTtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cbiAgICAuaXRlbS1pbm5lcntcbiAgICAgIGJvcmRlci1ib3R0b206IDBweCAhaW1wb3J0YW50OyBcbiAgICB9XG4gICAgLmxpdGVtX2gyX25hbWV7XG4gICAgICBmb250LXNpemU6IDEuN3JlbSAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgbWFyZ2luLXRvcDogMXB4O1xuICAgICAgY29sb3I6IzMzMzMzM1xuICAgIH1cbiAgLmxpdGVtX1Bfc3BhbntcbiAgICBmb250LXNpemU6IDEuNHJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGNvbG9yOiM1NTU1NTVcbiAgfVxuICAgIC5pdGVtX3BfdGV4dHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW46IDFyZW0gMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nOiAwcmVtIDJyZW07XG4gICAgICBjb2xvcjojMzMzMzMzO1xuICAgIH1cbiAgIFxuICBcbiAgICAubGl0ZXRfYm90dG9tX2Z7XG4gICAgICBwYWRkaW5nOiAwcHggMC44NXJlbTtcbiAgICB9XG4gICAgLmxpdGV0X2JvdHRvbV9mIGJ1dHRvbntcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG4gICAgLmxpdGV0X2JvdHRvbV9mIGJ1dHRvbiBpb24taWNvbntcbiAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICAgIGlvbi1pY29ue1xuICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIH1cbiAgXG4gICAgLy90ZXN0XG4gICAgLnNlZ21lbnQtbWQgLnNlZ21lbnQtYnV0dG9ue1xuICAgICAgZmxleDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBtYXJnaW46IGF1dG8gYXV0bztcbiAgICB9XG4gIFxuICBcbiAgICAvL+S4k+mimFxuICBcbiAgXG4gICAgLnN3aXBlci1jb250YWluZXJfcGFsYWNlX3podWFudGkgLnN3aXBlci1zbGlkZXtcbiAgICAgICAgd2lkdGg6MTAwJTsgaGVpZ2h0OiAxNHJlbTtcbiAgICB9XG4gICAgLnN3aXBlci1jb250YWluZXJfcGFsYWNlX3podWFudGkgLnN3aXBlci1zbGlkZSAuZntcbiAgICAgICAgd2lkdGg6MTAwJTtoZWlnaHQ6IDE0cmVtO1xuICAgIH1cbiAgICAuc3dpcGVyLWNvbnRhaW5lcl9wYWxhY2Vfemh1YW50aSAuc3dpcGVyLXNsaWRlIC5mIGltZ3tcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTYlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAzcHggM3B4ICNlOGU4ZWI7XG4gICAgYm94LXNoYWRvdzogMXB4IDNweCAzcHggI2U4ZThlYjtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgLnN3aXBlci1jb250YWluZXJfcGFsYWNlX3podWFudGkgLnN3aXBlci1zbGlkZSAuY2wgIC5mbHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gICAgXG4gIFxuICBcbiAgICBpb24tc2VhcmNoYmFye1xuICAgICAgLS1jb2xvcjojZmZmZmZmO1xuICAgIH1cbiAgXG4gIFxuICAiXX0= */"

/***/ }),

/***/ "./src/app/palace/palace.page.ts":
/*!***************************************!*\
  !*** ./src/app/palace/palace.page.ts ***!
  \***************************************/
/*! exports provided: PalacePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalacePage", function() { return PalacePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core */ "./src/app/core.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_wechat_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/wechat/ngx */ "./node_modules/@ionic-native/wechat/ngx/index.js");
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







var PalacePage = /** @class */ (function () {
    function PalacePage(platform, Wechat, HttpClient, router, el, events, storage, navCtrl, modctrl, config, loadingCtrl, appMin) {
        this.platform = platform;
        this.Wechat = Wechat;
        this.HttpClient = HttpClient;
        this.router = router;
        this.el = el;
        this.events = events;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.modctrl = modctrl;
        this.config = config;
        this.loadingCtrl = loadingCtrl;
        this.appMin = appMin;
        // @ViewChild('content1') content1: Content;
        //设置分页栏默认页↓
        this.pet = "tuijian";
        this.isshowadding = false;
        //函数初始化↓
        // appMin = new AppMin();
        this.adding = false;
        //输入变量
        this.top_px = "45";
        this.header_class = "";
        //输出变量
        this.this_row_tuijian_listobj = [];
        this.this_row_koubei_listobj = [];
        this.this_row_youhui_listobj = [];
        this.tuijian_add_count = 0;
        this.koubei_add_count = 0;
        this.youhui_add_count = 0;
        this.isud = false;
        this.imgitems = [];
        this.isadd_this_row_tuijian_listobj = true;
        this.isadd_this_row_koubei_listobj = true;
        this.isadd_this_row_youhui_listobj = true;
        //当前行数
        this.this_row_tuijian_sum = 0;
        this.this_row_koubei_sum = 0;
        this.this_row_youhui_sum = 0;
        this.notMoer1 = true;
        this.notMoer2 = true;
        this.notMoer3 = true;
        this.isShowBackButton_ = false; //显示回退按钮
        this.isGetDataStatus = false;
        this.lastAddType = "local";
        //轮播选项
        this.slideOpts = {};
        Object(_core__WEBPACK_IMPORTED_MODULE_3__["WitePrompt"])("PalacePage页面初始化");
        var this1 = this;
        this.imgitems.push({ url: '../../assets/img/IMG_A78068D01E0C-1.png', id: '1' });
        this.imgitems.push({ url: '../../assets/img/IMG_7A1847FA2701-1.png', id: '2' });
        if (appMin.GetPhoneMode() == "ios") {
            this.header_class = "header_class";
        }
        else {
            this.header_class = "header_class_md";
            console.log("判断为安卓系统 设置状态栏样式");
        }
    }
    PalacePage.prototype.onTabClick = function (item) {
        console.log('onTabClick', item);
    };
    PalacePage.prototype.ngOnInit = function () {
        if (this.this_row_tuijian_sum == 0) {
            if (_core__WEBPACK_IMPORTED_MODULE_3__["myLocalStorage"].getItem('addobjlist_ret') + null) {
                this.dataHandle(JSON.parse(_core__WEBPACK_IMPORTED_MODULE_3__["myLocalStorage"].getItem('addobjlist_ret')), true, true);
            }
            var obj = { type: "addobjislt", sum: "0", addType: this.pet, isShow: true };
            console.log("page页面准备进行第一次加载");
            this.SendGetObjList(obj);
        }
        this.addSpeciallist(); //加载头部轮播
    };
    PalacePage.prototype.likai = function () {
        //回退按钮
        history.back();
    };
    PalacePage.prototype.homr_zhuant_click = function (obj) {
        var data = {
            specialId: obj.id
        };
        //  this.navCtrl.push(HomeZhuantiShowPage, data);
    };
    PalacePage.prototype.ionViewDidEnter = function () {
        //每次进入页面
        // console.log('进入搜索页面');
        // document.querySelector('#ion-segment-button1').shadowRoot.querySelector('.button-native').querySelector('ion-ripple-effect').shadowRoot.querySelector('style').innerHTML = ''
        // document.querySelector('#ion-segment-button2').shadowRoot.querySelector('.button-native').querySelector('ion-ripple-effect').shadowRoot.querySelector('style').innerHTML = ''
        // document.querySelector('#ion-segment-button3').shadowRoot.querySelector('.button-native').querySelector('ion-ripple-effect').shadowRoot.querySelector('style').innerHTML = ''
        //跳转分段按钮下方滑块宽度
        var style = document.createElement('style');
        style.textContent = '.segment-button-indicator {width: 30% !important;margin: 0px auto !important;}';
        var el_list = document.querySelectorAll('ion-segment-button');
        for (var i = 0; i < el_list.length; ++i) {
            el_list[i].shadowRoot.querySelector('style').innerHTML += " .segment-button-indicator {width: 30% !important;margin: 0px auto !important;}";
        }
    };
    PalacePage.prototype.send = function (value, ishow) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("pages send!");
                        if (!ishow) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: "加载中...",
                                showBackdrop: true,
                                duration: 3000
                            })];
                    case 1:
                        _a.loader = _b.sent();
                        _b.label = 2;
                    case 2:
                        //   console.log("123123123123")
                        this.appMin.get(JSON.parse(value)).subscribe(function (data) {
                            if (data['type'] == 'addobjlist_ret') {
                                _this.dataHandle(data, false, false);
                            }
                            else if (data['type'] == 'addSpeciallist_ret') {
                                _this.dataHandle(data, true);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PalacePage.prototype.SendGetObjList = function (obj) {
        var ThisAppType = this.appMin.GetPhoneMode();
        if (ThisAppType = "tarot") {
            var objtype = 1;
            if (ThisAppType == "tarot") {
                objtype = 1;
            }
            var updataobj = {
                type: "addobjislt",
                sum: obj.sum,
                addType: obj.addType
            };
            this.send(JSON.stringify(updataobj), obj.isShow);
        }
    };
    PalacePage.prototype.dataHandle = function (meg, isSave, islocal) {
        //   console.log('addobjlist_ret=' + JSON.stringify(meg));
        if (meg == null)
            return;
        //对收到的this_row_tuijian_listobj处理
        if (meg.type == "addobjlist_ret") {
            if (meg.addType == "tuijian") {
                // debugger;
                if (this.this_row_tuijian_sum == 0 || this.tuijian_add_count == 0) {
                    //第一次加载
                    this.this_row_tuijian_sum += Number(meg.addsum);
                    if (islocal) {
                        this.this_row_tuijian_sum = 0;
                    }
                    this.this_row_tuijian_listobj = (meg.rows);
                }
                else if (meg.addsum != 0) {
                    //第二次以上加载
                    this.this_row_tuijian_sum += Number(meg.addsum);
                    for (var i = 0; i < meg.addsum; i++) {
                        this.this_row_tuijian_listobj.push(meg.rows[i]);
                    }
                    if (this.lastAddType == "local") {
                        //上一次加载时本地数据 则重置数据 而不是累加
                        this.this_row_tuijian_listobj = (meg.rows);
                    }
                }
                else {
                    //没有更多数据
                }
                if (this.tuijian_add_count != 0 || 1 == 1) {
                    this.notMoer1 = false;
                }
                if (meg["rows"].length < 10) {
                    this.isadd_this_row_tuijian_listobj = false;
                }
                else {
                    this.isadd_this_row_tuijian_listobj = true;
                }
                if (this.lastAddType == "local" && !islocal) {
                    this.lastAddType = "web";
                    _core__WEBPACK_IMPORTED_MODULE_3__["myLocalStorage"].setItem('addobjlist_ret', JSON.stringify(meg), 30);
                    this.tuijian_add_count += 1;
                }
                else {
                }
            }
            if (meg.addType == "koubei") {
                if (this.this_row_koubei_sum == 0) {
                    this.this_row_koubei_sum += Number(meg.addsum);
                    this.this_row_koubei_listobj = (meg.rows);
                }
                else if (meg.addsum != 0) {
                    this.this_row_koubei_sum += Number(meg.addsum);
                    for (var i = 0; i < meg.addsum; i++) {
                        this.this_row_koubei_listobj.push(meg.rows[i]);
                    }
                    if (this.lastAddType == "local") {
                        //上一次加载时本地数据 则重置数据 而不是累加
                        this.this_row_koubei_listobj = (meg.rows);
                    }
                }
                else {
                    //没有更多数据
                }
                if (this.this_row_koubei_listobj.length != 0) {
                    this.notMoer2 = false;
                }
                if (meg["rows"].length < 10) {
                    this.isadd_this_row_koubei_listobj = false;
                }
                if (isSave) {
                    {
                        this.storage.set("addobjlist_ret_koubei", meg);
                        this.koubei_add_count += 1;
                        console.log("保存 addobjlist_ret_koubei=" + JSON.stringify(meg));
                        this.lastAddType = "web";
                    }
                }
                else {
                }
            }
            if (meg.addType == "youhui") {
                console.log("返回youhui类型的数据 内容为=" + JSON.stringify(meg));
                //  WitePrompt('meg.addType=="youhui"');
                if (this.this_row_youhui_sum == 0) {
                    this.this_row_youhui_sum += Number(meg.addsum);
                    //WitePrompt('this_row_youhui_sum == 0');
                    this.this_row_youhui_listobj = (meg.rows);
                }
                else if (meg.addsum != 0) {
                    this.this_row_youhui_sum += Number(meg.addsum);
                    for (var i = 0; i < meg.addsum; i++) {
                        this.this_row_youhui_listobj.push(meg.rows[i]);
                    }
                    if (this.lastAddType == "local") {
                        //上一次加载时本地数据 则重置数据 而不是累加
                        this.this_row_youhui_listobj = (meg.rows);
                    }
                }
                else {
                    //没有更多数据
                }
                if (this.this_row_youhui_listobj.length != 0) {
                    this.notMoer3 = false;
                }
                if (meg["rows"].length < 10) {
                    this.isadd_this_row_youhui_listobj = false;
                }
                if (isSave) {
                    this.storage.set("addobjlist_ret_youhui", meg);
                    this.youhui_add_count += 1;
                    console.log("保存 addobjlist_ret_youhui=" + JSON.stringify(meg));
                    this.lastAddType = "web";
                }
                else {
                }
            }
        }
        if (meg['type'] == 'addSpeciallist_ret') {
            console.log("addSpeciallist_ret=" + JSON.stringify(meg));
            this.Speciallist = meg['rows'];
        }
        this.isGetDataStatus = false;
    };
    //搜索按钮被单击
    PalacePage.prototype.onClickSearch = function () {
        this.router.navigate(['search']);
    };
    PalacePage.prototype.segmentChanged = function (event) {
        // alert("segmentChanged");
        console.log("koubei_add_count==" + this.koubei_add_count);
        if (this.pet == "tuijian") {
            Object(_core__WEBPACK_IMPORTED_MODULE_3__["WitePrompt"])("推荐");
            if (this.tuijian_add_count == 0) {
                this.SendGetObjList({ sum: '0', addType: "tuijian", isShow: true });
            }
        }
        if (this.pet == "koubei") {
            Object(_core__WEBPACK_IMPORTED_MODULE_3__["WitePrompt"])("口碑");
            if (this.koubei_add_count == 0) {
                console.log("koubei_add_count adding");
                this.SendGetObjList({ sum: '0', addType: "koubei", isShow: true });
            }
        }
        if (this.pet == "youhui") {
            Object(_core__WEBPACK_IMPORTED_MODULE_3__["WitePrompt"])("优惠");
            if (this.youhui_add_count == 0) {
                this.SendGetObjList({ sum: '0', addType: "youhui", isShow: true });
            }
        }
        // alert('分类改变');
    };
    PalacePage.prototype.addSpeciallist = function () {
        //加载专题列表
        var obj = {
            type: 'addSpeciallist'
        };
        this.send(JSON.stringify(obj));
    };
    PalacePage.prototype.imgsclick = function (item) {
        this.router.navigate(['/article'], { queryParams: item });
    };
    PalacePage.prototype.listClick = function (ev) {
        //咨询师列表被单击
        Object(_core__WEBPACK_IMPORTED_MODULE_3__["WitePrompt"])(ev.ObjID);
        var obj = {
        // duration: 0,
        };
        var data = {
            userId: ev.ObjID
        };
        this.router.navigate(['/consultant'], { queryParams: data });
    };
    PalacePage.prototype.doInfinite = function (infiniteScroll) {
        // console.log('下拉刷新doInfinite!');
        //  console.log('this.pet=="tuijian"')
        if (this.pet == "tuijian") {
            if (this.isadd_this_row_tuijian_listobj == false) {
                infiniteScroll.target.complete();
                return;
            }
            //this.this_row_tuijian_sum += 10;
            var obj = { sum: this.this_row_tuijian_sum.toString(), addType: this.pet, isShow: false };
            this.SendGetObjList(obj);
        }
        if (this.pet == "koubei") {
            if (this.isadd_this_row_koubei_listobj == false) {
                infiniteScroll.target.complete();
                return;
            }
            // this.this_row_koubei_sum += 10;
            var obj = { sum: this.this_row_koubei_sum.toString(), addType: this.pet, isShow: false };
            this.SendGetObjList(obj);
        }
        if (this.pet == "youhui") {
            if (this.isadd_this_row_youhui_listobj == false) {
                infiniteScroll.target.complete();
                return;
            }
            // this.this_row_youhui_sum += 10;
            var obj = { sum: this.this_row_youhui_sum.toString(), addType: this.pet, isShow: false };
            this.SendGetObjList(obj);
        }
        if (infiniteScroll) {
            infiniteScroll.target.complete();
        }
    };
    PalacePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./palace.page.html */ "./src/app/palace/palace.page.html"),
            providers: [_core__WEBPACK_IMPORTED_MODULE_3__["AppMin"]],
            styles: [__webpack_require__(/*! ./palace.page.scss */ "./src/app/palace/palace.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"], _ionic_native_wechat_ngx__WEBPACK_IMPORTED_MODULE_6__["Wechat"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Config"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _core__WEBPACK_IMPORTED_MODULE_3__["AppMin"]])
    ], PalacePage);
    return PalacePage;
}());



/***/ })

}]);
//# sourceMappingURL=palace-palace-module.js.map