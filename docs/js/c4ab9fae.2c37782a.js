(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["c4ab9fae"],{3455:function(t,o,a){},7924:function(t,o,a){"use strict";a.r(o);var e=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("q-page",{attrs:{padding:""}},[a("p",[t._v("ログイン完了")]),a("div",{staticClass:"text-center"},[a("q-btn",{attrs:{color:"negative",icon:"mdi-logout",label:"ログアウト"},on:{click:t.logout}}),a("pre",[t._v("      "+t._s(t.$g.user)+"\n    ")]),a("div",{staticClass:"q-gutter-x-sm"},[a("q-avatar",[a("img",{attrs:{src:t.$g.user.photoURL}})]),a("q-avatar",{attrs:{size:"md"}},[a("img",{attrs:{src:t.$g.user.photoURL}})]),a("q-avatar",{attrs:{size:"100px"}},[a("img",{attrs:{src:t.$g.user.photoURL}})]),a("q-btn",{attrs:{round:""}},[a("q-avatar",{attrs:{size:"40px"}},[a("img",{attrs:{src:t.$g.user.photoURL}})])],1)],1)],1)])},n=[],s={components:{},data:function(){return{foo:"foo",bar:"bar"}},watch:{},methods:{logout:function(){this.$firebase.auth.signOut().then((function(){console.log("logout 完了")})).catch((function(t){console.log("logout エラー",t)}))}},mounted:function(){console.log("mounted")},beforeDestroy:function(){console.log("beforeDestroy")}},r=s,c=(a("a38c"),a("2877")),i=a("eebe"),u=a.n(i),l=a("9989"),g=a("9c40"),f=a("cb32"),p=Object(c["a"])(r,e,n,!1,null,"002b515c",null);o["default"]=p.exports;u()(p,"components",{QPage:l["a"],QBtn:g["a"],QAvatar:f["a"]})},a38c:function(t,o,a){"use strict";var e=a("3455"),n=a.n(e);n.a}}]);