(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04944cb9"],{"1ce6":function(a,t,e){},"809e":function(a,t,e){"use strict";var n=e("1ce6"),i=e.n(n);i.a},cad7:function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"time-input-config"},[e("Form",{attrs:{"label-width":120}},a._l(a.currentValue,function(t,n){return e("div",{key:n,staticClass:"config"},["alias"===t.code&&1!==a.cType?e("Form-item",{attrs:{label:t.name}},[e("Input",{model:{value:t.configData.configData,callback:function(e){a.$set(t.configData,"configData",e)},expression:"item.configData.configData"}})],1):a._e(),"format"===t.code?e("Form-item",{attrs:{label:t.name}},[e("Radio-group",{attrs:{vertical:""},on:{"on-change":a.formatSelectChange},model:{value:a.formatDefaultVal,callback:function(t){a.formatDefaultVal=t},expression:"formatDefaultVal"}},[e("Radio",{attrs:{label:"HH"}},[e("span",[a._v("小时 (例如：24小时)")])]),e("Radio",{attrs:{label:"HH:mm"}},[e("span",[a._v("时分 (例如：02:30)")])]),e("Radio",{attrs:{label:"HH:mm:ss"}},[e("span",[a._v("时分秒 (例如：02:30:21)")])])],1)],1):a._e(),"range"===t.code?e("Form-item",{attrs:{label:t.name}},[e("TimePicker",{attrs:{type:"timerange",format:a.formatDefaultVal},on:{"on-change":a.changeRange},model:{value:a.rangeDefaultVal,callback:function(t){a.rangeDefaultVal=t},expression:"rangeDefaultVal"}}),e("Row",{staticStyle:{"margin-top":"10px"}},[e("Col",{attrs:{span:"24"}},[e("Editor",{attrs:{sourceType:2},model:{value:t.configData.otherConfig,callback:function(e){a.$set(t.configData,"otherConfig",e)},expression:"item.configData.otherConfig"}})],1)],1)],1):a._e(),"value"===t.code?e("Form-item",{attrs:{label:t.name}},[e("TimePicker",{attrs:{type:"time",format:a.formatDefaultVal},on:{"on-change":a.changeValue},model:{value:a.valueDefaultVal,callback:function(t){a.valueDefaultVal=t},expression:"valueDefaultVal"}}),e("Row",{staticStyle:{"margin-top":"10px"}},[e("Col",{attrs:{span:"24"}},[e("Editor",{attrs:{sourceType:2},model:{value:t.configData.otherConfig,callback:function(e){a.$set(t.configData,"otherConfig",e)},expression:"item.configData.otherConfig"}})],1)],1)],1):a._e()],1)}))],1)},i=[],o=(e("28a5"),e("c5f6"),e("a0f0")),l={name:"time-input-config",components:{Editor:o["a"]},props:{cType:{type:Number,require:!0},configs:{type:Array,require:!0}},watch:{currentValue:function(a,t){this.$emit("input",{value:this.currentValue})}},data:function(){return{uuid:"00000000-0000-0000-0000-0000000000010",currentValue:"",formatN:null,formatDefaultVal:null,rangeN:null,rangeDefaultVal:null,valueN:null,valueDefaultVal:null,timeRange:[],time:new Date}},created:function(){for(var a in this.currentValue=this.deepCopy(this.configs),this.currentValue)"format"===this.currentValue[a].code?(this.currentValue[a].configData.configData||(this.currentValue[a].configData.configData="HH:mm:ss"),this.formatN=a,this.formatDefaultVal=this.currentValue[a].configData.configData):"range"===this.currentValue[a].code?(this.rangeN=a,this.currentValue[a].configData.configData&&(this.rangeDefaultVal=this.currentValue[a].configData.configData.split(" - "))):"value"===this.currentValue[a].code&&(this.valueN=a,this.valueDefaultVal=this.currentValue[a].configData.configData)},methods:{formatSelectChange:function(a){this.currentValue[this.formatN].configData.configData=a},changeValue:function(a){this.currentValue[this.valueN].configData.configData=a},changeRange:function(a){this.currentValue[this.rangeN].configData.configData=a.join(" - ")}}},r=l,c=(e("809e"),e("2877")),u=Object(c["a"])(r,n,i,!1,null,"6c8bfc28",null);u.options.__file="timeInput.config.vue";t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-04944cb9.9e9e6a05.js.map