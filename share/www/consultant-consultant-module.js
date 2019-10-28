(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["consultant-consultant-module"],{

/***/ "./src/app/consultant/consultant.module.ts":
/*!*************************************************!*\
  !*** ./src/app/consultant/consultant.module.ts ***!
  \*************************************************/
/*! exports provided: ConsultantPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantPageModule", function() { return ConsultantPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _consultant_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consultant.page */ "./src/app/consultant/consultant.page.ts");
/* harmony import */ var ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd-mobile */ "./node_modules/ng-zorro-antd-mobile/fesm5/ng-zorro-antd-mobile.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _consultant_page__WEBPACK_IMPORTED_MODULE_5__["ConsultantPage"]
    }
];
var ConsultantPageModule = /** @class */ (function () {
    function ConsultantPageModule() {
    }
    ConsultantPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdMobileModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_consultant_page__WEBPACK_IMPORTED_MODULE_5__["ConsultantPage"]]
        })
    ], ConsultantPageModule);
    return ConsultantPageModule;
}());



/***/ }),

/***/ "./src/app/consultant/consultant.page.html":
/*!*************************************************!*\
  !*** ./src/app/consultant/consultant.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border mode=\"ios\">\n  <div>\n\n    <div id='jb111' class=\" show_style header1 header-navigation\" [ngStyle]=\"currentStyles\">\n      <ion-row align-items-center>\n        <ion-col align-self-center>\n          <ion-icon [ngStyle]=\"currentStyles_back\" tappable (click)=\"likai()\" style=\"font-size:2.3rem;padding:8px 16px\"\n            name=\"ios-arrow-back\"></ion-icon>\n        </ion-col>\n        <ion-col align-self-center>\n          <p id='jb111_p' style=\"font-size:1.7rem;color:#333333;margin:0px;padding:0px; text-align: center;\"\n            [ngStyle]=\"currentStyles_title\">\n            {{CName}}</p>\n        </ion-col>\n        <ion-col align-self-center style=\"text-align: right;padding-right: 15px;\">\n          <ion-icon [ngStyle]=\"currentStyles_back\" tappable (click)=\"showshare()\" style=\"font-size:2.3rem;\" mode=\"ios\"\n            name=\"more\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</ion-header>\n\n\n\n\n\n\n<ion-content id=\"consultant_content\" #content1 (ionScroll)=\"ionScroll($event)\" fullscreen=\"true\" scroll-events=\"true\"\n  style='background: rgb(245, 245, 249) none repeat scroll 0% 0%;'>\n\n  <!-- <div *ngIf=\"!CName\">\n    <div class=\"ion-padding custom-skeleton\">\n      <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n    </div> -->\n\n  <!-- <ion-list>\n      <ion-list-header>\n        <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n      </ion-list-header>\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-avatar>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-thumbnail>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-skeleton-text animated style=\"width: 27px; height: 27px\" slot=\"start\"></ion-skeleton-text>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div> -->\n\n\n  <div>\n    <div style='border-bottom-left-radius: 15px;border-bottom-right-radius: 15px;background:#fff;position: absolute;\n      top: 0px;\n      left: 0;\n      right: 0;'>\n\n      <div style=\"position: relative;width:100%;height:17.5rem;box-shadow: 5px 0px 5px 5px #eee;\">\n        <div>\n          <div>\n            <img [src]=\"serviceImg\" width=\"100%\" height=\"100%\"\n              style=\"width: 100%;height: 17.5rem;border-bottom-left-radius: 25px 5px;border-bottom-right-radius: 25px 5px;\">\n          </div>\n        </div>\n\n\n      </div>\n\n      <div class=\"user_s_f\">\n        <div class=\"cl\" style=\"display: flex;\n        align-items: flex-start;\">\n          <div class=\"\" style=\"     flex: 0 0 auto;\">\n            <div class=\"img_f\" style=\"position: relative\">\n              <img class=\"toux_img \" src=\"{{userImg}}\" />\n              <!-- [ngStyle]=\"{'background-color':sex === 'zxc' ? 'green' : 'red' }\" -->\n              <div class=\"toux_img_bq \" [ngStyle]=\"{'background-color':sex === 'ios-male' ? '#91b3d4' : '' }\">\n                <ion-icon name=\"{{sex}}\"></ion-icon>\n              </div>\n            </div>\n          </div>\n          <div class=\"\" style=\"margin-left: 1rem;      flex: 1 1 auto;\">\n            <div class=\"cl\">\n              <div class=\"\" style=\"    position: relative;\">\n                <p style=\"font-size:1.75rem;margin:0px;color:#333333;\">{{CName}}</p>\n                <div class=\"\" style=\"    position: absolute;right: 0px;top:0\">\n                  <ion-icon name=\"heart-empty\" *ngIf=\"isFollow == false\" (click)=\"setUpFollow('set')\"\n                    style=\"font-size: 2rem;color:#f778af\"></ion-icon>\n                  <ion-icon name=\"heart\" *ngIf=\"isFollow == true\" (click)=\"setUpFollow('cancel')\"\n                    style=\"font-size: 2rem;color:#f778af\"></ion-icon>\n                  <!-- <ion-button class=\"foll-btn\" *ngIf=\"isFollow == false\" (click)=\"setUpFollow('set')\" color=\"primary\"\n                    size=\"small\"> 关注</ion-button>\n                  <ion-button class=\"foll-btn\" *ngIf=\"isFollow == true\" (click)=\"setUpFollow('cancel')\" color=\"secondary\"\n                    size=\"small\"> 已关注</ion-button> -->\n\n                </div>\n              </div>\n              <div class=\"\" style=\"padding-top: 0.2rem;display: inline-flex;\">\n                <ion-icon ios=\"ios-pin\" md=\"md-pin\" style=\"color: #888888;font-size: 1.5rem\"></ion-icon>\n                <small style=\"font-size:1.3rem;color:#999999;margin-left: 0.1rem;\">{{userCity}}</small>\n              </div>\n\n\n            </div>\n            <div>\n              <div class=\"ion-badge_f\">\n\n                <ion-badge *ngFor='let bqitem of bqArry' color=\"button3\" class=\"bq\" item-end>{{bqitem.txt}}</ion-badge>\n                <!-- <ion-badge  color=\"button3\" class=\"bq\" item-end>小姐姐</ion-badge>\n                  <ion-badge  color=\"button3\" class=\"bq\" item-end>准确</ion-badge> -->\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n\n        <ion-row style=\"text-align:center\">\n          <ion-col padding col-4>\n            <div>\n              <span class=\"xinxitongji_span\">{{zongdingdanliang}}</span>\n            </div>\n            <div class=\"xinxitongji_p_f\">\n              <span class=\"xinxitongji_p\">\n                <img style=\"width: 1.1em; vertical-align: middle;   margin-bottom: 3px;margin-right: 3px;\"\n                  src=\"assets/img/iconfont-占卜1.png\">占卜</span>\n\n\n            </div>\n          </ion-col>\n          <ion-col padding col-4>\n\n            <div>\n              <span class=\"xinxitongji_span\">{{beiguanzhu}}</span>\n            </div>\n            <div class=\"xinxitongji_p_f\">\n\n              <span class=\"xinxitongji_p\">\n                <img style=\"width: 1.1em; vertical-align: middle;   margin-bottom: 3px;margin-right: 3px;\"\n                  src=\"assets/img/xin1.png\">关注</span>\n            </div>\n\n          </ion-col>\n          <ion-col padding col-4>\n            <div>\n              <span class=\"xinxitongji_span\">{{zixunpingfen}}</span>\n            </div>\n            <div class=\"xinxitongji_p_f\">\n              <span class=\"xinxitongji_p\">\n                <img src=\"assets/img/pinglun.png\" style=\"width: 1.1em; vertical-align: middle;   margin-bottom: 3px;\">\n                评分\n              </span>\n            </div>\n          </ion-col>\n        </ion-row>\n\n\n\n      </div>\n\n\n      <div>\n      </div>\n    </div>\n    <div\n      style=\"box-shadow: 2px 2px 2px #eee;padding:10px;padding-left:15px;padding-right:15px;background:#fff;padding-top: 22rem;margin-top: 20px;width: 100%;width: 100%;min-height: 30rem;\">\n      <p style=\"margin-top:0px;font-size: 1.6rem;color: #333333;\">\n        <img src='assets/img/订单3.png' style=\"vertical-align:middle;width: 2.2rem;height: 2.2rem;\" (click)=\"testTo()\">\n        自我介绍\n      </p>\n\n      <!-- 分割线 -->\n      <div style=\"border-bottom: 1px solid rgb(243, 243, 243);    margin: 0px 5px;\">\n      </div>\n\n      <ion-row style=\"padding:0px 0px 0px 0px;\">\n        <ion-col style=\"color: #666666;padding-bottom:0.8rem;font-size:1.6rem;padding-top: 0.8rem;\">\n\n          {{serviceTxt}}\n        </ion-col>\n      </ion-row>\n\n    </div>\n\n\n\n\n\n    <!--服务内容-->\n\n    <div style=\"box-shadow: 2px 2px 2px #eee;margin-top:10px;padding-bottom:10px;background: #fff;padding-top:15px;\">\n      <p style=\"margin-left:10px;margin-top:0px;font-size: 1.6rem;color: #333333;\">\n        <img src='assets/img/咨询项目2.png' style=\"vertical-align:middle;width: 2.2rem;height: 2.2rem;\"> 占卜服务\n      </p>\n      <!-- 分割线 -->\n      <div style=\"border-bottom: 1px solid rgb(243, 243, 243);    margin: 0px 15px;\"></div>\n\n\n      <DIV class=\"listobj_f\">\n        <div class=\"serviceF\" *ngFor=\"let item of serviceList\">\n          <ion-row class=\"row_top\" (click)=\"service_select($event.target,item.serviceId)\">\n            <ion-col col-8 class=\"col_title_l\">\n              <p>{{item.serviceName}}</p>\n            </ion-col>\n\n            <ion-col col-4 class=\"col_title_r\">\n              <p class=\"money_p\">￥{{item.serviceMoney}}</p>\n            </ion-col>\n          </ion-row>\n          <div class=\"con_col\" (click)=\"service_select($event.target,item.serviceId)\">\n            {{item.serviceText}}\n          </div>\n\n          <ion-row class=\"col_b\">\n            <ion-col class=\"cl\">\n              <span class=\"sp1\">好评:90%</span>\n              <span class=\"sp2\"> 服务次数:{{item.serviceCount}}</span>\n              <div style=\"display: inline-block;\" class=\"fr\" (click)=\"on_showServerText(item.serviceText)\">\n                <span style=\"color:#666666;font-size: 1.3rem\">详情</span>\n                <ion-icon name=\"md-arrow-dropdown\" style=\"color:#999999\"></ion-icon>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n\n\n      </DIV>\n\n    </div>\n    <!--服务内容结束-->\n\n\n    <!-- 咨询师履历 -->\n    <div style=\"box-shadow: 2px 2px 2px #eee;margin-top:10px;padding-bottom:10px;background: #fff;padding-top:15px;\">\n      <p style=\"margin-left:10px;margin-top:0px;font-size: 1.6rem;color: #333333;\">\n        <img src='assets/img/信息披露.png' style=\"vertical-align:middle;width: 2.1rem;\"> 我的履历\n      </p>\n      <!-- 分割线 -->\n      <div style=\"border-bottom: 1px solid rgb(243, 243, 243);margin: 0px 15px;\"></div>\n      <div class=\"jianjie_\">\n        <div></div>\n        <p class=\"list\">\n          入驻时长：\n          <span class=\"val\">{{WorkingYears}}</span>\n        </p>\n        <p class=\"list\">占卜方式/排阵：\n          <span class=\"val\">{{tarotType}}</span>\n        </p>\n        <p class=\"list\">擅长方向：\n          <span class=\"val\">{{GoodAtCategory}}</span>\n        </p>\n        <p class=\"list\">占卜经历：\n          <span class=\"val\">{{experience}}</span>\n        </p>\n      </div>\n    </div>\n    <!-- 咨询师履历结束 -->\n\n\n    <!-- 评价统计开始 -->\n\n    <div style=\"box-shadow: 2px 2px 2px #eee;margin-top:10px;background:#fff;padding-top:15px;padding-bottom:18px\"\n      class=\"ztpj_f\">\n      <p style=\"font-size: 1.6rem;margin-top: 0px;color: #333333;\">\n        <img src='assets/img/评价2.png' width=\"20\" height=\"20\" style=\"vertical-align:middle;margin-right: 5px;\">总体评价\n      </p>\n      <!-- 分割线 -->\n      <div style=\"border-bottom: 1px solid rgb(243, 243, 243); margin: 0px 5px;\">\n      </div>\n\n      <div>\n\n        <div class=\"xing_img_f\">\n          <img *ngFor='let i of  xingimgs' [src]=\"i\">\n\n        </div>\n\n        <div style=\"text-align: center\" class=\"pf_f\">\n          <div style=\"display: inline-block\">\n            <span>服务质量</span>\n            <span>{{saturation_zhiliang_avg == 0.0 ? 5:saturation_zhiliang_avg}}分</span>\n          </div>\n          <div style=\"display: inline-block\">\n            <span>服务态度</span>\n            <span>{{saturation_taidu_avg == 0.0 ? 5:saturation_taidu_avg}}分</span>\n          </div>\n          <div style=\"display: inline-block\">\n            <span>回复速度</span>\n            <span>{{saturation_sudu_avg == 0.0 ? 5:saturation_sudu_avg}}分</span>\n          </div>\n        </div>\n\n        <div class=\"pjbq\">\n          <div class=\"pjbq_b\" *ngFor=\"let bqlist1 of bqlist\">\n            <span>{{bqlist1.txt}}</span>\n            <span>({{bqlist1.sum}})</span>\n          </div>\n\n        </div>\n      </div>\n\n      <div>\n        <div class=\"pl_list_f\">\n          <div class=\".cl xux_f\" style=\"height: 25px;\">\n            <div class=\"xux_l \">\n\n            </div>\n            <div class=\"xux_txt \">\n              \b\b精华评价\n            </div>\n            <div class=\"xux_r \">\n\n            </div>\n          </div>\n          <div *ngIf=\"isShowUserRating\" style=\"text-align: center;color: #666;\">\n            <p>暂时没有评价 ╮(╯_╰)╭</p>\n          </div>\n\n          <div class=\"pl_list_d_f\">\n            <div class=\"pl_list_d\" *ngFor=\"let item of userRating\">\n              <div class=\"top cl\">\n                <div class=\"img fl\">\n                  <img src=\"{{item.UserImgUrl}}\" width=\"1.4em\">\n                </div>\n                <div class=\"user_info fl\">\n                  <div class=\"user_info_top\">\n                    <div class=\"name\">{{item.CName}}</div>\n                    <div class=\"pj\">\n                      <img class=\"pl_img\" src=\"?\" (error)=\"setPjimg($event.target,item.imglist[0])\">\n                      <img class=\"pl_img\" src=\"?\" (error)=\"setPjimg($event.target,item.imglist[1])\">\n                      <img class=\"pl_img\" src=\"?\" (error)=\"setPjimg($event.target,item.imglist[2])\">\n                      <img class=\"pl_img\" src=\"?\" (error)=\"setPjimg($event.target,item.imglist[3])\">\n                      <img class=\"pl_img\" src=\"?\" (error)=\"setPjimg($event.target,item.imglist[4])\">\n                    </div>\n                  </div>\n                  <div class=\"user_info_bottom\">\n                    <div class=\"date\">\n                      <span>{{item.rntingData}}</span>\n                    </div>\n                    <div class=\"buy_server_name\">\n                      购买:\n                      <span>{{item.BuyserviceName}}</span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"info_select fr\">\n                  <ion-icon name=\"more\" style=\"color:#999999\"></ion-icon>\n                </div>\n              </div>\n              <div class=\"middle\">\n                <p>{{item.rntingTxt}}</p>\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n\n\n    </div>\n\n\n    <!-- 评价统计结束 -->\n\n\n  </div>\n\n\n\n  <ion-infinite-scroll *ngIf=\"addUserRatingEnd\" (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载中...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n\n\n\n\n\n\n</ion-content>\n\n<ion-footer mode=\"ios\" >\n  <div style=\"bottom:0px;position:fixed;width:100%;z-index:10\">\n    <ion-row style=\"padding:0px;height:100%;border-top: 1px solid #eee;\">\n      <ion-col style=\"padding:0px;height:100%\" size='4'>\n        <!-- <button ion-button color=\"light\" (click)='sendleter()' full\n          style=\"margin:0px;height:100%;background-color:#fff\">私信</button> -->\n        <ion-button mode=\"ios\" class=\"six_btn\" expand='full' (click)='sendleter()'>私信</ion-button>\n\n      </ion-col>\n      <ion-col style=\"padding:0px;height:100%\" size='8'>\n\n        <!-- <button color=\"button2\" (click)=\"buyService(toUserId)\" ion-button full\n          style=\"margin:0px;height:100%;color:#fff;background-color: rgba(143, 166, 198, 1);border-bottom: 1px solid rgb(177, 177, 177);\">立即占卜</button> -->\n\n        <ion-button mode=\"ios\" expand='full' color=\"secondary\" (click)=\"buyService(toUserId)\">立即占卜</ion-button>\n\n      </ion-col>\n    </ion-row>\n  </div>\n  <div style=\"    clear: both;\"> </div>\n\n</ion-footer>\n\n\n<Modal [(ngModel)]=\"shareState\" [popup]=\"true\" [animationType]=\"'slide-up'\" platform=\"ios\">\n\n  <div style=\"    padding-top: 2rem;\">\n    <Flex justify=\"around\">\n      <!-- <div class=\"share_img_coat\" (click)=\"share_qq_click()\">\n            <img class=\"share_img\" src=\"../assets/img/qq.png\" alt=\"\">\n            <div><span class=\"title\">分享到QQ</span></div>\n          </div> -->\n      <div class=\"share_img_coat\" (click)=\"share_link_click()\">\n        <img class=\"share_img\" src=\"../assets/img/link.png\" alt=\"\">\n        <div><span class=\"title\">复制链接</span></div>\n      </div>\n      <div class=\"share_img_coat\"> <img class=\"share_img\" (click)=\"share_weixin_click()\" src=\"../assets/img/weixin.png\"\n          alt=\"\">\n        <div> <span class=\"title\">分享到微信</span></div>\n      </div>\n    </Flex>\n  </div>\n\n  <div Button style=\"    background: #f5f5f5;\n      color: #333333;\n      height: 3.5rem;\n      line-height: 3.5rem;\n      margin-right: .5rem;\n      text-align: center;\n      margin: 0px auto;\n      width: 90%;\n      margin-top: 2rem;\n      margin-bottom: 1rem;font-size: 1.4rem;\" (onClick)=\"closeShare()\">取消</div>\n</Modal>"

/***/ }),

