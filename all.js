!
function (t) {
        var e = {};

        function a(o) {
                if (e[o]) return e[o].exports;
                var n = e[o] = {
                        i: o,
                        l: !1,
                        exports: {}
                };
                return t[o].call(n.exports, n, n.exports, a),
                n.l = !0,
                n.exports
        }
        a.m = t,
        a.c = e,
        a.d = function (t, e, o) {
                a.o(t, e) || Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: o
                })
        },
        a.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                }),
                Object.defineProperty(t, "__esModule", {
                        value: !0
                })
        },
        a.t = function (t, e) {
                if (1 & e && (t = a(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var o = Object.create(null);
                if (a.r(o), Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: t
                }), 2 & e && "string" != typeof t) for (var n in t) a.d(o, n, function (e) {
                        return t[e]
                }.bind(null, n));
                return o
        },
        a.n = function (t) {
                var e = t && t.__esModule ?
                function () {
                        return t.
                default
                } : function () {
                        return t
                };
                return a.d(e, "a", e),
                e
        },
        a.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
        },
        a.p = "",
        a(a.s = 0)
}([function (t, e) {
        var a = !0,
                o = !0;
        window.outerWidth < 799 && (o = !1, a = !1),
        window.addEventListener("load", (function () {
                document.querySelectorAll("[data-tab]").forEach((function (t) {
                        t.addEventListener("click", (function () {
                                if ("def" === this.getAttribute("data-state")) {
                                        var t = document.querySelector(".active-tab"),
                                                e = document.querySelector(this.getAttribute("data-tab")),
                                                a = document.querySelector("header");
                                        document.querySelector('[data-tab][data-state="active"]').setAttribute("data-state", "def"),
                                        this.setAttribute("data-state", "active"),


                                        function (t, e) {
                                                e.style.display = "block",
                                                t.style.display = "block",
                                                setTimeout((function () {
                                                        e.classList.add("active-tab"),
                                                        t.classList.remove("active-tab"),
                                                        setTimeout((function () {
                                                                e.style.display = "",
                                                                t.style.display = ""
                                                        }), 300)
                                                }), 30)
                                        }(t, e),
                                        document.querySelector(".active[data-mobile-tab]").classList.remove("active"),
                                        document.querySelector('[data-tab-name="'.concat(this.getAttribute("data-tab-name"), '"][data-mobile-tab]')).classList.add("active");
                                        var o = document.querySelector("#" + this.getAttribute("data-line-target"));
                                        switch (this.getAttribute("data-position")) {
                                        case "left":
                                                a.classList.remove("background-blur"),
                                                o.style.left = 0;
                                                break;
                                        case "right":
                                                setTimeout((function () {
                                                        a.classList.add("background-blur")
                                                }), 200),
                                                o.style.left = "50%"
                                        }
                                }
                        }))
                }));
                var t = document.querySelectorAll("[data-mobile-tab]");
                t && t.forEach((function (t) {
                        t.addEventListener("click", (function () {
                                if (!this.classList.contains("active")) {
                                        document.querySelector(".active[data-mobile-tab]").classList.remove("active"),
                                        this.classList.add("active");
                                        var t = document.querySelector('header [data-tab-name="'.concat(this.getAttribute("data-tab-name"), '"]')),
                                                e = document.querySelector('header [data-tab][data-state="active"]'),
                                                a = document.querySelector("#" + t.getAttribute("data-line-target"));
                                        switch (e.setAttribute("data-state", "def"), t.setAttribute("data-state", "active"), t.getAttribute("data-position")) {
                                        case "left":
                                                a.style.left = 0;
                                                break;
                                        case "right":
                                                a.style.left = "50%"
                                        }
                                        var o = document.querySelector("header"),
                                                n = document.querySelector(this.getAttribute("data-mobile-tab")),
                                                c = document.querySelector(".active-tab");
                                        n.style.display = "block",
                                        c.style.display = "block",
                                        setTimeout((function () {
                                                c.classList.remove("active-tab"),
                                                n.classList.add("active-tab"),
                                                o.classList.toggle("background-blur"),
                                                document.querySelector("[data-nav-btn]").click(),
                                                setTimeout((function () {
                                                        n.style.display = "",
                                                        c.style.display = ""
                                                }), 300)
                                        }), 0)
                                }
                        }))
                }));
                var e = [];
                e[0] = document.querySelector(".sun .planet"),
                e[1] = document.querySelector(".neptune .planet"),
                e[2] = document.querySelector(".jupiter .planet"),
                e[3] = document.querySelector(".earth .planet"),
                e[4] = document.querySelector(".mercury .planet"),
                e[5] = document.querySelector(".venus .planet"),
                e[6] = document.querySelector(".mars .planet"),
                e[7] = document.querySelector(".saturn .planet"),
                e[8] = document.querySelector(".uranus .planet"),
                e[9] = document.querySelector(".moon .planet");
                var n = document.querySelector(".orbits-canvas");
                !
                function (t, e) {
                        t.forEach((function (t, a) {
                                t.addEventListener("mouseenter", (function () {
                                        n.classList.add(e[a])
                                })),
                                t.addEventListener("mouseleave", (function () {
                                        n.classList.remove(e[a])
                                }))
                        }))
                }(e, ["active-sun", "active-planet-1", "active-planet-2", "active-planet-3", "active-planet-4", "active-planet-5", "active-planet-6", "active-planet-7", "active-planet-8", "active-planet-9"]);
                var c, r, i = document.querySelectorAll(".zoom-out [data-move]"),
                        s = !0;

                function u() {
                        document.querySelector(".solar-system");
                        var t = document.querySelector(".root"),
                                e = this.getAttribute("data-iso"),
                                o = document.querySelector("header");
                        a = !1,
                        t.setAttribute("data-prev-planet", e),
                        t.classList.add("zoom-in"),
                        t.classList.add("planet-active-" + e),
                        t.classList.add("zooming"),
                        setTimeout((function () {
                                t.classList.remove("zooming"),
                                t.classList.add("carousel")
                        }), 600),
                        t.classList.remove("zoom-out"),
                        o.setAttribute("data-planet-iso", e),
                        m(e),
                        i.forEach((function (t) {
                                return t.removeEventListener("click", u)
                        })),
                        (c = document.querySelectorAll(".zoom-in [data-move-out]")).forEach((function (t) {
                                return t.addEventListener("click", l)
                        })),
                        (r = document.querySelectorAll(".zoom-in .planet[data-move]")).forEach((function (t) {
                                return t.addEventListener("click", d)
                        }))
                }
                function l() {
                        var t = document.querySelector(".root"),
                                e = document.querySelector("header"),
                                n = this.getAttribute("data-iso") || this.parentNode.getAttribute("data-planet-iso");
                        o && (a = !0),
                        document.querySelector(".switch-checked") && document.querySelector(".custom-switch input[data-switch-content]").click(),
                        t.setAttribute("data-prev-planet", ""),
                        e.setAttribute("data-planet-iso", ""),
                        t.classList.add("zoom-out"),
                        t.classList.remove("planet-active-" + n),
                        t.classList.remove("zoom-in"),
                        t.classList.add("zooming"),
                        setTimeout((function () {
                                t.classList.remove("zooming"),
                                t.classList.remove("carousel")
                        }), 0),
                        v(n),
                        c.forEach((function (t) {
                                return t.removeEventListener("click", l)
                        })),
                        r.forEach((function (t) {
                                return t.removeEventListener("click", d)
                        })),
                        (i = document.querySelectorAll(".zoom-out [data-move]")).forEach((function (t) {
                                return t.addEventListener("click", u)
                        }))
                }
                function d() {
                        document.querySelector(".solar-system");
                        var t = document.querySelector(".root"),
                                e = this.getAttribute("data-iso"),
                                a = t.getAttribute("data-prev-planet"),
                                o = document.querySelector("header");
                        s && (s = !1, v(a), m(e), o.setAttribute("data-planet-iso", e), t.classList.remove("planet-active-" + a), t.classList.add("planet-active-" + e), t.classList.add("planets-opacity"), t.classList.add("scrolling"), setTimeout((function () {
                                t.classList.remove("planets-opacity")
                        }), 700), setTimeout((function () {
                                t.classList.remove("scrolling"),
                                s = !0
                        }), 1500), t.setAttribute("data-prev-planet", e))
                }
                function m(t) {
                        var e = document.querySelector("#" + t + "Info .nft-skeleton");
                        e && (4 === e.readyState ? e.paused && e.play() : e.load())
                }
                function v(t) {
                        var e = document.querySelector("#" + t + "Info .nft-skeleton");
                        e && setTimeout((function () {
                                e.pause(),
                                e.currentTime = 0
                        }), 500)
                }
                i.forEach((function (t) {
                        return t.addEventListener("click", u)
                }));
                var y = document.querySelectorAll("[data-open-country]"),
                        f = document.querySelectorAll("[data-close-country]");

                function b() {
                        var t = document.querySelector(".root"),
                                e = document.querySelector("header"),
                                a = this.getAttribute("data-iso");
                        t.classList.add("country-active-" + a),
                        e.setAttribute("data-country-iso", a),
                        m(a)
                }
                function p() {
                        var t = document.querySelector(".root"),
                                e = this.getAttribute("data-iso") || this.parentNode.getAttribute("data-country-iso");
                        document.querySelector("header").setAttribute("data-country-iso", ""),
                        t.classList.remove("country-active-" + e)
                }
                y.forEach((function (t) {
                        t.addEventListener("click", b)
                })),
                f.forEach((function (t) {
                        t.addEventListener("click", p)
                }));
                var S = document.querySelector(".sun video");
                window.outerWidth > 799 && S.load(),
                console.log("sun is loading");
                var h = Array.from(document.querySelectorAll("video")).map((function (t) {
                        return {
                                element: t,
                                state: "needLoading"
                        }
                }));
                console.log(h),
                h.forEach((function (t) {
                        "needLoading" === t.state && t.element.addEventListener("canplaythrough", (function e() {
                                console.log(t.element, "is playing"),
                                t.element.play(),
                                t.element.removeEventListener("canplaythrough", e),
                                t.state = "loaded",
                                console.log("changedState", h)
                        }))
                }));
                var q = document.querySelector(".planets-canvas .moon"),
                        L = performance.now(),
                        g = 0;
                requestAnimationFrame((function t(e) {
                        e - L >= 10 && a && (g += .35, q.style.cssText = "\n      transform: rotate(".concat(g, "deg) translateX(5em) rotate(").concat(-1 * g, "deg);\n      transition: transform .15s linear;\n    "), L = performance.now()),
                        a || (o ? setTimeout((function () {
                                q.style.cssText = "\n          transform: rotate(".concat(g, "deg) translateX(0em) rotate(").concat(-1 * g, "deg);\n        ")
                        }), 600) : q.style.cssText = ""),
                        requestAnimationFrame(t)
                })),
                window.addEventListener("resize", (function () {
                        var t = window.outerWidth;
                        if (t > 799 && !o) return a = !0,
                        void(o = !0);
                        if (t < 799 && o) return a = !1,
                        void(o = !1)
                }));
                var A = document.querySelector(".custom-switch input[data-switch-content]");
                A && A.addEventListener("click", (function () {
                        var t = document.querySelectorAll(this.getAttribute("data-switch-content"));
                        this.checked ? t.forEach((function (t) {
                                t.classList.add("switch-checked")
                        })) : t.forEach((function (t) {
                                t.classList.remove("switch-checked")
                        }))
                })),
                document.querySelectorAll("[data-buy]").forEach((function (t) {
                        t.addEventListener("click", (function () {
                                var e = document.querySelector(t.getAttribute("data-buy"));
                                e.classList.add("sold"),
                                e.style.animation = "sold .4s ease-out",
                                setTimeout((function () {
                                        e.style.animation = ""
                                }), 400)
                        }))
                })),
                document.querySelectorAll("input[data-switch-text]").forEach((function (t) {
                        t.addEventListener("click", (function () {
                                var e = document.querySelector(t.getAttribute("data-switch-text")),
                                        a = t.getAttribute("data-left-value"),
                                        o = t.getAttribute("data-right-value");
                                t.checked ? e.innerHTML = o : e.innerHTML = a
                        }))
                })),
                document.querySelectorAll("[data-trigger-move]").forEach((function (t) {
                        t.addEventListener("click", (function () {
                                document.querySelector(".planet-wrapper." + this.getAttribute("data-trigger-move") + " .planet").click()
                        }))
                }));
                var k = document.querySelector("[data-nav-btn]");
                k && k.addEventListener("click", (function () {
                        var t = document.querySelector(".root"),
                                e = document.querySelector(".nav-block");
                        t.classList.contains("active-menu") ? (t.classList.remove("active-menu"), setTimeout((function () {
                                e.style.display = ""
                        }), 500)) : (e.style.display = "flex", setTimeout((function () {
                                t.classList.add("active-menu")
                        }), 20))
                }));
                var E = document.querySelectorAll("[data-close-menu]");

                function w() {
                        var t = document.querySelector(".root"),
                                e = document.querySelector(".about-us"),
                                a = document.querySelector(".solar-system"),
                                o = document.querySelector("header");
                        if (t.classList.contains("active-menu") && document.querySelector("header .nav-btn").click(), e.classList.contains("active-tab")) {
                                e.style.display = "block",
                                e.classList.remove("active-tab"),
                                a.classList.add("active-tab"),
                                setTimeout((function () {
                                        e.style.display = ""
                                }), 300),
                                o.classList.remove("background-blur"),
                                document.querySelector('.nav-block [data-tab-name="solarSystem"]').classList.add("active"),
                                document.querySelector('.nav-block [data-tab-name="aboutUs"]').classList.remove("active");
                                var n = document.querySelector('header [data-tab-name="aboutUs"]'),
                                        c = document.querySelector('header [data-tab-name="solarSystem"]'),
                                        r = document.querySelector("#" + c.getAttribute("data-line-target"));
                                n.setAttribute("data-state", "def"),
                                c.setAttribute("data-state", "active"),
                                r.style.left = 0
                        }
                }
                E && E.forEach((function (t) {
                        return t.addEventListener("click", w)
                }))
        }))
}]);