(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{240:function(t,e,n){var content=n(245);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("36a806f5",content,!0,{sourceMap:!1})},241:function(t,e,n){var content=n(247);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("12a24828",content,!0,{sourceMap:!1})},244:function(t,e,n){"use strict";n(240)},245:function(t,e,n){var o=n(54)(!1);o.push([t.i,"div[data-v-69d83286]{background-color:#ecf0f1;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);border-radius:2px;padding:10px;min-height:100px;display:flex;align-items:center;justify-content:center;color:#333;text-align:center;font-size:40px;font-weight:100;margin-bottom:30px}",""]),t.exports=o},246:function(t,e,n){"use strict";n(241)},247:function(t,e,n){var o=n(54)(!1);o.push([t.i,".content[data-v-1744624c]{max-width:750px;margin:0 auto;text-align:center}",""]),t.exports=o},262:function(t,e,n){"use strict";n.r(e);var o=n(8),r=(n(64),n(244),n(30)),c={components:{SuperSecretDiv:Object(r.a)({},(function(){return(0,this._self._c)("div",[this._v("This is a super secret div.")])}),[],!1,null,"69d83286",null).exports},mounted:function(){console.log(this.$auth)},methods:{login:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t.$auth),t.$auth.login();case 3:case"end":return e.stop()}}),e)})))()}}},l=(n(246),n(248)),h=n.n(l),d=n(261),v=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",[t.$auth.loggedIn?e("super-secret-div"):t._e(),t._v(" "),e("div",{staticClass:"content"},[e("h1",[t._v("Hello, "+t._s(t.$auth.loggedIn?t.$auth.user.username:"friend")+"!")]),t._v(" "),t._m(0),t._v(" "),t.$auth.loggedIn?e("p",[t._v("\n        Now that you're authenticated, maybe you should try going to our "),e("nuxt-link",{staticClass:"link",attrs:{to:"/secret"}},[t._v("super secret page")]),t._v("!\n      ")],1):e("p",[t._v("\n        You're not authenticated yet. Maybe you want to "),e("router-link",{attrs:{to:"auth/login"}},[t._v("sign in")]),t._v(" and see what happens?\n      ")],1),t._v(" "),e("v-btn",{attrs:{color:"blue"},on:{click:t.login}},[t._v("Login")])],1)],1)}),[function(){var t=this,e=t._self._c;return e("p",[t._v("\n        This is a super simple example of how to use "),e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank"}},[t._v("Nuxt.js")]),t._v(" and "),e("a",{attrs:{href:"https://auth0.com",target:"_blank"}},[t._v("Auth0")]),t._v(" together.\n      ")])}],!1,null,"1744624c",null);e.default=v.exports;h()(v,{VBtn:d.a})}}]);