/***/ "./src/app/consultant/consultant.page.scss":
/*!*************************************************!*\
  !*** ./src/app/consultant/consultant.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-footer ion-button {\n  margin: 0px; }\n\n.six_btn {\n  --color:#666666;\n  --background:#ffffff;\n  --background-activated:#ffffff;\n  --color-activated:#666666; }\n\nion-toolbar {\n  --background:transparent;\n  --border-color:#ffffff\n; }\n\n#consultant_content .swiper-container {\n  border-bottom-left-radius: 34px 10px !important;\n  border-bottom-right-radius: 34px 10px !important;\n  border-bottom: solid 3px #e8effa; }\n\nion-header {\n  box-shadow: 0px 0px 0px 0px transparent !important; }\n\n.foll-btn {\n  --padding-start:0.5rem;\n  --padding-end:0.5rem;\n  --padding-bottom:0.1rem;\n  --padding-top:0.1rem; }\n\n.placeholder {\n  background-color: #ebebef;\n  color: #bbb;\n  text-align: center;\n  height: 30px;\n  line-height: 30px;\n  width: 100%; }\n\n.share_img_coat .title {\n  font-size: 1.2rem;\n  color: #666666; }\n\n.share_img_coat {\n  text-align: center; }\n\n.share_img {\n  width: 5rem;\n  height: 5rem; }\n\n.user_s_f {\n  width: 94%;\n  padding: 10px;\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 2px 8px 15px -8px #eee;\n  position: absolute;\n  top: 12rem;\n  z-index: 2;\n  left: 0;\n  right: 0;\n  margin: 0px auto;\n  padding-bottom: 0px; }\n\n.user_s_f ion-col {\n  padding-bottom: 1rem; }\n\n.user_s_f button {\n  font-size: 1.2rem !important;\n  padding: 0rem 0.3rem;\n  height: 1.8em;\n  margin: 0px; }\n\n.img_f {\n  z-index: 1;\n  border-radius: 50%;\n  padding-top: 2px;\n  display: inline-block; }\n\n.toux_img {\n  z-index: 999;\n  border-radius: 50%;\n  width: 4.9rem;\n  height: 4.9rem; }\n\n.toux_img_bq {\n  position: absolute;\n  background-color: #ff6dc1;\n  text-align: center;\n  width: 1.7rem;\n  height: 1.7rem;\n  line-height: 2rem;\n  border-radius: 50%;\n  right: 0rem;\n  bottom: 0rem; }\n\n.toux_img_bq ion-icon {\n  color: #FFFFFF;\n  font-size: 0.9em;\n  font-weight: 900; }\n\n.scroll-content {\n  padding-top: 0px !important; }\n\n.sex_ion {\n  font-size: 0.9em;\n  font-weight: 300; }\n\n.sex_ion2 {\n  font-size: 0.9em;\n  font-weight: 300; }\n\n.sex_bac {\n  background: #91b3d4; }\n\n.xinxitongji_span {\n  font-family: Georgia;\n  font-size: 2.35rem;\n  color: #333333; }\n\n.xinxitongji_p_f {\n  margin-top: 10px; }\n\n.xinxitongji_p {\n  margin: 0px;\n  padding: 0px;\n  margin-top: 5px;\n  text-align: center;\n  color: #666666;\n  font-size: 1.6rem; }\n\nion-header ion-icon {\n  color: #fff;\n  transition: color 0.3s;\n  transition: border 0.4s; }\n\n.header1 {\n  transition: background 0.3s; }\n\n.bq {\n  color: #fff;\n  border-radius: 20px;\n  vertical-align: middle;\n  padding: 0.3rem 0.5rem;\n  font-size: 1.1rem;\n  margin-left: 0.2rem;\n  background: #0cd1e8; }\n\npage-consultant {\n  background: #454343; }\n\n.ion-badge_f ion-badge {\n  margin-bottom: 0.2rem; }\n\n.ion-badge_f {\n  margin-top: 0.3rem;\n  height: 1.8rem;\n  overflow: hidden; }\n\n.swiper-pagination-bullet-active {\n  background: #fff; }\n\n.serviceF {\n  padding: 8px 10px;\n  border-bottom: 1px solid #eee;\n  -webkit-transform: 0.1s background;\n          transform: 0.1s background;\n  transition: 0.5s left;\n  transition: all 1s;\n  background: #fff;\n  position: relative; }\n\n.serviceF_select .col_title_l p {\n  color: #f36969;\n  transition: color 0.2s; }\n\n.serviceF:active {\n  background: whitesmoke; }\n\n.col_title_l {\n  text-align: left; }\n\n.col_title_l p {\n  color: #333333;\n  font-size: 1.55rem; }\n\n.col_title_r {\n  text-align: right; }\n\n.col_title_r p {\n  font-family: Georgia;\n  font-size: 1.7rem; }\n\n.con_col {\n  padding-bottom: 0.85rem;\n  color: #666666;\n  padding-left: 5px;\n  font-size: 1.45rem; }\n\n.money_p {\n  font-size: 1.3em;\n  font-family: Georgia;\n  color: #e71010; }\n\n.sp1 {\n  padding: 3px 5px;\n  /* border: 1px solid #eee; */\n  border-radius: 30px;\n  background: #f5c3c0;\n  color: #fff;\n  font-size: 1.2rem; }\n\n.sp2 {\n  padding: 3px 5px;\n  /* border: 1px solid #eee; */\n  border-radius: 30px;\n  background: #f9d8ac;\n  color: #fff;\n  font-size: 1.2rem;\n  margin-left: 5px; }\n\n.row_top p {\n  margin-bottom: 5px;\n  margin-top: 0px; }\n\n.name_bq {\n  padding: 1px;\n  border-radius: 1px; }\n\n.listobj_f .serviceF:nth-last-child(1) {\n  border-bottom-width: 0px; }\n\n.tiao {\n  height: 9px;\n  border-radius: 5px;\n  background: #eee; }\n\n.tiao_f {\n  width: 70%;\n  float: left;\n  margin-left: 5px;\n  margin-top: 3px; }\n\n.col_title1 {\n  font-size: 0.9em;\n  color: #666666; }\n\n.tiao_n {\n  height: 9px;\n  border-radius: 5px; }\n\n.tiao_n_count1 {\n  width: 85%; }\n\n.tiao_n_count2 {\n  width: 40%; }\n\n.tiao_n_count3 {\n  width: 100%; }\n\n.pj_item {\n  padding: 0px; }\n\n.ztpj_f {\n  padding: 5px 10px;\n  padding-bottom: 15px; }\n\n.tiao_color3 {\n  background: #b4a0e2; }\n\n.serviceF:last-child {\n  margin-bottom: 0px; }\n\n.xing_img_f {\n  padding: 10px;\n  padding-top: 25px;\n  text-align: center; }\n\n.xing_img_f img {\n  width: 1.7em;\n  margin-right: 2%; }\n\n.pf_f {\n  margin-top: 15px;\n  display: flex; }\n\n.pf_f div {\n  text-align: center;\n  flex: 1; }\n\n.pf_f div span {\n  font-size: 1.3rem; }\n\n.pf_f div span:nth-child(1) {\n  margin-right: 5px;\n  color: #333333; }\n\n.pf_f div span:nth-child(2) {\n  color: red; }\n\n.pjbq {\n  margin-top: 22px; }\n\n.pjbq_b {\n  display: inline-block;\n  padding: 2px 6px;\n  border-radius: 10px;\n  background: #edf2fd;\n  font-size: 1.25rem;\n  margin-right: 3%;\n  margin-bottom: 6%; }\n\n.pjbq_b span {\n  color: #666666; }\n\n.pjbq_b span:nth-child(1) {\n  margin-right: 3px; }\n\n.pl_list_f {\n  margin-bottom: 100px;\n  background: #fff;\n  border-radius: 10px;\n  margin-top: 25px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  box-shadow: 0px -3px 10px #f1f1f1; }\n\n.xux_f {\n  text-align: center; }\n\n.xux_l, .xux_r {\n  display: inline-block;\n  width: 30%;\n  height: 1px;\n  margin-top: 10px;\n  margin-bottom: 4px; }\n\n.xux_l {\n  background: -webkit-linear-gradient(left, #ffffff, #c5c5c5); }\n\n.xux_r {\n  background: -webkit-linear-gradient(left, #c5c5c5, #ffffff); }\n\n.xux_txt {\n  display: inline-block;\n  padding: 0px 5px;\n  color: #333333;\n  font-size: 1.6rem;\n  margin-left: 5%;\n  margin-right: 5%;\n  text-align: center; }\n\n.pl_list_f .pl_img {\n  width: 1em; }\n\n.user_info_bottom {\n  text-align: left;\n  margin-left: 10px; }\n\n.user_info_bottom .date, .buy_server_name {\n  display: inline-block; }\n\n.user_info_bottom div {\n  font-size: 1.3rem;\n  color: #999999; }\n\n.pl_list_d {\n  padding: 15px;\n  border-bottom: 1PX solid #f3f3f3 !important; }\n\n.pl_list_d img {\n  width: 3.8rem;\n  border-radius: 50%; }\n\n.pl_list_d .middle p {\n  font-size: 1.5rem; }\n\n.user_info_top {\n  text-align: left;\n  margin-left: 10px; }\n\n.user_info_top div {\n  display: inline-block; }\n\n.user_info_top .name {\n  font-size: 1.5rem; }\n\n.pl_list_d_f {\n  margin-top: 10px; }\n\n.middle p {\n  color: #555555; }\n\n.user_info_top .pj {\n  margin-left: 5px; }\n\n.info_select ion-icon {\n  font-size: 1.6rem; }\n\n.jianjie_ {\n  padding: 0px 15px; }\n\n.jianjie_ .list {\n  color: #333333;\n  font-size: 1.5rem;\n  margin: 0.8rem 0rem; }\n\n.jianjie_ .list .val {\n  color: #666666;\n  font-size: 1.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvY29uc3VsdGFudC9jb25zdWx0YW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGVBQVE7RUFDUixvQkFBYTtFQUNiLDhCQUF1QjtFQUN2Qix5QkFBa0IsRUFBQTs7QUFFcEI7RUFDRSx3QkFBYTtFQUNiO0FBQWUsRUFBQTs7QUFHZjtFQUNFLCtDQUErQztFQUFDLGdEQUFpRDtFQUNqRyxnQ0FBeUMsRUFBQTs7QUFHM0M7RUFDRSxrREFBa0QsRUFBQTs7QUFFdEQ7RUFDRSxzQkFBZ0I7RUFDaEIsb0JBQWM7RUFDZCx1QkFBaUI7RUFDakIsb0JBQWMsRUFBQTs7QUFFaEI7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBRWhCO0VBRUUsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFWjtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0VBQ1YsT0FBTztFQUNQLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0Usb0JBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUdiO0VBQ0UsVUFBUztFQUFDLGtCQUFpQjtFQUFDLGdCQUFnQjtFQUM1QyxxQkFBcUIsRUFBQTs7QUFFdkI7RUFDQSxZQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLGFBQWE7RUFBQyxjQUFjLEVBQUE7O0FBRzVCO0VBQ0Us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QUFxQixFQUFBOztBQUd2QjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFBVSxpQkFBaUIsRUFBQTs7QUFDM0I7RUFDQSxjQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBOztBQUVuQjtFQUNBLGNBQWE7RUFDYixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnN1bHRhbnQvY29uc3VsdGFudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1mb290ZXIgaW9uLWJ1dHRvbntcbiAgbWFyZ2luOiAwcHg7XG59XG4uc2l4X2J0bntcbiAgLS1jb2xvcjojNjY2NjY2O1xuICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojZmZmZmZmO1xuICAtLWNvbG9yLWFjdGl2YXRlZDojNjY2NjY2O1xufVxuaW9uLXRvb2xiYXJ7XG4gIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3I6I2ZmZmZmZlxufVxuXG4gICNjb25zdWx0YW50X2NvbnRlbnQgLnN3aXBlci1jb250YWluZXJ7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzRweCAxMHB4ICFpbXBvcnRhbnQ7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICAzNHB4IDEwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggcmdiKDIzMiwyMzksMjUwKTtcbiAgfVxuXG4gIGlvbi1oZWFkZXIge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLmZvbGwtYnRue1xuICAtLXBhZGRpbmctc3RhcnQ6MC41cmVtO1xuICAtLXBhZGRpbmctZW5kOjAuNXJlbTtcbiAgLS1wYWRkaW5nLWJvdHRvbTowLjFyZW07XG4gIC0tcGFkZGluZy10b3A6MC4xcmVtO1xufVxuLnBsYWNlaG9sZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlZjtcbiAgY29sb3I6ICNiYmI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2hhcmVfaW1nX2NvYXQgLnRpdGxle1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6ICM2NjY2NjY7XG59XG4uc2hhcmVfaW1nX2NvYXR7XG4gXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zaGFyZV9pbWd7XG4gIHdpZHRoOiA1cmVtO1xuICBoZWlnaHQ6IDVyZW07XG59XG4gIC51c2VyX3NfZntcbiAgICB3aWR0aDogOTQlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDJweCA4cHggMTVweCAtOHB4ICNlZWU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTJyZW07XG4gICAgei1pbmRleDogMjtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgfVxuICAudXNlcl9zX2YgaW9uLWNvbHtcbiAgICBwYWRkaW5nLWJvdHRvbToxcmVtO1xuICB9XG4gIC51c2VyX3NfZiBidXR0b257XG4gICAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwcmVtIDAuM3JlbTtcbiAgICBoZWlnaHQ6IDEuOGVtO1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG5cbiAgLmltZ19me1xuICAgIHotaW5kZXg6MTtib3JkZXItcmFkaXVzOjUwJTtwYWRkaW5nLXRvcDogMnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAudG91eF9pbWd7XG4gIHotaW5kZXg6IDk5OTtcbiAgYm9yZGVyLXJhZGl1czo1MCU7XG4gIHdpZHRoOiA0LjlyZW07aGVpZ2h0OiA0LjlyZW07XG5cbiAgfVxuICAudG91eF9pbWdfYnF7XG4gICAgcG9zaXRpb246IGFic29sdXRlO2JhY2tncm91bmQtY29sb3I6ICNmZjZkYzE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxLjdyZW07XG4gIGhlaWdodDogMS43cmVtO1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcmlnaHQ6IDByZW07XG4gICAgYm90dG9tOiAwcmVtO1xuICB9XG4gIC50b3V4X2ltZ19icSBpb24taWNvbntcbiAgICBjb2xvcjojRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAvL2xpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgfVxuXG4gIC5zY3JvbGwtY29udGVudCB7XG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICB9XG4uc2V4X2lvbntcbiAvLyBjb2xvcjokY29sb3ItYnV0dG9uMTtcbiAgZm9udC1zaXplOjAuOWVtO2ZvbnQtd2VpZ2h0OjMwMFxufVxuLnNleF9pb24ye1xuIC8vIGNvbG9yOiRjb2xvci1idXR0b24yO1xuICBmb250LXNpemU6MC45ZW07Zm9udC13ZWlnaHQ6MzAwXG59XG4uc2V4X2JhY3tcbiAgYmFja2dyb3VuZDogIzkxYjNkNDtcbn1cbiAgLnhpbnhpdG9uZ2ppX3NwYW4ge1xuICAgLy8gY29sb3I6JGNvbG9yLWJ1dHRvbjI7XG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWE7XG4gICAgZm9udC1zaXplOiAyLjM1cmVtO1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICB9XG4ueGlueGl0b25namlfcF9me1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuICAueGlueGl0b25namlfcCB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM2NjY2NjY7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gIH1cblxuXG4gIFxuICAgICAgaW9uLWhlYWRlciBpb24taWNvbntcbiAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgdHJhbnNpdGlvbjpjb2xvciAwLjNzO1xuICAgICAgICB0cmFuc2l0aW9uOmJvcmRlciAwLjRzO1xuICAgICAgICBcbiAgICAgIH1cblxuICAgIFxuICAgICAgICAuaGVhZGVyMXsgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzfVxuICAgICAgICAuc2hvd19zdHlsZXtcbiAgICAgICAgIC8vIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLDApICFpbXBvcnRhbnQ7XG4gICAgICAgICAgLy9ib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgfVxuICAgICAgIFxuICAgICAgICAuc2hvd19zdHlsZSBpb24taWNvbntcbiAgICAgICAgICAvL2NvbG9yOiNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgXG4gICAgICAgIC5icXtcbiAgICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6MjBweDtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG4gICAgICAgICAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMC4ycmVtO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMwY2QxZThcblxuICAgICAgICB9XG4gICAgICAgIHBhZ2UtY29uc3VsdGFudHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiM0NTQzNDM7XG4gICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgLmlvbi1iYWRnZV9mIGlvbi1iYWRnZXtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XG4gICAgICAgIH1cbi5pb24tYmFkZ2VfZntcbiAgbWFyZ2luLXRvcDogMC4zcmVtO1xuICBoZWlnaHQ6IDEuOHJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxufVxuICAgICAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZXtcbiAgICAgICAgICAvL+i9ruWbvuWvvOiIqueCueagt+W8j1xuICAgICAgICAgIGJhY2tncm91bmQ6I2ZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3mnI3liqHlvIDlp4tcbiAgICAgXG4gICAgICAgIC5zZXJ2aWNlRiB7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgLy8gbWFyZ2luLXRvcDogNXB4O1xudHJhbnNmb3JtOiAwLjFzIGJhY2tncm91bmQ7XG50cmFuc2l0aW9uOiAwLjVzIGxlZnQ7XG50cmFuc2l0aW9uOmFsbCAxcztcbmJhY2tncm91bmQ6ICNmZmY7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIC5zZXJ2aWNlRl9zZWxlY3QgLmNvbF90aXRsZV9sIHB7XG4gICAgICAgICAgY29sb3I6ICNmMzY5Njk7XG4gICAgICAgICAgdHJhbnNpdGlvbjpjb2xvciAwLjJzO1xuICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAuc2VydmljZUY6YWN0aXZle1xuICAgICAgICAgIGJhY2tncm91bmQ6cmdiKDI0NSwgMjQ1LCAyNDUpO1xuICAgICAgICB9XG4gIFxuICAgICAgICAuY29sX3RpdGxlX2wge1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICBcbiAgICAgICAgIFxuICBcbiAgICAgICAgfVxuICAgICAgICAuY29sX3RpdGxlX2wgcHtcbiAgICAgICAgICBjb2xvcjojMzMzMzMzO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41NXJlbTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgLmNvbF90aXRsZV9ye1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIC5jb2xfdGl0bGVfciBwe1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLmNvbl9jb2x7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuODVyZW07XG4gICAgICAgICAgY29sb3I6IzY2NjY2NjtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICBmb250LXNpemU6IDEuNDVyZW07XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAubW9uZXlfcHtcbiAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhO1xuICAgICAgICAgIGNvbG9yOiNlNzEwMTA7XG4gICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgLnNwMXtcbiAgICAgICAgICBwYWRkaW5nOiAzcHggNXB4O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7ICovXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ1LDE5NSwxOTIpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuXG4gICAgICAgIH1cbiAgICAgICAgLnNwMntcbiAgICAgICAgICBwYWRkaW5nOiAzcHggNXB4O1xuICAgICAgICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7ICovXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ5LDIxNiwxNzIpO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnJvd190b3AgcHtcbm1hcmdpbi1ib3R0b206IDVweDtcbm1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgfVxuICAgICAgICAubmFtZV9icXtcbiAgICAgICAgICBwYWRkaW5nOiAxcHg7XG4gICAgICAgICBcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLmxpc3RvYmpfZntcbiAgICAgICAgLy8gIGJhY2tncm91bmQ6ICRjb2xvcl9idXR0b24xO1xuICAgICAgICB9XG4gICAgICAgIC5saXN0b2JqX2YgLnNlcnZpY2VGOm50aC1sYXN0LWNoaWxkKDEpe1xuICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDBweDtcbiAgICAgICAgfVxuIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3mnI3liqHnu5PmnZ9cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIOivhOS7t+e7n+iuoeW8gOWniyBcblxuLnRpYW97XG4gXG4gIGhlaWdodDogOXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG59XG4udGlhb19me1xuICB3aWR0aDogNzAlO1xuICBcbiAgZmxvYXQ6IGxlZnQ7XG4gIFxuICBtYXJnaW4tbGVmdDogNXB4O1xuICBcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuLmNvbF90aXRsZTF7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGNvbG9yOiAjNjY2NjY2O1xufVxuLnRpYW9fbntcblxuICBcbiAgaGVpZ2h0OiA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi50aWFvX25fY291bnQxe1xuICB3aWR0aDogODUlO1xufVxuLnRpYW9fbl9jb3VudDJ7XG4gIHdpZHRoOiA0MCU7XG59XG4udGlhb19uX2NvdW50M3tcbiAgd2lkdGg6IDEwMCU7XG59XG4ucGpfaXRlbXtcbnBhZGRpbmc6IDBweDtcblxufVxuLnp0cGpfZnsgcGFkZGluZzogNXB4IDEwcHg7cGFkZGluZy1ib3R0b206IDE1cHg7fVxuLnRpYW9fY29sb3Ixe1xuIC8vIGJhY2tncm91bmQ6JGNvbG9yLWJ1dHRvbjE7XG59XG4udGlhb19jb2xvcjJ7XG4gLy8gYmFja2dyb3VuZDokY29sb3ItYnV0dG9uMjtcbn1cbi50aWFvX2NvbG9yM3tcbiAgYmFja2dyb3VuZDojYjRhMGUyO1xufVxuLnNlcnZpY2VGOmxhc3QtY2hpbGR7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuXG4ueGluZ19pbWdfZntcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi54aW5nX2ltZ19mIGltZ3tcbiAgd2lkdGg6IDEuN2VtO1xuICBtYXJnaW4tcmlnaHQ6IDIlO1xufVxuLnBmX2Z7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucGZfZiBkaXZ7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBmbGV4OiAxO1xufVxuLnBmX2YgZGl2IHNwYW57XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuLnBmX2YgZGl2IHNwYW46bnRoLWNoaWxkKDEpe1xubWFyZ2luLXJpZ2h0OiA1cHg7XG5jb2xvcjojMzMzMzMzXG5cbn1cbi5wZl9mIGRpdiBzcGFuOm50aC1jaGlsZCgyKXtcbiAgY29sb3I6cmVkO1xuIFxufVxuLnBqYnF7XG4gIG1hcmdpbi10b3A6IDIycHg7XG5cbn1cbi5wamJxX2Ige1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDJweCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYigyMzcsMjQyLDI1Myk7XG5mb250LXNpemU6IDEuMjVyZW07XG5tYXJnaW4tcmlnaHQ6IDMlO1xubWFyZ2luLWJvdHRvbTogNiU7XG5cbn1cbi5wamJxX2Igc3BhbntcbmNvbG9yOiAjNjY2NjY2O1xuXG59XG4ucGpicV9iIHNwYW46bnRoLWNoaWxkKDEpe1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSDor4Tku7fnu5/orqHnu5PmnZ9cblxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0g6K+E5Lu35YiX6KGo5byA5aeLXG4ucGxfbGlzdF9me1xubWFyZ2luLWJvdHRvbTogMTAwcHg7XG5iYWNrZ3JvdW5kOiNmZmY7XG5ib3JkZXItcmFkaXVzOiAxMHB4O21hcmdpbi10b3A6MjVweDtwYWRkaW5nLXRvcDoyMHB4O3BhZGRpbmctYm90dG9tOiAyMHB4O1xuYm94LXNoYWRvdzowcHggLTNweCAxMHB4IHJnYigyNDEsIDI0MSwgMjQxKSwgIC8q5LiK6L656Zi05b2xKi8gXG4gICAgICAgIFxuICAgICAgXG59XG4ueHV4X2Z7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi54dXhfbCwueHV4X3J7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi54dXhfbHtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwjZmZmZmZmLCNjNWM1YzUpO1xufVxuLnh1eF9ye1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCNjNWM1YzUsI2ZmZmZmZik7XG59XG4ueHV4X3R4dHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICBjb2xvcjojMzMzMzMzO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLnBsX2xpc3RfZiAucGxfaW1ne1xuICB3aWR0aDogMWVtO1xufVxuLnVzZXJfaW5mb19ib3R0b217XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBcblxufVxuLnVzZXJfaW5mb19ib3R0b20gLmRhdGUsLmJ1eV9zZXJ2ZXJfbmFtZXtcbiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbn1cbi51c2VyX2luZm9fYm90dG9tIGRpdntcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuLnBsX2xpc3RfZHtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMVBYIHNvbGlkIHJnYigyNDMsIDI0MywgMjQzKSAhaW1wb3J0YW50O1xufVxuLnBsX2xpc3RfZCBpbWd7XG4gIHdpZHRoOiAzLjhyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgXG59XG4ucGxfbGlzdF9kIC5taWRkbGUgcHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4udXNlcl9pbmZvX3RvcCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuXG59XG4udXNlcl9pbmZvX3RvcCBkaXZ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxufVxuLnVzZXJfaW5mb190b3AgLm5hbWV7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4ucGxfbGlzdF9kX2Z7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gXG59XG4ubWlkZGxlIHAge1xuICBjb2xvcjogIzU1NTU1NTtcbn1cblxuLnVzZXJfaW5mb190b3AgLnBqe1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uaW5mb19zZWxlY3QgaW9uLWljb257XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uamlhbmppZV97cGFkZGluZzogMHB4IDE1cHg7fVxuLmppYW5qaWVfIC5saXN0IHtcbmNvbG9yOiMzMzMzMzM7XG5mb250LXNpemU6IDEuNXJlbTtcbm1hcmdpbjogMC44cmVtIDByZW07XG59XG4uamlhbmppZV8gLmxpc3QgLnZhbHtcbmNvbG9yOiM2NjY2NjY7XG5mb250LXNpemU6IDEuNXJlbTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/consultant/consultant.page.ts":
