(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58546576"],{"3f0c":function(e,t,s){"use strict";var a=s("50a2"),r=s.n(a);r.a},"50a2":function(e,t,s){},"56b4":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.valid?s("Layout",{staticClass:"register-page"},[s("Row",{staticClass:"register-header"},[s("h1",[e._v("完善信息")])]),s("Row",{staticClass:"register-body"},[s("div",{staticClass:"register-form"},[s("Form",{attrs:{model:e.userInfo,rules:e.validators}},[s("FormItem",{attrs:{label:"邮箱地址","label-width":80,prop:"email"}},[s("Row",{attrs:{type:"flex",gutter:18}},[s("Input",{attrs:{placeholder:"请输入邮箱地址",disabled:""},model:{value:e.userInfo.email,callback:function(t){e.$set(e.userInfo,"email",t)},expression:"userInfo.email"}})],1)],1),s("FormItem",{attrs:{label:"姓名","label-width":80,prop:"name"}},[s("Row",{attrs:{type:"flex",gutter:18}},[s("Input",{attrs:{placeholder:"请输入姓名"},model:{value:e.userInfo.name,callback:function(t){e.$set(e.userInfo,"name",t)},expression:"userInfo.name"}})],1)],1),s("FormItem",{attrs:{label:"验证码","label-width":80,prop:"captcha"}},[s("Row",{attrs:{type:"flex",gutter:18}},[s("Input",{attrs:{placeholder:"请输入验证码"},model:{value:e.userInfo.captcha,callback:function(t){e.$set(e.userInfo,"captcha",t)},expression:"userInfo.captcha"}}),s("img",{attrs:{src:e.captchaUrl,alt:"验证码"},on:{click:e.refreshCaptcha}})],1)],1),s("FormItem",{attrs:{label:"手机号码","label-width":80,prop:"phone"}},[s("Row",{attrs:{type:"flex",gutter:18}},[s("Input",{attrs:{placeholder:"请输入手机号码"},model:{value:e.userInfo.phone,callback:function(t){e.$set(e.userInfo,"phone",t)},expression:"userInfo.phone"}}),s("Button",{attrs:{type:"primary",loading:e.smsWait},on:{click:e.sendSms}},[e.smsWait?s("span",[e._v(e._s(e.smsWaitTime+"秒后重试"))]):s("span",[e._v("发送验证码")])])],1)],1),s("FormItem",{attrs:{label:"验证码","label-width":80,prop:"smsVcode"}},[s("Row",{attrs:{type:"flex",gutter:18}},[s("Input",{attrs:{placeholder:"请输入验证码"},model:{value:e.userInfo.smsVcode,callback:function(t){e.$set(e.userInfo,"smsVcode",t)},expression:"userInfo.smsVcode"}})],1)],1)],1)],1),s("Button",{attrs:{type:"success"},nativeOn:{click:function(t){return e.submit(t)}}},[e._v("确定")])],1)],1):e._e()},r=[],n=(s("a481"),s("96cf"),s("3040")),c=s("b61d"),i=s("b51f"),o={name:"register",data:function(){return{smsWait:!1,smsWaitTime:60,userInfo:{email:"",name:"",phone:"",smsVcode:"",id:null,captcha:"",code:"",activationCode:""},validators:{name:[{required:!0,message:"请输入姓名",trigger:"change"}],phone:[{required:!0,message:"请输入手机号码",trigger:"change"}],smsVcode:[{required:!0,message:"请输入短信验证码",trigger:"blur"}],captcha:[{required:!0,message:"请输入验证码",trigger:"blur"}]},captchaUrl:"",captChaUid:"",valid:!1}},created:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,s=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.userInfo.activationCode=this.$route.query.code,this.userInfo.activationCode){e.next=4;break}return this.$Modal.error({content:"非法访问！",onOk:function(){s.$router.replace({name:"Login"})}}),e.abrupt("return");case 4:return e.next=6,Object(i["validateUrl"])({activationCode:this.userInfo.activationCode});case 6:t=e.sent,t.response.success?(this.valid=!0,this.userInfo.email=t.data):(this.valid=!1,this.$Modal.error({content:"此链接已失效。",onOk:function(){s.$router.replace({name:"Login"})}})),this.refreshCaptcha();case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),computed:{},watch:{},methods:{sendSms:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,s=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(""!==this.userInfo.captcha.replace(/\s/g,"")){e.next=3;break}return this.$Message.warning("请输入验证码！"),e.abrupt("return");case 3:if(""!==(""+this.userInfo.phone).replace(/\s/g,"")){e.next=6;break}return this.$Message.warning("请输入手机号码！"),e.abrupt("return");case 6:return e.next=8,Object(c["validateCaptcha"])({captcha:this.userInfo.captcha,uuid:this.captchaUid});case 8:if(t=e.sent,t.response.success){e.next=12;break}return this.$Message.error("验证码错误，请重新输入！"),e.abrupt("return");case 12:Object(c["sendSmsCode"])({phone:this.userInfo.phone,type:1,captcha:this.userInfo.captcha,captchaUuid:this.captchaUid}).then(function(e){if(e.response.success){s.$Message.success("短信发送成功！"),s.smsWait=!0,s.smsWaitTime=60;var t=setInterval(function(){s.smsWaitTime<=1&&(clearInterval(t),s.smsWait=!1),s.smsWaitTime=s.smsWaitTime-1},1e3)}else s.$Message.error(e.response.msg)});case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),refreshCaptcha:function(){var e=this;Object(c["getCaptcha"])().then(function(t){e.captchaUrl="data:image;base64,".concat(t.data.image),e.captchaUid=t.data.uuid})},submit:function(){var e=this;Object(i["activateUser"])(this.userInfo).then(function(t){t.response.success?(e.$Message.success("激活成功！"),e.$store.commit("user/setToken",t.data.token),e.$store.commit("user/setUserInfo",t.data.user),e.$router.push({name:"Home"})):(e.$Message.error(t.response.msg),e.refreshCaptcha())})}}},u=o,l=(s("3f0c"),s("2877")),p=Object(l["a"])(u,a,r,!1,null,"c5e0640e",null);p.options.__file="Register.vue";t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-58546576.f808777a.js.map