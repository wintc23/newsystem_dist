(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9666a97a"],{"63de":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"single-blank-config"},[e("Form",{attrs:{"label-width":190}},t._l(t.currentValue,function(a,i){return e("div",{key:i,staticClass:"config"},["multiple"===a.code?e("Form-item",{attrs:{label:a.name}},[e("i-switch",{model:{value:a.configData.configData,callback:function(e){t.$set(a.configData,"configData",e)},expression:"item.configData.configData"}})],1):t._e(),"paste"===a.code?e("Form-item",{attrs:{label:a.name}},[e("i-switch",{model:{value:a.configData.configData,callback:function(e){t.$set(a.configData,"configData",e)},expression:"item.configData.configData"}})],1):t._e(),"showUploadList"===a.code?e("Form-item",{attrs:{label:a.name}},[e("i-switch",{model:{value:a.configData.configData,callback:function(e){t.$set(a.configData,"configData",e)},expression:"item.configData.configData"}})],1):t._e(),"accept"===a.code?e("Form-item",{attrs:{label:a.name}},[e("Button",{on:{click:function(a){t.currentVisible=!0}}},[t._v("常见的文件格式")]),e("Input",{model:{value:a.configData.configData,callback:function(e){t.$set(a.configData,"configData",e)},expression:"item.configData.configData"}}),e("Transfer",{attrs:{data:t.accepts,"target-keys":t.targetKeys,"render-format":t.renderFormat},on:{"on-change":t.handleChangeTransfer}})],1):t._e(),"format"===a.code?e("Form-item",{attrs:{label:a.name}},[e("p",[t._v('请先选择接受上传的文件类型，此处将会被自动填写。以英文","分割，该配置项需与“接受上传的文件类型”结合使用。前者的配置能够方便用户选择（在选择文件的时候，不支持的类型系统将直接过滤），此选项通过后缀的方式禁止用户上传非指定后缀的文件。')]),e("Input",{model:{value:a.configData.configData,callback:function(e){t.$set(a.configData,"configData",e)},expression:"item.configData.configData"}})],1):t._e(),"maxSize"===a.code?e("Form-item",{attrs:{label:a.name}},[e("InputNumber",{on:{"on-change":function(a){t.numberChange(a,"maxSize")}},model:{value:t.maxSizeDefaultVal,callback:function(a){t.maxSizeDefaultVal=a},expression:"maxSizeDefaultVal"}}),e("Row",{staticStyle:{"margin-top":"10px"}},[e("Col",{attrs:{span:"24"}},[e("Editor",{attrs:{sourceType:2},model:{value:a.configData.otherConfig,callback:function(e){t.$set(a.configData,"otherConfig",e)},expression:"item.configData.otherConfig"}})],1)],1)],1):t._e(),"value"===a.code?e("Form-item",{attrs:{label:a.name}},[e("Input",{model:{value:a.configData.configData,callback:function(e){t.$set(a.configData,"configData",e)},expression:"item.configData.configData"}}),e("Row",{staticStyle:{"margin-top":"10px"}},[e("Col",{attrs:{span:"24"}},[e("Editor",{attrs:{sourceType:2},model:{value:a.configData.otherConfig,callback:function(e){t.$set(a.configData,"otherConfig",e)},expression:"item.configData.otherConfig"}})],1)],1)],1):t._e()],1)})),e("Modal",{attrs:{title:"常见的日期和时间格式"},model:{value:t.currentVisible,callback:function(a){t.currentVisible=a},expression:"currentVisible"}},[e("div",{staticClass:"api"},[e("table",[e("tbody",[e("tr",[e("td",[e("strong",[e("span",[t._v("文件类型")])])]),e("td",[e("strong",[e("span",[t._v("accept属性值")])])]),e("td",[e("strong",[e("span",[t._v("类型")])])])]),e("tr",[e("td",[t._v("所有的音频文件")]),e("td",[t._v("audio/*")]),e("td",[t._v("Audio")])]),e("tr",[e("td",[t._v("所有的视频文件")]),e("td",[t._v("video/*")]),e("td",[t._v("Video")])]),e("tr",[e("td",[t._v("所有的图像文件")]),e("td",[t._v("image/*")]),e("td",[t._v("Image")])]),e("tr",[e("td",[t._v("*.3gpp")]),e("td",[t._v("audio/3gpp, video/3gpp")]),e("td",[t._v("3GPP Audio/Video")])]),e("tr",[e("td",[t._v("*.ac3")]),e("td",[t._v("audio/ac3")]),e("td",[t._v("AC3 Audio")])]),e("tr",[e("td",[t._v("*.asf")]),e("td",[t._v("allpication/vnd.ms-asf")]),e("td",[t._v("Advanced Streaming Format")])]),e("tr",[e("td",[t._v("*.au")]),e("td",[t._v("audio/basic")]),e("td",[t._v("AU Audio")])]),e("tr",[e("td",[t._v("*.css")]),e("td",[t._v("text/css")]),e("td",[t._v("Cascading Style Sheets")])]),e("tr",[e("td",[t._v("*.csv")]),e("td",[t._v("text/csv")]),e("td",[t._v("Comma Separated Values")])]),e("tr",[e("td",[t._v("*.doc")]),e("td",[t._v("application/msword")]),e("td",[t._v("MS Word Document")])]),e("tr",[e("td",[t._v("*.dot")]),e("td",[t._v("application/msword")]),e("td",[t._v("MS Word Template")])]),e("tr",[e("td",[t._v("*.dtd")]),e("td",[t._v("application/xml-dtd")]),e("td",[t._v("Document Type Definition")])]),e("tr",[e("td",[t._v("*.dwg")]),e("td",[t._v("image/vnd.dwg")]),e("td",[t._v("AutoCAD Drawing Database")])]),e("tr",[e("td",[t._v("*.dxf")]),e("td",[t._v("image/vnd.dxf")]),e("td",[t._v("AutoCAD Drawing Interchange Format")])]),e("tr",[e("td",[t._v("*.gif")]),e("td",[t._v("image/gif")]),e("td",[t._v("Graphic Interchange Format")])]),e("tr",[e("td",[t._v("*.htm")]),e("td",[t._v("text/html")]),e("td",[t._v("HyperText Markup Language")])]),e("tr",[e("td",[t._v("*.html")]),e("td",[t._v("text/html")]),e("td",[t._v("HyperText Markup Language")])]),e("tr",[e("td",[t._v("*.jp2")]),e("td",[t._v("image/jp2")]),e("td",[t._v("JPEG-2000")])]),e("tr",[e("td",[t._v("*.jpe")]),e("td",[t._v("image/jpeg")]),e("td",[t._v("JPEG")])]),e("tr",[e("td",[t._v("*.jpeg")]),e("td",[t._v("image/jpeg")]),e("td",[t._v("JPEG")])]),e("tr",[e("td",[t._v("*.jpg")]),e("td",[t._v("image/jpeg")]),e("td",[t._v("JPEG")])]),e("tr",[e("td",[t._v("*.js")]),e("td",[t._v("text/javascript, application/javascript")]),e("td",[t._v("JavaScript")])]),e("tr",[e("td",[t._v("*.json")]),e("td",[t._v("application/json")]),e("td",[t._v("JavaScript Object Notation")])]),e("tr",[e("td",[t._v("*.mp2")]),e("td",[t._v("audio/mpeg, video/mpeg")]),e("td",[t._v("MPEG Audio/Video Stream, Layer II")])]),e("tr",[e("td",[t._v("*.mp3")]),e("td",[t._v("audio/mpeg")]),e("td",[t._v("MPEG Audio Stream, Layer III")])]),e("tr",[e("td",[t._v("*.mp4")]),e("td",[t._v("audio/mp4, video/mp4")]),e("td",[t._v("MPEG-4 Audio/Video")])]),e("tr",[e("td",[t._v("*.mpeg")]),e("td",[t._v("video/mpeg")]),e("td",[t._v("MPEG Video Stream, Layer II")])]),e("tr",[e("td",[t._v("*.mpg")]),e("td",[t._v("video/mpeg")]),e("td",[t._v("MPEG Video Stream, Layer II")])]),e("tr",[e("td",[t._v("*.mpp")]),e("td",[t._v("application/vnd.ms-project")]),e("td",[t._v("MS Project Project")])]),e("tr",[e("td",[t._v("*.ogg")]),e("td",[t._v("application/ogg, audio/ogg")]),e("td",[t._v("Ogg Vorbis")])]),e("tr",[e("td",[t._v("*.pdf")]),e("td",[t._v("application/pdf")]),e("td",[t._v("Portable Document Format")])]),e("tr",[e("td",[t._v("*.png")]),e("td",[t._v("image/png")]),e("td",[t._v("Portable Network Graphics")])]),e("tr",[e("td",[t._v("*.pot")]),e("td",[t._v("application/vnd.ms-powerpoint")]),e("td",[t._v("MS PowerPoint Template")])]),e("tr",[e("td",[t._v("*.pps")]),e("td",[t._v("application/vnd.ms-powerpoint")]),e("td",[t._v("MS PowerPoint Slideshow")])]),e("tr",[e("td",[t._v("*.ppt")]),e("td",[t._v("application/vnd.ms-powerpoint")]),e("td",[t._v("MS PowerPoint Presentation")])]),e("tr",[e("td",[t._v("*.rtf")]),e("td",[t._v("application/rtf, text/rtf")]),e("td",[t._v("Rich Text Format")])]),e("tr",[e("td",[t._v("*.svf")]),e("td",[t._v("image/vnd.svf")]),e("td",[t._v("Simple Vector Format")])]),e("tr",[e("td",[t._v("*.tif")]),e("td",[t._v("image/tiff")]),e("td",[t._v("Tagged Image Format File")])]),e("tr",[e("td",[t._v("*.tiff")]),e("td",[t._v("image/tiff")]),e("td",[t._v("Tagged Image Format File")])]),e("tr",[e("td",[t._v("*.txt")]),e("td",[t._v("text/plain")]),e("td",[t._v("Plain Text")])]),e("tr",[e("td",[t._v("*.wdb")]),e("td",[t._v("application/vnd.ms-works")]),e("td",[t._v("MS Works Database")])]),e("tr",[e("td",[t._v("*.wps")]),e("td",[t._v("application/vnd.ms-works")]),e("td",[t._v("Works Text Document")])]),e("tr",[e("td",[t._v("*.xhtml")]),e("td",[t._v("application/xhtml+xml")]),e("td",[t._v("Extensible HyperText Markup Language")])]),e("tr",[e("td",[t._v("*.xlc")]),e("td",[t._v("application/vnd.ms-excel")]),e("td",[t._v("MS Excel Chart")])]),e("tr",[e("td",[t._v("*.xlm")]),e("td",[t._v("application/vnd.ms-excel")]),e("td",[t._v("MS Excel Macro")])]),e("tr",[e("td",[t._v("*.xls")]),e("td",[t._v("application/vnd.ms-excel")]),e("td",[t._v("MS Excel Spreadsheet")])]),e("tr",[e("td",[t._v("*.xlt")]),e("td",[t._v("application/vnd.ms-excel")]),e("td",[t._v("MS Excel Template")])]),e("tr",[e("td",[t._v("*.xlw")]),e("td",[t._v("application/vnd.ms-excel")]),e("td",[t._v("MS Excel Workspace")])]),e("tr",[e("td",[t._v("*.xml")]),e("td",[t._v("text/xml, application/xml")]),e("td",[t._v("Extensible Markup Language")])]),e("tr",[e("td",[t._v("*.zip")]),e("td",[t._v("application/zip")]),e("td",[t._v("Compressed Archive")])])])])])])],1)},o=[],n=(e("c5f6"),e("a0f0")),d={name:"single-blank-config",components:{Editor:n["a"]},props:{cType:{type:Number,require:!0},configs:{type:Array,require:!0}},watch:{currentValue:function(t,a){this.$emit("input",{value:this.currentValue})}},data:function(){return{uuid:"00000000-0000-0000-0000-0000000000018",currentValue:null,maxSizeN:null,maxSizeDefaultVal:null,valueN:null,valueDefaultVal:null,currentVisible:null,accepts:null,titles:["全部类型","允许上传的类型"],targetKeys:[]}},created:function(){for(var t in this.currentValue=this.deepCopy(this.configs),this.currentValue)"value"===this.currentValue[t].code?(this.valueN=t,this.valueDefaultVal=Number(this.currentValue[t].configData.configData)):"maxSize"===this.currentValue[t].code&&(this.maxSizeN=t,this.maxSizeDefaultVal=Number(this.currentValue[t].configData.configData))},methods:{numberChange:function(t,a){this.currentValue[this[a+"N"]].configData.configData=t},renderFormat:function(t){return t.label},handleChangeTransfer:function(t,a,e){console.log(t),console.log(a),console.log(e),this.targetKeys=t}}},r=d,c=(e("d4d8"),e("2877")),v=Object(c["a"])(r,i,o,!1,null,"792f86cb",null);v.options.__file="upload.config.vue";a["default"]=v.exports},d4d8:function(t,a,e){"use strict";var i=e("d6d2"),o=e.n(i);o.a},d6d2:function(t,a,e){}}]);
//# sourceMappingURL=chunk-9666a97a.6196a37a.js.map