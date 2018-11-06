(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8c98ca68"],{1124:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dete-input-config"},[e("Form",{attrs:{"label-width":120}},t._l(t.currentValue,function(a,n){return e("div",{key:n,staticClass:"config"},["alias"===a.code&&1!==t.cType?e("Form-item",{attrs:{label:a.name}},[e("Input",{model:{value:a.configData.configData,callback:function(e){t.$set(a.configData,"configData",e)},expression:"item.configData.configData"}})],1):t._e(),"format"===a.code?e("Form-item",{attrs:{label:a.name}},[e("Radio-group",{attrs:{vertical:""},on:{"on-change":t.formatSelectChange},model:{value:t.formatSelectVal,callback:function(a){t.formatSelectVal=a},expression:"formatSelectVal"}},[e("Radio",{attrs:{label:"yyyy"}},[e("span",[t._v("年 (例如：2019年)")])]),e("Radio",{attrs:{label:"yyyy-MM"}},[e("span",[t._v("年月 (例如：2019年12月)")])]),e("Radio",{attrs:{label:"yyyy-MM-dd"}},[e("span",[t._v("年月日 (例如：2019年12月30日)")])]),e("Radio",{attrs:{label:"yyyy-MM-dd HH:mm:ss"}},[e("span",[t._v("年月日时分秒 (例如：2018年07月03日 10:05:50)")])]),e("Radio",{attrs:{label:"other"}},[e("span",[t._v("其它")]),e("Input",{staticStyle:{width:"230px"},attrs:{placeholder:"请输入..."},on:{"on-focus":t.otherDataFocus,"on-change":t.otherDataChange},model:{value:t.otherData,callback:function(a){t.otherData=a},expression:"otherData"}})],1)],1),e("p",{staticStyle:{"margin-top":"10px"}},[e("Button",{on:{click:function(a){t.currentVisible=!0}}},[t._v("常见的日期和时间格式")])],1)],1):t._e(),"range"===a.code?e("Form-item",{attrs:{label:a.name}},["year"!==t.rangeType&&"month"!==t.rangeType&&"other"!==t.rangeType?e("DatePicker",{staticStyle:{width:"100%"},attrs:{value:t.rangeDefaultVal,type:t.rangeType,format:t.currentValue[t.formatN].configData.configData,confirm:""},on:{"on-change":t.changeRange}}):e("p",[t._v("当日期格式为“年”、”年月“或其它自定义格式时，日期范围只能使用代码编程实现。")]),e("p",[e("strong",[t._v("提示：")])]),e("p",[t._v("“今天之前”，则代码输出为：<today")]),e("p",[t._v("“今天及之前”，则代码输出为：<=today")]),e("p",[t._v("“今天之后”，则代码输出为：>today")]),e("p",[t._v("“今天及之后”，则代码输出为：>=today")]),e("Row",{staticStyle:{"margin-top":"10px"}},[e("Col",{attrs:{span:"24"}},[e("Editor",{attrs:{sourceType:2},model:{value:a.configData.otherConfig,callback:function(e){t.$set(a.configData,"otherConfig",e)},expression:"item.configData.otherConfig"}})],1)],1)],1):t._e(),"value"===a.code?e("Form-item",{attrs:{label:a.name}},["other"!==t.valueType?e("DatePicker",{staticStyle:{width:"100%"},attrs:{value:t.valueDefaultVal,type:t.valueType,options:t.options,format:t.currentValue[t.formatN].configData.configData},on:{"on-change":t.changeDefault}}):e("p",[t._v("当日期格式为自定义格式时，默认值只能使用代码编程实现。")]),e("Row",{staticStyle:{"margin-top":"10px"}},[e("Col",{attrs:{span:"24"}},[e("Editor",{attrs:{sourceType:2},model:{value:a.configData.otherConfig,callback:function(e){t.$set(a.configData,"otherConfig",e)},expression:"item.configData.otherConfig"}})],1)],1)],1):t._e()],1)})),e("Modal",{attrs:{title:"常见的日期和时间格式"},model:{value:t.currentVisible,callback:function(a){t.currentVisible=a},expression:"currentVisible"}},[e("div",{staticClass:"api"},[e("table",[e("thead",[e("tr",[e("th",[t._v("名称")]),e("th",[t._v("说明")]),e("th",[t._v("示例")])])]),e("tbody",[e("tr",[e("td",[t._v("yyyy")]),e("td",[t._v("年份（四位）")]),e("td",[t._v("2016")])]),e("tr",[e("td",[t._v("yy")]),e("td",[t._v("年份（两位）")]),e("td",[t._v("16")])]),e("tr",[e("td",[t._v("MM")]),e("td",[t._v("月份（两位）")]),e("td",[t._v("01")])]),e("tr",[e("td",[t._v("M")]),e("td",[t._v("月份（一位）")]),e("td",[t._v("1")])]),e("tr",[e("td",[t._v("MMMM")]),e("td",[t._v("月份（英文）")]),e("td",[t._v("January")])]),e("tr",[e("td",[t._v("MMM")]),e("td",[t._v("月份（英文简写）")]),e("td",[t._v("Jan")])]),e("tr",[e("td",[t._v("dd")]),e("td",[t._v("日期（两位）")]),e("td",[t._v("01")])]),e("tr",[e("td",[t._v("d")]),e("td",[t._v("日期（一位）")]),e("td",[t._v("1")])]),e("tr",[e("td",[t._v("Do")]),e("td",[t._v("日期（简写）")]),e("td",[t._v("1st")])]),e("tr",[e("td",[t._v("DD")]),e("td",[t._v("星期（两位）")]),e("td",[t._v("00")])]),e("tr",[e("td",[t._v("D")]),e("td",[t._v("星期（一位）")]),e("td",[t._v("0")])]),e("tr",[e("td",[t._v("dddd")]),e("td",[t._v("星期（英文）")]),e("td",[t._v("Monday")])]),e("tr",[e("td",[t._v("ddd")]),e("td",[t._v("星期（英文简写）")]),e("td",[t._v("Mon")])]),e("tr",[e("td",[t._v("HH")]),e("td",[t._v("小时（24小时制两位）")]),e("td",[t._v("01")])]),e("tr",[e("td",[t._v("H")]),e("td",[t._v("小时（24小时制一位）")]),e("td",[t._v("1")])]),e("tr",[e("td",[t._v("hh")]),e("td",[t._v("小时（12小时制两位）")]),e("td",[t._v("01")])]),e("tr",[e("td",[t._v("h")]),e("td",[t._v("小时（12小时制一位）")]),e("td",[t._v("1")])]),e("tr",[e("td",[t._v("mm")]),e("td",[t._v("分钟（两位）")]),e("td",[t._v("01")])]),e("tr",[e("td",[t._v("m")]),e("td",[t._v("分钟（一位）")]),e("td",[t._v("1")])]),e("tr",[e("td",[t._v("ss")]),e("td",[t._v("秒钟（两位）")]),e("td",[t._v("01")])]),e("tr",[e("td",[t._v("s")]),e("td",[t._v("秒钟（一位）")]),e("td",[t._v("1")])]),e("tr",[e("td",[t._v("SSS")]),e("td",[t._v("毫秒（三位）")]),e("td",[t._v("019")])]),e("tr",[e("td",[t._v("SS")]),e("td",[t._v("毫秒（两位）")]),e("td",[t._v("01")])]),e("tr",[e("td",[t._v("S")]),e("td",[t._v("毫秒（一位）")]),e("td",[t._v("1")])]),e("tr",[e("td",[t._v("A")]),e("td",[t._v("上午与下午（大写）")]),e("td",[t._v("AM/PM")])]),e("tr",[e("td",[t._v("a")]),e("td",[t._v("上午与下午（小写）")]),e("td",[t._v("am/pm")])]),e("tr",[e("td",[t._v("ZZ")]),e("td",[t._v("时区")]),e("td",[t._v("+0800")])])])])]),e("div",{staticClass:"ivu-article"},[e("p",[t._v("以上是系统支持的日期格式，你可以自由组合出你需要的类型，例如：")]),e("ul",[e("li",[e("strong",[t._v("yyyy年M月d日")]),t._v("：2016年1月1日")]),e("li",[e("strong",[t._v("MM/dd/yy")]),t._v("：12/24/16")]),e("li",[e("strong",[t._v("H点m分s秒")]),t._v("：9点41分0秒")])])])])],1)},o=[],r=(e("28a5"),e("c5f6"),e("a0f0")),i=e("c1df"),l=e.n(i),c={name:"dete-input-config",components:{Editor:r["a"]},props:{cType:{type:Number,require:!0},configs:{type:Array,require:!0}},computed:{rangeType:function(){return"yyyy-MM-dd"===this.currentValue[this.formatN].configData.configData?"daterange":"yyyy-MM-dd HH:mm:ss"===this.currentValue[this.formatN].configData.configData?"datetimerange":"yyyy"===this.configs[this.formatN].configData.configData?"year":"yyyy-MM"===this.configs[this.formatN].configData.configData?"month":"other"},valueType:function(){return"yyyy-MM-dd"===this.currentValue[this.formatN].configData.configData?"date":"yyyy-MM-dd HH:mm:ss"===this.currentValue[this.formatN].configData.configData?"datetime":"yyyy"===this.configs[this.formatN].configData.configData?"year":"yyyy-MM"===this.configs[this.formatN].configData.configData?"month":"other"}},watch:{currentValue:function(t,a){this.$emit("input",{value:this.currentValue})}},data:function(){return{uuid:"00000000-0000-0000-0000-000000000001",currentValue:"",formatN:null,rangeN:null,valueN:null,options:{disabledDate:function(){return!1}},currentVisible:!1,rangeDefaultVal:null,valueDefaultVal:null,formatDefaultVal:null,formatSelectVal:null,otherData:null}},created:function(){var t=this;for(var a in this.currentValue=this.deepCopy(this.configs),this.currentValue)"format"===this.currentValue[a].code?(this.currentValue[a].configData.configData||(this.currentValue[a].configData.configData="yyyy-MM-dd"),this.formatN=a,this.formatDefaultVal=this.currentValue[a].configData.configData,"yyyy"!==this.formatDefaultVal&&"yyyy-MM"!==this.formatDefaultVal&&"yyyy-MM-dd"!==this.formatDefaultVal&&"yyyy-MM-dd HH:mm:ss"!==this.formatDefaultVal?(this.formatSelectVal="other",this.otherData=this.formatDefaultVal):this.formatSelectVal=this.formatDefaultVal):"range"===this.currentValue[a].code?(this.rangeN=a,this.currentValue[a].configData.configData&&(this.rangeDefaultVal=this.currentValue[a].configData.configData.split(" - "))):"value"===this.currentValue[a].code&&(this.valueN=a,this.valueDefaultVal=this.currentValue[a].configData.configData);this.valueDefaultVal=l()(this.valueDefaultVal).format(this.formatDefaultVal.toUpperCase()),this.rangeDefaultVal&&2===this.rangeDefaultVal.length&&(this.rangeDefaultVal[0]=l()(this.rangeDefaultVal[0]).format(this.formatDefaultVal.toUpperCase()),this.rangeDefaultVal[1]=l()(this.rangeDefaultVal[1]).format(this.formatDefaultVal.toUpperCase())),this.options.disabledDate=function(a){if(!t.currentValue[t.rangeN].configData.configData)return!1;var e=t.currentValue[t.rangeN].configData.configData;return!(!e[0]||!e[1])&&!l()(l()(a.valueOf()).format("YYYY-MM-DD")).isBetween(l()(e[0]).subtract(1,"days"),l()(e[1]).add(1,"d"))}},methods:{changeRange:function(t){console.log(t),this.options.disabledDate=function(a){return!!t&&!l()(l()(a.valueOf()).format("YYYY-MM-DD")).isBetween(l()(t[0]).subtract(1,"days"),l()(t[1]).add(1,"d"))},this.currentValue[this.rangeN].configData.configData=t.join(" - ")},changeDefault:function(t){console.log(t),this.currentValue[this.valueN].configData.configData=t},formatSelectChange:function(t){"other"!==t&&(this.configs[this.formatN].configData.configData=t)},otherDataChange:function(){"other"===this.formatSelectVal&&(this.configs[this.formatN].configData.configData=this.otherData)},otherDataFocus:function(){this.formatSelectVal="other"}}},s=c,d=(e("998d"),e("2877")),f=Object(d["a"])(s,n,o,!1,null,"8a4199fe",null);f.options.__file="dateInput.config.vue";a["default"]=f.exports},"956e":function(t,a,e){},"998d":function(t,a,e){"use strict";var n=e("956e"),o=e.n(n);o.a}}]);
//# sourceMappingURL=chunk-8c98ca68.011e0a51.js.map