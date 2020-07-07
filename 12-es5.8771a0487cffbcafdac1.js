function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var n,i=_getPrototypeOf(t);if(e){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{LYUz:function(t,e,n){"use strict";n.r(e),n.d(e,"MountsModule",(function(){return T}));var i,o=n("ofXK"),c=n("FTbq"),r=n("aceb"),u=n("3Pt+"),s=n("tyNb"),a=n("wd/R"),l=n("LRne"),f=n("lJxs"),p=n("fXoL"),h=n("XNiG"),d=n("itXk"),m=n("JYL7"),b=n("L7Zs"),g=((i=function(){function t(e){var n=this;_classCallCheck(this,t),this.connectService=e,this.listTrigger=new h.a,this.addTrigger=new h.a,this.unmountTrigger=new h.a;var i=this;this.list$=new(function(t){_inherits(n,t);var e=_createSuper(n);function n(){var t;return _classCallCheck(this,n),(t=e.apply(this,arguments)).prerequest$=Object(d.a)([i.listTrigger,i.connectService.listCmd$.verify(t.cmd)],(function(t,e){return e})),t}return n}(m.k)),this.list$.deploy(),this.add$=new(function(t){_inherits(n,t);var e=_createSuper(n);function n(){var t;return _classCallCheck(this,n),(t=e.apply(this,arguments)).prerequest$=Object(d.a)([i.addTrigger,i.connectService.listCmd$.verify(t.cmd)],(function(t,e){return[Object.assign(Object.assign({},e[0]),t),e[1]]})),t}return n}(m.m)),this.add$.deploy(),this.add$.getOutput().subscribe((function(t){0===t[1].length&&n.refreshList()})),this.unmount$=new(function(t){_inherits(n,t);var e=_createSuper(n);function n(){var t;return _classCallCheck(this,n),(t=e.apply(this,arguments)).prerequest$=Object(d.a)([i.unmountTrigger,i.connectService.listCmd$.verify(t.cmd)],(function(t,e){return[Object.assign(Object.assign({},e[0]),t),e[1]]})),t}return n}(m.n)),this.unmount$.deploy(),this.unmount$.getOutput().subscribe((function(t){0===t[1].length&&n.refreshList()}))}return _createClass(t,[{key:"refreshList",value:function(){this.list$.clearCache(),this.listTrigger.next(1)}},{key:"mount",value:function(t){this.addTrigger.next(t)}},{key:"unmount",value:function(t){this.unmountTrigger.next(t)}}]),t}()).\u0275fac=function(t){return new(t||i)(p.ic(b.a))},i.\u0275prov=p.Ub({token:i,factory:i.\u0275fac,providedIn:"root"}),i),y=["mountTypeInp"];function v(t,e){if(1&t){var n=p.fc();p.ec(0,"td"),p.Uc(1),p.dc(),p.ec(2,"td"),p.Uc(3),p.dc(),p.ec(4,"td"),p.Uc(5),p.dc(),p.ec(6,"td"),p.ec(7,"button",3),p.mc("click",(function(){p.Kc(n);var t=e.$implicit;return p.oc().unmount(t)})),p.Zb(8,"nb-icon",4),p.dc(),p.dc()}if(2&t){var i=e.$implicit;p.Mb(1),p.Vc(i.Fs),p.Mb(2),p.Vc(i.MountPoint),p.Mb(2),p.Vc(i.MountedTimeHumanReadable)}}function O(t,e){if(1&t&&(p.ec(0,"nb-option",14),p.Uc(1),p.dc()),2&t){var n=e.$implicit;p.wc("value",n),p.Mb(1),p.Wc(" ",n," ")}}function w(t,e){if(1&t){var n=p.fc();p.ec(0,"th"),p.ec(1,"input",5),p.mc("ngModelChange",(function(t){return p.Kc(n),p.oc().newMount.fs=t})),p.dc(),p.dc(),p.ec(2,"th"),p.ec(3,"input",6),p.mc("ngModelChange",(function(t){return p.Kc(n),p.oc().newMount.mountPoint=t})),p.dc(),p.dc(),p.ec(4,"th"),p.ec(5,"input",7,8),p.mc("input",(function(){return p.Kc(n),p.oc().onMountTypeInpChange()})),p.dc(),p.ec(7,"nb-autocomplete",9,10),p.mc("selectedChange",(function(t){return p.Kc(n),p.oc().onMountTypeInpSecChange(t)})),p.Sc(9,O,2,2,"nb-option",11),p.pc(10,"async"),p.dc(),p.dc(),p.ec(11,"th"),p.ec(12,"button",12),p.mc("click",(function(){return p.Kc(n),p.oc().mount()})),p.Zb(13,"nb-icon",13),p.dc(),p.dc()}if(2&t){var i=p.Gc(8),o=p.oc();p.Mb(1),p.wc("ngModel",o.newMount.fs),p.Mb(2),p.wc("ngModel",o.newMount.mountPoint),p.Mb(2),p.wc("nbAutocomplete",i),p.Mb(4),p.wc("ngForOf",p.qc(10,4,o.filteredOptions$))}}var M,C,_,k=[{path:"",component:(M=function(){function t(e,n){_classCallCheck(this,t),this.mountService=e,this.toastr=n,this.scrb=[],this.columns=[{key:"Fs",title:"Filesystem",width:"37.5%"},{key:"MountPoint",title:"Mounted point",width:"37.5%"},{key:"MountedTimeHumanReadable",title:"Mounted time",width:"20%"},{key:"",title:"Action",width:"5%"}],this.data=[],this.newMount={fs:"",mountPoint:"",mountType:""}}return _createClass(t,[{key:"filter",value:function(t){var e=t.toLowerCase();return this.options.filter((function(t){return t.toLowerCase().includes(e)}))}},{key:"getFilteredOptions",value:function(t){var e=this;return Object(l.a)(t).pipe(Object(f.a)((function(t){return e.filter(t)})))}},{key:"onMountTypeInpChange",value:function(){this.newMount.mountType=this.mountTypeInp.nativeElement.value,this.filteredOptions$=this.getFilteredOptions(this.mountTypeInp.nativeElement.value)}},{key:"onMountTypeInpSecChange",value:function(t){this.filteredOptions$=this.getFilteredOptions(t)}},{key:"refresh",value:function(){this.mountService.refreshList()}},{key:"mount",value:function(){this.mountService.mount(this.newMount)}},{key:"unmount",value:function(t){this.unmountItem=t,this.mountService.unmount({mountPoint:t.MountPoint})}},{key:"ngOnInit",value:function(){var t=this;this.scrb.push(this.mountService.list$.getOutput().subscribe((function(e){t.configuration.isLoading=!1,0===e[1].length?t.data=e[0].mountPoints.map((function(t){return Object.assign(Object.assign({},t),{MountedTimeHumanReadable:a(t.MountedOn).fromNow()})})):t.toastr.danger(e[1].join(" \n"),"fetch mounts list failure",{icon:"list-tree",iconPack:"css.gg",destroyByClick:!0,duration:0})}))),this.scrb.push(this.mountService.add$.getOutput().subscribe((function(e){0===e[1].length||t.toastr.danger(e[1].join(" \n"),"Create mount point failure",{icon:"alert-triangle-outline"})}))),this.scrb.push(this.mountService.unmount$.getOutput().subscribe((function(e){0===e[1].length?(t.newMount.fs=t.unmountItem.Fs,t.newMount.mountPoint=t.unmountItem.MountPoint,t.newMount.mountType="",t.toastr.success(t.unmountItem.MountPoint,"Unmount actived mount successfully",{icon:"checkmark-circle-outline"})):t.toastr.danger(e[1].join(" \n"),"Unmount actived mount failure",{icon:"alert-triangle-outline"})}))),this.refresh(),this.configuration=Object.assign({},c.c),this.configuration.searchEnabled=!1,this.configuration.isLoading=!0,this.options=["mount","cmount","mount2"],this.filteredOptions$=Object(l.a)(this.options)}},{key:"ngOnDestroy",value:function(){this.scrb.forEach((function(t){return t.unsubscribe()})),this.scrb=[]}}]),t}(),M.\u0275fac=function(t){return new(t||M)(p.Yb(g),p.Yb(r.ib))},M.\u0275cmp=p.Sb({type:M,selectors:[["app-mounts"]],viewQuery:function(t,e){var n;1&t&&p.Zc(y,!0),2&t&&p.Fc(n=p.nc())&&(e.mountTypeInp=n.first)},decls:9,vars:4,consts:[["icon","sync",3,"click"],[3,"configuration","data","columns","filtersTemplate"],["filtersTemplate",""],["nbButton","","status","danger","size","small",3,"click"],["icon","close-outline"],["type","text","nbInput","","fullWidth","","fieldSize","small","placeholder","remote path to be mounted",3,"ngModel","ngModelChange"],["type","text","nbInput","","fullWidth","","fieldSize","small","placeholder","path on server machine",3,"ngModel","ngModelChange"],["nbInput","","type","text","fullWidth","","fieldSize","small","placeholder","mount type",3,"nbAutocomplete","input"],["mountTypeInp",""],[3,"selectedChange"],["auto",""],[3,"value",4,"ngFor","ngForOf"],["nbButton","","status","info","size","small",3,"click"],["icon","plus-outline"],[3,"value"]],template:function(t,e){if(1&t&&(p.ec(0,"nb-card"),p.ec(1,"nb-card-header"),p.Uc(2," Mount Point Manager "),p.ec(3,"nb-icon",0),p.mc("click",(function(){return e.refresh()})),p.dc(),p.dc(),p.ec(4,"nb-card-body"),p.ec(5,"ngx-table",1),p.Sc(6,v,9,3,"ng-template"),p.dc(),p.dc(),p.dc(),p.Sc(7,w,14,6,"ng-template",null,2,p.Tc)),2&t){var n=p.Gc(8);p.Mb(5),p.wc("configuration",e.configuration)("data",e.data)("columns",e.columns)("filtersTemplate",n)}},directives:[r.r,r.u,r.C,r.q,c.b,r.n,r.F,u.a,u.e,u.h,r.j,r.i,o.n,r.R],pipes:[o.b],styles:["nb-card-header[_ngcontent-%COMP%] {\n\t\t\t\tdisplay: flex;\n\t\t\t}\n\t\t\tnb-card-header[_ngcontent-%COMP%]    > nb-icon[_ngcontent-%COMP%] {\n\t\t\t\tmargin-left: auto;\n\t\t\t}"]}),M)}],P=((_=function t(){_classCallCheck(this,t)}).\u0275mod=p.Wb({type:_}),_.\u0275inj=p.Vb({factory:function(t){return new(t||_)},imports:[[s.g.forChild(k)],s.g]}),_),T=((C=function t(){_classCallCheck(this,t)}).\u0275mod=p.Wb({type:C}),C.\u0275inj=p.Vb({factory:function(t){return new(t||C)},imports:[[o.c,P,c.d,r.v,r.E,r.G,r.k,r.o,u.b]]}),C)}}]);