/*!***********************************************!*\
  !*** ./src/app/consultant/consultant.page.ts ***!
  \***********************************************/
/*! exports provided: ConsultantPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantPage", function() { return ConsultantPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");
/* harmony import */ var _ionic_native_wechat_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/wechat/ngx */ "./node_modules/@ionic-native/wechat/ngx/index.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var _ionic_native_qqsdk_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/qqsdk/ngx */ "./node_modules/@ionic-native/qqsdk/ngx/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_12__);
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













var ConsultantPage = /** @class */ (function () {
    function ConsultantPage(navCtrl, QQSDK, ClipboardService, Wechat, ActivatedRoute, DataserviceService, router, location, appmin, toast, alertCtrl, toastCtrl, modctrl, modalCtrl, loadingCtrl, storage) {
        //加载缓存数据 
        this.navCtrl = navCtrl;
        this.QQSDK = QQSDK;
        this.ClipboardService = ClipboardService;
        this.Wechat = Wechat;
        this.ActivatedRoute = ActivatedRoute;
        this.DataserviceService = DataserviceService;
        this.router = router;
        this.location = location;
        this.appmin = appmin;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modctrl = modctrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        // @ViewChild('content1') content1: Content;
        //输出变量
        this.userImg = "../assets/img/头像.png";
        this.currentStyles = { 'background-color': ' rgba(255, 255, 255, 0)', 'padding-top': '10px', 'border-bottom': '1px solid rgb(238, 238, 238,0)' };
        this.currentStyles_title = { 'opacity': "0" };
        this.currentStyles_back = { 'color': '#fff' };
        this.userRating = []; //用户评论json数组
        this.xingimgs = [];
        //appmin = new AppMin();
        this.header_class = "";
        //tabsService = new TabsService();
        //评价分页默认页 
        this.relationship = "friends";
        this.show_style = "show_style";
        this.toUserId = 0;
        this.isShowUserRating = true;
        this.saturation_zhiliang_avg = 0;
        this.saturation_taidu_avg = 0;
        this.saturation_sudu_avg = 0;
        this.bqlist = [];
        this.bqArry = [];
        this.shareState = false;
        //lastIsLocd:boolean=true;
        this.addUserRatingEnd = true; //评论加载终止符
        // this.toUserId = this.navparams.get("userId");
        // this.activateInfo.queryParams.subscribe(queryParams => {
        //   this.toUserId = queryParams.userId;
        // })
        this.toUserId = this.ActivatedRoute.snapshot.queryParams['userId'];
        var obj = {
            animation: "ios-transition"
        };
        // this.navCtrl.config.settings(obj)
        if (this.appmin.GetPhoneMode() != "ios") {
            this.header_class = "header_class";
        }
        else {
            this.header_class = "header_class";
        }
    }
    ;
    ConsultantPage.prototype.showshare = function () {
        //分享弹框
        this.shareState = true;
    };
    ConsultantPage.prototype.closeShare = function () {
        //关闭弹框
        this.shareState = false;
    };
    ConsultantPage.prototype.share_qq_click = function () {
        // console.log("qq")
        // let this1 = this;
        // var args = {};
        // args["client"] = this.QQSDK.ClientType.QQ;//QQSDK.ClientType.QQ,QQSDK.ClientType.TIM;
        // this.QQSDK.checkClientInstalled(args).then(function () {
        //   var args = {};
        //   args['client'] = this1.QQSDK.ClientType.QQ;//QQSDK.ClientType.QQ,QQSDK.ClientType.TIM;
        //   args['scene'] = this1.QQSDK.Scene.QQ;//QQSDK.Scene.QQZone,QQSDK.Scene.Favorite
        //   args['url'] = 'https://y.qq.com/portal/song/001OyHbk2MSIi4.html';
        //   args['title'] = '十年';
        //   args['description'] = '陈奕迅';
        //   args['image'] = 'https://y.gtimg.cn/music/photo_new/T001R300x300M000003Nz2So3XXYek.jpg';
        //   args['flashUrl'] = 'http://stream20.qqmusic.qq.com/30577158.mp3';
        //   this1.QQSDK.shareAudio(args).then(function () {
        //     //分享成功
        //   }).catch(function () {
        //     //分享失败
        //   })
        // }).catch(function () {
        //   this1.show_toastCtrl("未安装QQ");
        // });
    };
    ConsultantPage.prototype.share_link_click = function () {
        console.log("link");
        this.shareState = false;
        this.ClipboardService.copyFromContent("http://m.taluoguan.com/shareobjinfo?userId=" + this.toUserId);
        this.show_toastCtrl("已复制好，请粘贴。\(^o^)/~");
    };
    ConsultantPage.prototype.share_weixin_click = function () {
        console.log("weixin");
        this.shareState = false;
        var Scene = {
            SESSION: 0,
            TIMELINE: 1,
            FAVORITE: 2 // 收藏
        };
        var Type = {
            APP: 1,
            EMOTION: 2,
            FILE: 3,
            IMAGE: 4,
            MUSIC: 5,
            VIDEO: 6,
            WEBPAGE: 7,
            MINI: 8
        };
        this.Wechat.share({
            message: {
                title: '塔罗师',
                description: "绯叶",
                thumb: "https://img.yzcdn.cn/vant/logo.png",
                media: {
                    type: Type.WEBPAGE,
                    webpageUrl: "http://m.taluoguan.com/shareobjinfo?userId=" + this.toUserId
                }
            }, scene: Scene.SESSION
        }).then(function (installed) {
            console.log('分享微信' + (installed ? "Yes" : "No"));
        }).catch(function (reason) {
            console.log('微信分享失败Failed:' + reason);
        });
    };
    ConsultantPage.prototype.testTo = function () {
        this.router.navigate(['BuyServicePage']);
    };
    ConsultantPage.prototype.ngOnInit = function () {
        //判断是否安装微信
        var this1 = this;
        this.Wechat.isInstalled().then(function (installed) {
            console.log('安装了微信' + (installed ? "Yes" : "No"));
        }).catch(function (reason) {
            console.log('Failed:' + reason);
        });
        //  console.log("WEBPAGE="+ this.Wechat.Type.WEBPAGE);
        //分享
        this.toUserId = this.ActivatedRoute.snapshot.queryParams['userId'];
        this.addObjTxt(this.toUserId);
        this.addObjResume(this.toUserId);
        this.addUserRating();
        // document.getElementById('jb111').style.opacity = '0';
        // document.getElementById('jb111_p').style.opacity = '0';
    };
    ConsultantPage.prototype.ngOnDestroy = function () {
        //组件销毁
        if (this.toast_ || this.toast_ != undefined || this.toast_ != null) {
            this.toast_.dismiss();
        }
    };
    ConsultantPage.prototype.goBack = function () {
        window.history.back();
    };
    ConsultantPage.prototype.presentLoadingDefault = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        //显示加载中
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: '加载中',
                                showBackdrop: true,
                            })];
                    case 1:
                        //显示加载中
                        _a.loader = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConsultantPage.prototype.send = function (value, isshow) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!isshow) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: "加载中...",
                                duration: 3000
                            })];
                    case 1:
                        _a.loader = _b.sent();
                        _b.label = 2;
                    case 2:
                        this.appmin.get(JSON.parse(value)).subscribe(function (data) {
                            _this.dataHandle(data);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ConsultantPage.prototype.likai = function () {
        var obj = {
            animation: "ios-transition" //设置过度效果
        };
        //this.modctrl.create(PalacePage).present();
        // this.navCtrl.push(PalacePage, null, obj);
        // this.valctrl.dismiss(null, null, obj);
        //this.location.back();
        // this.navCtrl.back();
        // history.go(-1);  
        this.navCtrl.pop();
    };
    ConsultantPage.prototype.show_toastCtrl = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            duration: 1000,
                            position: 'top',
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConsultantPage.prototype.segmentChanged = function (e) {
        //评价分页栏被单击
    };
    ConsultantPage.prototype.ionScroll = function (this_) {
        //return;
        //alert("页面发生滚动"); 
        //判断滚动方向
        //  return;
        this.jb111 = document.getElementById('jb111');
        this.jb111_p = document.getElementById('jb111_p');
        // let obj: any = this_.getContentDimensions();
        // this_.getContentDimensions();
        var op = this_.detail.scrollTop;
        if (this_.detail.scrollTop > 160) {
            this.currentStyles['background-color'] = 'rgba(255, 255, 255,1)';
            this.currentStyles['border-bottom'] = '1px solid rgb(238, 238, 238,1)';
            this.currentStyles_title['opacity'] = '1';
            this.currentStyles_back['color'] = "#333333";
        }
        else {
            this.currentStyles['background-color'] = 'rgba(255, 255, 255,0)';
            this.currentStyles['border-bottom'] = '1px solid rgb(238, 238, 238,0)';
            this.currentStyles_title['opacity'] = '0';
            this.currentStyles_back['color'] = "#fff";
        }
        if (this_.detail.deltaY > 0) {
            //向下滚动
            op = (op / 2) / 100;
            if (op >= 1) {
                op = 1;
            }
            // this.jb111.style.opacity = op;
            // this.jb111_p.style.opacity = op;
            //  this.currentStyles['background-color'] = 'rgba(255, 255, 255,' + op + ')';
            //
            // this.currentStyles['border-bottom'] = '1px solid rgb(238, 238, 238,' + op + ')';
        }
        else {
            //向上滚动
            op = (op / 2) / 100;
            if (op >= 1) {
                op = 1;
            }
            if (op == 0.1) {
                op = 0;
            }
            // this.jb111.style.opacity = op;
            // this.jb111_p.style.opacity = op;
            // this.currentStyles['background-color'] = ' rgba(255, 255, 255,' + op + ')';
            // this.currentStyles['border-bottom'] = '1px solid rgb(238, 238, 238,' + op + ')';
        }
    };
    ConsultantPage.prototype.setPjimg = function (e, count) {
        if (count == 1) {
            jquery__WEBPACK_IMPORTED_MODULE_12__(e).attr("src", "assets/img/xing1.png");
            return "assets/img/xing1.png";
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_12__(e).attr("src", "assets/img/xing.png");
            return "assets/img/xing0.png";
        }
    };
    ConsultantPage.prototype.onClickSearch = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    ConsultantPage.prototype.addObjTxt = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var obj;
            return __generator(this, function (_a) {
                //加载咨询师数据
                //alert(socket1.readyState);
                this.locdAdd(); //加载本地数据
                obj = {
                    type: "addObjTxt",
                    toUserId: this.toUserId,
                    userId: this.appmin.getUserid()
                };
                this.send(JSON.stringify(obj), false);
                this.presentLoadingDefault();
                return [2 /*return*/];
            });
        });
    };
    ConsultantPage.prototype.on_showServerText = function (txt) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        //显示服务详情
                        // alert("on_showServerText!");
                        _a = this;
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: txt,
                                duration: 0,
                                position: 'middle',
                                showCloseButton: true,
                                // translucent:true,
                                closeButtonText: '关闭',
                            })];
                    case 1:
                        //显示服务详情
                        // alert("on_showServerText!");
                        _a.toast_ = _b.sent();
                        this.toast_.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConsultantPage.prototype.setUpFollow = function (setType) {
        return __awaiter(this, void 0, void 0, function () {
            var obj;
            return __generator(this, function (_a) {
                if (!this.appmin.islogin()) {
                    this.tologin();
                    console.log("未登录 不能关注");
                    return [2 /*return*/];
                }
                if (this.isFollow) {
                    setType = 'cancel';
                }
                else {
                    setType = 'set';
                }
                obj = {
                    type: 'setUpFollow',
                    userId: this.appmin.getUserid(),
                    toUserId: this.toUserId,
                    setType: setType
                };
                this.send(JSON.stringify(obj), true);
                return [2 /*return*/];
            });
        });
    };
    ConsultantPage.prototype.tologin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var this1, alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this1 = this;
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: '',
                                message: '需要登录才操作',
                                buttons: [
                                    {
                                        text: '取消',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function (blah) {
                                            console.log('Confirm Cancel: blah');
                                        }
                                    }, {
                                        text: '去登录',
                                        handler: function () {
                                            console.log('Confirm Okay');
                                            this1.showlogin();
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
    ConsultantPage.prototype.showlogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modctrl.create({
                            component: _login_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"],
                            componentProps: { value: 123 }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ConsultantPage.prototype.locdAdd = function () {
        var this1 = this;
        if (this.toUserId == 0) {
            return;
        }
        this.dataHandle(this.DataserviceService.getdata("serviceTxt" + this.toUserId), false);
    };
    ConsultantPage.prototype.addLocalError = function () {
    };
    ConsultantPage.prototype.buyService = function (touserid) {
        return __awaiter(this, void 0, void 0, function () {
            var alert_1, obj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //购买服务按钮
                        if (this.appmin.islogin()) {
                            //已经登录
                        }
                        else {
                            //没有登录
                            // let modal = this.modalCtrl.create(login);
                            // modal.present();
                            this.tologin();
                            return [2 /*return*/];
                        }
                        if (!(this.appmin.getUserid() == this.toUserId.toString())) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: '',
                                subHeader: '不能购买自己的服务',
                                buttons: ['确定']
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3:
                        obj = {
                            touserid: touserid,
                            serviceid: this.select_service_id
                        };
                        //  this.navCtrl.push(BuyServicePage, obj);
                        this.router.navigate(['buy-service'], { queryParams: obj });
                        return [2 /*return*/];
                }
            });
        });
    };
    ConsultantPage.prototype.setzongtipingjia = function (zixunpingfen) {
        //设置总体评价
        // console.log('zixunpingfen='+zixunpingfen)
        var avg = zixunpingfen;
        var c = avg / 2;
        c = c / 100;
        // console.log('c=' + c)
        var imgs = [];
        if (c >= 0.1) {
            imgs.push('assets/img/xing1.png');
            //  window.document.getElementById("xx1").src=('assets/img/xing1.png');
        }
        if (c >= 0.2) {
            imgs.push('assets/img/xing1.png');
            //   window.document.getElementById("xx2").src=('assets/img/xing1.png');
        }
        if (c >= 0.3) {
            imgs.push('assets/img/xing1.png');
            // window.document.getElementById("xx3").src=('assets/img/xing1.png');
        }
        if (c >= 0.4) {
            imgs.push('assets/img/xing1.png');
            // window.document.getElementById("xx4").src=('assets/img/xing1.png');
        }
        if (c >= 0.49) {
            imgs.push('assets/img/xing1.png');
            // window.document.getElementById("xx5").src=('assets/img/xing1.png');
        }
        for (var i = 0; i < 5 - imgs.length; i++) {
            imgs.push('assets/img/xing.png');
            i = i - 1;
        }
        this.xingimgs = imgs;
        //  console.log('this.xingimgs='+this.xingimgs)
    };
    ConsultantPage.prototype.service_select = function (obj, objid) {
        //服务列表单击事件
        jquery__WEBPACK_IMPORTED_MODULE_12__('.listobj_f .serviceF').removeClass('serviceF_select');
        jquery__WEBPACK_IMPORTED_MODULE_12__(obj).closest('.serviceF').addClass('serviceF_select');
        // alert("objid="+objid)
        this.select_service_id = objid;
        // alert( $(obj).closest('.serviceF'));
    };
    ConsultantPage.prototype.addpinglun = function () {
        //加载评论
        var obj = {
            type: 'addpinglun',
            objUserId: this.toUserId
        };
    };
    ConsultantPage.prototype.setBq = function (arry) {
        //设置印象标签
        // this.bqArry = null;
        this.bqArry = [];
        var bqArry_sum = arry.length;
        if (bqArry_sum > 3) {
            for (var i = 0; i < 3; i++) {
                this.bqArry.push(arry[i]);
            }
        }
        else {
            this.bqArry = arry;
        }
        this.bqlist = arry;
    };
    ConsultantPage.prototype.dataHandle = function (meg, isShow) {
        if (meg == null)
            return;
        if (meg['type'] == "addObjTxt_ret") {
            //this.storage.set("serviceTxt" + this.toUserId,meg);
            this.DataserviceService.savedata("serviceTxt" + this.toUserId, meg);
            if (isShow) {
            }
            else {
            }
            this.serviceTxt = meg["row"];
            this.userImg = meg["userImg"];
            if (this.userImg == "") {
                this.userImg = "../assets/img/头像.png";
            }
            this.CName = meg["CName"];
            var sex1 = meg["sex"];
            if (sex1 == 1) {
                //女
                this.sex = 'ios-female';
            }
            else {
                //男
                this.sex = 'ios-male';
            }
            this.serviceImg = meg["serviceImg"].split(','); //服务图片列表转数组
            this.beiguanzhu = meg["beiguanzhu"];
            this.serviceTxt = meg["serviceTxt"];
            var c = parseFloat(meg["zixunpingfen"]);
            c = c * 100;
            c = Math.floor(c);
            this.zixunpingfen = c + "%";
            this.setzongtipingjia(c);
            this.zongdingdanliang = meg["zongdingdanliang"];
            //设置咨询评分尺度
            this.saturation_sudu_avg = meg['saturation_sudu_avg'];
            this.saturation_zhiliang_avg = meg['saturation_zhiliang_avg'];
            this.saturation_taidu_avg = meg['saturation_taidu_avg'];
            this.saturation_sudu_avg_ = this.saturation_sudu_avg + '%';
            this.saturation_zhiliang_avg_ = this.saturation_zhiliang_avg + '%';
            this.saturation_taidu_avg_ = this.saturation_taidu_avg + '%';
            this.serviceList = meg["serviceList"].rows;
            this.select_service_id = meg['serviceList']['rows'][0]['serviceId'] + 'px';
            this.isFollow = meg["isFollow"];
            this.userRating = meg['userRating']['rows'];
            this.userRatingCoun = this.userRating.length;
            var count = this.userRating.length;
            this.Skill = meg['Skill']; //咨询方式排阵
            this.Experience = meg['Experience']; //从业经历
            if (count == 0) {
                //没有更多评论
                this.addUserRatingEnd = false; //终止加载评论
            }
            else {
            }
            if (this.userRating.length > 0) {
                //存在用户评论
                this.isShowUserRating = false;
                this.RatingLitim = this.userRating.length;
            }
            else {
                //没有用户评论
                this.isShowUserRating = true;
            }
            this.setBq(meg['bq']);
            //设置咨询师所在地
            var ad = meg['city'];
            var da = ad.split(",");
            if (da.length >= 3) {
                da.pop();
            }
            var dc = void 0;
            dc = da.join(',');
            this.userCity = dc;
        }
        if (meg['type'] == "addUserRating_ret") {
            var count = meg['rows'].length;
            if (count == 0) {
                //没有更多评论
                this.addUserRatingEnd = false; //终止加载评论
            }
            else {
            }
            this.RatingLitim += count;
            for (var i = 0; i < count; i++) {
                this.userRating.push(meg['rows'][i]);
            }
        }
        if (meg['type'] == 'ret_setUpFollow') {
            if (this.isFollow) {
                //已经关注
                this.isFollow = false;
            }
            else {
                this.isFollow = true;
            }
        }
        if (meg["type"] == "addObjResume_ret") {
            // console.log(JSON.stringify(meg));
            this.WorkingYears = meg['WorkingYears'];
            this.experience = meg['experience'];
            this.GoodAtCategory = meg['GoodAtCategory'];
            this.tarotType = meg['tarotType'];
        }
    };
    ConsultantPage.prototype.addObjResume = function (objid) {
        //获取咨询师履历
        var obj = {
            type: "addObjResume",
            userId: objid,
        };
        this.send(JSON.stringify(obj));
    };
    ConsultantPage.prototype.sendleter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert_2, obj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //跳转到私信页面
                        if (this.appmin.islogin()) {
                            //已经登录
                        }
                        else {
                            //没有登录
                            // let modal = this.modalCtrl.create(login);
                            // modal.present();
                            this.tologin();
                            return [2 /*return*/];
                        }
                        if (!(this.appmin.getUserid() == this.toUserId.toString())) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: '',
                                subHeader: '不能私信自己',
                                buttons: ['确定']
                            })];
                    case 1:
                        alert_2 = _a.sent();
                        return [4 /*yield*/, alert_2.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        obj = {
                            toUserId: this.toUserId,
                            CName: this.CName,
                            UserImgUrl: this.userImg
                        };
                        //  this.navCtrl.push(ConsultTimePage, obj, null);
                        this.router.navigate(['consult-time'], { queryParams: obj });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ConsultantPage.prototype.doInfinite = function (infiniteScroll) {
        //console.log('doInfinite');
        this.addUserRating(); //刷新评论
        setTimeout(function () {
            infiniteScroll.target.complete();
        }, 1000);
    };
    ConsultantPage.prototype.addUserRating = function () {
        var obj = {
            type: 'addUserRating',
            toUserId: this.toUserId,
            litim: this.RatingLitim
        };
        this.send(JSON.stringify(obj));
    };
    ConsultantPage.prototype.doRefresh = function (refresher) {
        //下拉刷新
        this.addObjTxt(this.toUserId);
        if (this.addUserRatingEnd == false) {
            //没有更多评论 终止加载
            refresher.complete();
            return;
        }
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    ConsultantPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consultant',
            template: __webpack_require__(/*! ./consultant.page.html */ "./src/app/consultant/consultant.page.html"),
            styles: [__webpack_require__(/*! ./consultant.page.scss */ "./src/app/consultant/consultant.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _ionic_native_qqsdk_ngx__WEBPACK_IMPORTED_MODULE_11__["QQSDK"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_10__["ClipboardService"], _ionic_native_wechat_ngx__WEBPACK_IMPORTED_MODULE_9__["Wechat"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _dataservice_service__WEBPACK_IMPORTED_MODULE_8__["DataserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _core__WEBPACK_IMPORTED_MODULE_2__["AppMin"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_4__["Toast"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], ConsultantPage);
    return ConsultantPage;
}());



/***/ })

}]);
//# sourceMappingURL=consultant-consultant-module.js.map