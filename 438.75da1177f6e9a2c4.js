"use strict";(self.webpackChunktest_bd=self.webpackChunktest_bd||[]).push([[438],{6438:(h,s,e)=>{e.r(s),e.d(s,{RockOutComponent:()=>g});var c=e(6814),p=e(8504),_=e(2296),l=e(1175),m=e(2058),t=e(2029);const d=["myVideo"];function u(o,i){1&o&&(t.TgZ(0,"mat-icon",1),t._uU(1,"play_arrow"),t.qZA())}const f=function(){return["/greeting"]};let g=(()=>{class o{constructor(){this.myVideo={},this.playing=!1}ngAfterViewInit(){console.log(this.myVideo.nativeElement.paused),this.playing=!this.myVideo.nativeElement.paused}toggle(){if(!this.myVideo.nativeElement.paused&&this.myVideo.nativeElement.currentTime>0)return this.myVideo.nativeElement.pause(),void(this.playing=!1);this.myVideo.nativeElement.paused&&this.myVideo.nativeElement.play().then(()=>{this.playing=!0}).catch(n=>{(0,p._)(n)})}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-rock-out"]],viewQuery:function(n,a){if(1&n&&t.Gf(d,5),2&n){let r;t.iGM(r=t.CRH())&&(a.myVideo=r.first)}},standalone:!0,features:[t.jDz],decls:15,vars:4,consts:[[1,"back",3,"routerLink"],["color","primary"],[1,"ctn",3,"click"],["muted","",3,"volume"],["myVideo",""],["src","./assets/rock_out.mp4","type","video/mp4"],[1,"video__controls"],["color","primary",4,"ngIf"],[1,"footer"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"mat-icon",1),t._uU(2,"arrow_left"),t.qZA(),t.TgZ(3,"span"),t._uU(4,"Go Back"),t.qZA()(),t.TgZ(5,"div",2),t.NdJ("click",function(){return a.toggle()}),t.TgZ(6,"video",3,4),t._UZ(8,"source",5),t._uU(9," Browser not supported "),t.qZA(),t.TgZ(10,"div",6),t.YNc(11,u,2,0,"mat-icon",7),t.qZA()(),t.TgZ(12,"div",8)(13,"span"),t._uU(14,"Sb"),t.qZA()()),2&n&&(t.Q6J("routerLink",t.DdM(3,f)),t.xp6(6),t.Q6J("volume",.5),t.xp6(5),t.Q6J("ngIf",!a.playing))},dependencies:[c.ez,c.O5,_.ot,l.Ps,l.Hw,m.rH],styles:["[_nghost-%COMP%]{padding:4px 0;display:flex;flex-direction:column;height:100%;justify-content:center;background-color:#000}.back[_ngcontent-%COMP%]{height:65px;font-family:Helvetica,Arial,sans-serif;text-transform:uppercase;font-size:16px;font-weight:700;display:flex;align-items:center}.ctn[_ngcontent-%COMP%]{flex:1;position:relative;text-align:center}.ctn[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:100%;height:auto;object-fit:contain;flex:1}.footer[_ngcontent-%COMP%]{height:65px;width:100%;align-self:center;padding:4px;display:flex;align-items:center;justify-content:center}.footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:Helvetica,Arial,sans-serif;width:-moz-fit-content;width:fit-content;border:2px solid white;font-size:42px;font-weight:700}.video__controls[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:100}.video__controls[_ngcontent-%COMP%]   .mat_icon[_ngcontent-%COMP%]{font-size:64px!important;height:64px!important;width:64px!important;border:2px solid white;border-radius:8px;color:#fff!important;box-shadow:1px 1px 2px 2px #a9a9a9}"]}),o})()}}]);