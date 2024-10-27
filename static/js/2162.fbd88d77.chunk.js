/*! For license information please see 2162.fbd88d77.chunk.js.LICENSE.txt */
(self.webpackChunki24news_reader = self.webpackChunki24news_reader || []).push([
  [2162],
  {
    64600: (e, t) => {
      var n;
      !(function () {
        "use strict";
        var o = {}.hasOwnProperty;
        function c() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            if (n) {
              var r = typeof n;
              if ("string" === r || "number" === r) e.push(n);
              else if (Array.isArray(n)) {
                if (n.length) {
                  var i = c.apply(null, n);
                  i && e.push(i);
                }
              } else if ("object" === r) {
                if (
                  n.toString !== Object.prototype.toString &&
                  !n.toString.toString().includes("[native code]")
                ) {
                  e.push(n.toString());
                  continue;
                }
                for (var a in n) o.call(n, a) && n[a] && e.push(a);
              }
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((c.default = c), (e.exports = c))
          : void 0 ===
              (n = function () {
                return c;
              }.apply(t, [])) || (e.exports = n);
      })();
    },
    9834: (e, t, n) => {
      var o = n(31260)("jsonp");
      e.exports = function (e, t, n) {
        "function" == typeof t && ((n = t), (t = {}));
        t || (t = {});
        var i,
          a,
          l = t.prefix || "__jp",
          s = t.name || l + c++,
          d = t.param || "callback",
          u = null != t.timeout ? t.timeout : 6e4,
          h = encodeURIComponent,
          w = document.getElementsByTagName("script")[0] || document.head;
        u &&
          (a = setTimeout(function () {
            C(), n && n(new Error("Timeout"));
          }, u));
        function C() {
          i.parentNode && i.parentNode.removeChild(i),
            (window[s] = r),
            a && clearTimeout(a);
        }
        return (
          (window[s] = function (e) {
            o("jsonp got", e), C(), n && n(null, e);
          }),
          (e = (e += (~e.indexOf("?") ? "&" : "?") + d + "=" + h(s)).replace(
            "?&",
            "?"
          )),
          o('jsonp req "%s"', e),
          ((i = document.createElement("script")).src = e),
          w.parentNode.insertBefore(i, w),
          function () {
            window[s] && C();
          }
        );
      };
      var c = 0;
      function r() {}
    },
    31260: (e, t, n) => {
      function o() {
        var e;
        try {
          e = t.storage.debug;
        } catch (n) {}
        return (
          !e &&
            "undefined" !== typeof process &&
            "env" in process &&
            (e = {
              NODE_ENV: "production",
              PUBLIC_URL: "",
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: void 0,
              FAST_REFRESH: !0,
              REACT_APP_SENTRY_RELEASE: "v9.5.13",
              REACT_APP_API_BASE_URL: "https://api.i24news.tv",
              REACT_APP_CDN_BASE_URL: "https://cdn.i24news.tv",
              REACT_APP_DEBUG_STATE: "0",
              REACT_APP_FACEBOOK_APP_ID: "2449744322011828",
              REACT_APP_FACEBOOK_SCOPE: "public_profile,email",
              REACT_APP_FACEBOOK_API_VERSION: "v10.0",
              REACT_APP_FRONTEND_DOMAIN: "i24news.tv",
              REACT_APP_X_ACCOUNT_EN: "@i24NEWS_EN",
              REACT_APP_X_ACCOUNT_FR: "@i24NEWS_FR",
              REACT_APP_X_ACCOUNT_AR: "@i24NEWS_AR",
              REACT_APP_X_ACCOUNT_HE: "@i24news_HE",
              REACT_APP_GOOGLE_TAG_MANAGER_ID: "GTM-MZ2X7ZW",
              REACT_APP_GOOGLE_ANALYTICS_ID: "UA-39950159-1",
              REACT_APP_GOOGLE_RECAPTCHA_API_KEY:
                "6LdLORQUAAAAAHaRTK1z5aHHVPsLtSqgcUotg-VB",
              REACT_APP_BRIGHTCOVE_ACCOUNT_ID: "5377161796001",
              REACT_APP_BRIGHTCOVE_PLAYER_ID_FR: "P3cdD8oE2",
              REACT_APP_BRIGHTCOVE_PLAYER_ID_EN: "GiDkQjdsz",
              REACT_APP_BRIGHTCOVE_PLAYER_ID_AR: "XCuYE2X5x",
              REACT_APP_BRIGHTCOVE_PLAYER_ID_HE: "8oYZjranU",
              REACT_APP_BRIGHTCOVE_RADIO_PLAYER_ID: "LeFemUWzp",
              REACT_APP_BRIGHTCOVE_LIVE_VIDEO_ID_FR: "6118155266001",
              REACT_APP_BRIGHTCOVE_LIVE_VIDEO_ID_EN: "6122872946001",
              REACT_APP_BRIGHTCOVE_LIVE_VIDEO_ID_AR: "6122882228001",
              REACT_APP_BRIGHTCOVE_LIVE_VIDEO_ID_HE: "6353757977112",
              REACT_APP_BRIGHTCOVE_LIVE_STREAM_VIDEO_ID_AR: "6168209415001",
              REACT_APP_BRIGHTCOVE_LIVE_STREAM_VIDEO_ID_EN: "6189399953001",
              REACT_APP_BRIGHTCOVE_LIVE_STREAM_VIDEO_ID_FR: "6189400648001",
              REACT_APP_BRIGHTCOVE_LIVE_STREAM_VIDEO_ID_HE: "6352464366112",
              REACT_APP_BRIGHTCOVE_LIVE_STREAM_PLAYER_ID_AR: "oHEyVVUhv",
              REACT_APP_BRIGHTCOVE_LIVE_STREAM_PLAYER_ID_EN: "S77JEhYlPz",
              REACT_APP_BRIGHTCOVE_LIVE_STREAM_PLAYER_ID_FR: "qwDfmQydf",
              REACT_APP_BRIGHTCOVE_LIVE_STREAM_PLAYER_ID_HE: "NwpCHKlKW",
              REACT_APP_BRIGHTCOVE_PLAYLIST_TOP_VIDEOS_ID_EN:
                "1682992723338882188",
              REACT_APP_BRIGHTCOVE_PLAYLIST_TOP_VIDEOS_ID_FR:
                "1688132277115918750",
              REACT_APP_BRIGHTCOVE_PLAYLIST_TOP_VIDEOS_ID_AR:
                "1688132537178557472",
              REACT_APP_BRIGHTCOVE_PLAYLIST_TOP_VIDEOS_ID_HE:
                "1795684522903045931",
              REACT_APP_BRIGHTCOVE_ARTICLE_LIVE_STREAM_VIDEO_ID_FR:
                "6222432557001",
              REACT_APP_BRIGHTCOVE_ARTICLE_LIVE_STREAM_VIDEO_ID_EN:
                "6222424206001",
              REACT_APP_BRIGHTCOVE_ARTICLE_LIVE_STREAM_VIDEO_ID_AR:
                "6222431246001",
              REACT_APP_BRIGHTCOVE_ARTICLE_LIVE_STREAM_VIDEO_ID_HE:
                "6355767487112",
              REACT_APP_MINUTE_SCRIPT_ID: "60600",
              REACT_APP_SENTRY_DSN:
                "https://54d52e511412497ea16c10d1224e450d@o276939.ingest.sentry.io/1502781",
              REACT_APP_SENTRY_PROJECT: "reader",
              REACT_APP_SENTRY_ENV: "prod",
              REACT_APP_SENTRY_SAMPLE_RATE: "0.1",
              REACT_APP_SENTRY_WHITELIST_URLS: "www.i24news.tv",
              REACT_APP_ADAPEX_SITE_ID: "22815767462",
              REACT_APP_ONETRUST_SCRIPT_ID:
                "8dbecc1b-d87a-4658-8d5d-a8d38533cab3",
              REACT_APP_LINK_APPLE_ITUNES:
                "https://itunes.apple.com/app/i24news/id671837118",
              REACT_APP_LINK_GOOGLE_PLAY:
                "https://play.google.com/store/apps/details?id=tv.i24news.i24news",
            }.DEBUG),
          e
        );
      }
      ((t = e.exports = n(24703)).log = function () {
        return (
          "object" === typeof console &&
          console.log &&
          Function.prototype.apply.call(console.log, console, arguments)
        );
      }),
        (t.formatArgs = function (e) {
          var n = this.useColors;
          if (
            ((e[0] =
              (n ? "%c" : "") +
              this.namespace +
              (n ? " %c" : " ") +
              e[0] +
              (n ? "%c " : " ") +
              "+" +
              t.humanize(this.diff)),
            !n)
          )
            return;
          var o = "color: " + this.color;
          e.splice(1, 0, o, "color: inherit");
          var c = 0,
            r = 0;
          e[0].replace(/%[a-zA-Z%]/g, function (e) {
            "%%" !== e && (c++, "%c" === e && (r = c));
          }),
            e.splice(r, 0, o);
        }),
        (t.save = function (e) {
          try {
            null == e ? t.storage.removeItem("debug") : (t.storage.debug = e);
          } catch (n) {}
        }),
        (t.load = o),
        (t.useColors = function () {
          if (
            "undefined" !== typeof window &&
            window.process &&
            "renderer" === window.process.type
          )
            return !0;
          return (
            ("undefined" !== typeof document &&
              document.documentElement &&
              document.documentElement.style &&
              document.documentElement.style.WebkitAppearance) ||
            ("undefined" !== typeof window &&
              window.console &&
              (window.console.firebug ||
                (window.console.exception && window.console.table))) ||
            ("undefined" !== typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
              parseInt(RegExp.$1, 10) >= 31) ||
            ("undefined" !== typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
          );
        }),
        (t.storage =
          "undefined" != typeof chrome && "undefined" != typeof chrome.storage
            ? chrome.storage.local
            : (function () {
                try {
                  return window.localStorage;
                } catch (e) {}
              })()),
        (t.colors = [
          "lightseagreen",
          "forestgreen",
          "goldenrod",
          "dodgerblue",
          "darkorchid",
          "crimson",
        ]),
        (t.formatters.j = function (e) {
          try {
            return JSON.stringify(e);
          } catch (t) {
            return "[UnexpectedJSONParseError]: " + t.message;
          }
        }),
        t.enable(o());
    },
    24703: (e, t, n) => {
      var o;
      function c(e) {
        function n() {
          if (n.enabled) {
            var e = n,
              c = +new Date(),
              r = c - (o || c);
            (e.diff = r), (e.prev = o), (e.curr = c), (o = c);
            for (var i = new Array(arguments.length), a = 0; a < i.length; a++)
              i[a] = arguments[a];
            (i[0] = t.coerce(i[0])),
              "string" !== typeof i[0] && i.unshift("%O");
            var l = 0;
            (i[0] = i[0].replace(/%([a-zA-Z%])/g, function (n, o) {
              if ("%%" === n) return n;
              l++;
              var c = t.formatters[o];
              if ("function" === typeof c) {
                var r = i[l];
                (n = c.call(e, r)), i.splice(l, 1), l--;
              }
              return n;
            })),
              t.formatArgs.call(e, i),
              (n.log || t.log || console.log.bind(console)).apply(e, i);
          }
        }
        return (
          (n.namespace = e),
          (n.enabled = t.enabled(e)),
          (n.useColors = t.useColors()),
          (n.color = (function (e) {
            var n,
              o = 0;
            for (n in e) (o = (o << 5) - o + e.charCodeAt(n)), (o |= 0);
            return t.colors[Math.abs(o) % t.colors.length];
          })(e)),
          "function" === typeof t.init && t.init(n),
          n
        );
      }
      ((t = e.exports = c.debug = c.default = c).coerce = function (e) {
        return e instanceof Error ? e.stack || e.message : e;
      }),
        (t.disable = function () {
          t.enable("");
        }),
        (t.enable = function (e) {
          t.save(e), (t.names = []), (t.skips = []);
          for (
            var n = ("string" === typeof e ? e : "").split(/[\s,]+/),
              o = n.length,
              c = 0;
            c < o;
            c++
          )
            n[c] &&
              ("-" === (e = n[c].replace(/\*/g, ".*?"))[0]
                ? t.skips.push(new RegExp("^" + e.substr(1) + "$"))
                : t.names.push(new RegExp("^" + e + "$")));
        }),
        (t.enabled = function (e) {
          var n, o;
          for (n = 0, o = t.skips.length; n < o; n++)
            if (t.skips[n].test(e)) return !1;
          for (n = 0, o = t.names.length; n < o; n++)
            if (t.names[n].test(e)) return !0;
          return !1;
        }),
        (t.humanize = n(24850)),
        (t.names = []),
        (t.skips = []),
        (t.formatters = {});
    },
    24850: (e) => {
      var t = 1e3,
        n = 60 * t,
        o = 60 * n,
        c = 24 * o,
        r = 365.25 * c;
      function i(e, t, n) {
        if (!(e < t))
          return e < 1.5 * t
            ? Math.floor(e / t) + " " + n
            : Math.ceil(e / t) + " " + n + "s";
      }
      e.exports = function (e, a) {
        a = a || {};
        var l,
          s = typeof e;
        if ("string" === s && e.length > 0)
          return (function (e) {
            if ((e = String(e)).length > 100) return;
            var i =
              /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
                e
              );
            if (!i) return;
            var a = parseFloat(i[1]);
            switch ((i[2] || "ms").toLowerCase()) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return a * r;
              case "days":
              case "day":
              case "d":
                return a * c;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return a * o;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return a * n;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return a * t;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return a;
              default:
                return;
            }
          })(e);
        if ("number" === s && !1 === isNaN(e))
          return a.long
            ? i((l = e), c, "day") ||
                i(l, o, "hour") ||
                i(l, n, "minute") ||
                i(l, t, "second") ||
                l + " ms"
            : (function (e) {
                if (e >= c) return Math.round(e / c) + "d";
                if (e >= o) return Math.round(e / o) + "h";
                if (e >= n) return Math.round(e / n) + "m";
                if (e >= t) return Math.round(e / t) + "s";
                return e + "ms";
              })(e);
        throw new Error(
          "val is not a non-empty string or a valid number. val=" +
            JSON.stringify(e)
        );
      };
    },
    58089: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => o });
      const o = (0, n(7573).A)(function (e, t) {
        return (
          t instanceof e ||
          (null != t &&
            (t.constructor === e ||
              ("Object" === e.name && "object" === typeof t)))
        );
      });
    },
    37068: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => i });
      var o = n(89334),
        c = n(61888),
        r = n(58089);
      const i = (0, o.A)(function (e, t, n) {
        return (0, r.A)(e, (0, c.A)(t, n));
      });
    },
    519: (e, t, n) => {
      "use strict";
      n.d(t, {
        Kz: () => S,
        _G: () => O,
        r6: () => y,
        uI: () => I,
        wk: () => k,
      });
      var o = n(70579),
        c = n(65043),
        r = n(64600),
        i = n(9834),
        a = Object.defineProperty,
        l = Object.defineProperties,
        s = Object.getOwnPropertyDescriptors,
        d = Object.getOwnPropertySymbols,
        u = Object.prototype.hasOwnProperty,
        h = Object.prototype.propertyIsEnumerable,
        w = (e, t, n) =>
          t in e
            ? a(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        C = (e, t) => {
          for (var n in t || (t = {})) u.call(t, n) && w(e, n, t[n]);
          if (d) for (var n of d(t)) h.call(t, n) && w(e, n, t[n]);
          return e;
        },
        p = (e, t) => l(e, s(t)),
        _ = (e, t) => {
          var n = {};
          for (var o in e) u.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
          if (null != e && d)
            for (var o of d(e))
              t.indexOf(o) < 0 && h.call(e, o) && (n[o] = e[o]);
          return n;
        };
      function m(e) {
        return (t) => {
          var n = t,
            {
              bgStyle: c = {},
              borderRadius: r = 0,
              iconFillColor: i = "white",
              round: a = !1,
              size: l = 64,
            } = n,
            s = _(n, [
              "bgStyle",
              "borderRadius",
              "iconFillColor",
              "round",
              "size",
            ]);
          return (0, o.jsxs)(
            "svg",
            p(C({ viewBox: "0 0 64 64", width: l, height: l }, s), {
              children: [
                a
                  ? (0, o.jsx)("circle", {
                      cx: "32",
                      cy: "32",
                      r: "32",
                      fill: e.color,
                      style: c,
                    })
                  : (0, o.jsx)("rect", {
                      width: "64",
                      height: "64",
                      rx: r,
                      ry: r,
                      fill: e.color,
                      style: c,
                    }),
                (0, o.jsx)("path", { d: e.path, fill: i }),
              ],
            })
          );
        };
      }
      m({
        color: "#7f7f7f",
        networkName: "email",
        path: "M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z",
      });
      function f(e) {
        const t = Object.entries(e)
          .filter((e) => {
            let [, t] = e;
            return void 0 !== t && null !== t;
          })
          .map((e) => {
            let [t, n] = e;
            return ""
              .concat(encodeURIComponent(t), "=")
              .concat(encodeURIComponent(String(n)));
          });
        return t.length > 0 ? "?".concat(t.join("&")) : "";
      }
      const E = (e) =>
          !!e &&
          ("object" === typeof e || "function" === typeof e) &&
          "function" === typeof e.then,
        A = (e, t) => ({
          left:
            window.outerWidth / 2 +
            (window.screenX || window.screenLeft || 0) -
            e / 2,
          top:
            window.outerHeight / 2 +
            (window.screenY || window.screenTop || 0) -
            t / 2,
        }),
        g = (e, t) => ({
          top: (window.screen.height - t) / 2,
          left: (window.screen.width - e) / 2,
        });
      function P(e) {
        var t = e,
          {
            beforeOnClick: n,
            children: c,
            className: i,
            disabled: a,
            disabledStyle: l = { opacity: 0.6 },
            forwardedRef: s,
            htmlTitle: d,
            networkLink: u,
            networkName: h,
            onClick: w,
            onShareWindowClose: m,
            openShareDialogOnClick: f = !0,
            opts: P,
            resetButtonStyle: R = !0,
            style: T,
            url: v,
            windowHeight: I = 400,
            windowPosition: b = "windowCenter",
            windowWidth: L = 550,
          } = t,
          k = _(t, [
            "beforeOnClick",
            "children",
            "className",
            "disabled",
            "disabledStyle",
            "forwardedRef",
            "htmlTitle",
            "networkLink",
            "networkName",
            "onClick",
            "onShareWindowClose",
            "openShareDialogOnClick",
            "opts",
            "resetButtonStyle",
            "style",
            "url",
            "windowHeight",
            "windowPosition",
            "windowWidth",
          ]);
        const O = r(
            "react-share__ShareButton",
            { "react-share__ShareButton--disabled": !!a, disabled: !!a },
            i
          ),
          y = C(
            C(
              R
                ? {
                    backgroundColor: "transparent",
                    border: "none",
                    padding: 0,
                    font: "inherit",
                    color: "inherit",
                    cursor: "pointer",
                  }
                : {},
              T
            ),
            a && l
          );
        return (0, o.jsx)(
          "button",
          p(C({}, k), {
            className: O,
            onClick: async (e) => {
              const t = u(v, P);
              if (!a) {
                if ((e.preventDefault(), n)) {
                  const e = n();
                  E(e) && (await e);
                }
                if (f) {
                  !(function (e, t, n) {
                    var o = t,
                      { height: c, width: r } = o,
                      i = _(o, ["height", "width"]);
                    const a = C(
                        {
                          height: c,
                          width: r,
                          location: "no",
                          toolbar: "no",
                          status: "no",
                          directories: "no",
                          menubar: "no",
                          scrollbars: "yes",
                          resizable: "no",
                          centerscreen: "yes",
                          chrome: "yes",
                        },
                        i
                      ),
                      l = window.open(
                        e,
                        "",
                        Object.keys(a)
                          .map((e) => "".concat(e, "=").concat(a[e]))
                          .join(", ")
                      );
                    if (n) {
                      const e = window.setInterval(() => {
                        try {
                          (null === l || l.closed) &&
                            (window.clearInterval(e), n(l));
                        } catch (t) {
                          console.error(t);
                        }
                      }, 1e3);
                    }
                  })(
                    t,
                    C(
                      { height: I, width: L },
                      "windowCenter" === b ? A(L, I) : g(L, I)
                    ),
                    m
                  );
                }
                w && w(e, t);
              }
            },
            ref: s,
            style: y,
            title: d,
            children: c,
          })
        );
      }
      function R(e, t, n, r) {
        function i(c, i) {
          const a = n(c),
            l = C({}, c);
          return (
            Object.keys(a).forEach((e) => {
              delete l[e];
            }),
            (0, o.jsx)(
              P,
              p(C(C({}, r), l), {
                forwardedRef: i,
                networkName: e,
                networkLink: t,
                opts: n(c),
              })
            )
          );
        }
        return (i.displayName = "ShareButton-".concat(e)), (0, c.forwardRef)(i);
      }
      R(
        "email",
        function (e, t) {
          let { subject: n, body: o, separator: c } = t;
          return "mailto:" + f({ subject: n, body: o ? o + c + e : e });
        },
        (e) => ({
          subject: e.subject,
          body: e.body,
          separator: e.separator || " ",
        }),
        {
          openShareDialogOnClick: !1,
          onClick: (e, t) => {
            window.location.href = t;
          },
        }
      ),
        m({
          color: "#0965FE",
          networkName: "facebook",
          path: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z",
        }),
        m({
          color: "#0A7CFF",
          networkName: "facebookmessenger",
          path: "M 53.066406 21.871094 C 52.667969 21.339844 51.941406 21.179688 51.359375 21.496094 L 37.492188 29.058594 L 28.867188 21.660156 C 28.339844 21.207031 27.550781 21.238281 27.054688 21.730469 L 11.058594 37.726562 C 10.539062 38.25 10.542969 39.09375 11.0625 39.613281 C 11.480469 40.027344 12.121094 40.121094 12.640625 39.839844 L 26.503906 32.28125 L 35.136719 39.679688 C 35.667969 40.132812 36.457031 40.101562 36.949219 39.609375 L 52.949219 23.613281 C 53.414062 23.140625 53.464844 22.398438 53.066406 21.871094 Z M 53.066406 21.871094",
        });
      R(
        "facebookmessenger",
        function (e, t) {
          let { appId: n, redirectUri: o, to: c } = t;
          return (
            "https://www.facebook.com/dialog/send" +
            f({ link: e, redirect_uri: o || e, app_id: n, to: c })
          );
        },
        (e) => ({ appId: e.appId, redirectUri: e.redirectUri, to: e.to }),
        { windowWidth: 1e3, windowHeight: 820 }
      );
      class T extends Error {
        constructor(e) {
          super(e), (this.name = "AssertionError");
        }
      }
      function v(e, t) {
        if (!e) throw new T(t);
      }
      const I = R(
        "facebook",
        function (e, t) {
          let { hashtag: n } = t;
          return (
            v(e, "facebook.url"),
            "https://www.facebook.com/sharer/sharer.php" +
              f({ u: e, hashtag: n })
          );
        },
        (e) => ({ hashtag: e.hashtag }),
        { windowWidth: 550, windowHeight: 400 }
      );
      function b(e) {
        var t = e,
          { children: n = (e) => e, className: i, getCount: a, url: l } = t,
          s = _(t, ["children", "className", "getCount", "url"]);
        const d = (function () {
            const e = (0, c.useRef)(!1);
            return (
              (0, c.useEffect)(
                () => (
                  (e.current = !0),
                  () => {
                    e.current = !1;
                  }
                ),
                []
              ),
              (0, c.useCallback)(() => e.current, [])
            );
          })(),
          [u, h] = (0, c.useState)(void 0),
          [w, m] = (0, c.useState)(!1);
        return (
          (0, c.useEffect)(() => {
            m(!0),
              a(l, (e) => {
                d() && (h(e), m(!1));
              });
          }, [l]),
          (0, o.jsx)(
            "span",
            p(C({ className: r("react-share__ShareCount", i) }, s), {
              children: !w && void 0 !== u && n(u),
            })
          )
        );
      }
      function L(e) {
        const t = (t) => (0, o.jsx)(b, C({ getCount: e }, t));
        return (t.displayName = "ShareCount(".concat(e.name, ")")), t;
      }
      L(function (e, t) {
        const n = "https://graph.facebook.com/?id=".concat(
          e,
          "&fields=og_object{engagement}"
        );
        i(n, (e, n) => {
          t(
            !e && n && n.og_object && n.og_object.engagement
              ? n.og_object.engagement.count
              : void 0
          );
        });
      }),
        m({
          color: "#009ad9",
          networkName: "hatena",
          path: "M 36.164062 33.554688 C 34.988281 32.234375 33.347656 31.5 31.253906 31.34375 C 33.125 30.835938 34.476562 30.09375 35.335938 29.09375 C 36.191406 28.09375 36.609375 26.78125 36.609375 25.101562 C 36.628906 23.875 36.332031 22.660156 35.75 21.578125 C 35.160156 20.558594 34.292969 19.71875 33.253906 19.160156 C 32.304688 18.640625 31.175781 18.265625 29.847656 18.042969 C 28.523438 17.824219 26.195312 17.730469 22.867188 17.730469 L 14.769531 17.730469 L 14.769531 47.269531 L 23.113281 47.269531 C 26.46875 47.269531 28.886719 47.15625 30.367188 46.929688 C 31.851562 46.695312 33.085938 46.304688 34.085938 45.773438 C 35.289062 45.148438 36.28125 44.179688 36.933594 42.992188 C 37.597656 41.796875 37.933594 40.402344 37.933594 38.816406 C 37.933594 36.621094 37.347656 34.867188 36.164062 33.554688 Z M 22.257812 24.269531 L 23.984375 24.269531 C 25.988281 24.269531 27.332031 24.496094 28.015625 24.945312 C 28.703125 25.402344 29.042969 26.183594 29.042969 27.285156 C 29.042969 28.390625 28.664062 29.105469 27.9375 29.550781 C 27.210938 29.992188 25.84375 30.199219 23.855469 30.199219 L 22.257812 30.199219 Z M 29.121094 41.210938 C 28.328125 41.691406 26.976562 41.925781 25.078125 41.925781 L 22.257812 41.925781 L 22.257812 35.488281 L 25.195312 35.488281 C 27.144531 35.488281 28.496094 35.738281 29.210938 36.230469 C 29.925781 36.726562 30.304688 37.582031 30.304688 38.832031 C 30.304688 40.078125 29.914062 40.742188 29.105469 41.222656 Z M 29.121094 41.210938 M 46.488281 39.792969 C 44.421875 39.792969 42.742188 41.46875 42.742188 43.535156 C 42.742188 45.605469 44.421875 47.28125 46.488281 47.28125 C 48.554688 47.28125 50.230469 45.605469 50.230469 43.535156 C 50.230469 41.46875 48.554688 39.792969 46.488281 39.792969 Z M 46.488281 39.792969 M 43.238281 17.730469 L 49.738281 17.730469 L 49.738281 37.429688 L 43.238281 37.429688 Z M 43.238281 17.730469 ",
        });
      R(
        "hatena",
        function (e, t) {
          let { title: n } = t;
          return (
            v(e, "hatena.url"),
            "http://b.hatena.ne.jp/add?mode=confirm&url="
              .concat(e, "&title=")
              .concat(n)
          );
        },
        (e) => ({ title: e.title }),
        { windowWidth: 660, windowHeight: 460, windowPosition: "windowCenter" }
      );
      L(function (e, t) {
        i(
          "https://bookmark.hatenaapis.com/count/entry" + f({ url: e }),
          (e, n) => {
            t(null != n ? n : void 0);
          }
        );
      }),
        m({
          color: "#1F1F1F",
          networkName: "instapaper",
          path: "M35.688 43.012c0 2.425.361 2.785 3.912 3.056V48H24.401v-1.932c3.555-.27 3.912-.63 3.912-3.056V20.944c0-2.379-.36-2.785-3.912-3.056V16H39.6v1.888c-3.55.27-3.912.675-3.912 3.056v22.068h.001z",
        });
      R(
        "instapaper",
        function (e, t) {
          let { title: n, description: o } = t;
          return (
            v(e, "instapaper.url"),
            "http://www.instapaper.com/hello2" +
              f({ url: e, title: n, description: o })
          );
        },
        (e) => ({ title: e.title, description: e.description }),
        { windowWidth: 500, windowHeight: 500, windowPosition: "windowCenter" }
      ),
        m({
          color: "#00b800",
          networkName: "line",
          path: "M52.62 30.138c0 3.693-1.432 7.019-4.42 10.296h.001c-4.326 4.979-14 11.044-16.201 11.972-2.2.927-1.876-.591-1.786-1.112l.294-1.765c.069-.527.142-1.343-.066-1.865-.232-.574-1.146-.872-1.817-1.016-9.909-1.31-17.245-8.238-17.245-16.51 0-9.226 9.251-16.733 20.62-16.733 11.37 0 20.62 7.507 20.62 16.733zM27.81 25.68h-1.446a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-8.985a.402.402 0 0 0-.402-.401zm9.956 0H36.32a.402.402 0 0 0-.402.401v5.338L31.8 25.858a.39.39 0 0 0-.031-.04l-.002-.003-.024-.025-.008-.007a.313.313 0 0 0-.032-.026.255.255 0 0 1-.021-.014l-.012-.007-.021-.012-.013-.006-.023-.01-.013-.005-.024-.008-.014-.003-.023-.005-.017-.002-.021-.003-.021-.002h-1.46a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-5.337l4.123 5.568c.028.04.063.072.101.099l.004.003a.236.236 0 0 0 .025.015l.012.006.019.01a.154.154 0 0 1 .019.008l.012.004.028.01.005.001a.442.442 0 0 0 .104.013h1.446a.4.4 0 0 0 .401-.4v-8.985a.402.402 0 0 0-.401-.401zm-13.442 7.537h-3.93v-7.136a.401.401 0 0 0-.401-.401h-1.447a.4.4 0 0 0-.401.401v8.984a.392.392 0 0 0 .123.29c.072.068.17.111.278.111h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401zm21.429-5.287c.222 0 .401-.18.401-.402v-1.446a.401.401 0 0 0-.401-.402h-5.778a.398.398 0 0 0-.279.113l-.005.004-.006.008a.397.397 0 0 0-.111.276v8.984c0 .108.043.206.112.278l.005.006a.401.401 0 0 0 .284.117h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401h-3.93v-1.519h3.93c.222 0 .401-.18.401-.402V29.85a.401.401 0 0 0-.401-.402h-3.93V27.93h3.93z",
        });
      R(
        "line",
        function (e, t) {
          let { title: n } = t;
          return (
            v(e, "line.url"),
            "https://social-plugins.line.me/lineit/share" +
              f({ url: e, text: n })
          );
        },
        (e) => ({ title: e.title }),
        { windowWidth: 500, windowHeight: 500 }
      ),
        m({
          color: "#0077B5",
          networkName: "linkedin",
          path: "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z",
        });
      const k = R(
        "linkedin",
        function (e, t) {
          let { title: n, summary: o, source: c } = t;
          return (
            v(e, "linkedin.url"),
            "https://linkedin.com/shareArticle" +
              f({ url: e, mini: "true", title: n, summary: o, source: c })
          );
        },
        (e) => {
          let { title: t, summary: n, source: o } = e;
          return { title: t, summary: n, source: o };
        },
        { windowWidth: 750, windowHeight: 600 }
      );
      m({
        color: "#21A5D8",
        networkName: "livejournal",
        path: "M18.3407821,28.1764706 L21.9441341,31.789916 L33.0055865,42.882353 C33.0055865,42.882353 33.0893855,42.9663866 33.0893855,42.9663866 L46.6648046,47 C46.6648046,47 46.6648046,47 46.7486034,47 C46.8324022,47 46.8324022,47 46.9162012,46.9159664 C47,46.8319327 47,46.8319327 47,46.7478991 L42.9776536,33.1344537 C42.9776536,33.1344537 42.9776536,33.1344537 42.8938548,33.0504202 L31.1620111,21.3697479 L31.1620111,21.3697479 L28.1452514,18.2605042 C27.3072626,17.4201681 26.5530726,17 25.7150838,17 C24.2905028,17 23.0335195,18.3445378 21.5251397,19.8571429 C21.273743,20.1092437 20.9385475,20.4453781 20.6871508,20.697479 C20.3519553,21.0336134 20.1005586,21.2857143 19.849162,21.5378151 C18.3407821,22.9663866 17.0837989,24.2268908 17,25.7394958 C17.0837989,26.4957983 17.5027933,27.3361345 18.3407821,28.1764706 Z M39.9012319,39.6134454 C39.7336341,39.4453781 39.4822374,37.6806724 40.2364275,36.8403362 C40.9906174,36.0840337 41.6610084,36 42.1638017,36 C42.3313995,36 42.4989973,36 42.5827961,36 L44.8453659,43.5630253 L43.5883828,44.8235295 L36.0464833,42.5546218 C35.9626843,42.2184874 35.8788855,41.2100841 36.8844722,40.2016807 C37.2196676,39.8655463 37.8900587,39.6134454 38.5604498,39.6134454 C39.147042,39.6134454 39.5660364,39.7815126 39.5660364,39.7815126 C39.6498353,39.8655463 39.8174331,39.8655463 39.8174331,39.7815126 C39.9850307,39.7815126 39.9850307,39.697479 39.9012319,39.6134454 Z",
      });
      R(
        "livejournal",
        function (e, t) {
          let { title: n, description: o } = t;
          return (
            v(e, "livejournal.url"),
            "https://www.livejournal.com/update.bml" +
              f({ subject: n, event: o })
          );
        },
        (e) => ({ title: e.title, description: e.description }),
        { windowWidth: 660, windowHeight: 460 }
      ),
        m({
          color: "#168DE2",
          networkName: "mailru",
          path: "M39.7107745,17 C41.6619755,17 43.3204965,18.732852 43.3204965,21.0072202 C43.3204965,23.2815885 41.7595357,25.0144404 39.7107745,25.0144404 C37.7595732,25.0144404 36.1010522,23.2815885 36.1010522,21.0072202 C36.1010522,18.732852 37.7595732,17 39.7107745,17 Z M24.3938451,17 C26.3450463,17 28.0035672,18.732852 28.0035672,21.0072202 C28.0035672,23.2815885 26.4426063,25.0144404 24.3938451,25.0144404 C22.4426439,25.0144404 20.7841229,23.2815885 20.7841229,21.0072202 C20.7841229,18.732852 22.4426439,17 24.3938451,17 Z M51.9057817,43.4259928 C51.7106617,44.0758123 51.4179815,44.6173285 50.9301812,44.9422383 C50.637501,45.1588448 50.2472607,45.267148 49.8570205,45.267148 C49.07654,45.267148 48.3936197,44.833935 48.0033795,44.0758123 L46.2472985,40.7184115 L45.759498,41.2599278 C42.5400162,44.9422383 37.466893,47 32.0035297,47 C26.5401664,47 21.5646034,44.9422383 18.2475614,41.2599278 L17.7597611,40.7184115 L16.00368,44.0758123 C15.6134398,44.833935 14.9305194,45.267148 14.1500389,45.267148 C13.7597986,45.267148 13.3695584,45.1588448 13.0768782,44.9422383 C12.0037176,44.2924187 11.7110374,42.7761733 12.2963978,41.5848375 L16.7841605,33.0288807 C17.1744007,32.270758 17.8573211,31.8375453 18.6378016,31.8375453 C19.0280418,31.8375453 19.4182821,31.9458485 19.7109623,32.1624548 C20.7841229,32.8122743 21.0768031,34.3285197 20.4914427,35.5198555 L20.1012025,36.2779783 L20.2963226,36.602888 C22.4426439,39.9602888 27.0279667,42.234657 31.9059697,42.234657 C36.7839727,42.234657 41.3692955,40.068592 43.5156167,36.602888 L43.7107367,36.2779783 L43.3204965,35.6281587 C43.0278165,35.0866425 42.9302562,34.436823 43.1253765,33.7870035 C43.3204965,33.137184 43.6131767,32.5956678 44.100977,32.270758 C44.3936572,32.0541515 44.7838975,31.9458485 45.1741377,31.9458485 C45.9546182,31.9458485 46.6375385,32.3790613 47.0277787,33.137184 L51.5155415,41.6931408 C52.003342,42.234657 52.100902,42.8844765 51.9057817,43.4259928 Z",
        });
      R(
        "mailru",
        function (e, t) {
          let { title: n, description: o, imageUrl: c } = t;
          return (
            v(e, "mailru.url"),
            "https://connect.mail.ru/share" +
              f({ url: e, title: n, description: o, image_url: c })
          );
        },
        (e) => ({
          title: e.title,
          description: e.description,
          imageUrl: e.imageUrl,
        }),
        { windowWidth: 660, windowHeight: 460 }
      ),
        m({
          color: "#F97400",
          networkName: "ok",
          path: "M39,30c-1,0-3,2-7,2s-6-2-7-2c-1.1,0-2,0.9-2,2c0,1,0.6,1.5,1,1.7c1.2,0.7,5,2.3,5,2.3l-4.3,5.4   c0,0-0.8,0.9-0.8,1.6c0,1.1,0.9,2,2,2c1,0,1.5-0.7,1.5-0.7S32,39,32,39c0,0,4.5,5.3,4.5,5.3S37,45,38,45c1.1,0,2-0.9,2-2   c0-0.6-0.8-1.6-0.8-1.6L35,36c0,0,3.8-1.6,5-2.3c0.4-0.3,1-0.7,1-1.7C41,30.9,40.1,30,39,30z M32,15c-3.9,0-7,3.1-7,7s3.1,7,7,7c3.9,0,7-3.1,7-7S35.9,15,32,15z M32,25.5   c-1.9,0-3.5-1.6-3.5-3.5c0-1.9,1.6-3.5,3.5-3.5c1.9,0,3.5,1.6,3.5,3.5C35.5,23.9,33.9,22.5,35,22.5z ",
        });
      R(
        "ok",
        function (e, t) {
          let { title: n, description: o, image: c } = t;
          return (
            v(e, "ok.url"),
            "https://connect.ok.ru/offer" +
              f({ url: e, title: n, description: o, imageUrl: c })
          );
        },
        (e) => ({ title: e.title, description: e.description, image: e.image }),
        { windowWidth: 588, windowHeight: 480, windowPosition: "screenCenter" }
      );
      L(function (e, t) {
        window.OK ||
          (window.OK = {
            Share: {
              count: function (e, t) {
                var n, o;
                null == (o = (n = window.OK.callbacks)[e]) || o.call(n, t);
              },
            },
            callbacks: [],
          });
        const n = window.OK.callbacks.length;
        return (
          (window.ODKL = {
            updateCount(e, t) {
              var n, o;
              const c =
                "" === e ? 0 : parseInt(e.replace("react-share-", ""), 10);
              null == (o = (n = window.OK.callbacks)[c]) ||
                o.call(n, "" === t ? void 0 : parseInt(t, 10));
            },
          }),
          window.OK.callbacks.push(t),
          i(
            "https://connect.ok.ru/dk" +
              f({ "st.cmd": "extLike", uid: "react-share-".concat(n), ref: e })
          )
        );
      }),
        m({
          color: "#E60023",
          networkName: "pinterest",
          path: "M32,16c-8.8,0-16,7.2-16,16c0,6.6,3.9,12.2,9.6,14.7c0-1.1,0-2.5,0.3-3.7 c0.3-1.3,2.1-8.7,2.1-8.7s-0.5-1-0.5-2.5c0-2.4,1.4-4.1,3.1-4.1c1.5,0,2.2,1.1,2.2,2.4c0,1.5-0.9,3.7-1.4,5.7 c-0.4,1.7,0.9,3.1,2.5,3.1c3,0,5.1-3.9,5.1-8.5c0-3.5-2.4-6.1-6.7-6.1c-4.9,0-7.9,3.6-7.9,7.7c0,1.4,0.4,2.4,1.1,3.1 c0.3,0.3,0.3,0.5,0.2,0.9c-0.1,0.3-0.3,1-0.3,1.3c-0.1,0.4-0.4,0.6-0.8,0.4c-2.2-0.9-3.3-3.4-3.3-6.1c0-4.5,3.8-10,11.4-10 c6.1,0,10.1,4.4,10.1,9.2c0,6.3-3.5,11-8.6,11c-1.7,0-3.4-0.9-3.9-2c0,0-0.9,3.7-1.1,4.4c-0.3,1.2-1,2.5-1.6,3.4 c1.4,0.4,3,0.7,4.5,0.7c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16z",
        });
      R(
        "pinterest",
        function (e, t) {
          let { media: n, description: o, pinId: c } = t;
          return c
            ? "https://pinterest.com/pin/".concat(c, "/repin/x/")
            : (v(e, "pinterest.url"),
              v(n, "pinterest.media"),
              "https://pinterest.com/pin/create/button/" +
                f({ url: e, media: n, description: o }));
        },
        (e) => ({ media: e.media, description: e.description, pinId: e.pinId }),
        { windowWidth: 1e3, windowHeight: 730 }
      );
      L(function (e, t) {
        i(
          "https://api.pinterest.com/v1/urls/count.json" + f({ url: e }),
          (e, n) => {
            t(n ? n.count : void 0);
          }
        );
      }),
        m({
          color: "#EF3F56",
          networkName: "pocket",
          path: "M41.084 29.065l-7.528 7.882a2.104 2.104 0 0 1-1.521.666 2.106 2.106 0 0 1-1.522-.666l-7.528-7.882c-.876-.914-.902-2.43-.065-3.384.84-.955 2.228-.987 3.1-.072l6.015 6.286 6.022-6.286c.88-.918 2.263-.883 3.102.071.841.938.82 2.465-.06 3.383l-.015.002zm6.777-10.976C47.463 16.84 46.361 16 45.14 16H18.905c-1.2 0-2.289.82-2.716 2.044-.125.363-.189.743-.189 1.125v10.539l.112 2.096c.464 4.766 2.73 8.933 6.243 11.838.06.053.125.102.19.153l.04.033c1.882 1.499 3.986 2.514 6.259 3.014a14.662 14.662 0 0 0 6.13.052c.118-.042.235-.065.353-.087.03 0 .065-.022.098-.042a15.395 15.395 0 0 0 6.011-2.945l.039-.045.18-.153c3.502-2.902 5.765-7.072 6.248-11.852L48 29.674v-10.52c0-.366-.041-.728-.161-1.08l.022.015z",
        });
      R(
        "pocket",
        function (e, t) {
          let { title: n } = t;
          return (
            v(e, "pocket.url"),
            "https://getpocket.com/save" + f({ url: e, title: n })
          );
        },
        (e) => ({ title: e.title }),
        { windowWidth: 500, windowHeight: 500 }
      ),
        m({
          color: "#FF5700",
          networkName: "reddit",
          path: "M 53.34375 32 C 53.277344 30.160156 52.136719 28.53125 50.429688 27.839844 C 48.722656 27.148438 46.769531 27.523438 45.441406 28.800781 C 41.800781 26.324219 37.519531 24.957031 33.121094 24.863281 L 35.199219 14.878906 L 42.046875 16.320312 C 42.214844 17.882812 43.496094 19.09375 45.066406 19.171875 C 46.636719 19.253906 48.03125 18.183594 48.359375 16.644531 C 48.6875 15.105469 47.847656 13.558594 46.382812 12.992188 C 44.914062 12.425781 43.253906 13.007812 42.464844 14.367188 L 34.625 12.800781 C 34.363281 12.742188 34.09375 12.792969 33.871094 12.9375 C 33.648438 13.082031 33.492188 13.308594 33.441406 13.566406 L 31.070312 24.671875 C 26.617188 24.738281 22.277344 26.105469 18.59375 28.609375 C 17.242188 27.339844 15.273438 26.988281 13.570312 27.707031 C 11.863281 28.429688 10.746094 30.089844 10.71875 31.941406 C 10.691406 33.789062 11.757812 35.484375 13.441406 36.257812 C 13.402344 36.726562 13.402344 37.195312 13.441406 37.664062 C 13.441406 44.832031 21.792969 50.65625 32.097656 50.65625 C 42.398438 50.65625 50.753906 44.832031 50.753906 37.664062 C 50.789062 37.195312 50.789062 36.726562 50.753906 36.257812 C 52.363281 35.453125 53.371094 33.800781 53.34375 32 Z M 21.34375 35.199219 C 21.34375 33.433594 22.777344 32 24.542969 32 C 26.3125 32 27.742188 33.433594 27.742188 35.199219 C 27.742188 36.96875 26.3125 38.398438 24.542969 38.398438 C 22.777344 38.398438 21.34375 36.96875 21.34375 35.199219 Z M 39.9375 44 C 37.664062 45.710938 34.871094 46.582031 32.03125 46.464844 C 29.191406 46.582031 26.398438 45.710938 24.128906 44 C 23.847656 43.65625 23.871094 43.15625 24.183594 42.839844 C 24.5 42.527344 25 42.503906 25.34375 42.785156 C 27.269531 44.195312 29.617188 44.90625 32 44.800781 C 34.386719 44.929688 36.746094 44.242188 38.6875 42.847656 C 39.042969 42.503906 39.605469 42.511719 39.953125 42.863281 C 40.296875 43.21875 40.289062 43.785156 39.9375 44.128906 Z M 39.359375 38.527344 C 37.59375 38.527344 36.160156 37.09375 36.160156 35.328125 C 36.160156 33.5625 37.59375 32.128906 39.359375 32.128906 C 41.128906 32.128906 42.558594 33.5625 42.558594 35.328125 C 42.59375 36.203125 42.269531 37.054688 41.65625 37.6875 C 41.046875 38.316406 40.203125 38.664062 39.328125 38.65625 Z M 39.359375 38.527344",
        });
      const O = R(
        "reddit",
        function (e, t) {
          let { title: n } = t;
          return (
            v(e, "reddit.url"),
            "https://www.reddit.com/submit" + f({ url: e, title: n })
          );
        },
        (e) => ({ title: e.title }),
        { windowWidth: 660, windowHeight: 460, windowPosition: "windowCenter" }
      );
      R(
        "gab",
        function (e, t) {
          let { title: n } = t;
          return (
            v(e, "gab.url"), "https://gab.com/compose" + f({ url: e, text: n })
          );
        },
        (e) => ({ title: e.title }),
        { windowWidth: 660, windowHeight: 640, windowPosition: "windowCenter" }
      ),
        m({
          color: "#00d178",
          networkName: "gab",
          path: "m17.0506,23.97457l5.18518,0l0,14.23933c0,6.82699 -3.72695,10.09328 -9.33471,10.09328c-2.55969,0 -4.82842,-0.87286 -6.22084,-2.0713l2.07477,-3.88283c1.19844,0.81051 2.33108,1.29543 3.85511,1.29543c2.75366,0 4.44049,-1.97432 4.44049,-4.82149l0,-0.87286c-1.16728,1.39242 -2.81947,2.0713 -4.63446,2.0713c-4.44048,0 -7.81068,-3.68885 -7.81068,-8.28521c0,-4.59289 3.37019,-8.28174 7.81068,-8.28174c1.81499,0 3.46718,0.67888 4.63446,2.0713l0,-1.55521zm-3.62997,11.39217c1.97777,0 3.62997,-1.6522 3.62997,-3.62652c0,-1.97432 -1.6522,-3.62305 -3.62997,-3.62305c-1.97778,0 -3.62997,1.64873 -3.62997,3.62305c0,1.97432 1.65219,3.62652 3.62997,3.62652zm25.7077,4.13913l-5.18518,0l0,-1.29197c-1.00448,1.13264 -2.3969,1.81152 -4.21188,1.81152c-3.62997,0 -5.63893,-2.52504 -5.63893,-5.4034c0,-4.27076 5.251,-5.85715 9.78846,-4.49937c-0.09698,-1.39241 -0.9733,-2.39343 -2.78829,-2.39343c-1.26426,0 -2.72248,0.48492 -3.62997,1.00102l-1.5552,-3.72003c1.19844,-0.77587 3.40136,-1.55174 5.96452,-1.55174c3.78931,0 7.25648,2.13365 7.25648,7.95962l0,8.08777zm-5.18518,-6.14809c-2.42806,-0.77587 -4.66563,-0.3533 -4.66563,1.36124c0,1.00101 0.84168,1.6799 1.84616,1.6799c1.20191,0 2.56315,-0.96984 2.81947,-3.04115zm13.00626,-17.66495l0,9.83695c1.16727,-1.39242 2.81946,-2.0713 4.63445,-2.0713c4.44048,0 7.81068,3.68885 7.81068,8.28174c0,4.59636 -3.37019,8.28521 -7.81068,8.28521c-1.81499,0 -3.46718,-0.67888 -4.63445,-2.0713l0,1.55174l-5.18519,0l0,-23.81304l5.18519,0zm3.62997,19.67391c1.97777,0 3.62997,-1.6522 3.62997,-3.62652c0,-1.97432 -1.6522,-3.62305 -3.62997,-3.62305c-1.97778,0 -3.62997,1.64873 -3.62997,3.62305c0,1.97432 1.65219,3.62652 3.62997,3.62652zm0,0",
        });
      L(function (e, t) {
        const n = "https://www.reddit.com/api/info.json?limit=1&url=".concat(e);
        i(n, { param: "jsonp" }, (e, n) => {
          t(
            !e &&
              n &&
              n.data &&
              n.data.children.length > 0 &&
              n.data.children[0].data.score
              ? n.data.children[0].data.score
              : void 0
          );
        });
      }),
        m({
          color: "#25A3E3",
          networkName: "telegram",
          path: "m45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957",
        });
      R(
        "telegram",
        function (e, t) {
          let { title: n } = t;
          return (
            v(e, "telegram.url"),
            "https://telegram.me/share/url" + f({ url: e, text: n })
          );
        },
        (e) => ({ title: e.title }),
        { windowWidth: 550, windowHeight: 400 }
      ),
        m({
          color: "#34526f",
          networkName: "tumblr",
          path: "M39.2,41c-0.6,0.3-1.6,0.5-2.4,0.5c-2.4,0.1-2.9-1.7-2.9-3v-9.3h6v-4.5h-6V17c0,0-4.3,0-4.4,0 c-0.1,0-0.2,0.1-0.2,0.2c-0.3,2.3-1.4,6.4-5.9,8.1v3.9h3V39c0,3.4,2.5,8.1,9,8c2.2,0,4.7-1,5.2-1.8L39.2,41z",
        });
      R(
        "tumblr",
        function (e, t) {
          let { title: n, caption: o, tags: c, posttype: r } = t;
          return (
            v(e, "tumblr.url"),
            "https://www.tumblr.com/widgets/share/tool" +
              f({ canonicalUrl: e, title: n, caption: o, tags: c, posttype: r })
          );
        },
        (e) => ({
          title: e.title,
          tags: (e.tags || []).join(","),
          caption: e.caption,
          posttype: e.posttype || "link",
        }),
        { windowWidth: 660, windowHeight: 460 }
      );
      L(function (e, t) {
        return i(
          "https://api.tumblr.com/v2/share/stats" + f({ url: e }),
          (e, n) => {
            t(!e && n && n.response ? n.response.note_count : void 0);
          }
        );
      }),
        m({
          color: "#00aced",
          networkName: "twitter",
          path: "M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z",
        });
      const y = R(
        "twitter",
        function (e, t) {
          let { title: n, via: o, hashtags: c = [], related: r = [] } = t;
          return (
            v(e, "twitter.url"),
            v(Array.isArray(c), "twitter.hashtags is not an array"),
            v(Array.isArray(r), "twitter.related is not an array"),
            "https://twitter.com/intent/tweet" +
              f({
                url: e,
                text: n,
                via: o,
                hashtags: c.length > 0 ? c.join(",") : void 0,
                related: r.length > 0 ? r.join(",") : void 0,
              })
          );
        },
        (e) => ({
          hashtags: e.hashtags,
          title: e.title,
          via: e.via,
          related: e.related,
        }),
        { windowWidth: 550, windowHeight: 400 }
      );
      m({
        color: "#7360f2",
        networkName: "viber",
        path: "m31.0,12.3c9.0,0.2 16.4,6.2 18.0,15.2c0.2,1.5 0.3,3.0 0.4,4.6a1.0,1.0 0 0 1 -0.8,1.2l-0.1,0a1.1,1.1 0 0 1 -1.0,-1.2l0,0c-0.0,-1.2 -0.1,-2.5 -0.3,-3.8a16.1,16.1 0 0 0 -13.0,-13.5c-1.0,-0.1 -2.0,-0.2 -3.0,-0.3c-0.6,-0.0 -1.4,-0.1 -1.6,-0.8a1.1,1.1 0 0 1 0.9,-1.2l0.6,0l0.0,-0.0zm10.6,39.2a19.9,19.9 0 0 1 -2.1,-0.6c-6.9,-2.9 -13.2,-6.6 -18.3,-12.2a47.5,47.5 0 0 1 -7.0,-10.7c-0.8,-1.8 -1.6,-3.7 -2.4,-5.6c-0.6,-1.7 0.3,-3.4 1.4,-4.7a11.3,11.3 0 0 1 3.7,-2.8a2.4,2.4 0 0 1 3.0,0.7a39.0,39.0 0 0 1 4.7,6.5a3.1,3.1 0 0 1 -0.8,4.2c-0.3,0.2 -0.6,0.5 -1.0,0.8a3.3,3.3 0 0 0 -0.7,0.7a2.1,2.1 0 0 0 -0.1,1.9c1.7,4.9 4.7,8.7 9.7,10.8a5.0,5.0 0 0 0 2.5,0.6c1.5,-0.1 2.0,-1.8 3.1,-2.7a2.9,2.9 0 0 1 3.5,-0.1c1.1,0.7 2.2,1.4 3.3,2.2a37.8,37.8 0 0 1 3.1,2.4a2.4,2.4 0 0 1 0.7,3.0a10.4,10.4 0 0 1 -4.4,4.8a10.8,10.8 0 0 1 -1.9,0.6c-0.7,-0.2 0.6,-0.2 0,0l0.0,0l0,-0.0zm3.1,-21.4a4.2,4.2 0 0 1 -0.0,0.6a1.0,1.0 0 0 1 -1.9,0.1a2.7,2.7 0 0 1 -0.1,-0.8a10.9,10.9 0 0 0 -1.4,-5.5a10.2,10.2 0 0 0 -4.2,-4.0a12.3,12.3 0 0 0 -3.4,-1.0c-0.5,-0.0 -1.0,-0.1 -1.5,-0.2a0.9,0.9 0 0 1 -0.9,-1.0l0,-0.1a0.9,0.9 0 0 1 0.9,-0.9l0.1,0a14.1,14.1 0 0 1 5.9,1.5a11.9,11.9 0 0 1 6.5,9.3c0,0.1 0.0,0.3 0.0,0.5c0,0.4 0.0,0.9 0.0,1.5l0,0l0.0,0.0zm-5.6,-0.2a1.1,1.1 0 0 1 -1.2,-0.9l0,-0.1a11.3,11.3 0 0 0 -0.2,-1.4a4.0,4.0 0 0 0 -1.5,-2.3a3.9,3.9 0 0 0 -1.2,-0.5c-0.5,-0.1 -1.1,-0.1 -1.6,-0.2a1.0,1.0 0 0 1 -0.8,-1.1l0,0l0,0a1.0,1.0 0 0 1 1.1,-0.8c3.4,0.2 6.0,2.0 6.3,6.2a2.8,2.8 0 0 1 0,0.8a0.8,0.8 0 0 1 -0.8,0.7l0,0l0.0,-0.0z",
      });
      R(
        "viber",
        function (e, t) {
          let { title: n, separator: o } = t;
          return (
            v(e, "viber.url"),
            "viber://forward" + f({ text: n ? n + o + e : e })
          );
        },
        (e) => ({ title: e.title, separator: e.separator || " " }),
        { windowWidth: 660, windowHeight: 460 }
      ),
        m({
          color: "#4C75A3",
          networkName: "vk",
          path: "M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z",
        });
      R(
        "vk",
        function (e, t) {
          let { title: n, image: o, noParse: c, noVkLinks: r } = t;
          return (
            v(e, "vk.url"),
            "https://vk.com/share.php" +
              f({
                url: e,
                title: n,
                image: o,
                noparse: c ? 1 : 0,
                no_vk_links: r ? 1 : 0,
              })
          );
        },
        (e) => ({
          title: e.title,
          image: e.image,
          noParse: e.noParse,
          noVkLinks: e.noVkLinks,
        }),
        { windowWidth: 660, windowHeight: 460 }
      );
      L(function (e, t) {
        window.VK || (window.VK = {}),
          (window.VK.Share = {
            count: (e, t) => {
              var n, o;
              return null ==
                (o = null == (n = window.VK.callbacks) ? void 0 : n[e])
                ? void 0
                : o.call(n, t);
            },
          }),
          (window.VK.callbacks = []);
        const n = window.VK.callbacks.length;
        return (
          window.VK.callbacks.push(t),
          i("https://vk.com/share.php" + f({ act: "count", index: n, url: e }))
        );
      }),
        m({
          color: "#DF2029",
          networkName: "weibo",
          path: "M40.9756152,15.0217119 C40.5000732,15.0546301 39.9999314,15.1204666 39.5325878,15.2192213 C38.6634928,15.4085016 38.0977589,16.2643757 38.2863368,17.1284787 C38.4667163,18.0008129 39.3194143,18.5686519 40.1885094,18.3793715 C42.8613908,17.8115326 45.7720411,18.6427174 47.7316073,20.8153207 C49.6911735,22.996153 50.2077122,25.975254 49.3714112,28.5840234 C49.1008441,29.4316684 49.5763861,30.3533789 50.4208857,30.6249537 C51.2653852,30.8965286 52.1754769,30.4192153 52.4542425,29.5715703 C53.6349013,25.9011885 52.9133876,21.7699494 50.1585171,18.7085538 C48.0923641,16.4042776 45.2063093,15.1533848 42.3530505,15.0217119 C41.8775084,14.9970227 41.4511594,14.9887937 40.9756152,15.0217119 Z M27.9227762,19.8277737 C24.9957268,20.140498 20.863421,22.4365431 17.2312548,26.0822378 C13.2711279,30.0571148 11,34.2871065 11,37.9328012 C11,44.9032373 19.8713401,49.125 28.5786978,49.125 C39.9917329,49.125 47.600423,42.4261409 47.600423,37.1427636 C47.600423,33.9496952 44.9603397,32.1638816 42.549827,31.4149913 C41.9594976,31.2339421 41.5167516,31.1434164 41.8283133,30.3616079 C42.5006339,28.66632 42.6236176,27.1932286 41.8939054,26.1480742 C40.5328692,24.1894405 36.7203236,24.2881952 32.448635,26.0822378 C32.448635,26.0822378 31.1203949,26.6912261 31.4647526,25.6213825 C32.1206742,23.4981576 32.0304845,21.712342 31.0056075,20.6836478 C30.2840938,19.9512176 29.2510184,19.6878718 27.9227762,19.8277737 Z M42.0906819,20.6836478 C41.6233383,20.6589586 41.1723917,20.716566 40.7132466,20.8153207 C39.9671353,20.9716828 39.4997917,21.7781784 39.6637721,22.5270687 C39.8277525,23.275959 40.5574647,23.7450433 41.303576,23.5804521 C42.1972686,23.3911718 43.2057485,23.6380596 43.8616701,24.3704897 C44.5175916,25.1029198 44.6733735,26.0657797 44.3864073,26.9381118 C44.1486363,27.6705419 44.5093932,28.4770397 45.2391054,28.7156963 C45.9688176,28.9461239 46.780521,28.5922524 47.0100936,27.8598223 C47.584026,26.0740087 47.2396661,24.0248493 45.8950269,22.5270687 C44.886547,21.4078489 43.4845162,20.7494842 42.0906819,20.6836478 Z M29.496988,29.9665891 C35.3100922,30.1723275 39.9917329,33.0691319 40.3852858,37.0769272 C40.8362324,41.6607904 35.5970585,45.9319315 28.6442899,46.6232144 C21.6915214,47.3144973 15.6488446,44.154347 15.197898,39.5787128 C14.7469514,34.9948495 20.059916,30.7237084 27.004486,30.0324256 C27.8735831,29.950131 28.6688875,29.9336709 29.496988,29.9665891 Z M25.5614586,34.3776322 C23.183744,34.5916017 20.9372116,35.9577073 19.9205332,37.9328012 C18.5348994,40.6238672 19.9041362,43.6029661 23.0689567,44.582284 C26.340366,45.5945202 30.1857056,44.0638213 31.5303448,41.1587879 C32.8503864,38.3195909 31.1613894,35.3734082 27.9227762,34.5751416 C27.1438688,34.3776322 26.356763,34.3035667 25.5614586,34.3776322 Z M24.052839,38.7228388 C24.3316067,38.7310678 24.5857748,38.8215935 24.8399449,38.9203482 C25.8648218,39.3400561 26.1845841,40.4428158 25.5614586,41.4221338 C24.9219361,42.3932227 23.5690963,42.8623069 22.5442194,42.4096807 C21.5357395,41.9652856 21.2487754,40.8542948 21.8882979,39.9078951 C22.3638421,39.2001542 23.2247386,38.7146097 24.052839,38.7228388 Z",
        });
      R(
        "weibo",
        function (e, t) {
          let { title: n, image: o } = t;
          return (
            v(e, "weibo.url"),
            "http://service.weibo.com/share/share.php" +
              f({ url: e, title: n, pic: o })
          );
        },
        (e) => ({ title: e.title, image: e.image }),
        { windowWidth: 660, windowHeight: 550, windowPosition: "screenCenter" }
      ),
        m({
          color: "#25D366",
          networkName: "whatsapp",
          path: "m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915",
        });
      const S = R(
        "whatsapp",
        function (e, t) {
          let { title: n, separator: o } = t;
          return (
            v(e, "whatsapp.url"),
            "https://" +
              (/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)
                ? "api"
                : "web") +
              ".whatsapp.com/send" +
              f({ text: n ? n + o + e : e })
          );
        },
        (e) => ({ title: e.title, separator: e.separator || " " }),
        { windowWidth: 550, windowHeight: 400 }
      );
      m({
        color: "#4326c4",
        networkName: "workplace",
        path: "M34.019,10.292c0.21,0.017,0.423,0.034,0.636,0.049 c3.657,0.262,6.976,1.464,9.929,3.635c3.331,2.448,5.635,5.65,6.914,9.584c0.699,2.152,0.983,4.365,0.885,6.623 c-0.136,3.171-1.008,6.13-2.619,8.867c-0.442,0.75-0.908,1.492-1.495,2.141c-0.588,0.651-1.29,1.141-2.146,1.383 c-1.496,0.426-3.247-0.283-3.961-1.642c-0.26-0.494-0.442-1.028-0.654-1.548c-1.156-2.838-2.311-5.679-3.465-8.519 c-0.017-0.042-0.037-0.082-0.065-0.145c-0.101,0.245-0.192,0.472-0.284,0.698c-1.237,3.051-2.475,6.103-3.711,9.155 c-0.466,1.153-1.351,1.815-2.538,2.045c-1.391,0.267-2.577-0.154-3.496-1.247c-0.174-0.209-0.31-0.464-0.415-0.717 c-2.128-5.22-4.248-10.442-6.37-15.665c-0.012-0.029-0.021-0.059-0.036-0.104c0.054-0.003,0.103-0.006,0.15-0.006 c1.498-0.001,2.997,0,4.495-0.004c0.12-0.001,0.176,0.03,0.222,0.146c1.557,3.846,3.117,7.691,4.679,11.536 c0.018,0.046,0.039,0.091,0.067,0.159c0.273-0.673,0.536-1.32,0.797-1.968c1.064-2.627,2.137-5.25,3.19-7.883 c0.482-1.208,1.376-1.917,2.621-2.135c1.454-0.255,2.644,0.257,3.522,1.449c0.133,0.18,0.229,0.393,0.313,0.603 c1.425,3.495,2.848,6.991,4.269,10.488c0.02,0.047,0.04,0.093,0.073,0.172c0.196-0.327,0.385-0.625,0.559-0.935 c0.783-1.397,1.323-2.886,1.614-4.461c0.242-1.312,0.304-2.634,0.187-3.962c-0.242-2.721-1.16-5.192-2.792-7.38 c-2.193-2.939-5.086-4.824-8.673-5.625c-1.553-0.346-3.124-0.405-4.705-0.257c-3.162,0.298-6.036,1.366-8.585,3.258 c-3.414,2.534-5.638,5.871-6.623,10.016c-0.417,1.76-0.546,3.547-0.384,5.348c0.417,4.601,2.359,8.444,5.804,11.517 c2.325,2.073,5.037,3.393,8.094,3.989c1.617,0.317,3.247,0.395,4.889,0.242c1-0.094,1.982-0.268,2.952-0.529 c0.04-0.01,0.081-0.018,0.128-0.028c0,1.526,0,3.047,0,4.586c-0.402,0.074-0.805,0.154-1.21,0.221 c-0.861,0.14-1.728,0.231-2.601,0.258c-0.035,0.002-0.071,0.013-0.108,0.021c-0.493,0-0.983,0-1.476,0 c-0.049-0.007-0.1-0.018-0.149-0.022c-0.315-0.019-0.629-0.033-0.945-0.058c-1.362-0.105-2.702-0.346-4.017-0.716 c-3.254-0.914-6.145-2.495-8.66-4.752c-2.195-1.971-3.926-4.29-5.176-6.963c-1.152-2.466-1.822-5.057-1.993-7.774 c-0.014-0.226-0.033-0.451-0.05-0.676c0-0.502,0-1.003,0-1.504c0.008-0.049,0.02-0.099,0.022-0.148 c0.036-1.025,0.152-2.043,0.338-3.052c0.481-2.616,1.409-5.066,2.8-7.331c2.226-3.625,5.25-6.386,9.074-8.254 c2.536-1.24,5.217-1.947,8.037-2.126c0.23-0.015,0.461-0.034,0.691-0.051C33.052,10.292,33.535,10.292,34.019,10.292z",
      });
      R(
        "workplace",
        function (e, t) {
          let { quote: n, hashtag: o } = t;
          return (
            v(e, "workplace.url"),
            "https://work.facebook.com/sharer.php" +
              f({ u: e, quote: n, hashtag: o })
          );
        },
        (e) => ({ quote: e.quote, hashtag: e.hashtag }),
        { windowWidth: 550, windowHeight: 400 }
      ),
        m({
          color: "#000000",
          networkName: "X",
          path: "M 41.116 18.375 h 4.962 l -10.8405 12.39 l 12.753 16.86 H 38.005 l -7.821 -10.2255 L 21.235 47.625 H 16.27 l 11.595 -13.2525 L 15.631 18.375 H 25.87 l 7.0695 9.3465 z m -1.7415 26.28 h 2.7495 L 24.376 21.189 H 21.4255 z",
        });
    },
  },
]);
//# sourceMappingURL=2162.fbd88d77.chunk.js.map
