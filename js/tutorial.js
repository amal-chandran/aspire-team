"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e) {
  var t = {};function n(o) {
    if (t[o]) return t[o].exports;var r = t[o] = { i: o, l: !1, exports: {} };return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
  }n.m = e, n.c = t, n.d = function (e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;if (4 & t && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e && e.__esModule) return e;var o = Object.create(null);if (n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var r in e) {
      n.d(o, r, function (t) {
        return e[t];
      }.bind(null, r));
    }return o;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 5);
}({ 5: function _(e, t) {
    var n = -100,
        o = -100;var r = document.querySelector(".cursor--small");(function () {
      document.addEventListener("mousemove", function (e) {
        n = e.clientX, o = e.clientY;
      });var e = function e() {
        r.style.transform = "translate(" + n + "px, " + o + "px)", requestAnimationFrame(e);
      };requestAnimationFrame(e);
    })();var i = void 0,
        s = void 0,
        u = void 0,
        a = 0,
        c = 0,
        l = !1;(function () {
      var e = document.querySelector(".cursor--canvas"),
          t = 75;paper.setup(e);var r = !1;var p = new paper.Path.RegularPolygon(new paper.Point(0, 0), 8, 15);p.strokeColor = "rgba(255, 0, 0, 0.5)", p.strokeWidth = 1, p.smooth(), (i = new paper.Group([p])).applyMatrix = !1;var d = p.segments.map(function () {
        return new SimplexNoise();
      });var f = [];var m = function m(e, t, n) {
        return (1 - n) * e + n * t;
      },
          y = function y(e, t, n, o, r) {
        return (e - t) * (r - o) / (n - t) + o;
      };paper.view.onFrame = function (e) {
        if (l ? l && (a = m(a, s, .2), c = m(c, u, .2), i.position = new paper.Point(a, c)) : (a = m(a, n, .2), c = m(c, o, .2), i.position = new paper.Point(a, c)), l && p.bounds.width < t) p.scale(1.08);else if (!l && p.bounds.width > 30) {
          r && (p.segments.forEach(function (e, t) {
            e.point.set(f[t][0], f[t][1]);
          }), r = !1, f = []);var _e = .92;p.scale(_e);
        }l && p.bounds.width >= t && (r = !0, 0 === f.length && p.segments.forEach(function (e, t) {
          f[t] = [e.point.x, e.point.y];
        }), p.segments.forEach(function (t, n) {
          var o = d[n].noise2D(e.count / 150, 0),
              r = d[n].noise2D(e.count / 150, 1),
              i = y(o, -1, 1, -4, 4),
              s = y(r, -1, 1, -4, 4),
              u = f[n][0] + i,
              a = f[n][1] + s;t.point.set(u, a);
        })), p.smooth();
      };
    })();(function () {
      var e = function e(_e2) {
        var t = _e2.currentTarget.getBoundingClientRect();s = Math.round(t.left + t.width / 2), u = Math.round(t.top + t.height / 2), l = !0;
      },
          t = function t() {
        l = !1;
      };document.querySelectorAll(".link").forEach(function (n) {
        n.addEventListener("mouseenter", e), n.addEventListener("mouseleave", t);
      });
    })();
  } });
//# sourceMappingURL=tutorial.js.map
//# sourceMappingURL=tutorial.js.map
