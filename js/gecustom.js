function autoType(t, i) {
    var e = $(t);
    e.css({
        position: "relative",
        display: "inline-block"
    }), e.prepend('<div class="cursor" style="right: initial; left:0;"></div>'), e = e.find(".text-js");
    var o = e.text().trim().split(""),
        s = o.length,
        n = "";
    e.text("|"), setTimeout(function() {
        e.css("opacity", 1), e.prev().removeAttr("style"), e.text("");
        for (var t = 0; s > t; t++) ! function(t, o) {
            setTimeout(function() {
                n += o, e.text(n)
            }, t * i)
        }(t + 1, o[t])
    }, 1500)
}
$(document).ready(function() {
    autoType(".type-js", 150)
});
var stickySidebar = $(".sticky");
if (stickySidebar.length > 0) var stickyHeight = stickySidebar.height(),
    sidebarTop = stickySidebar.offset().top;
$(window).scroll(function() {
        if (stickySidebar.length > 0) {
            var t = $(window).scrollTop();
            if (t > sidebarTop) {
                stickySidebar.css("top", t - sidebarTop);
                var i = stickySidebar.offset().top + stickyHeight,
                    e = $(".container").offset().top + $(".container").height();
                if (i > e) {
                    var o = $(".container").height() - stickyHeight;
                    stickySidebar.css("top", o)
                }
            } else stickySidebar.css("top", "0")
        }
    }), $(window).resize(function() {
        stickySidebar.length > 0 && (stickyHeight = stickySidebar.height())
    }),
    function() {
        var t, i = function(t, i) {
            return function() {
                return t.apply(i, arguments)
            }
        };
        t = function() {
            function t() {}
            return t.prototype.extend = function(t, i) {
                var e, o;
                for (e in t) o = t[e], null != o && (i[e] = o);
                return i
            }, t.prototype.isMobile = function(t) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
            }, t
        }(), this.WOW = function() {
            function e(t) {
                null == t && (t = {}), this.scrollCallback = i(this.scrollCallback, this), this.scrollHandler = i(this.scrollHandler, this), this.start = i(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults)
            }
            return e.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0
            }, e.prototype.init = function() {
                var t;
                return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : document.addEventListener("DOMContentLoaded", this.start)
            }, e.prototype.start = function() {
                var t, i, e, o;
                if (this.boxes = this.element.getElementsByClassName(this.config.boxClass), this.boxes.length) {
                    if (this.disabled()) return this.resetStyle();
                    for (o = this.boxes, i = 0, e = o.length; e > i; i++) t = o[i], this.applyStyle(t, !0);
                    return window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback, 50)
                }
            }, e.prototype.stop = function() {
                return window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), null != this.interval ? clearInterval(this.interval) : void 0
            }, e.prototype.show = function(t) {
                return this.applyStyle(t), t.className = "" + t.className + " " + this.config.animateClass
            }, e.prototype.applyStyle = function(t, i) {
                var e, o, s;
                return o = t.getAttribute("data-wow-duration"), e = t.getAttribute("data-wow-delay"), s = t.getAttribute("data-wow-iteration"), t.setAttribute("style", this.customStyle(i, o, e, s))
            }, e.prototype.resetStyle = function() {
                var t, i, e, o, s;
                for (o = this.boxes, s = [], i = 0, e = o.length; e > i; i++) t = o[i], s.push(t.setAttribute("style", "visibility: visible;"));
                return s
            }, e.prototype.customStyle = function(t, i, e, o) {
                var s;
                return s = t ? "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;" : "visibility: visible;", i && (s += "-webkit-animation-duration: " + i + "; -moz-animation-duration: " + i + "; animation-duration: " + i + ";"), e && (s += "-webkit-animation-delay: " + e + "; -moz-animation-delay: " + e + "; animation-delay: " + e + ";"), o && (s += "-webkit-animation-iteration-count: " + o + "; -moz-animation-iteration-count: " + o + "; animation-iteration-count: " + o + ";"), s
            }, e.prototype.scrollHandler = function() {
                return this.scrolled = !0
            }, e.prototype.scrollCallback = function() {
                var t;
                return this.scrolled && (this.scrolled = !1, this.boxes = function() {
                    var i, e, o, s;
                    for (o = this.boxes, s = [], i = 0, e = o.length; e > i; i++) t = o[i], t && (this.isVisible(t) ? this.show(t) : s.push(t));
                    return s
                }.call(this), !this.boxes.length) ? this.stop() : void 0
            }, e.prototype.offsetTop = function(t) {
                var i;
                for (i = t.offsetTop; t = t.offsetParent;) i += t.offsetTop;
                return i
            }, e.prototype.isVisible = function(t) {
                var i, e, o, s, n;
                return e = t.getAttribute("data-wow-offset") || this.config.offset, n = window.pageYOffset, s = n + this.element.clientHeight - e, o = this.offsetTop(t), i = o + t.clientHeight, s >= o && i >= n
            }, e.prototype.util = function() {
                return this._util || (this._util = new t)
            }, e.prototype.disabled = function() {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, e
        }()
    }.call(this), wow = new WOW({
        animateClass: "animated",
        offset: 100
    }), wow.init(), jQuery(document).ready(function(t) {
        var i = 1170;
        if (t(window).width() > i) {
            var e = t(".navbar-custom").height();
            t(window).on("scroll", {
                previousTop: 0
            }, function() {
                var i = t(window).scrollTop();
                i < this.previousTop ? i > 0 && t(".navbar-custom").hasClass("is-fixed") ? t(".navbar-custom").addClass("is-visible") : t(".navbar-custom").removeClass("is-visible is-fixed") : i > this.previousTop && (t(".navbar-custom").removeClass("is-visible"), i > e && !t(".navbar-custom").hasClass("is-fixed") && t(".navbar-custom").addClass("is-fixed")), this.previousTop = i
            })
        }
    });
