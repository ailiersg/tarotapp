(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{olWh:function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),e=t("Pk4o"),o=function(){function l(l,n,t,u){this.Router=l,this.ActivatedRoute=n,this.appMin=t,this.sanitizer=u,this.data={contentImg:""},this.title="","ios"==this.appMin.GetPhoneMode()?this.header_class="header_class":(this.header_class="header_class_md",console.log("\u5224\u65ad\u4e3a\u5b89\u5353\u7cfb\u7edf \u8bbe\u7f6e\u72b6\u6001\u680f\u6837\u5f0f"))}return l.prototype.ngOnInit=function(){this.addSpecialPage()},l.prototype.addSpecialPage=function(){var l=this;this.appMin.get({type:"addSpecialPage",specialId:this.ActivatedRoute.snapshot.queryParams.id}).subscribe(function(n){l.dataHandle(n)})},l.prototype.assembleHTML=function(){return this.sanitizer.bypassSecurityTrustHtml(this.txt)},l.prototype.dataHandle=function(l){"addSpecialPage_ret"==l.type&&(console.log("addSpecialPage_ret="+JSON.stringify(l)),this.title=l.title,this.craet_date=l.craet_date,this.imgUrl=l.imgUrl,this.data=l,this.contentImg=l.contentImg)},l}(),i=function(){return function(){}}(),a=t("pMnS"),c=t("oBZk"),r=t("ZZ/e"),b=t("ZYCi"),s=t("ZYjt"),p=u.nb({encapsulation:0,styles:[[""]],data:{}});function d(l){return u.Jb(0,[(l()(),u.pb(0,0,null,null,13,"ion-header",[["no-border",""]],null,null,null,c.ob,c.r)),u.ob(1,49152,null,0,r.E,[u.h,u.k,u.z],null,null),(l()(),u.pb(2,0,null,0,11,"div",[],[[8,"className",0]],null,null,null,null)),(l()(),u.pb(3,0,null,null,10,"div",[["class","head_berd"]],null,null,null,null,null)),(l()(),u.pb(4,0,null,null,9,"ion-toolbar",[["color","primary"],["mode","ios"]],null,null,null,c.Tb,c.W)),u.ob(5,49152,null,0,r.Fb,[u.h,u.k,u.z],{color:[0,"color"],mode:[1,"mode"]},null),(l()(),u.pb(6,0,null,0,4,"ion-buttons",[["slot","secondary"]],null,null,null,c.cb,c.f)),u.ob(7,49152,null,0,r.o,[u.h,u.k,u.z],null,null),(l()(),u.pb(8,0,null,0,2,"ion-back-button",[["text",""]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.zb(l,10).onClick(t)&&e),e},c.Z,c.c)),u.ob(9,49152,null,0,r.j,[u.h,u.k,u.z],{text:[0,"text"]},null),u.ob(10,16384,null,0,r.k,[[2,r.lb],r.Mb],null,null),(l()(),u.pb(11,0,null,0,2,"ion-title",[],null,null,null,c.Rb,c.U)),u.ob(12,49152,null,0,r.Db,[u.h,u.k,u.z],null,null),(l()(),u.Hb(13,0,["",""])),(l()(),u.pb(14,0,null,null,2,"ion-content",[],null,null,null,c.kb,c.n)),u.ob(15,49152,null,0,r.x,[u.h,u.k,u.z],null,null),(l()(),u.pb(16,0,null,0,0,"img",[["style","width:100%;margin-top: 1rem;"]],[[8,"src",4]],null,null,null,null))],function(l,n){l(n,5,0,"primary","ios"),l(n,9,0,"")},function(l,n){var t=n.component;l(n,2,0,u.rb(1,"",t.header_class,"")),l(n,13,0,t.title),l(n,16,0,t.data.contentImg)})}function h(l){return u.Jb(0,[(l()(),u.pb(0,0,null,null,1,"app-article",[],null,null,null,d,p)),u.ob(1,114688,null,0,o,[b.p,b.a,e.a,s.c],null,null)],function(l,n){l(n,1,0)},null)}var g=u.lb("app-article",o,h,{},{},[]),m=t("Ip0R"),f=t("gIcY");t.d(n,"ArticlePageModuleNgFactory",function(){return x});var x=u.mb(i,[],function(l){return u.wb([u.xb(512,u.j,u.bb,[[8,[a.a,g]],[3,u.j],u.x]),u.xb(4608,m.l,m.k,[u.u,[2,m.w]]),u.xb(4608,f.r,f.r,[]),u.xb(4608,r.c,r.c,[u.z,u.g]),u.xb(4608,r.Lb,r.Lb,[r.c,u.j,u.q]),u.xb(4608,r.Qb,r.Qb,[r.c,u.j,u.q]),u.xb(1073742336,m.b,m.b,[]),u.xb(1073742336,f.p,f.p,[]),u.xb(1073742336,f.e,f.e,[]),u.xb(1073742336,r.Hb,r.Hb,[]),u.xb(1073742336,b.q,b.q,[[2,b.x],[2,b.p]]),u.xb(1073742336,i,i,[]),u.xb(1024,b.n,function(){return[[{path:"",component:o}]]},[])])})}}]);