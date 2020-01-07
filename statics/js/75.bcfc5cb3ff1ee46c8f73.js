(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{Zw1l:function(s,e,t){s.exports=t("rexP")},rexP:function(s,e,t){"use strict";t.r(e);var a=t("JFUb"),r=Object(a.a)({data:function(){return{appearance:{},geometryInstances:{},positions:[{lng:100.1340164450331,lat:31.05494287836128},{lng:108.08821010582645,lat:31.05494287836128}]}},methods:{ready:function(s){var e=s.Cesium,t=s.viewer;this.geometryInstances=new e.GeometryInstance({geometry:new e.GroundPolylineGeometry({positions:e.Cartesian3.fromDegreesArray([100.1340164450331,32.05494287836128,108.08821010582645,32.097804071380715]),width:4}),id:"object returned when this instance is picked and to get/set per-instance attributes"}),this.appearance=new e.PolylineMaterialAppearance,t.camera.setView({destination:new e.Cartesian3(-1432246.8223880068,5761224.588247942,3297281.1889481535),orientation:{heading:6.20312220367255,pitch:-.9937536846355606,roll:.002443376981836387}})}}},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("section",[t("h1",[s._v("GroundPolylinePrimitive")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("Example")]),s._v(" "),s._m(1),s._v(" "),t("h4",[s._v("Preview")]),s._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("vc-viewer",{on:{ready:s.ready}},[t("vc-primitive-polyline-ground",{attrs:{appearance:s.appearance,geometryInstances:s.geometryInstances}}),s._v(" "),t("vc-primitive-polyline-ground",{attrs:{appearance:s.appearance}},[t("vc-instance-geometry",[t("vc-geometry-polyline-ground",{attrs:{positions:s.positions,width:2}})],1)],1),s._v(" "),t("vc-provider-terrain-cesium"),s._v(" "),t("vc-layer-imagery",[t("vc-provider-imagery-mapbox",{attrs:{mapId:"mapbox.streets"}})],1)],1)],1)]],2),s._v(" "),t("h4",[s._v("Code")]),s._v(" "),s._m(2),s._v(" "),t("h2",[s._v("Instance Properties")]),s._v(" "),s._m(3),s._v(" "),t("hr"),s._v(" "),s._m(4),s._v(" "),t("h2",[s._v("Events")]),s._v(" "),s._m(5),s._v(" "),t("hr")],1)}),[function(){var s=this.$createElement,e=this._self._c||s;return e("p",[this._v("The "),e("code",{pre:!0},[this._v("vc-primitive-polyline-ground")]),this._v(" component is used to load a a GroundPolylinePrimitive represents a polyline draped over the terrain or 3D Tiles in the Scene. Only to be used with GeometryInstances containing GroundPolylineGeometry.")])},function(){var s=this.$createElement,e=this._self._c||s;return e("h3",[this._v("Load GroundPolylinePrimitive with "),e("code",{pre:!0},[this._v("vc-primitive-polyline-ground")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-polyline-ground")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":geometryInstances")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"geometryInstances"')]),s._v("\n      >")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-polyline-ground")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-polyline-ground")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-polyline-ground")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":positions")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"positions"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":width")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"2"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-polyline-ground")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-polyline-ground")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-terrain-cesium")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-terrain-cesium")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-mapbox")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("mapId")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"mapbox.streets"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-mapbox")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("appearance")]),s._v(": {},\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geometryInstances")]),s._v(": {},\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100.1340164450331")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("31.05494287836128")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("108.08821010582645")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("31.05494287836128")]),s._v(" }\n        ]\n      }\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".geometryInstances = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.GeometryInstance({\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geometry")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.GroundPolylineGeometry({\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": Cesium.Cartesian3.fromDegreesArray([\n              "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100.1340164450331")]),s._v(",\n              "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("32.05494287836128")]),s._v(",\n              "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("108.08821010582645")]),s._v(",\n              "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("32.097804071380715")]),s._v("\n            ]),\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4.0")]),s._v("\n          }),\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'object returned when this instance is picked and to get/set per-instance attributes'")]),s._v("\n        })\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".appearance = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.PolylineMaterialAppearance()\n        viewer.camera.setView({\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("destination")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian3("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-1432246.8223880068")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5761224.588247942")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3297281.1889481535")]),s._v("),\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orientation")]),s._v(": {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("heading")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("6.20312220367255")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pitch")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-0.9937536846355606")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("roll")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.002443376981836387")]),s._v("\n          }\n        })\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("table",[t("thead",[t("tr",[t("th",[s._v("name")]),s._v(" "),t("th",[s._v("type")]),s._v(" "),t("th",[s._v("default")]),s._v(" "),t("th",[s._v("description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("geometryInstances")]),s._v(" "),t("td",[s._v("Object|Array")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" The geometry instances to render.")])]),s._v(" "),t("tr",[t("td",[s._v("appearance")]),s._v(" "),t("td",[s._v("Object")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" The appearance used to render the primitive. Defaults to a flat PerInstanceColorAppearance when GeometryInstances have a color attribute.")])]),s._v(" "),t("tr",[t("td",[s._v("show")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("true")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" Determines if this primitive will be shown.")])]),s._v(" "),t("tr",[t("td",[s._v("interleave")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("false")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" When true, geometry vertex attributes are interleaved, which can slightly improve rendering performance but increases load time.")])]),s._v(" "),t("tr",[t("td",[s._v("releaseGeometryInstances")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("true")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" When true, the primitive does not keep a reference to the input geometryInstances to save memory.")])]),s._v(" "),t("tr",[t("td",[s._v("allowPicking")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("true")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" When true, each geometry instance will only be pickable with Scene#pick. When false, GPU memory is saved.")])]),s._v(" "),t("tr",[t("td",[s._v("asynchronous")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("true")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" Determines if the primitive will be created asynchronously or block until ready.")])]),s._v(" "),t("tr",[t("td",[s._v("classificationType")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("2")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v("Determines whether terrain, 3D Tiles or both will be classified. "),t("strong",[s._v("TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2")])])]),s._v(" "),t("tr",[t("td",[s._v("debugShowBoundingVolume")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("false")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" For debugging only. Determines if this primitive's commands' bounding spheres are shown.")])]),s._v(" "),t("tr",[t("td",[s._v("debugShowShadowVolume")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("false")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" For debugging only. Determines if the shadow volume for each geometry in the primitive is drawn. Must be true on creation for the volumes to be created before the geometry is released or options.releaseGeometryInstance must be false.")])])])])},function(){var s=this.$createElement,e=this._self._c||s;return e("ul",[e("li",[this._v("Refer to the official document: "),e("strong",[e("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/GroundPolylinePrimitive.html"}},[this._v("GroundPolylinePrimitive")])])])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("table",[t("thead",[t("tr",[t("th",[s._v("name")]),s._v(" "),t("th",[s._v("parameter")]),s._v(" "),t("th",[s._v("description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ready")]),s._v(" "),t("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),t("td",[s._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])])])])}],!1,null,null,null);e.default=r.exports}}]);
//# sourceMappingURL=75.bcfc5cb3ff1ee46c8f73.js.map