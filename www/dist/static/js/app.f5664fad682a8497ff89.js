webpackJsonp([1],{HWft:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},o,!1,function(e){n("Pe99")},null,null).exports,s=n("/ocq"),c=n("mtWM"),i=n.n(c),u={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}},methods:{query:function(){console.log(+new Date),i.a.get("/api/query",{params:{word:"sd"}},function(e){console.log(e)})}}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("a",{attrs:{href:"javascript:;"},on:{click:this.query}},[this._v("查询")])])},staticRenderFns:[]};var p=n("VU/8")(u,l,!1,function(e){n("HWft")},"data-v-7af8e6f4",null).exports;r.a.use(s.a);var f=new s.a({routes:[{path:"/",name:"HelloWorld",component:p}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:f,components:{App:a},template:"<App/>"})},Pe99:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.f5664fad682a8497ff89.js.map