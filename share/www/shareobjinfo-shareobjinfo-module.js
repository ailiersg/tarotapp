(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shareobjinfo-shareobjinfo-module"],{

/***/ "./src/app/shareobjinfo/shareobjinfo.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/shareobjinfo/shareobjinfo.module.ts ***!
  \*****************************************************/
/*! exports provided: ShareobjinfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareobjinfoPageModule", function() { return ShareobjinfoPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shareobjinfo_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shareobjinfo.page */ "./src/app/shareobjinfo/shareobjinfo.page.ts");
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
        component: _shareobjinfo_page__WEBPACK_IMPORTED_MODULE_5__["ShareobjinfoPage"]
    }
];
var ShareobjinfoPageModule = /** @class */ (function () {
    function ShareobjinfoPageModule() {
    }
    ShareobjinfoPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                ng_zorro_antd_mobile__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdMobileModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_shareobjinfo_page__WEBPACK_IMPORTED_MODULE_5__["ShareobjinfoPage"]]
        })
    ], ShareobjinfoPageModule);
    return ShareobjinfoPageModule;
}());



/***/ }),

/***/ "./src/app/shareobjinfo/shareobjinfo.page.html":
/*!*****************************************************!*\
  !*** ./src/app/shareobjinfo/shareobjinfo.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border mode=\"ios\">\n    <div>\n  \n      <div id='jb111' class=\" show_style header1 header-navigation\" [ngStyle]=\"currentStyles\">\n        <ion-row align-items-center>\n          <ion-col align-self-center>\n            <!-- <ion-icon [ngStyle]=\"currentStyles_back\" tappable (click)=\"likai()\" style=\"font-size:2.3rem;padding:8px 16px\"\n              name=\"ios-arrow-back\"></ion-icon> -->\n          </ion-col>\n          <ion-col align-self-center>\n            <p id='jb111_p' style=\"font-size:1.7rem;color:#333333;margin:0px;padding:0px; text-align: center;\"\n              [ngStyle]=\"currentStyles_title\">\n              {{CName}}</p>\n          </ion-col>\n          <ion-col align-self-center style=\"text-align: right;padding-right: 15px;\">\n            <ion-icon [ngStyle]=\"currentStyles_back\" tappable (click)=\"showshare()\" style=\"font-size:2.3rem;\" mode=\"ios\"\n              name=\"more\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </ion-header>\n  \n  \n  \n  \n  \n  \n  <ion-content id=\"consultant_content\" #content1 (ionScroll)=\"ionScroll($event)\" fullscreen=\"true\" scroll-events=\"true\"\n    style='background: rgb(245, 245, 249) none repeat scroll 0% 0%;'>\n  \n   \n  \n  \n    <div>\n      <div style='border-bottom-left-radius: 15px;border-bottom-right-radius: 15px;background:#fff;position: absolute;\n        top: 0px;\n        left: 0;\n        right: 0;'>\n  \n        <div style=\"position: relative;width:100%;height:17.5rem;box-shadow: 5px 0px 5px 5px #eee;\">\n          <div>\n            <div>\n              <img [src]=\"serviceImg\" width=\"100%\" height=\"100%\"\n                style=\"width: 100%;height: 17.5rem;border-bottom-left-radius: 25px 5px;border-bottom-right-radius: 25px 5px;\">\n            </div>\n          </div>\n  \n  \n        </div>\n  \n        <div class=\"user_s_f\">\n          <div class=\"cl\" style=\"display: flex;\n          align-items: flex-start;\">\n            <div class=\"\" style=\"     flex: 0 0 auto;\">\n              <div class=\"img_f\" style=\"position: relative\">\n                <img class=\"toux_img \" src=\"{{userImg}}\" />\n                <!-- [ngStyle]=\"{'background-color':sex === 'zxc' ? 'green' : 'red' }\" -->\n                <div class=\"toux_img_bq \" [ngStyle]=\"{'background-color':sex === 'ios-male' ? '#91b3d4' : '' }\">\n                  <ion-icon name=\"{{sex}}\"></ion-icon>\n                </div>\n              </div>\n            </div>\n            <div class=\"\" style=\"margin-left: 1rem;      flex: 1 1 auto;\">\n              <div class=\"cl\">\n                <div class=\"\" style=\"    position: relative;\">\n                  <p style=\"font-size:1.75rem;margin:0px;color:#333333;\">{{CName}}</p>\n                  <div class=\"\" style=\"    position: absolute;right: 0px;top:0\">\n                    <ion-icon name=\"heart-empty\" *ngIf=\"isFollow == false\" (click)=\"setUpFollow('set')\"\n                      style=\"font-size: 2rem;color:#f778af\"></ion-icon>\n                    <ion-icon name=\"heart\" *ngIf=\"isFollow == true\" (click)=\"setUpFollow('cancel')\"\n                      style=\"font-size: 2rem;color:#f778af\"></ion-icon>\n                    <!-- <ion-button class=\"foll-btn\" *ngIf=\"isFollow == false\" (click)=\"setUpFollow('set')\" color=\"primary\"\n                      size=\"small\"> 关注</ion-button>\n                    <ion-button class=\"foll-btn\" *ngIf=\"isFollow == true\" (click)=\"setUpFollow('cancel')\" color=\"secondary\"\n                      size=\"small\"> 已关注</ion-button> -->\n  \n                  </div>\n                </div>\n                <div class=\"\" style=\"padding-top: 0.2rem;display: inline-flex;\">\n                  <ion-icon ios=\"ios-pin\" md=\"md-pin\" style=\"color: #888888;font-size: 1.5rem\"></ion-icon>\n                  <small style=\"font-size:1.3rem;color:#999999;margin-left: 0.1rem;\">{{userCity}}</small>\n                </div>\n  \n  \n              </div>\n              <div>\n                <div class=\"ion-badge_f\">\n  \n                  <ion-badge *ngFor='let bqitem of bqArry' color=\"button3\" class=\"bq\" item-end>{{bqitem.txt}}</ion-badge>\n                  <!-- <ion-badge  color=\"button3\" class=\"bq\" item-end>小姐姐</ion-badge>\n                    <ion-badge  color=\"button3\" class=\"bq\" item-end>准确</ion-badge> -->\n                </div>\n              </div>\n            </div>\n  \n          </div>\n  \n  \n          <ion-row style=\"text-align:center\">\n            <ion-col padding col-4>\n              <div>\n                <span class=\"xinxitongji_span\">{{zongdingdanliang}}</span>\n              </div>\n              <div class=\"xinxitongji_p_f\">\n                <span class=\"xinxitongji_p\">\n                  <img style=\"width: 1.1em; vertical-align: middle;   margin-bottom: 3px;margin-right: 3px;\"\n                    src=\"assets/img/iconfont-占卜1.png\">占卜</span>\n  \n  \n              </div>\n            </ion-col>\n            <ion-col padding col-4>\n  \n              <div>\n                <span class=\"xinxitongji_span\">{{beiguanzhu}}</span>\n              </div>\n              <div class=\"xinxitongji_p_f\">\n  \n                <span class=\"xinxitongji_p\">\n                  <img style=\"width: 1.1em; vertical-align: middle;   margin-bottom: 3px;margin-right: 3px;\"\n                    src=\"assets/img/xin1.png\">关注</span>\n              </div>\n  \n            </ion-col>\n            <ion-col padding col-4>\n              <div>\n                <span class=\"xinxitongji_span\">{{zixunpingfen}}</span>\n              </div>\n              <div class=\"xinxitongji_p_f\">\n                <span class=\"xinxitongji_p\">\n                  <img src=\"assets/img/pinglun.png\" style=\"width: 1.1em; vertical-align: middle;   margin-bottom: 3px;\">\n                  评分\n                </span>\n              </div>\n            </ion-col>\n          </ion-row>\n  \n  \n  \n        </div>\n  \n  \n        <div>\n        </div>\n      </div>\n      <div\n        style=\"box-shadow: 2px 2px 2px #eee;padding:10px;padding-left:15px;padding-right:15px;background:#fff;padding-top: 22rem;margin-top: 20px;width: 100%;width: 100%;min-height: 30rem;\">\n        <p style=\"margin-top:0px;font-size: 1.6rem;color: #333333;\">\n          <img src='assets/img/订单3.png' style=\"vertical-align:middle;width: 2.2rem;height: 2.2rem;\" (click)=\"testTo()\">\n          自我介绍\n        </p>\n  \n        <!-- 分割线 -->\n        <div style=\"border-bottom: 1px solid rgb(243, 243, 243);    margin: 0px 5px;\">\n        </div>\n  \n        <ion-row style=\"padding:0px 0px 0px 0px;\">\n          <ion-col style=\"color: #666666;padding-bottom:0.8rem;font-size:1.6rem;padding-top: 0.8rem;\">\n  \n            {{serviceTxt}}\n          </ion-col>\n        </ion-row>\n  \n      </div>\n  \n  \n  \n  \n  \n      <!--服务内容-->\n  \n      <div style=\"box-shadow: 2px 2px 2px #eee;margin-top:10px;padding-bottom:10px;background: #fff;padding-top:15px;\">\n        <p style=\"margin-left:10px;margin-top:0px;font-size: 1.6rem;color: #333333;\">\n          <img src='assets/img/咨询项目2.png' style=\"vertical-align:middle;width: 2.2rem;height: 2.2rem;\"> 占卜服务\n        </p>\n        <!-- 分割线 -->\n        <div style=\"border-bottom: 1px solid rgb(243, 243, 243);    margin: 0px 15px;\"></div>\n  \n  \n        <DIV class=\"listobj_f\">\n          <div class=\"serviceF\" *ngFor=\"let item of serviceList\">\n            <ion-row class=\"row_top\" (click)=\"service_select($event.target,item.serviceId)\">\n              <ion-col col-8 class=\"col_title_l\">\n                <p>{{item.serviceName}}</p>\n              </ion-col>\n  \n              <ion-col col-4 class=\"col_title_r\">\n                <p class=\"money_p\">￥{{item.serviceMoney}}</p>\n              </ion-col>\n            </ion-row>\n            <div class=\"con_col\" (click)=\"service_select($event.target,item.serviceId)\">\n              {{item.serviceText}}\n            </div>\n  \n            <ion-row class=\"col_b\">\n              <ion-col class=\"cl\">\n                <span class=\"sp1\">好评:90%</span>\n                <span class=\"sp2\"> 服务次数:{{item.serviceCount}}</span>\n                <div style=\"display: inline-block;\" class=\"fr\" (click)=\"on_showServerText(item.serviceText)\">\n                  <span style=\"color:#666666;font-size: 1.3rem\">详情</span>\n                  <ion-icon name=\"md-arrow-dropdown\" style=\"color:#999999\"></ion-icon>\n                </div>\n              </ion-col>\n            </ion-row>\n          </div>\n  \n  \n        </DIV>\n  \n      </div>\n      <!--服务内容结束-->\n  \n  \n      <!-- 咨询师履历 -->\n      <div style=\"box-shadow: 2px 2px 2px #eee;margin-top:10px;padding-bottom:10px;background: #fff;padding-top:15px;\">\n        <p style=\"margin-left:10px;margin-top:0px;font-size: 1.6rem;color: #333333;\">\n          <img src='assets/img/信息披露.png' style=\"vertical-align:middle;width: 2.1rem;\"> 我的履历\n        </p>\n        <!-- 分割线 -->\n        <div style=\"border-bottom: 1px solid rgb(243, 243, 243);margin: 0px 15px;\"></div>\n        <div class=\"jianjie_\">\n          <div></div>\n          <p class=\"list\">\n            入驻时长：\n            <span class=\"val\">{{WorkingYears}}</span>\n          </p>\n          <p class=\"list\">占卜方式/排阵：\n            <span class=\"val\">{{tarotType}}</span>\n          </p>\n          <p class=\"list\">擅长方向：\n            <span class=\"val\">{{GoodAtCategory}}</span>\n          </p>\n          <p class=\"list\">占卜经历：\n            <span class=\"val\">{{experience}}</span>\n          </p>\n        </div>\n      </div>\n      <!-- 咨询师履历结束 -->\n  \n  \n      <!-- 评价统计开始 -->\n  \n      <div style=\"box-shadow: 2px 2px 2px #eee;margin-top:10px;background:#fff;padding-top:15px;padding-bottom:18px\"\n        class=\"ztpj_f\">\n        <p style=\"font-size: 1.6rem;margin-top: 0px;color: #333333;\">\n          <img src='assets/img/评价2.png' width=\"20\" height=\"20\" style=\"vertical-align:middle;margin-right: 5px;\">总体评价\n        </p>\n        <!-- 分割线 -->\n        <div style=\"border-bottom: 1px solid rgb(243, 243, 243); margin: 0px 5px;\">\n        </div>\n  \n        <div>\n  \n          <div class=\"xing_img_f\">\n            <img *ngFor='let i of  xingimgs' [src]=\"i\">\n  \n          </div>\n  \n          <div style=\"text-align: center\" class=\"pf_f\">\n            <div style=\"display: inline-block\">\n              <span>服务质量</span>\n              <span>{{saturation_zhiliang_avg == 0.0 ? 5:saturation_zhiliang_avg}}分</span>\n            </div>\n            <div style=\"display: inline-block\">\n              <span>服务态度</span>\n              <span>{{saturation_taidu_avg == 0.0 ? 5:saturation_taidu_avg}}分</span>\n            </div>\n            <div style=\"display: inline-block\">\n              <span>回复速度</span>\n              <span>{{saturation_sudu_avg == 0.0 ? 5:saturation_sudu_avg}}分</span>\n            </div>\n          </div>\n  \n          <div class=\"pjbq\">\n            <div class=\"pjbq_b\" *ngFor=\"let bqlist1 of bqlist\">\n              <span>{{bqlist1.txt}}</span>\n              <span>({{bqlist1.sum}})</span>\n            </div>\n  \n          </div>\n        </div>\n  \n        <div>\n          <div class=\"pl_list_f\">\n            <div class=\".cl xux_f\" style=\"height: 25px;\">\n              <div class=\"xux_l \">\n  \n              </div>\n              <div class=\"xux_txt \">\n                \b\b精华评价\n              </div>\n              <div class=\"xux_r \">\n  \n              </div>\n            </div>\n            <div *ngIf=\"isShowUserRating\" style=\"text-align: center;color: #666;\">\n              <p>暂时没有评价 ╮(╯_╰)╭</p>\n            </div>\n  \n            <div class=\"pl_list_d_f\">\n              <div class=\"pl_list_d\" *ngFor=\"let item of userRating\">\n                <div class=\"top cl\">\n                  <div class=\"img fl\">\n                    <img src=\"{{item.UserImgUrl}}\" width=\"1.4em\">\n                  </div>\n                  <div class=\"user_info fl\">\n                    <div class=\"user_info_top\">\n                      <div class=\"name\">{{item.CName}}</div>\n                      <div class=\"pj\">\n                        <img class=\"pl_img\" src=\"?\" (error)=\"setPjimg($event.target,item.imglist[0])\">\n                        <img class=\"pl_img\" src=\"?\" (error)=\"setPjimg($event.target,item.imglist[1])\">\n                        <img class=\"pl_img\" src=\"?\" (error)=\"setPjimg($event.target,item.imglist[2])\">\n                        <img class=\"pl_img\" src=\"?\" (error)=\"setPjimg($event.target,item.imglist[3])\">\n                        <img class=\"pl_img\" src=\"?\" (error)=\"setPjimg($event.target,item.imglist[4])\">\n                      </div>\n                    </div>\n                    <div class=\"user_info_bottom\">\n                      <div class=\"date\">\n                        <span>{{item.rntingData}}</span>\n                      </div>\n                      <div class=\"buy_server_name\">\n                        购买:\n                        <span>{{item.BuyserviceName}}</span>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"info_select fr\">\n                    <ion-icon name=\"more\" style=\"color:#999999\"></ion-icon>\n                  </div>\n                </div>\n                <div class=\"middle\">\n                  <p>{{item.rntingTxt}}</p>\n                </div>\n  \n              </div>\n  \n            </div>\n  \n          </div>\n        </div>\n  \n  \n      </div>\n  \n  \n      <!-- 评价统计结束 -->\n  \n  \n    </div>\n  \n  \n  \n    <ion-infinite-scroll *ngIf=\"addUserRatingEnd\" (ionInfinite)=\"doInfinite($event)\">\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"加载中...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  \n  \n  \n  \n  \n  \n  \n  \n  </ion-content>\n  \n  <ion-footer mode=\"ios\" *ngIf=\"!isShareWebPage\">\n    <div style=\"bottom:0px;position:fixed;width:100%;z-index:10\">\n      <ion-row style=\"padding:0px;height:100%;border-top: 1px solid #eee;\">\n   \n        <ion-col style=\"padding:0px;height:100%\" size='12'>\n  \n          <!-- <button color=\"button2\" (click)=\"buyService(toUserId)\" ion-button full\n            style=\"margin:0px;height:100%;color:#fff;background-color: rgba(143, 166, 198, 1);border-bottom: 1px solid rgb(177, 177, 177);\">立即占卜</button> -->\n  \n          <ion-button mode=\"ios\" expand='full' color=\"secondary\" (click)=\"buyService(toUserId)\">下载app立即占卜</ion-button>\n  \n        </ion-col>\n      </ion-row>\n    </div>\n    <div style=\"    clear: both;\"> </div>\n  \n  </ion-footer>\n  \n  \n  <Modal [(ngModel)]=\"shareState\" [popup]=\"true\" [animationType]=\"'slide-up'\" platform=\"ios\">\n  \n    <div style=\"    padding-top: 2rem;\">\n      <Flex justify=\"around\">\n        <!-- <div class=\"share_img_coat\" (click)=\"share_qq_click()\">\n              <img class=\"share_img\" src=\"../assets/img/qq.png\" alt=\"\">\n              <div><span class=\"title\">分享到QQ</span></div>\n            </div> -->\n        <div class=\"share_img_coat\" (click)=\"share_link_click()\">\n          <img class=\"share_img\" src=\"../assets/img/link.png\" alt=\"\">\n          <div><span class=\"title\">复制链接</span></div>\n        </div>\n        <div class=\"share_img_coat\"> <img class=\"share_img\" (click)=\"share_weixin_click()\" src=\"../assets/img/weixin.png\"\n            alt=\"\">\n          <div> <span class=\"title\">分享到微信</span></div>\n        </div>\n      </Flex>\n    </div>\n  \n    <div Button style=\"    background: #f5f5f5;\n        color: #333333;\n        height: 3.5rem;\n        line-height: 3.5rem;\n        margin-right: .5rem;\n        text-align: center;\n        margin: 0px auto;\n        width: 90%;\n        margin-top: 2rem;\n        margin-bottom: 1rem;font-size: 1.4rem;\" (onClick)=\"closeShare()\">取消</div>\n  </Modal>"

/***/ }),

