"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[9998],{9998:(de,f,i)=>{i.r(f),i.d(f,{DriversModule:()=>le});var l=i(8583),d=i(3423),m=i(805),e=i(7716),Z=i(3729),p=i(5593),g=i(1769),h=i(9529),A=i(2453),T=i(369),x=i(1740),_=i(7489),C=i(1795);function I(r,o){if(1&r){const t=e.EpF();e.TgZ(0,"div",10),e.TgZ(1,"span",11),e._UZ(2,"i",12),e.TgZ(3,"input",13),e.NdJ("input",function(s){return e.CHM(t),e.oxw(),e.MAs(9).filterGlobal(s.target.value,"contains")}),e.qZA(),e.qZA(),e.qZA()}}function J(r,o){if(1&r&&(e.TgZ(0,"th",15),e._uU(1),e.ALo(2,"titlecase"),e.qZA()),2&r){const t=o.$implicit;e.Q6J("id",t),e.xp6(1),e.Oqu(e.lcZ(2,2,t))}}function Q(r,o){if(1&r&&(e.TgZ(0,"tr"),e.YNc(1,J,3,4,"th",14),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.headersTable)}}function Y(r,o){1&r&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e._UZ(2,"p-skeleton"),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"p-skeleton"),e.qZA(),e.TgZ(5,"td"),e._UZ(6,"p-skeleton"),e.qZA(),e.TgZ(7,"td"),e._UZ(8,"p-skeleton"),e.qZA(),e.qZA())}const D=function(r){return["/driver/edit-driver",r]};function S(r,o){if(1&r){const t=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._UZ(8,"button",17),e.TgZ(9,"button",18),e.NdJ("click",function(s){e.CHM(t);const u=e.oxw().$implicit;return e.oxw().confirm(s,u.id)}),e.qZA(),e.qZA(),e.qZA()}if(2&r){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(t.fullName),e.xp6(2),e.Oqu(t.ci),e.xp6(2),e.Oqu(t.type.name),e.xp6(2),e.Q6J("routerLink",e.VKq(4,D,t.id))}}function L(r,o){if(1&r&&(e.YNc(0,Y,9,0,"tr",16),e.YNc(1,S,10,6,"tr",16)),2&r){const t=e.oxw();e.Q6J("ngIf",null===t.vehiclesAll),e.xp6(1),e.Q6J("ngIf",null!==t.vehiclesAll)}}const P=function(){return["/driver/add-driver"]},O=function(){return["ci","fullName","type.name"]},E=function(){return[10,20,40]};let R=(()=>{class r{constructor(t,n,s){this.driversService=t,this.confirmationService=n,this.messageService=s,this.headersTable=["nombre","identificacion","Tipo","acciones"]}get vehiclesAll(){return this.driversService.driver}ngOnInit(){this.driversService.getAllDrivers()}confirm(t,n){this.confirmationService.confirm({target:t.target,message:"Estas seguro de eliminar el registro de manera permanente?",icon:"pi pi-exclamation-triangle",acceptLabel:"Si, Estoy seguro.",rejectLabel:"No",accept:()=>{this.driversService.deleteDrivers(n).subscribe(()=>{this.driversService.allAsis=this.driversService.allAsis.filter(s=>s.id!==n),this.messageService.add({severity:"success",summary:"\xc9xito!",detail:"El registro se ha eliminado de manera correcta"}),this.driversService.getAllDrivers()},()=>{this.messageService.add({severity:"error",summary:"Algo salio mal!",detail:"No se pudo eliminar el registro. Intentalo m\xe1s tarde"})})}})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(Z.P),e.Y36(m.YP),e.Y36(m.ez))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-list"]],features:[e._Bn([m.YP,m.ez])],decls:15,vars:11,consts:[[1,"p-5","w-screen"],[1,"flex","justify-between","mb-2"],[1,"text-3xl","font-bold"],["label","Agregar","icon","pi pi-plus","styleClass","p-button-sm p-button-rounded bg-companySecondary border-white w-50",3,"routerLink"],[1,"w-full","pt-3"],["responsiveLayout","scroll","currentPageReportTemplate","Mostrando {first} al {last} de {totalRecords} registros","scrollHeight","450px",3,"scrollable","value","paginator","globalFilterFields","rows","showCurrentPageReport","rowsPerPageOptions"],["dt1",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"flex"],[1,"p-input-icon-left","ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Buscar",3,"input"],[3,"id",4,"ngFor","ngForOf"],[3,"id"],[4,"ngIf"],["pButton","","pRipple","","type","button","icon","pi pi-pencil",1,"p-button-rounded","p-button-outlined","mr-2",3,"routerLink"],["pButton","","pRipple","","type","button","icon","pi pi-trash",1,"p-button-rounded","p-button-outlined","p-button-danger",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div"),e.TgZ(2,"div",1),e.TgZ(3,"h1",2),e._uU(4,"Administraci\xf3n de conductores/ayudantes"),e.qZA(),e._UZ(5,"p-button",3),e.qZA(),e._UZ(6,"mat-divider"),e.qZA(),e.TgZ(7,"div",4),e.TgZ(8,"p-table",5,6),e.YNc(10,I,4,0,"ng-template",7),e.YNc(11,Q,2,1,"ng-template",8),e.YNc(12,L,2,2,"ng-template",9),e.qZA(),e._UZ(13,"p-toast"),e._UZ(14,"p-confirmPopup"),e.qZA(),e.qZA()),2&t&&(e.xp6(5),e.Q6J("routerLink",e.DdM(8,P)),e.xp6(3),e.Q6J("scrollable",null!==n.vehiclesAll)("value",null===n.vehiclesAll?n.headersTable.concat(n.headersTable):n.vehiclesAll)("paginator",!0)("globalFilterFields",e.DdM(9,O))("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",e.DdM(10,E)))},directives:[p.zx,d.rH,g.d,h.iA,m.jx,A.FN,T.P,x.o,l.sg,l.O5,_.O,p.Hq,C.H],pipes:[l.rS],encapsulation:2}),r})(),M=(()=>{class r{constructor(){}ngOnInit(){}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-drivers"]],decls:1,vars:0,template:function(t,n){1&t&&e._UZ(0,"router-outlet")},directives:[d.lC],encapsulation:2}),r})();var j=i(1512),a=i(3679),c=i(8295),b=i(9983),q=i(1095),k=i(6627),v=i(4885),B=i(3425),z=i(2210),w=i(2091),y=i(7441),H=i(3190),N=i(7001),X=i(2458);function $(r,o){1&r&&(e.TgZ(0,"div",3),e.TgZ(1,"div",4),e._UZ(2,"mat-spinner",5),e.qZA(),e.qZA()),2&r&&(e.xp6(2),e.Q6J("diameter",50)("mode","indeterminate"))}function V(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1," Por favor ingrese un nombre "),e.qZA())}function G(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1," Por favor ingrese una c\xe9dula "),e.qZA())}function K(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1," Campo obligatorio "),e.qZA())}function W(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1," Por favor ingrese un n\xfamero de contacto "),e.qZA())}function ee(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1," Por favor ingrese un correo valido "),e.qZA())}function te(r,o){if(1&r&&(e.TgZ(0,"mat-option",18),e._uU(1),e.qZA()),2&r){const t=o.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.name," ")}}function re(r,o){1&r&&(e.TgZ(0,"mat-error"),e._uU(1," Por favor selecione un rol "),e.qZA())}function ie(r,o){1&r&&(e.TgZ(0,"span"),e._uU(1," Guardar "),e.qZA())}function oe(r,o){1&r&&e._UZ(0,"mat-progress-spinner",5),2&r&&e.Q6J("diameter",24)("mode","indeterminate")}const ne=function(){return["/driver"]};function ae(r,o){if(1&r){const t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"div",6),e.TgZ(2,"h1",7),e._uU(3,"Agregar personal"),e.qZA(),e._UZ(4,"p-button",8),e.qZA(),e._UZ(5,"mat-divider"),e.TgZ(6,"form",9,10),e.TgZ(8,"mat-form-field",11),e.TgZ(9,"mat-label"),e._uU(10,"Nombre Completo"),e.qZA(),e._UZ(11,"input",12),e.YNc(12,V,2,0,"mat-error",2),e.qZA(),e.TgZ(13,"mat-form-field"),e.TgZ(14,"mat-label"),e._uU(15,"Dni"),e.qZA(),e._UZ(16,"input",12),e.YNc(17,G,2,0,"mat-error",2),e.qZA(),e.TgZ(18,"mat-form-field"),e.TgZ(19,"mat-label"),e._uU(20,"Direcci\xf3n"),e.qZA(),e._UZ(21,"input",12),e.YNc(22,K,2,0,"mat-error",2),e.qZA(),e.TgZ(23,"mat-form-field"),e.TgZ(24,"mat-label"),e._uU(25,"N\xfamero de contacto"),e.qZA(),e._UZ(26,"input",12),e.YNc(27,W,2,0,"mat-error",2),e.qZA(),e.TgZ(28,"mat-form-field"),e.TgZ(29,"mat-label"),e._uU(30,"Correo electr\xf3nico"),e.qZA(),e._UZ(31,"input",13),e.YNc(32,ee,2,0,"mat-error",2),e.qZA(),e.TgZ(33,"mat-form-field"),e.TgZ(34,"mat-label"),e._uU(35,"Rol"),e.qZA(),e.TgZ(36,"mat-select",14),e.YNc(37,te,2,2,"mat-option",15),e.qZA(),e.YNc(38,re,2,0,"mat-error",2),e.qZA(),e._UZ(39,"div"),e.TgZ(40,"button",16),e.NdJ("click",function(){return e.CHM(t),e.oxw().addVehicle()}),e.YNc(41,ie,2,0,"span",2),e.YNc(42,oe,1,2,"mat-progress-spinner",17),e.qZA(),e.qZA(),e.qZA()}if(2&r){const t=e.oxw();e.xp6(4),e.Q6J("routerLink",e.DdM(19,ne)),e.xp6(2),e.Q6J("formGroup",t.driverForm),e.xp6(5),e.Q6J("formControlName","fullName"),e.xp6(1),e.Q6J("ngIf",t.driverForm.get("fullName").hasError("required")),e.xp6(4),e.Q6J("formControlName","ci"),e.xp6(1),e.Q6J("ngIf",t.driverForm.get("ci").hasError("required")),e.xp6(4),e.Q6J("formControlName","address"),e.xp6(1),e.Q6J("ngIf",t.driverForm.get("address").hasError("required")),e.xp6(4),e.Q6J("formControlName","phone"),e.xp6(1),e.Q6J("ngIf",t.driverForm.get("phone").hasError("required")),e.xp6(4),e.Q6J("formControlName","email"),e.xp6(1),e.Q6J("ngIf",t.driverForm.get("email").hasError("email")),e.xp6(4),e.Q6J("formControlName","type"),e.xp6(1),e.Q6J("ngForOf",t.typeDrivers),e.xp6(1),e.Q6J("ngIf",t.driverForm.get("type").hasError("required")),e.xp6(2),e.Q6J("color","primary")("disabled",t.driverForm.disabled),e.xp6(1),e.Q6J("ngIf",!t.driverForm.disabled),e.xp6(1),e.Q6J("ngIf",t.driverForm.disabled)}}let F=(()=>{class r{constructor(t,n,s,u,U){this._formBuilder=t,this.driverService=n,this.router=s,this.snackBar=u,this.activatedRoute=U,this.driverId="",this.loading=!0,this.typeDrivers=[]}ngOnInit(){if(this.driverService.getCatalogo("TYPEDRIVER").subscribe(t=>this.typeDrivers=t.catalog.detailCatalog),!this.router.url.includes("edit-driver"))return this.loading=!1,void(this.driverForm=this._formBuilder.group({fullName:[,[a.kI.required]],ci:["",[a.kI.required]],address:["",[a.kI.required]],licence:[""],phone:[""],email:["",[a.kI.email]],type:["",[a.kI.required]],status:[!0]}));this.activatedRoute.params.pipe((0,H.w)(({id:t})=>this.driverService.getDriverId(t))).subscribe(t=>{this.driverForm=this._formBuilder.group({fullName:[t.driver.fullName,[a.kI.required]],ci:[t.driver.ci,[a.kI.required]],address:[t.driver.address,[a.kI.required]],licence:[t.driver.licence],phone:[t.driver.phone],email:[t.driver.email,[a.kI.email]],type:[t.driver.type.id,[a.kI.required]],status:[t.driver.status]}),this.driverId=t.driver.id,this.loading=!1})}addVehicle(){this.driverForm.invalid||(this.driverForm.disable(),""===this.driverId?this.driverService.addDriver(this.driverForm.value).subscribe(t=>{this.router.navigate(["/driver"]),this.mostrarSnakbar("Registro creado")}):this.driverService.updateDriver(this.driverId,this.driverForm.value).subscribe(t=>{this.router.navigate(["/driver"]),this.mostrarSnakbar("Registro actualizado")}))}mostrarSnakbar(t){this.snackBar.open(t,"ok!",{duration:2500})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(a.qu),e.Y36(Z.P),e.Y36(d.F0),e.Y36(N.ux),e.Y36(d.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-add"]],decls:3,vars:2,consts:[[1,"p-5","w-screen"],["class","grid justify-items-stretch",4,"ngIf"],[4,"ngIf"],[1,"grid","justify-items-stretch"],[1,"justify-self-center","pt-50"],[3,"diameter","mode"],[1,"flex","justify-between","mb-2"],[1,"text-3xl","font-bold"],["label","Regresar","icon","pi pi-angle-left","styleClass","p-button-sm p-button-rounded bg-companySecondary border-white w-50",3,"routerLink"],[1,"grid","gap-4","md:grid-cols-2","sm:grid-cols-2","mt-2","bg-white","p-3",3,"formGroup"],["vehicleInNgForm","ngForm"],[1,"w-full","col-span-2"],["type","text","matInput","",3,"formControlName"],["type","email","matInput","",3,"formControlName"],["name","rol",3,"formControlName"],[3,"value",4,"ngFor","ngForOf"],["mat-flat-button","",1,"fuse-mat-button-medium","mt-6","w-1/2",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[3,"value"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.YNc(1,$,3,2,"div",1),e.YNc(2,ae,43,20,"div",2),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",n.loading),e.xp6(1),e.Q6J("ngIf",!n.loading))},directives:[l.O5,v.$g,p.zx,d.rH,g.d,a._Y,a.JL,a.sg,c.KE,c.hX,b.Nt,a.Fj,a.JJ,a.u,y.gD,l.sg,q.lW,c.TO,X.ey,v.Ou],encapsulation:2}),r})();const se=[{path:"",component:M,children:[{path:"",component:R},{path:"add-driver",component:F},{path:"edit-driver/:id",component:F}]}];let le=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[d.Bz.forChild(se),l.ez,g.t,p.hJ,C.T,_.m,h.U$,l.ez,T.n,A.EV,j.S,a.UX,c.lN,b.c,q.ot,v.Cq,B.gz,x.j,k.Ps,z.kW,w.p0,y.LD,N.ZX]]}),r})()}}]);