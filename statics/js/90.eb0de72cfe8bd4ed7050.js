(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{jGD7:function(s,a,t){s.exports=t("z61J")},z61J:function(s,a,t){"use strict";t.r(a);var r=t("JFUb"),e=Object(r.a)({data:function(){return{terrainProvider:null,bounds:{west:80,south:30,east:109,north:50},options:{backgroundColor:"rgba(0,0,0,0)",gradient:{.9:"red",.8:"orange",.7:"yellow",.5:"blue",.3:"green"},radius:250,maxOpacity:.5,minOpacity:0,blur:.75},data:[],min:0,max:0}},methods:{ready:function(s){this.cesiumInstance=s;var a=this.cesiumInstance,t=a.Cesium;a.viewer.camera.setView({destination:new t.Cartesian3(-1432246.8223880068,5761224.588247942,3297281.1889481535),orientation:{heading:6.20312220367255,pitch:-.9937536846355606,roll:.002443376981836387}}),this.terrainProvider=t.createWorldTerrain();var r=this;t.Resource.fetchJson({url:"./statics/SampleData/heatmapData/19042808_t.json"}).then((function(s){r.bounds={west:s.left,south:s.bottom,east:s.right,north:s.top},r.min=s.min,r.max=s.max,r.data=s.datas}))},getData:function(s){for(var a=[],t=s.rows,r=s.cols,e=(s.right-s.left)/r,n=(s.top-s.bottom)/t,v=0;v<t;v++)for(var l=0;l<r;l++){var _=s.left+v*e,p=s.bottom+l*n,c=s.dvalues[v*r+l];c!==s.noDataValue&&a.push({x:_,y:p,value:c})}return a}}},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("VcHeatMap")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("Example")]),s._v(" "),t("h3",[s._v("Load a VcHeatMap")]),s._v(" "),t("h4",[s._v("Preview")]),s._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("vc-viewer",{attrs:{terrainProvider:s.terrainProvider},on:{ready:s.ready}},[t("vc-heatmap",{ref:"heatMap",attrs:{bounds:s.bounds,options:s.options,min:s.min,max:s.max,data:s.data}})],1)],1)]],2),s._v(" "),t("h4",[s._v("Code")]),s._v(" "),s._m(1),s._v(" "),t("h2",[s._v("Instance Properties")]),s._v(" "),s._m(2),s._v(" "),t("hr"),s._v(" "),t("h2",[s._v("Events")]),s._v(" "),s._m(3)],1)}),[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("The "),a("code",{pre:!0},[this._v("vc-heatmap")]),this._v(" component is used to load the heat map. Implemented by "),a("code",{pre:!0},[this._v("heatmap.js")]),this._v(".")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":terrainProvider")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"terrainProvider"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-heatmap")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"heatMap"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":bounds")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"bounds"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"options"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"min"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"max"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"data"')]),s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-heatmap")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("terrainProvider")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("bounds")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("west")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("80.0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("south")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30.0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("east")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("109.0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("north")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50.0")]),s._v(" },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("backgroundColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'rgba(0,0,0,0)'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("gradient")]),s._v(": {\n            "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// enter n keys between 0 and 1 here")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// for gradient color customization")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0.9'")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0.8'")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'orange'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0.7'")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'yellow'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0.5'")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'blue'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'0.3'")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'green'")]),s._v("\n          },\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// minCanvasSize: 10,")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// maxCanvasSize: 100,")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("radius")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("250")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("maxOpacity")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("minOpacity")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("blur")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.75")]),s._v("\n        },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": [],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("min")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("max")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n      }\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance = cesiumInstance\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n        viewer.camera.setView({\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("destination")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian3("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-1432246.8223880068")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5761224.588247942")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3297281.1889481535")]),s._v("),\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orientation")]),s._v(": {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("heading")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("6.20312220367255")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pitch")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-0.9937536846355606")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("roll")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.002443376981836387")]),s._v("\n          }\n        })\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".terrainProvider = Cesium.createWorldTerrain()\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" _this = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v("\n        Cesium.Resource.fetchJson({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("url")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./statics/SampleData/heatmapData/19042808_t.json'")]),s._v(" }).then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("data")]),s._v(") =>")]),s._v(" {\n          _this.bounds = {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("west")]),s._v(": data.left,\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("south")]),s._v(": data.bottom,\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("east")]),s._v(": data.right,\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("north")]),s._v(": data.top\n          }\n          _this.min = data.min\n          _this.max = data.max\n          _this.data = data.datas\n        })\n      },\n      getData(data) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" result = []\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" rows = data.rows\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" cols = data.cols\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" cellX = (data.right - data.left) / cols\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" cellY = (data.top - data.bottom) / rows\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" i = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; i < rows; i++) {\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" j = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; j < cols; j++) {\n            "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" x = data.left + i * cellX\n            "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" y = data.bottom + j * cellY\n            "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" value = data.dvalues[i * cols + j]\n            "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (value !== data.noDataValue) {\n              result.push({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": x, "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": y, "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": value })\n            }\n          }\n        }\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" result\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("name")]),s._v(" "),t("th",[s._v("type")]),s._v(" "),t("th",[s._v("default")]),s._v(" "),t("th",[s._v("description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("type")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("0")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" set type of heatmap, 0: RectangleGeometry, 1: RectangleGraphics, 2: SingleTileImageryProvider.")])]),s._v(" "),t("tr",[t("td",[s._v("bounds")]),s._v(" "),t("td",[s._v("Object")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" set bounds of heatmap.")])]),s._v(" "),t("tr",[t("td",[s._v("options")]),s._v(" "),t("td",[s._v("Object")]),s._v(" "),t("td",[s._v("true")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" set heatmap param。")])]),s._v(" "),t("tr",[t("td",[s._v("min")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" set min vaule.")])]),s._v(" "),t("tr",[t("td",[s._v("max")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" set max vaule.")])]),s._v(" "),t("tr",[t("td",[s._v("data")]),s._v(" "),t("td",[s._v("Array")]),s._v(" "),t("td",[s._v("true")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" set heatmap data.")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("name")]),s._v(" "),t("th",[s._v("parameter")]),s._v(" "),t("th",[s._v("description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ready")]),s._v(" "),t("td",[s._v("{Cesium, viewer}")]),s._v(" "),t("td",[s._v("Triggers when Cesium3DTileset is ready. It returns a core class of Cesium, a viewer instance.")])])])])}],!1,null,null,null);a.default=e.exports}}]);
//# sourceMappingURL=90.eb0de72cfe8bd4ed7050.js.map