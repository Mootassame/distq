(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{TDBs:function(e,t,a){"use strict";a.r(t),a.d(t,"DashboardModule",(function(){return H}));var c=a("PCNd"),r=a("tyNb"),n=a("mrSG"),i=a("qXBG"),o=a("Vbab"),d=a("F4L5"),s=a("LRQo"),f=a("QmLB"),l=a("zkTT"),h=a("fXoL");let b=(()=>{class e{constructor(e,t){this.errorService=e,this.snackbar=t,this.loadingt=!1,this.countt=[],this.labelt=[]}Transfere(){return Object(n.a)(this,void 0,void 0,(function*(){try{this.loadingt=!0,this.labelt.length=0,this.countt.length=0;const e=yield s.a.findByTransfere();for(const t of e){for(const e of t.user)this.labelt.push(e.fullName);this.countt.push(t.count)}this.loadingt=!1}catch(e){this.errorService.handle(e),this.labelt.length=0,this.countt.length=0,this.loadingt=!1}}))}}return e.\u0275fac=function(t){return new(t||e)(h.Rc(f.a),h.Rc(l.a))},e.\u0275prov=h.Dc({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),u=(()=>{class e{constructor(e,t){this.errorService=e,this.snackbar=t,this.loadingr=!1,this.countr=[],this.labelr=[]}Region(){return Object(n.a)(this,void 0,void 0,(function*(){try{this.loadingr=!0,this.labelr.length=0,this.countr.length=0;const e=yield s.a.findByRegion();for(const t of e)this.labelr.push(Object(o.d)("entities.testimony.enumerators.region."+t._id)),this.countr.push(t.count);this.loadingr=!1}catch(e){this.errorService.handle(e),this.labelr.length=0,this.countr.length=0,this.loadingr=!1}}))}}return e.\u0275fac=function(t){return new(t||e)(h.Rc(f.a),h.Rc(l.a))},e.\u0275prov=h.Dc({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),p=(()=>{class e{constructor(e){this.errorService=e,this.loadingp=!1,this.countp=[],this.labelp=[]}Partenar(){return Object(n.a)(this,void 0,void 0,(function*(){try{this.loadingp=!0,this.labelp.length=0,this.countp.length=0;const e=yield s.a.findByPartenar();for(const t of e)this.labelp.push(t.title),this.countp.push(t.count);this.loadingp=!1}catch(e){this.errorService.handle(e),this.labelp.length=0,this.countp.length=0,this.loadingp=!1}}))}}return e.\u0275fac=function(t){return new(t||e)(h.Rc(f.a))},e.\u0275prov=h.Dc({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var g=a("gcUT"),v=a("ofXK"),y=a("Xa2L"),F=a("MO+k"),w=a("Wp6s");const C=["canvas"];let S=(()=>{class e{constructor(){this.chart=null}ngOnInit(){this.chart=new F.Chart(this.canvas.nativeElement,this.props);var e=Object(o.d)("dashboard.chart.title"),t=Object(o.d)("dashboard.chart.content");F.Chart.plugins.register({afterDraw:function(a){if(0===a.data.datasets[0].data.length){var c=a.chart.ctx,r=a.chart.width,n=a.chart.height;a.clear(),c.save(),c.textAlign="center",c.textBaseline="middle",c.font="16px normal 'Helvetica Nueue'",c.fillText(e,r/2,18),c.fillText(t,r/2,n/2),c.restore()}}})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=h.Bc({type:e,selectors:[["app-dashboard-chart"]],viewQuery:function(e,t){var a;1&e&&h.sd(C,!0),2&e&&h.kd(a=h.Uc())&&(t.canvas=a.first)},inputs:{props:"props"},decls:3,vars:0,consts:[[1,"mat-elevation-z0",2,"border","1px solid #e8e8e8"],["id","chart"],["canvas",""]],template:function(e,t){1&e&&(h.Nc(0,"mat-card",0),h.Ic(1,"canvas",1,2),h.Mc())},directives:[w.a],encapsulation:2}),e})();function m(e,t){1&e&&(h.Nc(0,"div",6),h.Ic(1,"mat-spinner",7),h.Mc())}function x(e,t){if(1&e&&(h.Nc(0,"div"),h.Ic(1,"app-dashboard-chart",8),h.Mc()),2&e){const e=h.Xc();h.wc(1),h.dd("props",e.bar)}}function B(e,t){1&e&&(h.Nc(0,"div",6),h.Ic(1,"mat-spinner",7),h.Mc())}function A(e,t){if(1&e&&(h.Nc(0,"div"),h.Ic(1,"app-dashboard-chart",8),h.Mc()),2&e){const e=h.Xc();h.wc(1),h.dd("props",e.barAssign)}}function k(e,t){1&e&&(h.Nc(0,"div",6),h.Ic(1,"mat-spinner",7),h.Mc())}function E(e,t){if(1&e&&(h.Nc(0,"div"),h.Ic(1,"app-dashboard-chart",8),h.Mc()),2&e){const e=h.Xc();h.wc(1),h.dd("props",e.barPartenar)}}function I(e,t){1&e&&(h.Nc(0,"div",6),h.Ic(1,"mat-spinner",7),h.Mc())}function N(e,t){if(1&e&&(h.Nc(0,"div"),h.Ic(1,"app-dashboard-chart",8),h.Mc()),2&e){const e=h.Xc();h.wc(1),h.dd("props",e.barRegion)}}function M(e,t){1&e&&(h.Nc(0,"div",6),h.Ic(1,"mat-spinner",7),h.Mc())}function R(e,t){if(1&e&&(h.Nc(0,"div"),h.Ic(1,"app-dashboard-chart",8),h.Mc()),2&e){const e=h.Xc();h.wc(1),h.dd("props",e.doughnut)}}let O=(()=>{class e{constructor(e,t,a,c,r,n,i){this.authService=e,this.StatusService=t,this.TransfereService=a,this.RegionService=c,this.PartenarService=r,this.CategoryService=n,this.router=i,this.doughnut={type:"doughnut",data:{labels:this.labelc,datasets:[{data:this.counts,backgroundColor:["#FF6384","#36A2EB","#FFCE56","#ffa600","#ff6361","#ff7c43","#48bee7","#6fc9b0","#00e5a6","#97a7b6","#e6a9b3","#dce1e6","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#0094a3","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56","#ffa600","#ff6361","#ff7c43","#48bee7","#6fc9b0","#00e5a6","#97a7b6","#e6a9b3","#dce1e6","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#0094a3","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8"]}]},options:{title:{display:!0,text:Object(o.d)("dashboard.text.category")}}},this.barPartenar={type:"bar",data:{labels:this.labelp,datasets:[{backgroundColor:["#97a7b6","#e6a9b3","#dce1e6","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#FF6384","#36A2EB","#FFCE56","#ffa600","#ff6361","#ff7c43","#48bee7","#6fc9b0","#00e5a6","#0094a3","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8"],borderColor:"#36A2EB",hoverBackgroundColor:["#97a7b6","#e6a9b3","#dce1e6","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#FF6384","#36A2EB","#FFCE56","#ffa600","#ff6361","#ff7c43","#48bee7","#6fc9b0","#00e5a6","#0094a3","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8"],hoverBorderColor:["#97a7b6","#e6a9b3","#dce1e6","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#FF6384","#36A2EB","#FFCE56","#ffa600","#ff6361","#ff7c43","#48bee7","#6fc9b0","#00e5a6","#0094a3","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8"],data:this.countp}]},options:{title:{display:!0,text:Object(o.d)("dashboard.text.partenar")},legend:{display:!1},scales:{xAxes:[{display:!0}],yAxes:[{ticks:{beginAtZero:!0,callback:function(e){if(e%1==0)return e}}}]}}},this.barRegion={type:"bar",data:{labels:this.labelr,datasets:[{backgroundColor:["#FF6384","#36A2EB","#FFCE56","#ffa600","#ff6361","#ff7c43","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8","#48bee7","#6fc9b0","#00e5a6","#97a7b6","#e6a9b3","#dce1e6","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#0094a3"],borderColor:"#36A2EB",hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56","#ffa600","#ff6361","#ff7c43","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8","#48bee7","#6fc9b0","#00e5a6","#97a7b6","#e6a9b3","#dce1e6","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#0094a3"],hoverBorderColor:["#FF6384","#36A2EB","#FFCE56","#ffa600","#ff6361","#ff7c43","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8","#48bee7","#6fc9b0","#00e5a6","#97a7b6","#e6a9b3","#dce1e6","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#0094a3"],data:this.countr}]},options:{title:{display:!0,text:Object(o.d)("dashboard.text.region")},legend:{display:!1},scales:{xAxes:[{display:!0}],yAxes:[{ticks:{beginAtZero:!0,callback:function(e){if(e%1==0)return e}}}]}}},this.barAssign={type:"bar",data:{labels:this.labelt,datasets:[{backgroundColor:["#ffa600","#ff6361","#ff7c43","#48bee7","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#0094a3","#FF6384","#36A2EB","#FFCE56","#6fc9b0","#00e5a6","#97a7b6","#e6a9b3","#dce1e6","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8"],borderColor:"#36A2EB",hoverBackgroundColor:["#ffa600","#ff6361","#ff7c43","#48bee7","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#0094a3","#FF6384","#36A2EB","#FFCE56","#6fc9b0","#00e5a6","#97a7b6","#e6a9b3","#dce1e6","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8"],hoverBorderColor:["#ffa600","#ff6361","#ff7c43","#48bee7","#5098cd","#73c779","#b5afd1","#0093a6","#ffd6cd","#0094a3","#FF6384","#36A2EB","#FFCE56","#6fc9b0","#00e5a6","#97a7b6","#e6a9b3","#dce1e6","#2cd182","#f85a58","#564e8b","#f85a58","#003f5c","#7efff8"],data:this.countt}]},options:{title:{display:!0,text:Object(o.d)("dashboard.text.assign")},legend:{display:!1},scales:{xAxes:[{display:!0}],yAxes:[{ticks:{beginAtZero:!0,callback:function(e){if(e%1==0)return e}}}]}}},this.bar={type:"bar",data:{labels:this.labels,datasets:[{backgroundColor:["#5098cd","#ffd6cd","#0094a3","#2cd182","#003f5c"],borderColor:"#36A2EB",hoverBackgroundColor:["#5098cd","#ffd6cd","#0094a3","#2cd182","#003f5c"],hoverBorderColor:["#5098cd","#ffd6cd","#0094a3","#2cd182","#003f5c"],data:this.conts}]},options:{title:{display:!0,text:Object(o.d)("dashboard.text.status")},legend:{display:!1},scales:{xAxes:[{display:!0}],yAxes:[{ticks:{beginAtZero:!0,callback:function(e){if(e%1==0)return e}}}]}}}}ngOnInit(){return Object(n.a)(this,void 0,void 0,(function*(){yield this.CategoryService.Category(),yield this.StatusService.Status(),yield this.TransfereService.Transfere(),yield this.RegionService.Region(),yield this.PartenarService.Partenar()}))}get loadings(){return this.StatusService.loadings}get labels(){return this.StatusService.labels}get conts(){return this.StatusService.counts}get labelt(){return this.TransfereService.labelt}get countt(){return this.TransfereService.countt}get loadingt(){return this.TransfereService.loadingt}get labelr(){return this.RegionService.labelr}get countr(){return this.RegionService.countr}get loadingr(){return this.RegionService.loadingr}get loadingp(){return this.PartenarService.loadingp}get labelp(){return this.PartenarService.labelp}get countp(){return this.PartenarService.countp}get counts(){return this.CategoryService.countc}get loadingc(){return this.CategoryService.loadingc}get labelc(){return this.CategoryService.labelc}}return e.\u0275fac=function(t){return new(t||e)(h.Hc(i.a),h.Hc(d.a),h.Hc(b),h.Hc(u),h.Hc(p),h.Hc(g.a),h.Hc(r.b))},e.\u0275cmp=h.Bc({type:e,selectors:[["app-dashboard"]],decls:17,vars:10,consts:[[2,"margin-top","16px"],[1,"row"],[1,"col-xs-12","col-sm-12","col-md-12","col-lg-4",2,"margin-bottom","1em"],["class","app-page-spinner",4,"ngIf"],[4,"ngIf"],[1,"col-xs-12","col-md-6",2,"margin-bottom","1em"],[1,"app-page-spinner"],["color","accent"],[3,"props"]],template:function(e,t){1&e&&(h.Nc(0,"div",0),h.Nc(1,"div",1),h.Nc(2,"div",2),h.wd(3,m,2,0,"div",3),h.wd(4,x,2,1,"div",4),h.Mc(),h.Nc(5,"div",2),h.wd(6,B,2,0,"div",3),h.wd(7,A,2,1,"div",4),h.Mc(),h.Nc(8,"div",2),h.wd(9,k,2,0,"div",3),h.wd(10,E,2,1,"div",4),h.Mc(),h.Nc(11,"div",5),h.wd(12,I,2,0,"div",3),h.wd(13,N,2,1,"div",4),h.Mc(),h.Nc(14,"div",5),h.wd(15,M,2,0,"div",3),h.wd(16,R,2,1,"div",4),h.Mc(),h.Mc(),h.Mc()),2&e&&(h.wc(3),h.dd("ngIf",t.loadings),h.wc(1),h.dd("ngIf",!t.loadings),h.wc(2),h.dd("ngIf",t.loadingt),h.wc(1),h.dd("ngIf",!t.loadingt),h.wc(2),h.dd("ngIf",t.loadingp),h.wc(1),h.dd("ngIf",!t.loadingp),h.wc(2),h.dd("ngIf",t.loadingr),h.wc(1),h.dd("ngIf",!t.loadingr),h.wc(2),h.dd("ngIf",t.loadingc),h.wc(1),h.dd("ngIf",!t.loadingc))},directives:[v.k,y.b,S],encapsulation:2}),e})();var T=a("P+IX");const j=[{path:"",component:a("uswQ").a,children:[{path:"",component:O,canActivate:[T.a]}]}];let P=(()=>{class e{}return e.\u0275mod=h.Fc({type:e}),e.\u0275inj=h.Ec({factory:function(t){return new(t||e)},providers:[],imports:[[r.f.forChild(j)],r.f]}),e})();var X=a("Tx//");let H=(()=>{class e{}return e.\u0275mod=h.Fc({type:e}),e.\u0275inj=h.Ec({factory:function(t){return new(t||e)},providers:[],imports:[[c.a,X.a,P]]}),e})()}}]);