/***/ "./src/app/shareobjinfo/shareobjinfo.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/shareobjinfo/shareobjinfo.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-footer ion-button {\n  margin: 0px; }\n\n.six_btn {\n  --color:#666666;\n  --background:#ffffff;\n  --background-activated:#ffffff;\n  --color-activated:#666666; }\n\nion-toolbar {\n  --background:transparent;\n  --border-color:#ffffff\n  ; }\n\n#consultant_content .swiper-container {\n  border-bottom-left-radius: 34px 10px !important;\n  border-bottom-right-radius: 34px 10px !important;\n  border-bottom: solid 3px #e8effa; }\n\nion-header {\n  box-shadow: 0px 0px 0px 0px transparent !important; }\n\n.foll-btn {\n  --padding-start:0.5rem;\n  --padding-end:0.5rem;\n  --padding-bottom:0.1rem;\n  --padding-top:0.1rem; }\n\n.placeholder {\n  background-color: #ebebef;\n  color: #bbb;\n  text-align: center;\n  height: 30px;\n  line-height: 30px;\n  width: 100%; }\n\n.share_img_coat .title {\n  font-size: 1.2rem;\n  color: #666666; }\n\n.share_img_coat {\n  text-align: center; }\n\n.share_img {\n  width: 5rem;\n  height: 5rem; }\n\n.user_s_f {\n  width: 94%;\n  padding: 10px;\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 2px 8px 15px -8px #eee;\n  position: absolute;\n  top: 12rem;\n  z-index: 2;\n  left: 0;\n  right: 0;\n  margin: 0px auto;\n  padding-bottom: 0px; }\n\n.user_s_f ion-col {\n  padding-bottom: 1rem; }\n\n.user_s_f button {\n  font-size: 1.2rem !important;\n  padding: 0rem 0.3rem;\n  height: 1.8em;\n  margin: 0px; }\n\n.img_f {\n  z-index: 1;\n  border-radius: 50%;\n  padding-top: 2px;\n  display: inline-block; }\n\n.toux_img {\n  z-index: 999;\n  border-radius: 50%;\n  width: 4.9rem;\n  height: 4.9rem; }\n\n.toux_img_bq {\n  position: absolute;\n  background-color: #ff6dc1;\n  text-align: center;\n  width: 1.7rem;\n  height: 1.7rem;\n  line-height: 2rem;\n  border-radius: 50%;\n  right: 0rem;\n  bottom: 0rem; }\n\n.toux_img_bq ion-icon {\n  color: #FFFFFF;\n  font-size: 0.9em;\n  font-weight: 900; }\n\n.scroll-content {\n  padding-top: 0px !important; }\n\n.sex_ion {\n  font-size: 0.9em;\n  font-weight: 300; }\n\n.sex_ion2 {\n  font-size: 0.9em;\n  font-weight: 300; }\n\n.sex_bac {\n  background: #91b3d4; }\n\n.xinxitongji_span {\n  font-family: Georgia;\n  font-size: 2.35rem;\n  color: #333333; }\n\n.xinxitongji_p_f {\n  margin-top: 10px; }\n\n.xinxitongji_p {\n  margin: 0px;\n  padding: 0px;\n  margin-top: 5px;\n  text-align: center;\n  color: #666666;\n  font-size: 1.6rem; }\n\nion-header ion-icon {\n  color: #fff;\n  transition: color 0.3s;\n  transition: border 0.4s; }\n\n.header1 {\n  transition: background 0.3s; }\n\n.bq {\n  color: #fff;\n  border-radius: 20px;\n  vertical-align: middle;\n  padding: 0.3rem 0.5rem;\n  font-size: 1.1rem;\n  margin-left: 0.2rem;\n  background: #0cd1e8; }\n\npage-consultant {\n  background: #454343; }\n\n.ion-badge_f ion-badge {\n  margin-bottom: 0.2rem; }\n\n.ion-badge_f {\n  margin-top: 0.3rem;\n  height: 1.8rem;\n  overflow: hidden; }\n\n.swiper-pagination-bullet-active {\n  background: #fff; }\n\n.serviceF {\n  padding: 8px 10px;\n  border-bottom: 1px solid #eee;\n  -webkit-transform: 0.1s background;\n          transform: 0.1s background;\n  transition: 0.5s left;\n  transition: all 1s;\n  background: #fff;\n  position: relative; }\n\n.serviceF_select .col_title_l p {\n  color: #f36969;\n  transition: color 0.2s; }\n\n.serviceF:active {\n  background: whitesmoke; }\n\n.col_title_l {\n  text-align: left; }\n\n.col_title_l p {\n  color: #333333;\n  font-size: 1.55rem; }\n\n.col_title_r {\n  text-align: right; }\n\n.col_title_r p {\n  font-family: Georgia;\n  font-size: 1.7rem; }\n\n.con_col {\n  padding-bottom: 0.85rem;\n  color: #666666;\n  padding-left: 5px;\n  font-size: 1.45rem; }\n\n.money_p {\n  font-size: 1.3em;\n  font-family: Georgia;\n  color: #e71010; }\n\n.sp1 {\n  padding: 3px 5px;\n  /* border: 1px solid #eee; */\n  border-radius: 30px;\n  background: #f5c3c0;\n  color: #fff;\n  font-size: 1.2rem; }\n\n.sp2 {\n  padding: 3px 5px;\n  /* border: 1px solid #eee; */\n  border-radius: 30px;\n  background: #f9d8ac;\n  color: #fff;\n  font-size: 1.2rem;\n  margin-left: 5px; }\n\n.row_top p {\n  margin-bottom: 5px;\n  margin-top: 0px; }\n\n.name_bq {\n  padding: 1px;\n  border-radius: 1px; }\n\n.listobj_f .serviceF:nth-last-child(1) {\n  border-bottom-width: 0px; }\n\n.tiao {\n  height: 9px;\n  border-radius: 5px;\n  background: #eee; }\n\n.tiao_f {\n  width: 70%;\n  float: left;\n  margin-left: 5px;\n  margin-top: 3px; }\n\n.col_title1 {\n  font-size: 0.9em;\n  color: #666666; }\n\n.tiao_n {\n  height: 9px;\n  border-radius: 5px; }\n\n.tiao_n_count1 {\n  width: 85%; }\n\n.tiao_n_count2 {\n  width: 40%; }\n\n.tiao_n_count3 {\n  width: 100%; }\n\n.pj_item {\n  padding: 0px; }\n\n.ztpj_f {\n  padding: 5px 10px;\n  padding-bottom: 15px; }\n\n.tiao_color3 {\n  background: #b4a0e2; }\n\n.serviceF:last-child {\n  margin-bottom: 0px; }\n\n.xing_img_f {\n  padding: 10px;\n  padding-top: 25px;\n  text-align: center; }\n\n.xing_img_f img {\n  width: 1.7em;\n  margin-right: 2%; }\n\n.pf_f {\n  margin-top: 15px;\n  display: flex; }\n\n.pf_f div {\n  text-align: center;\n  flex: 1; }\n\n.pf_f div span {\n  font-size: 1.3rem; }\n\n.pf_f div span:nth-child(1) {\n  margin-right: 5px;\n  color: #333333; }\n\n.pf_f div span:nth-child(2) {\n  color: red; }\n\n.pjbq {\n  margin-top: 22px; }\n\n.pjbq_b {\n  display: inline-block;\n  padding: 2px 6px;\n  border-radius: 10px;\n  background: #edf2fd;\n  font-size: 1.25rem;\n  margin-right: 3%;\n  margin-bottom: 6%; }\n\n.pjbq_b span {\n  color: #666666; }\n\n.pjbq_b span:nth-child(1) {\n  margin-right: 3px; }\n\n.pl_list_f {\n  margin-bottom: 100px;\n  background: #fff;\n  border-radius: 10px;\n  margin-top: 25px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  box-shadow: 0px -3px 10px #f1f1f1; }\n\n.xux_f {\n  text-align: center; }\n\n.xux_l, .xux_r {\n  display: inline-block;\n  width: 30%;\n  height: 1px;\n  margin-top: 10px;\n  margin-bottom: 4px; }\n\n.xux_l {\n  background: -webkit-linear-gradient(left, #ffffff, #c5c5c5); }\n\n.xux_r {\n  background: -webkit-linear-gradient(left, #c5c5c5, #ffffff); }\n\n.xux_txt {\n  display: inline-block;\n  padding: 0px 5px;\n  color: #333333;\n  font-size: 1.6rem;\n  margin-left: 5%;\n  margin-right: 5%;\n  text-align: center; }\n\n.pl_list_f .pl_img {\n  width: 1em; }\n\n.user_info_bottom {\n  text-align: left;\n  margin-left: 10px; }\n\n.user_info_bottom .date, .buy_server_name {\n  display: inline-block; }\n\n.user_info_bottom div {\n  font-size: 1.3rem;\n  color: #999999; }\n\n.pl_list_d {\n  padding: 15px;\n  border-bottom: 1PX solid #f3f3f3 !important; }\n\n.pl_list_d img {\n  width: 3.8rem;\n  border-radius: 50%; }\n\n.pl_list_d .middle p {\n  font-size: 1.5rem; }\n\n.user_info_top {\n  text-align: left;\n  margin-left: 10px; }\n\n.user_info_top div {\n  display: inline-block; }\n\n.user_info_top .name {\n  font-size: 1.5rem; }\n\n.pl_list_d_f {\n  margin-top: 10px; }\n\n.middle p {\n  color: #555555; }\n\n.user_info_top .pj {\n  margin-left: 5px; }\n\n.info_select ion-icon {\n  font-size: 1.6rem; }\n\n.jianjie_ {\n  padding: 0px 15px; }\n\n.jianjie_ .list {\n  color: #333333;\n  font-size: 1.5rem;\n  margin: 0.8rem 0rem; }\n\n.jianjie_ .list .val {\n  color: #666666;\n  font-size: 1.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZWl5ZS9Eb2N1bWVudHMvbXlhcHAgaW9uaWM0L215QXBwL3NyYy9hcHAvc2hhcmVvYmppbmZvL3NoYXJlb2JqaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxlQUFRO0VBQ1Isb0JBQWE7RUFDYiw4QkFBdUI7RUFDdkIseUJBQWtCLEVBQUE7O0FBRXBCO0VBQ0Usd0JBQWE7RUFDYjtFQUFlLEVBQUE7O0FBR2Y7RUFDRSwrQ0FBK0M7RUFBQyxnREFBaUQ7RUFDakcsZ0NBQXlDLEVBQUE7O0FBRzNDO0VBQ0Usa0RBQWtELEVBQUE7O0FBRXREO0VBQ0Usc0JBQWdCO0VBQ2hCLG9CQUFjO0VBQ2QsdUJBQWlCO0VBQ2pCLG9CQUFjLEVBQUE7O0FBRWhCO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBRWI7RUFDRSxpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUVoQjtFQUVFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRVo7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtFQUNWLE9BQU87RUFDUCxRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLG9CQUFtQixFQUFBOztBQUVyQjtFQUNFLDRCQUE0QjtFQUM1QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFVBQVM7RUFBQyxrQkFBaUI7RUFBQyxnQkFBZ0I7RUFDNUMscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0EsWUFBWTtFQUNaLGtCQUFpQjtFQUNqQixhQUFhO0VBQUMsY0FBYyxFQUFBOztBQUc1QjtFQUNFLGtCQUFrQjtFQUFDLHlCQUF5QjtFQUM1QyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFZDtFQUNFLGNBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBSWxCO0VBQ0UsMkJBQTJCLEVBQUE7O0FBRS9CO0VBRUUsZ0JBQWU7RUFBQyxnQkFDbEIsRUFBQTs7QUFDQTtFQUVFLGdCQUFlO0VBQUMsZ0JBQ2xCLEVBQUE7O0FBQ0E7RUFDRSxtQkFBbUIsRUFBQTs7QUFFbkI7RUFFRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTs7QUFFbEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFaEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUtmO0VBQ0UsV0FBVTtFQUNWLHNCQUFxQjtFQUNyQix1QkFBc0IsRUFBQTs7QUFLdEI7RUFBVSwyQkFBMkIsRUFBQTs7QUFXckM7RUFDRSxXQUFVO0VBQ1YsbUJBQWtCO0VBQ2xCLHNCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQkFFRixFQUFBOztBQUNBO0VBQ0UsbUJBQWtCLEVBQUE7O0FBR3BCO0VBQ0UscUJBQXFCLEVBQUE7O0FBRS9CO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFHVjtFQUVFLGdCQUFlLEVBQUE7O0FBS2pCO0VBQ0UsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUd2QyxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQixrQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUtWO0VBQ0UsY0FBYztFQUNkLHNCQUFxQixFQUFBOztBQUd2QjtFQUNFLHNCQUE2QixFQUFBOztBQUcvQjtFQUNFLGdCQUFnQixFQUFBOztBQUtsQjtFQUNFLGNBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBSXBCO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixjQUFhLEVBQUE7O0FBR2Y7RUFDRSxnQkFBZ0I7RUFDdEIsNEJBQUE7RUFDQSxtQkFBbUI7RUFDbkIsbUJBQTRCO0VBQzVCLFdBQVc7RUFDWCxpQkFBaUIsRUFBQTs7QUFHYjtFQUNFLGdCQUFnQjtFQUNoQiw0QkFBQTtFQUNBLG1CQUFtQjtFQUNuQixtQkFBNEI7RUFDNUIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDUixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUVQO0VBQ0UsWUFBWTtFQUVaLGtCQUFrQixFQUFBOztBQU1wQjtFQUNFLHdCQUF3QixFQUFBOztBQU1sQztFQUVFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsVUFBVTtFQUVWLFdBQVc7RUFFWCxnQkFBZ0I7RUFFaEIsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBRWhCO0VBR0UsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLFVBQVUsRUFBQTs7QUFFWjtFQUNFLFVBQVUsRUFBQTs7QUFFWjtFQUNFLFdBQVcsRUFBQTs7QUFFYjtFQUNBLFlBQVksRUFBQTs7QUFHWjtFQUFTLGlCQUFpQjtFQUFDLG9CQUFvQixFQUFBOztBQU8vQztFQUNFLG1CQUFrQixFQUFBOztBQUVwQjtFQUNFLGtCQUFrQixFQUFBOztBQUlwQjtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7O0FBRWY7RUFDRSxrQkFBaUI7RUFDakIsT0FBTyxFQUFBOztBQUVUO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0EsaUJBQWlCO0VBQ2pCLGNBRUEsRUFBQTs7QUFDQTtFQUNFLFVBQVMsRUFBQTs7QUFHWDtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUE0QjtFQUM5QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUdqQjtFQUNBLGNBQWMsRUFBQTs7QUFHZDtFQUNFLGlCQUFpQixFQUFBOztBQU1uQjtFQUNBLG9CQUFvQjtFQUNwQixnQkFBZTtFQUNmLG1CQUFtQjtFQUFDLGdCQUFlO0VBQUMsaUJBQWdCO0VBQUMsb0JBQW9CO0VBQ3pFLGlDQUEyQyxFQUFBOztBQUkzQztFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSwyREFBeUQsRUFBQTs7QUFFM0Q7RUFDRSwyREFBeUQsRUFBQTs7QUFFM0Q7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGNBQWE7RUFDYixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFJcEI7RUFDRSxVQUFVLEVBQUE7O0FBRVo7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBSW5CO0VBQ0MscUJBQXFCLEVBQUE7O0FBR3RCO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxhQUFhO0VBQ2IsMkNBQXNELEVBQUE7O0FBRXhEO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQVUsaUJBQWlCLEVBQUE7O0FBQzNCO0VBQ0EsY0FBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFFbkI7RUFDQSxjQUFhO0VBQ2IsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZW9iamluZm8vc2hhcmVvYmppbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWZvb3RlciBpb24tYnV0dG9ue1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG4gIC5zaXhfYnRue1xuICAgIC0tY29sb3I6IzY2NjY2NjtcbiAgICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNmZmZmZmY7XG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6IzY2NjY2NjtcbiAgfVxuICBpb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItY29sb3I6I2ZmZmZmZlxuICB9XG4gIFxuICAgICNjb25zdWx0YW50X2NvbnRlbnQgLnN3aXBlci1jb250YWluZXJ7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzNHB4IDEwcHggIWltcG9ydGFudDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogIDM0cHggMTBweCAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHJnYigyMzIsMjM5LDI1MCk7XG4gICAgfVxuICBcbiAgICBpb24taGVhZGVyIHtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB9XG4gIC5mb2xsLWJ0bntcbiAgICAtLXBhZGRpbmctc3RhcnQ6MC41cmVtO1xuICAgIC0tcGFkZGluZy1lbmQ6MC41cmVtO1xuICAgIC0tcGFkZGluZy1ib3R0b206MC4xcmVtO1xuICAgIC0tcGFkZGluZy10b3A6MC4xcmVtO1xuICB9XG4gIC5wbGFjZWhvbGRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlZjtcbiAgICBjb2xvcjogI2JiYjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5zaGFyZV9pbWdfY29hdCAudGl0bGV7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgY29sb3I6ICM2NjY2NjY7XG4gIH1cbiAgLnNoYXJlX2ltZ19jb2F0e1xuICAgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5zaGFyZV9pbWd7XG4gICAgd2lkdGg6IDVyZW07XG4gICAgaGVpZ2h0OiA1cmVtO1xuICB9XG4gICAgLnVzZXJfc19me1xuICAgICAgd2lkdGg6IDk0JTtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGJveC1zaGFkb3c6IDJweCA4cHggMTVweCAtOHB4ICNlZWU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDEycmVtO1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIH1cbiAgICAudXNlcl9zX2YgaW9uLWNvbHtcbiAgICAgIHBhZGRpbmctYm90dG9tOjFyZW07XG4gICAgfVxuICAgIC51c2VyX3NfZiBidXR0b257XG4gICAgICBmb250LXNpemU6IDEuMnJlbSAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZzogMHJlbSAwLjNyZW07XG4gICAgICBoZWlnaHQ6IDEuOGVtO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuICBcbiAgICAuaW1nX2Z7XG4gICAgICB6LWluZGV4OjE7Ym9yZGVyLXJhZGl1czo1MCU7cGFkZGluZy10b3A6IDJweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gICAgLnRvdXhfaW1ne1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICB3aWR0aDogNC45cmVtO2hlaWdodDogNC45cmVtO1xuICBcbiAgICB9XG4gICAgLnRvdXhfaW1nX2Jxe1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO2JhY2tncm91bmQtY29sb3I6ICNmZjZkYzE7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMS43cmVtO1xuICAgIGhlaWdodDogMS43cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgcmlnaHQ6IDByZW07XG4gICAgICBib3R0b206IDByZW07XG4gICAgfVxuICAgIC50b3V4X2ltZ19icSBpb24taWNvbntcbiAgICAgIGNvbG9yOiNGRkZGRkY7XG4gICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgIC8vbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgIH1cbiAgXG4gICAgLnNjcm9sbC1jb250ZW50IHtcbiAgICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gIC5zZXhfaW9ue1xuICAgLy8gY29sb3I6JGNvbG9yLWJ1dHRvbjE7XG4gICAgZm9udC1zaXplOjAuOWVtO2ZvbnQtd2VpZ2h0OjMwMFxuICB9XG4gIC5zZXhfaW9uMntcbiAgIC8vIGNvbG9yOiRjb2xvci1idXR0b24yO1xuICAgIGZvbnQtc2l6ZTowLjllbTtmb250LXdlaWdodDozMDBcbiAgfVxuICAuc2V4X2JhY3tcbiAgICBiYWNrZ3JvdW5kOiAjOTFiM2Q0O1xuICB9XG4gICAgLnhpbnhpdG9uZ2ppX3NwYW4ge1xuICAgICAvLyBjb2xvcjokY29sb3ItYnV0dG9uMjtcbiAgICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhO1xuICAgICAgZm9udC1zaXplOiAyLjM1cmVtO1xuICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgfVxuICAueGlueGl0b25namlfcF9me1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgICAueGlueGl0b25namlfcCB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgfVxuICBcbiAgXG4gICAgXG4gICAgICAgIGlvbi1oZWFkZXIgaW9uLWljb257XG4gICAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgICB0cmFuc2l0aW9uOmNvbG9yIDAuM3M7XG4gICAgICAgICAgdHJhbnNpdGlvbjpib3JkZXIgMC40cztcbiAgICAgICAgICBcbiAgICAgICAgfVxuICBcbiAgICAgIFxuICAgICAgICAgIC5oZWFkZXIxeyB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3N9XG4gICAgICAgICAgLnNob3dfc3R5bGV7XG4gICAgICAgICAgIC8vIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLDApICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAvL2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICAgIC5zaG93X3N0eWxlIGlvbi1pY29ue1xuICAgICAgICAgICAgLy9jb2xvcjojZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgIFxuICAgICAgICAgIC5icXtcbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjIwcHg7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMC4ycmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzBjZDFlOFxuICBcbiAgICAgICAgICB9XG4gICAgICAgICAgcGFnZS1jb25zdWx0YW50e1xuICAgICAgICAgICAgYmFja2dyb3VuZDojNDU0MzQzO1xuICAgICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICAgIC5pb24tYmFkZ2VfZiBpb24tYmFkZ2V7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XG4gICAgICAgICAgfVxuICAuaW9uLWJhZGdlX2Z7XG4gICAgbWFyZ2luLXRvcDogMC4zcmVtO1xuICAgIGhlaWdodDogMS44cmVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIFxuICB9XG4gICAgICAgICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmV7XG4gICAgICAgICAgICAvL+i9ruWbvuWvvOiIqueCueagt+W8j1xuICAgICAgICAgICAgYmFja2dyb3VuZDojZmZmO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeacjeWKoeW8gOWni1xuICAgICAgIFxuICAgICAgICAgIC5zZXJ2aWNlRiB7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAvLyBtYXJnaW4tdG9wOiA1cHg7XG4gIHRyYW5zZm9ybTogMC4xcyBiYWNrZ3JvdW5kO1xuICB0cmFuc2l0aW9uOiAwLjVzIGxlZnQ7XG4gIHRyYW5zaXRpb246YWxsIDFzO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgXG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICBcbiAgICAgICAgICAuc2VydmljZUZfc2VsZWN0IC5jb2xfdGl0bGVfbCBwe1xuICAgICAgICAgICAgY29sb3I6ICNmMzY5Njk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOmNvbG9yIDAuMnM7XG4gICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZXJ2aWNlRjphY3RpdmV7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOnJnYigyNDUsIDI0NSwgMjQ1KTtcbiAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgLmNvbF90aXRsZV9sIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbF90aXRsZV9sIHB7XG4gICAgICAgICAgICBjb2xvcjojMzMzMzMzO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjU1cmVtO1xuICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAuY29sX3RpdGxlX3J7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbF90aXRsZV9yIHB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogR2VvcmdpYTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbl9jb2x7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC44NXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiM2NjY2NjY7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40NXJlbTtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgLm1vbmV5X3B7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEdlb3JnaWE7XG4gICAgICAgICAgICBjb2xvcjojZTcxMDEwO1xuICAgICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICAgIC5zcDF7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggNXB4O1xuICAgICAgLyogYm9yZGVyOiAxcHggc29saWQgI2VlZTsgKi9cbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ1LDE5NSwxOTIpO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgXG4gICAgICAgICAgfVxuICAgICAgICAgIC5zcDJ7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggNXB4O1xuICAgICAgICAgICAgLyogYm9yZGVyOiAxcHggc29saWQgI2VlZTsgKi9cbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ5LDIxNiwxNzIpO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yb3dfdG9wIHB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmFtZV9icXtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFweDtcbiAgICAgICAgICAgXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3RvYmpfZntcbiAgICAgICAgICAvLyAgYmFja2dyb3VuZDogJGNvbG9yX2J1dHRvbjE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saXN0b2JqX2YgLnNlcnZpY2VGOm50aC1sYXN0LWNoaWxkKDEpe1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMHB4O1xuICAgICAgICAgIH1cbiAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3mnI3liqHnu5PmnZ9cbiAgXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSDor4Tku7fnu5/orqHlvIDlp4sgXG4gIFxuICAudGlhb3tcbiAgIFxuICAgIGhlaWdodDogOXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICB9XG4gIC50aWFvX2Z7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBcbiAgICBmbG9hdDogbGVmdDtcbiAgICBcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIFxuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgfVxuICAuY29sX3RpdGxlMXtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuICB9XG4gIC50aWFvX257XG4gIFxuICAgIFxuICAgIGhlaWdodDogOXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuICAudGlhb19uX2NvdW50MXtcbiAgICB3aWR0aDogODUlO1xuICB9XG4gIC50aWFvX25fY291bnQye1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbiAgLnRpYW9fbl9jb3VudDN7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnBqX2l0ZW17XG4gIHBhZGRpbmc6IDBweDtcbiAgXG4gIH1cbiAgLnp0cGpfZnsgcGFkZGluZzogNXB4IDEwcHg7cGFkZGluZy1ib3R0b206IDE1cHg7fVxuICAudGlhb19jb2xvcjF7XG4gICAvLyBiYWNrZ3JvdW5kOiRjb2xvci1idXR0b24xO1xuICB9XG4gIC50aWFvX2NvbG9yMntcbiAgIC8vIGJhY2tncm91bmQ6JGNvbG9yLWJ1dHRvbjI7XG4gIH1cbiAgLnRpYW9fY29sb3Ize1xuICAgIGJhY2tncm91bmQ6I2I0YTBlMjtcbiAgfVxuICAuc2VydmljZUY6bGFzdC1jaGlsZHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbiAgXG4gIFxuICAueGluZ19pbWdfZntcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAueGluZ19pbWdfZiBpbWd7XG4gICAgd2lkdGg6IDEuN2VtO1xuICAgIG1hcmdpbi1yaWdodDogMiU7XG4gIH1cbiAgLnBmX2Z7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5wZl9mIGRpdntcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBmbGV4OiAxO1xuICB9XG4gIC5wZl9mIGRpdiBzcGFue1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG4gIC5wZl9mIGRpdiBzcGFuOm50aC1jaGlsZCgxKXtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGNvbG9yOiMzMzMzMzNcbiAgXG4gIH1cbiAgLnBmX2YgZGl2IHNwYW46bnRoLWNoaWxkKDIpe1xuICAgIGNvbG9yOnJlZDtcbiAgIFxuICB9XG4gIC5wamJxe1xuICAgIG1hcmdpbi10b3A6IDIycHg7XG4gIFxuICB9XG4gIC5wamJxX2Ige1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAycHggNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiKDIzNywyNDIsMjUzKTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDMlO1xuICBtYXJnaW4tYm90dG9tOiA2JTtcbiAgXG4gIH1cbiAgLnBqYnFfYiBzcGFue1xuICBjb2xvcjogIzY2NjY2NjtcbiAgXG4gIH1cbiAgLnBqYnFfYiBzcGFuOm50aC1jaGlsZCgxKXtcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0g6K+E5Lu357uf6K6h57uT5p2fXG4gIFxuICBcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIOivhOS7t+WIl+ihqOW8gOWni1xuICAucGxfbGlzdF9me1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgYmFja2dyb3VuZDojZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O21hcmdpbi10b3A6MjVweDtwYWRkaW5nLXRvcDoyMHB4O3BhZGRpbmctYm90dG9tOiAyMHB4O1xuICBib3gtc2hhZG93OjBweCAtM3B4IDEwcHggcmdiKDI0MSwgMjQxLCAyNDEpLCAgLyrkuIrovrnpmLTlvbEqLyBcbiAgICAgICAgICBcbiAgICAgICAgXG4gIH1cbiAgLnh1eF9me1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAueHV4X2wsLnh1eF9ye1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICB9XG4gIC54dXhfbHtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCNmZmZmZmYsI2M1YzVjNSk7XG4gIH1cbiAgLnh1eF9ye1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsI2M1YzVjNSwjZmZmZmZmKTtcbiAgfVxuICAueHV4X3R4dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMHB4IDVweDtcbiAgICBjb2xvcjojMzMzMzMzO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgXG4gIC5wbF9saXN0X2YgLnBsX2ltZ3tcbiAgICB3aWR0aDogMWVtO1xuICB9XG4gIC51c2VyX2luZm9fYm90dG9te1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgXG4gIFxuICB9XG4gIC51c2VyX2luZm9fYm90dG9tIC5kYXRlLC5idXlfc2VydmVyX25hbWV7XG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIFxuICB9XG4gIC51c2VyX2luZm9fYm90dG9tIGRpdntcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBjb2xvcjogIzk5OTk5OTtcbiAgfVxuICAucGxfbGlzdF9ke1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMVBYIHNvbGlkIHJnYigyNDMsIDI0MywgMjQzKSAhaW1wb3J0YW50O1xuICB9XG4gIC5wbF9saXN0X2QgaW1ne1xuICAgIHdpZHRoOiAzLjhyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIFxuICB9XG4gIC5wbF9saXN0X2QgLm1pZGRsZSBwe1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC51c2VyX2luZm9fdG9wIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBcbiAgfVxuICAudXNlcl9pbmZvX3RvcCBkaXZ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBcbiAgfVxuICAudXNlcl9pbmZvX3RvcCAubmFtZXtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICBcbiAgLnBsX2xpc3RfZF9me1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICBcbiAgfVxuICAubWlkZGxlIHAge1xuICAgIGNvbG9yOiAjNTU1NTU1O1xuICB9XG4gIFxuICAudXNlcl9pbmZvX3RvcCAucGp7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgfVxuICBcbiAgLmluZm9fc2VsZWN0IGlvbi1pY29ue1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICB9XG4gIFxuICAuamlhbmppZV97cGFkZGluZzogMHB4IDE1cHg7fVxuICAuamlhbmppZV8gLmxpc3Qge1xuICBjb2xvcjojMzMzMzMzO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luOiAwLjhyZW0gMHJlbTtcbiAgfVxuICAuamlhbmppZV8gLmxpc3QgLnZhbHtcbiAgY29sb3I6IzY2NjY2NjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgXG4iXX0= */"

