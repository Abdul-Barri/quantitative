(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-450258fd"],
  {
    "0915": function (t, a, s) {
      "use strict";
      s("10ccc");
    },
    "096d": function (t, a, s) {
      t.exports = s.p + "img/img3.ef22ee99.png";
    },
    "0a31": function (t, a, s) {
      t.exports = s.p + "img/team3.b6f5d4d4.png";
    },
    "0d32": function (t, a, s) {
      "use strict";
      s.r(a);
      var e = function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s(
            "div",
            { staticClass: "news-page" },
            [
              s(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !t.newsContentI,
                      expression: "!newsContentI",
                    },
                  ],
                  staticClass: "mainer",
                  staticStyle: { "min-height": "666px" },
                },
                [
                  s("div", { staticClass: "page_list" }, [
                    s("div", { staticClass: "page" }, [
                      s("div", { staticClass: "wrap" }, [
                        s("div", { staticClass: "news_list" }, [
                          s(
                            "ul",
                            { staticClass: "wow_list" },
                            [
                              t._l(t.dataArr, function (a, e) {
                                return s(
                                  "li",
                                  {
                                    key: e,
                                    staticClass: "wow fadeInUp",
                                    staticStyle: {
                                      "animation-delay": "0s",
                                      "animation-name": "none",
                                    },
                                    attrs: { "data-wow-delay": "0s" },
                                    on: {
                                      click: function (a) {
                                        return t.newsPush(e + 1);
                                      },
                                    },
                                  },
                                  [
                                    s("div", {
                                      staticClass: "img newsImgBox",
                                      class: "categoryImg" + (e + 1),
                                    }),
                                    s(
                                      "div",
                                      { staticClass: "text newsListText" },
                                      [
                                        s("h3", [t._v(t._s(a.title))]),
                                        s("p", {
                                          staticClass: "newsItemContenmt",
                                          domProps: {
                                            innerHTML: t._s(a.content),
                                          },
                                        }),
                                      ]
                                    ),
                                  ]
                                );
                              }),
                              s("div", { staticClass: "clear" }),
                            ],
                            2
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]
              ),
              s("categoryDetail", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.newsContentI,
                    expression: "newsContentI",
                  },
                ],
                ref: "categoryDetail",
              }),
              s(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: t.newsContentI,
                      expression: "newsContentI",
                    },
                  ],
                  staticClass: "backBtn",
                  on: {
                    click: function (a) {
                      return t.newsPush();
                    },
                  },
                },
                [t._v(t._s(t.$t("common.Return")))]
              ),
            ],
            1
          );
        },
        i = [],
        n = s("700a"),
        o = {
          data: function () {
            return { dataArr: [], newsContentI: !1 };
          },
          components: { categoryDetail: n["default"] },
          created: function () {
            var t = this;
            s("7e16")(
              "./".concat(this.$languageWithLocal, "/categoryData.json")
            ).then(function (a) {
              t.dataArr = a.default;
            });
          },
          methods: {
            newsPush: function (t) {
              var a = parseInt(t) - 1;
              this.dataArr[a]
                ? ((this.dataArr[a].cIndex = t),
                  this.$refs.categoryDetail.initData(this.dataArr[a]),
                  (this.newsContentI = !0))
                : (this.newsContentI = !1);
            },
          },
        },
        l = o,
        c = (s("4a35"), s("2877")),
        r = Object(c["a"])(l, e, i, !1, null, "e0013c82", null);
      a["default"] = r.exports;
    },
    "0d95": function (t, a, s) {},
    "0e79": function (t, a, s) {},
    "10ccc": function (t, a, s) {},
    "16d8": function (t, a, s) {
      "use strict";
      s.r(a);
      var e = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e("div", { staticClass: "team_mainer" }, [
            e(
              "div",
              { staticClass: "mainer", staticStyle: { "min-height": "666px" } },
              [
                e("div", { staticClass: "page_list" }, [
                  e(
                    "div",
                    {
                      staticClass: "page",
                      staticStyle: { "padding-top": "0" },
                    },
                    [
                      e("div", [
                        e("div", { staticClass: "page_title" }, [
                          e("div", { staticClass: "left" }, [
                            e(
                              "h1",
                              {
                                staticClass: "wow fadeInUp animated",
                                staticStyle: {
                                  visibility: "visible",
                                  "animation-delay": "0.1s",
                                  "animation-name": "fadeInUp",
                                },
                                attrs: { "data-wow-delay": ".1s" },
                              },
                              [
                                t._v(
                                  "\n                " +
                                    t._s(t.$t("pageHome.teamInfo.Title")) +
                                    "\n              "
                                ),
                              ]
                            ),
                            e(
                              "h2",
                              {
                                staticClass: "wow fadeInUp animated",
                                staticStyle: {
                                  visibility: "visible",
                                  "animation-delay": "0.1s",
                                  "animation-name": "fadeInUp",
                                },
                                attrs: { "data-wow-delay": ".1s" },
                              },
                              [
                                t._v(
                                  "\n                " +
                                    t._s(t.$t("pageHome.teamInfo.eTitle")) +
                                    "\n              "
                                ),
                              ]
                            ),
                          ]),
                          e("div", {
                            staticClass: "center wow fadeInUp animated",
                            staticStyle: {
                              visibility: "visible",
                              "animation-delay": "0.1s",
                              "animation-name": "fadeInUp",
                            },
                            attrs: { "data-wow-delay": ".1s" },
                          }),
                          e(
                            "div",
                            {
                              staticClass: "right wow fadeInUp",
                              staticStyle: {
                                visibility: "visible",
                                "animation-delay": "0.2s",
                                "animation-name": "fadeInUp",
                              },
                              attrs: { "data-wow-delay": ".2s" },
                            },
                            [
                              t._v(
                                "\n              " +
                                  t._s(t.$t("pageHome.teamInfo.telInfo")) +
                                  "\n            "
                              ),
                            ]
                          ),
                        ]),
                        e("div", { staticClass: "team_list" }, [
                          e(
                            "ul",
                            { staticClass: "wow_list" },
                            t._l(5, function (a) {
                              return e(
                                "li",
                                {
                                  key: a,
                                  staticClass: "wow fadeInUp animated",
                                  staticStyle: {
                                    visibility: "visible",
                                    "animation-delay": "0s",
                                    "animation-name": "fadeInUp",
                                  },
                                  attrs: { "data-wow-delay": "0s" },
                                },
                                [
                                  e(
                                    "a",
                                    { attrs: { href: "javascript:void(0)" } },
                                    [
                                      e("div", { staticClass: "img" }, [
                                        e("img", {
                                          attrs: {
                                            src: s("2555")(
                                              "./team" + a + ".png"
                                            ),
                                          },
                                        }),
                                        e("span", [
                                          t._v(
                                            t._s(
                                              t.$t("pageHome.teamInfo.name" + a)
                                            )
                                          ),
                                        ]),
                                      ]),
                                      e("div", { staticClass: "text2" }, [
                                        e("div", { staticClass: "tit" }, [
                                          e("h3", [
                                            t._v(
                                              t._s(
                                                t.$t(
                                                  "pageHome.teamInfo.name" + a
                                                )
                                              )
                                            ),
                                          ]),
                                          e("p", [
                                            t._v(
                                              "\n                        " +
                                                t._s(
                                                  t.$t(
                                                    "pageHome.teamInfo.Info" + a
                                                  )
                                                ) +
                                                "\n                      "
                                            ),
                                          ]),
                                        ]),
                                      ]),
                                    ]
                                  ),
                                ]
                              );
                            }),
                            0
                          ),
                          e(
                            "div",
                            {
                              staticClass: "btn_e",
                              on: {
                                click: function (a) {
                                  return t.$router.push("/teamInfo");
                                },
                              },
                            },
                            [
                              t._v(
                                "\n              " +
                                  t._s(t.$t("pageHome.teamInfo.btnText2")) +
                                  "\n              "
                              ),
                              e("img", { attrs: { src: s("c822"), alt: "" } }),
                            ]
                          ),
                        ]),
                      ]),
                    ]
                  ),
                ]),
              ]
            ),
          ]);
        },
        i = [],
        n = {
          data: function () {
            return {};
          },
          mounted: function () {},
          methods: {},
        },
        o = n,
        l = (s("41c3b"), s("2877")),
        c = Object(l["a"])(o, e, i, !1, null, "5fb13fc6", null);
      a["default"] = c.exports;
    },
    "1a55": function (t, a, s) {
      "use strict";
      s.r(a);
      var e = function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "companyInfo_wrap" }, [
            s("div", { staticClass: "left_block" }),
            s("div", { staticClass: "right_block" }),
            s(
              "div",
              {
                staticClass: "systemInfo fadeInUp animated",
                staticStyle: {
                  visibility: "visible",
                  "animation-delay": "0.1s",
                  "animation-name": "fadeInUp",
                },
                attrs: { "data-wow-delay": ".1s" },
              },
              [
                s("h1", { staticClass: "ev_system" }, [
                  t._v(t._s(t.$t("pageHome.evSystem.Title"))),
                ]),
                s("p", [
                  t._v(
                    "\n      " + t._s(t.$t("pageHome.evSystem.Info")) + "\n    "
                  ),
                ]),
                s("span"),
              ]
            ),
            s("div", { staticClass: "clear" }),
          ]);
        },
        i = [],
        n = {
          data: function () {
            return {};
          },
          mounted: function () {},
          methods: {},
        },
        o = n,
        l = (s("c821"), s("2877")),
        c = Object(l["a"])(o, e, i, !1, null, "f38da466", null);
      a["default"] = c.exports;
    },
    2555: function (t, a, s) {
      var e = {
        "./team1.png": "c3cc",
        "./team2.png": "9459",
        "./team3.png": "0a31",
        "./team4.png": "d03a",
        "./team5.png": "f385",
      };
      function i(t) {
        var a = n(t);
        return s(a);
      }
      function n(t) {
        if (!s.o(e, t)) {
          var a = new Error("Cannot find module '" + t + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        return e[t];
      }
      (i.keys = function () {
        return Object.keys(e);
      }),
        (i.resolve = n),
        (t.exports = i),
        (i.id = "2555");
    },
    "27fa": function (t, a, s) {
      "use strict";
      s("82a9");
    },
    "2fae": function (t, a, s) {
      "use strict";
      s("727a");
    },
    "393f": function (t, a, s) {
      t.exports = s.p + "img/img4.343aafb0.png";
    },
    "3d37": function (t, a, s) {},
    "3da3": function (t, a, s) {
      t.exports = s.p + "img/25.e2fad1de.png";
    },
    "41c3b": function (t, a, s) {
      "use strict";
      s("a58f");
    },
    "4a35": function (t, a, s) {
      "use strict";
      s("6b90");
    },
    "4b3b": function (t, a, s) {
      "use strict";
      s.r(a);
      var e = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "div",
            [
              e("div", { staticClass: "banner" }, [
                e("video", {
                  attrs: {
                    playsinline: "",
                    autoplay: "",
                    muted: "",
                    loop: "",
                    controls: "false",
                    src: s("b708"),
                  },
                  domProps: { muted: !0 },
                }),
                e("div", { staticClass: "cover" }),
                e("h1", [t._v(t._s(t.$t("Q_Home.bannerInfo.Title1")))]),
                e("h2", [t._v(t._s(t.$t("Q_Home.bannerInfo.Title2")))]),
                e("h2", [t._v(t._s(t.$t("Q_Home.bannerInfo.Title3")))]),
                e("h2", [t._v(t._s(t.$t("Q_Home.bannerInfo.Title4")))]),
              ]),
              e("section", { staticClass: "companyInfo" }, [
                e("h1", [t._v(t._s(t.$t("Q_Home.companyInfo.Title")))]),
                e(
                  "div",
                  {
                    staticClass: "companyInfo_mainner fadeInUp animated",
                    staticStyle: {
                      visibility: "visible",
                      "animation-delay": "0.1s",
                      "animation-name": "fadeInUp",
                    },
                    attrs: { "data-wow-delay": ".1s" },
                  },
                  [
                    t._v(
                      "\n      " +
                        t._s(t.$t("Q_Home.companyInfo.info")) +
                        "\n    "
                    ),
                  ]
                ),
              ]),
              e(
                "section",
                {
                  staticClass: "feature section-padding",
                  staticStyle: { "padding-top": "40px" },
                },
                [
                  e("div", { staticClass: "container" }, [
                    e("div", { staticClass: "wrap myWrap" }, [
                      e(
                        "div",
                        { staticClass: "team_list team-outer" },
                        [e("business")],
                        1
                      ),
                    ]),
                  ]),
                ]
              ),
              e(
                "section",
                { staticClass: "superiority" },
                [e("superiority")],
                1
              ),
              e("section", [e("exploits")], 1),
              e(
                "a-drawer",
                {
                  attrs: {
                    placement: t.placement,
                    closable: !1,
                    height: 130,
                    visible: t.visible,
                  },
                },
                [
                  e("p", [
                    t._v(
                      "\n      We use essential cookies to make our site work and keep it secure. We’re\n      also asking to use optional cookies to personalise your experience, show\n      you relevant advertising and improve our site.\n    "
                    ),
                  ]),
                  e("button", { on: { click: t.onClose } }, [
                    t._v("Accept All Cookies"),
                  ]),
                ]
              ),
              e("GlobalFooter", { staticClass: "footer" }),
            ],
            1
          );
        },
        i = [],
        n = (s("0fea"), s("16d8")),
        o = s("ecc7"),
        l = s("5d97"),
        c = s("7f44"),
        r = s("7dab"),
        _ = s("66b5"),
        f = s("abd6"),
        m = s("f83f"),
        d = s("1a55"),
        p = s("0d32"),
        v = s("911c"),
        u = {
          name: "Home",
          data: function () {
            return {
              placement: "bottom",
              visible: !1,
              masters: [],
              masters2: [],
              masters3: [],
              videoShow: !1,
            };
          },
          components: {
            team: n["default"],
            business: c["default"],
            companyInfo: o["default"],
            category: p["default"],
            exploits: f["default"],
            aboutUs: r["default"],
            superiority: _["default"],
            companyInfo2: l["default"],
            evSystem: d["default"],
            GlobalFooter: v["default"],
            followInfo: m["default"],
          },
          created: function () {
            this.getExcelentMasters(6, "stable"), this.initCookiesSet();
          },
          computed: {
            commenData: function () {
              return this.$store.state.commenData;
            },
            title: function () {
              return this.$store.getters.envTitlec;
            },
            titlee: function () {
              return this.$store.getters.envTitle;
            },
            URL: function () {
              return this.commenData.discuzUrl;
            },
            url: function () {
              return this.commenData.url;
            },
          },
          mounted: function () {
            (function (t) {
              new WOW().init();
            })(jQuery);
            var t = document,
              a = t.getElementById("marketDataDiv"),
              s = t.createElement("script");
            (s.type = "text/javascript"),
              (s.async = !0),
              (s.innerHTML =
                '{\n  "colorTheme": "light",\n  "dateRange": "1D",\n  "showChart": true,\n  "locale": "en",\n  "width": "100%",\n  "height": "100%",\n  "largeChartUrl": "' +
                this.url +
                '/tools/real-time-chart",\n  "isTransparent": false,\n  "showSymbolLogo": true,\n  "plotLineColorGrowing": "rgba(228, 167, 54, 1)",\n  "plotLineColorFalling": "rgba(228, 167, 54, 1)",\n  "gridLineColor": "rgba(240, 243, 250, 1)",\n  "scaleFontColor": "rgba(120, 123, 134, 1)",\n  "belowLineFillColorGrowing": "rgba(228, 167, 54, 0.12)",\n  "belowLineFillColorFalling": "rgba(228, 167, 54,0.12)",\n  "symbolActiveColor": "rgba(228, 167, 54, 0.12)",\n  "tabs": [\n    {\n      "title": "Forex",\n      "symbols": [\n        {\n          "s": "FX:EURUSD"\n        },\n        {\n          "s": "FX:GBPUSD"\n        },\n        {\n          "s": "FX:USDJPY"\n        },\n        {\n          "s": "FX:USDCHF"\n        },\n        {\n          "s": "FX:AUDUSD"\n        },\n        {\n          "s": "FX:USDCAD"\n        }\n      ],\n      "originalTitle": "Forex"\n    }\n  ]\n}'),
              (s.src =
                "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"),
              a.appendChild(s);
          },
          methods: {
            initCookiesSet: function () {
              localStorage.getItem("pro__Access-Token") &&
                1 == !localStorage.getItem("agree_Cookies") &&
                (this.visible = !0);
            },
            onClose: function () {
              (this.visible = !1), localStorage.setItem("agree_Cookies", 1);
            },
            go: function (t, a) {
              t.preventDefault(),
                this.$router.push({
                  path: "personal?userId="
                    .concat(a.sysUser.id, "&account=")
                    .concat(a.id),
                });
            },
            toBusinessInfo: function (t) {
              this.$router.push({ path: "/business", query: { index: t } });
            },
            getExcelentMasters: function (t, a) {},
            getAvatarView: function (t) {
              return window._CONFIG["domianURL"] + "/sys/common/view/" + t;
            },
          },
        },
        g = u,
        w = (s("57b8"), s("2877")),
        h = Object(w["a"])(g, e, i, !1, null, "3c143fea", null);
      a["default"] = h.exports;
    },
    "57b8": function (t, a, s) {
      "use strict";
      s("0e79");
    },
    "587d": function (t, a, s) {},
    "5d97": function (t, a, s) {
      "use strict";
      s.r(a);
      var e = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e("div", { staticClass: "companyInfo_wrap" }, [
            e("div", { staticClass: "left_block" }),
            e("div", { staticClass: "right_block" }),
            e(
              "div",
              {
                staticClass: "about_img wow fadeInUp animated",
                staticStyle: {
                  visibility: "visible",
                  "animation-delay": "0.1s",
                  "animation-name": "fadeInUp",
                },
                attrs: { "data-wow-delay": ".1s" },
              },
              [e("img", { attrs: { src: s("3da3") } })]
            ),
            e("div", { staticClass: "about_txt" }, [
              e(
                "div",
                {
                  staticClass: "text wow fadeInUp animated",
                  staticStyle: {
                    visibility: "visible",
                    "animation-delay": "0.1s",
                    "animation-name": "fadeInUp",
                  },
                  attrs: { "data-wow-delay": ".1s" },
                },
                [
                  e("p", [
                    t._v(
                      "\n        " +
                        t._s(t.$t("pageHome.sysInfo.Info")) +
                        "\n      "
                    ),
                  ]),
                ]
              ),
            ]),
            e("div", { staticClass: "clear" }),
          ]);
        },
        i = [],
        n = {
          data: function () {
            return {};
          },
          mounted: function () {},
          methods: {},
        },
        o = n,
        l = (s("0915"), s("2877")),
        c = Object(l["a"])(o, e, i, !1, null, "34c5c7b5", null);
      a["default"] = c.exports;
    },
    "5d9c": function (t, a, s) {},
    "66b5": function (t, a, s) {
      "use strict";
      s.r(a);
      var e = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e("div", { staticClass: "superiority_mainer" }, [
            e("div", { staticClass: "left_con" }, [
              e("h1", [t._v(t._s(t.$t("Q_Home.superiority.MainTitle")))]),
              e("p", [
                t._v(
                  "\n      " +
                    t._s(t.$t("Q_Home.superiority.MainInfo")) +
                    "\n    "
                ),
              ]),
            ]),
            e("div", { staticClass: "right_con" }, [
              e("div", { staticClass: "right_con_item" }, [
                e("h1", [t._v(t._s(t.$t("Q_Home.superiority.Title1")))]),
                e("img", { attrs: { src: s("aafc") } }),
                e("p", [
                  t._v(
                    "\n        " +
                      t._s(t.$t("Q_Home.superiority.info1")) +
                      "\n      "
                  ),
                ]),
              ]),
              e("div", { staticClass: "right_con_item" }, [
                e("h1", [t._v(t._s(t.$t("Q_Home.superiority.Title2")))]),
                e("img", { attrs: { src: s("b2b2") } }),
                e("p", [
                  t._v(
                    "\n        " +
                      t._s(t.$t("Q_Home.superiority.info2")) +
                      "\n      "
                  ),
                ]),
              ]),
              e("div", { staticClass: "right_con_item" }, [
                e("h1", [t._v(t._s(t.$t("Q_Home.superiority.Title3")))]),
                e("img", { attrs: { src: s("096d") } }),
                e("p", [
                  t._v(
                    "\n        " +
                      t._s(t.$t("Q_Home.superiority.info3")) +
                      "\n      "
                  ),
                ]),
              ]),
              e("div", { staticClass: "right_con_item" }, [
                e("h1", [t._v(t._s(t.$t("Q_Home.superiority.Title4")))]),
                e("img", { attrs: { src: s("393f") } }),
                e("p", [
                  t._v(
                    "\n        " +
                      t._s(t.$t("Q_Home.superiority.info4")) +
                      "\n      "
                  ),
                ]),
              ]),
            ]),
          ]);
        },
        i = [],
        n = {
          data: function () {
            return {};
          },
          mounted: function () {},
          methods: {},
        },
        o = n,
        l = (s("c01b"), s("2877")),
        c = Object(l["a"])(o, e, i, !1, null, "68b69f51", null);
      a["default"] = c.exports;
    },
    "6b90": function (t, a, s) {},
    "6ee5": function (t, a, s) {
      "use strict";
      s("5d9c");
    },
    "700a": function (t, a, s) {
      "use strict";
      s.r(a);
      var e = function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "newsDetail" }, [
            s(
              "div",
              { staticClass: "mainer", staticStyle: { "min-height": "666px" } },
              [
                s("div", { staticClass: "page_list" }, [
                  s("div", { staticClass: "page" }, [
                    s("div", { staticClass: "wrap" }, [
                      s("div", { staticClass: "news_details product" }, [
                        s(
                          "div",
                          {
                            staticClass: "d_text wow fadeInUp animated",
                            staticStyle: {
                              visibility: "visible",
                              "animation-delay": "0.1s",
                              "animation-name": "fadeInUp",
                            },
                            attrs: { "data-wow-delay": ".1s" },
                          },
                          [
                            s("div", { staticClass: "tit" }, [
                              s("h2", [t._v(t._s(t.newsContent.title))]),
                            ]),
                            s(
                              "div",
                              { staticClass: "text", attrs: { id: "maximg" } },
                              [
                                s("p", {
                                  staticClass: "newsImg",
                                  class: "categoryImg" + t.newsContent.cIndex,
                                }),
                                s("div", {
                                  staticClass: "news-content-box",
                                  staticStyle: {
                                    color: "rgb(51, 51, 51)",
                                    "font-family":
                                      "'Microsoft YaHei', 微软雅黑, Arial, Helvetica, sans-serif",
                                    "font-size": "15px",
                                    "white-space": "pre-line",
                                  },
                                  domProps: {
                                    innerHTML: t._s(t.newsContent.content),
                                  },
                                }),
                              ]
                            ),
                          ]
                        ),
                      ]),
                    ]),
                  ]),
                ]),
              ]
            ),
          ]);
        },
        i = [],
        n = {
          data: function () {
            return { newsContent: { title: "", date: "", content: "" } };
          },
          mounted: function () {},
          methods: {
            initData: function (t) {
              this.newsContent = t;
            },
          },
        },
        o = n,
        l = (s("b0e5"), s("2877")),
        c = Object(l["a"])(o, e, i, !1, null, null, null);
      a["default"] = c.exports;
    },
    7026: function (t, a, s) {
      t.exports = s.p + "img/aboutcompany.89044fc9.png";
    },
    "727a": function (t, a, s) {},
    "7dab": function (t, a, s) {
      "use strict";
      s.r(a);
      var e = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e("div", { staticClass: "aboutUs_mainer" }, [
            e("div", { staticClass: "part1" }, [
              e(
                "div",
                {
                  staticClass: "part1_left fadeInUp animated",
                  staticStyle: {
                    visibility: "visible",
                    "animation-delay": "0s",
                    "animation-name": "fadeInUp",
                  },
                  attrs: { "data-wow-delay": "0s" },
                },
                [
                  e("span", { staticClass: "en" }, [t._v("ABOUT US")]),
                  e("span", { staticClass: "ch" }, [
                    t._v(t._s(t.$t("pageHome.aboutsUs.btnText")) + " "),
                  ]),
                ]
              ),
              e(
                "div",
                {
                  staticClass: "part1_right fadeInUp animated",
                  staticStyle: {
                    visibility: "visible",
                    "animation-delay": "0s",
                    "animation-name": "fadeInUp",
                  },
                  attrs: { "data-wow-delay": "0s" },
                },
                [
                  t._v(
                    "\n      " + t._s(t.$t("pageHome.aboutsUs.Info")) + "\n    "
                  ),
                ]
              ),
            ]),
            e("div", { staticClass: "part2" }, [
              e(
                "div",
                {
                  staticClass: "part2_left fadeInUp animated",
                  staticStyle: {
                    visibility: "visible",
                    "animation-delay": "0s",
                    "animation-name": "fadeInUp",
                  },
                  attrs: { "data-wow-delay": "0s" },
                },
                [e("img", { attrs: { src: s("e0b5"), alt: "" } })]
              ),
            ]),
          ]);
        },
        i = [],
        n = {
          data: function () {
            return {};
          },
          mounted: function () {},
          methods: {},
        },
        o = n,
        l = (s("27fa"), s("2877")),
        c = Object(l["a"])(o, e, i, !1, null, "62916b84", null);
      a["default"] = c.exports;
    },
    "7e16": function (t, a, s) {
      var e = {
        "./en_US/categoryData.json": ["0fce", "chunk-2d0afe0e"],
        "./zh_TW/categoryData.json": ["286b", "chunk-2d0b34a8"],
      };
      function i(t) {
        if (!s.o(e, t))
          return Promise.resolve().then(function () {
            var a = new Error("Cannot find module '" + t + "'");
            throw ((a.code = "MODULE_NOT_FOUND"), a);
          });
        var a = e[t],
          i = a[0];
        return s.e(a[1]).then(function () {
          return s.t(i, 3);
        });
      }
      (i.keys = function () {
        return Object.keys(e);
      }),
        (i.id = "7e16"),
        (t.exports = i);
    },
    "7f44": function (t, a, s) {
      "use strict";
      s.r(a);
      var e = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e("div", { staticClass: "business_mainer" }, [
            e(
              "div",
              { staticClass: "mainer", staticStyle: { "min-height": "666px" } },
              [
                e("div", { staticClass: "page_list" }, [
                  e(
                    "div",
                    {
                      staticClass: "page",
                      staticStyle: { "padding-top": "0" },
                    },
                    [
                      e("div", [
                        e("div", { staticClass: "team_list" }, [
                          e("ul", { staticClass: "wow_list" }, [
                            e(
                              "li",
                              {
                                staticClass: "wow fadeInUp animated",
                                staticStyle: {
                                  visibility: "visible",
                                  "animation-delay": "0s",
                                  "animation-name": "fadeInUp",
                                },
                                attrs: { "data-wow-delay": "0s" },
                              },
                              [
                                e(
                                  "a",
                                  {
                                    attrs: { href: "javascript:void(0)" },
                                    on: {
                                      click: function (a) {
                                        return t.$router.push("/fundInfo");
                                      },
                                    },
                                  },
                                  [
                                    e("img", { attrs: { src: s("aafc") } }),
                                    e("div", { staticClass: "list" }, [
                                      e("h1", [
                                        t._v(
                                          t._s(t.$t("Q_Home.business.Title1"))
                                        ),
                                      ]),
                                      e("span", [
                                        t._v(
                                          t._s(t.$t("Q_Home.business.info1"))
                                        ),
                                      ]),
                                    ]),
                                  ]
                                ),
                              ]
                            ),
                            e(
                              "li",
                              {
                                staticClass: "wow fadeInUp animated",
                                staticStyle: {
                                  visibility: "visible",
                                  "animation-delay": "0s",
                                  "animation-name": "fadeInUp",
                                },
                                attrs: { "data-wow-delay": "0s" },
                              },
                              [
                                e(
                                  "a",
                                  {
                                    attrs: { href: "javascript:void(0)" },
                                    on: {
                                      click: function (a) {
                                        return t.$router.push("/fundInfo");
                                      },
                                    },
                                  },
                                  [
                                    e("img", { attrs: { src: s("b2b2") } }),
                                    e("div", { staticClass: "list" }, [
                                      e("h1", [
                                        t._v(
                                          t._s(t.$t("Q_Home.business.Title2"))
                                        ),
                                      ]),
                                      e("span", [
                                        t._v(
                                          t._s(t.$t("Q_Home.business.info2"))
                                        ),
                                      ]),
                                    ]),
                                  ]
                                ),
                              ]
                            ),
                            e(
                              "li",
                              {
                                staticClass: "wow fadeInUp animated",
                                staticStyle: {
                                  visibility: "visible",
                                  "animation-delay": "0s",
                                  "animation-name": "fadeInUp",
                                },
                                attrs: { "data-wow-delay": "0s" },
                              },
                              [
                                e(
                                  "a",
                                  {
                                    attrs: { href: "javascript:void(0)" },
                                    on: {
                                      click: function (a) {
                                        return t.$router.push("/fundInfo");
                                      },
                                    },
                                  },
                                  [
                                    e("img", { attrs: { src: s("096d") } }),
                                    e("div", { staticClass: "list" }, [
                                      e("h1", [
                                        t._v(
                                          t._s(t.$t("Q_Home.business.Title3"))
                                        ),
                                      ]),
                                      e("span", [
                                        t._v(
                                          t._s(t.$t("Q_Home.business.info3"))
                                        ),
                                      ]),
                                    ]),
                                  ]
                                ),
                              ]
                            ),
                            e(
                              "li",
                              {
                                staticClass: "wow fadeInUp animated",
                                staticStyle: {
                                  visibility: "visible",
                                  "animation-delay": "0s",
                                  "animation-name": "fadeInUp",
                                },
                                attrs: { "data-wow-delay": "0s" },
                              },
                              [
                                e(
                                  "a",
                                  {
                                    attrs: { href: "javascript:void(0)" },
                                    on: {
                                      click: function (a) {
                                        return t.$router.push("/fundInfo");
                                      },
                                    },
                                  },
                                  [
                                    e("img", { attrs: { src: s("393f") } }),
                                    e("div", { staticClass: "list" }, [
                                      e("h1", [
                                        t._v(
                                          t._s(t.$t("Q_Home.business.Title4"))
                                        ),
                                      ]),
                                      e("span", [
                                        t._v(
                                          t._s(t.$t("Q_Home.business.info4"))
                                        ),
                                      ]),
                                    ]),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                        ]),
                        e("div", { staticClass: "more" }),
                      ]),
                    ]
                  ),
                ]),
              ]
            ),
          ]);
        },
        i = [],
        n = {
          data: function () {
            return {};
          },
          mounted: function () {},
          methods: {},
        },
        o = n,
        l = (s("2fae"), s("2877")),
        c = Object(l["a"])(o, e, i, !1, null, "2fbfb22d", null);
      a["default"] = c.exports;
    },
    "82a9": function (t, a, s) {},
    "89a5": function (t, a, s) {
      "use strict";
      s("587d");
    },
    "90e9": function (t, a, s) {},
    9459: function (t, a, s) {
      t.exports = s.p + "img/team2.48454d91.png";
    },
    a58f: function (t, a, s) {},
    aafc: function (t, a, s) {
      t.exports = s.p + "img/img1.217048bc.png";
    },
    abd6: function (t, a, s) {
      "use strict";
      s.r(a);
      var e = function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("div", { staticClass: "exploits page" }, [
            s("h1", [t._v(t._s(t.$t("Q_Home.exploits.Title")))]),
            s("div", { staticClass: "exploits_list" }, [
              s(
                "div",
                {
                  staticClass: "exploits_list_item wow fadeInUp animated",
                  staticStyle: {
                    visibility: "visible",
                    "animation-delay": "0s",
                    "animation-name": "fadeInUp",
                  },
                  attrs: { "data-wow-delay": "0s" },
                },
                [
                  s("h1", [t._v(t._s(t.$t("Q_Home.exploits.title1")))]),
                  s("span", [t._v(t._s(t.$t("Q_Home.exploits.info1")))]),
                ]
              ),
              s(
                "div",
                {
                  staticClass: "exploits_list_item wow fadeInUp animated",
                  staticStyle: {
                    visibility: "visible",
                    "animation-delay": "0s",
                    "animation-name": "fadeInUp",
                  },
                  attrs: { "data-wow-delay": "0s" },
                },
                [
                  s("h1", [t._v(t._s(t.$t("Q_Home.exploits.title2")))]),
                  s("span", [t._v(t._s(t.$t("Q_Home.exploits.info2")))]),
                ]
              ),
              s(
                "div",
                {
                  staticClass: "exploits_list_item wow fadeInUp animated",
                  staticStyle: {
                    visibility: "visible",
                    "animation-delay": "0s",
                    "animation-name": "fadeInUp",
                  },
                  attrs: { "data-wow-delay": "0s" },
                },
                [
                  s("h1", [t._v(t._s(t.$t("Q_Home.exploits.title3")))]),
                  s("span", [t._v(t._s(t.$t("Q_Home.exploits.info3")))]),
                ]
              ),
            ]),
            s("p", [t._v(t._s(t.$t("Q_Home.exploits.worlds")))]),
          ]);
        },
        i = [],
        n = {
          data: function () {
            return {};
          },
          mounted: function () {},
          methods: {},
        },
        o = n,
        l = (s("d295"), s("2877")),
        c = Object(l["a"])(o, e, i, !1, null, "4e51acf2", null);
      a["default"] = c.exports;
    },
    b0e5: function (t, a, s) {
      "use strict";
      s("3d37");
    },
    b2b2: function (t, a, s) {
      t.exports = s.p + "img/img2.6c967b5a.png";
    },
    b708: function (t, a, s) {
      t.exports = s.p + "media/home.103fea33.mp4";
    },
    bb51: function (t, a, s) {
      "use strict";
      s.r(a);
      var e = function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s(t.currentTabComponent, { tag: "component" });
        },
        i = [],
        n = s("4b3b"),
        o = {
          name: "Home",
          components: { bole: n["default"] },
          data: function () {
            return { currentTabComponent: "bole" };
          },
        },
        l = o,
        c = s("2877"),
        r = Object(c["a"])(l, e, i, !1, null, null, null);
      a["default"] = r.exports;
    },
    c01b: function (t, a, s) {
      "use strict";
      s("0d95");
    },
    c3cc: function (t, a, s) {
      t.exports = s.p + "img/team1.8ea83cae.png";
    },
    c821: function (t, a, s) {
      "use strict";
      s("90e9");
    },
    c822: function (t, a) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAA80lEQVQokX3QvUoDYRCF4WeXYECDiCAIKSzTiMYUG7G0EdQbSDob/yq9CGu74A3IYq/Y2QshaEghVhZJZSOSCFELi6yyhiUHpnm/c2a+maAbRxJN4RA1LCesgxgX+IRc8lDENcr+az2pPeyiFyads8xplXGDfIiDtHl+40x+sZoVWsV+iHqavrcb5iqnppe2skL1EJU0+e73vN4dmynVFEr18cBaOOHfBME4+QrRSpNcoWhhs2HwfKX/dDke6IRGd/7T7MqRt9a5j5fbrJlx0I2jPO6NrjBJbUQhhtjBwwTzI7Yx/F26hypO0MQgqWbCosTjB7pnNY6mHZwQAAAAAElFTkSuQmCC";
    },
    d03a: function (t, a, s) {
      t.exports = s.p + "img/team4.e2a7a18f.png";
    },
    d295: function (t, a, s) {
      "use strict";
      s("dc73");
    },
    dc73: function (t, a, s) {},
    e0b5: function (t, a, s) {
      t.exports = s.p + "img/aboutUs_bg.5a3fd2af.jpg";
    },
    ecc7: function (t, a, s) {
      "use strict";
      s.r(a);
      var e = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e("div", { staticClass: "companyInfo_wrap" }, [
            e("div", { staticClass: "left_block" }),
            e("div", { staticClass: "right_block" }),
            e(
              "div",
              {
                staticClass: "about_img fadeInUp animated",
                staticStyle: {
                  visibility: "visible",
                  "animation-delay": "0.1s",
                  "animation-name": "fadeInUp",
                },
                attrs: { "data-wow-delay": ".1s" },
              },
              [e("img", { attrs: { src: s("7026") } })]
            ),
            e("div", { staticClass: "about_txt" }, [
              e(
                "div",
                {
                  staticClass: "text fadeInUp animated",
                  staticStyle: {
                    visibility: "visible",
                    "animation-delay": "0.1s",
                    "animation-name": "fadeInUp",
                  },
                  attrs: { "data-wow-delay": ".1s" },
                },
                [
                  e("p", [
                    t._v(
                      "\n        " +
                        t._s(t.$t("pageHome.aboutsus.Info")) +
                        "\n      "
                    ),
                  ]),
                ]
              ),
            ]),
            e("div", { staticClass: "clear" }),
          ]);
        },
        i = [],
        n = {
          data: function () {
            return {};
          },
          mounted: function () {},
          methods: {},
        },
        o = n,
        l = (s("89a5"), s("2877")),
        c = Object(l["a"])(o, e, i, !1, null, "179b60a8", null);
      a["default"] = c.exports;
    },
    f385: function (t, a, s) {
      t.exports = s.p + "img/team5.1d7fe6f6.png";
    },
    f83f: function (t, a, s) {
      "use strict";
      s.r(a);
      var e = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e("div", { staticClass: "followInfo_wrap" }, [
            e(
              "div",
              {
                staticClass: "follow_left wow fadeInUp animated",
                staticStyle: {
                  visibility: "visible",
                  "animation-delay": "0.1s",
                  "animation-name": "fadeInUp",
                },
                attrs: { "data-wow-delay": ".1s" },
              },
              [
                e("h1", [t._v(t._s(t.$t("pageHome.followInfo.Title")))]),
                e(
                  "div",
                  { staticClass: "list listLarge" },
                  [
                    e(
                      "a-row",
                      { class: "listHover1" },
                      [
                        e("a-col", { attrs: { span: 8 } }, [
                          e("div", { staticClass: "list_img" }, [
                            e("img", { attrs: { src: s("d03a") } }),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line1_tag1"))
                              ),
                            ]),
                          ]),
                        ]),
                        e("a-col", { attrs: { span: 4 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line1_tag2_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line1_tag2_2"))
                              ),
                            ]),
                          ]),
                        ]),
                        e("a-col", { attrs: { span: 4 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line1_tag3_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line1_tag3_2"))
                              ),
                            ]),
                          ]),
                        ]),
                        e("a-col", { attrs: { span: 4 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line1_tag4_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line1_tag4_2"))
                              ),
                            ]),
                          ]),
                        ]),
                        e("a-col", { attrs: { span: 4 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line1_tag5_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line1_tag5_2"))
                              ),
                            ]),
                          ]),
                        ]),
                      ],
                      1
                    ),
                    e(
                      "a-row",
                      { class: "listHover2" },
                      [
                        e("a-col", { attrs: { span: 8 } }, [
                          e("div", { staticClass: "list_img" }, [
                            e("img", { attrs: { src: s("0a31") } }),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line2_tag1"))
                              ),
                            ]),
                          ]),
                        ]),
                        e("a-col", { attrs: { span: 4 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line2_tag2_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line2_tag2_2"))
                              ),
                            ]),
                          ]),
                        ]),
                        e("a-col", { attrs: { span: 4 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line2_tag3_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line2_tag3_2"))
                              ),
                            ]),
                          ]),
                        ]),
                        e("a-col", { attrs: { span: 4 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line2_tag4_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line2_tag4_2"))
                              ),
                            ]),
                          ]),
                        ]),
                        e("a-col", { attrs: { span: 4 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line2_tag5_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line2_tag5_2"))
                              ),
                            ]),
                          ]),
                        ]),
                      ],
                      1
                    ),
                    e(
                      "a-row",
                      { class: "listHover3" },
                      [
                        e("a-col", { attrs: { span: 8 } }, [
                          e("div", { staticClass: "list_img" }, [
                            e("img", { attrs: { src: s("9459") } }),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line3_tag1"))
                              ),
                            ]),
                          ]),
                        ]),
                        e("a-col", { attrs: { span: 4 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line3_tag2_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line3_tag2_2"))
                              ),
                            ]),
                          ]),
                        ]),
                        e("a-col", { attrs: { span: 4 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line3_tag3_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line3_tag3_2"))
                              ),
                            ]),
                          ]),
                        ]),
                        e("a-col", { attrs: { span: 4 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line3_tag4_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line3_tag4_2"))
                              ),
                            ]),
                          ]),
                        ]),
                        e("a-col", { attrs: { span: 4 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line3_tag5_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line3_tag5_2"))
                              ),
                            ]),
                          ]),
                        ]),
                      ],
                      1
                    ),
                    e(
                      "a-row",
                      { class: "listHover4" },
                      [
                        e("a-col", { attrs: { span: 8 } }, [
                          e("div", { staticClass: "list_img" }, [
                            e("img", { attrs: { src: s("c3cc") } }),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line4_tag1"))
                              ),
                            ]),
                          ]),
                        ]),
                        e("a-col", { attrs: { span: 4 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line4_tag2_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line4_tag2_2"))
                              ),
                            ]),
                          ]),
                        ]),
                        e("a-col", { attrs: { span: 4 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line4_tag3_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line4_tag3_2"))
                              ),
                            ]),
                          ]),
                        ]),
                        e("a-col", { attrs: { span: 4 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line4_tag4_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line4_tag4_2"))
                              ),
                            ]),
                          ]),
                        ]),
                        e("a-col", { attrs: { span: 4 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line4_tag5_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line4_tag5_2"))
                              ),
                            ]),
                          ]),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e(
                  "div",
                  {
                    staticClass: "list listSmall",
                    on: {
                      click: function (a) {
                        return t.$router.push("/strategy");
                      },
                    },
                  },
                  [
                    e(
                      "a-row",
                      { class: "listHover1" },
                      [
                        e("a-col", { attrs: { span: 12 } }, [
                          e("div", { staticClass: "list_img" }, [
                            e("img", { attrs: { src: s("d03a") } }),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line1_tag1"))
                              ),
                            ]),
                          ]),
                        ]),
                        e("a-col", { attrs: { span: 12 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line1_tag2_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line1_tag2_2"))
                              ),
                            ]),
                          ]),
                        ]),
                      ],
                      1
                    ),
                    e(
                      "a-row",
                      { class: "listHover1" },
                      [
                        e("a-col", { attrs: { span: 8 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line1_tag3_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line1_tag3_2"))
                              ),
                            ]),
                          ]),
                        ]),
                        e("a-col", { attrs: { span: 8 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line1_tag4_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line1_tag4_2"))
                              ),
                            ]),
                          ]),
                        ]),
                        e("a-col", { attrs: { span: 8 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line1_tag5_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line1_tag5_2"))
                              ),
                            ]),
                          ]),
                        ]),
                      ],
                      1
                    ),
                    e(
                      "a-row",
                      { class: "listHover2" },
                      [
                        e("a-col", { attrs: { span: 12 } }, [
                          e("div", { staticClass: "list_img" }, [
                            e("img", { attrs: { src: s("0a31") } }),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line2_tag1"))
                              ),
                            ]),
                          ]),
                        ]),
                        e("a-col", { attrs: { span: 12 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line2_tag2_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line2_tag2_2"))
                              ),
                            ]),
                          ]),
                        ]),
                      ],
                      1
                    ),
                    e(
                      "a-row",
                      { class: "listHover1" },
                      [
                        e("a-col", { attrs: { span: 8 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line2_tag3_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line2_tag3_2"))
                              ),
                            ]),
                          ]),
                        ]),
                        e("a-col", { attrs: { span: 8 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line2_tag4_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line2_tag4_2"))
                              ),
                            ]),
                          ]),
                        ]),
                        e("a-col", { attrs: { span: 8 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line2_tag5_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line2_tag5_2"))
                              ),
                            ]),
                          ]),
                        ]),
                      ],
                      1
                    ),
                    e(
                      "a-row",
                      { class: "listHover3" },
                      [
                        e("a-col", { attrs: { span: 12 } }, [
                          e("div", { staticClass: "list_img" }, [
                            e("img", { attrs: { src: s("9459") } }),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line3_tag1"))
                              ),
                            ]),
                          ]),
                        ]),
                        e("a-col", { attrs: { span: 12 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line3_tag2_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line3_tag2_2"))
                              ),
                            ]),
                          ]),
                        ]),
                      ],
                      1
                    ),
                    e(
                      "a-row",
                      { class: "listHover1" },
                      [
                        e("a-col", { attrs: { span: 8 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line3_tag3_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line3_tag3_2"))
                              ),
                            ]),
                          ]),
                        ]),
                        e("a-col", { attrs: { span: 8 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line3_tag4_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line3_tag4_2"))
                              ),
                            ]),
                          ]),
                        ]),
                        e("a-col", { attrs: { span: 8 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line3_tag5_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line3_tag5_2"))
                              ),
                            ]),
                          ]),
                        ]),
                      ],
                      1
                    ),
                    e(
                      "a-row",
                      { class: "listHover4" },
                      [
                        e("a-col", { attrs: { span: 12 } }, [
                          e("div", { staticClass: "list_img" }, [
                            e("img", { attrs: { src: s("c3cc") } }),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line4_tag1"))
                              ),
                            ]),
                          ]),
                        ]),
                        e("a-col", { attrs: { span: 12 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line4_tag2_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line4_tag2_2"))
                              ),
                            ]),
                          ]),
                        ]),
                      ],
                      1
                    ),
                    e(
                      "a-row",
                      { class: "listHover1" },
                      [
                        e("a-col", { attrs: { span: 8 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line4_tag3_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line4_tag3_2"))
                              ),
                            ]),
                          ]),
                        ]),
                        e("a-col", { attrs: { span: 8 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line4_tag4_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line4_tag4_2"))
                              ),
                            ]),
                          ]),
                        ]),
                        e("a-col", { attrs: { span: 8 } }, [
                          e("div", { staticClass: "list_item" }, [
                            e("h1", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line4_tag5_1"))
                              ),
                            ]),
                            e("h2", [
                              t._v(
                                t._s(t.$t("pageHome.followInfo.line4_tag5_2"))
                              ),
                            ]),
                          ]),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ]
            ),
            e("div", { staticClass: "clear" }),
          ]);
        },
        i = [],
        n = {
          data: function () {
            return {};
          },
          mounted: function () {},
          methods: {},
        },
        o = n,
        l = (s("6ee5"), s("2877")),
        c = Object(l["a"])(o, e, i, !1, null, "82da42c0", null);
      a["default"] = c.exports;
    },
  },
]);
