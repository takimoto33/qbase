(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["3b54dd08"],{1364:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"xfixed-center text-center"},[o("h5",[t._v("ログイン")]),o("div",{attrs:{id:"firebaseui-auth-container"}})])}],a=o("59ca"),i=o("f799"),u={signInSuccessUrl:"/",signInOptions:[{provider:a["auth"].EmailAuthProvider.PROVIDER_ID,signInMethod:a["auth"].EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD},a["auth"].GoogleAuthProvider.PROVIDER_ID,a["auth"].FacebookAuthProvider.PROVIDER_ID,a["auth"].TwitterAuthProvider.PROVIDER_ID,a["auth"].GithubAuthProvider.PROVIDER_ID,"apple.com"]},c=new i["auth"].AuthUI(a["auth"]()),s={components:{},data:function(){return{foo:"foo",bar:"bar"}},watch:{},methods:{proc:function(){console.log("proc",this.foo)}},mounted:function(){console.log("mounted"),c.start("#firebaseui-auth-container",u)},beforeDestroy:function(){console.log("beforeDestroy")}},h=s,f=(o("bf05"),o("2877")),d=o("eebe"),l=o.n(d),I=o("9c40"),b=Object(f["a"])(h,n,r,!1,null,"59e9a99a",null);e["default"]=b.exports;l()(b,"components",{QBtn:I["a"]})},b72e:function(t,e,o){},bf05:function(t,e,o){"use strict";var n=o("b72e"),r=o.n(n);r.a}}]);