/***/ }),

/***/ "./src/app/shareobjinfo/shareobjinfo.page.ts":
/*!***************************************************!*\
  !*** ./src/app/shareobjinfo/shareobjinfo.page.ts ***!
  \***************************************************/
/*! exports provided: ShareobjinfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareobjinfoPage", function() { return ShareobjinfoPage; });
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













var ShareobjinfoPage = /** @class */ (function () {
    function ShareobjinfoPage(navCtrl, QQSDK, ClipboardService, Wechat, ActivatedRoute, DataserviceService, router, location, appmin, toast, alertCtrl, toastCtrl, modctrl, modalCtrl, loadingCtrl, storage) {
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
        this.isinweixin = false; //是否在微信中打开
        //lastIsLocd:boolean=true;
        this.addUserRatingEnd = true; //评论加载终止符
        this.toUserId = this.ActivatedRoute.snapshot.queryParams['userId'];
        if (this.appmin.GetPhoneMode() != "ios") {
            this.header_class = "header_class";
        }
        else {
            this.header_class = "header_class";
        }
        //  判断是否在微信中打开
        var ua = navigator.userAgent.toLowerCase();
        var isWeixin = ua.indexOf('micromessenger') != -1;
        if (isWeixin) {
            alert("在微信中打开");
            this.isinweixin = true;
        }
        else {
        }
    }
    ;
    ShareobjinfoPage.prototype.showshare = function () {
        //分享弹框
        this.shareState = true;
    };
    ShareobjinfoPage.prototype.closeShare = function () {
        //关闭弹框
        this.shareState = false;
    };
    ShareobjinfoPage.prototype.share_qq_click = function () {
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
    ShareobjinfoPage.prototype.share_link_click = function () {
        console.log("link");
        this.shareState = false;
        this.ClipboardService.copyFromContent("http://test.com");
        this.show_toastCtrl("已复制好，请粘贴。\(^o^)/~");
    };
    ShareobjinfoPage.prototype.share_weixin_click = function () {
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
                    webpageUrl: "https://youzan.github.io/vant/#/zh-CN/tab"
                }
            }, scene: Scene.SESSION
        }).then(function (installed) {
            console.log('分享微信' + (installed ? "Yes" : "No"));
        }).catch(function (reason) {
            console.log('微信分享失败Failed:' + reason);
        });
    };
    ShareobjinfoPage.prototype.testTo = function () {
        this.router.navigate(['BuyServicePage']);
    };
    ShareobjinfoPage.prototype.ngOnInit = function () {
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
    ShareobjinfoPage.prototype.ngOnDestroy = function () {
        //组件销毁
        if (this.toast_ || this.toast_ != undefined || this.toast_ != null) {
            this.toast_.dismiss();
        }
    };
    ShareobjinfoPage.prototype.goBack = function () {
        window.history.back();
    };
    ShareobjinfoPage.prototype.presentLoadingDefault = function () {
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
    ShareobjinfoPage.prototype.send = function (value, isshow) {
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
    ShareobjinfoPage.prototype.likai = function () {
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
    ShareobjinfoPage.prototype.show_toastCtrl = function (msg) {
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
    ShareobjinfoPage.prototype.segmentChanged = function (e) {
        //评价分页栏被单击
    };
    ShareobjinfoPage.prototype.ionScroll = function (this_) {
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
    ShareobjinfoPage.prototype.setPjimg = function (e, count) {
        if (count == 1) {
            jquery__WEBPACK_IMPORTED_MODULE_12__(e).attr("src", "assets/img/xing1.png");
            return "assets/img/xing1.png";
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_12__(e).attr("src", "assets/img/xing.png");
            return "assets/img/xing0.png";
        }
    };
    ShareobjinfoPage.prototype.onClickSearch = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    ShareobjinfoPage.prototype.addObjTxt = function (userId) {
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
    ShareobjinfoPage.prototype.on_showServerText = function (txt) {
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
    ShareobjinfoPage.prototype.setUpFollow = function (setType) {
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
    ShareobjinfoPage.prototype.tologin = function () {
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
    ShareobjinfoPage.prototype.showlogin = function () {
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
    ShareobjinfoPage.prototype.locdAdd = function () {
        var this1 = this;
        if (this.toUserId == 0) {
            return;
        }
        this.dataHandle(this.DataserviceService.getdata("serviceTxt" + this.toUserId), false);
    };
    ShareobjinfoPage.prototype.addLocalError = function () {
    };
    ShareobjinfoPage.prototype.buyService = function (touserid) {
        return __awaiter(this, void 0, void 0, function () {
            var alert_1, u, app, isXiaomi, isAndroid, isIOS;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isinweixin) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: '提示',
                                subHeader: '请在浏览器中打开 \(^o^)/~ ',
                                buttons: ['确定']
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        u = navigator.userAgent, app = navigator.appVersion;
                        isXiaomi = u.indexOf('XiaoMi') > -1;
                        isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
                        isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
                        if (isAndroid) {
                            alert("Android系统");
                            window.open("sellingworldapp://"); //android app协议
                            window.setTimeout(function () {
                                window.location.href = "http://www.cnsellers.cn/sellermobile/_index.html"; // 下载地址
                            }, 2000);
                        }
                        else if (isIOS) {
                            if (isXiaomi) {
                                alert("您的浏览器标识为iPhone，请前往设置：“设置”->“高级设置”->“浏览器标识=默认”");
                            }
                            else {
                                alert("ios系统");
                                window.open("CnSellersApp://"); //ios app协议
                                window.setTimeout(function () {
                                    window.location.href = "http://www.cnsellers.cn/sellermobile/_index.html";
                                }, 2000);
                            }
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ShareobjinfoPage.prototype.setzongtipingjia = function (zixunpingfen) {
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
    ShareobjinfoPage.prototype.service_select = function (obj, objid) {
        //服务列表单击事件
        jquery__WEBPACK_IMPORTED_MODULE_12__('.listobj_f .serviceF').removeClass('serviceF_select');
        jquery__WEBPACK_IMPORTED_MODULE_12__(obj).closest('.serviceF').addClass('serviceF_select');
        // alert("objid="+objid)
        this.select_service_id = objid;
        // alert( $(obj).closest('.serviceF'));
    };
    ShareobjinfoPage.prototype.addpinglun = function () {
        //加载评论
        var obj = {
            type: 'addpinglun',
            objUserId: this.toUserId
        };
    };
    ShareobjinfoPage.prototype.setBq = function (arry) {
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
    ShareobjinfoPage.prototype.dataHandle = function (meg, isShow) {
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
    ShareobjinfoPage.prototype.addObjResume = function (objid) {
        //获取咨询师履历
        var obj = {
            type: "addObjResume",
            userId: objid,
        };
        this.send(JSON.stringify(obj));
    };
    ShareobjinfoPage.prototype.sendleter = function () {
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
    ShareobjinfoPage.prototype.doInfinite = function (infiniteScroll) {
        //console.log('doInfinite');
        this.addUserRating(); //刷新评论
        setTimeout(function () {
            infiniteScroll.target.complete();
        }, 1000);
    };
    ShareobjinfoPage.prototype.addUserRating = function () {
        var obj = {
            type: 'addUserRating',
            toUserId: this.toUserId,
            litim: this.RatingLitim
        };
        this.send(JSON.stringify(obj));
    };
    ShareobjinfoPage.prototype.doRefresh = function (refresher) {
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
    ShareobjinfoPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shareobjinfo',
            template: __webpack_require__(/*! ./shareobjinfo.page.html */ "./src/app/shareobjinfo/shareobjinfo.page.html"),
            styles: [__webpack_require__(/*! ./shareobjinfo.page.scss */ "./src/app/shareobjinfo/shareobjinfo.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _ionic_native_qqsdk_ngx__WEBPACK_IMPORTED_MODULE_11__["QQSDK"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_10__["ClipboardService"], _ionic_native_wechat_ngx__WEBPACK_IMPORTED_MODULE_9__["Wechat"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _dataservice_service__WEBPACK_IMPORTED_MODULE_8__["DataserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _core__WEBPACK_IMPORTED_MODULE_2__["AppMin"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_4__["Toast"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], ShareobjinfoPage);
    return ShareobjinfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=shareobjinfo-shareobjinfo-module.js.map