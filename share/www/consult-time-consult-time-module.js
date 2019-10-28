(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["consult-time-consult-time-module"],{

/***/ "./src/app/consult-time/consult-time.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/consult-time/consult-time.module.ts ***!
  \*****************************************************/
/*! exports provided: ConsultTimePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultTimePageModule", function() { return ConsultTimePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _consult_time_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consult-time.page */ "./src/app/consult-time/consult-time.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _consult_time_page__WEBPACK_IMPORTED_MODULE_5__["ConsultTimePage"]
    }
];
var ConsultTimePageModule = /** @class */ (function () {
    function ConsultTimePageModule() {
    }
    ConsultTimePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_consult_time_page__WEBPACK_IMPORTED_MODULE_5__["ConsultTimePage"]], entryComponents: []
        })
    ], ConsultTimePageModule);
    return ConsultTimePageModule;
}());



/***/ }),

/***/ "./src/app/consult-time/consult-time.page.html":
/*!*****************************************************!*\
  !*** ./src/app/consult-time/consult-time.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border mode=\"ios\">\n  <div class=\"{{header_class}}\">\n    <div class=\"head_berd\">\n      <ion-toolbar color=\"primary\" mode=\"ios\">\n        <ion-buttons slot=\"start\" mode=\"ios\">\n          <ion-back-button mode=\"ios\" text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{toUserCName}}</ion-title>\n      </ion-toolbar>\n    </div>\n  </div>\n</ion-header>\n\n\n<ion-content #consult_time_content1 padding (ionScroll)=\"ionScroll()\">\n  <div style=\"text-align: center;\">\n    <ion-spinner *ngIf=\"spinner\" name=\"circles\"></ion-spinner>\n  </div>\n\n\n\n  <ion-refresher color=\"primary\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"\" refreshingSpinner=\"circles\" refreshingText=\"\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n\n  <div class=\"show_user_line\" id=\"show_user_line\">\n    <ion-row>\n      <ion-col size=\"2\">\n        <img src=\"{{toUserImg}}\" width=\"28px\" height=\"28px\">\n      </ion-col>\n      <ion-col>\n        <span>{{toUserCName}}</span>\n      </ion-col>\n      <ion-col>\n        <span color=\"button1\">{{toUserIsLineShowText}}</span>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div id=\"consult_time_ion_content_zkj\">\n    <div class=\"zt_f\">\n      <div>\n        <div class=\"time_sp_f\">\n          <p class=\"time_sp\">{{DateMin}}</p>\n        </div>\n        <div *ngFor=\"let item of objList\">\n\n          <ion-row *ngIf=\"iretIsShow(item.userId)==1\">\n            <ion-col size=\"2\">\n              <img class=\"toux_img\" (click)=\"userymg_click(item.userId)\" src=\"{{toUserImg}}\">\n            </ion-col>\n            <ion-col size=\"10\">\n\n              <div class=\"bubbleItem\" *ngIf=\"item.isTxt == '1'\">\n                <span class=\"bubble leftBubble\">\n                  {{item.text}}\n                  <span class=\"bottomLevel\"></span>\n                  <span class=\"topLevel\"></span>\n                </span>\n              </div>\n\n\n              <div class=\"bubbleItem\" *ngIf=\"item.isAudio == '1'\">\n                <span class=\"bubble leftBubble\">\n                  <div (click)=\"audioPaly_click(item.consultationId,item.timeLength,item.audioUrl)\">\n                    <span id=\"timeLength_{{item.consultationId}}\" color='button1'\n                      style='color:#666;margin-right:2px'>{{item.timeLength}}</span>\n\n                    <img id='audioPayImg_{{item.consultationId}}' src=\"../../assets/img/audioPayStop.png\" width=\"20\"\n                      height=\"20\" style='vertical-align:middle;transform:rotate(176deg);'>\n                  </div>\n                  <div [style.display]='none'>\n                    <audio id=\"audioPaly_{{item.consultationId}}\" src=\"{{item.audioUrl}}\">\n                    </audio>\n                  </div>\n                  <span class=\"bottomLevel\"></span>\n                  <span class=\"topLevel\"></span>\n                </span>\n              </div>\n\n\n              <div class=\"bubbleItem\" *ngIf=\"item.isImg == '1'\">\n                <span class=\"bubble leftBubble\">\n                  <div class=\"img_f\">\n\n\n                    <img id='consult_Img_{{item.consultationId}}' (click)=\"img_click(item.imgUrl)\"\n                      src=\"{{item.imgUrl}}\">\n                  </div>\n\n                  <span class=\"bottomLevel\"></span>\n                  <span class=\"topLevel\"></span>\n                </span>\n              </div>\n\n\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"iretIsShow(item.userId)==2\">\n\n            <ion-col size=\"10\">\n\n              <div class=\"bubbleItem\" *ngIf=\"item.isTxt == '1'\">\n                <span class=\"bubble rightBubble\">\n                  {{item.text}}\n                  <span class=\"bottomLevel\"></span>\n                  <span class=\"topLevel\"></span>\n                </span>\n              </div>\n\n              <div class=\"bubbleItem\" *ngIf=\"item.isAudio == '1'\">\n                <span class=\"bubble rightBubble\">\n                  <div (click)=\"audioPaly_click(item.consultationId,item.timeLength,item.audioUrl)\">\n                    <span id=\"timeLength_{{item.consultationId}}\" color='button1'\n                      style='color:#666;margin-right:2px'>{{item.timeLength}} '</span>\n\n                    <img id='audioPayImg_{{item.consultationId}}' src=\"../../assets/img/audioPayStop.png\" width=\"20\"\n                      height=\"20\" style='vertical-align:middle;'>\n                  </div>\n                  <div [style.display]='none'>\n                    <audio id=\"audioPaly_{{item.consultationId}}\" src=\"{{item.audioUrl}}\">\n                    </audio>\n                  </div>\n                  <span class=\"bottomLevel\"></span>\n                  <span class=\"topLevel\"></span>\n                </span>\n              </div>\n\n              <div class=\"bubbleItem clearfix\" *ngIf=\"item.isImg == '1'\">\n                <span class=\"bubble rightBubble\">\n\n                  <div class=\"img_f\">\n\n\n                    <img id='consult_Img_{{item.consultationId}}' (click)=\"img_click(item.imgUrl)\"\n                      src=\"{{item.imgUrl}}\">\n                  </div>\n                  <span class=\"bottomLevel\"></span>\n                  <span class=\"topLevel\"></span>\n                </span>\n              </div>\n\n\n\n            </ion-col>\n            <ion-col size=\"2\">\n              <img class=\"toux_img\" (click)=\"userymg_click(item.userId)\" [src]=\"userImg\">\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"record_time\" [style.display]=\"isShowRecordTime\">\n      <div class=\"spinner1\" *ngIf=\"!recordReturn\">\n        <div class=\"rect1\"></div>\n        <div class=\"rect2\"></div>\n        <div class=\"rect3\"></div>\n        <div class=\"rect4\"></div>\n        <div class=\"rect5\"></div>\n      </div>\n      <div>\n        <img src=\"../../assets/img/取消.png\" *ngIf=\"recordReturn\" alt=\"\" style=\"    margin: 24px auto;\n        width: 60px;\n        height: 60px;\n        text-align: center;\n        font-size: 10px;\">\n      </div>\n      <div class=\"record_time_txt\">\n        <p>录音中...</p>\n        <p>(向上滑动取消)</p>\n        <!-- <p>{{audioSendText}}</p> -->\n      </div>\n\n    </div>\n\n\n\n\n\n\n    <!-- <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n                <ion-infinite-scroll-content></ion-infinite-scroll-content>\n              </ion-infinite-scroll> -->\n\n\n  </div>\n  <!-- <div style=\"display: none;\">\n    <h3>输出坐标：</h3>\n    坐标Y={{zb_y}} &nbsp; 坐标X={{zb_x}}\n  </div> -->\n\n</ion-content>\n\n\n<ion-footer [style.display]=\"ShowKeybord\" mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n\n    <ion-buttons slot='start' mode=\"ios\">\n      <ion-button (click)=\"record_Cache()\" mode=\"ios\">\n        <ion-icon mode=\"ios\" name=\"mic\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons mode=\"ios\">\n      <ion-input mode=\"ios\" [(ngModel)]=\"sendTxt\" (keyup.enter)=\"huif_btn()\" \n        type=\"text\" class=\"inp_txt\" id=\"inp_txt\"></ion-input>\n    </ion-buttons>\n    <ion-buttons mode=\"ios\" slot='end'>\n\n      <ion-button mode=\"ios\" (click)=\"selectuserimg_click()\">\n        <ion-icon mode=\"ios\" name=\"images\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n<ion-footer [style.display]=\"ShowRecord\" mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n\n    <ion-buttons slot='start' mode=\"ios\">\n      <ion-button (click)=\"record_Cache()\" mode=\"ios\">\n        <ion-icon name=\"paper\" mode=\"ios\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons mode=\"ios\">\n      <ion-button mode=\"ios\" class=\"record_input\" id=\"record_input\" style=\"width: 100%;\">按住 说话</ion-button>\n    </ion-buttons>\n\n    <ion-buttons mode=\"ios\" slot='end'>\n      <ion-button mode=\"ios\" (click)=\"selectuserimg_click()\">\n        <ion-icon mode=\"ios\" name=\"images\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/consult-time/consult-time.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/consult-time/consult-time.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\nion-input {\n  --padding-start: 1rem !important;\n  --padding-end: 1rem !important;\n  font-size: 1.2rem; }\n.toux_img {\n  width: 5rem;\n  border-radius: 50%;\n  box-shadow: 2px 3px 2px #eee; }\n/* 气泡对话框开始 */\n.bubbleItem {\n  width: 100%; }\n.bubble {\n  max-width: 77%;\n  position: relative;\n  padding-left: 10px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  border-radius: 7px;\n  margin-top: 3px;\n  padding-right: 10px;\n  display: inline-block;\n  font-size: 1.3rem; }\n.leftBubble {\n  position: relative;\n  margin-left: 3px;\n  border: 1px solid #aaa;\n  background-color: #fff;\n  box-shadow: 2px 3px 2px #eee;\n  margin-top: 0.5rem; }\n.leftBubble .bottomLevel {\n  position: absolute;\n  top: 10px;\n  left: -10px;\n  border-top: 10px solid #aaa;\n  border-left: 10px solid transparent; }\n.leftBubble .topLevel {\n  position: absolute;\n  top: 11px;\n  left: -8px;\n  border-top: 10px solid #f8fdfc;\n  border-left: 10px solid transparent;\n  z-index: 100; }\n.rightBubble {\n  position: relative;\n  margin-right: 3px;\n  float: right;\n  border: 1px solid #aaa;\n  box-shadow: 2px 3px 2px #eee;\n  margin-top: 0.5rem;\n  background: #fff; }\n.rightBubble .bottomLevel {\n  position: absolute;\n  top: 11px;\n  right: -10px;\n  border-bottom: 10px solid #aaa;\n  border-right: 10px solid transparent; }\n.rightBubble .topLevel {\n  position: absolute;\n  top: 10px;\n  right: -8px;\n  border-bottom: 10px solid #fff;\n  border-right: 10px solid transparent;\n  z-index: 100; }\n.clearfix:after {\n  visibility: hidden;\n  display: block;\n  font-size: 0;\n  content: \" \";\n  clear: both;\n  height: 0; }\n/* 气泡对话框结束 */\n.time_sp {\n  font-size: 1.2rem;\n  color: #888888;\n  margin: 0px;\n  padding: 0px;\n  text-align: center; }\n.time_sp_f {\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem; }\n.bom_huif_f {\n  background: #eee;\n  bottom: 0px;\n  position: fixed;\n  width: 100%;\n  height: 50px;\n  z-index: 100;\n  padding: 4px 4px 5px 4px; }\n.bom_huif_f input {\n  border-radius: 15px;\n  border: 1px solid #aaa;\n  margin: 0px;\n  width: 100%;\n  height: 40px;\n  padding: 5px;\n  font-size: 1.1em;\n  background: #fff;\n  padding-left: 10px;\n  padding-right: 20px; }\n.bom_huif_f button {\n  position: absolute;\n  width: 10%;\n  box-shadow: inherit;\n  background: rgba(64, 224, 208, 0);\n  width: 29px;\n  height: 29px;\n  top: 5px;\n  left: 82%; }\n.zt_f {\n  padding-bottom: 50px; }\n.inp_txt {\n  border-radius: 10px;\n  border: 1px solid #999;\n  height: 35px;\n  background: #fff; }\n.inp_txt input {\n  margin-top: 9px;\n  margin-bottom: 9px;\n  padding-left: 5px; }\n.record_input {\n  border-radius: 10px;\n  border: 1px solid #eee;\n  color: #666666; }\n.record_time {\n  background-color: rgba(14, 13, 13, 0.4);\n  border-radius: 10px;\n  width: 70%;\n  height: 200px;\n  padding: 15px;\n  text-align: center;\n  display: block;\n  position: fixed;\n  left: 15%;\n  top: 35%;\n  z-index: 999; }\n.spinner1 {\n  margin: 30px auto;\n  width: 50px;\n  height: 60px;\n  text-align: center;\n  font-size: 10px; }\n.spinner1 > div {\n  background-color: #fff;\n  height: 100%;\n  width: 6px;\n  display: inline-block;\n  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;\n  animation: stretchdelay 1.2s infinite ease-in-out; }\n.spinner1 .rect2 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n.spinner1 .rect3 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s; }\n.spinner1 .rect4 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n.spinner1 .rect5 {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n@-webkit-keyframes stretchdelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    -webkit-transform: scaleY(1); } }\n@keyframes stretchdelay {\n  0%, 40%, 100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    transform: scaleY(1);\n    -webkit-transform: scaleY(1); } }\n.record_time_txt p:nth-child(1) {\n  color: #fff;\n  font-size: 1.55rem;\n  margin: 10px auto; }\n.record_time_txt p:nth-child(2) {\n  color: #fff;\n  font-size: 1.55rem;\n  margin: 0px auto; }\n.img_f {\n  padding: 4px; }\n.img_show {\n  position: fixed;\n  left: 0%;\n  top: 35%;\n  z-index: 999;\n  max-width: 95%;\n  max-height: 80%;\n  background: rgba(14, 13, 13, 0.8);\n  border-radius: 10px; }\n.img_show_clos {\n  width: 100%;\n  text-align: right; }\n.img_show_clos ion-icon {\n  color: #fff;\n  font-size: 2.0em;\n  padding: 2px 2px 2px 0px; }\n.img_show_d {\n  text-align: center;\n  padding: 10px;\n  padding-top: 2px;\n  padding-bottom: 17px; }\n.img_show_d img {\n  max-height: 100%;\n  max-width: 100%;\n  width: 300px; }\n.show_user_line {\n  background: rgba(14, 13, 13, 0.6);\n  position: fixed;\n  width: 90%;\n  border-radius: 5px;\n  top: 80px;\n  z-index: 888;\n  height: 43px;\n  display: none; }\n.show_user_line ion-item {\n  background: none; }\n.show_user_line ion-label {\n  margin: 0px; }\n.show_user_line ion-col {\n  line-height: 31px; }\n.show_user_line ion-col:nth-child(2) {\n  text-align: left; }\n.show_user_line ion-col:nth-child(2) span {\n  font-size: 1.1em;\n  color: #fff; }\n.show_user_line ion-col:nth-child(1) {\n  text-align: right; }\n.show_user_line ion-col:nth-child(1) img {\n  border-radius: 50%; }\n.show_user_line ion-col:nth-child(3) span {\n  font-size: 1.1em;\n  color: beige; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uc3VsdC10aW1lL2NvbnN1bHQtdGltZS5wYWdlLnNjc3MiLCIvVXNlcnMvZmVpeWUvRG9jdW1lbnRzL215YXBwIGlvbmljNC9teUFwcC9zcmMvYXBwL2NvbnN1bHQtdGltZS9jb25zdWx0LXRpbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGdDQUFnQjtFQUNoQiw4QkFBYztFQUNiLGlCQUFpQixFQUFBO0FBR3RCO0VBQ0ksV0FBVztFQUVYLGtCQUFrQjtFQUNsQiw0QkFBNEIsRUFBQTtBQUdoQyxZQUFBO0FBQ0E7RUFDQSxXQUFXLEVBQUE7QUFFWDtFQUNBLGNBQWM7RUFDZCxrQkFBa0I7RUFFbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGlCQUFpQixFQUFBO0FBRWpCO0VBQ0Esa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixrQkFBa0IsRUFBQTtBQUVsQjtFQUNBLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixtQ0FBbUMsRUFBQTtBQUVuQztFQUNBLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLDhCQUE4QjtFQUM5QixtQ0FBbUM7RUFDbkMsWUFBWSxFQUFBO0FBRVo7RUFDQSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixnQkFDQSxFQUFBO0FBQ0E7RUFDQSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsb0NBQW9DLEVBQUE7QUFFcEM7RUFDQSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsb0NBQW9DO0VBQ3BDLFlBQVksRUFBQTtBQUVaO0VBQ0Esa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTLEVBQUE7QUFFVCxZQUFBO0FBRUE7RUFDQSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7QUFFbEI7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CLEVBQUE7QUFFckI7RUFDQSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFFWix3QkFBd0IsRUFBQTtBQU94QjtFQUNBLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBO0FBR25CO0VBQ0Esa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLFdBQVc7RUFDWCxZQUFZO0VBQ1osUUFBUTtFQUNSLFNBQVMsRUFBQTtBQUVUO0VBQ0Esb0JBQW9CLEVBQUE7QUFLcEI7RUFDQSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTtBQUdoQjtFQUNDLGVBQWU7RUFDZixrQkFBa0I7RUFDbkIsaUJBQWlCLEVBQUE7QUFJakI7RUFDQSxtQkFBbUI7RUFDbkIsc0JBQXFCO0VBQ3JCLGNBQWMsRUFBQTtBQUtkO0VBRUEsdUNBQXVDO0VBRXZDLG1CQUFtQjtFQUVuQixVQUFVO0VBRVYsYUFBYTtFQUViLGFBQWE7RUFFYixrQkFBa0I7RUFFbEIsY0FBYztFQUVkLGVBQWU7RUFFZixTQUFTO0VBQ1QsUUFBUTtFQUNSLFlBQVksRUFBQTtBQUlaO0VBQ0EsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTtBQUdmO0VBQ0Esc0JBQXFCO0VBQ3JCLFlBQVk7RUFDWixVQUFVO0VBQ1YscUJBQXFCO0VBRXJCLHlEQUF5RDtFQUN6RCxpREFBaUQsRUFBQTtBQUdqRDtFQUNBLDhCQUE4QjtFQUM5QixzQkFBc0IsRUFBQTtBQUd0QjtFQUNBLDhCQUE4QjtFQUM5QixzQkFBc0IsRUFBQTtBQUd0QjtFQUNBLDhCQUE4QjtFQUM5QixzQkFBc0IsRUFBQTtBQUd0QjtFQUNBLDhCQUE4QjtFQUM5QixzQkFBc0IsRUFBQTtBQUd0QjtFQUNBO0lBQWdCLDhCQUE4QixFQUFBO0VBQzlDO0lBQU0sNEJBQThCLEVBQUEsRUFBQTtBQUdwQztFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLDhCQUE4QixFQUFBO0VBQzdCO0lBQ0Qsb0JBQXNCO0lBQ3RCLDRCQUE4QixFQUFBLEVBQUE7QUFNaEM7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBO0FBRW5CO0VBQ0EsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTtBQU1oQjtFQUFRLFlBQVksRUFBQTtBQUlwQjtFQUNBLGVBQWU7RUFFZixRQUFRO0VBQ1IsUUFBUTtFQUNSLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtFQUNmLGlDQUFrQztFQUNsQyxtQkFBbUIsRUFBQTtBQUduQjtFQUNBLFdBQVc7RUFDWCxpQkFBaUIsRUFBQTtBQUdqQjtFQUNBLFdBQVU7RUFDVixnQkFBZ0I7RUFDaEIsd0JBQXdCLEVBQUE7QUFFeEI7RUFDQSxrQkFBa0I7RUFFbEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixvQkFBb0IsRUFBQTtBQUdwQjtFQUNBLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBVyxFQUFBO0FBR1g7RUFDQSxpQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsU0FBUTtFQUNSLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYSxFQUFBO0FBSWI7RUFDQSxnQkFBZSxFQUFBO0FBRWY7RUFDQSxXQUFXLEVBQUE7QUFFWDtFQUNBLGlCQUFpQixFQUFBO0FBRWpCO0VBQ0EsZ0JBQWdCLEVBQUE7QUFFaEI7RUFDQSxnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBO0FBRVg7RUFDQSxpQkFBaUIsRUFBQTtBQUVqQjtFQUNBLGtCQUFrQixFQUFBO0FBSWxCO0VBQ0EsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnN1bHQtdGltZS9jb25zdWx0LXRpbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuaW9uLWlucHV0IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1lbmQ6IDFyZW0gIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjJyZW07IH1cblxuLnRvdXhfaW1nIHtcbiAgd2lkdGg6IDVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMnB4IDNweCAycHggI2VlZTsgfVxuXG4vKiDmsJTms6Hlr7nor53moYblvIDlp4sgKi9cbi5idWJibGVJdGVtIHtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLmJ1YmJsZSB7XG4gIG1heC13aWR0aDogNzclO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxLjNyZW07IH1cblxuLmxlZnRCdWJibGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDJweCAzcHggMnB4ICNlZWU7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTsgfVxuXG4ubGVmdEJ1YmJsZSAuYm90dG9tTGV2ZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogLTEwcHg7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgI2FhYTtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7IH1cblxuLmxlZnRCdWJibGUgLnRvcExldmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDExcHg7XG4gIGxlZnQ6IC04cHg7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgI2Y4ZmRmYztcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHotaW5kZXg6IDEwMDsgfVxuXG4ucmlnaHRCdWJibGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG4gIGJveC1zaGFkb3c6IDJweCAzcHggMnB4ICNlZWU7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjsgfVxuXG4ucmlnaHRCdWJibGUgLmJvdHRvbUxldmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDExcHg7XG4gIHJpZ2h0OiAtMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjYWFhO1xuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7IH1cblxuLnJpZ2h0QnViYmxlIC50b3BMZXZlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogLThweDtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHotaW5kZXg6IDEwMDsgfVxuXG4uY2xlYXJmaXg6YWZ0ZXIge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDA7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBjbGVhcjogYm90aDtcbiAgaGVpZ2h0OiAwOyB9XG5cbi8qIOawlOazoeWvueivneahhue7k+adnyAqL1xuLnRpbWVfc3Age1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6ICM4ODg4ODg7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4udGltZV9zcF9mIHtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTsgfVxuXG4uYm9tX2h1aWZfZiB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIGJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgcGFkZGluZzogNHB4IDRweCA1cHggNHB4OyB9XG5cbi5ib21faHVpZl9mIGlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4OyB9XG5cbi5ib21faHVpZl9mIGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwJTtcbiAgYm94LXNoYWRvdzogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogcmdiYSg2NCwgMjI0LCAyMDgsIDApO1xuICB3aWR0aDogMjlweDtcbiAgaGVpZ2h0OiAyOXB4O1xuICB0b3A6IDVweDtcbiAgbGVmdDogODIlOyB9XG5cbi56dF9mIHtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7IH1cblxuLmlucF90eHQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7IH1cblxuLmlucF90eHQgaW5wdXQge1xuICBtYXJnaW4tdG9wOiA5cHg7XG4gIG1hcmdpbi1ib3R0b206IDlweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7IH1cblxuLnJlY29yZF9pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIGNvbG9yOiAjNjY2NjY2OyB9XG5cbi5yZWNvcmRfdGltZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQsIDEzLCAxMywgMC40KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAxNSU7XG4gIHRvcDogMzUlO1xuICB6LWluZGV4OiA5OTk7IH1cblxuLnNwaW5uZXIxIHtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMHB4OyB9XG5cbi5zcGlubmVyMSA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDZweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3RyZXRjaGRlbGF5IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbjogc3RyZXRjaGRlbGF5IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7IH1cblxuLnNwaW5uZXIxIC5yZWN0MiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMS4xczsgfVxuXG4uc3Bpbm5lcjEgLnJlY3QzIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjBzO1xuICBhbmltYXRpb24tZGVsYXk6IC0xLjBzOyB9XG5cbi5zcGlubmVyMSAucmVjdDQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOXM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7IH1cblxuLnNwaW5uZXIxIC5yZWN0NSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC44czsgfVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3RyZXRjaGRlbGF5IHtcbiAgMCUsIDQwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjQpOyB9XG4gIDIwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTsgfSB9XG5cbkBrZXlmcmFtZXMgc3RyZXRjaGRlbGF5IHtcbiAgMCUsIDQwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC40KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNCk7IH1cbiAgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEpOyB9IH1cblxuLnJlY29yZF90aW1lX3R4dCBwOm50aC1jaGlsZCgxKSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuNTVyZW07XG4gIG1hcmdpbjogMTBweCBhdXRvOyB9XG5cbi5yZWNvcmRfdGltZV90eHQgcDpudGgtY2hpbGQoMikge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxLjU1cmVtO1xuICBtYXJnaW46IDBweCBhdXRvOyB9XG5cbi5pbWdfZiB7XG4gIHBhZGRpbmc6IDRweDsgfVxuXG4uaW1nX3Nob3cge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDAlO1xuICB0b3A6IDM1JTtcbiAgei1pbmRleDogOTk5O1xuICBtYXgtd2lkdGg6IDk1JTtcbiAgbWF4LWhlaWdodDogODAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE0LCAxMywgMTMsIDAuOCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IH1cblxuLmltZ19zaG93X2Nsb3Mge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cblxuLmltZ19zaG93X2Nsb3MgaW9uLWljb24ge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyLjBlbTtcbiAgcGFkZGluZzogMnB4IDJweCAycHggMHB4OyB9XG5cbi5pbWdfc2hvd19kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTdweDsgfVxuXG4uaW1nX3Nob3dfZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAzMDBweDsgfVxuXG4uc2hvd191c2VyX2xpbmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE0LCAxMywgMTMsIDAuNik7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDkwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0b3A6IDgwcHg7XG4gIHotaW5kZXg6IDg4ODtcbiAgaGVpZ2h0OiA0M3B4O1xuICBkaXNwbGF5OiBub25lOyB9XG5cbi5zaG93X3VzZXJfbGluZSBpb24taXRlbSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7IH1cblxuLnNob3dfdXNlcl9saW5lIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMHB4OyB9XG5cbi5zaG93X3VzZXJfbGluZSBpb24tY29sIHtcbiAgbGluZS1oZWlnaHQ6IDMxcHg7IH1cblxuLnNob3dfdXNlcl9saW5lIGlvbi1jb2w6bnRoLWNoaWxkKDIpIHtcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxuXG4uc2hvd191c2VyX2xpbmUgaW9uLWNvbDpudGgtY2hpbGQoMikgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5zaG93X3VzZXJfbGluZSBpb24tY29sOm50aC1jaGlsZCgxKSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XG5cbi5zaG93X3VzZXJfbGluZSBpb24tY29sOm50aC1jaGlsZCgxKSBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7IH1cblxuLnNob3dfdXNlcl9saW5lIGlvbi1jb2w6bnRoLWNoaWxkKDMpIHNwYW4ge1xuICBmb250LXNpemU6IDEuMWVtO1xuICBjb2xvcjogYmVpZ2U7IH1cbiIsImlvbi1pbnB1dHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctZW5kOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG5cbi50b3V4X2ltZ3tcbiAgICB3aWR0aDogNXJlbTtcbiAgICAvLyBoZWlnaHQ6IDM1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJveC1zaGFkb3c6IDJweCAzcHggMnB4ICNlZWU7XG59XG5cbi8qIOawlOazoeWvueivneahhuW8gOWniyAqL1xuLmJ1YmJsZUl0ZW17ICBcbndpZHRoOiAxMDAlOyAgXG59ICBcbi5idWJibGV7ICBcbm1heC13aWR0aDogNzclOyAgXG5wb3NpdGlvbjogcmVsYXRpdmU7ICBcbi8vbGluZS1oZWlnaHQ6IDMwcHg7ICBcbnBhZGRpbmctbGVmdDogMTBweDsgIFxucGFkZGluZy10b3A6IDNweDsgIFxucGFkZGluZy1ib3R0b206IDNweDsgIFxuYm9yZGVyLXJhZGl1czogN3B4OyAgXG5tYXJnaW4tdG9wOiAzcHg7ICBcbnBhZGRpbmctcmlnaHQ6IDEwcHg7ICBcbmRpc3BsYXk6IGlubGluZS1ibG9jazsgIFxuZm9udC1zaXplOiAxLjNyZW07XG59ICBcbi5sZWZ0QnViYmxleyAgXG5wb3NpdGlvbjogcmVsYXRpdmU7ICBcbm1hcmdpbi1sZWZ0OiAzcHg7ICBcbmJvcmRlcjogMXB4IHNvbGlkICNhYWE7ICBcbmJhY2tncm91bmQtY29sb3I6ICNmZmY7ICBcbmJveC1zaGFkb3c6IDJweCAzcHggMnB4ICNlZWU7XG5tYXJnaW4tdG9wOiAwLjVyZW07XG59ICBcbi5sZWZ0QnViYmxlIC5ib3R0b21MZXZlbHsgIFxucG9zaXRpb246IGFic29sdXRlOyAgXG50b3A6IDEwcHg7ICBcbmxlZnQ6IC0xMHB4OyAgXG5ib3JkZXItdG9wOiAxMHB4IHNvbGlkICNhYWE7ICBcbmJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50OyAgXG59ICBcbi5sZWZ0QnViYmxlIC50b3BMZXZlbHsgIFxucG9zaXRpb246IGFic29sdXRlOyAgXG50b3A6IDExcHg7ICBcbmxlZnQ6IC04cHg7ICBcbmJvcmRlci10b3A6IDEwcHggc29saWQgI2Y4ZmRmYzsgIFxuYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7ICBcbnotaW5kZXg6IDEwMDsgIFxufSAgXG4ucmlnaHRCdWJibGV7ICBcbnBvc2l0aW9uOiByZWxhdGl2ZTsgIFxubWFyZ2luLXJpZ2h0OiAzcHg7ICBcbmZsb2F0OiByaWdodDsgIFxuYm9yZGVyOiAxcHggc29saWQgI2FhYTsgIFxuYm94LXNoYWRvdzogMnB4IDNweCAycHggI2VlZTtcbm1hcmdpbi10b3A6IDAuNXJlbTtcbmJhY2tncm91bmQ6ICNmZmZcbn0gIFxuLnJpZ2h0QnViYmxlIC5ib3R0b21MZXZlbHsgIFxucG9zaXRpb246IGFic29sdXRlOyAgXG50b3A6IDExcHg7ICBcbnJpZ2h0OiAtMTBweDsgIFxuYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjYWFhOyAgXG5ib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7ICBcbn0gIFxuLnJpZ2h0QnViYmxlIC50b3BMZXZlbHsgIFxucG9zaXRpb246IGFic29sdXRlOyAgXG50b3A6IDEwcHg7ICBcbnJpZ2h0OiAtOHB4OyAgXG5ib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNmZmY7ICBcbmJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDsgIFxuei1pbmRleDogMTAwOyAgXG59ICBcbi5jbGVhcmZpeDphZnRlciB7ICBcbnZpc2liaWxpdHk6IGhpZGRlbjsgIFxuZGlzcGxheTogYmxvY2s7ICBcbmZvbnQtc2l6ZTogMDsgIFxuY29udGVudDogXCIgXCI7ICBcbmNsZWFyOiBib3RoOyAgXG5oZWlnaHQ6IDA7ICBcbn0gIFxuLyog5rCU5rOh5a+56K+d5qGG57uT5p2fICovXG5cbi50aW1lX3Nwe1xuZm9udC1zaXplOiAxLjJyZW07XG5jb2xvcjogIzg4ODg4ODtcbm1hcmdpbjogMHB4O1xucGFkZGluZyA6MHB4O1xudGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRpbWVfc3BfZntcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbn1cbi5ib21faHVpZl9mIHtcbmJhY2tncm91bmQ6ICNlZWU7XG5ib3R0b206IDBweDtcbnBvc2l0aW9uOiBmaXhlZDtcbndpZHRoOiAxMDAlO1xuaGVpZ2h0OiA1MHB4O1xuei1pbmRleDogMTAwO1xuLy8gcG9zaXRpb246IHJlbGF0aXZlO1xucGFkZGluZzogNHB4IDRweCA1cHggNHB4O1xufVxuXG5cblxuXG5cbi5ib21faHVpZl9mIGlucHV0IHtcbmJvcmRlci1yYWRpdXM6IDE1cHg7XG5ib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xubWFyZ2luOiAwcHg7XG53aWR0aDogMTAwJTtcbmhlaWdodDogNDBweDtcbnBhZGRpbmc6IDVweDtcbmZvbnQtc2l6ZTogMS4xZW07XG5iYWNrZ3JvdW5kOiAjZmZmO1xucGFkZGluZy1sZWZ0OiAxMHB4O1xucGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLmJvbV9odWlmX2YgYnV0dG9uIHtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbndpZHRoOiAxMCU7XG5ib3gtc2hhZG93OiBpbmhlcml0O1xuYmFja2dyb3VuZDogcmdiYSg2NCwgMjI0LCAyMDgsIDApO1xud2lkdGg6IDI5cHg7XG5oZWlnaHQ6IDI5cHg7XG50b3A6IDVweDtcbmxlZnQ6IDgyJTtcbn1cbi56dF9me1xucGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cblxuLy8tLS0tLS1cbi5pbnBfdHh0e1xuYm9yZGVyLXJhZGl1czogMTBweDtcbmJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG5oZWlnaHQ6IDM1cHg7XG5iYWNrZ3JvdW5kOiAjZmZmO1xuXG59XG4uaW5wX3R4dCBpbnB1dHtcbiBtYXJnaW4tdG9wOiA5cHg7XG4gbWFyZ2luLWJvdHRvbTogOXB4O1xucGFkZGluZy1sZWZ0OiA1cHg7XG5cbn1cblxuLnJlY29yZF9pbnB1dHtcbmJvcmRlci1yYWRpdXM6IDEwcHg7XG5ib3JkZXI6MXB4IHNvbGlkICNlZWU7XG5jb2xvcjogIzY2NjY2Njs7XG5cblxufVxuXG4ucmVjb3JkX3RpbWV7XG4vL+W9lemfs+aPkOekulxuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNCwgMTMsIDEzLCAwLjQpO1xuXG5ib3JkZXItcmFkaXVzOiAxMHB4O1xuXG53aWR0aDogNzAlO1xuXG5oZWlnaHQ6IDIwMHB4O1xuXG5wYWRkaW5nOiAxNXB4O1xuXG50ZXh0LWFsaWduOiBjZW50ZXI7XG5cbmRpc3BsYXk6IGJsb2NrO1xuXG5wb3NpdGlvbjogZml4ZWQ7XG5cbmxlZnQ6IDE1JTtcbnRvcDogMzUlO1xuei1pbmRleDogOTk5O1xufVxuXG4vL+W9lemfs+WKqOeUu+W8gOWni1xuLnNwaW5uZXIxIHtcbm1hcmdpbjogMzBweCBhdXRvO1xud2lkdGg6IDUwcHg7XG5oZWlnaHQ6IDYwcHg7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5mb250LXNpemU6IDEwcHg7XG59XG5cbi5zcGlubmVyMSA+IGRpdiB7XG5iYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG5oZWlnaHQ6IDEwMCU7XG53aWR0aDogNnB4O1xuZGlzcGxheTogaW5saW5lLWJsb2NrO1xuIFxuLXdlYmtpdC1hbmltYXRpb246IHN0cmV0Y2hkZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuYW5pbWF0aW9uOiBzdHJldGNoZGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbn1cblxuLnNwaW5uZXIxIC5yZWN0MiB7XG4td2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMXM7XG5hbmltYXRpb24tZGVsYXk6IC0xLjFzO1xufVxuXG4uc3Bpbm5lcjEgLnJlY3QzIHtcbi13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcbmFuaW1hdGlvbi1kZWxheTogLTEuMHM7XG59XG5cbi5zcGlubmVyMSAucmVjdDQge1xuLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjlzO1xuYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcbn1cblxuLnNwaW5uZXIxIC5yZWN0NSB7XG4td2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOHM7XG5hbmltYXRpb24tZGVsYXk6IC0wLjhzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3RyZXRjaGRlbGF5IHtcbjAlLCA0MCUsIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNCkgfSBcbjIwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMS4wKSB9XG59XG5cbkBrZXlmcmFtZXMgc3RyZXRjaGRlbGF5IHtcbjAlLCA0MCUsIDEwMCUge1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjQpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNCk7XG59ICAyMCUge1xuICB0cmFuc2Zvcm06IHNjYWxlWSgxLjApO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEuMCk7XG59XG59XG5cbi8v5b2V6Z+z5Yqo55S757uT5p2fXG5cbi5yZWNvcmRfdGltZV90eHQgcDpudGgtY2hpbGQoMSl7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuNTVyZW07XG4gIG1hcmdpbjogMTBweCBhdXRvO1xufVxuLnJlY29yZF90aW1lX3R4dCBwOm50aC1jaGlsZCgyKXtcbmNvbG9yOiAjZmZmO1xuZm9udC1zaXplOiAxLjU1cmVtO1xubWFyZ2luOiAwcHggYXV0bztcbn1cblxuXG5cbi8v5a+56K+d5Zu+54mHXG4uaW1nX2Z7IHBhZGRpbmc6IDRweDt9XG5cblxuLy/lpKflm77mmL7npLrlm77niYdcbi5pbWdfc2hvd3tcbnBvc2l0aW9uOiBmaXhlZDtcblxubGVmdDogMCU7XG50b3A6IDM1JTtcbnotaW5kZXg6IDk5OTtcbm1heC13aWR0aDogOTUlO1xubWF4LWhlaWdodDogODAlO1xuYmFja2dyb3VuZDogIHJnYmEoMTQsIDEzLCAxMywgMC44KTtcbmJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbn1cbi5pbWdfc2hvd19jbG9ze1xud2lkdGg6IDEwMCU7XG50ZXh0LWFsaWduOiByaWdodDtcblxufVxuLmltZ19zaG93X2Nsb3MgaW9uLWljb257XG5jb2xvcjojZmZmO1xuZm9udC1zaXplOiAyLjBlbTtcbnBhZGRpbmc6IDJweCAycHggMnB4IDBweDtcbn1cbi5pbWdfc2hvd19ke1xudGV4dC1hbGlnbjogY2VudGVyO1xuXG5wYWRkaW5nOiAxMHB4O1xucGFkZGluZy10b3A6IDJweDtcbnBhZGRpbmctYm90dG9tOiAxN3B4O1xuXG59XG4uaW1nX3Nob3dfZCBpbWd7XG5tYXgtaGVpZ2h0OiAxMDAlO1xubWF4LXdpZHRoOiAxMDAlO1xud2lkdGg6MzAwcHg7XG59XG4vL+aYvuekuueUqOaIt+eKtuaAgVxuLnNob3dfdXNlcl9saW5le1xuYmFja2dyb3VuZDogIHJnYmEoMTQsIDEzLCAxMywgMC42KTtcbnBvc2l0aW9uOiBmaXhlZDtcbndpZHRoOiA5MCU7XG5ib3JkZXItcmFkaXVzOiA1cHg7XG50b3A6ODBweDtcbnotaW5kZXg6IDg4ODtcbmhlaWdodDogNDNweDtcbmRpc3BsYXk6IG5vbmU7XG5cblxufVxuLnNob3dfdXNlcl9saW5lIGlvbi1pdGVte1xuYmFja2dyb3VuZDpub25lO1xufVxuLnNob3dfdXNlcl9saW5lIGlvbi1sYWJlbHtcbm1hcmdpbjogMHB4O1xufVxuLnNob3dfdXNlcl9saW5lIGlvbi1jb2x7XG5saW5lLWhlaWdodDogMzFweDtcbn1cbi5zaG93X3VzZXJfbGluZSBpb24tY29sOm50aC1jaGlsZCgyKXtcbnRleHQtYWxpZ246IGxlZnQ7XG59XG4uc2hvd191c2VyX2xpbmUgaW9uLWNvbDpudGgtY2hpbGQoMikgc3BhbntcbmZvbnQtc2l6ZTogMS4xZW07XG5jb2xvcjogI2ZmZjtcbn1cbi5zaG93X3VzZXJfbGluZSBpb24tY29sOm50aC1jaGlsZCgxKXtcbnRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnNob3dfdXNlcl9saW5lIGlvbi1jb2w6bnRoLWNoaWxkKDEpIGltZ3tcbmJvcmRlci1yYWRpdXM6IDUwJTtcblxuXG59XG4uc2hvd191c2VyX2xpbmUgaW9uLWNvbDpudGgtY2hpbGQoMykgc3BhbntcbmZvbnQtc2l6ZTogMS4xZW07XG5jb2xvcjogYmVpZ2U7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/consult-time/consult-time.page.ts":
/*!***************************************************!*\
  !*** ./src/app/consult-time/consult-time.page.ts ***!
  \***************************************************/
/*! exports provided: ConsultTimePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultTimePage", function() { return ConsultTimePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/native-keyboard/ngx */ "./node_modules/@ionic-native/native-keyboard/ngx/index.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_14__);
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















var ConsultTimePage = /** @class */ (function () {
    function ConsultTimePage(navCtrl, ElementRef, WebView, PhotoViewer, Media, ActivatedRoute, Router, appMin, keyboard_, platform, toast, transfer, popoverCtrl, storage, alertCtrl, file, actionSheetCtrl, loadingCtrl, camera) {
        //this.mycontent.scrollToBottom();
        this.navCtrl = navCtrl;
        this.ElementRef = ElementRef;
        this.WebView = WebView;
        this.PhotoViewer = PhotoViewer;
        this.Media = Media;
        this.ActivatedRoute = ActivatedRoute;
        this.Router = Router;
        this.appMin = appMin;
        this.keyboard_ = keyboard_;
        this.platform = platform;
        this.toast = toast;
        this.transfer = transfer;
        this.popoverCtrl = popoverCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.file = file;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.ShowRecord = 'none';
        this.ShowKeybord = 'block';
        this.orderId = "";
        this.device = new _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__["Device"]();
        this.footer_bottom = "0px"; //键盘高度
        this.sendTxt = "";
        this.DateMin = "之前";
        this.toUserCName = '对话中';
        this.isShowRecordTime = 'none';
        this.style_margin_bottom = "#fff";
        this.select_img = "img/efff56af09a1361f73737675b3fee539.jpg";
        this.isShowSelectImg = 'none';
        this.topStartPage = 0;
        this.bomStartPage = 0;
        this.spinner = true;
        this.objList = new Array();
        this.toUserIsLineShowText = "对方不在线";
        this.userIsObj = '0';
        this.clientHeight = 570; //屏幕最大高度 初始化时会重置
        // test
        this.isShowTous = false;
        this.toUserId = this.ActivatedRoute.snapshot.queryParams['toUserId'];
        // console.log("snapshot="+this.ActivatedRoute.snapshot);
        this.userImg = this.appMin.getUserImg();
        // console.log('userImg=' + this.appMin.getUserImg());
        this.orderId = this.ActivatedRoute.snapshot.queryParams['orderId'];
        //console.log("this.orderId=" + this.orderId);
        this.userIsObj = this.ActivatedRoute.snapshot.queryParams['userisobj'];
        {
            //删除前一页 避免后退
            if (this.ActivatedRoute.snapshot.queryParams['notpop'] == '1') {
                // let i = this.navCtrl.getViews().length;
                //  this.navCtrl.removeView(this.navCtrl.getViews()[i - 1]);
            }
        }
        if (this.appMin.GetPhoneMode() == "ios") {
            this.header_class = "header_class";
        }
        else {
            this.header_class = "header_class";
            //  console.log("判断为安卓系统 设置状态栏样式")
        }
        if (this.appMin.getDevicereadyOK()) {
            //this.keyboard_.disableScroll(true); //禁用键盘自动抬高
        }
    }
    ConsultTimePage.prototype.ngAfterViewInit = function () {
        this.mycontent = this.ElementRef.nativeElement.querySelector('ion-content');
    };
    ConsultTimePage.prototype.toBottom = function () {
        window.scrollTo(0, 0);
    };
    ConsultTimePage.prototype.ionViewDidEnter = function () {
        this.addToUserData();
        //语音输入操作
        var timeOutEvent;
        timeOutEvent = 0;
        var _this = this;
        var orthEvent = 0;
        jquery__WEBPACK_IMPORTED_MODULE_14__("#record_input").parent().on({
            touchstart: function (e) {
                orthEvent = 0;
                timeOutEvent = setTimeout(function () {
                    if (orthEvent != 1) {
                        _this.recordReturn = false;
                        _this.record_input(); //开始录音
                        // alert('长按')
                        return;
                    }
                }, 500);
            },
            touchmove: function (e) {
                //滑动
                var touch = e.touches[0];
                _this.zb_y = Number(touch.pageY);
                if (Number(_this.zb_y) > _this.clientHeight) {
                    _this.audioSendText = "发送";
                    _this.recordReturn = false;
                }
                else {
                    _this.audioSendText = "取消发送";
                    _this.recordReturn = true;
                }
                // alert('取消发送')
                return;
            },
            touchend: function (e) {
                // console.log('轻击事件!')
                _this.audioSendText = "轻击事件" + _this.zb_y;
                // alert("轻击事件" + _this.zb_y);
                if (_this.zb_y > _this.clientHeight) {
                    clearTimeout(timeOutEvent);
                    if (timeOutEvent != 0) {
                        timeOutEvent = 0;
                        orthEvent = 1;
                        _this.audioSendText = " > " + _this.clientHeight;
                        // alert('轻击');
                        _this.recordReturn = true;
                        _this.stopRecord_input(true); //发送录音
                        _this.zb_y = 0;
                        return;
                        //alert('发送')
                    }
                    else {
                        _this.recordReturn = true;
                        _this.audioSendText = " < " + _this.clientHeight;
                        //_this.stopRecord_input(true);//发送录音
                        return;
                    }
                }
                else {
                    //   console.log('_this.zb_y < ' + _this.clientHeight)
                    timeOutEvent = 0;
                    orthEvent = 1;
                    _this.stopRecord_input(false); //停止录音不发送
                    clearTimeout(timeOutEvent);
                }
            }
        });
    };
    ConsultTimePage.prototype.ionViewWillLeave = function () {
        var myEvent = new Event('addNotesUnReadCount');
        window.dispatchEvent(myEvent); //触发登录全局事件 加载未读通知列表
        var myEvent = new Event('back_consult');
        window.dispatchEvent(myEvent); //触发全局后退事件 刷新未读消息列表
    };
    ConsultTimePage.prototype.addToUserData = function () {
        //加载咨询师数据
        var obj = {
            type: 'consultTime_addToUserData',
            userId: this.appMin.getUserid(),
            toUserId: this.toUserId,
            orderId: this.orderId
        };
        this.send(JSON.stringify(obj), false);
    };
    ConsultTimePage.prototype.send = function (value, isshow) {
        var _this_1 = this;
        if (isshow) {
            this.loader = this.loadingCtrl.create({
                message: "加载中...",
                duration: 3000
            });
            this.loader.present();
        }
        this.appMin.post(JSON.parse(value)).subscribe(function (data) {
            _this_1.dataHandle(data, false);
        });
    };
    ConsultTimePage.prototype.Record = function () {
        //开始录音
        // console.log('开始录音');
        this.startTime = new Date().getTime();
        var filename = Date.now() + ".m4a";
        this.filename = filename;
        if (this.device.platform == "iOS") {
            this.path = cordova.file.tempDirectory + filename;
            //  console.log('this.device.platform == "iOS"');
        }
        else if (this.device.platform == "Android") {
            this.path = cordova.file.externalRootDirectory + filename;
        }
        // console.log('Recordfilename=' + filename);
        this.mediaRec = this.Media.create(filename);
        // new Media(filename, function () { console.log('mediaRec new ') }, function () { }, function () { });
        this.mediaRec.startRecord();
        this.mediaRec.setVolume(1);
    };
    ConsultTimePage.prototype.stop = function (isup) {
        //停止录音并上传
        // console.log("stopRecord!ok");
        this.mediaRec.stopRecord();
        //console.log("stopRecord!ok1");
        if (isup == false) {
            // console.log('isup=false')
            return;
        }
        else {
            // console.log('isup=true')
        }
        // console.log("stopTime start!");
        this.stopTime = new Date().getTime();
        this.audioTime = this.stopTime - this.startTime;
        this.audioTime = Math.floor(this.audioTime / 1000);
        // console.log("stopTime stop!");
        var type;
        if (this.device.platform == "iOS") {
            type = cordova.file.tempDirectory;
        }
        else if (this.device.platform == "Android") {
            type = cordova.file.externalRootDirectory;
        }
        // console.log("tempDirectory=" + cordova.file.tempDirectory);
        //  console.log('filename=' + this.filename);
        var _this = this;
        this.file.readAsDataURL(type, this.filename).then(function (data) {
            //准备上传文件
            //alert(data);
            _this.audioBase64 = data;
            // console.log('录音文件base64=' + data);
            _this.upAudio();
            _this.mediaRec.release();
        }).catch(function (err) { console.log("readAsDataURLerr" + JSON.stringify(err)); });
    };
    ConsultTimePage.prototype.isComplaint = function () {
        //判断是否显示举报按钮
        if (this.orderId != "" && this.orderId != null && this.orderId != undefined) {
            return true;
        }
        else {
            return false;
        }
    };
    ConsultTimePage.prototype.iretIsShow = function (val) {
        if (val == this.appMin.getUserid()) {
            //我方
            //  alert('2');
            return "2";
        }
        else {
            //对方
            return "1";
        }
    };
    ConsultTimePage.prototype.upAudio = function () {
        var this1 = this;
        var obj = {
            type: "upAudio",
            base64: this.audioBase64,
            userId: this.appMin.getUserid(),
            toUserId: this.toUserId,
            timeLength: this.audioTime,
            touser: this.toUserId,
            orderId: this.orderId
        };
        this.send(JSON.stringify(obj), false);
    };
    ConsultTimePage.prototype.huif_btn = function () {
        //回复按钮单击事件  发送文本消息
        if (this.sendTxt.trim() == "")
            return;
        var obj = {
            type: 'consultTime_sendText',
            sendUserId: this.appMin.getUserid(),
            toUserid: this.toUserId,
            sendTxt: this.sendTxt,
            touser: this.toUserId,
            orderId: this.orderId,
            isAudio: '0'
        };
        this.send(JSON.stringify(obj), false);
        this.sendTxt = "";
        // this1.content1.resize();
        //  this1.content1.scrollToBottom(300);
    };
    ConsultTimePage.prototype.presentActionSheet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this_1 = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: '更多操作',
                            buttons: [
                                {
                                    text: '举报',
                                    role: 'destructive',
                                    icon: 'trash',
                                    handler: function () {
                                        _this_1.ReportUser();
                                    }
                                },
                                {
                                    text: '取消',
                                    role: 'cancel',
                                    icon: 'close',
                                    handler: function () {
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
    ConsultTimePage.prototype.ReportUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this_1 = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: '举报',
                            inputs: [
                                {
                                    name: 'username',
                                    placeholder: '举报的原因',
                                    type: 'text'
                                }
                            ],
                            buttons: [
                                {
                                    text: '取消',
                                    role: 'cancel',
                                    handler: function (data) {
                                        console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: '举报',
                                    handler: function (data) {
                                        var obj = {
                                            type: "ReportUser",
                                            ReportUserId: _this_1.toUserId,
                                            txt: data.username
                                        };
                                        _this_1.send(JSON.stringify(obj), false);
                                    }
                                }
                            ]
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
    ConsultTimePage.prototype.Photograph = function () {
        //拍照上传
        var this1 = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 400,
            targetHeight: 400,
            allowEdit: true,
            cameraDirection: 0,
        };
        this.camera.getPicture(options).then(function (imageData) {
            this1.getBase64Image(imageData);
        }, function (err) {
            // Handle error
            console.log("拍照错误=" + err);
        });
    };
    ConsultTimePage.prototype.userSelectImg = function () {
        //从图库上传
        var this1 = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 400,
            targetHeight: 400,
            allowEdit: true,
            cameraDirection: 1,
            sourceType: 2 //从图库选择
        };
        this.camera.getPicture(options).then(function (imageData) {
            this1.getBase64Image(imageData);
            //alert(imageData);
        }, function (err) {
            // Handle error
            console.log("图库错误=" + err);
        });
    };
    ConsultTimePage.prototype.getBase64Image = function (imgUri) {
        imgUri = this.WebView.convertFileSrc(imgUri);
        // imgUri=imgUri.replace('file://','');  //解决WKWebView兼容问题
        // imgUri = normalizeURL(imgUri); //解决WKWebView兼容问题
        console.log('imgUri=' + imgUri);
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
            this1.upImgBase64 = dataURL;
            var upobj = {
                type: "sendConsultImg",
                userid: this1.appMin.getUserid(),
                userImgUri: dataURL,
                toUserId: this1.toUserId,
                orderId: this1.orderId
            };
            this1.send(JSON.stringify(upobj));
            //在本地显示发送的图片
            // var myData = new Date();
            // var times = myData.getTime();//当前时间毫秒数
            // let sendImgLocal: objList = {
            //   userId: this1.appMin.getUserid(),
            //   toUserId: this1.toUserId,
            //   consultationId: times.toString(),
            //   isImg: '1',
            //   imgUrl: this1.upImgBase64,
            //   date: myData.toLocaleString()
            // }
            // this1.objList.push(sendImgLocal);
            //alert(JSON.stringify(upobj));
        };
    };
    ConsultTimePage.prototype.selectuserimg_click = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this_1 = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: '发送图片',
                            buttons: [
                                {
                                    text: '图库上传',
                                    role: 'destructive',
                                    // icon: "ios-images-outline",
                                    handler: function () {
                                        _this_1.userSelectImg();
                                    }
                                }, {
                                    text: '拍照上传',
                                    // icon: "ios-camera-outline",
                                    handler: function () {
                                        _this_1.Photograph();
                                    }
                                }, {
                                    text: '取消',
                                    role: 'cancel',
                                    icon: "ios-log-out",
                                    handler: function () {
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
    ConsultTimePage.prototype.img_click = function (imgUrl) {
        this.PhotoViewer.show(imgUrl);
    };
    ConsultTimePage.prototype.img_show_clos_hi_ev = function () {
        //关闭图片预览事件
        this.isShowSelectImg = "none"; //隐藏图片
    };
    ConsultTimePage.prototype.addMyLetterData = function (val, PageTo) {
        //加载对话数据
        //判断是向上加载还是向下加载
        var this1 = this;
        var pages;
        var obj;
        if (PageTo == 'top') {
            pages = this.topStartPage;
            obj = {
                type: "addConsultTime",
                userId: this.appMin.getUserid(),
                toUserId: this.toUserId,
                startPage: pages,
                last_consultationId: this.objList[0]['consultationId'],
                PageTo: PageTo,
                orderId: this.orderId,
            };
        }
        else if (PageTo == 'next') {
            //加载最新
            pages = this.bomStartPage;
            obj = {
                type: "addConsultTime",
                userId: this.appMin.getUserid(),
                toUserId: this.toUserId,
                startPage: pages,
                last_consultationId: this.objList[this.objList.length - 1]['consultationId'],
                PageTo: PageTo,
                orderId: this.orderId,
            };
        }
        else {
            //首次加载
            pages = this.bomStartPage;
        }
        if (PageTo == null) {
            //未传入PageTo参数被视为首次加载
            // console.log('PageTo==null');
            var obj_1 = {
                type: "addConsultTime",
                userId: this.appMin.getUserid(),
                toUserId: this.toUserId,
                startPage: pages,
                orderId: this.orderId,
            };
            this.toUserId = this.toUserId;
            this.send(JSON.stringify(obj_1), false);
            return;
        }
        this.toUserId = this.toUserId;
        this.send(JSON.stringify(obj), false);
    };
    ConsultTimePage.prototype.doRefresh = function (refresher) {
        // this.show_user_line(false, 0);
        // console.log('Begin async operation', refresher);
        this.addMyLetterData(null, 'top');
        setTimeout(function () {
            // console.log('Async operation has ended');
            refresher.target.complete();
        }, 1000);
    };
    ConsultTimePage.prototype.dataHandle = function (obj, isSaveLocal) {
        var _this_1 = this;
        //处理返回值
        // console.log(JSON.stringify(obj));
        if (obj == null) {
            return;
        }
        if (obj == null)
            return;
        if (obj['type'] == 'error') {
            return;
        }
        if (obj['type'] == "addConsultTime_ret") {
            //  console.log('addConsultTime_ret=' + JSON.stringify(obj))
            this.toUserCName = obj['tousercname'];
            this.DateMin = obj['DateMin'];
            var count = obj['count']; //获取数据数量
            var startPage1 = obj['startPage'];
            this.toUserImg = obj["userImgUrl"]; //获取对方头像
            // console.log('getstartPage=' + startPage1);
            if (startPage1 != 10) {
                // console.log('分页加载');
                //代表是分页加载 而不是第一次加载
                var isupadd = obj['PageTo'];
                if (isupadd == "top") {
                    //向上加载 以前的
                    obj['rows'].reverse();
                    // console.log('向上加载 以前的')
                    for (var i = 0; i < count; i++) {
                        this.objList.unshift(obj['rows'][i]); //在数组前面追加数据
                    }
                    this.topStartPage = startPage1;
                }
                else {
                    //加载新的
                    // console.log('加载新的')
                    for (var i = 0; i < count; i++) {
                        this.objList.push(obj['rows'][i]); //在数组后面追加数据
                    }
                    this.bomStartPage = startPage1;
                    if (obj['rows'].length > 0) {
                        setTimeout(function () {
                            _this_1.mycontent.scrollToBottom(0);
                        }, 100);
                    }
                }
            }
            else if (obj['PageTo'] == 'next') {
                // console.log('真加载新的')
                for (var i = 0; i < count; i++) {
                    this.objList.push(obj['rows'][i]); //在数组后面追加数据
                }
                this.bomStartPage = startPage1;
                if (obj['rows'].length > 0) {
                    setTimeout(function () {
                        // console.log("真加载新的scrollToBottom")
                        _this_1.mycontent.scrollToBottom(0);
                    }, 100);
                }
            }
            else {
                // console.log('首次加载');
                this.topStartPage = obj['startPage'];
                this.objList = obj["rows"];
                setTimeout(function () {
                    _this_1.mycontent.scrollToBottom(0);
                }, 100);
            }
            if (obj['rows'].length == 0) {
                return;
            }
            // console.log(this.objList)
            var data = {};
            data['objList'] = this.objList;
            data['topStartPage'] = this.topStartPage;
            data['bomStartPage'] = this.bomStartPage;
            _core__WEBPACK_IMPORTED_MODULE_2__["myLocalStorage"].setItem("consult_time" + this.appMin.getUserid() + '-' + this.toUserId, data, 30);
        }
        if (obj['type'] == "receiveMessages") {
            //收到对话
            this.objList.push(obj['rows'][0]); //向数组追加元素
            setTimeout(function () {
                _this_1.mycontent.scrollToBottom(0);
            }, 100);
        }
        if (obj['type'] == "upAudio_ret") {
            //返回语音
            this.objList.push(obj['rows'][0]);
        }
        if (obj['type'] == "consultTime_addToUserData_ret") {
            // console.log("ctime页面正在处理consultTime_addToUserData_ret=" + JSON.stringify(obj));
            this.toUserCName = obj['name'];
            this.toUserImg = obj['UserImgUrl'];
            //  console.log("toUserImg=" + obj['UserImgUrl']);
            _core__WEBPACK_IMPORTED_MODULE_2__["myLocalStorage"].setItem("toUserImg", obj['UserImgUrl'], 30);
            if (obj["isline"] == "False") {
            }
        }
        this.spinner = false;
    };
    ConsultTimePage.prototype.record_input = function () {
        //按下录音按钮
        //alert('开始');
        this.isShowRecordTime = 'block';
        //执行录音函数
        this.Record();
        return;
    };
    ConsultTimePage.prototype.ionScroll = function () {
        // let scrollHeightmax = this.content1.getContentDimensions().scrollHeight;
        //  let scrollHeight = this.content1.getContentDimensions().contentHeight + this.content1.getContentDimensions().contentTop + this.content1.getContentDimensions().contentBottom + this.content1.getContentDimensions().scrollTop;
        //  console.log("scrollHeight=" + this.content1.getContentDimensions().scrollTop);
    };
    ConsultTimePage.prototype.stopRecord_input = function (isno) {
        //停止录音事件
        this.isShowRecordTime = 'none';
        if (isno == true) {
            this.stop(true);
        }
        else {
            this.stop(false);
        }
        //  alert("录音次数")
    };
    ConsultTimePage.prototype.record_Cache = function () {
        //切换 录音/文本
        if (this.ShowKeybord == "none") {
            this.ShowKeybord = "block";
            this.ShowRecord = "none";
        }
        else {
            this.ShowKeybord = "none";
            this.ShowRecord = "block";
        }
    };
    ConsultTimePage.prototype.addLocalData = function () {
        //加载本地数据
        var _this_1 = this;
        if (_core__WEBPACK_IMPORTED_MODULE_2__["myLocalStorage"].getItem("consult_time" + this.appMin.getUserid() + '-' + this.toUserId) == null) {
            this.addMyLetterData(null, null);
            return;
        }
        else {
            var obj = _core__WEBPACK_IMPORTED_MODULE_2__["myLocalStorage"].getItem("consult_time" + this.appMin.getUserid() + '-' + this.toUserId);
            // console.log("consult_time="+JSON.stringify(obj));
            this.objList = obj.objList;
            this.topStartPage = obj.topStartPage;
            this.bomStartPage = obj.bomStartPage;
            this.toUserImg = _core__WEBPACK_IMPORTED_MODULE_2__["myLocalStorage"].getItem('toUserImg');
            setTimeout(function () {
                _this_1.mycontent.scrollToBottom(0);
            }, 500);
            this.addMyLetterData(null, 'next');
        }
    };
    ConsultTimePage.prototype.audioPaly_click = function (consultationId, timeLength, audioUrl) {
        // console.log('audioUrl=' + audioUrl);
        var this1 = this;
        var audioobj;
        var audioPayImg = document.getElementById('audioPayImg_' + consultationId);
        audioPayImg.src = "../../assets/img/audioPay.gif";
        //倒计时
        var timeLength_ = timeLength;
        var timeLength1 = document.getElementById("timeLength_" + consultationId);
        //倒计时结束
        audioobj = document.getElementById("audioPaly_" + consultationId);
        if (audioobj.paused) {
            console.log('没有播放');
            audioobj.play(); //开始播放
            this1.outTime = setInterval(function () {
                console.log('audioobj.paused=' + audioobj.paused);
                if (!audioobj.paused) {
                    //  audioobj.pause();//暂停播放
                    //  audioPayImg.src = "../../assets/img/audioPayStop.png";
                    //   timeLength1.innerHTML = timeLength.toString() + "'";
                    //  clearInterval(outTime);
                    //audioobj.currentTime=0;
                }
                timeLength_ = timeLength_ - 1;
                timeLength1.innerHTML = timeLength_.toString() + "'";
                if (timeLength_ <= 0) {
                    audioPayImg.src = "../../assets/img/audioPayStop.png";
                    timeLength1.innerHTML = timeLength.toString() + "'";
                    clearInterval(this1.outTime);
                }
            }, 1000);
        }
        else {
            console.log('正在播放 ');
            clearInterval(this1.outTime);
            audioobj.pause(); //暂停播放
            audioPayImg.src = "../../assets/img/audioPayStop.png";
            timeLength1.innerHTML = timeLength.toString() + "'";
            audioobj.currentTime = 0;
        }
    };
    // show_user_line(isShow: boolean, Duration?) {
    //   //显示隐藏用户在线提示
    //   let this1 = this;
    //   if (this.appMin.getDevicereadyOK()) {
    //     this.toast.showWithOptions({
    //       message: "对方在线",
    //       duration: 1500,
    //       position: "top",
    //       addPixelsY: 45
    //     }).subscribe(
    //       toast => {
    //         console.log(toast);
    //       }
    //     );
    //   }
    // }
    ConsultTimePage.prototype.ionViewCanLeave = function () {
        //离开当前页面之前
        if (this.appMin.getDevicereadyOK()) {
            //this.keyboard_.disableScroll(false); //禁用键盘自动抬高
        }
        //显示提示。
        // let alert = this.alertCtrl.create({
        //   title: '提示',
        //   subTitle: '你可以从‘我的订单’回到该页面。',
        //   buttons: [{
        //     text: '确定',
        //     role: '确定',
        //     handler: () => {
        //       return true;
        //     }
        //   }]
        // });
        // alert.present();
        return true;
    };
    ConsultTimePage.prototype.ngOnInit = function () {
        var _this_1 = this;
        this.addLocalData();
        this.addInterval = setInterval(function () {
            // console.log('获取最新聊天数据')
            _this_1.addMyLetterData(null, 'next');
        }, 5000);
    };
    ConsultTimePage.prototype.ngOnDestroy = function () {
        clearInterval(this.addInterval);
    };
    ConsultTimePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consult-time',
            template: __webpack_require__(/*! ./consult-time.page.html */ "./src/app/consult-time/consult-time.page.html"),
            styles: [__webpack_require__(/*! ./consult-time.page.scss */ "./src/app/consult-time/consult-time.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_9__["PhotoViewer"], _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_13__["Media"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _core__WEBPACK_IMPORTED_MODULE_2__["AppMin"], _ionic_native_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_12__["NativeKeyboard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_10__["Toast"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"]])
    ], ConsultTimePage);
    return ConsultTimePage;
}());



/***/ })

}]);
//# sourceMappingURL=consult-time-consult-time-module.js.map