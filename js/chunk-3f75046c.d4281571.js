(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f75046c"],{6786:function(a,e,t){},b616:function(a,e,t){"use strict";var r=t("6786"),n=t.n(r);n.a},d609:function(a,e,t){"use strict";t.r(e);var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("Layout",{staticClass:"area-manager"},[t("Button",{attrs:{type:"primary"},nativeOn:{click:function(e){a.addArea()}}},[a._v("添加")]),t("Tree",{attrs:{data:a.areaData,render:a.treeRender}}),t("Modal",{attrs:{"mask-closable":!1,title:"编辑地区"},on:{"on-ok":a.saveArea},model:{value:a.editModal,callback:function(e){a.editModal=e},expression:"editModal"}},[t("Form",{attrs:{model:a.areaFormData}},[t("FormItem",{attrs:{label:"类型"}},[t("Select",{model:{value:a.areaFormData.type,callback:function(e){a.$set(a.areaFormData,"type",e)},expression:"areaFormData.type"}},a._l(a.areaTypes,function(e){return t("Option",{key:e.value,attrs:{value:e.value}},[a._v(a._s(e.title))])}))],1),t("FormItem",{attrs:{label:"名称"}},[t("Input",{model:{value:a.areaFormData.name,callback:function(e){a.$set(a.areaFormData,"name",e)},expression:"areaFormData.name"}})],1),t("FormItem",{attrs:{label:"排序"}},[t("Input",{model:{value:a.areaFormData.sort,callback:function(e){a.$set(a.areaFormData,"sort",e)},expression:"areaFormData.sort"}})],1)],1)],1)],1)},n=[],o=(t("ac4d"),t("8a81"),t("ac6a"),t("f400"),t("7f7f"),t("599c")),l={data:function(){return{areaData:[],editModal:!1,areaFormData:{code:"",id:null,level:0,name:"",parentId:null,sort:0,type:0},areaTypes:[{value:1,title:"国家"},{value:2,title:"中央部委"},{value:3,title:"省"},{value:4,title:"市"},{value:5,title:"区县"}]}},created:function(){this.getAreaList()},methods:{treeRender:function(a,e){var t=this,r=(e.root,e.node,e.data);return a("span",[a("Tag",{props:{color:"success"}},r.name),a("Button",{props:{type:"primary",icon:"md-add",size:"small"},nativeOn:{click:function(){t.addArea(r)}}})])},addArea:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.areaFormData={code:"",id:null,level:0,name:"",parentId:a?a.id:null,sort:0,type:0},this.editModal=!0},saveArea:function(){var a=this;Object(o["saveArea"])(this.areaFormData).then(function(e){e.data;var t=e.response;t.success?(a.$Message.success("保存成功！"),a.getAreaList()):a.$Message.error(t.msg)})},getAreaList:function(){var a=this;Object(o["getAreaList"])({allDescendant:!0}).then(function(e){var t=e.data;e.response;a.areaData=a.makeData(t)})},makeData:function(a){var e=[],t=[],r=new Map,n=!0,o=!1,l=void 0;try{for(var s,i=a[Symbol.iterator]();!(n=(s=i.next()).done);n=!0){var c=s.value;r.set(c.id,c),c.expand=!0,c.parentId?t.push(c):e.push(c)}}catch(a){o=!0,l=a}finally{try{n||null==i.return||i.return()}finally{if(o)throw l}}for(var u=0;u<t.length;u++){var d=t[u],m=r.get(d.parentId);if(!m)return;m.children?m.children.push(d):m.children=[d]}return e}}},s=l,i=(t("b616"),t("2877")),c=Object(i["a"])(s,r,n,!1,null,"402ad6b5",null);c.options.__file="AreaManage.vue";e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-3f75046c.d4281571.js.map